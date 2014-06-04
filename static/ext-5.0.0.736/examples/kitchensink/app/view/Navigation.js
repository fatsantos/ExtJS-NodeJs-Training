Ext.define('KitchenSink.view.Navigation', {
    extend: 'Ext.tree.Panel',
    xtype: 'navigation',
    title: 'Examples',
    rootVisible: false,
    lines: false,
    useArrows: true,
    hideHeaders: true,

    initComponent: function() {
        var me = this,
            map = Ext.Object.fromQueryString(location.search),
            charts = ('charts' in map) && !/0|false|no/i.test(map.charts),
            store = Ext.create('Ext.data.TreeStore', {
                root: {
                    expanded: true,
                    children: charts ? me.getChartNavItems() : me.getNavItems()
                }
            });

        me.columns = [{
            xtype: 'treecolumn',
            flex: 1,
            dataIndex: 'text',
            scope: me,
            renderer: function(value) {
                var searchString = this.searchField.getValue();

                if (searchString.length > 0) {
                    return this.strMarkRedPlus(searchString, value);
                }

                return value;
            }
        }];

        Ext.apply(me, {
            store: store,
            dockedItems : [
                {
                    xtype: 'textfield',
                    dock: 'top',
                    emptyText: 'Search',
                    enableKeyEvents: true,

                    triggers: {
                        clear: {
                            cls: 'x-form-clear-trigger',
                            handler: 'onClearTriggerClick',
                            hidden: true,
                            scope: 'this'
                        },
                        search: {
                            cls: 'x-form-search-trigger',
                            weight: 1,
                            handler: 'onSearchTriggerClick',
                            scope: 'this'

                        }
                    },

                    onClearTriggerClick: function() {
                        this.setValue();
                        me.store.clearFilter();
                        this.getTrigger('clear').hide();
                    },

                    onSearchTriggerClick: function() {
                        me.filterStore(this.getValue());
                    },

                    listeners: {
                        keyup: {
                            fn: function(field, event, eOpts) {
                                var value = field.getValue();

                                field.getTrigger('clear')[(value.length > 0) ? 'show' : 'hide']();

                                this.filterStore(value);
                            },
                            buffer: 300
                        },

                        render: function(field) {
                            this.searchField = field;
                        },

                        scope: me
                    }
                }
            ]
        });

        me.callParent(arguments);
    },
    getChartNavItems: function() {
        return [
            {
                text: "Charts",
                expanded: true,
                children: [
                    {
                        text: "Column Charts", expanded: true, children: [
                        { id: "basic-column", text: "Basic", leaf: true },
                        { id: "clustered-column", text: "Clustered", leaf: true },
                        { id: "stacked-column", text: "Stacked", leaf: true },
                        { id: "column-stacked-100", text: "100% Stacked", leaf: true },
                        { id: "column-chart-renderer", text: "With Renderer", leaf: true },
                        { id: "column-multi-axis", text: "Multiaxis", leaf: true },
                        { id: "column-chart-3d", text: "3D Columns", leaf: true }
                    ]
                    },
                    {
                        text: "Bar Charts", expanded: true, children: [
                        { id: "basic-bar", text: "Basic", leaf: true },
                        { id: "clustered-bar", text: "Clustered", leaf: true },
                        { id: "stacked-bar", text: "Stacked", leaf: true },
                        { id: "bar-stacked-100", text: "100% Stacked", leaf: true }
                    ]
                    },
                    {
                        text: "Line Charts", expanded: true, children: [
                        { id: "basic-line", text: "Basic", leaf: true },
                        { id: "marked-line", text: "Basic + Markers", leaf: true },
                        { id: "spline-line", text: "Spline", leaf: true },
                        { id: "marked-spline-line", text: "Spline + Markers", leaf: true },
                        { id: "plot-chart", text: "Plot", leaf: true },
                        { id: 'line-chart-markers', text: 'With Image Markers', leaf: true },
                        { id: "line-chart", text: "With Zoom", leaf: true },
                        { id: "line-chart-renderer", text: "With Renderer", leaf: true }
                    ]
                    },
                    {
                        text: "Area Charts", expanded: true, children: [
                        { id: "basic-area", text: "Basic", leaf: true },
                        { id: "stacked-area", text: "Stacked", leaf: true },
                        { id: "area-stacked-100", text: "100% Stacked", leaf: true }
                    ]
                    },
                    {
                        text: "Scatter Charts", expanded: true, children: [
                        { id: "basic-scatter", text: "Basic", leaf: true },
                        { id: "scatter-chart-custom-icons", text: "Custom Icons", leaf: true },
                        { id: "bubble-chart", text: "Bubble", leaf: true }
                    ]
                    },
                    {
                        text: "Financial Charts", expanded: true, children: [
                        { id: "candlestick-chart", text: "Candlestick", leaf: true },
                        { id: "ohlc-chart", text: "OHLC", leaf: true }
                    ]
                    },
                    {
                        text: "Pie Charts", expanded: true, children: [
                        { id: "basic-pie", text: "Basic", leaf: true },
                        { id: "custom-pie", text: "Spie", leaf: true },
                        { id: "basic-donut", text: "Donut", leaf: true },
                        { id: "pie-chart-3d", text: "3D Pie", leaf: true }
                    ]
                    },
                    {
                        text: "Radial Charts", expanded: true, children: [
                        { id: "basic-radial", text: "Basic", leaf: true },
                        { id: "filled-radial", text: "Filled", leaf: true },
                        { id: "marked-radial", text: "Marked", leaf: true },
                        { id: "radial-multi-axis", text: "Multiaxis", leaf: true }
                    ]
                    },
//                    {
//                        text: "Gauge Charts", expanded: true, children: [
//                        { id: "basic-gauge", text: "Basic", leaf: true }
//                    ]
//                    },
                    {
                        text: "Combination Charts", expanded: true, children: [
//                        { id: "pareto-chart", text: "Pareto", leaf: true },
                        { id: "dashboard-chart", text: "Interactive Dashboard", leaf: true },
                        { id: "theme-chart", text: "Custom Theme", leaf: true }
                    ]
                    }
                ]
            },
            { id: "free-paint", text: "Free Paint", leaf: true }
        ]
    },
    getNavItems: function() {
        return [
            {
                text: "Panels",
                expanded: true,
                children: [
                    { id: "basic-panels", text: "Basic Panel", leaf: true },
                    { id: "framed-panels", text: "Framed Panel", leaf: true }
                ]
            },
            {
                text: "Grids",
                expanded: true,
                children: [
                    { id: "array-grid", text: "Array Grid", leaf: true },
                    { id: "grouped-grid", text: "Grouped Grid", leaf: true },
                    { id: "locking-grid", text: "Locking Grid", leaf: true },
                    { id: "grouped-header-grid", text: "Grouped Header Grid", leaf: true },
                    { id: "multi-sort-grid", text: "Multiple Sort Grid", leaf: true },
                    { id: "progress-bar-pager", text: "Progress Bar Pager", leaf: true },
                    { id: "sliding-pager", text: "Sliding Pager", leaf: true },
                    { id: "xml-grid", text: "XML Grid", leaf: true },
                    { id: "paging-grid", text: "Paging", leaf: true },
                    { id: "grid-plugins", text: "Grid Plugins", leaf: true },
                    { id: "grid-filtering", text: "Grid Filtering", leaf: true },
                    { id: "reconfigure-grid", text: "Reconfigure Grid", leaf: true },
                    { id: "property-grid", text: "Property Grid", leaf: true },
                    { id: "cell-editing", text: "Cell Editing", leaf: true },
                    { id: "row-expander-grid", text: "Row Expander", leaf: true },
                    { id: "big-data-grid", text: "Big Data", leaf: true },
                    { id: "widget-grid", text: "Widget grid", leaf: true },
                    { id: "customer-grid", text: "Customer/Order grid", leaf: true }
                ]
            },
            {
                text: 'Data Binding',
                expanded: true,
                children: [{
                    text: 'Basic',
                    expanded: true,
                    children: [
                        { id: 'binding-hello-world', text: 'Hello World', leaf: true },
                        { id: 'binding-dynamic', text: 'Dynamic', leaf: true },
                        { id: 'binding-two-way', text: 'Two Way', leaf: true },
                        { id: 'binding-formulas', text: 'Formulas', leaf: true },
                        { id: 'binding-associations', text: 'Associations', leaf: true },
                        { id: 'binding-component-state', text: 'Component State', leaf: true },
                        { id: 'binding-chained-stores', text: 'Chaining Stores', leaf: true}
                    ]
                }, {
                    text: 'Advanced',
                    expanded: true,
                    children: [
                        { id: 'binding-combo-chaining', text: 'Chained ComboBoxes', leaf: true },
//                        { id: 'binding-gridform', text: 'Grid + Form', leaf: true },
                        { id: 'binding-model-validation', text: 'Model Validation', leaf: true },
                        { id: 'binding-field-validation', text: 'Field Validation', leaf: true },
                        { id: 'binding-two-way-formulas', text: 'Two-Way Formulas', leaf: true }
                    ]
                }]
            },
            {
                text: "Trees",
                expanded: true,
                children: [
                    { id: "basic-trees", text: "Basic Trees", leaf: true },
                    { id: "tree-reorder", text: "Tree Reorder", leaf: true },
                    { id: "tree-grid", text: "Tree Grid", leaf: true },
                    { id: "tree-two", text: "Two Trees", leaf: true },
                    { id: "check-tree", text: "Check Tree", leaf: true },
                    { id: "tree-xml", text: "XML Tree", leaf: true },
                    { id: "filtered-tree", text: "Filtered Tree", leaf: true },
                    { id: "heterogeneous-tree", text: "Heterogeneous Tree", leaf: true }
                ]
            },
            {
                text: "Tabs",
                expanded: true,
                children: [
                    { id: "basic-tabs", text: "Basic Tabs", leaf: true },
                    { id: "plain-tabs", text: "Plain Tabs", leaf: true },
                    { id: "framed-tabs", text: "Framed Tabs", leaf: true },
                    { id: "icon-tabs", text: "Icon Tabs", leaf: true }
                ]
            },
            {
                text: "Windows",
                expanded: true,
                children: [
                    { id: "basic-window", text: "Basic Window", leaf: true },
                    { id: "message-box", text: "Message Box", leaf: true }
                ]
            },
            {
                text: "Buttons",
                expanded: true,
                children: [
                    { id: "basic-buttons", text: "Basic Buttons", leaf: true },
                    { id: "toggle-buttons", text: "Toggle Buttons", leaf: true },
                    { id: "menu-buttons", text: "Menu Buttons", leaf: true },
                    { id: "menu-bottom-buttons", text: "Menu Bottom Buttons", leaf: true },
                    { id: "split-buttons", text: "Split Buttons", leaf: true },
                    { id: "split-bottom-buttons", text: "Split Bottom Buttons", leaf: true },
                    { id: "left-text-buttons", text: "Left Text Buttons", leaf: true },
                    { id: "right-text-buttons", text: "Right Text Buttons", leaf: true },
                    { id: "link-buttons", text: "Link Buttons", leaf: true }
                ]
            },
            {
                text: "DataView",
                expanded: true,
                children: [
                    { id: "dataview-multisort", text: "Multisort DataView", leaf: true }
                ]
            },
            {
                text: "Forms",
                expanded: true,
                children: [
                    { id: "login-form", text: "Login Form", leaf: true },
                    { id: "contact-form", text: "Contact Form", leaf: true },
                    { id: "register-form", text: "Register Form", leaf: true  },
                    { id: "form-number", text: "Number Field", leaf: true },
                    { id: "form-date", text: "Date/Month Picker", leaf: true },
                    // TODO: EXTJSIV-12615
                    // { id: "multicolumn-form", text: "Multi Column Form", leaf: true },
                    { id: "form-checkout", text: "Checkout Form", leaf: true },
                    { id: 'field-replicator', text: 'Field Replicator', leaf: true },
                    { id: "form-grid", text: "Form with Grid", leaf: true },
                    { id: "form-tag", text: "Tag Field", leaf: true },
                    { id: 'multi-selector', text: 'Multi-Selector Grid', leaf: true },
                    { id: 'field-types', text: 'Field Types', leaf: true},
                    { id: 'form-fieldcontainer', text: 'Field Container', leaf: true}
                ]
            },
            {
                text: "Toolbars",
                expanded: true,
                children: [
                    { id: "basic-toolbar", text: "Basic Toolbar", leaf: true },
                    { id: "docked-toolbars", text: "Docked Toolbar", leaf: true }
                ]
            },
            {
                text: "Layout",
                expanded: true,
                children: [
                    { id: "layout-accordion", text: "Accordion Layout", leaf: true }
                ]
            },
            {
                text: "Slider",
                expanded: true,
                children: [
                    { id: "slider-field", text: "Slider Field", leaf: true }
                ]
            },
            {
                text: "Drag & Drop",
                expanded: true,
                children: [
                    { id: "dd-field-to-grid", text: "Field to Grid", leaf: true },
                    { id: "dd-grid-to-form", text: "Grid to Form", leaf: true },
                    { id: "dd-grid-to-grid", text: "Grid to Grid", leaf: true }
                ]
            },
            {
                text: "Enterprise",
                expanded: true,
                children: [
                    { id: "amf-grid", text: "AMF Grid", leaf: true },
                    { id: "soap-grid", text: "Soap Grid", leaf: true }
                ]
            }
        ];
    },

    filterStore: function(value) {
        var me = this,
            store = me.store,
            searchString = value.toLowerCase(),
            filterFn = function(node) {
                var children = node.childNodes,
                    len      = children && children.length,
                    visible  = v.test(node.get('text')),
                    i;

                // If the current node does NOT match the search condition
                // specified by the user...
                if ( !visible ) {

                    // Check to see if any of the child nodes of this node
                    // match the search condition.  If they do then we will
                    // mark the current node as visible as well.
                    for (i = 0; i < len; i++) {
                        if ( children[i].isLeaf() ) {
                            visible = children[i].get('visible');
                        }
                        else {
                            visible = filterFn(children[i]);
                        }
                        if (visible) {
                            break;
                        }
                    }

                }

                else { // Current node matches the search condition...

                    // Force all of its child nodes to be visible as well so
                    // that the user is able to select an example to display.
                    for (i = 0; i < len; i++) {
                        children[i].set('visible', true );
                    }

                }

                return visible;
            }, v;

        if (searchString.length < 1) {
            store.clearFilter();
        } else {
            v = new RegExp(searchString, 'i');
            store.getFilters().replaceAll({
                filterFn: filterFn
            });
        }
    },

    strMarkRedPlus : function (search, subject) {
        return subject.replace(
            new RegExp( '('+search+')', "gi" ),
            "<span style='color: red;'><b>$1</b></span>"
        );
    }
});
