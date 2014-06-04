Ext.define('KitchenSink.model.USD2EUR', {
    extend: 'Ext.data.Model',
    fields: [
		{ name: 'time', type: 'date', dateFormat: 'time'},
		'value'
    ]
});