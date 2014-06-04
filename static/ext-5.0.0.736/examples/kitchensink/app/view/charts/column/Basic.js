Ext.define('KitchenSink.view.charts.column.Basic', {
    extend: 'Ext.Panel',
    xtype: 'basic-column',

    // <example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',

    layout: 'fit',

    exampleDescription: [
        '<p>The <b>Basic Column Chart</b> displays a set of random data in a column series.',
        'The <b>Reload Data</b> button will randomly generate a new set of data in the store.',
        '<p>Tapping or hovering a column will highlight it.</p>'
    ],
    // </example>

    initComponent: function () {
        var me = this;

        me.items = {
            xtype: 'cartesian',
            store: {
                type: 'climate'
            },
            width: 600,
            height: 410,
            insetPadding: {
                top: 40,
                bottom: 40,
                left: 20,
                right: 40
            },
            interactions: 'itemhighlight',
            axes: [{
                type: 'numeric',
                position: 'left',
                titleMargin: 20,
                title: {
                    text: 'Temperature in °C',
                    fontSize: 14
                },
                listeners: {
                    rangechange: function (range) {
                        var store = this.getChart().getStore(),
                            min = Infinity,
                            max = -Infinity,
                            value;

                        store.each(function (rec) {
                            var value = rec.get('high');
                            if (value > max) {
                                max = value;
                            }
                            if (value < min) {
                                min = value;
                            }
                        });

                        value = (min + max) / 2;
                        this.setLimits({
                            value: value,
                            line: {
                                title: {
                                    text: 'Average high: ' + (value * 1.8 + 32).toFixed(2) +'°F'
                                },
                                lineDash: [2,2]
                            }
                        });
                    }
                }
            }, {
                type: 'category',
                position: 'bottom'
            }],
            animation: {
                easing: 'bounceOut',
                duration: 500
            },
            series: {
                type: 'bar',
                axis: 'left',
                xField: 'month',
                yField: 'high',
                style: {
                    minGapWidth: 20
                },
                highlightCfg: {
                    strokeStyle: 'black',
                    fillStyle: '#c1e30d',
                    lineDash: [5, 3]
                },
                label: {
                    field: 'high',
                    display: 'insideEnd',
                    renderer: function (value) {
                        return value.toFixed(1);
                    }
                }
            },
            items: {
                type: 'text',
                text: 'Redwood City Climate Data',
                font: '22px Helvetica',
                width: 100,
                height: 30,
                x: 40, // the sprite x position
                y: 20  // the sprite y position
            }
        };
        //<example>
        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: ['->', {
                text: 'Preview',
                handler: function() {
                    me.down('cartesian').preview();
                }
            }, {
                text: 'Reload Data',
                handler: function() {
                    me.down('cartesian').getStore().refreshData();
                }
            }]
        }];
        //</example>

        this.callParent();
    }
});
