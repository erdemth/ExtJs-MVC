/**
* Fold the Panel Style
*/

Ext.define('ExtApp.view.sys.main.accordion.Index', {
    extend: 'Ext.container.Container',
    alias: 'widget.index',

    requires: [
        'ExtApp.view.sys.main.accordion.IndexController',
        'ExtApp.view.sys.main.accordion.AppMenu',
        'ExtApp.plugin.TabCloseMenu'
    ],

    controller: 'index',

    layout: 'border',
    defaults: {
        xtype: 'panel',
        title: false
    },

    items: [{
        region: 'north',
        height: 44,
        layout: 'hbox',
        border: false,
        style: {
            backgroundColor: '#112846'
        },
        defaults: {
            xtype: 'container',
            border: false,
            title: false,
            style: {
                backgroundColor: '#112846'
            },
            height: 44
        },
        items: [{
            html: '<span style="font-size:20px;line-height:42px;color:white;margin-left:20px;">EPM Rights Management Platform</span>',
            flex: 1
        }, {
            layout: 'hbox',
            defaults: {
                margin: '10 5 10 5'
            },
            items: [{
                xtype: 'combo',
                name: 'style',
                store: [[
                    'accordion',
                    'Fold the Panel'
                ], [
                    'desktop',
                    'Desktop Style'
                ], [
                    'navigation',
                    'Top Navigation'
                ]],
                valueField: 'value',
                displayField: 'text',
                width: 120,
                editable: false,
                value: 'accordion',
                listeners: {
                    select: 'onStyleSelect'
                }
            }, {
                xtype: 'combo',
                name: 'theme',
                store: [[
                    'crisp',
                    'Crisp Topic'
                ], [
                    'neptune',
                    'Neptune Topic'
                ], [
                    'triton',
                    'Triton Topic'
                ]],
                valueField: 'value',
                displayField: 'text',
                width: 120,
                editable: false,
                listeners: {
                    select: 'onThemeSelect'
                }
            }, {
                xtype: 'button',
                text: 'Change Password',
                listeners: {
                    click: 'onChangePwdClick'
                }
            }, {
                xtype: 'button',
                text: 'Quit',
                listeners: {
                    click: 'onLogoutClick'
                }
            }]
        }]
    }, {
        region: 'west',

        width: 275,
        collapsible: true,
        split: true,
        title: 'Sistem Menü',
        layout: 'fit',
        items: [{
            xtype: 'appmenu'
        }]
    }, {
        region: 'south',
        height: 30,
        title: false,
        html: 'Copyright: EPM Project EMA A.Ş.',
        frame: true,
        border: false,
        style: {
            textAlign: 'center',
            border: 'none',
            padding: '5px 0 0 0',
            margin: 0
        }
    }, {
        id: 'tpMain',
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'Home',
            html: ''
        }],
        plugins: 'tabclosemenu'
    }]
});