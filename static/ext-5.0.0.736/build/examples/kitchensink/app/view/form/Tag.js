Ext.define('KitchenSink.view.form.Tag', {
    extend: 'Ext.panel.Panel',
    xtype: 'form-tag',

    requires: [
        'Ext.form.field.Tag'
    ],
    //<example>
    exampleTitle: 'Tag Field',
    otherContent: [{
        type: 'Store',
        path: 'app/store/States.js'
    },{
        type: 'Model',
        path: 'app/model/State.js'
    }],
    exampleDescription: '<p>This example shows how to use the "tagfield" multi-value selector.</p>',
    //</example>
    
    title: 'Select State(s)',
    bodyPadding: 5,
    frame: true,
    width: 600,
    layout: 'form',
    viewModel: {},

    items: [{
        xtype: 'displayfield',
        fieldLabel: 'Selected States',
        bind: '{states.value}'
    },{
        xtype: 'tagfield',
        fieldLabel: 'Select a state',
        store: {
            type: 'states'
        },
        reference: 'states',
        displayField: 'state',
        valueField: 'abbr',
        filterPickList: true,
        queryMode: 'local',
        publishes: 'value'
    }]
});
