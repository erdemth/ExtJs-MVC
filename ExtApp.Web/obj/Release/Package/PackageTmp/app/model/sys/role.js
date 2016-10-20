/**
* Role model
*/

Ext.define('ExtApp.model.sys.Role', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Code',
        'Name',
        'Layer',
        'Status',
        'Memo'
    ]
});