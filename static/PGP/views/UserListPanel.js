Ext.define('PGP.views.UserListPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.userlistpanel',
	title: 'User Details',
	bodyPadding: 5,
	width: 350,

	// Fields will be arranged vertically, stretched to full width
	layout: 'anchor',
	defaults: {
		anchor: '100%'
	},

	// The fields
	defaultType: 'textfield',
	items: [{
		fieldLabel: 'Username:',
		name: 'txtUsername',
		allowBlank: false
	}, {
		fieldLabel: 'Password:',
		name: 'txtPassword',
		allowBlank: false
	}, {
		fieldLabel: 'Email:',
		name: 'txtEmail',
		allowBlank: false
	}, {
		fieldLabel: 'Name:',
		name: 'txtName',
		allowBlank: false
	}, {
		fieldLabel: 'Salutation',
		name: 'txtSalutation',
		allowBlank: false
	}],

	buttons: [{
		text: 'New'
	}, {
		text: 'Save'
	}, {
		text: 'Delete'
	}],
});
