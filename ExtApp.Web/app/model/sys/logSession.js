/**
* Log Session Model
*/

Ext.define('ExtApp.model.sys.LoginSession', {
    extend: 'Ext.data.Model',

    fields: [
        'Guid',
        'UserID',
        'UserUsername',
        'UserName',
        'LoginTime',
        'LoginIP',
        'Expire'
    ]
});