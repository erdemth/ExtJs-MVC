/**
* User model
*/

Ext.define('ExtApp.model.sys.User', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'ID',
        type: 'int'
    }, {
        name: 'Username',
        type: 'string'
    }, {
        name: 'Name',
        type: 'string'
    }]
});