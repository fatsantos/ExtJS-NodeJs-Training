Ext.define('KitchenSink.view.charts.touch.ExtColumnChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'ext-column-chart',

    title: 'Columns',
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
        'Ext.chart.series.Bar',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category'
    ],

    layout: 'fit',

    //<example>
    exampleDescription: [
        '<p>Ext JS 5.0 uses the same charting library as Sencha Touch. ',
        'This example shows how to import the Column Chart demo from Ext JS 4.0 into Ext JS 5.0.</p>',
        '<p>The following configs have been changed:</p>',
        '<ul>',
        '<li><code>chart.colors</code> must be specified.',
        '<li><code>axis.type</code> must not be capitalized.',
        '<li><code>axis.titleMargin, axis.title.fontSize, chart.insetPadding</code> should be specified for proper rendering.',
        '<li><code>series.labelField</code> replaces <code>series.label.field</code>.',
        '<li><code>chart.interactions.iteminfo</code> must be declared in order to use <code>series.tips</code>.',
        '<li><code>chart.interactions.itemhighlight</code> and <code>series.highlightCfg</code> replace <code>series.highlight</code>.',
        '</ul>',
        '<p>The following features are missing:</p>',
        '<ul>',
        '<li><code>chart.legend</code>: Legend box',
        '<li><code>series.label.display</code>: Labels position',
        '<li><code>series.label.orientation</code>: Labels orientation',
        '<li><code>util.Format.numberRenderer</code>: Number renderer',
        '</ul>'
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
                    store = Ext.getStore('StandardCharts');
                store.refreshData();
            }
        },
        {
            type: 'search',
            tooltip: 'Toggle between Zoom and Pan',
            handler: function () {
                var panel = this.ownerCt.ownerCt,
                    chart = Ext.ComponentQuery.query('cartesian', panel)[0],
                    interactions = Ext.ComponentQuery.query('interaction', panel);
                Ext.each(interactions, function(interaction) {
                    if (interaction.type == "panzoom") {
                        interaction.toggleMode();
                        return false;
                    }
                });
            }
        },
        {
            type: 'gear',
            tooltip: 'Reset axes after pan/zoom',
            handler: function () {
                var panel = this.ownerCt.ownerCt,
                    chart = Ext.ComponentQuery.query('cartesian', panel)[0];

                Ext.ComponentQuery.query('axis', chart)[0].setVisibleRange([0, 1]);
                Ext.ComponentQuery.query('axis', chart)[1].setVisibleRange([0, 1]);
                chart.redraw();
            }
        }
    ],

    items: [{
        xtype: 'cartesian',
        store: 'StandardCharts',
        id: 'ext-column-chart',
        background: 'white',
        colors: ['#94AE0A'],
        insetPadding: {top: 20, right: 20, bottom: 0, left: 0},
        interactions: ['panzoom', 'iteminfo', 'itemhighlight'],
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['data1'],
            title: {
                text: 'Number of Hits',
                fontSize: 16
            },
            titleMargin: 20,
            grid: true,
            minimum: 0
        }, {
            type: 'category',
            position: 'bottom',
            fields: ['name'],
            title: {
                text: 'Month of the Year',
                fontSize: 16
            },
            titleMargin: 20
        }],
        series: [{
            type: 'bar',
            xField: 'name',
            yField: 'data1',
            highlightCfg: {
                strokeStyle: '#f00'
            },
            tips: {
                trackMouse: true,
                anchor: "left",
                width: 140,
                height: 28,
                renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('name') + ': $' + storeItem.get('data1'));
                }
            },
            labelField: 'data1',
            label: {
                color: '#333',
                fontSize: 18
            },
            style: {
                strokeStyle: '#06d',
                lineWidth: 2,
                maxBarWidth: 30
            }
        }]
    }]

});
