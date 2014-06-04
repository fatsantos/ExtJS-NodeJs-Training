/*
This file is part of Ext JS 5.0.0.736

Copyright (c) 2011-2014 Sencha Inc

Contact:  http://www.sencha.com/contact

Pre-release code in the Ext repository is intended for development purposes only and will
not always be stable. 

Use of pre-release code is permitted with your application at your own risk under standard
Ext license terms. Public redistribution is prohibited.

For early licensing, please contact us at licensing@sencha.com

Version: 5.0.0.736 Build date: 2014-04-02 18:50:07 (136fa21e02bad83b617cfb58f3994dfedb197c6f)

*/


var Ext = Ext || {};
(function(manifest){
    if(!Ext.manifest) {
        Ext.manifest = manifest;
    } else {
        for(var name in manifest) {
            Ext.manifest[name] = manifest[name];
        }
    }
})({
  "paths": {
    "Ext": "../src",
    "Ext-more": "../overrides/Ext-more.js",
    "Ext.AbstractManager": "../../packages/sencha-core/src/AbstractManager.js",
    "Ext.Ajax": "../../packages/sencha-core/src/Ajax.js",
    "Ext.AnimationQueue": "../../packages/sencha-core/src/AnimationQueue.js",
    "Ext.Array": "../../packages/sencha-core/src/lang/Array.js",
    "Ext.Assert": "../../packages/sencha-core/src/lang/Assert.js",
    "Ext.Base": "../../packages/sencha-core/src/class/Base.js",
    "Ext.Boot": "../../packages/sencha-core/.sencha/package/Boot.js",
    "Ext.Class": "../../packages/sencha-core/src/class/Class.js",
    "Ext.ClassManager": "../../packages/sencha-core/src/class/ClassManager.js",
    "Ext.ComponentManager": "../../packages/sencha-core/src/ComponentManager.js",
    "Ext.ComponentQuery": "../../packages/sencha-core/src/ComponentQuery.js",
    "Ext.Config": "../../packages/sencha-core/src/class/Config.js",
    "Ext.Configurator": "../../packages/sencha-core/src/class/Configurator.js",
    "Ext.Date": "../../packages/sencha-core/src/lang/Date.js",
    "Ext.Error": "../../packages/sencha-core/src/lang/Error.js",
    "Ext.Evented": "../../packages/sencha-core/src/Evented.js",
    "Ext.Factory": "../../packages/sencha-core/src/mixin/Factoryable.js",
    "Ext.Function": "../../packages/sencha-core/src/lang/Function.js",
    "Ext.GlobalEvents": "../../packages/sencha-core/src/GlobalEvents.js",
    "Ext.Inventory": "../../packages/sencha-core/src/class/Inventory.js",
    "Ext.JSON": "../../packages/sencha-core/src/JSON.js",
    "Ext.Loader": "../../packages/sencha-core/src/class/Loader.js",
    "Ext.Mixin": "../../packages/sencha-core/src/class/Mixin.js",
    "Ext.Msg": "../src/window/MessageBox.js",
    "Ext.Number": "../../packages/sencha-core/src/lang/Number.js",
    "Ext.Object": "../../packages/sencha-core/src/lang/Object.js",
    "Ext.Script": "../../packages/sencha-core/src/class/Inventory.js",
    "Ext.String": "../../packages/sencha-core/src/lang/String.js",
    "Ext.TaskQueue": "../../packages/sencha-core/src/TaskQueue.js",
    "Ext.Template": "../../packages/sencha-core/src/Template.js",
    "Ext.Util": "../../packages/sencha-core/src/Util.js",
    "Ext.Version": "../../packages/sencha-core/src/util/Version.js",
    "Ext.Widget": "../../packages/sencha-core/src/Widget.js",
    "Ext.XTemplate": "../../packages/sencha-core/src/XTemplate.js",
    "Ext.app.ViewModel": "../../packages/sencha-core/src/app/ViewModel.js",
    "Ext.app.bind": "../../packages/sencha-core/src/app/bind",
    "Ext.browser": "../../packages/sencha-core/src/env/Browser.js",
    "Ext.class": "../../packages/sencha-core/src/class",
    "Ext.data": "../../packages/sencha-core/src/data",
    "Ext.direct": "../../packages/sencha-core/src/direct",
    "Ext.dom": "../../packages/sencha-core/src/dom",
    "Ext.dom.Layer": "../src/dom/Layer.js",
    "Ext.env": "../../packages/sencha-core/src/env",
    "Ext.event": "../../packages/sencha-core/src/event",
    "Ext.feature": "../../packages/sencha-core/src/env/Feature.js",
    "Ext.fx.Animation": "../../packages/sencha-core/src/fx/Animation.js",
    "Ext.fx.Runner": "../../packages/sencha-core/src/fx/Runner.js",
    "Ext.fx.State": "../../packages/sencha-core/src/fx/State.js",
    "Ext.fx.animation": "../../packages/sencha-core/src/fx/animation",
    "Ext.fx.easing": "../../packages/sencha-core/src/fx/easing",
    "Ext.fx.layout": "../../packages/sencha-core/src/fx/layout",
    "Ext.fx.runner": "../../packages/sencha-core/src/fx/runner",
    "Ext.lang": "../../packages/sencha-core/src/lang",
    "Ext.mixin": "../../packages/sencha-core/src/mixin",
    "Ext.os": "../../packages/sencha-core/src/env/OS.js",
    "Ext.overrides": "../overrides",
    "Ext.perf": "../../packages/sencha-core/src/perf",
    "Ext.scroll": "../../packages/sencha-core/src/scroll",
    "Ext.scroll.Indicator": "../src/scroll/Indicator.js",
    "Ext.scroll.Manager": "../src/scroll/Manager.js",
    "Ext.supports": "../../packages/sencha-core/src/env/Feature.js",
    "Ext.util": "../../packages/sencha-core/src/util",
    "Ext.util.Animate": "../src/util/Animate.js",
    "Ext.util.Bindable": "../src/util/Bindable.js",
    "Ext.util.CSS": "../src/util/CSS.js",
    "Ext.util.ClickRepeater": "../src/util/ClickRepeater.js",
    "Ext.util.ComponentDragger": "../src/util/ComponentDragger.js",
    "Ext.util.Cookies": "../src/util/Cookies.js",
    "Ext.util.ElementContainer": "../src/util/ElementContainer.js",
    "Ext.util.Floating": "../src/util/Floating.js",
    "Ext.util.History": "../src/util/History.js",
    "Ext.util.KeyMap": "../src/util/KeyMap.js",
    "Ext.util.KeyNav": "../src/util/KeyNav.js",
    "Ext.util.Memento": "../src/util/Memento.js",
    "Ext.util.Positionable_ext": "../src/util/Positionable_ext.js",
    "Ext.util.ProtoElement": "../src/util/ProtoElement.js",
    "Ext.util.Queue": "../src/util/Queue.js",
    "Ext.util.Renderable": "../src/util/Renderable.js",
    "Ext.util.TextMetrics": "../src/util/TextMetrics.js"
  },
  "loadOrder": [
    {
      "path": "../../packages/sencha-core/src/mixin/Identifiable.js",
      "requires": [],
      "uses": [],
      "idx": 0
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/Recognizer.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 1
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/MultiTouch.js",
      "requires": [
        1
      ],
      "uses": [],
      "idx": 2
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/SingleTouch.js",
      "requires": [
        1
      ],
      "uses": [],
      "idx": 3
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/Tap.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 4
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/Swipe.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 5
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/Drag.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 6
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/Pinch.js",
      "requires": [
        2
      ],
      "uses": [],
      "idx": 7
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/DoubleTap.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 8
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/EdgeSwipe.js",
      "requires": [
        5
      ],
      "uses": [
        23
      ],
      "idx": 9
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/LongPress.js",
      "requires": [
        3
      ],
      "uses": [],
      "idx": 10
    },
    {
      "path": "../../packages/sencha-core/src/event/gesture/Rotate.js",
      "requires": [
        2
      ],
      "uses": [],
      "idx": 11
    },
    {
      "path": "../../packages/sencha-core/src/event/publisher/Publisher.js",
      "requires": [],
      "uses": [],
      "idx": 12
    },
    {
      "path": "../../packages/sencha-core/src/util/Offset.js",
      "requires": [],
      "uses": [],
      "idx": 13
    },
    {
      "path": "../../packages/sencha-core/src/util/Region.js",
      "requires": [
        13
      ],
      "uses": [],
      "idx": 14
    },
    {
      "path": "../../packages/sencha-core/src/util/Point.js",
      "requires": [
        14
      ],
      "uses": [],
      "idx": 15
    },
    {
      "path": "../../packages/sencha-core/src/event/Event.js",
      "requires": [
        15
      ],
      "uses": [],
      "idx": 16
    },
    {
      "path": "../../packages/sencha-core/src/event/ListenerStack.js",
      "requires": [],
      "uses": [],
      "idx": 17
    },
    {
      "path": "../../packages/sencha-core/src/event/Controller.js",
      "requires": [],
      "uses": [],
      "idx": 18
    },
    {
      "path": "../../packages/sencha-core/src/event/Dispatcher.js",
      "requires": [
        17,
        18
      ],
      "uses": [],
      "idx": 19
    },
    {
      "path": "../../packages/sencha-core/src/class/Mixin.js",
      "requires": [],
      "uses": [],
      "idx": 20
    },
    {
      "path": "../../packages/sencha-core/src/mixin/Observable.js",
      "requires": [
        0,
        19,
        20
      ],
      "uses": [],
      "idx": 21
    },
    {
      "path": "../../packages/sencha-core/src/util/Positionable.js",
      "requires": [],
      "uses": [
        14,
        23
      ],
      "idx": 22
    },
    {
      "path": "../../packages/sencha-core/src/dom/Element.js",
      "requires": [
        21,
        22
      ],
      "uses": [
        14,
        24,
        25,
        55,
        199
      ],
      "idx": 23
    },
    {
      "path": "../../packages/sencha-core/src/dom/Fly.js",
      "requires": [
        23
      ],
      "uses": [],
      "idx": 24
    },
    {
      "path": "../../packages/sencha-core/src/dom/CompositeElementLite.js",
      "requires": [
        24
      ],
      "uses": [
        23
      ],
      "idx": 25
    },
    {
      "path": "../src/util/Positionable_ext.js",
      "requires": [],
      "uses": [],
      "idx": 26
    },
    {
      "path": "../../packages/sencha-core/src/util/Filter.js",
      "requires": [],
      "uses": [],
      "idx": 27
    },
    {
      "path": "../../packages/sencha-core/src/util/DelayedTask.js",
      "requires": [],
      "uses": [
        55
      ],
      "idx": 28
    },
    {
      "path": "../../packages/sencha-core/src/util/Event.js",
      "requires": [
        28
      ],
      "uses": [],
      "idx": 29
    },
    {
      "path": "../../packages/sencha-core/src/util/Observable.js",
      "requires": [
        29
      ],
      "uses": [],
      "idx": 30
    },
    {
      "path": "../../packages/sencha-core/src/util/AbstractMixedCollection.js",
      "requires": [
        27,
        30
      ],
      "uses": [],
      "idx": 31
    },
    {
      "path": "../../packages/sencha-core/src/util/Sorter.js",
      "requires": [],
      "uses": [],
      "idx": 32
    },
    {
      "path": "../../packages/sencha-core/src/util/Sortable.js",
      "requires": [
        32
      ],
      "uses": [
        34
      ],
      "idx": 33
    },
    {
      "path": "../../packages/sencha-core/src/util/MixedCollection.js",
      "requires": [
        31,
        33
      ],
      "uses": [],
      "idx": 34
    },
    {
      "path": "../../packages/sencha-core/src/util/TaskRunner.js",
      "requires": [],
      "uses": [
        55
      ],
      "idx": 35
    },
    {
      "path": "../src/fx/target/Target.js",
      "requires": [],
      "uses": [],
      "idx": 36
    },
    {
      "path": "../src/fx/target/Element.js",
      "requires": [
        36
      ],
      "uses": [],
      "idx": 37
    },
    {
      "path": "../src/fx/target/ElementCSS.js",
      "requires": [
        37
      ],
      "uses": [],
      "idx": 38
    },
    {
      "path": "../src/fx/target/CompositeElement.js",
      "requires": [
        37
      ],
      "uses": [],
      "idx": 39
    },
    {
      "path": "../src/fx/target/CompositeElementCSS.js",
      "requires": [
        38,
        39
      ],
      "uses": [],
      "idx": 40
    },
    {
      "path": "../src/fx/target/Sprite.js",
      "requires": [
        36
      ],
      "uses": [],
      "idx": 41
    },
    {
      "path": "../src/fx/target/CompositeSprite.js",
      "requires": [
        41
      ],
      "uses": [],
      "idx": 42
    },
    {
      "path": "../src/fx/target/Component.js",
      "requires": [
        36
      ],
      "uses": [
        55
      ],
      "idx": 43
    },
    {
      "path": "../../packages/sencha-core/src/util/HashMap.js",
      "requires": [
        30
      ],
      "uses": [],
      "idx": 44
    },
    {
      "path": "../src/fx/Queue.js",
      "requires": [
        44
      ],
      "uses": [],
      "idx": 45
    },
    {
      "path": "../src/fx/Manager.js",
      "requires": [
        34,
        35,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        45
      ],
      "uses": [],
      "idx": 46
    },
    {
      "path": "../src/fx/Animator.js",
      "requires": [
        30,
        46
      ],
      "uses": [
        52
      ],
      "idx": 47
    },
    {
      "path": "../src/fx/CubicBezier.js",
      "requires": [],
      "uses": [],
      "idx": 48
    },
    {
      "path": "../src/fx/Easing.js",
      "requires": [
        48
      ],
      "uses": [],
      "idx": 49
    },
    {
      "path": "../src/fx/DrawPath.js",
      "requires": [],
      "uses": [],
      "idx": 50
    },
    {
      "path": "../src/fx/PropertyHandler.js",
      "requires": [
        50
      ],
      "uses": [],
      "idx": 51
    },
    {
      "path": "../src/fx/Anim.js",
      "requires": [
        30,
        46,
        47,
        48,
        49,
        51
      ],
      "uses": [],
      "idx": 52
    },
    {
      "path": "../src/util/Animate.js",
      "requires": [
        46,
        52
      ],
      "uses": [],
      "idx": 53
    },
    {
      "path": "../../packages/sencha-core/src/dom/GarbageCollector.js",
      "requires": [],
      "uses": [],
      "idx": 54
    },
    {
      "path": "../../packages/sencha-core/src/GlobalEvents.js",
      "requires": [
        21,
        23
      ],
      "uses": [],
      "idx": 55
    },
    {
      "path": "../../packages/sencha-core/src/event/publisher/Dom.js",
      "requires": [
        12,
        16,
        55
      ],
      "uses": [],
      "idx": 56
    },
    {
      "path": "../../packages/sencha-core/src/AnimationQueue.js",
      "requires": [],
      "uses": [],
      "idx": 57
    },
    {
      "path": "../../packages/sencha-core/src/event/publisher/Gesture.js",
      "requires": [
        15,
        56,
        57
      ],
      "uses": [
        16,
        54
      ],
      "idx": 58
    },
    {
      "path": "../../packages/sencha-core/src/AbstractManager.js",
      "requires": [
        44
      ],
      "uses": [],
      "idx": 59
    },
    {
      "path": "../../packages/sencha-core/src/data/flash/BinaryXhr.js",
      "requires": [],
      "uses": [
        55
      ],
      "idx": 60
    },
    {
      "path": "../../packages/sencha-core/src/data/Connection.js",
      "requires": [
        30,
        60
      ],
      "uses": [
        23,
        55
      ],
      "idx": 61
    },
    {
      "path": "../../packages/sencha-core/src/Ajax.js",
      "requires": [
        61
      ],
      "uses": [],
      "idx": 62
    },
    {
      "path": "../../packages/sencha-core/src/ComponentManager.js",
      "requires": [],
      "uses": [],
      "idx": 63
    },
    {
      "path": "../../packages/sencha-core/src/util/Operators.js",
      "requires": [],
      "uses": [],
      "idx": 64
    },
    {
      "path": "../../packages/sencha-core/src/ComponentQuery.js",
      "requires": [
        63,
        64
      ],
      "uses": [],
      "idx": 65
    },
    {
      "path": "../../packages/sencha-core/src/Evented.js",
      "requires": [
        21
      ],
      "uses": [],
      "idx": 66
    },
    {
      "path": "../../packages/sencha-core/src/JSON.js",
      "requires": [],
      "uses": [],
      "idx": 67
    },
    {
      "path": "../../packages/sencha-core/src/TaskQueue.js",
      "requires": [
        57
      ],
      "uses": [],
      "idx": 68
    },
    {
      "path": "../../packages/sencha-core/src/mixin/Inheritable.js",
      "requires": [
        20
      ],
      "uses": [],
      "idx": 69
    },
    {
      "path": "../../packages/sencha-core/src/Widget.js",
      "requires": [
        66,
        69
      ],
      "uses": [
        23,
        63,
        65
      ],
      "idx": 70
    },
    {
      "path": "../../packages/sencha-core/src/util/XTemplateParser.js",
      "requires": [],
      "uses": [],
      "idx": 71
    },
    {
      "path": "../../packages/sencha-core/src/util/XTemplateCompiler.js",
      "requires": [
        71
      ],
      "uses": [],
      "idx": 72
    },
    {
      "path": "../../packages/sencha-core/src/XTemplate.js",
      "requires": [
        72
      ],
      "uses": [],
      "idx": 73
    },
    {
      "path": "../../packages/sencha-core/src/mixin/Factoryable.js",
      "requires": [],
      "uses": [],
      "idx": 74
    },
    {
      "path": "../../packages/sencha-core/src/util/CollectionKey.js",
      "requires": [
        0
      ],
      "uses": [],
      "idx": 75
    },
    {
      "path": "../../packages/sencha-core/src/util/Grouper.js",
      "requires": [
        32
      ],
      "uses": [],
      "idx": 76
    },
    {
      "path": "../../packages/sencha-core/src/util/Collection.js",
      "requires": [
        21,
        27,
        32,
        75,
        76
      ],
      "uses": [
        140,
        141,
        142
      ],
      "idx": 77
    },
    {
      "path": "../../packages/sencha-core/src/util/Scheduler.js",
      "requires": [
        21,
        77
      ],
      "uses": [],
      "idx": 78
    },
    {
      "path": "../../packages/sencha-core/src/util/ObjectTemplate.js",
      "requires": [
        73
      ],
      "uses": [],
      "idx": 79
    },
    {
      "path": "../../packages/sencha-core/src/data/schema/Role.js",
      "requires": [],
      "uses": [],
      "idx": 80
    },
    {
      "path": "../../packages/sencha-core/src/data/schema/Association.js",
      "requires": [
        80
      ],
      "uses": [],
      "idx": 81
    },
    {
      "path": "../../packages/sencha-core/src/data/schema/OneToOne.js",
      "requires": [
        81
      ],
      "uses": [
        178,
        179
      ],
      "idx": 82
    },
    {
      "path": "../../packages/sencha-core/src/data/schema/ManyToOne.js",
      "requires": [
        81
      ],
      "uses": [
        178,
        179
      ],
      "idx": 83
    },
    {
      "path": "../../packages/sencha-core/src/data/schema/ManyToMany.js",
      "requires": [
        81
      ],
      "uses": [
        180
      ],
      "idx": 84
    },
    {
      "path": "../../packages/sencha-core/src/util/Inflector.js",
      "requires": [],
      "uses": [],
      "idx": 85
    },
    {
      "path": "../../packages/sencha-core/src/data/schema/Namer.js",
      "requires": [
        74,
        85
      ],
      "uses": [],
      "idx": 86
    },
    {
      "path": "../../packages/sencha-core/src/data/schema/Schema.js",
      "requires": [
        74,
        79,
        82,
        83,
        84,
        86
      ],
      "uses": [],
      "idx": 87
    },
    {
      "path": "../../packages/sencha-core/src/data/Batch.js",
      "requires": [
        21
      ],
      "uses": [],
      "idx": 88
    },
    {
      "path": "../../packages/sencha-core/src/util/Schedulable.js",
      "requires": [],
      "uses": [],
      "idx": 89
    },
    {
      "path": "../../packages/sencha-core/src/data/session/BaseBinding.js",
      "requires": [
        89
      ],
      "uses": [],
      "idx": 90
    },
    {
      "path": "../../packages/sencha-core/src/data/session/Binding.js",
      "requires": [
        90
      ],
      "uses": [],
      "idx": 91
    },
    {
      "path": "../../packages/sencha-core/src/data/session/AbstractStub.js",
      "requires": [
        89,
        91
      ],
      "uses": [],
      "idx": 92
    },
    {
      "path": "../../packages/sencha-core/src/data/session/EntityStub.js",
      "requires": [
        92
      ],
      "uses": [],
      "idx": 93
    },
    {
      "path": "../../packages/sencha-core/src/data/session/MatrixSlice.js",
      "requires": [],
      "uses": [],
      "idx": 94
    },
    {
      "path": "../../packages/sencha-core/src/data/session/MatrixSide.js",
      "requires": [
        94
      ],
      "uses": [],
      "idx": 95
    },
    {
      "path": "../../packages/sencha-core/src/data/session/Matrix.js",
      "requires": [
        95
      ],
      "uses": [],
      "idx": 96
    },
    {
      "path": "../../packages/sencha-core/src/data/session/ValidationStub.js",
      "requires": [
        92
      ],
      "uses": [],
      "idx": 97
    },
    {
      "path": "../../packages/sencha-core/src/data/session/Session.js",
      "requires": [
        78,
        87,
        88,
        93,
        96,
        97
      ],
      "uses": [],
      "idx": 98
    },
    {
      "path": "../../packages/sencha-core/src/app/bind/Stub.js",
      "requires": [
        91,
        92
      ],
      "uses": [
        103
      ],
      "idx": 99
    },
    {
      "path": "../../packages/sencha-core/src/app/bind/LinkStub.js",
      "requires": [
        99
      ],
      "uses": [],
      "idx": 100
    },
    {
      "path": "../../packages/sencha-core/src/app/bind/RootStub.js",
      "requires": [
        92,
        99,
        100
      ],
      "uses": [],
      "idx": 101
    },
    {
      "path": "../../packages/sencha-core/src/app/bind/Multi.js",
      "requires": [
        90
      ],
      "uses": [],
      "idx": 102
    },
    {
      "path": "../../packages/sencha-core/src/app/bind/Formula.js",
      "requires": [
        89
      ],
      "uses": [],
      "idx": 103
    },
    {
      "path": "../../packages/sencha-core/src/app/bind/Template.js",
      "requires": [],
      "uses": [],
      "idx": 104
    },
    {
      "path": "../../packages/sencha-core/src/app/bind/TemplateBinding.js",
      "requires": [
        90,
        102,
        104
      ],
      "uses": [],
      "idx": 105
    },
    {
      "path": "../../packages/sencha-core/src/data/AbstractStore.js",
      "requires": [
        21,
        27,
        74,
        77,
        87
      ],
      "uses": [
        161
      ],
      "idx": 106
    },
    {
      "path": "../../packages/sencha-core/src/data/LocalStore.js",
      "requires": [
        20
      ],
      "uses": [
        77
      ],
      "idx": 107
    },
    {
      "path": "../../packages/sencha-core/src/data/ChainedStore.js",
      "requires": [
        106,
        107
      ],
      "uses": [
        161
      ],
      "idx": 108
    },
    {
      "path": "../../packages/sencha-core/src/app/ViewModel.js",
      "requires": [
        0,
        74,
        78,
        98,
        100,
        101,
        102,
        103,
        105,
        108
      ],
      "uses": [],
      "idx": 109
    },
    {
      "path": "../../packages/sencha-core/src/data/ResultSet.js",
      "requires": [],
      "uses": [],
      "idx": 110
    },
    {
      "path": "../../packages/sencha-core/src/data/reader/Reader.js",
      "requires": [
        30,
        73,
        74,
        110
      ],
      "uses": [
        87
      ],
      "idx": 111
    },
    {
      "path": "../../packages/sencha-core/src/data/writer/Writer.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 112
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/Proxy.js",
      "requires": [
        30,
        74,
        87,
        111,
        112
      ],
      "uses": [
        88,
        116,
        117,
        118,
        119,
        120,
        134
      ],
      "idx": 113
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/Client.js",
      "requires": [
        113
      ],
      "uses": [],
      "idx": 114
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/Memory.js",
      "requires": [
        114
      ],
      "uses": [
        27,
        33
      ],
      "idx": 115
    },
    {
      "path": "../../packages/sencha-core/src/data/operation/Operation.js",
      "requires": [],
      "uses": [],
      "idx": 116
    },
    {
      "path": "../../packages/sencha-core/src/data/operation/Read.js",
      "requires": [
        116
      ],
      "uses": [],
      "idx": 117
    },
    {
      "path": "../../packages/sencha-core/src/data/operation/Destroy.js",
      "requires": [
        116
      ],
      "uses": [],
      "idx": 118
    },
    {
      "path": "../../packages/sencha-core/src/data/operation/Create.js",
      "requires": [
        116
      ],
      "uses": [],
      "idx": 119
    },
    {
      "path": "../../packages/sencha-core/src/data/operation/Update.js",
      "requires": [
        116
      ],
      "uses": [],
      "idx": 120
    },
    {
      "path": "../../packages/sencha-core/src/data/ProxyStore.js",
      "requires": [
        106,
        113,
        115,
        116,
        117,
        118,
        119,
        120
      ],
      "uses": [
        28,
        87,
        134
      ],
      "idx": 121
    },
    {
      "path": "../../packages/sencha-core/src/data/Error.js",
      "requires": [],
      "uses": [],
      "idx": 122
    },
    {
      "path": "../../packages/sencha-core/src/data/ErrorCollection.js",
      "requires": [
        34,
        122
      ],
      "uses": [
        126
      ],
      "idx": 123
    },
    {
      "path": "../../packages/sencha-core/src/data/SortTypes.js",
      "requires": [],
      "uses": [],
      "idx": 124
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/Validator.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 125
    },
    {
      "path": "../../packages/sencha-core/src/data/field/Field.js",
      "requires": [
        74,
        124,
        125
      ],
      "uses": [],
      "idx": 126
    },
    {
      "path": "../../packages/sencha-core/src/data/field/Number.js",
      "requires": [
        126
      ],
      "uses": [],
      "idx": 127
    },
    {
      "path": "../../packages/sencha-core/src/data/field/Date.js",
      "requires": [
        126
      ],
      "uses": [],
      "idx": 128
    },
    {
      "path": "../../packages/sencha-core/src/data/field/Integer.js",
      "requires": [
        126
      ],
      "uses": [],
      "idx": 129
    },
    {
      "path": "../../packages/sencha-core/src/data/field/String.js",
      "requires": [
        126
      ],
      "uses": [],
      "idx": 130
    },
    {
      "path": "../../packages/sencha-core/src/data/field/Boolean.js",
      "requires": [
        126
      ],
      "uses": [],
      "idx": 131
    },
    {
      "path": "../../packages/sencha-core/src/data/identifier/Generator.js",
      "requires": [
        74
      ],
      "uses": [],
      "idx": 132
    },
    {
      "path": "../../packages/sencha-core/src/data/identifier/Sequential.js",
      "requires": [
        132
      ],
      "uses": [],
      "idx": 133
    },
    {
      "path": "../../packages/sencha-core/src/data/Model.js",
      "requires": [
        87,
        116,
        117,
        118,
        119,
        120,
        123,
        125,
        126,
        127,
        128,
        129,
        130,
        131,
        132,
        133
      ],
      "uses": [
        74,
        111,
        166
      ],
      "idx": 134
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/Server.js",
      "requires": [
        113
      ],
      "uses": [
        160
      ],
      "idx": 135
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/Ajax.js",
      "requires": [
        62,
        135
      ],
      "uses": [],
      "idx": 136
    },
    {
      "path": "../../packages/sencha-core/src/data/reader/Json.js",
      "requires": [
        67,
        111
      ],
      "uses": [],
      "idx": 137
    },
    {
      "path": "../../packages/sencha-core/src/data/writer/Json.js",
      "requires": [
        112
      ],
      "uses": [],
      "idx": 138
    },
    {
      "path": "../../packages/sencha-core/src/util/Group.js",
      "requires": [
        77
      ],
      "uses": [],
      "idx": 139
    },
    {
      "path": "../../packages/sencha-core/src/util/SorterCollection.js",
      "requires": [
        32,
        77
      ],
      "uses": [],
      "idx": 140
    },
    {
      "path": "../../packages/sencha-core/src/util/FilterCollection.js",
      "requires": [
        27,
        77
      ],
      "uses": [],
      "idx": 141
    },
    {
      "path": "../../packages/sencha-core/src/util/GroupCollection.js",
      "requires": [
        77,
        139,
        140,
        141
      ],
      "uses": [],
      "idx": 142
    },
    {
      "path": "../../packages/sencha-core/src/data/Store.js",
      "requires": [
        28,
        107,
        121,
        134,
        136,
        137,
        138,
        142
      ],
      "uses": [
        76,
        149,
        161
      ],
      "idx": 143
    },
    {
      "path": "../../packages/sencha-core/src/data/reader/Array.js",
      "requires": [
        137
      ],
      "uses": [],
      "idx": 144
    },
    {
      "path": "../../packages/sencha-core/src/data/ArrayStore.js",
      "requires": [
        115,
        143,
        144
      ],
      "uses": [],
      "idx": 145
    },
    {
      "path": "../../packages/sencha-core/src/data/BufferStore.js",
      "requires": [
        143
      ],
      "uses": [],
      "idx": 146
    },
    {
      "path": "../../packages/sencha-core/src/util/LruCache.js",
      "requires": [
        44
      ],
      "uses": [],
      "idx": 147
    },
    {
      "path": "../../packages/sencha-core/src/data/PageMap.js",
      "requires": [
        147
      ],
      "uses": [
        149
      ],
      "idx": 148
    },
    {
      "path": "../../packages/sencha-core/src/data/BufferedStore.js",
      "requires": [
        27,
        32,
        76,
        121,
        148
      ],
      "uses": [
        140,
        141,
        142,
        143
      ],
      "idx": 149
    },
    {
      "path": "../../packages/sencha-core/src/direct/Manager.js",
      "requires": [
        30,
        34
      ],
      "uses": [],
      "idx": 150
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/Direct.js",
      "requires": [
        135,
        150
      ],
      "uses": [],
      "idx": 151
    },
    {
      "path": "../../packages/sencha-core/src/data/DirectStore.js",
      "requires": [
        143,
        151
      ],
      "uses": [],
      "idx": 152
    },
    {
      "path": "../../packages/sencha-core/src/data/JsonP.js",
      "requires": [],
      "uses": [
        55
      ],
      "idx": 153
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/JsonP.js",
      "requires": [
        135,
        153
      ],
      "uses": [],
      "idx": 154
    },
    {
      "path": "../../packages/sencha-core/src/data/JsonPStore.js",
      "requires": [
        137,
        143,
        154
      ],
      "uses": [],
      "idx": 155
    },
    {
      "path": "../../packages/sencha-core/src/data/JsonStore.js",
      "requires": [
        136,
        137,
        138,
        143
      ],
      "uses": [],
      "idx": 156
    },
    {
      "path": "../../packages/sencha-core/src/data/ModelManager.js",
      "requires": [
        87
      ],
      "uses": [],
      "idx": 157
    },
    {
      "path": "../../packages/sencha-core/src/data/NodeInterface.js",
      "requires": [
        21,
        129,
        130,
        131,
        138
      ],
      "uses": [
        87
      ],
      "idx": 158
    },
    {
      "path": "../../packages/sencha-core/src/data/NodeStore.js",
      "requires": [
        143,
        158
      ],
      "uses": [],
      "idx": 159
    },
    {
      "path": "../../packages/sencha-core/src/data/Request.js",
      "requires": [],
      "uses": [],
      "idx": 160
    },
    {
      "path": "../../packages/sencha-core/src/data/StoreManager.js",
      "requires": [
        34,
        145
      ],
      "uses": [
        74,
        143
      ],
      "idx": 161
    },
    {
      "path": "../../packages/sencha-core/src/mixin/Queryable.js",
      "requires": [],
      "uses": [
        65
      ],
      "idx": 162
    },
    {
      "path": "../../packages/sencha-core/src/data/TreeModel.js",
      "requires": [
        134,
        158,
        162
      ],
      "uses": [],
      "idx": 163
    },
    {
      "path": "../../packages/sencha-core/src/data/TreeStore.js",
      "requires": [
        32,
        158,
        159,
        163
      ],
      "uses": [],
      "idx": 164
    },
    {
      "path": "../../packages/sencha-core/src/data/Types.js",
      "requires": [
        124
      ],
      "uses": [],
      "idx": 165
    },
    {
      "path": "../../packages/sencha-core/src/data/Validation.js",
      "requires": [
        134
      ],
      "uses": [],
      "idx": 166
    },
    {
      "path": "../../packages/sencha-core/src/dom/Query.js",
      "requires": [
        64
      ],
      "uses": [],
      "idx": 167
    },
    {
      "path": "../../packages/sencha-core/src/data/reader/Xml.js",
      "requires": [
        111,
        167
      ],
      "uses": [],
      "idx": 168
    },
    {
      "path": "../../packages/sencha-core/src/data/writer/Xml.js",
      "requires": [
        112
      ],
      "uses": [],
      "idx": 169
    },
    {
      "path": "../../packages/sencha-core/src/data/XmlStore.js",
      "requires": [
        136,
        143,
        168,
        169
      ],
      "uses": [],
      "idx": 170
    },
    {
      "path": "../../packages/sencha-core/src/data/identifier/Negative.js",
      "requires": [
        133
      ],
      "uses": [],
      "idx": 171
    },
    {
      "path": "../../packages/sencha-core/src/data/identifier/Uuid.js",
      "requires": [
        132
      ],
      "uses": [],
      "idx": 172
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/WebStorage.js",
      "requires": [
        114,
        133
      ],
      "uses": [
        110
      ],
      "idx": 173
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/LocalStorage.js",
      "requires": [
        173
      ],
      "uses": [],
      "idx": 174
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/Rest.js",
      "requires": [
        136
      ],
      "uses": [],
      "idx": 175
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/SessionStorage.js",
      "requires": [
        173
      ],
      "uses": [],
      "idx": 176
    },
    {
      "path": "../../packages/sencha-core/src/data/proxy/Sql.js",
      "requires": [
        114
      ],
      "uses": [
        77,
        110
      ],
      "idx": 177
    },
    {
      "path": "../../packages/sencha-core/src/data/session/AssociatedEntitiesStub.js",
      "requires": [
        92
      ],
      "uses": [],
      "idx": 178
    },
    {
      "path": "../../packages/sencha-core/src/data/session/AssociatedEntityStub.js",
      "requires": [
        92
      ],
      "uses": [],
      "idx": 179
    },
    {
      "path": "../../packages/sencha-core/src/data/session/MatrixStub.js",
      "requires": [
        92
      ],
      "uses": [],
      "idx": 180
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/Bound.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 181
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/Format.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 182
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/Email.js",
      "requires": [
        182
      ],
      "uses": [],
      "idx": 183
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/List.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 184
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/Exclusion.js",
      "requires": [
        184
      ],
      "uses": [],
      "idx": 185
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/Inclusion.js",
      "requires": [
        184
      ],
      "uses": [],
      "idx": 186
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/Length.js",
      "requires": [
        181
      ],
      "uses": [],
      "idx": 187
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/Presence.js",
      "requires": [
        125
      ],
      "uses": [],
      "idx": 188
    },
    {
      "path": "../../packages/sencha-core/src/data/validator/Range.js",
      "requires": [
        181
      ],
      "uses": [],
      "idx": 189
    },
    {
      "path": "../../packages/sencha-core/src/direct/Event.js",
      "requires": [],
      "uses": [],
      "idx": 190
    },
    {
      "path": "../../packages/sencha-core/src/direct/RemotingEvent.js",
      "requires": [
        190
      ],
      "uses": [
        150
      ],
      "idx": 191
    },
    {
      "path": "../../packages/sencha-core/src/direct/ExceptionEvent.js",
      "requires": [
        191
      ],
      "uses": [],
      "idx": 192
    },
    {
      "path": "../../packages/sencha-core/src/direct/Provider.js",
      "requires": [
        30
      ],
      "uses": [],
      "idx": 193
    },
    {
      "path": "../../packages/sencha-core/src/direct/JsonProvider.js",
      "requires": [
        193
      ],
      "uses": [
        150,
        192
      ],
      "idx": 194
    },
    {
      "path": "../../packages/sencha-core/src/direct/PollingProvider.js",
      "requires": [
        28,
        62,
        194
      ],
      "uses": [
        150,
        192,
        265
      ],
      "idx": 195
    },
    {
      "path": "../../packages/sencha-core/src/direct/RemotingMethod.js",
      "requires": [],
      "uses": [],
      "idx": 196
    },
    {
      "path": "../../packages/sencha-core/src/direct/Transaction.js",
      "requires": [],
      "uses": [],
      "idx": 197
    },
    {
      "path": "../../packages/sencha-core/src/direct/RemotingProvider.js",
      "requires": [
        28,
        34,
        194,
        196,
        197
      ],
      "uses": [
        62,
        150,
        192
      ],
      "idx": 198
    },
    {
      "path": "../../packages/sencha-core/src/dom/CompositeElement.js",
      "requires": [
        25
      ],
      "uses": [],
      "idx": 199
    },
    {
      "path": "../../packages/sencha-core/src/util/paintmonitor/Abstract.js",
      "requires": [],
      "uses": [
        23
      ],
      "idx": 200
    },
    {
      "path": "../../packages/sencha-core/src/util/paintmonitor/CssAnimation.js",
      "requires": [
        200
      ],
      "uses": [],
      "idx": 201
    },
    {
      "path": "../../packages/sencha-core/src/util/paintmonitor/OverflowChange.js",
      "requires": [
        200
      ],
      "uses": [],
      "idx": 202
    },
    {
      "path": "../../packages/sencha-core/src/util/PaintMonitor.js",
      "requires": [
        201,
        202
      ],
      "uses": [],
      "idx": 203
    },
    {
      "path": "../../packages/sencha-core/src/event/publisher/ElementPaint.js",
      "requires": [
        12,
        68,
        203
      ],
      "uses": [],
      "idx": 204
    },
    {
      "path": "../../packages/sencha-core/src/mixin/Templatable.js",
      "requires": [
        20
      ],
      "uses": [
        23
      ],
      "idx": 205
    },
    {
      "path": "../../packages/sencha-core/src/util/sizemonitor/Abstract.js",
      "requires": [
        68,
        205
      ],
      "uses": [],
      "idx": 206
    },
    {
      "path": "../../packages/sencha-core/src/util/sizemonitor/Default.js",
      "requires": [
        206
      ],
      "uses": [],
      "idx": 207
    },
    {
      "path": "../../packages/sencha-core/src/util/sizemonitor/Scroll.js",
      "requires": [
        206
      ],
      "uses": [
        68
      ],
      "idx": 208
    },
    {
      "path": "../../packages/sencha-core/src/util/sizemonitor/OverflowChange.js",
      "requires": [
        206
      ],
      "uses": [
        68
      ],
      "idx": 209
    },
    {
      "path": "../../packages/sencha-core/src/util/SizeMonitor.js",
      "requires": [
        207,
        208,
        209
      ],
      "uses": [],
      "idx": 210
    },
    {
      "path": "../../packages/sencha-core/src/event/publisher/ElementSize.js",
      "requires": [
        12,
        210
      ],
      "uses": [
        68
      ],
      "idx": 211
    },
    {
      "path": "../../packages/sencha-core/src/fx/State.js",
      "requires": [],
      "uses": [],
      "idx": 212
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/Abstract.js",
      "requires": [
        66,
        212
      ],
      "uses": [],
      "idx": 213
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/Slide.js",
      "requires": [
        213
      ],
      "uses": [],
      "idx": 214
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/SlideOut.js",
      "requires": [
        214
      ],
      "uses": [],
      "idx": 215
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/Fade.js",
      "requires": [
        213
      ],
      "uses": [],
      "idx": 216
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/FadeOut.js",
      "requires": [
        216
      ],
      "uses": [],
      "idx": 217
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/Flip.js",
      "requires": [
        213
      ],
      "uses": [],
      "idx": 218
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/Pop.js",
      "requires": [
        213
      ],
      "uses": [],
      "idx": 219
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/PopOut.js",
      "requires": [
        219
      ],
      "uses": [],
      "idx": 220
    },
    {
      "path": "../../packages/sencha-core/src/fx/Animation.js",
      "requires": [
        214,
        215,
        216,
        217,
        218,
        219,
        220
      ],
      "uses": [
        213
      ],
      "idx": 221
    },
    {
      "path": "../../packages/sencha-core/src/fx/runner/Css.js",
      "requires": [
        66,
        221
      ],
      "uses": [],
      "idx": 222
    },
    {
      "path": "../../packages/sencha-core/src/fx/runner/CssTransition.js",
      "requires": [
        57,
        222
      ],
      "uses": [
        221
      ],
      "idx": 223
    },
    {
      "path": "../../packages/sencha-core/src/fx/Runner.js",
      "requires": [
        223
      ],
      "uses": [],
      "idx": 224
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/Cube.js",
      "requires": [
        213
      ],
      "uses": [],
      "idx": 225
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/Wipe.js",
      "requires": [
        221
      ],
      "uses": [],
      "idx": 226
    },
    {
      "path": "../../packages/sencha-core/src/fx/animation/WipeOut.js",
      "requires": [
        226
      ],
      "uses": [],
      "idx": 227
    },
    {
      "path": "../../packages/sencha-core/src/fx/easing/Abstract.js",
      "requires": [],
      "uses": [],
      "idx": 228
    },
    {
      "path": "../../packages/sencha-core/src/fx/easing/Bounce.js",
      "requires": [
        228
      ],
      "uses": [],
      "idx": 229
    },
    {
      "path": "../../packages/sencha-core/src/fx/easing/Momentum.js",
      "requires": [
        228
      ],
      "uses": [],
      "idx": 230
    },
    {
      "path": "../../packages/sencha-core/src/fx/easing/BoundMomentum.js",
      "requires": [
        228,
        229,
        230
      ],
      "uses": [],
      "idx": 231
    },
    {
      "path": "../../packages/sencha-core/src/fx/easing/Linear.js",
      "requires": [
        228
      ],
      "uses": [],
      "idx": 232
    },
    {
      "path": "../../packages/sencha-core/src/fx/easing/EaseIn.js",
      "requires": [
        232
      ],
      "uses": [],
      "idx": 233
    },
    {
      "path": "../../packages/sencha-core/src/fx/easing/EaseOut.js",
      "requires": [
        232
      ],
      "uses": [],
      "idx": 234
    },
    {
      "path": "../../packages/sencha-core/src/fx/easing/Easing.js",
      "requires": [
        232
      ],
      "uses": [],
      "idx": 235
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Abstract.js",
      "requires": [
        66
      ],
      "uses": [],
      "idx": 236
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Style.js",
      "requires": [
        221,
        236
      ],
      "uses": [],
      "idx": 237
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Slide.js",
      "requires": [
        237
      ],
      "uses": [],
      "idx": 238
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Cover.js",
      "requires": [
        237
      ],
      "uses": [],
      "idx": 239
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Reveal.js",
      "requires": [
        237
      ],
      "uses": [],
      "idx": 240
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Fade.js",
      "requires": [
        237
      ],
      "uses": [],
      "idx": 241
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Flip.js",
      "requires": [
        237
      ],
      "uses": [],
      "idx": 242
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Pop.js",
      "requires": [
        237
      ],
      "uses": [],
      "idx": 243
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Scroll.js",
      "requires": [
        232,
        236
      ],
      "uses": [
        57
      ],
      "idx": 244
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/Card.js",
      "requires": [
        238,
        239,
        240,
        241,
        242,
        243,
        244
      ],
      "uses": [
        236
      ],
      "idx": 245
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/Cube.js",
      "requires": [
        237
      ],
      "uses": [],
      "idx": 246
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/ScrollCover.js",
      "requires": [
        244
      ],
      "uses": [],
      "idx": 247
    },
    {
      "path": "../../packages/sencha-core/src/fx/layout/card/ScrollReveal.js",
      "requires": [
        244
      ],
      "uses": [],
      "idx": 248
    },
    {
      "path": "../../packages/sencha-core/src/fx/runner/CssAnimation.js",
      "requires": [
        222
      ],
      "uses": [
        221
      ],
      "idx": 249
    },
    {
      "path": "../../packages/sencha-core/src/mixin/Bindable.js",
      "requires": [
        20
      ],
      "uses": [],
      "idx": 250
    },
    {
      "path": "../../packages/sencha-core/src/mixin/Mashup.js",
      "requires": [
        20
      ],
      "uses": [],
      "idx": 251
    },
    {
      "path": "../../packages/sencha-core/src/mixin/Selectable.js",
      "requires": [
        20
      ],
      "uses": [
        34
      ],
      "idx": 252
    },
    {
      "path": "../../packages/sencha-core/src/mixin/Traversable.js",
      "requires": [
        20
      ],
      "uses": [],
      "idx": 253
    },
    {
      "path": "../../packages/sencha-core/src/perf/Accumulator.js",
      "requires": [
        73
      ],
      "uses": [],
      "idx": 254
    },
    {
      "path": "../../packages/sencha-core/src/perf/Monitor.js",
      "requires": [
        254
      ],
      "uses": [],
      "idx": 255
    },
    {
      "path": "../../packages/sencha-core/src/util/translatable/Abstract.js",
      "requires": [
        66,
        232
      ],
      "uses": [
        57
      ],
      "idx": 256
    },
    {
      "path": "../../packages/sencha-core/src/util/translatable/Dom.js",
      "requires": [
        256
      ],
      "uses": [],
      "idx": 257
    },
    {
      "path": "../../packages/sencha-core/src/util/translatable/CssTransform.js",
      "requires": [
        257
      ],
      "uses": [],
      "idx": 258
    },
    {
      "path": "../../packages/sencha-core/src/util/translatable/ScrollPosition.js",
      "requires": [
        257
      ],
      "uses": [],
      "idx": 259
    },
    {
      "path": "../../packages/sencha-core/src/util/translatable/ScrollParent.js",
      "requires": [
        257
      ],
      "uses": [],
      "idx": 260
    },
    {
      "path": "../../packages/sencha-core/src/util/translatable/CssPosition.js",
      "requires": [
        257
      ],
      "uses": [],
      "idx": 261
    },
    {
      "path": "../../packages/sencha-core/src/util/Translatable.js",
      "requires": [
        258,
        259,
        260,
        261
      ],
      "uses": [],
      "idx": 262
    },
    {
      "path": "../../packages/sencha-core/src/scroll/Scroller.js",
      "requires": [
        66,
        231,
        234,
        262
      ],
      "uses": [],
      "idx": 263
    },
    {
      "path": "../../packages/sencha-core/src/util/LocalStorage.js",
      "requires": [],
      "uses": [],
      "idx": 264
    },
    {
      "path": "../../packages/sencha-core/src/util/TaskManager.js",
      "requires": [
        35
      ],
      "uses": [],
      "idx": 265
    },
    {
      "path": "../src/AbstractPlugin.js",
      "requires": [],
      "uses": [],
      "idx": 266
    },
    {
      "path": "../src/Action.js",
      "requires": [],
      "uses": [],
      "idx": 267
    },
    {
      "path": "../src/util/ProtoElement.js",
      "requires": [],
      "uses": [
        23
      ],
      "idx": 268
    },
    {
      "path": "../src/PluginManager.js",
      "requires": [],
      "uses": [],
      "idx": 269
    },
    {
      "path": "../src/util/ElementContainer.js",
      "requires": [],
      "uses": [],
      "idx": 270
    },
    {
      "path": "../src/util/Renderable.js",
      "requires": [
        23
      ],
      "uses": [
        73,
        276
      ],
      "idx": 271
    },
    {
      "path": "../src/state/Provider.js",
      "requires": [
        30
      ],
      "uses": [],
      "idx": 272
    },
    {
      "path": "../src/state/Manager.js",
      "requires": [
        272
      ],
      "uses": [],
      "idx": 273
    },
    {
      "path": "../src/state/Stateful.js",
      "requires": [
        273
      ],
      "uses": [
        35
      ],
      "idx": 274
    },
    {
      "path": "../src/util/Floating.js",
      "requires": [],
      "uses": [
        284,
        428
      ],
      "idx": 275
    },
    {
      "path": "../src/Component.js",
      "requires": [
        22,
        26,
        30,
        53,
        63,
        65,
        69,
        199,
        268,
        269,
        270,
        271,
        274,
        275
      ],
      "uses": [
        23,
        28,
        46,
        55,
        73,
        74,
        98,
        279,
        280,
        281,
        284,
        294,
        296,
        406,
        428,
        520,
        538,
        540
      ],
      "idx": 276
    },
    {
      "path": "../src/layout/container/border/Region.js",
      "requires": [],
      "uses": [],
      "idx": 277
    },
    {
      "path": "../src/ElementLoader.js",
      "requires": [
        30
      ],
      "uses": [
        61,
        62
      ],
      "idx": 278
    },
    {
      "path": "../src/ComponentLoader.js",
      "requires": [
        278
      ],
      "uses": [],
      "idx": 279
    },
    {
      "path": "../src/layout/SizeModel.js",
      "requires": [],
      "uses": [],
      "idx": 280
    },
    {
      "path": "../src/layout/Layout.js",
      "requires": [
        73,
        74,
        280
      ],
      "uses": [
        520
      ],
      "idx": 281
    },
    {
      "path": "../src/layout/container/Container.js",
      "requires": [
        73,
        270,
        281
      ],
      "uses": [],
      "idx": 282
    },
    {
      "path": "../src/layout/container/Auto.js",
      "requires": [
        282
      ],
      "uses": [
        73
      ],
      "idx": 283
    },
    {
      "path": "../src/ZIndexManager.js",
      "requires": [
        55
      ],
      "uses": [
        23
      ],
      "idx": 284
    },
    {
      "path": "../src/container/Container.js",
      "requires": [
        34,
        162,
        276,
        283,
        284
      ],
      "uses": [
        31,
        63,
        65,
        281
      ],
      "idx": 285
    },
    {
      "path": "../src/layout/container/Editor.js",
      "requires": [
        282
      ],
      "uses": [],
      "idx": 286
    },
    {
      "path": "../src/Editor.js",
      "requires": [
        285,
        286
      ],
      "uses": [
        23,
        63
      ],
      "idx": 287
    },
    {
      "path": "../src/EventManager.js",
      "requires": [],
      "uses": [
        55
      ],
      "idx": 288
    },
    {
      "path": "../src/util/KeyMap.js",
      "requires": [],
      "uses": [],
      "idx": 289
    },
    {
      "path": "../src/util/KeyNav.js",
      "requires": [
        289
      ],
      "uses": [],
      "idx": 290
    },
    {
      "path": "../src/FocusManager.js",
      "requires": [
        30,
        44,
        63,
        65,
        276,
        290
      ],
      "uses": [
        23,
        28
      ],
      "idx": 291
    },
    {
      "path": "../src/Img.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 292
    },
    {
      "path": "../src/util/Bindable.js",
      "requires": [],
      "uses": [
        161
      ],
      "idx": 293
    },
    {
      "path": "../src/LoadMask.js",
      "requires": [
        276,
        293
      ],
      "uses": [
        161
      ],
      "idx": 294
    },
    {
      "path": "../src/layout/component/Component.js",
      "requires": [
        281
      ],
      "uses": [],
      "idx": 295
    },
    {
      "path": "../src/layout/component/Auto.js",
      "requires": [
        295
      ],
      "uses": [],
      "idx": 296
    },
    {
      "path": "../src/layout/component/ProgressBar.js",
      "requires": [
        296
      ],
      "uses": [],
      "idx": 297
    },
    {
      "path": "../src/ProgressBar.js",
      "requires": [
        25,
        265,
        276,
        297
      ],
      "uses": [
        52
      ],
      "idx": 298
    },
    {
      "path": "../src/ProgressBarWidget.js",
      "requires": [
        70,
        298
      ],
      "uses": [
        73
      ],
      "idx": 299
    },
    {
      "path": "../src/ShadowPool.js",
      "requires": [],
      "uses": [],
      "idx": 300
    },
    {
      "path": "../src/Shadow.js",
      "requires": [
        300
      ],
      "uses": [],
      "idx": 301
    },
    {
      "path": "../src/app/EventDomain.js",
      "requires": [
        29
      ],
      "uses": [],
      "idx": 302
    },
    {
      "path": "../src/app/domain/Component.js",
      "requires": [
        70,
        276,
        302
      ],
      "uses": [],
      "idx": 303
    },
    {
      "path": "../src/app/EventBus.js",
      "requires": [
        303
      ],
      "uses": [
        302
      ],
      "idx": 304
    },
    {
      "path": "../src/app/domain/Global.js",
      "requires": [
        302
      ],
      "uses": [],
      "idx": 305
    },
    {
      "path": "../src/app/BaseController.js",
      "requires": [
        30,
        304,
        305
      ],
      "uses": [
        311,
        312,
        409
      ],
      "idx": 306
    },
    {
      "path": "../src/app/Util.js",
      "requires": [],
      "uses": [],
      "idx": 307
    },
    {
      "path": "../src/app/domain/Store.js",
      "requires": [
        106,
        302
      ],
      "uses": [],
      "idx": 308
    },
    {
      "path": "../src/app/route/Queue.js",
      "requires": [],
      "uses": [
        34
      ],
      "idx": 309
    },
    {
      "path": "../src/app/route/Route.js",
      "requires": [],
      "uses": [],
      "idx": 310
    },
    {
      "path": "../src/util/History.js",
      "requires": [
        30
      ],
      "uses": [
        23,
        265
      ],
      "idx": 311
    },
    {
      "path": "../src/app/route/Router.js",
      "requires": [
        309,
        310,
        311
      ],
      "uses": [],
      "idx": 312
    },
    {
      "path": "../src/app/Controller.js",
      "requires": [
        63,
        161,
        303,
        306,
        307,
        308,
        312
      ],
      "uses": [
        65,
        87
      ],
      "idx": 313
    },
    {
      "path": "../src/panel/Tool.js",
      "requires": [
        276
      ],
      "uses": [
        347
      ],
      "idx": 314
    },
    {
      "path": "../src/panel/Header.js",
      "requires": [
        283,
        285,
        314
      ],
      "uses": [
        63,
        276,
        292,
        363,
        398
      ],
      "idx": 315
    },
    {
      "path": "../src/toolbar/Fill.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 316
    },
    {
      "path": "../src/layout/container/boxOverflow/None.js",
      "requires": [],
      "uses": [],
      "idx": 317
    },
    {
      "path": "../src/toolbar/Item.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 318
    },
    {
      "path": "../src/toolbar/Separator.js",
      "requires": [
        318
      ],
      "uses": [],
      "idx": 319
    },
    {
      "path": "../src/button/Manager.js",
      "requires": [],
      "uses": [],
      "idx": 320
    },
    {
      "path": "../src/menu/Manager.js",
      "requires": [
        34,
        289
      ],
      "uses": [
        63,
        331,
        340,
        531
      ],
      "idx": 321
    },
    {
      "path": "../src/util/ClickRepeater.js",
      "requires": [
        30
      ],
      "uses": [],
      "idx": 322
    },
    {
      "path": "../src/layout/component/Button.js",
      "requires": [
        296
      ],
      "uses": [],
      "idx": 323
    },
    {
      "path": "../src/util/TextMetrics.js",
      "requires": [
        23
      ],
      "uses": [],
      "idx": 324
    },
    {
      "path": "../src/button/Button.js",
      "requires": [
        162,
        276,
        289,
        320,
        321,
        322,
        323,
        324
      ],
      "uses": [
        16,
        347
      ],
      "idx": 325
    },
    {
      "path": "../src/layout/container/boxOverflow/Menu.js",
      "requires": [
        317,
        319,
        325
      ],
      "uses": [
        316,
        323,
        329,
        331,
        332,
        340,
        531
      ],
      "idx": 326
    },
    {
      "path": "../src/layout/container/boxOverflow/Scroller.js",
      "requires": [
        23,
        30,
        317,
        322
      ],
      "uses": [
        329
      ],
      "idx": 327
    },
    {
      "path": "../src/dd/DragDropManager.js",
      "requires": [
        14
      ],
      "uses": [
        347,
        380
      ],
      "idx": 328
    },
    {
      "path": "../src/layout/container/Box.js",
      "requires": [
        282,
        317,
        326,
        327,
        328
      ],
      "uses": [
        280,
        393
      ],
      "idx": 329
    },
    {
      "path": "../src/layout/container/HBox.js",
      "requires": [
        329
      ],
      "uses": [],
      "idx": 330
    },
    {
      "path": "../src/layout/container/VBox.js",
      "requires": [
        329
      ],
      "uses": [],
      "idx": 331
    },
    {
      "path": "../src/toolbar/Toolbar.js",
      "requires": [
        285,
        316,
        330,
        331
      ],
      "uses": [
        319,
        458
      ],
      "idx": 332
    },
    {
      "path": "../src/dd/DragDrop.js",
      "requires": [
        328
      ],
      "uses": [
        23
      ],
      "idx": 333
    },
    {
      "path": "../src/dd/DD.js",
      "requires": [
        328,
        333
      ],
      "uses": [
        23
      ],
      "idx": 334
    },
    {
      "path": "../src/dd/DDProxy.js",
      "requires": [
        334
      ],
      "uses": [
        328
      ],
      "idx": 335
    },
    {
      "path": "../src/dd/StatusProxy.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 336
    },
    {
      "path": "../src/dd/DragSource.js",
      "requires": [
        328,
        335,
        336
      ],
      "uses": [],
      "idx": 337
    },
    {
      "path": "../src/panel/Proxy.js",
      "requires": [],
      "uses": [
        23
      ],
      "idx": 338
    },
    {
      "path": "../src/panel/DD.js",
      "requires": [
        337,
        338
      ],
      "uses": [],
      "idx": 339
    },
    {
      "path": "../src/layout/component/Dock.js",
      "requires": [
        295
      ],
      "uses": [
        23,
        65,
        280
      ],
      "idx": 340
    },
    {
      "path": "../src/util/Memento.js",
      "requires": [],
      "uses": [],
      "idx": 341
    },
    {
      "path": "../src/container/DockingContainer.js",
      "requires": [
        23,
        34
      ],
      "uses": [
        31,
        65
      ],
      "idx": 342
    },
    {
      "path": "../src/panel/Panel.js",
      "requires": [
        23,
        34,
        52,
        73,
        283,
        285,
        289,
        315,
        332,
        339,
        340,
        341,
        342
      ],
      "uses": [
        28,
        199,
        268,
        276,
        314,
        398,
        406
      ],
      "idx": 343
    },
    {
      "path": "../src/tip/Tip.js",
      "requires": [
        283,
        340,
        343
      ],
      "uses": [
        276
      ],
      "idx": 344
    },
    {
      "path": "../src/tip/ToolTip.js",
      "requires": [
        283,
        340,
        344
      ],
      "uses": [
        23
      ],
      "idx": 345
    },
    {
      "path": "../src/tip/QuickTip.js",
      "requires": [
        283,
        340,
        345
      ],
      "uses": [],
      "idx": 346
    },
    {
      "path": "../src/tip/QuickTipManager.js",
      "requires": [
        346
      ],
      "uses": [],
      "idx": 347
    },
    {
      "path": "../src/container/plugin/Viewport.js",
      "requires": [
        266
      ],
      "uses": [
        23
      ],
      "idx": 348
    },
    {
      "path": "../src/app/Application.js",
      "requires": [
        34,
        311,
        313,
        347,
        348
      ],
      "uses": [
        312
      ],
      "idx": 349
    },
    {
      "path": "../src/app/domain/View.js",
      "requires": [
        302
      ],
      "uses": [
        276
      ],
      "idx": 350
    },
    {
      "path": "../src/app/ViewController.js",
      "requires": [
        74,
        306,
        350
      ],
      "uses": [],
      "idx": 351
    },
    {
      "path": "../src/form/Labelable.js",
      "requires": [
        20,
        73
      ],
      "uses": [
        23,
        346
      ],
      "idx": 352
    },
    {
      "path": "../src/form/field/Field.js",
      "requires": [],
      "uses": [],
      "idx": 353
    },
    {
      "path": "../src/form/field/Base.js",
      "requires": [
        28,
        73,
        276,
        352,
        353
      ],
      "uses": [
        283,
        340,
        346
      ],
      "idx": 354
    },
    {
      "path": "../src/form/field/Display.js",
      "requires": [
        73,
        354
      ],
      "uses": [],
      "idx": 355
    },
    {
      "path": "../src/layout/container/Fit.js",
      "requires": [
        282
      ],
      "uses": [],
      "idx": 356
    },
    {
      "path": "../src/panel/Table.js",
      "requires": [
        340,
        343,
        356
      ],
      "uses": [
        28,
        161,
        373,
        387,
        504,
        505,
        541,
        545
      ],
      "idx": 357
    },
    {
      "path": "../src/selection/Model.js",
      "requires": [
        30,
        161,
        293
      ],
      "uses": [
        34
      ],
      "idx": 358
    },
    {
      "path": "../src/selection/DataViewModel.js",
      "requires": [
        290,
        358
      ],
      "uses": [],
      "idx": 359
    },
    {
      "path": "../src/view/AbstractView.js",
      "requires": [
        25,
        161,
        276,
        293,
        294,
        359
      ],
      "uses": [
        57,
        73,
        265
      ],
      "idx": 360
    },
    {
      "path": "../src/view/View.js",
      "requires": [
        360
      ],
      "uses": [],
      "idx": 361
    },
    {
      "path": "../src/grid/CellContext.js",
      "requires": [],
      "uses": [],
      "idx": 362
    },
    {
      "path": "../src/util/CSS.js",
      "requires": [],
      "uses": [
        23
      ],
      "idx": 363
    },
    {
      "path": "../src/view/TableLayout.js",
      "requires": [
        296,
        363
      ],
      "uses": [],
      "idx": 364
    },
    {
      "path": "../src/view/NodeCache.js",
      "requires": [
        25
      ],
      "uses": [
        23,
        24
      ],
      "idx": 365
    },
    {
      "path": "../src/view/Table.js",
      "requires": [
        28,
        34,
        361,
        362,
        364,
        365
      ],
      "uses": [
        24,
        73,
        387
      ],
      "idx": 366
    },
    {
      "path": "../src/grid/plugin/BufferedRendererTableView.js",
      "requires": [],
      "uses": [],
      "idx": 367
    },
    {
      "path": "../src/grid/View.js",
      "requires": [
        364,
        366
      ],
      "uses": [],
      "idx": 368
    },
    {
      "path": "../src/grid/Panel.js",
      "requires": [
        340,
        356,
        357,
        368
      ],
      "uses": [],
      "idx": 369
    },
    {
      "path": "../src/app/bindinspector/ComponentDetail.js",
      "requires": [
        285,
        331,
        355,
        369
      ],
      "uses": [
        283,
        340,
        356,
        400,
        402,
        403
      ],
      "idx": 370
    },
    {
      "path": "../src/tree/View.js",
      "requires": [
        159,
        364,
        366
      ],
      "uses": [
        73
      ],
      "idx": 371
    },
    {
      "path": "../src/grid/plugin/BufferedRendererTreeView.js",
      "requires": [],
      "uses": [],
      "idx": 372
    },
    {
      "path": "../src/selection/RowModel.js",
      "requires": [
        290,
        358
      ],
      "uses": [
        362
      ],
      "idx": 373
    },
    {
      "path": "../src/selection/TreeModel.js",
      "requires": [
        373
      ],
      "uses": [],
      "idx": 374
    },
    {
      "path": "../src/grid/ColumnLayout.js",
      "requires": [
        330,
        357
      ],
      "uses": [],
      "idx": 375
    },
    {
      "path": "../src/dd/DragTracker.js",
      "requires": [
        30
      ],
      "uses": [
        14
      ],
      "idx": 376
    },
    {
      "path": "../src/grid/plugin/HeaderResizer.js",
      "requires": [
        14,
        266,
        376
      ],
      "uses": [
        389
      ],
      "idx": 377
    },
    {
      "path": "../src/dd/DragZone.js",
      "requires": [
        337
      ],
      "uses": [
        381,
        383
      ],
      "idx": 378
    },
    {
      "path": "../src/grid/header/DragZone.js",
      "requires": [
        378
      ],
      "uses": [],
      "idx": 379
    },
    {
      "path": "../src/dd/DDTarget.js",
      "requires": [
        333
      ],
      "uses": [],
      "idx": 380
    },
    {
      "path": "../src/dd/ScrollManager.js",
      "requires": [
        328
      ],
      "uses": [],
      "idx": 381
    },
    {
      "path": "../src/dd/DropTarget.js",
      "requires": [
        380,
        381
      ],
      "uses": [],
      "idx": 382
    },
    {
      "path": "../src/dd/Registry.js",
      "requires": [],
      "uses": [],
      "idx": 383
    },
    {
      "path": "../src/dd/DropZone.js",
      "requires": [
        382,
        383
      ],
      "uses": [
        328
      ],
      "idx": 384
    },
    {
      "path": "../src/grid/header/DropZone.js",
      "requires": [
        384
      ],
      "uses": [
        328
      ],
      "idx": 385
    },
    {
      "path": "../src/grid/plugin/HeaderReorderer.js",
      "requires": [
        266,
        379,
        385
      ],
      "uses": [],
      "idx": 386
    },
    {
      "path": "../src/grid/header/Container.js",
      "requires": [
        283,
        285,
        375,
        377,
        386
      ],
      "uses": [
        28,
        331,
        340,
        389,
        481,
        528,
        530,
        531
      ],
      "idx": 387
    },
    {
      "path": "../src/grid/ColumnComponentLayout.js",
      "requires": [
        296
      ],
      "uses": [],
      "idx": 388
    },
    {
      "path": "../src/grid/column/Column.js",
      "requires": [
        104,
        283,
        290,
        375,
        387,
        388
      ],
      "uses": [
        377
      ],
      "idx": 389
    },
    {
      "path": "../src/tree/Column.js",
      "requires": [
        283,
        388,
        389
      ],
      "uses": [],
      "idx": 390
    },
    {
      "path": "../src/tree/Panel.js",
      "requires": [
        164,
        340,
        356,
        357,
        371,
        374,
        390
      ],
      "uses": [
        161,
        283,
        388
      ],
      "idx": 391
    },
    {
      "path": "../src/app/bindinspector/ComponentList.js",
      "requires": [
        340,
        356,
        391
      ],
      "uses": [],
      "idx": 392
    },
    {
      "path": "../src/resizer/Splitter.js",
      "requires": [
        73,
        276
      ],
      "uses": [
        421
      ],
      "idx": 393
    },
    {
      "path": "../src/resizer/BorderSplitter.js",
      "requires": [
        393
      ],
      "uses": [
        535
      ],
      "idx": 394
    },
    {
      "path": "../src/layout/container/Border.js",
      "requires": [
        52,
        277,
        282,
        394
      ],
      "uses": [],
      "idx": 395
    },
    {
      "path": "../src/layout/container/Card.js",
      "requires": [
        356
      ],
      "uses": [],
      "idx": 396
    },
    {
      "path": "../src/tab/Tab.js",
      "requires": [
        290,
        323,
        325
      ],
      "uses": [],
      "idx": 397
    },
    {
      "path": "../src/layout/component/Body.js",
      "requires": [
        296
      ],
      "uses": [],
      "idx": 398
    },
    {
      "path": "../src/tab/Bar.js",
      "requires": [
        15,
        283,
        315,
        397,
        398
      ],
      "uses": [
        14,
        327
      ],
      "idx": 399
    },
    {
      "path": "../src/tab/Panel.js",
      "requires": [
        283,
        340,
        343,
        396,
        399
      ],
      "uses": [
        323,
        397
      ],
      "idx": 400
    },
    {
      "path": "../src/app/bindinspector/Environment.js",
      "requires": [
        77
      ],
      "uses": [
        63,
        438
      ],
      "idx": 401
    },
    {
      "path": "../src/app/bindinspector/Util.js",
      "requires": [],
      "uses": [],
      "idx": 402
    },
    {
      "path": "../src/app/bindinspector/ViewModelDetail.js",
      "requires": [
        340,
        356,
        391
      ],
      "uses": [
        283,
        388,
        390,
        402,
        488
      ],
      "idx": 403
    },
    {
      "path": "../src/app/bindinspector/noconflict/BaseModel.js",
      "requires": [
        134
      ],
      "uses": [],
      "idx": 404
    },
    {
      "path": "../src/app/bindinspector/Container.js",
      "requires": [
        285,
        370,
        392,
        395,
        400,
        401,
        402,
        403,
        404
      ],
      "uses": [
        87,
        283,
        331,
        340,
        356
      ],
      "idx": 405
    },
    {
      "path": "../src/util/ComponentDragger.js",
      "requires": [
        376
      ],
      "uses": [
        14,
        23
      ],
      "idx": 406
    },
    {
      "path": "../src/window/Window.js",
      "requires": [
        14,
        283,
        340,
        343,
        406
      ],
      "uses": [],
      "idx": 407
    },
    {
      "path": "../src/app/bindinspector/Inspector.js",
      "requires": [
        340,
        347,
        356,
        405,
        407
      ],
      "uses": [
        395,
        401
      ],
      "idx": 408
    },
    {
      "path": "../src/app/domain/Controller.js",
      "requires": [
        302,
        313
      ],
      "uses": [
        306
      ],
      "idx": 409
    },
    {
      "path": "../src/app/domain/Direct.js",
      "requires": [
        193,
        302
      ],
      "uses": [],
      "idx": 410
    },
    {
      "path": "../src/button/Split.js",
      "requires": [
        323,
        325
      ],
      "uses": [],
      "idx": 411
    },
    {
      "path": "../src/button/Cycle.js",
      "requires": [
        323,
        411
      ],
      "uses": [],
      "idx": 412
    },
    {
      "path": "../src/layout/container/Table.js",
      "requires": [
        282
      ],
      "uses": [],
      "idx": 413
    },
    {
      "path": "../src/container/ButtonGroup.js",
      "requires": [
        340,
        343,
        413
      ],
      "uses": [],
      "idx": 414
    },
    {
      "path": "../src/container/Monitor.js",
      "requires": [],
      "uses": [
        34
      ],
      "idx": 415
    },
    {
      "path": "../src/container/Viewport.js",
      "requires": [
        283,
        285,
        348
      ],
      "uses": [],
      "idx": 416
    },
    {
      "path": "../src/layout/container/Anchor.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 417
    },
    {
      "path": "../src/dashboard/Panel.js",
      "requires": [
        340,
        343,
        356
      ],
      "uses": [
        63
      ],
      "idx": 418
    },
    {
      "path": "../src/dashboard/Column.js",
      "requires": [
        285,
        417,
        418
      ],
      "uses": [],
      "idx": 419
    },
    {
      "path": "../src/layout/container/Column.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 420
    },
    {
      "path": "../src/resizer/SplitterTracker.js",
      "requires": [
        14,
        376
      ],
      "uses": [
        23
      ],
      "idx": 421
    },
    {
      "path": "../src/layout/container/ColumnSplitterTracker.js",
      "requires": [
        421
      ],
      "uses": [],
      "idx": 422
    },
    {
      "path": "../src/layout/container/ColumnSplitter.js",
      "requires": [
        393,
        422
      ],
      "uses": [],
      "idx": 423
    },
    {
      "path": "../src/layout/container/SplitColumn.js",
      "requires": [
        420,
        423
      ],
      "uses": [],
      "idx": 424
    },
    {
      "path": "../src/dashboard/DropZone.js",
      "requires": [
        382
      ],
      "uses": [
        381
      ],
      "idx": 425
    },
    {
      "path": "../src/dashboard/Part.js",
      "requires": [
        0,
        74,
        79
      ],
      "uses": [],
      "idx": 426
    },
    {
      "path": "../src/dashboard/Dashboard.js",
      "requires": [
        340,
        343,
        419,
        424,
        425,
        426
      ],
      "uses": [
        74,
        77,
        273
      ],
      "idx": 427
    },
    {
      "path": "../src/dom/Layer.js",
      "requires": [
        23
      ],
      "uses": [
        301
      ],
      "idx": 428
    },
    {
      "path": "../src/enums.js",
      "requires": [],
      "uses": [],
      "idx": 429
    },
    {
      "path": "../src/flash/Component.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 430
    },
    {
      "path": "../src/form/action/Action.js",
      "requires": [],
      "uses": [],
      "idx": 431
    },
    {
      "path": "../src/form/action/Load.js",
      "requires": [
        61,
        431
      ],
      "uses": [
        62
      ],
      "idx": 432
    },
    {
      "path": "../src/form/action/Submit.js",
      "requires": [
        431
      ],
      "uses": [
        62
      ],
      "idx": 433
    },
    {
      "path": "../src/form/field/VTypes.js",
      "requires": [],
      "uses": [],
      "idx": 434
    },
    {
      "path": "../src/form/trigger/Trigger.js",
      "requires": [
        74,
        322
      ],
      "uses": [
        23,
        73
      ],
      "idx": 435
    },
    {
      "path": "../src/form/field/Text.js",
      "requires": [
        354,
        434,
        435
      ],
      "uses": [
        25,
        28,
        55
      ],
      "idx": 436
    },
    {
      "path": "../src/form/field/TextArea.js",
      "requires": [
        28,
        73,
        436
      ],
      "uses": [],
      "idx": 437
    },
    {
      "path": "../src/window/MessageBox.js",
      "requires": [
        298,
        325,
        330,
        331,
        332,
        340,
        355,
        407,
        417,
        436,
        437
      ],
      "uses": [
        276,
        285,
        297,
        323
      ],
      "idx": 438
    },
    {
      "path": "../src/form/Basic.js",
      "requires": [
        28,
        30,
        34,
        123,
        432,
        433,
        438
      ],
      "uses": [
        415
      ],
      "idx": 439
    },
    {
      "path": "../src/form/FieldAncestor.js",
      "requires": [
        20,
        415
      ],
      "uses": [],
      "idx": 440
    },
    {
      "path": "../src/layout/component/field/FieldContainer.js",
      "requires": [
        296
      ],
      "uses": [],
      "idx": 441
    },
    {
      "path": "../src/form/FieldContainer.js",
      "requires": [
        283,
        285,
        352,
        440,
        441
      ],
      "uses": [],
      "idx": 442
    },
    {
      "path": "../src/layout/container/CheckboxGroup.js",
      "requires": [
        282
      ],
      "uses": [],
      "idx": 443
    },
    {
      "path": "../src/form/CheckboxManager.js",
      "requires": [
        34
      ],
      "uses": [],
      "idx": 444
    },
    {
      "path": "../src/form/field/Checkbox.js",
      "requires": [
        73,
        354,
        444
      ],
      "uses": [],
      "idx": 445
    },
    {
      "path": "../src/form/CheckboxGroup.js",
      "requires": [
        353,
        354,
        441,
        442,
        443,
        445
      ],
      "uses": [],
      "idx": 446
    },
    {
      "path": "../src/form/FieldSet.js",
      "requires": [
        285,
        440
      ],
      "uses": [
        23,
        268,
        276,
        282,
        314,
        417,
        445,
        522
      ],
      "idx": 447
    },
    {
      "path": "../src/form/Label.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 448
    },
    {
      "path": "../src/form/Panel.js",
      "requires": [
        35,
        340,
        343,
        417,
        439,
        440
      ],
      "uses": [],
      "idx": 449
    },
    {
      "path": "../src/form/RadioManager.js",
      "requires": [
        34
      ],
      "uses": [],
      "idx": 450
    },
    {
      "path": "../src/form/field/Radio.js",
      "requires": [
        445,
        450
      ],
      "uses": [],
      "idx": 451
    },
    {
      "path": "../src/form/RadioGroup.js",
      "requires": [
        441,
        443,
        446,
        451
      ],
      "uses": [
        450
      ],
      "idx": 452
    },
    {
      "path": "../src/form/action/DirectLoad.js",
      "requires": [
        150,
        432
      ],
      "uses": [],
      "idx": 453
    },
    {
      "path": "../src/form/action/DirectSubmit.js",
      "requires": [
        150,
        433
      ],
      "uses": [],
      "idx": 454
    },
    {
      "path": "../src/form/action/StandardSubmit.js",
      "requires": [
        433
      ],
      "uses": [],
      "idx": 455
    },
    {
      "path": "../src/form/field/Picker.js",
      "requires": [
        290,
        436
      ],
      "uses": [],
      "idx": 456
    },
    {
      "path": "../src/layout/component/BoundList.js",
      "requires": [
        296
      ],
      "uses": [],
      "idx": 457
    },
    {
      "path": "../src/toolbar/TextItem.js",
      "requires": [
        73,
        318
      ],
      "uses": [],
      "idx": 458
    },
    {
      "path": "../src/form/trigger/Spinner.js",
      "requires": [
        435
      ],
      "uses": [],
      "idx": 459
    },
    {
      "path": "../src/form/field/Spinner.js",
      "requires": [
        290,
        436,
        459
      ],
      "uses": [],
      "idx": 460
    },
    {
      "path": "../src/form/field/Number.js",
      "requires": [
        460
      ],
      "uses": [],
      "idx": 461
    },
    {
      "path": "../src/toolbar/Paging.js",
      "requires": [
        293,
        332,
        458,
        461
      ],
      "uses": [],
      "idx": 462
    },
    {
      "path": "../src/view/BoundList.js",
      "requires": [
        23,
        162,
        361,
        457,
        462
      ],
      "uses": [
        73
      ],
      "idx": 463
    },
    {
      "path": "../src/view/BoundListKeyNav.js",
      "requires": [
        290,
        463
      ],
      "uses": [],
      "idx": 464
    },
    {
      "path": "../src/form/field/ComboBox.js",
      "requires": [
        28,
        161,
        293,
        456,
        463,
        464
      ],
      "uses": [
        16,
        23,
        27,
        73,
        141,
        457
      ],
      "idx": 465
    },
    {
      "path": "../src/picker/Month.js",
      "requires": [
        73,
        276,
        322,
        325
      ],
      "uses": [
        323
      ],
      "idx": 466
    },
    {
      "path": "../src/picker/Date.js",
      "requires": [
        46,
        73,
        276,
        290,
        322,
        325,
        411,
        466
      ],
      "uses": [
        16,
        323
      ],
      "idx": 467
    },
    {
      "path": "../src/form/field/Date.js",
      "requires": [
        456,
        467
      ],
      "uses": [],
      "idx": 468
    },
    {
      "path": "../src/form/field/FileButton.js",
      "requires": [
        323,
        325
      ],
      "uses": [],
      "idx": 469
    },
    {
      "path": "../src/form/trigger/Component.js",
      "requires": [
        435
      ],
      "uses": [],
      "idx": 470
    },
    {
      "path": "../src/form/field/File.js",
      "requires": [
        436,
        469,
        470
      ],
      "uses": [
        323
      ],
      "idx": 471
    },
    {
      "path": "../src/form/field/Hidden.js",
      "requires": [
        354
      ],
      "uses": [],
      "idx": 472
    },
    {
      "path": "../src/picker/Color.js",
      "requires": [
        73,
        276
      ],
      "uses": [],
      "idx": 473
    },
    {
      "path": "../src/layout/component/field/HtmlEditor.js",
      "requires": [
        441
      ],
      "uses": [],
      "idx": 474
    },
    {
      "path": "../src/form/field/HtmlEditor.js",
      "requires": [
        283,
        318,
        331,
        332,
        347,
        353,
        442,
        473,
        474
      ],
      "uses": [
        28,
        265,
        276,
        340,
        531
      ],
      "idx": 475
    },
    {
      "path": "../src/form/field/Tag.js",
      "requires": [
        143,
        358,
        465
      ],
      "uses": [
        27,
        55,
        73
      ],
      "idx": 476
    },
    {
      "path": "../src/picker/Time.js",
      "requires": [
        143,
        457,
        463
      ],
      "uses": [
        27
      ],
      "idx": 477
    },
    {
      "path": "../src/form/field/Time.js",
      "requires": [
        464,
        465,
        468,
        477
      ],
      "uses": [
        73,
        457
      ],
      "idx": 478
    },
    {
      "path": "../src/form/field/Trigger.js",
      "requires": [
        322,
        436
      ],
      "uses": [],
      "idx": 479
    },
    {
      "path": "../src/grid/CellEditor.js",
      "requires": [
        286,
        287
      ],
      "uses": [],
      "idx": 480
    },
    {
      "path": "../src/grid/ColumnManager.js",
      "requires": [],
      "uses": [],
      "idx": 481
    },
    {
      "path": "../src/grid/RowEditorButtons.js",
      "requires": [
        283,
        285
      ],
      "uses": [
        323,
        325,
        343
      ],
      "idx": 482
    },
    {
      "path": "../src/grid/RowEditor.js",
      "requires": [
        290,
        340,
        345,
        417,
        449,
        482
      ],
      "uses": [
        283,
        285,
        355
      ],
      "idx": 483
    },
    {
      "path": "../src/grid/Scroller.js",
      "requires": [],
      "uses": [],
      "idx": 484
    },
    {
      "path": "../src/view/DropZone.js",
      "requires": [
        384
      ],
      "uses": [
        276
      ],
      "idx": 485
    },
    {
      "path": "../src/grid/ViewDropZone.js",
      "requires": [
        485
      ],
      "uses": [],
      "idx": 486
    },
    {
      "path": "../src/grid/column/Action.js",
      "requires": [
        283,
        388,
        389
      ],
      "uses": [],
      "idx": 487
    },
    {
      "path": "../src/grid/column/Boolean.js",
      "requires": [
        283,
        388,
        389
      ],
      "uses": [],
      "idx": 488
    },
    {
      "path": "../src/grid/column/Check.js",
      "requires": [
        283,
        388,
        389
      ],
      "uses": [],
      "idx": 489
    },
    {
      "path": "../src/grid/column/Date.js",
      "requires": [
        283,
        388,
        389
      ],
      "uses": [],
      "idx": 490
    },
    {
      "path": "../src/grid/column/Number.js",
      "requires": [
        283,
        388,
        389
      ],
      "uses": [],
      "idx": 491
    },
    {
      "path": "../src/grid/column/RowNumberer.js",
      "requires": [
        283,
        388,
        389
      ],
      "uses": [],
      "idx": 492
    },
    {
      "path": "../src/grid/column/Template.js",
      "requires": [
        73,
        283,
        388,
        389
      ],
      "uses": [
        489
      ],
      "idx": 493
    },
    {
      "path": "../src/grid/column/Widget.js",
      "requires": [
        283,
        388,
        389
      ],
      "uses": [],
      "idx": 494
    },
    {
      "path": "../src/grid/feature/Feature.js",
      "requires": [
        30
      ],
      "uses": [],
      "idx": 495
    },
    {
      "path": "../src/grid/feature/AbstractSummary.js",
      "requires": [
        495
      ],
      "uses": [],
      "idx": 496
    },
    {
      "path": "../src/grid/feature/GroupStore.js",
      "requires": [
        30
      ],
      "uses": [
        77
      ],
      "idx": 497
    },
    {
      "path": "../src/grid/feature/Grouping.js",
      "requires": [
        495,
        496,
        497
      ],
      "uses": [
        73,
        387
      ],
      "idx": 498
    },
    {
      "path": "../src/grid/feature/GroupingSummary.js",
      "requires": [
        498
      ],
      "uses": [],
      "idx": 499
    },
    {
      "path": "../src/grid/feature/RowBody.js",
      "requires": [
        495
      ],
      "uses": [
        73
      ],
      "idx": 500
    },
    {
      "path": "../src/grid/feature/Summary.js",
      "requires": [
        496
      ],
      "uses": [
        276
      ],
      "idx": 501
    },
    {
      "path": "../src/grid/locking/HeaderContainer.js",
      "requires": [
        283,
        387,
        481
      ],
      "uses": [],
      "idx": 502
    },
    {
      "path": "../src/grid/locking/View.js",
      "requires": [
        30,
        276,
        293,
        360
      ],
      "uses": [
        63,
        294,
        366
      ],
      "idx": 503
    },
    {
      "path": "../src/grid/locking/Lockable.js",
      "requires": [
        276,
        366,
        387,
        502,
        503
      ],
      "uses": [
        161,
        329,
        393
      ],
      "idx": 504
    },
    {
      "path": "../src/grid/plugin/BufferedRenderer.js",
      "requires": [
        266,
        367,
        372
      ],
      "uses": [
        28
      ],
      "idx": 505
    },
    {
      "path": "../src/grid/plugin/Editing.js",
      "requires": [
        30,
        266,
        290,
        354,
        366,
        389
      ],
      "uses": [
        63
      ],
      "idx": 506
    },
    {
      "path": "../src/grid/plugin/CellEditing.js",
      "requires": [
        28,
        480,
        506
      ],
      "uses": [
        16,
        34,
        286,
        362
      ],
      "idx": 507
    },
    {
      "path": "../src/grid/plugin/CellUpdating.js",
      "requires": [
        266,
        366,
        389
      ],
      "uses": [
        24,
        28
      ],
      "idx": 508
    },
    {
      "path": "../src/grid/plugin/DragDrop.js",
      "requires": [
        266
      ],
      "uses": [
        486,
        565
      ],
      "idx": 509
    },
    {
      "path": "../src/grid/plugin/RowEditing.js",
      "requires": [
        483,
        506
      ],
      "uses": [],
      "idx": 510
    },
    {
      "path": "../src/grid/plugin/RowExpander.js",
      "requires": [
        266,
        500
      ],
      "uses": [
        73
      ],
      "idx": 511
    },
    {
      "path": "../src/grid/plugin/SubTable.js",
      "requires": [
        511
      ],
      "uses": [],
      "idx": 512
    },
    {
      "path": "../src/grid/property/Grid.js",
      "requires": [
        340,
        356,
        369
      ],
      "uses": [
        63,
        73,
        134,
        286,
        354,
        366,
        436,
        461,
        465,
        468,
        480,
        507,
        514,
        516
      ],
      "idx": 513
    },
    {
      "path": "../src/grid/property/HeaderContainer.js",
      "requires": [
        283,
        387
      ],
      "uses": [],
      "idx": 514
    },
    {
      "path": "../src/grid/property/Property.js",
      "requires": [
        134
      ],
      "uses": [],
      "idx": 515
    },
    {
      "path": "../src/grid/property/Store.js",
      "requires": [
        143
      ],
      "uses": [
        110,
        111,
        113,
        115,
        515
      ],
      "idx": 516
    },
    {
      "path": "../src/layout/ClassList.js",
      "requires": [],
      "uses": [],
      "idx": 517
    },
    {
      "path": "../src/util/Queue.js",
      "requires": [],
      "uses": [],
      "idx": 518
    },
    {
      "path": "../src/layout/ContextItem.js",
      "requires": [
        517
      ],
      "uses": [
        34,
        46,
        52,
        280
      ],
      "idx": 519
    },
    {
      "path": "../src/layout/Context.js",
      "requires": [
        46,
        52,
        255,
        281,
        518,
        519
      ],
      "uses": [],
      "idx": 520
    },
    {
      "path": "../src/layout/SizePolicy.js",
      "requires": [],
      "uses": [],
      "idx": 521
    },
    {
      "path": "../src/layout/component/FieldSet.js",
      "requires": [
        398
      ],
      "uses": [],
      "idx": 522
    },
    {
      "path": "../src/layout/container/Absolute.js",
      "requires": [
        417
      ],
      "uses": [],
      "idx": 523
    },
    {
      "path": "../src/layout/container/Accordion.js",
      "requires": [
        331
      ],
      "uses": [],
      "idx": 524
    },
    {
      "path": "../src/layout/container/Center.js",
      "requires": [
        356
      ],
      "uses": [],
      "idx": 525
    },
    {
      "path": "../src/layout/container/Form.js",
      "requires": [
        283
      ],
      "uses": [],
      "idx": 526
    },
    {
      "path": "../src/menu/Item.js",
      "requires": [
        162,
        276
      ],
      "uses": [
        23,
        321,
        347
      ],
      "idx": 527
    },
    {
      "path": "../src/menu/CheckItem.js",
      "requires": [
        527
      ],
      "uses": [
        321
      ],
      "idx": 528
    },
    {
      "path": "../src/menu/KeyNav.js",
      "requires": [
        290
      ],
      "uses": [
        321
      ],
      "idx": 529
    },
    {
      "path": "../src/menu/Separator.js",
      "requires": [
        527
      ],
      "uses": [],
      "idx": 530
    },
    {
      "path": "../src/menu/Menu.js",
      "requires": [
        321,
        331,
        340,
        343,
        527,
        528,
        529,
        530
      ],
      "uses": [
        23,
        63
      ],
      "idx": 531
    },
    {
      "path": "../src/menu/ColorPicker.js",
      "requires": [
        331,
        340,
        473,
        531
      ],
      "uses": [
        321
      ],
      "idx": 532
    },
    {
      "path": "../src/menu/DatePicker.js",
      "requires": [
        331,
        340,
        467,
        531
      ],
      "uses": [
        321
      ],
      "idx": 533
    },
    {
      "path": "../src/panel/Pinnable.js",
      "requires": [
        20
      ],
      "uses": [
        314
      ],
      "idx": 534
    },
    {
      "path": "../src/resizer/BorderSplitterTracker.js",
      "requires": [
        14,
        421
      ],
      "uses": [],
      "idx": 535
    },
    {
      "path": "../src/resizer/Handle.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 536
    },
    {
      "path": "../src/resizer/ResizeTracker.js",
      "requires": [
        376
      ],
      "uses": [],
      "idx": 537
    },
    {
      "path": "../src/resizer/Resizer.js",
      "requires": [
        30
      ],
      "uses": [
        23,
        276,
        537
      ],
      "idx": 538
    },
    {
      "path": "../src/scroll/Indicator.js",
      "requires": [],
      "uses": [],
      "idx": 539
    },
    {
      "path": "../src/scroll/Manager.js",
      "requires": [
        30,
        55,
        263,
        539
      ],
      "uses": [],
      "idx": 540
    },
    {
      "path": "../src/selection/CellModel.js",
      "requires": [
        290,
        358,
        362
      ],
      "uses": [],
      "idx": 541
    },
    {
      "path": "../src/slider/Thumb.js",
      "requires": [
        376
      ],
      "uses": [
        52
      ],
      "idx": 542
    },
    {
      "path": "../src/slider/Tip.js",
      "requires": [
        283,
        340,
        344
      ],
      "uses": [],
      "idx": 543
    },
    {
      "path": "../src/slider/Multi.js",
      "requires": [
        354,
        542,
        543
      ],
      "uses": [],
      "idx": 544
    },
    {
      "path": "../src/selection/CheckboxModel.js",
      "requires": [
        373
      ],
      "uses": [],
      "idx": 545
    },
    {
      "path": "../src/slider/Single.js",
      "requires": [
        544
      ],
      "uses": [],
      "idx": 546
    },
    {
      "path": "../src/slider/Widget.js",
      "requires": [
        70,
        544
      ],
      "uses": [
        52
      ],
      "idx": 547
    },
    {
      "path": "../src/sparkline/Shape.js",
      "requires": [],
      "uses": [],
      "idx": 548
    },
    {
      "path": "../src/sparkline/CanvasBase.js",
      "requires": [
        548
      ],
      "uses": [],
      "idx": 549
    },
    {
      "path": "../src/sparkline/CanvasCanvas.js",
      "requires": [
        549
      ],
      "uses": [],
      "idx": 550
    },
    {
      "path": "../src/sparkline/VmlCanvas.js",
      "requires": [
        549
      ],
      "uses": [],
      "idx": 551
    },
    {
      "path": "../src/sparkline/Base.js",
      "requires": [
        70,
        73,
        550,
        551
      ],
      "uses": [
        283,
        340,
        345
      ],
      "idx": 552
    },
    {
      "path": "../src/sparkline/BarBase.js",
      "requires": [
        552
      ],
      "uses": [],
      "idx": 553
    },
    {
      "path": "../src/sparkline/RangeMap.js",
      "requires": [],
      "uses": [],
      "idx": 554
    },
    {
      "path": "../src/sparkline/Bar.js",
      "requires": [
        73,
        553,
        554
      ],
      "uses": [],
      "idx": 555
    },
    {
      "path": "../src/sparkline/Box.js",
      "requires": [
        73,
        552
      ],
      "uses": [],
      "idx": 556
    },
    {
      "path": "../src/sparkline/Bullet.js",
      "requires": [
        73,
        552
      ],
      "uses": [],
      "idx": 557
    },
    {
      "path": "../src/sparkline/Discrete.js",
      "requires": [
        73,
        553
      ],
      "uses": [],
      "idx": 558
    },
    {
      "path": "../src/sparkline/Line.js",
      "requires": [
        73,
        552,
        554
      ],
      "uses": [],
      "idx": 559
    },
    {
      "path": "../src/sparkline/Pie.js",
      "requires": [
        73,
        552
      ],
      "uses": [],
      "idx": 560
    },
    {
      "path": "../src/sparkline/TriState.js",
      "requires": [
        73,
        553,
        554
      ],
      "uses": [],
      "idx": 561
    },
    {
      "path": "../src/state/CookieProvider.js",
      "requires": [
        272
      ],
      "uses": [],
      "idx": 562
    },
    {
      "path": "../src/state/LocalStorageProvider.js",
      "requires": [
        264,
        272
      ],
      "uses": [],
      "idx": 563
    },
    {
      "path": "../src/toolbar/Spacer.js",
      "requires": [
        276
      ],
      "uses": [],
      "idx": 564
    },
    {
      "path": "../src/view/DragZone.js",
      "requires": [
        378
      ],
      "uses": [],
      "idx": 565
    },
    {
      "path": "../src/tree/ViewDragZone.js",
      "requires": [
        565
      ],
      "uses": [],
      "idx": 566
    },
    {
      "path": "../src/tree/ViewDropZone.js",
      "requires": [
        485
      ],
      "uses": [],
      "idx": 567
    },
    {
      "path": "../src/tree/plugin/TreeViewDragDrop.js",
      "requires": [
        266
      ],
      "uses": [
        566,
        567
      ],
      "idx": 568
    },
    {
      "path": "../src/util/Cookies.js",
      "requires": [],
      "uses": [],
      "idx": 569
    },
    {
      "path": "../src/view/MultiSelectorSearch.js",
      "requires": [
        340,
        343,
        356
      ],
      "uses": [
        27,
        161,
        369,
        436,
        505
      ],
      "idx": 570
    },
    {
      "path": "../src/view/MultiSelector.js",
      "requires": [
        340,
        356,
        369,
        570
      ],
      "uses": [],
      "idx": 571
    },
    {
      "path": "../src/window/Toast.js",
      "requires": [
        283,
        340,
        407
      ],
      "uses": [
        28
      ],
      "idx": 572
    }
  ],
  "classes": {
    "Ext.AbstractManager": {
      "idx": 59,
      "alias": [],
      "alternates": []
    },
    "Ext.AbstractPlugin": {
      "idx": 266,
      "alias": [],
      "alternates": []
    },
    "Ext.Action": {
      "idx": 267,
      "alias": [],
      "alternates": []
    },
    "Ext.Ajax": {
      "idx": 62,
      "alias": [],
      "alternates": []
    },
    "Ext.AnimationQueue": {
      "idx": 57,
      "alias": [],
      "alternates": []
    },
    "Ext.Component": {
      "idx": 276,
      "alias": [
        "widget.box",
        "widget.component"
      ],
      "alternates": [
        "Ext.AbstractComponent"
      ]
    },
    "Ext.ComponentLoader": {
      "idx": 279,
      "alias": [],
      "alternates": []
    },
    "Ext.ComponentManager": {
      "idx": 63,
      "alias": [],
      "alternates": [
        "Ext.ComponentMgr"
      ]
    },
    "Ext.ComponentQuery": {
      "idx": 65,
      "alias": [],
      "alternates": []
    },
    "Ext.Editor": {
      "idx": 287,
      "alias": [
        "widget.editor"
      ],
      "alternates": []
    },
    "Ext.ElementLoader": {
      "idx": 278,
      "alias": [],
      "alternates": []
    },
    "Ext.EventManager": {
      "idx": 288,
      "alias": [],
      "alternates": []
    },
    "Ext.Evented": {
      "idx": 66,
      "alias": [],
      "alternates": [
        "Ext.EventedBase"
      ]
    },
    "Ext.FocusManager": {
      "idx": 291,
      "alias": [],
      "alternates": [
        "Ext.FocusMgr"
      ]
    },
    "Ext.GlobalEvents": {
      "idx": 55,
      "alias": [],
      "alternates": [
        "Ext.globalEvents"
      ]
    },
    "Ext.Img": {
      "idx": 292,
      "alias": [
        "widget.image",
        "widget.imagecomponent"
      ],
      "alternates": []
    },
    "Ext.LoadMask": {
      "idx": 294,
      "alias": [
        "widget.loadmask"
      ],
      "alternates": []
    },
    "Ext.Mixin": {
      "idx": 20,
      "alias": [],
      "alternates": []
    },
    "Ext.PluginManager": {
      "idx": 269,
      "alias": [],
      "alternates": [
        "Ext.PluginMgr"
      ]
    },
    "Ext.ProgressBar": {
      "idx": 298,
      "alias": [
        "widget.progressbar"
      ],
      "alternates": []
    },
    "Ext.ProgressBarWidget": {
      "idx": 299,
      "alias": [
        "widget.progressbarwidget"
      ],
      "alternates": []
    },
    "Ext.Shadow": {
      "idx": 301,
      "alias": [],
      "alternates": []
    },
    "Ext.ShadowPool": {
      "idx": 300,
      "alias": [],
      "alternates": []
    },
    "Ext.TaskQueue": {
      "idx": 68,
      "alias": [],
      "alternates": []
    },
    "Ext.Template": {
      "alias": [],
      "alternates": []
    },
    "Ext.Widget": {
      "idx": 70,
      "alias": [
        "widget.widget"
      ],
      "alternates": []
    },
    "Ext.XTemplate": {
      "idx": 73,
      "alias": [],
      "alternates": []
    },
    "Ext.ZIndexManager": {
      "idx": 284,
      "alias": [],
      "alternates": [
        "Ext.WindowGroup"
      ]
    },
    "Ext.app.Application": {
      "idx": 349,
      "alias": [],
      "alternates": []
    },
    "Ext.app.BaseController": {
      "idx": 306,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Controller": {
      "idx": 313,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventBus": {
      "idx": 304,
      "alias": [],
      "alternates": []
    },
    "Ext.app.EventDomain": {
      "idx": 302,
      "alias": [],
      "alternates": []
    },
    "Ext.app.Util": {
      "idx": 307,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewController": {
      "idx": 351,
      "alias": [],
      "alternates": []
    },
    "Ext.app.ViewModel": {
      "idx": 109,
      "alias": [
        "viewmodel.default"
      ],
      "alternates": []
    },
    "Ext.app.bind.Formula": {
      "idx": 103,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.LinkStub": {
      "idx": 100,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Multi": {
      "idx": 102,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.RootStub": {
      "idx": 101,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Stub": {
      "idx": 99,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.Template": {
      "idx": 104,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bind.TemplateBinding": {
      "idx": 105,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.ComponentDetail": {
      "idx": 370,
      "alias": [
        "widget.bindinspector-componentdetail"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.ComponentList": {
      "idx": 392,
      "alias": [
        "widget.bindinspector-componentlist"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.Container": {
      "idx": 405,
      "alias": [
        "widget.bindinspector-container"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.Environment": {
      "idx": 401,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.Inspector": {
      "idx": 408,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.Util": {
      "idx": 402,
      "alias": [],
      "alternates": []
    },
    "Ext.app.bindinspector.ViewModelDetail": {
      "idx": 403,
      "alias": [
        "widget.bindinspector-viewmodeldetail"
      ],
      "alternates": []
    },
    "Ext.app.bindinspector.noconflict.BaseModel": {
      "idx": 404,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Component": {
      "idx": 303,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Controller": {
      "idx": 409,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Direct": {
      "idx": 410,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Global": {
      "idx": 305,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.Store": {
      "idx": 308,
      "alias": [],
      "alternates": []
    },
    "Ext.app.domain.View": {
      "idx": 350,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Queue": {
      "idx": 309,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Route": {
      "idx": 310,
      "alias": [],
      "alternates": []
    },
    "Ext.app.route.Router": {
      "idx": 312,
      "alias": [],
      "alternates": []
    },
    "Ext.button.Button": {
      "idx": 325,
      "alias": [
        "widget.button"
      ],
      "alternates": [
        "Ext.Button"
      ]
    },
    "Ext.button.Cycle": {
      "idx": 412,
      "alias": [
        "widget.cycle"
      ],
      "alternates": [
        "Ext.CycleButton"
      ]
    },
    "Ext.button.Manager": {
      "idx": 320,
      "alias": [],
      "alternates": [
        "Ext.ButtonToggleManager"
      ]
    },
    "Ext.button.Split": {
      "idx": 411,
      "alias": [
        "widget.splitbutton"
      ],
      "alternates": [
        "Ext.SplitButton"
      ]
    },
    "Ext.container.ButtonGroup": {
      "idx": 414,
      "alias": [
        "widget.buttongroup"
      ],
      "alternates": [
        "Ext.ButtonGroup"
      ]
    },
    "Ext.container.Container": {
      "idx": 285,
      "alias": [
        "widget.container"
      ],
      "alternates": [
        "Ext.Container",
        "Ext.AbstractContainer"
      ]
    },
    "Ext.container.DockingContainer": {
      "idx": 342,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Monitor": {
      "idx": 415,
      "alias": [],
      "alternates": []
    },
    "Ext.container.Viewport": {
      "idx": 416,
      "alias": [
        "widget.viewport"
      ],
      "alternates": [
        "Ext.Viewport"
      ]
    },
    "Ext.container.plugin.Viewport": {
      "idx": 348,
      "alias": [
        "plugin.viewport"
      ],
      "alternates": []
    },
    "Ext.dashboard.Column": {
      "idx": 419,
      "alias": [
        "widget.dashboard-column"
      ],
      "alternates": []
    },
    "Ext.dashboard.Dashboard": {
      "idx": 427,
      "alias": [
        "widget.dashboard"
      ],
      "alternates": []
    },
    "Ext.dashboard.DropZone": {
      "idx": 425,
      "alias": [],
      "alternates": []
    },
    "Ext.dashboard.Panel": {
      "idx": 418,
      "alias": [
        "widget.dashboard-panel"
      ],
      "alternates": []
    },
    "Ext.dashboard.Part": {
      "idx": 426,
      "alias": [
        "part.part"
      ],
      "alternates": []
    },
    "Ext.data.AbstractStore": {
      "idx": 106,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ArrayStore": {
      "idx": 145,
      "alias": [
        "store.array"
      ],
      "alternates": [
        "Ext.data.SimpleStore"
      ]
    },
    "Ext.data.Batch": {
      "idx": 88,
      "alias": [],
      "alternates": []
    },
    "Ext.data.BufferStore": {
      "idx": 146,
      "alias": [
        "store.buffer"
      ],
      "alternates": []
    },
    "Ext.data.BufferedStore": {
      "idx": 149,
      "alias": [
        "store.buffered"
      ],
      "alternates": []
    },
    "Ext.data.ChainedStore": {
      "idx": 108,
      "alias": [
        "store.chained"
      ],
      "alternates": []
    },
    "Ext.data.Connection": {
      "idx": 61,
      "alias": [],
      "alternates": []
    },
    "Ext.data.DirectStore": {
      "idx": 152,
      "alias": [
        "store.direct"
      ],
      "alternates": []
    },
    "Ext.data.Error": {
      "idx": 122,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ErrorCollection": {
      "idx": 123,
      "alias": [],
      "alternates": [
        "Ext.data.Errors"
      ]
    },
    "Ext.data.JsonP": {
      "idx": 153,
      "alias": [],
      "alternates": []
    },
    "Ext.data.JsonPStore": {
      "idx": 155,
      "alias": [
        "store.jsonp"
      ],
      "alternates": []
    },
    "Ext.data.JsonStore": {
      "idx": 156,
      "alias": [
        "store.json"
      ],
      "alternates": []
    },
    "Ext.data.LocalStore": {
      "idx": 107,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Model": {
      "idx": 134,
      "alias": [],
      "alternates": [
        "Ext.data.Record"
      ]
    },
    "Ext.data.ModelManager": {
      "idx": 157,
      "alias": [],
      "alternates": [
        "Ext.ModelMgr"
      ]
    },
    "Ext.data.NodeInterface": {
      "idx": 158,
      "alias": [],
      "alternates": []
    },
    "Ext.data.NodeStore": {
      "idx": 159,
      "alias": [
        "store.node"
      ],
      "alternates": []
    },
    "Ext.data.PageMap": {
      "idx": 148,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ProxyStore": {
      "idx": 121,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Request": {
      "idx": 160,
      "alias": [],
      "alternates": []
    },
    "Ext.data.ResultSet": {
      "idx": 110,
      "alias": [],
      "alternates": []
    },
    "Ext.data.SortTypes": {
      "idx": 124,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Store": {
      "idx": 143,
      "alias": [
        "store.store"
      ],
      "alternates": []
    },
    "Ext.data.StoreManager": {
      "idx": 161,
      "alias": [],
      "alternates": [
        "Ext.StoreMgr",
        "Ext.data.StoreMgr",
        "Ext.StoreManager"
      ]
    },
    "Ext.data.TreeModel": {
      "idx": 163,
      "alias": [],
      "alternates": []
    },
    "Ext.data.TreeStore": {
      "idx": 164,
      "alias": [
        "store.tree"
      ],
      "alternates": []
    },
    "Ext.data.Types": {
      "idx": 165,
      "alias": [],
      "alternates": []
    },
    "Ext.data.Validation": {
      "idx": 166,
      "alias": [],
      "alternates": []
    },
    "Ext.data.XmlStore": {
      "idx": 170,
      "alias": [
        "store.xml"
      ],
      "alternates": []
    },
    "Ext.data.field.Boolean": {
      "idx": 131,
      "alias": [
        "data.field.bool",
        "data.field.boolean"
      ],
      "alternates": []
    },
    "Ext.data.field.Date": {
      "idx": 128,
      "alias": [
        "data.field.date"
      ],
      "alternates": []
    },
    "Ext.data.field.Field": {
      "idx": 126,
      "alias": [
        "data.field.auto"
      ],
      "alternates": [
        "Ext.data.Field"
      ]
    },
    "Ext.data.field.Integer": {
      "idx": 129,
      "alias": [
        "data.field.int",
        "data.field.integer"
      ],
      "alternates": []
    },
    "Ext.data.field.Number": {
      "idx": 127,
      "alias": [
        "data.field.float",
        "data.field.number"
      ],
      "alternates": []
    },
    "Ext.data.field.String": {
      "idx": 130,
      "alias": [
        "data.field.string"
      ],
      "alternates": []
    },
    "Ext.data.flash.BinaryXhr": {
      "idx": 60,
      "alias": [],
      "alternates": []
    },
    "Ext.data.identifier.Generator": {
      "idx": 132,
      "alias": [
        "data.identifier.default"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Negative": {
      "idx": 171,
      "alias": [
        "data.identifier.negative"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Sequential": {
      "idx": 133,
      "alias": [
        "data.identifier.sequential"
      ],
      "alternates": []
    },
    "Ext.data.identifier.Uuid": {
      "idx": 172,
      "alias": [
        "data.identifier.uuid"
      ],
      "alternates": []
    },
    "Ext.data.operation.Create": {
      "idx": 119,
      "alias": [
        "data.operation.create"
      ],
      "alternates": []
    },
    "Ext.data.operation.Destroy": {
      "idx": 118,
      "alias": [
        "data.operation.destroy"
      ],
      "alternates": []
    },
    "Ext.data.operation.Operation": {
      "idx": 116,
      "alias": [],
      "alternates": [
        "Ext.data.Operation"
      ]
    },
    "Ext.data.operation.Read": {
      "idx": 117,
      "alias": [
        "data.operation.read"
      ],
      "alternates": []
    },
    "Ext.data.operation.Update": {
      "idx": 120,
      "alias": [
        "data.operation.update"
      ],
      "alternates": []
    },
    "Ext.data.proxy.Ajax": {
      "idx": 136,
      "alias": [
        "proxy.ajax"
      ],
      "alternates": [
        "Ext.data.HttpProxy",
        "Ext.data.AjaxProxy"
      ]
    },
    "Ext.data.proxy.Client": {
      "idx": 114,
      "alias": [],
      "alternates": [
        "Ext.data.ClientProxy"
      ]
    },
    "Ext.data.proxy.Direct": {
      "idx": 151,
      "alias": [
        "proxy.direct"
      ],
      "alternates": [
        "Ext.data.DirectProxy"
      ]
    },
    "Ext.data.proxy.JsonP": {
      "idx": 154,
      "alias": [
        "proxy.scripttag",
        "proxy.jsonp"
      ],
      "alternates": [
        "Ext.data.ScriptTagProxy"
      ]
    },
    "Ext.data.proxy.LocalStorage": {
      "idx": 174,
      "alias": [
        "proxy.localstorage"
      ],
      "alternates": [
        "Ext.data.LocalStorageProxy"
      ]
    },
    "Ext.data.proxy.Memory": {
      "idx": 115,
      "alias": [
        "proxy.memory"
      ],
      "alternates": [
        "Ext.data.MemoryProxy"
      ]
    },
    "Ext.data.proxy.Proxy": {
      "idx": 113,
      "alias": [
        "proxy.proxy"
      ],
      "alternates": [
        "Ext.data.DataProxy",
        "Ext.data.Proxy"
      ]
    },
    "Ext.data.proxy.Rest": {
      "idx": 175,
      "alias": [
        "proxy.rest"
      ],
      "alternates": [
        "Ext.data.RestProxy"
      ]
    },
    "Ext.data.proxy.Server": {
      "idx": 135,
      "alias": [
        "proxy.server"
      ],
      "alternates": [
        "Ext.data.ServerProxy"
      ]
    },
    "Ext.data.proxy.SessionStorage": {
      "idx": 176,
      "alias": [
        "proxy.sessionstorage"
      ],
      "alternates": [
        "Ext.data.SessionStorageProxy"
      ]
    },
    "Ext.data.proxy.Sql": {
      "idx": 177,
      "alias": [
        "proxy.sql"
      ],
      "alternates": [
        "Ext.data.proxy.SQL"
      ]
    },
    "Ext.data.proxy.WebStorage": {
      "idx": 173,
      "alias": [],
      "alternates": [
        "Ext.data.WebStorageProxy"
      ]
    },
    "Ext.data.reader.Array": {
      "idx": 144,
      "alias": [
        "reader.array"
      ],
      "alternates": [
        "Ext.data.ArrayReader"
      ]
    },
    "Ext.data.reader.Json": {
      "idx": 137,
      "alias": [
        "reader.json"
      ],
      "alternates": [
        "Ext.data.JsonReader"
      ]
    },
    "Ext.data.reader.Reader": {
      "idx": 111,
      "alias": [
        "reader.base"
      ],
      "alternates": [
        "Ext.data.Reader",
        "Ext.data.DataReader"
      ]
    },
    "Ext.data.reader.Xml": {
      "idx": 168,
      "alias": [
        "reader.xml"
      ],
      "alternates": [
        "Ext.data.XmlReader"
      ]
    },
    "Ext.data.schema.Association": {
      "idx": 81,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToMany": {
      "idx": 84,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.ManyToOne": {
      "idx": 83,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Namer": {
      "idx": 86,
      "alias": [
        "namer.default"
      ],
      "alternates": []
    },
    "Ext.data.schema.OneToOne": {
      "idx": 82,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Role": {
      "idx": 80,
      "alias": [],
      "alternates": []
    },
    "Ext.data.schema.Schema": {
      "idx": 87,
      "alias": [
        "schema.default"
      ],
      "alternates": []
    },
    "Ext.data.session.AbstractStub": {
      "idx": 92,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.AssociatedEntitiesStub": {
      "idx": 178,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.AssociatedEntityStub": {
      "idx": 179,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.BaseBinding": {
      "idx": 90,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.Binding": {
      "idx": 91,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.EntityStub": {
      "idx": 93,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.Matrix": {
      "idx": 96,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.MatrixSide": {
      "idx": 95,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.MatrixSlice": {
      "idx": 94,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.MatrixStub": {
      "idx": 180,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.Session": {
      "idx": 98,
      "alias": [],
      "alternates": []
    },
    "Ext.data.session.ValidationStub": {
      "idx": 97,
      "alias": [],
      "alternates": []
    },
    "Ext.data.validator.Bound": {
      "idx": 181,
      "alias": [
        "data.validator.bound"
      ],
      "alternates": []
    },
    "Ext.data.validator.Email": {
      "idx": 183,
      "alias": [
        "data.validator.email"
      ],
      "alternates": []
    },
    "Ext.data.validator.Exclusion": {
      "idx": 185,
      "alias": [
        "data.validator.exclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Format": {
      "idx": 182,
      "alias": [
        "data.validator.format"
      ],
      "alternates": []
    },
    "Ext.data.validator.Inclusion": {
      "idx": 186,
      "alias": [
        "data.validator.inclusion"
      ],
      "alternates": []
    },
    "Ext.data.validator.Length": {
      "idx": 187,
      "alias": [
        "data.validator.length"
      ],
      "alternates": []
    },
    "Ext.data.validator.List": {
      "idx": 184,
      "alias": [
        "data.validator.list"
      ],
      "alternates": []
    },
    "Ext.data.validator.Presence": {
      "idx": 188,
      "alias": [
        "data.validator.presence"
      ],
      "alternates": []
    },
    "Ext.data.validator.Range": {
      "idx": 189,
      "alias": [
        "data.validator.range"
      ],
      "alternates": []
    },
    "Ext.data.validator.Validator": {
      "idx": 125,
      "alias": [
        "data.validator.base"
      ],
      "alternates": []
    },
    "Ext.data.writer.Json": {
      "idx": 138,
      "alias": [
        "writer.json"
      ],
      "alternates": [
        "Ext.data.JsonWriter"
      ]
    },
    "Ext.data.writer.Writer": {
      "idx": 112,
      "alias": [
        "writer.base"
      ],
      "alternates": [
        "Ext.data.DataWriter",
        "Ext.data.Writer"
      ]
    },
    "Ext.data.writer.Xml": {
      "idx": 169,
      "alias": [
        "writer.xml"
      ],
      "alternates": [
        "Ext.data.XmlWriter"
      ]
    },
    "Ext.dd.DD": {
      "idx": 334,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDProxy": {
      "idx": 335,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DDTarget": {
      "idx": 380,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDrop": {
      "idx": 333,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragDropManager": {
      "idx": 328,
      "alias": [],
      "alternates": [
        "Ext.dd.DragDropMgr",
        "Ext.dd.DDM"
      ]
    },
    "Ext.dd.DragSource": {
      "idx": 337,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragTracker": {
      "idx": 376,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DragZone": {
      "idx": 378,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropTarget": {
      "idx": 382,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.DropZone": {
      "idx": 384,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.Registry": {
      "idx": 383,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.ScrollManager": {
      "idx": 381,
      "alias": [],
      "alternates": []
    },
    "Ext.dd.StatusProxy": {
      "idx": 336,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.Event": {
      "idx": 190,
      "alias": [
        "direct.event"
      ],
      "alternates": []
    },
    "Ext.direct.ExceptionEvent": {
      "idx": 192,
      "alias": [
        "direct.exception"
      ],
      "alternates": []
    },
    "Ext.direct.JsonProvider": {
      "idx": 194,
      "alias": [
        "direct.jsonprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Manager": {
      "idx": 150,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.PollingProvider": {
      "idx": 195,
      "alias": [
        "direct.pollingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Provider": {
      "idx": 193,
      "alias": [
        "direct.provider"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingEvent": {
      "idx": 191,
      "alias": [
        "direct.rpc"
      ],
      "alternates": []
    },
    "Ext.direct.RemotingMethod": {
      "idx": 196,
      "alias": [],
      "alternates": []
    },
    "Ext.direct.RemotingProvider": {
      "idx": 198,
      "alias": [
        "direct.remotingprovider"
      ],
      "alternates": []
    },
    "Ext.direct.Transaction": {
      "idx": 197,
      "alias": [
        "direct.transaction"
      ],
      "alternates": [
        "Ext.Direct.Transaction"
      ]
    },
    "Ext.dom.CompositeElement": {
      "idx": 199,
      "alias": [],
      "alternates": [
        "Ext.CompositeElement"
      ]
    },
    "Ext.dom.CompositeElementLite": {
      "idx": 25,
      "alias": [],
      "alternates": [
        "Ext.CompositeElementLite",
        "Ext.CompositeElement"
      ]
    },
    "Ext.dom.Element": {
      "idx": 23,
      "alias": [],
      "alternates": [
        "Ext.Element"
      ]
    },
    "Ext.dom.Fly": {
      "idx": 24,
      "alias": [],
      "alternates": [
        "Ext.dom.Element.Fly"
      ]
    },
    "Ext.dom.GarbageCollector": {
      "idx": 54,
      "alias": [],
      "alternates": []
    },
    "Ext.dom.Helper": {
      "alias": [],
      "alternates": [
        "Ext.DomHelper",
        "Ext.core.DomHelper"
      ]
    },
    "Ext.dom.Layer": {
      "idx": 428,
      "alias": [],
      "alternates": [
        "Ext.Layer"
      ]
    },
    "Ext.dom.Query": {
      "idx": 167,
      "alias": [],
      "alternates": [
        "Ext.core.DomQuery",
        "Ext.DomQuery"
      ]
    },
    "Ext.event.Controller": {
      "idx": 18,
      "alias": [],
      "alternates": []
    },
    "Ext.event.Dispatcher": {
      "idx": 19,
      "alias": [],
      "alternates": []
    },
    "Ext.event.Event": {
      "idx": 16,
      "alias": [],
      "alternates": [
        "Ext.EventObjectImpl"
      ]
    },
    "Ext.event.ListenerStack": {
      "idx": 17,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.DoubleTap": {
      "idx": 8,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Drag": {
      "idx": 6,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.EdgeSwipe": {
      "idx": 9,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.LongPress": {
      "idx": 10,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.MultiTouch": {
      "idx": 2,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Pinch": {
      "idx": 7,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Recognizer": {
      "idx": 1,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Rotate": {
      "idx": 11,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.SingleTouch": {
      "idx": 3,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Swipe": {
      "idx": 5,
      "alias": [],
      "alternates": []
    },
    "Ext.event.gesture.Tap": {
      "idx": 4,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Dom": {
      "idx": 56,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementPaint": {
      "idx": 204,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.ElementSize": {
      "idx": 211,
      "alias": [],
      "alternates": []
    },
    "Ext.event.publisher.Gesture": {
      "idx": 58,
      "alias": [],
      "alternates": [
        "Ext.event.publisher.TouchGesture"
      ]
    },
    "Ext.event.publisher.Publisher": {
      "idx": 12,
      "alias": [],
      "alternates": []
    },
    "Ext.flash.Component": {
      "idx": 430,
      "alias": [
        "widget.flash"
      ],
      "alternates": [
        "Ext.FlashComponent"
      ]
    },
    "Ext.form.Basic": {
      "idx": 439,
      "alias": [],
      "alternates": [
        "Ext.form.BasicForm"
      ]
    },
    "Ext.form.CheckboxGroup": {
      "idx": 446,
      "alias": [
        "widget.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.form.CheckboxManager": {
      "idx": 444,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldAncestor": {
      "idx": 440,
      "alias": [],
      "alternates": []
    },
    "Ext.form.FieldContainer": {
      "idx": 442,
      "alias": [
        "widget.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.form.FieldSet": {
      "idx": 447,
      "alias": [
        "widget.fieldset"
      ],
      "alternates": []
    },
    "Ext.form.Label": {
      "idx": 448,
      "alias": [
        "widget.label"
      ],
      "alternates": []
    },
    "Ext.form.Labelable": {
      "idx": 352,
      "alias": [],
      "alternates": []
    },
    "Ext.form.Panel": {
      "idx": 449,
      "alias": [
        "widget.form"
      ],
      "alternates": [
        "Ext.FormPanel",
        "Ext.form.FormPanel"
      ]
    },
    "Ext.form.RadioGroup": {
      "idx": 452,
      "alias": [
        "widget.radiogroup"
      ],
      "alternates": []
    },
    "Ext.form.RadioManager": {
      "idx": 450,
      "alias": [],
      "alternates": []
    },
    "Ext.form.action.Action": {
      "idx": 431,
      "alias": [],
      "alternates": [
        "Ext.form.Action"
      ]
    },
    "Ext.form.action.DirectLoad": {
      "idx": 453,
      "alias": [
        "formaction.directload"
      ],
      "alternates": [
        "Ext.form.Action.DirectLoad"
      ]
    },
    "Ext.form.action.DirectSubmit": {
      "idx": 454,
      "alias": [
        "formaction.directsubmit"
      ],
      "alternates": [
        "Ext.form.Action.DirectSubmit"
      ]
    },
    "Ext.form.action.Load": {
      "idx": 432,
      "alias": [
        "formaction.load"
      ],
      "alternates": [
        "Ext.form.Action.Load"
      ]
    },
    "Ext.form.action.StandardSubmit": {
      "idx": 455,
      "alias": [
        "formaction.standardsubmit"
      ],
      "alternates": []
    },
    "Ext.form.action.Submit": {
      "idx": 433,
      "alias": [
        "formaction.submit"
      ],
      "alternates": [
        "Ext.form.Action.Submit"
      ]
    },
    "Ext.form.field.Base": {
      "idx": 354,
      "alias": [
        "widget.field"
      ],
      "alternates": [
        "Ext.form.Field",
        "Ext.form.BaseField"
      ]
    },
    "Ext.form.field.Checkbox": {
      "idx": 445,
      "alias": [
        "widget.checkboxfield",
        "widget.checkbox"
      ],
      "alternates": [
        "Ext.form.Checkbox"
      ]
    },
    "Ext.form.field.ComboBox": {
      "idx": 465,
      "alias": [
        "widget.combobox",
        "widget.combo"
      ],
      "alternates": [
        "Ext.form.ComboBox"
      ]
    },
    "Ext.form.field.Date": {
      "idx": 468,
      "alias": [
        "widget.datefield"
      ],
      "alternates": [
        "Ext.form.DateField",
        "Ext.form.Date"
      ]
    },
    "Ext.form.field.Display": {
      "idx": 355,
      "alias": [
        "widget.displayfield"
      ],
      "alternates": [
        "Ext.form.DisplayField",
        "Ext.form.Display"
      ]
    },
    "Ext.form.field.Field": {
      "idx": 353,
      "alias": [],
      "alternates": []
    },
    "Ext.form.field.File": {
      "idx": 471,
      "alias": [
        "widget.filefield",
        "widget.fileuploadfield"
      ],
      "alternates": [
        "Ext.form.FileUploadField",
        "Ext.ux.form.FileUploadField",
        "Ext.form.File"
      ]
    },
    "Ext.form.field.FileButton": {
      "idx": 469,
      "alias": [
        "widget.filebutton"
      ],
      "alternates": []
    },
    "Ext.form.field.Hidden": {
      "idx": 472,
      "alias": [
        "widget.hidden",
        "widget.hiddenfield"
      ],
      "alternates": [
        "Ext.form.Hidden"
      ]
    },
    "Ext.form.field.HtmlEditor": {
      "idx": 475,
      "alias": [
        "widget.htmleditor"
      ],
      "alternates": [
        "Ext.form.HtmlEditor"
      ]
    },
    "Ext.form.field.Number": {
      "idx": 461,
      "alias": [
        "widget.numberfield"
      ],
      "alternates": [
        "Ext.form.NumberField",
        "Ext.form.Number"
      ]
    },
    "Ext.form.field.Picker": {
      "idx": 456,
      "alias": [
        "widget.pickerfield"
      ],
      "alternates": [
        "Ext.form.Picker"
      ]
    },
    "Ext.form.field.Radio": {
      "idx": 451,
      "alias": [
        "widget.radio",
        "widget.radiofield"
      ],
      "alternates": [
        "Ext.form.Radio"
      ]
    },
    "Ext.form.field.Spinner": {
      "idx": 460,
      "alias": [
        "widget.spinnerfield"
      ],
      "alternates": [
        "Ext.form.Spinner"
      ]
    },
    "Ext.form.field.Tag": {
      "idx": 476,
      "alias": [
        "widget.tagfield"
      ],
      "alternates": []
    },
    "Ext.form.field.Text": {
      "idx": 436,
      "alias": [
        "widget.textfield"
      ],
      "alternates": [
        "Ext.form.TextField",
        "Ext.form.Text"
      ]
    },
    "Ext.form.field.TextArea": {
      "idx": 437,
      "alias": [
        "widget.textarea",
        "widget.textareafield"
      ],
      "alternates": [
        "Ext.form.TextArea"
      ]
    },
    "Ext.form.field.Time": {
      "idx": 478,
      "alias": [
        "widget.timefield"
      ],
      "alternates": [
        "Ext.form.TimeField",
        "Ext.form.Time"
      ]
    },
    "Ext.form.field.Trigger": {
      "idx": 479,
      "alias": [
        "widget.triggerfield",
        "widget.trigger"
      ],
      "alternates": [
        "Ext.form.TriggerField",
        "Ext.form.TwinTriggerField",
        "Ext.form.Trigger"
      ]
    },
    "Ext.form.field.VTypes": {
      "idx": 434,
      "alias": [],
      "alternates": [
        "Ext.form.VTypes"
      ]
    },
    "Ext.form.trigger.Component": {
      "idx": 470,
      "alias": [
        "trigger.component"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Spinner": {
      "idx": 459,
      "alias": [
        "trigger.spinner"
      ],
      "alternates": []
    },
    "Ext.form.trigger.Trigger": {
      "idx": 435,
      "alias": [
        "trigger.trigger"
      ],
      "alternates": []
    },
    "Ext.fx.Anim": {
      "idx": 52,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animation": {
      "idx": 221,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Animator": {
      "idx": 47,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.CubicBezier": {
      "idx": 48,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.DrawPath": {
      "idx": 50,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Easing": {
      "idx": 49,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Manager": {
      "idx": 46,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.PropertyHandler": {
      "idx": 51,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Queue": {
      "idx": 45,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.Runner": {
      "idx": 224,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.State": {
      "idx": 212,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Abstract": {
      "idx": 213,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.animation.Cube": {
      "idx": 225,
      "alias": [
        "animation.cube"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Fade": {
      "idx": 216,
      "alias": [
        "animation.fadeIn",
        "animation.fade"
      ],
      "alternates": [
        "Ext.fx.animation.FadeIn"
      ]
    },
    "Ext.fx.animation.FadeOut": {
      "idx": 217,
      "alias": [
        "animation.fadeOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Flip": {
      "idx": 218,
      "alias": [
        "animation.flip"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Pop": {
      "idx": 219,
      "alias": [
        "animation.popIn",
        "animation.pop"
      ],
      "alternates": [
        "Ext.fx.animation.PopIn"
      ]
    },
    "Ext.fx.animation.PopOut": {
      "idx": 220,
      "alias": [
        "animation.popOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Slide": {
      "idx": 214,
      "alias": [
        "animation.slideIn",
        "animation.slide"
      ],
      "alternates": [
        "Ext.fx.animation.SlideIn"
      ]
    },
    "Ext.fx.animation.SlideOut": {
      "idx": 215,
      "alias": [
        "animation.slideOut"
      ],
      "alternates": []
    },
    "Ext.fx.animation.Wipe": {
      "idx": 226,
      "alias": [],
      "alternates": [
        "Ext.fx.animation.WipeIn"
      ]
    },
    "Ext.fx.animation.WipeOut": {
      "idx": 227,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Abstract": {
      "idx": 228,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Bounce": {
      "idx": 229,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.BoundMomentum": {
      "idx": 231,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.EaseIn": {
      "idx": 233,
      "alias": [
        "easing.ease-in"
      ],
      "alternates": []
    },
    "Ext.fx.easing.EaseOut": {
      "idx": 234,
      "alias": [
        "easing.ease-out"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Easing": {
      "idx": 235,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.easing.Linear": {
      "idx": 232,
      "alias": [
        "easing.linear"
      ],
      "alternates": []
    },
    "Ext.fx.easing.Momentum": {
      "idx": 230,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.Card": {
      "idx": 245,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Abstract": {
      "idx": 236,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.layout.card.Cover": {
      "idx": 239,
      "alias": [
        "fx.layout.card.cover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Cube": {
      "idx": 246,
      "alias": [
        "fx.layout.card.cube"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Fade": {
      "idx": 241,
      "alias": [
        "fx.layout.card.fade"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Flip": {
      "idx": 242,
      "alias": [
        "fx.layout.card.flip"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Pop": {
      "idx": 243,
      "alias": [
        "fx.layout.card.pop"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Reveal": {
      "idx": 240,
      "alias": [
        "fx.layout.card.reveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Scroll": {
      "idx": 244,
      "alias": [
        "fx.layout.card.scroll"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollCover": {
      "idx": 247,
      "alias": [
        "fx.layout.card.scrollcover"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.ScrollReveal": {
      "idx": 248,
      "alias": [
        "fx.layout.card.scrollreveal"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Slide": {
      "idx": 238,
      "alias": [
        "fx.layout.card.slide"
      ],
      "alternates": []
    },
    "Ext.fx.layout.card.Style": {
      "idx": 237,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.Css": {
      "idx": 222,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssAnimation": {
      "idx": 249,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.runner.CssTransition": {
      "idx": 223,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Component": {
      "idx": 43,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElement": {
      "idx": 39,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeElementCSS": {
      "idx": 40,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.CompositeSprite": {
      "idx": 42,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Element": {
      "idx": 37,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.ElementCSS": {
      "idx": 38,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Sprite": {
      "idx": 41,
      "alias": [],
      "alternates": []
    },
    "Ext.fx.target.Target": {
      "idx": 36,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellContext": {
      "idx": 362,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.CellEditor": {
      "idx": 480,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.ColumnComponentLayout": {
      "idx": 388,
      "alias": [
        "layout.columncomponent"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnLayout": {
      "idx": 375,
      "alias": [
        "layout.gridcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.ColumnManager": {
      "idx": 481,
      "alias": [],
      "alternates": [
        "Ext.grid.ColumnModel"
      ]
    },
    "Ext.grid.Panel": {
      "idx": 369,
      "alias": [
        "widget.grid",
        "widget.gridpanel"
      ],
      "alternates": [
        "Ext.list.ListView",
        "Ext.ListView",
        "Ext.grid.GridPanel"
      ]
    },
    "Ext.grid.RowEditor": {
      "idx": 483,
      "alias": [
        "widget.roweditor"
      ],
      "alternates": []
    },
    "Ext.grid.RowEditorButtons": {
      "idx": 482,
      "alias": [
        "widget.roweditorbuttons"
      ],
      "alternates": []
    },
    "Ext.grid.Scroller": {
      "idx": 484,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.View": {
      "idx": 368,
      "alias": [
        "widget.gridview"
      ],
      "alternates": []
    },
    "Ext.grid.ViewDropZone": {
      "idx": 486,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.column.Action": {
      "idx": 487,
      "alias": [
        "widget.actioncolumn"
      ],
      "alternates": [
        "Ext.grid.ActionColumn"
      ]
    },
    "Ext.grid.column.Boolean": {
      "idx": 488,
      "alias": [
        "widget.booleancolumn"
      ],
      "alternates": [
        "Ext.grid.BooleanColumn"
      ]
    },
    "Ext.grid.column.Check": {
      "idx": 489,
      "alias": [
        "widget.checkcolumn"
      ],
      "alternates": [
        "Ext.ux.CheckColumn",
        "Ext.grid.column.CheckColumn"
      ]
    },
    "Ext.grid.column.Column": {
      "idx": 389,
      "alias": [
        "widget.gridcolumn"
      ],
      "alternates": [
        "Ext.grid.Column"
      ]
    },
    "Ext.grid.column.Date": {
      "idx": 490,
      "alias": [
        "widget.datecolumn"
      ],
      "alternates": [
        "Ext.grid.DateColumn"
      ]
    },
    "Ext.grid.column.Number": {
      "idx": 491,
      "alias": [
        "widget.numbercolumn"
      ],
      "alternates": [
        "Ext.grid.NumberColumn"
      ]
    },
    "Ext.grid.column.RowNumberer": {
      "idx": 492,
      "alias": [
        "widget.rownumberer"
      ],
      "alternates": [
        "Ext.grid.RowNumberer"
      ]
    },
    "Ext.grid.column.Template": {
      "idx": 493,
      "alias": [
        "widget.templatecolumn"
      ],
      "alternates": [
        "Ext.grid.TemplateColumn"
      ]
    },
    "Ext.grid.column.Widget": {
      "idx": 494,
      "alias": [
        "widget.widgetcolumn"
      ],
      "alternates": []
    },
    "Ext.grid.feature.AbstractSummary": {
      "idx": 496,
      "alias": [
        "feature.abstractsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Feature": {
      "idx": 495,
      "alias": [
        "feature.feature"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupStore": {
      "idx": 497,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.feature.Grouping": {
      "idx": 498,
      "alias": [
        "feature.grouping"
      ],
      "alternates": []
    },
    "Ext.grid.feature.GroupingSummary": {
      "idx": 499,
      "alias": [
        "feature.groupingsummary"
      ],
      "alternates": []
    },
    "Ext.grid.feature.RowBody": {
      "idx": 500,
      "alias": [
        "feature.rowbody"
      ],
      "alternates": []
    },
    "Ext.grid.feature.Summary": {
      "idx": 501,
      "alias": [
        "feature.summary"
      ],
      "alternates": []
    },
    "Ext.grid.header.Container": {
      "idx": 387,
      "alias": [
        "widget.headercontainer"
      ],
      "alternates": []
    },
    "Ext.grid.header.DragZone": {
      "idx": 379,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.header.DropZone": {
      "idx": 385,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.HeaderContainer": {
      "idx": 502,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.locking.Lockable": {
      "idx": 504,
      "alias": [],
      "alternates": [
        "Ext.grid.Lockable"
      ]
    },
    "Ext.grid.locking.View": {
      "idx": 503,
      "alias": [],
      "alternates": [
        "Ext.grid.LockingView"
      ]
    },
    "Ext.grid.plugin.BufferedRenderer": {
      "idx": 505,
      "alias": [
        "plugin.bufferedrenderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.BufferedRendererTableView": {
      "idx": 367,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.plugin.BufferedRendererTreeView": {
      "idx": 372,
      "alias": [],
      "alternates": []
    },
    "Ext.grid.plugin.CellEditing": {
      "idx": 507,
      "alias": [
        "plugin.cellediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.CellUpdating": {
      "idx": 508,
      "alias": [
        "plugin.cellupdating"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.DragDrop": {
      "idx": 509,
      "alias": [
        "plugin.gridviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.Editing": {
      "idx": 506,
      "alias": [
        "editing.editing"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderReorderer": {
      "idx": 386,
      "alias": [
        "plugin.gridheaderreorderer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.HeaderResizer": {
      "idx": 377,
      "alias": [
        "plugin.gridheaderresizer"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowEditing": {
      "idx": 510,
      "alias": [
        "plugin.rowediting"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.RowExpander": {
      "idx": 511,
      "alias": [
        "plugin.rowexpander"
      ],
      "alternates": []
    },
    "Ext.grid.plugin.SubTable": {
      "idx": 512,
      "alias": [
        "plugin.subtable"
      ],
      "alternates": []
    },
    "Ext.grid.property.Grid": {
      "idx": 513,
      "alias": [
        "widget.propertygrid"
      ],
      "alternates": [
        "Ext.grid.PropertyGrid"
      ]
    },
    "Ext.grid.property.HeaderContainer": {
      "idx": 514,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyColumnModel"
      ]
    },
    "Ext.grid.property.Property": {
      "idx": 515,
      "alias": [],
      "alternates": [
        "Ext.PropGridProperty"
      ]
    },
    "Ext.grid.property.Store": {
      "idx": 516,
      "alias": [],
      "alternates": [
        "Ext.grid.PropertyStore"
      ]
    },
    "Ext.layout.ClassList": {
      "idx": 517,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.Context": {
      "idx": 520,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.ContextItem": {
      "idx": 519,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.Layout": {
      "idx": 281,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.SizeModel": {
      "idx": 280,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Auto": {
      "idx": 296,
      "alias": [
        "layout.autocomponent"
      ],
      "alternates": []
    },
    "Ext.layout.component.Body": {
      "idx": 398,
      "alias": [
        "layout.body"
      ],
      "alternates": []
    },
    "Ext.layout.component.BoundList": {
      "idx": 457,
      "alias": [
        "layout.boundlist"
      ],
      "alternates": []
    },
    "Ext.layout.component.Button": {
      "idx": 323,
      "alias": [
        "layout.button"
      ],
      "alternates": []
    },
    "Ext.layout.component.Component": {
      "idx": 295,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.component.Dock": {
      "idx": 340,
      "alias": [
        "layout.dock"
      ],
      "alternates": [
        "Ext.layout.component.AbstractDock"
      ]
    },
    "Ext.layout.component.FieldSet": {
      "idx": 522,
      "alias": [
        "layout.fieldset"
      ],
      "alternates": []
    },
    "Ext.layout.component.ProgressBar": {
      "idx": 297,
      "alias": [
        "layout.progressbar"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.FieldContainer": {
      "idx": 441,
      "alias": [
        "layout.fieldcontainer"
      ],
      "alternates": []
    },
    "Ext.layout.component.field.HtmlEditor": {
      "idx": 474,
      "alias": [
        "layout.htmleditor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Absolute": {
      "idx": 523,
      "alias": [
        "layout.absolute"
      ],
      "alternates": [
        "Ext.layout.AbsoluteLayout"
      ]
    },
    "Ext.layout.container.Accordion": {
      "idx": 524,
      "alias": [
        "layout.accordion"
      ],
      "alternates": [
        "Ext.layout.AccordionLayout"
      ]
    },
    "Ext.layout.container.Anchor": {
      "idx": 417,
      "alias": [
        "layout.anchor"
      ],
      "alternates": [
        "Ext.layout.AnchorLayout"
      ]
    },
    "Ext.layout.container.Auto": {
      "idx": 283,
      "alias": [
        "layout.autocontainer",
        "layout.auto"
      ],
      "alternates": []
    },
    "Ext.layout.container.Border": {
      "idx": 395,
      "alias": [
        "layout.border"
      ],
      "alternates": [
        "Ext.layout.BorderLayout"
      ]
    },
    "Ext.layout.container.Box": {
      "idx": 329,
      "alias": [
        "layout.box"
      ],
      "alternates": [
        "Ext.layout.BoxLayout"
      ]
    },
    "Ext.layout.container.Card": {
      "idx": 396,
      "alias": [
        "layout.card"
      ],
      "alternates": [
        "Ext.layout.CardLayout"
      ]
    },
    "Ext.layout.container.Center": {
      "idx": 525,
      "alias": [
        "layout.center",
        "layout.ux.center"
      ],
      "alternates": [
        "Ext.ux.layout.Center"
      ]
    },
    "Ext.layout.container.CheckboxGroup": {
      "idx": 443,
      "alias": [
        "layout.checkboxgroup"
      ],
      "alternates": []
    },
    "Ext.layout.container.Column": {
      "idx": 420,
      "alias": [
        "layout.column"
      ],
      "alternates": [
        "Ext.layout.ColumnLayout"
      ]
    },
    "Ext.layout.container.ColumnSplitter": {
      "idx": 423,
      "alias": [
        "widget.columnsplitter"
      ],
      "alternates": []
    },
    "Ext.layout.container.ColumnSplitterTracker": {
      "idx": 422,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.Container": {
      "idx": 282,
      "alias": [
        "layout.container"
      ],
      "alternates": [
        "Ext.layout.ContainerLayout"
      ]
    },
    "Ext.layout.container.Editor": {
      "idx": 286,
      "alias": [
        "layout.editor"
      ],
      "alternates": []
    },
    "Ext.layout.container.Fit": {
      "idx": 356,
      "alias": [
        "layout.fit"
      ],
      "alternates": [
        "Ext.layout.FitLayout"
      ]
    },
    "Ext.layout.container.Form": {
      "idx": 526,
      "alias": [
        "layout.form"
      ],
      "alternates": [
        "Ext.layout.FormLayout"
      ]
    },
    "Ext.layout.container.HBox": {
      "idx": 330,
      "alias": [
        "layout.hbox"
      ],
      "alternates": [
        "Ext.layout.HBoxLayout"
      ]
    },
    "Ext.layout.container.SplitColumn": {
      "idx": 424,
      "alias": [
        "layout.split-column"
      ],
      "alternates": []
    },
    "Ext.layout.container.Table": {
      "idx": 413,
      "alias": [
        "layout.table"
      ],
      "alternates": [
        "Ext.layout.TableLayout"
      ]
    },
    "Ext.layout.container.VBox": {
      "idx": 331,
      "alias": [
        "layout.vbox"
      ],
      "alternates": [
        "Ext.layout.VBoxLayout"
      ]
    },
    "Ext.layout.container.border.Region": {
      "idx": 277,
      "alias": [],
      "alternates": []
    },
    "Ext.layout.container.boxOverflow.Menu": {
      "idx": 326,
      "alias": [],
      "alternates": [
        "Ext.layout.boxOverflow.Menu"
      ]
    },
    "Ext.layout.container.boxOverflow.None": {
      "idx": 317,
      "alias": [],
      "alternates": [
        "Ext.layout.boxOverflow.None"
      ]
    },
    "Ext.layout.container.boxOverflow.Scroller": {
      "idx": 327,
      "alias": [],
      "alternates": [
        "Ext.layout.boxOverflow.Scroller"
      ]
    },
    "Ext.menu.CheckItem": {
      "idx": 528,
      "alias": [
        "widget.menucheckitem"
      ],
      "alternates": []
    },
    "Ext.menu.ColorPicker": {
      "idx": 532,
      "alias": [
        "widget.colormenu"
      ],
      "alternates": []
    },
    "Ext.menu.DatePicker": {
      "idx": 533,
      "alias": [
        "widget.datemenu"
      ],
      "alternates": []
    },
    "Ext.menu.Item": {
      "idx": 527,
      "alias": [
        "widget.menuitem"
      ],
      "alternates": [
        "Ext.menu.TextItem"
      ]
    },
    "Ext.menu.KeyNav": {
      "idx": 529,
      "alias": [],
      "alternates": []
    },
    "Ext.menu.Manager": {
      "idx": 321,
      "alias": [],
      "alternates": [
        "Ext.menu.MenuMgr"
      ]
    },
    "Ext.menu.Menu": {
      "idx": 531,
      "alias": [
        "widget.menu"
      ],
      "alternates": []
    },
    "Ext.menu.Separator": {
      "idx": 530,
      "alias": [
        "widget.menuseparator"
      ],
      "alternates": []
    },
    "Ext.mixin.Bindable": {
      "idx": 250,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Factoryable": {
      "idx": 74,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Identifiable": {
      "idx": 0,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Inheritable": {
      "idx": 69,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Mashup": {
      "idx": 251,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Observable": {
      "idx": 21,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Queryable": {
      "idx": 162,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Selectable": {
      "idx": 252,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Templatable": {
      "idx": 205,
      "alias": [],
      "alternates": []
    },
    "Ext.mixin.Traversable": {
      "idx": 253,
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.GlobalEvents": {
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.Widget": {
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.app.Application": {
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.data.NodeInterface": {
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.dom.Element": {
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.dom.Helper": {
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.Event": {
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.publisher.Dom": {
      "alias": [],
      "alternates": []
    },
    "Ext.overrides.event.publisher.Gesture": {
      "alias": [],
      "alternates": []
    },
    "Ext.panel.DD": {
      "idx": 339,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Header": {
      "idx": 315,
      "alias": [
        "widget.header"
      ],
      "alternates": []
    },
    "Ext.panel.Panel": {
      "idx": 343,
      "alias": [
        "widget.panel"
      ],
      "alternates": [
        "Ext.Panel"
      ]
    },
    "Ext.panel.Pinnable": {
      "idx": 534,
      "alias": [],
      "alternates": []
    },
    "Ext.panel.Proxy": {
      "idx": 338,
      "alias": [],
      "alternates": [
        "Ext.dd.PanelProxy"
      ]
    },
    "Ext.panel.Table": {
      "idx": 357,
      "alias": [
        "widget.tablepanel"
      ],
      "alternates": []
    },
    "Ext.panel.Tool": {
      "idx": 314,
      "alias": [
        "widget.tool"
      ],
      "alternates": []
    },
    "Ext.perf.Accumulator": {
      "idx": 254,
      "alias": [],
      "alternates": []
    },
    "Ext.perf.Monitor": {
      "idx": 255,
      "alias": [],
      "alternates": [
        "Ext.Perf"
      ]
    },
    "Ext.picker.Color": {
      "idx": 473,
      "alias": [
        "widget.colorpicker"
      ],
      "alternates": [
        "Ext.ColorPalette"
      ]
    },
    "Ext.picker.Date": {
      "idx": 467,
      "alias": [
        "widget.datepicker"
      ],
      "alternates": [
        "Ext.DatePicker"
      ]
    },
    "Ext.picker.Month": {
      "idx": 466,
      "alias": [
        "widget.monthpicker"
      ],
      "alternates": [
        "Ext.MonthPicker"
      ]
    },
    "Ext.picker.Time": {
      "idx": 477,
      "alias": [
        "widget.timepicker"
      ],
      "alternates": []
    },
    "Ext.resizer.BorderSplitter": {
      "idx": 394,
      "alias": [
        "widget.bordersplitter"
      ],
      "alternates": []
    },
    "Ext.resizer.BorderSplitterTracker": {
      "idx": 535,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Handle": {
      "idx": 536,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.ResizeTracker": {
      "idx": 537,
      "alias": [],
      "alternates": []
    },
    "Ext.resizer.Resizer": {
      "idx": 538,
      "alias": [],
      "alternates": [
        "Ext.Resizable"
      ]
    },
    "Ext.resizer.Splitter": {
      "idx": 393,
      "alias": [
        "widget.splitter"
      ],
      "alternates": []
    },
    "Ext.resizer.SplitterTracker": {
      "idx": 421,
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.Component": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.button.Button": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.dd.DD": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.dom.Element": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.dom.Layer": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.event.Event": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.Labelable": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.Checkbox": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.File": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.FileButton": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.form.field.Spinner": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.CellEditor": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.ColumnLayout": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.RowEditor": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.column.Column": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.feature.Summary": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.plugin.HeaderResizer": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.grid.plugin.RowEditing": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.ContextItem": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.component.Dock": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Absolute": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Border": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Box": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.Column": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.HBox": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.VBox": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.boxOverflow.Menu": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.layout.container.boxOverflow.Scroller": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Header": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.panel.Panel": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.BorderSplitterTracker": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.ResizeTracker": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.resizer.SplitterTracker": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.Manager": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.scroll.Scroller": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.selection.CellModel": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.selection.TreeModel": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.slider.Multi": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tab.Bar": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tip.QuickTipManager": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.tree.Column": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.util.Floating": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.util.Renderable": {
      "alias": [],
      "alternates": []
    },
    "Ext.rtl.view.Table": {
      "alias": [],
      "alternates": []
    },
    "Ext.scroll.Indicator": {
      "idx": 539,
      "alias": [],
      "alternates": []
    },
    "Ext.scroll.Manager": {
      "idx": 540,
      "alias": [],
      "alternates": []
    },
    "Ext.scroll.Scroller": {
      "idx": 263,
      "alias": [],
      "alternates": []
    },
    "Ext.selection.CellModel": {
      "idx": 541,
      "alias": [
        "selection.cellmodel"
      ],
      "alternates": []
    },
    "Ext.selection.CheckboxModel": {
      "idx": 545,
      "alias": [
        "selection.checkboxmodel"
      ],
      "alternates": []
    },
    "Ext.selection.DataViewModel": {
      "idx": 359,
      "alias": [],
      "alternates": []
    },
    "Ext.selection.Model": {
      "idx": 358,
      "alias": [],
      "alternates": [
        "Ext.AbstractSelectionModel"
      ]
    },
    "Ext.selection.RowModel": {
      "idx": 373,
      "alias": [
        "selection.rowmodel"
      ],
      "alternates": []
    },
    "Ext.selection.TreeModel": {
      "idx": 374,
      "alias": [
        "selection.treemodel"
      ],
      "alternates": []
    },
    "Ext.slider.Multi": {
      "idx": 544,
      "alias": [
        "widget.multislider"
      ],
      "alternates": [
        "Ext.slider.MultiSlider"
      ]
    },
    "Ext.slider.Single": {
      "idx": 546,
      "alias": [
        "widget.sliderfield",
        "widget.slider"
      ],
      "alternates": [
        "Ext.Slider",
        "Ext.form.SliderField",
        "Ext.slider.SingleSlider",
        "Ext.slider.Slider"
      ]
    },
    "Ext.slider.Thumb": {
      "idx": 542,
      "alias": [],
      "alternates": []
    },
    "Ext.slider.Tip": {
      "idx": 543,
      "alias": [
        "widget.slidertip"
      ],
      "alternates": []
    },
    "Ext.slider.Widget": {
      "idx": 547,
      "alias": [
        "widget.sliderwidget"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bar": {
      "idx": 555,
      "alias": [
        "widget.sparklinebar"
      ],
      "alternates": []
    },
    "Ext.sparkline.BarBase": {
      "idx": 553,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Base": {
      "idx": 552,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Box": {
      "idx": 556,
      "alias": [
        "widget.sparklinebox"
      ],
      "alternates": []
    },
    "Ext.sparkline.Bullet": {
      "idx": 557,
      "alias": [
        "widget.sparklinebullet"
      ],
      "alternates": []
    },
    "Ext.sparkline.CanvasBase": {
      "idx": 549,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.CanvasCanvas": {
      "idx": 550,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Discrete": {
      "idx": 558,
      "alias": [
        "widget.sparklinediscrete"
      ],
      "alternates": []
    },
    "Ext.sparkline.Line": {
      "idx": 559,
      "alias": [
        "widget.sparklineline"
      ],
      "alternates": []
    },
    "Ext.sparkline.Pie": {
      "idx": 560,
      "alias": [
        "widget.sparklinepie"
      ],
      "alternates": []
    },
    "Ext.sparkline.RangeMap": {
      "idx": 554,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.Shape": {
      "idx": 548,
      "alias": [],
      "alternates": []
    },
    "Ext.sparkline.TriState": {
      "idx": 561,
      "alias": [
        "widget.sparklinetristate"
      ],
      "alternates": []
    },
    "Ext.sparkline.VmlCanvas": {
      "idx": 551,
      "alias": [],
      "alternates": []
    },
    "Ext.state.CookieProvider": {
      "idx": 562,
      "alias": [],
      "alternates": []
    },
    "Ext.state.LocalStorageProvider": {
      "idx": 563,
      "alias": [
        "state.localstorage"
      ],
      "alternates": []
    },
    "Ext.state.Manager": {
      "idx": 273,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Provider": {
      "idx": 272,
      "alias": [],
      "alternates": []
    },
    "Ext.state.Stateful": {
      "idx": 274,
      "alias": [],
      "alternates": []
    },
    "Ext.tab.Bar": {
      "idx": 399,
      "alias": [
        "widget.tabbar"
      ],
      "alternates": []
    },
    "Ext.tab.Panel": {
      "idx": 400,
      "alias": [
        "widget.tabpanel"
      ],
      "alternates": [
        "Ext.TabPanel"
      ]
    },
    "Ext.tab.Tab": {
      "idx": 397,
      "alias": [
        "widget.tab"
      ],
      "alternates": []
    },
    "Ext.tip.QuickTip": {
      "idx": 346,
      "alias": [
        "widget.quicktip"
      ],
      "alternates": [
        "Ext.QuickTip"
      ]
    },
    "Ext.tip.QuickTipManager": {
      "idx": 347,
      "alias": [],
      "alternates": [
        "Ext.QuickTips"
      ]
    },
    "Ext.tip.Tip": {
      "idx": 344,
      "alias": [],
      "alternates": [
        "Ext.Tip"
      ]
    },
    "Ext.tip.ToolTip": {
      "idx": 345,
      "alias": [
        "widget.tooltip"
      ],
      "alternates": [
        "Ext.ToolTip"
      ]
    },
    "Ext.toolbar.Fill": {
      "idx": 316,
      "alias": [
        "widget.tbfill"
      ],
      "alternates": [
        "Ext.Toolbar.Fill"
      ]
    },
    "Ext.toolbar.Item": {
      "idx": 318,
      "alias": [
        "widget.tbitem"
      ],
      "alternates": [
        "Ext.Toolbar.Item"
      ]
    },
    "Ext.toolbar.Paging": {
      "idx": 462,
      "alias": [
        "widget.pagingtoolbar"
      ],
      "alternates": [
        "Ext.PagingToolbar"
      ]
    },
    "Ext.toolbar.Separator": {
      "idx": 319,
      "alias": [
        "widget.tbseparator"
      ],
      "alternates": [
        "Ext.Toolbar.Separator"
      ]
    },
    "Ext.toolbar.Spacer": {
      "idx": 564,
      "alias": [
        "widget.tbspacer"
      ],
      "alternates": [
        "Ext.Toolbar.Spacer"
      ]
    },
    "Ext.toolbar.TextItem": {
      "idx": 458,
      "alias": [
        "widget.tbtext"
      ],
      "alternates": [
        "Ext.Toolbar.TextItem"
      ]
    },
    "Ext.toolbar.Toolbar": {
      "idx": 332,
      "alias": [
        "widget.toolbar"
      ],
      "alternates": [
        "Ext.Toolbar"
      ]
    },
    "Ext.tree.Column": {
      "idx": 390,
      "alias": [
        "widget.treecolumn"
      ],
      "alternates": []
    },
    "Ext.tree.Panel": {
      "idx": 391,
      "alias": [
        "widget.treepanel"
      ],
      "alternates": [
        "Ext.tree.TreePanel",
        "Ext.TreePanel"
      ]
    },
    "Ext.tree.View": {
      "idx": 371,
      "alias": [
        "widget.treeview"
      ],
      "alternates": []
    },
    "Ext.tree.ViewDragZone": {
      "idx": 566,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.ViewDropZone": {
      "idx": 567,
      "alias": [],
      "alternates": []
    },
    "Ext.tree.plugin.TreeViewDragDrop": {
      "idx": 568,
      "alias": [
        "plugin.treeviewdragdrop"
      ],
      "alternates": []
    },
    "Ext.util.AbstractMixedCollection": {
      "idx": 31,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Animate": {
      "idx": 53,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Bindable": {
      "idx": 293,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CSS": {
      "idx": 363,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ClickRepeater": {
      "idx": 322,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Collection": {
      "idx": 77,
      "alias": [],
      "alternates": []
    },
    "Ext.util.CollectionKey": {
      "idx": 75,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ComponentDragger": {
      "idx": 406,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Cookies": {
      "idx": 569,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ElementContainer": {
      "idx": 270,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Event": {
      "idx": 29,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Filter": {
      "idx": 27,
      "alias": [],
      "alternates": []
    },
    "Ext.util.FilterCollection": {
      "idx": 141,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Floating": {
      "idx": 275,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Format": {
      "alias": [],
      "alternates": []
    },
    "Ext.util.Group": {
      "idx": 139,
      "alias": [],
      "alternates": []
    },
    "Ext.util.GroupCollection": {
      "idx": 142,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Grouper": {
      "idx": 76,
      "alias": [],
      "alternates": []
    },
    "Ext.util.HashMap": {
      "idx": 44,
      "alias": [],
      "alternates": []
    },
    "Ext.util.History": {
      "idx": 311,
      "alias": [],
      "alternates": [
        "Ext.History"
      ]
    },
    "Ext.util.Inflector": {
      "idx": 85,
      "alias": [],
      "alternates": []
    },
    "Ext.util.KeyMap": {
      "idx": 289,
      "alias": [],
      "alternates": [
        "Ext.KeyMap"
      ]
    },
    "Ext.util.KeyNav": {
      "idx": 290,
      "alias": [],
      "alternates": [
        "Ext.KeyNav"
      ]
    },
    "Ext.util.LocalStorage": {
      "idx": 264,
      "alias": [],
      "alternates": []
    },
    "Ext.util.LruCache": {
      "idx": 147,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Memento": {
      "idx": 341,
      "alias": [],
      "alternates": []
    },
    "Ext.util.MixedCollection": {
      "idx": 34,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ObjectTemplate": {
      "idx": 79,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Observable": {
      "idx": 30,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Offset": {
      "idx": 13,
      "alias": [],
      "alternates": []
    },
    "Ext.util.PaintMonitor": {
      "idx": 203,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Point": {
      "idx": 15,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Positionable": {
      "idx": 22,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Positionable_ext": {
      "idx": 26,
      "alias": [],
      "alternates": []
    },
    "Ext.util.ProtoElement": {
      "idx": 268,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Queue": {
      "idx": 518,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Region": {
      "idx": 14,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Renderable": {
      "idx": 271,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Schedulable": {
      "idx": 89,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Scheduler": {
      "idx": 78,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SizeMonitor": {
      "idx": 210,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sortable": {
      "idx": 33,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Sorter": {
      "idx": 32,
      "alias": [],
      "alternates": []
    },
    "Ext.util.SorterCollection": {
      "idx": 140,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TaskManager": {
      "idx": 265,
      "alias": [],
      "alternates": [
        "Ext.TaskManager"
      ]
    },
    "Ext.util.TaskRunner": {
      "idx": 35,
      "alias": [],
      "alternates": []
    },
    "Ext.util.TextMetrics": {
      "idx": 324,
      "alias": [],
      "alternates": []
    },
    "Ext.util.Translatable": {
      "idx": 262,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateCompiler": {
      "idx": 72,
      "alias": [],
      "alternates": []
    },
    "Ext.util.XTemplateParser": {
      "idx": 71,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.Abstract": {
      "idx": 200,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.CssAnimation": {
      "idx": 201,
      "alias": [],
      "alternates": []
    },
    "Ext.util.paintmonitor.OverflowChange": {
      "idx": 202,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Abstract": {
      "idx": 206,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Default": {
      "idx": 207,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.OverflowChange": {
      "idx": 209,
      "alias": [],
      "alternates": []
    },
    "Ext.util.sizemonitor.Scroll": {
      "idx": 208,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Abstract": {
      "idx": 256,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssPosition": {
      "idx": 261,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.CssTransform": {
      "idx": 258,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.Dom": {
      "idx": 257,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollParent": {
      "idx": 260,
      "alias": [],
      "alternates": []
    },
    "Ext.util.translatable.ScrollPosition": {
      "idx": 259,
      "alias": [],
      "alternates": []
    },
    "Ext.view.AbstractView": {
      "idx": 360,
      "alias": [],
      "alternates": []
    },
    "Ext.view.BoundList": {
      "idx": 463,
      "alias": [
        "widget.boundlist"
      ],
      "alternates": [
        "Ext.BoundList"
      ]
    },
    "Ext.view.BoundListKeyNav": {
      "idx": 464,
      "alias": [],
      "alternates": []
    },
    "Ext.view.DragZone": {
      "idx": 565,
      "alias": [],
      "alternates": []
    },
    "Ext.view.DropZone": {
      "idx": 485,
      "alias": [],
      "alternates": []
    },
    "Ext.view.MultiSelector": {
      "idx": 571,
      "alias": [
        "widget.multiselector"
      ],
      "alternates": []
    },
    "Ext.view.MultiSelectorSearch": {
      "idx": 570,
      "alias": [
        "widget.multiselector-search"
      ],
      "alternates": []
    },
    "Ext.view.NodeCache": {
      "idx": 365,
      "alias": [],
      "alternates": []
    },
    "Ext.view.Table": {
      "idx": 366,
      "alias": [
        "widget.tableview"
      ],
      "alternates": []
    },
    "Ext.view.TableLayout": {
      "idx": 364,
      "alias": [
        "layout.tableview"
      ],
      "alternates": []
    },
    "Ext.view.View": {
      "idx": 361,
      "alias": [
        "widget.dataview"
      ],
      "alternates": [
        "Ext.DataView"
      ]
    },
    "Ext.window.MessageBox": {
      "idx": 438,
      "alias": [
        "widget.messagebox"
      ],
      "alternates": []
    },
    "Ext.window.Toast": {
      "idx": 572,
      "alias": [
        "widget.toast"
      ],
      "alternates": []
    },
    "Ext.window.Window": {
      "idx": 407,
      "alias": [
        "widget.window"
      ],
      "alternates": [
        "Ext.Window"
      ]
    }
  },
  "packages": {
    "ext": {
      "creator": "Sencha",
      "requires": [
        "sencha-core",
        "ext",
        "ext",
        "ext",
        "ext",
        "ext",
        "ext"
      ],
      "type": "framework",
      "version": "5.0.0.736"
    },
    "sencha-core": {
      "creator": "Sencha",
      "requires": [],
      "type": "code",
      "version": "5.0.0"
    }
  },
  "bootRelative": true
});










var Ext = Ext || window['Ext'] || {};



Ext.Boot = Ext.Boot || (function (emptyFn) {

    var doc = document,
        _config = {
            
            disableCaching:
                (/[?&](?:cache|disableCacheBuster)\b/i.test(location.search) ||
                    /(^|[ ;])ext-cache=1/.test(doc.cookie)) ? false :
                    true,

            
            disableCachingParam: '_dc',

            
            loadDelay: false,

            
            preserveScripts: true,

            
            charset: undefined
        },

    
        _currentRequest,

    
        _suspendedQueue = [],

    
    
        _items = {
            
        },
        cssRe = /\.css(?:\?|$)/i,
        pathTailRe = /\/[^\/]*$/,
        resolverEl = doc.createElement('a'),
        isBrowser = typeof window !== 'undefined',
        _environment = {
            browser: isBrowser,
            node: !isBrowser && (typeof require === 'function'),
            phantom: (typeof phantom !== 'undefined' && phantom.fs)
        },
        _listeners = [],

    
        _entries = 0,

    
    
        _syncMode = 0;

    var Boot = {
        loading: 0,

        loaded: 0,

        env: _environment,

        
        config: _config,

        
        scripts: _items,

        
        currentFile: null,

        
        canonicalUrl: function (url) {
            
            
            resolverEl.href = url;

            var ret = resolverEl.href,
                dc = _config.disableCachingParam,
                pos = dc ? ret.indexOf(dc + '=') : -1,
                c, end;

            
            
            if (pos > 0 && ((c = ret.charAt(pos - 1)) === '?' || c === '&')) {
                end = ret.indexOf('&', pos);
                end = (end < 0) ? '' : ret.substring(end);
                if (end && c === '?') {
                    ++pos; 
                    end = end.substring(1); 
                }
                ret = ret.substring(0, pos - 1) + end;
            }

            return ret;
        },

        init: function () {
            var scriptEls = doc.getElementsByTagName('script'),
                len = scriptEls.length,
                re = /\/ext(\-[a-z\-]+)?\.js$/,
                entry, script, src, state, baseUrl, key, n;

            
            
            
            for(n = 0; n < len; n++) {
                src = (script = scriptEls[n]).src;
                if (!src) {
                    continue;
                }
                state = script.readyState || null;

                
                if (!baseUrl) {
                    if (re.test(src)) {
                        Boot.hasAsync = ("async" in script) || !('readyState' in script);
                        baseUrl = src;
                    }
                }

                if (!_items[key = Boot.canonicalUrl(src)]) {
                    _items[key] = entry = {
                        key: key,
                        url: src,
                        done: state === null ||  
                            state === 'loaded' || state === 'complete', 
                        el: script,
                        prop: 'src'
                    };

                    if (!entry.done) { 
                        Boot.watch(entry);
                    }
                }
            }
            if (!baseUrl) {
                script = scriptEls[scriptEls.length - 1];
                baseUrl = script.src;
                Boot.hasAsync = ("async" in script) || !('readyState' in script);
            }
            Boot.baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
        },

        create: function (url, key) {
            var css = url && cssRe.test(url),
                el = doc.createElement(css ? 'link' : 'script'),
                prop;

            if (css) {
                el.rel = 'stylesheet';
                prop = 'href';
            } else {
                el.type = 'text/javascript';
                if (!url) {
                    return el;
                }
                prop = 'src';

                if(Boot.hasAsync) {
                    el.async = false;
                }
            }

            key = key || url;
            return _items[key] = {
                key: key,
                url: url,
                css: css,
                done: false,
                el: el,
                prop: prop,
                loaded: false,
                evaluated: false
            };
        },

        
        getConfig: function(name) {
            return name ? _config[name] : _config;
        },

        
        setConfig: function (name, value) {
            if (typeof name === 'string') {
                _config[name] = value;
            } else {
                for (var s in name) {
                    Boot.setConfig(s, name[s]);
                }
            }

            return Boot;
        },

        getHead: function () {
            return Boot.docHead ||
                (Boot.docHead = doc.head ||
                    doc.getElementsByTagName('head')[0]);
        },

        inject: function (content, url, asset) {
            var head = Boot.getHead(),
                base, el, css = false, key = Boot.canonicalUrl(url),
                entry;

            if (cssRe.test(url)) {
                css = true;
                el = doc.createElement('style');
                el.type = 'text/css';
                el.textContent = content;

                if (asset) {
                    if ('id' in asset) {
                        el.id = asset.id;
                    }

                    if ('disabled' in asset) {
                        el.disabled = asset.disabled;
                    }
                }

                base = doc.createElement('base');
                base.href = key.replace(pathTailRe, '/');
                head.appendChild(base);
                head.appendChild(el);
                head.removeChild(base);
            } else {
                
                
                
                if (url) {
                    content += "\n//@ sourceURL=" + key;
                }
                Ext.globalEval(content);
            }

            entry = _items[key] || (_items[key] = {
                key: key,
                css: css,
                url: url,
                el: el
            });
            entry.done = true;
            return entry;
        },

        
        load: function (request) {
            if (request.sync || _syncMode) {
                return this.loadSync(request);
            }

            
            if (!request.url) {
                request = {
                    url: request
                };
            }

            
            
            if (_currentRequest) {
                _suspendedQueue.push(request);
            } else {
                Boot.expandLoadOrder(request);

                var url = request.url,
                    urls = url.charAt ? [ url ] : url,
                    length = urls.length,
                    i;

                
                
                request.urls = urls;
                request.loaded = 0;
                request.loading = length;
                request.charset = request.charset || _config.charset;
                request.buster = (('cache' in request) ? !request.cache : _config.disableCaching) &&
                    (_config.disableCachingParam + '=' + (+new Date()));

                _currentRequest = request;
                request.sequential = false;

                for (i = 0; i < length; ++i) {
                    Boot.loadUrl(urls[i], request);
                }
            }

            return this;
        },

        loadUrl: function(url, request) {
            var entry,
                buster = request.buster,
                charset = request.charset,
                head = Boot.getHead(),
                el, key;

            if (request.prependBaseUrl) {
                url = Boot.baseUrl + url;
            }

            if (request.sequential) {
                Boot.currentFile = url;
            } else {
                Boot.currentFile = null;
            }

            key = Boot.canonicalUrl(url);
            if (!(entry = _items[key])) {
                
                _entries++;

                
                
                entry = Boot.create(url, key);
                el = entry.el;
                if (!entry.css && charset) {
                    el.charset = charset;
                }
                entry.requests = [request];

                Boot.watch(entry);

                if (buster) {
                    
                    url += (url.indexOf('?') === -1 ? '?' : '&') + buster;
                }

                if(!Boot.hasAsync && !entry.css) {
                    entry.loaded = false;
                    entry.evaluated = false;

                    var onLoadWas,
                        newOnLoad = function() {
                            entry.loaded = true;
                            var rurls = request.urls,
                                rlen = rurls.length, r, e, k;
                            for(r = 0; r < rlen; r++) {
                                k = Boot.canonicalUrl(rurls[r]);
                                e = _items[k];
                                if(e) {
                                    if(!e.loaded) {
                                        return;
                                    } else if(!e.evaluated) {
                                        head.appendChild(e.el);
                                        e.evaluated = true;
                                        e.onLoadWas.apply(e.el, arguments);
                                    }
                                }
                            }
                        };
                    
                    if (!('readyState' in el)) {
                        onLoadWas = el.onload;
                        el.onload = newOnLoad;
                    } else {
                        
                        onLoadWas = el.onreadystatechange;
                        el.onreadystatechange = function() {
                            if (this.readyState === 'loaded' || this.readyState === 'complete') {
                                newOnLoad.apply(this, arguments);
                            }
                        };
                    }

                    entry.onLoadWas = onLoadWas;
                    el[entry.prop] = url; 
                } else {
                    el[entry.prop] = url; 
                    head.appendChild(el); 
                }
            }
            else if (entry.done) {
                Boot.notify(entry, request);
            }
            
            
            
            
            
            else if (entry.requests) {
                entry.requests.push(request);
            }
            else {
                entry.requests = [ request ];
            }
        },

        loadSequential: function(request) {
            if(!request.url) {
                request = {
                    url: request
                }
            }
            request.sequential = true;
            Boot.load(request);
        },

        loadSequentialBasePrefix: function(request) {
            if(!request.url) {
                request = {
                    url: request
                };
            }
            request.prependBaseUrl = true;
            Boot.loadSequential(request);
        },

        fetchSync: function(url) {
            var exception, xhr, status, content;

            exception = false;
            xhr = new XMLHttpRequest();

            try {
                xhr.open('GET', url, false);
                xhr.send(null);
            } catch (e) {
                exception = true;
            }

            status = (xhr.status === 1223) ? 204 :
                (xhr.status === 0 && ((self.location || {}).protocol === 'file:' ||
                    (self.location || {}).protocol === 'ionp:')) ? 200 : xhr.status;
            content = xhr.responseText;

            xhr = null; 

            return {
                content: content,
                exception: exception,
                status: status
            };


        },

        
        loadSync: function (request) {
            _syncMode++;
            var request = Boot.expandLoadOrder(request.url ? request : {url: request}),
                url = request.url,
                urls = url.charAt ? [ url ] : url,
                length = urls.length,
                buster = _config.disableCaching &&
                    ('?' + _config.disableCachingParam + '=' + (+new Date())),
                content, entry, i, key, status, exception;

            
            
            request.loading = length;
            request.urls = urls;
            request.loaded = 0;

            
            
            _entries++;

            for (i = 0; i < length; ++i) {
                url = urls[i];
                if (request.prependBaseUrl) {
                    url = Boot.baseUrl + url;
                }
                Boot.currentFile = url;

                key = Boot.canonicalUrl(url);
                if (!(entry = _items[key])) {
                    
                    _entries++;

                    _items[key] = entry = {
                        key: key,
                        url: url,
                        done: false,
                        requests: [request],
                        el: null
                    };
                } else {
                    
                    
                    if (entry.done) {
                        Boot.notify(entry, request);
                        continue;
                    }
                    if (entry.el) {
                        entry.preserve = false;
                        Boot.cleanup(entry);
                    }

                    if (entry.requests) {
                        entry.requests.push(request);
                    } else {
                        entry.requests = [request];
                    }
                }

                entry.sync = true;

                if (buster) {
                    url += buster;
                }

                ++Boot.loading;


                content = Boot.fetchSync(url);
                entry.done = true;

                exception = content.exception;
                status = content.status;
                content = content.content || '';

                if ((exception || status === 0) && !_environment.phantom) {
                    entry.error =
                        ("Failed loading synchronously via XHR: '" + url +
                            "'. It's likely that the file is either being loaded from a " +
                            "different domain or from the local file system where cross " +
                            "origin requests are not allowed for security reasons. Try " +
                            "asynchronous loading instead.") ||
                            true;
                }
                else if ((status >= 200 && status < 300) || status === 304
                    || _environment.phantom
                    || (status === 0 && content.length > 0)
                    ) {
                    Boot.inject(content, url);
                }
                else {
                    entry.error =
                        ("Failed loading synchronously via XHR: '" + url +
                            "'. Please verify that the file exists. XHR status code: " +
                            status) ||
                            true;
                }

                Boot.notifyAll(entry);
            }
            _syncMode--;

            
            _entries--;
            Boot.fireListeners();
            Boot.currentFile = null;
            return this;
        },

        loadSyncBasePrefix: function(request) {
            if(!request.url) {
                request = {
                    url: request
                };
            }
            request.prependBaseUrl = true;
            Boot.loadSync(request);
        },

        notify: function (entry, request) {
            if (request.preserve) {
                
                entry.preserve = true;
            }

            ++request.loaded;

            if (!request.loading) {
                throw new Error('Unexpected script load notification ' + entry.url);
            }

            if (entry.error) {
                (request.errors || (request.errors = [])).push(entry);
            }

            if (! --request.loading) {
                
                _currentRequest = null;

                var errors = request.errors,
                    fn = request[errors ? 'failure' : 'success'],
                    delay = ('delay' in request) ? request.delay :
                        (errors ? 1 : _config.chainDelay),
                    scope = request.scope || request;

                
                
                if (_suspendedQueue.length) {
                    Boot.load(_suspendedQueue.shift());
                }

                if (fn) {
                    if (delay === 0 || delay > 0) {
                        
                        setTimeout(function() {
                            fn.call(scope, request);
                        }, delay);
                    } else {
                        fn.call(scope, request);
                    }
                }

            } else if (!_syncMode && request.sequential && (request.loaded < request.urls.length)) {
                Boot.loadUrl(request.urls[request.loaded], request);
            }
        },

        notifyAll: function (entry) {
            var requests = entry.requests,
                length = requests && requests.length,
                i;

            entry.done = true;
            entry.requests = null;
            --Boot.loading;
            ++Boot.loaded;

            for (i = 0; i < length; ++i) {
                Boot.notify(entry, requests[i]);
            }

            if (!length) {
                entry.preserve = true;
            }

            Boot.cleanup(entry);
            _entries--;
            Boot.fireListeners();
        },

        watch: function (entry) {
            var el = entry.el,
                requests = entry.requests,
                listener = requests && requests[0],
                onLoadFn = function () {
                    if (!entry.done) {
                        Boot.notifyAll(entry);
                    }
                };

            el.onerror = function () {
                entry.error = true;
                Boot.notifyAll(entry);
            };

            entry.preserve = (listener && ('preserve' in listener))
                ? listener.preserve : _config.preserveScripts;

            
            if (!('readyState' in el)) {
                el.onload = onLoadFn;
            } else {
                
                el.onreadystatechange = function() {
                    if (this.readyState === 'loaded' || this.readyState === 'complete') {
                        onLoadFn();
                    }
                };
            }

            ++Boot.loading;
        },

        
        cleanup: function (entry) {
            var el = entry.el,
                prop;

            if(!el) {
                return;
            }

            if (!entry.preserve) {
                entry.el = null;

                el.parentNode.removeChild(el); 

                for (prop in el) {
                    try {
                        if (prop !== entry.prop) {
                            
                            
                            el[prop] = null;
                        }
                        delete el[prop];      
                    } catch (cleanEx) {
                        
                    }
                }
            }

            
            
            
            el.onload = el.onerror = el.onreadystatechange = emptyFn;
        },

        fireListeners: function() {
            var listener;
            while(!_entries && (listener = _listeners.shift())) {
                listener();
            }
        },

        onBootReady: function(listener) {
            if (!_entries) {
                listener();
            } else {
                _listeners.push(listener);
            }
        },

        
        createLoadOrderMap: function(loadOrder) {
            var len = loadOrder.length,
                loadOrderMap = {},
                i, element;

            for(i = 0; i < len; i++) {
                element = loadOrder[i];
                loadOrderMap[element.path] = element;
            }

            return loadOrderMap;
        },

        
        getLoadIndexes: function(index, indexMap, loadOrder, includeUses, skipLoaded) {
            var item = loadOrder[index],
                len, i, reqs, key, entry, stop, added, idx, ridx;

            if(indexMap[index]) {
                
                return indexMap;
            }

            indexMap[index] = true;

            stop = false;
            while(!stop) {
                added = false;

                
                
                for(idx in indexMap) {
                    if(indexMap.hasOwnProperty(idx)) {
                        item = loadOrder[idx];
                        if(!item) {
                            continue;
                        }
                        key = Boot.canonicalUrl(item.path);
                        entry = _items[key];
                        if(!skipLoaded || !entry || !entry.done) {
                            reqs = item.requires;
                            if(includeUses && item.uses) {
                                reqs = reqs.concat(item.uses);
                            }
                            for(len = reqs.length, i = 0; i < len; i++) {
                                ridx = reqs[i];
                                
                                
                                
                                
                                if(!indexMap[ridx]) {
                                    indexMap[ridx] = true;
                                    added = true;
                                }
                            }
                        }
                    }
                }

                
                
                if(!added) {
                    stop = true;
                }
            }

            return indexMap;
        },

        getPathsFromIndexes: function(indexMap, loadOrder) {
            var indexes = [],
                paths = [],
                index, len, i;

            for(index in indexMap) {
                if(indexMap.hasOwnProperty(index) && indexMap[index]) {
                    indexes.push(index);
                }
            }

            indexes.sort(function(a, b){
                return a-b;
            });

            
            for (len = indexes.length, i = 0; i < len; i++) {
                paths.push(loadOrder[indexes[i]].path);
            }

            return paths;
        },

        
        expandUrl: function(url, loadOrder, loadOrderMap, indexMap, includeUses, skipLoaded) {
            if(typeof url == 'string') {
                url = [url];
            }

            if(loadOrder) {
                loadOrderMap = loadOrderMap || Boot.createLoadOrderMap(loadOrder);
                indexMap = indexMap || {};
                var len = url.length,
                    unmapped = [],
                    i, item;

                for(i = 0; i < len; i++) {
                    item = loadOrderMap[url[i]];
                    if(item) {
                        Boot.getLoadIndexes(item.idx, indexMap, loadOrder, includeUses, skipLoaded);
                    } else {
                        unmapped.push(url[i]);
                    }
                }



                return Boot.getPathsFromIndexes(indexMap, loadOrder).concat(unmapped);
            }
            return url;
        },

        expandUrls: function(urls, loadOrder, loadOrderMap, includeUses) {
            if(typeof urls == "string") {
                urls = [urls];
            }

            var expanded = [],
                len = urls.length,
                i;

            for(i = 0; i < len; i++) {
                expanded = expanded.concat(
                    Boot.expandUrl(urls[i], loadOrder, loadOrderMap, {}, includeUses, true));
            }

            if(expanded.length == 0) {
                expanded = urls;
            }

            return expanded;
        },

        
        expandLoadOrder: function(request) {
            var urls = request.url,
                loadOrder = request.loadOrder,
                loadOrderMap = request.loadOrderMap,
                expanded;

            if(!request.expanded) {
                expanded = Boot.expandUrls(urls, loadOrder, loadOrderMap);
                request.expanded = true;
            } else {
                expanded = urls;
            }

            request.url = expanded;

            
            
            if(urls.length != expanded.length) {
                request.sequential = true;
            }

            return request;
        }
    };

    
    Ext.disableCacheBuster = function (disable, path) {
        var date = new Date();
        date.setTime(date.getTime() + (disable ? 10*365 : -1) * 24*60*60*1000);
        date = date.toGMTString();
        doc.cookie = 'ext-cache=1; expires=' + date + '; path='+(path || '/');
    };


    Boot.init();
    return Boot;



}(function() {}));


Ext.globalEval = this.execScript
    ? function(code) {
    execScript(code);
}
    : function($$code) {
    
    
    (function(){
        
        
        
        var Ext = this.Ext;
        eval($$code);
    }());
};


if (!Function.prototype.bind) {
    (function () {
        var slice = Array.prototype.slice,
        
        
            bind = function (me) {
                var args = slice.call(arguments, 1),
                    method = this;

                if (args.length) {
                    return function () {
                        var t = arguments;
                        
                        return method.apply(me, t.length ? args.concat(slice.call(t)) : args);
                    };
                }
                

                args = null;
                return function () {
                    return method.apply(me, arguments);
                };
            };
        Function.prototype.bind = bind;
        bind.$extjs = true; 
    }());
}





var Ext = Ext || {};


Ext._startTime = Date.now ? Date.now() : (+ new Date());
(function() {
    var global = this,
        objectPrototype = Object.prototype,
        toString = objectPrototype.toString,
        enumerables = [
                       'valueOf', 'toLocaleString', 'toString', 'constructor'],
        emptyFn = function () {},
        identityFn = function(o) { return o; },
        
        
        callOverrideParent = function () {
            var method = callOverrideParent.caller.caller; 
            return method.$owner.prototype[method.$name].apply(this, arguments);
        },
        manifest = Ext.manifest || {},
        i,
        iterableRe = /\[object\s*(?:Array|Arguments|\w*Collection|\w*List|HTML\s+document\.all\s+class)\]/,
        MSDateRe = /^\\?\/Date\(([-+])?(\d+)(?:[+-]\d{4})?\)\\?\/$/;

    Ext.global = global;

    
    emptyFn.$nullFn = identityFn.$nullFn = emptyFn.$emptyFn = identityFn.$identityFn = true;

    for (i in { toString: 1 }) {
        enumerables = null;
    }

    
    Ext.enumerables = enumerables;

    
    Ext.apply = function(object, config, defaults) {
        if (defaults) {
            Ext.apply(object, defaults);
        }

        if (object && config && typeof config === 'object') {
            var i, j, k;

            for (i in config) {
                object[i] = config[i];
            }

            if (enumerables) {
                for (j = enumerables.length; j--;) {
                    k = enumerables[j];
                    if (config.hasOwnProperty(k)) {
                        object[k] = config[k];
                    }
                }
            }
        }

        return object;
    };

    Ext.buildSettings = Ext.apply({
        baseCSSPrefix: 'x-'
    }, Ext.buildSettings || {});

    Ext.apply(Ext, {
        
        idSeed: 0,

        
        idPrefix: 'ext-',

        
        isSecure: /^https/i.test(window.location.protocol),

        
        enableGarbageCollector: false,

        
        enableListenerCollection: true,

        
        name: Ext.sandboxName || 'Ext',

        
        emptyFn: emptyFn,

        
        identityFn: identityFn,

        
        frameStartTime: +new Date(),

        
        manifest: manifest,

        
        debugConfig: Ext.debugConfig || manifest.debug || {
            hooks: {
                '*': true,
                'Ext.layout': false,
                'Ext.event.gesture': false
            }
        },

        
        validIdRe: /^[a-z_][a-z0-9\-_]*$/i,

        
        makeIdSelector: function(id) {
            if (!Ext.validIdRe.test(id)) {
                Ext.Error.raise('Invalid id selector: "' + id + '"');
            }
            return '#' + id;
        },

        
        id: function(o, prefix) {
            if (o && o.id) {
                return o.id;
            }

            var id = (prefix || Ext.idPrefix) + (++Ext.idSeed);
            
            if (o) {
                o.id = id;
            }

            return id;
        },

        
        returnId: function(o) {
            return o.getId();
        },

        
        returnTrue: function() {
            return true;
        },

        
        emptyString: new String(),

        
        baseCSSPrefix: Ext.buildSettings.baseCSSPrefix,

        
        applyIf: function(object, config) {
            var property;

            if (object) {
                for (property in config) {
                    if (object[property] === undefined) {
                        object[property] = config[property];
                    }
                }
            }

            return object;
        },

        
        now: (global.performance && global.performance.now) ? function() {
            return performance.now();
        } : (Date.now || (Date.now = function() {
            return +new Date();
        })),

        
        destroy: function() {
            var ln = arguments.length,
            i, arg;

            for (i = 0; i < ln; i++) {
                arg = arguments[i];
                if (arg) {
                    if (Ext.isArray(arg)) {
                        this.destroy.apply(this, arg);
                    } else if (arg.isStore) {
                        arg.destroyStore();
                    } else if (Ext.isFunction(arg.destroy)) {
                        arg.destroy();
                    }
                }
            }
            return null;
        },

        
        destroyMembers: function (object) {
            for (var name, i = 1, a = arguments, len = a.length; i < len; i++) {
                name = a[i];
                if (object[name] != null) { 
                    object[name] = Ext.destroy(object[name]);
                }
            }
        },

        
        override: function (target, overrides) {
            if (target.$isClass) {
                target.override(overrides);
            } else if (typeof target == 'function') {
                Ext.apply(target.prototype, overrides);
            } else {
                var owner = target.self,
                    name, value;

                if (owner && owner.$isClass) { 
                    for (name in overrides) {
                        if (overrides.hasOwnProperty(name)) {
                            value = overrides[name];

                            if (typeof value === 'function') {
                                if (owner.$className) {
                                    value.displayName = owner.$className + '#' + name;
                                }

                                value.$name = name;
                                value.$owner = owner;
                                value.$previous = target.hasOwnProperty(name)
                                    ? target[name] 
                                    : callOverrideParent; 
                            }

                            target[name] = value;
                        }
                    }
                } else {
                    Ext.apply(target, overrides);
                }
            }

            return target;
        },

        
        valueFrom: function(value, defaultValue, allowBlank){
            return Ext.isEmpty(value, allowBlank) ? defaultValue : value;
        },

        
        isEmpty: function(value, allowEmptyString) {
            return (value == null) || (!allowEmptyString ? value === '' : false) || (Ext.isArray(value) && value.length === 0);
        },

        
        isArray: ('isArray' in Array) ? Array.isArray : function(value) {
            return toString.call(value) === '[object Array]';
        },

        
        isDate: function(value) {
            return toString.call(value) === '[object Date]';
        },

        
        isMSDate: function(value) {
            if (!Ext.isString(value)) {
                return false;
            }
            return MSDateRe.test(value);
        },

        
        isObject: (toString.call(null) === '[object Object]') ?
        function(value) {
            
            return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
        } :
        function(value) {
            return toString.call(value) === '[object Object]';
        },

        
        isSimpleObject: function(value) {
            return value instanceof Object && value.constructor === Object;
        },

        
        isPrimitive: function(value) {
            var type = typeof value;

            return type === 'string' || type === 'number' || type === 'boolean';
        },

        
        isFunction:
        
        
        (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function') ? function(value) {
            return !!value && toString.call(value) === '[object Function]';
        } : function(value) {
            return !!value && typeof value === 'function';
        },

        
        isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },

        
        isNumeric: function(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },

        
        isString: function(value) {
            return typeof value === 'string';
        },

        
        isBoolean: function(value) {
            return typeof value === 'boolean';
        },

        
        isElement: function(value) {
            return value ? value.nodeType === 1 : false;
        },

        
        isTextNode: function(value) {
            return value ? value.nodeName === "#text" : false;
        },

        
        isDefined: function(value) {
            return typeof value !== 'undefined';
        },

        
        isIterable: function(value) {
            
            if (!value || typeof value.length !== 'number' || typeof value === 'string' || Ext.isFunction(value)) {
                return false;
            }

            
            
            
            if (!value.propertyIsEnumerable) {
                return !!value.item;
            }

            
            
            if (value.hasOwnProperty('length') && !value.propertyIsEnumerable('length')) {
                return true;
            }

            
            return iterableRe.test(toString.call(value));
        },

        
        isDebugEnabled:
            function (className) {
                var debugConfig = Ext.debugConfig.hooks;

                if (debugConfig.hasOwnProperty(className)) {
                    return debugConfig[className];
                }

                var enabled = debugConfig['*'],
                    prefixLength = 0;
                if (!className) {
                    return enabled;
                }

                for (var prefix in debugConfig) {
                    var value = debugConfig[prefix];

                    
                    if (className.charAt(prefix.length) === '.') {
                        if (className.substring(0, prefix.length) === prefix) {
                            if (prefixLength < prefix.length) {
                                prefixLength = prefix.length;
                                enabled = value;
                            }
                        }
                    }
                }

                return enabled;
            } ||
            emptyFn,

        
        clone: function(item) {
            if (item === null || item === undefined) {
                return item;
            }

            
            
            
            if (item.nodeType && item.cloneNode) {
                return item.cloneNode(true);
            }

            var type = toString.call(item),
                i, j, k, clone, key;

            
            if (type === '[object Date]') {
                return new Date(item.getTime());
            }

            
            if (type === '[object Array]') {
                i = item.length;

                clone = [];

                while (i--) {
                    clone[i] = Ext.clone(item[i]);
                }
            }
            
            else if (type === '[object Object]' && item.constructor === Object) {
                clone = {};

                for (key in item) {
                    clone[key] = Ext.clone(item[key]);
                }

                if (enumerables) {
                    for (j = enumerables.length; j--;) {
                        k = enumerables[j];
                        if (item.hasOwnProperty(k)) {
                            clone[k] = item[k];
                        }
                    }
                }
            }

            return clone || item;
        },

        
        getUniqueGlobalNamespace: function() {
            var uniqueGlobalNamespace = this.uniqueGlobalNamespace,
                i;

            if (uniqueGlobalNamespace === undefined) {
                i = 0;

                do {
                    uniqueGlobalNamespace = 'ExtBox' + (++i);
                } while (global[uniqueGlobalNamespace] !== undefined);

                global[uniqueGlobalNamespace] = Ext;
                this.uniqueGlobalNamespace = uniqueGlobalNamespace;
            }

            return uniqueGlobalNamespace;
        },

        
        functionFactoryCache: {},

        cacheableFunctionFactory: function() {
            var me = this,
                args = Array.prototype.slice.call(arguments),
                cache = me.functionFactoryCache,
                idx, fn, ln;

             if (Ext.isSandboxed) {
                ln = args.length;
                if (ln > 0) {
                    ln--;
                    args[ln] = 'var Ext=window.' + Ext.name + ';' + args[ln];
                }
            }
            idx = args.join('');
            fn = cache[idx];
            if (!fn) {
                fn = Function.prototype.constructor.apply(Function.prototype, args);

                cache[idx] = fn;
            }
            return fn;
        },

        functionFactory: function() {
            var args = Array.prototype.slice.call(arguments),
                ln;

            if (Ext.isSandboxed) {
                ln = args.length;
                if (ln > 0) {
                    ln--;
                    args[ln] = 'var Ext=window.' + Ext.name + ';' + args[ln];
                }
            }

            return Function.prototype.constructor.apply(Function.prototype, args);
        },

        
        Logger: {
            log: function(message, priority) {
                if (message && global.console) {
                    if (!priority || !(priority in global.console)) {
                        priority = 'log';
                    }
                    message = '[' + priority.toUpperCase() + '] ' + message;
                    global.console[priority](message);
                }
            },
            verbose: function(message) {
                this.log(message, 'verbose');
            },
            info: function(message) {
                this.log(message, 'info');
            },
            warn: function(message) {
                this.log(message, 'warn');
            },
            error: function(message) {
                throw new Error(message);
            },
            deprecate: function(message) {
                this.log(message, 'warn');
            }
        } || {
            verbose: emptyFn,
            log: emptyFn,
            info: emptyFn,
            warn: emptyFn,
            error: function(message) {
                throw new Error(message);
            },
            deprecate: emptyFn
        },

        
        getElementById: function(id) {
            return document.getElementById(id);
        }
    }); 

    Ext.returnTrue.$nullFn = Ext.returnId.$nullFn = true;
}());


(function() {




    function toString() {
        var me = this,
            cls = me.sourceClass,
            method = me.sourceMethod,
            msg = me.msg;

        if (method) {
            if (msg) {
                method += '(): ';
                method += msg;
            } else {
                method += '()';
            }
        }

        if (cls) {
            method = method ? (cls + '.' + method) : cls;
        }
        
        return method || msg || '';
    }

    Ext.Error = function(config) {
        if (Ext.isString(config)) {
            config = { msg: config };
        }

        var error = new Error();

        Ext.apply(error, config);

        error.message = error.message || error.msg; 
        

        error.toString = toString;

        return error;
    };

    Ext.apply(Ext.Error, {
        
        ignore: false,

        
        raise: function(err) {
            err = err || {};
            if (Ext.isString(err)) {
                err = { msg: err };
            }

            var me = this,
                method = me.raise.caller,
                msg, name;

            if (method) {
                if (!err.sourceMethod && (name = method.$name)) {
                    err.sourceMethod = name;
                }
                if (!err.sourceClass && (name = method.$owner) && (name = name.$className)) {
                    err.sourceClass = name;
                }
            }

            if (me.handle(err) !== true) {
                msg = toString.call(err);

                Ext.log({
                    msg: msg,
                    level: 'error',
                    dump: err,
                    stack: true
                });

                throw new Ext.Error(err);
            }
        },

        
        handle: function () {
            return this.ignore;
        }
    });
})();


Ext.deprecated = function (suggestion) {
    if (!suggestion) {
        suggestion = '';
    }

    function fail () {
        Ext.Error.raise('The method "' + fail.$owner.$className + '.' + fail.$name + 
                '" has been removed. ' + suggestion);
    }

    return fail;
    return Ext.emptyFn;
};


(function () {
    if (typeof window === 'undefined') {
        return; 
    }

    var win = Ext.global,
        last = 0,
        
        notify = function() {
            var cnt = Ext.log && Ext.log.counters,
                n = cnt && (cnt.error + cnt.warn + cnt.info + cnt.log),
                msg;

            
            if (n && last !== n) {
                msg = [];
                if (cnt.error) {
                    msg.push('Errors: ' + cnt.error);
                }
                if (cnt.warn) {
                    msg.push('Warnings: ' + cnt.warn);
                }
                if (cnt.info) {
                    msg.push('Info: ' + cnt.info);
                }
                if (cnt.log) {
                    msg.push('Log: ' + cnt.log);
                }
                win.status = '*** ' + msg.join(' -- ');
                last = n;
            }
        };

    
    
    win.setInterval(notify, 1000);
}());


Ext.Array = new (function() {




    var arrayPrototype = Array.prototype,
        slice = arrayPrototype.slice,
        supportsSplice = (function () {
            var array = [],
                lengthBefore,
                j = 20;

            if (!array.splice) {
                return false;
            }

            
            

            while (j--) {
                array.push("A");
            }

            array.splice(15, 0, "F", "F", "F", "F", "F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F");

            lengthBefore = array.length; 
            array.splice(13, 0, "XXX"); 

            if (lengthBefore + 1 !== array.length) {
                return false;
            }
            

            return true;
        }()),
        supportsIndexOf = 'indexOf' in arrayPrototype,
        supportsSliceOnNodeList = true;

    
    
    function stableSort(array, userComparator) {
        var len = array.length,
            indices = new Array(len),
            result = new Array(len),
            i;

        
        for (i = 0; i < len; i++) {
            indices[i] = i;
        }

        
        indices.sort(function(index1, index2) {
            return userComparator(array[index1], array[index2]) || (index1 - index2);
        });

        
        for (i = 0; i < len; i++) {
            result[i] = array[indices[i]];
        }

        
        for (i = 0; i < len; i++) {
            array[i] = result[i];
        }

        return array;
    }

    try {
        
        if (typeof document !== 'undefined') {
            slice.call(document.getElementsByTagName('body'));
        }
    } catch (e) {
        supportsSliceOnNodeList = false;
    }

    var fixArrayIndex = function (array, index) {
        return (index < 0) ? Math.max(0, array.length + index)
                           : Math.min(array.length, index);
    },

    
    replaceSim = function (array, index, removeCount, insert) {
        var add = insert ? insert.length : 0,
            length = array.length,
            pos = fixArrayIndex(array, index);

        
        if (pos === length) {
            if (add) {
                array.push.apply(array, insert);
            }
        } else {
            var remove = Math.min(removeCount, length - pos),
                tailOldPos = pos + remove,
                tailNewPos = tailOldPos + add - remove,
                tailCount = length - tailOldPos,
                lengthAfterRemove = length - remove,
                i;

            if (tailNewPos < tailOldPos) { 
                for (i = 0; i < tailCount; ++i) {
                    array[tailNewPos+i] = array[tailOldPos+i];
                }
            } else if (tailNewPos > tailOldPos) { 
                for (i = tailCount; i--; ) {
                    array[tailNewPos+i] = array[tailOldPos+i];
                }
            } 

            if (add && pos === lengthAfterRemove) {
                array.length = lengthAfterRemove; 
                array.push.apply(array, insert);
            } else {
                array.length = lengthAfterRemove + add; 
                for (i = 0; i < add; ++i) {
                    array[pos+i] = insert[i];
                }
            }
        }

        return array;
    },

    replaceNative = function (array, index, removeCount, insert) {
        if (insert && insert.length) {
            
            if (index === 0 && !removeCount) {
                array.unshift.apply(array, insert);
            }
            
            else if (index < array.length) {
                array.splice.apply(array, [index, removeCount].concat(insert));
            }
            
            else {
                array.push.apply(array, insert);
            }
        } else {
            array.splice(index, removeCount);
        }
        return array;
    },

    eraseSim = function (array, index, removeCount) {
        return replaceSim(array, index, removeCount);
    },

    eraseNative = function (array, index, removeCount) {
        array.splice(index, removeCount);
        return array;
    },

    spliceSim = function (array, index, removeCount) {
        var pos = fixArrayIndex(array, index),
            removed = array.slice(index, fixArrayIndex(array, pos+removeCount));

        if (arguments.length < 4) {
            replaceSim(array, pos, removeCount);
        } else {
            replaceSim(array, pos, removeCount, slice.call(arguments, 3));
        }

        return removed;
    },

    spliceNative = function (array) {
        return array.splice.apply(array, slice.call(arguments, 1));
    },

    erase = supportsSplice ? eraseNative : eraseSim,
    replace = supportsSplice ? replaceNative : replaceSim,
    splice = supportsSplice ? spliceNative : spliceSim,

    

    ExtArray = {
        
        binarySearch: function (array, item, begin, end, compareFn) {
            var length = array.length,
                middle, comparison;

            if (begin instanceof Function) {
                compareFn = begin;
                begin = 0;
                end = length;
            } else if (end instanceof Function) {
                compareFn = end;
                end = length;
            } else {
                if (begin === undefined) {
                    begin = 0;
                }
                if (end === undefined) {
                    end = length;
                }
                compareFn = compareFn || ExtArray.lexicalCompare;
            }

            --end;

            while (begin <= end) {
                middle = (begin + end) >> 1;
                comparison = compareFn(item, array[middle]);
                if (comparison >= 0) {
                    begin = middle + 1;
                } else if (comparison < 0) {
                    end = middle - 1;
                }
            }

            return begin;
        },

        defaultCompare: function (lhs, rhs) {
            return (lhs < rhs) ? -1 : ((lhs > rhs) ? 1 : 0);
        },

        
        
        lexicalCompare: function (lhs, rhs) {
            lhs = String(lhs);
            rhs = String(rhs);

            return (lhs < rhs) ? -1 : ((lhs > rhs) ? 1 : 0);
        },

        
        each: function(array, fn, scope, reverse) {
            array = ExtArray.from(array);

            var i,
                ln = array.length;

            if (reverse !== true) {
                for (i = 0; i < ln; i++) {
                    if (fn.call(scope || array[i], array[i], i, array) === false) {
                        return i;
                    }
                }
            }
            else {
                for (i = ln - 1; i > -1; i--) {
                    if (fn.call(scope || array[i], array[i], i, array) === false) {
                        return i;
                    }
                }
            }

            return true;
        },

        
        forEach: ('forEach' in arrayPrototype) ? function(array, fn, scope) {
            return array.forEach(fn, scope);
        } : function(array, fn, scope) {
            for (var i = 0, ln = array.length; i < ln; i++) {
                fn.call(scope, array[i], i, array);
            }
        },

        
        indexOf: supportsIndexOf ? function(array, item, from) {
            return arrayPrototype.indexOf.call(array, item, from);
         } : function(array, item, from) {
            var i, length = array.length;

            for (i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++) {
                if (array[i] === item) {
                    return i;
                }
            }

            return -1;
        },

        
        contains: supportsIndexOf ? function(array, item) {
            return arrayPrototype.indexOf.call(array, item) !== -1;
        } : function(array, item) {
            var i, ln;

            for (i = 0, ln = array.length; i < ln; i++) {
                if (array[i] === item) {
                    return true;
                }
            }

            return false;
        },

        
        toArray: function(iterable, start, end){
            if (!iterable || !iterable.length) {
                return [];
            }

            if (typeof iterable === 'string') {
                iterable = iterable.split('');
            }

            if (supportsSliceOnNodeList) {
                return slice.call(iterable, start || 0, end || iterable.length);
            }

            var array = [],
                i;

            start = start || 0;
            end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;

            for (i = start; i < end; i++) {
                array.push(iterable[i]);
            }

            return array;
        },

        
        pluck: function(array, propertyName) {
            var ret = [],
                i, ln, item;

            for (i = 0, ln = array.length; i < ln; i++) {
                item = array[i];

                ret.push(item[propertyName]);
            }

            return ret;
        },

        
        map: ('map' in arrayPrototype) ? function(array, fn, scope) {
            Ext.Assert.isFunction(fn, 
                'Ext.Array.map must have a callback function passed as second argument.');

            return array.map(fn, scope);
        } : function(array, fn, scope) {
            Ext.Assert.isFunction(fn, 
                'Ext.Array.map must have a callback function passed as second argument.');

            var results = [],
                i = 0,
                len = array.length;

            for (; i < len; i++) {
                results[i] = fn.call(scope, array[i], i, array);
            }

            return results;
        },

        
        every: ('every' in arrayPrototype) ? function(array, fn, scope) {
            Ext.Assert.isFunction(fn, 
                'Ext.Array.every must have a callback function passed as second argument.');

            return array.every(fn, scope);
        } : function(array, fn, scope) {
            Ext.Assert.isFunction(fn, 
                'Ext.Array.every must have a callback function passed as second argument.');

            var i = 0,
                ln = array.length;

            for (; i < ln; ++i) {
                if (!fn.call(scope, array[i], i, array)) {
                    return false;
                }
            }

            return true;
        },

        
        some: ('some' in arrayPrototype) ? function(array, fn, scope) {
            Ext.Assert.isFunction(fn, 
                'Ext.Array.some must have a callback function passed as second argument.');

            return array.some(fn, scope);
        } : function(array, fn, scope) {
            Ext.Assert.isFunction(fn, 
                'Ext.Array.some must have a callback function passed as second argument.');

            var i = 0,
                ln = array.length;

            for (; i < ln; ++i) {
                if (fn.call(scope, array[i], i, array)) {
                    return true;
                }
            }

            return false;
        },
        
        
        equals: function(array1, array2) {
            var len1 = array1.length,
                len2 = array2.length,
                i;
                
            
            if (array1 === array2) {
                return true;
            }
                
            if (len1 !== len2) {
                return false;
            }
            
            for (i = 0; i < len1; ++i) {
                if (array1[i] !== array2[i]) {
                    return false;
                }
            }
            
            return true;
        },

        
        clean: function(array) {
            var results = [],
                i = 0,
                ln = array.length,
                item;

            for (; i < ln; i++) {
                item = array[i];

                if (!Ext.isEmpty(item)) {
                    results.push(item);
                }
            }

            return results;
        },

        
        unique: function(array) {
            var clone = [],
                i = 0,
                ln = array.length,
                item;

            for (; i < ln; i++) {
                item = array[i];

                if (ExtArray.indexOf(clone, item) === -1) {
                    clone.push(item);
                }
            }

            return clone;
        },

        
        filter: ('filter' in arrayPrototype) ? function(array, fn, scope) {
            Ext.Assert.isFunction(fn, 
                'Ext.Array.filter must have a filter function passed as second argument.');

            return array.filter(fn, scope);
        } : function(array, fn, scope) {
            Ext.Assert.isFunction(fn, 
                'Ext.Array.filter must have a filter function passed as second argument.');

            var results = [],
                i = 0,
                ln = array.length;

            for (; i < ln; i++) {
                if (fn.call(scope, array[i], i, array)) {
                    results.push(array[i]);
                }
            }

            return results;
        },

        
        findBy : function(array, fn, scope) {
            var i = 0,
                len = array.length;

            for (; i < len; i++) {
                if (fn.call(scope || array, array[i], i)) {
                    return array[i];
                }
            }
            return null;
        },

        
        from: function(value, newReference) {
            if (value === undefined || value === null) {
                return [];
            }

            if (Ext.isArray(value)) {
                return (newReference) ? slice.call(value) : value;
            }

            var type = typeof value;
            
            
            if (value && value.length !== undefined && type !== 'string' && (type !== 'function' || !value.apply)) {
                return ExtArray.toArray(value);
            }

            return [value];
        },

        
        remove: function(array, item) {
            var index = ExtArray.indexOf(array, item);

            if (index !== -1) {
                erase(array, index, 1);
            }

            return array;
        },

        
        include: function(array, item) {
            if (!ExtArray.contains(array, item)) {
                array.push(item);
            }
        },

        
        clone: function(array) {
            return slice.call(array);
        },

        
        merge: function() {
            var args = slice.call(arguments),
                array = [],
                i, ln;

            for (i = 0, ln = args.length; i < ln; i++) {
                array = array.concat(args[i]);
            }

            return ExtArray.unique(array);
        },

        
        intersect: function() {
            var intersection = [],
                arrays = slice.call(arguments),
                arraysLength,
                array,
                arrayLength,
                minArray,
                minArrayIndex,
                minArrayCandidate,
                minArrayLength,
                element,
                elementCandidate,
                elementCount,
                i, j, k;

            if (!arrays.length) {
                return intersection;
            }

            
            arraysLength = arrays.length;
            for (i = minArrayIndex = 0; i < arraysLength; i++) {
                minArrayCandidate = arrays[i];
                if (!minArray || minArrayCandidate.length < minArray.length) {
                    minArray = minArrayCandidate;
                    minArrayIndex = i;
                }
            }

            minArray = ExtArray.unique(minArray);
            erase(arrays, minArrayIndex, 1);

            
            
            
            minArrayLength = minArray.length;
            arraysLength = arrays.length;
            for (i = 0; i < minArrayLength; i++) {
                element = minArray[i];
                elementCount = 0;

                for (j = 0; j < arraysLength; j++) {
                    array = arrays[j];
                    arrayLength = array.length;
                    for (k = 0; k < arrayLength; k++) {
                        elementCandidate = array[k];
                        if (element === elementCandidate) {
                            elementCount++;
                            break;
                        }
                    }
                }

                if (elementCount === arraysLength) {
                    intersection.push(element);
                }
            }

            return intersection;
        },

        
        difference: function(arrayA, arrayB) {
            var clone = slice.call(arrayA),
                ln = clone.length,
                i, j, lnB;

            for (i = 0,lnB = arrayB.length; i < lnB; i++) {
                for (j = 0; j < ln; j++) {
                    if (clone[j] === arrayB[i]) {
                        erase(clone, j, 1);
                        j--;
                        ln--;
                    }
                }
            }

            return clone;
        },

        
        
        slice: ([1,2].slice(1, undefined).length ?
            function (array, begin, end) {
                return slice.call(array, begin, end);
            } :
            function (array, begin, end) {
                
                if (typeof begin === 'undefined') {
                    return slice.call(array);
                }
                if (typeof end === 'undefined') {
                    return slice.call(array, begin);
                }
                return slice.call(array, begin, end);
            }
        ),

                         
        sort: function(array, sortFn) {
            return stableSort(array, sortFn || ExtArray.lexicalCompare);
        },

        
        flatten: function(array) {
            var worker = [];

            function rFlatten(a) {
                var i, ln, v;

                for (i = 0, ln = a.length; i < ln; i++) {
                    v = a[i];

                    if (Ext.isArray(v)) {
                        rFlatten(v);
                    } else {
                        worker.push(v);
                    }
                }

                return worker;
            }

            return rFlatten(array);
        },

        
        min: function(array, comparisonFn) {
            var min = array[0],
                i, ln, item;

            for (i = 0, ln = array.length; i < ln; i++) {
                item = array[i];

                if (comparisonFn) {
                    if (comparisonFn(min, item) === 1) {
                        min = item;
                    }
                }
                else {
                    if (item < min) {
                        min = item;
                    }
                }
            }

            return min;
        },

        
        max: function(array, comparisonFn) {
            var max = array[0],
                i, ln, item;

            for (i = 0, ln = array.length; i < ln; i++) {
                item = array[i];

                if (comparisonFn) {
                    if (comparisonFn(max, item) === -1) {
                        max = item;
                    }
                }
                else {
                    if (item > max) {
                        max = item;
                    }
                }
            }

            return max;
        },

        
        mean: function(array) {
            return array.length > 0 ? ExtArray.sum(array) / array.length : undefined;
        },

        
        sum: function(array) {
            var sum = 0,
                i, ln, item;

            for (i = 0,ln = array.length; i < ln; i++) {
                item = array[i];

                sum += item;
            }

            return sum;
        },

        
        toMap: function(array, getKey, scope) {
            var map = {},
                i = array.length;

            if (!getKey) {
                while (i--) {
                    map[array[i]] = i+1;
                }
            } else if (typeof getKey === 'string') {
                while (i--) {
                    map[array[i][getKey]] = i+1;
                }
            } else {
                while (i--) {
                    map[getKey.call(scope, array[i])] = i+1;
                }
            }

            return map;
        },

        
        toValueMap: function(array, getKey, scope, arrayify) {
            var map = {},
                i = array.length,
                autoArray, alwaysArray, entry, fn, key, value;

            if (!getKey) {
                while (i--) {
                    value = array[i];
                    map[value] = value;
                }
            } else {
                if (!(fn = (typeof getKey !== 'string'))) {
                    arrayify = scope;
                }

                alwaysArray = arrayify === 1;
                autoArray = arrayify === 2;

                while (i--) {
                    value = array[i];
                    key = fn ? getKey.call(scope, value) : value[getKey];

                    if (alwaysArray) {
                        if (key in map) {
                            map[key].push(value);
                        } else {
                            map[key] = [ value ];
                        }
                    } else if (autoArray && (key in map)) {
                        if ((entry = map[key]) instanceof Array) {
                            entry.push(value);
                        } else {
                            map[key] = [ entry, value ];
                        }
                    } else {
                        map[key] = value;
                    }
                }
            }

            return map;
        },

        _replaceSim: replaceSim, 
        _spliceSim: spliceSim,

        
        erase: erase,

        
        insert: function (array, index, items) {
            return replace(array, index, 0, items);
        },

        
        replace: replace,

        
        splice: splice,

        
        push: function(target) {
            var len = arguments.length,
                i = 1,
                newItem;

            if (target === undefined) {
                target = [];
            } else if (!Ext.isArray(target)) {
                target = [target];
            }
            for (; i < len; i++) {
                newItem = arguments[i];
                Array.prototype.push[Ext.isIterable(newItem) ? 'apply' : 'call'](target, newItem);
            }
            return target;
        },
        
        
        numericSortFn: function(a, b) {
            return a - b;
        }
    };

    
    Ext.each = ExtArray.each;

    
    ExtArray.union = ExtArray.merge;

    
    Ext.min = ExtArray.min;

    
    Ext.max = ExtArray.max;

    
    Ext.sum = ExtArray.sum;

    
    Ext.mean = ExtArray.mean;

    
    Ext.flatten = ExtArray.flatten;

    
    Ext.clean = ExtArray.clean;

    
    Ext.unique = ExtArray.unique;

    
    Ext.pluck = ExtArray.pluck;

    
    Ext.toArray = function() {
        return ExtArray.toArray.apply(ExtArray, arguments);
    };

    return ExtArray;
});


Ext.Function = {




    
    flexSetter: function(setter) {
        return function(name, value) {
            var k, i;

            if (name !== null) {
                if (typeof name !== 'string') {
                    for (k in name) {
                        if (name.hasOwnProperty(k)) {
                            setter.call(this, k, name[k]);
                        }
                    }

                    if (Ext.enumerables) {
                        for (i = Ext.enumerables.length; i--;) {
                            k = Ext.enumerables[i];
                            if (name.hasOwnProperty(k)) {
                                setter.call(this, k, name[k]);
                            }
                        }
                    }
                } else {
                    setter.call(this, name, value);
                }
            }

            return this;
        };
    },

    
    bind: function(fn, scope, args, appendArgs) {
        if (arguments.length === 2) {
            return function() {
                return fn.apply(scope, arguments);
            };
        }

        var method = fn,
            slice = Array.prototype.slice;

        return function() {
            var callArgs = args || arguments;

            if (appendArgs === true) {
                callArgs = slice.call(arguments, 0);
                callArgs = callArgs.concat(args);
            }
            else if (typeof appendArgs == 'number') {
                callArgs = slice.call(arguments, 0); 
                Ext.Array.insert(callArgs, appendArgs, args);
            }

            return method.apply(scope || Ext.global, callArgs);
        };
    },

    
    bindCallback: function (callback, scope, args, delay, caller) {
        return function () {
            var a = Ext.Array.slice(arguments);
            return Ext.callback(callback, scope, args ? args.concat(a) : a, delay, caller);
        };
    },

    
    pass: function(fn, args, scope) {
        if (!Ext.isArray(args)) {
            if (Ext.isIterable(args)) {
                args = Ext.Array.clone(args);
            } else {
                args = args !== undefined ? [args] : [];
            }
        }

        return function() {
            var fnArgs = args.slice();
            fnArgs.push.apply(fnArgs, arguments);
            return fn.apply(scope || this, fnArgs);
        };
    },

    
    alias: function(object, methodName) {
        return function() {
            return object[methodName].apply(object, arguments);
        };
    },

    
    clone: function(method) {
        return function() {
            return method.apply(this, arguments);
        };
    },

    
    createInterceptor: function(origFn, newFn, scope, returnValue) {
        if (!Ext.isFunction(newFn)) {
            return origFn;
        } else {
            returnValue = Ext.isDefined(returnValue) ? returnValue : null;
            return function() {
                var me = this,
                    args = arguments;
                    
                newFn.target = me;
                newFn.method = origFn;
                return (newFn.apply(scope || me || Ext.global, args) !== false) ? 
                            origFn.apply(me || Ext.global, args) : returnValue;
            };
        }
    },

    
    createDelayed: function(fn, delay, scope, args, appendArgs) {
        if (scope || args) {
            fn = Ext.Function.bind(fn, scope, args, appendArgs);
        }

        return function() {
            var me = this,
                args = Array.prototype.slice.call(arguments);

            setTimeout(function() {
                fn.apply(me, args);
            }, delay);
        };
    },

    
    defer: function(fn, millis, scope, args, appendArgs) {
        fn = Ext.Function.bind(fn, scope, args, appendArgs);
        if (millis > 0) {
            return setTimeout(Ext.supports.TimeoutActualLateness ? function () {
                fn();
            } : fn, millis);
        }
        fn();
        return 0;
    },

    
    createSequence: function(originalFn, newFn, scope) {
        if (!newFn) {
            return originalFn;
        }
        else {
            return function() {
                var result = originalFn.apply(this, arguments);
                newFn.apply(scope || this, arguments);
                return result;
            };
        }
    },

    
    createBuffered: function(fn, buffer, scope, args) {
        var timerId;

        return function() {
            var callArgs = args || Array.prototype.slice.call(arguments, 0),
                me = scope || this;

            if (timerId) {
                clearTimeout(timerId);
            }

            timerId = setTimeout(function(){
                fn.apply(me, callArgs);
            }, buffer);
        };
    },

    
    createAnimationFrame: function(fn, scope, args, queueStrategy) {
        var Function = Ext.Function,
            timerId;

        queueStrategy = queueStrategy || 3;

        return function() {
            var callArgs = args || Array.prototype.slice.call(arguments, 0);

            scope = scope || this;

            if (queueStrategy === 3) {
                Function.cancelAnimationFrame(timerId);
            }

            if ((queueStrategy & 1) || !timerId) {
                timerId = Function.requestAnimationFrame(function() {
                    timerId = null;
                    fn.apply(scope, callArgs);
                });
            }
        };
    },

    requestAnimationFrame: (function() {
        var lastTime = 0,
            win = window,
            requestAnimFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame ||
                win.mozRequestAnimationFrame || win.oRequestAnimationFrame ||
                function(callback) {
                    var currTime = Ext.now(),
                        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                        id = window.setTimeout(function() {
                            callback(currTime + timeToCall);
                        }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

        return function(fn) {
            return requestAnimFrame(fn);
        };
    })(),

    cancelAnimationFrame: (function() {
        var win = window,
            cancelAnimFrame = win.cancelAnimationFrame || win.webkitCancelAnimationFrame ||
                win.mozCancelAnimationFrame || win.oCancelAnimationFrame ||
                function(id) {
                    clearTimeout(id);
                };

        return function(id) {
            cancelAnimFrame(id);
        }
    })(),

    
    createThrottled: function(fn, interval, scope) {
        var lastCallTime = 0,
            elapsed,
            lastArgs,
            timer,
            execute = function() {
                fn.apply(scope, lastArgs);
                lastCallTime = Ext.now();
                timer = null;
            };

        return function() {
            
            if (!scope) {
                scope = this;
            }
            elapsed = Ext.now() - lastCallTime;
            lastArgs = arguments;

            
            
            if (elapsed >= interval) {
                clearTimeout(timer);
                execute();
            }
            
            else if (!timer) {
                timer = setTimeout(execute, interval - elapsed);
            }
        };
    },

        
    createBarrier: function(count, fn, scope) {
        return function() {
            if (!--count) {
                fn.apply(scope, arguments);
            };
        }
    },

    
    interceptBefore: function(object, methodName, fn, scope) {
        var method = object[methodName] || Ext.emptyFn;

        return (object[methodName] = function() {
            var ret = fn.apply(scope || this, arguments);
            method.apply(this, arguments);

            return ret;
        });
    },

    
    interceptAfter: function(object, methodName, fn, scope) {
        var method = object[methodName] || Ext.emptyFn;

        return (object[methodName] = function() {
            method.apply(this, arguments);
            return fn.apply(scope || this, arguments);
        });
    },

    makeCallback: function (callback, scope) {
        if (!scope[callback]) {
            if (scope.$className) {
                Ext.Error.raise('No method "' + callback + '" on ' + scope.$className);
            }
            Ext.Error.raise('No method "' + callback + '"');
        }

        return function () {
            return scope[callback].apply(scope, arguments);
        };
    }
};


Ext.defer = Ext.Function.defer;


Ext.pass = Ext.Function.pass;


Ext.bind = Ext.Function.bind;


Ext.Number = new function() {



    var ExtNumber = this,
        isToFixedBroken = (0.9).toFixed() !== '1',
        math = Math,
        ClipDefault = {
            count: false,
            inclusive: false,
            wrap: true
        };

    Ext.apply(ExtNumber, {
        Clip: {
            DEFAULT: ClipDefault,

            COUNT: Ext.applyIf({
                    count: true
                }, ClipDefault),

            INCLUSIVE: Ext.applyIf({
                    inclusive: true
                }, ClipDefault),

            NOWRAP: Ext.applyIf({
                    wrap: false
                }, ClipDefault)
        },

        
        clipIndices: function (length, indices, options) {
            options = options || ClipDefault;

            var defaultValue = 0, 
                wrap = options.wrap,
                begin, end, i;

            indices = indices || [];
            for (i = 0; i < 2; ++i) {
                
                
                begin = end;  
                end = indices[i];
                if (end == null) {
                    end = defaultValue;
                } else if (i && options.count) {
                    end += begin; 
                    end = (end > length) ? length : end;
                } else {
                    if (wrap) {
                        end = (end < 0) ? (length + end) : end;
                    }
                    if (i && options.inclusive) {
                        ++end;
                    }
                    end = (end < 0) ? 0 : ((end > length) ? length : end);
                }
                defaultValue = length; 
            }

            
            
            

            indices[0] = begin;
            indices[1] = (end < begin) ? begin : end;
            return indices;
        },

        
        constrain: function(number, min, max) {
            var x = parseFloat(number);

            
            

            
            
            
            
            
            return (x < min) ? min : ((x > max) ? max : x);
        },

        
        snap : function(value, increment, minValue, maxValue) {
            var m;

            
            
            if (value === undefined || value < minValue) {
                return minValue || 0;
            }

            if (increment) {
                m = value % increment;
                if (m !== 0) {
                    value -= m;
                    if (m * 2 >= increment) {
                        value += increment;
                    } else if (m * 2 < -increment) {
                        value -= increment;
                    }
                }
            }
            return ExtNumber.constrain(value, minValue,  maxValue);
        },

        
        snapInRange : function(value, increment, minValue, maxValue) {
            var tween;

            
            minValue = (minValue || 0);

            
            if (value === undefined || value < minValue) {
                return minValue;
            }

            
            if (increment && (tween = ((value - minValue) % increment))) {
                value -= tween;
                tween *= 2;
                if (tween >= increment) {
                    value += increment;
                }
            }

            
            if (maxValue !== undefined) {
                if (value > (maxValue = ExtNumber.snapInRange(maxValue, increment, minValue))) {
                    value = maxValue;
                }
            }

            return value;
        },

        
        toFixed: isToFixedBroken ? function(value, precision) {
            precision = precision || 0;
            var pow = math.pow(10, precision);
            return (math.round(value * pow) / pow).toFixed(precision);
        } : function(value, precision) {
            return value.toFixed(precision);
        },

        
        from: function(value, defaultValue) {
            if (isFinite(value)) {
                value = parseFloat(value);
            }

            return !isNaN(value) ? value : defaultValue;
        },

        
        randomInt: function (from, to) {
           return math.floor(math.random() * (to - from + 1) + from);
        },
        
        
        correctFloat: function(n) {
            
            
            
            return parseFloat(n.toPrecision(14));
        }
    });

    
    Ext.num = function() {
        return ExtNumber.from.apply(this, arguments);
    };
};


Ext.String = (function() {




    var trimRegex     = /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,
        escapeRe      = /('|\\)/g,
        formatRe      = /\{\d+\}/,
        escapeRegexRe = /([-.*+?\^${}()|\[\]\/\\])/g,
        basicTrimRe   = /^\s+|\s+$/g,
        whitespaceRe  = /\s+/,
        varReplace    = /(^[^a-z]*|[^\w])/gi,
        charToEntity,
        entityToChar,
        charToEntityRegex,
        entityToCharRegex,
        htmlEncodeReplaceFn = function(match, capture) {
            return charToEntity[capture];
        },
        htmlDecodeReplaceFn = function(match, capture) {
            return (capture in entityToChar) ? entityToChar[capture] : String.fromCharCode(parseInt(capture.substr(2), 10));
        },
        boundsCheck = function(s, other){
            if (s === null || s === undefined || other === null || other === undefined) {
                return false;
            }

            return other.length <= s.length; 
        },
        
        
        
        formatTplConfig = {useFormat: false, compiled: true, stringFormat: true},
        formatFns = {},
        generateFormatFn = function(format) {
            
            if (formatRe.test(format)) {
                format = new Ext.Template(format, formatTplConfig);
                return function() {
                    return format.apply(arguments);
                };
            }
            
            else {
                return function() {
                    return format;
                };
            }
        },
        ExtString;

    return ExtString = {

        
        insert: function(s, value, index) {
            if (!s) {
                return value;
            }
            
            if (!value) {
                return s;
            }
            
            var len = s.length;
            
            if (!index && index !== 0) {
                index = len;
            }
            
            if (index < 0) {
                index *= -1;
                if (index >= len) {
                    
                    index = 0;
                } else {
                    index = len - index;
                }
            }
            
            if (index === 0) {
                s = value + s;
            } else if (index >= s.length) {
                s += value;
            } else {
                s = s.substr(0, index) + value + s.substr(index);
            }
            return s;
        },
        
        
        startsWith: function(s, start, ignoreCase){
            var result = boundsCheck(s, start);
            
            if (result) {
                if (ignoreCase) {
                    s = s.toLowerCase();
                    start = start.toLowerCase();
                }
                result = s.lastIndexOf(start, 0) === 0;
            }
            return result;
        },
        
        
        endsWith: function(s, end, ignoreCase){
            var result = boundsCheck(s, end);
            
            if (result) {
                if (ignoreCase) {
                    s = s.toLowerCase();
                    end = end.toLowerCase();
                }
                result = s.indexOf(end, s.length - end.length) !== -1;
            }
            return result;
        },

        
        createVarName: function(s) {
            return s.replace(varReplace, '');
        },

        
        htmlEncode: function(value) {
            return (!value) ? value : String(value).replace(charToEntityRegex, htmlEncodeReplaceFn);
        },

        
        htmlDecode: function(value) {
            return (!value) ? value : String(value).replace(entityToCharRegex, htmlDecodeReplaceFn);
        },
        
        
        hasHtmlCharacters: function(s) {
            return charToEntityRegex.test(s);
        },

        
        addCharacterEntities: function(newEntities) {
            var charKeys = [],
                entityKeys = [],
                key, echar;
            for (key in newEntities) {
                echar = newEntities[key];
                entityToChar[key] = echar;
                charToEntity[echar] = key;
                charKeys.push(echar);
                entityKeys.push(key);
            }
            charToEntityRegex = new RegExp('(' + charKeys.join('|') + ')', 'g');
            entityToCharRegex = new RegExp('(' + entityKeys.join('|') + '|&#[0-9]{1,5};' + ')', 'g');
        },

        
        resetCharacterEntities: function() {
            charToEntity = {};
            entityToChar = {};
            
            this.addCharacterEntities({
                '&amp;'     :   '&',
                '&gt;'      :   '>',
                '&lt;'      :   '<',
                '&quot;'    :   '"',
                '&#39;'     :   "'"
            });
        },

        
        urlAppend : function(url, string) {
            if (!Ext.isEmpty(string)) {
                return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
            }

            return url;
        },

        
        trim: function(string) {
            if (string) {
                string = string.replace(trimRegex, "");
            }
            return string || '';
        },

        
        capitalize: function(string) {
            if (string) {
                string = string.charAt(0).toUpperCase() + string.substr(1);
            }
            return string || '';
        },

        
        uncapitalize: function(string) {
            if (string) {
                string = string.charAt(0).toLowerCase() + string.substr(1);
            }
            return string || '';
        },

        
        ellipsis: function(value, length, word) {
            if (value && value.length > length) {
                if (word) {
                    var vs = value.substr(0, length - 2),
                    index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));
                    if (index !== -1 && index >= (length - 15)) {
                        return vs.substr(0, index) + "...";
                    }
                }
                return value.substr(0, length - 3) + "...";
            }
            return value;
        },

        
        escapeRegex: function(string) {
            return string.replace(escapeRegexRe, "\\$1");
        },

        
        createRegex: function (value, startsWith, endsWith, ignoreCase) {
            var ret = value;

            if (value != null && !value.exec) { 
                ret = ExtString.escapeRegex(String(value));

                if (startsWith !== false) {
                    ret = '^' + ret;
                }
                if (endsWith !== false) {
                    ret += '$';
                }

                ret = new RegExp(ret, (ignoreCase !== false) ? 'i' : '');
            }

            return ret;
        },

        
        escape: function(string) {
            return string.replace(escapeRe, "\\$1");
        },

        
        toggle: function(string, value, other) {
            return string === value ? other : value;
        },

        
        leftPad: function(string, size, character) {
            var result = String(string);
            character = character || " ";
            while (result.length < size) {
                result = character + result;
            }
            return result;
        },

        
        format: function(format) {
            var formatFn = formatFns[format] || (formatFns[format] = generateFormatFn(format));
            return formatFn.apply(this, arguments);
        },

        
        repeat: function(pattern, count, sep) {
            if (count < 1) {
                count = 0;
            }
            for (var buf = [], i = count; i--; ) {
                buf.push(pattern);
            }
            return buf.join(sep || '');
        },

        
        splitWords: function (words) {
            if (words && typeof words == 'string') {
                return words.replace(basicTrimRe, '').split(whitespaceRe);
            }
            return words || [];
        }
    };
}());


Ext.String.resetCharacterEntities();


Ext.htmlEncode = Ext.String.htmlEncode;



Ext.htmlDecode = Ext.String.htmlDecode;


Ext.urlAppend = Ext.String.urlAppend;


Ext.Date = (function () {




  var utilDate,
      stripEscapeRe = /(\\.)/g,
      hourInfoRe = /([gGhHisucUOPZ]|MS)/,
      dateInfoRe = /([djzmnYycU]|MS)/,
      slashRe = /\\/gi,
      numberTokenRe = /\{(\d+)\}/g,
      MSFormatRe = new RegExp('\\/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\/'),

      
      
      
      
      code = [
        
        "var me = this, dt, y, m, d, h, i, s, ms, o, O, z, zz, u, v, W, year, jan4, week1monday, daysInMonth, dayMatched,",
            "def = me.defaults,",
            "from = Ext.Number.from,",
            "results = String(input).match(me.parseRegexes[{0}]);", 

        "if(results){",
            "{1}",

            "if(u != null){", 
                "v = new Date(u * 1000);", 
            "}else{",
                
                
                
                "dt = me.clearTime(new Date);",

                "y = from(y, from(def.y, dt.getFullYear()));",
                "m = from(m, from(def.m - 1, dt.getMonth()));",
                "dayMatched = d !== undefined;",
                "d = from(d, from(def.d, dt.getDate()));",
                
                
                
                
                
                
                
                
                "if (!dayMatched) {", 
                    "dt.setDate(1);",
                    "dt.setMonth(m);",
                    "dt.setFullYear(y);",
                
                    "daysInMonth = me.getDaysInMonth(dt);",
                    "if (d > daysInMonth) {",
                        "d = daysInMonth;",
                    "}",
                "}",

                "h  = from(h, from(def.h, dt.getHours()));",
                "i  = from(i, from(def.i, dt.getMinutes()));",
                "s  = from(s, from(def.s, dt.getSeconds()));",
                "ms = from(ms, from(def.ms, dt.getMilliseconds()));",

                "if(z >= 0 && y >= 0){",
                    
                    

                    
                    
                    "v = me.add(new Date(y < 100 ? 100 : y, 0, 1, h, i, s, ms), me.YEAR, y < 100 ? y - 100 : 0);",

                    
                    "v = !strict? v : (strict === true && (z <= 364 || (me.isLeapYear(v) && z <= 365))? me.add(v, me.DAY, z) : null);",
                "}else if(strict === true && !me.isValid(y, m + 1, d, h, i, s, ms)){", 
                    "v = null;", 
                "}else{",
                    "if (W) {", 
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        "year = y || (new Date()).getFullYear();",
                        "jan4 = new Date(year, 0, 4, 0, 0, 0);",
                        "d = jan4.getDay();", 
                        
                        
                        "week1monday = new Date(jan4.getTime() - ((d === 0 ? 6 : d - 1) * 86400000));",
                        
                        
                        
                        
                        "v = Ext.Date.clearTime(new Date(week1monday.getTime() + ((W - 1) * 604800000 + 43200000)));",
                    "} else {",
                        
                        
                        "v = me.add(new Date(y < 100 ? 100 : y, m, d, h, i, s, ms), me.YEAR, y < 100 ? y - 100 : 0);",
                    "}",
                "}",
            "}",
        "}",

        "if(v){",
            
            "if(zz != null){",
                
                "v = me.add(v, me.SECOND, -v.getTimezoneOffset() * 60 - zz);",
            "}else if(o){",
                
                "v = me.add(v, me.MINUTE, -v.getTimezoneOffset() + (sn == '+'? -1 : 1) * (hr * 60 + mn));",
            "}",
        "}",

        "return v;"
      ].join('\n');

    
    
    
    function xf(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(numberTokenRe, function(m, i) {
            return args[i];
        });
    }
  
return utilDate = {
    
    now: Date.now, 

    
    toString: function(date) {
        if (!date) {
            date = new Date();
        }

        var pad = Ext.String.leftPad;

        return date.getFullYear() + "-"
                   + pad(date.getMonth() + 1, 2, '0') + "-"
                   + pad(date.getDate(), 2, '0') + "T"
                   + pad(date.getHours(), 2, '0') + ":"
                   + pad(date.getMinutes(), 2, '0') + ":"
            + pad(date.getSeconds(), 2, '0');
    },

    
    getElapsed: function(dateA, dateB) {
        return Math.abs(dateA - (dateB || utilDate.now()));
    },

    
    useStrict: false,

    
    formatCodeToRegex: function(character, currentGroup) {
        
        var p = utilDate.parseCodes[character];

        if (p) {
          p = typeof p == 'function'? p() : p;
          utilDate.parseCodes[character] = p; 
        }

        return p ? Ext.applyIf({
          c: p.c ? xf(p.c, currentGroup || "{0}") : p.c
        }, p) : {
            g: 0,
            c: null,
            s: Ext.String.escapeRegex(character) 
        };
    },

    
    parseFunctions: {
        "MS": function(input, strict) {
            
            
            var r = (input || '').match(MSFormatRe);
            return r ? new Date(((r[1] || '') + r[2]) * 1) : null;
        },
        "time": function(input, strict) {
            var num = parseInt(input, 10);
            if (num || num === 0) {
                return new Date(num);
            }
            return null;
        },
        "timestamp": function(input, strict) {
            var num = parseInt(input, 10);
            if (num || num === 0) {
                return new Date(num * 1000);
            }
            return null;
        }
    },
    parseRegexes: [],

    
    formatFunctions: {
        "MS": function() {
            
            return '\\/Date(' + this.getTime() + ')\\/';
        },
        "time": function(){
            return this.getTime().toString();
        },
        "timestamp": function(){
            return utilDate.format(this, 'U');
        }
    },

    y2kYear : 50,

    
    MILLI : "ms",

    
    SECOND : "s",

    
    MINUTE : "mi",

    
    HOUR : "h",

    
    DAY : "d",

    
    MONTH : "mo",

    
    YEAR : "y",

    
    defaults: {},

    
    
    dayNames : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    

    
    
    monthNames : [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    

    
    
    monthNumbers : {
        January: 0,
        Jan: 0,
        February: 1,
        Feb: 1,
        March: 2,
        Mar: 2,
        April: 3,
        Apr: 3,
        May: 4,
        June: 5,
        Jun: 5,
        July: 6,
        Jul: 6,
        August: 7,
        Aug: 7,
        September: 8,
        Sep: 8,
        October: 9,
        Oct: 9,
        November: 10,
        Nov: 10,
        December: 11,
        Dec: 11
    },
    
    
    
    
    defaultFormat : "m/d/Y",
    
    
    
    getShortMonthName : function(month) {
        return Ext.Date.monthNames[month].substring(0, 3);
    },
    

    
    
    getShortDayName : function(day) {
        return Ext.Date.dayNames[day].substring(0, 3);
    },
    

    
    
    getMonthNumber : function(name) {
        
        return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
    },
    

    
    formatContainsHourInfo : function(format){
        return hourInfoRe.test(format.replace(stripEscapeRe, ''));
    },

    
    formatContainsDateInfo : function(format){
        return dateInfoRe.test(format.replace(stripEscapeRe, ''));
    },
    
    
    unescapeFormat: function(format) {
        
        
        
        return format.replace(slashRe, '');
    },

    
    formatCodes : {
        d: "Ext.String.leftPad(this.getDate(), 2, '0')",
        D: "Ext.Date.getShortDayName(this.getDay())", 
        j: "this.getDate()",
        l: "Ext.Date.dayNames[this.getDay()]",
        N: "(this.getDay() ? this.getDay() : 7)",
        S: "Ext.Date.getSuffix(this)",
        w: "this.getDay()",
        z: "Ext.Date.getDayOfYear(this)",
        W: "Ext.String.leftPad(Ext.Date.getWeekOfYear(this), 2, '0')",
        F: "Ext.Date.monthNames[this.getMonth()]",
        m: "Ext.String.leftPad(this.getMonth() + 1, 2, '0')",
        M: "Ext.Date.getShortMonthName(this.getMonth())", 
        n: "(this.getMonth() + 1)",
        t: "Ext.Date.getDaysInMonth(this)",
        L: "(Ext.Date.isLeapYear(this) ? 1 : 0)",
        o: "(this.getFullYear() + (Ext.Date.getWeekOfYear(this) == 1 && this.getMonth() > 0 ? +1 : (Ext.Date.getWeekOfYear(this) >= 52 && this.getMonth() < 11 ? -1 : 0)))",
        Y: "Ext.String.leftPad(this.getFullYear(), 4, '0')",
        y: "('' + this.getFullYear()).substring(2, 4)",
        a: "(this.getHours() < 12 ? 'am' : 'pm')",
        A: "(this.getHours() < 12 ? 'AM' : 'PM')",
        g: "((this.getHours() % 12) ? this.getHours() % 12 : 12)",
        G: "this.getHours()",
        h: "Ext.String.leftPad((this.getHours() % 12) ? this.getHours() % 12 : 12, 2, '0')",
        H: "Ext.String.leftPad(this.getHours(), 2, '0')",
        i: "Ext.String.leftPad(this.getMinutes(), 2, '0')",
        s: "Ext.String.leftPad(this.getSeconds(), 2, '0')",
        u: "Ext.String.leftPad(this.getMilliseconds(), 3, '0')",
        O: "Ext.Date.getGMTOffset(this)",
        P: "Ext.Date.getGMTOffset(this, true)",
        T: "Ext.Date.getTimezone(this)",
        Z: "(this.getTimezoneOffset() * -60)",

        c: function() { 
            var c, code, i, l, e;
            for (c = "Y-m-dTH:i:sP", code = [], i = 0, l = c.length; i < l; ++i) {
                e = c.charAt(i);
                code.push(e == "T" ? "'T'" : utilDate.getFormatCode(e)); 
            }
            return code.join(" + ");
        },
        

        U: "Math.round(this.getTime() / 1000)"
    },

    
    isValid : function(y, m, d, h, i, s, ms) {
        
        h = h || 0;
        i = i || 0;
        s = s || 0;
        ms = ms || 0;

        
        var dt = utilDate.add(new Date(y < 100 ? 100 : y, m - 1, d, h, i, s, ms), utilDate.YEAR, y < 100 ? y - 100 : 0);

        return y == dt.getFullYear() &&
            m == dt.getMonth() + 1 &&
            d == dt.getDate() &&
            h == dt.getHours() &&
            i == dt.getMinutes() &&
            s == dt.getSeconds() &&
            ms == dt.getMilliseconds();
    },

    
    parse : function(input, format, strict) {
        var p = utilDate.parseFunctions;
        if (p[format] == null) {
            utilDate.createParser(format);
        }
        return p[format].call(utilDate, input, Ext.isDefined(strict) ? strict : utilDate.useStrict);
    },

    
    parseDate: function(input, format, strict){
        return utilDate.parse(input, format, strict);
    },


    
    getFormatCode : function(character) {
        var f = utilDate.formatCodes[character];

        if (f) {
          f = typeof f == 'function'? f() : f;
          utilDate.formatCodes[character] = f; 
        }

        
        return f || ("'" + Ext.String.escape(character) + "'");
    },

    
    createFormat : function(format) {
        var code = [],
            special = false,
            ch = '',
            i;

        for (i = 0; i < format.length; ++i) {
            ch = format.charAt(i);
            if (!special && ch == "\\") {
                special = true;
            } else if (special) {
                special = false;
                code.push("'" + Ext.String.escape(ch) + "'");
            } else {
                if (ch == '\n') {
                    code.push("'\\n'");
                } else {
                    code.push(utilDate.getFormatCode(ch));
                }
            }
        }
        utilDate.formatFunctions[format] = Ext.functionFactory("return " + code.join('+'));
    },

    
    createParser : function(format) {
        var regexNum = utilDate.parseRegexes.length,
            currentGroup = 1,
            calc = [],
            regex = [],
            special = false,
            ch = "",
            i = 0,
            len = format.length,
            atEnd = [],
            obj;

        for (; i < len; ++i) {
            ch = format.charAt(i);
            if (!special && ch == "\\") {
                special = true;
            } else if (special) {
                special = false;
                regex.push(Ext.String.escape(ch));
            } else {
                obj = utilDate.formatCodeToRegex(ch, currentGroup);
                currentGroup += obj.g;
                regex.push(obj.s);
                if (obj.g && obj.c) {
                    if (obj.calcAtEnd) {
                        atEnd.push(obj.c);
                    } else {
                        calc.push(obj.c);
                    }
                }
            }
        }

        calc = calc.concat(atEnd);

        utilDate.parseRegexes[regexNum] = new RegExp("^" + regex.join('') + "$", 'i');
        utilDate.parseFunctions[format] = Ext.functionFactory("input", "strict", xf(code, regexNum, calc.join('')));
    },

    
    parseCodes : {
        
        d: {
            g:1,
            c:"d = parseInt(results[{0}], 10);\n",
            s:"(3[0-1]|[1-2][0-9]|0[1-9])" 
        },
        j: {
            g:1,
            c:"d = parseInt(results[{0}], 10);\n",
            s:"(3[0-1]|[1-2][0-9]|[1-9])" 
        },
        D: function() {
            for (var a = [], i = 0; i < 7; a.push(utilDate.getShortDayName(i)), ++i); 
            return {
                g:0,
                c:null,
                s:"(?:" + a.join("|") +")"
            };
        },
        l: function() {
            return {
                g:0,
                c:null,
                s:"(?:" + utilDate.dayNames.join("|") + ")"
            };
        },
        N: {
            g:0,
            c:null,
            s:"[1-7]" 
        },
        
        S: {
            g:0,
            c:null,
            s:"(?:st|nd|rd|th)"
        },
        
        w: {
            g:0,
            c:null,
            s:"[0-6]" 
        },
        z: {
            g:1,
            c:"z = parseInt(results[{0}], 10);\n",
            s:"(\\d{1,3})" 
        },
        W: {
            g:1,
            c:"W = parseInt(results[{0}], 10);\n",
            s:"(\\d{2})" 
        },
        F: function() {
            return {
                g:1,
                c:"m = parseInt(me.getMonthNumber(results[{0}]), 10);\n", 
                s:"(" + utilDate.monthNames.join("|") + ")"
            };
        },
        M: function() {
            for (var a = [], i = 0; i < 12; a.push(utilDate.getShortMonthName(i)), ++i); 
            return Ext.applyIf({
                s:"(" + a.join("|") + ")"
            }, utilDate.formatCodeToRegex("F"));
        },
        m: {
            g:1,
            c:"m = parseInt(results[{0}], 10) - 1;\n",
            s:"(1[0-2]|0[1-9])" 
        },
        n: {
            g:1,
            c:"m = parseInt(results[{0}], 10) - 1;\n",
            s:"(1[0-2]|[1-9])" 
        },
        t: {
            g:0,
            c:null,
            s:"(?:\\d{2})" 
        },
        L: {
            g:0,
            c:null,
            s:"(?:1|0)"
        },
        o: { 
            g: 1,
            c: "y = parseInt(results[{0}], 10);\n",
            s: "(\\d{4})" 

        },
        Y: {
            g:1,
            c:"y = parseInt(results[{0}], 10);\n",
            s:"(\\d{4})" 
        },
        y: {
            g:1,
            c:"var ty = parseInt(results[{0}], 10);\n"
                + "y = ty > me.y2kYear ? 1900 + ty : 2000 + ty;\n", 
            s:"(\\d{1,2})"
        },
        
        
        a: {
            g:1,
            c:"if (/(am)/i.test(results[{0}])) {\n"
                + "if (!h || h == 12) { h = 0; }\n"
                + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
            s:"(am|pm|AM|PM)",
            calcAtEnd: true
        },
        
        
        A: {
            g:1,
            c:"if (/(am)/i.test(results[{0}])) {\n"
                + "if (!h || h == 12) { h = 0; }\n"
                + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
            s:"(AM|PM|am|pm)",
            calcAtEnd: true
        },
        
        g: {
            g:1,
            c:"h = parseInt(results[{0}], 10);\n",
            s:"(1[0-2]|[0-9])" 
        },
        G: {
            g:1,
            c:"h = parseInt(results[{0}], 10);\n",
            s:"(2[0-3]|1[0-9]|[0-9])" 
        },
        h: {
            g:1,
            c:"h = parseInt(results[{0}], 10);\n",
            s:"(1[0-2]|0[1-9])" 
        },
        H: {
            g:1,
            c:"h = parseInt(results[{0}], 10);\n",
            s:"(2[0-3]|[0-1][0-9])" 
        },
        i: {
            g:1,
            c:"i = parseInt(results[{0}], 10);\n",
            s:"([0-5][0-9])" 
        },
        s: {
            g:1,
            c:"s = parseInt(results[{0}], 10);\n",
            s:"([0-5][0-9])" 
        },
        u: {
            g:1,
            c:"ms = results[{0}]; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n",
            s:"(\\d+)" 
        },
        O: {
            g:1,
            c:[
                "o = results[{0}];",
                "var sn = o.substring(0,1),", 
                    "hr = o.substring(1,3)*1 + Math.floor(o.substring(3,5) / 60),", 
                    "mn = o.substring(3,5) % 60;", 
                "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n" 
            ].join("\n"),
            s: "([+-]\\d{4})" 
        },
        P: {
            g:1,
            c:[
                "o = results[{0}];",
                "var sn = o.substring(0,1),", 
                    "hr = o.substring(1,3)*1 + Math.floor(o.substring(4,6) / 60),", 
                    "mn = o.substring(4,6) % 60;", 
                "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n" 
            ].join("\n"),
            s: "([+-]\\d{2}:\\d{2})" 
        },
        T: {
            g:0,
            c:null,
            s:"[A-Z]{1,5}" 
        },
        Z: {
            g:1,
            c:"zz = results[{0}] * 1;\n" 
                  + "zz = (-43200 <= zz && zz <= 50400)? zz : null;\n",
            s:"([+-]?\\d{1,5})" 
        },
        c: function() {
            var calc = [],
                arr = [
                    utilDate.formatCodeToRegex("Y", 1), 
                    utilDate.formatCodeToRegex("m", 2), 
                    utilDate.formatCodeToRegex("d", 3), 
                    utilDate.formatCodeToRegex("H", 4), 
                    utilDate.formatCodeToRegex("i", 5), 
                    utilDate.formatCodeToRegex("s", 6), 
                    {c:"ms = results[7] || '0'; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n"}, 
                    {c:[ 
                        "if(results[8]) {", 
                            "if(results[8] == 'Z'){",
                                "zz = 0;", 
                            "}else if (results[8].indexOf(':') > -1){",
                                utilDate.formatCodeToRegex("P", 8).c, 
                            "}else{",
                                utilDate.formatCodeToRegex("O", 8).c, 
                            "}",
                        "}"
                    ].join('\n')}
                ],
                i,
                l;

            for (i = 0, l = arr.length; i < l; ++i) {
                calc.push(arr[i].c);
            }

            return {
                g:1,
                c:calc.join(""),
                s:[
                    arr[0].s, 
                    "(?:", "-", arr[1].s, 
                        "(?:", "-", arr[2].s, 
                            "(?:",
                                "(?:T| )?", 
                                arr[3].s, ":", arr[4].s,  
                                "(?::", arr[5].s, ")?", 
                                "(?:(?:\\.|,)(\\d+))?", 
                                "(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?", 
                            ")?",
                        ")?",
                    ")?"
                ].join("")
            };
        },
        U: {
            g:1,
            c:"u = parseInt(results[{0}], 10);\n",
            s:"(-?\\d+)" 
        }
    },

    
    
    dateFormat: function(date, format) {
        return utilDate.format(date, format);
    },

    
    isEqual: function(date1, date2) {
        
        if (date1 && date2) {
            return (date1.getTime() === date2.getTime());
        }
        
        return !(date1 || date2);
    },

    
    format: function(date, format) {
        var formatFunctions = utilDate.formatFunctions;

        if (!Ext.isDate(date)) {
            return '';
        }

        if (formatFunctions[format] == null) {
            utilDate.createFormat(format);
        }

        return formatFunctions[format].call(date) + '';
    },

    
    getTimezone : function(date) {
        
        
        
        
        
        
        
        
        
        
        
        
        return date.toString().replace(/^.* (?:\((.*)\)|([A-Z]{1,5})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/, "$1$2").replace(/[^A-Z]/g, "");
    },

    
    getGMTOffset : function(date, colon) {
        var offset = date.getTimezoneOffset();
        return (offset > 0 ? "-" : "+")
            + Ext.String.leftPad(Math.floor(Math.abs(offset) / 60), 2, "0")
            + (colon ? ":" : "")
            + Ext.String.leftPad(Math.abs(offset % 60), 2, "0");
    },

    
    getDayOfYear: function(date) {
        var num = 0,
            d = Ext.Date.clone(date),
            m = date.getMonth(),
            i;

        for (i = 0, d.setDate(1), d.setMonth(0); i < m; d.setMonth(++i)) {
            num += utilDate.getDaysInMonth(d);
        }
        return num + date.getDate() - 1;
    },

    
    getWeekOfYear : (function() {
        
        var ms1d = 864e5, 
            ms7d = 7 * ms1d; 

        return function(date) { 
            var DC3 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate() + 3) / ms1d, 
                AWN = Math.floor(DC3 / 7), 
                Wyr = new Date(AWN * ms7d).getUTCFullYear();

            return AWN - Math.floor(Date.UTC(Wyr, 0, 7) / ms7d) + 1;
        };
    }()),

    
    isLeapYear : function(date) {
        var year = date.getFullYear();
        return !!((year & 3) == 0 && (year % 100 || (year % 400 == 0 && year)));
    },

    
    getFirstDayOfMonth : function(date) {
        var day = (date.getDay() - (date.getDate() - 1)) % 7;
        return (day < 0) ? (day + 7) : day;
    },

    
    getLastDayOfMonth : function(date) {
        return utilDate.getLastDateOfMonth(date).getDay();
    },


    
    getFirstDateOfMonth : function(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    },

    
    getLastDateOfMonth : function(date) {
        return new Date(date.getFullYear(), date.getMonth(), utilDate.getDaysInMonth(date));
    },

    
    getDaysInMonth: (function() {
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        return function(date) { 
            var m = date.getMonth();

            return m == 1 && utilDate.isLeapYear(date) ? 29 : daysInMonth[m];
        };
    }()),

    
    
    getSuffix : function(date) {
        switch (date.getDate()) {
            case 1:
            case 21:
            case 31:
                return "st";
            case 2:
            case 22:
                return "nd";
            case 3:
            case 23:
                return "rd";
            default:
                return "th";
        }
    },
    

    
    clone : function(date) {
        return new Date(date.getTime());
    },

    
    isDST : function(date) {
        
        
        return new Date(date.getFullYear(), 0, 1).getTimezoneOffset() != date.getTimezoneOffset();
    },

    
    clearTime : function(date, clone) {
        if (clone) {
            return Ext.Date.clearTime(Ext.Date.clone(date));
        }

        
        var d = date.getDate(),
            hr,
            c;

        
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        if (date.getDate() != d) { 
            
            

            
            for (hr = 1, c = utilDate.add(date, Ext.Date.HOUR, hr); c.getDate() != d; hr++, c = utilDate.add(date, Ext.Date.HOUR, hr));

            date.setDate(d);
            date.setHours(c.getHours());
        }

        return date;
    },

    
    add : function(date, interval, value) {
        var d = Ext.Date.clone(date),
            Date = Ext.Date,
            day, decimalValue, base = 0;
        if (!interval || value === 0) {
            return d;
        }

        decimalValue = value - parseInt(value, 10);
        value = parseInt(value, 10);

        if (value) {
            switch(interval.toLowerCase()) {
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                case Ext.Date.MILLI:
                    d.setTime(d.getTime() + value);
                    break;
                case Ext.Date.SECOND:
                    d.setTime(d.getTime() + value * 1000);
                    break;
                case Ext.Date.MINUTE:
                    d.setTime(d.getTime() + value * 60 * 1000);
                    break;
                case Ext.Date.HOUR:
                    d.setTime(d.getTime() + value * 60 * 60 * 1000);
                    break;
                case Ext.Date.DAY:
                    d.setDate(d.getDate() + value);
                    break;
                case Ext.Date.MONTH:
                    day = date.getDate();
                    if (day > 28) {
                        day = Math.min(day, Ext.Date.getLastDateOfMonth(Ext.Date.add(Ext.Date.getFirstDateOfMonth(date), Ext.Date.MONTH, value)).getDate());
                    }
                    d.setDate(day);
                    d.setMonth(date.getMonth() + value);
                    break;
                case Ext.Date.YEAR:
                    day = date.getDate();
                    if (day > 28) {
                        day = Math.min(day, Ext.Date.getLastDateOfMonth(Ext.Date.add(Ext.Date.getFirstDateOfMonth(date), Ext.Date.YEAR, value)).getDate());
                    }
                    d.setDate(day);
                    d.setFullYear(date.getFullYear() + value);
                    break;
            }
        }

        if (decimalValue) {
            switch (interval.toLowerCase()) {
                case Ext.Date.MILLI:    base = 1;               break;
                case Ext.Date.SECOND:   base = 1000;            break;
                case Ext.Date.MINUTE:   base = 1000*60;         break;
                case Ext.Date.HOUR:     base = 1000*60*60;      break;
                case Ext.Date.DAY:      base = 1000*60*60*24;   break;

                case Ext.Date.MONTH:
                    day = utilDate.getDaysInMonth(d);
                    base = 1000*60*60*24*day;
                    break;

                case Ext.Date.YEAR:
                    day = (utilDate.isLeapYear(d) ? 366 : 365);
                    base = 1000*60*60*24*day;
                    break;
            }
            if (base) {
                d.setTime(d.getTime() + base * decimalValue); 
            }
        }

        return d;
    },
    
    
    subtract: function(date, interval, value){
        return utilDate.add(date, interval, -value);
    },

    
    between : function(date, start, end) {
        var t = date.getTime();
        return start.getTime() <= t && t <= end.getTime();
    },

    
    compat: function() {
        var nativeDate = window.Date,
            p,
            statics = ['useStrict', 'formatCodeToRegex', 'parseFunctions', 'parseRegexes', 'formatFunctions', 'y2kYear', 'MILLI', 'SECOND', 'MINUTE', 'HOUR', 'DAY', 'MONTH', 'YEAR', 'defaults', 'dayNames', 'monthNames', 'monthNumbers', 'getShortMonthName', 'getShortDayName', 'getMonthNumber', 'formatCodes', 'isValid', 'parseDate', 'getFormatCode', 'createFormat', 'createParser', 'parseCodes'],
            proto = ['dateFormat', 'format', 'getTimezone', 'getGMTOffset', 'getDayOfYear', 'getWeekOfYear', 'isLeapYear', 'getFirstDayOfMonth', 'getLastDayOfMonth', 'getDaysInMonth', 'getSuffix', 'clone', 'isDST', 'clearTime', 'add', 'between'],
            sLen    = statics.length,
            pLen    = proto.length,
            stat, prot, s;

        
        for (s = 0; s < sLen; s++) {
            stat = statics[s];
            nativeDate[stat] = utilDate[stat];
        }

        
        for (p = 0; p < pLen; p++) {
            prot = proto[p];
            nativeDate.prototype[prot] = function() {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(this);
                return utilDate[prot].apply(utilDate, args);
            };
        }
    },

    
    diff: function (min, max, unit) {
        var ExtDate = Ext.Date, est, diff = +max - min;
        switch (unit) {
            case ExtDate.MILLI:
                return diff;
            case ExtDate.SECOND:
                return Math.floor(diff / 1000);
            case ExtDate.MINUTE:
                return Math.floor(diff / 60000);
            case ExtDate.HOUR:
                return Math.floor(diff / 3600000);
            case ExtDate.DAY:
                return Math.floor(diff / 86400000);
            case 'w':
                return Math.floor(diff / 604800000);
            case ExtDate.MONTH:
                est = (max.getFullYear() * 12 + max.getMonth()) - (min.getFullYear() * 12 + min.getMonth());
                if (Ext.Date.add(min, unit, est) > max) {
                    return est - 1;
                } else {
                    return est;
                }
            case ExtDate.YEAR:
                est = max.getFullYear() - min.getFullYear();
                if (Ext.Date.add(min, unit, est) > max) {
                    return est - 1;
                } else {
                    return est;
                }
        }
    },

    
    align: function (date, unit, step) {
        var num = new Date(+date);
        switch (unit.toLowerCase()) {
            case Ext.Date.MILLI:
                return num;
                break;
            case Ext.Date.SECOND:
                num.setUTCSeconds(num.getUTCSeconds() - num.getUTCSeconds() % step);
                num.setUTCMilliseconds(0);
                return num;
                break;
            case Ext.Date.MINUTE:
                num.setUTCMinutes(num.getUTCMinutes() - num.getUTCMinutes() % step);
                num.setUTCSeconds(0);
                num.setUTCMilliseconds(0);
                return num;
                break;
            case Ext.Date.HOUR:
                num.setUTCHours(num.getUTCHours() - num.getUTCHours() % step);
                num.setUTCMinutes(0);
                num.setUTCSeconds(0);
                num.setUTCMilliseconds(0);
                return num;
                break;
            case Ext.Date.DAY:
                if (step == 7 || step == 14){
                    num.setUTCDate(num.getUTCDate() - num.getUTCDay() + 1);
                }
                num.setUTCHours(0);
                num.setUTCMinutes(0);
                num.setUTCSeconds(0);
                num.setUTCMilliseconds(0);
                return num;
                break;
            case Ext.Date.MONTH:
                num.setUTCMonth(num.getUTCMonth() - (num.getUTCMonth() - 1) % step,1);
                num.setUTCHours(0);
                num.setUTCMinutes(0);
                num.setUTCSeconds(0);
                num.setUTCMilliseconds(0);
                return num;
                break;
            case Ext.Date.YEAR:
                num.setUTCFullYear(num.getUTCFullYear() - num.getUTCFullYear() % step, 1, 1);
                num.setUTCHours(0);
                num.setUTCMinutes(0);
                num.setUTCSeconds(0);
                num.setUTCMilliseconds(0);
                return date;
                break;
        }
    }
};
}());





Ext.Assert = {

    
    falsey: function (b, msg) {
        if (b) {
            Ext.Error.raise(msg || ('Expected a falsey value but was ' + b));
        }
    },

    
    falseyProp: function (object, property) {
        Ext.Assert.truthy(object);
        var b = object[property];
        if (b) {
            if (object.$className) {
                property = object.$className + '#' + property;
            }
            Ext.Error.raise('Expected a falsey value for ' + property +
                            ' but was ' + b);
        }
    },

    
    truthy: function (b, msg) {
        if (!b) {
            Ext.Error.raise(msg || ('Expected a truthy value but was ' + typeof b));
        }
    },

    
    truthyProp: function (object, property) {
        Ext.Assert.truthy(object);
        var b = object[property];
        if (!b) {
            if (object.$className) {
                property = object.$className + '#' + property;
            }
            Ext.Error.raise('Expected a truthy value for ' + property +
                            ' but was ' + typeof b);
        }
    }
};

(function () {
    function makeAssert (name, kind) {
        var testFn = Ext[name],
            def;
        return function (value, msg) {
            if (!testFn(value)) {
                Ext.Error.raise(msg || def ||
                    (def = 'Expected value to be ' + kind));
            }
        };
    }

    function makeAssertProp (name, kind) {
        var testFn = Ext[name],
            def;
        return function (object, prop) {
            Ext.Assert.truthy(object);
            if (!testFn(object[prop])) {
                Ext.Error.raise(def || (def = 'Expected ' + 
                        (object.$className ? object.$className + '#' : '') +
                        prop + ' to be ' + kind));
            }
        };
    }

    function makeNotAssert (name, kind) {
        var testFn = Ext[name],
            def;
        return function (value, msg) {
            if (testFn(value)) {
                Ext.Error.raise(msg || def ||
                    (def = 'Expected value to NOT be ' + kind));
            }
        };
    }

    function makeNotAssertProp (name, kind) {
        var testFn = Ext[name],
            def;
        return function (object, prop) {
            Ext.Assert.truthy(object);
            if (testFn(object[prop])) {
                Ext.Error.raise(def || (def = 'Expected ' + 
                        (object.$className ? object.$className + '#' : '') +
                        prop + ' to NOT be ' + kind));
            }
        };
    }

    for (var name in Ext) {
        if (name.substring(0,2) == "is" && Ext.isFunction(Ext[name])) {
            var kind = name.substring(2);
            Ext.Assert[name] = makeAssert(name, kind);
            Ext.Assert[name + 'Prop'] = makeAssertProp(name, kind);
            Ext.Assert['isNot' + kind] = makeNotAssert(name, kind);
            Ext.Assert['isNot' + kind + 'Prop'] = makeNotAssertProp(name, kind);
        }
    }
}());




(function() {


var TemplateClass = function(){},
    ExtObject = Ext.Object = {





    
    chain: Object.create || function (object) {
        TemplateClass.prototype = object;
        var result = new TemplateClass();
        TemplateClass.prototype = null;
        return result;
    },

    
    clear: function (object) {
        var keys = ExtObject.getKeys(object),
            n = keys.length;

        while (n--) {
            delete object[keys[n]];
        }

        return object;
    },

    
    freeze: Object.freeze ? function (obj, deep) {
        if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
            Object.freeze(obj);

            if (deep) {
                for (var name in obj) {
                    ExtObject.freeze(obj[name], deep);
                }
            }
        }
        return obj;
    } : Ext.identityFn,

    
    toQueryObjects: function(name, value, recursive) {
        var self = ExtObject.toQueryObjects,
            objects = [],
            i, ln;

        if (Ext.isArray(value)) {
            for (i = 0, ln = value.length; i < ln; i++) {
                if (recursive) {
                    objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                }
                else {
                    objects.push({
                        name: name,
                        value: value[i]
                    });
                }
            }
        }
        else if (Ext.isObject(value)) {
            for (i in value) {
                if (value.hasOwnProperty(i)) {
                    if (recursive) {
                        objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                    }
                    else {
                        objects.push({
                            name: name,
                            value: value[i]
                        });
                    }
                }
            }
        }
        else {
            objects.push({
                name: name,
                value: value
            });
        }

        return objects;
    },

    
    toQueryString: function(object, recursive) {
        var paramObjects = [],
            params = [],
            i, j, ln, paramObject, value;

        for (i in object) {
            if (object.hasOwnProperty(i)) {
                paramObjects = paramObjects.concat(ExtObject.toQueryObjects(i, object[i], recursive));
            }
        }

        for (j = 0, ln = paramObjects.length; j < ln; j++) {
            paramObject = paramObjects[j];
            value = paramObject.value;

            if (Ext.isEmpty(value)) {
                value = '';
            } else if (Ext.isDate(value)) {
                value = Ext.Date.toString(value);
            }

            params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
        }

        return params.join('&');
    },

    
    fromQueryString: function(queryString, recursive) {
        var parts = queryString.replace(/^\?/, '').split('&'),
            object = {},
            temp, components, name, value, i, ln,
            part, j, subLn, matchedKeys, matchedName,
            keys, key, nextKey;

        for (i = 0, ln = parts.length; i < ln; i++) {
            part = parts[i];

            if (part.length > 0) {
                components = part.split('=');
                name = decodeURIComponent(components[0]);
                value = (components[1] !== undefined) ? decodeURIComponent(components[1]) : '';

                if (!recursive) {
                    if (object.hasOwnProperty(name)) {
                        if (!Ext.isArray(object[name])) {
                            object[name] = [object[name]];
                        }

                        object[name].push(value);
                    }
                    else {
                        object[name] = value;
                    }
                }
                else {
                    matchedKeys = name.match(/(\[):?([^\]]*)\]/g);
                    matchedName = name.match(/^([^\[]+)/);

                    if (!matchedName) {
                        throw new Error('[Ext.Object.fromQueryString] Malformed query string given, failed parsing name from "' + part + '"');
                    }

                    name = matchedName[0];
                    keys = [];

                    if (matchedKeys === null) {
                        object[name] = value;
                        continue;
                    }

                    for (j = 0, subLn = matchedKeys.length; j < subLn; j++) {
                        key = matchedKeys[j];
                        key = (key.length === 2) ? '' : key.substring(1, key.length - 1);
                        keys.push(key);
                    }

                    keys.unshift(name);

                    temp = object;

                    for (j = 0, subLn = keys.length; j < subLn; j++) {
                        key = keys[j];

                        if (j === subLn - 1) {
                            if (Ext.isArray(temp) && key === '') {
                                temp.push(value);
                            }
                            else {
                                temp[key] = value;
                            }
                        }
                        else {
                            if (temp[key] === undefined || typeof temp[key] === 'string') {
                                nextKey = keys[j+1];

                                temp[key] = (Ext.isNumeric(nextKey) || nextKey === '') ? [] : {};
                            }

                            temp = temp[key];
                        }
                    }
                }
            }
        }

        return object;
    },

    
    each: function(object, fn, scope) {
        scope = scope || object;

        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                if (fn.call(scope, property, object[property], object) === false) {
                    return;
                }
            }
        }
    },

    
    eachValue: function(object, fn, scope) {
        scope = scope || object;

        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                if (fn.call(scope, object[property]) === false) {
                    return;
                }
            }
        }
    },

    
    merge: function(destination) {
        var i = 1,
            ln = arguments.length,
            mergeFn = ExtObject.merge,
            cloneFn = Ext.clone,
            object, key, value, sourceKey;

        for (; i < ln; i++) {
            object = arguments[i];

            for (key in object) {
                value = object[key];
                if (value && value.constructor === Object) {
                    sourceKey = destination[key];
                    if (sourceKey && sourceKey.constructor === Object) {
                        mergeFn(sourceKey, value);
                    } else {
                        destination[key] = cloneFn(value);
                    }
                } else {
                    destination[key] = value;
                }
            }
        }

        return destination;
    },

    
    mergeIf: function(destination) {
        var i = 1,
            ln = arguments.length,
            cloneFn = Ext.clone,
            object, key, value;

        for (; i < ln; i++) {
            object = arguments[i];

            for (key in object) {
                if (!(key in destination)) {
                    value = object[key];

                    if (value && value.constructor === Object) {
                        destination[key] = cloneFn(value);
                    }
                    else {
                        destination[key] = value;
                    }
                }
            }
        }

        return destination;
    },

    
    getKey: function(object, value) {
        for (var property in object) {
            if (object.hasOwnProperty(property) && object[property] === value) {
                return property;
            }
        }

        return null;
    },

    
    getValues: function(object) {
        var values = [],
            property;

        for (property in object) {
            if (object.hasOwnProperty(property)) {
                values.push(object[property]);
            }
        }

        return values;
    },

    
    getKeys: (typeof Object.keys == 'function')
        ? function(object){
            if (!object) {
                return [];
            }
            return Object.keys(object);
        }
        : function(object) {
            var keys = [],
                property;

            for (property in object) {
                if (object.hasOwnProperty(property)) {
                    keys.push(property);
                }
            }

            return keys;
        },

    
    getSize: function(object) {
        var size = 0,
            property;

        for (property in object) {
            if (object.hasOwnProperty(property)) {
                size++;
            }
        }

        return size;
    },
    
    
    isEmpty: function(object){
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;    
    },
    
    
    equals: (function() {
        var check = function(o1, o2) {
            var key;
        
            for (key in o1) {
                if (o1.hasOwnProperty(key)) {
                    if (o1[key] !== o2[key]) {
                        return false;
                    }    
                }
            }    
            return true;
        };
        
        return function(object1, object2) {
            
            
            if (object1 === object2) {
                return true;
            } if (object1 && object2) {
                
                
                return check(object1, object2) && check(object2, object1);  
            } else if (!object1 && !object2) {
                return object1 === object2;
            } else {
                return false;
            }
        };
    })(),

    
    fork: function (obj) {
        var ExtArray = Ext.Array,
            ret, key, value;

        if (obj && obj.constructor === Object) {
            ret = ExtObject.chain(obj);

            for (key in obj) {
                value = obj[key];

                if (value) {
                    if (value.constructor === Object) {
                        ret[key] = ExtObject.fork(value);
                    } else if (value instanceof Array) {
                        ret[key] = Ext.Array.clone(value);
                    }
                }
            }
        } else {
            ret = obj;
        }

        return ret;
    },

    defineProperty: ('defineProperty' in Object) ? Object.defineProperty :
                function(object, name, descriptor) {
                    if (!Object.prototype.__defineGetter__) {
                        return;
                    }
                    if (descriptor.get) {
                        object.__defineGetter__(name, descriptor.get);
                    }

                    if (descriptor.set) {
                        object.__defineSetter__(name, descriptor.set);
                    }
                },

    
    classify: function(object) {
        var prototype = object,
            objectProperties = [],
            propertyClassesMap = {},
            objectClass = function() {
                var i = 0,
                    ln = objectProperties.length,
                    property;

                for (; i < ln; i++) {
                    property = objectProperties[i];
                    this[property] = new propertyClassesMap[property]();
                }
            },
            key, value;

        for (key in object) {
            if (object.hasOwnProperty(key)) {
                value = object[key];

                if (value && value.constructor === Object) {
                    objectProperties.push(key);
                    propertyClassesMap[key] = ExtObject.classify(value);
                }
            }
        }

        objectClass.prototype = prototype;

        return objectClass;
    }
};


Ext.merge = Ext.Object.merge;


Ext.mergeIf = Ext.Object.mergeIf;

}());


Ext.apply(Ext, {




    escapeId: (function(){
        var validIdRe = /^[a-zA-Z_][a-zA-Z0-9_\-]*$/i,
            escapeRx = /([\W]{1})/g,
            leadingNumRx = /^(\d)/g,
            escapeFn = function(match, capture){
                return "\\" + capture;
            },
            numEscapeFn = function(match, capture){
                return '\\00' + capture.charCodeAt(0).toString(16) + ' ';
            };

        return function(id) {
            return validIdRe.test(id)
                ? id
                
                
                : id.replace(escapeRx, escapeFn)
                    .replace(leadingNumRx, numEscapeFn);
        };
    }()),

    
    callback: function (callback, scope, args, delay, caller, defaultScope) {
        if (!callback) {
            return;
        }

        var isThis = scope === 'this';
        
        if (callback.charAt) { 
            if ((!scope || isThis) && caller) {
                scope = caller.resolveListenerScope(isThis ? scope : defaultScope);
            }
            if (!scope || !Ext.isObject(scope)) {
                Ext.Error.raise('Named method "' + callback + '" requires a scope object');
            }
            if (!Ext.isFunction(scope[callback])) {
                Ext.Error.raise('No method named "' + callback + '" on ' +
                                (scope.$className || 'scope object'));
            }

            callback = scope[callback];
        } else if (isThis) {
            scope = defaultScope || caller;
        } else if (!scope) {
            scope = caller;
        }
        
        var ret;

        if (callback && Ext.isFunction(callback)) {
            scope = scope || Ext.global;
            if (delay) {
                Ext.defer(callback, delay, scope, args);
            } else if (args) {
                ret = callback.apply(scope, args);
            } else {
                ret = callback.call(scope);
            }
        }

        return ret;
    },

    
    coerce: function(from, to) {
        var fromType = Ext.typeOf(from),
            toType = Ext.typeOf(to),
            isString = typeof from === 'string';

        if (fromType !== toType) {
            switch (toType) {
                case 'string':
                    return String(from);
                case 'number':
                    return Number(from);
                case 'boolean':
                    return isString && (!from || from === 'false') ? false : Boolean(from);
                case 'null':
                    return isString && (!from || from === 'null') ? null : from;
                case 'undefined':
                    return isString && (!from || from === 'undefined') ? undefined : from;
                case 'date':
                    return isString && isNaN(from) ? Ext.Date.parse(from, Ext.Date.defaultFormat) : Date(Number(from));
            }
        }
        return from;
    },

    
    copyTo : function(dest, source, names, usePrototypeKeys){
        if(typeof names == 'string'){
            names = names.split(/[,;\s]/);
        }

        var n,
            nLen = names? names.length : 0,
            name;

        for(n = 0; n < nLen; n++) {
            name = names[n];

            if (usePrototypeKeys || source.hasOwnProperty(name)){
                dest[name] = source[name];
            }
        }

        return dest;
    },

    
    extend: (function() {
        
        var objectConstructor = Object.prototype.constructor,
            inlineOverrides = function(o) {
            for (var m in o) {
                if (!o.hasOwnProperty(m)) {
                    continue;
                }
                this[m] = o[m];
            }
        };

        return function(subclass, superclass, overrides) {
            
            if (Ext.isObject(superclass)) {
                overrides = superclass;
                superclass = subclass;
                subclass = overrides.constructor !== objectConstructor ? overrides.constructor : function() {
                    superclass.apply(this, arguments);
                };
            }

            if (!superclass) {
                Ext.Error.raise({
                    sourceClass: 'Ext',
                    sourceMethod: 'extend',
                    msg: 'Attempting to extend from a class which has not been loaded on the page.'
                });
            }

            
            var F = function() {},
                subclassProto, superclassProto = superclass.prototype;

            F.prototype = superclassProto;
            subclassProto = subclass.prototype = new F();
            subclassProto.constructor = subclass;
            subclass.superclass = superclassProto;

            if (superclassProto.constructor === objectConstructor) {
                superclassProto.constructor = superclass;
            }

            subclass.override = function(overrides) {
                Ext.override(subclass, overrides);
            };

            subclassProto.override = inlineOverrides;
            subclassProto.proto = subclassProto;

            subclass.override(overrides);
            subclass.extend = function(o) {
                return Ext.extend(subclass, o);
            };

            return subclass;
        };
    }()),

    
    iterate: function(object, fn, scope) {
        if (Ext.isEmpty(object)) {
            return;
        }

        if (scope === undefined) {
            scope = object;
        }

        if (Ext.isIterable(object)) {
            Ext.Array.each.call(Ext.Array, object, fn, scope);
        }
        else {
            Ext.Object.each.call(Ext.Object, object, fn, scope);
        }
    },

    
    urlEncode: function () {
        var args = Ext.Array.from(arguments),
            prefix = '';

        
        if (Ext.isString(args[1])) {
            prefix = args[1] + '&';
            args[1] = false;
        }

        return prefix + Ext.Object.toQueryString.apply(Ext.Object, args);
    },

    
    urlDecode: function() {
        return Ext.Object.fromQueryString.apply(Ext.Object, arguments);
    },

    
    getScrollbarSize: function (force) {
        if (!Ext.isReady) {
            return {};
        }

        var scrollbarSize = Ext._scrollbarSize;

        if (force || !scrollbarSize) {
            var db = document.body,
                div = document.createElement('div');

            div.style.width = div.style.height = '100px';
            div.style.overflow = 'scroll';
            div.style.position = 'absolute';

            db.appendChild(div); 

            
            Ext._scrollbarSize = scrollbarSize = {
                width: div.offsetWidth - div.clientWidth,
                height: div.offsetHeight - div.clientHeight
            };

            db.removeChild(div);
        }

        return scrollbarSize;
    },

    
    typeOf: (function () {
        var nonWhitespaceRe = /\S/,
            toString = Object.prototype.toString,
            typeofTypes = {
                number: 1,
                string: 1,
                'boolean': 1,
                'undefined': 1
            },
            toStringTypes = {
                '[object Array]'  : 'array',
                '[object Date]'   : 'date',
                '[object Boolean]': 'boolean',
                '[object Number]' : 'number',
                '[object RegExp]' : 'regexp'
            };

        return function(value) {
            if (value === null) {
                return 'null';
            }

            var type = typeof value,
                ret, typeToString;

            if (typeofTypes[type]) {
                return type;
            }

            ret = toStringTypes[typeToString = toString.call(value)];
            if (ret) {
                return ret;
            }

            if (type === 'function') {
                return 'function';
            }

            if (type === 'object') {
                if (value.nodeType !== undefined) {
                    if (value.nodeType === 3) {
                        return nonWhitespaceRe.test(value.nodeValue) ? 'textnode' : 'whitespace';
                    }
                    else {
                        return 'element';
                    }
                }

                return 'object';
            }

            Ext.Error.raise({
                sourceClass: 'Ext',
                sourceMethod: 'typeOf',
                msg: 'Failed to determine the type of "' + value + '".'
            });

            return typeToString;
        };
    }()),

    
    factory: function(config, classReference, instance, aliasNamespace) {
        var manager = Ext.ClassManager,
            newInstance;

        
        
        if (!config || config.isInstance) {
            if (instance && instance !== config) {
                instance.destroy();
            }

            return config;
        }

        if (aliasNamespace) {
             
            if (typeof config == 'string') {
                return manager.instantiateByAlias(aliasNamespace + '.' + config);
            }
            
            else if (Ext.isObject(config) && 'type' in config) {
                return manager.instantiateByAlias(aliasNamespace + '.' + config.type, config);
            }
        }

        if (config === true) {
            return instance || Ext.create(classReference);
        }

        if (!Ext.isObject(config)) {
            Ext.Logger.error("Invalid config, must be a valid config object");
        }

        if ('xtype' in config) {
            newInstance = manager.instantiateByAlias('widget.' + config.xtype, config);
        }
        else if ('xclass' in config) {
            newInstance = Ext.create(config.xclass, config);
        }

        if (newInstance) {
            if (instance) {
                instance.destroy();
            }

            return newInstance;
        }

        if (instance) {
            return instance.setConfig(config);
        }

        return Ext.create(classReference, config);
    },

    
    log:
        (function () {
            
            var primitiveRe = /string|number|boolean/;
            function dumpObject (object, level, maxLevel, withFunctions) {
                var member, type, value, name, prefix, suffix,
                    members = [];

                if (Ext.isArray(object)) {
                    prefix = '[';
                    suffix = ']';
                } else if (Ext.isObject(object)) {
                    prefix = '{';
                    suffix = '}';
                }
                if (!maxLevel) {
                    maxLevel = 3;
                }
                if (level > maxLevel) {
                    return prefix+'...'+suffix;
                }

                level = level || 1;
                var spacer = (new Array(level)).join('    ');

                
                for (name in object) {
                    if (object.hasOwnProperty(name)) {
                        value = object[name];

                        type = typeof value;
                        if (type == 'function') {
                            if (!withFunctions) {
                                continue;
                            }
                            member = type;
                        } else if (type == 'undefined') {
                            member = type;
                        } else if (value === null || primitiveRe.test(type) || Ext.isDate(value)) {
                            member = Ext.encode(value);
                        } else if (Ext.isArray(value)) {
                            member = this.dumpObject(value, level+1, maxLevel, withFunctions);
                        } else if (Ext.isObject(value)) {
                            member = this.dumpObject(value, level+1, maxLevel, withFunctions);
                        } else {
                            member = type;
                        }
                        members.push(spacer + name + ': ' + member);    
                    }
                }
                if (members.length) {
                    return prefix + '\n    '+ members.join(',\n    ') + '\n'+spacer+suffix;
                }
                return prefix+suffix;
            }

            function log (message) {
                var options, dump,
                    con = Ext.global.console,
                    level = 'log',
                    indent = log.indent || 0,
                    stack,
                    out,
                    max;

                log.indent = indent;

                if (typeof message != 'string') {
                    options = message;
                    message = options.msg || '';
                    level = options.level || level;
                    dump = options.dump;
                    stack = options.stack;

                    if (options.indent) {
                        ++log.indent;
                    } else if (options.outdent) {
                        log.indent = indent = Math.max(indent - 1, 0);
                    }

                    if (dump && !(con && con.dir)) {
                        message += dumpObject(dump);
                        dump = null;
                    }
                }

                if (arguments.length > 1) {
                    message += Array.prototype.slice.call(arguments, 1).join('');
                }

                message = indent ? Ext.String.repeat(' ', log.indentSize * indent) + message : message;
                
                if (level != 'log') {
                    message = '[' + level.charAt(0).toUpperCase() + '] ' + message;
                }

                
                
                
                if (con) { 
                    if (con[level]) {
                        con[level](message);
                    } else {
                        con.log(message);
                    }

                    if (dump) {
                        con.dir(dump);
                    }

                    if (stack && con.trace) {
                        
                        if (!con.firebug || level != 'error') {
                            con.trace();
                        }
                    }
                } else if (Ext.isOpera) {
                    opera.postError(message);
                } else {
                    out = log.out;
                    max = log.max;

                    if (out.length >= max) {
                        
                        
                        Ext.Array.erase(out, 0, out.length - 3 * Math.floor(max / 4)); 
                    }

                    out.push(message);
                }

                
                ++log.count;
                ++log.counters[level];
            }

            function logx (level, args) {
                if (typeof args[0] == 'string') {
                    args.unshift({});
                }
                args[0].level = level;
                log.apply(this, args);
            }

            log.error = function () {
                logx('error', Array.prototype.slice.call(arguments));
            };
            log.info = function () {
                logx('info', Array.prototype.slice.call(arguments));
            };
            log.warn = function () {
                logx('warn', Array.prototype.slice.call(arguments));
            };

            log.count = 0;
            log.counters = { error: 0, warn: 0, info: 0, log: 0 };
            log.indentSize = 2;
            log.out = [];
            log.max = 750;

            return log;
        }()) ||
        (function () {
            var nullLog = function () {};
            nullLog.info = nullLog.warn = nullLog.error = Ext.emptyFn;
            return nullLog;
        }())
});


(function() {


    var 
        checkVerTemp = [''],
        endOfVersionRe = /([^\d\.])/,
        notDigitsRe = /[^\d]/g,
        plusMinusRe = /[\-+]/g,
        stripRe = /\s/g,
        underscoreRe = /_/g,
        Version;

    Ext.Version = Version = function(version, defaultMode) {
            var me = this,
                padModes = me.padModes,
                ch, i, pad, parts, release, releaseStartIndex, ver;

            if (version.isVersion) {
                version = version.version;
            }

            me.version = ver = String(version).toLowerCase().
                                    replace(underscoreRe, '.').replace(plusMinusRe, '');

            ch = ver.charAt(0);
            if (ch in padModes) {
                ver = ver.substring(1);
                pad = padModes[ch];
            } else {
                pad = defaultMode ? padModes[defaultMode] : 0; 
            }
            me.pad = pad;

            releaseStartIndex = ver.search(endOfVersionRe);
            me.shortVersion = ver;

            if (releaseStartIndex !== -1) {
                me.release = release = ver.substr(releaseStartIndex, version.length);
                me.shortVersion = ver.substr(0, releaseStartIndex);
                release = Version.releaseValueMap[release] || release;
            }

            me.releaseValue = release || pad;
            me.shortVersion = me.shortVersion.replace(notDigitsRe, '');

            
            me.parts = parts = ver.split('.');
            for (i = parts.length; i--; ) {
                parts[i] = parseInt(parts[i], 10);
            }
            if (pad === Infinity) {
                
                parts.push(pad);
            }

            
            me.major = parts[0] || pad;

            
            me.minor = parts[1] || pad;

            
            me.patch = parts[2] || pad;

            
            me.build = parts[3] || pad;

            return me;
    };

    Version.prototype = {
        isVersion: true,

        padModes: {
            '~': NaN,
            '^': Infinity
        },

        
        release: '',

        
        compareTo: function (other) {
             
             
            var me = this,
                lhsPad = me.pad,
                lhsParts = me.parts,
                lhsLength = lhsParts.length,
                rhsVersion = other.isVersion ? other : new Version(other),
                rhsPad = rhsVersion.pad,
                rhsParts = rhsVersion.parts,
                rhsLength = rhsParts.length,
                length = Math.max(lhsLength, rhsLength),
                i, lhs, rhs;

            for (i = 0; i < length; i++) {
                lhs = (i < lhsLength) ? lhsParts[i] : lhsPad;
                rhs = (i < rhsLength) ? rhsParts[i] : rhsPad;

                
                
                if (lhs < rhs) {
                    return -1;
                }
                if (lhs > rhs) {
                    return 1;
                }
            }

            
            lhs = me.releaseValue;
            rhs = rhsVersion.releaseValue;
            if (lhs < rhs) {
                return -1;
            }
            if (lhs > rhs) {
                return 1;
            }

            return 0;
        },
               
        
        toString: function() {
            return this.version;
        },

        
        valueOf: function() {
            return this.version;
        },

        
        getMajor: function() {
            return this.major;
        },

        
        getMinor: function() {
            return this.minor;
        },

        
        getPatch: function() {
            return this.patch;
        },

        
        getBuild: function() {
            return this.build;
        },

        
        getRelease: function() {
            return this.release;
        },

        
        getReleaseValue: function() {
            return this.releaseValue;
        },

        
        isGreaterThan: function(target) {
            return this.compareTo(target) > 0;
        },

        
        isGreaterThanOrEqual: function(target) {
            return this.compareTo(target) >= 0;
        },

        
        isLessThan: function(target) {
            return this.compareTo(target) < 0;
        },

        
        isLessThanOrEqual: function(target) {
            return this.compareTo(target) <= 0;
        },

        
        equals: function(target) {
            return this.compareTo(target) === 0;
        },

        
        match: function(target) {
            target = String(target);
            return this.version.substr(0, target.length) === target;
        },

        
        toArray: function() {
            var me = this;
            return [me.getMajor(), me.getMinor(), me.getPatch(), me.getBuild(), me.getRelease()];
        },

        
        getShortVersion: function() {
            return this.shortVersion;
        },

        
        gt: function (target) {
            return this.compareTo(target) > 0;
        },

        
        lt: function (target) {
            return this.compareTo(target) < 0;
        },

        
        gtEq: function (target) {
            return this.compareTo(target) >= 0;
        },

        
        ltEq: function (target) {
            return this.compareTo(target) <= 0;
        }
    };

    Ext.apply(Version, {
        aliases: {
            from: {
                extjs: 'ext',
                core: 'sencha-core'
            },
            to: {
                ext: ['extjs'],
                'sencha-core': ['core']
            }
        },

        
        releaseValueMap: {
            dev:   -6,
            alpha: -5,
            a:     -5,
            beta:  -4,
            b:     -4,
            rc:    -3,
            '#':   -2,
            p:     -1,
            pl:    -1
        },

        
        getComponentValue: function(value) {
            return !value ? 0 : (isNaN(value) ? this.releaseValueMap[value] || value : parseInt(value, 10));
        },

        
        compare: function (current, target) {
            var ver = current.isVersion ? current : new Version(current);
            return ver.compareTo(target);
        },

        set: function (collection, packageName, version) {
            var aliases = Version.aliases.to[packageName],
                ver = version.isVersion ? version : new Version(version),
                i;

            collection[packageName] = ver;
            if (aliases) {
                for (i = aliases.length; i-- > 0; ) {
                    collection[aliases[i]] = ver;
                }
            }

            return ver;
        }
    });

    
    Ext.apply(Ext, {
        
        compatVersions: {},

        
        versions: {},

        
        lastRegisteredVersion: null,

        
        getCompatVersion: function (packageName) {
            var versions = Ext.compatVersions,
                compat;

            if (!packageName) {
                compat = versions.ext || versions.touch || versions.core;
            } else {
                compat = versions[Version.aliases.from[packageName] || packageName];
            }

            return compat || Ext.getVersion(packageName);
        },

        
        setCompatVersion: function (packageName, version) {
            Version.set(Ext.compatVersions, packageName, version);
        },

        
        setVersion: function (packageName, version) {
            Ext.lastRegisteredVersion = Version.set(Ext.versions, packageName, version);
            return this;
        },

        
        getVersion: function (packageName) {
            var versions = Ext.versions;

            if (!packageName) {
                return versions.ext || versions.touch || versions.core;
            }

            return versions[Version.aliases.from[packageName] || packageName];
        },

        
        checkVersion: function (specs, matchAll) {
            var isArray = Ext.isArray(specs),
                aliases = Version.aliases.from,
                compat = isArray ? specs : checkVerTemp,
                length = compat.length,
                versions = Ext.versions,
                frameworkVer = versions.ext || versions.touch,
                i, index, matches, minVer, maxVer, packageName, spec, range, ver;

            if (!isArray) {
                checkVerTemp[0] = specs;
            }

            for (i = 0; i < length; ++i) {
                if (!Ext.isString(spec = compat[i])) {
                    matches = Ext.checkVersion(spec.and || spec.or, !spec.or);
                    if (spec.not) {
                        matches = !matches;
                    }
                } else {
                    if (spec.indexOf(' ') >= 0) {
                        spec = spec.replace(stripRe, '');
                    }

                    
                    
                    index = spec.indexOf('@');
                    if (index < 0) {
                        range = spec;
                        ver = frameworkVer;
                    } else {
                        packageName = spec.substring(0, index);
                        if (!(ver = versions[aliases[packageName] || packageName])) {
                            
                            
                            if (matchAll) {
                                return false;
                            }
                            
                            
                            continue;
                        }
                        range = spec.substring(index+1);
                    }

                    
                    index = range.indexOf('-');
                    if (index < 0) {
                        
                        if (range.charAt(index = range.length - 1) === '+') {
                            minVer = range.substring(0, index);
                            maxVer = null;
                        } else {
                            minVer = maxVer = range;
                        }
                    } else if (index > 0) {
                        
                        minVer = range.substring(0, index);
                        maxVer = range.substring(index+1); 
                    } else {
                        
                        minVer = null;
                        maxVer = range.substring(index+1);
                    }

                    matches = true;
                    if (minVer) {
                        minVer = new Version(minVer, '~'); 
                        matches = minVer.ltEq(ver);
                    }
                    if (matches && maxVer) {
                        maxVer = new Version(maxVer, '~'); 
                        matches = maxVer.gtEq(ver);
                    }
                } 

                if (matches) {
                    
                    if (!matchAll) {
                        return true;
                    }
                } else if (matchAll) {
                    
                    return false;
                }
            }

            
            
            
            
            return !!matchAll;
        },

        
        deprecate: function(packageName, since, closure, scope) {
            if (Version.compare(Ext.getVersion(packageName), since) < 1) {
                closure.call(scope);
            }
        }
    }); 
}());


(function (manifest){
    var packages = (manifest && manifest.packages) || {},
        compat = manifest && manifest.compatibility,
        name, pkg;
    
    for (name in packages) {
        pkg = packages[name];
        Ext.setVersion(name, pkg.version);
    }

    if (compat) {
        if (Ext.isString(compat)) {
            Ext.setCompatVersion('core', compat);
        } else {
            for (name in compat) {
                Ext.setCompatVersion(name, compat[name]);
            }
        }
    }

    if (!packages.ext && !packages.touch) {
        Ext.setVersion('ext', '5');
    }
})(Ext.manifest);


Ext.Config = function (name) {



    var me = this,
        capitalizedName = name.charAt(0).toUpperCase() + name.substr(1);

    me.name = name;
    me.names = {
        internal: '_' + name,
        initializing: 'is' + capitalizedName + 'Initializing',
        apply: 'apply' + capitalizedName,
        update: 'update' + capitalizedName,
        set: 'set' + capitalizedName,
        get: 'get' + capitalizedName,
        initGet: 'initGet' + capitalizedName,
        doSet : 'doSet' + capitalizedName,
        changeEvent: name.toLowerCase() + 'change'
    };
};

Ext.Config.map = {};

Ext.Config.get = function (name) {
    var map = Ext.Config.map,
        ret = map[name] || (map[name] = new Ext.Config(name));

    return ret;
};

Ext.Config.prototype = {
    self: Ext.Config,

    isConfig: true,

    getGetter: function () {
        return this.getter || (this.getter = this.makeGetter());
    },
    
    getInitGetter: function () {
        return this.initGetter || (this.initGetter = this.makeInitGetter());
    },

    getSetter: function () {
        return this.setter || (this.setter = this.makeSetter());
    },
    
    getInternalName: function(proto) {
        return proto.$configPrefixed ? this.names.internal : this.name;
    },

    
    

    makeGetter: function(proto) {
        var name = this.name,
            prefixedName = this.names.internal;

        return function() {
            var internalName = this.$configPrefixed ? prefixedName : name;
            return this[internalName];
        };
    },

    makeInitGetter: function () {
        var name = this.name,
            names = this.names,
            setName = names.set,
            getName = names.get,
            initializingName = names.initializing;

        return function() {
            var me = this;

            me[initializingName] = true;
            
            delete me[getName];

            me[setName](me.config[name]);
            delete me[initializingName];

            return me[getName].apply(me, arguments);
        };
    },

    makeSetter: function (proto) {
        var name = this.name,
            names = this.names,
            prefixedName = names.internal,
            getName = names.get,
            applyName = names.apply,
            updateName = names.update,
            setter;

        setter = function(value) {
            var me = this,
                internalName = me.$configPrefixed ? prefixedName : name,
                oldValue = me[internalName],
                applier = me[applyName],
                updater = me[updateName];

            
            delete me[getName];

            if (!applier || (value = applier.call(me, value, oldValue)) !== undefined) {
                
                
                if (value !== (oldValue = me[internalName])) {
                    me[internalName] = value;

                    if (updater) {
                        updater.call(me, value, oldValue);
                    }
                }
            }

            return me;
        };

        setter.$isDefault = true;

        return setter;
    }
};


(function () { 

var ExtConfig = Ext.Config,
    configPropMap = ExtConfig.map,
    ExtObject = Ext.Object;

Ext.Configurator = function (cls) {




    var me = this,
        prototype = cls.prototype,
        zuper = cls.superclass ? cls.superclass.self.$config : null;

    
    me.cls = cls;
    
    if (zuper) {
        
        me.configs = ExtObject.chain(zuper.configs);
        
        
        me.cachedConfigs = ExtObject.chain(zuper.cachedConfigs);

        
        me.initMap = ExtObject.chain(zuper.initMap);

        
        me.values = ExtObject.chain(zuper.values);
    } else {
        me.configs = {};
        me.cachedConfigs = {};
        me.initMap = {};
        me.values = {};
    }

    prototype.config = prototype.defaultConfig = me.values;
    cls.$config = me;
};

Ext.Configurator.prototype = {
    self: Ext.Configurator,

    
    initList: null,

    
    add: function (config, isMixin) {
        var me = this,
            Cls = me.cls,
            configs = me.configs,
            cachedConfigs = me.cachedConfigs,
            initMap = me.initMap,
            prototype = Cls.prototype,
            values = me.values,
            isObject, meta, isCached, merge,
            cfg, currentValue, name, names, s, value;

        isMixin = !!isMixin;
        
        for (name in config) {
            value = config[name];
            isObject = value && value.constructor === Object;
            meta = isObject && '$value' in value ? value : null;
            if (meta) {
                isCached = !!meta.cached;
                merge = meta.merge;
                value = meta.$value;
                delete meta.$value;
            }

            cfg = configs[name];
            if (cfg) {
                
                if (isMixin) {
                    merge = cfg.merge;
                    if (!merge) {
                        continue;
                    }
                    
                    meta = null;
                } else {
                    merge = merge || cfg.merge;
                }
                
                
                
                
                if (!isMixin && isCached && !cachedConfigs[name]) {
                    Ext.Error.raise('Redefining config as cached: ' + name + ' in class: ' + Cls.$className);
                }

                
                
                
                currentValue = values[name];

                if (merge) {
                    value = merge.call(Cls, value, currentValue, isMixin);
                } else if (isObject) {
                    if (currentValue && currentValue.constructor === Object) {
                        
                        
                        
                        
                        
                        value = ExtObject.merge({}, currentValue, value);
                    }
                    
                }
                
            } else {
                
                
                
                configs[name] = cfg = ExtConfig.get(name);
                if (isCached) {
                   cachedConfigs[name] = true;
                }

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                names = cfg.names;
                if (!prototype[s = names.get]) {
                    prototype[s] = cfg.getGetter();
                }
                if (!prototype[s = names.set]) {
                    prototype[s] = cfg.getSetter();
                }
            }

            if (meta) {
                if (cfg.owner !== Cls) {
                    configs[name] = cfg = Ext.Object.chain(cfg);
                    cfg.owner = Cls;
                }
                Ext.apply(cfg, meta);
            }

            
            if (value !== null) {
                initMap[name] = true;
            } else {
                if (prototype.$configPrefixed) {
                    prototype[configs[name].names.internal] = null;
                } else {
                    prototype[configs[name].name] = null;
                }
                if (name in initMap) {
                    
                    initMap[name] = false;
                }
            }
            values[name] = value;
        }
    },

    
    configure: function (instance, instanceConfig) {
        var me = this,
            configs = me.configs,
            initMap = me.initMap,
            initListMap = me.initListMap,
            initList = me.initList,
            prototype = me.cls.prototype,
            
            
            values = ExtObject.fork(me.values),
            notStrict = !instance.$configStrict,
            remaining = 0,
            firstInstance = !initList,
            cachedInitList, cfg, getter, needsInit, i, internalName,
            ln, names, name, value, isCached, merge, valuesKey;

        if (firstInstance) {
            
            
            me.initList = initList = [];
            me.initListMap = initListMap = {};

            for (name in initMap) {
                needsInit = initMap[name];
                cfg = configs[name];
                isCached = cfg.cached;
                if (needsInit) {
                    names = cfg.names;
                    value = values[name];

                    if (!prototype[names.set].$isDefault
                                || prototype[names.apply] || prototype[names.update]
                                || typeof value === 'object') {
                        if (isCached) {
                            
                            
                            
                            
                            
                            (cachedInitList || (cachedInitList = [])).push(cfg);
                        } else {
                            
                            
                            initList.push(cfg);
                            initListMap[name] = true;
                        }

                        
                        
                        
                        instance[names.get] = cfg.initGetter || cfg.getInitGetter();
                    } else {
                        
                        
                        prototype[cfg.getInternalName(prototype)] = value;
                    }
                } else if (isCached) {
                    prototype[cfg.getInternalName(prototype)] = undefined;
                }
            }
        }

        if (cachedInitList) {
            
            
            
            

            for (i = 0, ln = cachedInitList.length; i < ln; ++i) {
                names = (cfg = cachedInitList[i]).names;
                name = cfg.name;
                getter = names.get;
                internalName = cfg.getInternalName(prototype);
                instance[internalName] = null;

                instance[names.set](values[name]);
                delete instance[getter];

                prototype[internalName] = instance[internalName];
            }

            
            
        }

        if (firstInstance) {
            
            
            
            if (instance.afterCachedConfig && !instance.afterCachedConfig.$nullFn) {
                instance.afterCachedConfig(instanceConfig);
            }
        }

        
        
        
        instance.config = values;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        for (i = 0, ln = initList.length; i < ln; ++i) {
            cfg = initList[i];
            instance[cfg.names.get] = cfg.initGetter || cfg.getInitGetter();
        }

        
        
        
        
        
        
        
        
        
        
        
        
        if (instanceConfig) {
            for (name in instanceConfig) {
                value = instanceConfig[name];
                cfg = configs[name];
                if (!cfg) {
                    
                    
                    if (notStrict) {
                        instance[name] = value;
                    }
                } else {
                    
                    
                    if (!cfg.lazy) {
                        ++remaining;    
                    }
                    if (!initListMap[name]) {
                        instance[cfg.names.get] = cfg.initGetter || cfg.getInitGetter();
                    }

                    merge = cfg.merge;
                    if (merge) {
                        value = merge.call(instance, value, values[name], false);
                    } else if (value && value.constructor === Object) {
                        valuesKey = values[name];
                        if (valuesKey && valuesKey.constructor === Object) {
                            value = ExtObject.merge(values[name], value);
                        } else {
                            value = Ext.clone(value);
                        }
                    }
                }
                values[name] = value;
            }
        }

        
        if (instance.beforeInitConfig && !instance.beforeInitConfig.$nullFn) {
            if (instance.beforeInitConfig(instanceConfig) === false) {
                return;
            }
        }

        if (instanceConfig) {
            for (name in instanceConfig) {
                if (!remaining) {
                    
                    
                    break;
                }

                cfg = configs[name];
                if (cfg && !cfg.lazy) {
                    --remaining;
                    
                    names = cfg.names;
                    getter = names.get;

                    
                    
                    
                    
                    if (instance.hasOwnProperty(getter)) {
                        instance[names.set](values[name]);

                        
                        
                        
                        delete instance[names.get];
                    }
                }
            }
        }

        
        for (i = 0, ln = initList.length; i < ln; ++i) {
            cfg = initList[i];
            names = cfg.names;
            getter = names.get;

            if (!cfg.lazy && instance.hasOwnProperty(getter)) {
                
                
                
                
                instance[names.set](values[cfg.name]);
                delete instance[getter];
            }
        }
    },

    getCurrentConfig: function (instance) {
        var defaultConfig = instance.defaultConfig,
            config = {},
            name;

        for (name in defaultConfig) {
            config[name] = instance[configPropMap[name].names.get]();
        }

        return config;
    },

    reconfigure: function (instance, instanceConfig, onlyIfNotSet) {
        var currentConfig = instance.config,
            defaultConfig = instance.defaultConfig,
            initialConfig = instance.initialConfig,
            configList = [],
            cfg, getter, i, len, name, names;

        for (name in instanceConfig) {
            if (onlyIfNotSet && (name in initialConfig)) {
                continue;
            }

            currentConfig[name] = instanceConfig[name];

            if (name in defaultConfig) {
                configList.push(name);
                cfg = configPropMap[name];
                instance[cfg.names.get] = cfg.initGetter || cfg.getInitGetter();
            }
        }

        for (i = 0, len = configList.length; i < len; i++) {
            name = configList[i];
            names = configPropMap[name].names;
            getter = names.get;

            if (instance.hasOwnProperty(getter)) {
                
                
                
                
                instance[names.set](instanceConfig[name]);
                delete instance[getter];
            }
        }
    }
};

}()); 



Ext.Base = (function(flexSetter) {





var noArgs = [],
    baseStaticMember,
    baseStaticMembers = [],
    getConfig = function (name, peek) {
        var me = this,
            ret, cfg, getterName;

        if (name) {
            cfg = Ext.Config.map[name];
            if (!cfg) {
                Ext.Logger.error("Invalid property name for getter: '" + name + "' for '" + me.$className + "'.");
            }
            getterName = cfg.names.get;
            if (peek && me.hasOwnProperty(getterName)) {
                ret = me.config[name];
            } else {
                ret = me[getterName]();
            }
        } else {
            ret = me.getCurrentConfig();
        }
        return ret;
    },
    makeDeprecatedMethod = function (oldName, newName, msg) {
        var message = '"'+ oldName +'" is deprecated.';

        if (msg) {
            message += ' ' + msg;
        } else if (newName) {
            message += ' Please use "'+ newName +'" instead.';
        }

        return function () {
            Ext.Error.raise(message);
        };
    },
    addDeprecatedProperty = function (object, oldName, newName, message) {
        if (!message) {
            message = '"' + oldName + '" is deprecated.';
        }
        if (newName) {
            message += ' Please use "' + newName + '" instead.';
        }

        if (message) {
            Ext.Object.defineProperty(object, oldName, {
                get: function() {
                    Ext.Error.raise(message);
                },
                set: function(value) {
                    Ext.Error.raise(message);
                },
                configurable: true
            });
        }
    },
    makeAliasFn = function (name) {
        return function () {
            return this[name].apply(this, arguments);
        };
    },
    Version = Ext.Version,
    leadingDigitRe = /^\d/,
    oneMember = {},
    aliasOneMember = {},
    Base = function(){},
    BasePrototype = Base.prototype;


    
    Ext.apply(Base, {
        $className: 'Ext.Base',

        $isClass: true,

        
        create: function() {
            return Ext.create.apply(Ext, [this].concat(Array.prototype.slice.call(arguments, 0)));
        },

        
        addDeprecations: function (deprecations) {
            var me = this,
                all = [],
                compatVersion = Ext.getCompatVersion(deprecations.name),
                displayName = (me.$className || '') + '#',
                deprecate, versionSpec, index, message, target,
                enabled, existing, fn, names, oldName, newName, member, statics, version;

            for (versionSpec in deprecations) {
                if (leadingDigitRe.test(versionSpec)) {
                    version = new Ext.Version(versionSpec);
                    version.deprecations = deprecations[versionSpec];
                    all.push(version);
                }
            }

            all.sort(Version.compare);

            for (index = all.length; index--; ) {
                deprecate = (version = all[index]).deprecations;
                target = me.prototype;
                statics = deprecate.statics;

                
                
                
                
                
                
                enabled = compatVersion && compatVersion.lt(version);

                if (!enabled) {} else
                if (!enabled) {
                    
                    break;
                }

                while (deprecate) {
                    names = deprecate.methods;
                    if (names) {
                        for (oldName in names) {
                            member = names[oldName];
                            fn = null;

                            if (!member) {
                                

                                
                                Ext.Assert.isNotDefinedProp(target, oldName);

                                fn = makeDeprecatedMethod(displayName + oldName);
                            } else if (Ext.isString(member)) {
                                

                                
                                Ext.Assert.isNotDefinedProp(target, oldName);
                                Ext.Assert.isDefinedProp(target, member);

                                if (enabled) {
                                    
                                    
                                    fn = makeAliasFn(member);
                                }
                                else {
                                    fn = makeDeprecatedMethod(displayName + oldName, member);
                                }
                            } else {
                                
                                message = '';
                                if (member.message || member.fn) {
                                    message = member.message;
                                    member = member.fn;
                                }

                                existing = target.hasOwnProperty(oldName) && target[oldName];

                                if (enabled && member) {
                                    member.$owner = me;
                                    member.$name = oldName;
                                    member.displayName = displayName + oldName;
                                    if (existing) {
                                        member.$previous = existing;
                                    }

                                    fn = member;
                                }
                                else if (!existing) {
                                    fn = makeDeprecatedMethod(displayName + oldName, null,
                                                              message);
                                }
                            }

                            if (fn) {
                                target[oldName] = fn;
                            }
                        } 
                    }

                    names = deprecate.properties;
                    if (names && !enabled) {
                        
                        
                        
                        for (oldName in names) {
                            newName = names[oldName];

                            if (Ext.isString(newName)) {
                                addDeprecatedProperty(target, displayName + oldName, newName);
                            } else if (newName && newName.message) {
                                addDeprecatedProperty(target, displayName + oldName, null,
                                                      newName.message);
                            } else {
                                addDeprecatedProperty(target, displayName + oldName);
                            }
                        }
                    }

                    
                    deprecate = statics;
                    statics = null;
                    target = me;
                }
            }
        },

        
        extend: function(parent) {
            var me = this,
                parentPrototype = parent.prototype,
                prototype, i, ln, name, statics;

            prototype = me.prototype = Ext.Object.chain(parentPrototype);
            prototype.self = me;

            me.superclass = prototype.superclass = parentPrototype;

            if (!parent.$isClass) {
                for (i in BasePrototype) {
                    if (i in prototype) {
                        prototype[i] = BasePrototype[i];
                    }
                }
            }

            
            statics = parentPrototype.$inheritableStatics;

            if (statics) {
                for (i = 0,ln = statics.length; i < ln; i++) {
                    name = statics[i];

                    if (!me.hasOwnProperty(name)) {
                        me[name] = parent[name];
                    }
                }
            }

            if (parent.$onExtended) {
                me.$onExtended = parent.$onExtended.slice();
            }

            me.getConfigurator();
        },

        
        $onExtended: [],

        
        triggerExtended: function() {
            Ext.classSystemMonitor && Ext.classSystemMonitor(this, 'Ext.Base#triggerExtended', arguments);
        
            var callbacks = this.$onExtended,
                ln = callbacks.length,
                i, callback;

            if (ln > 0) {
                for (i = 0; i < ln; i++) {
                    callback = callbacks[i];
                    callback.fn.apply(callback.scope || this, arguments);
                }
            }
        },

        
        onExtended: function(fn, scope) {
            this.$onExtended.push({
                fn: fn,
                scope: scope
            });

            return this;
        },

        
        addStatics: function (members) {
            this.addMembers(members, true);
            return this;
        },

        
        addInheritableStatics: function(members) {
            var inheritableStatics,
                hasInheritableStatics,
                prototype = this.prototype,
                name, member;

            inheritableStatics = prototype.$inheritableStatics;
            hasInheritableStatics = prototype.$hasInheritableStatics;

            if (!inheritableStatics) {
                inheritableStatics = prototype.$inheritableStatics = [];
                hasInheritableStatics = prototype.$hasInheritableStatics = {};
            }

            var className = Ext.getClassName(this) + '.';

            for (name in members) {
                if (members.hasOwnProperty(name)) {
                    member = members[name];
                    if (typeof member == 'function') {
                        member.displayName = className + name;
                    }
                    this[name] = member;

                    if (!hasInheritableStatics[name]) {
                        hasInheritableStatics[name] = true;
                        inheritableStatics.push(name);
                    }
                }
            }

            return this;
        },

        
        addMembers: function (members, isStatic, isPrivate) {
            var me = this, 
                cloneFunction = Ext.Function.clone,
                target = isStatic ? me : me.prototype,
                defaultConfig = !isStatic && target.defaultConfig,
                enumerables = Ext.enumerables,
                privates = members.privates,
                configs, i, ln, member, name;

            var displayName = (me.$className || '') + '#';

            if (privates) {
                
                
                delete members.privates;
                me.addMembers(privates, isStatic, true);
            }

            for (name in members) {
                if (members.hasOwnProperty(name)) {
                    member = members[name];

                    if (typeof member === 'function' && !member.$isClass && !member.$nullFn) {
                        if (member.$owner) {
                            member = cloneFunction(member);
                        }

                        if (target.hasOwnProperty(name)) {
                            member.$previous = target[name];
                        }

                        
                        
                        member.$owner = me;
                        member.$name = name;

                        member.displayName = displayName + name;

                        if (isPrivate) {
                            member.$private = true;
                            if (target[name] && !target[name].$private) {
                                Ext.log.warn('Private method "' + name + '" declared by ' +
                                     me.$className + (target[name].$owner
                                        ? ' hides public method inherited from ' +
                                            target[name].$owner.$className
                                        : ' hides inherited public method.'));
                            }
                        } else {
                            
                            
                            if (target[name] && target[name].$private) {
                                Ext.Error.raise('Public method "' + name + '" declared by ' +
                                    me.$className + (target[name].$owner
                                        ? ' conflicts with private method declared by ' +
                                            target[name].$owner.$className
                                        : ' conflicts with inherited private method.'));
                            }
                        }
                    } else if (defaultConfig && (name in defaultConfig)) {
                        
                        
                        (configs || (configs = {}))[name] = member;
                        continue;
                    }

                    target[name] = member;
                }
            }

            if (configs) {
                
                me.addConfig(configs);
            }

            if (enumerables) {
                for (i = 0, ln = enumerables.length; i < ln; ++i) {
                    if (members.hasOwnProperty(name = enumerables[i])) {
                        member = members[name];

                        
                        if (member && !member.$nullFn) {
                            if (member.$owner) {
                                member = cloneFunction(member);
                            }

                            member.$owner = me;
                            member.$name = name;
                            member.displayName = displayName + name;

                            if (target.hasOwnProperty(name)) {
                                member.$previous = target[name];
                            }
                        }

                        target[name] = member;
                    }
                }
            }

            return this;
        },

        
        addMember: function (name, member) {
            oneMember[name] = member;
            this.addMembers(oneMember);
            delete oneMember[name];
            return this;
        },

        
        borrow: function(fromClass, members) {
            Ext.classSystemMonitor && Ext.classSystemMonitor(this, 'Ext.Base#borrow', arguments);

            var prototype = fromClass.prototype,
                membersObj = {},
                i, ln, name;

            members = Ext.Array.from(members);

            for (i = 0,ln = members.length; i < ln; i++) {
                name = members[i];
                membersObj[name] = prototype[name];
            }

            return this.addMembers(membersObj);
        },

        
        override: function(members) {
            var me = this,
                statics = members.statics,
                inheritableStatics = members.inheritableStatics,
                config = members.config,
                mixins = members.mixins,
                cachedConfig = members.cachedConfig;

            if (statics || inheritableStatics || config) {
                members = Ext.apply({}, members);
            }

            if (statics) {
                me.addMembers(statics, true);
                delete members.statics;
            }

            if (inheritableStatics){
                me.addInheritableStatics(inheritableStatics);
                delete members.inheritableStatics;
            }

            if (config) {
                me.addConfig(config);
                delete members.config;
            }
            
            if (cachedConfig) {
                me.addCachedConfig(cachedConfig);
                delete members.cachedConfig;
            }
            
            delete members.mixins;

            me.addMembers(members);
            if (mixins) {
                me.mixin(mixins);
            }
            return me;
        },

        
        callParent: function(args) {
            var method;

            
            return (method = this.callParent.caller) && (method.$previous ||
                  ((method = method.$owner ? method : method.caller) &&
                        method.$owner.superclass.self[method.$name])).apply(this, args || noArgs);
        },

        
        callSuper: function(args) {
            var method;

            
            return (method = this.callSuper.caller) &&
                    ((method = method.$owner ? method : method.caller) &&
                      method.$owner.superclass.self[method.$name]).apply(this, args || noArgs);
        },

        
        mixin: function(name, mixinClass) {
            var me = this,
                mixin, prototype, key, statics, i, ln, staticName, mixinValue, mixins;

            if (typeof name !== 'string') {
                mixins = name;
                if (mixins instanceof Array) {
                    for (i = 0,ln = mixins.length; i < ln; i++) {
                        mixin = mixins[i];
                        me.mixin(mixin.prototype.mixinId || mixin.$className, mixin);
                    }
                } else {
                    
                    
                    
                    
                    for (var mixinName in mixins) {
                        me.mixin(mixinName, mixins[mixinName]);
                    }
                }
                return;
            }

            mixin = mixinClass.prototype;
            prototype = me.prototype;

            if (mixin.onClassMixedIn) {
                mixin.onClassMixedIn.call(mixinClass, me);
            }

            if (!prototype.hasOwnProperty('mixins')) {
                if ('mixins' in prototype) {
                    prototype.mixins = Ext.Object.chain(prototype.mixins);
                }
                else {
                    prototype.mixins = {};
                }
            }

            for (key in mixin) {
                mixinValue = mixin[key];
                if (key === 'mixins') {
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    Ext.applyIf(prototype.mixins, mixinValue);
                }
                else if (!(key === 'mixinId' || key === 'config') && (prototype[key] === undefined)) {
                    prototype[key] = mixinValue;
                }
            }

            
            statics = mixin.$inheritableStatics;

            if (statics) {
                for (i = 0, ln = statics.length; i < ln; i++) {
                    staticName = statics[i];

                    if (!me.hasOwnProperty(staticName)) {
                        me[staticName] = mixinClass[staticName];
                    }
                }
            }

            if ('config' in mixin) {
                me.addConfig(mixin.config, true);
            }

            prototype.mixins[name] = mixin;
            return me;
        },

        
        addConfig: function (config, isMixin) {
            var cfg = this.$config || this.getConfigurator();
            cfg.add(config, isMixin);
        },

        addCachedConfig: function(config, isMixin) {
            var cached = {};
            for (key in config) {
                cached[key] = {
                    cached: true,
                    $value: config[key]
                };
            }
            this.addConfig(cached, isMixin);
        },

        
        getConfigurator: function () {
            
            return this.$config || new Ext.Configurator(this);
        },

        
        getName: function() {
            return Ext.getClassName(this);
        },

        
        createAlias: flexSetter(function(alias, origin) {
            aliasOneMember[alias] = function() {
                return this[origin].apply(this, arguments);
            };
            this.override(aliasOneMember);
            delete aliasOneMember[alias];
        })
    });

    
    
    for (baseStaticMember in Base) {
        if (Base.hasOwnProperty(baseStaticMember)) {
            baseStaticMembers.push(baseStaticMember);
        }
    }

    Base.$staticMembers = baseStaticMembers;

    Base.getConfigurator(); 

    Base.addMembers({
        
        isInstance: true,

        
        $className: 'Ext.Base',
        
        
        $configPrefixed: true,
        
        
        $configStrict: true,

        
        statics: function() {
            var method = this.statics.caller,
                self = this.self;

            if (!method) {
                return self;
            }

            return method.$owner;
        },

        
        callParent: function(args) {
            
            
            
            
            var method,
                superMethod = (method = this.callParent.caller) && (method.$previous ||
                        ((method = method.$owner ? method : method.caller) &&
                                method.$owner.superclass[method.$name]));

            if (!superMethod) {
                method = this.callParent.caller;
                var parentClass, methodName;

                if (!method.$owner) {
                    if (!method.caller) {
                        throw new Error("Attempting to call a protected method from the public scope, which is not allowed");
                    }

                    method = method.caller;
                }

                parentClass = method.$owner.superclass;
                methodName = method.$name;

                if (!(methodName in parentClass)) {
                    throw new Error("this.callParent() was called but there's no such method (" + methodName +
                                ") found in the parent class (" + (Ext.getClassName(parentClass) || 'Object') + ")");
                }
            }

            return superMethod.apply(this, args || noArgs);
        },

        
        callSuper: function(args) {
            
            
            
            
            var method,
                superMethod = (method = this.callSuper.caller) &&
                        ((method = method.$owner ? method : method.caller) &&
                          method.$owner.superclass[method.$name]);

            if (!superMethod) {
                method = this.callSuper.caller;
                var parentClass, methodName;

                if (!method.$owner) {
                    if (!method.caller) {
                        throw new Error("Attempting to call a protected method from the public scope, which is not allowed");
                    }

                    method = method.caller;
                }

                parentClass = method.$owner.superclass;
                methodName = method.$name;

                if (!(methodName in parentClass)) {
                    throw new Error("this.callSuper() was called but there's no such method (" + methodName +
                                ") found in the parent class (" + (Ext.getClassName(parentClass) || 'Object') + ")");
                }
            }

            return superMethod.apply(this, args || noArgs);
        },

        
        self: Base,

        
        constructor: function() {
            return this;
        },

        getConfigurator: function () {
            
            return this.$config || this.self.getConfigurator();
        },

        
        initConfig: function(instanceConfig) {
            var me = this,
                cfg = me.getConfigurator();

            me.initConfig = Ext.emptyFn; 
            me.initialConfig = instanceConfig || {};
            cfg.configure(me, instanceConfig);

            return me;
        },

        beforeInitConfig: Ext.emptyFn,

        
        getConfig: getConfig,

        
        setConfig: function(name, value) {
            var me = this,
                cfg;
            
            if (typeof name === 'string') {
                cfg = Ext.Config.map[name];
                if (!cfg) {
                    Ext.Logger.error("Invalid property name for setter: '" + name + "' for '" + this.$className + "'.");
                }
                this[cfg.names.set](value);
            } else if (name) {
                
                me.getConfigurator().reconfigure(me, name);
            }

            return me;
        },

        
        getCurrentConfig: function() {
            var cfg = this.getConfigurator();

            return cfg.getCurrentConfig(this);
        },

        
        hasConfig: function(name) {
            return name in this.defaultConfig;
        },

        
        getInitialConfig: function(name) {
            var config = this.config;

            if (!name) {
                return config;
            }

            return config[name];
        },

        
        link: function(name, value) {
            var links = this.$links || (this.$links = {});

            links[name] = true;
            this[name] = value;

            return value;
        },

        
        unlink: function() {
            var i, ln, link, value;

            for (i = 0, ln = arguments.length; i < ln; i++) {
                link = arguments[i];
                if (this.hasOwnProperty(link)) {
                    value = this[link];
                    if (value) {
                        if (value.isInstance && !value.isDestroyed) {
                            value.destroy();
                        }
                        else if (value.parentNode && 'nodeType' in value) {
                            value.parentNode.removeChild(value);
                        }
                    }
                    delete this[link];
                }
            }

            return this;
        },

        
        destroy: function() {
            this.destroy = Ext.emptyFn;
            this.isDestroyed = true;

            if (this.hasOwnProperty('$links')) {
                this.unlink.apply(this, Ext.Object.getKeys(this.$links));
                this.$links = null;
            }
        }
    });

    
    BasePrototype.callOverridden = BasePrototype.callParent;

    return Base;
}(Ext.Function.flexSetter));



(function() {



    var ExtClass,
        Base = Ext.Base,
        baseStaticMembers = Base.$staticMembers;

    
    function makeCtor (className) {
        function constructor () {
            
            
            return this.constructor.apply(this, arguments) || null;
        }
        if (className) {
            constructor.displayName = className;
        }
        return constructor;
    }

    
    Ext.Class = ExtClass = function(Class, data, onCreated) {
        if (typeof Class != 'function') {
            onCreated = data;
            data = Class;
            Class = null;
        }

        if (!data) {
            data = {};
        }

        Class = ExtClass.create(Class, data);

        ExtClass.process(Class, data, onCreated);

        return Class;
    };

    Ext.apply(ExtClass, {
        
        makeCtor: makeCtor,
        
        
        onBeforeCreated: function(Class, data, hooks) {
            Ext.classSystemMonitor && Ext.classSystemMonitor(Class, '>> Ext.Class#onBeforeCreated', arguments);
        
            Class.addMembers(data);

            hooks.onCreated.call(Class, Class);

            Ext.classSystemMonitor && Ext.classSystemMonitor(Class, '<< Ext.Class#onBeforeCreated', arguments);
        },

        
        create: function (Class, data) {
            var i = baseStaticMembers.length,
                name;

            if (!Class) {
                Class = makeCtor(
                    data.$className
                );
            }

            while (i--) {
                name = baseStaticMembers[i];
                Class[name] = Base[name];
            }

            return Class;
        },

        
        process: function(Class, data, onCreated) {
            var preprocessorStack = data.preprocessors || ExtClass.defaultPreprocessors,
                registeredPreprocessors = this.preprocessors,
                hooks = {
                    onBeforeCreated: this.onBeforeCreated
                },
                preprocessors = [],
                preprocessor, preprocessorsProperties,
                i, ln, j, subLn, preprocessorProperty;

            delete data.preprocessors;
            Class._classHooks = hooks;

            for (i = 0,ln = preprocessorStack.length; i < ln; i++) {
                preprocessor = preprocessorStack[i];

                if (typeof preprocessor == 'string') {
                    preprocessor = registeredPreprocessors[preprocessor];
                    preprocessorsProperties = preprocessor.properties;

                    if (preprocessorsProperties === true) {
                        preprocessors.push(preprocessor.fn);
                    }
                    else if (preprocessorsProperties) {
                        for (j = 0,subLn = preprocessorsProperties.length; j < subLn; j++) {
                            preprocessorProperty = preprocessorsProperties[j];

                            if (data.hasOwnProperty(preprocessorProperty)) {
                                preprocessors.push(preprocessor.fn);
                                break;
                            }
                        }
                    }
                }
                else {
                    preprocessors.push(preprocessor);
                }
            }

            hooks.onCreated = onCreated ? onCreated : Ext.emptyFn;
            hooks.preprocessors = preprocessors;

            this.doProcess(Class, data, hooks);
        },
        
        doProcess: function(Class, data, hooks) {
            var me = this,
                preprocessors = hooks.preprocessors,
                preprocessor = preprocessors.shift(),
                doProcess = me.doProcess;

            for ( ; preprocessor ; preprocessor = preprocessors.shift()) {
                
                if (preprocessor.call(me, Class, data, hooks, doProcess) === false) {
                    return;
                }
            }
            hooks.onBeforeCreated.apply(me, arguments);
        },

        
        preprocessors: {},

        
        registerPreprocessor: function(name, fn, properties, position, relativeTo) {
            if (!position) {
                position = 'last';
            }

            if (!properties) {
                properties = [name];
            }

            this.preprocessors[name] = {
                name: name,
                properties: properties || false,
                fn: fn
            };

            this.setDefaultPreprocessorPosition(name, position, relativeTo);

            return this;
        },

        
        getPreprocessor: function(name) {
            return this.preprocessors[name];
        },

        
        getPreprocessors: function() {
            return this.preprocessors;
        },

        
        defaultPreprocessors: [],

        
        getDefaultPreprocessors: function() {
            return this.defaultPreprocessors;
        },

        
        setDefaultPreprocessors: function(preprocessors) {
            this.defaultPreprocessors = Ext.Array.from(preprocessors);

            return this;
        },

        
        setDefaultPreprocessorPosition: function(name, offset, relativeName) {
            var defaultPreprocessors = this.defaultPreprocessors,
                index;

            if (typeof offset == 'string') {
                if (offset === 'first') {
                    defaultPreprocessors.unshift(name);

                    return this;
                }
                else if (offset === 'last') {
                    defaultPreprocessors.push(name);

                    return this;
                }

                offset = (offset === 'after') ? 1 : -1;
            }

            index = Ext.Array.indexOf(defaultPreprocessors, relativeName);

            if (index !== -1) {
                Ext.Array.splice(defaultPreprocessors, Math.max(0, index + offset), 0, name);
            }

            return this;
        }
    });

    
    ExtClass.registerPreprocessor('extend', function(Class, data, hooks) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(Class, 'Ext.Class#extendPreProcessor', arguments);
        
        var Base = Ext.Base,
            basePrototype = Base.prototype,
            extend = data.extend,
            Parent, parentPrototype, i;

        delete data.extend;

        if (extend && extend !== Object) {
            Parent = extend;
        }
        else {
            Parent = Base;
        }

        parentPrototype = Parent.prototype;

        if (!Parent.$isClass) {
            for (i in basePrototype) {
                if (!parentPrototype[i]) {
                    parentPrototype[i] = basePrototype[i];
                }
            }
        }

        Class.extend(Parent);

        Class.triggerExtended.apply(Class, arguments);

        if (data.onClassExtended) {
            Class.onExtended(data.onClassExtended, Class);
            delete data.onClassExtended;
        }

    }, true); 

    ExtClass.registerPreprocessor('privates', function(Class, data) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(Class, 'Ext.Class#privatePreprocessor', arguments);

        var privates = data.privates,
            statics = privates.statics;

        delete data.privates;
        delete privates.statics;

        
        
        
        Class.addMembers(privates, false, true);
        if (statics) {
            Class.addMembers(statics, true, true);
        }
    });

    
    ExtClass.registerPreprocessor('statics', function(Class, data) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(Class, 'Ext.Class#staticsPreprocessor', arguments);
        
        Class.addStatics(data.statics);

        delete data.statics;
    });

    
    ExtClass.registerPreprocessor('inheritableStatics', function(Class, data) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(Class, 'Ext.Class#inheritableStaticsPreprocessor', arguments);
        
        Class.addInheritableStatics(data.inheritableStatics);

        delete data.inheritableStatics;
    });

    
    ExtClass.registerPreprocessor('platformConfig', function(Class, data, hooks) {
        var platformConfigs = data.platformConfig,
            config = data.config || {},
            themeName = Ext.theme || (Ext.theme = {
                name: 'Default'
            }),
            platform, theme, platformConfig, i, ln, j , ln2;

        delete data.platformConfig;
        themeName = themeName && themeName.name;

        if (!Ext.filterPlatform) {
            Ext.filterPlatform = function(platform) {
                var profileMatch = false,
                    ua = navigator.userAgent,
                    j, jln;

                platform = [].concat(platform);

                function isPhone(ua) {
                    var isMobile = /Mobile(\/|\s)/.test(ua);

                    
                    
                    
                    

                    return /(iPhone|iPod)/.test(ua) ||
                              (!/(Silk)/.test(ua) && (/(Android)/.test(ua) && (/(Android 2)/.test(ua) || isMobile))) ||
                              (/(BlackBerry|BB)/.test(ua) && isMobile) ||
                              /(Windows Phone)/.test(ua);
                }

                function isTablet(ua) {
                    return !isPhone(ua) && (/iPad/.test(ua) || /Android/.test(ua) || /(RIM Tablet OS)/.test(ua) ||
                        (/MSIE 10/.test(ua) && /; Touch/.test(ua)));
                }

                
                var paramsString = window.location.search.substr(1),
                    paramsArray = paramsString.split("&"),
                    params = {},
                    testPlatform, i;

                for (i = 0; i < paramsArray.length; i++) {
                    var tmpArray = paramsArray[i].split("=");
                    params[tmpArray[0]] = tmpArray[1];
                }

                testPlatform = params.platform;
                if (testPlatform) {
                    return platform.indexOf(testPlatform) != -1;
                }

                for (j = 0, jln = platform.length; j < jln; j++) {
                    switch (platform[j]) {
                        case 'phone':
                            profileMatch = isPhone(ua);
                            break;
                        case 'tablet':
                            profileMatch = isTablet(ua);
                            break;
                        case 'desktop':
                            profileMatch = !isPhone(ua) && !isTablet(ua);
                            break;
                        case 'ios':
                            profileMatch = /(iPad|iPhone|iPod)/.test(ua);
                            break;
                        case 'android':
                            profileMatch = /(Android|Silk)/.test(ua);
                            break;
                        case 'blackberry':
                            profileMatch = /(BlackBerry|BB)/.test(ua);
                            break;
                        case 'safari':
                            profileMatch = /Safari/.test(ua) && !(/(BlackBerry|BB)/.test(ua));
                            break;
                        case 'chrome':
                            profileMatch = /Chrome/.test(ua);
                            break;
                        case 'ie10':
                            profileMatch = /MSIE 10/.test(ua);
                            break;
                    }
                    if (profileMatch) {
                        return true;
                    }
                }
                return false;
            };
        }

        for (i = 0, ln = platformConfigs.length; i < ln; i++) {
            platformConfig = platformConfigs[i];

            platform = platformConfig.platform;
            delete platformConfig.platform;

            theme = [].concat(platformConfig.theme);
            ln2 = theme.length;
            delete platformConfig.theme;

            if (platform && Ext.filterPlatform(platform)) {
                Ext.merge(config, platformConfig);
            }

            if (ln2) {
                for (j = 0; j < ln2; j++) {
                    if (Ext.theme.name == theme[j]) {
                        Ext.merge(config, platformConfig);
                    }
                }
            }
        }
    });

    
    ExtClass.registerPreprocessor('config', function(Class, data) {
        
        if (data.hasOwnProperty('$configPrefixed')) {
            Class.prototype.$configPrefixed = data.$configPrefixed;
        }
        Class.addConfig(data.config);
    });
    
    
    ExtClass.registerPreprocessor('cachedConfig', function(Class, data) {
        
        if (data.hasOwnProperty('$configPrefixed')) {
            Class.prototype.$configPrefixed = data.$configPrefixed;
        }
        Class.addCachedConfig(data.cachedConfig);    
    });

    
    ExtClass.registerPreprocessor('mixins', function(Class, data, hooks) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(Class, 'Ext.Class#mixinsPreprocessor', arguments);
        
        var mixins = data.mixins,
            onCreated = hooks.onCreated;

        delete data.mixins;

        hooks.onCreated = function() {
            Ext.classSystemMonitor && Ext.classSystemMonitor(Class, 'Ext.Class#mixinsPreprocessor#beforeCreated', arguments);

            
            
            hooks.onCreated = onCreated;

            Class.mixin(mixins);

            
            
            return hooks.onCreated.apply(this, arguments);
        };
    });


    
    Ext.extend = function(Class, Parent, members) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(Class, 'Ext.Class#extend-backwards-compatible', arguments);
            
        if (arguments.length === 2 && Ext.isObject(Parent)) {
            members = Parent;
            Parent = Class;
            Class = null;
        }

        var cls;

        if (!Parent) {
            throw new Error("[Ext.extend] Attempting to extend from a class which has not been loaded on the page.");
        }

        members.extend = Parent;
        members.preprocessors = [
            'extend'
            ,'statics'
            ,'inheritableStatics'
            ,'mixins'
            ,'platformConfig'
            ,'config'
        ];

        if (Class) {
            cls = new ExtClass(Class, members);
            
            cls.prototype.constructor = Class;
        } else {
            cls = new ExtClass(members);
        }

        cls.prototype.override = function(o) {
            for (var m in o) {
                if (o.hasOwnProperty(m)) {
                    this[m] = o[m];
                }
            }
        };

        return cls;
    };
}());

    

Ext.Inventory = function () {



    var me = this;

    me.names = [];
    me.paths = {};

    me.alternateToName = {};
    me.aliasToName = {};
    me.nameToAliases = {};
    me.nameToAlternates = {};
};

Ext.Inventory.prototype = {
    _array1: [0],

    prefixes: null,

    dotRe: /\./g,
    wildcardRe: /\*/g,

    addAlias: function (className, alias) {
        return this.addMapping(className, alias, this.aliasToName, this.nameToAliases);
    },

    addAlternate: function (className, alternate) {
        return this.addMapping(className, alternate, this.alternateToName, this.nameToAlternates);
    },

    addMapping: function (className, alternate, toName, nameTo) {
        var name = className.$className || className,
            mappings = name,
            array = this._array1,
            a, aliases, cls, i, length,
            nameMapping;

        if (Ext.isString(name)) {
            mappings = {};
            mappings[name] = alternate;
        }

        for (cls in mappings) {
            aliases = mappings[cls];
            if (Ext.isString(aliases)) {
                array[0] = aliases;
                aliases = array;
            }

            length = aliases.length;
            nameMapping = nameTo[cls] || (nameTo[cls] = []);
            for (i = 0; i < length; ++i) {
                if (!(a = aliases[i])) {
                    continue;
                }

                if (toName[a] !== cls) {
                    if (toName[a]) {
                        Ext.log.warn("Overriding existing mapping: '" + a + "' From '" +
                            toName[a] + "' to '" + cls + "'. Is this intentional?");
                    }

                    toName[a] = cls;
                    nameMapping.push(a);
                }
            }
        }
    },

    
    getAliasesByName: function (name) {
        return this.nameToAliases[name] || null;
    },

    getAlternatesByName: function (name) {
        return this.nameToAliases[name] || null;
    },

    
    getNameByAlias: function(alias) {
        return this.aliasToName[alias] || '';
    },

    
    getNameByAlternate: function (alternate) {
        return this.alternateToName[alternate] || '';
    },

    
    getNamesByExpression: function (expression, exclude, accumulate) {
        var me = this,
            aliasToName = me.aliasToName,
            alternateToName = me.alternateToName,
            nameToAliases = me.nameToAliases,
            nameToAlternates = me.nameToAlternates,
            map = accumulate ? exclude : {},
            names = [],
            expressions = Ext.isString(expression) ? [expression] : expression,
            length = expressions.length,
            wildcardRe = me.wildcardRe,
            expr, i, list, match, n, name, regex;

        for (i = 0; i < length; ++i) {
            if ((expr = expressions[i]).indexOf('*') < 0) {
                
                if (!(name = aliasToName[expr])) {
                    if (!(name = alternateToName[expr])) {
                        name = expr;
                    }
                }

                if (!(name in map) && !(exclude && (name in exclude))) {
                    map[name] = 1;
                    names.push(name);
                }
            } else {
                regex = new RegExp('^' + expr.replace(wildcardRe, '(.*?)') + '$');

                for (name in nameToAliases) {
                    if (!(name in map) && !(exclude && (name in exclude))) {
                        if (!(match = regex.test(name))) {
                            n = (list = nameToAliases[name]).length;
                            while (!match && n-- > 0) {
                                match = regex.test(list[n]);
                            }

                            list = nameToAlternates[name];
                            if (list && !match) {
                                n = list.length;
                                while (!match && n-- > 0) {
                                    match = regex.test(list[n]);
                                }
                            }
                        }

                        if (match) {
                            map[name] = 1;
                            names.push(name);
                        }
                    }
                }
            }
        }

        return names;
    },

    getPath: function (className) {
        var me = this,
            paths = me.paths,
            ret = '',
            prefix;

        if (className in paths) {
            ret = paths[className];
        } else {
            prefix = me.getPrefix(className);
            if (prefix) {
                className = className.substring(prefix.length + 1);
                ret = paths[prefix];
                if (ret) {
                    ret += '/';
                }
            }

            ret += className.replace(me.dotRe, '/') + '.js';
        }

        return ret;
    },

    getPrefix: function (className) {
        if (className in this.paths) {
            return className;
        }

        var prefixes = this.getPrefixes(),
            i = prefixes.length,
            length, prefix;

        
        while (i-- > 0) {
            length = (prefix = prefixes[i]).length;
            if (length < className.length && className.charAt(length) === '.'
                                          && prefix === className.substring(0, length)) {
                return prefix;
            }
        }

        return '';
    },

    getPrefixes: function () {
        var me = this,
            prefixes = me.prefixes;

        if (!prefixes) {
            me.prefixes = prefixes = me.names.slice(0);
            prefixes.sort(me._compareNames);
        }

        return prefixes;
    },

    removeName: function (name) {
        var me = this,
            aliasToName = me.aliasToName,
            alternateToName = me.alternateToName,
            nameToAliases = me.nameToAliases,
            nameToAlternates = me.nameToAlternates,
            aliases = nameToAliases[name],
            alternates = nameToAlternates[name],
            i, a;

        delete nameToAliases[name];
        delete nameToAlternates[name];

        if (aliases) {
            for (i = aliases.length; i--;) {
                
                
                
                if (name === (a = aliases[i])) {
                    delete aliasToName[a];
                }
            }
        }

        if (alternates) {
            for (i = alternates.length; i--; ) {
                
                if (name === (a = alternates[i])) {
                    delete alternateToName[a];
                }
            }
        }
    },

    resolveName: function (name) {
        var me = this,
            trueName;

        
        
        if (!(name in me.nameToAliases)) {
            
            if (!(trueName = me.aliasToName[name])) {
                
                
                trueName = me.alternateToName[name];
            }
        }

        return trueName || name;
    },

    
    select: function (receiver, scope) {
        var me = this,
            excludes = {},
            ret = {
                excludes: excludes,

                exclude: function () {
                    me.getNamesByExpression(arguments, excludes, true);
                    return this;
                }
            },
            name;

        for (name in receiver) {
            ret[name] = me.selectMethod(excludes, receiver[name], scope || receiver);
        }

        return ret;
    },

    selectMethod: function (excludes, fn, scope) {
        var me = this;

        return function (include) {
            var args = Ext.Array.slice(arguments, 1);
            
            args.unshift(me.getNamesByExpression(include, excludes));

            return fn.apply(scope, args);
        };
    },

    
    setPath: Ext.Function.flexSetter(function (name, path) {
        var me = this;

        me.paths[name] = path;
        me.names.push(name);

        me.prefixes = null;

        return me;
    }),

    _compareNames: function (lhs, rhs) {
        var cmp = lhs.length - rhs.length;
        if (!cmp) {
            cmp = (lhs < rhs) ? -1 : 1;
        }
        return cmp;
    }
};



Ext.ClassManager = (function(Class, alias, arraySlice, arrayFrom, global) {






var makeCtor = Ext.Class.makeCtor,

    Manager = Ext.apply(new Ext.Inventory(), {
        
        classes: {},

        classState: {
            
        },

        
        existCache: {},

        
        namespaceRewrites: [{
            from: 'Ext.',
            to: Ext
        }],

        
        enableNamespaceParseCache: true,

        
        namespaceParseCache: {},

        
        instantiators: [],

        
        isCreated: function(className) {
            var i, ln, part, root, parts;

            if (typeof className !== 'string' || className.length < 1) {
                throw new Error("[Ext.ClassManager] Invalid classname, must be a string and must not be empty");
            }

            if (Manager.classes[className] || Manager.existCache[className]) {
                return true;
            }

            root = global;
            parts = Manager.parseNamespace(className);

            for (i = 0, ln = parts.length; i < ln; i++) {
                part = parts[i];

                if (typeof part !== 'string') {
                    root = part;
                } else {
                    if (!root || !root[part]) {
                        return false;
                    }

                    root = root[part];
                }
            }

            Manager.triggerCreated(className);

            return true;
        },

        
        createdListeners: [],
        
        
        nameCreatedListeners: {},

        
        existsListeners: [],

        
        nameExistsListeners: {},

        
        triggerCreated: function (className) {
            if(!Manager.existCache[className]) {
                Manager.triggerExists(className);
            }
            Manager.classState[className] += 20;
            Manager.notify(className, Manager.createdListeners, Manager.nameCreatedListeners);
        },

        
        onCreated: function(fn, scope, className) {
            Manager.addListener(fn, scope, className, Manager.createdListeners, Manager.nameCreatedListeners);
        },

        
        triggerExists: function (className, state) {
            Manager.existCache[className] = state || 1;
            Manager.classState[className] += 20;
            Manager.notify(className, Manager.existsListeners, Manager.nameExistsListeners);
        },

        
        onExists: function(fn, scope, className) {
            Manager.addListener(fn, scope, className, Manager.existsListeners, Manager.nameExistsListeners);
        },

        
        notify: function (className, listeners, nameListeners) {
            var alternateNames = Manager.getAlternatesByName(className),
                names = [className],
                i, ln, j, subLn, listener, name;

            for (i = 0,ln = listeners.length; i < ln; i++) {
                listener = listeners[i];
                listener.fn.call(listener.scope, className);
            }

            while (names) {
                for (i = 0,ln = names.length; i < ln; i++) {
                    name = names[i];
                    listeners = nameListeners[name];

                    if (listeners) {
                        for (j = 0,subLn = listeners.length; j < subLn; j++) {
                            listener = listeners[j];
                            listener.fn.call(listener.scope, name);
                        }
                        delete nameListeners[name];
                    }
                }

                names = alternateNames; 
                alternateNames = null; 
            }
        },

        
        addListener: function(fn, scope, className, listeners, nameListeners) {
            if (Ext.isArray(className)) {
                fn = Ext.Function.createBarrier(className.length, fn, scope);
                for (i = 0; i < className.length; i++) {
                    this.addListener(fn, null, className[i], listeners, nameListeners);
                }
                return;
            }
            var i,
                listener = {
                    fn: fn,
                    scope: scope
                };

            if (className) {
                if (this.isCreated(className)) {
                    fn.call(scope, className);
                    return;
                }

                if (!nameListeners[className]) {
                    nameListeners[className] = [];
                }

                nameListeners[className].push(listener);
            }
            else {
                listeners.push(listener);
            }
        },

        
        parseNamespace: function(namespace) {
            if (typeof namespace !== 'string') {
                throw new Error("[Ext.ClassManager] Invalid namespace, must be a string");
            }

            var cache = this.namespaceParseCache,
                parts,
                rewrites,
                root,
                name,
                rewrite, from, to, i, ln;

            if (this.enableNamespaceParseCache) {
                if (cache.hasOwnProperty(namespace)) {
                    return cache[namespace];
                }
            }

            parts = [];
            rewrites = this.namespaceRewrites;
            root = global;
            name = namespace;

            for (i = 0, ln = rewrites.length; i < ln; i++) {
                rewrite = rewrites[i];
                from = rewrite.from;
                to = rewrite.to;

                if (name === from || name.substring(0, from.length) === from) {
                    name = name.substring(from.length);

                    if (typeof to !== 'string') {
                        root = to;
                    } else {
                        parts = parts.concat(to.split('.'));
                    }

                    break;
                }
            }

            parts.push(root);

            parts = parts.concat(name.split('.'));

            if (this.enableNamespaceParseCache) {
                cache[namespace] = parts;
            }

            return parts;
        },

        
        setNamespace: function(name, value) {
            var root = global,
                parts = this.parseNamespace(name),
                ln = parts.length - 1,
                leaf = parts[ln],
                i, part;

            for (i = 0; i < ln; i++) {
                part = parts[i];

                if (typeof part !== 'string') {
                    root = part;
                } else {
                    if (!root[part]) {
                        root[part] = {};
                    }

                    root = root[part];
                }
            }

            root[leaf] = value;

            return root[leaf];
        },

        
        createNamespaces: function() {
            var root = global,
                parts, part, i, j, ln, subLn;

            for (i = 0, ln = arguments.length; i < ln; i++) {
                parts = this.parseNamespace(arguments[i]);

                for (j = 0, subLn = parts.length; j < subLn; j++) {
                    part = parts[j];

                    if (typeof part !== 'string') {
                        root = part;
                    } else {
                        if (!root[part]) {
                            root[part] = {};
                        }

                        root = root[part];
                    }
                }
            }

            return root;
        },

        
        set: function (name, value) {
            var me = this,
                targetName = me.getName(value);

            me.classes[name] = me.setNamespace(name, value);

            if (targetName && targetName !== name) {
                me.addAlternate(targetName, name);
            }

            return this;
        },

        
        get: function(name) {
            var classes = this.classes,
                root,
                parts,
                part, i, ln;

            if (classes[name]) {
                return classes[name];
            }

            root = global;
            parts = this.parseNamespace(name);

            for (i = 0, ln = parts.length; i < ln; i++) {
                part = parts[i];

                if (typeof part !== 'string') {
                    root = part;
                } else {
                    if (!root || !root[part]) {
                        return null;
                    }

                    root = root[part];
                }
            }

            return root;
        },

        
        addNameAliasMappings: function(aliases) {
            this.addAlias(aliases);
        },

        
        addNameAlternateMappings: function (alternates) {
            this.addAlternate(alternates);
        },

        
        getByAlias: function(alias) {
            return this.get(this.getNameByAlias(alias));
        },

        
        getName: function(object) {
            return object && object.$className || '';
        },

        
        getClass: function(object) {
            return object && object.self || null;
        },

        
        create: function(className, data, createdFn) {
            if (className != null && typeof className !== 'string') {
                throw new Error("[Ext.define] Invalid class name '" + className + "' specified, must be a non-empty string");
            }

            var ctor = makeCtor(className);
            if (typeof data === 'function') {
                data = data(ctor);
            }

            if (className) {
                if(Manager.classes[className]) {
                    Ext.log.warn("[Ext.define] Duplicate class name '" + className + "' specified, must be a non-empty string");
                }
                ctor.displayName = className;
            }

            data.$className = className;

            return new Class(ctor, data, function() {
                var postprocessorStack = data.postprocessors || Manager.defaultPostprocessors,
                    registeredPostprocessors = Manager.postprocessors,
                    postprocessors = [],
                    postprocessor, i, ln, j, subLn, postprocessorProperties, postprocessorProperty;

                delete data.postprocessors;

                for (i = 0,ln = postprocessorStack.length; i < ln; i++) {
                    postprocessor = postprocessorStack[i];

                    if (typeof postprocessor === 'string') {
                        postprocessor = registeredPostprocessors[postprocessor];
                        postprocessorProperties = postprocessor.properties;

                        if (postprocessorProperties === true) {
                            postprocessors.push(postprocessor.fn);
                        }
                        else if (postprocessorProperties) {
                            for (j = 0,subLn = postprocessorProperties.length; j < subLn; j++) {
                                postprocessorProperty = postprocessorProperties[j];

                                if (data.hasOwnProperty(postprocessorProperty)) {
                                    postprocessors.push(postprocessor.fn);
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        postprocessors.push(postprocessor);
                    }
                }

                data.postprocessors = postprocessors;
                data.createdFn = createdFn;
                Manager.processCreate(className, this, data);
            });
        },

        processCreate: function(className, cls, clsData){
            var me = this,
                postprocessor = clsData.postprocessors.shift(),
                createdFn = clsData.createdFn;
            
            if (!postprocessor) {
                Ext.classSystemMonitor && Ext.classSystemMonitor(className, 'Ext.ClassManager#classCreated', arguments);
                
                if (className) {
                    me.set(className, cls);
                }

                delete cls._classHooks;

                if (createdFn) {
                    createdFn.call(cls, cls);
                }

                if (className) {
                    me.triggerCreated(className);
                }
                return;
            }

            if (postprocessor.call(me, className, cls, clsData, me.processCreate) !== false) {
                me.processCreate(className, cls, clsData);
            }
        },

        createOverride: function (className, data, createdFn) {
            var me = this,
                overriddenClassName = data.override,
                requires = data.requires,
                uses = data.uses,
                mixins = data.mixins,
                mixinsIsArray,
                compat = data.compatibility,
                depedenciesLoaded,
                classReady = function () {
                    var cls, dependencies, i, key, temp;

                    if (!depedenciesLoaded) {
                        dependencies = requires ? requires.slice(0) : [];

                        if (mixins) {
                            if (!(mixinsIsArray = mixins instanceof Array)) {
                                for (key in mixins) {
                                    if (Ext.isString(cls = mixins[key])) {
                                        dependencies.push(cls);
                                    }
                                }
                            } else {
                                for (i = 0, temp = mixins.length; i < temp; ++i) {
                                    if (Ext.isString(cls = mixins[i])) {
                                        dependencies.push(cls);
                                    }
                                }
                            }
                        }

                        depedenciesLoaded = true;
                        if (dependencies.length) {
                            
                            
                            
                            Ext.require(dependencies, classReady);
                            return;
                        }
                        
                    }

                    
                    
                    
                    if (mixinsIsArray) {
                        for (i = 0, temp = mixins.length; i < temp; ++i) {
                            if (Ext.isString(cls = mixins[i])) {
                                mixins[i] = Ext.ClassManager.get(cls);
                            }
                        }
                    } else if (mixins) {
                        for (key in mixins) {
                            if (Ext.isString(cls = mixins[key])) {
                                mixins[key] = Ext.ClassManager.get(cls);
                            }
                        }
                    }

                    
                    
                    cls = me.get(overriddenClassName);

                    
                    delete data.override;
                    delete data.compatibility;
                    delete data.requires;
                    delete data.uses;

                    Ext.override(cls, data);

                    
                    
                    
                    me.triggerCreated(className);

                    if (uses) {
                        
                        
                        Ext['Loader'].addUsedClasses(uses); 
                    }

                    if (createdFn) {
                        createdFn.call(cls, cls); 
                    }
                };

            me.triggerExists(className, 2);

            if (!compat || Ext.checkVersion(compat)) {
                
                me.onCreated(classReady, me, overriddenClassName);
            }

            return me;
        },

        
        instantiateByAlias: function() {
            var alias = arguments[0],
                args = arraySlice.call(arguments),
                className = this.getNameByAlias(alias);

            if (!className) {
                throw new Error("[Ext.createByAlias] Unrecognized alias: " + alias);
            }

            args[0] = className;

            return Ext.create.apply(Ext, args);
        },

        
        instantiate: function() {
            Ext.log.warn('Ext.ClassManager.instantiate() is deprecated.  Use Ext.create() instead.');
            return Ext.create.apply(Ext, arguments);
        },

        
        dynInstantiate: function(name, args) {
            args = arrayFrom(args, true);
            args.unshift(name);

            return Ext.create.apply(Ext, args);
        },

        
        getInstantiator: function(length) {
            var instantiators = this.instantiators,
                instantiator,
                i,
                args;

            instantiator = instantiators[length];

            if (!instantiator) {
                i = length;
                args = [];

                for (i = 0; i < length; i++) {
                    args.push('a[' + i + ']');
                }

                instantiator = instantiators[length] = new Function('c', 'a', 'return new c(' + args.join(',') + ')');
                instantiator.displayName = "Ext.create" + length;
            }

            return instantiator;
        },

        
        postprocessors: {},

        
        defaultPostprocessors: [],

        
        registerPostprocessor: function(name, fn, properties, position, relativeTo) {
            if (!position) {
                position = 'last';
            }

            if (!properties) {
                properties = [name];
            }

            this.postprocessors[name] = {
                name: name,
                properties: properties || false,
                fn: fn
            };

            this.setDefaultPostprocessorPosition(name, position, relativeTo);

            return this;
        },

        
        setDefaultPostprocessors: function(postprocessors) {
            this.defaultPostprocessors = arrayFrom(postprocessors);

            return this;
        },

        
        setDefaultPostprocessorPosition: function(name, offset, relativeName) {
            var defaultPostprocessors = this.defaultPostprocessors,
                index;

            if (typeof offset === 'string') {
                if (offset === 'first') {
                    defaultPostprocessors.unshift(name);

                    return this;
                }
                else if (offset === 'last') {
                    defaultPostprocessors.push(name);

                    return this;
                }

                offset = (offset === 'after') ? 1 : -1;
            }

            index = Ext.Array.indexOf(defaultPostprocessors, relativeName);

            if (index !== -1) {
                Ext.Array.splice(defaultPostprocessors, Math.max(0, index + offset), 0, name);
            }

            return this;
        }
    });
    
    
    Manager.registerPostprocessor('alias', function(name, cls, data) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(name, 'Ext.ClassManager#aliasPostProcessor', arguments);
        
        var aliases = Ext.Array.from(data.alias),
            i, ln;

        for (i = 0,ln = aliases.length; i < ln; i++) {
            alias = aliases[i];

            this.addAlias(cls, alias);
        }

    }, ['xtype', 'alias']);

    
    Manager.registerPostprocessor('singleton', function(name, cls, data, fn) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(name, 'Ext.ClassManager#singletonPostProcessor', arguments);
        
        if (data.singleton) {
            fn.call(this, name, new cls(), data);
        }
        else {
            return true;
        }
        return false;
    });

    
    Manager.registerPostprocessor('alternateClassName', function(name, cls, data) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(name, 'Ext.ClassManager#alternateClassNamePostprocessor', arguments);
        
        var alternates = data.alternateClassName,
            i, ln, alternate;

        if (!(alternates instanceof Array)) {
            alternates = [alternates];
        }

        for (i = 0, ln = alternates.length; i < ln; i++) {
            alternate = alternates[i];

            if (typeof alternate !== 'string') {
                throw new Error("[Ext.define] Invalid alternate of: '" + alternate + "' for class: '" + name + "'; must be a valid string");
            }

            this.set(alternate, cls);
        }
    });

    
    Manager.registerPostprocessor('debugHooks', function(name, Class, data) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(Class, 'Ext.Class#debugHooks', arguments);

        if (Ext.isDebugEnabled(Class.$className)) {
            Ext.override(Class, data.debugHooks);
        }

        
        var target = Class.isInstance ? Class.self : Class;

        delete target.prototype.debugHooks;
    });

    
    Manager.registerPostprocessor('deprecated', function(name, Class, data) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(Class, 'Ext.Class#deprecated', arguments);

        
        var target = Class.isInstance ? Class.self : Class;
        target.addDeprecations(data.deprecated);

        delete target.prototype.deprecated;
    });

    Ext.apply(Ext, {
        
        create: function () {
            var name = arguments[0],
                nameType = typeof name,
                args = arraySlice.call(arguments, 1),
                cls;

            if (nameType === 'function') {
                cls = name;
            } else {
                if (nameType !== 'string' && args.length === 0) {
                    args = [name];
                    if (!(name = name.xclass)) {
                        name = args[0].xtype;
                        if (name) {
                            name = 'widget.' + name;
                        }
                    }
                }

                if (typeof name !== 'string' || name.length < 1) {
                    throw new Error("[Ext.create] Invalid class name or alias '" + name +
                                    "' specified, must be a non-empty string");
                }

                name = Manager.resolveName(name);
                cls = Manager.get(name);
            }

            
            if (!cls) {
                Ext.log.warn("[Ext.Loader] Synchronously loading '" + name + "'; consider adding " +
                     "Ext.require('" + name + "') above Ext.onReady");

                Ext.syncRequire(name);

                cls = Manager.get(name);
            }

            if (!cls) {
                throw new Error("[Ext.create] Unrecognized class name / alias: " + name);
            }

            if (typeof cls !== 'function') {
                throw new Error("[Ext.create] Singleton '" + name + "' cannot be instantiated.");
            }

            return Manager.getInstantiator(args.length)(cls, args);
        },

        
        widget: function(name, config) {
            
            
            
            
            
            
            
            var xtype = name,
                alias, className, T, load;

            if (typeof xtype !== 'string') { 
                
                config = name; 
                xtype = config.xtype;
            } else {
                config = config || {};
            }

            if (config.isComponent) {
                return config;
            }

            alias = 'widget.' + xtype;
            className = Manager.getNameByAlias(alias);

            
            if (!className) {
                load = true;
            }

            T = Manager.get(className);
            if (load || !T) {
                return Ext.create(alias, config);
            }
            return new T(config);
        },

        
        createByAlias: alias(Manager, 'instantiateByAlias'),

        
        define: function (className, data, createdFn) {
            Ext.classSystemMonitor && Ext.classSystemMonitor(className, 'ClassManager#define', arguments);
            
            if (data.override) {
                Manager.classState[className] = 20;
                return Manager.createOverride.apply(Manager, arguments);
            }

            Manager.classState[className] = 10;
            return Manager.create.apply(Manager, arguments);
        },

        
        undefine: function(className) {
            Ext.classSystemMonitor && Ext.classSystemMonitor(className, 'Ext.ClassManager#undefine', arguments);
        
            var classes = Manager.classes,
                parts, partCount, namespace, i;

            delete Manager.namespaceParseCache[className];
            delete classes[className];
            delete Manager.existCache[className];
            delete Manager.classState[className];

            Manager.removeName(className);

            parts  = Manager.parseNamespace(className);
            partCount = parts.length - 1;
            namespace = parts[0];

            for (i = 1; i < partCount; i++) {
                namespace = namespace[parts[i]];
                if (!namespace) {
                    return;
                }
            }

            
            try {
                delete namespace[parts[partCount]];
            }
            catch (e) {
                namespace[parts[partCount]] = undefined;
            }
        },

        
        getClassName: alias(Manager, 'getName'),

        
        getDisplayName: function(object) {
            if (object) {
                if (object.displayName) {
                    return object.displayName;
                }

                if (object.$name && object.$class) {
                    return Ext.getClassName(object.$class) + '#' + object.$name;
                }

                if (object.$className) {
                    return object.$className;
                }
            }

            return 'Anonymous';
        },

        
        getClass: alias(Manager, 'getClass'),

        
        namespace: alias(Manager, 'createNamespaces')
    });

    
    Ext.createWidget = Ext.widget;

    
    Ext.ns = Ext.namespace;

    Class.registerPreprocessor('className', function(cls, data) {
        if ('$className' in data) {
            cls.$className = data.$className;
            cls.displayName = cls.$className;
        }
        
        Ext.classSystemMonitor && Ext.classSystemMonitor(cls, 'Ext.ClassManager#classNamePreprocessor', arguments);
    }, true, 'first');

    Class.registerPreprocessor('alias', function(cls, data) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(cls, 'Ext.ClassManager#aliasPreprocessor', arguments);
        
        var prototype = cls.prototype,
            xtypes = arrayFrom(data.xtype),
            aliases = arrayFrom(data.alias),
            widgetPrefix = 'widget.',
            widgetPrefixLength = widgetPrefix.length,
            xtypesChain = Array.prototype.slice.call(prototype.xtypesChain || []),
            xtypesMap = Ext.merge({}, prototype.xtypesMap || {}),
            i, ln, alias, xtype;

        for (i = 0,ln = aliases.length; i < ln; i++) {
            alias = aliases[i];

            if (typeof alias !== 'string' || alias.length < 1) {
                throw new Error("[Ext.define] Invalid alias of: '" + alias + "' for class: '" + name + "'; must be a valid string");
            }

            if (alias.substring(0, widgetPrefixLength) === widgetPrefix) {
                xtype = alias.substring(widgetPrefixLength);
                Ext.Array.include(xtypes, xtype);
            }
        }

        cls.xtype = data.xtype = xtypes[0];
        data.xtypes = xtypes;

        for (i = 0,ln = xtypes.length; i < ln; i++) {
            xtype = xtypes[i];

            if (!xtypesMap[xtype]) {
                xtypesMap[xtype] = true;
                xtypesChain.push(xtype);
            }
        }

        data.xtypesChain = xtypesChain;
        data.xtypesMap = xtypesMap;

        Ext.Function.interceptAfter(data, 'onClassCreated', function() {
            Ext.classSystemMonitor && Ext.classSystemMonitor(cls, 'Ext.ClassManager#aliasPreprocessor#afterClassCreated', arguments);
        
            var mixins = prototype.mixins,
                key, mixin;

            for (key in mixins) {
                if (mixins.hasOwnProperty(key)) {
                    mixin = mixins[key];

                    xtypes = mixin.xtypes;

                    if (xtypes) {
                        for (i = 0,ln = xtypes.length; i < ln; i++) {
                            xtype = xtypes[i];

                            if (!xtypesMap[xtype]) {
                                xtypesMap[xtype] = true;
                                xtypesChain.push(xtype);
                            }
                        }
                    }
                }
            }
        });

        for (i = 0,ln = xtypes.length; i < ln; i++) {
            xtype = xtypes[i];

            if (typeof xtype !== 'string' || xtype.length < 1) {
                throw new Error("[Ext.define] Invalid xtype of: '" + xtype + "' for class: '" + name + "'; must be a valid non-empty string");
            }

            Ext.Array.include(aliases, widgetPrefix + xtype);
        }

        data.alias = aliases;

    }, ['xtype', 'alias']);

    
    if(Ext.manifest) {
        var manifest = Ext.manifest,
            classes = manifest.classes,
            paths = manifest.paths,
            aliases = {},
            alternates = {},
            className, obj, name;

        if(paths) {
            
            
            
            if(manifest.bootRelative) {
                baseUrl = Ext.Boot.baseUrl;
                for(path in paths) {
                    if(paths.hasOwnProperty(path)) {
                        paths[path] = baseUrl + paths[path];
                    }
                }
            }
            Manager.setPath(paths);
        }

        if(classes) {
            for(className in classes) {
                alternates[className] = [];
                aliases[className] = [];
                obj = classes[className];
                if(obj.alias) {
                    aliases[className] = obj.alias;
                }
                if(obj.alternates) {
                    alternates[className] = obj.alternates;
                }
            }
        }

        Manager.addAlias(aliases);
        Manager.addAlternate(alternates);
    }

    return Manager;
}(Ext.Class, Ext.Function.alias, Array.prototype.slice, Ext.Array.from, Ext.global));



Ext.env || (Ext.env = {});
Ext.env.Browser = function (userAgent, publish) {





    var me = this,
        browserPrefixes = me.browserPrefixes,
        enginePrefixes = me.enginePrefixes,
        browserMatch = userAgent.match(new RegExp('((?:' + 
                Ext.Object.getValues(browserPrefixes).join(')|(?:') + '))([\\w\\._]+)')),
        engineMatch = userAgent.match(new RegExp('((?:' + 
                Ext.Object.getValues(enginePrefixes).join(')|(?:') + '))([\\w\\._]+)')),
        browserNames = me.browserNames,
        browserName = browserNames.other,
        engineNames = me.engineNames,
        engineName = engineNames.other,
        browserVersion = '',
        engineVersion = '',
        majorVer = '',
        isWebView = false,
        i, mode, name;

    
    me.userAgent = userAgent;

    if (browserMatch) {
        browserName = browserNames[Ext.Object.getKey(browserPrefixes, browserMatch[1])];
        browserVersion = new Ext.Version(browserMatch[2]);
    }

    if (engineMatch) {
        engineName = engineNames[Ext.Object.getKey(enginePrefixes, engineMatch[1])];
        engineVersion = new Ext.Version(engineMatch[2]);
    }

    if (engineName == 'Trident' && browserName != 'IE') {
        browserName = 'IE';
        var version = userAgent.match(/.*rv:(\d+.\d+)/);
        if (version && version.length) {
            version = version[1];
            browserVersion = new Ext.Version(version);
        }
    }

    
    
    if (userAgent.match(/FB/) && browserName == "Other") {
        browserName = browserNames.safari;
        engineName = engineNames.webkit;
    }

    if (userAgent.match(/Android.*Chrome/g)) {
        browserName = 'ChromeMobile';
    }

    if (userAgent.match(/OPR/)) {
        browserName = 'Opera';
        browserMatch = userAgent.match(/OPR\/(\d+.\d+)/);
        browserVersion = new Ext.Version(browserMatch[1]);
    }

    Ext.apply(this, {
        engineName: engineName,
        engineVersion: engineVersion,
        name: browserName,
        version: browserVersion
    });

    this.setFlag(browserName, true, publish); 

    if (browserVersion) {
        majorVer = browserVersion.getMajor() || '';
        if (me.is.IE) {
            majorVer = parseInt(majorVer, 10);
            mode = document.documentMode;

            
            
            
            
            

            if (mode == 7 || (majorVer == 7 && mode != 8 && mode != 9 && mode != 10)) {
                majorVer = 7;
            } else if (mode == 8 || (majorVer == 8 && mode != 8 && mode != 9 && mode != 10)) {
                majorVer = 8;
            } else if (mode == 9 || (majorVer == 9 && mode != 7 && mode != 8 && mode != 10)) {
                majorVer = 9;
            } else if (mode == 10 || (majorVer == 10 && mode != 7 && mode != 8 && mode != 9)) {
                majorVer = 10;
            }

            if (majorVer <= 7) {
                Ext.isIE7m = true;
            }
            if (majorVer <= 8) {
                Ext.isIE8m = true;
            }
            if (majorVer <= 9) {
                Ext.isIE9m = true;
            }

            if (majorVer >= 7) {
                Ext.isIE7p = true;
            }
            if (majorVer >= 8) {
                Ext.isIE8p = true;
            }
            if (majorVer >= 9) {
                Ext.isIE9p = true;
            }
            if (majorVer >= 10) {
                Ext.isIE10p = true;
            }
        }

        Ext.chromeVersion = Ext.isChrome ? majorVer : 0;
        Ext.firefoxVersion = Ext.isFirefox ? majorVer : 0;
        Ext.ieVersion = Ext.isIE ? majorVer : 0;
        Ext.operaVersion = Ext.isOpera ? majorVer : 0;
        Ext.safariVersion = Ext.isSafari ? majorVer : 0;
        Ext.webKitVersion = Ext.isWebKit ? majorVer : 0;

        this.setFlag(browserName + majorVer, true, publish); 
        this.setFlag(browserName + browserVersion.getShortVersion());
    }

    for (i in browserNames) {
        if (browserNames.hasOwnProperty(i)) {
            name = browserNames[i];

            this.setFlag(name, browserName === name);
        }
    }

    this.setFlag(name);

    if (engineVersion) {
        this.setFlag(engineName + (engineVersion.getMajor() || ''));
        this.setFlag(engineName + engineVersion.getShortVersion());
    }

    for (i in engineNames) {
        if (engineNames.hasOwnProperty(i)) {
            name = engineNames[i];

            this.setFlag(name, engineName === name, publish);
        }
    }

    this.setFlag('Standalone', !!navigator.standalone);

    this.setFlag('Ripple', !!document.getElementById("tinyhippos-injected") && !Ext.isEmpty(window.top.ripple));
    this.setFlag('WebWorks', !!window.blackberry);

    if (typeof window.PhoneGap != 'undefined' || typeof window.Cordova != 'undefined' || typeof window.cordova != 'undefined') {
        isWebView = true;
        this.setFlag('PhoneGap');
        this.setFlag('Cordova');
    }
    else if (!!window.isNK) {
        isWebView = true;
        this.setFlag('Sencha');
    }

    if (/(Glass)/i.test(userAgent)) {
        this.setFlag('GoogleGlass');
    }

    
    if (/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)(?!.*FBAN)/i.test(userAgent)) {
        isWebView = true;
    }

    
    this.setFlag('WebView', isWebView);

    
    this.isStrict = Ext.isStrict = document.compatMode == "CSS1Compat";

    
    this.isSecure = /^https/i.test(window.location.protocol);

    
    this.identity = browserName + majorVer + (this.isStrict ? 'Strict' : 'Quirks');
};

Ext.env.Browser.prototype = {
    constructor: Ext.env.Browser,

    browserNames: {
        ie: 'IE',
        firefox: 'Firefox',
        safari: 'Safari',
        chrome: 'Chrome',
        opera: 'Opera',
        dolfin: 'Dolfin',
        webosbrowser: 'webOSBrowser',
        chromeMobile: 'ChromeMobile',
        chromeiOS: 'ChromeiOS',
        silk: 'Silk',
        other: 'Other'
    },
    engineNames: {
        webkit: 'WebKit',
        gecko: 'Gecko',
        presto: 'Presto',
        trident: 'Trident',
        other: 'Other'
    },
    enginePrefixes: {
        webkit: 'AppleWebKit/',
        gecko: 'Gecko/',
        presto: 'Presto/',
        trident: 'Trident/'
    },
    browserPrefixes: {
        ie: 'MSIE ',
        firefox: 'Firefox/',
        chrome: 'Chrome/',
        safari: 'Version/',
        opera: 'OPR/',
        dolfin: 'Dolfin/',
        webosbrowser: 'wOSBrowser/',
        chromeMobile: 'CrMo/',
        chromeiOS: 'CriOS/',
        silk: 'Silk/'
    },

    styleDashPrefixes: {
        WebKit: '-webkit-',
        Gecko: '-moz-',
        Trident: '-ms-',
        Presto: '-o-',
        Other: ''
    },

    stylePrefixes: {
        WebKit: 'Webkit',
        Gecko: 'Moz',
        Trident: 'ms',
        Presto: 'O',
        Other: ''
    },

    propertyPrefixes: {
        WebKit: 'webkit',
        Gecko: 'moz',
        Trident: 'ms',
        Presto: 'o',
        Other: ''
    },

    

    
    is: function (name) {
        return !!this.is[name];
    },

    
    name: null,

    
    version: null,

    
    engineName: null,

    
    engineVersion: null,

    setFlag: function(name, value, publish) {
        if (typeof value == 'undefined') {
            value = true;
        }

        this.is[name] = value;
        this.is[name.toLowerCase()] = value;
        if (publish) {
            Ext['is' + name] = value;
        }

        return this;
    },

    getStyleDashPrefix: function() {
        return this.styleDashPrefixes[this.engineName];
    },

    getStylePrefix: function() {
        return this.stylePrefixes[this.engineName];
    },

    getVendorProperyName: function(name) {
        var prefix = this.propertyPrefixes[this.engineName];

        if (prefix.length > 0) {
            return prefix + Ext.String.capitalize(name);
        }

        return name;
    },

    getPreferredTranslationMethod: function(config) {
        if (typeof config == 'object' && 'translationMethod' in config && config.translationMethod !== 'auto') {
            return config.translationMethod;
        } else {
            if (this.is.AndroidStock2 || this.is.IE) {
                return 'scrollposition';
            }
            else {
                return 'csstransform';
            }
        }
    }

};


(function (userAgent) {
    Ext.browser = new Ext.env.Browser(userAgent, true);
    Ext.userAgent = userAgent.toLowerCase();

}(Ext.global.navigator.userAgent));


Ext.env.OS = function(userAgent, platform, browserScope) {





    var me = this,
        names = me.names,
        prefixes = me.prefixes,
        name,
        version = '',
        is = me.is,
        i, prefix, match, item, match1;

    browserScope = browserScope || Ext.browser;

    for (i in prefixes) {
        if (prefixes.hasOwnProperty(i)) {
            prefix = prefixes[i];

            match = userAgent.match(new RegExp('(?:'+prefix+')([^\\s;]+)'));

            if (match) {
                name = names[i];
                match1 = match[1];

                
                
                if (match1 && match1 == "HTC_") {
                    version = new Ext.Version("2.3");
                }
                else if (match1 && match1 == "Silk/") {
                    version = new Ext.Version("2.3");
                }
                else {
                    version = new Ext.Version(match[match.length - 1]);
                }

                break;
            }
        }
    }

    if (!name) {
        name = names[(userAgent.toLowerCase().match(/mac|win|linux/) || ['other'])[0]];
        version = new Ext.Version('');
    }

    this.name = name;
    this.version = version;

    if (platform) {
        this.setFlag(platform.replace(/ simulator$/i, ''));
    }

    this.setFlag(name);

    if (version) {
        this.setFlag(name + (version.getMajor() || ''));
        this.setFlag(name + version.getShortVersion());
    }

    for (i in names) {
        if (names.hasOwnProperty(i)) {
            item = names[i];

            if (!is.hasOwnProperty(name)) {
                this.setFlag(item, (name === item));
            }
        }
    }

    
    if (this.name == "iOS" && window.screen.height == 568) {
        this.setFlag('iPhone5');
    }

    if (browserScope.is.Safari || browserScope.is.Silk) {
        
        if (this.is.Android2 || this.is.Android3 || browserScope.version.shortVersion == 501) {
            browserScope.setFlag("AndroidStock");
            browserScope.setFlag("AndroidStock2");
        }
        if (this.is.Android4) {
            browserScope.setFlag("AndroidStock");
            browserScope.setFlag("AndroidStock4");
        }
    }
}

Ext.env.OS.prototype = {
    constructor: Ext.env.OS,

    names: {
        ios: 'iOS',
        android: 'Android',
        windowsPhone: 'WindowsPhone',
        webos: 'webOS',
        blackberry: 'BlackBerry',
        rimTablet: 'RIMTablet',
        mac: 'MacOS',
        win: 'Windows',
        tizen: 'Tizen',
        linux: 'Linux',
        bada: 'Bada',
        chrome: 'ChromeOS',
        other: 'Other'
    },
    prefixes: {
        tizen: '(Tizen )',
        ios: 'i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ',
        android: '(Android |HTC_|Silk/)', 
                                    
        windowsPhone: 'Windows Phone ',
        blackberry: '(?:BlackBerry|BB)(?:.*)Version\/',
        rimTablet: 'RIM Tablet OS ',
        webos: '(?:webOS|hpwOS)\/',
        bada: 'Bada\/',
        chrome: 'CrOS '
    },

    
    is: function (name) {
        return !!this[name];
    },

    
    name: null,

    
    version: null,

    setFlag: function(name, value) {
        if (typeof value == 'undefined') {
            value = true;
        }

        if (this.flags) {
            this.flags[name] = value;
        }
        this.is[name] = value;
        this.is[name.toLowerCase()] = value;

        return this;
    }
};

(function() {
    var navigation = Ext.global.navigator,
        userAgent = navigation.userAgent,
        OS = Ext.env.OS,
        is = (Ext.is || (Ext.is = {})),
        osEnv, osName, deviceType;

    OS.prototype.flags = is;

    
    Ext.os = osEnv = new OS(userAgent, navigation.platform);

    osName = osEnv.name;

    
    Ext['is' + osName] = true; 
    Ext.isMac = is.Mac = is.MacOS;

    var search = window.location.search.match(/deviceType=(Tablet|Phone)/),
        nativeDeviceType = window.deviceType;

    
    
    if (search && search[1]) {
        deviceType = search[1];
    }
    else if (nativeDeviceType === 'iPhone') {
        deviceType = 'Phone';
    }
    else if (nativeDeviceType === 'iPad') {
        deviceType = 'Tablet';
    }
    else {
        if (!osEnv.is.Android && !osEnv.is.iOS && !osEnv.is.WindowsPhone && /Windows|Linux|MacOS/.test(osName)) {
            deviceType = 'Desktop';

            
            Ext.browser.is.WebView = !!Ext.browser.is.Ripple;
        }
        else if (osEnv.is.iPad || osEnv.is.RIMTablet || osEnv.is.Android3 || Ext.browser.is.Silk || (osEnv.is.Android4 && userAgent.search(/mobile/i) == -1)) {
            deviceType = 'Tablet';
        }
        else {
            deviceType = 'Phone';
        }
    }

    
    osEnv.setFlag(deviceType, true);
    osEnv.deviceType = deviceType;

    delete OS.prototype.flags;
}());


Ext.feature = {







    
    has: function (name) {
        return !!this.has[name];
    },

    testElements: {},

    getTestElement: function(tag, createNew) {
        if (tag === undefined) {
            tag = 'div';
        }
        else if (typeof tag !== 'string') {
            return tag;
        }

        if (createNew) {
            return document.createElement(tag);
        }

        if (!this.testElements[tag]) {
            this.testElements[tag] = document.createElement(tag);
        }

        return this.testElements[tag];
    },

    isStyleSupported: function(name, tag) {
        var elementStyle = this.getTestElement(tag).style,
            cName = Ext.String.capitalize(name);

        if (typeof elementStyle[name] !== 'undefined'
            || typeof elementStyle[Ext.browser.getStylePrefix(name) + cName] !== 'undefined') {
            return true;
        }

        return false;
    },

    isStyleSupportedWithoutPrefix: function(name, tag) {
        var elementStyle = this.getTestElement(tag).style;

        if (typeof elementStyle[name] !== 'undefined') {
            return true;
        }

        return false;
    },

    isEventSupported: function(name, tag) {
        if (tag === undefined) {
            tag = window;
        }

        var element = this.getTestElement(tag),
            eventName = 'on' + name.toLowerCase(),
            isSupported = (eventName in element);

        if (!isSupported) {
            if (element.setAttribute && element.removeAttribute) {
                element.setAttribute(eventName, '');
                isSupported = typeof element[eventName] === 'function';

                if (typeof element[eventName] !== 'undefined') {
                    element[eventName] = undefined;
                }

                element.removeAttribute(eventName);
            }
        }

        return isSupported;
    },

    
    
    
    getStyle: function (element, styleName) {
        var view = element.ownerDocument.defaultView,
            style = (view ? view.getComputedStyle(element, null) : element.currentStyle) 
                        || element.style;
        return style[styleName];
    },

    getSupportedPropertyName: function(object, name) {
        var vendorName = Ext.browser.getVendorProperyName(name);

        if (vendorName in object) {
            return vendorName;
        }
        else if (name in object) {
            return name;
        }

        return null;
    },

    
    detect: function (isReady) {
        var me = this,
            doc = document,
            toRun = me.toRun || me.tests,
            n = toRun.length,
            div = doc.createElement('div'),
            notRun = [],
            supports = Ext.supports,
            has = me.has,
            name, test, vector, value;

        
        if (!Ext.theme) {
            Ext.theme = {
                name: 'Default'
            };
        }

        Ext.theme.is = {};
        Ext.theme.is[Ext.theme.name] = true;

        
        
        div.innerHTML =
            '<div style="height:30px;width:50px;">' +
                '<div style="height:20px;width:20px;"></div>' +
            '</div>' +
            '<div style="width: 200px; height: 200px; position: relative; padding: 5px;">' +
                '<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>' +
            '</div>' +
            '<div style="position: absolute; left: 10%; top: 10%;"></div>' +
            '<div style="float:left; background-color:transparent;"></div>';
        if (isReady) {
            doc.body.appendChild(div);
        }

        vector = me.preDetected[Ext.browser.identity] || [];
        while (n--) {
            test = toRun[n];
            value = vector[n];
            name = test.name;

            if (value === undefined) {
                if (!isReady && test.ready) {
                    
                    notRun.push(test);
                    continue;
                }

                value = test.fn.call(me, doc, div);
            }

            
            supports[name] = has[name] = value;
        }

        if (isReady) {
            doc.body.removeChild(div);
        }

        me.toRun = notRun;
    },

    
    report: function () {
        var values = [],
            len = this.tests.length,
            i;

        for (i = 0; i < len; ++i) {
            values.push(this.has[this.tests[i].name] ? 1 : 0);
        }

        Ext.log(Ext.browser.identity + ': [' + values.join(',') + ']');
    },
    

    preDetected: {
        
    },

    
    tests: [{
        
        name: 'CSSPointerEvents',
        fn: function (doc) {
            return 'pointerEvents' in doc.documentElement.style;
        }
    },{
        
        name: 'CSS3BoxShadow',
        fn: function (doc) {
            return 'boxShadow' in doc.documentElement.style || 'WebkitBoxShadow' in doc.documentElement.style || 'MozBoxShadow' in doc.documentElement.style;
        }
    },{
        
        name: 'ClassList',
        fn: function (doc) {
            return !!doc.documentElement.classList;
        }
    },{
        
        name: 'TimeoutActualLateness',
        fn: function () {
            setTimeout(function() {
                Ext.supports.TimeoutActualLateness = arguments.length !== 0;
            }, 0);
        }
    },{
        
        name: 'Canvas',
        fn: function() {
            var element = this.getTestElement('canvas');
            return !!(element && element.getContext && element.getContext('2d'));
        }
    },{
        
        name: 'Svg',
        fn: function(doc) {
            return !!(doc.createElementNS && !!doc.createElementNS("http:/" + "/www.w3.org/2000/svg", "svg").createSVGRect);
        }
    },{
        
        name: 'Vml',
        fn: function() {
            var element = this.getTestElement(),
                ret = false;

            element.innerHTML = "<!--[if vml]><br><![endif]-->";
            ret = (element.childNodes.length === 1);
            element.innerHTML = "";

            return ret;
        }
    },{
        
        name: 'TouchEvents',
        fn: function() {
            return this.isEventSupported('touchend');
        }
    },{
        
        name: 'Touch',
        fn: function() {
            
            
            return this.isEventSupported('touchend') ||
                    
                    
                    
                    navigator.maxTouchPoints ||
                    
                    navigator.msMaxTouchPoints;
        }
    },{
        name: 'PointerEvents',
        fn: function() {
            return navigator.pointerEnabled;
        }
    },{
        name: 'MSPointerEvents',
        fn: function() {
            return navigator.msPointerEnabled;
        }
    },{
        
        name: 'Orientation',
        fn: function() {
            return ('orientation' in window) && this.isEventSupported('orientationchange');
        }
    },{
        
        name: 'OrientationChange',
        fn: function() {
            return this.isEventSupported('orientationchange');
        }
    },{
        
        name: 'DeviceMotion',
        fn: function() {
            return this.isEventSupported('devicemotion');
        }
    },{
        
        
        names: [ 'Geolocation', 'GeoLocation' ],
        fn: function() {
            return 'geolocation' in window.navigator;
        }
    },{
        name: 'SqlDatabase',
        fn: function() {
            return 'openDatabase' in window;
        }
    },{
        name: 'WebSockets',
        fn: function() {
            return 'WebSocket' in window;
        }
    },{
        
        name: 'Range',
        fn: function() {
            return !!document.createRange;
        }
    },{
        
        name: 'CreateContextualFragment',
        fn: function() {
            var range = !!document.createRange ? document.createRange() : false;
            return range && !!range.createContextualFragment;
        }
    },{
        
        name: 'History',
        fn: function() {
            return ('history' in window && 'pushState' in window.history);
        }
    },{
        name: 'CssTransforms',
        fn: function() {
            return this.isStyleSupported('transform');
        }
    },{
        name: 'CssTransformNoPrefix',
        fn: function() {
            return this.isStyleSupportedWithoutPrefix('transform');
        }
    },{
        
        name: 'Css3dTransforms',
        fn: function() {
            
            return this.has('CssTransforms') && this.isStyleSupported('perspective') && 
                    !Ext.browser.is.AndroidStock2;
            
            
        }
    },{
        name: 'CssAnimations',
        fn: function() {
            return this.isStyleSupported('animationName');
        }
    },{
        
        names: [ 'CssTransitions', 'Transitions' ],
        fn: function() {
            return this.isStyleSupported('transitionProperty');
        }
    },{
        
        
        names: [ 'Audio', 'AudioTag' ],
        fn: function() {
            return !!this.getTestElement('audio').canPlayType;
        }
    },{
        
        name: 'Video',
        fn: function() {
            return !!this.getTestElement('video').canPlayType;
        }
    },{
        
        name: 'LocalStorage',
        fn: function() {
            try {
                
                
                if ('localStorage' in window && window['localStorage'] !== null) {
                    
                    localStorage.setItem('sencha-localstorage-test', 'test success');
                    
                    localStorage.removeItem('sencha-localstorage-test');
                    return true;
                }
            } catch ( e ) {
                
            }

            return false;
        }
    },{
        
        name: 'XHR2',
        fn: function() {
          return window.ProgressEvent && window.FormData && window.XMLHttpRequest &&
              ('withCredentials' in new XMLHttpRequest);
        }
    }, {
        
        name: 'XHRUploadProgress',
        fn: function() {
            if(window.XMLHttpRequest && !Ext.browser.is.AndroidStock) {
                var xhr = new XMLHttpRequest();
                return xhr && ('upload' in xhr) && ('onprogress' in xhr.upload);
            }
            return false;
        }
    }, {
        
        name: 'NumericInputPlaceHolder',
        fn: function() {
            return !(Ext.browser.is.AndroidStock4 && Ext.os.version.getMinor() < 2);
        }
    },{
        name: 'ProperHBoxStretching',
        ready: true,
        fn: function() {
            
            var bodyElement = document.createElement('div'),
                innerElement = bodyElement.appendChild(document.createElement('div')),
                contentElement = innerElement.appendChild(document.createElement('div')),
                innerWidth;

            bodyElement.setAttribute('style', 'width: 100px; height: 100px; position: relative;');
            innerElement.setAttribute('style', 'position: absolute; display: -ms-flexbox; display: -webkit-flex; display: -moz-flexbox; display: flex; -ms-flex-direction: row; -webkit-flex-direction: row; -moz-flex-direction: row; flex-direction: row; min-width: 100%;');
            contentElement.setAttribute('style', 'width: 200px; height: 50px;');
            document.body.appendChild(bodyElement);
            innerWidth = innerElement.offsetWidth;
            document.body.removeChild(bodyElement);

            return (innerWidth > 100);
        }
    },

    
    {
        name: 'matchesSelector',
        fn: function() {
            var el = document.documentElement,
                w3 = 'matches',
                wk = 'webkitMatchesSelector',
                ms = 'msMatchesSelector',
                mz = 'mozMatchesSelector';

            return el[w3] ? w3 : el[wk] ? wk : el[ms] ? ms : el[mz] ? mz : null;
        }
    }

    ,
    
    {
        name: 'RightMargin',
        ready: true,
        fn: function(doc, div) {
            var view = doc.defaultView;
            return !(view && view.getComputedStyle(div.firstChild.firstChild, null).marginRight != '0px');
        }
    },

    
    {
        name: 'DisplayChangeInputSelectionBug',
        fn: function() {
            var webKitVersion = Ext.webKitVersion;
            
            return 0 < webKitVersion && webKitVersion < 533;
        }
    },

    
    {
        name: 'DisplayChangeTextAreaSelectionBug',
        fn: function() {
            var webKitVersion = Ext.webKitVersion;

            
            return 0 < webKitVersion && webKitVersion < 534.24;
        }
    },

    
    {
        name: 'TransparentColor',
        ready: true,
        fn: function(doc, div, view) {
            view = doc.defaultView;
            return !(view && view.getComputedStyle(div.lastChild, null).backgroundColor != 'transparent');
        }
    },

    
    {
        name: 'ComputedStyle',
        ready: true,
        fn: function(doc, div, view) {
            view = doc.defaultView;
            return view && view.getComputedStyle;
        }
    },

    
    {
        name: 'Float',
        fn: function(doc) {
            return 'cssFloat' in doc.documentElement.style;
        }
    },

    
    {
        name: 'CSS3BorderRadius',
        ready: true,
        fn: function(doc) {
            var domPrefixes = ['borderRadius', 'BorderRadius', 'MozBorderRadius',
                               'WebkitBorderRadius', 'OBorderRadius', 'KhtmlBorderRadius'],
                pass = false,
                i;
            for (i = 0; i < domPrefixes.length; i++) {
                if (doc.documentElement.style[domPrefixes[i]] !== undefined) {
                    return true;
                }
            }
            return pass;
        }
    },

    
    {
        name: 'CSS3LinearGradient',
        fn: function(doc, div) {
            var property = 'background-image:',
                webkit   = '-webkit-gradient(linear, left top, right bottom, from(black), to(white))',
                w3c      = 'linear-gradient(left top, black, white)',
                moz      = '-moz-' + w3c,
                ms       = '-ms-' + w3c,
                opera    = '-o-' + w3c,
                options  = [property + webkit, property + w3c, property + moz, property + ms, property + opera];

            div.style.cssText = options.join(';');

            return (("" + div.style.backgroundImage).indexOf('gradient') !== -1) && !Ext.isIE9;
        }
    },

    
    {
        name: 'MouseEnterLeave',
        fn: function(doc){
            return ('onmouseenter' in doc.documentElement && 'onmouseleave' in doc.documentElement);
        }
    },

    
    {
        name: 'MouseWheel',
        fn: function(doc) {
            return ('onmousewheel' in doc.documentElement);
        }
    },

    
    {
        name: 'Opacity',
        fn: function(doc, div){
            
            if (Ext.isIE8) {
                return false;
            }
            div.firstChild.style.cssText = 'opacity:0.73';
            return div.firstChild.style.opacity == '0.73';
        }
    },

    
    {
        name: 'Placeholder',
        fn: function(doc) {
            return 'placeholder' in doc.createElement('input');
        }
    },

    
    {
        name: 'Direct2DBug',
        fn: function(doc) {
            return Ext.isString(doc.documentElement.style.msTransformOrigin) && Ext.isIE10m;
        }
    },

    
    {
        name: 'BoundingClientRect',
        fn: function(doc) {
            return 'getBoundingClientRect' in doc.documentElement;
        }
    },

    
    {
        name: 'RotatedBoundingClientRect',
        ready: true,
        fn: function(doc) {
            var body = doc.body,
                supports = false,
                el = this.getTestElement(),
                style = el.style;

            if (el.getBoundingClientRect) {
                style.WebkitTransform = style.MozTransform =
                    style.OTransform = style.transform = 'rotate(90deg)';
                style.width = '100px';
                style.height = '30px';
                body.appendChild(el)

                supports = el.getBoundingClientRect().height !== 100;
                body.removeChild(el);
            }

            return supports;
        }
    },
    {
        name: 'IncludePaddingInWidthCalculation',
        ready: true,
        fn: function(doc, div){
            return div.childNodes[1].firstChild.offsetWidth == 210;
        }
    },
    {
        name: 'IncludePaddingInHeightCalculation',
        ready: true,
        fn: function(doc, div){
            return div.childNodes[1].firstChild.offsetHeight == 210;
        }
    },

    
    {
        name: 'TextAreaMaxLength',
        fn: function(doc){
            return ('maxlength' in doc.createElement('textarea'));
        }
    },
    
    
    {
        name: 'GetPositionPercentage',
        ready: true,
        fn: function(doc, div){
           return Ext.feature.getStyle(div.childNodes[2], 'left') == '10%';
        }
    },
    
    {
        name: 'PercentageHeightOverflowBug',
        ready: true,
        fn: function(doc) {
            var hasBug = false,
                style, el;

            if (Ext.getScrollbarSize().height) {
                
                el = this.getTestElement();
                style = el.style;
                style.height = '50px';
                style.width = '50px';
                style.overflow = 'auto';
                style.position = 'absolute';

                el.innerHTML = [
                    '<div style="display:table;height:100%;">',
                        
                        
                        
                        '<div style="width:51px;"></div>',
                    '</div>'
                ].join('');
                doc.body.appendChild(el);
                if (el.firstChild.offsetHeight === 50) {
                    hasBug = true;
                }
                doc.body.removeChild(el);
            }

            return hasBug;
        }
    },

    
    {
        name: 'xOriginBug',
        ready: true,
        fn: function(doc, div) {
           div.innerHTML = '<div id="b1" style="height:100px;width:100px;direction:rtl;position:relative;overflow:scroll">' +
                '<div id="b2" style="position:relative;width:100%;height:20px;"></div>' +
                '<div id="b3" style="position:absolute;width:20px;height:20px;top:0px;right:0px"></div>' +
            '</div>';

            var outerBox = document.getElementById('b1').getBoundingClientRect(),
                b2 = document.getElementById('b2').getBoundingClientRect(),
                b3 = document.getElementById('b3').getBoundingClientRect();

            return (b2.left !== outerBox.left && b3.right !== outerBox.right);
        }
    },

    
    {
        name: 'ScrollWidthInlinePaddingBug',
        ready: true,
        fn: function(doc) {
            var hasBug = false,
                style, el;

            el = doc.createElement('div');
            style = el.style;
            style.height = '50px';
            style.width = '50px';
            style.padding = '10px';
            style.overflow = 'hidden';
            style.position = 'absolute';

            el.innerHTML =
                '<span style="display:inline-block;zoom:1;height:60px;width:60px;"></span>';
            doc.body.appendChild(el);
            if (el.scrollWidth === 70) {
                hasBug = true;
            }
            doc.body.removeChild(el);

            return hasBug;
        }
    },

    
    {
        name: 'rtlVertScrollbarOnRight',
        ready: true,
        fn: function(doc, div) {
           div.innerHTML = '<div style="height:100px;width:100px;direction:rtl;overflow:scroll">' +
                '<div style="width:20px;height:200px;"></div>' +
            '</div>';

            var outerBox = div.firstChild,
                innerBox = outerBox.firstChild;

            return (innerBox.offsetLeft + innerBox.offsetWidth !== outerBox.offsetLeft + outerBox.offsetWidth);
        }
    },

    
    {
        name: 'rtlVertScrollbarOverflowBug',
        ready: true,
        fn: function(doc, div) {
           div.innerHTML = '<div style="height:100px;width:100px;direction:rtl;overflow:auto">' +
                '<div style="width:95px;height:200px;"></div>' +
            '</div>';

            
            
            
            var outerBox = div.firstChild;
            return outerBox.clientHeight === outerBox.offsetHeight;
        }
    },
    {
        identity: 'defineProperty',
        fn: function () {
            if (Ext.isIE8m) {
                Ext.Object.defineProperty = Ext.emptyFn;
                return false;
            }
            return true;
        }
    },
    {
        identify: 'nativeXhr',
        fn: function () {
            if (typeof XMLHttpRequest !== 'undefined') {
                return true;
            }

            
            XMLHttpRequest = function() {
                try {
                    return new ActiveXObject('MSXML2.XMLHTTP.3.0');
                }
                catch (ex) {
                    return null;
                }
            }
            return false;
        }
    },

    
    {
        name: 'SpecialKeyDownRepeat',
        fn: function() {
            return Ext.isWebKit ?
                parseInt(navigator.userAgent.match(/AppleWebKit\/(\d+)/)[1], 10) >= 525 :
                !((Ext.isGecko && !Ext.isWindows) || (Ext.isOpera && Ext.operaVersion < 12));
        }
    },
    
    {
        name: 'EmulatedMouseOver',
        fn: function() {
            
            return Ext.os.is.iOS;
        }
    },

    
    {
        
        name: 'Hashchange',
        fn: function() {
            
            var docMode = document.documentMode;
            return 'onhashchange' in window && (docMode === undefined || docMode > 7);
        }
    },

    
    {
        name: 'MinWidthTableCellBug',
        ready: true,
        fn: function() {
            if (Ext.isIE8) {
                
                return false;
            }
            var outer = document.createElement('div'),
                inner = document.createElement('div'),
                width;

            outer.setAttribute('style', 'display:table;table-layout:fixed;');
            inner.setAttribute('style', 'display:table-cell;min-width:50px;');

            outer.appendChild(inner);
            document.body.appendChild(outer);

            
            outer.offsetWidth;

            outer.style.width = '25px';

            width = outer.offsetWidth;

            document.body.removeChild(outer);

            return width === 50;
        }
    }


    ]
};

Ext.supports = {};

Ext.feature.detect();


Ext.env.Ready = {





    
    blocks: 0,

    
    bound: 0,

    
    delay: 1,

    
    events: [],

    
    firing: false,

    
    generation: 0,

    
    listeners: [],

    
    nextId: 0,

    
    sortGeneration: 0,

    
    state: 0,

    
    timer: null,

    
    bind: function () {
        var me = Ext.env.Ready,
            doc = document;

        if (!me.bound) {
            
            if (doc.readyState == 'complete') {
                
                me.onReadyEvent({
                    type: doc.readyState || 'body'
                });
            } else {
                me.bound = 1;
                if (Ext.browser.is.PhoneGap && !Ext.os.is.Desktop) {
                    me.bound = 2;
                    doc.addEventListener('deviceready', me.onReadyEvent, false);
                }
                doc.addEventListener('DOMContentLoaded', me.onReadyEvent, false);
                window.addEventListener('load', me.onReadyEvent, false);
            }
        }
    },

    block: function () {
        ++this.blocks;
    },

    
    fireReady: function () {
        var me = Ext.env.Ready;

        if (!me.state) {
            Ext._readyTime = Ext.now();
            Ext.isDomReady = true;
            me.state = 1;

            
            Ext.feature.detect(true);

            if (!me.delay) {
                me.handleReady();
            } else if (navigator.standalone) {
                
                
                
                
                me.timer = setTimeout(function() {
                    me.timer = null;
                    me.handleReadySoon();
                }, 1);
            } else {
                me.handleReadySoon();
            }
        }
    },

    
    handleReady: function () {
        var me = this;

        if (me.state === 1) {
            if (me.isPaused()) {
                me.handleReadySoon(250); 
            } else {
                me.state = 2;

                Ext._beforeReadyTime = Ext.now();
                me.invokeAll();
                Ext._afterReadytime = Ext.now();
            }
        }
    },

    
    handleReadySoon: function (delay) {
        var me = this;

        if (!me.timer) {
            me.timer = setTimeout(function () {
                me.timer = null;
                me.handleReady();
            }, delay || me.delay);
        }
    },

    
    invoke: function (listener) {
        var delay = listener.delay;

        if (delay) {
            setTimeout(function () {
                listener.fn.call(listener.scope);
            }, delay);
        } else {
            listener.fn.call(listener.scope);
        }
    },

    
    invokeAll: function () {
        var me = this,
            listeners = me.listeners,
            listener;

        if (!me.blocks) {
            
            
            
            Ext.isReady = true;
        }
        me.firing = true;

        
        
        while (listeners.length) {
            if (me.sortGeneration !== me.generation) {
                me.sortGeneration = me.generation;

                
                
                
                
                listeners.sort(me.sortFn);
            }

            listener = listeners.pop();
            if (me.blocks && !listener.dom) {
                
                
                
                listeners.push(listener);
                break;
            }

            me.invoke(listener);
        }

        me.firing = false;
    },

    
    isPaused: function () {
        return (location.search || '').indexOf('ext-pauseReadyFire') > 0 &&
                !Ext._continueFireReady;
    },

    
    makeListener: function (fn, scope, options) {
        var ret = {
            fn: fn,
            id: ++this.nextId, 
            scope: scope,
            dom: false,
            priority: 0
        };
        if (options) {
            Ext.apply(ret, options);
        }
        ret.phase = ret.dom ? 0 : 1; 
        return ret;
    },

    
    on: function (fn, scope, options) {
        var me = Ext.env.Ready,
            listener = me.makeListener(fn, scope, options);

        if (me.state === 2 && !me.firing && (listener.dom || !me.blocks)) {
            
            
            
            
            
            
            
            me.invoke(listener);
        } else {
            me.listeners.push(listener);
            ++me.generation;

            if (!me.bound) {
                
                
                
                me.bind();
            }
        }
    },

    
    onReadyEvent: function (ev) {
        var me = Ext.env.Ready;

        if (ev && ev.type) {
            me.events.push(ev);
        }

        if (me.bound > 0) {
            me.unbind();
            me.bound = -1; 
        }

        if (!me.state) {
            me.fireReady();
        }
    },

    
    sortFn: function (a, b) {
        return -((a.phase - b.phase) || (b.priority - a.priority) || (a.id - b.id));
    },

    unblock: function () {
        var me = this;

        if (me.blocks) {
            if (! --me.blocks) {
                if (me.state === 2 && !me.firing) {
                    
                    
                    me.invokeAll();
                }
                
                
                
                
                
            }
        }
    },

    
    unbind: function () {
        var me = this,
            doc = document;

        if (me.bound > 1) {
            doc.removeEventListener('deviceready', me.onReadyEvent, false);
        }

        doc.removeEventListener('DOMContentLoaded', me.onReadyEvent, false);
        window.removeEventListener('load', me.onReadyEvent, false);
    }
};

(function () {
    var Ready = Ext.env.Ready;

    if (Ext.isIE8) {
        
        Ext.apply(Ready, {
            
            scrollTimer: null,

            
            readyStatesRe  : /complete/i,

            
            pollScroll : function() {
                var scrollable = true;

                try {
                    document.documentElement.doScroll('left');
                } catch(e) {
                    scrollable = false;
                }

                
                
                if (scrollable && document.body) {
                    Ready.onReadyEvent({
                        type: 'doScroll'
                    });
                } else {
                     
                     
                     
                    Ready.scrollTimer = setTimeout(Ready.pollScroll, 20);
                }

                return scrollable;
            },

            bind: function () {
                if (Ready.bound) {
                    return;
                }

                var doc = document,
                    topContext;

                
                try {
                    topContext = window.frameElement === undefined;
                } catch(e) {
                    
                    
                }

                if (!topContext || !doc.documentElement.doScroll) {
                    Ready.pollScroll = Ext.emptyFn;   
                }
                else if (Ready.pollScroll()) { 
                    return;
                }

                if (doc.readyState == 'complete')  {
                    
                    Ready.onReadyEvent({
                        type: 'already ' + (doc.readyState || 'body')
                    });
                } else {
                    doc.attachEvent('onreadystatechange', Ready.onReadyStateChange);
                    window.attachEvent('onload', Ready.onReadyEvent);
                    Ready.bound = 1;
                }
            },

            unbind : function () {
                document.detachEvent('onreadystatechange', Ready.onReadyStateChange);
                window.detachEvent('onload', Ready.onReadyEvent);

                if (Ext.isNumber(Ready.scrollTimer)) {
                    clearTimeout(Ready.scrollTimer);
                    Ready.scrollTimer = null;
                }
            },

            
            onReadyStateChange: function() {
                var state = document.readyState;

                if (Ready.readyStatesRe.test(state)) {
                    Ready.onReadyEvent({
                        type: state
                    });
                }
            }
        });
    }

    

    

    
    Ext.onDocumentReady = function (fn, scope, options) {
        var opt = {
            dom: true
        };

        if (options) {
            Ext.apply(opt, options);
        }

        Ready.on(fn, scope, opt);
    };

    
    Ext.onReady = function (fn, scope, options) {
        Ready.on(fn, scope, options);
    };

    Ready.bind();
}());



Ext.Loader = new function() {








    var Loader = this,
        Manager = Ext.ClassManager, 
        Boot = Ext.Boot,
        Class = Ext.Class,
        Ready = Ext.env.Ready,
        alias = Ext.Function.alias,
        dependencyProperties = ['extend', 'mixins', 'requires'],
        isInHistory = {},
        history = [],
        readyListeners = [],
        usedClasses = [],
        _requiresMap = {},
        _missingQueue = {},
        _config = {
            
            enabled: true,

            
            scriptChainDelay: false,

            
            disableCaching: true,

            
            disableCachingParam: '_dc',

            
            paths: Manager.paths,

            
            preserveScripts: true,

            
            scriptCharset: undefined
        },
        
        delegatedConfigs = {
            disableCaching: true,
            disableCachingParam: true,
            preserveScripts: true,
            scriptChainDelay: 'loadDelay'
        };

    Ext.apply(Loader, {
        
        isInHistory: isInHistory,

        
        isLoading: false,

        
        history: history,

        
        config: _config,

        
        readyListeners: readyListeners,

        
        optionalRequires: usedClasses,

        
        requiresMap: _requiresMap,

        
        hasFileLoadError: false,

        
        scriptsLoading: 0,

        
        classesLoading: [],

        
        syncModeEnabled: false,

        
        
        missingQueue: _missingQueue,
        
        init: function () {
            
            var scripts = document.getElementsByTagName('script'),
                src = scripts[scripts.length - 1].src,
                path = src.substring(0, src.lastIndexOf('/') + 1),
                meta = Ext._classPathMetadata,
                microloader = Ext.Microloader,
                manifest = Ext.manifest,
                loadOrder, baseUrl, loadlen, l, loadItem;

            if (src.indexOf("packages/sencha-core/src/") !== -1) {
                path = path + "../../";
            } else if (src.indexOf("/core/src/class/") !== -1) {
                path = path + "../../../";
            }

            
            if(!Manager.getPath("Ext")) {
                Manager.setPath('Ext', path + 'src');
            }

            
            if (meta) {
                Ext._classPathMetadata = null;
                Loader.addClassPathMappings(meta);
            }
            
            if(manifest) {
                loadOrder = manifest.loadOrder;
                
                
                
                baseUrl = Ext.Boot.baseUrl;
                if(loadOrder && manifest.bootRelative) {
                    for(loadlen = loadOrder.length, l = 0; l < loadlen; l++) {
                        loadItem = loadOrder[l];
                        loadItem.path = baseUrl + loadItem.path;
                    }                    
                }
            }
            
            if(microloader) {
                Ready.block();
                microloader.onMicroloaderReady(function(){
                    Ready.unblock();
                });
            }
        },

        
        setConfig: Ext.Function.flexSetter(function (name, value) {
            if (name === 'paths') {
                Loader.setPath(value);
            } else {
                _config[name] = value;

                var delegated = delegatedConfigs[name];
                if (delegated) {
                    Boot.setConfig((delegated === true) ? name : delegated, value);
                }
            }

            return Loader;
        }),

        
        getConfig: function(name) {
            return name ? _config[name] : _config;
        },

        
        setPath: function () {
            
            Manager.setPath.apply(Manager, arguments);
            return Loader;
        },

        
        addClassPathMappings: function(paths) {
            
            Manager.setPath(paths);
            return Loader;
        },

        

        addBaseUrlClassPathMappings: function(pathConfig) {
            for(var name in pathConfig) {
                pathConfig[name] = Boot.baseUrl + pathConfig[name];
            }
            Ext.Loader.addClassPathMappings(pathConfig);
        },


        
        getPath: function(className) {
            
            return Manager.getPath(className);
        },

        require: function (expressions, fn, scope, excludes) {
            if (excludes) {
                return Loader.exclude(excludes).require(expressions, fn, scope);
            }

            var classNames = Manager.getNamesByExpression(expressions);

            return Loader.load(classNames, fn, scope);
        },

        syncRequire: function () {
            var wasEnabled = Loader.syncModeEnabled;

            Loader.syncModeEnabled = true;

            var ret = Loader.require.apply(Loader, arguments);

            Loader.syncModeEnabled = wasEnabled;

            return ret;
        },

        exclude: function (excludes) {
            var selector = Manager.select({
                    require: function (classNames, fn, scope) {
                        return Loader.load(classNames, fn, scope);
                    },

                    syncRequire: function (classNames, fn, scope) {
                        var wasEnabled = Loader.syncModeEnabled;

                        Loader.syncModeEnabled = true;

                        var ret = Loader.load(classNames, fn, scope);

                        Loader.syncModeEnabled = wasEnabled;

                        return ret;
                    }
                });

            selector.exclude(excludes);
            return selector;
        },

        load: function (classNames, callback, scope) {
            if (callback) {
                if (callback.length) {
                    
                    
                    callback = Loader.makeLoadCallback(classNames, callback);
                }
                callback = callback.bind(scope || Ext.global);
            }

            var missingClassNames = [],
                numClasses = classNames.length,
                className, i, numMissing, urls = [],
                state = Manager.classState;
            
            for (i = 0; i < numClasses; ++i) {
                className = Manager.resolveName(classNames[i]);
                if (!Manager.isCreated(className)) {
                    missingClassNames.push(className);
                    _missingQueue[className] = Loader.getPath(className);
                    if(!state[className]) {
                        urls.push(_missingQueue[className]);
                    }
                }
            }

            
            
            numMissing = missingClassNames.length;
            if (numMissing) {
                Loader.missingCount += numMissing;
                Ext.Array.push(Loader.classesLoading, missingClassNames);

                
                
                
                
                
                
                
                
                Ext.each(missingClassNames, function(name, index) {
                    Manager.onExists(function() {
                        var key = Ext.Boot.canonicalUrl(urls[index]),
                            entry = Ext.Boot.scripts[key];
                        if (entry && !entry.done) {
                            Ext.Boot.notifyAll(entry);
                        }
                    }, Loader, name);
                });

                
                
                
                
                Manager.onExists(function () {
                    Ext.Array.remove(Loader.classesLoading, missingClassNames);
                    Ext.each(missingClassNames, function(name){
                        Ext.Array.remove(Loader.classesLoading, name);
                    });
                    if (callback) {
                        Ext.callback(callback, scope, arguments);
                    }
                    Loader.checkReady();
                }, Loader, missingClassNames);

                if (!_config.enabled) {
                    Ext.Error.raise("Ext.Loader is not enabled, so dependencies cannot be resolved dynamically. " +
                             "Missing required class" + ((missingClassNames.length > 1) ? "es" : "") + 
                             ": " + missingClassNames.join(', '));
                }

                if(urls.length) {
                    Loader.loadScripts({
                        url: urls,
                        
                        _classNames: missingClassNames
                    });
                } else {
                    
                    
                    
                    Loader.checkReady();
                }
            } else {
                if (callback) {
                    callback.call(scope);
                }
                
                
                
                Loader.checkReady();
            }
            
            if (Loader.syncModeEnabled) {
                
                if (numClasses === 1) {
                    return Manager.get(classNames[0]);
                }
            }

            return Loader;
        },

        makeLoadCallback: function (classNames, callback) {
            return function () {
                var classes = [],
                    i = classNames.length;

                while (i-- > 0) {
                    classes[i] = Manager.get(classNames[i]);
                }

                return callback.apply(this, classes);
            }
        },
        
        onLoadFailure: function () {
            var options = this,
                onError = options.onError;

            Loader.hasFileLoadError = true;
            --Loader.scriptsLoading;

            if (onError) {
                
                onError.call(options.userScope, options);
            }
            else {
                Ext.Error.raise("[Ext.Loader] Some requested files failed to load.");
            }

            Loader.checkReady();
        },

        onLoadSuccess: function () {
            var options = this,
                onLoad = options.onLoad;

            --Loader.scriptsLoading;
            if (onLoad) {
                
                onLoad.call(options.userScope, options);
                
            }

            Loader.checkReady();
        },


        reportMissingClasses: function () {
            if (!Loader.syncModeEnabled && !Loader.scriptsLoading && Loader.isLoading &&
                    !Loader.hasFileLoadError) {
                var missingClasses = [],
                    missingPaths = [];

                for (var missingClassName in _missingQueue) {
                    missingClasses.push(missingClassName);
                    missingPaths.push(_missingQueue[missingClassName]);
                }

                if (missingClasses.length) {
                    throw new Error("The following classes are not declared even if their files have been " +
                        "loaded: '" + missingClasses.join("', '") + "'. Please check the source code of their " +
                        "corresponding files for possible typos: '" + missingPaths.join("', '"));
                }
            }
        },

        
        onReady: function(fn, scope, withDomReady, options) {
            if (withDomReady) {
                Ready.on(fn, scope, options);
            } else {
                var listener = Ready.makeListener(fn, scope, options);

                if (Loader.isLoading) {
                    readyListeners.push(listener);
                } else {
                    Ready.invoke(listener);
                }
            }
        },

        
        addUsedClasses: function (classes) {
            var cls, i, ln;

            if (classes) {
                classes = (typeof classes === 'string') ? [classes] : classes;
                for (i = 0, ln = classes.length; i < ln; i++) {
                    cls = classes[i];
                    if (typeof cls === 'string' && !Ext.Array.contains(usedClasses, cls)) {
                        usedClasses.push(cls);
                    }
                }
            }

            return Loader;
        },

        
        triggerReady: function() {
            var listener,
                refClasses = usedClasses;

            if (Loader.isLoading && refClasses.length) {
                
                usedClasses = [];

                
                
                Loader.require(refClasses);
            } else {
                
                
                Loader.isLoading = false;

                
                
                readyListeners.sort(Ready.sortFn);

                
                
                
                while (readyListeners.length && !Loader.isLoading) {
                    
                    
                    listener = readyListeners.pop();
                    Ready.invoke(listener);
                }

                
                
                
                
                
                
                
                
                Ready.unblock();
            }
        },

        
        historyPush: function(className) {
            if (className && !isInHistory[className]) {
                isInHistory[className] = true;
                history.push(className);
            }
            return Loader;
        },

        
        loadScripts: function(params) {
            var manifest = Ext.manifest,
                loadOrder = manifest && manifest.loadOrder,
                loadOrderMap = manifest && manifest.loadOrderMap,
                options;
            
            ++Loader.scriptsLoading;
            
            
            
            if (loadOrder && !loadOrderMap) {
                manifest.loadOrderMap = loadOrderMap = Boot.createLoadOrderMap(loadOrder);
            }

            
            
            Loader.checkReady();

            options = Ext.apply({
                loadOrder: loadOrder,
                loadOrderMap: loadOrderMap,
                charset: _config.scriptCharset,
                success: Loader.onLoadSuccess,
                failure: Loader.onLoadFailure,
                sync: Loader.syncModeEnabled,
                _classNames: []
            }, params);

            options.userScope = options.scope;
            options.scope = options;

            Boot.load(options);
        },

        
        loadScriptsSync: function(urls) {
            var syncwas = Loader.syncModeEnabled;
            Loader.syncModeEnabled = true;
            Loader.loadScripts({url: urls});
            Loader.syncModeEnabled = syncwas;
        },

        
        loadScriptsSyncBasePrefix: function(urls) {
            var syncwas = Loader.syncModeEnabled;
            Loader.syncModeEnabled = true;
            Loader.loadScripts({url: urls, prependBaseUrl: true});
            Loader.syncModeEnabled = syncwas;
        },
        
        
        loadScript: function(options) {
            var isString = typeof options === 'string',
                isArray = options instanceof Array,
                isObject = !isArray && !isString,
                url = isObject ? options.url : options,
                onError = isObject && options.onError,
                onLoad = isObject && options.onLoad,
                scope = isObject && options.scope,
                request = {
                    url: url,
                    scope: scope,
                    onLoad: onLoad,
                    onError: onError,
                    _classNames: []
                };

            Loader.loadScripts(request);
        },

        
        flushMissingQueue: function() {
            var name, val, missingwas = 0, missing = 0;
            
            for(name in _missingQueue) {
                missingwas++;
                val = _missingQueue[name];
                if(Manager.isCreated(name)) {
                    delete _missingQueue[name];
                } else if (Manager.existCache[name] === 2) {
                    delete _missingQueue[name];
                } else {
                    ++missing;
                }
            }
            this.missingCount = missing;
        },

        
        checkReady: function() {
            var wasLoading = Loader.isLoading,
                isLoading;

            Loader.flushMissingQueue();
            isLoading = Loader.missingCount + Loader.scriptsLoading;
            
            if(isLoading && !wasLoading) {
                Ready.block();
                Loader.isLoading = !!isLoading;
            } else if (!isLoading && wasLoading) {
                Loader.triggerReady();
            }
        }
    });

    
    Ext.require = alias(Loader, 'require');

    
    Ext.syncRequire = alias(Loader, 'syncRequire');

    
    Ext.exclude = alias(Loader, 'exclude');

    
    Class.registerPreprocessor('loader', function(cls, data, hooks, continueFn) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(cls, 'Ext.Loader#loaderPreprocessor', arguments);
        
        var me = this,
            dependencies = [],
            dependency,
            className = Manager.getName(cls),
            i, j, ln, subLn, value, propertyName, propertyValue,
            requiredMap;

        

        for (i = 0,ln = dependencyProperties.length; i < ln; i++) {
            propertyName = dependencyProperties[i];

            if (data.hasOwnProperty(propertyName)) {
                propertyValue = data[propertyName];

                if (typeof propertyValue == 'string') {
                    dependencies.push(propertyValue);
                }
                else if (propertyValue instanceof Array) {
                    for (j = 0, subLn = propertyValue.length; j < subLn; j++) {
                        value = propertyValue[j];

                        if (typeof value == 'string') {
                            dependencies.push(value);
                        }
                    }
                }
                else if (typeof propertyValue != 'function') {
                    for (j in propertyValue) {
                        if (propertyValue.hasOwnProperty(j)) {
                            value = propertyValue[j];

                            if (typeof value == 'string') {
                                dependencies.push(value);
                            }
                        }
                    }
                }
            }
        }

        if (dependencies.length === 0) {
            return;
        }
        if (className) {
            _requiresMap[className] = dependencies;
        }

        var deadlockPath = [],
            detectDeadlock;

        

        if (className) {
            requiredMap = Loader.requiredByMap || (Loader.requiredByMap = {});

            for (i = 0,ln = dependencies.length; i < ln; i++) {
                dependency = dependencies[i];
                (requiredMap[dependency] || (requiredMap[dependency] = [])).push(className);
            }

            detectDeadlock = function(cls) {
                deadlockPath.push(cls);

                if (_requiresMap[cls]) {
                    if (Ext.Array.contains(_requiresMap[cls], className)) {
                        Ext.Error.raise("Circular requirement detected! '" + className +
                                "' and '" + deadlockPath[1] + "' mutually require each other. Path: " +
                                deadlockPath.join(' -> ') + " -> " + deadlockPath[0]);
                    }

                    for (i = 0,ln = _requiresMap[cls].length; i < ln; i++) {
                        detectDeadlock(_requiresMap[cls][i]);
                    }
                }
            };

            detectDeadlock(className);
        }


        (className ? Loader.exclude(className) : Loader).require(dependencies, function() {
            for (i = 0,ln = dependencyProperties.length; i < ln; i++) {
                propertyName = dependencyProperties[i];

                if (data.hasOwnProperty(propertyName)) {
                    propertyValue = data[propertyName];

                    if (typeof propertyValue == 'string') {
                        data[propertyName] = Manager.get(propertyValue);
                    }
                    else if (propertyValue instanceof Array) {
                        for (j = 0, subLn = propertyValue.length; j < subLn; j++) {
                            value = propertyValue[j];

                            if (typeof value == 'string') {
                                data[propertyName][j] = Manager.get(value);
                            }
                        }
                    }
                    else if (typeof propertyValue != 'function') {
                        for (var k in propertyValue) {
                            if (propertyValue.hasOwnProperty(k)) {
                                value = propertyValue[k];

                                if (typeof value == 'string') {
                                    data[propertyName][k] = Manager.get(value);
                                }
                            }
                        }
                    }
                }
            }

            continueFn.call(me, cls, data, hooks);
        });

        return false;
    }, true, 'after', 'className');

    
    Manager.registerPostprocessor('uses', function(name, cls, data) {
        Ext.classSystemMonitor && Ext.classSystemMonitor(cls, 'Ext.Loader#usesPostprocessor', arguments);
        
        var manifest = Ext.manifest,
            loadOrder = manifest && manifest.loadOrder,
            classes = manifest && manifest.classes,
            uses, clazz, item, len, i, indexMap;

        if (loadOrder) {
            clazz = classes[name];
            if (clazz && !isNaN(i = clazz.idx)) {
                item = loadOrder[i];
                uses = item.uses;
                indexMap = {};
                for (len = uses.length, i = 0; i < len; i++) {
                    indexMap[uses[i]] = true;
                }
                uses = Ext.Boot.getPathsFromIndexes(indexMap, loadOrder, true);
                if (uses.length > 0) {
                    Loader.loadScripts({
                        url: uses,
                        sequential: true
                    });
                }
            }
        }

        if (data.uses) {
            uses = data.uses;
            Loader.addUsedClasses(uses);
        }
    });

    Manager.onCreated(Loader.historyPush);

    Loader.init();
    
};



Ext._endTime = new Date().getTime();




if (Ext._beforereadyhandler){
    Ext._beforereadyhandler();
}

Ext.define('Ext.overrides.event.Event', {
    override: 'Ext.event.Event',

    
    mousedownEvents: {
        mousedown: 1,
        pointerdown: 1,
        touchstart: 1
    },

    getXY: function() {
        var me = this,
            xy = me.xy,
            x, browserEvent, doc, docEl, body;

        if (!xy) {
            xy = me.callParent();
            x = xy[0];

            
            if (!x && x !== 0) {
                browserEvent = me.browserEvent;
                doc = document;
                docEl = doc.documentElement;
                body = doc.body;
                xy[0] = browserEvent.clientX +
                    (docEl && docEl.scrollLeft || body && body.scrollLeft || 0) -
                    (docEl && docEl.clientLeft || body && body.clientLeft || 0);
                xy[1] = browserEvent.clientY +
                    (docEl && docEl.scrollTop  || body && body.scrollTop  || 0) -
                    (docEl && docEl.clientTop  || body && body.clientTop  || 0);
            }
        }

        return xy;
    },

    
    injectEvent: (function () {
        var API,
            dispatchers = {}, 
            crazyIEButtons;

        

        
        

        if (!Ext.isIE9m && document.createEvent) { 
            API = {
                createHtmlEvent: function (doc, type, bubbles, cancelable) {
                    var event = doc.createEvent('HTMLEvents');

                    event.initEvent(type, bubbles, cancelable);
                    return event;
                },

                createMouseEvent: function (doc, type, bubbles, cancelable, detail,
                                            clientX, clientY, ctrlKey, altKey, shiftKey, metaKey,
                                            button, relatedTarget) {
                    var event = doc.createEvent('MouseEvents'),
                        view = doc.defaultView || window;

                    if (event.initMouseEvent) {
                        event.initMouseEvent(type, bubbles, cancelable, view, detail,
                                    clientX, clientY, clientX, clientY, ctrlKey, altKey,
                                    shiftKey, metaKey, button, relatedTarget);
                    } else { 
                        event = doc.createEvent('UIEvents');
                        event.initEvent(type, bubbles, cancelable);
                        event.view = view;
                        event.detail = detail;
                        event.screenX = clientX;
                        event.screenY = clientY;
                        event.clientX = clientX;
                        event.clientY = clientY;
                        event.ctrlKey = ctrlKey;
                        event.altKey = altKey;
                        event.metaKey = metaKey;
                        event.shiftKey = shiftKey;
                        event.button = button;
                        event.relatedTarget = relatedTarget;
                    }

                    return event;
                },

                createUIEvent: function (doc, type, bubbles, cancelable, detail) {
                    var event = doc.createEvent('UIEvents'),
                        view = doc.defaultView || window;

                    event.initUIEvent(type, bubbles, cancelable, view, detail);
                    return event;
                },

                fireEvent: function (target, type, event) {
                    target.dispatchEvent(event);
                }
            };
        } else if (document.createEventObject) { 
            crazyIEButtons = { 0: 1, 1: 4, 2: 2 };

            API = {
                createHtmlEvent: function (doc, type, bubbles, cancelable) {
                    var event = doc.createEventObject();
                    event.bubbles = bubbles;
                    event.cancelable = cancelable;
                    return event;
                },

                createMouseEvent: function (doc, type, bubbles, cancelable, detail,
                                            clientX, clientY, ctrlKey, altKey, shiftKey, metaKey,
                                            button, relatedTarget) {
                    var event = doc.createEventObject();
                    event.bubbles = bubbles;
                    event.cancelable = cancelable;
                    event.detail = detail;
                    event.screenX = clientX;
                    event.screenY = clientY;
                    event.clientX = clientX;
                    event.clientY = clientY;
                    event.ctrlKey = ctrlKey;
                    event.altKey = altKey;
                    event.shiftKey = shiftKey;
                    event.metaKey = metaKey;
                    event.button = crazyIEButtons[button] || button;
                    event.relatedTarget = relatedTarget; 
                    return event;
                },

                createUIEvent: function (doc, type, bubbles, cancelable, detail) {
                    var event = doc.createEventObject();
                    event.bubbles = bubbles;
                    event.cancelable = cancelable;
                    return event;
                },

                fireEvent: function (target, type, event) {
                    target.fireEvent('on' + type, event);
                }
            };
        }

        
        

        Ext.Object.each({
                load:   [false, false],
                unload: [false, false],
                select: [true, false],
                change: [true, false],
                submit: [true, true],
                reset:  [true, false],
                resize: [true, false],
                scroll: [true, false]
            },
            function (name, value) {
                var bubbles = value[0], cancelable = value[1];
                dispatchers[name] = function (targetEl, srcEvent) {
                    var e = API.createHtmlEvent(name, bubbles, cancelable);
                    API.fireEvent(targetEl, name, e);
                };
            });

        
        

        function createMouseEventDispatcher (type, detail) {
            var cancelable = (type != 'mousemove');
            return function (targetEl, srcEvent) {
                var xy = srcEvent.getXY(),
                    e = API.createMouseEvent(targetEl.ownerDocument, type, true, cancelable,
                                detail, xy[0], xy[1], srcEvent.ctrlKey, srcEvent.altKey,
                                srcEvent.shiftKey, srcEvent.metaKey, srcEvent.button,
                                srcEvent.relatedTarget);
                API.fireEvent(targetEl, type, e);
            };
        }

        Ext.each(['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout'],
            function (eventName) {
                dispatchers[eventName] = createMouseEventDispatcher(eventName, 1);
            });

        
        

        Ext.Object.each({
                focusin:  [true, false],
                focusout: [true, false],
                activate: [true, true],
                focus:    [false, false],
                blur:     [false, false]
            },
            function (name, value) {
                var bubbles = value[0], cancelable = value[1];
                dispatchers[name] = function (targetEl, srcEvent) {
                    var e = API.createUIEvent(targetEl.ownerDocument, name, bubbles, cancelable, 1);
                    API.fireEvent(targetEl, name, e);
                };
            });

        
        if (!API) {
            

            dispatchers = {}; 

            API = {};
        }

        function cannotInject (target, srcEvent) {
            
        }

        return function (target) {
            var me = this,
                dispatcher = dispatchers[me.type] || cannotInject,
                t = target ? (target.dom || target) : me.getTarget();

            dispatcher(t, me);
        };
    }()), 

    preventDefault: function() {
        var me = this,
            event = me.browserEvent;

        if (event.preventDefault) {
            event.preventDefault();
        } else {
            
            event.returnValue = false;
            
            
            if (event.ctrlKey || event.keyCode > 111 && event.keyCode < 124) {
                event.keyCode = -1;
            }
        }

        return me;
    },

    stopPropagation: function() {
        var me = this;

        if (me.mousedownEvents[me.type]) {
            
            
            Ext.GlobalEvents.fireMouseDown(me);
        }
        return me.callParent();
    },

    deprecated: {
        '5.0': {
            methods: {
                
                clone: function() {
                    return new this.self(this.browserEvent, this);
                }
            }
        }
    }
}, function() {
    var Event = this,
        btnMap;

    if (Ext.isIE9m) {
        btnMap = {
            1: 0,
            4: 1,
            2: 2
        };

        Event.override({
            constructor: function(event, info, touchesMap, identifiers) {
                var me = this;
                me.callParent([event, info, touchesMap, identifiers]);
                me.button = btnMap[event.button];

                
                
                
                me.toElement = event.toElement;
                me.fromElement = event.fromElement;
            },

            mouseLeaveRe: /(mouseout|mouseleave)/,
            mouseEnterRe: /(mouseover|mouseenter)/,

            getRelatedTarget: function(selector, maxDepth, returnEl) {
                var me = this,
                    type, target;

                if (!me.relatedTarget) {
                    type = me.type;
                    if (me.mouseLeaveRe.test(type)) {
                        target = me.toElement;
                    } else if (me.mouseEnterRe.test(type)) {
                        target = me.fromElement;
                    }
                    if (target) {
                        me.relatedTarget = me.self.resolveTextNode(target);
                    }
                }

                return me.callParent([selector, maxDepth, returnEl]);
            }
        });
    }
});


Ext.define('Ext.dom.Helper', function() {
    var afterbegin = 'afterbegin',
        afterend = 'afterend',
        beforebegin = 'beforebegin',
        beforeend = 'beforeend',
        bbValues = ['BeforeBegin', 'previousSibling'],
        aeValues = ['AfterEnd', 'nextSibling'],
        bb_ae_PositionHash = {
            beforebegin: bbValues,
            afterend: aeValues
        },
        fullPositionHash = {
            beforebegin: bbValues,
            afterend: aeValues,
            afterbegin: ['AfterBegin', 'firstChild'],
            beforeend: ['BeforeEnd', 'lastChild']
        };

    return {
        singleton: true,

        alternateClassName: [
            'Ext.DomHelper',
            'Ext.core.DomHelper'
        ],

        emptyTags: /^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i,
        confRe: /^(?:tag|children|cn|html|tpl|tplData)$/i,
        endRe: /end/i,

        
        attributeTransform: { cls : 'class', htmlFor : 'for' },

        closeTags: {},

        detachedDiv: document.createElement('div'),

        decamelizeName: function () {
            var camelCaseRe = /([a-z])([A-Z])/g,
                cache = {};

            function decamel (match, p1, p2) {
                return p1 + '-' + p2.toLowerCase();
            }

            return function (s) {
                return cache[s] || (cache[s] = s.replace(camelCaseRe, decamel));
            };
        }(),

        generateMarkup: function(spec, buffer) {
            var me = this,
                specType = typeof spec,
                attr, val, tag, i, closeTags;

            if (specType === "string" || specType === "number") {
                buffer.push(spec);
            } else if (Ext.isArray(spec)) {
                for (i = 0; i < spec.length; i++) {
                    if (spec[i]) {
                        me.generateMarkup(spec[i], buffer);
                    }
                }
            } else {
                tag = spec.tag || 'div';
                buffer.push('<', tag);

                for (attr in spec) {
                    if (spec.hasOwnProperty(attr)) {
                        val = spec[attr];
                        if (!me.confRe.test(attr)) {
                            if (typeof val === "object") {
                                buffer.push(' ', attr, '="');
                                me.generateStyles(val, buffer, true).push('"');
                            } else {
                                buffer.push(' ', me.attributeTransform[attr] || attr, '="', val, '"');
                            }
                        }
                    }
                }

                
                if (me.emptyTags.test(tag)) {
                    buffer.push('/>');
                } else {
                    buffer.push('>');

                    
                    if ((val = spec.tpl)) {
                        val.applyOut(spec.tplData, buffer);
                    }
                    if ((val = spec.html)) {
                        buffer.push(val);
                    }
                    if ((val = spec.cn || spec.children)) {
                        me.generateMarkup(val, buffer);
                    }

                    
                    closeTags = me.closeTags;
                    buffer.push(closeTags[tag] || (closeTags[tag] = '</' + tag + '>'));
                }
            }

            return buffer;
        },

        
        generateStyles: function (styles, buffer, encode) {
            var a = buffer || [],
                name, val;

            for (name in styles) {
                if (styles.hasOwnProperty(name)) {
                    val = styles[name];
                    
                    
                    
                    name = this.decamelizeName(name);
                    if (encode && Ext.String.hasHtmlCharacters(val)) {
                        val = Ext.String.htmlEncode(val);
                    }
                    a.push(name, ':', val, ';');
                }
            }

            return buffer || a.join('');
        },

        
        markup: function(spec) {
            if (typeof spec === "string") {
                return spec;
            }

            var buf = this.generateMarkup(spec, []);
            return buf.join('');
        },

        
        applyStyles: function(el, styles) {
            Ext.fly(el).applyStyles(styles);
        },

        
        createContextualFragment: function(html){
            var div = this.detachedDiv,
                fragment = document.createDocumentFragment(),
                length, childNodes;

            div.innerHTML = html;
            childNodes = div.childNodes;
            length = childNodes.length;

            
            while (length--) {
                fragment.appendChild(childNodes[0]);
            }
            return fragment;
        },

        
        createDom: function(o, parentNode){
            var me = this,
                markup = me.markup(o),
                div = me.detachedDiv;

            div.innerHTML = markup;

            return div.firstChild;
        },

        
        insertHtml: function(where, el, html) {
            var me = this,
                hashVal,
                range,
                rangeEl,
                setStart,
                frag;

            where = where.toLowerCase();

            
            if (el.insertAdjacentHTML) {

                if (me.ieInsertHtml) {
                    
                    frag = me.ieInsertHtml(where, el, html);
                    if (frag) {
                        return frag;
                    }
                }

                hashVal = fullPositionHash[where];
                if (hashVal) {
                    if (Ext.global.MSApp && Ext.global.MSApp.execUnsafeLocalFunction) {
                        
                        MSApp.execUnsafeLocalFunction(function () {
                            el.insertAdjacentHTML(hashVal[0], html);
                        });
                    } else {
                        el.insertAdjacentHTML(hashVal[0], html);
                    }

                    return el[hashVal[1]];
                }
                
            } else {
                
                if (el.nodeType === 3) {
                    where = where === afterbegin ? beforebegin : where;
                    where = where === beforeend ? afterend : where;
                }
                range = Ext.supports.CreateContextualFragment ? el.ownerDocument.createRange() : undefined;
                setStart = 'setStart' + (this.endRe.test(where) ? 'After' : 'Before');
                if (bb_ae_PositionHash[where]) {
                    if (range) {
                        range[setStart](el);
                        frag = range.createContextualFragment(html);
                    } else {
                        frag = this.createContextualFragment(html);
                    }
                    el.parentNode.insertBefore(frag, where === beforebegin ? el : el.nextSibling);
                    return el[(where === beforebegin ? 'previous' : 'next') + 'Sibling'];
                } else {
                    rangeEl = (where === afterbegin ? 'first' : 'last') + 'Child';
                    if (el.firstChild) {
                        if (range) {
                            
                            
                            
                            try {
                                range[setStart](el[rangeEl]);
                                frag = range.createContextualFragment(html);
                            }
                            catch(e) {
                                frag = this.createContextualFragment(html);
                            }
                        } else {
                            frag = this.createContextualFragment(html);
                        }

                        if (where === afterbegin) {
                            el.insertBefore(frag, el.firstChild);
                        } else {
                            el.appendChild(frag);
                        }
                    } else {
                        el.innerHTML = html;
                    }
                    return el[rangeEl];
                }
            }
            Ext.Error.raise({
                sourceClass: 'Ext.DomHelper',
                sourceMethod: 'insertHtml',
                htmlToInsert: html,
                targetElement: el,
                msg: 'Illegal insertion point reached: "' + where + '"'
            });
        },

        
        insertBefore: function(el, o, returnElement) {
            return this.doInsert(el, o, returnElement, beforebegin);
        },

        
        insertAfter: function(el, o, returnElement) {
            return this.doInsert(el, o, returnElement, afterend);
        },

        
        insertFirst: function(el, o, returnElement) {
            return this.doInsert(el, o, returnElement, afterbegin);
        },

        
        append: function(el, o, returnElement) {
            return this.doInsert(el, o, returnElement, beforeend);
        },

        
        overwrite: function(el, html, returnElement) {
            var me = this,
                newNode;

            el = Ext.getDom(el);
            html = me.markup(html);

            if (me.ieOverwrite) {
                
                newNode = me.ieOverwrite(el, html);
            }
            if (!newNode) {
                el.innerHTML = html;
                newNode = el.firstChild;
            }
            return returnElement ? Ext.get(newNode) : newNode;
        },

        doInsert: function(el, o, returnElement, where) {
            var me = this,
                newNode;

            el = el.dom || Ext.getDom(el);

            if ('innerHTML' in el) {
                
                
                
                
                newNode = me.insertHtml(where, el, me.markup(o));
            } else {
                
                newNode = me.createDom(o, null);

                
                if (el.nodeType === 3) {
                    where = where === afterbegin ? beforebegin : where;
                    where = where === beforeend ? afterend : where;
                }
                if (bb_ae_PositionHash[where]) {
                    el.parentNode.insertBefore(newNode, where === beforebegin ? el : el.nextSibling);
                } else if (el.firstChild && where === afterbegin) {
                    el.insertBefore(newNode, el.firstChild);
                } else {
                    el.appendChild(newNode);
                }
            }

            return returnElement ? Ext.get(newNode) : newNode;
        },

        
        createTemplate: function(o) {
            var html = this.markup(o);
            return new Ext.Template(html);
        },

        
        createHtml: function(spec) {
            return this.markup(spec);
        }
    };
});

Ext.define('Ext.overrides.dom.Helper', (function() {
    var tableRe = /^(?:table|thead|tbody|tr|td)$/i,
        tableElRe = /td|tr|tbody|thead/i,
        ts = '<table>',
        te = '</table>',
        tbs = ts+'<tbody>',
        tbe = '</tbody>'+te,
        trs = tbs + '<tr>',
        tre = '</tr>'+tbe;

    return {
        override: 'Ext.dom.Helper',

        ieInsertHtml: function(where, el, html) {
            var frag = null;

            
            if (Ext.isIE9m && tableRe.test(el.tagName)) {
                frag = this.insertIntoTable(el.tagName.toLowerCase(), where, el, html);
            }
            return frag;
        },

        ieOverwrite: function(el, html) {
            
            
            if (Ext.isIE9m && tableRe.test(el.tagName)) {
                
                while (el.firstChild) {
                    el.removeChild(el.firstChild);
                }
                if (html) {
                    return this.insertHtml('afterbegin', el, html);
                }
            } 
        },

        ieTable: function(depth, openingTags, htmlContent, closingTags){
            var i = -1,
                el = this.detachedDiv,
                ns, nx;

            el.innerHTML = [openingTags, htmlContent, closingTags].join('');

            while (++i < depth) {
                el = el.firstChild;
            }
            
            ns = el.nextSibling;

            if (ns) {
                ns = el;
                el = document.createDocumentFragment();
                
                while (ns) {
                     nx = ns.nextSibling;
                     el.appendChild(ns);
                     ns = nx;
                }
            }
            return el;
        },

        
        insertIntoTable: function(tag, where, destinationEl, html) {
            var node,
                before,
                bb = where === 'beforebegin',
                ab = where === 'afterbegin',
                be = where === 'beforeend',
                ae = where === 'afterend';

            if (tag === 'td' && (ab || be) || !tableElRe.test(tag) && (bb || ae)) {
                return null;
            }
            before = bb ? destinationEl :
                     ae ? destinationEl.nextSibling :
                     ab ? destinationEl.firstChild : null;

            if (bb || ae) {
                destinationEl = destinationEl.parentNode;
            }

            if (tag === 'td' || (tag === 'tr' && (be || ab))) {
                node = this.ieTable(4, trs, html, tre);
            } else if (((tag === 'tbody' || tag === 'thead') && (be || ab)) ||
                    (tag === 'tr' && (bb || ae))) {
                node = this.ieTable(3, tbs, html, tbe);
            } else {
                node = this.ieTable(2, ts, html, te);
            }
            destinationEl.insertBefore(node, before);
            return node;
        }
    };
})());


Ext.define('Ext.overrides.dom.Element', (function() {
    var Element, 
        WIN = window,
        DOC = document,
        HIDDEN = 'hidden',
        ISCLIPPED = 'isClipped',
        OVERFLOW = 'overflow',
        OVERFLOWX = 'overflow-x',
        OVERFLOWY = 'overflow-y',
        ORIGINALCLIP = 'originalClip',
        HEIGHT = 'height',
        WIDTH = 'width',
        VISIBILITY = 'visibility',
        DISPLAY = 'display',
        NONE = 'none',
        HIDDEN = 'hidden',
        OFFSETS = 'offsets',
        ORIGINALDISPLAY = 'originalDisplay',
        VISMODE = 'visibilityMode',
        ISVISIBLE = 'isVisible',
        OFFSETCLASS = Ext.baseCSSPrefix + 'hidden-offsets',
        boxMarkup = [
            '<div class="{0}-tl" role="presentation">',
                '<div class="{0}-tr" role="presentation">',
                    '<div class="{0}-tc" role="presentation"></div>',
                '</div>',
            '</div>',
            '<div class="{0}-ml" role="presentation">',
                '<div class="{0}-mr" role="presentation">',
                    '<div class="{0}-mc" role="presentation"></div>',
                '</div>',
            '</div>',
            '<div class="{0}-bl" role="presentation">',
                '<div class="{0}-br" role="presentation">',
                    '<div class="{0}-bc" role="presentation"></div>',
                '</div>',
            '</div>'
        ].join(''),
        scriptTagRe = /(?:<script([^>]*)?>)((\n|\r|.)*?)(?:<\/script>)/ig,
        replaceScriptTagRe = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,
        srcRe = /\ssrc=([\'\"])(.*?)\1/i,
        focusRe = /^a|button|embed|iframe|input|object|select|textarea$/i,
        nonSpaceRe = /\S/,
        typeRe = /\stype=([\'\"])(.*?)\1/i,
        msRe = /^-ms-/,
        camelRe = /(-[a-z])/gi,
        camelReplaceFn = function(m, a) {
            return a.charAt(1).toUpperCase();
        },
        XMASKED = Ext.baseCSSPrefix + "masked",
        XMASKEDRELATIVE = Ext.baseCSSPrefix + "masked-relative",
        EXTELMASKMSG = Ext.baseCSSPrefix + "mask-msg",
        mouseEnterLeaveRe = /^(?:mouseenter|mouseleave)$/,
        bodyRe = /^body/i,
        scrollFly,
        propertyCache = {},
        getDisplay = function(el) {
            var data = el.getData(),
                display = data[ORIGINALDISPLAY];
                
            if (display === undefined) {
                data[ORIGINALDISPLAY] = display = '';
            }
            return display;
        },
        getVisMode = function(el){
            var data = el.getData(),
                visMode = data[VISMODE];
                
            if (visMode === undefined) {
                data[VISMODE] = visMode = Element.VISIBILITY;
            }
            return visMode;
        },
        garbageBin,
        emptyRange      = DOC.createRange ? DOC.createRange() : null;

    return {
        override: 'Ext.dom.Element',

        mixins: [
            'Ext.util.Positionable_ext',
            'Ext.util.Animate'
        ],

        requires: [
            'Ext.dom.GarbageCollector',
            'Ext.dom.Fly'
        ],

        uses: [
            'Ext.fx.Manager', 
            'Ext.fx.Anim'
        ],

        skipGarbageCollection: false,

        _init: function (E) {
            Element = E; 
        },

        statics: {
            selectableCls: Ext.baseCSSPrefix + 'selectable',
            unselectableCls: Ext.baseCSSPrefix + 'unselectable',

            normalize: function(prop) {
                if (prop === 'float') {
                    prop = Ext.supports.Float ? 'cssFloat' : 'styleFloat';
                }
                
                return propertyCache[prop] || (propertyCache[prop] = prop.replace(msRe, 'ms-').replace(camelRe, camelReplaceFn));
            },

            getViewportHeight: function(){
                return Ext.isIE9m ? DOC.documentElement.clientHeight : WIN.innerHeight;
            },

            getViewportWidth: function() {
                return (!Ext.isStrict && !Ext.isOpera) ? document.body.clientWidth :
                       Ext.isIE9m ? DOC.documentElement.clientWidth : WIN.innerWidth;
            },

            addListener: function(element, eventName, handler) {
                element = Ext.getDom(element);
                if (element.addEventListener) {
                    element.addEventListener(eventName, handler, false);
                } else {
                    element.attachEvent('on' + eventName, handler);
                }
            }
        },

        
        addClsOnClick: function(className, testFn, scope) {
            var me = this,
                dom = me.dom,
                hasTest = Ext.isFunction(testFn);
                
            me.on("mousedown", function() {
                if (hasTest && testFn.call(scope || me, me) === false) {
                    return false;
                }
                Ext.fly(dom).addCls(className);
                var d = Ext.getDoc(),
                    fn = function() {
                        Ext.fly(dom).removeCls(className);
                        d.removeListener("mouseup", fn);
                    };
                d.on("mouseup", fn);
            });
            return me;
        },

        
        addClsOnFocus: function(className, testFn, scope) {
            var me = this,
                dom = me.dom,
                hasTest = Ext.isFunction(testFn);
                
            me.on("focus", function() {
                if (hasTest && testFn.call(scope || me, me) === false) {
                    return false;
                }
                Ext.fly(dom).addCls(className);
            });
            me.on("blur", function() {
                Ext.fly(dom).removeCls(className);
            });
            return me;
        },

        
        addClsOnOver: function(className, testFn, scope) {
            var me = this,
                dom = me.dom,
                hasTest = Ext.isFunction(testFn);
                
            me.hover(
                function() {
                    if (hasTest && testFn.call(scope || me, me) === false) {
                        return;
                    }
                    Ext.fly(dom).addCls(className);
                },
                function() {
                    Ext.fly(dom).removeCls(className);
                }
            );
            return me;
        },

        
        addKeyListener: function(key, fn, scope){
            var config;
            if(typeof key !== 'object' || Ext.isArray(key)){
                config = {
                    target: this,
                    key: key,
                    fn: fn,
                    scope: scope
                };
            } else {
                config = {
                    target: this,
                    key : key.key,
                    shift : key.shift,
                    ctrl : key.ctrl,
                    alt : key.alt,
                    fn: fn,
                    scope: scope
                };
            }
            return new Ext.util.KeyMap(config);
        },

        
        addKeyMap: function(config) {
            return new Ext.util.KeyMap(Ext.apply({
                target: this
            }, config));
        },

        
        anchorAnimX: function(anchor) {
            var xName = (anchor === 'l') ? 'right' : 'left';
            this.dom.style[xName] = '0px';
        },

        
        anim: function(config) {
            if (!Ext.isObject(config)) {
                return (config) ? {} : false;
            }

            var me = this,
                duration = config.duration || Ext.fx.Anim.prototype.duration,
                easing = config.easing || 'ease',
                animConfig;

            if (config.stopAnimation) {
                me.stopAnimation();
            }

            Ext.applyIf(config, Ext.fx.Manager.getFxDefaults(me.id));

            
            Ext.fx.Manager.setFxDefaults(me.id, {
                delay: 0
            });

            animConfig = {
                
                target: me.dom,
                remove: config.remove,
                alternate: config.alternate || false,
                duration: duration,
                easing: easing,
                callback: config.callback,
                listeners: config.listeners,
                iterations: config.iterations || 1,
                scope: config.scope,
                block: config.block,
                concurrent: config.concurrent,
                delay: config.delay || 0,
                paused: true,
                keyframes: config.keyframes,
                from: config.from || {},
                to: Ext.apply({}, config)
            };
            Ext.apply(animConfig.to, config.to);

            
            delete animConfig.to.to;
            delete animConfig.to.from;
            delete animConfig.to.remove;
            delete animConfig.to.alternate;
            delete animConfig.to.keyframes;
            delete animConfig.to.iterations;
            delete animConfig.to.listeners;
            delete animConfig.to.target;
            delete animConfig.to.paused;
            delete animConfig.to.callback;
            delete animConfig.to.scope;
            delete animConfig.to.duration;
            delete animConfig.to.easing;
            delete animConfig.to.concurrent;
            delete animConfig.to.block;
            delete animConfig.to.stopAnimation;
            delete animConfig.to.delay;
            return animConfig;
        },

        
        animate: function(config) {
            var me = this,
                animId = me.dom.id || Ext.id(me.dom),
                listeners,
                anim,
                end;
                

            if (!Ext.fx.Manager.hasFxBlock(animId)) {
                
                if (config.listeners) {
                    listeners = config.listeners;
                    delete config.listeners;
                }
                if (config.internalListeners) {
                    config.listeners = config.internalListeners;
                    delete config.internalListeners;
                }
                end = config.autoEnd;
                delete config.autoEnd;
                anim = new Ext.fx.Anim(me.anim(config));
                if (listeners) {
                    anim.on(listeners);
                }
                Ext.fx.Manager.queueFx(anim);
                if (end) {
                    anim.jumpToEnd();
                }
            }
            return me;
        },

        
        boxWrap: function(cls) {
            cls = cls || Ext.baseCSSPrefix + 'box';
            var el = Ext.get(this.insertHtml("beforeBegin", "<div class='" + cls + "' role='presentation'>" + Ext.String.format(boxMarkup, cls) + "</div>"));
            el.selectNode('.' + cls + '-mc').appendChild(this.dom);
            return el;
        },

        
        cacheScrollValues: function() {
            var me = this,
                scrollValues = [],
                scrolledDescendants = [], 
                descendants, descendant, i, len;

            scrollFly = scrollFly || new Ext.dom.Fly();

            descendants = me.query('*');
            for (i = 0, len = descendants.length; i < len; i++) {
                descendant = descendants[i];
                
                
                if (descendant.scrollTop > 0 || descendant.scrollLeft !== 0) {
                    scrolledDescendants.push(descendant);
                    scrollValues.push(scrollFly.attach(descendant).getScroll());
                }
            }

            return function() {
                var scroll, i, len;

                for (i = 0, len = scrolledDescendants.length; i < len; i++) {
                    scroll = scrollValues[i];
                    scrollFly.attach(scrolledDescendants[i]);
                    scrollFly.setScrollLeft(scroll.left);
                    scrollFly.setScrollTop(scroll.top);
                }
            };
        },

        
        clean: function(forceReclean) {
            var me   = this,
                dom  = me.dom,
                data = me.getData(),
                n    = dom.firstChild,
                ni   = -1,
                nx;

            if (data.isCleaned && forceReclean !== true) {
                return me;
            }

            while (n) {
                nx = n.nextSibling;
                if (n.nodeType === 3) {
                    
                    if (!(nonSpaceRe.test(n.nodeValue))) {
                        dom.removeChild(n);
                    
                    } else if (nx && nx.nodeType === 3) {
                        n.appendData(Ext.String.trim(nx.data));
                        dom.removeChild(nx);
                        nx = n.nextSibling;
                        n.nodeIndex = ++ni;
                    }
                } else {
                    
                    Ext.fly(n, '_clean').clean();
                    n.nodeIndex = ++ni;
                }
                n = nx;
            }

            data.isCleaned = true;
            return me;
        },

        
        empty: emptyRange ? function() {
            var dom = this.dom;

            if (dom.firstChild) {
                emptyRange.setStartBefore(dom.firstChild);
                emptyRange.setEndAfter(dom.lastChild);
                emptyRange.deleteContents();
            }
        } : function() {
            var dom = this.dom;

            while (dom.lastChild) {
                dom.removeChild(dom.lastChild);
            }
        },

        clearListeners: function() {
            this.removeAnchor();
            this.callParent();
        },

        
        clearPositioning: function(value) {
            value = value || '';
            return this.setStyle({
                left : value,
                right : value,
                top : value,
                bottom : value,
                'z-index' : '',
                position : 'static'
            });
        },

        
        createProxy: function(config, renderTo, matchBox) {
            config = (typeof config === 'object') ? config :
                { tag: "div", role: 'presentation', cls: config };

            var me = this,
                proxy = renderTo ? Ext.DomHelper.append(renderTo, config, true) :
                                   Ext.DomHelper.insertBefore(me.dom, config, true);

            proxy.setVisibilityMode(Element.DISPLAY);
            proxy.hide();
            if (matchBox && me.setBox && me.getBox) { 
               proxy.setBox(me.getBox());
            }
            return proxy;
        },

        
        clearOpacity: function() {
            return this.setOpacity('');
        },

        
        clip: function() {
            var me = this,
                data = me.getData(),
                style;

            if (!data[ISCLIPPED]) {
                data[ISCLIPPED] = true;
                style = me.getStyle([OVERFLOW, OVERFLOWX, OVERFLOWY]);
                data[ORIGINALCLIP] = {
                    o: style[OVERFLOW],
                    x: style[OVERFLOWX],
                    y: style[OVERFLOWY]
                };
                me.setStyle(OVERFLOW, HIDDEN);
                me.setStyle(OVERFLOWX, HIDDEN);
                me.setStyle(OVERFLOWY, HIDDEN);
            }
            return me;
        },

        constrainScrollLeft: function(left) {
            var dom = this.dom;
            return Math.max(Math.min(left, dom.scrollWidth - dom.clientWidth), 0);
        },

        constrainScrollTop: function(top) {
            var dom = this.dom;
            return Math.max(Math.min(top, dom.scrollHeight - dom.clientHeight), 0);
        },

        destroy: function() {
            var me = this,
                dom = me.dom;

            if (dom && me.isAnimate) {
                me.stopAnimation();
            }

            me.callParent();

            
            
            if (dom && Ext.isIE8) {
                garbageBin = garbageBin || DOC.createElement('div');
                garbageBin.appendChild(dom);
                garbageBin.innerHTML = '';
            }
        },

        
        
        
        doScrollIntoView: function(container, hscroll, animate, highlight, getScrollX, scrollTo) {
            scrollFly = scrollFly || new Ext.dom.Fly();

            var me = this,
                dom = me.dom,
                scrollX = scrollFly.attach(container)[getScrollX](),
                scrollY = container.scrollTop,
                position = me.getScrollIntoViewXY(container, scrollX, scrollY),
                newScrollX = position.x,
                newScrollY = position.y;

            
            if (highlight) {
                if (animate) {
                    animate = Ext.apply({
                        listeners: {
                            afteranimate: function() {
                                scrollFly.attach(dom).highlight();
                            }
                        }
                    }, animate);
                } else {
                    scrollFly.attach(dom).highlight();
                }
            }

            if (newScrollY !== scrollY) {
                scrollFly.attach(container).scrollTo('top', newScrollY, animate);
            }

            if (hscroll !== false  && (newScrollX !== scrollX)) {
                scrollFly.attach(container)[scrollTo]('left', newScrollX, animate);
            }
            return me;
        },

        
        fadeIn: function(o) {
            var me = this,
                dom = me.dom;
                
            me.animate(Ext.apply({}, o, {
                opacity: 1,
                internalListeners: {
                    beforeanimate: function(anim){
                        
                        
                        var el = Ext.fly(dom, '_anim');
                        if (el.isStyle('display', 'none')) {
                            el.setDisplayed('');
                        } else {
                            el.show();
                        } 
                    }
                }
            }));
            return this;
        },

        
        fadeOut: function(o) {
            var me = this,
                dom = me.dom;
                
            o = Ext.apply({
                opacity: 0,
                internalListeners: {
                    afteranimate: function(anim){
                        if (dom && anim.to.opacity === 0) {
                            var el = Ext.fly(dom, '_anim');
                            if (o.useDisplay) {
                                el.setDisplayed(false);
                            } else {
                                el.hide();
                            }
                        }         
                    }
                }
            }, o);
            me.animate(o);
            return me;
        },

        
        fixDisplay: function(){
            var me = this;
            if (me.isStyle(DISPLAY, NONE)) {
                me.setStyle(VISIBILITY, HIDDEN);
                me.setStyle(DISPLAY, getDisplay(me)); 
                if (me.isStyle(DISPLAY, NONE)) { 
                    me.setStyle(DISPLAY, "block");
                }
            }
        },

        
        frame: function(color, count, obj){
            var me = this,
                dom = me.dom,
                beforeAnim;

            color = color || '#C3DAF9';
            count = count || 1;
            obj = obj || {};

            beforeAnim = function() {
                var el = Ext.fly(dom, '_anim'),
                    animScope = this,
                    box,
                    proxy, proxyAnim;
                    
                el.show();
                box = el.getBox();
                proxy = Ext.getBody().createChild({
                    role: 'presentation',
                    id: el.dom.id + '-anim-proxy',
                    style: {
                        position : 'absolute',
                        'pointer-events': 'none',
                        'z-index': 35000,
                        border : '0px solid ' + color
                    }
                });
                
                proxyAnim = new Ext.fx.Anim({
                    target: proxy,
                    duration: obj.duration || 1000,
                    iterations: count,
                    from: {
                        top: box.y,
                        left: box.x,
                        borderWidth: 0,
                        opacity: 1,
                        height: box.height,
                        width: box.width
                    },
                    to: {
                        top: box.y - 20,
                        left: box.x - 20,
                        borderWidth: 10,
                        opacity: 0,
                        height: box.height + 40,
                        width: box.width + 40
                    }
                });
                proxyAnim.on('afteranimate', function() {
                    proxy.destroy();
                    
                    animScope.end();
                });
            };

            me.animate({
                
                duration: (Math.max(obj.duration, 500) * 2) || 2000,
                listeners: {
                    beforeanimate: {
                        fn: beforeAnim
                    }
                },
                callback: obj.callback,
                scope: obj.scope
            });
            return me;
        },

        
        getColor: function(attr, defaultValue, prefix) {
            var v = this.getStyle(attr),
                color = prefix || prefix === '' ? prefix : '#',
                h, len, i=0;

            if (!v || (/transparent|inherit/.test(v))) {
                return defaultValue;
            }
            if (/^r/.test(v)) {
                 v = v.slice(4, v.length - 1).split(',');
                 len = v.length;
                 for (; i<len; i++) {
                    h = parseInt(v[i], 10);
                    color += (h < 16 ? '0' : '') + h.toString(16);
                }
            } else {
                v = v.replace('#', '');
                color += v.length === 3 ? v.replace(/^(\w)(\w)(\w)$/, '$1$1$2$2$3$3') : v;
            }
            return(color.length > 5 ? color.toLowerCase() : defaultValue);
        },

        
        getLoader: function() {
            var me = this,
                data = me.getData(),
                loader = data.loader;

            if (!loader) {
                data.loader = loader = new Ext.ElementLoader({
                    target: me
                });
            }
            return loader;
        },

        
        getPositioning: function(autoPx){
            var styles = this.getStyle(['left', 'top', 'position', 'z-index']),
                dom = this.dom;

            if(autoPx) {
                if(styles.left === 'auto') {
                    styles.left = dom.offsetLeft + 'px';
                }
                if(styles.top === 'auto') {
                    styles.top = dom.offsetTop + 'px';
                }
            }

            return styles;
        },

        
        getScroll: function() {
            var me = this,
                dom = me.dom,
                docElement = DOC.documentElement,
                left, top,
                body = document.body;

            if (dom === DOC || dom === body) {
                
                
                
                
                
                
                
                
                left = docElement.scrollLeft || (body ? body.scrollLeft : 0);
                top = docElement.scrollTop || (body ? body.scrollTop : 0);
            } else {
                left = dom.scrollLeft;
                top = dom.scrollTop;
            }

            return {
                left: left,
                top: top
            };
        },

        
        getScrollIntoViewXY: function(container, scrollX, scrollY) {
            var me = this,
                dom = me.dom,
                ct = Ext.getDom(container),
                offsets = me.getOffsetsTo(ct),
            
                width = dom.offsetWidth,
                height = dom.offsetHeight,
                left = offsets[0] + scrollX,
                top = offsets[1] + scrollY,
                bottom = top + height,
                right = left + width,
            
                ctClientHeight = ct.clientHeight,
                ctClientWidth = ct.clientWidth,
                ctBottom = scrollY + ctClientHeight,
                ctRight = scrollX + ctClientWidth,
                scrollX, scrollY;

            if (height > ctClientHeight || top < scrollY) {
                scrollY = top;
            } else if (bottom > ctBottom) {
                scrollY = bottom - ctClientHeight;
            }

            if (width > ctClientWidth || left < scrollX) {
                scrollX = left;
            } else if (right > ctRight) {
                scrollX = right - ctClientWidth;
            }

            return {
                x: scrollX,
                y: scrollY
            };
        },

        
        getScrollLeft: function() {
            var dom = this.dom;
                
            if (dom === DOC || dom === document.body) {
                return this.getScroll().left;
            } else {
                return dom.scrollLeft;
            }
        },
        
        
        getScrollTop: function(){
            var dom = this.dom;
                
            if (dom === DOC || dom === document.body) {
                return this.getScroll().top;
            } else {
                return dom.scrollTop;
            }
        },

        getXY: function() {
            var xy = this.callParent(),
                scroll = Ext.getDoc().getScroll();

            xy[0] += scroll.left;
            xy[1] += scroll.top;
            return xy;
        },

        
        ghost: function(anchor, obj) {
            var me = this,
                dom = me.dom,
                beforeAnim;

            anchor = anchor || "b";
            beforeAnim = function() {
                var el = Ext.fly(dom, '_anim'),
                    width = el.getWidth(),
                    height = el.getHeight(),
                    xy = el.getXY(),
                    position = el.getPositioning(),
                    to = {
                        opacity: 0
                    };
                switch (anchor) {
                    case 't':
                        to.y = xy[1] - height;
                        break;
                    case 'l':
                        to.x = xy[0] - width;
                        break;
                    case 'r':
                        to.x = xy[0] + width;
                        break;
                    case 'b':
                        to.y = xy[1] + height;
                        break;
                    case 'tl':
                        to.x = xy[0] - width;
                        to.y = xy[1] - height;
                        break;
                    case 'bl':
                        to.x = xy[0] - width;
                        to.y = xy[1] + height;
                        break;
                    case 'br':
                        to.x = xy[0] + width;
                        to.y = xy[1] + height;
                        break;
                    case 'tr':
                        to.x = xy[0] + width;
                        to.y = xy[1] - height;
                        break;
                }
                this.to = to;
                this.on('afteranimate', function () {
                    var el = Ext.fly(dom, '_anim');
                    if (el) {
                        el.hide();
                        el.clearOpacity();
                        el.setPositioning(position);
                    }
                });
            };

            me.animate(Ext.applyIf(obj || {}, {
                duration: 500,
                easing: 'ease-out',
                listeners: {
                    beforeanimate: beforeAnim
                }
            }));
            return me;
        },

        
        hide: function(animate){
            
            if (typeof animate === 'string'){
                this.setVisible(false, animate);
                return this;
            }
            this.setVisible(false, this.anim(animate));
            return this;
        },

        
        highlight: function(color, o) {
            var me = this,
                dom = me.dom,
                from = {},
                restore, to, attr, lns, event, fn;

            o = o || {};
            lns = o.listeners || {};
            attr = o.attr || 'backgroundColor';
            from[attr] = color || 'ffff9c';

            if (!o.to) {
                to = {};
                to[attr] = o.endColor || me.getColor(attr, 'ffffff', '');
            }
            else {
                to = o.to;
            }

            
            o.listeners = Ext.apply(Ext.apply({}, lns), {
                beforeanimate: function() {
                    restore = dom.style[attr];
                    var el = Ext.fly(dom, '_anim');
                    el.clearOpacity();
                    el.show();

                    event = lns.beforeanimate;
                    if (event) {
                        fn = event.fn || event;
                        return fn.apply(event.scope || lns.scope || WIN, arguments);
                    }
                },
                afteranimate: function() {
                    if (dom) {
                        dom.style[attr] = restore;
                    }

                    event = lns.afteranimate;
                    if (event) {
                        fn = event.fn || event;
                        fn.apply(event.scope || lns.scope || WIN, arguments);
                    }
                }
            });

            me.animate(Ext.apply({}, o, {
                duration: 1000,
                easing: 'ease-in',
                from: from,
                to: to
            }));
            return me;
        },

        
        hover: function(overFn, outFn, scope, options) {
            var me = this;
            me.on('mouseenter', overFn, scope || me.dom, options);
            me.on('mouseleave', outFn, scope || me.dom, options);
            return me;
        },

        
        initDD: function(group, config, overrides){
            var dd = new Ext.dd.DD(Ext.id(this.dom), group, config);
            return Ext.apply(dd, overrides);
        },

        
        initDDProxy: function(group, config, overrides){
            var dd = new Ext.dd.DDProxy(Ext.id(this.dom), group, config);
            return Ext.apply(dd, overrides);
        },

        
        initDDTarget: function(group, config, overrides){
            var dd = new Ext.dd.DDTarget(Ext.id(this.dom), group, config);
            return Ext.apply(dd, overrides);
        },

        
        isFocusable: function ( asFocusEl) {
            var me = this,
                dom = me.dom,
                tabIndexAttr = dom.getAttributeNode('tabIndex'),
                tabIndex,
                nodeName = dom.nodeName,
                canFocus = false;

            
            
            
            
            
            
            
            
            
            
            if (tabIndexAttr && tabIndexAttr.specified) {
                tabIndex = tabIndexAttr.value;
            }
            if (dom && !dom.disabled) {
                
                
                if (tabIndex === -1) { 
                    canFocus = Ext.enableFocusManager && asFocusEl;
                }
                else {
                    
                    if (focusRe.test(nodeName)) {
                        if ((nodeName !== 'a') || dom.href) {
                            canFocus = true;
                        }
                    }
                    
                    else {
                        canFocus = tabIndex != null && tabIndex >= 0;
                    }
                }
                canFocus = canFocus && me.isVisible(true);
            }
            return canFocus;
        },

        
        isMasked: function() {
            var me = this,
                data = me.getData(),
                maskEl = data.maskEl,
                maskMsg = data.maskMsg,
                hasMask = false; 

            if (maskEl && maskEl.isVisible()) {
                if (maskMsg) {
                    maskMsg.center(me);
                }
                hasMask = true;
            }
            return hasMask;
        },

        
        isScrollable: function() {
            var dom = this.dom;
            return dom.scrollHeight > dom.clientHeight || dom.scrollWidth > dom.clientWidth;
        },

        
        load: function(options) {
            this.getLoader().load(options);
            return this;
        },

        
        mask: function (msg, msgCls , elHeight) {
            var me = this,
                dom = me.dom,
                data = me.getData(),
                maskEl = data.maskEl,
                maskMsg = data.maskMsg;

            if (!(bodyRe.test(dom.tagName) && me.getStyle('position') == 'static')) {
                me.addCls(XMASKEDRELATIVE);
            }

            
            if (maskEl) {
                maskEl.destroy();
            }

            if (maskMsg) {
                maskMsg.destroy();
            }

            Ext.DomHelper.append(dom, [{
                role: 'presentation',
                cls : Ext.baseCSSPrefix + "mask",
                style: 'top:0;left:0;'
            }, {
                role: 'presentation',
                cls : msgCls ? EXTELMASKMSG + " " + msgCls : EXTELMASKMSG,
                cn  : {
                    tag: 'div',
                    role: 'presentation',
                    cls: Ext.baseCSSPrefix + 'mask-msg-inner',
                    cn: {
                        tag: 'div',
                        role: 'presentation',
                        cls: Ext.baseCSSPrefix + 'mask-msg-text',
                        html: msg || ''
                    }
                }
            }]);

            maskMsg = Ext.get(dom.lastChild);
            maskEl = Ext.get(maskMsg.dom.previousSibling);

            data.maskMsg = maskMsg;
            data.maskEl = maskEl;

            me.addCls(XMASKED);
            maskEl.setDisplayed(true);

            if (typeof msg === 'string') {
                maskMsg.setDisplayed(true);
                maskMsg.center(me);
            } else {
                maskMsg.setDisplayed(false);
            }

            if (dom === DOC.body) {
                maskEl.addCls(Ext.baseCSSPrefix + 'mask-fixed');
            }

            
            if (Ext.isIE9m && dom !== DOC.body && me.isStyle('height', 'auto')) {
                maskEl.setSize(undefined, elHeight || me.getHeight());
            }
            return maskEl;
        },

        
        monitorMouseLeave: function(delay, handler, scope) {
            var me = this,
                timer,
                listeners = {
                    mouseleave: function(e) {
                        timer = setTimeout(Ext.Function.bind(handler, scope||me, [e]), delay);
                    },
                    mouseenter: function() {
                        clearTimeout(timer);
                    },
                    freezeEvent: true
                };

            me.on(listeners);
            return listeners;
        },

        
        needsTabIndex: function() {
            var me = this;

            if (me.dom) {
                if ((me.dom.nodeName === 'a') && (!me.dom.href)) {
                    return true;
                }
                return !focusRe.test(me.dom.nodeName);
            }
        },

        
        normalizeEvent: function(eventName) {
            var fn, newName;

            if (!Ext.supports.MouseEnterLeave && mouseEnterLeaveRe.test(eventName)) {
                fn = this.normalizeWithin;
                newName = eventName == 'mouseenter' ? 'mouseover' : 'mouseout';
            } else if (eventName == 'mousewheel' && !Ext.supports.MouseWheel && !Ext.isOpera) {
                newName = 'DOMMouseScroll';
            }
            return newName ? {
                eventName: newName,
                normalizeFn: fn
            } : null;
        },

        
        normalizeWithin: function(event) {
            var parent = event.currentTarget,
                child = event.getRelatedTarget();

            if (parent && parent.firstChild) {
                while (child) {
                    if (child === parent) {
                        return false;
                    }
                    child = child.parentNode;
                    if (child && (child.nodeType !== 1)) {
                        child = null;
                    }
                }
            }
            return true;
        },

        
        puff: function(obj) {
            var me = this,
                dom = me.dom,
                beforeAnim,
                box = me.getBox(),
                originalStyles = me.getStyle(['width', 'height', 'left', 'right', 'top', 'bottom', 'position', 'z-index', 'font-size', 'opacity'], true);

           obj = Ext.applyIf(obj || {}, {
                easing: 'ease-out',
                duration: 500,
                useDisplay: false
            });

            beforeAnim = function() {
                var el = Ext.fly(dom, '_anim');
                
                el.clearOpacity();
                el.show();
                this.to = {
                    width: box.width * 2,
                    height: box.height * 2,
                    x: box.x - (box.width / 2),
                    y: box.y - (box.height /2),
                    opacity: 0,
                    fontSize: '200%'
                };
                this.on('afteranimate',function() {
                    var el = Ext.fly(dom, '_anim');
                    if (el) {
                        if (obj.useDisplay) {
                            el.setDisplayed(false);
                        } else {
                            el.hide();
                        }
                        el.setStyle(originalStyles);
                        Ext.callback(obj.callback, obj.scope);
                    }
                });
            };

            me.animate({
                duration: obj.duration,
                easing: obj.easing,
                listeners: {
                    beforeanimate: {
                        fn: beforeAnim
                    }
                }
            });
            return me;
        },

        
        scroll: function(direction, distance, animate) {
            if (!this.isScrollable()) {
                return false;
            }
            
            
            
            direction = direction.charAt(0);
            var me = this,
                dom = me.dom,
                side = direction === 'r' || direction === 'l' ? 'left' : 'top',
                scrolled = false,
                currentScroll, constrainedScroll;

            if (direction === 'l' || direction === 't' || direction === 'u') {
                distance = -distance;
            }

            if (side === 'left') {
                currentScroll = dom.scrollLeft;
                constrainedScroll = me.constrainScrollLeft(currentScroll + distance);
            } else {
                currentScroll = dom.scrollTop;
                constrainedScroll = me.constrainScrollTop(currentScroll + distance);
            }

            if (constrainedScroll !== currentScroll) {
                this.scrollTo(side, constrainedScroll, animate);
                scrolled = true;
            }

            return scrolled;
        },

        
        scrollBy: function(deltaX, deltaY, animate) {
            var me = this,
                dom = me.dom;

            
            if (deltaX.length) {
                animate = deltaY;
                deltaY = deltaX[1];
                deltaX = deltaX[0];
            } else if (typeof deltaX != 'number') { 
                animate = deltaY;
                deltaY = deltaX.y;
                deltaX = deltaX.x;
            }

            if (deltaX) {
                me.scrollTo('left', me.constrainScrollLeft(dom.scrollLeft + deltaX), animate);
            }
            if (deltaY) {
                me.scrollTo('top', me.constrainScrollTop(dom.scrollTop + deltaY), animate);
            }

            return me;
        },

        
        scrollChildIntoView: function(child, hscroll) {
            scrollFly = scrollFly || new Ext.dom.Fly();
            scrollFly.attach(Ext.getDom(child)).scrollIntoView(this, hscroll);
        },

        
        scrollIntoView: function(container, hscroll, animate, highlight) {
            container = Ext.getDom(container) || Ext.getBody().dom;

            return this.doScrollIntoView(
                container,
                hscroll,
                animate,
                highlight,
                'getScrollLeft',
                'scrollTo'
            );
        },

        
        scrollTo: function(side, value, animate) {
            
            var top = /top/i.test(side),
                me = this,
                prop = top ? 'scrollTop' : 'scrollLeft',
                dom = me.dom,
                animCfg;

            if (!animate || !me.anim) {
                
                dom[prop] = value;
                
                dom[prop] = value;
            }
            else {
                animCfg = {
                    to: {}
                };
                animCfg.to[prop] = value;
                if (Ext.isObject(animate)) {
                    Ext.applyIf(animCfg, animate);
                }
                me.animate(animCfg);
            }
            return me;
        },

        
        selectable: function() {
            var me = this;

            
            
            me.dom.unselectable = '';

            me.removeCls(Element.unselectableCls);
            me.addCls(Element.selectableCls);

            return me;
        },

        setBox: function(box, animate) {
            return animate ? this._animSetBox(box, animate) : this.callParent([box]);
        },

        
        
        
        
        
        
        setCapture: function() {
            var dom = this.dom;
            if (Ext.isIE9m && dom.setCapture) {
                dom.setCapture();
            }
        },

        
        setDisplayed: function(value) {
            if(typeof value === "boolean"){
               value = value ? getDisplay(this) : NONE;
            }
            this.setStyle(DISPLAY, value);
            return this;
        },

        
        setHeight: function(height, animate) {
            var me = this;

            if (!animate || !me.anim) {
                me.callParent(arguments);
            }
            else {
                if (!Ext.isObject(animate)) {
                    animate = {};
                }
                me.animate(Ext.applyIf({
                    to: {
                        height: height
                    }
                }, animate));
            }

            return me;
        },

        
        setHorizontal: function() {
            var me = this,
                cls = me.verticalCls;

            delete me.vertical;
            if (cls) {
                delete me.verticalCls;
                me.removeCls(cls);
            }

            
            delete me.setWidth;
            delete me.setHeight;
            if (!Ext.isIE9m) {
                delete me.getWidth;
                delete me.getHeight;
            }

            
            delete me.styleHooks;
        },

        
        updateText: function(text) {
            var me = this,
                dom,
                textNode;

            if (dom) {
                textNode = dom.firstChild;
                if (!textNode || (textNode.nodeType !== 3 || textNode.nextSibling)) {
                    textNode = DOC.createTextNode();
                    me.empty();
                    dom.appendChild(textNode);
                }
                if (text) {
                    textNode.data = text;
                }
            }
        },

        
        setHtml: function(html, loadScripts, callback) {
            var me = this,
                id,
                dom,
                interval;

            if (!me.dom) {
                return me;
            }
            html = html || '';
            dom = me.dom;

            if (loadScripts !== true) {
                dom.innerHTML = html;
                Ext.callback(callback, me);
                return me;
            }

            id  = Ext.id();
            html += '<span id="' + id + '" role="presentation"></span>';

            interval = setInterval(function() {
                var hd,
                    match,
                    attrs,
                    srcMatch,
                    typeMatch,
                    el,
                    s;
                if (!(el = DOC.getElementById(id))) {
                    return false;
                }
                clearInterval(interval);
                Ext.removeNode(el);
                hd = Ext.getHead().dom;

                while ((match = scriptTagRe.exec(html))) {
                    attrs = match[1];
                    srcMatch = attrs ? attrs.match(srcRe) : false;
                    if (srcMatch && srcMatch[2]) {
                       s = DOC.createElement("script");
                       s.src = srcMatch[2];
                       typeMatch = attrs.match(typeRe);
                       if (typeMatch && typeMatch[2]) {
                           s.type = typeMatch[2];
                       }
                       hd.appendChild(s);
                    } else if (match[2] && match[2].length > 0) {
                        if (WIN.execScript) {
                           WIN.execScript(match[2]);
                        } else {
                           WIN.eval(match[2]);
                        }
                    }
                }
                Ext.callback(callback, me);
            }, 20);
            dom.innerHTML = html.replace(replaceScriptTagRe, '');
            return me;
        },

        
        setOpacity: function(opacity, animate) {
            var me = this;

            if (!me.dom) {
                return me;
            }

            if (!animate || !me.anim) {
                me.setStyle('opacity', opacity);
            }
            else {
                if (typeof animate != 'object') {
                    animate = {
                        duration: 350,
                        easing: 'ease-in'
                    };
                }

                me.animate(Ext.applyIf({
                    to: {
                        opacity: opacity
                    }
                }, animate));
            }
            return me;
        },

        
        setPositioning: function(pc) {
            return this.setStyle(pc);
        },

        
        setScrollLeft: function(left){
            this.dom.scrollLeft = left;
            return this;
        },
        
        
        setScrollTop: function(top) {
            this.dom.scrollTop = top;
            return this;
        },

        
        setVertical: function(angle, cls) {
            var me = this,
                proto = Element.prototype;

            me.vertical = true;
            if (cls) {
                me.addCls(me.verticalCls = cls);
            }

            me.setWidth = proto.setHeight;
            me.setHeight = proto.setWidth;
            if (!Ext.isIE9m) {
                
                
                
                
                me.getWidth = proto.getHeight;
                me.getHeight = proto.getWidth;
            }

            
            me.styleHooks = (angle === 270) ?
                proto.verticalStyleHooks270 : proto.verticalStyleHooks90;
        },

        
        setSize: function(width, height, animate) {
            var me = this;

            if (Ext.isObject(width)) { 
                animate = height;
                height = width.height;
                width = width.width;
            }

            if (!animate || !me.anim) {
                me.dom.style.width = Element.addUnits(width);
                me.dom.style.height = Element.addUnits(height);
            }
            else {
                if (animate === true) {
                    animate = {};
                }
                me.animate(Ext.applyIf({
                    to: {
                        width: width,
                        height: height
                    }
                }, animate));
            }

            return me;
        },

        
        setVisible: function(visible, animate) {
            var me = this,
                dom = me.dom,
                visMode = getVisMode(me);

            
            if (typeof animate === 'string') {
                switch (animate) {
                    case DISPLAY:
                        visMode = Element.DISPLAY;
                        break;
                    case VISIBILITY:
                        visMode = Element.VISIBILITY;
                        break;
                    case OFFSETS:
                        visMode = Element.OFFSETS;
                        break;
                }
                me.setVisibilityMode(visMode);
                animate = false;
            }

            if (!animate || !me.anim) {
                if (visMode === Element.DISPLAY) {
                    return me.setDisplayed(visible);
                } else if (visMode === Element.OFFSETS) {
                    me[visible?'removeCls':'addCls'](OFFSETCLASS);
                } else if (visMode === Element.VISIBILITY) {
                    me.fixDisplay();
                    
                    dom.style.visibility = visible ? '' : HIDDEN;
                }
            } else {
                
                if (visible) {
                    me.setOpacity(0.01);
                    me.setVisible(true);
                }
                if (!Ext.isObject(animate)) {
                    animate = {
                        duration: 350,
                        easing: 'ease-in'
                    };
                }
                me.animate(Ext.applyIf({
                    callback: function() {
                        if (!visible) {
                            
                            
                            Ext.fly(dom).setVisible(false).setOpacity(1);
                        }
                    },
                    to: {
                        opacity: (visible) ? 1 : 0
                    }
                }, animate));
            }
            me.getData()[ISVISIBLE] = visible;
            return me;
        },

        
        setWidth: function(width, animate) {
            var me = this;
            if (!animate || !me.anim) {
                me.callParent(arguments);
            }
            else {
                if (!Ext.isObject(animate)) {
                    animate = {};
                }
                me.animate(Ext.applyIf({
                    to: {
                        width: width
                    }
                }, animate));
            }
            return me;
        },

        setX: function(x, animate) {
            return this.setXY([x, this.getY()], animate);
        },

        setXY: function(xy, animate) {
            var me = this;

            if (!animate || !me.anim) {
                me.callParent([xy]);
            } else {
                if (!Ext.isObject(animate)) {
                    animate = {};
                }
                me.animate(Ext.applyIf({ to: { x: xy[0], y: xy[1] } }, animate));
            }
            return this;
        },

        setY: function(y, animate) {
            return this.setXY([this.getX(), y], animate);
        },

        
        show: function(animate){
            
            if (typeof animate === 'string'){
                this.setVisible(true, animate);
                return this;
            }
            this.setVisible(true, this.anim(animate));
            return this;
        },

        
        slideIn: function(anchor, obj, slideOut) {
            var me = this,
                dom = me.dom,
                elStyle = dom.style,
                beforeAnim,
                wrapAnim,
                restoreScroll,
                wrapDomParentNode;

            anchor = anchor || "t";
            obj = obj || {};

            beforeAnim = function() {
                var animScope = this,
                    listeners = obj.listeners,
                    el = Ext.fly(dom, '_anim'),
                    box, originalStyles, anim, wrap;

                if (!slideOut) {
                    el.fixDisplay();
                }

                box = el.getBox();
                if ((anchor == 't' || anchor == 'b') && box.height === 0) {
                    box.height = dom.scrollHeight;
                }
                else if ((anchor == 'l' || anchor == 'r') && box.width === 0) {
                    box.width = dom.scrollWidth;
                }

                originalStyles = el.getStyle(['width', 'height', 'left', 'right', 'top', 'bottom', 'position', 'z-index'], true);
                el.setSize(box.width, box.height);

                
                if (obj.preserveScroll) {
                    restoreScroll = el.cacheScrollValues();
                }

                wrap = el.wrap({
                    role: 'presentation',
                    id: Ext.id() + '-anim-wrap-for-' + el.dom.id,
                    style: {
                        visibility: slideOut ? 'visible' : 'hidden'
                    }
                });
                wrapDomParentNode = wrap.dom.parentNode;
                wrap.setPositioning(el.getPositioning(true));
                if (wrap.isStyle('position', 'static')) {
                    wrap.position('relative');
                }
                el.clearPositioning('auto');
                wrap.clip();

                
                if (restoreScroll) {
                    restoreScroll();
                }

                
                
                
                el.setStyle({
                    visibility: '',
                    position: 'absolute'
                });
                if (slideOut) {
                    wrap.setSize(box.width, box.height);
                }

                switch (anchor) {
                    case 't':
                        anim = {
                            from: {
                                width: box.width + 'px',
                                height: '0px'
                            },
                            to: {
                                width: box.width + 'px',
                                height: box.height + 'px'
                            }
                        };
                        elStyle.bottom = '0px';
                        break;
                    case 'l':
                        anim = {
                            from: {
                                width: '0px',
                                height: box.height + 'px'
                            },
                            to: {
                                width: box.width + 'px',
                                height: box.height + 'px'
                            }
                        };
                        me.anchorAnimX(anchor);
                        break;
                    case 'r':
                        anim = {
                            from: {
                                x: box.x + box.width,
                                width: '0px',
                                height: box.height + 'px'
                            },
                            to: {
                                x: box.x,
                                width: box.width + 'px',
                                height: box.height + 'px'
                            }
                        };
                        me.anchorAnimX(anchor);
                        break;
                    case 'b':
                        anim = {
                            from: {
                                y: box.y + box.height,
                                width: box.width + 'px',
                                height: '0px'
                            },
                            to: {
                                y: box.y,
                                width: box.width + 'px',
                                height: box.height + 'px'
                            }
                        };
                        break;
                    case 'tl':
                        anim = {
                            from: {
                                x: box.x,
                                y: box.y,
                                width: '0px',
                                height: '0px'
                            },
                            to: {
                                width: box.width + 'px',
                                height: box.height + 'px'
                            }
                        };
                        elStyle.bottom = '0px';
                        me.anchorAnimX('l');
                        break;
                    case 'bl':
                        anim = {
                            from: {
                                y: box.y + box.height,
                                width: '0px',
                                height: '0px'
                            },
                            to: {
                                y: box.y,
                                width: box.width + 'px',
                                height: box.height + 'px'
                            }
                        };
                        me.anchorAnimX('l');
                        break;
                    case 'br':
                        anim = {
                            from: {
                                x: box.x + box.width,
                                y: box.y + box.height,
                                width: '0px',
                                height: '0px'
                            },
                            to: {
                                x: box.x,
                                y: box.y,
                                width: box.width + 'px',
                                height: box.height + 'px'
                            }
                        };
                        me.anchorAnimX('r');
                        break;
                    case 'tr':
                        anim = {
                            from: {
                                x: box.x + box.width,
                                width: '0px',
                                height: '0px'
                            },
                            to: {
                                x: box.x,
                                width: box.width + 'px',
                                height: box.height + 'px'
                            }
                        };
                        elStyle.bottom = '0px';
                        me.anchorAnimX('r');
                        break;
                }

                wrap.show();
                wrapAnim = Ext.apply({}, obj);
                delete wrapAnim.listeners;
                wrapAnim = new Ext.fx.Anim(Ext.applyIf(wrapAnim, {
                    target: wrap,
                    duration: 500,
                    easing: 'ease-out',
                    from: slideOut ? anim.to : anim.from,
                    to: slideOut ? anim.from : anim.to
                }));

                
                wrapAnim.on('afteranimate', function() {
                    var el = Ext.fly(dom, '_anim');
                    
                    el.setStyle(originalStyles);
                    if (slideOut) {
                        if (obj.useDisplay) {
                            el.setDisplayed(false);
                        } else {
                            el.hide();
                        }
                    }
                    if (wrap.dom) {
                        if (wrap.dom.parentNode) {
                            wrap.dom.parentNode.insertBefore(el.dom, wrap.dom);
                        } else {
                            wrapDomParentNode.appendChild(el.dom);
                        }
                        wrap.destroy();
                    }
                    
                    if (restoreScroll) {
                        restoreScroll();
                    }
                    
                    animScope.end();
                });
                
                if (listeners) {
                    wrapAnim.on(listeners);
                }
            };

            me.animate({
                
                duration: obj.duration ? Math.max(obj.duration, 500) * 2 : 1000,
                listeners: {
                    beforeanimate: beforeAnim 
                }
            });
            return me;
        },

        
        slideOut: function(anchor, o) {
            return this.slideIn(anchor, o, true);
        },

        
        swallowEvent: function(eventName, preventDefault) {
            var me = this,
                e, eLen,
                fn = function(e) {
                    e.stopPropagation();
                    if (preventDefault) {
                        e.preventDefault();
                    }
                };

            if (Ext.isArray(eventName)) {
                eLen = eventName.length;

                for (e = 0; e < eLen; e++) {
                    me.on(eventName[e], fn);
                }

                return me;
            }
            me.on(eventName, fn);
            return me;
        },

        
        switchOff: function(obj) {
            var me = this,
                dom = me.dom,
                beforeAnim;

            obj = Ext.applyIf(obj || {}, {
                easing: 'ease-in',
                duration: 500,
                remove: false,
                useDisplay: false
            });

            beforeAnim = function() {
                var el = Ext.fly(dom, '_anim'),
                    animScope = this,
                    size = el.getSize(),
                    xy = el.getXY(),
                    keyframe, position;
                    
                el.clearOpacity();
                el.clip();
                position = el.getPositioning();

                keyframe = new Ext.fx.Animator({
                    target: dom,
                    duration: obj.duration,
                    easing: obj.easing,
                    keyframes: {
                        33: {
                            opacity: 0.3
                        },
                        66: {
                            height: 1,
                            y: xy[1] + size.height / 2
                        },
                        100: {
                            width: 1,
                            x: xy[0] + size.width / 2
                        }
                    }
                });
                keyframe.on('afteranimate', function() {
                    var el = Ext.fly(dom, '_anim');
                    if (obj.useDisplay) {
                        el.setDisplayed(false);
                    } else {
                        el.hide();
                    }
                    el.clearOpacity();
                    el.setPositioning(position);
                    el.setSize(size);
                    
                    animScope.end();
                });
            };
            
            me.animate({
                
                duration: (Math.max(obj.duration, 500) * 2),
                listeners: {
                    beforeanimate: {
                        fn: beforeAnim
                    }
                },
                callback: obj.callback,
                scope: obj.scope
            });
            return me;
        },

        
        syncContent: function(source) {
            source = Ext.getDom(source);
            var sourceNodes = source.childNodes,
                sourceLen = sourceNodes.length,
                dest = this.dom,
                destNodes = dest.childNodes,
                destLen = destNodes.length,
                i,  destNode, sourceNode,
                nodeType, newAttrs, attLen, attName;

            
            
            
            
            if (Ext.isIE9m && dest.mergeAttributes) {
                dest.mergeAttributes(source, true);

                
                
                dest.src = source.src;
            } else {
                newAttrs = source.attributes;
                attLen = newAttrs.length;
                for (i = 0; i < attLen; i++) {
                    attName = newAttrs[i].name;
                    if (attName !== 'id') {
                        dest.setAttribute(attName, newAttrs[i].value);
                    }
                }
            }

            
            if (sourceLen !== destLen) {
                dest.innerHTML = source.innerHTML;
                return;
            }

            
            
            for (i = 0; i < sourceLen; i++) {
                sourceNode = sourceNodes[i];
                destNode = destNodes[i];
                nodeType = sourceNode.nodeType;

                
                if (nodeType !== destNode.nodeType || (nodeType === 1 && sourceNode.tagName !== destNode.tagName)) {
                    dest.innerHTML = source.innerHTML;
                    return;
                }

                
                if (nodeType === 3) {
                    destNode.data = sourceNode.data;
                }
                
                else {
                    if (sourceNode.id && destNode.id !== sourceNode.id) {
                        destNode.id = sourceNode.id;
                    }
                    destNode.style.cssText = sourceNode.style.cssText;
                    destNode.className = sourceNode.className;
                    Ext.fly(destNode, '_syncContent').syncContent(sourceNode);
                }
            }
        },

        
        toggle: function(animate){
            var me = this;
            me.setVisible(!me.isVisible(), me.anim(animate));
            return me;
        },

        
        unmask: function() {
            var me = this,
                data = me.getData(),
                maskEl = data.maskEl,
                maskMsg = data.maskMsg,
                style;

            if (maskEl) {
                style = maskEl.dom.style;
                
                if (style.clearExpression) {
                    style.clearExpression('width');
                    style.clearExpression('height');
                }

                if (maskEl) {
                    maskEl.destroy();
                    delete data.maskEl;
                }

                if (maskMsg) {
                    maskMsg.destroy();
                    delete data.maskMsg;
                }

                me.removeCls([XMASKED, XMASKEDRELATIVE]);
            }
        },

        
        unclip: function() {
            var me = this,
                data = me.getData(),
                clip;

            if (data[ISCLIPPED]) {
                data[ISCLIPPED] = false;
                clip = data[ORIGINALCLIP];
                if (clip.o) {
                    me.setStyle(OVERFLOW, clip.o);
                }
                if (clip.x) {
                    me.setStyle(OVERFLOWX, clip.x);
                }
                if (clip.y) {
                    me.setStyle(OVERFLOWY, clip.y);
                }
            }
            return me;
        },

        translate: function(x, y, z) {
            if (Ext.supports.CssTransforms && !Ext.isIE9m) {
                this.callParent(arguments);
            } else {
                if (x != null) {
                    this.dom.style.left = x + 'px';
                }
                if (y != null) {
                    this.dom.style.top = y + 'px';
                }
                this.dom.style.position = 'absolute';
            }
        },

        
        unselectable: function() {
            
            
            
            
            
            
            
            var me = this;

            
            
            
            
            
            if (Ext.isOpera) {
                me.dom.unselectable = 'on';
            }

            
            
            
            
            
            
            
            
            
            me.removeCls(Element.selectableCls);
            me.addCls(Element.unselectableCls);

            return me;
        },

        deprecated: {
            '4.0': {
                methods: {
                    
                    pause: function(ms) {
                        var me = this;
                        Ext.fx.Manager.setFxDefaults(me.id, {
                            delay: ms
                        });
                        return me;
                    },

                    
                    scale: function(w, h, o) {
                        this.animate(Ext.apply({}, o, {
                            width: w,
                            height: h
                        }));
                        return this;
                    },

                    
                    shift: function(config) {
                        this.animate(config);
                        return this;
                    }
                }
            },
            '4.2': {
                methods: {
                    
                    moveTo: function(x, y, animate) {
                        return this.setXY([x, y], animate);
                    },

                    
                    setBounds: function(x, y, width, height, animate) {
                        return this.setBox({
                            x: x,
                            y: y,
                            width: width,
                            height: height
                        }, animate);
                    },

                    
                    setLeftTop: function(left, top) {
                        var me = this,
                            style = me.dom.style;

                        style.left = Element.addUnits(left);
                        style.top = Element.addUnits(top);

                        return me;
                    },

                    
                    setLocation: function(x, y, animate) {
                        return this.setXY([x, y], animate);
                    }
                }
            },
            '5.0': {
                methods: {
                    
                    getAttributeNS: function(namespace, name) {
                        return this.getAttribute(name, namespace);
                    },

                    
                    getCenterXY: function(){
                        return this.getAlignToXY(DOC, 'c-c');
                    },

                    
                    getComputedHeight: function() {
                        return Math.max(this.dom.offsetHeight, this.dom.clientHeight) ||
                            parseFloat(this.getStyle(HEIGHT)) || 0;
                    },

                    
                    getComputedWidth: function() {
                        return Math.max(this.dom.offsetWidth, this.dom.clientWidth) ||
                            parseFloat(this.getStyle(WIDTH)) || 0;
                    },

                    
                    getStyleSize: function() {
                        var me = this,
                            d = this.dom,
                            isDoc = (d === DOC || d === DOC.body),
                            s,
                            w, h;

                        
                        if (isDoc) {
                            return {
                                width : Element.getViewportWidth(),
                                height : Element.getViewportHeight()
                            };
                        }

                        s = me.getStyle(['height', 'width'], true);  
                        
                        if (s.width && s.width !== 'auto') {
                            w = parseFloat(s.width);
                        }
                        
                        if (s.height && s.height !== 'auto') {
                            h = parseFloat(s.height);
                        }
                        
                        return {width: w || me.getWidth(true), height: h || me.getHeight(true)};
                    },


                    
                    isBorderBox: function() {
                        return true;
                    },

                    
                    isDisplayed: function() {
                        return !this.isStyle('display', 'none');
                    },

                    
                    focusable: 'isFocusable'
                }
            }
        }
    };
})(), function() {
    var Element = Ext.dom.Element,
        proto = Element.prototype,
        useDocForId = !Ext.isIE8,
        DOC = document,
        view = DOC.defaultView,
        opacityRe = /alpha\(opacity=(.*)\)/i,
        trimRe = /^\s+|\s+$/g,
        styleHooks = proto.styleHooks,
        supports = Ext.supports,
        touchScroll = 0,
        removeNode, garbageBin, verticalStyleHooks90, verticalStyleHooks270, edges, k,
        edge, borderWidth;

    proto._init(Element);
    delete proto._init;
    
    Element.on = Element.addListener;

    
    if (Ext.os.is.iOS || Ext.os.is.Android) {
        touchScroll = 2
    } else if (navigator.msMaxTouchPoints ||
            (Ext.isWebKit && supports.TouchEvents && Ext.os.is.Desktop)) {
        touchScroll = 1;
    }
    
    Ext.apply(supports, {
        
        touchScroll: touchScroll
    });

    Ext.plainTableCls = Ext.baseCSSPrefix + 'table-plain';
    Ext.plainListCls = Ext.baseCSSPrefix + 'list-plain';

    
    if (Ext.CompositeElementLite) {
        Ext.CompositeElementLite.importElementMethods();
    }

    
    
    proto.verticalStyleHooks90 = verticalStyleHooks90 = Ext.Object.chain(styleHooks);
    proto.verticalStyleHooks270 = verticalStyleHooks270 = Ext.Object.chain(styleHooks);

    verticalStyleHooks90.width = { name: 'height' };
    verticalStyleHooks90.height = { name: 'width' };
    verticalStyleHooks90['margin-top'] = { name: 'marginLeft' };
    verticalStyleHooks90['margin-right'] = { name: 'marginTop' };
    verticalStyleHooks90['margin-bottom'] = { name: 'marginRight' };
    verticalStyleHooks90['margin-left'] = { name: 'marginBottom' };
    verticalStyleHooks90['padding-top'] = { name: 'paddingLeft' };
    verticalStyleHooks90['padding-right'] = { name: 'paddingTop' };
    verticalStyleHooks90['padding-bottom'] = { name: 'paddingRight' };
    verticalStyleHooks90['padding-left'] = { name: 'paddingBottom' };
    verticalStyleHooks90['border-top'] = { name: 'borderLeft' };
    verticalStyleHooks90['border-right'] = { name: 'borderTop' };
    verticalStyleHooks90['border-bottom'] = { name: 'borderRight' };
    verticalStyleHooks90['border-left'] = { name: 'borderBottom' };

    verticalStyleHooks270.width = { name: 'height' };
    verticalStyleHooks270.height = { name: 'width' };
    verticalStyleHooks270['margin-top'] = { name: 'marginRight' };
    verticalStyleHooks270['margin-right'] = { name: 'marginBottom' };
    verticalStyleHooks270['margin-bottom'] = { name: 'marginLeft' };
    verticalStyleHooks270['margin-left'] = { name: 'marginTop' };
    verticalStyleHooks270['padding-top'] = { name: 'paddingRight' };
    verticalStyleHooks270['padding-right'] = { name: 'paddingBottom' };
    verticalStyleHooks270['padding-bottom'] = { name: 'paddingLeft' };
    verticalStyleHooks270['padding-left'] = { name: 'paddingTop' };
    verticalStyleHooks270['border-top'] = { name: 'borderRight' };
    verticalStyleHooks270['border-right'] = { name: 'borderBottom' };
    verticalStyleHooks270['border-bottom'] = { name: 'borderLeft' };
    verticalStyleHooks270['border-left'] = { name: 'borderTop' };

    styleHooks.opacity = {
        name: 'opacity',
        afterSet: function(dom, value, el) {
            if (el.isLayer) {
                el.onOpacitySet(value);
            }
        }
    };
    if (!supports.Opacity && Ext.isIE) {
        Ext.apply(styleHooks.opacity, {
            get: function (dom) {
                var filter = dom.style.filter,
                    match, opacity;
                if (filter.match) {
                    match = filter.match(opacityRe);
                    if (match) {
                        opacity = parseFloat(match[1]);
                        if (!isNaN(opacity)) {
                            return opacity ? opacity / 100 : 0;
                        }
                    }
                }
                return 1;
            },
            set: function (dom, value) {
                var style = dom.style,
                    val = style.filter.replace(opacityRe, '').replace(trimRe, '');

                style.zoom = 1; 

                
                if (typeof(value) === 'number' && value >= 0 && value < 1) {
                    value *= 100;
                    style.filter = val + (val.length ? ' ' : '') + 'alpha(opacity='+value+')';
                } else {
                    style.filter = val;
                }
            }  
        });
    }
    
    if (!supports.matchesSelector) {
        
        var simpleSelectorRe = /^([a-z]+|\*)?(?:\.([a-z][a-z\-_0-9]*))?$/i,
            dashRe = /\-/g,
            fragment,
            classMatcher = function (tag, cls) {
                var classRe = new RegExp('(?:^|\\s+)' +cls.replace(dashRe, '\\-') + '(?:\\s+|$)');
                if (tag && tag !== '*') {
                    tag = tag.toUpperCase();
                    return function (el) {
                        return el.tagName === tag && classRe.test(el.className);
                    };
                }
                return function (el) {
                    return classRe.test(el.className);
                };
            },
            tagMatcher = function (tag) {
                tag = tag.toUpperCase();
                return function (el) {
                    return el.tagName === tag;
                };
            },
            cache = {};

        proto.matcherCache = cache;
        proto.is = function(selector) {
            
            if (!selector) {
                return true;
            }

            var dom = this.dom,
                cls, match, testFn, root, isOrphan, is, tag;

            
            if (dom.nodeType !== 1) {
                return false;
            }

            if (!(testFn = Ext.isFunction(selector) ? selector : cache[selector])) {
                if (!(match = selector.match(simpleSelectorRe))) {
                    
                    root = dom.parentNode;

                    if (!root) {
                        isOrphan = true;
                        root = fragment || (fragment = DOC.createDocumentFragment());
                        fragment.appendChild(dom);
                    }

                    is = Ext.Array.indexOf(Ext.fly(root, '_is').query(selector), dom) !== -1;

                    if (isOrphan) {
                        fragment.removeChild(dom);
                    }
                    return is;
                }

                tag = match[1];
                cls = match[2];
                cache[selector] = testFn = cls ? classMatcher(tag, cls) : tagMatcher(tag);
            }

            return testFn(dom);
        };
    }

    
    if (!view || !view.getComputedStyle) {
        proto.getStyle = function (property, inline) {
            var me = this,
                dom = me.dom,
                multiple = typeof property !== 'string',
                prop = property,
                props = prop,
                len = 1,
                isInline = inline,
                styleHooks = me.styleHooks,
                camel, domStyle, values, hook, out, style, i;

            if (multiple) {
                values = {};
                prop = props[0];
                i = 0;
                if (!(len = props.length)) {
                    return values;
                }
            }

            if (!dom || dom.documentElement) {
                return values || '';
            }

            domStyle = dom.style;

            if (inline) {
                style = domStyle;
            } else {
                style = dom.currentStyle;

                
                if (!style) {
                    isInline = true;
                    style = domStyle;
                }
            }

            do {
                hook = styleHooks[prop];

                if (!hook) {
                    styleHooks[prop] = hook = { name: Element.normalize(prop) };
                }

                if (hook.get) {
                    out = hook.get(dom, me, isInline, style);
                } else {
                    camel = hook.name;
                    out = style[camel];
                }

                if (!multiple) {
                    return out;
                }

                values[prop] = out;
                prop = props[++i];
            } while (i < len);

            return values;
        };
    }

    
    if (Ext.isIE8) {
        function getBorderWidth (dom, el, inline, style) {
            if (style[this.styleName] === 'none') {
                return '0px';
            }
            return style[this.name];
        }

        edges = ['Top','Right','Bottom','Left'];
        k = edges.length;

        while (k--) {
            edge = edges[k];
            borderWidth = 'border' + edge + 'Width';

            styleHooks['border-'+edge.toLowerCase()+'-width'] = styleHooks[borderWidth] = {
                name: borderWidth,
                styleName: 'border' + edge + 'Style',
                get: getBorderWidth
            };
        }
    }

    Ext.apply(Ext, {
        
        enableGarbageCollector: true,

        
        
        isBorderBox: true,

        getDetachedBody: function () {
            var detachedEl = Ext.detachedBodyEl;

            if (!detachedEl) {
                detachedEl = DOC.createElement('div');
                Ext.detachedBodyEl = detachedEl = new Ext.dom.Fly(detachedEl);
                detachedEl.isDetachedBody = true;
            }

            return detachedEl;
        },

        getElementById: function (id) {
            var el = DOC.getElementById(id),
                detachedBodyEl;

            if (!el && (detachedBodyEl = Ext.detachedBodyEl)) {
                el = detachedBodyEl.dom.querySelector(Ext.makeIdSelector(id));
            }

            return el;
        },

        
        addBehaviors: function(o){
            if(!Ext.isReady){
                Ext.onReady(function(){
                    Ext.addBehaviors(o);
                });
            } else {
                var cache = {}, 
                    parts,
                    b,
                    s;
                for (b in o) {
                    if ((parts = b.split('@'))[1]) { 
                        s = parts[0];
                        if(!cache[s]){
                            cache[s] = Ext.fly(document).select(s, true);
                        }
                        cache[s].on(parts[1], o[b]);
                    }
                }
                cache = null;
            }
        }
    });

    if (Ext.isIE8) {
        
        removeNode = Ext.removeNode;
        Ext.removeNode = function(node) {
            removeNode(node);
            
            
            garbageBin = garbageBin || DOC.createElement('div');
            garbageBin.appendChild(node);
            garbageBin.innerHTML = '';
        };
    }

    if (Ext.isIE9m) {
        Ext.getElementById = function (id) {
            var el = DOC.getElementById(id),
                detachedBodyEl;

            if (!el && (detachedBodyEl = Ext.detachedBodyEl)) {
                el = detachedBodyEl.dom.all[id];
            }

            return el;
        };

        proto.getById = function (id, asDom) {
            var dom = this.dom,
                ret = null,
                entry, el;

            if (dom) {
                
                
                el = (useDocForId && DOC.getElementById(id)) || dom.all[id];
                if (el) {
                    if (asDom) {
                        ret = el;
                    } else {
                        
                        
                        entry = Ext.cache[id];
                        if (entry) {
                            if (entry.skipGarbageCollection || !Ext.isGarbage(entry.dom)) {
                                ret = entry;
                            } else {
                                Ext.Error.raise("Stale Element with id '" + el.id +
                                    "' found in Element cache. " +
                                    "Make sure to clean up Element instances using destroy()" ); 
                                entry.destroy();
                            }
                        }
                        ret = ret || new Ext.Element(el)
                    }
                }
            }

            return ret;
        };
    } else if (!DOC.querySelector) {
        Ext.getDetachedBody = Ext.getBody;

        Ext.getElementById = function (id) {
            return DOC.getElementById(id);
        };

        proto.getById = function (id, asDom) {
            var dom = DOC.getElementById(id);
            return asDom ? dom : (dom ? Ext.get(dom) : null);
        };
    }

    if (Ext.isIE && !(Ext.isIE9p && DOC.documentMode >= 9)) {
        
        
        
        
        
        
        
        
        
        proto.getAttribute = function(name, ns) {
            var d = this.dom,
                    type;
            if (ns) {
                type = typeof d[ns + ":" + name];
                if (type != 'undefined' && type != 'unknown') {
                    return d[ns + ":" + name] || null;
                }
                return null;
            }
            if (name === "for") {
                name = "htmlFor";
            }
            return d[name] || null;
        };
    }

    Ext.onReady(function () {
        var transparentRe = /^(?:transparent|(?:rgba[(](?:\s*\d+\s*[,]){3}\s*0\s*[)]))$/i,
            bodyCls = [],
            
            colorStyles, i, name, camel;

        if (supports.MinWidthTableCellBug) {
            
            
            
            
            
            
            
            
            
            styleHooks.width = {
                name: 'width',
                set: function(dom, value, el) {
                    var style = dom.style,
                        needsFix = el._needsMinWithFix,
                        origDisplay = style.display;

                    if (needsFix) {
                        style.display = 'none';
                    }

                    style.width = value;

                    if (needsFix) {
                        dom.scrollWidth; 
                        style.display = origDisplay;
                    }
                }
            }
            origSetWidth = proto.setWidth;
            proto.setWidth = function(width, animate) {
                var me = this,
                    dom = me.dom,
                    style = dom.style,
                    needsFix = me._needsMinWithFix,
                    origDisplay = style.display;

                if (needsFix && !animate) {
                    style.display = 'none';
                }

                origSetWidth.call(me, width, animate);

                if (needsFix && !animate) {
                    dom.scrollWidth; 
                    style.display = origDisplay;
                }
                return me;
            }
            origSetSize = proto.setSize;
            proto.setSize = function(width, height, animate) {
                var me = this,
                    dom = me.dom,
                    style = dom.style,
                    needsFix = me._needsMinWithFix,
                    origDisplay = style.display;

                if (needsFix && !animate) {
                    style.display = 'none';
                }

                origSetSize.call(me, width, height, animate);

                if (needsFix && !animate) {
                    dom.scrollWidth; 
                    style.display = origDisplay;
                }
                return me;
            }
        }

        
        
        
        Ext.getDoc().on('selectstart', function(ev, dom) {
            var selectableCls = Element.selectableCls,
                unselectableCls = Element.unselectableCls,
                tagName = dom && dom.tagName;

            tagName = tagName && tagName.toLowerCase();

            
            
            
            if (tagName === 'input' || tagName === 'textarea') {
                return;
            }

            
            while (dom && dom.nodeType === 1 && dom !== DOC.documentElement) {
                var el = Ext.fly(dom);

                
                if (el.hasCls(selectableCls)) {
                    return;
                }

                
                if (el.hasCls(unselectableCls)) {
                    ev.stopEvent();
                    return;
                }

                dom = dom.parentNode;
            }
        });

        function fixTransparent (dom, el, inline, style) {
            var value = style[this.name] || '';
            return transparentRe.test(value) ? 'transparent' : value;
        }

        
        function makeSelectionRestoreFn (activeEl, start, end) {
            return function () {
                activeEl.selectionStart = start;
                activeEl.selectionEnd = end;
            };
        }

        
        function getRightMarginFixCleaner(target) {
            var hasInputBug = supports.DisplayChangeInputSelectionBug,
                hasTextAreaBug = supports.DisplayChangeTextAreaSelectionBug,
                activeEl, tag, start, end; 

            if (hasInputBug || hasTextAreaBug) {
                activeEl = Element.getActiveElement();
                tag = activeEl && activeEl.tagName;

                if ((hasTextAreaBug && tag === 'TEXTAREA') ||
                    (hasInputBug && tag === 'INPUT' && activeEl.type === 'text')) {
                    if (Ext.fly(target).isAncestor(activeEl)) {
                        start = activeEl.selectionStart;
                        end = activeEl.selectionEnd;

                        if (Ext.isNumber(start) && Ext.isNumber(end)) { 
                            
                            
                            
                            
                            return makeSelectionRestoreFn(activeEl, start, end);
                        }
                    }
                }
            }

            return Ext.emptyFn; 
        }

        function fixRightMargin (dom, el, inline, style) {
            var result = style.marginRight,
                domStyle, display;

            
            
            if (result !== '0px') {
                domStyle = dom.style;
                display = domStyle.display;
                domStyle.display = 'inline-block';
                result = (inline ? style : dom.ownerDocument.defaultView.getComputedStyle(dom, null)).marginRight;
                domStyle.display = display;
            }

            return result;
        }

        function fixRightMarginAndInputFocus (dom, el, inline, style) {
            var result = style.marginRight,
                domStyle, cleaner, display;

            if (result !== '0px') {
                domStyle = dom.style;
                cleaner = getRightMarginFixCleaner(dom);
                display = domStyle.display;
                domStyle.display = 'inline-block';
                result = (inline ? style : dom.ownerDocument.defaultView.getComputedStyle(dom, '')).marginRight;
                domStyle.display = display;
                cleaner();
            }

            return result;
        }

        
        if (!supports.RightMargin) {
            styleHooks.marginRight = styleHooks['margin-right'] = {
                name: 'marginRight',
                
                
                get: (supports.DisplayChangeInputSelectionBug || supports.DisplayChangeTextAreaSelectionBug) ?
                    fixRightMarginAndInputFocus : fixRightMargin
            };
        }

        if (!supports.TransparentColor) {
            colorStyles = ['background-color', 'border-color', 'color', 'outline-color'];
            for (i = colorStyles.length; i--; ) {
                name = colorStyles[i];
                camel = Element.normalize(name);

                styleHooks[name] = styleHooks[camel] = {
                    name: camel,
                    get: fixTransparent
                };
            }
        }

        
        if (!Ext.scopeCss) {
            bodyCls.push(Ext.baseCSSPrefix + 'body');
        }

        if (supports.Touch) {
            bodyCls.push(Ext.baseCSSPrefix + 'touch');
        }

        if (Ext.isIE && Ext.isIE9m) {
            bodyCls.push(Ext.baseCSSPrefix + 'ie',
                         Ext.baseCSSPrefix + 'ie9m');

            
            
            
            
            
            
            
            
            
            
            
            bodyCls.push(Ext.baseCSSPrefix + 'ie8p');

            if (Ext.isIE8) {
                bodyCls.push(Ext.baseCSSPrefix + 'ie8');
            } else {
                bodyCls.push(Ext.baseCSSPrefix + 'ie9',
                             Ext.baseCSSPrefix + 'ie9p');
            }

            if (Ext.isIE8m) {
                bodyCls.push(Ext.baseCSSPrefix + 'ie8m');
            }
        }

        if (Ext.isIE10) {
            bodyCls.push(Ext.baseCSSPrefix + 'ie10');
        }

        if (Ext.isGecko) {
            bodyCls.push(Ext.baseCSSPrefix + 'gecko');
        }
        if (Ext.isOpera) {
            bodyCls.push(Ext.baseCSSPrefix + 'opera');
        }
        if (Ext.isWebKit) {
            bodyCls.push(Ext.baseCSSPrefix + 'webkit');
        }
        if (Ext.isSafari) {
            bodyCls.push(Ext.baseCSSPrefix + 'safari');
        }
        if (Ext.isChrome) {
            bodyCls.push(Ext.baseCSSPrefix + 'chrome');
        }
        if (Ext.isMac) {
            bodyCls.push(Ext.baseCSSPrefix + 'mac');
        }
        if (Ext.isLinux) {
            bodyCls.push(Ext.baseCSSPrefix + 'linux');
        }
        if (!supports.CSS3BorderRadius) {
            bodyCls.push(Ext.baseCSSPrefix + 'nbr');
        }
        if (!supports.CSS3LinearGradient) {
            bodyCls.push(Ext.baseCSSPrefix + 'nlg');
        }
        if (supports.Touch) {
            bodyCls.push(Ext.baseCSSPrefix + 'touch');
        }
        

        Ext.getBody().addCls(bodyCls);
    }, null, { priority: 1500 }); 
});




Ext.define('Ext.overrides.GlobalEvents', {
    override: 'Ext.GlobalEvents',

    

    

    attachListeners: function() {
        this.callParent();
        Ext.getDoc().on('mousedown', this.fireMouseDown, this);
    },

    fireMouseDown: function(e) {
        this.fireEvent('mousedown', e);
    },

    deprecated: {
        5: {
            methods: {
                addListener: function(ename, fn, scope, options) {
                    var name,
                        readyFn;

                    
                    

                    if (ename === 'ready') {
                        readyFn = fn;
                    } else if (typeof ename !== 'string') {
                        for (name in ename) {
                            if (name === 'ready') {
                                readyFn = ename[name];
                            }
                        }
                    }

                    if (readyFn) {
                        Ext.log.warn("Ext.on('ready', fn) is deprecated.  Please use Ext.onReady(fn) instead.");
                        Ext.onReady(readyFn);
                    }

                    this.callParent([ename, fn, scope, options]);
                }
            }
        }
    }
});

Ext.define('Ext.overrides.event.publisher.Dom', {
    override: 'Ext.event.publisher.Dom'

}, function() {
    var DomPublisher = Ext.event.publisher.Dom,
        prototype = DomPublisher.prototype;

    if (Ext.isIE9m) {
        DomPublisher.override({
            initHandlers: function() {
                var me = this,
                    superOnDelegatedEvent, superOnDirectEvent;

                me.callParent();

                superOnDelegatedEvent = me.onDelegatedEvent;
                superOnDirectEvent = me.onDirectEvent;

                me.target = document;
                me.targetIsWin = false;

                me.onDelegatedEvent = function(e) {
                    e.target = e.srcElement || window;
                    superOnDelegatedEvent.call(me, e);
                };

                
                
                me.onDirectEvent = function(e) {
                    e.target = e.srcElement || window;
                    e.currentTarget = this; 
                    superOnDirectEvent.call(me, e);
                };
            },

            addDelegatedListener: function(eventName) {
                
                
                this.target.attachEvent('on' + eventName, this.onDelegatedEvent);
            },

            removeDelegatedListener: function(eventName) {
                this.target.detachEvent('on' + eventName, this.onDelegatedEvent);
            },

            addDirectListener: function(eventName, element) {
                var me = this,
                    
                    
                    boundFn = Ext.Function.bind(me.onDirectEvent, element);

                me.directSubscribers[element.id][eventName].fn = boundFn;
                
                
                if(element.attachEvent) {
                    element.attachEvent('on' + eventName, boundFn);
                } else {
                    me.callParent(arguments);
                }
            },

            removeDirectListener: function(eventName, element) {
                if(element.detachEvent) {
                    element.detachEvent('on' + eventName,
                        this.directSubscribers[element.id][eventName].fn);
                } else {
                    this.callParent(arguments);
                }
            }
        });

        
        
        Ext.apply(prototype.directEvents, prototype.captureEvents);
        prototype.captureEvents = {};
    }
});


Ext.define('Ext.overrides.event.publisher.Gesture', {
    override: 'Ext.event.publisher.Gesture'
}, function() {
    if (Ext.isIE9m) {
        this.override({
            updateTouches: function(e, isEnd) {
                var browserEvent = e.browserEvent,
                    xy = e.getXY();

                
                
                browserEvent.pageX = xy[0];
                browserEvent.pageY = xy[1];
                this.callParent([e, isEnd]);
            },

            initHandlers: function() {
                var me = this,
                    superOnDelegatedEvent;

                me.callParent();
                superOnDelegatedEvent = me.onDelegatedEvent;

                me.onDelegatedEvent = function(e) {
                    
                    
                    
                    
                    
                    
                    
                    var name,
                        fakeEvent = {};

                    for (name in e) {
                        fakeEvent[name] = e[name];
                    }

                    superOnDelegatedEvent.call(me, fakeEvent);
                };
            }
        });
    }
});







Ext.require([
    'Ext.event.gesture.*',
    'Ext.event.publisher.Dom',
    'Ext.event.publisher.Gesture',
    'Ext.event.Dispatcher'
]);

Ext.onReady(function() {
    var dispatcher = Ext.event.Dispatcher.getInstance();

    dispatcher.setPublishers({
        dom: new Ext.event.publisher.Dom(),
        gesture: new Ext.event.publisher.Gesture({
            recognizers: {
                drag: new Ext.event.gesture.Drag(),
                tap: new Ext.event.gesture.Tap(),
                doubleTap: new Ext.event.gesture.DoubleTap(),
                longPress: new Ext.event.gesture.LongPress(),
                swipe: new Ext.event.gesture.Swipe(),
                pinch: new Ext.event.gesture.Pinch(),
                rotate: new Ext.event.gesture.Rotate(),
                edgeSwipe: new Ext.event.gesture.EdgeSwipe()
            }
        })
        
        
        
        


    });

    Ext.get(window).on('unload', dispatcher.destroy, dispatcher);

}, null, {
    
    
    priority: 2000
});

Ext.apply(Ext, {
    
    SSL_SECURE_URL : Ext.isSecure && Ext.isIE ? 'javascript:\'\'' : 'about:blank',

    
    BLANK_IMAGE_URL: 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
});


Ext.define('Ext.util.Format', function () {
    var me; 

    return {
        requires: [
            'Ext.Error',
            'Ext.Number',
            'Ext.String',
            'Ext.Date'
        ],

        singleton: true,

        
        defaultDateFormat: 'm/d/Y',

        
        
        thousandSeparator: ',',
        

        
        
        decimalSeparator: '.',
        

        
        
        currencyPrecision: 2,
        

         
        
        currencySign: '$',
        

        
        percentSign: '%',

        
        
        currencyAtEnd: false,
        

        stripTagsRe: /<\/?[^>]+>/gi,
        stripScriptsRe: /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,
        nl2brRe: /\r?\n/g,
        hashRe: /#+$/,
        allHashes: /^#+$/,

        
        formatPattern: /[\d,\.#]+/,

        
        formatCleanRe: /[^\d\.#]/g,

        
        
        I18NFormatCleanRe: null,

        
        formatFns: {},

        constructor: function () {
            me = this; 
        },

        
        undef : function(value) {
            return value !== undefined ? value : "";
        },

        
        defaultValue : function(value, defaultValue) {
            return value !== undefined && value !== '' ? value : defaultValue;
        },

        
        substr : 'ab'.substr(-1) != 'b'
        ? function (value, start, length) {
            var str = String(value);
            return (start < 0)
                ? str.substr(Math.max(str.length + start, 0), length)
                : str.substr(start, length);
        }
        : function(value, start, length) {
            return String(value).substr(start, length);
        },

        
        lowercase : function(value) {
            return String(value).toLowerCase();
        },

        
        uppercase : function(value) {
            return String(value).toUpperCase();
        },

        
        usMoney : function(v) {
            return me.currency(v, '$', 2);
        },

        
        currency: function(v, currencySign, decimals, end) {
            var negativeSign = '',
                format = ",0",
                i = 0;
            v = v - 0;
            if (v < 0) {
                v = -v;
                negativeSign = '-';
            }
            decimals = Ext.isDefined(decimals) ? decimals : me.currencyPrecision;
            format += (decimals > 0 ? '.' : '');
            for (; i < decimals; i++) {
                format += '0';
            }
            v = me.number(v, format);
            if ((end || me.currencyAtEnd) === true) {
                return Ext.String.format("{0}{1}{2}", negativeSign, v, currencySign || me.currencySign);
            } else {
                return Ext.String.format("{0}{1}{2}", negativeSign, currencySign || me.currencySign, v);
            }
        },

        
        date: function(v, format) {
            if (!v) {
                return "";
            }
            if (!Ext.isDate(v)) {
                v = new Date(Date.parse(v));
            }
            return Ext.Date.dateFormat(v, format || Ext.Date.defaultFormat);
        },
        

        
        dateRenderer : function(format) {
            return function(v) {
                return me.date(v, format);
            };
        },

        
        or: function (value, orValue) {
            return value || orValue;
        },

        
        pick: function (value, firstValue, secondValue) {
            if (Ext.isNumber(value)) {
                var ret = arguments[value + 1];
                if (ret) {
                    return ret;
                }
            }
            return value ? secondValue : firstValue;
        },

        
        stripTags : function(v) {
            return !v ? v : String(v).replace(me.stripTagsRe, "");
        },

        
        stripScripts : function(v) {
            return !v ? v : String(v).replace(me.stripScriptsRe, "");
        },

        
        fileSize : (function(){
            var byteLimit = 1024,
                kbLimit = 1048576,
                mbLimit = 1073741824;
                
            return function(size) {
                var out;
                if (size < byteLimit) {
                    if (size === 1) {
                        out = '1 byte';    
                    } else {
                        out = size + ' bytes';
                    }
                } else if (size < kbLimit) {
                    out = (Math.round(((size*10) / byteLimit))/10) + ' KB';
                } else if (size < mbLimit) {
                    out = (Math.round(((size*10) / kbLimit))/10) + ' MB';
                } else {
                    out = (Math.round(((size*10) / mbLimit))/10) + ' GB';
                }
                return out;
            };
        })(),

        
        math : (function(){
            var fns = {};

            return function(v, a){
                if (!fns[a]) {
                    fns[a] = Ext.functionFactory('v', 'return v ' + a + ';');
                }
                return fns[a](v);
            };
        }()),

        
        round : function(value, precision) {
            var result = Number(value);
            if (typeof precision === 'number') {
                precision = Math.pow(10, precision);
                result = Math.round(value * precision) / precision;
            } else if (precision === undefined) {
                result = Math.round(result);
            }
            return result;
        },

        
        number : function(v, formatString) {
            if (!formatString) {
                return v;
            }
            if (isNaN(v)) {
                return '';
            }
            
            var formatFn = me.formatFns[formatString];

            
            
            if (!formatFn) {

                var originalFormatString = formatString,
                    comma = me.thousandSeparator,
                    decimalSeparator = me.decimalSeparator,
                    precision = 0,
                    trimPart = '',
                    hasComma,
                    splitFormat,
                    extraChars,
                    trimTrailingZeroes,
                    code, len;

                
                
                
                
                if (formatString.substr(formatString.length - 2) === '/i') {
                    
                    
                    if (!me.I18NFormatCleanRe || me.lastDecimalSeparator !== decimalSeparator) {
                        me.I18NFormatCleanRe = new RegExp('[^\\d\\' + decimalSeparator + ']','g');
                        me.lastDecimalSeparator = decimalSeparator;
                    }
                    formatString = formatString.substr(0, formatString.length - 2);
                    hasComma = formatString.indexOf(comma) !== -1;
                    splitFormat = formatString.replace(me.I18NFormatCleanRe, '').split(decimalSeparator);
                } else {
                    hasComma = formatString.indexOf(',') !== -1;
                    splitFormat = formatString.replace(me.formatCleanRe, '').split('.');
                }
                extraChars = formatString.replace(me.formatPattern, '');

                if (splitFormat.length > 2) {
                    Ext.Error.raise({
                        sourceClass: "Ext.util.Format",
                        sourceMethod: "number",
                        value: v,
                        formatString: formatString,
                        msg: "Invalid number format, should have no more than 1 decimal"
                    });
                } else if (splitFormat.length === 2) {
                    precision = splitFormat[1].length;

                    
                    trimTrailingZeroes = splitFormat[1].match(me.hashRe);
                    if (trimTrailingZeroes) {
                        len = trimTrailingZeroes[0].length;
                        
                        trimPart = 'trailingZeroes=new RegExp(Ext.String.escapeRegex(utilFormat.decimalSeparator) + "*0{0,' + len + '}$")';
                    }
                }
                
                
                code = [
                    'var utilFormat=Ext.util.Format,extNumber=Ext.Number,neg,absVal,fnum,parts' +
                        (hasComma ? ',thousandSeparator,thousands=[],j,n,i' : '') +
                        (extraChars  ? ',formatString="' + formatString + '",formatPattern=/[\\d,\\.#]+/' : '') +
                        ',trailingZeroes;' +
                    'return function(v){' +
                    'if(typeof v!=="number"&&isNaN(v=extNumber.from(v,NaN)))return"";' +
                    'neg=v<0;',
                    'absVal=Math.abs(v);',
                    'fnum=Ext.Number.toFixed(absVal, ' + precision + ');',
                    trimPart, ';'
                ];

                if (hasComma) {
                    
                    
                    
                    if (precision) {
                        code[code.length] = 'parts=fnum.split(".");';
                        code[code.length] = 'fnum=parts[0];';
                    }
                    code[code.length] =
                        'if(absVal>=1000) {';
                            code[code.length] = 'thousandSeparator=utilFormat.thousandSeparator;' +
                            'thousands.length=0;' +
                            'j=fnum.length;' +
                            'n=fnum.length%3||3;' +
                            'for(i=0;i<j;i+=n){' +
                                'if(i!==0){' +
                                    'n=3;' +
                                '}' +
                                'thousands[thousands.length]=fnum.substr(i,n);' +
                            '}' +
                            'fnum=thousands.join(thousandSeparator);' + 
                        '}';
                    if (precision) {
                        code[code.length] = 'fnum += utilFormat.decimalSeparator+parts[1];';
                    }
                    
                } else if (precision) {
                    
                    code[code.length] = 'if(utilFormat.decimalSeparator!=="."){' +
                        'parts=fnum.split(".");' +
                        'fnum=parts[0]+utilFormat.decimalSeparator+parts[1];' +
                    '}';
                }

                if (trimTrailingZeroes) {
                    code[code.length] = 'fnum=fnum.replace(trailingZeroes,"");';
                }

                
                code[code.length] = 'if(neg&&fnum!=="' + (precision ? '0.' + Ext.String.repeat('0', precision) : '0') + '")fnum="-"+fnum;';

                code[code.length] = 'return ';

                
                if (extraChars) {
                    code[code.length] = 'formatString.replace(formatPattern, fnum);';
                } else {
                    code[code.length] = 'fnum;';
                }
                code[code.length] = '};';

                formatFn = me.formatFns[originalFormatString] = Ext.functionFactory('Ext', code.join(''))(Ext);
            }
            return formatFn(v);
        },

        
        numberRenderer : function(format) {
            return function(v) {
                return me.number(v, format);
            };
        },

        
        percent: function (value, formatString) {
            return me.number(value * 100, formatString || '0') + me.percentSign;
        },

        
        attributes: function(attributes) {
            if (typeof attributes === 'object') {
                var result = [],
                    name;

                for (name in attributes) {
                    if (attributes.hasOwnProperty(name)) {
                        result.push(name, '="', name === 'style' ? 
                                Ext.DomHelper.generateStyles(attributes[name], null, true) :
                                Ext.htmlEncode(attributes[name]), '" ');
                    }
                }
                attributes = result.join('');
            }
            return attributes || '';
        },

        
        plural : function(v, s, p) {
            return v +' ' + (v === 1 ? s : (p ? p : s+'s'));
        },

        
        nl2br : function(v) {
            return Ext.isEmpty(v) ? '' : v.replace(me.nl2brRe, '<br/>');
        },

        
        capitalize: Ext.String.capitalize,

        
        uncapitalize: Ext.String.uncapitalize,

        
        ellipsis: Ext.String.ellipsis,

        
        escape: Ext.String.escape,

        
        escapeRegex : Ext.String.escapeRegex,

        
        format: Ext.String.format,

        
        htmlDecode: Ext.String.htmlDecode,

        
        htmlEncode: Ext.String.htmlEncode,

        
        leftPad: Ext.String.leftPad,

        
        toggle: Ext.String.toggle,

        
        trim : Ext.String.trim,

        
        parseBox : function(box) {
            box = box || 0;

            if (typeof box === 'number') {
                return {
                    top   : box,
                    right : box,
                    bottom: box,
                    left  : box
                };
             }

            var parts  = box.split(' '),
                ln = parts.length;

            if (ln === 1) {
                parts[1] = parts[2] = parts[3] = parts[0];
            }
            else if (ln === 2) {
                parts[2] = parts[0];
                parts[3] = parts[1];
            }
            else if (ln === 3) {
                parts[3] = parts[1];
            }

            return {
                top   :parseInt(parts[0], 10) || 0,
                right :parseInt(parts[1], 10) || 0,
                bottom:parseInt(parts[2], 10) || 0,
                left  :parseInt(parts[3], 10) || 0
            };
        }
    };
});


Ext.define('Ext.Template', {
    requires: [
        
        'Ext.util.Format'
    ],

    inheritableStatics: {
        
        from: function(el, config) {
            el = Ext.getDom(el);
            return new this(el.value || el.innerHTML, config || '');
        }
    },

    
    
    
    useEval: Ext.isGecko,

    

    
    constructor: function(html) {
        var me = this,
            args = arguments,
            buffer = [],
            i,
            length = args.length,
            value;

        me.initialConfig = {};
        
        
        
        
        if (length === 1 && Ext.isArray(html)) {
            args = html;
            length = args.length;
        }

        if (length > 1) {
            for (i = 0; i < length; i++) {
                value = args[i];
                if (typeof value == 'object') {
                    Ext.apply(me.initialConfig, value);
                    Ext.apply(me, value);
                } else {
                    buffer.push(value);
                }
            }
        } else {
            buffer.push(html);
        }

        
        me.html = buffer.join('');
    },

    
    isTemplate: true,

    

    
    disableFormats: false,

    
    tokenRe: /\{(?:(?:(\d+)|([a-z_][\w\-]*))(?::([a-z_\.]+)(?:\(([^\)]*?)?\))?)?)\}/gi,

    
    apply: function(values) {
        var me = this;

        if (me.compiled) {
            if (!me.fn) {
                me.compile();
            }
            return me.fn(values).join('');
        }

        return me.evaluate(values);
    },

    
    
    evaluate: function(values) {
        var me = this,
            useFormat = !me.disableFormats,
            fm = Ext.util.Format,
            tpl = me;

        function fn(match, index, name, formatFn, args) {
            
            
            if (name == null || name == '') {
                name = index;
            }
            if (formatFn && useFormat) {
                if (args) {
                    args = [values[name]].concat(Ext.functionFactory('return ['+ args +'];')());
                } else {
                    args = [values[name]];
                }

                
                if (formatFn.substr(0, 5) === "this.") {
                    return tpl[formatFn.substr(5)].apply(tpl, args);
                }
                
                else if (fm[formatFn]) {
                    return fm[formatFn].apply(fm, args);
                }
                
                else {
                    return match;
                }
            }
            else {
                return values[name] !== undefined ? values[name] : "";
            }
        }

        return me.html.replace(me.tokenRe, fn);
    },

    
    applyOut: function(values, out) {
        var me = this;

        if (me.compiled) {
            if (!me.fn) {
                me.compile();
            }
            out.push.apply(out, me.fn(values));
        } else {
            out.push(me.apply(values));
        }

        return out;
    },

    
    applyTemplate: function () {
        return this.apply.apply(this, arguments);
    },

    
    set: function(html, compile) {
        var me = this;
        me.html = html;
        me.compiled = !!compile;
        me.fn = null;
        return me;
    },

    compileARe: /\\/g,
    compileBRe: /(\r\n|\n)/g,
    compileCRe: /'/g,

    
    compile: function() {
        var me = this,
            code;

        code = me.html.replace(me.compileARe, '\\\\').replace(me.compileBRe, '\\n').
                       replace(me.compileCRe, "\\'").replace(me.tokenRe, me.regexReplaceFn.bind(me));
        code = (this.disableFormats !== true ? 'var fm=Ext.util.Format;' : '') +
                (me.useEval ? '$=' : 'return') +
                " function(v){return ['" + code + "'];};";

        me.fn  = me.useEval ? me.evalCompiled(code) : (new Function('Ext', code))(Ext);
        me.compiled = true;
        return me;
    },

    
    evalCompiled: function($) {

        
        
        
        
        eval($);
        return $;
    },

    regexReplaceFn: function (match, index, name, formatFn, args) {
        
        
        
        if (index == null || index == '') {
            index = '"' + name + '"';
        }
        
        
        else if (this.stringFormat) {
            index = parseInt(index) + 1;
        }
        if (formatFn && this.disableFormats !== true) {
            args = args ? ',' + args: "";

            
            if (formatFn.substr(0, 5) === "this.") {
                formatFn = formatFn + '(';
            }
            
            else if (Ext.util.Format[formatFn]) {
                formatFn = "fm." + formatFn + '(';
            }
            
            else {
                return match;
            }
            return "'," + formatFn + "v[" + index + "]" + args + "),'";
        }
        else {
            return "',v[" + index + "] == undefined ? '' : v[" + index + "],'";
        }
    },

    
    insertFirst: function(el, values, returnElement) {
        return this.doInsert('afterBegin', el, values, returnElement);
    },

    
    insertBefore: function(el, values, returnElement) {
        return this.doInsert('beforeBegin', el, values, returnElement);
    },

    
    insertAfter: function(el, values, returnElement) {
        return this.doInsert('afterEnd', el, values, returnElement);
    },

    
    append: function(el, values, returnElement) {
        return this.doInsert('beforeEnd', el, values, returnElement);
    },

    doInsert: function(where, el, values, returnElement) {
        var newNode = Ext.DomHelper.insertHtml(where, Ext.getDom(el), this.apply(values));
        return returnElement ? Ext.get(newNode) : newNode;
    },

    
    overwrite: function(el, values, returnElement) {
        var newNode = Ext.DomHelper.overwrite(Ext.getDom(el), this.apply(values));
        return returnElement ? Ext.get(newNode) : newNode;
    }
});

Ext.define('Ext.overrides.Widget', {
    override: 'Ext.Widget',

    $configStrict: false,

    isComponent: true,

    
    
    
    rendered: true,
    
    cachedConfig: {
        baseCls: Ext.baseCSSPrefix + 'widget'
    },

    constructor: function(config) {
        this.callParent([config]);

        
        this.getComponentLayout();
    },

    addCls: function(cls) {
        this.el.addCls(cls);
    },

    addClsWithUI: function(cls) {
        this.el.addCls(cls);
    },

    afterComponentLayout: Ext.emptyFn,

    getComponentLayout: function() {
        var me = this,
            layout = me.componentLayout;

        if (!layout) {
            layout = me.componentLayout = new Ext.layout.component.Auto();
            layout.setOwner(me);
        }

        return layout;
    },

    
    getTdCls: function() {
        return this.getBaseCls() + '-cell';
    },

    
    getItemId: function() {
        return this.itemId || this.id;
    },

    getSizeModel: function() {
        return Ext.Component.prototype.getSizeModel.apply(this, arguments);
    },

    onAdded: Ext.emptyFn,

    onRemoved: Ext.emptyFn,

    parseBox: function(box) {
        return Ext.Element.parseBox(box);
    },

    render: function(container, position) {
        var element = this.element,
            nextSibling;

        if (position) {
            nextSibiling = container.childNodes[position];
            if (nextSibling) {
                container.insertBefore(element, nextSibling);
                return;
            }
        }

        container.appendChild(element);
    },

    setPosition: function(x, y) {
        this.el.setLocalXY(x, y);
    }

}, function() {
    var prototype;

    if (Ext.isIE8) {
        prototype = Ext.Widget.prototype;
        
        
        prototype.addElementReferenceOnDemand = prototype.addElementReference;
    }
});




Ext.define('Ext.overrides.app.Application', {
    override: 'Ext.app.Application'
});


Ext.application = function(config) {
    var createApp = function (App) {
            
            Ext.onReady(function() {
                Ext.app.Application.instance = new App();
            });
        },
        paths = config.paths,
        ns;

    if (typeof config === "string") {
        Ext.require(config, function() {
            createApp(Ext.ClassManager.get(config));
        });
    }
    else {
        config = Ext.apply({
            extend: 'Ext.app.Application' 
        }, config);

        
        
        Ext.Loader.setPath(config.name, config.appFolder || 'app');

        if (paths) {
            for (ns in paths) {
                if (paths.hasOwnProperty(ns)) {
                    Ext.Loader.setPath(ns, paths[ns]);
                }
            }
        }

        config['paths processed'] = true;

        
        Ext.define(config.name + ".$application", config,
            function () {
                createApp(this);
            });
    }
};

Ext.define('Ext.overrides.data.NodeInterface', {
    override: 'Ext.NodeInterface',

    suspendUIChanges: function() {
        Ext.suspendLayouts();
    },

    resumeUIChanges: function() {
        Ext.resumeLayouts();
    }
});
