Ext.define('KitchenSink.view.binding.ComponentState', {
    extend: 'Ext.panel.Panel',
    xtype: 'binding-component-state',
    //<example>
    exampleDescription: [
        '<p>This example shows how to use basic data binding to bind the state of one component to the state of another.</p>'
    ],
    //</example>

    width: 300,
    layout: 'anchor',
    viewModel: true,
    title: 'Sign Up Form',
    bodyPadding: 10,

    items: [{
        xtype: 'checkbox',
        boxLabel: 'Is Admin',
        reference: 'isAdmin'
    },{
        xtype: 'textfield',
        fieldLabel: 'Admin Key',
        anchor: '0',
        bind: {
            disabled: '{!isAdmin.checked}'
        }
    }]
});
