/**
* 首页视图控制器
*/

Ext.define('ExtApp.view.sys.IndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.index',

    requires: [
        'ExtApp.view.sys.ChangePwd'
    ],

    init: function () { // 页面加载后运行
        var combo = Ext.getCmp('cboTheme');
        var tool = Ext.create('ExtApp.util.Theme');
        var theme = tool.getCurrentTheme();
        combo.select(theme);
    },

    onThemeSelect: function () { // 组合框选择主题
        var tool = Ext.create('ExtApp.util.Theme');
        var combo = Ext.getCmp('cboTheme');
        var value = combo.getValue();
        tool.setTheme(value);
    },

    onLogoutClick: function () { // 点击注销按钮
        Ext.Msg.confirm('消息', '是否注销登录？', function (btn) {
            if (btn == 'yes') {
                // 先清空cookies
                Ext.util.Cookies.clear('username');

                // 然后跳转登录视图
                var viewport = Ext.getCmp('mainViewport');
                viewport.setActiveItem(0);
            }
        });
    },

    onChangePwdClick: function () { // 点击修改密码按钮
        Ext.widget('changepwd').show();
    }
});