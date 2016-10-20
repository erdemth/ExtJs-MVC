/**
* System menu view
*/

Ext.define('ExtApp.view.sys.main.accordion.AppMenu', {
    extend: 'Ext.container.Container',
    alias: 'widget.appmenu',

    requires: [
        'ExtApp.view.sys.main.accordion.appMenuController'
    ],

    controller: 'appmenu',

    layout: 'accordion',
    title: 'System Menu',

    defaults: {
        xtype: 'treepanel'
    }
});