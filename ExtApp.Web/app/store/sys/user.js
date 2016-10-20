/**
* User repository
*/

Ext.define('ExtApp.store.sys.User', {
    extend: 'Ext.data.Store',

    model: 'ExtApp.model.sys.User',

    proxy: {
        type: 'ajax',
        url: '/api/User/List',
        reader: 'json',
        startParam: 'pageNum',
        limitParam: 'pageSize',
        extraParams: {
            keyword: ''
        }
    }
});