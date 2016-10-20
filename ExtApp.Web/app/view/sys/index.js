/**
* 管理界面视图 
*/

Ext.define('ExtApp.view.sys.Index', {
    extend: 'Ext.container.Container',
    alias: 'widget.index',

    requires: [
        'ExtApp.view.sys.IndexController',
        'ExtApp.view.sys.AppMenu'
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
            html: '<span style="font-size:20px;line-height:42px;color:white;margin-left:20px;">ExtJs权限管理平台</span>',
            flex: 1
        }, {
            layout: 'hbox',
            defaults: {
                margin: '10 5 10 5'
            },
            items: [{
                xtype: 'combo',
                name: 'theme',
                id: 'cboTheme',
                store: Ext.create('ExtApp.store.sys.Theme'),
                valueField: 'value',
                displayField: 'text',
                width: 120,
                editable: false,
                listeners: {
                    select: 'onThemeSelect'
                }
            }, {
                xtype: 'button',
                text: '修改密码',
                listeners: {
                    click: 'onChangePwdClick'
                }
            }, {
                xtype: 'button',
                text: '退出',
                listeners: {
                    click: 'onLogoutClick'
                }
            }]
        }]
    }, {
        region: 'west',

        width: 200,
        collapsible: true,
        split: true,
        title: '系统菜单',
        layout: 'fit',
        items: [{
            xtype: 'appmenu'
        }]
    }, {
        region: 'south',
        height: 30,
        title: false,
        html: '版权所有：山东精彩无线网络科技有限公司',
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
            title: '主页',
            html: ''
        }]
    }]
});