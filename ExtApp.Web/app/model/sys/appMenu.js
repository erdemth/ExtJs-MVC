/**
* System Menu Model
*/

Ext.define('ExtApp.model.sys.AppMenu', {
    extend: 'Ext.data.Model',

    fields: [
        'ID',
        'Name',
        'Code',
        'PID',
        'UrlType',
        'Url',
        'IconType',
        'Icon',
        'Layer',
        'Status',
        'Memo'
    ]
});