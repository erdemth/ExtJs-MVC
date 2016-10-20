/**
* The system menu manages the list
*/

Ext.define("ExtApp.view.sys.appMenu.List", {
    extend: 'Ext.tree.Panel',
    alias: 'widget.appmenulist',

    requires: [
        'ExtApp.view.sys.appMenu.ListController'
    ],

    controller: 'appmenulist',

    title: 'Menu Management',
    closable: true,
    rootVisible: true,

    root: {
        ID: 0,
        text: 'Top-Level Menu',
        Name: 'Top-Level Menu'
    },

    default: {
        xtype: 'column'
    },

    columns: [{
        xtype: 'treecolumn',
        dataIndex: 'Name',
        text: 'Menu Code',
        width: 200
    }, {
        dataIndex: 'Code',
        text: 'Code'
    }, {
        dataIndex: 'UrlType',
        text: 'Link Type',
        renderer: 'renderUrlType'
    }, {
        dataIndex: 'Url',
        text: 'Class v Url',
        width: 200
    }, {
        dataIndex: 'IconType',
        text: 'Icon Type',
        renderer: 'renderIconType'
    }, {
        dataIndex: 'Icon',
        text: 'CSS Style v Url',
        width: 150
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
        text: 'delete',
        iconCls: 'Delete',
        listeners: {
            click: 'onDeleteClick'
        }
    }]
});