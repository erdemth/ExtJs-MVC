/**
* Role List
*/

Ext.define('ExtApp.view.sys.role.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.rolelist',

    requires: [
        'ExtApp.view.sys.role.ListController',
        'ExtApp.store.sys.Role',
        'Ext.ux.form.SearchField',
        'ExtApp.plugin.ProgressBarPager'
    ],

    store: 'rolelist',

    controller: 'rolelist',

    title: 'Role List',
    closable: true,

    defaults: {
        xtype: 'column'
    },

    columns: [{
        xtype: 'rownumberer'
    }, {
        text: 'Code',
        dataIndex: 'Code'
    }, {
        text: 'Name',
        dataIndex: 'Name'
    }, {
        text: 'Layer',
        dataIndex: 'Layer'
    }, {
        text: 'Status',
        dataIndex: 'Status',
        renderer: 'renderStatus'
    }, {
        text: 'Memo',
        dataIndex: 'Memo'
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
    }, {
        xtype: 'tbseparator'
    }, {
        xtype: 'searchfield',
        paramName: 'keyword',
        placeHolder: 'Name',
        store: Ext.create('ExtApp.store.sys.Role')
    }],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: 'rolelist',
        //plugins: Ext.create('Ext.ux.ProgressBarPager')
        plugins: 'progressbarpager'
    }
});