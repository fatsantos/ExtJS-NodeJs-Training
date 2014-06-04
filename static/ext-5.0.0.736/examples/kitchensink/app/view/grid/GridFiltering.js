Ext.define('KitchenSink.view.grid.GridFiltering', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-filtering',
    requires: [
        'Ext.toolbar.Paging',
        'Ext.ux.grid.FiltersFeature',
        'KitchenSink.store.Products'
    ],
    collapsible: true,
    iconCls: 'icon-grid',
    frame: true,
    width: 700,
    height: 500,

    emptyText: 'No Matching Records',
    loadMask: true,
    stateful: true,
    stateId: 'stateful-filter-grid',

    // Need a minHeight. Neptune resizable framed panels are overflow:visible
    // so as to enable resizing handles to be embedded in the border lines.
    minHeight: 200,
    title: 'Products',
    resizable: true,

    //<example>
    exampleDescription: [
        '<p>This example illustrates how to use the filtering feature of the Grid.</p>'
    ],
    otherContent: [{
        type: 'Store',
        path: 'app/store/Products.js'
    },{
        type: 'Model',
        path: 'app/model/grid/Product.js'
    }],
    themes: {
        classic: {
            width: 700,
            numericFilterWidth: 160
        },
        neptune: {
            width: 1050,
            numericFilterWidth: 224
        }
    },
    //</example>

    initComponent: function() {

        var me = this;

        // configure whether filter query is encoded or not (initially)
        var encode = false;

        // configure whether filtering is performed locally or remotely (initially)
        var local = true;

        // configure local and remote urls for demo purposes
        var urls = {
            local:  'resources/data/grid/grid-filter.json',  // static data file
            remote: 'resources/data/grid/grid-filter.php'
        };

        var filters = {
            ftype: 'filters',
            // encode and local configuration options defined previously for easier reuse
            encode: encode, // json encode the filter query
            local: local,   // defaults to false (remote filtering)

            // Filters are most naturally placed in the column definition, but
            // can also be added here.
            filters: [{
                type: 'boolean',
                dataIndex: 'visible'
            },{
                type: 'date',
                dataIndex: 'date'
            }]
        };

        var store = Ext.create('KitchenSink.store.Products');

        store.getProxy().setUrl( local ? urls.local : urls.remote );

        me.width = me.themeInfo.width;

        Ext.applyIf(me, {
            columns: me.createColumns(4),
            features: [filters],
            store: store,
            dockedItems: [{
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                store: store,
                // add some buttons to bottom toolbar just for demonstration purposes
                items: [
                    '->',
                    {
                        text: 'Encode: ' + (encode ? 'On' : 'Off'),
                        tooltip: 'Toggle Filter encoding on/off',
                        enableToggle: true,
                        scope: me,
                        handler: function (button, state) {
                            var encode = (this.filters.encode !== true);
                            var text = 'Encode: ' + (encode ? 'On' : 'Off');
                            this.filters.encode = encode;
                            this.filters.reload();
                            button.setText(text);
                        }
                    },
                    {
                        text: 'Local Filtering: ' + (local ? 'On' : 'Off'),
                        tooltip: 'Toggle Filtering between remote/local',
                        enableToggle: true,
                        scope: me,
                        handler: function (button, state) {
                            var local = (this.filters.local !== true),
                                text = 'Local Filtering: ' + (local ? 'On' : 'Off'),
                                newUrl = local ? urls.local : urls.remote,
                                store = this.view.getStore();

                            // update the GridFilter setting
                            this.filters.local = local;
                            // bind the store again so GridFilters is listening to appropriate store event
                            this.filters.bindStore(store);
                            // update the url for the proxy
                            store.proxy.url = newUrl;

                            button.setText(text);
                            store.load();
                        }
                    },
                    {
                        text: 'All Filter Data',
                        tooltip: 'Get Filter Data for Grid',
                        scope: me,
                        handler: function () {
                            var data = Ext.encode(this.filters.getFilterData());
                            Ext.Msg.alert('All Filter Data',data);
                        }
                    },{
                        text: 'Clear Filter Data',
                        scope: me,
                        handler: function () {
                            this.filters.clearFilters();
                        }
                    },{
                        text: 'Add Columns',
                        scope: me,
                        handler: function (button) {
                            if (this.headerCt.items.length < 6) {
                                this.headerCt.add(this.createColumns(6, 4));
                                this.view.refresh();
                                button.disable();
                            }
                        }
                    }
                ]
            }]
        });

        me.callParent(arguments);

        store.load();

    },

    // use a factory method to reduce code while demonstrating
    // that the GridFilter plugin may be configured with or without
    // the filter types (the filters may be specified on the column model
    createColumns : function (finish, start) {

        var columns = [{
            dataIndex: 'id',
            text: 'Id',
            // instead of specifying filter config just specify filterable=true
            // to use store's field's type property (if type property not
            // explicitly specified in store config it will be 'auto' which
            // GridFilters will assume to be 'StringFilter'
            filterable: true,
            width: 30,
            filter: {
                width: this.themeInfo.numericFilterWidth
            }
            //,filter: {type: 'numeric'}
        }, {
            dataIndex: 'company',
            text: 'Company',
            flex: 1,
            filter: {
                type: 'string'
                // specify disabled to disable the filter menu
                //, disabled: true
            }
        }, {
            dataIndex: 'price',
            text: 'Price',
            filter: {
                //type: 'numeric'  // specify type here or in store fields config
                width: this.themeInfo.numericFilterWidth
            },
            width: 90
        }, {
            dataIndex: 'size',
            text: 'Size',
            filter: {
                type: 'list' // Use the unique field values for the pick list
                //,phpMode: true
            },
            width: 120
        }, {
            dataIndex: 'date',
            text: 'Date',
            filter: true,
            renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            width: 120
        }, {
            dataIndex: 'visible',
            text: 'Visible'
            // this column's filter is defined in the filters feature config
        }];

        return columns.slice(start || 0, finish);
    }

});
