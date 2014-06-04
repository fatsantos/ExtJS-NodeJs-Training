
Ext.define('KitchenSink.view.charts.touch.FreeDraw', {
    extend: 'Ext.panel.Panel',
    xtype: 'free-paint',

    title: 'Artwork',
    collapsed: false,
    collapsible: true,
    draggable: true,
    resizable: true,
    width: 640,
    height: 500,
    border: true,
    colspan: 3,

    requires: [
        'Ext.draw.Component',
        'KitchenSink.view.FreeDrawComponent'
    ],

    layout: 'fit',

    //<example>
    exampleDescription: [
        '<p>This example shows how to draw doodles of different sizes and colors.</p>'
    ],

    themes: {
        classic: {
            percentChangeColumn: {
                width: 75
            }
        },
        neptune: {
            percentChangeColumn: {
                width: 100
            }
        }
    },
    //</example>

    lastEvent: 0,

    tools:[{
        type:'refresh',
        tooltip: 'Erase Everything',
        handler: function(event, toolEl, panelHeader) {
            // Remove all the sprites and redraw
            var draw = Ext.getCmp('free-paint');
            draw.getSurface().removeAll(true);
            draw.renderFrame();
        }
    }],

    items: [
        {
            xtype: 'free-paint-component',
            id: 'free-paint'
        }
    ],

    constructor: function(config) {
        var contentPanel = Ext.getCmp('content-panel');
        this.callParent(arguments);
        contentPanel.setAutoScroll(false);
        contentPanel.setOverflowXY('hidden','hidden');
    },

    destroy: function() {
        var contentPanel = Ext.getCmp('content-panel');
        contentPanel.setAutoScroll(true);
        contentPanel.setOverflowXY('auto','auto');
        this.callParent(arguments);
    }

});
