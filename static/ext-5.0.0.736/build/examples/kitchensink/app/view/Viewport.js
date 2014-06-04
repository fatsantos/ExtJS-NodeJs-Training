Ext.define('KitchenSink.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    layout: 'border',

    items: [{
        region: 'north',
        xtype: 'appHeader'
    }, {
        region: 'west',
        xtype: 'navigation',
        width: 250,
        minWidth: 100,
        height: 200,
        split: true,
        stateful: true,
        stateId: 'mainnav.west',
        collapsible: true
    }, {
        region: 'center',
        xtype: 'contentPanel'
    }, {
        xtype: 'codePreview',
        region: 'east',
        id: 'east-region',
        itemId: 'codePreview',
        stateful: true,
        stateId: 'mainnav.east',
        split: true,
        collapsible: true,
        width: 350,
        minWidth: 100
    }]
});