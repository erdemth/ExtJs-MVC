/*
* Theme tool class
*/

Ext.define('ExtApp.util.Theme', {
    extend: 'Ext.Base',

    getCurrentTheme: function () { // Gets the current theme
        var theme = Ext.util.Cookies.get('theme');
        if (theme == null) {
            theme = 'triton';
        }
        return theme;
    },

    setTheme: function (theme) { // Dynamically set the theme
        var href = '/ext/themes/theme-' + theme + '/theme-' + theme + '-all.css';
        var link = Ext.fly('theme');

        if (!link) {
            link = Ext.getHead().appendChild({
                tag: 'link',
                id: 'theme',
                rel: 'stylesheet',
                href: ''
            });
        };
        link.set({
            href: Ext.String.format(href, theme)
        });

        // update cookie
        Ext.util.Cookies.set('theme', theme);
    }
});