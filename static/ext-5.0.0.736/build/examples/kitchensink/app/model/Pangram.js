Ext.define('KitchenSink.model.Pangram', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'language', type: 'string' },
        { name: 'text', type: 'string' }
    ]
});