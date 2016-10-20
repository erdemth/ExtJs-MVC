/**
* Menu View Controller
*/

Ext.define('ExtApp.view.sys.main.accordion.appMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.appmenu',

    init: function () { // Initialize the menu
        // retrieve data
        var store = Ext.create('ExtApp.store.sys.AppMenu');
        var view = this.getView();
        store.load({
            callback: function (records, operation, success) {
                var data = store.getData();

                // Create a page element
                var items = new Array();
                data.each(function (i) {
                    if (i.data.PID == 0) { // Fold the Panel only add to pid to 0 menu
                        // Fold the Panel to get the next level menu and determine whether there are children
                        var array1 = new Array();
                        data.each(function (i1) {
                            if (i1.data.PID == i.data.ID) {
                                // Determine if there are child nodes
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
                                beforeitemexpand: 'onTreeItemExpand', // Expand the tree node
                                itemclick: 'onTreeItemClick' // Click the tree node
                            }
                        });
                    }
                });
                view.add(items);
            }
        });
    },

    onTreeItemExpand: function (node, opts) { // Expand the tree node
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
                        // Queries whether there are child nodes
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
        // 获取菜单数据
        var text = record.data.text;
        var url = record.data.url;
        var p = Ext.create(url);
        var tp = Ext.getCmp('tpMain');

        // The mask is displayed
        var mask = new Ext.LoadMask({
            target: tp,
            msg: 'Please Wait...',
            indicator: true,
            centered: true
        });
        mask.show();

        // Tab page exists on the switch tab, does not exist to add a tab page
        var p1 = tp.items.findBy(function (item) {
            if (item.title == text) {
                return true;
            }
            return false;
        });
        if (p1 == null) {
            tp.add(p);
            tp.setActiveTab(p);
        } else {
            tp.setActiveTab(p1);
        }
        mask.hide();
    }
});
