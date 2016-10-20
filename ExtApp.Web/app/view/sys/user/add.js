/**
* add to User
*/

Ext.define('ExtApp.view.sys.user.Add', {
    extend: 'Ext.window.Window',

    requires: [
        'ExtApp.view.sys.user.AddController'
    ],

    controller: 'useradd',

    title: 'Add to User',
    width: 300,
    height: 200,
    layout: 'fit',
    modal: true,
    iconCls: 'User',

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
            xtype: 'textfield',
            name: 'Username',
            fieldLabel: 'User Name',

            required: true
        }, {
            xtype: 'textfield',
            name: 'Password',
            fieldLabel: 'Password',
            required: true
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: 'Name',
            required: true
        }]
    },
    buttons: [{
        xtype: 'button',
        text: 'Save',
        listeners: {
            click: 'onSaveClick'
        }
    }, {
        xtype: 'button',
        text: 'Cancel',
        listeners: {
            click: 'onCancelClick'
        }
    }]
});