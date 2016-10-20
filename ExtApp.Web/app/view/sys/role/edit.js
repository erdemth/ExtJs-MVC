/**
* Edit Role
*/

Ext.define('ExtApp.view.sys.role.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.roleedit',

    requires: [
        'ExtApp.view.sys.role.EditController'
    ],

    controller: 'roleedit',

    title: 'Edit Role',
    layout: 'fit',
    iconCls: 'Group',
    width: 500,
    modal: true,

    items: {
        xtype: 'form',
        layout: 'column',
        defaults: {
            margin: '5 15 5 15',
            columnWidth: 0.5
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 40
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'ID'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Code',
            name: 'Code',
            margin: '15 5 5 15',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'Name',
            margin: '15 15 5 5',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Layer',
            name: 'Layer',
            value: 0,
            allowBlank: false
        }, {
            xtype: 'combo',
            fieldLabel: 'Status',
            name: 'Status',
            store: [[
                0, 'Enable'
            ], [
                -1, 'Disabled'
            ]],
            value: 0,
            editable: false
        }, {
            xtype: 'textarea',
            fieldLabel: 'Memo',
            name: 'Memo',
            columnWidth: 1,
            margin: '5 15 15 15'
        }]
    },

    buttons: [{
        xtype: 'button',
        text: 'Save',
        iconCls: 'Accept',
        listeners: {
            click: 'onOKClick'
        }
    }, {
        xtype: 'button',
        text: 'Cancel',
        iconCls: 'Cancel',
        listeners: {
            click: 'onCancelClick'
        }
    }]
});