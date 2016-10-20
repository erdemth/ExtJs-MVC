﻿/**
* Organization model
*/

Ext.define('ExtApp.model.sys.Dept', {
    extend: 'Ext.data.Model',

    fields: [
        'ID', {
            name: 'PID',
            mapping: function (data) {
                return data.PDept == null ? 0 : data.PDept.ID;
            }
        }, {
            name: 'PName',
            mapping: function (data) {
                return data.PDept == null ? '' : data.PDept.Name;
            }
        },
        'Code',
        'Name',
        'Layer',
        'Status',
        'Memo'
    ]
});