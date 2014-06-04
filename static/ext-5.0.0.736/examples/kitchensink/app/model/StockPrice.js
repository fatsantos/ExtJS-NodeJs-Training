Ext.define("KitchenSink.model.StockPrice", {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'time',  type: 'number'},
        {name: 'open',  type: 'number'},
        {name: 'high',  type: 'number'},
        {name: 'low',   type: 'number'},
        {name: 'close', type: 'number'}
    ]
});