
function smoothList(points) {
    if (points.length < 3) {
        return ["M", points[0], points[1]];
    }
    var dx = [], dy = [], result = ['M'],
        i, ln = points.length;
    for (i = 0; i < ln; i += 2) {
        dx.push(points[i]);
        dy.push(points[i + 1]);
    }
    dx = Ext.draw.Draw.spline(dx);
    dy = Ext.draw.Draw.spline(dy);
    result.push(dx[0], dy[0], "C");
    for (i = 1, ln = dx.length; i < ln; i++) {
        result.push(dx[i], dy[i]);
    }
    return result;
}

/**
 * Demonstrates smoothening and cubic bezier Curve rendering
 */
Ext.define('KitchenSink.view.FreeDrawComponent', {
    extend: 'Ext.draw.Component',
    xtype: 'free-paint-component',

    config: {
        background: 'white'
    },

    sprite: undefined,
    lastEventX: undefined,
    lastEventY: undefined,
    list: [],

    listeners: {
        element: 'element',
        // The type of events that are supported for each framework and platform are...
        // - ExtJS on Desktop Machine: Mouse events
        // - ExtJS on Touch Device:    Mouse events + Touch events
        // - Sencha Touch:             Touch events + Drag events
        //
        // Mouse events = mousedown  / mousemove / mouseup
        // Touch events = touchstart / touchmove / touchend
        // Drag  events = dragstart  / drag      / dragend
        //
        // Since this is an ExtJS example, we can listen to Mouse events only.
        //
        // If we wanted the example to run on Sencha Touch also, we would have
        // to listen to both Mouse events and Drag events (listening to Mouse
        // events and Touch events would work as well but with the drawback
        // that ExtJS on Touch Device would send duplicate events.
        mousedown: function(e) {
            var targetElement = this,
                me = Ext.getCmp(targetElement.id),
                surface = me.getSurface();
            if (!me.sprite) {
                var p0 = me.element.getXY(),
                    pageXY = e.getXY(),
                    pageX = pageXY[0],
                    pageY = pageXY[1],
                    p = [pageX - p0[0], pageY - p0[1]];
                me.list = [p[0], p[1], p[0], p[1]];
                me.lastEventX = p[0];
                me.lastEventY = p[1];
                me.sprite = surface.add({
                    type: 'path',
                    path: ['M', me.list[0], me.list[1], 'L', me.list[0] + 1e-1, me.list[1] + 1e-1],
                    lineWidth: 30 * Math.random() + 10,
                    lineCap: 'round',
                    lineJoin: 'round',
                    strokeStyle: new Ext.draw.Color(Math.random() * 127 + 128, Math.random() * 127 + 128, Math.random() * 127 + 128)
                });
                surface.renderFrame();
            }
        },
        mousemove: function(e) {
            var targetElement = this,
                me = Ext.getCmp(targetElement.id);
            if (me.sprite) {
                var p = e.getXY(),
                    xy = me.element.getXY(),
                    x = p[0] - xy[0],
                    y = p[1] - xy[1],
                    dx = me.lastEventX - x,
                    dy = me.lastEventY - y,
                    D = 20;

                if (dx * dx + dy * dy < D * D) {
                    me.list.length -= 2;
                    me.list.push(x, y);
                } else {
                    me.list.length -= 2;
                    me.list.push(me.lastEventX, me.lastEventY);
                    me.list.push(me.lastEventX = x, me.lastEventY = y);
                }

                var path = smoothList(me.list);
                me.sprite.setAttributes({
                    path: path
                });
                if (Ext.os.is.Android) {
                    Ext.draw.Animator.schedule(function () {
                        me.getSurface().renderFrame();
                    }, me);
                } else {
                    me.getSurface().renderFrame();
                }
            }
        },
        mouseup: function(e) {
            var targetElement = this,
                me = Ext.getCmp(targetElement.id);
            me.sprite = null;
        }

    },

    onResize: function() {
        var size = this.element.getSize();
        this.getSurface().setRect([0, 0, size.width, size.height]);
        this.renderFrame();
    }
});


