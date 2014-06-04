Ext.define('KitchenSink.view.charts.touch.LineChartWithMarkers', {
    extend: 'Ext.panel.Panel',
    xtype: 'line-chart-markers',

    title: 'Line Chart with Image Markers',
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
        '<p>This example shows how to create a line chart with images as markers.</p>',
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

    tools: [
        {
            type: 'refresh',
            tooltip: 'Refresh',
            handler: function () {
                Ext.getStore('Pie').refreshData();
            }
        },
        {
            type: 'gear',
            tooltip: 'Switch Theme',
            handler: function () {
                var panel = this.up('panel'),
                    chart = panel.down('cartesian'),
                    themes = Ext.chart.theme,
                    themeNames = [], name, currentIndex;
                    for (name in themes) {
                        if (name !== 'Theme') {
                            themeNames.push(name);
                        }
                    }
                    currentIndex = themeNames.indexOf(chart.getTheme());
                    chart.setTheme(themeNames[(currentIndex + 1) % themeNames.length]);
                    chart.redraw();
            }
        },
        {
            type: 'search',
            tooltip: 'Toggle between Zoom and Pan',
            handler: function () {
                var panel = this.up('panel'),
                    chart = panel.down('cartesian'),
                    panzoom = chart.getInteractions()[0];

                panzoom.toggleMode();
            }
        },
        {
            type: 'pin',
            tooltip: 'Reset axes after pan/zoom',
            handler: function () {
                var panel = this.up('panel'),
                    chart = panel.down('cartesian'),
                    axes = chart.getAxes();

                axes[0].setVisibleRange([0, 1]);
                axes[1].setVisibleRange([0, 1]);
                chart.redraw();
            }
        }
    ],

    items: [{
        xtype: 'cartesian',
        store: 'Pie',
        theme: 'Sky',
        id: 'line-chart-markers',
        background: 'white',
        innerPadding: {top: 20},
        interactions: [
            'panzoom',
            'itemhighlight'
        ],
        legend: {
             position: 'bottom'
        },
        series: [
            {
                type: 'line',
                xField: 'name',
                yField: 'g1',
                fill: true,
                style: {
                    smooth: true,
                    miterLimit: 3,
                    lineCap: 'miter',
                    opacity: 0.7,
                    lineWidth: 8
                },
                title: 'Square',
                highlightCfg: {
                    scale: 0.9
                },
                marker: {
                    type: 'image',
                    src: 'resources/images/square.png',
                    width: 48,
                    height: 48,
                    x: -23,
                    y: -23,
                    scale: 0.7,
                    fx: {
                        duration: 200
                    }
                }
            },
            {
                type: 'line',
                xField: 'name',
                yField: 'g2',
                style: {
                    opacity: 0.7,
                    lineWidth: 8
                },
                title: 'Circle',
                highlightCfg: {
                    scale: 0.9
                },
                marker: {
                    type: 'image',
                    src: 'resources/images/circle.png',
                    width: 48,
                    height: 48,
                    x: -23,
                    y: -23,
                    scale: 0.7,
                    fx: {
                        duration: 200
                    }
                }
            },
            {
                type: 'line',
                xField: 'name',
                yField: 'g3',
                style: {
                    opacity: 0.7,
                    lineWidth: 8
                },
                title: 'Pentagon',
                highlightCfg: {
                    scale: 0.9
                },
                marker: {
                    type: 'image',
                    src: 'resources/images/pentagon.png',
                    width: 48,
                    height: 48,
                    x: -24,
                    y: -24,
                    scale: 0.7,
                    fx: {
                        duration: 200
                    }
                }
            }
        ],
        axes: [
            {
                type: 'numeric',
                position: 'left',
                fields: ['g1', 'g2', 'g3'],
                minimum: 0
            },
            {
                type: 'category',
                position: 'bottom',
                visibleRange: [0, 0.75],
                fields: 'name'
            }
        ]
    }]

});
