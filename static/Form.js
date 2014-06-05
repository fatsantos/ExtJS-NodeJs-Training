Ext.require([
	'PGP.views.GridPanel',
	'PGP.views.UserListPanel'
]);

Ext.onReady(function() {
	Ext.create('Ext.data.Store', {
        storeId: 'userliststore',
        fields: ['username', 'name', 'password'],
        data: {
            'items': [{
                'username': '[new]',
                'name': '',
                'password': ''
				}, {
                'username': 'user1',
                'name': '',
                'password': ''
				},{
                'username': 'user2',
                'name': '',
                'password': ''
				},{
				'username': 'user3',
				'name': '',
				'password': ''
            }]
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        } 
    });
	
    var form = Ext.create('Ext.Viewport', {
        plain: true,
        border: 0,
        bodyPadding: 5,
        /* fieldDefaults: {
            labelWidth: 55,
            anchor: '100%'
        }, */
        _layout: {
            type: 'hbox',
			padding:5,
            align: 'stretch'  // Child items are stretched to full width
	
        },
		layout: 'border',
        items: [{
            xtype: 'gridpanel',
			//store: Ext.data.StoreManager.lookup('userliststore'),
			store: 'userliststore',
			flex: 1,
			region: 'center'
			//split: true
		}, {
            xtype: 'userlistpanel',
			region: 'east',
			split: true
        }]
    });
});