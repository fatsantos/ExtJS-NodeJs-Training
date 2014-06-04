Ext.define('KitchenSink.model.tree.Country', {
    extend: 'Ext.data.TreeModel',
    idProperty: 'name',
    fields: [{
        name: "name",
        convert: undefined
    }]
});