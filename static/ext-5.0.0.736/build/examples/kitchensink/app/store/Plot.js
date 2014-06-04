Ext.define('KitchenSink.store.Plot', {
    extend: 'Ext.data.Store',
    alias: 'store.plot',

    fields: ['x', 'y1', 'y2', 'y3', 'y4', 'y5'],

    xStep: 0.02,

    fnIndex: 0,

    fn: [
        function (x) { return Math.sin(5 * x); },
        function (x) { return x * x * 2 - 1; },
        function (x) { return Math.sqrt((1 + x) / 2) * 2 - 1; },
        function (x) { return x * x * x; },
        function (x) { return Math.cos(10 * x); },
        function (x) { return 2 * x; },
        function (x) { return Math.pow(x, -2); },
        function (x) { return Math.pow(x, -3); },
        function (x) { return Math.tan(5 * x); }
    ],

    traverseFunctions: function () {
        var delta = arguments[0],
            l = arguments.length,
            data = [],
            cap = 10000,
            i, j, y,
            rec;
        for (i = -2; i <= 2; i += delta) {
            rec = {
                x: i
            };
            for (j = 1; j < l; ++j) {
                y = arguments[j](i);
                if (y > cap) {
                    y = cap;
                }
                rec['y' + j] = y;
            }
            data.push(rec);
        }
        return data;
    },

    generateData: function () {
        var me = this;
        return me.traverseFunctions(me.xStep, me.fn[++me.fnIndex % me.fn.length]);
    },

    refreshData: function () {
        this.setData(this.generateData());
    },

    constructor: function (config) {
        config = Ext.apply({
            data: this.generateData()
        }, config);
        this.callParent([config]);
    }

});