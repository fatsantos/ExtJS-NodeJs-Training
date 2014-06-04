Ext.application({
    name   : 'MyApp',
    launch : function() {
		Ext.Loader.setConfig({
			enabled:true,
			paths:{
				PGP:'PGP'
			}
		});

	Ext.require('PGP.views.UserLogPanel');
	
	Ext.onReady(function(){
		Ext.create('Ext.panel.Panel', {
			renderTo: Ext.getBody(),
			items: [
				{
					xtype: 'userlogpanel',
					postUrl: '/static',
					title:'Panel 1',
				},
				{
					xtype: 'userlogpanel',
					postUrl: '/static',
					title:'Panel 2',
					listeners: {
						posted: function(param1){
							Ext.Msg.alert('','Posted2');
						}
					}
				}]
		});
	});
    }
});