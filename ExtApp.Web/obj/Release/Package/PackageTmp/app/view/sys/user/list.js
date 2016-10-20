/**
* User List
*/

Ext.define("ExtApp.view.sys.user.List", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    requires: [
        'ExtApp.store.sys.User',
        'ExtApp.view.sys.user.ListController'
    ],

    controller: 'userlist',

    store: Ext.create('ExtApp.store.sys.User'),

    title: 'User Management',
    closable: true,

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: 'User Name',
        dataIndex: 'Username'
    }, {
        text: 'Name',
        dataIndex: 'Name'
    }],

    tbar: [{
        xtype: 'button',
        text: 'add to',
        iconCls: 'Add',
        listeners: {
            click: 'onAddClick'
        }
    }, {
        xtype: 'button',
        text: 'edit',
        iconCls: 'Applicationedit',
        listeners: {
            click: 'onEditClick'
        }
    }, {
        xtype: 'button',
        text: 'delete',
        iconCls: 'Delete',
        listeners: {
            click: 'onDeleteClick'
        }
    }],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});