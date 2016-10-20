/**
* Notepad module
*/

Ext.define('ExtApp.view.sys.main.desktop.Notepad', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.form.field.HtmlEditor'
    ],

    id: 'notepad',

    init: function () {
        this.launcher = {
            text: 'Notepad',
            iconCls: 'notepad'
        }
    },

    createWindow: function () {
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('notepad');
        if (!win) {
            win = desktop.createWindow({
                id: 'notepad',
                title: 'Notepad',
                width: 600,
                height: 400,
                iconCls: 'notepad',
                animCollapse: false,
                border: false,
                hideMode: 'offsets',

                layout: 'fit',
                items: [
                    {
                        xtype: 'htmleditor',
                        id: 'notepad-editor',
                        value: [
                            'Some <b> rich text</b> <span style="color: rgb(255, 0, 0)">Text</span> show on <u>Here</u><br>',
                            'Try it fast'
                        ].join('')
                    }
                ]
            });
        }
        return win;
    }
});
