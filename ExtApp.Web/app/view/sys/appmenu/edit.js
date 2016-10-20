/**
* add to Menu
*/

Ext.define('ExtApp.view.sys.appMenu.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.appmenuedit',

    requires: [
        'ExtApp.view.sys.appMenu.EditController'
    ],

    controller: 'appmenuedit',

    title: 'Edit Menu',
    width: 500,
    layout: 'fit',
    modal: true,
    iconCls: 'Applicationsidetree',

    items: {
        xtype: 'form',
        border: false,
        layout: 'column',
        defaults: {
            margin: 10,
            columnWidth: 0.5
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
            fieldLabel: 'Menu Code',
            readOnly: true
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: 'Name of Menu',
            allowBlank: false
        }, {
            xtype: 'combo',
            store: [[
                0, 'Not Set'
            ], [
                1, 'ExtJs Class Name'
            ], [
                2, 'Url address'
            ]],
            name: 'UrlType',
            value: 0,
            editable: false,
            fieldLabel: 'Menu Type'
        }, {
            xtype: 'textfield',
            name: 'Url',
            fieldLabel: 'Class Name/Url'
        }, {
            xtype: 'combo',
            store: [[
                0, 'Not Set'
            ], [
                1, 'CSS Style'
            ], [
                2, 'Pic Url'
            ]],
            name: 'IconType',
            value: 0,
            editable: false,
            fieldLabel: 'Icon Type'
        }, {
            xtype: 'textfield',
            name: 'Icon',
            fieldLabel: 'Icon'
        }, {
            xtype: 'numberfield',
            name: 'Layer',
            fieldLabel: 'Menu Sorted',
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