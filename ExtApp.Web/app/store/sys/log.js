/**
* Log repository
*/

Ext.define('ExtApp.store.sys.Log', {
    extend: 'Ext.data.Store',
    storeId: 'loglist',

    model: 'ExtApp.model.sys.Log',

    proxy: {
        type: 'ajax',
        url: '/api/Log/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        pageParam: 'pageNum',
        limitParam: 'pageSize'
    }
});