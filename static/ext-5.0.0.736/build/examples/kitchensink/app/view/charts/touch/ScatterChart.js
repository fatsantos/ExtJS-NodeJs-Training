Ext.define('KitchenSink.view.charts.touch.ScatterChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'scatter-chart-custom-icons',

    title: 'Scatter Chart with Custom Icons',
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
        '<p>This example shows how to create a scatter chart with custom icons.</p>'
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
                store.setData(store.generateData(25));
            }
        },
        {
            type: 'gear',
            tooltip: 'Switch Theme',
            handler: function () {
                var panel = this.ownerCt.ownerCt,
                    chart = Ext.ComponentQuery.query('cartesian', panel)[0],
                    themes = Ext.chart.theme,
                    themeNames = [], name, currentIndex;
                    for (name in themes) {
                        if (name != "Theme") {
                            themeNames.push(name);
                        }
                    }
                    currentIndex = themeNames.indexOf(chart.getTheme());
                    chart.setTheme(themeNames[(currentIndex + 1) % themeNames.length]);
                    chart.redraw();
            }
        }
    ],

    items: [{
        xtype: 'cartesian',
        store: 'Pie',
        theme: 'Category1',
        id: 'scatter-chart-custom-icons',
        background: 'white',
        interactions: 'crosszoom',
        series: [
            {
                type: 'scatter',
                xField: 'id',
                yField: 'g1',
                highlightCfg: {
                    strokeStyle: 'red',
                    lineWidth: 5
                },
                marker: {
                    type: 'path',
                    path: [
                        ['M' , 0, 1],
                        ['L', 1, 0],
                        ['L', 0, -1],
                        ['L', -1, 0],
                        ['Z']
                    ],
                    scale: 10,
                    lineWidth: 2
                }
            },
            {
                type: 'scatter',
                xField: 'id',
                yField: 'g2',
                highlightCfg: {
                    strokeStyle: 'red',
                    lineWidth: 5
                },
                // marker: {
                //     type: 'circle',
                //     radius: 10,
                //     lineWidth: 2
                // }
                marker: {
                    path: [
                        ['M',16,22.375],
                        ['L',7.116,28.83],
                        ['l',3.396,-10.438],
                        ['l',-8.883,-6.458],
                        ['l',10.979,0.002],
                        ['L',16.002,1.5],
                        ['l',3.391,10.434],
                        ['h',10.981],
                        ['l',-8.886,6.457],
                        ['l',3.396,10.439],
                        ['L',16,22.375],
                        ['L',16,22.375],
                        ['z']
                    ]
                }
            }
        ],
        axes: [
            {
                type: 'numeric',
                position: 'left',
                fields: ['g1', 'g2', 'g3', 'g4'],
                minimum: 0,
                visibleRange: [0, 1],
                style: {
                    estStepSize: 20
                },
                label: {
                    rotate: {
                        degrees: -30
                    }
                }
            },
            {
                type: 'numeric',
                position: 'bottom',
                // visibleRange: [0, 0.5],
                fields: 'id'
            }
        ]
    }],
    
    initComponent: function () {
        this.callParent();
        var store = Ext.getStore('Pie');
        store.setData(store.generateData(25));
    }
});
