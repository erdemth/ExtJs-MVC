/**
* 菜单视图控制器
*/

Ext.define('ExtApp.view.sys.appMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.appmenu',

    init: function () { // 初始化菜单
        // 获取数据
        var store = Ext.create('ExtApp.store.sys.AppMenu');
        var view = this.getView();
        store.load({
            callback: function (records, operation, success) {
                var data = store.getData();

                // 创建页面元素
                var items = new Array();
                data.each(function (i) {
                    if (i.data.PID == 0) { // 折叠面板中只添加pid为0的菜单
                        // 获取折叠面板的下一级菜单并判断是否有子项
                        var array1 = new Array();
                        data.each(function (i1) {
                            if (i1.data.PID == i.data.ID) {
                                // 判断是否有子节点
                                var leaf = true;
                                data.each(function (i11) {
                                    if (i11.data.PID == i1.data.ID) {
                                        leaf = false;
                                    }
                                });
                                array1.push({
                                    nodeID: i1.data.ID,
                                    text: i1.data.Name,
                                    leaf: leaf,
                                    expanded: false,
                                    url: i1.data.Url,
                                    iconCls: i1.data.Icon
                                });
                            }
                        });
                        items.push({
                            title: i.data.Name,
                            rootVisible: false,
                            root: {
                                nodeID: i.data.ID,
                                expanded: false,
                                children: array1
                            },
                            listeners: {
                                beforeitemexpand: 'onTreeItemExpand', // 展开树的节点
                                itemclick: 'onTreeItemClick' // 点击树的节点
                            }
                        });
                    }
                });
                view.add(items);
            }
        });
    },

    onTreeItemExpand: function (node, opts) { // 展开树的节点
        if (node.childNodes.length > 0) {
            return;
        }
        var store = Ext.create('ExtApp.store.sys.AppMenu');
        store.load({
            callback: function (records, operation, success) {
                var data = store.getData();
                var array = new Array();
                data.each(function (i) {
                    if (i.data.PID == node.data.nodeID) {
                        // 查询有无子节点
                        var leaf = true;
                        data.each(function (i1) {
                            if (i1.data.PID == i.data.ID) {
                                leaf = false;
                            }
                        });
                        array.push({
                            nodeID: i.data.ID,
                            text: i.data.Name,
                            leaf: leaf,
                            expanded: false,
                            url: i.data.Url,
                            iconCls: i.data.Icon
                        });
                    }
                });
                node.appendChild(array);
            }
        });
    },

    onTreeItemClick: function (view, record, item, index, e, eOpts) { // 点击菜单树的节点
        var url = record.data.url;
        var p = Ext.create(url);
        var tp = Ext.getCmp('tpMain');
        tp.add(p);
        tp.setActiveTab(p);
    }
});
