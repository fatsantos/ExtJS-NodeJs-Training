Ext.define('KitchenSink.model.tree.City', {
    extend: 'Ext.data.TreeModel',
    idProperty: 'name',
    fields: [{
        name: "name",
        convert: undefined
    }]
});