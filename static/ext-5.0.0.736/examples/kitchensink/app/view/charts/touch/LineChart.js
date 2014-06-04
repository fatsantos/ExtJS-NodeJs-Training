/**
 * Demonstrates how use Ext.chart.series.Line
 */
Ext.define('KitchenSink.view.charts.touch.LineChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'line-chart',

    title: 'USD to Euro',
    collapsed: false,
    collapsible: true,
    draggable: true,
    resizable: true,
    width: 600,
    height: 400,
    border: true,
    colspan: 3,
    
    requires: [
        'Ext.chart.Chart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Time',
        'Ext.chart.interactions.CrossZoom'
    ],

    layout: 'fit',

    //<example>
    exampleDescription: [
        '<p>This example shows how to create a line chart.</p>',
        '<p>Line charts allow to visualize the evolution of a value over time, or the ratio between any two values.</p>',
        '<p>This example also highlights data aggregation to effortlessly display over 1000 points.</p>'
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

    tools:[{
        type:'search',
        tooltip: 'Undo Zoom',
        handler: function(event, toolEl, panelHeader) {
            var chart = Ext.getCmp('usd2eur-chart'),
                interaction = chart && Ext.ComponentQuery.query('interaction', chart)[0],
                undoButton = interaction && interaction.getUndoButton(),
                handler = undoButton && undoButton.handler;
            if (handler) {
                handler();
            }
        }
    }],

    items: {
        xtype: 'cartesian',
        store: 'USD2EUR',
        id: 'usd2eur-chart',
        background: 'white',
        interactions: {
            type: 'crosszoom',
            zoomOnPanGesture: false
        },
        insetPadding: {top: 20, left: 0, right: 20, bottom: 0},
        series: {
            type: 'line',
            xField: 'time',
            yField: 'value',
            style: {
                lineWidth: 2,
                fill: "#115fa6",
                stroke: "#115fa6",
                fillOpacity: 0.6,
                miterLimit: 3,
                lineCap: 'miter'
            }
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['value'],
            titleMargin: 12,
            title: {
                text: 'USD to Euro',
                fontSize: 16
            }
        }, {
            type: 'time',
            dateFormat: 'Y-m-d',
            visibleRange: [0, 1],
            position: 'bottom',
            fields: ['time'],
            titleMargin: 12,
            title: {
                text: 'Date',
                fontSize: 16
            }
        }]
    }

});
