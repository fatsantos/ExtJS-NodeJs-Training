Ext.define('PGP.views.GridPanel', {
		extend: 'Ext.grid.Panel',
		alias: 'widget.gridpanel',
        title: 'User List',
        columns: [{
            header: 'Username',
            dataIndex: 'username'
        }, {
            header: 'Name',
            dataIndex: 'name'
            //flex: 1
        }, {
            header: 'Password',
            dataIndex: 'password'
        }],
        height: 200,
        width: 400,
        
});
