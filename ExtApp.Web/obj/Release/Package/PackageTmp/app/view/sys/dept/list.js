/**
* Organizational Management List
*/

Ext.define("ExtApp.view.sys.dept.List", {
    extend: 'Ext.tree.Panel',
    alias: 'widget.deptlist',

    requires: [
        'ExtApp.view.sys.dept.ListController'

    ],

    controller: 'deptlist',

    title: 'Organizational Management',
    closable: true,
    rootVisible: true,

    root: {
        ID: 0,
        text: 'Top Organization',
        Name: 'Top Organization'
    },

    default: {
        xtype: 'column'
    },

    columns: [{
        xtype: 'treecolumn',
        dataIndex: 'Name',
        text: 'Menu Node',
        width: 200
    }, {
        dataIndex: 'Code',
        text: 'Code'
    }, {
        dataIndex: 'Layer',
        text: 'Layer'
    }, {
        dataIndex: 'Status',
        text: 'Status',
        renderer: 'renderStatus'
    }, {
        dataIndex: 'Memo',
        text: 'Memo'
    }],

    listeners: {
        beforeitemexpand: 'onTreeItemExpand'
    },

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
        text: 'refresh',
        iconCls: 'Arrowrefresh',
        listeners: {
            click: 'onRefreshClick'
        }
    }, {
        xtype: 'button',
        text: 'delete',
        iconCls: 'Delete',
        listeners: {
            click: 'onDeleteClick'
        }
    }]
});