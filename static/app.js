Ext.application({
    name   : 'MyApp',

    launch : function() {
		
       Ext.create('Ext.panel.Panel', {
			renderTo: Ext.getBody(),
            width    : 300,
            height   : 150,
            padding  : 5,
            title    : 'Using ExtJS and NodeJS',
			items: [{
				xtype: 'textfield',
				id: 'txtFirstName',
				fieldLabel: 'First Name'
				},{
				xtype: 'textfield',
				id: 'txtLastName',
				fieldLabel: 'Last Name'
				},{
				xtype: 'button',
				text: 'Submit',
				handler: function(){
					var firstName = Ext.getCmp('txtFirstName');
					var lastName = Ext.getCmp('txtLastName');
					Ext.Ajax.request({
					   url: '/static',
					   method: 'POST',
					   params: {
							firstName: firstName.getValue(),
							lastName: lastName.getValue()
					   },
					   success: function(response, opts) {
						 Ext.Msg.alert("Name", response.responseText);

					   },
					   failure: function(response, opts) {
						  console.log('server-side failure with status code ' + response.status);
					   }
					});
				}
				
			}]
     
        });

    }
});