/**
* ExtAppApplication
*/

// Configuration js Automatic loading
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths: {
        Ext: '/ext',
        ExtApp: '/app'
    }
});

// Select the current theme
var tool = Ext.create('ExtApp.util.Theme');
var theme = tool.getCurrentTheme();
tool.setTheme(theme);

// starting program
Ext.application({
    name: 'ExtApp',
    appFolder: '/app',
    autoCreateViewport: true
});
