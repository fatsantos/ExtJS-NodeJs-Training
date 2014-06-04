Ext.define('KitchenSink.view.charts.touch.LineChartWithRenderer', {
    extend: 'Ext.panel.Panel',
    xtype: 'line-chart-renderer',

    title: 'Line Chart with Renderer',
    collapsed: false,
    collapsible: true,
    draggable: true,
    resizable: true,
    width: 650,
    height: 500,
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
        '<p>This example shows how to create a line chart with a renderer function that changes the stroke',
        'and fill colors when the line goes down.</p>',
        '<p>Line charts allow to visualize the evolution of a value over time, or the ratio between any two values.</p>'
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
                var panel = this.ownerCt.ownerCt,
                    chart = Ext.ComponentQuery.query('cartesian', panel)[0],
                    store = Ext.getStore('Pie');
                store.refreshData();
            }
        }
    ],

    items: [{
        xtype: 'cartesian',
        store: 'Pie',
        id: 'line-chart-markers',
        background: 'white',
        interactions: {
            type: 'panzoom',
            zoomOnPanGesture: true
        },
        innerPadding: {
            top: 20
        },
        series: [
            {
                type: 'line',
                xField: 'name',
                yField: 'g1',
                fill: true,
                smooth: true,
                style: {
                    lineWidth: 4
                },
                marker: {
                    type: 'circle',
                    radius: 10,
                    lineWidth: 2
                },
                renderer: function (sprite, config, rendererData, index) {
                    var store = rendererData.store,
                        storeItems = store.getData().items,
                        currentRecord = storeItems[index],
                        previousRecord = (index > 0 ? storeItems[index-1] : currentRecord),
                        current = currentRecord && currentRecord.data['g1'],
                        previous = previousRecord && previousRecord.data['g1'],
                        isUp = current >= previous,
                        changes = {};
                    switch (config.type) {
                        case 'marker':
                            changes.strokeStyle = (isUp ? 'cornflowerblue' : 'tomato');
                            changes.fillStyle = (isUp ? 'aliceblue' : 'lightpink');
                            break;
                        case 'line':
                            changes.strokeStyle = (isUp ? 'cornflowerblue' : 'tomato');
                            changes.fillStyle = (isUp ? 'aliceblue' : 'lightgray');
                            break;
                    }
                    return changes;
                }
            }
        ],
        axes: [
            {
                type: 'numeric',
                position: 'left',
                fields: ['g1'],
                minimum: 0
            },
            {
                type: 'category',
                position: 'bottom',
                fields: 'name'
            }
        ]
    }]

});
