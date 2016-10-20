/**
* Organizational Storage
*/

Ext.define('ExtApp.store.sys.Dept', {
    extend: 'Ext.data.Store',

    model: 'ExtApp.model.sys.Dept',

    proxy: {
        type: 'ajax',
        url: '/api/Dept/List',
        reader: 'json'
    },

    autoSync: true,
    autoLoad: true
});