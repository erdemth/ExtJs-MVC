/**
* User add to controller
*/

Ext.define('ExtApp.view.sys.user.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.useradd',

    onSaveClick: function () { // cick the Save button
        var win = this.getView();
        var form = win.down('form');
        var values = form.getValues();
        Ext.Ajax.request({
            url: '/api/User/Add',
            method: 'POST',
            params: values,
            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) { // added successfully
                    win.hide();
                    var store = Ext.ComponentQuery.query('userlist')[0].getStore();
                    store.load();
                } else { // add failed
                    Ext.Msg.alert('News', obj.Msg);
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