Ext.define('Ticket.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',
    
    onGridEditClick: function(btn) {
        this.fireEvent('edituser', this, btn.getWidgetRecord());
    },
    
    onTicketClick: function(view, rowIdx, colIdx, item, e, rec) {
        this.viewTicket(rec);
    },

    onTicketDblClick: function(view, rec) {
        this.viewTicket(rec);
    },

    viewTicket: function(rec) {
        this.fireEvent('viewticket', this, rec);
    },
    
    onActiveTicketRefreshClick: function() {
        this.getReference('activeTickets').getStore().load();
    },

    renderTicketStatus: function(v) {
        return Ticket.model.Ticket.getStatusName(v);
    }
});
