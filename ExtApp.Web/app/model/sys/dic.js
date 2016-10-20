/**
* Dic model
*/

Ext.define('ExtApp.model.sys.Dic', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Code',
        'Type',
        'Name',
        'Status',
        'Memo'
    ]
});