/**
* The user adds the controller
*/

Ext.define('ExtApp.view.sys.appMenu.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.appmenuedit',

    onSaveClick: function () { // cick the Save button
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();
        Ext.Ajax.request({
            url: '/api/AppMenu/Edit',
            method: 'POST',
            params: values,
            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) { // added successfully
                    win.hide();
                    var list = Ext.ComponentQuery.query('appmenulist')[0];
                    list.getController().refresh();
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