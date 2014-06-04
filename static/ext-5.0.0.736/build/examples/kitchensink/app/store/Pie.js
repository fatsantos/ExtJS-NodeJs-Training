Ext.define('KitchenSink.store.Pie', {
    extend: 'Ext.data.Store',
    model: 'KitchenSink.model.Pie',
    storeId: 'Pie',

    seed: 1.42,

    generateData: function (count) {
        var me = this,
            max = {},
            name;
        function random() {
            // Controllable random.
            me.seed *= 7.3;
            me.seed -= Math.floor(me.seed);
            return me.seed;
        }
        var data = [], i, record = {
            id: 0,
            g0: 200,
            g1: 500 * random() + 100,
            g2: 500 * random() + 100,
            g3: 500 * random() + 100,
            g4: 500 * random() + 100,
            g5: 500 * random() + 100,
            g6: 500 * random() + 100,
            name: 'Item-0'
        };
        data.push(record);
        for (i = 1; i < (count || 9); i++) {
            record = {
                'id': i,
                'g0': record.g0 + 30 * random(),
                'g1': Math.abs(record.g1 + 300 * random() - 140),
                'g2': Math.abs(record.g2 + 300 * random() - 140),
                'g3': Math.abs(record.g3 + 300 * random() - 140),
                'g4': Math.abs(record.g4 + 300 * random() - 140),
                'g5': Math.abs(record.g5 + 300 * random() - 140),
                'g6': Math.abs(record.g6 + 300 * random() - 140),
                'name': 'Item-' + i
            };
            for (name in record) {
                if (name.match(/g\d/) && (!max[name] || record[name] > data[max[name]][name])) {
                    max[name] = i;
                }
            }
            data.push(record);
        }
        for (name in max) {
            data[max[name]][name] = Math.ceil(data[max[name]][name] / 50) * 50;
        }
        return data;
    },

    refreshData: function() {
        this.setData(this.generateData());
    },

    constructor: function (config) {
        config = Ext.apply({
            data: this.generateData()
        }, config);
        this.callParent([config]);
    }

});
