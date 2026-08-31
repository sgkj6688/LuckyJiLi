System.register("chunks:///main.js", ["./index-45759f0e.js", "cc"], function () {
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
        m,
        h,
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
        B,
        N,
        O,
        L,
        I,
        A,
        R,
        x,
        F,
        P,
        k,
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
        mt,
        ht,
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
        Bt,
        Nt,
        Ot,
        Lt,
        It;
    return {
        setters: [
            function (T) {
                ((t = T._),
                    (e = T.a),
                    (i = T.b),
                    (n = T.c),
                    (o = T.d),
                    (r = T.n),
                    (a = T.e),
                    (s = T.f),
                    (l = T.C),
                    (c = T.g),
                    (u = T.S),
                    (p = T.h),
                    (m = T.i),
                    (h = T.j),
                    (_ = T.k),
                    (d = T.l),
                    (f = T.m),
                    (y = T.o),
                    (g = T.p),
                    (S = T.q),
                    (b = T.r),
                    (w = T.s),
                    (C = T.t),
                    (v = T.u),
                    (E = T.v));
            },
            function (t) {
                ((T = t.cclegacy),
                    (B = t._decorator),
                    (N = t.Color),
                    (O = t.ccenum),
                    (L = t.UITransform),
                    (I = t.Node),
                    (A = t.SpriteFrame),
                    (R = t.EventHandler),
                    (x = t.Vec3),
                    (F = t.Sprite),
                    (P = t.math),
                    (k = t.assetManager),
                    (M = t.Label),
                    (D = t.lerp),
                    (z = t.UIRenderer),
                    (G = t.NodeEventType),
                    (V = t.TransformBit),
                    (H = t.Component),
                    (W = t.CCString),
                    (U = t.Animation),
                    (j = t.Tween),
                    (X = t.tween),
                    (Y = t.Button),
                    (K = t.Material),
                    (Z = t.Gradient),
                    (q = t.v4),
                    (J = t.Texture2D),
                    (Q = t.clamp01),
                    ($ = t.color),
                    (tt = t.EffectAsset),
                    (et = t.CCInteger),
                    (it = t.CCBoolean),
                    (nt = t.CCFloat),
                    (ot = t.log),
                    (rt = t.ImageAsset),
                    (at = t.sp),
                    (st = t.Enum),
                    (lt = t.error),
                    (ct = t.instantiate),
                    (ut = t.AnimationClip),
                    (pt = t.v3),
                    (mt = t.ParticleSystem2D),
                    (ht = t.Vec2),
                    (_t = t.TweenSystem),
                    (dt = t.ScrollView),
                    (ft = t.UIOpacity),
                    (yt = t.isValid),
                    (gt = t.v2),
                    (St = t.director),
                    (bt = t.Director),
                    (wt = t.CCClass),
                    (Ct = t.sys),
                    (vt = t.SpriteAtlas),
                    (Et = t.js),
                    (Tt = t.Prefab),
                    (Bt = t.settings),
                    (Nt = t.Settings),
                    (Ot = t.VERSION),
                    (Lt = t.find),
                    (It = t.Size));
            },
        ],
        execute: function () {
            var At,
                Rt,
                xt,
                Ft,
                Pt,
                kt,
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
                me,
                he,
                _e,
                de,
                fe,
                ye,
                ge,
                Se,
                be,
                we,
                Ce,
                ve,
                Ee;
            T._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", void 0);
            var Te,
                Be,
                Ne,
                Oe = B.ccclass,
                Le = B.executionOrder,
                Ie = B.requireComponent,
                Ae = B.type,
                Re = B.executeInEditMode,
                xe = B.property,
                Fe = new N();
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
                })(Be || (Be = {})),
                (function (t) {
                    t.CLICK = "click";
                })(Ne || (Ne = {})));
            var Pe, ke, Me, De, ze, Ge, Ve, He, We, Ue, je;
            ((At = Oe("ButtonPro")),
                (Rt = Le(110)),
                (xt = Ie(L)),
                (Ft = xe({ type: I, displayOrder: 0, tooltip: "i18n:button.target" })),
                (Pt = xe({ displayOrder: 1, tooltip: "i18n:button.interactable" })),
                (kt = xe({ type: Te, displayOrder: 2, tooltip: "i18n:button.transition" })),
                (Mt = xe({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.normal_color" })),
                (Dt = xe({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.pressed_color" })),
                (zt = xe({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.hover_color" })),
                (Gt = xe({ group: { name: "COLOR" }, displayOrder: 3, tooltip: "i18n:button.disabled_color" })),
                (Vt = xe({ group: { name: "SCALE" }, displayOrder: 4, tooltip: "i18n:button.duration", min: 0, max: 10 })),
                (Ht = xe({ group: { name: "SCALE" }, displayOrder: 4, tooltip: "i18n:button.zoom_scale" })),
                (Wt = xe({ group: { name: "SPRITE" }, type: A, displayOrder: 3, tooltip: "i18n:button.normal_sprite" })),
                (Ut = xe({ group: { name: "SPRITE" }, type: A, displayOrder: 3, tooltip: "i18n:button.pressed_sprite" })),
                (jt = xe({ group: { name: "SPRITE" }, type: A, displayOrder: 3, tooltip: "i18n:button.hover_sprite" })),
                (Xt = xe({ group: { name: "SPRITE" }, type: A, displayOrder: 3, tooltip: "i18n:button.disabled_sprite" })),
                (Yt = Ae([R])),
                (Kt = xe({ serializable: !0, displayOrder: 20, tooltip: "i18n:button.click_events" })),
                (Zt = xe({ serializable: !0 })),
                (qt = xe({ serializable: !0 })),
                (Jt = xe({ serializable: !0 })),
                (Qt = xe({ serializable: !0 })),
                ($t = xe({ serializable: !0 })),
                (te = xe({ serializable: !0 })),
                (ee = xe({ serializable: !0 })),
                (ie = xe({ serializable: !0 })),
                (ne = xe({ serializable: !0 })),
                (oe = xe({ serializable: !0 })),
                (re = xe({ serializable: !0 })),
                (ae = xe({ serializable: !0 })),
                (se = xe({ serializable: !0 })),
                At(
                    (le =
                        Rt(
                            (le =
                                xt(
                                    (le =
                                        Re(
                                            (((Ee = (function (t) {
                                                function r() {
                                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                                    return (
                                                        (e = t.call.apply(t, [this].concat(r)) || this),
                                                        i(e, "clickEvents", ue, n(e)),
                                                        i(e, "_interactable", pe, n(e)),
                                                        i(e, "_transition", me, n(e)),
                                                        i(e, "_normalColor", he, n(e)),
                                                        i(e, "_hoverColor", _e, n(e)),
                                                        i(e, "_pressedColor", de, n(e)),
                                                        i(e, "_disabledColor", fe, n(e)),
                                                        i(e, "_normalSprite", ye, n(e)),
                                                        i(e, "_hoverSprite", ge, n(e)),
                                                        i(e, "_pressedSprite", Se, n(e)),
                                                        i(e, "_disabledSprite", be, n(e)),
                                                        i(e, "_duration", we, n(e)),
                                                        i(e, "_zoomScale", Ce, n(e)),
                                                        i(e, "_target", ve, n(e)),
                                                        (e._pressed = !1),
                                                        (e._hovered = !1),
                                                        (e._fromColor = new N()),
                                                        (e._toColor = new N()),
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
                                                        if (!this.getComponent(F)) {
                                                            var t = this.addComponent(F);
                                                            if (t) {
                                                                ((t.sizeMode = F.SizeMode.CUSTOM), (t.type = F.Type.SLICED));
                                                                var e = this.node.getComponent(L);
                                                                e && (e.contentSize = P.size(120, 40));
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
                                                            var r = new I("Label"),
                                                                a = r.addComponent(M);
                                                            ((a.node.layer = this.node.layer),
                                                                (a.string = "ButtonPro"),
                                                                (r.parent = this.node),
                                                                (a.color = N.BLACK),
                                                                (a.fontSize = 20));
                                                        }
                                                    }),
                                                    (a.__preload = function () {
                                                        this.target || (this.target = this.node);
                                                        var t = this.node.getComponent(F);
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
                                                                (N.lerp(Fe, this._fromColor, this._toColor, i), n && (n.color = Fe));
                                                            }
                                                            (this.transition & Te.SCALE &&
                                                                (e.getScale(this._targetScale),
                                                                (this._targetScale.x = D(this._fromScale.x, this._toScale.x, i)),
                                                                (this._targetScale.y = D(this._fromScale.y, this._toScale.y, i)),
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
                                                                var i = t.getComponent(z);
                                                                i && (i.color = this._normalColor);
                                                            }
                                                            (e & Te.SCALE && this._originalScale && t.setScale(this._originalScale),
                                                                (this._transitionFinished = !0));
                                                        }
                                                    }),
                                                    (a._registerNodeEvent = function () {
                                                        (this.node.on(G.TOUCH_START, this._onTouchBegan, this),
                                                            this.node.on(G.TOUCH_MOVE, this._onTouchMove, this),
                                                            this.node.on(G.TOUCH_END, this._onTouchEnded, this),
                                                            this.node.on(G.TOUCH_CANCEL, this._onTouchCancel, this),
                                                            this.node.on(G.MOUSE_ENTER, this._onMouseMoveIn, this),
                                                            this.node.on(G.MOUSE_LEAVE, this._onMouseMoveOut, this));
                                                    }),
                                                    (a._registerTargetEvent = function (t) {
                                                        t.on(G.TRANSFORM_CHANGED, this._onTargetTransformChanged, this);
                                                    }),
                                                    (a._unregisterNodeEvent = function () {
                                                        (this.node.off(G.TOUCH_START, this._onTouchBegan, this),
                                                            this.node.off(G.TOUCH_MOVE, this._onTouchMove, this),
                                                            this.node.off(G.TOUCH_END, this._onTouchEnded, this),
                                                            this.node.off(G.TOUCH_CANCEL, this._onTouchCancel, this),
                                                            this.node.off(G.MOUSE_ENTER, this._onMouseMoveIn, this),
                                                            this.node.off(G.MOUSE_LEAVE, this._onMouseMoveOut, this));
                                                    }),
                                                    (a._unregisterTargetEvent = function (t) {
                                                        t.off(G.TRANSFORM_CHANGED);
                                                    }),
                                                    (a._getTargetSprite = function (t) {
                                                        var e = null;
                                                        return (t && (e = t.getComponent(F)), e);
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
                                                                case Be.NORMAL:
                                                                    this._normalSprite = t;
                                                                    break;
                                                                case Be.HOVER:
                                                                    this._hoverSprite = t;
                                                                    break;
                                                                case Be.PRESSED:
                                                                    this._pressedSprite = t;
                                                                    break;
                                                                case Be.DISABLED:
                                                                    this._disabledSprite = t;
                                                            }
                                                    }),
                                                    (a._onTargetColorChanged = function (t) {
                                                        this._transition & Te.COLOR && this._setCurrentStateColor(t);
                                                    }),
                                                    (a._setCurrentStateColor = function (t) {
                                                        switch (this._getButtonState()) {
                                                            case Be.NORMAL:
                                                                this._normalColor = t;
                                                                break;
                                                            case Be.HOVER:
                                                                this._hoverColor = t;
                                                                break;
                                                            case Be.PRESSED:
                                                                this._pressedColor = t;
                                                                break;
                                                            case Be.DISABLED:
                                                                this._disabledColor = t;
                                                        }
                                                    }),
                                                    (a._onTargetTransformChanged = function (t) {
                                                        t & V.SCALE &&
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
                                                                else ((i = n ? Be.PRESSED : Be.NORMAL), this._applyTransition(i));
                                                                t && (t.propagationStopped = !0);
                                                            }
                                                        }
                                                    }),
                                                    (a._onTouchEnded = function (t) {
                                                        this._interactable &&
                                                            this.enabledInHierarchy &&
                                                            (this._pressed && (R.emitEvents(this.clickEvents, t), this.node.emit(Ne.CLICK, this)),
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
                                                        var t = Be.NORMAL;
                                                        return (
                                                            this._interactable
                                                                ? this._pressed
                                                                    ? (t = Be.PRESSED)
                                                                    : this._hovered && (t = Be.HOVER)
                                                                : (t = Be.DISABLED),
                                                            t.toString()
                                                        );
                                                    }),
                                                    (a._updateColorTransition = function (t) {
                                                        var e,
                                                            i = this[t + "Color"],
                                                            n = null == (e = this.target) ? void 0 : e.getComponent(z);
                                                        n &&
                                                            (t === Be.DISABLED
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
                                                        this._interactable && (t === Be.PRESSED ? this._zoomUp() : this._zoomBack());
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
                                                            (this._pressed && (R.emitEvents(this.clickEvents, this), this.node.emit(Ne.CLICK, this)),
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
                                                                    (this._transition & Te.COLOR && this._updateColorTransition(Be.NORMAL),
                                                                    this._transition & Te.SPRITE && this._updateSpriteTransition(Be.NORMAL),
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
                                                                    var e = this.node.getComponent(F);
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
                                            })(H)).Transition = Te),
                                            (Ee.EventType = Ne),
                                            t((ce = Ee).prototype, "target", [Ft], Object.getOwnPropertyDescriptor(ce.prototype, "target"), ce.prototype),
                                            t(ce.prototype, "interactable", [Pt], Object.getOwnPropertyDescriptor(ce.prototype, "interactable"), ce.prototype),
                                            t(ce.prototype, "transition", [kt], Object.getOwnPropertyDescriptor(ce.prototype, "transition"), ce.prototype),
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
                                            t(ce.prototype, "duration", [Vt], Object.getOwnPropertyDescriptor(ce.prototype, "duration"), ce.prototype),
                                            t(ce.prototype, "zoomScale", [Ht], Object.getOwnPropertyDescriptor(ce.prototype, "zoomScale"), ce.prototype),
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
                                                [Xt],
                                                Object.getOwnPropertyDescriptor(ce.prototype, "disabledSprite"),
                                                ce.prototype,
                                            ),
                                            (ue = t(ce.prototype, "clickEvents", [Yt, Kt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return [];
                                                },
                                            })),
                                            (pe = t(ce.prototype, "_interactable", [Zt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return !0;
                                                },
                                            })),
                                            (me = t(ce.prototype, "_transition", [qt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return Te.NONE;
                                                },
                                            })),
                                            (he = t(ce.prototype, "_normalColor", [Jt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return N.WHITE.clone();
                                                },
                                            })),
                                            (_e = t(ce.prototype, "_hoverColor", [Qt], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return new N(211, 211, 211, 255);
                                                },
                                            })),
                                            (de = t(ce.prototype, "_pressedColor", [$t], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return N.WHITE.clone();
                                                },
                                            })),
                                            (fe = t(ce.prototype, "_disabledColor", [te], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return new N(124, 124, 124, 255);
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
                                            (we = t(ce.prototype, "_duration", [re], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return 0.1;
                                                },
                                            })),
                                            (Ce = t(ce.prototype, "_zoomScale", [ae], {
                                                configurable: !0,
                                                enumerable: !0,
                                                writable: !0,
                                                initializer: function () {
                                                    return 1.2;
                                                },
                                            })),
                                            (ve = t(ce.prototype, "_target", [se], {
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
            (T._RF.pop(), T._RF.push({}, "58afbgi72RCYrg3eW8ahovc", "CommonBuyBonusCell", void 0));
            var Xe,
                Ye,
                Ke,
                Ze,
                qe,
                Je,
                Qe,
                $e,
                ti,
                ei,
                ii,
                ni,
                oi,
                ri,
                ai,
                si,
                li,
                ci,
                ui,
                pi,
                mi,
                hi = B.ccclass,
                _i = B.property,
                di =
                    ((Pe = hi("CommonBuyBonusCell")),
                    (ke = _i({ type: F, tooltip: "購買文字" })),
                    (Me = _i({ type: F, tooltip: "項目標題" })),
                    (De = _i({ type: W, tooltip: "標題圖片名稱" })),
                    (ze = _i({ type: M, tooltip: "金額" })),
                    Pe(
                        ((He = t(
                            (Ve = (function (t) {
                                function o() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        (e = t.call.apply(t, [this].concat(r)) || this),
                                        i(e, "m_buyHintSprite", He, n(e)),
                                        i(e, "m_titleSprite", We, n(e)),
                                        i(e, "m_titlePicName", Ue, n(e)),
                                        i(e, "m_priceLabel", je, n(e)),
                                        e
                                    );
                                }
                                e(o, t);
                                var s = o.prototype;
                                return (
                                    (s.start = function () {
                                        var t = r.GetGameAtlas();
                                        r.CurrLang !== a.Lang.EN &&
                                            ((this.m_buyHintSprite.spriteFrame = t.getSpriteFrame("Txt_Buy_Feature_Buy")),
                                            (this.m_titleSprite.spriteFrame = t.getSpriteFrame(this.m_titlePicName)));
                                    }),
                                    (s.SetPrice = function (t) {
                                        this.m_priceLabel.string = t;
                                    }),
                                    o
                                );
                            })(H)).prototype,
                            "m_buyHintSprite",
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
                        (We = t(Ve.prototype, "m_titleSprite", [Me], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (Ue = t(Ve.prototype, "m_titlePicName", [De], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return "";
                            },
                        })),
                        (je = t(Ve.prototype, "m_priceLabel", [ze], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        })),
                        (Ge = Ve)),
                    ) || Ge);
            (T._RF.pop(), T._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", "CommonBuyBonus", void 0));
            var fi,
                yi,
                gi,
                Si,
                bi,
                wi,
                Ci,
                vi,
                Ei,
                Ti,
                Bi,
                Ni,
                Oi,
                Li,
                Ii,
                Ai,
                Ri,
                xi,
                Fi,
                Pi,
                ki,
                Mi,
                Di,
                zi,
                Gi,
                Vi,
                Hi,
                Wi,
                Ui,
                ji = "Buy_Feature_Open",
                Xi = "Buy_Feature_Close",
                Yi = B.ccclass,
                Ki = B.property;
            ((Xe = Yi("CommonBuyBonus")),
                (Ye = Ki({ type: I, tooltip: "介面" })),
                (Ke = Ki({ type: U, tooltip: "介面開關動畫" })),
                (Ze = Ki({ type: I, tooltip: "開啟按鈕節點" })),
                (qe = Ki({ type: F, tooltip: "開啟按鈕標題" })),
                (Je = Ki({ type: M, tooltip: "押注金額" })),
                (Qe = Ki({ type: di, tooltip: "購買項目" })),
                ($e = Ki({ type: F, tooltip: "標題" })),
                (ti = Ki({ type: F, tooltip: "押注" })),
                (ei = Ki({ type: M, tooltip: "幣別符號" })),
                Xe(
                    ((oi = t(
                        (ni = (function (t) {
                            function S() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_viewNode", oi, n(e)),
                                    i(e, "m_anim", ri, n(e)),
                                    i(e, "m_openBtnNode", ai, n(e)),
                                    i(e, "m_openBtnTitle", si, n(e)),
                                    i(e, "m_betLabel", li, n(e)),
                                    i(e, "m_buyBonusCells", ci, n(e)),
                                    i(e, "m_titleSprite", ui, n(e)),
                                    i(e, "m_betSprite", pi, n(e)),
                                    i(e, "m_currencyLabel", mi, n(e)),
                                    (e.m_iGameView = null),
                                    (e.m_setting = null),
                                    (e.m_betList = null),
                                    (e.m_betIdx = 0),
                                    (e.m_bonusType = null),
                                    (e.m_isPlayingAnim = !1),
                                    e
                                );
                            }
                            e(S, t);
                            var b = S.prototype;
                            return (
                                (b.start = function () {
                                    this.m_viewNode.active = !0;
                                    var t = r.GetGameAtlas();
                                    (r.CurrLang !== a.Lang.EN &&
                                        ((this.m_betSprite.spriteFrame = t.getSpriteFrame("Txt_Buy_Feature_Bet")),
                                        (this.m_titleSprite.spriteFrame = t.getSpriteFrame("Txt_Buy_Feature_Title")),
                                        this.m_openBtnTitle && (this.m_openBtnTitle.spriteFrame = t.getSpriteFrame("BuyBonus_IconName"))),
                                        s.Register(l.TriggerFreeSpin, this),
                                        s.Register(l.FreeSpinTotalWinEnd, this),
                                        s.Register(l.PauseFreeSpin, this));
                                }),
                                (b.Init = function (t, e, i, n) {
                                    var o = this;
                                    if (
                                        (void 0 === i && (i = !1),
                                        void 0 === n && (n = null),
                                        (this.m_viewNode.active = !1),
                                        t && !c.CheckSwitchOff(u.ShopingMall))
                                    ) {
                                        ((this.m_setting = t), (this.m_iGameView = e), (this.m_betList = JSON.parse(JSON.stringify(p.GetBetList()))));
                                        for (var r = this.m_betList.length - 1; r >= 0 && this.m_betList[r] > this.m_setting.MaxBet; r--)
                                            this.m_betList.splice(r);
                                        if (0 !== this.m_betList.length) {
                                            ((this.m_betIdx = p.GetNowBetIndex()),
                                                (!this.m_betList[this.m_betIdx] || this.m_betList[this.m_betIdx] > this.m_betList[this.m_betList.length - 1]) &&
                                                    (this.m_betIdx = this.m_betList.length - 1),
                                                this.SetPrice());
                                            for (
                                                var s = function (t) {
                                                        o.m_buyBonusCells[t].getComponent(Y).node.on(I.EventType.TOUCH_END, function () {
                                                            m.IsFeaturesDemoMode
                                                                ? o.Hide()
                                                                : (null == n || n(),
                                                                  d.Play(a.AudioClips.COMMON_BTN),
                                                                  o.m_isPlayingAnim ||
                                                                      (f.ForceChangeExtraBetMode(!1),
                                                                      (o.m_bonusType = t),
                                                                      o.Hide(),
                                                                      p.SetNowBet(o.m_betList[o.m_betIdx]),
                                                                      o.m_iGameView.ClickSpin()));
                                                        });
                                                    },
                                                    l = 0;
                                                l < this.m_buyBonusCells.length;
                                                l++
                                            )
                                                s(l);
                                            ((this.m_viewNode.active = !1),
                                                i && this.m_openBtnNode && (this.m_openBtnNode.removeFromParent(), m.SetGameBuyBonus(this.m_openBtnNode)));
                                        } else this.SetBuyBtnVisible(!1);
                                    } else this.SetBuyBtnVisible(!1);
                                }),
                                (b.OnEvent = function (t) {
                                    t === l.TriggerFreeSpin
                                        ? (this.Hide(), this.SetBuyBtnVisible(!1))
                                        : (t !== l.FreeSpinTotalWinEnd && t !== l.PauseFreeSpin) || this.SetBuyBtnVisible(!0);
                                }),
                                (b.SetPrice = function () {
                                    var t = this.m_betList[this.m_betIdx];
                                    (this.m_currencyLabel &&
                                        (a.DollarSymbol ? (this.m_currencyLabel.string = "(" + a.DollarSymbol + ")") : (this.m_currencyLabel.node.active = !1)),
                                        (this.m_betLabel.string = c.FormatNumberThousands(t, c.FORMAT_NUMBER_TYPE.PERMANENT_DOT)));
                                    for (var e = 0; e < this.m_buyBonusCells.length; e++) {
                                        var i = c.times(t, this.m_setting.PriceOdd[e]);
                                        this.m_buyBonusCells[e].SetPrice(c.FormatNumberThousands(i, c.FORMAT_NUMBER_TYPE.PERMANENT_DOT));
                                    }
                                }),
                                (b.SetBuyBtnVisible = function (t) {
                                    this.m_openBtnNode.active = !!this.m_setting && t;
                                }),
                                (b.GetBuyBtnVisible = function () {
                                    return this.m_openBtnNode.active;
                                }),
                                (b.GetBuyBonusBet = function () {
                                    return this.m_setting && null !== this.m_bonusType
                                        ? c.times(this.m_setting.PriceOdd[this.m_bonusType], p.GetNowBetValue())
                                        : c.strip(p.GetNowBetValue());
                                }),
                                (b.CleanInfo = function () {
                                    this.m_bonusType = null;
                                }),
                                (b.IsOpen = function () {
                                    return this.m_viewNode.active;
                                }),
                                (b.Show = function () {
                                    var t = this;
                                    if (
                                        !(h.Current() !== _.IDLE || a.FreeSpinRemain > 0 || a.HotHandRemain > 0) &&
                                        !this.m_anim.getState(Xi).isPlaying &&
                                        !this.m_viewNode.active
                                    ) {
                                        (j.stopAllByTarget(this.node),
                                            (this.m_isPlayingAnim = !0),
                                            d.Play(a.AudioClips.COMMON_BTN),
                                            (this.m_viewNode.active = !0),
                                            this.m_anim.play(ji));
                                        var e = this.m_anim.getState(ji);
                                        X(this.node)
                                            .delay(e.duration)
                                            .call(function () {
                                                t.m_isPlayingAnim = !1;
                                            })
                                            .start();
                                        var i = "-1",
                                            n = 0;
                                        (a.APP && ((i = a.APP.GetAID()), (n = Number(a.APP.GetApiID()))),
                                            a.SendBtnClickEvent(
                                                Number(i),
                                                n,
                                                Number(a.NOW_GAME_ID),
                                                this.m_iGameView.Version,
                                                a.BTN_CLICK_EVENT.INGAME_BUY_BONUS,
                                                0,
                                                !1,
                                            ));
                                    }
                                }),
                                (b.Hide = (function () {
                                    var t = y(
                                        g().mark(function t() {
                                            var e,
                                                i,
                                                n,
                                                o = this;
                                            return g().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (((e = this.m_anim.getState(Xi)), this.m_viewNode.active && !e.isPlaying)) {
                                                                    t.next = 3;
                                                                    break;
                                                                }
                                                                return t.abrupt("return");
                                                            case 3:
                                                                return (
                                                                    (i = this.m_anim.getState(ji)).isPlaying && i.stop(),
                                                                    j.stopAllByTarget(this.node),
                                                                    (this.m_isPlayingAnim = !0),
                                                                    d.Play(a.AudioClips.COMMON_BTN),
                                                                    this.m_anim.play(Xi),
                                                                    (e = this.m_anim.getState(Xi)),
                                                                    X(this.node)
                                                                        .delay(i.duration)
                                                                        .call(function () {
                                                                            o.m_isPlayingAnim = !1;
                                                                        })
                                                                        .start(),
                                                                    (n = this.m_anim.getState(Xi)),
                                                                    (t.next = 14),
                                                                    a.Wait(this, n.duration)
                                                                );
                                                            case 14:
                                                                this.m_viewNode.active = !1;
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
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })()),
                                (b.AddBet = function () {
                                    this.m_betIdx + 1 > this.m_betList.length - 1 || (d.Play(a.AudioClips.COMMON_BTN), this.m_betIdx++, this.SetPrice());
                                }),
                                (b.SubBet = function () {
                                    this.m_betIdx - 1 < 0 || (d.Play(a.AudioClips.COMMON_BTN), this.m_betIdx--, this.SetPrice());
                                }),
                                o(S, [
                                    {
                                        key: "BonusType",
                                        get: function () {
                                            return this.m_bonusType;
                                        },
                                    },
                                ]),
                                S
                            );
                        })(H)).prototype,
                        "m_viewNode",
                        [Ye],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (ri = t(ni.prototype, "m_anim", [Ke], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (ai = t(ni.prototype, "m_openBtnNode", [Ze], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (si = t(ni.prototype, "m_openBtnTitle", [qe], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (li = t(ni.prototype, "m_betLabel", [Je], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (ci = t(ni.prototype, "m_buyBonusCells", [Qe], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (ui = t(ni.prototype, "m_titleSprite", [$e], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (pi = t(ni.prototype, "m_betSprite", [ti], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (mi = t(ni.prototype, "m_currencyLabel", [ei], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (ii = ni)),
                ));
            (T._RF.pop(), T._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", void 0));
            var Zi,
                qi,
                Ji,
                Qi,
                $i,
                tn,
                en,
                nn,
                on = B.ccclass,
                rn = B.property,
                an = B.requireComponent,
                sn = B.executeInEditMode;
            ((fi = on("ColorText")),
                (yi = an(M)),
                (gi = rn(K)),
                (Si = rn(Z)),
                (bi = rn(N)),
                (wi = rn({ tooltip: "使用該元件的自定義材質", type: K })),
                (Ci = rn({ tooltip: "顏色漸變元件", type: Z })),
                (vi = rn({ tooltip: "正片疊底顏色", type: N })),
                (Ei = rn({ tooltip: "顏色漸變貼圖的範圍", range: [0, 1, 0.01], slide: !0 })),
                (Ti = rn({ tooltip: "是否垂直漸變顏色" })),
                (Bi = rn({ tooltip: "上內陰影顏色", type: N })),
                (Ni = rn({ tooltip: "下內陰影顏色", type: N })),
                (Oi = rn({ tooltip: "上內陰影顏色高度 (Pixel)" })),
                (Li = rn({ tooltip: "下內陰影顏色高度 (Pixel)" })),
                (Ii = rn({ tooltip: "上內陰影插值比例 (0 ~ 1)", range: [0, 1, 0.01], slide: !0 })),
                (Ai = rn({ tooltip: "下內陰影插值比例 (0 ~ 1)", range: [0, 1, 0.01], slide: !0 })),
                fi(
                    (Ri =
                        yi(
                            (Ri =
                                sn(
                                    ((Fi = t(
                                        (xi = (function (t) {
                                            function r() {
                                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                                return (
                                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                                    i(e, "_textMaterial", Fi, n(e)),
                                                    i(e, "_gradient", Pi, n(e)),
                                                    i(e, "_gradientMultiply", ki, n(e)),
                                                    i(e, "_gradientShrink", Mi, n(e)),
                                                    i(e, "_isVertical", Di, n(e)),
                                                    i(e, "_innerShadowColor1", zi, n(e)),
                                                    i(e, "_innerShadowColor2", Gi, n(e)),
                                                    i(e, "_innerShadowHeight1", Vi, n(e)),
                                                    i(e, "_innerShadowHeight2", Hi, n(e)),
                                                    i(e, "_innerShadowRate1", Wi, n(e)),
                                                    i(e, "_innerShadowRate2", Ui, n(e)),
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
                                                    var t = this.node.getComponent(M);
                                                    (null !== t.customMaterial &&
                                                        (t.customMaterial !== t.sharedMaterial && t.customMaterial.destroy(), (t.customMaterial = null)),
                                                        (t.color = N.WHITE),
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
                                                    var t = this.node.getComponent(M),
                                                        e = t.customMaterial;
                                                    if ((!e && this._textMaterial && ((e = new K()).copy(this._textMaterial), (t.customMaterial = e)), e)) {
                                                        (e.setProperty("gradientMap", this.colorTexture),
                                                            e.setProperty("gradientMultiply", this._gradientMultiply),
                                                            e.setProperty("gradientShrink", this._gradientShrink),
                                                            e.setProperty("innerShadow1", this._innerShadowColor1),
                                                            e.setProperty("innerShadow2", this._innerShadowColor2));
                                                        var i = 0,
                                                            n = 0,
                                                            o = this.node.getComponent(L).contentSize;
                                                        o.height > 0 && ((i = this._innerShadowHeight1 / o.height), (n = this._innerShadowHeight2 / o.height));
                                                        var r = q(i, n, this._innerShadowRate1, this._innerShadowRate2);
                                                        e.setProperty("innerShadowParam", r);
                                                    }
                                                }),
                                                (a.createColorTexture = function () {
                                                    var t = new J(),
                                                        e = this.pixelNum,
                                                        i = 1;
                                                    return (
                                                        !0 === this._isVertical && ((i = e), (e = 1)),
                                                        t.reset({ width: e, height: i, format: J.PixelFormat.RGBA8888, mipmapLevel: 0 }),
                                                        t.setWrapMode(J.WrapMode.CLAMP_TO_EDGE, J.WrapMode.CLAMP_TO_EDGE),
                                                        t.setFilters(J.Filter.LINEAR, J.Filter.LINEAR),
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
                                                            ((this._innerShadowRate1 = Q(t)), this.reset());
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
                                        })(H)).prototype,
                                        "_textMaterial",
                                        [gi],
                                        {
                                            configurable: !0,
                                            enumerable: !0,
                                            writable: !0,
                                            initializer: function () {
                                                return null;
                                            },
                                        },
                                    )),
                                    (Pi = t(xi.prototype, "_gradient", [Si], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return new Z();
                                        },
                                    })),
                                    (ki = t(xi.prototype, "_gradientMultiply", [bi], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return $(255, 255, 255, 255);
                                        },
                                    })),
                                    (Mi = t(xi.prototype, "_gradientShrink", [rn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0.15;
                                        },
                                    })),
                                    (Di = t(xi.prototype, "_isVertical", [rn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return !0;
                                        },
                                    })),
                                    t(xi.prototype, "textMaterial", [wi], Object.getOwnPropertyDescriptor(xi.prototype, "textMaterial"), xi.prototype),
                                    t(xi.prototype, "gradient", [Ci], Object.getOwnPropertyDescriptor(xi.prototype, "gradient"), xi.prototype),
                                    t(xi.prototype, "gradientMultiply", [vi], Object.getOwnPropertyDescriptor(xi.prototype, "gradientMultiply"), xi.prototype),
                                    t(xi.prototype, "gradientShrink", [Ei], Object.getOwnPropertyDescriptor(xi.prototype, "gradientShrink"), xi.prototype),
                                    t(xi.prototype, "isVertical", [Ti], Object.getOwnPropertyDescriptor(xi.prototype, "isVertical"), xi.prototype),
                                    (zi = t(xi.prototype, "_innerShadowColor1", [rn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return $(255, 255, 255, 255);
                                        },
                                    })),
                                    (Gi = t(xi.prototype, "_innerShadowColor2", [rn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return $(255, 255, 255, 255);
                                        },
                                    })),
                                    (Vi = t(xi.prototype, "_innerShadowHeight1", [rn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 1;
                                        },
                                    })),
                                    (Hi = t(xi.prototype, "_innerShadowHeight2", [rn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 2;
                                        },
                                    })),
                                    (Wi = t(xi.prototype, "_innerShadowRate1", [rn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    })),
                                    (Ui = t(xi.prototype, "_innerShadowRate2", [rn], {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    })),
                                    t(
                                        xi.prototype,
                                        "innerShadowColor1",
                                        [Bi],
                                        Object.getOwnPropertyDescriptor(xi.prototype, "innerShadowColor1"),
                                        xi.prototype,
                                    ),
                                    t(
                                        xi.prototype,
                                        "innerShadowColor2",
                                        [Ni],
                                        Object.getOwnPropertyDescriptor(xi.prototype, "innerShadowColor2"),
                                        xi.prototype,
                                    ),
                                    t(
                                        xi.prototype,
                                        "innerShadowHeight1",
                                        [Oi],
                                        Object.getOwnPropertyDescriptor(xi.prototype, "innerShadowHeight1"),
                                        xi.prototype,
                                    ),
                                    t(
                                        xi.prototype,
                                        "innerShadowHeight2",
                                        [Li],
                                        Object.getOwnPropertyDescriptor(xi.prototype, "innerShadowHeight2"),
                                        xi.prototype,
                                    ),
                                    t(xi.prototype, "innerShadowRate1", [Ii], Object.getOwnPropertyDescriptor(xi.prototype, "innerShadowRate1"), xi.prototype),
                                    t(xi.prototype, "innerShadowRate2", [Ai], Object.getOwnPropertyDescriptor(xi.prototype, "innerShadowRate2"), xi.prototype),
                                    (Ri = xi)),
                                ) || Ri),
                        ) || Ri),
                ));
            (T._RF.pop(), T._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", void 0));
            var ln,
                cn = B.ccclass,
                un = B.property,
                pn = B.executeInEditMode;
            ((Zi = cn("ColorFadingUI")),
                (qi = un({ type: tt, tooltip: "Color Fading 預設 shader" })),
                (Ji = un({ type: et, tooltip: "Gradient Texture Size" })),
                (Qi = un({ type: it, tooltip: "是否使用alpha test, Spine建議開啟" })),
                ($i = un({ type: nt, tooltip: "混合比例，0~1之間" })),
                (tn = un({ type: Z, tooltip: "當前Gradient" })),
                Zi(
                    (en =
                        pn(
                            (t(
                                (nn = (function (t) {
                                    function i() {
                                        for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                                        return (
                                            ((e = t.call.apply(t, [this].concat(n)) || this).m_colorFadingEffect = null),
                                            (e.m_gradientTextureSize = 64),
                                            (e.m_currGradient = new Z()),
                                            (e.m_mixRate = 0),
                                            (e.m_useAlphaTest = !1),
                                            (e.m_tex = new J()),
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
                                            ((this.m_mixRate = 1), (this.m_currGradient = new Z()), this.LoadTexture());
                                        }),
                                        (n.GenerateMat = function () {
                                            var t = this.GetRenderComponent();
                                            if (null != t && null != this.m_colorFadingEffect) {
                                                var e = new K();
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
                                            if (null == this.m_colorFadingEffect) ot("Warning! No effect asset loaded!");
                                            else {
                                                (ot("loadTexture", this.m_currGradient), this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1));
                                                for (var t = [], e = 1 / this.m_gradientTextureSize, i = 0; i <= 1; i++)
                                                    for (var n = 0; n <= this.m_gradientTextureSize; n += e) {
                                                        var o = new N();
                                                        ((o = this.m_currGradient.evaluate(n)), t.push(o.r), t.push(o.g), t.push(o.b), t.push(o.a));
                                                    }
                                                this.CreateTexture(t);
                                            }
                                        }),
                                        (n.CreateTexture = function (t) {
                                            var e = new Uint8Array(t),
                                                i = new rt();
                                            (this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1),
                                                i.reset({
                                                    _data: e,
                                                    width: this.m_gradientTextureSize,
                                                    height: 1,
                                                    format: J.PixelFormat.RGBA8888,
                                                    _compressed: !1,
                                                }),
                                                (this.m_tex.image = i),
                                                this.m_tex.setWrapMode(J.WrapMode.CLAMP_TO_EDGE, J.WrapMode.CLAMP_TO_EDGE),
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
                                                null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(F)),
                                                null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(at.Skeleton)),
                                                null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(M)),
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
                                })(H)).prototype,
                                "ColorFadingEffect",
                                [qi],
                                Object.getOwnPropertyDescriptor(nn.prototype, "ColorFadingEffect"),
                                nn.prototype,
                            ),
                            t(nn.prototype, "GradientTextureSize", [Ji], Object.getOwnPropertyDescriptor(nn.prototype, "GradientTextureSize"), nn.prototype),
                            t(nn.prototype, "UseAlphaTest", [Qi], Object.getOwnPropertyDescriptor(nn.prototype, "UseAlphaTest"), nn.prototype),
                            t(nn.prototype, "MixRate", [$i], Object.getOwnPropertyDescriptor(nn.prototype, "MixRate"), nn.prototype),
                            t(nn.prototype, "CurrentGradient", [tn], Object.getOwnPropertyDescriptor(nn.prototype, "CurrentGradient"), nn.prototype),
                            (en = nn)),
                        ) || en),
                ));
            (T._RF.pop(), T._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", void 0));
            var mn,
                hn =
                    (0, B.ccclass)(
                        (ln = (function (t) {
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
                                    (ot("AnimEvtReciever: ", t), this.m_callback ? this.m_callback(t) : ot("callback沒有設定，無法處理event: ", t));
                                }),
                                (n.triggerAnimationEvent = function (t) {
                                    (ot("triggerAnimationEvent: ", t), this.m_callback ? this.m_callback(t) : ot("callback沒有設定，無法處理event: ", t));
                                }),
                                (n.SetCallback = function (t) {
                                    this.m_callback = t;
                                }),
                                (n.onDestroy = function () {
                                    this.m_callback = null;
                                }),
                                i
                            );
                        })(H)),
                    ) || ln;
            (T._RF.pop(), T._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", void 0));
            var _n,
                dn,
                fn,
                yn,
                gn,
                Sn,
                bn,
                wn,
                Cn,
                vn,
                En,
                Tn,
                Bn,
                Nn,
                On,
                Ln,
                In,
                An,
                Rn = (function (t) {
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
                            var n = S.GetManagerId(i);
                            (this.ShowWinEffect(t, n),
                                (void 0 !== t.playCoinAtWinEffect && !0 !== t.playCoinAtWinEffect) || this.playCoinEffect(e, n),
                                S.StartLoad(n));
                        }),
                        (n.ShowWinEffect = function (t, e) {
                            var n = this;
                            void 0 === e && (e = -1);
                            var o = t.effectFile,
                                r = t.winValue,
                                s = t.cbFunc,
                                l = t.yPos,
                                u = t.deltaY,
                                p = t.cbFuncBtoM,
                                m = t.cbFuncMtoS,
                                h = t.cbFuncPlaying,
                                _ = t.isLoop || !1,
                                d = t.rollTime;
                            if (null != r) {
                                var f = function () {
                                        (n.m_bgMaskNode && (n.m_bgMaskNode.active = !0),
                                            ot("LoadPrefabManager CB", r),
                                            (l = (null != l && l) || i.DEFAULT_Y),
                                            n.m_effectList[o].setPosition(pt(i.DesignSize.width / 2, l)),
                                            (n.m_effectList[o].active = !0),
                                            n.m_timeLineList[o].play(i.ANI_LABEL.ACT),
                                            (n.m_currentWinEffect = n.m_effectList[o]),
                                            (n.m_currentWinEffectTimeline = n.m_timeLineList[o]),
                                            (n.m_currentWinEffectTimeline.name = o),
                                            (u = o == i.FILE_PATH.JACKPOT ? 180 : null != u ? u : 230),
                                            n.m_awardBoard.setPosition(pt(i.DesignSize.width / 2, l - u)),
                                            (n.m_awardBoard.active = !0),
                                            n.m_awardBoardTimeline.play(i.ANI_LABEL.ACT),
                                            n.SetWinValue(r, d),
                                            null == h || h());
                                    },
                                    y = e;
                                (-1 == e && (y = S.GetManagerId(f)),
                                    (this.m_winEffCbFunc = s),
                                    null == this.m_effectList[o]
                                        ? (S.AddLoad(y),
                                          a.GameBundle.load(o, function (t, e) {
                                              if (t) lt(t.message || t);
                                              else {
                                                  var r = ct(e);
                                                  ((r.active = !1), n.addChild(r), c.SetZIndex(r, i.EFF_ZORDER.WIN_EFFECT));
                                                  var a = r.getComponent(U);
                                                  (hn.Pack(r, function (t) {
                                                      if (t == i.ANI_FRAME_EVENT.ENDING)
                                                          n.m_awardBoard && n.m_awardBoard.active && n.m_awardBoardTimeline.play(i.ANI_LABEL.ENDING);
                                                      else if (t == i.ANI_FRAME_EVENT.LOOP) {
                                                          if (_) (a.play(i.ANI_LABEL.LOOP), (a.getState(i.ANI_LABEL.LOOP).wrapMode = ut.WrapMode.Loop));
                                                      } else
                                                          t == i.ANI_FRAME_EVENT.B_TO_M
                                                              ? (n.m_awardBoard &&
                                                                    n.m_awardBoard.active &&
                                                                    X(n.m_txtWinValue)
                                                                        .by(0.25, { scale: pt(1.5, 1.5, 1.5) })
                                                                        .by(0.1, { scale: pt(0.9, 0.9, 0.9) })
                                                                        .start(),
                                                                p && p())
                                                              : t == i.ANI_FRAME_EVENT.M_TO_S
                                                                ? (n.m_awardBoard &&
                                                                      n.m_awardBoard.active &&
                                                                      X(n.m_txtWinValue)
                                                                          .by(0.25, { scale: pt(1.5, 1.5, 1.5) })
                                                                          .by(0.1, { scale: pt(0.9, 0.9, 0.9) })
                                                                          .start(),
                                                                  null == m || m())
                                                                : t == i.ANI_FRAME_EVENT.END &&
                                                                  (ot("ANI_FRAME_EVENT.END"), n.OnAnimationEnd(), n.m_winEffCbFunc && n.m_winEffCbFunc());
                                                  }),
                                                      (r.active = !1),
                                                      (n.m_effectList[o] = r),
                                                      (n.m_timeLineList[o] = a),
                                                      S.OnLoaded(y));
                                              }
                                          }),
                                          null == this.m_awardBoard &&
                                              (S.AddLoad(y),
                                              a.GameBundle.load(this.m_awardBoardFile, function (t, e) {
                                                  t
                                                      ? lt(t.message || t)
                                                      : ((n.m_awardBoard = ct(e)),
                                                        n.addChild(n.m_awardBoard),
                                                        c.SetZIndex(n.m_awardBoard, i.EFF_ZORDER.AWARD_BOARD),
                                                        (n.m_awardBoard.active = !1),
                                                        (n.m_awardBoardTimeline = n.m_awardBoard.getComponent(U)),
                                                        (n.m_txtWinValue = n.m_awardBoard.getChildByName("win_value_label")),
                                                        S.OnLoaded(y));
                                              })),
                                          -1 == e ? S.StartLoad(y) : S.AddOnLoadedCallback(y, f))
                                        : -1 == e
                                          ? f()
                                          : S.AddOnLoadedCallback(y, f));
                            } else this.m_awardBoard && ((this.m_awardBoard.active = !1), this.m_awardBoardTimeline.stop());
                        }),
                        (n.WinEffect = function () {
                            this.m_currentWinEffectTimeline && this.m_currentWinEffectTimeline.play(i.ANI_LABEL.ENDING, !1);
                        }),
                        (n.SetWinValue = function (t, e, n) {
                            (void 0 === e && (e = null),
                                void 0 === n && (n = 0),
                                (this.m_moneyRealValue = c.strip(t)),
                                (this.m_moneyRollValue = n),
                                (e = (null == e && i.MONEY_ROLL_TIME) || e),
                                (this.m_durRollMoneyTick = c.strip(e)));
                        }),
                        (n.RollWinMoney = function (t) {
                            if (
                                ((this.m_moneyRealValue = c.strip(this.m_moneyRealValue)),
                                (this.m_moneyRollValue = c.strip(this.m_moneyRollValue)),
                                this.m_moneyRollValue < this.m_moneyRealValue)
                            ) {
                                var e = c.divide(this.m_durRollMoneyTick, c.strip(t)),
                                    i = c.divide(c.strip(this.m_moneyRealValue - this.m_moneyRollValue), e),
                                    n = c.FORMAT_NUMBER_TYPE.DEFINE_DOT;
                                (this.m_isAutoCheckFloat &&
                                    (n =
                                        this.m_moneyRealValue.toString().indexOf(".") > -1
                                            ? c.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                            : c.FORMAT_NUMBER_TYPE.NONE_DOT),
                                    (this.m_moneyRollValue = c.strip(this.m_moneyRollValue + i)),
                                    this.m_moneyRollValue > this.m_moneyRealValue && (this.m_moneyRollValue = this.m_moneyRealValue),
                                    this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, n),
                                    (this.m_durRollMoneyTick = c.strip(this.m_durRollMoneyTick - t)));
                            }
                        }),
                        (n.SetLabelString = function (t, e, i) {
                            void 0 === i && (i = null);
                            var n = t.getComponent(M);
                            if (null != n && null != n) {
                                if (null == i || null == i) n.string = e.toString();
                                else {
                                    var o;
                                    if ("number" == typeof e) o = e;
                                    else {
                                        var r = e.replace(/,/g, "");
                                        o = isNaN(Number(r)) ? 0 : Number(r);
                                    }
                                    n.string = c.FormatNumberThousands(o, i);
                                }
                                c.SetFont(n);
                            } else ot("Warning!!!!!!!!!! SetLabelString: ", t);
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
                                    r = t.position,
                                    s = t.time;
                                null == s && (s = 0);
                                var l = t.zOrder;
                                null == l && (l = 0);
                                var u = t.parent;
                                this.stopCoinEffectImmly();
                                var p = i.COIN_EFFECT_LIST[o];
                                if ((p = c.GetFilePath(p))) {
                                    ot("~~~~~~~~~~~~~~~~~~~~~~", t, s, l);
                                    var m = function () {
                                        (n.m_coinEffectNode.setPosition(pt(r.x, r.y)),
                                            null == u || null == u
                                                ? (n.addChild(n.m_coinEffectNode), c.SetZIndex(n.m_coinEffectNode, 0))
                                                : (u.addChild(n.m_coinEffectNode), c.SetZIndex(n.m_coinEffectNode, l)),
                                            0 != s &&
                                                X(n)
                                                    .delay(s)
                                                    .call(function () {
                                                        n.stopCoinEffect();
                                                    })
                                                    .start());
                                    };
                                    (-1 != e && (S.AddOnLoadedCallback(e, m), S.AddLoad(e)),
                                        a.CommonBundle.load(p, function (t, i) {
                                            (ot("LoadRes ", p),
                                                t
                                                    ? lt(t.message || t)
                                                    : ((n.m_coinEffectNode = ct(i)),
                                                      n.m_coinEffectNode
                                                          ? -1 == e
                                                              ? m()
                                                              : S.OnLoaded(e)
                                                          : ot("SlotBottomBarView.playCoinEffect m_coinEffect is null")));
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
                                var t = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(mt),
                                    e = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(mt);
                                (t && t.stopSystem(), e && e.stopSystem());
                            }
                        }),
                        (n.ShowCommonEffect = function (t, e, n, o) {
                            (void 0 === n && (n = null), void 0 === o && (o = null), (n = n || {}), (o = o || {}));
                            var r = new ht(i.DesignSize.width / 2, i.DesignSize.height),
                                a = new ht(i.DesignSize.width / 2 - 10, 145),
                                s = void 0,
                                l = t / e;
                            p && (t = p.GetDisplayValue(t));
                            for (var c = this.m_odds.length - 1; c >= 0; c--)
                                if (l >= this.m_odds[c]) {
                                    ((o.level = this.m_coinEffects[c]),
                                        5 == this.m_coinEffects[c]
                                            ? (o.position = o.position ? o.position : r)
                                            : (o.position = o.smallPosition ? o.smallPosition : o.position ? o.position : a),
                                        (null == o.time || o.time <= 0) && (o.time = this.m_coinTimes[c]),
                                        5 == this.m_coinEffects[c]
                                            ? ((n.effectFile = this.m_winEffectFiles[c]), (n.winValue = t), this.SetWinType(c), this.ShowWinAndCoinEffect(n, o))
                                            : this.playCoinEffect(o),
                                        (s = this.m_soundNameByOdds[c]));
                                    break;
                                }
                            return (null != s && (this.m_nowPlaySoundID = d.Play(s, !1)), null == o.time && (o.time = 0), o.time);
                        }),
                        (n.SkipEffect = function () {
                            if ((this.stopCoinEffect(), _t.instance.ActionManager.removeAllActionsFromTarget(this), this.m_currentWinEffectTimeline)) {
                                var t = this.m_currentWinEffectTimeline.name,
                                    e = c.FORMAT_NUMBER_TYPE.DEFINE_DOT;
                                ((t != i.FILE_PATH.BIG_WIN && t != i.FILE_PATH.MEGA_WIN && t != i.FILE_PATH.SUPER_WIN) ||
                                    ((this.m_moneyRollValue = c.strip(this.m_moneyRollValue)),
                                    (this.m_moneyRealValue = c.strip(this.m_moneyRealValue)),
                                    this.m_moneyRollValue == this.m_moneyRealValue
                                        ? (this.m_awardBoardTimeline.play(i.ANI_LABEL.ENDING), this.m_currentWinEffectTimeline.setCurrentTime(5))
                                        : (this.m_isAutoCheckFloat &&
                                              (e =
                                                  this.m_moneyRealValue.toString().indexOf(".") > -1
                                                      ? c.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                                      : c.FORMAT_NUMBER_TYPE.NONE_DOT),
                                          this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, e),
                                          this.m_currentWinEffectTimeline.setCurrentTime(3.8)),
                                    (this.m_currentWinEffectTimeline = null)),
                                    (this.m_moneyRollValue = this.m_moneyRealValue));
                            }
                        }),
                        (n.SkipEffectSound = function () {
                            this.m_nowPlaySoundID && (d.Stop(this.m_nowPlaySoundID), (this.m_nowPlaySoundID = null));
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
                            this.m_txtWinValue && (this.m_txtWinValue.getComponent(M).fontSize = t);
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
            ((Rn.DesignSize = { width: 1136, height: 640 }),
                (Rn.SOUND_FILE = { COMMON_SUPER_WIN: null, COMMON_MEGA_WIN: null, COMMON_COIN_SMALL: null, COMMON_COIN_MEDIUM: null, COMMON_BIG_WIN: null }),
                (Rn.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/"),
                (Rn.FILE_PATH = {
                    BIG_WIN: "win/big_anim",
                    MEGA_WIN: "win/mega_anim",
                    SUPER_WIN: "win/super_anim",
                    JACKPOT: "win/effect_Jackpot",
                    BIG_TO_MEGA_WIN: "win/bigToMega_anim",
                    BIG_TO_SUPER_WIN: "win/bigToSuper_anim",
                    FIVE_OF_A_KIND: "win/5ofa_anim",
                }),
                (Rn.WIN_EFFECT_SOUND_NAME =
                    (((mn = {})[Rn.FILE_PATH.BIG_WIN] = "Common_big_win"),
                    (mn[Rn.FILE_PATH.MEGA_WIN] = "Common_mega_win"),
                    (mn[Rn.FILE_PATH.SUPER_WIN] = "Common_super_win"),
                    (mn[Rn.FILE_PATH.JACKPOT] = "Common_JP_win"),
                    (mn[Rn.FILE_PATH.BIG_TO_MEGA_WIN] = "Common_big_win"),
                    (mn[Rn.FILE_PATH.BIG_TO_SUPER_WIN] = "Common_big_win"),
                    (mn[Rn.FILE_PATH.FIVE_OF_A_KIND] = "Common_big_win"),
                    mn)),
                (Rn.EffectViewUIName = st({ TXT_WIN_MONEY: "label_final_value", PARTICLE: "Particle_" })),
                (Rn.DEFAULT_Y = 400),
                (Rn.PARTICLE_AMOUNT_MAX = 2),
                (Rn.MONEY_ROLL_TIME = 3),
                (Rn.UPDATE_MONEY_CSB = Rn.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb"),
                (Rn.COMMON_GET_COIN_CSB = Rn.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb"),
                (Rn.GET_COIN_PARTICLE_CSB = Rn.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist"),
                (Rn.ROTATE_COIN_CSB = Rn.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb"),
                (Rn.TRIAL_COIN_CSB = Rn.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb"),
                (Rn.COIN_APPEAR_PARTICLE_CSB = Rn.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist"),
                (Rn.COMMON_COIN_AMOUNT = 8),
                (Rn.ANI_LABEL = { ACT: "main", LOOP: "loop", ENDING: "ending" }),
                (Rn.ANI_FRAME_EVENT = { MID: "AniMid", B_TO_M: "AniBtoM", M_TO_S: "AniMtoS", ENDING: "AniEnding", END: "AniEnd", LOOP: "AniLoop" }),
                (Rn.EFF_ZORDER = { COIN_FALL: 1, WIN_EFFECT: 2, AWARD_BOARD: 3, COMMON_GET_COIN: 4, GET_TRIAL_COIN: 5 }),
                (Rn.COIN_EFFECT_LIST = {
                    1: Rn.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
                    2: Rn.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
                    3: Rn.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
                    4: Rn.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
                    5: Rn.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
                    6: Rn.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
                    7: Rn.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3",
                }),
                (Rn.WIN_TYPE = { BIG: 2, MEGA: 3, SUPER: 4 }),
                T._RF.pop(),
                T._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", void 0));
            var xn,
                Fn,
                Pn,
                kn,
                Mn,
                Dn,
                zn,
                Gn,
                Vn,
                Hn,
                Wn = B.ccclass,
                Un = B.property,
                jn = 5,
                Xn = 0,
                Yn = 1;
            ((_n = Un({ type: I, tooltip: "EX 按鈕最頂層節點(整顆node)" })),
                (dn = Un({ type: Y, tooltip: "EX 按鈕" })),
                (fn = Un({ type: Y, tooltip: "按鈕ON" })),
                (yn = Un({ type: Y, tooltip: "按鈕OFF" })),
                (gn = Un({ type: Y, tooltip: "提示問號按鈕" })),
                (Sn = Un({ type: I, tooltip: "提示文字tip面板" })),
                (bn = Un({ type: M, tooltip: "功能說明文字串Label" })),
                (wn = Un({ type: F, tooltip: "本體ExtraBet文字圖片" })),
                Wn(
                    ((En = t(
                        (vn = (function (t) {
                            function s() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_multiExtraBetNode", En, n(e)),
                                    i(e, "m_multiBtn", Tn, n(e)),
                                    i(e, "m_multiBtn_on", Bn, n(e)),
                                    i(e, "m_multiBtn_off", Nn, n(e)),
                                    i(e, "m_multiBtn_TipQuesMark", On, n(e)),
                                    i(e, "m_multiBtn_Tip", Ln, n(e)),
                                    i(e, "m_multiBtn_Description", In, n(e)),
                                    i(e, "m_Txt_Extra_Bet", An, n(e)),
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
                            e(s, t);
                            var l = s.prototype;
                            return (
                                (l.Init = function (t, e, i, n, o) {
                                    var a = this;
                                    if ((void 0 === n && (n = !1), void 0 === o && (o = !1), c.CheckSwitchOff(u.CloseExtraBet)))
                                        return (
                                            (this.node.active = !1),
                                            void this.node.on(G.ACTIVE_IN_HIERARCHY_CHANGED, function () {
                                                a.node.active = !1;
                                            })
                                        );
                                    ((this.m_triggerCb = t),
                                        (this.m_isTwoStep = n),
                                        this.m_multiBtn_Description &&
                                            this.m_Txt_Extra_Bet &&
                                            (ot(" localeStringManager.CurrLang : " + r.CurrLang),
                                            (this.m_multiBtn_Description.string = r.GetString(e)),
                                            (this.m_Txt_Extra_Bet.spriteFrame = r.GetGameAtlas().getSpriteFrame(i))),
                                        f.Init(o ? null : this.node, this.ForceSetExtraBet.bind(this)));
                                }),
                                (l.onLoad = function () {
                                    var t = this;
                                    if (!c.CheckSwitchOff(u.CloseExtraBet)) {
                                        (ot("ExtraBet onLoad"),
                                            this.m_multiBtn &&
                                                this.m_multiBtn.node.on(I.EventType.TOUCH_END, function () {
                                                    t.m_ExtraBetAniPlaying ||
                                                        (d.Play(a.AudioClips.COMMON_BTN),
                                                        t.CheckCanUseBtn()
                                                            ? t.ExtendShowBar(!t.m_isExtendShowBar)
                                                            : b.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1));
                                                }));
                                        for (var e = 0; e < this.m_multiBtn_on.length; e++)
                                            (this.m_multiBtn_on[e].node.on(I.EventType.TOUCH_END, function () {
                                                t.m_ExtraBetAniPlaying ||
                                                    (t.CheckCanUseBtn() ? t.ChangeBetMode() : b.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1));
                                            }),
                                                this.m_multiBtn_off[e] &&
                                                    this.m_multiBtn_off[e].node.on(I.EventType.TOUCH_END, function () {
                                                        t.m_ExtraBetAniPlaying || (d.Play(a.AudioClips.COMMON_BTN), t.CheckCanUseBtn() && t.ChangeBetMode());
                                                    }));
                                        (this.m_multiBtn_TipQuesMark &&
                                            this.m_multiBtn_TipQuesMark.node.on(
                                                I.EventType.TOUCH_END,
                                                y(
                                                    g().mark(function e() {
                                                        return g().wrap(function (e) {
                                                            for (;;)
                                                                switch ((e.prev = e.next)) {
                                                                    case 0:
                                                                        if (t.m_ExtraBetAniPlaying) {
                                                                            e.next = 13;
                                                                            break;
                                                                        }
                                                                        if ((d.Play(a.AudioClips.COMMON_BTN), h.Current() != _.IDLE || w.IsBuyBonus)) {
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
                                                                        b.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1);
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
                                (l.start = function () {
                                    ot("ExtraBet start");
                                }),
                                (l.CheckCanUseBtn = function () {
                                    return (
                                        a.IsInMG() &&
                                        h.Current() == _.IDLE &&
                                        !a.IsUsingItem &&
                                        !w.IsBuyBonus &&
                                        !m.IsFeaturesDemoMode &&
                                        !c.CheckSwitchOff(u.CloseExtraBet)
                                    );
                                }),
                                (l.OnSpin = function () {
                                    this.ExtendShowBar(!1);
                                }),
                                (l.ShowExtra = function (t) {
                                    this.m_multiExtraBetNode && !c.CheckSwitchOff(u.CloseExtraBet) && (this.m_multiExtraBetNode.active = t);
                                }),
                                (l.GoToFeatures = function () {}),
                                (l.ExtendShowBar = (function () {
                                    var t = y(
                                        g().mark(function t(e) {
                                            var i;
                                            return g().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (this.m_canExtend && !c.CheckSwitchOff(u.CloseExtraBet)) {
                                                                    t.next = 2;
                                                                    break;
                                                                }
                                                                return t.abrupt("return");
                                                            case 2:
                                                                if (!p || this.m_ExtraBetAniPlaying) {
                                                                    t.next = 32;
                                                                    break;
                                                                }
                                                                if (!e) {
                                                                    t.next = 20;
                                                                    break;
                                                                }
                                                                if (p.IsAutoSpin || a.IsUsingItem || w.IsBuyBonus) {
                                                                    t.next = 17;
                                                                    break;
                                                                }
                                                                if (this.m_isExtendShowBar) {
                                                                    t.next = 15;
                                                                    break;
                                                                }
                                                                if (
                                                                    ((this.m_isExtendShowBar = !0),
                                                                    p.SetSpinState(C.CLICK_SPIN),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    !this.m_multiExtraBetNode)
                                                                ) {
                                                                    t.next = 12;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 12),
                                                                    this.PlayAnimation(this.m_multiExtraBetNode.getComponent(U), "ExtraBet_Show")
                                                                );
                                                            case 12:
                                                                ((this.m_ExtraBetAniPlaying = !1),
                                                                    p.SetSpinState(C.IDLE),
                                                                    this.m_isExtra &&
                                                                        this.m_multiExtraBetNode &&
                                                                        this.m_multiExtraBetNode.getComponent(U).play("ExtraBet_Active"));
                                                            case 15:
                                                                t.next = 18;
                                                                break;
                                                            case 17:
                                                                b.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1);
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
                                                                    p.IsAutoSpin || p.SetSpinState(C.CLICK_SPIN),
                                                                    this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = !1),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    !this.m_multiExtraBetNode)
                                                                ) {
                                                                    t.next = 28;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 28),
                                                                    this.PlayAnimation(this.m_multiExtraBetNode.getComponent(U), "ExtraBet_Close")
                                                                );
                                                            case 28:
                                                                ((this.m_ExtraBetAniPlaying = !1),
                                                                    p.IsAutoSpin || p.SetSpinState(C.IDLE),
                                                                    this.m_multiExtraBetNode &&
                                                                        (this.m_isExtra
                                                                            ? this.m_multiExtraBetNode.getComponent(U).play("ExtraBet_Active")
                                                                            : (this.m_multiExtraBetNode.getComponent(U).play("ExtraBet_OFF"),
                                                                              (i = this.m_multiExtraBetNode.getComponent(U).getState("ExtraBet_OFF")).setTime(
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
                                (l.ChangeBetMode = (function () {
                                    var t = y(
                                        g().mark(function t() {
                                            var e;
                                            return g().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (!c.CheckSwitchOff(u.CloseExtraBet)) {
                                                                    t.next = 2;
                                                                    break;
                                                                }
                                                                return t.abrupt("return");
                                                            case 2:
                                                                if (
                                                                    (ot("ChangeBetMode stateManager.Current() : ", h.Current()),
                                                                    !p || w.IsBuyBonus || (h.Current() !== _.IDLE && !this.m_isExtra))
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
                                                                    this.m_isTwoStep ? (this.m_toStepTwo = !0) : p.ChangeMultiBet(Yn),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !0), (this.m_multiBtn_off[0].node.active = !1)),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    null == p || p.SetSpinState(C.CLICK_SPIN),
                                                                    null == m || m.SetBuyBonusState(!1),
                                                                    this.m_multiExtraBetNode &&
                                                                        e.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(U), "ExtraBet_ON")),
                                                                    e.push(this.m_triggerCb(this.m_isExtra, !1)),
                                                                    (t.next = 18),
                                                                    Promise.all(e)
                                                                );
                                                            case 18:
                                                                return (
                                                                    (this.m_ExtraBetAniPlaying = !1),
                                                                    null == p || p.SetSpinState(C.IDLE),
                                                                    this.m_multiExtraBetNode &&
                                                                        this.m_multiExtraBetNode.getComponent(U).play("ExtraBet_Active"),
                                                                    (t.next = 23),
                                                                    a.Wait(this, 0.2)
                                                                );
                                                            case 23:
                                                                (null == m || m.SetBuyBonusState(!0), (t.next = 36));
                                                                break;
                                                            case 26:
                                                                return (
                                                                    p.ChangeMultiBet(Xn),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !1), (this.m_multiBtn_off[0].node.active = !0)),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    null == p || p.SetSpinState(C.CLICK_SPIN),
                                                                    this.m_multiExtraBetNode &&
                                                                        e.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(U), "ExtraBet_OFF")),
                                                                    e.push(this.m_triggerCb(this.m_isExtra, !1)),
                                                                    (t.next = 34),
                                                                    Promise.all(e)
                                                                );
                                                            case 34:
                                                                ((this.m_ExtraBetAniPlaying = !1), null == p || p.SetSpinState(C.IDLE));
                                                            case 36:
                                                                t.next = 39;
                                                                break;
                                                            case 38:
                                                                h.Current() !== _.IDLE &&
                                                                    (ot("TRIAL_REFUSED_REASON 1 "), b.ShowMessageBox(a.StringKey.FREEWINCASH_PLAYING1));
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
                                (l.SetTwoStepMulti = (function () {
                                    var t = y(
                                        g().mark(function t(e, i) {
                                            return g().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (!c.CheckSwitchOff(u.CloseExtraBet)) {
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
                                                                (p.ChangeMultiBet(i), (t.next = 15));
                                                                break;
                                                            case 7:
                                                                if (
                                                                    ((this.m_isExtra = !1),
                                                                    1 == this.m_multiBtn_on.length &&
                                                                        ((this.m_multiBtn_on[0].node.active = !1), (this.m_multiBtn_off[0].node.active = !0)),
                                                                    (this.m_ExtraBetAniPlaying = !0),
                                                                    p && p.SetSpinState(C.CLICK_SPIN),
                                                                    !this.m_multiExtraBetNode)
                                                                ) {
                                                                    t.next = 14;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 14),
                                                                    this.PlayAnimation(this.m_multiExtraBetNode.getComponent(U), "ExtraBet_OFF")
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
                                (l.ForceSetExtraBet = (function () {
                                    var t = y(
                                        g().mark(function t(e, i) {
                                            var n;
                                            return g().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if ((void 0 === i && (i = Yn), !c.CheckSwitchOff(u.CloseExtraBet))) {
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
                                                                        this.m_multiExtraBetNode.getComponent(U).play("ExtraBet_Active"),
                                                                    this.m_isTwoStep
                                                                        ? ((this.m_toStepTwo = !0), this.SetTwoStepMulti(e, i))
                                                                        : p.ChangeMultiBet(i),
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
                                                                    p.ChangeMultiBet(Xn),
                                                                    this.m_multiExtraBetNode &&
                                                                        (this.m_isExtendShowBar
                                                                            ? n.push(this.ExtendShowBar(!1))
                                                                            : n.push(
                                                                                  this.PlayAnimation(this.m_multiExtraBetNode.getComponent(U), "ExtraBet_OFF"),
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
                                (l.OnRotation = function () {
                                    c.CheckSwitchOff(u.CloseExtraBet) ||
                                        (this.m_multiExtraBetNode &&
                                            (this.m_isExtra
                                                ? this.m_multiExtraBetNode.getComponent(U).play("ExtraBet_Active")
                                                : this.m_multiExtraBetNode.getComponent(U).play("ExtraBet_Stop")),
                                        this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = !1));
                                }),
                                (l.IsExAnimationTouchable = function () {
                                    return !this.m_ExtraBetAniPlaying;
                                }),
                                (l.FirstShowBar = (function () {
                                    var t = y(
                                        g().mark(function t() {
                                            var e = this;
                                            return g().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (this.m_isFirstShowed || this.m_usedForce || c.CheckSwitchOff(u.CloseExtraBet)) {
                                                                    t.next = 6;
                                                                    break;
                                                                }
                                                                return ((this.m_isFirstShowed = !0), (t.next = 4), this.ExtendShowBar(!0));
                                                            case 4:
                                                                ((this.m_multiBtn_Tip.active = !0),
                                                                    (this.m_firstShowBarTween = X(this.node)
                                                                        .delay(jn)
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
                                (l.PlayAnimation = function (t, e, i) {
                                    return (
                                        void 0 === i && (i = !1),
                                        new Promise(function (n) {
                                            if ((t.play(e), i)) {
                                                var o = t.getState(e);
                                                o && (o.wrapMode = ut.WrapMode.Loop);
                                            }
                                            t.once(U.EventType.FINISHED, function () {
                                                n(!0);
                                            });
                                        })
                                    );
                                }),
                                o(s, [
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
                                s
                            );
                        })(H)).prototype,
                        "m_multiExtraBetNode",
                        [_n],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (Tn = t(vn.prototype, "m_multiBtn", [dn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Bn = t(vn.prototype, "m_multiBtn_on", [fn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Nn = t(vn.prototype, "m_multiBtn_off", [yn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (On = t(vn.prototype, "m_multiBtn_TipQuesMark", [gn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Ln = t(vn.prototype, "m_multiBtn_Tip", [Sn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (In = t(vn.prototype, "m_multiBtn_Description", [bn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (An = t(vn.prototype, "m_Txt_Extra_Bet", [wn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Cn = vn)),
                ));
            (T._RF.pop(), T._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", void 0));
            var Kn,
                Zn,
                qn,
                Jn = B.ccclass,
                Qn = B.property;
            ((xn = Qn({ type: F, tooltip: "說明文字" })),
                (Fn = Qn({ type: W, tooltip: "圖片名稱" })),
                (Pn = Qn({ type: Boolean, tooltip: "圖片名稱" })),
                (kn = Qn({ type: F, tooltip: "圖片名稱" })),
                Jn(
                    ((zn = t(
                        (Dn = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_hintSprite", zn, n(e)),
                                    i(e, "m_imgName", Gn, n(e)),
                                    i(e, "m_isAD", Vn, n(e)),
                                    i(e, "m_ADsprite", Hn, n(e)),
                                    e
                                );
                            }
                            e(o, t);
                            var a = o.prototype;
                            return (
                                (a.start = function () {
                                    var t = this;
                                    if (!this.m_isAD) {
                                        var e = r.GetGameAtlas();
                                        e
                                            ? (this.m_hintSprite.spriteFrame = e.getSpriteFrame(this.m_imgName))
                                            : r.RegisterOnGameAltasLoadedCb(function () {
                                                  t.m_hintSprite.spriteFrame = r.GetGameAtlas().getSpriteFrame(t.m_imgName);
                                              });
                                    }
                                }),
                                (a.SetADSprites = function (t) {
                                    this.m_ADsprite && (this.m_ADsprite.spriteFrame = t);
                                }),
                                o
                            );
                        })(H)).prototype,
                        "m_hintSprite",
                        [xn],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (Gn = t(Dn.prototype, "m_imgName", [Fn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (Vn = t(Dn.prototype, "m_isAD", [Pn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Hn = t(Dn.prototype, "m_ADsprite", [kn], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (Mn = Dn)),
                ));
            (T._RF.pop(), T._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", void 0));
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
                po,
                mo = B.ccclass,
                ho = B.property,
                _o = B.executeInEditMode,
                fo = B.requireComponent;
            mo("LabelSpacingX")(
                (Kn =
                    fo(M)(
                        (Kn =
                            _o(
                                ((qn = t(
                                    (Zn = (function (t) {
                                        function r() {
                                            for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                            return ((e = t.call.apply(t, [this].concat(r)) || this), i(e, "_spacingX", qn, n(e)), e);
                                        }
                                        e(r, t);
                                        var a = r.prototype;
                                        return (
                                            (a.onEnable = function () {
                                                this.resetSpacingX();
                                            }),
                                            (a.resetSpacingX = function () {
                                                var t = this.node.getComponent(M);
                                                t && t.cacheMode === M.CacheMode.CHAR && (t.spacingX = this._spacingX);
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
                                    })(H)).prototype,
                                    "_spacingX",
                                    [ho],
                                    {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                        initializer: function () {
                                            return 0;
                                        },
                                    },
                                )),
                                t(Zn.prototype, "spacingX", [ho], Object.getOwnPropertyDescriptor(Zn.prototype, "spacingX"), Zn.prototype),
                                (Kn = Zn)),
                            ) || Kn),
                    ) || Kn),
            );
            (T._RF.pop(), T._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", void 0));
            var yo,
                go = B.ccclass,
                So = B.executeInEditMode,
                bo = B.property,
                wo = "db://assets/game/Text/en/",
                Co = "db://assets/otherAsttText/AsttText/en/";
            !(function (t) {
                ((t[(t.PNG = 0)] = "PNG"), (t[(t.JPG = 1)] = "JPG"));
            })(yo || (yo = {}));
            var vo,
                Eo,
                To,
                Bo,
                No,
                Oo = { PNG: ".png", JPG: ".jpg" };
            (($n = go("LangImg")),
                (to = bo({ type: W, tooltip: "圖片路徑" })),
                (eo = bo({ type: W, tooltip: "額外路徑，如果不是在game/Text/en/或otherAsttText/AsttText/en/下，請填入後續路徑" })),
                (io = bo({ type: st(yo), tooltip: "圖片類型" })),
                (no = bo({ type: it, tooltip: "是否為通用圖片" })),
                (oo = bo({ type: it, tooltip: "是否由這個組件來設定多語系圖片" })),
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
                                            i(e, "m_isUsingSetImage", po, n(e)),
                                            e
                                        );
                                    }
                                    e(o, t);
                                    var a = o.prototype;
                                    return (
                                        (a.start = function () {
                                            this.SetImg();
                                        }),
                                        (a.SetImg = function () {
                                            var t = this;
                                            if (this.m_isUsingSetImage) {
                                                var e = null;
                                                if (this.m_isCommon) {
                                                    if (!(e = r.GetCommonAtlas()))
                                                        return void r.RegisterOnCommonAltasLoadedCb(function () {
                                                            t.SetImg();
                                                        });
                                                } else if (!(e = r.GetGameAtlas()))
                                                    return void r.RegisterOnGameAltasLoadedCb(function () {
                                                        t.SetImg();
                                                    });
                                                var i = this.node.getComponent(F);
                                                (i || (i = this.node.addComponent(F)), (i.spriteFrame = e.getSpriteFrame(this.m_path)));
                                            }
                                        }),
                                        (a.SetPreviewImg = function () {
                                            (this.AdjustComponentOrdering(),
                                                this.ReadSpriteFrame(),
                                                (o.prototype._onBeforeSerialize = function () {
                                                    return (this.OnBeforeSerialize(), !1);
                                                }));
                                        }),
                                        (a.AdjustComponentOrdering = function () {}),
                                        (a.ReadSpriteFrame = (function () {
                                            var t = y(
                                                g().mark(function t() {
                                                    var e,
                                                        i,
                                                        n,
                                                        o,
                                                        r,
                                                        a,
                                                        s = this;
                                                    return g().wrap(
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
                                                                            (e = (this.m_isCommon ? Co : wo) + this.m_extraPath + this.m_path),
                                                                            (i = Oo.PNG),
                                                                            (n = yo[this.m_imgTypeNo]),
                                                                            Object.prototype.hasOwnProperty.call(yo, n) &&
                                                                                ((o = yo[n]), Number(o) === this.m_imgTypeNo && (i = Oo[n])),
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
                                                                                if (t) lt("Failed to load cc.SpriteFrame resources:", t);
                                                                                else {
                                                                                    var i = s.node.getComponent(F);
                                                                                    (i || (i = s.node.addComponent(F)), (i.spriteFrame = e));
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
                                        (a.OnBeforeSerialize = function () {}),
                                        o
                                    );
                                })(H)).prototype,
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
                            (po = t(ao.prototype, "m_isUsingSetImage", [oo], {
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
            (T._RF.pop(), T._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", void 0));
            var Lo,
                Io,
                Ao,
                Ro,
                xo,
                Fo = 0,
                Po = 1,
                ko = 2,
                Mo = B.ccclass,
                Do = B.property;
            ((vo = Mo("RenderDataBump")),
                (Eo = Do({ tooltip: "是否一同影響子節點" })),
                vo(
                    ((No = t(
                        (Bo = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return ((e = t.call.apply(t, [this].concat(r)) || this), i(e, "affectsChildren", No, n(e)), (e.states = Fo), e);
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
                                        ? this.states === Po && this.requestRenderData()
                                        : (this.states !== ko && this.states !== Fo) || this.destroyRenderData();
                                }),
                                (r.destroyRenderData = function () {
                                    var t = this.node.getComponent(z);
                                    if ((null == t || t.destroyRenderData(), this.affectsChildren))
                                        for (var e, i = this.node.getComponentsInChildren(z), n = v(i); !(e = n()).done; ) {
                                            var o = e.value;
                                            null == o || o.destroyRenderData();
                                        }
                                    this.states = Po;
                                }),
                                (r.requestRenderData = function () {
                                    var t = this.node.getComponent(z);
                                    if ((null == t || t._flushAssembler(), this.affectsChildren))
                                        for (var e, i = this.node.getComponentsInChildren(z), n = v(i); !(e = n()).done; ) {
                                            var o = e.value;
                                            null == o || o._flushAssembler();
                                        }
                                    this.states = ko;
                                }),
                                o
                            );
                        })(H)).prototype,
                        "affectsChildren",
                        [Eo],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        },
                    )),
                    (To = Bo)),
                ));
            (T._RF.pop(), T._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", void 0));
            var zo,
                Go,
                Vo,
                Ho,
                Wo = B.ccclass,
                Uo = B.property;
            ((Lo = Wo("ScrollEventHandler")),
                (Io = Uo({ type: I, tooltip: "真實放置內容的節點，有自行分層請把每一層的根節點放進去" })),
                Lo(
                    ((xo = t(
                        (Ro = (function (t) {
                            function r() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_contents", xo, n(e)),
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
                                    ((this.m_scrollView = this.node.getComponent(dt)),
                                        this.m_scrollView
                                            ? this.m_scrollView.node.on(dt.EventType.SCROLLING, function () {
                                                  t.CheckCellVisible();
                                              })
                                            : lt("ScrollView is null"),
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
                                                    a = r.getComponent(ft);
                                                a || (a = r.addComponent(ft));
                                                var s = this.GetTopLeftWorld(r),
                                                    l = this.GetBottomRightWorld(r);
                                                this.IsInside(s, i, n) || this.IsInside(l, i, n) ? (a.opacity = 255) : (a.opacity = 0);
                                            }
                                }),
                                (a.GetTopLeftWorld = function (t) {
                                    var e = t.getPosition(),
                                        i = t.getComponent(L).contentSize,
                                        n = t.getComponent(L).anchorPoint,
                                        o = new x(e.x - i.width * n.x, e.y - i.height * n.y, e.z);
                                    return t.parent.getComponent(L).convertToWorldSpaceAR(o);
                                }),
                                (a.GetBottomRightWorld = function (t) {
                                    var e = t.getPosition(),
                                        i = t.getComponent(L).contentSize,
                                        n = t.getComponent(L).anchorPoint,
                                        o = new x(e.x + i.width * (1 - n.x), e.y + i.height * (1 - n.y), e.z);
                                    return t.parent.getComponent(L).convertToWorldSpaceAR(o);
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
                        })(H)).prototype,
                        "m_contents",
                        [Io],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return [];
                            },
                        },
                    )),
                    (Ao = Ro)),
                ));
            (T._RF.pop(), T._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", void 0));
            var jo,
                Xo,
                Yo,
                Ko,
                Zo,
                qo,
                Jo,
                Qo,
                $o,
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
                mr,
                hr,
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
                Br = "GameIntro_L",
                Nr = "GameIntro_S",
                Or = "FG_Declare_Start_L",
                Lr = "FG_Declare_Start_S",
                Ir = "FG_Compliment_Start_L",
                Ar = "FG_Compliment_Start_S",
                Rr = B.ccclass;
            ((zo = (0, B.property)({ type: at.Skeleton, tooltip: "spine" })),
                Rr(
                    ((Ho = t(
                        (Vo = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return ((e = t.call.apply(t, [this].concat(r)) || this), i(e, "m_spine", Ho, n(e)), e);
                            }
                            e(o, t);
                            var r = o.prototype;
                            return (
                                (r.ShowGameIntro = (function () {
                                    var t = y(
                                        g().mark(function t(e, i) {
                                            var n, o;
                                            return g().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = e ? Br : Nr),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.paused = !1),
                                                                    (o = function (t) {
                                                                        "AnimationEvent" === t && (null == i || i());
                                                                    }),
                                                                    (t.next = 6),
                                                                    E.PlayAnimation(this.m_spine, n, !1, 0, o)
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
                                    var t = y(
                                        g().mark(function t(e, i) {
                                            var n, o;
                                            return g().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = e ? Or : Lr),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.paused = !1),
                                                                    (o = function (t) {
                                                                        "AnimationEvent" === t && (null == i || i());
                                                                    }),
                                                                    (t.next = 6),
                                                                    E.PlayAnimation(this.m_spine, n, !1, 0, o)
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
                                    var t = y(
                                        g().mark(function t(e, i) {
                                            var n, o;
                                            return g().wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = e ? Ir : Ar),
                                                                    (this.node.active = !0),
                                                                    (this.m_spine.paused = !1),
                                                                    (o = function (t) {
                                                                        "AnimationEvent" === t && (null == i || i());
                                                                    }),
                                                                    (t.next = 6),
                                                                    E.PlayAnimation(this.m_spine, n, !1, 0, o)
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
                                        E.PlayAnimation(this.m_spine, t ? Br : Nr),
                                        (this.m_spine.paused = !0));
                                }),
                                (r.Rotation = function (t) {
                                    if (this.node.active) {
                                        var e = t ? Br : Nr;
                                        ((this.m_spine.paused = !1),
                                            this.m_spine.clearTracks(),
                                            this.m_spine.setToSetupPose(),
                                            E.PlayAnimation(this.m_spine, e),
                                            (this.m_spine.paused = !0));
                                    }
                                }),
                                o
                            );
                        })(H)).prototype,
                        "m_spine",
                        [zo],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return null;
                            },
                        },
                    )),
                    (Go = Vo)),
                ));
            (T._RF.pop(), T._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", void 0));
            var xr = B.ccclass,
                Fr = B.property,
                Pr = B.menu,
                kr = { None: 0 },
                Mr = st(kr),
                Dr = 3.1415927,
                zr = Dr / 180;
            function Gr(t, e, i, n, o) {
                var r,
                    a = ((r = o), Math.sin(r * zr)),
                    s = (function (t) {
                        return Math.cos(t * zr);
                    })(o);
                return 57.29577866666166 * Math.atan2(s * i + a * n, s * t + a * e);
            }
            var Vr,
                Hr,
                Wr,
                Ur,
                jr,
                Xr,
                Yr,
                Kr,
                Zr,
                qr,
                Jr,
                Qr,
                $r,
                ta,
                ea,
                ia,
                na,
                oa,
                ra,
                aa,
                sa,
                la,
                ca,
                ua,
                pa,
                ma,
                ha,
                _a,
                da,
                fa,
                ya,
                ga,
                Sa,
                ba,
                wa,
                Ca,
                va,
                Ea,
                Ta,
                Ba;
            ((jo = xr("BoneFollow")),
                (Xo = Pr("Chiron/Spine/BoneFollow")),
                (Yo = Fr({ type: at.Skeleton, tooltip: "目標 Spine 骨架" })),
                (Ko = Fr({ tooltip: "目標同步骨骼名稱" })),
                (Zo = Fr({
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (qo = Fr({ tooltip: "是否同步位置" })),
                (Jo = Fr({ tooltip: "是否同步旋轉" })),
                (Qo = Fr({ tooltip: "是否將目標旋轉角度轉換成區域旋轉角度" })),
                ($o = Fr({ tooltip: "是否同步縮放" })),
                (tr = Fr({ tooltip: "是否將目標縮放量轉換成區域縮放量" })),
                (er = Fr({ visible: !1 })),
                (ir = Fr({ type: Mr, visible: !0, displayName: "Bone" })),
                (nr = Fr({ visible: !0, displayName: "Preview" })),
                (or = Fr({
                    displayName: "Cache Ancestors",
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (rr = Fr({
                    displayName: "Scale Factor",
                    tooltip: "額外本體大小縮放",
                    visible: function () {
                        return this.m_isFollowScale;
                    },
                })),
                (ar = Fr({
                    type: ht,
                    displayName: "Position Offset",
                    tooltip: "額外本體位置偏移",
                    visible: function () {
                        return this.m_isFollowPosition;
                    },
                })),
                (sr = Fr({
                    displayName: "Rotation Factor",
                    tooltip: "額外本體旋轉",
                    visible: function () {
                        return this.m_isFollowRotation;
                    },
                })),
                jo(
                    (lr =
                        Xo(
                            (((Tr = (function (t) {
                                function o() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        ((e = t.call.apply(t, [this].concat(r)) || this).editor = void 0),
                                        i(e, "m_spineSkeleton", ur, n(e)),
                                        i(e, "m_boneName", pr, n(e)),
                                        i(e, "m_isCacheData", mr, n(e)),
                                        i(e, "m_isFollowPosition", hr, n(e)),
                                        i(e, "m_isFollowRotation", _r, n(e)),
                                        i(e, "m_isRotationLocalization", dr, n(e)),
                                        i(e, "m_isFollowScale", fr, n(e)),
                                        i(e, "m_isScaleLocalization", yr, n(e)),
                                        i(e, "__boneIndex", gr, n(e)),
                                        i(e, "_boneIndex", Sr, n(e)),
                                        i(e, "m_preview", br, n(e)),
                                        i(e, "m_cacheAncestors", wr, n(e)),
                                        i(e, "m_scaleFactor", Cr, n(e)),
                                        i(e, "m_positionOffset", vr, n(e)),
                                        i(e, "m_rotationFactor", Er, n(e)),
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
                                                        m = t.arotation;
                                                    this.node.angle = e + (yt(p) ? Gr(p.a, p.b, p.c, p.d, m) : t.arotation) + this.m_rotationFactor;
                                                }
                                                if (
                                                    (this.m_isFollowScale &&
                                                        this.node.setScale(
                                                            i * t.getWorldScaleX() * this.m_scaleFactor.x,
                                                            n * t.getWorldScaleY() * this.m_scaleFactor.y,
                                                        ),
                                                    this.m_isFollowPosition)
                                                ) {
                                                    var h = this.m_spineSkeleton.node.getComponent(L).convertToWorldSpaceAR(pt(t.worldX, t.worldY, 0)),
                                                        _ = this.node.parent.getComponent(L).convertToNodeSpaceAR(h);
                                                    this.node.setPosition(pt(_.x + this.m_positionOffset.x, _.y + this.m_positionOffset.y));
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
                                        var t = ct(kr);
                                        return (this.m_spineSkeleton, t);
                                    }),
                                    (r._updateBoneEnum = function () {}),
                                    o
                                );
                            })(H)).BoneFollow = "BoneFollow"),
                            (ur = t((cr = Tr).prototype, "m_spineSkeleton", [Yo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            (pr = t(cr.prototype, "m_boneName", [Ko], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            (mr = t(cr.prototype, "m_isCacheData", [Zo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (hr = t(cr.prototype, "m_isFollowPosition", [qo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (_r = t(cr.prototype, "m_isFollowRotation", [Jo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (dr = t(cr.prototype, "m_isRotationLocalization", [Qo], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (fr = t(cr.prototype, "m_isFollowScale", [$o], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (yr = t(cr.prototype, "m_isScaleLocalization", [tr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (gr = t(cr.prototype, "__boneIndex", [er], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            (Sr = t(cr.prototype, "_boneIndex", [ir], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return Mr.None;
                                },
                            })),
                            (br = t(cr.prototype, "m_preview", [nr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (wr = t(cr.prototype, "m_cacheAncestors", [or], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (Cr = t(cr.prototype, "m_scaleFactor", [rr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return gt(1, 1);
                                },
                            })),
                            (vr = t(cr.prototype, "m_positionOffset", [ar], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return gt(0, 0);
                                },
                            })),
                            (Er = t(cr.prototype, "m_rotationFactor", [sr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            (lr = cr)),
                        ) || lr),
                ));
            (T._RF.pop(), T._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", void 0));
            var Na,
                Oa = B.ccclass,
                La = B.property,
                Ia = B.executeInEditMode;
            !(function (t) {
                t[(t.default = 1)] = "default";
            })(Na || (Na = {}));
            var Aa = st({}),
                Ra = 3.1415927,
                xa = Ra / 180;
            function Fa(t, e, i, n, o) {
                var r,
                    a = ((r = o), Math.sin(r * xa)),
                    s = (function (t) {
                        return Math.cos(t * xa);
                    })(o);
                return 57.29577866666166 * Math.atan2(s * i + a * n, s * t + a * e);
            }
            var Pa, ka, Ma, Da, za, Ga, Va, Ha, Wa, Ua, ja, Xa, Ya, Ka, Za, qa, Ja, Qa;
            ((Vr = Oa("NewBoneFollow")),
                (Hr = La({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (Wr = La({
                    visible: !1,
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (Ur = La({ visible: !1, tooltip: "是否同步位置" })),
                (jr = La({ visible: !1, tooltip: "是否同步旋轉" })),
                (Xr = La({ visible: !1, tooltip: "是否將目標旋轉角度轉換成區域旋轉角度" })),
                (Yr = La({ visible: !1, tooltip: "是否同步縮放" })),
                (Kr = La({ visible: !1, tooltip: "是否將目標縮放量轉換成區域縮放量" })),
                (Zr = La({ visible: !0, displayName: "Preview" })),
                (qr = La({ type: at.Skeleton, visible: !1 })),
                (Jr = La({ visible: !0, type: at.Skeleton, displayName: "Skeleton", tooltip: "目標 Spine 骨架" })),
                (Qr = La({ visible: !1 })),
                ($r = La({ visible: !0, displayName: "BoneName", tooltip: "請輸入要跟隨的 Spine 骨頭名稱或從下拉選單選擇" })),
                (ta = La({ type: Aa, visible: !1 })),
                (ea = La({ type: Aa, visible: !0, displayName: "SelectFromList", tooltip: "可從此下拉選單選擇骨頭" })),
                (ia = La({
                    displayName: "Cache Ancestors",
                    tooltip:
                        "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
                })),
                (na = La({ displayName: "Position", tooltip: "是否同步位置" })),
                (oa = La({
                    displayName: "Position Offset",
                    tooltip: "額外本體位置偏移",
                    visible: function () {
                        return this.m_followPosition;
                    },
                })),
                (ra = La({ displayName: "Rotation", tooltip: "是否同步旋轉" })),
                (aa = La({
                    displayName: "Rotation Localization",
                    tooltip: "是否將目標旋轉角度轉換成區域旋轉角度",
                    visible: function () {
                        return this.m_followRotation;
                    },
                })),
                (sa = La({
                    displayName: "Rotation Factor",
                    tooltip: "額外本體旋轉",
                    visible: function () {
                        return this.m_followRotation;
                    },
                })),
                (la = La({ displayName: "Scale", tooltip: "是否同步縮放" })),
                (ca = La({
                    displayName: "Scale Localization",
                    tooltip: "是否將目標縮放量轉換成區域縮放量",
                    visible: function () {
                        return this.m_followScale;
                    },
                })),
                (ua = La({
                    displayName: "Scale Factor",
                    tooltip: "額外本體大小縮放",
                    visible: function () {
                        return this.m_followScale;
                    },
                })),
                Vr(
                    (pa =
                        Ia(
                            (((Ba = (function (t) {
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
                                        i(e, "m_preview", ha, n(e)),
                                        i(e, "m_spineSkeleton", _a, n(e)),
                                        i(e, "m_boneName", da, n(e)),
                                        i(e, "__boneIndex", fa, n(e)),
                                        i(e, "m_cacheAncestors", ya, n(e)),
                                        i(e, "m_followPosition", ga, n(e)),
                                        i(e, "m_positionOffset", Sa, n(e)),
                                        i(e, "m_followRotation", ba, n(e)),
                                        i(e, "m_rotationLocalization", wa, n(e)),
                                        i(e, "m_rotationFactor", Ca, n(e)),
                                        i(e, "m_followScale", va, n(e)),
                                        i(e, "m_scaleLocalization", Ea, n(e)),
                                        i(e, "m_scaleFactor", Ta, n(e)),
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
                                        St.on(bt.EVENT_BEFORE_DRAW, this.BoneSync, this);
                                    }),
                                    (a.onDisable = function () {
                                        St.off(bt.EVENT_BEFORE_DRAW, this.BoneSync, this);
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
                                                        m = t.arotation,
                                                        h = e + (yt(p) ? Fa(p.a, p.b, p.c, p.d, m) : t.arotation) + this.m_rotationFactor;
                                                    this.node.setRotationFromEuler(pt(0, 0, h));
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
                                                            .getComponent(L)
                                                            .convertToWorldSpaceAR(
                                                                pt(t.worldX + this.m_positionOffset.x, t.worldY + this.m_positionOffset.y, 0),
                                                            ),
                                                        d = this.node.parent.getComponent(L).convertToNodeSpaceAR(_);
                                                    this.node.setPosition(pt(d.x, d.y));
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
                            })(H)).NewBoneFollow = "NewBoneFollow"),
                            t((ma = Ba).prototype, "Skeleton", [Hr], Object.getOwnPropertyDescriptor(ma.prototype, "Skeleton"), ma.prototype),
                            t(ma.prototype, "CacheData", [Wr], Object.getOwnPropertyDescriptor(ma.prototype, "CacheData"), ma.prototype),
                            t(ma.prototype, "FollowPosition", [Ur], Object.getOwnPropertyDescriptor(ma.prototype, "FollowPosition"), ma.prototype),
                            t(ma.prototype, "FollowRotation", [jr], Object.getOwnPropertyDescriptor(ma.prototype, "FollowRotation"), ma.prototype),
                            t(ma.prototype, "RotationLocalization", [Xr], Object.getOwnPropertyDescriptor(ma.prototype, "RotationLocalization"), ma.prototype),
                            t(ma.prototype, "FollowScale", [Yr], Object.getOwnPropertyDescriptor(ma.prototype, "FollowScale"), ma.prototype),
                            t(ma.prototype, "ScaleLocalization", [Kr], Object.getOwnPropertyDescriptor(ma.prototype, "ScaleLocalization"), ma.prototype),
                            (ha = t(ma.prototype, "m_preview", [Zr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (_a = t(ma.prototype, "m_spineSkeleton", [qr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            t(ma.prototype, "_spineSkeleton", [Jr], Object.getOwnPropertyDescriptor(ma.prototype, "_spineSkeleton"), ma.prototype),
                            (da = t(ma.prototype, "m_boneName", [Qr], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            t(ma.prototype, "BoneName", [$r], Object.getOwnPropertyDescriptor(ma.prototype, "BoneName"), ma.prototype),
                            (fa = t(ma.prototype, "__boneIndex", [ta], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return Na.default;
                                },
                            })),
                            t(ma.prototype, "_boneIndex", [ea], Object.getOwnPropertyDescriptor(ma.prototype, "_boneIndex"), ma.prototype),
                            (ya = t(ma.prototype, "m_cacheAncestors", [ia], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (ga = t(ma.prototype, "m_followPosition", [na], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Sa = t(ma.prototype, "m_positionOffset", [oa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return gt(0, 0);
                                },
                            })),
                            (ba = t(ma.prototype, "m_followRotation", [ra], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (wa = t(ma.prototype, "m_rotationLocalization", [aa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (Ca = t(ma.prototype, "m_rotationFactor", [sa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            (va = t(ma.prototype, "m_followScale", [la], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            })),
                            (Ea = t(ma.prototype, "m_scaleLocalization", [ca], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (Ta = t(ma.prototype, "m_scaleFactor", [ua], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return gt(1, 1);
                                },
                            })),
                            (pa = ma)),
                        ) || pa),
                ));
            (T._RF.pop(), T._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", void 0));
            var $a,
                ts = B.ccclass,
                es = B.property,
                is = B.executeInEditMode;
            !(function (t) {
                t[(t.default = 1)] = "default";
            })($a || ($a = {}));
            var ns,
                os,
                rs,
                as,
                ss,
                ls,
                cs = st({});
            ((Pa = ts("NewSlotColorFollow")),
                (ka = es({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (Ma = es({ visible: !0, displayName: "Preview" })),
                (Da = es({ visible: !1 })),
                (za = es({ type: at.Skeleton, visible: !1 })),
                (Ga = es({ visible: !0, type: at.Skeleton, displayName: "Skeleton", tooltip: "目標 Spine 骨架" })),
                (Va = es({ visible: !1 })),
                (Ha = es({ visible: !0, displayName: "SlotName", tooltip: "請輸入要跟隨的 Spine 插槽名稱或從下拉選單選擇" })),
                (Wa = es({ type: cs, visible: !1 })),
                (Ua = es({ visible: !0, displayName: "SelectFromList", type: cs, tooltip: "可從此下拉選單選擇插槽" })),
                Pa(
                    (ja =
                        is(
                            (((Qa = (function (t) {
                                function r() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        (e = t.call.apply(t, [this].concat(r)) || this),
                                        i(e, "m_preview", Ya, n(e)),
                                        i(e, "_colorCache", Ka, n(e)),
                                        i(e, "m_spineSkeleton", Za, n(e)),
                                        i(e, "m_slotName", qa, n(e)),
                                        i(e, "__slotIndex", Ja, n(e)),
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
                                        (this.ColorSync(), St.on(bt.EVENT_BEFORE_DRAW, this.ColorSync, this));
                                    }),
                                    (a.onDisable = function () {
                                        St.off(bt.EVENT_BEFORE_DRAW, this.ColorSync, this);
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
                                                ((this._colorCache = this._colorCache || new P.Color(P.Color.WHITE)),
                                                this.node.getComponent(F)
                                                    ? ((this.node.getComponent(F).color = $(e, i, n, o)), this._colorCache.set(this.node.getComponent(F).color))
                                                    : this.node.getComponent(M) &&
                                                      ((this.node.getComponent(M).color = $(e, i, n, o)),
                                                      this._colorCache.set(this.node.getComponent(M).color)),
                                                this.node.getComponent(ft) && (this.node.getComponent(ft).opacity = o),
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
                            })(H)).NewSlotColorFollow = "NewSlotColorFollow"),
                            t((Xa = Qa).prototype, "Skeleton", [ka], Object.getOwnPropertyDescriptor(Xa.prototype, "Skeleton"), Xa.prototype),
                            (Ya = t(Xa.prototype, "m_preview", [Ma], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (Ka = t(Xa.prototype, "_colorCache", [Da], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return new P.Color(P.Color.WHITE);
                                },
                            })),
                            (Za = t(Xa.prototype, "m_spineSkeleton", [za], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            t(Xa.prototype, "_spineSkeleton", [Ga], Object.getOwnPropertyDescriptor(Xa.prototype, "_spineSkeleton"), Xa.prototype),
                            (qa = t(Xa.prototype, "m_slotName", [Va], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            t(Xa.prototype, "SlotName", [Ha], Object.getOwnPropertyDescriptor(Xa.prototype, "SlotName"), Xa.prototype),
                            (Ja = t(Xa.prototype, "__slotIndex", [Wa], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return $a.default;
                                },
                            })),
                            t(Xa.prototype, "_slotIndex", [Ua], Object.getOwnPropertyDescriptor(Xa.prototype, "_slotIndex"), Xa.prototype),
                            (ja = Xa)),
                        ) || ja),
                ));
            (T._RF.pop(), T._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", void 0));
            var us,
                ps,
                ms = B.ccclass,
                hs = B.property,
                _s = B.menu;
            ((ns = ms("SkeletonSync")),
                (os = _s("Chiron/Spine/SkeletonSync")),
                (rs = hs({ displayName: "Overlap", tooltip: "是否交疊並同步座標、旋轉及縮放" })),
                ns(
                    (as =
                        os(
                            ((ls = t(
                                (ss = (function (t) {
                                    function r() {
                                        for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                        return (((e = t.call.apply(t, [this].concat(r)) || this).m_skeleton = null), i(e, "m_overlap", ls, n(e)), e);
                                    }
                                    e(r, t);
                                    var a = r.prototype;
                                    return (
                                        (a.__preload = function () {
                                            this.m_skeleton = this.getComponent(at.Skeleton);
                                        }),
                                        (a.Sync = function (t) {
                                            if (t && this.m_overlap) {
                                                for (var e = 0, i = 1, n = 1, o = t; o; ) ((i *= o.scale.x), (n *= o.scale.y), (e += o.angle), (o = o.parent));
                                                ((this.node.angle = e), (this.node.scale = pt(i, n, 0)));
                                                var r = t.parent.getComponent(L).convertToWorldSpaceAR(t.position),
                                                    a = this.node.parent.getComponent(L).convertToNodeSpaceAR(r);
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
                                })(H)).prototype,
                                "m_overlap",
                                [rs],
                                {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                    initializer: function () {
                                        return !0;
                                    },
                                },
                            )),
                            (as = ss)),
                        ) || as),
                ));
            (T._RF.pop(), T._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", void 0));
            var ds,
                fs,
                ys,
                gs,
                Ss,
                bs,
                ws,
                Cs,
                vs,
                Es,
                Ts,
                Bs,
                Ns,
                Os,
                Ls,
                Is,
                As,
                Rs,
                xs,
                Fs = B.ccclass,
                Ps = (B.property, B.menu);
            Fs("SlotActivator")(
                (us =
                    Ps("Chiron/Spine/SlotActivator")(
                        (((ps = (function (t) {
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
                        })(H)).SlotActivator = "SlotActivator"),
                        (us = ps)),
                    ) || us),
            );
            (T._RF.pop(), T._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", void 0));
            var ks = B.ccclass,
                Ms = B.property,
                Ds = B.menu,
                zs = (B.inspector, st({ None: 0 }));
            var Gs, Vs, Hs, Ws, Us, js, Xs, Ys;
            ((ds = ks("SlotColorFollow")),
                (fs = Ds("Chiron/Spine/SlotColorFollow")),
                (ys = Ms({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (gs = Ms({ visible: !1, tooltip: "目標同步 slot 名稱" })),
                (Ss = Ms({ visible: !0, displayName: "Preview" })),
                (bs = Ms({ visible: !1, type: P.Color })),
                (ws = Ms({ visible: !1, type: at.Skeleton })),
                (Cs = Ms({ visible: !0, displayName: "Skeleton", tooltip: "目標 Spine 骨架", type: at.Skeleton })),
                (vs = Ms({ visible: !1, tooltip: "目標同步 slot 名稱" })),
                (Es = Ms({ visible: !1 })),
                (Ts = Ms({ visible: !0, displayName: "Slot", type: zs })),
                ds(
                    (Bs =
                        fs(
                            (((xs = (function (t) {
                                function r() {
                                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                    return (
                                        ((e = t.call.apply(t, [this].concat(r)) || this).editor = void 0),
                                        i(e, "m_preview", Os, n(e)),
                                        i(e, "_colorCache", Ls, n(e)),
                                        i(e, "m_spineSkeleton", Is, n(e)),
                                        i(e, "m_slotName", As, n(e)),
                                        i(e, "__slotIndex", Rs, n(e)),
                                        e
                                    );
                                }
                                e(r, t);
                                var a = r.prototype;
                                return (
                                    (a.__preload = function () {}),
                                    (a.onLoad = function () {
                                        this.node.getComponent(F)
                                            ? (this._colorCache = this.node.getComponent(F).color)
                                            : this.node.getComponent(M) && (this._colorCache = this.node.getComponent(M).color);
                                    }),
                                    (a.update = function () {
                                        if (this.m_spineSkeleton && "" != this.m_slotName) {
                                            var t = this.m_spineSkeleton.findSlot(this.m_slotName),
                                                e = t ? 255 * t.color.r : this._colorCache.r,
                                                i = t ? 255 * t.color.g : this._colorCache.g,
                                                n = t ? 255 * t.color.b : this._colorCache.b,
                                                o = t ? 255 * t.color.a : this._colorCache.a;
                                            (e == this._colorCache.r && i == this._colorCache.g && n == this._colorCache.b && o == this._colorCache.a) ||
                                                (this.node.getComponent(F)
                                                    ? ((this.node.getComponent(F).color = $(e, i, n, o)), this._colorCache.set(this.node.getComponent(F).color))
                                                    : this.node.getComponent(M) &&
                                                      ((this.node.getComponent(M).color = $(e, i, n, o)),
                                                      this._colorCache.set(this.node.getComponent(M).color)),
                                                this.node.getComponent(ft) && (this.node.getComponent(ft).opacity = o),
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
                                            (i = o || zs),
                                            (n = st.getList(st(i))),
                                            wt.Attr.setClassAttr(t, e, "type", "Enum"),
                                            wt.Attr.setClassAttr(t, e, "enumList", n));
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
                            })(H)).SlotColorFollow = "SlotColorFollow"),
                            t((Ns = xs).prototype, "Skeleton", [ys], Object.getOwnPropertyDescriptor(Ns.prototype, "Skeleton"), Ns.prototype),
                            t(Ns.prototype, "SlotName", [gs], Object.getOwnPropertyDescriptor(Ns.prototype, "SlotName"), Ns.prototype),
                            (Os = t(Ns.prototype, "m_preview", [Ss], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !0;
                                },
                            })),
                            (Ls = t(Ns.prototype, "_colorCache", [bs], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return new P.Color(P.Color.WHITE);
                                },
                            })),
                            (Is = t(Ns.prototype, "m_spineSkeleton", [ws], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return null;
                                },
                            })),
                            t(Ns.prototype, "_spineSkeleton", [Cs], Object.getOwnPropertyDescriptor(Ns.prototype, "_spineSkeleton"), Ns.prototype),
                            (As = t(Ns.prototype, "m_slotName", [vs], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return "";
                                },
                            })),
                            (Rs = t(Ns.prototype, "__slotIndex", [Es], {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return 0;
                                },
                            })),
                            t(Ns.prototype, "_slotIndex", [Ts], Object.getOwnPropertyDescriptor(Ns.prototype, "_slotIndex"), Ns.prototype),
                            (Bs = Ns)),
                        ) || Bs),
                ));
            (T._RF.pop(), T._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", void 0));
            var Ks = B.ccclass,
                Zs = B.property,
                qs = B.menu;
            ((Gs = Ks("SlotCulling")),
                (Vs = qs("Chiron/Spine/SlotCulling")),
                (Hs = Zs({ visible: !1, tooltip: "目標 Spine 骨架" })),
                (Ws = Zs({ visible: !1, tooltip: "反向剔除 Slot 項目(勾選的不會被剔除，未勾選的將被剔除)" })),
                (Us = Zs({ visible: !1, tooltip: "遭剔除的 Slot 項目名稱" })),
                Gs(
                    (js =
                        Vs(
                            (((Ys = (function (t) {
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
                            })(H)).SlotCulling = "SlotCulling"),
                            t((Xs = Ys).prototype, "Skeleton", [Hs], Object.getOwnPropertyDescriptor(Xs.prototype, "Skeleton"), Xs.prototype),
                            t(Xs.prototype, "Invert", [Ws], Object.getOwnPropertyDescriptor(Xs.prototype, "Invert"), Xs.prototype),
                            t(Xs.prototype, "CullingList", [Us], Object.getOwnPropertyDescriptor(Xs.prototype, "CullingList"), Xs.prototype),
                            (js = Xs)),
                        ) || js),
                ));
            (T._RF.pop(), T._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", void 0));
            var Js = new Map(),
                Qs = new Map(),
                $s = new Map(),
                tl = [],
                el = (function () {
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
                            var t = y(
                                g().mark(function t(e, i) {
                                    var n, o, r;
                                    return g().wrap(
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
                                                                          (Js.set(e + "/" + t, i[t]), Js.set(r + "/" + t, i[t]));
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
                                        return this.ZipCacheUrl ? Qs.get(this.ZipCacheUrl) : t.get.call(this);
                                    },
                                    set: function (t) {},
                                    configurable: !0,
                                });
                                var e = XMLHttpRequest.prototype.open;
                                XMLHttpRequest.prototype.open = function (t, i, n, o, r) {
                                    function a() {
                                        var t = (this.status >= 200 && this.status < 300) || 304 == this.status;
                                        (this.readyState != XMLHttpRequest.DONE || t || tl.includes(i) || (tl.push(i), il(701, this.status), il(702, i)),
                                            this.removeEventListener("load", a));
                                    }
                                    return (Js.has(i) && (this.ZipCacheUrl = i), this.addEventListener("load", a.bind(this)), e.apply(this, arguments));
                                };
                                var i = XMLHttpRequest.prototype.send;
                                XMLHttpRequest.prototype.send = y(
                                    g().mark(function t(e) {
                                        var n,
                                            o,
                                            r,
                                            a,
                                            s,
                                            l,
                                            c,
                                            u,
                                            p = arguments;
                                        return g().wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if (!this.ZipCacheUrl) {
                                                                t.next = 26;
                                                                break;
                                                            }
                                                            if (Qs.has(this.ZipCacheUrl)) {
                                                                t.next = 24;
                                                                break;
                                                            }
                                                            ((n = this.responseType),
                                                                (o = Js.get(this.ZipCacheUrl)),
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
                                                            ((c = $s.get(this.ZipCacheUrl)) &&
                                                                (Qs.delete(this.ZipCacheUrl + "@version" + c), $s.delete(this.ZipCacheUrl)),
                                                                (u = performance.now()),
                                                                $s.set(this.ZipCacheUrl, u),
                                                                (this.ZipCacheUrl = this.ZipCacheUrl + "@version" + u),
                                                                Qs.set(this.ZipCacheUrl, r));
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
            function il(t, e) {
                if (!Ct.isNative) {
                    var i = "https://" + window.location.host + "/";
                    if (-1 == i.indexOf("localhost") && 1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(i)) {
                        var n = 0;
                        switch (Ct.browserType) {
                            case Ct.BrowserType.CHROME:
                                n = 1;
                                break;
                            case Ct.BrowserType.SAFARI:
                                n = 2;
                                break;
                            case Ct.BrowserType.IE:
                                n = 3;
                                break;
                            case Ct.BrowserType.UC:
                                n = 4;
                                break;
                            case Ct.BrowserType.QQ:
                            case Ct.BrowserType.MOBILE_QQ:
                                n = 5;
                                break;
                            case Ct.BrowserType.FIREFOX:
                                n = 6;
                        }
                        var o = 0;
                        switch (Ct.os) {
                            case Ct.OS.ANDROID:
                                o = 1;
                                break;
                            case Ct.OS.IOS:
                                o = 2;
                                break;
                            case Ct.OS.WINDOWS:
                                o = 3;
                                break;
                            default:
                                o = 0;
                        }
                        var r = nl("apiId") || "-1",
                            a = nl("ssoKey") || "1",
                            s = nl("gameID") || "-1",
                            l = "https://" + (nl("domain_platform") || nl("gs") || "gnidnawcs").split("").reverse().join("") + "/webservice/event/assetUpdate?";
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
            function nl(t, e) {
                (void 0 === e && (e = null),
                    e ||
                        (e = (function () {
                            var t = window.location.href,
                                e = nl("replaydata", t);
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
            var ol,
                rl,
                al,
                sl,
                ll,
                cl,
                ul,
                pl,
                ml,
                hl,
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
                Bl,
                Nl,
                Ol,
                Ll,
                Il,
                Al,
                Rl,
                xl,
                Fl,
                Pl,
                kl,
                Ml,
                Dl,
                zl,
                Gl,
                Vl,
                Hl,
                Wl,
                Ul,
                jl,
                Xl,
                Yl,
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
                rc,
                ac,
                sc,
                lc,
                cc,
                uc,
                pc,
                mc,
                hc,
                _c,
                dc,
                fc,
                yc,
                gc,
                Sc,
                bc,
                wc,
                Cc = globalThis.__zipBundleLoader;
            (globalThis.fflate && !Cc && ((Cc = new el()), (globalThis.__zipBundleLoader = Cc), Cc.init()),
                T._RF.pop(),
                T._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", void 0));
            var vc,
                Ec = ["game"],
                Tc = B.ccclass,
                Bc = B.property;
            !(function (t) {
                ((t[(t.CommonMainBundle = 0)] = "CommonMainBundle"),
                    (t[(t.CommonBundle = 1)] = "CommonBundle"),
                    (t[(t.OtherBundle = 2)] = "OtherBundle"),
                    (t[(t.DefaultLangBundle = 3)] = "DefaultLangBundle"),
                    (t[(t.LangTextBundle = 4)] = "LangTextBundle"),
                    (t[(t.GameBundle = 5)] = "GameBundle"));
            })(vc || (vc = {}));
            var Nc,
                Oc,
                Lc = {
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
                Ic = {
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
                Ac = Ic.EN,
                Rc = [10830, 10827, 10778, 10718, 10689, 10651, 10630, 10598, 10505, 10504, 10450, 10414, 10263, 10220],
                xc = [3],
                Fc = { JILI: 0, TADA: 1, ACE_ROYALE: 2, JILI_START: 3, TADA_CASINO: 4, NONE: 5, UFA: 6 };
            (!(function (t) {
                ((t[(t.None = 0)] = "None"),
                    (t[(t.AutoPlaySettingPanel = 1)] = "AutoPlaySettingPanel"),
                    (t[(t.AutoPlaySettingPanel_DFI = 2)] = "AutoPlaySettingPanel_DFI"),
                    (t[(t.AutoPlaySettingPanel_DFIII = 3)] = "AutoPlaySettingPanel_DFIII"),
                    (t[(t.AutoPlaySettingPanel_BS = 4)] = "AutoPlaySettingPanel_BS"),
                    (t[(t.AutoPlaySetting_AG2 = 5)] = "AutoPlaySetting_AG2"),
                    (t[(t.AutoPlaySetting_FD = 6)] = "AutoPlaySetting_FD"),
                    (t[(t.AutoPlaySettingPanel_MS = 7)] = "AutoPlaySettingPanel_MS"));
            })(Nc || (Nc = {})),
                (function (t) {
                    ((t[(t.None = 0)] = "None"), (t[(t.Dark = 1)] = "Dark"));
                })(Oc || (Oc = {})));
            var Pc,
                kc,
                Mc,
                Dc,
                zc,
                Gc,
                Vc,
                Hc,
                Wc,
                Uc,
                jc,
                Xc,
                Yc =
                    ((ol = Tc("StyleSetting")),
                    (rl = Bc({ type: it, tooltip: "是否有骰子造型" })),
                    (al = Bc({ type: it, tooltip: "是否有萬聖造型" })),
                    (sl = Bc({ type: it, tooltip: "是否有聖誕造型" })),
                    (ll = Bc({ type: it, tooltip: "是否有OKBET廠商造型" })),
                    (cl = Bc({ type: st(Oc), tooltip: "系列" })),
                    ol(
                        ((ml = t(
                            (pl = function () {
                                (i(this, "HasDice", ml, this),
                                    i(this, "HasHolloween", hl, this),
                                    i(this, "HasXmas", _l, this),
                                    i(this, "HasOkbet", dl, this),
                                    i(this, "Series", fl, this));
                            }).prototype,
                            "HasDice",
                            [rl],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            },
                        )),
                        (hl = t(pl.prototype, "HasHolloween", [al], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (_l = t(pl.prototype, "HasXmas", [sl], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (dl = t(pl.prototype, "HasOkbet", [ll], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (fl = t(pl.prototype, "Series", [cl], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return Oc.None;
                            },
                        })),
                        (ul = pl)),
                    ) || ul),
                Kc =
                    ((yl = Tc("PlayTypeSetting")),
                    (gl = Bc({ type: it, tooltip: "Match" })),
                    (Sl = Bc({ type: it, tooltip: "Break" })),
                    yl(
                        ((Cl = t(
                            (wl = function () {
                                (i(this, "Match", Cl, this), i(this, "Break", vl, this));
                            }).prototype,
                            "Match",
                            [gl],
                            {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function () {
                                    return !1;
                                },
                            },
                        )),
                        (vl = t(wl.prototype, "Break", [Sl], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        })),
                        (bl = wl)),
                    ) || bl);
            ((El = Bc({ type: W, tooltip: "遊戲縮寫(server位置)" })),
                (Tl = Bc({ type: String, tooltip: "遊戲主場prefab路徑" })),
                (Bl = Bc({ type: String, tooltip: "遊戲多語系圖片路徑" })),
                (Nl = Bc({ type: String, tooltip: "遊戲ID" })),
                (Ol = Bc({ type: String, tooltip: "Logo名稱，只要給到底線之前" })),
                (Ll = Bc({ type: Boolean, tooltip: "鎖定橫版" })),
                (Il = Bc({ type: Boolean, tooltip: "鎖定直版" })),
                (Al = Bc({ type: Boolean, tooltip: "是否為街機" })),
                (Rl = Bc({ type: A, tooltip: "不分語系LOGO" })),
                (xl = Bc({ type: vt, tooltip: "遊戲Logo合圖" })),
                (Fl = Bc({ type: W, tooltip: "展示頁" })),
                (Pl = Bc({ type: String, tooltip: "敘述圖名稱" })),
                (kl = Bc({ type: A, tooltip: "特色圖" })),
                (Ml = Bc({ type: A, tooltip: "背景圖，0:直,1:橫" })),
                (Dl = Bc({ type: A, tooltip: "腳色" })),
                (zl = Bc({ type: Number, tooltip: "辣椒數" })),
                (Gl = Bc({ type: Number, tooltip: "最大贏分倍率" })),
                (Vl = Bc({ type: st(Nc), tooltip: "自動玩介面" })),
                (Hl = Bc({ type: it, tooltip: "是否開啟晚3秒ShowGameScene進入遊戲" })),
                (Wl = Bc({ type: it, tooltip: "可以跳過前導動畫" })),
                (Ul = Bc({ type: Yc, tooltip: "是否有其他特色樣式" })),
                (jl = Bc({ type: Kc, tooltip: "是否有其他特色樣式" })),
                (Xl = Bc({ type: it, tooltip: "是否為遠程包" })),
                (Yl = Bc({ type: it, tooltip: "是否是SSS版" })),
                (Kl = Bc({ type: W, tooltip: "使用哪個遠程包版本" })),
                Tc(
                    ((Jl = t(
                        (ql = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "m_gameShortName", Jl, n(e)),
                                    i(e, "m_scenePrefabPath", Ql, n(e)),
                                    i(e, "m_gameImgPath", $l, n(e)),
                                    i(e, "m_gameId", tc, n(e)),
                                    i(e, "m_logoName", ec, n(e)),
                                    i(e, "m_isLockLandScope", ic, n(e)),
                                    i(e, "m_isLockPortrait", nc, n(e)),
                                    i(e, "m_isStreet", oc, n(e)),
                                    i(e, "m_singleLogo", rc, n(e)),
                                    i(e, "m_logoSpriteAtlas", ac, n(e)),
                                    i(e, "m_pagePrefabPaths", sc, n(e)),
                                    i(e, "m_infoNames", lc, n(e)),
                                    i(e, "m_featureSpriteFrames", cc, n(e)),
                                    i(e, "m_bgSpriteFrames", uc, n(e)),
                                    i(e, "m_characterSpriteFrame", pc, n(e)),
                                    i(e, "m_chilliNum", mc, n(e)),
                                    i(e, "m_maxWinNum", hc, n(e)),
                                    i(e, "m_autoplayPanelNo", _c, n(e)),
                                    i(e, "m_isWatting", dc, n(e)),
                                    i(e, "m_skipIntro", fc, n(e)),
                                    i(e, "m_styleSetting", yc, n(e)),
                                    i(e, "m_playTypeSetting", gc, n(e)),
                                    i(e, "m_isRemote", Sc, n(e)),
                                    i(e, "m_isSSS", bc, n(e)),
                                    i(e, "m_ReomveVersion", wc, n(e)),
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
                                    var t = y(
                                        g().mark(function t() {
                                            return g().wrap(
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
                                    z.prototype.fillBuffers = function (t) {
                                        this._renderFlag && t._pOpacity > 0 && this._render(t);
                                    };
                                }),
                                (r.update = function () {}),
                                (r.LoadZip = (function () {
                                    var t = y(
                                        g().mark(function t(e, i, n, o) {
                                            var r, a, s;
                                            return g().wrap(function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            if ((void 0 === n && (n = ""), void 0 === o && (o = ""), Cc)) {
                                                                t.next = 4;
                                                                break;
                                                            }
                                                            return t.abrupt("return");
                                                        case 4:
                                                            if (!(Cc.loadedZipNames.indexOf(e) >= 0)) {
                                                                t.next = 6;
                                                                break;
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            if (i || -1 !== Ec.indexOf(e)) {
                                                                t.next = 8;
                                                                break;
                                                            }
                                                            return t.abrupt("return");
                                                        case 8:
                                                            return (
                                                                (r = n),
                                                                (a = o),
                                                                i ||
                                                                    ((s = Bt.querySettings(Nt.Category.ASSETS, "bundleVers")),
                                                                    (r = "./assets/" + e),
                                                                    (a = s[e])),
                                                                Cc.loadedZipNames.push(e),
                                                                (t.next = 13),
                                                                Cc.loadZip(r, a)
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
                                    var t = y(
                                        g().mark(function t(e) {
                                            var i, n, o, r, a, s, l, c, u, p, m, h, _, d, f, S, b, w, C, v, E, T, B, N;
                                            return g().wrap(
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
                                                                    (m = ""),
                                                                    (h = ""));
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
                                                                    (_ = /(\d+)\.(\d+)/),
                                                                    (d = Ot.match(_)),
                                                                    (f = d[1] + "." + d[2]),
                                                                    (S = `${window.location.protocol}//` + window.location.host + "/"),
                                                                    (b = "astarte"),
                                                                    (w = "web-mobile"),
                                                                    Ct.isNative && ((w = "android"), (f = "app" + f)),
                                                                    this.m_ReomveVersion.length > 0 && (w = w + "-" + this.m_ReomveVersion),
                                                                    i && (S = i.cdnHost),
                                                                    this.m_isSSS && (b = "astarte3"),
                                                                    (C = this.GetLinkParameterByName("remoteVersion")) &&
                                                                        C.length > 0 &&
                                                                        (f = "" + C + d[1] + "." + d[2]),
                                                                    (t.next = 33),
                                                                    new Promise(function (t) {
                                                                        k.loadRemote(
                                                                            "" +
                                                                                S +
                                                                                b +
                                                                                "/" +
                                                                                f +
                                                                                "/" +
                                                                                w +
                                                                                "/assets/versions.json?" +
                                                                                (Date.now() / 600).toFixed(0),
                                                                            { reload: !0, cacheAsset: !1, cacheEnabled: !1 },
                                                                            y(
                                                                                g().mark(function e(i, n) {
                                                                                    return g().wrap(function (e) {
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
                                                                    (E = "" + S + b + "/" + f + "/" + w + "/src/chunks/bundle." + v.json["bundle.js"] + ".js"),
                                                                    !Ct.isNative)
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
                                                                ((r = "" + S + b + "/" + f + "/" + w + "/assets/other"),
                                                                    (u = v.json.other),
                                                                    (this.m_commonPath = "" + S + b + "/" + f + "/" + w + "/assets/" + n),
                                                                    (this.m_commonVersion = v.json[n]),
                                                                    (o = "" + S + b + "/" + f + "/" + w + "/assets/" + n + "Main"),
                                                                    (l = v.json[n + "Main"]),
                                                                    (this.m_lang = this.GetLanguage()),
                                                                    (a = "" + S + b + "/" + f + "/" + w + "/assets/" + this.m_lang),
                                                                    (c = v.json[this.m_lang]),
                                                                    (this.m_defaultLangPath = "" + S + b + "/" + f + "/" + w + "/assets/en"),
                                                                    (this.m_defaultLangVersion = v.json.en),
                                                                    (m = "" + S + b + "/" + f + "/" + w + "/assets/extra"),
                                                                    (h = v.json.extra));
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
                                                                ((B = t.sent),
                                                                    (this.m_otherBundle = B[0]),
                                                                    (this.m_gameBundle = B[1]),
                                                                    (this.m_commonMainBundle = B[2]),
                                                                    (this.m_langTextBundle = B[3]),
                                                                    this.CheckBundles(),
                                                                    (t.next = 76));
                                                                break;
                                                            case 71:
                                                                return (
                                                                    (N = [
                                                                        this.LoadBundleSync(m, h),
                                                                        this.LoadBundleSync(o, l, vc.CommonMainBundle),
                                                                        this.LoadBundleSync(r, u, vc.OtherBundle),
                                                                        this.LoadBundleSync(a, c, vc.LangTextBundle),
                                                                        this.LoadZip(n + "Main", this.m_isRemote, o, l),
                                                                        this.LoadBundleSync(this.m_commonPath, this.m_commonVersion, vc.CommonBundle),
                                                                    ]),
                                                                    this.m_isForceLite
                                                                        ? N.push(this.LoadBundleSync("assets/gameLite", "", vc.GameBundle))
                                                                        : this.m_isTaDa || N.push(this.LoadBundleSync("assets/game", "", vc.GameBundle)),
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
                                                        case vc.CommonMainBundle:
                                                            o.m_commonMainBundle = t;
                                                            break;
                                                        case vc.CommonBundle:
                                                            o.m_commonBundle = t;
                                                            break;
                                                        case vc.OtherBundle:
                                                            o.m_otherBundle = t;
                                                            break;
                                                        case vc.LangTextBundle:
                                                            o.m_langTextBundle = t;
                                                            break;
                                                        case vc.GameBundle:
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
                                                ((t.m_viewNode = ct(i)), t.node.addChild(t.m_viewNode), t.CheckIntroResources());
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
                                            lstZipBundleName: Ec,
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
                                    if ((null != (t = window) && null != (e = t.location) && null != (i = e.href) && i.includes("/sss-") && (n = Lc.EN), n)) {
                                        var o = this.FormatLang(n);
                                        if ("" !== o) return o;
                                    }
                                    if (!Ct.isNative) {
                                        var r = this.FormatLang(navigator.language);
                                        if ("" !== r && null != r) return r;
                                    }
                                    return Ac;
                                }),
                                (r.IsTada = function () {
                                    var t = Number(this.GetLinkParameterByName("apiId")),
                                        e = !1;
                                    if (!isNaN(t)) {
                                        ((this.m_apiId = Number(t)), (this.m_isForceLite = -1 !== Ec.indexOf("gameLite") && Rc.includes(this.m_apiId)));
                                        for (var i = 0; i < xc.length; i++)
                                            if (t === xc[i]) {
                                                e = !0;
                                                break;
                                            }
                                    }
                                    var n = this.GetLinkParameterByName("tadaSkin");
                                    n && "1" === n && (e = !0);
                                    var o = this.GetLinkParameterByName("skin");
                                    return (!o || (o != Fc.TADA.toString() && o != Fc.TADA_CASINO.toString()) || (e = !0), e);
                                }),
                                (r.GetLinkParameterByName = function (t, e) {
                                    if ((void 0 === e && (e = null), !e))
                                        if ("undefined" != typeof LobbyData)
                                            try {
                                                "" === (e = LobbyData.url) && lt("No URL!");
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
                                    if (!Ct.isNative) {
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
                                    return (t = t.toLocaleLowerCase()) == Ic.CN || t == Lc.CN.toLocaleLowerCase()
                                        ? Ic.CN
                                        : t == Ic.EN || t == Lc.EN.toLocaleLowerCase()
                                          ? Ic.EN
                                          : t == Ic.TH || t == Lc.TH.toLocaleLowerCase()
                                            ? Ic.TH
                                            : t == Ic.VN || t == Lc.VN.toLocaleLowerCase()
                                              ? Ic.VN
                                              : t == Ic.ID || t == Lc.ID.toLocaleLowerCase()
                                                ? Ic.ID
                                                : t == Ic.HI || t == Lc.HI.toLocaleLowerCase()
                                                  ? Ic.HI
                                                  : t == Ic.TA || t == Lc.TA.toLocaleLowerCase()
                                                    ? Ic.TA
                                                    : t == Ic.MM || t == Lc.MM.toLocaleLowerCase()
                                                      ? Ic.MM
                                                      : t == Ic.JP || t == Lc.JP.toLocaleLowerCase()
                                                        ? Ic.JP
                                                        : t == Ic.MS || t == Lc.MS.toLocaleLowerCase()
                                                          ? Ic.MS
                                                          : t == Ic.KO || t == Lc.KO.toLocaleLowerCase()
                                                            ? Ic.KO
                                                            : t == Ic.BN || t == Lc.BN.toLocaleLowerCase()
                                                              ? Ic.BN
                                                              : t == Ic.ES || t == Lc.ES.toLocaleLowerCase()
                                                                ? Ic.ES
                                                                : t == Ic.PT || t == Lc.PT.toLocaleLowerCase()
                                                                  ? Ic.PT
                                                                  : t == Ic.IT || t == Lc.IT.toLocaleLowerCase()
                                                                    ? Ic.IT
                                                                    : t == Ic.SE || t == Lc.SE.toLocaleLowerCase()
                                                                      ? Ic.SE
                                                                      : t == Ic.DE || t == Lc.DE.toLocaleLowerCase()
                                                                        ? Ic.DE
                                                                        : t == Ic.DADK || t == Lc.DADK.toLocaleLowerCase()
                                                                          ? Ic.DADK
                                                                          : t == Ic.RORO || t == Lc.RORO.toLocaleLowerCase()
                                                                            ? Ic.RORO
                                                                            : t == Ic.NLNL || t == Lc.NLNL.toLocaleLowerCase()
                                                                              ? Ic.NLNL
                                                                              : t == Ic.TRTR.toLocaleLowerCase() || t == Lc.TRTR.toLocaleLowerCase()
                                                                                ? Ic.TRTR
                                                                                : t == Ic.RURU.toLocaleLowerCase() || t == Lc.RURU.toLocaleLowerCase()
                                                                                  ? Ic.RURU
                                                                                  : t == Ic.GRGR.toLocaleLowerCase() || t == Lc.GRGR.toLocaleLowerCase()
                                                                                    ? Ic.GRGR
                                                                                    : t == Ic.FRFR.toLocaleLowerCase() || t == Lc.FRFR.toLocaleLowerCase()
                                                                                      ? Ic.FRFR
                                                                                      : "";
                                }),
                                o
                            );
                        })(H)).prototype,
                        "m_gameShortName",
                        [El],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return "";
                            },
                        },
                    )),
                    (Ql = t(ql.prototype, "m_scenePrefabPath", [Tl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    ($l = t(ql.prototype, "m_gameImgPath", [Bl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (tc = t(ql.prototype, "m_gameId", [Nl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (ec = t(ql.prototype, "m_logoName", [Ol], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (ic = t(ql.prototype, "m_isLockLandScope", [Ll], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (nc = t(ql.prototype, "m_isLockPortrait", [Il], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (oc = t(ql.prototype, "m_isStreet", [Al], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (rc = t(ql.prototype, "m_singleLogo", [Rl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (ac = t(ql.prototype, "m_logoSpriteAtlas", [xl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (sc = t(ql.prototype, "m_pagePrefabPaths", [Fl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (lc = t(ql.prototype, "m_infoNames", [Pl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (cc = t(ql.prototype, "m_featureSpriteFrames", [kl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (uc = t(ql.prototype, "m_bgSpriteFrames", [Ml], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (pc = t(ql.prototype, "m_characterSpriteFrame", [Dl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    (mc = t(ql.prototype, "m_chilliNum", [zl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (hc = t(ql.prototype, "m_maxWinNum", [Gl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return 0;
                        },
                    })),
                    (_c = t(ql.prototype, "m_autoplayPanelNo", [Vl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return Nc.None;
                        },
                    })),
                    (dc = t(ql.prototype, "m_isWatting", [Hl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (fc = t(ql.prototype, "m_skipIntro", [Wl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (yc = t(ql.prototype, "m_styleSetting", [Ul], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return new Yc();
                        },
                    })),
                    (gc = t(ql.prototype, "m_playTypeSetting", [jl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return new Kc();
                        },
                    })),
                    (Sc = t(ql.prototype, "m_isRemote", [Xl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (bc = t(ql.prototype, "m_isSSS", [Yl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (wc = t(ql.prototype, "m_ReomveVersion", [Kl], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return "";
                        },
                    })),
                    (Zl = ql)),
                ));
            (T._RF.pop(), T._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", void 0));
            var Zc = B.ccclass,
                qc = B.property,
                Jc = function (t, e, i, n, o, r) {
                    ((this.name = t), (this.height = e), (this.width = i), (this.ratio = n), (this.statusHeight = o), (this.homeHeight = r));
                },
                Qc = [
                    new Jc("iPhone 6.5-inch", 896, 414, 3, 44, 34),
                    new Jc("iPhone 6.1-inch", 896, 414, 2, 44, 34),
                    new Jc("iPhone 5.8-inch", 812, 375, 3, 44, 34),
                    new Jc("iPhone 5.5-inch", 736, 414, 3, 18, 0),
                    new Jc("iPhone 4.7-inch", 667, 375, 2, 20, 0),
                    new Jc("iPhone 4-inch", 568, 320, 2, 20, 0),
                    new Jc("iPhone 3.5-inch", 480, 320, 2, 20, 0),
                    new Jc("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0),
                    new Jc("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0),
                    new Jc("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0),
                    new Jc("iPad 9.7-inch Retina", 1024, 768, 2, 20, 0),
                    new Jc("iPad", 1024, 768, 1, 20, 0),
                    new Jc("iPad Mini Retina", 1024, 768, 2, 20, 0),
                    new Jc("iPad Mini", 1024, 768, 1, 20, 0),
                ],
                $c = "mask",
                tu = "mask_close_tip",
                eu = "mask_close",
                iu = "bar",
                nu = {
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
                ou = ["tw", "zh-TW"],
                ru = ["cn", "zh-CN"],
                au = ["en", "en-US"],
                su = ["th", "th-TH"],
                lu = ["vn", "vi-VN"],
                cu = ["id", "id-ID"],
                uu = ["hi", "hi-IN"],
                pu = ["ta", "ta-IN"],
                mu = ["mm", "my-MM"],
                hu = ["jp", "ja-JP"],
                _u = [1131],
                du = [1864, 1002];
            ((Pc = qc(Boolean)),
                (kc = qc(Boolean)),
                (Mc = qc(Boolean)),
                (Dc = qc(Boolean)),
                (zc = qc(Number)),
                Zc(
                    ((Hc = t(
                        (Vc = (function (t) {
                            function o() {
                                for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                                return (
                                    (e = t.call.apply(t, [this].concat(r)) || this),
                                    i(e, "isLandscape", Hc, n(e)),
                                    i(e, "isPortrait", Wc, n(e)),
                                    i(e, "isIOS", Uc, n(e)),
                                    i(e, "isAndroid", jc, n(e)),
                                    i(e, "android_Apiid", Xc, n(e)),
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
                                    Ct.isNative || this.Init();
                                }),
                                (r.GetDeviceName = function () {
                                    if (Ct.os === Ct.OS.IOS) {
                                        var t = this.GetiOSDevice();
                                        if (t) return t.name;
                                    } else if (Ct.os === Ct.OS.ANDROID) {
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
                                        ((i.id = iu), (i.style.position = "absolute"), (i.style.height = "100vh"));
                                        var n = document.createElement("div");
                                        ((n.id = $c),
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
                                        ((o.id = tu),
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
                                        ((a.id = eu),
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
                                            ? (this.m_isblock = _u.indexOf(i) >= 0)
                                            : this.isAndroid && this.android_Apiid.length > 0 && this.android_Apiid.indexOf(i) >= 0 && (this.isAndroid = !1),
                                        this.m_isblock || (this.m_isblock = du.indexOf(i) >= 0),
                                        !e && !this.m_isblock)
                                    )
                                        if ((this.AddGameViewMask(), (this.isIOS = !1), Ct.os == Ct.OS.IOS && 0 == this.IsWebview() && this.isIOS))
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
                                                    (document.getElementById(iu).clientHeight == window.innerHeight ? t.HideMask() : t.SetShowMask(n),
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
                                        else if (Ct.os == Ct.OS.ANDROID && 0 == this.IsWebview() && this.isAndroid)
                                            if (Ct.browserType == Ct.BrowserType.MOBILE_QQ || Ct.browserType == Ct.BrowserType.UC);
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
                                            (document.getElementById(iu).clientHeight,
                                                window.innerHeight,
                                                (t === this.m_isLandscape && document.getElementById(iu).clientHeight === window.innerHeight) ||
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
                                    var i = document.getElementById(eu),
                                        n = this.isLandscape ? document.getElementById(tu) : null;
                                    (nu[e]
                                        ? ((i.textContent = nu[e][0]), n && (n.textContent = nu[e][1]))
                                        : ((i.textContent = nu[au[0]][0]), n && (n.textContent = nu[au[0]][1])),
                                        i.onclick ||
                                            (i.onclick = function () {
                                                t.HideMask();
                                            }));
                                }),
                                (r.GetLang = function (t) {
                                    var e = Ct.localStorage.getItem("LobbyLanguage");
                                    if (!e || "" == e) {
                                        if (-1 != (e = "undefined" != typeof LobbyData ? LobbyData.url : window.location.href).indexOf("?"))
                                            for (var i = e.split("?")[1].split("&"), n = 0; n < i.length; n++)
                                                if (i[n].split("=")[0] == t) return i[n].split("=")[1];
                                        return au[0];
                                    }
                                    return e;
                                }),
                                (r.ChangeLang = function (t) {
                                    switch (t) {
                                        case ou[1]:
                                            return ou[0];
                                        case ru[1]:
                                            return ru[0];
                                        case su[1]:
                                            return su[0];
                                        case lu[1]:
                                            return lu[0];
                                        case cu[1]:
                                            return cu[0];
                                        case uu[1]:
                                            return uu[0];
                                        case pu[1]:
                                            return pu[0];
                                        case mu[1]:
                                            return mu[0];
                                        case hu[1]:
                                            return hu[0];
                                        default:
                                            return au[0];
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
                                        e = St.getScene();
                                    this.m_mask || e.getChildByName("ScrollForMask") || Ct.browserType == Ct.BrowserType.FIREFOX
                                        ? !this.m_mask && e.getChildByName("ScrollForMask") && (this.m_mask = Lt("ScrollForMask"))
                                        : ((this.m_mask = new I()),
                                          (this.m_mask.name = "ScrollForMask"),
                                          this.m_mask.addComponent(L).setContentSize(new It(2e3, 2e3)),
                                          this.m_mask.addComponent(Y),
                                          (this.m_mask.active = !1),
                                          e.addChild(this.m_mask),
                                          this.m_mask.setSiblingIndex(e.children.length),
                                          this.m_mask.on(I.EventType.TOUCH_END, function () {
                                              if (Ct.os == Ct.OS.IOS && 0 == t.IsWebview()) {
                                                  var e = t.m_backGround;
                                                  e && "hidden" == e.style.visibility && (t.m_mask.active = !1);
                                              } else Ct.os == Ct.OS.ANDROID && 0 == t.IsWebview() && t.Fullscreen();
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
                                    for (var t, e = v(Qc); !(t = e()).done; ) {
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
                                    return Ct.os == Ct.OS.IOS && /iPhone OS 15/.test(window.navigator.userAgent);
                                }),
                                (r.IsIOS15Version = function (t) {
                                    return Ct.os == Ct.OS.IOS && -1 !== window.navigator.userAgent.search("iPhone OS 15_" + t);
                                }),
                                o
                            );
                        })(H)).prototype,
                        "isLandscape",
                        [Pc],
                        {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1;
                            },
                        },
                    )),
                    (Wc = t(Vc.prototype, "isPortrait", [kc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !1;
                        },
                    })),
                    (Uc = t(Vc.prototype, "isIOS", [Mc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !0;
                        },
                    })),
                    (jc = t(Vc.prototype, "isAndroid", [Dc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return !0;
                        },
                    })),
                    (Xc = t(Vc.prototype, "android_Apiid", [zc], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return [];
                        },
                    })),
                    (Gc = Vc)),
                ));
            T._RF.pop();
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
