/**
* Log Model
*/

Ext.define('ExtApp.model.sys.Log', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Type',
        'Source',
        'Level',
        'AddUser',
        'AddTime',
        'IP',
        'Title',
        'Content',
        'Status',
        'Memo'
    ]
});