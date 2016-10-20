/**
* add to dept
*/

Ext.define('ExtApp.view.sys.dept.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.deptadd',

    requires: [
        'ExtApp.view.sys.dept.AddController'
    ],

    controller: 'deptadd',

    title: 'add to dept',
    layout: 'fit',
    modal: true,
    iconCls: 'Applicationsidetree',

    items: {
        xtype: 'form',
        border: false,
        defaults: {
            margin: 10
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'PID'
        }, {
            xtype: 'textfield',
            name: 'PName',
            fieldLabel: 'Parent Name',
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