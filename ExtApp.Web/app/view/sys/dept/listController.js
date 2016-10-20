/**
* organization manages the controller
*/

Ext.define('ExtApp.view.sys.dept.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptlist',

    init: function () { // The root node is expanded by default
        this.getView().expandAll();
    },

    refresh() { // Refresh the tree node to expand to its current location
        // gets the path
        var store = this.getView().getStore();
        var selected = this.getView().getSelection();
        if (selected.length > 0) {
            var path = selected[0].getPath();
            store.load();
            this.getView().getRootNode().collapse();
            this.getView().expandPath(path);
        } else {
            store.load();
            this.getView().getRootNode().collapse();
            this.getView().expandAll();
        }
    },

    onTreeItemExpand: function (node, eOpts) { // Expand the tree node
        node.removeAll();
        var store = Ext.create('ExtApp.store.sys.Dept');
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

                            ID: i.data.ID,
                            PID: i.data.PID,
                            PName: i.data.PName,
                            Code: i.data.Code,
                            Name: i.data.Name,
                            Layer: i.data.Layer,
                            Status: i.data.Status,
                            Memo: i.data.Memo
                        });
                    }
                });
                node.appendChild(array);
            }
        });
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
        var win = Ext.create('ExtApp.view.sys.dept.Add');
        win.getController().setParentMenu(selected[0].data.ID, selected[0].data.Name);
        win.show();
    },

    onEditClick: function () { // Click the edit button
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('News', 'Please select a node...');
            return;
        }
        var win = Ext.create('ExtApp.view.sys.dept.Edit');
        win.down('form').getForm().loadRecord(selected[0]);
        win.show();
    },
    onRefreshClick: function () { // Click Refresh Button
        this.refresh();
    },
    onDeleteClick: function () { // Click the delete button
        var selected = this.getView().getSelection();
        if (selected.length == 0) {
            Ext.Msg.alert('News', 'Please select a node...');
            return;
        }
        var me = this;
        Ext.Msg.confirm('Message', 'Do you want to delete this record?', function (buttonId, value, opt) {
            if (buttonId == 'yes') {
                Ext.Ajax.request({
                    url: '/api/Dept/Delete?id=' + selected[0].data.ID,
                    method: 'POST',
                    success: function (response, opts) {
                        var obj = Ext.JSON.decode(response.responseText);
                        if (obj.Code == 200) {
                            me.refresh();
                        } else {
                            Ext.Msg.alert('Error', obj.Msg);
                        }
                    },
                    failure: function (response, opts) {
                        Ext.Msg.alert('Error', response.responseText);
                    }
                });
            }
        });
    }
});