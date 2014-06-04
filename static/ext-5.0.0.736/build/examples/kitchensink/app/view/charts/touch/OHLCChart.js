Ext.define('KitchenSink.view.charts.touch.OHLCChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'ohlc-chart',

    title: 'OHLC Chart',
    collapsed: false,
    collapsible: true,
    draggable: true,
    resizable: true,
    width: '100%',
    height: 540,
    border: true,
    colspan: 3,
    
    requires: [
        'Ext.chart.Chart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.draw.modifier.Highlight',
        'Ext.chart.axis.Time',
        'Ext.chart.interactions.ItemHighlight'
    ],

    layout: 'fit',

    //<example>
    exampleDescription: [
        '<p>This example shows how to create an OHLC chart.</p>',
        '<p>OHLC charts are financial charts that allow to visualize the open/high/low/close values of a stock.</p>',
        '<p>The example makes use of two interactions: \'crosshair\' (default) and \'panzoom\'. The gear icon can be used to switch between the two.</p>'
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

    tools:[
        {
            type: 'refresh',
            tooltip: 'Refresh',
            handler: function () {
                var chart = this.up('panel').down('cartesian'),
                    store = chart.getStore();
                store.refreshData();
            }
        },
        {
            type: 'search',
            tooltip: 'Toggle between Zoom and Pan',
            handler: function () {
                var chart = this.up('panel').down('cartesian'),
                    panzoom = chart.getInteractions()[0];
                panzoom.toggleMode();
            }
        },
        {
            type: 'gear',
            tooltip: 'Toggle between PanZoom and Crosshair interactions',
            handler: function () {
                var chart = this.up('panel').down('cartesian'),
                    interactions = chart.getInteractions(),
                    toggle = interactions[0].getEnabled();
                interactions[0].setEnabled(!toggle);
                interactions[1].setEnabled(toggle);
            }
        },
        {
            type: 'pin',
            tooltip: 'Reset axes after pan/zoom',
            handler: function () {
                var chart = this.up('panel').down('cartesian'),
                    axes = chart.getAxes();
                axes[0].setVisibleRange([0, 1]);
                axes[1].setVisibleRange([0, 0.3]);
                chart.redraw();
            }
        }
    ],

    items: [{
        xtype: 'cartesian',
        store: {type: 'stock-price'},
        id: 'ohlc-chart',
        background: 'white',
        interactions: [
             {
                 type: 'panzoom',
                 enabled: false,
                 zoomOnPanGesture: false,
                 axes: {
                     left: {
                         allowPan: false,
                         allowZoom: false
                     },
                     bottom: {
                         allowPan: true,
                         allowZoom: true
                     }
                 }
             },
             {
                 type: 'crosshair'
             }
        ],
        series: [
            {
                type: 'candlestick',
                xField: 'time',
                openField: 'open',
                highField: 'high',
                lowField: 'low',
                closeField: 'close',
                style: {
                    ohlcType: 'ohlc',
                    barWidth: 10,
                    opacity: 0.9,
                    dropStyle: {
                        fill: 'rgb(237,123,43)',
                        stroke: 'rgb(237,123,43)'
                    },
                    raiseStyle: {
                        fill: 'rgb(55,153,19)',
                        stroke: 'rgb(55,153,19)'
                    }
                },
                aggregator: {
                    strategy: 'time'
                }
            }
        ],
        axes: [
            {
                type: 'numeric',
                fields: ['open', 'high', 'low', 'close'],
                position: 'left',
                maximum: 1000,
                minimum: 0
            },
            {
                type: 'time',
                fields: ['time'],
                position: 'bottom',
                visibleRange: [0, 0.3]
            }
        ]
    }]
});
