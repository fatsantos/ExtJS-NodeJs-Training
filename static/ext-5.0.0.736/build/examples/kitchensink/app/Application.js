Ext.define('KitchenSink.Application', {
    extend: 'Ext.app.Application',
    namespace: 'KitchenSink',

    requires: [
        'Ext.app.*',
        'Ext.state.CookieProvider',
        'Ext.window.MessageBox',
        'Ext.tip.QuickTipManager',
        'KitchenSink.*'
    ],

    controllers: [
        'Main'
    ],

    init: function() {
        var me = this,
            map = Ext.Object.fromQueryString(location.search),
            charts = ('charts' in map) && !/0|false|no/i.test(map.charts);

        // Set the default route to start the application.
        me.setDefaultToken( charts ? 'basic-column' : 'basic-panels' );

        Ext.panel.Table.prototype.deferRowRender = false;
        Ext.setGlyphFontFamily('Pictos');
        Ext.tip.QuickTipManager.init();
        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
    }
});
