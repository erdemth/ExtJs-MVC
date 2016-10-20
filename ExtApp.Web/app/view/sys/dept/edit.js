/**
* edit dept
*/

Ext.define('ExtApp.view.sys.dept.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.deptedit',

    requires: [
        'ExtApp.view.sys.dept.EditController'
    ],

    controller: 'deptedit',

    title: 'Edit Dept',
   // width: 500,
    layout: 'fit',
    modal: true,
    iconCls: 'Applicationsidetree',

    items: {
        xtype: 'form',
        border: false,
        //layout: 'column',
        defaults: {
            margin: 10,
            //columnWidth: 0.5
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'ID'
        }, {
            xtype: 'hiddenfield',
            name: 'PID'
        }, {
            xtype: 'textfield',
            name: 'Code',
            fieldLabel: 'Dept Code',
            readOnly: true
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: 'Dept Name',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            name: 'Layer',
            fieldLabel: 'Layer',
            allowBlank: false,
            value: 0
        }, {
            xtype: 'combo',
            store: [[
                0, 'Enable'
            ], [
                -1, 'Disabled'
            ]],
            name: 'Status',
            value: 0,
            editable: false,
            fieldLabel: 'Status'
        }]
    },
    buttons: [{
        text: 'Save',
        iconCls: 'Accept',
        listeners: {
            click: 'onSaveClick'
        }
    }, {
        text: 'Cancel',
        iconCls: 'Cancel',
        listeners: {
            click: 'onCancelClick'
        }
    }]
});