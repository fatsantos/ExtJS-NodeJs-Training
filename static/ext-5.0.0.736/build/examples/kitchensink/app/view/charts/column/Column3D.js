Ext.define('KitchenSink.view.charts.column.Column3D', {
    extend: 'Ext.Panel',
    xtype: 'column-3d',
    title: 'TITLE HERE',

    // <example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',
    layout: {
        type: 'vbox',
        pack: 'center'
    },

    exampleDescription: [
        '<p>The <b>Basic Column Chart</b> displays a set of random data in a column series.',
        'The <b>Reload Data</b> button will randomly generate a new set of data in the store.'
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
        //<example>
        me.dockedItems = {
            xtype: 'toolbar',
            dock: 'top',
            items: [{
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
        };
        //</example>

        me.items = [{
            xtype: 'cartesian',
            width: '100%',
            height: 400,

            style: 'background: #fff',
            animation: true,
            store: {type: 'climate'},
            axes: [{
                type: 'numeric',
                position: 'left',
                title: 'Number of Hits',
                grid: true,
                minimum: 0
            }, {
                type: 'category',
                position: 'bottom',
                title: 'Month of the Year'
            }],
            series: {
                type: 'column',
                axis: 'left',
                highlight: true,
                tips: {
                    trackMouse: true,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('month') + ': ' + storeItem.get('data1') + ' %');
                    }
                },
                xField: 'month',
                yField: 'high'
            }
        }];

        this.callParent();
    }

});