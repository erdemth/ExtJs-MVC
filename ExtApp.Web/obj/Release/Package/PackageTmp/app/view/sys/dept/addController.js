/**
* add to dept controller
*/

Ext.define('ExtApp.view.sys.dept.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deptadd',

    setParentMenu: function (PID, PName) { // Sets the id and name of the parent node
        var form = this.getView().down('form').getForm();
        form.findField('PID').setValue(PID);
        form.findField('PName').setValue(PName);
    },

    onSaveClick: function () { // cick the Save button
        var win = this.getView();
        var form = win.down('form');
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues();
        Ext.Ajax.request({
            url: '/api/Dept/Add',
            method: 'POST',
            params: values,
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