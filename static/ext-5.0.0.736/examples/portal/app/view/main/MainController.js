Ext.define('Portal.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onAddFeed: function () {
        var dashboard = this.getReference('dashboard');
        dashboard.addNew('rss');
    },

    onAddFeedUrl: function (sender) {
        var dashboard = this.getReference('dashboard');

        dashboard.addView({
            type: 'rss',
            feedUrl: sender.feedUrl
        });
    }
});
