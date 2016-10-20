/*
* Local Set Class
*/

Ext.define('ExtApp.util.LocalConfig', {
    extend: 'Ext.Base',

    get: function () { // Read the settings
        var data = Ext.util.Cookies.get('__config');
        if (data == null) {
            data = '{}';
        }
        return Ext.JSON.decode(data);
    },

    set: function (config) { // Write settings
        var data = Ext.util.Cookies.get('__config');
        var obj = new Object();
        if (data != null) {
            obj = Ext.JSON.decode(data);
        }
        Ext.apply(obj, config);
        data = Ext.JSON.encode(obj);
        Ext.util.Cookies.set('__config', data);
    }
});