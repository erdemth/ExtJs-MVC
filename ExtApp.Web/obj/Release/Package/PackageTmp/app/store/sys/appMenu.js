/**
* The system menu is stored
*/

Ext.define('ExtApp.store.sys.AppMenu', {
    extend: 'Ext.data.Store',

    model: 'ExtApp.model.sys.AppMenu',

    proxy: {
        type: 'ajax',
        url: '/api/AppMenu/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true
});