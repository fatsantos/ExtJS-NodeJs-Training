Ext.define('KitchenSink.view.tab.PlainTabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'plain-tabs',
    controller: 'tab-view',
    
    //<example>
    requires: [
        'KitchenSink.view.tab.TabController'
    ],
    otherContent: [{
        type: 'ViewController',
        path: 'app/view/tab/TabController.js'
    }],
    exampleTitle: 'Plain Tabs',
    exampleDescription: [
        '<p>Demonstrates a tab panel with no background on the tab strip.</p>'
    ].join(''),
    //</example>
    
    width: 400,
    height: 300,
    plain: true,
    defaults: {
        bodyPadding: 10,
        autoScroll: true
    },
    items: [{
        title: 'Active Tab',
        html: KitchenSink.DummyText.longText
    }, {
        title: 'Inactive Tab',
        html: KitchenSink.DummyText.extraLongText
    }, {
        title: 'Disabled Tab',
        disabled: true
    }],

    listeners: {
        scope: 'this',
        tabchange: 'onTabChange'
    }
});