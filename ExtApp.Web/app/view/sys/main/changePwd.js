/**
* change Password
*/

Ext.define('ExtApp.view.sys.main.ChangePwd', {
    extend: 'Ext.window.Window',
    alias: 'widget.changepwd',

    requires: [
        'ExtApp.view.sys.main.ChangePwdController'
    ],

    controller: 'changepwd',

    title: 'Change Password',
    layout: 'fit',
    modal: true,

    items: {
        xtype: 'form',
        defaults: {
            xtype: 'textfield',
            inputType: 'password'
        },
        items: [{
            name: 'oldPwd',
            fieldLabel: 'Old Password',
            margin: '15 10 5 10'
        }, {
            name: 'newPwd',
            fieldLabel: 'New Password',
            margin: '5 10 5 10'
        }, {
            name: 'confirmPwd',
            fieldLabel: 'Confirm Password',
            margin: '5 10 15 10'
        }]
    },

    buttons: [{
        xtype: 'button',
        text: 'Ok',
        listeners: {
            click: 'onClickOK'
        }
    }, {
        xtype: 'button',
        text: 'Cancel',
        listeners: {
            click: 'onClickCancel'
        }
    }]
});