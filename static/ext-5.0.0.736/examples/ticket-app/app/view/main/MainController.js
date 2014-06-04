Ext.define('Ticket.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    listen: {
        controller: {
            dashboard: {
                edituser: 'onEditUser',
                viewticket: 'onViewTicket'
            },
            ticketsearch: {
                viewticket: 'onViewTicket'
            }
        }
    },

    createTab: function (prefix, rec, cfg) {
        var tabs = this.getReference('main'),
            id = prefix + '_' + rec.getId(),
            tab = tabs.items.getByKey(id);

        if (!tab) {
            cfg.itemId = id;
            cfg.closable = true;
            tab = tabs.add(cfg);
        }

        tabs.setActiveTab(tab);
    },

    editUser: function (userRecord) {
        var win = new Ticket.view.user.User({
            viewModel: {
                data: {
                    theUser: userRecord
                }
            }
        });

        win.show();
    },

    onClickUserName: function () {
        var data = this.getViewModel().getData();
        this.editUser(data.currentUser);
    },

    onEditUser: function (ctrl, rec) {
        this.editUser(rec);
    },

    onProjectSelect: function () {
        var tabs = this.getReference('main');
        tabs.setActiveTab(0);
    },

    onProjectSearchClick: function (view, rowIdx, colIdx, item, e, rec) {
        this.createTab('project', rec, {
            xtype: 'ticketsearch',
            viewModel: {
                data: {
                    theProject: rec
                }
            }
        });
    },
    
    onViewTicket: function (ctrl, rec) {
        this.createTab('ticket', rec, {
            xtype: 'ticketdetail',
            session: new Ext.data.session.Session({
                data: [rec]
            }),
            viewModel: {
                data: {
                    theTicket: rec
                }
            }
        });
    },

    showBindInspector: function () {
        var inspector = new Ext.app.bindinspector.Inspector();
    }
});
