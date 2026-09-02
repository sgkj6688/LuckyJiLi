System.register("chunks:///main.js", ["./index-cd9aa326.js", "cc"], function () {
    "use strict";
    var t,
        e,
        i,
        n,
        o,
        r,
        a,
        s,
        l,
        c,
        u,
        p,
        h,
        m,
        _,
        d,
        f,
        y,
        g,
        S,
        b,
        w,
        C,
        v,
        E,
        T,
        O,
        N,
        B,
        I,
        L,
        R,
        A,
        x,
        k,
        F,
        P,
        M,
        D,
        z,
        G,
        V,
        H,
        W,
        U,
        j,
        X,
        Y,
        K,
        Z,
        q,
        J,
        Q,
        $,
        tt,
        et,
        it,
        nt,
        ot,
        rt,
        at,
        st,
        lt,
        ct,
        ut,
        pt,
        ht,
        mt,
        _t,
        dt,
        ft,
        yt,
        gt,
        St,
        bt,
        wt,
        Ct,
        vt,
        Et,
        Tt,
        Ot,
        Nt;
    return {
        setters: [
            function (v) {
                ((t = v._),
                    (e = v.a),
                    (i = v.b),
                    (n = v.c),
                    (o = v.d),
                    (r = v.n),
                    (a = v.e),
                    (s = v.f),
                    (l = v.g),
                    (c = v.h),
                    (u = v.S),
                    (p = v.i),
                    (h = v.j),
                    (m = v.k),
                    (_ = v.l),
                    (d = v.m),
                    (f = v.C),
                    (y = v.o),
                    (g = v.p),
                    (S = v.q),
                    (b = v.r),
                    (w = v.s),
                    (C = v.t));
            },
            function (t) {
                ((v = t.cclegacy),
                    (E = t._decorator),
                    (T = t.Color),
                    (O = t.ccenum),
                    (N = t.UITransform),
                    (B = t.Node),
                    (I = t.SpriteFrame),
                    (L = t.EventHandler),
                    (R = t.Vec3),
                    (A = t.Sprite),
                    (x = t.math),
                    (k = t.assetManager),
                    (F = t.Label),
                    (P = t.lerp),
                    (M = t.UIRenderer),
                    (D = t.NodeEventType),
                    (z = t.TransformBit),
                    (G = t.Component),
                    (V = t.Material),
                    (H = t.Gradient),
                    (W = t.v4),
                    (U = t.Texture2D),
                    (j = t.clamp01),
                    (X = t.color),
                    (Y = t.EffectAsset),
                    (K = t.CCInteger),
                    (Z = t.CCBoolean),
                    (q = t.CCFloat),
                    (J = t.log),
                    (Q = t.ImageAsset),
                    ($ = t.sp),
                    (tt = t.Enum),
                    (et = t.error),
                    (it = t.instantiate),
                    (nt = t.Animation),
                    (ot = t.AnimationClip),
                    (rt = t.tween),
                    (at = t.v3),
                    (st = t.ParticleSystem2D),
                    (lt = t.Vec2),
                    (ct = t.TweenSystem),
                    (ut = t.Button),
                    (pt = t.CCString),
                    (ht = t.ScrollView),
                    (mt = t.UIOpacity),
                    (_t = t.isValid),
                    (dt = t.v2),
                    (ft = t.director),
                    (yt = t.Director),
                    (gt = t.CCClass),
                    (St = t.sys),
                    (bt = t.SpriteAtlas),
                    (wt = t.js),
                    (Ct = t.Prefab),
                    (vt = t.settings),
                    (Et = t.Settings),
                    (Tt = t.VERSION),
                    (Ot = t.find),
                    (Nt = t.Size));
            },
        ],
        execute: function () {
            var Bt,
                It,
                Lt,
                Rt,
                At,
                xt,
                kt,
                Ft,
                Pt,
                Mt,
                Dt,
                zt,
                Gt,
                Vt,
                Ht,
                Wt,
                Ut,
                jt,
                Xt,
                Yt,
                Kt,
                Zt,
                qt,
                Jt,
                Qt,
                $t,
                te,
                ee,
                ie,
                ne,
                oe,
                re,
                ae,
                se,
                le,
                ce,
                ue,
                pe,
                he,
                me,
                _e,
                de,
                fe,
                ye,
                ge,
                Se,
                be,
                we;
            v._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", void 0);
            var Ce,
                ve,
                Ee,
                Te = E.ccclass,
                Oe = E.executionOrder,
                Ne = E.requireComponent,
                Be = E.type,
                Ie = E.executeInEditMode,
                Le = E.property,
                Re = new T();
            (!(function (t) {
                ((t[(t.NONE = 0)] = "NONE"),
                    (t[(t.COLOR = 1)] = "COLOR"),
                    (t[(t.SPRITE = 2)] = "SPRITE"),
                    (t[(t.SCALE = 4)] = "SCALE"),
                    (t[(t.COLOR_SPRITE = 3)] = "COLOR_SPRITE"),
                    (t[(t.COLOR_SCALE = 5)] = "COLOR_SCALE"),
                    (t[(t.SPRITE_SCALE = 6)] = "SPRITE_SCALE"),
                    (t[(t.ALL = 7)] = "ALL"));
            })(Ce || (Ce = {})),
                O(Ce),
                (function (t) {
                    ((t.NORMAL = "normal"), (t.HOVER = "hover"), (t.PRESSED = "pressed"), (t.DISABLED = "disabled"));
                })(ve || (ve = {})),
                (function (t) {
                    t.CLICK = "click";
                })(Ee || (Ee = {})));
            var Ae, xe, ke, Fe, Pe, Me, De, ze, Ge, Ve, He, We, Ue, je, Xe, Ye, Ke, Ze, qe, Je, Qe, $e, ti, ei, ii, ni, oi, ri, ai;
            ((Bt = Te("ButtonPro")),
                (It = Oe(110)),
                (Lt = Ne(N)),
                (Rt = Le({ type: B, displayOrder: 0, tooltip: "i18n:button.target" })),
                (At = Le({ displayOrder: 1, tooltip: "i18n:button.interactable" })),
                (xt = Le({ type: Ce, displayOrder: 2, tooltip: "i18n:button.transition" })),
                (kt = Le({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.normal_color" })),
                (Ft = Le({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.pressed_color" })),
                (Pt = Le({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.hover_color" })),
                (Mt = Le({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.disabled_color" })),
                (Dt = Le({ group: { name: "SCALE" }, displayOrder: 4, tooltip: "i18n:button.duration", min: 0, max: 10 })),
                (zt = Le({ group: { name: "SCALE" }, displayOrder: 4, tooltip: "i18n:button.zoom_scale" })),
                (Gt = Le({ group: { name: "SPRITE" }, type: I, displayOrder: 3, tooltip: "i18n:button.normal_sprite" })),
                (Vt = Le({ group: { name: "SPRITE" }, type: I, displayOrder: 3, tooltip: "i18n:button.pressed_sprite" })),
                (Ht = Le({ group: { name: "SPRITE" }, type: I, displayOrder: 3, tooltip: "i18n:button.hover_sprite" })),
                (Wt = Le({ group: { name: "SPRITE" }, type: I, displayOrder: 3, tooltip: "i18n:button.disabled_sprite" })),
                (Ut = Be([L])),
                (jt = Le({ serializable: !0, displayOrder: 20, tooltip: "i18n:button.click_events" })),
                (Xt = Le({ serializable: !0 })),
                (Yt = Le({ serializable: !0 })),
                (Kt = Le({ serializable: !0 })),
                (Zt = Le({ serializable: !0 })),
                (qt = Le({ serializable: !0 })),
                (Jt = Le({ serializable: !0 })),
                (Qt = Le({ serializable: !0 })),
                ($t = Le({ serializable: !0 })),
                (te = Le({ serializable: !0 })),
                (ee = Le({ serializable: !0 })),
                (ie = Le({ serializable: !0 })),
                (ne = Le({ serializable: !0 })),
                (oe = Le({ serializable: !0 })),
                Bt(
                    (re =
                        It(
                            (re =
                                Lt(
                                    (re =
                                        Ie(
                                            (((we = (function (t) {
                                                function r() {
                                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                                    return (
                                                        (e = t.call.apply(t, [this].concat(r)) || this),
                                                        i(e, "clickEvents", se, n(e)),
                                                        i(e, "_interactable", le, n(e)),
                                                        i(e, "_transition", ce, n(e)),
                                                        i(e, "_normalColor", ue, n(e)),
                                                        i(e, "_hoverColor", pe, n(e)),
                                                        i(e, "_pressedColor", he, n(e)),
                                                        i(e, "_disabledColor", me, n(e)),
                                                        i(e, "_normalSprite", _e, n(e)),
                                                        i(e, "_hoverSprite", de, n(e)),
                                                        i(e, "_pressedSprite", fe, n(e)),
                                                        i(e, "_disabledSprite", ye, n(e)),
                                                        i(e, "_duration", ge, n(e)),
                                                        i(e, "_zoomScale", Se, n(e)),
                                                        i(e, "_target", be, n(e)),
                                                        (e._pressed = !1),
                                                        (e._hovered = !1),
                                                        (e._fromColor = new T()),
                                                        (e._toColor = new T()),
                                                        (e._time = 0),
                                                        (e._transitionFinished = !0),
                                                        (e._fromScale = new R()),
                                                        (e._toScale = new R()),
                                                        (e._originalScale = null),
                                                        (e._sprite = null),
                                                        (e._targetScale = new R()),
                                                        e
                                                    );
                                                }
                                                e(r, t);
                                                var a = r.prototype;
                                                return (
                                                    (a.onLoad = function () {
                                                        if (!this.getComponent(A)) {
                                                            var t = this.addComponent(A);
                                                            if (t) {
                                                                ((t.sizeMode = A.SizeMode.CUSTOM), (t.type = A.Type.SLICED));
                                                                var e = this.node.getComponent(N);
                                                                e && (e.contentSize = x.size(120, 40));
                                                            }
                                                            var i = k.assets.get("20835ba4-6145-4fbc-a58a-051ce700aa3e@f9941");
                                                            i &&
                                                                (t && !t.spriteFrame && (t.spriteFrame = i),
                                                                this._normalSprite || (this._normalSprite = i),
                                                                this._hoverSprite || (this._hoverSprite = i));
                                                            var n = k.assets.get("544e49d6-3f05-4fa8-9a9e-091f98fc2ce8@f9941");
                                                            n && (this._pressedSprite || (this._pressedSprite = n));
                                                            var o = k.assets.get("951249e0-9f16-456d-8b85-a6ca954da16b@f9941");
                                                            o && (this._disabledSprite || (this._disabledSprite = o));
                                                        }
                                                        if (!this.node.getChildByName("Label")) {
                                                            var r = new B("Label"),
                                                                a = r.addComponent(F);
                                                            ((a.node.layer = this.node.layer),
                                                                (a.string = "ButtonPro"),
                                                                (r.parent = this.node),
                                                                (a.color = T.BLACK),
                                                                (a.fontSize = 20));
                                                        }
                                                    }),
                                                    (a.__preload = function () {
                                                        this.target || (this.target = this.node);
                                                        var t = this.node.getComponent(A);
                                                        (t && (this._normalSprite = t.spriteFrame), this._applyTarget(), this._resetState());
                                                    }),
                                                    (a.onEnable = function () {
                                                        this._registerNodeEvent();
                                                    }),
                                                    (a.onDisable = function () {
                                                        (this._resetState(), this._unregisterNodeEvent());
                                                    }),
                                                    (a.onDestroy = function () {
                                                        this.target.isValid && this._unregisterTargetEvent(this.target);
                                                    }),
                                                    (a.update = function (t) {
                                                        var e = this.target;
                                                        if (!this._transitionFinished && e && (this._transition & Ce.COLOR || this._transition & Ce.SCALE)) {
                                                            this._time += t;
                                                            var i = 1;
                                                            if (
                                                                (this._duration > 0 && (i = this._time / this._duration),
                                                                i >= 1 && (i = 1),
                                                                this._transition & Ce.COLOR)
                                                            ) {
                                                                var n = e._uiProps.uiComp;
                                                                (T.lerp(Re, this._fromColor, this._toColor, i), n && (n.color = Re));
                                                            }
                                                            (this.transition & Ce.SCALE &&
                                                                (e.getScale(this._targetScale),
                                                                (this._targetScale.x = P(this._fromScale.x, this._toScale.x, i)),
                                                                (this._targetScale.y = P(this._fromScale.y, this._toScale.y, i)),
                                                                e.setScale(this._targetScale)),
                                                                1 === i && (this._transitionFinished = !0));
                                                        }
                                                    }),
                                                    (a._resizeNodeToTargetNode = function () {
                                                        if (this.target) this.target._uiProps.uiTransformComp;
                                                    }),
                                                    (a._resetState = function () {
                                                        ((this._pressed = !1), (this._hovered = !1));
                                                        var t = this.target;
                                                        if (t) {
                                                            var e = this._transition;
                                                            if (e & Ce.COLOR && this._interactable) {
                                                                var i = t.getComponent(M);
                                                                i && (i.color = this._normalColor);
                                                            }
                                                            (e & Ce.SCALE && this._originalScale && t.setScale(this._originalScale),
                                                                (this._transitionFinished = !0));
                                                        }
                                                    }),
                                                    (a._registerNodeEvent = function () {
                                                        (this.node.on(D.TOUCH_START, this._onTouchBegan, this),
                                                            this.node.on(D.TOUCH_MOVE, this._onTouchMove, this),
                                                            this.node.on(D.TOUCH_END, this._onTouchEnded, this),
                                                            this.node.on(D.TOUCH_CANCEL, this._onTouchCancel, this),
                                                            this.node.on(D.MOUSE_ENTER, this._onMouseMoveIn, this),
                                                            this.node.on(D.MOUSE_LEAVE, this._onMouseMoveOut, this));
                                                    }),
                                                    (a._registerTargetEvent = function (t) {
                                                        t.on(D.TRANSFORM_CHANGED, this._onTargetTransformChanged, this);
                                                    }),
                                                    (a._unregisterNodeEvent = function () {
                                                        (this.node.off(D.TOUCH_START, this._onTouchBegan, this),
                                                            this.node.off(D.TOUCH_MOVE, this._onTouchMove, this),
                                                            this.node.off(D.TOUCH_END, this._onTouchEnded, this),
                                                            this.node.off(D.TOUCH_CANCEL, this._onTouchCancel, this),
                                                            this.node.off(D.MOUSE_ENTER, this._onMouseMoveIn, this),
                                                            this.node.off(D.MOUSE_LEAVE, this._onMouseMoveOut, this));
                                                    }),
                                                    (a._unregisterTargetEvent = function (t) {
                                                        t.off(D.TRANSFORM_CHANGED);
                                                    }),
                                                    (a._getTargetSprite = function (t) {
                                                        var e = null;
                                                        return (t && (e = t.getComponent(A)), e);
                                                    }),
                                                    (a._applyTarget = function () {
                                                        this.target &&
                                                            ((this._sprite = this._getTargetSprite(this.target)),
                                                            this._originalScale || (this._originalScale = new R()),
                                                            R.copy(this._originalScale, this.target.getScale()),
                                                            this._registerTargetEvent(this.target));
                                                    }),
                                                    (a._onTargetSpriteFrameChanged = function (t) {
                                                        this._transition & Ce.SPRITE && this._setCurrentStateSpriteFrame(t.spriteFrame);
                                                    }),
                                                    (a._setCurrentStateSpriteFrame = function (t) {
                                                        if (t)
                                                            switch (this._getButtonState()) {
                                                                case ve.NORMAL:
                                                                    this._normalSprite = t;
                                                                    break;
                                                                case ve.HOVER:
                                                                    this._hoverSprite = t;
                                                                    break;
                                                                case ve.PRESSED:
                                                                    this._pressedSprite = t;
                                                                    break;
                                                                case ve.DISABLED:
                                                                    this._disabledSprite = t;
                                                            }
                                                    }),
                                                    (a._onTargetColorChanged = function (t) {
                                                        this._transition & Ce.COLOR && this._setCurrentStateColor(t);
                                                    }),
                                                    (a._setCurrentStateColor = function (t) {
                                                        switch (this._getButtonState()) {
                                                            case ve.NORMAL:
                                                                this._normalColor = t;
                                                                break;
                                                            case ve.HOVER:
                                                                this._hoverColor = t;
                                                                break;
                                                            case ve.PRESSED:
                                                                this._pressedColor = t;
                                                                break;
                                                            case ve.DISABLED:
                                                                this._disabledColor = t;
                                                        }
                                                    }),
                                                    (a._onTargetTransformChanged = function (t) {
                                                        t & z.SCALE &&
                                                            this._originalScale &&
                                                            this._transition & Ce.SCALE &&
                                                            this._transitionFinished &&
                                                            R.copy(this._originalScale, this.target.getScale());
                                                    }),
                                                    (a._onTouchBegan = function (t) {
                                                        this._interactable &&
                                                            this.enabledInHierarchy &&
                                                            ((this._pressed = !0), this._updateState(), t && (t.propagationStopped = !0));
                                                    }),
                                                    (a._onTouchMove = function (t) {
                                                        if (this._interactable && this.enabledInHierarchy && this._pressed && t) {
                                                            var e = t.touch;
                                                            if (e) {
                                                                var i,
                                                                    n = this.node._uiProps.uiTransformComp.hitTest(e.getLocation());
                                                                if (this._transition & Ce.SCALE && this.target && this._originalScale)
                                                                    n
                                                                        ? (R.copy(this._fromScale, this._originalScale),
                                                                          R.multiplyScalar(this._toScale, this._originalScale, this._zoomScale),
                                                                          (this._transitionFinished = !1))
                                                                        : ((this._time = 0),
                                                                          (this._transitionFinished = !0),
                                                                          this.target.setScale(this._originalScale));
                                                                else ((i = n ? ve.PRESSED : ve.NORMAL), this._applyTransition(i));
                                                                t && (t.propagationStopped = !0);
                                                            }
                                                        }
                                                    }),
                                                    (a._onTouchEnded = function (t) {
                                                        this._interactable &&
                                                            this.enabledInHierarchy &&
                                                            (this._pressed && (L.emitEvents(this.clickEvents, t), this.node.emit(Ee.CLICK, this)),
                                                            (this._pressed = !1),
                                                            this._updateState(),
                                                            t && (t.propagationStopped = !0));
                                                    }),
                                                    (a._onTouchCancel = function () {
                                                        this._interactable && this.enabledInHierarchy && ((this._pressed = !1), this._updateState());
                                                    }),
                                                    (a._onMouseMoveIn = function () {
                                                        !this._pressed &&
                                                            this.interactable &&
                                                            this.enabledInHierarchy &&
                                                            ((this._transition & Ce.SPRITE && !this._hoverSprite) ||
                                                                this._hovered ||
                                                                ((this._hovered = !0), this._updateState()));
                                                    }),
                                                    (a._onMouseMoveOut = function () {
                                                        this._hovered && ((this._hovered = !1), this._updateState());
                                                    }),
                                                    (a._updateState = function () {
                                                        var t = this._getButtonState();
                                                        this._applyTransition(t);
                                                    }),
                                                    (a._getButtonState = function () {
                                                        var t = ve.NORMAL;
                                                        return (
                                                            this._interactable
                                                                ? this._pressed
                                                                    ? (t = ve.PRESSED)
                                                                    : this._hovered && (t = ve.HOVER)
                                                                : (t = ve.DISABLED),
                                                            t.toString()
                                                        );
                                                    }),
                                                    (a._updateColorTransition = function (t) {
                                                        var e,
                                                            i = this[t + "Color"],
                                                            n = null == (e = this.target) ? void 0 : e.getComponent(M);
                                                        n &&
                                                            (t === ve.DISABLED
                                                                ? ((n.color = i), (this._transitionFinished = !0))
                                                                : ((this._fromColor = n.color.clone()),
                                                                  (this._toColor = i),
                                                                  (this._time = 0),
                                                                  (this._transitionFinished = !1)));
                                                    }),
                                                    (a._updateSpriteTransition = function (t) {
                                                        var e = this[t + "Sprite"];
                                                        this._sprite && e && (this._sprite.spriteFrame = e);
                                                    }),
                                                    (a._updateScaleTransition = function (t) {
                                                        this._interactable && (t === ve.PRESSED ? this._zoomUp() : this._zoomBack());
                                                    }),
                                                    (a._zoomUp = function () {
                                                        this._originalScale &&
                                                            (R.copy(this._fromScale, this._originalScale),
                                                            R.multiplyScalar(this._toScale, this._originalScale, this._zoomScale),
                                                            (this._time = 0),
                                                            (this._transitionFinished = !1));
                                                    }),
                                                    (a._zoomBack = function () {
                                                        this.target &&
                                                            this._originalScale &&
                                                            (R.copy(this._fromScale, this.target.getScale()),
                                                            R.copy(this._toScale, this._originalScale),
                                                            (this._time = 0),
                                                            (this._transitionFinished = !1));
                                                    }),
                                                    (a._applyTransition = function (t) {
                                                        var e = this._transition;
                                                        (e & Ce.COLOR && this._updateColorTransition(t),
                                                            e & Ce.SPRITE && this._updateSpriteTransition(t),
                                                            e & Ce.SCALE && this._updateScaleTransition(t));
                                                    }),
                                                    (a._xrHoverEnter = function () {
                                                        (this._onMouseMoveIn(), this._updateState());
                                                    }),
                                                    (a._xrHoverExit = function () {
                                                        (this._onMouseMoveOut(), this._pressed && ((this._pressed = !1), this._updateState()));
                                                    }),
                                                    (a._xrClick = function () {
                                                        this._interactable && this.enabledInHierarchy && ((this._pressed = !0), this._updateState());
                                                    }),
                                                    (a._xrUnClick = function () {
                                                        this._interactable &&
                                                            this.enabledInHierarchy &&
                                                            (this._pressed && (L.emitEvents(this.clickEvents, this), this.node.emit(Ee.CLICK, this)),
                                                            (this._pressed = !1),
                                                            this._updateState());
                                                    }),
                                                    o(r, [
                                                        {
                                                            key: "target",
                                                            get: function () {
                                                                return this._target || this.node;
                                                            },
                                                            set: function (t) {
                                                                this._target !== t &&
                                                                    (this._target && this._unregisterTargetEvent(this._target),
                                                                    (this._target = t),
                                                                    this._applyTarget());
                                                            },
                                                        },
                                                        {
                                                            key: "interactable",
                                                            get: function () {
                                                                return this._interactable;
                                                            },
                                                            set: function (t) {
                                                                this._interactable !== t &&
                                                                    ((this._interactable = t), this._updateState(), this._interactable || this._resetState());
                                                            },
                                                        },
                                                        {
                                                            key: "_resizeToTarget",
                                                            set: function (t) {
                                                                t && this._resizeNodeToTargetNode();
                                                            },
                                                        },
                                                        {
                                                            key: "transition",
                                                            get: function () {
                                                                return this._transition;
                                                            },
                                                            set: function (t) {
                                                                this._transition !== t &&
                                                                    (this._transition & Ce.COLOR && this._updateColorTransition(ve.NORMAL),
                                                                    this._transition & Ce.SPRITE && this._updateSpriteTransition(ve.NORMAL),
                                                                    (this._transition = t),
                                                                    this._updateState());
                                                            },
                                                        },
                                                        {
                                                            key: "normalColor",
                                                            get: function () {
                                                                return this._normalColor;
                                                            },
                                                            set: function (t) {
                                                                this._normalColor !== t && (this._normalColor.set(t), this._updateState());
                                                            },
                                                        },
                                                        {
                                                            key: "pressedColor",
                                                            get: function () {
                                                                return this._pressedColor;
                                                            },
                                                            set: function (t) {
                                                                this._pressedColor !== t && this._pressedColor.set(t);
                                                            },
                                                        },
                                                        {
                                                            key: "hoverColor",
                                                            get: function () {
                                                                return this._hoverColor;
                                                            },
                                                            set: function (t) {
                                                                this._hoverColor !== t && this._hoverColor.set(t);
                                                            },
                                                        },
                                                        {
                                                            key: "disabledColor",
                                                            get: function () {
                                                                return this._disabledColor;
                                                            },
                                                            set: function (t) {
                                                                this._disabledColor !== t && (this._disabledColor.set(t), this._updateState());
                                                            },
                                                        },
                                                        {
                                                            key: "duration",
                                                            get: function () {
                                                                return this._duration;
                                                            },
                                                            set: function (t) {
                                                                this._duration !== t && (this._duration = t);
                                                            },
                                                        },
                                                        {
                                                            key: "zoomScale",
                                                            get: function () {
                                                                return this._zoomScale;
                                                            },
                                                            set: function (t) {
                                                                this._zoomScale !== t && (this._zoomScale = t);
                                                            },
                                                        },
                                                        {
                                                            key: "normalSprite",
                                                            get: function () {
                                                                return this._normalSprite;
                                                            },
                                                            set: function (t) {
                                                                if (this._normalSprite !== t) {
                                                                    this._normalSprite = t;
                                                                    var e = this.node.getComponent(A);
                                                                    (e && (e.spriteFrame = t), this._updateState());
                                                                }
                                                            },
                                                        },
                                                        {
                                                            key: "pressedSprite",
                                                            get: function () {
                                                                return this._pressedSprite;
                                                            },
                                                            set: function (t) {
                                                                this._pressedSprite !== t && ((this._pressedSprite = t), this._updateState());
                                                            },
                                                        },
                                                        {
                                                            key: "hoverSprite",
                                                            get: function () {
                                                                return this._hoverSprite;
                                                            },
                                                            set: function (t) {
                                                                this._hoverSprite !== t && ((this._hoverSprite = t), this._updateState());
                                                            },
                                                        },
                                                        {
                                                            key: "disabledSprite",
                                                            get: function () {
                                                                return this._disabledSprite;
                                                            },
                                                            set: function (t) {
                                                                this._disabledSprite !== t && ((this._disabledSprite = t), this._updateState());
                                                            },
                                                        },
                                                    ]),
                                                    r
                                                );
                                            })(G)).Transition = Ce),
                                            (we.EventType = Ee),
                                            t((ae = we).prototype, "target", [Rt], Object.getOwnPropertyDescriptor(ae.prototype, "target"), ae.prototype),
                                            t(ae.prototype, "interactable", [At], Object.getOwnPropertyDescriptor(ae.prototype, "interactable"), ae.prototype),
                                            t(ae.prototype, "transition", [xt], Object.getOwnPropertyDescriptor(ae.prototype, "transition"), ae.prototype),
                                            t(ae.prototype, "normalColor", [kt], Object.getOwnPropertyDescriptor(ae.prototype, "normalColor"), ae.prototype),
                                            t(ae.prototype, "pressedColor", [Ft], Object.getOwnPropertyDescriptor(ae.prototype, "pressedColor"), ae.prototype),
                                            t(ae.prototype, "hoverColor", [Pt], Object.getOwnPropertyDescriptor(ae.prototype, "hoverColor"), ae.prototype),
                                            t(
                                                ae.prototype,
                                                "disabledColor",
                                                [Mt],
                                                Object.getOwnPropertyDescriptor(ae.prototype, "disabledColor"),
                                                ae.prototype,
                                            ),
                                            t(ae.prototype, "duration", [Dt], Object.getOwnPropertyDescriptor(ae.prototype, "duration"), ae.prototype),
                                            t(ae.prototype, "zoomScale", [zt], Object.getOwnPropertyDescriptor(ae.prototype, "zoomScale"), ae.prototype),
                                            t(ae.prototype, "normalSprite", [Gt], Object.getOwnPropertyDescriptor(ae.prototype, "normalSprite"), ae.prototype),
                                            t(
                                                ae.prototype,
                                                "pressedSprite",
                                                [Vt],
                                                Object.getOwnPropertyDescriptor(ae.prototype, "pressedSprite"),
                                                ae.prototype,
                                            ),
                                            t(ae.prototype, "hoverSprite", [Ht], Object.getOwnPropertyDescriptor(ae.prototype, "hoverSprite"), ae.prototype),
                                            t(
                                                ae.prototype,
                                                "disabledSprite",
                                                [Wt],
                                                Object.getOwnPropertyDescriptor(ae.prototype, "disabledSprite"),
                                                ae.prototype,
                                            ),
                                            (se = t(ae.prototype, "clickEvents", [Ut, jt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return [];
                                                },
                                            })),
                                            (le = t(ae.prototype, "_interactable", [Xt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return !0;
                                                },
                                            })),
                                            (ce = t(ae.prototype, "_transition", [Yt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return Ce.NONE;
                                                },
                                            })),
                                            (ue = t(ae.prototype, "_normalColor", [Kt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return T.WHITE.clone();
                                                },
                                            })),
                                            (pe = t(ae.prototype, "_hoverColor", [Zt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return new T(211, 211, 211, 255);
                                                },
                                            })),
                                            (he = t(ae.prototype, "_pressedColor", [qt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return T.WHITE.clone();
                                                },
                                            })),
                                            (me = t(ae.prototype, "_disabledColor", [Jt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return new T(124, 124, 124, 255);
                                                },
                                            })),
                                            (_e = t(ae.prototype, "_normalSprite", [Qt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (de = t(ae.prototype, "_hoverSprite", [$t], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (fe = t(ae.prototype, "_pressedSprite", [te], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (ye = t(ae.prototype, "_disabledSprite", [ee], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (ge = t(ae.prototype, "_duration", [ie], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return 0.1;
                                                },
                                            })),
                                            (Se = t(ae.prototype, "_zoomScale", [ne], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return 1.2;
                                                },
                                            })),
                                            (be = t(ae.prototype, "_target", [oe], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (re = ae)),
                                        ) || re),
                                ) || re),
                        ) || re),
                ));
            (v._RF.pop(), v._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", void 0));
            var si,
                li,
                ci,
                ui,
                pi,
                hi,
                mi,
                _i,
                di = E.ccclass,
                fi = E.property,
                yi = E.requireComponent,
                gi = E.executeInEditMode;
            ((Ae = di("ColorText")),
                (xe = yi(F)),
                (ke = fi(V)),
                (Fe = fi(H)),
                (Pe = fi(T)),
                (Me = fi({ tooltip: "使用該元件的自定義材質", type: V })),
                (De = fi({ tooltip: "顏色漸變元件", type: H })),
                (ze = fi({ tooltip: "正片疊底顏色", type: T })),
                (Ge = fi({ tooltip: "顏色漸變貼圖的範圍", range: [0, 1, 0.01], slide: !0 })),
                (Ve = fi({ tooltip: "是否垂直漸變顏色" })),
                (He = fi({ tooltip: "上內陰影顏色", type: T })),
                (We = fi({ tooltip: "下內陰影顏色", type: T })),
                (Ue = fi({ tooltip: "上內陰影顏色高度 (Pixel)" })),
                (je = fi({ tooltip: "下內陰影顏色高度 (Pixel)" })),
                (Xe = fi({ tooltip: "上內陰影插值比例 (0 ~ 1)", range: [0, 1, 0.01], slide: !0 })),
                (Ye = fi({ tooltip: "下內陰影插值比例 (0 ~ 1)", range: [0, 1, 0.01], slide: !0 })),
                Ae(
                    (Ke =
                        xe(
                            (Ke =
                                gi(
                                    ((qe = t(
                                        (Ze = (function (t) {
                                            function r() {
                                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                                return (
                                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                                    i(e, "_textMaterial", qe, n(e)),
                                                    i(e, "_gradient", Je, n(e)),
                                                    i(e, "_gradientMultiply", Qe, n(e)),
                                                    i(e, "_gradientShrink", $e, n(e)),
                                                    i(e, "_isVertical", ti, n(e)),
                                                    i(e, "_innerShadowColor1", ei, n(e)),
                                                    i(e, "_innerShadowColor2", ii, n(e)),
                                                    i(e, "_innerShadowHeight1", ni, n(e)),
                                                    i(e, "_innerShadowHeight2", oi, n(e)),
                                                    i(e, "_innerShadowRate1", ri, n(e)),
                                                    i(e, "_innerShadowRate2", ai, n(e)),
                                                    (e.pixelNum = 128),
                                                    (e.colorTexture = null),
                                                    (e.isGradientChanged = !0),
                                                    e
                                                );
                                            }
                                            e(r, t);
                                            var a = r.prototype;
                                            return (
                                                (a.onLoad = function () {
                                                    var t = this.node.getComponent(F);
                                                    (null !== t.customMaterial &&
                                                        (t.customMaterial !== t.sharedMaterial && t.customMaterial.destroy(), (t.customMaterial = null)),
                                                        (t.color = T.WHITE),
                                                        null === this._textMaterial && console.warn("ColorText.textMaterial should be not null."));
                                                }),
                                                (a.onEnable = function () {
                                                    this.reset();
                                                }),
                                                (a.onDestroy = function () {
                                                    var t;
                                                    (null == (t = this.colorTexture) || t.destroy(), (this.colorTexture = null));
                                                }),
                                                (a.reset = function () {
                                                    (null === this.colorTexture && (this.colorTexture = this.createColorTexture()),
                                                        !0 === this.isGradientChanged && ((this.isGradientChanged = !1), this.updateColorTexture()));
                                                    var t = this.node.getComponent(F),
                                                        e = t.customMaterial;
                                                    if ((!e && this._textMaterial && ((e = new V()).copy(this._textMaterial), (t.customMaterial = e)), e)) {
                                                        (e.setProperty("gradientMap", this.colorTexture),
                                                            e.setProperty("gradientMultiply", this._gradientMultiply),
                                                            e.setProperty("gradientShrink", this._gradientShrink),
                                                            e.setProperty("innerShadow1", this._innerShadowColor1),
                                                            e.setProperty("innerShadow2", this._innerShadowColor2));
                                                        var i = 0,
                                                            n = 0,
                                                            o = this.node.getComponent(N).contentSize;
                                                        o.height > 0 && ((i = this._innerShadowHeight1 / o.height), (n = this._innerShadowHeight2 / o.height));
                                                        var r = W(i, n, this._innerShadowRate1, this._innerShadowRate2);
                                                        e.setProperty("innerShadowParam", r);
                                                    }
                                                }),
                                                (a.createColorTexture = function () {
                                                    var t = new U(),
                                                        e = this.pixelNum,
                                                        i = 1;
                                                    return (
                                                        !0 === this._isVertical && ((i = e), (e = 1)),
                                                        t.reset({ width: e, height: i, format: U.PixelFormat.RGBA8888, mipmapLevel: 0 }),
                                                        t.setWrapMode(U.WrapMode.CLAMP_TO_EDGE, U.WrapMode.CLAMP_TO_EDGE),
                                                        t.setFilters(U.Filter.LINEAR, U.Filter.LINEAR),
                                                        t
                                                    );
                                                }),
                                                (a.updateColorTexture = function () {
                                                    for (
                                                        var t = this.pixelNum, e = new Uint8ClampedArray(4 * t), i = 0, n = this._gradient, o = 0;
                                                        o < t;
                                                        ++o
                                                    ) {
                                                        var r = n.evaluate(o / t);
                                                        ((e[i++] = r.r), (e[i++] = r.g), (e[i++] = r.b), (e[i++] = r.a));
                                                    }
                                                    var a = this.colorTexture;
                                                    (a.uploadData(e, 0, 0), a.updateImage());
                                                }),
                                                o(r, [
                                                    {
                                                        key: "textMaterial",
                                                        get: function () {
                                                            return this._textMaterial;
                                                        },
                                                        set: function (t) {
                                                            ((this._textMaterial = t), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "gradient",
                                                        get: function () {
                                                            return this._gradient;
                                                        },
                                                        set: function (t) {
                                                            ((this.isGradientChanged = !0), (this._gradient = t), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "gradientMultiply",
                                                        get: function () {
                                                            return this._gradientMultiply;
                                                        },
                                                        set: function (t) {
                                                            ((this._gradientMultiply = t), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "gradientShrink",
                                                        get: function () {
                                                            return this._gradientShrink;
                                                        },
                                                        set: function (t) {
                                                            ((this._gradientShrink = t), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "isVertical",
                                                        get: function () {
                                                            return this._isVertical;
                                                        },
                                                        set: function (t) {
                                                            var e;
                                                            this._isVertical !== t &&
                                                                (null == (e = this.colorTexture) || e.destroy(), (this.colorTexture = null));
                                                            ((this._isVertical = t), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "innerShadowColor1",
                                                        get: function () {
                                                            return this._innerShadowColor1;
                                                        },
                                                        set: function (t) {
                                                            (this._innerShadowColor1.set(t), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "innerShadowColor2",
                                                        get: function () {
                                                            return this._innerShadowColor2;
                                                        },
                                                        set: function (t) {
                                                            (this._innerShadowColor2.set(t), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "innerShadowHeight1",
                                                        get: function () {
                                                            return this._innerShadowHeight1;
                                                        },
                                                        set: function (t) {
                                                            ((this._innerShadowHeight1 = t), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "innerShadowHeight2",
                                                        get: function () {
                                                            return this._innerShadowHeight2;
                                                        },
                                                        set: function (t) {
                                                            ((this._innerShadowHeight2 = t), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "innerShadowRate1",
                                                        get: function () {
                                                            return this._innerShadowRate1;
                                                        },
                                                        set: function (t) {
                                                            ((this._innerShadowRate1 = j(t)), this.reset());
                                                        },
                                                    },
                                                    {
                                                        key: "innerShadowRate2",
                                                        get: function () {
                                                            return this._innerShadowRate2;
                                                        },
                                                        set: function (t) {
                                                            ((this._innerShadowRate2 = t), this.reset());
                                                        },
                                                    },
                                                ]),
                                                r
                                            );
                                        })(G)).prototype,
                                        "_textMaterial",
                                        [ke],
                                        {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return null;
                                            },
                                        },
                                    )),
                                    (Je = t(Ze.prototype, "_gradient", [Fe], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return new H();
                                        },
                                    })),
                                    (Qe = t(Ze.prototype, "_gradientMultiply", [Pe], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return X(255, 255, 255, 255);
                                        },
                                    })),
                                    ($e = t(Ze.prototype, "_gradientShrink", [fi], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0.15;
                                        },
                                    })),
                                    (ti = t(Ze.prototype, "_isVertical", [fi], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !0;
                                        },
                                    })),
                                    t(Ze.prototype, "textMaterial", [Me], Object.getOwnPropertyDescriptor(Ze.prototype, "textMaterial"), Ze.prototype),
                                    t(Ze.prototype, "gradient", [De], Object.getOwnPropertyDescriptor(Ze.prototype, "gradient"), Ze.prototype),
                                    t(Ze.prototype, "gradientMultiply", [ze], Object.getOwnPropertyDescriptor(Ze.prototype, "gradientMultiply"), Ze.prototype),
                                    t(Ze.prototype, "gradientShrink", [Ge], Object.getOwnPropertyDescriptor(Ze.prototype, "gradientShrink"), Ze.prototype),
                                    t(Ze.prototype, "isVertical", [Ve], Object.getOwnPropertyDescriptor(Ze.prototype, "isVertical"), Ze.prototype),
                                    (ei = t(Ze.prototype, "_innerShadowColor1", [fi], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return X(255, 255, 255, 255);
                                        },
                                    })),
                                    (ii = t(Ze.prototype, "_innerShadowColor2", [fi], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return X(255, 255, 255, 255);
                                        },
                                    })),
                                    (ni = t(Ze.prototype, "_innerShadowHeight1", [fi], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 1;
                                        },
                                    })),
                                    (oi = t(Ze.prototype, "_innerShadowHeight2", [fi], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 2;
                                        },
                                    })),
                                    (ri = t(Ze.prototype, "_innerShadowRate1", [fi], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    })),
                                    (ai = t(Ze.prototype, "_innerShadowRate2", [fi], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    })),
                                    t(
                                        Ze.prototype,
                                        "innerShadowColor1",
                                        [He],
                                        Object.getOwnPropertyDescriptor(Ze.prototype, "innerShadowColor1"),
                                        Ze.prototype,
                                    ),
                                    t(
                                        Ze.prototype,
                                        "innerShadowColor2",
                                        [We],
                                        Object.getOwnPropertyDescriptor(Ze.prototype, "innerShadowColor2"),
                                        Ze.prototype,
                                    ),
                                    t(
                                        Ze.prototype,
                                        "innerShadowHeight1",
                                        [Ue],
                                        Object.getOwnPropertyDescriptor(Ze.prototype, "innerShadowHeight1"),
                                        Ze.prototype,
                                    ),
                                    t(
                                        Ze.prototype,
                                        "innerShadowHeight2",
                                        [je],
                                        Object.getOwnPropertyDescriptor(Ze.prototype, "innerShadowHeight2"),
                                        Ze.prototype,
                                    ),
                                    t(Ze.prototype, "innerShadowRate1", [Xe], Object.getOwnPropertyDescriptor(Ze.prototype, "innerShadowRate1"), Ze.prototype),
                                    t(Ze.prototype, "innerShadowRate2", [Ye], Object.getOwnPropertyDescriptor(Ze.prototype, "innerShadowRate2"), Ze.prototype),
                                    (Ke = Ze)),
                                ) || Ke),
                        ) || Ke),
                ));
            (v._RF.pop(), v._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", void 0));
            var Si,
                bi = E.ccclass,
                wi = E.property,
                Ci = E.executeInEditMode;
            ((si = bi("ColorFadingUI")),
                (li = wi({ type: Y, tooltip: "Color Fading 預設 shader" })),
                (ci = wi({ type: K, tooltip: "Gradient Texture Size" })),
                (ui = wi({ type: Z, tooltip: "是否使用alpha test, Spine建議開啟" })),
                (pi = wi({ type: q, tooltip: "混合比例，0~1之間" })),
                (hi = wi({ type: H, tooltip: "當前Gradient" })),
                si(
                    (mi =
                        Ci(
                            (t(
                                (_i = (function (t) {
                                    function i() {
                                        for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                                        return (
                                            ((e = t.call.apply(t, [this].concat(n)) || this).m_colorFadingEffect = null),
                                            (e.m_gradientTextureSize = 64),
                                            (e.m_currGradient = new H()),
                                            (e.m_mixRate = 0),
                                            (e.m_useAlphaTest = !1),
                                            (e.m_tex = new U()),
                                            (e.m_use_colorfading = !0),
                                            (e.m_renderComponent = null),
                                            (e.m_copyEffect = null),
                                            e
                                        );
                                    }
                                    e(i, t);
                                    var n = i.prototype;
                                    return (
                                        (n.start = function () {
                                            this.GenerateMat();
                                        }),
                                        (n.onDestroy = function () {
                                            this.m_use_colorfading = !1;
                                        }),
                                        (n.Init = function (t, e, i, n, o, r) {
                                            (void 0 === i && (i = 0),
                                                void 0 === n && (n = 64),
                                                void 0 === o && (o = !0),
                                                void 0 === r && (r = !1),
                                                (this.ColorFadingEffect = t),
                                                (this.CurrentGradient = e),
                                                (this.UseAlphaTest = r),
                                                (this.MixRate = i),
                                                (this.GradientTextureSize = n),
                                                this.UseColorFadingAPI(o),
                                                this.GenerateMat());
                                        }),
                                        (n.UseColorFadingAPI = function (t) {
                                            ((this.m_use_colorfading = t), this.GenerateMat());
                                        }),
                                        (n.ResetGradient = function () {
                                            ((this.m_mixRate = 1), (this.m_currGradient = new H()), this.LoadTexture());
                                        }),
                                        (n.GenerateMat = function () {
                                            var t = this.GetRenderComponent();
                                            if (null != t && null != this.m_colorFadingEffect) {
                                                var e = new V();
                                                (e.initialize({
                                                    effectAsset: this.m_colorFadingEffect,
                                                    technique: 0,
                                                    defines: { USE_COLOR_FADING: this.m_use_colorfading, USE_ALPHA_TEST: this.m_useAlphaTest },
                                                }),
                                                    (t.customMaterial = e),
                                                    this.LoadTexture());
                                            }
                                        }),
                                        (n.LoadTexture = function () {
                                            if (null == this.m_colorFadingEffect) J("Warning! No effect asset loaded!");
                                            else {
                                                (J("loadTexture", this.m_currGradient), this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1));
                                                for (var t = [], e = 1 / this.m_gradientTextureSize, i = 0; i <= 1; i++)
                                                    for (var n = 0; n <= this.m_gradientTextureSize; n += e) {
                                                        var o = new T();
                                                        ((o = this.m_currGradient.evaluate(n)), t.push(o.r), t.push(o.g), t.push(o.b), t.push(o.a));
                                                    }
                                                this.CreateTexture(t);
                                            }
                                        }),
                                        (n.CreateTexture = function (t) {
                                            var e = new Uint8Array(t),
                                                i = new Q();
                                            (this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1),
                                                i.reset({
                                                    _data: e,
                                                    width: this.m_gradientTextureSize,
                                                    height: 1,
                                                    format: U.PixelFormat.RGBA8888,
                                                    _compressed: !1,
                                                }),
                                                (this.m_tex.image = i),
                                                this.m_tex.setWrapMode(U.WrapMode.CLAMP_TO_EDGE, U.WrapMode.CLAMP_TO_EDGE),
                                                this.UpdateMaterial());
                                        }),
                                        (n.UpdateMaterial = function () {
                                            var t = this.GetRenderComponent();
                                            if (null != t) {
                                                var e = t.customMaterial;
                                                e && (e.setProperty("gradient", this.m_tex), e.setProperty("mixRate", this.m_mixRate));
                                            }
                                        }),
                                        (n.GetRenderComponent = function () {
                                            return (
                                                null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(A)),
                                                null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent($.Skeleton)),
                                                null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(F)),
                                                this.m_renderComponent
                                            );
                                        }),
                                        o(i, [
                                            {
                                                key: "ColorFadingEffect",
                                                get: function () {
                                                    return this.m_copyEffect;
                                                },
                                                set: function (t) {
                                                    (null != t && (this.m_colorFadingEffect = t), (this.m_copyEffect = t));
                                                },
                                            },
                                            {
                                                key: "GradientTextureSize",
                                                get: function () {
                                                    return this.m_gradientTextureSize;
                                                },
                                                set: function (t) {
                                                    ((this.m_gradientTextureSize = t), null != this.m_tex && this.LoadTexture());
                                                },
                                            },
                                            {
                                                key: "UseAlphaTest",
                                                get: function () {
                                                    return this.m_useAlphaTest;
                                                },
                                                set: function (t) {
                                                    this.m_useAlphaTest = t;
                                                },
                                            },
                                            {
                                                key: "MixRate",
                                                get: function () {
                                                    return this.m_mixRate;
                                                },
                                                set: function (t) {
                                                    if (t > 1) this.m_mixRate = 1;
                                                    else if (t < 0) this.m_mixRate = 0;
                                                    else {
                                                        this.m_mixRate = t;
                                                        var e = this.GetRenderComponent();
                                                        if (null != e) {
                                                            var i = e.customMaterial;
                                                            i ? i.setProperty("mixRate", this.m_mixRate) : this.GenerateMat();
                                                        }
                                                    }
                                                },
                                            },
                                            {
                                                key: "CurrentGradient",
                                                get: function () {
                                                    return this.m_currGradient;
                                                },
                                                set: function (t) {
                                                    ((this.m_currGradient = t), this.LoadTexture());
                                                },
                                            },
                                        ]),
                                        i
                                    );
                                })(G)).prototype,
                                "ColorFadingEffect",
                                [li],
                                Object.getOwnPropertyDescriptor(_i.prototype, "ColorFadingEffect"),
                                _i.prototype,
                            ),
                            t(_i.prototype, "GradientTextureSize", [ci], Object.getOwnPropertyDescriptor(_i.prototype, "GradientTextureSize"), _i.prototype),
                            t(_i.prototype, "UseAlphaTest", [ui], Object.getOwnPropertyDescriptor(_i.prototype, "UseAlphaTest"), _i.prototype),
                            t(_i.prototype, "MixRate", [pi], Object.getOwnPropertyDescriptor(_i.prototype, "MixRate"), _i.prototype),
                            t(_i.prototype, "CurrentGradient", [hi], Object.getOwnPropertyDescriptor(_i.prototype, "CurrentGradient"), _i.prototype),
                            (mi = _i)),
                        ) || mi),
                ));
            (v._RF.pop(), v._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", void 0));
            var vi,
                Ei =
                    (0, E.ccclass)(
                        (Si = (function (t) {
                            function i() {
                                for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                                return (((e = t.call.apply(t, [this].concat(n)) || this).m_callback = void 0), e);
                            }
                            (e(i, t),
                                (i.Pack = function (t, e) {
                                    (t.addComponent(i), t.getComponent(i).SetCallback(e));
                                }));
                            var n = i.prototype;
                            return (
                                (n.EvtReciever = function (t) {
                                    (J("AnimEvtReciever: ", t), this.m_callback ? this.m_callback(t) : J("callback沒有設定，無法處理event: ", t));
                                }),
                                (n.triggerAnimationEvent = function (t) {
                                    (J("triggerAnimationEvent: ", t), this.m_callback ? this.m_callback(t) : J("callback沒有設定，無法處理event: ", t));
                                }),
                                (n.SetCallback = function (t) {
                                    this.m_callback = t;
                                }),
                                (n.onDestroy = function () {
                                    this.m_callback = null;
                                }),
                                i
                            );
                        })(G)),
                    ) || Si;
            (v._RF.pop(), v._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", void 0));
            var Ti,
                Oi,
                Ni,
                Bi,
                Ii,
                Li,
                Ri,
                Ai,
                xi,
                ki,
                Fi,
                Pi,
                Mi,
                Di,
                zi,
                Gi,
                Vi,
                Hi,
                Wi = (function (t) {
                    function i() {
                        var e;
                        return (
                            ((e = t.call(this) || this).m_awardBoardFile = i.EFFECT_ROOT + "win/awardBoard"),
                            (e.m_effectList = {}),
                            (e.m_timeLineList = {}),
                            (e.m_winEffCbFunc = null),
                            (e.m_currentWinEffect = null),
                            (e.m_currentWinEffectTimeline = null),
                            (e.m_awardBoard = null),
                            (e.m_awardBoardTimeline = null),
                            (e.m_txtWinValue = null),
                            (e.m_durRollMoneyTick = i.MONEY_ROLL_TIME),
                            (e.m_moneyRealValue = 0),
                            (e.m_moneyRollValue = 0),
                            (e.m_bgMaskNode = null),
                            (e.m_commonGetCoinCbFunc = null),
                            (e.m_commonGetCoinMidCbFunc = null),
                            (e.m_commonGetCoinEff = null),
                            (e.m_commonGetCoinTline = null),
                            (e.m_updateMoneyEff = null),
                            (e.m_updateMoneyTline = null),
                            (e.m_getCoinParticle = null),
                            (e.m_odds = [3, 5, 10, 20, 30]),
                            (e.m_winEffectFiles = [
                                null,
                                null,
                                i.EFFECT_ROOT + i.FILE_PATH.BIG_WIN,
                                i.EFFECT_ROOT + i.FILE_PATH.MEGA_WIN,
                                i.EFFECT_ROOT + i.FILE_PATH.SUPER_WIN,
                            ]),
                            (e.m_coinEffects = [2, 3, 5, 5, 5]),
                            (e.m_coinTimes = [2, 2, 5, 5, 5]),
                            (e.m_soundNameByOdds = []),
                            (e.m_isAutoCheckFloat = !1),
                            (e.m_rotateCoins = {}),
                            (e.m_coinEffectNode = void 0),
                            (e.m_loadedSound = void 0),
                            (e.m_isLandscape = !1),
                            (e.m_LandscapeRate = 1),
                            (e.m_winType = void 0),
                            (e.m_nowPlaySoundID = null),
                            (e.m_loadedSound = !1),
                            e
                        );
                    }
                    e(i, t);
                    var n = i.prototype;
                    return (
                        (n.LoadSound = function () {
                            this.m_loadedSound = !0;
                        }),
                        (n.OnUpdate = function (t) {
                            this.RollWinMoney(t);
                        }),
                        (n.ShowWinAndCoinEffect = function (t, e, i) {
                            (void 0 === i && (i = null), (i = i || null));
                            var n = r.GetManagerId(i);
                            (this.ShowWinEffect(t, n),
                                (void 0 !== t.playCoinAtWinEffect && !0 !== t.playCoinAtWinEffect) || this.playCoinEffect(e, n),
                                r.StartLoad(n));
                        }),
                        (n.ShowWinEffect = function (t, e) {
                            var n = this;
                            void 0 === e && (e = -1);
                            var o = t.effectFile,
                                l = t.winValue,
                                c = t.cbFunc,
                                u = t.yPos,
                                p = t.deltaY,
                                h = t.cbFuncBtoM,
                                m = t.cbFuncMtoS,
                                _ = t.cbFuncPlaying,
                                d = t.isLoop || !1,
                                f = t.rollTime;
                            if (null != l) {
                                var y = function () {
                                        (n.m_bgMaskNode && (n.m_bgMaskNode.active = !0),
                                            J("LoadPrefabManager CB", l),
                                            (u = (null != u && u) || i.DEFAULT_Y),
                                            n.m_effectList[o].setPosition(at(i.DesignSize.width / 2, u)),
                                            (n.m_effectList[o].active = !0),
                                            n.m_timeLineList[o].play(i.ANI_LABEL.ACT),
                                            (n.m_currentWinEffect = n.m_effectList[o]),
                                            (n.m_currentWinEffectTimeline = n.m_timeLineList[o]),
                                            (n.m_currentWinEffectTimeline.name = o),
                                            (p = o == i.FILE_PATH.JACKPOT ? 180 : null != p ? p : 230),
                                            n.m_awardBoard.setPosition(at(i.DesignSize.width / 2, u - p)),
                                            (n.m_awardBoard.active = !0),
                                            n.m_awardBoardTimeline.play(i.ANI_LABEL.ACT),
                                            n.SetWinValue(l, f),
                                            null == _ || _());
                                    },
                                    g = e;
                                (-1 == e && (g = r.GetManagerId(y)),
                                    (this.m_winEffCbFunc = c),
                                    null == this.m_effectList[o]
                                        ? (r.AddLoad(g),
                                          a.GameBundle.load(o, function (t, e) {
                                              if (t) et(t.message || t);
                                              else {
                                                  var a = it(e);
                                                  ((a.active = !1), n.addChild(a), s.SetZIndex(a, i.EFF_ZORDER.WIN_EFFECT));
                                                  var l = a.getComponent(nt);
                                                  (Ei.Pack(a, function (t) {
                                                      if (t == i.ANI_FRAME_EVENT.ENDING)
                                                          n.m_awardBoard && n.m_awardBoard.active && n.m_awardBoardTimeline.play(i.ANI_LABEL.ENDING);
                                                      else if (t == i.ANI_FRAME_EVENT.LOOP) {
                                                          if (d) (l.play(i.ANI_LABEL.LOOP), (l.getState(i.ANI_LABEL.LOOP).wrapMode = ot.WrapMode.Loop));
                                                      } else
                                                          t == i.ANI_FRAME_EVENT.B_TO_M
                                                              ? (n.m_awardBoard &&
                                                                    n.m_awardBoard.active &&
                                                                    rt(n.m_txtWinValue)
                                                                        .by(0.25, { scale: at(1.5, 1.5, 1.5) })
                                                                        .by(0.1, { scale: at(0.9, 0.9, 0.9) })
                                                                        .start(),
                                                                h && h())
                                                              : t == i.ANI_FRAME_EVENT.M_TO_S
                                                                ? (n.m_awardBoard &&
                                                                      n.m_awardBoard.active &&
                                                                      rt(n.m_txtWinValue)
                                                                          .by(0.25, { scale: at(1.5, 1.5, 1.5) })
                                                                          .by(0.1, { scale: at(0.9, 0.9, 0.9) })
                                                                          .start(),
                                                                  null == m || m())
                                                                : t == i.ANI_FRAME_EVENT.END &&
                                                                  (J("ANI_FRAME_EVENT.END"), n.OnAnimationEnd(), n.m_winEffCbFunc && n.m_winEffCbFunc());
                                                  }),
                                                      (a.active = !1),
                                                      (n.m_effectList[o] = a),
                                                      (n.m_timeLineList[o] = l),
                                                      r.OnLoaded(g));
                                              }
                                          }),
                                          null == this.m_awardBoard &&
                                              (r.AddLoad(g),
                                              a.GameBundle.load(this.m_awardBoardFile, function (t, e) {
                                                  t
                                                      ? et(t.message || t)
                                                      : ((n.m_awardBoard = it(e)),
                                                        n.addChild(n.m_awardBoard),
                                                        s.SetZIndex(n.m_awardBoard, i.EFF_ZORDER.AWARD_BOARD),
                                                        (n.m_awardBoard.active = !1),
                                                        (n.m_awardBoardTimeline = n.m_awardBoard.getComponent(nt)),
                                                        (n.m_txtWinValue = n.m_awardBoard.getChildByName("win_value_label")),
                                                        r.OnLoaded(g));
                                              })),
                                          -1 == e ? r.StartLoad(g) : r.AddOnLoadedCallback(g, y))
                                        : -1 == e
                                          ? y()
                                          : r.AddOnLoadedCallback(g, y));
                            } else this.m_awardBoard && ((this.m_awardBoard.active = !1), this.m_awardBoardTimeline.stop());
                        }),
                        (n.WinEffect = function () {
                            this.m_currentWinEffectTimeline && this.m_currentWinEffectTimeline.play(i.ANI_LABEL.ENDING, !1);
                        }),
                        (n.SetWinValue = function (t, e, n) {
                            (void 0 === e && (e = null),
                                void 0 === n && (n = 0),
                                (this.m_moneyRealValue = s.strip(t)),
                                (this.m_moneyRollValue = n),
                                (e = (null == e && i.MONEY_ROLL_TIME) || e),
                                (this.m_durRollMoneyTick = s.strip(e)));
                        }),
                        (n.RollWinMoney = function (t) {
                            if (
                                ((this.m_moneyRealValue = s.strip(this.m_moneyRealValue)),
                                (this.m_moneyRollValue = s.strip(this.m_moneyRollValue)),
                                this.m_moneyRollValue < this.m_moneyRealValue)
                            ) {
                                var e = s.divide(this.m_durRollMoneyTick, s.strip(t)),
                                    i = s.divide(s.strip(this.m_moneyRealValue - this.m_moneyRollValue), e),
                                    n = s.FORMAT_NUMBER_TYPE.DEFINE_DOT;
                                (this.m_isAutoCheckFloat &&
                                    (n =
                                        this.m_moneyRealValue.toString().indexOf(".") > -1
                                            ? s.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                            : s.FORMAT_NUMBER_TYPE.NONE_DOT),
                                    (this.m_moneyRollValue = s.strip(this.m_moneyRollValue + i)),
                                    this.m_moneyRollValue > this.m_moneyRealValue && (this.m_moneyRollValue = this.m_moneyRealValue),
                                    this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, n),
                                    (this.m_durRollMoneyTick = s.strip(this.m_durRollMoneyTick - t)));
                            }
                        }),
                        (n.SetLabelString = function (t, e, i) {
                            void 0 === i && (i = null);
                            var n = t.getComponent(F);
                            if (null != n && null != n) {
                                if (null == i || null == i) n.string = e.toString();
                                else {
                                    var o;
                                    if ("number" == typeof e) o = e;
                                    else {
                                        var r = e.replace(/,/g, "");
                                        o = isNaN(Number(r)) ? 0 : Number(r);
                                    }
                                    n.string = s.FormatNumberThousands(o, i);
                                }
                                s.SetFont(n);
                            } else J("Warning!!!!!!!!!! SetLabelString: ", t);
                        }),
                        (n.SetWinMoneyToMax = function () {}),
                        (n.IsRollMoneyEnd = function () {
                            return this.m_moneyRollValue == this.m_moneyRealValue;
                        }),
                        (n.StopAnimation = function (t) {
                            (this.m_currentWinEffectTimeline && this.m_currentWinEffectTimeline.stop(),
                                this.m_awardBoard && ((this.m_awardBoard.active = !1), this.m_awardBoardTimeline.stop()),
                                1 != t && this.m_winEffCbFunc && this.m_winEffCbFunc(),
                                (this.m_winEffCbFunc = null),
                                this.OnAnimationEnd());
                        }),
                        (n.OnAnimationEnd = function () {
                            (this.m_currentWinEffect && (this.m_currentWinEffect.active = !1),
                                this.m_bgMaskNode && (this.m_bgMaskNode.active = !1),
                                (this.m_moneyRealValue = 0),
                                (this.m_moneyRollValue = 0));
                        }),
                        (n.playCoinEffect = function (t, e) {
                            var n = this;
                            if ((void 0 === e && (e = -1), a.CommonBundle)) {
                                var o = t.level,
                                    l = t.position,
                                    c = t.time;
                                null == c && (c = 0);
                                var u = t.zOrder;
                                null == u && (u = 0);
                                var p = t.parent;
                                this.stopCoinEffectImmly();
                                var h = i.COIN_EFFECT_LIST[o];
                                if ((h = s.GetFilePath(h))) {
                                    J("~~~~~~~~~~~~~~~~~~~~~~", t, c, u);
                                    var m = function () {
                                        (n.m_coinEffectNode.setPosition(at(l.x, l.y)),
                                            null == p || null == p
                                                ? (n.addChild(n.m_coinEffectNode), s.SetZIndex(n.m_coinEffectNode, 0))
                                                : (p.addChild(n.m_coinEffectNode), s.SetZIndex(n.m_coinEffectNode, u)),
                                            0 != c &&
                                                rt(n)
                                                    .delay(c)
                                                    .call(function () {
                                                        n.stopCoinEffect();
                                                    })
                                                    .start());
                                    };
                                    (-1 != e && (r.AddOnLoadedCallback(e, m), r.AddLoad(e)),
                                        a.CommonBundle.load(h, function (t, i) {
                                            (J("LoadRes ", h),
                                                t
                                                    ? et(t.message || t)
                                                    : ((n.m_coinEffectNode = it(i)),
                                                      n.m_coinEffectNode
                                                          ? -1 == e
                                                              ? m()
                                                              : r.OnLoaded(e)
                                                          : J("SlotBottomBarView.playCoinEffect m_coinEffect is null")));
                                        }));
                                }
                            }
                        }),
                        (n.stopCoinEffectImmly = function () {
                            null != this.m_coinEffectNode &&
                                this.m_coinEffectNode.removeFromParent &&
                                (this.m_coinEffectNode.removeFromParent(), (this.m_coinEffectNode = null));
                        }),
                        (n.stopCoinEffect = function () {
                            if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
                                var t = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(st),
                                    e = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(st);
                                (t && t.stopSystem(), e && e.stopSystem());
                            }
                        }),
                        (n.ShowCommonEffect = function (t, e, n, o) {
                            (void 0 === n && (n = null), void 0 === o && (o = null), (n = n || {}), (o = o || {}));
                            var r = new lt(i.DesignSize.width / 2, i.DesignSize.height),
                                a = new lt(i.DesignSize.width / 2 - 10, 145),
                                s = void 0,
                                u = t / e;
                            c && (t = c.GetDisplayValue(t));
                            for (var p = this.m_odds.length - 1; p >= 0; p--)
                                if (u >= this.m_odds[p]) {
                                    ((o.level = this.m_coinEffects[p]),
                                        5 == this.m_coinEffects[p]
                                            ? (o.position = o.position ? o.position : r)
                                            : (o.position = o.smallPosition ? o.smallPosition : o.position ? o.position : a),
                                        (null == o.time || o.time <= 0) && (o.time = this.m_coinTimes[p]),
                                        5 == this.m_coinEffects[p]
                                            ? ((n.effectFile = this.m_winEffectFiles[p]), (n.winValue = t), this.SetWinType(p), this.ShowWinAndCoinEffect(n, o))
                                            : this.playCoinEffect(o),
                                        (s = this.m_soundNameByOdds[p]));
                                    break;
                                }
                            return (null != s && (this.m_nowPlaySoundID = l.Play(s, !1)), null == o.time && (o.time = 0), o.time);
                        }),
                        (n.SkipEffect = function () {
                            if ((this.stopCoinEffect(), ct.instance.ActionManager.removeAllActionsFromTarget(this), this.m_currentWinEffectTimeline)) {
                                var t = this.m_currentWinEffectTimeline.name,
                                    e = s.FORMAT_NUMBER_TYPE.DEFINE_DOT;
                                ((t != i.FILE_PATH.BIG_WIN && t != i.FILE_PATH.MEGA_WIN && t != i.FILE_PATH.SUPER_WIN) ||
                                    ((this.m_moneyRollValue = s.strip(this.m_moneyRollValue)),
                                    (this.m_moneyRealValue = s.strip(this.m_moneyRealValue)),
                                    this.m_moneyRollValue == this.m_moneyRealValue
                                        ? (this.m_awardBoardTimeline.play(i.ANI_LABEL.ENDING), this.m_currentWinEffectTimeline.setCurrentTime(5))
                                        : (this.m_isAutoCheckFloat &&
                                              (e =
                                                  this.m_moneyRealValue.toString().indexOf(".") > -1
                                                      ? s.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                                      : s.FORMAT_NUMBER_TYPE.NONE_DOT),
                                          this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, e),
                                          this.m_currentWinEffectTimeline.setCurrentTime(3.8)),
                                    (this.m_currentWinEffectTimeline = null)),
                                    (this.m_moneyRollValue = this.m_moneyRealValue));
                            }
                        }),
                        (n.SkipEffectSound = function () {
                            this.m_nowPlaySoundID && (l.Stop(this.m_nowPlaySoundID), (this.m_nowPlaySoundID = null));
                        }),
                        (n.SetAutoCheckFloat = function (t) {
                            this.m_isAutoCheckFloat = t;
                        }),
                        (n.SetOdds = function (t) {
                            this.m_odds = t;
                        }),
                        (n.SetWinEffectFiles = function (t) {
                            this.m_winEffectFiles = t;
                        }),
                        (n.SetAwardBoardFile = function (t) {
                            this.m_awardBoardFile = t;
                        }),
                        (n.SetEffectLevels = function (t) {
                            this.m_coinEffects = t;
                        }),
                        (n.SetEffectTimes = function (t) {
                            this.m_coinTimes = t;
                        }),
                        (n.SetSoundNameByOdds = function (t) {
                            this.m_soundNameByOdds = t;
                        }),
                        (n.SetBGMaskNode = function (t) {
                            null != t && (this.m_bgMaskNode = t);
                        }),
                        (n.SetWinTextFontSize = function (t) {
                            this.m_txtWinValue && (this.m_txtWinValue.getComponent(F).fontSize = t);
                        }),
                        (n.SetWinType = function (t) {
                            this.m_winType = t;
                        }),
                        o(i, [
                            {
                                key: "CoinEffectNode",
                                set: function (t) {
                                    this.m_coinEffectNode = t;
                                },
                            },
                        ]),
                        i
                    );
                })(B);
            ((Wi.DesignSize = { width: 1136, height: 640 }),
                (Wi.SOUND_FILE = { COMMON_SUPER_WIN: null, COMMON_MEGA_WIN: null, COMMON_COIN_SMALL: null, COMMON_COIN_MEDIUM: null, COMMON_BIG_WIN: null }),
                (Wi.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/"),
                (Wi.FILE_PATH = {
                    BIG_WIN: "win/big_anim",
                    MEGA_WIN: "win/mega_anim",
                    SUPER_WIN: "win/super_anim",
                    JACKPOT: "win/effect_Jackpot",
                    BIG_TO_MEGA_WIN: "win/bigToMega_anim",
                    BIG_TO_SUPER_WIN: "win/bigToSuper_anim",
                    FIVE_OF_A_KIND: "win/5ofa_anim",
                }),
                (Wi.WIN_EFFECT_SOUND_NAME =
                    (((vi = {})[Wi.FILE_PATH.BIG_WIN] = "Common_big_win"),
                    (vi[Wi.FILE_PATH.MEGA_WIN] = "Common_mega_win"),
                    (vi[Wi.FILE_PATH.SUPER_WIN] = "Common_super_win"),
                    (vi[Wi.FILE_PATH.JACKPOT] = "Common_JP_win"),
                    (vi[Wi.FILE_PATH.BIG_TO_MEGA_WIN] = "Common_big_win"),
                    (vi[Wi.FILE_PATH.BIG_TO_SUPER_WIN] = "Common_big_win"),
                    (vi[Wi.FILE_PATH.FIVE_OF_A_KIND] = "Common_big_win"),
                    vi)),
                (Wi.EffectViewUIName = tt({ TXT_WIN_MONEY: "label_final_value", PARTICLE: "Particle_" })),
                (Wi.DEFAULT_Y = 400),
                (Wi.PARTICLE_AMOUNT_MAX = 2),
                (Wi.MONEY_ROLL_TIME = 3),
                (Wi.UPDATE_MONEY_CSB = Wi.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb"),
                (Wi.COMMON_GET_COIN_CSB = Wi.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb"),
                (Wi.GET_COIN_PARTICLE_CSB = Wi.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist"),
                (Wi.ROTATE_COIN_CSB = Wi.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb"),
                (Wi.TRIAL_COIN_CSB = Wi.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb"),
                (Wi.COIN_APPEAR_PARTICLE_CSB = Wi.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist"),
                (Wi.COMMON_COIN_AMOUNT = 8),
                (Wi.ANI_LABEL = { ACT: "main", LOOP: "loop", ENDING: "ending" }),
                (Wi.ANI_FRAME_EVENT = { MID: "AniMid", B_TO_M: "AniBtoM", M_TO_S: "AniMtoS", ENDING: "AniEnding", END: "AniEnd", LOOP: "AniLoop" }),
                (Wi.EFF_ZORDER = { COIN_FALL: 1, WIN_EFFECT: 2, AWARD_BOARD: 3, COMMON_GET_COIN: 4, GET_TRIAL_COIN: 5 }),
                (Wi.COIN_EFFECT_LIST = {
                    1: Wi.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
                    2: Wi.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
                    3: Wi.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
                    4: Wi.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
                    5: Wi.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
                    6: Wi.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
                    7: Wi.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3",
                }),
                (Wi.WIN_TYPE = { BIG: 2, MEGA: 3, SUPER: 4 }),
                v._RF.pop(),
                v._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", void 0));
            var Ui,
                ji,
                Xi,
                Yi,
                Ki,
                Zi,
                qi,
                Ji,
                Qi,
                $i,
                tn = E.ccclass,
                en = E.property,
                nn = 5,
                on = 0,
                rn = 1;
            ((Ti = en({ type: B, tooltip: "EX 按鈕最頂層節點(整顆node)" })),
                (Oi = en({ type: ut, tooltip: "EX 按鈕" })),
                (Ni = en({ type: ut, tooltip: "按鈕ON" })),
                (Bi = en({ type: ut, tooltip: "按鈕OFF" })),
                (Ii = en({ type: ut, tooltip: "提示問號按鈕" })),
                (Li = en({ type: B, tooltip: "提示文字tip面板" })),
                (Ri = en({ type: F, tooltip: "功能說明文字串Label" })),
                (Ai = en({ type: A, tooltip: "本體ExtraBet文字圖片" })),
                tn(
                    ((Fi = t(
                        (ki = (function (t) {
                            function r() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_multiExtraBetNode", Fi, n(e)),
                                    i(e, "m_multiBtn", Pi, n(e)),
                                    i(e, "m_multiBtn_on", Mi, n(e)),
                                    i(e, "m_multiBtn_off", Di, n(e)),
                                    i(e, "m_multiBtn_TipQuesMark", zi, n(e)),
                                    i(e, "m_multiBtn_Tip", Gi, n(e)),
                                    i(e, "m_multiBtn_Description", Vi, n(e)),
                                    i(e, "m_Txt_Extra_Bet", Hi, n(e)),
                                    (e.m_isExtendShowBar = !1),
                                    (e.m_ExtraBetAniPlaying = null),
                                    (e.m_isExtra = !1),
                                    (e.m_firstShowBarTween = null),
                                    (e.m_isFirstShowed = !1),
                                    (e.m_usedForce = !1),
                                    (e.m_isForceExtraOnEnd = !1),
                                    (e.m_isTwoStep = !1),
                                    (e.m_toStepTwo = !1),
                                    (e.m_triggerCb = null),
                                    (e.m_canExtend = !0),
                                    e
                                );
                            }
                            e(r, t);
                            var w = r.prototype;
                            return (
                                (w.Init = function (t, e, i, n, o) {
                                    var r = this;
                                    if ((void 0 === n && (n = !1), void 0 === o && (o = !1), s.CheckSwitchOff(u.CloseExtraBet)))
                                        return (
                                            (this.node.active = !1),
                                            void this.node.on(D.ACTIVE_IN_HIERARCHY_CHANGED, function () {
                                                r.node.active = !1;
                                            })
                                        );
                                    ((this.m_triggerCb = t),
                                        (this.m_isTwoStep = n),
                                        this.m_multiBtn_Description &&
                                            this.m_Txt_Extra_Bet &&
                                            (J(" localeStringManager.CurrLang : " + p.CurrLang),
                                            (this.m_multiBtn_Description.string = p.GetString(e)),
                                            (this.m_Txt_Extra_Bet.spriteFrame = p.GetGameAtlas().getSpriteFrame(i))),
                                        h.Init(o ? null : this.node, this.ForceSetExtraBet.bind(this)));
                                }),
                                (w.onLoad = function () {
                                    var t = this;
                                    if (!s.CheckSwitchOff(u.CloseExtraBet)) {
                                        (J("ExtraBet onLoad"),
                                            this.m_multiBtn &&
                                                this.m_multiBtn.node.on(B.EventType.TOUCH_END, function () {
                                                    t.m_ExtraBetAniPlaying ||
                                                        (l.Play(a.AudioClips.COMMON_BTN),
                                                        t.CheckCanUseBtn()
                                                            ? t.ExtendShowBar(!t.m_isExtendShowBar)
                                                            : m.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1));
                                                }));
                                        for (var e = 0; e < this.m_multiBtn_on.length; e++)
                                            (this.m_multiBtn_on[e].node.on(B.EventType.TOUCH_END, function () {
                                                t.m_ExtraBetAniPlaying ||
                                                    (t.CheckCanUseBtn() ? t.ChangeBetMode() : m.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1));
                                            }),
                                                this.m_multiBtn_off[e] &&
                                                    this.m_multiBtn_off[e].node.on(B.EventType.TOUCH_END, function () {
                                                        t.m_ExtraBetAniPlaying || (l.Play(a.AudioClips.COMMON_BTN), t.CheckCanUseBtn() && t.ChangeBetMode());
                                                    }));
                                        (this.m_multiBtn_TipQuesMark &&
                                            this.m_multiBtn_TipQuesMark.node.on(
                                                B.EventType.TOUCH_END,
                                                _(
                                                    S().mark(function e() {
                                                        return S().wrap(function (e) {
                                                            for (;;)
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        if (t.m_ExtraBetAniPlaying) {
                                                                            e.next = 13;
                                                                            break;
                                                                        }
                                                                        if ((l.Play(a.AudioClips.COMMON_BTN), d.Current() != f.IDLE || y.IsBuyBonus)) {
                                                                            e.next = 12;
                                                                            break;
                                                                        }
                                                                        if (!t.m_isExtendShowBar) {
                                                                            e.next = 7;
                                                                            break;
                                                                        }
                                                                        ((t.m_multiBtn_Tip.active = !t.m_multiBtn_Tip.active), (e.next = 10));
                                                                        break;
                                                                    case 7:
                                                                        return ((e.next = 9), t.ExtendShowBar(!0));
                                                                    case 9:
                                                                        !t.m_multiBtn_Tip.active && t.m_isExtendShowBar && (t.m_multiBtn_Tip.active = !0);
                                                                    case 10:
                                                                        e.next = 13;
                                                                        break;
                                                                    case 12:
                                                                        m.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1);
                                                                    case 13:
                                                                    case "end":
                                                                        return e.stop();
                                                                }
                                                        }, e);
                                                    }),
                                                ),
                                            ),
                                            this.ExtendShowBar(!1));
                                    }
                                }),
                                (w.start = function () {
                                    J("ExtraBet start");
                                }),
                                (w.CheckCanUseBtn = function () {
                                    return (
                                        a.IsInMG() &&
                                        d.Current() == f.IDLE &&
                                        !a.IsUsingItem &&
                                        !y.IsBuyBonus &&
                                        !g.IsFeaturesDemoMode &&
                                        !s.CheckSwitchOff(u.CloseExtraBet)
                                    );
                                }),
                                (w.OnSpin = function () {
                                    this.ExtendShowBar(!1);
                                }),
                                (w.ShowExtra = function (t) {
                                    this.m_multiExtraBetNode && !s.CheckSwitchOff(u.CloseExtraBet) && (this.m_multiExtraBetNode.active = t);
                                }),
                                (w.GoToFeatures = function () {}),
                                (w.ExtendShowBar = (function () {
                                    var t = _(
                                        S().mark(function t(e) {
                                            var i;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (this.m_canExtend && !s.CheckSwitchOff(u.CloseExtraBet)) {
                                                                    t.next = 2;
                                                                    break;
                                                                }
                                                                return t.abrupt("return");
                                                            case 2:
                                                                if (!c || this.m_ExtraBetAniPlaying) {
                                                                    t.next = 32;
                                                                    break;
                                                                }
                                                                if (!e) {
                                                                    t.next = 20;
                                                                    break;
                                                                }
                                                                if (c.IsAutoSpin || a.IsUsingItem || y.IsBuyBonus) {
                                                                    t.next = 17;
                                                                    break;
                                                                }
                                                                if (this.m_isExtendShowBar) {
                                                                    t.next = 15;
                                                                    break;
                                                                }
                                                                if (
                                                                    ((this.m_isExtendShowBar = !0),
                                                                    c.SetSpinState(b.CLICK_SPIN),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    !this.m_multiExtraBetNode)
                                                                ) {
                                                                    t.next = 12;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 12),
                                                                    this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_Show")
                                                                );
                                                            case 12:
                                                                ((this.m_ExtraBetAniPlaying = !1),
                                                                    c.SetSpinState(b.IDLE),
                                                                    this.m_isExtra &&
                                                                        this.m_multiExtraBetNode &&
                                                                        this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_Active"));
                                                            case 15:
                                                                t.next = 18;
                                                                break;
                                                            case 17:
                                                                m.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1);
                                                            case 18:
                                                                t.next = 32;
                                                                break;
                                                            case 20:
                                                                if (!this.m_isExtendShowBar) {
                                                                    t.next = 32;
                                                                    break;
                                                                }
                                                                if (
                                                                    (null !== this.m_firstShowBarTween &&
                                                                        (this.m_firstShowBarTween.stop(), (this.m_firstShowBarTween = null)),
                                                                    c.IsAutoSpin || c.SetSpinState(b.CLICK_SPIN),
                                                                    this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = !1),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    !this.m_multiExtraBetNode)
                                                                ) {
                                                                    t.next = 28;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 28),
                                                                    this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_Close")
                                                                );
                                                            case 28:
                                                                ((this.m_ExtraBetAniPlaying = !1),
                                                                    c.IsAutoSpin || c.SetSpinState(b.IDLE),
                                                                    this.m_multiExtraBetNode &&
                                                                        (this.m_isExtra
                                                                            ? this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_Active")
                                                                            : (this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_OFF"),
                                                                              (i = this.m_multiExtraBetNode.getComponent(nt).getState("ExtraBet_OFF")).setTime(
                                                                                  i.duration,
                                                                              ))),
                                                                    (this.m_isExtendShowBar = !1));
                                                            case 32:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function (e) {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (w.ChangeBetMode = (function () {
                                    var t = _(
                                        S().mark(function t() {
                                            var e;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (!s.CheckSwitchOff(u.CloseExtraBet)) {
                                                                    t.next = 2;
                                                                    break;
                                                                }
                                                                return t.abrupt("return");
                                                            case 2:
                                                                if (
                                                                    (J("ChangeBetMode stateManager.Current() : ", d.Current()),
                                                                    !c || y.IsBuyBonus || (d.Current() !== f.IDLE && !this.m_isExtra))
                                                                ) {
                                                                    t.next = 38;
                                                                    break;
                                                                }
                                                                if (((this.m_isExtra = !this.m_isExtra), (e = []), !this.m_isExtra)) {
                                                                    t.next = 26;
                                                                    break;
                                                                }
                                                                return (
                                                                    null !== this.m_firstShowBarTween &&
                                                                        (this.m_firstShowBarTween.stop(), (this.m_firstShowBarTween = null)),
                                                                    (this.m_multiBtn_Tip.active = !1),
                                                                    this.m_isTwoStep ? (this.m_toStepTwo = !0) : c.ChangeMultiBet(rn),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !0), (this.m_multiBtn_off[0].node.active = !1)),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    null == c || c.SetSpinState(b.CLICK_SPIN),
                                                                    null == g || g.SetBuyBonusState(!1),
                                                                    this.m_multiExtraBetNode &&
                                                                        e.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_ON")),
                                                                    e.push(this.m_triggerCb(this.m_isExtra, !1)),
                                                                    (t.next = 18),
                                                                    Promise.all(e)
                                                                );
                                                            case 18:
                                                                return (
                                                                    (this.m_ExtraBetAniPlaying = !1),
                                                                    null == c || c.SetSpinState(b.IDLE),
                                                                    this.m_multiExtraBetNode &&
                                                                        this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_Active"),
                                                                    (t.next = 23),
                                                                    a.Wait(this, 0.2)
                                                                );
                                                            case 23:
                                                                (null == g || g.SetBuyBonusState(!0), (t.next = 36));
                                                                break;
                                                            case 26:
                                                                return (
                                                                    c.ChangeMultiBet(on),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !1), (this.m_multiBtn_off[0].node.active = !0)),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    null == c || c.SetSpinState(b.CLICK_SPIN),
                                                                    this.m_multiExtraBetNode &&
                                                                        e.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_OFF")),
                                                                    e.push(this.m_triggerCb(this.m_isExtra, !1)),
                                                                    (t.next = 34),
                                                                    Promise.all(e)
                                                                );
                                                            case 34:
                                                                ((this.m_ExtraBetAniPlaying = !1), null == c || c.SetSpinState(b.IDLE));
                                                            case 36:
                                                                t.next = 39;
                                                                break;
                                                            case 38:
                                                                d.Current() !== f.IDLE &&
                                                                    (J("TRIAL_REFUSED_REASON 1 "), m.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1));
                                                            case 39:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (w.SetTwoStepMulti = (function () {
                                    var t = _(
                                        S().mark(function t(e, i) {
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (!s.CheckSwitchOff(u.CloseExtraBet)) {
                                                                    t.next = 2;
                                                                    break;
                                                                }
                                                                return t.abrupt("return");
                                                            case 2:
                                                                if (!this.m_isTwoStep || !this.m_toStepTwo) {
                                                                    t.next = 15;
                                                                    break;
                                                                }
                                                                if (!e) {
                                                                    t.next = 7;
                                                                    break;
                                                                }
                                                                (c.ChangeMultiBet(i), (t.next = 15));
                                                                break;
                                                            case 7:
                                                                if (
                                                                    ((this.m_isExtra = !1),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !1), (this.m_multiBtn_off[0].node.active = !0)),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    c && c.SetSpinState(b.CLICK_SPIN),
                                                                    !this.m_multiExtraBetNode)
                                                                ) {
                                                                    t.next = 14;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 14),
                                                                    this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_OFF")
                                                                );
                                                            case 14:
                                                                this.m_ExtraBetAniPlaying = !1;
                                                            case 15:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function (e, i) {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (w.ForceSetExtraBet = (function () {
                                    var t = _(
                                        S().mark(function t(e, i) {
                                            var n;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if ((void 0 === i && (i = rn), !s.CheckSwitchOff(u.CloseExtraBet))) {
                                                                    t.next = 3;
                                                                    break;
                                                                }
                                                                return t.abrupt("return");
                                                            case 3:
                                                                if (((this.m_usedForce = !0), !e)) {
                                                                    t.next = 15;
                                                                    break;
                                                                }
                                                                return (
                                                                    (this.m_isForceExtraOnEnd = !1),
                                                                    (this.m_isExtra = !0),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !0), (this.m_multiBtn_off[0].node.active = !1)),
                                                                    this.m_multiExtraBetNode &&
                                                                        this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_Active"),
                                                                    this.m_isTwoStep
                                                                        ? ((this.m_toStepTwo = !0), this.SetTwoStepMulti(e, i))
                                                                        : c.ChangeMultiBet(i),
                                                                    (t.next = 12),
                                                                    this.m_triggerCb(e, !0)
                                                                );
                                                            case 12:
                                                                ((this.m_isForceExtraOnEnd = !0), (t.next = 24));
                                                                break;
                                                            case 15:
                                                                if (!this.m_isExtra) {
                                                                    t.next = 24;
                                                                    break;
                                                                }
                                                                return (
                                                                    (n = []),
                                                                    (this.m_isExtra = !1),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !1), (this.m_multiBtn_off[0].node.active = !0)),
                                                                    c.ChangeMultiBet(on),
                                                                    this.m_multiExtraBetNode &&
                                                                        (this.m_isExtendShowBar
                                                                            ? n.push(this.ExtendShowBar(!1))
                                                                            : n.push(
                                                                                  this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_OFF"),
                                                                              )),
                                                                    n.push(this.m_triggerCb(e, !0)),
                                                                    (t.next = 24),
                                                                    Promise.all(n)
                                                                );
                                                            case 24:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function (e, i) {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (w.OnRotation = function () {
                                    s.CheckSwitchOff(u.CloseExtraBet) ||
                                        (this.m_multiExtraBetNode &&
                                            (this.m_isExtra
                                                ? this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_Active")
                                                : this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_Stop")),
                                        this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = !1));
                                }),
                                (w.IsExAnimationTouchable = function () {
                                    return !this.m_ExtraBetAniPlaying;
                                }),
                                (w.FirstShowBar = (function () {
                                    var t = _(
                                        S().mark(function t() {
                                            var e = this;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (this.m_isFirstShowed || this.m_usedForce || s.CheckSwitchOff(u.CloseExtraBet)) {
                                                                    t.next = 6;
                                                                    break;
                                                                }
                                                                return ((this.m_isFirstShowed = !0), (t.next = 4), this.ExtendShowBar(!0));
                                                            case 4:
                                                                ((this.m_multiBtn_Tip.active = !0),
                                                                    (this.m_firstShowBarTween = rt(this.node)
                                                                        .delay(nn)
                                                                        .call(function () {
                                                                            e.ExtendShowBar(!1);
                                                                        })
                                                                        .start()));
                                                            case 6:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (w.PlayAnimation = function (t, e, i) {
                                    return (
                                        void 0 === i && (i = !1),
                                        new Promise(function (n) {
                                            if ((t.play(e), i)) {
                                                var o = t.getState(e);
                                                o && (o.wrapMode = ot.WrapMode.Loop);
                                            }
                                            t.once(nt.EventType.FINISHED, function () {
                                                n(!0);
                                            });
                                        })
                                    );
                                }),
                                o(r, [
                                    {
                                        key: "ExtraBetAniPlaying",
                                        set: function (t) {
                                            this.m_ExtraBetAniPlaying = t;
                                        },
                                    },
                                    {
                                        key: "IsExtra",
                                        get: function () {
                                            return this.m_isExtra;
                                        },
                                    },
                                    {
                                        key: "IsForceExtraOnEnd",
                                        get: function () {
                                            return this.m_isForceExtraOnEnd;
                                        },
                                    },
                                    {
                                        key: "CanExtend",
                                        set: function (t) {
                                            this.m_canExtend = t;
                                        },
                                    },
                                ]),
                                r
                            );
                        })(G)).prototype,
                        "m_multiExtraBetNode",
                        [Ti],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (Pi = t(ki.prototype, "m_multiBtn", [Oi], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Mi = t(ki.prototype, "m_multiBtn_on", [Ni], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Di = t(ki.prototype, "m_multiBtn_off", [Bi], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (zi = t(ki.prototype, "m_multiBtn_TipQuesMark", [Ii], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Gi = t(ki.prototype, "m_multiBtn_Tip", [Li], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Vi = t(ki.prototype, "m_multiBtn_Description", [Ri], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Hi = t(ki.prototype, "m_Txt_Extra_Bet", [Ai], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (xi = ki)),
                ));
            (v._RF.pop(), v._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", void 0));
            var an,
                sn,
                ln,
                cn = E.ccclass,
                un = E.property;
            ((Ui = un({ type: A, tooltip: "說明文字" })),
                (ji = un({ type: pt, tooltip: "圖片名稱" })),
                (Xi = un({ type: Boolean, tooltip: "圖片名稱" })),
                (Yi = un({ type: A, tooltip: "圖片名稱" })),
                cn(
                    ((qi = t(
                        (Zi = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_hintSprite", qi, n(e)),
                                    i(e, "m_imgName", Ji, n(e)),
                                    i(e, "m_isAD", Qi, n(e)),
                                    i(e, "m_ADsprite", $i, n(e)),
                                    e
                                );
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.start = function () {
                                    var t = this;
                                    if (!this.m_isAD) {
                                        var e = p.GetGameAtlas();
                                        e
                                            ? (this.m_hintSprite.spriteFrame = e.getSpriteFrame(this.m_imgName))
                                            : p.RegisterOnGameAltasLoadedCb(function () {
                                                  t.m_hintSprite.spriteFrame = p.GetGameAtlas().getSpriteFrame(t.m_imgName);
                                              });
                                    }
                                }),
                                (r.SetADSprites = function (t) {
                                    this.m_ADsprite && (this.m_ADsprite.spriteFrame = t);
                                }),
                                o
                            );
                        })(G)).prototype,
                        "m_hintSprite",
                        [Ui],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (Ji = t(Zi.prototype, "m_imgName", [ji], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (Qi = t(Zi.prototype, "m_isAD", [Xi], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    ($i = t(Zi.prototype, "m_ADsprite", [Yi], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Ki = Zi)),
                ));
            (v._RF.pop(), v._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", void 0));
            var pn,
                hn,
                mn,
                _n,
                dn,
                fn,
                yn,
                gn,
                Sn,
                bn,
                wn,
                Cn,
                vn,
                En = E.ccclass,
                Tn = E.property,
                On = E.executeInEditMode,
                Nn = E.requireComponent;
            En("LabelSpacingX")(
                (an =
                    Nn(F)(
                        (an =
                            On(
                                ((ln = t(
                                    (sn = (function (t) {
                                        function r() {
                                            for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                            return ((e = t.call.apply(t, [this].concat(r)) || this), i(e, "_spacingX", ln, n(e)), e);
                                        }
                                        e(r, t);
                                        var a = r.prototype;
                                        return (
                                            (a.onEnable = function () {
                                                this.resetSpacingX();
                                            }),
                                            (a.resetSpacingX = function () {
                                                var t = this.node.getComponent(F);
                                                t && t.cacheMode === F.CacheMode.CHAR && (t.spacingX = this._spacingX);
                                            }),
                                            o(r, [
                                                {
                                                    key: "spacingX",
                                                    get: function () {
                                                        return this._spacingX;
                                                    },
                                                    set: function (t) {
                                                        ((this._spacingX = t), this.resetSpacingX());
                                                    },
                                                },
                                            ]),
                                            r
                                        );
                                    })(G)).prototype,
                                    "_spacingX",
                                    [Tn],
                                    {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    },
                                )),
                                t(sn.prototype, "spacingX", [Tn], Object.getOwnPropertyDescriptor(sn.prototype, "spacingX"), sn.prototype),
                                (an = sn)),
                            ) || an),
                    ) || an),
            );
            (v._RF.pop(), v._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", void 0));
            var Bn,
                In = E.ccclass,
                Ln = E.executeInEditMode,
                Rn = E.property,
                An = "db://assets/game/Text/en/",
                xn = "db://assets/otherAsttText/AsttText/en/";
            !(function (t) {
                ((t[(t.PNG = 0)] = "PNG"), (t[(t.JPG = 1)] = "JPG"));
            })(Bn || (Bn = {}));
            var kn,
                Fn,
                Pn,
                Mn,
                Dn,
                zn = { PNG: ".png", JPG: ".jpg" };
            ((pn = In("LangImg")),
                (hn = Rn({ type: pt, tooltip: "圖片路徑" })),
                (mn = Rn({ type: pt, tooltip: "額外路徑，如果不是在game/Text/en/或otherAsttText/AsttText/en/下，請填入後續路徑" })),
                (_n = Rn({ type: tt(Bn), tooltip: "圖片類型" })),
                (dn = Rn({ type: Z, tooltip: "是否為通用圖片" })),
                (fn = Rn({ type: Z, tooltip: "是否由這個組件來設定多語系圖片" })),
                pn(
                    (yn =
                        Ln(
                            ((Sn = t(
                                (gn = (function (t) {
                                    function o() {
                                        for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                        return (
                                            (e = t.call.apply(t, [this].concat(r)) || this),
                                            i(e, "m_path", Sn, n(e)),
                                            i(e, "m_extraPath", bn, n(e)),
                                            i(e, "m_imgTypeNo", wn, n(e)),
                                            i(e, "m_isCommon", Cn, n(e)),
                                            i(e, "m_isUsingSetImage", vn, n(e)),
                                            e
                                        );
                                    }
                                    e(o, t);
                                    var r = o.prototype;
                                    return (
                                        (r.start = function () {
                                            this.SetImg();
                                        }),
                                        (r.SetImg = function () {
                                            var t = this;
                                            if (this.m_isUsingSetImage) {
                                                var e = null;
                                                if (this.m_isCommon) {
                                                    if (!(e = p.GetCommonAtlas()))
                                                        return void p.RegisterOnCommonAltasLoadedCb(function () {
                                                            t.SetImg();
                                                        });
                                                } else if (!(e = p.GetGameAtlas()))
                                                    return void p.RegisterOnGameAltasLoadedCb(function () {
                                                        t.SetImg();
                                                    });
                                                var i = this.node.getComponent(A);
                                                (i || (i = this.node.addComponent(A)), (i.spriteFrame = e.getSpriteFrame(this.m_path)));
                                            }
                                        }),
                                        (r.SetPreviewImg = function () {
                                            (this.AdjustComponentOrdering(),
                                                this.ReadSpriteFrame(),
                                                (o.prototype._onBeforeSerialize = function () {
                                                    return (this.OnBeforeSerialize(), !1);
                                                }));
                                        }),
                                        (r.AdjustComponentOrdering = function () {}),
                                        (r.ReadSpriteFrame = (function () {
                                            var t = _(
                                                S().mark(function t() {
                                                    var e,
                                                        i,
                                                        n,
                                                        o,
                                                        r,
                                                        a,
                                                        s = this;
                                                    return S().wrap(
                                                        function (t) {
                                                            for (;;)
                                                                switch ((t.prev = t.next)) {
                                                                    case 0:
                                                                        if (this.m_path) {
                                                                            t.next = 2;
                                                                            break;
                                                                        }
                                                                        return t.abrupt("return");
                                                                    case 2:
                                                                        return (
                                                                            (e = (this.m_isCommon ? xn : An) + this.m_extraPath + this.m_path),
                                                                            (i = zn.PNG),
                                                                            (n = Bn[this.m_imgTypeNo]),
                                                                            Object.prototype.hasOwnProperty.call(Bn, n) &&
                                                                                ((o = Bn[n]), Number(o) === this.m_imgTypeNo && (i = zn[n])),
                                                                            (t.next = 8),
                                                                            Editor.Message.request("asset-db", "query-assets", {
                                                                                importer: "sprite-frame",
                                                                                pattern: e + i,
                                                                            })
                                                                        );
                                                                    case 8:
                                                                        ((r = t.sent),
                                                                            (a = { uuid: r[0].uuid }),
                                                                            k.loadAny(a, function (t, e) {
                                                                                if (t) et("Failed to load cc.SpriteFrame resources:", t);
                                                                                else {
                                                                                    var i = s.node.getComponent(A);
                                                                                    (i || (i = s.node.addComponent(A)), (i.spriteFrame = e));
                                                                                }
                                                                            }));
                                                                    case 11:
                                                                    case "end":
                                                                        return t.stop();
                                                                }
                                                        },
                                                        t,
                                                        this,
                                                    );
                                                }),
                                            );
                                            return function () {
                                                return t.apply(this, arguments);
                                            };
                                        })()),
                                        (r.OnBeforeSerialize = function () {}),
                                        o
                                    );
                                })(G)).prototype,
                                "m_path",
                                [hn],
                                {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                    initializer: function () {
                                        return "";
                                    },
                                },
                            )),
                            (bn = t(gn.prototype, "m_extraPath", [mn], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            (wn = t(gn.prototype, "m_imgTypeNo", [_n], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return Bn.PNG;
                                },
                            })),
                            (Cn = t(gn.prototype, "m_isCommon", [dn], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (vn = t(gn.prototype, "m_isUsingSetImage", [fn], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (yn = gn)),
                        ) || yn),
                ));
            (v._RF.pop(), v._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", void 0));
            var Gn,
                Vn,
                Hn,
                Wn,
                Un,
                jn = 0,
                Xn = 1,
                Yn = 2,
                Kn = E.ccclass,
                Zn = E.property;
            ((kn = Kn("RenderDataBump")),
                (Fn = Zn({ tooltip: "是否一同影響子節點" })),
                kn(
                    ((Dn = t(
                        (Mn = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return ((e = t.call.apply(t, [this].concat(r)) || this), i(e, "affectsChildren", Dn, n(e)), (e.states = jn), e);
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.onLoad = function () {
                                    this.node.on(B.EventType.PARENT_CHANGED, this.checkStates, this);
                                }),
                                (r.onDestroy = function () {
                                    this.node.off(B.EventType.PARENT_CHANGED, this.checkStates, this);
                                }),
                                (r.checkStates = function () {
                                    this.node.parent
                                        ? this.states === Xn && this.requestRenderData()
                                        : (this.states !== Yn && this.states !== jn) || this.destroyRenderData();
                                }),
                                (r.destroyRenderData = function () {
                                    var t = this.node.getComponent(M);
                                    if ((null == t || t.destroyRenderData(), this.affectsChildren))
                                        for (var e, i = this.node.getComponentsInChildren(M), n = w(i); !(e = n()).done; ) {
                                            var o = e.value;
                                            null == o || o.destroyRenderData();
                                        }
                                    this.states = Xn;
                                }),
                                (r.requestRenderData = function () {
                                    var t = this.node.getComponent(M);
                                    if ((null == t || t._flushAssembler(), this.affectsChildren))
                                        for (var e, i = this.node.getComponentsInChildren(M), n = w(i); !(e = n()).done; ) {
                                            var o = e.value;
                                            null == o || o._flushAssembler();
                                        }
                                    this.states = Yn;
                                }),
                                o
                            );
                        })(G)).prototype,
                        "affectsChildren",
                        [Fn],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        },
                    )),
                    (Pn = Mn)),
                ));
            (v._RF.pop(), v._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", void 0));
            var qn,
                Jn,
                Qn,
                $n,
                to = E.ccclass,
                eo = E.property;
            ((Gn = to("ScrollEventHandler")),
                (Vn = eo({ type: B, tooltip: "真實放置內容的節點，有自行分層請把每一層的根節點放進去" })),
                Gn(
                    ((Un = t(
                        (Wn = (function (t) {
                            function r() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_contents", Un, n(e)),
                                    (e.m_scrollView = null),
                                    (e.m_redundantSpace_Y = 0),
                                    e
                                );
                            }
                            e(r, t);
                            var a = r.prototype;
                            return (
                                (a.start = function () {
                                    var t = this;
                                    ((this.m_scrollView = this.node.getComponent(ht)),
                                        this.m_scrollView
                                            ? this.m_scrollView.node.on(ht.EventType.SCROLLING, function () {
                                                  t.CheckCellVisible();
                                              })
                                            : et("ScrollView is null"),
                                        0 === this.m_contents.length && this.m_contents.push(this.m_scrollView.content));
                                }),
                                (a.CheckCellVisible = function () {
                                    if (this.m_scrollView && this.m_scrollView.view)
                                        for (var t = 0; t < this.m_contents.length; t++)
                                            for (
                                                var e = this.m_contents[t].children,
                                                    i = this.GetTopLeftWorld(this.m_scrollView.view.node),
                                                    n = this.GetBottomRightWorld(this.m_scrollView.view.node),
                                                    o = 0;
                                                o < e.length;
                                                o++
                                            ) {
                                                var r = e[o],
                                                    a = r.getComponent(mt);
                                                a || (a = r.addComponent(mt));
                                                var s = this.GetTopLeftWorld(r),
                                                    l = this.GetBottomRightWorld(r);
                                                this.IsInside(s, i, n) || this.IsInside(l, i, n) ? (a.opacity = 255) : (a.opacity = 0);
                                            }
                                }),
                                (a.GetTopLeftWorld = function (t) {
                                    var e = t.getPosition(),
                                        i = t.getComponent(N).contentSize,
                                        n = t.getComponent(N).anchorPoint,
                                        o = new R(e.x - i.width * n.x, e.y - i.height * n.y, e.z);
                                    return t.parent.getComponent(N).convertToWorldSpaceAR(o);
                                }),
                                (a.GetBottomRightWorld = function (t) {
                                    var e = t.getPosition(),
                                        i = t.getComponent(N).contentSize,
                                        n = t.getComponent(N).anchorPoint,
                                        o = new R(e.x + i.width * (1 - n.x), e.y + i.height * (1 - n.y), e.z);
                                    return t.parent.getComponent(N).convertToWorldSpaceAR(o);
                                }),
                                (a.IsInside = function (t, e, i) {
                                    return t.x >= e.x && t.y >= e.y - this.m_redundantSpace_Y && t.x <= i.x && t.y <= i.y + this.m_redundantSpace_Y;
                                }),
                                o(r, [
                                    {
                                        key: "RedundantSpace_Y",
                                        set: function (t) {
                                            this.m_redundantSpace_Y = t;
                                        },
                                    },
                                ]),
                                r
                            );
                        })(G)).prototype,
                        "m_contents",
                        [Vn],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return [];
                            },
                        },
                    )),
                    (Hn = Wn)),
                ));
            (v._RF.pop(), v._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", void 0));
            var io,
                no,
                oo,
                ro,
                ao,
                so,
                lo,
                co,
                uo,
                po,
                ho,
                mo,
                _o,
                fo,
                yo,
                go,
                So,
                bo,
                wo,
                Co,
                vo,
                Eo,
                To,
                Oo,
                No,
                Bo,
                Io,
                Lo,
                Ro,
                Ao,
                xo,
                ko,
                Fo,
                Po,
                Mo,
                Do = "GameIntro_L",
                zo = "GameIntro_S",
                Go = "FG_Declare_Start_L",
                Vo = "FG_Declare_Start_S",
                Ho = "FG_Compliment_Start_L",
                Wo = "FG_Compliment_Start_S",
                Uo = E.ccclass;
            ((qn = (0, E.property)({ type: $.Skeleton, tooltip: "spine" })),
                Uo(
                    (($n = t(
                        (Qn = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return ((e = t.call.apply(t, [this].concat(r)) || this), i(e, "m_spine", $n, n(e)), e);
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.ShowGameIntro = (function () {
                                    var t = _(
                                        S().mark(function t(e, i) {
                                            var n, o;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = e ? Do : zo),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.paused = !1),
                                                                    (o = function (t) {
                                                                        "AnimationEvent" === t && (null == i || i());
                                                                    }),
                                                                    (t.next = 6),
                                                                    C.PlayAnimation(this.m_spine, n, !1, 0, o)
                                                                );
                                                            case 6:
                                                                this.node.active = !1;
                                                            case 7:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function (e, i) {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (r.ShowFGDeclare = (function () {
                                    var t = _(
                                        S().mark(function t(e, i) {
                                            var n, o;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = e ? Go : Vo),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.paused = !1),
                                                                    (o = function (t) {
                                                                        "AnimationEvent" === t && (null == i || i());
                                                                    }),
                                                                    (t.next = 6),
                                                                    C.PlayAnimation(this.m_spine, n, !1, 0, o)
                                                                );
                                                            case 6:
                                                                this.node.active = !1;
                                                            case 7:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function (e, i) {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (r.ShowFGCompliment = (function () {
                                    var t = _(
                                        S().mark(function t(e, i) {
                                            var n, o;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = e ? Ho : Wo),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.paused = !1),
                                                                    (o = function (t) {
                                                                        "AnimationEvent" === t && (null == i || i());
                                                                    }),
                                                                    (t.next = 6),
                                                                    C.PlayAnimation(this.m_spine, n, !1, 0, o)
                                                                );
                                                            case 6:
                                                                this.node.active = !1;
                                                            case 7:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function (e, i) {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (r.Prepare = function (t) {
                                    ((this.node.active = !0),
                                        (this.m_spine.paused = !1),
                                        this.m_spine.clearTracks(),
                                        this.m_spine.setToSetupPose(),
                                        C.PlayAnimation(this.m_spine, t ? Do : zo),
                                        (this.m_spine.paused = !0));
                                }),
                                (r.Rotation = function (t) {
                                    if (this.node.active) {
                                        var e = t ? Do : zo;
                                        ((this.m_spine.paused = !1),
                                            this.m_spine.clearTracks(),
                                            this.m_spine.setToSetupPose(),
                                            C.PlayAnimation(this.m_spine, e),
                                            (this.m_spine.paused = !0));
                                    }
                                }),
                                o
                            );
                        })(G)).prototype,
                        "m_spine",
                        [qn],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (Jn = Qn)),
                ));
            (v._RF.pop(), v._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", void 0));
            var jo = E.ccclass,
                Xo = E.property,
                Yo = E.menu,
                Ko = { None: 0 },
                Zo = tt(Ko),
                qo = 3.1415927,
                Jo = qo / 180;
            function Qo(t, e, i, n, o) {
                var r,
                    a = ((r = o), Math.sin(r * Jo)),
                    s = (function (t) {
                        return Math.cos(t * Jo);
                    })(o);
                return 57.29577866666166 * Math.atan2(s * i + a * n, s * t + a * e);
            }
            var $o,
                tr,
                er,
                ir,
                nr,
                or,
                rr,
                ar,
                sr,
                lr,
                cr,
                ur,
                pr,
                hr,
                mr,
                _r,
                dr,
                fr,
                yr,
                gr,
                Sr,
                br,
                wr,
                Cr,
                vr,
                Er,
                Tr,
                Or,
                Nr,
                Br,
                Ir,
                Lr,
                Rr,
                Ar,
                xr,
                kr,
                Fr,
                Pr,
                Mr,
                Dr;
            ((io = jo("BoneFollow")),
                (no = Yo("Chiron/Spine/BoneFollow")),
                (oo = Xo({ type: $.Skeleton, tooltip: "目標 Spine 骨架" })),
                (ro = Xo({ tooltip: "目標同步骨骼名稱" })),
                (ao = Xo({
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (so = Xo({ tooltip: "是否同步位置" })),
                (lo = Xo({ tooltip: "是否同步旋轉" })),
                (co = Xo({ tooltip: "是否將目標旋轉角度轉換成區域旋轉角度" })),
                (uo = Xo({ tooltip: "是否同步縮放" })),
                (po = Xo({ tooltip: "是否將目標縮放量轉換成區域縮放量" })),
                (ho = Xo({ visible: !1 })),
                (mo = Xo({ type: Zo, visible: !0, displayName: "Bone" })),
                (_o = Xo({ visible: !0, displayName: "Preview" })),
                (fo = Xo({
                    displayName: "Cache Ancestors",
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (yo = Xo({
                    displayName: "Scale Factor",
                    tooltip: "額外本體大小縮放",
                    visible: function () {
                        return this.m_isFollowScale;
                    },
                })),
                (go = Xo({
                    type: lt,
                    displayName: "Position Offset",
                    tooltip: "額外本體位置偏移",
                    visible: function () {
                        return this.m_isFollowPosition;
                    },
                })),
                (So = Xo({
                    displayName: "Rotation Factor",
                    tooltip: "額外本體旋轉",
                    visible: function () {
                        return this.m_isFollowRotation;
                    },
                })),
                io(
                    (bo =
                        no(
                            (((Mo = (function (t) {
                                function o() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        ((e = t.call.apply(t, [this].concat(r)) || this).editor = void 0),
                                        i(e, "m_spineSkeleton", Co, n(e)),
                                        i(e, "m_boneName", vo, n(e)),
                                        i(e, "m_isCacheData", Eo, n(e)),
                                        i(e, "m_isFollowPosition", To, n(e)),
                                        i(e, "m_isFollowRotation", Oo, n(e)),
                                        i(e, "m_isRotationLocalization", No, n(e)),
                                        i(e, "m_isFollowScale", Bo, n(e)),
                                        i(e, "m_isScaleLocalization", Io, n(e)),
                                        i(e, "__boneIndex", Lo, n(e)),
                                        i(e, "_boneIndex", Ro, n(e)),
                                        i(e, "m_preview", Ao, n(e)),
                                        i(e, "m_cacheAncestors", xo, n(e)),
                                        i(e, "m_scaleFactor", ko, n(e)),
                                        i(e, "m_positionOffset", Fo, n(e)),
                                        i(e, "m_rotationFactor", Po, n(e)),
                                        (e._oldAngle = 0),
                                        (e._oldScaleX = 1),
                                        (e._oldScaleY = 1),
                                        (e._isCached = !1),
                                        (e._cachedRotation = 0),
                                        (e._cachedScaleX = 1),
                                        (e._cachedScaleY = 1),
                                        e
                                    );
                                }
                                e(o, t);
                                var r = o.prototype;
                                return (
                                    (r.__preload = function () {}),
                                    (r.onLoad = function () {
                                        ((this._oldAngle = this.node.angle), (this._oldScaleX = this.node.scale.x), (this._oldScaleY = this.node.scale.y));
                                    }),
                                    (r.update = function () {
                                        if (
                                            this.m_spineSkeleton &&
                                            "" != this.m_boneName &&
                                            (this.m_isFollowPosition || this.m_isFollowRotation || this.m_isFollowScale)
                                        ) {
                                            var t = null;
                                            if ((t = this.m_spineSkeleton.findBone(this.m_boneName))) {
                                                var e, i, n;
                                                if (!this.m_cacheAncestors || !this._isCached) {
                                                    for (var o = 0, r = 0, a = 1, s = 1, l = 1, c = 1, u = this.m_spineSkeleton.node; u; )
                                                        ((a *= u.scale.x), (s *= u.scale.y), (o += u.angle), (u = u.parent));
                                                    for (u = this.node.parent; u; ) ((l *= u.scale.x), (c *= u.scale.y), (r -= u.angle), (u = u.parent));
                                                    ((this._cachedRotation = o + r),
                                                        (this._cachedScaleX = a / l),
                                                        (this._cachedScaleY = s / c),
                                                        (this._isCached = !0));
                                                }
                                                if (
                                                    ((e = this.m_isRotationLocalization ? this._cachedRotation : this._oldAngle),
                                                    (i = this.m_isScaleLocalization ? this._cachedScaleX : this._oldScaleX),
                                                    (n = this.m_isScaleLocalization ? this._cachedScaleY : this._oldScaleY),
                                                    this.m_isFollowRotation)
                                                ) {
                                                    var p = t.parent,
                                                        h = t.arotation;
                                                    this.node.angle = e + (_t(p) ? Qo(p.a, p.b, p.c, p.d, h) : t.arotation) + this.m_rotationFactor;
                                                }
                                                if (
                                                    (this.m_isFollowScale &&
                                                        this.node.setScale(
                                                            i * t.getWorldScaleX() * this.m_scaleFactor.x,
                                                            n * t.getWorldScaleY() * this.m_scaleFactor.y,
                                                        ),
                                                    this.m_isFollowPosition)
                                                ) {
                                                    var m = this.m_spineSkeleton.node.getComponent(N).convertToWorldSpaceAR(at(t.worldX, t.worldY, 0)),
                                                        _ = this.node.parent.getComponent(N).convertToNodeSpaceAR(m);
                                                    this.node.setPosition(at(_.x + this.m_positionOffset.x, _.y + this.m_positionOffset.y));
                                                }
                                            }
                                        }
                                    }),
                                    (r.onDestroy = function () {
                                        ((this._oldAngle = null),
                                            (this._oldScaleX = null),
                                            (this._oldScaleY = null),
                                            (this._isCached = null),
                                            (this._cachedRotation = null),
                                            (this._cachedScaleX = null),
                                            (this._cachedScaleY = null),
                                            (this.m_spineSkeleton = null),
                                            (this.m_boneName = null),
                                            (this.m_cacheAncestors = null),
                                            (this.m_isFollowPosition = null),
                                            (this.m_isFollowRotation = null),
                                            (this.m_isRotationLocalization = null),
                                            (this.m_isFollowScale = null),
                                            (this.m_isScaleLocalization = null));
                                    }),
                                    (r.CacheUpdate = function () {
                                        this._isCached = !1;
                                    }),
                                    (r._refreshInspector = function () {
                                        this._updateBoneEnum();
                                    }),
                                    (r._boneEnum = function () {
                                        var t = it(Ko);
                                        return (this.m_spineSkeleton, t);
                                    }),
                                    (r._updateBoneEnum = function () {}),
                                    o
                                );
                            })(G)).BoneFollow = "BoneFollow"),
                            (Co = t((wo = Mo).prototype, "m_spineSkeleton", [oo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            (vo = t(wo.prototype, "m_boneName", [ro], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            (Eo = t(wo.prototype, "m_isCacheData", [ao], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (To = t(wo.prototype, "m_isFollowPosition", [so], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Oo = t(wo.prototype, "m_isFollowRotation", [lo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (No = t(wo.prototype, "m_isRotationLocalization", [co], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Bo = t(wo.prototype, "m_isFollowScale", [uo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Io = t(wo.prototype, "m_isScaleLocalization", [po], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Lo = t(wo.prototype, "__boneIndex", [ho], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            (Ro = t(wo.prototype, "_boneIndex", [mo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return Zo.None;
                                },
                            })),
                            (Ao = t(wo.prototype, "m_preview", [_o], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (xo = t(wo.prototype, "m_cacheAncestors", [fo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (ko = t(wo.prototype, "m_scaleFactor", [yo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return dt(1, 1);
                                },
                            })),
                            (Fo = t(wo.prototype, "m_positionOffset", [go], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return dt(0, 0);
                                },
                            })),
                            (Po = t(wo.prototype, "m_rotationFactor", [So], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            (bo = wo)),
                        ) || bo),
                ));
            (v._RF.pop(), v._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", void 0));
            var zr,
                Gr = E.ccclass,
                Vr = E.property,
                Hr = E.executeInEditMode;
            !(function (t) {
                t[(t.default = 1)] = "default";
            })(zr || (zr = {}));
            var Wr = tt({}),
                Ur = 3.1415927,
                jr = Ur / 180;
            function Xr(t, e, i, n, o) {
                var r,
                    a = ((r = o), Math.sin(r * jr)),
                    s = (function (t) {
                        return Math.cos(t * jr);
                    })(o);
                return 57.29577866666166 * Math.atan2(s * i + a * n, s * t + a * e);
            }
            var Yr, Kr, Zr, qr, Jr, Qr, $r, ta, ea, ia, na, oa, ra, aa, sa, la, ca, ua;
            (($o = Gr("NewBoneFollow")),
                (tr = Vr({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (er = Vr({
                    visible: !1,
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (ir = Vr({ visible: !1, tooltip: "是否同步位置" })),
                (nr = Vr({ visible: !1, tooltip: "是否同步旋轉" })),
                (or = Vr({ visible: !1, tooltip: "是否將目標旋轉角度轉換成區域旋轉角度" })),
                (rr = Vr({ visible: !1, tooltip: "是否同步縮放" })),
                (ar = Vr({ visible: !1, tooltip: "是否將目標縮放量轉換成區域縮放量" })),
                (sr = Vr({ visible: !0, displayName: "Preview" })),
                (lr = Vr({ type: $.Skeleton, visible: !1 })),
                (cr = Vr({ visible: !0, type: $.Skeleton, displayName: "Skeleton", tooltip: "目標 Spine 骨架" })),
                (ur = Vr({ visible: !1 })),
                (pr = Vr({ visible: !0, displayName: "BoneName", tooltip: "請輸入要跟隨的 Spine 骨頭名稱或從下拉選單選擇" })),
                (hr = Vr({ type: Wr, visible: !1 })),
                (mr = Vr({ type: Wr, visible: !0, displayName: "SelectFromList", tooltip: "可從此下拉選單選擇骨頭" })),
                (_r = Vr({
                    displayName: "Cache Ancestors",
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (dr = Vr({ displayName: "Position", tooltip: "是否同步位置" })),
                (fr = Vr({
                    displayName: "Position Offset",
                    tooltip: "額外本體位置偏移",
                    visible: function () {
                        return this.m_followPosition;
                    },
                })),
                (yr = Vr({ displayName: "Rotation", tooltip: "是否同步旋轉" })),
                (gr = Vr({
                    displayName: "Rotation Localization",
                    tooltip: "是否將目標旋轉角度轉換成區域旋轉角度",
                    visible: function () {
                        return this.m_followRotation;
                    },
                })),
                (Sr = Vr({
                    displayName: "Rotation Factor",
                    tooltip: "額外本體旋轉",
                    visible: function () {
                        return this.m_followRotation;
                    },
                })),
                (br = Vr({ displayName: "Scale", tooltip: "是否同步縮放" })),
                (wr = Vr({
                    displayName: "Scale Localization",
                    tooltip: "是否將目標縮放量轉換成區域縮放量",
                    visible: function () {
                        return this.m_followScale;
                    },
                })),
                (Cr = Vr({
                    displayName: "Scale Factor",
                    tooltip: "額外本體大小縮放",
                    visible: function () {
                        return this.m_followScale;
                    },
                })),
                $o(
                    (vr =
                        Hr(
                            (((Dr = (function (t) {
                                function r() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        ((e = t.call.apply(t, [this].concat(r)) || this)._oldAngle = 0),
                                        (e._oldScaleX = 1),
                                        (e._oldScaleY = 1),
                                        (e._isCached = !1),
                                        (e._cachedRotation = 0),
                                        (e._cachedScaleX = 1),
                                        (e._cachedScaleY = 1),
                                        (e._BoneEnumList = []),
                                        i(e, "m_preview", Tr, n(e)),
                                        i(e, "m_spineSkeleton", Or, n(e)),
                                        i(e, "m_boneName", Nr, n(e)),
                                        i(e, "__boneIndex", Br, n(e)),
                                        i(e, "m_cacheAncestors", Ir, n(e)),
                                        i(e, "m_followPosition", Lr, n(e)),
                                        i(e, "m_positionOffset", Rr, n(e)),
                                        i(e, "m_followRotation", Ar, n(e)),
                                        i(e, "m_rotationLocalization", xr, n(e)),
                                        i(e, "m_rotationFactor", kr, n(e)),
                                        i(e, "m_followScale", Fr, n(e)),
                                        i(e, "m_scaleLocalization", Pr, n(e)),
                                        i(e, "m_scaleFactor", Mr, n(e)),
                                        (e.m_isFirstActive = !0),
                                        e
                                    );
                                }
                                e(r, t);
                                var a = r.prototype;
                                return (
                                    (a.CacheUpdate = function () {
                                        this._isCached = !1;
                                    }),
                                    (a.__preload = function () {}),
                                    (a.onLoad = function () {
                                        ((this._oldAngle = this.node.angle), (this._oldScaleX = this.node.scale.x), (this._oldScaleY = this.node.scale.y));
                                    }),
                                    (a.start = function () {}),
                                    (a.onEnable = function () {
                                        ft.on(yt.EVENT_BEFORE_DRAW, this.BoneSync, this);
                                    }),
                                    (a.onDisable = function () {
                                        ft.off(yt.EVENT_BEFORE_DRAW, this.BoneSync, this);
                                    }),
                                    (a.onDestroy = function () {
                                        ((this._oldAngle = null),
                                            (this._oldScaleX = null),
                                            (this._oldScaleY = null),
                                            (this._isCached = null),
                                            (this._cachedRotation = null),
                                            (this._cachedScaleX = null),
                                            (this._cachedScaleY = null),
                                            (this.m_spineSkeleton = null),
                                            (this.m_boneName = null),
                                            (this.m_cacheAncestors = null),
                                            (this.m_followPosition = null),
                                            (this.m_followRotation = null),
                                            (this.m_rotationLocalization = null),
                                            (this.m_followScale = null),
                                            (this.m_scaleLocalization = null));
                                    }),
                                    (a.BoneSync = function () {
                                        if (
                                            (this.m_isFirstActive &&
                                                this.m_spineSkeleton &&
                                                this.m_spineSkeleton._skeleton &&
                                                ((this.m_isFirstActive = !1), this.m_spineSkeleton._skeleton.updateWorldTransform()),
                                            this.m_spineSkeleton &&
                                                "" != this.m_boneName &&
                                                (this.m_followPosition || this.m_followRotation || this.m_followScale))
                                        ) {
                                            var t = this.m_spineSkeleton.findBone(this.m_boneName);
                                            if (t) {
                                                var e, i, n;
                                                if (!this.m_cacheAncestors || !this._isCached) {
                                                    for (var o = 0, r = 0, a = 1, s = 1, l = 1, c = 1, u = this.m_spineSkeleton.node; u; )
                                                        ((a *= u.scale.x), (s *= u.scale.y), u.angle && (o += u.angle), (u = u.parent));
                                                    for (u = this.node.parent; u; )
                                                        ((l *= u.scale.x), (c *= u.scale.y), u.angle && (r -= u.angle), (u = u.parent));
                                                    ((this._cachedRotation = o + r),
                                                        (this._cachedScaleX = a / l),
                                                        (this._cachedScaleY = s / c),
                                                        (this._isCached = !0));
                                                }
                                                if (
                                                    ((e = this.m_rotationLocalization ? this._cachedRotation : this._oldAngle),
                                                    (i = this.m_scaleLocalization ? this._cachedScaleX : this._oldScaleX),
                                                    (n = this.m_scaleLocalization ? this._cachedScaleY : this._oldScaleY),
                                                    this.m_followRotation)
                                                ) {
                                                    var p = t.parent,
                                                        h = t.arotation,
                                                        m = e + (_t(p) ? Xr(p.a, p.b, p.c, p.d, h) : t.arotation) + this.m_rotationFactor;
                                                    this.node.setRotationFromEuler(at(0, 0, m));
                                                }
                                                if (
                                                    (this.m_followScale &&
                                                        this.node.setScale(
                                                            i * t.getWorldScaleX() * this.m_scaleFactor.x,
                                                            n * t.getWorldScaleY() * this.m_scaleFactor.y,
                                                        ),
                                                    this.m_followPosition)
                                                ) {
                                                    var _ = this.m_spineSkeleton.node
                                                            .getComponent(N)
                                                            .convertToWorldSpaceAR(
                                                                at(t.worldX + this.m_positionOffset.x, t.worldY + this.m_positionOffset.y, 0),
                                                            ),
                                                        d = this.node.parent.getComponent(N).convertToNodeSpaceAR(_);
                                                    this.node.setPosition(at(d.x, d.y));
                                                }
                                            }
                                        }
                                    }),
                                    (a._refreshInspector = function () {}),
                                    (a._updateBoneEnum = function () {}),
                                    o(r, [
                                        {
                                            key: "Skeleton",
                                            get: function () {
                                                return this.m_spineSkeleton;
                                            },
                                            set: function (t) {
                                                this.m_spineSkeleton = t;
                                            },
                                        },
                                        {
                                            key: "CacheData",
                                            get: function () {
                                                return this.m_cacheData;
                                            },
                                            set: function (t) {
                                                this.m_cacheData = t;
                                            },
                                        },
                                        {
                                            key: "FollowPosition",
                                            get: function () {
                                                return this.m_followPosition;
                                            },
                                            set: function (t) {
                                                this.m_followPosition = t;
                                            },
                                        },
                                        {
                                            key: "FollowRotation",
                                            get: function () {
                                                return this.m_followRotation;
                                            },
                                            set: function (t) {
                                                this.m_followRotation = t;
                                            },
                                        },
                                        {
                                            key: "RotationLocalization",
                                            get: function () {
                                                return this.m_rotationLocalization;
                                            },
                                            set: function (t) {
                                                this.m_rotationLocalization = t;
                                            },
                                        },
                                        {
                                            key: "FollowScale",
                                            get: function () {
                                                return this.m_followScale;
                                            },
                                            set: function (t) {
                                                this.m_followScale = t;
                                            },
                                        },
                                        {
                                            key: "ScaleLocalization",
                                            get: function () {
                                                return this.m_scaleLocalization;
                                            },
                                            set: function (t) {
                                                this.m_scaleLocalization = t;
                                            },
                                        },
                                        {
                                            key: "_spineSkeleton",
                                            get: function () {
                                                return this.m_spineSkeleton;
                                            },
                                            set: function (t) {
                                                (console.log("set _spineSkeleton ", this.m_spineSkeleton, "value", t),
                                                    (this.m_spineSkeleton = t),
                                                    this._refreshInspector());
                                            },
                                        },
                                        {
                                            key: "BoneName",
                                            get: function () {
                                                return this.m_boneName;
                                            },
                                            set: function (t) {
                                                this.m_boneName = t;
                                                var e = !1;
                                                (this._BoneEnumList.forEach(function (i) {
                                                    i.name != t || (e = !0);
                                                }),
                                                    0 == e
                                                        ? console.log("[spBoneFollow] 輸入的骨頭", t, "並不存在！請檢查名稱是否正確！")
                                                        : console.log("[spBoneFollow] 輸入的骨頭", t, "已找到！"));
                                            },
                                        },
                                        {
                                            key: "_boneIndex",
                                            get: function () {
                                                return this.__boneIndex;
                                            },
                                            set: function (t) {
                                                var e = this;
                                                ((this.__boneIndex = t),
                                                    this._BoneEnumList.forEach(function (i) {
                                                        i.value == t && (e.m_boneName = i.name);
                                                    }),
                                                    (this.__boneIndex = 0),
                                                    console.log("set __boneIndex ", t, "m_boneName:", this.m_boneName));
                                            },
                                        },
                                    ]),
                                    r
                                );
                            })(G)).NewBoneFollow = "NewBoneFollow"),
                            t((Er = Dr).prototype, "Skeleton", [tr], Object.getOwnPropertyDescriptor(Er.prototype, "Skeleton"), Er.prototype),
                            t(Er.prototype, "CacheData", [er], Object.getOwnPropertyDescriptor(Er.prototype, "CacheData"), Er.prototype),
                            t(Er.prototype, "FollowPosition", [ir], Object.getOwnPropertyDescriptor(Er.prototype, "FollowPosition"), Er.prototype),
                            t(Er.prototype, "FollowRotation", [nr], Object.getOwnPropertyDescriptor(Er.prototype, "FollowRotation"), Er.prototype),
                            t(Er.prototype, "RotationLocalization", [or], Object.getOwnPropertyDescriptor(Er.prototype, "RotationLocalization"), Er.prototype),
                            t(Er.prototype, "FollowScale", [rr], Object.getOwnPropertyDescriptor(Er.prototype, "FollowScale"), Er.prototype),
                            t(Er.prototype, "ScaleLocalization", [ar], Object.getOwnPropertyDescriptor(Er.prototype, "ScaleLocalization"), Er.prototype),
                            (Tr = t(Er.prototype, "m_preview", [sr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (Or = t(Er.prototype, "m_spineSkeleton", [lr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            t(Er.prototype, "_spineSkeleton", [cr], Object.getOwnPropertyDescriptor(Er.prototype, "_spineSkeleton"), Er.prototype),
                            (Nr = t(Er.prototype, "m_boneName", [ur], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            t(Er.prototype, "BoneName", [pr], Object.getOwnPropertyDescriptor(Er.prototype, "BoneName"), Er.prototype),
                            (Br = t(Er.prototype, "__boneIndex", [hr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return zr.default;
                                },
                            })),
                            t(Er.prototype, "_boneIndex", [mr], Object.getOwnPropertyDescriptor(Er.prototype, "_boneIndex"), Er.prototype),
                            (Ir = t(Er.prototype, "m_cacheAncestors", [_r], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (Lr = t(Er.prototype, "m_followPosition", [dr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Rr = t(Er.prototype, "m_positionOffset", [fr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return dt(0, 0);
                                },
                            })),
                            (Ar = t(Er.prototype, "m_followRotation", [yr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (xr = t(Er.prototype, "m_rotationLocalization", [gr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (kr = t(Er.prototype, "m_rotationFactor", [Sr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            (Fr = t(Er.prototype, "m_followScale", [br], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Pr = t(Er.prototype, "m_scaleLocalization", [wr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (Mr = t(Er.prototype, "m_scaleFactor", [Cr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return dt(1, 1);
                                },
                            })),
                            (vr = Er)),
                        ) || vr),
                ));
            (v._RF.pop(), v._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", void 0));
            var pa,
                ha = E.ccclass,
                ma = E.property,
                _a = E.executeInEditMode;
            !(function (t) {
                t[(t.default = 1)] = "default";
            })(pa || (pa = {}));
            var da,
                fa,
                ya,
                ga,
                Sa,
                ba,
                wa = tt({});
            ((Yr = ha("NewSlotColorFollow")),
                (Kr = ma({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (Zr = ma({ visible: !0, displayName: "Preview" })),
                (qr = ma({ visible: !1 })),
                (Jr = ma({ type: $.Skeleton, visible: !1 })),
                (Qr = ma({ visible: !0, type: $.Skeleton, displayName: "Skeleton", tooltip: "目標 Spine 骨架" })),
                ($r = ma({ visible: !1 })),
                (ta = ma({ visible: !0, displayName: "SlotName", tooltip: "請輸入要跟隨的 Spine 插槽名稱或從下拉選單選擇" })),
                (ea = ma({ type: wa, visible: !1 })),
                (ia = ma({ visible: !0, displayName: "SelectFromList", type: wa, tooltip: "可從此下拉選單選擇插槽" })),
                Yr(
                    (na =
                        _a(
                            (((ua = (function (t) {
                                function r() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        (e = t.call.apply(t, [this].concat(r)) || this),
                                        i(e, "m_preview", ra, n(e)),
                                        i(e, "_colorCache", aa, n(e)),
                                        i(e, "m_spineSkeleton", sa, n(e)),
                                        i(e, "m_slotName", la, n(e)),
                                        i(e, "__slotIndex", ca, n(e)),
                                        (e._SlotEnumList = []),
                                        e
                                    );
                                }
                                e(r, t);
                                var a = r.prototype;
                                return (
                                    (a.__preload = function () {}),
                                    (a.onLoad = function () {
                                        this._colorCache = null;
                                    }),
                                    (a.start = function () {}),
                                    (a.onEnable = function () {
                                        (this.ColorSync(), ft.on(yt.EVENT_BEFORE_DRAW, this.ColorSync, this));
                                    }),
                                    (a.onDisable = function () {
                                        ft.off(yt.EVENT_BEFORE_DRAW, this.ColorSync, this);
                                    }),
                                    (a.onDestroy = function () {
                                        ((this._colorCache = null), (this.m_spineSkeleton = null), (this.m_slotName = null));
                                    }),
                                    (a.ColorSync = function () {
                                        if (this.m_spineSkeleton && "" != this.m_slotName) {
                                            var t = this.m_spineSkeleton.findSlot(this.m_slotName),
                                                e = t ? 255 * t.color.r : this._colorCache.r,
                                                i = t ? 255 * t.color.g : this._colorCache.g,
                                                n = t ? 255 * t.color.b : this._colorCache.b,
                                                o = t ? 255 * t.color.a : this._colorCache.a;
                                            (null != this._colorCache &&
                                                t.color.r == this._colorCache.r &&
                                                t.color.g == this._colorCache.g &&
                                                t.color.b == this._colorCache.b &&
                                                t.color.a == this._colorCache.a) ||
                                                ((this._colorCache = this._colorCache || new x.Color(x.Color.WHITE)),
                                                this.node.getComponent(A)
                                                    ? ((this.node.getComponent(A).color = X(e, i, n, o)), this._colorCache.set(this.node.getComponent(A).color))
                                                    : this.node.getComponent(F) &&
                                                      ((this.node.getComponent(F).color = X(e, i, n, o)),
                                                      this._colorCache.set(this.node.getComponent(F).color)),
                                                this.node.getComponent(mt) && (this.node.getComponent(mt).opacity = o),
                                                (this._colorCache.a = o));
                                        }
                                    }),
                                    (a._refreshInspector = function () {}),
                                    (a._updateSlotEnum = function () {}),
                                    o(r, [
                                        {
                                            key: "Skeleton",
                                            get: function () {
                                                return this.m_spineSkeleton;
                                            },
                                            set: function (t) {
                                                this.m_spineSkeleton = t;
                                            },
                                        },
                                        {
                                            key: "_spineSkeleton",
                                            get: function () {
                                                return this.m_spineSkeleton;
                                            },
                                            set: function (t) {},
                                        },
                                        {
                                            key: "SlotName",
                                            get: function () {
                                                return this.m_slotName;
                                            },
                                            set: function (t) {
                                                this.m_slotName = t;
                                                var e = !1;
                                                (this._SlotEnumList.forEach(function (i) {
                                                    i.name != t || (e = !0);
                                                }),
                                                    0 == e
                                                        ? console.log("[spSlotColorFollow] 輸入的插槽", t, "並不存在！請檢查名稱是否正確！")
                                                        : console.log("[spSlotColorFollow] 輸入的插槽", t, "已找到！"));
                                            },
                                        },
                                        { key: "_slotIndex", get: function () {}, set: function (t) {} },
                                    ]),
                                    r
                                );
                            })(G)).NewSlotColorFollow = "NewSlotColorFollow"),
                            t((oa = ua).prototype, "Skeleton", [Kr], Object.getOwnPropertyDescriptor(oa.prototype, "Skeleton"), oa.prototype),
                            (ra = t(oa.prototype, "m_preview", [Zr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (aa = t(oa.prototype, "_colorCache", [qr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return new x.Color(x.Color.WHITE);
                                },
                            })),
                            (sa = t(oa.prototype, "m_spineSkeleton", [Jr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            t(oa.prototype, "_spineSkeleton", [Qr], Object.getOwnPropertyDescriptor(oa.prototype, "_spineSkeleton"), oa.prototype),
                            (la = t(oa.prototype, "m_slotName", [$r], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            t(oa.prototype, "SlotName", [ta], Object.getOwnPropertyDescriptor(oa.prototype, "SlotName"), oa.prototype),
                            (ca = t(oa.prototype, "__slotIndex", [ea], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return pa.default;
                                },
                            })),
                            t(oa.prototype, "_slotIndex", [ia], Object.getOwnPropertyDescriptor(oa.prototype, "_slotIndex"), oa.prototype),
                            (na = oa)),
                        ) || na),
                ));
            (v._RF.pop(), v._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", void 0));
            var Ca,
                va,
                Ea = E.ccclass,
                Ta = E.property,
                Oa = E.menu;
            ((da = Ea("SkeletonSync")),
                (fa = Oa("Chiron/Spine/SkeletonSync")),
                (ya = Ta({ displayName: "Overlap", tooltip: "是否交疊並同步座標、旋轉及縮放" })),
                da(
                    (ga =
                        fa(
                            ((ba = t(
                                (Sa = (function (t) {
                                    function r() {
                                        for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                        return (((e = t.call.apply(t, [this].concat(r)) || this).m_skeleton = null), i(e, "m_overlap", ba, n(e)), e);
                                    }
                                    e(r, t);
                                    var a = r.prototype;
                                    return (
                                        (a.__preload = function () {
                                            this.m_skeleton = this.getComponent($.Skeleton);
                                        }),
                                        (a.Sync = function (t) {
                                            if (t && this.m_overlap) {
                                                for (var e = 0, i = 1, n = 1, o = t; o; ) ((i *= o.scale.x), (n *= o.scale.y), (e += o.angle), (o = o.parent));
                                                ((this.node.angle = e), (this.node.scale = at(i, n, 0)));
                                                var r = t.parent.getComponent(N).convertToWorldSpaceAR(t.position),
                                                    a = this.node.parent.getComponent(N).convertToNodeSpaceAR(r);
                                                this.node.setPosition(a);
                                            }
                                        }),
                                        o(r, [
                                            {
                                                key: "Skeleton",
                                                get: function () {
                                                    return this.m_skeleton;
                                                },
                                            },
                                        ]),
                                        r
                                    );
                                })(G)).prototype,
                                "m_overlap",
                                [ya],
                                {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                    initializer: function () {
                                        return !0;
                                    },
                                },
                            )),
                            (ga = Sa)),
                        ) || ga),
                ));
            (v._RF.pop(), v._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", void 0));
            var Na,
                Ba,
                Ia,
                La,
                Ra,
                Aa,
                xa,
                ka,
                Fa,
                Pa,
                Ma,
                Da,
                za,
                Ga,
                Va,
                Ha,
                Wa,
                Ua,
                ja,
                Xa = E.ccclass,
                Ya = (E.property, E.menu);
            Xa("SlotActivator")(
                (Ca =
                    Ya("Chiron/Spine/SlotActivator")(
                        (((va = (function (t) {
                            function i() {
                                return t.apply(this, arguments) || this;
                            }
                            return (
                                e(i, t),
                                o(i, [
                                    {
                                        key: "Identifier",
                                        get: function () {
                                            return this.identifier;
                                        },
                                        set: function (t) {
                                            this.identifier = t;
                                        },
                                    },
                                    {
                                        key: "Active",
                                        get: function () {
                                            return this.active;
                                        },
                                        set: function (t) {
                                            this.active = t;
                                        },
                                    },
                                ]),
                                i
                            );
                        })(G)).SlotActivator = "SlotActivator"),
                        (Ca = va)),
                    ) || Ca),
            );
            (v._RF.pop(), v._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", void 0));
            var Ka = E.ccclass,
                Za = E.property,
                qa = E.menu,
                Ja = (E.inspector, tt({ None: 0 }));
            var Qa, $a, ts, es, is, ns, os, rs;
            ((Na = Ka("SlotColorFollow")),
                (Ba = qa("Chiron/Spine/SlotColorFollow")),
                (Ia = Za({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (La = Za({ visible: !1, tooltip: "目標同步 slot 名稱" })),
                (Ra = Za({ visible: !0, displayName: "Preview" })),
                (Aa = Za({ visible: !1, type: x.Color })),
                (xa = Za({ visible: !1, type: $.Skeleton })),
                (ka = Za({ visible: !0, displayName: "Skeleton", tooltip: "目標 Spine 骨架", type: $.Skeleton })),
                (Fa = Za({ visible: !1, tooltip: "目標同步 slot 名稱" })),
                (Pa = Za({ visible: !1 })),
                (Ma = Za({ visible: !0, displayName: "Slot", type: Ja })),
                Na(
                    (Da =
                        Ba(
                            (((ja = (function (t) {
                                function r() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        ((e = t.call.apply(t, [this].concat(r)) || this).editor = void 0),
                                        i(e, "m_preview", Ga, n(e)),
                                        i(e, "_colorCache", Va, n(e)),
                                        i(e, "m_spineSkeleton", Ha, n(e)),
                                        i(e, "m_slotName", Wa, n(e)),
                                        i(e, "__slotIndex", Ua, n(e)),
                                        e
                                    );
                                }
                                e(r, t);
                                var a = r.prototype;
                                return (
                                    (a.__preload = function () {}),
                                    (a.onLoad = function () {
                                        this.node.getComponent(A)
                                            ? (this._colorCache = this.node.getComponent(A).color)
                                            : this.node.getComponent(F) && (this._colorCache = this.node.getComponent(F).color);
                                    }),
                                    (a.update = function () {
                                        if (this.m_spineSkeleton && "" != this.m_slotName) {
                                            var t = this.m_spineSkeleton.findSlot(this.m_slotName),
                                                e = t ? 255 * t.color.r : this._colorCache.r,
                                                i = t ? 255 * t.color.g : this._colorCache.g,
                                                n = t ? 255 * t.color.b : this._colorCache.b,
                                                o = t ? 255 * t.color.a : this._colorCache.a;
                                            (e == this._colorCache.r && i == this._colorCache.g && n == this._colorCache.b && o == this._colorCache.a) ||
                                                (this.node.getComponent(A)
                                                    ? ((this.node.getComponent(A).color = X(e, i, n, o)), this._colorCache.set(this.node.getComponent(A).color))
                                                    : this.node.getComponent(F) &&
                                                      ((this.node.getComponent(F).color = X(e, i, n, o)),
                                                      this._colorCache.set(this.node.getComponent(F).color)),
                                                this.node.getComponent(mt) && (this.node.getComponent(mt).opacity = o),
                                                (this._colorCache.a = o));
                                        }
                                    }),
                                    (a.onDestroy = function () {
                                        ((this._colorCache = null), (this.m_spineSkeleton = null), (this.m_slotName = null));
                                    }),
                                    (a._refreshInspector = function () {}),
                                    (a._slotEnum = function () {}),
                                    (a._updateSlotEnum = function () {
                                        var t,
                                            e,
                                            i,
                                            n,
                                            o = this._slotEnum();
                                        ((t = this),
                                            (e = "_slotIndex"),
                                            (i = o || Ja),
                                            (n = tt.getList(tt(i))),
                                            gt.Attr.setClassAttr(t, e, "type", "Enum"),
                                            gt.Attr.setClassAttr(t, e, "enumList", n));
                                    }),
                                    (a.notify = function () {}),
                                    o(r, [
                                        {
                                            key: "Skeleton",
                                            get: function () {
                                                return this.m_spineSkeleton;
                                            },
                                            set: function (t) {
                                                this.m_spineSkeleton = t;
                                            },
                                        },
                                        {
                                            key: "SlotName",
                                            get: function () {
                                                return this.m_slotName;
                                            },
                                            set: function (t) {
                                                this.m_slotName = t;
                                            },
                                        },
                                        { key: "_spineSkeleton", get: function () {}, set: function (t) {} },
                                        { key: "_slotIndex", get: function () {}, set: function (t) {} },
                                    ]),
                                    r
                                );
                            })(G)).SlotColorFollow = "SlotColorFollow"),
                            t((za = ja).prototype, "Skeleton", [Ia], Object.getOwnPropertyDescriptor(za.prototype, "Skeleton"), za.prototype),
                            t(za.prototype, "SlotName", [La], Object.getOwnPropertyDescriptor(za.prototype, "SlotName"), za.prototype),
                            (Ga = t(za.prototype, "m_preview", [Ra], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (Va = t(za.prototype, "_colorCache", [Aa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return new x.Color(x.Color.WHITE);
                                },
                            })),
                            (Ha = t(za.prototype, "m_spineSkeleton", [xa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            t(za.prototype, "_spineSkeleton", [ka], Object.getOwnPropertyDescriptor(za.prototype, "_spineSkeleton"), za.prototype),
                            (Wa = t(za.prototype, "m_slotName", [Fa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            (Ua = t(za.prototype, "__slotIndex", [Pa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            t(za.prototype, "_slotIndex", [Ma], Object.getOwnPropertyDescriptor(za.prototype, "_slotIndex"), za.prototype),
                            (Da = za)),
                        ) || Da),
                ));
            (v._RF.pop(), v._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", void 0));
            var as = E.ccclass,
                ss = E.property,
                ls = E.menu;
            ((Qa = as("SlotCulling")),
                ($a = ls("Chiron/Spine/SlotCulling")),
                (ts = ss({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (es = ss({ visible: !1, tooltip: "反向剔除 Slot 項目(勾選的不會被剔除，未勾選的將被剔除)" })),
                (is = ss({ visible: !1, tooltip: "遭剔除的 Slot 項目名稱" })),
                Qa(
                    (ns =
                        $a(
                            (((rs = (function (t) {
                                function i() {
                                    return t.apply(this, arguments) || this;
                                }
                                return (
                                    e(i, t),
                                    o(
                                        i,
                                        [
                                            {
                                                key: "Skeleton",
                                                get: function () {
                                                    return this.m_spineSkeleton;
                                                },
                                                set: function (t) {
                                                    this.m_spineSkeleton = t;
                                                },
                                            },
                                            {
                                                key: "Invert",
                                                get: function () {
                                                    return this.m_invert;
                                                },
                                                set: function (t) {
                                                    this.m_invert = t;
                                                },
                                            },
                                            {
                                                key: "CullingList",
                                                get: function () {
                                                    return this._cullingSlotNames;
                                                },
                                            },
                                        ],
                                        [
                                            {
                                                key: "Name",
                                                get: function () {
                                                    return i.SlotCulling;
                                                },
                                            },
                                        ],
                                    ),
                                    i
                                );
                            })(G)).SlotCulling = "SlotCulling"),
                            t((os = rs).prototype, "Skeleton", [ts], Object.getOwnPropertyDescriptor(os.prototype, "Skeleton"), os.prototype),
                            t(os.prototype, "Invert", [es], Object.getOwnPropertyDescriptor(os.prototype, "Invert"), os.prototype),
                            t(os.prototype, "CullingList", [is], Object.getOwnPropertyDescriptor(os.prototype, "CullingList"), os.prototype),
                            (ns = os)),
                        ) || ns),
                ));
            (v._RF.pop(), v._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", void 0));
            var cs = new Map(),
                us = new Map(),
                ps = new Map(),
                hs = [],
                ms = (function () {
                    function t() {
                        this.loadedZipNames = new Array();
                    }
                    var e = t.prototype;
                    return (
                        (e.downloadZip = function (t, e) {
                            return new Promise(function (i) {
                                var n = t.match(/[^/]+$/);
                                if (null !== n) {
                                    var o = "" + n[0] + e + ".zip";
                                    k.downloader.downloadFile(t + "/" + o, { xhrResponseType: "arraybuffer" }, null, function (t, e) {
                                        i(e);
                                    });
                                } else i(null);
                            });
                        }),
                        (e.loadZip = (function () {
                            var t = _(
                                S().mark(function t(e, i) {
                                    var n, o, r;
                                    return S().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return ((n = i ? "." + i : ""), (t.next = 3), this.downloadZip(e, n));
                                                    case 3:
                                                        null !== (o = t.sent) &&
                                                            ((r = e.replace(/(.*?)\/assets\//, "assets/")),
                                                            globalThis.fflate.unzip(new Uint8Array(o), function (t, i) {
                                                                t
                                                                    ? console.warn("Unzip failed:", t.message)
                                                                    : Object.keys(i).forEach(function (t) {
                                                                          (cs.set(e + "/" + t, i[t]), cs.set(r + "/" + t, i[t]));
                                                                      });
                                                            }));
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            );
                            return function (e, i) {
                                return t.apply(this, arguments);
                            };
                        })()),
                        (e.init = function () {
                            if (globalThis.fflate) {
                                var t = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
                                Object.defineProperty(XMLHttpRequest.prototype, "response", {
                                    get: function () {
                                        return this.ZipCacheUrl ? us.get(this.ZipCacheUrl) : t.get.call(this);
                                    },
                                    set: function (t) {},
                                    configurable: !0,
                                });
                                var e = XMLHttpRequest.prototype.open;
                                XMLHttpRequest.prototype.open = function (t, i, n, o, r) {
                                    function a() {
                                        var t = (this.status >= 200 && this.status < 300) || 304 == this.status;
                                        (this.readyState != XMLHttpRequest.DONE || t || hs.includes(i) || (hs.push(i), _s(701, this.status), _s(702, i)),
                                            this.removeEventListener("load", a));
                                    }
                                    return (cs.has(i) && (this.ZipCacheUrl = i), this.addEventListener("load", a.bind(this)), e.apply(this, arguments));
                                };
                                var i = XMLHttpRequest.prototype.send;
                                XMLHttpRequest.prototype.send = _(
                                    S().mark(function t(e) {
                                        var n,
                                            o,
                                            r,
                                            a,
                                            s,
                                            l,
                                            c,
                                            u,
                                            p = arguments;
                                        return S().wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if (!this.ZipCacheUrl) {
                                                                t.next = 26;
                                                                break;
                                                            }
                                                            if (us.has(this.ZipCacheUrl)) {
                                                                t.next = 24;
                                                                break;
                                                            }
                                                            ((n = this.responseType),
                                                                (o = cs.get(this.ZipCacheUrl)),
                                                                (r = null),
                                                                (t.t0 = n),
                                                                (t.next = "arraybuffer" === t.t0 ? 8 : "json" === t.t0 ? 10 : "text" === t.t0 ? 14 : 17));
                                                            break;
                                                        case 8:
                                                            return ((r = o.buffer ? o.buffer : o), t.abrupt("break", 18));
                                                        case 10:
                                                            return ((a = new TextDecoder()), (s = a.decode(o)), (r = JSON.parse(s)), t.abrupt("break", 18));
                                                        case 14:
                                                            return ((l = new TextDecoder()), (r = l.decode(o)), t.abrupt("break", 18));
                                                        case 17:
                                                            console.error("Unknown type in zipCache:", n);
                                                        case 18:
                                                            ((c = ps.get(this.ZipCacheUrl)) &&
                                                                (us.delete(this.ZipCacheUrl + "@version" + c), ps.delete(this.ZipCacheUrl)),
                                                                (u = performance.now()),
                                                                ps.set(this.ZipCacheUrl, u),
                                                                (this.ZipCacheUrl = this.ZipCacheUrl + "@version" + u),
                                                                us.set(this.ZipCacheUrl, r));
                                                        case 24:
                                                            return (this.onload(), t.abrupt("return"));
                                                        case 26:
                                                            return t.abrupt("return", i.apply(this, p));
                                                        case 27:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this,
                                        );
                                    }),
                                );
                            } else console.error("fflate is not found.");
                        }),
                        t
                    );
                })();
            function _s(t, e) {
                if (!St.isNative) {
                    var i = "https://" + window.location.host + "/";
                    if (-1 == i.indexOf("localhost") && 1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(i)) {
                        var n = 0;
                        switch (St.browserType) {
                            case St.BrowserType.CHROME:
                                n = 1;
                                break;
                            case St.BrowserType.SAFARI:
                                n = 2;
                                break;
                            case St.BrowserType.IE:
                                n = 3;
                                break;
                            case St.BrowserType.UC:
                                n = 4;
                                break;
                            case St.BrowserType.QQ:
                            case St.BrowserType.MOBILE_QQ:
                                n = 5;
                                break;
                            case St.BrowserType.FIREFOX:
                                n = 6;
                        }
                        var o = 0;
                        switch (St.os) {
                            case St.OS.ANDROID:
                                o = 1;
                                break;
                            case St.OS.IOS:
                                o = 2;
                                break;
                            case St.OS.WINDOWS:
                                o = 3;
                                break;
                            default:
                                o = 0;
                        }
                        var r = ds("apiId") || "-1",
                            a = ds("ssoKey") || "1",
                            s = ds("gameID") || "-1",
                            l = "https://" + (ds("domain_platform") || ds("gs") || "gnidnawcs").split("").reverse().join("") + "/webservice/event/assetUpdate?";
                        (function (t) {
                            var e = { Accept: "application/json, text/javascript, text/plain" },
                                i = new XMLHttpRequest();
                            (i.open("GET", t, !0),
                                e &&
                                    Object.keys(e).forEach(function (t) {
                                        return i.setRequestHeader(t, e[t]);
                                    }));
                            ((i.timeout = 5e3), (i.onload = function () {}), (i.onerror = function () {}), (i.ontimeout = function () {}), i.send());
                        })(
                            (l +=
                                "?AccountID=-1&GameID=" +
                                s +
                                "&GameVersion=" +
                                new Date().getTime() +
                                "&EventID=" +
                                t +
                                "&EventValue=" +
                                e +
                                "&BrowserSystem=" +
                                n +
                                "&DeviceSystem=" +
                                o +
                                "&CreateTime=" +
                                new Date().toISOString() +
                                "&Screen=0&SSOKey=" +
                                a +
                                "&ApiId=" +
                                r +
                                "&LogIndex=11"),
                        );
                    }
                }
            }
            function ds(t, e) {
                (void 0 === e && (e = null),
                    e ||
                        (e = (function () {
                            var t = window.location.href,
                                e = ds("replaydata", t);
                            if (!e) return t;
                            for (
                                var i = "0".charCodeAt(0),
                                    n = "9".charCodeAt(0),
                                    o = "a".charCodeAt(0),
                                    r = "z".charCodeAt(0),
                                    a = "A".charCodeAt(0),
                                    s = "Z".charCodeAt(0),
                                    l = "",
                                    c = 0;
                                c < e.length;
                                c++
                            ) {
                                var u = e.charCodeAt(c);
                                u >= i && u <= n
                                    ? ((u = n - (u - i)), (l += String.fromCharCode(u)))
                                    : u >= o && u <= r && c % 2 == 0
                                      ? ((u = r - (u - o)), (l += String.fromCharCode(u)))
                                      : u >= a && u <= s && c % 3 == 0
                                        ? ((u = s - (u - a)), (l += String.fromCharCode(u)))
                                        : (l += String.fromCharCode(u));
                            }
                            var p = t.split("replaydata=" + e);
                            return (p.join(""), p + atob(l));
                        })()),
                    (t = t.replace(/[[\]]/g, "\\$&")));
                var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                return i ? (i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "") : null;
            }
            var fs,
                ys,
                gs,
                Ss,
                bs,
                ws,
                Cs,
                vs,
                Es,
                Ts,
                Os,
                Ns,
                Bs,
                Is,
                Ls,
                Rs,
                As,
                xs,
                ks,
                Fs,
                Ps,
                Ms,
                Ds,
                zs,
                Gs,
                Vs,
                Hs,
                Ws,
                Us,
                js,
                Xs,
                Ys,
                Ks,
                Zs,
                qs,
                Js,
                Qs,
                $s,
                tl,
                el,
                il,
                nl,
                ol,
                rl,
                al,
                sl,
                ll,
                cl,
                ul,
                pl,
                hl,
                ml,
                _l,
                dl,
                fl,
                yl,
                gl,
                Sl,
                bl,
                wl,
                Cl,
                vl,
                El,
                Tl,
                Ol,
                Nl,
                Bl,
                Il,
                Ll,
                Rl,
                Al,
                xl,
                kl = globalThis.__zipBundleLoader;
            (globalThis.fflate && !kl && ((kl = new ms()), (globalThis.__zipBundleLoader = kl), kl.init()),
                v._RF.pop(),
                v._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", void 0));
            var Fl,
                Pl = ["game"],
                Ml = E.ccclass,
                Dl = E.property;
            !(function (t) {
                ((t[(t.CommonMainBundle = 0)] = "CommonMainBundle"),
                    (t[(t.CommonBundle = 1)] = "CommonBundle"),
                    (t[(t.OtherBundle = 2)] = "OtherBundle"),
                    (t[(t.DefaultLangBundle = 3)] = "DefaultLangBundle"),
                    (t[(t.LangTextBundle = 4)] = "LangTextBundle"),
                    (t[(t.GameBundle = 5)] = "GameBundle"));
            })(Fl || (Fl = {}));
            var zl,
                Gl,
                Vl = {
                    CN: "zh-CN",
                    EN: "en-US",
                    TH: "th-TH",
                    VN: "vi-VN",
                    ID: "id-ID",
                    HI: "hi-IN",
                    TA: "ta-IN",
                    MM: "my-MM",
                    JP: "ja-JP",
                    MS: "ms-MY",
                    KO: "ko-KR",
                    BN: "bn-IN",
                    ES: "es-AR",
                    PT: "pt-BR",
                    IT: "it-IT",
                    SE: "sv-SE",
                    DE: "de-DE",
                    DADK: "da-DK",
                    RORO: "ro-RO",
                    NLNL: "nl-NL",
                    TRTR: "tr-TR",
                    RURU: "ru-RU",
                    GRGR: "gr-GR",
                    FRFR: "fr-FR",
                },
                Hl = {
                    CN: "cn",
                    EN: "en",
                    TH: "th",
                    VN: "vn",
                    ID: "id",
                    HI: "hi",
                    TA: "ta",
                    MM: "mm",
                    JP: "jp",
                    MS: "ms",
                    KO: "ko",
                    BN: "bn",
                    ES: "es",
                    PT: "pt",
                    IT: "it",
                    SE: "se",
                    DE: "de",
                    DADK: "da",
                    RORO: "ro",
                    NLNL: "nl",
                    TRTR: "trTR",
                    RURU: "ruRU",
                    GRGR: "grGR",
                    FRFR: "frFR",
                },
                Wl = Hl.EN,
                Ul = [10830, 10827, 10778, 10718, 10689, 10651, 10630, 10598, 10505, 10504, 10450, 10414, 10263, 10220],
                jl = [3],
                Xl = { JILI: 0, TADA: 1, ACE_ROYALE: 2, JILI_START: 3, TADA_CASINO: 4, NONE: 5, UFA: 6 };
            (!(function (t) {
                ((t[(t.None = 0)] = "None"),
                    (t[(t.AutoPlaySettingPanel = 1)] = "AutoPlaySettingPanel"),
                    (t[(t.AutoPlaySettingPanel_DFI = 2)] = "AutoPlaySettingPanel_DFI"),
                    (t[(t.AutoPlaySettingPanel_DFIII = 3)] = "AutoPlaySettingPanel_DFIII"),
                    (t[(t.AutoPlaySettingPanel_BS = 4)] = "AutoPlaySettingPanel_BS"),
                    (t[(t.AutoPlaySetting_AG2 = 5)] = "AutoPlaySetting_AG2"),
                    (t[(t.AutoPlaySetting_FD = 6)] = "AutoPlaySetting_FD"),
                    (t[(t.AutoPlaySettingPanel_MS = 7)] = "AutoPlaySettingPanel_MS"));
            })(zl || (zl = {})),
                (function (t) {
                    ((t[(t.None = 0)] = "None"), (t[(t.Dark = 1)] = "Dark"));
                })(Gl || (Gl = {})));
            var Yl,
                Kl,
                Zl,
                ql,
                Jl,
                Ql,
                $l,
                tc,
                ec,
                ic,
                nc,
                oc,
                rc =
                    ((fs = Ml("StyleSetting")),
                    (ys = Dl({ type: Z, tooltip: "是否有骰子造型" })),
                    (gs = Dl({ type: Z, tooltip: "是否有萬聖造型" })),
                    (Ss = Dl({ type: Z, tooltip: "是否有聖誕造型" })),
                    (bs = Dl({ type: Z, tooltip: "是否有OKBET廠商造型" })),
                    (ws = Dl({ type: tt(Gl), tooltip: "系列" })),
                    fs(
                        ((Es = t(
                            (vs = function () {
                                (i(this, "HasDice", Es, this),
                                    i(this, "HasHolloween", Ts, this),
                                    i(this, "HasXmas", Os, this),
                                    i(this, "HasOkbet", Ns, this),
                                    i(this, "Series", Bs, this));
                            }).prototype,
                            "HasDice",
                            [ys],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            },
                        )),
                        (Ts = t(vs.prototype, "HasHolloween", [gs], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (Os = t(vs.prototype, "HasXmas", [Ss], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (Ns = t(vs.prototype, "HasOkbet", [bs], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (Bs = t(vs.prototype, "Series", [ws], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return Gl.None;
                            },
                        })),
                        (Cs = vs)),
                    ) || Cs),
                ac =
                    ((Is = Ml("PlayTypeSetting")),
                    (Ls = Dl({ type: Z, tooltip: "Match" })),
                    (Rs = Dl({ type: Z, tooltip: "Break" })),
                    Is(
                        ((ks = t(
                            (xs = function () {
                                (i(this, "Match", ks, this), i(this, "Break", Fs, this));
                            }).prototype,
                            "Match",
                            [Ls],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            },
                        )),
                        (Fs = t(xs.prototype, "Break", [Rs], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (As = xs)),
                    ) || As);
            ((Ps = Dl({ type: pt, tooltip: "遊戲縮寫(server位置)" })),
                (Ms = Dl({ type: String, tooltip: "遊戲主場prefab路徑" })),
                (Ds = Dl({ type: String, tooltip: "遊戲多語系圖片路徑" })),
                (zs = Dl({ type: String, tooltip: "遊戲ID" })),
                (Gs = Dl({ type: String, tooltip: "Logo名稱，只要給到底線之前" })),
                (Vs = Dl({ type: Boolean, tooltip: "鎖定橫版" })),
                (Hs = Dl({ type: Boolean, tooltip: "鎖定直版" })),
                (Ws = Dl({ type: Boolean, tooltip: "是否為街機" })),
                (Us = Dl({ type: I, tooltip: "不分語系LOGO" })),
                (js = Dl({ type: bt, tooltip: "遊戲Logo合圖" })),
                (Xs = Dl({ type: pt, tooltip: "展示頁" })),
                (Ys = Dl({ type: String, tooltip: "敘述圖名稱" })),
                (Ks = Dl({ type: I, tooltip: "特色圖" })),
                (Zs = Dl({ type: I, tooltip: "背景圖，0:直,1:橫" })),
                (qs = Dl({ type: I, tooltip: "腳色" })),
                (Js = Dl({ type: Number, tooltip: "辣椒數" })),
                (Qs = Dl({ type: Number, tooltip: "最大贏分倍率" })),
                ($s = Dl({ type: tt(zl), tooltip: "自動玩介面" })),
                (tl = Dl({ type: Z, tooltip: "是否開啟晚3秒ShowGameScene進入遊戲" })),
                (el = Dl({ type: Z, tooltip: "可以跳過前導動畫" })),
                (il = Dl({ type: rc, tooltip: "是否有其他特色樣式" })),
                (nl = Dl({ type: ac, tooltip: "是否有其他特色樣式" })),
                (ol = Dl({ type: Z, tooltip: "是否為遠程包" })),
                (rl = Dl({ type: Z, tooltip: "是否是SSS版" })),
                (al = Dl({ type: pt, tooltip: "使用哪個遠程包版本" })),
                Ml(
                    ((cl = t(
                        (ll = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_gameShortName", cl, n(e)),
                                    i(e, "m_scenePrefabPath", ul, n(e)),
                                    i(e, "m_gameImgPath", pl, n(e)),
                                    i(e, "m_gameId", hl, n(e)),
                                    i(e, "m_logoName", ml, n(e)),
                                    i(e, "m_isLockLandScope", _l, n(e)),
                                    i(e, "m_isLockPortrait", dl, n(e)),
                                    i(e, "m_isStreet", fl, n(e)),
                                    i(e, "m_singleLogo", yl, n(e)),
                                    i(e, "m_logoSpriteAtlas", gl, n(e)),
                                    i(e, "m_pagePrefabPaths", Sl, n(e)),
                                    i(e, "m_infoNames", bl, n(e)),
                                    i(e, "m_featureSpriteFrames", wl, n(e)),
                                    i(e, "m_bgSpriteFrames", Cl, n(e)),
                                    i(e, "m_characterSpriteFrame", vl, n(e)),
                                    i(e, "m_chilliNum", El, n(e)),
                                    i(e, "m_maxWinNum", Tl, n(e)),
                                    i(e, "m_autoplayPanelNo", Ol, n(e)),
                                    i(e, "m_isWatting", Nl, n(e)),
                                    i(e, "m_skipIntro", Bl, n(e)),
                                    i(e, "m_styleSetting", Il, n(e)),
                                    i(e, "m_playTypeSetting", Ll, n(e)),
                                    i(e, "m_isRemote", Rl, n(e)),
                                    i(e, "m_isSSS", Al, n(e)),
                                    i(e, "m_ReomveVersion", xl, n(e)),
                                    (e.m_startSceneTime = -1),
                                    (e.m_otherBundle = null),
                                    (e.m_commonBundle = null),
                                    (e.m_commonPath = ""),
                                    (e.m_commonVersion = ""),
                                    (e.m_langTextBundle = null),
                                    (e.m_defaultLangPath = ""),
                                    (e.m_defaultLangVersion = ""),
                                    (e.m_commonMainBundle = null),
                                    (e.m_gameBundle = null),
                                    (e.m_pagePrefabs = []),
                                    (e.m_apiId = 0),
                                    (e.m_isTaDa = !1),
                                    (e.m_viewNode = null),
                                    (e.m_lang = "en"),
                                    (e.m_loadOldType = !0),
                                    (e.m_isForceLite = !1),
                                    e
                                );
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.onLoad = function () {
                                    ((this.m_isTaDa = this.IsTada()),
                                        this.Config(),
                                        this.Log(100),
                                        null == window.SetProgressInterval || window.SetProgressInterval(60),
                                        "109" === this.m_gameId && ((k.downloader.maxConcurrency = 12), (k.downloader.maxRequestsPerFrame = 12)));
                                }),
                                (r.start = (function () {
                                    var t = _(
                                        S().mark(function t() {
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (this.m_startSceneTime = this.m_isWatting ? Date.now() : -1),
                                                                    (t.next = 3),
                                                                    this.LoadVersion("game")
                                                                );
                                                            case 3:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (r.Config = function () {
                                    M.prototype.fillBuffers = function (t) {
                                        this._renderFlag && t._pOpacity > 0 && this._render(t);
                                    };
                                }),
                                (r.update = function () {}),
                                (r.LoadZip = (function () {
                                    var t = _(
                                        S().mark(function t(e, i, n, o) {
                                            var r, a, s;
                                            return S().wrap(function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if ((void 0 === n && (n = ""), void 0 === o && (o = ""), kl)) {
                                                                t.next = 4;
                                                                break;
                                                            }
                                                            return t.abrupt("return");
                                                        case 4:
                                                            if (!(kl.loadedZipNames.indexOf(e) >= 0)) {
                                                                t.next = 6;
                                                                break;
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            if (i || -1 !== Pl.indexOf(e)) {
                                                                t.next = 8;
                                                                break;
                                                            }
                                                            return t.abrupt("return");
                                                        case 8:
                                                            return (
                                                                (r = n),
                                                                (a = o),
                                                                i ||
                                                                    ((s = vt.querySettings(Et.Category.ASSETS, "bundleVers")),
                                                                    (r = "./assets/" + e),
                                                                    (a = s[e])),
                                                                kl.loadedZipNames.push(e),
                                                                (t.next = 13),
                                                                kl.loadZip(r, a)
                                                            );
                                                        case 13:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            }, t);
                                        }),
                                    );
                                    return function (e, i, n, o) {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (r.LoadVersion = (function () {
                                    var t = _(
                                        S().mark(function t(e) {
                                            var i, n, o, r, a, s, l, c, u, p, h, m, d, f, y, g, b, w, C, v, E, T, O, N;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                ((i = globalThis.LobbyData),
                                                                    (n = this.m_isTaDa ? "tada" : "jili"),
                                                                    (this.m_commonPath = "assets/common/Astt/" + n),
                                                                    (o = "assets/common/Astt/" + n + "Main"),
                                                                    (r = "assets/common/Astt/other"),
                                                                    (a = "AsttText/AsttText/en"),
                                                                    (this.m_defaultLangPath = "AsttText/AsttText/en"),
                                                                    (s = "assets/" + e),
                                                                    (this.m_commonVersion = ""),
                                                                    (l = ""),
                                                                    (c = ""),
                                                                    (this.m_defaultLangVersion = ""),
                                                                    (u = ""),
                                                                    (p = ""),
                                                                    (h = ""),
                                                                    (m = ""));
                                                                try {
                                                                    void 0 !== i &&
                                                                        (console.error("lobbyData", JSON.stringify(i)),
                                                                        (s = i.bundleDomin + e),
                                                                        (p = i.versionJson[e]),
                                                                        (this.m_commonPath = i.bundleDomin + n),
                                                                        (this.m_commonVersion = i.versionJson[n]),
                                                                        (r = i.bundleDomin + "other"),
                                                                        (u = i.versionJson.other));
                                                                } catch (t) {}
                                                                if (!this.m_isRemote) {
                                                                    t.next = 55;
                                                                    break;
                                                                }
                                                                return (
                                                                    (d = /(\d+)\.(\d+)/),
                                                                    (f = Tt.match(d)),
                                                                    (y = f[1] + "." + f[2]),
                                                                    (g = `${window.location.protocol}//` + window.location.host + "/"),
                                                                    (b = "astarte"),
                                                                    (w = "web-mobile"),
                                                                    St.isNative && ((w = "android"), (y = "app" + y)),
                                                                    this.m_ReomveVersion.length > 0 && (w = w + "-" + this.m_ReomveVersion),
                                                                    i && (g = i.cdnHost),
                                                                    this.m_isSSS && (b = "astarte3"),
                                                                    (C = this.GetLinkParameterByName("remoteVersion")) &&
                                                                        C.length > 0 &&
                                                                        (y = "" + C + f[1] + "." + f[2]),
                                                                    (t.next = 33),
                                                                    new Promise(function (t) {
                                                                        k.loadRemote(
                                                                            "" +
                                                                                g +
                                                                                b +
                                                                                "/" +
                                                                                y +
                                                                                "/" +
                                                                                w +
                                                                                "/assets/versions.json?" +
                                                                                (Date.now() / 600).toFixed(0),
                                                                            { reload: !0, cacheAsset: !1, cacheEnabled: !1 },
                                                                            _(
                                                                                S().mark(function e(i, n) {
                                                                                    return S().wrap(function (e) {
                                                                                        for (;;)
                                                                                            switch ((e.prev = e.next)) {
                                                                                                case 0:
                                                                                                    t(n);
                                                                                                case 1:
                                                                                                case "end":
                                                                                                    return e.stop();
                                                                                            }
                                                                                    }, e);
                                                                                }),
                                                                            ),
                                                                        );
                                                                    })
                                                                );
                                                            case 33:
                                                                if (
                                                                    ((v = t.sent),
                                                                    (E = "" + g + b + "/" + y + "/" + w + "/src/chunks/bundle." + v.json["bundle.js"] + ".js"),
                                                                    !St.isNative)
                                                                ) {
                                                                    t.next = 40;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 38),
                                                                    new Promise(function (t, e) {
                                                                        k.downloader.downloadScript(E, { systemJs: !0 }, function (i) {
                                                                            i ? (console.error("load bundle error", i), e(i)) : t();
                                                                        });
                                                                    })
                                                                );
                                                            case 38:
                                                                t.next = 42;
                                                                break;
                                                            case 40:
                                                                return ((t.next = 42), System.import(E));
                                                            case 42:
                                                                ((r = "" + g + b + "/" + y + "/" + w + "/assets/other"),
                                                                    (u = v.json.other),
                                                                    (this.m_commonPath = "" + g + b + "/" + y + "/" + w + "/assets/" + n),
                                                                    (this.m_commonVersion = v.json[n]),
                                                                    (o = "" + g + b + "/" + y + "/" + w + "/assets/" + n + "Main"),
                                                                    (l = v.json[n + "Main"]),
                                                                    (this.m_lang = this.GetLanguage()),
                                                                    (a = "" + g + b + "/" + y + "/" + w + "/assets/" + this.m_lang),
                                                                    (c = v.json[this.m_lang]),
                                                                    (this.m_defaultLangPath = "" + g + b + "/" + y + "/" + w + "/assets/en"),
                                                                    (this.m_defaultLangVersion = v.json.en),
                                                                    (h = "" + g + b + "/" + y + "/" + w + "/assets/extra"),
                                                                    (m = v.json.extra));
                                                            case 55:
                                                                if (
                                                                    ((("" != l && null != l) || !this.m_isRemote) && (this.m_loadOldType = !1),
                                                                    !this.m_loadOldType)
                                                                ) {
                                                                    t.next = 71;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 59),
                                                                    Promise.all([
                                                                        this.LoadZip(n, this.m_isRemote, this.m_commonPath, this.m_commonVersion),
                                                                        this.LoadZip(e, !1),
                                                                    ])
                                                                );
                                                            case 59:
                                                                return (
                                                                    (T = [
                                                                        this.LoadBundleSync(r, u),
                                                                        this.LoadBundleSync(s, p, void 0, {
                                                                            bundleName: void 0 !== i ? this.m_gameShortName + e : void 0,
                                                                        }),
                                                                    ]).push(this.LoadBundleSync(o, l), this.LoadBundleSync(a, c)),
                                                                    (t.next = 63),
                                                                    Promise.all(T)
                                                                );
                                                            case 63:
                                                                ((O = t.sent),
                                                                    (this.m_otherBundle = O[0]),
                                                                    (this.m_gameBundle = O[1]),
                                                                    (this.m_commonMainBundle = O[2]),
                                                                    (this.m_langTextBundle = O[3]),
                                                                    this.CheckBundles(),
                                                                    (t.next = 76));
                                                                break;
                                                            case 71:
                                                                return (
                                                                    (N = [
                                                                        this.LoadBundleSync(h, m),
                                                                        this.LoadBundleSync(o, l, Fl.CommonMainBundle),
                                                                        this.LoadBundleSync(r, u, Fl.OtherBundle),
                                                                        this.LoadBundleSync(a, c, Fl.LangTextBundle),
                                                                        this.LoadZip(n + "Main", this.m_isRemote, o, l),
                                                                        this.LoadBundleSync(this.m_commonPath, this.m_commonVersion, Fl.CommonBundle),
                                                                    ]),
                                                                    this.m_isForceLite
                                                                        ? N.push(this.LoadBundleSync("assets/gameLite", "", Fl.GameBundle))
                                                                        : this.m_isTaDa || N.push(this.LoadBundleSync("assets/game", "", Fl.GameBundle)),
                                                                    (t.next = 75),
                                                                    Promise.all(N)
                                                                );
                                                            case 75:
                                                                this.CheckBundles();
                                                            case 76:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                            );
                                        }),
                                    );
                                    return function (e) {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (r.CheckBundles = function () {
                                    this.m_loadOldType
                                        ? this.m_otherBundle && this.m_gameBundle && this.m_commonBundle && this.LoadIntroResources()
                                        : this.m_commonMainBundle &&
                                          this.m_otherBundle &&
                                          this.m_langTextBundle &&
                                          (!this.m_isForceLite || (this.m_isForceLite && this.m_gameBundle)) &&
                                          this.LoadIntroResources();
                                }),
                                (r.LoadBundle = function (t, e, i, n) {
                                    var o = this;
                                    (n || (n = {}),
                                        (n.version = e),
                                        k.loadBundle(t, n, function (n, r) {
                                            n ? o.LoadBundle(t, e, i) : i(r);
                                        }));
                                }),
                                (r.LoadBundleSync = function (t, e, i, n) {
                                    var o = this;
                                    return new Promise(function (r) {
                                        o.LoadBundle(
                                            t,
                                            e,
                                            function (t) {
                                                if (void 0 !== i)
                                                    switch (i) {
                                                        case Fl.CommonMainBundle:
                                                            o.m_commonMainBundle = t;
                                                            break;
                                                        case Fl.CommonBundle:
                                                            o.m_commonBundle = t;
                                                            break;
                                                        case Fl.OtherBundle:
                                                            o.m_otherBundle = t;
                                                            break;
                                                        case Fl.LangTextBundle:
                                                            o.m_langTextBundle = t;
                                                            break;
                                                        case Fl.GameBundle:
                                                            o.m_gameBundle = t;
                                                    }
                                                r(t);
                                            },
                                            n,
                                        );
                                    });
                                }),
                                (r.LoadIntroResources = function () {
                                    if (
                                        ("109" == this.m_gameId && (window.DiffTime961 = Date.now() - window.StartTime),
                                        this.LoadIntroView(),
                                        this.m_gameBundle && this.m_pagePrefabPaths.length > 0)
                                    )
                                        for (var t = 0; t < this.m_pagePrefabPaths.length; t++) this.LoadIntroCell(t);
                                }),
                                (r.LoadIntroView = function () {
                                    var t = this,
                                        e = "Astt/%s/Intro/Prefab/IntroView";
                                    e = this.m_isTaDa ? wt.formatStr(e, "framework_americas") : wt.formatStr(e, "framework");
                                    var i = this.m_commonMainBundle;
                                    (this.m_loadOldType && (i = this.m_commonBundle),
                                        i.load(
                                            e,
                                            Ct,
                                            function (t, e) {
                                                null == window.SetProgressInterval || window.SetProgressInterval((t / e) * 40 + 60);
                                            },
                                            function (e, i) {
                                                if (e) return (console.error("LoadIntroView ERROR", e), void t.LoadIntroView());
                                                ((t.m_viewNode = it(i)), t.node.addChild(t.m_viewNode), t.CheckIntroResources());
                                            },
                                        ));
                                }),
                                (r.LoadIntroCell = function (t) {
                                    var e = this;
                                    this.m_gameBundle.load(this.m_pagePrefabPaths[t], Ct, function (i, n) {
                                        i ? e.LoadIntroCell(t) : ((e.m_pagePrefabs[t] = n), e.CheckIntroResources());
                                    });
                                }),
                                (r.CheckIntroResources = function () {
                                    if (this.m_viewNode) {
                                        if (this.m_gameBundle && this.m_pagePrefabPaths.length > 0)
                                            for (var t = 0; t < this.m_pagePrefabPaths.length; t++) if (!this.m_pagePrefabs[t]) return;
                                        this.Complete();
                                    }
                                }),
                                (r.Complete = function () {
                                    ("109" == this.m_gameId && (window.DiffTime962 = Date.now() - window.StartTime),
                                        this.m_viewNode.emit("Init", {
                                            ScenePrefabPath: this.m_scenePrefabPath,
                                            GameImgPath: this.m_gameImgPath,
                                            GameId: this.m_gameId,
                                            LogoName: this.m_logoName,
                                            PagePrefabs: this.m_pagePrefabs,
                                            PagePrefabPaths: this.m_pagePrefabPaths,
                                            FeatureSpriteFrames: this.m_featureSpriteFrames,
                                            IsLockLandScope: this.m_isLockLandScope,
                                            IsLockPortrait: this.m_isLockPortrait,
                                            LogoSpriteAtlas: this.m_logoSpriteAtlas,
                                            BgSpriteFrames: this.m_bgSpriteFrames,
                                            CharacterSpriteFrame: this.m_characterSpriteFrame,
                                            InfoNames: this.m_infoNames,
                                            ChilliNum: this.m_chilliNum,
                                            MaxWinNum: this.m_maxWinNum,
                                            SingleLogo: this.m_singleLogo,
                                            IsStreet: this.m_isStreet,
                                            StartSceneTime: this.m_startSceneTime,
                                            OtherBundle: this.m_otherBundle,
                                            CommonBundle: this.m_commonBundle,
                                            CommonPath: this.m_commonPath,
                                            CommonVersion: this.m_commonVersion,
                                            CommonMainBundle: this.m_commonMainBundle,
                                            LangTextBundle: this.m_langTextBundle,
                                            DefaultLangPath: this.m_defaultLangPath,
                                            DefaultLangVersion: this.m_defaultLangVersion,
                                            GameBundle: this.m_gameBundle,
                                            ApiID: this.m_apiId.toString(),
                                            IsTaDa: this.m_isTaDa,
                                            GameShortName: this.m_gameShortName,
                                            AutoplayPanelNo: this.m_autoplayPanelNo,
                                            StyleSetting: this.m_styleSetting,
                                            PlayTypeSetting: this.m_playTypeSetting,
                                            lstZipBundleName: Pl,
                                            IsRemote: this.m_isRemote,
                                            LoadLessRes: !1,
                                            SkipIntro: this.m_skipIntro,
                                            IsSSS: this.m_isSSS,
                                        }));
                                }),
                                (r.GetLanguage = function () {
                                    var t,
                                        e,
                                        i,
                                        n = this.GetLinkParameterByName("lang") || this.GetLinkParameterByName("ln");
                                    if ((null != (t = window) && null != (e = t.location) && null != (i = e.href) && i.includes("/sss-") && (n = Vl.EN), n)) {
                                        var o = this.FormatLang(n);
                                        if ("" !== o) return o;
                                    }
                                    if (!St.isNative) {
                                        var r = this.FormatLang(navigator.language);
                                        if ("" !== r && null != r) return r;
                                    }
                                    return Wl;
                                }),
                                (r.IsTada = function () {
                                    var t = Number(this.GetLinkParameterByName("apiId")),
                                        e = !1;
                                    if (!isNaN(t)) {
                                        ((this.m_apiId = Number(t)), (this.m_isForceLite = -1 !== Pl.indexOf("gameLite") && Ul.includes(this.m_apiId)));
                                        for (var i = 0; i < jl.length; i++)
                                            if (t === jl[i]) {
                                                e = !0;
                                                break;
                                            }
                                    }
                                    var n = this.GetLinkParameterByName("tadaSkin");
                                    n && "1" === n && (e = !0);
                                    var o = this.GetLinkParameterByName("skin");
                                    return (!o || (o != Xl.TADA.toString() && o != Xl.TADA_CASINO.toString()) || (e = !0), e);
                                }),
                                (r.GetLinkParameterByName = function (t, e) {
                                    if ((void 0 === e && (e = null), !e))
                                        if ("undefined" != typeof LobbyData)
                                            try {
                                                "" === (e = LobbyData.url) && et("No URL!");
                                            } catch (t) {
                                                t(JSON.stringify(t));
                                            }
                                        else e = this.CheckReplayUrlAndDecode();
                                    t = t.replace(/[[\]]/g, "\\$&");
                                    var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                                    return i ? (i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "") : null;
                                }),
                                (r.CheckReplayUrlAndDecode = function () {
                                    var t = window.location.href,
                                        e = this.GetLinkParameterByName("replaydata", t);
                                    if (!e) return t;
                                    for (
                                        var i = "0".charCodeAt(0),
                                            n = "9".charCodeAt(0),
                                            o = "a".charCodeAt(0),
                                            r = "z".charCodeAt(0),
                                            a = "A".charCodeAt(0),
                                            s = "Z".charCodeAt(0),
                                            l = "",
                                            c = 0;
                                        c < e.length;
                                        c++
                                    ) {
                                        var u = e.charCodeAt(c);
                                        u >= i && u <= n
                                            ? ((u = n - (u - i)), (l += String.fromCharCode(u)))
                                            : u >= o && u <= r && c % 2 == 0
                                              ? ((u = r - (u - o)), (l += String.fromCharCode(u)))
                                              : u >= a && u <= s && c % 3 == 0
                                                ? ((u = s - (u - a)), (l += String.fromCharCode(u)))
                                                : (l += String.fromCharCode(u));
                                    }
                                    var p = t.split("replaydata=" + e);
                                    return (p.join(""), p + atob(l));
                                }),
                                (r.Log = function (t) {
                                    if (!St.isNative) {
                                        var e = "https://" + window.location.host + "/";
                                        if (-1 == e.indexOf("localhost") && 1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(e)) {
                                            var i = this.GetLinkParameterByName("apiId"),
                                                n = this.GetLinkParameterByName("ssoKey"),
                                                o =
                                                    "https://" +
                                                    (this.GetLinkParameterByName("domain_platform") || this.GetLinkParameterByName("gs") || "gnidnawcs")
                                                        .split("")
                                                        .reverse()
                                                        .join("") +
                                                    "/webservice/event/trigger?";
                                            ((o +=
                                                "AccountID=-1&BrowserSystem=-1&DeviceSystem=-1&GameID=" +
                                                this.m_gameId +
                                                "&GameVersion=" +
                                                new Date().getTime() +
                                                "&EventID=" +
                                                t +
                                                "&EventStatus=0&SSOKey=" +
                                                n +
                                                "&CreateTime=" +
                                                new Date().toISOString() +
                                                "&ApiId=" +
                                                i),
                                                this.Send(o),
                                                (window.DiffTime960 = Date.now() - window.StartTime));
                                        }
                                    }
                                }),
                                (r.Send = function (t) {
                                    var e = { Accept: "application/json, text/javascript, text/plain" },
                                        i = new XMLHttpRequest();
                                    (i.open("GET", t, !0),
                                        e &&
                                            Object.keys(e).forEach(function (t) {
                                                return i.setRequestHeader(t, e[t]);
                                            }),
                                        (i.timeout = 5e3),
                                        (i.onload = function () {}),
                                        (i.onerror = function () {}),
                                        (i.ontimeout = function () {}),
                                        i.send());
                                }),
                                (r.FormatLang = function (t) {
                                    return (t = t.toLocaleLowerCase()) == Hl.CN || t == Vl.CN.toLocaleLowerCase()
                                        ? Hl.CN
                                        : t == Hl.EN || t == Vl.EN.toLocaleLowerCase()
                                          ? Hl.EN
                                          : t == Hl.TH || t == Vl.TH.toLocaleLowerCase()
                                            ? Hl.TH
                                            : t == Hl.VN || t == Vl.VN.toLocaleLowerCase()
                                              ? Hl.VN
                                              : t == Hl.ID || t == Vl.ID.toLocaleLowerCase()
                                                ? Hl.ID
                                                : t == Hl.HI || t == Vl.HI.toLocaleLowerCase()
                                                  ? Hl.HI
                                                  : t == Hl.TA || t == Vl.TA.toLocaleLowerCase()
                                                    ? Hl.TA
                                                    : t == Hl.MM || t == Vl.MM.toLocaleLowerCase()
                                                      ? Hl.MM
                                                      : t == Hl.JP || t == Vl.JP.toLocaleLowerCase()
                                                        ? Hl.JP
                                                        : t == Hl.MS || t == Vl.MS.toLocaleLowerCase()
                                                          ? Hl.MS
                                                          : t == Hl.KO || t == Vl.KO.toLocaleLowerCase()
                                                            ? Hl.KO
                                                            : t == Hl.BN || t == Vl.BN.toLocaleLowerCase()
                                                              ? Hl.BN
                                                              : t == Hl.ES || t == Vl.ES.toLocaleLowerCase()
                                                                ? Hl.ES
                                                                : t == Hl.PT || t == Vl.PT.toLocaleLowerCase()
                                                                  ? Hl.PT
                                                                  : t == Hl.IT || t == Vl.IT.toLocaleLowerCase()
                                                                    ? Hl.IT
                                                                    : t == Hl.SE || t == Vl.SE.toLocaleLowerCase()
                                                                      ? Hl.SE
                                                                      : t == Hl.DE || t == Vl.DE.toLocaleLowerCase()
                                                                        ? Hl.DE
                                                                        : t == Hl.DADK || t == Vl.DADK.toLocaleLowerCase()
                                                                          ? Hl.DADK
                                                                          : t == Hl.RORO || t == Vl.RORO.toLocaleLowerCase()
                                                                            ? Hl.RORO
                                                                            : t == Hl.NLNL || t == Vl.NLNL.toLocaleLowerCase()
                                                                              ? Hl.NLNL
                                                                              : t == Hl.TRTR.toLocaleLowerCase() || t == Vl.TRTR.toLocaleLowerCase()
                                                                                ? Hl.TRTR
                                                                                : t == Hl.RURU.toLocaleLowerCase() || t == Vl.RURU.toLocaleLowerCase()
                                                                                  ? Hl.RURU
                                                                                  : t == Hl.GRGR.toLocaleLowerCase() || t == Vl.GRGR.toLocaleLowerCase()
                                                                                    ? Hl.GRGR
                                                                                    : t == Hl.FRFR.toLocaleLowerCase() || t == Vl.FRFR.toLocaleLowerCase()
                                                                                      ? Hl.FRFR
                                                                                      : "";
                                }),
                                o
                            );
                        })(G)).prototype,
                        "m_gameShortName",
                        [Ps],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return "";
                            },
                        },
                    )),
                    (ul = t(ll.prototype, "m_scenePrefabPath", [Ms], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (pl = t(ll.prototype, "m_gameImgPath", [Ds], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (hl = t(ll.prototype, "m_gameId", [zs], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (ml = t(ll.prototype, "m_logoName", [Gs], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (_l = t(ll.prototype, "m_isLockLandScope", [Vs], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (dl = t(ll.prototype, "m_isLockPortrait", [Hs], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (fl = t(ll.prototype, "m_isStreet", [Ws], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (yl = t(ll.prototype, "m_singleLogo", [Us], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (gl = t(ll.prototype, "m_logoSpriteAtlas", [js], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Sl = t(ll.prototype, "m_pagePrefabPaths", [Xs], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (bl = t(ll.prototype, "m_infoNames", [Ys], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (wl = t(ll.prototype, "m_featureSpriteFrames", [Ks], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Cl = t(ll.prototype, "m_bgSpriteFrames", [Zs], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (vl = t(ll.prototype, "m_characterSpriteFrame", [qs], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (El = t(ll.prototype, "m_chilliNum", [Js], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (Tl = t(ll.prototype, "m_maxWinNum", [Qs], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (Ol = t(ll.prototype, "m_autoplayPanelNo", [$s], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return zl.None;
                        },
                    })),
                    (Nl = t(ll.prototype, "m_isWatting", [tl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Bl = t(ll.prototype, "m_skipIntro", [el], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Il = t(ll.prototype, "m_styleSetting", [il], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return new rc();
                        },
                    })),
                    (Ll = t(ll.prototype, "m_playTypeSetting", [nl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return new ac();
                        },
                    })),
                    (Rl = t(ll.prototype, "m_isRemote", [ol], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Al = t(ll.prototype, "m_isSSS", [rl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (xl = t(ll.prototype, "m_ReomveVersion", [al], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (sl = ll)),
                ));
            (v._RF.pop(), v._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", void 0));
            var sc = E.ccclass,
                lc = E.property,
                cc = function (t, e, i, n, o, r) {
                    ((this.name = t), (this.height = e), (this.width = i), (this.ratio = n), (this.statusHeight = o), (this.homeHeight = r));
                },
                uc = [
                    new cc("iPhone 6.5-inch", 896, 414, 3, 44, 34),
                    new cc("iPhone 6.1-inch", 896, 414, 2, 44, 34),
                    new cc("iPhone 5.8-inch", 812, 375, 3, 44, 34),
                    new cc("iPhone 5.5-inch", 736, 414, 3, 18, 0),
                    new cc("iPhone 4.7-inch", 667, 375, 2, 20, 0),
                    new cc("iPhone 4-inch", 568, 320, 2, 20, 0),
                    new cc("iPhone 3.5-inch", 480, 320, 2, 20, 0),
                    new cc("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0),
                    new cc("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0),
                    new cc("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0),
                    new cc("iPad 9.7-inch Retina", 1024, 768, 2, 20, 0),
                    new cc("iPad", 1024, 768, 1, 20, 0),
                    new cc("iPad Mini Retina", 1024, 768, 2, 20, 0),
                    new cc("iPad Mini", 1024, 768, 1, 20, 0),
                ],
                pc = "mask",
                hc = "mask_close_tip",
                mc = "mask_close",
                _c = "bar",
                dc = {
                    tw: ["滑動無效時, 請點擊此處進入遊戲. ❎", "請解除豎排方向鎖定, 並將手機水平放置."],
                    cn: ["滑动无效时, 请点击此处进入游戏. ❎", "请解除竖排方向锁定, 并将手机水平放置."],
                    th: [
                        "เมื่อสไลด์ไม่ถูกต้อง กรุณาคลิกที่นี่เพื่อเข้าสู่เกม ❎",
                        "โปรดทำการปลดล็อกรูปแบบทิศทาง เพื่อสามารถเปลี่ยนรูปแบบทิศทางตามระดับโทรศัพท์ได้",
                    ],
                    vn: ["Nếu không thể lthao tác, hãy chạm vào đây để vào game. ❎", "Hãy mở khóa xoay hướng, đồng thời xoay ngang màn hình."],
                    id: [
                        "Klik di sini untuk masuk ke permainan, ketika tidak bisa di scroll. ❎",
                        "Silakan buka kunci posisi vertikal, dan letakkan telepon seluler secara horizontal.",
                    ],
                    mm: ["When the slide is invalid, please click here. ❎", "Please unlock the vertical direction and place the phone horizontally."],
                    jp: ["スライドで入れない場合は、ここをタップしてください。 ❎", "垂直固定を解除し、端末を水平方向に置いてください。"],
                    en: ["If swiping does not work, please tap here. ❎", "Please unlock screen rotation and hold the phone horizontally."],
                },
                fc = ["tw", "zh-TW"],
                yc = ["cn", "zh-CN"],
                gc = ["en", "en-US"],
                Sc = ["th", "th-TH"],
                bc = ["vn", "vi-VN"],
                wc = ["id", "id-ID"],
                Cc = ["hi", "hi-IN"],
                vc = ["ta", "ta-IN"],
                Ec = ["mm", "my-MM"],
                Tc = ["jp", "ja-JP"],
                Oc = [1131],
                Nc = [1864, 1002];
            ((Yl = lc(Boolean)),
                (Kl = lc(Boolean)),
                (Zl = lc(Boolean)),
                (ql = lc(Boolean)),
                (Jl = lc(Number)),
                sc(
                    ((tc = t(
                        ($l = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "isLandscape", tc, n(e)),
                                    i(e, "isPortrait", ec, n(e)),
                                    i(e, "isIOS", ic, n(e)),
                                    i(e, "isAndroid", nc, n(e)),
                                    i(e, "android_Apiid", oc, n(e)),
                                    (e.m_mask = null),
                                    (e.m_isScrolling = !1),
                                    (e.m_isblock = !1),
                                    (e.m_scrollInterval = void 0),
                                    (e.m_scrollTimeOut = void 0),
                                    (e.m_backGround = null),
                                    (e.m_isLandscape = !0),
                                    e
                                );
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.onLoad = function () {
                                    St.isNative || this.Init();
                                }),
                                (r.GetDeviceName = function () {
                                    if (St.os === St.OS.IOS) {
                                        var t = this.GetiOSDevice();
                                        if (t) return t.name;
                                    } else if (St.os === St.OS.ANDROID) {
                                        var e = /Mozilla\/5.0\s*\([^()]*?(Android[^()]*?);\s*([^()]*?)\)/g.exec(navigator.userAgent);
                                        if (e && e.length > 2) return e[2].split(" Build")[0];
                                    }
                                    return "unknown";
                                }),
                                (r.CreateHtmlTag = function () {
                                    if (!this.m_backGround) {
                                        this.node.active = !0;
                                        var t = document.body;
                                        t.style.overflow = "visible";
                                        var e = document.getElementById("Cocos3dGameContainer");
                                        ((e.style.overflow = "hidden"), (e.style.position = "fixed"));
                                        var i = document.createElement("div");
                                        ((i.id = _c), (i.style.position = "absolute"), (i.style.height = "100vh"));
                                        var n = document.createElement("div");
                                        ((n.id = pc),
                                            (n.style.backgroundColor = "rgba(0, 0, 0, 0.7)"),
                                            (n.style.height = "150vh"),
                                            (n.style.width = "100vw"),
                                            (n.style.zIndex = "99"),
                                            (n.style.display = "none"),
                                            (n.style.position = "absolute"),
                                            (n.style.top = "0%"),
                                            (n.style.left = "0%"),
                                            (this.m_backGround = n));
                                        var o = document.createElement("div");
                                        ((o.id = hc),
                                            (o.style.width = "70vw"),
                                            (o.style.top = "28vh"),
                                            (o.style.left = "50vw"),
                                            (o.style.transform = "translate(-50%, -50%)"),
                                            (o.style.fontSize = "18px"),
                                            (o.style.fontWeight = "bold"),
                                            (o.style.color = "#FFFFFF"),
                                            (o.style.position = "fixed"));
                                        var r = document.createElement("div");
                                        ((r.style.top = "16vh"),
                                            (r.style.left = "50vw"),
                                            (r.style.transform = "translate(-50%, -50%)"),
                                            (r.style.position = "fixed"));
                                        var a = document.createElement("div");
                                        ((a.id = mc),
                                            (a.style.width = "90vw"),
                                            (a.style.fontSize = "24px"),
                                            (a.style.fontWeight = "bold"),
                                            (a.style.color = "#EEE8AA"),
                                            (a.style.wordWrap = "break-word"));
                                        var s = document.createElement("div");
                                        ((s.style.fontSize = "48px"), (s.style.fontWeight = "bold"), (s.style.color = "#EEE8AA"));
                                        var l = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                        ((l.style.width = "150px"),
                                            (l.style.height = "150px"),
                                            (l.style.position = "fixed"),
                                            (l.style.top = "75vh"),
                                            (l.style.left = "50vw"),
                                            (l.style.transform = "translate(-50%, -50%)"),
                                            (l.style.animationDuration = "2s"),
                                            (l.style.animationName = "fullscreen-swipe"),
                                            (l.style.animationIterationCount = "infinite"));
                                        var c = document.createElement("style"),
                                            u = document.createTextNode("@keyframes fullscreen-swipe {from { top:80% }to { top:50% }}");
                                        (c.appendChild(u), l.appendChild(c), l.setAttribute("viewBox", "0 0 547.371 547.371"));
                                        var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                        (p.setAttribute("fill", "#FFFFFF"),
                                            p.setAttribute(
                                                "d",
                                                "M136.623,52.13v164.027l-23.875,23.877c-54.503,54.479-54.503,143.151,0,197.627l57.317,57.292c33.806,33.808,78.743,52.416,126.521,52.416c98.658,0,178.912-80.254,178.912-178.911V208.522c0-28.752-23.381-52.131-52.156-52.131c-10.713,0-20.695,3.258-28.984,8.836c-7.143-20.308-26.51-34.902-49.211-34.902c-10.713,0-20.695,3.26-28.984,8.838c-7.141-20.307-26.509-34.901-49.21-34.901c-9.487,0-18.402,2.555-26.065,7.012V52.132c0-28.75-23.38-52.131-52.131-52.131C160.003,0.001,136.623,23.38,136.623,52.13z M214.845,52.13v169.425c0,7.192,5.839,13.032,13.033,13.032s13.033-5.84,13.033-13.032v-65.162c0-14.39,11.703-26.066,26.064-26.066c14.362,0,26.063,11.678,26.063,26.066v39.098c0,7.193,5.84,13.033,13.033,13.033s13.033-5.84,13.033-13.033v-13.033c0-14.389,11.703-26.063,26.064-26.063c14.363,0,26.064,11.676,26.064,26.063v26.064c0,7.192,5.84,13.033,13.033,13.033s13.033-5.841,13.033-13.033c0-14.39,11.703-26.064,26.064-26.064c14.359,0,26.064,11.676,26.064,26.064v159.938c0,84.27-68.578,152.848-152.848,152.848c-40.819,0-79.188-15.899-108.066-44.78l-57.317-57.292c-22.155-22.183-33.233-51.271-33.233-80.385c0-29.115,11.078-58.203,33.233-80.387l5.448-5.446v72.8c0,7.192,5.839,13.033,13.032,13.033c7.194,0,13.033-5.841,13.033-13.033V52.13c0-14.389,11.704-26.065,26.065-26.065C203.141,26.063,214.845,37.743,214.845,52.13z",
                                            ),
                                            t.appendChild(n),
                                            n.appendChild(o),
                                            n.appendChild(r),
                                            l.appendChild(p),
                                            n.appendChild(l),
                                            r.appendChild(a),
                                            r.appendChild(s),
                                            t.appendChild(i));
                                    }
                                }),
                                (r.Init = function () {
                                    var t = this,
                                        e = !1;
                                    "undefined" != typeof LobbyData && (e = LobbyData.pwa);
                                    var i = Math.floor(Number(this.GetLinkParameterByName("apiId")));
                                    if (
                                        (this.isPortrait
                                            ? (this.m_isblock = Oc.indexOf(i) >= 0)
                                            : this.isAndroid && this.android_Apiid.length > 0 && this.android_Apiid.indexOf(i) >= 0 && (this.isAndroid = !1),
                                        this.m_isblock || (this.m_isblock = Nc.indexOf(i) >= 0),
                                        !e && !this.m_isblock)
                                    )
                                        if ((this.AddGameViewMask(), (this.isIOS = !1), St.os == St.OS.IOS && 0 == this.IsWebview() && this.isIOS))
                                            if (
                                                (this.CreateHtmlTag(),
                                                this.SetCloseContent(),
                                                (this.m_backGround.style.display = "inline"),
                                                this.SetShowMask(),
                                                1 == this.IsChrome())
                                            ) {
                                                var n = this.GetiOSDevice();
                                                if (null != n) {
                                                    var o = 0.99 * (screen.height - n.statusHeight - n.homeHeight - 20),
                                                        r = 0.99 * (screen.width - n.statusHeight - 20);
                                                    ((document.body.onresize = function () {
                                                        (window.innerHeight >= window.innerWidth ? o : r) <= window.innerHeight ? t.HideMask() : t.ShowMask();
                                                    }),
                                                        window.addEventListener(
                                                            "scroll",
                                                            function () {
                                                                return (t.m_isScrolling = !0);
                                                            },
                                                            { capture: !1, passive: !0 },
                                                        ),
                                                        this.m_backGround.addEventListener("touchend", function () {
                                                            return t.ScrollReset();
                                                        }));
                                                } else this.HideMask();
                                            } else {
                                                var a = document.body.onresize;
                                                document.body.onresize = function () {
                                                    a && a(null, null);
                                                    var e = document.documentElement.scrollWidth,
                                                        i = document.documentElement.scrollHeight,
                                                        n = e > i;
                                                    (document.getElementById(_c).clientHeight == window.innerHeight ? t.HideMask() : t.SetShowMask(n),
                                                        window.addEventListener(
                                                            "scroll",
                                                            function () {
                                                                return (t.m_isScrolling = !0);
                                                            },
                                                            { capture: !1, passive: !0 },
                                                        ),
                                                        t.m_backGround.addEventListener("touchend", function () {
                                                            return t.ScrollReset();
                                                        }),
                                                        (t.m_isLandscape = e > i));
                                                };
                                            }
                                        else if (St.os == St.OS.ANDROID && 0 == this.IsWebview() && this.isAndroid)
                                            if (St.browserType == St.BrowserType.MOBILE_QQ || St.browserType == St.BrowserType.UC);
                                            else {
                                                var s = function () {
                                                    t.HasFullscreen() && !t.IsFullscreen() && (t.m_mask.active = !0);
                                                };
                                                ((document.body.onresize = s), s());
                                            }
                                }),
                                (r.SetShowMask = function (t) {
                                    if ((void 0 === t && (t = void 0), this.IsIOS15orOver()))
                                        if (void 0 === t) {
                                            var e = document.documentElement.scrollWidth,
                                                i = document.documentElement.scrollHeight;
                                            ((this.m_isLandscape = e > i),
                                                this.m_isLandscape
                                                    ? this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3)
                                                        ? (this.m_backGround.style.visibility = "hidden")
                                                        : (this.m_backGround.style.visibility = "visible")
                                                    : this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3)
                                                      ? (this.m_backGround.style.visibility = "visible")
                                                      : (this.m_backGround.style.visibility = "hidden"));
                                        } else
                                            (document.getElementById(_c).clientHeight,
                                                window.innerHeight,
                                                (t === this.m_isLandscape && document.getElementById(_c).clientHeight === window.innerHeight) ||
                                                    (t
                                                        ? this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3)
                                                            ? (this.m_backGround.style.visibility = "hidden")
                                                            : (this.m_backGround.style.visibility = "visible")
                                                        : this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3)
                                                          ? (this.m_backGround.style.visibility = "visible")
                                                          : (this.m_backGround.style.visibility = "hidden")));
                                    else this.ShowMask();
                                }),
                                (r.SetCloseContent = function () {
                                    var t = this,
                                        e = this.GetLang("lang");
                                    e = this.ChangeLang(e);
                                    var i = document.getElementById(mc),
                                        n = this.isLandscape ? document.getElementById(hc) : null;
                                    (dc[e]
                                        ? ((i.textContent = dc[e][0]), n && (n.textContent = dc[e][1]))
                                        : ((i.textContent = dc[gc[0]][0]), n && (n.textContent = dc[gc[0]][1])),
                                        i.onclick ||
                                            (i.onclick = function () {
                                                t.HideMask();
                                            }));
                                }),
                                (r.GetLang = function (t) {
                                    var e = St.localStorage.getItem("LobbyLanguage");
                                    if (!e || "" == e) {
                                        if (-1 != (e = "undefined" != typeof LobbyData ? LobbyData.url : window.location.href).indexOf("?"))
                                            for (var i = e.split("?")[1].split("&"), n = 0; n < i.length; n++)
                                                if (i[n].split("=")[0] == t) return i[n].split("=")[1];
                                        return gc[0];
                                    }
                                    return e;
                                }),
                                (r.ChangeLang = function (t) {
                                    switch (t) {
                                        case fc[1]:
                                            return fc[0];
                                        case yc[1]:
                                            return yc[0];
                                        case Sc[1]:
                                            return Sc[0];
                                        case bc[1]:
                                            return bc[0];
                                        case wc[1]:
                                            return wc[0];
                                        case Cc[1]:
                                            return Cc[0];
                                        case vc[1]:
                                            return vc[0];
                                        case Ec[1]:
                                            return Ec[0];
                                        case Tc[1]:
                                            return Tc[0];
                                        default:
                                            return gc[0];
                                    }
                                }),
                                (r.ShowMask = function () {
                                    for (
                                        var t = this, e = document.getElementById("Cocos3dGameContainer").getElementsByTagName("div"), i = 0, n = 0;
                                        n < e.length;
                                        n++
                                    ) {
                                        var o = e[n].getElementsByTagName("iframe");
                                        if (o && o.length > 0) {
                                            i = n;
                                            break;
                                        }
                                    }
                                    var r = e[i];
                                    (r && "hidden" !== r.style.visibility) ||
                                        ((this.m_backGround.style.visibility = "visible"),
                                        this.m_mask && (this.m_mask.active = !0),
                                        window.scrollTo(0, 0),
                                        this.m_scrollInterval && clearInterval(this.m_scrollInterval),
                                        (this.m_scrollInterval = setInterval(function () {
                                            t.m_isScrolling && ((t.m_isScrolling = !1), t.ScrollReset());
                                        }, 250)));
                                }),
                                (r.ScrollReset = function () {
                                    var t = this;
                                    (window.scrollTo(0, 0),
                                        this.m_scrollTimeOut && clearTimeout(this.m_scrollTimeOut),
                                        (this.m_scrollTimeOut = setTimeout(function () {
                                            (window.scrollTo(0, 0), clearInterval(t.m_scrollInterval), (t.m_scrollInterval = null));
                                        }, 250)));
                                }),
                                (r.HideMask = function () {
                                    var t = this;
                                    (window.scrollTo(0, 0),
                                        this.m_backGround && (this.m_backGround.style.visibility = "hidden"),
                                        this.scheduleOnce(function () {
                                            t.m_mask && (t.m_mask.active = !1);
                                        }, 0));
                                }),
                                (r.AddGameViewMask = function () {
                                    var t = this,
                                        e = ft.getScene();
                                    this.m_mask || e.getChildByName("ScrollForMask") || St.browserType == St.BrowserType.FIREFOX
                                        ? !this.m_mask && e.getChildByName("ScrollForMask") && (this.m_mask = Ot("ScrollForMask"))
                                        : ((this.m_mask = new B()),
                                          (this.m_mask.name = "ScrollForMask"),
                                          this.m_mask.addComponent(N).setContentSize(new Nt(2e3, 2e3)),
                                          this.m_mask.addComponent(ut),
                                          (this.m_mask.active = !1),
                                          e.addChild(this.m_mask),
                                          this.m_mask.setSiblingIndex(e.children.length),
                                          this.m_mask.on(B.EventType.TOUCH_END, function () {
                                              if (St.os == St.OS.IOS && 0 == t.IsWebview()) {
                                                  var e = t.m_backGround;
                                                  e && "hidden" == e.style.visibility && (t.m_mask.active = !1);
                                              } else St.os == St.OS.ANDROID && 0 == t.IsWebview() && t.Fullscreen();
                                          }));
                                }),
                                (r.IsWebview = function () {
                                    var t = navigator.userAgent,
                                        e = new RegExp("(" + ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)", "Android.*(wv|.0.0.0)"].join("|") + ")", "ig");
                                    return Boolean(t.match(e));
                                }),
                                (r.IsChrome = function () {
                                    return /CriOS/.test(navigator.userAgent);
                                }),
                                (r.GetiOSDevice = function () {
                                    for (var t, e = w(uc); !(t = e()).done; ) {
                                        var i = t.value;
                                        if (screen.height === i.height && screen.width === i.width && window.devicePixelRatio === i.ratio) return i;
                                    }
                                    return null;
                                }),
                                (r.HasFullscreen = function () {
                                    return (
                                        null !=
                                        (document.fullscreenEnabled ||
                                            document.mozFullScreenEnabled ||
                                            document.webkitFullscreenEnabled ||
                                            document.msFullscreenEnabled)
                                    );
                                }),
                                (r.IsFullscreen = function () {
                                    return (
                                        null !=
                                        (document.fullscreenElement ||
                                            document.webkitFullscreenElement ||
                                            document.mozFullScreenElement ||
                                            document.msFullscreenElement)
                                    );
                                }),
                                (r.Fullscreen = function () {
                                    try {
                                        var t =
                                                document.documentElement.requestFullscreen ||
                                                document.documentElement.webkitRequestFullscreen ||
                                                document.documentElement.mozRequestFullScreen ||
                                                document.documentElement.msRequestFullscreen,
                                            e =
                                                document.exitFullscreen ||
                                                document.webkitExitFullscreen ||
                                                document.mozCancelFullScreen ||
                                                document.msExitFullscreen;
                                        if (this.HasFullscreen())
                                            if (this.IsFullscreen()) e.call(document);
                                            else
                                                try {
                                                    var i = t.call(document.documentElement);
                                                    i instanceof Promise && i.catch(function () {});
                                                } catch (t) {}
                                        else console.log("not support fullscreen.");
                                        this.m_mask.active = !1;
                                    } catch (t) {
                                        this.m_mask.active = !1;
                                    }
                                }),
                                (r.GetLinkParameterByName = function (t) {
                                    var e = window.location.href;
                                    t = t.replace(/[[]]/g, "\\$&");
                                    var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                                    return i ? (i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "") : null;
                                }),
                                (r.IsIOS15orOver = function () {
                                    return St.os == St.OS.IOS && /iPhone OS 15/.test(window.navigator.userAgent);
                                }),
                                (r.IsIOS15Version = function (t) {
                                    return St.os == St.OS.IOS && -1 !== window.navigator.userAgent.search("iPhone OS 15_" + t);
                                }),
                                o
                            );
                        })(G)).prototype,
                        "isLandscape",
                        [Yl],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        },
                    )),
                    (ec = t($l.prototype, "isPortrait", [Kl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (ic = t($l.prototype, "isIOS", [Zl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !0;
                        },
                    })),
                    (nc = t($l.prototype, "isAndroid", [ql], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !0;
                        },
                    })),
                    (oc = t($l.prototype, "android_Apiid", [Jl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Ql = $l)),
                ));
            v._RF.pop();
        },
    };
});

(function (r) {
    r("virtual:///prerequisite-imports/main", "chunks:///main.js");
})(function (mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
        return {
            setters: [
                function (_m) {
                    var _exportObj = {};

                    for (var _key in _m) {
                        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                    }

                    _export(_exportObj);
                },
            ],
            execute: function () {},
        };
    });
});
