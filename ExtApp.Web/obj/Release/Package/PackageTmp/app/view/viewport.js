/**
* main view
*/

Ext.define('ExtApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',

    requires: [
        'ExtApp.view.sys.main.Login',
        'ExtApp.view.sys.main.accordion.Index',
        'ExtApp.view.sys.main.desktop.Index',
        'Ext.ux.desktop.ShortcutModel'
    ],

    layout: 'card',

    items: [{
        xtype: 'login' // login view
    }, {
        xtype: 'index' // manage view
    }],

    initComponent: function () { // which view is displayed depending on whether or not the login is performed
        this.callParent();

        var username = Ext.util.Cookies.get('username');
        var layout = this.getLayout();
        if (username == null) { // not logged in
            layout.setActiveItem(0);
        } else { // already logged in
            var tool = Ext.create('ExtApp.util.Style');
            var style = tool.getCurrentStyle();
            if (style == 'accordion') { // collapse panel style
                layout.setActiveItem(1);
            } else if (style == 'desktop') { // Desktop style
                new ExtApp.view.sys.main.desktop.Index();
            } else if (style == 'navigation') { // the navigation bar style
                layout.setActiveItem(2);
            } else {
                layout.setActiveItem(1);
            }
        }
    }
});