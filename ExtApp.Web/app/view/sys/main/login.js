/**
* Login view
*/

Ext.define('ExtApp.view.sys.main.Login', {
    extend: 'Ext.container.Container',
    alias: 'widget.login',

    requires: [
        'ExtApp.view.sys.main.LoginController'
    ],

    controller: 'login',

    layout: 'center',

    items: [{
        xtype: 'form',
        title: 'User Login',
        frame: true,
        width: 320,
        iconCls: 'Lock',
        bodyPadding: 10,
        defaultType: 'textfield',

        items: [{
            allowBlank: false,
            fieldLabel: 'User Name',
            name: 'username',
            iconCls: 'User',
            emptyText: 'Please enter user name'
        }, {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'password',
            iconCls: 'Lock',
            emptyText: 'Please enter a password',
            inputType: 'password'
        }],

        buttons: [{
            xtype: 'button',
            text: 'Login',
            listeners: {
                click: 'onLoginClick'
            }
        }, {
            xtype: 'button',
            text: 'Clear',
            listeners: {
                click: 'onResetClick'
            }
        }]
    }]
});
