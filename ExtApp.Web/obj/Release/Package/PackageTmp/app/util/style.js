/*
* Framework style tool class
*/

Ext.define('ExtApp.util.Style', {
    extend: 'Ext.Base',

    getCurrentStyle: function () { // Gets the current style
        var style = Ext.util.Cookies.get('style');
        if (style == null) {
            style = 'accordion';
        }
        return style;
    },

    setStyle: function (style) { // Dynamically set the style
        // Update cookie
        Ext.util.Cookies.set('style', style);
    }
});