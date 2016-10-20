﻿/**
* 登录视图
*/

Ext.define('ExtApp.view.sys.Login', {
    extend: 'Ext.container.Container',
    alias: 'widget.login',

    requires: [
        'ExtApp.view.sys.LoginController'
    ],

    controller: 'login',

    layout: 'center',

    items: [{
        xtype: 'panel',
        title: '用户登录',
        frame: true,
        width: 320,
        iconCls: 'Lock',
        bodyPadding: 10,
        defaultType: 'textfield',

        items: [{
            allowBlank: false,
            fieldLabel: '用户名',
            name: 'username',
            iconCls: 'User',
            emptyText: '请输入用户名'
        }, {
            allowBlank: false,
            fieldLabel: '密　码',
            name: 'password',
            iconCls: 'Lock',
            emptyText: '请输入密码',
            inputType: 'password'
        }],

        buttons: [{
            text: '登录',
            listeners: {
                click: 'onLoginClick'
            }
        }, {
            text: '清空',
            listeners: {
                click: 'onResetClick'
            }
        }]
    }]
});
