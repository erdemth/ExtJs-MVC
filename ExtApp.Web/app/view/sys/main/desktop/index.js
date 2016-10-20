/**
* Desktop Style
*/

Ext.define('ExtApp.view.sys.main.desktop.Index', {
    extend: 'Ext.ux.desktop.App',

    requires: [ // Introduce the js file
        'Ext.ux.desktop.ShortcutModel',
        'ExtApp.view.sys.main.desktop.Notepad',
        'ExtApp.view.sys.main.desktop.BogusMenuModule',
        'ExtApp.view.sys.main.desktop.BogusModule',
        'ExtApp.view.sys.main.desktop.Settings'
    ],

    getModules: function () { // Get the module
        return [
            new ExtApp.view.sys.main.desktop.Notepad(),
            new ExtApp.view.sys.main.desktop.BogusMenuModule(),
            new ExtApp.view.sys.main.desktop.BogusModule()
        ];
    },

    getDesktopConfig: function () { // Get the desktop settings
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {

            contextMenuItems: [{
                text: 'Personalized Settings',
                handler: me.onSettings, scope: me
            }],

            shortcuts: Ext.create('Ext.data.Store', { // Desktop shortcuts
                model: 'Ext.ux.desktop.ShortcutModel',
                data: [{
                    name: 'Notepad',
                    iconCls: 'notepad-shortcut',
                    module: 'notepad'
                }]
            }),

            wallpaper: '/images/wallpapers/Blue-Sencha.jpg', // desktop background

            wallpaperStretch: false // Background stretching
        });
    },

    getStartConfig: function () { // Start Menu
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Administrator',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text: 'Settings',
                        iconCls: 'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text: 'Log Out',
                        iconCls: 'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () { // Mission Board

        var ret = this.callParent();
        return Ext.apply(ret, {
            quickStart: [{ // Quick Start
                name: 'Notepad',
                iconCls: 'notepad-shortcut',
                module: 'notepad'
            }],
            trayItems: [{ // Palet Area
                xtype: 'trayclock',
                flex: 1
            }]
        });
    },

    onLogout: function () { // Log Out
        Ext.Msg.confirm('News', 'Whether to log off ?', function (btn) {
            if (btn == 'yes') {
                // Clear cookies first
                Ext.util.Cookies.clear('username');

                // refresh page
                window.location.reload();
            }
        });
    },

    onSettings: function () { // Personalized settings
        var dlg = new ExtApp.view.sys.main.desktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});
