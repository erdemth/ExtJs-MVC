/**
* Edit User
*/

Ext.define('ExtApp.view.sys.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    requires: [
        'ExtApp.view.sys.user.EditController'
    ],

    controller: 'useredit',

    title: 'Edit User',
    width: 300,
    height: 200,
    layout: 'fit',

    items: {
        xtype: 'form',
        margin: 5,
        border: false,
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 60
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'ID'
        }, {
            xtype: 'textfield',
            name: 'Username',
            fieldLabel: 'User Name'
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: 'Name'
        }]
    },
    buttons: [{
        text: 'Save',
        listeners: {
            click: 'onSaveClick'
        }
    }, {
        text: 'Cancel',
        listeners: {
            click: 'onCancelClick'
        }
    }]
});
