/**
* 主题仓库
*/

Ext.define('ExtApp.store.sys.Theme', {
    extend: 'Ext.data.ArrayStore',

    model: 'ExtApp.model.sys.Theme',

    data: [[
        'aria',
        'Aria主题'
    ], [
        'classic',
        'Classic主题'
    ], [
        'crisp',
        'Crisp主题'
    ], [
        'gray',
        'Gray主题'
    ], [
        'neptune',
        'Neptune主题'
    ], [
        'triton',
        'Triton主题'
    ]]
});