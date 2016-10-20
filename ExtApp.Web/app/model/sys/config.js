/**
* config model
*/

Ext.define('ExtApp.model.sys.Config', {
    extend: 'Ext.data.Model',

    fields: [
        'ID', {
            name: 'SectionID',
            mapping: function (data) {
                return data.Section == null ? 0 : data.Section.ID;
            }
        },
        'Name',
        'Key',
        'Value',
        'Layer',
        'Status',
        'Memo'
    ]
});