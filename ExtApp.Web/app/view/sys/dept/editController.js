/**
* User add to controller
*/

Ext.define('ExtApp.view.sys.dept.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptedit',

    onSaveClick: function () { // cick the Save button
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();

        if (values.PID != '0') {
            values.PDept = {
                ID: values.PID
            };
        }

        Ext.Ajax.request({
            url: '/api/Dept/Edit',
            method: 'POST',
            jsonData: values,
            success: function (response, opts) {
                var data = response.responseText;
                var obj = Ext.JSON.decode(data);
                if (obj.Code == 200) { // added successfully
                    win.hide();
                    var list = Ext.ComponentQuery.query('deptlist')[0];
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