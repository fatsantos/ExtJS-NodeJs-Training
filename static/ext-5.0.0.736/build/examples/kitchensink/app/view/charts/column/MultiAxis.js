Ext.define('KitchenSink.view.charts.column.MultiAxis', {
    extend: 'Ext.container.Container',
    xtype: 'column-multi-axis',

    // <example>
    // Content between example tags is omitted from code preview.
    layout: 'fit',

    exampleDescription: [
        'This example shows how to define multiple axes in a single direction. It also shows how to have slave axes linked to the master axis. Slave axes mirror the data and the layout of the master axis, but can be styled and positioned differently. The example also shows how to use gradients in charts.',
        '<p>Click and drag to select a region to zoom into. Double-click to undo the last zoom.</p>'
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
    // </example>

    initComponent: function() {
        var me = this;

        var highSeries = {
            type: 'bar',
            xField: 'month',
            yField: 'high',
            yAxis: 'celsius-axis',
            style: {
                minGapWidth: 10
            },
            subStyle: {
                fillStyle: 'url(#rainbow)'
            }
        },
        lowSeries = Ext.apply({}, {
            yField: ['low'],
            subStyle: {
                fillStyle: 'none'
            }
        }, highSeries);

        me.items = [{
            xtype: 'cartesian',
            store: {type: 'climate'},
            width: '100%',
            height: 510,
            insetPadding: 10,
            innerPadding: {
                left: 20,
                right: 20,
                top: 20
            },
            interactions: 'crosszoom',
            axes: [
                {
                    id: 'celsius-axis',
                    type: 'numeric',
                    titleMargin: 20,
                    position: 'left',
                    title: {
                        text: 'Temperature in °C',
                        fontSize: 14,
                        fillStyle: 'red'
                    },
                    grid: true,
                    listeners: {
                        rangechange: function (range) {
                            var fAxis = chart && chart.getAxis('fahrenheit-axis');
                            if (fAxis) {
                                fAxis.setMinimum(range[0] * 1.8 + 32);
                                fAxis.setMaximum(range[1] * 1.8 + 32);
                            }
                        }
                    }
                },
                {
                    type: 'numeric',
                    id: 'fahrenheit-axis',
                    position: 'right',
                    titleMargin: 20,
                    title: {
                        text: 'Temperature in °F',
                        fontSize: 14
                    }
                },
                {
                    id: 'months-axis',
                    type: 'category',
                    position: 'bottom'
                },
                {
                    position: 'top',
                    linkedTo: 'months-axis',
                    title: {
                        text: 'Climate data for Redwood City, California',
                        fontSize: 16,
                        fillStyle: 'green'
                    },
                    titleMargin: 20
                }
            ],
            series: [
                highSeries,
                lowSeries
            ],
            gradients: [{
                id: 'rainbow',
                type: 'linear',
                degrees: 270,
                stops: [
                    {
                        offset: 0,
                        color: '#78C5D6'
                    },
                    {
                        offset: 0.14,
                        color: '#449AA7'
                    },
                    {
                        offset: 0.28,
                        color: '#79C267'
                    },
                    {
                        offset: 0.42,
                        color: '#C4D546'
                    },
                    {
                        offset: 0.56,
                        color: '#F5D63D'
                    },
                    {
                        offset: 0.70,
                        color: '#F18B32'
                    },
                    {
                        offset: 0.84,
                        color: '#E767A1'
                    },
                    {
                        offset: 1,
                        color: '#BF62A6'
                    }
                ]
            }]
        }];

        this.callParent();

        var chart = me.down('cartesian');
    }
});
