Ext.define('KitchenSink.view.form.MultiColumn', {
    extend: 'Ext.form.Panel',
    xtype: 'multicolumn-form',
    
    //<example>
    exampleTitle: 'Multi Column Form',
    exampleDescription: [
        '<p>Demonstrates a simple contact form.</p>'
    ].join(''),
    //</example>
    
    title: 'Multi Column Form',
    frame: true,
    resizable: true,

    width: 600,
    layout: 'column',
    defaults: {
        layout: 'form',
        xtype: 'container',
        defaultType: 'textfield',
        style: 'width: 50%'
    },
    items: [{
        items: [
            { fieldLabel: 'First Name' },
            { fieldLabel: 'Last Name' },
            { fieldLabel: 'Phone Number' },
            { fieldLabel: 'Email Address' }
        ]
    }, {
        items: [
            { fieldLabel: 'First Name' },
            { fieldLabel: 'Last Name' },
            { fieldLabel: 'Phone Number' },
            { fieldLabel: 'Email Address' }
        ]
    }],
    buttons: [
        { text: 'OK' },
        { text: 'Cancel' }
    ]
});