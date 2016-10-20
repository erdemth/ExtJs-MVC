/**
* Home view controller
*/

Ext.define('ExtApp.view.sys.main.accordion.IndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.index',

    requires: [
        'ExtApp.view.sys.main.ChangePwd'
    ],

    init: function () { // The page runs after loading
        // Select a style
        var combo = Ext.ComponentQuery.query('index combo[name=style]')[0];
        var tool = Ext.create('ExtApp.util.Style');
        var style = tool.getCurrentStyle();
        combo.select(style);

        // Select a theme
        var combo = Ext.ComponentQuery.query('index combo[name=theme]')[0];
        var tool = Ext.create('ExtApp.util.Theme');
        var theme = tool.getCurrentTheme();
        combo.select(theme);
    },

    onStyleSelect: function () { // Combo box Selects the frame style
        var tool = Ext.create('ExtApp.util.Style');
        var combo = Ext.ComponentQuery.query('index combo[name=style]')[0];
        var value = combo.getValue();
        tool.setStyle(value);
        window.location.reload();
    },

    onThemeSelect: function () { // Combo box Select a theme
        var tool = Ext.create('ExtApp.util.Theme');
        var combo = Ext.ComponentQuery.query('index combo[name=theme]')[0];
        var value = combo.getValue();
        tool.setTheme(value);
    },

    onLogoutClick: function () { // Click the Logout button
        Ext.Msg.confirm('News', 'Log of？', function (btn) {
            if (btn == 'yes') {
                // Clear cookies first
                Ext.util.Cookies.clear('username');

                // Then jump to the login view
                var viewport = Ext.ComponentQuery.query('mainviewport')[0];
                viewport.setActiveItem(0);
            }
        });
    },

    onChangePwdClick: function () { // Click the Change Password button
        Ext.widget('changepwd').show();
    }
});