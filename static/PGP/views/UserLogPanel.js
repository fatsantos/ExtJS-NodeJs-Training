Ext.define('PGP.views.UserLogPanel',{
	extend:'Ext.panel.Panel',
	alias: 'widget.userlogpanel',
	title: 'Default',
	width: 300,
	height: 150,
	padding: 5,
	postUrl: '',
	initComponent: function(){
		this.items = this.buildItems();
		
		this.callParent(arguments);
	},
	buildItems: function(){
		return[
			{
				xtype:'textfield',
				itemId: 'txtFirstName',
				fieldLabel: 'First Name'
			},
			{
				xtype:'textfield',
				itemId: 'txtLastName',
				fieldLabel: 'Last Name'
			},
			{
				xtype: 'button',
				text: 'Submit',
				handler: function(){
					var me = this.up('userlogpanel');
					//var me = this.up('panel');
					var firstName = me.getComponent('txtFirstName').getValue();
					var lastName = me.getComponent('txtLastName').getValue();
					//var firstName = this.up('panel').down('#txtFirstName').getValue();
					//var lastName = this.up('panel').down('#txtLastName').getValue();
					
					Ext.Ajax.request({
						method: 'POST',
						url: me.postUrl,
						params: {
							firstName: firstName,
							lastName: lastName
						},
						success: function(response, opts) {
							Ext.Msg.alert("Name", response.responseText);
							
						},
						failure: function(response, opts) {
							console.log('server-side failure with status code ' + response.status);
						},
						callback: function(param1){
							me.fireEvent('posted',param1);
						}
					});
					
				}
				
				
				
			}
		]
	},
});