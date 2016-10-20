
Ext.define('ExtApp.view.sys.main.desktop.BogusMenuModule', {
    extend: 'ExtApp.view.sys.main.desktop.BogusModule',

    init: function () {

        this.launcher = {
            text: 'More Items',
            iconCls: 'bogus',
            handler: function () {
                return false;
            },
            menu: {
                items: []
            }
        };

        for (var i = 0; i < 5; ++i) {
            this.launcher.menu.items.push({
                text: 'Window ' + (++windowIndex),
                iconCls: 'bogus',
                handler: this.createWindow,
                scope: this,
                windowId: windowIndex
            });
        }
    }
});