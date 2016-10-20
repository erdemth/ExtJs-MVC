/**
* 系统菜单视图
*/

Ext.define('ExtApp.view.sys.AppMenu', {
    extend: 'Ext.container.Container',
    alias: 'widget.appmenu',

    requires: [
        'ExtApp.view.sys.appMenuController'
    ],

    controller: 'appmenu',

    layout: 'accordion',
    title: '系统菜单',

    defaults: {
        xtype: 'treepanel'
    }
});