Ext.define('KitchenSink.view.charts.combination.Pareto', {
    extend: 'Ext.Panel',
    xtype: 'pareto-chart',

    // <example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',
    layout: {
        type: 'vbox',
        pack: 'center'
    },

    exampleDescription: [
        'Pareto chart, named after Vilfredo Pareto, is a chart that contains both column and line chart. Individual values are represented in descending order by bars, and the cumulative total is represented by the line.'
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

        this.myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: ['complaint', 'count', 'cumnumber', 'cumpercent' ],
            data: [
                { complaint: 'Overpriced', count: 543, cumnumber: 543, cumpercent: 31 },
                { complaint: 'Small Portions', count: 412, cumnumber: 955, cumpercent: 55 },
                { complaint: 'High Wait Time', count: 245, cumnumber: 1200, cumpercent: 69 },
                { complaint: 'Tasteless Food', count: 187, cumnumber: 1387, cumpercent: 80 },
                { complaint: 'Bad Ambiance', count: 134, cumnumber: 1521, cumpercent: 88 },
                { complaint: 'Not Clean', count: 98, cumnumber: 1619, cumpercent: 93 },
                { complaint: 'Too Noisy', count: 65, cumnumber: 1684, cumpercent: 97 },
                { complaint: 'Salty Food', count: 41, cumnumber: 1725, cumpercent: 99 },
                { complaint: 'Unfriendly Staff', count: 12, cumnumber: 1737, cumpercent: 100 }
            ]
        });

        //<example>
        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [
                '->',
            {
                text: 'Save Chart',
                handler: function() {
                    Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice){
                        if(choice == 'yes'){
                            me.down('cartesian').save({
                                type: 'image/png'
                            });
                        }
                    });

                }
            }]
        }];
        //</example>

        me.items = [{
            xtype: 'cartesian',
            width: '100%',
            height: 410,
            padding: '10 0 0 0',
            style: 'background: #fff',
            animation: true,
            shadow: false,
            store: this.myDataStore,
            insetPadding: 40,
            legend: {
                docked: 'right'
            },
            items: [{
                type: 'text',
                text: 'Restaurant Complaints by Reported Cause',
                font: '22px Helvetica',
                width: 100,
                height: 30,
                x: 40, // the sprite x position
                y: 20  // the sprite y position
            }, {
                type: 'text',
                text: 'Data: Restaurant Complaints',
                font: '10px Helvetica',
                x: 12,
                y: 390
            }],
            axes: [{
                type: 'numeric',
                position: 'left',
                fields: 'count',
                grid: true,
                minimum: 0
            }, {
                type: 'category',
                position: 'bottom',
                fields: 'complaint',
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }, {
                type: 'numeric',
                position: 'right',
                fields: 'cumnumber',
                renderer: function (v) {
                    return v + '%';
                }
            }],
            series: [{
                type: 'column',
                title: 'Cause',
                xField: 'complaint',
                yField: 'count',
                style: {
                    opacity: 0.80
                },
                highlight: {
                    fillStyle: '#000',
                    lineWidth: 2,
                    strokeStyle: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #fff',
                    height: 20,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('complaint') + ': ' + storeItem.get('count') + ' responses.');
                    }
                }
            }, {
                type: 'line',
                title: 'Cumulative %',
                xField: 'complaint',
                yField: 'cumnumber',
                style: {
                    lineWidth: 2,
                    opacity: 0.80
                },
                marker: {
                    type: 'text',
                    text: 'x',
                    y: '2'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #fff',
                    height: 20,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('complaint') + ': ' + storeItem.get('cumpercent') + '%');
                    }
                }
            }]
        //<example>
        }, {
            style: 'padding-top: 10px;',
            xtype: 'gridpanel',
            columns : {
                defaults: {
                    sortable: false,
                    menuDisabled: true
                },
                items: [
                    { text: 'Complaint', dataIndex: 'complaint', width: 175 },
                    { text: 'Count', dataIndex: 'count' },
                    { text: 'Cumulative', dataIndex: 'cumnumber' },
                    { text: 'Cumulative %', dataIndex: 'cumpercent', width: 175, renderer: function(v) { return v + '%'; } }
                ]
            },
            store: this.myDataStore,
            width: '100%'
        //</example>
        }];

        this.callParent();
    }
});
