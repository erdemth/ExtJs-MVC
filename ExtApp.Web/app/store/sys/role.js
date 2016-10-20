/**
* Role repository
*/

Ext.define('ExtApp.store.sys.Role', {
    extend: 'Ext.data.Store',
    storeId: 'rolelist',

    model: 'ExtApp.model.sys.Role',

    proxy: {
        type: 'ajax',
        url: '/api/Role/List',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        pageParam: 'pageNum',
        limitParam: 'pageSize'
    }
});