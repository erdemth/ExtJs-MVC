/**
* System Menu Manage the controller
*/

Ext.define('ExtApp.view.sys.appMenu.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.appmenulist',

    init: function () { // The root node is expanded by default
        this.getView().expandAll();
    },

    refresh() { // Refresh the tree node to expand to its current location
        // gets the path
        var store = this.getView().getStore();
        var selected = this.getView().getSelection();
        var path = selected[0].getPath();
        store.load();
        this.getView().getRootNode().collapse();
        this.getView().expandPath(path);
    },

    onTreeItemExpand: function (node, eOpts) { // Expand the tree node
        node.removeAll();
        var store = Ext.create('ExtApp.store.sys.AppMenu');
        store.load({
            callback: function (records, operation, success) {
                var data = store.getData();
                var array = new Array();
                data.each(function (i) {
                    if (i.data.PID == node.data.ID) {
                        // Queries whether there are child nodes
                        var leaf = true;
                        data.each(function (i1) {
                            if (i1.data.PID == i.data.ID) {
                                leaf = false;
                            }
                        });
                        array.push({
                            text: i.data.Name,
                            leaf: leaf,
                            expanded: false,
                            iconCls: i.data.Icon,

                            ID: i.data.ID,
                            Name: i.data.Name,
                            Code: i.data.Code,
                            PID: i.data.PID,
                            UrlType: i.data.UrlType,
                            Url: i.data.Url,
                            IconType: i.data.IconType,
                            Icon: i.data.Icon,
                            Layer: i.data.Layer,
                            Status: i.data.Status
                        });
                    }
                });
                node.appendChild(array);
            }
        });
    },

    renderUrlType: function (value) { // Render the link type
        if (value == 0) {
            return '';
        } else if (value == 1) {
            return 'ExtJs Class';
        } else if (value == 2) {
            return 'Url address';
        } else {
            return value;
        }
    },

    renderIconType: function (value) { // Rendering Icon Type
        if (value == 0) {
            return '';
        } else if (value == 1) {
            return 'CSS Style';
        } else if (value == 2) {
            return 'IconUrl';
        } else {
            return value;
        }
    },

    renderStatus: function (value) { // Render Status
        if (value == 0) {
            return 'Enable';
        } else {
            return 'Disabled';
        }
    },

    onAddClick: function () { // Click the add to button
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('News', 'Please select a node...');
            return;
        }
        var win = Ext.create('ExtApp.view.sys.appMenu.Add');
        win.getController().setParentMenu(selected[0].data.ID, selected[0].data.Name);
        win.show();
    },

    onEditClick: function () { // Click the edit to button
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('News', 'Please select a node...');
            return;
        }
        var win = Ext.create('ExtApp.view.sys.appMenu.Edit');
        win.down('form').getForm().loadRecord(selected[0]);
        win.show();
    },

    onDeleteClick: function () { // Click the delete to button
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('News', 'Please select a node...');
            return;
        }
        Ext.Ajax.request({
            url: '/api/AppMenu/Delete?id=' + selected[0].data.ID,
            method: 'POST',
            success: function (response, opts) {
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    var store = Ext.ComponentQuery.query('appmenulist')[0].getStore();
                    store.load();
                } else {
                    Ext.Msg.alert('error', obj.Msg);
                }
            },
            failure: function (response, opts) {
                Ext.Msg.alert('error', response.responseText);
            }
        });
    }
});