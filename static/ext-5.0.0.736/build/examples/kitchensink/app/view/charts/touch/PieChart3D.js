Ext.define('KitchenSink.view.charts.touch.PieChart3D', {
    extend: 'Ext.panel.Panel',
    xtype: 'pie-chart-3d',

    title: '3D Pie Chart',
    collapsed: false,
    collapsible: true,
    draggable: true,
    resizable: true,
    width: 650,
    height: 510,
    border: true,
    colspan: 3,
    
    requires: [
        'Ext.chart.Chart'
    ],

    layout: 'fit',

    //<example>
    exampleDescription: [
        '<p>This example shows how to create a 3D Pie chart.</p>',
        '<p>The example makes use of the \'rotate\' interaction. To use it, click or tap and then drag anywhere on the chart.</p>'
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
                    chart = Ext.ComponentQuery.query('polar', panel)[0],
                    store = Ext.getStore('Pie');
                chart.setAnimation({
                    duration: 500,
                    easing: 'easeInOut'
                });
                store.refreshData();
            }
        },
        {
            type: 'gear',
            tooltip: 'Switch Theme',
            handler: function () {
                var panel = this.ownerCt.ownerCt,
                    chart = Ext.ComponentQuery.query('polar', panel)[0],
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
        xtype: 'polar',
        store: 'Pie',
        id: 'pie-chart-3d',
        theme: 'Category1',
        background: 'white',
        interactions: 'rotatePie3d',
        animation: {
            duration: 500,
            easing: 'easeIn'
        },
        series: [
            {
                type: 'pie3d',
                field: 'g1',
                donut: 30,
                distortion: 0.6,
                style: {
                    strokeStyle: 'white',
                    opacity: 0.90
                }
            }
        ]
    }]
});
