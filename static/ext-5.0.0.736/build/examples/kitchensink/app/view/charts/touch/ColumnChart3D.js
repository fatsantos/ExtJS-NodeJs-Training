
Ext.define('KitchenSink.view.charts.touch.ColumnChart3D', {
    extend: 'Ext.panel.Panel',
    xtype: 'column-chart-3d',

    title: '3D Column Chart',
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
        '<p>This example shows how to use custom sprites to create a 3D Column Chart.</p>',
        'Click and drag to zoom the chart.'
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
                var chart = this.up('panel').down('cartesian');
                chart.getStore().refreshData();
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
                        if (name != 'Theme') {
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
        store: {type: 'climate'},
        theme: 'Category5',
        id: 'column-chart-3d',
        background: 'white',
        insetPadding: 20,
        innerPadding: {
            top: 22
        },
        interactions: [
            {
                type: 'panzoom',
                zoomOnPanGesture: true
            }
        ],
        series: {
            type: 'column3d',
            xField: 'month',
            yField: 'high',
            style: {
                maxBarWidth: 50
            }
        },
        axes: [
            {
                type: 'numeric',
                position: 'left',
                grid: true,
                label: {
                    rotate: {
                        degrees: -30
                    }
                }
            },
            {
                type: 'category',
                position: 'bottom'
            }
        ]
    }]

});


/*
 *  3D Column Sprite
 */

Ext.define('KitchenSink.view.charts.touch.ColumnSprite3D', {
    alias: 'sprite.columnSeries3d',
    extend: 'Ext.chart.series.sprite.Bar',
    inheritableStatics: {
        def: {
            defaults: {
                transformFillStroke: true
            }
        }
    },
    lastClip: null,

    drawBar: function (ctx, surface, clip, left, top, right, bottom, itemId) {
        var me = this,
            attr = me.attr,
            center = (left + right) / 2,
            barWidth = (right - left) * 0.33333,
            depthWidth = barWidth * 0.5,
            color = Ext.draw.Color.create(attr.fillStyle),
            darkerColor = color.createDarker(0.05),
            lighterColor = color.createLighter(0.25);

        // top
        ctx.beginPath();
        ctx.moveTo(center - barWidth, top);
        ctx.lineTo(center - barWidth + depthWidth, top + depthWidth);
        ctx.lineTo(center + barWidth + depthWidth, top + depthWidth);
        ctx.lineTo(center + barWidth, top);
        ctx.lineTo(center - barWidth, top);
        ctx.fillStyle = lighterColor.toString();
        ctx.fillStroke(attr);

        // right side
        ctx.beginPath();
        ctx.moveTo(center + barWidth, top);
        ctx.lineTo(center + barWidth + depthWidth, top + depthWidth);
        ctx.lineTo(center + barWidth + depthWidth, bottom + depthWidth);
        ctx.lineTo(center + barWidth, bottom);
        ctx.lineTo(center + barWidth, top);
        ctx.fillStyle = darkerColor.toString();
        ctx.fillStroke(attr);

        // front
        ctx.beginPath();
        ctx.moveTo(center - barWidth, bottom);
        ctx.lineTo(center - barWidth, top);
        ctx.lineTo(center + barWidth, top);
        ctx.lineTo(center + barWidth, bottom);
        ctx.lineTo(center - barWidth, bottom);
        ctx.fillStyle = darkerColor.toString();
        ctx.fillStyle = color.toString();
        ctx.fillStroke(attr);
    }
});

/*
 *  3D Column Series
 */

Ext.define('KitchenSink.view.charts.touch.ColumnSeries3D', {
    extend: 'Ext.chart.series.Bar',
    requires: ['KitchenSink.view.charts.touch.ColumnSprite3D'],
    seriesType: 'columnSeries3d',
    alias: 'series.column3d',
    type: 'column3d',
    config: {
        itemInstancing: null
    }
});

