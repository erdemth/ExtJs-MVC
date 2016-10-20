/**
* User Management
*/

Ext.define('ExtApp.view.sys.user.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userlist',

    init: function () {
        // Load the data
        this.getView().getStore().load();
    },

    onAddClick: function () { // Click the add to button
        var win = Ext.create('ExtApp.view.sys.user.Add');
        win.show();
    },

    onEditClick: function () { // Click the edit button
        var selected = this.getView().getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('News', 'Please select a line first ...');
            return;
        }
        var win = Ext.create('ExtApp.view.sys.user.Edit');
        win.down('form').getForm().loadRecord(selected.items[0]);
        win.show();
    },

    onDeleteClick: function () { // Click the delete button
        var selected = this.getView().getSelectionModel().getSelected();
        if (selected.length == 0) {
            Ext.Msg.alert('News', 'Please select a line first ...');
            return;
        }
        Ext.Ajax.request({
            url: '/api/User/Delete?id=' + selected.items[0].data.ID,
            method: 'POST',
            success: function (response, opts) {
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    Ext.ComponentQuery.query('userlist')[0].getStore().load();
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