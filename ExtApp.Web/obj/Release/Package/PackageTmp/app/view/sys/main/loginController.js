/**
* Login to the view controller
*/

Ext.define('ExtApp.view.sys.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () { // Click the Sign In button
        var values = this.getView().down('form').getForm().getValues();
        var username = values.username;
        var password = values.password;

        // Call the api controller
        var mask = new Ext.LoadMask({
            target: this.getView(),
            msg: 'Loging in ...',
            indicator: true,
            centered: true
        });
        mask.show();
        Ext.Ajax.request({
            url: '/api/Login/Login?username=' + username + '&password=' + password,
            method: 'POST',
            success: function (response, opts) {
                mask.hide();
                var obj = Ext.JSON.decode(response.responseText);
                if (obj.Code == 200) {
                    // Set cookies after login
                    Ext.util.Cookies.set('username', username);
                    Ext.util.Cookies.set('ticket', obj.Ticket);

                    // Then jump to the management interface
                    var viewport = Ext.ComponentQuery.query('mainviewport')[0];
                    viewport.setActiveItem(1);
                } else {
                    Ext.Msg.alert('News', obj.Msg);
                }
            },
            failure: function (response, opts) {
                mask.hide();
                Ext.Msg.alert('error', response.responseText);
            }
        });
    },

    onResetClick: function () { // Click the Logout button
        this.getView().down('form').getForm().reset();
    }
});