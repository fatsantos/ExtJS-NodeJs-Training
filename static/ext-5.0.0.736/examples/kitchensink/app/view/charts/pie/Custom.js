Ext.define('KitchenSink.view.charts.pie.Custom', {
    extend: 'Ext.Panel',
    xtype: 'custom-pie',

    // <example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',
    layout: {
        type: 'vbox',
        pack: 'center'
    },

    exampleDescription: [
        'A variant of the pie chart, the spie chart allows the comparison of a set of data at two different states.',
        '<p>The example makes use of two interactions: \'itemhighlight\' and \'rotate\'. To use the first one, hover over or tap on a pie sector. To use the second one, click or tap and then drag anywhere on the chart.</p>'
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
        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [
                '->',
            {
                text: 'Preview',
                handler: function() {
                    me.down('polar').preview();
                }
            }]
        }];
        //</example>

        me.items = [{
            xtype: 'polar',
            width: '100%',
            height: 510,
            padding: '10 0 0 0',
            style: 'background: #fff',
            animation: true,
            shadow: true,
            store: {type: 'device-market-share'},
            insetPadding: 30,
            innerPadding: 20,
            legend: {
                docked: 'bottom'
            },
            interactions: ['rotate', 'itemhighlight'],
            items: [{
                type: 'text',
                text: 'Pie Charts - Custom Slice Sizing',
                font: '22px Helvetica',
                width: 100,
                height: 30,
                x: 40, // the sprite x position
                y: 20  // the sprite y position
            }, {
                type: 'text',
                text: 'Data: IDC Predictions - 2017',
                font: '10px Helvetica',
                x: 12,
                y: 435
            }, {
                type: 'text',
                text: 'Source: Internet',
                font: '10px Helvetica',
                x: 12,
                y: 445
            }],
            series: [{
                type: 'pie',
                animation: {easing: 'easeOut', duration: 500},
                angleField: 'data1',  // bind angle span to visits
                lengthField: 'data2', // bind pie slice length to views
                showInLegend: true,
                clockwise: false,
                highlightCfg: {
                    margin: 20
                },
                label: {
                    field: 'os',        // bind label text to name
                    display: 'outside',
                    font: '14px Arial'
                },
                style: {
                    strokeStyle: 'white',
                    lineWidth: 1
                },
                //<example>
                // add renderer
//                renderer: function(sprite, record, attr) {
//                    var value = (record.get('data1') >> 0) % 9,
//                        color = [ "#94ae0a", "#115fa6", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"][value];
//                    return Ext.apply(attr, {
//                        fill : color
//                    });
//                },
                //</example>
                tips: {
                    trackMouse: true,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('os') + ': ' + storeItem.get('data1') + '%');
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
                    { text: 'OS', dataIndex: 'os' },
                    { text: 'Market Share', dataIndex: 'data1', width: 150, renderer: function(v) { return v + '%'; } },
                    { text: 'Growth', dataIndex: 'data2', width: 150, renderer: function(v) { return v + '%'; } }
                ]
            },
            store: {type: 'device-market-share'},
            width: '100%'
        //</example>
        }];

        this.callParent();
    }
});
