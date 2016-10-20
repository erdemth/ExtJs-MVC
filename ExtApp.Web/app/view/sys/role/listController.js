/**
* Role List Controller
*/

Ext.define('ExtApp.view.sys.role.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rolelist',

    requires: [
        'ExtApp.view.sys.role.Add',
        'ExtApp.view.sys.role.Edit'
    ],

    init: function () {
        this.getView().down('pagingtoolbar').moveFirst();
    },

    renderStatus: function (value, cellmeta, record, rowIndex, columnIndex, store) {
        if (value == 0) {
            return 'Enable';
        } else {
            return 'Disabled';
        }
    },

    onAddClick: function () { // Click the add to button
        Ext.widget('roleadd').show();
    },

    onEditClick: function () { // Click the edit button
        var selected = this.getView().getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('News', 'Please select a row first');
            return;
        }
        var win = Ext.widget('roleedit');
        win.down('form').getForm().loadRecord(selected.items[0]);
        win.show();
    },

    onDeleteClick: function () { // Click the delete button
        var selected = this.getView().getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('News', 'Please select a row first');
            return;
        }
        var view = this.getView();
        Ext.Msg.confirm('News', 'Delete this record?', function (buttonId, value, opt) {
            if (buttonId == 'yes') {
                Ext.Ajax.request({
                    url: '/api/Role/Delete?id=' + selected.items[0].data.ID,
                    method: 'POST',
                    success: function (response, opts) {
                        var obj = Ext.JSON.decode(response.responseText);
                        if (obj.Code == 200) {
                            view.getStore().load();
                        } else {
                            Ext.Msg.alert('News', obj.Msg);
                        }
                    },
                    failure: function (response, opts) {
                        Ext.alert('News', response.responseText);
                    }
                });
            }
        });
    }
});