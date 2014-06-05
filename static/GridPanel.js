Ext.onReady(function() {
    Ext.create('Ext.grid.Panel', {
        title: 'User List',
        columns: [{
            header: 'Username',
            dataIndex: 'username'
        }, {
            header: 'Name',
            dataIndex: 'name',
            flex: 1
        }, {
            header: 'Password',
            dataIndex: 'password'
        }],
        height: 200,
        width: 400,
        renderTo: Ext.getBody()
    });
});
