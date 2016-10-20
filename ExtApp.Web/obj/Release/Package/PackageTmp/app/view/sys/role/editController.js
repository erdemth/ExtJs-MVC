/**
* Edit Role Controller
*/

Ext.define('ExtApp.view.sys.role.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.roleedit',

    onOKClick: function () { // Click the Ok button
        var form = this.getView().down('form').getForm();
        if (!form.isValid()) {
            return;
        }
        var view = this.getView();
        Ext.Ajax.request({
            url: '/api/Role/Edit',
            method: 'POST',
            params: form.getValues(),
            success: function (response, opts) {
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    view.hide();
                    var store = Ext.ComponentQuery.query('rolelist')[0].getStore();
                    store.load();
                } else {
                    Ext.Msg.alert('News', response.responseText);
                }
            },
            failure: function (response, opts) {
                Ext.Msg.alert('News', response.responseText);
            }
        });
    },

    onCancelClick: function () { // click the Cancel button
        this.getView().hide();
    }
});