Ext.define('KitchenSink.model.tree.Territory', {
    extend: 'Ext.data.TreeModel',
    idProperty: 'name',
    fields: [{
        name: "name",
        convert: undefined
    }]
});