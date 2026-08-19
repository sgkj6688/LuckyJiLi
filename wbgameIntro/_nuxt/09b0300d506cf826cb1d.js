/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [7],
    {
        /***/ 10: /***/ function (t, e, n) {
            "use strict";
            /* WEBPACK VAR INJECTION */ (function (t) {
                /* unused harmony export Store */
                /* unused harmony export createLogger */
                /* unused harmony export createNamespacedHelpers */
                /* unused harmony export install */
                /* harmony export (binding) */ (n.d(e, "b", function () {
                    return S;
                }),
                    /* harmony export (binding) */ n.d(e, "c", function () {
                        return C;
                    }),
                    /* harmony export (binding) */ n.d(e, "d", function () {
                        return O;
                    }),
                    /* harmony export (binding) */ n.d(e, "e", function () {
                        return w;
                    }));
                var r = ("undefined" != typeof window ? window : void 0 !== t ? t : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;
                /**
                 * Deep copy the given object considering circular structure.
                 * This function caches all nested objects and its copies.
                 * If it detects circular structure, use cached copy to avoid infinite loop.
                 *
                 * @param {*} obj
                 * @param {Array<Object>} cache
                 * @return {*}
                 */
                function o(t, e) {
                    // just return if obj is immutable value
                    if ((void 0 === e && (e = []), null === t || "object" != typeof t)) return t;
                    // if obj is hit, it is in circular structure
                    var n,
                        r =
                            ((n = function (e) {
                                return e.original === t;
                            }),
                            e.filter(n)[0]);
                    if (r) return r.copy;
                    var i = Array.isArray(t) ? [] : {};
                    // put the copy into cache at first
                    // because we want to refer it in recursive deepCopy
                    return (
                        e.push({ original: t, copy: i }),
                        Object.keys(t).forEach(function (n) {
                            i[n] = o(t[n], e);
                        }),
                        i
                    );
                }
                /**
                 * forEach for object
                 */ function i(t, e) {
                    Object.keys(t).forEach(function (n) {
                        return e(t[n], n);
                    });
                }
                function a(t) {
                    return null !== t && "object" == typeof t;
                }
                // Base data struct for store's module, package with some attribute and method
                var c = function (t, e) {
                        ((this.runtime = e),
                            // Store some children item
                            (this._children = Object.create(null)),
                            // Store the origin module object which passed by programmer
                            (this._rawModule = t));
                        var n = t.state;
                        // Store the origin module's state
                        this.state = ("function" == typeof n ? n() : n) || {};
                    },
                    s = { namespaced: { configurable: !0 } };
                ((s.namespaced.get = function () {
                    return !!this._rawModule.namespaced;
                }),
                    (c.prototype.addChild = function (t, e) {
                        this._children[t] = e;
                    }),
                    (c.prototype.removeChild = function (t) {
                        delete this._children[t];
                    }),
                    (c.prototype.getChild = function (t) {
                        return this._children[t];
                    }),
                    (c.prototype.hasChild = function (t) {
                        return t in this._children;
                    }),
                    (c.prototype.update = function (t) {
                        ((this._rawModule.namespaced = t.namespaced),
                            t.actions && (this._rawModule.actions = t.actions),
                            t.mutations && (this._rawModule.mutations = t.mutations),
                            t.getters && (this._rawModule.getters = t.getters));
                    }),
                    (c.prototype.forEachChild = function (t) {
                        i(this._children, t);
                    }),
                    (c.prototype.forEachGetter = function (t) {
                        this._rawModule.getters && i(this._rawModule.getters, t);
                    }),
                    (c.prototype.forEachAction = function (t) {
                        this._rawModule.actions && i(this._rawModule.actions, t);
                    }),
                    (c.prototype.forEachMutation = function (t) {
                        this._rawModule.mutations && i(this._rawModule.mutations, t);
                    }),
                    Object.defineProperties(c.prototype, s));
                var u = function (t) {
                    // register root module (Vuex.Store options)
                    this.register([], t, !1);
                };
                function l(t, e, n) {
                    // update nested modules
                    if (
                        // update target module
                        (e.update(n), n.modules)
                    )
                        for (var r in n.modules) {
                            if (!e.getChild(r)) return void 0;
                            l(t.concat(r), e.getChild(r), n.modules[r]);
                        }
                }
                ((u.prototype.get = function (t) {
                    return t.reduce(function (t, e) {
                        return t.getChild(e);
                    }, this.root);
                }),
                    (u.prototype.getNamespace = function (t) {
                        var e = this.root;
                        return t.reduce(function (t, n) {
                            return t + ((e = e.getChild(n)).namespaced ? n + "/" : "");
                        }, "");
                    }),
                    (u.prototype.update = function (t) {
                        l([], this.root, t);
                    }),
                    (u.prototype.register = function (t, e, n) {
                        var r = this;
                        void 0 === n && (n = !0);
                        var o = new c(e, n);
                        0 === t.length ? (this.root = o) : this.get(t.slice(0, -1)).addChild(t[t.length - 1], o);
                        // register nested modules
                        e.modules &&
                            i(e.modules, function (e, o) {
                                r.register(t.concat(o), e, n);
                            });
                    }),
                    (u.prototype.unregister = function (t) {
                        var e = this.get(t.slice(0, -1)),
                            n = t[t.length - 1],
                            r = e.getChild(n);
                        r && r.runtime && e.removeChild(n);
                    }),
                    (u.prototype.isRegistered = function (t) {
                        var e = this.get(t.slice(0, -1)),
                            n = t[t.length - 1];
                        return !!e && e.hasChild(n);
                    }));
                var f; // bind on install
                var d = function (t) {
                        var e = this;
                        (void 0 === t && (t = {}),
                            // Auto install if it is not done yet and `window` has `Vue`.
                            // To allow users to avoid auto-installation in some cases,
                            // this code should be placed here. See #731
                            !f && "undefined" != typeof window && window.Vue && b(window.Vue));
                        var n = t.plugins;
                        void 0 === n && (n = []);
                        var o = t.strict;
                        (void 0 === o && (o = !1),
                            // store internal state
                            (this._committing = !1),
                            (this._actions = Object.create(null)),
                            (this._actionSubscribers = []),
                            (this._mutations = Object.create(null)),
                            (this._wrappedGetters = Object.create(null)),
                            (this._modules = new u(t)),
                            (this._modulesNamespaceMap = Object.create(null)),
                            (this._subscribers = []),
                            (this._watcherVM = new f()),
                            (this._makeLocalGettersCache = Object.create(null)));
                        // bind commit and dispatch to self
                        var i = this,
                            a = this.dispatch,
                            c = this.commit;
                        ((this.dispatch = function (t, e) {
                            return a.call(i, t, e);
                        }),
                            (this.commit = function (t, e, n) {
                                return c.call(i, t, e, n);
                            }),
                            // strict mode
                            (this.strict = o));
                        var s = this._modules.root.state;
                        // init root module.
                        // this also recursively registers all sub-modules
                        // and collects all module getters inside this._wrappedGetters
                        (g(this, s, [], this._modules.root),
                            // initialize the store vm, which is responsible for the reactivity
                            // (also registers _wrappedGetters as computed properties)
                            m(this, s),
                            // apply plugins
                            n.forEach(function (t) {
                                return t(e);
                            }),
                            (void 0 !== t.devtools ? t.devtools : f.config.devtools) &&
                                (function (t) {
                                    r &&
                                        ((t._devtoolHook = r),
                                        r.emit("vuex:init", t),
                                        r.on("vuex:travel-to-state", function (e) {
                                            t.replaceState(e);
                                        }),
                                        t.subscribe(
                                            function (t, e) {
                                                r.emit("vuex:mutation", t, e);
                                            },
                                            { prepend: !0 },
                                        ),
                                        t.subscribeAction(
                                            function (t, e) {
                                                r.emit("vuex:action", t, e);
                                            },
                                            { prepend: !0 },
                                        ));
                                })(
                                    /**
                                     * Get the first item that pass the test
                                     * by second argument function
                                     *
                                     * @param {Array} list
                                     * @param {Function} f
                                     * @return {*}
                                     */ this,
                                ));
                    },
                    p = { state: { configurable: !0 } };
                function v(t, e, n) {
                    return (
                        e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)),
                        function () {
                            var n = e.indexOf(t);
                            n > -1 && e.splice(n, 1);
                        }
                    );
                }
                function h(t, e) {
                    ((t._actions = Object.create(null)),
                        (t._mutations = Object.create(null)),
                        (t._wrappedGetters = Object.create(null)),
                        (t._modulesNamespaceMap = Object.create(null)));
                    var n = t.state;
                    // init all modules
                    (g(t, n, [], t._modules.root, !0),
                        // reset vm
                        m(t, n, e));
                }
                function m(t, e, n) {
                    var r = t._vm;
                    // bind store public getters
                    ((t.getters = {}),
                        // reset local getters cache
                        (t._makeLocalGettersCache = Object.create(null)));
                    var o = t._wrappedGetters,
                        a = {};
                    i(o, function (e, n) {
                        // use computed to leverage its lazy-caching mechanism
                        // direct inline function use will lead to closure preserving oldVm.
                        // using partial to return function with only arguments preserved in closure environment.
                        ((a[n] = (function (t, e) {
                            return function () {
                                return t(e);
                            };
                        })(e, t)),
                            Object.defineProperty(t.getters, n, {
                                get: function () {
                                    return t._vm[n];
                                },
                                enumerable: !0,
                            }));
                    });
                    // use a Vue instance to store the state tree
                    // suppress warnings just in case the user has added
                    // some funky global mixins
                    var c = f.config.silent;
                    ((f.config.silent = !0),
                        (t._vm = new f({ data: { $$state: e }, computed: a })),
                        (f.config.silent = c),
                        // enable strict mode for new vm
                        t.strict &&
                            (function (t) {
                                t._vm.$watch(
                                    function () {
                                        return this._data.$$state;
                                    },
                                    function () {
                                        0;
                                    },
                                    { deep: !0, sync: !0 },
                                );
                            })(t),
                        r &&
                            (n &&
                                // dispatch changes in all subscribed watchers
                                // to force getter re-evaluation for hot reloading.
                                t._withCommit(function () {
                                    r._data.$$state = null;
                                }),
                            f.nextTick(function () {
                                return r.$destroy();
                            })));
                }
                function g(t, e, n, r, o) {
                    var i = !n.length,
                        a = t._modules.getNamespace(n);
                    // set state
                    if (
                        // register in namespace map
                        (r.namespaced && (t._modulesNamespaceMap[a], (t._modulesNamespaceMap[a] = r)), !i && !o)
                    ) {
                        var c = y(e, n.slice(0, -1)),
                            s = n[n.length - 1];
                        t._withCommit(function () {
                            f.set(c, s, r.state);
                        });
                    }
                    var u = (r.context =
                        /**
                         * make localized dispatch, commit, getters and state
                         * if there is no namespace, just use root ones
                         */
                        (function (t, e, n) {
                            var r = "" === e,
                                o = {
                                    dispatch: r
                                        ? t.dispatch
                                        : function (n, r, o) {
                                              var i = _(n, r, o),
                                                  a = i.payload,
                                                  c = i.options,
                                                  s = i.type;
                                              return ((c && c.root) || (s = e + s), t.dispatch(s, a));
                                          },
                                    commit: r
                                        ? t.commit
                                        : function (n, r, o) {
                                              var i = _(n, r, o),
                                                  a = i.payload,
                                                  c = i.options,
                                                  s = i.type;
                                              ((c && c.root) || (s = e + s), t.commit(s, a, c));
                                          },
                                };
                            // getters and state object must be gotten lazily
                            // because they will be changed by vm update
                            return (
                                Object.defineProperties(o, {
                                    getters: {
                                        get: r
                                            ? function () {
                                                  return t.getters;
                                              }
                                            : function () {
                                                  return (function (t, e) {
                                                      if (!t._makeLocalGettersCache[e]) {
                                                          var n = {},
                                                              r = e.length;
                                                          (Object.keys(t.getters).forEach(function (o) {
                                                              // skip if the target getter is not match this namespace
                                                              if (o.slice(0, r) === e) {
                                                                  // extract local getter type
                                                                  var i = o.slice(r);
                                                                  // Add a port to the getters proxy.
                                                                  // Define as getter property because
                                                                  // we do not want to evaluate the getters in this time.
                                                                  Object.defineProperty(n, i, {
                                                                      get: function () {
                                                                          return t.getters[o];
                                                                      },
                                                                      enumerable: !0,
                                                                  });
                                                              }
                                                          }),
                                                              (t._makeLocalGettersCache[e] = n));
                                                      }
                                                      return t._makeLocalGettersCache[e];
                                                  })(t, e);
                                              },
                                    },
                                    state: {
                                        get: function () {
                                            return y(t.state, n);
                                        },
                                    },
                                }),
                                o
                            );
                        })(t, a, n));
                    (r.forEachMutation(function (e, n) {
                        !(function (t, e, n, r) {
                            var o = t._mutations[e] || (t._mutations[e] = []);
                            o.push(function (e) {
                                n.call(t, r.state, e);
                            });
                        })(t, a + n, e, u);
                    }),
                        r.forEachAction(function (e, n) {
                            var r = e.root ? n : a + n,
                                o = e.handler || e;
                            !(function (t, e, n, r) {
                                var o = t._actions[e] || (t._actions[e] = []);
                                o.push(function (e) {
                                    var o,
                                        i = n.call(
                                            t,
                                            {
                                                dispatch: r.dispatch,
                                                commit: r.commit,
                                                getters: r.getters,
                                                state: r.state,
                                                rootGetters: t.getters,
                                                rootState: t.state,
                                            },
                                            e,
                                        );
                                    return (
                                        ((o = i) && "function" == typeof o.then) || (i = Promise.resolve(i)),
                                        t._devtoolHook
                                            ? i.catch(function (e) {
                                                  throw (t._devtoolHook.emit("vuex:error", e), e);
                                              })
                                            : i
                                    );
                                });
                            })(t, r, o, u);
                        }),
                        r.forEachGetter(function (e, n) {
                            !(function (t, e, n, r) {
                                if (t._wrappedGetters[e]) return void 0;
                                t._wrappedGetters[e] = function (t) {
                                    return n(
                                        r.state, // local state
                                        r.getters, // local getters
                                        t.state, // root state
                                        t.getters,
                                    );
                                };
                            })(t, a + n, e, u);
                        }),
                        r.forEachChild(function (r, i) {
                            g(t, e, n.concat(i), r, o);
                        }));
                }
                function y(t, e) {
                    return e.reduce(function (t, e) {
                        return t[e];
                    }, t);
                }
                function _(t, e, n) {
                    return (a(t) && t.type && ((n = e), (e = t), (t = t.type)), { type: t, payload: e, options: n });
                }
                function b(t) {
                    (f && t === f) ||
                        /*!
                         * vuex v3.6.2
                         * (c) 2021 Evan You
                         * @license MIT
                         */
                        (function (t) {
                            if (Number(t.version.split(".")[0]) >= 2) t.mixin({ beforeCreate: n });
                            else {
                                // override init and inject vuex init procedure
                                // for 1.x backwards compatibility.
                                var e = t.prototype._init;
                                t.prototype._init = function (t) {
                                    (void 0 === t && (t = {}), (t.init = t.init ? [n].concat(t.init) : n), e.call(this, t));
                                };
                            }
                            /**
                             * Vuex init hook, injected into each instances init hooks list.
                             */ function n() {
                                var t = this.$options;
                                // store injection
                                t.store
                                    ? (this.$store = "function" == typeof t.store ? t.store() : t.store)
                                    : t.parent && t.parent.$store && (this.$store = t.parent.$store);
                            }
                        })((f = t));
                }
                /**
                 * Reduce the code which written in Vue.js for getting the state.
                 * @param {String} [namespace] - Module's namespace
                 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
                 * @param {Object}
                 */ ((p.state.get = function () {
                    return this._vm._data.$$state;
                }),
                    (p.state.set = function (t) {
                        0;
                    }),
                    (d.prototype.commit = function (t, e, n) {
                        var r = this,
                            o = _(t, e, n),
                            i = o.type,
                            a = o.payload,
                            c = (o.options, { type: i, payload: a }),
                            s = this._mutations[i];
                        // check object-style commit
                        s &&
                            (this._withCommit(function () {
                                s.forEach(function (t) {
                                    t(a);
                                });
                            }),
                            this._subscribers.slice().forEach(function (t) {
                                return t(c, r.state);
                            }));
                    }),
                    (d.prototype.dispatch = function (t, e) {
                        var n = this,
                            r = _(t, e),
                            o = r.type,
                            i = r.payload,
                            a = { type: o, payload: i },
                            c = this._actions[o];
                        // check object-style dispatch
                        if (c) {
                            try {
                                this._actionSubscribers
                                    .slice()
                                    .filter(function (t) {
                                        return t.before;
                                    })
                                    .forEach(function (t) {
                                        return t.before(a, n.state);
                                    });
                            } catch (t) {
                                0;
                            }
                            var s =
                                c.length > 1
                                    ? Promise.all(
                                          c.map(function (t) {
                                              return t(i);
                                          }),
                                      )
                                    : c[0](i);
                            return new Promise(function (t, e) {
                                s.then(
                                    function (e) {
                                        try {
                                            n._actionSubscribers
                                                .filter(function (t) {
                                                    return t.after;
                                                })
                                                .forEach(function (t) {
                                                    return t.after(a, n.state);
                                                });
                                        } catch (t) {
                                            0;
                                        }
                                        t(e);
                                    },
                                    function (t) {
                                        try {
                                            n._actionSubscribers
                                                .filter(function (t) {
                                                    return t.error;
                                                })
                                                .forEach(function (e) {
                                                    return e.error(a, n.state, t);
                                                });
                                        } catch (t) {
                                            0;
                                        }
                                        e(t);
                                    },
                                );
                            });
                        }
                    }),
                    (d.prototype.subscribe = function (t, e) {
                        return v(t, this._subscribers, e);
                    }),
                    (d.prototype.subscribeAction = function (t, e) {
                        return v("function" == typeof t ? { before: t } : t, this._actionSubscribers, e);
                    }),
                    (d.prototype.watch = function (t, e, n) {
                        var r = this;
                        return this._watcherVM.$watch(
                            function () {
                                return t(r.state, r.getters);
                            },
                            e,
                            n,
                        );
                    }),
                    (d.prototype.replaceState = function (t) {
                        var e = this;
                        this._withCommit(function () {
                            e._vm._data.$$state = t;
                        });
                    }),
                    (d.prototype.registerModule = function (t, e, n) {
                        (void 0 === n && (n = {}),
                            "string" == typeof t && (t = [t]),
                            this._modules.register(t, e),
                            g(this, this.state, t, this._modules.get(t), n.preserveState),
                            // reset store to update getters...
                            m(this, this.state));
                    }),
                    (d.prototype.unregisterModule = function (t) {
                        var e = this;
                        ("string" == typeof t && (t = [t]),
                            this._modules.unregister(t),
                            this._withCommit(function () {
                                var n = y(e.state, t.slice(0, -1));
                                f.delete(n, t[t.length - 1]);
                            }),
                            h(this));
                    }),
                    (d.prototype.hasModule = function (t) {
                        return ("string" == typeof t && (t = [t]), this._modules.isRegistered(t));
                    }),
                    (d.prototype.hotUpdate = function (t) {
                        (this._modules.update(t), h(this, !0));
                    }),
                    (d.prototype._withCommit = function (t) {
                        var e = this._committing;
                        ((this._committing = !0), t(), (this._committing = e));
                    }),
                    Object.defineProperties(d.prototype, p));
                var w = j(function (t, e) {
                        var n = {};
                        return (
                            x(e).forEach(function (e) {
                                var r = e.key,
                                    o = e.val;
                                ((n[r] = function () {
                                    var e = this.$store.state,
                                        n = this.$store.getters;
                                    if (t) {
                                        var r = k(this.$store, "mapState", t);
                                        if (!r) return;
                                        ((e = r.context.state), (n = r.context.getters));
                                    }
                                    return "function" == typeof o ? o.call(this, e, n) : e[o];
                                }),
                                    // mark vuex getter for devtools
                                    (n[r].vuex = !0));
                            }),
                            n
                        );
                    }),
                    O = j(function (t, e) {
                        var n = {};
                        return (
                            x(e).forEach(function (e) {
                                var r = e.key,
                                    o = e.val;
                                n[r] = function () {
                                    for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                                    // Get the commit method from store
                                    var r = this.$store.commit;
                                    if (t) {
                                        var i = k(this.$store, "mapMutations", t);
                                        if (!i) return;
                                        r = i.context.commit;
                                    }
                                    return "function" == typeof o ? o.apply(this, [r].concat(e)) : r.apply(this.$store, [o].concat(e));
                                };
                            }),
                            n
                        );
                    }),
                    C = j(function (t, e) {
                        var n = {};
                        return (
                            x(e).forEach(function (e) {
                                var r = e.key,
                                    o = e.val;
                                // The namespace has been mutated by normalizeNamespace
                                ((o = t + o),
                                    (n[r] = function () {
                                        if (!t || k(this.$store, "mapGetters", t)) return this.$store.getters[o];
                                    }),
                                    // mark vuex getter for devtools
                                    (n[r].vuex = !0));
                            }),
                            n
                        );
                    }),
                    S = j(function (t, e) {
                        var n = {};
                        return (
                            x(e).forEach(function (e) {
                                var r = e.key,
                                    o = e.val;
                                n[r] = function () {
                                    for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
                                    // get dispatch function from store
                                    var r = this.$store.dispatch;
                                    if (t) {
                                        var i = k(this.$store, "mapActions", t);
                                        if (!i) return;
                                        r = i.context.dispatch;
                                    }
                                    return "function" == typeof o ? o.apply(this, [r].concat(e)) : r.apply(this.$store, [o].concat(e));
                                };
                            }),
                            n
                        );
                    });
                /**
                 * Reduce the code which written in Vue.js for committing the mutation
                 * @param {String} [namespace] - Module's namespace
                 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
                 * @return {Object}
                 */
                /**
                 * Normalize the map
                 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
                 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
                 * @param {Array|Object} map
                 * @return {Object}
                 */
                function x(t) {
                    /**
                     * Validate whether given map is valid or not
                     * @param {*} map
                     * @return {Boolean}
                     */
                    return (function (t) {
                        return Array.isArray(t) || a(t);
                    })(
                        /**
                         * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
                         * @param {Function} fn
                         * @return {Function}
                         */ t,
                    )
                        ? Array.isArray(t)
                            ? t.map(function (t) {
                                  return { key: t, val: t };
                              })
                            : Object.keys(t).map(function (e) {
                                  return { key: e, val: t[e] };
                              })
                        : [];
                }
                function j(t) {
                    return function (e, n) {
                        return ("string" != typeof e ? ((n = e), (e = "")) : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, n));
                    };
                }
                /**
                 * Search a special module from store by namespace. if module not exist, print error message.
                 * @param {Object} store
                 * @param {String} helper
                 * @param {String} namespace
                 * @return {Object}
                 */ function k(t, e, n) {
                    return t._modulesNamespaceMap[n];
                }
                // Credits: borrowed code from fcomb/redux-logger
                function $(t, e, n) {
                    var r = n ? t.groupCollapsed : t.group;
                    // render
                    try {
                        r.call(t, e);
                    } catch (n) {
                        t.log(e);
                    }
                }
                function I(t) {
                    try {
                        t.groupEnd();
                    } catch (e) {
                        t.log("—— log end ——");
                    }
                }
                function P() {
                    var t = new Date();
                    return " @ " + E(t.getHours(), 2) + ":" + E(t.getMinutes(), 2) + ":" + E(t.getSeconds(), 2) + "." + E(t.getMilliseconds(), 3);
                }
                function E(t, e) {
                    return ((n = "0"), (r = e - t.toString().length), new Array(r + 1).join(n) + t);
                    var n, r;
                }
                var T = {
                    Store: d,
                    install: b,
                    version: "3.6.2",
                    mapState: w,
                    mapMutations: O,
                    mapGetters: C,
                    mapActions: S,
                    createNamespacedHelpers: function (t) {
                        return { mapState: w.bind(null, t), mapGetters: C.bind(null, t), mapMutations: O.bind(null, t), mapActions: S.bind(null, t) };
                    },
                    createLogger: function (t) {
                        void 0 === t && (t = {});
                        var e = t.collapsed;
                        void 0 === e && (e = !0);
                        var n = t.filter;
                        void 0 === n &&
                            (n = function (t, e, n) {
                                return !0;
                            });
                        var r = t.transformer;
                        void 0 === r &&
                            (r = function (t) {
                                return t;
                            });
                        var i = t.mutationTransformer;
                        void 0 === i &&
                            (i = function (t) {
                                return t;
                            });
                        var a = t.actionFilter;
                        void 0 === a &&
                            (a = function (t, e) {
                                return !0;
                            });
                        var c = t.actionTransformer;
                        void 0 === c &&
                            (c = function (t) {
                                return t;
                            });
                        var s = t.logMutations;
                        void 0 === s && (s = !0);
                        var u = t.logActions;
                        void 0 === u && (u = !0);
                        var l = t.logger;
                        return (
                            void 0 === l && (l = console),
                            function (t) {
                                var f = o(t.state);
                                void 0 !== l &&
                                    (s &&
                                        t.subscribe(function (t, a) {
                                            var c = o(a);
                                            if (n(t, f, c)) {
                                                var s = P(),
                                                    u = i(t),
                                                    d = "mutation " + t.type + s;
                                                ($(l, d, e),
                                                    l.log("%c prev state", "color: #9E9E9E; font-weight: bold", r(f)),
                                                    l.log("%c mutation", "color: #03A9F4; font-weight: bold", u),
                                                    l.log("%c next state", "color: #4CAF50; font-weight: bold", r(c)),
                                                    I(l));
                                            }
                                            f = c;
                                        }),
                                    u &&
                                        t.subscribeAction(function (t, n) {
                                            if (a(t, n)) {
                                                var r = P(),
                                                    o = c(t),
                                                    i = "action " + t.type + r;
                                                ($(l, i, e), l.log("%c action", "color: #03A9F4; font-weight: bold", o), I(l));
                                            }
                                        }));
                            }
                        );
                    },
                };
                /* harmony default export */ e.a = T;
            }).call(this, n(39));
            /***/
        },
        /***/ 213: /***/ function (t, e) {
            t.exports = function (t) {
                return (
                    t.webpackPolyfill ||
                        ((t.deprecate = function () {}),
                        (t.paths = []),
                        // module.parent = undefined by default
                        t.children || (t.children = []),
                        Object.defineProperty(t, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return t.l;
                            },
                        }),
                        Object.defineProperty(t, "id", {
                            enumerable: !0,
                            get: function () {
                                return t.i;
                            },
                        }),
                        (t.webpackPolyfill = 1)),
                    t
                );
            };
            /***/
        },
        /***/ 231: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(411);
            /* harmony default export */ e.a = function (t) {
                var e = t.route,
                    n = t.$config,
                    o = t.store,
                    i = Object(r.a)(),
                    a = "production" === n.DEPLOY_ENV;
                (i.addReporter({
                    log: function (t) {
                        o.commit("errorHandle/addConsole", t);
                    },
                }),
                    a && (i.level = 0),
                    a && e.query.debug && (i.level = 5),
                    i.wrapConsole());
            };
        },
        /***/ 232: /***/ function (t, e, n) {
            "use strict";
            /* harmony default export */ e.a = function (t) {
                t.store.commit("loading/start", performance.now());
            };
        },
        /***/ 233: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(62);
            /* harmony default export */ e.a = function (t) {
                var e = t.$axios,
                    n = t.store,
                    o = t.req,
                    i = t.$config,
                    a = Object(r.a)(o, i.NEW_WEB_API_URL);
                (e.setBaseURL(a), n.commit("SET_WEB_API_URL", a));
            };
        },
        /***/ 234: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(15),
                o = (n(25), n(14), n(24), n(18), n(3));
            /* harmony import */
            /* harmony default export */ e.a = function (t, e) {
                var i = t.app;
                // 使用 import() 但不 await
                // 不阻塞 plugin 初始化
                // 註冊元件的 Promise
                return (
                    Promise.all([
                        Promise.all(/* import() */ [n.e(1), n.e(0), n.e(2)]).then(n.t.bind(null, 697, 7)),
                        Promise.all(/* import() */ [n.e(1), n.e(0), n.e(2)]).then(n.t.bind(null, 698, 7)),
                        Promise.all(/* import() */ [n.e(1), n.e(0), n.e(2)]).then(n.t.bind(null, 699, 7)),
                        Promise.all(/* import() */ [n.e(1), n.e(0), n.e(2)]).then(n.t.bind(null, 700, 7)),
                        Promise.all(/* import() */ [n.e(1), n.e(0), n.e(2)]).then(n.t.bind(null, 701, 7)),
                        Promise.all(/* import() */ [n.e(1), n.e(0), n.e(2)]).then(n.t.bind(null, 702, 7)),
                    ]).then(function (t) {
                        var n = Object(r.a)(t, 3),
                            a = n[0],
                            c = n[1],
                            s = n[2];
                        (o.default.component(a.default.name, a.default),
                            o.default.component(c.default.name, c.default),
                            e("message", s.default),
                            (i.$message = s.default));
                    }),
                    Promise.resolve()
                );
            };
        },
        /***/ 235: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(4),
                o = n(5),
                i = (n(28), n(14), n(18), n(20), n(16), n(21), n(8), n(9), n(6), n(11), n(12), n(88)),
                a = n(61);
            /* harmony import */ function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? c(Object(n), !0).forEach(function (e) {
                              Object(r.a)(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : c(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            // import https from 'https'
            // 使用動態導入替換靜態導入
            /* harmony default export */ e.a = (function () {
                var t = Object(o.a)(
                    regeneratorRuntime.mark(function t(e, r) {
                        var c, u, l, f, d, p, v, h, m, g, y, _;
                        return regeneratorRuntime.wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            (c = e.$axios),
                                            (u = e.store),
                                            (l = e.route),
                                            (f = e.app),
                                            (d = e.$config),
                                            e.redirect,
                                            (p = {}), // 動態導入所需模組
                                            (t.next = 4),
                                            Promise.resolve().then(n.t.bind(null, 221, 7))
                                        );
                                    case 4:
                                        return (
                                            (v = t.sent),
                                            (h = v.default),
                                            (t.next = 8),
                                            Promise.all(/* import() */ [n.e(1), n.e(0), n.e(2)]).then(n.bind(null, 252))
                                        );
                                    case 8:
                                        ((m = t.sent),
                                            (g = m.isArray),
                                            (y = m.isObject), // 需要連線自簽憑證時才需要，目前都直接連測試機，固不需要
                                            // dfApi.onResponse((config) => {
                                            //   // 開發環境不驗證 https 憑證
                                            //   if (process.env.NODE_ENV === 'development') {
                                            //     config.httpsAgent = new https.Agent({
                                            //       rejectUnauthorized: false
                                            //     })
                                            //   }
                                            //   return config
                                            // })
                                            (_ = c.create({
                                                timeout: 6e4,
                                                paramsSerializer: function (t) {
                                                    return h.stringify(t, { arrayFormat: "none" });
                                                },
                                            })).onResponse(function (t) {
                                                // debug config.isGlobal
                                                // console.log(
                                                //   `${response.config.url} config.isGlobal: ${response.config.isGlobal}`,
                                                //   response.config
                                                // )
                                                // trigger error
                                                // if (response.config.url.includes('ranking-history')) { response.data.Code = 9100 }
                                                return 0 !== t.data.Code ? Promise.reject(t) : Promise.resolve(t.data.Data);
                                            }),
                                            _.onResponseError(
                                                (function () {
                                                    var t = Object(o.a)(
                                                        regeneratorRuntime.mark(function t(e) {
                                                            var n, r, o, i;
                                                            return regeneratorRuntime.wrap(function (t) {
                                                                for (;;)
                                                                    switch ((t.prev = t.next)) {
                                                                        case 0:
                                                                            // 如果是驗證錯誤或api端有錯誤，重設 store 並導到錯誤頁面
                                                                            if (
                                                                                (console.log("API ResponseError:", e.data ? e.data : e),
                                                                                console.log(
                                                                                    "["
                                                                                        .concat(e.config.method, "]")
                                                                                        .concat(e.config.isGlobal ? "[global]" : "", " ")
                                                                                        .concat(e.config.baseURL)
                                                                                        .concat(e.config.url),
                                                                                    e,
                                                                                ),
                                                                                // console.log(response.headers['x-trace'])
                                                                                // 新增後端 api header 上的追縱碼，加到 api 回應的 data 內，讓各級錯誤元件能顯示
                                                                                null !== (n = e.headers) &&
                                                                                    void 0 !== n &&
                                                                                    n["x-trace"] &&
                                                                                    (e.data.Trace = e.headers["x-trace"]),
                                                                                !e.config.isGlobal ||
                                                                                    (9101 !== e.data.Code &&
                                                                                        // HTTP 401
                                                                                        9100 !== e.data.Code))
                                                                            ) {
                                                                                t.next = 9;
                                                                                break;
                                                                            }
                                                                            return ((t.next = 6), u.commit("cookies/RESET_STORE"));
                                                                        case 6:
                                                                            ((i = { redirect: l.fullPath, m: e.data.Code }),
                                                                                null !== (r = e.headers) &&
                                                                                    void 0 !== r &&
                                                                                    r["x-trace"] &&
                                                                                    (i.trace = e.headers["x-trace"]),
                                                                                null !== (o = l.name) && void 0 !== o && o.includes("error")
                                                                                    ? console.log("已經在錯誤頁，不轉導")
                                                                                    : window.onNuxtReady(function () {
                                                                                          window.$nuxt.$router.push({ path: f.localePath("/error"), query: i });
                                                                                      }));
                                                                        case 9:
                                                                            return t.abrupt("return", Promise.reject(e.data));
                                                                        case 10:
                                                                        case "end":
                                                                            return t.stop();
                                                                    }
                                                            }, t);
                                                        }),
                                                    );
                                                    return function (e) {
                                                        return t.apply(this, arguments);
                                                    };
                                                })(),
                                            ),
                                            /**
                                             * 送出前端 log 至後端
                                             * 觸發端目前寫在 plugin/nuxtReady.js 的 vue 全域錯誤處理
                                             */
                                            (p.sendFrontendLog = function (t, e) {
                                                // 沒有設定 log api 的設定就不執行
                                                if (d.LOG_API_URL) {
                                                    var n = {
                                                        SiteId: "dfw_web",
                                                        DeployVersion: d.DEPLOY_ENV,
                                                        Lang: u.getters.lang,
                                                        Identity: "" + u.getters.accountId || null,
                                                    };
                                                    if (g(t)) {
                                                        var r = t.map(function (t) {
                                                            var r = JSON.stringify({ stack: t.Trace, console: e || null });
                                                            return Object(i.a)(s(s({}, t), {}, { Trace: r }), n);
                                                        });
                                                        // beforeunload 要用的話，需使用 fetch api
                                                        return (
                                                            fetch("".concat(d.LOG_API_URL, "/log/js-web-list"), {
                                                                method: "POST",
                                                                body: JSON.stringify(r),
                                                                headers: new Headers({ "Content-Type": "application/json" }),
                                                                keepalive: !0,
                                                            }).catch(function () {}),
                                                            void u.commit("errorHandle/emptyLogs")
                                                        );
                                                    }
                                                    if (y(t)) {
                                                        var o = JSON.stringify({ stack: t.Trace, console: e || null }),
                                                            a = Object(i.a)(s(s({}, t), {}, { Trace: o }), n);
                                                        // beforeunload 要用的話，需使用 fetch api
                                                        (fetch("".concat(d.LOG_API_URL, "/log/js-web"), {
                                                            method: "POST",
                                                            body: JSON.stringify(a),
                                                            headers: new Headers({ "Content-Type": "application/json" }),
                                                            keepalive: !0,
                                                        }).catch(function () {}),
                                                            u.commit("errorHandle/emptyLogs"));
                                                    }
                                                }
                                            }),
                                            /**
                                             * 取得遊戲列表
                                             * @returns {Promise<object>} 遊戲列表
                                             */
                                            (p.getGameInfoList = function () {
                                                return _.get("/game-setting/game-info-list", { isGlobal: !0 });
                                            }),
                                            /**
                                             * 取得區塊鏈公鏈網址
                                             * @returns {Promise<object>} 區塊鏈公鏈網址
                                             */
                                            (p.getBlockInfoWebUrl = function () {
                                                return _.get("/game-setting/block-info-web-url");
                                            }),
                                            /**
                                             * 取得遊戲群組
                                             * @returns {Promise<object>} 遊戲群組
                                             */
                                            (p.getGameGroup = function () {
                                                return _.get("/game-group");
                                            }),
                                            /**
                                             * 取得入口遊戲列表
                                             * @param {string} apiId
                                             * @param {number} currencyNumber
                                             * @param {string} sac
                                             * @param {string} siteId
                                             * @returns {Promise<object>} 入口遊戲列表
                                             */
                                            (p.getGameEntrance = function (t, e, n, r) {
                                                return Object(a.a)(d.WEB_ID, "getGameEntrance")
                                                    ? _.get("/game-entrance/".concat(t, "/").concat(e, "/").concat(n, "/").concat(r))
                                                    : Promise.resolve([]);
                                            }),
                                            /**
                                             * 取得跑馬燈列表
                                             * @param {string} apiId
                                             * @param {string} lang
                                             * @returns {Promise<object>} 跑馬燈列表
                                             */
                                            (p.getMarquee = function (t, e) {
                                                return Object(a.a)(d.WEB_ID, "getMarquee") ? _.get("/marquee/".concat(t, "/").concat(e)) : Promise.resolve([]);
                                            }),
                                            /**
                                             * 取得輪播列表
                                             * @param {string} apiId
                                             * @param {string} areaId
                                             * @param {string} actionId?
                                             * @param {number} gameNo?
                                             * @returns {Promise<object>} 輪播列表
                                             */
                                            (p.getBanner = function (t, e, n, r) {
                                                return Object(a.a)(d.WEB_ID, "getBanner")
                                                    ? n && r
                                                        ? _.get("/banner/".concat(t, "/").concat(e, "/").concat(n, "/").concat(r))
                                                        : n
                                                          ? _.get("/banner/".concat(t, "/").concat(e, "/lang/").concat(n))
                                                          : _.get("/banner/".concat(t, "/").concat(e))
                                                    : Promise.resolve([]);
                                            }),
                                            /**
                                             * 取得動態賠率
                                             * @param {string} apiId
                                             * @param {string} gameNo
                                             * @param {string} sac
                                             * @returns {Promise<object>} 動態賠率
                                             */
                                            (p.getRtpInfo = function (t, e, n) {
                                                return Object(a.a)(d.WEB_ID, "getRtpInfo")
                                                    ? null != n
                                                        ? _.get("/game-setting/rtp/".concat(t, "/").concat(e, "/").concat(n))
                                                        : _.get("/game-setting/rtp/".concat(t, "/").concat(e))
                                                    : Promise.resolve(null);
                                            }),
                                            /**
                                             * 取得幣別顯示
                                             * @returns {Promise<object>} 幣別顯示
                                             */
                                            (p.getCurrencyDisplay = function () {
                                                return _.get("/currency-display");
                                            }),
                                            /**
                                             * 使用遊戲 token 換取 web api 站台 token
                                             * @param {string} gameToken
                                             * @returns {Promise<object>} token物件
                                             */
                                            (p.getToken = function (t) {
                                                return "{token}" === t ? Promise.resolve(null) : _.post("/token", { Token: t }, { isGlobal: !0 });
                                            }),
                                            /**
                                             * 取得使用者api資訊(已廢棄)
                                             * @param {string} apiId
                                             * @returns {Promise<object>} 使用者api資訊
                                             */
                                            (p.getUserApiInfo = function (t) {
                                                return _.get("/game-setting/user-api-info/".concat(t));
                                            }),
                                            /**
                                             * 取得代理商資訊
                                             * @param {string} key
                                             * @returns {Promise<object>} 代理商資訊
                                             */
                                            (p.getAgentInfo = function (t) {
                                                return _.get("/game-setting/agent-info/".concat(t));
                                            }),
                                            /**
                                             * 取得活動頁轉址
                                             * @param {string} apiId
                                             * @param {string} gameNo
                                             * @returns {Promise<object>} 活動頁轉址
                                             */
                                            (p.getActionUrl = function (t, e, n, r, o) {
                                                var i = "/action/transfer/".concat(t, "/").concat(e, "/").concat(n, "/").concat(o);
                                                return (null != r && (i += "/".concat(r)), _.get(i));
                                            }),
                                            /**
                                             * 取得活動頁排行榜設定
                                             * @param {string} lang 語系
                                             * @param {string} startTime 開始時間
                                             * @param {string} endTime 結束時間
                                             * @param {string} apiId apiId
                                             * @param {string} gameNoList 進戲編號列表
                                             * @param {string} type 類型
                                             * @returns {Promise<object>} 排行榜設定物件
                                             */
                                            (p.getActionPageRankingSetting = function (t, e, n, r, o, i, a) {
                                                var c = { LangId: t, StartDateTime: e, EndDateTime: n, ApiId: r, GameIds: o, Type: i };
                                                return (null != a && (c.Sac = a), _.get("/rank/ranking-setting", { params: c }));
                                            }),
                                            /**
                                             * 取得活動頁排行榜
                                             * @param {string} lang 語系
                                             * @param {number} sn 排行榜編號
                                             * @param {number} currencyNo 幣別編號
                                             * @returns {Promise<object>} 排行榜物件
                                             */
                                            (p.getActionPageRankingHistoryList = function (t, e, n) {
                                                // 如果有 token 就帶入，有token時能取得玩家自身排名
                                                return (
                                                    u.getters.token && _.setToken(u.getters.token, "Bearer"),
                                                    _.get("/rank/ranking-history/".concat(t, "/").concat(e, "/").concat(n))
                                                );
                                            }),
                                            /**
                                             * 取得下架遊戲引導設定
                                             * @param {number} gameNo 遊戲編號
                                             * @returns 下架遊戲引導設定
                                             */
                                            (p.getGuide = function (t, e) {
                                                return _.get("/guide/".concat(t, "/").concat(e));
                                            }),
                                            /**
                                             * 取得維修設定
                                             * @param {number} apiId apiId
                                             * @returns 維修設定物件
                                             */
                                            (p.getRepair = function (t) {
                                                return _.get("/repair/".concat(t));
                                            }),
                                            /**
                                             * 使用遊戲 token 登入已取得遊戲網址
                                             * @param {string} gameToken
                                             * @returns {Promise<object>} token物件
                                             */
                                            (p.tokenLogin = function (t, e, n, r) {
                                                return _.post("/token/login", { Token: t, GameNo: e, IsJPEnabled: n, Lang: r });
                                            }),
                                            /**
                                             * 取得說明頁switch off
                                             * @param {number} apiId apiId
                                             * @returns {Promise<object>} 說明頁switch off物件
                                             */
                                            (p.getSwitchOffInfo = function (t) {
                                                return Object(a.a)(d.WEB_ID, "getSwitchOffInfo")
                                                    ? _.get("/game-setting/switch-off-status/".concat(t))
                                                    : Promise.resolve({});
                                            }),
                                            /**
                                             * 取得活動推廣頁列表
                                             * @param {number} apiId apiId
                                             * @param {langId} langId langId
                                             * @returns {Promise<object>} 說明頁switch off物件
                                             */
                                            (p.getPromoteList = function (t, e, n, r) {
                                                var o = "/action/promote-list/".concat(t, "/").concat(e, "/").concat(r);
                                                return (null != n && (o += "/".concat(n)), _.get(o));
                                            }),
                                            /**
                                             * 取得活動推廣頁列表
                                             * @param {number} apiId apiId
                                             * @param {langId} langId langId
                                             * @returns {Promise<object>} 說明頁switch off物件
                                             */
                                            (p.getLandingList = function (t, e, n, r) {
                                                var o = "/landing/".concat(t, "/").concat(e, "/").concat(r);
                                                return (null != n && (o += "/".concat(n)), _.get(o));
                                            }),
                                            /**
                                             * 取得遊戲推廣設定
                                             * @param {number} apiId API ID
                                             * @param {number} gameNo 遊戲編號
                                             * @param {string} lang 語系 ID
                                             * @param {number} sac SAC
                                             * @returns {Promise<object>} 遊戲推廣設定 Promise 物件
                                             */
                                            (p.getActionPromoteGameList = function (t, e, n, r) {
                                                var o = "/action/promote-game-list/".concat(t, "/").concat(e, "/").concat(n);
                                                return (null != r && (o += "/".concat(r)), _.get(o));
                                            }),
                                            /**
                                             * 取得TADA API ID 列表，給說明頁使用
                                             * @returns TADA API ID 列表
                                             */
                                            (p.getTadaApiIdList = function () {
                                                return _.get("/game-setting/tada-api-id-list");
                                            }),
                                            (p.getEventList = function (t, e) {
                                                return _.get("/event/".concat(t, "/").concat(e))
                                                    .then(function (t) {
                                                        return (
                                                            (t.PrizeList = t.PrizeList.map(function (t) {
                                                                return (
                                                                    (t.imgSrc = "/images/event/prizes/prize_".concat(t.PrizeNo, ".png")),
                                                                    (t.displayDescI18n = "i18_EVENT_PRIZE_"
                                                                        .concat(
                                                                            "TADA" === d.WEB_ID && t.PrizeNo >= 1 && t.PrizeNo <= 5 ? "TADA_NAME" : "NAME",
                                                                            "_",
                                                                        )
                                                                        .concat(t.PrizeNo)),
                                                                    (t.displayAmount = "X ".concat(t.PrizeAmount)),
                                                                    t.PrizeNo > 300 &&
                                                                        t.PrizeNo < 400 &&
                                                                        ((t.imgSrc = "/images/event/prizes/prize_300.png"),
                                                                        (t.displayAmount = f.$utils.formatNumberKMBT(t.PrizeAmount, 3, { k: !1 })),
                                                                        (t.symbol = f.i18n.t(t.displayDescI18n))),
                                                                    t
                                                                );
                                                            })),
                                                            t
                                                        );
                                                    })
                                                    .catch(function (t) {
                                                        return (console.log("getEventList catch: ", t), t);
                                                    });
                                            }),
                                            /**
                                             * 取得SymbolStyle 列表
                                             * @returns SymbolStyle 列表
                                             */
                                            (p.getSymbolStyleList = function () {
                                                return _.get("/symbol-style");
                                            }),
                                            /**
                                             * 取得giftcode
                                             * @param {string} guid guid
                                             * @returns {Promise<object>} giftcode
                                             */
                                            (p.getGiftcode = function (t) {
                                                return _.get("/giftcode/get/".concat(t));
                                            }),
                                            /**
                                             * 寄送取得giftcode的email
                                             * @param {int} eventId eventId
                                             * @param {string} templateId templateId
                                             * @param {string} email email
                                             * @returns {Promise<object>} 狀態沒有錯誤就是成功
                                             */
                                            (p.sendGiftcodeEmail = function (t) {
                                                var e = t.eventId,
                                                    n = t.templateId,
                                                    r = t.email,
                                                    o = t.configSet;
                                                return _.post("/giftcode/send-email/".concat(e), { Email: r, TemplateId: n, AwsConfigSetName: o });
                                            }),
                                            /**
                                             * 記錄頁面載入時間
                                             * @param {string} PageKey 頁面名稱
                                             * @param {float} PageInitTime 頁面初始化時間
                                             * @param {float} PageCompleteTime 頁面完成時間
                                             * @returns {Promise<object>} 狀態沒有錯誤就是成功
                                             */
                                            (p.logPageLoadingTime = function (t) {
                                                var e = t.PageKey,
                                                    n = t.PageInitTime,
                                                    r = t.PageCompleteTime,
                                                    o = parseInt(n),
                                                    i = parseInt(r);
                                                return _.post("/page-time", { PageKey: e, PageInitTime: o, PageCompleteTime: i });
                                            }),
                                            r("dfApi", p));
                                    case 43:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    }),
                );
                return function (e, n) {
                    return t.apply(this, arguments);
                };
            })();
        },
        /***/ 236: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(5),
                o = (n(28), n(14), n(18), n(20), n(16), n(21), n(36), n(221)),
                i = n.n(o),
                a = n(40),
                c = n.n(a),
                s = n(61);
            /* harmony import */
            /* eslint-disable prefer-promise-reject-errors */
            // import https from 'https'
            // 替換 moment 為 dayjs
            // 帶入身分的 API
            /* harmony default export */ e.a = function (t, e) {
                var n = t.$axios,
                    o = t.store,
                    a = (t.redirect, t.app),
                    u = (t.req, t.route),
                    l = t.$config,
                    f = n.create({
                        timeout: 6e4,
                        paramsSerializer: function (t) {
                            return i.a.stringify(t, { arrayFormat: "none" });
                        },
                    }),
                    d = {};
                (f.onRequest(function (t) {
                    // 需要連線自簽憑證時才需要，目前都直接連測試機，固不需要
                    // 開發環境不驗證 https 憑證
                    // if (process.env.NODE_ENV === 'development') {
                    //   config.httpsAgent = new https.Agent({
                    //     rejectUnauthorized: false
                    //   })
                    // }
                    return (o.getters.token && f.setToken(o.getters.token, "Bearer"), t);
                }),
                    f.onResponse(function (t) {
                        // debug config.isGlobal 查看是否全域的api
                        // console.log(
                        //   `${response.config.url} config.isGlobal: ${response.config.isGlobal}`,
                        //   response.config
                        // )
                        // 手動觸發錯誤
                        // if (response.config.url.includes('get-detail-info')) { response.data.Code = 9100 }
                        return 0 !== t.data.Code ? Promise.reject(t) : Promise.resolve(t.data.Data);
                    }),
                    f.onResponseError(
                        (function () {
                            var t = Object(r.a)(
                                regeneratorRuntime.mark(function t(e) {
                                    var n, r, i, c, s;
                                    return regeneratorRuntime.wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    // 如果是驗證錯誤或api端有錯誤，重設 store 並導到錯誤頁面
                                                    if (
                                                        (console.log("API ResponseError:", e.data),
                                                        (r = !0), // 記錄錯誤網址
                                                        console.log(
                                                            "["
                                                                .concat(e.config.method, "]")
                                                                .concat(e.config.isGlobal ? "[global]" : "", " ")
                                                                .concat(e.config.baseURL)
                                                                .concat(e.config.url),
                                                            e,
                                                        ),
                                                        // console.log(response.headers['x-trace'])
                                                        // 新增後端 api header 上的追縱碼，加到 api 回應的 data 內，讓各級錯誤元件能顯示
                                                        null !== (n = e.headers) && void 0 !== n && n["x-trace"] && (e.data.Trace = e.headers["x-trace"]),
                                                        // 顯示錯誤邏輯，列出例外不顯示的
                                                        "/member/vip-setting" === e.config.url && 1005 === e.data.Code && (r = !1),
                                                        r &&
                                                            // 提示使用者錯誤訊息
                                                            a.$message({ message: e.data.Message, type: "error" }),
                                                        !e.config.isGlobal ||
                                                            (9101 !== e.data.Code &&
                                                                // HTTP 401
                                                                9100 !== e.data.Code))
                                                    ) {
                                                        t.next = 12;
                                                        break;
                                                    }
                                                    return ((t.next = 9), o.commit("cookies/RESET_STORE"));
                                                case 9:
                                                    ((s = { redirect: u.fullPath, m: e.data.Code }),
                                                        null !== (i = e.headers) && void 0 !== i && i["x-trace"] && (s.trace = e.headers["x-trace"]),
                                                        null !== (c = u.name) && void 0 !== c && c.includes("error")
                                                            ? console.log("已經在錯誤頁，不轉導")
                                                            : window.onNuxtReady(function () {
                                                                  window.$nuxt.$router.push({ path: a.localePath("/error"), query: s });
                                                              }));
                                                case 12:
                                                    return t.abrupt("return", Promise.reject(e.data));
                                                case 13:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                }),
                            );
                            return function (e) {
                                return t.apply(this, arguments);
                            };
                        })(),
                    ),
                    /**
                     * 取得歷程頁排行榜設定
                     * @param {string} lang 語系
                     * @param {Number} lang 語系
                     * @returns {Promise<object>} 排行榜設定物件
                     */
                    (d.getRankingSetting = function (t, e) {
                        var n = "/rank/ranking-setting/".concat(t);
                        return (null != e && (n += "/".concat(e)), f.get(n));
                    }),
                    /**
                     * 取得歷程頁排行榜
                     * @param {string} lang 語系
                     * @param {number} sn 排行榜編號
                     * @returns {Promise<object>} 排行榜物件
                     */
                    (d.getRankingHistoryList = function (t, e) {
                        return f.get("/rank/ranking-history/".concat(t).concat(e ? "/" + e : ""));
                    }),
                    /**
                     * 取得VIP設定
                     * @returns {Promise<object>} VIP設定
                     */
                    (d.getVIPSetting = function () {
                        return Object(s.a)(l.WEB_ID, "getVIPSetting")
                            ? f.get("/member/vip-setting")
                            : Promise.reject({ Code: -1, Message: "".concat(l.WEB_ID, "環境沒有vip設定") });
                    }),
                    /**
                     * 取得VIP等級
                     * @returns {Promise<object>} VIP等級
                     */
                    (d.getVIPLevel = function () {
                        return f.get("/member/vip-level");
                    }),
                    /**
                     * 暱稱設定是否有開啟
                     * @returns {Promise<object>} 暱稱設定是否有開啟
                     */
                    (d.isNicknameEnable = function () {
                        return Object(s.a)(l.WEB_ID, "isNicknameEnable") ? f.get("/game-setting/is-enable/NickNameEnable") : Promise.resolve({ IsEnable: !1 });
                    }),
                    /**
                     * 取得玩家暱稱
                     * @returns {Promise<object>} 玩家暱稱
                     */
                    (d.getNickname = function () {
                        return f.get("/member/nickname");
                    }),
                    /**
                     * 取得隨機玩家暱稱
                     * @param {string} lang 語系
                     * @returns {Promise<object>} 隨機玩家暱稱
                     */
                    (d.getRandomNickname = function (t) {
                        return f.get("/member/random-nickname/".concat(t));
                    }),
                    /**
                     * 取得獎項
                     * @param {string} lang 語系
                     * @returns {Promise<object>} 獎項
                     */
                    (d.getPrize = function (t) {
                        return f.get("/prize/".concat(t));
                    }),
                    /**
                     * 取得使用者道具
                     * @param {string} lang 語系
                     * @returns {Promise<object>} 使用者道具
                     */
                    (d.getPlayerItemData = function (t) {
                        return Object(s.a)(l.WEB_ID, "getPlayerItemData") ? f.get("/backpack/".concat(t)) : Promise.reject(!1);
                    }),
                    /**
                     * 更新玩家匿稱
                     * @param {string} lang 語系
                     * @param {string} updatedNickname 要更新的暱稱
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.updateNickname = function (t, e) {
                        return f.put("/member/nickname", { LangId: t, Nickname: e });
                    }),
                    /**
                     * 取得歷程列表
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} queryDate 搜尋日期
                     * @param {string} queryMinutes 搜尋分鐘
                     * @param {string} roundIndex 搜尋局號
                     * @param {string} logIndex 搜尋LOG號
                     * @param {number} startRecord 從第幾筆開始搜尋
                     * @param {number} endRecord 搜尋到第幾筆
                     * @param {number} enterTimestamp 進入的時間戳
                     * @param {string} offsetStartTime 批次查詢的開始時間
                     * @param {number} offsetStartRowIndex 批次查詢得開始行數
                     * @param {number} offsetDbIndex 批次查詢的開始 DB
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getHistoryRecord = function (t) {
                        var e = t.gameId,
                            n = t.lang,
                            r = t.apiId,
                            o = t.queryDate,
                            i = t.queryMinutes,
                            s = t.roundIndex,
                            u = t.logIndex,
                            l = t.startRecord,
                            d = t.endRecord,
                            p = t.enterTimestamp,
                            v = t.logIndexAsRoundIndex,
                            h = void 0 !== v && v,
                            m = t.offsetStartTime,
                            g = void 0 === m ? null : m,
                            y = t.offsetStartRowIndex,
                            _ = void 0 === y ? null : y,
                            b = t.offsetDbIndex,
                            w = void 0 === b ? null : b,
                            O = { LangId: n, StartRowIndex: l, EndRowIndex: d, LogIndexAsRoundIndex: h, EnterTime: p };
                        return (
                            s && (O.RoundIndex = s),
                            u && (O.LogIndex = u),
                            o && ((O.Date = o), (O.TimeZoneOffsetMinutes = c()().utcOffset())),
                            i && (O.Minutes = i),
                            // if (gameId === 'coin01' && store.state.detailCreateTime) {
                            //   sendData.CreateTime = store.state.detailCreateTime
                            // }
                            null != g && (O.OffsetStartTime = g),
                            null != _ && (O.OffsetStartRowIndex = _),
                            null != w && (O.OffsetDbIndex = w),
                            f
                                .get("/history/".concat(e, "/get-history-record"), { params: O })
                                .then(function (t) {
                                    return null == t
                                        ? []
                                        : t.map(function (t) {
                                              var e = a.$utils.merge({}, t);
                                              // 大獎圖片
                                              return (
                                                  (e.prizeTypeImage = a.$utils.getPrizeTypeImagePath(e.Type, n, r)),
                                                  // 魚機新增FreeSpinType
                                                  (e.freeSpinImage = a.$utils.getFreeSpinImagePath(e.FreeSpinType, n, r)),
                                                  // 魚機新增道具卡
                                                  (e.typeImage = a.$utils.getFreeSpinImagePath(e.Type, n, r)),
                                                  e
                                              );
                                          });
                                })
                                .catch(function (t) {
                                    return (console.log("get-history-record catch: ", t), t);
                                })
                        );
                    }),
                    /**
                     * 取得歷程列表
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} queryDate 搜尋日期
                     * @param {string} queryMinutes 搜尋分鐘
                     * @param {string} roundIndex 搜尋局號
                     * @param {string} logIndex 搜尋LOG號
                     * @param {number} startRecord 從第幾筆開始搜尋
                     * @param {number} endRecord 搜尋到第幾筆
                     * @param {number} enterTimestamp 進入的時間戳
                     * @param {string} offsetStartTime 批次查詢的開始時間
                     * @param {number} offsetStartRowIndex 批次查詢得開始行數
                     * @param {number} offsetDbIndex 批次查詢的開始 DB
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getGoHistoryRecord = function (t) {
                        var e = t.gameId,
                            n = t.lang,
                            r = t.apiId,
                            o = t.queryDate,
                            i = t.queryMinutes,
                            s = t.roundIndex,
                            u = t.logIndex,
                            l = t.startRecord,
                            d = t.endRecord,
                            p = t.enterTimestamp,
                            v = t.logIndexAsRoundIndex,
                            h = void 0 !== v && v,
                            m = t.offsetStartTime,
                            g = void 0 === m ? null : m,
                            y = t.offsetStartRowIndex,
                            _ = void 0 === y ? null : y,
                            b = t.offsetDbIndex,
                            w = void 0 === b ? null : b,
                            O = { LangId: n, StartRowIndex: l, EndRowIndex: d, LogIndexAsRoundIndex: h, EnterTime: p };
                        return (
                            s && (O.RoundIndex = s),
                            u && (O.LogIndex = u),
                            o && ((O.Date = o), (O.TimeZoneOffsetMinutes = c()().utcOffset())),
                            i && (O.Minutes = i),
                            // if (gameId === 'coin01' && store.state.detailCreateTime) {
                            //   sendData.CreateTime = store.state.detailCreateTime
                            // }
                            null != g && (O.OffsetStartTime = g),
                            null != _ && (O.OffsetStartRowIndex = _),
                            null != w && (O.OffsetDbIndex = w),
                            f
                                .get("/v2/history/".concat(e, "/get-history-record"), { params: O })
                                .then(function (t) {
                                    return null == t
                                        ? []
                                        : t.map(function (t) {
                                              var e = a.$utils.merge({}, t);
                                              // 大獎圖片
                                              return (
                                                  (e.prizeTypeImage = a.$utils.getPrizeTypeImagePath(e.Type, n, r)),
                                                  // 魚機新增FreeSpinType
                                                  (e.freeSpinImage = a.$utils.getFreeSpinImagePath(e.FreeSpinType, n, r)),
                                                  // 魚機新增道具卡
                                                  (e.typeImage = a.$utils.getFreeSpinImagePath(e.Type, n, r)),
                                                  e
                                              );
                                          });
                                })
                                .catch(function (t) {
                                    return (console.log("get-history-record catch: ", t), t);
                                })
                        );
                    }),
                    /**
                     * 取得單筆歷程詳細資料列表
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 局號
                     * @param {string} orderMode 排序方式
                     * @param {number} startRecord 從第幾筆開始搜尋
                     * @param {number} endRecord 搜尋到第幾筆
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getDetailRecord = function (t, e, n, r, o, i, a) {
                        var c = { LangId: e, RoundIndex: n, OrderField: r, StartRowIndex: o, EndRowIndex: i };
                        return (
                            a && (c.LogIndex = a),
                            f
                                .get("/history/".concat(t, "/get-detail-record"), { params: c })
                                .then(function (t) {
                                    return null == t ? [] : t;
                                })
                                .catch(function (t) {
                                    return (console.log("get-detail-record catch: ", t), t);
                                })
                        );
                    }),
                    /**
                     * 取得單筆歷程詳細資料列表
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 局號
                     * @param {string} orderMode 排序方式
                     * @param {number} startRecord 從第幾筆開始搜尋
                     * @param {number} endRecord 搜尋到第幾筆
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getGoDetailRecord = function (t, e, n, r, o, i, a) {
                        var c = { LangId: e, RoundIndex: n, OrderField: r, StartRowIndex: o, EndRowIndex: i };
                        return (
                            a && (c.LogIndex = a),
                            f
                                .get("/v2/history/".concat(t, "/get-detail-record"), { params: c })
                                .then(function (t) {
                                    return null == t ? [] : t;
                                })
                                .catch(function (t) {
                                    return (console.log("get-detail-record catch: ", t), t);
                                })
                        );
                    }),
                    /**
                     * 取得單局明細補充資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @param {string} logIndex 搜尋log號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getDetailInfo = function (t, e, n) {
                        return f
                            .get(
                                "/history/"
                                    .concat(t, "/get-detail-info/")
                                    .concat(e)
                                    .concat(n ? "/" + n : ""),
                            )
                            .catch(function (t) {
                                return t;
                            });
                    }),
                    /**
                     * 取得單局明細補充資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @param {string} logIndex 搜尋log號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getGoDetailInfo = function (t, e, n) {
                        return f
                            .get(
                                "/v2/history/"
                                    .concat(t, "/get-detail-info/")
                                    .concat(e)
                                    .concat(n ? "/" + n : ""),
                            )
                            .catch(function (t) {
                                return t;
                            });
                    }),
                    /**
                     * 取得單局明細詳細資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getDetailRoundIndexInfo = function (t, e) {
                        return f.get("/history/".concat(t, "/get-detail-record/").concat(e)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得單局明細詳細資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getGoDetailRoundIndexInfo = function (t, e) {
                        return f.get("/v2/history/".concat(t, "/get-detail-record/").concat(e)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得sy明細資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getSyDetailInfo = function (t, e) {
                        return f.get("/history/".concat(t, "/get-detail-info/").concat(e)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得被炸彈打到的魚種列表
                     * @param {number} gameId 遊戲id
                     * @param {string} logIndex 搜尋log號
                     * @param {string} bullet 子彈
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getBombDetailRecord = function (t, e, n) {
                        return f.get("/history/".concat(t, "/get-bomb-detail-record/").concat(e, "/").concat(n)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得單筆歷程Log摘要集合
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getRecordSummary = function (t, e, n) {
                        return f.get("/history/".concat(t, "/get-single-round-log-summary/").concat(e, "/").concat(n)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得單筆歷程Log摘要集合
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getGoRecordSummary = function (t, e, n) {
                        return f.get("/v2/history/".concat(t, "/get-single-round-log-summary/").concat(e, "/").concat(n)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得單筆歷程Log盤面資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @param {string} logIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getPlateInfo = function (t, e, n) {
                        return f
                            .get("/history/".concat(t, "/get-log-plate-info/").concat(e, "/").concat(n))
                            .then(function (t) {
                                return Array.isArray(t) && t.length > 0
                                    ? t.map(function (t) {
                                          var e = a.$utils.merge({}, t),
                                              n = e.SymbolLength ? e.SymbolLength.split("") : [],
                                              r = e.PlateNumStr ? e.PlateNumStr.split(",") : [],
                                              o = e.PlateMult ? e.PlateMult.split(",") : [];
                                          // 整理盤面資訊
                                          return (
                                              (e.plateGrid = e.Plate.split("").map(function (t, e) {
                                                  var i = { symbol: t, selected: null },
                                                      a = n[e],
                                                      c = r[e],
                                                      s = o[e];
                                                  return (
                                                      a && (i.symbolLength = a),
                                                      // lbingo 金幣數字
                                                      c && (i.plateNum = c),
                                                      // 每格倍率
                                                      s && (i.plateMult = "0" === s ? null : s),
                                                      i
                                                  );
                                              })),
                                              e
                                          );
                                      })
                                    : [];
                            })
                            .catch(function (t) {
                                return t;
                            });
                    }),
                    /**
                     * 取得單筆歷程Log盤面資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @param {string} logIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getGoPlateInfo = function (t, e, n) {
                        return f
                            .get("/v2/history/".concat(t, "/get-log-plate-info/").concat(e, "/").concat(n))
                            .then(function (t) {
                                return Array.isArray(t) && t.length > 0
                                    ? t.map(function (t) {
                                          var e = a.$utils.merge({}, t),
                                              n = e.SymbolLength ? e.SymbolLength.split("") : [],
                                              r = e.PlateNumStr ? e.PlateNumStr.split(",") : [],
                                              o = e.PlateMult ? e.PlateMult.split(",") : [];
                                          // 整理盤面資訊
                                          return (
                                              (e.plateGrid = e.Plate.split("").map(function (t, e) {
                                                  var i = { symbol: t, selected: null },
                                                      a = n[e],
                                                      c = r[e],
                                                      s = o[e];
                                                  return (
                                                      a && (i.symbolLength = a),
                                                      // lbingo 金幣數字
                                                      c && (i.plateNum = c),
                                                      // 每格倍率
                                                      s && (i.plateMult = "0" === s ? null : s),
                                                      i
                                                  );
                                              })),
                                              e
                                          );
                                      })
                                    : [];
                            })
                            .catch(function (t) {
                                return t;
                            });
                    }),
                    /**
                     * 取得單筆歷程Log盤面資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @param {string} langId 語言
                     * @param {string} time 時間
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getCSV2PlateInfo = function (t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        return f
                            .get("/history/".concat(t, "/get-log-plate-info/").concat(e, "/").concat(n, "/").concat(r))
                            .then(function (t) {
                                return Array.isArray(t) && t.length > 0
                                    ? t.map(function (t) {
                                          var e = a.$utils.merge({}, t),
                                              n = e.Plate;
                                          return (
                                              n.forEach(function (t) {
                                                  // 整理盤面資訊
                                                  var e = t.SymbolLength ? t.SymbolLength.split("") : [],
                                                      n = t.PlateNumStr ? t.PlateNumStr.split(",") : [],
                                                      r = t.PlateMult ? t.PlateMult.split(",") : [],
                                                      o = t.FrameStr ? t.FrameStr.split(",") : [];
                                                  // lbingo 金幣數字
                                                  t.plateGrid = t.Plate.split("").map(function (t, i) {
                                                      var a = { symbol: t, selected: null },
                                                          c = e[i],
                                                          s = n[i],
                                                          u = r[i],
                                                          l = o[i];
                                                      return (
                                                          c && (a.symbolLength = c),
                                                          // lbingo 金幣數字
                                                          s && (a.plateNum = s),
                                                          // 每格倍率
                                                          u && (a.plateMult = "0" === u ? null : u),
                                                          // 盤面乘倍框倍率
                                                          l && (a.frameMult = "1" === l || "0" === l ? null : l),
                                                          a
                                                      );
                                                  });
                                              }),
                                              (e.plate = n),
                                              e
                                          );
                                      })
                                    : [];
                            })
                            .catch(function (t) {
                                return t;
                            });
                    }),
                    /**
                     * 取得單筆歷程Log盤面資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @param {string} langId 語言
                     * @param {string} time 時間
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getGoCSV2PlateInfo = function (t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        return f
                            .get("/v2/history/".concat(t, "/get-log-plate-info/").concat(e, "/").concat(n, "/").concat(r))
                            .then(function (t) {
                                return Array.isArray(t) && t.length > 0
                                    ? t.map(function (t) {
                                          var e = a.$utils.merge({}, t),
                                              n = e.Plate;
                                          return (
                                              n.forEach(function (t) {
                                                  // 整理盤面資訊
                                                  var e = t.SymbolLength ? t.SymbolLength.split("") : [],
                                                      n = t.PlateNumStr ? t.PlateNumStr.split(",") : [],
                                                      r = t.PlateMult ? t.PlateMult.split(",") : [],
                                                      o = t.FrameStr ? t.FrameStr.split(",") : [];
                                                  // lbingo 金幣數字
                                                  t.plateGrid = t.Plate.split("").map(function (t, i) {
                                                      var a = { symbol: t, selected: null },
                                                          c = e[i],
                                                          s = n[i],
                                                          u = r[i],
                                                          l = o[i];
                                                      return (
                                                          c && (a.symbolLength = c),
                                                          // lbingo 金幣數字
                                                          s && (a.plateNum = s),
                                                          // 每格倍率
                                                          u && (a.plateMult = "0" === u ? null : u),
                                                          // 盤面乘倍框倍率
                                                          l && (a.frameMult = "1" === l || "0" === l ? null : l),
                                                          a
                                                      );
                                                  });
                                              }),
                                              (e.plate = n),
                                              e
                                          );
                                      })
                                    : [];
                            })
                            .catch(function (t) {
                                return t;
                            });
                    }),
                    /**
                     * 取得單筆輪盤歷程Log盤面資訊
                     * @param {string} lang 語系id
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @param {string} historyId 歷史編號(對應開獎資訊)
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getRouletteInfo = function (t) {
                        var e = t.lang,
                            n = t.gameId,
                            r = t.roundIndex,
                            o = t.historyId;
                        return f.get("/history/".concat(n, "/get-detail-info/").concat(e, "/").concat(r, "/").concat(o)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得TP類型單筆歷程盤面資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getTpPlateInfo = function (t, e) {
                        return f.get("/history/".concat(t, "/get-plate-info/").concat(e)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得TP類型單筆歷程逐步下注資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getTpStepDetailRecords = function (t, e) {
                        return f.get("/history/".concat(t, "/get-step-detail-record/").concat(e)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得單筆彩票歷程Log盤面資訊
                     * @param {stirng}} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getMinigame1Info = function (t) {
                        var e = t.gameId,
                            n = t.roundIndex;
                        return f.get("/history/".concat(e, "/get-log-plate-info/").concat(n)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得bingo單筆歷程Log所有(掉落球、追加球、賓果卡)資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getBingoInfo = function (t) {
                        var e = t.lang,
                            n = t.gameId,
                            r = t.roundIndex;
                        return f
                            .get("/history/".concat(n, "/get-detail-info/").concat(e, "/").concat(r))
                            .then(function (t) {
                                var e,
                                    n,
                                    r = a.$utils.merge({}, t);
                                // 將 Cards 內容重組成跟 summaryList 一樣
                                return (
                                    (r.Cards =
                                        (null == r || null === (e = r.Cards) || void 0 === e
                                            ? void 0
                                            : e.map(function (t) {
                                                  var e,
                                                      n,
                                                      r = [],
                                                      o =
                                                          (null === (e = t.Balls) || void 0 === e
                                                              ? void 0
                                                              : e.map(function (t) {
                                                                    return {
                                                                        selected: null,
                                                                        Number: t.Number,
                                                                        Color: t.Color,
                                                                        Bonus: t.Bonus || 0,
                                                                        BonusBallList: t.BonusBallList || null,
                                                                    };
                                                                })) || [],
                                                      i =
                                                          (null === (n = t.Awards) || void 0 === n
                                                              ? void 0
                                                              : n.map(function (t) {
                                                                    return { S: t.Number, Award: t.Line, L: t.Odds, W: t.Win };
                                                                })) || [];
                                                  return ((r[0] = { plateGrid: o, List: i }), { plate: r, Win: t.Win });
                                              })) || []),
                                    null === (n = r.Bonus) ||
                                        void 0 === n ||
                                        n.forEach(function (t, e) {
                                            var n;
                                            t.Cards =
                                                (null === (n = t.Cards) || void 0 === n
                                                    ? void 0
                                                    : n.map(function (t) {
                                                          var n,
                                                              r,
                                                              o = [],
                                                              i =
                                                                  (null === (n = t.Balls) || void 0 === n
                                                                      ? void 0
                                                                      : n.map(function (t) {
                                                                            return { selected: null, Number: t.Number, Color: t.Color, Bonus: t.Bonus || 0 };
                                                                        })) || [],
                                                              a =
                                                                  (null === (r = t.Awards) || void 0 === r
                                                                      ? void 0
                                                                      : r.map(function (t) {
                                                                            return { S: t.Number, Award: t.Line, L: t.Odds, W: t.Win };
                                                                        })) || [];
                                                          return ((o[0] = { plateGrid: i, List: a }), { plate: o, Win: t.Win, isBonus: !0, bonusIndex: e });
                                                      })) || [];
                                        }),
                                    r
                                );
                            })
                            .catch(function (t) {
                                return t;
                            });
                    }),
                    /**
                     * 取得單筆押分機歷程Log盤面資訊
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getDtmDetailInfo = function (t) {
                        var e = t.gameId,
                            n = t.roundIndex;
                        return f.get("/history/".concat(e, "/get-detail-info/").concat(n)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得sudm單筆押分機歷程Log盤面資訊
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getSudmDetailInfo = function (t) {
                        var e = t.lang,
                            n = t.gameId,
                            r = t.roundIndex;
                        return f.get("/history/".concat(n, "/get-detail-info/").concat(e, "/").concat(r)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得sudm單筆押分機歷程Log盤面資訊
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getGoSudmDetailInfo = function (t) {
                        var e = t.lang,
                            n = t.gameId,
                            r = t.roundIndex;
                        return f.get("/v2/history/".concat(n, "/get-detail-info/").concat(e, "/").concat(r)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得 sicbom 單筆押分機歷程 Log 盤面資訊
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getSicbomDetailInfo = function (t) {
                        var e = t.lang,
                            n = t.gameId,
                            r = t.roundIndex;
                        return f.get("/history/".concat(n, "/get-detail-info/").concat(e, "/").concat(r)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得 sicbom 單筆押分機歷程 Log 盤面資訊
                     * @param {string} lang 語系
                     * @param {number} gameId 遊戲id
                     * @param {string} roundIndex 搜尋局號
                     * @returns {Promise<object>} 是否成功
                     */
                    (d.getSicbomBoxDetailInfo = function (t) {
                        var e = t.lang,
                            n = t.gameId,
                            r = t.roundIndex;
                        return f.get("/history/".concat(n, "/get-box-detail-info/").concat(e, "/").concat(r)).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得公平驗證工具資料
                     * @param {string} gameNo 遊戲編號
                     * @param {string} serverSeed 伺服器種子
                     * @param {string} clientSeed 客戶端種子
                     * @param {string} mineCount  炸彈數量
                     * @returns {Promise<object>} 驗證後資料
                     */
                    (d.getFairnessData = function (t) {
                        return f.get("/fairness/steps", { params: t }).catch(function (t) {
                            return t;
                        });
                    }),
                    /**
                     * 取得廠商驗證id
                     * @param {string} RoundIndex 局號
                     * @returns {Promise<object>} 廠商id
                     */
                    (d.getItaAuthId = function (t) {
                        return f.get("/history/get-ita-auth-id/".concat(t)).catch(function (t) {
                            return t;
                        });
                    }),
                    e("dfAuthApi", d));
            };
        },
        /***/ 237: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ (n(18), n(20), n(16));
            /* harmony import */
            var r = n(3);
            /* harmony default export */ e.a = function (t) {
                t.app;
                // Vue.config.warnHandler 在正式環境會被 vue disable 無效所以只用這個 hook 就夠了
                var e = t.store,
                    n = t.route;
                ((r.default.config.errorHandler = function (t, r, o) {
                    var i, a, c, s;
                    (console.log("Logged in Vue global error handler: ", t.name),
                        console.log(
                            "component name: ",
                            null !== (i = null == r || null === (a = r.$options) || void 0 === a ? void 0 : a.name) && void 0 !== i ? i : null,
                        ),
                        console.log("info: ", o),
                        e.commit("errorHandle/addLog", {
                            Url: location.origin + n.fullPath,
                            Message: "前端錯誤: ".concat(o),
                            Component: null !== (c = null == r || null === (s = r.$options) || void 0 === s ? void 0 : s.name) && void 0 !== c ? c : null,
                            Exception: t.message,
                            Trace: t.stack || null,
                        }));
                }),
                    // JS Global Error
                    window.addEventListener("error", function (t, r, o, i, a) {
                        var c;
                        // 如果是 chrome 擴充套件的錯誤，不收集
                        (null != t && null !== (c = t.includes) && void 0 !== c && c.call(t, "chrome-extension")) ||
                            (console.log("JS 錯誤:", t, r, o, i, a),
                            e.commit("errorHandle/addLog", {
                                Url: location.origin + n.fullPath,
                                Message: "前端 JS 錯誤: ".concat(t),
                                Exception: "(Line: ".concat(o, ", Column: ").concat(i, ") ").concat(t),
                                Trace: JSON.stringify(a),
                            }));
                    }),
                    // 其他未被錯誤處理的 hook
                    window.addEventListener("unhandledrejection", function (t) {
                        (console.log("有未處理的 Promise Rejection (UNHANDLED PROMISE REJECTION)", t),
                            e.commit("errorHandle/addLog", {
                                Url: location.origin + n.fullPath,
                                Message: "有未處理的 Promise Rejection (UNHANDLED PROMISE REJECTION): ".concat(t.reason),
                            }));
                    }),
                    // desktop 關閉視窗時，傳送錯誤log
                    window.addEventListener("beforeunload", function (t) {
                        e.dispatch("errorHandle/sendLogs");
                    }),
                    // mobile 關閉視窗時，傳送錯誤log
                    document.addEventListener("visibilitychange", function (t) {
                        "hidden" === document.visibilityState && e.dispatch("errorHandle/sendLogs");
                    }));
            };
        },
        /***/ 238: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(3),
                o = n(397),
                i = n(390);
            /* harmony import */
            // eslint-disable-next-line import/no-named-as-default
            (r.default.use(Object(o.a)()), r.default.use(i.a, { defaultPlacement: "auto", defaultTrigger: "click hover", popover: { defaultAutoHide: !0 } }));
        },
        /***/ 240: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(394);
            /* harmony import */
            /* harmony default export */ e.a = function (t, e) {
                t.req;
                e("ua", new r.UAParser(navigator.userAgent));
            };
        },
        /***/ 241: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(5),
                o = n(15),
                i = (n(28), n(21), n(6), n(20), n(16), n(93), n(22), n(25), n(14), n(24), n(286)),
                a = n.n(i),
                c = n(417),
                s = n(40),
                u = n.n(s),
                l = n(62);
            /* harmony import */
            // 替換 moment 為 dayjs
            /* harmony default export */ e.a = function (t) {
                var e = t.app,
                    i = (t.params, t.$axios),
                    s = t.req,
                    f = t.$config,
                    d = Object(l.a)(s, f.LANG_API_URL),
                    p = function (t, n) {
                        var r = u()().format("YYYYMMDDHHmm"),
                            a =
                                (null == n
                                    ? void 0
                                    : n
                                          .map(function (t) {
                                              return "&GroupIds[]=".concat(t);
                                          })
                                          .join("")) || "",
                            s = "".concat(d, "/language/").concat(t, "?t=").concat(r).concat(a);
                        return i
                            .$get(s, { timeout: 6e4 })
                            .then(function (r) {
                                if (0 !== r.Code) return r;
                                // 處理 style 合併，從 groupIdList 找出有 style 的 key，並合併到 沒有 style 的 key
                                var i =
                                    (null == n
                                        ? void 0
                                        : n.filter(function (t) {
                                              return t.toLowerCase().includes("_style");
                                          })) || [];
                                (i.length > 0 &&
                                    i.forEach(function (e) {
                                        for (
                                            var n = Object(c.a)(r.Data[t], function (t, n) {
                                                    return n.includes(e);
                                                }),
                                                i = 0,
                                                a = Object.entries(n);
                                            i < a.length;
                                            i++
                                        ) {
                                            var s = Object(o.a)(a[i], 2),
                                                u = s[0],
                                                l = s[1],
                                                f = u.replace(/_style\w*?_/i, "_");
                                            r.Data[t][f] = l;
                                        }
                                    }),
                                    e.i18n.mergeLocaleMessage(t, r.Data[t]));
                            })
                            .catch(function (t) {
                                console.log("更新多語系資料發生錯誤: ", t);
                            });
                    },
                    v = {
                        "zh-TW": "zh-TW",
                        "zh-CN": "zh-CN",
                        "en-US": "en",
                        "th-TH": "th",
                        "vi-VN": "vi",
                        "id-ID": "id",
                        // 'my-MM': '',
                        "ja-JP": "ja",
                        // 'hi-IN': '',
                        "ta-IN": "ta",
                        // 'ms-MY': '',
                        "ko-KR": "ko",
                        // 'bn-IN': '',
                        "es-AR": "es",
                        "pt-BR": "pt",
                        "de-DE": "de",
                        "sv-SE": "sv-SE",
                        "it-IT": "it",
                        "nl-NL": "nl",
                        "ro-RO": "ro",
                        "da-DK": "da",
                    },
                    h = (function () {
                        var t = Object(r.a)(
                            regeneratorRuntime.mark(function t(e) {
                                var r, o;
                                return regeneratorRuntime.wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return ((r = v[e] || "en"), (t.next = 3), n(684)("./" + r));
                                            case 3:
                                                ((o = t.sent), a.a.use(o.default));
                                            case 5:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            }),
                        );
                        return function (e) {
                            return t.apply(this, arguments);
                        };
                    })();
                // 切換語系時執行更新
                ((e.i18n.onBeforeLanguageSwitch = (function () {
                    var t = Object(r.a)(
                        regeneratorRuntime.mark(function t(e, n) {
                            return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            return (console.log("onBeforeLanguageSwitch newLocale:", n), (t.next = 3), Promise.all([p(n), h(n)]));
                                        case 3:
                                        case "end":
                                            return t.stop();
                                    }
                            }, t);
                        }),
                    );
                    return function (e, n) {
                        return t.apply(this, arguments);
                    };
                })()),
                    (e.i18n.getRemoteLangMessage = p),
                    (e.i18n.changeEelmentUiLocale = h));
            };
        },
        /***/ 242: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(3),
                o = n(395),
                i = n.n(o);
            /* harmony import */ n(692);
            r.default.use(i.a);
        },
        /***/ 244: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ n(55);
            /* harmony import */ var r = n(3);
            /* harmony default export */ e.a = function () {
                var t = {
                    install: function () {
                        window.Clipboard = (function (t, e, n) {
                            var r;
                            function o() {
                                var o, i;
                                n.userAgent.match(/ipad|iphone/i)
                                    ? ((o = e.createRange()).selectNodeContents(r),
                                      (i = t.getSelection()).removeAllRanges(),
                                      i.addRange(o),
                                      r.setSelectionRange(0, 999999))
                                    : r.select();
                            }
                            return {
                                copy: function (t) {
                                    (!(function (t) {
                                        (((r = e.createElement("textArea")).value = t), e.body.appendChild(r));
                                    })(t),
                                        o(),
                                        e.execCommand("Copy"),
                                        e.body.removeChild(r));
                                },
                            };
                        })(window, document, navigator);
                    },
                };
                r.default.use(t);
            };
        },
        /***/ 245: /***/ function (t, e, n) {
            "use strict";
            /* harmony default export */ e.a = function (t, e) {
                var n = t.app,
                    r = t.store,
                    o = t.route,
                    i = function () {
                        (n.$utils.cssVar("mag", n.$utils.cssVar("mag_web")),
                            n.$utils.cssVar("font-size-current", n.$utils.cssVar("font-size-web")),
                            n.$utils.cssVar("font-size-current-md", n.$utils.cssVar("font-size-web-md")),
                            n.$utils.cssVar("font-size-current-xl", n.$utils.cssVar("font-size-web-xl")));
                    },
                    a = function () {
                        (n.$utils.cssVar("mag", n.$utils.cssVar("mag_app")),
                            n.$utils.cssVar("font-size-current", n.$utils.cssVar("font-size-app")),
                            n.$utils.cssVar("font-size-current-md", n.$utils.cssVar("font-size-app-md")),
                            n.$utils.cssVar("font-size-current-xl", n.$utils.cssVar("font-size-app-xl")));
                    },
                    c = function () {
                        (n.$utils.cssVar("mag", n.$utils.cssVar("mag_webapp")),
                            n.$utils.cssVar("font-size-current", n.$utils.cssVar("font-size-webapp")),
                            n.$utils.cssVar("font-size-current-md", n.$utils.cssVar("font-size-webapp-md")),
                            n.$utils.cssVar("font-size-current-xl", n.$utils.cssVar("font-size-webapp-xl")));
                    },
                    s = function () {
                        (n.$utils.cssVar("mag", n.$utils.cssVar("mag_lobby")),
                            n.$utils.cssVar("font-size-current", n.$utils.cssVar("font-size-lobby")),
                            n.$utils.cssVar("font-size-current-md", n.$utils.cssVar("font-size-lobby-md")),
                            n.$utils.cssVar("font-size-current-xl", n.$utils.cssVar("font-size-lobby-xl")));
                    };
                // 給遊戲大廳使用
                e("zoomStyle", {
                    initDefaultAndIntroAndErrorLayout: function () {
                        // 調整 viewport 倍率，因為遊戲會以dpr呈現不同的寬度
                        // adjustViewportScale()
                        // 如果有帶 zoomstyle=web or zoomstyle=app 參數就修改 css 變數
                        var t = o.query.zoomstyle;
                        (r.commit("SET_ZOOM_STYLE", t), "web" === t ? i() : "app" === t ? a() : "webapp" === t ? c() : "lobby" === t && s());
                    },
                    initOtherLayout: function () {
                        // 設定預設字體大小
                        (n.$utils.cssVar("--font-size-current", "16px"),
                            n.$utils.cssVar("--font-size-current-md", "16px"),
                            n.$utils.cssVar("--font-size-current-xl", "16px"));
                    },
                    addLobbyStyle: s,
                    addWebStyle: i,
                    addWebAppStyle: c,
                    addAppStyle: a,
                });
            };
        },
        /***/ 246: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(5),
                o = (n(28), n(22), n(94), n(18), n(20), n(16), n(25), n(14), n(24), n(58));
            /* harmony import */ function i() {
                return (i = Object(r.a)(
                    regeneratorRuntime.mark(function t(e) {
                        var n, r, i, a, c, s, u, l;
                        return regeneratorRuntime.wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0: // 如果是 404 頁面就不執行呼叫 api 的動作
                                        if (
                                            ((n = e.app),
                                            (r = e.store),
                                            (i = e.route),
                                            (a = e.query),
                                            e.isDev,
                                            e.redirect,
                                            (c = e.$config),
                                            !n.router.resolve(i.path.replace("/index.html", "")).route.name.startsWith("all"))
                                        ) {
                                            t.next = 5;
                                            break;
                                        }
                                        return (console.log("serverinit pulgin: stop in page not found"), t.abrupt("return"));
                                    case 5:
                                        // 有帶 token 時將 token 儲存起來
                                        if (
                                            // 同步 cookie 狀態
                                            (r.commit("cookies/SYNC_STORE"),
                                            // 設定目前的語系到cookie
                                            r.commit("cookies/SET_LANG", r.state.i18n.locale),
                                            // 網頁標題、網頁 icon、專案多語系標題、webid、遊戲 icon 廠牌名稱、logo 名稱
                                            r.commit("setVal", {
                                                webId: c.WEB_ID,
                                                projectI18nTitle: c.PROJECT_I18N_TITLE,
                                                projectTitle: c.PROJECT_TITLE,
                                                gameIconBrandFilename: c.GAME_ICON_BRAND_FILENAME,
                                                projectIcon: c.PROJECT_ICON,
                                                projectLogoFilename: c.PROJECT_LOGO_FILENAME,
                                                androidDownloadLink: c.ANDROID_DOWNLOAD_LINK,
                                                gameWebAppUrl: c.GAME_WEB_APP_URL,
                                            }),
                                            // 檢查有沒有帶query有沒有type
                                            a.layout && "nomenu" === a.layout.toLowerCase()
                                                ? r.commit("control/setUseMenu", !1)
                                                : a.layout && "headeronly" === a.layout.toLowerCase()
                                                  ? r.commit("control/setUseHeaderOnly", !0)
                                                  : a.layout && "betlistonly" === a.layout.toLowerCase()
                                                    ? (r.commit("control/setUseHeaderOnly", !0), r.commit("control/setUseBetListOnly", !0))
                                                    : (r.commit("control/setUseMenu", !0),
                                                      r.commit("control/setUseHeaderOnly", !1),
                                                      r.commit("control/setUseBetListOnly", !1)),
                                            (s = a.game || r.getters.gameNo) && r.commit("cookies/SET_GAME", +s),
                                            (u = a.device) &&
                                                // 設定app版本控制項目
                                                ("mobileapp" === u.toLowerCase() &&
                                                    (r.commit("control/setUseAppCloseWindow", !0),
                                                    r.commit("control/setHideUserItemsPage", !0),
                                                    r.commit("control/setHidePrizePage", !0),
                                                    r.commit("control/setUseAppVipContent", !0)),
                                                "webapp" === u.toLowerCase() &&
                                                    (r.commit("control/setHideUserItemsPage", !0),
                                                    r.commit("control/setHidePrizePage", !0),
                                                    r.commit("control/setUseAppVipContent", !0)),
                                                r.commit("SET_DEVICE", u)),
                                            // 依不同 apiId 調整網頁標題、網頁 icon、專案多語系標題、webid、遊戲 icon 廠牌名稱、logo 名稱
                                            // 印度目前以domain來區分
                                            "IN" === r.state.webId && location.hostname.includes("jilistar") && (l = Object(o.a)(202)) && r.commit("setVal", l),
                                            !a.token || i.path.includes("repair"))
                                        ) {
                                            t.next = 20;
                                            break;
                                        }
                                        return (
                                            r.commit("cookies/SET_GAME_TOKEN", a.token),
                                            (t.next = 18),
                                            Promise.all([
                                                // 將 game token 換成 jwt token
                                                r.dispatch("getToken", a.token),
                                                n.i18n.getRemoteLangMessage(n.i18n.locale),
                                                n.i18n.changeEelmentUiLocale(n.i18n.locale),
                                                r.dispatch("getGameSetting"),
                                                // store.dispatch('getGameGroup'),
                                                // store.dispatch('getUserApiInfo'),
                                                r.dispatch("getCurrencyDisplayList"),
                                                r.dispatch("GetSymbolStyleList"),
                                            ]).catch(function (t) {
                                                console.log("取得 站台啟動時的必要資訊 發生錯誤，錯誤訊息: ", null == t ? void 0 : t.Message);
                                            })
                                        );
                                    case 18:
                                        t.next = 22;
                                        break;
                                    case 20:
                                        return (
                                            (t.next = 22),
                                            Promise.all([
                                                n.i18n.getRemoteLangMessage(n.i18n.locale),
                                                n.i18n.changeEelmentUiLocale(n.i18n.locale),
                                                r.dispatch("getGameSetting"),
                                                // store.dispatch('getGameGroup'),
                                                // store.dispatch('getUserApiInfo'),
                                                r.dispatch("getCurrencyDisplayList"),
                                                r.dispatch("GetSymbolStyleList"),
                                            ]).catch(function (t) {
                                                console.log("取得 站台啟動時的必要資訊 發生錯誤，錯誤訊息: ", null == t ? void 0 : t.Message);
                                            })
                                        );
                                    case 22:
                                        // gtHeader 關閉按鈕 postMessage 是否要使用 query 中 posthost 帶入的數值
                                        (a.posthost ? r.commit("control/setPostMessageHost", a.posthost) : r.commit("control/setPostMessageHost", ""),
                                            // 如果有帶 gp=true 隱藏歷程頁的會員選單
                                            a.gp ? r.commit("control/setHideMemberPage", !0) : r.commit("control/setHideMemberPage", !1),
                                            a.sac && r.commit("cookies/SET_SAC", +a.sac));
                                    case 25:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    }),
                )).apply(this, arguments);
            }
            /***/
            /* harmony default export */ e.a = function (t) {
                return i.apply(this, arguments);
            };
        },
        /***/ 247: /***/ function (t, e, n) {
            "use strict";
            /* harmony import */ var r = n(5);
            /* harmony import */ (n(28), n(143));
            /* harmony default export */ e.a = function (t) {
                t.app;
                // onNuxtReady
                var e = t.store,
                    n = t.route,
                    o = t.redirect,
                    i = t.$utils;
                (window.onNuxtReady(
                    Object(r.a)(
                        regeneratorRuntime.mark(function t() {
                            var r, o, i;
                            return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            return (
                                                window.$nuxt.$loading.finish(),
                                                // 記錄載入結束時間
                                                e.commit("loading/end", performance.now()),
                                                // route.name 會因為 index.html 而有差異，所以使用在 middleware 時記錄的 store.state.pageKey
                                                e.dispatch("loading/sendLogLoadingTime", "".concat(e.state.pageKey)),
                                                // 儲存被 iframe 呼叫時的網址
                                                e.commit("setVal", {
                                                    firstPageUrl: "".concat(location.pathname).concat(location.search).concat(location.hash),
                                                }),
                                                console.log("firstPageUrl on NuxtReady hook:", e.state.firstPageUrl),
                                                (r = n.query.apiid || 0),
                                                (o = r || e.getters.apiId),
                                                (t.next = 9),
                                                e.dispatch("getSwitchOffInfo", o)
                                            );
                                        case 9:
                                            // 禁止使用者縮放處理
                                            (document.addEventListener(
                                                "touchstart",
                                                function (t) {
                                                    t.touches.length > 1 && t.preventDefault();
                                                },
                                                { passive: !1 },
                                            ),
                                                (i = 0),
                                                document.addEventListener(
                                                    "touchend",
                                                    function (t) {
                                                        var e = new Date().getTime();
                                                        (e - i <= 300 && t.preventDefault(), (i = e));
                                                    },
                                                    !1,
                                                ),
                                                document.addEventListener("touchmove", function (t) {
                                                    t.touches.length > 1 && t.preventDefault();
                                                }));
                                        case 13:
                                        case "end":
                                            return t.stop();
                                    }
                            }, t);
                        }),
                    ),
                ),
                    // 註冊 postmessage 接收事件
                    window.addEventListener("message", function (t) {
                        // client 端串接指令範例：
                        // 停留在關閉時關閉時最後的頁面，並刷新
                        // document.querySelector('#webview').contentWindow.postMessage(
                        // '{"cmd": "refresh", "options": { "stayLatestPage": true } }', '歷程網站host url')
                        // 回到 iframe 的最初網址
                        // document.querySelector('#webview').contentWindow.postMessage(
                        // '{"cmd": "refresh" }', '歷程網站host url')
                        // 舊的指令，只要魚機跟部分押分機有串接
                        // document.querySelector('#webview').contentWindow.postMessage('{"refresh": true}', 'https://test-history.jlfafafa3.com')
                        if (t.origin === i.getGameUrl()) {
                            var n,
                                r,
                                a = {},
                                c = t.data;
                            console.log("from postmessage receive data: ", c);
                            try {
                                a = JSON.parse(c);
                            } catch (t) {
                                console.log("parse postmessage receive data to object fail: ", t);
                            }
                            // 新指令
                            if ("refresh" === a.cmd)
                                (console.log(
                                    "已串接新指令 cmd: refresh, stayLatestPage 參數: ",
                                    null === (n = a.options) || void 0 === n ? void 0 : n.stayLatestPage,
                                ),
                                    null !== (r = a.options) && void 0 !== r && r.stayLatestPage
                                        ? // 只刷新api
                                          window.$nuxt.refresh()
                                        : // 回到最初的 iframe 網址
                                          o(e.state.firstPageUrl));
                            // 舊的指令，等魚機類型都串接完可刪除
                            // 查看更新畫面指令
                            a.refresh && window.$nuxt.refresh();
                        }
                    }));
            };
        },
        /***/ 282: /***/ function (t, e) {
            t.exports = function (t) {
                if (!t.webpackPolyfill) {
                    var e = Object.create(t);
                    // module.parent = undefined by default
                    (e.children || (e.children = []),
                        Object.defineProperty(e, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return e.l;
                            },
                        }),
                        Object.defineProperty(e, "id", {
                            enumerable: !0,
                            get: function () {
                                return e.i;
                            },
                        }),
                        Object.defineProperty(e, "exports", { enumerable: !0 }),
                        (e.webpackPolyfill = 1));
                }
                return e;
            };
            /***/
        },
        /***/ 3: /***/ function (t, e, n) {
            "use strict";
            (n.r(e),
                /* WEBPACK VAR INJECTION */ function (t, r) {
                    /* harmony export (binding) */ (n.d(e, "EffectScope", function () {
                        return xe;
                    }),
                        /* harmony export (binding) */ n.d(e, "computed", function () {
                            return pe;
                        }),
                        /* harmony export (binding) */ n.d(e, "customRef", function () {
                            return oe;
                        }),
                        /* harmony export (binding) */ n.d(e, "default", function () {
                            return fo;
                        }),
                        /* harmony export (binding) */ n.d(e, "defineAsyncComponent", function () {
                            return Fn;
                        }),
                        /* harmony export (binding) */ n.d(e, "defineComponent", function () {
                            return rr;
                        }),
                        /* harmony export (binding) */ n.d(e, "del", function () {
                            return Mt;
                        }),
                        /* harmony export (binding) */ n.d(e, "effectScope", function () {
                            return je;
                        }),
                        /* harmony export (binding) */ n.d(e, "getCurrentInstance", function () {
                            return vt;
                        }),
                        /* harmony export (binding) */ n.d(e, "getCurrentScope", function () {
                            return ke;
                        }),
                        /* harmony export (binding) */ n.d(e, "h", function () {
                            return Sn;
                        }),
                        /* harmony export (binding) */ n.d(e, "inject", function () {
                            return Ee;
                        }),
                        /* harmony export (binding) */ n.d(e, "isProxy", function () {
                            return Ht;
                        }),
                        /* harmony export (binding) */ n.d(e, "isReactive", function () {
                            return Gt;
                        }),
                        /* harmony export (binding) */ n.d(e, "isReadonly", function () {
                            return Wt;
                        }),
                        /* harmony export (binding) */ n.d(e, "isRef", function () {
                            return Yt;
                        }),
                        /* harmony export (binding) */ n.d(e, "isShallow", function () {
                            return Vt;
                        }),
                        /* harmony export (binding) */ n.d(e, "markRaw", function () {
                            return qt;
                        }),
                        /* harmony export (binding) */ n.d(e, "mergeDefaults", function () {
                            return mn;
                        }),
                        /* harmony export (binding) */ n.d(e, "nextTick", function () {
                            return Mn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onActivated", function () {
                            return Kn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onBeforeMount", function () {
                            return Gn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onBeforeUnmount", function () {
                            return Jn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onBeforeUpdate", function () {
                            return Wn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onDeactivated", function () {
                            return Yn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onErrorCaptured", function () {
                            return er;
                        }),
                        /* harmony export (binding) */ n.d(e, "onMounted", function () {
                            return Vn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onRenderTracked", function () {
                            return Xn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onRenderTriggered", function () {
                            return Qn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onScopeDispose", function () {
                            return $e;
                        }),
                        /* harmony export (binding) */ n.d(e, "onServerPrefetch", function () {
                            return Zn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onUnmounted", function () {
                            return qn;
                        }),
                        /* harmony export (binding) */ n.d(e, "onUpdated", function () {
                            return Hn;
                        }),
                        /* harmony export (binding) */ n.d(e, "provide", function () {
                            return Ie;
                        }),
                        /* harmony export (binding) */ n.d(e, "proxyRefs", function () {
                            return ne;
                        }),
                        /* harmony export (binding) */ n.d(e, "reactive", function () {
                            return Bt;
                        }),
                        /* harmony export (binding) */ n.d(e, "readonly", function () {
                            return ue;
                        }),
                        /* harmony export (binding) */ n.d(e, "ref", function () {
                            return Zt;
                        }),
                        /* harmony export (binding) */ n.d(e, "set", function () {
                            return Dt;
                        }),
                        /* harmony export (binding) */ n.d(e, "shallowReactive", function () {
                            return Ft;
                        }),
                        /* harmony export (binding) */ n.d(e, "shallowReadonly", function () {
                            return de;
                        }),
                        /* harmony export (binding) */ n.d(e, "shallowRef", function () {
                            return Xt;
                        }),
                        /* harmony export (binding) */ n.d(e, "toRaw", function () {
                            return Jt;
                        }),
                        /* harmony export (binding) */ n.d(e, "toRef", function () {
                            return ae;
                        }),
                        /* harmony export (binding) */ n.d(e, "toRefs", function () {
                            return ie;
                        }),
                        /* harmony export (binding) */ n.d(e, "triggerRef", function () {
                            return te;
                        }),
                        /* harmony export (binding) */ n.d(e, "unref", function () {
                            return ee;
                        }),
                        /* harmony export (binding) */ n.d(e, "useAttrs", function () {
                            return pn;
                        }),
                        /* harmony export (binding) */ n.d(e, "useCssModule", function () {
                            return zn;
                        }),
                        /* harmony export (binding) */ n.d(e, "useCssVars", function () {
                            return Bn;
                        }),
                        /* harmony export (binding) */ n.d(e, "useListeners", function () {
                            return vn;
                        }),
                        /* harmony export (binding) */ n.d(e, "useSlots", function () {
                            return dn;
                        }),
                        /* harmony export (binding) */ n.d(e, "version", function () {
                            return nr;
                        }),
                        /* harmony export (binding) */ n.d(e, "watch", function () {
                            return Ce;
                        }),
                        /* harmony export (binding) */ n.d(e, "watchEffect", function () {
                            return ye;
                        }),
                        /* harmony export (binding) */ n.d(e, "watchPostEffect", function () {
                            return _e;
                        }),
                        /* harmony export (binding) */ n.d(e, "watchSyncEffect", function () {
                            return be;
                        }));
                    /*!
                     * Vue.js v2.7.16
                     * (c) 2014-2023 Evan You
                     * Released under the MIT License.
                     */
                    var o = Object.freeze({}),
                        i = Array.isArray;
                    // These helpers produce better VM code in JS engines due to their
                    // explicitness and function inlining.
                    function a(t) {
                        return null == t;
                    }
                    function c(t) {
                        return null != t;
                    }
                    function s(t) {
                        return !0 === t;
                    }
                    /**
                     * Check if value is primitive.
                     */
                    function u(t) {
                        return (
                            "string" == typeof t ||
                            "number" == typeof t ||
                            // $flow-disable-line
                            "symbol" == typeof t ||
                            "boolean" == typeof t
                        );
                    }
                    function l(t) {
                        return "function" == typeof t;
                    }
                    /**
                     * Quick object check - this is primarily used to tell
                     * objects from primitive values when we know the value
                     * is a JSON-compliant type.
                     */ function f(t) {
                        return null !== t && "object" == typeof t;
                    }
                    /**
                     * Get the raw type string of a value, e.g., [object Object].
                     */ var d = Object.prototype.toString;
                    /**
                     * Strict object type check. Only returns true
                     * for plain JavaScript objects.
                     */
                    function p(t) {
                        return "[object Object]" === d.call(t);
                    }
                    function v(t) {
                        return "[object RegExp]" === d.call(t);
                    }
                    /**
                     * Check if val is a valid array index.
                     */ function h(t) {
                        var e = parseFloat(String(t));
                        return e >= 0 && Math.floor(e) === e && isFinite(t);
                    }
                    function m(t) {
                        return c(t) && "function" == typeof t.then && "function" == typeof t.catch;
                    }
                    /**
                     * Convert a value to a string that is actually rendered.
                     */ function g(t) {
                        return null == t ? "" : Array.isArray(t) || (p(t) && t.toString === d) ? JSON.stringify(t, y, 2) : String(t);
                    }
                    function y(t, e) {
                        // avoid circular deps from v3
                        return e && e.__v_isRef ? e.value : e;
                    }
                    /**
                     * Convert an input value to a number for persistence.
                     * If the conversion fails, return original string.
                     */ function _(t) {
                        var e = parseFloat(t);
                        return isNaN(e) ? t : e;
                    }
                    /**
                     * Make a map and return a function for checking if a key
                     * is in that map.
                     */ function b(t, e) {
                        for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                        return e
                            ? function (t) {
                                  return n[t.toLowerCase()];
                              }
                            : function (t) {
                                  return n[t];
                              };
                    }
                    /**
                     * Check if a tag is a built-in tag.
                     */ b("slot,component", !0);
                    /**
                     * Check if an attribute is a reserved attribute.
                     */ var w = b("key,ref,slot,slot-scope,is");
                    /**
                     * Remove an item from an array.
                     */
                    function O(t, e) {
                        var n = t.length;
                        if (n) {
                            // fast path for the only / last item
                            if (e === t[n - 1]) return void (t.length = n - 1);
                            var r = t.indexOf(e);
                            if (r > -1) return t.splice(r, 1);
                        }
                    }
                    /**
                     * Check whether an object has the property.
                     */ var C = Object.prototype.hasOwnProperty;
                    function S(t, e) {
                        return C.call(t, e);
                    }
                    /**
                     * Create a cached version of a pure function.
                     */ function x(t) {
                        var e = Object.create(null);
                        return function (n) {
                            return e[n] || (e[n] = t(n));
                        };
                    }
                    /**
                     * Camelize a hyphen-delimited string.
                     */ var j = /-(\w)/g,
                        k = x(function (t) {
                            return t.replace(j, function (t, e) {
                                return e ? e.toUpperCase() : "";
                            });
                        }),
                        $ = x(function (t) {
                            return t.charAt(0).toUpperCase() + t.slice(1);
                        }),
                        I = /\B([A-Z])/g,
                        P = x(function (t) {
                            return t.replace(I, "-$1").toLowerCase();
                        });
                    // @ts-expect-error bind cannot be `undefined`
                    var E = Function.prototype.bind
                        ? function (t, e) {
                              return t.bind(e);
                          }
                        : /**
                           * Simple bind polyfill for environments that do not support it,
                           * e.g., PhantomJS 1.x. Technically, we don't need this anymore
                           * since native bind is now performant enough in most browsers.
                           * But removing it would mean breaking code that was able to run in
                           * PhantomJS 1.x, so this must be kept for backward compatibility.
                           */
                          /* istanbul ignore next */
                          function (t, e) {
                              function n(n) {
                                  var r = arguments.length;
                                  return r ? (r > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e);
                              }
                              return ((n._length = t.length), n);
                          };
                    /**
                     * Convert an Array-like object to a real Array.
                     */ function T(t, e) {
                        e = e || 0;
                        for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
                        return r;
                    }
                    /**
                     * Mix properties into target object.
                     */ function N(t, e) {
                        for (var n in e) t[n] = e[n];
                        return t;
                    }
                    /**
                     * Merge an Array of Objects into a single Object.
                     */ function A(t) {
                        for (var e = {}, n = 0; n < t.length; n++) t[n] && N(e, t[n]);
                        return e;
                    }
                    /* eslint-disable no-unused-vars */
                    /**
                     * Perform no operation.
                     * Stubbing args to make Flow happy without leaving useless transpiled code
                     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
                     */ function L(t, e, n) {}
                    /**
                     * Always return false.
                     */ var R = function (t, e, n) {
                            return !1;
                        },
                        D = function (t) {
                            return t;
                        };
                    /* eslint-enable no-unused-vars */
                    /**
                     * Return the same value.
                     */
                    /**
                     * Check if two values are loosely equal - that is,
                     * if they are plain objects, do they have the same shape?
                     */
                    function M(t, e) {
                        if (t === e) return !0;
                        var n = f(t),
                            r = f(e);
                        if (!n || !r) return !n && !r && String(t) === String(e);
                        try {
                            var o = Array.isArray(t),
                                i = Array.isArray(e);
                            if (o && i)
                                return (
                                    t.length === e.length &&
                                    t.every(function (t, n) {
                                        return M(t, e[n]);
                                    })
                                );
                            if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
                            if (o || i)
                                /* istanbul ignore next */
                                return !1;
                            var a = Object.keys(t),
                                c = Object.keys(e);
                            return (
                                a.length === c.length &&
                                a.every(function (n) {
                                    return M(t[n], e[n]);
                                })
                            );
                        } catch (t) {
                            /* istanbul ignore next */
                            return !1;
                        }
                    }
                    /**
                     * Return the first index at which a loosely equal value can be
                     * found in the array (if value is a plain object, the array must
                     * contain an object of the same shape), or -1 if it is not present.
                     */ function z(t, e) {
                        for (var n = 0; n < t.length; n++) if (M(t[n], e)) return n;
                        return -1;
                    }
                    /**
                     * Ensure a function is called only once.
                     */ function B(t) {
                        var e = !1;
                        return function () {
                            e || ((e = !0), t.apply(this, arguments));
                        };
                    }
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#polyfill
                    function F(t, e) {
                        return t === e ? 0 === t && 1 / t != 1 / e : t == t || e == e;
                    }
                    var U = "data-server-rendered",
                        G = ["component", "directive", "filter"],
                        V = [
                            "beforeCreate",
                            "created",
                            "beforeMount",
                            "mounted",
                            "beforeUpdate",
                            "updated",
                            "beforeDestroy",
                            "destroyed",
                            "activated",
                            "deactivated",
                            "errorCaptured",
                            "serverPrefetch",
                            "renderTracked",
                            "renderTriggered",
                        ],
                        W = {
                            /**
                             * Option merge strategies (used in core/util/options)
                             */
                            // $flow-disable-line
                            optionMergeStrategies: Object.create(null),
                            /**
                             * Whether to suppress warnings.
                             */
                            silent: !1,
                            /**
                             * Show production mode tip message on boot?
                             */
                            productionTip: !1,
                            /**
                             * Whether to enable devtools
                             */
                            devtools: !1,
                            /**
                             * Whether to record perf
                             */
                            performance: !1,
                            /**
                             * Error handler for watcher errors
                             */
                            errorHandler: null,
                            /**
                             * Warn handler for watcher warns
                             */
                            warnHandler: null,
                            /**
                             * Ignore certain custom elements
                             */
                            ignoredElements: [],
                            /**
                             * Custom user key aliases for v-on
                             */
                            // $flow-disable-line
                            keyCodes: Object.create(null),
                            /**
                             * Check if a tag is reserved so that it cannot be registered as a
                             * component. This is platform-dependent and may be overwritten.
                             */
                            isReservedTag: R,
                            /**
                             * Check if an attribute is reserved so that it cannot be used as a component
                             * prop. This is platform-dependent and may be overwritten.
                             */
                            isReservedAttr: R,
                            /**
                             * Check if a tag is an unknown element.
                             * Platform-dependent.
                             */
                            isUnknownElement: R,
                            /**
                             * Get the namespace of an element
                             */
                            getTagNamespace: L,
                            /**
                             * Parse the real tag name for the specific platform.
                             */
                            parsePlatformTagName: D,
                            /**
                             * Check if an attribute must be bound using property, e.g. value
                             * Platform-dependent.
                             */
                            mustUseProp: R,
                            /**
                             * Perform updates asynchronously. Intended to be used by Vue Test Utils
                             * This will significantly reduce performance if set to false.
                             */
                            async: !0,
                            /**
                             * Exposed for legacy reasons
                             */
                            _lifecycleHooks: V,
                        },
                        H =
                            /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
                    /**
                     * Check if a string starts with $ or _
                     */
                    function J(t) {
                        var e = (t + "").charCodeAt(0);
                        return 36 === e || 95 === e;
                    }
                    /**
                     * Define a property.
                     */ function q(t, e, n, r) {
                        Object.defineProperty(t, e, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
                    }
                    /**
                     * Parse simple path.
                     */ var K = new RegExp("[^".concat(H.source, ".$_\\d]"));
                    // can we use __proto__?
                    var Y = "__proto__" in {},
                        Z = "undefined" != typeof window,
                        X = Z && window.navigator.userAgent.toLowerCase(),
                        Q = X && /msie|trident/.test(X),
                        tt = X && X.indexOf("msie 9.0") > 0,
                        et = X && X.indexOf("edge/") > 0;
                    // Browser environment sniffing
                    X && X.indexOf("android");
                    var nt = X && /iphone|ipad|ipod|ios/.test(X);
                    (X && /chrome\/\d+/.test(X), X && /phantomjs/.test(X));
                    var rt,
                        ot = X && X.match(/firefox\/(\d+)/),
                        it = {}.watch,
                        at = !1;
                    // Firefox has a "watch" function on Object.prototype...
                    // @ts-expect-error firebox support
                    if (Z)
                        try {
                            var ct = {};
                            (Object.defineProperty(ct, "passive", {
                                get: function () {
                                    /* istanbul ignore next */
                                    at = !0;
                                },
                            }), // https://github.com/facebook/flow/issues/285
                                window.addEventListener("test-passive", null, ct));
                        } catch (t) {}
                    // this needs to be lazy-evaled because vue may be required before
                    // vue-server-renderer can set VUE_ENV
                    var st = function () {
                            return (
                                void 0 === rt &&
                                    /* istanbul ignore if */
                                    (rt = !Z && void 0 !== t && t.process && "server" === t.process.env.VUE_ENV),
                                rt
                            );
                        },
                        ut = Z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
                    // detect devtools
                    /* istanbul ignore next */
                    function lt(t) {
                        return "function" == typeof t && /native code/.test(t.toString());
                    }
                    var ft,
                        dt = "undefined" != typeof Symbol && lt(Symbol) && "undefined" != typeof Reflect && lt(Reflect.ownKeys); // $flow-disable-line
                    /* istanbul ignore if */
                    // use native Set when available.
                    ft =
                        "undefined" != typeof Set && lt(Set)
                            ? Set
                            : /** @class */ (function () {
                                  function t() {
                                      this.set = Object.create(null);
                                  }
                                  return (
                                      (t.prototype.has = function (t) {
                                          return !0 === this.set[t];
                                      }),
                                      (t.prototype.add = function (t) {
                                          this.set[t] = !0;
                                      }),
                                      (t.prototype.clear = function () {
                                          this.set = Object.create(null);
                                      }),
                                      t
                                  );
                              })();
                    var pt = null;
                    /**
                     * This is exposed for compatibility with v3 (e.g. some functions in VueUse
                     * relies on it). Do not use this internally, just use `currentInstance`.
                     *
                     * @internal this function needs manual type declaration because it relies
                     * on previously manually authored types from Vue 2
                     */ function vt() {
                        return pt && { proxy: pt };
                    }
                    /**
                     * @internal
                     */ function ht(t) {
                        (void 0 === t && (t = null), t || (pt && pt._scope.off()), (pt = t), t && t._scope.on());
                    }
                    /**
                     * @internal
                     */ var mt = /** @class */ (function () {
                            function t(t, e, n, r, o, i, a, c) {
                                ((this.tag = t),
                                    (this.data = e),
                                    (this.children = n),
                                    (this.text = r),
                                    (this.elm = o),
                                    (this.ns = void 0),
                                    (this.context = i),
                                    (this.fnContext = void 0),
                                    (this.fnOptions = void 0),
                                    (this.fnScopeId = void 0),
                                    (this.key = e && e.key),
                                    (this.componentOptions = a),
                                    (this.componentInstance = void 0),
                                    (this.parent = void 0),
                                    (this.raw = !1),
                                    (this.isStatic = !1),
                                    (this.isRootInsert = !0),
                                    (this.isComment = !1),
                                    (this.isCloned = !1),
                                    (this.isOnce = !1),
                                    (this.asyncFactory = c),
                                    (this.asyncMeta = void 0),
                                    (this.isAsyncPlaceholder = !1));
                            }
                            return (
                                Object.defineProperty(t.prototype, "child", {
                                    // DEPRECATED: alias for componentInstance for backwards compat.
                                    /* istanbul ignore next */
                                    get: function () {
                                        return this.componentInstance;
                                    },
                                    enumerable: !1,
                                    configurable: !0,
                                }),
                                t
                            );
                        })(),
                        gt = function (t) {
                            void 0 === t && (t = "");
                            var e = new mt();
                            return ((e.text = t), (e.isComment = !0), e);
                        };
                    function yt(t) {
                        return new mt(void 0, void 0, void 0, String(t));
                    }
                    // optimized shallow clone
                    // used for static nodes and slot nodes because they may be reused across
                    // multiple renders, cloning them avoids errors when DOM manipulations rely
                    // on their elm reference.
                    function _t(t) {
                        var e = new mt(
                            t.tag,
                            t.data,
                            // #7975
                            // clone children array to avoid mutating original in case of cloning
                            // a child.
                            t.children && t.children.slice(),
                            t.text,
                            t.elm,
                            t.context,
                            t.componentOptions,
                            t.asyncFactory,
                        );
                        return (
                            (e.ns = t.ns),
                            (e.isStatic = t.isStatic),
                            (e.key = t.key),
                            (e.isComment = t.isComment),
                            (e.fnContext = t.fnContext),
                            (e.fnOptions = t.fnOptions),
                            (e.fnScopeId = t.fnScopeId),
                            (e.asyncMeta = t.asyncMeta),
                            (e.isCloned = !0),
                            e
                        );
                    }
                    /******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ "function" == typeof SuppressedError && SuppressedError;
                    var bt = 0,
                        wt = [],
                        Ot = function () {
                            for (var t = 0; t < wt.length; t++) {
                                var e = wt[t];
                                ((e.subs = e.subs.filter(function (t) {
                                    return t;
                                })),
                                    (e._pending = !1));
                            }
                            wt.length = 0;
                        },
                        Ct = /** @class */ (function () {
                            function t() {
                                // pending subs cleanup
                                ((this._pending = !1), (this.id = bt++), (this.subs = []));
                            }
                            return (
                                (t.prototype.addSub = function (t) {
                                    this.subs.push(t);
                                }),
                                (t.prototype.removeSub = function (t) {
                                    // #12696 deps with massive amount of subscribers are extremely slow to
                                    // clean up in Chromium
                                    // to workaround this, we unset the sub for now, and clear them on
                                    // next scheduler flush.
                                    ((this.subs[this.subs.indexOf(t)] = null), this._pending || ((this._pending = !0), wt.push(this)));
                                }),
                                (t.prototype.depend = function (e) {
                                    t.target && t.target.addDep(this);
                                }),
                                (t.prototype.notify = function (t) {
                                    // stabilize the subscriber list first
                                    var e = this.subs.filter(function (t) {
                                        return t;
                                    });
                                    for (var n = 0, r = e.length; n < r; n++) {
                                        (0, e[n].update());
                                    }
                                }),
                                t
                            );
                        })();
                    // The current target watcher being evaluated.
                    // This is globally unique because only one watcher
                    // can be evaluated at a time.
                    Ct.target = null;
                    var St = [];
                    function xt(t) {
                        (St.push(t), (Ct.target = t));
                    }
                    function jt() {
                        (St.pop(), (Ct.target = St[St.length - 1]));
                    }
                    /*
                     * not type checking this file because flow doesn't play well with
                     * dynamically accessing methods on Array prototype
                     */ var kt = Array.prototype,
                        $t = Object.create(kt);
                    /**
                     * Intercept mutating methods and emit events
                     */
                    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
                        // cache original method
                        var e = kt[t];
                        q($t, t, function () {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var o,
                                i = e.apply(this, n),
                                a = this.__ob__;
                            switch (t) {
                                case "push":
                                case "unshift":
                                    o = n;
                                    break;
                                case "splice":
                                    o = n.slice(2);
                            }
                            return (o && a.observeArray(o), a.dep.notify(), i);
                        });
                    });
                    var It = Object.getOwnPropertyNames($t),
                        Pt = {},
                        Et = !0;
                    function Tt(t) {
                        Et = t;
                    }
                    // ssr mock dep
                    var Nt = { notify: L, depend: L, addSub: L, removeSub: L },
                        At = /** @class */ (function () {
                            function t(t, e, n) {
                                if (
                                    (void 0 === e && (e = !1),
                                    void 0 === n && (n = !1),
                                    (this.value = t),
                                    (this.shallow = e),
                                    (this.mock = n),
                                    // this.value = value
                                    (this.dep = n ? Nt : new Ct()),
                                    (this.vmCount = 0),
                                    q(t, "__ob__", this),
                                    i(t))
                                ) {
                                    if (!n)
                                        if (Y) t.__proto__ = $t;
                                        /* eslint-enable no-proto */ else
                                            for (var r = 0, o = It.length; r < o; r++) {
                                                q(t, (c = It[r]), $t[c]);
                                            }
                                    e || this.observeArray(t);
                                } else /**
                                 * Walk through all properties and convert them into
                                 * getter/setters. This method should only be called when
                                 * value type is Object.
                                 */
                                {
                                    var a = Object.keys(t);
                                    for (r = 0; r < a.length; r++) {
                                        var c;
                                        Rt(t, (c = a[r]), Pt, void 0, e, n);
                                    }
                                }
                            }
                            /**
                             * Observe a list of Array items.
                             */ return (
                                (t.prototype.observeArray = function (t) {
                                    for (var e = 0, n = t.length; e < n; e++) Lt(t[e], !1, this.mock);
                                }),
                                t
                            );
                        })();
                    /**
                     * Observer class that is attached to each observed
                     * object. Once attached, the observer converts the target
                     * object's property keys into getter/setters that
                     * collect dependencies and dispatch updates.
                     */
                    // helpers
                    /**
                     * Attempt to create an observer instance for a value,
                     * returns the new observer if successfully observed,
                     * or the existing observer if the value already has one.
                     */
                    function Lt(t, e, n) {
                        return t && S(t, "__ob__") && t.__ob__ instanceof At
                            ? t.__ob__
                            : !Et ||
                                (!n && st()) ||
                                (!i(t) && !p(t)) ||
                                !Object.isExtensible(t) ||
                                t.__v_skip /* ReactiveFlags.SKIP */ ||
                                Yt(t) ||
                                t instanceof mt
                              ? void 0
                              : new At(t, e, n);
                    }
                    /**
                     * Define a reactive property on an Object.
                     */ function Rt(t, e, n, r, o, a, c) {
                        void 0 === c && (c = !1);
                        var s = new Ct(),
                            u = Object.getOwnPropertyDescriptor(t, e);
                        if (!u || !1 !== u.configurable) {
                            // cater for pre-defined getter/setters
                            var l = u && u.get,
                                f = u && u.set;
                            (l && !f) || (n !== Pt && 2 !== arguments.length) || (n = t[e]);
                            var d = o ? n && n.__ob__ : Lt(n, !1, a);
                            return (
                                Object.defineProperty(t, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function () {
                                        var e = l ? l.call(t) : n;
                                        return (Ct.target && (s.depend(), d && (d.dep.depend(), i(e) && zt(e))), Yt(e) && !o ? e.value : e);
                                    },
                                    set: function (e) {
                                        var r = l ? l.call(t) : n;
                                        if (F(r, e)) {
                                            if (f) f.call(t, e);
                                            else {
                                                if (l)
                                                    // #7981: for accessor properties without setter
                                                    return;
                                                if (!o && Yt(r) && !Yt(e)) return void (r.value = e);
                                                n = e;
                                            }
                                            ((d = o ? e && e.__ob__ : Lt(e, !1, a)), s.notify());
                                        }
                                    },
                                }),
                                s
                            );
                        }
                    }
                    function Dt(t, e, n) {
                        if (!Wt(t)) {
                            var r = t.__ob__;
                            return i(t) && h(e)
                                ? ((t.length = Math.max(t.length, e)),
                                  t.splice(e, 1, n),
                                  // when mocking for SSR, array methods are not hijacked
                                  r && !r.shallow && r.mock && Lt(n, !1, !0),
                                  n)
                                : e in t && !(e in Object.prototype)
                                  ? ((t[e] = n), n)
                                  : t._isVue || (r && r.vmCount)
                                    ? n
                                    : r
                                      ? (Rt(r.value, e, n, void 0, r.shallow, r.mock), r.dep.notify(), n)
                                      : ((t[e] = n), n);
                        }
                    }
                    function Mt(t, e) {
                        if (i(t) && h(e)) t.splice(e, 1);
                        else {
                            var n = t.__ob__;
                            t._isVue || (n && n.vmCount) || Wt(t) || (S(t, e) && (delete t[e], n && n.dep.notify()));
                        }
                    }
                    /**
                     * Collect dependencies on array elements when the array is touched, since
                     * we cannot intercept array element access like property getters.
                     */ function zt(t) {
                        for (var e = void 0, n = 0, r = t.length; n < r; n++) ((e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), i(e) && zt(e));
                    }
                    function Bt(t) {
                        return (Ut(t, !1), t);
                    }
                    /**
                     * Return a shallowly-reactive copy of the original object, where only the root
                     * level properties are reactive. It also does not auto-unwrap refs (even at the
                     * root level).
                     */ function Ft(t) {
                        return (Ut(t, !0), q(t, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, !0), t);
                    }
                    function Ut(t, e) {
                        // if trying to observe a readonly proxy, return the readonly version.
                        if (!Wt(t)) {
                            Lt(t, e, st() /* ssr mock reactivity */);
                            0;
                        }
                    }
                    function Gt(t) {
                        return Wt(t) ? Gt(t.__v_raw) : !(!t || !t.__ob__);
                    }
                    function Vt(t) {
                        return !(!t || !t.__v_isShallow);
                    }
                    function Wt(t) {
                        return !(!t || !t.__v_isReadonly);
                    }
                    function Ht(t) {
                        return Gt(t) || Wt(t);
                    }
                    function Jt(t) {
                        var e = t && t.__v_raw;
                        return e ? Jt(e) : t;
                    }
                    function qt(t) {
                        // non-extensible objects won't be observed anyway
                        return (Object.isExtensible(t) && q(t, "__v_skip" /* ReactiveFlags.SKIP */, !0), t);
                    }
                    /**
                     * @internal
                     */
                    /**
                     * @internal
                     */
                    var Kt = "__v_isRef";
                    function Yt(t) {
                        return !(!t || !0 !== t.__v_isRef);
                    }
                    function Zt(t) {
                        return Qt(t, !1);
                    }
                    function Xt(t) {
                        return Qt(t, !0);
                    }
                    function Qt(t, e) {
                        if (Yt(t)) return t;
                        var n = {};
                        return (q(n, Kt, !0), q(n, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, e), q(n, "dep", Rt(n, "value", t, null, e, st())), n);
                    }
                    function te(t) {
                        t.dep && t.dep.notify();
                    }
                    function ee(t) {
                        return Yt(t) ? t.value : t;
                    }
                    function ne(t) {
                        if (Gt(t)) return t;
                        for (var e = {}, n = Object.keys(t), r = 0; r < n.length; r++) re(e, t, n[r]);
                        return e;
                    }
                    function re(t, e, n) {
                        Object.defineProperty(t, n, {
                            enumerable: !0,
                            configurable: !0,
                            get: function () {
                                var t = e[n];
                                if (Yt(t)) return t.value;
                                var r = t && t.__ob__;
                                return (r && r.dep.depend(), t);
                            },
                            set: function (t) {
                                var r = e[n];
                                Yt(r) && !Yt(t) ? (r.value = t) : (e[n] = t);
                            },
                        });
                    }
                    function oe(t) {
                        var e = new Ct(),
                            n = t(
                                function () {
                                    e.depend();
                                },
                                function () {
                                    e.notify();
                                },
                            ),
                            r = n.get,
                            o = n.set,
                            i = {
                                get value() {
                                    return r();
                                },
                                set value(t) {
                                    o(t);
                                },
                            };
                        return (q(i, Kt, !0), i);
                    }
                    function ie(t) {
                        var e = i(t) ? new Array(t.length) : {};
                        for (var n in t) e[n] = ae(t, n);
                        return e;
                    }
                    function ae(t, e, n) {
                        var r = t[e];
                        if (Yt(r)) return r;
                        var o = {
                            get value() {
                                var r = t[e];
                                return void 0 === r ? n : r;
                            },
                            set value(n) {
                                t[e] = n;
                            },
                        };
                        return (q(o, Kt, !0), o);
                    }
                    var ce = "__v_rawToReadonly",
                        se = "__v_rawToShallowReadonly";
                    function ue(t) {
                        return le(t, !1);
                    }
                    function le(t, e) {
                        if (!p(t)) return t;
                        // already a readonly object
                        if (Wt(t)) return t;
                        // already has a readonly proxy
                        var n = e ? se : ce,
                            r = t[n];
                        if (r) return r;
                        var o = Object.create(Object.getPrototypeOf(t));
                        (q(t, n, o),
                            q(o, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, !0),
                            q(o, "__v_raw" /* ReactiveFlags.RAW */, t),
                            Yt(t) && q(o, Kt, !0),
                            (e || Vt(t)) && q(o, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, !0));
                        for (var i = Object.keys(t), a = 0; a < i.length; a++) fe(o, t, i[a], e);
                        return o;
                    }
                    function fe(t, e, n, r) {
                        Object.defineProperty(t, n, {
                            enumerable: !0,
                            configurable: !0,
                            get: function () {
                                var t = e[n];
                                return r || !p(t) ? t : ue(t);
                            },
                            set: function () {},
                        });
                    }
                    /**
                     * Returns a reactive-copy of the original object, where only the root level
                     * properties are readonly, and does NOT unwrap refs nor recursively convert
                     * returned properties.
                     * This is used for creating the props proxy object for stateful components.
                     */ function de(t) {
                        return le(t, !0);
                    }
                    function pe(t, e) {
                        var n,
                            r,
                            o = l(t);
                        o ? ((n = t), (r = L)) : ((n = t.get), (r = t.set));
                        var i = st() ? null : new ur(pt, n, L, { lazy: !0 });
                        var a = {
                            // some libs rely on the presence effect for checking computed refs
                            // from normal refs, but the implementation doesn't matter
                            effect: i,
                            get value() {
                                return i ? (i.dirty && i.evaluate(), Ct.target && i.depend(), i.value) : n();
                            },
                            set value(t) {
                                r(t);
                            },
                        };
                        return (q(a, Kt, !0), q(a, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, o), a);
                    }
                    var ve = "watcher",
                        he = "".concat(ve, " callback"),
                        me = "".concat(ve, " getter"),
                        ge = "".concat(ve, " cleanup");
                    // Simple effect.
                    function ye(t, e) {
                        return Se(t, null, e);
                    }
                    function _e(t, e) {
                        return Se(t, null, { flush: "post" });
                    }
                    function be(t, e) {
                        return Se(t, null, { flush: "sync" });
                    }
                    // initial value for watchers to trigger on undefined initial values
                    var we,
                        Oe = {};
                    // implementation
                    function Ce(t, e, n) {
                        return Se(t, e, n);
                    }
                    function Se(t, e, n) {
                        var r = void 0 === n ? o : n,
                            a = r.immediate,
                            c = r.deep,
                            s = r.flush,
                            u = void 0 === s ? "pre" : s;
                        (r.onTrack, r.onTrigger);
                        var f,
                            d,
                            p = pt,
                            v = function (t, e, n) {
                                void 0 === n && (n = null);
                                var r = jn(t, null, n, p, e);
                                return (c && r && r.__ob__ && r.__ob__.dep.depend(), r);
                            },
                            h = !1,
                            m = !1;
                        if (
                            (Yt(t)
                                ? ((f = function () {
                                      return t.value;
                                  }),
                                  (h = Vt(t)))
                                : Gt(t)
                                  ? ((f = function () {
                                        return (t.__ob__.dep.depend(), t);
                                    }),
                                    (c = !0))
                                  : i(t)
                                    ? ((m = !0),
                                      (h = t.some(function (t) {
                                          return Gt(t) || Vt(t);
                                      })),
                                      (f = function () {
                                          return t.map(function (t) {
                                              return Yt(t) ? t.value : Gt(t) ? (t.__ob__.dep.depend(), ir(t)) : l(t) ? v(t, me) : void 0;
                                          });
                                      }))
                                    : // getter with cb
                                      (f = l(t)
                                          ? e
                                              ? function () {
                                                    return v(t, me);
                                                }
                                              : function () {
                                                    if (!p || !p._isDestroyed) return (d && d(), v(t, ve, [y]));
                                                }
                                          : L),
                            e && c)
                        ) {
                            var g = f;
                            f = function () {
                                return ir(g());
                            };
                        }
                        var y = function (t) {
                            d = _.onStop = function () {
                                v(t, ge);
                            };
                        };
                        // in SSR there is no need to setup an actual effect, and it should be noop
                        // unless it's eager
                        if (st())
                            // we will also not call the invalidate callback (+ runner is not set up)
                            return ((y = L), e ? a && v(e, he, [f(), m ? [] : void 0, y]) : f(), L);
                        var _ = new ur(pt, f, L, { lazy: !0 });
                        _.noRecurse = !e;
                        var b = m ? [] : Oe;
                        // overwrite default run
                        return (
                            (_.run = function () {
                                if (_.active)
                                    if (e) {
                                        // watch(source, cb)
                                        var t = _.get();
                                        (c ||
                                            h ||
                                            (m
                                                ? t.some(function (t, e) {
                                                      return F(t, b[e]);
                                                  })
                                                : F(t, b))) &&
                                            // cleanup before running cb again
                                            (d && d(),
                                            v(e, he, [
                                                t,
                                                // pass undefined as the old value when it's changed for the first time
                                                b === Oe ? void 0 : b,
                                                y,
                                            ]),
                                            (b = t));
                                    } else
                                        // watchEffect
                                        _.get();
                            }),
                            "sync" === u
                                ? (_.update = _.run)
                                : "post" === u
                                  ? ((_.post = !0),
                                    (_.update = function () {
                                        return Er(_);
                                    }))
                                  : // pre
                                    (_.update = function () {
                                        if (p && p === pt && !p._isMounted) {
                                            // pre-watcher triggered before
                                            var t = p._preWatchers || (p._preWatchers = []);
                                            t.indexOf(_) < 0 && t.push(_);
                                        } else Er(_);
                                    }),
                            // initial run
                            e
                                ? a
                                    ? _.run()
                                    : (b = _.get())
                                : "post" === u && p
                                  ? p.$once("hook:mounted", function () {
                                        return _.get();
                                    })
                                  : _.get(),
                            function () {
                                _.teardown();
                            }
                        );
                    }
                    var xe = /** @class */ (function () {
                        function t(t) {
                            (void 0 === t && (t = !1),
                                (this.detached = t),
                                /**
                                 * @internal
                                 */
                                (this.active = !0),
                                /**
                                 * @internal
                                 */
                                (this.effects = []),
                                /**
                                 * @internal
                                 */
                                (this.cleanups = []),
                                (this.parent = we),
                                !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1));
                        }
                        return (
                            (t.prototype.run = function (t) {
                                if (this.active) {
                                    var e = we;
                                    try {
                                        return ((we = this), t());
                                    } finally {
                                        we = e;
                                    }
                                } else 0;
                            }),
                            /**
                             * This should only be called on non-detached scopes
                             * @internal
                             */
                            (t.prototype.on = function () {
                                we = this;
                            }),
                            /**
                             * This should only be called on non-detached scopes
                             * @internal
                             */
                            (t.prototype.off = function () {
                                we = this.parent;
                            }),
                            (t.prototype.stop = function (t) {
                                if (this.active) {
                                    var e = void 0,
                                        n = void 0;
                                    for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].teardown();
                                    for (e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
                                    if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(!0);
                                    // nested scope, dereference from parent to avoid memory leaks
                                    if (!this.detached && this.parent && !t) {
                                        // optimized O(1) removal
                                        var r = this.parent.scopes.pop();
                                        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
                                    }
                                    ((this.parent = void 0), (this.active = !1));
                                }
                            }),
                            t
                        );
                    })();
                    function je(t) {
                        return new xe(t);
                    }
                    /**
                     * @internal
                     */ function ke() {
                        return we;
                    }
                    function $e(t) {
                        we && we.cleanups.push(t);
                    }
                    function Ie(t, e) {
                        pt &&
                            // TS doesn't allow symbol as index type
                            (Pe(pt)[t] = e);
                    }
                    function Pe(t) {
                        // by default an instance inherits its parent's provides object
                        // but when it needs to provide values of its own, it creates its
                        // own provides object using parent provides object as prototype.
                        // this way in `inject` we can simply look up injections from direct
                        // parent and let the prototype chain do the work.
                        var e = t._provided,
                            n = t.$parent && t.$parent._provided;
                        return n === e ? (t._provided = Object.create(n)) : e;
                    }
                    function Ee(t, e, n) {
                        void 0 === n && (n = !1);
                        // fallback to `currentRenderingInstance` so that this can be called in
                        // a functional component
                        var r = pt;
                        if (r) {
                            // #2400
                            // to support `app.use` plugins,
                            // fallback to appContext's `provides` if the instance is at root
                            var o = r.$parent && r.$parent._provided;
                            if (o && t in o)
                                // TS doesn't allow symbol as index type
                                return o[t];
                            if (arguments.length > 1) return n && l(e) ? e.call(r) : e;
                        } else 0;
                    }
                    var Te = x(function (t) {
                        var e = "&" === t.charAt(0),
                            n = "~" === (t = e ? t.slice(1) : t).charAt(0),
                            r =
                                "!" ===
                                // Prefixed last, checked first
                                (t = n ? t.slice(1) : t).charAt(0);
                        return { name: (t = r ? t.slice(1) : t), once: n, capture: r, passive: e };
                    });
                    function Ne(t, e) {
                        function n() {
                            var t = n.fns;
                            if (!i(t))
                                // return handler return value for single handlers
                                return jn(t, null, arguments, e, "v-on handler");
                            for (var r = t.slice(), o = 0; o < r.length; o++) jn(r[o], null, arguments, e, "v-on handler");
                        }
                        return ((n.fns = t), n);
                    }
                    function Ae(t, e, n, r, o, i) {
                        var c, u, l, f;
                        for (c in t)
                            ((u = t[c]),
                                (l = e[c]),
                                (f = Te(c)),
                                a(u) ||
                                    (a(l)
                                        ? (a(u.fns) && (u = t[c] = Ne(u, i)),
                                          s(f.once) && (u = t[c] = o(f.name, u, f.capture)),
                                          n(f.name, u, f.capture, f.passive, f.params))
                                        : u !== l && ((l.fns = u), (t[c] = l))));
                        for (c in e) a(t[c]) && r((f = Te(c)).name, e[c], f.capture);
                    }
                    function Le(t, e, n) {
                        var r;
                        t instanceof mt && (t = t.data.hook || (t.data.hook = {}));
                        var o = t[e];
                        function i() {
                            (n.apply(this, arguments),
                                // important: remove merged hook to ensure it's called only once
                                // and prevent memory leak
                                O(r.fns, i));
                        }
                        (a(o)
                            ? // no existing hook
                              (r = Ne([i]))
                            : /* istanbul ignore if */
                              c(o.fns) && s(o.merged)
                              ? // already a merged invoker
                                (r = o).fns.push(i)
                              : // existing plain hook
                                (r = Ne([o, i])),
                            (r.merged = !0),
                            (t[e] = r));
                    }
                    function Re(t, e, n, r, o) {
                        if (c(e)) {
                            if (S(e, n)) return ((t[n] = e[n]), o || delete e[n], !0);
                            if (S(e, r)) return ((t[n] = e[r]), o || delete e[r], !0);
                        }
                        return !1;
                    }
                    // The template compiler attempts to minimize the need for normalization by
                    // statically analyzing the template at compile time.

                    // For plain HTML markup, normalization can be completely skipped because the
                    // generated render function is guaranteed to return Array<VNode>. There are
                    // two cases where extra normalization is needed:
                    // 1. When the children contains components - because a functional component
                    // may return an Array instead of a single root. In this case, just a simple
                    // normalization is needed - if any child is an Array, we flatten the whole
                    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
                    // because functional components already normalize their own children.
                    // 2. When the children contains constructs that always generated nested Arrays,
                    // e.g. <template>, <slot>, v-for, or when the children is provided by user
                    // with hand-written render functions / JSX. In such cases a full normalization
                    // is needed to cater to all possible types of children values.
                    function De(t) {
                        return u(t) ? [yt(t)] : i(t) ? ze(t) : void 0;
                    }
                    function Me(t) {
                        return c(t) && c(t.text) && !1 === t.isComment;
                    }
                    function ze(t, e) {
                        var n,
                            r,
                            o,
                            l,
                            f = [];
                        for (n = 0; n < t.length; n++)
                            a((r = t[n])) ||
                                "boolean" == typeof r ||
                                ((l = f[(o = f.length - 1)]),
                                //  nested
                                i(r)
                                    ? r.length > 0 &&
                                      // merge adjacent text nodes
                                      (Me((r = ze(r, "".concat(e || "", "_").concat(n)))[0]) && Me(l) && ((f[o] = yt(l.text + r[0].text)), r.shift()),
                                      f.push.apply(f, r))
                                    : u(r)
                                      ? Me(l)
                                          ? // merge adjacent text nodes
                                            // this is necessary for SSR hydration because text nodes are
                                            // essentially merged when rendered to HTML strings
                                            (f[o] = yt(l.text + r))
                                          : "" !== r &&
                                            // convert primitive to vnode
                                            f.push(yt(r))
                                      : Me(r) && Me(l)
                                        ? // merge adjacent text nodes
                                          (f[o] = yt(l.text + r.text))
                                        : // default key for nested array children (likely generated by v-for)
                                          (s(t._isVList) && c(r.tag) && a(r.key) && c(e) && (r.key = "__vlist".concat(e, "_").concat(n, "__")), f.push(r)));
                        return f;
                    }
                    /**
                     * Runtime helper for rendering v-for lists.
                     */ function Be(t, e) {
                        var n,
                            r,
                            o,
                            a,
                            s = null;
                        if (i(t) || "string" == typeof t) for (s = new Array(t.length), n = 0, r = t.length; n < r; n++) s[n] = e(t[n], n);
                        else if ("number" == typeof t) for (s = new Array(t), n = 0; n < t; n++) s[n] = e(n + 1, n);
                        else if (f(t))
                            if (dt && t[Symbol.iterator]) {
                                s = [];
                                for (var u = t[Symbol.iterator](), l = u.next(); !l.done; ) (s.push(e(l.value, s.length)), (l = u.next()));
                            } else for (o = Object.keys(t), s = new Array(o.length), n = 0, r = o.length; n < r; n++) ((a = o[n]), (s[n] = e(t[a], a, n)));
                        return (c(s) || (s = []), (s._isVList = !0), s);
                    }
                    /**
                     * Runtime helper for rendering <slot>
                     */ function Fe(t, e, n, r) {
                        var o,
                            i = this.$scopedSlots[t];
                        i
                            ? // scoped slot
                              ((n = n || {}), r && (n = N(N({}, r), n)), (o = i(n) || (l(e) ? e() : e)))
                            : (o = this.$slots[t] || (l(e) ? e() : e));
                        var a = n && n.slot;
                        return a ? this.$createElement("template", { slot: a }, o) : o;
                    }
                    /**
                     * Runtime helper for resolving filters
                     */ function Ue(t) {
                        return Kr(this.$options, "filters", t, !0) || D;
                    }
                    function Ge(t, e) {
                        return i(t) ? -1 === t.indexOf(e) : t !== e;
                    }
                    /**
                     * Runtime helper for checking keyCodes from config.
                     * exposed as Vue.prototype._k
                     * passing in eventKeyName as last argument separately for backwards compat
                     */ function Ve(t, e, n, r, o) {
                        var i = W.keyCodes[e] || n;
                        return o && r && !W.keyCodes[e] ? Ge(o, r) : i ? Ge(i, t) : r ? P(r) !== e : void 0 === t;
                    }
                    /**
                     * Runtime helper for merging v-bind="object" into a VNode's data.
                     */ function We(t, e, n, r, o) {
                        if (n)
                            if (f(n)) {
                                i(n) && (n = A(n));
                                var a = void 0,
                                    c = function (i) {
                                        if ("class" === i || "style" === i || w(i)) a = t;
                                        else {
                                            var c = t.attrs && t.attrs.type;
                                            a = r || W.mustUseProp(e, c, i) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                                        }
                                        var s = k(i),
                                            u = P(i);
                                        s in a ||
                                            u in a ||
                                            ((a[i] = n[i]),
                                            o &&
                                                ((t.on || (t.on = {}))["update:".concat(i)] = function (t) {
                                                    n[i] = t;
                                                }));
                                    };
                                for (var s in n) c(s);
                            } else;
                        return t;
                    }
                    /**
                     * Runtime helper for rendering static trees.
                     */ function He(t, e) {
                        var n = this._staticTrees || (this._staticTrees = []),
                            r = n[t];
                        // if has already-rendered static tree and not inside v-for,
                        // we can reuse the same tree.
                        return (
                            (r && !e) ||
                                qe(
                                    // otherwise, render a fresh tree.
                                    (r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, this._c, this)),
                                    "__static__".concat(t),
                                    !1,
                                ),
                            r
                        );
                    }
                    /**
                     * Runtime helper for v-once.
                     * Effectively it means marking the node as static with a unique key.
                     */ function Je(t, e, n) {
                        return (qe(t, "__once__".concat(e).concat(n ? "_".concat(n) : ""), !0), t);
                    }
                    function qe(t, e, n) {
                        if (i(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Ke(t[r], "".concat(e, "_").concat(r), n);
                        else Ke(t, e, n);
                    }
                    function Ke(t, e, n) {
                        ((t.isStatic = !0), (t.key = e), (t.isOnce = n));
                    }
                    function Ye(t, e) {
                        if (e)
                            if (p(e)) {
                                var n = (t.on = t.on ? N({}, t.on) : {});
                                for (var r in e) {
                                    var o = n[r],
                                        i = e[r];
                                    n[r] = o ? [].concat(o, i) : i;
                                }
                            } else;
                        return t;
                    }
                    function Ze(
                        t,
                        e,
                        // the following are added in 2.6
                        n,
                        r,
                    ) {
                        e = e || { $stable: !n };
                        for (var o = 0; o < t.length; o++) {
                            var a = t[o];
                            i(a)
                                ? Ze(a, e, n)
                                : a &&
                                  // marker for reverse proxying v-slot without scope on this.$slots
                                  // @ts-expect-error
                                  (a.proxy &&
                                      // @ts-expect-error
                                      (a.fn.proxy = !0),
                                  (e[a.key] = a.fn));
                        }
                        return (r && (e.$key = r), e);
                    }
                    // helper to process dynamic keys for dynamic arguments in v-bind and v-on.
                    function Xe(t, e) {
                        for (var n = 0; n < e.length; n += 2) {
                            var r = e[n];
                            "string" == typeof r && r && (t[e[n]] = e[n + 1]);
                        }
                        return t;
                    }
                    // helper to dynamically append modifier runtime markers to event names.
                    // ensure only append when value is already string, otherwise it will be cast
                    // to string and cause the type check to miss.
                    function Qe(t, e) {
                        return "string" == typeof t ? e + t : t;
                    }
                    function tn(t) {
                        ((t._o = Je),
                            (t._n = _),
                            (t._s = g),
                            (t._l = Be),
                            (t._t = Fe),
                            (t._q = M),
                            (t._i = z),
                            (t._m = He),
                            (t._f = Ue),
                            (t._k = Ve),
                            (t._b = We),
                            (t._v = yt),
                            (t._e = gt),
                            (t._u = Ze),
                            (t._g = Ye),
                            (t._d = Xe),
                            (t._p = Qe));
                    }
                    /**
                     * Runtime helper for resolving raw children VNodes into a slot object.
                     */ function en(t, e) {
                        if (!t || !t.length) return {};
                        for (var n = {}, r = 0, o = t.length; r < o; r++) {
                            var i = t[r],
                                a = i.data;
                            // named slots should only be respected if the vnode was rendered in the
                            // same context.
                            if (
                                // remove slot attribute if the node is resolved as a Vue slot node
                                (a && a.attrs && a.attrs.slot && delete a.attrs.slot, (i.context !== e && i.fnContext !== e) || !a || null == a.slot)
                            )
                                (n.default || (n.default = [])).push(i);
                            else {
                                var c = a.slot,
                                    s = n[c] || (n[c] = []);
                                "template" === i.tag ? s.push.apply(s, i.children || []) : s.push(i);
                            }
                        }
                        // ignore slots that contains only whitespace
                        for (var u in n) n[u].every(nn) && delete n[u];
                        return n;
                    }
                    function nn(t) {
                        return (t.isComment && !t.asyncFactory) || " " === t.text;
                    }
                    function rn(t) {
                        // @ts-expect-error not really boolean type
                        return t.isComment && t.asyncFactory;
                    }
                    function on(t, e, n, r) {
                        var i,
                            a = Object.keys(n).length > 0,
                            c = e ? !!e.$stable : !a,
                            s = e && e.$key;
                        if (e) {
                            if (e._normalized)
                                // fast path 1: child component re-render only, parent did not change
                                return e._normalized;
                            // expose normal slots on scopedSlots
                            if (c && r && r !== o && s === r.$key && !a && !r.$hasNormal)
                                // fast path 2: stable scoped slots w/ no normal slots to proxy,
                                // only need to normalize once
                                return r;
                            for (var u in ((i = {}), e)) e[u] && "$" !== u[0] && (i[u] = an(t, n, u, e[u]));
                        } else i = {};
                        for (var l in n) l in i || (i[l] = cn(n, l));
                        // avoriaz seems to mock a non-extensible $scopedSlots object
                        // and when that is passed down this would cause an error
                        return (e && Object.isExtensible(e) && (e._normalized = i), q(i, "$stable", c), q(i, "$key", s), q(i, "$hasNormal", a), i);
                    }
                    function an(t, e, n, r) {
                        var o = function () {
                            var e = pt;
                            ht(t);
                            var n = arguments.length ? r.apply(null, arguments) : r({}),
                                o = (n = n && "object" == typeof n && !i(n) ? [n] : De(n)) && n[0];
                            return (ht(e), n && (!o || (1 === n.length && o.isComment && !rn(o))) ? void 0 : n);
                        };
                        // this is a slot using the new v-slot syntax without scope. although it is
                        // compiled as a scoped slot, render fn users would expect it to be present
                        // on this.$slots because the usage is semantically a normal slot.
                        return (r.proxy && Object.defineProperty(e, n, { get: o, enumerable: !0, configurable: !0 }), o);
                    }
                    function cn(t, e) {
                        return function () {
                            return t[e];
                        };
                    }
                    function sn(t) {
                        return {
                            get attrs() {
                                if (!t._attrsProxy) {
                                    var e = (t._attrsProxy = {});
                                    (q(e, "_v_attr_proxy", !0), un(e, t.$attrs, o, t, "$attrs"));
                                }
                                return t._attrsProxy;
                            },
                            get listeners() {
                                t._listenersProxy || un((t._listenersProxy = {}), t.$listeners, o, t, "$listeners");
                                return t._listenersProxy;
                            },
                            get slots() {
                                return (function (t) {
                                    t._slotsProxy || fn((t._slotsProxy = {}), t.$scopedSlots);
                                    return t._slotsProxy;
                                })(t);
                            },
                            emit: E(t.$emit, t),
                            expose: function (e) {
                                e &&
                                    Object.keys(e).forEach(function (n) {
                                        return re(t, e, n);
                                    });
                            },
                        };
                    }
                    function un(t, e, n, r, o) {
                        var i = !1;
                        for (var a in e) a in t ? e[a] !== n[a] && (i = !0) : ((i = !0), ln(t, a, r, o));
                        for (var a in t) a in e || ((i = !0), delete t[a]);
                        return i;
                    }
                    function ln(t, e, n, r) {
                        Object.defineProperty(t, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: function () {
                                return n[r][e];
                            },
                        });
                    }
                    function fn(t, e) {
                        for (var n in e) t[n] = e[n];
                        for (var n in t) n in e || delete t[n];
                    }
                    /**
                     * @internal use manual type def because public setup context type relies on
                     * legacy VNode types
                     */ function dn() {
                        return hn().slots;
                    }
                    /**
                     * @internal use manual type def because public setup context type relies on
                     * legacy VNode types
                     */ function pn() {
                        return hn().attrs;
                    }
                    /**
                     * Vue 2 only
                     * @internal use manual type def because public setup context type relies on
                     * legacy VNode types
                     */ function vn() {
                        return hn().listeners;
                    }
                    function hn() {
                        var t = pt;
                        return t._setupContext || (t._setupContext = sn(t));
                    }
                    /**
                     * Runtime helper for merging default declarations. Imported by compiled code
                     * only.
                     * @internal
                     */ function mn(t, e) {
                        var n = i(t)
                            ? t.reduce(function (t, e) {
                                  return ((t[e] = {}), t);
                              }, {})
                            : t;
                        for (var r in e) {
                            var o = n[r];
                            o ? (i(o) || l(o) ? (n[r] = { type: o, default: e[r] }) : (o.default = e[r])) : null === o && (n[r] = { default: e[r] });
                        }
                        return n;
                    }
                    var gn = null;
                    function yn(t, e) {
                        return ((t.__esModule || (dt && "Module" === t[Symbol.toStringTag])) && (t = t.default), f(t) ? e.extend(t) : t);
                    }
                    function _n(t) {
                        if (i(t))
                            for (var e = 0; e < t.length; e++) {
                                var n = t[e];
                                if (c(n) && (c(n.componentOptions) || rn(n))) return n;
                            }
                    }
                    var bn = 1,
                        wn = 2;
                    // wrapper function for providing a more flexible interface
                    // without getting yelled at by flow
                    function On(t, e, n, r, o, a) {
                        return (
                            (i(n) || u(n)) && ((o = r), (r = n), (n = void 0)),
                            s(a) && (o = wn),
                            (function (t, e, n, r, o) {
                                if (c(n) && c(n.__ob__)) return gt();
                                // object syntax in v-bind
                                c(n) && c(n.is) && (e = n.is);
                                if (!e)
                                    // in case of component :is set to falsy value
                                    return gt();
                                // warn against non-primitive key
                                0;
                                // support single function children as default scoped slot
                                i(r) && l(r[0]) && (((n = n || {}).scopedSlots = { default: r[0] }), (r.length = 0));
                                o === wn
                                    ? (r = De(r))
                                    : o === bn &&
                                      (r = (function (t) {
                                          for (var e = 0; e < t.length; e++) if (i(t[e])) return Array.prototype.concat.apply([], t);
                                          return t;
                                      })(r));
                                var a, s;
                                if ("string" == typeof e) {
                                    var u = void 0;
                                    ((s = (t.$vnode && t.$vnode.ns) || W.getTagNamespace(e)),
                                        (a = W.isReservedTag(e)
                                            ? new mt(W.parsePlatformTagName(e), n, r, void 0, void 0, t)
                                            : (n && n.pre) || !c((u = Kr(t.$options, "components", e)))
                                              ? new mt(e, n, r, void 0, void 0, t)
                                              : zr(u, n, t, r, e)));
                                } else
                                    // direct component options / constructor
                                    a = zr(e, n, t, r);
                                return i(a)
                                    ? a
                                    : c(a)
                                      ? (c(s) && Cn(a, s),
                                        c(n) &&
                                            // ref #5318
                                            // necessary to ensure parent re-render when deep bindings like :style and
                                            // :class are used on slot nodes
                                            (function (t) {
                                                f(t.style) && ir(t.style);
                                                f(t.class) && ir(t.class);
                                            })(
                                                /**
                                                 * @internal this function needs manual public type declaration because it relies
                                                 * on previously manually authored types from Vue 2
                                                 */ n,
                                            ),
                                        a)
                                      : gt();
                            })(t, e, n, r, o)
                        );
                    }
                    function Cn(t, e, n) {
                        if (
                            ((t.ns = e),
                            "foreignObject" === t.tag &&
                                // use default namespace inside foreignObject
                                ((e = void 0), (n = !0)),
                            c(t.children))
                        )
                            for (var r = 0, o = t.children.length; r < o; r++) {
                                var i = t.children[r];
                                c(i.tag) && (a(i.ns) || (s(n) && "svg" !== i.tag)) && Cn(i, e, n);
                            }
                    }
                    function Sn(t, e, n) {
                        return On(pt, t, e, n, 2, !0);
                    }
                    function xn(t, e, n) {
                        // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
                        // See: https://github.com/vuejs/vuex/issues/1505
                        xt();
                        try {
                            if (e)
                                for (var r = e; (r = r.$parent); ) {
                                    var o = r.$options.errorCaptured;
                                    if (o)
                                        for (var i = 0; i < o.length; i++)
                                            try {
                                                if (!1 === o[i].call(r, t, e, n)) return;
                                            } catch (t) {
                                                kn(t, r, "errorCaptured hook");
                                            }
                                }
                            kn(t, e, n);
                        } finally {
                            jt();
                        }
                    }
                    function jn(t, e, n, r, o) {
                        var i;
                        try {
                            (i = n ? t.apply(e, n) : t.call(e)) &&
                                !i._isVue &&
                                m(i) &&
                                !i._handled &&
                                (i.catch(function (t) {
                                    return xn(t, r, o + " (Promise/async)");
                                }),
                                (i._handled = !0));
                        } catch (t) {
                            xn(t, r, o);
                        }
                        return i;
                    }
                    function kn(t, e, n) {
                        if (W.errorHandler)
                            try {
                                return W.errorHandler.call(null, t, e, n);
                            } catch (e) {
                                // if the user intentionally throws the original error in the handler,
                                // do not log it twice
                                e !== t && $n(e, null, "config.errorHandler");
                            }
                        $n(t, e, n);
                    }
                    function $n(t, e, n) {
                        /* istanbul ignore else */
                        if (!Z || "undefined" == typeof console) throw t;
                        console.error(t);
                    }
                    /* globals MutationObserver */ var In,
                        Pn = !1,
                        En = [],
                        Tn = !1;
                    function Nn() {
                        Tn = !1;
                        var t = En.slice(0);
                        En.length = 0;
                        for (var e = 0; e < t.length; e++) t[e]();
                    }
                    // Here we have async deferring wrappers using microtasks.
                    // In 2.5 we used (macro) tasks (in combination with microtasks).
                    // However, it has subtle problems when state is changed right before repaint
                    // (e.g. #6813, out-in transitions).
                    // Also, using (macro) tasks in event handler would cause some weird behaviors
                    // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
                    // So we now use microtasks everywhere, again.
                    // A major drawback of this tradeoff is that there are some scenarios
                    // where microtasks have too high a priority and fire in between supposedly
                    // sequential events (e.g. #4521, #6690, which have workarounds)
                    // or even between bubbling of the same event (#6566).
                    // The nextTick behavior leverages the microtask queue, which can be accessed
                    // via either native Promise.then or MutationObserver.
                    // MutationObserver has wider support, however it is seriously bugged in
                    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
                    // completely stops working after triggering a few times... so, if native
                    // Promise is available, we will use it:
                    /* istanbul ignore next, $flow-disable-line */
                    if ("undefined" != typeof Promise && lt(Promise)) {
                        var An = Promise.resolve();
                        ((In = function () {
                            (An.then(Nn),
                                // In problematic UIWebViews, Promise.then doesn't completely break, but
                                // it can get stuck in a weird state where callbacks are pushed into the
                                // microtask queue but the queue isn't being flushed, until the browser
                                // needs to do some other work, e.g. handle a timer. Therefore we can
                                // "force" the microtask queue to be flushed by adding an empty timer.
                                nt && setTimeout(L));
                        }),
                            (Pn = !0));
                    } else if (
                        Q ||
                        "undefined" == typeof MutationObserver ||
                        (!lt(MutationObserver) &&
                            // PhantomJS and iOS 7.x
                            "[object MutationObserverConstructor]" !== MutationObserver.toString())
                    )
                        // Fallback to setImmediate.
                        // Technically it leverages the (macro) task queue,
                        // but it is still a better choice than setTimeout.
                        In =
                            void 0 !== r && lt(r)
                                ? function () {
                                      r(Nn);
                                  }
                                : function () {
                                      setTimeout(Nn, 0);
                                  };
                    /**
                     * @internal
                     */ else {
                        // Use MutationObserver where native Promise is not available,
                        // e.g. PhantomJS, iOS7, Android 4.4
                        // (#6466 MutationObserver is unreliable in IE11)
                        var Ln = 1,
                            Rn = new MutationObserver(Nn),
                            Dn = document.createTextNode(String(Ln));
                        (Rn.observe(Dn, { characterData: !0 }),
                            (In = function () {
                                ((Ln = (Ln + 1) % 2), (Dn.data = String(Ln)));
                            }),
                            (Pn = !0));
                    }
                    function Mn(t, e) {
                        var n;
                        // $flow-disable-line
                        if (
                            (En.push(function () {
                                if (t)
                                    try {
                                        t.call(e);
                                    } catch (t) {
                                        xn(t, e, "nextTick");
                                    }
                                else n && n(e);
                            }),
                            Tn || ((Tn = !0), In()),
                            !t && "undefined" != typeof Promise)
                        )
                            return new Promise(function (t) {
                                n = t;
                            });
                    }
                    function zn(t) {
                        if ((void 0 === t && (t = "$style"), /* istanbul ignore else */ !pt)) return o;
                        var e = pt[t];
                        return e || o;
                    }
                    /**
                     * Runtime helper for SFC's CSS variable injection feature.
                     * @private
                     */ function Bn(t) {
                        if (Z) {
                            var e = pt;
                            e &&
                                _e(function () {
                                    var n = e.$el,
                                        r = t(e, e._setupProxy);
                                    if (n && 1 === n.nodeType) {
                                        var o = n.style;
                                        for (var i in r) o.setProperty("--".concat(i), r[i]);
                                    }
                                });
                        }
                    }
                    /**
                     * v3-compatible async component API.
                     * @internal the type is manually declared in <root>/types/v3-define-async-component.d.ts
                     * because it relies on existing manual types
                     */ function Fn(t) {
                        l(t) && (t = { loader: t });
                        var e = t.loader,
                            n = t.loadingComponent,
                            r = t.errorComponent,
                            o = t.delay,
                            i = void 0 === o ? 200 : o,
                            a = t.timeout, // in Vue 3 default is true
                            c = (t.suspensible, t.onError);
                        var s = null,
                            u = 0,
                            f = function () {
                                var t;
                                return (
                                    s ||
                                    (t = s =
                                        e()
                                            .catch(function (t) {
                                                if (((t = t instanceof Error ? t : new Error(String(t))), c))
                                                    return new Promise(function (e, n) {
                                                        c(
                                                            t,
                                                            function () {
                                                                return e((u++, (s = null), f()));
                                                            },
                                                            function () {
                                                                return n(t);
                                                            },
                                                            u + 1,
                                                        );
                                                    });
                                                throw t;
                                            })
                                            .then(function (e) {
                                                return t !== s && s
                                                    ? s
                                                    : // interop module default
                                                      (e && (e.__esModule || "Module" === e[Symbol.toStringTag]) && (e = e.default), e);
                                            }))
                                );
                            };
                        return function () {
                            return { component: f(), delay: i, timeout: a, error: r, loading: n };
                        };
                    }
                    function Un(t) {
                        return function (e, n) {
                            if ((void 0 === n && (n = pt), n))
                                return (function (t, e, n) {
                                    var r = t.$options;
                                    r[e] = Wr(r[e], n);
                                })(n, t, e);
                        };
                    }
                    var Gn = Un("beforeMount"),
                        Vn = Un("mounted"),
                        Wn = Un("beforeUpdate"),
                        Hn = Un("updated"),
                        Jn = Un("beforeDestroy"),
                        qn = Un("destroyed"),
                        Kn = Un("activated"),
                        Yn = Un("deactivated"),
                        Zn = Un("serverPrefetch"),
                        Xn = Un("renderTracked"),
                        Qn = Un("renderTriggered"),
                        tr = Un("errorCaptured");
                    function er(t, e) {
                        (void 0 === e && (e = pt), tr(t, e));
                    }
                    /**
                     * Note: also update dist/vue.runtime.mjs when adding new exports to this file.
                     */ var nr = "2.7.16";
                    /**
                     * @internal type is manually declared in <root>/types/v3-define-component.d.ts
                     */ function rr(t) {
                        return t;
                    }
                    var or = new ft();
                    /**
                     * Recursively traverse an object to evoke all converted
                     * getters, so that every nested property inside the object
                     * is collected as a "deep" dependency.
                     */ function ir(t) {
                        return (ar(t, or), or.clear(), t);
                    }
                    function ar(t, e) {
                        var n,
                            r,
                            o = i(t);
                        if (!((!o && !f(t)) || t.__v_skip /* ReactiveFlags.SKIP */ || Object.isFrozen(t) || t instanceof mt)) {
                            if (t.__ob__) {
                                var a = t.__ob__.dep.id;
                                if (e.has(a)) return;
                                e.add(a);
                            }
                            if (o) for (n = t.length; n--; ) ar(t[n], e);
                            else if (Yt(t)) ar(t.value, e);
                            else for (n = (r = Object.keys(t)).length; n--; ) ar(t[r[n]], e);
                        }
                    }
                    var cr,
                        sr = 0,
                        ur = /** @class */ (function () {
                            function t(t, e, n, r, o) {
                                var i, a;
                                ((i = this),
                                    void 0 ===
                                        (a =
                                            // if the active effect scope is manually created (not a component scope),
                                            // prioritize it
                                            we && !we._vm ? we : t ? t._scope : void 0) && (a = we),
                                    a && a.active && a.effects.push(i),
                                    (this.vm = t) && o && (t._watcher = this),
                                    // options
                                    r
                                        ? ((this.deep = !!r.deep),
                                          (this.user = !!r.user),
                                          (this.lazy = !!r.lazy),
                                          (this.sync = !!r.sync),
                                          (this.before = r.before))
                                        : (this.deep = this.user = this.lazy = this.sync = !1),
                                    (this.cb = n),
                                    (this.id = ++sr), // uid for batching
                                    (this.active = !0),
                                    (this.post = !1),
                                    (this.dirty = this.lazy), // for lazy watchers
                                    (this.deps = []),
                                    (this.newDeps = []),
                                    (this.depIds = new ft()),
                                    (this.newDepIds = new ft()),
                                    (this.expression = ""),
                                    // parse expression for getter
                                    l(e)
                                        ? (this.getter = e)
                                        : ((this.getter = (function (t) {
                                              if (!K.test(t)) {
                                                  var e = t.split(".");
                                                  return function (t) {
                                                      for (var n = 0; n < e.length; n++) {
                                                          if (!t) return;
                                                          t = t[e[n]];
                                                      }
                                                      return t;
                                                  };
                                              }
                                          })(e)),
                                          this.getter || (this.getter = L)),
                                    (this.value = this.lazy ? void 0 : this.get()));
                            }
                            /**
                             * Evaluate the getter, and re-collect dependencies.
                             */ return (
                                (t.prototype.get = function () {
                                    var t;
                                    xt(this);
                                    var e = this.vm;
                                    try {
                                        t = this.getter.call(e, e);
                                    } catch (t) {
                                        if (!this.user) throw t;
                                        xn(t, e, 'getter for watcher "'.concat(this.expression, '"'));
                                    } finally {
                                        // "touch" every property so they are all tracked as
                                        // dependencies for deep watching
                                        (this.deep && ir(t), jt(), this.cleanupDeps());
                                    }
                                    return t;
                                }),
                                /**
                                 * Add a dependency to this directive.
                                 */
                                (t.prototype.addDep = function (t) {
                                    var e = t.id;
                                    this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
                                }),
                                /**
                                 * Clean up for dependency collection.
                                 */
                                (t.prototype.cleanupDeps = function () {
                                    for (var t = this.deps.length; t--; ) {
                                        var e = this.deps[t];
                                        this.newDepIds.has(e.id) || e.removeSub(this);
                                    }
                                    var n = this.depIds;
                                    ((this.depIds = this.newDepIds),
                                        (this.newDepIds = n),
                                        this.newDepIds.clear(),
                                        (n = this.deps),
                                        (this.deps = this.newDeps),
                                        (this.newDeps = n),
                                        (this.newDeps.length = 0));
                                }),
                                /**
                                 * Subscriber interface.
                                 * Will be called when a dependency changes.
                                 */
                                (t.prototype.update = function () {
                                    /* istanbul ignore else */
                                    this.lazy ? (this.dirty = !0) : this.sync ? this.run() : Er(this);
                                }),
                                /**
                                 * Scheduler job interface.
                                 * Will be called by the scheduler.
                                 */
                                (t.prototype.run = function () {
                                    if (this.active) {
                                        var t = this.get();
                                        if (
                                            t !== this.value ||
                                            // Deep watchers and watchers on Object/Arrays should fire even
                                            // when the value is the same, because the value may
                                            // have mutated.
                                            f(t) ||
                                            this.deep
                                        ) {
                                            // set new value
                                            var e = this.value;
                                            if (((this.value = t), this.user)) {
                                                var n = 'callback for watcher "'.concat(this.expression, '"');
                                                jn(this.cb, this.vm, [t, e], this.vm, n);
                                            } else this.cb.call(this.vm, t, e);
                                        }
                                    }
                                }),
                                /**
                                 * Evaluate the value of the watcher.
                                 * This only gets called for lazy watchers.
                                 */
                                (t.prototype.evaluate = function () {
                                    ((this.value = this.get()), (this.dirty = !1));
                                }),
                                /**
                                 * Depend on all deps collected by this watcher.
                                 */
                                (t.prototype.depend = function () {
                                    for (var t = this.deps.length; t--; ) this.deps[t].depend();
                                }),
                                /**
                                 * Remove self from all dependencies' subscriber list.
                                 */
                                (t.prototype.teardown = function () {
                                    if ((this.vm && !this.vm._isBeingDestroyed && O(this.vm._scope.effects, this), this.active)) {
                                        for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
                                        ((this.active = !1), this.onStop && this.onStop());
                                    }
                                }),
                                t
                            );
                        })();
                    /**
                     * A watcher parses an expression, collects dependencies,
                     * and fires callback when the expression value changes.
                     * This is used for both the $watch() api and directives.
                     * @internal
                     */ function lr(t, e) {
                        cr.$on(t, e);
                    }
                    function fr(t, e) {
                        cr.$off(t, e);
                    }
                    function dr(t, e) {
                        var n = cr;
                        return function r() {
                            null !== e.apply(null, arguments) && n.$off(t, r);
                        };
                    }
                    function pr(t, e, n) {
                        ((cr = t), Ae(e, n || {}, lr, fr, dr, t), (cr = void 0));
                    }
                    var vr = null;
                    function hr(t) {
                        var e = vr;
                        return (
                            (vr = t),
                            function () {
                                vr = e;
                            }
                        );
                    }
                    function mr(t) {
                        for (; t && (t = t.$parent); ) if (t._inactive) return !0;
                        return !1;
                    }
                    function gr(t, e) {
                        if (e) {
                            if (((t._directInactive = !1), mr(t))) return;
                        } else if (t._directInactive) return;
                        if (t._inactive || null === t._inactive) {
                            t._inactive = !1;
                            for (var n = 0; n < t.$children.length; n++) gr(t.$children[n]);
                            _r(t, "activated");
                        }
                    }
                    function yr(t, e) {
                        if (!((e && ((t._directInactive = !0), mr(t))) || t._inactive)) {
                            t._inactive = !0;
                            for (var n = 0; n < t.$children.length; n++) yr(t.$children[n]);
                            _r(t, "deactivated");
                        }
                    }
                    function _r(t, e, n, r) {
                        (void 0 === r && (r = !0),
                            // #7573 disable dep collection when invoking lifecycle hooks
                            xt());
                        var o = pt,
                            i = ke();
                        r && ht(t);
                        var a = t.$options[e],
                            c = "".concat(e, " hook");
                        if (a) for (var s = 0, u = a.length; s < u; s++) jn(a[s], t, n || null, t, c);
                        (t._hasHookEvent && t.$emit("hook:" + e), r && (ht(o), i && i.on()), jt());
                    }
                    var br = [],
                        wr = [],
                        Or = {},
                        Cr = !1,
                        Sr = !1,
                        xr = 0;
                    // Async edge case #6566 requires saving the timestamp when event listeners are
                    // attached. However, calling performance.now() has a perf overhead especially
                    // if the page has thousands of event listeners. Instead, we take a timestamp
                    // every time the scheduler flushes and use that for all event listeners
                    // attached during that flush.
                    var jr = 0,
                        kr = Date.now;
                    // Async edge case fix requires storing an event listener's attach timestamp.
                    // Determine what event timestamp the browser is using. Annoyingly, the
                    // timestamp can either be hi-res (relative to page load) or low-res
                    // (relative to UNIX epoch), so in order to compare time we have to use the
                    // same timestamp type when saving the flush timestamp.
                    // All IE versions use low-res event timestamps, and have problematic clock
                    // implementations (#9632)
                    if (Z && !Q) {
                        var $r = window.performance;
                        $r &&
                            "function" == typeof $r.now &&
                            kr() > document.createEvent("Event").timeStamp &&
                            // if the event timestamp, although evaluated AFTER the Date.now(), is
                            // smaller than it, it means the event is using a hi-res timestamp,
                            // and we need to use the hi-res version for event listener timestamps as
                            // well.
                            (kr = function () {
                                return $r.now();
                            });
                    }
                    var Ir = function (t, e) {
                        if (t.post) {
                            if (!e.post) return 1;
                        } else if (e.post) return -1;
                        return t.id - e.id;
                    };
                    /**
                     * Flush both queues and run the watchers.
                     */ function Pr() {
                        var t, e;
                        // Sort queue before flush.
                        // This ensures that:
                        // 1. Components are updated from parent to child. (because parent is always
                        //    created before the child)
                        // 2. A component's user watchers are run before its render watcher (because
                        //    user watchers are created before the render watcher)
                        // 3. If a component is destroyed during a parent component's watcher run,
                        //    its watchers can be skipped.
                        // do not cache length because more watchers might be pushed
                        // as we run existing watchers
                        for (jr = kr(), Sr = !0, br.sort(Ir), xr = 0; xr < br.length; xr++)
                            ((t = br[xr]).before && t.before(), (e = t.id), (Or[e] = null), t.run());
                        // keep copies of post queues before resetting state
                        var n = wr.slice(),
                            r = br.slice();
                        ((xr = br.length = wr.length = 0),
                            (Or = {}),
                            (Cr = Sr = !1),
                            // call component updated and activated hooks
                            (function (t) {
                                for (var e = 0; e < t.length; e++) ((t[e]._inactive = !0), gr(t[e], !0 /* true */));
                            })(
                                /**
                                 * Push a watcher into the watcher queue.
                                 * Jobs with duplicate IDs will be skipped unless it's
                                 * pushed when the queue is being flushed.
                                 */ n,
                            ),
                            (function (t) {
                                var e = t.length;
                                for (; e--; ) {
                                    var n = t[e],
                                        r = n.vm;
                                    r && r._watcher === n && r._isMounted && !r._isDestroyed && _r(r, "updated");
                                }
                            })(
                                /**
                                 * Queue a kept-alive component that was activated during patch.
                                 * The queue will be processed after the entire tree has been patched.
                                 */ r,
                            ),
                            Ot(),
                            // devtool hook
                            /* istanbul ignore if */
                            ut && W.devtools && ut.emit("flush"));
                    }
                    function Er(t) {
                        var e = t.id;
                        if (null == Or[e] && (t !== Ct.target || !t.noRecurse)) {
                            if (((Or[e] = !0), Sr)) {
                                for (
                                    // if already flushing, splice the watcher based on its id
                                    // if already past its id, it will be run next immediately.
                                    var n = br.length - 1;
                                    n > xr && br[n].id > t.id;
                                )
                                    n--;
                                br.splice(n + 1, 0, t);
                            }
                            // queue the flush
                            else br.push(t);
                            Cr || ((Cr = !0), Mn(Pr));
                        }
                    }
                    function Tr(t, e) {
                        if (t) {
                            for (
                                // inject is :any because flow is not smart enough to figure out cached
                                var n = Object.create(null), r = dt ? Reflect.ownKeys(t) : Object.keys(t), o = 0;
                                o < r.length;
                                o++
                            ) {
                                var i = r[o];
                                // #6574 in case the inject object is observed...
                                if ("__ob__" !== i) {
                                    var a = t[i].from;
                                    if (a in e._provided) n[i] = e._provided[a];
                                    else if ("default" in t[i]) {
                                        var c = t[i].default;
                                        n[i] = l(c) ? c.call(e) : c;
                                    } else 0;
                                }
                            }
                            return n;
                        }
                    }
                    function Nr(t, e, n, r, a) {
                        var c,
                            u = this,
                            l = a.options;
                        S(r, "_uid")
                            ? ((c = Object.create(r))._original = r)
                            : // the context vm passed in is a functional context as well.
                              // in this case we want to make sure we are able to get a hold to the
                              // real context instance.
                              ((c = r),
                              // @ts-ignore
                              (r = r._original));
                        var f = s(l._compiled),
                            d = !f;
                        ((this.data = t),
                            (this.props = e),
                            (this.children = n),
                            (this.parent = r),
                            (this.listeners = t.on || o),
                            (this.injections = Tr(l.inject, r)),
                            (this.slots = function () {
                                return (u.$slots || on(r, t.scopedSlots, (u.$slots = en(n, r))), u.$slots);
                            }),
                            Object.defineProperty(this, "scopedSlots", {
                                enumerable: !0,
                                get: function () {
                                    return on(r, t.scopedSlots, this.slots());
                                },
                            }),
                            // support for compiled functional template
                            f &&
                                // exposing $options for renderStatic()
                                ((this.$options = l),
                                // pre-resolve slots for renderSlot()
                                (this.$slots = this.slots()),
                                (this.$scopedSlots = on(r, t.scopedSlots, this.$slots))),
                            l._scopeId
                                ? (this._c = function (t, e, n, o) {
                                      var a = On(c, t, e, n, o, d);
                                      return (a && !i(a) && ((a.fnScopeId = l._scopeId), (a.fnContext = r)), a);
                                  })
                                : (this._c = function (t, e, n, r) {
                                      return On(c, t, e, n, r, d);
                                  }));
                    }
                    function Ar(t, e, n, r, o) {
                        // #7817 clone node before setting fnContext, otherwise if the node is reused
                        // (e.g. it was from a cached normal slot) the fnContext causes named slots
                        // that should not be matched to match.
                        var i = _t(t);
                        return ((i.fnContext = n), (i.fnOptions = r), e.slot && ((i.data || (i.data = {})).slot = e.slot), i);
                    }
                    function Lr(t, e) {
                        for (var n in e) t[k(n)] = e[n];
                    }
                    function Rr(t) {
                        return t.name || t.__name || t._componentTag;
                    }
                    // inline hooks to be invoked on component VNodes during patch
                    tn(Nr.prototype);
                    var Dr = {
                            init: function (t, e) {
                                if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                                    // kept-alive components, treat as a patch
                                    var n = t; // work around flow
                                    Dr.prepatch(n, n);
                                } else {
                                    (t.componentInstance = (function (
                                        // we know it's MountedComponentVNode but flow doesn't
                                        t,
                                        // activeInstance in lifecycle state
                                        e,
                                    ) {
                                        var n = { _isComponent: !0, _parentVnode: t, parent: e },
                                            r = t.data.inlineTemplate;
                                        // check inline-template render functions
                                        c(r) && ((n.render = r.render), (n.staticRenderFns = r.staticRenderFns));
                                        return new t.componentOptions.Ctor(n);
                                    })(t, vr)).$mount(e ? t.elm : void 0, e);
                                }
                            },
                            prepatch: function (t, e) {
                                var n = e.componentOptions;
                                !(function (t, e, n, r, i) {
                                    // determine whether component has slot children
                                    // we need to do this before overwriting $options._renderChildren.
                                    // check if there are dynamic scopedSlots (hand-written or compiled but with
                                    // dynamic slot names). Static scoped slots compiled from template has the
                                    // "$stable" marker.
                                    var a = r.data.scopedSlots,
                                        c = t.$scopedSlots,
                                        s = !!(
                                            (a && !a.$stable) ||
                                            (c !== o && !c.$stable) ||
                                            (a && t.$scopedSlots.$key !== a.$key) ||
                                            (!a && t.$scopedSlots.$key)
                                        ),
                                        u = !!(
                                            i || // has new static slots
                                            t.$options._renderChildren || // has old static slots
                                            s
                                        ),
                                        l = t.$vnode;
                                    ((t.$options._parentVnode = r),
                                        (t.$vnode = r), // update vm's placeholder node without re-render
                                        t._vnode &&
                                            // update child tree's parent
                                            (t._vnode.parent = r),
                                        (t.$options._renderChildren = i));
                                    // update $attrs and $listeners hash
                                    // these are also reactive so they may trigger child update if the child
                                    // used them during render
                                    var f = r.data.attrs || o;
                                    (t._attrsProxy && un(t._attrsProxy, f, (l.data && l.data.attrs) || o, t, "$attrs") && (u = !0),
                                        (t.$attrs = f),
                                        // update listeners
                                        (n = n || o));
                                    var d = t.$options._parentListeners;
                                    // update props
                                    if (
                                        (t._listenersProxy && un(t._listenersProxy, n, d || o, t, "$listeners"),
                                        (t.$listeners = t.$options._parentListeners = n),
                                        pr(t, n, d),
                                        e && t.$options.props)
                                    ) {
                                        Tt(!1);
                                        for (var p = t._props, v = t.$options._propKeys || [], h = 0; h < v.length; h++) {
                                            var m = v[h],
                                                g = t.$options.props; // wtf flow?
                                            p[m] = Yr(m, g, e, t);
                                        }
                                        (Tt(!0),
                                            // keep a copy of raw propsData
                                            (t.$options.propsData = e));
                                    }
                                    // resolve slots + force update if has children
                                    u && ((t.$slots = en(i, r.context)), t.$forceUpdate());
                                })(
                                    (e.componentInstance = t.componentInstance),
                                    n.propsData, // updated props
                                    n.listeners, // updated listeners
                                    e, // new parent vnode
                                    n.children,
                                );
                            },
                            insert: function (t) {
                                var e,
                                    n = t.context,
                                    r = t.componentInstance;
                                (r._isMounted || ((r._isMounted = !0), _r(r, "mounted")),
                                    t.data.keepAlive &&
                                        (n._isMounted
                                            ? // vue-router#1212
                                              // During updates, a kept-alive component's child components may
                                              // change, so directly walking the tree here may call activated hooks
                                              // on incorrect children. Instead we push them into a queue which will
                                              // be processed after the whole patch process ended.
                                              // setting _inactive to false here so that a render function can
                                              // rely on checking whether it's in an inactive tree (e.g. router-view)
                                              (((e = r)._inactive = !1), wr.push(e))
                                            : gr(r, !0 /* direct */)));
                            },
                            destroy: function (t) {
                                var e = t.componentInstance;
                                e._isDestroyed || (t.data.keepAlive ? yr(e, !0 /* direct */) : e.$destroy());
                            },
                        },
                        Mr = Object.keys(Dr);
                    function zr(t, e, n, r, u) {
                        if (!a(t)) {
                            var l = n.$options._base;
                            // plain options object: turn it into a constructor
                            // if at this stage it's not a constructor or an async component factory,
                            // reject.
                            if ((f(t) && (t = l.extend(t)), "function" == typeof t)) {
                                // async component
                                var d;
                                // @ts-expect-error
                                if (
                                    a(t.cid) &&
                                    ((t = (function (t, e) {
                                        if (s(t.error) && c(t.errorComp)) return t.errorComp;
                                        if (c(t.resolved)) return t.resolved;
                                        var n = gn;
                                        if (
                                            (n &&
                                                c(t.owners) &&
                                                -1 === t.owners.indexOf(n) &&
                                                // already pending
                                                t.owners.push(n),
                                            s(t.loading) && c(t.loadingComp))
                                        )
                                            return t.loadingComp;
                                        if (n && !c(t.owners)) {
                                            var r = (t.owners = [n]),
                                                o = !0,
                                                i = null,
                                                u = null;
                                            n.$on("hook:destroyed", function () {
                                                return O(r, n);
                                            });
                                            var l = function (t) {
                                                    for (var e = 0, n = r.length; e < n; e++) r[e].$forceUpdate();
                                                    t &&
                                                        ((r.length = 0),
                                                        null !== i && (clearTimeout(i), (i = null)),
                                                        null !== u && (clearTimeout(u), (u = null)));
                                                },
                                                d = B(function (n) {
                                                    // cache resolved
                                                    ((t.resolved = yn(n, e)),
                                                        // invoke callbacks only if this is not a synchronous resolve
                                                        // (async resolves are shimmed as synchronous during SSR)
                                                        o ? (r.length = 0) : l(!0));
                                                }),
                                                p = B(function (e) {
                                                    c(t.errorComp) && ((t.error = !0), l(!0));
                                                }),
                                                v = t(d, p);
                                            // return in case resolved synchronously
                                            return (
                                                f(v) &&
                                                    (m(v)
                                                        ? // () => Promise
                                                          a(t.resolved) && v.then(d, p)
                                                        : m(v.component) &&
                                                          (v.component.then(d, p),
                                                          c(v.error) && (t.errorComp = yn(v.error, e)),
                                                          c(v.loading) &&
                                                              ((t.loadingComp = yn(v.loading, e)),
                                                              0 === v.delay
                                                                  ? (t.loading = !0)
                                                                  : // @ts-expect-error NodeJS timeout type
                                                                    (i = setTimeout(function () {
                                                                        ((i = null), a(t.resolved) && a(t.error) && ((t.loading = !0), l(!1)));
                                                                    }, v.delay || 200))),
                                                          c(v.timeout) &&
                                                              // @ts-expect-error NodeJS timeout type
                                                              (u = setTimeout(function () {
                                                                  ((u = null), a(t.resolved) && p(null));
                                                              }, v.timeout)))),
                                                (o = !1),
                                                t.loading ? t.loadingComp : t.resolved
                                            );
                                        }
                                    })((d = t), l)),
                                    void 0 === t)
                                )
                                    // return a placeholder node for async component, which is rendered
                                    // as a comment node but preserves all the raw information for the node.
                                    // the information will be used for async server-rendering and hydration.
                                    return (function (t, e, n, r, o) {
                                        var i = gt();
                                        return ((i.asyncFactory = t), (i.asyncMeta = { data: e, context: n, children: r, tag: o }), i);
                                    })(d, e, n, r, u);
                                ((e = e || {}),
                                    // resolve constructor options in case global mixins are applied after
                                    // component constructor creation
                                    lo(t),
                                    // transform component v-model data into props & events
                                    c(e.model) &&
                                        // @ts-expect-error
                                        // transform component v-model info (value and callback) into
                                        // prop and event handler respectively.
                                        (function (t, e) {
                                            var n = (t.model && t.model.prop) || "value",
                                                r = (t.model && t.model.event) || "input";
                                            (e.attrs || (e.attrs = {}))[n] = e.model.value;
                                            var o = e.on || (e.on = {}),
                                                a = o[r],
                                                s = e.model.callback;
                                            c(a) ? (i(a) ? -1 === a.indexOf(s) : a !== s) && (o[r] = [s].concat(a)) : (o[r] = s);
                                        })(t.options, e));
                                // extract props
                                // @ts-expect-error
                                var p = (function (t, e) {
                                    // we are only extracting raw values here.
                                    // validation and default values are handled in the child
                                    // component itself.
                                    var n = e.options.props;
                                    if (!a(n)) {
                                        var r = {},
                                            o = t.attrs,
                                            i = t.props;
                                        if (c(o) || c(i))
                                            for (var s in n) {
                                                var u = P(s);
                                                Re(r, i, s, u, !0) || Re(r, o, s, u, !1);
                                            }
                                        return r;
                                    }
                                })(e, t);
                                // functional component
                                // @ts-expect-error
                                if (s(t.options.functional))
                                    return (function (t, e, n, r, a) {
                                        var s = t.options,
                                            u = {},
                                            l = s.props;
                                        if (c(l)) for (var f in l) u[f] = Yr(f, l, e || o);
                                        else (c(n.attrs) && Lr(u, n.attrs), c(n.props) && Lr(u, n.props));
                                        var d = new Nr(n, u, a, r, t),
                                            p = s.render.call(null, d._c, d);
                                        if (p instanceof mt) return Ar(p, n, d.parent, s);
                                        if (i(p)) {
                                            for (var v = De(p) || [], h = new Array(v.length), m = 0; m < v.length; m++) h[m] = Ar(v[m], n, d.parent, s);
                                            return h;
                                        }
                                    })(t, p, e, n, r);
                                // extract listeners, since these needs to be treated as
                                // child component listeners instead of DOM listeners
                                var v = e.on;
                                // replace with listeners with .native modifier
                                // so it gets processed during parent component patch.
                                // @ts-expect-error
                                if (((e.on = e.nativeOn), s(t.options.abstract))) {
                                    // abstract components do not keep anything
                                    // other than props & listeners & slot
                                    // work around flow
                                    var h = e.slot;
                                    ((e = {}), h && (e.slot = h));
                                }
                                // install component management hooks onto the placeholder node
                                !(function (t) {
                                    for (var e = t.hook || (t.hook = {}), n = 0; n < Mr.length; n++) {
                                        var r = Mr[n],
                                            o = e[r],
                                            i = Dr[r];
                                        // @ts-expect-error
                                        o === i || (o && o._merged) || (e[r] = o ? Br(i, o) : i);
                                    }
                                })(e);
                                // return a placeholder vnode
                                // @ts-expect-error
                                var g = Rr(t.options) || u;
                                return new mt(
                                    // @ts-expect-error
                                    "vue-component-".concat(t.cid).concat(g ? "-".concat(g) : ""),
                                    e,
                                    void 0,
                                    void 0,
                                    void 0,
                                    n,
                                    // @ts-expect-error
                                    { Ctor: t, propsData: p, listeners: v, tag: u, children: r },
                                    d,
                                );
                            }
                        }
                    }
                    function Br(t, e) {
                        var n = function (n, r) {
                            // flow complains about extra args which is why we use any
                            (t(n, r), e(n, r));
                        };
                        return ((n._merged = !0), n);
                    }
                    var Fr = L,
                        Ur = W.optionMergeStrategies;
                    /**
                     * Helper that recursively merges two data objects together.
                     */
                    function Gr(t, e, n) {
                        if ((void 0 === n && (n = !0), !e)) return t;
                        for (var r, o, i, a = dt ? Reflect.ownKeys(e) : Object.keys(e), c = 0; c < a.length; c++)
                            // in case the object is already observed...
                            "__ob__" !== (r = a[c]) && ((o = t[r]), (i = e[r]), n && S(t, r) ? o !== i && p(o) && p(i) && Gr(o, i) : Dt(t, r, i));
                        return t;
                    }
                    /**
                     * Data
                     */ function Vr(t, e, n) {
                        return n
                            ? function () {
                                  // instance merge
                                  var r = l(e) ? e.call(n, n) : e,
                                      o = l(t) ? t.call(n, n) : t;
                                  return r ? Gr(r, o) : o;
                              }
                            : // in a Vue.extend merge, both should be functions
                              e
                              ? t
                                  ? function () {
                                        return Gr(l(e) ? e.call(this, this) : e, l(t) ? t.call(this, this) : t);
                                    }
                                  : e
                              : t;
                    }
                    /**
                     * Hooks and props are merged as arrays.
                     */
                    function Wr(t, e) {
                        var n = e ? (t ? t.concat(e) : i(e) ? e : [e]) : t;
                        return n
                            ? (function (t) {
                                  for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
                                  return e;
                              })(n)
                            : n;
                    }
                    /**
                     * Assets
                     *
                     * When a vm is present (instance creation), we need to do
                     * a three-way merge between constructor options, instance
                     * options and parent options.
                     */
                    function Hr(t, e, n, r) {
                        var o = Object.create(t || null);
                        return e ? N(o, e) : o;
                    }
                    ((Ur.data = function (t, e, n) {
                        return n ? Vr(t, e, n) : e && "function" != typeof e ? t : Vr(t, e);
                    }),
                        V.forEach(function (t) {
                            Ur[t] = Wr;
                        }),
                        G.forEach(function (t) {
                            Ur[t + "s"] = Hr;
                        }),
                        /**
                         * Watchers.
                         *
                         * Watchers hashes should not overwrite one
                         * another, so we merge them as arrays.
                         */
                        (Ur.watch = function (t, e, n, r) {
                            /* istanbul ignore if */
                            if (
                                // work around Firefox's Object.prototype.watch...
                                //@ts-expect-error work around
                                (t === it && (t = void 0),
                                //@ts-expect-error work around
                                e === it && (e = void 0),
                                !e)
                            )
                                return Object.create(t || null);
                            if (!t) return e;
                            var o = {};
                            for (var a in (N(o, t), e)) {
                                var c = o[a],
                                    s = e[a];
                                (c && !i(c) && (c = [c]), (o[a] = c ? c.concat(s) : i(s) ? s : [s]));
                            }
                            return o;
                        }),
                        /**
                         * Other object hashes.
                         */
                        (Ur.props =
                            Ur.methods =
                            Ur.inject =
                            Ur.computed =
                                function (t, e, n, r) {
                                    if (!t) return e;
                                    var o = Object.create(null);
                                    return (N(o, t), e && N(o, e), o);
                                }),
                        (Ur.provide = function (t, e) {
                            return t
                                ? function () {
                                      var n = Object.create(null);
                                      return (Gr(n, l(t) ? t.call(this) : t), e && Gr(n, l(e) ? e.call(this) : e, !1), n);
                                  }
                                : e;
                        }));
                    /**
                     * Default strategy.
                     */
                    var Jr = function (t, e) {
                        return void 0 === e ? t : e;
                    };
                    /**
                     * Validate component names
                     */
                    /**
                     * Merge two option objects into a new one.
                     * Core utility used in both instantiation and inheritance.
                     */
                    function qr(t, e, n) {
                        // Apply extends and mixins on the child options,
                        // but only if it is a raw options object that isn't
                        // the result of another mergeOptions call.
                        // Only merged options has the _base property.
                        if (
                            (l(e) &&
                                // @ts-expect-error
                                (e = e.options),
                            /**
                             * Ensure all props option syntax are normalized into the
                             * Object-based format.
                             */
                            (function (t) {
                                var e = t.props;
                                if (e) {
                                    var n,
                                        r,
                                        o = {};
                                    if (i(e)) for (n = e.length; n--; ) "string" == typeof (r = e[n]) && (o[k(r)] = { type: null });
                                    else if (p(e)) for (var a in e) ((r = e[a]), (o[k(a)] = p(r) ? r : { type: r }));
                                    t.props = o;
                                }
                            })(
                                /**
                                 * Normalize all injections into Object-based format
                                 */ e,
                            ),
                            (function (t) {
                                var e = t.inject;
                                if (e) {
                                    var n = (t.inject = {});
                                    if (i(e)) for (var r = 0; r < e.length; r++) n[e[r]] = { from: e[r] };
                                    else if (p(e))
                                        for (var o in e) {
                                            var a = e[o];
                                            n[o] = p(a) ? N({ from: o }, a) : { from: a };
                                        }
                                }
                            })(
                                /**
                                 * Normalize raw function directives into object format.
                                 */ e,
                            ),
                            (function (t) {
                                var e = t.directives;
                                if (e)
                                    for (var n in e) {
                                        var r = e[n];
                                        l(r) && (e[n] = { bind: r, update: r });
                                    }
                            })(e),
                            !e._base && (e.extends && (t = qr(t, e.extends, n)), e.mixins))
                        )
                            for (var r = 0, o = e.mixins.length; r < o; r++) t = qr(t, e.mixins[r], n);
                        var a,
                            c = {};
                        for (a in t) s(a);
                        for (a in e) S(t, a) || s(a);
                        function s(r) {
                            var o = Ur[r] || Jr;
                            c[r] = o(t[r], e[r], n, r);
                        }
                        return c;
                    }
                    /**
                     * Resolve an asset.
                     * This function is used because child instances need access
                     * to assets defined in its ancestor chain.
                     */ function Kr(t, e, n, r) {
                        /* istanbul ignore if */
                        if ("string" == typeof n) {
                            var o = t[e];
                            // check local registration variations first
                            if (S(o, n)) return o[n];
                            var i = k(n);
                            if (S(o, i)) return o[i];
                            var a = $(i);
                            return S(o, a) ? o[a] : o[n] || o[i] || o[a];
                            // fallback to prototype chain
                        }
                    }
                    function Yr(t, e, n, r) {
                        var o = e[t],
                            i = !S(n, t),
                            a = n[t],
                            c = to(Boolean, o.type);
                        if (c > -1)
                            if (i && !S(o, "default")) a = !1;
                            else if ("" === a || a === P(t)) {
                                // only cast empty string / same name to boolean if
                                // boolean has higher priority
                                var s = to(String, o.type);
                                (s < 0 || c < s) && (a = !0);
                            }
                        // check default value
                        if (void 0 === a) {
                            a =
                                /**
                                 * Get the default value of a prop.
                                 */
                                (function (t, e, n) {
                                    // no default, return undefined
                                    if (!S(e, "default")) return;
                                    var r = e.default;
                                    // warn against non-factory defaults for Object & Array
                                    0;
                                    // the raw prop value was also undefined from previous render,
                                    // return previous default value to avoid unnecessary watcher trigger
                                    if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
                                    // call factory function for non-Function types
                                    // a value is Function if its prototype is function even across different execution context
                                    return l(r) && "Function" !== Xr(e.type) ? r.call(t) : r;
                                })(
                                    /**
                                     * Assert whether a prop is valid.
                                     */ r,
                                    o,
                                    t,
                                );
                            // since the default value is a fresh copy,
                            // make sure to observe it.
                            var u = Et;
                            (Tt(!0), Lt(a), Tt(u));
                        }
                        return a;
                    }
                    var Zr = /^\s*function (\w+)/;
                    /**
                     * Use function string name to check built-in types,
                     * because a simple equality check will fail when running
                     * across different vms / iframes.
                     */ function Xr(t) {
                        var e = t && t.toString().match(Zr);
                        return e ? e[1] : "";
                    }
                    function Qr(t, e) {
                        return Xr(t) === Xr(e);
                    }
                    function to(t, e) {
                        if (!i(e)) return Qr(e, t) ? 0 : -1;
                        for (var n = 0, r = e.length; n < r; n++) if (Qr(e[n], t)) return n;
                        return -1;
                    }
                    var eo = { enumerable: !0, configurable: !0, get: L, set: L };
                    function no(t, e, n) {
                        ((eo.get = function () {
                            return this[e][n];
                        }),
                            (eo.set = function (t) {
                                this[e][n] = t;
                            }),
                            Object.defineProperty(t, n, eo));
                    }
                    function ro(t) {
                        var e = t.$options;
                        if (
                            (e.props &&
                                (function (t, e) {
                                    var n = t.$options.propsData || {},
                                        r = (t._props = Ft({})),
                                        o = (t.$options._propKeys = []),
                                        i = !t.$parent;
                                    // root instance props should be converted
                                    i || Tt(!1);
                                    var a = function (i) {
                                        o.push(i);
                                        var a = Yr(i, e, n, t);
                                        /* istanbul ignore else */ (Rt(r, i, a, void 0, !0 /* shallow */),
                                            // static props are already proxied on the component's prototype
                                            // during Vue.extend(). We only need to proxy props defined at
                                            // instantiation here.
                                            i in t || no(t, "_props", i));
                                    };
                                    for (var c in e) a(c);
                                    Tt(!0);
                                })(t, e.props),
                            // Composition API
                            (function (t) {
                                var e = t.$options,
                                    n = e.setup;
                                if (n) {
                                    var r = (t._setupContext = sn(t));
                                    (ht(t), xt());
                                    var o = jn(n, null, [t._props || Ft({}), r], t, "setup");
                                    if ((jt(), ht(), l(o)))
                                        // render function
                                        // @ts-ignore
                                        e.render = o;
                                    else if (f(o))
                                        if (((t._setupState = o), o.__sfc)) {
                                            // __sfc indicates compiled bindings from <script setup>
                                            // exposed for compiled render fn
                                            var i = (t._setupProxy = {});
                                            for (var a in o) "__sfc" !== a && re(i, o, a);
                                        } else for (var a in o) J(a) || re(t, o, a);
                                }
                            })(t),
                            e.methods &&
                                (function (t, e) {
                                    t.$options.props;
                                    for (var n in e) t[n] = "function" != typeof e[n] ? L : E(e[n], t);
                                })(t, e.methods),
                            e.data)
                        )
                            !(function (t) {
                                var e = t.$options.data;
                                ((e = t._data =
                                    l(e)
                                        ? (function (t, e) {
                                              // #7573 disable dep collection when invoking data getters
                                              xt();
                                              try {
                                                  return t.call(e, e);
                                              } catch (t) {
                                                  return (xn(t, e, "data()"), {});
                                              } finally {
                                                  jt();
                                              }
                                          })(e, t)
                                        : e || {}),
                                    p(e) || (e = {}));
                                // proxy data on instance
                                var n = Object.keys(e),
                                    r = t.$options.props,
                                    o = (t.$options.methods, n.length);
                                for (; o--; ) {
                                    var i = n[o];
                                    (0, (r && S(r, i)) || J(i) || no(t, "_data", i));
                                }
                                // observe data
                                var a = Lt(e);
                                a && a.vmCount++;
                            })(t);
                        else {
                            var n = Lt((t._data = {}));
                            n && n.vmCount++;
                        }
                        (e.computed &&
                            (function (t, e) {
                                // $flow-disable-line
                                var n = (t._computedWatchers = Object.create(null)),
                                    r = st();
                                // computed properties are just getters during SSR
                                for (var o in e) {
                                    var i = e[o],
                                        a = l(i) ? i : i.get;
                                    (0,
                                        r ||
                                            // create internal watcher for the computed property.
                                            (n[o] = new ur(t, a || L, L, oo)),
                                        // component-defined computed properties are already defined on the
                                        // component prototype. We only need to define computed properties defined
                                        // at instantiation here.
                                        o in t || io(t, o, i));
                                }
                            })(t, e.computed),
                            e.watch &&
                                e.watch !== it &&
                                (function (t, e) {
                                    for (var n in e) {
                                        var r = e[n];
                                        if (i(r)) for (var o = 0; o < r.length; o++) so(t, n, r[o]);
                                        else so(t, n, r);
                                    }
                                })(t, e.watch));
                    }
                    var oo = { lazy: !0 };
                    function io(t, e, n) {
                        var r = !st();
                        (l(n)
                            ? ((eo.get = r ? ao(e) : co(n)), (eo.set = L))
                            : ((eo.get = n.get ? (r && !1 !== n.cache ? ao(e) : co(n.get)) : L), (eo.set = n.set || L)),
                            Object.defineProperty(t, e, eo));
                    }
                    function ao(t) {
                        return function () {
                            var e = this._computedWatchers && this._computedWatchers[t];
                            if (e) return (e.dirty && e.evaluate(), Ct.target && e.depend(), e.value);
                        };
                    }
                    function co(t) {
                        return function () {
                            return t.call(this, this);
                        };
                    }
                    function so(t, e, n, r) {
                        return (p(n) && ((r = n), (n = n.handler)), "string" == typeof n && (n = t[n]), t.$watch(e, n, r));
                    }
                    var uo = 0;
                    function lo(t) {
                        var e = t.options;
                        if (t.super) {
                            var n = lo(t.super);
                            if (n !== t.superOptions) {
                                // super option changed,
                                // need to resolve new options.
                                t.superOptions = n;
                                // check if there are any late-modified/attached options (#4976)
                                var r = (function (t) {
                                    var e,
                                        n = t.options,
                                        r = t.sealedOptions;
                                    for (var o in n) n[o] !== r[o] && (e || (e = {}), (e[o] = n[o]));
                                    return e;
                                })(t);
                                // update base extend options
                                (r && N(t.extendOptions, r), (e = t.options = qr(n, t.extendOptions)).name && (e.components[e.name] = t));
                            }
                        }
                        return e;
                    }
                    function fo(t) {
                        this._init(t);
                    }
                    //@ts-expect-error Vue has function type
                    function po(t) {
                        /**
                         * Each instance constructor, including Vue, has a unique
                         * cid. This enables us to create wrapped "child
                         * constructors" for prototypal inheritance and cache them.
                         */
                        t.cid = 0;
                        var e = 1;
                        /**
                         * Class inheritance
                         */ t.extend = function (t) {
                            t = t || {};
                            var n = this,
                                r = n.cid,
                                o = t._Ctor || (t._Ctor = {});
                            if (o[r]) return o[r];
                            var i = Rr(t) || Rr(n.options);
                            var a = function (t) {
                                this._init(t);
                            };
                            return (
                                ((a.prototype = Object.create(n.prototype)).constructor = a),
                                (a.cid = e++),
                                (a.options = qr(n.options, t)),
                                (a.super = n),
                                // For props and computed properties, we define the proxy getters on
                                // the Vue instances at extension time, on the extended prototype. This
                                // avoids Object.defineProperty calls for each instance created.
                                a.options.props &&
                                    (function (t) {
                                        var e = t.options.props;
                                        for (var n in e) no(t.prototype, "_props", n);
                                    })(a),
                                a.options.computed &&
                                    (function (t) {
                                        var e = t.options.computed;
                                        for (var n in e) io(t.prototype, n, e[n]);
                                    })(a),
                                // allow further extension/mixin/plugin usage
                                (a.extend = n.extend),
                                (a.mixin = n.mixin),
                                (a.use = n.use),
                                // create asset registers, so extended classes
                                // can have their private assets too.
                                G.forEach(function (t) {
                                    a[t] = n[t];
                                }),
                                // enable recursive self-lookup
                                i && (a.options.components[i] = a),
                                // keep a reference to the super options at extension time.
                                // later at instantiation we can check if Super's options have
                                // been updated.
                                (a.superOptions = n.options),
                                (a.extendOptions = t),
                                (a.sealedOptions = N({}, a.options)),
                                // cache constructor
                                (o[r] = a),
                                a
                            );
                        };
                    }
                    function vo(t) {
                        return t && (Rr(t.Ctor.options) || t.tag);
                    }
                    function ho(t, e) {
                        return i(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!v(t) && t.test(e);
                        /* istanbul ignore next */
                    }
                    function mo(t, e) {
                        var n = t.cache,
                            r = t.keys,
                            o = t._vnode,
                            i = t.$vnode;
                        for (var a in n) {
                            var c = n[a];
                            if (c) {
                                var s = c.name;
                                s && !e(s) && go(n, a, r, o);
                            }
                        }
                        i.componentOptions.children = void 0;
                    }
                    function go(t, e, n, r) {
                        var o = t[e];
                        (!o ||
                            (r && o.tag === r.tag) ||
                            // @ts-expect-error can be undefined
                            o.componentInstance.$destroy(),
                            (t[e] = null),
                            O(n, e));
                    }
                    (!(function (t) {
                        t.prototype._init = function (t) {
                            var e = this;
                            // a uid
                            ((e._uid = uo++),
                                // a flag to mark this as a Vue instance without having to do instanceof
                                // check
                                (e._isVue = !0),
                                // avoid instances from being observed
                                (e.__v_skip = !0),
                                // effect scope
                                (e._scope = new xe(!0 /* detached */)),
                                // #13134 edge case where a child component is manually created during the
                                // render of a parent component
                                (e._scope.parent = void 0),
                                (e._scope._vm = !0),
                                // merge options
                                t && t._isComponent
                                    ? // optimize internal component instantiation
                                      // since dynamic options merging is pretty slow, and none of the
                                      // internal component options needs special treatment.
                                      (function (t, e) {
                                          var n = (t.$options = Object.create(t.constructor.options)),
                                              r = e._parentVnode;
                                          // doing this because it's faster than dynamic enumeration.
                                          ((n.parent = e.parent), (n._parentVnode = r));
                                          var o = r.componentOptions;
                                          ((n.propsData = o.propsData),
                                              (n._parentListeners = o.listeners),
                                              (n._renderChildren = o.children),
                                              (n._componentTag = o.tag),
                                              e.render && ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns)));
                                      })(e, t)
                                    : (e.$options = qr(lo(e.constructor), t || {}, e)),
                                /* istanbul ignore else */ (e._renderProxy = e),
                                // expose real self
                                (e._self = e),
                                (function (t) {
                                    var e = t.$options,
                                        n = e.parent;
                                    // locate first non-abstract parent
                                    if (n && !e.abstract) {
                                        for (; n.$options.abstract && n.$parent; ) n = n.$parent;
                                        n.$children.push(t);
                                    }
                                    ((t.$parent = n),
                                        (t.$root = n ? n.$root : t),
                                        (t.$children = []),
                                        (t.$refs = {}),
                                        (t._provided = n ? n._provided : Object.create(null)),
                                        (t._watcher = null),
                                        (t._inactive = null),
                                        (t._directInactive = !1),
                                        (t._isMounted = !1),
                                        (t._isDestroyed = !1),
                                        (t._isBeingDestroyed = !1));
                                })(e),
                                (function (t) {
                                    ((t._events = Object.create(null)), (t._hasHookEvent = !1));
                                    // init parent attached events
                                    var e = t.$options._parentListeners;
                                    e && pr(t, e);
                                })(e),
                                (function (t) {
                                    ((t._vnode = null), // the root of the child tree
                                        (t._staticTrees = null)); // v-once cached trees
                                    var e = t.$options,
                                        n = (t.$vnode = e._parentVnode),
                                        r = n && n.context;
                                    ((t.$slots = en(e._renderChildren, r)),
                                        (t.$scopedSlots = n ? on(t.$parent, n.data.scopedSlots, t.$slots) : o),
                                        // bind the createElement fn to this instance
                                        // so that we get proper render context inside it.
                                        // args order: tag, data, children, normalizationType, alwaysNormalize
                                        // internal version is used by render functions compiled from templates
                                        // @ts-expect-error
                                        (t._c = function (e, n, r, o) {
                                            return On(t, e, n, r, o, !1);
                                        }),
                                        // normalization is always applied for the public version, used in
                                        // user-written render functions.
                                        // @ts-expect-error
                                        (t.$createElement = function (e, n, r, o) {
                                            return On(t, e, n, r, o, !0);
                                        }));
                                    // $attrs & $listeners are exposed for easier HOC creation.
                                    // they need to be reactive so that HOCs using them are always updated
                                    var i = n && n.data;
                                    /* istanbul ignore else */ (Rt(t, "$attrs", (i && i.attrs) || o, null, !0),
                                        Rt(t, "$listeners", e._parentListeners || o, null, !0));
                                })(e),
                                _r(e, "beforeCreate", void 0, !1 /* setContext */),
                                (function (t) {
                                    var e = Tr(t.$options.inject, t);
                                    e &&
                                        (Tt(!1),
                                        Object.keys(e).forEach(function (n) {
                                            Rt(t, n, e[n]);
                                        }),
                                        Tt(!0));
                                })(e), // resolve injections before data/props
                                ro(e),
                                (function (t) {
                                    var e = t.$options.provide;
                                    if (e) {
                                        var n = l(e) ? e.call(t) : e;
                                        if (!f(n)) return;
                                        for (
                                            var r = Pe(t), o = dt ? Reflect.ownKeys(n) : Object.keys(n), i = 0;
                                            // IE9 doesn't support Object.getOwnPropertyDescriptors so we have to
                                            // iterate the keys ourselves.
                                            i < o.length;
                                            i++
                                        ) {
                                            var a = o[i];
                                            Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(n, a));
                                        }
                                    }
                                })(e), // resolve provide after data/props
                                _r(e, "created"),
                                e.$options.el && e.$mount(e.$options.el));
                        };
                    })(fo),
                        //@ts-expect-error Vue has function type
                        (function (t) {
                            // flow somehow has problems with directly declared definition object
                            // when using Object.defineProperty, so we have to procedurally build up
                            // the object here.
                            var e = {
                                    get: function () {
                                        return this._data;
                                    },
                                },
                                n = {
                                    get: function () {
                                        return this._props;
                                    },
                                };
                            (Object.defineProperty(t.prototype, "$data", e),
                                Object.defineProperty(t.prototype, "$props", n),
                                (t.prototype.$set = Dt),
                                (t.prototype.$delete = Mt),
                                (t.prototype.$watch = function (t, e, n) {
                                    var r = this;
                                    if (p(e)) return so(r, t, e, n);
                                    (n = n || {}).user = !0;
                                    var o = new ur(r, t, e, n);
                                    if (n.immediate) {
                                        var i = 'callback for immediate watcher "'.concat(o.expression, '"');
                                        (xt(), jn(e, r, [o.value], r, i), jt());
                                    }
                                    return function () {
                                        o.teardown();
                                    };
                                }));
                        })(fo),
                        //@ts-expect-error Vue has function type
                        (function (t) {
                            var e = /^hook:/;
                            ((t.prototype.$on = function (t, n) {
                                var r = this;
                                if (i(t)) for (var o = 0, a = t.length; o < a; o++) r.$on(t[o], n);
                                else
                                    ((r._events[t] || (r._events[t] = [])).push(n),
                                        // optimize hook:event cost by using a boolean flag marked at registration
                                        // instead of a hash lookup
                                        e.test(t) && (r._hasHookEvent = !0));
                                return r;
                            }),
                                (t.prototype.$once = function (t, e) {
                                    var n = this;
                                    function r() {
                                        (n.$off(t, r), e.apply(n, arguments));
                                    }
                                    return ((r.fn = e), n.$on(t, r), n);
                                }),
                                (t.prototype.$off = function (t, e) {
                                    var n = this;
                                    // all
                                    if (!arguments.length) return ((n._events = Object.create(null)), n);
                                    // array of events
                                    if (i(t)) {
                                        for (var r = 0, o = t.length; r < o; r++) n.$off(t[r], e);
                                        return n;
                                    }
                                    // specific event
                                    var a,
                                        c = n._events[t];
                                    if (!c) return n;
                                    if (!e) return ((n._events[t] = null), n);
                                    // specific handler
                                    for (var s = c.length; s--; )
                                        if ((a = c[s]) === e || a.fn === e) {
                                            c.splice(s, 1);
                                            break;
                                        }
                                    return n;
                                }),
                                (t.prototype.$emit = function (t) {
                                    var e = this,
                                        n = e._events[t];
                                    if (n) {
                                        n = n.length > 1 ? T(n) : n;
                                        for (var r = T(arguments, 1), o = 'event handler for "'.concat(t, '"'), i = 0, a = n.length; i < a; i++)
                                            jn(n[i], e, r, e, o);
                                    }
                                    return e;
                                }));
                        })(fo),
                        //@ts-expect-error Vue has function type
                        (function (t) {
                            ((t.prototype._update = function (t, e) {
                                var n = this,
                                    r = n.$el,
                                    o = n._vnode,
                                    i = hr(n);
                                ((n._vnode = t),
                                    // Vue.prototype.__patch__ is injected in entry points
                                    // based on the rendering backend used.
                                    // updates
                                    (n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1 /* removeOnly */)),
                                    i(),
                                    // update __vue__ reference
                                    r && (r.__vue__ = null),
                                    n.$el && (n.$el.__vue__ = n));
                                for (
                                    // if parent is an HOC, update its $el as well
                                    var a = n;
                                    a && a.$vnode && a.$parent && a.$vnode === a.$parent._vnode;
                                )
                                    ((a.$parent.$el = a.$el), (a = a.$parent));
                                // updated hook is called by the scheduler to ensure that children are
                                // updated in a parent's updated hook.
                            }),
                                (t.prototype.$forceUpdate = function () {
                                    this._watcher && this._watcher.update();
                                }),
                                (t.prototype.$destroy = function () {
                                    var t = this;
                                    if (!t._isBeingDestroyed) {
                                        (_r(t, "beforeDestroy"), (t._isBeingDestroyed = !0));
                                        // remove self from parent
                                        var e = t.$parent;
                                        (!e || e._isBeingDestroyed || t.$options.abstract || O(e.$children, t),
                                            // teardown scope. this includes both the render watcher and other
                                            // watchers created
                                            t._scope.stop(),
                                            // remove reference from data ob
                                            // frozen object may not have observer.
                                            t._data.__ob__ && t._data.__ob__.vmCount--,
                                            // call the last hook...
                                            (t._isDestroyed = !0),
                                            // invoke destroy hooks on current rendered tree
                                            t.__patch__(t._vnode, null),
                                            // fire destroyed hook
                                            _r(t, "destroyed"),
                                            // turn off all instance listeners.
                                            t.$off(),
                                            // remove __vue__ reference
                                            t.$el && (t.$el.__vue__ = null),
                                            // release circular reference (#6759)
                                            t.$vnode && (t.$vnode.parent = null));
                                    }
                                }));
                        })(fo),
                        //@ts-expect-error Vue has function type
                        (function (t) {
                            // install runtime convenience helpers
                            (tn(t.prototype),
                                (t.prototype.$nextTick = function (t) {
                                    return Mn(t, this);
                                }),
                                (t.prototype._render = function () {
                                    var t = this,
                                        e = t.$options,
                                        n = e.render,
                                        r = e._parentVnode;
                                    (r &&
                                        t._isMounted &&
                                        ((t.$scopedSlots = on(t.$parent, r.data.scopedSlots, t.$slots, t.$scopedSlots)),
                                        t._slotsProxy && fn(t._slotsProxy, t.$scopedSlots)),
                                        // set parent vnode. this allows render functions to have access
                                        // to the data on the placeholder node.
                                        (t.$vnode = r));
                                    // render self
                                    var o,
                                        a = pt,
                                        c = gn;
                                    try {
                                        (ht(t), (gn = t), (o = n.call(t._renderProxy, t.$createElement)));
                                    } catch (e) {
                                        (xn(e, t, "render"), (o = t._vnode));
                                    } finally {
                                        ((gn = c), ht(a));
                                    }
                                    // if the returned array contains only a single node, allow it
                                    return (
                                        i(o) && 1 === o.length && (o = o[0]),
                                        // return empty vnode in case the render function errored out
                                        o instanceof mt || (o = gt()),
                                        // set parent
                                        (o.parent = r),
                                        o
                                    );
                                }));
                        })(fo));
                    var yo = [String, RegExp, Array],
                        _o = {
                            KeepAlive: {
                                name: "keep-alive",
                                abstract: !0,
                                props: { include: yo, exclude: yo, max: [String, Number] },
                                methods: {
                                    cacheVNode: function () {
                                        var t = this,
                                            e = t.cache,
                                            n = t.keys,
                                            r = t.vnodeToCache,
                                            o = t.keyToCache;
                                        if (r) {
                                            var i = r.tag,
                                                a = r.componentInstance,
                                                c = r.componentOptions;
                                            ((e[o] = { name: vo(c), tag: i, componentInstance: a }),
                                                n.push(o),
                                                // prune oldest entry
                                                this.max && n.length > parseInt(this.max) && go(e, n[0], n, this._vnode),
                                                (this.vnodeToCache = null));
                                        }
                                    },
                                },
                                created: function () {
                                    ((this.cache = Object.create(null)), (this.keys = []));
                                },
                                destroyed: function () {
                                    for (var t in this.cache) go(this.cache, t, this.keys);
                                },
                                mounted: function () {
                                    var t = this;
                                    (this.cacheVNode(),
                                        this.$watch("include", function (e) {
                                            mo(t, function (t) {
                                                return ho(e, t);
                                            });
                                        }),
                                        this.$watch("exclude", function (e) {
                                            mo(t, function (t) {
                                                return !ho(e, t);
                                            });
                                        }));
                                },
                                updated: function () {
                                    this.cacheVNode();
                                },
                                render: function () {
                                    var t = this.$slots.default,
                                        e = _n(t),
                                        n = e && e.componentOptions;
                                    if (n) {
                                        // check pattern
                                        var r = vo(n),
                                            o = this.include,
                                            i = this.exclude;
                                        if (
                                            // not included
                                            (o && (!r || !ho(o, r))) ||
                                            // excluded
                                            (i && r && ho(i, r))
                                        )
                                            return e;
                                        var a = this.cache,
                                            c = this.keys,
                                            s =
                                                null == e.key // same constructor may get registered as different local components
                                                    ? // so cid alone is not enough (#3269)
                                                      n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "")
                                                    : e.key;
                                        (a[s]
                                            ? ((e.componentInstance = a[s].componentInstance),
                                              // make current key freshest
                                              O(c, s),
                                              c.push(s))
                                            : // delay setting the cache until update
                                              ((this.vnodeToCache = e), (this.keyToCache = s)),
                                            // @ts-expect-error can vnode.data can be undefined
                                            (e.data.keepAlive = !0));
                                    }
                                    return e || (t && t[0]);
                                },
                            },
                        };
                    // TODO defineComponent
                    (!(function (t) {
                        // config
                        var e = {
                            get: function () {
                                return W;
                            },
                        };
                        (Object.defineProperty(t, "config", e),
                            // exposed util methods.
                            // NOTE: these are not considered part of the public API - avoid relying on
                            // them unless you are aware of the risk.
                            (t.util = { warn: Fr, extend: N, mergeOptions: qr, defineReactive: Rt }),
                            (t.set = Dt),
                            (t.delete = Mt),
                            (t.nextTick = Mn),
                            // 2.6 explicit observable API
                            (t.observable = function (t) {
                                return (Lt(t), t);
                            }),
                            (t.options = Object.create(null)),
                            G.forEach(function (e) {
                                t.options[e + "s"] = Object.create(null);
                            }),
                            // this is used to identify the "base" constructor to extend all plain-object
                            // components with in Weex's multi-instance scenarios.
                            (t.options._base = t),
                            N(t.options.components, _o),
                            (function (t) {
                                t.use = function (t) {
                                    var e = this._installedPlugins || (this._installedPlugins = []);
                                    if (e.indexOf(t) > -1) return this;
                                    // additional parameters
                                    var n = T(arguments, 1);
                                    return (n.unshift(this), l(t.install) ? t.install.apply(t, n) : l(t) && t.apply(null, n), e.push(t), this);
                                };
                            })(t),
                            (function (t) {
                                t.mixin = function (t) {
                                    return ((this.options = qr(this.options, t)), this);
                                };
                            })(t),
                            po(t),
                            (function (t) {
                                /**
                                 * Create asset registration methods.
                                 */
                                G.forEach(function (e) {
                                    // @ts-expect-error function is not exact same type
                                    t[e] = function (t, n) {
                                        return n
                                            ? ("component" === e &&
                                                  p(n) &&
                                                  // @ts-expect-error
                                                  ((n.name = n.name || t), (n = this.options._base.extend(n))),
                                              "directive" === e && l(n) && (n = { bind: n, update: n }),
                                              (this.options[e + "s"][t] = n),
                                              n)
                                            : this.options[e + "s"][t];
                                    };
                                });
                            })(t));
                    })(fo),
                        Object.defineProperty(fo.prototype, "$isServer", { get: st }),
                        Object.defineProperty(fo.prototype, "$ssrContext", {
                            get: function () {
                                /* istanbul ignore next */
                                return this.$vnode && this.$vnode.ssrContext;
                            },
                        }),
                        // expose FunctionalRenderContext for ssr runtime helper installation
                        Object.defineProperty(fo, "FunctionalRenderContext", { value: Nr }),
                        (fo.version = nr));
                    // these are reserved for web because they are directly compiled away
                    // during template compilation
                    var bo = b("style,class"),
                        wo = b("input,textarea,option,select,progress"),
                        Oo = b("contenteditable,draggable,spellcheck"),
                        Co = b("events,caret,typing,plaintext-only"),
                        So = function (t, e) {
                            return Io(e) || "false" === e
                                ? "false" // allow arbitrary string value for contenteditable
                                : "contenteditable" === t && Co(e)
                                  ? e
                                  : "true";
                        },
                        xo = b(
                            "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible",
                        ),
                        jo = "http://www.w3.org/1999/xlink",
                        ko = function (t) {
                            return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
                        },
                        $o = function (t) {
                            return ko(t) ? t.slice(6, t.length) : "";
                        },
                        Io = function (t) {
                            return null == t || !1 === t;
                        };
                    // attributes that should be using props for binding
                    function Po(t) {
                        for (var e = t.data, n = t, r = t; c(r.componentInstance); ) (r = r.componentInstance._vnode) && r.data && (e = Eo(r.data, e));
                        // @ts-expect-error parentNode.parent not VNodeWithData
                        for (; c((n = n.parent)); ) n && n.data && (e = Eo(e, n.data));
                        return (function (t, e) {
                            if (c(t) || c(e)) return To(t, No(e));
                            /* istanbul ignore next */ return "";
                        })(e.staticClass, e.class);
                    }
                    function Eo(t, e) {
                        return { staticClass: To(t.staticClass, e.staticClass), class: c(t.class) ? [t.class, e.class] : e.class };
                    }
                    function To(t, e) {
                        return t ? (e ? t + " " + e : t) : e || "";
                    }
                    function No(t) {
                        return Array.isArray(t)
                            ? (function (t) {
                                  for (var e, n = "", r = 0, o = t.length; r < o; r++) c((e = No(t[r]))) && "" !== e && (n && (n += " "), (n += e));
                                  return n;
                              })(t)
                            : f(t)
                              ? (function (t) {
                                    var e = "";
                                    for (var n in t) t[n] && (e && (e += " "), (e += n));
                                    return e;
                                })(t)
                              : "string" == typeof t
                                ? t
                                : "";
                        /* istanbul ignore next */
                    }
                    var Ao = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
                        Lo = b(
                            "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot",
                        ),
                        Ro = b(
                            "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
                            !0,
                        ),
                        Do = function (t) {
                            return Lo(t) || Ro(t);
                        };
                    var Mo = Object.create(null);
                    var zo = b("text,number,password,search,email,tel,url");
                    /**
                     * Query an element selector if it's not an element already.
                     */ var Bo = Object.freeze({
                            __proto__: null,
                            createElement: function (t, e) {
                                var n = document.createElement(t);
                                return (
                                    "select" !== t ||
                                        // false or null will remove the attribute but undefined will not
                                        (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple")),
                                    n
                                );
                            },
                            createElementNS: function (t, e) {
                                return document.createElementNS(Ao[t], e);
                            },
                            createTextNode: function (t) {
                                return document.createTextNode(t);
                            },
                            createComment: function (t) {
                                return document.createComment(t);
                            },
                            insertBefore: function (t, e, n) {
                                t.insertBefore(e, n);
                            },
                            removeChild: function (t, e) {
                                t.removeChild(e);
                            },
                            appendChild: function (t, e) {
                                t.appendChild(e);
                            },
                            parentNode: function (t) {
                                return t.parentNode;
                            },
                            nextSibling: function (t) {
                                return t.nextSibling;
                            },
                            tagName: function (t) {
                                return t.tagName;
                            },
                            setTextContent: function (t, e) {
                                t.textContent = e;
                            },
                            setStyleScope: function (t, e) {
                                t.setAttribute(e, "");
                            },
                        }),
                        Fo = {
                            create: function (t, e) {
                                Uo(e);
                            },
                            update: function (t, e) {
                                t.data.ref !== e.data.ref && (Uo(t, !0), Uo(e));
                            },
                            destroy: function (t) {
                                Uo(t, !0);
                            },
                        };
                    function Uo(t, e) {
                        var n = t.data.ref;
                        if (c(n)) {
                            var r = t.context,
                                o = t.componentInstance || t.elm,
                                a = e ? null : o,
                                s = e ? void 0 : o;
                            if (l(n)) jn(n, r, [a], r, "template ref function");
                            else {
                                var u = t.data.refInFor,
                                    f = "string" == typeof n || "number" == typeof n,
                                    d = Yt(n),
                                    p = r.$refs;
                                if (f || d)
                                    if (u) {
                                        var v = f ? p[n] : n.value;
                                        e ? i(v) && O(v, o) : i(v) ? v.includes(o) || v.push(o) : f ? ((p[n] = [o]), Go(r, n, p[n])) : (n.value = [o]);
                                    } else if (f) {
                                        if (e && p[n] !== o) return;
                                        ((p[n] = s), Go(r, n, a));
                                    } else if (d) {
                                        if (e && n.value !== o) return;
                                        n.value = a;
                                    } else 0;
                            }
                        }
                    }
                    function Go(t, e, n) {
                        var r = t._setupState;
                        r && S(r, e) && (Yt(r[e]) ? (r[e].value = n) : (r[e] = n));
                    }
                    /**
                     * Virtual DOM patching algorithm based on Snabbdom by
                     * Simon Friis Vindum (@paldepind)
                     * Licensed under the MIT License
                     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
                     *
                     * modified by Evan You (@yyx990803)
                     *
                     * Not type-checking this because this file is perf-critical and the cost
                     * of making flow understand it is not worth it.
                     */ var Vo = new mt("", {}, []),
                        Wo = ["create", "activate", "update", "remove", "destroy"];
                    function Ho(t, e) {
                        return (
                            t.key === e.key &&
                            t.asyncFactory === e.asyncFactory &&
                            ((t.tag === e.tag &&
                                t.isComment === e.isComment &&
                                c(t.data) === c(e.data) &&
                                (function (t, e) {
                                    if ("input" !== t.tag) return !0;
                                    var n,
                                        r = c((n = t.data)) && c((n = n.attrs)) && n.type,
                                        o = c((n = e.data)) && c((n = n.attrs)) && n.type;
                                    return r === o || (zo(r) && zo(o));
                                })(t, e)) ||
                                (s(t.isAsyncPlaceholder) && a(e.asyncFactory.error)))
                        );
                    }
                    function Jo(t, e, n) {
                        var r,
                            o,
                            i = {};
                        for (r = e; r <= n; ++r) c((o = t[r].key)) && (i[o] = r);
                        return i;
                    }
                    var qo = {
                        create: Ko,
                        update: Ko,
                        destroy: function (t) {
                            // @ts-expect-error emptyNode is not VNodeWithData
                            Ko(t, Vo);
                        },
                    };
                    function Ko(t, e) {
                        (t.data.directives || e.data.directives) &&
                            (function (t, e) {
                                var n,
                                    r,
                                    o,
                                    i = t === Vo,
                                    a = e === Vo,
                                    c = Zo(t.data.directives, t.context),
                                    s = Zo(e.data.directives, e.context),
                                    u = [],
                                    l = [];
                                for (n in s)
                                    ((r = c[n]),
                                        (o = s[n]),
                                        r
                                            ? // existing directive, update
                                              ((o.oldValue = r.value), (o.oldArg = r.arg), Qo(o, "update", e, t), o.def && o.def.componentUpdated && l.push(o))
                                            : // new directive, bind
                                              (Qo(o, "bind", e, t), o.def && o.def.inserted && u.push(o)));
                                if (u.length) {
                                    var f = function () {
                                        for (var n = 0; n < u.length; n++) Qo(u[n], "inserted", e, t);
                                    };
                                    i ? Le(e, "insert", f) : f();
                                }
                                l.length &&
                                    Le(e, "postpatch", function () {
                                        for (var n = 0; n < l.length; n++) Qo(l[n], "componentUpdated", e, t);
                                    });
                                if (!i)
                                    for (n in c)
                                        s[n] ||
                                            // no longer present, unbind
                                            Qo(c[n], "unbind", t, t, a);
                            })(t, e);
                    }
                    var Yo = Object.create(null);
                    function Zo(t, e) {
                        var n,
                            r,
                            o = Object.create(null);
                        if (!t)
                            // $flow-disable-line
                            return o;
                        for (n = 0; n < t.length; n++) {
                            if (
                                ((r = t[n]).modifiers ||
                                    // $flow-disable-line
                                    (r.modifiers = Yo),
                                (o[Xo(r)] = r),
                                e._setupState && e._setupState.__sfc)
                            ) {
                                var i = r.def || Kr(e, "_setupState", "v-" + r.name);
                                r.def = "function" == typeof i ? { bind: i, update: i } : i;
                            }
                            r.def = r.def || Kr(e.$options, "directives", r.name);
                        }
                        // $flow-disable-line
                        return o;
                    }
                    function Xo(t) {
                        return t.rawName || "".concat(t.name, ".").concat(Object.keys(t.modifiers || {}).join("."));
                    }
                    function Qo(t, e, n, r, o) {
                        var i = t.def && t.def[e];
                        if (i)
                            try {
                                i(n.elm, t, n, r, o);
                            } catch (r) {
                                xn(r, n.context, "directive ".concat(t.name, " ").concat(e, " hook"));
                            }
                    }
                    var ti = [Fo, qo];
                    function ei(t, e) {
                        var n = e.componentOptions;
                        if (!((c(n) && !1 === n.Ctor.options.inheritAttrs) || (a(t.data.attrs) && a(e.data.attrs)))) {
                            var r,
                                o,
                                i = e.elm,
                                u = t.data.attrs || {},
                                l = e.data.attrs || {};
                            // clone observed objects, as the user probably wants to mutate it
                            for (r in ((c(l.__ob__) || s(l._v_attr_proxy)) && (l = e.data.attrs = N({}, l)), l))
                                ((o = l[r]), u[r] !== o && ni(i, r, o, e.data.pre));
                            // #4391: in IE9, setting type can reset value for input[type=radio]
                            // #6666: IE/Edge forces progress value down to 1 before setting a max
                            /* istanbul ignore if */ for (r in ((Q || et) && l.value !== u.value && ni(i, "value", l.value), u))
                                a(l[r]) && (ko(r) ? i.removeAttributeNS(jo, $o(r)) : Oo(r) || i.removeAttribute(r));
                        }
                    }
                    function ni(t, e, n, r) {
                        r || t.tagName.indexOf("-") > -1
                            ? ri(t, e, n)
                            : xo(e)
                              ? // set attribute for blank value
                                // e.g. <option disabled>Select one</option>
                                Io(n)
                                  ? t.removeAttribute(e)
                                  : // technically allowfullscreen is a boolean attribute for <iframe>,
                                    // but Flash expects a value of "true" when used on <embed> tag
                                    ((n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e), t.setAttribute(e, n))
                              : Oo(e)
                                ? t.setAttribute(e, So(e, n))
                                : ko(e)
                                  ? Io(n)
                                      ? t.removeAttributeNS(jo, $o(e))
                                      : t.setAttributeNS(jo, e, n)
                                  : ri(t, e, n);
                    }
                    function ri(t, e, n) {
                        if (Io(n)) t.removeAttribute(e);
                        else {
                            // #7138: IE10 & 11 fires input event when setting placeholder on
                            // <textarea>... block the first input event and remove the blocker
                            // immediately.
                            /* istanbul ignore if */
                            if (Q && !tt && "TEXTAREA" === t.tagName && "placeholder" === e && "" !== n && !t.__ieph) {
                                var r = function (e) {
                                    (e.stopImmediatePropagation(), t.removeEventListener("input", r));
                                };
                                (t.addEventListener("input", r),
                                    // $flow-disable-line
                                    (t.__ieph = !0));
                            }
                            t.setAttribute(e, n);
                        }
                    }
                    var oi = { create: ei, update: ei };
                    function ii(t, e) {
                        var n = e.elm,
                            r = e.data,
                            o = t.data;
                        if (!(a(r.staticClass) && a(r.class) && (a(o) || (a(o.staticClass) && a(o.class))))) {
                            var i = Po(e),
                                s = n._transitionClasses;
                            // handle transition classes
                            (c(s) && (i = To(i, No(s))),
                                // set the class
                                i !== n._prevClass && (n.setAttribute("class", i), (n._prevClass = i)));
                        }
                    }
                    var ai,
                        ci = { create: ii, update: ii },
                        si = "__r",
                        ui = "__c";
                    // in some cases, the event used has to be determined at runtime
                    // so we used some reserved tokens during compile.
                    function li(t, e, n) {
                        var r = ai; // save current target element in closure
                        return function o() {
                            null !== e.apply(null, arguments) && pi(t, o, n, r);
                        };
                    }
                    // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
                    // implementation and does not fire microtasks in between event propagation, so
                    // safe to exclude.
                    var fi = Pn && !(ot && Number(ot[1]) <= 53);
                    function di(t, e, n, r) {
                        // async edge case #6566: inner click event triggers patch, event handler
                        // attached to outer element during patch, and triggered again. This
                        // happens because browsers fire microtask ticks between event propagation.
                        // the solution is simple: we save the timestamp when a handler is attached,
                        // and the handler would only fire if the event passed to it was fired
                        // AFTER it was attached.
                        if (fi) {
                            var o = jr,
                                i = e;
                            //@ts-expect-error
                            e = i._wrapper = function (t) {
                                if (
                                    // no bubbling, should always fire.
                                    // this is just a safety net in case event.timeStamp is unreliable in
                                    // certain weird environments...
                                    t.target === t.currentTarget ||
                                    // event is fired after handler attachment
                                    t.timeStamp >= o ||
                                    // bail for environments that have buggy event.timeStamp implementations
                                    // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
                                    // #9681 QtWebEngine event.timeStamp is negative value
                                    t.timeStamp <= 0 ||
                                    // #9448 bail if event is fired in another document in a multi-page
                                    // electron/nw.js app, since event.timeStamp will be using a different
                                    // starting reference
                                    t.target.ownerDocument !== document
                                )
                                    return i.apply(this, arguments);
                            };
                        }
                        ai.addEventListener(t, e, at ? { capture: n, passive: r } : n);
                    }
                    function pi(t, e, n, r) {
                        (r || ai).removeEventListener(
                            t,
                            //@ts-expect-error
                            e._wrapper || e,
                            n,
                        );
                    }
                    function vi(t, e) {
                        if (!a(t.data.on) || !a(e.data.on)) {
                            var n = e.data.on || {},
                                r = t.data.on || {};
                            // vnode is empty when removing all listeners,
                            // and use old vnode dom element
                            ((ai = e.elm || t.elm),
                                // normalize v-model event tokens that can only be determined at runtime.
                                // it's important to place the event as the first in the array because
                                // the whole point is ensuring the v-model callback gets called before
                                // user-attached handlers.
                                (function (t) {
                                    /* istanbul ignore if */
                                    if (c(t[si])) {
                                        // IE input[type=range] only supports `change` event
                                        var e = Q ? "change" : "input";
                                        ((t[e] = [].concat(t[si], t[e] || [])), delete t[si]);
                                    }
                                    // This was originally intended to fix #4521 but no longer necessary
                                    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
                                    /* istanbul ignore if */ c(t[ui]) && ((t.change = [].concat(t[ui], t.change || [])), delete t[ui]);
                                })(n),
                                Ae(n, r, di, pi, li, e.context),
                                (ai = void 0));
                        }
                    }
                    var hi,
                        mi = {
                            create: vi,
                            update: vi,
                            // @ts-expect-error emptyNode has actually data
                            destroy: function (t) {
                                return vi(t, Vo);
                            },
                        };
                    function gi(t, e) {
                        if (!a(t.data.domProps) || !a(e.data.domProps)) {
                            var n,
                                r,
                                o = e.elm,
                                i = t.data.domProps || {},
                                u = e.data.domProps || {};
                            // clone observed objects, as the user probably wants to mutate it
                            for (n in ((c(u.__ob__) || s(u._v_attr_proxy)) && (u = e.data.domProps = N({}, u)), i)) n in u || (o[n] = "");
                            for (n in u) {
                                // ignore children if the node has textContent or innerHTML,
                                // as these will throw away existing DOM nodes and cause removal errors
                                // on subsequent patches (#3360)
                                if (((r = u[n]), "textContent" === n || "innerHTML" === n)) {
                                    if ((e.children && (e.children.length = 0), r === i[n])) continue;
                                    // #6601 work around Chrome version <= 55 bug where single textNode
                                    // replaced by innerHTML/textContent retains its parentNode property
                                    1 === o.childNodes.length && o.removeChild(o.childNodes[0]);
                                }
                                if ("value" === n && "PROGRESS" !== o.tagName) {
                                    // store value as _value as well since
                                    // non-string values will be stringified
                                    o._value = r;
                                    // avoid resetting cursor position when value is the same
                                    var l = a(r) ? "" : String(r);
                                    yi(o, l) && (o.value = l);
                                } else if ("innerHTML" === n && Ro(o.tagName) && a(o.innerHTML)) {
                                    // IE doesn't support innerHTML for SVG elements
                                    (hi = hi || document.createElement("div")).innerHTML = "<svg>".concat(r, "</svg>");
                                    for (var f = hi.firstChild; o.firstChild; ) o.removeChild(o.firstChild);
                                    for (; f.firstChild; ) o.appendChild(f.firstChild);
                                } else if (
                                    // skip the update if old and new VDOM state is the same.
                                    // `value` is handled separately because the DOM value may be temporarily
                                    // out of sync with VDOM state due to focus, composition and modifiers.
                                    // This  #4521 by skipping the unnecessary `checked` update.
                                    r !== i[n]
                                )
                                    // some property updates can throw
                                    // e.g. `value` on <progress> w/ non-finite value
                                    try {
                                        o[n] = r;
                                    } catch (t) {}
                            }
                        }
                    }
                    function yi(t, e) {
                        //@ts-expect-error
                        return (
                            !t.composing &&
                            ("OPTION" === t.tagName ||
                                (function (t, e) {
                                    // return true when textbox (.number and .trim) loses focus and its value is
                                    // not equal to the updated value
                                    var n = !0;
                                    // #6157
                                    // work around IE bug when accessing document.activeElement in an iframe
                                    try {
                                        n = document.activeElement !== t;
                                    } catch (t) {}
                                    return n && t.value !== e;
                                })(t, e) ||
                                (function (t, e) {
                                    var n = t.value,
                                        r = t._vModifiers; // injected by v-model runtime
                                    if (c(r)) {
                                        if (r.number) return _(n) !== _(e);
                                        if (r.trim) return n.trim() !== e.trim();
                                    }
                                    return n !== e;
                                })(t, e))
                        );
                    }
                    var _i = { create: gi, update: gi },
                        bi = x(function (t) {
                            var e = {},
                                n = /:(.+)/;
                            return (
                                t.split(/;(?![^(]*\))/g).forEach(function (t) {
                                    if (t) {
                                        var r = t.split(n);
                                        r.length > 1 && (e[r[0].trim()] = r[1].trim());
                                    }
                                }),
                                e
                            );
                        });
                    // merge static and dynamic style data on the same vnode
                    function wi(t) {
                        var e = Oi(t.style);
                        // static style is pre-processed into an object during compilation
                        // and is always a fresh object, so it's safe to merge into it
                        return t.staticStyle ? N(t.staticStyle, e) : e;
                    }
                    // normalize possible array / string values into Object
                    function Oi(t) {
                        return Array.isArray(t) ? A(t) : "string" == typeof t ? bi(t) : t;
                    }
                    /**
                     * parent component style should be after child's
                     * so that parent component's style could override it
                     */ var Ci,
                        Si = /^--/,
                        xi = /\s*!important$/,
                        ji = function (t, e, n) {
                            /* istanbul ignore if */
                            if (Si.test(e)) t.style.setProperty(e, n);
                            else if (xi.test(n)) t.style.setProperty(P(e), n.replace(xi, ""), "important");
                            else {
                                var r = $i(e);
                                if (Array.isArray(n))
                                    // Support values array created by autoprefixer, e.g.
                                    // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                                    // Set them one by one, and the browser will only set those it can recognize
                                    for (var o = 0, i = n.length; o < i; o++) t.style[r] = n[o];
                                else t.style[r] = n;
                            }
                        },
                        ki = ["Webkit", "Moz", "ms"],
                        $i = x(function (t) {
                            if (((Ci = Ci || document.createElement("div").style), "filter" !== (t = k(t)) && t in Ci)) return t;
                            for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < ki.length; n++) {
                                var r = ki[n] + e;
                                if (r in Ci) return r;
                            }
                        });
                    function Ii(t, e) {
                        var n = e.data,
                            r = t.data;
                        if (!(a(n.staticStyle) && a(n.style) && a(r.staticStyle) && a(r.style))) {
                            var o,
                                i,
                                s = e.elm,
                                u = r.staticStyle,
                                l = r.normalizedStyle || r.style || {},
                                f = u || l,
                                d = Oi(e.data.style) || {};
                            // store normalized style under a different key for next diff
                            // make sure to clone it if it's reactive, since the user likely wants
                            // to mutate it.
                            e.data.normalizedStyle = c(d.__ob__) ? N({}, d) : d;
                            var p = (function (t, e) {
                                var n,
                                    r = {};
                                if (e) for (var o = t; o.componentInstance; ) (o = o.componentInstance._vnode) && o.data && (n = wi(o.data)) && N(r, n);
                                (n = wi(t.data)) && N(r, n);
                                // @ts-expect-error parentNode.parent not VNodeWithData
                                for (var i = t; (i = i.parent); ) i.data && (n = wi(i.data)) && N(r, n);
                                return r;
                            })(e, !0);
                            for (i in f) a(p[i]) && ji(s, i, "");
                            for (i in p)
                                ((o = p[i]),
                                    // ie9 setting to null has no effect, must use empty string
                                    ji(s, i, null == o ? "" : o));
                        }
                    }
                    var Pi = { create: Ii, update: Ii },
                        Ei = /\s+/;
                    /**
                     * Add class with compatibility for SVG since classList is not supported on
                     * SVG elements in IE
                     */
                    function Ti(t, e) {
                        /* istanbul ignore if */
                        if (e && (e = e.trim()))
                            if (t.classList)
                                /* istanbul ignore else */
                                e.indexOf(" ") > -1
                                    ? e.split(Ei).forEach(function (e) {
                                          return t.classList.add(e);
                                      })
                                    : t.classList.add(e);
                            else {
                                var n = " ".concat(t.getAttribute("class") || "", " ");
                                n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
                            }
                    }
                    /**
                     * Remove class with compatibility for SVG since classList is not supported on
                     * SVG elements in IE
                     */ function Ni(t, e) {
                        /* istanbul ignore if */
                        if (e && (e = e.trim()))
                            if (t.classList)
                                /* istanbul ignore else */
                                (e.indexOf(" ") > -1
                                    ? e.split(Ei).forEach(function (e) {
                                          return t.classList.remove(e);
                                      })
                                    : t.classList.remove(e),
                                    t.classList.length || t.removeAttribute("class"));
                            else {
                                for (var n = " ".concat(t.getAttribute("class") || "", " "), r = " " + e + " "; n.indexOf(r) >= 0; ) n = n.replace(r, " ");
                                (n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
                            }
                    }
                    function Ai(t) {
                        if (t) {
                            /* istanbul ignore else */
                            if ("object" == typeof t) {
                                var e = {};
                                return (!1 !== t.css && N(e, Li(t.name || "v")), N(e, t), e);
                            }
                            return "string" == typeof t ? Li(t) : void 0;
                        }
                    }
                    var Li = x(function (t) {
                            return {
                                enterClass: "".concat(t, "-enter"),
                                enterToClass: "".concat(t, "-enter-to"),
                                enterActiveClass: "".concat(t, "-enter-active"),
                                leaveClass: "".concat(t, "-leave"),
                                leaveToClass: "".concat(t, "-leave-to"),
                                leaveActiveClass: "".concat(t, "-leave-active"),
                            };
                        }),
                        Ri = Z && !tt,
                        Di = "transition",
                        Mi = "animation",
                        zi = "transition",
                        Bi = "transitionend",
                        Fi = "animation",
                        Ui = "animationend";
                    Ri &&
                        /* istanbul ignore if */
                        (void 0 === window.ontransitionend &&
                            void 0 !== window.onwebkittransitionend &&
                            ((zi = "WebkitTransition"), (Bi = "webkitTransitionEnd")),
                        void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && ((Fi = "WebkitAnimation"), (Ui = "webkitAnimationEnd")));
                    // binding to window is necessary to make hot reload work in IE in strict mode
                    var Gi = Z
                        ? window.requestAnimationFrame
                            ? window.requestAnimationFrame.bind(window)
                            : setTimeout
                        : /* istanbul ignore next */ function (/* istanbul ignore next */ t) {
                              return t();
                          };
                    function Vi(t) {
                        Gi(function () {
                            // @ts-expect-error
                            Gi(t);
                        });
                    }
                    function Wi(t, e) {
                        var n = t._transitionClasses || (t._transitionClasses = []);
                        n.indexOf(e) < 0 && (n.push(e), Ti(t, e));
                    }
                    function Hi(t, e) {
                        (t._transitionClasses && O(t._transitionClasses, e), Ni(t, e));
                    }
                    function Ji(t, e, n) {
                        var r = Ki(t, e),
                            o = r.type,
                            i = r.timeout,
                            a = r.propCount;
                        if (!o) return n();
                        var c = o === Di ? Bi : Ui,
                            s = 0,
                            u = function () {
                                (t.removeEventListener(c, l), n());
                            },
                            l = function (e) {
                                e.target === t && ++s >= a && u();
                            };
                        (setTimeout(function () {
                            s < a && u();
                        }, i + 1),
                            t.addEventListener(c, l));
                    }
                    var qi = /\b(transform|all)(,|$)/;
                    function Ki(t, e) {
                        var n,
                            r = window.getComputedStyle(t),
                            o = (r[zi + "Delay"] || "").split(", "),
                            i = (r[zi + "Duration"] || "").split(", "),
                            a = Yi(o, i),
                            c = (r[Fi + "Delay"] || "").split(", "),
                            s = (r[Fi + "Duration"] || "").split(", "),
                            u = Yi(c, s),
                            l = 0,
                            f = 0;
                        // JSDOM may return undefined for transition properties
                        /* istanbul ignore if */
                        return (
                            e === Di
                                ? a > 0 && ((n = Di), (l = a), (f = i.length))
                                : e === Mi
                                  ? u > 0 && ((n = Mi), (l = u), (f = s.length))
                                  : (f = (n = (l = Math.max(a, u)) > 0 ? (a > u ? Di : Mi) : null) ? (n === Di ? i.length : s.length) : 0),
                            { type: n, timeout: l, propCount: f, hasTransform: n === Di && qi.test(r[zi + "Property"]) }
                        );
                    }
                    function Yi(t, e) {
                        /* istanbul ignore next */
                        for (; t.length < e.length; ) t = t.concat(t);
                        return Math.max.apply(
                            null,
                            e.map(function (e, n) {
                                return Zi(e) + Zi(t[n]);
                            }),
                        );
                    }
                    // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
                    // in a locale-dependent way, using a comma instead of a dot.
                    // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
                    // as a floor function) causing unexpected behaviors
                    function Zi(t) {
                        return 1e3 * Number(t.slice(0, -1).replace(",", "."));
                    }
                    function Xi(t, e) {
                        var n = t.elm;
                        // call leave callback now
                        c(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
                        var r = Ai(t.data.transition);
                        if (!a(r) && !c(n._enterCb) && 1 === n.nodeType) /* istanbul ignore if */
                        {
                            for (
                                var o = r.css,
                                    i = r.type,
                                    s = r.enterClass,
                                    u = r.enterToClass,
                                    d = r.enterActiveClass,
                                    p = r.appearClass,
                                    v = r.appearToClass,
                                    h = r.appearActiveClass,
                                    m = r.beforeEnter,
                                    g = r.enter,
                                    y = r.afterEnter,
                                    b = r.enterCancelled,
                                    w = r.beforeAppear,
                                    O = r.appear,
                                    C = r.afterAppear,
                                    S = r.appearCancelled,
                                    x = r.duration,
                                    j = vr,
                                    k = vr.$vnode;
                                // activeInstance will always be the <transition> component managing this
                                // transition. One edge case to check is when the <transition> is placed
                                // as the root node of a child component. In that case we need to check
                                // <transition>'s parent for appear check.
                                k && k.parent;
                            )
                                ((j = k.context), (k = k.parent));
                            var $ = !j._isMounted || !t.isRootInsert;
                            if (!$ || O || "" === O) {
                                var I = $ && p ? p : s,
                                    P = $ && h ? h : d,
                                    E = $ && v ? v : u,
                                    T = ($ && w) || m,
                                    N = $ && l(O) ? O : g,
                                    A = ($ && C) || y,
                                    L = ($ && S) || b,
                                    R = _(f(x) ? x.enter : x);
                                0;
                                var D = !1 !== o && !tt,
                                    M = ea(N),
                                    z = (n._enterCb = B(function () {
                                        (D && (Hi(n, E), Hi(n, P)),
                                            // @ts-expect-error
                                            z.cancelled ? (D && Hi(n, I), L && L(n)) : A && A(n),
                                            (n._enterCb = null));
                                    }));
                                (t.data.show ||
                                    // remove pending leave element on enter by injecting an insert hook
                                    Le(t, "insert", function () {
                                        var e = n.parentNode,
                                            r = e && e._pending && e._pending[t.key];
                                        (r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), N && N(n, z));
                                    }),
                                    // start enter transition
                                    T && T(n),
                                    D &&
                                        (Wi(n, I),
                                        Wi(n, P),
                                        Vi(function () {
                                            (Hi(n, I),
                                                // @ts-expect-error
                                                z.cancelled || (Wi(n, E), M || (ta(R) ? setTimeout(z, R) : Ji(n, i, z))));
                                        })),
                                    t.data.show && (e && e(), N && N(n, z)),
                                    D || M || z());
                            }
                        }
                    }
                    function Qi(t, e) {
                        var n = t.elm;
                        // call enter callback now
                        c(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb());
                        var r = Ai(t.data.transition);
                        if (a(r) || 1 !== n.nodeType) return e();
                        /* istanbul ignore if */ if (!c(n._leaveCb)) {
                            var o = r.css,
                                i = r.type,
                                s = r.leaveClass,
                                u = r.leaveToClass,
                                l = r.leaveActiveClass,
                                d = r.beforeLeave,
                                p = r.leave,
                                v = r.afterLeave,
                                h = r.leaveCancelled,
                                m = r.delayLeave,
                                g = r.duration,
                                y = !1 !== o && !tt,
                                b = ea(p),
                                w = _(f(g) ? g.leave : g);
                            0;
                            var O = (n._leaveCb = B(function () {
                                (n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null),
                                    y && (Hi(n, u), Hi(n, l)),
                                    // @ts-expect-error
                                    O.cancelled ? (y && Hi(n, s), h && h(n)) : (e(), v && v(n)),
                                    (n._leaveCb = null));
                            }));
                            m ? m(C) : C();
                        }
                        function C() {
                            // the delayed leave may have already been cancelled
                            // @ts-expect-error
                            O.cancelled ||
                                // record leaving element
                                (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t),
                                d && d(n),
                                y &&
                                    (Wi(n, s),
                                    Wi(n, l),
                                    Vi(function () {
                                        (Hi(n, s),
                                            // @ts-expect-error
                                            O.cancelled || (Wi(n, u), b || (ta(w) ? setTimeout(O, w) : Ji(n, i, O))));
                                    })),
                                p && p(n, O),
                                y || b || O());
                        }
                    }
                    // only used in dev mode
                    function ta(t) {
                        return "number" == typeof t && !isNaN(t);
                    }
                    /**
                     * Normalize a transition hook's argument length. The hook may be:
                     * - a merged hook (invoker) with the original in .fns
                     * - a wrapped component method (check ._length)
                     * - a plain function (.length)
                     */ function ea(t) {
                        if (a(t)) return !1;
                        // @ts-expect-error
                        var e = t.fns;
                        return c(e) ? ea(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
                    }
                    function na(t, e) {
                        !0 !== e.data.show && Xi(e);
                    }
                    var ra = (function (t) {
                        var e,
                            n,
                            r = {},
                            o = t.modules,
                            l = t.nodeOps;
                        for (e = 0; e < Wo.length; ++e) for (r[Wo[e]] = [], n = 0; n < o.length; ++n) c(o[n][Wo[e]]) && r[Wo[e]].push(o[n][Wo[e]]);
                        function f(t) {
                            var e = l.parentNode(t);
                            // element may have already been removed due to v-html / v-text
                            c(e) && l.removeChild(e, t);
                        }
                        function d(t, e, n, o, i, a, u) {
                            // for transition enter check
                            if (
                                (c(t.elm) &&
                                    c(a) &&
                                    // This vnode was used in a previous render!
                                    // now it's used as a new node, overwriting its elm would cause
                                    // potential patch errors down the road when it's used as an insertion
                                    // reference node. Instead, we clone the node on-demand before creating
                                    // associated DOM element for it.
                                    (t = a[u] = _t(t)),
                                (t.isRootInsert = !i),
                                !(function (t, e, n, o) {
                                    var i = t.data;
                                    if (c(i)) {
                                        var a = c(t.componentInstance) && i.keepAlive;
                                        // after calling the init hook, if the vnode is a child component
                                        // it should've created a child instance and mounted it. the child
                                        // component also has set the placeholder vnode's elm.
                                        // in that case we can just return the element and be done.
                                        if ((c((i = i.hook)) && c((i = i.init)) && i(t, !1 /* hydrating */), c(t.componentInstance)))
                                            return (
                                                p(t, e),
                                                v(n, t.elm, o),
                                                s(a) &&
                                                    (function (t, e, n, o) {
                                                        var i,
                                                            a = t;
                                                        // hack for #4339: a reactivated component with inner transition
                                                        // does not trigger because the inner node's created hooks are not called
                                                        // again. It's not ideal to involve module-specific logic in here but
                                                        // there doesn't seem to be a better way to do it.
                                                        for (; a.componentInstance; )
                                                            if (c((i = (a = a.componentInstance._vnode).data)) && c((i = i.transition))) {
                                                                for (i = 0; i < r.activate.length; ++i) r.activate[i](Vo, a);
                                                                e.push(a);
                                                                break;
                                                            }
                                                        // unlike a newly created component,
                                                        // a reactivated keep-alive component doesn't insert itself
                                                        v(n, t.elm, o);
                                                    })(t, e, n, o),
                                                !0
                                            );
                                    }
                                })(t, e, n, o))
                            ) {
                                var f = t.data,
                                    d = t.children,
                                    m = t.tag;
                                c(m)
                                    ? ((t.elm = t.ns ? l.createElementNS(t.ns, m) : l.createElement(m, t)), y(t), h(t, d, e), c(f) && g(t, e), v(n, t.elm, o))
                                    : s(t.isComment)
                                      ? ((t.elm = l.createComment(t.text)), v(n, t.elm, o))
                                      : ((t.elm = l.createTextNode(t.text)), v(n, t.elm, o));
                            }
                        }
                        function p(t, e) {
                            (c(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), (t.data.pendingInsert = null)),
                                (t.elm = t.componentInstance.$el),
                                m(t)
                                    ? (g(t, e), y(t))
                                    : // empty component root.
                                      // skip all element-related modules except for ref (#3455)
                                      (Uo(t),
                                      // make sure to invoke the insert hook
                                      e.push(t)));
                        }
                        function v(t, e, n) {
                            c(t) && (c(n) ? l.parentNode(n) === t && l.insertBefore(t, e, n) : l.appendChild(t, e));
                        }
                        function h(t, e, n) {
                            if (i(e)) {
                                0;
                                for (var r = 0; r < e.length; ++r) d(e[r], n, t.elm, null, !0, e, r);
                            } else u(t.text) && l.appendChild(t.elm, l.createTextNode(String(t.text)));
                        }
                        function m(t) {
                            for (; t.componentInstance; ) t = t.componentInstance._vnode;
                            return c(t.tag);
                        }
                        function g(t, n) {
                            for (var o = 0; o < r.create.length; ++o) r.create[o](Vo, t); // Reuse variable
                            c((e = t.data.hook)) && (c(e.create) && e.create(Vo, t), c(e.insert) && n.push(t));
                        }
                        // set scope id attribute for scoped CSS.
                        // this is implemented as a special case to avoid the overhead
                        // of going through the normal attribute patching process.
                        function y(t) {
                            var e;
                            if (c((e = t.fnScopeId))) l.setStyleScope(t.elm, e);
                            else for (var n = t; n; ) (c((e = n.context)) && c((e = e.$options._scopeId)) && l.setStyleScope(t.elm, e), (n = n.parent));
                            // for slot content they should also get the scopeId from the host instance.
                            c((e = vr)) && e !== t.context && e !== t.fnContext && c((e = e.$options._scopeId)) && l.setStyleScope(t.elm, e);
                        }
                        function _(t, e, n, r, o, i) {
                            for (; r <= o; ++r) d(n[r], i, t, e, !1, n, r);
                        }
                        function w(t) {
                            var e,
                                n,
                                o = t.data;
                            if (c(o)) for (c((e = o.hook)) && c((e = e.destroy)) && e(t), e = 0; e < r.destroy.length; ++e) r.destroy[e](t);
                            if (c((e = t.children))) for (n = 0; n < t.children.length; ++n) w(t.children[n]);
                        }
                        function O(t, e, n) {
                            for (; e <= n; ++e) {
                                var r = t[e];
                                c(r) &&
                                    (c(r.tag)
                                        ? (C(r), w(r))
                                        : // Text node
                                          f(r.elm));
                            }
                        }
                        function C(t, e) {
                            if (c(e) || c(t.data)) {
                                var n,
                                    o = r.remove.length + 1;
                                for (
                                    c(e)
                                        ? // we have a recursively passed down rm callback
                                          // increase the listeners count
                                          (e.listeners += o)
                                        : // directly removing
                                          (e = (function (t, e) {
                                              function n() {
                                                  0 == --n.listeners && f(t);
                                              }
                                              return ((n.listeners = e), n);
                                          })(t.elm, o)),
                                        // recursively invoke hooks on child component root node
                                        c((n = t.componentInstance)) && c((n = n._vnode)) && c(n.data) && C(n, e),
                                        n = 0;
                                    n < r.remove.length;
                                    ++n
                                )
                                    r.remove[n](t, e);
                                c((n = t.data.hook)) && c((n = n.remove)) ? n(t, e) : e();
                            } else f(t.elm);
                        }
                        function S(t, e, n, r) {
                            for (var o = n; o < r; o++) {
                                var i = e[o];
                                if (c(i) && Ho(t, i)) return o;
                            }
                        }
                        function x(t, e, n, o, i, u) {
                            if (t !== e) {
                                c(e.elm) &&
                                    c(o) &&
                                    // clone reused vnode
                                    (e = o[i] = _t(e));
                                var f = (e.elm = t.elm);
                                if (s(t.isAsyncPlaceholder)) c(e.asyncFactory.resolved) ? $(t.elm, e, n) : (e.isAsyncPlaceholder = !0);
                                else if (s(e.isStatic) && s(t.isStatic) && e.key === t.key && (s(e.isCloned) || s(e.isOnce)))
                                    // reuse element for static trees.
                                    // note we only do this if the vnode is cloned -
                                    // if the new node is not cloned it means the render functions have been
                                    // reset by the hot-reload-api and we need to do a proper re-render.
                                    e.componentInstance = t.componentInstance;
                                else {
                                    var p,
                                        v = e.data;
                                    c(v) && c((p = v.hook)) && c((p = p.prepatch)) && p(t, e);
                                    var h = t.children,
                                        g = e.children;
                                    if (c(v) && m(e)) {
                                        for (p = 0; p < r.update.length; ++p) r.update[p](t, e);
                                        c((p = v.hook)) && c((p = p.update)) && p(t, e);
                                    }
                                    (a(e.text)
                                        ? c(h) && c(g)
                                            ? h !== g &&
                                              (function (t, e, n, r, o) {
                                                  var i,
                                                      s,
                                                      u,
                                                      f = 0,
                                                      p = 0,
                                                      v = e.length - 1,
                                                      h = e[0],
                                                      m = e[v],
                                                      g = n.length - 1,
                                                      y = n[0],
                                                      b = n[g],
                                                      w = !o;
                                                  for (; f <= v && p <= g; )
                                                      a(h)
                                                          ? (h = e[++f])
                                                          : a(m)
                                                            ? (m = e[--v])
                                                            : Ho(h, y)
                                                              ? (x(h, y, r, n, p), (h = e[++f]), (y = n[++p]))
                                                              : Ho(m, b)
                                                                ? (x(m, b, r, n, g), (m = e[--v]), (b = n[--g]))
                                                                : Ho(h, b)
                                                                  ? // Vnode moved right
                                                                    (x(h, b, r, n, g),
                                                                    w && l.insertBefore(t, h.elm, l.nextSibling(m.elm)),
                                                                    (h = e[++f]),
                                                                    (b = n[--g]))
                                                                  : Ho(m, y)
                                                                    ? // Vnode moved left
                                                                      (x(m, y, r, n, p), w && l.insertBefore(t, m.elm, h.elm), (m = e[--v]), (y = n[++p]))
                                                                    : (a(i) && (i = Jo(e, f, v)),
                                                                      a((s = c(y.key) ? i[y.key] : S(y, e, f, v)))
                                                                          ? // New element
                                                                            d(y, r, t, h.elm, !1, n, p)
                                                                          : Ho((u = e[s]), y)
                                                                            ? (x(u, y, r, n, p), (e[s] = void 0), w && l.insertBefore(t, u.elm, h.elm))
                                                                            : // same key but different element. treat as new element
                                                                              d(y, r, t, h.elm, !1, n, p),
                                                                      (y = n[++p]));
                                                  f > v ? _(t, a(n[g + 1]) ? null : n[g + 1].elm, n, p, g, r) : p > g && O(e, f, v);
                                              })(f, h, g, n, u)
                                            : c(g)
                                              ? (c(t.text) && l.setTextContent(f, ""), _(f, null, g, 0, g.length - 1, n))
                                              : c(h)
                                                ? O(h, 0, h.length - 1)
                                                : c(t.text) && l.setTextContent(f, "")
                                        : t.text !== e.text && l.setTextContent(f, e.text),
                                        c(v) && c((p = v.hook)) && c((p = p.postpatch)) && p(t, e));
                                }
                            }
                        }
                        function j(t, e, n) {
                            // delay insert hooks for component root nodes, invoke them after the
                            // element is really inserted
                            if (s(n) && c(t.parent)) t.parent.data.pendingInsert = e;
                            else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r]);
                        }
                        var k = b("attrs,class,staticClass,staticStyle,key");
                        // list of modules that can skip create hook during hydration because they
                        // are already rendered on the client or has no need for initialization
                        // Note: style is excluded because it relies on initial clone for future
                        // deep updates (#7063).
                        // Note: this is a browser-only function so we can assume elms are DOM nodes.
                        function $(t, e, n, r) {
                            var o,
                                i = e.tag,
                                a = e.data,
                                u = e.children;
                            if (((r = r || (a && a.pre)), (e.elm = t), s(e.isComment) && c(e.asyncFactory))) return ((e.isAsyncPlaceholder = !0), !0);
                            // assert node match
                            if (c(a) && (c((o = a.hook)) && c((o = o.init)) && o(e, !0 /* hydrating */), c((o = e.componentInstance))))
                                // child component. it should have hydrated its own tree.
                                return (p(e, n), !0);
                            if (c(i)) {
                                if (c(u))
                                    if (t.hasChildNodes())
                                        if (c((o = a)) && c((o = o.domProps)) && c((o = o.innerHTML))) {
                                            // empty element, allow client to pick up and populate children
                                            // v-html and domProps: innerHTML
                                            if (o !== t.innerHTML) return !1;
                                        } else {
                                            for (
                                                // iterate and compare children lists
                                                var l = !0, f = t.firstChild, d = 0;
                                                d < u.length;
                                                d++
                                            ) {
                                                if (!f || !$(f, u[d], n, r)) {
                                                    l = !1;
                                                    break;
                                                }
                                                f = f.nextSibling;
                                            }
                                            // if childNode is not null, it means the actual childNodes list is
                                            // longer than the virtual children list.
                                            if (!l || f) return !1;
                                        }
                                    else h(e, u, n);
                                if (c(a)) {
                                    var v = !1;
                                    for (var m in a)
                                        if (!k(m)) {
                                            ((v = !0), g(e, n));
                                            break;
                                        }
                                    !v &&
                                        a.class &&
                                        // ensure collecting deps for deep class bindings for future updates
                                        ir(a.class);
                                }
                            } else t.data !== e.text && (t.data = e.text);
                            return !0;
                        }
                        return function (t, e, n, o) {
                            if (!a(e)) {
                                var i,
                                    u = !1,
                                    f = [];
                                if (a(t))
                                    // empty mount (likely as component), create new root element
                                    ((u = !0), d(e, f));
                                else {
                                    var p = c(t.nodeType);
                                    if (!p && Ho(t, e))
                                        // patch existing root node
                                        x(t, e, f, null, null, o);
                                    else {
                                        if (p) {
                                            if (
                                                // mounting to a real element
                                                // check if this is server-rendered content and if we can perform
                                                // a successful hydration.
                                                (1 === t.nodeType && t.hasAttribute(U) && (t.removeAttribute(U), (n = !0)), s(n) && $(t, e, f))
                                            )
                                                return (j(e, f, !0), t);
                                            // either not server-rendered, or hydration failed.
                                            // create an empty node and replace it
                                            ((i = t), (t = new mt(l.tagName(i).toLowerCase(), {}, [], void 0, i)));
                                        }
                                        // replacing existing element
                                        var v = t.elm,
                                            h = l.parentNode(v);
                                        // update parent placeholder node element, recursively
                                        if (
                                            // create new node
                                            (d(
                                                e,
                                                f,
                                                // extremely rare edge case: do not insert if old element is in a
                                                // leaving transition. Only happens when combining transition +
                                                // keep-alive + HOCs. (#4590)
                                                v._leaveCb ? null : h,
                                                l.nextSibling(v),
                                            ),
                                            c(e.parent))
                                        )
                                            for (var g = e.parent, y = m(e); g; ) {
                                                for (var _ = 0; _ < r.destroy.length; ++_) r.destroy[_](g);
                                                if (((g.elm = e.elm), y)) {
                                                    for (var b = 0; b < r.create.length; ++b) r.create[b](Vo, g);
                                                    // #6513
                                                    // invoke insert hooks that may have been merged by create hooks.
                                                    // e.g. for directives that uses the "inserted" hook.
                                                    var C = g.data.hook.insert;
                                                    if (C.merged)
                                                        for (
                                                            // start at index 1 to avoid re-invoking component mounted hook
                                                            // clone insert hooks to avoid being mutated during iteration.
                                                            // e.g. for customed directives under transition group.
                                                            var S = C.fns.slice(1), k = 0;
                                                            k < S.length;
                                                            k++
                                                        )
                                                            S[k]();
                                                } else Uo(g);
                                                g = g.parent;
                                            }
                                        // destroy old node
                                        c(h) ? O([t], 0, 0) : c(t.tag) && w(t);
                                    }
                                }
                                return (j(e, f, u), e.elm);
                            }
                            c(t) && w(t);
                        };
                    })({
                        nodeOps: Bo,
                        modules: [
                            oi,
                            ci,
                            mi,
                            _i,
                            Pi,
                            Z
                                ? {
                                      create: na,
                                      activate: na,
                                      remove: function (t, e) {
                                          /* istanbul ignore else */
                                          !0 !== t.data.show
                                              ? // @ts-expect-error
                                                Qi(t, e)
                                              : e();
                                      },
                                  }
                                : {},
                        ].concat(ti),
                    });
                    /**
                     * Not type checking this file because flow doesn't like attaching
                     * properties to Elements.
                     */
                    /* istanbul ignore if */
                    tt &&
                        // http://www.matts411.com/post/internet-explorer-9-oninput/
                        document.addEventListener("selectionchange", function () {
                            var t = document.activeElement;
                            // @ts-expect-error
                            t && t.vmodel && fa(t, "input");
                        });
                    var oa = {
                        inserted: function (t, e, n, r) {
                            "select" === n.tag
                                ? // #6903
                                  (r.elm && !r.elm._vOptions
                                      ? Le(n, "postpatch", function () {
                                            oa.componentUpdated(t, e, n);
                                        })
                                      : ia(t, e, n.context),
                                  (t._vOptions = [].map.call(t.options, sa)))
                                : ("textarea" === n.tag || zo(t.type)) &&
                                  ((t._vModifiers = e.modifiers),
                                  e.modifiers.lazy ||
                                      (t.addEventListener("compositionstart", ua),
                                      t.addEventListener("compositionend", la),
                                      // Safari < 10.2 & UIWebView doesn't fire compositionend when
                                      // switching focus before confirming composition choice
                                      // this also fixes the issue where some browsers e.g. iOS Chrome
                                      // fires "change" instead of "input" on autocomplete.
                                      t.addEventListener("change", la),
                                      /* istanbul ignore if */
                                      tt && (t.vmodel = !0)));
                        },
                        componentUpdated: function (t, e, n) {
                            if ("select" === n.tag) {
                                ia(t, e, n.context);
                                // in case the options rendered by v-for have changed,
                                // it's possible that the value is out-of-sync with the rendered options.
                                // detect such cases and filter out values that no longer has a matching
                                // option in the DOM.
                                var r = t._vOptions,
                                    o = (t._vOptions = [].map.call(t.options, sa));
                                if (
                                    o.some(function (t, e) {
                                        return !M(t, r[e]);
                                    })
                                )
                                    (t.multiple
                                        ? e.value.some(function (t) {
                                              return ca(t, o);
                                          })
                                        : e.value !== e.oldValue && ca(e.value, o)) && fa(t, "change");
                            }
                        },
                    };
                    function ia(t, e, n) {
                        (aa(t, e, n),
                            /* istanbul ignore if */
                            (Q || et) &&
                                setTimeout(function () {
                                    aa(t, e, n);
                                }, 0));
                    }
                    function aa(t, e, n) {
                        var r = e.value,
                            o = t.multiple;
                        if (!o || Array.isArray(r)) {
                            for (var i, a, c = 0, s = t.options.length; c < s; c++)
                                if (((a = t.options[c]), o)) ((i = z(r, sa(a)) > -1), a.selected !== i && (a.selected = i));
                                else if (M(sa(a), r)) return void (t.selectedIndex !== c && (t.selectedIndex = c));
                            o || (t.selectedIndex = -1);
                        }
                    }
                    function ca(t, e) {
                        return e.every(function (e) {
                            return !M(e, t);
                        });
                    }
                    function sa(t) {
                        return "_value" in t ? t._value : t.value;
                    }
                    function ua(t) {
                        t.target.composing = !0;
                    }
                    function la(t) {
                        // prevent triggering an input event for no reason
                        t.target.composing && ((t.target.composing = !1), fa(t.target, "input"));
                    }
                    function fa(t, e) {
                        var n = document.createEvent("HTMLEvents");
                        (n.initEvent(e, !0, !0), t.dispatchEvent(n));
                    }
                    // recursively search for possible transition defined inside the component root
                    function da(t) {
                        // @ts-expect-error
                        return !t.componentInstance || (t.data && t.data.transition) ? t : da(t.componentInstance._vnode);
                    }
                    var pa = {
                            bind: function (t, e, n) {
                                var r = e.value,
                                    o = (n = da(n)).data && n.data.transition,
                                    i = (t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display);
                                r && o
                                    ? ((n.data.show = !0),
                                      Xi(n, function () {
                                          t.style.display = i;
                                      }))
                                    : (t.style.display = r ? i : "none");
                            },
                            update: function (t, e, n) {
                                var r = e.value;
                                /* istanbul ignore if */ !r != !e.oldValue &&
                                    ((n = da(n)).data && n.data.transition
                                        ? ((n.data.show = !0),
                                          r
                                              ? Xi(n, function () {
                                                    t.style.display = t.__vOriginalDisplay;
                                                })
                                              : Qi(n, function () {
                                                    t.style.display = "none";
                                                }))
                                        : (t.style.display = r ? t.__vOriginalDisplay : "none"));
                            },
                            unbind: function (t, e, n, r, o) {
                                o || (t.style.display = t.__vOriginalDisplay);
                            },
                        },
                        va = { model: oa, show: pa },
                        ha = {
                            name: String,
                            appear: Boolean,
                            css: Boolean,
                            mode: String,
                            type: String,
                            enterClass: String,
                            leaveClass: String,
                            enterToClass: String,
                            leaveToClass: String,
                            enterActiveClass: String,
                            leaveActiveClass: String,
                            appearClass: String,
                            appearActiveClass: String,
                            appearToClass: String,
                            duration: [Number, String, Object],
                        };
                    // in case the child is also an abstract component, e.g. <keep-alive>
                    // we want to recursively retrieve the real component to be rendered
                    function ma(t) {
                        var e = t && t.componentOptions;
                        return e && e.Ctor.options.abstract ? ma(_n(e.children)) : t;
                    }
                    function ga(t) {
                        var e = {},
                            n = t.$options;
                        // props
                        for (var r in n.propsData) e[r] = t[r];
                        // events.
                        // extract listeners and pass them directly to the transition methods
                        var o = n._parentListeners;
                        for (var r in o) e[k(r)] = o[r];
                        return e;
                    }
                    function ya(t, e) {
                        // @ts-expect-error
                        if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", { props: e.componentOptions.propsData });
                    }
                    var _a = function (t) {
                            return t.tag || rn(t);
                        },
                        ba = function (t) {
                            return "show" === t.name;
                        },
                        wa = {
                            name: "transition",
                            props: ha,
                            abstract: !0,
                            render: function (t) {
                                var e = this,
                                    n = this.$slots.default;
                                if (
                                    n &&
                                    // filter out text nodes (possible whitespaces)
                                    (n = n.filter(_a)).length
                                ) /* istanbul ignore if */
                                {
                                    0;
                                    var r = this.mode;
                                    // warn invalid mode
                                    0;
                                    var o = n[0];
                                    // if this is a component root node and the component's
                                    // parent container node also has transition, skip.
                                    if (
                                        (function (t) {
                                            for (; (t = t.parent); ) if (t.data.transition) return !0;
                                        })(this.$vnode)
                                    )
                                        return o;
                                    // apply transition data to child
                                    // use getRealChild() to ignore abstract components e.g. keep-alive
                                    var i = ma(o);
                                    /* istanbul ignore if */ if (!i) return o;
                                    if (this._leaving) return ya(t, o);
                                    // ensure a key that is unique to the vnode type and to this transition
                                    // component instance. This key will be used to remove pending leaving nodes
                                    // during entering.
                                    var a = "__transition-".concat(this._uid, "-");
                                    i.key =
                                        null == i.key
                                            ? i.isComment
                                                ? a + "comment"
                                                : a + i.tag
                                            : u(i.key)
                                              ? 0 === String(i.key).indexOf(a)
                                                  ? i.key
                                                  : a + i.key
                                              : i.key;
                                    var c = ((i.data || (i.data = {})).transition = ga(this)),
                                        s = this._vnode,
                                        l = ma(s);
                                    if (
                                        // mark v-show
                                        // so that the transition module can hand over the control to the directive
                                        (i.data.directives && i.data.directives.some(ba) && (i.data.show = !0),
                                        l &&
                                            l.data &&
                                            !(function (t, e) {
                                                return e.key === t.key && e.tag === t.tag;
                                            })(i, l) &&
                                            !rn(l) &&
                                            (!l.componentInstance || !l.componentInstance._vnode.isComment))
                                    ) {
                                        // replace old child transition data with fresh one
                                        // important for dynamic transitions!
                                        var f = (l.data.transition = N({}, c));
                                        // handle transition mode
                                        if ("out-in" === r)
                                            // return placeholder node and queue update when leave finishes
                                            return (
                                                (this._leaving = !0),
                                                Le(f, "afterLeave", function () {
                                                    ((e._leaving = !1), e.$forceUpdate());
                                                }),
                                                ya(t, o)
                                            );
                                        if ("in-out" === r) {
                                            if (rn(i)) return s;
                                            var d,
                                                p = function () {
                                                    d();
                                                };
                                            (Le(c, "afterEnter", p),
                                                Le(c, "enterCancelled", p),
                                                Le(f, "delayLeave", function (t) {
                                                    d = t;
                                                }));
                                        }
                                    }
                                    return o;
                                }
                                // warn multiple elements
                            },
                        },
                        Oa = N({ tag: String, moveClass: String }, ha);
                    delete Oa.mode;
                    var Ca = {
                        props: Oa,
                        beforeMount: function () {
                            var t = this,
                                e = this._update;
                            this._update = function (n, r) {
                                var o = hr(t);
                                // force removing pass
                                (t.__patch__(
                                    t._vnode,
                                    t.kept,
                                    !1, // hydrating
                                    !0,
                                ),
                                    (t._vnode = t.kept),
                                    o(),
                                    e.call(t, n, r));
                            };
                        },
                        render: function (t) {
                            for (
                                var e = this.tag || this.$vnode.data.tag || "span",
                                    n = Object.create(null),
                                    r = (this.prevChildren = this.children),
                                    o = this.$slots.default || [],
                                    i = (this.children = []),
                                    a = ga(this),
                                    c = 0;
                                c < o.length;
                                c++
                            ) {
                                if ((l = o[c]).tag)
                                    if (null != l.key && 0 !== String(l.key).indexOf("__vlist"))
                                        (i.push(l), (n[l.key] = l), ((l.data || (l.data = {})).transition = a));
                                    else;
                            }
                            if (r) {
                                var s = [],
                                    u = [];
                                for (c = 0; c < r.length; c++) {
                                    var l;
                                    (((l = r[c]).data.transition = a),
                                        // @ts-expect-error .getBoundingClientRect is not typed in Node
                                        (l.data.pos = l.elm.getBoundingClientRect()),
                                        n[l.key] ? s.push(l) : u.push(l));
                                }
                                ((this.kept = t(e, null, s)), (this.removed = u));
                            }
                            return t(e, null, i);
                        },
                        updated: function () {
                            var t = this.prevChildren,
                                e = this.moveClass || (this.name || "v") + "-move";
                            t.length &&
                                this.hasMove(t[0].elm, e) &&
                                // we divide the work into three loops to avoid mixing DOM reads and writes
                                // in each iteration - which helps prevent layout thrashing.
                                (t.forEach(Sa),
                                t.forEach(xa),
                                t.forEach(ja),
                                // force reflow to put everything in position
                                // assign to this to avoid being removed in tree-shaking
                                // $flow-disable-line
                                (this._reflow = document.body.offsetHeight),
                                t.forEach(function (t) {
                                    if (t.data.moved) {
                                        var n = t.elm,
                                            r = n.style;
                                        (Wi(n, e),
                                            (r.transform = r.WebkitTransform = r.transitionDuration = ""),
                                            n.addEventListener(
                                                Bi,
                                                (n._moveCb = function t(r) {
                                                    (r && r.target !== n) ||
                                                        (r && !/transform$/.test(r.propertyName)) ||
                                                        (n.removeEventListener(Bi, t), (n._moveCb = null), Hi(n, e));
                                                }),
                                            ));
                                    }
                                }));
                        },
                        methods: {
                            hasMove: function (t, e) {
                                /* istanbul ignore if */
                                if (!Ri) return !1;
                                /* istanbul ignore if */ if (this._hasMove) return this._hasMove;
                                // Detect whether an element with the move class applied has
                                // CSS transitions. Since the element may be inside an entering
                                // transition at this very moment, we make a clone of it and remove
                                // all other transition classes applied to ensure only the move class
                                // is applied.
                                var n = t.cloneNode();
                                (t._transitionClasses &&
                                    t._transitionClasses.forEach(function (t) {
                                        Ni(n, t);
                                    }),
                                    Ti(n, e),
                                    (n.style.display = "none"),
                                    this.$el.appendChild(n));
                                var r = Ki(n);
                                return (this.$el.removeChild(n), (this._hasMove = r.hasTransform));
                            },
                        },
                    };
                    function Sa(t) {
                        /* istanbul ignore if */
                        (t.elm._moveCb && t.elm._moveCb(), /* istanbul ignore if */ t.elm._enterCb && t.elm._enterCb());
                    }
                    function xa(t) {
                        t.data.newPos = t.elm.getBoundingClientRect();
                    }
                    function ja(t) {
                        var e = t.data.pos,
                            n = t.data.newPos,
                            r = e.left - n.left,
                            o = e.top - n.top;
                        if (r || o) {
                            t.data.moved = !0;
                            var i = t.elm.style;
                            ((i.transform = i.WebkitTransform = "translate(".concat(r, "px,").concat(o, "px)")), (i.transitionDuration = "0s"));
                        }
                    }
                    var ka = { Transition: wa, TransitionGroup: Ca };
                    // install platform specific utils
                    ((fo.config.mustUseProp = function (t, e, n) {
                        return (
                            ("value" === n && wo(t) && "button" !== e) ||
                            ("selected" === n && "option" === t) ||
                            ("checked" === n && "input" === t) ||
                            ("muted" === n && "video" === t)
                        );
                    }),
                        (fo.config.isReservedTag = Do),
                        (fo.config.isReservedAttr = bo),
                        (fo.config.getTagNamespace = function (t) {
                            return Ro(t)
                                ? "svg"
                                : // basic support for MathML
                                  // note it doesn't support other MathML elements being component roots
                                  "math" === t
                                  ? "math"
                                  : void 0;
                        }),
                        (fo.config.isUnknownElement = function (t) {
                            /* istanbul ignore if */
                            if (!Z) return !0;
                            if (Do(t)) return !1;
                            /* istanbul ignore if */
                            if (((t = t.toLowerCase()), null != Mo[t])) return Mo[t];
                            var e = document.createElement(t);
                            return t.indexOf("-") > -1
                                ? (Mo[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement)
                                : (Mo[t] = /HTMLUnknownElement/.test(e.toString()));
                        }),
                        // install platform runtime directives & components
                        N(fo.options.directives, va),
                        N(fo.options.components, ka),
                        // install platform patch function
                        (fo.prototype.__patch__ = Z ? ra : L),
                        // public mount method
                        (fo.prototype.$mount = function (t, e) {
                            return (function (t, e, n) {
                                var r;
                                /* istanbul ignore if */ ((t.$el = e),
                                    t.$options.render ||
                                        // @ts-expect-error invalid type
                                        (t.$options.render = gt),
                                    _r(t, "beforeMount"),
                                    (r = function () {
                                        t._update(t._render(), n);
                                    }),
                                    // we set this to vm._watcher inside the watcher's constructor
                                    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
                                    // component's mounted hook), which relies on vm._watcher being already defined
                                    new ur(
                                        t,
                                        r,
                                        L,
                                        {
                                            before: function () {
                                                t._isMounted && !t._isDestroyed && _r(t, "beforeUpdate");
                                            },
                                        },
                                        !0 /* isRenderWatcher */,
                                    ),
                                    (n = !1));
                                // flush buffer for flush: "pre" watchers queued in setup()
                                var o = t._preWatchers;
                                if (o) for (var i = 0; i < o.length; i++) o[i].run();
                                // manually mounted instance, call mounted on self
                                // mounted is called for render-created child components in its inserted hook
                                return (null == t.$vnode && ((t._isMounted = !0), _r(t, "mounted")), t);
                            })(
                                this,
                                (t =
                                    t && Z
                                        ? (function (t) {
                                              if ("string" == typeof t) {
                                                  return document.querySelector(t) || document.createElement("div");
                                              }
                                              return t;
                                          })(t)
                                        : void 0),
                                e,
                            );
                        }),
                        // devtools global hook
                        /* istanbul ignore next */
                        Z &&
                            setTimeout(function () {
                                W.devtools && ut && ut.emit("init", fo);
                            }, 0));
                    /* WEBPACK VAR INJECTION */
                }.call(this, n(39), n(204).setImmediate));
            /***/
        },
        /***/ 39: /***/ function (t, e) {
            var n;
            // This works in non-strict mode
            n = (function () {
                return this;
            })();
            try {
                // This works if eval is allowed (see CSP)
                n = n || new Function("return this")();
            } catch (t) {
                // This works if the window reference is available
                "object" == typeof window && (n = window);
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            t.exports = n;
        },
        /***/ 563: /***/ function (t, e) {
            t.exports = function () {
                for (var t = {}, e = 0; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var o in r) n.call(r, o) && (t[o] = r[o]);
                }
                return t;
            };
            /***/
            var n = Object.prototype.hasOwnProperty;
        },
        /***/ 61: /***/ function (t, e, n) {
            "use strict";
            /* harmony export (binding) */ n.d(e, "a", function () {
                return c;
            });
            /* harmony import */ (n(8), n(9), n(6), n(11), n(12));
            /* harmony import */
            var r = n(4);
            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            /**
             * api 基礎開關設定，預設全開，key以api名稱命名
             * @param extendObj 覆寫的設定的物件
             */
            var i = function () {
                    return (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2
                                ? o(Object(n), !0).forEach(function (e) {
                                      Object(r.a)(t, e, n[e]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : o(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    });
                        }
                        return t;
                    })(
                        {
                            // auth 需 token 驗證
                            // 取得VIP設定
                            getVIPSetting: !0,
                            // 暱稱設定是否有開啟
                            isNicknameEnable: !0,
                            // 取得使用者道具
                            getPlayerItemData: !0,
                            // public 不需 token 驗證
                            // 取得輪播列表
                            getBanner: !0,
                            // 取得跑馬燈列表
                            getMarquee: !0,
                            // 取得入口遊戲列表
                            getGameEntrance: !0,
                            // 取得說明頁動態賠率
                            getRtpInfo: !0,
                            // 取得說明頁 switch off 設定
                            getSwitchOffInfo: !0,
                        },
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    );
                },
                a = {
                    GLI: i({ getVIPSetting: !1, isNicknameEnable: !1, getPlayerItemData: !1 }),
                    ROAR: i({ getBanner: !1, getMarquee: !1, getGameEntrance: !1 }),
                    DONUT: i({ getBanner: !1, getMarquee: !1, getGameEntrance: !0, getRtpInfo: !1, getSwitchOffInfo: !1 }),
                    PS: i({ getBanner: !1, getMarquee: !1, getGameEntrance: !0 }),
                },
                c = function (t, e) {
                    // 判斷有定義需要關閉的api
                    return a[t] ? a[t][e] || !1 : i()[e] || !1;
                };
            /**
             * api 專案開關設定，要關閉的帶入api名稱設定，不需關閉開關的環境不用填
             */
        },
        /***/ 62: /***/ function (t, e, n) {
            "use strict";
            /* unused harmony export screamingSnakeCase */
            /* harmony export (binding) */ (n.d(e, "d", function () {
                return b;
            }),
                /* unused harmony export getUserSubDomain */
                /* harmony export (binding) */ n.d(e, "a", function () {
                    return O;
                }),
                /* harmony export (binding) */ n.d(e, "c", function () {
                    return C;
                }));
            /* unused harmony export getCaseInsensitiveProperty */
            /* harmony import */ var r = n(4),
                o = n(15),
                i = n(13),
                a =
                    (n(36),
                    n(22),
                    n(21),
                    n(27),
                    n(14),
                    n(54),
                    n(93),
                    n(43),
                    n(16),
                    n(551),
                    n(254),
                    n(136),
                    n(25),
                    n(24),
                    n(20),
                    n(6),
                    n(8),
                    n(9),
                    n(11),
                    n(12),
                    n(3)),
                c = n(91),
                s = n.n(c),
                u = n(379),
                l = n(181),
                f = n(41),
                d = n(135),
                p = n.n(d),
                v = n(88),
                h = n(177),
                m = n(53);
            /* harmony import */ function g(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    (e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r));
                }
                return n;
            }
            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? g(Object(n), !0).forEach(function (e) {
                              Object(r.a)(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : g(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            /**
             * 轉換字串為 screamingSnakeCase
             * @param {string} str - 字串
             */ function _(t) {
                return Object(f.c)(t).toLocaleUpperCase();
            }
            /**
             * 取得JWT內容
             * @param {string} _strToken - JWT Token
             */ function b(t) {
                if (w(t) > 0) {
                    var e = t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
                        n = decodeURIComponent(
                            atob(e)
                                .split("")
                                .map(function (t) {
                                    return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
                                })
                                .join(""),
                        );
                    return JSON.parse(n);
                }
                return null;
            }
            /**
             * 計算字串的長度
             * @param {string} _strValue - 輸入字串
             */ function w(t) {
                /**
                 * null or undefined 字串轉為 ''
                 * @param {string} _strValue - 輸入字串
                 */
                return (function (t) {
                    return null == t ? "" : t.toString();
                })(
                    /**
                     * 取得使用者當下的 subdomain
                     * @param {object} req - nuxt context req 物件
                     */ t,
                ).length;
            }
            /**
             * 替換正確的 api 網址，因廠商會使用不同的domain進來
             * 要依不同的 domain 去呼叫
             * @param {object} context - nuxt context
             * @param {string} originalApiUrl - 原本的設定檔 url
             */
            function O(t, e) {
                var n,
                    r,
                    o =
                        ((r = (n = location.hostname).indexOf(":")),
                        /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(n)
                            ? r > -1
                                ? n.substring(0, r)
                                : n
                            : r > -1
                              ? n.substring(n.indexOf(".") + 1, r)
                              : n.substring(n.indexOf(".") + 1)),
                    i = e;
                // 如果是 ip 就使用預設的 api url
                if (o && !/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(o)) {
                    var a = e.substring(0, e.indexOf("."));
                    i = "".concat(a, ".").concat(o);
                }
                // 如果是開發環境就使用預設的 api url
                return i;
            }
            /**
             * 判斷是否為後端api回傳的錯誤物件格式
             * @param {object} apiReturnObj - api 回傳的物件
             */ function C(t) {
                return "object" === Object(i.a)(t) && void 0 !== (null == t ? void 0 : t.Code) && 0 !== (null == t ? void 0 : t.Code);
            }
            /**
             * 取得不分大小寫的物件屬性
             * @param { object } obj 物件
             * @returns { object } 不分大小寫屬性的物件
             */ function S() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = {};
                return (
                    Object.entries(t).forEach(function (t) {
                        var n = Object(o.a)(t, 2),
                            r = n[0],
                            i = n[1];
                        e[r.toLowerCase()] = i;
                    }),
                    e
                );
            }
            /* harmony default export */ e.b = function (t, e) {
                var n = t.app,
                    r = t.store,
                    o = t.$config,
                    i = (t.req, t.query);
                /**
                 * 取得遊戲名稱
                 * @param {string, Number } gameIdOrNo 遊戲 id 或遊戲編號
                 * @param {string} lang 語系
                 * @returns
                 */
                /**
                 * 取得遊戲ID
                 * @param {int} gameNo - 遊戲編號
                 */
                function c(t) {
                    var e = r.state.gameSettings.find(function (e) {
                        return e.No === t;
                    });
                    return e ? e.Id : "";
                }
                /**
                 * 取得遊戲No
                 * @param {string} gameId - 遊戲ID
                 */ function d(t) {
                    var e = r.state.gameSettings.find(function (e) {
                        // 全大寫跟全小寫的gameId轉出來的字串不太相同，轉2次確保一致性
                        return Object(f.a)(Object(f.a)(e.Id)) === Object(f.a)(Object(f.a)(t));
                    });
                    return e ? e.No : "";
                }
                /**
                 * 格式化字串
                 * @param {string} format - 將含有 {0} {1} {2} 的字串帶入變數
                 */
                /**
                 * 取得數字逗號格式(數字加上每三位,號，小數點後只保留 exponent 位)
                 * @param {string} _strDigital - 傳入數字
                 * @param {string} exponent - 小數點位數
                 * @param {string} forceExponent - 是否強制顯示小數點後的數字
                 */
                function g(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o =
                            /**
                             * 根據語言設置確定小數點與千位分隔符號的適當符號。
                             *
                             * 對於特定語言（在changeLangList中指定），小數點和千位分隔符號
                             * 可以根據thousandThMode設置進行交換：
                             * - 模式0：對指定語言使用逗號作為小數點，句點作為千位分隔符
                             * - 模式1：使用標準格式（逗號為千位分隔符，句點為小數點）
                             * - 模式2：始終交換符號（句點為千位分隔符，逗號為小數點）
                             *
                             * @returns {Object} 包含確定符號的對象
                             * @returns {string} returns.commaSymbol - 用於千位分隔符的符號
                             * @returns {string} returns.pointSymbol - 用於小數點的符號
                             */
                            (function () {
                                var t = ",",
                                    e = ".";
                                // 千分位符號
                                // 專案新需求，特定語系時小數點與千分位要相反,
                                // 空字串:照目前設定的 changeLangList 語系,
                                // 'en-US':正常,
                                // 'vi-VN':相反
                                return (
                                    "" === r.getters.thousandThMode &&
                                        ["vi-VN", "es-AR", "pt-BR", "it-IT", "sv-SE", "de-DE", "da-DK", "ro-RO", "fr-FR", "gr-GR", "nl-NL", "tr-TR"].includes(
                                            r.getters.lang,
                                        ) &&
                                        ((t = "."), (e = ",")),
                                    "vi-VN" === r.getters.thousandThMode && ((t = "."), (e = ",")),
                                    { commaSymbol: t, pointSymbol: e }
                                );
                            })(),
                        i = o.commaSymbol,
                        a = o.pointSymbol;
                    isNaN(e) && (e = 2);
                    var c = "";
                    if (w(t) > 0) {
                        // 後端吐出來的小數點，不會因客製調整而改變
                        var s = null;
                        (((s = "string" == typeof t ? t.split(".") : t.toString().split("."))[0] = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, i)),
                            // 處理小數點，超過 exponent 位數刪掉，不足且 forceExponent 補 0
                            s.length > 1 && (s[1].length > e && (s[1] = s[1].substring(0, e)), s[1].length < e && n && (s[1] = s[1].padEnd(e, "0"))),
                            // 如果是整數且 forceExponent 要強制顯示小數點
                            1 === s.length && n && (s[1] = "0".repeat(e)),
                            (c = s.join(a)));
                    }
                    return c;
                }
                /**
                 * 日期時間格式化
                 * @param {string} originalTime - 傳入數字
                 * @returns {string} 格式化的日期時間
                 */ function O(t) {
                    if (t < 0) return "N/A";
                    if (null != t || "" === t) {
                        var e = n.$dayjs(t);
                        return "".concat(e.format("YYYY/MM/DD HH:mm:ss"), " (").concat(x(e), ")");
                    }
                    return "N/A";
                }
                /**
                 * 日期格式化
                 * @param {string} originalTime - 傳入數字
                 * @returns {string} 格式化的日期
                 */ function C(t) {
                    return t < 0 ? "N/A" : null != t || "" === t ? n.$dayjs(t).format("YYYY/MM/DD") : "N/A";
                }
                /**
                 * 時間格式化
                 * @param {string} originalTime - 傳入數字
                 * @returns {string} 格式化的時間
                 */
                /**
                 * 取得時區字串
                 * @param {dayjs} dayjs - dayjs 物件
                 * @param {Boolean} displayZero - 是否顯示 +0
                 * @returns {string} 時區字串 ex: GMT+7
                 */
                function x(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t.utcOffset();
                    return n > 0 ? "GMT+".concat(Math.abs(n / 60)) : n < 0 ? "GMT-".concat(Math.abs(n / 60)) : "GMT".concat(e ? "+0" : "");
                }
                /**
                 * 取得遊戲 icon 網址
                 * @param {number} gameId
                 * @param {number} iconType
                 * @param {string} lang
                 */
                /**
                 * 取得貨幣顯示
                 * @param {number} currencyNo 幣別編號
                 * @param {number} value 數值
                 * @param {number} customApiId 自訂apiid不使用vuex中的apiid
                 * @param {number} forceExponent 是否要強制指定顯示幾個小數位數
                 * @returns {string} 貨幣顯示字串
                 */
                function j(t, e, n, o, i) {
                    var a = "",
                        c = 1,
                        s = 2,
                        u = r.state.currencyDisplayList,
                        l = r.getters;
                    // 使用自訂的幣別符號
                    if (
                        // 讀 token 設定
                        ((s = l.exponent),
                        (c = l.unit),
                        (a = l.currencySymbol),
                        // 是否要強制指定顯示幾個小數位數
                        null != o && (s = o),
                        null != t && null != u && u.length > 0)
                    ) {
                        var f = u.find(function (e) {
                            return e.No === t;
                        });
                        f && ((a = null != f.Symbol ? f.Symbol + " " : ""), (c = f.Unit));
                    }
                    var d = "",
                        p = "";
                    // 阿拉伯符號要加 ‎ 避免變成 right to left
                    return (
                        e < 0 ? ((d = "-"), (p = ((e / c) * -1).toString())) : ((d = ""), (p = ((e / c) * 1).toString())),
                        i ? a + "‎" + d + I(p, s) : a + "‎" + d + g(p, s)
                    );
                }
                /**
                 * 取得貨幣顯示
                 * @param {number} value 數值
                 * @param {number} customApiId 自訂apiid不使用vuex中的apiid
                 * @param {number} forceExponent 是否要強制指定顯示幾個小數位數
                 * @returns {string} 貨幣顯示字串
                 */
                /**
                 * 取得魚種編號的涵意
                 * @param {string} fishNo 魚種編號
                 * @returns {object} 分析後的物件
                 */
                function k(t) {
                    var e = t + ""; // 序列號 (2 碼) 剩餘的號碼
                    return 7 === e.length
                        ? { type: e.substring(0, 1), gameId: e.substring(1, 4), starLevel: e.substring(4, 5), cardSerialNo: e.substring(5) }
                        : {};
                }
                /**
                 * 判斷魚機卡片是否為例外
                 * @param {array} fishCardExceptionList 例外gameId清單
                 * @param {string} gameId 遊戲編號
                 * @returns {boolean} true or false
                 */ function $(t, e) {
                    var n = !1;
                    try {
                        n = t.includes(e);
                    } catch (t) {
                        n = !1;
                    }
                    return n;
                }
                /**
                 * 取得魚機卡片圖片路徑
                 * @param {string} fishNo 魚種編號
                 * @param {string} lang 語系
                 * @returns {string} 圖片路徑
                 */
                /**
                 * 將數字加上KMBT 的轉換，1,000 -> 1k，1,000,000 -> 1m，1,000,000,000 -> 1b，1,000,000,000,000 -> 1t
                 * @param {string} number
                 * @param {number} tofixedNum 取到小數第幾位 default: 0
                 * @param {Object} enable 啟用狀態 default: { k: true, m: true, b: true, t: true }
                 * @returns 格式化後字串
                 */
                function I(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = p()(t),
                        o = "",
                        i = r.lt(0),
                        a = Object(v.a)(n, { k: !0, m: !0, b: !0, t: !0 });
                    return (
                        i && (r = r.abs()),
                        r.gte(1e12) && a.t
                            ? ((r = parseFloat(r.div(1e12).toFixed(e, 0))), (o = "T"))
                            : r.gte(1e9) && a.b
                              ? ((r = parseFloat(r.div(1e9).toFixed(e, 0))), (o = "B"))
                              : r.gte(1e6) && a.m
                                ? ((r = parseFloat(r.div(1e6).toFixed(e, 0))), (o = "M"))
                                : r.gte(1e3) && a.k && ((r = parseFloat(r.div(1e3).toFixed(e, 0))), (o = "K")),
                        i && (r *= -1),
                        g(r.toString(), e) + o
                    );
                }
                /**
                 * 將數字無條件捨去至小數點第二位
                 * @param {Number} number
                 * @param {Number} tofixedNum
                 * @returns 格式化後字串
                 */ function P(t, e, n) {
                    return e;
                }
                function E(t) {
                    var e = S(i),
                        n = e.custom;
                    // 廠商自定義樣式
                    if (null != Object(m.c)(t, n, m.a)) return "".concat(m.a, "-").concat(n);
                    // 節慶樣式
                    var o = e.festival;
                    if (null != Object(m.c)(t, o, m.b)) return "".concat(m.b, "-").concat(o);
                    // 舊規格樣式
                    var a = e.symbolstyle || e.style || r.state.style.default;
                    if (a) {
                        var c = parseInt(a, 10),
                            s = c >= 100 ? m.a : m.b,
                            u = s === m.a ? (c / 100).toString() : a;
                        if (null != Object(m.c)(t, u, s)) return "".concat(s, "-").concat(u);
                    }
                    return "";
                }
                (a.default.filter("commaFormat", function (t) {
                    return g(t);
                }),
                    /*
                     * 時間 Format
                     */
                    a.default.filter("timeFormat", function (t) {
                        return O(t);
                    }),
                    /*
                     * 日期字串只取前10碼(yyyy-MM-dd)
                     */
                    a.default.filter("date", function (t) {
                        return C(t);
                    }),
                    /*
                     * 日期字串取前19碼(yyyy-MM-dd HH:mm:ss)
                     */
                    a.default.filter("datetime", function (t) {
                        return O(t);
                    }));
                var T = {
                    safeLen: w,
                    parseJWT: b,
                    getGameName: function (t, e) {
                        var o = /^\d+$/.test(t) ? c(t) : t,
                            i = d(o);
                        if (w(o) > 0) {
                            var a = "",
                                s = "";
                            // plinko || cockfight 在泰版及 tada 有不同遊戲名稱，需特殊處理
                            ("plinko" !== o.toLowerCase() && "cockfight" !== o.toLowerCase()) ||
                                ("tada" !== r.state.gameIconBrandFilename && 3 !== r.getters.apiId) ||
                                (a = "_tada");
                            var u = E(i);
                            return (
                                "" !== u && (s = "_" + _(u)),
                                n.i18n.te("i18_Game".concat(_(o.toUpperCase())).concat(a).concat(s), "en-US")
                                    ? e
                                        ? n.i18n.t("i18_Game".concat(_(o.toUpperCase())).concat(a).concat(s), e)
                                        : n.i18n.t("i18_Game".concat(_(o.toUpperCase())).concat(a).concat(s))
                                    : e
                                      ? n.i18n.t("i18_Game".concat(_(o.toUpperCase())).concat(a), e)
                                      : n.i18n.t("i18_Game".concat(_(o.toUpperCase())).concat(a))
                            );
                        }
                        return "";
                    },
                    getGameId: c,
                    getGameNo: d,
                    stringFormat: function (t) {
                        var e = Array.prototype.slice.call(arguments, 1);
                        return t.replace(/{(\d+)}/g, function (t, n) {
                            return void 0 !== e[n] ? e[n] : t;
                        });
                    },
                    formatComma: g,
                    formatDateTime: O,
                    formatDate: C,
                    formatTime: function (t) {
                        return t < 0 ? "N/A" : null != t || "" === t ? n.$dayjs(t).format("HH:mm:ss") : "N/A";
                    },
                    getTimeZoneString: x,
                    getGameIconUrl: function (t, e, n) {
                        var o = e || 3,
                            i = "en-US",
                            a = new Map(),
                            c = "",
                            s = Object(f.a)(t);
                        return (
                            a.set("tx", ["zh-CN", "zh-TW", "vi-VN"]),
                            a.set("lj", ["zh-CN", "zh-TW", "pt-BR"]),
                            a.set("lj2", ["zh-CN", "zh-TW", "pt-BR"]),
                            a.set("lt", ["zh-CN", "zh-TW", "pt-BR"]),
                            a.set("lm", ["zh-CN", "zh-TW", "pt-BR"]),
                            a.set("col", ["zh-CN", "zh-TW", "es-AR"]),
                            a.set("clb", ["zh-CN", "zh-TW", "pt-BR", "tr-TR"]),
                            (a.get(s) || ["zh-CN", "zh-TW"]).includes(n) && (i = n),
                            // 處理品牌要顯示什麼
                            "plinko" === s && (("tada" !== r.state.gameIconBrandFilename && 3 !== r.getters.apiId) || (c = "_tada")),
                            "/images/gamehistory/".concat(s, "/icon").concat(o, "/icon_").concat(i).concat(c, ".png")
                        );
                    },
                    /**
                     * 取得遊戲 icon 網址
                     * @param {number} gameId
                     * @param {number} iconType
                     * @param {string} lang
                     * @param {string} style
                     */ getGameIconUrlBySymbolStyle:
                        /**
                         * 取得遊戲 icon 網址
                         * @param {number} gameId
                         * @param {number} symbolStyle
                         * @param {string} lang
                         */
                        function (t, e, n, o) {
                            var i = e || 3,
                                a = "en-US",
                                c = new Map(),
                                s = "",
                                u = Object(f.a)(t);
                            return (
                                c.set("tx", ["zh-CN", "zh-TW", "vi-VN"]),
                                c.set("lj", ["zh-CN", "zh-TW", "pt-BR"]),
                                c.set("lj2", ["zh-CN", "zh-TW", "pt-BR"]),
                                c.set("lt", ["zh-CN", "zh-TW", "pt-BR"]),
                                c.set("lm", ["zh-CN", "zh-TW", "pt-BR"]),
                                c.set("col", ["zh-CN", "zh-TW", "es-AR"]),
                                c.set("clb", ["zh-CN", "zh-TW", "pt-BR", "tr-TR"]),
                                (c.get(u) || ["zh-CN", "zh-TW"]).includes(n) && (a = n),
                                // 處理品牌要顯示什麼
                                "plinko" === u && (("tada" !== r.state.gameIconBrandFilename && 3 !== r.getters.apiId) || (s = "_tada")),
                                "/images/gamehistory/".concat(u, "/symbol-style-").concat(o, "/icon").concat(i, "/icon_").concat(a).concat(s, ".png")
                            );
                        },
                    /**
                     * 取得css變數或設定css變數
                     * @param {string} name
                     * @param {string} value
                     */ getGameIconUrlByStyle: function (t, e, n, o) {
                        var i = e || 3,
                            a = "en-US",
                            c = new Map(),
                            s = "",
                            u = Object(f.a)(t);
                        return (
                            c.set("tx", ["zh-CN", "zh-TW", "vi-VN"]),
                            c.set("lj", ["zh-CN", "zh-TW", "pt-BR"]),
                            c.set("lj2", ["zh-CN", "zh-TW", "pt-BR"]),
                            c.set("lt", ["zh-CN", "zh-TW", "pt-BR"]),
                            c.set("lm", ["zh-CN", "zh-TW", "pt-BR"]),
                            c.set("col", ["zh-CN", "zh-TW", "es-AR"]),
                            c.set("clb", ["zh-CN", "zh-TW", "pt-BR", "tr-TR"]),
                            (c.get(u) || ["zh-CN", "zh-TW"]).includes(n) && (a = n),
                            // 處理品牌要顯示什麼
                            "plinko" === u && (("tada" !== r.state.gameIconBrandFilename && 3 !== r.getters.apiId) || (s = "_tada")),
                            "/images/gamehistory/".concat(u, "/style-").concat(o, "/icon").concat(i, "/icon_").concat(a).concat(s, ".png")
                        );
                    },
                    getCurrencyDisplay: j,
                    getJwtCurrencyDisplay: function (t, e, n, r) {
                        return j(null, t, 0, n, r);
                    },
                    /* 取得押注倍率貨幣顯示 (將數值乘以押注倍率)
                     * @param {number} currencyNo 幣別編號
                     * @param {number} value 數值
                     * @returns {number}} 乘以押注倍率後的數值
                     */ getCurrencyRatioDisplay: function (t, e) {
                        var n = r.state.currencyDisplayList,
                            o = r.getters.ratio,
                            i = e;
                        if (null != n && n.length > 0) {
                            var a = n.find(function (e) {
                                return e.No === t;
                            });
                            if ((a && (o = a.Ratio), o > 0)) {
                                // 避免相乘時浮點數精確度問題，先乘以 10 的 n 次方避免結果為小數再除回來
                                var c = Math.pow(10, 4);
                                i = (e * (o * c)) / c;
                            }
                            return i;
                        }
                    },
                    /**
                     * 取得特殊獎項圖片路徑
                     * @param {string} type 獎項類型
                     * @param {string} lang 語系
                     * @returns {string} true or false
                     */ cssVar: function (t, e) {
                        return (
                            "-" !== t[0] && (t = "--" + t), // allow passing with or without --
                            (e || null === e) && document.documentElement.style.setProperty(t, e),
                            getComputedStyle(document.documentElement).getPropertyValue(t)
                        );
                    },
                    isEmpty:
                        /**
                         * 是否為空物件
                         * @param {object} obj 物件
                         * @returns {boolean} true or false
                         */
                        function (t) {
                            return t && 0 === Object.keys(t).length && t.constructor === Object;
                        },
                    /**
                     * 快速設定物件
                     * @param {object} obj 物件
                     * @param {string | array} path 路徑
                     * @param {any} val 數值
                     * @returns {object} 新物件
                     */ merge: s.a,
                    mergeWithOverwriteArray: Object.assign(
                        function (t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return s()(t, e, y({ arrayMerge: P }, n));
                        },
                        s.a,
                        {
                            all: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return s.a.all(t, y({ arrayMerge: P }, e));
                            },
                        },
                    ),
                    klona: l.a,
                    deepset: function (t, e, n) {
                        var r = Object(l.a)(t);
                        return (Object(u.a)(r, e, n), r);
                    },
                    getPrizeTypeImagePath: function (t, e, n) {
                        // 相容舊規格
                        if (null == t) return "";
                        var r = "zh-TW" === e || "zh-CN" === e ? e : "en-US",
                            o = "/images/prize/",
                            i = "";
                        i = 691 === n ? "Card_Rich" : n >= 1e4 || 1002 === n ? "Card_TaDa" : "Card_Jili";
                        // 改寫設定，太多種類條件
                        var a = {
                                ItemCard: "".concat(o).concat(i, ".png"),
                                SpecialPrize: "".concat(o, "SpecialPrize.png"),
                                SpecialPrizeNoDetail: "".concat(o, "SpecialPrize.png"),
                                Buy: "".concat(o, "Buy.png"),
                                MiniJackpot: "".concat(o, "jp/").concat(r, "/mini_jackpot.png"),
                                MajorJackpot: "".concat(o, "jp/").concat(r, "/major_jackpot.png"),
                                GrandJackpot: "".concat(o, "jp/").concat(r, "/grand_jackpot.png"),
                                MiniJackpot4jp: "".concat(o, "4jp/").concat(r, "/mini_jackpot.png"),
                                MinorJackpot4jp: "".concat(o, "4jp/").concat(r, "/minor_jackpot.png"),
                                MajorJackpot4jp: "".concat(o, "4jp/").concat(r, "/major_jackpot.png"),
                                GrandJackpot4jp: "".concat(o, "4jp/").concat(r, "/grand_jackpot.png"),
                                JackpotLegendMiniJackpot: "".concat(o, "/jpl/mini_jackpot.png"),
                                JackpotLegendMinorJackpot: "".concat(o, "/jpl/minor_jackpot.png"),
                                JackpotLegendMajorJackpot: "".concat(o, "/jpl/major_jackpot.png"),
                                JackpotLegendGrandJackpot: "".concat(o, "/jpl/grand_jackpot.png"),
                                ExtraBet: "".concat(o, "extrabet.png"),
                                ExtraBuy: "".concat(o, "extrabuy.png"),
                                ExtraFreeGame: "".concat(o, "extrafreegame.png"),
                                MustHitBy: "".concat(o, "MustHitBy.png"),
                                FreeSpin: "".concat(o, "freespin.png"),
                                FreeSpinFreeGame: "".concat(o, "freespinfreegame.png"),
                                Trial: "".concat(o, "trial.png"),
                                TrialEnd: "".concat(o, "trial.png"),
                                TrialFreeGame: "".concat(o, "trialfreegame.png"),
                                SpinBonus: "".concat(o, "spinbonus.png"),
                                SpinBonus2: "".concat(o, "spinbonus2.png"),
                                HotHand: "".concat(o, "hothand.png"),
                                "": "",
                            },
                            c = a[t];
                        // 相容舊規格, 如果上述規則都找不到套用 SpecialPrize
                        return (null == a[t] && (c = "".concat(o, "SpecialPrize.png")), c);
                    },
                    /**
                     * 取得魚機特殊獎項圖片路徑
                     * @param {string} type 獎項類型
                     * @param {string} lang 語系
                     * @param {string} gameId 遊戲類型，保留參數，for瘋狂砲手類的例外未來使用
                     * @returns {string} true or false
                     */ getFreeSpinImagePath: function (t, e, n) {
                        // 相容舊規格
                        if (null == t) return "";
                        // 暫時沒有英文以外的語系
                        // const iconLang = lang === 'zh-CN' ? lang : 'en-US'
                        var r = "/images/prize/fish/",
                            o = "";
                        o = 691 === n ? "Card_Rich" : n >= 1e4 || 1002 === n ? "Card_TaDa" : "Card_Jili";
                        // 改寫設定，太多種類條件
                        var i = {
                            FreeSpin: "".concat(r, "/en-US/FreeSpin.png"),
                            BonusPig: "".concat(r, "BonusPig.png"),
                            SpinBonus: "".concat(r, "BonusSpin.png"),
                            ItemCard: "".concat("/images/prize/").concat(o, ".png"),
                            Buy: "".concat(r, "Buy.png"),
                            ExtraBet: "".concat(r, "extrabet.png"),
                            "": "",
                        }[t];
                        return (null == i && (i = ""), i);
                    },
                    parseFishNo: k,
                    isFishCardException: $,
                    getFishCardImagePath: function (t, e, n) {
                        var r,
                            o,
                            i,
                            a,
                            c,
                            s = "",
                            u = k(t),
                            l = u.type,
                            f = u.gameId,
                            d = u.starLevel,
                            p = u.cardSerialNo,
                            v = Object(h.a)();
                        // size === 'small' 小圖示歷程也已經不使用了，之後可以拿掉小圖的處理
                        // 小圖顯示簡中、英文，大圖顯示繁中、簡中、英文
                        return (
                            (s = "small" === n ? (["zh-TW", "zh-CN"].includes(e) ? "zh-CN" : "en-US") : ["zh-TW", "zh-CN", "en-US"].includes(e) ? e : "en-US"),
                            // 卡片名稱，預設以 fishNo 做為名稱，符合特殊規則再加上額外處理
                            (r = t + ""),
                            // 留存炮
                            "1" === l &&
                                ("small" === n
                                    ? ((a = !0), (c = !0), "8" === d && (o = !0))
                                    : // 大圖示改為依不同星等顯示不同圖示
                                      ((a = !1), (c = !0), (o = !1)),
                                $(v, f) && ((a = !1), (c = !1))),
                            // 鳳凰 & 新年禮包
                            "2" === l && ((i = !0), (a = !0)),
                            // 雪怪(042 & 212)
                            "2" === l && ["042", "212"].includes(f) && "01" === p && (i = !1),
                            // 冰凍卡
                            "3" === l && ((i = !0), (a = !0)),
                            // 獎金卡
                            "4" === l && ((i = !0), (a = !0), $(v, f) && (i = !1)),
                            // 免費子彈
                            "5" === l && ((i = !0), (a = !1), (c = !0)),
                            // 免費激光炮
                            "6" === l && ((i = !0), (a = !1), (c = !0)),
                            // 三種顏色的鑽頭
                            "7" === l && ["01", "02", "03"].includes(p) && (i = !0),
                            (r =
                                // 依上述規則重新排列卡片名稱
                                (r = o ? "G_" : "") + l + (i ? "000" : f)),
                            (r += a ? "1" : d),
                            (r += c ? "01" : p),
                            "/images/fishcard"
                                .concat(n ? "/" + n : "", "/")
                                .concat(s, "/")
                                .concat(r, ".png")
                        );
                    },
                    /**
                     * 取得魚機卡片名稱
                     * @param {string} fishNo 魚種編號
                     * @param {string} lang 語系
                     * @returns {string} 卡片名稱
                     */ getFishCardNameId: function (t, e) {
                        var n,
                            r,
                            o,
                            i = t,
                            a = k(t),
                            c = a.type,
                            s = a.gameId,
                            u = a.starLevel,
                            l = a.cardSerialNo,
                            f = Object(h.a)();
                        // 一般遊戲卡
                        return (
                            "1" === c && ((o = !0), $(f, s) && (o = !1)),
                            // 新年禮包
                            "2" === c && ((n = !0), (r = "1")),
                            // 雪怪(042 & 212)
                            "2" === c && ["042", "212"].includes(s) && "01" === l && (n = !1),
                            // 冰凍卡
                            "3" === c && (n = !0),
                            // 獎金卡
                            "4" === c && ((n = !0), $(f, s) && (n = !1)),
                            // 免費子彈
                            "5" === c && ((n = !0), (o = !0), u > "4" && (r = "8")),
                            // 免費激光炮
                            "6" === c && ((n = !0), (o = !0), u > "4" && (r = "8")),
                            // 三種顏色的鑽頭
                            "7" === c && ["01", "02", "03"].includes(l) && (n = !0),
                            (i = c + (n ? "000" : s)),
                            (i += r || u),
                            "i18_FishingCardName_" + (i += o ? "01" : l)
                        );
                    },
                    /**
                     * 取得魚機卡片描述
                     * @param {string} fishNo 魚種編號
                     * @param {string} lang 語系
                     * @returns {string} 卡片描述
                     */ getFishCardDescId: function (t, e) {
                        var n,
                            r,
                            o,
                            i = t,
                            a = k(t),
                            c = a.type,
                            s = a.gameId,
                            u = a.starLevel,
                            l = a.cardSerialNo,
                            f = Object(h.a)();
                        // 一般遊戲卡
                        return (
                            "1" === c && ((r = !0), (o = !0)),
                            // 新年禮包
                            "2" === c && ((n = !0), (r = !0)),
                            // 雪怪(042 & 212)
                            "2" === c && ["042", "212"].includes(s) && "01" === l && (n = !1),
                            // 冰凍卡
                            "3" === c && (n = !0),
                            // 獎金卡
                            "4" === c && ((n = !0), $(f, s) && (n = !1)),
                            // 免費子彈
                            "5" === c && ((n = !0), (r = !0), (o = !0)),
                            // 免費激光炮
                            "6" === c && ((n = !0), (r = !0), (o = !0)),
                            // 三種顏色的鑽頭
                            "7" === c && ["01", "02", "03"].includes(l) && ((n = !0), (r = !0), (o = !0)),
                            (i = c + (n ? "000" : s)),
                            (i += r ? "1" : u),
                            "i18_FishingCardDesc_" + (i += o ? "01" : l)
                        );
                    },
                    imageUrl: function (t) {
                        return t + "?" + o.TIMESTAMP;
                    },
                    getGameUrl: function () {
                        var t = "";
                        // 如果有帶 query posthost 的話就使用它
                        if (r.state.control.postMessageHost) return (t = `${window.location.protocol}//` + r.state.control.postMessageHost);
                        // GLI 遊戲網址與其他版本不同，設定在環境變數中
                        if (o.GAME_URL) t = o.GAME_URL;
                        else {
                            var e = location.hostname;
                            // 印度 webapp 特規
                            t =
                                "webapp" === r.state.device && "IN" === r.state.webId
                                    ? `${window.location.protocol}//` + e.replace("history.", "www.")
                                    : `${window.location.protocol}//` + e.replace("www.", "wbgame.").replace("history.", "wbgame.");
                        }
                        return t;
                    },
                    /**
                     * 將 BonusArray 數字加上 k 或 m 的轉換，1,000,000 -> 1m，1,000 -> 1k
                     * @param {string} number
                     * @returns 格式化後字串
                     */ screamingSnakeCase: _,
                    formatNumberKM: function (t) {
                        var e = p()(t),
                            n = "";
                        return (e.gte(1e6) ? ((e = e.div(1e6)), (n = "m")) : e.gte(1e3) && ((e = e.div(1e3)), (n = "k")), g(e.toString()) + n);
                    },
                    formatNumberKMBT: I,
                    getCaseInsensitiveProperty: S,
                    getItemCardi18nId:
                        /**
                         * Get ItemCard i18n id.
                         * @param {number} apiId
                         * @returns i18n id
                         */
                        function (t) {
                            return 691 === t ? "i18_ItemCard_Rich" : t >= 1e4 || 1002 === t ? "i18_ItemCard_TaDa" : "i18_ItemCard_Jili";
                        },
                    getFixTo2Number: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            n = t;
                        return (n = "".concat(
                            p()(n || 0)
                                .round(e, 0)
                                .toFixed(e)
                                .toString(),
                        ));
                    },
                    getStyleName: E,
                };
                e("utils", T);
            };
        },
        /***/ 680: /***/ function (t, e) {
            /* WEBPACK VAR INJECTION */ (function (e) {
                /* globals __webpack_amd_options__ */
                t.exports = e;
                /* WEBPACK VAR INJECTION */
            }).call(this, {});
            /***/
        },
        /***/ 684: /***/ function (t, e, n) {
            var r = {
                "./af-ZA": [423, 1, 0, 2],
                "./af-ZA.js": [423, 1, 0, 2],
                "./ar": [424, 1, 0, 2],
                "./ar.js": [424, 1, 0, 2],
                "./bg": [425, 1, 0, 2],
                "./bg.js": [425, 1, 0, 2],
                "./ca": [426, 1, 0, 2],
                "./ca.js": [426, 1, 0, 2],
                "./cs-CZ": [427, 1, 0, 2],
                "./cs-CZ.js": [427, 1, 0, 2],
                "./da": [428, 1, 0, 2],
                "./da.js": [428, 1, 0, 2],
                "./de": [429, 1, 0, 2],
                "./de.js": [429, 1, 0, 2],
                "./ee": [430, 1, 0, 2],
                "./ee.js": [430, 1, 0, 2],
                "./el": [431, 1, 0, 2],
                "./el.js": [431, 1, 0, 2],
                "./en": [432, 1, 0, 2],
                "./en.js": [432, 1, 0, 2],
                "./eo": [433, 1, 0, 2],
                "./eo.js": [433, 1, 0, 2],
                "./es": [434, 1, 0, 2],
                "./es.js": [434, 1, 0, 2],
                "./eu": [435, 1, 0, 2],
                "./eu.js": [435, 1, 0, 2],
                "./fa": [436, 1, 0, 2],
                "./fa.js": [436, 1, 0, 2],
                "./fi": [437, 1, 0, 2],
                "./fi.js": [437, 1, 0, 2],
                "./fr": [438, 1, 0, 2],
                "./fr.js": [438, 1, 0, 2],
                "./he": [439, 1, 0, 2],
                "./he.js": [439, 1, 0, 2],
                "./hr": [440, 1, 0, 2],
                "./hr.js": [440, 1, 0, 2],
                "./hu": [441, 1, 0, 2],
                "./hu.js": [441, 1, 0, 2],
                "./hy-AM": [442, 1, 0, 2],
                "./hy-AM.js": [442, 1, 0, 2],
                "./id": [443, 1, 0, 2],
                "./id.js": [443, 1, 0, 2],
                "./it": [444, 1, 0, 2],
                "./it.js": [444, 1, 0, 2],
                "./ja": [445, 1, 0, 2],
                "./ja.js": [445, 1, 0, 2],
                "./kg": [446, 1, 0, 2],
                "./kg.js": [446, 1, 0, 2],
                "./km": [447, 1, 0, 2],
                "./km.js": [447, 1, 0, 2],
                "./ko": [448, 1, 0, 2],
                "./ko.js": [448, 1, 0, 2],
                "./ku": [449, 1, 0, 2],
                "./ku.js": [449, 1, 0, 2],
                "./kz": [450, 1, 0, 2],
                "./kz.js": [450, 1, 0, 2],
                "./lt": [451, 1, 0, 2],
                "./lt.js": [451, 1, 0, 2],
                "./lv": [452, 1, 0, 2],
                "./lv.js": [452, 1, 0, 2],
                "./mn": [453, 1, 0, 2],
                "./mn.js": [453, 1, 0, 2],
                "./nb-NO": [454, 1, 0, 2],
                "./nb-NO.js": [454, 1, 0, 2],
                "./nl": [455, 1, 0, 2],
                "./nl.js": [455, 1, 0, 2],
                "./pl": [456, 1, 0, 2],
                "./pl.js": [456, 1, 0, 2],
                "./pt": [458, 1, 0, 2],
                "./pt-br": [457, 1, 0, 2],
                "./pt-br.js": [457, 1, 0, 2],
                "./pt.js": [458, 1, 0, 2],
                "./ro": [459, 1, 0, 2],
                "./ro.js": [459, 1, 0, 2],
                "./ru-RU": [460, 1, 0, 2],
                "./ru-RU.js": [460, 1, 0, 2],
                "./sk": [461, 1, 0, 2],
                "./sk.js": [461, 1, 0, 2],
                "./sl": [462, 1, 0, 2],
                "./sl.js": [462, 1, 0, 2],
                "./sr": [463, 1, 0, 2],
                "./sr.js": [463, 1, 0, 2],
                "./sv-SE": [464, 1, 0, 2],
                "./sv-SE.js": [464, 1, 0, 2],
                "./ta": [465, 1, 0, 2],
                "./ta.js": [465, 1, 0, 2],
                "./th": [466, 1, 0, 2],
                "./th.js": [466, 1, 0, 2],
                "./tk": [467, 1, 0, 2],
                "./tk.js": [467, 1, 0, 2],
                "./tr-TR": [468, 1, 0, 2],
                "./tr-TR.js": [468, 1, 0, 2],
                "./ua": [469, 1, 0, 2],
                "./ua.js": [469, 1, 0, 2],
                "./ug-CN": [470, 1, 0, 2],
                "./ug-CN.js": [470, 1, 0, 2],
                "./uz-UZ": [471, 1, 0, 2],
                "./uz-UZ.js": [471, 1, 0, 2],
                "./vi": [472, 1, 0, 2],
                "./vi.js": [472, 1, 0, 2],
                "./zh-CN": [217],
                "./zh-CN.js": [217],
                "./zh-TW": [473, 1, 0, 2],
                "./zh-TW.js": [473, 1, 0, 2],
            };
            function o(t) {
                if (!n.o(r, t))
                    return Promise.resolve().then(function () {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw ((e.code = "MODULE_NOT_FOUND"), e);
                    });
                var e = r[t],
                    o = e[0];
                return Promise.all(e.slice(1).map(n.e)).then(function () {
                    return n.t(o, 7);
                });
            }
            ((o.keys = function () {
                return Object.keys(r);
            }),
                (o.id = 684),
                (t.exports = o));
        },
    },
]);
