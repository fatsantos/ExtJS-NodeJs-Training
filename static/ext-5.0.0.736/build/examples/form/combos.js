Ext.require([
    'Ext.form.field.ComboBox',
    'Ext.window.MessageBox',
    'Ext.form.FieldSet',
    'Ext.tip.QuickTipManager',
    'Ext.data.*'
]);

// Define the model for a State
Ext.define('State', {
    extend: 'Ext.data.Model',
    fields: [
        {type: 'string', name: 'abbr'},
        {type: 'string', name: 'name'},
        {type: 'string', name: 'slogan'}
    ]
});

function createStore(cfg) {
    // The data store holding the states; shared by each of the ComboBox examples below
    return Ext.create('Ext.data.Store', Ext.apply({
        autoDestroy: true,
        model: 'State',
        data: Ext.example.states
    }, cfg || {}));
}

Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();

    Ext.create('Ext.form.field.ComboBox', {
        fieldLabel: 'Select State',
        renderTo: 'remoteQueryCombo',
        displayField: 'name',
        width: 500,
        labelWidth: 130,
        store: createStore({
            proxy: {
                type: 'ajax',
                url: '../shared/states_remote/states.php',
                reader: {
                    type: 'array',
                    rootProperty: 'data'
                }
            },
            data: null
        }),
        queryParam: 'q',
        queryMode: 'remote',
        listeners: {
            select: function () {
                Ext.Msg.alert('State', 'Chosen state: ' + this.getValue());
            }
        }
    });

    Ext.create('Ext.form.field.ComboBox', {
        fieldLabel: 'Select State',
        renderTo: 'remoteLoadedCombo',
        displayField: 'name',
        width: 500,
        labelWidth: 130,
        store: createStore({
            proxy: {
                type: 'ajax',
                url: '../shared/states_remote/states.js',
                reader: {
                    type: 'array'
                }
            },
            data: null,
            autoLoad: true
        }),
        queryMode: 'local',
        tpl: '<ul class="x-list-plain">' +
                '<tpl for=".">' +
                    '<li class="x-grid-group-hd x-grid-group-title">{abbr}</li>' +
                    '<li class="x-boundlist-item">' +
                        '{name}, {slogan}' +
                    '</li>'+
                '</tpl>'+
            '</ul>'
    });

    // Simple ComboBox using the data store
    Ext.create('Ext.form.field.ComboBox', {
        fieldLabel: 'Select a single state',
        renderTo: 'simpleCombo',
        displayField: 'name',
        width: 320,
        labelWidth: 130,
        store: createStore(),
        queryMode: 'local',
        typeAhead: true
    });

    // ComboBox with a custom item template
    Ext.create('Ext.form.field.ComboBox', {
        fieldLabel: 'Select a single state',
        renderTo: 'customTplCombo',
        displayField: 'name',
        width: 320,
        labelWidth: 130,
        store: createStore(),
        queryMode: 'local',
        listConfig: {
            getInnerTpl: function() {
                return '<div data-qtip="{name}. {slogan}">{name} ({abbr})</div>';
            }
        }
    });

    // ComboBox with multiple selection enabled
    Ext.create('Ext.form.field.ComboBox', {
        fieldLabel: 'Select multiple states',
        renderTo: 'multiSelectCombo',
        multiSelect: true,
        displayField: 'name',
        width: 320,
        labelWidth: 130,
        store: createStore(),
        queryMode: 'local'
    });

    // ComboBox transformed from HTML select
    Ext.create('Ext.form.field.ComboBox', {
        typeAhead: true,
        transform: 'stateSelect',
        width: 135,
        forceSelection: true
    });

    ////// Collapsible code panels; ignore: /////

    Ext.select('pre.code').each(function(pre) {
        Ext.create('Ext.form.FieldSet', {
            contentEl: pre,
            renderTo: pre.parent(),
            title: 'View code for this example',
            collapsible: true,
            collapsed: true
        });
    });
});
