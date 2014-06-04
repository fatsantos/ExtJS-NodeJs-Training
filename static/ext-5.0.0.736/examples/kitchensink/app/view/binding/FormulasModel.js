Ext.define('KitchenSink.view.binding.FormulasModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.binding-formulas',

    formulas: {
        quad: function (data) {
            return data.twice * 2;
        },

        // This accomplishes the same thing as above but using object syntax.
        twice: {
            get: function (data) {
                return data.x * 2;
            }
        }
    }
});
