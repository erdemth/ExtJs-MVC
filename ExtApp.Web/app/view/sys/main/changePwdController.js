/**
* Modify the password controller
*/

Ext.define('ExtApp.view.sys.main.ChangePwdController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.changepwd',

    onClickOK: function () { // Click the Ok button
        var view = this.getView();
        Ext.Ajax.request({
            url: '/api/Login/ChangePwd?oldPwd=&newPwd=&confirmPwd=',
            method: 'POST',
            success: function (response, opts) {
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    view.hide();
                    Ext.Msg.alert('News', 'Password reset complete！');
                } else {
                    Ext.Msg.alert('News', obj.Msg);
                }
            },
            failure: function (response, opts) {
                Ext.Msg.alert('error', response.responseText);
            }
        });
    },

    onClickCancel: function () { // click the Cancel button
        this.getView().hide();
    }
});