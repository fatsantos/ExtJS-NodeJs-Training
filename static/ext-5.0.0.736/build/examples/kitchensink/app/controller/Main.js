Ext.define('KitchenSink.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
        'KitchenSink.view.*',
        'Ext.window.*'
    ],

    stores: [
        'Companies',
        'Restaurants',
        'Files',
        'States',
        'BigData',
        "USD2EUR",
        'Widgets',
        'Posts',
        'GeoData',
        'StandardCharts',
        'Pie',
        'StockPrice'
    ],

    config: {
        control: {
            navigation: {
                beforeselect: 'beforeNavSelectionChange',
                selectionchange: 'onNavSelectionChange'
            },
            '#codePreview tool[type=maximize]': {
                click: 'onMaximizeClick'
            },
            'tool[toast]': {
                click: 'showToast'
            },
            'tool[regionTool]': {
                click: 'onSetRegion'
            },
            'menuitem[showAnnouncements]': {
                click: 'onShowAnnouncements',
                beforerender: 'onBeforeRenderShowAnnouncements'
            }
        },
        refs: {
            viewport: 'viewport',
            navigation: 'navigation',
            contentPanel: 'contentPanel',
            descriptionPanel: 'descriptionPanel',
            codePreview: '#codePreview'
        },
        routes  : {
            ':xtype': {
                action: 'handleRoute',
                before: 'beforeHandleRoute'
            }
        }
    },

    beforeHandleRoute: function(id, action) {
        var me = this,
            navigation = me.getNavigation(),
            store = navigation.getStore(),
            node = store.getNodeById(id),
            bool;

        if (!node) {
            bool = true;
            Ext.Msg.alert(
                'Route Failure',
                'The view for ' + id + ' could not be found. You will be taken to the application\'s start',
                function() {
                    me.redirectTo(me.getApplication().getDefaultToken());
                }
            );
        }

        action.resume(bool);
    },

    handleRoute: function(id) {
        var me = this,
            navigation = me.getNavigation(),
            store = navigation.getStore(),
            node = id ? store.getNodeById(id) : store.getRootNode().firstChild.firstChild,
            text = node.get('text'),
            xtype = node.get('id'),
            alias = 'widget.' + xtype,
            contentPanel = me.getContentPanel(),
            themeName = Ext.themeName,
            cmp, className, ViewClass, clsProto;

        navigation.getSelectionModel().select(node);
        navigation.getView().focusNode(node);

        if (xtype) { // only leaf nodes have ids

            // Bracket removal, adding, title setting, and description update within one layout.
            Ext.suspendLayouts();

            contentPanel.removeAll(true);

            className = Ext.ClassManager.getNameByAlias(alias);
            ViewClass = Ext.ClassManager.get(className);
            clsProto = ViewClass.prototype;

            if (clsProto.themes) {
                clsProto.themeInfo = clsProto.themes[themeName];

                if (themeName === 'gray' || themeName === 'access') {
                    clsProto.themeInfo = Ext.applyIf(clsProto.themeInfo || {}, clsProto.themes.classic);
                } else if (themeName !== 'neptune' && themeName !== 'classic') {
                    if (themeName === 'crisp') {
                        clsProto.themeInfo = Ext.applyIf(clsProto.themeInfo || {}, clsProto.themes['neptune-touch']);
                    }
                    clsProto.themeInfo = Ext.applyIf(clsProto.themeInfo || {}, clsProto.themes.neptune);
                }
                // <debug warn>
                // Sometimes we forget to include allowances for other themes, so issue a warning as a reminder.
                if (!clsProto.themeInfo) {
                    Ext.log.warn ( 'Example \'' + className + '\' lacks a theme specification for the selected theme: \'' +
                        themeName + '\'. Is this intentional?');
                }
                // </debug>
            }

            cmp = new ViewClass();

            contentPanel.add(cmp);
            this.setupPreview(clsProto);

            contentPanel.setTitle(node.parentNode.get('text') + ' - ' + text);

            document.title = document.title.split(' - ')[0] + ' - ' + text;

            Ext.resumeLayouts(true);

            if (cmp.floating) {
                cmp.show();
            }
        }
    },

    setupPreview: function(clsProto) {
        var me = this,
            preview = me.getCodePreview(),
            otherContent = clsProto.otherContent,
            prefix = Ext.repoDevMode ? '' : '../../../kitchensink/',
            resources = [],
            codePreviewProcessed = clsProto.codePreviewProcessed,
            description = clsProto.exampleDescription;

        if (!codePreviewProcessed) {
            resources.push({
                type: 'View',
                path: clsProto.$className.replace(/\./g, '/').replace('KitchenSink', 'app') + '.js'
            });

            if (otherContent) {
                resources = resources.concat(otherContent);
            }

            // Clone everything, since we're about to hook up loaders
            codePreviewProcessed = clsProto.codePreviewProcessed = [];
            Ext.each(resources, function(resource) {
                resource.xtype = 'codeContent';
                resource.title = resource.type;
                //resource.tabConfig = {
                //    tooltip: resource.path
                //};
                var clone = Ext.apply({}, resource);
                codePreviewProcessed.push(clone);
                resource.loader = {
                    url: prefix + resource.path,
                    autoLoad: true,
                    rendererScope: me,
                    renderer: me.renderCodeMarkup,
                    resource: clone,
                    themeInfo: clsProto.themeInfo
                };
            });
        } else {
            resources = codePreviewProcessed;
        }

        Ext.suspendLayouts();
        preview.removeAll();

        if (Ext.isArray(description)) {
            clsProto.exampleDescription = description = description.join('');
        }

        me.description = description;

        //<debug>
        if (!me.description) {
            Ext.Error.raise('You must provide a description with all examples');
        }
        //</debug>

        // Defer the toast until we are clear of layout suspension.
        if (this.state.showAnnouncements) {
            setTimeout(function () {
                me.showToast();
            }, 1);
        }

        preview.add(resources);
        preview.setActiveTab(0);

        // Hide the Tab Panel if there's only one resource
        preview.tabBar.setVisible(resources.length > 1);        

        Ext.resumeLayouts(true);
        preview.activeView = clsProto;
    },

    showToast: function () {
        var me = this,
            toastAlignTo = me.getContentPanel().header,
            toast = me.toast;

        if (!toast) {
            me.toast = Ext.toast({
                cls: 'x-toast-light',
                closeAction: 'hide', // we plan to reuse this toast
                html: me.description,
                bodyPadding: 10,
                header: false,
                //anchor: toastAlignTo,
                maxWidth: Math.floor(toastAlignTo.getWidth() * 0.8),
                //title:'Description', // might need this if closable:true
                //closable: true, //TODO enable when styling is better
                //autoCloseDelay: 1000000,
                //anchorAlignment: 't-b',
                slideInDuration: 400,
                slideBackDuration: 1500,
                align: 't'
            });
        } else {
            toast.maxWidth = Math.floor(toastAlignTo.getWidth() * 0.8);
            toast.update(me.description);
        }
    },

    exampleRe: /^\s*\/\/\s*(\<\/?example\>)\s*$/,
    themeInfoRe: /this\.themeInfo\.(\w+)/g,

    renderCodeMarkup: function(loader, response) {
        var code = this.processText(response.responseText, loader.themeInfo);
        // Passed in from the block above, we keep the proto cloned copy.
        loader.resource.html = code;
        loader.getTarget().setHtml(code);
        prettyPrint();
        return true;
    },

    processText: function (text, themeInfo) {
        var lines = text.split('\n'),
            removing = false,
            keepLines = [],
            len = lines.length,
            exampleRe = this.exampleRe,
            themeInfoRe = this.themeInfoRe,
            encodeTheme = function (text, match) {
                return Ext.encode(themeInfo[match]);
            },
            i, line, code;

        for (i = 0; i < len; ++i) {
            line = lines[i];
            if (removing) {
                if (exampleRe.test(line)) {
                    removing = false;
                }
            } else if (exampleRe.test(line)) {
                removing = true;
            } else {
                // Replace "this.themeInfo.foo" with the value of "foo" properly encoded
                // for JavaScript (otherwise strings would not be quoted).
                line = line.replace(themeInfoRe, encodeTheme);
                keepLines.push(line);
            }
        }

        code = Ext.htmlEncode(keepLines.join('\n'));
        return '<pre class="prettyprint">' + code + '</pre>';
    },

    onSetRegion: function (tool) {
        var panel = tool.toolOwner;

        var regionMenu = panel.regionMenu || (panel.regionMenu =
            Ext.widget({
                xtype: 'menu',
                items: [{
                    text: 'North',
                    checked: panel.region === 'north',
                    group: 'mainregion',
                    handler: function () {
                        panel.setBorderRegion('north');
                    }
                },{
                    text: 'South',
                    checked: panel.region === 'south',
                    group: 'mainregion',
                    handler: function () {
                        panel.setBorderRegion('south');
                    }
                },{
                    text: 'East',
                    checked: panel.region === 'east',
                    group: 'mainregion',
                    handler: function () {
                        panel.setBorderRegion('east');
                    }
                },{
                    text: 'West',
                    checked: panel.region === 'west',
                    group: 'mainregion',
                    handler: function () {
                        panel.setBorderRegion('west');
                    }
                }]
            }));

        regionMenu.showBy(tool.el);
    },

    beforeNavSelectionChange: function(selModel, record, recIdx) {
        return record.isLeaf();
    },

    onNavSelectionChange: function(selModel, records) {
        var record = records[0];

        if (record && record.isLeaf()) {
            this.redirectTo(record.getId());
        }
    },

    onMaximizeClick: function(){
        var preview = this.getCodePreview();

        var w = new Ext.window.Window({
            rtl: false,
            maximized: true,
            title: 'Code Preview',
            closable: false,
            layout: 'fit',
            items: {
                xtype: 'codePreview',
                tools: [],
                showTitle: false,
                items: preview.activeView.codePreviewProcessed
            },
            tools: [{
                type: 'close',
                handler: function() {
                    w.hide(preview, function() {
                        w.destroy();
                    });
                }
            }]
        });
        w.show(preview);
    },

    init: function () {
        this.callParent(arguments);
        this.state = Ext.state.Manager.get('main') || {
            showAnnouncements: true
        };
    },

    onShowAnnouncements: function (menuitem) {
        this.state.showAnnouncements = menuitem.checked;
        Ext.state.Manager.set('main', this.state);
    },

    onBeforeRenderShowAnnouncements: function (menuitem) {
        menuitem.checked = this.state.showAnnouncements;
    }
});
