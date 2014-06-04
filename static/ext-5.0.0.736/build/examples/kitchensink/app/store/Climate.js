Ext.define('KitchenSink.store.Climate', {
    extend: 'Ext.data.Store',
    alias: 'store.climate',

    fields: ['month', 'temp'],
    data: [
        { month: 'Jan', high: 14.7, low: 5.6  },
        { month: 'Feb', high: 16.5, low: 6.6  },
        { month: 'Mar', high: 18.6, low: 7.3  },
        { month: 'Apr', high: 20.8, low: 8.1  },
        { month: 'May', high: 23.3, low: 9.9  },
        { month: 'Jun', high: 26.2, low: 11.9 },
        { month: 'Jul', high: 27.7, low: 13.3 },
        { month: 'Aug', high: 27.6, low: 13.2 },
        { month: 'Sep', high: 26.4, low: 12.1 },
        { month: 'Oct', high: 23.6, low: 9.9  },
        { month: 'Nov', high: 17  , low: 6.8  },
        { month: 'Dec', high: 14.7, low: 5.8  }
    ],

    counter: 0,

    generateData: function () {
        var data = this.config.data,
            x = this.counter++ % 2 + 1,
            i, item, result = [], high, max = -1;
        for (i = 0; i < data.length; i++) {
            item = data[i];
            high = 20 * x + Math.random() * 20;
            if (max < 0 || high > result[max].high) {
                max = i;
            }
            result.push({
                month: item.month,
                high: high,
                low: high - Math.random() * 20
            });
        }
        result[max].high = Math.ceil(result[max].high / 5) * 5;
        return result;
    },

    refreshData: function () {
        this.setData(this.generateData());
    }

});