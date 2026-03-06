(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const u of r)
      if (u.type === "childList")
        for (const d of u.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(r) {
    const u = {};
    return (
      r.integrity && (u.integrity = r.integrity),
      r.referrerPolicy && (u.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const u = l(r);
    fetch(r.href, u);
  }
})();
function wy(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Gu = { exports: {} },
  ds = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p;
function W0() {
  if ($p) return ds;
  $p = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function l(s, r, u) {
    var d = null;
    if (
      (u !== void 0 && (d = "" + u),
      r.key !== void 0 && (d = "" + r.key),
      "key" in r)
    ) {
      u = {};
      for (var h in r) h !== "key" && (u[h] = r[h]);
    } else u = r;
    return (
      (r = u.ref),
      { $$typeof: a, type: s, key: d, ref: r !== void 0 ? r : null, props: u }
    );
  }
  return ((ds.Fragment = i), (ds.jsx = l), (ds.jsxs = l), ds);
}
var Wp;
function e2() {
  return (Wp || ((Wp = 1), (Gu.exports = W0())), Gu.exports);
}
var m = e2(),
  Xu = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eg;
function t2() {
  if (eg) return ne;
  eg = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    w = Symbol.iterator;
  function z(_) {
    return _ === null || typeof _ != "object"
      ? null
      : ((_ = (w && _[w]) || _["@@iterator"]),
        typeof _ == "function" ? _ : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    E = {};
  function A(_, V, F) {
    ((this.props = _),
      (this.context = V),
      (this.refs = E),
      (this.updater = F || T));
  }
  ((A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (_, V) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, _, V, "setState");
    }),
    (A.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    }));
  function q() {}
  q.prototype = A.prototype;
  function Y(_, V, F) {
    ((this.props = _),
      (this.context = V),
      (this.refs = E),
      (this.updater = F || T));
  }
  var G = (Y.prototype = new q());
  ((G.constructor = Y), M(G, A.prototype), (G.isPureReactComponent = !0));
  var Z = Array.isArray;
  function te() {}
  var J = { H: null, A: null, T: null, S: null },
    he = Object.prototype.hasOwnProperty;
  function Oe(_, V, F) {
    var K = F.ref;
    return {
      $$typeof: a,
      type: _,
      key: V,
      ref: K !== void 0 ? K : null,
      props: F,
    };
  }
  function ke(_, V) {
    return Oe(_.type, V, _.props);
  }
  function We(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === a;
  }
  function Le(_) {
    var V = { "=": "=0", ":": "=2" };
    return (
      "$" +
      _.replace(/[=:]/g, function (F) {
        return V[F];
      })
    );
  }
  var ge = /\/+/g;
  function Qe(_, V) {
    return typeof _ == "object" && _ !== null && _.key != null
      ? Le("" + _.key)
      : V.toString(36);
  }
  function Fe(_) {
    switch (_.status) {
      case "fulfilled":
        return _.value;
      case "rejected":
        throw _.reason;
      default:
        switch (
          (typeof _.status == "string"
            ? _.then(te, te)
            : ((_.status = "pending"),
              _.then(
                function (V) {
                  _.status === "pending" &&
                    ((_.status = "fulfilled"), (_.value = V));
                },
                function (V) {
                  _.status === "pending" &&
                    ((_.status = "rejected"), (_.reason = V));
                },
              )),
          _.status)
        ) {
          case "fulfilled":
            return _.value;
          case "rejected":
            throw _.reason;
        }
    }
    throw _;
  }
  function U(_, V, F, K, ae) {
    var oe = typeof _;
    (oe === "undefined" || oe === "boolean") && (_ = null);
    var we = !1;
    if (_ === null) we = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case a:
            case i:
              we = !0;
              break;
            case x:
              return ((we = _._init), U(we(_._payload), V, F, K, ae));
          }
      }
    if (we)
      return (
        (ae = ae(_)),
        (we = K === "" ? "." + Qe(_, 0) : K),
        Z(ae)
          ? ((F = ""),
            we != null && (F = we.replace(ge, "$&/") + "/"),
            U(ae, V, F, "", function (bl) {
              return bl;
            }))
          : ae != null &&
            (We(ae) &&
              (ae = ke(
                ae,
                F +
                  (ae.key == null || (_ && _.key === ae.key)
                    ? ""
                    : ("" + ae.key).replace(ge, "$&/") + "/") +
                  we,
              )),
            V.push(ae)),
        1
      );
    we = 0;
    var bt = K === "" ? "." : K + ":";
    if (Z(_))
      for (var Ve = 0; Ve < _.length; Ve++)
        ((K = _[Ve]), (oe = bt + Qe(K, Ve)), (we += U(K, V, F, oe, ae)));
    else if (((Ve = z(_)), typeof Ve == "function"))
      for (_ = Ve.call(_), Ve = 0; !(K = _.next()).done; )
        ((K = K.value), (oe = bt + Qe(K, Ve++)), (we += U(K, V, F, oe, ae)));
    else if (oe === "object") {
      if (typeof _.then == "function") return U(Fe(_), V, F, K, ae);
      throw (
        (V = String(_)),
        Error(
          "Objects are not valid as a React child (found: " +
            (V === "[object Object]"
              ? "object with keys {" + Object.keys(_).join(", ") + "}"
              : V) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return we;
  }
  function Q(_, V, F) {
    if (_ == null) return _;
    var K = [],
      ae = 0;
    return (
      U(_, K, "", "", function (oe) {
        return V.call(F, oe, ae++);
      }),
      K
    );
  }
  function ie(_) {
    if (_._status === -1) {
      var V = _._result;
      ((V = V()),
        V.then(
          function (F) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 1), (_._result = F));
          },
          function (F) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 2), (_._result = F));
          },
        ),
        _._status === -1 && ((_._status = 0), (_._result = V)));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ce =
      typeof reportError == "function"
        ? reportError
        : function (_) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var V = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof _ == "object" &&
                  _ !== null &&
                  typeof _.message == "string"
                    ? String(_.message)
                    : String(_),
                error: _,
              });
              if (!window.dispatchEvent(V)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", _);
              return;
            }
            console.error(_);
          },
    Me = {
      map: Q,
      forEach: function (_, V, F) {
        Q(
          _,
          function () {
            V.apply(this, arguments);
          },
          F,
        );
      },
      count: function (_) {
        var V = 0;
        return (
          Q(_, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (_) {
        return (
          Q(_, function (V) {
            return V;
          }) || []
        );
      },
      only: function (_) {
        if (!We(_))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return _;
      },
    };
  return (
    (ne.Activity = b),
    (ne.Children = Me),
    (ne.Component = A),
    (ne.Fragment = l),
    (ne.Profiler = r),
    (ne.PureComponent = Y),
    (ne.StrictMode = s),
    (ne.Suspense = p),
    (ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
    (ne.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (_) {
        return J.H.useMemoCache(_);
      },
    }),
    (ne.cache = function (_) {
      return function () {
        return _.apply(null, arguments);
      };
    }),
    (ne.cacheSignal = function () {
      return null;
    }),
    (ne.cloneElement = function (_, V, F) {
      if (_ == null)
        throw Error(
          "The argument must be a React element, but you passed " + _ + ".",
        );
      var K = M({}, _.props),
        ae = _.key;
      if (V != null)
        for (oe in (V.key !== void 0 && (ae = "" + V.key), V))
          !he.call(V, oe) ||
            oe === "key" ||
            oe === "__self" ||
            oe === "__source" ||
            (oe === "ref" && V.ref === void 0) ||
            (K[oe] = V[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) K.children = F;
      else if (1 < oe) {
        for (var we = Array(oe), bt = 0; bt < oe; bt++)
          we[bt] = arguments[bt + 2];
        K.children = we;
      }
      return Oe(_.type, ae, K);
    }),
    (ne.createContext = function (_) {
      return (
        (_ = {
          $$typeof: d,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (_.Provider = _),
        (_.Consumer = { $$typeof: u, _context: _ }),
        _
      );
    }),
    (ne.createElement = function (_, V, F) {
      var K,
        ae = {},
        oe = null;
      if (V != null)
        for (K in (V.key !== void 0 && (oe = "" + V.key), V))
          he.call(V, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (ae[K] = V[K]);
      var we = arguments.length - 2;
      if (we === 1) ae.children = F;
      else if (1 < we) {
        for (var bt = Array(we), Ve = 0; Ve < we; Ve++)
          bt[Ve] = arguments[Ve + 2];
        ae.children = bt;
      }
      if (_ && _.defaultProps)
        for (K in ((we = _.defaultProps), we))
          ae[K] === void 0 && (ae[K] = we[K]);
      return Oe(_, oe, ae);
    }),
    (ne.createRef = function () {
      return { current: null };
    }),
    (ne.forwardRef = function (_) {
      return { $$typeof: h, render: _ };
    }),
    (ne.isValidElement = We),
    (ne.lazy = function (_) {
      return { $$typeof: x, _payload: { _status: -1, _result: _ }, _init: ie };
    }),
    (ne.memo = function (_, V) {
      return { $$typeof: y, type: _, compare: V === void 0 ? null : V };
    }),
    (ne.startTransition = function (_) {
      var V = J.T,
        F = {};
      J.T = F;
      try {
        var K = _(),
          ae = J.S;
        (ae !== null && ae(F, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(te, Ce));
      } catch (oe) {
        Ce(oe);
      } finally {
        (V !== null && F.types !== null && (V.types = F.types), (J.T = V));
      }
    }),
    (ne.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    }),
    (ne.use = function (_) {
      return J.H.use(_);
    }),
    (ne.useActionState = function (_, V, F) {
      return J.H.useActionState(_, V, F);
    }),
    (ne.useCallback = function (_, V) {
      return J.H.useCallback(_, V);
    }),
    (ne.useContext = function (_) {
      return J.H.useContext(_);
    }),
    (ne.useDebugValue = function () {}),
    (ne.useDeferredValue = function (_, V) {
      return J.H.useDeferredValue(_, V);
    }),
    (ne.useEffect = function (_, V) {
      return J.H.useEffect(_, V);
    }),
    (ne.useEffectEvent = function (_) {
      return J.H.useEffectEvent(_);
    }),
    (ne.useId = function () {
      return J.H.useId();
    }),
    (ne.useImperativeHandle = function (_, V, F) {
      return J.H.useImperativeHandle(_, V, F);
    }),
    (ne.useInsertionEffect = function (_, V) {
      return J.H.useInsertionEffect(_, V);
    }),
    (ne.useLayoutEffect = function (_, V) {
      return J.H.useLayoutEffect(_, V);
    }),
    (ne.useMemo = function (_, V) {
      return J.H.useMemo(_, V);
    }),
    (ne.useOptimistic = function (_, V) {
      return J.H.useOptimistic(_, V);
    }),
    (ne.useReducer = function (_, V, F) {
      return J.H.useReducer(_, V, F);
    }),
    (ne.useRef = function (_) {
      return J.H.useRef(_);
    }),
    (ne.useState = function (_) {
      return J.H.useState(_);
    }),
    (ne.useSyncExternalStore = function (_, V, F) {
      return J.H.useSyncExternalStore(_, V, F);
    }),
    (ne.useTransition = function () {
      return J.H.useTransition();
    }),
    (ne.version = "19.2.4"),
    ne
  );
}
var tg;
function Nf() {
  return (tg || ((tg = 1), (Xu.exports = t2())), Xu.exports);
}
var D = Nf();
const Tn = wy(D);
var Qu = { exports: {} },
  hs = {},
  Fu = { exports: {} },
  Zu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ig;
function i2() {
  return (
    ig ||
      ((ig = 1),
      (function (a) {
        function i(U, Q) {
          var ie = U.length;
          U.push(Q);
          e: for (; 0 < ie; ) {
            var Ce = (ie - 1) >>> 1,
              Me = U[Ce];
            if (0 < r(Me, Q)) ((U[Ce] = Q), (U[ie] = Me), (ie = Ce));
            else break e;
          }
        }
        function l(U) {
          return U.length === 0 ? null : U[0];
        }
        function s(U) {
          if (U.length === 0) return null;
          var Q = U[0],
            ie = U.pop();
          if (ie !== Q) {
            U[0] = ie;
            e: for (var Ce = 0, Me = U.length, _ = Me >>> 1; Ce < _; ) {
              var V = 2 * (Ce + 1) - 1,
                F = U[V],
                K = V + 1,
                ae = U[K];
              if (0 > r(F, ie))
                K < Me && 0 > r(ae, F)
                  ? ((U[Ce] = ae), (U[K] = ie), (Ce = K))
                  : ((U[Ce] = F), (U[V] = ie), (Ce = V));
              else if (K < Me && 0 > r(ae, ie))
                ((U[Ce] = ae), (U[K] = ie), (Ce = K));
              else break e;
            }
          }
          return Q;
        }
        function r(U, Q) {
          var ie = U.sortIndex - Q.sortIndex;
          return ie !== 0 ? ie : U.id - Q.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          a.unstable_now = function () {
            return u.now();
          };
        } else {
          var d = Date,
            h = d.now();
          a.unstable_now = function () {
            return d.now() - h;
          };
        }
        var p = [],
          y = [],
          x = 1,
          b = null,
          w = 3,
          z = !1,
          T = !1,
          M = !1,
          E = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function G(U) {
          for (var Q = l(y); Q !== null; ) {
            if (Q.callback === null) s(y);
            else if (Q.startTime <= U)
              (s(y), (Q.sortIndex = Q.expirationTime), i(p, Q));
            else break;
            Q = l(y);
          }
        }
        function Z(U) {
          if (((M = !1), G(U), !T))
            if (l(p) !== null) ((T = !0), te || ((te = !0), Le()));
            else {
              var Q = l(y);
              Q !== null && Fe(Z, Q.startTime - U);
            }
        }
        var te = !1,
          J = -1,
          he = 5,
          Oe = -1;
        function ke() {
          return E ? !0 : !(a.unstable_now() - Oe < he);
        }
        function We() {
          if (((E = !1), te)) {
            var U = a.unstable_now();
            Oe = U;
            var Q = !0;
            try {
              e: {
                ((T = !1), M && ((M = !1), q(J), (J = -1)), (z = !0));
                var ie = w;
                try {
                  t: {
                    for (
                      G(U), b = l(p);
                      b !== null && !(b.expirationTime > U && ke());
                    ) {
                      var Ce = b.callback;
                      if (typeof Ce == "function") {
                        ((b.callback = null), (w = b.priorityLevel));
                        var Me = Ce(b.expirationTime <= U);
                        if (((U = a.unstable_now()), typeof Me == "function")) {
                          ((b.callback = Me), G(U), (Q = !0));
                          break t;
                        }
                        (b === l(p) && s(p), G(U));
                      } else s(p);
                      b = l(p);
                    }
                    if (b !== null) Q = !0;
                    else {
                      var _ = l(y);
                      (_ !== null && Fe(Z, _.startTime - U), (Q = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (w = ie), (z = !1));
                }
                Q = void 0;
              }
            } finally {
              Q ? Le() : (te = !1);
            }
          }
        }
        var Le;
        if (typeof Y == "function")
          Le = function () {
            Y(We);
          };
        else if (typeof MessageChannel < "u") {
          var ge = new MessageChannel(),
            Qe = ge.port2;
          ((ge.port1.onmessage = We),
            (Le = function () {
              Qe.postMessage(null);
            }));
        } else
          Le = function () {
            A(We, 0);
          };
        function Fe(U, Q) {
          J = A(function () {
            U(a.unstable_now());
          }, Q);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (a.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (he = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (a.unstable_next = function (U) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = w;
            }
            var ie = w;
            w = Q;
            try {
              return U();
            } finally {
              w = ie;
            }
          }),
          (a.unstable_requestPaint = function () {
            E = !0;
          }),
          (a.unstable_runWithPriority = function (U, Q) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var ie = w;
            w = U;
            try {
              return Q();
            } finally {
              w = ie;
            }
          }),
          (a.unstable_scheduleCallback = function (U, Q, ie) {
            var Ce = a.unstable_now();
            switch (
              (typeof ie == "object" && ie !== null
                ? ((ie = ie.delay),
                  (ie = typeof ie == "number" && 0 < ie ? Ce + ie : Ce))
                : (ie = Ce),
              U)
            ) {
              case 1:
                var Me = -1;
                break;
              case 2:
                Me = 250;
                break;
              case 5:
                Me = 1073741823;
                break;
              case 4:
                Me = 1e4;
                break;
              default:
                Me = 5e3;
            }
            return (
              (Me = ie + Me),
              (U = {
                id: x++,
                callback: Q,
                priorityLevel: U,
                startTime: ie,
                expirationTime: Me,
                sortIndex: -1,
              }),
              ie > Ce
                ? ((U.sortIndex = ie),
                  i(y, U),
                  l(p) === null &&
                    U === l(y) &&
                    (M ? (q(J), (J = -1)) : (M = !0), Fe(Z, ie - Ce)))
                : ((U.sortIndex = Me),
                  i(p, U),
                  T || z || ((T = !0), te || ((te = !0), Le()))),
              U
            );
          }),
          (a.unstable_shouldYield = ke),
          (a.unstable_wrapCallback = function (U) {
            var Q = w;
            return function () {
              var ie = w;
              w = Q;
              try {
                return U.apply(this, arguments);
              } finally {
                w = ie;
              }
            };
          }));
      })(Zu)),
    Zu
  );
}
var ng;
function n2() {
  return (ng || ((ng = 1), (Fu.exports = i2())), Fu.exports);
}
var Pu = { exports: {} },
  dt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ag;
function a2() {
  if (ag) return dt;
  ag = 1;
  var a = Nf();
  function i(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        y += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var s = {
      d: {
        f: l,
        r: function () {
          throw Error(i(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function u(p, y, x) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: y,
      implementation: x,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, y) {
    if (p === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (dt.createPortal = function (p, y) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(i(299));
      return u(p, y, null, x);
    }),
    (dt.flushSync = function (p) {
      var y = d.T,
        x = s.p;
      try {
        if (((d.T = null), (s.p = 2), p)) return p();
      } finally {
        ((d.T = y), (s.p = x), s.d.f());
      }
    }),
    (dt.preconnect = function (p, y) {
      typeof p == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        s.d.C(p, y));
    }),
    (dt.prefetchDNS = function (p) {
      typeof p == "string" && s.d.D(p);
    }),
    (dt.preinit = function (p, y) {
      if (typeof p == "string" && y && typeof y.as == "string") {
        var x = y.as,
          b = h(x, y.crossOrigin),
          w = typeof y.integrity == "string" ? y.integrity : void 0,
          z = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        x === "style"
          ? s.d.S(p, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: b,
              integrity: w,
              fetchPriority: z,
            })
          : x === "script" &&
            s.d.X(p, {
              crossOrigin: b,
              integrity: w,
              fetchPriority: z,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (dt.preinitModule = function (p, y) {
      if (typeof p == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var x = h(y.as, y.crossOrigin);
            s.d.M(p, {
              crossOrigin: x,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && s.d.M(p);
    }),
    (dt.preload = function (p, y) {
      if (
        typeof p == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var x = y.as,
          b = h(x, y.crossOrigin);
        s.d.L(p, x, {
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (dt.preloadModule = function (p, y) {
      if (typeof p == "string")
        if (y) {
          var x = h(y.as, y.crossOrigin);
          s.d.m(p, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: x,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else s.d.m(p);
    }),
    (dt.requestFormReset = function (p) {
      s.d.r(p);
    }),
    (dt.unstable_batchedUpdates = function (p, y) {
      return p(y);
    }),
    (dt.useFormState = function (p, y, x) {
      return d.H.useFormState(p, y, x);
    }),
    (dt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (dt.version = "19.2.4"),
    dt
  );
}
var lg;
function l2() {
  if (lg) return Pu.exports;
  lg = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Pu.exports = a2()), Pu.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sg;
function s2() {
  if (sg) return hs;
  sg = 1;
  var a = n2(),
    i = Nf(),
    l = l2();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (u(e) !== e) throw Error(s(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = u(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, o = t; ; ) {
      var c = n.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (((o = c.return), o !== null)) {
          n = o;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === n) return (p(c), e);
          if (f === o) return (p(c), t);
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== o.return) ((n = c), (o = f));
      else {
        for (var g = !1, v = c.child; v; ) {
          if (v === n) {
            ((g = !0), (n = c), (o = f));
            break;
          }
          if (v === o) {
            ((g = !0), (o = c), (n = f));
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = f.child; v; ) {
            if (v === n) {
              ((g = !0), (n = f), (o = c));
              break;
            }
            if (v === o) {
              ((g = !0), (o = f), (n = c));
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(s(189));
        }
      }
      if (n.alternate !== o) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = x(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    w = Symbol.for("react.element"),
    z = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    A = Symbol.for("react.profiler"),
    q = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    Z = Symbol.for("react.suspense"),
    te = Symbol.for("react.suspense_list"),
    J = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    Oe = Symbol.for("react.activity"),
    ke = Symbol.for("react.memo_cache_sentinel"),
    We = Symbol.iterator;
  function Le(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (We && e[We]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ge = Symbol.for("react.client.reference");
  function Qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ge ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case A:
        return "Profiler";
      case E:
        return "StrictMode";
      case Z:
        return "Suspense";
      case te:
        return "SuspenseList";
      case Oe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case Y:
          return e.displayName || "Context";
        case q:
          return (e._context.displayName || "Context") + ".Consumer";
        case G:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case J:
          return (
            (t = e.displayName || null),
            t !== null ? t : Qe(e.type) || "Memo"
          );
        case he:
          ((t = e._payload), (e = e._init));
          try {
            return Qe(e(t));
          } catch {}
      }
    return null;
  }
  var Fe = Array.isArray,
    U = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ie = { pending: !1, data: null, method: null, action: null },
    Ce = [],
    Me = -1;
  function _(e) {
    return { current: e };
  }
  function V(e) {
    0 > Me || ((e.current = Ce[Me]), (Ce[Me] = null), Me--);
  }
  function F(e, t) {
    (Me++, (Ce[Me] = e.current), (e.current = t));
  }
  var K = _(null),
    ae = _(null),
    oe = _(null),
    we = _(null);
  function bt(e, t) {
    switch ((F(oe, t), F(ae, e), F(K, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? wp(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = wp(t)), (e = Sp(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (V(K), F(K, e));
  }
  function Ve() {
    (V(K), V(ae), V(oe));
  }
  function bl(e) {
    e.memoizedState !== null && F(we, e);
    var t = K.current,
      n = Sp(t, e.type);
    t !== n && (F(ae, e), F(K, n));
  }
  function js(e) {
    (ae.current === e && (V(K), V(ae)),
      we.current === e && (V(we), (rs._currentValue = ie)));
  }
  var _r, Jf;
  function Dn(e) {
    if (_r === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((_r = (t && t[1]) || ""),
          (Jf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      _r +
      e +
      Jf
    );
  }
  var Tr = !1;
  function Er(e, t) {
    if (!e || Tr) return "";
    Tr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (k) {
                  var N = k;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (k) {
                  N = k;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                N = k;
              }
              (H = e()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (k) {
            if (k && N && typeof k.stack == "string") return [k.stack, N.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name",
      );
      c &&
        c.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = o.DetermineComponentFrameRoot(),
        g = f[0],
        v = f[1];
      if (g && v) {
        var S = g.split(`
`),
          R = v.split(`
`);
        for (
          c = o = 0;
          o < S.length && !S[o].includes("DetermineComponentFrameRoot");
        )
          o++;
        for (; c < R.length && !R[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (o === S.length || c === R.length)
          for (
            o = S.length - 1, c = R.length - 1;
            1 <= o && 0 <= c && S[o] !== R[c];
          )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (S[o] !== R[c]) {
            if (o !== 1 || c !== 1)
              do
                if ((o--, c--, 0 > c || S[o] !== R[c])) {
                  var L =
                    `
` + S[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      L.includes("<anonymous>") &&
                      (L = L.replace("<anonymous>", e.displayName)),
                    L
                  );
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      ((Tr = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? Dn(n) : "";
  }
  function Dv(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Dn(e.type);
      case 16:
        return Dn("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Dn("Suspense Fallback")
          : Dn("Suspense");
      case 19:
        return Dn("SuspenseList");
      case 0:
      case 15:
        return Er(e.type, !1);
      case 11:
        return Er(e.type.render, !1);
      case 1:
        return Er(e.type, !0);
      case 31:
        return Dn("Activity");
      default:
        return "";
    }
  }
  function $f(e) {
    try {
      var t = "",
        n = null;
      do ((t += Dv(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  var jr = Object.prototype.hasOwnProperty,
    Mr = a.unstable_scheduleCallback,
    Dr = a.unstable_cancelCallback,
    Ov = a.unstable_shouldYield,
    Rv = a.unstable_requestPaint,
    Rt = a.unstable_now,
    Nv = a.unstable_getCurrentPriorityLevel,
    Wf = a.unstable_ImmediatePriority,
    ed = a.unstable_UserBlockingPriority,
    Ms = a.unstable_NormalPriority,
    Av = a.unstable_LowPriority,
    td = a.unstable_IdlePriority,
    kv = a.log,
    Lv = a.unstable_setDisableYieldValue,
    xl = null,
    Nt = null;
  function Ii(e) {
    if (
      (typeof kv == "function" && Lv(e),
      Nt && typeof Nt.setStrictMode == "function")
    )
      try {
        Nt.setStrictMode(xl, e);
      } catch {}
  }
  var At = Math.clz32 ? Math.clz32 : Hv,
    Uv = Math.log,
    Bv = Math.LN2;
  function Hv(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Uv(e) / Bv) | 0)) | 0);
  }
  var Ds = 256,
    Os = 262144,
    Rs = 4194304;
  function On(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ns(e, t, n) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0,
      f = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var v = o & 134217727;
    return (
      v !== 0
        ? ((o = v & ~f),
          o !== 0
            ? (c = On(o))
            : ((g &= v),
              g !== 0
                ? (c = On(g))
                : n || ((n = v & ~e), n !== 0 && (c = On(n)))))
        : ((v = o & ~f),
          v !== 0
            ? (c = On(v))
            : g !== 0
              ? (c = On(g))
              : n || ((n = o & ~e), n !== 0 && (c = On(n)))),
      c === 0
        ? 0
        : t !== 0 &&
            t !== c &&
            (t & f) === 0 &&
            ((f = c & -c),
            (n = t & -t),
            f >= n || (f === 32 && (n & 4194048) !== 0))
          ? t
          : c
    );
  }
  function wl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function qv(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function id() {
    var e = Rs;
    return ((Rs <<= 1), (Rs & 62914560) === 0 && (Rs = 4194304), e);
  }
  function Or(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sl(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Vv(e, t, n, o, c, f) {
    var g = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var v = e.entanglements,
      S = e.expirationTimes,
      R = e.hiddenUpdates;
    for (n = g & ~n; 0 < n; ) {
      var L = 31 - At(n),
        H = 1 << L;
      ((v[L] = 0), (S[L] = -1));
      var N = R[L];
      if (N !== null)
        for (R[L] = null, L = 0; L < N.length; L++) {
          var k = N[L];
          k !== null && (k.lane &= -536870913);
        }
      n &= ~H;
    }
    (o !== 0 && nd(e, o, 0),
      f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t)));
  }
  function nd(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var o = 31 - At(t);
    ((e.entangledLanes |= t),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (n & 261930)));
  }
  function ad(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var o = 31 - At(n),
        c = 1 << o;
      ((c & t) | (e[o] & t) && (e[o] |= t), (n &= ~c));
    }
  }
  function ld(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : Rr(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function Rr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Nr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function sd() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Qp(e.type));
  }
  function od(e, t) {
    var n = Q.p;
    try {
      return ((Q.p = e), t());
    } finally {
      Q.p = n;
    }
  }
  var Ji = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + Ji,
    zt = "__reactProps$" + Ji,
    fa = "__reactContainer$" + Ji,
    Ar = "__reactEvents$" + Ji,
    Yv = "__reactListeners$" + Ji,
    Gv = "__reactHandles$" + Ji,
    rd = "__reactResources$" + Ji,
    zl = "__reactMarker$" + Ji;
  function kr(e) {
    (delete e[st], delete e[zt], delete e[Ar], delete e[Yv], delete e[Gv]);
  }
  function da(e) {
    var t = e[st];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[fa] || n[st])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Mp(e); e !== null; ) {
            if ((n = e[st])) return n;
            e = Mp(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ha(e) {
    if ((e = e[st] || e[fa])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Cl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ma(e) {
    var t = e[rd];
    return (
      t ||
        (t = e[rd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function it(e) {
    e[zl] = !0;
  }
  var cd = new Set(),
    ud = {};
  function Rn(e, t) {
    (pa(e, t), pa(e + "Capture", t));
  }
  function pa(e, t) {
    for (ud[e] = t, e = 0; e < t.length; e++) cd.add(t[e]);
  }
  var Xv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    fd = {},
    dd = {};
  function Qv(e) {
    return jr.call(dd, e)
      ? !0
      : jr.call(fd, e)
        ? !1
        : Xv.test(e)
          ? (dd[e] = !0)
          : ((fd[e] = !0), !1);
  }
  function As(e, t, n) {
    if (Qv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function ks(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Ei(e, t, n, o) {
    if (o === null) e.removeAttribute(n);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + o);
    }
  }
  function Ft(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function hd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Fv(e, t, n) {
    var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var c = o.get,
        f = o.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (g) {
            ((n = "" + g), f.call(this, g));
          },
        }),
        Object.defineProperty(e, t, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (g) {
            n = "" + g;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Lr(e) {
    if (!e._valueTracker) {
      var t = hd(e) ? "checked" : "value";
      e._valueTracker = Fv(e, t, "" + e[t]);
    }
  }
  function md(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      o = "";
    return (
      e && (o = hd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ls(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Zv = /[\n"\\]/g;
  function Zt(e) {
    return e.replace(Zv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ur(e, t, n, o, c, f, g, v) {
    ((e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      t != null
        ? g === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Ft(t))
          : e.value !== "" + Ft(t) && (e.value = "" + Ft(t))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      t != null
        ? Br(e, g, Ft(t))
        : n != null
          ? Br(e, g, Ft(n))
          : o != null && e.removeAttribute("value"),
      c == null && f != null && (e.defaultChecked = !!f),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + Ft(v))
        : e.removeAttribute("name"));
  }
  function pd(e, t, n, o, c, f, g, v) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      t != null || n != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || t != null)) {
        Lr(e);
        return;
      }
      ((n = n != null ? "" + Ft(n) : ""),
        (t = t != null ? "" + Ft(t) : n),
        v || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((o = o ?? c),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = v ? e.checked : !!o),
      (e.defaultChecked = !!o),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g),
      Lr(e));
  }
  function Br(e, t, n) {
    (t === "number" && Ls(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function ga(e, t, n, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < n.length; c++) t["$" + n[c]] = !0;
      for (n = 0; n < e.length; n++)
        ((c = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== c && (e[n].selected = c),
          c && o && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Ft(n), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === n) {
          ((e[c].selected = !0), o && (e[c].defaultSelected = !0));
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function gd(e, t, n) {
    if (
      t != null &&
      ((t = "" + Ft(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Ft(n) : "";
  }
  function yd(e, t, n, o) {
    if (t == null) {
      if (o != null) {
        if (n != null) throw Error(s(92));
        if (Fe(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        n = o;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = Ft(t)),
      (e.defaultValue = n),
      (o = e.textContent),
      o === n && o !== "" && o !== null && (e.value = o),
      Lr(e));
  }
  function ya(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Pv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function vd(e, t, n) {
    var o = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? o
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : o
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || Pv.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function bd(e, t, n) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), n != null)) {
      for (var o in n)
        !n.hasOwnProperty(o) ||
          (t != null && t.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
              ? (e.cssFloat = "")
              : (e[o] = ""));
      for (var c in t)
        ((o = t[c]), t.hasOwnProperty(c) && n[c] !== o && vd(e, c, o));
    } else for (var f in t) t.hasOwnProperty(f) && vd(e, f, t[f]);
  }
  function Hr(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Kv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Iv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Us(e) {
    return Iv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function ji() {}
  var qr = null;
  function Vr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var va = null,
    ba = null;
  function xd(e) {
    var t = ha(e);
    if (t && (e = t.stateNode)) {
      var n = e[zt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Ur(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Zt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var o = n[t];
              if (o !== e && o.form === e.form) {
                var c = o[zt] || null;
                if (!c) throw Error(s(90));
                Ur(
                  o,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((o = n[t]), o.form === e.form && md(o));
          }
          break e;
        case "textarea":
          gd(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && ga(e, !!n.multiple, t, !1));
      }
    }
  }
  var Yr = !1;
  function wd(e, t, n) {
    if (Yr) return e(t, n);
    Yr = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (
        ((Yr = !1),
        (va !== null || ba !== null) &&
          (_o(), va && ((t = va), (e = ba), (ba = va = null), xd(t), e)))
      )
        for (t = 0; t < e.length; t++) xd(e[t]);
    }
  }
  function _l(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = n[zt] || null;
    if (o === null) return null;
    n = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Mi = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Gr = !1;
  if (Mi)
    try {
      var Tl = {};
      (Object.defineProperty(Tl, "passive", {
        get: function () {
          Gr = !0;
        },
      }),
        window.addEventListener("test", Tl, Tl),
        window.removeEventListener("test", Tl, Tl));
    } catch {
      Gr = !1;
    }
  var $i = null,
    Xr = null,
    Bs = null;
  function Sd() {
    if (Bs) return Bs;
    var e,
      t = Xr,
      n = t.length,
      o,
      c = "value" in $i ? $i.value : $i.textContent,
      f = c.length;
    for (e = 0; e < n && t[e] === c[e]; e++);
    var g = n - e;
    for (o = 1; o <= g && t[n - o] === c[f - o]; o++);
    return (Bs = c.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Hs(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function qs() {
    return !0;
  }
  function zd() {
    return !1;
  }
  function Ct(e) {
    function t(n, o, c, f, g) {
      ((this._reactName = n),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = f),
        (this.target = g),
        (this.currentTarget = null));
      for (var v in e)
        e.hasOwnProperty(v) && ((n = e[v]), (this[v] = n ? n(f) : f[v]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? qs
          : zd),
        (this.isPropagationStopped = zd),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = qs));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = qs));
        },
        persist: function () {},
        isPersistent: qs,
      }),
      t
    );
  }
  var Nn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vs = Ct(Nn),
    El = b({}, Nn, { view: 0, detail: 0 }),
    Jv = Ct(El),
    Qr,
    Fr,
    jl,
    Ys = b({}, El, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Pr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== jl &&
              (jl && e.type === "mousemove"
                ? ((Qr = e.screenX - jl.screenX), (Fr = e.screenY - jl.screenY))
                : (Fr = Qr = 0),
              (jl = e)),
            Qr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Fr;
      },
    }),
    Cd = Ct(Ys),
    $v = b({}, Ys, { dataTransfer: 0 }),
    Wv = Ct($v),
    e1 = b({}, El, { relatedTarget: 0 }),
    Zr = Ct(e1),
    t1 = b({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    i1 = Ct(t1),
    n1 = b({}, Nn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    a1 = Ct(n1),
    l1 = b({}, Nn, { data: 0 }),
    _d = Ct(l1),
    s1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    o1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    r1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function c1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = r1[e])
        ? !!t[e]
        : !1;
  }
  function Pr() {
    return c1;
  }
  var u1 = b({}, El, {
      key: function (e) {
        if (e.key) {
          var t = s1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Hs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? o1[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Pr,
      charCode: function (e) {
        return e.type === "keypress" ? Hs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Hs(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    f1 = Ct(u1),
    d1 = b({}, Ys, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Td = Ct(d1),
    h1 = b({}, El, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pr,
    }),
    m1 = Ct(h1),
    p1 = b({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    g1 = Ct(p1),
    y1 = b({}, Ys, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    v1 = Ct(y1),
    b1 = b({}, Nn, { newState: 0, oldState: 0 }),
    x1 = Ct(b1),
    w1 = [9, 13, 27, 32],
    Kr = Mi && "CompositionEvent" in window,
    Ml = null;
  Mi && "documentMode" in document && (Ml = document.documentMode);
  var S1 = Mi && "TextEvent" in window && !Ml,
    Ed = Mi && (!Kr || (Ml && 8 < Ml && 11 >= Ml)),
    jd = " ",
    Md = !1;
  function Dd(e, t) {
    switch (e) {
      case "keyup":
        return w1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Od(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var xa = !1;
  function z1(e, t) {
    switch (e) {
      case "compositionend":
        return Od(t);
      case "keypress":
        return t.which !== 32 ? null : ((Md = !0), jd);
      case "textInput":
        return ((e = t.data), e === jd && Md ? null : e);
      default:
        return null;
    }
  }
  function C1(e, t) {
    if (xa)
      return e === "compositionend" || (!Kr && Dd(e, t))
        ? ((e = Sd()), (Bs = Xr = $i = null), (xa = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ed && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Rd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_1[e.type] : t === "textarea";
  }
  function Nd(e, t, n, o) {
    (va ? (ba ? ba.push(o) : (ba = [o])) : (va = o),
      (t = Ro(t, "onChange")),
      0 < t.length &&
        ((n = new Vs("onChange", "change", null, n, o)),
        e.push({ event: n, listeners: t })));
  }
  var Dl = null,
    Ol = null;
  function T1(e) {
    pp(e, 0);
  }
  function Gs(e) {
    var t = Cl(e);
    if (md(t)) return e;
  }
  function Ad(e, t) {
    if (e === "change") return t;
  }
  var kd = !1;
  if (Mi) {
    var Ir;
    if (Mi) {
      var Jr = "oninput" in document;
      if (!Jr) {
        var Ld = document.createElement("div");
        (Ld.setAttribute("oninput", "return;"),
          (Jr = typeof Ld.oninput == "function"));
      }
      Ir = Jr;
    } else Ir = !1;
    kd = Ir && (!document.documentMode || 9 < document.documentMode);
  }
  function Ud() {
    Dl && (Dl.detachEvent("onpropertychange", Bd), (Ol = Dl = null));
  }
  function Bd(e) {
    if (e.propertyName === "value" && Gs(Ol)) {
      var t = [];
      (Nd(t, Ol, e, Vr(e)), wd(T1, t));
    }
  }
  function E1(e, t, n) {
    e === "focusin"
      ? (Ud(), (Dl = t), (Ol = n), Dl.attachEvent("onpropertychange", Bd))
      : e === "focusout" && Ud();
  }
  function j1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Gs(Ol);
  }
  function M1(e, t) {
    if (e === "click") return Gs(t);
  }
  function D1(e, t) {
    if (e === "input" || e === "change") return Gs(t);
  }
  function O1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == "function" ? Object.is : O1;
  function Rl(e, t) {
    if (kt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var c = n[o];
      if (!jr.call(t, c) || !kt(e[c], t[c])) return !1;
    }
    return !0;
  }
  function Hd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qd(e, t) {
    var n = Hd(e);
    e = 0;
    for (var o; n; ) {
      if (n.nodeType === 3) {
        if (((o = e + n.textContent.length), e <= t && o >= t))
          return { node: n, offset: t - e };
        e = o;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Hd(n);
    }
  }
  function Vd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Vd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Yd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ls(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ls(e.document);
    }
    return t;
  }
  function $r(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var R1 = Mi && "documentMode" in document && 11 >= document.documentMode,
    wa = null,
    Wr = null,
    Nl = null,
    ec = !1;
  function Gd(e, t, n) {
    var o =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ec ||
      wa == null ||
      wa !== Ls(o) ||
      ((o = wa),
      "selectionStart" in o && $r(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Nl && Rl(Nl, o)) ||
        ((Nl = o),
        (o = Ro(Wr, "onSelect")),
        0 < o.length &&
          ((t = new Vs("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: o }),
          (t.target = wa))));
  }
  function An(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Sa = {
      animationend: An("Animation", "AnimationEnd"),
      animationiteration: An("Animation", "AnimationIteration"),
      animationstart: An("Animation", "AnimationStart"),
      transitionrun: An("Transition", "TransitionRun"),
      transitionstart: An("Transition", "TransitionStart"),
      transitioncancel: An("Transition", "TransitionCancel"),
      transitionend: An("Transition", "TransitionEnd"),
    },
    tc = {},
    Xd = {};
  Mi &&
    ((Xd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Sa.animationend.animation,
      delete Sa.animationiteration.animation,
      delete Sa.animationstart.animation),
    "TransitionEvent" in window || delete Sa.transitionend.transition);
  function kn(e) {
    if (tc[e]) return tc[e];
    if (!Sa[e]) return e;
    var t = Sa[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Xd) return (tc[e] = t[n]);
    return e;
  }
  var Qd = kn("animationend"),
    Fd = kn("animationiteration"),
    Zd = kn("animationstart"),
    N1 = kn("transitionrun"),
    A1 = kn("transitionstart"),
    k1 = kn("transitioncancel"),
    Pd = kn("transitionend"),
    Kd = new Map(),
    ic =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  ic.push("scrollEnd");
  function oi(e, t) {
    (Kd.set(e, t), Rn(t, [e]));
  }
  var Xs =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Pt = [],
    za = 0,
    nc = 0;
  function Qs() {
    for (var e = za, t = (nc = za = 0); t < e; ) {
      var n = Pt[t];
      Pt[t++] = null;
      var o = Pt[t];
      Pt[t++] = null;
      var c = Pt[t];
      Pt[t++] = null;
      var f = Pt[t];
      if (((Pt[t++] = null), o !== null && c !== null)) {
        var g = o.pending;
        (g === null ? (c.next = c) : ((c.next = g.next), (g.next = c)),
          (o.pending = c));
      }
      f !== 0 && Id(n, c, f);
    }
  }
  function Fs(e, t, n, o) {
    ((Pt[za++] = e),
      (Pt[za++] = t),
      (Pt[za++] = n),
      (Pt[za++] = o),
      (nc |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o));
  }
  function ac(e, t, n, o) {
    return (Fs(e, t, n, o), Zs(e));
  }
  function Ln(e, t) {
    return (Fs(e, null, null, t), Zs(e));
  }
  function Id(e, t, n) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n);
    for (var c = !1, f = e.return; f !== null; )
      ((f.childLanes |= n),
        (o = f.alternate),
        o !== null && (o.childLanes |= n),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = f),
        (f = f.return));
    return e.tag === 3
      ? ((f = e.stateNode),
        c &&
          t !== null &&
          ((c = 31 - At(n)),
          (e = f.hiddenUpdates),
          (o = e[c]),
          o === null ? (e[c] = [t]) : o.push(t),
          (t.lane = n | 536870912)),
        f)
      : null;
  }
  function Zs(e) {
    if (50 < ts) throw ((ts = 0), (hu = null), Error(s(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ca = {};
  function L1(e, t, n, o) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Lt(e, t, n, o) {
    return new L1(e, t, n, o);
  }
  function lc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Di(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Lt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Jd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ps(e, t, n, o, c, f) {
    var g = 0;
    if (((o = e), typeof e == "function")) lc(e) && (g = 1);
    else if (typeof e == "string")
      g = V0(e, n, K.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Oe:
          return (
            (e = Lt(31, n, t, c)),
            (e.elementType = Oe),
            (e.lanes = f),
            e
          );
        case M:
          return Un(n.children, c, f, t);
        case E:
          ((g = 8), (c |= 24));
          break;
        case A:
          return (
            (e = Lt(12, n, t, c | 2)),
            (e.elementType = A),
            (e.lanes = f),
            e
          );
        case Z:
          return ((e = Lt(13, n, t, c)), (e.elementType = Z), (e.lanes = f), e);
        case te:
          return (
            (e = Lt(19, n, t, c)),
            (e.elementType = te),
            (e.lanes = f),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Y:
                g = 10;
                break e;
              case q:
                g = 9;
                break e;
              case G:
                g = 11;
                break e;
              case J:
                g = 14;
                break e;
              case he:
                ((g = 16), (o = null));
                break e;
            }
          ((g = 29),
            (n = Error(s(130, e === null ? "null" : typeof e, ""))),
            (o = null));
      }
    return (
      (t = Lt(g, n, t, c)),
      (t.elementType = e),
      (t.type = o),
      (t.lanes = f),
      t
    );
  }
  function Un(e, t, n, o) {
    return ((e = Lt(7, e, o, t)), (e.lanes = n), e);
  }
  function sc(e, t, n) {
    return ((e = Lt(6, e, null, t)), (e.lanes = n), e);
  }
  function $d(e) {
    var t = Lt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function oc(e, t, n) {
    return (
      (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Wd = new WeakMap();
  function Kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Wd.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: $f(t) }), Wd.set(e, t), t);
    }
    return { value: e, source: t, stack: $f(t) };
  }
  var _a = [],
    Ta = 0,
    Ks = null,
    Al = 0,
    It = [],
    Jt = 0,
    Wi = null,
    gi = 1,
    yi = "";
  function Oi(e, t) {
    ((_a[Ta++] = Al), (_a[Ta++] = Ks), (Ks = e), (Al = t));
  }
  function eh(e, t, n) {
    ((It[Jt++] = gi), (It[Jt++] = yi), (It[Jt++] = Wi), (Wi = e));
    var o = gi;
    e = yi;
    var c = 32 - At(o) - 1;
    ((o &= ~(1 << c)), (n += 1));
    var f = 32 - At(t) + c;
    if (30 < f) {
      var g = c - (c % 5);
      ((f = (o & ((1 << g) - 1)).toString(32)),
        (o >>= g),
        (c -= g),
        (gi = (1 << (32 - At(t) + c)) | (n << c) | o),
        (yi = f + e));
    } else ((gi = (1 << f) | (n << c) | o), (yi = e));
  }
  function rc(e) {
    e.return !== null && (Oi(e, 1), eh(e, 1, 0));
  }
  function cc(e) {
    for (; e === Ks; )
      ((Ks = _a[--Ta]), (_a[Ta] = null), (Al = _a[--Ta]), (_a[Ta] = null));
    for (; e === Wi; )
      ((Wi = It[--Jt]),
        (It[Jt] = null),
        (yi = It[--Jt]),
        (It[Jt] = null),
        (gi = It[--Jt]),
        (It[Jt] = null));
  }
  function th(e, t) {
    ((It[Jt++] = gi),
      (It[Jt++] = yi),
      (It[Jt++] = Wi),
      (gi = t.id),
      (yi = t.overflow),
      (Wi = e));
  }
  var ot = null,
    Re = null,
    me = !1,
    en = null,
    $t = !1,
    uc = Error(s(519));
  function tn(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (kl(Kt(t, e)), uc);
  }
  function ih(e) {
    var t = e.stateNode,
      n = e.type,
      o = e.memoizedProps;
    switch (((t[st] = e), (t[zt] = o), n)) {
      case "dialog":
        (ce("cancel", t), ce("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        ce("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ns.length; n++) ce(ns[n], t);
        break;
      case "source":
        ce("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (ce("error", t), ce("load", t));
        break;
      case "details":
        ce("toggle", t);
        break;
      case "input":
        (ce("invalid", t),
          pd(
            t,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0,
          ));
        break;
      case "select":
        ce("invalid", t);
        break;
      case "textarea":
        (ce("invalid", t), yd(t, o.value, o.defaultValue, o.children));
    }
    ((n = o.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      o.suppressHydrationWarning === !0 ||
      bp(t.textContent, n)
        ? (o.popover != null && (ce("beforetoggle", t), ce("toggle", t)),
          o.onScroll != null && ce("scroll", t),
          o.onScrollEnd != null && ce("scrollend", t),
          o.onClick != null && (t.onclick = ji),
          (t = !0))
        : (t = !1),
      t || tn(e, !0));
  }
  function nh(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          $t = !1;
          return;
        case 27:
        case 3:
          $t = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function Ea(e) {
    if (e !== ot) return !1;
    if (!me) return (nh(e), (me = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || ju(e.type, e.memoizedProps))),
        (n = !n)),
      n && Re && tn(e),
      nh(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      Re = jp(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      Re = jp(e);
    } else
      t === 27
        ? ((t = Re), gn(e.type) ? ((e = Nu), (Nu = null), (Re = e)) : (Re = t))
        : (Re = ot ? ei(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Bn() {
    ((Re = ot = null), (me = !1));
  }
  function fc() {
    var e = en;
    return (
      e !== null &&
        (jt === null ? (jt = e) : jt.push.apply(jt, e), (en = null)),
      e
    );
  }
  function kl(e) {
    en === null ? (en = [e]) : en.push(e);
  }
  var dc = _(null),
    Hn = null,
    Ri = null;
  function nn(e, t, n) {
    (F(dc, t._currentValue), (t._currentValue = n));
  }
  function Ni(e) {
    ((e._currentValue = dc.current), V(dc));
  }
  function hc(e, t, n) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function mc(e, t, n, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var f = c.dependencies;
      if (f !== null) {
        var g = c.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var v = f;
          f = c;
          for (var S = 0; S < t.length; S++)
            if (v.context === t[S]) {
              ((f.lanes |= n),
                (v = f.alternate),
                v !== null && (v.lanes |= n),
                hc(f.return, n, e),
                o || (g = null));
              break e;
            }
          f = v.next;
        }
      } else if (c.tag === 18) {
        if (((g = c.return), g === null)) throw Error(s(341));
        ((g.lanes |= n),
          (f = g.alternate),
          f !== null && (f.lanes |= n),
          hc(g, n, e),
          (g = null));
      } else g = c.child;
      if (g !== null) g.return = c;
      else
        for (g = c; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((c = g.sibling), c !== null)) {
            ((c.return = g.return), (g = c));
            break;
          }
          g = g.return;
        }
      c = g;
    }
  }
  function ja(e, t, n, o) {
    e = null;
    for (var c = t, f = !1; c !== null; ) {
      if (!f) {
        if ((c.flags & 524288) !== 0) f = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var g = c.alternate;
        if (g === null) throw Error(s(387));
        if (((g = g.memoizedProps), g !== null)) {
          var v = c.type;
          kt(c.pendingProps.value, g.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (c === we.current) {
        if (((g = c.alternate), g === null)) throw Error(s(387));
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(rs) : (e = [rs]));
      }
      c = c.return;
    }
    (e !== null && mc(t, e, n, o), (t.flags |= 262144));
  }
  function Is(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!kt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function qn(e) {
    ((Hn = e),
      (Ri = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function rt(e) {
    return ah(Hn, e);
  }
  function Js(e, t) {
    return (Hn === null && qn(e), ah(e, t));
  }
  function ah(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Ri === null)) {
      if (e === null) throw Error(s(308));
      ((Ri = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Ri = Ri.next = t;
    return n;
  }
  var U1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    B1 = a.unstable_scheduleCallback,
    H1 = a.unstable_NormalPriority,
    Ze = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function pc() {
    return { controller: new U1(), data: new Map(), refCount: 0 };
  }
  function Ll(e) {
    (e.refCount--,
      e.refCount === 0 &&
        B1(H1, function () {
          e.controller.abort();
        }));
  }
  var Ul = null,
    gc = 0,
    Ma = 0,
    Da = null;
  function q1(e, t) {
    if (Ul === null) {
      var n = (Ul = []);
      ((gc = 0),
        (Ma = bu()),
        (Da = {
          status: "pending",
          value: void 0,
          then: function (o) {
            n.push(o);
          },
        }));
    }
    return (gc++, t.then(lh, lh), t);
  }
  function lh() {
    if (--gc === 0 && Ul !== null) {
      Da !== null && (Da.status = "fulfilled");
      var e = Ul;
      ((Ul = null), (Ma = 0), (Da = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function V1(e, t) {
    var n = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          n.push(c);
        },
      };
    return (
      e.then(
        function () {
          ((o.status = "fulfilled"), (o.value = t));
          for (var c = 0; c < n.length; c++) (0, n[c])(t);
        },
        function (c) {
          for (o.status = "rejected", o.reason = c, c = 0; c < n.length; c++)
            (0, n[c])(void 0);
        },
      ),
      o
    );
  }
  var sh = U.S;
  U.S = function (e, t) {
    ((Gm = Rt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        q1(e, t),
      sh !== null && sh(e, t));
  };
  var Vn = _(null);
  function yc() {
    var e = Vn.current;
    return e !== null ? e : De.pooledCache;
  }
  function $s(e, t) {
    t === null ? F(Vn, Vn.current) : F(Vn, t.pool);
  }
  function oh() {
    var e = yc();
    return e === null ? null : { parent: Ze._currentValue, pool: e };
  }
  var Oa = Error(s(460)),
    vc = Error(s(474)),
    Ws = Error(s(542)),
    eo = { then: function () {} };
  function rh(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function ch(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(ji, ji), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), fh(e), e);
      default:
        if (typeof t.status == "string") t.then(ji, ji);
        else {
          if (((e = De), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (t.status === "pending") {
                  var c = t;
                  ((c.status = "fulfilled"), (c.value = o));
                }
              },
              function (o) {
                if (t.status === "pending") {
                  var c = t;
                  ((c.status = "rejected"), (c.reason = o));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), fh(e), e);
        }
        throw ((Gn = t), Oa);
    }
  }
  function Yn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Gn = n), Oa)
        : n;
    }
  }
  var Gn = null;
  function uh() {
    if (Gn === null) throw Error(s(459));
    var e = Gn;
    return ((Gn = null), e);
  }
  function fh(e) {
    if (e === Oa || e === Ws) throw Error(s(483));
  }
  var Ra = null,
    Bl = 0;
  function to(e) {
    var t = Bl;
    return ((Bl += 1), Ra === null && (Ra = []), ch(Ra, e, t));
  }
  function Hl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function io(e, t) {
    throw t.$$typeof === w
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function dh(e) {
    function t(j, C) {
      if (e) {
        var O = j.deletions;
        O === null ? ((j.deletions = [C]), (j.flags |= 16)) : O.push(C);
      }
    }
    function n(j, C) {
      if (!e) return null;
      for (; C !== null; ) (t(j, C), (C = C.sibling));
      return null;
    }
    function o(j) {
      for (var C = new Map(); j !== null; )
        (j.key !== null ? C.set(j.key, j) : C.set(j.index, j), (j = j.sibling));
      return C;
    }
    function c(j, C) {
      return ((j = Di(j, C)), (j.index = 0), (j.sibling = null), j);
    }
    function f(j, C, O) {
      return (
        (j.index = O),
        e
          ? ((O = j.alternate),
            O !== null
              ? ((O = O.index), O < C ? ((j.flags |= 67108866), C) : O)
              : ((j.flags |= 67108866), C))
          : ((j.flags |= 1048576), C)
      );
    }
    function g(j) {
      return (e && j.alternate === null && (j.flags |= 67108866), j);
    }
    function v(j, C, O, B) {
      return C === null || C.tag !== 6
        ? ((C = sc(O, j.mode, B)), (C.return = j), C)
        : ((C = c(C, O)), (C.return = j), C);
    }
    function S(j, C, O, B) {
      var $ = O.type;
      return $ === M
        ? L(j, C, O.props.children, B, O.key)
        : C !== null &&
            (C.elementType === $ ||
              (typeof $ == "object" &&
                $ !== null &&
                $.$$typeof === he &&
                Yn($) === C.type))
          ? ((C = c(C, O.props)), Hl(C, O), (C.return = j), C)
          : ((C = Ps(O.type, O.key, O.props, null, j.mode, B)),
            Hl(C, O),
            (C.return = j),
            C);
    }
    function R(j, C, O, B) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== O.containerInfo ||
        C.stateNode.implementation !== O.implementation
        ? ((C = oc(O, j.mode, B)), (C.return = j), C)
        : ((C = c(C, O.children || [])), (C.return = j), C);
    }
    function L(j, C, O, B, $) {
      return C === null || C.tag !== 7
        ? ((C = Un(O, j.mode, B, $)), (C.return = j), C)
        : ((C = c(C, O)), (C.return = j), C);
    }
    function H(j, C, O) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return ((C = sc("" + C, j.mode, O)), (C.return = j), C);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case z:
            return (
              (O = Ps(C.type, C.key, C.props, null, j.mode, O)),
              Hl(O, C),
              (O.return = j),
              O
            );
          case T:
            return ((C = oc(C, j.mode, O)), (C.return = j), C);
          case he:
            return ((C = Yn(C)), H(j, C, O));
        }
        if (Fe(C) || Le(C))
          return ((C = Un(C, j.mode, O, null)), (C.return = j), C);
        if (typeof C.then == "function") return H(j, to(C), O);
        if (C.$$typeof === Y) return H(j, Js(j, C), O);
        io(j, C);
      }
      return null;
    }
    function N(j, C, O, B) {
      var $ = C !== null ? C.key : null;
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return $ !== null ? null : v(j, C, "" + O, B);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case z:
            return O.key === $ ? S(j, C, O, B) : null;
          case T:
            return O.key === $ ? R(j, C, O, B) : null;
          case he:
            return ((O = Yn(O)), N(j, C, O, B));
        }
        if (Fe(O) || Le(O)) return $ !== null ? null : L(j, C, O, B, null);
        if (typeof O.then == "function") return N(j, C, to(O), B);
        if (O.$$typeof === Y) return N(j, C, Js(j, O), B);
        io(j, O);
      }
      return null;
    }
    function k(j, C, O, B, $) {
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return ((j = j.get(O) || null), v(C, j, "" + B, $));
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case z:
            return (
              (j = j.get(B.key === null ? O : B.key) || null),
              S(C, j, B, $)
            );
          case T:
            return (
              (j = j.get(B.key === null ? O : B.key) || null),
              R(C, j, B, $)
            );
          case he:
            return ((B = Yn(B)), k(j, C, O, B, $));
        }
        if (Fe(B) || Le(B))
          return ((j = j.get(O) || null), L(C, j, B, $, null));
        if (typeof B.then == "function") return k(j, C, O, to(B), $);
        if (B.$$typeof === Y) return k(j, C, O, Js(C, B), $);
        io(C, B);
      }
      return null;
    }
    function P(j, C, O, B) {
      for (
        var $ = null, ye = null, I = C, se = (C = 0), fe = null;
        I !== null && se < O.length;
        se++
      ) {
        I.index > se ? ((fe = I), (I = null)) : (fe = I.sibling);
        var ve = N(j, I, O[se], B);
        if (ve === null) {
          I === null && (I = fe);
          break;
        }
        (e && I && ve.alternate === null && t(j, I),
          (C = f(ve, C, se)),
          ye === null ? ($ = ve) : (ye.sibling = ve),
          (ye = ve),
          (I = fe));
      }
      if (se === O.length) return (n(j, I), me && Oi(j, se), $);
      if (I === null) {
        for (; se < O.length; se++)
          ((I = H(j, O[se], B)),
            I !== null &&
              ((C = f(I, C, se)),
              ye === null ? ($ = I) : (ye.sibling = I),
              (ye = I)));
        return (me && Oi(j, se), $);
      }
      for (I = o(I); se < O.length; se++)
        ((fe = k(I, j, se, O[se], B)),
          fe !== null &&
            (e &&
              fe.alternate !== null &&
              I.delete(fe.key === null ? se : fe.key),
            (C = f(fe, C, se)),
            ye === null ? ($ = fe) : (ye.sibling = fe),
            (ye = fe)));
      return (
        e &&
          I.forEach(function (wn) {
            return t(j, wn);
          }),
        me && Oi(j, se),
        $
      );
    }
    function ee(j, C, O, B) {
      if (O == null) throw Error(s(151));
      for (
        var $ = null, ye = null, I = C, se = (C = 0), fe = null, ve = O.next();
        I !== null && !ve.done;
        se++, ve = O.next()
      ) {
        I.index > se ? ((fe = I), (I = null)) : (fe = I.sibling);
        var wn = N(j, I, ve.value, B);
        if (wn === null) {
          I === null && (I = fe);
          break;
        }
        (e && I && wn.alternate === null && t(j, I),
          (C = f(wn, C, se)),
          ye === null ? ($ = wn) : (ye.sibling = wn),
          (ye = wn),
          (I = fe));
      }
      if (ve.done) return (n(j, I), me && Oi(j, se), $);
      if (I === null) {
        for (; !ve.done; se++, ve = O.next())
          ((ve = H(j, ve.value, B)),
            ve !== null &&
              ((C = f(ve, C, se)),
              ye === null ? ($ = ve) : (ye.sibling = ve),
              (ye = ve)));
        return (me && Oi(j, se), $);
      }
      for (I = o(I); !ve.done; se++, ve = O.next())
        ((ve = k(I, j, se, ve.value, B)),
          ve !== null &&
            (e &&
              ve.alternate !== null &&
              I.delete(ve.key === null ? se : ve.key),
            (C = f(ve, C, se)),
            ye === null ? ($ = ve) : (ye.sibling = ve),
            (ye = ve)));
      return (
        e &&
          I.forEach(function ($0) {
            return t(j, $0);
          }),
        me && Oi(j, se),
        $
      );
    }
    function Ee(j, C, O, B) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === M &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case z:
            e: {
              for (var $ = O.key; C !== null; ) {
                if (C.key === $) {
                  if ((($ = O.type), $ === M)) {
                    if (C.tag === 7) {
                      (n(j, C.sibling),
                        (B = c(C, O.props.children)),
                        (B.return = j),
                        (j = B));
                      break e;
                    }
                  } else if (
                    C.elementType === $ ||
                    (typeof $ == "object" &&
                      $ !== null &&
                      $.$$typeof === he &&
                      Yn($) === C.type)
                  ) {
                    (n(j, C.sibling),
                      (B = c(C, O.props)),
                      Hl(B, O),
                      (B.return = j),
                      (j = B));
                    break e;
                  }
                  n(j, C);
                  break;
                } else t(j, C);
                C = C.sibling;
              }
              O.type === M
                ? ((B = Un(O.props.children, j.mode, B, O.key)),
                  (B.return = j),
                  (j = B))
                : ((B = Ps(O.type, O.key, O.props, null, j.mode, B)),
                  Hl(B, O),
                  (B.return = j),
                  (j = B));
            }
            return g(j);
          case T:
            e: {
              for ($ = O.key; C !== null; ) {
                if (C.key === $)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === O.containerInfo &&
                    C.stateNode.implementation === O.implementation
                  ) {
                    (n(j, C.sibling),
                      (B = c(C, O.children || [])),
                      (B.return = j),
                      (j = B));
                    break e;
                  } else {
                    n(j, C);
                    break;
                  }
                else t(j, C);
                C = C.sibling;
              }
              ((B = oc(O, j.mode, B)), (B.return = j), (j = B));
            }
            return g(j);
          case he:
            return ((O = Yn(O)), Ee(j, C, O, B));
        }
        if (Fe(O)) return P(j, C, O, B);
        if (Le(O)) {
          if ((($ = Le(O)), typeof $ != "function")) throw Error(s(150));
          return ((O = $.call(O)), ee(j, C, O, B));
        }
        if (typeof O.then == "function") return Ee(j, C, to(O), B);
        if (O.$$typeof === Y) return Ee(j, C, Js(j, O), B);
        io(j, O);
      }
      return (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
        ? ((O = "" + O),
          C !== null && C.tag === 6
            ? (n(j, C.sibling), (B = c(C, O)), (B.return = j), (j = B))
            : (n(j, C), (B = sc(O, j.mode, B)), (B.return = j), (j = B)),
          g(j))
        : n(j, C);
    }
    return function (j, C, O, B) {
      try {
        Bl = 0;
        var $ = Ee(j, C, O, B);
        return ((Ra = null), $);
      } catch (I) {
        if (I === Oa || I === Ws) throw I;
        var ye = Lt(29, I, null, j.mode);
        return ((ye.lanes = B), (ye.return = j), ye);
      } finally {
      }
    };
  }
  var Xn = dh(!0),
    hh = dh(!1),
    an = !1;
  function bc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function xc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function ln(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sn(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (xe & 2) !== 0)) {
      var c = o.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (o.pending = t),
        (t = Zs(e)),
        Id(e, null, n),
        t
      );
    }
    return (Fs(e, o, t, n), Zs(e));
  }
  function ql(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (n |= o), (t.lanes = n), ad(e, n));
    }
  }
  function wc(e, t) {
    var n = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), n === o)) {
      var c = null,
        f = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var g = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (f === null ? (c = f = g) : (f = f.next = g), (n = n.next));
        } while (n !== null);
        f === null ? (c = f = t) : (f = f.next = t);
      } else c = f = t;
      ((n = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Sc = !1;
  function Vl() {
    if (Sc) {
      var e = Da;
      if (e !== null) throw e;
    }
  }
  function Yl(e, t, n, o) {
    Sc = !1;
    var c = e.updateQueue;
    an = !1;
    var f = c.firstBaseUpdate,
      g = c.lastBaseUpdate,
      v = c.shared.pending;
    if (v !== null) {
      c.shared.pending = null;
      var S = v,
        R = S.next;
      ((S.next = null), g === null ? (f = R) : (g.next = R), (g = S));
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (v = L.lastBaseUpdate),
        v !== g &&
          (v === null ? (L.firstBaseUpdate = R) : (v.next = R),
          (L.lastBaseUpdate = S)));
    }
    if (f !== null) {
      var H = c.baseState;
      ((g = 0), (L = R = S = null), (v = f));
      do {
        var N = v.lane & -536870913,
          k = N !== v.lane;
        if (k ? (ue & N) === N : (o & N) === N) {
          (N !== 0 && N === Ma && (Sc = !0),
            L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var P = e,
              ee = v;
            N = t;
            var Ee = n;
            switch (ee.tag) {
              case 1:
                if (((P = ee.payload), typeof P == "function")) {
                  H = P.call(Ee, H, N);
                  break e;
                }
                H = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = ee.payload),
                  (N = typeof P == "function" ? P.call(Ee, H, N) : P),
                  N == null)
                )
                  break e;
                H = b({}, H, N);
                break e;
              case 2:
                an = !0;
            }
          }
          ((N = v.callback),
            N !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = c.callbacks),
              k === null ? (c.callbacks = [N]) : k.push(N)));
        } else
          ((k = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            L === null ? ((R = L = k), (S = H)) : (L = L.next = k),
            (g |= N));
        if (((v = v.next), v === null)) {
          if (((v = c.shared.pending), v === null)) break;
          ((k = v),
            (v = k.next),
            (k.next = null),
            (c.lastBaseUpdate = k),
            (c.shared.pending = null));
        }
      } while (!0);
      (L === null && (S = H),
        (c.baseState = S),
        (c.firstBaseUpdate = R),
        (c.lastBaseUpdate = L),
        f === null && (c.shared.lanes = 0),
        (fn |= g),
        (e.lanes = g),
        (e.memoizedState = H));
    }
  }
  function mh(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function ph(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) mh(n[e], t);
  }
  var Na = _(null),
    no = _(0);
  function gh(e, t) {
    ((e = Yi), F(no, e), F(Na, t), (Yi = e | t.baseLanes));
  }
  function zc() {
    (F(no, Yi), F(Na, Na.current));
  }
  function Cc() {
    ((Yi = no.current), V(Na), V(no));
  }
  var Ut = _(null),
    Wt = null;
  function on(e) {
    var t = e.alternate;
    (F(Ye, Ye.current & 1),
      F(Ut, e),
      Wt === null &&
        (t === null || Na.current !== null || t.memoizedState !== null) &&
        (Wt = e));
  }
  function _c(e) {
    (F(Ye, Ye.current), F(Ut, e), Wt === null && (Wt = e));
  }
  function yh(e) {
    e.tag === 22
      ? (F(Ye, Ye.current), F(Ut, e), Wt === null && (Wt = e))
      : rn();
  }
  function rn() {
    (F(Ye, Ye.current), F(Ut, Ut.current));
  }
  function Bt(e) {
    (V(Ut), Wt === e && (Wt = null), V(Ye));
  }
  var Ye = _(0);
  function ao(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Ou(n) || Ru(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Ai = 0,
    le = null,
    _e = null,
    Pe = null,
    lo = !1,
    Aa = !1,
    Qn = !1,
    so = 0,
    Gl = 0,
    ka = null,
    Y1 = 0;
  function Be() {
    throw Error(s(321));
  }
  function Tc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function Ec(e, t, n, o, c, f) {
    return (
      (Ai = f),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (U.H = e === null || e.memoizedState === null ? em : Yc),
      (Qn = !1),
      (f = n(o, c)),
      (Qn = !1),
      Aa && (f = bh(t, n, o, c)),
      vh(e),
      f
    );
  }
  function vh(e) {
    U.H = Fl;
    var t = _e !== null && _e.next !== null;
    if (((Ai = 0), (Pe = _e = le = null), (lo = !1), (Gl = 0), (ka = null), t))
      throw Error(s(300));
    e === null ||
      Ke ||
      ((e = e.dependencies), e !== null && Is(e) && (Ke = !0));
  }
  function bh(e, t, n, o) {
    le = e;
    var c = 0;
    do {
      if ((Aa && (ka = null), (Gl = 0), (Aa = !1), 25 <= c))
        throw Error(s(301));
      if (((c += 1), (Pe = _e = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        ((f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0));
      }
      ((U.H = tm), (f = t(n, o)));
    } while (Aa);
    return f;
  }
  function G1() {
    var e = U.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Xl(t) : t),
      (e = e.useState()[0]),
      (_e !== null ? _e.memoizedState : null) !== e && (le.flags |= 1024),
      t
    );
  }
  function jc() {
    var e = so !== 0;
    return ((so = 0), e);
  }
  function Mc(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Dc(e) {
    if (lo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      lo = !1;
    }
    ((Ai = 0), (Pe = _e = le = null), (Aa = !1), (Gl = so = 0), (ka = null));
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Pe === null ? (le.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe);
  }
  function Ge() {
    if (_e === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = _e.next;
    var t = Pe === null ? le.memoizedState : Pe.next;
    if (t !== null) ((Pe = t), (_e = e));
    else {
      if (e === null)
        throw le.alternate === null ? Error(s(467)) : Error(s(310));
      ((_e = e),
        (e = {
          memoizedState: _e.memoizedState,
          baseState: _e.baseState,
          baseQueue: _e.baseQueue,
          queue: _e.queue,
          next: null,
        }),
        Pe === null ? (le.memoizedState = Pe = e) : (Pe = Pe.next = e));
    }
    return Pe;
  }
  function oo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xl(e) {
    var t = Gl;
    return (
      (Gl += 1),
      ka === null && (ka = []),
      (e = ch(ka, e, t)),
      (t = le),
      (Pe === null ? t.memoizedState : Pe.next) === null &&
        ((t = t.alternate),
        (U.H = t === null || t.memoizedState === null ? em : Yc)),
      e
    );
  }
  function ro(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Xl(e);
      if (e.$$typeof === Y) return rt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Oc(e) {
    var t = null,
      n = le.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var o = le.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (t = {
              data: o.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = oo()), (le.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), o = 0; o < e; o++) n[o] = ke;
    return (t.index++, n);
  }
  function ki(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function co(e) {
    var t = Ge();
    return Rc(t, _e, e);
  }
  function Rc(e, t, n) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = n;
    var c = e.baseQueue,
      f = o.pending;
    if (f !== null) {
      if (c !== null) {
        var g = c.next;
        ((c.next = f.next), (f.next = g));
      }
      ((t.baseQueue = c = f), (o.pending = null));
    }
    if (((f = e.baseState), c === null)) e.memoizedState = f;
    else {
      t = c.next;
      var v = (g = null),
        S = null,
        R = t,
        L = !1;
      do {
        var H = R.lane & -536870913;
        if (H !== R.lane ? (ue & H) === H : (Ai & H) === H) {
          var N = R.revertLane;
          if (N === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              H === Ma && (L = !0));
          else if ((Ai & N) === N) {
            ((R = R.next), N === Ma && (L = !0));
            continue;
          } else
            ((H = {
              lane: 0,
              revertLane: R.revertLane,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              S === null ? ((v = S = H), (g = f)) : (S = S.next = H),
              (le.lanes |= N),
              (fn |= N));
          ((H = R.action),
            Qn && n(f, H),
            (f = R.hasEagerState ? R.eagerState : n(f, H)));
        } else
          ((N = {
            lane: H,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            S === null ? ((v = S = N), (g = f)) : (S = S.next = N),
            (le.lanes |= H),
            (fn |= H));
        R = R.next;
      } while (R !== null && R !== t);
      if (
        (S === null ? (g = f) : (S.next = v),
        !kt(f, e.memoizedState) && ((Ke = !0), L && ((n = Da), n !== null)))
      )
        throw n;
      ((e.memoizedState = f),
        (e.baseState = g),
        (e.baseQueue = S),
        (o.lastRenderedState = f));
    }
    return (c === null && (o.lanes = 0), [e.memoizedState, o.dispatch]);
  }
  function Nc(e) {
    var t = Ge(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch,
      c = n.pending,
      f = t.memoizedState;
    if (c !== null) {
      n.pending = null;
      var g = (c = c.next);
      do ((f = e(f, g.action)), (g = g.next));
      while (g !== c);
      (kt(f, t.memoizedState) || (Ke = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (n.lastRenderedState = f));
    }
    return [f, o];
  }
  function xh(e, t, n) {
    var o = le,
      c = Ge(),
      f = me;
    if (f) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var g = !kt((_e || c).memoizedState, n);
    if (
      (g && ((c.memoizedState = n), (Ke = !0)),
      (c = c.queue),
      Lc(zh.bind(null, o, c, e), [e]),
      c.getSnapshot !== t || g || (Pe !== null && Pe.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        La(9, { destroy: void 0 }, Sh.bind(null, o, c, n, t), null),
        De === null)
      )
        throw Error(s(349));
      f || (Ai & 127) !== 0 || wh(o, t, n);
    }
    return n;
  }
  function wh(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = oo()), (le.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Sh(e, t, n, o) {
    ((t.value = n), (t.getSnapshot = o), Ch(t) && _h(e));
  }
  function zh(e, t, n) {
    return n(function () {
      Ch(t) && _h(e);
    });
  }
  function Ch(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function _h(e) {
    var t = Ln(e, 2);
    t !== null && Mt(t, e, 2);
  }
  function Ac(e) {
    var t = xt();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Qn)) {
        Ii(!0);
        try {
          n();
        } finally {
          Ii(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ki,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Th(e, t, n, o) {
    return ((e.baseState = n), Rc(e, _e, typeof o == "function" ? o : ki));
  }
  function X1(e, t, n, o, c) {
    if (ho(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          f.listeners.push(g);
        },
      };
      (U.T !== null ? n(!0) : (f.isTransition = !1),
        o(f),
        (n = t.pending),
        n === null
          ? ((f.next = t.pending = f), Eh(t, f))
          : ((f.next = n.next), (t.pending = n.next = f)));
    }
  }
  function Eh(e, t) {
    var n = t.action,
      o = t.payload,
      c = e.state;
    if (t.isTransition) {
      var f = U.T,
        g = {};
      U.T = g;
      try {
        var v = n(c, o),
          S = U.S;
        (S !== null && S(g, v), jh(e, t, v));
      } catch (R) {
        kc(e, t, R);
      } finally {
        (f !== null && g.types !== null && (f.types = g.types), (U.T = f));
      }
    } else
      try {
        ((f = n(c, o)), jh(e, t, f));
      } catch (R) {
        kc(e, t, R);
      }
  }
  function jh(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (o) {
            Mh(e, t, o);
          },
          function (o) {
            return kc(e, t, o);
          },
        )
      : Mh(e, t, n);
  }
  function Mh(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      Dh(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Eh(e, n))));
  }
  function kc(e, t, n) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do ((t.status = "rejected"), (t.reason = n), Dh(t), (t = t.next));
      while (t !== o);
    }
    e.action = null;
  }
  function Dh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Oh(e, t) {
    return t;
  }
  function Rh(e, t) {
    if (me) {
      var n = De.formState;
      if (n !== null) {
        e: {
          var o = le;
          if (me) {
            if (Re) {
              t: {
                for (var c = Re, f = $t; c.nodeType !== 8; ) {
                  if (!f) {
                    c = null;
                    break t;
                  }
                  if (((c = ei(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                ((f = c.data), (c = f === "F!" || f === "F" ? c : null));
              }
              if (c) {
                ((Re = ei(c.nextSibling)), (o = c.data === "F!"));
                break e;
              }
            }
            tn(o);
          }
          o = !1;
        }
        o && (t = n[0]);
      }
    }
    return (
      (n = xt()),
      (n.memoizedState = n.baseState = t),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Oh,
        lastRenderedState: t,
      }),
      (n.queue = o),
      (n = Jh.bind(null, le, o)),
      (o.dispatch = n),
      (o = Ac(!1)),
      (f = Vc.bind(null, le, !1, o.queue)),
      (o = xt()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (o.queue = c),
      (n = X1.bind(null, le, c, f, n)),
      (c.dispatch = n),
      (o.memoizedState = e),
      [t, n, !1]
    );
  }
  function Nh(e) {
    var t = Ge();
    return Ah(t, _e, e);
  }
  function Ah(e, t, n) {
    if (
      ((t = Rc(e, t, Oh)[0]),
      (e = co(ki)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var o = Xl(t);
      } catch (g) {
        throw g === Oa ? Ws : g;
      }
    else o = t;
    t = Ge();
    var c = t.queue,
      f = c.dispatch;
    return (
      n !== t.memoizedState &&
        ((le.flags |= 2048),
        La(9, { destroy: void 0 }, Q1.bind(null, c, n), null)),
      [o, f, e]
    );
  }
  function Q1(e, t) {
    e.action = t;
  }
  function kh(e) {
    var t = Ge(),
      n = _e;
    if (n !== null) return Ah(t, n, e);
    (Ge(), (t = t.memoizedState), (n = Ge()));
    var o = n.queue.dispatch;
    return ((n.memoizedState = e), [t, o, !1]);
  }
  function La(e, t, n, o) {
    return (
      (e = { tag: e, create: n, deps: o, inst: t, next: null }),
      (t = le.updateQueue),
      t === null && ((t = oo()), (le.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((o = n.next), (n.next = e), (e.next = o), (t.lastEffect = e)),
      e
    );
  }
  function Lh() {
    return Ge().memoizedState;
  }
  function uo(e, t, n, o) {
    var c = xt();
    ((le.flags |= e),
      (c.memoizedState = La(
        1 | t,
        { destroy: void 0 },
        n,
        o === void 0 ? null : o,
      )));
  }
  function fo(e, t, n, o) {
    var c = Ge();
    o = o === void 0 ? null : o;
    var f = c.memoizedState.inst;
    _e !== null && o !== null && Tc(o, _e.memoizedState.deps)
      ? (c.memoizedState = La(t, f, n, o))
      : ((le.flags |= e), (c.memoizedState = La(1 | t, f, n, o)));
  }
  function Uh(e, t) {
    uo(8390656, 8, e, t);
  }
  function Lc(e, t) {
    fo(2048, 8, e, t);
  }
  function F1(e) {
    le.flags |= 4;
    var t = le.updateQueue;
    if (t === null) ((t = oo()), (le.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Bh(e) {
    var t = Ge().memoizedState;
    return (
      F1({ ref: t, nextImpl: e }),
      function () {
        if ((xe & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Hh(e, t) {
    return fo(4, 2, e, t);
  }
  function qh(e, t) {
    return fo(4, 4, e, t);
  }
  function Vh(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Yh(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), fo(4, 4, Vh.bind(null, t, e), n));
  }
  function Uc() {}
  function Gh(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return t !== null && Tc(t, o[1]) ? o[0] : ((n.memoizedState = [e, t]), e);
  }
  function Xh(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    if (t !== null && Tc(t, o[1])) return o[0];
    if (((o = e()), Qn)) {
      Ii(!0);
      try {
        e();
      } finally {
        Ii(!1);
      }
    }
    return ((n.memoizedState = [o, t]), o);
  }
  function Bc(e, t, n) {
    return n === void 0 || ((Ai & 1073741824) !== 0 && (ue & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Qm()), (le.lanes |= e), (fn |= e), n);
  }
  function Qh(e, t, n, o) {
    return kt(n, t)
      ? n
      : Na.current !== null
        ? ((e = Bc(e, n, o)), kt(e, t) || (Ke = !0), e)
        : (Ai & 42) === 0 || ((Ai & 1073741824) !== 0 && (ue & 261930) === 0)
          ? ((Ke = !0), (e.memoizedState = n))
          : ((e = Qm()), (le.lanes |= e), (fn |= e), t);
  }
  function Fh(e, t, n, o, c) {
    var f = Q.p;
    Q.p = f !== 0 && 8 > f ? f : 8;
    var g = U.T,
      v = {};
    ((U.T = v), Vc(e, !1, t, n));
    try {
      var S = c(),
        R = U.S;
      if (
        (R !== null && R(v, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var L = V1(S, o);
        Ql(e, t, L, Vt(e));
      } else Ql(e, t, o, Vt(e));
    } catch (H) {
      Ql(e, t, { then: function () {}, status: "rejected", reason: H }, Vt());
    } finally {
      ((Q.p = f),
        g !== null && v.types !== null && (g.types = v.types),
        (U.T = g));
    }
  }
  function Z1() {}
  function Hc(e, t, n, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Zh(e).queue;
    Fh(
      e,
      c,
      t,
      ie,
      n === null
        ? Z1
        : function () {
            return (Ph(e), n(o));
          },
    );
  }
  function Zh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ki,
        lastRenderedState: ie,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ki,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Ph(e) {
    var t = Zh(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Ql(e, t.next.queue, {}, Vt()));
  }
  function qc() {
    return rt(rs);
  }
  function Kh() {
    return Ge().memoizedState;
  }
  function Ih() {
    return Ge().memoizedState;
  }
  function P1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Vt();
          e = ln(n);
          var o = sn(t, e, n);
          (o !== null && (Mt(o, t, n), ql(o, t, n)),
            (t = { cache: pc() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function K1(e, t, n) {
    var o = Vt();
    ((n = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ho(e)
        ? $h(t, n)
        : ((n = ac(e, t, n, o)), n !== null && (Mt(n, e, o), Wh(n, t, o))));
  }
  function Jh(e, t, n) {
    var o = Vt();
    Ql(e, t, n, o);
  }
  function Ql(e, t, n, o) {
    var c = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ho(e)) $h(t, c);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var g = t.lastRenderedState,
            v = f(g, n);
          if (((c.hasEagerState = !0), (c.eagerState = v), kt(v, g)))
            return (Fs(e, t, c, 0), De === null && Qs(), !1);
        } catch {
        } finally {
        }
      if (((n = ac(e, t, c, o)), n !== null))
        return (Mt(n, e, o), Wh(n, t, o), !0);
    }
    return !1;
  }
  function Vc(e, t, n, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: bu(),
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ho(e))
    ) {
      if (t) throw Error(s(479));
    } else ((t = ac(e, n, o, 2)), t !== null && Mt(t, e, 2));
  }
  function ho(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function $h(e, t) {
    Aa = lo = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Wh(e, t, n) {
    if ((n & 4194048) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (n |= o), (t.lanes = n), ad(e, n));
    }
  }
  var Fl = {
    readContext: rt,
    use: ro,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useLayoutEffect: Be,
    useInsertionEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useSyncExternalStore: Be,
    useId: Be,
    useHostTransitionStatus: Be,
    useFormState: Be,
    useActionState: Be,
    useOptimistic: Be,
    useMemoCache: Be,
    useCacheRefresh: Be,
  };
  Fl.useEffectEvent = Be;
  var em = {
      readContext: rt,
      use: ro,
      useCallback: function (e, t) {
        return ((xt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: rt,
      useEffect: Uh,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          uo(4194308, 4, Vh.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return uo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        uo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = xt();
        t = t === void 0 ? null : t;
        var o = e();
        if (Qn) {
          Ii(!0);
          try {
            e();
          } finally {
            Ii(!1);
          }
        }
        return ((n.memoizedState = [o, t]), o);
      },
      useReducer: function (e, t, n) {
        var o = xt();
        if (n !== void 0) {
          var c = n(t);
          if (Qn) {
            Ii(!0);
            try {
              n(t);
            } finally {
              Ii(!1);
            }
          }
        } else c = t;
        return (
          (o.memoizedState = o.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (o.queue = e),
          (e = e.dispatch = K1.bind(null, le, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Ac(e);
        var t = e.queue,
          n = Jh.bind(null, le, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Uc,
      useDeferredValue: function (e, t) {
        var n = xt();
        return Bc(n, e, t);
      },
      useTransition: function () {
        var e = Ac(!1);
        return (
          (e = Fh.bind(null, le, e.queue, !0, !1)),
          (xt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var o = le,
          c = xt();
        if (me) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), De === null)) throw Error(s(349));
          (ue & 127) !== 0 || wh(o, t, n);
        }
        c.memoizedState = n;
        var f = { value: n, getSnapshot: t };
        return (
          (c.queue = f),
          Uh(zh.bind(null, o, f, e), [e]),
          (o.flags |= 2048),
          La(9, { destroy: void 0 }, Sh.bind(null, o, f, n, t), null),
          n
        );
      },
      useId: function () {
        var e = xt(),
          t = De.identifierPrefix;
        if (me) {
          var n = yi,
            o = gi;
          ((n = (o & ~(1 << (32 - At(o) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = so++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = Y1++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: qc,
      useFormState: Rh,
      useActionState: Rh,
      useOptimistic: function (e) {
        var t = xt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Vc.bind(null, le, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Oc,
      useCacheRefresh: function () {
        return (xt().memoizedState = P1.bind(null, le));
      },
      useEffectEvent: function (e) {
        var t = xt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((xe & 2) !== 0) throw Error(s(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Yc = {
      readContext: rt,
      use: ro,
      useCallback: Gh,
      useContext: rt,
      useEffect: Lc,
      useImperativeHandle: Yh,
      useInsertionEffect: Hh,
      useLayoutEffect: qh,
      useMemo: Xh,
      useReducer: co,
      useRef: Lh,
      useState: function () {
        return co(ki);
      },
      useDebugValue: Uc,
      useDeferredValue: function (e, t) {
        var n = Ge();
        return Qh(n, _e.memoizedState, e, t);
      },
      useTransition: function () {
        var e = co(ki)[0],
          t = Ge().memoizedState;
        return [typeof e == "boolean" ? e : Xl(e), t];
      },
      useSyncExternalStore: xh,
      useId: Kh,
      useHostTransitionStatus: qc,
      useFormState: Nh,
      useActionState: Nh,
      useOptimistic: function (e, t) {
        var n = Ge();
        return Th(n, _e, e, t);
      },
      useMemoCache: Oc,
      useCacheRefresh: Ih,
    };
  Yc.useEffectEvent = Bh;
  var tm = {
    readContext: rt,
    use: ro,
    useCallback: Gh,
    useContext: rt,
    useEffect: Lc,
    useImperativeHandle: Yh,
    useInsertionEffect: Hh,
    useLayoutEffect: qh,
    useMemo: Xh,
    useReducer: Nc,
    useRef: Lh,
    useState: function () {
      return Nc(ki);
    },
    useDebugValue: Uc,
    useDeferredValue: function (e, t) {
      var n = Ge();
      return _e === null ? Bc(n, e, t) : Qh(n, _e.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Nc(ki)[0],
        t = Ge().memoizedState;
      return [typeof e == "boolean" ? e : Xl(e), t];
    },
    useSyncExternalStore: xh,
    useId: Kh,
    useHostTransitionStatus: qc,
    useFormState: kh,
    useActionState: kh,
    useOptimistic: function (e, t) {
      var n = Ge();
      return _e !== null
        ? Th(n, _e, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Oc,
    useCacheRefresh: Ih,
  };
  tm.useEffectEvent = Bh;
  function Gc(e, t, n, o) {
    ((t = e.memoizedState),
      (n = n(o, t)),
      (n = n == null ? t : b({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Xc = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var o = Vt(),
        c = ln(o);
      ((c.payload = t),
        n != null && (c.callback = n),
        (t = sn(e, c, o)),
        t !== null && (Mt(t, e, o), ql(t, e, o)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var o = Vt(),
        c = ln(o);
      ((c.tag = 1),
        (c.payload = t),
        n != null && (c.callback = n),
        (t = sn(e, c, o)),
        t !== null && (Mt(t, e, o), ql(t, e, o)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Vt(),
        o = ln(n);
      ((o.tag = 2),
        t != null && (o.callback = t),
        (t = sn(e, o, n)),
        t !== null && (Mt(t, e, n), ql(t, e, n)));
    },
  };
  function im(e, t, n, o, c, f, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, f, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Rl(n, o) || !Rl(c, f)
          : !0
    );
  }
  function nm(e, t, n, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, o),
      t.state !== e && Xc.enqueueReplaceState(t, t.state, null));
  }
  function Fn(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var o in t) o !== "ref" && (n[o] = t[o]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = b({}, n));
      for (var c in e) n[c] === void 0 && (n[c] = e[c]);
    }
    return n;
  }
  function am(e) {
    Xs(e);
  }
  function lm(e) {
    console.error(e);
  }
  function sm(e) {
    Xs(e);
  }
  function mo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function om(e, t, n) {
    try {
      var o = e.onCaughtError;
      o(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Qc(e, t, n) {
    return (
      (n = ln(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        mo(e, t);
      }),
      n
    );
  }
  function rm(e) {
    return ((e = ln(e)), (e.tag = 3), e);
  }
  function cm(e, t, n, o) {
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var f = o.value;
      ((e.payload = function () {
        return c(f);
      }),
        (e.callback = function () {
          om(t, n, o);
        }));
    }
    var g = n.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        (om(t, n, o),
          typeof c != "function" &&
            (dn === null ? (dn = new Set([this])) : dn.add(this)));
        var v = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function I1(e, t, n, o, c) {
    if (
      ((n.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && ja(t, n, c, !0),
        (n = Ut.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Wt === null ? To() : n.alternate === null && He === 0 && (He = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = c),
              o === eo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([o])) : t.add(o),
                  gu(e, o, c)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              o === eo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([o])) : n.add(o)),
                  gu(e, o, c)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return (gu(e, o, c), To(), !1);
    }
    if (me)
      return (
        (t = Ut.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            o !== uc && ((e = Error(s(422), { cause: o })), kl(Kt(e, n))))
          : (o !== uc && ((t = Error(s(423), { cause: o })), kl(Kt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (o = Kt(o, n)),
            (c = Qc(e.stateNode, o, c)),
            wc(e, c),
            He !== 4 && (He = 2)),
        !1
      );
    var f = Error(s(520), { cause: o });
    if (
      ((f = Kt(f, n)),
      es === null ? (es = [f]) : es.push(f),
      He !== 4 && (He = 2),
      t === null)
    )
      return !0;
    ((o = Kt(o, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = c & -c),
            (n.lanes |= e),
            (e = Qc(n.stateNode, o, e)),
            wc(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (f = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (dn === null || !dn.has(f)))))
          )
            return (
              (n.flags |= 65536),
              (c &= -c),
              (n.lanes |= c),
              (c = rm(c)),
              cm(c, e, n, o),
              wc(n, c),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Fc = Error(s(461)),
    Ke = !1;
  function ct(e, t, n, o) {
    t.child = e === null ? hh(t, null, n, o) : Xn(t, e.child, n, o);
  }
  function um(e, t, n, o, c) {
    n = n.render;
    var f = t.ref;
    if ("ref" in o) {
      var g = {};
      for (var v in o) v !== "ref" && (g[v] = o[v]);
    } else g = o;
    return (
      qn(t),
      (o = Ec(e, t, n, g, f, c)),
      (v = jc()),
      e !== null && !Ke
        ? (Mc(e, t, c), Li(e, t, c))
        : (me && v && rc(t), (t.flags |= 1), ct(e, t, o, c), t.child)
    );
  }
  function fm(e, t, n, o, c) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" &&
        !lc(f) &&
        f.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = f), dm(e, t, f, o, c))
        : ((e = Ps(n.type, null, o, t, t.mode, c)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), !eu(e, c))) {
      var g = f.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Rl), n(g, o) && e.ref === t.ref)
      )
        return Li(e, t, c);
    }
    return (
      (t.flags |= 1),
      (e = Di(f, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function dm(e, t, n, o, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Rl(f, o) && e.ref === t.ref)
        if (((Ke = !1), (t.pendingProps = o = f), eu(e, c)))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else return ((t.lanes = e.lanes), Li(e, t, c));
    }
    return Zc(e, t, n, o, c);
  }
  function hm(e, t, n, o) {
    var c = o.children,
      f = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      o.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | n : n), e !== null)) {
          for (o = t.child = e.child, c = 0; o !== null; )
            ((c = c | o.lanes | o.childLanes), (o = o.sibling));
          o = c & ~f;
        } else ((o = 0), (t.child = null));
        return mm(e, t, f, n, o);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && $s(t, f !== null ? f.cachePool : null),
          f !== null ? gh(t, f) : zc(),
          yh(t));
      else
        return (
          (o = t.lanes = 536870912),
          mm(e, t, f !== null ? f.baseLanes | n : n, n, o)
        );
    } else
      f !== null
        ? ($s(t, f.cachePool), gh(t, f), rn(), (t.memoizedState = null))
        : (e !== null && $s(t, null), zc(), rn());
    return (ct(e, t, c, n), t.child);
  }
  function Zl(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function mm(e, t, n, o, c) {
    var f = yc();
    return (
      (f = f === null ? null : { parent: Ze._currentValue, pool: f }),
      (t.memoizedState = { baseLanes: n, cachePool: f }),
      e !== null && $s(t, null),
      zc(),
      yh(t),
      e !== null && ja(e, t, o, !0),
      (t.childLanes = c),
      null
    );
  }
  function po(e, t) {
    return (
      (t = yo({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function pm(e, t, n) {
    return (
      Xn(t, e.child, null, n),
      (e = po(t, t.pendingProps)),
      (e.flags |= 2),
      Bt(t),
      (t.memoizedState = null),
      e
    );
  }
  function J1(e, t, n) {
    var o = t.pendingProps,
      c = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (me) {
        if (o.mode === "hidden")
          return ((e = po(t, o)), (t.lanes = 536870912), Zl(null, e));
        if (
          (_c(t),
          (e = Re)
            ? ((e = Ep(e, $t)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Wi !== null ? { id: gi, overflow: yi } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = $d(e)),
                (n.return = t),
                (t.child = n),
                (ot = t),
                (Re = null)))
            : (e = null),
          e === null)
        )
          throw tn(t);
        return ((t.lanes = 536870912), null);
      }
      return po(t, o);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var g = f.dehydrated;
      if ((_c(t), c))
        if (t.flags & 256) ((t.flags &= -257), (t = pm(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(s(558));
      else if (
        (Ke || ja(e, t, n, !1), (c = (n & e.childLanes) !== 0), Ke || c)
      ) {
        if (
          ((o = De),
          o !== null && ((g = ld(o, n)), g !== 0 && g !== f.retryLane))
        )
          throw ((f.retryLane = g), Ln(e, g), Mt(o, e, g), Fc);
        (To(), (t = pm(e, t, n)));
      } else
        ((e = f.treeContext),
          (Re = ei(g.nextSibling)),
          (ot = t),
          (me = !0),
          (en = null),
          ($t = !1),
          e !== null && th(t, e),
          (t = po(t, o)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Di(e.child, { mode: o.mode, children: o.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function go(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Zc(e, t, n, o, c) {
    return (
      qn(t),
      (n = Ec(e, t, n, o, void 0, c)),
      (o = jc()),
      e !== null && !Ke
        ? (Mc(e, t, c), Li(e, t, c))
        : (me && o && rc(t), (t.flags |= 1), ct(e, t, n, c), t.child)
    );
  }
  function gm(e, t, n, o, c, f) {
    return (
      qn(t),
      (t.updateQueue = null),
      (n = bh(t, o, n, c)),
      vh(e),
      (o = jc()),
      e !== null && !Ke
        ? (Mc(e, t, f), Li(e, t, f))
        : (me && o && rc(t), (t.flags |= 1), ct(e, t, n, f), t.child)
    );
  }
  function ym(e, t, n, o, c) {
    if ((qn(t), t.stateNode === null)) {
      var f = Ca,
        g = n.contextType;
      (typeof g == "object" && g !== null && (f = rt(g)),
        (f = new n(o, f)),
        (t.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Xc),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = o),
        (f.state = t.memoizedState),
        (f.refs = {}),
        bc(t),
        (g = n.contextType),
        (f.context = typeof g == "object" && g !== null ? rt(g) : Ca),
        (f.state = t.memoizedState),
        (g = n.getDerivedStateFromProps),
        typeof g == "function" && (Gc(t, n, g, o), (f.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((g = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          g !== f.state && Xc.enqueueReplaceState(f, f.state, null),
          Yl(t, o, f, c),
          Vl(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308),
        (o = !0));
    } else if (e === null) {
      f = t.stateNode;
      var v = t.memoizedProps,
        S = Fn(n, v);
      f.props = S;
      var R = f.context,
        L = n.contextType;
      ((g = Ca), typeof L == "object" && L !== null && (g = rt(L)));
      var H = n.getDerivedStateFromProps;
      ((L =
        typeof H == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (v = t.pendingProps !== v),
        L ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((v || R !== g) && nm(t, f, o, g)),
        (an = !1));
      var N = t.memoizedState;
      ((f.state = N),
        Yl(t, o, f, c),
        Vl(),
        (R = t.memoizedState),
        v || N !== R || an
          ? (typeof H == "function" && (Gc(t, n, H, o), (R = t.memoizedState)),
            (S = an || im(t, n, S, o, N, R, g))
              ? (L ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = R)),
            (f.props = o),
            (f.state = R),
            (f.context = g),
            (o = S))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (o = !1)));
    } else {
      ((f = t.stateNode),
        xc(e, t),
        (g = t.memoizedProps),
        (L = Fn(n, g)),
        (f.props = L),
        (H = t.pendingProps),
        (N = f.context),
        (R = n.contextType),
        (S = Ca),
        typeof R == "object" && R !== null && (S = rt(R)),
        (v = n.getDerivedStateFromProps),
        (R =
          typeof v == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((g !== H || N !== S) && nm(t, f, o, S)),
        (an = !1),
        (N = t.memoizedState),
        (f.state = N),
        Yl(t, o, f, c),
        Vl());
      var k = t.memoizedState;
      g !== H ||
      N !== k ||
      an ||
      (e !== null && e.dependencies !== null && Is(e.dependencies))
        ? (typeof v == "function" && (Gc(t, n, v, o), (k = t.memoizedState)),
          (L =
            an ||
            im(t, n, L, o, N, k, S) ||
            (e !== null && e.dependencies !== null && Is(e.dependencies)))
            ? (R ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(o, k, S),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(o, k, S)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (g === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = k)),
          (f.props = o),
          (f.state = k),
          (f.context = S),
          (o = L))
        : (typeof f.componentDidUpdate != "function" ||
            (g === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return (
      (f = o),
      go(e, t),
      (o = (t.flags & 128) !== 0),
      f || o
        ? ((f = t.stateNode),
          (n =
            o && typeof n.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (t.flags |= 1),
          e !== null && o
            ? ((t.child = Xn(t, e.child, null, c)),
              (t.child = Xn(t, null, n, c)))
            : ct(e, t, n, c),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = Li(e, t, c)),
      e
    );
  }
  function vm(e, t, n, o) {
    return (Bn(), (t.flags |= 256), ct(e, t, n, o), t.child);
  }
  var Pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Kc(e) {
    return { baseLanes: e, cachePool: oh() };
  }
  function Ic(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= qt), e);
  }
  function bm(e, t, n) {
    var o = t.pendingProps,
      c = !1,
      f = (t.flags & 128) !== 0,
      g;
    if (
      ((g = f) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : (Ye.current & 2) !== 0),
      g && ((c = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (me) {
        if (
          (c ? on(t) : rn(),
          (e = Re)
            ? ((e = Ep(e, $t)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Wi !== null ? { id: gi, overflow: yi } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = $d(e)),
                (n.return = t),
                (t.child = n),
                (ot = t),
                (Re = null)))
            : (e = null),
          e === null)
        )
          throw tn(t);
        return (Ru(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var v = o.children;
      return (
        (o = o.fallback),
        c
          ? (rn(),
            (c = t.mode),
            (v = yo({ mode: "hidden", children: v }, c)),
            (o = Un(o, c, n, null)),
            (v.return = t),
            (o.return = t),
            (v.sibling = o),
            (t.child = v),
            (o = t.child),
            (o.memoizedState = Kc(n)),
            (o.childLanes = Ic(e, g, n)),
            (t.memoizedState = Pc),
            Zl(null, o))
          : (on(t), Jc(t, v))
      );
    }
    var S = e.memoizedState;
    if (S !== null && ((v = S.dehydrated), v !== null)) {
      if (f)
        t.flags & 256
          ? (on(t), (t.flags &= -257), (t = $c(e, t, n)))
          : t.memoizedState !== null
            ? (rn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (rn(),
              (v = o.fallback),
              (c = t.mode),
              (o = yo({ mode: "visible", children: o.children }, c)),
              (v = Un(v, c, n, null)),
              (v.flags |= 2),
              (o.return = t),
              (v.return = t),
              (o.sibling = v),
              (t.child = o),
              Xn(t, e.child, null, n),
              (o = t.child),
              (o.memoizedState = Kc(n)),
              (o.childLanes = Ic(e, g, n)),
              (t.memoizedState = Pc),
              (t = Zl(null, o)));
      else if ((on(t), Ru(v))) {
        if (((g = v.nextSibling && v.nextSibling.dataset), g)) var R = g.dgst;
        ((g = R),
          (o = Error(s(419))),
          (o.stack = ""),
          (o.digest = g),
          kl({ value: o, source: null, stack: null }),
          (t = $c(e, t, n)));
      } else if (
        (Ke || ja(e, t, n, !1), (g = (n & e.childLanes) !== 0), Ke || g)
      ) {
        if (
          ((g = De),
          g !== null && ((o = ld(g, n)), o !== 0 && o !== S.retryLane))
        )
          throw ((S.retryLane = o), Ln(e, o), Mt(g, e, o), Fc);
        (Ou(v) || To(), (t = $c(e, t, n)));
      } else
        Ou(v)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (Re = ei(v.nextSibling)),
            (ot = t),
            (me = !0),
            (en = null),
            ($t = !1),
            e !== null && th(t, e),
            (t = Jc(t, o.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (rn(),
        (v = o.fallback),
        (c = t.mode),
        (S = e.child),
        (R = S.sibling),
        (o = Di(S, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = S.subtreeFlags & 65011712),
        R !== null ? (v = Di(R, v)) : ((v = Un(v, c, n, null)), (v.flags |= 2)),
        (v.return = t),
        (o.return = t),
        (o.sibling = v),
        (t.child = o),
        Zl(null, o),
        (o = t.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = Kc(n))
          : ((c = v.cachePool),
            c !== null
              ? ((S = Ze._currentValue),
                (c = c.parent !== S ? { parent: S, pool: S } : c))
              : (c = oh()),
            (v = { baseLanes: v.baseLanes | n, cachePool: c })),
        (o.memoizedState = v),
        (o.childLanes = Ic(e, g, n)),
        (t.memoizedState = Pc),
        Zl(e.child, o))
      : (on(t),
        (n = e.child),
        (e = n.sibling),
        (n = Di(n, { mode: "visible", children: o.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((g = t.deletions),
          g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Jc(e, t) {
    return (
      (t = yo({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function yo(e, t) {
    return ((e = Lt(22, e, null, t)), (e.lanes = 0), e);
  }
  function $c(e, t, n) {
    return (
      Xn(t, e.child, null, n),
      (e = Jc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function xm(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), hc(e.return, t, n));
  }
  function Wc(e, t, n, o, c, f) {
    var g = e.memoizedState;
    g === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: n,
          tailMode: c,
          treeForkCount: f,
        })
      : ((g.isBackwards = t),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = o),
        (g.tail = n),
        (g.tailMode = c),
        (g.treeForkCount = f));
  }
  function wm(e, t, n) {
    var o = t.pendingProps,
      c = o.revealOrder,
      f = o.tail;
    o = o.children;
    var g = Ye.current,
      v = (g & 2) !== 0;
    if (
      (v ? ((g = (g & 1) | 2), (t.flags |= 128)) : (g &= 1),
      F(Ye, g),
      ct(e, t, o, n),
      (o = me ? Al : 0),
      !v && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xm(e, n, t);
        else if (e.tag === 19) xm(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (c) {
      case "forwards":
        for (n = t.child, c = null; n !== null; )
          ((e = n.alternate),
            e !== null && ao(e) === null && (c = n),
            (n = n.sibling));
        ((n = c),
          n === null
            ? ((c = t.child), (t.child = null))
            : ((c = n.sibling), (n.sibling = null)),
          Wc(t, !1, c, n, f, o));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && ao(e) === null)) {
            t.child = c;
            break;
          }
          ((e = c.sibling), (c.sibling = n), (n = c), (c = e));
        }
        Wc(t, !0, n, null, f, o);
        break;
      case "together":
        Wc(t, !1, null, null, void 0, o);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Li(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (fn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ja(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Di(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Di(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function eu(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Is(e)));
  }
  function $1(e, t, n) {
    switch (t.tag) {
      case 3:
        (bt(t, t.stateNode.containerInfo),
          nn(t, Ze, e.memoizedState.cache),
          Bn());
        break;
      case 27:
      case 5:
        bl(t);
        break;
      case 4:
        bt(t, t.stateNode.containerInfo);
        break;
      case 10:
        nn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), _c(t), null);
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (on(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? bm(e, t, n)
              : (on(t), (e = Li(e, t, n)), e !== null ? e.sibling : null);
        on(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((o = (n & t.childLanes) !== 0),
          o || (ja(e, t, n, !1), (o = (n & t.childLanes) !== 0)),
          c)
        ) {
          if (o) return wm(e, t, n);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          F(Ye, Ye.current),
          o)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), hm(e, t, n, t.pendingProps));
      case 24:
        nn(t, Ze, e.memoizedState.cache);
    }
    return Li(e, t, n);
  }
  function Sm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ke = !0;
      else {
        if (!eu(e, n) && (t.flags & 128) === 0) return ((Ke = !1), $1(e, t, n));
        Ke = (e.flags & 131072) !== 0;
      }
    else ((Ke = !1), me && (t.flags & 1048576) !== 0 && eh(t, Al, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var o = t.pendingProps;
          if (((e = Yn(t.elementType)), (t.type = e), typeof e == "function"))
            lc(e)
              ? ((o = Fn(e, o)), (t.tag = 1), (t = ym(null, t, e, o, n)))
              : ((t.tag = 0), (t = Zc(null, t, e, o, n)));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === G) {
                ((t.tag = 11), (t = um(null, t, e, o, n)));
                break e;
              } else if (c === J) {
                ((t.tag = 14), (t = fm(null, t, e, o, n)));
                break e;
              }
            }
            throw ((t = Qe(e) || e), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return Zc(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((o = t.type), (c = Fn(o, t.pendingProps)), ym(e, t, o, c, n));
      case 3:
        e: {
          if ((bt(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          o = t.pendingProps;
          var f = t.memoizedState;
          ((c = f.element), xc(e, t), Yl(t, o, null, n));
          var g = t.memoizedState;
          if (
            ((o = g.cache),
            nn(t, Ze, o),
            o !== f.cache && mc(t, [Ze], n, !0),
            Vl(),
            (o = g.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: o, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = vm(e, t, o, n);
              break e;
            } else if (o !== c) {
              ((c = Kt(Error(s(424)), t)), kl(c), (t = vm(e, t, o, n)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Re = ei(e.firstChild),
                  ot = t,
                  me = !0,
                  en = null,
                  $t = !0,
                  n = hh(t, null, o, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Bn(), o === c)) {
              t = Li(e, t, n);
              break e;
            }
            ct(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          go(e, t),
          e === null
            ? (n = Np(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : me ||
                ((n = t.type),
                (e = t.pendingProps),
                (o = No(oe.current).createElement(n)),
                (o[st] = t),
                (o[zt] = e),
                ut(o, n, e),
                it(o),
                (t.stateNode = o))
            : (t.memoizedState = Np(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          bl(t),
          e === null &&
            me &&
            ((o = t.stateNode = Dp(t.type, t.pendingProps, oe.current)),
            (ot = t),
            ($t = !0),
            (c = Re),
            gn(t.type) ? ((Nu = c), (Re = ei(o.firstChild))) : (Re = c)),
          ct(e, t, t.pendingProps.children, n),
          go(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            me &&
            ((c = o = Re) &&
              ((o = j0(o, t.type, t.pendingProps, $t)),
              o !== null
                ? ((t.stateNode = o),
                  (ot = t),
                  (Re = ei(o.firstChild)),
                  ($t = !1),
                  (c = !0))
                : (c = !1)),
            c || tn(t)),
          bl(t),
          (c = t.type),
          (f = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (o = f.children),
          ju(c, f) ? (o = null) : g !== null && ju(c, g) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((c = Ec(e, t, G1, null, null, n)), (rs._currentValue = c)),
          go(e, t),
          ct(e, t, o, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            me &&
            ((e = n = Re) &&
              ((n = M0(n, t.pendingProps, $t)),
              n !== null
                ? ((t.stateNode = n), (ot = t), (Re = null), (e = !0))
                : (e = !1)),
            e || tn(t)),
          null
        );
      case 13:
        return bm(e, t, n);
      case 4:
        return (
          bt(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Xn(t, null, o, n)) : ct(e, t, o, n),
          t.child
        );
      case 11:
        return um(e, t, t.type, t.pendingProps, n);
      case 7:
        return (ct(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ct(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ct(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (o = t.pendingProps),
          nn(t, t.type, o.value),
          ct(e, t, o.children, n),
          t.child
        );
      case 9:
        return (
          (c = t.type._context),
          (o = t.pendingProps.children),
          qn(t),
          (c = rt(c)),
          (o = o(c)),
          (t.flags |= 1),
          ct(e, t, o, n),
          t.child
        );
      case 14:
        return fm(e, t, t.type, t.pendingProps, n);
      case 15:
        return dm(e, t, t.type, t.pendingProps, n);
      case 19:
        return wm(e, t, n);
      case 31:
        return J1(e, t, n);
      case 22:
        return hm(e, t, n, t.pendingProps);
      case 24:
        return (
          qn(t),
          (o = rt(Ze)),
          e === null
            ? ((c = yc()),
              c === null &&
                ((c = De),
                (f = pc()),
                (c.pooledCache = f),
                f.refCount++,
                f !== null && (c.pooledCacheLanes |= n),
                (c = f)),
              (t.memoizedState = { parent: o, cache: c }),
              bc(t),
              nn(t, Ze, c))
            : ((e.lanes & n) !== 0 && (xc(e, t), Yl(t, null, null, n), Vl()),
              (c = e.memoizedState),
              (f = t.memoizedState),
              c.parent !== o
                ? ((c = { parent: o, cache: o }),
                  (t.memoizedState = c),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = c),
                  nn(t, Ze, o))
                : ((o = f.cache),
                  nn(t, Ze, o),
                  o !== c.cache && mc(t, [Ze], n, !0))),
          ct(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Ui(e) {
    e.flags |= 4;
  }
  function tu(e, t, n, o, c) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (c & 335544128) === c))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Km()) e.flags |= 8192;
        else throw ((Gn = eo), vc);
    } else e.flags &= -16777217;
  }
  function zm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Bp(t)))
      if (Km()) e.flags |= 8192;
      else throw ((Gn = eo), vc);
  }
  function vo(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? id() : 536870912), (e.lanes |= t), (qa |= t)));
  }
  function Pl(e, t) {
    if (!me)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var o = null; n !== null; )
            (n.alternate !== null && (o = n), (n = n.sibling));
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      o = 0;
    if (t)
      for (var c = e.child; c !== null; )
        ((n |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 65011712),
          (o |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling));
    else
      for (c = e.child; c !== null; )
        ((n |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = e),
          (c = c.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = n), t);
  }
  function W1(e, t, n) {
    var o = t.pendingProps;
    switch ((cc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ne(t), null);
      case 1:
        return (Ne(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          t.memoizedState.cache !== o && (t.flags |= 2048),
          Ni(Ze),
          Ve(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ea(t)
              ? Ui(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), fc())),
          Ne(t),
          null
        );
      case 26:
        var c = t.type,
          f = t.memoizedState;
        return (
          e === null
            ? (Ui(t),
              f !== null ? (Ne(t), zm(t, f)) : (Ne(t), tu(t, c, null, o, n)))
            : f
              ? f !== e.memoizedState
                ? (Ui(t), Ne(t), zm(t, f))
                : (Ne(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== o && Ui(t),
                Ne(t),
                tu(t, c, e, o, n)),
          null
        );
      case 27:
        if (
          (js(t),
          (n = oe.current),
          (c = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== o && Ui(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ne(t), null);
          }
          ((e = K.current),
            Ea(t) ? ih(t) : ((e = Dp(c, o, n)), (t.stateNode = e), Ui(t)));
        }
        return (Ne(t), null);
      case 5:
        if ((js(t), (c = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== o && Ui(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ne(t), null);
          }
          if (((f = K.current), Ea(t))) ih(t);
          else {
            var g = No(oe.current);
            switch (f) {
              case 1:
                f = g.createElementNS("http://www.w3.org/2000/svg", c);
                break;
              case 2:
                f = g.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                break;
              default:
                switch (c) {
                  case "svg":
                    f = g.createElementNS("http://www.w3.org/2000/svg", c);
                    break;
                  case "math":
                    f = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c,
                    );
                    break;
                  case "script":
                    ((f = g.createElement("div")),
                      (f.innerHTML = "<script><\/script>"),
                      (f = f.removeChild(f.firstChild)));
                    break;
                  case "select":
                    ((f =
                      typeof o.is == "string"
                        ? g.createElement("select", { is: o.is })
                        : g.createElement("select")),
                      o.multiple
                        ? (f.multiple = !0)
                        : o.size && (f.size = o.size));
                    break;
                  default:
                    f =
                      typeof o.is == "string"
                        ? g.createElement(c, { is: o.is })
                        : g.createElement(c);
                }
            }
            ((f[st] = t), (f[zt] = o));
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6) f.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                ((g.child.return = g), (g = g.child));
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t) break e;
                g = g.return;
              }
              ((g.sibling.return = g.return), (g = g.sibling));
            }
            t.stateNode = f;
            e: switch ((ut(f, c, o), c)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && Ui(t);
          }
        }
        return (
          Ne(t),
          tu(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== o && Ui(t);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = oe.current), Ea(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (o = null),
              (c = ot),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            ((e[st] = t),
              (e = !!(
                e.nodeValue === n ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                bp(e.nodeValue, n)
              )),
              e || tn(t, !0));
          } else
            ((e = No(e).createTextNode(o)), (e[st] = t), (t.stateNode = e));
        }
        return (Ne(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((o = Ea(t)), n !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(s(557));
              e[st] = t;
            } else
              (Bn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ne(t), (e = !1));
          } else
            ((n = fc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return (Ne(t), null);
      case 13:
        if (
          ((o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = Ea(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(s(317));
              c[st] = t;
            } else
              (Bn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ne(t), (c = !1));
          } else
            ((c = fc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0));
          if (!c) return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        return (
          Bt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = o !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((o = t.child),
                (c = null),
                o.alternate !== null &&
                  o.alternate.memoizedState !== null &&
                  o.alternate.memoizedState.cachePool !== null &&
                  (c = o.alternate.memoizedState.cachePool.pool),
                (f = null),
                o.memoizedState !== null &&
                  o.memoizedState.cachePool !== null &&
                  (f = o.memoizedState.cachePool.pool),
                f !== c && (o.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              vo(t, t.updateQueue),
              Ne(t),
              null)
        );
      case 4:
        return (Ve(), e === null && zu(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Ni(t.type), Ne(t), null);
      case 19:
        if ((V(Ye), (o = t.memoizedState), o === null)) return (Ne(t), null);
        if (((c = (t.flags & 128) !== 0), (f = o.rendering), f === null))
          if (c) Pl(o, !1);
          else {
            if (He !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = ao(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      Pl(o, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      vo(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Jd(n, e), (n = n.sibling));
                  return (
                    F(Ye, (Ye.current & 1) | 2),
                    me && Oi(t, o.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Rt() > zo &&
              ((t.flags |= 128), (c = !0), Pl(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!c)
            if (((e = ao(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (c = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                vo(t, e),
                Pl(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !f.alternate &&
                  !me)
              )
                return (Ne(t), null);
            } else
              2 * Rt() - o.renderingStartTime > zo &&
                n !== 536870912 &&
                ((t.flags |= 128), (c = !0), Pl(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = o.last),
              e !== null ? (e.sibling = f) : (t.child = f),
              (o.last = f));
        }
        return o.tail !== null
          ? ((e = o.tail),
            (o.rendering = e),
            (o.tail = e.sibling),
            (o.renderingStartTime = Rt()),
            (e.sibling = null),
            (n = Ye.current),
            F(Ye, c ? (n & 1) | 2 : n & 1),
            me && Oi(t, o.treeForkCount),
            e)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          Bt(t),
          Cc(),
          (o = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (t.flags |= 8192)
            : o && (t.flags |= 8192),
          o
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ne(t),
          (n = t.updateQueue),
          n !== null && vo(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (o = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (o = t.memoizedState.cachePool.pool),
          o !== n && (t.flags |= 2048),
          e !== null && V(Vn),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Ni(Ze),
          Ne(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function e0(e, t) {
    switch ((cc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ni(Ze),
          Ve(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (js(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Bt(t), t.alternate === null)) throw Error(s(340));
          Bn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Bt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Bn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (V(Ye), null);
      case 4:
        return (Ve(), null);
      case 10:
        return (Ni(t.type), null);
      case 22:
      case 23:
        return (
          Bt(t),
          Cc(),
          e !== null && V(Vn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Ni(Ze), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cm(e, t) {
    switch ((cc(t), t.tag)) {
      case 3:
        (Ni(Ze), Ve());
        break;
      case 26:
      case 27:
      case 5:
        js(t);
        break;
      case 4:
        Ve();
        break;
      case 31:
        t.memoizedState !== null && Bt(t);
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        V(Ye);
        break;
      case 10:
        Ni(t.type);
        break;
      case 22:
      case 23:
        (Bt(t), Cc(), e !== null && V(Vn));
        break;
      case 24:
        Ni(Ze);
    }
  }
  function Kl(e, t) {
    try {
      var n = t.updateQueue,
        o = n !== null ? n.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        n = c;
        do {
          if ((n.tag & e) === e) {
            o = void 0;
            var f = n.create,
              g = n.inst;
            ((o = f()), (g.destroy = o));
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (v) {
      ze(t, t.return, v);
    }
  }
  function cn(e, t, n) {
    try {
      var o = t.updateQueue,
        c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        o = f;
        do {
          if ((o.tag & e) === e) {
            var g = o.inst,
              v = g.destroy;
            if (v !== void 0) {
              ((g.destroy = void 0), (c = t));
              var S = n,
                R = v;
              try {
                R();
              } catch (L) {
                ze(c, S, L);
              }
            }
          }
          o = o.next;
        } while (o !== f);
      }
    } catch (L) {
      ze(t, t.return, L);
    }
  }
  function _m(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        ph(t, n);
      } catch (o) {
        ze(e, e.return, o);
      }
    }
  }
  function Tm(e, t, n) {
    ((n.props = Fn(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (o) {
      ze(e, t, o);
    }
  }
  function Il(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(o)) : (n.current = o);
      }
    } catch (c) {
      ze(e, t, c);
    }
  }
  function vi(e, t) {
    var n = e.ref,
      o = e.refCleanup;
    if (n !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          ze(e, t, c);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (c) {
          ze(e, t, c);
        }
      else n.current = null;
  }
  function Em(e) {
    var t = e.type,
      n = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && o.focus();
          break e;
        case "img":
          n.src ? (o.src = n.src) : n.srcSet && (o.srcset = n.srcSet);
      }
    } catch (c) {
      ze(e, e.return, c);
    }
  }
  function iu(e, t, n) {
    try {
      var o = e.stateNode;
      (S0(o, e.type, n, t), (o[zt] = t));
    } catch (c) {
      ze(e, e.return, c);
    }
  }
  function jm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && gn(e.type)) ||
      e.tag === 4
    );
  }
  function nu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || jm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && gn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function au(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ji)));
    else if (
      o !== 4 &&
      (o === 27 && gn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (au(e, t, n), e = e.sibling; e !== null; )
        (au(e, t, n), (e = e.sibling));
  }
  function bo(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      o !== 4 &&
      (o === 27 && gn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (bo(e, t, n), e = e.sibling; e !== null; )
        (bo(e, t, n), (e = e.sibling));
  }
  function Mm(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var o = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      (ut(t, o, n), (t[st] = e), (t[zt] = n));
    } catch (f) {
      ze(e, e.return, f);
    }
  }
  var Bi = !1,
    Ie = !1,
    lu = !1,
    Dm = typeof WeakSet == "function" ? WeakSet : Set,
    nt = null;
  function t0(e, t) {
    if (((e = e.containerInfo), (Tu = qo), (e = Yd(e)), $r(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var o = n.getSelection && n.getSelection();
          if (o && o.rangeCount !== 0) {
            n = o.anchorNode;
            var c = o.anchorOffset,
              f = o.focusNode;
            o = o.focusOffset;
            try {
              (n.nodeType, f.nodeType);
            } catch {
              n = null;
              break e;
            }
            var g = 0,
              v = -1,
              S = -1,
              R = 0,
              L = 0,
              H = e,
              N = null;
            t: for (;;) {
              for (
                var k;
                H !== n || (c !== 0 && H.nodeType !== 3) || (v = g + c),
                  H !== f || (o !== 0 && H.nodeType !== 3) || (S = g + o),
                  H.nodeType === 3 && (g += H.nodeValue.length),
                  (k = H.firstChild) !== null;
              )
                ((N = H), (H = k));
              for (;;) {
                if (H === e) break t;
                if (
                  (N === n && ++R === c && (v = g),
                  N === f && ++L === o && (S = g),
                  (k = H.nextSibling) !== null)
                )
                  break;
                ((H = N), (N = H.parentNode));
              }
              H = k;
            }
            n = v === -1 || S === -1 ? null : { start: v, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Eu = { focusedElem: e, selectionRange: n }, qo = !1, nt = t;
      nt !== null;
    )
      if (
        ((t = nt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (nt = e));
      else
        for (; nt !== null; ) {
          switch (((t = nt), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((c = e[n]), (c.ref.impl = c.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                ((e = void 0),
                  (n = t),
                  (c = f.memoizedProps),
                  (f = f.memoizedState),
                  (o = n.stateNode));
                try {
                  var P = Fn(n.type, c);
                  ((e = o.getSnapshotBeforeUpdate(P, f)),
                    (o.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ee) {
                  ze(n, n.return, ee);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Du(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Du(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (nt = e));
            break;
          }
          nt = t.return;
        }
  }
  function Om(e, t, n) {
    var o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (qi(e, n), o & 4 && Kl(5, n));
        break;
      case 1:
        if ((qi(e, n), o & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (g) {
              ze(n, n.return, g);
            }
          else {
            var c = Fn(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              ze(n, n.return, g);
            }
          }
        (o & 64 && _m(n), o & 512 && Il(n, n.return));
        break;
      case 3:
        if ((qi(e, n), o & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            ph(e, t);
          } catch (g) {
            ze(n, n.return, g);
          }
        }
        break;
      case 27:
        t === null && o & 4 && Mm(n);
      case 26:
      case 5:
        (qi(e, n), t === null && o & 4 && Em(n), o & 512 && Il(n, n.return));
        break;
      case 12:
        qi(e, n);
        break;
      case 31:
        (qi(e, n), o & 4 && Am(e, n));
        break;
      case 13:
        (qi(e, n),
          o & 4 && km(e, n),
          o & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = u0.bind(null, n)), D0(e, n)))));
        break;
      case 22:
        if (((o = n.memoizedState !== null || Bi), !o)) {
          ((t = (t !== null && t.memoizedState !== null) || Ie), (c = Bi));
          var f = Ie;
          ((Bi = o),
            (Ie = t) && !f ? Vi(e, n, (n.subtreeFlags & 8772) !== 0) : qi(e, n),
            (Bi = c),
            (Ie = f));
        }
        break;
      case 30:
        break;
      default:
        qi(e, n);
    }
  }
  function Rm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Rm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && kr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ae = null,
    _t = !1;
  function Hi(e, t, n) {
    for (n = n.child; n !== null; ) (Nm(e, t, n), (n = n.sibling));
  }
  function Nm(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function")
      try {
        Nt.onCommitFiberUnmount(xl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ie || vi(n, t),
          Hi(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ie || vi(n, t);
        var o = Ae,
          c = _t;
        (gn(n.type) && ((Ae = n.stateNode), (_t = !1)),
          Hi(e, t, n),
          ls(n.stateNode),
          (Ae = o),
          (_t = c));
        break;
      case 5:
        Ie || vi(n, t);
      case 6:
        if (
          ((o = Ae),
          (c = _t),
          (Ae = null),
          Hi(e, t, n),
          (Ae = o),
          (_t = c),
          Ae !== null)
        )
          if (_t)
            try {
              (Ae.nodeType === 9
                ? Ae.body
                : Ae.nodeName === "HTML"
                  ? Ae.ownerDocument.body
                  : Ae
              ).removeChild(n.stateNode);
            } catch (f) {
              ze(n, t, f);
            }
          else
            try {
              Ae.removeChild(n.stateNode);
            } catch (f) {
              ze(n, t, f);
            }
        break;
      case 18:
        Ae !== null &&
          (_t
            ? ((e = Ae),
              _p(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              Pa(e))
            : _p(Ae, n.stateNode));
        break;
      case 4:
        ((o = Ae),
          (c = _t),
          (Ae = n.stateNode.containerInfo),
          (_t = !0),
          Hi(e, t, n),
          (Ae = o),
          (_t = c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (cn(2, n, t), Ie || cn(4, n, t), Hi(e, t, n));
        break;
      case 1:
        (Ie ||
          (vi(n, t),
          (o = n.stateNode),
          typeof o.componentWillUnmount == "function" && Tm(n, t, o)),
          Hi(e, t, n));
        break;
      case 21:
        Hi(e, t, n);
        break;
      case 22:
        ((Ie = (o = Ie) || n.memoizedState !== null), Hi(e, t, n), (Ie = o));
        break;
      default:
        Hi(e, t, n);
    }
  }
  function Am(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Pa(e);
      } catch (n) {
        ze(t, t.return, n);
      }
    }
  }
  function km(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Pa(e);
      } catch (n) {
        ze(t, t.return, n);
      }
  }
  function i0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Dm()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Dm()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function xo(e, t) {
    var n = i0(e);
    t.forEach(function (o) {
      if (!n.has(o)) {
        n.add(o);
        var c = f0.bind(null, e, o);
        o.then(c, c);
      }
    });
  }
  function Tt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var o = 0; o < n.length; o++) {
        var c = n[o],
          f = e,
          g = t,
          v = g;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (gn(v.type)) {
                ((Ae = v.stateNode), (_t = !1));
                break e;
              }
              break;
            case 5:
              ((Ae = v.stateNode), (_t = !1));
              break e;
            case 3:
            case 4:
              ((Ae = v.stateNode.containerInfo), (_t = !0));
              break e;
          }
          v = v.return;
        }
        if (Ae === null) throw Error(s(160));
        (Nm(f, g, c),
          (Ae = null),
          (_t = !1),
          (f = c.alternate),
          f !== null && (f.return = null),
          (c.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Lm(t, e), (t = t.sibling));
  }
  var ri = null;
  function Lm(e, t) {
    var n = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Tt(t, e),
          Et(e),
          o & 4 && (cn(3, e, e.return), Kl(3, e), cn(5, e, e.return)));
        break;
      case 1:
        (Tt(t, e),
          Et(e),
          o & 512 && (Ie || n === null || vi(n, n.return)),
          o & 64 &&
            Bi &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? o : n.concat(o))))));
        break;
      case 26:
        var c = ri;
        if (
          (Tt(t, e),
          Et(e),
          o & 512 && (Ie || n === null || vi(n, n.return)),
          o & 4)
        ) {
          var f = n !== null ? n.memoizedState : null;
          if (((o = e.memoizedState), n === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  ((o = e.type),
                    (n = e.memoizedProps),
                    (c = c.ownerDocument || c));
                  t: switch (o) {
                    case "title":
                      ((f = c.getElementsByTagName("title")[0]),
                        (!f ||
                          f[zl] ||
                          f[st] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = c.createElement(o)),
                          c.head.insertBefore(
                            f,
                            c.querySelector("head > title"),
                          )),
                        ut(f, o, n),
                        (f[st] = e),
                        it(f),
                        (o = f));
                      break e;
                    case "link":
                      var g = Lp("link", "href", c).get(o + (n.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (
                            ((f = g[v]),
                            f.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              f.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              f.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              f.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      ((f = c.createElement(o)),
                        ut(f, o, n),
                        c.head.appendChild(f));
                      break;
                    case "meta":
                      if (
                        (g = Lp("meta", "content", c).get(
                          o + (n.content || ""),
                        ))
                      ) {
                        for (v = 0; v < g.length; v++)
                          if (
                            ((f = g[v]),
                            f.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              f.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              f.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              f.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      ((f = c.createElement(o)),
                        ut(f, o, n),
                        c.head.appendChild(f));
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  ((f[st] = e), it(f), (o = f));
                }
                e.stateNode = o;
              } else Up(c, e.type, e.stateNode);
            else e.stateNode = kp(c, o, e.memoizedProps);
          else
            f !== o
              ? (f === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : f.count--,
                o === null
                  ? Up(c, e.type, e.stateNode)
                  : kp(c, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                iu(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Tt(t, e),
          Et(e),
          o & 512 && (Ie || n === null || vi(n, n.return)),
          n !== null && o & 4 && iu(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Tt(t, e),
          Et(e),
          o & 512 && (Ie || n === null || vi(n, n.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            ya(c, "");
          } catch (P) {
            ze(e, e.return, P);
          }
        }
        (o & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), iu(e, c, n !== null ? n.memoizedProps : c)),
          o & 1024 && (lu = !0));
        break;
      case 6:
        if ((Tt(t, e), Et(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((o = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = o;
          } catch (P) {
            ze(e, e.return, P);
          }
        }
        break;
      case 3:
        if (
          ((Lo = null),
          (c = ri),
          (ri = Ao(t.containerInfo)),
          Tt(t, e),
          (ri = c),
          Et(e),
          o & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Pa(t.containerInfo);
          } catch (P) {
            ze(e, e.return, P);
          }
        lu && ((lu = !1), Um(e));
        break;
      case 4:
        ((o = ri),
          (ri = Ao(e.stateNode.containerInfo)),
          Tt(t, e),
          Et(e),
          (ri = o));
        break;
      case 12:
        (Tt(t, e), Et(e));
        break;
      case 31:
        (Tt(t, e),
          Et(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), xo(e, o))));
        break;
      case 13:
        (Tt(t, e),
          Et(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (So = Rt()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), xo(e, o))));
        break;
      case 22:
        c = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          R = Bi,
          L = Ie;
        if (
          ((Bi = R || c),
          (Ie = L || S),
          Tt(t, e),
          (Ie = L),
          (Bi = R),
          Et(e),
          o & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = c ? t._visibility & -2 : t._visibility | 1,
              c && (n === null || S || Bi || Ie || Zn(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (((f = S.stateNode), c))
                    ((g = f.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none"));
                  else {
                    v = S.stateNode;
                    var H = S.memoizedProps.style,
                      N =
                        H != null && H.hasOwnProperty("display")
                          ? H.display
                          : null;
                    v.style.display =
                      N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (P) {
                  ze(S, S.return, P);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = c ? "" : S.memoizedProps;
                } catch (P) {
                  ze(S, S.return, P);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var k = S.stateNode;
                  c ? Tp(k, !0) : Tp(S.stateNode, !1);
                } catch (P) {
                  ze(S, S.return, P);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((n = o.retryQueue),
            n !== null && ((o.retryQueue = null), xo(e, n))));
        break;
      case 19:
        (Tt(t, e),
          Et(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), xo(e, o))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Tt(t, e), Et(e));
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, o = e.return; o !== null; ) {
          if (jm(o)) {
            n = o;
            break;
          }
          o = o.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var c = n.stateNode,
              f = nu(e);
            bo(e, f, c);
            break;
          case 5:
            var g = n.stateNode;
            n.flags & 32 && (ya(g, ""), (n.flags &= -33));
            var v = nu(e);
            bo(e, v, g);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              R = nu(e);
            au(e, R, S);
            break;
          default:
            throw Error(s(161));
        }
      } catch (L) {
        ze(e, e.return, L);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Um(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Um(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function qi(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Om(e, t.alternate, t), (t = t.sibling));
  }
  function Zn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (cn(4, t, t.return), Zn(t));
          break;
        case 1:
          vi(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && Tm(t, t.return, n),
            Zn(t));
          break;
        case 27:
          ls(t.stateNode);
        case 26:
        case 5:
          (vi(t, t.return), Zn(t));
          break;
        case 22:
          t.memoizedState === null && Zn(t);
          break;
        case 30:
          Zn(t);
          break;
        default:
          Zn(t);
      }
      e = e.sibling;
    }
  }
  function Vi(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate,
        c = e,
        f = t,
        g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Vi(c, f, n), Kl(4, f));
          break;
        case 1:
          if (
            (Vi(c, f, n),
            (o = f),
            (c = o.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (R) {
              ze(o, o.return, R);
            }
          if (((o = f), (c = o.updateQueue), c !== null)) {
            var v = o.stateNode;
            try {
              var S = c.shared.hiddenCallbacks;
              if (S !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < S.length; c++)
                  mh(S[c], v);
            } catch (R) {
              ze(o, o.return, R);
            }
          }
          (n && g & 64 && _m(f), Il(f, f.return));
          break;
        case 27:
          Mm(f);
        case 26:
        case 5:
          (Vi(c, f, n), n && o === null && g & 4 && Em(f), Il(f, f.return));
          break;
        case 12:
          Vi(c, f, n);
          break;
        case 31:
          (Vi(c, f, n), n && g & 4 && Am(c, f));
          break;
        case 13:
          (Vi(c, f, n), n && g & 4 && km(c, f));
          break;
        case 22:
          (f.memoizedState === null && Vi(c, f, n), Il(f, f.return));
          break;
        case 30:
          break;
        default:
          Vi(c, f, n);
      }
      t = t.sibling;
    }
  }
  function su(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Ll(n)));
  }
  function ou(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ll(e)));
  }
  function ci(e, t, n, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Bm(e, t, n, o), (t = t.sibling));
  }
  function Bm(e, t, n, o) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ci(e, t, n, o), c & 2048 && Kl(9, t));
        break;
      case 1:
        ci(e, t, n, o);
        break;
      case 3:
        (ci(e, t, n, o),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ll(e))));
        break;
      case 12:
        if (c & 2048) {
          (ci(e, t, n, o), (e = t.stateNode));
          try {
            var f = t.memoizedProps,
              g = f.id,
              v = f.onPostCommit;
            typeof v == "function" &&
              v(
                g,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            ze(t, t.return, S);
          }
        } else ci(e, t, n, o);
        break;
      case 31:
        ci(e, t, n, o);
        break;
      case 13:
        ci(e, t, n, o);
        break;
      case 23:
        break;
      case 22:
        ((f = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? ci(e, t, n, o)
              : Jl(e, t)
            : f._visibility & 2
              ? ci(e, t, n, o)
              : ((f._visibility |= 2),
                Ua(e, t, n, o, (t.subtreeFlags & 10256) !== 0 || !1)),
          c & 2048 && su(g, t));
        break;
      case 24:
        (ci(e, t, n, o), c & 2048 && ou(t.alternate, t));
        break;
      default:
        ci(e, t, n, o);
    }
  }
  function Ua(e, t, n, o, c) {
    for (
      c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var f = e,
        g = t,
        v = n,
        S = o,
        R = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          (Ua(f, g, v, S, c), Kl(8, g));
          break;
        case 23:
          break;
        case 22:
          var L = g.stateNode;
          (g.memoizedState !== null
            ? L._visibility & 2
              ? Ua(f, g, v, S, c)
              : Jl(f, g)
            : ((L._visibility |= 2), Ua(f, g, v, S, c)),
            c && R & 2048 && su(g.alternate, g));
          break;
        case 24:
          (Ua(f, g, v, S, c), c && R & 2048 && ou(g.alternate, g));
          break;
        default:
          Ua(f, g, v, S, c);
      }
      t = t.sibling;
    }
  }
  function Jl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          o = t,
          c = o.flags;
        switch (o.tag) {
          case 22:
            (Jl(n, o), c & 2048 && su(o.alternate, o));
            break;
          case 24:
            (Jl(n, o), c & 2048 && ou(o.alternate, o));
            break;
          default:
            Jl(n, o);
        }
        t = t.sibling;
      }
  }
  var $l = 8192;
  function Ba(e, t, n) {
    if (e.subtreeFlags & $l)
      for (e = e.child; e !== null; ) (Hm(e, t, n), (e = e.sibling));
  }
  function Hm(e, t, n) {
    switch (e.tag) {
      case 26:
        (Ba(e, t, n),
          e.flags & $l &&
            e.memoizedState !== null &&
            Y0(n, ri, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ba(e, t, n);
        break;
      case 3:
      case 4:
        var o = ri;
        ((ri = Ao(e.stateNode.containerInfo)), Ba(e, t, n), (ri = o));
        break;
      case 22:
        e.memoizedState === null &&
          ((o = e.alternate),
          o !== null && o.memoizedState !== null
            ? ((o = $l), ($l = 16777216), Ba(e, t, n), ($l = o))
            : Ba(e, t, n));
        break;
      default:
        Ba(e, t, n);
    }
  }
  function qm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Wl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          ((nt = o), Ym(o, e));
        }
      qm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Vm(e), (e = e.sibling));
  }
  function Vm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Wl(e), e.flags & 2048 && cn(9, e, e.return));
        break;
      case 3:
        Wl(e);
        break;
      case 12:
        Wl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), wo(e))
          : Wl(e);
        break;
      default:
        Wl(e);
    }
  }
  function wo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          ((nt = o), Ym(o, e));
        }
      qm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (cn(8, t, t.return), wo(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), wo(t)));
          break;
        default:
          wo(t);
      }
      e = e.sibling;
    }
  }
  function Ym(e, t) {
    for (; nt !== null; ) {
      var n = nt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          cn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var o = n.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Ll(n.memoizedState.cache);
      }
      if (((o = n.child), o !== null)) ((o.return = n), (nt = o));
      else
        e: for (n = e; nt !== null; ) {
          o = nt;
          var c = o.sibling,
            f = o.return;
          if ((Rm(o), o === n)) {
            nt = null;
            break e;
          }
          if (c !== null) {
            ((c.return = f), (nt = c));
            break e;
          }
          nt = f;
        }
    }
  }
  var n0 = {
      getCacheForType: function (e) {
        var t = rt(Ze),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return rt(Ze).controller.signal;
      },
    },
    a0 = typeof WeakMap == "function" ? WeakMap : Map,
    xe = 0,
    De = null,
    re = null,
    ue = 0,
    Se = 0,
    Ht = null,
    un = !1,
    Ha = !1,
    ru = !1,
    Yi = 0,
    He = 0,
    fn = 0,
    Pn = 0,
    cu = 0,
    qt = 0,
    qa = 0,
    es = null,
    jt = null,
    uu = !1,
    So = 0,
    Gm = 0,
    zo = 1 / 0,
    Co = null,
    dn = null,
    et = 0,
    hn = null,
    Va = null,
    Gi = 0,
    fu = 0,
    du = null,
    Xm = null,
    ts = 0,
    hu = null;
  function Vt() {
    return (xe & 2) !== 0 && ue !== 0 ? ue & -ue : U.T !== null ? bu() : sd();
  }
  function Qm() {
    if (qt === 0)
      if ((ue & 536870912) === 0 || me) {
        var e = Os;
        ((Os <<= 1), (Os & 3932160) === 0 && (Os = 262144), (qt = e));
      } else qt = 536870912;
    return ((e = Ut.current), e !== null && (e.flags |= 32), qt);
  }
  function Mt(e, t, n) {
    (((e === De && (Se === 2 || Se === 9)) || e.cancelPendingCommit !== null) &&
      (Ya(e, 0), mn(e, ue, qt, !1)),
      Sl(e, n),
      ((xe & 2) === 0 || e !== De) &&
        (e === De &&
          ((xe & 2) === 0 && (Pn |= n), He === 4 && mn(e, ue, qt, !1)),
        bi(e)));
  }
  function Fm(e, t, n) {
    if ((xe & 6) !== 0) throw Error(s(327));
    var o = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || wl(e, t),
      c = o ? o0(e, t) : pu(e, t, !0),
      f = o;
    do {
      if (c === 0) {
        Ha && !o && mn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), f && !l0(n))) {
          ((c = pu(e, t, !1)), (f = !1));
          continue;
        }
        if (c === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var g = 0;
          else
            ((g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0));
          if (g !== 0) {
            t = g;
            e: {
              var v = e;
              c = es;
              var S = v.current.memoizedState.isDehydrated;
              if ((S && (Ya(v, g).flags |= 256), (g = pu(v, g, !1)), g !== 2)) {
                if (ru && !S) {
                  ((v.errorRecoveryDisabledLanes |= f), (Pn |= f), (c = 4));
                  break e;
                }
                ((f = jt),
                  (jt = c),
                  f !== null &&
                    (jt === null ? (jt = f) : jt.push.apply(jt, f)));
              }
              c = g;
            }
            if (((f = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          (Ya(e, 0), mn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((o = e), (f = c), f)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              mn(o, t, qt, !un);
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((c = So + 300 - Rt()), 10 < c)) {
            if ((mn(o, t, qt, !un), Ns(o, 0, !0) !== 0)) break e;
            ((Gi = t),
              (o.timeoutHandle = zp(
                Zm.bind(
                  null,
                  o,
                  n,
                  jt,
                  Co,
                  uu,
                  t,
                  qt,
                  Pn,
                  qa,
                  un,
                  f,
                  "Throttled",
                  -0,
                  0,
                ),
                c,
              )));
            break e;
          }
          Zm(o, n, jt, Co, uu, t, qt, Pn, qa, un, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    bi(e);
  }
  function Zm(e, t, n, o, c, f, g, v, S, R, L, H, N, k) {
    if (
      ((e.timeoutHandle = -1),
      (H = t.subtreeFlags),
      H & 8192 || (H & 16785408) === 16785408)
    ) {
      ((H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ji,
      }),
        Hm(t, f, H));
      var P =
        (f & 62914560) === f ? So - Rt() : (f & 4194048) === f ? Gm - Rt() : 0;
      if (((P = G0(H, P)), P !== null)) {
        ((Gi = f),
          (e.cancelPendingCommit = P(
            tp.bind(null, e, t, f, n, o, c, g, v, S, L, H, null, N, k),
          )),
          mn(e, f, g, !R));
        return;
      }
    }
    tp(e, t, f, n, o, c, g, v, S);
  }
  function l0(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var o = 0; o < n.length; o++) {
          var c = n[o],
            f = c.getSnapshot;
          c = c.value;
          try {
            if (!kt(f(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function mn(e, t, n, o) {
    ((t &= ~cu),
      (t &= ~Pn),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      o && (e.warmLanes |= t),
      (o = e.expirationTimes));
    for (var c = t; 0 < c; ) {
      var f = 31 - At(c),
        g = 1 << f;
      ((o[f] = -1), (c &= ~g));
    }
    n !== 0 && nd(e, n, t);
  }
  function _o() {
    return (xe & 6) === 0 ? (is(0), !1) : !0;
  }
  function mu() {
    if (re !== null) {
      if (Se === 0) var e = re.return;
      else ((e = re), (Ri = Hn = null), Dc(e), (Ra = null), (Bl = 0), (e = re));
      for (; e !== null; ) (Cm(e.alternate, e), (e = e.return));
      re = null;
    }
  }
  function Ya(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), _0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Gi = 0),
      mu(),
      (De = e),
      (re = n = Di(e.current, null)),
      (ue = t),
      (Se = 0),
      (Ht = null),
      (un = !1),
      (Ha = wl(e, t)),
      (ru = !1),
      (qa = qt = cu = Pn = fn = He = 0),
      (jt = es = null),
      (uu = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var c = 31 - At(o),
          f = 1 << c;
        ((t |= e[c]), (o &= ~f));
      }
    return ((Yi = t), Qs(), n);
  }
  function Pm(e, t) {
    ((le = null),
      (U.H = Fl),
      t === Oa || t === Ws
        ? ((t = uh()), (Se = 3))
        : t === vc
          ? ((t = uh()), (Se = 4))
          : (Se =
              t === Fc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Ht = t),
      re === null && ((He = 1), mo(e, Kt(t, e.current))));
  }
  function Km() {
    var e = Ut.current;
    return e === null
      ? !0
      : (ue & 4194048) === ue
        ? Wt === null
        : (ue & 62914560) === ue || (ue & 536870912) !== 0
          ? e === Wt
          : !1;
  }
  function Im() {
    var e = U.H;
    return ((U.H = Fl), e === null ? Fl : e);
  }
  function Jm() {
    var e = U.A;
    return ((U.A = n0), e);
  }
  function To() {
    ((He = 4),
      un || ((ue & 4194048) !== ue && Ut.current !== null) || (Ha = !0),
      ((fn & 134217727) === 0 && (Pn & 134217727) === 0) ||
        De === null ||
        mn(De, ue, qt, !1));
  }
  function pu(e, t, n) {
    var o = xe;
    xe |= 2;
    var c = Im(),
      f = Jm();
    ((De !== e || ue !== t) && ((Co = null), Ya(e, t)), (t = !1));
    var g = He;
    e: do
      try {
        if (Se !== 0 && re !== null) {
          var v = re,
            S = Ht;
          switch (Se) {
            case 8:
              (mu(), (g = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ut.current === null && (t = !0);
              var R = Se;
              if (((Se = 0), (Ht = null), Ga(e, v, S, R), n && Ha)) {
                g = 0;
                break e;
              }
              break;
            default:
              ((R = Se), (Se = 0), (Ht = null), Ga(e, v, S, R));
          }
        }
        (s0(), (g = He));
        break;
      } catch (L) {
        Pm(e, L);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ri = Hn = null),
      (xe = o),
      (U.H = c),
      (U.A = f),
      re === null && ((De = null), (ue = 0), Qs()),
      g
    );
  }
  function s0() {
    for (; re !== null; ) $m(re);
  }
  function o0(e, t) {
    var n = xe;
    xe |= 2;
    var o = Im(),
      c = Jm();
    De !== e || ue !== t
      ? ((Co = null), (zo = Rt() + 500), Ya(e, t))
      : (Ha = wl(e, t));
    e: do
      try {
        if (Se !== 0 && re !== null) {
          t = re;
          var f = Ht;
          t: switch (Se) {
            case 1:
              ((Se = 0), (Ht = null), Ga(e, t, f, 1));
              break;
            case 2:
            case 9:
              if (rh(f)) {
                ((Se = 0), (Ht = null), Wm(t));
                break;
              }
              ((t = function () {
                ((Se !== 2 && Se !== 9) || De !== e || (Se = 7), bi(e));
              }),
                f.then(t, t));
              break e;
            case 3:
              Se = 7;
              break e;
            case 4:
              Se = 5;
              break e;
            case 7:
              rh(f)
                ? ((Se = 0), (Ht = null), Wm(t))
                : ((Se = 0), (Ht = null), Ga(e, t, f, 7));
              break;
            case 5:
              var g = null;
              switch (re.tag) {
                case 26:
                  g = re.memoizedState;
                case 5:
                case 27:
                  var v = re;
                  if (g ? Bp(g) : v.stateNode.complete) {
                    ((Se = 0), (Ht = null));
                    var S = v.sibling;
                    if (S !== null) re = S;
                    else {
                      var R = v.return;
                      R !== null ? ((re = R), Eo(R)) : (re = null);
                    }
                    break t;
                  }
              }
              ((Se = 0), (Ht = null), Ga(e, t, f, 5));
              break;
            case 6:
              ((Se = 0), (Ht = null), Ga(e, t, f, 6));
              break;
            case 8:
              (mu(), (He = 6));
              break e;
            default:
              throw Error(s(462));
          }
        }
        r0();
        break;
      } catch (L) {
        Pm(e, L);
      }
    while (!0);
    return (
      (Ri = Hn = null),
      (U.H = o),
      (U.A = c),
      (xe = n),
      re !== null ? 0 : ((De = null), (ue = 0), Qs(), He)
    );
  }
  function r0() {
    for (; re !== null && !Ov(); ) $m(re);
  }
  function $m(e) {
    var t = Sm(e.alternate, e, Yi);
    ((e.memoizedProps = e.pendingProps), t === null ? Eo(e) : (re = t));
  }
  function Wm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = gm(n, t, t.pendingProps, t.type, void 0, ue);
        break;
      case 11:
        t = gm(n, t, t.pendingProps, t.type.render, t.ref, ue);
        break;
      case 5:
        Dc(t);
      default:
        (Cm(n, t), (t = re = Jd(t, Yi)), (t = Sm(n, t, Yi)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Eo(e) : (re = t));
  }
  function Ga(e, t, n, o) {
    ((Ri = Hn = null), Dc(t), (Ra = null), (Bl = 0));
    var c = t.return;
    try {
      if (I1(e, c, t, n, ue)) {
        ((He = 1), mo(e, Kt(n, e.current)), (re = null));
        return;
      }
    } catch (f) {
      if (c !== null) throw ((re = c), f);
      ((He = 1), mo(e, Kt(n, e.current)), (re = null));
      return;
    }
    t.flags & 32768
      ? (me || o === 1
          ? (e = !0)
          : Ha || (ue & 536870912) !== 0
            ? (e = !1)
            : ((un = e = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = Ut.current),
                o !== null && o.tag === 13 && (o.flags |= 16384))),
        ep(t, e))
      : Eo(t);
  }
  function Eo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ep(t, un);
        return;
      }
      e = t.return;
      var n = W1(t.alternate, t, Yi);
      if (n !== null) {
        re = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        re = t;
        return;
      }
      re = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function ep(e, t) {
    do {
      var n = e0(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (re = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        re = e;
        return;
      }
      re = e = n;
    } while (e !== null);
    ((He = 6), (re = null));
  }
  function tp(e, t, n, o, c, f, g, v, S) {
    e.cancelPendingCommit = null;
    do jo();
    while (et !== 0);
    if ((xe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((f = t.lanes | t.childLanes),
        (f |= nc),
        Vv(e, n, f, g, v, S),
        e === De && ((re = De = null), (ue = 0)),
        (Va = t),
        (hn = e),
        (Gi = n),
        (fu = f),
        (du = c),
        (Xm = o),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            d0(Ms, function () {
              return (sp(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (o = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || o)
      ) {
        ((o = U.T), (U.T = null), (c = Q.p), (Q.p = 2), (g = xe), (xe |= 4));
        try {
          t0(e, t, n);
        } finally {
          ((xe = g), (Q.p = c), (U.T = o));
        }
      }
      ((et = 1), ip(), np(), ap());
    }
  }
  function ip() {
    if (et === 1) {
      et = 0;
      var e = hn,
        t = Va,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = U.T), (U.T = null));
        var o = Q.p;
        Q.p = 2;
        var c = xe;
        xe |= 4;
        try {
          Lm(t, e);
          var f = Eu,
            g = Yd(e.containerInfo),
            v = f.focusedElem,
            S = f.selectionRange;
          if (
            g !== v &&
            v &&
            v.ownerDocument &&
            Vd(v.ownerDocument.documentElement, v)
          ) {
            if (S !== null && $r(v)) {
              var R = S.start,
                L = S.end;
              if ((L === void 0 && (L = R), "selectionStart" in v))
                ((v.selectionStart = R),
                  (v.selectionEnd = Math.min(L, v.value.length)));
              else {
                var H = v.ownerDocument || document,
                  N = (H && H.defaultView) || window;
                if (N.getSelection) {
                  var k = N.getSelection(),
                    P = v.textContent.length,
                    ee = Math.min(S.start, P),
                    Ee = S.end === void 0 ? ee : Math.min(S.end, P);
                  !k.extend && ee > Ee && ((g = Ee), (Ee = ee), (ee = g));
                  var j = qd(v, ee),
                    C = qd(v, Ee);
                  if (
                    j &&
                    C &&
                    (k.rangeCount !== 1 ||
                      k.anchorNode !== j.node ||
                      k.anchorOffset !== j.offset ||
                      k.focusNode !== C.node ||
                      k.focusOffset !== C.offset)
                  ) {
                    var O = H.createRange();
                    (O.setStart(j.node, j.offset),
                      k.removeAllRanges(),
                      ee > Ee
                        ? (k.addRange(O), k.extend(C.node, C.offset))
                        : (O.setEnd(C.node, C.offset), k.addRange(O)));
                  }
                }
              }
            }
            for (H = [], k = v; (k = k.parentNode); )
              k.nodeType === 1 &&
                H.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < H.length;
              v++
            ) {
              var B = H[v];
              ((B.element.scrollLeft = B.left), (B.element.scrollTop = B.top));
            }
          }
          ((qo = !!Tu), (Eu = Tu = null));
        } finally {
          ((xe = c), (Q.p = o), (U.T = n));
        }
      }
      ((e.current = t), (et = 2));
    }
  }
  function np() {
    if (et === 2) {
      et = 0;
      var e = hn,
        t = Va,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = U.T), (U.T = null));
        var o = Q.p;
        Q.p = 2;
        var c = xe;
        xe |= 4;
        try {
          Om(e, t.alternate, t);
        } finally {
          ((xe = c), (Q.p = o), (U.T = n));
        }
      }
      et = 3;
    }
  }
  function ap() {
    if (et === 4 || et === 3) {
      ((et = 0), Rv());
      var e = hn,
        t = Va,
        n = Gi,
        o = Xm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (et = 5)
        : ((et = 0), (Va = hn = null), lp(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (dn = null),
        Nr(n),
        (t = t.stateNode),
        Nt && typeof Nt.onCommitFiberRoot == "function")
      )
        try {
          Nt.onCommitFiberRoot(xl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        ((t = U.T), (c = Q.p), (Q.p = 2), (U.T = null));
        try {
          for (var f = e.onRecoverableError, g = 0; g < o.length; g++) {
            var v = o[g];
            f(v.value, { componentStack: v.stack });
          }
        } finally {
          ((U.T = t), (Q.p = c));
        }
      }
      ((Gi & 3) !== 0 && jo(),
        bi(e),
        (c = e.pendingLanes),
        (n & 261930) !== 0 && (c & 42) !== 0
          ? e === hu
            ? ts++
            : ((ts = 0), (hu = e))
          : (ts = 0),
        is(0));
    }
  }
  function lp(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ll(t)));
  }
  function jo() {
    return (ip(), np(), ap(), sp());
  }
  function sp() {
    if (et !== 5) return !1;
    var e = hn,
      t = fu;
    fu = 0;
    var n = Nr(Gi),
      o = U.T,
      c = Q.p;
    try {
      ((Q.p = 32 > n ? 32 : n), (U.T = null), (n = du), (du = null));
      var f = hn,
        g = Gi;
      if (((et = 0), (Va = hn = null), (Gi = 0), (xe & 6) !== 0))
        throw Error(s(331));
      var v = xe;
      if (
        ((xe |= 4),
        Vm(f.current),
        Bm(f, f.current, g, n),
        (xe = v),
        is(0, !1),
        Nt && typeof Nt.onPostCommitFiberRoot == "function")
      )
        try {
          Nt.onPostCommitFiberRoot(xl, f);
        } catch {}
      return !0;
    } finally {
      ((Q.p = c), (U.T = o), lp(e, t));
    }
  }
  function op(e, t, n) {
    ((t = Kt(n, t)),
      (t = Qc(e.stateNode, t, 2)),
      (e = sn(e, t, 2)),
      e !== null && (Sl(e, 2), bi(e)));
  }
  function ze(e, t, n) {
    if (e.tag === 3) op(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          op(t, e, n);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (dn === null || !dn.has(o)))
          ) {
            ((e = Kt(n, e)),
              (n = rm(2)),
              (o = sn(t, n, 2)),
              o !== null && (cm(n, o, t, e), Sl(o, 2), bi(o)));
            break;
          }
        }
        t = t.return;
      }
  }
  function gu(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new a0();
      var c = new Set();
      o.set(t, c);
    } else ((c = o.get(t)), c === void 0 && ((c = new Set()), o.set(t, c)));
    c.has(n) ||
      ((ru = !0), c.add(n), (e = c0.bind(null, e, t, n)), t.then(e, e));
  }
  function c0(e, t, n) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      De === e &&
        (ue & n) === n &&
        (He === 4 || (He === 3 && (ue & 62914560) === ue && 300 > Rt() - So)
          ? (xe & 2) === 0 && Ya(e, 0)
          : (cu |= n),
        qa === ue && (qa = 0)),
      bi(e));
  }
  function rp(e, t) {
    (t === 0 && (t = id()), (e = Ln(e, t)), e !== null && (Sl(e, t), bi(e)));
  }
  function u0(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), rp(e, n));
  }
  function f0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var o = e.stateNode,
          c = e.memoizedState;
        c !== null && (n = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (o !== null && o.delete(t), rp(e, n));
  }
  function d0(e, t) {
    return Mr(e, t);
  }
  var Mo = null,
    Xa = null,
    yu = !1,
    Do = !1,
    vu = !1,
    pn = 0;
  function bi(e) {
    (e !== Xa &&
      e.next === null &&
      (Xa === null ? (Mo = Xa = e) : (Xa = Xa.next = e)),
      (Do = !0),
      yu || ((yu = !0), m0()));
  }
  function is(e, t) {
    if (!vu && Do) {
      vu = !0;
      do
        for (var n = !1, o = Mo; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var f = 0;
            else {
              var g = o.suspendedLanes,
                v = o.pingedLanes;
              ((f = (1 << (31 - At(42 | e) + 1)) - 1),
                (f &= c & ~(g & ~v)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0));
            }
            f !== 0 && ((n = !0), dp(o, f));
          } else
            ((f = ue),
              (f = Ns(
                o,
                o === De ? f : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1,
              )),
              (f & 3) === 0 || wl(o, f) || ((n = !0), dp(o, f)));
          o = o.next;
        }
      while (n);
      vu = !1;
    }
  }
  function h0() {
    cp();
  }
  function cp() {
    Do = yu = !1;
    var e = 0;
    pn !== 0 && C0() && (e = pn);
    for (var t = Rt(), n = null, o = Mo; o !== null; ) {
      var c = o.next,
        f = up(o, t);
      (f === 0
        ? ((o.next = null),
          n === null ? (Mo = c) : (n.next = c),
          c === null && (Xa = n))
        : ((n = o), (e !== 0 || (f & 3) !== 0) && (Do = !0)),
        (o = c));
    }
    ((et !== 0 && et !== 5) || is(e), pn !== 0 && (pn = 0));
  }
  function up(e, t) {
    for (
      var n = e.suspendedLanes,
        o = e.pingedLanes,
        c = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;
    ) {
      var g = 31 - At(f),
        v = 1 << g,
        S = c[g];
      (S === -1
        ? ((v & n) === 0 || (v & o) !== 0) && (c[g] = qv(v, t))
        : S <= t && (e.expiredLanes |= v),
        (f &= ~v));
    }
    if (
      ((t = De),
      (n = ue),
      (n = Ns(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (o = e.callbackNode),
      n === 0 ||
        (e === t && (Se === 2 || Se === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Dr(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || wl(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((o !== null && Dr(o), Nr(n))) {
        case 2:
        case 8:
          n = ed;
          break;
        case 32:
          n = Ms;
          break;
        case 268435456:
          n = td;
          break;
        default:
          n = Ms;
      }
      return (
        (o = fp.bind(null, e)),
        (n = Mr(n, o)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      o !== null && o !== null && Dr(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function fp(e, t) {
    if (et !== 0 && et !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (jo() && e.callbackNode !== n) return null;
    var o = ue;
    return (
      (o = Ns(
        e,
        e === De ? o : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      o === 0
        ? null
        : (Fm(e, o, t),
          up(e, Rt()),
          e.callbackNode != null && e.callbackNode === n
            ? fp.bind(null, e)
            : null)
    );
  }
  function dp(e, t) {
    if (jo()) return null;
    Fm(e, t, !0);
  }
  function m0() {
    T0(function () {
      (xe & 6) !== 0 ? Mr(Wf, h0) : cp();
    });
  }
  function bu() {
    if (pn === 0) {
      var e = Ma;
      (e === 0 && ((e = Ds), (Ds <<= 1), (Ds & 261888) === 0 && (Ds = 256)),
        (pn = e));
    }
    return pn;
  }
  function hp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Us("" + e);
  }
  function mp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function p0(e, t, n, o, c) {
    if (t === "submit" && n && n.stateNode === c) {
      var f = hp((c[zt] || null).action),
        g = o.submitter;
      g &&
        ((t = (t = g[zt] || null)
          ? hp(t.formAction)
          : g.getAttribute("formAction")),
        t !== null && ((f = t), (g = null)));
      var v = new Vs("action", "action", null, o, c);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (pn !== 0) {
                  var S = g ? mp(c, g) : new FormData(c);
                  Hc(
                    n,
                    { pending: !0, data: S, method: c.method, action: f },
                    null,
                    S,
                  );
                }
              } else
                typeof f == "function" &&
                  (v.preventDefault(),
                  (S = g ? mp(c, g) : new FormData(c)),
                  Hc(
                    n,
                    { pending: !0, data: S, method: c.method, action: f },
                    f,
                    S,
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var xu = 0; xu < ic.length; xu++) {
    var wu = ic[xu],
      g0 = wu.toLowerCase(),
      y0 = wu[0].toUpperCase() + wu.slice(1);
    oi(g0, "on" + y0);
  }
  (oi(Qd, "onAnimationEnd"),
    oi(Fd, "onAnimationIteration"),
    oi(Zd, "onAnimationStart"),
    oi("dblclick", "onDoubleClick"),
    oi("focusin", "onFocus"),
    oi("focusout", "onBlur"),
    oi(N1, "onTransitionRun"),
    oi(A1, "onTransitionStart"),
    oi(k1, "onTransitionCancel"),
    oi(Pd, "onTransitionEnd"),
    pa("onMouseEnter", ["mouseout", "mouseover"]),
    pa("onMouseLeave", ["mouseout", "mouseover"]),
    pa("onPointerEnter", ["pointerout", "pointerover"]),
    pa("onPointerLeave", ["pointerout", "pointerover"]),
    Rn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Rn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Rn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Rn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Rn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ns =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    v0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ns),
    );
  function pp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n],
        c = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = o.length - 1; 0 <= g; g--) {
            var v = o[g],
              S = v.instance,
              R = v.currentTarget;
            if (((v = v.listener), S !== f && c.isPropagationStopped()))
              break e;
            ((f = v), (c.currentTarget = R));
            try {
              f(c);
            } catch (L) {
              Xs(L);
            }
            ((c.currentTarget = null), (f = S));
          }
        else
          for (g = 0; g < o.length; g++) {
            if (
              ((v = o[g]),
              (S = v.instance),
              (R = v.currentTarget),
              (v = v.listener),
              S !== f && c.isPropagationStopped())
            )
              break e;
            ((f = v), (c.currentTarget = R));
            try {
              f(c);
            } catch (L) {
              Xs(L);
            }
            ((c.currentTarget = null), (f = S));
          }
      }
    }
  }
  function ce(e, t) {
    var n = t[Ar];
    n === void 0 && (n = t[Ar] = new Set());
    var o = e + "__bubble";
    n.has(o) || (gp(t, e, 2, !1), n.add(o));
  }
  function Su(e, t, n) {
    var o = 0;
    (t && (o |= 4), gp(n, e, o, t));
  }
  var Oo = "_reactListening" + Math.random().toString(36).slice(2);
  function zu(e) {
    if (!e[Oo]) {
      ((e[Oo] = !0),
        cd.forEach(function (n) {
          n !== "selectionchange" && (v0.has(n) || Su(n, !1, e), Su(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Oo] || ((t[Oo] = !0), Su("selectionchange", !1, t));
    }
  }
  function gp(e, t, n, o) {
    switch (Qp(t)) {
      case 2:
        var c = F0;
        break;
      case 8:
        c = Z0;
        break;
      default:
        c = Bu;
    }
    ((n = c.bind(null, t, n, e)),
      (c = void 0),
      !Gr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (c = !0),
      o
        ? c !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: c })
          : e.addEventListener(t, n, !0)
        : c !== void 0
          ? e.addEventListener(t, n, { passive: c })
          : e.addEventListener(t, n, !1));
  }
  function Cu(e, t, n, o, c) {
    var f = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var g = o.tag;
        if (g === 3 || g === 4) {
          var v = o.stateNode.containerInfo;
          if (v === c) break;
          if (g === 4)
            for (g = o.return; g !== null; ) {
              var S = g.tag;
              if ((S === 3 || S === 4) && g.stateNode.containerInfo === c)
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (((g = da(v)), g === null)) return;
            if (((S = g.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              o = f = g;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    wd(function () {
      var R = f,
        L = Vr(n),
        H = [];
      e: {
        var N = Kd.get(e);
        if (N !== void 0) {
          var k = Vs,
            P = e;
          switch (e) {
            case "keypress":
              if (Hs(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = f1;
              break;
            case "focusin":
              ((P = "focus"), (k = Zr));
              break;
            case "focusout":
              ((P = "blur"), (k = Zr));
              break;
            case "beforeblur":
            case "afterblur":
              k = Zr;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = Cd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = Wv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = m1;
              break;
            case Qd:
            case Fd:
            case Zd:
              k = i1;
              break;
            case Pd:
              k = g1;
              break;
            case "scroll":
            case "scrollend":
              k = Jv;
              break;
            case "wheel":
              k = v1;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = a1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = Td;
              break;
            case "toggle":
            case "beforetoggle":
              k = x1;
          }
          var ee = (t & 4) !== 0,
            Ee = !ee && (e === "scroll" || e === "scrollend"),
            j = ee ? (N !== null ? N + "Capture" : null) : N;
          ee = [];
          for (var C = R, O; C !== null; ) {
            var B = C;
            if (
              ((O = B.stateNode),
              (B = B.tag),
              (B !== 5 && B !== 26 && B !== 27) ||
                O === null ||
                j === null ||
                ((B = _l(C, j)), B != null && ee.push(as(C, B, O))),
              Ee)
            )
              break;
            C = C.return;
          }
          0 < ee.length &&
            ((N = new k(N, P, null, n, L)),
            H.push({ event: N, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((N = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            N &&
              n !== qr &&
              (P = n.relatedTarget || n.fromElement) &&
              (da(P) || P[fa]))
          )
            break e;
          if (
            (k || N) &&
            ((N =
              L.window === L
                ? L
                : (N = L.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            k
              ? ((P = n.relatedTarget || n.toElement),
                (k = R),
                (P = P ? da(P) : null),
                P !== null &&
                  ((Ee = u(P)),
                  (ee = P.tag),
                  P !== Ee || (ee !== 5 && ee !== 27 && ee !== 6)) &&
                  (P = null))
              : ((k = null), (P = R)),
            k !== P)
          ) {
            if (
              ((ee = Cd),
              (B = "onMouseLeave"),
              (j = "onMouseEnter"),
              (C = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ee = Td),
                (B = "onPointerLeave"),
                (j = "onPointerEnter"),
                (C = "pointer")),
              (Ee = k == null ? N : Cl(k)),
              (O = P == null ? N : Cl(P)),
              (N = new ee(B, C + "leave", k, n, L)),
              (N.target = Ee),
              (N.relatedTarget = O),
              (B = null),
              da(L) === R &&
                ((ee = new ee(j, C + "enter", P, n, L)),
                (ee.target = O),
                (ee.relatedTarget = Ee),
                (B = ee)),
              (Ee = B),
              k && P)
            )
              t: {
                for (ee = b0, j = k, C = P, O = 0, B = j; B; B = ee(B)) O++;
                B = 0;
                for (var $ = C; $; $ = ee($)) B++;
                for (; 0 < O - B; ) ((j = ee(j)), O--);
                for (; 0 < B - O; ) ((C = ee(C)), B--);
                for (; O--; ) {
                  if (j === C || (C !== null && j === C.alternate)) {
                    ee = j;
                    break t;
                  }
                  ((j = ee(j)), (C = ee(C)));
                }
                ee = null;
              }
            else ee = null;
            (k !== null && yp(H, N, k, ee, !1),
              P !== null && Ee !== null && yp(H, Ee, P, ee, !0));
          }
        }
        e: {
          if (
            ((N = R ? Cl(R) : window),
            (k = N.nodeName && N.nodeName.toLowerCase()),
            k === "select" || (k === "input" && N.type === "file"))
          )
            var ye = Ad;
          else if (Rd(N))
            if (kd) ye = D1;
            else {
              ye = j1;
              var I = E1;
            }
          else
            ((k = N.nodeName),
              !k ||
              k.toLowerCase() !== "input" ||
              (N.type !== "checkbox" && N.type !== "radio")
                ? R && Hr(R.elementType) && (ye = Ad)
                : (ye = M1));
          if (ye && (ye = ye(e, R))) {
            Nd(H, ye, n, L);
            break e;
          }
          (I && I(e, N, R),
            e === "focusout" &&
              R &&
              N.type === "number" &&
              R.memoizedProps.value != null &&
              Br(N, "number", N.value));
        }
        switch (((I = R ? Cl(R) : window), e)) {
          case "focusin":
            (Rd(I) || I.contentEditable === "true") &&
              ((wa = I), (Wr = R), (Nl = null));
            break;
          case "focusout":
            Nl = Wr = wa = null;
            break;
          case "mousedown":
            ec = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ec = !1), Gd(H, n, L));
            break;
          case "selectionchange":
            if (R1) break;
          case "keydown":
          case "keyup":
            Gd(H, n, L);
        }
        var se;
        if (Kr)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          xa
            ? Dd(e, n) && (fe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (fe = "onCompositionStart");
        (fe &&
          (Ed &&
            n.locale !== "ko" &&
            (xa || fe !== "onCompositionStart"
              ? fe === "onCompositionEnd" && xa && (se = Sd())
              : (($i = L),
                (Xr = "value" in $i ? $i.value : $i.textContent),
                (xa = !0))),
          (I = Ro(R, fe)),
          0 < I.length &&
            ((fe = new _d(fe, e, null, n, L)),
            H.push({ event: fe, listeners: I }),
            se
              ? (fe.data = se)
              : ((se = Od(n)), se !== null && (fe.data = se)))),
          (se = S1 ? z1(e, n) : C1(e, n)) &&
            ((fe = Ro(R, "onBeforeInput")),
            0 < fe.length &&
              ((I = new _d("onBeforeInput", "beforeinput", null, n, L)),
              H.push({ event: I, listeners: fe }),
              (I.data = se))),
          p0(H, e, R, n, L));
      }
      pp(H, t);
    });
  }
  function as(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ro(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
      var c = e,
        f = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          f === null ||
          ((c = _l(e, n)),
          c != null && o.unshift(as(e, c, f)),
          (c = _l(e, t)),
          c != null && o.push(as(e, c, f))),
        e.tag === 3)
      )
        return o;
      e = e.return;
    }
    return [];
  }
  function b0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function yp(e, t, n, o, c) {
    for (var f = t._reactName, g = []; n !== null && n !== o; ) {
      var v = n,
        S = v.alternate,
        R = v.stateNode;
      if (((v = v.tag), S !== null && S === o)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        R === null ||
        ((S = R),
        c
          ? ((R = _l(n, f)), R != null && g.unshift(as(n, R, S)))
          : c || ((R = _l(n, f)), R != null && g.push(as(n, R, S)))),
        (n = n.return));
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var x0 = /\r\n?/g,
    w0 = /\u0000|\uFFFD/g;
  function vp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        x0,
        `
`,
      )
      .replace(w0, "");
  }
  function bp(e, t) {
    return ((t = vp(t)), vp(e) === t);
  }
  function Te(e, t, n, o, c, f) {
    switch (n) {
      case "children":
        typeof o == "string"
          ? t === "body" || (t === "textarea" && o === "") || ya(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            t !== "body" &&
            ya(e, "" + o);
        break;
      case "className":
        ks(e, "class", o);
        break;
      case "tabIndex":
        ks(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ks(e, n, o);
        break;
      case "style":
        bd(e, o, f);
        break;
      case "data":
        if (t !== "object") {
          ks(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((o = Us("" + o)), e.setAttribute(n, o));
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof f == "function" &&
            (n === "formAction"
              ? (t !== "input" && Te(e, t, "name", c.name, c, null),
                Te(e, t, "formEncType", c.formEncType, c, null),
                Te(e, t, "formMethod", c.formMethod, c, null),
                Te(e, t, "formTarget", c.formTarget, c, null))
              : (Te(e, t, "encType", c.encType, c, null),
                Te(e, t, "method", c.method, c, null),
                Te(e, t, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((o = Us("" + o)), e.setAttribute(n, o));
        break;
      case "onClick":
        o != null && (e.onclick = ji);
        break;
      case "onScroll":
        o != null && ce("scroll", e);
        break;
      case "onScrollEnd":
        o != null && ce("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(s(61));
          if (((n = o.__html), n != null)) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = Us("" + o)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(n, "" + o)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(n, "")
          : o !== !1 &&
              o != null &&
              typeof o != "function" &&
              typeof o != "symbol"
            ? e.setAttribute(n, o)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? e.setAttribute(n, o)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(n)
          : e.setAttribute(n, o);
        break;
      case "popover":
        (ce("beforetoggle", e), ce("toggle", e), As(e, "popover", o));
        break;
      case "xlinkActuate":
        Ei(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Ei(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Ei(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Ei(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Ei(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Ei(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Ei(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Ei(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Ei(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        As(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Kv.get(n) || n), As(e, n, o));
    }
  }
  function _u(e, t, n, o, c, f) {
    switch (n) {
      case "style":
        bd(e, o, f);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(s(61));
          if (((n = o.__html), n != null)) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? ya(e, o)
          : (typeof o == "number" || typeof o == "bigint") && ya(e, "" + o);
        break;
      case "onScroll":
        o != null && ce("scroll", e);
        break;
      case "onScrollEnd":
        o != null && ce("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = ji);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ud.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((c = n.endsWith("Capture")),
              (t = n.slice(2, c ? n.length - 7 : void 0)),
              (f = e[zt] || null),
              (f = f != null ? f[n] : null),
              typeof f == "function" && e.removeEventListener(t, f, c),
              typeof o == "function")
            ) {
              (typeof f != "function" &&
                f !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, o, c));
              break e;
            }
            n in e
              ? (e[n] = o)
              : o === !0
                ? e.setAttribute(n, "")
                : As(e, n, o);
          }
    }
  }
  function ut(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ce("error", e), ce("load", e));
        var o = !1,
          c = !1,
          f;
        for (f in n)
          if (n.hasOwnProperty(f)) {
            var g = n[f];
            if (g != null)
              switch (f) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  Te(e, t, f, g, n, null);
              }
          }
        (c && Te(e, t, "srcSet", n.srcSet, n, null),
          o && Te(e, t, "src", n.src, n, null));
        return;
      case "input":
        ce("invalid", e);
        var v = (f = g = c = null),
          S = null,
          R = null;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var L = n[o];
            if (L != null)
              switch (o) {
                case "name":
                  c = L;
                  break;
                case "type":
                  g = L;
                  break;
                case "checked":
                  S = L;
                  break;
                case "defaultChecked":
                  R = L;
                  break;
                case "value":
                  f = L;
                  break;
                case "defaultValue":
                  v = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null) throw Error(s(137, t));
                  break;
                default:
                  Te(e, t, o, L, n, null);
              }
          }
        pd(e, f, v, S, R, g, c, !1);
        return;
      case "select":
        (ce("invalid", e), (o = g = f = null));
        for (c in n)
          if (n.hasOwnProperty(c) && ((v = n[c]), v != null))
            switch (c) {
              case "value":
                f = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                o = v;
              default:
                Te(e, t, c, v, n, null);
            }
        ((t = f),
          (n = g),
          (e.multiple = !!o),
          t != null ? ga(e, !!o, t, !1) : n != null && ga(e, !!o, n, !0));
        return;
      case "textarea":
        (ce("invalid", e), (f = c = o = null));
        for (g in n)
          if (n.hasOwnProperty(g) && ((v = n[g]), v != null))
            switch (g) {
              case "value":
                o = v;
                break;
              case "defaultValue":
                c = v;
                break;
              case "children":
                f = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(s(91));
                break;
              default:
                Te(e, t, g, v, n, null);
            }
        yd(e, o, c, f);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((o = n[S]), o != null))
            switch (S) {
              case "selected":
                e.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Te(e, t, S, o, n, null);
            }
        return;
      case "dialog":
        (ce("beforetoggle", e),
          ce("toggle", e),
          ce("cancel", e),
          ce("close", e));
        break;
      case "iframe":
      case "object":
        ce("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < ns.length; o++) ce(ns[o], e);
        break;
      case "image":
        (ce("error", e), ce("load", e));
        break;
      case "details":
        ce("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (ce("error", e), ce("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in n)
          if (n.hasOwnProperty(R) && ((o = n[R]), o != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Te(e, t, R, o, n, null);
            }
        return;
      default:
        if (Hr(t)) {
          for (L in n)
            n.hasOwnProperty(L) &&
              ((o = n[L]), o !== void 0 && _u(e, t, L, o, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((o = n[v]), o != null && Te(e, t, v, o, n, null));
  }
  function S0(e, t, n, o) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          f = null,
          g = null,
          v = null,
          S = null,
          R = null,
          L = null;
        for (k in n) {
          var H = n[k];
          if (n.hasOwnProperty(k) && H != null)
            switch (k) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = H;
              default:
                o.hasOwnProperty(k) || Te(e, t, k, null, o, H);
            }
        }
        for (var N in o) {
          var k = o[N];
          if (((H = n[N]), o.hasOwnProperty(N) && (k != null || H != null)))
            switch (N) {
              case "type":
                f = k;
                break;
              case "name":
                c = k;
                break;
              case "checked":
                R = k;
                break;
              case "defaultChecked":
                L = k;
                break;
              case "value":
                g = k;
                break;
              case "defaultValue":
                v = k;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(s(137, t));
                break;
              default:
                k !== H && Te(e, t, N, k, o, H);
            }
        }
        Ur(e, g, v, S, R, L, f, c);
        return;
      case "select":
        k = g = v = N = null;
        for (f in n)
          if (((S = n[f]), n.hasOwnProperty(f) && S != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                k = S;
              default:
                o.hasOwnProperty(f) || Te(e, t, f, null, o, S);
            }
        for (c in o)
          if (
            ((f = o[c]),
            (S = n[c]),
            o.hasOwnProperty(c) && (f != null || S != null))
          )
            switch (c) {
              case "value":
                N = f;
                break;
              case "defaultValue":
                v = f;
                break;
              case "multiple":
                g = f;
              default:
                f !== S && Te(e, t, c, f, o, S);
            }
        ((t = v),
          (n = g),
          (o = k),
          N != null
            ? ga(e, !!n, N, !1)
            : !!o != !!n &&
              (t != null ? ga(e, !!n, t, !0) : ga(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        k = N = null;
        for (v in n)
          if (
            ((c = n[v]),
            n.hasOwnProperty(v) && c != null && !o.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Te(e, t, v, null, o, c);
            }
        for (g in o)
          if (
            ((c = o[g]),
            (f = n[g]),
            o.hasOwnProperty(g) && (c != null || f != null))
          )
            switch (g) {
              case "value":
                N = c;
                break;
              case "defaultValue":
                k = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== f && Te(e, t, g, c, o, f);
            }
        gd(e, N, k);
        return;
      case "option":
        for (var P in n)
          if (
            ((N = n[P]),
            n.hasOwnProperty(P) && N != null && !o.hasOwnProperty(P))
          )
            switch (P) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Te(e, t, P, null, o, N);
            }
        for (S in o)
          if (
            ((N = o[S]),
            (k = n[S]),
            o.hasOwnProperty(S) && N !== k && (N != null || k != null))
          )
            switch (S) {
              case "selected":
                e.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Te(e, t, S, N, o, k);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ee in n)
          ((N = n[ee]),
            n.hasOwnProperty(ee) &&
              N != null &&
              !o.hasOwnProperty(ee) &&
              Te(e, t, ee, null, o, N));
        for (R in o)
          if (
            ((N = o[R]),
            (k = n[R]),
            o.hasOwnProperty(R) && N !== k && (N != null || k != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(s(137, t));
                break;
              default:
                Te(e, t, R, N, o, k);
            }
        return;
      default:
        if (Hr(t)) {
          for (var Ee in n)
            ((N = n[Ee]),
              n.hasOwnProperty(Ee) &&
                N !== void 0 &&
                !o.hasOwnProperty(Ee) &&
                _u(e, t, Ee, void 0, o, N));
          for (L in o)
            ((N = o[L]),
              (k = n[L]),
              !o.hasOwnProperty(L) ||
                N === k ||
                (N === void 0 && k === void 0) ||
                _u(e, t, L, N, o, k));
          return;
        }
    }
    for (var j in n)
      ((N = n[j]),
        n.hasOwnProperty(j) &&
          N != null &&
          !o.hasOwnProperty(j) &&
          Te(e, t, j, null, o, N));
    for (H in o)
      ((N = o[H]),
        (k = n[H]),
        !o.hasOwnProperty(H) ||
          N === k ||
          (N == null && k == null) ||
          Te(e, t, H, N, o, k));
  }
  function xp(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function z0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), o = 0;
        o < n.length;
        o++
      ) {
        var c = n[o],
          f = c.transferSize,
          g = c.initiatorType,
          v = c.duration;
        if (f && v && xp(g)) {
          for (g = 0, v = c.responseEnd, o += 1; o < n.length; o++) {
            var S = n[o],
              R = S.startTime;
            if (R > v) break;
            var L = S.transferSize,
              H = S.initiatorType;
            L &&
              xp(H) &&
              ((S = S.responseEnd), (g += L * (S < v ? 1 : (v - R) / (S - R))));
          }
          if ((--o, (t += (8 * (f + g)) / (c.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Tu = null,
    Eu = null;
  function No(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function wp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sp(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function ju(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Mu = null;
  function C0() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Mu
        ? !1
        : ((Mu = e), !0)
      : ((Mu = null), !1);
  }
  var zp = typeof setTimeout == "function" ? setTimeout : void 0,
    _0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Cp = typeof Promise == "function" ? Promise : void 0,
    T0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Cp < "u"
          ? function (e) {
              return Cp.resolve(null).then(e).catch(E0);
            }
          : zp;
  function E0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gn(e) {
    return e === "head";
  }
  function _p(e, t) {
    var n = t,
      o = 0;
    do {
      var c = n.nextSibling;
      if ((e.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === "/$" || n === "/&")) {
          if (o === 0) {
            (e.removeChild(c), Pa(t));
            return;
          }
          o--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          o++;
        else if (n === "html") ls(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), ls(n));
          for (var f = n.firstChild; f; ) {
            var g = f.nextSibling,
              v = f.nodeName;
            (f[zl] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(f),
              (f = g));
          }
        } else n === "body" && ls(e.ownerDocument.body);
      n = c;
    } while (n);
    Pa(t);
  }
  function Tp(e, t) {
    var n = e;
    e = 0;
    do {
      var o = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        o && o.nodeType === 8)
      )
        if (((n = o.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = o;
    } while (n);
  }
  function Du(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Du(n), kr(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function j0(e, t, n, o) {
    for (; e.nodeType === 1; ) {
      var c = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[zl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== c.rel ||
                e.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = ei(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function M0(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = ei(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ep(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = ei(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ou(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ru(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function D0(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var o = function () {
        (t(), n.removeEventListener("DOMContentLoaded", o));
      };
      (n.addEventListener("DOMContentLoaded", o), (e._reactRetry = o));
    }
  }
  function ei(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Nu = null;
  function jp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return ei(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Mp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Dp(e, t, n) {
    switch (((t = No(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function ls(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    kr(e);
  }
  var ti = new Map(),
    Op = new Set();
  function Ao(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Xi = Q.d;
  Q.d = { f: O0, r: R0, D: N0, C: A0, L: k0, m: L0, X: B0, S: U0, M: H0 };
  function O0() {
    var e = Xi.f(),
      t = _o();
    return e || t;
  }
  function R0(e) {
    var t = ha(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ph(t) : Xi.r(e);
  }
  var Qa = typeof document > "u" ? null : document;
  function Rp(e, t, n) {
    var o = Qa;
    if (o && typeof t == "string" && t) {
      var c = Zt(t);
      ((c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof n == "string" && (c += '[crossorigin="' + n + '"]'),
        Op.has(c) ||
          (Op.add(c),
          (e = { rel: e, crossOrigin: n, href: t }),
          o.querySelector(c) === null &&
            ((t = o.createElement("link")),
            ut(t, "link", e),
            it(t),
            o.head.appendChild(t))));
    }
  }
  function N0(e) {
    (Xi.D(e), Rp("dns-prefetch", e, null));
  }
  function A0(e, t) {
    (Xi.C(e, t), Rp("preconnect", e, t));
  }
  function k0(e, t, n) {
    Xi.L(e, t, n);
    var o = Qa;
    if (o && e && t) {
      var c = 'link[rel="preload"][as="' + Zt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((c += '[imagesrcset="' + Zt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (c += '[imagesizes="' + Zt(n.imageSizes) + '"]'))
        : (c += '[href="' + Zt(e) + '"]');
      var f = c;
      switch (t) {
        case "style":
          f = Fa(e);
          break;
        case "script":
          f = Za(e);
      }
      ti.has(f) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        ti.set(f, e),
        o.querySelector(c) !== null ||
          (t === "style" && o.querySelector(ss(f))) ||
          (t === "script" && o.querySelector(os(f))) ||
          ((t = o.createElement("link")),
          ut(t, "link", e),
          it(t),
          o.head.appendChild(t)));
    }
  }
  function L0(e, t) {
    Xi.m(e, t);
    var n = Qa;
    if (n && e) {
      var o = t && typeof t.as == "string" ? t.as : "script",
        c =
          'link[rel="modulepreload"][as="' + Zt(o) + '"][href="' + Zt(e) + '"]',
        f = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Za(e);
      }
      if (
        !ti.has(f) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        ti.set(f, e),
        n.querySelector(c) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(os(f))) return;
        }
        ((o = n.createElement("link")),
          ut(o, "link", e),
          it(o),
          n.head.appendChild(o));
      }
    }
  }
  function U0(e, t, n) {
    Xi.S(e, t, n);
    var o = Qa;
    if (o && e) {
      var c = ma(o).hoistableStyles,
        f = Fa(e);
      t = t || "default";
      var g = c.get(f);
      if (!g) {
        var v = { loading: 0, preload: null };
        if ((g = o.querySelector(ss(f)))) v.loading = 5;
        else {
          ((e = b({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = ti.get(f)) && Au(e, n));
          var S = (g = o.createElement("link"));
          (it(S),
            ut(S, "link", e),
            (S._p = new Promise(function (R, L) {
              ((S.onload = R), (S.onerror = L));
            })),
            S.addEventListener("load", function () {
              v.loading |= 1;
            }),
            S.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            ko(g, t, o));
        }
        ((g = { type: "stylesheet", instance: g, count: 1, state: v }),
          c.set(f, g));
      }
    }
  }
  function B0(e, t) {
    Xi.X(e, t);
    var n = Qa;
    if (n && e) {
      var o = ma(n).hoistableScripts,
        c = Za(e),
        f = o.get(c);
      f ||
        ((f = n.querySelector(os(c))),
        f ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = ti.get(c)) && ku(e, t),
          (f = n.createElement("script")),
          it(f),
          ut(f, "link", e),
          n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        o.set(c, f));
    }
  }
  function H0(e, t) {
    Xi.M(e, t);
    var n = Qa;
    if (n && e) {
      var o = ma(n).hoistableScripts,
        c = Za(e),
        f = o.get(c);
      f ||
        ((f = n.querySelector(os(c))),
        f ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = ti.get(c)) && ku(e, t),
          (f = n.createElement("script")),
          it(f),
          ut(f, "link", e),
          n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        o.set(c, f));
    }
  }
  function Np(e, t, n, o) {
    var c = (c = oe.current) ? Ao(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Fa(n.href)),
            (n = ma(c).hoistableStyles),
            (o = n.get(t)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Fa(n.href);
          var f = ma(c).hoistableStyles,
            g = f.get(e);
          if (
            (g ||
              ((c = c.ownerDocument || c),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, g),
              (f = c.querySelector(ss(e))) &&
                !f._p &&
                ((g.instance = f), (g.state.loading = 5)),
              ti.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                ti.set(e, n),
                f || q0(c, e, n, g.state))),
            t && o === null)
          )
            throw Error(s(528, ""));
          return g;
        }
        if (t && o !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Za(n)),
              (n = ma(c).hoistableScripts),
              (o = n.get(t)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function Fa(e) {
    return 'href="' + Zt(e) + '"';
  }
  function ss(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ap(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function q0(e, t, n, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (o.loading = 1)
      : ((t = e.createElement("link")),
        (o.preload = t),
        t.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        ut(t, "link", n),
        it(t),
        e.head.appendChild(t));
  }
  function Za(e) {
    return '[src="' + Zt(e) + '"]';
  }
  function os(e) {
    return "script[async]" + e;
  }
  function kp(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + Zt(n.href) + '"]');
          if (o) return ((t.instance = o), it(o), o);
          var c = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            it(o),
            ut(o, "style", c),
            ko(o, n.precedence, e),
            (t.instance = o)
          );
        case "stylesheet":
          c = Fa(n.href);
          var f = e.querySelector(ss(c));
          if (f) return ((t.state.loading |= 4), (t.instance = f), it(f), f);
          ((o = Ap(n)),
            (c = ti.get(c)) && Au(o, c),
            (f = (e.ownerDocument || e).createElement("link")),
            it(f));
          var g = f;
          return (
            (g._p = new Promise(function (v, S) {
              ((g.onload = v), (g.onerror = S));
            })),
            ut(f, "link", o),
            (t.state.loading |= 4),
            ko(f, n.precedence, e),
            (t.instance = f)
          );
        case "script":
          return (
            (f = Za(n.src)),
            (c = e.querySelector(os(f)))
              ? ((t.instance = c), it(c), c)
              : ((o = n),
                (c = ti.get(f)) && ((o = b({}, n)), ku(o, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                it(c),
                ut(c, "link", o),
                e.head.appendChild(c),
                (t.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((o = t.instance), (t.state.loading |= 4), ko(o, n.precedence, e));
    return t.instance;
  }
  function ko(e, t, n) {
    for (
      var o = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        c = o.length ? o[o.length - 1] : null,
        f = c,
        g = 0;
      g < o.length;
      g++
    ) {
      var v = o[g];
      if (v.dataset.precedence === t) f = v;
      else if (f !== c) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Au(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function ku(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Lo = null;
  function Lp(e, t, n) {
    if (Lo === null) {
      var o = new Map(),
        c = (Lo = new Map());
      c.set(n, o);
    } else ((c = Lo), (o = c.get(n)), o || ((o = new Map()), c.set(n, o)));
    if (o.has(e)) return o;
    for (
      o.set(e, null), n = n.getElementsByTagName(e), c = 0;
      c < n.length;
      c++
    ) {
      var f = n[c];
      if (
        !(
          f[zl] ||
          f[st] ||
          (e === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = f.getAttribute(t) || "";
        g = e + g;
        var v = o.get(g);
        v ? v.push(f) : o.set(g, [f]);
      }
    }
    return o;
  }
  function Up(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function V0(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Bp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Y0(e, t, n, o) {
    if (
      n.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var c = Fa(o.href),
          f = t.querySelector(ss(c));
        if (f) {
          ((t = f._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Uo.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = f),
            it(f));
          return;
        }
        ((f = t.ownerDocument || t),
          (o = Ap(o)),
          (c = ti.get(c)) && Au(o, c),
          (f = f.createElement("link")),
          it(f));
        var g = f;
        ((g._p = new Promise(function (v, S) {
          ((g.onload = v), (g.onerror = S));
        })),
          ut(f, "link", o),
          (n.instance = f));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Uo.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var Lu = 0;
  function G0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Ho(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var o = setTimeout(function () {
              if ((e.stylesheets && Ho(e, e.stylesheets), e.unsuspend)) {
                var f = e.unsuspend;
                ((e.unsuspend = null), f());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Lu === 0 && (Lu = 62500 * z0());
            var c = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Ho(e, e.stylesheets), e.unsuspend))
                ) {
                  var f = e.unsuspend;
                  ((e.unsuspend = null), f());
                }
              },
              (e.imgBytes > Lu ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(o), clearTimeout(c));
              }
            );
          }
        : null
    );
  }
  function Uo() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ho(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Bo = null;
  function Ho(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Bo = new Map()),
        t.forEach(X0, e),
        (Bo = null),
        Uo.call(e)));
  }
  function X0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Bo.get(e);
      if (n) var o = n.get(null);
      else {
        ((n = new Map()), Bo.set(e, n));
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (n.set(g.dataset.precedence, g), (o = g));
        }
        o && n.set(null, o);
      }
      ((c = t.instance),
        (g = c.getAttribute("data-precedence")),
        (f = n.get(g) || o),
        f === o && n.set(null, c),
        n.set(g, c),
        this.count++,
        (o = Uo.bind(this)),
        c.addEventListener("load", o),
        c.addEventListener("error", o),
        f
          ? f.parentNode.insertBefore(c, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var rs = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0,
  };
  function Q0(e, t, n, o, c, f, g, v, S) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Or(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Or(0)),
      (this.hiddenUpdates = Or(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = c),
      (this.onCaughtError = f),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }
  function Hp(e, t, n, o, c, f, g, v, S, R, L, H) {
    return (
      (e = new Q0(e, t, n, g, S, R, L, H, v)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = Lt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = pc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: o, isDehydrated: n, cache: t }),
      bc(f),
      e
    );
  }
  function qp(e) {
    return e ? ((e = Ca), e) : Ca;
  }
  function Vp(e, t, n, o, c, f) {
    ((c = qp(c)),
      o.context === null ? (o.context = c) : (o.pendingContext = c),
      (o = ln(t)),
      (o.payload = { element: n }),
      (f = f === void 0 ? null : f),
      f !== null && (o.callback = f),
      (n = sn(e, o, t)),
      n !== null && (Mt(n, e, t), ql(n, e, t)));
  }
  function Yp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Uu(e, t) {
    (Yp(e, t), (e = e.alternate) && Yp(e, t));
  }
  function Gp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ln(e, 67108864);
      (t !== null && Mt(t, e, 67108864), Uu(e, 67108864));
    }
  }
  function Xp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Vt();
      t = Rr(t);
      var n = Ln(e, t);
      (n !== null && Mt(n, e, t), Uu(e, t));
    }
  }
  var qo = !0;
  function F0(e, t, n, o) {
    var c = U.T;
    U.T = null;
    var f = Q.p;
    try {
      ((Q.p = 2), Bu(e, t, n, o));
    } finally {
      ((Q.p = f), (U.T = c));
    }
  }
  function Z0(e, t, n, o) {
    var c = U.T;
    U.T = null;
    var f = Q.p;
    try {
      ((Q.p = 8), Bu(e, t, n, o));
    } finally {
      ((Q.p = f), (U.T = c));
    }
  }
  function Bu(e, t, n, o) {
    if (qo) {
      var c = Hu(o);
      if (c === null) (Cu(e, t, o, Vo, n), Fp(e, o));
      else if (K0(c, e, t, n, o)) o.stopPropagation();
      else if ((Fp(e, o), t & 4 && -1 < P0.indexOf(e))) {
        for (; c !== null; ) {
          var f = ha(c);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var g = On(f.pendingLanes);
                  if (g !== 0) {
                    var v = f;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var S = 1 << (31 - At(g));
                      ((v.entanglements[1] |= S), (g &= ~S));
                    }
                    (bi(f), (xe & 6) === 0 && ((zo = Rt() + 500), is(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((v = Ln(f, 2)), v !== null && Mt(v, f, 2), _o(), Uu(f, 2));
            }
          if (((f = Hu(o)), f === null && Cu(e, t, o, Vo, n), f === c)) break;
          c = f;
        }
        c !== null && o.stopPropagation();
      } else Cu(e, t, o, null, n);
    }
  }
  function Hu(e) {
    return ((e = Vr(e)), qu(e));
  }
  var Vo = null;
  function qu(e) {
    if (((Vo = null), (e = da(e)), e !== null)) {
      var t = u(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Vo = e), null);
  }
  function Qp(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Nv()) {
          case Wf:
            return 2;
          case ed:
            return 8;
          case Ms:
          case Av:
            return 32;
          case td:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vu = !1,
    yn = null,
    vn = null,
    bn = null,
    cs = new Map(),
    us = new Map(),
    xn = [],
    P0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Fp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        vn = null;
        break;
      case "mouseover":
      case "mouseout":
        bn = null;
        break;
      case "pointerover":
      case "pointerout":
        cs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        us.delete(t.pointerId);
    }
  }
  function fs(e, t, n, o, c, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: o,
          nativeEvent: f,
          targetContainers: [c],
        }),
        t !== null && ((t = ha(t)), t !== null && Gp(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function K0(e, t, n, o, c) {
    switch (t) {
      case "focusin":
        return ((yn = fs(yn, e, t, n, o, c)), !0);
      case "dragenter":
        return ((vn = fs(vn, e, t, n, o, c)), !0);
      case "mouseover":
        return ((bn = fs(bn, e, t, n, o, c)), !0);
      case "pointerover":
        var f = c.pointerId;
        return (cs.set(f, fs(cs.get(f) || null, e, t, n, o, c)), !0);
      case "gotpointercapture":
        return (
          (f = c.pointerId),
          us.set(f, fs(us.get(f) || null, e, t, n, o, c)),
          !0
        );
    }
    return !1;
  }
  function Zp(e) {
    var t = da(e.target);
    if (t !== null) {
      var n = u(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              od(e.priority, function () {
                Xp(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = h(n)), t !== null)) {
            ((e.blockedOn = t),
              od(e.priority, function () {
                Xp(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Hu(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        ((qr = o), n.target.dispatchEvent(o), (qr = null));
      } else return ((t = ha(n)), t !== null && Gp(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Pp(e, t, n) {
    Yo(e) && n.delete(t);
  }
  function I0() {
    ((Vu = !1),
      yn !== null && Yo(yn) && (yn = null),
      vn !== null && Yo(vn) && (vn = null),
      bn !== null && Yo(bn) && (bn = null),
      cs.forEach(Pp),
      us.forEach(Pp));
  }
  function Go(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vu ||
        ((Vu = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, I0)));
  }
  var Xo = null;
  function Kp(e) {
    Xo !== e &&
      ((Xo = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Xo === e && (Xo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            o = e[t + 1],
            c = e[t + 2];
          if (typeof o != "function") {
            if (qu(o || n) === null) continue;
            break;
          }
          var f = ha(n);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Hc(f, { pending: !0, data: c, method: n.method, action: o }, o, c));
        }
      }));
  }
  function Pa(e) {
    function t(S) {
      return Go(S, e);
    }
    (yn !== null && Go(yn, e),
      vn !== null && Go(vn, e),
      bn !== null && Go(bn, e),
      cs.forEach(t),
      us.forEach(t));
    for (var n = 0; n < xn.length; n++) {
      var o = xn[n];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < xn.length && ((n = xn[0]), n.blockedOn === null); )
      (Zp(n), n.blockedOn === null && xn.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (o = 0; o < n.length; o += 3) {
        var c = n[o],
          f = n[o + 1],
          g = c[zt] || null;
        if (typeof f == "function") g || Kp(n);
        else if (g) {
          var v = null;
          if (f && f.hasAttribute("formAction")) {
            if (((c = f), (g = f[zt] || null))) v = g.formAction;
            else if (qu(c) !== null) continue;
          } else v = g.action;
          (typeof v == "function" ? (n[o + 1] = v) : (n.splice(o, 3), (o -= 3)),
            Kp(n));
        }
      }
  }
  function Ip() {
    function e(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (g) {
              return (c = g);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (c !== null && (c(), (c = null)), o || setTimeout(n, 20));
    }
    function n() {
      if (!o && !navigation.transition) {
        var f = navigation.currentEntry;
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var o = !1,
        c = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((o = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            c !== null && (c(), (c = null)));
        }
      );
    }
  }
  function Yu(e) {
    this._internalRoot = e;
  }
  ((Qo.prototype.render = Yu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var n = t.current,
        o = Vt();
      Vp(n, o, e, t, null, null);
    }),
    (Qo.prototype.unmount = Yu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Vp(e.current, 2, null, e, null, null), _o(), (t[fa] = null));
        }
      }));
  function Qo(e) {
    this._internalRoot = e;
  }
  Qo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = sd();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < xn.length && t !== 0 && t < xn[n].priority; n++);
      (xn.splice(n, 0, e), n === 0 && Zp(e));
    }
  };
  var Jp = i.version;
  if (Jp !== "19.2.4") throw Error(s(527, Jp, "19.2.4"));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = y(t)),
      (e = e !== null ? x(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var J0 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fo.isDisabled && Fo.supportsFiber)
      try {
        ((xl = Fo.inject(J0)), (Nt = Fo));
      } catch {}
  }
  return (
    (hs.createRoot = function (e, t) {
      if (!r(e)) throw Error(s(299));
      var n = !1,
        o = "",
        c = am,
        f = lm,
        g = sm;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError)),
        (t = Hp(e, 1, !1, null, null, n, o, null, c, f, g, Ip)),
        (e[fa] = t.current),
        zu(e),
        new Yu(t)
      );
    }),
    (hs.hydrateRoot = function (e, t, n) {
      if (!r(e)) throw Error(s(299));
      var o = !1,
        c = "",
        f = am,
        g = lm,
        v = sm,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (t = Hp(e, 1, !0, t, n ?? null, o, c, S, f, g, v, Ip)),
        (t.context = qp(null)),
        (n = t.current),
        (o = Vt()),
        (o = Rr(o)),
        (c = ln(o)),
        (c.callback = null),
        sn(n, c, o),
        (n = o),
        (t.current.lanes = n),
        Sl(t, n),
        bi(t),
        (e[fa] = t.current),
        zu(e),
        new Qo(t)
      );
    }),
    (hs.version = "19.2.4"),
    hs
  );
}
var og;
function o2() {
  if (og) return Qu.exports;
  og = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Qu.exports = s2()), Qu.exports);
}
var r2 = o2();
const c2 = wy(r2);
/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var rg = "popstate";
function cg(a) {
  return (
    typeof a == "object" &&
    a != null &&
    "pathname" in a &&
    "search" in a &&
    "hash" in a &&
    "state" in a &&
    "key" in a
  );
}
function u2(a = {}) {
  function i(s, r) {
    var y;
    let u = (y = r.state) == null ? void 0 : y.masked,
      { pathname: d, search: h, hash: p } = u || s.location;
    return bf(
      "",
      { pathname: d, search: h, hash: p },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default",
      u
        ? {
            pathname: s.location.pathname,
            search: s.location.search,
            hash: s.location.hash,
          }
        : void 0,
    );
  }
  function l(s, r) {
    return typeof r == "string" ? r : ys(r);
  }
  return d2(i, l, null, a);
}
function Ue(a, i) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(i);
}
function zi(a, i) {
  if (!a) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function f2() {
  return Math.random().toString(36).substring(2, 10);
}
function ug(a, i) {
  return {
    usr: a.state,
    key: a.key,
    idx: i,
    masked: a.unstable_mask
      ? { pathname: a.pathname, search: a.search, hash: a.hash }
      : void 0,
  };
}
function bf(a, i, l = null, s, r) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? yl(i) : i),
    state: l,
    key: (i && i.key) || s || f2(),
    unstable_mask: r,
  };
}
function ys({ pathname: a = "/", search: i = "", hash: l = "" }) {
  return (
    i && i !== "?" && (a += i.charAt(0) === "?" ? i : "?" + i),
    l && l !== "#" && (a += l.charAt(0) === "#" ? l : "#" + l),
    a
  );
}
function yl(a) {
  let i = {};
  if (a) {
    let l = a.indexOf("#");
    l >= 0 && ((i.hash = a.substring(l)), (a = a.substring(0, l)));
    let s = a.indexOf("?");
    (s >= 0 && ((i.search = a.substring(s)), (a = a.substring(0, s))),
      a && (i.pathname = a));
  }
  return i;
}
function d2(a, i, l, s = {}) {
  let { window: r = document.defaultView, v5Compat: u = !1 } = s,
    d = r.history,
    h = "POP",
    p = null,
    y = x();
  y == null && ((y = 0), d.replaceState({ ...d.state, idx: y }, ""));
  function x() {
    return (d.state || { idx: null }).idx;
  }
  function b() {
    h = "POP";
    let E = x(),
      A = E == null ? null : E - y;
    ((y = E), p && p({ action: h, location: M.location, delta: A }));
  }
  function w(E, A) {
    h = "PUSH";
    let q = cg(E) ? E : bf(M.location, E, A);
    y = x() + 1;
    let Y = ug(q, y),
      G = M.createHref(q.unstable_mask || q);
    try {
      d.pushState(Y, "", G);
    } catch (Z) {
      if (Z instanceof DOMException && Z.name === "DataCloneError") throw Z;
      r.location.assign(G);
    }
    u && p && p({ action: h, location: M.location, delta: 1 });
  }
  function z(E, A) {
    h = "REPLACE";
    let q = cg(E) ? E : bf(M.location, E, A);
    y = x();
    let Y = ug(q, y),
      G = M.createHref(q.unstable_mask || q);
    (d.replaceState(Y, "", G),
      u && p && p({ action: h, location: M.location, delta: 0 }));
  }
  function T(E) {
    return h2(E);
  }
  let M = {
    get action() {
      return h;
    },
    get location() {
      return a(r, d);
    },
    listen(E) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(rg, b),
        (p = E),
        () => {
          (r.removeEventListener(rg, b), (p = null));
        }
      );
    },
    createHref(E) {
      return i(r, E);
    },
    createURL: T,
    encodeLocation(E) {
      let A = T(E);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: w,
    replace: z,
    go(E) {
      return d.go(E);
    },
  };
  return M;
}
function h2(a, i = !1) {
  let l = "http://localhost";
  (typeof window < "u" &&
    (l =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ue(l, "No window.location.(origin|href) available to create URL"));
  let s = typeof a == "string" ? a : ys(a);
  return (
    (s = s.replace(/ $/, "%20")),
    !i && s.startsWith("//") && (s = l + s),
    new URL(s, l)
  );
}
function Sy(a, i, l = "/") {
  return m2(a, i, l, !1);
}
function m2(a, i, l, s) {
  let r = typeof i == "string" ? yl(i) : i,
    u = Pi(r.pathname || "/", l);
  if (u == null) return null;
  let d = zy(a);
  p2(d);
  let h = null;
  for (let p = 0; h == null && p < d.length; ++p) {
    let y = T2(u);
    h = C2(d[p], y, s);
  }
  return h;
}
function zy(a, i = [], l = [], s = "", r = !1) {
  let u = (d, h, p = r, y) => {
    let x = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    if (x.relativePath.startsWith("/")) {
      if (!x.relativePath.startsWith(s) && p) return;
      (Ue(
        x.relativePath.startsWith(s),
        `Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (x.relativePath = x.relativePath.slice(s.length)));
    }
    let b = Si([s, x.relativePath]),
      w = l.concat(x);
    (d.children &&
      d.children.length > 0 &&
      (Ue(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`,
      ),
      zy(d.children, i, w, b, p)),
      !(d.path == null && !d.index) &&
        i.push({ path: b, score: S2(b, d.index), routesMeta: w }));
  };
  return (
    a.forEach((d, h) => {
      var p;
      if (d.path === "" || !((p = d.path) != null && p.includes("?"))) u(d, h);
      else for (let y of Cy(d.path)) u(d, h, !0, y);
    }),
    i
  );
}
function Cy(a) {
  let i = a.split("/");
  if (i.length === 0) return [];
  let [l, ...s] = i,
    r = l.endsWith("?"),
    u = l.replace(/\?$/, "");
  if (s.length === 0) return r ? [u, ""] : [u];
  let d = Cy(s.join("/")),
    h = [];
  return (
    h.push(...d.map((p) => (p === "" ? u : [u, p].join("/")))),
    r && h.push(...d),
    h.map((p) => (a.startsWith("/") && p === "" ? "/" : p))
  );
}
function p2(a) {
  a.sort((i, l) =>
    i.score !== l.score
      ? l.score - i.score
      : z2(
          i.routesMeta.map((s) => s.childrenIndex),
          l.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
var g2 = /^:[\w-]+$/,
  y2 = 3,
  v2 = 2,
  b2 = 1,
  x2 = 10,
  w2 = -2,
  fg = (a) => a === "*";
function S2(a, i) {
  let l = a.split("/"),
    s = l.length;
  return (
    l.some(fg) && (s += w2),
    i && (s += v2),
    l
      .filter((r) => !fg(r))
      .reduce((r, u) => r + (g2.test(u) ? y2 : u === "" ? b2 : x2), s)
  );
}
function z2(a, i) {
  return a.length === i.length && a.slice(0, -1).every((s, r) => s === i[r])
    ? a[a.length - 1] - i[i.length - 1]
    : 0;
}
function C2(a, i, l = !1) {
  let { routesMeta: s } = a,
    r = {},
    u = "/",
    d = [];
  for (let h = 0; h < s.length; ++h) {
    let p = s[h],
      y = h === s.length - 1,
      x = u === "/" ? i : i.slice(u.length) || "/",
      b = rr(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
        x,
      ),
      w = p.route;
    if (
      (!b &&
        y &&
        l &&
        !s[s.length - 1].route.index &&
        (b = rr(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          x,
        )),
      !b)
    )
      return null;
    (Object.assign(r, b.params),
      d.push({
        params: r,
        pathname: Si([u, b.pathname]),
        pathnameBase: D2(Si([u, b.pathnameBase])),
        route: w,
      }),
      b.pathnameBase !== "/" && (u = Si([u, b.pathnameBase])));
  }
  return d;
}
function rr(a, i) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [l, s] = _2(a.path, a.caseSensitive, a.end),
    r = i.match(l);
  if (!r) return null;
  let u = r[0],
    d = u.replace(/(.)\/+$/, "$1"),
    h = r.slice(1);
  return {
    params: s.reduce((y, { paramName: x, isOptional: b }, w) => {
      if (x === "*") {
        let T = h[w] || "";
        d = u.slice(0, u.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const z = h[w];
      return (
        b && !z ? (y[x] = void 0) : (y[x] = (z || "").replace(/%2F/g, "/")),
        y
      );
    }, {}),
    pathname: u,
    pathnameBase: d,
    pattern: a,
  };
}
function _2(a, i = !1, l = !0) {
  zi(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`,
  );
  let s = [],
    r =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (d, h, p, y, x) => {
          if ((s.push({ paramName: h, isOptional: p != null }), p)) {
            let b = x.charAt(y + d.length);
            return b && b !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    a.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (r += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : l
        ? (r += "\\/*$")
        : a !== "" && a !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, i ? void 0 : "i"), s]
  );
}
function T2(a) {
  try {
    return a
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      zi(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`,
      ),
      a
    );
  }
}
function Pi(a, i) {
  if (i === "/") return a;
  if (!a.toLowerCase().startsWith(i.toLowerCase())) return null;
  let l = i.endsWith("/") ? i.length - 1 : i.length,
    s = a.charAt(l);
  return s && s !== "/" ? null : a.slice(l) || "/";
}
var E2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function j2(a, i = "/") {
  let {
      pathname: l,
      search: s = "",
      hash: r = "",
    } = typeof a == "string" ? yl(a) : a,
    u;
  return (
    l
      ? ((l = l.replace(/\/\/+/g, "/")),
        l.startsWith("/") ? (u = dg(l.substring(1), "/")) : (u = dg(l, i)))
      : (u = i),
    { pathname: u, search: O2(s), hash: R2(r) }
  );
}
function dg(a, i) {
  let l = i.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((r) => {
      r === ".." ? l.length > 1 && l.pop() : r !== "." && l.push(r);
    }),
    l.length > 1 ? l.join("/") : "/"
  );
}
function Ku(a, i, l, s) {
  return `Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function M2(a) {
  return a.filter(
    (i, l) => l === 0 || (i.route.path && i.route.path.length > 0),
  );
}
function _y(a) {
  let i = M2(a);
  return i.map((l, s) => (s === i.length - 1 ? l.pathname : l.pathnameBase));
}
function Af(a, i, l, s = !1) {
  let r;
  typeof a == "string"
    ? (r = yl(a))
    : ((r = { ...a }),
      Ue(
        !r.pathname || !r.pathname.includes("?"),
        Ku("?", "pathname", "search", r),
      ),
      Ue(
        !r.pathname || !r.pathname.includes("#"),
        Ku("#", "pathname", "hash", r),
      ),
      Ue(!r.search || !r.search.includes("#"), Ku("#", "search", "hash", r)));
  let u = a === "" || r.pathname === "",
    d = u ? "/" : r.pathname,
    h;
  if (d == null) h = l;
  else {
    let b = i.length - 1;
    if (!s && d.startsWith("..")) {
      let w = d.split("/");
      for (; w[0] === ".."; ) (w.shift(), (b -= 1));
      r.pathname = w.join("/");
    }
    h = b >= 0 ? i[b] : "/";
  }
  let p = j2(r, h),
    y = d && d !== "/" && d.endsWith("/"),
    x = (u || d === ".") && l.endsWith("/");
  return (!p.pathname.endsWith("/") && (y || x) && (p.pathname += "/"), p);
}
var Si = (a) => a.join("/").replace(/\/\/+/g, "/"),
  D2 = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  O2 = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  R2 = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a),
  N2 = class {
    constructor(a, i, l, s = !1) {
      ((this.status = a),
        (this.statusText = i || ""),
        (this.internal = s),
        l instanceof Error
          ? ((this.data = l.toString()), (this.error = l))
          : (this.data = l));
    }
  };
function A2(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
function k2(a) {
  return (
    a
      .map((i) => i.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var Ty =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function Ey(a, i) {
  let l = a;
  if (typeof l != "string" || !E2.test(l))
    return { absoluteURL: void 0, isExternal: !1, to: l };
  let s = l,
    r = !1;
  if (Ty)
    try {
      let u = new URL(window.location.href),
        d = l.startsWith("//") ? new URL(u.protocol + l) : new URL(l),
        h = Pi(d.pathname, i);
      d.origin === u.origin && h != null
        ? (l = h + d.search + d.hash)
        : (r = !0);
    } catch {
      zi(
        !1,
        `<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: s, isExternal: r, to: l };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var jy = ["POST", "PUT", "PATCH", "DELETE"];
new Set(jy);
var L2 = ["GET", ...jy];
new Set(L2);
var vl = D.createContext(null);
vl.displayName = "DataRouter";
var vr = D.createContext(null);
vr.displayName = "DataRouterState";
var U2 = D.createContext(!1),
  My = D.createContext({ isTransitioning: !1 });
My.displayName = "ViewTransition";
var B2 = D.createContext(new Map());
B2.displayName = "Fetchers";
var H2 = D.createContext(null);
H2.displayName = "Await";
var si = D.createContext(null);
si.displayName = "Navigation";
var Ss = D.createContext(null);
Ss.displayName = "Location";
var Ki = D.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ki.displayName = "Route";
var kf = D.createContext(null);
kf.displayName = "RouteError";
var Dy = "REACT_ROUTER_ERROR",
  q2 = "REDIRECT",
  V2 = "ROUTE_ERROR_RESPONSE";
function Y2(a) {
  if (a.startsWith(`${Dy}:${q2}:{`))
    try {
      let i = JSON.parse(a.slice(28));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string" &&
        typeof i.location == "string" &&
        typeof i.reloadDocument == "boolean" &&
        typeof i.replace == "boolean"
      )
        return i;
    } catch {}
}
function G2(a) {
  if (a.startsWith(`${Dy}:${V2}:{`))
    try {
      let i = JSON.parse(a.slice(40));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string"
      )
        return new N2(i.status, i.statusText, i.data);
    } catch {}
}
function X2(a, { relative: i } = {}) {
  Ue(
    zs(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: l, navigator: s } = D.useContext(si),
    { hash: r, pathname: u, search: d } = Cs(a, { relative: i }),
    h = u;
  return (
    l !== "/" && (h = u === "/" ? l : Si([l, u])),
    s.createHref({ pathname: h, search: d, hash: r })
  );
}
function zs() {
  return D.useContext(Ss) != null;
}
function Ci() {
  return (
    Ue(
      zs(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    D.useContext(Ss).location
  );
}
var Oy =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ry(a) {
  D.useContext(si).static || D.useLayoutEffect(a);
}
function Q2() {
  let { isDataRoute: a } = D.useContext(Ki);
  return a ? ab() : F2();
}
function F2() {
  Ue(
    zs(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let a = D.useContext(vl),
    { basename: i, navigator: l } = D.useContext(si),
    { matches: s } = D.useContext(Ki),
    { pathname: r } = Ci(),
    u = JSON.stringify(_y(s)),
    d = D.useRef(!1);
  return (
    Ry(() => {
      d.current = !0;
    }),
    D.useCallback(
      (p, y = {}) => {
        if ((zi(d.current, Oy), !d.current)) return;
        if (typeof p == "number") {
          l.go(p);
          return;
        }
        let x = Af(p, JSON.parse(u), r, y.relative === "path");
        (a == null &&
          i !== "/" &&
          (x.pathname = x.pathname === "/" ? i : Si([i, x.pathname])),
          (y.replace ? l.replace : l.push)(x, y.state, y));
      },
      [i, l, u, r, a],
    )
  );
}
D.createContext(null);
function Cs(a, { relative: i } = {}) {
  let { matches: l } = D.useContext(Ki),
    { pathname: s } = Ci(),
    r = JSON.stringify(_y(l));
  return D.useMemo(() => Af(a, JSON.parse(r), s, i === "path"), [a, r, s, i]);
}
function Z2(a, i) {
  return Ny(a, i);
}
function Ny(a, i, l) {
  var E;
  Ue(
    zs(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: s } = D.useContext(si),
    { matches: r } = D.useContext(Ki),
    u = r[r.length - 1],
    d = u ? u.params : {},
    h = u ? u.pathname : "/",
    p = u ? u.pathnameBase : "/",
    y = u && u.route;
  {
    let A = (y && y.path) || "";
    ky(
      h,
      !y || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`,
    );
  }
  let x = Ci(),
    b;
  if (i) {
    let A = typeof i == "string" ? yl(i) : i;
    (Ue(
      p === "/" || ((E = A.pathname) == null ? void 0 : E.startsWith(p)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${A.pathname}" was given in the \`location\` prop.`,
    ),
      (b = A));
  } else b = x;
  let w = b.pathname || "/",
    z = w;
  if (p !== "/") {
    let A = p.replace(/^\//, "").split("/");
    z = "/" + w.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let T = Sy(a, { pathname: z });
  (zi(
    y || T != null,
    `No routes matched location "${b.pathname}${b.search}${b.hash}" `,
  ),
    zi(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let M = $2(
    T &&
      T.map((A) =>
        Object.assign({}, A, {
          params: Object.assign({}, d, A.params),
          pathname: Si([
            p,
            s.encodeLocation
              ? s.encodeLocation(
                  A.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : A.pathname,
          ]),
          pathnameBase:
            A.pathnameBase === "/"
              ? p
              : Si([
                  p,
                  s.encodeLocation
                    ? s.encodeLocation(
                        A.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : A.pathnameBase,
                ]),
        }),
      ),
    r,
    l,
  );
  return i && M
    ? D.createElement(
        Ss.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              unstable_mask: void 0,
              ...b,
            },
            navigationType: "POP",
          },
        },
        M,
      )
    : M;
}
function P2() {
  let a = nb(),
    i = A2(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    l = a instanceof Error ? a.stack : null,
    s = "rgba(200,200,200, 0.5)",
    r = { padding: "0.5rem", backgroundColor: s },
    u = { padding: "2px 4px", backgroundColor: s },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (d = D.createElement(
      D.Fragment,
      null,
      D.createElement("p", null, "💿 Hey developer 👋"),
      D.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        D.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        D.createElement("code", { style: u }, "errorElement"),
        " prop on your route.",
      ),
    )),
    D.createElement(
      D.Fragment,
      null,
      D.createElement("h2", null, "Unexpected Application Error!"),
      D.createElement("h3", { style: { fontStyle: "italic" } }, i),
      l ? D.createElement("pre", { style: r }, l) : null,
      d,
    )
  );
}
var K2 = D.createElement(P2, null),
  Ay = class extends D.Component {
    constructor(a) {
      (super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        }));
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, i) {
      return i.location !== a.location ||
        (i.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : i.error,
            location: i.location,
            revalidation: a.revalidation || i.revalidation,
          };
    }
    componentDidCatch(a, i) {
      this.props.onError
        ? this.props.onError(a, i)
        : console.error(
            "React Router caught the following error during render",
            a,
          );
    }
    render() {
      let a = this.state.error;
      if (
        this.context &&
        typeof a == "object" &&
        a &&
        "digest" in a &&
        typeof a.digest == "string"
      ) {
        const l = G2(a.digest);
        l && (a = l);
      }
      let i =
        a !== void 0
          ? D.createElement(
              Ki.Provider,
              { value: this.props.routeContext },
              D.createElement(kf.Provider, {
                value: a,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? D.createElement(I2, { error: a }, i) : i;
    }
  };
Ay.contextType = U2;
var Iu = new WeakMap();
function I2({ children: a, error: i }) {
  let { basename: l } = D.useContext(si);
  if (
    typeof i == "object" &&
    i &&
    "digest" in i &&
    typeof i.digest == "string"
  ) {
    let s = Y2(i.digest);
    if (s) {
      let r = Iu.get(i);
      if (r) throw r;
      let u = Ey(s.location, l);
      if (Ty && !Iu.get(i))
        if (u.isExternal || s.reloadDocument)
          window.location.href = u.absoluteURL || u.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(u.to, {
              replace: s.replace,
            }),
          );
          throw (Iu.set(i, d), d);
        }
      return D.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${u.absoluteURL || u.to}`,
      });
    }
  }
  return a;
}
function J2({ routeContext: a, match: i, children: l }) {
  let s = D.useContext(vl);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = i.route.id),
    D.createElement(Ki.Provider, { value: a }, l)
  );
}
function $2(a, i = [], l) {
  let s = l == null ? void 0 : l.state;
  if (a == null) {
    if (!s) return null;
    if (s.errors) a = s.matches;
    else if (i.length === 0 && !s.initialized && s.matches.length > 0)
      a = s.matches;
    else return null;
  }
  let r = a,
    u = s == null ? void 0 : s.errors;
  if (u != null) {
    let x = r.findIndex(
      (b) => b.route.id && (u == null ? void 0 : u[b.route.id]) !== void 0,
    );
    (Ue(
      x >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`,
    ),
      (r = r.slice(0, Math.min(r.length, x + 1))));
  }
  let d = !1,
    h = -1;
  if (l && s) {
    d = s.renderFallback;
    for (let x = 0; x < r.length; x++) {
      let b = r[x];
      if (
        ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (h = x),
        b.route.id)
      ) {
        let { loaderData: w, errors: z } = s,
          T =
            b.route.loader &&
            !w.hasOwnProperty(b.route.id) &&
            (!z || z[b.route.id] === void 0);
        if (b.route.lazy || T) {
          (l.isStatic && (d = !0),
            h >= 0 ? (r = r.slice(0, h + 1)) : (r = [r[0]]));
          break;
        }
      }
    }
  }
  let p = l == null ? void 0 : l.onError,
    y =
      s && p
        ? (x, b) => {
            var w, z;
            p(x, {
              location: s.location,
              params:
                ((z = (w = s.matches) == null ? void 0 : w[0]) == null
                  ? void 0
                  : z.params) ?? {},
              unstable_pattern: k2(s.matches),
              errorInfo: b,
            });
          }
        : void 0;
  return r.reduceRight((x, b, w) => {
    let z,
      T = !1,
      M = null,
      E = null;
    s &&
      ((z = u && b.route.id ? u[b.route.id] : void 0),
      (M = b.route.errorElement || K2),
      d &&
        (h < 0 && w === 0
          ? (ky(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (T = !0),
            (E = null))
          : h === w &&
            ((T = !0), (E = b.route.hydrateFallbackElement || null))));
    let A = i.concat(r.slice(0, w + 1)),
      q = () => {
        let Y;
        return (
          z
            ? (Y = M)
            : T
              ? (Y = E)
              : b.route.Component
                ? (Y = D.createElement(b.route.Component, null))
                : b.route.element
                  ? (Y = b.route.element)
                  : (Y = x),
          D.createElement(J2, {
            match: b,
            routeContext: { outlet: x, matches: A, isDataRoute: s != null },
            children: Y,
          })
        );
      };
    return s && (b.route.ErrorBoundary || b.route.errorElement || w === 0)
      ? D.createElement(Ay, {
          location: s.location,
          revalidation: s.revalidation,
          component: M,
          error: z,
          children: q(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
          onError: y,
        })
      : q();
  }, null);
}
function Lf(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function W2(a) {
  let i = D.useContext(vl);
  return (Ue(i, Lf(a)), i);
}
function eb(a) {
  let i = D.useContext(vr);
  return (Ue(i, Lf(a)), i);
}
function tb(a) {
  let i = D.useContext(Ki);
  return (Ue(i, Lf(a)), i);
}
function Uf(a) {
  let i = tb(a),
    l = i.matches[i.matches.length - 1];
  return (
    Ue(
      l.route.id,
      `${a} can only be used on routes that contain a unique "id"`,
    ),
    l.route.id
  );
}
function ib() {
  return Uf("useRouteId");
}
function nb() {
  var s;
  let a = D.useContext(kf),
    i = eb("useRouteError"),
    l = Uf("useRouteError");
  return a !== void 0 ? a : (s = i.errors) == null ? void 0 : s[l];
}
function ab() {
  let { router: a } = W2("useNavigate"),
    i = Uf("useNavigate"),
    l = D.useRef(!1);
  return (
    Ry(() => {
      l.current = !0;
    }),
    D.useCallback(
      async (r, u = {}) => {
        (zi(l.current, Oy),
          l.current &&
            (typeof r == "number"
              ? await a.navigate(r)
              : await a.navigate(r, { fromRouteId: i, ...u })));
      },
      [a, i],
    )
  );
}
var hg = {};
function ky(a, i, l) {
  !i && !hg[a] && ((hg[a] = !0), zi(!1, l));
}
D.memo(lb);
function lb({ routes: a, future: i, state: l, isStatic: s, onError: r }) {
  return Ny(a, void 0, { state: l, isStatic: s, onError: r });
}
function Sn(a) {
  Ue(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function sb({
  basename: a = "/",
  children: i = null,
  location: l,
  navigationType: s = "POP",
  navigator: r,
  static: u = !1,
  unstable_useTransitions: d,
}) {
  Ue(
    !zs(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let h = a.replace(/^\/*/, "/"),
    p = D.useMemo(
      () => ({
        basename: h,
        navigator: r,
        static: u,
        unstable_useTransitions: d,
        future: {},
      }),
      [h, r, u, d],
    );
  typeof l == "string" && (l = yl(l));
  let {
      pathname: y = "/",
      search: x = "",
      hash: b = "",
      state: w = null,
      key: z = "default",
      unstable_mask: T,
    } = l,
    M = D.useMemo(() => {
      let E = Pi(y, h);
      return E == null
        ? null
        : {
            location: {
              pathname: E,
              search: x,
              hash: b,
              state: w,
              key: z,
              unstable_mask: T,
            },
            navigationType: s,
          };
    }, [h, y, x, b, w, z, s, T]);
  return (
    zi(
      M != null,
      `<Router basename="${h}"> is not able to match the URL "${y}${x}${b}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    M == null
      ? null
      : D.createElement(
          si.Provider,
          { value: p },
          D.createElement(Ss.Provider, { children: i, value: M }),
        )
  );
}
function ob({ children: a, location: i }) {
  return Z2(xf(a), i);
}
function xf(a, i = []) {
  let l = [];
  return (
    D.Children.forEach(a, (s, r) => {
      if (!D.isValidElement(s)) return;
      let u = [...i, r];
      if (s.type === D.Fragment) {
        l.push.apply(l, xf(s.props.children, u));
        return;
      }
      (Ue(
        s.type === Sn,
        `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Ue(
          !s.props.index || !s.props.children,
          "An index route cannot have child routes.",
        ));
      let d = {
        id: s.props.id || u.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        middleware: s.props.middleware,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      (s.props.children && (d.children = xf(s.props.children, u)), l.push(d));
    }),
    l
  );
}
var nr = "get",
  ar = "application/x-www-form-urlencoded";
function br(a) {
  return typeof HTMLElement < "u" && a instanceof HTMLElement;
}
function rb(a) {
  return br(a) && a.tagName.toLowerCase() === "button";
}
function cb(a) {
  return br(a) && a.tagName.toLowerCase() === "form";
}
function ub(a) {
  return br(a) && a.tagName.toLowerCase() === "input";
}
function fb(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function db(a, i) {
  return a.button === 0 && (!i || i === "_self") && !fb(a);
}
var Zo = null;
function hb() {
  if (Zo === null)
    try {
      (new FormData(document.createElement("form"), 0), (Zo = !1));
    } catch {
      Zo = !0;
    }
  return Zo;
}
var mb = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Ju(a) {
  return a != null && !mb.has(a)
    ? (zi(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ar}"`,
      ),
      null)
    : a;
}
function pb(a, i) {
  let l, s, r, u, d;
  if (cb(a)) {
    let h = a.getAttribute("action");
    ((s = h ? Pi(h, i) : null),
      (l = a.getAttribute("method") || nr),
      (r = Ju(a.getAttribute("enctype")) || ar),
      (u = new FormData(a)));
  } else if (rb(a) || (ub(a) && (a.type === "submit" || a.type === "image"))) {
    let h = a.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = a.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((s = p ? Pi(p, i) : null),
      (l = a.getAttribute("formmethod") || h.getAttribute("method") || nr),
      (r =
        Ju(a.getAttribute("formenctype")) ||
        Ju(h.getAttribute("enctype")) ||
        ar),
      (u = new FormData(h, a)),
      !hb())
    ) {
      let { name: y, type: x, value: b } = a;
      if (x === "image") {
        let w = y ? `${y}.` : "";
        (u.append(`${w}x`, "0"), u.append(`${w}y`, "0"));
      } else y && u.append(y, b);
    }
  } else {
    if (br(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((l = nr), (s = null), (r = ar), (d = a));
  }
  return (
    u && r === "text/plain" && ((d = u), (u = void 0)),
    { action: s, method: l.toLowerCase(), encType: r, formData: u, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Bf(a, i) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(i);
}
function gb(a, i, l, s) {
  let r =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : a;
  return (
    l
      ? r.pathname.endsWith("/")
        ? (r.pathname = `${r.pathname}_.${s}`)
        : (r.pathname = `${r.pathname}.${s}`)
      : r.pathname === "/"
        ? (r.pathname = `_root.${s}`)
        : i && Pi(r.pathname, i) === "/"
          ? (r.pathname = `${i.replace(/\/$/, "")}/_root.${s}`)
          : (r.pathname = `${r.pathname.replace(/\/$/, "")}.${s}`),
    r
  );
}
async function yb(a, i) {
  if (a.id in i) return i[a.id];
  try {
    let l = await import(a.module);
    return ((i[a.id] = l), l);
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`,
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function vb(a) {
  return a == null
    ? !1
    : a.href == null
      ? a.rel === "preload" &&
        typeof a.imageSrcSet == "string" &&
        typeof a.imageSizes == "string"
      : typeof a.rel == "string" && typeof a.href == "string";
}
async function bb(a, i, l) {
  let s = await Promise.all(
    a.map(async (r) => {
      let u = i.routes[r.route.id];
      if (u) {
        let d = await yb(u, l);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return zb(
    s
      .flat(1)
      .filter(vb)
      .filter((r) => r.rel === "stylesheet" || r.rel === "preload")
      .map((r) =>
        r.rel === "stylesheet"
          ? { ...r, rel: "prefetch", as: "style" }
          : { ...r, rel: "prefetch" },
      ),
  );
}
function mg(a, i, l, s, r, u) {
  let d = (p, y) => (l[y] ? p.route.id !== l[y].route.id : !0),
    h = (p, y) => {
      var x;
      return (
        l[y].pathname !== p.pathname ||
        (((x = l[y].route.path) == null ? void 0 : x.endsWith("*")) &&
          l[y].params["*"] !== p.params["*"])
      );
    };
  return u === "assets"
    ? i.filter((p, y) => d(p, y) || h(p, y))
    : u === "data"
      ? i.filter((p, y) => {
          var b;
          let x = s.routes[p.route.id];
          if (!x || !x.hasLoader) return !1;
          if (d(p, y) || h(p, y)) return !0;
          if (p.route.shouldRevalidate) {
            let w = p.route.shouldRevalidate({
              currentUrl: new URL(
                r.pathname + r.search + r.hash,
                window.origin,
              ),
              currentParams: ((b = l[0]) == null ? void 0 : b.params) || {},
              nextUrl: new URL(a, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof w == "boolean") return w;
          }
          return !0;
        })
      : [];
}
function xb(a, i, { includeHydrateFallback: l } = {}) {
  return wb(
    a
      .map((s) => {
        let r = i.routes[s.route.id];
        if (!r) return [];
        let u = [r.module];
        return (
          r.clientActionModule && (u = u.concat(r.clientActionModule)),
          r.clientLoaderModule && (u = u.concat(r.clientLoaderModule)),
          l &&
            r.hydrateFallbackModule &&
            (u = u.concat(r.hydrateFallbackModule)),
          r.imports && (u = u.concat(r.imports)),
          u
        );
      })
      .flat(1),
  );
}
function wb(a) {
  return [...new Set(a)];
}
function Sb(a) {
  let i = {},
    l = Object.keys(a).sort();
  for (let s of l) i[s] = a[s];
  return i;
}
function zb(a, i) {
  let l = new Set();
  return (
    new Set(i),
    a.reduce((s, r) => {
      let u = JSON.stringify(Sb(r));
      return (l.has(u) || (l.add(u), s.push({ key: u, link: r })), s);
    }, [])
  );
}
function Ly() {
  let a = D.useContext(vl);
  return (
    Bf(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    a
  );
}
function Cb() {
  let a = D.useContext(vr);
  return (
    Bf(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    a
  );
}
var Hf = D.createContext(void 0);
Hf.displayName = "FrameworkContext";
function Uy() {
  let a = D.useContext(Hf);
  return (
    Bf(a, "You must render this element inside a <HydratedRouter> element"),
    a
  );
}
function _b(a, i) {
  let l = D.useContext(Hf),
    [s, r] = D.useState(!1),
    [u, d] = D.useState(!1),
    {
      onFocus: h,
      onBlur: p,
      onMouseEnter: y,
      onMouseLeave: x,
      onTouchStart: b,
    } = i,
    w = D.useRef(null);
  (D.useEffect(() => {
    if ((a === "render" && d(!0), a === "viewport")) {
      let M = (A) => {
          A.forEach((q) => {
            d(q.isIntersecting);
          });
        },
        E = new IntersectionObserver(M, { threshold: 0.5 });
      return (
        w.current && E.observe(w.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [a]),
    D.useEffect(() => {
      if (s) {
        let M = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [s]));
  let z = () => {
      r(!0);
    },
    T = () => {
      (r(!1), d(!1));
    };
  return l
    ? a !== "intent"
      ? [u, w, {}]
      : [
          u,
          w,
          {
            onFocus: ms(h, z),
            onBlur: ms(p, T),
            onMouseEnter: ms(y, z),
            onMouseLeave: ms(x, T),
            onTouchStart: ms(b, z),
          },
        ]
    : [!1, w, {}];
}
function ms(a, i) {
  return (l) => {
    (a && a(l), l.defaultPrevented || i(l));
  };
}
function Tb({ page: a, ...i }) {
  let { router: l } = Ly(),
    s = D.useMemo(() => Sy(l.routes, a, l.basename), [l.routes, a, l.basename]);
  return s ? D.createElement(jb, { page: a, matches: s, ...i }) : null;
}
function Eb(a) {
  let { manifest: i, routeModules: l } = Uy(),
    [s, r] = D.useState([]);
  return (
    D.useEffect(() => {
      let u = !1;
      return (
        bb(a, i, l).then((d) => {
          u || r(d);
        }),
        () => {
          u = !0;
        }
      );
    }, [a, i, l]),
    s
  );
}
function jb({ page: a, matches: i, ...l }) {
  let s = Ci(),
    { future: r, manifest: u, routeModules: d } = Uy(),
    { basename: h } = Ly(),
    { loaderData: p, matches: y } = Cb(),
    x = D.useMemo(() => mg(a, i, y, u, s, "data"), [a, i, y, u, s]),
    b = D.useMemo(() => mg(a, i, y, u, s, "assets"), [a, i, y, u, s]),
    w = D.useMemo(() => {
      if (a === s.pathname + s.search + s.hash) return [];
      let M = new Set(),
        E = !1;
      if (
        (i.forEach((q) => {
          var G;
          let Y = u.routes[q.route.id];
          !Y ||
            !Y.hasLoader ||
            ((!x.some((Z) => Z.route.id === q.route.id) &&
              q.route.id in p &&
              (G = d[q.route.id]) != null &&
              G.shouldRevalidate) ||
            Y.hasClientLoader
              ? (E = !0)
              : M.add(q.route.id));
        }),
        M.size === 0)
      )
        return [];
      let A = gb(a, h, r.unstable_trailingSlashAwareDataRequests, "data");
      return (
        E &&
          M.size > 0 &&
          A.searchParams.set(
            "_routes",
            i
              .filter((q) => M.has(q.route.id))
              .map((q) => q.route.id)
              .join(","),
          ),
        [A.pathname + A.search]
      );
    }, [h, r.unstable_trailingSlashAwareDataRequests, p, s, u, x, i, a, d]),
    z = D.useMemo(() => xb(b, u), [b, u]),
    T = Eb(b);
  return D.createElement(
    D.Fragment,
    null,
    w.map((M) =>
      D.createElement("link", {
        key: M,
        rel: "prefetch",
        as: "fetch",
        href: M,
        ...l,
      }),
    ),
    z.map((M) =>
      D.createElement("link", { key: M, rel: "modulepreload", href: M, ...l }),
    ),
    T.map(({ key: M, link: E }) =>
      D.createElement("link", {
        key: M,
        nonce: l.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? l.crossOrigin,
      }),
    ),
  );
}
function Mb(...a) {
  return (i) => {
    a.forEach((l) => {
      typeof l == "function" ? l(i) : l != null && (l.current = i);
    });
  };
}
var Db =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Db && (window.__reactRouterVersion = "7.13.1");
} catch {}
function Ob({
  basename: a,
  children: i,
  unstable_useTransitions: l,
  window: s,
}) {
  let r = D.useRef();
  r.current == null && (r.current = u2({ window: s, v5Compat: !0 }));
  let u = r.current,
    [d, h] = D.useState({ action: u.action, location: u.location }),
    p = D.useCallback(
      (y) => {
        l === !1 ? h(y) : D.startTransition(() => h(y));
      },
      [l],
    );
  return (
    D.useLayoutEffect(() => u.listen(p), [u, p]),
    D.createElement(sb, {
      basename: a,
      children: i,
      location: d.location,
      navigationType: d.action,
      navigator: u,
      unstable_useTransitions: l,
    })
  );
}
var By = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _s = D.forwardRef(function (
    {
      onClick: i,
      discover: l = "render",
      prefetch: s = "none",
      relative: r,
      reloadDocument: u,
      replace: d,
      unstable_mask: h,
      state: p,
      target: y,
      to: x,
      preventScrollReset: b,
      viewTransition: w,
      unstable_defaultShouldRevalidate: z,
      ...T
    },
    M,
  ) {
    let {
        basename: E,
        navigator: A,
        unstable_useTransitions: q,
      } = D.useContext(si),
      Y = typeof x == "string" && By.test(x),
      G = Ey(x, E);
    x = G.to;
    let Z = X2(x, { relative: r }),
      te = Ci(),
      J = null;
    if (h) {
      let Fe = Af(
        h,
        [],
        te.unstable_mask ? te.unstable_mask.pathname : "/",
        !0,
      );
      (E !== "/" &&
        (Fe.pathname = Fe.pathname === "/" ? E : Si([E, Fe.pathname])),
        (J = A.createHref(Fe)));
    }
    let [he, Oe, ke] = _b(s, T),
      We = kb(x, {
        replace: d,
        unstable_mask: h,
        state: p,
        target: y,
        preventScrollReset: b,
        relative: r,
        viewTransition: w,
        unstable_defaultShouldRevalidate: z,
        unstable_useTransitions: q,
      });
    function Le(Fe) {
      (i && i(Fe), Fe.defaultPrevented || We(Fe));
    }
    let ge = !(G.isExternal || u),
      Qe = D.createElement("a", {
        ...T,
        ...ke,
        href: (ge ? J : void 0) || G.absoluteURL || Z,
        onClick: ge ? Le : i,
        ref: Mb(M, Oe),
        target: y,
        "data-discover": !Y && l === "render" ? "true" : void 0,
      });
    return he && !Y
      ? D.createElement(D.Fragment, null, Qe, D.createElement(Tb, { page: Z }))
      : Qe;
  });
_s.displayName = "Link";
var Rb = D.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: l = !1,
    className: s = "",
    end: r = !1,
    style: u,
    to: d,
    viewTransition: h,
    children: p,
    ...y
  },
  x,
) {
  let b = Cs(d, { relative: y.relative }),
    w = Ci(),
    z = D.useContext(vr),
    { navigator: T, basename: M } = D.useContext(si),
    E = z != null && qb(b) && h === !0,
    A = T.encodeLocation ? T.encodeLocation(b).pathname : b.pathname,
    q = w.pathname,
    Y =
      z && z.navigation && z.navigation.location
        ? z.navigation.location.pathname
        : null;
  (l ||
    ((q = q.toLowerCase()),
    (Y = Y ? Y.toLowerCase() : null),
    (A = A.toLowerCase())),
    Y && M && (Y = Pi(Y, M) || Y));
  const G = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
  let Z = q === A || (!r && q.startsWith(A) && q.charAt(G) === "/"),
    te =
      Y != null &&
      (Y === A || (!r && Y.startsWith(A) && Y.charAt(A.length) === "/")),
    J = { isActive: Z, isPending: te, isTransitioning: E },
    he = Z ? i : void 0,
    Oe;
  typeof s == "function"
    ? (Oe = s(J))
    : (Oe = [
        s,
        Z ? "active" : null,
        te ? "pending" : null,
        E ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ke = typeof u == "function" ? u(J) : u;
  return D.createElement(
    _s,
    {
      ...y,
      "aria-current": he,
      className: Oe,
      ref: x,
      style: ke,
      to: d,
      viewTransition: h,
    },
    typeof p == "function" ? p(J) : p,
  );
});
Rb.displayName = "NavLink";
var Nb = D.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: i,
      navigate: l,
      reloadDocument: s,
      replace: r,
      state: u,
      method: d = nr,
      action: h,
      onSubmit: p,
      relative: y,
      preventScrollReset: x,
      viewTransition: b,
      unstable_defaultShouldRevalidate: w,
      ...z
    },
    T,
  ) => {
    let { unstable_useTransitions: M } = D.useContext(si),
      E = Bb(),
      A = Hb(h, { relative: y }),
      q = d.toLowerCase() === "get" ? "get" : "post",
      Y = typeof h == "string" && By.test(h),
      G = (Z) => {
        if ((p && p(Z), Z.defaultPrevented)) return;
        Z.preventDefault();
        let te = Z.nativeEvent.submitter,
          J = (te == null ? void 0 : te.getAttribute("formmethod")) || d,
          he = () =>
            E(te || Z.currentTarget, {
              fetcherKey: i,
              method: J,
              navigate: l,
              replace: r,
              state: u,
              relative: y,
              preventScrollReset: x,
              viewTransition: b,
              unstable_defaultShouldRevalidate: w,
            });
        M && l !== !1 ? D.startTransition(() => he()) : he();
      };
    return D.createElement("form", {
      ref: T,
      method: q,
      action: A,
      onSubmit: s ? p : G,
      ...z,
      "data-discover": !Y && a === "render" ? "true" : void 0,
    });
  },
);
Nb.displayName = "Form";
function Ab(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Hy(a) {
  let i = D.useContext(vl);
  return (Ue(i, Ab(a)), i);
}
function kb(
  a,
  {
    target: i,
    replace: l,
    unstable_mask: s,
    state: r,
    preventScrollReset: u,
    relative: d,
    viewTransition: h,
    unstable_defaultShouldRevalidate: p,
    unstable_useTransitions: y,
  } = {},
) {
  let x = Q2(),
    b = Ci(),
    w = Cs(a, { relative: d });
  return D.useCallback(
    (z) => {
      if (db(z, i)) {
        z.preventDefault();
        let T = l !== void 0 ? l : ys(b) === ys(w),
          M = () =>
            x(a, {
              replace: T,
              unstable_mask: s,
              state: r,
              preventScrollReset: u,
              relative: d,
              viewTransition: h,
              unstable_defaultShouldRevalidate: p,
            });
        y ? D.startTransition(() => M()) : M();
      }
    },
    [b, x, w, l, s, r, i, a, u, d, h, p, y],
  );
}
var Lb = 0,
  Ub = () => `__${String(++Lb)}__`;
function Bb() {
  let { router: a } = Hy("useSubmit"),
    { basename: i } = D.useContext(si),
    l = ib(),
    s = a.fetch,
    r = a.navigate;
  return D.useCallback(
    async (u, d = {}) => {
      let { action: h, method: p, encType: y, formData: x, body: b } = pb(u, i);
      if (d.navigate === !1) {
        let w = d.fetcherKey || Ub();
        await s(w, l, d.action || h, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: x,
          body: b,
          formMethod: d.method || p,
          formEncType: d.encType || y,
          flushSync: d.flushSync,
        });
      } else
        await r(d.action || h, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: x,
          body: b,
          formMethod: d.method || p,
          formEncType: d.encType || y,
          replace: d.replace,
          state: d.state,
          fromRouteId: l,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [s, r, i, l],
  );
}
function Hb(a, { relative: i } = {}) {
  let { basename: l } = D.useContext(si),
    s = D.useContext(Ki);
  Ue(s, "useFormAction must be used inside a RouteContext");
  let [r] = s.matches.slice(-1),
    u = { ...Cs(a || ".", { relative: i }) },
    d = Ci();
  if (a == null) {
    u.search = d.search;
    let h = new URLSearchParams(u.search),
      p = h.getAll("index");
    if (p.some((x) => x === "")) {
      (h.delete("index"),
        p.filter((b) => b).forEach((b) => h.append("index", b)));
      let x = h.toString();
      u.search = x ? `?${x}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      r.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (u.pathname = u.pathname === "/" ? l : Si([l, u.pathname])),
    ys(u)
  );
}
function qb(a, { relative: i } = {}) {
  let l = D.useContext(My);
  Ue(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = Hy("useViewTransitionState"),
    r = Cs(a, { relative: i });
  if (!l.isTransitioning) return !1;
  let u = Pi(l.currentLocation.pathname, s) || l.currentLocation.pathname,
    d = Pi(l.nextLocation.pathname, s) || l.nextLocation.pathname;
  return rr(r.pathname, d) != null || rr(r.pathname, u) != null;
}
const Vb = {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Andrea Feliziani",
      typedStrings: ["UI/UX Designer", "Front-end Developer"],
      subtitle: "I create digital experiences that blend design and technology",
      cta: "Get in Touch",
      downloadCv: "Download CV",
      location: "Milan, Italy",
      cardDesign: "UI/UX Design",
      cardDev: "Front-end",
    },
    about: {
      badge: "About Me",
      title: "About Me",
      bio1: "I'm a UI/UX Designer and Front-end Developer with a solid technical background acquired at the Technical Institute in Computer Science. I further refined my skills through a Bachelor's degree in Product Design in Ascoli Piceno, integrating my technical background with a broader perspective on design.",
      bio2: "My academic journey continued with a Master's degree in Theory and Technology of Communication at the University of Milano-Bicocca, where I deepened communication principles and developed practical skills in Front-end and UX/UI Design.",
      bio3: "Today I work as a UI/UX Designer and Front-end Developer: I analyze user needs, design intuitive solutions, and transform them into functional interfaces, balancing functionality, usability, and aesthetics.",
      downloadCv: "Download CV",
      designTitle: "UI/UX Designer",
      devTitle: "Front-end Developer",
    },
    counters: {
      title: "Highlights",
      company: "Company",
      experience: "Years of Experience",
      certifications: "Certifications",
    },
    education: {
      badge: "Education",
      title: "Academic Career",
      masters: {
        title: "Master's Degree",
        subtitle: "University Milano Bicocca",
        text: "Theory and Technology of Communication",
      },
      bachelors: {
        title: "Bachelor's Degree",
        subtitle: "Unicam Camerino",
        text: "Industrial and Environmental Design",
      },
      diploma: {
        title: "High School Diploma",
        subtitle: "ITIS San Severino Marche",
        text: "Computer Science",
      },
    },
    portfolio: {
      badge: "My Work",
      title: "Portfolio",
      filterAll: "All",
      filterDesign: "UI/UX Design",
      filterFrontend: "Front-end",
      viewProject: "View",
      projects: {
        study: {
          description:
            "A student application that facilitates study organization and collaboration.",
        },
        opla: {
          description:
            "Mobile app for event and social activity management aimed at retirees with an intuitive interface.",
        },
        serenity: {
          description:
            "Website for a travel agency focusing on user experience and responsive design.",
        },
        botanicare: { description: "Plant care with a simple touch" },
        valeri: {
          description: "Redesign of an application and website for a gift shop",
        },
        secure: {
          description:
            "Cybersecurity platform with interactive dashboard and data visualization.",
        },
      },
    },
    contact: {
      badge: "Contact Me",
      title: "Let's Stay in Touch",
      phone: "Phone",
      nameLabel: "Name",
      emailLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      send: "Send Message",
    },
    footer: { rights: "© 2025 Andrea Feliziani. All rights reserved." },
    project: {
      exploreProject: "Explore the Project",
      showcase: "Showcase",
      projectTitle: "The Project",
      howItWorks: "How It Works",
      resources: "Resources",
      fullProject: "The Full Project",
      exploreDetails: "Explore all the details",
      documentation: "Documentation",
      figmaPrototype: "Figma Prototype",
      scroll: "Scroll",
      prototype: "Prototype",
      completePrototype: "The Complete Prototype",
      accessDocs:
        "Access the complete project documentation and visit the Figma prototype to explore all implemented features.",
    },
    botanicare: {
      category: "UI/UX Design",
      heroTitle1: "Botani",
      heroTitle2: "care",
      heroDesc:
        "Plant care with a simple touch. An app for plant care with personalized tips, monitoring, and a community of enthusiasts.",
      feature1Title: "Add your plant",
      feature1Desc:
        "Add the plant you just purchased and start taking care of it with our personalized tips.",
      feature2Title: "Monitor",
      feature2Desc:
        "Monitor the growth and health of your plant through expert advice and personalized notifications.",
      feature3Title: "Share",
      feature3Desc:
        "Connect with other botany enthusiasts, share your progress, and discover new varieties.",
      steps: "3 Simple Steps",
    },
    opla: {
      category: "UI/UX Design",
      heroTitle1: "Oplà",
      heroTitle2: " App",
      heroDesc:
        "A mobile application aimed at retirees, for managing events and social activities, designed to facilitate socializing both in person and remotely.",
      feature1Title: "Socialize In Person",
      feature1Desc:
        "Participate in various in-person activities and meet new people in your area",
      feature2Title: "Socialize Remotely",
      feature2Desc:
        "Participate in various online activities and stay in touch even remotely",
      feature3Title: "Accessible",
      feature3Desc:
        "Designed to be inclusive and accessible even for those with mobility difficulties",
      steps: "3 Simple Steps",
      report: "Report",
    },
    study: {
      category: "UI/UX Design",
      heroTitle1: "Study",
      heroTitle2: "Ward",
      heroDesc:
        "An app for study time management with gamification features, interactive calendar, and challenges system to increase productivity.",
      feature1Title: "Study Planning",
      feature1Desc:
        "Plan and organize your study sessions effectively through a simple and intuitive interface.",
      feature2Title: "Interactive Calendar",
      feature2Desc:
        "View and manage your study activities with a progress-tracking calendar.",
      feature3Title: "Play & Learn",
      feature3Desc:
        "Complete challenges and earn rewards while studying to stay motivated.",
      feature4Title: "Multiplayer",
      feature4Desc:
        "Connect with friends and study together through shared challenges and goals.",
      feature5Title: "Student Profile",
      feature5Desc:
        "Customize your profile and track your academic progress and achievements over time.",
      feature6Title: "Personalization",
      feature6Desc:
        "Customize your study experience with themes, notifications, and study preferences.",
      steps: "6 Key Features",
      howItWorks: "How It Works",
      developmentDoc: "Development Documentation",
    },
    serenity: {
      category: "UI/UX Design · Front-end",
      heroTitle1: "Serenity Dream",
      heroTitle2: "Travels",
      heroDesc:
        "Website for a luxury travel agency. Design focused on user experience with interactive maps and immersive galleries.",
      viewCode: "View Code",
    },
    valeri: {
      category: "UI/UX Design",
      heroTitle1: "Valeri ",
      heroTitle2: "Franco",
      heroDesc:
        "Complete visual identity, website, and mobile app project for the company Valeri Franco. A modern and functional design for an optimal user experience.",
      feature1Title: "Visual Identity",
      feature1Desc:
        "Creation of a complete visual identity for the store, developing a recognizable and consistent brand.",
      feature2Title: "Website",
      feature2Desc:
        "Development of a modern and responsive website for the company, optimized for all devices.",
      feature3Title: "Mobile App",
      feature3Desc:
        "Design of an intuitive mobile application to improve the user experience of the company.",
      work: "The Work",
      projectDoc: "Project Development",
    },
    secure: {
      category: "Front-end Project",
      heroTitle1: "Secure it",
      heroTitle2: "with Cyber",
      heroDesc:
        "Front-end project for a cybersecurity platform. Interactive design with dashboard and data visualizations.",
      feature1Title: "Advanced Security",
      feature1Desc:
        "Implementation of monitoring and protection tools for the cybersecurity platform.",
      feature2Title: "Interactive Dashboard",
      feature2Desc:
        "Creating an interactive dashboard for real-time security data visualization.",
      feature3Title: "Data Protection",
      feature3Desc:
        "Designing data protection features with clear and functional visual feedback.",
      steps: "3 Key Features",
      viewCode: "View Code",
    },
  },
  Yb = {
    nav: {
      home: "Home",
      about: "Chi sono",
      portfolio: "Portfolio",
      contact: "Contatti",
    },
    hero: {
      greeting: "Ciao, sono",
      name: "Andrea Feliziani",
      typedStrings: ["UI/UX Designer", "Front-end Developer"],
      subtitle: "Creo esperienze digitali che uniscono design e tecnologia",
      cta: "Contattami",
      downloadCv: "Download CV",
      location: "Milano, Italia",
      cardDesign: "UI/UX Design",
      cardDev: "Front-end",
    },
    about: {
      badge: "Chi sono",
      title: "About Me",
      bio1: "Sono un UI/UX designer e sviluppatore Front-end con una solida base tecnica acquisita presso l'Istituto Tecnico in Informatica. Ho ulteriormente affinato le mie competenze attraverso la laurea triennale in Design del Prodotto ad Ascoli Piceno, integrando il mio background tecnico con una prospettiva più ampia sulla progettazione.",
      bio2: "Il mio percorso accademico è proseguito con la laurea magistrale in Teoria e Tecnologia della Comunicazione presso l'Università degli Studi di Milano-Bicocca dove ho approfondito i principi di comunicazione e ho sviluppato competenze pratiche nel Front-end e nell'UX/UI Design.",
      bio3: "Oggi lavoro come UI/UX Designer e Front-end Developer: analizzo le esigenze degli utenti, progetto soluzioni intuitive e le trasformo in interfacce funzionanti, bilanciando funzionalità, usabilità ed estetica.",
      downloadCv: "Download CV",
      designTitle: "UI/UX Designer",
      devTitle: "Front-end Developer",
    },
    counters: {
      title: "Highlights",
      company: "Azienda",
      experience: "Anni di Esperienza",
      certifications: "Certificazioni",
    },
    education: {
      badge: "Formazione",
      title: "Carriera Accademica",
      masters: {
        title: "Laurea Magistrale",
        subtitle: "Università Milano Bicocca",
        text: "Teoria e Tecnologia della comunicazione",
      },
      bachelors: {
        title: "Laurea Triennale",
        subtitle: "Unicam Camerino",
        text: "Disegno Industriale e Ambientale",
      },
      diploma: {
        title: "Diploma",
        subtitle: "ITIS San Severino Marche",
        text: "Perito informatico",
      },
    },
    portfolio: {
      badge: "I miei lavori",
      title: "Portfolio",
      filterAll: "Tutti",
      filterDesign: "UI/UX Design",
      filterFrontend: "Front-end",
      viewProject: "Visualizza",
      projects: {
        study: {
          description:
            "Applicazione per studenti che facilita l'organizzazione dello studio e la collaborazione.",
        },
        opla: {
          description:
            "App mobile per la gestione di eventi e attività sociali rivolta ai neo-pensionati con interfaccia intuitiva.",
        },
        serenity: {
          description:
            "Sito web per un'agenzia di viaggi con focus sull'esperienza utente e design responsive.",
        },
        botanicare: {
          description: "L'amore per le piante in un semplice tocco",
        },
        valeri: {
          description:
            "Redesign di un applicazione e sito web per un negozio di articoli da regalo",
        },
        secure: {
          description:
            "Piattaforma di sicurezza informatica con dashboard interattiva e visualizzazione dati.",
        },
      },
    },
    contact: {
      badge: "Contattami",
      title: "Restiamo in contatto",
      phone: "Telefono",
      nameLabel: "Nome",
      emailLabel: "Email",
      subjectLabel: "Oggetto",
      messageLabel: "Messaggio",
      send: "Invia Messaggio",
    },
    footer: { rights: "© 2025 Andrea Feliziani. Tutti i diritti riservati." },
    project: {
      exploreProject: "Esplora il Progetto",
      showcase: "Showcase",
      projectTitle: "Il Progetto",
      howItWorks: "Come Funziona",
      resources: "Risorse",
      fullProject: "Il Progetto Completo",
      exploreDetails: "Esplora tutti i dettagli",
      documentation: "Documentazione",
      figmaPrototype: "Prototipo Figma",
      scroll: "Scroll",
      prototype: "Prototipo",
      completePrototype: "Il Prototipo Completo",
      accessDocs:
        "Accedi alla documentazione completa del progetto e visita il prototipo Figma per esplorare tutte le funzionalità implementate.",
    },
    botanicare: {
      category: "UI/UX Design",
      heroTitle1: "Botani",
      heroTitle2: "care",
      heroDesc:
        "L'amore per le piante in un semplice tocco. Un'app per la cura delle piante con consigli personalizzati, monitoraggio e una comunità di appassionati.",
      feature1Title: "Aggiungi la pianta",
      feature1Desc:
        "Aggiungi la pianta appena acquistata e inizia a curarla con i nostri consigli personalizzati.",
      feature2Title: "Monitora",
      feature2Desc:
        "Monitora la crescita e la salute della tua pianta attraverso i consigli degli esperti e notifiche personalizzate.",
      feature3Title: "Condividi",
      feature3Desc:
        "Connettiti con altri appassionati di botanica, condividi i tuoi progressi e scopri nuove varietà.",
      steps: "3 Semplici Passaggi",
    },
    opla: {
      category: "UI/UX Design",
      heroTitle1: "Oplà",
      heroTitle2: " App",
      heroDesc:
        "Un'applicazione mobile rivolta ai neo-pensionati, per la gestione di eventi e attività sociali, progettata per facilitare la socializzazione sia in presenza che a distanza.",
      feature1Title: "Socializza in Presenza",
      feature1Desc:
        "Partecipa a varie attività in presenza e incontra nuove persone nella tua zona",
      feature2Title: "Socializza a Distanza",
      feature2Desc:
        "Partecipa a varie attività online e mantieni i contatti anche da remoto",
      feature3Title: "Accessibile",
      feature3Desc:
        "Progettata per essere inclusiva e accessibile anche per chi ha difficoltà motorie",
      steps: "3 Semplici Passaggi",
      report: "Relazione",
    },
    study: {
      category: "UI/UX Design",
      heroTitle1: "Study",
      heroTitle2: "Ward",
      heroDesc:
        "Un'app per la gestione del tempo di studio con funzionalità di gamification, calendario interattivo e sistema di sfide per aumentare la produttività.",
      feature1Title: "Pianificazione Studio",
      feature1Desc:
        "Pianifica e organizza le tue sessioni di studio in modo efficace attraverso un interfaccia semplice e intuitiva.",
      feature2Title: "Calendario Interattivo",
      feature2Desc:
        "Visualizza e gestisci le tue attività di studio con un calendario che tiene traccia dei progressi.",
      feature3Title: "Play & Learn",
      feature3Desc:
        "Completa sfide e guadagna ricompense mentre studi per mantenere alta la motivazione.",
      feature4Title: "Multiplayer",
      feature4Desc:
        "Connettiti con amici e studia insieme attraverso sfide condivise e obiettivi comuni.",
      feature5Title: "Profilo Studente",
      feature5Desc:
        "Personalizza il tuo profilo e monitora i progressi accademici e i traguardi raggiunti nel tempo.",
      feature6Title: "Personalizzazione",
      feature6Desc:
        "Personalizza la tua esperienza di studio con temi, notifiche e preferenze di studio.",
      steps: "6 Funzionalità Chiave",
      howItWorks: "Come Funziona",
      developmentDoc: "Sviluppo Progettuale",
    },
    serenity: {
      category: "UI/UX Design · Front-end",
      heroTitle1: "Serenity Dream",
      heroTitle2: "Travels",
      heroDesc:
        "Sito web per un'agenzia di viaggi di lusso. Design incentrato sull'esperienza utente con mappe interattive e gallerie immersive.",
      viewCode: "Codice Sorgente",
    },
    valeri: {
      category: "UI/UX Design",
      heroTitle1: "Valeri ",
      heroTitle2: "Franco",
      heroDesc:
        "Progetto completo di identità visiva, sito web e app mobile per l'azienda Valeri Franco. Un design moderno e funzionale per un'esperienza utente ottimale.",
      feature1Title: "Identità Visiva",
      feature1Desc:
        "Creazione di un'identità visiva completa per il negozio, sviluppando un brand riconoscibile e coerente.",
      feature2Title: "Sito Web",
      feature2Desc:
        "Sviluppo di un sito web moderno e responsive per l'azienda, ottimizzato per tutti i dispositivi.",
      feature3Title: "App Mobile",
      feature3Desc:
        "Progettazione di un'applicazione mobile intuitiva per migliorare l'esperienza utente dell'azienda.",
      work: "Il Lavoro",
      projectDoc: "Sviluppo Progettuale",
    },
    secure: {
      category: "Progetto Front-end",
      heroTitle1: "Secure it",
      heroTitle2: "with Cyber",
      heroDesc:
        "Progetto front-end per una piattaforma di cybersecurity. Design interattivo con dashboard e visualizzazioni dati.",
      feature1Title: "Sicurezza Avanzata",
      feature1Desc:
        "Implementazione di strumenti di monitoraggio e protezione per la piattaforma di cybersecurity.",
      feature2Title: "Dashboard Interattiva",
      feature2Desc:
        "Creazione di una dashboard interattiva per la visualizzazione dei dati di sicurezza in tempo reale.",
      feature3Title: "Protezione Dati",
      feature3Desc:
        "Progettazione di funzionalità di protezione dati con feedback visivo chiaro e funzionale.",
      steps: "3 Funzionalità Chiave",
      viewCode: "Codice Sorgente",
    },
  },
  pg = { en: Vb, it: Yb },
  qy = D.createContext();
function Gb({ children: a }) {
  const [i, l] = D.useState(() => {
      try {
        return localStorage.getItem("portfolio-lang") || "en";
      } catch {
        return "en";
      }
    }),
    s = D.useCallback((u) => {
      l(u);
      try {
        localStorage.setItem("portfolio-lang", u);
      } catch {}
    }, []),
    r = D.useCallback(
      (u) => {
        const d = u.split(".");
        let h = pg[i];
        for (const p of d)
          if (((h = h == null ? void 0 : h[p]), h === void 0)) break;
        if (h === void 0) {
          h = pg.en;
          for (const p of d)
            if (((h = h == null ? void 0 : h[p]), h === void 0)) return u;
        }
        return h;
      },
      [i],
    );
  return m.jsx(qy.Provider, {
    value: { lang: i, setLang: s, t: r },
    children: a,
  });
}
function Ot() {
  const a = D.useContext(qy);
  if (!a) throw new Error("useLanguage must be used within LanguageProvider");
  return a;
}
var Vy = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  gg = Tn.createContext && Tn.createContext(Vy),
  Xb = ["attr", "size", "title"];
function Qb(a, i) {
  if (a == null) return {};
  var l,
    s,
    r = Fb(a, i);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(a);
    for (s = 0; s < u.length; s++)
      ((l = u[s]),
        i.indexOf(l) === -1 &&
          {}.propertyIsEnumerable.call(a, l) &&
          (r[l] = a[l]));
  }
  return r;
}
function Fb(a, i) {
  if (a == null) return {};
  var l = {};
  for (var s in a)
    if ({}.hasOwnProperty.call(a, s)) {
      if (i.indexOf(s) !== -1) continue;
      l[s] = a[s];
    }
  return l;
}
function cr() {
  return (
    (cr = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var l = arguments[i];
            for (var s in l) ({}).hasOwnProperty.call(l, s) && (a[s] = l[s]);
          }
          return a;
        }),
    cr.apply(null, arguments)
  );
}
function yg(a, i) {
  var l = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    (i &&
      (s = s.filter(function (r) {
        return Object.getOwnPropertyDescriptor(a, r).enumerable;
      })),
      l.push.apply(l, s));
  }
  return l;
}
function ur(a) {
  for (var i = 1; i < arguments.length; i++) {
    var l = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? yg(Object(l), !0).forEach(function (s) {
          Zb(a, s, l[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
        : yg(Object(l)).forEach(function (s) {
            Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(l, s));
          });
  }
  return a;
}
function Zb(a, i, l) {
  return (
    (i = Pb(i)) in a
      ? Object.defineProperty(a, i, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[i] = l),
    a
  );
}
function Pb(a) {
  var i = Kb(a, "string");
  return typeof i == "symbol" ? i : i + "";
}
function Kb(a, i) {
  if (typeof a != "object" || !a) return a;
  var l = a[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(a, i);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(a);
}
function Yy(a) {
  return (
    a &&
    a.map((i, l) =>
      Tn.createElement(i.tag, ur({ key: l }, i.attr), Yy(i.child)),
    )
  );
}
function pe(a) {
  return (i) =>
    Tn.createElement(Ib, cr({ attr: ur({}, a.attr) }, i), Yy(a.child));
}
function Ib(a) {
  var i = (l) => {
    var { attr: s, size: r, title: u } = a,
      d = Qb(a, Xb),
      h = r || l.size || "1em",
      p;
    return (
      l.className && (p = l.className),
      a.className && (p = (p ? p + " " : "") + a.className),
      Tn.createElement(
        "svg",
        cr(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          l.attr,
          s,
          d,
          {
            className: p,
            style: ur(ur({ color: a.color || l.color }, l.style), a.style),
            height: h,
            width: h,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        u && Tn.createElement("title", null, u),
        a.children,
      )
    );
  };
  return gg !== void 0
    ? Tn.createElement(gg.Consumer, null, (l) => i(l))
    : i(Vy);
}
function Jb(a) {
  return pe({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        },
        child: [],
      },
    ],
  })(a);
}
function $b(a) {
  return pe({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(a);
}
function xr(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z",
        },
        child: [],
      },
    ],
  })(a);
}
function Gy(a) {
  return pe({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(a);
}
function fl(a) {
  return pe({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z",
        },
        child: [],
      },
    ],
  })(a);
}
function qf(a) {
  return pe({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        },
        child: [],
      },
    ],
  })(a);
}
function Wb(a) {
  return pe({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
        },
        child: [],
      },
    ],
  })(a);
}
function ex(a) {
  return pe({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z",
        },
        child: [],
      },
    ],
  })(a);
}
function tx(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 48c114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 56C149.961 64 64 149.961 64 256s85.961 192 192 192 192-85.961 192-192S362.039 64 256 64zm0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807.851 101.023 12.306 123.052 25.037 155.621 3.617 9.26-.957 19.698-10.217 23.315-9.261 3.617-19.699-.957-23.316-10.217-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549-3.615 9.255-14.05 13.836-23.315 10.217-9.26-3.617-13.834-14.056-10.217-23.315 12.713-32.541 24.185-54.541 25.037-155.621-26.629-3.058-53.428-9.027-82.141-15.807-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0 8.599-2.03 17.218 3.294 19.249 11.895 2.029 8.601-3.297 17.219-11.897 19.249z",
        },
        child: [],
      },
    ],
  })(a);
}
function ix(a) {
  return pe({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z",
        },
        child: [],
      },
    ],
  })(a);
}
function nx(a) {
  return pe({
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
        },
        child: [],
      },
    ],
  })(a);
}
function ax(a) {
  return pe({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z",
        },
        child: [],
      },
    ],
  })(a);
}
function lx(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z",
        },
        child: [],
      },
    ],
  })(a);
}
function sx(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z",
        },
        child: [],
      },
    ],
  })(a);
}
function ox(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
        },
        child: [],
      },
    ],
  })(a);
}
function rx(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z",
        },
        child: [],
      },
    ],
  })(a);
}
function Xy(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",
        },
        child: [],
      },
    ],
  })(a);
}
function cx(a) {
  return pe({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z",
        },
        child: [],
      },
    ],
  })(a);
}
function ux(a) {
  return pe({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
        },
        child: [],
      },
    ],
  })(a);
}
function fx(a) {
  return pe({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",
        },
        child: [],
      },
    ],
  })(a);
}
function dx(a) {
  return pe({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
        },
        child: [],
      },
    ],
  })(a);
}
function hx(a) {
  return pe({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z",
        },
        child: [],
      },
    ],
  })(a);
}
function mx(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",
        },
        child: [],
      },
    ],
  })(a);
}
function px(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
        },
        child: [],
      },
    ],
  })(a);
}
function Qy(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
        },
        child: [],
      },
    ],
  })(a);
}
function gx(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",
        },
        child: [],
      },
    ],
  })(a);
}
function Fy(a) {
  return pe({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z",
        },
        child: [],
      },
    ],
  })(a);
}
function yx(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",
        },
        child: [],
      },
    ],
  })(a);
}
function vx(a) {
  return pe({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z",
        },
        child: [],
      },
    ],
  })(a);
}
function bx(a) {
  return pe({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z",
        },
        child: [],
      },
    ],
  })(a);
}
function xx(a) {
  return pe({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z",
        },
        child: [],
      },
    ],
  })(a);
}
function wx(a) {
  return pe({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
        child: [],
      },
    ],
  })(a);
}
function Ts(a) {
  return pe({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z",
        },
        child: [],
      },
    ],
  })(a);
}
function fr({ size: a = "md" }) {
  const i = {
      sm: { width: 50, height: 30 },
      md: { width: 65, height: 39 },
      lg: { width: 65, height: 39, style: { height: "60px", width: "auto" } },
    },
    l = i[a] || i.md;
  return m.jsxs("svg", {
    className: "logo-svg",
    width: l.width,
    height: l.height,
    viewBox: "0 0 75 49",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: l.style || {
      filter: "drop-shadow(0 0 8px rgba(99,102,241,0.3))",
      transition: "all 0.3s ease",
    },
    children: [
      m.jsxs("defs", {
        children: [
          m.jsxs("linearGradient", {
            id: "logo-gradient-1",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%",
            children: [
              m.jsx("stop", { offset: "0%", stopColor: "#6366f1" }),
              m.jsx("stop", { offset: "100%", stopColor: "#ec4899" }),
            ],
          }),
          m.jsxs("linearGradient", {
            id: "logo-gradient-2",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%",
            children: [
              m.jsx("stop", { offset: "0%", stopColor: "#ec4899" }),
              m.jsx("stop", { offset: "100%", stopColor: "#6366f1" }),
            ],
          }),
        ],
      }),
      m.jsx("path", {
        d: "M18.2946 33.2629H29.3823L28.4319 31.4414H16.8691L10.1373 46.0929H3.0095L22.8881 1.97994H31.1246L50.924 46.0929H43.4794L28.4319 11.4836L27.3231 14.1763L42.2122 48.3105H54.1711L32.5502 0H21.6209L0 48.3105H11.642L18.2946 33.2629Z",
        fill: "url(#logo-gradient-1)",
      }),
      m.jsx("path", {
        d: "M38.1732 1.97994L37.2228 0H75L66.4467 10.4541H44.1922L47.9937 19.1658H69.6938L60.9029 29.0655H50.132L49.5776 27.0855H60.1109L65.5755 20.9873H46.6473L41.1035 8.39493H65.5755L70.7233 1.97994H38.1732Z",
        fill: "url(#logo-gradient-2)",
      }),
    ],
  });
}
const Sx = [
  { href: "https://www.linkedin.com/in/andrea-feliziani/", icon: Jb },
  { href: "https://github.com/Felix2897", icon: Gy },
  { href: "https://www.instagram.com/andrea_feliziani/", icon: $b },
];
function wr({ className: a = "" }) {
  return m.jsx("div", {
    className: `flex gap-4 ${a}`,
    children: Sx.map(({ href: i, icon: l }) =>
      m.jsx(
        "a",
        {
          href: i,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "social-icon",
          children: m.jsx(l, {}),
        },
        i,
      ),
    ),
  });
}
function zx() {
  const [a, i] = D.useState(!1),
    [l, s] = D.useState(!1),
    [r, u] = D.useState("home"),
    h = Ci().pathname === "/",
    { lang: p, setLang: y, t: x } = Ot(),
    b = [
      { label: x("nav.home"), href: "/#home" },
      { label: x("nav.about"), href: "/#about" },
      { label: x("nav.portfolio"), href: "/#portfolio" },
      { label: x("nav.contact"), href: "/#contact" },
    ];
  (D.useEffect(() => {
    const E = () => i(window.scrollY > 100);
    return (
      window.addEventListener("scroll", E),
      () => window.removeEventListener("scroll", E)
    );
  }, []),
    D.useEffect(() => {
      if (!h) return;
      const E = document.querySelectorAll("section[id]"),
        A = () => {
          let q = "";
          (E.forEach((Y) => {
            window.pageYOffset >= Y.offsetTop - 200 &&
              (q = Y.getAttribute("id"));
          }),
            q && u(q));
        };
      return (
        window.addEventListener("scroll", A),
        () => window.removeEventListener("scroll", A)
      );
    }, [h]));
  const w = (E, A) => {
      if (h && A.startsWith("/#")) {
        E.preventDefault();
        const q = A.replace("/#", ""),
          Y = document.getElementById(q);
        Y && window.scrollTo({ top: Y.offsetTop - 100, behavior: "smooth" });
      }
      (s(!1), (document.body.style.overflow = "auto"));
    },
    z = () => {
      (s(!0), (document.body.style.overflow = "hidden"));
    },
    T = () => {
      (s(!1), (document.body.style.overflow = "auto"));
    },
    M = () => y(p === "en" ? "it" : "en");
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx("header", {
        className: `header ${a ? "scrolled" : ""}`,
        children: m.jsx("div", {
          className: "px-4 md:px-6 max-w-7xl mx-auto",
          children: m.jsxs("div", {
            className: "header-inner",
            children: [
              m.jsx(_s, {
                to: "/",
                className: "logo",
                onClick: (E) => {
                  h &&
                    (E.preventDefault(),
                    window.scrollTo({ top: 0, behavior: "smooth" }));
                },
                children: m.jsx(fr, {}),
              }),
              m.jsxs("nav", {
                className: "hidden md:flex items-center gap-8",
                children: [
                  m.jsx("ul", {
                    className: "flex list-none m-0 p-0 gap-8",
                    children: b.map(({ label: E, href: A }) =>
                      m.jsx(
                        "li",
                        {
                          children: m.jsx("a", {
                            href: A,
                            className: `nav-link ${h && r === A.replace("/#", "") ? "active" : ""}`,
                            onClick: (q) => w(q, A),
                            style: {
                              position: "relative",
                              color:
                                h && r === A.replace("/#", "")
                                  ? "var(--color-text-main)"
                                  : "var(--color-text-muted)",
                              fontWeight: 500,
                              padding: "0.5rem 0",
                            },
                            children: E,
                          }),
                        },
                        A,
                      ),
                    ),
                  }),
                  m.jsx("button", {
                    onClick: M,
                    className: "lang-toggle",
                    "aria-label": "Toggle language",
                    title:
                      p === "en" ? "Passa all'italiano" : "Switch to English",
                    children: p === "en" ? "🇮🇹 IT" : "🇬🇧 EN",
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex items-center gap-3 md:hidden",
                children: [
                  m.jsx("button", {
                    onClick: M,
                    className: "lang-toggle lang-toggle-sm",
                    "aria-label": "Toggle language",
                    children: p === "en" ? "🇮🇹" : "🇬🇧",
                  }),
                  m.jsx("button", {
                    className: "w-8 h-8 flex items-center justify-center",
                    onClick: z,
                    "aria-label": "Menu",
                    children: m.jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        m.jsx("div", { className: "w-5 h-0.5 bg-white" }),
                        m.jsx("div", { className: "w-5 h-0.5 bg-white" }),
                        m.jsx("div", { className: "w-5 h-0.5 bg-white" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      m.jsxs("div", {
        className: `mobile-menu ${l ? "active" : ""}`,
        children: [
          m.jsxs("div", {
            className: "flex justify-between items-center mb-12",
            children: [
              m.jsx(fr, {}),
              m.jsx("button", {
                onClick: T,
                className:
                  "text-2xl text-[var(--color-text-muted)] hover:text-white bg-transparent border-none cursor-pointer",
                children: m.jsx(nx, {}),
              }),
            ],
          }),
          m.jsx("nav", {
            className: "flex-1",
            children: m.jsx("ul", {
              className: "list-none p-0 m-0",
              children: b.map(({ label: E, href: A }) =>
                m.jsx(
                  "li",
                  {
                    children: m.jsx("a", {
                      href: A,
                      className:
                        "block text-2xl font-semibold py-4 text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-all hover:translate-x-2.5",
                      style: { fontFamily: "var(--font-display)" },
                      onClick: (q) => w(q, A),
                      children: E,
                    }),
                  },
                  A,
                ),
              ),
            }),
          }),
          m.jsx(wr, { className: "mt-8" }),
        ],
      }),
    ],
  });
}
function Cx() {
  const { t: a } = Ot(),
    i = [
      { label: a("nav.home"), href: "/#home" },
      { label: a("nav.about"), href: "/#about" },
      { label: a("nav.portfolio"), href: "/#portfolio" },
      { label: a("nav.contact"), href: "/#contact" },
    ];
  return m.jsx("footer", {
    className: "footer",
    children: m.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6",
      children: [
        m.jsxs("div", {
          className:
            "flex flex-col md:flex-row items-center justify-between gap-6 pb-6",
          children: [
            m.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                m.jsx(_s, { to: "/", children: m.jsx(fr, { size: "sm" }) }),
                m.jsx("p", {
                  className: "text-[var(--color-text-main)] font-semibold m-0",
                  style: { fontFamily: "var(--font-display)" },
                  children: "Andrea Feliziani",
                }),
              ],
            }),
            m.jsx("div", {
              className: "flex gap-6",
              children: i.map(({ label: l, href: s }) =>
                m.jsx(
                  "a",
                  {
                    href: s,
                    className:
                      "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] text-sm",
                    children: l,
                  },
                  s,
                ),
              ),
            }),
            m.jsx(wr, {}),
          ],
        }),
        m.jsx("div", {
          className:
            "text-center pt-6 border-t border-[var(--color-border-glass)]",
          children: m.jsx("p", {
            className: "text-[var(--color-text-muted)] text-sm m-0",
            children: a("footer.rights"),
          }),
        }),
      ],
    }),
  });
}
function _x() {
  const [a, i] = D.useState(!1),
    [l, s] = D.useState(!1);
  return (
    D.useEffect(() => {
      const r = setTimeout(() => i(!0), 1500),
        u = setTimeout(() => s(!0), 2e3);
      return () => {
        (clearTimeout(r), clearTimeout(u));
      };
    }, []),
    l
      ? null
      : m.jsx("div", {
          className: `loader ${a ? "hidden" : ""}`,
          children: m.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
              m.jsx("div", {
                className: "mb-6",
                children: m.jsx(fr, { size: "lg" }),
              }),
              m.jsx("div", {
                className: "loader-bar-container",
                children: m.jsx("div", { className: "loader-bar" }),
              }),
            ],
          }),
        })
  );
}
function Tx() {
  const [a, i] = D.useState(!1);
  D.useEffect(() => {
    const s = () => i(window.scrollY > 300);
    return (
      window.addEventListener("scroll", s),
      () => window.removeEventListener("scroll", s)
    );
  }, []);
  const l = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return m.jsx("button", {
    className: `back-to-top ${a ? "visible" : ""}`,
    onClick: l,
    "aria-label": "Torna su",
    children: m.jsx(xx, {}),
  });
}
function wf() {
  return (
    (wf = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var l = arguments[i];
            for (var s in l)
              Object.prototype.hasOwnProperty.call(l, s) && (a[s] = l[s]);
          }
          return a;
        }),
    wf.apply(this, arguments)
  );
}
var Ex = {
    strings: [
      "These are the default values...",
      "You know what you should do?",
      "Use your own!",
      "Have a great day!",
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: 1 / 0,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function (a) {},
    onComplete: function (a) {},
    preStringTyped: function (a, i) {},
    onStringTyped: function (a, i) {},
    onLastStringBackspaced: function (a) {},
    onTypingPaused: function (a, i) {},
    onTypingResumed: function (a, i) {},
    onReset: function (a) {},
    onStop: function (a, i) {},
    onStart: function (a, i) {},
    onDestroy: function (a) {},
  },
  jx = new ((function () {
    function a() {}
    var i = a.prototype;
    return (
      (i.load = function (l, s, r) {
        if (
          ((l.el = typeof r == "string" ? document.querySelector(r) : r),
          (l.options = wf({}, Ex, s)),
          (l.isInput = l.el.tagName.toLowerCase() === "input"),
          (l.attr = l.options.attr),
          (l.bindInputFocusEvents = l.options.bindInputFocusEvents),
          (l.showCursor = !l.isInput && l.options.showCursor),
          (l.cursorChar = l.options.cursorChar),
          (l.cursorBlinking = !0),
          (l.elContent = l.attr ? l.el.getAttribute(l.attr) : l.el.textContent),
          (l.contentType = l.options.contentType),
          (l.typeSpeed = l.options.typeSpeed),
          (l.startDelay = l.options.startDelay),
          (l.backSpeed = l.options.backSpeed),
          (l.smartBackspace = l.options.smartBackspace),
          (l.backDelay = l.options.backDelay),
          (l.fadeOut = l.options.fadeOut),
          (l.fadeOutClass = l.options.fadeOutClass),
          (l.fadeOutDelay = l.options.fadeOutDelay),
          (l.isPaused = !1),
          (l.strings = l.options.strings.map(function (y) {
            return y.trim();
          })),
          (l.stringsElement =
            typeof l.options.stringsElement == "string"
              ? document.querySelector(l.options.stringsElement)
              : l.options.stringsElement),
          l.stringsElement)
        ) {
          ((l.strings = []),
            (l.stringsElement.style.cssText =
              "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;"));
          var u = Array.prototype.slice.apply(l.stringsElement.children),
            d = u.length;
          if (d)
            for (var h = 0; h < d; h += 1)
              l.strings.push(u[h].innerHTML.trim());
        }
        for (var p in ((l.strPos = 0),
        (l.currentElContent = this.getCurrentElContent(l)),
        l.currentElContent &&
          l.currentElContent.length > 0 &&
          ((l.strPos = l.currentElContent.length - 1),
          l.strings.unshift(l.currentElContent)),
        (l.sequence = []),
        l.strings))
          l.sequence[p] = p;
        ((l.arrayPos = 0),
          (l.stopNum = 0),
          (l.loop = l.options.loop),
          (l.loopCount = l.options.loopCount),
          (l.curLoop = 0),
          (l.shuffle = l.options.shuffle),
          (l.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0,
          }),
          (l.typingComplete = !1),
          (l.autoInsertCss = l.options.autoInsertCss),
          l.autoInsertCss &&
            (this.appendCursorAnimationCss(l),
            this.appendFadeOutAnimationCss(l)));
      }),
      (i.getCurrentElContent = function (l) {
        return l.attr
          ? l.el.getAttribute(l.attr)
          : l.isInput
            ? l.el.value
            : l.contentType === "html"
              ? l.el.innerHTML
              : l.el.textContent;
      }),
      (i.appendCursorAnimationCss = function (l) {
        var s = "data-typed-js-cursor-css";
        if (l.showCursor && !document.querySelector("[" + s + "]")) {
          var r = document.createElement("style");
          (r.setAttribute(s, "true"),
            (r.innerHTML = `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),
            document.body.appendChild(r));
        }
      }),
      (i.appendFadeOutAnimationCss = function (l) {
        var s = "data-typed-fadeout-js-css";
        if (l.fadeOut && !document.querySelector("[" + s + "]")) {
          var r = document.createElement("style");
          (r.setAttribute(s, "true"),
            (r.innerHTML = `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),
            document.body.appendChild(r));
        }
      }),
      a
    );
  })())(),
  vg = new ((function () {
    function a() {}
    var i = a.prototype;
    return (
      (i.typeHtmlChars = function (l, s, r) {
        if (r.contentType !== "html") return s;
        var u = l.substring(s).charAt(0);
        if (u === "<" || u === "&") {
          var d;
          for (
            d = u === "<" ? ">" : ";";
            l.substring(s + 1).charAt(0) !== d && !(1 + ++s > l.length);
          );
          s++;
        }
        return s;
      }),
      (i.backSpaceHtmlChars = function (l, s, r) {
        if (r.contentType !== "html") return s;
        var u = l.substring(s).charAt(0);
        if (u === ">" || u === ";") {
          var d;
          for (
            d = u === ">" ? "<" : "&";
            l.substring(s - 1).charAt(0) !== d && !(--s < 0);
          );
          s--;
        }
        return s;
      }),
      a
    );
  })())(),
  Mx = (function () {
    function a(l, s) {
      (jx.load(this, s, l), this.begin());
    }
    var i = a.prototype;
    return (
      (i.toggle = function () {
        this.pause.status ? this.start() : this.stop();
      }),
      (i.stop = function () {
        this.typingComplete ||
          this.pause.status ||
          (this.toggleBlinking(!0),
          (this.pause.status = !0),
          this.options.onStop(this.arrayPos, this));
      }),
      (i.start = function () {
        this.typingComplete ||
          (this.pause.status &&
            ((this.pause.status = !1),
            this.pause.typewrite
              ? this.typewrite(this.pause.curString, this.pause.curStrPos)
              : this.backspace(this.pause.curString, this.pause.curStrPos),
            this.options.onStart(this.arrayPos, this)));
      }),
      (i.destroy = function () {
        (this.reset(!1), this.options.onDestroy(this));
      }),
      (i.reset = function (l) {
        (l === void 0 && (l = !0),
          clearInterval(this.timeout),
          this.replaceText(""),
          this.cursor &&
            this.cursor.parentNode &&
            (this.cursor.parentNode.removeChild(this.cursor),
            (this.cursor = null)),
          (this.strPos = 0),
          (this.arrayPos = 0),
          (this.curLoop = 0),
          l && (this.insertCursor(), this.options.onReset(this), this.begin()));
      }),
      (i.begin = function () {
        var l = this;
        (this.options.onBegin(this),
          (this.typingComplete = !1),
          this.shuffleStringsIfNeeded(this),
          this.insertCursor(),
          this.bindInputFocusEvents && this.bindFocusEvents(),
          (this.timeout = setTimeout(function () {
            l.strPos === 0
              ? l.typewrite(l.strings[l.sequence[l.arrayPos]], l.strPos)
              : l.backspace(l.strings[l.sequence[l.arrayPos]], l.strPos);
          }, this.startDelay)));
      }),
      (i.typewrite = function (l, s) {
        var r = this;
        this.fadeOut &&
          this.el.classList.contains(this.fadeOutClass) &&
          (this.el.classList.remove(this.fadeOutClass),
          this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var u = this.humanizer(this.typeSpeed),
          d = 1;
        this.pause.status !== !0
          ? (this.timeout = setTimeout(function () {
              s = vg.typeHtmlChars(l, s, r);
              var h = 0,
                p = l.substring(s);
              if (p.charAt(0) === "^" && /^\^\d+/.test(p)) {
                var y = 1;
                ((y += (p = /\d+/.exec(p)[0]).length),
                  (h = parseInt(p)),
                  (r.temporaryPause = !0),
                  r.options.onTypingPaused(r.arrayPos, r),
                  (l = l.substring(0, s) + l.substring(s + y)),
                  r.toggleBlinking(!0));
              }
              if (p.charAt(0) === "`") {
                for (
                  ;
                  l.substring(s + d).charAt(0) !== "`" &&
                  (d++, !(s + d > l.length));
                );
                var x = l.substring(0, s),
                  b = l.substring(x.length + 1, s + d),
                  w = l.substring(s + d + 1);
                ((l = x + b + w), d--);
              }
              r.timeout = setTimeout(function () {
                (r.toggleBlinking(!1),
                  s >= l.length ? r.doneTyping(l, s) : r.keepTyping(l, s, d),
                  r.temporaryPause &&
                    ((r.temporaryPause = !1),
                    r.options.onTypingResumed(r.arrayPos, r)));
              }, h);
            }, u))
          : this.setPauseStatus(l, s, !0);
      }),
      (i.keepTyping = function (l, s, r) {
        s === 0 &&
          (this.toggleBlinking(!1),
          this.options.preStringTyped(this.arrayPos, this));
        var u = l.substring(0, (s += r));
        (this.replaceText(u), this.typewrite(l, s));
      }),
      (i.doneTyping = function (l, s) {
        var r = this;
        (this.options.onStringTyped(this.arrayPos, this),
          this.toggleBlinking(!0),
          (this.arrayPos === this.strings.length - 1 &&
            (this.complete(),
            this.loop === !1 || this.curLoop === this.loopCount)) ||
            (this.timeout = setTimeout(function () {
              r.backspace(l, s);
            }, this.backDelay)));
      }),
      (i.backspace = function (l, s) {
        var r = this;
        if (this.pause.status !== !0) {
          if (this.fadeOut) return this.initFadeOut();
          this.toggleBlinking(!1);
          var u = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function () {
            s = vg.backSpaceHtmlChars(l, s, r);
            var d = l.substring(0, s);
            if ((r.replaceText(d), r.smartBackspace)) {
              var h = r.strings[r.arrayPos + 1];
              r.stopNum = h && d === h.substring(0, s) ? s : 0;
            }
            s > r.stopNum
              ? (s--, r.backspace(l, s))
              : s <= r.stopNum &&
                (r.arrayPos++,
                r.arrayPos === r.strings.length
                  ? ((r.arrayPos = 0),
                    r.options.onLastStringBackspaced(),
                    r.shuffleStringsIfNeeded(),
                    r.begin())
                  : r.typewrite(r.strings[r.sequence[r.arrayPos]], s));
          }, u);
        } else this.setPauseStatus(l, s, !1);
      }),
      (i.complete = function () {
        (this.options.onComplete(this),
          this.loop ? this.curLoop++ : (this.typingComplete = !0));
      }),
      (i.setPauseStatus = function (l, s, r) {
        ((this.pause.typewrite = r),
          (this.pause.curString = l),
          (this.pause.curStrPos = s));
      }),
      (i.toggleBlinking = function (l) {
        this.cursor &&
          (this.pause.status ||
            (this.cursorBlinking !== l &&
              ((this.cursorBlinking = l),
              l
                ? this.cursor.classList.add("typed-cursor--blink")
                : this.cursor.classList.remove("typed-cursor--blink"))));
      }),
      (i.humanizer = function (l) {
        return Math.round((Math.random() * l) / 2) + l;
      }),
      (i.shuffleStringsIfNeeded = function () {
        this.shuffle &&
          (this.sequence = this.sequence.sort(function () {
            return Math.random() - 0.5;
          }));
      }),
      (i.initFadeOut = function () {
        var l = this;
        return (
          (this.el.className += " " + this.fadeOutClass),
          this.cursor && (this.cursor.className += " " + this.fadeOutClass),
          setTimeout(function () {
            (l.arrayPos++,
              l.replaceText(""),
              l.strings.length > l.arrayPos
                ? l.typewrite(l.strings[l.sequence[l.arrayPos]], 0)
                : (l.typewrite(l.strings[0], 0), (l.arrayPos = 0)));
          }, this.fadeOutDelay)
        );
      }),
      (i.replaceText = function (l) {
        this.attr
          ? this.el.setAttribute(this.attr, l)
          : this.isInput
            ? (this.el.value = l)
            : this.contentType === "html"
              ? (this.el.innerHTML = l)
              : (this.el.textContent = l);
      }),
      (i.bindFocusEvents = function () {
        var l = this;
        this.isInput &&
          (this.el.addEventListener("focus", function (s) {
            l.stop();
          }),
          this.el.addEventListener("blur", function (s) {
            (l.el.value && l.el.value.length !== 0) || l.start();
          }));
      }),
      (i.insertCursor = function () {
        this.showCursor &&
          (this.cursor ||
            ((this.cursor = document.createElement("span")),
            (this.cursor.className = "typed-cursor"),
            this.cursor.setAttribute("aria-hidden", !0),
            (this.cursor.innerHTML = this.cursorChar),
            this.el.parentNode &&
              this.el.parentNode.insertBefore(
                this.cursor,
                this.el.nextSibling,
              )));
      }),
      a
    );
  })();
const ta = "generated",
  Dx = "pointerdown",
  Ox = "pointerup",
  Sf = "pointerleave",
  Rx = "pointerout",
  sa = "pointermove",
  Nx = "touchstart",
  bg = "touchend",
  Ax = "touchmove",
  kx = "touchcancel",
  Lx = "resize",
  Ux = "visibilitychange",
  ai = "tsParticles - Error",
  Cn = 100,
  tt = 0.5,
  mt = 1e3,
  ht = { x: 0, y: 0, z: 0 },
  Po = { a: 1, b: 0, c: 0, d: 1 },
  dl = "random",
  lr = "mid",
  pt = 2,
  Bx = Math.PI * pt,
  $u = 60,
  Zy = "true",
  xg = "false",
  Wu = "canvas",
  wg = 0,
  Qi = 2,
  Sg = 4,
  Hx = 1,
  zg = 1,
  Cg = 1,
  qx = 4,
  Py = 1,
  sr = 255,
  ia = 360,
  zf = 100,
  Cf = 100,
  _g = 0,
  _f = 0,
  Vx = 60,
  Yx = 0,
  dr = 0.25,
  Tg = tt + dr,
  Eg = 0,
  Gx = 1,
  Xx = 0,
  Qx = 0,
  Fx = 1,
  Vf = 1,
  Zx = 1,
  jg = 1,
  hr = 0,
  Ky = 1,
  Px = 0,
  Kx = 120,
  Ix = 0,
  Jx = 0,
  $x = 1e4,
  Wx = 0,
  e3 = 1,
  mr = 0,
  Iy = 1,
  t3 = 1,
  i3 = 0,
  Mg = 1,
  n3 = 0,
  a3 = 0,
  Dg = -dr,
  Og = 1.5,
  Rg = 0,
  l3 = 1,
  s3 = 0,
  Tf = 0,
  Jy = 1,
  o3 = 1,
  pr = 1,
  r3 = 500,
  Ng = 50,
  c3 = 0,
  Ef = 1,
  $y = 0,
  Ag = 1,
  u3 = 0,
  Kn = 255,
  ef = 3,
  tf = 6,
  f3 = 1,
  d3 = 1,
  h3 = 0,
  m3 = 0,
  p3 = 0,
  g3 = 0;
var ft;
(function (a) {
  ((a.bottom = "bottom"),
    (a.bottomLeft = "bottom-left"),
    (a.bottomRight = "bottom-right"),
    (a.left = "left"),
    (a.none = "none"),
    (a.right = "right"),
    (a.top = "top"),
    (a.topLeft = "top-left"),
    (a.topRight = "top-right"),
    (a.outside = "outside"),
    (a.inside = "inside"));
})(ft || (ft = {}));
function Wy(a) {
  return typeof a == "boolean";
}
function jn(a) {
  return typeof a == "string";
}
function Mn(a) {
  return typeof a == "number";
}
function nl(a) {
  return typeof a == "object" && a !== null;
}
function _i(a) {
  return Array.isArray(a);
}
function X(a) {
  return a == null;
}
class Yt {
  constructor(i, l, s) {
    if (
      ((this._updateFromAngle = (r, u) => {
        ((this.x = Math.cos(r) * u), (this.y = Math.sin(r) * u));
      }),
      !Mn(i) && i)
    ) {
      ((this.x = i.x), (this.y = i.y));
      const r = i;
      this.z = r.z ? r.z : ht.z;
    } else if (i !== void 0 && l !== void 0)
      ((this.x = i), (this.y = l), (this.z = s ?? ht.z));
    else throw new Error(`${ai} Vector3d not initialized correctly`);
  }
  static get origin() {
    return Yt.create(ht.x, ht.y, ht.z);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(i) {
    this._updateFromAngle(i, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(i) {
    this._updateFromAngle(this.angle, i);
  }
  static clone(i) {
    return Yt.create(i.x, i.y, i.z);
  }
  static create(i, l, s) {
    return new Yt(i, l, s);
  }
  add(i) {
    return Yt.create(this.x + i.x, this.y + i.y, this.z + i.z);
  }
  addTo(i) {
    ((this.x += i.x), (this.y += i.y), (this.z += i.z));
  }
  copy() {
    return Yt.clone(this);
  }
  distanceTo(i) {
    return this.sub(i).length;
  }
  distanceToSq(i) {
    return this.sub(i).getLengthSq();
  }
  div(i) {
    return Yt.create(this.x / i, this.y / i, this.z / i);
  }
  divTo(i) {
    ((this.x /= i), (this.y /= i), (this.z /= i));
  }
  getLengthSq() {
    return this.x ** Qi + this.y ** Qi;
  }
  mult(i) {
    return Yt.create(this.x * i, this.y * i, this.z * i);
  }
  multTo(i) {
    ((this.x *= i), (this.y *= i), (this.z *= i));
  }
  normalize() {
    const i = this.length;
    i != mr && this.multTo(Py / i);
  }
  rotate(i) {
    return Yt.create(
      this.x * Math.cos(i) - this.y * Math.sin(i),
      this.x * Math.sin(i) + this.y * Math.cos(i),
      ht.z,
    );
  }
  setTo(i) {
    ((this.x = i.x), (this.y = i.y));
    const l = i;
    this.z = l.z ? l.z : ht.z;
  }
  sub(i) {
    return Yt.create(this.x - i.x, this.y - i.y, this.z - i.z);
  }
  subFrom(i) {
    ((this.x -= i.x), (this.y -= i.y), (this.z -= i.z));
  }
}
class at extends Yt {
  constructor(i, l) {
    super(i, l, ht.z);
  }
  static get origin() {
    return at.create(ht.x, ht.y);
  }
  static clone(i) {
    return at.create(i.x, i.y);
  }
  static create(i, l) {
    return new at(i, l);
  }
}
let y3 = Math.random;
const ev = {
  nextFrame: (a) => requestAnimationFrame(a),
  cancel: (a) => cancelAnimationFrame(a),
};
function je() {
  return li(y3(), 0, 1 - Number.EPSILON);
}
function v3(a) {
  return ev.nextFrame(a);
}
function b3(a) {
  ev.cancel(a);
}
function li(a, i, l) {
  return Math.min(Math.max(a, i), l);
}
function nf(a, i, l, s) {
  return Math.floor((a * l + i * s) / (l + s));
}
function Gt(a) {
  const i = wi(a),
    l = 0;
  let s = Sr(a);
  return (i === s && (s = l), je() * (i - s) + s);
}
function W(a) {
  return Mn(a) ? a : Gt(a);
}
function Sr(a) {
  return Mn(a) ? a : a.min;
}
function wi(a) {
  return Mn(a) ? a : a.max;
}
function be(a, i) {
  if (a === i || (i === void 0 && Mn(a))) return a;
  const l = Sr(a),
    s = wi(a);
  return i !== void 0 ? { min: Math.min(l, i), max: Math.max(s, i) } : be(l, s);
}
function St(a, i) {
  const l = a.x - i.x,
    s = a.y - i.y,
    r = 2;
  return { dx: l, dy: s, distance: Math.sqrt(l ** r + s ** r) };
}
function Xt(a, i) {
  return St(a, i).distance;
}
function En(a) {
  return (a * Math.PI) / 180;
}
function x3(a, i, l) {
  if (Mn(a)) return En(a);
  switch (a) {
    case ft.top:
      return -Math.PI * tt;
    case ft.topRight:
      return -Math.PI * dr;
    case ft.right:
      return Yx;
    case ft.bottomRight:
      return Math.PI * dr;
    case ft.bottom:
      return Math.PI * tt;
    case ft.bottomLeft:
      return Math.PI * Tg;
    case ft.left:
      return Math.PI;
    case ft.topLeft:
      return -Math.PI * Tg;
    case ft.inside:
      return Math.atan2(l.y - i.y, l.x - i.x);
    case ft.outside:
      return Math.atan2(i.y - l.y, i.x - l.x);
    default:
      return je() * Bx;
  }
}
function w3(a) {
  const i = at.origin;
  return ((i.length = 1), (i.angle = a), i);
}
function kg(a, i, l, s) {
  return at.create((a.x * (l - s)) / (l + s) + (i.x * pt * s) / (l + s), a.y);
}
function S3(a) {
  var i, l;
  return {
    x: ((i = a.position) == null ? void 0 : i.x) ?? je() * a.size.width,
    y: ((l = a.position) == null ? void 0 : l.y) ?? je() * a.size.height,
  };
}
function tv(a) {
  return a ? (a.endsWith("%") ? parseFloat(a) / Cn : parseFloat(a)) : 1;
}
var na;
(function (a) {
  ((a.auto = "auto"),
    (a.increase = "increase"),
    (a.decrease = "decrease"),
    (a.random = "random"));
})(na || (na = {}));
var Je;
(function (a) {
  ((a.increasing = "increasing"), (a.decreasing = "decreasing"));
})(Je || (Je = {}));
var oa;
(function (a) {
  ((a.none = "none"), (a.max = "max"), (a.min = "min"));
})(oa || (oa = {}));
var de;
(function (a) {
  ((a.bottom = "bottom"),
    (a.left = "left"),
    (a.right = "right"),
    (a.top = "top"));
})(de || (de = {}));
var hl;
(function (a) {
  ((a.precise = "precise"), (a.percent = "percent"));
})(hl || (hl = {}));
var sl;
(function (a) {
  ((a.max = "max"), (a.min = "min"), (a.random = "random"));
})(sl || (sl = {}));
const z3 = {
  debug: console.debug,
  error: console.error,
  info: console.info,
  log: console.log,
  verbose: console.log,
  warning: console.warn,
};
function ra() {
  return z3;
}
function C3(a) {
  const i = new Map();
  return (...l) => {
    const s = JSON.stringify(l);
    if (i.has(s)) return i.get(s);
    const r = a(...l);
    return (i.set(s, r), r);
  };
}
function Lg(a) {
  const i = { bounced: !1 },
    {
      pSide: l,
      pOtherSide: s,
      rectSide: r,
      rectOtherSide: u,
      velocity: d,
      factor: h,
    } = a;
  return (
    s.min < u.min ||
      s.min > u.max ||
      s.max < u.min ||
      s.max > u.max ||
      (((l.max >= r.min && l.max <= (r.max + r.min) * tt && d > Eg) ||
        (l.min <= r.max && l.min > (r.max + r.min) * tt && d < Eg)) &&
        ((i.velocity = d * -h), (i.bounced = !0))),
    i
  );
}
function _3(a, i) {
  const l = Qt(i, (s) => a.matches(s));
  return _i(l) ? l.some((s) => s) : l;
}
function ca() {
  return (
    typeof window > "u" ||
    !window ||
    typeof window.document > "u" ||
    !window.document
  );
}
function T3() {
  return !ca() && typeof matchMedia < "u";
}
function iv(a) {
  if (T3()) return matchMedia(a);
}
function E3(a) {
  if (!(ca() || typeof IntersectionObserver > "u"))
    return new IntersectionObserver(a);
}
function j3(a) {
  if (!(ca() || typeof MutationObserver > "u")) return new MutationObserver(a);
}
function Xe(a, i) {
  return a === i || (_i(i) && i.indexOf(a) > -1);
}
async function Ug(a, i) {
  try {
    await document.fonts.load(`${i ?? "400"} 36px '${a ?? "Verdana"}'`);
  } catch {}
}
function M3(a) {
  return Math.floor(je() * a.length);
}
function zr(a, i, l = !0) {
  return a[i !== void 0 && l ? i % a.length : M3(a)];
}
function Yf(a, i, l, s, r) {
  return D3(Es(a, s ?? 0), i, l, r);
}
function D3(a, i, l, s) {
  let r = !0;
  return (
    (!s || s === de.bottom) && (r = a.top < i.height + l.x),
    r && (!s || s === de.left) && (r = a.right > l.x),
    r && (!s || s === de.right) && (r = a.left < i.width + l.y),
    r && (!s || s === de.top) && (r = a.bottom > l.y),
    r
  );
}
function Es(a, i) {
  return { bottom: a.y + i, left: a.x - i, right: a.x + i, top: a.y - i };
}
function yt(a, ...i) {
  for (const l of i) {
    if (l == null) continue;
    if (!nl(l)) {
      a = l;
      continue;
    }
    const s = Array.isArray(l);
    s && (nl(a) || !a || !Array.isArray(a))
      ? (a = [])
      : !s && (nl(a) || !a || Array.isArray(a)) && (a = {});
    for (const r in l) {
      if (r === "__proto__") continue;
      const u = l,
        d = u[r],
        h = a;
      h[r] =
        nl(d) && Array.isArray(d) ? d.map((p) => yt(h[r], p)) : yt(h[r], d);
    }
  }
  return a;
}
function Gf(a, i) {
  return !!lv(i, (l) => l.enable && Xe(a, l.mode));
}
function Xf(a, i, l) {
  Qt(i, (s) => {
    const r = s.mode;
    s.enable && Xe(a, r) && O3(s, l);
  });
}
function O3(a, i) {
  const l = a.selectors;
  Qt(l, (s) => {
    i(s, a);
  });
}
function nv(a, i) {
  if (!(!i || !a)) return lv(a, (l) => _3(i, l.selectors));
}
function jf(a) {
  return {
    position: a.getPosition(),
    radius: a.getRadius(),
    mass: a.getMass(),
    velocity: a.velocity,
    factor: at.create(
      W(a.options.bounce.horizontal.value),
      W(a.options.bounce.vertical.value),
    ),
  };
}
function av(a, i) {
  const { x: l, y: s } = a.velocity.sub(i.velocity),
    [r, u] = [a.position, i.position],
    { dx: d, dy: h } = St(u, r);
  if (l * d + s * h < 0) return;
  const y = -Math.atan2(h, d),
    x = a.mass,
    b = i.mass,
    w = a.velocity.rotate(y),
    z = i.velocity.rotate(y),
    T = kg(w, z, x, b),
    M = kg(z, w, x, b),
    E = T.rotate(-y),
    A = M.rotate(-y);
  ((a.velocity.x = E.x * a.factor.x),
    (a.velocity.y = E.y * a.factor.y),
    (i.velocity.x = A.x * i.factor.x),
    (i.velocity.y = A.y * i.factor.y));
}
function R3(a, i) {
  const l = a.getPosition(),
    s = a.getRadius(),
    r = Es(l, s),
    u = a.options.bounce,
    d = Lg({
      pSide: { min: r.left, max: r.right },
      pOtherSide: { min: r.top, max: r.bottom },
      rectSide: { min: i.left, max: i.right },
      rectOtherSide: { min: i.top, max: i.bottom },
      velocity: a.velocity.x,
      factor: W(u.horizontal.value),
    });
  d.bounced &&
    (d.velocity !== void 0 && (a.velocity.x = d.velocity),
    d.position !== void 0 && (a.position.x = d.position));
  const h = Lg({
    pSide: { min: r.top, max: r.bottom },
    pOtherSide: { min: r.left, max: r.right },
    rectSide: { min: i.top, max: i.bottom },
    rectOtherSide: { min: i.left, max: i.right },
    velocity: a.velocity.y,
    factor: W(u.vertical.value),
  });
  h.bounced &&
    (h.velocity !== void 0 && (a.velocity.y = h.velocity),
    h.position !== void 0 && (a.position.y = h.position));
}
function Qt(a, i) {
  return _i(a) ? a.map((s, r) => i(s, r)) : i(a, 0);
}
function ni(a, i, l) {
  return _i(a) ? zr(a, i, l) : a;
}
function lv(a, i) {
  return _i(a) ? a.find((s, r) => i(s, r)) : i(a, 0) ? a : void 0;
}
function sv(a, i) {
  const l = a.value,
    s = a.animation,
    r = {
      delayTime: W(s.delay) * mt,
      enable: s.enable,
      value: W(a.value) * i,
      max: wi(l) * i,
      min: Sr(l) * i,
      loops: 0,
      maxLoops: W(s.count),
      time: 0,
    },
    u = 1;
  if (s.enable) {
    switch (((r.decay = u - W(s.decay)), s.mode)) {
      case na.increase:
        r.status = Je.increasing;
        break;
      case na.decrease:
        r.status = Je.decreasing;
        break;
      case na.random:
        r.status = je() >= tt ? Je.increasing : Je.decreasing;
        break;
    }
    const d = s.mode === na.auto;
    switch (s.startValue) {
      case sl.min:
        ((r.value = r.min), d && (r.status = Je.increasing));
        break;
      case sl.max:
        ((r.value = r.max), d && (r.status = Je.decreasing));
        break;
      case sl.random:
      default:
        ((r.value = Gt(r)),
          d && (r.status = je() >= tt ? Je.increasing : Je.decreasing));
        break;
    }
  }
  return ((r.initialValue = r.value), r);
}
function N3(a, i) {
  if (!(a.mode === hl.percent)) {
    const { mode: r, ...u } = a;
    return u;
  }
  return "x" in a
    ? { x: (a.x / Cn) * i.width, y: (a.y / Cn) * i.height }
    : { width: (a.width / Cn) * i.width, height: (a.height / Cn) * i.height };
}
function ov(a, i) {
  return N3(a, i);
}
function A3(a, i, l, s, r) {
  switch (i) {
    case oa.max:
      l >= r && a.destroy();
      break;
    case oa.min:
      l <= s && a.destroy();
      break;
  }
}
function Qf(a, i, l, s, r) {
  if (
    a.destroyed ||
    !i ||
    !i.enable ||
    ((i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0))
  )
    return;
  const x = (i.velocity ?? 0) * r.factor,
    b = i.min,
    w = i.max,
    z = i.decay ?? 1;
  if (
    (i.time || (i.time = 0),
    (i.delayTime ?? 0) > 0 &&
      i.time < (i.delayTime ?? 0) &&
      (i.time += r.value),
    !((i.delayTime ?? 0) > 0 && i.time < (i.delayTime ?? 0)))
  ) {
    switch (i.status) {
      case Je.increasing:
        i.value >= w
          ? (l ? (i.status = Je.decreasing) : (i.value -= w),
            i.loops || (i.loops = 0),
            i.loops++)
          : (i.value += x);
        break;
      case Je.decreasing:
        i.value <= b
          ? (l ? (i.status = Je.increasing) : (i.value += w),
            i.loops || (i.loops = 0),
            i.loops++)
          : (i.value -= x);
    }
    (i.velocity && z !== 1 && (i.velocity *= z),
      A3(a, s, i.value, b, w),
      a.destroyed || (i.value = li(i.value, b, w)));
  }
}
function k3(a) {
  var l, s, r, u;
  const i = document.createElement("div").style;
  if (!a) return i;
  for (const d in a) {
    const h = a[d];
    if (!Object.prototype.hasOwnProperty.call(a, d) || X(h)) continue;
    const p = (l = a.getPropertyValue) == null ? void 0 : l.call(a, h);
    if (!p) continue;
    const y = (s = a.getPropertyPriority) == null ? void 0 : s.call(a, h);
    y
      ? (u = i.setProperty) == null || u.call(i, h, p, y)
      : (r = i.setProperty) == null || r.call(i, h, p);
  }
  return i;
}
function L3(a) {
  const i = document.createElement("div").style,
    l = 10,
    s = {
      width: "100%",
      height: "100%",
      margin: "0",
      padding: "0",
      borderWidth: "0",
      position: "fixed",
      zIndex: a.toString(l),
      "z-index": a.toString(l),
      top: "0",
      left: "0",
    };
  for (const r in s) {
    const u = s[r];
    i.setProperty(r, u);
  }
  return i;
}
const U3 = C3(L3);
var Mf;
(function (a) {
  ((a.darken = "darken"), (a.enlighten = "enlighten"));
})(Mf || (Mf = {}));
function B3(a, i) {
  if (i) {
    for (const l of a.colorManagers.values())
      if (i.startsWith(l.stringPrefix)) return l.parseString(i);
  }
}
function hi(a, i, l, s = !0) {
  if (!i) return;
  const r = jn(i) ? { value: i } : i;
  if (jn(r.value)) return rv(a, r.value, l, s);
  if (_i(r.value)) return hi(a, { value: zr(r.value, l, s) });
  for (const u of a.colorManagers.values()) {
    const d = u.handleRangeColor(r);
    if (d) return d;
  }
}
function rv(a, i, l, s = !0) {
  if (!i) return;
  const r = jn(i) ? { value: i } : i;
  if (jn(r.value)) return r.value === dl ? uv() : H3(a, r.value);
  if (_i(r.value)) return rv(a, { value: zr(r.value, l, s) });
  for (const u of a.colorManagers.values()) {
    const d = u.handleColor(r);
    if (d) return d;
  }
}
function vs(a, i, l, s = !0) {
  const r = hi(a, i, l, s);
  return r ? cv(r) : void 0;
}
function cv(a) {
  const i = a.r / sr,
    l = a.g / sr,
    s = a.b / sr,
    r = Math.max(i, l, s),
    u = Math.min(i, l, s),
    d = { h: _g, l: (r + u) * tt, s: _f };
  return (
    r !== u &&
      ((d.s = d.l < tt ? (r - u) / (r + u) : (r - u) / (pt - r - u)),
      (d.h =
        i === r
          ? (l - s) / (r - u)
          : (d.h =
              l === r ? pt + (s - i) / (r - u) : pt * pt + (i - l) / (r - u)))),
    (d.l *= Cf),
    (d.s *= zf),
    (d.h *= Vx),
    d.h < _g && (d.h += ia),
    d.h >= ia && (d.h -= ia),
    d
  );
}
function H3(a, i) {
  return B3(a, i);
}
function ml(a) {
  const i = ((a.h % ia) + ia) % ia,
    l = Math.max(_f, Math.min(zf, a.s)),
    s = Math.max(u3, Math.min(Cf, a.l)),
    r = i / ia,
    u = l / zf,
    d = s / Cf;
  if (l === _f) {
    const T = Math.round(d * Kn);
    return { r: T, g: T, b: T };
  }
  const h = (T, M, E) => {
      if ((E < 0 && E++, E > 1 && E--, E * tf < 1)) return T + (M - T) * tf * E;
      if (E * pt < 1) return M;
      if (E * ef < 1 * pt) {
        const Y = pt / ef;
        return T + (M - T) * (Y - E) * tf;
      }
      return T;
    },
    p = d < tt ? d * (f3 + u) : d + u - d * u,
    y = pt * d - p,
    x = d3 / ef,
    b = Math.min(Kn, Kn * h(y, p, r + x)),
    w = Math.min(Kn, Kn * h(y, p, r)),
    z = Math.min(Kn, Kn * h(y, p, r - x));
  return { r: Math.round(b), g: Math.round(w), b: Math.round(z) };
}
function q3(a) {
  const i = ml(a);
  return { a: a.a, b: i.b, g: i.g, r: i.r };
}
function uv(a) {
  const i = h3,
    l = sr + Ef;
  return {
    b: Math.floor(Gt(be(i, l))),
    g: Math.floor(Gt(be(i, l))),
    r: Math.floor(Gt(be(i, l))),
  };
}
function Zi(a, i) {
  return `rgba(${a.r}, ${a.g}, ${a.b}, ${i ?? Vf})`;
}
function bs(a, i) {
  return `hsla(${a.h}, ${a.s}%, ${a.l}%, ${i ?? Vf})`;
}
function Ff(a, i, l, s) {
  let r = a,
    u = i;
  return (
    r.r === void 0 && (r = ml(a)),
    u.r === void 0 && (u = ml(i)),
    { b: nf(r.b, u.b, l, s), g: nf(r.g, u.g, l, s), r: nf(r.r, u.r, l, s) }
  );
}
function Df(a, i, l) {
  if (l === dl) return uv();
  if (l === lr) {
    const s = a.getFillColor() ?? a.getStrokeColor(),
      r =
        (i == null ? void 0 : i.getFillColor()) ??
        (i == null ? void 0 : i.getStrokeColor());
    if (s && r && i) return Ff(s, r, a.getRadius(), i.getRadius());
    {
      const u = s ?? r;
      if (u) return ml(u);
    }
  } else return l;
}
function fv(a, i, l, s) {
  const r = jn(i) ? i : i.value;
  return r === dl
    ? s
      ? hi(a, { value: r })
      : l
        ? dl
        : lr
    : r === lr
      ? lr
      : hi(a, { value: r });
}
function Bg(a) {
  return a !== void 0 ? { h: a.h.value, s: a.s.value, l: a.l.value } : void 0;
}
function dv(a, i, l) {
  const s = {
    h: { enable: !1, value: a.h },
    s: { enable: !1, value: a.s },
    l: { enable: !1, value: a.l },
  };
  return (i && (af(s.h, i.h, l), af(s.s, i.s, l), af(s.l, i.l, l)), s);
}
function af(a, i, l) {
  ((a.enable = i.enable),
    a.enable
      ? ((a.velocity = (W(i.speed) / Cn) * l),
        (a.decay = Iy - W(i.decay)),
        (a.status = Je.increasing),
        (a.loops = p3),
        (a.maxLoops = W(i.count)),
        (a.time = g3),
        (a.delayTime = W(i.delay) * mt),
        i.sync || ((a.velocity *= je()), (a.value *= je())),
        (a.initialValue = a.value),
        (a.offset = be(i.offset)))
      : (a.velocity = m3));
}
function lf(a, i, l, s) {
  if (
    !a ||
    !a.enable ||
    ((a.maxLoops ?? 0) > 0 && (a.loops ?? 0) > (a.maxLoops ?? 0)) ||
    (a.time || (a.time = 0),
    (a.delayTime ?? 0) > 0 &&
      a.time < (a.delayTime ?? 0) &&
      (a.time += s.value),
    (a.delayTime ?? 0) > 0 && a.time < (a.delayTime ?? 0))
  )
    return;
  const x = a.offset ? Gt(a.offset) : 0,
    b = (a.velocity ?? 0) * s.factor + x * 3.6,
    w = a.decay ?? 1,
    z = wi(i),
    T = Sr(i);
  (!l || a.status === Je.increasing
    ? ((a.value += b),
      a.value > z &&
        (a.loops || (a.loops = 0),
        a.loops++,
        l ? (a.status = Je.decreasing) : (a.value -= z)))
    : ((a.value -= b),
      a.value < 0 &&
        (a.loops || (a.loops = 0), a.loops++, (a.status = Je.increasing))),
    a.velocity && w !== 1 && (a.velocity *= w),
    (a.value = li(a.value, T, z)));
}
function hv(a, i) {
  if (!a) return;
  const { h: l, s, l: r } = a,
    u = {
      h: { min: 0, max: 360 },
      s: { min: 0, max: 100 },
      l: { min: 0, max: 100 },
    };
  (l && lf(l, u.h, !1, i), s && lf(s, u.s, !0, i), r && lf(r, u.l, !0, i));
}
function gs(a, i, l) {
  (a.beginPath(), a.moveTo(i.x, i.y), a.lineTo(l.x, l.y), a.closePath());
}
function V3(a, i, l) {
  ((a.fillStyle = l ?? "rgba(0,0,0,0)"),
    a.fillRect(ht.x, ht.y, i.width, i.height));
}
function Y3(a, i, l, s) {
  l &&
    ((a.globalAlpha = s),
    a.drawImage(l, ht.x, ht.y, i.width, i.height),
    (a.globalAlpha = 1));
}
function sf(a, i) {
  a.clearRect(ht.x, ht.y, i.width, i.height);
}
function G3(a) {
  const {
      container: i,
      context: l,
      particle: s,
      delta: r,
      colorStyles: u,
      backgroundMask: d,
      composite: h,
      radius: p,
      opacity: y,
      shadow: x,
      transform: b,
    } = a,
    w = s.getPosition(),
    z = s.rotation + (s.pathRotation ? s.velocity.angle : c3),
    T = { sin: Math.sin(z), cos: Math.cos(z) },
    M = !!z,
    E = {
      a: T.cos * (b.a ?? Po.a),
      b: M ? T.sin * (b.b ?? Ef) : (b.b ?? Po.b),
      c: M ? -T.sin * (b.c ?? Ef) : (b.c ?? Po.c),
      d: T.cos * (b.d ?? Po.d),
    };
  (l.setTransform(E.a, E.b, E.c, E.d, w.x, w.y),
    d && (l.globalCompositeOperation = h));
  const A = s.shadowColor;
  (x.enable &&
    A &&
    ((l.shadowBlur = x.blur),
    (l.shadowColor = Zi(A)),
    (l.shadowOffsetX = x.offset.x),
    (l.shadowOffsetY = x.offset.y)),
    u.fill && (l.fillStyle = u.fill));
  const q = s.strokeWidth ?? $y;
  ((l.lineWidth = q), u.stroke && (l.strokeStyle = u.stroke));
  const Y = {
    container: i,
    context: l,
    particle: s,
    radius: p,
    opacity: y,
    delta: r,
    transformData: E,
    strokeWidth: q,
  };
  (Q3(Y),
    F3(Y),
    X3(Y),
    (l.globalCompositeOperation = "source-over"),
    l.resetTransform());
}
function X3(a) {
  const {
    container: i,
    context: l,
    particle: s,
    radius: r,
    opacity: u,
    delta: d,
    transformData: h,
  } = a;
  if (!s.effect) return;
  const p = i.effectDrawers.get(s.effect);
  p &&
    p.draw({
      context: l,
      particle: s,
      radius: r,
      opacity: u,
      delta: d,
      pixelRatio: i.retina.pixelRatio,
      transformData: { ...h },
    });
}
function Q3(a) {
  const {
    container: i,
    context: l,
    particle: s,
    radius: r,
    opacity: u,
    delta: d,
    strokeWidth: h,
    transformData: p,
  } = a;
  if (!s.shape) return;
  const y = i.shapeDrawers.get(s.shape);
  y &&
    (l.beginPath(),
    y.draw({
      context: l,
      particle: s,
      radius: r,
      opacity: u,
      delta: d,
      pixelRatio: i.retina.pixelRatio,
      transformData: { ...p },
    }),
    s.shapeClose && l.closePath(),
    h > $y && l.stroke(),
    s.shapeFill && l.fill());
}
function F3(a) {
  const {
    container: i,
    context: l,
    particle: s,
    radius: r,
    opacity: u,
    delta: d,
    transformData: h,
  } = a;
  if (!s.shape) return;
  const p = i.shapeDrawers.get(s.shape);
  p != null &&
    p.afterDraw &&
    p.afterDraw({
      context: l,
      particle: s,
      radius: r,
      opacity: u,
      delta: d,
      pixelRatio: i.retina.pixelRatio,
      transformData: { ...h },
    });
}
function Z3(a, i, l) {
  i.draw && i.draw(a, l);
}
function P3(a, i, l, s) {
  i.drawParticle && i.drawParticle(a, l, s);
}
function K3(a, i, l) {
  return { h: a.h, s: a.s, l: a.l + (i === Mf.darken ? -Ag : Ag) * l };
}
function I3(a, i, l) {
  const s = i[l];
  s !== void 0 && (a[l] = (a[l] ?? Gx) * s);
}
function Hg(a, i, l = !1) {
  if (!i) return;
  const s = a;
  if (!s) return;
  const r = s.style;
  if (!r) return;
  const u = new Set();
  for (const d in r) Object.prototype.hasOwnProperty.call(r, d) && u.add(r[d]);
  for (const d in i) Object.prototype.hasOwnProperty.call(i, d) && u.add(i[d]);
  for (const d of u) {
    const h = i.getPropertyValue(d);
    h ? r.setProperty(d, h, l ? "important" : "") : r.removeProperty(d);
  }
}
class J3 {
  constructor(i, l) {
    ((this.container = i),
      (this._applyPostDrawUpdaters = (u) => {
        var d;
        for (const h of this._postDrawUpdaters)
          (d = h.afterDraw) == null || d.call(h, u);
      }),
      (this._applyPreDrawUpdaters = (u, d, h, p, y, x) => {
        var b;
        for (const w of this._preDrawUpdaters) {
          if (w.getColorStyles) {
            const { fill: z, stroke: T } = w.getColorStyles(d, u, h, p);
            (z && (y.fill = z), T && (y.stroke = T));
          }
          if (w.getTransformValues) {
            const z = w.getTransformValues(d);
            for (const T in z) I3(x, z, T);
          }
          (b = w.beforeDraw) == null || b.call(w, d);
        }
      }),
      (this._applyResizePlugins = () => {
        var u;
        for (const d of this._resizePlugins)
          (u = d.resize) == null || u.call(d);
      }),
      (this._getPluginParticleColors = (u) => {
        let d, h;
        for (const p of this._colorPlugins)
          if (
            (!d &&
              p.particleFillColor &&
              (d = vs(this._engine, p.particleFillColor(u))),
            !h &&
              p.particleStrokeColor &&
              (h = vs(this._engine, p.particleStrokeColor(u))),
            d && h)
          )
            break;
        return [d, h];
      }),
      (this._initCover = async () => {
        const u = this.container.actualOptions,
          d = u.backgroundMask.cover,
          h = d.color;
        if (h) {
          const p = hi(this._engine, h);
          if (p) {
            const y = { ...p, a: d.opacity };
            this._coverColorStyle = Zi(y, y.a);
          }
        } else
          await new Promise((p, y) => {
            if (!d.image) return;
            const x = document.createElement("img");
            (x.addEventListener("load", () => {
              ((this._coverImage = { image: x, opacity: d.opacity }), p());
            }),
              x.addEventListener("error", (b) => {
                y(b.error);
              }),
              (x.src = d.image));
          });
      }),
      (this._initStyle = () => {
        const u = this.element,
          d = this.container.actualOptions;
        if (u) {
          this._fullScreen
            ? this._setFullScreenStyle()
            : this._resetOriginalStyle();
          for (const h in d.style) {
            if (
              !h ||
              !d.style ||
              !Object.prototype.hasOwnProperty.call(d.style, h)
            )
              continue;
            const p = d.style[h];
            p && u.style.setProperty(h, p, "important");
          }
        }
      }),
      (this._initTrail = async () => {
        const u = this.container.actualOptions,
          d = u.particles.move.trail,
          h = d.fill;
        if (!d.enable) return;
        const p = Py / d.length;
        if (h.color) {
          const y = hi(this._engine, h.color);
          if (!y) return;
          this._trailFill = { color: { ...y }, opacity: p };
        } else
          await new Promise((y, x) => {
            if (!h.image) return;
            const b = document.createElement("img");
            (b.addEventListener("load", () => {
              ((this._trailFill = { image: b, opacity: p }), y());
            }),
              b.addEventListener("error", (w) => {
                x(w.error);
              }),
              (b.src = h.image));
          });
      }),
      (this._paintBase = (u) => {
        this.draw((d) => V3(d, this.size, u));
      }),
      (this._paintImage = (u, d) => {
        this.draw((h) => Y3(h, this.size, u, d));
      }),
      (this._repairStyle = () => {
        const u = this.element;
        if (!u) return;
        (this._safeMutationObserver((h) => h.disconnect()),
          this._initStyle(),
          this.initBackground());
        const d = this._pointerEvents;
        ((u.style.pointerEvents = d),
          u.setAttribute("pointer-events", d),
          this._safeMutationObserver((h) => {
            !u || !(u instanceof Node) || h.observe(u, { attributes: !0 });
          }));
      }),
      (this._resetOriginalStyle = () => {
        const u = this.element,
          d = this._originalStyle;
        !u || !d || Hg(u, d, !0);
      }),
      (this._safeMutationObserver = (u) => {
        this._mutationObserver && u(this._mutationObserver);
      }),
      (this._setFullScreenStyle = () => {
        const u = this.element;
        u && Hg(u, U3(this.container.actualOptions.fullScreen.zIndex), !0);
      }),
      (this._engine = l),
      (this._standardSize = { height: 0, width: 0 }));
    const s = i.retina.pixelRatio,
      r = this._standardSize;
    ((this.size = { height: r.height * s, width: r.width * s }),
      (this._context = null),
      (this._generated = !1),
      (this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []),
      (this._pointerEvents = "none"));
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const i = this.container.actualOptions,
      l = i.particles.move.trail,
      s = this._trailFill;
    i.backgroundMask.enable
      ? this.paint()
      : l.enable && l.length > Qx && s
        ? s.color
          ? this._paintBase(Zi(s.color, s.opacity))
          : s.image && this._paintImage(s.image, s.opacity)
        : i.clear &&
          this.draw((r) => {
            sf(r, this.size);
          });
  }
  destroy() {
    if ((this.stop(), this._generated)) {
      const i = this.element;
      (i == null || i.remove(), (this.element = void 0));
    } else this._resetOriginalStyle();
    ((this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []));
  }
  draw(i) {
    const l = this._context;
    if (l) return i(l);
  }
  drawAsync(i) {
    const l = this._context;
    if (l) return i(l);
  }
  drawParticle(i, l) {
    if (i.spawning || i.destroyed) return;
    const s = i.getRadius();
    if (s <= Xx) return;
    const r = i.getFillColor(),
      u = i.getStrokeColor() ?? r;
    let [d, h] = this._getPluginParticleColors(i);
    (d || (d = r),
      h || (h = u),
      !(!d && !h) &&
        this.draw((p) => {
          var G;
          const y = this.container,
            x = y.actualOptions,
            b = i.options.zIndex,
            w = Fx - i.zIndexFactor,
            z = w ** b.opacityRate,
            T =
              i.bubble.opacity ??
              ((G = i.opacity) == null ? void 0 : G.value) ??
              Vf,
            M = i.strokeOpacity ?? T,
            E = T * z,
            A = M * z,
            q = {},
            Y = { fill: d ? bs(d, E) : void 0 };
          ((Y.stroke = h ? bs(h, A) : Y.fill),
            this._applyPreDrawUpdaters(p, i, s, E, Y, q),
            G3({
              container: y,
              context: p,
              particle: i,
              delta: l,
              colorStyles: Y,
              backgroundMask: x.backgroundMask.enable,
              composite: x.backgroundMask.composite,
              radius: s * w ** b.sizeRate,
              opacity: E,
              shadow: i.options.shadow,
              transform: q,
            }),
            this._applyPostDrawUpdaters(i));
        }));
  }
  drawParticlePlugin(i, l, s) {
    this.draw((r) => P3(r, i, l, s));
  }
  drawPlugin(i, l) {
    this.draw((s) => Z3(s, i, l));
  }
  async init() {
    (this._safeMutationObserver((i) => i.disconnect()),
      (this._mutationObserver = j3((i) => {
        for (const l of i)
          l.type === "attributes" &&
            l.attributeName === "style" &&
            this._repairStyle();
      })),
      this.resize(),
      this._initStyle(),
      await this._initCover());
    try {
      await this._initTrail();
    } catch (i) {
      ra().error(i);
    }
    (this.initBackground(),
      this._safeMutationObserver((i) => {
        !this.element ||
          !(this.element instanceof Node) ||
          i.observe(this.element, { attributes: !0 });
      }),
      this.initUpdaters(),
      this.initPlugins(),
      this.paint());
  }
  initBackground() {
    const i = this.container.actualOptions,
      l = i.background,
      s = this.element;
    if (!s) return;
    const r = s.style;
    if (r) {
      if (l.color) {
        const u = hi(this._engine, l.color);
        r.backgroundColor = u ? Zi(u, l.opacity) : "";
      } else r.backgroundColor = "";
      ((r.backgroundImage = l.image || ""),
        (r.backgroundPosition = l.position || ""),
        (r.backgroundRepeat = l.repeat || ""),
        (r.backgroundSize = l.size || ""));
    }
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const i of this.container.plugins.values())
      (i.resize && this._resizePlugins.push(i),
        (i.particleFillColor ?? i.particleStrokeColor) &&
          this._colorPlugins.push(i));
  }
  initUpdaters() {
    ((this._preDrawUpdaters = []), (this._postDrawUpdaters = []));
    for (const i of this.container.particles.updaters)
      (i.afterDraw && this._postDrawUpdaters.push(i),
        (i.getColorStyles ?? i.getTransformValues ?? i.beforeDraw) &&
          this._preDrawUpdaters.push(i));
  }
  loadCanvas(i) {
    (this._generated && this.element && this.element.remove(),
      (this._generated =
        i.dataset && ta in i.dataset
          ? i.dataset[ta] === "true"
          : this._generated),
      (this.element = i),
      (this.element.ariaHidden = "true"),
      (this._originalStyle = k3(this.element.style)));
    const l = this._standardSize;
    ((l.height = i.offsetHeight), (l.width = i.offsetWidth));
    const s = this.container.retina.pixelRatio,
      r = this.size;
    ((i.height = r.height = l.height * s),
      (i.width = r.width = l.width * s),
      (this._context = this.element.getContext("2d")),
      this._safeMutationObserver((u) => u.disconnect()),
      this.container.retina.init(),
      this.initBackground(),
      this._safeMutationObserver((u) => {
        !this.element ||
          !(this.element instanceof Node) ||
          u.observe(this.element, { attributes: !0 });
      }));
  }
  paint() {
    const i = this.container.actualOptions;
    this.draw((l) => {
      i.backgroundMask.enable && i.backgroundMask.cover
        ? (sf(l, this.size),
          this._coverImage
            ? this._paintImage(this._coverImage.image, this._coverImage.opacity)
            : this._coverColorStyle
              ? this._paintBase(this._coverColorStyle)
              : this._paintBase())
        : this._paintBase();
    });
  }
  resize() {
    if (!this.element) return !1;
    const i = this.container,
      l = i.canvas._standardSize,
      s = {
        width: this.element.offsetWidth,
        height: this.element.offsetHeight,
      },
      r = i.retina.pixelRatio,
      u = { width: s.width * r, height: s.height * r };
    if (
      s.height === l.height &&
      s.width === l.width &&
      u.height === this.element.height &&
      u.width === this.element.width
    )
      return !1;
    const d = { ...l };
    ((l.height = s.height), (l.width = s.width));
    const h = this.size;
    return (
      (this.element.width = h.width = u.width),
      (this.element.height = h.height = u.height),
      this.container.started &&
        i.particles.setResizeFactor({
          width: l.width / d.width,
          height: l.height / d.height,
        }),
      !0
    );
  }
  setPointerEvents(i) {
    this.element && ((this._pointerEvents = i), this._repairStyle());
  }
  stop() {
    (this._safeMutationObserver((i) => i.disconnect()),
      (this._mutationObserver = void 0),
      this.draw((i) => sf(i, this.size)));
  }
  async windowResize() {
    if (!this.element || !this.resize()) return;
    const i = this.container,
      l = i.updateActualOptions();
    (i.particles.setDensity(),
      this._applyResizePlugins(),
      l && (await i.refresh()));
  }
}
var ol;
(function (a) {
  ((a.canvas = "canvas"), (a.parent = "parent"), (a.window = "window"));
})(ol || (ol = {}));
function ii(a, i, l, s, r) {
  if (s) {
    let u = { passive: !0 };
    (Wy(r) ? (u.capture = r) : r !== void 0 && (u = r),
      a.addEventListener(i, l, u));
  } else {
    const u = r;
    a.removeEventListener(i, l, u);
  }
}
class $3 {
  constructor(i) {
    ((this.container = i),
      (this._doMouseTouchClick = (l) => {
        const s = this.container,
          r = s.actualOptions;
        if (this._canPush) {
          const u = s.interactivity.mouse,
            d = u.position;
          if (!d) return;
          ((u.clickPosition = { ...d }), (u.clickTime = new Date().getTime()));
          const h = r.interactivity.events.onClick;
          Qt(h.mode, (p) => this.container.handleClickMode(p));
        }
        l.type === "touchend" && setTimeout(() => this._mouseTouchFinish(), r3);
      }),
      (this._handleThemeChange = (l) => {
        const s = l,
          r = this.container,
          u = r.options,
          d = u.defaultThemes,
          h = s.matches ? d.dark : d.light,
          p = u.themes.find((y) => y.name === h);
        p != null && p.default.auto && r.loadTheme(h);
      }),
      (this._handleVisibilityChange = () => {
        const l = this.container,
          s = l.actualOptions;
        (this._mouseTouchFinish(),
          s.pauseOnBlur &&
            (document != null && document.hidden
              ? ((l.pageHidden = !0), l.pause())
              : ((l.pageHidden = !1),
                l.animationStatus ? l.play(!0) : l.draw(!0))));
      }),
      (this._handleWindowResize = () => {
        this._resizeTimeout &&
          (clearTimeout(this._resizeTimeout), delete this._resizeTimeout);
        const l = async () => {
          const s = this.container.canvas;
          await (s == null ? void 0 : s.windowResize());
        };
        this._resizeTimeout = setTimeout(
          () => void l(),
          this.container.actualOptions.interactivity.events.resize.delay * mt,
        );
      }),
      (this._manageInteractivityListeners = (l, s) => {
        const r = this._handlers,
          u = this.container,
          d = u.actualOptions,
          h = u.interactivity.element;
        if (!h) return;
        const p = h,
          y = u.canvas;
        (y.setPointerEvents(p === y.element ? "initial" : "none"),
          (d.interactivity.events.onHover.enable ||
            d.interactivity.events.onClick.enable) &&
            (ii(h, sa, r.mouseMove, s),
            ii(h, Nx, r.touchStart, s),
            ii(h, Ax, r.touchMove, s),
            d.interactivity.events.onClick.enable
              ? (ii(h, bg, r.touchEndClick, s),
                ii(h, Ox, r.mouseUp, s),
                ii(h, Dx, r.mouseDown, s))
              : ii(h, bg, r.touchEnd, s),
            ii(h, l, r.mouseLeave, s),
            ii(h, kx, r.touchCancel, s)));
      }),
      (this._manageListeners = (l) => {
        const s = this._handlers,
          r = this.container,
          u = r.actualOptions,
          d = u.interactivity.detectsOn,
          h = r.canvas.element;
        let p = Sf;
        (d === ol.window
          ? ((r.interactivity.element = window), (p = Rx))
          : d === ol.parent && h
            ? (r.interactivity.element = h.parentElement ?? h.parentNode)
            : (r.interactivity.element = h),
          this._manageMediaMatch(l),
          this._manageResize(l),
          this._manageInteractivityListeners(p, l),
          document && ii(document, Ux, s.visibilityChange, l, !1));
      }),
      (this._manageMediaMatch = (l) => {
        const s = this._handlers,
          r = iv("(prefers-color-scheme: dark)");
        if (r) {
          if (r.addEventListener !== void 0) {
            ii(r, "change", s.themeChange, l);
            return;
          }
          r.addListener !== void 0 &&
            (l
              ? r.addListener(s.oldThemeChange)
              : r.removeListener(s.oldThemeChange));
        }
      }),
      (this._manageResize = (l) => {
        const s = this._handlers,
          r = this.container;
        if (!r.actualOptions.interactivity.events.resize) return;
        if (typeof ResizeObserver > "u") {
          ii(window, Lx, s.resize, l);
          return;
        }
        const d = r.canvas.element;
        this._resizeObserver && !l
          ? (d && this._resizeObserver.unobserve(d),
            this._resizeObserver.disconnect(),
            delete this._resizeObserver)
          : !this._resizeObserver &&
            l &&
            d &&
            ((this._resizeObserver = new ResizeObserver((h) => {
              h.find((y) => y.target === d) && this._handleWindowResize();
            })),
            this._resizeObserver.observe(d));
      }),
      (this._mouseDown = () => {
        const { interactivity: l } = this.container;
        if (!l) return;
        const { mouse: s } = l;
        ((s.clicking = !0), (s.downPosition = s.position));
      }),
      (this._mouseTouchClick = (l) => {
        const s = this.container,
          r = s.actualOptions,
          { mouse: u } = s.interactivity;
        u.inside = !0;
        let d = !1;
        const h = u.position;
        if (!(!h || !r.interactivity.events.onClick.enable)) {
          for (const p of s.plugins.values())
            if (p.clickPositionValid && ((d = p.clickPositionValid(h)), d))
              break;
          (d || this._doMouseTouchClick(l), (u.clicking = !1));
        }
      }),
      (this._mouseTouchFinish = () => {
        const l = this.container.interactivity;
        if (!l) return;
        const s = l.mouse;
        (delete s.position,
          delete s.clickPosition,
          delete s.downPosition,
          (l.status = Sf),
          (s.inside = !1),
          (s.clicking = !1));
      }),
      (this._mouseTouchMove = (l) => {
        const s = this.container,
          r = s.actualOptions,
          u = s.interactivity,
          d = s.canvas.element;
        if (!(u != null && u.element)) return;
        u.mouse.inside = !0;
        let h;
        if (l.type.startsWith("pointer")) {
          this._canPush = !0;
          const y = l;
          if (u.element === window) {
            if (d) {
              const x = d.getBoundingClientRect();
              h = { x: y.clientX - x.left, y: y.clientY - x.top };
            }
          } else if (r.interactivity.detectsOn === ol.parent) {
            const x = y.target,
              b = y.currentTarget;
            if (x && b && d) {
              const w = x.getBoundingClientRect(),
                z = b.getBoundingClientRect(),
                T = d.getBoundingClientRect();
              h = {
                x: y.offsetX + pt * w.left - (z.left + T.left),
                y: y.offsetY + pt * w.top - (z.top + T.top),
              };
            } else h = { x: y.offsetX ?? y.clientX, y: y.offsetY ?? y.clientY };
          } else
            y.target === d &&
              (h = { x: y.offsetX ?? y.clientX, y: y.offsetY ?? y.clientY });
        } else if (((this._canPush = l.type !== "touchmove"), d)) {
          const y = l,
            x = y.touches[y.touches.length - Jy],
            b = d.getBoundingClientRect();
          h = { x: x.clientX - (b.left ?? hr), y: x.clientY - (b.top ?? hr) };
        }
        const p = s.retina.pixelRatio;
        (h && ((h.x *= p), (h.y *= p)),
          (u.mouse.position = h),
          (u.status = sa));
      }),
      (this._touchEnd = (l) => {
        const s = l,
          r = Array.from(s.changedTouches);
        for (const u of r) this._touches.delete(u.identifier);
        this._mouseTouchFinish();
      }),
      (this._touchEndClick = (l) => {
        const s = l,
          r = Array.from(s.changedTouches);
        for (const u of r) this._touches.delete(u.identifier);
        this._mouseTouchClick(l);
      }),
      (this._touchStart = (l) => {
        const s = l,
          r = Array.from(s.changedTouches);
        for (const u of r) this._touches.set(u.identifier, performance.now());
        this._mouseTouchMove(l);
      }),
      (this._canPush = !0),
      (this._touches = new Map()),
      (this._handlers = {
        mouseDown: () => this._mouseDown(),
        mouseLeave: () => this._mouseTouchFinish(),
        mouseMove: (l) => this._mouseTouchMove(l),
        mouseUp: (l) => this._mouseTouchClick(l),
        touchStart: (l) => this._touchStart(l),
        touchMove: (l) => this._mouseTouchMove(l),
        touchEnd: (l) => this._touchEnd(l),
        touchCancel: (l) => this._touchEnd(l),
        touchEndClick: (l) => this._touchEndClick(l),
        visibilityChange: () => this._handleVisibilityChange(),
        themeChange: (l) => this._handleThemeChange(l),
        oldThemeChange: (l) => this._handleThemeChange(l),
        resize: () => {
          this._handleWindowResize();
        },
      }));
  }
  addListeners() {
    this._manageListeners(!0);
  }
  removeListeners() {
    this._manageListeners(!1);
  }
}
var wt;
(function (a) {
  ((a.configAdded = "configAdded"),
    (a.containerInit = "containerInit"),
    (a.particlesSetup = "particlesSetup"),
    (a.containerStarted = "containerStarted"),
    (a.containerStopped = "containerStopped"),
    (a.containerDestroyed = "containerDestroyed"),
    (a.containerPaused = "containerPaused"),
    (a.containerPlay = "containerPlay"),
    (a.containerBuilt = "containerBuilt"),
    (a.particleAdded = "particleAdded"),
    (a.particleDestroyed = "particleDestroyed"),
    (a.particleRemoved = "particleRemoved"));
})(wt || (wt = {}));
class vt {
  constructor() {
    this.value = "";
  }
  static create(i, l) {
    const s = new vt();
    return (
      s.load(i),
      l !== void 0 && (jn(l) || _i(l) ? s.load({ value: l }) : s.load(l)),
      s
    );
  }
  load(i) {
    X(i) || X(i.value) || (this.value = i.value);
  }
}
class W3 {
  constructor() {
    ((this.color = new vt()),
      (this.color.value = ""),
      (this.image = ""),
      (this.position = ""),
      (this.repeat = ""),
      (this.size = ""),
      (this.opacity = 1));
  }
  load(i) {
    X(i) ||
      (i.color !== void 0 && (this.color = vt.create(this.color, i.color)),
      i.image !== void 0 && (this.image = i.image),
      i.position !== void 0 && (this.position = i.position),
      i.repeat !== void 0 && (this.repeat = i.repeat),
      i.size !== void 0 && (this.size = i.size),
      i.opacity !== void 0 && (this.opacity = i.opacity));
  }
}
class e4 {
  constructor() {
    this.opacity = 1;
  }
  load(i) {
    X(i) ||
      (i.color !== void 0 && (this.color = vt.create(this.color, i.color)),
      i.image !== void 0 && (this.image = i.image),
      i.opacity !== void 0 && (this.opacity = i.opacity));
  }
}
class t4 {
  constructor() {
    ((this.composite = "destination-out"),
      (this.cover = new e4()),
      (this.enable = !1));
  }
  load(i) {
    if (!X(i)) {
      if (
        (i.composite !== void 0 && (this.composite = i.composite),
        i.cover !== void 0)
      ) {
        const l = i.cover,
          s = jn(i.cover) ? { color: i.cover } : i.cover;
        this.cover.load(
          l.color !== void 0 || l.image !== void 0 ? l : { color: s },
        );
      }
      i.enable !== void 0 && (this.enable = i.enable);
    }
  }
}
class i4 {
  constructor() {
    ((this.enable = !0), (this.zIndex = 0));
  }
  load(i) {
    X(i) ||
      (i.enable !== void 0 && (this.enable = i.enable),
      i.zIndex !== void 0 && (this.zIndex = i.zIndex));
  }
}
class n4 {
  constructor() {
    ((this.enable = !1), (this.mode = []));
  }
  load(i) {
    X(i) ||
      (i.enable !== void 0 && (this.enable = i.enable),
      i.mode !== void 0 && (this.mode = i.mode));
  }
}
var pl;
(function (a) {
  ((a.circle = "circle"), (a.rectangle = "rectangle"));
})(pl || (pl = {}));
class qg {
  constructor() {
    ((this.selectors = []),
      (this.enable = !1),
      (this.mode = []),
      (this.type = pl.circle));
  }
  load(i) {
    X(i) ||
      (i.selectors !== void 0 && (this.selectors = i.selectors),
      i.enable !== void 0 && (this.enable = i.enable),
      i.mode !== void 0 && (this.mode = i.mode),
      i.type !== void 0 && (this.type = i.type));
  }
}
class a4 {
  constructor() {
    ((this.enable = !1), (this.force = 2), (this.smooth = 10));
  }
  load(i) {
    X(i) ||
      (i.enable !== void 0 && (this.enable = i.enable),
      i.force !== void 0 && (this.force = i.force),
      i.smooth !== void 0 && (this.smooth = i.smooth));
  }
}
class l4 {
  constructor() {
    ((this.enable = !1), (this.mode = []), (this.parallax = new a4()));
  }
  load(i) {
    X(i) ||
      (i.enable !== void 0 && (this.enable = i.enable),
      i.mode !== void 0 && (this.mode = i.mode),
      this.parallax.load(i.parallax));
  }
}
class s4 {
  constructor() {
    ((this.delay = 0.5), (this.enable = !0));
  }
  load(i) {
    X(i) ||
      (i.delay !== void 0 && (this.delay = i.delay),
      i.enable !== void 0 && (this.enable = i.enable));
  }
}
class o4 {
  constructor() {
    ((this.onClick = new n4()),
      (this.onDiv = new qg()),
      (this.onHover = new l4()),
      (this.resize = new s4()));
  }
  load(i) {
    if (X(i)) return;
    this.onClick.load(i.onClick);
    const l = i.onDiv;
    (l !== void 0 &&
      (this.onDiv = Qt(l, (s) => {
        const r = new qg();
        return (r.load(s), r);
      })),
      this.onHover.load(i.onHover),
      this.resize.load(i.resize));
  }
}
class r4 {
  constructor(i, l) {
    ((this._engine = i), (this._container = l));
  }
  load(i) {
    if (X(i) || !this._container) return;
    const l = this._engine.interactors.get(this._container);
    if (l) for (const s of l) s.loadModeOptions && s.loadModeOptions(this, i);
  }
}
class mv {
  constructor(i, l) {
    ((this.detectsOn = ol.window),
      (this.events = new o4()),
      (this.modes = new r4(i, l)));
  }
  load(i) {
    if (X(i)) return;
    const l = i.detectsOn;
    (l !== void 0 && (this.detectsOn = l),
      this.events.load(i.events),
      this.modes.load(i.modes));
  }
}
class c4 {
  load(i) {
    X(i) ||
      (i.position &&
        (this.position = {
          x: i.position.x ?? Ng,
          y: i.position.y ?? Ng,
          mode: i.position.mode ?? hl.percent,
        }),
      i.options && (this.options = yt({}, i.options)));
  }
}
var aa;
(function (a) {
  ((a.screen = "screen"), (a.canvas = "canvas"));
})(aa || (aa = {}));
class u4 {
  constructor() {
    ((this.maxWidth = 1 / 0), (this.options = {}), (this.mode = aa.canvas));
  }
  load(i) {
    X(i) ||
      (X(i.maxWidth) || (this.maxWidth = i.maxWidth),
      X(i.mode) ||
        (i.mode === aa.screen
          ? (this.mode = aa.screen)
          : (this.mode = aa.canvas)),
      X(i.options) || (this.options = yt({}, i.options)));
  }
}
var zn;
(function (a) {
  ((a.any = "any"), (a.dark = "dark"), (a.light = "light"));
})(zn || (zn = {}));
class f4 {
  constructor() {
    ((this.auto = !1), (this.mode = zn.any), (this.value = !1));
  }
  load(i) {
    X(i) ||
      (i.auto !== void 0 && (this.auto = i.auto),
      i.mode !== void 0 && (this.mode = i.mode),
      i.value !== void 0 && (this.value = i.value));
  }
}
class d4 {
  constructor() {
    ((this.name = ""), (this.default = new f4()));
  }
  load(i) {
    X(i) ||
      (i.name !== void 0 && (this.name = i.name),
      this.default.load(i.default),
      i.options !== void 0 && (this.options = yt({}, i.options)));
  }
}
class Zf {
  constructor() {
    ((this.count = 0),
      (this.enable = !1),
      (this.speed = 1),
      (this.decay = 0),
      (this.delay = 0),
      (this.sync = !1));
  }
  load(i) {
    X(i) ||
      (i.count !== void 0 && (this.count = be(i.count)),
      i.enable !== void 0 && (this.enable = i.enable),
      i.speed !== void 0 && (this.speed = be(i.speed)),
      i.decay !== void 0 && (this.decay = be(i.decay)),
      i.delay !== void 0 && (this.delay = be(i.delay)),
      i.sync !== void 0 && (this.sync = i.sync));
  }
}
class Pf extends Zf {
  constructor() {
    (super(), (this.mode = na.auto), (this.startValue = sl.random));
  }
  load(i) {
    (super.load(i),
      !X(i) &&
        (i.mode !== void 0 && (this.mode = i.mode),
        i.startValue !== void 0 && (this.startValue = i.startValue)));
  }
}
class of extends Zf {
  constructor() {
    (super(), (this.offset = 0), (this.sync = !0));
  }
  load(i) {
    (super.load(i),
      !X(i) && i.offset !== void 0 && (this.offset = be(i.offset)));
  }
}
class h4 {
  constructor() {
    ((this.h = new of()), (this.s = new of()), (this.l = new of()));
  }
  load(i) {
    X(i) || (this.h.load(i.h), this.s.load(i.s), this.l.load(i.l));
  }
}
class xs extends vt {
  constructor() {
    (super(), (this.animation = new h4()));
  }
  static create(i, l) {
    const s = new xs();
    return (
      s.load(i),
      l !== void 0 && (jn(l) || _i(l) ? s.load({ value: l }) : s.load(l)),
      s
    );
  }
  load(i) {
    if ((super.load(i), X(i))) return;
    const l = i.animation;
    l !== void 0 &&
      (l.enable !== void 0
        ? this.animation.h.load(l)
        : this.animation.load(i.animation));
  }
}
var rl;
(function (a) {
  ((a.absorb = "absorb"), (a.bounce = "bounce"), (a.destroy = "destroy"));
})(rl || (rl = {}));
class m4 {
  constructor() {
    this.speed = 2;
  }
  load(i) {
    X(i) || (i.speed !== void 0 && (this.speed = i.speed));
  }
}
class p4 {
  constructor() {
    ((this.enable = !0), (this.retries = 0));
  }
  load(i) {
    X(i) ||
      (i.enable !== void 0 && (this.enable = i.enable),
      i.retries !== void 0 && (this.retries = i.retries));
  }
}
class ua {
  constructor() {
    this.value = 0;
  }
  load(i) {
    X(i) || X(i.value) || (this.value = be(i.value));
  }
}
class g4 extends ua {
  constructor() {
    (super(), (this.animation = new Zf()));
  }
  load(i) {
    if ((super.load(i), X(i))) return;
    const l = i.animation;
    l !== void 0 && this.animation.load(l);
  }
}
class pv extends g4 {
  constructor() {
    (super(), (this.animation = new Pf()));
  }
  load(i) {
    super.load(i);
  }
}
class Vg extends ua {
  constructor() {
    (super(), (this.value = 1));
  }
}
class gv {
  constructor() {
    ((this.horizontal = new Vg()), (this.vertical = new Vg()));
  }
  load(i) {
    X(i) ||
      (this.horizontal.load(i.horizontal), this.vertical.load(i.vertical));
  }
}
class y4 {
  constructor() {
    ((this.absorb = new m4()),
      (this.bounce = new gv()),
      (this.enable = !1),
      (this.maxSpeed = 50),
      (this.mode = rl.bounce),
      (this.overlap = new p4()));
  }
  load(i) {
    X(i) ||
      (this.absorb.load(i.absorb),
      this.bounce.load(i.bounce),
      i.enable !== void 0 && (this.enable = i.enable),
      i.maxSpeed !== void 0 && (this.maxSpeed = be(i.maxSpeed)),
      i.mode !== void 0 && (this.mode = i.mode),
      this.overlap.load(i.overlap));
  }
}
class v4 {
  constructor() {
    ((this.close = !0),
      (this.fill = !0),
      (this.options = {}),
      (this.type = []));
  }
  load(i) {
    if (X(i)) return;
    const l = i.options;
    if (l !== void 0)
      for (const s in l) {
        const r = l[s];
        r && (this.options[s] = yt(this.options[s] ?? {}, r));
      }
    (i.close !== void 0 && (this.close = i.close),
      i.fill !== void 0 && (this.fill = i.fill),
      i.type !== void 0 && (this.type = i.type));
  }
}
class b4 {
  constructor() {
    ((this.offset = 0), (this.value = 90));
  }
  load(i) {
    X(i) ||
      (i.offset !== void 0 && (this.offset = be(i.offset)),
      i.value !== void 0 && (this.value = be(i.value)));
  }
}
class x4 {
  constructor() {
    ((this.distance = 200),
      (this.enable = !1),
      (this.rotate = { x: 3e3, y: 3e3 }));
  }
  load(i) {
    if (
      !X(i) &&
      (i.distance !== void 0 && (this.distance = be(i.distance)),
      i.enable !== void 0 && (this.enable = i.enable),
      i.rotate)
    ) {
      const l = i.rotate.x;
      l !== void 0 && (this.rotate.x = l);
      const s = i.rotate.y;
      s !== void 0 && (this.rotate.y = s);
    }
  }
}
class w4 {
  constructor() {
    ((this.x = 50), (this.y = 50), (this.mode = hl.percent), (this.radius = 0));
  }
  load(i) {
    X(i) ||
      (i.x !== void 0 && (this.x = i.x),
      i.y !== void 0 && (this.y = i.y),
      i.mode !== void 0 && (this.mode = i.mode),
      i.radius !== void 0 && (this.radius = i.radius));
  }
}
class S4 {
  constructor() {
    ((this.acceleration = 9.81),
      (this.enable = !1),
      (this.inverse = !1),
      (this.maxSpeed = 50));
  }
  load(i) {
    X(i) ||
      (i.acceleration !== void 0 && (this.acceleration = be(i.acceleration)),
      i.enable !== void 0 && (this.enable = i.enable),
      i.inverse !== void 0 && (this.inverse = i.inverse),
      i.maxSpeed !== void 0 && (this.maxSpeed = be(i.maxSpeed)));
  }
}
class z4 {
  constructor() {
    ((this.clamp = !0),
      (this.delay = new ua()),
      (this.enable = !1),
      (this.options = {}));
  }
  load(i) {
    X(i) ||
      (i.clamp !== void 0 && (this.clamp = i.clamp),
      this.delay.load(i.delay),
      i.enable !== void 0 && (this.enable = i.enable),
      (this.generator = i.generator),
      i.options && (this.options = yt(this.options, i.options)));
  }
}
class C4 {
  load(i) {
    X(i) ||
      (i.color !== void 0 && (this.color = vt.create(this.color, i.color)),
      i.image !== void 0 && (this.image = i.image));
  }
}
class _4 {
  constructor() {
    ((this.enable = !1), (this.length = 10), (this.fill = new C4()));
  }
  load(i) {
    X(i) ||
      (i.enable !== void 0 && (this.enable = i.enable),
      i.fill !== void 0 && this.fill.load(i.fill),
      i.length !== void 0 && (this.length = i.length));
  }
}
var $e;
(function (a) {
  ((a.bounce = "bounce"),
    (a.none = "none"),
    (a.out = "out"),
    (a.destroy = "destroy"),
    (a.split = "split"));
})($e || ($e = {}));
class T4 {
  constructor() {
    this.default = $e.out;
  }
  load(i) {
    X(i) ||
      (i.default !== void 0 && (this.default = i.default),
      (this.bottom = i.bottom ?? i.default),
      (this.left = i.left ?? i.default),
      (this.right = i.right ?? i.default),
      (this.top = i.top ?? i.default));
  }
}
class E4 {
  constructor() {
    ((this.acceleration = 0), (this.enable = !1));
  }
  load(i) {
    X(i) ||
      (i.acceleration !== void 0 && (this.acceleration = be(i.acceleration)),
      i.enable !== void 0 && (this.enable = i.enable),
      i.position && (this.position = yt({}, i.position)));
  }
}
class j4 {
  constructor() {
    ((this.angle = new b4()),
      (this.attract = new x4()),
      (this.center = new w4()),
      (this.decay = 0),
      (this.distance = {}),
      (this.direction = ft.none),
      (this.drift = 0),
      (this.enable = !1),
      (this.gravity = new S4()),
      (this.path = new z4()),
      (this.outModes = new T4()),
      (this.random = !1),
      (this.size = !1),
      (this.speed = 2),
      (this.spin = new E4()),
      (this.straight = !1),
      (this.trail = new _4()),
      (this.vibrate = !1),
      (this.warp = !1));
  }
  load(i) {
    if (X(i)) return;
    (this.angle.load(Mn(i.angle) ? { value: i.angle } : i.angle),
      this.attract.load(i.attract),
      this.center.load(i.center),
      i.decay !== void 0 && (this.decay = be(i.decay)),
      i.direction !== void 0 && (this.direction = i.direction),
      i.distance !== void 0 &&
        (this.distance = Mn(i.distance)
          ? { horizontal: i.distance, vertical: i.distance }
          : { ...i.distance }),
      i.drift !== void 0 && (this.drift = be(i.drift)),
      i.enable !== void 0 && (this.enable = i.enable),
      this.gravity.load(i.gravity));
    const l = i.outModes;
    (l !== void 0 &&
      (nl(l) ? this.outModes.load(l) : this.outModes.load({ default: l })),
      this.path.load(i.path),
      i.random !== void 0 && (this.random = i.random),
      i.size !== void 0 && (this.size = i.size),
      i.speed !== void 0 && (this.speed = be(i.speed)),
      this.spin.load(i.spin),
      i.straight !== void 0 && (this.straight = i.straight),
      this.trail.load(i.trail),
      i.vibrate !== void 0 && (this.vibrate = i.vibrate),
      i.warp !== void 0 && (this.warp = i.warp));
  }
}
class M4 extends Pf {
  constructor() {
    (super(), (this.destroy = oa.none), (this.speed = 2));
  }
  load(i) {
    (super.load(i),
      !X(i) && i.destroy !== void 0 && (this.destroy = i.destroy));
  }
}
class D4 extends pv {
  constructor() {
    (super(), (this.animation = new M4()), (this.value = 1));
  }
  load(i) {
    if (X(i)) return;
    super.load(i);
    const l = i.animation;
    l !== void 0 && this.animation.load(l);
  }
}
class O4 {
  constructor() {
    ((this.enable = !1), (this.width = 1920), (this.height = 1080));
  }
  load(i) {
    if (X(i)) return;
    i.enable !== void 0 && (this.enable = i.enable);
    const l = i.width;
    l !== void 0 && (this.width = l);
    const s = i.height;
    s !== void 0 && (this.height = s);
  }
}
var ws;
(function (a) {
  ((a.delete = "delete"), (a.wait = "wait"));
})(ws || (ws = {}));
class R4 {
  constructor() {
    ((this.mode = ws.delete), (this.value = 0));
  }
  load(i) {
    X(i) ||
      (i.mode !== void 0 && (this.mode = i.mode),
      i.value !== void 0 && (this.value = i.value));
  }
}
class N4 {
  constructor() {
    ((this.density = new O4()), (this.limit = new R4()), (this.value = 0));
  }
  load(i) {
    X(i) ||
      (this.density.load(i.density),
      this.limit.load(i.limit),
      i.value !== void 0 && (this.value = i.value));
  }
}
class A4 {
  constructor() {
    ((this.blur = 0),
      (this.color = new vt()),
      (this.enable = !1),
      (this.offset = { x: 0, y: 0 }),
      (this.color.value = "#000"));
  }
  load(i) {
    X(i) ||
      (i.blur !== void 0 && (this.blur = i.blur),
      (this.color = vt.create(this.color, i.color)),
      i.enable !== void 0 && (this.enable = i.enable),
      i.offset !== void 0 &&
        (i.offset.x !== void 0 && (this.offset.x = i.offset.x),
        i.offset.y !== void 0 && (this.offset.y = i.offset.y)));
  }
}
class k4 {
  constructor() {
    ((this.close = !0),
      (this.fill = !0),
      (this.options = {}),
      (this.type = "circle"));
  }
  load(i) {
    if (X(i)) return;
    const l = i.options;
    if (l !== void 0)
      for (const s in l) {
        const r = l[s];
        r && (this.options[s] = yt(this.options[s] ?? {}, r));
      }
    (i.close !== void 0 && (this.close = i.close),
      i.fill !== void 0 && (this.fill = i.fill),
      i.type !== void 0 && (this.type = i.type));
  }
}
class L4 extends Pf {
  constructor() {
    (super(), (this.destroy = oa.none), (this.speed = 5));
  }
  load(i) {
    (super.load(i),
      !X(i) && i.destroy !== void 0 && (this.destroy = i.destroy));
  }
}
class U4 extends pv {
  constructor() {
    (super(), (this.animation = new L4()), (this.value = 3));
  }
  load(i) {
    if ((super.load(i), X(i))) return;
    const l = i.animation;
    l !== void 0 && this.animation.load(l);
  }
}
class Yg {
  constructor() {
    this.width = 0;
  }
  load(i) {
    X(i) ||
      (i.color !== void 0 && (this.color = xs.create(this.color, i.color)),
      i.width !== void 0 && (this.width = be(i.width)),
      i.opacity !== void 0 && (this.opacity = be(i.opacity)));
  }
}
class B4 extends ua {
  constructor() {
    (super(),
      (this.opacityRate = 1),
      (this.sizeRate = 1),
      (this.velocityRate = 1));
  }
  load(i) {
    (super.load(i),
      !X(i) &&
        (i.opacityRate !== void 0 && (this.opacityRate = i.opacityRate),
        i.sizeRate !== void 0 && (this.sizeRate = i.sizeRate),
        i.velocityRate !== void 0 && (this.velocityRate = i.velocityRate)));
  }
}
class H4 {
  constructor(i, l) {
    ((this._engine = i),
      (this._container = l),
      (this.bounce = new gv()),
      (this.collisions = new y4()),
      (this.color = new xs()),
      (this.color.value = "#fff"),
      (this.effect = new v4()),
      (this.groups = {}),
      (this.move = new j4()),
      (this.number = new N4()),
      (this.opacity = new D4()),
      (this.reduceDuplicates = !1),
      (this.shadow = new A4()),
      (this.shape = new k4()),
      (this.size = new U4()),
      (this.stroke = new Yg()),
      (this.zIndex = new B4()));
  }
  load(i) {
    if (X(i)) return;
    if (i.groups !== void 0)
      for (const s of Object.keys(i.groups)) {
        if (!Object.hasOwn(i.groups, s)) continue;
        const r = i.groups[s];
        r !== void 0 && (this.groups[s] = yt(this.groups[s] ?? {}, r));
      }
    (i.reduceDuplicates !== void 0 &&
      (this.reduceDuplicates = i.reduceDuplicates),
      this.bounce.load(i.bounce),
      this.color.load(xs.create(this.color, i.color)),
      this.effect.load(i.effect),
      this.move.load(i.move),
      this.number.load(i.number),
      this.opacity.load(i.opacity),
      this.shape.load(i.shape),
      this.size.load(i.size),
      this.shadow.load(i.shadow),
      this.zIndex.load(i.zIndex),
      this.collisions.load(i.collisions),
      i.interactivity !== void 0 &&
        (this.interactivity = yt({}, i.interactivity)));
    const l = i.stroke;
    if (
      (l &&
        (this.stroke = Qt(l, (s) => {
          const r = new Yg();
          return (r.load(s), r);
        })),
      this._container)
    ) {
      const s = this._engine.updaters.get(this._container);
      if (s) for (const u of s) u.loadOptions && u.loadOptions(this, i);
      const r = this._engine.interactors.get(this._container);
      if (r)
        for (const u of r)
          u.loadParticlesOptions && u.loadParticlesOptions(this, i);
    }
  }
}
function yv(a, ...i) {
  for (const l of i) a.load(l);
}
function vv(a, i, ...l) {
  const s = new H4(a, i);
  return (yv(s, ...l), s);
}
class q4 {
  constructor(i, l) {
    ((this._findDefaultTheme = (s) =>
      this.themes.find((r) => r.default.value && r.default.mode === s) ??
      this.themes.find((r) => r.default.value && r.default.mode === zn.any)),
      (this._importPreset = (s) => {
        this.load(this._engine.getPreset(s));
      }),
      (this._engine = i),
      (this._container = l),
      (this.autoPlay = !0),
      (this.background = new W3()),
      (this.backgroundMask = new t4()),
      (this.clear = !0),
      (this.defaultThemes = {}),
      (this.delay = 0),
      (this.fullScreen = new i4()),
      (this.detectRetina = !0),
      (this.duration = 0),
      (this.fpsLimit = 120),
      (this.interactivity = new mv(i, l)),
      (this.manualParticles = []),
      (this.particles = vv(this._engine, this._container)),
      (this.pauseOnBlur = !0),
      (this.pauseOnOutsideViewport = !0),
      (this.responsive = []),
      (this.smooth = !1),
      (this.style = {}),
      (this.themes = []),
      (this.zLayers = 100));
  }
  load(i) {
    var d, h;
    if (X(i)) return;
    (i.preset !== void 0 && Qt(i.preset, (p) => this._importPreset(p)),
      i.autoPlay !== void 0 && (this.autoPlay = i.autoPlay),
      i.clear !== void 0 && (this.clear = i.clear),
      i.key !== void 0 && (this.key = i.key),
      i.name !== void 0 && (this.name = i.name),
      i.delay !== void 0 && (this.delay = be(i.delay)));
    const l = i.detectRetina;
    (l !== void 0 && (this.detectRetina = l),
      i.duration !== void 0 && (this.duration = be(i.duration)));
    const s = i.fpsLimit;
    (s !== void 0 && (this.fpsLimit = s),
      i.pauseOnBlur !== void 0 && (this.pauseOnBlur = i.pauseOnBlur),
      i.pauseOnOutsideViewport !== void 0 &&
        (this.pauseOnOutsideViewport = i.pauseOnOutsideViewport),
      i.zLayers !== void 0 && (this.zLayers = i.zLayers),
      this.background.load(i.background));
    const r = i.fullScreen;
    (Wy(r) ? (this.fullScreen.enable = r) : this.fullScreen.load(r),
      this.backgroundMask.load(i.backgroundMask),
      this.interactivity.load(i.interactivity),
      i.manualParticles &&
        (this.manualParticles = i.manualParticles.map((p) => {
          const y = new c4();
          return (y.load(p), y);
        })),
      this.particles.load(i.particles),
      (this.style = yt(this.style, i.style)),
      this._engine.loadOptions(this, i),
      i.smooth !== void 0 && (this.smooth = i.smooth));
    const u = this._engine.interactors.get(this._container);
    if (u) for (const p of u) p.loadOptions && p.loadOptions(this, i);
    if (i.responsive !== void 0)
      for (const p of i.responsive) {
        const y = new u4();
        (y.load(p), this.responsive.push(y));
      }
    if (
      (this.responsive.sort((p, y) => p.maxWidth - y.maxWidth),
      i.themes !== void 0)
    )
      for (const p of i.themes) {
        const y = this.themes.find((x) => x.name === p.name);
        if (y) y.load(p);
        else {
          const x = new d4();
          (x.load(p), this.themes.push(x));
        }
      }
    ((this.defaultThemes.dark =
      (d = this._findDefaultTheme(zn.dark)) == null ? void 0 : d.name),
      (this.defaultThemes.light =
        (h = this._findDefaultTheme(zn.light)) == null ? void 0 : h.name));
  }
  setResponsive(i, l, s) {
    this.load(s);
    const r = this.responsive.find((u) =>
      u.mode === aa.screen && screen
        ? u.maxWidth > screen.availWidth
        : u.maxWidth * l > i,
    );
    return (
      this.load(r == null ? void 0 : r.options),
      r == null ? void 0 : r.maxWidth
    );
  }
  setTheme(i) {
    if (i) {
      const l = this.themes.find((s) => s.name === i);
      l && this.load(l.options);
    } else {
      const l = iv("(prefers-color-scheme: dark)"),
        s = l == null ? void 0 : l.matches,
        r = this._findDefaultTheme(s ? zn.dark : zn.light);
      r && this.load(r.options);
    }
  }
}
var gl;
(function (a) {
  ((a.external = "external"), (a.particles = "particles"));
})(gl || (gl = {}));
class V4 {
  constructor(i, l) {
    ((this.container = l),
      (this._engine = i),
      (this._interactors = []),
      (this._externalInteractors = []),
      (this._particleInteractors = []));
  }
  externalInteract(i) {
    for (const l of this._externalInteractors) l.isEnabled() && l.interact(i);
  }
  handleClickMode(i) {
    var l;
    for (const s of this._externalInteractors)
      (l = s.handleClickMode) == null || l.call(s, i);
  }
  async init() {
    ((this._interactors = await this._engine.getInteractors(
      this.container,
      !0,
    )),
      (this._externalInteractors = []),
      (this._particleInteractors = []));
    for (const i of this._interactors) {
      switch (i.type) {
        case gl.external:
          this._externalInteractors.push(i);
          break;
        case gl.particles:
          this._particleInteractors.push(i);
          break;
      }
      i.init();
    }
  }
  particlesInteract(i, l) {
    for (const s of this._externalInteractors) s.clear(i, l);
    for (const s of this._particleInteractors)
      s.isEnabled(i) && s.interact(i, l);
  }
  reset(i) {
    for (const l of this._externalInteractors) l.isEnabled() && l.reset(i);
    for (const l of this._particleInteractors) l.isEnabled(i) && l.reset(i);
  }
}
var mi;
(function (a) {
  ((a.normal = "normal"), (a.inside = "inside"), (a.outside = "outside"));
})(mi || (mi = {}));
function Y4(a, i, l, s) {
  const r = i.options[a];
  if (r) return yt({ close: i.close, fill: i.fill }, ni(r, l, s));
}
function G4(a, i, l, s) {
  const r = i.options[a];
  if (r) return yt({ close: i.close, fill: i.fill }, ni(r, l, s));
}
function Gg(a) {
  if (!Xe(a.outMode, a.checkModes)) return;
  const i = a.radius * pt;
  a.coord > a.maxCoord - i
    ? a.setCb(-a.radius)
    : a.coord < i && a.setCb(a.radius);
}
class X4 {
  constructor(i, l) {
    ((this.container = l),
      (this._calcPosition = (s, r, u, d = wg) => {
        for (const T of s.plugins.values()) {
          const M =
            T.particlePosition !== void 0
              ? T.particlePosition(r, this)
              : void 0;
          if (M) return Yt.create(M.x, M.y, u);
        }
        const h = s.canvas.size,
          p = S3({ size: h, position: r }),
          y = Yt.create(p.x, p.y, u),
          x = this.getRadius(),
          b = this.options.move.outModes,
          w = (T) => {
            Gg({
              outMode: T,
              checkModes: [$e.bounce],
              coord: y.x,
              maxCoord: s.canvas.size.width,
              setCb: (M) => (y.x += M),
              radius: x,
            });
          },
          z = (T) => {
            Gg({
              outMode: T,
              checkModes: [$e.bounce],
              coord: y.y,
              maxCoord: s.canvas.size.height,
              setCb: (M) => (y.y += M),
              radius: x,
            });
          };
        return (
          w(b.left ?? b.default),
          w(b.right ?? b.default),
          z(b.top ?? b.default),
          z(b.bottom ?? b.default),
          this._checkOverlap(y, d)
            ? this._calcPosition(s, void 0, u, d + t3)
            : y
        );
      }),
      (this._calculateVelocity = () => {
        const s = w3(this.direction),
          r = s.copy(),
          u = this.options.move;
        if (u.direction === ft.inside || u.direction === ft.outside) return r;
        const d = En(W(u.angle.value)),
          h = En(W(u.angle.offset)),
          p = { left: h - d * tt, right: h + d * tt };
        return (
          u.straight || (r.angle += Gt(be(p.left, p.right))),
          u.random && typeof u.speed == "number" && (r.length *= je()),
          r
        );
      }),
      (this._checkOverlap = (s, r = wg) => {
        const u = this.options.collisions,
          d = this.getRadius();
        if (!u.enable) return !1;
        const h = u.overlap;
        if (h.enable) return !1;
        const p = h.retries;
        if (p >= i3 && r > p)
          throw new Error(`${ai} particle is overlapping and can't be placed`);
        return !!this.container.particles.find(
          (y) => Xt(s, y.position) < d + y.getRadius(),
        );
      }),
      (this._getRollColor = (s) => {
        if (!s || !this.roll || (!this.backColor && !this.roll.alter)) return s;
        const r = this.roll.horizontal && this.roll.vertical ? pt * Mg : Mg,
          u = this.roll.horizontal ? Math.PI * tt : mr;
        return Math.floor(((this.roll.angle ?? mr) + u) / (Math.PI / r)) % pt
          ? this.backColor
            ? this.backColor
            : this.roll.alter
              ? K3(s, this.roll.alter.type, this.roll.alter.value)
              : s
          : s;
      }),
      (this._initPosition = (s) => {
        const r = this.container,
          u = W(this.options.zIndex.value);
        ((this.position = this._calcPosition(r, s, li(u, n3, r.zLayers))),
          (this.initialPosition = this.position.copy()));
        const d = r.canvas.size;
        switch (
          ((this.moveCenter = {
            ...ov(this.options.move.center, d),
            radius: this.options.move.center.radius ?? a3,
            mode: this.options.move.center.mode ?? hl.percent,
          }),
          (this.direction = x3(
            this.options.move.direction,
            this.position,
            this.moveCenter,
          )),
          this.options.move.direction)
        ) {
          case ft.inside:
            this.outType = mi.inside;
            break;
          case ft.outside:
            this.outType = mi.outside;
            break;
        }
        this.offset = at.origin;
      }),
      (this._engine = i));
  }
  destroy(i) {
    var u, d, h;
    if (this.unbreakable || this.destroyed) return;
    ((this.destroyed = !0),
      (this.bubble.inRange = !1),
      (this.slow.inRange = !1));
    const l = this.container,
      s = this.pathGenerator,
      r = l.shapeDrawers.get(this.shape);
    (u = r == null ? void 0 : r.particleDestroy) == null || u.call(r, this);
    for (const p of l.plugins.values())
      (d = p.particleDestroyed) == null || d.call(p, this, i);
    for (const p of l.particles.updaters)
      (h = p.particleDestroyed) == null || h.call(p, this, i);
    (s == null || s.reset(this),
      this._engine.dispatchEvent(wt.particleDestroyed, {
        container: this.container,
        data: { particle: this },
      }));
  }
  draw(i) {
    const l = this.container,
      s = l.canvas;
    for (const r of l.plugins.values()) s.drawParticlePlugin(r, this, i);
    s.drawParticle(this, i);
  }
  getFillColor() {
    return this._getRollColor(this.bubble.color ?? Bg(this.color));
  }
  getMass() {
    return this.getRadius() ** Qi * Math.PI * tt;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z,
    };
  }
  getRadius() {
    return this.bubble.radius ?? this.size.value;
  }
  getStrokeColor() {
    return this._getRollColor(this.bubble.color ?? Bg(this.strokeColor));
  }
  init(i, l, s, r) {
    var J, he, Oe, ke, We, Le;
    const u = this.container,
      d = this._engine;
    ((this.id = i),
      (this.group = r),
      (this.effectClose = !0),
      (this.effectFill = !0),
      (this.shapeClose = !0),
      (this.shapeFill = !0),
      (this.pathRotation = !1),
      (this.lastPathTime = 0),
      (this.destroyed = !1),
      (this.unbreakable = !1),
      (this.isRotating = !1),
      (this.rotation = 0),
      (this.misplaced = !1),
      (this.retina = { maxDistance: {} }),
      (this.outType = mi.normal),
      (this.ignoresResizeRatio = !0));
    const h = u.retina.pixelRatio,
      p = u.actualOptions,
      y = vv(this._engine, u, p.particles),
      { reduceDuplicates: x } = y,
      b = y.effect.type,
      w = y.shape.type;
    ((this.effect = ni(b, this.id, x)), (this.shape = ni(w, this.id, x)));
    const z = y.effect,
      T = y.shape;
    if (s) {
      if ((J = s.effect) != null && J.type) {
        const ge = s.effect.type,
          Qe = ni(ge, this.id, x);
        Qe && ((this.effect = Qe), z.load(s.effect));
      }
      if ((he = s.shape) != null && he.type) {
        const ge = s.shape.type,
          Qe = ni(ge, this.id, x);
        Qe && ((this.shape = Qe), T.load(s.shape));
      }
    }
    if (this.effect === dl) {
      const ge = [...this.container.effectDrawers.keys()];
      this.effect = ge[Math.floor(je() * ge.length)];
    }
    if (this.shape === dl) {
      const ge = [...this.container.shapeDrawers.keys()];
      this.shape = ge[Math.floor(je() * ge.length)];
    }
    ((this.effectData = Y4(this.effect, z, this.id, x)),
      (this.shapeData = G4(this.shape, T, this.id, x)),
      y.load(s));
    const M = this.effectData;
    M && y.load(M.particles);
    const E = this.shapeData;
    E && y.load(E.particles);
    const A = new mv(d, u);
    (A.load(u.actualOptions.interactivity),
      A.load(y.interactivity),
      (this.interactivity = A),
      (this.effectFill = (M == null ? void 0 : M.fill) ?? y.effect.fill),
      (this.effectClose = (M == null ? void 0 : M.close) ?? y.effect.close),
      (this.shapeFill = (E == null ? void 0 : E.fill) ?? y.shape.fill),
      (this.shapeClose = (E == null ? void 0 : E.close) ?? y.shape.close),
      (this.options = y));
    const q = this.options.move.path;
    ((this.pathDelay = W(q.delay.value) * mt),
      q.generator &&
        ((this.pathGenerator = this._engine.getPathGenerator(q.generator)),
        this.pathGenerator &&
          u.addPath(q.generator, this.pathGenerator) &&
          this.pathGenerator.init(u)),
      u.retina.initParticle(this),
      (this.size = sv(this.options.size, h)),
      (this.bubble = { inRange: !1 }),
      (this.slow = { inRange: !1, factor: 1 }),
      this._initPosition(l),
      (this.initialVelocity = this._calculateVelocity()),
      (this.velocity = this.initialVelocity.copy()),
      (this.moveDecay = Iy - W(this.options.move.decay)));
    const Y = u.particles;
    (Y.setLastZIndex(this.position.z),
      (this.zIndexFactor = this.position.z / u.zLayers),
      (this.sides = 24));
    let G = u.effectDrawers.get(this.effect);
    (G ||
      ((G = this._engine.getEffectDrawer(this.effect)),
      G && u.effectDrawers.set(this.effect, G)),
      G != null && G.loadEffect && G.loadEffect(this));
    let Z = u.shapeDrawers.get(this.shape);
    (Z ||
      ((Z = this._engine.getShapeDrawer(this.shape)),
      Z && u.shapeDrawers.set(this.shape, Z)),
      Z != null && Z.loadShape && Z.loadShape(this));
    const te = Z == null ? void 0 : Z.getSidesCount;
    (te && (this.sides = te(this)),
      (this.spawning = !1),
      (this.shadowColor = hi(this._engine, this.options.shadow.color)));
    for (const ge of Y.updaters) ge.init(this);
    for (const ge of Y.movers) (Oe = ge.init) == null || Oe.call(ge, this);
    ((ke = G == null ? void 0 : G.particleInit) == null || ke.call(G, u, this),
      (We = Z == null ? void 0 : Z.particleInit) == null ||
        We.call(Z, u, this));
    for (const ge of u.plugins.values())
      (Le = ge.particleCreated) == null || Le.call(ge, this);
  }
  isInsideCanvas() {
    const i = this.getRadius(),
      l = this.container.canvas.size,
      s = this.position;
    return s.x >= -i && s.y >= -i && s.y <= l.height + i && s.x <= l.width + i;
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    var i;
    for (const l of this.container.particles.updaters)
      (i = l.reset) == null || i.call(l, this);
  }
}
class Q4 {
  constructor(i, l) {
    ((this.position = i), (this.particle = l));
  }
}
var cl;
(function (a) {
  ((a.circle = "circle"), (a.rectangle = "rectangle"));
})(cl || (cl = {}));
class bv {
  constructor(i, l, s) {
    ((this.position = { x: i, y: l }), (this.type = s));
  }
}
class gt extends bv {
  constructor(i, l, s) {
    (super(i, l, cl.circle), (this.radius = s));
  }
  contains(i) {
    return Xt(i, this.position) <= this.radius;
  }
  intersects(i) {
    const l = this.position,
      s = i.position,
      r = { x: Math.abs(s.x - l.x), y: Math.abs(s.y - l.y) },
      u = this.radius;
    if (i instanceof gt || i.type === cl.circle) {
      const d = i,
        h = u + d.radius,
        p = Math.sqrt(r.x ** Qi + r.y ** Qi);
      return h > p;
    } else if (i instanceof pi || i.type === cl.rectangle) {
      const d = i,
        { width: h, height: p } = d.size;
      return (
        Math.pow(r.x - h, Qi) + Math.pow(r.y - p, Qi) <= u ** Qi ||
        (r.x <= u + h && r.y <= u + p) ||
        r.x <= h ||
        r.y <= p
      );
    }
    return !1;
  }
}
class pi extends bv {
  constructor(i, l, s, r) {
    (super(i, l, cl.rectangle), (this.size = { height: r, width: s }));
  }
  contains(i) {
    const l = this.size.width,
      s = this.size.height,
      r = this.position;
    return i.x >= r.x && i.x <= r.x + l && i.y >= r.y && i.y <= r.y + s;
  }
  intersects(i) {
    if (i instanceof gt) return i.intersects(this);
    const l = this.size.width,
      s = this.size.height,
      r = this.position,
      u = i.position,
      d = i instanceof pi ? i.size : { width: 0, height: 0 },
      h = d.width,
      p = d.height;
    return u.x < r.x + l && u.x + h > r.x && u.y < r.y + s && u.y + p > r.y;
  }
}
class gr {
  constructor(i, l) {
    ((this.rectangle = i),
      (this.capacity = l),
      (this._subdivide = () => {
        const { x: s, y: r } = this.rectangle.position,
          { width: u, height: d } = this.rectangle.size,
          { capacity: h } = this;
        for (let p = 0; p < qx; p++) {
          const y = p % pt;
          this._subs.push(
            new gr(
              new pi(
                s + u * tt * y,
                r + d * tt * (Math.round(p * tt) - y),
                u * tt,
                d * tt,
              ),
              h,
            ),
          );
        }
        this._divided = !0;
      }),
      (this._points = []),
      (this._divided = !1),
      (this._subs = []));
  }
  insert(i) {
    return this.rectangle.contains(i.position)
      ? this._points.length < this.capacity
        ? (this._points.push(i), !0)
        : (this._divided || this._subdivide(),
          this._subs.some((l) => l.insert(i)))
      : !1;
  }
  query(i, l) {
    const s = [];
    if (!i.intersects(this.rectangle)) return [];
    for (const r of this._points)
      (!i.contains(r.position) &&
        Xt(i.position, r.position) > r.particle.getRadius() &&
        (!l || l(r.particle))) ||
        s.push(r.particle);
    if (this._divided) for (const r of this._subs) s.push(...r.query(i, l));
    return s;
  }
  queryCircle(i, l, s) {
    return this.query(new gt(i.x, i.y, l), s);
  }
  queryRectangle(i, l, s) {
    return this.query(new pi(i.x, i.y, l.width, l.height), s);
  }
}
const Xg = (a) => {
  const { height: i, width: l } = a;
  return new pi(Dg * l, Dg * i, Og * l, Og * i);
};
class F4 {
  constructor(i, l) {
    ((this._addToPool = (...r) => {
      this._pool.push(...r);
    }),
      (this._applyDensity = (r, u, d, h) => {
        var T, M, E;
        const p = r.number;
        if (!((T = r.number.density) != null && T.enable)) {
          d === void 0
            ? (this._limit = p.limit.value)
            : (((M = h == null ? void 0 : h.number.limit) == null
                ? void 0
                : M.value) ??
                p.limit.value) &&
              this._groupLimits.set(
                d,
                ((E = h == null ? void 0 : h.number.limit) == null
                  ? void 0
                  : E.value) ?? p.limit.value,
              );
          return;
        }
        const y = this._initDensityFactor(p.density),
          x = p.value,
          b = p.limit.value > Rg ? p.limit.value : x,
          w = Math.min(x, b) * y + u,
          z = Math.min(this.count, this.filter((A) => A.group === d).length);
        (d === void 0
          ? (this._limit = p.limit.value * y)
          : this._groupLimits.set(d, p.limit.value * y),
          z < w
            ? this.push(Math.abs(w - z), void 0, r, d)
            : z > w && this.removeQuantity(z - w, d));
      }),
      (this._initDensityFactor = (r) => {
        const u = this._container;
        if (!u.canvas.element || !r.enable) return o3;
        const d = u.canvas.element,
          h = u.retina.pixelRatio;
        return (d.width * d.height) / (r.height * r.width * h ** Qi);
      }),
      (this._pushParticle = (r, u, d, h) => {
        try {
          let p = this._pool.pop();
          (p || (p = new X4(this._engine, this._container)),
            p.init(this._nextId, r, u, d));
          let y = !0;
          return (
            h && (y = h(p)),
            y
              ? (this._array.push(p),
                this._zArray.push(p),
                this._nextId++,
                this._engine.dispatchEvent(wt.particleAdded, {
                  container: this._container,
                  data: { particle: p },
                }),
                p)
              : void 0
          );
        } catch (p) {
          ra().warning(`${ai} adding particle: ${p}`);
        }
      }),
      (this._removeParticle = (r, u, d) => {
        const h = this._array[r];
        if (!h || h.group !== u) return !1;
        const p = this._zArray.indexOf(h);
        return (
          this._array.splice(r, pr),
          this._zArray.splice(p, pr),
          h.destroy(d),
          this._engine.dispatchEvent(wt.particleRemoved, {
            container: this._container,
            data: { particle: h },
          }),
          this._addToPool(h),
          !0
        );
      }),
      (this._engine = i),
      (this._container = l),
      (this._nextId = 0),
      (this._array = []),
      (this._zArray = []),
      (this._pool = []),
      (this._limit = 0),
      (this._groupLimits = new Map()),
      (this._needsSort = !1),
      (this._lastZIndex = 0),
      (this._interactionManager = new V4(i, l)),
      (this._pluginsInitialized = !1));
    const s = l.canvas.size;
    ((this.quadTree = new gr(Xg(s), Sg)),
      (this.movers = []),
      (this.updaters = []));
  }
  get count() {
    return this._array.length;
  }
  addManualParticles() {
    const i = this._container;
    i.actualOptions.manualParticles.forEach((s) =>
      this.addParticle(
        s.position ? ov(s.position, i.canvas.size) : void 0,
        s.options,
      ),
    );
  }
  addParticle(i, l, s, r) {
    const u = this._container.actualOptions.particles.number.limit.mode,
      d =
        s === void 0 ? this._limit : (this._groupLimits.get(s) ?? this._limit),
      h = this.count;
    if (d > Rg)
      switch (u) {
        case ws.delete: {
          const p = h + l3 - d;
          p > s3 && this.removeQuantity(p);
          break;
        }
        case ws.wait:
          if (h >= d) return;
          break;
      }
    return this._pushParticle(i, l, s, r);
  }
  clear() {
    ((this._array = []), (this._zArray = []), (this._pluginsInitialized = !1));
  }
  destroy() {
    ((this._array = []),
      (this._zArray = []),
      (this.movers = []),
      (this.updaters = []));
  }
  draw(i) {
    const l = this._container,
      s = l.canvas;
    (s.clear(), this.update(i));
    for (const r of l.plugins.values()) s.drawPlugin(r, i);
    for (const r of this._zArray) r.draw(i);
  }
  filter(i) {
    return this._array.filter(i);
  }
  find(i) {
    return this._array.find(i);
  }
  get(i) {
    return this._array[i];
  }
  handleClickMode(i) {
    this._interactionManager.handleClickMode(i);
  }
  async init() {
    var r, u;
    const i = this._container,
      l = i.actualOptions;
    ((this._lastZIndex = 0), (this._needsSort = !1), await this.initPlugins());
    let s = !1;
    for (const d of i.plugins.values())
      if (
        ((s =
          ((r = d.particlesInitialization) == null ? void 0 : r.call(d)) ?? s),
        s)
      )
        break;
    if ((this.addManualParticles(), !s)) {
      const d = l.particles,
        h = d.groups;
      for (const p in h) {
        const y = h[p];
        for (
          let x = this.count, b = 0;
          b < ((u = y.number) == null ? void 0 : u.value) && x < d.number.value;
          x++, b++
        )
          this.addParticle(void 0, y, p);
      }
      for (let p = this.count; p < d.number.value; p++) this.addParticle();
    }
  }
  async initPlugins() {
    if (this._pluginsInitialized) return;
    const i = this._container;
    ((this.movers = await this._engine.getMovers(i, !0)),
      (this.updaters = await this._engine.getUpdaters(i, !0)),
      await this._interactionManager.init());
    for (const l of i.pathGenerators.values()) l.init(i);
  }
  push(i, l, s, r) {
    for (let u = 0; u < i; u++)
      this.addParticle(l == null ? void 0 : l.position, s, r);
  }
  async redraw() {
    (this.clear(), await this.init(), this.draw({ value: 0, factor: 0 }));
  }
  remove(i, l, s) {
    this.removeAt(this._array.indexOf(i), void 0, l, s);
  }
  removeAt(i, l = Hx, s, r) {
    if (i < Tf || i > this.count) return;
    let u = 0;
    for (let d = i; u < l && d < this.count; d++)
      this._removeParticle(d, s, r) && (d--, u++);
  }
  removeQuantity(i, l) {
    this.removeAt(Tf, i, l);
  }
  setDensity() {
    const i = this._container.actualOptions,
      l = i.particles.groups,
      s = i.manualParticles.length;
    for (const r in l) this._applyDensity(l[r], s, r);
    this._applyDensity(i.particles, s);
  }
  setLastZIndex(i) {
    ((this._lastZIndex = i),
      (this._needsSort = this._needsSort || this._lastZIndex < i));
  }
  setResizeFactor(i) {
    this._resizeFactor = i;
  }
  update(i) {
    var u, d;
    const l = this._container,
      s = new Set();
    this.quadTree = new gr(Xg(l.canvas.size), Sg);
    for (const h of l.pathGenerators.values()) h.update();
    for (const h of l.plugins.values()) (u = h.update) == null || u.call(h, i);
    const r = this._resizeFactor;
    for (const h of this._array) {
      (r &&
        !h.ignoresResizeRatio &&
        ((h.position.x *= r.width),
        (h.position.y *= r.height),
        (h.initialPosition.x *= r.width),
        (h.initialPosition.y *= r.height)),
        (h.ignoresResizeRatio = !1),
        this._interactionManager.reset(h));
      for (const p of this._container.plugins.values()) {
        if (h.destroyed) break;
        (d = p.particleUpdate) == null || d.call(p, h, i);
      }
      for (const p of this.movers) p.isEnabled(h) && p.move(h, i);
      if (h.destroyed) {
        s.add(h);
        continue;
      }
      this.quadTree.insert(new Q4(h.getPosition(), h));
    }
    if (s.size) {
      const h = (p) => !s.has(p);
      ((this._array = this.filter(h)), (this._zArray = this._zArray.filter(h)));
      for (const p of s)
        this._engine.dispatchEvent(wt.particleRemoved, {
          container: this._container,
          data: { particle: p },
        });
      this._addToPool(...s);
    }
    this._interactionManager.externalInteract(i);
    for (const h of this._array) {
      for (const p of this.updaters) p.update(h, i);
      !h.destroyed &&
        !h.spawning &&
        this._interactionManager.particlesInteract(h, i);
    }
    if ((delete this._resizeFactor, this._needsSort)) {
      const h = this._zArray;
      (h.sort((p, y) => y.position.z - p.position.z || p.id - y.id),
        (this._lastZIndex = h[h.length - Jy].position.z),
        (this._needsSort = !1));
    }
  }
}
class Z4 {
  constructor(i) {
    ((this.container = i), (this.pixelRatio = zg), (this.reduceFactor = Cg));
  }
  init() {
    const i = this.container,
      l = i.actualOptions;
    ((this.pixelRatio = !l.detectRetina || ca() ? zg : devicePixelRatio),
      (this.reduceFactor = Cg));
    const s = this.pixelRatio,
      r = i.canvas;
    if (r.element) {
      const h = r.element;
      ((r.size.width = h.offsetWidth * s),
        (r.size.height = h.offsetHeight * s));
    }
    const u = l.particles,
      d = u.move;
    ((this.maxSpeed = W(d.gravity.maxSpeed) * s),
      (this.sizeAnimationSpeed = W(u.size.animation.speed) * s));
  }
  initParticle(i) {
    const l = i.options,
      s = this.pixelRatio,
      r = l.move,
      u = r.distance,
      d = i.retina;
    ((d.moveDrift = W(r.drift) * s),
      (d.moveSpeed = W(r.speed) * s),
      (d.sizeAnimationSpeed = W(l.size.animation.speed) * s));
    const h = d.maxDistance;
    ((h.horizontal = u.horizontal !== void 0 ? u.horizontal * s : void 0),
      (h.vertical = u.vertical !== void 0 ? u.vertical * s : void 0),
      (d.maxSpeed = W(r.gravity.maxSpeed) * s));
  }
}
function qe(a) {
  return a && !a.destroyed;
}
function P4(a, i = $u, l = !1) {
  return { value: a, factor: l ? $u / i : ($u * a) / mt };
}
function Ka(a, i, ...l) {
  const s = new q4(a, i);
  return (yv(s, ...l), s);
}
class K4 {
  constructor(i, l, s) {
    ((this._intersectionManager = (r) => {
      if (!(!qe(this) || !this.actualOptions.pauseOnOutsideViewport))
        for (const u of r)
          u.target === this.interactivity.element &&
            (u.isIntersecting ? this.play() : this.pause());
    }),
      (this._nextFrame = (r) => {
        try {
          if (
            !this._smooth &&
            this._lastFrameTime !== void 0 &&
            r < this._lastFrameTime + mt / this.fpsLimit
          ) {
            this.draw(!1);
            return;
          }
          this._lastFrameTime ?? (this._lastFrameTime = r);
          const u = P4(r - this._lastFrameTime, this.fpsLimit, this._smooth);
          if (
            (this.addLifeTime(u.value), (this._lastFrameTime = r), u.value > mt)
          ) {
            this.draw(!1);
            return;
          }
          if ((this.particles.draw(u), !this.alive())) {
            this.destroy();
            return;
          }
          this.animationStatus && this.draw(!1);
        } catch (u) {
          ra().error(`${ai} in animation loop`, u);
        }
      }),
      (this._engine = i),
      (this.id = Symbol(l)),
      (this.fpsLimit = 120),
      (this._smooth = !1),
      (this._delay = 0),
      (this._duration = 0),
      (this._lifeTime = 0),
      (this._firstStart = !0),
      (this.started = !1),
      (this.destroyed = !1),
      (this._paused = !0),
      (this._lastFrameTime = 0),
      (this.zLayers = 100),
      (this.pageHidden = !1),
      (this._clickHandlers = new Map()),
      (this._sourceOptions = s),
      (this._initialSourceOptions = s),
      (this.retina = new Z4(this)),
      (this.canvas = new J3(this, this._engine)),
      (this.particles = new F4(this._engine, this)),
      (this.pathGenerators = new Map()),
      (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
      (this.plugins = new Map()),
      (this.effectDrawers = new Map()),
      (this.shapeDrawers = new Map()),
      (this._options = Ka(this._engine, this)),
      (this.actualOptions = Ka(this._engine, this)),
      (this._eventListeners = new $3(this)),
      (this._intersectionObserver = E3((r) => this._intersectionManager(r))),
      this._engine.dispatchEvent(wt.containerBuilt, { container: this }));
  }
  get animationStatus() {
    return !this._paused && !this.pageHidden && qe(this);
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(i) {
    if (!qe(this)) return;
    const l = this.interactivity.element;
    if (!l) return;
    const s = (b, w, z) => {
        if (!qe(this)) return;
        const T = this.retina.pixelRatio,
          M = { x: w.x * T, y: w.y * T },
          E = this.particles.quadTree.queryCircle(M, z * T);
        i(b, E);
      },
      r = (b) => {
        if (!qe(this)) return;
        const w = b,
          z = { x: w.offsetX || w.clientX, y: w.offsetY || w.clientY };
        s(b, z, Zx);
      },
      u = () => {
        qe(this) && ((y = !0), (x = !1));
      },
      d = () => {
        qe(this) && (x = !0);
      },
      h = (b) => {
        if (qe(this)) {
          if (y && !x) {
            const w = b;
            let z = w.touches[w.touches.length - jg];
            if (
              !z &&
              ((z = w.changedTouches[w.changedTouches.length - jg]), !z)
            )
              return;
            const T = this.canvas.element,
              M = T ? T.getBoundingClientRect() : void 0,
              E = {
                x: z.clientX - (M ? M.left : hr),
                y: z.clientY - (M ? M.top : hr),
              };
            s(b, E, Math.max(z.radiusX, z.radiusY));
          }
          ((y = !1), (x = !1));
        }
      },
      p = () => {
        qe(this) && ((y = !1), (x = !1));
      };
    let y = !1,
      x = !1;
    (this._clickHandlers.set("click", r),
      this._clickHandlers.set("touchstart", u),
      this._clickHandlers.set("touchmove", d),
      this._clickHandlers.set("touchend", h),
      this._clickHandlers.set("touchcancel", p));
    for (const [b, w] of this._clickHandlers) l.addEventListener(b, w);
  }
  addLifeTime(i) {
    this._lifeTime += i;
  }
  addPath(i, l, s = !1) {
    return !qe(this) || (!s && this.pathGenerators.has(i))
      ? !1
      : (this.pathGenerators.set(i, l), !0);
  }
  alive() {
    return !this._duration || this._lifeTime <= this._duration;
  }
  clearClickHandlers() {
    var i;
    if (qe(this)) {
      for (const [l, s] of this._clickHandlers)
        (i = this.interactivity.element) == null || i.removeEventListener(l, s);
      this._clickHandlers.clear();
    }
  }
  destroy(i = !0) {
    var l, s;
    if (qe(this)) {
      (this.stop(),
        this.clearClickHandlers(),
        this.particles.destroy(),
        this.canvas.destroy());
      for (const r of this.effectDrawers.values())
        (l = r.destroy) == null || l.call(r, this);
      for (const r of this.shapeDrawers.values())
        (s = r.destroy) == null || s.call(r, this);
      for (const r of this.effectDrawers.keys()) this.effectDrawers.delete(r);
      for (const r of this.shapeDrawers.keys()) this.shapeDrawers.delete(r);
      if ((this._engine.clearPlugins(this), (this.destroyed = !0), i)) {
        const r = this._engine.items,
          u = r.findIndex((d) => d === this);
        u >= Px && r.splice(u, Ky);
      }
      this._engine.dispatchEvent(wt.containerDestroyed, { container: this });
    }
  }
  draw(i) {
    if (!qe(this)) return;
    let l = i;
    const s = (r) => {
      (l && ((this._lastFrameTime = void 0), (l = !1)), this._nextFrame(r));
    };
    this._drawAnimationFrame = v3((r) => s(r));
  }
  async export(i, l = {}) {
    for (const s of this.plugins.values()) {
      if (!s.export) continue;
      const r = await s.export(i, l);
      if (r.supported) return r.blob;
    }
    ra().error(`${ai} - Export plugin with type ${i} not found`);
  }
  handleClickMode(i) {
    var l;
    if (qe(this)) {
      this.particles.handleClickMode(i);
      for (const s of this.plugins.values())
        (l = s.handleClickMode) == null || l.call(s, i);
    }
  }
  async init() {
    var y, x, b, w;
    if (!qe(this)) return;
    const i = this._engine.getSupportedEffects();
    for (const z of i) {
      const T = this._engine.getEffectDrawer(z);
      T && this.effectDrawers.set(z, T);
    }
    const l = this._engine.getSupportedShapes();
    for (const z of l) {
      const T = this._engine.getShapeDrawer(z);
      T && this.shapeDrawers.set(z, T);
    }
    (await this.particles.initPlugins(),
      (this._options = Ka(
        this._engine,
        this,
        this._initialSourceOptions,
        this.sourceOptions,
      )),
      (this.actualOptions = Ka(this._engine, this, this._options)));
    const s = await this._engine.getAvailablePlugins(this);
    for (const [z, T] of s) this.plugins.set(z, T);
    (this.retina.init(),
      await this.canvas.init(),
      this.updateActualOptions(),
      this.canvas.initBackground(),
      this.canvas.resize());
    const {
      zLayers: r,
      duration: u,
      delay: d,
      fpsLimit: h,
      smooth: p,
    } = this.actualOptions;
    ((this.zLayers = r),
      (this._duration = W(u) * mt),
      (this._delay = W(d) * mt),
      (this._lifeTime = 0),
      (this.fpsLimit = h > Ix ? h : Kx),
      (this._smooth = p));
    for (const z of this.effectDrawers.values())
      await ((y = z.init) == null ? void 0 : y.call(z, this));
    for (const z of this.shapeDrawers.values())
      await ((x = z.init) == null ? void 0 : x.call(z, this));
    for (const z of this.plugins.values())
      await ((b = z.init) == null ? void 0 : b.call(z));
    (this._engine.dispatchEvent(wt.containerInit, { container: this }),
      await this.particles.init(),
      this.particles.setDensity());
    for (const z of this.plugins.values())
      (w = z.particlesSetup) == null || w.call(z);
    this._engine.dispatchEvent(wt.particlesSetup, { container: this });
  }
  async loadTheme(i) {
    qe(this) && ((this._currentTheme = i), await this.refresh());
  }
  pause() {
    var i;
    if (
      qe(this) &&
      (this._drawAnimationFrame !== void 0 &&
        (b3(this._drawAnimationFrame), delete this._drawAnimationFrame),
      !this._paused)
    ) {
      for (const l of this.plugins.values()) (i = l.pause) == null || i.call(l);
      (this.pageHidden || (this._paused = !0),
        this._engine.dispatchEvent(wt.containerPaused, { container: this }));
    }
  }
  play(i) {
    if (!qe(this)) return;
    const l = this._paused || i;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = !1;
      return;
    }
    if ((this._paused && (this._paused = !1), l))
      for (const s of this.plugins.values()) s.play && s.play();
    (this._engine.dispatchEvent(wt.containerPlay, { container: this }),
      this.draw(l ?? !1));
  }
  async refresh() {
    if (qe(this)) return (this.stop(), this.start());
  }
  async reset(i) {
    if (qe(this))
      return (
        (this._initialSourceOptions = i),
        (this._sourceOptions = i),
        (this._options = Ka(
          this._engine,
          this,
          this._initialSourceOptions,
          this.sourceOptions,
        )),
        (this.actualOptions = Ka(this._engine, this, this._options)),
        this.refresh()
      );
  }
  async start() {
    !qe(this) ||
      this.started ||
      (await this.init(),
      (this.started = !0),
      await new Promise((i) => {
        const l = async () => {
          var s;
          (this._eventListeners.addListeners(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.observe(this.interactivity.element));
          for (const r of this.plugins.values())
            await ((s = r.start) == null ? void 0 : s.call(r));
          (this._engine.dispatchEvent(wt.containerStarted, { container: this }),
            this.play(),
            i());
        };
        this._delayTimeout = setTimeout(() => void l(), this._delay);
      }));
  }
  stop() {
    var i;
    if (!(!qe(this) || !this.started)) {
      (this._delayTimeout &&
        (clearTimeout(this._delayTimeout), delete this._delayTimeout),
        (this._firstStart = !0),
        (this.started = !1),
        this._eventListeners.removeListeners(),
        this.pause(),
        this.particles.clear(),
        this.canvas.stop(),
        this.interactivity.element instanceof HTMLElement &&
          this._intersectionObserver &&
          this._intersectionObserver.unobserve(this.interactivity.element));
      for (const l of this.plugins.values()) (i = l.stop) == null || i.call(l);
      for (const l of this.plugins.keys()) this.plugins.delete(l);
      ((this._sourceOptions = this._options),
        this._engine.dispatchEvent(wt.containerStopped, { container: this }));
    }
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const i = this.actualOptions.setResponsive(
      this.canvas.size.width,
      this.retina.pixelRatio,
      this._options,
    );
    return (
      this.actualOptions.setTheme(this._currentTheme),
      this._responsiveMaxWidth === i ? !1 : ((this._responsiveMaxWidth = i), !0)
    );
  }
}
class I4 {
  constructor() {
    this._listeners = new Map();
  }
  addEventListener(i, l) {
    this.removeEventListener(i, l);
    let s = this._listeners.get(i);
    (s || ((s = []), this._listeners.set(i, s)), s.push(l));
  }
  dispatchEvent(i, l) {
    const s = this._listeners.get(i);
    s == null || s.forEach((r) => r(l));
  }
  hasEventListener(i) {
    return !!this._listeners.get(i);
  }
  removeAllEventListeners(i) {
    i ? this._listeners.delete(i) : (this._listeners = new Map());
  }
  removeEventListener(i, l) {
    const s = this._listeners.get(i);
    if (!s) return;
    const r = s.length,
      u = s.indexOf(l);
    u < Tf || (r === pr ? this._listeners.delete(i) : s.splice(u, pr));
  }
}
async function rf(a, i, l, s = !1) {
  let r = i.get(a);
  return (
    (!r || s) &&
      ((r = await Promise.all([...l.values()].map((u) => u(a)))), i.set(a, r)),
    r
  );
}
async function J4(a) {
  const i = ni(a.url, a.index);
  if (!i) return a.fallback;
  const l = await fetch(i);
  return l.ok
    ? await l.json()
    : (ra().error(`${ai} ${l.status} while retrieving config file`),
      a.fallback);
}
const $4 = (a) => {
    let i;
    if (a instanceof HTMLCanvasElement || a.tagName.toLowerCase() === Wu)
      ((i = a), i.dataset[ta] || (i.dataset[ta] = xg));
    else {
      const s = a.getElementsByTagName(Wu);
      s.length
        ? ((i = s[Jx]), (i.dataset[ta] = xg))
        : ((i = document.createElement(Wu)),
          (i.dataset[ta] = Zy),
          a.appendChild(i));
    }
    const l = "100%";
    return (
      i.style.width || (i.style.width = l),
      i.style.height || (i.style.height = l),
      i
    );
  },
  W4 = (a, i) => {
    let l = i ?? document.getElementById(a);
    return (
      l ||
      ((l = document.createElement("div")),
      (l.id = a),
      (l.dataset[ta] = Zy),
      document.body.append(l),
      l)
    );
  };
class e6 {
  constructor() {
    ((this._configs = new Map()),
      (this._domArray = []),
      (this._eventDispatcher = new I4()),
      (this._initialized = !1),
      (this.plugins = []),
      (this.colorManagers = new Map()),
      (this.easingFunctions = new Map()),
      (this._initializers = {
        interactors: new Map(),
        movers: new Map(),
        updaters: new Map(),
      }),
      (this.interactors = new Map()),
      (this.movers = new Map()),
      (this.updaters = new Map()),
      (this.presets = new Map()),
      (this.effectDrawers = new Map()),
      (this.shapeDrawers = new Map()),
      (this.pathGenerators = new Map()));
  }
  get configs() {
    const i = {};
    for (const [l, s] of this._configs) i[l] = s;
    return i;
  }
  get items() {
    return this._domArray;
  }
  get version() {
    return "3.9.1";
  }
  async addColorManager(i, l = !0) {
    (this.colorManagers.set(i.key, i), await this.refresh(l));
  }
  addConfig(i) {
    const l = i.key ?? i.name ?? "default";
    (this._configs.set(l, i),
      this._eventDispatcher.dispatchEvent(wt.configAdded, {
        data: { name: l, config: i },
      }));
  }
  async addEasing(i, l, s = !0) {
    this.getEasing(i) ||
      (this.easingFunctions.set(i, l), await this.refresh(s));
  }
  async addEffect(i, l, s = !0) {
    (Qt(i, (r) => {
      this.getEffectDrawer(r) || this.effectDrawers.set(r, l);
    }),
      await this.refresh(s));
  }
  addEventListener(i, l) {
    this._eventDispatcher.addEventListener(i, l);
  }
  async addInteractor(i, l, s = !0) {
    (this._initializers.interactors.set(i, l), await this.refresh(s));
  }
  async addMover(i, l, s = !0) {
    (this._initializers.movers.set(i, l), await this.refresh(s));
  }
  async addParticleUpdater(i, l, s = !0) {
    (this._initializers.updaters.set(i, l), await this.refresh(s));
  }
  async addPathGenerator(i, l, s = !0) {
    (this.getPathGenerator(i) || this.pathGenerators.set(i, l),
      await this.refresh(s));
  }
  async addPlugin(i, l = !0) {
    (this.getPlugin(i.id) || this.plugins.push(i), await this.refresh(l));
  }
  async addPreset(i, l, s = !1, r = !0) {
    ((s || !this.getPreset(i)) && this.presets.set(i, l),
      await this.refresh(r));
  }
  async addShape(i, l = !0) {
    for (const s of i.validTypes)
      this.getShapeDrawer(s) || this.shapeDrawers.set(s, i);
    await this.refresh(l);
  }
  checkVersion(i) {
    if (this.version !== i)
      throw new Error(
        `The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${i}`,
      );
  }
  clearPlugins(i) {
    (this.updaters.delete(i),
      this.movers.delete(i),
      this.interactors.delete(i));
  }
  dispatchEvent(i, l) {
    this._eventDispatcher.dispatchEvent(i, l);
  }
  dom() {
    return this.items;
  }
  domItem(i) {
    return this.item(i);
  }
  async getAvailablePlugins(i) {
    const l = new Map();
    for (const s of this.plugins)
      s.needsPlugin(i.actualOptions) && l.set(s.id, await s.getPlugin(i));
    return l;
  }
  getEasing(i) {
    return this.easingFunctions.get(i) ?? ((l) => l);
  }
  getEffectDrawer(i) {
    return this.effectDrawers.get(i);
  }
  async getInteractors(i, l = !1) {
    return rf(i, this.interactors, this._initializers.interactors, l);
  }
  async getMovers(i, l = !1) {
    return rf(i, this.movers, this._initializers.movers, l);
  }
  getPathGenerator(i) {
    return this.pathGenerators.get(i);
  }
  getPlugin(i) {
    return this.plugins.find((l) => l.id === i);
  }
  getPreset(i) {
    return this.presets.get(i);
  }
  getShapeDrawer(i) {
    return this.shapeDrawers.get(i);
  }
  getSupportedEffects() {
    return this.effectDrawers.keys();
  }
  getSupportedShapes() {
    return this.shapeDrawers.keys();
  }
  async getUpdaters(i, l = !1) {
    return rf(i, this.updaters, this._initializers.updaters, l);
  }
  init() {
    this._initialized || (this._initialized = !0);
  }
  item(i) {
    const { items: l } = this,
      s = l[i];
    if (!s || s.destroyed) {
      l.splice(i, Ky);
      return;
    }
    return s;
  }
  async load(i) {
    var w;
    const l =
        i.id ??
        ((w = i.element) == null ? void 0 : w.id) ??
        `tsparticles${Math.floor(je() * $x)}`,
      { index: s, url: r } = i,
      u = r ? await J4({ fallback: i.options, url: r, index: s }) : i.options,
      d = ni(u, s),
      { items: h } = this,
      p = h.findIndex((z) => z.id.description === l),
      y = new K4(this, l, d);
    if (p >= Wx) {
      const z = this.item(p),
        T = z ? e3 : mr;
      (z && !z.destroyed && z.destroy(!1), h.splice(p, T, y));
    } else h.push(y);
    const x = W4(l, i.element),
      b = $4(x);
    return (y.canvas.loadCanvas(b), await y.start(), y);
  }
  loadOptions(i, l) {
    this.plugins.forEach((s) => {
      var r;
      return (r = s.loadOptions) == null ? void 0 : r.call(s, i, l);
    });
  }
  loadParticlesOptions(i, l, ...s) {
    const r = this.updaters.get(i);
    r &&
      r.forEach((u) => {
        var d;
        return (d = u.loadOptions) == null ? void 0 : d.call(u, l, ...s);
      });
  }
  async refresh(i = !0) {
    i && (await Promise.all(this.items.map((l) => l.refresh())));
  }
  removeEventListener(i, l) {
    this._eventDispatcher.removeEventListener(i, l);
  }
  setOnClickHandler(i) {
    const { items: l } = this;
    if (!l.length)
      throw new Error(
        `${ai} can only set click handlers after calling tsParticles.load()`,
      );
    l.forEach((s) => s.addClickHandler(i));
  }
}
function t6() {
  const a = new e6();
  return (a.init(), a);
}
class Ti {
  constructor(i) {
    ((this.type = gl.external), (this.container = i));
  }
}
class Kf {
  constructor(i) {
    ((this.type = gl.particles), (this.container = i));
  }
}
var fi;
(function (a) {
  ((a.clockwise = "clockwise"),
    (a.counterClockwise = "counter-clockwise"),
    (a.random = "random"));
})(fi || (fi = {}));
var Qg;
(function (a) {
  ((a.linear = "linear"), (a.radial = "radial"), (a.random = "random"));
})(Qg || (Qg = {}));
var la;
(function (a) {
  ((a.easeInBack = "ease-in-back"),
    (a.easeInCirc = "ease-in-circ"),
    (a.easeInCubic = "ease-in-cubic"),
    (a.easeInLinear = "ease-in-linear"),
    (a.easeInQuad = "ease-in-quad"),
    (a.easeInQuart = "ease-in-quart"),
    (a.easeInQuint = "ease-in-quint"),
    (a.easeInExpo = "ease-in-expo"),
    (a.easeInSine = "ease-in-sine"),
    (a.easeOutBack = "ease-out-back"),
    (a.easeOutCirc = "ease-out-circ"),
    (a.easeOutCubic = "ease-out-cubic"),
    (a.easeOutLinear = "ease-out-linear"),
    (a.easeOutQuad = "ease-out-quad"),
    (a.easeOutQuart = "ease-out-quart"),
    (a.easeOutQuint = "ease-out-quint"),
    (a.easeOutExpo = "ease-out-expo"),
    (a.easeOutSine = "ease-out-sine"),
    (a.easeInOutBack = "ease-in-out-back"),
    (a.easeInOutCirc = "ease-in-out-circ"),
    (a.easeInOutCubic = "ease-in-out-cubic"),
    (a.easeInOutLinear = "ease-in-out-linear"),
    (a.easeInOutQuad = "ease-in-out-quad"),
    (a.easeInOutQuart = "ease-in-out-quart"),
    (a.easeInOutQuint = "ease-in-out-quint"),
    (a.easeInOutExpo = "ease-in-out-expo"),
    (a.easeInOutSine = "ease-in-out-sine"));
})(la || (la = {}));
const If = t6();
ca() || (window.tsParticles = If);
const i6 = (a) => {
  const i = a.id ?? "tsparticles";
  return (
    D.useEffect(() => {
      let l;
      return (
        If.load({ id: i, url: a.url, options: a.options }).then((s) => {
          var r;
          ((l = s), (r = a.particlesLoaded) == null || r.call(a, s));
        }),
        () => {
          l == null || l.destroy();
        }
      );
    }, [i, a, a.url, a.options]),
    m.jsx("div", { id: i, className: a.className })
  );
};
async function n6(a) {
  await a(If);
}
const Of = 0.5,
  a6 = 2,
  _n = 0,
  di = 1,
  Fg = 60,
  Zg = 0,
  l6 = 0.01,
  s6 = Math.PI * a6;
function o6(a) {
  const i = a.initialPosition,
    { dx: l, dy: s } = St(i, a.position),
    r = Math.abs(l),
    u = Math.abs(s),
    { maxDistance: d } = a.retina,
    h = d.horizontal,
    p = d.vertical;
  if (!h && !p) return;
  const y = (h && r >= h) ?? !1,
    x = (p && u >= p) ?? !1;
  if ((y || x) && !a.misplaced)
    ((a.misplaced = (!!h && r > h) || (!!p && u > p)),
      h && (a.velocity.x = a.velocity.y * Of - a.velocity.x),
      p && (a.velocity.y = a.velocity.x * Of - a.velocity.y));
  else if ((!h || r < h) && (!p || u < p) && a.misplaced) a.misplaced = !1;
  else if (a.misplaced) {
    const b = a.position,
      w = a.velocity;
    (h &&
      ((b.x < i.x && w.x < _n) || (b.x > i.x && w.x > _n)) &&
      (w.x *= -je()),
      p &&
        ((b.y < i.y && w.y < _n) || (b.y > i.y && w.y > _n)) &&
        (w.y *= -je()));
  }
}
function r6(a, i, l, s, r, u, d) {
  u6(a, d);
  const h = a.gravity,
    p = h != null && h.enable && h.inverse ? -di : di;
  (r && l && (a.velocity.x += (r * d.factor) / (Fg * l)),
    h != null &&
      h.enable &&
      l &&
      (a.velocity.y += (p * (h.acceleration * d.factor)) / (Fg * l)));
  const y = a.moveDecay;
  a.velocity.multTo(y);
  const x = a.velocity.mult(l);
  h != null &&
    h.enable &&
    s > _n &&
    ((!h.inverse && x.y >= _n && x.y >= s) ||
      (h.inverse && x.y <= _n && x.y <= -s)) &&
    ((x.y = p * s), l && (a.velocity.y = x.y / l));
  const b = a.options.zIndex,
    w = (di - a.zIndexFactor) ** b.velocityRate;
  (x.multTo(w), x.multTo(u));
  const { position: z } = a;
  (z.addTo(x),
    i.vibrate &&
      ((z.x += Math.sin(z.x * Math.cos(z.y)) * u),
      (z.y += Math.cos(z.y * Math.sin(z.x)) * u)));
}
function c6(a, i, l) {
  const s = a.container;
  if (!a.spin) return;
  const r = a.spin.direction === fi.clockwise,
    u = { x: r ? Math.cos : Math.sin, y: r ? Math.sin : Math.cos };
  ((a.position.x = a.spin.center.x + a.spin.radius * u.x(a.spin.angle) * l),
    (a.position.y = a.spin.center.y + a.spin.radius * u.y(a.spin.angle) * l),
    (a.spin.radius += a.spin.acceleration * l));
  const d = Math.max(s.canvas.size.width, s.canvas.size.height),
    h = d * Of;
  (a.spin.radius > h
    ? ((a.spin.radius = h), (a.spin.acceleration *= -di))
    : a.spin.radius < Zg &&
      ((a.spin.radius = Zg), (a.spin.acceleration *= -di)),
    (a.spin.angle += i * l6 * (di - a.spin.radius / d)));
}
function u6(a, i) {
  var d;
  const l = a.options,
    s = l.move.path;
  if (!s.enable) return;
  if (a.lastPathTime <= a.pathDelay) {
    a.lastPathTime += i.value;
    return;
  }
  const u = (d = a.pathGenerator) == null ? void 0 : d.generate(a, i);
  (u && a.velocity.addTo(u),
    s.clamp &&
      ((a.velocity.x = li(a.velocity.x, -di, di)),
      (a.velocity.y = li(a.velocity.y, -di, di))),
    (a.lastPathTime -= a.pathDelay));
}
function f6(a) {
  return a.slow.inRange ? a.slow.factor : di;
}
function d6(a) {
  const i = a.container,
    l = a.options,
    s = l.move.spin;
  if (!s.enable) return;
  const r = s.position ?? { x: 50, y: 50 },
    u = 0.01,
    d = { x: r.x * u * i.canvas.size.width, y: r.y * u * i.canvas.size.height },
    h = a.getPosition(),
    p = Xt(h, d),
    y = W(s.acceleration);
  ((a.retina.spinAcceleration = y * i.retina.pixelRatio),
    (a.spin = {
      center: d,
      direction: a.velocity.x >= _n ? fi.clockwise : fi.counterClockwise,
      angle: je() * s6,
      radius: p,
      acceleration: a.retina.spinAcceleration,
    }));
}
const h6 = 2,
  m6 = 1,
  p6 = 1;
class g6 {
  init(i) {
    const l = i.options,
      s = l.move.gravity;
    ((i.gravity = {
      enable: s.enable,
      acceleration: W(s.acceleration),
      inverse: s.inverse,
    }),
      d6(i));
  }
  isEnabled(i) {
    return !i.destroyed && i.options.move.enable;
  }
  move(i, l) {
    var E, A;
    const s = i.options,
      r = s.move;
    if (!r.enable) return;
    const u = i.container,
      d = u.retina.pixelRatio;
    ((E = i.retina).moveSpeed ?? (E.moveSpeed = W(r.speed) * d),
      (A = i.retina).moveDrift ?? (A.moveDrift = W(i.options.move.drift) * d));
    const h = f6(i),
      p = u.retina.reduceFactor,
      y = i.retina.moveSpeed,
      x = i.retina.moveDrift,
      b = wi(s.size.value) * d,
      w = r.size ? i.getRadius() / b : m6,
      z = l.factor || p6,
      T = (y * w * h * z) / h6,
      M = i.retina.maxSpeed ?? u.retina.maxSpeed;
    (r.spin.enable ? c6(i, T, p) : r6(i, r, T, M, x, p, l), o6(i));
  }
}
async function y6(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addMover("base", () => Promise.resolve(new g6()), i));
}
const v6 = 2,
  b6 = Math.PI * v6,
  x6 = 0,
  Pg = { x: 0, y: 0 };
function w6(a) {
  const { context: i, particle: l, radius: s } = a;
  l.circleRange || (l.circleRange = { min: x6, max: b6 });
  const r = l.circleRange;
  i.arc(Pg.x, Pg.y, s, r.min, r.max, !1);
}
const S6 = 12,
  z6 = 360,
  Kg = 0;
class C6 {
  constructor() {
    this.validTypes = ["circle"];
  }
  draw(i) {
    w6(i);
  }
  getSidesCount() {
    return S6;
  }
  particleInit(i, l) {
    const s = l.shapeData,
      r = (s == null ? void 0 : s.angle) ?? { max: z6, min: Kg };
    l.circleRange = nl(r)
      ? { min: En(r.min), max: En(r.max) }
      : { min: Kg, max: En(r) };
  }
}
async function _6(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addShape(new C6(), i));
}
class T6 {
  constructor(i, l) {
    ((this._container = i), (this._engine = l));
  }
  init(i) {
    const l = vs(
      this._engine,
      i.options.color,
      i.id,
      i.options.reduceDuplicates,
    );
    l &&
      (i.color = dv(
        l,
        i.options.color.animation,
        this._container.retina.reduceFactor,
      ));
  }
  isEnabled(i) {
    const { h: l, s, l: r } = i.options.color.animation,
      { color: u } = i;
    return (
      !i.destroyed &&
      !i.spawning &&
      (((u == null ? void 0 : u.h.value) !== void 0 && l.enable) ||
        ((u == null ? void 0 : u.s.value) !== void 0 && s.enable) ||
        ((u == null ? void 0 : u.l.value) !== void 0 && r.enable))
    );
  }
  update(i, l) {
    hv(i.color, l);
  }
}
async function E6(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addParticleUpdater(
      "color",
      (l) => Promise.resolve(new T6(l, a)),
      i,
    ));
}
var ea;
(function (a) {
  ((a[(a.r = 1)] = "r"),
    (a[(a.g = 2)] = "g"),
    (a[(a.b = 3)] = "b"),
    (a[(a.a = 4)] = "a"));
})(ea || (ea = {}));
const j6 = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
  M6 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
  Ko = 16,
  D6 = 1,
  O6 = 255;
class R6 {
  constructor() {
    ((this.key = "hex"), (this.stringPrefix = "#"));
  }
  handleColor(i) {
    return this._parseString(i.value);
  }
  handleRangeColor(i) {
    return this._parseString(i.value);
  }
  parseString(i) {
    return this._parseString(i);
  }
  _parseString(i) {
    if (typeof i != "string" || !(i != null && i.startsWith(this.stringPrefix)))
      return;
    const l = i.replace(
        j6,
        (r, u, d, h, p) => u + u + d + d + h + h + (p !== void 0 ? p + p : ""),
      ),
      s = M6.exec(l);
    return s
      ? {
          a: s[ea.a] !== void 0 ? parseInt(s[ea.a], Ko) / O6 : D6,
          b: parseInt(s[ea.b], Ko),
          g: parseInt(s[ea.g], Ko),
          r: parseInt(s[ea.r], Ko),
        }
      : void 0;
  }
}
async function N6(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addColorManager(new R6(), i));
}
var al;
(function (a) {
  ((a[(a.h = 1)] = "h"),
    (a[(a.s = 2)] = "s"),
    (a[(a.l = 3)] = "l"),
    (a[(a.a = 5)] = "a"));
})(al || (al = {}));
class A6 {
  constructor() {
    ((this.key = "hsl"), (this.stringPrefix = "hsl"));
  }
  handleColor(i) {
    const l = i.value,
      s = l.hsl ?? i.value;
    if (s.h !== void 0 && s.s !== void 0 && s.l !== void 0) return ml(s);
  }
  handleRangeColor(i) {
    const l = i.value,
      s = l.hsl ?? i.value;
    if (s.h !== void 0 && s.l !== void 0)
      return ml({ h: W(s.h), l: W(s.l), s: W(s.s) });
  }
  parseString(i) {
    if (!i.startsWith("hsl")) return;
    const l =
        /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,
      s = l.exec(i),
      r = 4,
      u = 1,
      d = 10;
    return s
      ? q3({
          a: s.length > r ? tv(s[al.a]) : u,
          h: parseInt(s[al.h], d),
          l: parseInt(s[al.l], d),
          s: parseInt(s[al.s], d),
        })
      : void 0;
  }
}
async function k6(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addColorManager(new A6(), i));
}
class L6 {
  constructor(i) {
    this.container = i;
  }
  init(i) {
    const l = i.options.opacity,
      s = 1;
    i.opacity = sv(l, s);
    const r = l.animation;
    r.enable &&
      ((i.opacity.velocity =
        (W(r.speed) / Cn) * this.container.retina.reduceFactor),
      r.sync || (i.opacity.velocity *= je()));
  }
  isEnabled(i) {
    return (
      !i.destroyed &&
      !i.spawning &&
      !!i.opacity &&
      i.opacity.enable &&
      ((i.opacity.maxLoops ?? 0) <= 0 ||
        ((i.opacity.maxLoops ?? 0) > 0 &&
          (i.opacity.loops ?? 0) < (i.opacity.maxLoops ?? 0)))
    );
  }
  reset(i) {
    i.opacity && ((i.opacity.time = 0), (i.opacity.loops = 0));
  }
  update(i, l) {
    !this.isEnabled(i) ||
      !i.opacity ||
      Qf(i, i.opacity, !0, i.options.opacity.animation.destroy, l);
  }
}
async function U6(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addParticleUpdater(
      "opacity",
      (l) => Promise.resolve(new L6(l)),
      i,
    ));
}
const yr = 0,
  ul = 0;
function B6(a) {
  if (
    (a.outMode !== $e.bounce && a.outMode !== $e.split) ||
    (a.direction !== de.left && a.direction !== de.right)
  )
    return;
  a.bounds.right < ul && a.direction === de.left
    ? (a.particle.position.x = a.size + a.offset.x)
    : a.bounds.left > a.canvasSize.width &&
      a.direction === de.right &&
      (a.particle.position.x = a.canvasSize.width - a.size - a.offset.x);
  const i = a.particle.velocity.x;
  let l = !1;
  if (
    (a.direction === de.right &&
      a.bounds.right >= a.canvasSize.width &&
      i > yr) ||
    (a.direction === de.left && a.bounds.left <= ul && i < yr)
  ) {
    const r = W(a.particle.options.bounce.horizontal.value);
    ((a.particle.velocity.x *= -r), (l = !0));
  }
  if (!l) return;
  const s = a.offset.x + a.size;
  (a.bounds.right >= a.canvasSize.width && a.direction === de.right
    ? (a.particle.position.x = a.canvasSize.width - s)
    : a.bounds.left <= ul &&
      a.direction === de.left &&
      (a.particle.position.x = s),
    a.outMode === $e.split && a.particle.destroy());
}
function H6(a) {
  if (
    (a.outMode !== $e.bounce && a.outMode !== $e.split) ||
    (a.direction !== de.bottom && a.direction !== de.top)
  )
    return;
  a.bounds.bottom < ul && a.direction === de.top
    ? (a.particle.position.y = a.size + a.offset.y)
    : a.bounds.top > a.canvasSize.height &&
      a.direction === de.bottom &&
      (a.particle.position.y = a.canvasSize.height - a.size - a.offset.y);
  const i = a.particle.velocity.y;
  let l = !1;
  if (
    (a.direction === de.bottom &&
      a.bounds.bottom >= a.canvasSize.height &&
      i > yr) ||
    (a.direction === de.top && a.bounds.top <= ul && i < yr)
  ) {
    const r = W(a.particle.options.bounce.vertical.value);
    ((a.particle.velocity.y *= -r), (l = !0));
  }
  if (!l) return;
  const s = a.offset.y + a.size;
  (a.bounds.bottom >= a.canvasSize.height && a.direction === de.bottom
    ? (a.particle.position.y = a.canvasSize.height - s)
    : a.bounds.top <= ul &&
      a.direction === de.top &&
      (a.particle.position.y = s),
    a.outMode === $e.split && a.particle.destroy());
}
class q6 {
  constructor(i) {
    ((this.container = i), (this.modes = [$e.bounce, $e.split]));
  }
  update(i, l, s, r) {
    if (!this.modes.includes(r)) return;
    const u = this.container;
    let d = !1;
    for (const w of u.plugins.values())
      if ((w.particleBounce !== void 0 && (d = w.particleBounce(i, s, l)), d))
        break;
    if (d) return;
    const h = i.getPosition(),
      p = i.offset,
      y = i.getRadius(),
      x = Es(h, y),
      b = u.canvas.size;
    (B6({
      particle: i,
      outMode: r,
      direction: l,
      bounds: x,
      canvasSize: b,
      offset: p,
      size: y,
    }),
      H6({
        particle: i,
        outMode: r,
        direction: l,
        bounds: x,
        canvasSize: b,
        offset: p,
        size: y,
      }));
  }
}
const Io = 0;
class V6 {
  constructor(i) {
    ((this.container = i), (this.modes = [$e.destroy]));
  }
  update(i, l, s, r) {
    if (!this.modes.includes(r)) return;
    const u = this.container;
    switch (i.outType) {
      case mi.normal:
      case mi.outside:
        if (Yf(i.position, u.canvas.size, at.origin, i.getRadius(), l)) return;
        break;
      case mi.inside: {
        const { dx: d, dy: h } = St(i.position, i.moveCenter),
          { x: p, y } = i.velocity;
        if (
          (p < Io && d > i.moveCenter.radius) ||
          (y < Io && h > i.moveCenter.radius) ||
          (p >= Io && d < -i.moveCenter.radius) ||
          (y >= Io && h < -i.moveCenter.radius)
        )
          return;
        break;
      }
    }
    u.particles.remove(i, i.group, !0);
  }
}
const Jo = 0;
class Y6 {
  constructor(i) {
    ((this.container = i), (this.modes = [$e.none]));
  }
  update(i, l, s, r) {
    if (
      !this.modes.includes(r) ||
      ((i.options.move.distance.horizontal &&
        (l === de.left || l === de.right)) ??
        (i.options.move.distance.vertical && (l === de.top || l === de.bottom)))
    )
      return;
    const u = i.options.move.gravity,
      d = this.container,
      h = d.canvas.size,
      p = i.getRadius();
    if (u.enable) {
      const y = i.position;
      ((!u.inverse && y.y > h.height + p && l === de.bottom) ||
        (u.inverse && y.y < -p && l === de.top)) &&
        d.particles.remove(i);
    } else {
      if (
        (i.velocity.y > Jo && i.position.y <= h.height + p) ||
        (i.velocity.y < Jo && i.position.y >= -p) ||
        (i.velocity.x > Jo && i.position.x <= h.width + p) ||
        (i.velocity.x < Jo && i.position.x >= -p)
      )
        return;
      Yf(i.position, d.canvas.size, at.origin, p, l) || d.particles.remove(i);
    }
  }
}
const $o = 0,
  Wo = 0;
class G6 {
  constructor(i) {
    ((this.container = i), (this.modes = [$e.out]));
  }
  update(i, l, s, r) {
    if (!this.modes.includes(r)) return;
    const u = this.container;
    switch (i.outType) {
      case mi.inside: {
        const { x: d, y: h } = i.velocity,
          p = at.origin;
        ((p.length = i.moveCenter.radius),
          (p.angle = i.velocity.angle + Math.PI),
          p.addTo(at.create(i.moveCenter)));
        const { dx: y, dy: x } = St(i.position, p);
        if (
          (d <= $o && y >= Wo) ||
          (h <= $o && x >= Wo) ||
          (d >= $o && y <= Wo) ||
          (h >= $o && x <= Wo)
        )
          return;
        ((i.position.x = Math.floor(Gt({ min: 0, max: u.canvas.size.width }))),
          (i.position.y = Math.floor(
            Gt({ min: 0, max: u.canvas.size.height }),
          )));
        const { dx: b, dy: w } = St(i.position, i.moveCenter);
        ((i.direction = Math.atan2(-w, -b)), (i.velocity.angle = i.direction));
        break;
      }
      default: {
        if (Yf(i.position, u.canvas.size, at.origin, i.getRadius(), l)) return;
        switch (i.outType) {
          case mi.outside: {
            ((i.position.x =
              Math.floor(
                Gt({ min: -i.moveCenter.radius, max: i.moveCenter.radius }),
              ) + i.moveCenter.x),
              (i.position.y =
                Math.floor(
                  Gt({ min: -i.moveCenter.radius, max: i.moveCenter.radius }),
                ) + i.moveCenter.y));
            const { dx: d, dy: h } = St(i.position, i.moveCenter);
            i.moveCenter.radius &&
              ((i.direction = Math.atan2(h, d)),
              (i.velocity.angle = i.direction));
            break;
          }
          case mi.normal: {
            const d = i.options.move.warp,
              h = u.canvas.size,
              p = {
                bottom: h.height + i.getRadius() + i.offset.y,
                left: -i.getRadius() - i.offset.x,
                right: h.width + i.getRadius() + i.offset.x,
                top: -i.getRadius() - i.offset.y,
              },
              y = i.getRadius(),
              x = Es(i.position, y);
            (l === de.right && x.left > h.width + i.offset.x
              ? ((i.position.x = p.left),
                (i.initialPosition.x = i.position.x),
                d ||
                  ((i.position.y = je() * h.height),
                  (i.initialPosition.y = i.position.y)))
              : l === de.left &&
                x.right < -i.offset.x &&
                ((i.position.x = p.right),
                (i.initialPosition.x = i.position.x),
                d ||
                  ((i.position.y = je() * h.height),
                  (i.initialPosition.y = i.position.y))),
              l === de.bottom && x.top > h.height + i.offset.y
                ? (d ||
                    ((i.position.x = je() * h.width),
                    (i.initialPosition.x = i.position.x)),
                  (i.position.y = p.top),
                  (i.initialPosition.y = i.position.y))
                : l === de.top &&
                  x.bottom < -i.offset.y &&
                  (d ||
                    ((i.position.x = je() * h.width),
                    (i.initialPosition.x = i.position.x)),
                  (i.position.y = p.bottom),
                  (i.initialPosition.y = i.position.y)));
            break;
          }
        }
        break;
      }
    }
  }
}
const X6 = (a, i) =>
  a.default === i ||
  a.bottom === i ||
  a.left === i ||
  a.right === i ||
  a.top === i;
class Q6 {
  constructor(i) {
    ((this._addUpdaterIfMissing = (l, s, r) => {
      const u = l.options.move.outModes;
      !this.updaters.has(s) &&
        X6(u, s) &&
        this.updaters.set(s, r(this.container));
    }),
      (this._updateOutMode = (l, s, r, u) => {
        for (const d of this.updaters.values()) d.update(l, u, s, r);
      }),
      (this.container = i),
      (this.updaters = new Map()));
  }
  init(i) {
    (this._addUpdaterIfMissing(i, $e.bounce, (l) => new q6(l)),
      this._addUpdaterIfMissing(i, $e.out, (l) => new G6(l)),
      this._addUpdaterIfMissing(i, $e.destroy, (l) => new V6(l)),
      this._addUpdaterIfMissing(i, $e.none, (l) => new Y6(l)));
  }
  isEnabled(i) {
    return !i.destroyed && !i.spawning;
  }
  update(i, l) {
    const s = i.options.move.outModes;
    (this._updateOutMode(i, l, s.bottom ?? s.default, de.bottom),
      this._updateOutMode(i, l, s.left ?? s.default, de.left),
      this._updateOutMode(i, l, s.right ?? s.default, de.right),
      this._updateOutMode(i, l, s.top ?? s.default, de.top));
  }
}
async function F6(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addParticleUpdater(
      "outModes",
      (l) => Promise.resolve(new Q6(l)),
      i,
    ));
}
var ll;
(function (a) {
  ((a[(a.r = 1)] = "r"),
    (a[(a.g = 2)] = "g"),
    (a[(a.b = 3)] = "b"),
    (a[(a.a = 5)] = "a"));
})(ll || (ll = {}));
class Z6 {
  constructor() {
    ((this.key = "rgb"), (this.stringPrefix = "rgb"));
  }
  handleColor(i) {
    const l = i.value,
      s = l.rgb ?? i.value;
    if (s.r !== void 0) return s;
  }
  handleRangeColor(i) {
    const l = i.value,
      s = l.rgb ?? i.value;
    if (s.r !== void 0) return { r: W(s.r), g: W(s.g), b: W(s.b) };
  }
  parseString(i) {
    if (!i.startsWith(this.stringPrefix)) return;
    const l =
        /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,
      s = l.exec(i),
      r = 10;
    return s
      ? {
          a: s.length > 4 ? tv(s[ll.a]) : 1,
          b: parseInt(s[ll.b], r),
          g: parseInt(s[ll.g], r),
          r: parseInt(s[ll.r], r),
        }
      : void 0;
  }
}
async function P6(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addColorManager(new Z6(), i));
}
const In = 0;
class K6 {
  init(i) {
    const l = i.container,
      s = i.options.size,
      r = s.animation;
    r.enable &&
      ((i.size.velocity =
        ((i.retina.sizeAnimationSpeed ?? l.retina.sizeAnimationSpeed) / Cn) *
        l.retina.reduceFactor),
      r.sync || (i.size.velocity *= je()));
  }
  isEnabled(i) {
    return (
      !i.destroyed &&
      !i.spawning &&
      i.size.enable &&
      ((i.size.maxLoops ?? In) <= In ||
        ((i.size.maxLoops ?? In) > In &&
          (i.size.loops ?? In) < (i.size.maxLoops ?? In)))
    );
  }
  reset(i) {
    i.size.loops = In;
  }
  update(i, l) {
    this.isEnabled(i) && Qf(i, i.size, !0, i.options.size.animation.destroy, l);
  }
}
async function I6(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addParticleUpdater("size", () => Promise.resolve(new K6()), i));
}
async function J6(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await N6(a, !1),
    await k6(a, !1),
    await P6(a, !1),
    await y6(a, !1),
    await _6(a, !1),
    await E6(a, !1),
    await U6(a, !1),
    await F6(a, !1),
    await I6(a, !1),
    await a.refresh(i));
}
async function $6(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addEasing(la.easeInQuad, (l) => l ** 2, !1),
    await a.addEasing(la.easeOutQuad, (l) => 1 - (1 - l) ** 2, !1),
    await a.addEasing(
      la.easeInOutQuad,
      (l) => (l < 0.5 ? 2 * l ** 2 : 1 - (-2 * l + 2) ** 2 / 2),
      !1,
    ),
    await a.refresh(i));
}
function W6(a, i) {
  const { context: l, opacity: s } = a,
    r = 0.5,
    u = l.globalAlpha;
  if (!i) return;
  const d = i.width,
    h = d * r;
  ((l.globalAlpha = s), l.drawImage(i, -h, -h, d, d), (l.globalAlpha = u));
}
const cf =
    '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"',
  Ig = 0;
class e5 {
  constructor() {
    ((this.validTypes = ["emoji"]), (this._emojiShapeDict = new Map()));
  }
  destroy() {
    for (const [i, l] of this._emojiShapeDict)
      (l instanceof ImageBitmap && (l == null || l.close()),
        this._emojiShapeDict.delete(i));
  }
  draw(i) {
    const l = i.particle.emojiDataKey;
    if (!l) return;
    const s = this._emojiShapeDict.get(l);
    s && W6(i, s);
  }
  async init(i) {
    const l = i.actualOptions,
      { validTypes: s } = this;
    if (!s.find((d) => Xe(d, l.particles.shape.type))) return;
    const r = [Ug(cf)],
      u = s.map((d) => l.particles.shape.options[d]).find((d) => !!d);
    (u &&
      Qt(u, (d) => {
        d.font && r.push(Ug(d.font));
      }),
      await Promise.all(r));
  }
  particleDestroy(i) {
    i.emojiDataKey = void 0;
  }
  particleInit(i, l) {
    const r = l.shapeData;
    if (!(r != null && r.value)) return;
    const u = ni(r.value, l.randomIndexData);
    if (!u) return;
    const d =
        typeof u == "string"
          ? { font: r.font ?? cf, padding: r.padding ?? Ig, value: u }
          : { font: cf, padding: Ig, ...r, ...u },
      h = d.font,
      p = d.value,
      y = `${p}_${h}`;
    if (this._emojiShapeDict.has(y)) {
      l.emojiDataKey = y;
      return;
    }
    const x = d.padding * 2,
      b = wi(l.size.value),
      w = b + x,
      z = w * 2;
    let T;
    if (typeof OffscreenCanvas < "u") {
      const M = new OffscreenCanvas(z, z),
        E = M.getContext("2d");
      if (!E) return;
      ((E.font = `400 ${b * 2}px ${h}`),
        (E.textBaseline = "middle"),
        (E.textAlign = "center"),
        E.fillText(p, w, w),
        (T = M.transferToImageBitmap()));
    } else {
      const M = document.createElement("canvas");
      ((M.width = z), (M.height = z));
      const E = M.getContext("2d");
      if (!E) return;
      ((E.font = `400 ${b * 2}px ${h}`),
        (E.textBaseline = "middle"),
        (E.textAlign = "center"),
        E.fillText(p, w, w),
        (T = M));
    }
    (this._emojiShapeDict.set(y, T), (l.emojiDataKey = y));
  }
}
async function t5(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addShape(new e5(), i));
}
const i5 = 1,
  n5 = 1,
  xv = 0;
function wv(a, i, l, s, r, u) {
  const d = i.actualOptions.interactivity.modes.attract;
  if (!d) return;
  const h = i.particles.quadTree.query(r, u);
  for (const p of h) {
    const { dx: y, dy: x, distance: b } = St(p.position, l),
      w = d.speed * d.factor,
      z = li(a.getEasing(d.easing)(n5 - b / s) * w, i5, d.maxSpeed),
      T = at.create(b ? (y / b) * z : w, b ? (x / b) * z : w);
    p.position.subFrom(T);
  }
}
function a5(a, i, l) {
  i.attract || (i.attract = { particles: [] });
  const { attract: s } = i;
  if (
    (s.finish ||
      (s.count || (s.count = 0),
      s.count++,
      s.count === i.particles.count && (s.finish = !0)),
    s.clicking)
  ) {
    const r = i.interactivity.mouse.clickPosition,
      u = i.retina.attractModeDistance;
    if (!u || u < xv || !r) return;
    wv(a, i, r, u, new gt(r.x, r.y, u), (d) => l(d));
  } else s.clicking === !1 && (s.particles = []);
}
function l5(a, i, l) {
  const s = i.interactivity.mouse.position,
    r = i.retina.attractModeDistance;
  !r || r < xv || !s || wv(a, i, s, r, new gt(s.x, s.y, r), (u) => l(u));
}
class s5 {
  constructor() {
    ((this.distance = 200),
      (this.duration = 0.4),
      (this.easing = la.easeOutQuad),
      (this.factor = 1),
      (this.maxSpeed = 50),
      (this.speed = 1));
  }
  load(i) {
    X(i) ||
      (i.distance !== void 0 && (this.distance = i.distance),
      i.duration !== void 0 && (this.duration = i.duration),
      i.easing !== void 0 && (this.easing = i.easing),
      i.factor !== void 0 && (this.factor = i.factor),
      i.maxSpeed !== void 0 && (this.maxSpeed = i.maxSpeed),
      i.speed !== void 0 && (this.speed = i.speed));
  }
}
const ps = "attract";
let o5 = class extends Ti {
  constructor(i, l) {
    (super(l),
      (this._engine = i),
      l.attract || (l.attract = { particles: [] }),
      (this.handleClickMode = (s) => {
        const r = this.container.actualOptions,
          u = r.interactivity.modes.attract;
        if (!(!u || s !== ps)) {
          (l.attract || (l.attract = { particles: [] }),
            (l.attract.clicking = !0),
            (l.attract.count = 0));
          for (const d of l.attract.particles)
            this.isEnabled(d) && d.velocity.setTo(d.initialVelocity);
          ((l.attract.particles = []),
            (l.attract.finish = !1),
            setTimeout(() => {
              l.destroyed ||
                (l.attract || (l.attract = { particles: [] }),
                (l.attract.clicking = !1));
            }, u.duration * mt));
        }
      }));
  }
  clear() {}
  init() {
    const i = this.container,
      l = i.actualOptions.interactivity.modes.attract;
    l && (i.retina.attractModeDistance = l.distance * i.retina.pixelRatio);
  }
  interact() {
    const i = this.container,
      l = i.actualOptions,
      s = i.interactivity.status === sa,
      r = l.interactivity.events,
      { enable: u, mode: d } = r.onHover,
      { enable: h, mode: p } = r.onClick;
    s && u && Xe(ps, d)
      ? l5(this._engine, this.container, (y) => this.isEnabled(y))
      : h &&
        Xe(ps, p) &&
        a5(this._engine, this.container, (y) => this.isEnabled(y));
  }
  isEnabled(i) {
    const l = this.container,
      s = l.actualOptions,
      r = l.interactivity.mouse,
      u = ((i == null ? void 0 : i.interactivity) ?? s.interactivity).events;
    if (
      (!r.position || !u.onHover.enable) &&
      (!r.clickPosition || !u.onClick.enable)
    )
      return !1;
    const d = u.onHover.mode,
      h = u.onClick.mode;
    return Xe(ps, d) || Xe(ps, h);
  }
  loadModeOptions(i, ...l) {
    i.attract || (i.attract = new s5());
    for (const s of l) i.attract.load(s == null ? void 0 : s.attract);
  }
  reset() {}
};
async function r5(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalAttract",
      (l) => Promise.resolve(new o5(a, l)),
      i,
    ));
}
const c5 = 2,
  or = 0.5,
  u5 = Math.PI * or,
  Jg = 2,
  Sv = 10,
  f5 = 0;
function zv(a, i, l, s, r) {
  const u = a.particles.quadTree.query(s, r);
  for (const d of u)
    s instanceof gt
      ? av(jf(d), {
          position: i,
          mass: l ** c5 * u5,
          velocity: at.origin,
          factor: at.origin,
        })
      : s instanceof pi && R3(d, Es(i, l));
}
function d5(a, i, l, s) {
  const r = document.querySelectorAll(i);
  r.length &&
    r.forEach((u) => {
      const d = u,
        h = a.retina.pixelRatio,
        p = {
          x: (d.offsetLeft + d.offsetWidth * or) * h,
          y: (d.offsetTop + d.offsetHeight * or) * h,
        },
        y = d.offsetWidth * or * h,
        x = Sv * h,
        b =
          l.type === pl.circle
            ? new gt(p.x, p.y, y + x)
            : new pi(
                d.offsetLeft * h - x,
                d.offsetTop * h - x,
                d.offsetWidth * h + x * Jg,
                d.offsetHeight * h + x * Jg,
              );
      s(p, y, b);
    });
}
function h5(a, i, l, s) {
  Xf(l, i, (r, u) => d5(a, r, u, (d, h, p) => zv(a, d, h, p, s)));
}
function m5(a, i) {
  const l = a.retina.pixelRatio,
    s = Sv * l,
    r = a.interactivity.mouse.position,
    u = a.retina.bounceModeDistance;
  !u || u < f5 || !r || zv(a, r, u, new gt(r.x, r.y, u + s), i);
}
class p5 {
  constructor() {
    this.distance = 200;
  }
  load(i) {
    X(i) || (i.distance !== void 0 && (this.distance = i.distance));
  }
}
const er = "bounce";
class g5 extends Ti {
  constructor(i) {
    super(i);
  }
  clear() {}
  init() {
    const i = this.container,
      l = i.actualOptions.interactivity.modes.bounce;
    l && (i.retina.bounceModeDistance = l.distance * i.retina.pixelRatio);
  }
  interact() {
    const i = this.container,
      l = i.actualOptions,
      s = l.interactivity.events,
      r = i.interactivity.status === sa,
      u = s.onHover.enable,
      d = s.onHover.mode,
      h = s.onDiv;
    r && u && Xe(er, d)
      ? m5(this.container, (p) => this.isEnabled(p))
      : h5(this.container, h, er, (p) => this.isEnabled(p));
  }
  isEnabled(i) {
    const l = this.container,
      s = l.actualOptions,
      r = l.interactivity.mouse,
      u = ((i == null ? void 0 : i.interactivity) ?? s.interactivity).events,
      d = u.onDiv;
    return (
      (!!r.position && u.onHover.enable && Xe(er, u.onHover.mode)) || Gf(er, d)
    );
  }
  loadModeOptions(i, ...l) {
    i.bounce || (i.bounce = new p5());
    for (const s of l) i.bounce.load(s == null ? void 0 : s.bounce);
  }
  reset() {}
}
async function y5(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalBounce",
      (l) => Promise.resolve(new g5(l)),
      i,
    ));
}
class Cv {
  constructor() {
    ((this.distance = 200), (this.duration = 0.4), (this.mix = !1));
  }
  load(i) {
    if (!X(i)) {
      if (
        (i.distance !== void 0 && (this.distance = i.distance),
        i.duration !== void 0 && (this.duration = i.duration),
        i.mix !== void 0 && (this.mix = i.mix),
        i.opacity !== void 0 && (this.opacity = i.opacity),
        i.color !== void 0)
      ) {
        const l = _i(this.color) ? void 0 : this.color;
        this.color = Qt(i.color, (s) => vt.create(l, s));
      }
      i.size !== void 0 && (this.size = i.size);
    }
  }
}
class v5 extends Cv {
  constructor() {
    (super(), (this.selectors = []));
  }
  load(i) {
    (super.load(i),
      !X(i) && i.selectors !== void 0 && (this.selectors = i.selectors));
  }
}
class b5 extends Cv {
  load(i) {
    (super.load(i),
      !X(i) &&
        (this.divs = Qt(i.divs, (l) => {
          const s = new v5();
          return (s.load(l), s);
        })));
  }
}
var xi;
(function (a) {
  ((a.color = "color"), (a.opacity = "opacity"), (a.size = "size"));
})(xi || (xi = {}));
function $g(a, i, l, s) {
  if (i >= l) {
    const r = a + (i - l) * s;
    return li(r, a, i);
  } else if (i < l) {
    const r = a - (l - i) * s;
    return li(r, i, a);
  }
}
const Jn = "bubble",
  uf = 0,
  x5 = 0,
  w5 = 2,
  Wg = 1,
  ey = 1,
  S5 = 0,
  z5 = 0,
  ff = 0.5,
  df = 1;
class C5 extends Ti {
  constructor(i, l) {
    (super(i),
      (this._clickBubble = () => {
        var x;
        const s = this.container,
          r = s.actualOptions,
          u = s.interactivity.mouse.clickPosition,
          d = r.interactivity.modes.bubble;
        if (!d || !u) return;
        s.bubble || (s.bubble = {});
        const h = s.retina.bubbleModeDistance;
        if (!h || h < uf) return;
        const p = s.particles.quadTree.queryCircle(u, h, (b) =>
            this.isEnabled(b),
          ),
          { bubble: y } = s;
        for (const b of p) {
          if (!y.clicking) continue;
          b.bubble.inRange = !y.durationEnd;
          const w = b.getPosition(),
            z = Xt(w, u),
            T =
              (new Date().getTime() - (s.interactivity.mouse.clickTime ?? x5)) /
              mt;
          (T > d.duration && (y.durationEnd = !0),
            T > d.duration * w5 && ((y.clicking = !1), (y.durationEnd = !1)));
          const M = {
            bubbleObj: {
              optValue: s.retina.bubbleModeSize,
              value: b.bubble.radius,
            },
            particlesObj: {
              optValue: wi(b.options.size.value) * s.retina.pixelRatio,
              value: b.size.value,
            },
            type: xi.size,
          };
          this._process(b, z, T, M);
          const E = {
            bubbleObj: { optValue: d.opacity, value: b.bubble.opacity },
            particlesObj: {
              optValue: wi(b.options.opacity.value),
              value: ((x = b.opacity) == null ? void 0 : x.value) ?? Wg,
            },
            type: xi.opacity,
          };
          (this._process(b, z, T, E),
            !y.durationEnd && z <= h
              ? this._hoverBubbleColor(b, z)
              : delete b.bubble.color);
        }
      }),
      (this._hoverBubble = () => {
        const s = this.container,
          r = s.interactivity.mouse.position,
          u = s.retina.bubbleModeDistance;
        if (!u || u < uf || !r) return;
        const d = s.particles.quadTree.queryCircle(r, u, (h) =>
          this.isEnabled(h),
        );
        for (const h of d) {
          h.bubble.inRange = !0;
          const p = h.getPosition(),
            y = Xt(p, r),
            x = ey - y / u;
          (y <= u
            ? x >= z5 &&
              s.interactivity.status === sa &&
              (this._hoverBubbleSize(h, x),
              this._hoverBubbleOpacity(h, x),
              this._hoverBubbleColor(h, x))
            : this.reset(h),
            s.interactivity.status === Sf && this.reset(h));
        }
      }),
      (this._hoverBubbleColor = (s, r, u) => {
        const d = this.container.actualOptions,
          h = u ?? d.interactivity.modes.bubble;
        if (h) {
          if (!s.bubble.finalColor) {
            const p = h.color;
            if (!p) return;
            const y = ni(p);
            s.bubble.finalColor = vs(this._engine, y);
          }
          if (s.bubble.finalColor)
            if (h.mix) {
              s.bubble.color = void 0;
              const p = s.getFillColor();
              s.bubble.color = p
                ? cv(Ff(p, s.bubble.finalColor, ey - r, r))
                : s.bubble.finalColor;
            } else s.bubble.color = s.bubble.finalColor;
        }
      }),
      (this._hoverBubbleOpacity = (s, r, u) => {
        var w, z;
        const d = this.container,
          h = d.actualOptions,
          p =
            (u == null ? void 0 : u.opacity) ??
            ((w = h.interactivity.modes.bubble) == null ? void 0 : w.opacity);
        if (!p) return;
        const y = s.options.opacity.value,
          x = ((z = s.opacity) == null ? void 0 : z.value) ?? Wg,
          b = $g(x, p, wi(y), r);
        b !== void 0 && (s.bubble.opacity = b);
      }),
      (this._hoverBubbleSize = (s, r, u) => {
        const d = this.container,
          h =
            u != null && u.size
              ? u.size * d.retina.pixelRatio
              : d.retina.bubbleModeSize;
        if (h === void 0) return;
        const p = wi(s.options.size.value) * d.retina.pixelRatio,
          y = s.size.value,
          x = $g(y, h, p, r);
        x !== void 0 && (s.bubble.radius = x);
      }),
      (this._process = (s, r, u, d) => {
        const h = this.container,
          p = d.bubbleObj.optValue,
          y = h.actualOptions,
          x = y.interactivity.modes.bubble;
        if (!x || p === void 0) return;
        const b = x.duration,
          w = h.retina.bubbleModeDistance,
          z = d.particlesObj.optValue,
          T = d.bubbleObj.value,
          M = d.particlesObj.value ?? S5,
          E = d.type;
        if (!(!w || w < uf || p === z))
          if ((h.bubble || (h.bubble = {}), h.bubble.durationEnd))
            T &&
              (E === xi.size && delete s.bubble.radius,
              E === xi.opacity && delete s.bubble.opacity);
          else if (r <= w) {
            if ((T ?? M) !== p) {
              const q = M - (u * (M - p)) / b;
              (E === xi.size && (s.bubble.radius = q),
                E === xi.opacity && (s.bubble.opacity = q));
            }
          } else
            (E === xi.size && delete s.bubble.radius,
              E === xi.opacity && delete s.bubble.opacity);
      }),
      (this._singleSelectorHover = (s, r, u) => {
        const d = this.container,
          h = document.querySelectorAll(r),
          p = d.actualOptions.interactivity.modes.bubble;
        !p ||
          !h.length ||
          h.forEach((y) => {
            const x = y,
              b = d.retina.pixelRatio,
              w = {
                x: (x.offsetLeft + x.offsetWidth * ff) * b,
                y: (x.offsetTop + x.offsetHeight * ff) * b,
              },
              z = x.offsetWidth * ff * b,
              T =
                u.type === pl.circle
                  ? new gt(w.x, w.y, z)
                  : new pi(
                      x.offsetLeft * b,
                      x.offsetTop * b,
                      x.offsetWidth * b,
                      x.offsetHeight * b,
                    ),
              M = d.particles.quadTree.query(T, (E) => this.isEnabled(E));
            for (const E of M) {
              if (!T.contains(E.getPosition())) continue;
              E.bubble.inRange = !0;
              const A = p.divs,
                q = nv(A, x);
              ((!E.bubble.div || E.bubble.div !== x) &&
                (this.clear(E, s, !0), (E.bubble.div = x)),
                this._hoverBubbleSize(E, df, q),
                this._hoverBubbleOpacity(E, df, q),
                this._hoverBubbleColor(E, df, q));
            }
          });
      }),
      (this._engine = l),
      i.bubble || (i.bubble = {}),
      (this.handleClickMode = (s) => {
        s === Jn && (i.bubble || (i.bubble = {}), (i.bubble.clicking = !0));
      }));
  }
  clear(i, l, s) {
    (i.bubble.inRange && !s) ||
      (delete i.bubble.div,
      delete i.bubble.opacity,
      delete i.bubble.radius,
      delete i.bubble.color);
  }
  init() {
    const i = this.container,
      l = i.actualOptions.interactivity.modes.bubble;
    l &&
      ((i.retina.bubbleModeDistance = l.distance * i.retina.pixelRatio),
      l.size !== void 0 &&
        (i.retina.bubbleModeSize = l.size * i.retina.pixelRatio));
  }
  interact(i) {
    const l = this.container.actualOptions,
      s = l.interactivity.events,
      r = s.onHover,
      u = s.onClick,
      d = r.enable,
      h = r.mode,
      p = u.enable,
      y = u.mode,
      x = s.onDiv;
    d && Xe(Jn, h)
      ? this._hoverBubble()
      : p && Xe(Jn, y)
        ? this._clickBubble()
        : Xf(Jn, x, (b, w) => this._singleSelectorHover(i, b, w));
  }
  isEnabled(i) {
    const l = this.container,
      s = l.actualOptions,
      r = l.interactivity.mouse,
      u = ((i == null ? void 0 : i.interactivity) ?? s.interactivity).events,
      { onClick: d, onDiv: h, onHover: p } = u,
      y = Gf(Jn, h);
    return y || (p.enable && r.position) || (d.enable && r.clickPosition)
      ? Xe(Jn, p.mode) || Xe(Jn, d.mode) || y
      : !1;
  }
  loadModeOptions(i, ...l) {
    i.bubble || (i.bubble = new b5());
    for (const s of l) i.bubble.load(s == null ? void 0 : s.bubble);
  }
  reset(i) {
    i.bubble.inRange = !1;
  }
}
async function _5(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalBubble",
      (l) => Promise.resolve(new C5(l, a)),
      i,
    ));
}
class T5 {
  constructor() {
    this.opacity = 0.5;
  }
  load(i) {
    X(i) || (i.opacity !== void 0 && (this.opacity = i.opacity));
  }
}
class E5 {
  constructor() {
    ((this.distance = 80), (this.links = new T5()), (this.radius = 60));
  }
  load(i) {
    X(i) ||
      (i.distance !== void 0 && (this.distance = i.distance),
      this.links.load(i.links),
      i.radius !== void 0 && (this.radius = i.radius));
  }
}
const ty = 0,
  iy = 1,
  j5 = 0;
function M5(a, i, l, s) {
  const r = Math.floor(l.getRadius() / i.getRadius()),
    u = i.getFillColor(),
    d = l.getFillColor();
  if (!u || !d) return;
  const h = i.getPosition(),
    p = l.getPosition(),
    y = Ff(u, d, i.getRadius(), l.getRadius()),
    x = a.createLinearGradient(h.x, h.y, p.x, p.y);
  return (
    x.addColorStop(ty, bs(u, s)),
    x.addColorStop(li(r, ty, iy), Zi(y, s)),
    x.addColorStop(iy, bs(d, s)),
    x
  );
}
function D5(a, i, l, s, r) {
  (gs(a, s, r), (a.lineWidth = i), (a.strokeStyle = l), a.stroke());
}
function O5(a, i, l, s) {
  const r = a.actualOptions,
    u = r.interactivity.modes.connect;
  if (u) return M5(i, l, s, u.links.opacity);
}
function R5(a, i, l) {
  a.canvas.draw((s) => {
    const r = O5(a, s, i, l);
    if (!r) return;
    const u = i.getPosition(),
      d = l.getPosition();
    D5(s, i.retina.linksWidth ?? j5, r, u, d);
  });
}
const N5 = "connect",
  ny = 0;
class A5 extends Ti {
  constructor(i) {
    super(i);
  }
  clear() {}
  init() {
    const i = this.container,
      l = i.actualOptions.interactivity.modes.connect;
    l &&
      ((i.retina.connectModeDistance = l.distance * i.retina.pixelRatio),
      (i.retina.connectModeRadius = l.radius * i.retina.pixelRatio));
  }
  interact() {
    const i = this.container;
    if (
      i.actualOptions.interactivity.events.onHover.enable &&
      i.interactivity.status === "pointermove"
    ) {
      const s = i.interactivity.mouse.position,
        { connectModeDistance: r, connectModeRadius: u } = i.retina;
      if (!r || r < ny || !u || u < ny || !s) return;
      const d = Math.abs(u),
        h = i.particles.quadTree.queryCircle(s, d, (p) => this.isEnabled(p));
      h.forEach((p, y) => {
        const x = p.getPosition(),
          b = 1;
        for (const w of h.slice(y + b)) {
          const z = w.getPosition(),
            T = Math.abs(r),
            M = Math.abs(x.x - z.x),
            E = Math.abs(x.y - z.y);
          M < T && E < T && R5(i, p, w);
        }
      });
    }
  }
  isEnabled(i) {
    const l = this.container,
      s = l.interactivity.mouse,
      r = (
        (i == null ? void 0 : i.interactivity) ?? l.actualOptions.interactivity
      ).events;
    return r.onHover.enable && s.position ? Xe(N5, r.onHover.mode) : !1;
  }
  loadModeOptions(i, ...l) {
    i.connect || (i.connect = new E5());
    for (const s of l) i.connect.load(s == null ? void 0 : s.connect);
  }
  reset() {}
}
async function k5(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalConnect",
      (l) => Promise.resolve(new A5(l)),
      i,
    ));
}
class L5 {
  constructor() {
    ((this.blink = !1), (this.consent = !1), (this.opacity = 1));
  }
  load(i) {
    X(i) ||
      (i.blink !== void 0 && (this.blink = i.blink),
      i.color !== void 0 && (this.color = vt.create(this.color, i.color)),
      i.consent !== void 0 && (this.consent = i.consent),
      i.opacity !== void 0 && (this.opacity = i.opacity));
  }
}
class U5 {
  constructor() {
    ((this.distance = 100), (this.links = new L5()));
  }
  load(i) {
    X(i) ||
      (i.distance !== void 0 && (this.distance = i.distance),
      this.links.load(i.links));
  }
}
const B5 = 0;
function H5(a, i, l, s, r, u) {
  (gs(a, l, s), (a.strokeStyle = Zi(r, u)), (a.lineWidth = i), a.stroke());
}
function q5(a, i, l, s, r) {
  a.canvas.draw((u) => {
    const d = i.getPosition();
    H5(u, i.retina.linksWidth ?? B5, d, r, l, s);
  });
}
const V5 = "grab",
  Y5 = 0,
  G5 = 0;
class X5 extends Ti {
  constructor(i, l) {
    (super(i), (this._engine = l));
  }
  clear() {}
  init() {
    const i = this.container,
      l = i.actualOptions.interactivity.modes.grab;
    l && (i.retina.grabModeDistance = l.distance * i.retina.pixelRatio);
  }
  interact() {
    var h;
    const i = this.container,
      l = i.actualOptions,
      s = l.interactivity;
    if (
      !s.modes.grab ||
      !s.events.onHover.enable ||
      i.interactivity.status !== sa
    )
      return;
    const r = i.interactivity.mouse.position;
    if (!r) return;
    const u = i.retina.grabModeDistance;
    if (!u || u < Y5) return;
    const d = i.particles.quadTree.queryCircle(r, u, (p) => this.isEnabled(p));
    for (const p of d) {
      const y = p.getPosition(),
        x = Xt(y, r);
      if (x > u) continue;
      const b = s.modes.grab.links,
        w = b.opacity,
        z = w - (x * w) / u;
      if (z <= G5) continue;
      const T = b.color ?? ((h = p.options.links) == null ? void 0 : h.color);
      if (!i.particles.grabLineColor && T) {
        const E = s.modes.grab.links;
        i.particles.grabLineColor = fv(this._engine, T, E.blink, E.consent);
      }
      const M = Df(p, void 0, i.particles.grabLineColor);
      M && q5(i, p, M, z, r);
    }
  }
  isEnabled(i) {
    const l = this.container,
      s = l.interactivity.mouse,
      r = (
        (i == null ? void 0 : i.interactivity) ?? l.actualOptions.interactivity
      ).events;
    return r.onHover.enable && !!s.position && Xe(V5, r.onHover.mode);
  }
  loadModeOptions(i, ...l) {
    i.grab || (i.grab = new U5());
    for (const s of l) i.grab.load(s == null ? void 0 : s.grab);
  }
  reset() {}
}
async function Q5(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalGrab",
      (l) => Promise.resolve(new X5(l, a)),
      i,
    ));
}
const F5 = "pause";
class Z5 extends Ti {
  constructor(i) {
    (super(i),
      (this.handleClickMode = (l) => {
        if (l !== F5) return;
        const s = this.container;
        s.animationStatus ? s.pause() : s.play();
      }));
  }
  clear() {}
  init() {}
  interact() {}
  isEnabled() {
    return !0;
  }
  reset() {}
}
async function P5(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalPause",
      (l) => Promise.resolve(new Z5(l)),
      i,
    ));
}
class K5 {
  constructor() {
    ((this.default = !0), (this.groups = []), (this.quantity = 4));
  }
  load(i) {
    if (X(i)) return;
    (i.default !== void 0 && (this.default = i.default),
      i.groups !== void 0 && (this.groups = i.groups.map((s) => s)),
      this.groups.length || (this.default = !0));
    const l = i.quantity;
    (l !== void 0 && (this.quantity = be(l)),
      (this.particles = Qt(i.particles, (s) => yt({}, s))));
  }
}
const I5 = "push",
  J5 = 0;
class $5 extends Ti {
  constructor(i) {
    (super(i),
      (this.handleClickMode = (l) => {
        if (l !== I5) return;
        const s = this.container,
          r = s.actualOptions,
          u = r.interactivity.modes.push;
        if (!u) return;
        const d = W(u.quantity);
        if (d <= J5) return;
        const h = zr([void 0, ...u.groups]),
          p = h !== void 0 ? s.actualOptions.particles.groups[h] : void 0,
          y = ni(u.particles),
          x = yt(p, y);
        s.particles.push(d, s.interactivity.mouse, x, h);
      }));
  }
  clear() {}
  init() {}
  interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(i, ...l) {
    i.push || (i.push = new K5());
    for (const s of l) i.push.load(s == null ? void 0 : s.push);
  }
  reset() {}
}
async function W5(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalPush",
      (l) => Promise.resolve(new $5(l)),
      i,
    ));
}
class ew {
  constructor() {
    this.quantity = 2;
  }
  load(i) {
    if (X(i)) return;
    const l = i.quantity;
    l !== void 0 && (this.quantity = be(l));
  }
}
const tw = "remove";
class iw extends Ti {
  constructor(i) {
    (super(i),
      (this.handleClickMode = (l) => {
        const s = this.container,
          r = s.actualOptions;
        if (!r.interactivity.modes.remove || l !== tw) return;
        const u = W(r.interactivity.modes.remove.quantity);
        s.particles.removeQuantity(u);
      }));
  }
  clear() {}
  init() {}
  interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(i, ...l) {
    i.remove || (i.remove = new ew());
    for (const s of l) i.remove.load(s == null ? void 0 : s.remove);
  }
  reset() {}
}
async function nw(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalRemove",
      (l) => Promise.resolve(new iw(l)),
      i,
    ));
}
class _v {
  constructor() {
    ((this.distance = 200),
      (this.duration = 0.4),
      (this.factor = 100),
      (this.speed = 1),
      (this.maxSpeed = 50),
      (this.easing = la.easeOutQuad));
  }
  load(i) {
    X(i) ||
      (i.distance !== void 0 && (this.distance = i.distance),
      i.duration !== void 0 && (this.duration = i.duration),
      i.easing !== void 0 && (this.easing = i.easing),
      i.factor !== void 0 && (this.factor = i.factor),
      i.speed !== void 0 && (this.speed = i.speed),
      i.maxSpeed !== void 0 && (this.maxSpeed = i.maxSpeed));
  }
}
class aw extends _v {
  constructor() {
    (super(), (this.selectors = []));
  }
  load(i) {
    (super.load(i),
      !X(i) && i.selectors !== void 0 && (this.selectors = i.selectors));
  }
}
class lw extends _v {
  load(i) {
    (super.load(i),
      !X(i) &&
        (this.divs = Qt(i.divs, (l) => {
          const s = new aw();
          return (s.load(l), s);
        })));
  }
}
const $n = "repulse",
  sw = 0,
  ow = 6,
  rw = 3,
  cw = 2,
  uw = 0,
  fw = 0,
  dw = 1,
  hf = 0.5;
class hw extends Ti {
  constructor(i, l) {
    (super(l),
      (this._clickRepulse = () => {
        const s = this.container,
          r = s.actualOptions.interactivity.modes.repulse;
        if (!r) return;
        const u = s.repulse ?? { particles: [] };
        if (
          (u.finish ||
            (u.count || (u.count = 0),
            u.count++,
            u.count === s.particles.count && (u.finish = !0)),
          u.clicking)
        ) {
          const d = s.retina.repulseModeDistance;
          if (!d || d < sw) return;
          const h = Math.pow(d / ow, rw),
            p = s.interactivity.mouse.clickPosition;
          if (p === void 0) return;
          const y = new gt(p.x, p.y, h),
            x = s.particles.quadTree.query(y, (b) => this.isEnabled(b));
          for (const b of x) {
            const { dx: w, dy: z, distance: T } = St(p, b.position),
              M = T ** cw,
              E = r.speed,
              A = (-h * E) / M;
            if (M <= h) {
              u.particles.push(b);
              const q = at.create(w, z);
              ((q.length = A), b.velocity.setTo(q));
            }
          }
        } else if (u.clicking === !1) {
          for (const d of u.particles) d.velocity.setTo(d.initialVelocity);
          u.particles = [];
        }
      }),
      (this._hoverRepulse = () => {
        const s = this.container,
          r = s.interactivity.mouse.position,
          u = s.retina.repulseModeDistance;
        !u || u < uw || !r || this._processRepulse(r, u, new gt(r.x, r.y, u));
      }),
      (this._processRepulse = (s, r, u, d) => {
        const h = this.container,
          p = h.particles.quadTree.query(u, (E) => this.isEnabled(E)),
          y = h.actualOptions.interactivity.modes.repulse;
        if (!y) return;
        const { easing: x, speed: b, factor: w, maxSpeed: z } = y,
          T = this._engine.getEasing(x),
          M = ((d == null ? void 0 : d.speed) ?? b) * w;
        for (const E of p) {
          const { dx: A, dy: q, distance: Y } = St(E.position, s),
            G = li(T(dw - Y / r) * M, fw, z),
            Z = at.create(Y ? (A / Y) * G : M, Y ? (q / Y) * G : M);
          E.position.addTo(Z);
        }
      }),
      (this._singleSelectorRepulse = (s, r) => {
        const u = this.container,
          d = u.actualOptions.interactivity.modes.repulse;
        if (!d) return;
        const h = document.querySelectorAll(s);
        h.length &&
          h.forEach((p) => {
            const y = p,
              x = u.retina.pixelRatio,
              b = {
                x: (y.offsetLeft + y.offsetWidth * hf) * x,
                y: (y.offsetTop + y.offsetHeight * hf) * x,
              },
              w = y.offsetWidth * hf * x,
              z =
                r.type === pl.circle
                  ? new gt(b.x, b.y, w)
                  : new pi(
                      y.offsetLeft * x,
                      y.offsetTop * x,
                      y.offsetWidth * x,
                      y.offsetHeight * x,
                    ),
              T = d.divs,
              M = nv(T, y);
            this._processRepulse(b, w, z, M);
          });
      }),
      (this._engine = i),
      l.repulse || (l.repulse = { particles: [] }),
      (this.handleClickMode = (s) => {
        const r = this.container.actualOptions,
          u = r.interactivity.modes.repulse;
        if (!u || s !== $n) return;
        l.repulse || (l.repulse = { particles: [] });
        const d = l.repulse;
        ((d.clicking = !0), (d.count = 0));
        for (const h of l.repulse.particles)
          this.isEnabled(h) && h.velocity.setTo(h.initialVelocity);
        ((d.particles = []),
          (d.finish = !1),
          setTimeout(() => {
            l.destroyed || (d.clicking = !1);
          }, u.duration * mt));
      }));
  }
  clear() {}
  init() {
    const i = this.container,
      l = i.actualOptions.interactivity.modes.repulse;
    l && (i.retina.repulseModeDistance = l.distance * i.retina.pixelRatio);
  }
  interact() {
    const i = this.container,
      l = i.actualOptions,
      s = i.interactivity.status === sa,
      r = l.interactivity.events,
      u = r.onHover,
      d = u.enable,
      h = u.mode,
      p = r.onClick,
      y = p.enable,
      x = p.mode,
      b = r.onDiv;
    s && d && Xe($n, h)
      ? this._hoverRepulse()
      : y && Xe($n, x)
        ? this._clickRepulse()
        : Xf($n, b, (w, z) => this._singleSelectorRepulse(w, z));
  }
  isEnabled(i) {
    const l = this.container,
      s = l.actualOptions,
      r = l.interactivity.mouse,
      u = ((i == null ? void 0 : i.interactivity) ?? s.interactivity).events,
      d = u.onDiv,
      h = u.onHover,
      p = u.onClick,
      y = Gf($n, d);
    if (!(y || (h.enable && r.position) || (p.enable && r.clickPosition)))
      return !1;
    const x = h.mode,
      b = p.mode;
    return Xe($n, x) || Xe($n, b) || y;
  }
  loadModeOptions(i, ...l) {
    i.repulse || (i.repulse = new lw());
    for (const s of l) i.repulse.load(s == null ? void 0 : s.repulse);
  }
  reset() {}
}
async function mw(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalRepulse",
      (l) => Promise.resolve(new hw(a, l)),
      i,
    ));
}
class pw {
  constructor() {
    ((this.factor = 3), (this.radius = 200));
  }
  load(i) {
    X(i) ||
      (i.factor !== void 0 && (this.factor = i.factor),
      i.radius !== void 0 && (this.radius = i.radius));
  }
}
const gw = "slow",
  yw = 0;
class vw extends Ti {
  constructor(i) {
    super(i);
  }
  clear(i, l, s) {
    (i.slow.inRange && !s) || (i.slow.factor = 1);
  }
  init() {
    const i = this.container,
      l = i.actualOptions.interactivity.modes.slow;
    l && (i.retina.slowModeRadius = l.radius * i.retina.pixelRatio);
  }
  interact() {}
  isEnabled(i) {
    const l = this.container,
      s = l.interactivity.mouse,
      r = (
        (i == null ? void 0 : i.interactivity) ?? l.actualOptions.interactivity
      ).events;
    return r.onHover.enable && !!s.position && Xe(gw, r.onHover.mode);
  }
  loadModeOptions(i, ...l) {
    i.slow || (i.slow = new pw());
    for (const s of l) i.slow.load(s == null ? void 0 : s.slow);
  }
  reset(i) {
    i.slow.inRange = !1;
    const l = this.container,
      s = l.actualOptions,
      r = l.interactivity.mouse.position,
      u = l.retina.slowModeRadius,
      d = s.interactivity.modes.slow;
    if (!d || !u || u < yw || !r) return;
    const h = i.getPosition(),
      p = Xt(r, h),
      y = p / u,
      x = d.factor,
      { slow: b } = i;
    p > u || ((b.inRange = !0), (b.factor = y / x));
  }
}
async function bw(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "externalSlow",
      (l) => Promise.resolve(new vw(l)),
      i,
    ));
}
const xw = 0,
  ww = 1,
  Sw =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function zw(a, i, l) {
  const { svgData: s } = a;
  if (!s) return "";
  const r = bs(i, l);
  if (s.includes("fill")) return s.replace(Sw, () => r);
  const u = s.indexOf(">");
  return `${s.substring(xw, u)} fill="${r}"${s.substring(u)}`;
}
async function Cr(a) {
  return new Promise((i) => {
    a.loading = !0;
    const l = new Image();
    ((a.element = l),
      l.addEventListener("load", () => {
        ((a.loading = !1), i());
      }),
      l.addEventListener("error", () => {
        ((a.element = void 0),
          (a.error = !0),
          (a.loading = !1),
          ra().error(`${ai} loading image: ${a.source}`),
          i());
      }),
      (l.src = a.source));
  });
}
async function Cw(a) {
  if (a.type !== "svg") {
    await Cr(a);
    return;
  }
  a.loading = !0;
  const i = await fetch(a.source);
  (i.ok
    ? (a.svgData = await i.text())
    : (ra().error(`${ai} Image not found`), (a.error = !0)),
    (a.loading = !1));
}
function _w(a, i, l, s) {
  var d;
  const r = zw(a, l, ((d = s.opacity) == null ? void 0 : d.value) ?? ww),
    u = {
      color: l,
      gif: i.gif,
      data: { ...a, svgData: r },
      loaded: !1,
      ratio: i.width / i.height,
      replaceColor: i.replaceColor,
      source: i.src,
    };
  return new Promise((h) => {
    const p = new Blob([r], { type: "image/svg+xml" }),
      y = URL || window.URL || window.webkitURL || window,
      x = y.createObjectURL(p),
      b = new Image();
    b.addEventListener("load", () => {
      ((u.loaded = !0), (u.element = b), h(u), y.revokeObjectURL(x));
    });
    const w = async () => {
      y.revokeObjectURL(x);
      const z = { ...a, error: !1, loading: !0 };
      (await Cr(z), (u.loaded = !0), (u.element = z.element), h(u));
    };
    (b.addEventListener("error", () => void w()), (b.src = x));
  });
}
const mf = [0, 4, 2, 1],
  ay = [8, 8, 4, 2];
class Tw {
  constructor(i) {
    ((this.pos = 0), (this.data = new Uint8ClampedArray(i)));
  }
  getString(i) {
    const l = this.data.slice(this.pos, this.pos + i);
    return (
      (this.pos += l.length),
      l.reduce((s, r) => s + String.fromCharCode(r), "")
    );
  }
  nextByte() {
    return this.data[this.pos++];
  }
  nextTwoBytes() {
    return (
      (this.pos += 2),
      this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
    );
  }
  readSubBlocks() {
    let i = "",
      l = 0;
    const s = 0,
      r = 0;
    do {
      l = this.data[this.pos++];
      for (
        let u = l;
        --u >= s;
        i += String.fromCharCode(this.data[this.pos++])
      );
    } while (l !== r);
    return i;
  }
  readSubBlocksBin() {
    let i = this.data[this.pos],
      l = 0;
    const s = 0,
      r = 1;
    for (let d = 0; i !== s; d += i + r, i = this.data[this.pos + d]) l += i;
    const u = new Uint8Array(l);
    i = this.data[this.pos++];
    for (let d = 0; i !== s; i = this.data[this.pos++])
      for (let h = i; --h >= s; u[d++] = this.data[this.pos++]);
    return u;
  }
  skipSubBlocks() {
    for (
      const i = 1, l = 0;
      this.data[this.pos] !== l;
      this.pos += this.data[this.pos] + i
    );
    this.pos++;
  }
}
var ui;
(function (a) {
  ((a[(a.Replace = 0)] = "Replace"),
    (a[(a.Combine = 1)] = "Combine"),
    (a[(a.RestoreBackground = 2)] = "RestoreBackground"),
    (a[(a.RestorePrevious = 3)] = "RestorePrevious"),
    (a[(a.UndefinedA = 4)] = "UndefinedA"),
    (a[(a.UndefinedB = 5)] = "UndefinedB"),
    (a[(a.UndefinedC = 6)] = "UndefinedC"),
    (a[(a.UndefinedD = 7)] = "UndefinedD"));
})(ui || (ui = {}));
var Fi;
(function (a) {
  ((a[(a.Extension = 33)] = "Extension"),
    (a[(a.ApplicationExtension = 255)] = "ApplicationExtension"),
    (a[(a.GraphicsControlExtension = 249)] = "GraphicsControlExtension"),
    (a[(a.PlainTextExtension = 1)] = "PlainTextExtension"),
    (a[(a.CommentExtension = 254)] = "CommentExtension"),
    (a[(a.Image = 44)] = "Image"),
    (a[(a.EndOfFile = 59)] = "EndOfFile"));
})(Fi || (Fi = {}));
const Dt = { x: 0, y: 0 },
  Ew = 0,
  ly = 0.5,
  jw = 0,
  sy = 0,
  Rf = 0;
function Tv(a, i) {
  const l = [];
  for (let s = 0; s < i; s++)
    (l.push({ r: a.data[a.pos], g: a.data[a.pos + 1], b: a.data[a.pos + 2] }),
      (a.pos += 3));
  return l;
}
function Mw(a, i, l, s) {
  switch (a.nextByte()) {
    case Fi.GraphicsControlExtension: {
      const r = i.frames[l(!1)];
      a.pos++;
      const u = a.nextByte();
      ((r.GCreserved = (u & 224) >>> 5),
        (r.disposalMethod = (u & 28) >>> 2),
        (r.userInputDelayFlag = (u & 2) === 2));
      const d = (u & 1) === 1;
      r.delayTime = a.nextTwoBytes() * 10;
      const h = a.nextByte();
      (d && s(h), a.pos++);
      break;
    }
    case Fi.ApplicationExtension: {
      a.pos++;
      const r = {
        identifier: a.getString(8),
        authenticationCode: a.getString(3),
        data: a.readSubBlocksBin(),
      };
      i.applicationExtensions.push(r);
      break;
    }
    case Fi.CommentExtension: {
      i.comments.push([l(!1), a.readSubBlocks()]);
      break;
    }
    case Fi.PlainTextExtension: {
      if (i.globalColorTable.length === 0)
        throw new EvalError("plain text extension without global color table");
      (a.pos++,
        (i.frames[l(!1)].plainTextData = {
          left: a.nextTwoBytes(),
          top: a.nextTwoBytes(),
          width: a.nextTwoBytes(),
          height: a.nextTwoBytes(),
          charSize: { width: a.nextTwoBytes(), height: a.nextTwoBytes() },
          foregroundColor: a.nextByte(),
          backgroundColor: a.nextByte(),
          text: a.readSubBlocks(),
        }));
      break;
    }
    default:
      a.skipSubBlocks();
      break;
  }
}
async function Dw(a, i, l, s, r, u) {
  const d = i.frames[s(!0)];
  ((d.left = a.nextTwoBytes()),
    (d.top = a.nextTwoBytes()),
    (d.width = a.nextTwoBytes()),
    (d.height = a.nextTwoBytes()));
  const h = a.nextByte(),
    p = (h & 128) === 128,
    y = (h & 64) === 64;
  ((d.sortFlag = (h & 32) === 32), (d.reserved = (h & 24) >>> 3));
  const x = 1 << ((h & 7) + 1);
  p && (d.localColorTable = Tv(a, x));
  const b = (A) => {
      const {
        r: q,
        g: Y,
        b: G,
      } = (p ? d.localColorTable : i.globalColorTable)[A];
      return A !== r(null)
        ? { r: q, g: Y, b: G, a: 255 }
        : { r: q, g: Y, b: G, a: l ? ~~((q + Y + G) / 3) : 0 };
    },
    w = (() => {
      try {
        return new ImageData(d.width, d.height, { colorSpace: "srgb" });
      } catch (A) {
        if (A instanceof DOMException && A.name === "IndexSizeError")
          return null;
        throw A;
      }
    })();
  if (w == null) throw new EvalError("GIF frame size is to large");
  const z = a.nextByte(),
    T = a.readSubBlocksBin(),
    M = 1 << z,
    E = (A, q) => {
      const Y = A >>> 3,
        G = A & 7;
      return (
        ((T[Y] + (T[Y + 1] << 8) + (T[Y + 2] << 16)) &
          (((1 << q) - 1) << G)) >>>
        G
      );
    };
  if (y) {
    for (let A = 0, q = z + 1, Y = 0, G = [[0]], Z = 0; Z < 4; Z++)
      if (mf[Z] < d.height) {
        let te = 0,
          J = 0,
          he = !1;
        for (; !he; ) {
          const Oe = A;
          if (((A = E(Y, q)), (Y += q + 1), A === M)) {
            ((q = z + 1), (G.length = M + 2));
            for (let ke = 0; ke < G.length; ke++) G[ke] = ke < M ? [ke] : [];
          } else {
            A >= G.length
              ? G.push(G[Oe].concat(G[Oe][0]))
              : Oe !== M && G.push(G[Oe].concat(G[A][0]));
            for (const ke of G[A]) {
              const { r: We, g: Le, b: ge, a: Qe } = b(ke);
              (w.data.set(
                [We, Le, ge, Qe],
                mf[Z] * d.width + ay[Z] * J + (te % (d.width * 4)),
              ),
                (te += 4));
            }
            G.length === 1 << q && q < 12 && q++;
          }
          te === d.width * 4 * (J + 1) &&
            (J++, mf[Z] + ay[Z] * J >= d.height && (he = !0));
        }
      }
    ((d.image = w), (d.bitmap = await createImageBitmap(w)));
  } else {
    let A = 0,
      q = z + 1,
      Y = 0,
      G = -4,
      Z = !1;
    const te = [[0]];
    for (; !Z; ) {
      const J = A;
      if (((A = E(Y, q)), (Y += q), A === M)) {
        ((q = z + 1), (te.length = M + 2));
        for (let he = 0; he < te.length; he++) te[he] = he < M ? [he] : [];
      } else {
        if (A === M + 1) {
          Z = !0;
          break;
        }
        A >= te.length
          ? te.push(te[J].concat(te[J][0]))
          : J !== M && te.push(te[J].concat(te[A][0]));
        for (const he of te[A]) {
          const { r: Oe, g: ke, b: We, a: Le } = b(he);
          w.data.set([Oe, ke, We, Le], (G += 4));
        }
        te.length >= 1 << q && q < 12 && q++;
      }
    }
    ((d.image = w), (d.bitmap = await createImageBitmap(w)));
  }
}
async function Ow(a, i, l, s, r, u) {
  switch (a.nextByte()) {
    case Fi.EndOfFile:
      return !0;
    case Fi.Image:
      await Dw(a, i, l, s, r);
      break;
    case Fi.Extension:
      Mw(a, i, s, r);
      break;
    default:
      throw new EvalError("undefined block found");
  }
  return !1;
}
function Rw(a) {
  for (const i of a.applicationExtensions)
    if (i.identifier + i.authenticationCode === "NETSCAPE2.0")
      return i.data[1] + (i.data[2] << 8);
  return NaN;
}
async function Nw(a, i, l) {
  l || (l = !1);
  const s = await fetch(a);
  if (!s.ok && s.status === 404) throw new EvalError("file not found");
  const r = await s.arrayBuffer(),
    u = {
      width: 0,
      height: 0,
      totalTime: 0,
      colorRes: 0,
      pixelAspectRatio: 0,
      frames: [],
      sortFlag: !1,
      globalColorTable: [],
      backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
      comments: [],
      applicationExtensions: [],
    },
    d = new Tw(new Uint8ClampedArray(r));
  if (d.getString(6) !== "GIF89a") throw new Error("not a supported GIF file");
  ((u.width = d.nextTwoBytes()), (u.height = d.nextTwoBytes()));
  const h = d.nextByte(),
    p = (h & 128) === 128;
  ((u.colorRes = (h & 112) >>> 4), (u.sortFlag = (h & 8) === 8));
  const y = 1 << ((h & 7) + 1),
    x = d.nextByte();
  ((u.pixelAspectRatio = d.nextByte()),
    u.pixelAspectRatio !== 0 &&
      (u.pixelAspectRatio = (u.pixelAspectRatio + 15) / 64),
    p && (u.globalColorTable = Tv(d, y)));
  const b = (() => {
    try {
      return new ImageData(u.width, u.height, { colorSpace: "srgb" });
    } catch (G) {
      if (G instanceof DOMException && G.name === "IndexSizeError") return null;
      throw G;
    }
  })();
  if (b == null) throw new Error("GIF frame size is to large");
  const { r: w, g: z, b: T } = u.globalColorTable[x];
  b.data.set(p ? [w, z, T, 255] : [0, 0, 0, 0]);
  for (let G = 4; G < b.data.length; G *= 2) b.data.copyWithin(G, 0, G);
  u.backgroundImage = b;
  let M = -1,
    E = !0,
    A = -1;
  const q = (G) => (G && (E = !0), M),
    Y = (G) => (G != null && (A = G), A);
  try {
    do
      E &&
        (u.frames.push({
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          disposalMethod: ui.Replace,
          image: new ImageData(1, 1, { colorSpace: "srgb" }),
          plainTextData: null,
          userInputDelayFlag: !1,
          delayTime: 0,
          sortFlag: !1,
          localColorTable: [],
          reserved: 0,
          GCreserved: 0,
        }),
        M++,
        (A = -1),
        (E = !1));
    while (!(await Ow(d, u, l, q, Y, i)));
    u.frames.length--;
    for (const G of u.frames) {
      if (G.userInputDelayFlag && G.delayTime === 0) {
        u.totalTime = 1 / 0;
        break;
      }
      u.totalTime += G.delayTime;
    }
    return u;
  } catch (G) {
    throw G instanceof EvalError
      ? new Error(`error while parsing frame ${M} "${G.message}"`)
      : G;
  }
}
function Aw(a) {
  const { context: i, radius: l, particle: s, delta: r } = a,
    u = s.image;
  if (!(u != null && u.gifData) || !u.gif) return;
  const d = new OffscreenCanvas(u.gifData.width, u.gifData.height),
    h = d.getContext("2d");
  if (!h) throw new Error("could not create offscreen canvas context");
  ((h.imageSmoothingQuality = "low"),
    (h.imageSmoothingEnabled = !1),
    h.clearRect(Dt.x, Dt.y, d.width, d.height),
    s.gifLoopCount === void 0 && (s.gifLoopCount = u.gifLoopCount ?? Rf));
  let p = s.gifFrame ?? Ew;
  const y = { x: -u.gifData.width * ly, y: -u.gifData.height * ly },
    x = u.gifData.frames[p];
  if ((s.gifTime === void 0 && (s.gifTime = jw), !!x.bitmap)) {
    switch (
      (i.scale(l / u.gifData.width, l / u.gifData.height), x.disposalMethod)
    ) {
      case ui.UndefinedA:
      case ui.UndefinedB:
      case ui.UndefinedC:
      case ui.UndefinedD:
      case ui.Replace:
        (h.drawImage(x.bitmap, x.left, x.top),
          i.drawImage(d, y.x, y.y),
          h.clearRect(Dt.x, Dt.y, d.width, d.height));
        break;
      case ui.Combine:
        (h.drawImage(x.bitmap, x.left, x.top), i.drawImage(d, y.x, y.y));
        break;
      case ui.RestoreBackground:
        (h.drawImage(x.bitmap, x.left, x.top),
          i.drawImage(d, y.x, y.y),
          h.clearRect(Dt.x, Dt.y, d.width, d.height),
          u.gifData.globalColorTable.length
            ? h.putImageData(u.gifData.backgroundImage, y.x, y.y)
            : h.putImageData(
                u.gifData.frames[sy].image,
                y.x + x.left,
                y.y + x.top,
              ));
        break;
      case ui.RestorePrevious:
        {
          const b = h.getImageData(Dt.x, Dt.y, d.width, d.height);
          (h.drawImage(x.bitmap, x.left, x.top),
            i.drawImage(d, y.x, y.y),
            h.clearRect(Dt.x, Dt.y, d.width, d.height),
            h.putImageData(b, Dt.x, Dt.y));
        }
        break;
    }
    if (((s.gifTime += r.value), s.gifTime > x.delayTime)) {
      if (((s.gifTime -= x.delayTime), ++p >= u.gifData.frames.length)) {
        if (--s.gifLoopCount <= Rf) return;
        ((p = sy), h.clearRect(Dt.x, Dt.y, d.width, d.height));
      }
      s.gifFrame = p;
    }
    i.scale(u.gifData.width / l, u.gifData.height / l);
  }
}
async function kw(a) {
  if (a.type !== "gif") {
    await Cr(a);
    return;
  }
  a.loading = !0;
  try {
    ((a.gifData = await Nw(a.source)),
      (a.gifLoopCount = Rw(a.gifData) ?? Rf),
      a.gifLoopCount || (a.gifLoopCount = 1 / 0));
  } catch {
    a.error = !0;
  }
  a.loading = !1;
}
const Lw = 2,
  Uw = 1,
  Bw = 12,
  Hw = 1;
class qw {
  constructor(i) {
    ((this.validTypes = ["image", "images"]),
      (this.loadImageShape = async (l) => {
        if (!this._engine.loadImage)
          throw new Error(`${ai} image shape not initialized`);
        await this._engine.loadImage({
          gif: l.gif,
          name: l.name,
          replaceColor: l.replaceColor ?? !1,
          src: l.src,
        });
      }),
      (this._engine = i));
  }
  addImage(i) {
    (this._engine.images || (this._engine.images = []),
      this._engine.images.push(i));
  }
  draw(i) {
    const { context: l, radius: s, particle: r, opacity: u } = i,
      d = r.image,
      h = d == null ? void 0 : d.element;
    if (d) {
      if (((l.globalAlpha = u), d.gif && d.gifData)) Aw(i);
      else if (h) {
        const p = d.ratio,
          y = { x: -s, y: -s },
          x = s * Lw;
        l.drawImage(h, y.x, y.y, x, x / p);
      }
      l.globalAlpha = Uw;
    }
  }
  getSidesCount() {
    return Bw;
  }
  async init(i) {
    const l = i.actualOptions;
    if (!(!l.preload || !this._engine.loadImage))
      for (const s of l.preload) await this._engine.loadImage(s);
  }
  loadShape(i) {
    if (i.shape !== "image" && i.shape !== "images") return;
    this._engine.images || (this._engine.images = []);
    const l = i.shapeData;
    if (!l) return;
    this._engine.images.find((r) => r.name === l.name || r.source === l.src) ||
      this.loadImageShape(l).then(() => {
        this.loadShape(i);
      });
  }
  particleInit(i, l) {
    if (l.shape !== "image" && l.shape !== "images") return;
    this._engine.images || (this._engine.images = []);
    const s = this._engine.images,
      r = l.shapeData;
    if (!r) return;
    const u = l.getFillColor(),
      d = s.find((p) => p.name === r.name || p.source === r.src);
    if (!d) return;
    const h = r.replaceColor ?? d.replaceColor;
    if (d.loading) {
      setTimeout(() => {
        this.particleInit(i, l);
      });
      return;
    }
    (async () => {
      let p;
      (d.svgData && u
        ? (p = await _w(d, r, u, l))
        : (p = {
            color: u,
            data: d,
            element: d.element,
            gif: d.gif,
            gifData: d.gifData,
            gifLoopCount: d.gifLoopCount,
            loaded: !0,
            ratio: r.width && r.height ? r.width / r.height : (d.ratio ?? Hw),
            replaceColor: h,
            source: r.src,
          }),
        p.ratio || (p.ratio = 1));
      const y = r.fill ?? l.shapeFill,
        x = r.close ?? l.shapeClose,
        b = { image: p, fill: y, close: x };
      ((l.image = b.image), (l.shapeFill = b.fill), (l.shapeClose = b.close));
    })();
  }
}
class Vw {
  constructor() {
    ((this.src = ""), (this.gif = !1));
  }
  load(i) {
    X(i) ||
      (i.gif !== void 0 && (this.gif = i.gif),
      i.height !== void 0 && (this.height = i.height),
      i.name !== void 0 && (this.name = i.name),
      i.replaceColor !== void 0 && (this.replaceColor = i.replaceColor),
      i.src !== void 0 && (this.src = i.src),
      i.width !== void 0 && (this.width = i.width));
  }
}
class Yw {
  constructor(i) {
    ((this.id = "imagePreloader"), (this._engine = i));
  }
  async getPlugin() {
    return (await Promise.resolve(), {});
  }
  loadOptions(i, l) {
    if (!(l != null && l.preload)) return;
    i.preload || (i.preload = []);
    const s = i.preload;
    for (const r of l.preload) {
      const u = s.find((d) => d.name === r.name || d.src === r.src);
      if (u) u.load(r);
      else {
        const d = new Vw();
        (d.load(r), s.push(d));
      }
    }
  }
  needsPlugin() {
    return !0;
  }
}
const Gw = 3;
function Xw(a) {
  a.loadImage ||
    (a.loadImage = async (i) => {
      if (!i.name && !i.src) throw new Error(`${ai} no image source provided`);
      if (
        (a.images || (a.images = []),
        !a.images.find((l) => l.name === i.name || l.source === i.src))
      )
        try {
          const l = {
            gif: i.gif ?? !1,
            name: i.name ?? i.src,
            source: i.src,
            type: i.src.substring(i.src.length - Gw),
            error: !1,
            loading: !0,
            replaceColor: i.replaceColor,
            ratio: i.width && i.height ? i.width / i.height : void 0,
          };
          a.images.push(l);
          let s;
          (i.gif ? (s = kw) : (s = i.replaceColor ? Cw : Cr), await s(l));
        } catch {
          throw new Error(`${ai} ${i.name ?? i.src} not found`);
        }
    });
}
async function Qw(a, i = !0) {
  (a.checkVersion("3.9.1"), Xw(a));
  const l = new Yw(a);
  (await a.addPlugin(l, i), await a.addShape(new qw(a), i));
}
class Fw extends ua {
  constructor() {
    (super(), (this.sync = !1));
  }
  load(i) {
    X(i) || (super.load(i), i.sync !== void 0 && (this.sync = i.sync));
  }
}
class Zw extends ua {
  constructor() {
    (super(), (this.sync = !1));
  }
  load(i) {
    X(i) || (super.load(i), i.sync !== void 0 && (this.sync = i.sync));
  }
}
class Pw {
  constructor() {
    ((this.count = 0), (this.delay = new Fw()), (this.duration = new Zw()));
  }
  load(i) {
    X(i) ||
      (i.count !== void 0 && (this.count = i.count),
      this.delay.load(i.delay),
      this.duration.load(i.duration));
  }
}
const Ia = 0,
  Kw = -1,
  oy = 0,
  ry = 0;
function Iw(a, i, l) {
  if (!a.life) return;
  const s = a.life;
  let r = !1;
  if (a.spawning)
    if (((s.delayTime += i.value), s.delayTime >= a.life.delay))
      ((r = !0), (a.spawning = !1), (s.delayTime = Ia), (s.time = Ia));
    else return;
  if (
    s.duration === Kw ||
    a.spawning ||
    (r ? (s.time = Ia) : (s.time += i.value), s.time < s.duration)
  )
    return;
  if (
    ((s.time = Ia), a.life.count > oy && a.life.count--, a.life.count === oy)
  ) {
    a.destroy();
    return;
  }
  const u = be(ry, l.width),
    d = be(ry, l.width);
  ((a.position.x = Gt(u)),
    (a.position.y = Gt(d)),
    (a.spawning = !0),
    (s.delayTime = Ia),
    (s.time = Ia),
    a.reset());
  const h = a.options.life;
  h &&
    ((s.delay = W(h.delay.value) * mt),
    (s.duration = W(h.duration.value) * mt));
}
const Wn = 0,
  cy = 1,
  uy = -1;
class Jw {
  constructor(i) {
    this.container = i;
  }
  init(i) {
    const l = this.container,
      s = i.options,
      r = s.life;
    r &&
      ((i.life = {
        delay: l.retina.reduceFactor
          ? ((W(r.delay.value) * (r.delay.sync ? cy : je())) /
              l.retina.reduceFactor) *
            mt
          : Wn,
        delayTime: Wn,
        duration: l.retina.reduceFactor
          ? ((W(r.duration.value) * (r.duration.sync ? cy : je())) /
              l.retina.reduceFactor) *
            mt
          : Wn,
        time: Wn,
        count: r.count,
      }),
      i.life.duration <= Wn && (i.life.duration = uy),
      i.life.count <= Wn && (i.life.count = uy),
      i.life && (i.spawning = i.life.delay > Wn));
  }
  isEnabled(i) {
    return !i.destroyed;
  }
  loadOptions(i, ...l) {
    i.life || (i.life = new Pw());
    for (const s of l) i.life.load(s == null ? void 0 : s.life);
  }
  update(i, l) {
    !this.isEnabled(i) || !i.life || Iw(i, l, this.container.canvas.size);
  }
}
async function $w(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addParticleUpdater(
      "life",
      async (l) => Promise.resolve(new Jw(l)),
      i,
    ));
}
function Ww(a) {
  const { context: i, particle: l, radius: s } = a,
    r = l.shapeData,
    u = 0;
  (i.moveTo(-s, u),
    i.lineTo(s, u),
    (i.lineCap = (r == null ? void 0 : r.cap) ?? "butt"));
}
const e8 = 1;
class t8 {
  constructor() {
    this.validTypes = ["line"];
  }
  draw(i) {
    Ww(i);
  }
  getSidesCount() {
    return e8;
  }
}
async function i8(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addShape(new t8(), i));
}
const fy = 0.5;
class n8 {
  init() {}
  isEnabled(i) {
    return (
      !ca() &&
      !i.destroyed &&
      i.container.actualOptions.interactivity.events.onHover.parallax.enable
    );
  }
  move(i) {
    const l = i.container,
      s = l.actualOptions,
      r = s.interactivity.events.onHover.parallax;
    if (ca() || !r.enable) return;
    const u = r.force,
      d = l.interactivity.mouse.position;
    if (!d) return;
    const h = l.canvas.size,
      p = { x: h.width * fy, y: h.height * fy },
      y = r.smooth,
      x = i.getRadius() / u,
      b = { x: (d.x - p.x) * x, y: (d.y - p.y) * x },
      { offset: w } = i;
    ((w.x += (b.x - w.x) / y), (w.y += (b.y - w.y) / y));
  }
}
async function a8(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addMover("parallax", () => Promise.resolve(new n8()), i));
}
const dy = 1e3,
  l8 = 1;
class s8 extends Kf {
  constructor(i) {
    super(i);
  }
  clear() {}
  init() {}
  interact(i) {
    const l = this.container;
    i.attractDistance === void 0 &&
      (i.attractDistance =
        W(i.options.move.attract.distance) * l.retina.pixelRatio);
    const s = i.attractDistance,
      r = i.getPosition(),
      u = l.particles.quadTree.queryCircle(r, s);
    for (const d of u) {
      if (
        i === d ||
        !d.options.move.attract.enable ||
        d.destroyed ||
        d.spawning
      )
        continue;
      const h = d.getPosition(),
        { dx: p, dy: y } = St(r, h),
        x = i.options.move.attract.rotate,
        b = p / (x.x * dy),
        w = y / (x.y * dy),
        z = d.size.value / i.size.value,
        T = l8 / z;
      ((i.velocity.x -= b * z),
        (i.velocity.y -= w * z),
        (d.velocity.x += b * T),
        (d.velocity.y += w * T));
    }
  }
  isEnabled(i) {
    return i.options.move.attract.enable;
  }
  reset() {}
}
async function o8(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "particlesAttract",
      (l) => Promise.resolve(new s8(l)),
      i,
    ));
}
const r8 = 0.5,
  c8 = 10,
  u8 = 0;
function hy(a, i, l, s, r, u) {
  const d = li((a.options.collisions.absorb.speed * r.factor) / c8, u8, s);
  ((a.size.value += d * r8),
    (l.size.value -= d),
    s <= u && ((l.size.value = 0), l.destroy()));
}
function f8(a, i, l, s) {
  const r = a.getRadius(),
    u = i.getRadius();
  r === void 0 && u !== void 0
    ? a.destroy()
    : r !== void 0 && u === void 0
      ? i.destroy()
      : r !== void 0 &&
        u !== void 0 &&
        (r >= u ? hy(a, r, i, u, l, s) : hy(i, u, a, r, l, s));
}
const my = (a) => {
  (a.collisionMaxSpeed === void 0 &&
    (a.collisionMaxSpeed = W(a.options.collisions.maxSpeed)),
    a.velocity.length > a.collisionMaxSpeed &&
      (a.velocity.length = a.collisionMaxSpeed));
};
function Ev(a, i) {
  (av(jf(a), jf(i)), my(a), my(i));
}
function d8(a, i) {
  (!a.unbreakable && !i.unbreakable && Ev(a, i),
    a.getRadius() === void 0 && i.getRadius() !== void 0
      ? a.destroy()
      : a.getRadius() !== void 0 && i.getRadius() === void 0
        ? i.destroy()
        : a.getRadius() !== void 0 &&
          i.getRadius() !== void 0 &&
          (a.getRadius() >= i.getRadius() ? i : a).destroy());
}
function h8(a, i, l, s) {
  switch (a.options.collisions.mode) {
    case rl.absorb: {
      f8(a, i, l, s);
      break;
    }
    case rl.bounce: {
      Ev(a, i);
      break;
    }
    case rl.destroy: {
      d8(a, i);
      break;
    }
  }
}
const m8 = 2;
class p8 extends Kf {
  constructor(i) {
    super(i);
  }
  clear() {}
  init() {}
  interact(i, l) {
    if (i.destroyed || i.spawning) return;
    const s = this.container,
      r = i.getPosition(),
      u = i.getRadius(),
      d = s.particles.quadTree.queryCircle(r, u * m8);
    for (const h of d) {
      if (
        i === h ||
        !h.options.collisions.enable ||
        i.options.collisions.mode !== h.options.collisions.mode ||
        h.destroyed ||
        h.spawning
      )
        continue;
      const p = h.getPosition(),
        y = h.getRadius();
      if (Math.abs(Math.round(r.z) - Math.round(p.z)) > u + y) continue;
      const x = Xt(r, p),
        b = u + y;
      x > b || h8(i, h, l, s.retina.pixelRatio);
    }
  }
  isEnabled(i) {
    return i.options.collisions.enable;
  }
  reset() {}
}
async function g8(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addInteractor(
      "particlesCollisions",
      (l) => Promise.resolve(new p8(l)),
      i,
    ));
}
const pf = 2;
class y8 extends gt {
  constructor(i, l, s, r) {
    (super(i, l, s), (this.canvasSize = r), (this.canvasSize = { ...r }));
  }
  contains(i) {
    const { width: l, height: s } = this.canvasSize,
      { x: r, y: u } = i;
    return (
      super.contains(i) ||
      super.contains({ x: r - l, y: u }) ||
      super.contains({ x: r - l, y: u - s }) ||
      super.contains({ x: r, y: u - s })
    );
  }
  intersects(i) {
    if (super.intersects(i)) return !0;
    const l = i,
      s = i,
      r = {
        x: i.position.x - this.canvasSize.width,
        y: i.position.y - this.canvasSize.height,
      };
    if (s.radius !== void 0) {
      const u = new gt(r.x, r.y, s.radius * pf);
      return super.intersects(u);
    } else if (l.size !== void 0) {
      const u = new pi(r.x, r.y, l.size.width * pf, l.size.height * pf);
      return super.intersects(u);
    }
    return !1;
  }
}
class v8 {
  constructor() {
    ((this.blur = 5),
      (this.color = new vt()),
      (this.color.value = "#000"),
      (this.enable = !1));
  }
  load(i) {
    X(i) ||
      (i.blur !== void 0 && (this.blur = i.blur),
      (this.color = vt.create(this.color, i.color)),
      i.enable !== void 0 && (this.enable = i.enable));
  }
}
class b8 {
  constructor() {
    ((this.enable = !1), (this.frequency = 1));
  }
  load(i) {
    X(i) ||
      (i.color !== void 0 && (this.color = vt.create(this.color, i.color)),
      i.enable !== void 0 && (this.enable = i.enable),
      i.frequency !== void 0 && (this.frequency = i.frequency),
      i.opacity !== void 0 && (this.opacity = i.opacity));
  }
}
class x8 {
  constructor() {
    ((this.blink = !1),
      (this.color = new vt()),
      (this.color.value = "#fff"),
      (this.consent = !1),
      (this.distance = 100),
      (this.enable = !1),
      (this.frequency = 1),
      (this.opacity = 1),
      (this.shadow = new v8()),
      (this.triangles = new b8()),
      (this.width = 1),
      (this.warp = !1));
  }
  load(i) {
    X(i) ||
      (i.id !== void 0 && (this.id = i.id),
      i.blink !== void 0 && (this.blink = i.blink),
      (this.color = vt.create(this.color, i.color)),
      i.consent !== void 0 && (this.consent = i.consent),
      i.distance !== void 0 && (this.distance = i.distance),
      i.enable !== void 0 && (this.enable = i.enable),
      i.frequency !== void 0 && (this.frequency = i.frequency),
      i.opacity !== void 0 && (this.opacity = i.opacity),
      this.shadow.load(i.shadow),
      this.triangles.load(i.triangles),
      i.width !== void 0 && (this.width = i.width),
      i.warp !== void 0 && (this.warp = i.warp));
  }
}
const py = 2,
  w8 = 1,
  tr = { x: 0, y: 0 },
  S8 = 0;
function z8(a, i, l, s, r) {
  const { dx: u, dy: d, distance: h } = St(a, i);
  if (!r || h <= l) return h;
  const p = { x: Math.abs(u), y: Math.abs(d) },
    y = { x: Math.min(p.x, s.width - p.x), y: Math.min(p.y, s.height - p.y) };
  return Math.sqrt(y.x ** py + y.y ** py);
}
class C8 extends Kf {
  constructor(i, l) {
    (super(i),
      (this._setColor = (s) => {
        if (!s.options.links) return;
        const r = this._linkContainer,
          u = s.options.links;
        let d =
          u.id === void 0
            ? r.particles.linksColor
            : r.particles.linksColors.get(u.id);
        if (d) return;
        const h = u.color;
        ((d = fv(this._engine, h, u.blink, u.consent)),
          u.id === void 0
            ? (r.particles.linksColor = d)
            : r.particles.linksColors.set(u.id, d));
      }),
      (this._linkContainer = i),
      (this._engine = l));
  }
  clear() {}
  init() {
    ((this._linkContainer.particles.linksColor = void 0),
      (this._linkContainer.particles.linksColors = new Map()));
  }
  interact(i) {
    if (!i.options.links) return;
    i.links = [];
    const l = i.getPosition(),
      s = this.container,
      r = s.canvas.size;
    if (l.x < tr.x || l.y < tr.y || l.x > r.width || l.y > r.height) return;
    const u = i.options.links,
      d = u.opacity,
      h = i.retina.linksDistance ?? S8,
      p = u.warp;
    let y;
    p ? (y = new y8(l.x, l.y, h, r)) : (y = new gt(l.x, l.y, h));
    const x = s.particles.quadTree.query(y);
    for (const b of x) {
      const w = b.options.links;
      if (
        i === b ||
        !(w != null && w.enable) ||
        u.id !== w.id ||
        b.spawning ||
        b.destroyed ||
        !b.links ||
        i.links.some((E) => E.destination === b) ||
        b.links.some((E) => E.destination === i)
      )
        continue;
      const z = b.getPosition();
      if (z.x < tr.x || z.y < tr.y || z.x > r.width || z.y > r.height) continue;
      const T = z8(l, z, h, r, p && w.warp);
      if (T > h) continue;
      const M = (w8 - T / h) * d;
      (this._setColor(i), i.links.push({ destination: b, opacity: M }));
    }
  }
  isEnabled(i) {
    var l;
    return !!((l = i.options.links) != null && l.enable);
  }
  loadParticlesOptions(i, ...l) {
    i.links || (i.links = new x8());
    for (const s of l) i.links.load(s == null ? void 0 : s.links);
  }
  reset() {}
}
async function _8(a, i = !0) {
  await a.addInteractor(
    "particlesLinks",
    async (l) => Promise.resolve(new C8(l, a)),
    i,
  );
}
function T8(a, i, l, s) {
  (a.beginPath(),
    a.moveTo(i.x, i.y),
    a.lineTo(l.x, l.y),
    a.lineTo(s.x, s.y),
    a.closePath());
}
function E8(a) {
  let i = !1;
  const {
    begin: l,
    end: s,
    engine: r,
    maxDistance: u,
    context: d,
    canvasSize: h,
    width: p,
    backgroundMask: y,
    colorLine: x,
    opacity: b,
    links: w,
  } = a;
  if (Xt(l, s) <= u) (gs(d, l, s), (i = !0));
  else if (w.warp) {
    let T, M;
    const E = { x: s.x - h.width, y: s.y },
      A = St(l, E);
    if (A.distance <= u) {
      const q = l.y - (A.dy / A.dx) * l.x;
      ((T = { x: 0, y: q }), (M = { x: h.width, y: q }));
    } else {
      const q = { x: s.x, y: s.y - h.height },
        Y = St(l, q);
      if (Y.distance <= u) {
        const Z = -(l.y - (Y.dy / Y.dx) * l.x) / (Y.dy / Y.dx);
        ((T = { x: Z, y: 0 }), (M = { x: Z, y: h.height }));
      } else {
        const G = { x: s.x - h.width, y: s.y - h.height },
          Z = St(l, G);
        if (Z.distance <= u) {
          const te = l.y - (Z.dy / Z.dx) * l.x;
          ((T = { x: -te / (Z.dy / Z.dx), y: te }),
            (M = { x: T.x + h.width, y: T.y + h.height }));
        }
      }
    }
    T && M && (gs(d, l, T), gs(d, s, M), (i = !0));
  }
  if (!i) return;
  ((d.lineWidth = p),
    y.enable && (d.globalCompositeOperation = y.composite),
    (d.strokeStyle = Zi(x, b)));
  const { shadow: z } = w;
  if (z.enable) {
    const T = hi(r, z.color);
    T && ((d.shadowBlur = z.blur), (d.shadowColor = Zi(T)));
  }
  d.stroke();
}
function j8(a) {
  const {
    context: i,
    pos1: l,
    pos2: s,
    pos3: r,
    backgroundMask: u,
    colorTriangle: d,
    opacityTriangle: h,
  } = a;
  (T8(i, l, s, r),
    u.enable && (i.globalCompositeOperation = u.composite),
    (i.fillStyle = Zi(d, h)),
    i.fill());
}
function M8(a) {
  return (a.sort((i, l) => i - l), a.join("_"));
}
function gy(a, i) {
  const l = M8(a.map((r) => r.id));
  let s = i.get(l);
  return (s === void 0 && ((s = je()), i.set(l, s)), s);
}
const yy = 0,
  gf = 0,
  vy = 0,
  D8 = 0.5,
  O8 = 1;
class R8 {
  constructor(i, l) {
    ((this._drawLinkLine = (s, r) => {
      const u = s.options.links;
      if (!(u != null && u.enable)) return;
      const d = this._container,
        h = d.actualOptions,
        p = r.destination,
        y = s.getPosition(),
        x = p.getPosition();
      let b = r.opacity;
      d.canvas.draw((w) => {
        var q;
        let z;
        const T = (q = s.options.twinkle) == null ? void 0 : q.lines;
        if (T != null && T.enable) {
          const Y = T.frequency,
            G = hi(this._engine, T.color);
          je() < Y && G && ((z = G), (b = W(T.opacity)));
        }
        if (!z) {
          const Y =
            u.id !== void 0
              ? d.particles.linksColors.get(u.id)
              : d.particles.linksColor;
          z = Df(s, p, Y);
        }
        if (!z) return;
        const M = s.retina.linksWidth ?? gf,
          E = s.retina.linksDistance ?? vy,
          { backgroundMask: A } = h;
        E8({
          context: w,
          width: M,
          begin: y,
          end: x,
          engine: this._engine,
          maxDistance: E,
          canvasSize: d.canvas.size,
          links: u,
          backgroundMask: A,
          colorLine: z,
          opacity: b,
        });
      });
    }),
      (this._drawLinkTriangle = (s, r, u) => {
        const d = s.options.links;
        if (!(d != null && d.enable)) return;
        const h = d.triangles;
        if (!h.enable) return;
        const p = this._container,
          y = p.actualOptions,
          x = r.destination,
          b = u.destination,
          w = h.opacity ?? (r.opacity + u.opacity) * D8;
        w <= yy ||
          p.canvas.draw((z) => {
            const T = s.getPosition(),
              M = x.getPosition(),
              E = b.getPosition(),
              A = s.retina.linksDistance ?? vy;
            if (Xt(T, M) > A || Xt(E, M) > A || Xt(E, T) > A) return;
            let q = hi(this._engine, h.color);
            if (!q) {
              const Y =
                d.id !== void 0
                  ? p.particles.linksColors.get(d.id)
                  : p.particles.linksColor;
              q = Df(s, x, Y);
            }
            q &&
              j8({
                context: z,
                pos1: T,
                pos2: M,
                pos3: E,
                backgroundMask: y.backgroundMask,
                colorTriangle: q,
                opacityTriangle: w,
              });
          });
      }),
      (this._drawTriangles = (s, r, u, d) => {
        var y, x, b;
        const h = u.destination;
        if (
          !(
            (y = s.links) != null &&
            y.triangles.enable &&
            (x = h.options.links) != null &&
            x.triangles.enable
          )
        )
          return;
        const p =
          (b = h.links) == null
            ? void 0
            : b.filter((w) => {
                const z = this._getLinkFrequency(h, w.destination);
                return (
                  h.options.links &&
                  z <= h.options.links.frequency &&
                  d.findIndex((M) => M.destination === w.destination) >= 0
                );
              });
        if (p != null && p.length)
          for (const w of p) {
            const z = w.destination;
            this._getTriangleFrequency(r, h, z) > s.links.triangles.frequency ||
              this._drawLinkTriangle(r, u, w);
          }
      }),
      (this._getLinkFrequency = (s, r) => gy([s, r], this._freqs.links)),
      (this._getTriangleFrequency = (s, r, u) =>
        gy([s, r, u], this._freqs.triangles)),
      (this._container = i),
      (this._engine = l),
      (this._freqs = { links: new Map(), triangles: new Map() }));
  }
  drawParticle(i, l) {
    const { links: s, options: r } = l;
    if (!(s != null && s.length)) return;
    const u = s.filter(
      (d) =>
        r.links &&
        (r.links.frequency >= O8 ||
          this._getLinkFrequency(l, d.destination) <= r.links.frequency),
    );
    for (const d of u)
      (this._drawTriangles(r, l, d, u),
        d.opacity > yy &&
          (l.retina.linksWidth ?? gf) > gf &&
          this._drawLinkLine(l, d));
  }
  async init() {
    ((this._freqs.links = new Map()),
      (this._freqs.triangles = new Map()),
      await Promise.resolve());
  }
  particleCreated(i) {
    if (((i.links = []), !i.options.links)) return;
    const l = this._container.retina.pixelRatio,
      { retina: s } = i,
      { distance: r, width: u } = i.options.links;
    ((s.linksDistance = r * l), (s.linksWidth = u * l));
  }
  particleDestroyed(i) {
    i.links = [];
  }
}
class N8 {
  constructor(i) {
    ((this.id = "links"), (this._engine = i));
  }
  getPlugin(i) {
    return Promise.resolve(new R8(i, this._engine));
  }
  loadOptions() {}
  needsPlugin() {
    return !0;
  }
}
async function A8(a, i = !0) {
  const l = new N8(a);
  await a.addPlugin(l, i);
}
async function k8(a, i = !0) {
  (a.checkVersion("3.9.1"), await _8(a, i), await A8(a, i));
}
const L8 = 180,
  ir = { x: 0, y: 0 },
  U8 = 2;
function B8(a, i, l) {
  const { context: s } = a,
    r = l.count.numerator * l.count.denominator,
    u = l.count.numerator / l.count.denominator,
    d = (L8 * (u - U8)) / u,
    h = Math.PI - En(d);
  if (s) {
    (s.beginPath(), s.translate(i.x, i.y), s.moveTo(ir.x, ir.y));
    for (let p = 0; p < r; p++)
      (s.lineTo(l.length, ir.y), s.translate(l.length, ir.y), s.rotate(h));
  }
}
const H8 = 5;
class jv {
  draw(i) {
    const { particle: l, radius: s } = i,
      r = this.getCenter(l, s),
      u = this.getSidesData(l, s);
    B8(i, r, u);
  }
  getSidesCount(i) {
    const l = i.shapeData;
    return Math.round(W((l == null ? void 0 : l.sides) ?? H8));
  }
}
const by = 3.5,
  xy = 2.66,
  q8 = 3;
class V8 extends jv {
  constructor() {
    (super(...arguments), (this.validTypes = ["polygon"]));
  }
  getCenter(i, l) {
    return { x: -l / (i.sides / by), y: -l / (xy / by) };
  }
  getSidesData(i, l) {
    const s = i.sides;
    return {
      count: { denominator: 1, numerator: s },
      length: (l * xy) / (s / q8),
    };
  }
}
const Y8 = 1.66,
  G8 = 3,
  X8 = 2;
class Q8 extends jv {
  constructor() {
    (super(...arguments), (this.validTypes = ["triangle"]));
  }
  getCenter(i, l) {
    return { x: -l, y: l / Y8 };
  }
  getSidesCount() {
    return G8;
  }
  getSidesData(i, l) {
    const s = l * X8;
    return { count: { denominator: 2, numerator: 3 }, length: s };
  }
}
async function F8(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addShape(new V8(), i));
}
async function Z8(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addShape(new Q8(), i));
}
async function P8(a, i = !0) {
  (a.checkVersion("3.9.1"), await F8(a, i), await Z8(a, i));
}
class K8 {
  constructor() {
    ((this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1));
  }
  load(i) {
    X(i) ||
      (i.enable !== void 0 && (this.enable = i.enable),
      i.speed !== void 0 && (this.speed = be(i.speed)),
      i.decay !== void 0 && (this.decay = be(i.decay)),
      i.sync !== void 0 && (this.sync = i.sync));
  }
}
class I8 extends ua {
  constructor() {
    (super(),
      (this.animation = new K8()),
      (this.direction = fi.clockwise),
      (this.path = !1),
      (this.value = 0));
  }
  load(i) {
    X(i) ||
      (super.load(i),
      i.direction !== void 0 && (this.direction = i.direction),
      this.animation.load(i.animation),
      i.path !== void 0 && (this.path = i.path));
  }
}
const Mv = 2,
  J8 = Math.PI * Mv,
  $8 = 1,
  W8 = 360;
class eS {
  constructor(i) {
    this.container = i;
  }
  init(i) {
    const l = i.options.rotate;
    if (!l) return;
    ((i.rotate = {
      enable: l.animation.enable,
      value: En(W(l.value)),
      min: 0,
      max: J8,
    }),
      (i.pathRotation = l.path));
    let s = l.direction;
    switch (
      (s === fi.random &&
        (s = Math.floor(je() * Mv) > 0 ? fi.counterClockwise : fi.clockwise),
      s)
    ) {
      case fi.counterClockwise:
      case "counterClockwise":
        i.rotate.status = Je.decreasing;
        break;
      case fi.clockwise:
        i.rotate.status = Je.increasing;
        break;
    }
    const r = l.animation;
    (r.enable &&
      ((i.rotate.decay = $8 - W(r.decay)),
      (i.rotate.velocity =
        (W(r.speed) / W8) * this.container.retina.reduceFactor),
      r.sync || (i.rotate.velocity *= je())),
      (i.rotation = i.rotate.value));
  }
  isEnabled(i) {
    const l = i.options.rotate;
    return l
      ? !i.destroyed &&
          !i.spawning &&
          (!!l.value || l.animation.enable || l.path)
      : !1;
  }
  loadOptions(i, ...l) {
    i.rotate || (i.rotate = new I8());
    for (const s of l) i.rotate.load(s == null ? void 0 : s.rotate);
  }
  update(i, l) {
    this.isEnabled(i) &&
      ((i.isRotating = !!i.rotate),
      i.rotate &&
        (Qf(i, i.rotate, !1, oa.none, l), (i.rotation = i.rotate.value)));
  }
}
async function tS(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addParticleUpdater("rotate", (l) => Promise.resolve(new eS(l)), i));
}
const iS = 2,
  nS = Math.sqrt(iS),
  aS = 2;
function lS(a) {
  const { context: i, radius: l } = a,
    s = l / nS,
    r = s * aS;
  i.rect(-s, -s, r, r);
}
const sS = 4;
class oS {
  constructor() {
    this.validTypes = ["edge", "square"];
  }
  draw(i) {
    lS(i);
  }
  getSidesCount() {
    return sS;
  }
}
async function rS(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addShape(new oS(), i));
}
const cS = 2,
  Ja = { x: 0, y: 0 };
function uS(a) {
  const { context: i, particle: l, radius: s } = a,
    r = l.sides,
    u = l.starInset ?? cS;
  i.moveTo(Ja.x, Ja.y - s);
  for (let d = 0; d < r; d++)
    (i.rotate(Math.PI / r),
      i.lineTo(Ja.x, Ja.y - s * u),
      i.rotate(Math.PI / r),
      i.lineTo(Ja.x, Ja.y - s));
}
const fS = 2,
  dS = 5;
class hS {
  constructor() {
    this.validTypes = ["star"];
  }
  draw(i) {
    uS(i);
  }
  getSidesCount(i) {
    const l = i.shapeData;
    return Math.round(W((l == null ? void 0 : l.sides) ?? dS));
  }
  particleInit(i, l) {
    const s = l.shapeData;
    l.starInset = W((s == null ? void 0 : s.inset) ?? fS);
  }
}
async function mS(a, i = !0) {
  (a.checkVersion("3.9.1"), await a.addShape(new hS(), i));
}
const pS = 1;
class gS {
  constructor(i, l) {
    ((this._container = i), (this._engine = l));
  }
  init(i) {
    var d;
    const l = this._container,
      s = i.options,
      r = ni(s.stroke, i.id, s.reduceDuplicates);
    ((i.strokeWidth = W(r.width) * l.retina.pixelRatio),
      (i.strokeOpacity = W(r.opacity ?? pS)),
      (i.strokeAnimation = (d = r.color) == null ? void 0 : d.animation));
    const u = vs(this._engine, r.color) ?? i.getFillColor();
    u && (i.strokeColor = dv(u, i.strokeAnimation, l.retina.reduceFactor));
  }
  isEnabled(i) {
    const l = i.strokeAnimation,
      { strokeColor: s } = i;
    return (
      !i.destroyed &&
      !i.spawning &&
      !!l &&
      (((s == null ? void 0 : s.h.value) !== void 0 && s.h.enable) ||
        ((s == null ? void 0 : s.s.value) !== void 0 && s.s.enable) ||
        ((s == null ? void 0 : s.l.value) !== void 0 && s.l.enable))
    );
  }
  update(i, l) {
    this.isEnabled(i) && hv(i.strokeColor, l);
  }
}
async function yS(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a.addParticleUpdater(
      "strokeColor",
      (l) => Promise.resolve(new gS(l, a)),
      i,
    ));
}
async function vS(a, i = !0) {
  (a.checkVersion("3.9.1"),
    await a8(a, !1),
    await r5(a, !1),
    await y5(a, !1),
    await _5(a, !1),
    await k5(a, !1),
    await Q5(a, !1),
    await P5(a, !1),
    await W5(a, !1),
    await nw(a, !1),
    await mw(a, !1),
    await bw(a, !1),
    await o8(a, !1),
    await g8(a, !1),
    await k8(a, !1),
    await $6(a, !1),
    await t5(a, !1),
    await Qw(a, !1),
    await i8(a, !1),
    await P8(a, !1),
    await rS(a, !1),
    await mS(a, !1),
    await $w(a, !1),
    await tS(a, !1),
    await yS(a, !1),
    await J6(a, i));
}
function bS() {
  const a = D.useRef(null),
    i = D.useRef(null),
    [l, s] = useState(!1),
    { t: r } = Ot();
  D.useEffect(() => {
    n6(async (h) => {
      await vS(h);
    }).then(() => {
      s(!0);
    });
  }, []);
  const u = (h) => {},
    d = D.useMemo(
      () => ({
        fullScreen: { enable: !1 },
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: !0, mode: "push" },
            onHover: { enable: !0, mode: "repulse" },
            resize: !0,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#6366f1", "#ec4899", "#8b5cf6", "#3b82f6"] },
          links: {
            color: "#9ca3af",
            distance: 150,
            enable: !0,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: !0,
            outModes: { default: "bounce" },
            random: !1,
            speed: 1,
            straight: !1,
          },
          number: { density: { enable: !0, area: 800 }, value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: !0,
      }),
      [],
    );
  return (
    D.useEffect(() => {
      const h = new Mx(a.current, {
        strings: [r("hero.typedStrings.0"), r("hero.typedStrings.1")],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: !0,
        showCursor: !0,
        cursorChar: "|",
      });
      return () => {
        h.destroy();
      };
    }, [r]),
    D.useEffect(() => {
      const h = () => {
        i.current &&
          (window.scrollY > 50
            ? (i.current.style.opacity = "0")
            : (i.current.style.opacity = "1"));
      };
      return (
        window.addEventListener("scroll", h),
        () => window.removeEventListener("scroll", h)
      );
    }, []),
    m.jsxs("section", {
      id: "home",
      className: "hero-section",
      children: [
        m.jsxs("div", {
          className: "hero-bg",
          children: [
            m.jsx("div", { className: "hero-gradient hero-gradient-1" }),
            m.jsx("div", { className: "hero-gradient hero-gradient-2" }),
            m.jsx("div", { className: "hero-gradient hero-gradient-3" }),
          ],
        }),
        m.jsx("div", {
          className: "particles-container",
          children:
            l &&
            m.jsx(i6, {
              id: "tsparticles",
              particlesLoaded: u,
              options: d,
              className: "w-full h-full",
            }),
        }),
        m.jsx("div", {
          className:
            "container relative z-10 px-4 md:px-6 max-w-7xl mx-auto h-full flex flex-col justify-center",
          children: m.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
            children: [
              m.jsxs("div", {
                className: "lg:col-span-7 pt-20 lg:pt-0",
                children: [
                  m.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-glass)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md mb-8 animate-fadeInUp",
                    children: [
                      m.jsxs("span", {
                        className: "relative flex h-3 w-3",
                        children: [
                          m.jsx("span", {
                            className:
                              "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
                          }),
                          m.jsx("span", {
                            className:
                              "relative inline-flex rounded-full h-3 w-3 bg-emerald-500",
                          }),
                        ],
                      }),
                      m.jsx("span", {
                        className:
                          "text-sm font-medium text-[var(--color-text-muted)] tracking-wide",
                        children: "Available for work",
                      }),
                    ],
                  }),
                  m.jsxs("h1", {
                    className:
                      "text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fadeInUp animate-delay-100 font-bold",
                    style: { fontFamily: "var(--font-display)" },
                    children: [
                      r("hero.greeting"),
                      " ",
                      m.jsx("br", {}),
                      m.jsx("span", {
                        className: "gradient-text",
                        children: r("hero.name"),
                      }),
                      m.jsx("br", {}),
                      m.jsx("div", {
                        className: "h-[1.2em] mt-2",
                        children: m.jsx("span", {
                          ref: a,
                          className:
                            "text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-main)] font-medium",
                        }),
                      }),
                    ],
                  }),
                  m.jsx("p", {
                    className:
                      "text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl animate-fadeInUp animate-delay-200",
                    children: r("hero.subtitle"),
                  }),
                  m.jsxs("div", {
                    className:
                      "flex flex-wrap items-center gap-6 mb-12 animate-fadeInUp animate-delay-300",
                    children: [
                      m.jsxs("a", {
                        href: "#contact",
                        className: "btn btn-primary group",
                        children: [
                          m.jsx("span", { children: r("hero.cta") }),
                          m.jsx(wx, {
                            className:
                              "transition-transform group-hover:translate-x-1",
                          }),
                        ],
                      }),
                      m.jsxs("a", {
                        href: "/CV.pdf",
                        download: !0,
                        className: "btn btn-outline group",
                        children: [
                          m.jsx("span", { children: r("hero.downloadCv") }),
                          m.jsx(Qy, {
                            className:
                              "transition-transform group-hover:-translate-y-1",
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className:
                      "flex items-center gap-6 animate-fadeInUp animate-delay-400",
                    children: [
                      m.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-[var(--color-text-muted)] border-r border-[var(--color-border-glass)] pr-6",
                        children: [
                          m.jsx(ux, { className: "text-primary" }),
                          m.jsx("span", {
                            className: "text-sm font-medium",
                            children: r("hero.location"),
                          }),
                        ],
                      }),
                      m.jsx(wr, {}),
                    ],
                  }),
                ],
              }),
              m.jsxs("div", {
                className:
                  "lg:col-span-5 relative hidden lg:block animate-fadeInUp animate-delay-500",
                children: [
                  m.jsx("div", {
                    className:
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-3xl rounded-full -z-10",
                  }),
                  m.jsxs("div", {
                    className:
                      "relative w-full aspect-square max-w-[500px] mx-auto",
                    children: [
                      m.jsx("div", {
                        className:
                          "absolute inset-0 rounded-2xl overflow-hidden glass-card border border-[var(--color-border-glass)] p-2 transform rotate-3 transition-transform hover:rotate-0 duration-500 z-10 shadow-2xl",
                        children: m.jsxs("div", {
                          className:
                            "w-full h-full rounded-xl overflow-hidden relative",
                          children: [
                            m.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10",
                            }),
                            m.jsx("img", {
                              src: "/Img/Profilo.jpg",
                              alt: "Andrea Feliziani",
                              className: "w-full h-full object-cover",
                            }),
                            m.jsxs("div", {
                              className: "absolute bottom-6 left-6 z-20",
                              children: [
                                m.jsx("h3", {
                                  className:
                                    "text-2xl font-bold text-white mb-1",
                                  style: { fontFamily: "var(--font-display)" },
                                  children: "Andrea Feliziani",
                                }),
                                m.jsx("p", {
                                  className:
                                    "text-white/80 text-sm font-medium",
                                  children: "Digital Creator",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      m.jsxs("div", {
                        className:
                          "absolute -top-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-4 z-20 animate-float shadow-xl border border-[var(--color-border-glass)] bg-[#151525]/80 backdrop-blur-xl",
                        children: [
                          m.jsx("div", {
                            className:
                              "w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl",
                            children: m.jsx(Xy, {}),
                          }),
                          m.jsxs("div", {
                            children: [
                              m.jsx("h4", {
                                className: "font-bold text-text-main text-sm",
                                children: r("hero.cardDesign"),
                              }),
                              m.jsx("p", {
                                className: "text-text-muted text-xs",
                                children: "Figma, Adobe XD",
                              }),
                            ],
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className:
                          "absolute -bottom-8 -left-8 glass-card p-4 rounded-xl flex items-center gap-4 z-20 animate-float-delayed shadow-xl border border-[var(--color-border-glass)] bg-[#151525]/80 backdrop-blur-xl",
                        children: [
                          m.jsx("div", {
                            className:
                              "w-12 h-12 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xl",
                            children: m.jsx(Fy, {}),
                          }),
                          m.jsxs("div", {
                            children: [
                              m.jsx("h4", {
                                className: "font-bold text-text-main text-sm",
                                children: r("hero.cardDev"),
                              }),
                              m.jsx("p", {
                                className: "text-text-muted text-xs",
                                children: "React, Tailwind",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        m.jsxs("div", {
          ref: i,
          className:
            "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] opacity-100 transition-opacity duration-300 hidden md:flex animate-fadeInUp animate-delay-500",
          children: [
            m.jsx("span", {
              className: "text-sm font-medium tracking-wide uppercase",
              children: "Scroll",
            }),
            m.jsx("div", {
              className:
                "w-[1px] h-12 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent",
            }),
          ],
        }),
      ],
    })
  );
}
function lt({ badge: a, title: i }) {
  return m.jsxs("div", {
    className: "text-center mb-16",
    children: [
      m.jsx("div", { className: "badge-custom", children: a }),
      m.jsx("h2", {
        className: "text-3xl md:text-4xl mt-2",
        style: { fontFamily: "var(--font-display)" },
        children: i,
      }),
    ],
  });
}
const xS = [
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
    "Indesign",
    "Lightroom",
  ],
  wS = ["HTML", "CSS", "Bootstrap", "JavaScript", "React"];
function SS() {
  const a = D.useRef(null),
    i = D.useRef(null),
    { t: l } = Ot();
  return (
    D.useEffect(() => {
      const s = new IntersectionObserver(
        (r) => {
          r.forEach((u) => {
            u.isIntersecting &&
              (u.target.classList.add("animate-fadeInUp"),
              (u.target.style.opacity = "1"));
          });
        },
        { threshold: 0.2 },
      );
      return (
        a.current && s.observe(a.current),
        i.current && s.observe(i.current),
        () => s.disconnect()
      );
    }, []),
    m.jsx("section", {
      id: "about",
      className: "py-20 relative",
      children: m.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 md:px-6",
        children: [
          m.jsx(lt, { badge: l("about.badge"), title: l("about.title") }),
          m.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            children: [
              m.jsx("div", {
                ref: a,
                style: { opacity: 0 },
                children: m.jsxs("div", {
                  className: "glass-card text-center",
                  children: [
                    m.jsx("p", {
                      className: "text-[var(--color-text-muted)] mb-6",
                      children: l("about.bio1"),
                    }),
                    m.jsx("p", {
                      className: "text-[var(--color-text-muted)] mb-6",
                      children: l("about.bio2"),
                    }),
                    m.jsx("p", {
                      className: "text-[var(--color-text-muted)] mb-6",
                      children: l("about.bio3"),
                    }),
                    m.jsxs("a", {
                      href: "/CV.pdf",
                      download: !0,
                      className: "btn btn-outline",
                      children: [
                        m.jsx("span", { children: l("about.downloadCv") }),
                        m.jsx(Qy, {}),
                      ],
                    }),
                  ],
                }),
              }),
              m.jsxs("div", {
                ref: i,
                className: "flex flex-col gap-6",
                style: { opacity: 0 },
                children: [
                  m.jsxs("div", {
                    className: "glass-card",
                    children: [
                      m.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4",
                        style: {
                          backgroundColor: "rgba(99,102,241,0.1)",
                          color: "var(--color-primary)",
                        },
                        children: m.jsx(Xy, {}),
                      }),
                      m.jsx("h3", {
                        className: "text-lg font-semibold mb-3",
                        style: { fontFamily: "var(--font-display)" },
                        children: l("about.designTitle"),
                      }),
                      m.jsx("div", {
                        className: "skill-tags",
                        children: xS.map((s) =>
                          m.jsx(
                            "span",
                            { className: "skill-tag", children: s },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "glass-card",
                    children: [
                      m.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4",
                        style: {
                          backgroundColor: "rgba(236,72,153,0.1)",
                          color: "var(--color-secondary)",
                        },
                        children: m.jsx(Fy, {}),
                      }),
                      m.jsx("h3", {
                        className: "text-lg font-semibold mb-3",
                        style: { fontFamily: "var(--font-display)" },
                        children: l("about.devTitle"),
                      }),
                      m.jsx("div", {
                        className: "skill-tags",
                        children: wS.map((s) =>
                          m.jsx(
                            "span",
                            { className: "skill-tag", children: s },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function zS({ target: a, started: i }) {
  const [l, s] = D.useState(0);
  return (
    D.useEffect(() => {
      if (!i) return;
      const d = 2e3 / a;
      let h = 0;
      const p = setInterval(() => {
        ((h += 1), s(h), h >= a && clearInterval(p));
      }, d);
      return () => clearInterval(p);
    }, [i, a]),
    m.jsx("span", { children: l })
  );
}
function CS() {
  const a = D.useRef(null),
    [i, l] = D.useState(!1),
    { t: s } = Ot(),
    r = [
      { label: s("counters.company"), value: "Aton it", isText: !0 },
      { label: s("counters.experience"), value: 2, isText: !1 },
      { label: s("counters.certifications"), value: 11, isText: !1 },
    ];
  return (
    D.useEffect(() => {
      const u = new IntersectionObserver(
        ([d]) => {
          d.isIntersecting && l(!0);
        },
        { threshold: 0.3 },
      );
      return (a.current && u.observe(a.current), () => u.disconnect());
    }, []),
    m.jsx("section", {
      className: "counter-section",
      ref: a,
      children: m.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 md:px-6",
        children: [
          m.jsx("h2", {
            className: "text-3xl md:text-4xl text-center mb-12",
            style: { fontFamily: "var(--font-display)" },
            children: s("counters.title"),
          }),
          m.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
            children: r.map(({ label: u, value: d, isText: h }) =>
              m.jsxs(
                "div",
                {
                  className: "glass-card text-center py-8",
                  children: [
                    m.jsx("div", {
                      className:
                        "text-4xl md:text-5xl font-bold mb-2 gradient-text",
                      children: h ? d : m.jsx(zS, { target: d, started: i }),
                    }),
                    m.jsx("div", {
                      className: "text-[var(--color-text-muted)]",
                      children: u,
                    }),
                  ],
                },
                u,
              ),
            ),
          }),
        ],
      }),
    })
  );
}
function _S() {
  const a = D.useRef([]),
    { t: i } = Ot(),
    l = [
      {
        period: "2022 - 2024",
        title: i("education.masters.title"),
        subtitle: i("education.masters.subtitle"),
        text: i("education.masters.text"),
        badgeClass: "",
      },
      {
        period: "2018 - 2021",
        title: i("education.bachelors.title"),
        subtitle: i("education.bachelors.subtitle"),
        text: i("education.bachelors.text"),
        badgeClass: "timeline-badge-secondary",
      },
      {
        period: "2012 - 2017",
        title: i("education.diploma.title"),
        subtitle: i("education.diploma.subtitle"),
        text: i("education.diploma.text"),
        badgeClass: "timeline-badge-accent",
      },
    ];
  return (
    D.useEffect(() => {
      const s = new IntersectionObserver(
        (r) => {
          r.forEach((u) => {
            u.isIntersecting && u.target.classList.add("animate");
          });
        },
        { threshold: 0.2 },
      );
      return (
        a.current.forEach((r) => {
          r && s.observe(r);
        }),
        () => s.disconnect()
      );
    }, []),
    m.jsx("section", {
      id: "education",
      className: "py-20 relative",
      children: m.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 md:px-6",
        children: [
          m.jsx(lt, {
            badge: i("education.badge"),
            title: i("education.title"),
          }),
          m.jsxs("div", {
            className: "timeline-container",
            children: [
              m.jsx("div", { className: "timeline-line" }),
              l.map((s, r) =>
                m.jsxs(
                  "div",
                  {
                    className: "timeline-item",
                    ref: (u) => (a.current[r] = u),
                    children: [
                      m.jsx("div", { className: "timeline-dot" }),
                      m.jsxs("div", {
                        className: "glass-card",
                        children: [
                          m.jsx("div", {
                            className: `timeline-badge ${s.badgeClass}`,
                            children: s.period,
                          }),
                          m.jsx("h3", {
                            className: "text-lg font-semibold mb-1",
                            style: { fontFamily: "var(--font-display)" },
                            children: s.title,
                          }),
                          m.jsx("h4", {
                            className:
                              "text-sm font-medium text-[var(--color-text-muted)] mb-2",
                            children: s.subtitle,
                          }),
                          m.jsx("p", {
                            className:
                              "text-sm text-[var(--color-text-muted)] m-0",
                            children: s.text,
                          }),
                        ],
                      }),
                    ],
                  },
                  s.period,
                ),
              ),
            ],
          }),
        ],
      }),
    })
  );
}
function TS() {
  const [a, i] = D.useState("all"),
    l = D.useRef([]),
    { t: s } = Ot(),
    r = [
      {
        id: "study",
        title: "Study Ward",
        description: s("portfolio.projects.study.description"),
        image: "/Img/Group 2.png",
        categories: ["UI/UX Design"],
        link: "/projects/study",
      },
      {
        id: "opla",
        title: "Oplà",
        description: s("portfolio.projects.opla.description"),
        image: "/Img/opmobile.png",
        categories: ["UI/UX Design"],
        link: "/projects/opla",
      },
      {
        id: "serenity",
        title: "Serenity Dream Travels",
        description: s("portfolio.projects.serenity.description"),
        image: "/Img/heroimg.png",
        categories: ["UI/UX Design", "Front-End Project"],
        link: "/projects/serenity",
      },
      {
        id: "botanicare",
        title: "Botanicare",
        description: s("portfolio.projects.botanicare.description"),
        image: "/Img/botanicare.png",
        categories: ["UI/UX Design"],
        link: "/projects/botanicare",
      },
      {
        id: "valeri",
        title: "Valeri",
        description: s("portfolio.projects.valeri.description"),
        image: "/Img/vr.png",
        categories: ["UI/UX Design"],
        link: "/projects/valeri",
      },
      {
        id: "secure",
        title: "Secure it with Cyber",
        description: s("portfolio.projects.secure.description"),
        image: "/Img/minilogo.png",
        categories: ["Front-End Project"],
        link: "/projects/secure-it",
      },
    ],
    u = [
      { label: s("portfolio.filterAll"), value: "all" },
      { label: s("portfolio.filterDesign"), value: "ui/ux" },
      { label: s("portfolio.filterFrontend"), value: "front-end" },
    ];
  D.useEffect(() => {
    const h = new IntersectionObserver(
      (p) => {
        p.forEach((y) => {
          y.isIntersecting &&
            ((y.target.style.opacity = "1"),
            (y.target.style.transform = "translateY(0)"));
        });
      },
      { threshold: 0.1 },
    );
    return (
      l.current.forEach((p) => {
        p && h.observe(p);
      }),
      () => h.disconnect()
    );
  }, []);
  const d = (h) =>
    a === "all"
      ? !0
      : h.categories.some((p) => p.toLowerCase().includes(a.toLowerCase()));
  return m.jsx("section", {
    id: "portfolio",
    className: "py-20 relative",
    children: m.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 md:px-6",
      children: [
        m.jsx(lt, { badge: s("portfolio.badge"), title: s("portfolio.title") }),
        m.jsx("div", {
          className: "flex justify-center gap-3 mb-12 flex-wrap",
          children: u.map(({ label: h, value: p }) =>
            m.jsx(
              "button",
              {
                className: `filter-btn ${a === p ? "active" : ""}`,
                onClick: () => i(p),
                children: h,
              },
              p,
            ),
          ),
        }),
        m.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: r.map((h, p) =>
            m.jsx(
              "div",
              {
                ref: (y) => (l.current[p] = y),
                className: `portfolio-card-wrapper transition-all duration-400 ${d(h) ? "" : "hidden"}`,
                style: {
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                },
                children: m.jsxs("div", {
                  className: "portfolio-card",
                  children: [
                    m.jsxs("div", {
                      className: "portfolio-image",
                      children: [
                        m.jsx("img", { src: h.image, alt: h.title }),
                        m.jsx("div", {
                          className: "portfolio-overlay",
                          children: m.jsxs(_s, {
                            to: h.link,
                            className: "portfolio-link",
                            children: [
                              m.jsx("span", {
                                children: s("portfolio.viewProject"),
                              }),
                              m.jsx(mx, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    m.jsxs("div", {
                      className: "portfolio-info",
                      children: [
                        m.jsx("div", {
                          className: "chips",
                          children: h.categories.map((y) =>
                            m.jsx(
                              "div",
                              { className: "portfolio-category", children: y },
                              y,
                            ),
                          ),
                        }),
                        m.jsx("h3", {
                          className: "portfolio-title",
                          children: h.title,
                        }),
                        m.jsx("p", {
                          className: "portfolio-description",
                          children: h.description,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              h.id,
            ),
          ),
        }),
      ],
    }),
  });
}
function ES() {
  const a = D.useRef([]),
    { t: i } = Ot();
  return (
    D.useEffect(() => {
      const l = new IntersectionObserver(
        (s) => {
          s.forEach((r) => {
            r.isIntersecting &&
              ((r.target.style.opacity = "1"),
              (r.target.style.transform = "translateY(0)"));
          });
        },
        { threshold: 0.2 },
      );
      return (
        a.current.forEach((s) => {
          s && l.observe(s);
        }),
        () => l.disconnect()
      );
    }, []),
    m.jsx("section", {
      id: "contact",
      className: "py-20 relative",
      children: m.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 md:px-6",
        children: [
          m.jsx(lt, { badge: i("contact.badge"), title: i("contact.title") }),
          m.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-5 gap-8",
            children: [
              m.jsx("div", {
                className: "lg:col-span-2",
                children: m.jsxs("div", {
                  ref: (l) => (a.current[0] = l),
                  style: {
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "all 0.6s ease",
                  },
                  children: [
                    m.jsxs("div", {
                      className: "glass-card contact-card",
                      children: [
                        m.jsx("div", {
                          className: "contact-icon",
                          children: m.jsx(px, {}),
                        }),
                        m.jsxs("div", {
                          children: [
                            m.jsx("h3", {
                              className: "contact-title",
                              children: "Email",
                            }),
                            m.jsx("p", {
                              className: "contact-text",
                              children: "andrea.feliziani97@gmail.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                    m.jsxs("div", {
                      className: "glass-card contact-card",
                      children: [
                        m.jsx("div", {
                          className: "contact-icon contact-icon-secondary",
                          children: m.jsx(ox, {}),
                        }),
                        m.jsxs("div", {
                          children: [
                            m.jsx("h3", {
                              className: "contact-title",
                              children: i("contact.phone"),
                            }),
                            m.jsx("p", {
                              className: "contact-text",
                              children: "3396443800",
                            }),
                          ],
                        }),
                      ],
                    }),
                    m.jsx(wr, { className: "mt-6" }),
                  ],
                }),
              }),
              m.jsx("div", {
                className: "lg:col-span-3",
                children: m.jsx("div", {
                  ref: (l) => (a.current[1] = l),
                  className: "glass-card",
                  style: {
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "all 0.6s ease",
                  },
                  children: m.jsxs("form", {
                    action:
                      "https://formsubmit.co/andrea.feliziani97@gmail.com",
                    method: "POST",
                    children: [
                      m.jsx("input", {
                        type: "hidden",
                        name: "_captcha",
                        value: "false",
                      }),
                      m.jsxs("div", {
                        className: "mb-6",
                        children: [
                          m.jsx("label", {
                            htmlFor: "name",
                            className: "form-label block mb-2",
                            children: i("contact.nameLabel"),
                          }),
                          m.jsx("input", {
                            type: "text",
                            id: "name",
                            name: "name",
                            className: "custom-input w-full",
                            required: !0,
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "mb-6",
                        children: [
                          m.jsx("label", {
                            htmlFor: "email",
                            className: "form-label block mb-2",
                            children: i("contact.emailLabel"),
                          }),
                          m.jsx("input", {
                            type: "email",
                            id: "email",
                            name: "email",
                            className: "custom-input w-full",
                            required: !0,
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "mb-6",
                        children: [
                          m.jsx("label", {
                            htmlFor: "subject",
                            className: "form-label block mb-2",
                            children: i("contact.subjectLabel"),
                          }),
                          m.jsx("input", {
                            type: "text",
                            id: "subject",
                            name: "subject",
                            className: "custom-input w-full",
                            required: !0,
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "mb-6",
                        children: [
                          m.jsx("label", {
                            htmlFor: "message",
                            className: "form-label block mb-2",
                            children: i("contact.messageLabel"),
                          }),
                          m.jsx("textarea", {
                            id: "message",
                            name: "message",
                            rows: "5",
                            className: "custom-input w-full",
                            required: !0,
                          }),
                        ],
                      }),
                      m.jsxs("button", {
                        type: "submit",
                        className: "btn btn-primary w-full flex justify-center",
                        children: [
                          m.jsx("span", { children: i("contact.send") }),
                          m.jsx(rx, {}),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function jS() {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(bS, {}),
      m.jsx(SS, {}),
      m.jsx(CS, {}),
      m.jsx(_S, {}),
      m.jsx(TS, {}),
      m.jsx(ES, {}),
    ],
  });
}
const yf = [
    "/Img/bot1.png",
    "/Img/bot2.png",
    "/Img/bot3.png",
    "/Img/bot4.png",
    "/Img/bot5.png",
  ],
  $a = [
    "/Img/slbt1.png",
    "/Img/slbt2.png",
    "/Img/slbt3.png",
    "/Img/slbt4.png",
    "/Img/slbt5.png",
  ];
function MS() {
  const [a, i] = D.useState(0),
    [l, s] = D.useState(0),
    { t: r } = Ot(),
    u = [
      {
        icon: sx,
        title: r("botanicare.feature1Title"),
        description: r("botanicare.feature1Desc"),
        colorClass: "",
      },
      {
        icon: yx,
        title: r("botanicare.feature2Title"),
        description: r("botanicare.feature2Desc"),
        colorClass: "tool-icon-secondary",
      },
      {
        icon: qf,
        title: r("botanicare.feature3Title"),
        description: r("botanicare.feature3Desc"),
        colorClass: "tool-icon-accent",
      },
    ];
  return (
    D.useEffect(() => {
      const d = setInterval(() => {
        i((h) => (h + 1) % yf.length);
      }, 3e3);
      return () => clearInterval(d);
    }, []),
    m.jsxs(m.Fragment, {
      children: [
        m.jsxs("section", {
          className: "project-hero",
          children: [
            m.jsxs("div", {
              className: "hero-background",
              children: [
                m.jsx("div", {
                  className: "absolute inset-0",
                  style: {
                    background:
                      "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(236,72,153,0.15), transparent 50%)",
                  },
                }),
                m.jsx("div", {
                  className:
                    "absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full opacity-40",
                  style: {
                    background:
                      "linear-gradient(135deg, var(--color-primary), transparent)",
                    filter: "blur(60px)",
                    animation: "float 15s ease-in-out infinite",
                  },
                }),
                m.jsx("div", {
                  className:
                    "absolute bottom-[10%] right-[10%] w-[250px] h-[250px] rounded-full opacity-40",
                  style: {
                    background:
                      "linear-gradient(135deg, var(--color-secondary), transparent)",
                    filter: "blur(60px)",
                    animation: "float 12s ease-in-out infinite 2s",
                  },
                }),
              ],
            }),
            m.jsx("div", {
              className: "max-w-7xl mx-auto px-4 md:px-6 w-full",
              children: m.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                children: [
                  m.jsxs("div", {
                    className: "order-2 lg:order-1",
                    children: [
                      m.jsx("div", {
                        className: "portfolio-category mb-4",
                        children: r("botanicare.category"),
                      }),
                      m.jsxs("h1", {
                        className:
                          "text-4xl md:text-5xl lg:text-6xl leading-tight mb-4",
                        style: { fontFamily: "var(--font-display)" },
                        children: [
                          r("botanicare.heroTitle1"),
                          m.jsx("span", {
                            className: "gradient-text",
                            children: r("botanicare.heroTitle2"),
                          }),
                        ],
                      }),
                      m.jsx("p", {
                        className:
                          "text-lg text-[var(--color-text-muted)] mb-8",
                        children: r("botanicare.heroDesc"),
                      }),
                      m.jsxs("a", {
                        href: "#progetto",
                        className: "btn btn-primary",
                        onClick: (d) => {
                          var h;
                          (d.preventDefault(),
                            (h = document.getElementById("progetto")) == null ||
                              h.scrollIntoView({ behavior: "smooth" }));
                        },
                        children: [
                          m.jsx("span", {
                            children: r("project.exploreProject"),
                          }),
                          m.jsx(Ts, {}),
                        ],
                      }),
                    ],
                  }),
                  m.jsx("div", {
                    className:
                      "order-1 lg:order-2 hidden lg:flex justify-center",
                    children: m.jsxs("div", {
                      className: "carousel-container",
                      children: [
                        m.jsx("div", {
                          className: "carousel-images",
                          children: yf.map((d, h) =>
                            m.jsx(
                              "img",
                              {
                                src: d,
                                alt: `Botanicare ${h + 1}`,
                                className: `project-main-image ${h === a ? "active" : ""}`,
                              },
                              d,
                            ),
                          ),
                        }),
                        m.jsx("div", {
                          className: "carousel-dots",
                          children: yf.map((d, h) =>
                            m.jsx(
                              "span",
                              {
                                className: `dot ${h === a ? "active" : ""}`,
                                onClick: () => i(h),
                              },
                              h,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            m.jsxs("div", {
              className: "scroll-indicator hidden md:flex",
              children: [
                m.jsx("div", {
                  className: "scroll-mouse",
                  children: m.jsx("div", { className: "scroll-dot" }),
                }),
                m.jsx("span", { children: r("project.scroll") }),
              ],
            }),
          ],
        }),
        m.jsx("section", {
          id: "progetto",
          className: "py-20",
          children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6",
            children: [
              m.jsx(lt, {
                badge: r("project.showcase"),
                title: r("project.projectTitle"),
              }),
              m.jsx("div", {
                className: "hidden md:block",
                children: m.jsxs("div", {
                  className: "glass-card p-4",
                  children: [
                    m.jsx("div", {
                      className: "relative overflow-hidden rounded-lg",
                      style: { height: "600px" },
                      children: $a.map((d, h) =>
                        m.jsx(
                          "img",
                          {
                            src: d,
                            alt: `Botanicare Screenshot ${h + 1}`,
                            className:
                              "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
                            style: { opacity: h === l ? 1 : 0 },
                          },
                          d,
                        ),
                      ),
                    }),
                    m.jsxs("div", {
                      className: "flex justify-center gap-3 mt-4",
                      children: [
                        m.jsx("button", {
                          className:
                            "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer hover:border-[var(--color-primary)]",
                          onClick: () =>
                            s((d) => (d - 1 + $a.length) % $a.length),
                          children: "‹",
                        }),
                        $a.map((d, h) =>
                          m.jsx(
                            "button",
                            {
                              className: `w-3 h-3 rounded-full border-none cursor-pointer ${h === l ? "opacity-100" : "opacity-40"}`,
                              style: {
                                background:
                                  h === l
                                    ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                                    : "var(--color-text-muted)",
                              },
                              onClick: () => s(h),
                            },
                            h,
                          ),
                        ),
                        m.jsx("button", {
                          className:
                            "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer hover:border-[var(--color-primary)]",
                          onClick: () => s((d) => (d + 1) % $a.length),
                          children: "›",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              m.jsx("div", {
                className: "md:hidden glass-card p-4",
                children: m.jsx("div", {
                  className: "vertical-gallery",
                  children: $a.map((d, h) =>
                    m.jsx(
                      "div",
                      {
                        className: "gallery-item",
                        children: m.jsx("img", {
                          src: d,
                          alt: `Botanicare Screenshot ${h + 1}`,
                          className: "w-full rounded-lg",
                        }),
                      },
                      h,
                    ),
                  ),
                }),
              }),
            ],
          }),
        }),
        m.jsx("section", {
          className: "py-20",
          children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6",
            children: [
              m.jsx(lt, {
                badge: r("project.howItWorks"),
                title: r("botanicare.steps"),
              }),
              m.jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: u.map(
                  ({ icon: d, title: h, description: p, colorClass: y }) =>
                    m.jsxs(
                      "div",
                      {
                        className: "glass-card text-center",
                        children: [
                          m.jsx("div", {
                            className: `tool-icon ${y}`,
                            children: m.jsx(d, {}),
                          }),
                          m.jsx("h3", {
                            className: "tool-title",
                            style: { fontFamily: "var(--font-display)" },
                            children: h,
                          }),
                          m.jsx("p", {
                            className: "tool-description",
                            children: p,
                          }),
                        ],
                      },
                      h,
                    ),
                ),
              }),
            ],
          }),
        }),
        m.jsx("section", {
          className: "py-20",
          children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6",
            children: [
              m.jsx(lt, {
                badge: r("project.resources"),
                title: r("project.fullProject"),
              }),
              m.jsx("div", {
                className: "max-w-3xl mx-auto",
                children: m.jsxs("div", {
                  className: "glass-card text-center",
                  children: [
                    m.jsx("h3", {
                      className: "text-xl mb-4",
                      style: { fontFamily: "var(--font-display)" },
                      children: r("project.exploreDetails"),
                    }),
                    m.jsx("p", {
                      className: "text-[var(--color-text-muted)] mb-6",
                      children: r("project.accessDocs"),
                    }),
                    m.jsxs("a", {
                      href: "https://docs.google.com/document/d/1GLsAxFqVzbsULLPqZkDemdhnU70I5V2U/edit?usp=sharing&ouid=108685707695211004080&rtpof=true&sd=true",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "btn btn-primary",
                      children: [
                        m.jsx(xr, {}),
                        m.jsx("span", { children: r("project.documentation") }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const Wa = ["/Img/1OP.png", "/Img/30P.png", "/Img/4OP.png", "/Img/5OP.png"];
function DS() {
  const [a, i] = D.useState(0),
    { t: l } = Ot(),
    s = [
      {
        icon: qf,
        title: l("opla.feature1Title"),
        description: l("opla.feature1Desc"),
        colorClass: "",
      },
      {
        icon: hx,
        title: l("opla.feature2Title"),
        description: l("opla.feature2Desc"),
        colorClass: "tool-icon-secondary",
      },
      {
        icon: tx,
        title: l("opla.feature3Title"),
        description: l("opla.feature3Desc"),
        colorClass: "tool-icon-accent",
      },
    ];
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs("section", {
        className: "project-hero",
        children: [
          m.jsx("div", {
            className: "hero-background",
            children: m.jsx("div", {
              className: "absolute inset-0",
              style: {
                background:
                  "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(236,72,153,0.15), transparent 50%)",
              },
            }),
          }),
          m.jsx("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6 w-full",
            children: m.jsxs("div", {
              className: "max-w-3xl mx-auto text-center",
              children: [
                m.jsx("div", {
                  className: "portfolio-category mb-4",
                  children: l("opla.category"),
                }),
                m.jsxs("h1", {
                  className:
                    "text-4xl md:text-5xl lg:text-6xl leading-tight mb-4",
                  style: { fontFamily: "var(--font-display)" },
                  children: [
                    m.jsx("span", {
                      className: "gradient-text",
                      children: l("opla.heroTitle1"),
                    }),
                    l("opla.heroTitle2"),
                  ],
                }),
                m.jsx("p", {
                  className: "text-lg text-[var(--color-text-muted)] mb-8",
                  children: l("opla.heroDesc"),
                }),
                m.jsxs("div", {
                  className: "flex justify-center gap-4 flex-wrap",
                  children: [
                    m.jsxs("a", {
                      href: "#progetto",
                      className: "btn btn-primary",
                      onClick: (r) => {
                        var u;
                        (r.preventDefault(),
                          (u = document.getElementById("progetto")) == null ||
                            u.scrollIntoView({ behavior: "smooth" }));
                      },
                      children: [
                        m.jsx("span", {
                          children: l("project.exploreProject"),
                        }),
                        m.jsx(Ts, {}),
                      ],
                    }),
                    m.jsxs("a", {
                      href: "https://www.figma.com/design/wgungAOOwITkQCFbK7Z5Cv/Opl%C3%A0?node-id=0-1&t=3uz4hmTuMgD7CoLy-1",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "btn btn-outline",
                      children: [
                        m.jsx("span", {
                          children: l("project.figmaPrototype"),
                        }),
                        m.jsx(fl, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      m.jsx("section", {
        className: "py-20",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6",
          children: [
            m.jsx(lt, {
              badge: l("project.howItWorks"),
              title: l("opla.steps"),
            }),
            m.jsx("div", {
              className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
              children: s.map(
                ({ icon: r, title: u, description: d, colorClass: h }) =>
                  m.jsxs(
                    "div",
                    {
                      className: "glass-card text-center",
                      children: [
                        m.jsx("div", {
                          className: `tool-icon ${h}`,
                          children: m.jsx(r, {}),
                        }),
                        m.jsx("h3", {
                          className: "tool-title",
                          style: { fontFamily: "var(--font-display)" },
                          children: u,
                        }),
                        m.jsx("p", {
                          className: "tool-description",
                          children: d,
                        }),
                      ],
                    },
                    u,
                  ),
              ),
            }),
          ],
        }),
      }),
      m.jsx("section", {
        id: "progetto",
        className: "py-20",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6",
          children: [
            m.jsx(lt, {
              badge: l("project.showcase"),
              title: l("project.projectTitle"),
            }),
            m.jsx("div", {
              className: "hidden md:block",
              children: m.jsxs("div", {
                className: "glass-card p-4",
                children: [
                  m.jsx("div", {
                    className: "relative overflow-hidden rounded-lg",
                    style: { height: "600px" },
                    children: Wa.map((r, u) =>
                      m.jsx(
                        "img",
                        {
                          src: r,
                          alt: `Oplà Screenshot ${u + 1}`,
                          className:
                            "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
                          style: { opacity: u === a ? 1 : 0 },
                        },
                        r,
                      ),
                    ),
                  }),
                  m.jsxs("div", {
                    className: "flex justify-center gap-3 mt-4",
                    children: [
                      m.jsx("button", {
                        className:
                          "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer",
                        onClick: () =>
                          i((r) => (r - 1 + Wa.length) % Wa.length),
                        children: "‹",
                      }),
                      Wa.map((r, u) =>
                        m.jsx(
                          "button",
                          {
                            className: `w-3 h-3 rounded-full border-none cursor-pointer ${u === a ? "opacity-100" : "opacity-40"}`,
                            style: {
                              background:
                                u === a
                                  ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                                  : "var(--color-text-muted)",
                            },
                            onClick: () => i(u),
                          },
                          u,
                        ),
                      ),
                      m.jsx("button", {
                        className:
                          "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer",
                        onClick: () => i((r) => (r + 1) % Wa.length),
                        children: "›",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            m.jsx("div", {
              className: "md:hidden glass-card p-4",
              children: m.jsx("div", {
                className: "vertical-gallery",
                children: Wa.map((r, u) =>
                  m.jsx(
                    "div",
                    {
                      className: "gallery-item",
                      children: m.jsx("img", {
                        src: r,
                        alt: `Oplà ${u + 1}`,
                        className: "w-full rounded-lg",
                      }),
                    },
                    u,
                  ),
                ),
              }),
            }),
          ],
        }),
      }),
      m.jsx("section", {
        className: "py-20",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6",
          children: [
            m.jsx(lt, {
              badge: l("project.resources"),
              title: l("project.fullProject"),
            }),
            m.jsx("div", {
              className: "max-w-3xl mx-auto",
              children: m.jsxs("div", {
                className: "glass-card text-center",
                children: [
                  m.jsx("h3", {
                    className: "text-xl mb-4",
                    style: { fontFamily: "var(--font-display)" },
                    children: l("project.exploreDetails"),
                  }),
                  m.jsx("p", {
                    className: "text-[var(--color-text-muted)] mb-6",
                    children: l("project.accessDocs"),
                  }),
                  m.jsxs("div", {
                    className: "flex justify-center gap-4 flex-wrap",
                    children: [
                      m.jsxs("a", {
                        href: "https://docs.google.com/document/d/1Y05qAFmekffLc11swJ8Uw4LxkBbp6iFZ9ER68kSX7cI/edit?usp=sharing",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn btn-primary",
                        children: [
                          m.jsx(xr, {}),
                          m.jsx("span", { children: l("opla.report") }),
                        ],
                      }),
                      m.jsxs("a", {
                        href: "https://www.figma.com/design/wgungAOOwITkQCFbK7Z5Cv/Opl%C3%A0?node-id=1-13446&t=nGwsaucv3XxoR9lA-1",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn btn-outline",
                        children: [
                          m.jsx(fl, {}),
                          m.jsx("span", { children: l("project.prototype") }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function OS() {
  const { t: a } = Ot();
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs("section", {
        className:
          "relative min-h-screen flex items-center justify-center overflow-hidden",
        style: { paddingTop: "6rem" },
        children: [
          m.jsxs("div", {
            className: "absolute inset-0 -z-10",
            children: [
              m.jsx("img", {
                src: "/Img/index-header.png",
                alt: "Serenity Background",
                className: "w-full h-full object-cover",
              }),
              m.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-dark)]",
              }),
            ],
          }),
          m.jsxs("h2", {
            className:
              "relative text-[clamp(30px,12vw,70px)] text-center text-white font-bold",
            style: {
              textShadow: "0 0 20px rgba(255,255,255,0.3)",
              fontFamily: "var(--font-display)",
            },
            children: [
              a("serenity.heroTitle1"),
              " ",
              m.jsx("br", { className: "hidden lg:block" }),
              a("serenity.heroTitle2"),
            ],
          }),
        ],
      }),
      m.jsx("section", {
        className: "py-20",
        children: m.jsx("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6",
          children: m.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            children: [
              m.jsxs("div", {
                children: [
                  m.jsx("p", {
                    className:
                      "text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed",
                    children: a("serenity.heroDesc"),
                  }),
                  m.jsxs("div", {
                    className: "flex gap-4 flex-wrap",
                    children: [
                      m.jsxs("a", {
                        href: "https://github.com/Felix2897/SerenityDreamTravels.git",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn btn-primary",
                        children: [
                          m.jsx(Gy, {}),
                          m.jsx("span", { children: a("serenity.viewCode") }),
                        ],
                      }),
                      m.jsxs("a", {
                        href: "https://www.figma.com/design/vhOrXFzzq1HHIXdvcFTPiq/Serenity-Dream-Travels?node-id=1-4621&t=sNRDiZgupL5Tp4j4-1",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn btn-outline",
                        children: [
                          m.jsx(fl, {}),
                          m.jsx("span", { children: "Figma" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              m.jsx("div", {
                children: m.jsx("img", {
                  src: "/Img/heroimg.png",
                  alt: "Serenity Dream Travels",
                  className: "w-full rounded-xl",
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const vf = [
    "/Img/Home Launch.png",
    "/Img/home-fin.png",
    "/Img/Calendario 1.png",
    "/Img/newsfide.png",
    "/Img/Home Amici.png",
  ],
  el = [
    "/Img/1.1.png",
    "/Img/2.png",
    "/Img/3.1.png",
    "/Img/4.png",
    "/Img/5.png",
  ];
function RS() {
  const [a, i] = D.useState(0),
    [l, s] = D.useState(0),
    { t: r } = Ot(),
    u = [
      {
        icon: dx,
        title: r("study.feature1Title"),
        description: r("study.feature1Desc"),
        colorClass: "",
      },
      {
        icon: bx,
        title: r("study.feature2Title"),
        description: r("study.feature2Desc"),
        colorClass: "tool-icon-secondary",
      },
      {
        icon: ix,
        title: r("study.feature3Title"),
        description: r("study.feature3Desc"),
        colorClass: "tool-icon-accent",
      },
      {
        icon: qf,
        title: r("study.feature4Title"),
        description: r("study.feature4Desc"),
        colorClass: "",
      },
      {
        icon: Wb,
        title: r("study.feature5Title"),
        description: r("study.feature5Desc"),
        colorClass: "tool-icon-secondary",
      },
      {
        icon: ex,
        title: r("study.feature6Title"),
        description: r("study.feature6Desc"),
        colorClass: "tool-icon-accent",
      },
    ];
  return (
    D.useEffect(() => {
      const d = setInterval(() => i((h) => (h + 1) % vf.length), 3e3);
      return () => clearInterval(d);
    }, []),
    m.jsxs(m.Fragment, {
      children: [
        m.jsxs("section", {
          className: "project-hero",
          children: [
            m.jsx("div", {
              className: "hero-background",
              children: m.jsx("div", {
                className: "absolute inset-0",
                style: {
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(236,72,153,0.15), transparent 50%)",
                },
              }),
            }),
            m.jsx("div", {
              className: "max-w-7xl mx-auto px-4 md:px-6 w-full",
              children: m.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                children: [
                  m.jsxs("div", {
                    className: "order-2 lg:order-1",
                    children: [
                      m.jsx("div", {
                        className: "portfolio-category mb-4",
                        children: r("study.category"),
                      }),
                      m.jsxs("h1", {
                        className:
                          "text-4xl md:text-5xl lg:text-6xl leading-tight mb-4",
                        style: { fontFamily: "var(--font-display)" },
                        children: [
                          m.jsx("span", {
                            className: "gradient-text",
                            children: r("study.heroTitle1"),
                          }),
                          r("study.heroTitle2"),
                        ],
                      }),
                      m.jsx("p", {
                        className:
                          "text-lg text-[var(--color-text-muted)] mb-8",
                        children: r("study.heroDesc"),
                      }),
                      m.jsxs("div", {
                        className: "flex gap-4 flex-wrap",
                        children: [
                          m.jsxs("a", {
                            href: "#progetto",
                            className: "btn btn-primary",
                            onClick: (d) => {
                              var h;
                              (d.preventDefault(),
                                (h = document.getElementById("progetto")) ==
                                  null ||
                                  h.scrollIntoView({ behavior: "smooth" }));
                            },
                            children: [
                              m.jsx("span", {
                                children: r("project.exploreProject"),
                              }),
                              m.jsx(Ts, {}),
                            ],
                          }),
                          m.jsxs("a", {
                            href: "https://www.figma.com/file/aFuqVzfzqnWwpiySgWqtbt/StudyWard",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn btn-outline",
                            children: [
                              m.jsx("span", {
                                children: r("project.figmaPrototype"),
                              }),
                              m.jsx(fl, {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsx("div", {
                    className:
                      "order-1 lg:order-2 hidden lg:flex justify-center",
                    children: m.jsxs("div", {
                      className: "carousel-container",
                      children: [
                        m.jsx("div", {
                          className: "carousel-images",
                          children: vf.map((d, h) =>
                            m.jsx(
                              "img",
                              {
                                src: d,
                                alt: `StudyWard ${h + 1}`,
                                className: `project-main-image ${h === a ? "active" : ""}`,
                              },
                              d,
                            ),
                          ),
                        }),
                        m.jsx("div", {
                          className: "carousel-dots",
                          children: vf.map((d, h) =>
                            m.jsx(
                              "span",
                              {
                                className: `dot ${h === a ? "active" : ""}`,
                                onClick: () => i(h),
                              },
                              h,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        m.jsx("section", {
          id: "progetto",
          className: "py-20",
          children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6",
            children: [
              m.jsx(lt, {
                badge: r("project.showcase"),
                title: r("project.projectTitle"),
              }),
              m.jsx("div", {
                className: "hidden md:block",
                children: m.jsxs("div", {
                  className: "glass-card p-4",
                  children: [
                    m.jsx("div", {
                      className: "relative overflow-hidden rounded-lg",
                      style: { height: "600px" },
                      children: el.map((d, h) =>
                        m.jsx(
                          "img",
                          {
                            src: d,
                            alt: `StudyWard Screenshot ${h + 1}`,
                            className:
                              "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
                            style: { opacity: h === l ? 1 : 0 },
                          },
                          d,
                        ),
                      ),
                    }),
                    m.jsxs("div", {
                      className: "flex justify-center gap-3 mt-4",
                      children: [
                        m.jsx("button", {
                          className:
                            "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer",
                          onClick: () =>
                            s((d) => (d - 1 + el.length) % el.length),
                          children: "‹",
                        }),
                        el.map((d, h) =>
                          m.jsx(
                            "button",
                            {
                              className: `w-3 h-3 rounded-full border-none cursor-pointer ${h === l ? "opacity-100" : "opacity-40"}`,
                              style: {
                                background:
                                  h === l
                                    ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                                    : "var(--color-text-muted)",
                              },
                              onClick: () => s(h),
                            },
                            h,
                          ),
                        ),
                        m.jsx("button", {
                          className:
                            "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer",
                          onClick: () => s((d) => (d + 1) % el.length),
                          children: "›",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              m.jsx("div", {
                className: "md:hidden glass-card p-4",
                children: m.jsx("div", {
                  className: "vertical-gallery",
                  children: el.map((d, h) =>
                    m.jsx(
                      "div",
                      {
                        className: "gallery-item",
                        children: m.jsx("img", {
                          src: d,
                          alt: `StudyWard ${h + 1}`,
                          className: "w-full rounded-lg",
                        }),
                      },
                      h,
                    ),
                  ),
                }),
              }),
            ],
          }),
        }),
        m.jsx("section", {
          className: "py-20",
          children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6",
            children: [
              m.jsx(lt, {
                badge: r("project.howItWorks"),
                title: r("study.steps"),
              }),
              m.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: u.map(
                  ({ icon: d, title: h, description: p, colorClass: y }) =>
                    m.jsxs(
                      "div",
                      {
                        className: "glass-card text-center",
                        children: [
                          m.jsx("div", {
                            className: `tool-icon ${y}`,
                            children: m.jsx(d, {}),
                          }),
                          m.jsx("h3", {
                            className: "tool-title",
                            style: { fontFamily: "var(--font-display)" },
                            children: h,
                          }),
                          m.jsx("p", {
                            className: "tool-description",
                            children: p,
                          }),
                        ],
                      },
                      h,
                    ),
                ),
              }),
            ],
          }),
        }),
        m.jsx("section", {
          className: "py-20",
          children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6",
            children: [
              m.jsx(lt, {
                badge: r("project.resources"),
                title: r("project.fullProject"),
              }),
              m.jsx("div", {
                className: "max-w-3xl mx-auto",
                children: m.jsxs("div", {
                  className: "glass-card text-center",
                  children: [
                    m.jsx("h3", {
                      className: "text-xl mb-4",
                      style: { fontFamily: "var(--font-display)" },
                      children: r("project.exploreDetails"),
                    }),
                    m.jsx("p", {
                      className: "text-[var(--color-text-muted)] mb-6",
                      children: r("project.accessDocs"),
                    }),
                    m.jsxs("div", {
                      className: "flex justify-center gap-4 flex-wrap",
                      children: [
                        m.jsxs("a", {
                          href: "https://docs.google.com/document/d/1Vx_QCAmTvoPfmi4asm2exa3yIA4M_nviAwUZSo68NoQ/edit?usp=sharing",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "btn btn-primary",
                          children: [
                            m.jsx(xr, {}),
                            m.jsx("span", {
                              children: r("study.developmentDoc"),
                            }),
                          ],
                        }),
                        m.jsxs("a", {
                          href: "https://www.figma.com/file/aFuqVzfzqnWwpiySgWqtbt/StudyWard?type=design&node-id=0%3A1&mode=design",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "btn btn-outline",
                          children: [
                            m.jsx(fl, {}),
                            m.jsx("span", { children: r("project.prototype") }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const tl = [
  "/Img/svr1.png",
  "/Img/svr2.png",
  "/Img/svr3.png",
  "/Img/svr4.png",
  "/Img/svr5.png",
];
function NS() {
  const [a, i] = D.useState(0),
    { t: l } = Ot(),
    s = [
      {
        icon: gx,
        title: l("valeri.feature1Title"),
        description: l("valeri.feature1Desc"),
        colorClass: "",
      },
      {
        icon: ax,
        title: l("valeri.feature2Title"),
        description: l("valeri.feature2Desc"),
        colorClass: "tool-icon-secondary",
      },
      {
        icon: cx,
        title: l("valeri.feature3Title"),
        description: l("valeri.feature3Desc"),
        colorClass: "tool-icon-accent",
      },
    ];
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs("section", {
        className: "project-hero",
        children: [
          m.jsx("div", {
            className: "hero-background",
            children: m.jsx("div", {
              className: "absolute inset-0",
              style: {
                background:
                  "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(236,72,153,0.15), transparent 50%)",
              },
            }),
          }),
          m.jsx("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6 w-full",
            children: m.jsxs("div", {
              className: "max-w-3xl mx-auto text-center",
              children: [
                m.jsx("div", {
                  className: "portfolio-category mb-4",
                  children: l("valeri.category"),
                }),
                m.jsxs("h1", {
                  className:
                    "text-4xl md:text-5xl lg:text-6xl leading-tight mb-4",
                  style: { fontFamily: "var(--font-display)" },
                  children: [
                    l("valeri.heroTitle1"),
                    " ",
                    m.jsx("span", {
                      className: "gradient-text",
                      children: l("valeri.heroTitle2"),
                    }),
                  ],
                }),
                m.jsx("p", {
                  className: "text-lg text-[var(--color-text-muted)] mb-8",
                  children: l("valeri.heroDesc"),
                }),
                m.jsxs("div", {
                  className: "flex justify-center gap-4 flex-wrap",
                  children: [
                    m.jsxs("a", {
                      href: "#progetto",
                      className: "btn btn-primary",
                      onClick: (r) => {
                        var u;
                        (r.preventDefault(),
                          (u = document.getElementById("progetto")) == null ||
                            u.scrollIntoView({ behavior: "smooth" }));
                      },
                      children: [
                        m.jsx("span", {
                          children: l("project.exploreProject"),
                        }),
                        m.jsx(Ts, {}),
                      ],
                    }),
                    m.jsx("a", {
                      href: "#prototipo",
                      className: "btn btn-outline",
                      onClick: (r) => {
                        var u;
                        (r.preventDefault(),
                          (u = document.getElementById("prototipo")) == null ||
                            u.scrollIntoView({ behavior: "smooth" }));
                      },
                      children: m.jsx("span", {
                        children: l("project.prototype"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      m.jsx("section", {
        id: "progetto",
        className: "py-20",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6",
          children: [
            m.jsx(lt, {
              badge: l("project.showcase"),
              title: l("project.projectTitle"),
            }),
            m.jsx("div", {
              className: "hidden md:block",
              children: m.jsxs("div", {
                className: "glass-card p-6",
                children: [
                  m.jsx("div", {
                    className: "relative overflow-hidden rounded-lg",
                    style: { height: "600px" },
                    children: tl.map((r, u) =>
                      m.jsx(
                        "img",
                        {
                          src: r,
                          alt: `Valeri Franco Screenshot ${u + 1}`,
                          className:
                            "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
                          style: { opacity: u === a ? 1 : 0 },
                        },
                        r,
                      ),
                    ),
                  }),
                  m.jsxs("div", {
                    className: "flex justify-center gap-3 mt-4",
                    children: [
                      m.jsx("button", {
                        className:
                          "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer",
                        onClick: () =>
                          i((r) => (r - 1 + tl.length) % tl.length),
                        children: "‹",
                      }),
                      tl.map((r, u) =>
                        m.jsx(
                          "button",
                          {
                            className: `w-3 h-3 rounded-full border-none cursor-pointer ${u === a ? "opacity-100" : "opacity-40"}`,
                            style: {
                              background:
                                u === a
                                  ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                                  : "var(--color-text-muted)",
                            },
                            onClick: () => i(u),
                          },
                          u,
                        ),
                      ),
                      m.jsx("button", {
                        className:
                          "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer",
                        onClick: () => i((r) => (r + 1) % tl.length),
                        children: "›",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            m.jsx("div", {
              className: "md:hidden glass-card p-4",
              children: m.jsx("div", {
                className: "vertical-gallery",
                children: tl.map((r, u) =>
                  m.jsx(
                    "div",
                    {
                      className: "gallery-item",
                      children: m.jsx("img", {
                        src: r,
                        alt: `Valeri ${u + 1}`,
                        className: "w-full rounded-lg",
                      }),
                    },
                    u,
                  ),
                ),
              }),
            }),
          ],
        }),
      }),
      m.jsx("section", {
        className: "py-20",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6",
          children: [
            m.jsx(lt, {
              badge: l("project.howItWorks"),
              title: l("valeri.work"),
            }),
            m.jsx("div", {
              className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
              children: s.map(
                ({ icon: r, title: u, description: d, colorClass: h }) =>
                  m.jsxs(
                    "div",
                    {
                      className: "glass-card text-center",
                      children: [
                        m.jsx("div", {
                          className: `tool-icon ${h}`,
                          children: m.jsx(r, {}),
                        }),
                        m.jsx("h3", {
                          className: "tool-title",
                          style: { fontFamily: "var(--font-display)" },
                          children: u,
                        }),
                        m.jsx("p", {
                          className: "tool-description",
                          children: d,
                        }),
                      ],
                    },
                    u,
                  ),
              ),
            }),
          ],
        }),
      }),
      m.jsx("section", {
        id: "prototipo",
        className: "py-20",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6",
          children: [
            m.jsx(lt, {
              badge: l("project.resources"),
              title: l("project.completePrototype"),
            }),
            m.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
              children: [
                m.jsx("div", {
                  className: "flex justify-center",
                  children: m.jsx("img", {
                    src: "/Img/iow.png",
                    alt: "Valeri Franco Prototipo",
                    className:
                      "max-h-[500px] w-auto object-contain rounded-2xl",
                    style: { boxShadow: "0 20px 60px rgba(0,0,0,0.3)" },
                  }),
                }),
                m.jsxs("div", {
                  className: "glass-card",
                  children: [
                    m.jsx("h3", {
                      className: "text-2xl mb-4",
                      style: { fontFamily: "var(--font-display)" },
                      children: l("project.exploreDetails"),
                    }),
                    m.jsx("p", {
                      className: "text-[var(--color-text-muted)] mb-6",
                      children: l("project.accessDocs"),
                    }),
                    m.jsxs("div", {
                      className: "flex gap-4 flex-wrap",
                      children: [
                        m.jsxs("a", {
                          href: "/Valeri .pdf",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "btn btn-primary",
                          children: [
                            m.jsx(xr, {}),
                            m.jsx("span", { children: l("valeri.projectDoc") }),
                          ],
                        }),
                        m.jsxs("a", {
                          href: "https://www.figma.com/file/wxAN9iNlGolXL7xUNAe4FX/Valeri-Franco?type=design&node-id=0%3A1&mode=design",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "btn btn-outline",
                          children: [
                            m.jsx(fl, {}),
                            m.jsx("span", {
                              children: l("project.figmaPrototype"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const il = [
  "/Img/SECUREITS1.png",
  "/Img/SECUREITS2.png",
  "/Img/SECUREITS3.png",
];
function AS() {
  const [a, i] = D.useState(0),
    { t: l } = Ot(),
    s = [
      {
        icon: lx,
        title: l("secure.feature1Title"),
        description: l("secure.feature1Desc"),
        colorClass: "",
      },
      {
        icon: vx,
        title: l("secure.feature2Title"),
        description: l("secure.feature2Desc"),
        colorClass: "tool-icon-secondary",
      },
      {
        icon: fx,
        title: l("secure.feature3Title"),
        description: l("secure.feature3Desc"),
        colorClass: "tool-icon-accent",
      },
    ];
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs("section", {
        className: "project-hero",
        children: [
          m.jsx("div", {
            className: "hero-background",
            children: m.jsx("div", {
              className: "absolute inset-0",
              style: {
                background:
                  "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(236,72,153,0.15), transparent 50%)",
              },
            }),
          }),
          m.jsx("div", {
            className: "max-w-7xl mx-auto px-4 md:px-6 w-full",
            children: m.jsxs("div", {
              className: "max-w-3xl mx-auto text-center",
              children: [
                m.jsx("div", {
                  className: "portfolio-category mb-4",
                  children: l("secure.category"),
                }),
                m.jsxs("h1", {
                  className:
                    "text-4xl md:text-5xl lg:text-6xl leading-tight mb-4",
                  style: { fontFamily: "var(--font-display)" },
                  children: [
                    l("secure.heroTitle1"),
                    " ",
                    m.jsx("span", {
                      className: "gradient-text",
                      children: l("secure.heroTitle2"),
                    }),
                  ],
                }),
                m.jsx("p", {
                  className: "text-lg text-[var(--color-text-muted)] mb-8",
                  children: l("secure.heroDesc"),
                }),
                m.jsxs("a", {
                  href: "#progetto",
                  className: "btn btn-primary",
                  onClick: (r) => {
                    var u;
                    (r.preventDefault(),
                      (u = document.getElementById("progetto")) == null ||
                        u.scrollIntoView({ behavior: "smooth" }));
                  },
                  children: [
                    m.jsx("span", { children: l("project.exploreProject") }),
                    m.jsx(Ts, {}),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      m.jsx("section", {
        className: "py-20",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6",
          children: [
            m.jsx(lt, {
              badge: l("project.howItWorks"),
              title: l("secure.steps"),
            }),
            m.jsx("div", {
              className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
              children: s.map(
                ({ icon: r, title: u, description: d, colorClass: h }) =>
                  m.jsxs(
                    "div",
                    {
                      className: "glass-card text-center",
                      children: [
                        m.jsx("div", {
                          className: `tool-icon ${h}`,
                          children: m.jsx(r, {}),
                        }),
                        m.jsx("h3", {
                          className: "tool-title",
                          style: { fontFamily: "var(--font-display)" },
                          children: u,
                        }),
                        m.jsx("p", {
                          className: "tool-description",
                          children: d,
                        }),
                      ],
                    },
                    u,
                  ),
              ),
            }),
          ],
        }),
      }),
      m.jsx("section", {
        id: "progetto",
        className: "py-20",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 md:px-6",
          children: [
            m.jsx(lt, {
              badge: l("project.showcase"),
              title: l("project.projectTitle"),
            }),
            m.jsx("div", {
              className: "hidden md:block",
              children: m.jsxs("div", {
                className: "glass-card p-4",
                children: [
                  m.jsx("div", {
                    className: "relative overflow-hidden rounded-lg",
                    style: { height: "600px" },
                    children: il.map((r, u) =>
                      m.jsx(
                        "img",
                        {
                          src: r,
                          alt: `Secure it ${u + 1}`,
                          className:
                            "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
                          style: { opacity: u === a ? 1 : 0 },
                        },
                        r,
                      ),
                    ),
                  }),
                  m.jsxs("div", {
                    className: "flex justify-center gap-3 mt-4",
                    children: [
                      m.jsx("button", {
                        className:
                          "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer",
                        onClick: () =>
                          i((r) => (r - 1 + il.length) % il.length),
                        children: "‹",
                      }),
                      il.map((r, u) =>
                        m.jsx(
                          "button",
                          {
                            className: `w-3 h-3 rounded-full border-none cursor-pointer ${u === a ? "opacity-100" : "opacity-40"}`,
                            style: {
                              background:
                                u === a
                                  ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                                  : "var(--color-text-muted)",
                            },
                            onClick: () => i(u),
                          },
                          u,
                        ),
                      ),
                      m.jsx("button", {
                        className:
                          "w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer",
                        onClick: () => i((r) => (r + 1) % il.length),
                        children: "›",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            m.jsx("div", {
              className: "md:hidden glass-card p-4",
              children: m.jsx("div", {
                className: "vertical-gallery",
                children: il.map((r, u) =>
                  m.jsx(
                    "div",
                    {
                      className: "gallery-item",
                      children: m.jsx("img", {
                        src: r,
                        alt: `Secure it ${u + 1}`,
                        className: "w-full rounded-lg",
                      }),
                    },
                    u,
                  ),
                ),
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function kS() {
  const { pathname: a } = Ci();
  return (
    D.useEffect(() => {
      window.scrollTo(0, 0);
    }, [a]),
    null
  );
}
function LS() {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(_x, {}),
      m.jsx(kS, {}),
      m.jsx(zx, {}),
      m.jsxs(ob, {
        children: [
          m.jsx(Sn, { path: "/", element: m.jsx(jS, {}) }),
          m.jsx(Sn, { path: "/projects/botanicare", element: m.jsx(MS, {}) }),
          m.jsx(Sn, { path: "/projects/opla", element: m.jsx(DS, {}) }),
          m.jsx(Sn, { path: "/projects/serenity", element: m.jsx(OS, {}) }),
          m.jsx(Sn, { path: "/projects/study", element: m.jsx(RS, {}) }),
          m.jsx(Sn, { path: "/projects/valeri", element: m.jsx(NS, {}) }),
          m.jsx(Sn, { path: "/projects/secure-it", element: m.jsx(AS, {}) }),
        ],
      }),
      m.jsx(Cx, {}),
      m.jsx(Tx, {}),
    ],
  });
}
c2.createRoot(document.getElementById("root")).render(
  m.jsx(Tn.StrictMode, {
    children: m.jsx(Ob, { children: m.jsx(Gb, { children: m.jsx(LS, {}) }) }),
  }),
);
