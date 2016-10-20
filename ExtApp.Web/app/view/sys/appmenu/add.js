/**
* add a menu
*/

Ext.define('ExtApp.view.sys.appMenu.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.appmenuadd',

    requires: [
        'ExtApp.view.sys.appMenu.AddController'
    ],

    controller: 'appmenuadd',

    title: 'Add a Menu',
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
            name: 'PID'
        }, {
            xtype: 'textfield',
            name: 'PName',
            fieldLabel: 'Upper Menu',
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
                2, 'Url Address'
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
                1, 'css style'
            ], [
                2, 'image url'
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
            fieldLabel: 'Menu is Sorted',
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