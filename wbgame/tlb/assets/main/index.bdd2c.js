System.register("chunks:///main.js", ["./index-bf82178b.js", "cc"], function () {
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
        m,
        h,
        p,
        d,
        _,
        f,
        y,
        g,
        S,
        b,
        v,
        w,
        C,
        E,
        T,
        O,
        N,
        I,
        A,
        k,
        x,
        R,
        L,
        P,
        B,
        F,
        M,
        D,
        z,
        G,
        H,
        V,
        W,
        U,
        j,
        J,
        X,
        q,
        K,
        Y,
        Z,
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
        mt,
        ht,
        pt,
        dt,
        _t,
        ft,
        yt,
        gt,
        St,
        bt,
        vt,
        wt,
        Ct,
        Et,
        Tt,
        Ot,
        Nt,
        It,
        At,
        kt;
    return {
        setters: [
            function (C) {
                ((t = C._),
                    (e = C.a),
                    (i = C.b),
                    (n = C.c),
                    (o = C.d),
                    (r = C.n),
                    (a = C.e),
                    (s = C.f),
                    (l = C.g),
                    (c = C.h),
                    (u = C.S),
                    (m = C.i),
                    (h = C.j),
                    (p = C.k),
                    (d = C.l),
                    (_ = C.m),
                    (f = C.C),
                    (y = C.o),
                    (g = C.p),
                    (S = C.q),
                    (b = C.r),
                    (v = C.s),
                    (w = C.t));
            },
            function (t) {
                ((C = t.cclegacy),
                    (E = t._decorator),
                    (T = t.Color),
                    (O = t.ccenum),
                    (N = t.UITransform),
                    (I = t.Node),
                    (A = t.SpriteFrame),
                    (k = t.EventHandler),
                    (x = t.Vec3),
                    (R = t.Sprite),
                    (L = t.math),
                    (P = t.assetManager),
                    (B = t.Label),
                    (F = t.lerp),
                    (M = t.UIRenderer),
                    (D = t.NodeEventType),
                    (z = t.TransformBit),
                    (G = t.Component),
                    (H = t.Material),
                    (V = t.Gradient),
                    (W = t.v4),
                    (U = t.Texture2D),
                    (j = t.clamp01),
                    (J = t.color),
                    (X = t.EffectAsset),
                    (q = t.CCInteger),
                    (K = t.CCBoolean),
                    (Y = t.CCFloat),
                    (Z = t.log),
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
                    (mt = t.CCString),
                    (ht = t.v2),
                    (pt = t.director),
                    (dt = t.Director),
                    (_t = t.UIOpacity),
                    (ft = t.RichText),
                    (yt = t.Tween),
                    (gt = t.ScrollView),
                    (St = t.JsonAsset),
                    (bt = t.isValid),
                    (vt = t.CCClass),
                    (wt = t.sys),
                    (Ct = t.SpriteAtlas),
                    (Et = t.js),
                    (Tt = t.Prefab),
                    (Ot = t.settings),
                    (Nt = t.Settings),
                    (It = t.VERSION),
                    (At = t.find),
                    (kt = t.Size));
            },
        ],
        execute: function () {
            var xt,
                Rt,
                Lt,
                Pt,
                Bt,
                Ft,
                Mt,
                Dt,
                zt,
                Gt,
                Ht,
                Vt,
                Wt,
                Ut,
                jt,
                Jt,
                Xt,
                qt,
                Kt,
                Yt,
                Zt,
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
                me,
                he,
                pe,
                de,
                _e,
                fe,
                ye,
                ge,
                Se,
                be,
                ve,
                we,
                Ce,
                Ee;
            C._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", void 0);
            var Te,
                Oe,
                Ne,
                Ie = E.ccclass,
                Ae = E.executionOrder,
                ke = E.requireComponent,
                xe = E.type,
                Re = E.executeInEditMode,
                Le = E.property,
                Pe = new T();
            (!(function (t) {
                ((t[(t.NONE = 0)] = "NONE"),
                    (t[(t.COLOR = 1)] = "COLOR"),
                    (t[(t.SPRITE = 2)] = "SPRITE"),
                    (t[(t.SCALE = 4)] = "SCALE"),
                    (t[(t.COLOR_SPRITE = 3)] = "COLOR_SPRITE"),
                    (t[(t.COLOR_SCALE = 5)] = "COLOR_SCALE"),
                    (t[(t.SPRITE_SCALE = 6)] = "SPRITE_SCALE"),
                    (t[(t.ALL = 7)] = "ALL"));
            })(Te || (Te = {})),
                O(Te),
                (function (t) {
                    ((t.NORMAL = "normal"), (t.HOVER = "hover"), (t.PRESSED = "pressed"), (t.DISABLED = "disabled"));
                })(Oe || (Oe = {})),
                (function (t) {
                    t.CLICK = "click";
                })(Ne || (Ne = {})));
            var Be, Fe, Me, De, ze, Ge, He, Ve, We, Ue, je, Je, Xe, qe, Ke, Ye, Ze, Qe, $e, ti, ei, ii, ni, oi, ri, ai, si, li, ci;
            ((xt = Ie("ButtonPro")),
                (Rt = Ae(110)),
                (Lt = ke(N)),
                (Pt = Le({ type: I, displayOrder: 0, tooltip: "i18n:button.target" })),
                (Bt = Le({ displayOrder: 1, tooltip: "i18n:button.interactable" })),
                (Ft = Le({ type: Te, displayOrder: 2, tooltip: "i18n:button.transition" })),
                (Mt = Le({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.normal_color" })),
                (Dt = Le({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.pressed_color" })),
                (zt = Le({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.hover_color" })),
                (Gt = Le({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.disabled_color" })),
                (Ht = Le({ group: { name: "SCALE" }, displayOrder: 4, tooltip: "i18n:button.duration", min: 0, max: 10 })),
                (Vt = Le({ group: { name: "SCALE" }, displayOrder: 4, tooltip: "i18n:button.zoom_scale" })),
                (Wt = Le({ group: { name: "SPRITE" }, type: A, displayOrder: 3, tooltip: "i18n:button.normal_sprite" })),
                (Ut = Le({ group: { name: "SPRITE" }, type: A, displayOrder: 3, tooltip: "i18n:button.pressed_sprite" })),
                (jt = Le({ group: { name: "SPRITE" }, type: A, displayOrder: 3, tooltip: "i18n:button.hover_sprite" })),
                (Jt = Le({ group: { name: "SPRITE" }, type: A, displayOrder: 3, tooltip: "i18n:button.disabled_sprite" })),
                (Xt = xe([k])),
                (qt = Le({ serializable: !0, displayOrder: 20, tooltip: "i18n:button.click_events" })),
                (Kt = Le({ serializable: !0 })),
                (Yt = Le({ serializable: !0 })),
                (Zt = Le({ serializable: !0 })),
                (Qt = Le({ serializable: !0 })),
                ($t = Le({ serializable: !0 })),
                (te = Le({ serializable: !0 })),
                (ee = Le({ serializable: !0 })),
                (ie = Le({ serializable: !0 })),
                (ne = Le({ serializable: !0 })),
                (oe = Le({ serializable: !0 })),
                (re = Le({ serializable: !0 })),
                (ae = Le({ serializable: !0 })),
                (se = Le({ serializable: !0 })),
                xt(
                    (le =
                        Rt(
                            (le =
                                Lt(
                                    (le =
                                        Re(
                                            (((Ee = (function (t) {
                                                function r() {
                                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                                    return (
                                                        (e = t.call.apply(t, [this].concat(r)) || this),
                                                        i(e, "clickEvents", ue, n(e)),
                                                        i(e, "_interactable", me, n(e)),
                                                        i(e, "_transition", he, n(e)),
                                                        i(e, "_normalColor", pe, n(e)),
                                                        i(e, "_hoverColor", de, n(e)),
                                                        i(e, "_pressedColor", _e, n(e)),
                                                        i(e, "_disabledColor", fe, n(e)),
                                                        i(e, "_normalSprite", ye, n(e)),
                                                        i(e, "_hoverSprite", ge, n(e)),
                                                        i(e, "_pressedSprite", Se, n(e)),
                                                        i(e, "_disabledSprite", be, n(e)),
                                                        i(e, "_duration", ve, n(e)),
                                                        i(e, "_zoomScale", we, n(e)),
                                                        i(e, "_target", Ce, n(e)),
                                                        (e._pressed = !1),
                                                        (e._hovered = !1),
                                                        (e._fromColor = new T()),
                                                        (e._toColor = new T()),
                                                        (e._time = 0),
                                                        (e._transitionFinished = !0),
                                                        (e._fromScale = new x()),
                                                        (e._toScale = new x()),
                                                        (e._originalScale = null),
                                                        (e._sprite = null),
                                                        (e._targetScale = new x()),
                                                        e
                                                    );
                                                }
                                                e(r, t);
                                                var a = r.prototype;
                                                return (
                                                    (a.onLoad = function () {
                                                        if (!this.getComponent(R)) {
                                                            var t = this.addComponent(R);
                                                            if (t) {
                                                                ((t.sizeMode = R.SizeMode.CUSTOM), (t.type = R.Type.SLICED));
                                                                var e = this.node.getComponent(N);
                                                                e && (e.contentSize = L.size(120, 40));
                                                            }
                                                            var i = P.assets.get("20835ba4-6145-4fbc-a58a-051ce700aa3e@f9941");
                                                            i &&
                                                                (t && !t.spriteFrame && (t.spriteFrame = i),
                                                                this._normalSprite || (this._normalSprite = i),
                                                                this._hoverSprite || (this._hoverSprite = i));
                                                            var n = P.assets.get("544e49d6-3f05-4fa8-9a9e-091f98fc2ce8@f9941");
                                                            n && (this._pressedSprite || (this._pressedSprite = n));
                                                            var o = P.assets.get("951249e0-9f16-456d-8b85-a6ca954da16b@f9941");
                                                            o && (this._disabledSprite || (this._disabledSprite = o));
                                                        }
                                                        if (!this.node.getChildByName("Label")) {
                                                            var r = new I("Label"),
                                                                a = r.addComponent(B);
                                                            ((a.node.layer = this.node.layer),
                                                                (a.string = "ButtonPro"),
                                                                (r.parent = this.node),
                                                                (a.color = T.BLACK),
                                                                (a.fontSize = 20));
                                                        }
                                                    }),
                                                    (a.__preload = function () {
                                                        this.target || (this.target = this.node);
                                                        var t = this.node.getComponent(R);
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
                                                        if (!this._transitionFinished && e && (this._transition & Te.COLOR || this._transition & Te.SCALE)) {
                                                            this._time += t;
                                                            var i = 1;
                                                            if (
                                                                (this._duration > 0 && (i = this._time / this._duration),
                                                                i >= 1 && (i = 1),
                                                                this._transition & Te.COLOR)
                                                            ) {
                                                                var n = e._uiProps.uiComp;
                                                                (T.lerp(Pe, this._fromColor, this._toColor, i), n && (n.color = Pe));
                                                            }
                                                            (this.transition & Te.SCALE &&
                                                                (e.getScale(this._targetScale),
                                                                (this._targetScale.x = F(this._fromScale.x, this._toScale.x, i)),
                                                                (this._targetScale.y = F(this._fromScale.y, this._toScale.y, i)),
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
                                                            if (e & Te.COLOR && this._interactable) {
                                                                var i = t.getComponent(M);
                                                                i && (i.color = this._normalColor);
                                                            }
                                                            (e & Te.SCALE && this._originalScale && t.setScale(this._originalScale),
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
                                                        return (t && (e = t.getComponent(R)), e);
                                                    }),
                                                    (a._applyTarget = function () {
                                                        this.target &&
                                                            ((this._sprite = this._getTargetSprite(this.target)),
                                                            this._originalScale || (this._originalScale = new x()),
                                                            x.copy(this._originalScale, this.target.getScale()),
                                                            this._registerTargetEvent(this.target));
                                                    }),
                                                    (a._onTargetSpriteFrameChanged = function (t) {
                                                        this._transition & Te.SPRITE && this._setCurrentStateSpriteFrame(t.spriteFrame);
                                                    }),
                                                    (a._setCurrentStateSpriteFrame = function (t) {
                                                        if (t)
                                                            switch (this._getButtonState()) {
                                                                case Oe.NORMAL:
                                                                    this._normalSprite = t;
                                                                    break;
                                                                case Oe.HOVER:
                                                                    this._hoverSprite = t;
                                                                    break;
                                                                case Oe.PRESSED:
                                                                    this._pressedSprite = t;
                                                                    break;
                                                                case Oe.DISABLED:
                                                                    this._disabledSprite = t;
                                                            }
                                                    }),
                                                    (a._onTargetColorChanged = function (t) {
                                                        this._transition & Te.COLOR && this._setCurrentStateColor(t);
                                                    }),
                                                    (a._setCurrentStateColor = function (t) {
                                                        switch (this._getButtonState()) {
                                                            case Oe.NORMAL:
                                                                this._normalColor = t;
                                                                break;
                                                            case Oe.HOVER:
                                                                this._hoverColor = t;
                                                                break;
                                                            case Oe.PRESSED:
                                                                this._pressedColor = t;
                                                                break;
                                                            case Oe.DISABLED:
                                                                this._disabledColor = t;
                                                        }
                                                    }),
                                                    (a._onTargetTransformChanged = function (t) {
                                                        t & z.SCALE &&
                                                            this._originalScale &&
                                                            this._transition & Te.SCALE &&
                                                            this._transitionFinished &&
                                                            x.copy(this._originalScale, this.target.getScale());
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
                                                                if (this._transition & Te.SCALE && this.target && this._originalScale)
                                                                    n
                                                                        ? (x.copy(this._fromScale, this._originalScale),
                                                                          x.multiplyScalar(this._toScale, this._originalScale, this._zoomScale),
                                                                          (this._transitionFinished = !1))
                                                                        : ((this._time = 0),
                                                                          (this._transitionFinished = !0),
                                                                          this.target.setScale(this._originalScale));
                                                                else ((i = n ? Oe.PRESSED : Oe.NORMAL), this._applyTransition(i));
                                                                t && (t.propagationStopped = !0);
                                                            }
                                                        }
                                                    }),
                                                    (a._onTouchEnded = function (t) {
                                                        this._interactable &&
                                                            this.enabledInHierarchy &&
                                                            (this._pressed && (k.emitEvents(this.clickEvents, t), this.node.emit(Ne.CLICK, this)),
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
                                                            ((this._transition & Te.SPRITE && !this._hoverSprite) ||
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
                                                        var t = Oe.NORMAL;
                                                        return (
                                                            this._interactable
                                                                ? this._pressed
                                                                    ? (t = Oe.PRESSED)
                                                                    : this._hovered && (t = Oe.HOVER)
                                                                : (t = Oe.DISABLED),
                                                            t.toString()
                                                        );
                                                    }),
                                                    (a._updateColorTransition = function (t) {
                                                        var e,
                                                            i = this[t + "Color"],
                                                            n = null == (e = this.target) ? void 0 : e.getComponent(M);
                                                        n &&
                                                            (t === Oe.DISABLED
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
                                                        this._interactable && (t === Oe.PRESSED ? this._zoomUp() : this._zoomBack());
                                                    }),
                                                    (a._zoomUp = function () {
                                                        this._originalScale &&
                                                            (x.copy(this._fromScale, this._originalScale),
                                                            x.multiplyScalar(this._toScale, this._originalScale, this._zoomScale),
                                                            (this._time = 0),
                                                            (this._transitionFinished = !1));
                                                    }),
                                                    (a._zoomBack = function () {
                                                        this.target &&
                                                            this._originalScale &&
                                                            (x.copy(this._fromScale, this.target.getScale()),
                                                            x.copy(this._toScale, this._originalScale),
                                                            (this._time = 0),
                                                            (this._transitionFinished = !1));
                                                    }),
                                                    (a._applyTransition = function (t) {
                                                        var e = this._transition;
                                                        (e & Te.COLOR && this._updateColorTransition(t),
                                                            e & Te.SPRITE && this._updateSpriteTransition(t),
                                                            e & Te.SCALE && this._updateScaleTransition(t));
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
                                                            (this._pressed && (k.emitEvents(this.clickEvents, this), this.node.emit(Ne.CLICK, this)),
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
                                                                    (this._transition & Te.COLOR && this._updateColorTransition(Oe.NORMAL),
                                                                    this._transition & Te.SPRITE && this._updateSpriteTransition(Oe.NORMAL),
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
                                                                    var e = this.node.getComponent(R);
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
                                            })(G)).Transition = Te),
                                            (Ee.EventType = Ne),
                                            t((ce = Ee).prototype, "target", [Pt], Object.getOwnPropertyDescriptor(ce.prototype, "target"), ce.prototype),
                                            t(ce.prototype, "interactable", [Bt], Object.getOwnPropertyDescriptor(ce.prototype, "interactable"), ce.prototype),
                                            t(ce.prototype, "transition", [Ft], Object.getOwnPropertyDescriptor(ce.prototype, "transition"), ce.prototype),
                                            t(ce.prototype, "normalColor", [Mt], Object.getOwnPropertyDescriptor(ce.prototype, "normalColor"), ce.prototype),
                                            t(ce.prototype, "pressedColor", [Dt], Object.getOwnPropertyDescriptor(ce.prototype, "pressedColor"), ce.prototype),
                                            t(ce.prototype, "hoverColor", [zt], Object.getOwnPropertyDescriptor(ce.prototype, "hoverColor"), ce.prototype),
                                            t(
                                                ce.prototype,
                                                "disabledColor",
                                                [Gt],
                                                Object.getOwnPropertyDescriptor(ce.prototype, "disabledColor"),
                                                ce.prototype,
                                            ),
                                            t(ce.prototype, "duration", [Ht], Object.getOwnPropertyDescriptor(ce.prototype, "duration"), ce.prototype),
                                            t(ce.prototype, "zoomScale", [Vt], Object.getOwnPropertyDescriptor(ce.prototype, "zoomScale"), ce.prototype),
                                            t(ce.prototype, "normalSprite", [Wt], Object.getOwnPropertyDescriptor(ce.prototype, "normalSprite"), ce.prototype),
                                            t(
                                                ce.prototype,
                                                "pressedSprite",
                                                [Ut],
                                                Object.getOwnPropertyDescriptor(ce.prototype, "pressedSprite"),
                                                ce.prototype,
                                            ),
                                            t(ce.prototype, "hoverSprite", [jt], Object.getOwnPropertyDescriptor(ce.prototype, "hoverSprite"), ce.prototype),
                                            t(
                                                ce.prototype,
                                                "disabledSprite",
                                                [Jt],
                                                Object.getOwnPropertyDescriptor(ce.prototype, "disabledSprite"),
                                                ce.prototype,
                                            ),
                                            (ue = t(ce.prototype, "clickEvents", [Xt, qt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return [];
                                                },
                                            })),
                                            (me = t(ce.prototype, "_interactable", [Kt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return !0;
                                                },
                                            })),
                                            (he = t(ce.prototype, "_transition", [Yt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return Te.NONE;
                                                },
                                            })),
                                            (pe = t(ce.prototype, "_normalColor", [Zt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return T.WHITE.clone();
                                                },
                                            })),
                                            (de = t(ce.prototype, "_hoverColor", [Qt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return new T(211, 211, 211, 255);
                                                },
                                            })),
                                            (_e = t(ce.prototype, "_pressedColor", [$t], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return T.WHITE.clone();
                                                },
                                            })),
                                            (fe = t(ce.prototype, "_disabledColor", [te], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return new T(124, 124, 124, 255);
                                                },
                                            })),
                                            (ye = t(ce.prototype, "_normalSprite", [ee], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (ge = t(ce.prototype, "_hoverSprite", [ie], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (Se = t(ce.prototype, "_pressedSprite", [ne], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (be = t(ce.prototype, "_disabledSprite", [oe], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (ve = t(ce.prototype, "_duration", [re], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return 0.1;
                                                },
                                            })),
                                            (we = t(ce.prototype, "_zoomScale", [ae], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return 1.2;
                                                },
                                            })),
                                            (Ce = t(ce.prototype, "_target", [se], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return null;
                                                },
                                            })),
                                            (le = ce)),
                                        ) || le),
                                ) || le),
                        ) || le),
                ));
            (C._RF.pop(), C._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", void 0));
            var ui,
                mi,
                hi,
                pi,
                di,
                _i,
                fi,
                yi,
                gi = E.ccclass,
                Si = E.property,
                bi = E.requireComponent,
                vi = E.executeInEditMode;
            ((Be = gi("ColorText")),
                (Fe = bi(B)),
                (Me = Si(H)),
                (De = Si(V)),
                (ze = Si(T)),
                (Ge = Si({ tooltip: "使用該元件的自定義材質", type: H })),
                (He = Si({ tooltip: "顏色漸變元件", type: V })),
                (Ve = Si({ tooltip: "正片疊底顏色", type: T })),
                (We = Si({ tooltip: "顏色漸變貼圖的範圍", range: [0, 1, 0.01], slide: !0 })),
                (Ue = Si({ tooltip: "是否垂直漸變顏色" })),
                (je = Si({ tooltip: "上內陰影顏色", type: T })),
                (Je = Si({ tooltip: "下內陰影顏色", type: T })),
                (Xe = Si({ tooltip: "上內陰影顏色高度 (Pixel)" })),
                (qe = Si({ tooltip: "下內陰影顏色高度 (Pixel)" })),
                (Ke = Si({ tooltip: "上內陰影插值比例 (0 ~ 1)", range: [0, 1, 0.01], slide: !0 })),
                (Ye = Si({ tooltip: "下內陰影插值比例 (0 ~ 1)", range: [0, 1, 0.01], slide: !0 })),
                Be(
                    (Ze =
                        Fe(
                            (Ze =
                                vi(
                                    (($e = t(
                                        (Qe = (function (t) {
                                            function r() {
                                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                                return (
                                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                                    i(e, "_textMaterial", $e, n(e)),
                                                    i(e, "_gradient", ti, n(e)),
                                                    i(e, "_gradientMultiply", ei, n(e)),
                                                    i(e, "_gradientShrink", ii, n(e)),
                                                    i(e, "_isVertical", ni, n(e)),
                                                    i(e, "_innerShadowColor1", oi, n(e)),
                                                    i(e, "_innerShadowColor2", ri, n(e)),
                                                    i(e, "_innerShadowHeight1", ai, n(e)),
                                                    i(e, "_innerShadowHeight2", si, n(e)),
                                                    i(e, "_innerShadowRate1", li, n(e)),
                                                    i(e, "_innerShadowRate2", ci, n(e)),
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
                                                    var t = this.node.getComponent(B);
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
                                                    var t = this.node.getComponent(B),
                                                        e = t.customMaterial;
                                                    if ((!e && this._textMaterial && ((e = new H()).copy(this._textMaterial), (t.customMaterial = e)), e)) {
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
                                        [Me],
                                        {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return null;
                                            },
                                        },
                                    )),
                                    (ti = t(Qe.prototype, "_gradient", [De], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return new V();
                                        },
                                    })),
                                    (ei = t(Qe.prototype, "_gradientMultiply", [ze], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return J(255, 255, 255, 255);
                                        },
                                    })),
                                    (ii = t(Qe.prototype, "_gradientShrink", [Si], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0.15;
                                        },
                                    })),
                                    (ni = t(Qe.prototype, "_isVertical", [Si], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !0;
                                        },
                                    })),
                                    t(Qe.prototype, "textMaterial", [Ge], Object.getOwnPropertyDescriptor(Qe.prototype, "textMaterial"), Qe.prototype),
                                    t(Qe.prototype, "gradient", [He], Object.getOwnPropertyDescriptor(Qe.prototype, "gradient"), Qe.prototype),
                                    t(Qe.prototype, "gradientMultiply", [Ve], Object.getOwnPropertyDescriptor(Qe.prototype, "gradientMultiply"), Qe.prototype),
                                    t(Qe.prototype, "gradientShrink", [We], Object.getOwnPropertyDescriptor(Qe.prototype, "gradientShrink"), Qe.prototype),
                                    t(Qe.prototype, "isVertical", [Ue], Object.getOwnPropertyDescriptor(Qe.prototype, "isVertical"), Qe.prototype),
                                    (oi = t(Qe.prototype, "_innerShadowColor1", [Si], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return J(255, 255, 255, 255);
                                        },
                                    })),
                                    (ri = t(Qe.prototype, "_innerShadowColor2", [Si], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return J(255, 255, 255, 255);
                                        },
                                    })),
                                    (ai = t(Qe.prototype, "_innerShadowHeight1", [Si], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 1;
                                        },
                                    })),
                                    (si = t(Qe.prototype, "_innerShadowHeight2", [Si], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 2;
                                        },
                                    })),
                                    (li = t(Qe.prototype, "_innerShadowRate1", [Si], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    })),
                                    (ci = t(Qe.prototype, "_innerShadowRate2", [Si], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    })),
                                    t(
                                        Qe.prototype,
                                        "innerShadowColor1",
                                        [je],
                                        Object.getOwnPropertyDescriptor(Qe.prototype, "innerShadowColor1"),
                                        Qe.prototype,
                                    ),
                                    t(
                                        Qe.prototype,
                                        "innerShadowColor2",
                                        [Je],
                                        Object.getOwnPropertyDescriptor(Qe.prototype, "innerShadowColor2"),
                                        Qe.prototype,
                                    ),
                                    t(
                                        Qe.prototype,
                                        "innerShadowHeight1",
                                        [Xe],
                                        Object.getOwnPropertyDescriptor(Qe.prototype, "innerShadowHeight1"),
                                        Qe.prototype,
                                    ),
                                    t(
                                        Qe.prototype,
                                        "innerShadowHeight2",
                                        [qe],
                                        Object.getOwnPropertyDescriptor(Qe.prototype, "innerShadowHeight2"),
                                        Qe.prototype,
                                    ),
                                    t(Qe.prototype, "innerShadowRate1", [Ke], Object.getOwnPropertyDescriptor(Qe.prototype, "innerShadowRate1"), Qe.prototype),
                                    t(Qe.prototype, "innerShadowRate2", [Ye], Object.getOwnPropertyDescriptor(Qe.prototype, "innerShadowRate2"), Qe.prototype),
                                    (Ze = Qe)),
                                ) || Ze),
                        ) || Ze),
                ));
            (C._RF.pop(), C._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", void 0));
            var wi,
                Ci = E.ccclass,
                Ei = E.property,
                Ti = E.executeInEditMode;
            ((ui = Ci("ColorFadingUI")),
                (mi = Ei({ type: X, tooltip: "Color Fading 預設 shader" })),
                (hi = Ei({ type: q, tooltip: "Gradient Texture Size" })),
                (pi = Ei({ type: K, tooltip: "是否使用alpha test, Spine建議開啟" })),
                (di = Ei({ type: Y, tooltip: "混合比例，0~1之間" })),
                (_i = Ei({ type: V, tooltip: "當前Gradient" })),
                ui(
                    (fi =
                        Ti(
                            (t(
                                (yi = (function (t) {
                                    function i() {
                                        for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                                        return (
                                            ((e = t.call.apply(t, [this].concat(n)) || this).m_colorFadingEffect = null),
                                            (e.m_gradientTextureSize = 64),
                                            (e.m_currGradient = new V()),
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
                                            ((this.m_mixRate = 1), (this.m_currGradient = new V()), this.LoadTexture());
                                        }),
                                        (n.GenerateMat = function () {
                                            var t = this.GetRenderComponent();
                                            if (null != t && null != this.m_colorFadingEffect) {
                                                var e = new H();
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
                                            if (null == this.m_colorFadingEffect) Z("Warning! No effect asset loaded!");
                                            else {
                                                (Z("loadTexture", this.m_currGradient), this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1));
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
                                                null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(R)),
                                                null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent($.Skeleton)),
                                                null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(B)),
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
                                [mi],
                                Object.getOwnPropertyDescriptor(yi.prototype, "ColorFadingEffect"),
                                yi.prototype,
                            ),
                            t(yi.prototype, "GradientTextureSize", [hi], Object.getOwnPropertyDescriptor(yi.prototype, "GradientTextureSize"), yi.prototype),
                            t(yi.prototype, "UseAlphaTest", [pi], Object.getOwnPropertyDescriptor(yi.prototype, "UseAlphaTest"), yi.prototype),
                            t(yi.prototype, "MixRate", [di], Object.getOwnPropertyDescriptor(yi.prototype, "MixRate"), yi.prototype),
                            t(yi.prototype, "CurrentGradient", [_i], Object.getOwnPropertyDescriptor(yi.prototype, "CurrentGradient"), yi.prototype),
                            (fi = yi)),
                        ) || fi),
                ));
            (C._RF.pop(), C._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", void 0));
            var Oi,
                Ni =
                    (0, E.ccclass)(
                        (wi = (function (t) {
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
                                    (Z("AnimEvtReciever: ", t), this.m_callback ? this.m_callback(t) : Z("callback沒有設定，無法處理event: ", t));
                                }),
                                (n.triggerAnimationEvent = function (t) {
                                    (Z("triggerAnimationEvent: ", t), this.m_callback ? this.m_callback(t) : Z("callback沒有設定，無法處理event: ", t));
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
                    ) || wi;
            (C._RF.pop(), C._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", void 0));
            var Ii,
                Ai,
                ki,
                xi,
                Ri,
                Li,
                Pi,
                Bi,
                Fi,
                Mi,
                Di,
                zi,
                Gi,
                Hi,
                Vi,
                Wi,
                Ui,
                ji,
                Ji = (function (t) {
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
                                m = t.deltaY,
                                h = t.cbFuncBtoM,
                                p = t.cbFuncMtoS,
                                d = t.cbFuncPlaying,
                                _ = t.isLoop || !1,
                                f = t.rollTime;
                            if (null != l) {
                                var y = function () {
                                        (n.m_bgMaskNode && (n.m_bgMaskNode.active = !0),
                                            Z("LoadPrefabManager CB", l),
                                            (u = (null != u && u) || i.DEFAULT_Y),
                                            n.m_effectList[o].setPosition(at(i.DesignSize.width / 2, u)),
                                            (n.m_effectList[o].active = !0),
                                            n.m_timeLineList[o].play(i.ANI_LABEL.ACT),
                                            (n.m_currentWinEffect = n.m_effectList[o]),
                                            (n.m_currentWinEffectTimeline = n.m_timeLineList[o]),
                                            (n.m_currentWinEffectTimeline.name = o),
                                            (m = o == i.FILE_PATH.JACKPOT ? 180 : null != m ? m : 230),
                                            n.m_awardBoard.setPosition(at(i.DesignSize.width / 2, u - m)),
                                            (n.m_awardBoard.active = !0),
                                            n.m_awardBoardTimeline.play(i.ANI_LABEL.ACT),
                                            n.SetWinValue(l, f),
                                            null == d || d());
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
                                                  (Ni.Pack(a, function (t) {
                                                      if (t == i.ANI_FRAME_EVENT.ENDING)
                                                          n.m_awardBoard && n.m_awardBoard.active && n.m_awardBoardTimeline.play(i.ANI_LABEL.ENDING);
                                                      else if (t == i.ANI_FRAME_EVENT.LOOP) {
                                                          if (_) (l.play(i.ANI_LABEL.LOOP), (l.getState(i.ANI_LABEL.LOOP).wrapMode = ot.WrapMode.Loop));
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
                                                                  null == p || p())
                                                                : t == i.ANI_FRAME_EVENT.END &&
                                                                  (Z("ANI_FRAME_EVENT.END"), n.OnAnimationEnd(), n.m_winEffCbFunc && n.m_winEffCbFunc());
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
                            var n = t.getComponent(B);
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
                            } else Z("Warning!!!!!!!!!! SetLabelString: ", t);
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
                                var m = t.parent;
                                this.stopCoinEffectImmly();
                                var h = i.COIN_EFFECT_LIST[o];
                                if ((h = s.GetFilePath(h))) {
                                    Z("~~~~~~~~~~~~~~~~~~~~~~", t, c, u);
                                    var p = function () {
                                        (n.m_coinEffectNode.setPosition(at(l.x, l.y)),
                                            null == m || null == m
                                                ? (n.addChild(n.m_coinEffectNode), s.SetZIndex(n.m_coinEffectNode, 0))
                                                : (m.addChild(n.m_coinEffectNode), s.SetZIndex(n.m_coinEffectNode, u)),
                                            0 != c &&
                                                rt(n)
                                                    .delay(c)
                                                    .call(function () {
                                                        n.stopCoinEffect();
                                                    })
                                                    .start());
                                    };
                                    (-1 != e && (r.AddOnLoadedCallback(e, p), r.AddLoad(e)),
                                        a.CommonBundle.load(h, function (t, i) {
                                            (Z("LoadRes ", h),
                                                t
                                                    ? et(t.message || t)
                                                    : ((n.m_coinEffectNode = it(i)),
                                                      n.m_coinEffectNode
                                                          ? -1 == e
                                                              ? p()
                                                              : r.OnLoaded(e)
                                                          : Z("SlotBottomBarView.playCoinEffect m_coinEffect is null")));
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
                            for (var m = this.m_odds.length - 1; m >= 0; m--)
                                if (u >= this.m_odds[m]) {
                                    ((o.level = this.m_coinEffects[m]),
                                        5 == this.m_coinEffects[m]
                                            ? (o.position = o.position ? o.position : r)
                                            : (o.position = o.smallPosition ? o.smallPosition : o.position ? o.position : a),
                                        (null == o.time || o.time <= 0) && (o.time = this.m_coinTimes[m]),
                                        5 == this.m_coinEffects[m]
                                            ? ((n.effectFile = this.m_winEffectFiles[m]), (n.winValue = t), this.SetWinType(m), this.ShowWinAndCoinEffect(n, o))
                                            : this.playCoinEffect(o),
                                        (s = this.m_soundNameByOdds[m]));
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
                            this.m_txtWinValue && (this.m_txtWinValue.getComponent(B).fontSize = t);
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
                })(I);
            ((Ji.DesignSize = { width: 1136, height: 640 }),
                (Ji.SOUND_FILE = { COMMON_SUPER_WIN: null, COMMON_MEGA_WIN: null, COMMON_COIN_SMALL: null, COMMON_COIN_MEDIUM: null, COMMON_BIG_WIN: null }),
                (Ji.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/"),
                (Ji.FILE_PATH = {
                    BIG_WIN: "win/big_anim",
                    MEGA_WIN: "win/mega_anim",
                    SUPER_WIN: "win/super_anim",
                    JACKPOT: "win/effect_Jackpot",
                    BIG_TO_MEGA_WIN: "win/bigToMega_anim",
                    BIG_TO_SUPER_WIN: "win/bigToSuper_anim",
                    FIVE_OF_A_KIND: "win/5ofa_anim",
                }),
                (Ji.WIN_EFFECT_SOUND_NAME =
                    (((Oi = {})[Ji.FILE_PATH.BIG_WIN] = "Common_big_win"),
                    (Oi[Ji.FILE_PATH.MEGA_WIN] = "Common_mega_win"),
                    (Oi[Ji.FILE_PATH.SUPER_WIN] = "Common_super_win"),
                    (Oi[Ji.FILE_PATH.JACKPOT] = "Common_JP_win"),
                    (Oi[Ji.FILE_PATH.BIG_TO_MEGA_WIN] = "Common_big_win"),
                    (Oi[Ji.FILE_PATH.BIG_TO_SUPER_WIN] = "Common_big_win"),
                    (Oi[Ji.FILE_PATH.FIVE_OF_A_KIND] = "Common_big_win"),
                    Oi)),
                (Ji.EffectViewUIName = tt({ TXT_WIN_MONEY: "label_final_value", PARTICLE: "Particle_" })),
                (Ji.DEFAULT_Y = 400),
                (Ji.PARTICLE_AMOUNT_MAX = 2),
                (Ji.MONEY_ROLL_TIME = 3),
                (Ji.UPDATE_MONEY_CSB = Ji.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb"),
                (Ji.COMMON_GET_COIN_CSB = Ji.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb"),
                (Ji.GET_COIN_PARTICLE_CSB = Ji.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist"),
                (Ji.ROTATE_COIN_CSB = Ji.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb"),
                (Ji.TRIAL_COIN_CSB = Ji.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb"),
                (Ji.COIN_APPEAR_PARTICLE_CSB = Ji.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist"),
                (Ji.COMMON_COIN_AMOUNT = 8),
                (Ji.ANI_LABEL = { ACT: "main", LOOP: "loop", ENDING: "ending" }),
                (Ji.ANI_FRAME_EVENT = { MID: "AniMid", B_TO_M: "AniBtoM", M_TO_S: "AniMtoS", ENDING: "AniEnding", END: "AniEnd", LOOP: "AniLoop" }),
                (Ji.EFF_ZORDER = { COIN_FALL: 1, WIN_EFFECT: 2, AWARD_BOARD: 3, COMMON_GET_COIN: 4, GET_TRIAL_COIN: 5 }),
                (Ji.COIN_EFFECT_LIST = {
                    1: Ji.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
                    2: Ji.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
                    3: Ji.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
                    4: Ji.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
                    5: Ji.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
                    6: Ji.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
                    7: Ji.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3",
                }),
                (Ji.WIN_TYPE = { BIG: 2, MEGA: 3, SUPER: 4 }),
                C._RF.pop(),
                C._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", void 0));
            var Xi,
                qi,
                Ki,
                Yi,
                Zi,
                Qi,
                $i,
                tn,
                en,
                nn,
                on = E.ccclass,
                rn = E.property,
                an = 0,
                sn = 1;
            ((Ii = rn({ type: I, tooltip: "EX 按鈕最頂層節點(整顆node)" })),
                (Ai = rn({ type: ut, tooltip: "EX 按鈕" })),
                (ki = rn({ type: ut, tooltip: "按鈕ON" })),
                (xi = rn({ type: ut, tooltip: "按鈕OFF" })),
                (Ri = rn({ type: ut, tooltip: "提示問號按鈕" })),
                (Li = rn({ type: I, tooltip: "提示文字tip面板" })),
                (Pi = rn({ type: B, tooltip: "功能說明文字串Label" })),
                (Bi = rn({ type: R, tooltip: "本體ExtraBet文字圖片" })),
                on(
                    ((Di = t(
                        (Mi = (function (t) {
                            function r() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_multiExtraBetNode", Di, n(e)),
                                    i(e, "m_multiBtn", zi, n(e)),
                                    i(e, "m_multiBtn_on", Gi, n(e)),
                                    i(e, "m_multiBtn_off", Hi, n(e)),
                                    i(e, "m_multiBtn_TipQuesMark", Vi, n(e)),
                                    i(e, "m_multiBtn_Tip", Wi, n(e)),
                                    i(e, "m_multiBtn_Description", Ui, n(e)),
                                    i(e, "m_Txt_Extra_Bet", ji, n(e)),
                                    (e.m_isExtendShowBar = !1),
                                    (e.m_ExtraBetAniPlaying = null),
                                    (e.m_isExtra = !1),
                                    (e.m_isForceExtraOnEnd = !1),
                                    (e.m_isTwoStep = !1),
                                    (e.m_toStepTwo = !1),
                                    (e.m_triggerCb = null),
                                    (e.m_canExtend = !0),
                                    e
                                );
                            }
                            e(r, t);
                            var v = r.prototype;
                            return (
                                (v.Init = function (t, e, i, n, o) {
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
                                            (Z(" localeStringManager.CurrLang : " + m.CurrLang),
                                            (this.m_multiBtn_Description.string = m.GetString(e)),
                                            (this.m_Txt_Extra_Bet.spriteFrame = m.GetGameAtlas().getSpriteFrame(i))),
                                        h.Init(o ? null : this.node, this.ForceSetExtraBet.bind(this)));
                                }),
                                (v.onLoad = function () {
                                    var t = this;
                                    if (!s.CheckSwitchOff(u.CloseExtraBet)) {
                                        (Z("ExtraBet onLoad"),
                                            this.m_multiBtn &&
                                                this.m_multiBtn.node.on(I.EventType.TOUCH_END, function () {
                                                    t.m_ExtraBetAniPlaying ||
                                                        (l.Play(a.AudioClips.COMMON_BTN),
                                                        t.CheckCanUseBtn()
                                                            ? t.ExtendShowBar(!t.m_isExtendShowBar)
                                                            : p.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1));
                                                }));
                                        for (var e = 0; e < this.m_multiBtn_on.length; e++)
                                            (this.m_multiBtn_on[e].node.on(I.EventType.TOUCH_END, function () {
                                                t.m_ExtraBetAniPlaying ||
                                                    (t.CheckCanUseBtn() ? t.ChangeBetMode() : p.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1));
                                            }),
                                                this.m_multiBtn_off[e] &&
                                                    this.m_multiBtn_off[e].node.on(I.EventType.TOUCH_END, function () {
                                                        t.m_ExtraBetAniPlaying || (l.Play(a.AudioClips.COMMON_BTN), t.CheckCanUseBtn() && t.ChangeBetMode());
                                                    }));
                                        (this.m_multiBtn_TipQuesMark &&
                                            this.m_multiBtn_TipQuesMark.node.on(
                                                I.EventType.TOUCH_END,
                                                d(
                                                    S().mark(function e() {
                                                        return S().wrap(function (e) {
                                                            for (;;)
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        if (t.m_ExtraBetAniPlaying) {
                                                                            e.next = 13;
                                                                            break;
                                                                        }
                                                                        if ((l.Play(a.AudioClips.COMMON_BTN), _.Current() != f.IDLE || y.IsBuyBonus)) {
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
                                                                        p.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1);
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
                                (v.start = function () {
                                    Z("ExtraBet start");
                                }),
                                (v.CheckCanUseBtn = function () {
                                    return (
                                        a.IsInMG() &&
                                        _.Current() == f.IDLE &&
                                        !a.IsUsingItem &&
                                        !y.IsBuyBonus &&
                                        !g.IsFeaturesDemoMode &&
                                        !s.CheckSwitchOff(u.CloseExtraBet)
                                    );
                                }),
                                (v.OnSpin = function () {
                                    this.ExtendShowBar(!1);
                                }),
                                (v.ShowExtra = function (t) {
                                    this.m_multiExtraBetNode && !s.CheckSwitchOff(u.CloseExtraBet) && (this.m_multiExtraBetNode.active = t);
                                }),
                                (v.GoToFeatures = function () {}),
                                (v.ExtendShowBar = (function () {
                                    var t = d(
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
                                                                    t.next = 31;
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
                                                                p.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1);
                                                            case 18:
                                                                t.next = 31;
                                                                break;
                                                            case 20:
                                                                if (!this.m_isExtendShowBar) {
                                                                    t.next = 31;
                                                                    break;
                                                                }
                                                                if (
                                                                    (c.IsAutoSpin || c.SetSpinState(b.CLICK_SPIN),
                                                                    this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = !1),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    !this.m_multiExtraBetNode)
                                                                ) {
                                                                    t.next = 27;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 27),
                                                                    this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_Close")
                                                                );
                                                            case 27:
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
                                                            case 31:
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
                                (v.ChangeBetMode = (function () {
                                    var t = d(
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
                                                                    (Z("ChangeBetMode stateManager.Current() : ", _.Current()),
                                                                    !c || y.IsBuyBonus || (_.Current() !== f.IDLE && !this.m_isExtra))
                                                                ) {
                                                                    t.next = 36;
                                                                    break;
                                                                }
                                                                if (((this.m_isExtra = !this.m_isExtra), (e = []), !this.m_isExtra)) {
                                                                    t.next = 24;
                                                                    break;
                                                                }
                                                                return (
                                                                    this.m_isTwoStep ? (this.m_toStepTwo = !0) : c.ChangeMultiBet(sn),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !0), (this.m_multiBtn_off[0].node.active = !1)),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    null == c || c.SetSpinState(b.CLICK_SPIN),
                                                                    null == g || g.SetBuyBonusState(!1),
                                                                    this.m_multiExtraBetNode &&
                                                                        e.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_ON")),
                                                                    e.push(this.m_triggerCb(this.m_isExtra, !1)),
                                                                    (t.next = 16),
                                                                    Promise.all(e)
                                                                );
                                                            case 16:
                                                                return (
                                                                    (this.m_ExtraBetAniPlaying = !1),
                                                                    null == c || c.SetSpinState(b.IDLE),
                                                                    this.m_multiExtraBetNode &&
                                                                        this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_Active"),
                                                                    (t.next = 21),
                                                                    a.Wait(this, 0.2)
                                                                );
                                                            case 21:
                                                                (null == g || g.SetBuyBonusState(!0), (t.next = 34));
                                                                break;
                                                            case 24:
                                                                return (
                                                                    c.ChangeMultiBet(an),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !1), (this.m_multiBtn_off[0].node.active = !0)),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    null == c || c.SetSpinState(b.CLICK_SPIN),
                                                                    this.m_multiExtraBetNode &&
                                                                        e.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_OFF")),
                                                                    e.push(this.m_triggerCb(this.m_isExtra, !1)),
                                                                    (t.next = 32),
                                                                    Promise.all(e)
                                                                );
                                                            case 32:
                                                                ((this.m_ExtraBetAniPlaying = !1), null == c || c.SetSpinState(b.IDLE));
                                                            case 34:
                                                                t.next = 37;
                                                                break;
                                                            case 36:
                                                                _.Current() !== f.IDLE &&
                                                                    (Z("TRIAL_REFUSED_REASON 1 "), p.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1));
                                                            case 37:
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
                                (v.SetTwoStepMulti = (function () {
                                    var t = d(
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
                                (v.ForceSetExtraBet = (function () {
                                    var t = d(
                                        S().mark(function t(e, i) {
                                            var n;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if ((void 0 === i && (i = sn), !s.CheckSwitchOff(u.CloseExtraBet))) {
                                                                    t.next = 3;
                                                                    break;
                                                                }
                                                                return t.abrupt("return");
                                                            case 3:
                                                                if (!e) {
                                                                    t.next = 14;
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
                                                                    (t.next = 11),
                                                                    this.m_triggerCb(e, !0)
                                                                );
                                                            case 11:
                                                                ((this.m_isForceExtraOnEnd = !0), (t.next = 23));
                                                                break;
                                                            case 14:
                                                                if (!this.m_isExtra) {
                                                                    t.next = 23;
                                                                    break;
                                                                }
                                                                return (
                                                                    (n = []),
                                                                    (this.m_isExtra = !1),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !1), (this.m_multiBtn_off[0].node.active = !0)),
                                                                    c.ChangeMultiBet(an),
                                                                    this.m_multiExtraBetNode &&
                                                                        (this.m_isExtendShowBar
                                                                            ? n.push(this.ExtendShowBar(!1))
                                                                            : n.push(
                                                                                  this.PlayAnimation(this.m_multiExtraBetNode.getComponent(nt), "ExtraBet_OFF"),
                                                                              )),
                                                                    n.push(this.m_triggerCb(e, !0)),
                                                                    (t.next = 23),
                                                                    Promise.all(n)
                                                                );
                                                            case 23:
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
                                (v.OnRotation = function () {
                                    s.CheckSwitchOff(u.CloseExtraBet) ||
                                        (this.m_multiExtraBetNode &&
                                            (this.m_isExtra
                                                ? this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_Active")
                                                : this.m_multiExtraBetNode.getComponent(nt).play("ExtraBet_Stop")),
                                        this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = !1));
                                }),
                                (v.IsExAnimationTouchable = function () {
                                    return !this.m_ExtraBetAniPlaying;
                                }),
                                (v.FirstShowBar = function () {}),
                                (v.PlayAnimation = function (t, e, i) {
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
                        [Ii],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (zi = t(Mi.prototype, "m_multiBtn", [Ai], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Gi = t(Mi.prototype, "m_multiBtn_on", [ki], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Hi = t(Mi.prototype, "m_multiBtn_off", [xi], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Vi = t(Mi.prototype, "m_multiBtn_TipQuesMark", [Ri], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Wi = t(Mi.prototype, "m_multiBtn_Tip", [Li], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Ui = t(Mi.prototype, "m_multiBtn_Description", [Pi], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (ji = t(Mi.prototype, "m_Txt_Extra_Bet", [Bi], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Fi = Mi)),
                ));
            (C._RF.pop(), C._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", void 0));
            var ln,
                cn,
                un,
                mn,
                hn,
                pn,
                dn,
                _n,
                fn,
                yn,
                gn,
                Sn,
                bn,
                vn,
                wn,
                Cn,
                En,
                Tn,
                On,
                Nn,
                In,
                An,
                kn,
                xn,
                Rn,
                Ln,
                Pn,
                Bn,
                Fn,
                Mn,
                Dn,
                zn = E.ccclass,
                Gn = E.property;
            ((Xi = Gn({ type: R, tooltip: "說明文字" })),
                (qi = Gn({ type: mt, tooltip: "圖片名稱" })),
                (Ki = Gn({ type: Boolean, tooltip: "圖片名稱" })),
                (Yi = Gn({ type: R, tooltip: "圖片名稱" })),
                zn(
                    (($i = t(
                        (Qi = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_hintSprite", $i, n(e)),
                                    i(e, "m_imgName", tn, n(e)),
                                    i(e, "m_isAD", en, n(e)),
                                    i(e, "m_ADsprite", nn, n(e)),
                                    e
                                );
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.start = function () {
                                    var t = this;
                                    if (!this.m_isAD) {
                                        var e = m.GetGameAtlas();
                                        e
                                            ? (this.m_hintSprite.spriteFrame = e.getSpriteFrame(this.m_imgName))
                                            : m.RegisterOnGameAltasLoadedCb(function () {
                                                  t.m_hintSprite.spriteFrame = m.GetGameAtlas().getSpriteFrame(t.m_imgName);
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
                        [Xi],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (tn = t(Qi.prototype, "m_imgName", [qi], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (en = t(Qi.prototype, "m_isAD", [Ki], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (nn = t(Qi.prototype, "m_ADsprite", [Yi], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Zi = Qi)),
                ));
            (C._RF.pop(), C._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", void 0));
            var Hn,
                Vn,
                Wn,
                Un,
                jn = E.ccclass,
                Jn = E.property,
                Xn = E.menu,
                qn = E.executeInEditMode,
                Kn = "active-in-hierarchy-changed";
            (!(function (t) {
                ((t[(t.WIDTH = 1)] = "WIDTH"), (t[(t.HEIGHT = 2)] = "HEIGHT"), (t[(t.BOTH = 3)] = "BOTH"));
            })(Hn || (Hn = {})),
                (function (t) {
                    ((t[(t.X = 1)] = "X"), (t[(t.Y = 2)] = "Y"), (t[(t.BOTH = 3)] = "BOTH"));
                })(Vn || (Vn = {})),
                (function (t) {
                    ((t[(t.X = 1)] = "X"), (t[(t.Y = 2)] = "Y"), (t[(t.BOTH = 3)] = "BOTH"));
                })(Wn || (Wn = {})),
                (function (t) {
                    ((t[(t.R = 1)] = "R"),
                        (t[(t.G = 2)] = "G"),
                        (t[(t.B = 4)] = "B"),
                        (t[(t.RGB = 7)] = "RGB"),
                        (t[(t.A = 8)] = "A"),
                        (t[(t.RGBA = 15)] = "RGBA"));
                })(Un || (Un = {})));
            var Yn, Zn, Qn;
            ((ln = Xn("Chiron/GroupNode/GroupNode")),
                (cn = Jn({ displayName: "Sync OnEnable", tooltip: "當 Node 啟用時同步一次所有選定的狀態至屬性 Group Nodes 中" })),
                (un = Jn({ displayName: "Sync OnDisable", tooltip: "當 Node 啟用時同步一次所有選定的狀態至屬性 Group Nodes 中" })),
                (mn = Jn({ displayName: "Sync Recursive", tooltip: "是否遞迴同步屬性 Group Nodes 中帶有 GroupNode 元件的節點" })),
                (hn = Jn({ type: [I], displayName: "Group Nodes" })),
                (pn = Jn({ displayName: "Active Aware", tooltip: "當啓閉狀態改變時是否讓群組裡的 Node 跟著啓閉調整" })),
                (dn = Jn({ displayName: "Position Aware", tooltip: "當位置改變時是否讓群組裡的 Node 跟著調整相對位置" })),
                (_n = Jn({
                    type: tt(Vn),
                    displayName: "Position Mode",
                    tooltip: "當座標改變時子元件跟著調動的參數",
                    visible: function () {
                        return this.m_positionAware;
                    },
                })),
                (fn = Jn({ displayName: "Rotation Aware", tooltip: "當旋轉改變時是否讓群組裡的 Node 跟著調整轉角" })),
                (yn = Jn({ displayName: "Scale Aware", tooltip: "當縮放比例改變時是否讓群組裡的 Node 跟著改變縮放比例" })),
                (gn = Jn({
                    type: tt(Wn),
                    displayName: "Scale Mode",
                    tooltip: "當縮放改變時子元件跟著調動的參數",
                    visible: function () {
                        return this.m_scaleAware;
                    },
                })),
                (Sn = Jn({ displayName: "Color Aware", tooltip: "當顏色改變時是否讓群組裡的 Node 跟著改變顏色" })),
                (bn = Jn({
                    type: tt(Un),
                    displayName: "Color Mode",
                    tooltip: "當顏色改變時子元件跟著調動的參數",
                    visible: function () {
                        return this.m_colorAware;
                    },
                })),
                (vn = Jn({ displayName: "Size Aware", tooltip: "當大小改變時是否讓群組裡的 Node 跟著改變大小" })),
                (wn = Jn({
                    type: tt(Hn),
                    displayName: "Size Mode",
                    tooltip: "當大小改變時子元件跟著調動的參數",
                    visible: function () {
                        return this.m_sizeAware;
                    },
                })),
                jn(
                    (Cn =
                        qn(
                            (Cn =
                                ln(
                                    ((Tn = t(
                                        (En = (function (t) {
                                            function r() {
                                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                                return (
                                                    ((e = t.call.apply(t, [this].concat(r)) || this).m_lastPos = void 0),
                                                    (e.m_lastRotation = void 0),
                                                    i(e, "m_syncOnEnable", Tn, n(e)),
                                                    i(e, "m_syncOnDisable", On, n(e)),
                                                    i(e, "m_syncRecursive", Nn, n(e)),
                                                    i(e, "m_nodes", In, n(e)),
                                                    i(e, "m_activeAware", An, n(e)),
                                                    i(e, "m_positionAware", kn, n(e)),
                                                    i(e, "m_positionMode", xn, n(e)),
                                                    i(e, "m_rotationAware", Rn, n(e)),
                                                    i(e, "m_scaleAware", Ln, n(e)),
                                                    i(e, "m_scaleMode", Pn, n(e)),
                                                    i(e, "m_colorAware", Bn, n(e)),
                                                    i(e, "m_colorMode", Fn, n(e)),
                                                    i(e, "m_sizeAware", Mn, n(e)),
                                                    i(e, "m_sizeMode", Dn, n(e)),
                                                    (e.m_isRegisted = !1),
                                                    e
                                                );
                                            }
                                            e(r, t);
                                            var a = r.prototype;
                                            return (
                                                (a.__preload = function () {
                                                    this.m_isRegisted ||
                                                        ((this.m_isRegisted = !0),
                                                        (this.m_lastPos = ht(this.node.position.x, this.node.position.y)),
                                                        (this.m_lastRotation = this.node.angle),
                                                        this.node.on(Kn, this.OnActiveChanged, this),
                                                        this.node.on(I.EventType.COLOR_CHANGED, this.OnColorChanged, this),
                                                        this.node.on(I.EventType.TRANSFORM_CHANGED, this.OnRotationChanged, this),
                                                        this.node.on(I.EventType.TRANSFORM_CHANGED, this.OnPositionChanged, this),
                                                        this.node.on(I.EventType.TRANSFORM_CHANGED, this.OnScaleChanged, this),
                                                        this.node.on(I.EventType.SIZE_CHANGED, this.OnSizeChanged, this),
                                                        pt.on(dt.EVENT_BEFORE_DRAW, this.StateCheck, this));
                                                }),
                                                (a.ForceInit = function () {
                                                    this.__preload();
                                                }),
                                                (a.onDestroy = function () {
                                                    (t.prototype.onDestroy && t.prototype.onDestroy.call(this),
                                                        this.node.off(Kn, this.OnActiveChanged, this),
                                                        this.node.off(I.EventType.TRANSFORM_CHANGED, this.OnPositionChanged, this),
                                                        this.node.off(I.EventType.COLOR_CHANGED, this.OnColorChanged, this),
                                                        this.node.off(I.EventType.TRANSFORM_CHANGED, this.OnRotationChanged, this),
                                                        this.node.off(I.EventType.TRANSFORM_CHANGED, this.OnScaleChanged, this),
                                                        this.node.off(I.EventType.SIZE_CHANGED, this.OnSizeChanged, this),
                                                        pt.off(dt.EVENT_BEFORE_DRAW, this.StateCheck, this));
                                                }),
                                                (a.onEnable = function () {
                                                    (t.prototype.onEnable && t.prototype.onEnable.call(this), this.m_syncOnEnable && this.SyncAware());
                                                }),
                                                (a.onDisable = function () {
                                                    (t.prototype.onDisable && t.prototype.onDisable.call(this), this.m_syncOnDisable && this.SyncAware());
                                                }),
                                                (a.SyncAware = function () {
                                                    (this.SyncActive(),
                                                        this.SyncSize(),
                                                        this.SyncPosition(),
                                                        this.SyncRotation(),
                                                        this.SyncOpacity(),
                                                        this.SyncColor(),
                                                        this.SyncScale());
                                                }),
                                                (a.StateCheck = function () {
                                                    this.node.isValid && this.node._renderFlag && this.OnOpacityChanged();
                                                }),
                                                (a.SyncGroupChild = function (t, e) {
                                                    var i = e.getComponent(r);
                                                    this.m_syncRecursive && i && t.call(i);
                                                }),
                                                (a.SyncScale = function () {
                                                    if (this.m_scaleAware)
                                                        for (var t, e = v(this.m_nodes); !(t = e()).done; ) {
                                                            var i = t.value;
                                                            i &&
                                                                i.isValid &&
                                                                ((i.scale = new x(this.node.scale.x, this.node.scale.y, this.node.scale.z)),
                                                                this.SyncGroupChild(this.SyncScale, i));
                                                        }
                                                }),
                                                (a.OnScaleChanged = function () {
                                                    this.SyncScale();
                                                }),
                                                (a.SyncColor = function () {
                                                    if (this.m_colorAware)
                                                        for (var t, e = this.node.getComponent(M).color, i = v(this.m_nodes); !(t = i()).done; ) {
                                                            var n = t.value;
                                                            n && n.isValid && ((n.getComponent(M).color = e), this.SyncGroupChild(this.SyncColor, n));
                                                        }
                                                }),
                                                (a.OnColorChanged = function () {
                                                    this.SyncColor();
                                                }),
                                                (a.SyncOpacity = function () {
                                                    if (this.m_colorAware && this.m_colorMode & Un.A)
                                                        for (var t, e = v(this.m_nodes); !(t = e()).done; ) {
                                                            var i = t.value;
                                                            i &&
                                                                i.isValid &&
                                                                ((i.getComponent(_t).opacity = this.node.getComponent(_t).opacity),
                                                                this.SyncGroupChild(this.SyncOpacity, i));
                                                        }
                                                }),
                                                (a.OnOpacityChanged = function () {
                                                    this.SyncOpacity();
                                                }),
                                                (a.SyncRotation = function () {
                                                    if (this.m_rotationAware) {
                                                        var t = this.node.angle - this.m_lastRotation;
                                                        this.m_lastRotation = this.node.angle;
                                                        for (var e, i = v(this.m_nodes); !(e = i()).done; ) {
                                                            var n = e.value;
                                                            n && n.isValid && ((n.angle = n.angle + t), this.SyncGroupChild(this.SyncRotation, n));
                                                        }
                                                    }
                                                }),
                                                (a.OnRotationChanged = function () {
                                                    this.SyncRotation();
                                                }),
                                                (a.SyncActive = function () {
                                                    if (this.m_activeAware)
                                                        for (var t, e = this.node.active, i = v(this.m_nodes); !(t = i()).done; ) {
                                                            var n = t.value;
                                                            n && n.isValid && ((n.active = e), this.SyncGroupChild(this.SyncActive, n));
                                                        }
                                                }),
                                                (a.OnActiveChanged = function () {
                                                    this.SyncActive();
                                                }),
                                                (a.SyncPosition = function () {
                                                    if (this.m_positionAware) {
                                                        var t = this.node.position.x - this.m_lastPos.x,
                                                            e = this.node.position.y - this.m_lastPos.y;
                                                        ((this.m_lastPos.x = this.node.position.x), (this.m_lastPos.y = this.node.position.y));
                                                        for (var i, n = v(this.m_nodes); !(i = n()).done; ) {
                                                            var o = i.value;
                                                            o &&
                                                                o.isValid &&
                                                                (o.setPosition(at(o.position.x + t, o.position.y + e, o.position.z)),
                                                                this.SyncGroupChild(this.SyncPosition, o));
                                                        }
                                                    }
                                                }),
                                                (a.OnPositionChanged = function () {
                                                    this.SyncPosition();
                                                }),
                                                (a.SyncSize = function () {
                                                    if (this.m_sizeAware)
                                                        for (var t, e = v(this.m_nodes); !(t = e()).done; ) {
                                                            var i = t.value;
                                                            i &&
                                                                i.isValid &&
                                                                (this.m_sizeMode & Hn.WIDTH && (i.getComponent(N).width = this.node.getComponent(N).width),
                                                                this.m_sizeMode & Hn.HEIGHT && (i.getComponent(N).height = this.node.getComponent(N).height),
                                                                this.SyncGroupChild(this.SyncSize, i));
                                                        }
                                                }),
                                                (a.OnSizeChanged = function () {
                                                    this.SyncSize();
                                                }),
                                                o(r, [
                                                    {
                                                        key: "Nodes",
                                                        get: function () {
                                                            return this.m_nodes;
                                                        },
                                                    },
                                                ]),
                                                r
                                            );
                                        })(G)).prototype,
                                        "m_syncOnEnable",
                                        [cn],
                                        {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return !1;
                                            },
                                        },
                                    )),
                                    (On = t(En.prototype, "m_syncOnDisable", [un], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !1;
                                        },
                                    })),
                                    (Nn = t(En.prototype, "m_syncRecursive", [mn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !1;
                                        },
                                    })),
                                    (In = t(En.prototype, "m_nodes", [hn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return [];
                                        },
                                    })),
                                    (An = t(En.prototype, "m_activeAware", [pn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !0;
                                        },
                                    })),
                                    (kn = t(En.prototype, "m_positionAware", [dn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !1;
                                        },
                                    })),
                                    (xn = t(En.prototype, "m_positionMode", [_n], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return Vn.BOTH;
                                        },
                                    })),
                                    (Rn = t(En.prototype, "m_rotationAware", [fn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !1;
                                        },
                                    })),
                                    (Ln = t(En.prototype, "m_scaleAware", [yn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !1;
                                        },
                                    })),
                                    (Pn = t(En.prototype, "m_scaleMode", [gn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return Wn.BOTH;
                                        },
                                    })),
                                    (Bn = t(En.prototype, "m_colorAware", [Sn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !1;
                                        },
                                    })),
                                    (Fn = t(En.prototype, "m_colorMode", [bn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return Un.RGBA;
                                        },
                                    })),
                                    (Mn = t(En.prototype, "m_sizeAware", [vn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !1;
                                        },
                                    })),
                                    (Dn = t(En.prototype, "m_sizeMode", [wn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return Hn.BOTH;
                                        },
                                    })),
                                    (Cn = En)),
                                ) || Cn),
                        ) || Cn),
                ));
            (C._RF.pop(), C._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", void 0));
            var $n,
                to,
                eo,
                io,
                no,
                oo,
                ro,
                ao,
                so,
                lo,
                co,
                uo,
                mo,
                ho = E.ccclass,
                po = E.property,
                _o = E.executeInEditMode,
                fo = E.requireComponent;
            ho("LabelSpacingX")(
                (Yn =
                    fo(B)(
                        (Yn =
                            _o(
                                ((Qn = t(
                                    (Zn = (function (t) {
                                        function r() {
                                            for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                            return ((e = t.call.apply(t, [this].concat(r)) || this), i(e, "_spacingX", Qn, n(e)), e);
                                        }
                                        e(r, t);
                                        var a = r.prototype;
                                        return (
                                            (a.onEnable = function () {
                                                this.resetSpacingX();
                                            }),
                                            (a.resetSpacingX = function () {
                                                var t = this.node.getComponent(B);
                                                t && t.cacheMode === B.CacheMode.CHAR && (t.spacingX = this._spacingX);
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
                                    [po],
                                    {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    },
                                )),
                                t(Zn.prototype, "spacingX", [po], Object.getOwnPropertyDescriptor(Zn.prototype, "spacingX"), Zn.prototype),
                                (Yn = Zn)),
                            ) || Yn),
                    ) || Yn),
            );
            (C._RF.pop(), C._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", void 0));
            var yo,
                go = E.ccclass,
                So = E.executeInEditMode,
                bo = E.property,
                vo = "db://assets/game/Text/en/",
                wo = "db://assets/otherAsttText/AsttText/en/";
            !(function (t) {
                ((t[(t.PNG = 0)] = "PNG"), (t[(t.JPG = 1)] = "JPG"));
            })(yo || (yo = {}));
            var Co,
                Eo,
                To,
                Oo,
                No,
                Io,
                Ao,
                ko,
                xo,
                Ro,
                Lo,
                Po,
                Bo,
                Fo,
                Mo = { PNG: ".png", JPG: ".jpg" };
            (($n = go("LangImg")),
                (to = bo({ type: mt, tooltip: "圖片路徑" })),
                (eo = bo({ type: mt, tooltip: "額外路徑，如果不是在game/Text/en/或otherAsttText/AsttText/en/下，請填入後續路徑" })),
                (io = bo({ type: tt(yo), tooltip: "圖片類型" })),
                (no = bo({ type: K, tooltip: "是否為通用圖片" })),
                (oo = bo({ type: K, tooltip: "是否由這個組件來設定多語系圖片" })),
                $n(
                    (ro =
                        So(
                            ((so = t(
                                (ao = (function (t) {
                                    function o() {
                                        for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                        return (
                                            (e = t.call.apply(t, [this].concat(r)) || this),
                                            i(e, "m_path", so, n(e)),
                                            i(e, "m_extraPath", lo, n(e)),
                                            i(e, "m_imgTypeNo", co, n(e)),
                                            i(e, "m_isCommon", uo, n(e)),
                                            i(e, "m_isUsingSetImage", mo, n(e)),
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
                                                    if (!(e = m.GetCommonAtlas()))
                                                        return void m.RegisterOnCommonAltasLoadedCb(function () {
                                                            t.SetImg();
                                                        });
                                                } else if (!(e = m.GetGameAtlas()))
                                                    return void m.RegisterOnGameAltasLoadedCb(function () {
                                                        t.SetImg();
                                                    });
                                                var i = this.node.getComponent(R);
                                                (i || (i = this.node.addComponent(R)), (i.spriteFrame = e.getSpriteFrame(this.m_path)));
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
                                            var t = d(
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
                                                                            (e = (this.m_isCommon ? wo : vo) + this.m_extraPath + this.m_path),
                                                                            (i = Mo.PNG),
                                                                            (n = yo[this.m_imgTypeNo]),
                                                                            Object.prototype.hasOwnProperty.call(yo, n) &&
                                                                                ((o = yo[n]), Number(o) === this.m_imgTypeNo && (i = Mo[n])),
                                                                            (t.next = 8),
                                                                            Editor.Message.request("asset-db", "query-assets", {
                                                                                importer: "sprite-frame",
                                                                                pattern: e + i,
                                                                            })
                                                                        );
                                                                    case 8:
                                                                        ((r = t.sent),
                                                                            (a = { uuid: r[0].uuid }),
                                                                            P.loadAny(a, function (t, e) {
                                                                                if (t) et("Failed to load cc.SpriteFrame resources:", t);
                                                                                else {
                                                                                    var i = s.node.getComponent(R);
                                                                                    (i || (i = s.node.addComponent(R)), (i.spriteFrame = e));
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
                                [to],
                                {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                    initializer: function () {
                                        return "";
                                    },
                                },
                            )),
                            (lo = t(ao.prototype, "m_extraPath", [eo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            (co = t(ao.prototype, "m_imgTypeNo", [io], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return yo.PNG;
                                },
                            })),
                            (uo = t(ao.prototype, "m_isCommon", [no], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (mo = t(ao.prototype, "m_isUsingSetImage", [oo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (ro = ao)),
                        ) || ro),
                ));
            (C._RF.pop(), C._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", "MarqueeComponent", void 0));
            var Do,
                zo,
                Go,
                Ho,
                Vo,
                Wo,
                Uo,
                jo,
                Jo,
                Xo = E.ccclass,
                qo = E.property;
            ((Co = qo({ type: Y, tooltip: "每秒的位移量" })),
                (Eo = qo({ type: Y, tooltip: "循環播放的間隔" })),
                (To = qo({ type: Y, tooltip: "未超出的停留時間" })),
                (Oo = qo({ type: Y, tooltip: "超出時的停留時間" })),
                (No = qo({ type: Y, tooltip: "尾部保留的空間" })),
                (Io = qo({ type: I, tooltip: "跑馬燈內容節點" })),
                Xo(
                    ((xo = t(
                        (ko = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_moveSpeed", xo, n(e)),
                                    i(e, "m_delayTime", Ro, n(e)),
                                    i(e, "m_waitTime", Lo, n(e)),
                                    i(e, "m_moveDelayTime", Po, n(e)),
                                    i(e, "m_tailLeftSpace", Bo, n(e)),
                                    i(e, "m_content", Fo, n(e)),
                                    (e.m_imgs = null),
                                    (e.m_viewWidth = null),
                                    (e.m_stringSprite = null),
                                    (e.m_isStart = !1),
                                    (e.m_isStop = !1),
                                    (e.m_scale = 1),
                                    (e.m_imgIndex = -1),
                                    e
                                );
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.Init = function (t) {
                                    ((this.m_imgs = t), (this.m_viewWidth = this.node.getComponent(N).contentSize.width));
                                    var e = this.m_content ? this.m_content : this.node.children[0];
                                    (t &&
                                        t.length > 0 &&
                                        (e || ((e = new I()).addComponent(N), this.node.addChild(e)),
                                        (this.m_stringSprite = e.getComponent(R)),
                                        this.m_stringSprite || (this.m_stringSprite = e.addComponent(R)),
                                        (this.m_stringSprite.type = R.Type.SIMPLE),
                                        (this.m_stringSprite.sizeMode = R.SizeMode.TRIMMED)),
                                        e.getComponent(N).setAnchorPoint(ht(0, 0.5)),
                                        (this.m_scale = e.scale.x));
                                }),
                                (r.ShowOnce = (function () {
                                    var t = d(
                                        S().mark(function t(e) {
                                            var i, n, o, r, l, c, u, m, h, p;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (!this.m_isStart) {
                                                                    t.next = 2;
                                                                    break;
                                                                }
                                                                return t.abrupt("return");
                                                            case 2:
                                                                if (((this.m_isStart = !0), "string" != typeof e)) {
                                                                    t.next = 24;
                                                                    break;
                                                                }
                                                                if (!(i = this.m_content.getComponent(ft))) {
                                                                    t.next = 19;
                                                                    break;
                                                                }
                                                                return (
                                                                    (i.string = e),
                                                                    (n = s.times(i.node.getComponent(N).width + this.m_tailLeftSpace, this.m_scale)),
                                                                    (i.node.active = !0),
                                                                    (o = n + this.m_viewWidth),
                                                                    (r = s.divide(o, this.m_moveSpeed)),
                                                                    (l = i.node.position.x),
                                                                    rt(i.node)
                                                                        .to(r, { position: at(l - o, 0) })
                                                                        .start(),
                                                                    (t.next = 15),
                                                                    a.Wait(this, r)
                                                                );
                                                            case 15:
                                                                ((i.node.active = !1), i.node.setPosition(at(this.m_viewWidth, 0)), (t.next = 22));
                                                                break;
                                                            case 19:
                                                                return (et("RichText doesn't exist"), (this.m_isStart = !1), t.abrupt("return"));
                                                            case 22:
                                                                t.next = 44;
                                                                break;
                                                            case 24:
                                                                if (
                                                                    (e
                                                                        ? (this.m_imgIndex++,
                                                                          this.m_imgIndex >= this.m_imgs.length && (this.m_imgIndex = 0),
                                                                          (c = this.m_imgs[this.m_imgIndex]))
                                                                        : (c = this.m_imgs[Math.floor(Math.random() * this.m_imgs.length)]),
                                                                    (this.m_stringSprite.spriteFrame = c),
                                                                    (u = s.times(
                                                                        this.m_stringSprite.spriteFrame.rect.width + this.m_tailLeftSpace,
                                                                        this.m_scale,
                                                                    )),
                                                                    (this.m_stringSprite.node.active = !0),
                                                                    !(u > this.m_viewWidth))
                                                                ) {
                                                                    t.next = 39;
                                                                    break;
                                                                }
                                                                return (
                                                                    (this.m_stringSprite.node.position = at(0, 0)),
                                                                    (t.next = 32),
                                                                    a.Wait(this, this.m_moveDelayTime)
                                                                );
                                                            case 32:
                                                                return (
                                                                    (m = u + this.m_viewWidth),
                                                                    (h = s.divide(m, this.m_moveSpeed)),
                                                                    rt(this.m_stringSprite.node)
                                                                        .to(h, { position: at(-u, 0) })
                                                                        .start(),
                                                                    (t.next = 37),
                                                                    a.Wait(this, h)
                                                                );
                                                            case 37:
                                                                t.next = 43;
                                                                break;
                                                            case 39:
                                                                return (
                                                                    (p = s.minus(this.m_viewWidth, u)),
                                                                    (this.m_stringSprite.node.position = at(s.divide(p, 2), 0)),
                                                                    (t.next = 43),
                                                                    a.Wait(this, this.m_waitTime)
                                                                );
                                                            case 43:
                                                                this.m_stringSprite.node.active = !1;
                                                            case 44:
                                                                this.m_isStart = !1;
                                                            case 45:
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
                                (r.ShowForever = (function () {
                                    var t = d(
                                        S().mark(function t(e) {
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                void 0 === e && (e = !1);
                                                            case 1:
                                                                if (this.m_isStop) {
                                                                    t.next = 9;
                                                                    break;
                                                                }
                                                                return ((t.next = 4), this.ShowOnce(e));
                                                            case 4:
                                                                if (!(this.m_delayTime && this.m_delayTime > 0)) {
                                                                    t.next = 7;
                                                                    break;
                                                                }
                                                                return ((t.next = 7), a.Wait(this, this.m_delayTime));
                                                            case 7:
                                                                t.next = 1;
                                                                break;
                                                            case 9:
                                                                this.m_isStop = !1;
                                                            case 10:
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
                                (r.Stop = function () {
                                    this.m_isStop = !0;
                                }),
                                (r.ChangeTimeSetting = function (t, e, i, n, o) {
                                    ((this.m_moveSpeed = t),
                                        (this.m_delayTime = e),
                                        (this.m_waitTime = i),
                                        (this.m_moveDelayTime = n),
                                        (this.m_tailLeftSpace = o));
                                }),
                                o
                            );
                        })(G)).prototype,
                        "m_moveSpeed",
                        [Co],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return 0;
                            },
                        },
                    )),
                    (Ro = t(ko.prototype, "m_delayTime", [Eo], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (Lo = t(ko.prototype, "m_waitTime", [To], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (Po = t(ko.prototype, "m_moveDelayTime", [Oo], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (Bo = t(ko.prototype, "m_tailLeftSpace", [No], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (Fo = t(ko.prototype, "m_content", [Io], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Ao = ko)),
                ));
            (C._RF.pop(), C._RF.push({}, "93417uqlh9Fm6TH2poz4GO4", "NearWinEffectComponent", void 0));
            var Ko,
                Yo,
                Zo,
                Qo,
                $o,
                tr = "FadeIn",
                er = "FadeOut",
                ir = "NearWin",
                nr = E.ccclass,
                or = E.property;
            ((Do = nr("NearWinEffectComponent")),
                (zo = or({ type: Number, tooltip: "淡入時間" })),
                (Go = or({ type: Number, tooltip: "淡出時間" })),
                (Ho = or({ type: K, tooltip: "是否使用spine動畫" })),
                Do(
                    ((Uo = t(
                        (Wo = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_fadeInTime", Uo, n(e)),
                                    i(e, "m_fadeOutTime", jo, n(e)),
                                    i(e, "m_isPlaySpine", Jo, n(e)),
                                    (e.m_cancelCb = null),
                                    (e.m_spine = null),
                                    e
                                );
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.start = function () {
                                    this.m_spine || (this.node.active = !1);
                                }),
                                (r.FadeIn = (function () {
                                    var t = d(
                                        S().mark(function t(e) {
                                            var i,
                                                n = this;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if ((this.CheckSpine(), (this.node.active = !0), !this.m_isPlaySpine)) {
                                                                    t.next = 9;
                                                                    break;
                                                                }
                                                                return ((t.next = 5), w.PlayAnimation(this.m_spine, tr));
                                                            case 5:
                                                                (t.sent || w.PlayAnimation(this.m_spine, ir, !0), (t.next = 16));
                                                                break;
                                                            case 9:
                                                                return (
                                                                    yt.stopAllByTarget(this.m_spine.color),
                                                                    null == (i = this.m_cancelCb) || i.call(this),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.color = new T(
                                                                        this.m_spine.color.r,
                                                                        this.m_spine.color.g,
                                                                        this.m_spine.color.b,
                                                                        0,
                                                                    )),
                                                                    null == e || e(),
                                                                    (t.next = 16),
                                                                    new Promise(function (t) {
                                                                        ((n.m_cancelCb = function () {
                                                                            t();
                                                                        }),
                                                                            rt(n.m_spine.color)
                                                                                .to(n.m_fadeInTime, { a: 255 })
                                                                                .call(function () {
                                                                                    (t(), (n.m_cancelCb = null));
                                                                                })
                                                                                .start());
                                                                    })
                                                                );
                                                            case 16:
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
                                (r.FadeOut = (function () {
                                    var t = d(
                                        S().mark(function t() {
                                            var e,
                                                i,
                                                n = this;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if ((this.CheckSpine(), !this.m_isPlaySpine)) {
                                                                    t.next = 12;
                                                                    break;
                                                                }
                                                                if (this.node.active) {
                                                                    t.next = 4;
                                                                    break;
                                                                }
                                                                return t.abrupt("return", !0);
                                                            case 4:
                                                                return (this.CheckSpine(), (t.next = 7), w.PlayAnimation(this.m_spine, er));
                                                            case 7:
                                                                return ((e = t.sent) || (this.node.active = !1), t.abrupt("return", !e));
                                                            case 12:
                                                                if (!(this.m_spine.color.a <= 0)) {
                                                                    t.next = 14;
                                                                    break;
                                                                }
                                                                return t.abrupt("return", !1);
                                                            case 14:
                                                                return (
                                                                    yt.stopAllByTarget(this.m_spine.color),
                                                                    null == (i = this.m_cancelCb) || i.call(this),
                                                                    (t.next = 18),
                                                                    new Promise(function (t) {
                                                                        ((n.m_cancelCb = function () {
                                                                            t(!1);
                                                                        }),
                                                                            rt(n.m_spine.color)
                                                                                .to(n.m_fadeOutTime, { a: 0 })
                                                                                .call(function () {
                                                                                    (t(!0), (n.m_cancelCb = null), (n.node.active = !1));
                                                                                })
                                                                                .start());
                                                                    })
                                                                );
                                                            case 18:
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
                                (r.CheckSpine = function () {
                                    this.m_spine ||
                                        ((this.m_spine = this.node.getComponent($.Skeleton)), this.m_isPlaySpine && this.m_spine.setMix(tr, er, 0.05));
                                }),
                                o
                            );
                        })(G)).prototype,
                        "m_fadeInTime",
                        [zo],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return 0.1;
                            },
                        },
                    )),
                    (jo = t(Wo.prototype, "m_fadeOutTime", [Go], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0.2;
                        },
                    })),
                    (Jo = t(Wo.prototype, "m_isPlaySpine", [Ho], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Vo = Wo)),
                ));
            (C._RF.pop(), C._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", void 0));
            var rr,
                ar,
                sr,
                lr,
                cr,
                ur = 0,
                mr = 1,
                hr = 2,
                pr = E.ccclass,
                dr = E.property;
            ((Ko = pr("RenderDataBump")),
                (Yo = dr({ tooltip: "是否一同影響子節點" })),
                Ko(
                    (($o = t(
                        (Qo = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return ((e = t.call.apply(t, [this].concat(r)) || this), i(e, "affectsChildren", $o, n(e)), (e.states = ur), e);
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.onLoad = function () {
                                    this.node.on(I.EventType.PARENT_CHANGED, this.checkStates, this);
                                }),
                                (r.onDestroy = function () {
                                    this.node.off(I.EventType.PARENT_CHANGED, this.checkStates, this);
                                }),
                                (r.checkStates = function () {
                                    this.node.parent
                                        ? this.states === mr && this.requestRenderData()
                                        : (this.states !== hr && this.states !== ur) || this.destroyRenderData();
                                }),
                                (r.destroyRenderData = function () {
                                    var t = this.node.getComponent(M);
                                    if ((null == t || t.destroyRenderData(), this.affectsChildren))
                                        for (var e, i = this.node.getComponentsInChildren(M), n = v(i); !(e = n()).done; ) {
                                            var o = e.value;
                                            null == o || o.destroyRenderData();
                                        }
                                    this.states = mr;
                                }),
                                (r.requestRenderData = function () {
                                    var t = this.node.getComponent(M);
                                    if ((null == t || t._flushAssembler(), this.affectsChildren))
                                        for (var e, i = this.node.getComponentsInChildren(M), n = v(i); !(e = n()).done; ) {
                                            var o = e.value;
                                            null == o || o._flushAssembler();
                                        }
                                    this.states = hr;
                                }),
                                o
                            );
                        })(G)).prototype,
                        "affectsChildren",
                        [Yo],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        },
                    )),
                    (Zo = Qo)),
                ));
            (C._RF.pop(), C._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", void 0));
            var _r,
                fr,
                yr,
                gr,
                Sr = E.ccclass,
                br = E.property;
            ((rr = Sr("ScrollEventHandler")),
                (ar = br({ type: I, tooltip: "真實放置內容的節點，有自行分層請把每一層的根節點放進去" })),
                rr(
                    ((cr = t(
                        (lr = (function (t) {
                            function r() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_contents", cr, n(e)),
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
                                    ((this.m_scrollView = this.node.getComponent(gt)),
                                        this.m_scrollView
                                            ? this.m_scrollView.node.on(gt.EventType.SCROLLING, function () {
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
                                                    a = r.getComponent(_t);
                                                a || (a = r.addComponent(_t));
                                                var s = this.GetTopLeftWorld(r),
                                                    l = this.GetBottomRightWorld(r);
                                                this.IsInside(s, i, n) || this.IsInside(l, i, n) ? (a.opacity = 255) : (a.opacity = 0);
                                            }
                                }),
                                (a.GetTopLeftWorld = function (t) {
                                    var e = t.getPosition(),
                                        i = t.getComponent(N).contentSize,
                                        n = t.getComponent(N).anchorPoint,
                                        o = new x(e.x - i.width * n.x, e.y - i.height * n.y, e.z);
                                    return t.parent.getComponent(N).convertToWorldSpaceAR(o);
                                }),
                                (a.GetBottomRightWorld = function (t) {
                                    var e = t.getPosition(),
                                        i = t.getComponent(N).contentSize,
                                        n = t.getComponent(N).anchorPoint,
                                        o = new x(e.x + i.width * (1 - n.x), e.y + i.height * (1 - n.y), e.z);
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
                        [ar],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return [];
                            },
                        },
                    )),
                    (sr = lr)),
                ));
            (C._RF.pop(), C._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", void 0));
            var vr,
                wr,
                Cr,
                Er,
                Tr,
                Or,
                Nr,
                Ir,
                Ar,
                kr,
                xr,
                Rr,
                Lr,
                Pr,
                Br,
                Fr,
                Mr,
                Dr,
                zr,
                Gr,
                Hr,
                Vr,
                Wr,
                Ur,
                jr,
                Jr,
                Xr,
                qr,
                Kr,
                Yr,
                Zr,
                Qr,
                $r,
                ta,
                ea,
                ia,
                na,
                oa,
                ra = "GameIntro_L",
                aa = "GameIntro_S",
                sa = "FG_Declare_Start_L",
                la = "FG_Declare_Start_S",
                ca = "FG_Compliment_Start_L",
                ua = "FG_Compliment_Start_S",
                ma = E.ccclass;
            ((_r = (0, E.property)({ type: $.Skeleton, tooltip: "spine" })),
                ma(
                    ((gr = t(
                        (yr = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return ((e = t.call.apply(t, [this].concat(r)) || this), i(e, "m_spine", gr, n(e)), e);
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.ShowGameIntro = (function () {
                                    var t = d(
                                        S().mark(function t(e, i) {
                                            var n, o;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = e ? ra : aa),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.paused = !1),
                                                                    (o = function (t) {
                                                                        "AnimationEvent" === t && (null == i || i());
                                                                    }),
                                                                    (t.next = 6),
                                                                    w.PlayAnimation(this.m_spine, n, !1, 0, o)
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
                                    var t = d(
                                        S().mark(function t(e, i) {
                                            var n, o;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = e ? sa : la),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.paused = !1),
                                                                    (o = function (t) {
                                                                        "AnimationEvent" === t && (null == i || i());
                                                                    }),
                                                                    (t.next = 6),
                                                                    w.PlayAnimation(this.m_spine, n, !1, 0, o)
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
                                    var t = d(
                                        S().mark(function t(e, i) {
                                            var n, o;
                                            return S().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = e ? ca : ua),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.paused = !1),
                                                                    (o = function (t) {
                                                                        "AnimationEvent" === t && (null == i || i());
                                                                    }),
                                                                    (t.next = 6),
                                                                    w.PlayAnimation(this.m_spine, n, !1, 0, o)
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
                                        w.PlayAnimation(this.m_spine, t ? ra : aa),
                                        (this.m_spine.paused = !0));
                                }),
                                (r.Rotation = function (t) {
                                    if (this.node.active) {
                                        var e = t ? ra : aa;
                                        ((this.m_spine.paused = !1),
                                            this.m_spine.clearTracks(),
                                            this.m_spine.setToSetupPose(),
                                            w.PlayAnimation(this.m_spine, e),
                                            (this.m_spine.paused = !0));
                                    }
                                }),
                                o
                            );
                        })(G)).prototype,
                        "m_spine",
                        [_r],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (fr = yr)),
                ));
            (C._RF.pop(), C._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", void 0));
            var ha,
                pa = E.ccclass,
                da = E.property,
                _a = E.executeInEditMode,
                fa = E.help,
                ya = [
                    { name: "backIn", desc: "回退:緩入" },
                    { name: "backInOut", desc: "回退:緩入緩出" },
                    { name: "backOut", desc: "回退:緩出" },
                    { name: "backOutIn", desc: "回退:緩出緩入" },
                    { name: "bounceIn", desc: "彈跳:緩入" },
                    { name: "bounceInOut", desc: "彈跳:緩入緩出" },
                    { name: "bounceOut", desc: "彈跳:緩出" },
                    { name: "bounceOutIn", desc: "彈跳:緩出緩入" },
                    { name: "circIn", desc: "迴圈:緩入 由慢到快" },
                    { name: "circInOut", desc: "迴圈:緩入緩出 由慢到很快再到慢" },
                    { name: "circOut", desc: "迴圈:緩出 由快到慢" },
                    { name: "circOutIn", desc: "迴圈:緩出緩入 由慢到很快再到慢" },
                    { name: "constant", desc: "constant" },
                    { name: "cubicIn", desc: "立方曲線緩入 由慢到快" },
                    { name: "cubicInOut", desc: "立方曲線緩入緩出 由慢到快再到慢" },
                    { name: "cubicOut", desc: "立方曲線緩出 由快到慢" },
                    { name: "cubicOutIn", desc: "立方曲線緩出緩入 由慢到快再到慢" },
                    { name: "elasticIn", desc: "彈簧回震:緩入" },
                    { name: "elasticInOut", desc: "彈簧回震:緩入緩出" },
                    { name: "elasticOut", desc: "彈簧回震:緩出" },
                    { name: "elasticOutIn", desc: "彈簧回震:緩出緩入" },
                    { name: "expoIn", desc: "指數曲線緩入 由慢到快" },
                    { name: "expoInOut", desc: "指數曲線緩入和緩出 由慢到很快再到慢" },
                    { name: "expoOut", desc: "指數曲線緩出 由快到慢" },
                    { name: "expoOutIn", desc: "指數曲線緩出緩入和 由慢到很快再到慢" },
                    { name: "fade", desc: "漸褪效果" },
                    { name: "linear", desc: "線性" },
                    { name: "quadIn", desc: "平方曲線緩入 由慢到快" },
                    { name: "quadInOut", desc: "平方曲線緩入緩出 由慢到快再到慢" },
                    { name: "quadOut", desc: "平方曲線緩出 由快到慢" },
                    { name: "quadOutIn", desc: "平方曲線緩出緩入 由慢到快再到慢" },
                    { name: "quartIn", desc: "四次方曲線緩入 由慢到快" },
                    { name: "quartInOut", desc: "四次方曲線緩入緩出 由慢到快再到慢" },
                    { name: "quartOut", desc: "四次方曲線緩出 由快到慢" },
                    { name: "quartOutIn", desc: "四次方曲線緩出緩入 由慢到快再到慢" },
                    { name: "quintIn", desc: "五次方曲線緩入 由慢到快" },
                    { name: "quintInOut", desc: "五次方曲線緩入緩出 由慢到快再到慢" },
                    { name: "quintOut", desc: "五次方曲線緩出 由慢到快" },
                    { name: "quintOutIn", desc: "五次方曲線緩出緩入 由慢到快再到慢" },
                    { name: "sineIn", desc: "正弦曲線緩入 由慢到快" },
                    { name: "sineInOut", desc: "正弦曲線緩入緩出 由慢到快再到慢" },
                    { name: "sineOut", desc: "正弦曲線緩出 由快到慢" },
                    { name: "sineOutIn", desc: "正弦曲線緩出緩入 由慢到快再到慢" },
                    { name: "smooth", desc: "平滑效果" },
                ],
                ga = tt({}),
                Sa = tt({});
            !(function (t) {
                ((t[(t.None = 0)] = "None"), (t[(t.FadeIn = 1)] = "FadeIn"), (t[(t.FadeOut = 2)] = "FadeOut"));
            })(ha || (ha = {}));
            var ba,
                va = tt({ None: ha.None, FadeIn: ha.FadeIn, FadeOut: ha.FadeOut }),
                wa = function (t) {
                    var e,
                        i = 0;
                    if (0 === t.length) return i;
                    for (e = 0; e < t.length; e++) ((i = (i << 5) - i + t.charCodeAt(e)), (i |= 0));
                    return i;
                },
                Ca =
                    ((vr = pa("_TweenInfo")),
                    (wr = da({ visible: !1, tooltip: "Easing" })),
                    (Cr = da({ type: ga, visible: !1 })),
                    (Er = da({ visible: !0, displayName: "緩動效果", type: ga })),
                    (Tr = da({ type: va, visible: !1 })),
                    (Or = da({ visible: !0, displayName: "fade type", type: va })),
                    (Nr = da({ min: 0, visible: !0, displayName: "時間" })),
                    vr(
                        ((kr = t(
                            (Ar = (function () {
                                function t() {
                                    (i(this, "m_EasingName", kr, this),
                                        i(this, "__easingIdx", xr, this),
                                        i(this, "__fadeType", Rr, this),
                                        (this._EasingEnumList = []),
                                        i(this, "duration", Lr, this));
                                }
                                return (
                                    o(t, [
                                        { key: "_easingIdx", get: function () {}, set: function (t) {} },
                                        {
                                            key: "_fadeType",
                                            get: function () {
                                                return this.__fadeType;
                                            },
                                            set: function (t) {},
                                        },
                                    ]),
                                    t
                                );
                            })()).prototype,
                            "m_EasingName",
                            [wr],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            },
                        )),
                        (xr = t(Ar.prototype, "__easingIdx", [Cr], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        t(Ar.prototype, "_easingIdx", [Er], Object.getOwnPropertyDescriptor(Ar.prototype, "_easingIdx"), Ar.prototype),
                        (Rr = t(Ar.prototype, "__fadeType", [Tr], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        t(Ar.prototype, "_fadeType", [Or], Object.getOwnPropertyDescriptor(Ar.prototype, "_fadeType"), Ar.prototype),
                        (Lr = t(Ar.prototype, "duration", [Nr], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return 1;
                            },
                        })),
                        (Ir = Ar)),
                    ) || Ir);
            ((Pr = pa("Shake")),
                (Br = fa("https://docs.cocos.com/creator/3.6/manual/zh/tween/tween-function.html#%E5%86%85%E7%BD%AE%E7%BC%93%E5%8A%A8%E5%87%BD%E6%95%B0")),
                (Fr = da({ visible: !1, displayName: "正負交替", tooltip: "重複次數>1時, 正負交替" })),
                (Mr = da({
                    type: St,
                    displayName: "預先定義shake.json",
                    visible: function () {
                        return (this.shakeJson && this._updateShakeEnum(this.shakeJson.json.shakelist), !0);
                    },
                })),
                (Dr = da({ visible: !0, tooltip: "自定義的shake name" })),
                (zr = da({ type: Sa, visible: !1 })),
                (Gr = da({ visible: !0, displayName: "儲存到預先定義.json", tooltip: "若Shakename不為:custom,才會儲存" })),
                (Hr = da({ visible: !0, displayName: "預先定義", tooltip: "切換後會以預先定義的數值直接覆蓋所有設定值", type: Sa })),
                (Vr = da({ readonly: !0, displayName: "總震動時間" })),
                (Wr = da({ visible: !0, displayName: "振幅" })),
                (Ur = da({ min: 1, step: 1, visible: !0, displayName: "震動頻率/秒" })),
                (jr = da({ step: 1, visible: !0, displayName: "振幅x/y/z權重:%" })),
                (Jr = da({ visible: !1, type: [Ca] })),
                (Xr = da({ type: [Ca], tooltip: "輸入更改 緩動效果 數量", displayName: "緩動效果" })),
                Pr(
                    (qr =
                        _a(
                            (qr =
                                Br(
                                    ((Yr = t(
                                        (Kr = (function (t) {
                                            function r() {
                                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                                return (
                                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                                    i(e, "alternately", Yr, n(e)),
                                                    i(e, "shakeJson", Zr, n(e)),
                                                    i(e, "shakename", Qr, n(e)),
                                                    i(e, "__ShakeIdx", $r, n(e)),
                                                    i(e, "Duration", ta, n(e)),
                                                    i(e, "magnitude", ea, n(e)),
                                                    i(e, "frequency", ia, n(e)),
                                                    i(e, "weight", na, n(e)),
                                                    i(e, "_TweenList", oa, n(e)),
                                                    (e._EasingEnumList = []),
                                                    (e._ShakeEnumList = []),
                                                    (e.originPos = new x()),
                                                    (e._TestShakeCnt = 0),
                                                    e
                                                );
                                            }
                                            e(r, t);
                                            var a = r.prototype;
                                            return (
                                                (a.updateDuration = function () {
                                                    for (var t = 0, e = 0; e < this._TweenList.length; e++) t += this._TweenList[e].duration;
                                                    this.Duration = t;
                                                }),
                                                (a.setTweenJson = function (t) {
                                                    var e = this.shakeJson.json.shakelist;
                                                    if ("custom" != t) e[t];
                                                    else console.warn("custom 不會儲存到預先定義.json");
                                                }),
                                                (a.getTweenJson = function () {
                                                    for (
                                                        var t = {
                                                                magnitude: this.magnitude,
                                                                frequency: this.frequency,
                                                                weight: { x: this.weight.x, y: this.weight.y, z: this.weight.z },
                                                            },
                                                            e = [],
                                                            i = 0;
                                                        i < this._TweenList.length;
                                                        i++
                                                    ) {
                                                        var n = this._TweenList[i];
                                                        e.push({
                                                            m_EasingName: n.m_EasingName,
                                                            _easingIdx: n._easingIdx,
                                                            _fadeType: n._fadeType,
                                                            duration: n.duration,
                                                        });
                                                    }
                                                    return ((t._TweenList = e), t);
                                                }),
                                                (a.getJsonData = (function () {
                                                    var t = d(
                                                        S().mark(function t() {
                                                            var e, i, n;
                                                            return S().wrap(
                                                                function (t) {
                                                                    for (;;)
                                                                        switch ((t.prev = t.next)) {
                                                                            case 0:
                                                                                if (
                                                                                    ((e = {}),
                                                                                    this.shakeJson && this.shakeJson.json && (e = this.shakeJson.json),
                                                                                    "custom" == this.shakename)
                                                                                ) {
                                                                                    t.next = 19;
                                                                                    break;
                                                                                }
                                                                                (((i = e.shakelist)[this.shakename] = this.getTweenJson()),
                                                                                    (e.shakelist = i),
                                                                                    (t.next = 17));
                                                                                break;
                                                                            case 11:
                                                                                ((n = t.sent),
                                                                                    console.log("path", n, "outJson", JSON.stringify(e, null, 2)),
                                                                                    undefined.writeFileSync(n, JSON.stringify(e, null, 2), "utf-8"),
                                                                                    (t.next = 17));
                                                                                break;
                                                                            case 16:
                                                                                console.log("請先指定 '預先定義shake.json'");
                                                                            case 17:
                                                                                t.next = 20;
                                                                                break;
                                                                            case 19:
                                                                                console.warn("custom 不會儲存到預先定義.json");
                                                                            case 20:
                                                                                return t.abrupt("return", e);
                                                                            case 21:
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
                                                (a.onLoad = function () {
                                                    this.shakeJson && this.shakeJson.json
                                                        ? (this._updateShakeEnum(this.shakeJson.json.shakelist), this.shakeJson.json)
                                                        : this.getJsonData();
                                                    for (var t = [], e = 0; e < ya.length; ++e) {
                                                        var i = ya[e];
                                                        t.push({ name: i.desc, easingName: i.name, value: wa(i.name) });
                                                    }
                                                    (t.sort(function (t, e) {
                                                        return t.name < e.name ? -1 : t.name > e.name ? 1 : 0;
                                                    }),
                                                        (this._EasingEnumList = t),
                                                        this._updateEasingEnum(),
                                                        this.updateDuration());
                                                }),
                                                (a._updateShakeEnum = function (t) {
                                                    var e = [];
                                                    (t &&
                                                        (Object.keys(t).forEach(function (t) {
                                                            e.push({ name: t, value: wa(t) });
                                                        }),
                                                        e.sort(function (t, e) {
                                                            return t.name < e.name ? -1 : t.name > e.name ? 1 : 0;
                                                        })),
                                                        (this._ShakeEnumList = e));
                                                }),
                                                (a._updateEasingEnum = function () {
                                                    for (var t = 0; t < this._TweenList.length; t++) this._TweenList[t]._EasingEnumList = this._EasingEnumList;
                                                }),
                                                (a.start = function () {}),
                                                (a.fade = function (t, e, i, n, o, r, a) {
                                                    this.originPos = this.node.getPosition();
                                                    for (var s = 1 / i, l = e / s, c = 1; c <= l; c++) {
                                                        var u = n;
                                                        o == ha.FadeIn ? (u *= c / l) : o == ha.FadeOut && (u *= (l - c) / l);
                                                        var m = this.originPos.clone(),
                                                            h = new x(L.random() - 0.5, L.random() - 0.5, L.random() - 0.5),
                                                            p = new x((2 * u * r.x) / 100, (2 * u * r.y) / 100, (2 * u * r.z) / 100);
                                                        ((p = p.multiply(h)),
                                                            (m = m.add(p)),
                                                            (t = t.to(
                                                                s,
                                                                { position: m },
                                                                {
                                                                    easing: a,
                                                                    onStart: function (t) {},
                                                                    onUpdate: function (t, e) {},
                                                                    onComplete: function (t) {},
                                                                },
                                                            )));
                                                    }
                                                    return t;
                                                }),
                                                (a.shake = function () {
                                                    this._shake(this._TweenList, this.frequency, this.magnitude, this.weight);
                                                }),
                                                (a.testShake = function () {
                                                    if (this.shakeJson && this.shakeJson.json.shakelist) {
                                                        var t = this.shakeJson.json.shakelist;
                                                        if (t) {
                                                            var e = Object.keys(t);
                                                            e.push("ErrorTest");
                                                            var i = e[this._TestShakeCnt++ % e.length];
                                                            this.ShakeWithName(i);
                                                        }
                                                    } else console.log("ShakeWithName shakeJson not assign!");
                                                }),
                                                (a.ShakeWithName = function (t) {
                                                    if (this.shakeJson && this.shakeJson.json.shakelist) {
                                                        var e = this.shakeJson.json.shakelist;
                                                        if (!e[t]) return void console.log("ShakeWithName shakename:" + t + " not found!");
                                                        var i = e[t],
                                                            n = i._TweenList,
                                                            o = i.weight;
                                                        this._shake(n, i.frequency, i.magnitude, new x(o.x, o.y, o.z));
                                                    } else console.log("ShakeWithName shakeJson not assign!");
                                                }),
                                                (a._shake = function (t, e, i, n) {
                                                    this.originPos = this.node.getPosition();
                                                    for (var o = rt(this.node), r = 0; r < t.length; r++) {
                                                        var a = t[r];
                                                        o = this.fade(o, a.duration, e, i, a._fadeType, n, a.m_EasingName);
                                                    }
                                                    (o = o.to(0, { position: this.originPos })).start();
                                                }),
                                                o(r, [
                                                    {
                                                        key: "saveshake",
                                                        get: function () {
                                                            return !1;
                                                        },
                                                        set: function (t) {
                                                            this.getJsonData();
                                                        },
                                                    },
                                                    {
                                                        key: "_ShakeIdx",
                                                        get: function () {
                                                            return this.__ShakeIdx;
                                                        },
                                                        set: function (t) {},
                                                    },
                                                    {
                                                        key: "TweenList",
                                                        get: function () {
                                                            return this._TweenList;
                                                        },
                                                        set: function (t) {
                                                            ((this._TweenList = t), this.updateDuration(), this._updateEasingEnum());
                                                        },
                                                    },
                                                ]),
                                                r
                                            );
                                        })(G)).prototype,
                                        "alternately",
                                        [Fr],
                                        {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return !0;
                                            },
                                        },
                                    )),
                                    (Zr = t(Kr.prototype, "shakeJson", [Mr], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return null;
                                        },
                                    })),
                                    (Qr = t(Kr.prototype, "shakename", [Dr], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return "custom";
                                        },
                                    })),
                                    ($r = t(Kr.prototype, "__ShakeIdx", [zr], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return null;
                                        },
                                    })),
                                    t(Kr.prototype, "saveshake", [Gr], Object.getOwnPropertyDescriptor(Kr.prototype, "saveshake"), Kr.prototype),
                                    t(Kr.prototype, "_ShakeIdx", [Hr], Object.getOwnPropertyDescriptor(Kr.prototype, "_ShakeIdx"), Kr.prototype),
                                    (ta = t(Kr.prototype, "Duration", [Vr], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    })),
                                    (ea = t(Kr.prototype, "magnitude", [Wr], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 20;
                                        },
                                    })),
                                    (ia = t(Kr.prototype, "frequency", [Ur], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 1;
                                        },
                                    })),
                                    (na = t(Kr.prototype, "weight", [jr], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return new x(0, 0, 0);
                                        },
                                    })),
                                    (oa = t(Kr.prototype, "_TweenList", [Jr], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return [];
                                        },
                                    })),
                                    t(Kr.prototype, "TweenList", [Xr], Object.getOwnPropertyDescriptor(Kr.prototype, "TweenList"), Kr.prototype),
                                    (qr = Kr)),
                                ) || qr),
                        ) || qr),
                ));
            (C._RF.pop(), C._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", void 0));
            var Ea,
                Ta,
                Oa,
                Na,
                Ia,
                Aa,
                ka,
                xa,
                Ra,
                La,
                Pa,
                Ba,
                Fa,
                Ma,
                Da,
                za,
                Ga,
                Ha,
                Va,
                Wa,
                Ua,
                ja,
                Ja,
                Xa,
                qa,
                Ka,
                Ya,
                Za,
                Qa,
                $a,
                ts,
                es,
                is,
                ns,
                os,
                rs = E.ccclass,
                as = 0,
                ss = 1;
            rs(
                (ba = (function (t) {
                    function i() {
                        for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                        return (
                            ((e = t.call.apply(t, [this].concat(o)) || this).m_promotePictures = [[], []]),
                            (e.m_promoteAni = null),
                            (e.m_promotePic = void 0),
                            (e.m_promoteLock = !1),
                            (e.m_promoteIdx = -1),
                            (e.m_adNums = 0),
                            (e.m_isLandscape = void 0),
                            (e.m_curAniName = ""),
                            (e.m_changePictureCallback = void 0),
                            (e.m_revertPictureCallback = void 0),
                            (e.m_cycle = [
                                [8, 12],
                                [8, 8],
                            ]),
                            (e.m_promoting = !1),
                            (e.m_animationName = { start: "AdSlogan_Start", loop: "AdSlogan_Loop", end: "AdSlogan_End" }),
                            (e.ChangePic = function () {
                                var t, n;
                                if (!e.m_promoteLock) {
                                    ((e.m_promoting = !0),
                                        e.m_changePictureCallback && e.m_changePictureCallback(),
                                        e.m_promoteIdx++,
                                        e.m_promoteIdx >= e.m_adNums && (e.m_promoteIdx = 0),
                                        (e.m_promotePic.spriteFrame = e.m_promotePictures[e.m_isLandscape ? as : ss][e.m_promoteIdx]));
                                    var o = m.GetGameAtlas().getSpriteFrame(null == (t = e.m_promotePic) || null == (n = t.spriteFrame) ? void 0 : n.name);
                                    (o && (e.m_promotePic.spriteFrame = o),
                                        e.PlayAni(e.m_animationName.start),
                                        e.m_promoteAni.once(nt.EventType.FINISHED, function () {
                                            e.m_promoteLock || e.PlayAni(e.m_animationName.loop);
                                        }),
                                        e.scheduleOnce(
                                            e.RevertPic,
                                            e.m_cycle[1][0] == e.m_cycle[1][1] ? e.m_cycle[1][0] : i.GetRandomInt(e.m_cycle[1][0], e.m_cycle[1][1] + 1),
                                        ));
                                }
                            }),
                            (e.RevertPic = function () {
                                (e.m_revertPictureCallback && e.m_revertPictureCallback(),
                                    e.PlayAni(e.m_animationName.end),
                                    e.m_promoteAni.once(nt.EventType.FINISHED, function () {
                                        e.m_curAniName = "";
                                    }),
                                    (e.m_promoting = !1),
                                    e.scheduleOnce(
                                        e.ChangePic,
                                        e.m_cycle[0][0] == e.m_cycle[0][1] ? e.m_cycle[0][0] : i.GetRandomInt(e.m_cycle[0][0], e.m_cycle[0][1] + 1),
                                    ));
                            }),
                            e
                        );
                    }
                    (e(i, t),
                        (i.GetRandomInt = function (t, e) {
                            return Math.floor(Math.random() * (e - t) + t);
                        }));
                    var n = i.prototype;
                    return (
                        (n.Init = function (t, e, i, n) {
                            void 0 === n && (n = Astarte.Define.GameBundle);
                            var o = this.LoadSlogans(t[0], t[1], n);
                            return ((this.m_promoteAni = e), (this.m_promotePic = i), o);
                        }),
                        (n.LoadSlogans = function (t, e, i) {
                            var n = this,
                                o = t.length;
                            this.m_adNums = o;
                            for (
                                var r = [],
                                    a = function (o) {
                                        (r.push(
                                            new Promise(function (e) {
                                                i.load(t[o], A, function (t, i) {
                                                    (t || (n.m_promotePictures[as][o] = i), e());
                                                });
                                            }),
                                        ),
                                            e &&
                                                e[o] &&
                                                r.push(
                                                    new Promise(function (t) {
                                                        i.load(e[o], A, function (e, i) {
                                                            (e || (n.m_promotePictures[ss][o] = i), t());
                                                        });
                                                    }),
                                                ));
                                    },
                                    s = 0;
                                s < o;
                                s++
                            )
                                a(s);
                            return Promise.all(r).then(function () {
                                for (var t = 0; t < o; t++) n.m_promotePictures[ss][t] || (n.m_promotePictures[ss][t] = n.m_promotePictures[as][t]);
                                Z("loadSlogans", n.m_promotePictures);
                            });
                        }),
                        (n.PlayAni = function (t) {
                            this.m_promoteAni && (this.m_promoteAni.play(t), (this.m_curAniName = t));
                        }),
                        (n.StartPromote = function () {
                            ((this.m_promoteLock = !1),
                                this.scheduleOnce(
                                    this.ChangePic,
                                    this.m_cycle[0][0] == this.m_cycle[0][1] ? this.m_cycle[0][0] : i.GetRandomInt(this.m_cycle[0][0], this.m_cycle[0][1] + 1),
                                ));
                        }),
                        (n.StopPromote = function () {
                            ((this.m_promoteLock = !0), this.unschedule(this.RevertPic), this.unschedule(this.ChangePic), this.EndPromote());
                        }),
                        (n.EndPromote = function () {
                            var t = this;
                            this.m_promoting &&
                                ((this.m_promoting = !1),
                                this.PlayAni(this.m_animationName.end),
                                this.m_promoteAni.once(nt.EventType.FINISHED, function () {
                                    t.m_curAniName = "";
                                }));
                        }),
                        (n.SetAnimationName = function (t) {
                            this.m_animationName = t;
                        }),
                        (n.SetPromoteCycle = function (t) {
                            this.m_cycle = t;
                        }),
                        (n.GetAniState = function () {
                            return this.m_promoteAni.getState(this.m_curAniName);
                        }),
                        (n.OnRotation = function (t) {
                            var e, i;
                            if (this.m_isLandscape != t) {
                                ((this.m_isLandscape = t),
                                    (this.m_promotePic.spriteFrame =
                                        this.m_promotePictures[this.m_isLandscape ? as : ss][
                                            this.m_promoteIdx >= this.m_adNums ? (this.m_promoteIdx = 0) : this.m_promoteIdx
                                        ]));
                                var n = m.GetGameAtlas().getSpriteFrame(null == (e = this.m_promotePic) || null == (i = e.spriteFrame) ? void 0 : i.name);
                                n && (this.m_promotePic.spriteFrame = n);
                            }
                        }),
                        o(i, [
                            {
                                key: "CurAniName",
                                get: function () {
                                    return this.m_curAniName;
                                },
                            },
                            {
                                key: "ChangePictureCallback",
                                set: function (t) {
                                    this.m_changePictureCallback = t;
                                },
                            },
                            {
                                key: "RevertPictureCallback",
                                set: function (t) {
                                    this.m_revertPictureCallback = t;
                                },
                            },
                            {
                                key: "Promoting",
                                get: function () {
                                    return this.m_promoting;
                                },
                            },
                        ]),
                        i
                    );
                })(G)),
            );
            (C._RF.pop(), C._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", void 0));
            var ls = E.ccclass,
                cs = E.property,
                us = E.menu,
                ms = { None: 0 },
                hs = tt(ms),
                ps = 3.1415927,
                ds = ps / 180;
            function _s(t, e, i, n, o) {
                var r,
                    a = ((r = o), Math.sin(r * ds)),
                    s = (function (t) {
                        return Math.cos(t * ds);
                    })(o);
                return 57.29577866666166 * Math.atan2(s * i + a * n, s * t + a * e);
            }
            var fs, ys, gs, Ss, bs, vs, ws, Cs, Es, Ts, Os, Ns, Is, As, ks, xs, Rs, Ls;
            ((Ea = ls("BoneFollow")),
                (Ta = us("Chiron/Spine/BoneFollow")),
                (Oa = cs({ type: $.Skeleton, tooltip: "目標 Spine 骨架" })),
                (Na = cs({ tooltip: "目標同步骨骼名稱" })),
                (Ia = cs({
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (Aa = cs({ tooltip: "是否同步位置" })),
                (ka = cs({ tooltip: "是否同步旋轉" })),
                (xa = cs({ tooltip: "是否將目標旋轉角度轉換成區域旋轉角度" })),
                (Ra = cs({ tooltip: "是否同步縮放" })),
                (La = cs({ tooltip: "是否將目標縮放量轉換成區域縮放量" })),
                (Pa = cs({ visible: !1 })),
                (Ba = cs({ type: hs, visible: !0, displayName: "Bone" })),
                (Fa = cs({ visible: !0, displayName: "Preview" })),
                (Ma = cs({
                    displayName: "Cache Ancestors",
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (Da = cs({
                    displayName: "Scale Factor",
                    tooltip: "額外本體大小縮放",
                    visible: function () {
                        return this.m_isFollowScale;
                    },
                })),
                (za = cs({
                    type: lt,
                    displayName: "Position Offset",
                    tooltip: "額外本體位置偏移",
                    visible: function () {
                        return this.m_isFollowPosition;
                    },
                })),
                (Ga = cs({
                    displayName: "Rotation Factor",
                    tooltip: "額外本體旋轉",
                    visible: function () {
                        return this.m_isFollowRotation;
                    },
                })),
                Ea(
                    (Ha =
                        Ta(
                            (((os = (function (t) {
                                function o() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        ((e = t.call.apply(t, [this].concat(r)) || this).editor = void 0),
                                        i(e, "m_spineSkeleton", Wa, n(e)),
                                        i(e, "m_boneName", Ua, n(e)),
                                        i(e, "m_isCacheData", ja, n(e)),
                                        i(e, "m_isFollowPosition", Ja, n(e)),
                                        i(e, "m_isFollowRotation", Xa, n(e)),
                                        i(e, "m_isRotationLocalization", qa, n(e)),
                                        i(e, "m_isFollowScale", Ka, n(e)),
                                        i(e, "m_isScaleLocalization", Ya, n(e)),
                                        i(e, "__boneIndex", Za, n(e)),
                                        i(e, "_boneIndex", Qa, n(e)),
                                        i(e, "m_preview", $a, n(e)),
                                        i(e, "m_cacheAncestors", ts, n(e)),
                                        i(e, "m_scaleFactor", es, n(e)),
                                        i(e, "m_positionOffset", is, n(e)),
                                        i(e, "m_rotationFactor", ns, n(e)),
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
                                                    var m = t.parent,
                                                        h = t.arotation;
                                                    this.node.angle = e + (bt(m) ? _s(m.a, m.b, m.c, m.d, h) : t.arotation) + this.m_rotationFactor;
                                                }
                                                if (
                                                    (this.m_isFollowScale &&
                                                        this.node.setScale(
                                                            i * t.getWorldScaleX() * this.m_scaleFactor.x,
                                                            n * t.getWorldScaleY() * this.m_scaleFactor.y,
                                                        ),
                                                    this.m_isFollowPosition)
                                                ) {
                                                    var p = this.m_spineSkeleton.node.getComponent(N).convertToWorldSpaceAR(at(t.worldX, t.worldY, 0)),
                                                        d = this.node.parent.getComponent(N).convertToNodeSpaceAR(p);
                                                    this.node.setPosition(at(d.x + this.m_positionOffset.x, d.y + this.m_positionOffset.y));
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
                                        var t = it(ms);
                                        return (this.m_spineSkeleton, t);
                                    }),
                                    (r._updateBoneEnum = function () {}),
                                    o
                                );
                            })(G)).BoneFollow = "BoneFollow"),
                            (Wa = t((Va = os).prototype, "m_spineSkeleton", [Oa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            (Ua = t(Va.prototype, "m_boneName", [Na], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            (ja = t(Va.prototype, "m_isCacheData", [Ia], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Ja = t(Va.prototype, "m_isFollowPosition", [Aa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Xa = t(Va.prototype, "m_isFollowRotation", [ka], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (qa = t(Va.prototype, "m_isRotationLocalization", [xa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Ka = t(Va.prototype, "m_isFollowScale", [Ra], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Ya = t(Va.prototype, "m_isScaleLocalization", [La], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Za = t(Va.prototype, "__boneIndex", [Pa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            (Qa = t(Va.prototype, "_boneIndex", [Ba], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return hs.None;
                                },
                            })),
                            ($a = t(Va.prototype, "m_preview", [Fa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (ts = t(Va.prototype, "m_cacheAncestors", [Ma], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (es = t(Va.prototype, "m_scaleFactor", [Da], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return ht(1, 1);
                                },
                            })),
                            (is = t(Va.prototype, "m_positionOffset", [za], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return ht(0, 0);
                                },
                            })),
                            (ns = t(Va.prototype, "m_rotationFactor", [Ga], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            (Ha = Va)),
                        ) || Ha),
                ));
            (C._RF.pop(), C._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", void 0));
            var Ps,
                Bs = E.ccclass,
                Fs = E.property,
                Ms = E.executeInEditMode;
            !(function (t) {
                t[(t.default = 1)] = "default";
            })(Ps || (Ps = {}));
            var Ds,
                zs,
                Gs,
                Hs,
                Vs,
                Ws,
                Us = tt({});
            ((fs = Bs("NewSlotColorFollow")),
                (ys = Fs({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (gs = Fs({ visible: !0, displayName: "Preview" })),
                (Ss = Fs({ visible: !1 })),
                (bs = Fs({ type: $.Skeleton, visible: !1 })),
                (vs = Fs({ visible: !0, type: $.Skeleton, displayName: "Skeleton", tooltip: "目標 Spine 骨架" })),
                (ws = Fs({ visible: !1 })),
                (Cs = Fs({ visible: !0, displayName: "SlotName", tooltip: "請輸入要跟隨的 Spine 插槽名稱或從下拉選單選擇" })),
                (Es = Fs({ type: Us, visible: !1 })),
                (Ts = Fs({ visible: !0, displayName: "SelectFromList", type: Us, tooltip: "可從此下拉選單選擇插槽" })),
                fs(
                    (Os =
                        Ms(
                            (((Ls = (function (t) {
                                function r() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        (e = t.call.apply(t, [this].concat(r)) || this),
                                        i(e, "m_preview", Is, n(e)),
                                        i(e, "_colorCache", As, n(e)),
                                        i(e, "m_spineSkeleton", ks, n(e)),
                                        i(e, "m_slotName", xs, n(e)),
                                        i(e, "__slotIndex", Rs, n(e)),
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
                                        (this.ColorSync(), pt.on(dt.EVENT_BEFORE_DRAW, this.ColorSync, this));
                                    }),
                                    (a.onDisable = function () {
                                        pt.off(dt.EVENT_BEFORE_DRAW, this.ColorSync, this);
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
                                                ((this._colorCache = this._colorCache || new L.Color(L.Color.WHITE)),
                                                this.node.getComponent(R)
                                                    ? ((this.node.getComponent(R).color = J(e, i, n, o)), this._colorCache.set(this.node.getComponent(R).color))
                                                    : this.node.getComponent(B) &&
                                                      ((this.node.getComponent(B).color = J(e, i, n, o)),
                                                      this._colorCache.set(this.node.getComponent(B).color)),
                                                this.node.getComponent(_t) && (this.node.getComponent(_t).opacity = o),
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
                            t((Ns = Ls).prototype, "Skeleton", [ys], Object.getOwnPropertyDescriptor(Ns.prototype, "Skeleton"), Ns.prototype),
                            (Is = t(Ns.prototype, "m_preview", [gs], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (As = t(Ns.prototype, "_colorCache", [Ss], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return new L.Color(L.Color.WHITE);
                                },
                            })),
                            (ks = t(Ns.prototype, "m_spineSkeleton", [bs], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            t(Ns.prototype, "_spineSkeleton", [vs], Object.getOwnPropertyDescriptor(Ns.prototype, "_spineSkeleton"), Ns.prototype),
                            (xs = t(Ns.prototype, "m_slotName", [ws], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            t(Ns.prototype, "SlotName", [Cs], Object.getOwnPropertyDescriptor(Ns.prototype, "SlotName"), Ns.prototype),
                            (Rs = t(Ns.prototype, "__slotIndex", [Es], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return Ps.default;
                                },
                            })),
                            t(Ns.prototype, "_slotIndex", [Ts], Object.getOwnPropertyDescriptor(Ns.prototype, "_slotIndex"), Ns.prototype),
                            (Os = Ns)),
                        ) || Os),
                ));
            (C._RF.pop(), C._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", void 0));
            var js,
                Js,
                Xs = E.ccclass,
                qs = E.property,
                Ks = E.menu;
            ((Ds = Xs("SkeletonSync")),
                (zs = Ks("Chiron/Spine/SkeletonSync")),
                (Gs = qs({ displayName: "Overlap", tooltip: "是否交疊並同步座標、旋轉及縮放" })),
                Ds(
                    (Hs =
                        zs(
                            ((Ws = t(
                                (Vs = (function (t) {
                                    function r() {
                                        for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                        return (((e = t.call.apply(t, [this].concat(r)) || this).m_skeleton = null), i(e, "m_overlap", Ws, n(e)), e);
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
                                [Gs],
                                {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                    initializer: function () {
                                        return !0;
                                    },
                                },
                            )),
                            (Hs = Vs)),
                        ) || Hs),
                ));
            (C._RF.pop(), C._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", void 0));
            var Ys,
                Zs,
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
                ml,
                hl,
                pl,
                dl,
                _l = E.ccclass,
                fl = (E.property, E.menu);
            _l("SlotActivator")(
                (js =
                    fl("Chiron/Spine/SlotActivator")(
                        (((Js = (function (t) {
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
                        (js = Js)),
                    ) || js),
            );
            (C._RF.pop(), C._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", void 0));
            var yl = E.ccclass,
                gl = E.property,
                Sl = E.menu,
                bl = (E.inspector, tt({ None: 0 }));
            var vl, wl, Cl, El, Tl, Ol, Nl, Il;
            ((Ys = yl("SlotColorFollow")),
                (Zs = Sl("Chiron/Spine/SlotColorFollow")),
                (Qs = gl({ visible: !1, tooltip: "目標 Spine 骨架" })),
                ($s = gl({ visible: !1, tooltip: "目標同步 slot 名稱" })),
                (tl = gl({ visible: !0, displayName: "Preview" })),
                (el = gl({ visible: !1, type: L.Color })),
                (il = gl({ visible: !1, type: $.Skeleton })),
                (nl = gl({ visible: !0, displayName: "Skeleton", tooltip: "目標 Spine 骨架", type: $.Skeleton })),
                (ol = gl({ visible: !1, tooltip: "目標同步 slot 名稱" })),
                (rl = gl({ visible: !1 })),
                (al = gl({ visible: !0, displayName: "Slot", type: bl })),
                Ys(
                    (sl =
                        Zs(
                            (((dl = (function (t) {
                                function r() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        ((e = t.call.apply(t, [this].concat(r)) || this).editor = void 0),
                                        i(e, "m_preview", cl, n(e)),
                                        i(e, "_colorCache", ul, n(e)),
                                        i(e, "m_spineSkeleton", ml, n(e)),
                                        i(e, "m_slotName", hl, n(e)),
                                        i(e, "__slotIndex", pl, n(e)),
                                        e
                                    );
                                }
                                e(r, t);
                                var a = r.prototype;
                                return (
                                    (a.__preload = function () {}),
                                    (a.onLoad = function () {
                                        this.node.getComponent(R)
                                            ? (this._colorCache = this.node.getComponent(R).color)
                                            : this.node.getComponent(B) && (this._colorCache = this.node.getComponent(B).color);
                                    }),
                                    (a.update = function () {
                                        if (this.m_spineSkeleton && "" != this.m_slotName) {
                                            var t = this.m_spineSkeleton.findSlot(this.m_slotName),
                                                e = t ? 255 * t.color.r : this._colorCache.r,
                                                i = t ? 255 * t.color.g : this._colorCache.g,
                                                n = t ? 255 * t.color.b : this._colorCache.b,
                                                o = t ? 255 * t.color.a : this._colorCache.a;
                                            (e == this._colorCache.r && i == this._colorCache.g && n == this._colorCache.b && o == this._colorCache.a) ||
                                                (this.node.getComponent(R)
                                                    ? ((this.node.getComponent(R).color = J(e, i, n, o)), this._colorCache.set(this.node.getComponent(R).color))
                                                    : this.node.getComponent(B) &&
                                                      ((this.node.getComponent(B).color = J(e, i, n, o)),
                                                      this._colorCache.set(this.node.getComponent(B).color)),
                                                this.node.getComponent(_t) && (this.node.getComponent(_t).opacity = o),
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
                                            (i = o || bl),
                                            (n = tt.getList(tt(i))),
                                            vt.Attr.setClassAttr(t, e, "type", "Enum"),
                                            vt.Attr.setClassAttr(t, e, "enumList", n));
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
                            t((ll = dl).prototype, "Skeleton", [Qs], Object.getOwnPropertyDescriptor(ll.prototype, "Skeleton"), ll.prototype),
                            t(ll.prototype, "SlotName", [$s], Object.getOwnPropertyDescriptor(ll.prototype, "SlotName"), ll.prototype),
                            (cl = t(ll.prototype, "m_preview", [tl], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (ul = t(ll.prototype, "_colorCache", [el], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return new L.Color(L.Color.WHITE);
                                },
                            })),
                            (ml = t(ll.prototype, "m_spineSkeleton", [il], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            t(ll.prototype, "_spineSkeleton", [nl], Object.getOwnPropertyDescriptor(ll.prototype, "_spineSkeleton"), ll.prototype),
                            (hl = t(ll.prototype, "m_slotName", [ol], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            (pl = t(ll.prototype, "__slotIndex", [rl], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            t(ll.prototype, "_slotIndex", [al], Object.getOwnPropertyDescriptor(ll.prototype, "_slotIndex"), ll.prototype),
                            (sl = ll)),
                        ) || sl),
                ));
            (C._RF.pop(), C._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", void 0));
            var Al = E.ccclass,
                kl = E.property,
                xl = E.menu;
            ((vl = Al("SlotCulling")),
                (wl = xl("Chiron/Spine/SlotCulling")),
                (Cl = kl({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (El = kl({ visible: !1, tooltip: "反向剔除 Slot 項目(勾選的不會被剔除，未勾選的將被剔除)" })),
                (Tl = kl({ visible: !1, tooltip: "遭剔除的 Slot 項目名稱" })),
                vl(
                    (Ol =
                        wl(
                            (((Il = (function (t) {
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
                            t((Nl = Il).prototype, "Skeleton", [Cl], Object.getOwnPropertyDescriptor(Nl.prototype, "Skeleton"), Nl.prototype),
                            t(Nl.prototype, "Invert", [El], Object.getOwnPropertyDescriptor(Nl.prototype, "Invert"), Nl.prototype),
                            t(Nl.prototype, "CullingList", [Tl], Object.getOwnPropertyDescriptor(Nl.prototype, "CullingList"), Nl.prototype),
                            (Ol = Nl)),
                        ) || Ol),
                ));
            (C._RF.pop(),
                C._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", void 0),
                C._RF.pop(),
                C._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", void 0));
            var Rl = new Map(),
                Ll = new Map(),
                Pl = new Map(),
                Bl = [],
                Fl = (function () {
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
                                    P.downloader.downloadFile(t + "/" + o, { xhrResponseType: "arraybuffer" }, null, function (t, e) {
                                        i(e);
                                    });
                                } else i(null);
                            });
                        }),
                        (e.loadZip = (function () {
                            var t = d(
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
                                                                          (Rl.set(e + "/" + t, i[t]), Rl.set(r + "/" + t, i[t]));
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
                                        return this.ZipCacheUrl ? Ll.get(this.ZipCacheUrl) : t.get.call(this);
                                    },
                                    set: function (t) {},
                                    configurable: !0,
                                });
                                var e = XMLHttpRequest.prototype.open;
                                XMLHttpRequest.prototype.open = function (t, i, n, o, r) {
                                    function a() {
                                        var t = (this.status >= 200 && this.status < 300) || 304 == this.status;
                                        (this.readyState != XMLHttpRequest.DONE || t || Bl.includes(i) || (Bl.push(i), Ml(701, this.status), Ml(702, i)),
                                            this.removeEventListener("load", a));
                                    }
                                    return (Rl.has(i) && (this.ZipCacheUrl = i), this.addEventListener("load", a.bind(this)), e.apply(this, arguments));
                                };
                                var i = XMLHttpRequest.prototype.send;
                                XMLHttpRequest.prototype.send = d(
                                    S().mark(function t(e) {
                                        var n,
                                            o,
                                            r,
                                            a,
                                            s,
                                            l,
                                            c,
                                            u,
                                            m = arguments;
                                        return S().wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if (!this.ZipCacheUrl) {
                                                                t.next = 26;
                                                                break;
                                                            }
                                                            if (Ll.has(this.ZipCacheUrl)) {
                                                                t.next = 24;
                                                                break;
                                                            }
                                                            ((n = this.responseType),
                                                                (o = Rl.get(this.ZipCacheUrl)),
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
                                                            ((c = Pl.get(this.ZipCacheUrl)) &&
                                                                (Ll.delete(this.ZipCacheUrl + "@version" + c), Pl.delete(this.ZipCacheUrl)),
                                                                (u = performance.now()),
                                                                Pl.set(this.ZipCacheUrl, u),
                                                                (this.ZipCacheUrl = this.ZipCacheUrl + "@version" + u),
                                                                Ll.set(this.ZipCacheUrl, r));
                                                        case 24:
                                                            return (this.onload(), t.abrupt("return"));
                                                        case 26:
                                                            return t.abrupt("return", i.apply(this, m));
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
            function Ml(t, e) {
                if (!wt.isNative) {
                    var i = "https://" + window.location.host + "/";
                    if (-1 == i.indexOf("localhost") && 1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(i)) {
                        var n = 0;
                        switch (wt.browserType) {
                            case wt.BrowserType.CHROME:
                                n = 1;
                                break;
                            case wt.BrowserType.SAFARI:
                                n = 2;
                                break;
                            case wt.BrowserType.IE:
                                n = 3;
                                break;
                            case wt.BrowserType.UC:
                                n = 4;
                                break;
                            case wt.BrowserType.QQ:
                            case wt.BrowserType.MOBILE_QQ:
                                n = 5;
                                break;
                            case wt.BrowserType.FIREFOX:
                                n = 6;
                        }
                        var o = 0;
                        switch (wt.os) {
                            case wt.OS.ANDROID:
                                o = 1;
                                break;
                            case wt.OS.IOS:
                                o = 2;
                                break;
                            case wt.OS.WINDOWS:
                                o = 3;
                                break;
                            default:
                                o = 0;
                        }
                        var r = Dl("apiId") || "-1",
                            a = Dl("ssoKey") || "1",
                            s = Dl("gameID") || "-1",
                            l = "https://" + (Dl("domain_platform") || Dl("gs") || "gnidnawcs").split("").reverse().join("") + "/webservice/event/assetUpdate?";
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
            function Dl(t, e) {
                (void 0 === e && (e = null),
                    e ||
                        (e = (function () {
                            var t = window.location.href,
                                e = Dl("replaydata", t);
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
                            var m = t.split("replaydata=" + e);
                            return (m.join(""), m + atob(l));
                        })()),
                    (t = t.replace(/[[\]]/g, "\\$&")));
                var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                return i ? (i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "") : null;
            }
            var zl,
                Gl,
                Hl,
                Vl,
                Wl,
                Ul,
                jl,
                Jl,
                Xl,
                ql,
                Kl,
                Yl,
                Zl,
                Ql,
                $l,
                tc,
                ec,
                ic,
                nc,
                oc,
                rc,
                ac,
                sc,
                lc,
                cc,
                uc,
                mc,
                hc,
                pc,
                dc,
                _c,
                fc,
                yc,
                gc,
                Sc,
                bc,
                vc,
                wc,
                Cc,
                Ec,
                Tc,
                Oc,
                Nc,
                Ic,
                Ac,
                kc,
                xc,
                Rc,
                Lc,
                Pc,
                Bc,
                Fc,
                Mc,
                Dc,
                zc,
                Gc,
                Hc,
                Vc,
                Wc,
                Uc,
                jc,
                Jc,
                Xc,
                qc,
                Kc,
                Yc,
                Zc,
                Qc,
                $c,
                tu,
                eu,
                iu,
                nu = globalThis.__zipBundleLoader;
            (globalThis.fflate && !nu && ((nu = new Fl()), (globalThis.__zipBundleLoader = nu), nu.init()),
                C._RF.pop(),
                C._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", void 0));
            var ou,
                ru = ["game"],
                au = E.ccclass,
                su = E.property;
            !(function (t) {
                ((t[(t.CommonMainBundle = 0)] = "CommonMainBundle"),
                    (t[(t.CommonBundle = 1)] = "CommonBundle"),
                    (t[(t.OtherBundle = 2)] = "OtherBundle"),
                    (t[(t.DefaultLangBundle = 3)] = "DefaultLangBundle"),
                    (t[(t.LangTextBundle = 4)] = "LangTextBundle"),
                    (t[(t.GameBundle = 5)] = "GameBundle"));
            })(ou || (ou = {}));
            var lu,
                cu,
                uu = {
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
                mu = {
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
                hu = mu.EN,
                pu = [10830, 10827, 10778, 10718, 10689, 10651, 10630, 10598, 10505, 10504, 10450, 10414, 10263, 10220],
                du = [3],
                _u = { JILI: 0, TADA: 1, ACE_ROYALE: 2, JILI_START: 3, TADA_CASINO: 4, NONE: 5, UFA: 6 };
            (!(function (t) {
                ((t[(t.None = 0)] = "None"),
                    (t[(t.AutoPlaySettingPanel = 1)] = "AutoPlaySettingPanel"),
                    (t[(t.AutoPlaySettingPanel_DFI = 2)] = "AutoPlaySettingPanel_DFI"),
                    (t[(t.AutoPlaySettingPanel_DFIII = 3)] = "AutoPlaySettingPanel_DFIII"),
                    (t[(t.AutoPlaySettingPanel_BS = 4)] = "AutoPlaySettingPanel_BS"),
                    (t[(t.AutoPlaySetting_AG2 = 5)] = "AutoPlaySetting_AG2"),
                    (t[(t.AutoPlaySetting_FD = 6)] = "AutoPlaySetting_FD"),
                    (t[(t.AutoPlaySettingPanel_MS = 7)] = "AutoPlaySettingPanel_MS"));
            })(lu || (lu = {})),
                (function (t) {
                    ((t[(t.None = 0)] = "None"), (t[(t.Dark = 1)] = "Dark"));
                })(cu || (cu = {})));
            var fu,
                yu,
                gu,
                Su,
                bu,
                vu,
                wu,
                Cu,
                Eu,
                Tu,
                Ou,
                Nu,
                Iu =
                    ((zl = au("StyleSetting")),
                    (Gl = su({ type: K, tooltip: "是否有骰子造型" })),
                    (Hl = su({ type: K, tooltip: "是否有萬聖造型" })),
                    (Vl = su({ type: K, tooltip: "是否有聖誕造型" })),
                    (Wl = su({ type: K, tooltip: "是否有OKBET廠商造型" })),
                    (Ul = su({ type: tt(cu), tooltip: "系列" })),
                    zl(
                        ((Xl = t(
                            (Jl = function () {
                                (i(this, "HasDice", Xl, this),
                                    i(this, "HasHolloween", ql, this),
                                    i(this, "HasXmas", Kl, this),
                                    i(this, "HasOkbet", Yl, this),
                                    i(this, "Series", Zl, this));
                            }).prototype,
                            "HasDice",
                            [Gl],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            },
                        )),
                        (ql = t(Jl.prototype, "HasHolloween", [Hl], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (Kl = t(Jl.prototype, "HasXmas", [Vl], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (Yl = t(Jl.prototype, "HasOkbet", [Wl], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (Zl = t(Jl.prototype, "Series", [Ul], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return cu.None;
                            },
                        })),
                        (jl = Jl)),
                    ) || jl),
                Au =
                    ((Ql = au("PlayTypeSetting")),
                    ($l = su({ type: K, tooltip: "Match" })),
                    (tc = su({ type: K, tooltip: "Break" })),
                    Ql(
                        ((nc = t(
                            (ic = function () {
                                (i(this, "Match", nc, this), i(this, "Break", oc, this));
                            }).prototype,
                            "Match",
                            [$l],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            },
                        )),
                        (oc = t(ic.prototype, "Break", [tc], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (ec = ic)),
                    ) || ec);
            ((rc = su({ type: mt, tooltip: "遊戲縮寫(server位置)" })),
                (ac = su({ type: String, tooltip: "遊戲主場prefab路徑" })),
                (sc = su({ type: String, tooltip: "遊戲多語系圖片路徑" })),
                (lc = su({ type: String, tooltip: "遊戲ID" })),
                (cc = su({ type: String, tooltip: "Logo名稱，只要給到底線之前" })),
                (uc = su({ type: Boolean, tooltip: "鎖定橫版" })),
                (mc = su({ type: Boolean, tooltip: "鎖定直版" })),
                (hc = su({ type: Boolean, tooltip: "是否為街機" })),
                (pc = su({ type: A, tooltip: "不分語系LOGO" })),
                (dc = su({ type: Ct, tooltip: "遊戲Logo合圖" })),
                (_c = su({ type: mt, tooltip: "展示頁" })),
                (fc = su({ type: String, tooltip: "敘述圖名稱" })),
                (yc = su({ type: A, tooltip: "特色圖" })),
                (gc = su({ type: A, tooltip: "背景圖，0:直,1:橫" })),
                (Sc = su({ type: A, tooltip: "腳色" })),
                (bc = su({ type: Number, tooltip: "辣椒數" })),
                (vc = su({ type: Number, tooltip: "最大贏分倍率" })),
                (wc = su({ type: tt(lu), tooltip: "自動玩介面" })),
                (Cc = su({ type: K, tooltip: "是否開啟晚3秒ShowGameScene進入遊戲" })),
                (Ec = su({ type: K, tooltip: "可以跳過前導動畫" })),
                (Tc = su({ type: Iu, tooltip: "是否有其他特色樣式" })),
                (Oc = su({ type: Au, tooltip: "是否有其他特色樣式" })),
                (Nc = su({ type: K, tooltip: "是否為遠程包" })),
                (Ic = su({ type: K, tooltip: "是否是SSS版" })),
                (Ac = su({ type: mt, tooltip: "使用哪個遠程包版本" })),
                au(
                    ((Rc = t(
                        (xc = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_gameShortName", Rc, n(e)),
                                    i(e, "m_scenePrefabPath", Lc, n(e)),
                                    i(e, "m_gameImgPath", Pc, n(e)),
                                    i(e, "m_gameId", Bc, n(e)),
                                    i(e, "m_logoName", Fc, n(e)),
                                    i(e, "m_isLockLandScope", Mc, n(e)),
                                    i(e, "m_isLockPortrait", Dc, n(e)),
                                    i(e, "m_isStreet", zc, n(e)),
                                    i(e, "m_singleLogo", Gc, n(e)),
                                    i(e, "m_logoSpriteAtlas", Hc, n(e)),
                                    i(e, "m_pagePrefabPaths", Vc, n(e)),
                                    i(e, "m_infoNames", Wc, n(e)),
                                    i(e, "m_featureSpriteFrames", Uc, n(e)),
                                    i(e, "m_bgSpriteFrames", jc, n(e)),
                                    i(e, "m_characterSpriteFrame", Jc, n(e)),
                                    i(e, "m_chilliNum", Xc, n(e)),
                                    i(e, "m_maxWinNum", qc, n(e)),
                                    i(e, "m_autoplayPanelNo", Kc, n(e)),
                                    i(e, "m_isWatting", Yc, n(e)),
                                    i(e, "m_skipIntro", Zc, n(e)),
                                    i(e, "m_styleSetting", Qc, n(e)),
                                    i(e, "m_playTypeSetting", $c, n(e)),
                                    i(e, "m_isRemote", tu, n(e)),
                                    i(e, "m_isSSS", eu, n(e)),
                                    i(e, "m_ReomveVersion", iu, n(e)),
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
                                        "109" === this.m_gameId && ((P.downloader.maxConcurrency = 12), (P.downloader.maxRequestsPerFrame = 12)));
                                }),
                                (r.start = (function () {
                                    var t = d(
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
                                    var t = d(
                                        S().mark(function t(e, i, n, o) {
                                            var r, a, s;
                                            return S().wrap(function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if ((void 0 === n && (n = ""), void 0 === o && (o = ""), nu)) {
                                                                t.next = 4;
                                                                break;
                                                            }
                                                            return t.abrupt("return");
                                                        case 4:
                                                            if (!(nu.loadedZipNames.indexOf(e) >= 0)) {
                                                                t.next = 6;
                                                                break;
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            if (i || -1 !== ru.indexOf(e)) {
                                                                t.next = 8;
                                                                break;
                                                            }
                                                            return t.abrupt("return");
                                                        case 8:
                                                            return (
                                                                (r = n),
                                                                (a = o),
                                                                i ||
                                                                    ((s = Ot.querySettings(Nt.Category.ASSETS, "bundleVers")),
                                                                    (r = "./assets/" + e),
                                                                    (a = s[e])),
                                                                nu.loadedZipNames.push(e),
                                                                (t.next = 13),
                                                                nu.loadZip(r, a)
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
                                    var t = d(
                                        S().mark(function t(e) {
                                            var i, n, o, r, a, s, l, c, u, m, h, p, _, f, y, g, b, v, w, C, E, T, O, N;
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
                                                                    (m = ""),
                                                                    (h = ""),
                                                                    (p = ""));
                                                                try {
                                                                    void 0 !== i &&
                                                                        (console.error("lobbyData", JSON.stringify(i)),
                                                                        (s = i.bundleDomin + e),
                                                                        (m = i.versionJson[e]),
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
                                                                    (_ = /(\d+)\.(\d+)/),
                                                                    (f = It.match(_)),
                                                                    (y = f[1] + "." + f[2]),
                                                                    (g = `${window.location.protocol}//` + window.location.host + "/"),
                                                                    (b = "astarte"),
                                                                    (v = "web-mobile"),
                                                                    wt.isNative && ((v = "android"), (y = "app" + y)),
                                                                    this.m_ReomveVersion.length > 0 && (v = v + "-" + this.m_ReomveVersion),
                                                                    i && (g = i.cdnHost),
                                                                    this.m_isSSS && (b = "astarte3"),
                                                                    (w = this.GetLinkParameterByName("remoteVersion")) &&
                                                                        w.length > 0 &&
                                                                        (y = "" + w + f[1] + "." + f[2]),
                                                                    (t.next = 33),
                                                                    new Promise(function (t) {
                                                                        P.loadRemote(
                                                                            "" +
                                                                                g +
                                                                                b +
                                                                                "/" +
                                                                                y +
                                                                                "/" +
                                                                                v +
                                                                                "/assets/versions.json?" +
                                                                                (Date.now() / 600).toFixed(0),
                                                                            { reload: !0, cacheAsset: !1, cacheEnabled: !1 },
                                                                            d(
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
                                                                    ((C = t.sent),
                                                                    (E = "" + g + b + "/" + y + "/" + v + "/src/chunks/bundle." + C.json["bundle.js"] + ".js"),
                                                                    !wt.isNative)
                                                                ) {
                                                                    t.next = 40;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 38),
                                                                    new Promise(function (t, e) {
                                                                        P.downloader.downloadScript(E, { systemJs: !0 }, function (i) {
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
                                                                ((r = "" + g + b + "/" + y + "/" + v + "/assets/other"),
                                                                    (u = C.json.other),
                                                                    (this.m_commonPath = "" + g + b + "/" + y + "/" + v + "/assets/" + n),
                                                                    (this.m_commonVersion = C.json[n]),
                                                                    (o = "" + g + b + "/" + y + "/" + v + "/assets/" + n + "Main"),
                                                                    (l = C.json[n + "Main"]),
                                                                    (this.m_lang = this.GetLanguage()),
                                                                    (a = "" + g + b + "/" + y + "/" + v + "/assets/" + this.m_lang),
                                                                    (c = C.json[this.m_lang]),
                                                                    (this.m_defaultLangPath = "" + g + b + "/" + y + "/" + v + "/assets/en"),
                                                                    (this.m_defaultLangVersion = C.json.en),
                                                                    (h = "" + g + b + "/" + y + "/" + v + "/assets/extra"),
                                                                    (p = C.json.extra));
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
                                                                        this.LoadBundleSync(s, m, void 0, {
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
                                                                        this.LoadBundleSync(h, p),
                                                                        this.LoadBundleSync(o, l, ou.CommonMainBundle),
                                                                        this.LoadBundleSync(r, u, ou.OtherBundle),
                                                                        this.LoadBundleSync(a, c, ou.LangTextBundle),
                                                                        this.LoadZip(n + "Main", this.m_isRemote, o, l),
                                                                        this.LoadBundleSync(this.m_commonPath, this.m_commonVersion, ou.CommonBundle),
                                                                    ]),
                                                                    this.m_isForceLite
                                                                        ? N.push(this.LoadBundleSync("assets/gameLite", "", ou.GameBundle))
                                                                        : this.m_isTaDa || N.push(this.LoadBundleSync("assets/game", "", ou.GameBundle)),
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
                                        P.loadBundle(t, n, function (n, r) {
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
                                                        case ou.CommonMainBundle:
                                                            o.m_commonMainBundle = t;
                                                            break;
                                                        case ou.CommonBundle:
                                                            o.m_commonBundle = t;
                                                            break;
                                                        case ou.OtherBundle:
                                                            o.m_otherBundle = t;
                                                            break;
                                                        case ou.LangTextBundle:
                                                            o.m_langTextBundle = t;
                                                            break;
                                                        case ou.GameBundle:
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
                                    e = this.m_isTaDa ? Et.formatStr(e, "framework_americas") : Et.formatStr(e, "framework");
                                    var i = this.m_commonMainBundle;
                                    (this.m_loadOldType && (i = this.m_commonBundle),
                                        i.load(
                                            e,
                                            Tt,
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
                                    this.m_gameBundle.load(this.m_pagePrefabPaths[t], Tt, function (i, n) {
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
                                            lstZipBundleName: ru,
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
                                    if ((null != (t = window) && null != (e = t.location) && null != (i = e.href) && i.includes("/sss-") && (n = uu.EN), n)) {
                                        var o = this.FormatLang(n);
                                        if ("" !== o) return o;
                                    }
                                    if (!wt.isNative) {
                                        var r = this.FormatLang(navigator.language);
                                        if ("" !== r && null != r) return r;
                                    }
                                    return hu;
                                }),
                                (r.IsTada = function () {
                                    var t = (this.GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join(""),
                                        e = Number(this.GetLinkParameterByName("apiId")),
                                        i = -1 !== t.search("tada");
                                    if (!isNaN(e)) {
                                        ((this.m_apiId = Number(e)), (this.m_isForceLite = -1 !== ru.indexOf("gameLite") && pu.includes(this.m_apiId)));
                                        for (var n = 0; n < du.length; n++)
                                            if (e === du[n]) {
                                                i = !0;
                                                break;
                                            }
                                    }
                                    var o = this.GetLinkParameterByName("tadaSkin");
                                    o && "1" === o && (i = !0);
                                    var r = this.GetLinkParameterByName("skin");
                                    return (!r || (r != _u.TADA.toString() && r != _u.TADA_CASINO.toString()) || (i = !0), i);
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
                                    var m = t.split("replaydata=" + e);
                                    return (m.join(""), m + atob(l));
                                }),
                                (r.Log = function (t) {
                                    if (!wt.isNative) {
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
                                    return (t = t.toLocaleLowerCase()) == mu.CN || t == uu.CN.toLocaleLowerCase()
                                        ? mu.CN
                                        : t == mu.EN || t == uu.EN.toLocaleLowerCase()
                                          ? mu.EN
                                          : t == mu.TH || t == uu.TH.toLocaleLowerCase()
                                            ? mu.TH
                                            : t == mu.VN || t == uu.VN.toLocaleLowerCase()
                                              ? mu.VN
                                              : t == mu.ID || t == uu.ID.toLocaleLowerCase()
                                                ? mu.ID
                                                : t == mu.HI || t == uu.HI.toLocaleLowerCase()
                                                  ? mu.HI
                                                  : t == mu.TA || t == uu.TA.toLocaleLowerCase()
                                                    ? mu.TA
                                                    : t == mu.MM || t == uu.MM.toLocaleLowerCase()
                                                      ? mu.MM
                                                      : t == mu.JP || t == uu.JP.toLocaleLowerCase()
                                                        ? mu.JP
                                                        : t == mu.MS || t == uu.MS.toLocaleLowerCase()
                                                          ? mu.MS
                                                          : t == mu.KO || t == uu.KO.toLocaleLowerCase()
                                                            ? mu.KO
                                                            : t == mu.BN || t == uu.BN.toLocaleLowerCase()
                                                              ? mu.BN
                                                              : t == mu.ES || t == uu.ES.toLocaleLowerCase()
                                                                ? mu.ES
                                                                : t == mu.PT || t == uu.PT.toLocaleLowerCase()
                                                                  ? mu.PT
                                                                  : t == mu.IT || t == uu.IT.toLocaleLowerCase()
                                                                    ? mu.IT
                                                                    : t == mu.SE || t == uu.SE.toLocaleLowerCase()
                                                                      ? mu.SE
                                                                      : t == mu.DE || t == uu.DE.toLocaleLowerCase()
                                                                        ? mu.DE
                                                                        : t == mu.DADK || t == uu.DADK.toLocaleLowerCase()
                                                                          ? mu.DADK
                                                                          : t == mu.RORO || t == uu.RORO.toLocaleLowerCase()
                                                                            ? mu.RORO
                                                                            : t == mu.NLNL || t == uu.NLNL.toLocaleLowerCase()
                                                                              ? mu.NLNL
                                                                              : t == mu.TRTR.toLocaleLowerCase() || t == uu.TRTR.toLocaleLowerCase()
                                                                                ? mu.TRTR
                                                                                : t == mu.RURU.toLocaleLowerCase() || t == uu.RURU.toLocaleLowerCase()
                                                                                  ? mu.RURU
                                                                                  : t == mu.GRGR.toLocaleLowerCase() || t == uu.GRGR.toLocaleLowerCase()
                                                                                    ? mu.GRGR
                                                                                    : t == mu.FRFR.toLocaleLowerCase() || t == uu.FRFR.toLocaleLowerCase()
                                                                                      ? mu.FRFR
                                                                                      : "";
                                }),
                                o
                            );
                        })(G)).prototype,
                        "m_gameShortName",
                        [rc],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return "";
                            },
                        },
                    )),
                    (Lc = t(xc.prototype, "m_scenePrefabPath", [ac], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (Pc = t(xc.prototype, "m_gameImgPath", [sc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (Bc = t(xc.prototype, "m_gameId", [lc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (Fc = t(xc.prototype, "m_logoName", [cc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (Mc = t(xc.prototype, "m_isLockLandScope", [uc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Dc = t(xc.prototype, "m_isLockPortrait", [mc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (zc = t(xc.prototype, "m_isStreet", [hc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Gc = t(xc.prototype, "m_singleLogo", [pc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Hc = t(xc.prototype, "m_logoSpriteAtlas", [dc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Vc = t(xc.prototype, "m_pagePrefabPaths", [_c], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Wc = t(xc.prototype, "m_infoNames", [fc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Uc = t(xc.prototype, "m_featureSpriteFrames", [yc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (jc = t(xc.prototype, "m_bgSpriteFrames", [gc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Jc = t(xc.prototype, "m_characterSpriteFrame", [Sc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Xc = t(xc.prototype, "m_chilliNum", [bc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (qc = t(xc.prototype, "m_maxWinNum", [vc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (Kc = t(xc.prototype, "m_autoplayPanelNo", [wc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return lu.None;
                        },
                    })),
                    (Yc = t(xc.prototype, "m_isWatting", [Cc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Zc = t(xc.prototype, "m_skipIntro", [Ec], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Qc = t(xc.prototype, "m_styleSetting", [Tc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return new Iu();
                        },
                    })),
                    ($c = t(xc.prototype, "m_playTypeSetting", [Oc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return new Au();
                        },
                    })),
                    (tu = t(xc.prototype, "m_isRemote", [Nc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (eu = t(xc.prototype, "m_isSSS", [Ic], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (iu = t(xc.prototype, "m_ReomveVersion", [Ac], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (kc = xc)),
                ));
            (C._RF.pop(), C._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", void 0));
            var ku = E.ccclass,
                xu = E.property,
                Ru = function (t, e, i, n, o, r) {
                    ((this.name = t), (this.height = e), (this.width = i), (this.ratio = n), (this.statusHeight = o), (this.homeHeight = r));
                },
                Lu = [
                    new Ru("iPhone 6.5-inch", 896, 414, 3, 44, 34),
                    new Ru("iPhone 6.1-inch", 896, 414, 2, 44, 34),
                    new Ru("iPhone 5.8-inch", 812, 375, 3, 44, 34),
                    new Ru("iPhone 5.5-inch", 736, 414, 3, 18, 0),
                    new Ru("iPhone 4.7-inch", 667, 375, 2, 20, 0),
                    new Ru("iPhone 4-inch", 568, 320, 2, 20, 0),
                    new Ru("iPhone 3.5-inch", 480, 320, 2, 20, 0),
                    new Ru("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0),
                    new Ru("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0),
                    new Ru("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0),
                    new Ru("iPad 9.7-inch Retina", 1024, 768, 2, 20, 0),
                    new Ru("iPad", 1024, 768, 1, 20, 0),
                    new Ru("iPad Mini Retina", 1024, 768, 2, 20, 0),
                    new Ru("iPad Mini", 1024, 768, 1, 20, 0),
                ],
                Pu = "mask",
                Bu = "mask_close_tip",
                Fu = "mask_close",
                Mu = "bar",
                Du = {
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
                zu = ["tw", "zh-TW"],
                Gu = ["cn", "zh-CN"],
                Hu = ["en", "en-US"],
                Vu = ["th", "th-TH"],
                Wu = ["vn", "vi-VN"],
                Uu = ["id", "id-ID"],
                ju = ["hi", "hi-IN"],
                Ju = ["ta", "ta-IN"],
                Xu = ["mm", "my-MM"],
                qu = ["jp", "ja-JP"],
                Ku = [1131],
                Yu = [1864, 1002];
            ((fu = xu(Boolean)),
                (yu = xu(Boolean)),
                (gu = xu(Boolean)),
                (Su = xu(Boolean)),
                (bu = xu(Number)),
                ku(
                    ((Cu = t(
                        (wu = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "isLandscape", Cu, n(e)),
                                    i(e, "isPortrait", Eu, n(e)),
                                    i(e, "isIOS", Tu, n(e)),
                                    i(e, "isAndroid", Ou, n(e)),
                                    i(e, "android_Apiid", Nu, n(e)),
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
                                    wt.isNative || this.Init();
                                }),
                                (r.GetDeviceName = function () {
                                    if (wt.os === wt.OS.IOS) {
                                        var t = this.GetiOSDevice();
                                        if (t) return t.name;
                                    } else if (wt.os === wt.OS.ANDROID) {
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
                                        ((i.id = Mu), (i.style.position = "absolute"), (i.style.height = "100vh"));
                                        var n = document.createElement("div");
                                        ((n.id = Pu),
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
                                        ((o.id = Bu),
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
                                        ((a.id = Fu),
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
                                        var m = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                        (m.setAttribute("fill", "#FFFFFF"),
                                            m.setAttribute(
                                                "d",
                                                "M136.623,52.13v164.027l-23.875,23.877c-54.503,54.479-54.503,143.151,0,197.627l57.317,57.292c33.806,33.808,78.743,52.416,126.521,52.416c98.658,0,178.912-80.254,178.912-178.911V208.522c0-28.752-23.381-52.131-52.156-52.131c-10.713,0-20.695,3.258-28.984,8.836c-7.143-20.308-26.51-34.902-49.211-34.902c-10.713,0-20.695,3.26-28.984,8.838c-7.141-20.307-26.509-34.901-49.21-34.901c-9.487,0-18.402,2.555-26.065,7.012V52.132c0-28.75-23.38-52.131-52.131-52.131C160.003,0.001,136.623,23.38,136.623,52.13z M214.845,52.13v169.425c0,7.192,5.839,13.032,13.033,13.032s13.033-5.84,13.033-13.032v-65.162c0-14.39,11.703-26.066,26.064-26.066c14.362,0,26.063,11.678,26.063,26.066v39.098c0,7.193,5.84,13.033,13.033,13.033s13.033-5.84,13.033-13.033v-13.033c0-14.389,11.703-26.063,26.064-26.063c14.363,0,26.064,11.676,26.064,26.063v26.064c0,7.192,5.84,13.033,13.033,13.033s13.033-5.841,13.033-13.033c0-14.39,11.703-26.064,26.064-26.064c14.359,0,26.064,11.676,26.064,26.064v159.938c0,84.27-68.578,152.848-152.848,152.848c-40.819,0-79.188-15.899-108.066-44.78l-57.317-57.292c-22.155-22.183-33.233-51.271-33.233-80.385c0-29.115,11.078-58.203,33.233-80.387l5.448-5.446v72.8c0,7.192,5.839,13.033,13.032,13.033c7.194,0,13.033-5.841,13.033-13.033V52.13c0-14.389,11.704-26.065,26.065-26.065C203.141,26.063,214.845,37.743,214.845,52.13z",
                                            ),
                                            t.appendChild(n),
                                            n.appendChild(o),
                                            n.appendChild(r),
                                            l.appendChild(m),
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
                                            ? (this.m_isblock = Ku.indexOf(i) >= 0)
                                            : this.isAndroid && this.android_Apiid.length > 0 && this.android_Apiid.indexOf(i) >= 0 && (this.isAndroid = !1),
                                        this.m_isblock || (this.m_isblock = Yu.indexOf(i) >= 0),
                                        !e && !this.m_isblock)
                                    )
                                        if ((this.AddGameViewMask(), (this.isIOS = !1), wt.os == wt.OS.IOS && 0 == this.IsWebview() && this.isIOS))
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
                                                    (document.getElementById(Mu).clientHeight == window.innerHeight ? t.HideMask() : t.SetShowMask(n),
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
                                        else if (wt.os == wt.OS.ANDROID && 0 == this.IsWebview() && this.isAndroid)
                                            if (wt.browserType == wt.BrowserType.MOBILE_QQ || wt.browserType == wt.BrowserType.UC);
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
                                            (document.getElementById(Mu).clientHeight,
                                                window.innerHeight,
                                                (t === this.m_isLandscape && document.getElementById(Mu).clientHeight === window.innerHeight) ||
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
                                    var i = document.getElementById(Fu),
                                        n = this.isLandscape ? document.getElementById(Bu) : null;
                                    (Du[e]
                                        ? ((i.textContent = Du[e][0]), n && (n.textContent = Du[e][1]))
                                        : ((i.textContent = Du[Hu[0]][0]), n && (n.textContent = Du[Hu[0]][1])),
                                        i.onclick ||
                                            (i.onclick = function () {
                                                t.HideMask();
                                            }));
                                }),
                                (r.GetLang = function (t) {
                                    var e = wt.localStorage.getItem("LobbyLanguage");
                                    if (!e || "" == e) {
                                        if (-1 != (e = "undefined" != typeof LobbyData ? LobbyData.url : window.location.href).indexOf("?"))
                                            for (var i = e.split("?")[1].split("&"), n = 0; n < i.length; n++)
                                                if (i[n].split("=")[0] == t) return i[n].split("=")[1];
                                        return Hu[0];
                                    }
                                    return e;
                                }),
                                (r.ChangeLang = function (t) {
                                    switch (t) {
                                        case zu[1]:
                                            return zu[0];
                                        case Gu[1]:
                                            return Gu[0];
                                        case Vu[1]:
                                            return Vu[0];
                                        case Wu[1]:
                                            return Wu[0];
                                        case Uu[1]:
                                            return Uu[0];
                                        case ju[1]:
                                            return ju[0];
                                        case Ju[1]:
                                            return Ju[0];
                                        case Xu[1]:
                                            return Xu[0];
                                        case qu[1]:
                                            return qu[0];
                                        default:
                                            return Hu[0];
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
                                        e = pt.getScene();
                                    this.m_mask || e.getChildByName("ScrollForMask") || wt.browserType == wt.BrowserType.FIREFOX
                                        ? !this.m_mask && e.getChildByName("ScrollForMask") && (this.m_mask = At("ScrollForMask"))
                                        : ((this.m_mask = new I()),
                                          (this.m_mask.name = "ScrollForMask"),
                                          this.m_mask.addComponent(N).setContentSize(new kt(2e3, 2e3)),
                                          this.m_mask.addComponent(ut),
                                          (this.m_mask.active = !1),
                                          e.addChild(this.m_mask),
                                          this.m_mask.setSiblingIndex(e.children.length),
                                          this.m_mask.on(I.EventType.TOUCH_END, function () {
                                              if (wt.os == wt.OS.IOS && 0 == t.IsWebview()) {
                                                  var e = t.m_backGround;
                                                  e && "hidden" == e.style.visibility && (t.m_mask.active = !1);
                                              } else wt.os == wt.OS.ANDROID && 0 == t.IsWebview() && t.Fullscreen();
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
                                    for (var t, e = v(Lu); !(t = e()).done; ) {
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
                                    return wt.os == wt.OS.IOS && /iPhone OS 15/.test(window.navigator.userAgent);
                                }),
                                (r.IsIOS15Version = function (t) {
                                    return wt.os == wt.OS.IOS && -1 !== window.navigator.userAgent.search("iPhone OS 15_" + t);
                                }),
                                o
                            );
                        })(G)).prototype,
                        "isLandscape",
                        [fu],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        },
                    )),
                    (Eu = t(wu.prototype, "isPortrait", [yu], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Tu = t(wu.prototype, "isIOS", [gu], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !0;
                        },
                    })),
                    (Ou = t(wu.prototype, "isAndroid", [Su], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !0;
                        },
                    })),
                    (Nu = t(wu.prototype, "android_Apiid", [bu], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (vu = wu)),
                ));
            C._RF.pop();
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
