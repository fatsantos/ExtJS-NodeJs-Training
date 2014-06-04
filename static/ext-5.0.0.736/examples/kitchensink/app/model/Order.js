Ext.define('KitchenSink.model.Order', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'customerId', type: 'int', reference: 'Customer' },
        { name: 'date', type: 'date', dateFormat: 'Y-m-d' },
        'shipped'
    ],

    proxy: {
        type: 'rest',
        url: '/KitchenSink/Order'
    }
});
