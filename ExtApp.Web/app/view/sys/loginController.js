/**
* 登录视图控制器
*/

Ext.define('ExtApp.view.sys.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () { // 点击登录按钮
        var username = Ext.query('input[name=username]')[0].value;
        var password = Ext.query('input[name=password]')[0].value;

        // 调用api控制器
        var mask = new Ext.LoadMask({
            target: this.getView(),
            msg: '正在登录...',
            indicator: true,
            centered: true
        });
        mask.show();
        Ext.Ajax.request({
            url: '/api/Login/Login?username=' + username + '&password=' + password,
            method: 'POST',
            success: function (response, opts) {
                mask.hide();
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    // 登录成功后设置cookies
                    Ext.util.Cookies.set('username', username);

                    // 然后跳转管理界面
                    var viewport = Ext.getCmp('mainViewport');
                    viewport.setActiveItem(1);
                } else {
                    Ext.Msg.alert('消息', obj.Msg);
                }
            },
            failure: function (response, opts) {
                mask.hide();
                Ext.Msg.alert('错误', response.responseText);
            }
        });
    },

    onResetClick: function () { // 点击注销按钮
        Ext.query('input[name=username]')[0].value = '';
        Ext.query('input[name=password]')[0].value = '';
    }
});