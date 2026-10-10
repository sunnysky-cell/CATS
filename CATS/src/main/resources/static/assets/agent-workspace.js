var Ob = (n) => {
  throw TypeError(n);
};
var Mb = (n, i, o) => i.has(n) || Ob("Cannot " + o);
var Ge = (n, i, o) => (Mb(n, i, "read from private field"), o ? o.call(n) : i.get(n)), _b = (n, i, o) => i.has(n) ? Ob("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(n) : i.set(n, o), Dh = (n, i, o, r) => (Mb(n, i, "write to private field"), r ? r.call(n, o) : i.set(n, o), o);
function fD(n, i) {
  for (var o = 0; o < i.length; o++) {
    const r = i[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const u in r)
        if (u !== "default" && !(u in n)) {
          const f = Object.getOwnPropertyDescriptor(r, u);
          f && Object.defineProperty(n, u, f.get ? f : {
            enumerable: !0,
            get: () => r[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function t1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Oh = { exports: {} }, Hr = {};
var Nb;
function dD() {
  if (Nb) return Hr;
  Nb = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, u, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), u.key !== void 0 && (d = "" + u.key), "key" in u) {
      f = {};
      for (var h in u)
        h !== "key" && (f[h] = u[h]);
    } else f = u;
    return u = f.ref, {
      $$typeof: n,
      type: r,
      key: d,
      ref: u !== void 0 ? u : null,
      props: f
    };
  }
  return Hr.Fragment = i, Hr.jsx = o, Hr.jsxs = o, Hr;
}
var zb;
function hD() {
  return zb || (zb = 1, Oh.exports = dD()), Oh.exports;
}
var w = hD(), Mh = { exports: {} }, Et = {};
var jb;
function mD() {
  if (jb) return Et;
  jb = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.activity"), b = /* @__PURE__ */ Symbol.for("react.view_transition"), E = Symbol.iterator;
  function T(N) {
    return N === null || typeof N != "object" ? null : (N = E && N[E] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var R = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, A = {};
  function _(N, Y, W) {
    this.props = N, this.context = Y, this.refs = A, this.updater = W || R;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(N, Y) {
    if (typeof N != "object" && typeof N != "function" && N != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, N, Y, "setState");
  }, _.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function D() {
  }
  D.prototype = _.prototype;
  function M(N, Y, W) {
    this.props = N, this.context = Y, this.refs = A, this.updater = W || R;
  }
  var H = M.prototype = new D();
  H.constructor = M, C(H, _.prototype), H.isPureReactComponent = !0;
  var I = Array.isArray;
  function j() {
  }
  var z = { H: null, A: null, T: null, S: null }, K = Object.prototype.hasOwnProperty;
  function tt(N, Y, W) {
    var lt = W.ref;
    return {
      $$typeof: n,
      type: N,
      key: Y,
      ref: lt !== void 0 ? lt : null,
      props: W
    };
  }
  function ft(N, Y) {
    return tt(N.type, Y, N.props);
  }
  function at(N) {
    return typeof N == "object" && N !== null && N.$$typeof === n;
  }
  function J(N) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(W) {
      return Y[W];
    });
  }
  var ct = /\/+/g;
  function dt(N, Y) {
    return typeof N == "object" && N !== null && N.key != null ? J("" + N.key) : Y.toString(36);
  }
  function G(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (typeof N.status == "string" ? N.then(j, j) : (N.status = "pending", N.then(
          function(Y) {
            N.status === "pending" && (N.status = "fulfilled", N.value = Y);
          },
          function(Y) {
            N.status === "pending" && (N.status = "rejected", N.reason = Y);
          }
        )), N.status) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }
  function X(N, Y, W, lt, ot) {
    var et = typeof N;
    (et === "undefined" || et === "boolean") && (N = null);
    var yt = !1;
    if (N === null) yt = !0;
    else
      switch (et) {
        case "bigint":
        case "string":
        case "number":
          yt = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case n:
            case i:
              yt = !0;
              break;
            case y:
              return yt = N._init, X(
                yt(N._payload),
                Y,
                W,
                lt,
                ot
              );
          }
      }
    if (yt)
      return ot = ot(N), yt = lt === "" ? "." + dt(N, 0) : lt, I(ot) ? (W = "", yt != null && (W = yt.replace(ct, "$&/") + "/"), X(ot, Y, W, "", function(Rt) {
        return Rt;
      })) : ot != null && (at(ot) && (ot = ft(
        ot,
        W + (ot.key == null || N && N.key === ot.key ? "" : ("" + ot.key).replace(
          ct,
          "$&/"
        ) + "/") + yt
      )), Y.push(ot)), 1;
    yt = 0;
    var it = lt === "" ? "." : lt + ":";
    if (I(N))
      for (var rt = 0; rt < N.length; rt++)
        lt = N[rt], et = it + dt(lt, rt), yt += X(
          lt,
          Y,
          W,
          et,
          ot
        );
    else if (rt = T(N), typeof rt == "function")
      for (N = rt.call(N), rt = 0; !(lt = N.next()).done; )
        lt = lt.value, et = it + dt(lt, rt++), yt += X(
          lt,
          Y,
          W,
          et,
          ot
        );
    else if (et === "object") {
      if (typeof N.then == "function")
        return X(
          G(N),
          Y,
          W,
          lt,
          ot
        );
      throw Y = String(N), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return yt;
  }
  function $(N, Y, W) {
    if (N == null) return N;
    var lt = [], ot = 0;
    return X(N, lt, "", "", function(et) {
      return Y.call(W, et, ot++);
    }), lt;
  }
  function nt(N) {
    if (N._status === -1) {
      var Y = N._result, W = Y();
      W.then(
        function(lt) {
          (N._status === 0 || N._status === -1) && (N._status = 1, N._result = lt, W.status === void 0 && (W.status = "fulfilled", W.value = lt));
        },
        function(lt) {
          (N._status === 0 || N._status === -1) && (N._status = 2, N._result = lt, W.status === void 0 && (W.status = "rejected", W.reason = lt));
        }
      ), N._status === -1 && (N._status = 0, N._result = W);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var F = typeof reportError == "function" ? reportError : function(N) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof N == "object" && N !== null && typeof N.message == "string" ? String(N.message) : String(N),
        error: N
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", N);
      return;
    }
    console.error(N);
  };
  function xt(N) {
    var Y = z.T, W = {};
    W.types = Y !== null ? Y.types : null, z.T = W;
    try {
      var lt = N(), ot = z.S;
      ot !== null && ot(W, lt), typeof lt == "object" && lt !== null && typeof lt.then == "function" && lt.then(j, F);
    } catch (et) {
      F(et);
    } finally {
      Y !== null && W.types !== null && (Y.types = W.types), z.T = Y;
    }
  }
  function wt(N) {
    var Y = z.T;
    if (Y !== null) {
      var W = Y.types;
      W === null ? Y.types = [N] : W.indexOf(N) === -1 && W.push(N);
    } else xt(wt.bind(null, N));
  }
  var Mt = {
    map: $,
    forEach: function(N, Y, W) {
      $(
        N,
        function() {
          Y.apply(this, arguments);
        },
        W
      );
    },
    count: function(N) {
      var Y = 0;
      return $(N, function() {
        Y++;
      }), Y;
    },
    toArray: function(N) {
      return $(N, function(Y) {
        return Y;
      }) || [];
    },
    only: function(N) {
      if (!at(N))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return N;
    }
  };
  return Et.Activity = m, Et.Children = Mt, Et.Component = _, Et.Fragment = o, Et.Profiler = u, Et.PureComponent = M, Et.StrictMode = r, Et.Suspense = g, Et.ViewTransition = b, Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z, Et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(N) {
      return z.H.useMemoCache(N);
    }
  }, Et.addTransitionType = wt, Et.cache = function(N) {
    return function() {
      return N.apply(null, arguments);
    };
  }, Et.cacheSignal = function() {
    return null;
  }, Et.cloneElement = function(N, Y, W) {
    if (N == null)
      throw Error(
        "The argument must be a React element, but you passed " + N + "."
      );
    var lt = C({}, N.props), ot = N.key;
    if (Y != null)
      for (et in Y.key !== void 0 && (ot = "" + Y.key), Y)
        !K.call(Y, et) || et === "key" || et === "__self" || et === "__source" || et === "ref" && Y.ref === void 0 || (lt[et] = Y[et]);
    var et = arguments.length - 2;
    if (et === 1) lt.children = W;
    else if (1 < et) {
      for (var yt = Array(et), it = 0; it < et; it++)
        yt[it] = arguments[it + 2];
      lt.children = yt;
    }
    return tt(N.type, ot, lt);
  }, Et.createContext = function(N) {
    return N = {
      $$typeof: d,
      _currentValue: N,
      _currentValue2: N,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, N.Provider = N, N.Consumer = {
      $$typeof: f,
      _context: N
    }, N;
  }, Et.createElement = function(N, Y, W) {
    var lt, ot = {}, et = null;
    if (Y != null)
      for (lt in Y.key !== void 0 && (et = "" + Y.key), Y)
        K.call(Y, lt) && lt !== "key" && lt !== "__self" && lt !== "__source" && (ot[lt] = Y[lt]);
    var yt = arguments.length - 2;
    if (yt === 1) ot.children = W;
    else if (1 < yt) {
      for (var it = Array(yt), rt = 0; rt < yt; rt++)
        it[rt] = arguments[rt + 2];
      ot.children = it;
    }
    if (N && N.defaultProps)
      for (lt in yt = N.defaultProps, yt)
        ot[lt] === void 0 && (ot[lt] = yt[lt]);
    return tt(N, et, ot);
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(N) {
    return { $$typeof: h, render: N };
  }, Et.isValidElement = at, Et.lazy = function(N) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: N },
      _init: nt
    };
  }, Et.memo = function(N, Y) {
    return {
      $$typeof: p,
      type: N,
      compare: Y === void 0 ? null : Y
    };
  }, Et.startTransition = xt, Et.unstable_useCacheRefresh = function() {
    return z.H.useCacheRefresh();
  }, Et.use = function(N) {
    return z.H.use(N);
  }, Et.useActionState = function(N, Y, W) {
    return z.H.useActionState(N, Y, W);
  }, Et.useCallback = function(N, Y) {
    return z.H.useCallback(N, Y);
  }, Et.useContext = function(N) {
    return z.H.useContext(N);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(N, Y) {
    return z.H.useDeferredValue(N, Y);
  }, Et.useEffect = function(N, Y) {
    return z.H.useEffect(N, Y);
  }, Et.useEffectEvent = function(N) {
    return z.H.useEffectEvent(N);
  }, Et.useId = function() {
    return z.H.useId();
  }, Et.useImperativeHandle = function(N, Y, W) {
    return z.H.useImperativeHandle(N, Y, W);
  }, Et.useInsertionEffect = function(N, Y) {
    return z.H.useInsertionEffect(N, Y);
  }, Et.useLayoutEffect = function(N, Y) {
    return z.H.useLayoutEffect(N, Y);
  }, Et.useMemo = function(N, Y) {
    return z.H.useMemo(N, Y);
  }, Et.useOptimistic = function(N, Y) {
    return z.H.useOptimistic(N, Y);
  }, Et.useReducer = function(N, Y, W) {
    return z.H.useReducer(N, Y, W);
  }, Et.useRef = function(N) {
    return z.H.useRef(N);
  }, Et.useState = function(N) {
    return z.H.useState(N);
  }, Et.useSyncExternalStore = function(N, Y, W) {
    return z.H.useSyncExternalStore(
      N,
      Y,
      W
    );
  }, Et.useTransition = function() {
    return z.H.useTransition();
  }, Et.version = "19.3.0", Et;
}
var Lb;
function lp() {
  return Lb || (Lb = 1, Mh.exports = mD()), Mh.exports;
}
var x = lp();
const st = /* @__PURE__ */ t1(x), js = /* @__PURE__ */ fD({
  __proto__: null,
  default: st
}, [x]);
var _h = { exports: {} }, kr = {}, Nh = { exports: {} }, zh = {};
var Vb;
function pD() {
  return Vb || (Vb = 1, (function(n) {
    function i(G, X) {
      var $ = G.length;
      G.push(X);
      t: for (; 0 < $; ) {
        var nt = $ - 1 >>> 1, F = G[nt];
        if (0 < u(F, X))
          G[nt] = X, G[$] = F, $ = nt;
        else break t;
      }
    }
    function o(G) {
      return G.length === 0 ? null : G[0];
    }
    function r(G) {
      if (G.length === 0) return null;
      var X = G[0], $ = G.pop();
      if ($ !== X) {
        G[0] = $;
        t: for (var nt = 0, F = G.length, xt = F >>> 1; nt < xt; ) {
          var wt = 2 * (nt + 1) - 1, Mt = G[wt], N = wt + 1, Y = G[N];
          if (0 > u(Mt, $))
            N < F && 0 > u(Y, Mt) ? (G[nt] = Y, G[N] = $, nt = N) : (G[nt] = Mt, G[wt] = $, nt = wt);
          else if (N < F && 0 > u(Y, $))
            G[nt] = Y, G[N] = $, nt = N;
          else break t;
        }
      }
      return X;
    }
    function u(G, X) {
      var $ = G.sortIndex - X.sortIndex;
      return $ !== 0 ? $ : G.id - X.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, h = d.now();
      n.unstable_now = function() {
        return d.now() - h;
      };
    }
    var g = [], p = [], y = 1, m = null, b = 3, E = !1, T = !1, R = !1, C = !1, A = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function M(G) {
      for (var X = o(p); X !== null; ) {
        if (X.callback === null) r(p);
        else if (X.startTime <= G)
          r(p), X.sortIndex = X.expirationTime, i(g, X);
        else break;
        X = o(p);
      }
    }
    function H(G) {
      if (R = !1, M(G), !T)
        if (o(g) !== null)
          T = !0, I || (I = !0, at());
        else {
          var X = o(p);
          X !== null && dt(H, X.startTime - G);
        }
    }
    var I = !1, j = -1, z = 5, K = -1;
    function tt() {
      return C ? !0 : !(n.unstable_now() - K < z);
    }
    function ft() {
      if (C = !1, I) {
        var G = n.unstable_now();
        K = G;
        var X = !0;
        try {
          t: {
            T = !1, R && (R = !1, _(j), j = -1), E = !0;
            var $ = b;
            try {
              e: {
                for (M(G), m = o(g); m !== null && !(m.expirationTime > G && tt()); ) {
                  var nt = m.callback;
                  if (typeof nt == "function") {
                    m.callback = null, b = m.priorityLevel;
                    var F = nt(
                      m.expirationTime <= G
                    );
                    if (G = n.unstable_now(), typeof F == "function") {
                      m.callback = F, M(G), X = !0;
                      break e;
                    }
                    m === o(g) && r(g), M(G);
                  } else r(g);
                  m = o(g);
                }
                if (m !== null) X = !0;
                else {
                  var xt = o(p);
                  xt !== null && dt(
                    H,
                    xt.startTime - G
                  ), X = !1;
                }
              }
              break t;
            } finally {
              m = null, b = $, E = !1;
            }
            X = void 0;
          }
        } finally {
          X ? at() : I = !1;
        }
      }
    }
    var at;
    if (typeof D == "function")
      at = function() {
        D(ft);
      };
    else if (typeof MessageChannel < "u") {
      var J = new MessageChannel(), ct = J.port2;
      J.port1.onmessage = ft, at = function() {
        ct.postMessage(null);
      };
    } else
      at = function() {
        A(ft, 0);
      };
    function dt(G, X) {
      j = A(function() {
        G(n.unstable_now());
      }, X);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, n.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : z = 0 < G ? Math.floor(1e3 / G) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, n.unstable_next = function(G) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = b;
      }
      var $ = b;
      b = X;
      try {
        return G();
      } finally {
        b = $;
      }
    }, n.unstable_requestPaint = function() {
      C = !0;
    }, n.unstable_runWithPriority = function(G, X) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var $ = b;
      b = G;
      try {
        return X();
      } finally {
        b = $;
      }
    }, n.unstable_scheduleCallback = function(G, X, $) {
      var nt = n.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? nt + $ : nt) : $ = nt, G) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = $ + F, G = {
        id: y++,
        callback: X,
        priorityLevel: G,
        startTime: $,
        expirationTime: F,
        sortIndex: -1
      }, $ > nt ? (G.sortIndex = $, i(p, G), o(g) === null && G === o(p) && (R ? (_(j), j = -1) : R = !0, dt(H, $ - nt))) : (G.sortIndex = F, i(g, G), T || E || (T = !0, I || (I = !0, at()))), G;
    }, n.unstable_shouldYield = tt, n.unstable_wrapCallback = function(G) {
      var X = b;
      return function() {
        var $ = b;
        b = X;
        try {
          return G.apply(this, arguments);
        } finally {
          b = $;
        }
      };
    };
  })(zh)), zh;
}
var Bb;
function gD() {
  return Bb || (Bb = 1, Nh.exports = pD()), Nh.exports;
}
var jh = { exports: {} }, ke = {};
var Pb;
function vD() {
  if (Pb) return ke;
  Pb = 1;
  var n = lp();
  function i(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        m += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + y + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(i(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, u = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.recoverable"), d = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function h(y, m, b) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: E == null ? null : E === d ? d : "" + E,
      children: y,
      containerInfo: m,
      implementation: b
    };
  }
  var g = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, m) {
    if (y === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ke.browser = function(y) {
    return { $$typeof: f, _reason: y };
  }, ke.createPortal = function(y, m) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(i(299));
    return h(y, m, null, b);
  }, ke.flushSync = function(y) {
    var m = g.T, b = r.p;
    try {
      if (g.T = null, r.p = 2, y) return y();
    } finally {
      g.T = m, r.p = b, r.d.f();
    }
  }, ke.preconnect = function(y, m) {
    typeof y == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(y, m));
  }, ke.prefetchDNS = function(y) {
    typeof y == "string" && r.d.D(y);
  }, ke.preinit = function(y, m) {
    if (typeof y == "string" && m && typeof m.as == "string") {
      var b = m.as, E = p(b, m.crossOrigin), T = typeof m.integrity == "string" ? m.integrity : void 0, R = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      b === "style" ? r.d.S(
        y,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: E,
          integrity: T,
          fetchPriority: R
        }
      ) : b === "script" && r.d.X(y, {
        crossOrigin: E,
        integrity: T,
        fetchPriority: R,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, ke.preinitModule = function(y, m) {
    if (typeof y == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var b = p(
            m.as,
            m.crossOrigin
          );
          r.d.M(y, {
            crossOrigin: b,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && r.d.M(y);
  }, ke.preload = function(y, m) {
    if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var b = m.as, E = p(b, m.crossOrigin);
      r.d.L(y, b, {
        crossOrigin: E,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, ke.preloadModule = function(y, m) {
    if (typeof y == "string")
      if (m) {
        var b = p(m.as, m.crossOrigin);
        r.d.m(y, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: b,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else r.d.m(y);
  }, ke.requestFormReset = function(y) {
    r.d.r(y);
  }, ke.unstable_batchedUpdates = function(y, m) {
    return y(m);
  }, ke.useFormState = function(y, m, b) {
    return g.H.useFormState(y, m, b);
  }, ke.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, ke.version = "19.3.0", ke;
}
var Ub;
function e1() {
  if (Ub) return jh.exports;
  Ub = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), jh.exports = vD(), jh.exports;
}
var Hb;
function yD() {
  if (Hb) return kr;
  Hb = 1;
  var n = gD(), i = lp(), o = e1();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function f(t) {
    for (var e = t, a = e; a && !a.alternate; )
      e = a, (e.flags & 4098) !== 0 && (t = e.return), a = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (f(t) !== t)
      throw Error(r(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (e = f(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var a = t, s = e; ; ) {
      var l = a.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (s = l.return, s !== null) {
          a = s;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c; ) {
          if (c === a) return g(l), t;
          if (c === s) return g(l), e;
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== s.return) a = l, s = c;
      else {
        for (var v = !1, S = l.child; S; ) {
          if (S === a) {
            v = !0, a = l, s = c;
            break;
          }
          if (S === s) {
            v = !0, s = l, a = c;
            break;
          }
          S = S.sibling;
        }
        if (!v) {
          for (S = c.child; S; ) {
            if (S === a) {
              v = !0, a = c, s = l;
              break;
            }
            if (S === s) {
              v = !0, s = c, a = l;
              break;
            }
            S = S.sibling;
          }
          if (!v) throw Error(r(189));
        }
      }
      if (a.alternate !== s) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : e;
  }
  function y(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = y(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function m(t, e, a, s, l, c) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && a(t, s, l, c) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && m(
        t.child,
        e,
        a,
        s,
        l,
        c
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function b(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function E(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function T(t) {
    var e = [null, null], a = b(t);
    return a === null || R(
      e,
      t,
      a.child,
      { foundSelf: !1 }
    ), e;
  }
  function R(t, e, a, s) {
    for (; a !== null; ) {
      if (a === e) s.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (s.foundSelf) return t[1] = a, !0;
        t[0] = a;
      } else if ((a.tag !== 22 || a.memoizedState === null) && R(
        t,
        e,
        a.child,
        s
      ))
        return !0;
      a = a.sibling;
    }
    return !1;
  }
  function C(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var A = null, _ = null;
  function D(t, e, a) {
    return t === a ? !0 : t === e ? (A = t, !0) : !1;
  }
  function M(t, e, a) {
    return t === a ? (_ = t, !1) : t === e ? (_ !== null && (A = t), !0) : !1;
  }
  function H(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function I(t, e, a) {
    for (var s = 0, l = t; l; l = a(l)) s++;
    l = 0;
    for (var c = e; c; c = a(c)) l++;
    for (; 0 < s - l; ) t = a(t), s--;
    for (; 0 < l - s; ) e = a(e), l--;
    for (; s--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = a(t), e = a(e);
    }
    return null;
  }
  var j = Object.assign, z = /* @__PURE__ */ Symbol.for("react.element"), K = /* @__PURE__ */ Symbol.for("react.transitional.element"), tt = /* @__PURE__ */ Symbol.for("react.portal"), ft = /* @__PURE__ */ Symbol.for("react.fragment"), at = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), ct = /* @__PURE__ */ Symbol.for("react.consumer"), dt = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.suspense_list"), nt = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), xt = /* @__PURE__ */ Symbol.for("react.activity"), wt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Mt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), N = /* @__PURE__ */ Symbol.for("react.view_transition"), Y = /* @__PURE__ */ Symbol.for("react.recoverable"), W = Symbol.iterator;
  function lt(t) {
    return t === null || typeof t != "object" ? null : (t = W && t[W] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ot = /* @__PURE__ */ Symbol.for("react.client.reference");
  function et(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ot ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ft:
        return "Fragment";
      case J:
        return "Profiler";
      case at:
        return "StrictMode";
      case X:
        return "Suspense";
      case $:
        return "SuspenseList";
      case xt:
        return "Activity";
      case N:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case tt:
          return "Portal";
        case dt:
          return t.displayName || "Context";
        case ct:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case nt:
          return e = t.displayName || null, e !== null ? e : et(t.type) || "Memo";
        case F:
          e = t._payload, t = t._init;
          try {
            return et(t(e));
          } catch {
          }
      }
    return null;
  }
  var yt = Array.isArray, it = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Rt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ae = [], le = -1;
  function je(t) {
    return { current: t };
  }
  function Qt(t) {
    0 > le || (t.current = ae[le], ae[le] = null, le--);
  }
  function Bt(t, e) {
    le++, ae[le] = t.current, t.current = e;
  }
  var fe = je(null), Va = je(null), ti = je(null), de = je(null);
  function Ba(t, e) {
    switch (Bt(ti, e), Bt(Va, t), Bt(fe, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? P0(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = P0(e), t = U0(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Qt(fe), Bt(fe, t);
  }
  function fn() {
    Qt(fe), Qt(Va), Qt(ti);
  }
  function ks(t) {
    var e = t.memoizedState;
    e !== null && (ps._currentValue = e.memoizedState, Bt(de, t)), e = fe.current;
    var a = U0(e, t.type);
    e !== a && (Bt(Va, t), Bt(fe, a));
  }
  function Ao(t) {
    Va.current === t && (Qt(fe), Qt(Va)), de.current === t && (Qt(de), ps._currentValue = Rt);
  }
  var Zi, ml;
  function Bn(t) {
    if (Zi === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        Zi = e && e[1] || "", ml = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zi + t + ml;
  }
  var Pa = !1;
  function ei(t, e) {
    if (!t || Pa) return "";
    Pa = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (ut) {
                  var V = ut;
                }
                Reflect.construct(t, [], Q);
              } else {
                try {
                  Q.call();
                } catch (ut) {
                  V = ut;
                }
                Q = !1;
                try {
                  var k = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), Q = !0, new t();
                } finally {
                  Q && (k !== void 0 ? Object.defineProperty(t.prototype, "props", k) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ut) {
                V = ut;
              }
              (Q = t()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (ut) {
            if (ut && V && typeof ut.stack == "string")
              return [ut.stack, V.stack];
          }
          return [null, null];
        }
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      l && l.configurable && Object.defineProperty(
        s.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = s.DetermineComponentFrameRoot(), v = c[0], S = c[1];
      if (v && S) {
        var O = v.split(`
`), P = S.split(`
`);
        for (l = s = 0; s < O.length && !O[s].includes("DetermineComponentFrameRoot"); )
          s++;
        for (; l < P.length && !P[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (s === O.length || l === P.length)
          for (s = O.length - 1, l = P.length - 1; 1 <= s && 0 <= l && O[s] !== P[l]; )
            l--;
        for (; 1 <= s && 0 <= l; s--, l--)
          if (O[s] !== P[l]) {
            if (s !== 1 || l !== 1)
              do
                if (s--, l--, 0 > l || O[s] !== P[l]) {
                  var q = `
` + O[s].replace(" at new ", " at ");
                  return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)), q;
                }
              while (1 <= s && 0 <= l);
            break;
          }
      }
    } finally {
      Pa = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Bn(a) : "";
  }
  function pl(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Bn(t.type);
      case 16:
        return Bn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Bn("Suspense Fallback") : Bn("Suspense");
      case 19:
        return Bn("SuspenseList");
      case 0:
      case 15:
        return ei(t.type, !1);
      case 11:
        return ei(t.type.render, !1);
      case 1:
        return ei(t.type, !0);
      case 31:
        return Bn("Activity");
      case 30:
        return Bn("ViewTransition");
      default:
        return "";
    }
  }
  function Ti(t) {
    try {
      var e = "", a = null;
      do
        e += pl(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (s) {
      return `
Error generating stack: ` + s.message + `
` + s.stack;
    }
  }
  var Is = Object.prototype.hasOwnProperty, qs = n.unstable_scheduleCallback, Ro = n.unstable_cancelCallback, gl = n.unstable_shouldYield, wn = n.unstable_requestPaint, Fe = n.unstable_now, Gs = n.unstable_getCurrentPriorityLevel, Pn = n.unstable_ImmediatePriority, Ys = n.unstable_UserBlockingPriority, Do = n.unstable_NormalPriority, vl = n.unstable_LowPriority, Fs = n.unstable_IdlePriority, Tt = n.log, he = n.unstable_setDisableYieldValue, oe = null, Xt = null;
  function We(t) {
    if (typeof Tt == "function" && he(t), Xt && typeof Xt.setStrictMode == "function")
      try {
        Xt.setStrictMode(oe, t);
      } catch {
      }
  }
  var Ht = Math.clz32 ? Math.clz32 : Xs, tn = Math.log, Tn = Math.LN2;
  function Xs(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (tn(t) / Tn | 0) | 0;
  }
  var Xe = 256, Qi = 262144, yl = 4194304;
  function Ua(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function bl(t, e, a) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var l = 0, c = t.suspendedLanes, v = t.pingedLanes;
    t = t.warmLanes;
    var S = s & 134217727;
    return S !== 0 ? (s = S & ~c, s !== 0 ? l = Ua(s) : (v &= S, v !== 0 ? l = Ua(v) : a || (a = S & ~t, a !== 0 && (l = Ua(a))))) : (S = s & ~c, S !== 0 ? l = Ua(S) : v !== 0 ? l = Ua(v) : a || (a = s & ~t, a !== 0 && (l = Ua(a)))), l === 0 ? 0 : e !== 0 && e !== l && (e & c) === 0 && (c = l & -l, a = e & -e, c >= a || c === 32 && (a & 4194048) !== 0) ? e : l;
  }
  function Ks(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function cg(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - Ht(a), l = 1 << s;
        e |= t[s], a &= ~l;
      }
    return e;
  }
  function CC(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function fg() {
    var t = yl;
    return yl <<= 1, (yl & 62914560) === 0 && (yl = 4194304), t;
  }
  function tf(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Zs(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function AC(t, e, a, s, l, c) {
    var v = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var S = t.entanglements, O = t.expirationTimes, P = t.hiddenUpdates;
    for (a = v & ~a; 0 < a; ) {
      var q = 31 - Ht(a), Q = 1 << q;
      S[q] = 0, O[q] = -1;
      var V = P[q];
      if (V !== null)
        for (P[q] = null, q = 0; q < V.length; q++) {
          var k = V[q];
          k !== null && (k.lane &= -536870913);
        }
      a &= ~Q;
    }
    s !== 0 && dg(t, s, 0), c !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(v & ~e));
  }
  function dg(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var s = 31 - Ht(e);
    t.entangledLanes |= e, t.entanglements[s] = t.entanglements[s] | 1073741824 | a & 261930;
  }
  function hg(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var s = 31 - Ht(a), l = 1 << s;
      l & e | t[s] & e && (t[s] |= e), a &= ~l;
    }
  }
  function mg(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : ef(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function ef(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function nf(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function pg() {
    var t = rt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : wb(t.type));
  }
  function gg(t, e) {
    var a = rt.p;
    try {
      return rt.p = t, e();
    } finally {
      rt.p = a;
    }
  }
  var Ei = Math.random().toString(36).slice(2), Le = "__reactFiber$" + Ei, en = "__reactProps$" + Ei, Oo = "__reactContainer$" + Ei, vg = "__reactEvents$" + Ei, RC = "__reactListeners$" + Ei, DC = "__reactHandles$" + Ei, yg = "__reactResources$" + Ei, Qs = "__reactMarker$" + Ei, xl = "__reactLoad$" + Ei;
  function Sl(t) {
    delete t[Le], delete t[en], delete t[RC], delete t[DC];
  }
  function Ha(t) {
    var e;
    if (e = t[Le]) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Oo] || a[Le]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = nb(t); t !== null; ) {
            if (a = t[Le]) return a;
            t = nb(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Mo(t) {
    if (t = t[Le] || t[Oo]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function $s(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function _o(t) {
    var e = t[yg];
    return e || (e = t[yg] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Re(t) {
    t[Qs] = !0;
  }
  function bg(t) {
    t[xl] = void 0;
  }
  var xg = /* @__PURE__ */ new Set(), Sg = {};
  function ka(t, e) {
    No(t, e), No(t + "Capture", e);
  }
  function No(t, e) {
    for (Sg[t] = e, t = 0; t < e.length; t++)
      xg.add(e[t]);
  }
  var OC = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), wg = {}, Tg = {};
  function MC(t) {
    return Is.call(Tg, t) ? !0 : Is.call(wg, t) ? !1 : OC.test(t) ? Tg[t] = !0 : (wg[t] = !0, !1);
  }
  var Ut = !1;
  function Eg() {
    var t = Ut;
    return Ut = !1, t;
  }
  function wl(t, e, a) {
    if (MC(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var s = e.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, a);
      }
  }
  function Tl(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, a);
    }
  }
  function Ci(t, e, a, s) {
    if (s === null) t.removeAttribute(a);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, s);
    }
  }
  function dn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Cg(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function _C(t, e, a) {
    var s = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var l = s.get, c = s.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return l.call(this);
        },
        set: function(v) {
          a = "" + v, c.call(this, v);
        }
      }), Object.defineProperty(t, e, {
        enumerable: s.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(v) {
          a = "" + v;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function af(t) {
    if (!t._valueTracker) {
      var e = Cg(t) ? "checked" : "value";
      t._valueTracker = _C(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Ag(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), s = "";
    return t && (s = Cg(t) ? t.checked ? "true" : "false" : t.value), t = s, t !== a ? (e.setValue(t), !0) : !1;
  }
  var NC = /[\n"\\]/g;
  function En(t) {
    return t.replace(
      NC,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function of(t, e, a, s, l, c, v, S) {
    t.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.type = v : t.removeAttribute("type"), e != null ? v === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + dn(e)) : t.value !== "" + dn(e) && (t.value = "" + dn(e)) : v !== "submit" && v !== "reset" || t.removeAttribute("value"), e != null ? v === "number" && t.value == e ? sf(t, dn(t.value)) : sf(t, dn(e)) : a != null ? sf(t, dn(a)) : s != null && t.removeAttribute("value"), l == null && c != null && (t.defaultChecked = !!c), l != null && (t.checked = l && typeof l != "function" && typeof l != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? t.name = "" + dn(S) : t.removeAttribute("name");
  }
  function Rg(t, e, a, s, l, c, v, S) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || a != null) {
      if (!(c !== "submit" && c !== "reset" || e != null)) {
        af(t);
        return;
      }
      a = a != null ? "" + dn(a) : "", e = e != null ? "" + dn(e) : a, S || e === t.value || (t.value = e), t.defaultValue = e;
    }
    s = s ?? l, s = typeof s != "function" && typeof s != "symbol" && !!s, t.checked = S ? t.checked : !!s, t.defaultChecked = !!s, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v), af(t);
  }
  function sf(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function zo(t, e, a, s) {
    if (t = t.options, e) {
      e = {};
      for (var l = 0; l < a.length; l++)
        e["$" + a[l]] = !0;
      for (a = 0; a < t.length; a++)
        l = e.hasOwnProperty("$" + t[a].value), t[a].selected !== l && (t[a].selected = l), l && s && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + dn(a), e = null, l = 0; l < t.length; l++) {
        if (t[l].value === a) {
          t[l].selected = !0, s && (t[l].defaultSelected = !0);
          return;
        }
        e !== null || t[l].disabled || (e = t[l]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Dg(t, e, a) {
    if (e != null && (e = "" + dn(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + dn(a) : "";
  }
  function Og(t, e, a, s) {
    if (e == null) {
      if (s != null) {
        if (a != null) throw Error(r(92));
        if (yt(s)) {
          if (1 < s.length) throw Error(r(93));
          s = s[0];
        }
        a = s;
      }
      a == null && (a = ""), e = a;
    }
    a = dn(e), t.defaultValue = a, s = t.textContent, s === a && s !== "" && s !== null && (t.value = s), af(t);
  }
  function jo(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var zC = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Mg(t, e, a) {
    var s = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? s ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : s ? t.setProperty(e, a) : typeof a != "number" || a === 0 || zC.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function _g(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, a != null) {
      for (var s in a)
        !a.hasOwnProperty(s) || e != null && e.hasOwnProperty(s) || (s.indexOf("--") === 0 ? t.setProperty(s, "") : s === "float" ? t.cssFloat = "" : t[s] = "", Ut = !0);
      for (var l in e)
        s = e[l], e.hasOwnProperty(l) && a[l] !== s && (Mg(t, l, s), Ut = !0);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && Mg(t, c, e[c]);
  }
  function rf(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var jC = /* @__PURE__ */ new Map([
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
    ["maskType", "mask-type"],
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
    ["xHeight", "x-height"]
  ]), LC = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function El(t) {
    return LC.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ni() {
  }
  var lf = null;
  function uf(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Lo = null, Vo = null;
  function Ng(t) {
    var e = Mo(t);
    if (e && (t = e.stateNode)) {
      var a = t[en] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (of(
            t,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + En(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var s = a[e];
              if (s !== t && s.form === t.form) {
                var l = s[en] || null;
                if (!l) throw Error(r(90));
                of(
                  s,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              s = a[e], s.form === t.form && Ag(s);
          }
          break t;
        case "textarea":
          Dg(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && zo(t, !!a.multiple, e, !1);
      }
    }
  }
  var cf = !1;
  function zg(t, e, a) {
    if (cf) return t(e, a);
    cf = !0;
    try {
      var s = t(e);
      return s;
    } finally {
      if (cf = !1, (Lo !== null || Vo !== null) && (Eu(), Lo && (e = Lo, t = Vo, Vo = Lo = null, Ng(e), t)))
        for (e = 0; e < t.length; e++) Ng(t[e]);
    }
  }
  function Js(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var s = a[en] || null;
    if (s === null) return null;
    a = s[e];
    t: switch (e) {
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
        (s = !s.disabled) || (t = t.type, s = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !s;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function")
      throw Error(
        r(231, e, typeof a)
      );
    return a;
  }
  var Ai = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ff = !1;
  if (Ai)
    try {
      var Ws = {};
      Object.defineProperty(Ws, "passive", {
        get: function() {
          ff = !0;
        }
      }), window.addEventListener("test", Ws, Ws), window.removeEventListener("test", Ws, Ws);
    } catch {
      ff = !1;
    }
  var $i = null, df = null, Cl = null;
  function jg() {
    if (Cl) return Cl;
    var t, e = df, a = e.length, s, l = "value" in $i ? $i.value : $i.textContent, c = l.length;
    for (t = 0; t < a && e[t] === l[t]; t++) ;
    var v = a - t;
    for (s = 1; s <= v && e[a - s] === l[c - s]; s++) ;
    return Cl = l.slice(t, 1 < s ? 1 - s : void 0);
  }
  function Al(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Rl() {
    return !0;
  }
  function Lg() {
    return !1;
  }
  function Ke(t) {
    function e(a, s, l, c, v) {
      this._reactName = a, this._targetInst = l, this.type = s, this.nativeEvent = c, this.target = v, this.currentTarget = null;
      for (var S in t)
        t.hasOwnProperty(S) && (a = t[S], this[S] = a ? a(c) : c[S]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Rl : Lg, this.isPropagationStopped = Lg, this;
    }
    return j(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Rl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Rl);
      },
      persist: function() {
      },
      isPersistent: Rl
    }), e;
  }
  var Ji = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Dl = Ke(Ji), tr = j({}, Ji, { view: 0, detail: 0 }), VC = Ke(tr), hf, mf, er, Ol = j({}, tr, {
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
    getModifierState: gf,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== er && (er && t.type === "mousemove" ? (hf = t.screenX - er.screenX, mf = t.screenY - er.screenY) : mf = hf = 0, er = t), hf);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : mf;
    }
  }), Vg = Ke(Ol), BC = j({}, Ol, { dataTransfer: 0 }), PC = Ke(BC), UC = j({}, tr, { relatedTarget: 0 }), pf = Ke(UC), HC = j({}, Ji, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kC = Ke(HC), IC = j({}, Ji, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), qC = Ke(IC), GC = j({}, Ji, { data: 0 }), Bg = Ke(GC), YC = {
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
    MozPrintableKey: "Unidentified"
  }, FC = {
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
    224: "Meta"
  }, XC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function KC(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = XC[t]) ? !!e[t] : !1;
  }
  function gf() {
    return KC;
  }
  var ZC = j({}, tr, {
    key: function(t) {
      if (t.key) {
        var e = YC[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Al(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? FC[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gf,
    charCode: function(t) {
      return t.type === "keypress" ? Al(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Al(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), QC = Ke(ZC), $C = j({}, Ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Pg = Ke($C), JC = j({}, Ji, { submitter: 0 }), WC = Ke(JC), tA = j({}, tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gf
  }), eA = Ke(tA), nA = j({}, Ji, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), iA = Ke(nA), aA = j({}, Ol, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), oA = Ke(aA), sA = j({}, Ji, {
    newState: 0,
    oldState: 0,
    source: 0
  }), rA = Ke(sA), lA = [9, 13, 27, 32], vf = Ai && "CompositionEvent" in window, nr = null;
  Ai && "documentMode" in document && (nr = document.documentMode);
  var uA = Ai && "TextEvent" in window && !nr, Ug = Ai && (!vf || nr && 8 < nr && 11 >= nr), Hg = " ", kg = !1;
  function Ig(t, e) {
    switch (t) {
      case "keyup":
        return lA.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qg(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Bo = !1;
  function cA(t, e) {
    switch (t) {
      case "compositionend":
        return qg(e);
      case "keypress":
        return e.which !== 32 ? null : (kg = !0, Hg);
      case "textInput":
        return t = e.data, t === Hg && kg ? null : t;
      default:
        return null;
    }
  }
  function fA(t, e) {
    if (Bo)
      return t === "compositionend" || !vf && Ig(t, e) ? (t = jg(), Cl = df = $i = null, Bo = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ug && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var dA = {
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
    week: !0
  };
  function Gg(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!dA[t.type] : e === "textarea";
  }
  function Yg(t, e, a, s) {
    Lo ? Vo ? Vo.push(s) : Vo = [s] : Lo = s, e = Mu(e, "onChange"), 0 < e.length && (a = new Dl(
      "onChange",
      "change",
      null,
      a,
      s
    ), t.push({ event: a, listeners: e }));
  }
  var ir = null, ar = null;
  function hA(t) {
    N0(t, 0);
  }
  function Ml(t) {
    var e = $s(t);
    if (Ag(e)) return t;
  }
  function Fg(t, e) {
    if (t === "change") return e;
  }
  var Xg = !1;
  if (Ai) {
    var yf;
    if (Ai) {
      var bf = "oninput" in document;
      if (!bf) {
        var Kg = document.createElement("div");
        Kg.setAttribute("oninput", "return;"), bf = typeof Kg.oninput == "function";
      }
      yf = bf;
    } else yf = !1;
    Xg = yf && (!document.documentMode || 9 < document.documentMode);
  }
  function Zg() {
    ir && (ir.detachEvent("onpropertychange", Qg), ar = ir = null);
  }
  function Qg(t) {
    if (t.propertyName === "value" && Ml(ar)) {
      var e = [];
      Yg(
        e,
        ar,
        t,
        uf(t)
      ), zg(hA, e);
    }
  }
  function mA(t, e, a) {
    t === "focusin" ? (Zg(), ir = e, ar = a, ir.attachEvent("onpropertychange", Qg)) : t === "focusout" && Zg();
  }
  function pA(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ml(ar);
  }
  function gA(t, e) {
    if (t === "click") return Ml(e);
  }
  function vA(t, e) {
    if (t === "input" || t === "change")
      return Ml(e);
  }
  function yA(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var hn = typeof Object.is == "function" ? Object.is : yA;
  function or(t, e) {
    if (hn(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), s = Object.keys(e);
    if (a.length !== s.length) return !1;
    for (s = 0; s < a.length; s++) {
      var l = a[s];
      if (!Is.call(e, l) || !hn(t[l], e[l]))
        return !1;
    }
    return !0;
  }
  function xf(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function $g(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Jg(t, e) {
    var a = $g(t);
    t = 0;
    for (var s; a; ) {
      if (a.nodeType === 3) {
        if (s = t + a.textContent.length, t <= e && s >= e)
          return { node: a, offset: e - t };
        t = s;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = $g(a);
    }
  }
  function Wg(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Wg(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function tv(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = xf(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = xf(t.document);
    }
    return e;
  }
  function Sf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var bA = Ai && "documentMode" in document && 11 >= document.documentMode, Po = null, wf = null, sr = null, Tf = !1;
  function ev(t, e, a) {
    var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Tf || Po == null || Po !== xf(s) || (s = Po, "selectionStart" in s && Sf(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), sr && or(sr, s) || (sr = s, s = Mu(wf, "onSelect"), 0 < s.length && (e = new Dl(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: s }), e.target = Po)));
  }
  function Ia(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var Uo = {
    animationend: Ia("Animation", "AnimationEnd"),
    animationiteration: Ia("Animation", "AnimationIteration"),
    animationstart: Ia("Animation", "AnimationStart"),
    transitionrun: Ia("Transition", "TransitionRun"),
    transitionstart: Ia("Transition", "TransitionStart"),
    transitioncancel: Ia("Transition", "TransitionCancel"),
    transitionend: Ia("Transition", "TransitionEnd")
  }, Ef = {}, nv = {};
  Ai && (nv = document.createElement("div").style, "AnimationEvent" in window || (delete Uo.animationend.animation, delete Uo.animationiteration.animation, delete Uo.animationstart.animation), "TransitionEvent" in window || delete Uo.transitionend.transition);
  function qa(t) {
    if (Ef[t]) return Ef[t];
    if (!Uo[t]) return t;
    var e = Uo[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in nv)
        return Ef[t] = e[a];
    return t;
  }
  var iv = qa("animationend"), av = qa("animationiteration"), ov = qa("animationstart"), xA = qa("transitionrun"), SA = qa("transitionstart"), wA = qa("transitioncancel"), sv = qa("transitionend"), rv = /* @__PURE__ */ new Map(), Cf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Cf.push("scrollEnd");
  function Un(t, e) {
    rv.set(t, e), ka(e, [t]);
  }
  var TA = 0;
  function Ri(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = qn.identifierPrefix;
    var a = TA++;
    return t = "_" + t + "t_" + a.toString(32) + "_", e.autoName = t;
  }
  function lv(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, a = os;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var l = t[a[s]];
        if (l != null) {
          if (l === "none") return "none";
          e = e == null ? l : e + (" " + l);
        }
      }
    return e ?? t.default;
  }
  function Di(t, e) {
    return t = lv(t), e = lv(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var _l = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Cn = [], Ho = 0, Af = 0;
  function Nl() {
    for (var t = Ho, e = Af = Ho = 0; e < t; ) {
      var a = Cn[e];
      Cn[e++] = null;
      var s = Cn[e];
      Cn[e++] = null;
      var l = Cn[e];
      Cn[e++] = null;
      var c = Cn[e];
      if (Cn[e++] = null, s !== null && l !== null) {
        var v = s.pending;
        v === null ? l.next = l : (l.next = v.next, v.next = l), s.pending = l;
      }
      c !== 0 && uv(a, l, c);
    }
  }
  function zl(t, e, a, s) {
    Cn[Ho++] = t, Cn[Ho++] = e, Cn[Ho++] = a, Cn[Ho++] = s, Af |= s, t.lanes |= s, t = t.alternate, t !== null && (t.lanes |= s);
  }
  function Rf(t, e, a, s) {
    return zl(t, e, a, s), jl(t);
  }
  function Ga(t, e) {
    return zl(t, null, null, e), jl(t);
  }
  function uv(t, e, a) {
    t.lanes |= a;
    var s = t.alternate;
    s !== null && (s.lanes |= a);
    for (var l = !1, c = t.return; c !== null; )
      c.childLanes |= a, s = c.alternate, s !== null && (s.childLanes |= a), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (l = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, l && e !== null && (l = 31 - Ht(a), t = c.hiddenUpdates, s = t[l], s === null ? t[l] = [e] : s.push(e), e.lane = a | 536870912), c) : null;
  }
  function jl(t) {
    if (50 < Dr)
      throw Dr = 0, Tu = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ko = {};
  function EA(t, e, a, s) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nn(t, e, a, s) {
    return new EA(t, e, a, s);
  }
  function Df(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Oi(t, e) {
    var a = t.alternate;
    return a === null ? (a = nn(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 1206910976, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function cv(t, e) {
    t.flags &= 1206910978;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ll(t, e, a, s, l, c) {
    var v = 0;
    if (s = t, typeof s == "function") Df(s) && (v = 1);
    else if (typeof s == "string")
      v = JR(
        t,
        a,
        fe.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (s) {
        case xt:
          return t = nn(31, a, e, l), t.elementType = xt, t.lanes = c, t;
        case ft:
          return Ya(a.children, l, c, e);
        case at:
          v = 8, l |= 24;
          break;
        case J:
          return t = nn(12, a, e, l | 2), t.elementType = J, t.lanes = c, t;
        case X:
          return t = nn(13, a, e, l), t.elementType = X, t.lanes = c, t;
        case $:
          return t = nn(19, a, e, l), t.elementType = $, t.lanes = c, t;
        case wt:
        case N:
          return t = l | 32, t = nn(30, a, e, t), t.elementType = N, t.lanes = c, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof s == "object" && s !== null)
            switch (s.$$typeof) {
              case dt:
                v = 10;
                break t;
              case ct:
                v = 9;
                break t;
              case G:
                v = 11;
                break t;
              case nt:
                v = 14;
                break t;
              case F:
                v = 16, s = null;
                break t;
            }
          v = 29, a = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), s = null;
      }
    return e = nn(v, a, e, l), e.elementType = t, e.type = s, e.lanes = c, e;
  }
  function Ya(t, e, a, s) {
    return t = nn(7, t, s, e), t.lanes = a, t;
  }
  function Of(t, e, a) {
    return t = nn(6, t, null, e), t.lanes = a, t;
  }
  function fv(t) {
    var e = nn(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Mf(t, e, a) {
    return e = nn(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var dv = /* @__PURE__ */ new WeakMap();
  function An(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = dv.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: Ti(e)
      }, dv.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Ti(e)
    };
  }
  var Io = [], qo = 0, Vl = null, rr = 0, Rn = [], Dn = 0, Wi = null, ii = 1, ai = "";
  function Mi(t, e) {
    Io[qo++] = rr, Io[qo++] = Vl, Vl = t, rr = e;
  }
  function hv(t, e, a) {
    Rn[Dn++] = ii, Rn[Dn++] = ai, Rn[Dn++] = Wi, Wi = t;
    var s = ii;
    t = ai;
    var l = 32 - Ht(s) - 1;
    s &= ~(1 << l), a += 1;
    var c = 32 - Ht(e) + l;
    if (30 < c) {
      var v = l - l % 5;
      c = (s & (1 << v) - 1).toString(32), s >>= v, l -= v, ii = 1 << 32 - Ht(e) + l | a << l | s, ai = c + t;
    } else
      ii = 1 << c | a << l | s, ai = t;
  }
  function Bl(t) {
    t.return !== null && (Mi(t, 1), hv(t, 1, 0));
  }
  function _f(t) {
    for (; t === Vl; )
      Vl = Io[--qo], Io[qo] = null, rr = Io[--qo], Io[qo] = null;
    for (; t === Wi; )
      Wi = Rn[--Dn], Rn[Dn] = null, ai = Rn[--Dn], Rn[Dn] = null, ii = Rn[--Dn], Rn[Dn] = null;
  }
  function mv(t, e) {
    Rn[Dn++] = ii, Rn[Dn++] = ai, Rn[Dn++] = Wi, ii = e.id, ai = e.overflow, Wi = t;
  }
  var De = null, Jt = null, Dt = !1, ta = null, On = !1, Nf = Error(r(519));
  function ea(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw lr(An(e, t)), Nf;
  }
  function pv(t) {
    var e = t.stateNode, a = t.type, s = t.memoizedProps;
    switch (e[Le] = t, e[en] = s, a) {
      case "dialog":
        Nt("cancel", e), Nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Nt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Mr.length; a++)
          Nt(Mr[a], e);
        break;
      case "source":
        Nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Nt("error", e), Nt("load", e);
        break;
      case "details":
        Nt("toggle", e);
        break;
      case "input":
        Nt("invalid", e), Rg(
          e,
          s.value,
          s.defaultValue,
          s.checked,
          s.defaultChecked,
          s.type,
          s.name,
          !0
        );
        break;
      case "select":
        Nt("invalid", e);
        break;
      case "textarea":
        Nt("invalid", e), Og(e, s.value, s.defaultValue, s.children);
    }
    a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || s.suppressHydrationWarning === !0 || V0(e.textContent, a) ? (s.popover != null && (Nt("beforetoggle", e), Nt("toggle", e)), s.onScroll != null && Nt("scroll", e), s.onScrollEnd != null && Nt("scrollend", e), s.onClick != null && (e.onclick = ni), e = !0) : e = !1, e || ea(t, !0);
  }
  function Pl(t) {
    for (De = t.return; De; )
      switch (De.tag) {
        case 5:
        case 31:
        case 13:
          On = !1;
          return;
        case 27:
        case 3:
          On = !0;
          return;
        default:
          De = De.return;
      }
  }
  function Go(t) {
    if (t !== De) return !1;
    if (!Dt) return Pl(t), Dt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || lh(t.type, t.memoizedProps)), a = !a), a && Jt && ea(t), Pl(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Jt = eb(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Jt = eb(t);
    } else
      e === 27 ? (e = Jt, va(t.type) ? (t = vh, vh = null, Jt = t) : Jt = e) : Jt = De ? _n(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Fa() {
    Jt = De = null, Dt = !1;
  }
  function zf() {
    var t = ta;
    return t !== null && (sn === null ? sn = t : sn.push.apply(
      sn,
      t
    ), ta = null), t;
  }
  function lr(t) {
    ta === null ? ta = [t] : ta.push(t);
  }
  var jf = je(null), Xa = null, _i = null;
  function na(t, e, a) {
    Bt(jf, e._currentValue), e._currentValue = a;
  }
  function Ni(t) {
    t._currentValue = jf.current, Qt(jf);
  }
  function Ul(t, e, a) {
    for (; t !== null; ) {
      var s = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, s !== null && (s.childLanes |= e)) : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function Lf(t, e, a, s) {
    var l = t.child;
    for (l !== null && (l.return = t); l !== null; ) {
      var c = l.dependencies;
      if (c !== null) {
        var v = l.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var S = c;
          c = l;
          for (var O = 0; O < e.length; O++)
            if (S.context === e[O]) {
              c.lanes |= a, S = c.alternate, S !== null && (S.lanes |= a), Ul(
                c.return,
                a,
                t
              ), s || (v = null);
              break t;
            }
          c = S.next;
        }
      } else if (l.tag === 18) {
        if (v = l.return, v === null) throw Error(r(341));
        v.lanes |= a, c = v.alternate, c !== null && (c.lanes |= a), Ul(v, a, t), v = null;
      } else
        l.tag === 13 && l.memoizedState !== null && l.memoizedState.dehydrated === null ? (l.lanes |= a, v = l.alternate, v !== null && (v.lanes |= a), Ul(
          l.return,
          a,
          t
        ), v = l.child, v = v !== null ? v.sibling : null) : v = l.child;
      if (v !== null) v.return = l;
      else
        for (v = l; v !== null; ) {
          if (v === t) {
            v = null;
            break;
          }
          if (l = v.sibling, l !== null) {
            l.return = v.return, v = l;
            break;
          }
          v = v.return;
        }
      l = v;
    }
  }
  function Ka(t, e, a, s) {
    t = null;
    for (var l = e, c = !1; l !== null; ) {
      if (!c) {
        if ((l.flags & 524288) !== 0) c = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var v = l.alternate;
        if (v === null) throw Error(r(387));
        if (v = v.memoizedProps, v !== null) {
          var S = l.type;
          hn(l.pendingProps.value, v.value) || (t !== null ? t.push(S) : t = [S]);
        }
      } else if (l === de.current) {
        if (v = l.alternate, v === null) throw Error(r(387));
        v.memoizedState.memoizedState !== l.memoizedState.memoizedState && (t !== null ? t.push(ps) : t = [ps]);
      }
      l = l.return;
    }
    return t !== null && Lf(
      e,
      t,
      a,
      s
    ), e.flags |= 262144, t !== null;
  }
  function Hl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!hn(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Za(t) {
    Xa = t, _i = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Ve(t) {
    return gv(Xa, t);
  }
  function kl(t, e) {
    return Xa === null && Za(t), gv(t, e);
  }
  function gv(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, _i === null) {
      if (t === null) throw Error(r(308));
      _i = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else _i = _i.next = e;
    return a;
  }
  var CA = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(a, s) {
        t.push(s);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, AA = n.unstable_scheduleCallback, RA = n.unstable_NormalPriority, me = {
    $$typeof: dt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Vf() {
    return {
      controller: new CA(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ur(t) {
    t.refCount--, t.refCount === 0 && AA(RA, function() {
      t.controller.abort();
    });
  }
  function vv(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var a = t.transitionTypes;
      for (a === null && (a = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var s = e[t];
        a.indexOf(s) === -1 && a.push(s);
      }
    }
  }
  var cr = null;
  function DA(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var fr = null, Bf = 0, Qa = 0, Yo = null;
  function OA(t, e) {
    if (fr === null) {
      var a = fr = [];
      Bf = 0, Qa = Wd(), Yo = {
        status: "pending",
        value: void 0,
        then: function(s) {
          a.push(s);
        }
      };
    }
    return Bf++, e.then(yv, yv), e;
  }
  function yv() {
    if (--Bf === 0 && (cr = null, fr !== null)) {
      Yo !== null && (Yo.status = "fulfilled");
      var t = fr;
      fr = null, Qa = 0, Yo = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function MA(t, e) {
    var a = [], s = {
      status: "pending",
      value: null,
      reason: null,
      then: function(l) {
        a.push(l);
      }
    };
    return t.then(
      function() {
        s.status = "fulfilled", s.value = e;
        for (var l = 0; l < a.length; l++) (0, a[l])(e);
      },
      function(l) {
        for (s.status = "rejected", s.reason = l, l = 0; l < a.length; l++)
          (0, a[l])(void 0);
      }
    ), s;
  }
  var bv = it.S;
  it.S = function(t, e) {
    if (f0 = Fe(), typeof e == "object" && e !== null && typeof e.then == "function" && OA(t, e), cr !== null)
      for (var a = us; a !== null; )
        vv(a, cr), a = a.next;
    if (a = t.types, a !== null) {
      for (var s = us; s !== null; )
        vv(s, a), s = s.next;
      if (Qa !== 0) {
        s = cr, s === null && (s = cr = []);
        for (var l = 0; l < a.length; l++) {
          var c = a[l];
          s.indexOf(c) === -1 && s.push(c);
        }
      }
    }
    bv !== null && bv(t, e);
  };
  var $a = je(null);
  function Pf() {
    var t = $a.current;
    return t !== null ? t : $t.pooledCache;
  }
  function Il(t, e) {
    e === null ? Bt($a, $a.current) : Bt($a, e.pool);
  }
  function xv() {
    var t = Pf();
    return t === null ? null : { parent: me._currentValue, pool: t };
  }
  var Fo = Error(r(460)), Uf = Error(r(474)), ql = Error(r(542)), Gl = { then: function() {
  } };
  function Sv(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function wv(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(ni, ni), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Ev(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(ni, ni);
        else {
          if (t = $t, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(s) {
              if (e.status === "pending") {
                var l = e;
                l.status = "fulfilled", l.value = s;
              }
            },
            function(s) {
              if (e.status === "pending") {
                var l = e;
                l.status = "rejected", l.reason = s;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Ev(t), t;
        }
        throw Wa = e, Fo;
    }
  }
  function Ja(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Wa = a, Fo) : a;
    }
  }
  var Wa = null;
  function Tv() {
    if (Wa === null) throw Error(r(459));
    var t = Wa;
    return Wa = null, t;
  }
  function Ev(t) {
    if (t === Fo || t === ql)
      throw Error(r(483));
  }
  var Xo = null, dr = 0;
  function Yl(t) {
    var e = dr;
    return dr += 1, Xo === null && (Xo = []), wv(Xo, t, e);
  }
  function ia(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Fl(t, e) {
    throw e.$$typeof === z ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Cv(t) {
    function e(B, L) {
      if (t) {
        var U = B.deletions;
        U === null ? (B.deletions = [L], B.flags |= 16) : U.push(L);
      }
    }
    function a(B, L) {
      if (!t) return null;
      for (; L !== null; )
        e(B, L), L = L.sibling;
      return null;
    }
    function s(B) {
      for (var L = /* @__PURE__ */ new Map(); B !== null; )
        B.key === null ? L.set(B.index, B) : L.set(B.key, B), B = B.sibling;
      return L;
    }
    function l(B, L) {
      return B = Oi(B, L), B.index = 0, B.sibling = null, B;
    }
    function c(B, L, U) {
      return B.index = U, t ? (U = B.alternate, U !== null ? (U = U.index, U < L ? (B.flags |= 2, L) : U) : (B.flags |= 134217730, L)) : (B.flags |= 1048576, L);
    }
    function v(B) {
      return t && B.alternate === null && (B.flags |= 134217730), B;
    }
    function S(B, L, U, Z) {
      return L === null || L.tag !== 6 ? (L = Of(U, B.mode, Z), L.return = B, L) : (L = l(L, U), L.return = B, L);
    }
    function O(B, L, U, Z) {
      var ht = U.type;
      return ht === ft ? (B = q(
        B,
        L,
        U.props.children,
        Z,
        U.key
      ), ia(B, U), B) : L !== null && (L.elementType === ht || typeof ht == "object" && ht !== null && ht.$$typeof === F && Ja(ht) === L.type) ? (L = l(L, U.props), ia(L, U), L.return = B, L) : (L = Ll(
        U.type,
        U.key,
        U.props,
        null,
        B.mode,
        Z
      ), ia(L, U), L.return = B, L);
    }
    function P(B, L, U, Z) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== U.containerInfo || L.stateNode.implementation !== U.implementation ? (L = Mf(U, B.mode, Z), L.return = B, L) : (L = l(L, U.children || []), L.return = B, L);
    }
    function q(B, L, U, Z, ht) {
      return L === null || L.tag !== 7 ? (L = Ya(
        U,
        B.mode,
        Z,
        ht
      ), L.return = B, L) : (L = l(L, U), L.return = B, L);
    }
    function Q(B, L, U) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return L = Of(
          "" + L,
          B.mode,
          U
        ), L.return = B, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case K:
            return U = Ll(
              L.type,
              L.key,
              L.props,
              null,
              B.mode,
              U
            ), ia(U, L), U.return = B, U;
          case tt:
            return L = Mf(
              L,
              B.mode,
              U
            ), L.return = B, L;
          case F:
            return L = Ja(L), Q(B, L, U);
        }
        if (yt(L) || lt(L))
          return L = Ya(
            L,
            B.mode,
            U,
            null
          ), L.return = B, L;
        if (typeof L.then == "function")
          return Q(B, Yl(L), U);
        if (L.$$typeof === dt)
          return Q(
            B,
            kl(B, L),
            U
          );
        Fl(B, L);
      }
      return null;
    }
    function V(B, L, U, Z) {
      var ht = L !== null ? L.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return ht !== null ? null : S(B, L, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case K:
            return U.key === ht ? O(B, L, U, Z) : null;
          case tt:
            return U.key === ht ? P(B, L, U, Z) : null;
          case F:
            return U = Ja(U), V(B, L, U, Z);
        }
        if (yt(U) || lt(U))
          return ht !== null ? null : q(B, L, U, Z, null);
        if (typeof U.then == "function")
          return V(
            B,
            L,
            Yl(U),
            Z
          );
        if (U.$$typeof === dt)
          return V(
            B,
            L,
            kl(B, U),
            Z
          );
        Fl(B, U);
      }
      return null;
    }
    function k(B, L, U, Z, ht) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return B = B.get(U) || null, S(L, B, "" + Z, ht);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case K:
            return B = B.get(
              Z.key === null ? U : Z.key
            ) || null, O(L, B, Z, ht);
          case tt:
            return B = B.get(
              Z.key === null ? U : Z.key
            ) || null, P(L, B, Z, ht);
          case F:
            return Z = Ja(Z), k(
              B,
              L,
              U,
              Z,
              ht
            );
        }
        if (yt(Z) || lt(Z))
          return B = B.get(U) || null, q(L, B, Z, ht, null);
        if (typeof Z.then == "function")
          return k(
            B,
            L,
            U,
            Yl(Z),
            ht
          );
        if (Z.$$typeof === dt)
          return k(
            B,
            L,
            U,
            kl(L, Z),
            ht
          );
        Fl(L, Z);
      }
      return null;
    }
    function ut(B, L, U, Z) {
      for (var ht = null, jt = null, bt = L, St = L = 0, ve = null; bt !== null && St < U.length; St++) {
        bt.index > St ? (ve = bt, bt = null) : ve = bt.sibling;
        var Vt = V(
          B,
          bt,
          U[St],
          Z
        );
        if (Vt === null) {
          bt === null && (bt = ve);
          break;
        }
        t && bt && Vt.alternate === null && e(B, bt), L = c(Vt, L, St), jt === null ? ht = Vt : jt.sibling = Vt, jt = Vt, bt = ve;
      }
      if (St === U.length)
        return a(B, bt), Dt && Mi(B, St), ht;
      if (bt === null) {
        for (; St < U.length; St++)
          bt = Q(B, U[St], Z), bt !== null && (L = c(
            bt,
            L,
            St
          ), jt === null ? ht = bt : jt.sibling = bt, jt = bt);
        return Dt && Mi(B, St), ht;
      }
      for (bt = s(bt); St < U.length; St++)
        ve = k(
          bt,
          B,
          St,
          U[St],
          Z
        ), ve !== null && (t && (Vt = ve.alternate, Vt !== null && bt.delete(Vt.key === null ? St : Vt.key)), L = c(
          ve,
          L,
          St
        ), jt === null ? ht = ve : jt.sibling = ve, jt = ve);
      return t && bt.forEach(function(wa) {
        return e(B, wa);
      }), Dt && Mi(B, St), ht;
    }
    function gt(B, L, U, Z) {
      if (U == null) throw Error(r(151));
      for (var ht = null, jt = null, bt = L, St = L = 0, ve = null, Vt = U.next(); bt !== null && !Vt.done; St++, Vt = U.next()) {
        bt.index > St ? (ve = bt, bt = null) : ve = bt.sibling;
        var wa = V(B, bt, Vt.value, Z);
        if (wa === null) {
          bt === null && (bt = ve);
          break;
        }
        t && bt && wa.alternate === null && e(B, bt), L = c(wa, L, St), jt === null ? ht = wa : jt.sibling = wa, jt = wa, bt = ve;
      }
      if (Vt.done)
        return a(B, bt), Dt && Mi(B, St), ht;
      if (bt === null) {
        for (; !Vt.done; St++, Vt = U.next())
          Vt = Q(B, Vt.value, Z), Vt !== null && (L = c(Vt, L, St), jt === null ? ht = Vt : jt.sibling = Vt, jt = Vt);
        return Dt && Mi(B, St), ht;
      }
      for (bt = s(bt); !Vt.done; St++, Vt = U.next())
        Vt = k(bt, B, St, Vt.value, Z), Vt !== null && (t && (ve = Vt.alternate, ve !== null && bt.delete(
          ve.key === null ? St : ve.key
        )), L = c(Vt, L, St), jt === null ? ht = Vt : jt.sibling = Vt, jt = Vt);
      return t && bt.forEach(function(cD) {
        return e(B, cD);
      }), Dt && Mi(B, St), ht;
    }
    function At(B, L, U, Z) {
      if (typeof U == "object" && U !== null && U.type === ft && U.key === null && U.props.ref === void 0 && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case K:
            t: {
              for (var ht = U.key; L !== null; ) {
                if (L.key === ht) {
                  if (ht = U.type, ht === ft) {
                    if (L.tag === 7) {
                      a(
                        B,
                        L.sibling
                      ), Z = l(
                        L,
                        U.props.children
                      ), ia(Z, U), Z.return = B, B = Z;
                      break t;
                    }
                  } else if (L.elementType === ht || typeof ht == "object" && ht !== null && ht.$$typeof === F && Ja(ht) === L.type) {
                    a(
                      B,
                      L.sibling
                    ), Z = l(L, U.props), ia(Z, U), Z.return = B, B = Z;
                    break t;
                  }
                  a(B, L);
                  break;
                } else e(B, L);
                L = L.sibling;
              }
              U.type === ft ? (Z = Ya(
                U.props.children,
                B.mode,
                Z,
                U.key
              ), ia(Z, U), Z.return = B, B = Z) : (Z = Ll(
                U.type,
                U.key,
                U.props,
                null,
                B.mode,
                Z
              ), ia(Z, U), Z.return = B, B = Z);
            }
            return v(B);
          case tt:
            t: {
              for (ht = U.key; L !== null; ) {
                if (L.key === ht)
                  if (L.tag === 4 && L.stateNode.containerInfo === U.containerInfo && L.stateNode.implementation === U.implementation) {
                    a(
                      B,
                      L.sibling
                    ), Z = l(L, U.children || []), Z.return = B, B = Z;
                    break t;
                  } else {
                    a(B, L);
                    break;
                  }
                else e(B, L);
                L = L.sibling;
              }
              Z = Mf(U, B.mode, Z), Z.return = B, B = Z;
            }
            return v(B);
          case F:
            return U = Ja(U), At(
              B,
              L,
              U,
              Z
            );
        }
        if (yt(U))
          return ut(
            B,
            L,
            U,
            Z
          );
        if (lt(U)) {
          if (ht = lt(U), typeof ht != "function") throw Error(r(150));
          return U = ht.call(U), gt(
            B,
            L,
            U,
            Z
          );
        }
        if (typeof U.then == "function")
          return At(
            B,
            L,
            Yl(U),
            Z
          );
        if (U.$$typeof === dt)
          return At(
            B,
            L,
            kl(B, U),
            Z
          );
        Fl(B, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, L !== null && L.tag === 6 ? (a(B, L.sibling), Z = l(L, U), Z.return = B, B = Z) : (a(B, L), Z = Of(U, B.mode, Z), Z.return = B, B = Z), v(B)) : a(B, L);
    }
    return function(B, L, U, Z) {
      try {
        dr = 0;
        var ht = At(
          B,
          L,
          U,
          Z
        );
        return Xo = null, ht;
      } catch (bt) {
        if (bt === Fo || bt === ql) throw bt;
        var jt = nn(29, bt, null, B.mode);
        return jt.lanes = Z, jt.return = B, jt;
      }
    };
  }
  var to = Cv(!0), Av = Cv(!1), aa = !1;
  function Hf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function kf(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function oa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function sa(t, e, a) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (kt & 2) !== 0) {
      var l = s.pending;
      return l === null ? e.next = e : (e.next = l.next, l.next = e), s.pending = e, e = jl(t), uv(t, null, a), e;
    }
    return zl(t, s, e, a), jl(t);
  }
  function hr(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var s = e.lanes;
      s &= t.pendingLanes, a |= s, e.lanes = a, hg(t, a);
    }
  }
  function If(t, e) {
    var a = t.updateQueue, s = t.alternate;
    if (s !== null && (s = s.updateQueue, a === s)) {
      var l = null, c = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var v = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          c === null ? l = c = v : c = c.next = v, a = a.next;
        } while (a !== null);
        c === null ? l = c = e : c = c.next = e;
      } else l = c = e;
      a = {
        baseState: s.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: c,
        shared: s.shared,
        callbacks: s.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var qf = !1;
  function mr() {
    if (qf) {
      var t = Yo;
      if (t !== null) throw t;
    }
  }
  function pr(t, e, a, s) {
    qf = !1;
    var l = t.updateQueue;
    aa = !1;
    var c = l.firstBaseUpdate, v = l.lastBaseUpdate, S = l.shared.pending;
    if (S !== null) {
      l.shared.pending = null;
      var O = S, P = O.next;
      O.next = null, v === null ? c = P : v.next = P, v = O;
      var q = t.alternate;
      q !== null && (q = q.updateQueue, S = q.lastBaseUpdate, S !== v && (S === null ? q.firstBaseUpdate = P : S.next = P, q.lastBaseUpdate = O));
    }
    if (c !== null) {
      var Q = l.baseState;
      v = 0, q = P = O = null, S = c;
      do {
        var V = S.lane & -536870913, k = V !== S.lane;
        if (k ? (zt & V) === V : (s & V) === V) {
          V !== 0 && V === Qa && (qf = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          t: {
            var ut = t, gt = S;
            V = e;
            var At = a;
            switch (gt.tag) {
              case 1:
                if (ut = gt.payload, typeof ut == "function") {
                  Q = ut.call(At, Q, V);
                  break t;
                }
                Q = ut;
                break t;
              case 3:
                ut.flags = ut.flags & -65537 | 128;
              case 0:
                if (ut = gt.payload, V = typeof ut == "function" ? ut.call(At, Q, V) : ut, V == null) break t;
                Q = j({}, Q, V);
                break t;
              case 2:
                aa = !0;
            }
          }
          V = S.callback, V !== null && (t.flags |= 64, k && (t.flags |= 8192), k = l.callbacks, k === null ? l.callbacks = [V] : k.push(V));
        } else
          k = {
            lane: V,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, q === null ? (P = q = k, O = Q) : q = q.next = k, v |= V;
        if (S = S.next, S === null) {
          if (S = l.shared.pending, S === null)
            break;
          k = S, S = k.next, k.next = null, l.lastBaseUpdate = k, l.shared.pending = null;
        }
      } while (!0);
      q === null && (O = Q), l.baseState = O, l.firstBaseUpdate = P, l.lastBaseUpdate = q, c === null && (l.shared.lanes = 0), ha |= v, t.lanes = v, t.memoizedState = Q;
    }
  }
  function Rv(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Dv(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        Rv(a[t], e);
  }
  var ra = je(null), Xl = je(0);
  function Ov(t, e) {
    t = Bi, Bt(Xl, t), Bt(ra, e), Bi = t | e.baseLanes;
  }
  function Gf() {
    Bt(Xl, Bi), Bt(ra, ra.current);
  }
  function Yf() {
    Bi = Xl.current, Qt(ra), Qt(Xl);
  }
  var Be = je(null), qe = null;
  function la(t) {
    var e = t.alternate;
    Bt(Pe, Pe.current & 1), Bt(Be, t), qe === null && (e === null || ra.current !== null || e.memoizedState !== null) && (qe = t);
  }
  function Ff(t) {
    Bt(Pe, Pe.current), Bt(Be, t), qe === null && (qe = t);
  }
  function Mv(t) {
    t.tag === 22 ? (Bt(Pe, Pe.current), Bt(Be, t), qe === null && (qe = t)) : ua();
  }
  function ua() {
    Bt(Pe, Pe.current), Bt(Be, Be.current);
  }
  function mn(t) {
    Qt(Be), qe === t && (qe = null), Qt(Pe);
  }
  var Pe = je(0);
  function gr(t, e) {
    Bt(Be, Be.current), Bt(Pe, e);
  }
  function Xf(t) {
    Qt(Pe), Qt(Be), qe === t && (qe = null);
  }
  function Kl(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || ph(a) || gh(a)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var zi = 0, Ct = null, Kt = null, pe = null, Zl = !1, Ko = !1, eo = !1, Ql = 0, vr = 0, Zo = null, _A = 0;
  function se() {
    throw Error(r(321));
  }
  function Kf(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!hn(t[a], e[a])) return !1;
    return !0;
  }
  function Zf(t, e, a, s, l, c) {
    return zi = c, Ct = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, it.H = t === null || t.memoizedState === null ? hy : my, eo = !1, c = a(s, l), eo = !1, Ko && (c = Nv(
      e,
      a,
      s,
      l
    )), _v(t), c;
  }
  function _v(t) {
    it.H = iu;
    var e = Kt !== null && Kt.next !== null;
    if (zi = 0, pe = Kt = Ct = null, Zl = !1, vr = 0, Zo = null, e) throw Error(r(300));
    t === null || ge || (t = t.dependencies, t !== null && Hl(t) && (ge = !0));
  }
  function Nv(t, e, a, s) {
    Ct = t;
    var l = 0;
    do {
      if (Ko && (Zo = null), vr = 0, Ko = !1, 25 <= l) throw Error(r(301));
      if (l += 1, pe = Kt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      it.H = UA, c = e(a, s);
    } while (Ko);
    return c;
  }
  function NA() {
    var t = it.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? yr(e) : e, t = t.useState()[0], (Kt !== null ? Kt.memoizedState : null) !== t && (Ct.flags |= 1024), e;
  }
  function Qf() {
    var t = Ql !== 0;
    return Ql = 0, t;
  }
  function $f(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function Jf(t) {
    if (Zl) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Zl = !1;
    }
    zi = 0, pe = Kt = Ct = null, Ko = !1, vr = Ql = 0, Zo = null;
  }
  function Ze() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return pe === null ? Ct.memoizedState = pe = t : pe = pe.next = t, pe;
  }
  function ue() {
    if (Kt === null) {
      var t = Ct.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Kt.next;
    var e = pe === null ? Ct.memoizedState : pe.next;
    if (e !== null)
      pe = e, Kt = t;
    else {
      if (t === null)
        throw Ct.alternate === null ? Error(r(467)) : Error(r(310));
      Kt = t, t = {
        memoizedState: Kt.memoizedState,
        baseState: Kt.baseState,
        baseQueue: Kt.baseQueue,
        queue: Kt.queue,
        next: null
      }, pe === null ? Ct.memoizedState = pe = t : pe = pe.next = t;
    }
    return pe;
  }
  function $l() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function yr(t) {
    var e = vr;
    return vr += 1, Zo === null && (Zo = []), t = wv(Zo, t, e), e = Ct, (pe === null ? e.memoizedState : pe.next) === null && (e = e.alternate, it.H = e === null || e.memoizedState === null ? hy : my), t;
  }
  function Jl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return yr(t);
      if (t.$$typeof === Y) return;
      if (t.$$typeof === dt) return Ve(t);
    }
    throw Error(r(438, String(t)));
  }
  function Wf(t) {
    var e = null, a = Ct.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var s = Ct.alternate;
      s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (e = {
        data: s.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = $l(), Ct.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), s = 0; s < t; s++)
        a[s] = Mt;
    return e.index++, a;
  }
  function ji(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Wl(t) {
    var e = ue();
    return td(e, Kt, t);
  }
  function td(t, e, a) {
    var s = t.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = a;
    var l = t.baseQueue, c = s.pending;
    if (c !== null) {
      if (l !== null) {
        var v = l.next;
        l.next = c.next, c.next = v;
      }
      e.baseQueue = l = c, s.pending = null;
    }
    if (c = t.baseState, l === null) t.memoizedState = c;
    else {
      e = l.next;
      var S = v = null, O = null, P = e, q = !1;
      do {
        var Q = P.lane & -536870913;
        if (Q !== P.lane ? (zt & Q) === Q : (zi & Q) === Q) {
          var V = P.revertLane;
          if (V === 0)
            O !== null && (O = O.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }), Q === Qa && (q = !0);
          else if ((zi & V) === V) {
            P = P.next, V === Qa && (q = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: P.revertLane,
              gesture: null,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }, O === null ? (S = O = Q, v = c) : O = O.next = Q, Ct.lanes |= V, ha |= V;
          Q = P.action, eo && a(c, Q), c = P.hasEagerState ? P.eagerState : a(c, Q);
        } else
          V = {
            lane: Q,
            revertLane: P.revertLane,
            gesture: P.gesture,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null
          }, O === null ? (S = O = V, v = c) : O = O.next = V, Ct.lanes |= Q, ha |= Q;
        P = P.next;
      } while (P !== null && P !== e);
      if (O === null ? v = c : O.next = S, !hn(c, t.memoizedState) && (ge = !0, q && (a = Yo, a !== null)))
        throw a;
      t.memoizedState = c, t.baseState = v, t.baseQueue = O, s.lastRenderedState = c;
    }
    return l === null && (s.lanes = 0), [t.memoizedState, s.dispatch];
  }
  function ed(t) {
    var e = ue(), a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var s = a.dispatch, l = a.pending, c = e.memoizedState;
    if (l !== null) {
      a.pending = null;
      var v = l = l.next;
      do
        c = t(c, v.action), v = v.next;
      while (v !== l);
      hn(c, e.memoizedState) || (ge = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), a.lastRenderedState = c;
    }
    return [c, s];
  }
  function zv(t, e, a) {
    var s = Ct, l = ue(), c = Dt;
    if (c) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = e();
    var v = !hn(
      (Kt || l).memoizedState,
      a
    );
    if (v && (l.memoizedState = a, ge = !0), l = l.queue, ad(Vv.bind(null, s, l, t), [
      t
    ]), t = l.getSnapshot !== e || v || pe !== null && (pe.memoizedState.tag & 1) !== 0, Qo(
      t ? 9 : 8,
      { destroy: void 0 },
      Lv.bind(null, s, l, a, e),
      null
    ), t) {
      if (s.flags |= 2048, $t === null) throw Error(r(349));
      c || (zi & 127) !== 0 || jv(s, e, a);
    }
    return a;
  }
  function jv(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = Ct.updateQueue, e === null ? (e = $l(), Ct.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function Lv(t, e, a, s) {
    e.value = a, e.getSnapshot = s, Bv(e) && Pv(t);
  }
  function Vv(t, e, a) {
    return a(function() {
      Bv(e) && Pv(t);
    });
  }
  function Bv(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !hn(t, a);
    } catch {
      return !0;
    }
  }
  function Pv(t) {
    var e = Ga(t, 2);
    e !== null && rn(e, t, 2);
  }
  function nd(t) {
    var e = Ze();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), eo) {
        We(!0);
        try {
          a();
        } finally {
          We(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ji,
      lastRenderedState: t
    }, e;
  }
  function Uv(t, e, a, s) {
    return t.baseState = a, td(
      t,
      Kt,
      typeof s == "function" ? s : ji
    );
  }
  function zA(t, e, a, s, l) {
    if (nu(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var c = {
        payload: l,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          c.listeners.push(v);
        }
      };
      it.T !== null ? a(!0) : c.isTransition = !1, s(c), a = e.pending, a === null ? (c.next = e.pending = c, Hv(e, c)) : (c.next = a.next, e.pending = a.next = c);
    }
  }
  function Hv(t, e) {
    var a = e.action, s = e.payload, l = t.state;
    if (e.isTransition) {
      var c = it.T, v = {};
      v.types = c !== null ? c.types : null, it.T = v;
      try {
        var S = a(l, s), O = it.S;
        O !== null && O(v, S), kv(t, e, S);
      } catch (P) {
        id(t, e, P);
      } finally {
        c !== null && v.types !== null && (c.types = v.types), it.T = c;
      }
    } else
      try {
        c = a(l, s), kv(t, e, c);
      } catch (P) {
        id(t, e, P);
      }
  }
  function kv(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(s) {
        Iv(t, e, s);
      },
      function(s) {
        return id(t, e, s);
      }
    ) : Iv(t, e, a);
  }
  function Iv(t, e, a) {
    e.status = "fulfilled", e.value = a, qv(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Hv(t, a)));
  }
  function id(t, e, a) {
    var s = t.pending;
    if (t.pending = null, s !== null) {
      s = s.next;
      do
        e.status = "rejected", e.reason = a, qv(e), e = e.next;
      while (e !== s);
    }
    t.action = null;
  }
  function qv(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Gv(t, e) {
    return e;
  }
  function Yv(t, e) {
    if (Dt) {
      var a = $t.formState;
      if (a !== null) {
        t: {
          var s = Ct;
          if (Dt) {
            if (Jt) {
              e: {
                for (var l = Jt, c = On; l.nodeType !== 8; ) {
                  if (!c) {
                    l = null;
                    break e;
                  }
                  if (l = _n(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break e;
                  }
                }
                c = l.data, l = c === "F!" || c === "F" ? l : null;
              }
              if (l) {
                Jt = _n(
                  l.nextSibling
                ), s = l.data === "F!";
                break t;
              }
            }
            ea(s);
          }
          s = !1;
        }
        s && (e = a[0]);
      }
    }
    return a = Ze(), a.memoizedState = a.baseState = e, s = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gv,
      lastRenderedState: e
    }, a.queue = s, a = cy.bind(
      null,
      Ct,
      s
    ), s.dispatch = a, s = nd(!1), c = ud.bind(
      null,
      Ct,
      !1,
      s.queue
    ), s = Ze(), l = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, s.queue = l, a = zA.bind(
      null,
      Ct,
      l,
      c,
      a
    ), l.dispatch = a, s.memoizedState = t, [e, a, !1];
  }
  function Fv(t) {
    var e = ue();
    return Xv(e, Kt, t);
  }
  function Xv(t, e, a) {
    if (e = td(
      t,
      e,
      Gv
    )[0], t = Wl(ji)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var s = yr(e);
      } catch (v) {
        throw v === Fo ? ql : v;
      }
    else s = e;
    e = ue();
    var l = e.queue, c = l.dispatch;
    return a !== e.memoizedState && (Ct.flags |= 2048, Qo(
      9,
      { destroy: void 0 },
      jA.bind(null, l, a),
      null
    )), [s, c, t];
  }
  function jA(t, e) {
    t.action = e;
  }
  function Kv(t) {
    var e = ue(), a = Kt;
    if (a !== null)
      return Xv(e, a, t);
    ue(), e = e.memoizedState, a = ue();
    var s = a.queue.dispatch;
    return a.memoizedState = t, [e, s, !1];
  }
  function Qo(t, e, a, s) {
    return t = { tag: t, create: a, deps: s, inst: e, next: null }, e = Ct.updateQueue, e === null && (e = $l(), Ct.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (s = a.next, a.next = t, t.next = s, e.lastEffect = t), t;
  }
  function Zv() {
    return ue().memoizedState;
  }
  function tu(t, e, a, s) {
    var l = Ze();
    Ct.flags |= t, l.memoizedState = Qo(
      1 | e,
      { destroy: void 0 },
      a,
      s === void 0 ? null : s
    );
  }
  function eu(t, e, a, s) {
    var l = ue();
    s = s === void 0 ? null : s;
    var c = l.memoizedState.inst;
    Kt !== null && s !== null && Kf(s, Kt.memoizedState.deps) ? l.memoizedState = Qo(e, c, a, s) : (Ct.flags |= t, l.memoizedState = Qo(
      1 | e,
      c,
      a,
      s
    ));
  }
  function Qv(t, e) {
    tu(8390656, 8, t, e);
  }
  function ad(t, e) {
    eu(2048, 8, t, e);
  }
  function LA(t) {
    Ct.flags |= 4;
    var e = Ct.updateQueue;
    if (e === null)
      e = $l(), Ct.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function $v(t) {
    var e = ue().memoizedState;
    return LA({ ref: e, nextImpl: t }), function() {
      if ((kt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Jv(t, e) {
    return eu(4, 2, t, e);
  }
  function Wv(t, e) {
    return eu(4, 4, t, e);
  }
  function ty(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function ey(t, e, a) {
    a = a != null ? a.concat([t]) : null, eu(4, 4, ty.bind(null, e, t), a);
  }
  function od() {
  }
  function ny(t, e) {
    var a = ue();
    e = e === void 0 ? null : e;
    var s = a.memoizedState;
    return e !== null && Kf(e, s[1]) ? s[0] : (a.memoizedState = [t, e], t);
  }
  function iy(t, e) {
    var a = ue();
    e = e === void 0 ? null : e;
    var s = a.memoizedState;
    if (e !== null && Kf(e, s[1]))
      return s[0];
    if (s = t(), eo) {
      We(!0);
      try {
        t();
      } finally {
        We(!1);
      }
    }
    return a.memoizedState = [s, e], s;
  }
  function sd(t, e, a) {
    return a === void 0 || (zi & 1073741824) !== 0 && (zt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = h0(), Ct.lanes |= t, ha |= t, a);
  }
  function ay(t, e, a, s) {
    return hn(a, e) ? a : ra.current !== null ? (t = sd(t, a, s), hn(t, e) || (ge = !0), t) : (zi & 106) === 0 || (zi & 1073741824) !== 0 && (zt & 261930) === 0 ? (ge = !0, t.memoizedState = a) : (t = h0(), Ct.lanes |= t, ha |= t, e);
  }
  function oy(t, e, a, s, l) {
    var c = rt.p;
    rt.p = c !== 0 && 8 > c ? c : 8;
    var v = it.T, S = {};
    S.types = v !== null ? v.types : null, it.T = S, ud(t, !1, e, a);
    try {
      var O = l(), P = it.S;
      if (P !== null && P(S, O), O !== null && typeof O == "object" && typeof O.then == "function") {
        var q = MA(
          O,
          s
        );
        br(
          t,
          e,
          q,
          yn(t)
        );
      } else
        br(
          t,
          e,
          s,
          yn(t)
        );
    } catch (Q) {
      br(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Q },
        yn()
      );
    } finally {
      rt.p = c, v !== null && S.types !== null && (v.types = S.types), it.T = v;
    }
  }
  function VA() {
  }
  function rd(t, e, a, s) {
    if (t.tag !== 5) throw Error(r(476));
    var l = sy(t).queue;
    oy(
      t,
      l,
      e,
      Rt,
      a === null ? VA : function() {
        return ry(t), a(s);
      }
    );
  }
  function sy(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Rt,
      baseState: Rt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ji,
        lastRenderedState: Rt
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ji,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function ry(t) {
    var e = sy(t);
    e.next === null && (e = t.alternate.memoizedState), br(
      t,
      e.next.queue,
      {},
      yn()
    );
  }
  function ld() {
    return Ve(ps);
  }
  function ly() {
    return ue().memoizedState;
  }
  function uy() {
    return ue().memoizedState;
  }
  function BA(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = yn();
          t = oa(a);
          var s = sa(e, t, a);
          s !== null && (rn(s, e, a), hr(s, e, a)), e = { cache: Vf() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function PA(t, e, a) {
    var s = yn();
    a = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nu(t) ? fy(e, a) : (a = Rf(t, e, a, s), a !== null && (rn(a, t, s), dy(a, e, s)));
  }
  function cy(t, e, a) {
    var s = yn();
    br(t, e, a, s);
  }
  function br(t, e, a, s) {
    var l = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nu(t)) fy(e, l);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var v = e.lastRenderedState, S = c(v, a);
          if (l.hasEagerState = !0, l.eagerState = S, hn(S, v))
            return zl(t, e, l, 0), $t === null && Nl(), !1;
        } catch {
        }
      if (a = Rf(t, e, l, s), a !== null)
        return rn(a, t, s), dy(a, e, s), !0;
    }
    return !1;
  }
  function ud(t, e, a, s) {
    if (s = {
      lane: 2,
      revertLane: Wd(),
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nu(t)) {
      if (e) throw Error(r(479));
    } else
      e = Rf(
        t,
        a,
        s,
        2
      ), e !== null && rn(e, t, 2);
  }
  function nu(t) {
    var e = t.alternate;
    return t === Ct || e !== null && e === Ct;
  }
  function fy(t, e) {
    Ko = Zl = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function dy(t, e, a) {
    if ((a & 4194048) !== 0) {
      var s = e.lanes;
      s &= t.pendingLanes, a |= s, e.lanes = a, hg(t, a);
    }
  }
  var iu = {
    readContext: Ve,
    use: Jl,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useLayoutEffect: se,
    useInsertionEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useSyncExternalStore: se,
    useId: se,
    useHostTransitionStatus: se,
    useFormState: se,
    useActionState: se,
    useOptimistic: se,
    useMemoCache: se,
    useCacheRefresh: se,
    useEffectEvent: se
  }, hy = {
    readContext: Ve,
    use: Jl,
    useCallback: function(t, e) {
      return Ze().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Ve,
    useEffect: Qv,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, tu(
        4194308,
        4,
        ty.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return tu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      tu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = Ze();
      e = e === void 0 ? null : e;
      var s = t();
      if (eo) {
        We(!0);
        try {
          t();
        } finally {
          We(!1);
        }
      }
      return a.memoizedState = [s, e], s;
    },
    useReducer: function(t, e, a) {
      var s = Ze();
      if (a !== void 0) {
        var l = a(e);
        if (eo) {
          We(!0);
          try {
            a(e);
          } finally {
            We(!1);
          }
        }
      } else l = e;
      return s.memoizedState = s.baseState = l, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: l
      }, s.queue = t, t = t.dispatch = PA.bind(
        null,
        Ct,
        t
      ), [s.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ze();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = nd(t);
      var e = t.queue, a = cy.bind(null, Ct, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: od,
    useDeferredValue: function(t, e) {
      var a = Ze();
      return sd(a, t, e);
    },
    useTransition: function() {
      var t = nd(!1);
      return t = oy.bind(
        null,
        Ct,
        t.queue,
        !0,
        !1
      ), Ze().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var s = Ct, l = Ze();
      if (Dt) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = e(), $t === null)
          throw Error(r(349));
        (zt & 127) !== 0 || jv(s, e, a);
      }
      l.memoizedState = a;
      var c = { value: a, getSnapshot: e };
      return l.queue = c, Qv(Vv.bind(null, s, c, t), [
        t
      ]), s.flags |= 2048, Qo(
        9,
        { destroy: void 0 },
        Lv.bind(
          null,
          s,
          c,
          a,
          e
        ),
        null
      ), a;
    },
    useId: function() {
      var t = Ze(), e = $t.identifierPrefix;
      if (Dt) {
        var a = ai, s = ii;
        a = (s & ~(1 << 32 - Ht(s) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = Ql++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = _A++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: ld,
    useFormState: Yv,
    useActionState: Yv,
    useOptimistic: function(t) {
      var e = Ze();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = ud.bind(
        null,
        Ct,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: Wf,
    useCacheRefresh: function() {
      return Ze().memoizedState = BA.bind(
        null,
        Ct
      );
    },
    useEffectEvent: function(t) {
      var e = Ze(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((kt & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, my = {
    readContext: Ve,
    use: Jl,
    useCallback: ny,
    useContext: Ve,
    useEffect: ad,
    useImperativeHandle: ey,
    useInsertionEffect: Jv,
    useLayoutEffect: Wv,
    useMemo: iy,
    useReducer: Wl,
    useRef: Zv,
    useState: function() {
      return Wl(ji);
    },
    useDebugValue: od,
    useDeferredValue: function(t, e) {
      var a = ue();
      return ay(
        a,
        Kt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Wl(ji)[0], e = ue().memoizedState;
      return [
        typeof t == "boolean" ? t : yr(t),
        e
      ];
    },
    useSyncExternalStore: zv,
    useId: ly,
    useHostTransitionStatus: ld,
    useFormState: Fv,
    useActionState: Fv,
    useOptimistic: function(t, e) {
      var a = ue();
      return Uv(a, Kt, t, e);
    },
    useMemoCache: Wf,
    useCacheRefresh: uy,
    useEffectEvent: $v
  }, UA = {
    readContext: Ve,
    use: Jl,
    useCallback: ny,
    useContext: Ve,
    useEffect: ad,
    useImperativeHandle: ey,
    useInsertionEffect: Jv,
    useLayoutEffect: Wv,
    useMemo: iy,
    useReducer: ed,
    useRef: Zv,
    useState: function() {
      return ed(ji);
    },
    useDebugValue: od,
    useDeferredValue: function(t, e) {
      var a = ue();
      return Kt === null ? sd(a, t, e) : ay(
        a,
        Kt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ed(ji)[0], e = ue().memoizedState;
      return [
        typeof t == "boolean" ? t : yr(t),
        e
      ];
    },
    useSyncExternalStore: zv,
    useId: ly,
    useHostTransitionStatus: ld,
    useFormState: Kv,
    useActionState: Kv,
    useOptimistic: function(t, e) {
      var a = ue();
      return Kt !== null ? Uv(a, Kt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: Wf,
    useCacheRefresh: uy,
    useEffectEvent: $v
  };
  function cd(t, e, a, s) {
    e = t.memoizedState, a = a(s, e), a = a == null ? e : j({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var fd = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var s = yn(), l = oa(s);
      l.payload = e, a != null && (l.callback = a), e = sa(t, l, s), e !== null && (rn(e, t, s), hr(e, t, s));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var s = yn(), l = oa(s);
      l.tag = 1, l.payload = e, a != null && (l.callback = a), e = sa(t, l, s), e !== null && (rn(e, t, s), hr(e, t, s));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = yn(), s = oa(a);
      s.tag = 2, e != null && (s.callback = e), e = sa(t, s, a), e !== null && (rn(e, t, a), hr(e, t, a));
    }
  };
  function py(t, e, a, s, l, c, v) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(s, c, v) : e.prototype && e.prototype.isPureReactComponent ? !or(a, s) || !or(l, c) : !0;
  }
  function gy(t, e, a, s) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, s), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, s), e.state !== t && fd.enqueueReplaceState(e, e.state, null);
  }
  function no(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var s in e)
        s !== "ref" && (a[s] = e[s]);
    }
    if (t = t.defaultProps) {
      a === e && (a = j({}, a));
      for (var l in t)
        a[l] === void 0 && (a[l] = t[l]);
    }
    return a;
  }
  function vy(t) {
    _l(t);
  }
  function yy(t) {
    console.error(t);
  }
  function by(t) {
    _l(t);
  }
  function au(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function xy(t, e, a) {
    try {
      var s = t.onCaughtError;
      s(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function dd(t, e, a) {
    return a = oa(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      au(t, e);
    }, a;
  }
  function Sy(t) {
    return t = oa(t), t.tag = 3, t;
  }
  function wy(t, e, a, s) {
    var l = a.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var c = s.value;
      t.payload = function() {
        return l(c);
      }, t.callback = function() {
        xy(e, a, s);
      };
    }
    var v = a.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (t.callback = function() {
      xy(e, a, s), typeof l != "function" && (ma === null ? ma = /* @__PURE__ */ new Set([this]) : ma.add(this));
      var S = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function HA(t, e, a, s, l) {
    if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (e = a.alternate, e !== null && Ka(
        e,
        a,
        l,
        !0
      ), a = Be.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return qe === null ? Cu() : a.alternate === null && re === 0 && (re = 3), a.flags &= -257, a.flags |= 65536, a.lanes = l, s === Gl ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([s]) : e.add(s), Qd(t, s, l)), !1;
          case 22:
            return a.flags |= 65536, s === Gl ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([s]) : a.add(s)), Qd(t, s, l)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return Qd(t, s, l), Cu(), !1;
    }
    if (Dt)
      return e = Be.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = l, s !== Nf && (t = Error(r(422), { cause: s }), lr(An(t, a)))) : (s !== Nf && (e = Error(r(423), {
        cause: s
      }), lr(
        An(e, a)
      )), t = t.current.alternate, t.flags |= 65536, l &= -l, t.lanes |= l, s = An(s, a), l = dd(
        t.stateNode,
        s,
        l
      ), If(t, l), re !== 4 && (re = 2)), !1;
    var c = Error(r(520), { cause: s });
    if (c = An(c, a), Rr === null ? Rr = [c] : Rr.push(c), re !== 4 && (re = 2), e === null) return !0;
    s = An(s, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = l & -l, a.lanes |= t, t = dd(a.stateNode, s, t), If(a, t), !1;
        case 1:
          if (e = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ma === null || !ma.has(c))))
            return a.flags |= 65536, l &= -l, a.lanes |= l, l = Sy(l), wy(
              l,
              t,
              a,
              s
            ), If(a, l), !1;
          break;
        case 22:
          if (a.memoizedState !== null)
            return a.flags |= 65536, !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var hd = Error(r(461)), ge = !1;
  function xe(t, e, a, s) {
    e.child = t === null ? Av(e, null, a, s) : to(
      e,
      t.child,
      a,
      s
    );
  }
  function Ty(t, e, a, s, l) {
    a = a.render;
    var c = e.ref;
    if ("ref" in s) {
      var v = {};
      for (var S in s)
        S !== "ref" && (v[S] = s[S]);
    } else v = s;
    return Za(e), s = Zf(
      t,
      e,
      a,
      v,
      c,
      l
    ), S = Qf(), t !== null && !ge ? ($f(t, e, l), Li(t, e, l)) : (Dt && S && Bl(e), e.flags |= 1, xe(t, e, s, l), e.child);
  }
  function Ey(t, e, a, s, l) {
    if (t === null) {
      var c = a.type;
      return typeof c == "function" && !Df(c) && c.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = c, Cy(
        t,
        e,
        c,
        s,
        l
      )) : (t = Ll(
        a.type,
        null,
        s,
        e,
        e.mode,
        l
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !Sd(t, l)) {
      var v = c.memoizedProps;
      if (a = a.compare, a = a !== null ? a : or, a(v, s) && t.ref === e.ref)
        return Li(t, e, l);
    }
    return e.flags |= 1, t = Oi(c, s), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Cy(t, e, a, s, l) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (or(c, s) && t.ref === e.ref)
        if (ge = !1, e.pendingProps = s = c, Sd(t, l))
          (t.flags & 131072) !== 0 && (ge = !0);
        else
          return e.lanes = t.lanes, Li(t, e, l);
    }
    return md(
      t,
      e,
      a,
      s,
      l
    );
  }
  function Ay(t, e, a, s) {
    var l = s.children, c = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), s.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | a : a, t !== null) {
          for (s = e.child = t.child, l = 0; s !== null; )
            l = l | s.lanes | s.childLanes, s = s.sibling;
          s = l & ~c;
        } else s = 0, e.child = null;
        return Ry(
          t,
          e,
          c,
          a,
          s
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Il(
          e,
          c !== null ? c.cachePool : null
        ), c !== null ? Ov(e, c) : Gf(), Mv(e);
      else
        return s = e.lanes = 536870912, Ry(
          t,
          e,
          c !== null ? c.baseLanes | a : a,
          a,
          s
        );
    } else
      c !== null ? (Il(e, c.cachePool), Ov(e, c), ua(), e.memoizedState = null) : (t !== null && Il(e, null), Gf(), ua());
    return xe(t, e, l, a), e.child;
  }
  function xr(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Ry(t, e, a, s, l) {
    var c = Pf();
    return c = c === null ? null : { parent: me._currentValue, pool: c }, e.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, t !== null && Il(e, null), Gf(), Mv(e), t !== null && Ka(t, e, s, !0), e.childLanes = l, null;
  }
  function ou(t, e) {
    return e = su(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Dy(t, e, a) {
    return to(e, t.child, null, a), t = ou(e, e.pendingProps), t.flags |= 2, mn(e), e.memoizedState = null, t;
  }
  function kA(t, e, a) {
    var s = e.pendingProps, l = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Dt) {
        if (s.mode === "hidden")
          return t = ou(e, s), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, xr(null, t);
        if (Ff(e), (t = Jt) ? (t = tb(
          t,
          On
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Wi !== null ? { id: ii, overflow: ai } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = fv(t), a.return = e, e.child = a, De = e, Jt = null)) : t = null, t === null) throw ea(e);
        return e.lanes = 536870912, null;
      }
      return ou(e, s);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var v = c.dehydrated;
      if (Ff(e), l)
        if (e.flags & 256)
          e.flags &= -257, e = Dy(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (ge || Ka(t, e, a, !1), l = (a & t.childLanes) !== 0, ge || l) {
        if (ra.current === null) {
          if (s = $t, s !== null && (v = mg(s, a), v !== 0 && v !== c.retryLane))
            throw c.retryLane = v, Ga(t, v), rn(s, t, v), hd;
          Cu();
        }
        e = Dy(
          t,
          e,
          a
        );
      } else
        t = c.treeContext, Jt = _n(v.nextSibling), De = e, Dt = !0, ta = null, On = !1, t !== null && mv(e, t), e = ou(e, s), e.flags |= 134221824;
      return e;
    }
    return t = Oi(t.child, {
      mode: s.mode,
      children: s.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function $o(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function md(t, e, a, s, l) {
    return Za(e), a = Zf(
      t,
      e,
      a,
      s,
      void 0,
      l
    ), s = Qf(), t !== null && !ge ? ($f(t, e, l), Li(t, e, l)) : (Dt && s && Bl(e), e.flags |= 1, xe(t, e, a, l), e.child);
  }
  function Oy(t, e, a, s, l, c) {
    return Za(e), e.updateQueue = null, a = Nv(
      e,
      s,
      a,
      l
    ), _v(t), s = Qf(), t !== null && !ge ? ($f(t, e, c), Li(t, e, c)) : (Dt && s && Bl(e), e.flags |= 1, xe(t, e, a, c), e.child);
  }
  function My(t, e, a, s, l) {
    if (Za(e), e.stateNode === null) {
      var c = ko, v = a.contextType;
      typeof v == "object" && v !== null && (c = Ve(v)), c = new a(s, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = fd, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = s, c.state = e.memoizedState, c.refs = {}, Hf(e), v = a.contextType, c.context = typeof v == "object" && v !== null ? Ve(v) : ko, c.state = e.memoizedState, v = a.getDerivedStateFromProps, typeof v == "function" && (cd(
        e,
        a,
        v,
        s
      ), c.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (v = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), v !== c.state && fd.enqueueReplaceState(c, c.state, null), pr(e, s, c, l), mr(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), s = !0;
    } else if (t === null) {
      c = e.stateNode;
      var S = e.memoizedProps, O = no(a, S);
      c.props = O;
      var P = c.context, q = a.contextType;
      v = ko, typeof q == "object" && q !== null && (v = Ve(q));
      var Q = a.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function", S = e.pendingProps !== S, q || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (S || P !== v) && gy(
        e,
        c,
        s,
        v
      ), aa = !1;
      var V = e.memoizedState;
      c.state = V, pr(e, s, c, l), mr(), P = e.memoizedState, S || V !== P || aa ? (typeof Q == "function" && (cd(
        e,
        a,
        Q,
        s
      ), P = e.memoizedState), (O = aa || py(
        e,
        a,
        O,
        s,
        V,
        P,
        v
      )) ? (q || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = s, e.memoizedState = P), c.props = s, c.state = P, c.context = v, s = O) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), s = !1);
    } else {
      c = e.stateNode, kf(t, e), v = e.memoizedProps, q = no(a, v), c.props = q, Q = e.pendingProps, V = c.context, P = a.contextType, O = ko, typeof P == "object" && P !== null && (O = Ve(P)), S = a.getDerivedStateFromProps, (P = typeof S == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v !== Q || V !== O) && gy(
        e,
        c,
        s,
        O
      ), aa = !1, V = e.memoizedState, c.state = V, pr(e, s, c, l), mr();
      var k = e.memoizedState;
      v !== Q || V !== k || aa || t !== null && t.dependencies !== null && Hl(t.dependencies) ? (typeof S == "function" && (cd(
        e,
        a,
        S,
        s
      ), k = e.memoizedState), (q = aa || py(
        e,
        a,
        q,
        s,
        V,
        k,
        O
      ) || t !== null && t.dependencies !== null && Hl(t.dependencies)) ? (P || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, k, O), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        s,
        k,
        O
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || v === t.memoizedProps && V === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && V === t.memoizedState || (e.flags |= 1024), e.memoizedProps = s, e.memoizedState = k), c.props = s, c.state = k, c.context = O, s = q) : (typeof c.componentDidUpdate != "function" || v === t.memoizedProps && V === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && V === t.memoizedState || (e.flags |= 1024), s = !1);
    }
    return c = s, $o(t, e), s = (e.flags & 128) !== 0, c || s ? (c = e.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && s ? (e.child = to(
      e,
      t.child,
      null,
      l
    ), e.child = to(
      e,
      null,
      a,
      l
    )) : xe(t, e, a, l), e.memoizedState = c.state, t = e.child) : t = Li(
      t,
      e,
      l
    ), t;
  }
  function _y(t, e, a, s) {
    return Fa(), e.flags |= 256, xe(t, e, a, s), e.child;
  }
  var pd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function gd(t) {
    return { baseLanes: t, cachePool: xv() };
  }
  function vd(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= vn), t;
  }
  function Ny(t, e, a) {
    var s = e.pendingProps, l = !1, c = (e.flags & 128) !== 0, v;
    if ((v = c) || (v = t !== null && t.memoizedState === null ? !1 : (Pe.current & 2) !== 0), v && (l = !0, e.flags &= -129), v = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Dt) {
        if (l ? la(e) : ua(), (t = Jt) ? (t = tb(
          t,
          On
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Wi !== null ? { id: ii, overflow: ai } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = fv(t), a.return = e, e.child = a, De = e, Jt = null)) : t = null, t === null) throw ea(e);
        return gh(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return c = s.children, s = s.fallback, l ? (ua(), l = e.mode, c = su(
        { mode: "hidden", children: c },
        l
      ), s = Ya(
        s,
        l,
        a,
        null
      ), c.return = e, s.return = e, c.sibling = s, e.child = c, s = e.child, s.memoizedState = gd(a), s.childLanes = vd(
        t,
        v,
        a
      ), e.memoizedState = pd, xr(null, s)) : (la(e), yd(e, c));
    }
    var S = t.memoizedState;
    if (S !== null) {
      var O = S.dehydrated;
      if (O !== null)
        return IA(
          t,
          e,
          c,
          v,
          s,
          O,
          S,
          a
        );
    }
    return l ? (ua(), l = s.fallback, c = e.mode, S = t.child, O = S.sibling, s = Oi(S, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = S.subtreeFlags & 1206910976, O !== null ? l = Oi(O, l) : (l = Ya(
      l,
      c,
      a,
      null
    ), l.flags |= 2), l.return = e, s.return = e, s.sibling = l, e.child = s, xr(null, s), s = e.child, l = t.child.memoizedState, l === null ? l = gd(a) : (c = l.cachePool, c !== null ? (S = me._currentValue, c = c.parent !== S ? { parent: S, pool: S } : c) : c = xv(), l = {
      baseLanes: l.baseLanes | a,
      cachePool: c
    }), s.memoizedState = l, s.childLanes = vd(
      t,
      v,
      a
    ), e.memoizedState = pd, xr(t.child, s)) : (la(e), a = t.child, t = a.sibling, a = Oi(a, {
      mode: "visible",
      children: s.children
    }), a.return = e, a.sibling = null, t !== null && (v = e.deletions, v === null ? (e.deletions = [t], e.flags |= 16) : v.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function yd(t, e) {
    return e = su(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function su(t, e) {
    return t = nn(22, t, null, e), t.lanes = 0, t;
  }
  function ru(t, e, a) {
    return to(e, t.child, null, a), t = yd(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function IA(t, e, a, s, l, c, v, S) {
    if (a)
      return e.flags & 256 ? (la(e), e.flags &= -257, ru(
        t,
        e,
        S
      )) : e.memoizedState !== null ? (ua(), e.child = t.child, e.flags |= 128, null) : (ua(), c = l.fallback, v = e.mode, l = su(
        { mode: "visible", children: l.children },
        v
      ), c = Ya(
        c,
        v,
        S,
        null
      ), c.flags |= 2, l.return = e, c.return = e, l.sibling = c, e.child = l, to(e, t.child, null, S), l = e.child, l.memoizedState = gd(S), l.childLanes = vd(
        t,
        s,
        S
      ), e.memoizedState = pd, xr(null, l));
    if (la(e), gh(c)) {
      if (s = c.nextSibling && c.nextSibling.dataset, s) var O = s.dgst;
      return s = O, s !== "" && (l = Error(r(419)), l.stack = "", l.digest = s, lr({ value: l, source: null, stack: null })), ru(
        t,
        e,
        S
      );
    }
    if (ge || Ka(t, e, S, !1), s = (S & t.childLanes) !== 0, ge || s) {
      if (ra.current !== null)
        return ru(
          t,
          e,
          S
        );
      if (s = $t, s !== null && (l = mg(
        s,
        S
      ), l !== 0 && l !== v.retryLane))
        throw v.retryLane = l, Ga(t, l), rn(s, t, l), hd;
      return ph(c) || Cu(), ru(
        t,
        e,
        S
      );
    }
    return ph(c) ? (e.flags |= 192, e.child = t.child, null) : (t = v.treeContext, Jt = _n(c.nextSibling), De = e, Dt = !0, ta = null, On = !1, t !== null && mv(e, t), e = yd(
      e,
      l.children
    ), e.flags |= 134221824, e);
  }
  function zy(t, e, a) {
    t.lanes |= e;
    var s = t.alternate;
    s !== null && (s.lanes |= e), Ul(t.return, e, a);
  }
  function jy(t) {
    for (var e = null; t !== null; ) {
      var a = t.alternate;
      a !== null && Kl(a) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function lu(t, e, a, s, l, c) {
    var v = t.memoizedState;
    v === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: a,
      tailMode: l,
      treeForkCount: c
    } : (v.isBackwards = e, v.rendering = null, v.renderingStartTime = 0, v.last = s, v.tail = a, v.tailMode = l, v.treeForkCount = c);
  }
  function bd(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var a = e.sibling;
      e.sibling = t.child, t.child = e, e = a;
    }
  }
  function xd(t, e, a) {
    var s = e.pendingProps, l = s.revealOrder, c = s.tail;
    s = s.children;
    var v = Pe.current;
    if (e.flags & 128)
      return gr(e, v), null;
    var S = (v & 2) !== 0;
    if (S ? (v = v & 1 | 2, e.flags |= 128) : v &= 1, gr(e, v), l === "backwards" && t !== null ? (bd(t), xe(t, e, s, a), bd(t)) : xe(t, e, s, a), s = Dt ? rr : 0, !S && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && zy(t, a, e);
        else if (t.tag === 19)
          zy(t, a, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (l) {
      case "backwards":
        a = jy(e.child), a === null ? (l = e.child, e.child = null) : (l = a.sibling, a.sibling = null, bd(e)), lu(
          e,
          !0,
          l,
          null,
          c,
          s
        );
        break;
      case "unstable_legacy-backwards":
        for (a = null, l = e.child, e.child = null; l !== null; ) {
          if (t = l.alternate, t !== null && Kl(t) === null) {
            e.child = l;
            break;
          }
          t = l.sibling, l.sibling = a, a = l, l = t;
        }
        lu(
          e,
          !0,
          a,
          null,
          c,
          s
        );
        break;
      case "together":
        lu(
          e,
          !1,
          null,
          null,
          void 0,
          s
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        a = jy(e.child), a === null ? (l = e.child, e.child = null) : (l = a.sibling, a.sibling = null), lu(
          e,
          !1,
          l,
          a,
          c,
          s
        );
    }
    return e.child;
  }
  function Ly(t, e, a) {
    var s = e.pendingProps;
    return na(e, e.type, s.value), xe(t, e, s.children, a), e.child;
  }
  function Li(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), ha |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (Ka(
          t,
          e,
          a,
          !1
        ), (a & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, a = Oi(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = Oi(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function Sd(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Hl(t)));
  }
  function qA(t, e, a) {
    switch (e.tag) {
      case 3:
        Ba(e, e.stateNode.containerInfo), na(e, me, t.memoizedState.cache), Fa();
        break;
      case 27:
      case 5:
        ks(e);
        break;
      case 4:
        Ba(e, e.stateNode.containerInfo);
        break;
      case 10:
        na(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Ff(e), null;
        break;
      case 13:
        var s = e.memoizedState;
        if (s !== null) {
          if (s.dehydrated !== null)
            return la(e), e.flags |= 128, null;
          s = Ka(
            t,
            e,
            a,
            !1
          );
          var l = e.child.childLanes;
          return s || (a & l) !== 0 ? Ny(t, e, a) : (la(e), t = Li(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        }
        la(e);
        break;
      case 19:
        if (e.flags & 128)
          return xd(
            t,
            e,
            a
          );
        if (l = (t.flags & 128) !== 0, s = (a & e.childLanes) !== 0, s || (Ka(
          t,
          e,
          a,
          !1
        ), s = (a & e.childLanes) !== 0), l) {
          if (s)
            return xd(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (l = e.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), gr(e, Pe.current), s) break;
        return null;
      case 22:
        return e.lanes = 0, Ay(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        na(e, me, t.memoizedState.cache);
    }
    return Li(t, e, a);
  }
  function Vy(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ge = !0;
      else {
        if (!Sd(t, a) && (e.flags & 128) === 0)
          return ge = !1, qA(
            t,
            e,
            a
          );
        ge = (t.flags & 131072) !== 0;
      }
    else
      ge = !1, Dt && (e.flags & 1048576) !== 0 && hv(e, rr, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var s = e.pendingProps;
          if (t = Ja(e.elementType), e.type = t, typeof t == "function")
            Df(t) ? (s = no(t, s), e.tag = 1, e = My(
              null,
              e,
              t,
              s,
              a
            )) : (e.tag = 0, e = md(
              null,
              e,
              t,
              s,
              a
            ));
          else {
            if (t != null) {
              var l = t.$$typeof;
              if (l === G) {
                e.tag = 11, e = Ty(
                  null,
                  e,
                  t,
                  s,
                  a
                );
                break t;
              } else if (l === nt) {
                e.tag = 14, e = Ey(
                  null,
                  e,
                  t,
                  s,
                  a
                );
                break t;
              } else if (l === dt) {
                e.tag = 10, e.type = t, e = Ly(
                  null,
                  e,
                  a
                );
                break t;
              }
            }
            throw e = et(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return md(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return s = e.type, l = no(
          s,
          e.pendingProps
        ), My(
          t,
          e,
          s,
          l,
          a
        );
      case 3:
        t: {
          if (Ba(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          s = e.pendingProps;
          var c = e.memoizedState;
          l = c.element, kf(t, e), pr(e, s, null, a);
          var v = e.memoizedState;
          if (s = v.cache, na(e, me, s), s !== c.cache && Lf(
            e,
            [me],
            a,
            !0
          ), mr(), s = v.element, c.isDehydrated)
            if (c = {
              element: s,
              isDehydrated: !1,
              cache: v.cache
            }, e.updateQueue.baseState = c, e.memoizedState = c, e.flags & 256) {
              e = _y(
                t,
                e,
                s,
                a
              );
              break t;
            } else if (s !== l) {
              l = An(
                Error(r(424)),
                e
              ), lr(l), e = _y(
                t,
                e,
                s,
                a
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Jt = _n(t.firstChild), De = e, Dt = !0, ta = null, On = !0, a = Av(
                e,
                null,
                s,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 134221824, a = a.sibling;
          else {
            if (Fa(), s === l) {
              e = Li(
                t,
                e,
                a
              );
              break t;
            }
            xe(t, e, s, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return $o(t, e), t === null ? (a = rb(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : Dt || (e.stateNode = H0(
          e.type,
          e.pendingProps,
          ti.current,
          e
        )) : e.memoizedState = rb(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return ks(e), t === null && Dt && (s = e.stateNode = ib(
          e.type,
          e.pendingProps,
          ti.current
        ), De = e, On = !0, l = Jt, va(e.type) ? (vh = l, Jt = _n(s.firstChild)) : Jt = l), xe(
          t,
          e,
          e.pendingProps.children,
          a
        ), $o(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Dt && ((l = s = Jt) && (s = BR(
          s,
          e.type,
          e.pendingProps,
          On
        ), s !== null ? (e.stateNode = s, De = e, Jt = _n(s.firstChild), On = !1, l = !0) : l = !1), l || ea(e)), ks(e), l = e.type, c = e.pendingProps, v = t !== null ? t.memoizedProps : null, s = c.children, lh(l, c) ? s = null : v !== null && lh(l, v) && (e.flags |= 32), e.memoizedState !== null && (l = Zf(
          t,
          e,
          NA,
          null,
          null,
          a
        ), ps._currentValue = l), $o(t, e), xe(t, e, s, a), e.child;
      case 6:
        return t === null && Dt && ((t = a = Jt) && (a = PR(
          a,
          e.pendingProps,
          On
        ), a !== null ? (e.stateNode = a, De = e, Jt = null, t = !0) : t = !1), t || ea(e)), null;
      case 13:
        return Ny(t, e, a);
      case 4:
        return Ba(
          e,
          e.stateNode.containerInfo
        ), s = e.pendingProps, t === null ? e.child = to(
          e,
          null,
          s,
          a
        ) : xe(t, e, s, a), e.child;
      case 11:
        return Ty(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return s = e.pendingProps, $o(t, e), xe(t, e, s, a), e.child;
      case 8:
        return xe(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return xe(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return Ly(t, e, a);
      case 9:
        return l = e.type._context, s = e.pendingProps.children, Za(e), l = Ve(l), s = s(l), e.flags |= 1, xe(t, e, s, a), e.child;
      case 14:
        return Ey(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return Cy(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return xd(t, e, a);
      case 31:
        return kA(t, e, a);
      case 22:
        return Ay(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return Za(e), s = Ve(me), t === null ? (l = Pf(), l === null && (l = $t, c = Vf(), l.pooledCache = c, c.refCount++, c !== null && (l.pooledCacheLanes |= a), l = c), e.memoizedState = { parent: s, cache: l }, Hf(e), na(e, me, l)) : ((t.lanes & a) !== 0 && (kf(t, e), pr(e, null, null, a), mr()), l = t.memoizedState, c = e.memoizedState, l.parent !== s ? (l = { parent: s, cache: s }, e.memoizedState = l, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = l), na(e, me, s)) : (s = c.cache, na(e, me, s), s !== l.cache && Lf(
          e,
          [me],
          a,
          !0
        ))), xe(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), s = e.pendingProps, s.name != null && s.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Dt && Bl(e), t !== null && t.memoizedProps.name !== s.name ? e.flags |= 4194816 : $o(t, e), xe(t, e, s.children, a), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Vi(t) {
    t.flags |= 4;
  }
  function wd(t, e, a, s, l) {
    var c;
    if ((c = (t.mode & 32) !== 0) && (c = a === null ? fb(e, s) : fb(e, s) && (s.src !== a.src || s.srcSet !== a.srcSet)), c) {
      if (t.flags |= 16777216, (l & 335544128) === l)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (v0()) t.flags |= 8192;
        else
          throw Wa = Gl, Uf;
    } else t.flags &= -16777217;
  }
  function By(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !db(e))
      if (v0()) t.flags |= 8192;
      else
        throw Wa = Gl, Uf;
  }
  function uu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? fg() : 536870912, t.lanes |= e, ns |= e);
  }
  function Sr(t, e) {
    if (!Dt)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var a = t.tail, s = null; a !== null; )
            a.alternate !== null && (s = a), a = a.sibling;
          s === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : s.sibling = null;
          break;
        default:
          for (e = t.tail, a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t.tail = null : a.sibling = null;
      }
  }
  function Wt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, s = 0;
    if (e)
      for (var l = t.child; l !== null; )
        a |= l.lanes | l.childLanes, s |= l.subtreeFlags & 1206910976, s |= l.flags & 1206910976, l.return = t, l = l.sibling;
    else
      for (l = t.child; l !== null; )
        a |= l.lanes | l.childLanes, s |= l.subtreeFlags, s |= l.flags, l.return = t, l = l.sibling;
    return t.subtreeFlags |= s, t.childLanes = a, e;
  }
  function GA(t, e, a) {
    var s = e.pendingProps;
    switch (_f(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Wt(e), null;
      case 1:
        return Wt(e), null;
      case 3:
        return a = e.stateNode, s = null, t !== null && (s = t.memoizedState.cache), e.memoizedState.cache !== s && (e.flags |= 2048), Ni(me), fn(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Go(e) ? Vi(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, zf())), Wt(e), null;
      case 26:
        var l = e.type, c = e.memoizedState;
        return t === null ? (Vi(e), c !== null ? (Wt(e), By(e, c)) : (Wt(e), wd(
          e,
          l,
          null,
          s,
          a
        ))) : c ? c !== t.memoizedState ? (Vi(e), Wt(e), By(e, c)) : (Wt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== s && Vi(e), Wt(e), wd(
          e,
          l,
          t,
          s,
          a
        )), null;
      case 27:
        if (Ao(e), a = ti.current, l = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== s && Vi(e);
        else {
          if (!s) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Wt(e), e.subtreeFlags &= -33554433, null;
          }
          t = fe.current, Go(e) ? pv(e) : (t = ib(l, s, a), e.stateNode = t, Vi(e));
        }
        return Wt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Ao(e), l = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== s && Vi(e);
        else {
          if (!s) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Wt(e), e.subtreeFlags &= -33554433, null;
          }
          if (c = fe.current, Go(e))
            pv(e);
          else {
            var v = Nr(
              ti.current
            );
            switch (c) {
              case 1:
                c = v.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                c = v.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    c = v.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    c = v.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    c = v.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof s.is == "string" ? v.createElement("select", {
                      is: s.is
                    }) : v.createElement("select"), s.multiple ? c.multiple = !0 : s.size && (c.size = s.size);
                    break;
                  default:
                    c = typeof s.is == "string" ? v.createElement(l, { is: s.is }) : v.createElement(l);
                }
            }
            c[Le] = e, c[en] = s;
            t: for (v = e.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6)
                c.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                v.child.return = v, v = v.child;
                continue;
              }
              if (v === e) break t;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === e)
                  break t;
                v = v.return;
              }
              v.sibling.return = v.return, v = v.sibling;
            }
            e.stateNode = c;
            t: switch (He(c, l, s), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break t;
              case "img":
                s = !0;
                break t;
              default:
                s = !1;
            }
            s && Vi(e);
          }
        }
        return Wt(e), e.subtreeFlags &= -33554433, wd(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          a
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== s && Vi(e);
        else {
          if (typeof s != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = ti.current, Go(e)) {
            if (t = e.stateNode, a = e.memoizedProps, s = null, l = De, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  s = l.memoizedProps;
              }
            t[Le] = e, t = !!(t.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || V0(t.nodeValue, a)), t || ea(e, !0);
          } else
            t = Nr(t).createTextNode(
              s
            ), t[Le] = e, e.stateNode = t;
        }
        return Wt(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (s = Go(e), a !== null) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Le] = e;
            } else
              Fa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Wt(e), t = !1;
          } else
            a = zf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (mn(e), e) : (mn(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Wt(e), null;
      case 13:
        if (s = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (l = Go(e), s !== null && s.dehydrated !== null) {
            if (t === null) {
              if (!l) throw Error(r(318));
              if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
              l[Le] = e;
            } else
              Fa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Wt(e), l = !1;
          } else
            l = zf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return e.flags & 256 ? (mn(e), e) : (mn(e), null);
        }
        return mn(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = s !== null, t = t !== null && t.memoizedState !== null, a && (s = e.child, l = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (l = s.alternate.memoizedState.cachePool.pool), c = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (c = s.memoizedState.cachePool.pool), c !== l && (s.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), uu(e, e.updateQueue), Wt(e), null);
      case 4:
        return fn(), t === null && ih(e.stateNode.containerInfo), e.flags |= 67108864, Wt(e), null;
      case 10:
        return Ni(e.type), Wt(e), null;
      case 19:
        if (Xf(e), s = e.memoizedState, s === null) return Wt(e), null;
        if (l = (e.flags & 128) !== 0, c = s.rendering, c === null)
          if (l) Sr(s, !1);
          else {
            if (re !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = Kl(t), c !== null) {
                  for (e.flags |= 128, Sr(s, !1), t = c.updateQueue, e.updateQueue = t, uu(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    cv(a, t), a = a.sibling;
                  return gr(
                    e,
                    Pe.current & 1 | 2
                  ), Dt && Mi(e, s.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null && Fe() > Su && (e.flags |= 128, l = !0, Sr(s, !1), e.lanes = 4194304);
          }
        else {
          if (!l)
            if (t = Kl(c), t !== null) {
              if (e.flags |= 128, l = !0, t = t.updateQueue, e.updateQueue = t, uu(e, t), Sr(s, !0), s.tail === null && s.tailMode !== "collapsed" && s.tailMode !== "visible" && !c.alternate && !Dt)
                return Wt(e), null;
            } else
              2 * Fe() - s.renderingStartTime > Su && a !== 536870912 && (e.flags |= 128, l = !0, Sr(s, !1), e.lanes = 4194304);
          s.isBackwards ? (c.sibling = e.child, e.child = c) : (t = s.last, t !== null ? t.sibling = c : e.child = c, s.last = c);
        }
        if (s.tail !== null) {
          t = s.tail;
          t: {
            for (a = t; a !== null; ) {
              if (a.alternate !== null) {
                a = !1;
                break t;
              }
              a = a.sibling;
            }
            a = !0;
          }
          return s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Fe(), t.sibling = null, c = Pe.current, c = l ? c & 1 | 2 : c & 1, s.tailMode === "visible" || s.tailMode === "collapsed" || !a || Dt ? gr(e, c) : (a = c, Bt(Be, e), Bt(Pe, a), qe === null && (qe = e)), Dt && Mi(e, s.treeForkCount), t;
        }
        return Wt(e), null;
      case 22:
      case 23:
        return mn(e), Yf(), s = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== s && (e.flags |= 8192) : s && (e.flags |= 8192), s ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Wt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Wt(e), a = e.updateQueue, a !== null && uu(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), s = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (s = e.memoizedState.cachePool.pool), s !== a && (e.flags |= 2048), t !== null && Qt($a), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ni(me), Wt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Wt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function YA(t, e) {
    switch (_f(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ni(me), fn(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ao(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (mn(e), e.alternate === null)
            throw Error(r(340));
          Fa();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (mn(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Fa();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Xf(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return fn(), null;
      case 10:
        return Ni(e.type), null;
      case 22:
      case 23:
        return mn(e), Yf(), t !== null && Qt($a), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ni(me), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Py(t, e) {
    switch (_f(e), e.tag) {
      case 3:
        Ni(me), fn();
        break;
      case 26:
      case 27:
      case 5:
        Ao(e);
        break;
      case 4:
        fn();
        break;
      case 31:
        e.memoizedState !== null && mn(e);
        break;
      case 13:
        mn(e);
        break;
      case 19:
        Xf(e);
        break;
      case 10:
        Ni(e.type);
        break;
      case 22:
      case 23:
        mn(e), Yf(), t !== null && Qt($a);
        break;
      case 24:
        Ni(me);
    }
  }
  function wr(t, e) {
    try {
      var a = e.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var l = s.next;
        a = l;
        do {
          if ((a.tag & t) === t) {
            s = void 0;
            var c = a.create, v = a.inst;
            s = c(), v.destroy = s;
          }
          a = a.next;
        } while (a !== l);
      }
    } catch (S) {
      Gt(e, e.return, S);
    }
  }
  function ca(t, e, a) {
    try {
      var s = e.updateQueue, l = s !== null ? s.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        s = c;
        do {
          if ((s.tag & t) === t) {
            var v = s.inst, S = v.destroy;
            if (S !== void 0) {
              v.destroy = void 0, l = e;
              var O = a, P = S;
              try {
                P();
              } catch (q) {
                Gt(
                  l,
                  O,
                  q
                );
              }
            }
          }
          s = s.next;
        } while (s !== c);
      }
    } catch (q) {
      Gt(e, e.return, q);
    }
  }
  function Uy(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Dv(e, a);
      } catch (s) {
        Gt(t, t.return, s);
      }
    }
  }
  function Hy(t, e, a) {
    a.props = no(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (s) {
      Gt(t, e, s);
    }
  }
  function oi(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = t.stateNode;
            break;
          case 30:
            var l = t.stateNode, c = Ri(t.memoizedProps, l);
            (l.ref === null || l.ref.name !== c) && (l.ref = X0(c)), s = l.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var v = new bn(t);
              m(
                t.child,
                !1,
                LR,
                v,
                void 0,
                void 0
              ), t.stateNode = v;
            }
            s = t.stateNode;
            break;
          default:
            s = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(s) : a.current = s;
      }
    } catch (S) {
      Gt(t, e, S);
    }
  }
  function Ue(t, e) {
    var a = t.ref, s = t.refCleanup;
    if (a !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (l) {
          Gt(t, e, l);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (l) {
          Gt(t, e, l);
        }
      else a.current = null;
  }
  function cu(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var a = 0; a < e.length; a++)
        W0(
          t.stateNode,
          e[a]
        );
  }
  function ky(t) {
    for (var e = t.return; e !== null && (Ed(e) && W0(t.stateNode, e.stateNode), !Td(e)); )
      e = e.return;
  }
  function Tr(t) {
    for (var e = t.return; e !== null && (Ed(e) && VR(t.stateNode, e.stateNode), !Td(e)); )
      e = e.return;
  }
  function Td(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Ed(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Cd(t) {
    var e = t.type, a = t.memoizedProps, s = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && s.focus();
          break t;
        case "img":
          a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet);
      }
    } catch (l) {
      Gt(t, t.return, l);
    }
  }
  function Ad(t, e, a) {
    try {
      var s = t.stateNode;
      vR(s, t.type, a, e), s[en] = e;
    } catch (l) {
      Gt(t, t.return, l);
    }
  }
  function Iy(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && va(t.type) || t.tag === 4;
  }
  function Rd(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Iy(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && va(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Dd(t, e, a, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      l = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(l), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = ni)), cu(t, s), Ut = !0;
    else if (l !== 4 && (l === 27 && (cu(t, s), s = null, va(t.type) && (a = t.stateNode, e = null)), t = t.child, t !== null))
      for (Dd(
        t,
        e,
        a,
        s
      ), t = t.sibling; t !== null; )
        Dd(
          t,
          e,
          a,
          s
        ), t = t.sibling;
  }
  function fu(t, e, a, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      l = t.stateNode, e ? a.insertBefore(l, e) : a.appendChild(l), cu(t, s), Ut = !0;
    else if (l !== 4 && (l === 27 && (cu(t, s), s = null, va(t.type) && (a = t.stateNode)), t = t.child, t !== null))
      for (fu(
        t,
        e,
        a,
        s
      ), t = t.sibling; t !== null; )
        fu(
          t,
          e,
          a,
          s
        ), t = t.sibling;
  }
  function qy(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var s = t.type, l = e.attributes; l.length; )
        e.removeAttributeNode(l[0]);
      He(e, s, a), e[Le] = t, e[en] = a;
    } catch (c) {
      Gt(t, t.return, c);
    }
  }
  var du = !1, pn = null;
  function Gy(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (du = !0);
  }
  var si = null;
  function Yy() {
    var t = si;
    return si = null, t;
  }
  var an = 0;
  function Jo(t, e, a, s, l) {
    return an = 0, Fy(
      t.child,
      e,
      a,
      s,
      l
    );
  }
  function Fy(t, e, a, s, l) {
    for (var c = !1; t !== null; ) {
      if (t.tag === 5) {
        var v = t.stateNode;
        if (s !== null) {
          var S = fh(v);
          s.push(S), S.view && (c = !0);
        } else
          c || fh(v).view && (c = !0);
        du = !0, Y0(
          v,
          an === 0 ? e : e + "_" + an,
          a
        ), an++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || Fy(
        t.child,
        e,
        a,
        s,
        l
      ) && (c = !0));
      t = t.sibling;
    }
    return c;
  }
  function ri(t, e) {
    for (; t !== null; )
      t.tag === 5 ? F0(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || ri(
        t.child,
        e
      )), t = t.sibling;
  }
  function hu(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (hu(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var a = e.name;
          e = Di(e.default, e.share), e !== "none" && (Jo(
            t,
            a,
            e,
            null,
            !1
          ) || ri(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Od(t, e) {
    if (t.tag === 30) {
      var a = t.stateNode, s = t.memoizedProps, l = Ri(s, a), c = Di(
        s.default,
        a.paired ? s.share : s.enter
      );
      c !== "none" ? Jo(t, l, c, null, !1) ? (hu(t), a.paired || e || ss(t, s.onEnter)) : ri(t.child, !1) : hu(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Od(t, e), t = t.sibling;
    else hu(t);
  }
  function Md(t) {
    if (pn !== null && pn.size !== 0) {
      var e = pn;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var a = t.memoizedProps, s = a.name;
              if (s != null && s !== "auto") {
                var l = e.get(s);
                if (l !== void 0) {
                  var c = Di(
                    a.default,
                    a.share
                  );
                  if (c !== "none" && (Jo(
                    t,
                    s,
                    c,
                    null,
                    !1
                  ) ? (c = t.stateNode, l.paired = c, c.paired = l, ss(t, a.onShare)) : ri(t.child, !1)), e.delete(s), e.size === 0) break;
                }
              }
            }
            Md(t);
          }
          t = t.sibling;
        }
    }
  }
  function _d(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, a = Ri(e, t.stateNode), s = pn !== null ? pn.get(a) : void 0, l = Di(
        e.default,
        s !== void 0 ? e.share : e.exit
      );
      l !== "none" && (Jo(t, a, l, null, !1) ? s !== void 0 ? (l = t.stateNode, s.paired = l, l.paired = s, pn.delete(a), ss(t, e.onShare)) : ss(t, e.onExit) : ri(t.child, !1)), pn !== null && Md(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        _d(t), t = t.sibling;
    else
      pn !== null && Md(t);
  }
  function Xy(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, a = Ri(e, t.stateNode);
        e = Di(e.default, e.update), t.flags &= -5, e !== "none" && Jo(
          t,
          a,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Xy(t);
      t = t.sibling;
    }
  }
  function Nd(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, ri(t.child, !1));
          }
          Nd(t);
        }
        t = t.sibling;
      }
  }
  function mu(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, ri(t.child, !1), Nd(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        mu(t), t = t.sibling;
    else Nd(t);
  }
  function Ky(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? ri(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Ky(t), t = t.sibling;
  }
  function zd(t, e, a, s, l, c, v) {
    for (var S = !1; e !== null; ) {
      if (e.tag === 5) {
        var O = e.stateNode;
        if (c !== null && an < c.length) {
          var P = c[an], q = fh(O);
          (P.view || q.view) && (S = !0);
          var Q;
          if (Q = (t.flags & 4) === 0)
            if (q.clip) Q = !0;
            else {
              Q = P.rect;
              var V = q.rect;
              Q = Q.y !== V.y || Q.x !== V.x || Q.height !== V.height || Q.width !== V.width;
            }
          Q && (t.flags |= 4), q.abs ? q = !P.abs : (P = P.rect, q = q.rect, q = P.height !== q.height || P.width !== q.width), q && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Y0(
          O,
          an === 0 ? a : a + "_" + an,
          l
        ), S && (t.flags & 4) !== 0 || (si === null && (si = []), si.push(
          O,
          an === 0 ? s : s + "_" + an,
          e.memoizedProps
        )), an++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && v ? t.flags |= e.flags & 32 : zd(
        t,
        e.child,
        a,
        s,
        l,
        c,
        v
      ) && (S = !0));
      e = e.sibling;
    }
    return S;
  }
  function Zy(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var a = t.memoizedProps, s = t.stateNode, l = Ri(a, s), c = Di(a.default, a.update), v;
        v = t.memoizedState, t.memoizedState = null, s = t;
        var S = t.child;
        an = 0, l = zd(
          s,
          S,
          l,
          l,
          c,
          v,
          !1
        ), (t.flags & 4) !== 0 && l && ss(t, a.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Zy(t);
      t = t.sibling;
    }
  }
  var Oe = !1, It = !1, li = !1, jd = !1, Qy = typeof WeakSet == "function" ? WeakSet : Set, Me = null, ui = !1, Er = !1, pu = !1, Ld = !1;
  function FA(t, e, a) {
    if (t = t.containerInfo, sh = gs, t = tv(t), Sf(t)) {
      if ("selectionStart" in t)
        var s = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          s = (s = t.ownerDocument) && s.defaultView || window;
          var l = s.getSelection && s.getSelection();
          if (l && l.rangeCount !== 0) {
            s = l.anchorNode;
            var c = l.anchorOffset, v = l.focusNode;
            l = l.focusOffset;
            try {
              s.nodeType, v.nodeType;
            } catch {
              s = null;
              break t;
            }
            var S = 0, O = -1, P = -1, q = 0, Q = 0, V = t, k = null;
            e: for (; ; ) {
              for (var ut; V !== s || c !== 0 && V.nodeType !== 3 || (O = S + c), V !== v || l !== 0 && V.nodeType !== 3 || (P = S + l), V.nodeType === 3 && (S += V.nodeValue.length), (ut = V.firstChild) !== null; )
                k = V, V = ut;
              for (; ; ) {
                if (V === t) break e;
                if (k === s && ++q === c && (O = S), k === v && ++Q === l && (P = S), (ut = V.nextSibling) !== null) break;
                V = k, k = V.parentNode;
              }
              V = ut;
            }
            s = O === -1 || P === -1 ? null : { start: O, end: P };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (rh = { focusedElem: t, selectionRange: s }, gs = !1, a = (a & 335544064) === a, Me = e, e = a ? 9270 : 1024; Me !== null; ) {
      if (t = Me, a && (s = t.deletions, s !== null))
        for (c = 0; c < s.length; c++)
          a && _d(s[c]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        a && Gy(t), gu(a);
      else {
        if (t.tag === 22) {
          if (s = t.alternate, t.memoizedState !== null) {
            s !== null && s.memoizedState === null && a && _d(s), gu(a);
            continue;
          } else if (s !== null && s.memoizedState !== null) {
            a && Gy(t), gu(a);
            continue;
          }
        }
        s = t.child, (t.subtreeFlags & e) !== 0 && s !== null ? (s.return = t, Me = s) : (a && Xy(t), gu(a));
      }
    }
    pn = null;
  }
  function gu(t) {
    for (; Me !== null; ) {
      var e = Me, a = t, s = e.alternate, l = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && s !== null) {
            a = void 0, l = s.memoizedProps, s = s.memoizedState;
            var c = e.stateNode;
            try {
              var v = no(
                e.type,
                l
              );
              a = c.getSnapshotBeforeUpdate(
                v,
                s
              ), c.__reactInternalSnapshotBeforeUpdate = a;
            } catch (S) {
              Gt(e, e.return, S);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (s = e.stateNode.containerInfo, a = s.nodeType, a === 9)
              mh(s);
            else if (a === 1)
              switch (s.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  mh(s);
                  break;
                default:
                  s.textContent = "";
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
        case 30:
          a && s !== null && (a = Ri(
            s.memoizedProps,
            s.stateNode
          ), l = e.memoizedProps, l = Di(l.default, l.update), l !== "none" && Jo(
            s,
            a,
            l,
            s.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((l & 1024) !== 0) throw Error(r(163));
      }
      if (s = e.sibling, s !== null) {
        s.return = e.return, Me = s;
        break;
      }
      Me = e.return;
    }
  }
  function $y(t, e, a) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ci(t, a), s & 4 && wr(5, a);
        break;
      case 1:
        if (ci(t, a), s & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (v) {
              Gt(a, a.return, v);
            }
          else {
            var l = no(
              a.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                l,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              Gt(
                a,
                a.return,
                v
              );
            }
          }
        s & 64 && Uy(a), s & 512 && oi(a, a.return);
        break;
      case 3:
        if (ci(t, a), s & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Dv(t, e);
          } catch (v) {
            Gt(a, a.return, v);
          }
        }
        break;
      case 27:
        e === null && s & 4 && qy(a);
      case 26:
      case 5:
        ci(t, a), e === null && s & 4 && Cd(a), s & 512 && oi(a, a.return);
        break;
      case 12:
        ci(t, a);
        break;
      case 31:
        ci(t, a), s & 4 && e0(t, a);
        break;
      case 13:
        ci(t, a), s & 4 && n0(t, a), s & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = aR.bind(
          null,
          a
        ), UR(t, a))));
        break;
      case 22:
        if (s = a.memoizedState !== null || Oe, !s) {
          var c = e !== null && e.memoizedState !== null || It;
          e = Oe, l = It, Oe = s, (It = c) && !l ? (s = 2, (a.subtreeFlags & 8772) !== 0 && (s |= 1), In(
            t,
            a,
            s
          )) : ci(t, a), Oe = e, It = l;
        }
        break;
      case 30:
        ci(t, a), s & 512 && oi(a, a.return);
        break;
      case 7:
        s & 512 && oi(a, a.return);
      default:
        ci(t, a);
    }
  }
  function Vd(t, e) {
    for (t = t.child; t !== null; )
      Jy(t, e), t = t.sibling;
  }
  function Jy(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var a = t.stateNode;
          if (e) {
            var s = a.style;
            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
          } else {
            var l = t.stateNode, c = t.memoizedProps.style, v = c != null && c.hasOwnProperty("display") ? c.display : null;
            l.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
          }
        } catch (O) {
          Gt(t, t.return, O);
        }
        Bd(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Ut = !0;
        } catch (O) {
          Gt(t, t.return, O);
        }
        break;
      case 18:
        try {
          var S = t.stateNode;
          e ? G0(S, !0) : G0(t.stateNode, !1);
        } catch (O) {
          Gt(t, t.return, O);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Vd(t, e);
        break;
      default:
        Vd(t, e);
    }
  }
  function Bd(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var a = t, s = e;
          switch (a.tag) {
            case 4:
              Jy(a, s);
              break t;
            case 22:
              a.memoizedState === null && Bd(a, s);
              break t;
            default:
              Bd(a, s);
          }
        }
        t = t.sibling;
      }
  }
  function Wy(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Wy(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Sl(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ne = null, on = !1;
  function Hn(t, e, a) {
    for (a = a.child; a !== null; )
      t0(t, e, a), a = a.sibling;
  }
  function t0(t, e, a) {
    if (Xt && typeof Xt.onCommitFiberUnmount == "function")
      try {
        Xt.onCommitFiberUnmount(oe, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        It || Ue(a, e), Hn(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && !It && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        It || Ue(a, e), Tr(a);
        var s = ne, l = on;
        va(a.type) && (ne = a.stateNode, on = !1), Hn(
          t,
          e,
          a
        ), ab(
          a.stateNode,
          a.type,
          a.memoizedProps
        ), ne = s, on = l;
        break;
      case 5:
        It || Ue(a, e), Tr(a);
      case 6:
        if (a.tag === 6 && Tr(a), s = ne, l = on, ne = null, Hn(
          t,
          e,
          a
        ), ne = s, on = l, ne !== null)
          if (on)
            try {
              (ne.nodeType === 9 ? ne.body : ne.nodeName === "HTML" ? ne.ownerDocument.body : ne).removeChild(a.stateNode), Ut = !0;
            } catch (c) {
              Gt(
                a,
                e,
                c
              );
            }
          else
            try {
              ne.removeChild(a.stateNode), Ut = !0;
            } catch (c) {
              Gt(
                a,
                e,
                c
              );
            }
        break;
      case 18:
        ne !== null && (on ? (t = ne, q0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), vs(t)) : q0(ne, a.stateNode));
        break;
      case 4:
        s = ne, l = on, ne = a.stateNode.containerInfo, on = !0, Hn(
          t,
          e,
          a
        ), ne = s, on = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ca(2, a, e), It || ca(4, a, e), Hn(
          t,
          e,
          a
        );
        break;
      case 1:
        It || (Ue(a, e), s = a.stateNode, typeof s.componentWillUnmount == "function" && Hy(
          a,
          e,
          s
        )), Hn(
          t,
          e,
          a
        );
        break;
      case 21:
        Hn(
          t,
          e,
          a
        );
        break;
      case 22:
        It = (s = It) || a.memoizedState !== null, Hn(
          t,
          e,
          a
        ), It = s;
        break;
      case 30:
        Ue(a, e), Hn(
          t,
          e,
          a
        );
        break;
      case 7:
        It || Ue(a, e), Hn(
          t,
          e,
          a
        );
        break;
      default:
        Hn(
          t,
          e,
          a
        );
    }
  }
  function e0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        vs(t);
      } catch (a) {
        Gt(e, e.return, a);
      }
    }
  }
  function n0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        vs(t);
      } catch (a) {
        Gt(e, e.return, a);
      }
  }
  function XA(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Qy()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Qy()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function vu(t, e) {
    var a = XA(t);
    e.forEach(function(s) {
      if (!a.has(s)) {
        a.add(s);
        var l = oR.bind(null, t, s);
        s.then(l, l);
      }
    });
  }
  function Qe(t, e, a) {
    var s = e.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var c = s[l], v = t, S = e, O = S;
        t: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (va(O.type)) {
                ne = O.stateNode, on = !1;
                break t;
              }
              break;
            case 5:
              ne = O.stateNode, on = !1;
              break t;
            case 3:
            case 4:
              ne = O.stateNode.containerInfo, on = !0;
              break t;
          }
          O = O.return;
        }
        if (ne === null) throw Error(r(160));
        t0(v, S, c), ne = null, on = !1, v = c.alternate, v !== null && (v.return = null), c.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        i0(e, t, a), e = e.sibling;
  }
  var kn = null;
  function i0(t, e, a) {
    var s = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (l & 4 && (s = t.updateQueue, s = s !== null ? s.events : null, s !== null))
          for (var c = 0; c < s.length; c++) {
            var v = s[c];
            v.ref.impl = v.nextImpl;
          }
        Qe(e, t, a), $e(t), l & 4 && (ca(3, t, t.return), wr(3, t), ca(5, t, t.return));
        break;
      case 1:
        Qe(e, t, a), $e(t), l & 512 && (It || s === null || Ue(s, s.return)), l & 64 && Oe && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        if (c = kn, Qe(e, t, a), $e(t), l & 512 && (It || s === null || Ue(s, s.return)), l & 4)
          if (l = s !== null ? s.memoizedState : null, a = t.memoizedState, s === null)
            if (a === null)
              if (t.stateNode === null)
                if (Oe)
                  t.stateNode = H0(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, a = t.memoizedProps, l = c.ownerDocument || c;
                    e: switch (e) {
                      case "title":
                        s = l.getElementsByTagName("title")[0], (!s || s[Qs] || s[Le] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = l.createElement(e), l.head.insertBefore(
                          s,
                          l.querySelector("head > title")
                        )), He(s, e, a), s[Le] = t, Re(s), e = s;
                        break t;
                      case "link":
                        if (c = cb(
                          "link",
                          "href",
                          l
                        ).get(e + (a.href || ""))) {
                          for (v = 0; v < c.length; v++)
                            if (s = c[v], s.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && s.getAttribute("rel") === (a.rel == null ? null : a.rel) && s.getAttribute("title") === (a.title == null ? null : a.title) && s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              c.splice(v, 1);
                              break e;
                            }
                        }
                        s = l.createElement(e), He(s, e, a), l.head.appendChild(s);
                        break;
                      case "meta":
                        if (c = cb(
                          "meta",
                          "content",
                          l
                        ).get(e + (a.content || ""))) {
                          for (v = 0; v < c.length; v++)
                            if (s = c[v], s.getAttribute("content") === (a.content == null ? null : "" + a.content) && s.getAttribute("name") === (a.name == null ? null : a.name) && s.getAttribute("property") === (a.property == null ? null : a.property) && s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && s.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              c.splice(v, 1);
                              break e;
                            }
                        }
                        s = l.createElement(e), He(s, e, a), l.head.appendChild(s);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    s[Le] = t, Re(s), e = s;
                  }
                  t.stateNode = e;
                }
              else
                Oe || Sh(c, t.type, t.stateNode);
            else
              t.stateNode = ub(
                c,
                a,
                t.memoizedProps
              );
          else
            l !== a ? (l === null ? (e = s.stateNode, e === null || It || e.parentNode.removeChild(e)) : l.count--, a === null ? Oe || Sh(c, t.type, t.stateNode) : ub(c, a, t.memoizedProps)) : a === null && t.stateNode !== null && Ad(
              t,
              t.memoizedProps,
              s.memoizedProps
            );
        break;
      case 27:
        Qe(e, t, a), $e(t), l & 512 && (It || s === null || Ue(s, s.return)), s !== null && l & 4 && Ad(
          t,
          t.memoizedProps,
          s.memoizedProps
        );
        break;
      case 5:
        if (c = li, li = !1, Qe(e, t, a), li = c, $e(t), l & 512 && (It || s === null || Ue(s, s.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            jo(e, ""), Ut = !0;
          } catch (q) {
            Gt(t, t.return, q);
          }
        }
        l & 4 && t.stateNode != null && (e = t.memoizedProps, Ad(
          t,
          e,
          s !== null ? s.memoizedProps : e
        )), l & 1024 && (jd = !0);
        break;
      case 6:
        if (Qe(e, t, a), $e(t), l & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = e, Ut = !0;
          } catch (q) {
            Gt(t, t.return, q);
          }
        }
        break;
      case 3:
        if (Ut = !1, Nu = null, c = kn, kn = zr(e.containerInfo), Qe(e, t, a), kn = c, $e(t), l & 4 && s !== null && s.memoizedState.isDehydrated)
          try {
            vs(e.containerInfo);
          } catch (q) {
            Gt(t, t.return, q);
          }
        jd && (jd = !1, a0(t)), Ut = !1;
        break;
      case 4:
        l = li, li = Oe, s = Eg(), c = kn, kn = zr(
          t.stateNode.containerInfo
        ), Qe(e, t, a), $e(t), kn = c, Ut && Er && (pu = !0), Ut = s, li = l;
        break;
      case 12:
        Qe(e, t, a), $e(t);
        break;
      case 31:
        Qe(e, t, a), $e(t), l & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, vu(t, e)));
        break;
      case 13:
        Qe(e, t, a), $e(t), t.child.flags & 8192 && t.memoizedState !== null != (s !== null && s.memoizedState !== null) && (xu = Fe()), l & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, vu(t, e)));
        break;
      case 22:
        c = t.memoizedState !== null, v = s !== null && s.memoizedState !== null;
        var S = Oe, O = It, P = li;
        Oe = S || c, li = P || c, It = O || v, Qe(e, t, a), It = O, li = P, Oe = S, $e(t), l & 8192 && (e = t.stateNode, e._visibility = c ? e._visibility & -2 : e._visibility | 1, !c || s === null || v || Oe || It || (e = v || It, a = Oe, s = It, Oe = c || Oe, It = e, fa(t, 2), Oe = a, It = s), !c && li || Vd(t, c)), l & 4 && (e = t.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, vu(t, a))));
        break;
      case 19:
        Qe(e, t, a), $e(t), l & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, vu(t, e)));
        break;
      case 30:
        l & 512 && (It || s === null || Ue(s, s.return)), l = Eg(), c = Er, v = (a & 335544064) === a, S = t.memoizedProps, Er = v && Di(
          S.default,
          S.update
        ) !== "none", Qe(e, t, a), $e(t), v && s !== null && Ut && (t.flags |= 4), Er = c, Ut = l;
        break;
      case 21:
        break;
      case 7:
        l & 512 && (It || s === null || Ue(s, s.return)), s && s.stateNode !== null && (s.stateNode._fragmentFiber = t);
      default:
        Qe(e, t, a), $e(t);
    }
  }
  function $e(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, s = t.return; s !== null; ) {
          if (Iy(s)) {
            a = s;
            break;
          }
          s = s.return;
        }
        s = null;
        for (var l = t.return; l !== null; ) {
          if (Ed(l)) {
            var c = l.stateNode;
            s === null ? s = [c] : s.push(c);
          }
          if (Td(l)) break;
          l = l.return;
        }
        var v = s;
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var S = a.stateNode, O = Rd(t);
            fu(
              t,
              O,
              S,
              v
            );
            break;
          case 5:
            var P = a.stateNode;
            a.flags & 32 && (jo(P, ""), a.flags &= -33);
            var q = Rd(t);
            fu(
              t,
              q,
              P,
              v
            );
            break;
          case 3:
          case 4:
            var Q = a.stateNode.containerInfo, V = Rd(t);
            Dd(
              t,
              V,
              Q,
              v
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (k) {
        Gt(t, t.return, k);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function a0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        a0(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, gs = !0, e.reset(), gs = !1), t = t.sibling;
      }
  }
  function Wo(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        o0(e, t), e = e.sibling;
    else Zy(e);
  }
  function o0(t, e) {
    var a = t.alternate;
    if (a === null) Od(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Ld = ui = !1, Yy(), Wo(e, t), !ui && !pu) {
            if (t = si, t !== null)
              for (var s = 0; s < t.length; s += 3) {
                a = t[s];
                var l = t[s + 1];
                F0(a, t[s + 2]), a = a.ownerDocument.documentElement, a !== null && a.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + l + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Ld = !0;
          }
          si = null;
          break;
        case 5:
          Wo(e, t);
          break;
        case 4:
          s = ui, ui = !1, Wo(e, t), ui && (pu = !0), ui = s;
          break;
        case 22:
          t.memoizedState === null && (a.memoizedState !== null ? Od(t, !1) : Wo(e, t));
          break;
        case 30:
          s = ui, l = Yy(), ui = !1, Wo(e, t), ui && (t.flags |= 4);
          var c = t.memoizedProps, v = t.stateNode;
          e = Ri(c, v), v = Ri(a.memoizedProps, v);
          var S = Di(c.default, c.update);
          S === "none" ? e = !1 : (c = a.memoizedState, a.memoizedState = null, a = t.child, an = 0, e = zd(
            t,
            a,
            e,
            v,
            S,
            c,
            !0
          ), an !== (c === null ? 0 : c.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (ss(
            t,
            t.memoizedProps.onUpdate
          ), si = l) : l !== null && (l.push.apply(l, si), si = l), ui = (t.flags & 32) !== 0 ? !0 : s;
          break;
        default:
          Wo(e, t);
      }
  }
  function ci(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        $y(t, e.alternate, e), e = e.sibling;
  }
  function fa(t, e) {
    for (t = t.child; t !== null; ) {
      var a = t, s = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, a, a.return), fa(
            a,
            s
          );
          break;
        case 1:
          Ue(a, a.return);
          var l = a.stateNode;
          typeof l.componentWillUnmount == "function" && Hy(
            a,
            a.return,
            l
          ), fa(
            a,
            s
          );
          break;
        case 27:
          (s & 2) !== 0 && ab(
            a.stateNode,
            a.type,
            a.memoizedProps
          );
        case 5:
          Ue(a, a.return), a.tag !== 5 && a.tag !== 27 || Tr(a), fa(
            a,
            s
          );
          break;
        case 6:
          Tr(a);
          break;
        case 26:
          Ue(a, a.return), l = a.stateNode, a.memoizedState !== null || l === null || It || l.parentNode.removeChild(l), fa(
            a,
            s
          );
          break;
        case 22:
          a.memoizedState === null && fa(
            a,
            s
          );
          break;
        case 30:
          Ue(a, a.return), fa(
            a,
            s
          );
          break;
        case 7:
          Ue(a, a.return);
        default:
          fa(
            a,
            s
          );
      }
      t = t.sibling;
    }
  }
  function In(t, e, a) {
    for (a = (e.subtreeFlags & 8772) !== 0 ? a : a & -2, e = e.child; e !== null; ) {
      var s = e.alternate, l = t, c = e, v = c.flags, S = (a & 1) !== 0;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          In(
            l,
            c,
            a
          ), wr(4, c);
          break;
        case 1:
          if (In(
            l,
            c,
            a
          ), s = c, l = s.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (q) {
              Gt(s, s.return, q);
            }
          if (s = c, l = s.updateQueue, l !== null) {
            var O = s.stateNode;
            try {
              var P = l.shared.hiddenCallbacks;
              if (P !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < P.length; l++)
                  Rv(P[l], O);
            } catch (q) {
              Gt(s, s.return, q);
            }
          }
          S && v & 64 && Uy(c), oi(c, c.return);
          break;
        case 27:
          (a & 2) !== 0 && qy(c);
        case 5:
          c.tag !== 5 && c.tag !== 27 || ky(c), In(
            l,
            c,
            a
          ), S && s === null && v & 4 && Cd(c), oi(c, c.return);
          break;
        case 6:
          ky(c);
          break;
        case 26:
          O = c.stateNode, c.memoizedState !== null || O === null || Oe || Sh(
            zr(O.ownerDocument),
            c.type,
            O
          ), In(
            l,
            c,
            a
          ), S && s === null && v & 4 && Cd(c), oi(c, c.return);
          break;
        case 12:
          In(
            l,
            c,
            a
          );
          break;
        case 31:
          In(
            l,
            c,
            a
          ), S && v & 4 && e0(l, c);
          break;
        case 13:
          In(
            l,
            c,
            a
          ), S && v & 4 && n0(l, c);
          break;
        case 22:
          c.memoizedState === null && In(
            l,
            c,
            a
          ), oi(c, c.return);
          break;
        case 30:
          In(
            l,
            c,
            a
          ), oi(c, c.return);
          break;
        case 7:
          oi(c, c.return);
        default:
          In(
            l,
            c,
            a
          );
      }
      e = e.sibling;
    }
  }
  function Pd(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && ur(a));
  }
  function Ud(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ur(t));
  }
  function Mn(t, e, a, s) {
    var l = (a & 335544064) === a;
    if (e.subtreeFlags & (l ? 10262 : 10256))
      for (e = e.child; e !== null; )
        s0(
          t,
          e,
          a,
          s
        ), e = e.sibling;
    else l && Ky(e);
  }
  function s0(t, e, a, s) {
    var l = (a & 335544064) === a;
    l && e.alternate === null && e.return !== null && e.return.alternate !== null && mu(e);
    var c = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Mn(
          t,
          e,
          a,
          s
        ), c & 2048 && wr(9, e);
        break;
      case 1:
        Mn(
          t,
          e,
          a,
          s
        );
        break;
      case 3:
        Mn(
          t,
          e,
          a,
          s
        ), l && Ld && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), c & 2048 && (c = null, e.alternate !== null && (c = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== c && (e.refCount++, c != null && ur(c)));
        break;
      case 12:
        if (c & 2048) {
          Mn(
            t,
            e,
            a,
            s
          ), c = e.stateNode;
          try {
            var v = e.memoizedProps, S = v.id, O = v.onPostCommit;
            typeof O == "function" && O(
              S,
              e.alternate === null ? "mount" : "update",
              c.passiveEffectDuration,
              -0
            );
          } catch (P) {
            Gt(e, e.return, P);
          }
        } else
          Mn(
            t,
            e,
            a,
            s
          );
        break;
      case 31:
        Mn(
          t,
          e,
          a,
          s
        );
        break;
      case 13:
        Mn(
          t,
          e,
          a,
          s
        );
        break;
      case 23:
        break;
      case 22:
        v = e.stateNode, S = e.alternate, e.memoizedState !== null ? (l && S !== null && S.memoizedState === null && mu(S), v._visibility & 2 ? Mn(
          t,
          e,
          a,
          s
        ) : Cr(
          t,
          e
        )) : (l && S !== null && S.memoizedState !== null && mu(e), v._visibility & 2 ? Mn(
          t,
          e,
          a,
          s
        ) : (v._visibility |= 2, ts(
          t,
          e,
          a,
          s,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), c & 2048 && Pd(S, e);
        break;
      case 24:
        Mn(
          t,
          e,
          a,
          s
        ), c & 2048 && Ud(e.alternate, e);
        break;
      case 30:
        l && (c = e.alternate, c !== null && (ri(c.child, !0), ri(e.child, !0))), Mn(
          t,
          e,
          a,
          s
        );
        break;
      default:
        Mn(
          t,
          e,
          a,
          s
        );
    }
  }
  function ts(t, e, a, s, l) {
    for (l = l && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var c = t, v = e, S = a, O = s, P = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          ts(
            c,
            v,
            S,
            O,
            l
          ), wr(8, v);
          break;
        case 23:
          break;
        case 22:
          var q = v.stateNode;
          v.memoizedState !== null ? q._visibility & 2 ? ts(
            c,
            v,
            S,
            O,
            l
          ) : Cr(
            c,
            v
          ) : (q._visibility |= 2, ts(
            c,
            v,
            S,
            O,
            l
          )), l && P & 2048 && Pd(
            v.alternate,
            v
          );
          break;
        case 24:
          ts(
            c,
            v,
            S,
            O,
            l
          ), l && P & 2048 && Ud(v.alternate, v);
          break;
        default:
          ts(
            c,
            v,
            S,
            O,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Cr(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, s = e, l = s.flags;
        switch (s.tag) {
          case 22:
            Cr(a, s), l & 2048 && Pd(
              s.alternate,
              s
            );
            break;
          case 24:
            Cr(a, s), l & 2048 && Ud(s.alternate, s);
            break;
          default:
            Cr(a, s);
        }
        e = e.sibling;
      }
  }
  var io = 8192;
  function ao(t, e, a) {
    if (t.subtreeFlags & io)
      for (t = t.child; t !== null; )
        r0(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function r0(t, e, a) {
    switch (t.tag) {
      case 26:
        ao(
          t,
          e,
          a
        ), t.flags & io && (t.memoizedState !== null ? WR(
          a,
          kn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && mb(a, t)));
        break;
      case 5:
        ao(
          t,
          e,
          a
        ), t.flags & io && (t = t.stateNode, (e & 335544128) === e && mb(a, t));
        break;
      case 3:
      case 4:
        var s = kn;
        kn = zr(t.stateNode.containerInfo), ao(
          t,
          e,
          a
        ), kn = s;
        break;
      case 22:
        t.memoizedState === null && (s = t.alternate, s !== null && s.memoizedState !== null ? (s = io, io = 16777216, ao(
          t,
          e,
          a
        ), io = s) : ao(
          t,
          e,
          a
        ));
        break;
      case 30:
        if ((t.flags & io) !== 0 && (s = t.memoizedProps.name, s != null && s !== "auto")) {
          var l = t.stateNode;
          l.paired = null, pn === null && (pn = /* @__PURE__ */ new Map()), pn.set(s, l);
        }
        ao(
          t,
          e,
          a
        );
        break;
      default:
        ao(
          t,
          e,
          a
        );
    }
  }
  function l0(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ar(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var s = e[a];
          Me = s, c0(
            s,
            t
          );
        }
      l0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        u0(t), t = t.sibling;
  }
  function u0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ar(t), t.flags & 2048 && ca(9, t, t.return);
        break;
      case 3:
        Ar(t);
        break;
      case 12:
        Ar(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, yu(t)) : Ar(t);
        break;
      default:
        Ar(t);
    }
  }
  function yu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var s = e[a];
          Me = s, c0(
            s,
            t
          );
        }
      l0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, e, e.return), yu(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, yu(e));
          break;
        default:
          yu(e);
      }
      t = t.sibling;
    }
  }
  function c0(t, e) {
    for (; Me !== null; ) {
      var a = Me;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var s = a.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          ur(a.memoizedState.cache);
      }
      if (s = a.child, s !== null) s.return = a, Me = s;
      else
        t: for (a = t; Me !== null; ) {
          s = Me;
          var l = s.sibling, c = s.return;
          if (Wy(s), s === a) {
            Me = null;
            break t;
          }
          if (l !== null) {
            l.return = c, Me = l;
            break t;
          }
          Me = c;
        }
    }
  }
  var KA = {
    getCacheForType: function(t) {
      var e = Ve(me), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return Ve(me).controller.signal;
    }
  }, ZA = typeof WeakMap == "function" ? WeakMap : Map, kt = 0, $t = null, _t = null, zt = 0, qt = 0, gn = null, da = !1, es = !1, Hd = !1, Bi = 0, re = 0, ha = 0, oo = 0, bu = 0, vn = 0, ns = 0, Rr = null, sn = null, kd = !1, xu = 0, f0 = 0, Su = 1 / 0, wu = null, ma = null, ie = 0, qn = null, so = null, fi = 0, Id = 0, qd = null, d0 = null, is = null, as = null, os = null, Dr = 0, Tu = null;
  function yn() {
    return (kt & 2) !== 0 && zt !== 0 ? zt & -zt : it.T !== null ? Wd() : pg();
  }
  function h0() {
    if (vn === 0)
      if ((zt & 536870912) === 0 || Dt) {
        var t = Qi;
        Qi <<= 1, (Qi & 3932160) === 0 && (Qi = 262144), vn = t;
      } else vn = 536870912;
    return t = Be.current, t !== null && (t.flags |= 32), vn;
  }
  function ss(t, e) {
    if (e != null) {
      var a = t.stateNode, s = a.ref;
      s === null && (s = a.ref = X0(
        Ri(t.memoizedProps, a)
      )), as === null && (as = []), as.push(e.bind(null, s));
    }
  }
  function rn(t, e, a) {
    (t === $t && (qt === 2 || qt === 9) || t.cancelPendingCommit !== null) && (rs(t, 0), pa(
      t,
      zt,
      vn,
      !1
    )), Zs(t, a), ((kt & 2) === 0 || t !== $t) && (t === $t && ((kt & 2) === 0 && (oo |= a), re === 4 && pa(
      t,
      zt,
      vn,
      !1
    )), di(t));
  }
  function m0(t, e, a) {
    if ((kt & 6) !== 0) throw Error(r(327));
    var s = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ks(t, e), l = s ? JA(t, e) : Yd(t, e, !0), c = s;
    do {
      if (l === 0) {
        es && !s && pa(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, c && !QA(a)) {
          l = Yd(t, e, !1), c = !1;
          continue;
        }
        if (l === 2) {
          if (c = e, t.errorRecoveryDisabledLanes & c)
            var v = 0;
          else
            v = t.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            e = v;
            t: {
              var S = t;
              l = Rr;
              var O = S.current.memoizedState.isDehydrated;
              if (O && (rs(S, v).flags |= 256), v = Yd(
                S,
                v,
                !1
              ), v !== 2 && v !== 6) {
                if (Hd && !O) {
                  S.errorRecoveryDisabledLanes |= c, oo |= c, l = 4;
                  break t;
                }
                c = sn, sn = l, c !== null && (sn === null ? sn = c : sn.push.apply(
                  sn,
                  c
                ));
              }
              l = v;
            }
            if (c = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          rs(t, 0), pa(t, e, 0, !0);
          break;
        }
        t: {
          switch (s = t, c = l, c) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              pa(
                s,
                e,
                vn,
                !da
              );
              break t;
            case 2:
              sn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (l = xu + 300 - Fe(), 10 < l)) {
            if (pa(
              s,
              e,
              vn,
              !da
            ), bl(s, 0, !0) !== 0) break t;
            fi = e, s.timeoutHandle = ch(
              p0.bind(
                null,
                s,
                a,
                sn,
                wu,
                kd,
                e,
                vn,
                oo,
                ns,
                da,
                c,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break t;
          }
          p0(
            s,
            a,
            sn,
            wu,
            kd,
            e,
            vn,
            oo,
            ns,
            da,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    di(t);
  }
  function p0(t, e, a, s, l, c, v, S, O, P, q, Q, V, k) {
    t.timeoutHandle = -1;
    var ut = e.subtreeFlags, gt = (c & 335544064) === c;
    if (Q = null, (gt || ut & 8192 || (ut & 16785408) === 16785408) && (Q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: ni
    }, pn = null, r0(
      e,
      c,
      Q
    ), gt && (ut = Q, gt = t.containerInfo, gt = (gt.nodeType === 9 ? gt : gt.ownerDocument).__reactViewTransition, gt != null && (ut.count++, ut.waitingForViewTransition = !0, ut = Vr.bind(ut), gt.finished.then(ut, ut))), ut = (c & 62914560) === c ? xu - Fe() : (c & 4194048) === c ? f0 - Fe() : 0, ut = tD(
      Q,
      ut
    ), ut !== null)) {
      fi = c, t.cancelPendingCommit = ut(
        T0.bind(
          null,
          t,
          e,
          c,
          a,
          s,
          l,
          v,
          S,
          O,
          P,
          q,
          Q,
          null,
          V,
          k
        )
      ), pa(t, c, v, !P);
      return;
    }
    T0(
      t,
      e,
      c,
      a,
      s,
      l,
      v,
      S,
      O,
      P,
      q,
      Q
    );
  }
  function QA(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var s = 0; s < a.length; s++) {
          var l = a[s], c = l.getSnapshot;
          l = l.value;
          try {
            if (!hn(c(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null)
        a.return = e, e = a;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function pa(t, e, a, s) {
    e = cg(t, e), e &= ~bu, e &= ~oo, t.suspendedLanes |= e, t.pingedLanes &= ~e, s && (t.warmLanes |= e), s = t.expirationTimes;
    for (var l = e; 0 < l; ) {
      var c = 31 - Ht(l), v = 1 << c;
      s[c] = -1, l &= ~v;
    }
    a !== 0 && dg(t, a, e);
  }
  function Eu() {
    return (kt & 6) === 0 ? (Or(0), !1) : !0;
  }
  function Gd() {
    if (_t !== null) {
      if (qt === 0)
        var t = _t.return;
      else
        t = _t, _i = Xa = null, Jf(t), Xo = null, dr = 0, t = _t;
      for (; t !== null; )
        Py(t.alternate, t), t = t.return;
      _t = null;
    }
  }
  function rs(t, e) {
    var a = t.timeoutHandle;
    return a !== -1 && (t.timeoutHandle = -1, xR(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), fi = 0, Gd(), $t = t, _t = a = Oi(t.current, null), zt = e, qt = 0, gn = null, da = !1, es = Ks(t, e), Hd = !1, ns = vn = bu = oo = ha = re = 0, sn = Rr = null, kd = !1, Bi = cg(t, e), Nl(), a;
  }
  function g0(t, e) {
    Ct = null, it.H = iu, e === Fo || e === ql ? (e = Tv(), qt = 3) : e === Uf ? (e = Tv(), qt = 4) : qt = e === hd ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, gn = e, _t === null && (re = 1, au(
      t,
      An(e, t.current)
    ));
  }
  function v0() {
    var t = Be.current;
    return t === null ? !0 : (zt & 4194048) === zt ? qe === null : (zt & 62914560) === zt || (zt & 536870912) !== 0 ? t === qe : !1;
  }
  function y0() {
    var t = it.H;
    return it.H = iu, t === null ? iu : t;
  }
  function b0() {
    var t = it.A;
    return it.A = KA, t;
  }
  function Cu() {
    re = 4, da || (zt & 4194048) !== zt && Be.current !== null || (es = !0), (ha & 134217727) === 0 && (oo & 134217727) === 0 || $t === null || pa(
      $t,
      zt,
      vn,
      !1
    );
  }
  function Yd(t, e, a) {
    var s = kt;
    kt |= 2;
    var l = y0(), c = b0();
    ($t !== t || zt !== e) && (wu = null, rs(t, e)), e = !1;
    var v = re;
    t: do
      try {
        if (qt !== 0 && _t !== null) {
          var S = _t, O = gn;
          switch (qt) {
            case 8:
              Gd(), v = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Be.current === null && (e = !0);
              var P = qt;
              if (qt = 0, gn = null, ls(t, S, O, P), a && es) {
                v = 0;
                break t;
              }
              break;
            default:
              P = qt, qt = 0, gn = null, ls(t, S, O, P);
          }
        }
        $A(), v = re;
        break;
      } catch (q) {
        g0(t, q);
      }
    while (!0);
    return e && t.shellSuspendCounter++, _i = Xa = null, kt = s, it.H = l, it.A = c, _t === null && ($t = null, zt = 0, Nl()), v;
  }
  function $A() {
    for (; _t !== null; ) x0(_t);
  }
  function JA(t, e) {
    var a = kt;
    kt |= 2;
    var s = y0(), l = b0();
    $t !== t || zt !== e ? (wu = null, Su = Fe() + 500, rs(t, e)) : es = Ks(
      t,
      e
    );
    t: do
      try {
        if (qt !== 0 && _t !== null) {
          e = _t;
          var c = gn;
          e: switch (qt) {
            case 1:
              qt = 0, gn = null, ls(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (Sv(c)) {
                qt = 0, gn = null, S0(e);
                break;
              }
              e = function() {
                qt !== 2 && qt !== 9 || $t !== t || (qt = 7), di(t);
              }, c.then(e, e);
              break t;
            case 3:
              qt = 7;
              break t;
            case 4:
              qt = 5;
              break t;
            case 7:
              Sv(c) ? (qt = 0, gn = null, S0(e)) : (qt = 0, gn = null, ls(t, e, c, 7));
              break;
            case 5:
              var v = null;
              switch (_t.tag) {
                case 26:
                  v = _t.memoizedState;
                case 5:
                case 27:
                  var S = _t;
                  if (v ? db(v) : S.stateNode.complete) {
                    qt = 0, gn = null;
                    var O = S.sibling;
                    if (O !== null) _t = O;
                    else {
                      var P = S.return;
                      P !== null ? (_t = P, Au(P)) : _t = null;
                    }
                    break e;
                  }
              }
              qt = 0, gn = null, ls(t, e, c, 5);
              break;
            case 6:
              qt = 0, gn = null, ls(t, e, c, 6);
              break;
            case 8:
              Gd(), re = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        WA();
        break;
      } catch (q) {
        g0(t, q);
      }
    while (!0);
    return _i = Xa = null, it.H = s, it.A = l, kt = a, _t !== null ? 0 : ($t = null, zt = 0, Nl(), re);
  }
  function WA() {
    for (; _t !== null && !gl(); )
      x0(_t);
  }
  function x0(t) {
    var e = Vy(t.alternate, t, Bi);
    t.memoizedProps = t.pendingProps, e === null ? Au(t) : _t = e;
  }
  function S0(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Oy(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          zt
        );
        break;
      case 11:
        e = Oy(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          zt
        );
        break;
      case 5:
        Jf(e);
        var s = e;
        s === De && (Dt ? (Pl(s), s.tag === 5 && s.stateNode != null && (Jt = s.stateNode)) : (Pl(s), Dt = !0));
      default:
        Py(a, e), e = _t = cv(e, Bi), e = Vy(a, e, Bi);
    }
    t.memoizedProps = t.pendingProps, e === null ? Au(t) : _t = e;
  }
  function ls(t, e, a, s) {
    _i = Xa = null, Jf(e), Xo = null, dr = 0;
    var l = e.return;
    try {
      if (HA(
        t,
        l,
        e,
        a,
        zt
      )) {
        re = 1, au(
          t,
          An(a, t.current)
        ), _t = null;
        return;
      }
    } catch (c) {
      if (l !== null) throw _t = l, c;
      re = 1, au(
        t,
        An(a, t.current)
      ), _t = null;
      return;
    }
    e.flags & 32768 ? (Dt || s === 1 ? t = !0 : es || (zt & 536870912) !== 0 ? t = !1 : (da = t = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = Be.current, s !== null && s.tag === 13 && (s.flags |= 16384))), w0(e, t)) : Au(e);
  }
  function Au(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        w0(
          e,
          da
        );
        return;
      }
      t = e.return;
      var a = GA(
        e.alternate,
        e,
        Bi
      );
      if (a !== null) {
        _t = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        _t = e;
        return;
      }
      _t = e = t;
    } while (e !== null);
    re === 0 && (re = 5);
  }
  function w0(t, e) {
    do {
      var a = YA(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, _t = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        _t = t;
        return;
      }
      _t = t = a;
    } while (t !== null);
    re = 6, _t = null;
  }
  function T0(t, e, a, s, l, c, v, S, O, P, q, Q) {
    t.cancelPendingCommit = null;
    do
      Ru();
    while (ie !== 0);
    if ((kt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === $t && (_t = $t = null, zt = 0), so = e, qn = t, fi = a, qd = l, d0 = s, tR(
        t,
        e,
        a,
        v,
        S,
        O,
        Q
      );
    }
  }
  function tR(t, e, a, s, l, c, v) {
    var S = e.lanes | e.childLanes;
    if (Id = S, S |= Af, AC(
      t,
      a,
      S,
      s,
      l,
      c
    ), as = null, (a & 335544064) === a ? (os = DA(t), s = 10262) : (os = null, s = 10256), (e.subtreeFlags & s) !== 0 || (e.flags & s) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, sR(Do, function() {
      return Zd(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), du = !1, s = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || s) {
      s = it.T, it.T = null, l = rt.p, rt.p = 2, c = kt, kt |= 4;
      try {
        FA(t, e, a);
      } finally {
        kt = c, rt.p = l, it.T = s;
      }
    }
    ie = 1, du ? is = AR(
      v,
      t.containerInfo,
      os,
      Fd,
      Xd,
      nR,
      Kd,
      Zd,
      eR
    ) : (Fd(), Xd(), Kd());
  }
  function eR(t) {
    if (ie !== 0) {
      var e = qn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function nR() {
    ie === 3 && (ie = 0, o0(so, qn), ie = 4);
  }
  function Fd() {
    if (ie === 1) {
      ie = 0;
      var t = qn, e = so, a = fi, s = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || s) {
        s = it.T, it.T = null;
        var l = rt.p;
        rt.p = 2;
        var c = kt;
        kt |= 4;
        try {
          Er = pu = !1, i0(e, t, a), a = rh;
          var v = tv(t.containerInfo), S = a.focusedElem, O = a.selectionRange;
          if (v !== S && S && S.ownerDocument && Wg(
            S.ownerDocument.documentElement,
            S
          )) {
            if (O !== null && Sf(S)) {
              var P = O.start, q = O.end;
              if (q === void 0 && (q = P), "selectionStart" in S)
                S.selectionStart = P, S.selectionEnd = Math.min(
                  q,
                  S.value.length
                );
              else {
                var Q = S.ownerDocument || document, V = Q && Q.defaultView || window;
                if (V.getSelection) {
                  var k = V.getSelection(), ut = S.textContent.length, gt = Math.min(O.start, ut), At = O.end === void 0 ? gt : Math.min(O.end, ut);
                  !k.extend && gt > At && (v = At, At = gt, gt = v);
                  var B = Jg(
                    S,
                    gt
                  ), L = Jg(
                    S,
                    At
                  );
                  if (B && L && (k.rangeCount !== 1 || k.anchorNode !== B.node || k.anchorOffset !== B.offset || k.focusNode !== L.node || k.focusOffset !== L.offset)) {
                    var U = Q.createRange();
                    U.setStart(B.node, B.offset), k.removeAllRanges(), gt > At ? (k.addRange(U), k.extend(L.node, L.offset)) : (U.setEnd(L.node, L.offset), k.addRange(U));
                  }
                }
              }
            }
            for (Q = [], k = S; k = k.parentNode; )
              k.nodeType === 1 && Q.push({
                element: k,
                left: k.scrollLeft,
                top: k.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < Q.length; S++) {
              var Z = Q[S];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          gs = !!sh, rh = sh = null;
        } finally {
          kt = c, rt.p = l, it.T = s;
        }
      }
      t.current = e, ie = 2;
    }
  }
  function Xd() {
    if (ie === 2) {
      ie = 0;
      var t = qn, e = so, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = it.T, it.T = null;
        var s = rt.p;
        rt.p = 2;
        var l = kt;
        kt |= 4;
        try {
          $y(t, e.alternate, e);
        } finally {
          kt = l, rt.p = s, it.T = a;
        }
      }
      ie = 3;
    }
  }
  function Kd() {
    if (ie === 4 || ie === 3) {
      ie = 0;
      var t = is;
      is = null, wn();
      var e = qn, a = so, s = fi, l = d0, c = (s & 335544064) === s ? 10262 : 10256;
      if ((a.subtreeFlags & c) !== 0 || (a.flags & c) !== 0 ? ie = 5 : (ie = 0, so = qn = null, E0(e, e.pendingLanes)), c = e.pendingLanes, c === 0 && (ma = null), nf(s), a = a.stateNode, Xt && typeof Xt.onCommitFiberRoot == "function")
        try {
          Xt.onCommitFiberRoot(
            oe,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        a = it.T, c = rt.p, rt.p = 2, it.T = null;
        try {
          for (var v = e.onRecoverableError, S = 0; S < l.length; S++) {
            var O = l[S];
            v(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          it.T = a, rt.p = c;
        }
      }
      if (l = as, v = os, os = null, l !== null && (as = null, v === null && (v = []), t !== null))
        for (O = 0; O < l.length; O++)
          a = (0, l[O])(
            v
          ), a !== void 0 && t.finished.finally(a);
      (fi & 3) !== 0 && Ru(), di(e), c = e.pendingLanes, (s & 261930) !== 0 && (c & 42) !== 0 ? e === Tu ? Dr++ : (Dr = 0, Tu = e) : (Dr = 0, Tu = null), Or(0);
    }
  }
  function E0(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ur(e)));
  }
  function Ru() {
    return is !== null && (is.skipTransition(), is = null), Fd(), Xd(), Kd(), Zd();
  }
  function Zd() {
    if (ie !== 5) return !1;
    var t = qn, e = Id;
    Id = 0;
    var a = nf(fi), s = it.T, l = rt.p;
    try {
      rt.p = 32 > a ? 32 : a, it.T = null, a = qd, qd = null;
      var c = qn, v = fi;
      if (ie = 0, so = qn = null, fi = 0, (kt & 6) !== 0) throw Error(r(331));
      var S = kt;
      if (kt |= 4, u0(c.current), s0(
        c,
        c.current,
        v,
        a
      ), kt = S, Or(0, !1), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        try {
          Xt.onPostCommitFiberRoot(oe, c);
        } catch {
        }
      return !0;
    } finally {
      rt.p = l, it.T = s, E0(t, e);
    }
  }
  function C0(t, e, a) {
    e = An(a, e), e = dd(t.stateNode, e, 2), t = sa(t, e, 2), t !== null && (Zs(t, 2), di(t));
  }
  function Gt(t, e, a) {
    if (t.tag === 3)
      C0(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          C0(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var s = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ma === null || !ma.has(s))) {
            t = An(a, t), a = Sy(2), s = sa(e, a, 2), s !== null && (wy(
              a,
              s,
              e,
              t
            ), Zs(s, 2), di(s));
            break;
          }
        }
        e = e.return;
      }
  }
  function Qd(t, e, a) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new ZA();
      var l = /* @__PURE__ */ new Set();
      s.set(e, l);
    } else
      l = s.get(e), l === void 0 && (l = /* @__PURE__ */ new Set(), s.set(e, l));
    l.has(a) || (Hd = !0, l.add(a), t = iR.bind(null, t, e, a), e.then(t, t));
  }
  function iR(t, e, a) {
    var s = t.pingCache;
    s !== null && s.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, $t === t && (zt & a) === a && ((re === 4 || re === 3 && (zt & 62914560) === zt && 300 > Fe() - xu) && (kt & 2) === 0 ? rs(t, 0) : bu |= a, ns === zt && (ns = 0)), di(t);
  }
  function A0(t, e) {
    e === 0 && (e = fg()), t = Ga(t, e), t !== null && (Zs(t, e), di(t));
  }
  function aR(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), A0(t, a);
  }
  function oR(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var s = t.stateNode, l = t.memoizedState;
        l !== null && (a = l.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      case 22:
        s = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    s !== null && s.delete(e), A0(t, a);
  }
  function sR(t, e) {
    return qs(t, e);
  }
  var us = null, cs = null, $d = !1, Du = !1, Jd = !1, ga = 0;
  function di(t) {
    t !== cs && t.next === null && (cs === null ? us = cs = t : cs = cs.next = t), Du = !0, $d || ($d = !0, lR());
  }
  function Or(t, e) {
    if (!Jd && Du) {
      Jd = !0;
      do
        for (var a = !1, s = us; s !== null; ) {
          if (t !== 0) {
            var l = s.pendingLanes;
            if (l === 0) var c = 0;
            else {
              var v = s.suspendedLanes, S = s.pingedLanes;
              c = (1 << 31 - Ht(42 | t) + 1) - 1, c &= l & ~(v & ~S), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (a = !0, M0(s, c));
          } else
            c = zt, c = bl(
              s,
              s === $t ? c : 0,
              s.cancelPendingCommit !== null || s.timeoutHandle !== -1
            ), (c & 3) === 0 || Ks(s, c) || (a = !0, M0(s, c));
          s = s.next;
        }
      while (a);
      Jd = !1;
    }
  }
  function rR() {
    R0();
  }
  function R0() {
    Du = $d = !1;
    var t = 0;
    ga !== 0 && bR() && (t = ga);
    for (var e = Fe(), a = null, s = us; s !== null; ) {
      var l = s.next, c = D0(s, e);
      c === 0 ? (s.next = null, a === null ? us = l : a.next = l, l === null && (cs = a)) : (a = s, (t !== 0 || (c & 3) !== 0) && (Du = !0)), s = l;
    }
    ie !== 0 && ie !== 5 || Or(t), ga !== 0 && (ga = 0);
  }
  function D0(t, e) {
    for (var a = t.suspendedLanes, s = t.pingedLanes, l = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var v = 31 - Ht(c), S = 1 << v, O = l[v];
      O === -1 ? ((S & a) === 0 || (S & s) !== 0) && (l[v] = CC(S, e)) : O <= e && (t.expiredLanes |= S), c &= ~S;
    }
    if (e = $t, a = zt, a = bl(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), s = t.callbackNode, a === 0 || t === e && (qt === 2 || qt === 9) || t.cancelPendingCommit !== null)
      return s !== null && s !== null && Ro(s), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Ks(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (s !== null && Ro(s), nf(a)) {
        case 2:
        case 8:
          a = Ys;
          break;
        case 32:
          a = Do;
          break;
        case 268435456:
          a = Fs;
          break;
        default:
          a = Do;
      }
      return s = O0.bind(null, t), a = qs(a, s), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return s !== null && s !== null && Ro(s), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function O0(t, e) {
    if (ie !== 0 && ie !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (Ru() && t.callbackNode !== a)
      return null;
    var s = zt;
    return s = bl(
      t,
      t === $t ? s : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), s === 0 ? null : (m0(t, s, e), D0(t, Fe()), t.callbackNode != null && t.callbackNode === a ? O0.bind(null, t) : null);
  }
  function M0(t, e) {
    if (Ru()) return null;
    m0(t, e, !0);
  }
  function lR() {
    SR(function() {
      (kt & 6) !== 0 ? qs(
        Pn,
        rR
      ) : R0();
    });
  }
  function Wd() {
    if (ga === 0) {
      var t = Qa;
      t === 0 && (t = Xe, Xe <<= 1, (Xe & 261888) === 0 && (Xe = 256)), ga = t;
    }
    return ga;
  }
  function _0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : El(t);
  }
  function uR(t, e, a, s, l) {
    if (e === "submit" && a && a.stateNode === l) {
      var c = _0(
        (l[en] || null).action
      ), v = s.submitter;
      v && (e = (e = v[en] || null) ? _0(e.formAction) : v.getAttribute("formAction"), e !== null && (c = e, v = null));
      var S = new Dl(
        "action",
        "action",
        null,
        s,
        l
      );
      t.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (s.defaultPrevented) {
                if (ga !== 0) {
                  var O = new FormData(l, v);
                  rd(
                    a,
                    {
                      pending: !0,
                      data: O,
                      method: l.method,
                      action: c
                    },
                    null,
                    O
                  );
                }
              } else
                typeof c == "function" && (S.preventDefault(), O = new FormData(l, v), rd(
                  a,
                  {
                    pending: !0,
                    data: O,
                    method: l.method,
                    action: c
                  },
                  c,
                  O
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var th = 0; th < Cf.length; th++) {
    var eh = Cf[th], cR = eh.toLowerCase(), fR = eh[0].toUpperCase() + eh.slice(1);
    Un(
      cR,
      "on" + fR
    );
  }
  Un(iv, "onAnimationEnd"), Un(av, "onAnimationIteration"), Un(ov, "onAnimationStart"), Un("dblclick", "onDoubleClick"), Un("focusin", "onFocus"), Un("focusout", "onBlur"), Un(xA, "onTransitionRun"), Un(SA, "onTransitionStart"), Un(wA, "onTransitionCancel"), Un(sv, "onTransitionEnd"), No("onMouseEnter", ["mouseout", "mouseover"]), No("onMouseLeave", ["mouseout", "mouseover"]), No("onPointerEnter", ["pointerout", "pointerover"]), No("onPointerLeave", ["pointerout", "pointerover"]), ka(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ka(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ka("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ka(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ka(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ka(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), dR = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mr)
  );
  function N0(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var s = t[a], l = s.event;
      s = s.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var v = s.length - 1; 0 <= v; v--) {
            var S = s[v], O = S.instance, P = S.currentTarget;
            if (S = S.listener, O !== c && l.isPropagationStopped())
              break t;
            c = S, l.currentTarget = P;
            try {
              c(l);
            } catch (q) {
              _l(q);
            }
            l.currentTarget = null, c = O;
          }
        else
          for (v = 0; v < s.length; v++) {
            if (S = s[v], O = S.instance, P = S.currentTarget, S = S.listener, O !== c && l.isPropagationStopped())
              break t;
            c = S, l.currentTarget = P;
            try {
              c(l);
            } catch (q) {
              _l(q);
            }
            l.currentTarget = null, c = O;
          }
      }
    }
  }
  function Nt(t, e) {
    var a = e[vg];
    a === void 0 && (a = e[vg] = /* @__PURE__ */ new Set());
    var s = t + "__bubble";
    a.has(s) || (z0(e, t, 2, !1), a.add(s));
  }
  function nh(t, e, a) {
    var s = 0;
    e && (s |= 4), z0(
      a,
      t,
      s,
      e
    );
  }
  var Ou = "_reactListening" + Math.random().toString(36).slice(2);
  function ih(t) {
    if (!t[Ou]) {
      t[Ou] = !0, xg.forEach(function(a) {
        a !== "selectionchange" && (dR.has(a) || nh(a, !1, t), nh(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ou] || (e[Ou] = !0, nh("selectionchange", !1, e));
    }
  }
  function z0(t, e, a, s) {
    switch (wb(e)) {
      case 2:
        var l = aD;
        break;
      case 8:
        l = oD;
        break;
      default:
        l = Th;
    }
    a = l.bind(
      null,
      e,
      a,
      t
    ), l = void 0, !ff || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (l = !0), s ? l !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: l
    }) : t.addEventListener(e, a, !0) : l !== void 0 ? t.addEventListener(e, a, {
      passive: l
    }) : t.addEventListener(e, a, !1);
  }
  function ah(t, e, a, s, l) {
    var c = s;
    if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
      t: for (; ; ) {
        if (s === null) return;
        var v = s.tag;
        if (v === 3 || v === 4) {
          var S = s.stateNode.containerInfo;
          if (S === l) break;
          if (v === 4)
            for (v = s.return; v !== null; ) {
              var O = v.tag;
              if ((O === 3 || O === 4) && v.stateNode.containerInfo === l)
                return;
              v = v.return;
            }
          for (; S !== null; ) {
            if (v = Ha(S), v === null) return;
            if (O = v.tag, O === 5 || O === 6 || O === 26 || O === 27) {
              s = c = v;
              continue t;
            }
            S = S.parentNode;
          }
        }
        s = s.return;
      }
    zg(function() {
      var P = c, q = uf(a), Q = [];
      t: {
        var V = rv.get(t);
        if (V !== void 0) {
          var k = Dl, ut = t;
          switch (t) {
            case "keypress":
              if (Al(a) === 0) break t;
            case "keydown":
            case "keyup":
              k = QC;
              break;
            case "focusin":
              ut = "focus", k = pf;
              break;
            case "focusout":
              ut = "blur", k = pf;
              break;
            case "beforeblur":
            case "afterblur":
              k = pf;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = Vg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = PC;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = eA;
              break;
            case iv:
            case av:
            case ov:
              k = kC;
              break;
            case sv:
              k = iA;
              break;
            case "scroll":
            case "scrollend":
              k = VC;
              break;
            case "wheel":
              k = oA;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = qC;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = Pg;
              break;
            case "submit":
              k = WC;
              break;
            case "toggle":
            case "beforetoggle":
              k = rA;
          }
          var gt = (e & 4) !== 0, At = !gt && (t === "scroll" || t === "scrollend"), B = gt ? V !== null ? V + "Capture" : null : V;
          gt = [];
          for (var L = P, U; L !== null; ) {
            var Z = L;
            if (U = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || U === null || B === null || (Z = Js(L, B), Z != null && gt.push(
              _r(L, Z, U)
            )), At) break;
            L = L.return;
          }
          0 < gt.length && (V = new k(
            V,
            ut,
            null,
            a,
            q
          ), Q.push({ event: V, listeners: gt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (k = t === "mouseover" || t === "pointerover", V = t === "mouseout" || t === "pointerout", k && a !== lf && (ut = a.relatedTarget || a.fromElement) && (Ha(ut) || ut[Oo]))
            break t;
          (V || k) && (ut = q.window === q ? q : (k = q.ownerDocument) ? k.defaultView || k.parentWindow : window, V ? (k = a.relatedTarget || a.toElement, V = P, k = k ? Ha(k) : null, k !== null && (At = f(k), gt = k.tag, k !== At || gt !== 5 && gt !== 27 && gt !== 6) && (k = null)) : (V = null, k = P), V !== k && (gt = Vg, Z = "onMouseLeave", B = "onMouseEnter", L = "mouse", (t === "pointerout" || t === "pointerover") && (gt = Pg, Z = "onPointerLeave", B = "onPointerEnter", L = "pointer"), At = V == null ? ut : $s(V), U = k == null ? ut : $s(k), ut = new gt(
            Z,
            L + "leave",
            V,
            a,
            q
          ), ut.target = At, ut.relatedTarget = U, Z = null, Ha(q) === P && (gt = new gt(
            B,
            L + "enter",
            k,
            a,
            q
          ), gt.target = U, gt.relatedTarget = At, Z = gt), At = Z, gt = V && k ? I(
            V,
            k,
            hR
          ) : null, V !== null && j0(
            Q,
            ut,
            V,
            gt,
            !1
          ), k !== null && At !== null && j0(
            Q,
            At,
            k,
            gt,
            !0
          )));
        }
        t: {
          if (V = P ? $s(P) : window, k = V.nodeName && V.nodeName.toLowerCase(), k === "select" || k === "input" && V.type === "file")
            var ht = Fg;
          else if (Gg(V))
            if (Xg)
              ht = vA;
            else {
              ht = pA;
              var jt = mA;
            }
          else
            k = V.nodeName, !k || k.toLowerCase() !== "input" || V.type !== "checkbox" && V.type !== "radio" ? P && rf(P.elementType) && (ht = Fg) : ht = gA;
          if (ht && (ht = ht(t, P))) {
            Yg(
              Q,
              ht,
              a,
              q
            );
            break t;
          }
          jt && jt(t, V, P);
        }
        switch (jt = P ? $s(P) : window, t) {
          case "focusin":
            (Gg(jt) || jt.contentEditable === "true") && (Po = jt, wf = P, sr = null);
            break;
          case "focusout":
            sr = wf = Po = null;
            break;
          case "mousedown":
            Tf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Tf = !1, ev(Q, a, q);
            break;
          case "selectionchange":
            if (bA) break;
          case "keydown":
          case "keyup":
            ev(Q, a, q);
        }
        var bt;
        if (vf)
          t: {
            switch (t) {
              case "compositionstart":
                var St = "onCompositionStart";
                break t;
              case "compositionend":
                St = "onCompositionEnd";
                break t;
              case "compositionupdate":
                St = "onCompositionUpdate";
                break t;
            }
            St = void 0;
          }
        else
          Bo ? Ig(t, a) && (St = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (St = "onCompositionStart");
        St && (Ug && a.locale !== "ko" && (Bo || St !== "onCompositionStart" ? St === "onCompositionEnd" && Bo && (bt = jg()) : ($i = q, df = "value" in $i ? $i.value : $i.textContent, Bo = !0)), jt = Mu(P, St), 0 < jt.length && (St = new Bg(
          St,
          t,
          null,
          a,
          q
        ), Q.push({ event: St, listeners: jt }), bt ? St.data = bt : (bt = qg(a), bt !== null && (St.data = bt)))), (bt = uA ? cA(t, a) : fA(t, a)) && (St = Mu(P, "onBeforeInput"), 0 < St.length && (jt = new Bg(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          q
        ), Q.push({
          event: jt,
          listeners: St
        }), jt.data = bt)), uR(
          Q,
          t,
          P,
          a,
          q
        );
      }
      N0(Q, e);
    });
  }
  function _r(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function Mu(t, e) {
    for (var a = e + "Capture", s = []; t !== null; ) {
      var l = t, c = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || c === null || (l = Js(t, a), l != null && s.unshift(
        _r(t, l, c)
      ), l = Js(t, e), l != null && s.push(
        _r(t, l, c)
      )), t.tag === 3) return s;
      t = t.return;
    }
    return [];
  }
  function hR(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function j0(t, e, a, s, l) {
    for (var c = e._reactName, v = []; a !== null && a !== s; ) {
      var S = a, O = S.alternate, P = S.stateNode;
      if (S = S.tag, O !== null && O === s) break;
      S !== 5 && S !== 26 && S !== 27 || P === null || (O = P, l ? (P = Js(a, c), P != null && v.unshift(
        _r(a, P, O)
      )) : l || (P = Js(a, c), P != null && v.push(
        _r(a, P, O)
      ))), a = a.return;
    }
    v.length !== 0 && t.push({ event: e, listeners: v });
  }
  var mR = /\r\n?/g, pR = /\u0000|\uFFFD/g;
  function L0(t) {
    return (typeof t == "string" ? t : "" + t).replace(mR, `
`).replace(pR, "");
  }
  function V0(t, e) {
    return e = L0(e), L0(t) === e;
  }
  function Yt(t, e, a, s, l, c) {
    switch (a) {
      case "children":
        if (typeof s == "string")
          e === "body" || e === "textarea" && s === "" || jo(t, s);
        else if (typeof s == "number" || typeof s == "bigint")
          e !== "body" && jo(t, "" + s);
        else return;
        break;
      case "className":
        Tl(t, "class", s);
        break;
      case "tabIndex":
        Tl(t, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Tl(t, a, s);
        break;
      case "style":
        _g(t, s, c);
        return;
      case "data":
        if (e !== "object") {
          Tl(t, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(a);
          break;
        }
        s = El(s), t.setAttribute(a, s);
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (a === "formAction" ? (e !== "input" && Yt(t, e, "name", l.name, l, null), Yt(
            t,
            e,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Yt(
            t,
            e,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Yt(
            t,
            e,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Yt(t, e, "encType", l.encType, l, null), Yt(t, e, "method", l.method, l, null), Yt(t, e, "target", l.target, l, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(a);
          break;
        }
        s = El(s), t.setAttribute(a, s);
        break;
      case "onClick":
        s != null && (t.onclick = ni);
        return;
      case "onScroll":
        s != null && Nt("scroll", t);
        return;
      case "onScrollEnd":
        s != null && Nt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(r(61));
          if (a = s.__html, a != null) {
            if (l.children != null) throw Error(r(60));
            c?.__html !== a && (t.innerHTML = a);
          }
        }
        break;
      case "multiple":
        t.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        t.muted = s && typeof s != "function" && typeof s != "symbol";
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
        if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = El(s), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(a, s) : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
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
        s && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        s === !0 ? t.setAttribute(a, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(a, s) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? t.setAttribute(a, s) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? t.removeAttribute(a) : t.setAttribute(a, s);
        break;
      case "popover":
        Nt("beforetoggle", t), Nt("toggle", t), wl(t, "popover", s);
        break;
      case "xlinkActuate":
        Ci(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          s
        );
        break;
      case "xlinkArcrole":
        Ci(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          s
        );
        break;
      case "xlinkRole":
        Ci(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          s
        );
        break;
      case "xlinkShow":
        Ci(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          s
        );
        break;
      case "xlinkTitle":
        Ci(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          s
        );
        break;
      case "xlinkType":
        Ci(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          s
        );
        break;
      case "xmlBase":
        Ci(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          s
        );
        break;
      case "xmlLang":
        Ci(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          s
        );
        break;
      case "xmlSpace":
        Ci(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          s
        );
        break;
      case "is":
        wl(t, "is", s);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N")
          a = jC.get(a) || a, wl(t, a, s);
        else return;
    }
    Ut = !0;
  }
  function oh(t, e, a, s, l, c) {
    switch (a) {
      case "style":
        _g(t, s, c);
        return;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(r(61));
          if (a = s.__html, a != null) {
            if (l.children != null) throw Error(r(60));
            c?.__html !== a && (t.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof s == "string") jo(t, s);
        else if (typeof s == "number" || typeof s == "bigint")
          jo(t, "" + s);
        else return;
        break;
      case "onScroll":
        s != null && Nt("scroll", t);
        return;
      case "onScrollEnd":
        s != null && Nt("scrollend", t);
        return;
      case "onClick":
        s != null && (t.onclick = ni);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Sg.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (l = a.endsWith("Capture"), c = a.slice(2, l ? a.length - 7 : void 0), e = t[en] || null, e = e != null ? e[a] : null, typeof e == "function" && t.removeEventListener(c, e, l), typeof s == "function")) {
              typeof e != "function" && e !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(c, s, l);
              break t;
            }
            Ut = !0, a in t ? t[a] = s : s === !0 ? t.setAttribute(a, "") : wl(t, a, s);
          }
        return;
    }
    Ut = !0;
  }
  function He(t, e, a) {
    switch (e) {
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
        Nt("error", t), Nt("load", t);
        var s = !1, l = !1, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var v = a[c];
            if (v != null)
              switch (c) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Yt(t, e, c, v, a, null);
              }
          }
        l && Yt(t, e, "srcSet", a.srcSet, a, null), s && Yt(t, e, "src", a.src, a, null);
        return;
      case "input":
        Nt("invalid", t);
        var S = c = v = l = null, O = null, P = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var q = a[s];
            if (q != null)
              switch (s) {
                case "name":
                  l = q;
                  break;
                case "type":
                  v = q;
                  break;
                case "checked":
                  O = q;
                  break;
                case "defaultChecked":
                  P = q;
                  break;
                case "value":
                  c = q;
                  break;
                case "defaultValue":
                  S = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Yt(t, e, s, q, a, null);
              }
          }
        Rg(
          t,
          c,
          S,
          O,
          P,
          v,
          l,
          !1
        );
        return;
      case "select":
        Nt("invalid", t), s = v = c = null;
        for (l in a)
          if (a.hasOwnProperty(l) && (S = a[l], S != null))
            switch (l) {
              case "value":
                c = S;
                break;
              case "defaultValue":
                v = S;
                break;
              case "multiple":
                s = S;
              default:
                Yt(t, e, l, S, a, null);
            }
        e = c, a = v, t.multiple = !!s, e != null ? zo(t, !!s, e, !1) : a != null && zo(t, !!s, a, !0);
        return;
      case "textarea":
        Nt("invalid", t), c = l = s = null;
        for (v in a)
          if (a.hasOwnProperty(v) && (S = a[v], S != null))
            switch (v) {
              case "value":
                s = S;
                break;
              case "defaultValue":
                l = S;
                break;
              case "children":
                c = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(r(91));
                break;
              default:
                Yt(t, e, v, S, a, null);
            }
        Og(t, s, l, c);
        return;
      case "option":
        for (O in a)
          a.hasOwnProperty(O) && (s = a[O], s != null) && (O === "selected" ? t.selected = s && typeof s != "function" && typeof s != "symbol" : Yt(t, e, O, s, a, null));
        return;
      case "dialog":
        Nt("beforetoggle", t), Nt("toggle", t), Nt("cancel", t), Nt("close", t);
        break;
      case "iframe":
      case "object":
        Nt("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Mr.length; s++)
          Nt(Mr[s], t);
        break;
      case "image":
        Nt("error", t), Nt("load", t);
        break;
      case "details":
        Nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Nt("error", t), Nt("load", t);
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
        for (P in a)
          if (a.hasOwnProperty(P) && (s = a[P], s != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Yt(t, e, P, s, a, null);
            }
        return;
      default:
        if (rf(e)) {
          for (q in a)
            a.hasOwnProperty(q) && (s = a[q], s !== void 0 && oh(
              t,
              e,
              q,
              s,
              a,
              void 0
            ));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && (s = a[S], s != null && Yt(t, e, S, s, a, null));
  }
  var gR = {};
  function vR(t, e, a, s) {
    switch (e) {
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
        var l = null, c = null, v = null, S = null, O = null, P = null, q = null;
        for (k in a) {
          var Q = a[k];
          if (a.hasOwnProperty(k) && Q != null)
            switch (k) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = Q;
              default:
                s.hasOwnProperty(k) || Yt(t, e, k, null, s, Q);
            }
        }
        for (var V in s) {
          var k = s[V];
          if (Q = a[V], s.hasOwnProperty(V) && (k != null || Q != null))
            switch (V) {
              case "type":
                k !== Q && (Ut = !0), c = k;
                break;
              case "name":
                k !== Q && (Ut = !0), l = k;
                break;
              case "checked":
                k !== Q && (Ut = !0), P = k;
                break;
              case "defaultChecked":
                k !== Q && (Ut = !0), q = k;
                break;
              case "value":
                k !== Q && (Ut = !0), v = k;
                break;
              case "defaultValue":
                k !== Q && (Ut = !0), S = k;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null)
                  throw Error(r(137, e));
                break;
              default:
                k !== Q && Yt(
                  t,
                  e,
                  V,
                  k,
                  s,
                  Q
                );
            }
        }
        of(
          t,
          v,
          S,
          O,
          P,
          q,
          c,
          l
        );
        return;
      case "select":
        k = v = S = V = null;
        for (c in a)
          if (O = a[c], a.hasOwnProperty(c) && O != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                k = O;
              default:
                s.hasOwnProperty(c) || Yt(
                  t,
                  e,
                  c,
                  null,
                  s,
                  O
                );
            }
        for (l in s)
          if (c = s[l], O = a[l], s.hasOwnProperty(l) && (c != null || O != null))
            switch (l) {
              case "value":
                c !== O && (Ut = !0), V = c;
                break;
              case "defaultValue":
                c !== O && (Ut = !0), S = c;
                break;
              case "multiple":
                c !== O && (Ut = !0), v = c;
              default:
                c !== O && Yt(
                  t,
                  e,
                  l,
                  c,
                  s,
                  O
                );
            }
        e = S, a = v, s = k, V != null ? zo(t, !!a, V, !1) : !!s != !!a && (e != null ? zo(t, !!a, e, !0) : zo(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        k = V = null;
        for (S in a)
          if (l = a[S], a.hasOwnProperty(S) && l != null && !s.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Yt(t, e, S, null, s, l);
            }
        for (v in s)
          if (l = s[v], c = a[v], s.hasOwnProperty(v) && (l != null || c != null))
            switch (v) {
              case "value":
                l !== c && (Ut = !0), V = l;
                break;
              case "defaultValue":
                l !== c && (Ut = !0), k = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(r(91));
                break;
              default:
                l !== c && Yt(t, e, v, l, s, c);
            }
        Dg(t, V, k);
        return;
      case "option":
        for (var ut in a)
          V = a[ut], a.hasOwnProperty(ut) && V != null && !s.hasOwnProperty(ut) && (ut === "selected" ? t.selected = !1 : Yt(
            t,
            e,
            ut,
            null,
            s,
            V
          ));
        for (O in s)
          V = s[O], k = a[O], s.hasOwnProperty(O) && V !== k && (V != null || k != null) && (O === "selected" ? (V !== k && (Ut = !0), t.selected = V && typeof V != "function" && typeof V != "symbol") : Yt(
            t,
            e,
            O,
            V,
            s,
            k
          ));
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
        for (var gt in a)
          V = a[gt], a.hasOwnProperty(gt) && V != null && !s.hasOwnProperty(gt) && Yt(t, e, gt, null, s, V);
        for (P in s)
          if (V = s[P], k = a[P], s.hasOwnProperty(P) && V !== k && (V != null || k != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(r(137, e));
                break;
              default:
                Yt(
                  t,
                  e,
                  P,
                  V,
                  s,
                  k
                );
            }
        return;
      default:
        if (rf(e)) {
          for (var At in a)
            V = a[At], a.hasOwnProperty(At) && V !== void 0 && !s.hasOwnProperty(At) && oh(
              t,
              e,
              At,
              void 0,
              s,
              V
            );
          for (q in s)
            V = s[q], k = a[q], !s.hasOwnProperty(q) || V === k || V === void 0 && k === void 0 || oh(
              t,
              e,
              q,
              V,
              s,
              k
            );
          return;
        }
    }
    for (var B in a)
      V = a[B], a.hasOwnProperty(B) && V != null && !s.hasOwnProperty(B) && Yt(t, e, B, null, s, V);
    for (Q in s)
      V = s[Q], k = a[Q], !s.hasOwnProperty(Q) || V === k || V == null && k == null || Yt(t, e, Q, V, s, k);
  }
  function B0(t) {
    switch (t) {
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
  function yR() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++) {
        var l = a[s], c = l.transferSize, v = l.initiatorType, S = l.duration;
        if (c && S && B0(v)) {
          for (v = 0, S = l.responseEnd, s += 1; s < a.length; s++) {
            var O = a[s], P = O.startTime;
            if (P > S) break;
            var q = O.transferSize, Q = O.initiatorType;
            q && B0(Q) && (O = O.responseEnd, v += q * (O < S ? 1 : (S - P) / (O - P)));
          }
          if (--s, e += 8 * (c + v) / (l.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var sh = null, rh = null;
  function Nr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function P0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function U0(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function H0(t, e, a, s) {
    return a = Nr(
      a
    ).createElement(t), a[Le] = s, a[en] = e, He(a, t, e), Re(a), a;
  }
  function lh(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var uh = null;
  function bR() {
    var t = window.event;
    return t && t.type === "popstate" ? t === uh ? !1 : (uh = t, !0) : (uh = null, !1);
  }
  var ch = typeof setTimeout == "function" ? setTimeout : void 0, xR = typeof clearTimeout == "function" ? clearTimeout : void 0, k0 = typeof Promise == "function" ? Promise : void 0, I0 = typeof requestAnimationFrame == "function" ? requestAnimationFrame : ch, SR = typeof queueMicrotask == "function" ? queueMicrotask : typeof k0 < "u" ? function(t) {
    return k0.resolve(null).then(t).catch(wR);
  } : ch;
  function wR(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function va(t) {
    return t === "head";
  }
  function q0(t, e) {
    var a = e, s = 0;
    do {
      var l = a.nextSibling;
      if (t.removeChild(a), l && l.nodeType === 8)
        if (a = l.data, a === "/$" || a === "/&") {
          if (s === 0) {
            t.removeChild(l), vs(e);
            return;
          }
          s--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          s++;
        else if (a === "html")
          yh(
            t.ownerDocument.documentElement
          );
        else if (a === "head") {
          a = t.ownerDocument.head, yh(a);
          for (var c = a.firstChild; c; ) {
            var v = c.nextSibling, S = c.nodeName;
            c[Qs] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = v;
          }
        } else
          a === "body" && yh(t.ownerDocument.body);
      a = l;
    } while (a);
    vs(e);
  }
  function G0(t, e) {
    var a = t;
    t = 0;
    do {
      var s = a.nextSibling;
      if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), s && s.nodeType === 8)
        if (a = s.data, a === "/$") {
          if (t === 0) break;
          t--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = s;
    } while (a);
  }
  function Y0(t, e, a) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, a != null && (t.style.viewTransitionClass = a), a = getComputedStyle(t), a.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var s = 1;
      else
        for (var l = s = 0; l < e.length; l++) {
          var c = e[l];
          0 < c.width && 0 < c.height && s++;
        }
      s === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + a.paddingTop, t.marginBottom = "-" + a.paddingBottom);
    }
  }
  function F0(t, e) {
    t = t.style, e = e.style;
    var a = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), a = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (a = e.display, t.display = a == null || typeof a == "boolean" ? "" : a, a = e.margin, a != null ? t.margin = a : (a = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = a == null || typeof a == "boolean" ? "" : a, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function TR(t, e, a) {
    return a = a.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= a.innerHeight && t.left <= a.innerWidth
    };
  }
  function fh(t) {
    var e = t.getBoundingClientRect(), a = getComputedStyle(t);
    return TR(e, a, t);
  }
  function ER(t) {
    return t.documentElement.clientHeight;
  }
  function CR(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function AR(t, e, a, s, l, c, v, S, O) {
    var P = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var q = P.startViewTransition({
        update: function() {
          var V = P.defaultView, k = V.navigation && V.navigation.transition, ut = P.fonts.status;
          s();
          var gt = [];
          if (ut === "loaded" && (ER(P), P.fonts.status === "loading" && gt.push(P.fonts.ready)), ut = gt.length, t !== null)
            for (var At = t.suspenseyImages, B = 0, L = 0; L < At.length; L++) {
              var U = At[L];
              if (!U.complete) {
                var Z = U.getBoundingClientRect();
                if (0 < Z.bottom && 0 < Z.right && Z.top < V.innerHeight && Z.left < V.innerWidth) {
                  if (B += hb(U), B > zu) {
                    gt.length = ut;
                    break;
                  }
                  U = new Promise(
                    CR.bind(U)
                  ), gt.push(U);
                }
              }
            }
          if (0 < gt.length)
            return V = Promise.race([
              Promise.all(gt),
              new Promise(function(ht) {
                return setTimeout(ht, 500);
              })
            ]).then(l, l), (k ? Promise.allSettled([k.finished, V]) : V).then(c, c);
          if (l(), k)
            return k.finished.then(
              c,
              c
            );
          c();
        },
        types: a
      });
      P.__reactViewTransition = q;
      var Q = [];
      return q.ready.then(
        function() {
          for (var V = P.documentElement.getAnimations({
            subtree: !0
          }), k = 0; k < V.length; k++) {
            var ut = V[k], gt = ut.effect, At = gt.pseudoElement;
            if (At != null && At.startsWith("::view-transition")) {
              Q.push(ut), ut = gt.getKeyframes();
              for (var B = At = void 0, L = !0, U = 0; U < ut.length; U++) {
                var Z = ut[U], ht = Z.width;
                if (At === void 0) At = ht;
                else if (At !== ht) {
                  L = !1;
                  break;
                }
                if (ht = Z.height, B === void 0) B = ht;
                else if (B !== ht) {
                  L = !1;
                  break;
                }
                delete Z.width, delete Z.height, Z.transform === "none" && delete Z.transform;
              }
              L && At !== void 0 && B !== void 0 && (gt.setKeyframes(ut), L = getComputedStyle(
                gt.target,
                gt.pseudoElement
              ), L.width !== At || L.height !== B) && (L = ut[0], L.width = At, L.height = B, L = ut[ut.length - 1], L.width = At, L.height = B, gt.setKeyframes(ut));
            }
          }
          v();
        },
        function(V) {
          P.__reactViewTransition === q && (P.__reactViewTransition = null);
          try {
            typeof V == "object" && V !== null && V.name === "InvalidStateError" && (V.message === "View transition was skipped because document visibility state is hidden." || V.message === "Skipping view transition because document visibility state has become hidden." || V.message === "Skipping view transition because viewport size changed." || V.message === "Transition was aborted because of invalid state") && (V = null), V !== null && O(V);
          } finally {
            s(), l(), v();
          }
        }
      ), q.finished.finally(function() {
        for (var V = 0; V < Q.length; V++)
          Q[V].cancel();
        P.__reactViewTransition === q && (P.__reactViewTransition = null), S();
      }), q;
    } catch {
      return s(), l(), v(), null;
    }
  }
  function ro(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  ro.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : j({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, ro.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, a = t.getAnimations({ subtree: !0 }), s = [], l = 0; l < a.length; l++) {
      var c = a[l].effect;
      c !== null && c.target === t && c.pseudoElement === e && s.push(a[l]);
    }
    return s;
  }, ro.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function X0(t) {
    return {
      name: t,
      group: new ro("group", t),
      imagePair: new ro("image-pair", t),
      old: new ro("old", t),
      new: new ro("new", t)
    };
  }
  function bn(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  bn.prototype.addEventListener = function(t, e, a) {
    var s = null, l = null;
    if (!(a != null && typeof a != "boolean" && (s = a.signal || null, s !== null && s.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var c = this._eventListeners;
      if (Z0(c, t, e, a) === -1) {
        var v = this, S = e;
        a != null && typeof a != "boolean" && a.once === !0 && (S = function(O) {
          v.removeEventListener(
            t,
            e,
            a
          ), typeof e == "function" ? e.call(this, O) : e.handleEvent(O);
        }), s !== null && (l = v.removeEventListener.bind(
          v,
          t,
          e,
          a
        ), s.addEventListener("abort", l, { once: !0 }), l = s.removeEventListener.bind(s, "abort", l)), s = fs(a), c.push({
          type: t,
          listener: e,
          optionsOrUseCapture: a,
          attachedListener: S,
          cleanup: l
        }), m(
          this._fragmentFiber.child,
          !1,
          RR,
          t,
          S,
          s
        );
      }
      this._eventListeners = c;
    }
  };
  function RR(t, e, a, s) {
    return C(t).addEventListener(
      e,
      a,
      s
    ), !1;
  }
  bn.prototype.removeEventListener = function(t, e, a) {
    var s = this._eventListeners;
    if (s !== null && (e = Z0(
      s,
      t,
      e,
      a
    ), e !== -1)) {
      var l = s[e];
      a = l.attachedListener;
      var c = l.cleanup;
      l = fs(l.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        DR,
        t,
        a,
        l
      ), s.splice(e, 1), c !== null && c();
    }
  };
  function DR(t, e, a, s) {
    return C(t).removeEventListener(
      e,
      a,
      s
    ), !1;
  }
  function fs(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function K0(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Z0(t, e, a, s) {
    if (t.length === 0) return -1;
    s = K0(s);
    for (var l = 0; l < t.length; l++) {
      var c = t[l];
      if (c.type === e && c.listener === a && K0(c.optionsOrUseCapture) === s)
        return l;
    }
    return -1;
  }
  bn.prototype.dispatchEvent = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = C(e);
    var a = this._eventListeners;
    if (a !== null && 0 < a.length || !t.bubbles) {
      var s = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (a)
        for (var l = 0; l < a.length; l++) {
          var c = a[l];
          s.addEventListener(
            c.type,
            c.attachedListener,
            fs(c.optionsOrUseCapture)
          );
        }
      if (e.appendChild(s), t = s.dispatchEvent(t), a)
        for (l = 0; l < a.length; l++)
          c = a[l], s.removeEventListener(
            c.type,
            c.attachedListener,
            fs(c.optionsOrUseCapture)
          );
      return e.removeChild(s), t;
    }
    return e.dispatchEvent(t);
  }, bn.prototype.focus = function(t) {
    m(
      this._fragmentFiber.child,
      !0,
      Q0,
      t,
      void 0,
      void 0
    );
  };
  function Q0(t, e) {
    return t.tag === 6 ? !1 : (t = C(t), HR(t, e));
  }
  bn.prototype.focusLast = function(t) {
    var e = [];
    m(
      this._fragmentFiber.child,
      !0,
      dh,
      e,
      void 0,
      void 0
    );
    for (var a = e.length - 1; 0 <= a && !Q0(e[a], t); a--) ;
  };
  function dh(t, e) {
    return e.push(t), !1;
  }
  bn.prototype.blur = function() {
    var t = b(
      this._fragmentFiber
    );
    t !== null && (t = C(t), t = Nr(t).activeElement, t !== null && m(
      this._fragmentFiber.child,
      !1,
      OR,
      t,
      void 0,
      void 0
    ));
  };
  function OR(t, e) {
    return t.tag === 6 ? !1 : (t = C(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  bn.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), m(
      this._fragmentFiber.child,
      !1,
      MR,
      t,
      void 0,
      void 0
    );
  };
  function MR(t, e) {
    return t.tag === 6 || (t = C(t), e.observe(t)), !1;
  }
  bn.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), m(
        this._fragmentFiber.child,
        !1,
        _R,
        t,
        void 0,
        void 0
      );
      for (var a = e = 0; a < Gn.length; a++) {
        var s = Gn[a];
        s.fragmentInstance === this && s.observer === t ? t.unobserve(s.instance) : Gn[e++] = s;
      }
      Gn.length = e;
    }
  };
  function _R(t, e) {
    return t.tag === 6 || (t = C(t), e.unobserve(t)), !1;
  }
  var Gn = [], hh = !1;
  function NR(t, e, a) {
    Gn.push({
      fragmentInstance: t,
      observer: e,
      instance: a
    }), hh || (hh = !0, kR(function() {
      hh = !1;
      var s = Gn;
      Gn = [];
      for (var l = 0; l < s.length; l++) {
        var c = s[l];
        c.observer.unobserve(c.instance);
      }
    }));
  }
  bn.prototype.getClientRects = function() {
    var t = [];
    return m(
      this._fragmentFiber.child,
      !1,
      zR,
      t,
      void 0,
      void 0
    ), t;
  };
  function zR(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var a = t.ownerDocument.createRange();
      a.selectNodeContents(t), e.push.apply(e, a.getClientRects());
    } else
      t = C(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  bn.prototype.getRootNode = function(t) {
    var e = b(
      this._fragmentFiber
    );
    return e === null ? this : C(e).getRootNode(t);
  }, bn.prototype.compareDocumentPosition = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var a = [];
    m(
      this._fragmentFiber.child,
      !1,
      dh,
      a,
      void 0,
      void 0
    );
    var s = C(e);
    if (a.length === 0) {
      if (a = s, E(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (a = e);
      }
      e = this._fragmentFiber;
      var l = s = a.compareDocumentPosition(t);
      return a === t ? l = Node.DOCUMENT_POSITION_CONTAINS : s & Node.DOCUMENT_POSITION_CONTAINED_BY && (a = T(e)[1], a === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (t = C(a).compareDocumentPosition(
        t
      ), l = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = C(a[0]), l = C(a[a.length - 1]);
    var c = E(this._fragmentFiber) ? e.parentElement : s;
    if (c == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    s = c.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, c = c.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var v = e.compareDocumentPosition(t), S = l.compareDocumentPosition(t), O = v & Node.DOCUMENT_POSITION_CONTAINED_BY || S & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return S = s && c && v & Node.DOCUMENT_POSITION_FOLLOWING && S & Node.DOCUMENT_POSITION_PRECEDING, e = s && e === t || c && l === t || O || S ? Node.DOCUMENT_POSITION_CONTAINED_BY : !s && e === t || !c && l === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : v, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || jR(
      e,
      this._fragmentFiber,
      a[0],
      a[a.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function jR(t, e, a, s, l) {
    var c = Ha(l);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (a = !!c)
        t: {
          for (; c !== null; ) {
            if (c.tag === 7 && (c === e || c.alternate === e)) {
              a = !0;
              break t;
            }
            c = c.return;
          }
          a = !1;
        }
      return a;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (c === null)
        return c = l.ownerDocument, l === c || l === c.documentElement || l === c.body;
      t: {
        for (c = e, e = b(e); c !== null; ) {
          if (!(c.tag !== 5 && c.tag !== 3 && c.tag !== 27 || c !== e && c.alternate !== e)) {
            c = !0;
            break t;
          }
          c = c.return;
        }
        c = !1;
      }
      return c;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!c) && !(e = c === a) && (e = I(
      a,
      c,
      H
    ), e === null ? e = !1 : (m(
      e,
      !0,
      D,
      c,
      a
    ), c = A, A = null, e = c !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!c) && !(e = c === s) && (e = I(
      s,
      c,
      H
    ), e === null ? e = !1 : (m(
      e,
      !0,
      M,
      c,
      s
    ), c = A, _ = A = null, e = c !== null)), e) : !1;
  }
  function $0(t, e) {
    var a = t.ownerDocument.createRange();
    a.selectNodeContents(t), t = a.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  bn.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    m(
      this._fragmentFiber.child,
      !1,
      dh,
      e,
      void 0,
      void 0
    );
    var a = t !== !1;
    if (e.length === 0) {
      var s = T(
        this._fragmentFiber
      );
      if (s = a ? s[1] || s[0] || b(this._fragmentFiber) : s[0] || s[1], s === null) return;
      if (s.tag === 6) {
        t = C(s), $0(t, a);
        return;
      }
      if (s = C(s), s.nodeType !== 9) {
        if (s.nodeType === 11) {
          a = "host" in s ? s.host : null, a !== null && a.scrollIntoView(t);
          return;
        }
        s.scrollIntoView(t);
      }
    }
    for (s = a ? e.length - 1 : 0; s !== (a ? -1 : e.length); ) {
      var l = e[s];
      l.tag === 6 ? (l = C(l), $0(l, a)) : C(l).scrollIntoView(t), s += a ? -1 : 1;
    }
  };
  function LR(t, e) {
    return t = C(t), J0(t, e), !1;
  }
  function J0(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function W0(t, e) {
    var a = e._eventListeners;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        t.addEventListener(
          l.type,
          l.attachedListener,
          fs(l.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(c) {
      for (var v = 0, S = 0; S < Gn.length; S++) {
        var O = Gn[S];
        (O.fragmentInstance !== e || O.observer !== c || O.instance !== t) && (Gn[v++] = O);
      }
      Gn.length = v, c.observe(t);
    }), J0(t, e));
  }
  function VR(t, e) {
    var a = e._eventListeners;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var l = a[s];
        t.removeEventListener(
          l.type,
          l.attachedListener,
          fs(l.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(c) {
      typeof c.rootMargin == "string" ? NR(
        e,
        c,
        t
      ) : c.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function mh(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          mh(a), Sl(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function BR(t, e, a, s) {
    for (; t.nodeType === 1; ) {
      var l = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (s) {
        if (!t[Qs])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (c = t.getAttribute("rel"), c === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (c !== l.rel || t.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || t.getAttribute("title") !== (l.title == null ? null : l.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (c = t.getAttribute("src"), (c !== (l.src == null ? null : l.src) || t.getAttribute("type") !== (l.type == null ? null : l.type) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && t.getAttribute("name") === c)
          return t;
      } else return t;
      if (t = _n(t.nextSibling), t === null) break;
    }
    return null;
  }
  function PR(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = _n(t.nextSibling), t === null)) return null;
    return t;
  }
  function tb(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = _n(t.nextSibling), t === null)) return null;
    return t;
  }
  function ph(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function gh(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function UR(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading")
      e();
    else {
      var s = function() {
        e(), a.removeEventListener("DOMContentLoaded", s);
      };
      a.addEventListener("DOMContentLoaded", s), t._reactRetry = s;
    }
  }
  function _n(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var vh = null;
  function eb(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0)
            return _n(t.nextSibling);
          e--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function nb(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else a !== "/$" && a !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function HR(t, e) {
    function a() {
      s = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var s = !1;
    try {
      t.ownerDocument.addEventListener("focus", a, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", a, !0);
    }
    return s;
  }
  function kR(t) {
    I0(function() {
      I0(function(e) {
        return t(e);
      });
    });
  }
  function ib(t, e, a) {
    switch (e = Nr(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function ab(t, e, a) {
    for (var s in a) {
      var l = a[s];
      a.hasOwnProperty(s) && l != null && Yt(t, e, s, null, gR, l);
    }
    a.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === ni && (t.onclick = null), Sl(t);
  }
  function yh(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Sl(t);
  }
  var Nn = /* @__PURE__ */ new Map(), ob = /* @__PURE__ */ new Set();
  function zr(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Pi = rt.d;
  rt.d = {
    f: IR,
    r: qR,
    D: GR,
    C: YR,
    L: FR,
    m: XR,
    X: ZR,
    S: KR,
    M: QR
  };
  function IR() {
    var t = Pi.f(), e = Eu();
    return t || e;
  }
  function qR(t) {
    var e = Mo(t);
    e !== null && e.tag === 5 && e.type === "form" ? ry(e) : Pi.r(t);
  }
  var ds = typeof document > "u" ? null : document;
  function sb(t, e, a) {
    var s = ds;
    if (s && typeof e == "string" && e) {
      var l = En(e);
      l = 'link[rel="' + t + '"][href="' + l + '"]', typeof a == "string" && (l += '[crossorigin="' + a + '"]'), ob.has(l) || (ob.add(l), t = { rel: t, crossOrigin: a, href: e }, s.querySelector(l) === null && (e = s.createElement("link"), He(e, "link", t), Re(e), s.head.appendChild(e)));
    }
  }
  function GR(t) {
    Pi.D(t), sb("dns-prefetch", t, null);
  }
  function YR(t, e) {
    Pi.C(t, e), sb("preconnect", t, e);
  }
  function FR(t, e, a) {
    Pi.L(t, e, a);
    var s = ds;
    if (s && t && e) {
      var l = 'link[rel="preload"][as="' + En(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (l += '[imagesrcset="' + En(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (l += '[imagesizes="' + En(
        a.imageSizes
      ) + '"]')) : l += '[href="' + En(t) + '"]';
      var c = l;
      switch (e) {
        case "style":
          c = hs(t);
          break;
        case "script":
          c = ms(t);
      }
      if (!(Nn.has(c) || (t = j(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), Nn.set(c, t), s.querySelector(l) !== null || e === "style" && s.querySelector(jr(c)) || e === "script" && s.querySelector(Lr(c))))) {
        var v = s.createElement("link");
        He(v, "link", t), e === "style" && (v[xl] = !0, v.onload = v.onerror = function() {
          bg(v);
        }), Re(v), s.head.appendChild(v);
      }
    }
  }
  function XR(t, e) {
    Pi.m(t, e);
    var a = ds;
    if (a && t) {
      var s = e && typeof e.as == "string" ? e.as : "script", l = 'link[rel="modulepreload"][as="' + En(s) + '"][href="' + En(t) + '"]', c = l;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = ms(t);
      }
      if (!Nn.has(c) && (t = j({ rel: "modulepreload", href: t }, e), Nn.set(c, t), a.querySelector(l) === null)) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Lr(c)))
              return;
        }
        s = a.createElement("link"), He(s, "link", t), Re(s), a.head.appendChild(s);
      }
    }
  }
  function KR(t, e, a) {
    Pi.S(t, e, a);
    var s = ds;
    if (s && t) {
      var l = _o(s).hoistableStyles, c = hs(t);
      e = e || "default";
      var v = l.get(c);
      if (!v) {
        var S = { loading: 0, preload: null };
        if (v = s.querySelector(
          jr(c)
        ))
          S.loading = 5;
        else {
          t = j(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = Nn.get(c)) && bh(t, a);
          var O = v = s.createElement("link");
          Re(O), He(O, "link", t), O._p = new Promise(function(P, q) {
            O.onload = P, O.onerror = q;
          }), O.addEventListener("load", function() {
            S.loading |= 1;
          }), O.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, _u(v, e, s);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: S
        }, l.set(c, v);
      }
    }
  }
  function ZR(t, e) {
    Pi.X(t, e);
    var a = ds;
    if (a && t) {
      var s = _o(a).hoistableScripts, l = ms(t), c = s.get(l);
      c || (c = a.querySelector(Lr(l)), c || (t = j({ src: t, async: !0 }, e), (e = Nn.get(l)) && xh(t, e), c = a.createElement("script"), Re(c), He(c, "link", t), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, s.set(l, c));
    }
  }
  function QR(t, e) {
    Pi.M(t, e);
    var a = ds;
    if (a && t) {
      var s = _o(a).hoistableScripts, l = ms(t), c = s.get(l);
      c || (c = a.querySelector(Lr(l)), c || (t = j({ src: t, async: !0, type: "module" }, e), (e = Nn.get(l)) && xh(t, e), c = a.createElement("script"), Re(c), He(c, "link", t), a.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, s.set(l, c));
    }
  }
  function rb(t, e, a, s) {
    var l = (l = ti.current) ? zr(l) : null;
    if (!l) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (a = hs(a.href), e = _o(
          l
        ).hoistableStyles, s = e.get(a), s || (s = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(a, s)), s) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = hs(a.href);
          var c = _o(
            l
          ).hoistableStyles, v = c.get(t);
          if (v || (l = l.ownerDocument || l, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, v), (c = l.querySelector(
            jr(t)
          )) ? c._p || (v.instance = c, v.state.loading = 5) : (c = Nn.get(t), c || (c = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Nn.set(t, c)), $R(
            l,
            t,
            c,
            v.state
          ))), e && s === null)
            throw Error(r(528, ""));
          return v;
        }
        if (e && s !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = ms(a), e = _o(
          l
        ).hoistableScripts, s = e.get(a), s || (s = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(a, s)), s) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function hs(t) {
    return 'href="' + En(t) + '"';
  }
  function jr(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function lb(t) {
    return j({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function $R(t, e, a, s) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[xl] !== !0) {
        s.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[xl] = !0, e.onload = e.onerror = bg.bind(null, e), He(e, "link", a), Re(e), t.head.appendChild(e);
    s.preload = e, e.addEventListener("load", function() {
      return s.loading |= 1;
    }), e.addEventListener("error", function() {
      return s.loading |= 2;
    });
  }
  function ms(t) {
    return '[src="' + En(t) + '"]';
  }
  function Lr(t) {
    return "script[async]" + t;
  }
  function ub(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var s = t.querySelector(
            'style[data-href~="' + En(a.href) + '"]'
          );
          if (s)
            return e.instance = s, Re(s), s;
          var l = j({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return s = (t.ownerDocument || t).createElement(
            "style"
          ), Re(s), He(s, "style", l), _u(s, a.precedence, t), e.instance = s;
        case "stylesheet":
          l = hs(a.href);
          var c = t.querySelector(
            jr(l)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, Re(c), c;
          s = lb(a), (l = Nn.get(l)) && bh(s, l), c = (t.ownerDocument || t).createElement("link"), Re(c);
          var v = c;
          return v._p = new Promise(function(S, O) {
            v.onload = S, v.onerror = O;
          }), He(c, "link", s), e.state.loading |= 4, _u(c, a.precedence, t), e.instance = c;
        case "script":
          return c = ms(a.src), (l = t.querySelector(
            Lr(c)
          )) ? (e.instance = l, Re(l), l) : (s = a, (l = Nn.get(c)) && (s = j({}, a), xh(s, l)), t = t.ownerDocument || t, l = t.createElement("script"), Re(l), He(l, "link", s), t.head.appendChild(l), e.instance = l);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (s = e.instance, e.state.loading |= 4, _u(s, a.precedence, t));
    return e.instance;
  }
  function _u(t, e, a) {
    for (var s = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = s.length ? s[s.length - 1] : null, c = l, v = 0; v < s.length; v++) {
      var S = s[v];
      if (S.dataset.precedence === e) c = S;
      else if (c !== l) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function bh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function xh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Nu = null;
  function cb(t, e, a) {
    if (Nu === null) {
      var s = /* @__PURE__ */ new Map(), l = Nu = /* @__PURE__ */ new Map();
      l.set(a, s);
    } else
      l = Nu, s = l.get(a), s || (s = /* @__PURE__ */ new Map(), l.set(a, s));
    if (s.has(t)) return s;
    for (s.set(t, null), a = a.getElementsByTagName(t), l = 0; l < a.length; l++) {
      var c = a[l];
      if (!(c[Qs] || c[Le] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = c.getAttribute(e) || "";
        v = t + v;
        var S = s.get(v);
        S ? S.push(c) : s.set(v, [c]);
      }
    }
    return s;
  }
  function Sh(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function JR(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function fb(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function db(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function hb(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function mb(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += hb(e), t.suspenseyImages.push(e)), t = eD.bind(t), e.decode().then(t, t));
  }
  function WR(t, e, a, s) {
    if (a.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var l = hs(s.href), c = e.querySelector(
          jr(l)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Vr.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = c, Re(c);
          return;
        }
        c = e.ownerDocument || e, s = lb(s), (l = Nn.get(l)) && bh(s, l), c = c.createElement("link"), Re(c);
        var v = c;
        v._p = new Promise(function(S, O) {
          v.onload = S, v.onerror = O;
        }), He(c, "link", s), a.instance = c;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = Vr.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var zu = 0;
  function tD(t, e) {
    return t.stylesheets && t.count === 0 && Lu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var s = setTimeout(function() {
        if (t.stylesheets && Lu(t, t.stylesheets), t.unsuspend) {
          var c = t.unsuspend;
          t.unsuspend = null, c();
        }
      }, 6e4 + e);
      0 < t.imgBytes && zu === 0 && (zu = 62500 * yR());
      var l = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Lu(t, t.stylesheets), t.unsuspend)) {
            var c = t.unsuspend;
            t.unsuspend = null, c();
          }
        },
        (t.imgBytes > zu ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(s), clearTimeout(l);
      };
    } : null;
  }
  function pb(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Lu(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function Vr() {
    this.count--, pb(this);
  }
  function eD() {
    this.imgCount--, pb(this);
  }
  var ju = null;
  function Lu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ju = /* @__PURE__ */ new Map(), e.forEach(nD, t), ju = null, Vr.call(t));
  }
  function nD(t, e) {
    if (!(e.state.loading & 4)) {
      var a = ju.get(t);
      if (a) var s = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), ju.set(t, a);
        for (var l = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < l.length; c++) {
          var v = l[c];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (a.set(v.dataset.precedence, v), s = v);
        }
        s && a.set(null, s);
      }
      l = e.instance, v = l.getAttribute("data-precedence"), c = a.get(v) || s, c === s && a.set(null, l), a.set(v, l), this.count++, s = Vr.bind(this), l.addEventListener("load", s), l.addEventListener("error", s), c ? c.parentNode.insertBefore(l, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(l, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ps = {
    $$typeof: dt,
    Provider: null,
    Consumer: null,
    _currentValue: Rt,
    _currentValue2: Rt,
    _threadCount: 0
  };
  function iD(t, e, a, s, l, c, v, S, O) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tf(0), this.hiddenUpdates = tf(null), this.identifierPrefix = s, this.onUncaughtError = l, this.onCaughtError = c, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gb(t, e, a, s, l, c, v, S, O, P, q, Q) {
    return t = new iD(
      t,
      e,
      a,
      v,
      O,
      P,
      q,
      Q,
      S
    ), e = 1, c === !0 && (e |= 24), c = nn(3, null, null, e), t.current = c, c.stateNode = t, e = Vf(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: s,
      isDehydrated: a,
      cache: e
    }, Hf(c), t;
  }
  function vb(t) {
    return t ? (t = ko, t) : ko;
  }
  function yb(t, e, a, s, l, c) {
    l = vb(l), s.context === null ? s.context = l : s.pendingContext = l, s = oa(e), s.payload = { element: a }, c = c === void 0 ? null : c, c !== null && (s.callback = c), a = sa(t, s, e), a !== null && (rn(a, t, e), hr(a, t, e));
  }
  function bb(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function wh(t, e) {
    bb(t, e), (t = t.alternate) && bb(t, e);
  }
  function xb(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ga(t, 67108864);
      e !== null && rn(e, t, 67108864), wh(t, 67108864);
    }
  }
  function Sb(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = yn();
      e = ef(e);
      var a = Ga(t, e);
      a !== null && rn(a, t, e), wh(t, e);
    }
  }
  var gs = !0;
  function aD(t, e, a, s) {
    var l = it.T;
    it.T = null;
    var c = rt.p;
    try {
      rt.p = 2, Th(t, e, a, s);
    } finally {
      rt.p = c, it.T = l;
    }
  }
  function oD(t, e, a, s) {
    var l = it.T;
    it.T = null;
    var c = rt.p;
    try {
      rt.p = 8, Th(t, e, a, s);
    } finally {
      rt.p = c, it.T = l;
    }
  }
  function Th(t, e, a, s) {
    if (gs) {
      var l = Eh(s);
      if (l === null)
        ah(
          t,
          e,
          s,
          Vu,
          a
        ), Tb(t, s);
      else if (rD(
        l,
        t,
        e,
        a,
        s
      ))
        s.stopPropagation();
      else if (Tb(t, s), e & 4 && -1 < sD.indexOf(t)) {
        for (; l !== null; ) {
          var c = Mo(l);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var v = Ua(c.pendingLanes);
                  if (v !== 0) {
                    var S = c;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; v; ) {
                      var O = 1 << 31 - Ht(v);
                      S.entanglements[1] |= O, v &= ~O;
                    }
                    di(c), (kt & 6) === 0 && (Su = Fe() + 500, Or(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = Ga(c, 2), S !== null && rn(S, c, 2), Eu(), wh(c, 2);
            }
          if (c = Eh(s), c === null && ah(
            t,
            e,
            s,
            Vu,
            a
          ), c === l) break;
          l = c;
        }
        l !== null && s.stopPropagation();
      } else
        ah(
          t,
          e,
          s,
          null,
          a
        );
    }
  }
  function Eh(t) {
    return t = uf(t), Ch(t);
  }
  var Vu = null;
  function Ch(t) {
    if (Vu = null, t = Ha(t), t !== null) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Vu = t, null;
  }
  function wb(t) {
    switch (t) {
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
      case "fullscreenerror":
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Gs()) {
          case Pn:
            return 2;
          case Ys:
            return 8;
          case Do:
          case vl:
            return 32;
          case Fs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ah = !1, ya = null, ba = null, xa = null, Br = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), Sa = [], sD = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Tb(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ya = null;
        break;
      case "dragenter":
      case "dragleave":
        ba = null;
        break;
      case "mouseover":
      case "mouseout":
        xa = null;
        break;
      case "pointerover":
      case "pointerout":
        Br.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pr.delete(e.pointerId);
    }
  }
  function Ur(t, e, a, s, l, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: s,
      nativeEvent: c,
      targetContainers: [l]
    }, e !== null && (e = Mo(e), e !== null && xb(e)), t) : (t.eventSystemFlags |= s, e = t.targetContainers, l !== null && e.indexOf(l) === -1 && e.push(l), t);
  }
  function rD(t, e, a, s, l) {
    switch (e) {
      case "focusin":
        return ya = Ur(
          ya,
          t,
          e,
          a,
          s,
          l
        ), !0;
      case "dragenter":
        return ba = Ur(
          ba,
          t,
          e,
          a,
          s,
          l
        ), !0;
      case "mouseover":
        return xa = Ur(
          xa,
          t,
          e,
          a,
          s,
          l
        ), !0;
      case "pointerover":
        var c = l.pointerId;
        return Br.set(
          c,
          Ur(
            Br.get(c) || null,
            t,
            e,
            a,
            s,
            l
          )
        ), !0;
      case "gotpointercapture":
        return c = l.pointerId, Pr.set(
          c,
          Ur(
            Pr.get(c) || null,
            t,
            e,
            a,
            s,
            l
          )
        ), !0;
    }
    return !1;
  }
  function Eb(t) {
    var e = Ha(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = d(a), e !== null) {
            t.blockedOn = e, gg(t.priority, function() {
              Sb(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = h(a), e !== null) {
            t.blockedOn = e, gg(t.priority, function() {
              Sb(a);
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Bu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Eh(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var s = new a.constructor(
          a.type,
          a
        );
        lf = s, a.target.dispatchEvent(s), lf = null;
      } else
        return e = Mo(a), e !== null && xb(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function Cb(t, e, a) {
    Bu(t) && a.delete(e);
  }
  function lD() {
    Ah = !1, ya !== null && Bu(ya) && (ya = null), ba !== null && Bu(ba) && (ba = null), xa !== null && Bu(xa) && (xa = null), Br.forEach(Cb), Pr.forEach(Cb);
  }
  function Pu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Ah || (Ah = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      lD
    )));
  }
  var Uu = null;
  function Ab(t) {
    Uu !== t && (Uu = t, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        Uu === t && (Uu = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], s = t[e + 1], l = t[e + 2];
          if (typeof s != "function") {
            if (Ch(s || a) === null)
              continue;
            break;
          }
          var c = Mo(a);
          c !== null && (t.splice(e, 3), e -= 3, rd(
            c,
            {
              pending: !0,
              data: l,
              method: a.method,
              action: s
            },
            s,
            l
          ));
        }
      }
    ));
  }
  function vs(t) {
    function e(O) {
      return Pu(O, t);
    }
    ya !== null && Pu(ya, t), ba !== null && Pu(ba, t), xa !== null && Pu(xa, t), Br.forEach(e), Pr.forEach(e);
    for (var a = 0; a < Sa.length; a++) {
      var s = Sa[a];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < Sa.length && (a = Sa[0], a.blockedOn === null); )
      Eb(a), a.blockedOn === null && Sa.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (s = 0; s < a.length; s += 3) {
        var l = a[s], c = a[s + 1], v = l[en] || null;
        if (typeof c == "function")
          v || Ab(a);
        else if (v) {
          var S = null;
          if (c && c.hasAttribute("formAction")) {
            if (l = c, v = c[en] || null)
              S = v.formAction;
            else if (Ch(l) !== null) continue;
          } else S = v.action;
          typeof S == "function" ? a[s + 1] = S : (a.splice(s, 3), s -= 3), Ab(a);
        }
      }
  }
  function Rb() {
    function t(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(v) {
            return l = v;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      l !== null && (l(), l = null), s || setTimeout(a, 20);
    }
    function a() {
      if (!s && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var s = !1, l = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        s = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), l !== null && (l(), l = null);
      };
    }
  }
  function Rh(t) {
    this._internalRoot = t;
  }
  Hu.prototype.render = Rh.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var a = e.current, s = yn();
    yb(a, s, t, e, null, null);
  }, Hu.prototype.unmount = Rh.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      yb(t.current, 2, null, t, null, null), Eu(), e[Oo] = null;
    }
  };
  function Hu(t) {
    this._internalRoot = t;
  }
  Hu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = pg();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < Sa.length && e !== 0 && e < Sa[a].priority; a++) ;
      Sa.splice(a, 0, t), a === 0 && Eb(t);
    }
  };
  var Db = i.version;
  if (Db !== "19.3.0")
    throw Error(
      r(
        527,
        Db,
        "19.3.0"
      )
    );
  rt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = p(e), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var uD = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: it,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ku.isDisabled && ku.supportsFiber)
      try {
        oe = ku.inject(
          uD
        ), Xt = ku;
      } catch {
      }
  }
  return kr.createRoot = function(t, e) {
    if (!u(t)) throw Error(r(299));
    var a = !1, s = "", l = vy, c = yy, v = by;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (s = e.identifierPrefix), e.onUncaughtError !== void 0 && (l = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (v = e.onRecoverableError)), e = gb(
      t,
      1,
      !1,
      null,
      null,
      a,
      s,
      null,
      l,
      c,
      v,
      Rb
    ), t[Oo] = e.current, ih(t), new Rh(e);
  }, kr.hydrateRoot = function(t, e, a) {
    if (!u(t)) throw Error(r(299));
    var s = !1, l = "", c = vy, v = yy, S = by, O = null;
    return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (l = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (v = a.onCaughtError), a.onRecoverableError !== void 0 && (S = a.onRecoverableError), a.formState !== void 0 && (O = a.formState)), e = gb(
      t,
      1,
      !0,
      e,
      a ?? null,
      s,
      l,
      O,
      c,
      v,
      S,
      Rb
    ), e.context = vb(null), a = e.current, s = yn(), s = ef(s), l = oa(s), l.callback = null, sa(a, l, s), a = s, e.current.lanes = a, Zs(e, a), di(e), t[Oo] = e.current, ih(t), new Hu(e);
  }, kr.version = "19.3.0", kr;
}
var kb;
function bD() {
  if (kb) return _h.exports;
  kb = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), _h.exports = yD(), _h.exports;
}
var xD = bD();
const n1 = x.createContext({});
function Nc(n) {
  const i = x.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const SD = typeof window < "u", hm = SD ? x.useLayoutEffect : x.useEffect, up = /* @__PURE__ */ x.createContext(null);
function cp(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function gc(n, i) {
  const o = n.indexOf(i);
  o > -1 && n.splice(o, 1);
}
const Xi = (n, i, o) => o > i ? i : o < n ? n : o;
let zc = () => {
};
const bi = {}, fp = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n), i1 = (n) => typeof n == "object" && n !== null, dp = (n) => /^0[^.\s]+$/u.test(n);
// @__NO_SIDE_EFFECTS__
function a1(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const $n = /* @__NO_SIDE_EFFECTS__ */ (n) => n, rl = (...n) => n.reduce((i, o) => (r) => o(i(r))), Qr = /* @__NO_SIDE_EFFECTS__ */ (n, i, o) => {
  const r = i - n;
  return r ? (o - n) / r : 1;
};
class vc {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return cp(this.subscriptions, i), () => this.remove(i);
  }
  remove(i) {
    gc(this.subscriptions, i);
  }
  notify(i, o, r) {
    const u = this.subscriptions.length;
    if (u)
      if (u === 1)
        this.subscriptions[0](i, o, r);
      else
        for (let f = 0; f < u; f++) {
          const d = this.subscriptions[f];
          d && d(i, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ln = /* @__NO_SIDE_EFFECTS__ */ (n) => n * 1e3, jn = /* @__NO_SIDE_EFFECTS__ */ (n) => n / 1e3, o1 = /* @__NO_SIDE_EFFECTS__ */ (n, i) => i ? n * (1e3 / i) : 0, s1 = (n, i, o) => (((1 - 3 * o + 3 * i) * n + (3 * o - 6 * i)) * n + 3 * i) * n, wD = 1e-7, TD = 12;
function ED(n, i, o, r, u) {
  let f, d, h = 0;
  do
    d = i + (o - i) / 2, f = s1(d, r, u) - n, f > 0 ? o = d : i = d;
  while (Math.abs(f) > wD && ++h < TD);
  return d;
}
// @__NO_SIDE_EFFECTS__
function ll(n, i, o, r) {
  if (n === i && o === r)
    return $n;
  const u = (f) => ED(f, 0, 1, n, o);
  return (f) => f === 0 || f === 1 ? f : s1(u(f), i, r);
}
const r1 = /* @__NO_SIDE_EFFECTS__ */ (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2, l1 = /* @__NO_SIDE_EFFECTS__ */ (n) => (i) => 1 - n(1 - i), u1 = /* @__PURE__ */ ll(0.33, 1.53, 0.69, 0.99), hp = /* @__PURE__ */ l1(u1), c1 = /* @__PURE__ */ r1(hp), f1 = (n) => n >= 1 ? 1 : (n *= 2) < 1 ? 0.5 * hp(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))), mp = (n) => 1 - Math.sin(Math.acos(n)), d1 = /* @__PURE__ */ l1(mp), h1 = /* @__PURE__ */ r1(mp), CD = /* @__PURE__ */ ll(0.42, 0, 1, 1), AD = /* @__PURE__ */ ll(0, 0, 0.58, 1), pp = /* @__PURE__ */ ll(0.42, 0, 0.58, 1), RD = /* @__NO_SIDE_EFFECTS__ */ (n) => Array.isArray(n) && typeof n[0] != "number", m1 = /* @__NO_SIDE_EFFECTS__ */ (n) => Array.isArray(n) && typeof n[0] == "number", DD = {
  linear: $n,
  easeIn: CD,
  easeInOut: pp,
  easeOut: AD,
  circIn: mp,
  circInOut: h1,
  circOut: d1,
  backIn: hp,
  backInOut: c1,
  backOut: u1,
  anticipate: f1
}, OD = (n) => typeof n == "string", Ib = (n) => {
  if (/* @__PURE__ */ m1(n)) {
    zc(n.length === 4);
    const [i, o, r, u] = n;
    return /* @__PURE__ */ ll(i, o, r, u);
  } else if (OD(n))
    return DD[n];
  return n;
}, Te = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let ic;
function MD() {
  ic = void 0;
}
const ze = {
  now: () => (ic === void 0 && ze.set(Te.isProcessing || bi.useManualTiming ? Te.timestamp : performance.now()), ic),
  set: (n) => {
    ic = n, queueMicrotask(MD);
  }
}, Rs = (n) => Math.round(n * 1e5) / 1e5, p1 = (n) => (i) => typeof i == "string" && i.startsWith(n), g1 = /* @__PURE__ */ p1("--"), _D = /* @__PURE__ */ p1("var(--"), gp = (n) => _D(n) ? ND.test(n.split("/*")[0].trim()) : !1, ND = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function qb(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const Ls = {
  test: (n) => typeof n == "number",
  parse: parseFloat,
  transform: (n) => n
}, $r = {
  ...Ls,
  transform: (n) => Xi(0, 1, n)
}, Iu = {
  ...Ls,
  default: 1
}, vp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function zD(n) {
  return n == null;
}
const jD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, yp = (n, i) => (o) => !!(typeof o == "string" && jD.test(o) && o.startsWith(n) || i && !zD(o) && Object.prototype.hasOwnProperty.call(o, i)), v1 = (n, i, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [u, f, d, h] = r.match(vp);
  return {
    [n]: parseFloat(u),
    [i]: parseFloat(f),
    [o]: parseFloat(d),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, LD = (n) => Xi(0, 255, n), Lh = {
  ...Ls,
  transform: (n) => Math.round(LD(n))
}, ho = {
  test: /* @__PURE__ */ yp("rgb", "red"),
  parse: /* @__PURE__ */ v1("red", "green", "blue"),
  transform: ({ red: n, green: i, blue: o, alpha: r = 1 }) => "rgba(" + Lh.transform(n) + ", " + Lh.transform(i) + ", " + Lh.transform(o) + ", " + Rs($r.transform(r)) + ")"
};
function VD(n) {
  let i = "", o = "", r = "", u = "";
  return n.length > 5 ? (i = n.substring(1, 3), o = n.substring(3, 5), r = n.substring(5, 7), u = n.substring(7, 9)) : (i = n.substring(1, 2), o = n.substring(2, 3), r = n.substring(3, 4), u = n.substring(4, 5), i += i, o += o, r += r, u += u), {
    red: parseInt(i, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: u ? parseInt(u, 16) / 255 : 1
  };
}
const mm = {
  test: /* @__PURE__ */ yp("#"),
  parse: VD,
  transform: ho.transform
}, ul = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
  test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: (i) => `${i}${n}`
}), Hi = /* @__PURE__ */ ul("deg"), yi = /* @__PURE__ */ ul("%"), vt = /* @__PURE__ */ ul("px"), BD = /* @__PURE__ */ ul("vh"), PD = /* @__PURE__ */ ul("vw"), Gb = {
  ...yi,
  parse: (n) => yi.parse(n) / 100,
  transform: (n) => yi.transform(n * 100)
}, Es = {
  test: /* @__PURE__ */ yp("hsl", "hue"),
  parse: /* @__PURE__ */ v1("hue", "saturation", "lightness"),
  transform: ({ hue: n, saturation: i, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(n) + ", " + yi.transform(Rs(i)) + ", " + yi.transform(Rs(o)) + ", " + Rs($r.transform(r)) + ")"
}, Ee = {
  test: (n) => ho.test(n) || mm.test(n) || Es.test(n),
  parse: (n) => ho.test(n) ? ho.parse(n) : Es.test(n) ? Es.parse(n) : mm.parse(n),
  transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? ho.transform(n) : Es.transform(n),
  getAnimatableNone: (n) => {
    const i = Ee.parse(n);
    return i.alpha = 0, Ee.transform(i);
  }
}, UD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, y1 = /* @__PURE__ */ new RegExp(vp.source), b1 = /* @__PURE__ */ new RegExp(UD.source, "i");
function HD(n) {
  return isNaN(n) && typeof n == "string" && (y1.test(n) || b1.test(n));
}
const x1 = "number", S1 = "color", kD = "var", ID = "var(", Yb = "${}", qD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function GD(n) {
  const i = n.toString();
  return y1.test(i) || b1.test(i);
}
function Jr(n) {
  const i = n.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, u = [];
  let f = 0;
  const h = i.replace(qD, (g) => (Ee.test(g) ? (r.color.push(f), u.push(S1), o.push(Ee.parse(g))) : g.startsWith(ID) ? (r.var.push(f), u.push(kD), o.push(g)) : (r.number.push(f), u.push(x1), o.push(parseFloat(g))), ++f, Yb)).split(Yb);
  return { values: o, split: h, indexes: r, types: u };
}
function YD(n) {
  return Jr(n).values;
}
function w1({ split: n, types: i }) {
  const o = n.length;
  return (r) => {
    let u = "";
    for (let f = 0; f < o; f++)
      if (u += n[f], r[f] !== void 0) {
        const d = i[f];
        d === x1 ? u += Rs(r[f]) : d === S1 ? u += Ee.transform(r[f]) : u += r[f];
      }
    return u;
  };
}
function FD(n) {
  return w1(Jr(n));
}
const XD = (n) => typeof n == "number" ? 0 : Ee.test(n) ? Ee.getAnimatableNone(n) : n, KD = (n, i) => typeof n == "number" ? i?.trim().endsWith("/") ? n : 0 : XD(n);
function ZD(n) {
  const i = Jr(n);
  return w1(i)(i.values.map((r, u) => KD(r, i.split[u])));
}
const Sn = {
  test: HD,
  parse: YD,
  createTransformer: FD,
  getAnimatableNone: ZD
};
function Vh(n, i, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? n + (i - n) * 6 * o : o < 1 / 2 ? i : o < 2 / 3 ? n + (i - n) * (2 / 3 - o) * 6 : n;
}
function QD({ hue: n, saturation: i, lightness: o, alpha: r }) {
  n /= 360, i /= 100, o /= 100;
  let u = 0, f = 0, d = 0;
  if (!i)
    u = f = d = o;
  else {
    const h = o < 0.5 ? o * (1 + i) : o + i - o * i, g = 2 * o - h;
    u = Vh(g, h, n + 1 / 3), f = Vh(g, h, n), d = Vh(g, h, n - 1 / 3);
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(f * 255),
    blue: Math.round(d * 255),
    alpha: r
  };
}
function yc(n, i) {
  return (o) => o > 0 ? i : n;
}
const Zt = (n, i, o) => n + (i - n) * o, Bh = (n, i, o) => {
  const r = n * n, u = o * (i * i - r) + r;
  return u < 0 ? 0 : Math.sqrt(u);
}, $D = [mm, ho, Es], JD = (n) => $D.find((i) => i.test(n));
function Fb(n) {
  const i = JD(n);
  if (!i)
    return !1;
  let o = i.parse(n);
  return i === Es && (o = QD(o)), o;
}
const Xb = (n, i) => {
  const o = Fb(n), r = Fb(i);
  if (!o || !r)
    return yc(n, i);
  const u = { ...o };
  return (f) => (u.red = Bh(o.red, r.red, f), u.green = Bh(o.green, r.green, f), u.blue = Bh(o.blue, r.blue, f), u.alpha = Zt(o.alpha, r.alpha, f), ho.transform(u));
}, pm = /* @__PURE__ */ new Set(["none", "hidden"]);
function WD(n, i) {
  return pm.has(n) ? (o) => o <= 0 ? n : i : (o) => o >= 1 ? i : n;
}
function t2(n, i) {
  return (o) => Zt(n, i, o);
}
function bp(n) {
  return typeof n == "number" ? t2 : typeof n == "string" ? gp(n) ? yc : Ee.test(n) ? Xb : i2 : Array.isArray(n) ? T1 : typeof n == "object" ? Ee.test(n) ? Xb : e2 : yc;
}
function T1(n, i) {
  const o = [...n], r = o.length, u = n.map((f, d) => bp(f)(f, i[d]));
  return (f) => {
    for (let d = 0; d < r; d++)
      o[d] = u[d](f);
    return o;
  };
}
function e2(n, i) {
  const o = { ...n, ...i }, r = {};
  for (const u in o)
    n[u] !== void 0 && i[u] !== void 0 && (r[u] = bp(n[u])(n[u], i[u]));
  return (u) => {
    for (const f in r)
      o[f] = r[f](u);
    return o;
  };
}
function n2(n, i) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < i.values.length; u++) {
    const f = i.types[u], d = n.indexes[f][r[f]], h = n.values[d] ?? 0;
    o[u] = h, r[f]++;
  }
  return o;
}
const i2 = (n, i) => {
  const o = Sn.createTransformer(i), r = Jr(n), u = Jr(i);
  return r.indexes.var.length === u.indexes.var.length && r.indexes.color.length === u.indexes.color.length && r.indexes.number.length >= u.indexes.number.length ? pm.has(n) && !u.values.length || pm.has(i) && !r.values.length ? WD(n, i) : rl(T1(n2(r, u), u.values), o) : yc(n, i);
}, Kb = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function a2(n, i) {
  const o = Kb.exec(n);
  if (!o)
    return;
  const r = Kb.exec(i);
  if (!r || o[2] !== r[2])
    return;
  const u = o[2], f = parseFloat(o[1]), d = parseFloat(r[1]);
  return (h) => Rs(Zt(f, d, h)) + u;
}
function xp(n, i, o) {
  if (typeof n == "number" && typeof i == "number" && typeof o == "number")
    return Zt(n, i, o);
  if (typeof n == "string" && typeof i == "string") {
    const u = a2(n, i);
    if (u)
      return u;
  }
  return bp(n)(n, i);
}
const qu = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function o2(n) {
  let i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, u = !1;
  const f = /* @__PURE__ */ new Set();
  let d = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function h(p) {
    f.has(p) && (o.add(p), n()), p(d);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (p, y = !1, m = !1) => {
      const E = m && r ? i : o;
      return y && f.add(p), E.add(p), p;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (p) => {
      o.delete(p), f.delete(p);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (p) => {
      if (d = p, r) {
        u = !0;
        return;
      }
      r = !0;
      const y = i;
      i = o, o = y, i.forEach(h), i.clear(), r = !1, u && (u = !1, g.process(p));
    }
  };
  return g;
}
const s2 = 40;
function E1(n, i, o = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let r = !1, u = !0;
  const f = () => r = !0, d = qu.reduce((D, M) => (D[M] = o2(f), D), {}), { setup: h, read: g, resolveKeyframes: p, preUpdate: y, update: m, preRender: b, render: E, postRender: T } = d, R = () => {
    const D = bi.useManualTiming, M = D ? o.timestamp : performance.now();
    r = !1, D || (o.delta = u ? 1e3 / 60 : Math.max(Math.min(M - o.timestamp, s2), 1)), o.timestamp = M, o.isProcessing = !0, h.process(o), g.process(o), p.process(o), y.process(o), m.process(o), b.process(o), E.process(o), T.process(o), o.isProcessing = !1, r && i && (u = !1, n(R));
  }, C = () => {
    r = !0, u = !0, o.isProcessing || n(R);
  };
  return { schedule: qu.reduce((D, M) => {
    const H = d[M];
    return D[M] = (I, j = !1, z = !1) => (r || C(), H.schedule(I, j, z)), D;
  }, {}), cancel: (D) => {
    for (let M = 0; M < qu.length; M++)
      d[qu[M]].cancel(D);
  }, state: o, steps: d };
}
const { schedule: Ft, cancel: xi, steps: Ph } = /* @__PURE__ */ E1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $n, !0, Te), r2 = (n) => {
  const i = ({ timestamp: o }) => n(o);
  return {
    start: (o = !0) => Ft.update(i, o),
    stop: () => xi(i),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Te.isProcessing ? Te.timestamp : ze.now()
  };
}, C1 = (n, i, o = 10) => {
  let r = "";
  const u = Math.max(Math.round(i / o), 2);
  for (let f = 0; f < u; f++)
    r += Math.round(n(f / (u - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Sp = 2e4;
function wp(n, i = 50, o = Sp, r) {
  let u = 0, f = n.next(u);
  for (; !f.done && u < o; )
    u += i, f = n.next(u);
  return u >= o ? 1 / 0 : u;
}
function l2(n, i = 100, o) {
  const r = o({ ...n, keyframes: [0, i] }), u = Math.min(wp(r), Sp);
  return {
    type: "keyframes",
    ease: (f) => r.next(u * f).value / i,
    duration: /* @__PURE__ */ jn(u)
  };
}
const Ie = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05
}, A1 = (n) => n < 0 ? 1 / Math.max(1 + n, Ie.minDamping) : Math.max(1 - n, Ie.minDamping);
function R1(n, i) {
  if (!(n > 1))
    return 1;
  const o = Math.sqrt(n * n - 1), r = n - o, u = n + o, f = 2 * o * Math.exp(-i) * (1 + i);
  return D1((d) => u * Math.exp(-r * d) - r * Math.exp(-u * d) - f, (d) => Math.exp(-u * d) - Math.exp(-r * d), i) / i;
}
function gm(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const u2 = 12;
function D1(n, i, o) {
  let r = o;
  for (let u = 1; u < u2; u++)
    r = r - n(r) / i(r);
  return r;
}
const Uh = 1e-3;
function c2({ duration: n = Ie.duration, bounce: i = Ie.bounce }) {
  let o, r;
  const u = A1(i);
  n = Xi(Ie.minDuration, Ie.maxDuration, /* @__PURE__ */ jn(n)), u < 1 ? (o = (p) => {
    const y = p * u, m = y * n, b = gm(p, u), E = Math.exp(-m);
    return Uh - y / b * E;
  }, r = (p) => {
    const m = p * u * n, b = u * u * p * p * n, E = Math.exp(-m), T = gm(p * p, u);
    return (-o(p) + Uh > 0 ? -1 : 1) * -b * E / T;
  }) : (o = (p) => {
    const y = Math.exp(-p * n), m = p * n + 1;
    return -Uh + y * m;
  }, r = (p) => {
    const y = Math.exp(-p * n), m = -p * (n * n);
    return y * m;
  });
  const f = 5 / n, d = D1(o, r, f), h = d * R1(u, d * n), g = h * h;
  return {
    stiffness: g,
    damping: u * 2 * Math.sqrt(g),
    duration: /* @__PURE__ */ Ln(n)
  };
}
const vm = (n, i) => (i ? n >= 0 : n > 0) && n < 1 / 0;
function Hh(n, i) {
  if (vm(n, i))
    return n;
}
function f2(n) {
  const i = Hh(n.stiffness), o = Hh(n.damping, !0), r = Hh(n.mass), u = {
    ...n,
    stiffness: i ?? Ie.stiffness,
    damping: o ?? Ie.damping,
    mass: r ?? Ie.mass,
    isResolvedFromDuration: !1,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (i ?? o ?? r) === void 0 && (n.duration !== void 0 || n.bounce !== void 0)
  };
  if (u.isTimeDefined) {
    if (n.visualDuration) {
      const f = A1(n.bounce || 0), d = 2 * Math.PI / (n.visualDuration * 1.2) * R1(f, 2 * Math.PI / 1.2);
      u.stiffness = d * d, u.damping = 2 * f * Math.sqrt(u.stiffness);
    } else
      Object.assign(u, c2(u)), u.isResolvedFromDuration = !0;
    (!vm(u.stiffness) || !vm(u.damping, !0)) && (u.stiffness = Ie.stiffness, u.damping = Ie.damping);
  }
  return u;
}
function Wr(n = Ie.visualDuration, i = Ie.bounce) {
  const o = typeof n != "object" ? {
    visualDuration: n,
    keyframes: [0, 1],
    bounce: i
  } : n, r = o.keyframes[0], u = o.keyframes[o.keyframes.length - 1], f = { done: !1, value: r }, { stiffness: d, damping: h, mass: g, duration: p, isResolvedFromDuration: y, isTimeDefined: m } = f2({ ...o }), b = (j) => m ? 0 : -/* @__PURE__ */ jn(j), E = h / (2 * Math.sqrt(d * g)), T = /* @__PURE__ */ jn(Math.sqrt(d / g)), R = E * T, C = {
    target: u,
    delta: u - r,
    velocity: b(o.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, A = () => {
    const j = Math.abs(C.delta) < 5;
    C.restSpeed = o.restSpeed || (j ? Ie.restSpeed.granular : Ie.restSpeed.default), C.restDelta = o.restDelta || (j ? Ie.restDelta.granular : Ie.restDelta.default);
  };
  A();
  let _, D, M;
  if (E < 1) {
    const j = gm(T, E), z = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    M = () => {
      z.A = (C.velocity + R * C.delta) / j, z.sinC = R * z.A + C.delta * j, z.cosC = R * C.delta - z.A * j;
    };
    const K = (tt) => {
      tt !== z.t && (z.t = tt, z.env = Math.exp(-R * tt), z.sin = Math.sin(j * tt), z.cos = Math.cos(j * tt));
    };
    _ = (tt) => (K(tt), C.target - z.env * (z.A * z.sin + C.delta * z.cos)), D = (tt) => (K(tt), z.env * (z.sinC * z.sin + z.cosC * z.cos));
  } else if (E === 1) {
    _ = (z) => C.target - Math.exp(-T * z) * (C.delta + (C.velocity + T * C.delta) * z);
    const j = { C: 0 };
    M = () => {
      j.C = C.velocity + T * C.delta;
    }, D = (z) => Math.exp(-T * z) * (T * j.C * z - C.velocity);
  } else {
    const j = T * Math.sqrt(E * E - 1), z = R - j, K = R + j, tt = m ? 1 / 0 : 300 / j, ft = (J, ct) => Math.exp(ct > tt ? -J * tt - R * (ct - tt) : -J * ct), at = { S: 0, F: 0 };
    M = () => {
      const J = (C.velocity + R * C.delta) / j;
      at.S = (C.delta + J) / 2, at.F = (C.delta - J) / 2;
    }, _ = (J) => C.target - at.S * ft(z, J) - at.F * ft(K, J), D = (J) => z * at.S * ft(z, J) + K * at.F * ft(K, J);
  }
  M();
  const H = y && p || null, I = {
    calculatedDuration: H,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (j, z) => {
      C.target = j[j.length - 1], C.delta = C.target - j[0], C.velocity = b(z), o.restSpeed && o.restDelta || A(), I.calculatedDuration = H, f.done = !1, M();
    },
    velocity: (j) => /* @__PURE__ */ Ln(D(j)),
    next: (j) => {
      const z = _(j);
      if (y)
        f.done = j >= p;
      else {
        const K = /* @__PURE__ */ Ln(D(j));
        f.done = Math.abs(K) <= C.restSpeed && Math.abs(C.target - z) <= C.restDelta;
      }
      return f.value = f.done ? C.target : z, f;
    },
    toString: () => {
      const j = Math.min(wp(I), Sp), z = C1((K) => I.next(j * K).value, j, 30);
      return j + "ms " + z;
    },
    toTransition: () => {
    }
  };
  return I;
}
Wr.applyToOptions = (n) => {
  const i = l2(n, 100, Wr);
  return n.ease = i.ease, n.duration = /* @__PURE__ */ Ln(i.duration), n.type = "keyframes", n;
};
function ym({ keyframes: n, velocity: i = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: u = 10, bounceStiffness: f = 500, modifyTarget: d, min: h, max: g, restDelta: p = 0.5, restSpeed: y }) {
  const m = n[0], b = {
    done: !1,
    value: m
  }, E = (j) => j < h || j > g, T = (j) => h === void 0 ? g : g === void 0 || Math.abs(h - j) < Math.abs(g - j) ? h : g;
  let R = o * i;
  const C = m + R, A = d === void 0 ? C : d(C);
  A !== C && (R = A - m);
  const _ = (j) => -R * Math.exp(-j / r), D = (j) => {
    const z = _(j);
    b.done = Math.abs(z) <= p, b.value = b.done ? A : A + z;
  };
  let M, H;
  const I = (j) => {
    E(b.value) && (M = j, H = Wr({
      keyframes: [b.value, T(b.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -_(j) / r * 1e3,
      damping: u,
      stiffness: f,
      restDelta: p,
      restSpeed: y
    }));
  };
  return I(0), {
    calculatedDuration: null,
    next: (j) => {
      let z = !1;
      return !H && M === void 0 && (z = !0, D(j), I(j)), M !== void 0 && j >= M ? H.next(j - M) : (!z && D(j), b);
    }
  };
}
function d2(n, i, o) {
  const r = [], u = o || bi.mix || xp, f = n.length - 1;
  for (let d = 0; d < f; d++) {
    let h = u(n[d], n[d + 1]);
    if (i) {
      const g = Array.isArray(i) ? i[d] || $n : i;
      h = rl(g, h);
    }
    r.push(h);
  }
  return r;
}
function O1(n, i, { clamp: o = !0, ease: r, mixer: u } = {}) {
  const f = n.length;
  if (zc(f === i.length), f === 1)
    return () => i[0];
  if (f === 2 && i[0] === i[1])
    return () => i[1];
  const d = n[0] === n[1];
  n[0] > n[f - 1] && (n = [...n].reverse(), i = [...i].reverse());
  const h = d2(i, r, u), g = h.length, p = (y) => {
    if (d && y < n[0])
      return i[0];
    let m = 0;
    if (g > 1)
      for (; m < n.length - 2 && !(y < n[m + 1]); m++)
        ;
    const b = /* @__PURE__ */ Qr(n[m], n[m + 1], y);
    return h[m](b);
  };
  return o ? (y) => p(Xi(n[0], n[f - 1], y)) : p;
}
function h2(n, i) {
  const o = n[n.length - 1];
  for (let r = 1; r <= i; r++) {
    const u = /* @__PURE__ */ Qr(0, i, r);
    n.push(Zt(o, 1, u));
  }
}
function m2(n) {
  const i = [0];
  return h2(i, n.length - 1), i;
}
function p2(n, i) {
  return n.map((o) => o * i);
}
function g2(n, i) {
  return n.map(() => i || pp).splice(0, n.length - 1);
}
function Fr({ duration: n = 300, keyframes: i, times: o, ease: r = "easeInOut" }) {
  const u = /* @__PURE__ */ RD(r) ? r.map(Ib) : Ib(r) || pp, f = {
    done: !1,
    value: i[0]
  };
  if (i.length === 2 && !Array.isArray(u) && (!o || o.length !== 2 || o[0] === 0 && o[1] === 1)) {
    const [g, p] = i, y = g === p ? void 0 : (bi.mix || xp)(g, p);
    return {
      calculatedDuration: n,
      next: (m) => (f.value = y ? y(u(n > 0 ? Xi(0, 1, m / n) : 1)) : p, f.done = m >= n, f)
    };
  }
  const d = p2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === i.length ? o : m2(i),
    n
  ), h = O1(d, i, {
    ease: Array.isArray(u) ? u : g2(i, u)
  });
  return {
    calculatedDuration: n,
    next: (g) => (f.value = h(g), f.done = g >= n, f)
  };
}
const v2 = 5;
function y2(n, i, o) {
  const r = Math.max(i - v2, 0);
  return /* @__PURE__ */ o1(o - n(r), i - r);
}
function M1(n, i, o = 0) {
  return i <= 0 ? o : n.velocity ? n.velocity(i) : y2((r) => n.next(r).value, i, n.next(i).value);
}
const b2 = (n) => n !== null;
function jc(n, { repeat: i, repeatType: o = "loop" }, r, u = 1) {
  const f = n.filter(b2), h = u < 0 || i && o !== "loop" && i % 2 === 1 ? 0 : f.length - 1;
  return !h || r === void 0 ? f[h] : r;
}
const x2 = {
  decay: ym,
  inertia: ym,
  tween: Fr,
  keyframes: Fr,
  spring: Wr
};
function _1(n) {
  typeof n.type == "string" && (n.type = x2[n.type]);
}
const S2 = 40, Tp = (n, i) => i - n > S2 && !bi.useManualTiming ? i : n;
function N1(n, i) {
  return {
    kind: n,
    animation: i,
    timestamp: ze.now(),
    frameTimestamp: Te.timestamp,
    frameIsProcessing: Te.isProcessing
  };
}
function z1(n, i, o) {
  const r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({
        ...N1("animation-start", n),
        options: o ? { ...i, ...o } : i
      });
    } catch {
    }
}
function w2(n, i) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ...N1("layout-animation-start", n),
        node: i
      });
    } catch {
    }
}
class Lc {
  constructor() {
    this.isResolved = !1;
  }
  get finished() {
    return this._finished || (this._finished = this.isResolved ? Promise.resolve() : new Promise((i) => {
      this._resolve = i;
    })), this._finished;
  }
  updateFinished() {
    this._finished = this._resolve = void 0, this.isResolved = !1;
  }
  notifyFinished() {
    this.isResolved = !0, this._resolve?.();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(i, o) {
    return this.finished.then(i, o);
  }
}
const T2 = (n) => n / 100;
class bc extends Lc {
  constructor(i) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== ze.now() && this.tick(ze.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause(), z1(this, this.options);
  }
  initAnimation() {
    const { options: i } = this;
    _1(i);
    const { type: o = Fr, repeat: r = 0, repeatDelay: u = 0, repeatType: f, velocity: d = 0 } = i;
    let { keyframes: h } = i;
    const g = o || Fr;
    g !== Fr && typeof h[0] != "number" && (this.mixKeyframes = rl(T2, xp(h[0], h[1])), h = [0, 100]);
    const p = g(h === i.keyframes ? i : { ...i, keyframes: h });
    f === "mirror" && (this.mirroredGenerator = g({
      ...i,
      keyframes: [...h].reverse(),
      velocity: -d
    })), p.calculatedDuration === null && (p.calculatedDuration = wp(p));
    const { calculatedDuration: y } = p;
    this.calculatedDuration = y, this.resolvedDuration = y + u, this.totalDuration = this.resolvedDuration * (r + 1) - u, this.generator = p;
  }
  updateTime(i) {
    const o = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o;
  }
  tick(i, o = !1) {
    const { generator: r, totalDuration: u, mixKeyframes: f, mirroredGenerator: d, resolvedDuration: h, calculatedDuration: g } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: p = 0, keyframes: y, repeat: m, repeatType: b, repeatDelay: E, type: T, onUpdate: R, finalKeyframe: C } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = Tp(this.startTime, i)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - u / this.speed, this.startTime)), o ? this.currentTime = i : this.updateTime(i);
    const A = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? A < 0 : A > u;
    this.currentTime = Math.max(A, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let D = this.currentTime, M = r;
    if (m) {
      const z = Math.min(this.currentTime, u) / h;
      let K = Math.floor(z), tt = z % 1;
      !tt && z >= 1 && (tt = 1), tt === 1 && K--, K = Math.min(K, m + 1), K % 2 && (b === "reverse" ? (tt = 1 - tt, E && (tt -= E / h)) : b === "mirror" && (M = d)), D = Xi(0, 1, tt) * h;
    }
    let H;
    _ ? (this.delayState.value = y[0], H = this.delayState) : H = M.next(D), f && !_ && (H.value = f(H.value));
    let { done: I } = H;
    !_ && g !== null && (I = this.playbackSpeed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const j = this.holdTime === null && (this.state === "finished" || this.state === "running" && I);
    return j && T !== ym && (H.value = jc(y, this.options, C, this.speed)), R && R(H.value), j && this.finish(), H;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(i, o) {
    return this.finished.then(i, o);
  }
  get duration() {
    return /* @__PURE__ */ jn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ jn(i);
  }
  get time() {
    return /* @__PURE__ */ jn(this.currentTime);
  }
  set time(i) {
    i = /* @__PURE__ */ Ln(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = i, this.tick(i));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    return M1(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const o = this.playbackSpeed !== i;
    o && this.driver && this.updateTime(ze.now()), this.playbackSpeed = i, o && this.driver && (this.time = /* @__PURE__ */ jn(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: i = r2, startTime: o } = this.options;
    this.driver || (this.driver = i((u) => this.tick(u))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = o ?? (this.pendingStartTime = r)), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ze.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(i) {
    return this.startTime = 0, this.tick(i, !0);
  }
  attachTimeline(i) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), i.observe(this);
  }
}
const E2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function C2(n) {
  const [i, o] = n.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return n;
  const [r] = o.match(vp) || [];
  if (!r)
    return n;
  const u = o.replace(r, "");
  let f = E2.has(i) ? 1 : 0;
  return r !== o && (f *= 100), i + "(" + f + u + ")";
}
const A2 = /\b([a-z-]*)\(.*?\)/gu, bm = {
  ...Sn,
  getAnimatableNone: (n) => {
    const i = n.match(A2);
    return i ? i.map(C2).join(" ") : n;
  }
}, xm = {
  ...Sn,
  getAnimatableNone: (n) => {
    const i = Sn.parse(n);
    return Sn.createTransformer(n)(i.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, Zb = {
  ...Ls,
  transform: Math.round
}, R2 = {
  rotate: Hi,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Hi,
  rotateX: Hi,
  rotateY: Hi,
  rotateZ: Hi,
  scale: Iu,
  scaleX: Iu,
  scaleY: Iu,
  scaleZ: Iu,
  skew: Hi,
  skewX: Hi,
  skewY: Hi,
  distance: vt,
  translateX: vt,
  translateY: vt,
  translateZ: vt,
  x: vt,
  y: vt,
  z: vt,
  perspective: vt,
  transformPerspective: vt,
  opacity: $r,
  originX: Gb,
  originY: Gb,
  originZ: vt
}, xc = {
  // Border props
  borderWidth: vt,
  borderTopWidth: vt,
  borderRightWidth: vt,
  borderBottomWidth: vt,
  borderLeftWidth: vt,
  borderRadius: vt,
  borderTopLeftRadius: vt,
  borderTopRightRadius: vt,
  borderBottomRightRadius: vt,
  borderBottomLeftRadius: vt,
  // Positioning props
  width: vt,
  maxWidth: vt,
  height: vt,
  maxHeight: vt,
  top: vt,
  right: vt,
  bottom: vt,
  left: vt,
  inset: vt,
  insetBlock: vt,
  insetBlockStart: vt,
  insetBlockEnd: vt,
  insetInline: vt,
  insetInlineStart: vt,
  insetInlineEnd: vt,
  // Spacing props
  padding: vt,
  paddingTop: vt,
  paddingRight: vt,
  paddingBottom: vt,
  paddingLeft: vt,
  paddingBlock: vt,
  paddingBlockStart: vt,
  paddingBlockEnd: vt,
  paddingInline: vt,
  paddingInlineStart: vt,
  paddingInlineEnd: vt,
  margin: vt,
  marginTop: vt,
  marginRight: vt,
  marginBottom: vt,
  marginLeft: vt,
  marginBlock: vt,
  marginBlockStart: vt,
  marginBlockEnd: vt,
  marginInline: vt,
  marginInlineStart: vt,
  marginInlineEnd: vt,
  // Typography
  fontSize: vt,
  // Misc
  backgroundPositionX: vt,
  backgroundPositionY: vt,
  ...R2,
  zIndex: Zb,
  // SVG
  fillOpacity: $r,
  strokeOpacity: $r,
  numOctaves: Zb
}, D2 = {
  ...xc,
  // Color props
  color: Ee,
  backgroundColor: Ee,
  outlineColor: Ee,
  fill: Ee,
  stroke: Ee,
  // Border props
  borderColor: Ee,
  borderTopColor: Ee,
  borderRightColor: Ee,
  borderBottomColor: Ee,
  borderLeftColor: Ee,
  filter: bm,
  WebkitFilter: bm,
  mask: xm,
  WebkitMask: xm
}, j1 = (n) => D2[n], O2 = /* @__PURE__ */ new Set([bm, xm]);
function Ep(n, i) {
  let o = j1(n);
  return O2.has(o) || (o = Sn), o.getAnimatableNone ? o.getAnimatableNone(i) : void 0;
}
function M2(n) {
  for (let i = 1; i < n.length; i++)
    n[i] ?? (n[i] = n[i - 1]);
}
const mo = (n) => n * 180 / Math.PI, Sm = (n) => {
  const i = mo(Math.atan2(n[1], n[0]));
  return wm(i);
}, _2 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
  rotate: Sm,
  rotateZ: Sm,
  skewX: (n) => mo(Math.atan(n[1])),
  skewY: (n) => mo(Math.atan(n[2])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}, wm = (n) => (n = n % 360, n < 0 && (n += 360), n), Qb = Sm, $b = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]), Jb = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]), N2 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: $b,
  scaleY: Jb,
  scale: (n) => ($b(n) + Jb(n)) / 2,
  rotateX: (n) => wm(mo(Math.atan2(n[6], n[5]))),
  rotateY: (n) => wm(mo(Math.atan2(-n[2], n[0]))),
  rotateZ: Qb,
  rotate: Qb,
  skewX: (n) => mo(Math.atan(n[4])),
  skewY: (n) => mo(Math.atan(n[1])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function tl(n) {
  return n.includes("scale") ? 1 : 0;
}
function Tm(n, i) {
  if (!n || n === "none")
    return tl(i);
  const o = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, u;
  if (o)
    r = N2, u = o;
  else {
    const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = _2, u = h;
  }
  if (!u)
    return tl(i);
  const f = r[i], d = u[1].split(",").map(j2);
  return typeof f == "function" ? f(d) : d[f];
}
const z2 = (n, i) => {
  const { transform: o = "none" } = getComputedStyle(n);
  return Tm(o, i);
};
function j2(n) {
  return parseFloat(n.trim());
}
const Vs = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ca = /* @__PURE__ */ new Set([...Vs, "pathRotation"]), Wb = (n) => n === Ls || n === vt, L2 = /* @__PURE__ */ new Set(["x", "y", "z"]), V2 = Vs.filter((n) => !L2.has(n));
function B2(n) {
  const i = [];
  return V2.forEach((o) => {
    const r = n.getValue(o);
    if (r !== void 0) {
      const u = r.get(), f = o.startsWith("scale") ? 1 : 0;
      if (u === f)
        return;
      i.push([o, u]), r.set(f);
    }
  }), i;
}
const P2 = /* @__PURE__ */ new Set(["bottom", "right"]);
function tx(n, i, o, r, u, f) {
  const d = parseFloat(n);
  if (!isNaN(d))
    return d;
  const { min: h, max: g } = i()[o], p = g - h;
  return f === "border-box" ? p : p - parseFloat(r) - parseFloat(u);
}
const po = {
  // Dimensions
  width: ({ width: n, paddingLeft: i = "0", paddingRight: o = "0", boxSizing: r }, u) => tx(n, u, "x", i, o, r),
  height: ({ height: n, paddingTop: i = "0", paddingBottom: o = "0", boxSizing: r }, u) => tx(n, u, "y", i, o, r),
  top: ({ top: n }) => parseFloat(n),
  left: ({ left: n }) => parseFloat(n),
  bottom: ({ top: n }, i) => {
    const { y: o } = i();
    return parseFloat(n) + (o.max - o.min);
  },
  right: ({ left: n }, i) => {
    const { x: o } = i();
    return parseFloat(n) + (o.max - o.min);
  },
  // Transform
  x: ({ transform: n }) => Tm(n, "x"),
  y: ({ transform: n }) => Tm(n, "y")
};
po.translateX = po.x;
po.translateY = po.y;
const go = /* @__PURE__ */ new Set();
let Em = !1, Cm = !1, Am = !1;
function L1() {
  if (Cm) {
    const n = [], i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
    go.forEach((u) => {
      u.needsMeasurement && (n.push(u), i.add(u.element), P2.has(u.name) && o.add(u.element));
    });
    const r = /* @__PURE__ */ new Map();
    o.forEach((u) => {
      const f = B2(u);
      f.length && (r.set(u, f), u.render());
    }), n.forEach((u) => u.measureInitialState()), i.forEach((u) => {
      u.render();
      const f = r.get(u);
      f && f.forEach(([d, h]) => {
        u.getValue(d)?.set(h);
      });
    }), n.forEach((u) => u.measureEndState()), n.forEach((u) => {
      u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
    });
  }
  Cm = !1, Em = !1, go.forEach((n) => n.complete(Am)), go.clear();
}
function V1() {
  go.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (Cm = !0);
  });
}
function U2() {
  Am = !0, V1(), L1(), Am = !1;
}
function H2(n, i, o) {
  if (typeof n == "string") {
    if (fp(n) || dp(n))
      return parseFloat(n);
    if (!Sn.test(n) && Sn.test(o))
      return Ep(i, o);
  }
  return n ?? void 0;
}
class Cp {
  constructor(i, o, r, u, f, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = o, this.name = r, this.motionValue = u, this.element = f, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (go.add(this), Em || (Em = !0, Ft.read(V1), Ft.resolveKeyframes(L1))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: o, element: r, motionValue: u } = this;
    if (i[0] === null) {
      const f = u?.get(), d = i[i.length - 1];
      if (f !== void 0)
        i[0] = f;
      else if (r && o) {
        const h = H2(r.readValue(o, d), o, d);
        h !== void 0 && (i[0] = h);
      }
      i[0] === void 0 && (i[0] = d), u && f === void 0 && u.set(i[0]);
    }
    M2(i);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(i = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), go.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (go.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const k2 = (n) => n.startsWith("--");
function B1(n, i, o) {
  k2(i) ? n.style.setProperty(i, o) : n.style[i] = o;
}
const I2 = {};
function P1(n, i) {
  const o = /* @__PURE__ */ a1(n);
  return () => I2[i] ?? o();
}
const q2 = /* @__PURE__ */ P1(() => window.ScrollTimeline !== void 0, "scrollTimeline"), U1 = /* @__PURE__ */ P1(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Gr = ([n, i, o, r]) => `cubic-bezier(${n}, ${i}, ${o}, ${r})`, ex = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Gr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Gr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Gr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Gr([0.33, 1.53, 0.69, 0.99])
};
function H1(n, i) {
  if (n)
    return typeof n == "function" ? U1() ? C1(n, i) : "ease-out" : /* @__PURE__ */ m1(n) ? Gr(n) : Array.isArray(n) ? n.map((o) => H1(o, i) || ex.easeOut) : ex[n];
}
function G2(n, i, o, { delay: r = 0, duration: u = 300, repeat: f = 0, repeatType: d = "loop", ease: h = "easeOut", times: g } = {}, p = void 0) {
  const y = {
    [i]: o
  };
  g && (y.offset = g);
  const m = H1(h, u);
  Array.isArray(m) && (y.easing = m);
  const b = {
    delay: r,
    duration: u,
    easing: Array.isArray(m) ? "linear" : m,
    fill: "both",
    iterations: f + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return p && (b.pseudoElement = p), n.animate(y, b);
}
function k1(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function Y2({ type: n, ...i }) {
  return k1(n) && U1() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class I1 extends Lc {
  constructor(i) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !i)
      return;
    const { element: o, name: r, keyframes: u, pseudoElement: f, allowFlatten: d = !1, finalKeyframe: h, onComplete: g } = i;
    this.isPseudoElement = !!f, this.allowFlatten = d, this.options = i, zc(typeof i.type != "string");
    const p = Y2(i);
    this.animation = G2(o, r, u, p, f), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !f) {
        const y = jc(u, this.options, h, this.speed);
        this.updateMotionValue && this.updateMotionValue(y), B1(o, r, y), this.animation.cancel();
      }
      g?.(), this.notifyFinished();
    }, z1(this, i, p);
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const i = this.options?.element;
    !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ jn(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ jn(i);
  }
  get time() {
    return /* @__PURE__ */ jn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    const o = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ln(i), o && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), this.animation.playbackRate = i;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(i) {
    this.manualStartTime = this.animation.startTime = i;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: i, onAttach: o, observe: r }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, i && q2() ? (this.animation.timeline = i, o?.(this.animation), $n) : r(this);
  }
}
const q1 = {
  anticipate: f1,
  backInOut: c1,
  circInOut: h1
};
function F2(n) {
  return n in q1;
}
function X2(n) {
  typeof n.ease == "string" && F2(n.ease) && (n.ease = q1[n.ease]);
}
const kh = 10;
class K2 extends I1 {
  constructor(i) {
    X2(i), _1(i), super(i), i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime), this.options = i;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(i) {
    const { motionValue: o, onUpdate: r, onComplete: u, element: f, ...d } = this.options;
    if (!o)
      return;
    if (i !== void 0) {
      o.set(i);
      return;
    }
    const h = new bc({
      ...d,
      autoplay: !1
    }), g = Math.max(kh, ze.now() - this.startTime), p = Xi(0, kh, g - kh), y = h.sample(g).value, { name: m } = this.options;
    f && m && B1(f, m, y), o.setWithVelocity(h.sample(Math.max(0, g - p)).value, y, p), h.stop();
  }
}
const nx = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(Sn.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url("));
function Z2(n) {
  const i = n[0];
  if (n.length === 1)
    return !0;
  for (let o = 0; o < n.length; o++)
    if (n[o] !== i)
      return !0;
}
function Q2(n, i, o, r) {
  const u = n[0];
  if (u === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const f = n[n.length - 1], d = nx(u, i), h = nx(f, i);
  return !d || !h ? !1 : Z2(n) || (o === "spring" || k1(o)) && r;
}
function Rm(n) {
  n.duration = 0, n.type = "keyframes";
}
const Dm = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), $2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function J2(n) {
  for (let i = 0; i < n.length; i++)
    if (typeof n[i] == "string" && $2.test(n[i]))
      return !0;
  return !1;
}
const ix = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), W2 = /* @__PURE__ */ a1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function tO(n) {
  const { motionValue: i, name: o, repeatDelay: r, repeatType: u, damping: f, type: d, keyframes: h } = n;
  if (!o || !(Dm.has(o) || ix.has(o)))
    return !1;
  const g = i?.owner?.current;
  if (!(g instanceof HTMLElement) && !(g instanceof SVGElement))
    return !1;
  const { onUpdate: p, transformTemplate: y } = i.owner.getProps();
  return W2() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Dm.has(o) || ix.has(o) && J2(h)) && (o !== "transform" || !y) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !p && !r && u !== "mirror" && f !== 0 && d !== "inertia";
}
class eO extends Lc {
  constructor(i) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = ze.now();
    const { keyframes: o, name: r, motionValue: u, element: f } = i, d = i;
    d.autoplay ?? (d.autoplay = !0), d.delay ?? (d.delay = 0), d.type ?? (d.type = "keyframes"), d.repeat ?? (d.repeat = 0), d.repeatDelay ?? (d.repeatDelay = 0), d.repeatType ?? (d.repeatType = "loop");
    const h = f?.KeyframeResolver || Cp;
    this.keyframeResolver = new h(o, (g, p, y) => this.onKeyframesResolved(g, p, d, !y), r, u, f), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, o, r, u) {
    this.keyframeResolver = void 0;
    const { name: f, type: d, velocity: h, delay: g, isHandoff: p, onUpdate: y } = r;
    this.resolvedAt = ze.now();
    let m = !0;
    Q2(i, f, d, h) || (m = !1, (bi.instantAnimations || !g) && y?.(jc(i, r, o)), i[0] = i[i.length - 1], Rm(r), r.repeat = 0);
    const { onComplete: b } = r;
    r.finalKeyframe = o, r.keyframes = i, r.onComplete = () => {
      b?.(), this.notifyFinished();
    };
    const E = m && !p && tO(r);
    u && (E || this.resolvedAt !== this.createdAt) && (r.startTime ?? (r.startTime = Tp(this.createdAt, this.resolvedAt)));
    let T;
    if (E) {
      r.element = r.motionValue?.owner?.current;
      try {
        T = new K2(r);
      } catch {
        T = new bc(r);
      }
    } else
      T = new bc(r);
    this.pendingTimeline && (this.stopTimeline = T.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = T;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(i, o) {
    return this.finished.finally(i).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), U2()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function G1(n, i, o, r = 0, u = 1) {
  const f = Array.from(n).sort((p, y) => p.sortNodePosition(y)).indexOf(i), d = n.size, h = (d - 1) * r;
  return typeof o == "function" ? o(f, d) : u === 1 ? f * r : h - f * r;
}
const ax = 30, nO = (n) => !isNaN(parseFloat(n)), Xr = {
  current: void 0
};
class iO {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(i, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const u = ze.now();
      if (this.updatedAt !== u && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.notifyChange(), this.dependents))
        for (const f of this.dependents)
          f.dirty();
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = o.owner;
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = ze.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = nO(this.current));
  }
  setPrevFrameValue(i = this.current) {
    this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(i) {
    return this.on("change", i);
  }
  on(i, o) {
    var r;
    return i === "change" ? this.onChangeSubscribe(o) : ((r = this.events)[i] || (r[i] = new vc())).add(o);
  }
  onChangeSubscribe(i) {
    const { events: o } = this;
    return !o.change && !this.changeSubscriber ? this.changeSubscriber = i : (o.change || (o.change = new vc(), o.change.add(this.changeSubscriber), this.changeSubscriber = void 0), o.change.add(i)), () => {
      this.changeSubscriber === i ? this.changeSubscriber = void 0 : o.change?.remove(i), this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    Ft.read(() => {
      !this.changeSubscriber && !this.events.change?.getSize() && this.stop();
    });
  }
  clearListeners() {
    this.changeSubscriber = void 0;
    for (const i in this.events)
      this.events[i].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(i, o) {
    this.passiveEffect = i, this.stopPassiveEffect = o;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(i) {
    this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i);
  }
  setWithVelocity(i, o, r) {
    this.set(o), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(i, o = !0) {
    this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.notifyChange();
  }
  notifyChange() {
    const { current: i, changeSubscriber: o } = this;
    o ? o(i) : this.events.change?.notify(i);
  }
  addDependent(i) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(i);
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return Xr.current && Xr.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const i = ze.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > ax)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, ax);
    return /* @__PURE__ */ o1(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(i) {
    return this.stop(), new Promise((o) => {
      this.hasAnimated = !0;
      let r = !1, u;
      u = i(() => {
        r = !0, this.events.animationComplete?.notify(), this.animation === u && this.clearAnimation(), o();
      }), r || (this.animation = u), this.events.animationStart?.notify();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    this.animation = void 0;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Da(n, i) {
  return new iO(n, i);
}
function Ap(n, i) {
  if (n?.inherit && i) {
    const { inherit: o, ...r } = n;
    return { ...i, ...r };
  }
  return n;
}
function Rp(n, i) {
  const o = n?.[i] ?? n?.default ?? n;
  return o !== n ? Ap(o, n) : o;
}
const aO = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, oO = (n) => ({
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), sO = {
  type: "keyframes",
  duration: 0.8
}, rO = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, lO = (n, { keyframes: i }) => i.length > 2 ? sO : Ca.has(n) ? n.startsWith("scale") ? oO(i[1]) : aO : rO, uO = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function cO(n) {
  for (const i in n)
    if (!uO.has(i))
      return !0;
  return !1;
}
const Dp = (n, i, o, r = {}, u, f) => (d) => {
  const h = Rp(r, n) || {}, g = h.delay || r.delay || 0;
  let { elapsed: p = 0 } = r;
  p = p - /* @__PURE__ */ Ln(g);
  const y = {
    keyframes: Array.isArray(o) ? o : [null, o],
    ease: "easeOut",
    velocity: i.getVelocity(),
    ...h,
    delay: -p,
    onUpdate: (b) => {
      i.set(b), h.onUpdate && h.onUpdate(b);
    },
    onComplete: () => {
      d(), h.onComplete && h.onComplete();
    },
    name: n,
    motionValue: i,
    element: f ? void 0 : u
  };
  cO(h) || Object.assign(y, lO(n, y)), y.duration && (y.duration = /* @__PURE__ */ Ln(y.duration)), y.repeatDelay && (y.repeatDelay = /* @__PURE__ */ Ln(y.repeatDelay)), y.from !== void 0 && (y.keyframes[0] = y.from);
  let m = !1;
  if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (Rm(y), y.delay === 0 && (m = !0)), (bi.instantAnimations || bi.skipAnimations || u?.shouldSkipAnimations || h.skipAnimations) && (m = !0, Rm(y), y.delay = 0), y.allowFlatten = !h.type && !h.ease, m && !f && i.get() !== void 0) {
    const b = jc(y.keyframes, h);
    if (b !== void 0) {
      Ft.update(() => {
        y.onUpdate(b), y.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new bc(y) : new eO(y);
}, fO = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function dO(n) {
  const i = fO.exec(n);
  if (!i)
    return [,];
  const [, o, r, u] = i;
  return [`--${o ?? r}`, u];
}
function Y1(n, i, o = 1) {
  const [r, u] = dO(n);
  if (!r)
    return;
  const f = window.getComputedStyle(i).getPropertyValue(r);
  if (f) {
    const d = f.trim();
    return fp(d) ? parseFloat(d) : d;
  }
  return gp(u) ? Y1(u, i, o + 1) : u;
}
function hO(n) {
  const i = [{}, {}];
  return n?.values.forEach((o, r) => {
    i[0][r] = o.get(), i[1][r] = o.getVelocity();
  }), i;
}
function F1(n, i, o, r) {
  const u = (f) => typeof f == "function" ? f(o !== void 0 ? o : n.custom, ...hO(r)) : f;
  return i = u(i), typeof i == "string" && (i = n.variants && n.variants[i]), u(i);
}
function vo(n, i, o) {
  return F1(n.getProps(), i, o, n);
}
const X1 = (n, i) => i === "exit" ? n.presenceContext?.custom : void 0, K1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Vs
]), mO = (n) => Array.isArray(n);
function pO(n, i, o) {
  n.hasValue(i) ? n.getValue(i).set(o) : n.addValue(i, Da(o));
}
function gO(n) {
  return mO(n) ? n[n.length - 1] || 0 : n;
}
function vO(n, i) {
  const o = vo(n, i);
  let { transitionEnd: r = {}, transition: u = {}, ...f } = o || {};
  f = { ...f, ...r };
  for (const d in f) {
    const h = gO(f[d]);
    pO(n, d, h);
  }
}
const Ce = (n) => !!(n && n.getVelocity);
function yO(n) {
  return !!(Ce(n) && n.add);
}
function Om(n, i) {
  const o = n.getValue("willChange");
  if (yO(o))
    return o.add(i);
  if (!o && bi.WillChange) {
    const r = new bi.WillChange("auto");
    n.addValue("willChange", r), r.add(i);
  }
}
function Op(n) {
  return n.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const bO = "framerAppearId", Z1 = "data-" + Op(bO);
function Q1(n) {
  return n.props[Z1];
}
const xO = typeof window < "u";
function SO({ protectedKeys: n, needsAnimating: i }, o) {
  const r = o in n && !i[o];
  return i[o] = !1, r;
}
function $1(n, i, { delay: o = 0, transitionOverride: r, type: u } = {}) {
  let { transition: f, transitionEnd: d, ...h } = i;
  const g = n.getDefaultTransition();
  f = f ? Ap(f, g) : g;
  const p = f?.reduceMotion, y = f?.skipAnimations;
  r && (f = r);
  const m = [], b = u && n.animationState?.getState()[u], E = f?.path;
  E && E.animateVisualElement(n, h, f, o, m);
  for (const T in h) {
    const R = n.getValue(T, n.latestValues[T] ?? null), C = h[T];
    if (C === void 0 || b && SO(b, T))
      continue;
    const A = {
      delay: o,
      ...Rp(f || {}, T)
    };
    y && (A.skipAnimations = !0);
    const _ = R.get();
    if (_ !== void 0 && !R.isAnimating() && !Array.isArray(C) && C === _ && !A.velocity) {
      Ft.update(() => R.set(C));
      continue;
    }
    let D = !1;
    if (xO && window.MotionHandoffAnimation) {
      const I = Q1(n);
      if (I) {
        const j = window.MotionHandoffAnimation(I, T, Ft);
        j !== null && (A.startTime = j, D = !0);
      }
    }
    Om(n, T);
    const M = p ?? n.shouldReduceMotion;
    R.start(Dp(T, R, C, M && K1.has(T) ? { type: !1 } : A, n, D));
    const H = R.animation;
    H && m.push(H);
  }
  if (d) {
    const T = () => Ft.update(() => {
      d && vO(n, d);
    });
    m.length ? Promise.all(m).then(T) : T();
  }
  return m;
}
function Mm(n, i, o = {}) {
  const r = vo(n, i, X1(n, o.type)), u = o.transitionOverride || (r?.transition ?? (n.getDefaultTransition() || {})), f = () => Promise.all(r ? $1(n, r, o) : []), d = (g = 0) => {
    const { variantChildren: p } = n, { delayChildren: y = 0, staggerChildren: m, staggerDirection: b } = u, E = [];
    return p?.forEach((T) => {
      T.notify("AnimationStart", i), E.push(Mm(T, i, {
        ...o,
        delay: g + (typeof y == "function" ? 0 : y) + G1(p, T, y, m, b)
      }).then(() => T.notify("AnimationComplete", i)));
    }), Promise.all(E);
  }, { when: h } = u;
  return h ? h === "beforeChildren" ? f().then(() => d()) : d().then(f) : Promise.all([f(), d(o.delay)]);
}
function wO(n, i, o = {}) {
  return n.notify("AnimationStart", i), (Array.isArray(i) ? Promise.all(i.map((u) => Mm(n, u, o))) : typeof i == "string" ? Mm(n, i, o) : Promise.all($1(n, vo(n, i, o.custom), o))).then(() => {
    n.notify("AnimationComplete", i);
  });
}
const TO = {
  test: (n) => n === "auto",
  parse: (n) => n
}, EO = (n) => (i) => i.test(n), CO = [Ls, vt, yi, Hi, PD, BD, TO], ox = (n) => CO.find(EO(n));
function AO(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || dp(n) : !0;
}
const RO = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function DO(n, i, o) {
  let r = 0, u;
  for (; r < n.length && !u; ) {
    const f = n[r];
    typeof f == "string" && !RO.has(f) && GD(f) && (u = n[r]), r++;
  }
  if (u && o)
    for (const f of i)
      n[f] !== u && (n[f] = Ep(o, u));
}
class OO extends Cp {
  constructor(i, o, r, u, f) {
    super(i, o, r, u, f, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: o, name: r } = this;
    if (!o || !o.current)
      return;
    super.readKeyframes();
    for (let y = 0; y < i.length; y++) {
      let m = i[y];
      if (typeof m == "string" && (m = m.trim(), gp(m))) {
        const b = Y1(m, o.current);
        b !== void 0 && (i[y] = b), y === i.length - 1 && (this.finalKeyframe = m);
      }
    }
    if (this.resolveNoneKeyframes(), !K1.has(r) || i.length !== 2)
      return;
    const [u, f] = i;
    if (typeof u == "number" && typeof f == "number")
      return;
    const d = ox(u), h = ox(f), g = qb(u), p = qb(f);
    if (g !== p && po[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== h)
      if (Wb(d) && Wb(h))
        for (let y = 0; y < i.length; y++) {
          const m = i[y];
          typeof m == "string" && (i[y] = parseFloat(m));
        }
      else po[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: o } = this, r = [];
    for (let u = 0; u < i.length; u++)
      (i[u] === null || AO(i[u])) && r.push(u);
    r.length && DO(i, r, o);
  }
  measure() {
    const { element: i, name: o } = this;
    return po[o](window.getComputedStyle(i.current), () => i.measureViewportBox());
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: o, name: r } = this;
    if (!i || !i.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), o[0] = this.measuredOrigin;
    const u = o[o.length - 1];
    u !== void 0 && this.motionValue?.jump(u, !1);
  }
  measureEndState() {
    const { element: i, unresolvedKeyframes: o } = this;
    if (!i || !i.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, !1);
    const r = o.length - 1, u = o[r];
    o[r] = this.measure(), u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u), this.removedTransforms?.length && this.removedTransforms.forEach(([f, d]) => {
      i.getValue(f).set(d);
    }), this.resolveNoneKeyframes();
  }
}
const Mp = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function MO(n) {
  return i1(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
function _p(n) {
  return i1(n) && "ownerSVGElement" in n;
}
const _m = (n, i) => i && typeof n == "number" ? i.transform(n) : n;
function J1(n, i, o) {
  if (n == null)
    return [];
  if (n instanceof EventTarget)
    return [n];
  if (typeof n == "string") {
    let r = document;
    const u = o?.[n] ?? r.querySelectorAll(n);
    return u ? Array.from(u) : [];
  }
  return Array.from(n).filter((r) => r != null);
}
const _O = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, NO = Vs.length;
function zO(n, i, o) {
  let r = "", u = !0;
  for (let d = 0; d < NO; d++) {
    const h = Vs[d], g = n[h];
    if (g === void 0)
      continue;
    let p = !0;
    if (typeof g == "number")
      p = g === (h.startsWith("scale") ? 1 : 0);
    else {
      const y = parseFloat(g);
      p = h.startsWith("scale") ? y === 1 : y === 0;
    }
    if (!p || o) {
      const y = _m(g, xc[h]);
      if (!p) {
        u = !1;
        const m = _O[h] || h;
        r += `${m}(${y}) `;
      }
      o && (i[h] = y);
    }
  }
  const f = n.pathRotation;
  return f && (u = !1, r += `rotate(${_m(f, xc.pathRotation)}) `), r = r.trim(), o ? r = o(i, u ? "" : r) : u && (r = "none"), r;
}
function Np(n, i, o) {
  const { style: r, vars: u, transformOrigin: f } = n;
  let d = !1, h = !1;
  for (const g in i) {
    const p = i[g];
    if (Ca.has(g)) {
      d = !0;
      continue;
    } else if (g1(g)) {
      u[g] = p;
      continue;
    } else {
      const y = _m(p, xc[g]);
      g.startsWith("origin") ? (h = !0, f[g] = y) : r[g] = y;
    }
  }
  if (i.transform || (d || o ? r.transform = zO(i, n.transform, o) : r.transform && (r.transform = "none")), h) {
    const { originX: g = "50%", originY: p = "50%", originZ: y = 0 } = f;
    r.transformOrigin = `${g} ${p} ${y}`;
  }
}
const jO = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, LO = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function VO(n, i, o = 1, r = 0, u = !0) {
  n.pathLength = 1;
  const f = u ? jO : LO;
  n[f.offset] = `${-r}`, n[f.array] = `${i} ${o}`;
}
const W1 = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function tw(n, {
  attrX: i,
  attrY: o,
  attrScale: r,
  pathLength: u,
  pathSpacing: f = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, g, p, y) {
  if (Np(n, h, p), g) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  n.attrs = n.style, n.style = {};
  const { attrs: m, style: b } = n;
  for (const E of W1)
    m[E] !== void 0 && (b[E] = m[E], delete m[E]);
  (b.transform || m.transformOrigin) && (b.transformOrigin = m.transformOrigin ?? "50% 50%", delete m.transformOrigin), b.transform && (b.transformBox = y?.transformBox ?? "fill-box", delete m.transformBox), i !== void 0 && (m.x = i), o !== void 0 && (m.y = o), r !== void 0 && (m.scale = r), u !== void 0 && VO(m, u, f, d, !1);
}
function ew({ top: n, left: i, right: o, bottom: r }) {
  return {
    x: { min: i, max: o },
    y: { min: n, max: r }
  };
}
function BO({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function PO(n, i) {
  if (!i)
    return n;
  const o = i({ x: n.left, y: n.top }), r = i({ x: n.right, y: n.bottom });
  return {
    top: o.y,
    left: o.x,
    bottom: r.y,
    right: r.x
  };
}
function Ih(n) {
  return n === void 0 || n === 1;
}
function Nm({ scale: n, scaleX: i, scaleY: o }) {
  return !Ih(n) || !Ih(i) || !Ih(o);
}
function fo(n) {
  return Nm(n) || nw(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function nw(n) {
  return sx(n.x) || sx(n.y);
}
function sx(n) {
  return n && n !== "0%";
}
function Sc(n, i, o) {
  const r = n - o, u = i * r;
  return o + u;
}
function rx(n, i, o, r, u) {
  return u !== void 0 && (n = Sc(n, u, r)), Sc(n, o, r) + i;
}
function zm(n, i = 0, o = 1, r, u) {
  n.min = rx(n.min, i, o, r, u), n.max = rx(n.max, i, o, r, u);
}
function iw(n, { x: i, y: o }) {
  zm(n.x, i.translate, i.scale, i.originPoint), zm(n.y, o.translate, o.scale, o.originPoint);
}
const lx = 0.999999999999, ux = 1.0000000000001;
function UO(n, i, o, r = !1) {
  const u = o.length;
  if (!u)
    return;
  i.x = i.y = 1;
  let f, d;
  for (let h = 0; h < u; h++) {
    f = o[h], d = f.projectionDelta;
    const { visualElement: g } = f.options;
    g && g.props.style && g.props.style.display === "contents" || (r && f.options.layoutScroll && f.scroll && f !== f.root && (Qn(n.x, -f.scroll.offset.x), Qn(n.y, -f.scroll.offset.y)), d && (i.x *= d.x.scale, i.y *= d.y.scale, iw(n, d)), r && fo(f.latestValues) && ac(n, f.latestValues, f.layout?.layoutBox));
  }
  i.x < ux && i.x > lx && (i.x = 1), i.y < ux && i.y > lx && (i.y = 1);
}
function Qn(n, i) {
  n.min += i, n.max += i;
}
function cx(n, i, o, r, u = 0.5) {
  const f = Zt(n.min, n.max, u);
  zm(n, i, o, f, r);
}
function fx(n, i) {
  return typeof n == "string" ? parseFloat(n) / 100 * (i.max - i.min) : n;
}
function ac(n, i, o) {
  const r = o ?? n;
  cx(n.x, fx(i.x, r.x), i.scaleX, i.scale, i.originX), cx(n.y, fx(i.y, r.y), i.scaleY, i.scale, i.originY);
}
function aw(n, i) {
  return ew(PO(n.getBoundingClientRect(), i));
}
function HO(n, i, o) {
  const r = aw(n, o), { scroll: u } = i;
  return u && (Qn(r.x, u.offset.x), Qn(r.y, u.offset.y)), r;
}
const { schedule: zp } = /* @__PURE__ */ E1(queueMicrotask, !1), Fn = {
  x: !1,
  y: !1
};
function ow() {
  return Fn.x || Fn.y;
}
function kO(n) {
  return n === "x" || n === "y" ? Fn[n] ? null : (Fn[n] = !0, () => {
    Fn[n] = !1;
  }) : Fn.x || Fn.y ? null : (Fn.x = Fn.y = !0, () => {
    Fn.x = Fn.y = !1;
  });
}
function sw(n, i) {
  const o = J1(n), r = new AbortController(), u = {
    passive: !0,
    ...i,
    signal: r.signal
  };
  return [o, u, () => r.abort()];
}
function IO(n) {
  return !(n.pointerType === "touch" || ow());
}
function qO(n, i, o = {}) {
  const [r, u, f] = sw(n, o);
  return r.forEach((d) => {
    let h = !1, g = !1, p;
    const y = () => {
      d.removeEventListener("pointerleave", T);
    }, m = (C) => {
      p && (p(C), p = void 0), y();
    }, b = (C) => {
      h = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), g && (g = !1, m(C));
    }, E = () => {
      h = !0, window.addEventListener("pointerup", b, u), window.addEventListener("pointercancel", b, u);
    }, T = (C) => {
      if (C.pointerType !== "touch") {
        if (h) {
          g = !0;
          return;
        }
        m(C);
      }
    }, R = (C) => {
      if (!IO(C))
        return;
      g = !1;
      const A = i(d, C);
      typeof A == "function" && (p = A, d.addEventListener("pointerleave", T, u));
    };
    d.addEventListener("pointerenter", R, u), d.addEventListener("pointerdown", E, u);
  }), f;
}
const rw = (n, i) => i ? n === i ? !0 : rw(n, i.parentElement) : !1, jp = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, GO = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function YO(n) {
  return GO.has(n.tagName) || n.isContentEditable === !0;
}
const FO = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function XO(n) {
  return FO.has(n.tagName) || n.isContentEditable === !0;
}
const oc = /* @__PURE__ */ new WeakSet();
function dx(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function qh(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const KO = (n, i) => {
  const o = n.currentTarget;
  if (!o)
    return;
  const r = dx(() => {
    if (oc.has(o))
      return;
    qh(o, "down");
    const u = dx(() => {
      qh(o, "up");
    }), f = () => qh(o, "cancel");
    o.addEventListener("keyup", u, i), o.addEventListener("blur", f, i);
  });
  o.addEventListener("keydown", r, i), o.addEventListener("blur", () => o.removeEventListener("keydown", r), i);
};
function hx(n) {
  return jp(n) && !ow();
}
const mx = /* @__PURE__ */ new WeakSet();
function ZO(n, i, o = {}) {
  const [r, u, f] = sw(n, o), d = (h) => {
    const g = h.currentTarget;
    if (!hx(h) || mx.has(h))
      return;
    oc.add(g), o.stopPropagation && mx.add(h);
    const p = i(g, h), y = { ...u, capture: !0 }, m = (T, R) => {
      window.removeEventListener("pointerup", b, y), window.removeEventListener("pointercancel", E, y), oc.has(g) && oc.delete(g), hx(T) && typeof p == "function" && p(T, { success: R });
    }, b = (T) => {
      m(T, g === window || g === document || o.useGlobalTarget || rw(g, T.target));
    }, E = (T) => {
      m(T, !1);
    };
    window.addEventListener("pointerup", b, y), window.addEventListener("pointercancel", E, y);
  };
  return r.forEach((h) => {
    (o.useGlobalTarget ? window : h).addEventListener("pointerdown", d, u), MO(h) && (h.addEventListener("focus", (p) => KO(p, u)), !YO(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), f;
}
const sc = /* @__PURE__ */ new WeakMap();
let rc;
const lw = (n, i, o) => (r, u) => u && u[0] ? u[0][n + "Size"] : _p(r) && "getBBox" in r ? r.getBBox()[i] : r[o], QO = /* @__PURE__ */ lw("inline", "width", "offsetWidth"), $O = /* @__PURE__ */ lw("block", "height", "offsetHeight");
function JO({ target: n, borderBoxSize: i }) {
  sc.get(n)?.forEach((o) => {
    o(n, {
      get width() {
        return QO(n, i);
      },
      get height() {
        return $O(n, i);
      }
    });
  });
}
function WO(n) {
  n.forEach(JO);
}
function tM() {
  typeof ResizeObserver > "u" || (rc = new ResizeObserver(WO));
}
function eM(n, i) {
  rc || tM();
  const o = J1(n);
  return o.forEach((r) => {
    let u = sc.get(r);
    u || (u = /* @__PURE__ */ new Set(), sc.set(r, u)), u.add(i), rc?.observe(r);
  }), () => {
    o.forEach((r) => {
      const u = sc.get(r);
      u?.delete(i), u?.size || rc?.unobserve(r);
    });
  };
}
const lc = /* @__PURE__ */ new Set();
let Cs;
function nM() {
  Cs = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    lc.forEach((i) => i(n));
  }, window.addEventListener("resize", Cs);
}
function iM(n) {
  return lc.add(n), Cs || nM(), () => {
    lc.delete(n), !lc.size && typeof Cs == "function" && (window.removeEventListener("resize", Cs), Cs = void 0);
  };
}
function px(n, i) {
  return typeof n == "function" ? iM(n) : eM(n, i);
}
function aM(n) {
  return _p(n) && n.tagName === "svg";
}
function oM(...n) {
  const i = !Array.isArray(n[0]), o = i ? 0 : -1, r = n[0 + o], u = n[1 + o], f = n[2 + o], d = n[3 + o], h = O1(u, f, d);
  return i ? h(r) : h;
}
const Yr = /* @__PURE__ */ new Set(), gx = ({ timestamp: n }) => {
  Yr.forEach((i) => i.tick(n));
};
class sM extends Lc {
  constructor(i) {
    super(), this.state = "idle", this.startTime = 0, this.currentTime = 0, this.started = !1, this.hasNextTarget = !1, this.nextTarget = 0, this.stop = () => {
      this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.factory = i.type, this.generator = this.factory(i);
    const { driver: o } = i;
    o && (this.driver = o((r) => this.tick(r))), this.startTime = this.now(), this.state = "running", this.driver ? this.driver.start() : (Yr.size || Ft.update(gx, !0), Yr.add(this));
  }
  /**
   * Aim at a new target from wherever the animation has reached by the
   * next tick. `velocity` fixes the velocity to steer with, otherwise
   * the generator's is used.
   */
  setTarget(i, o) {
    this.nextTarget = i, this.nextVelocity = o, this.hasNextTarget = !0;
  }
  /**
   * Steer towards new keyframes from the current position and velocity.
   * Springs are updated in place; other generators are recreated.
   */
  retarget(i, o) {
    const { options: r, generator: u } = this;
    r.keyframes = i, r.velocity = o, this.startTime = this.now(), this.currentTime = 0, u.retarget ? u.retarget(i, o) : this.generator = this.factory(r);
  }
  tick(i) {
    const { options: o, hasNextTarget: r } = this, { delay: u = 0, onUpdate: f, onPlay: d } = o;
    this.started || (this.startTime = Tp(this.startTime, i));
    const h = Math.round(i - this.startTime) - u, g = this.currentTime = Math.max(0, h), p = this.generator.next(g), y = h < 0 ? o.keyframes[0] : p.value;
    if (r) {
      this.hasNextTarget = !1;
      const { keyframes: m } = o;
      m[0] = y, m[1] = this.nextTarget, this.retarget(m, this.nextVelocity ?? this.getGeneratorVelocity());
    }
    (r || !this.started) && (this.started = !0, d?.()), this.state === "running" && (f?.(y), p.done && h >= 0 && !r && !this.hasNextTarget && this.state === "running" && (this.notifyFinished(), this.teardown(), this.state = "finished", o.onComplete?.()));
  }
  getGeneratorVelocity() {
    return M1(this.generator, this.currentTime, this.options.velocity);
  }
  now() {
    return this.driver ? this.driver.now() : ze.now();
  }
  teardown() {
    this.state = "idle", this.driver ? this.driver.stop() : (Yr.delete(this), Yr.size || xi(gx));
  }
}
const wc = (n) => typeof n == "number" ? n : parseFloat(n);
function rM(n, i, o) {
  const r = n.get();
  let u = null, f;
  const d = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, h = (y) => f(d ? y + d : y), g = () => n.events.animationStart?.notify(), p = () => {
    u && (u.stop(), u = null), n.animation = void 0;
  };
  if (n.attach((y, m) => {
    f = m;
    const b = wc(y);
    if (u?.state === "running") {
      u.setTarget(b, o.velocity);
      return;
    }
    const E = wc(n.get()), T = u ? u.getGeneratorVelocity() : n.getVelocity();
    if (p(), E === b)
      return;
    const R = {
      keyframes: [E, b],
      velocity: T,
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...o,
      onUpdate: h
    }, C = u = new sM({
      ...R,
      onPlay: g
    });
    n.animation = C, C.then(() => {
      u === C && (u = null, n.animation = void 0, n.events.animationComplete?.notify());
    });
  }, p), Ce(i)) {
    let y = o.skipInitialAnimation === !0;
    const m = i.on("change", (E) => {
      y ? (y = !1, n.jump(vx(E, d), !1)) : n.set(vx(E, d));
    }), b = n.on("destroy", m);
    return () => {
      m(), b();
    };
  }
  return p;
}
function vx(n, i) {
  return i ? n + i : n;
}
function lM(n, i, o) {
  return rM(n, i, { ...o, type: Wr });
}
const yx = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), As = () => ({
  x: yx(),
  y: yx()
}), bx = () => ({ min: 0, max: 0 }), we = () => ({
  x: bx(),
  y: bx()
}), uM = /* @__PURE__ */ new WeakMap();
function Vc(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function el(n) {
  return typeof n == "string" || Array.isArray(n);
}
const Lp = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], xx = ["initial", ...Lp];
function Bc(n) {
  if (Vc(n.animate))
    return !0;
  for (let i = 0; i < xx.length; i++)
    if (el(n[xx[i]]))
      return !0;
  return !1;
}
function uw(n) {
  return !!(Bc(n) || n.variants);
}
function cM(n, i, o) {
  for (const r in i) {
    const u = i[r], f = o[r];
    if (Ce(u))
      n.addValue(r, u);
    else if (Ce(f))
      n.addValue(r, Da(u, { owner: n }));
    else if (f !== u)
      if (n.hasValue(r)) {
        const d = n.getValue(r);
        d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u);
      } else {
        const d = n.getStaticValue(r);
        n.addValue(r, Da(d !== void 0 ? d : u, { owner: n }));
      }
  }
  for (const r in o)
    i[r] === void 0 && n.removeValue(r);
  return i;
}
const Tc = { current: null }, Vp = { current: !1 }, fM = typeof window < "u";
function cw() {
  if (Vp.current = !0, !!fM)
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"), i = () => Tc.current = n.matches;
      n.addEventListener("change", i), i();
    } else
      Tc.current = !1;
}
const Sx = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Ec = {};
function fw(n) {
  Ec = n;
}
function dM() {
  return Ec;
}
class hM {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(i, o, r) {
    return {};
  }
  constructor({ parent: i, props: o, presenceContext: r, reducedMotionConfig: u, skipAnimations: f, blockInitialAnimation: d, visualState: h }, g = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Cp, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const E = ze.now();
      this.renderScheduledAt < E && (this.renderScheduledAt = E, Ft.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: y } = h;
    this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = o.initial ? { ...p } : {}, this.renderState = y, this.parent = i, this.props = o, this.presenceContext = r, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = u, this.skipAnimationsConfig = f, this.options = g, this.blockInitialAnimation = !!d, this.isControllingVariants = Bc(o), this.isVariantNode = uw(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: m, ...b } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const E in b) {
      const T = b[E];
      p[E] !== void 0 && Ce(T) && T.set(p[E]);
    }
  }
  mount(i) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        this.values.get(o)?.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    if (this.current = i, uM.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.isVariantNode && !this.isControllingVariants) {
      let o = this;
      do
        o = o.props.inherit !== !1 && o.parent;
      while (o && !o.isVariantNode);
      if (o) {
        const { variantChildren: r } = o;
        r.add(this), this.removeFromVariantTree = () => r.delete(this);
      }
    }
    this.values.forEach((o, r) => this.bindToMotionValue(r, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Vp.current || cw(), this.shouldReduceMotion = Tc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), xi(this.notifyUpdate), xi(this.render), this.valueSubscriptions.forEach((i) => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const i in this.events)
      this.events[i].clear();
    for (const i in this.features) {
      const o = this.features[i];
      o && (o.unmount(), o.isMounted = !1);
    }
    this.current = null;
  }
  addChild(i) {
    this.children.add(i), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(i);
  }
  removeChild(i) {
    this.children.delete(i), this.enteringChildren && this.enteringChildren.delete(i);
  }
  bindToMotionValue(i, o) {
    if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(), o.accelerate && Dm.has(i) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: h, times: g, ease: p, duration: y } = o.accelerate, m = new I1({
        element: this.current,
        name: i,
        keyframes: h,
        times: g,
        ease: p,
        duration: /* @__PURE__ */ Ln(y)
      }), b = d(m);
      this.valueSubscriptions.set(i, () => {
        b(), m.cancel();
      });
      return;
    }
    const r = Ca.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const u = o.on("change", (d) => {
      this.latestValues[i] = d, this.props.onUpdate && Ft.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let f;
    typeof window < "u" && window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, o)), this.valueSubscriptions.set(i, () => {
      u(), f && f();
    });
  }
  sortNodePosition(i) {
    return !this.current || !i.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in Ec) {
      const o = Ec[i];
      if (!o)
        continue;
      const { isEnabled: r, Feature: u } = o;
      if (!this.features[i] && u && r(this.props) && (this.features[i] = new u(this)), this.features[i]) {
        const f = this.features[i];
        f.isMounted ? f.update() : (f.mount(), f.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : we();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, o) {
    this.latestValues[i] = o;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(i, o) {
    (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let r = 0; r < Sx.length; r++) {
      const u = Sx[r];
      this.propEventSubscriptions[u] && (this.propEventSubscriptions[u](), delete this.propEventSubscriptions[u]);
      const f = "on" + u, d = i[f];
      d && (this.propEventSubscriptions[u] = this.on(u, d));
    }
    this.prevMotionValues = cM(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(i, o) {
    const r = this.values.get(i);
    if (o !== r) {
      r && this.removeValue(i), this.bindToMotionValue(i, o), this.values.set(i, o);
      const u = o.get();
      u !== void 0 && (this.latestValues[i] = u);
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(i) {
    this.values.delete(i);
    const o = this.valueSubscriptions.get(i);
    o && (o(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, o) {
    if (this.props.values && this.props.values[i])
      return this.props.values[i];
    let r = this.values.get(i);
    return r === void 0 && o !== void 0 && (r = Da(o ?? this.getDefaultValue?.(i), {
      owner: this
    }), this.addValue(i, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(i, o) {
    let r = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return r != null && (typeof r == "string" && (fp(r) || dp(r)) ? r = parseFloat(r) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof r != "number" && !Sn.test(r) && Sn.test(o) && (r = Ep(i, o))
    ), this.setBaseTarget(i, Ce(r) ? r.get() : r)), Ce(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(i, o) {
    this.baseTarget[i] = o;
  }
  on(i, o) {
    return this.events[i] || (this.events[i] = new vc()), this.events[i].add(o);
  }
  notify(i, ...o) {
    this.events[i] && this.events[i].notify(...o);
  }
  scheduleRenderMicrotask() {
    zp.render(this.render);
  }
}
class dw extends hM {
  constructor() {
    super(...arguments), this.KeyframeResolver = OO;
  }
  sortInstanceNodePosition(i, o) {
    return i.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, o) {
    const r = i.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(i, { vars: o, style: r }) {
    delete o[i], delete r[i];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    Ce(i) && (this.childSubscription = i.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
    }));
  }
}
class _a {
  constructor(i) {
    this.isMounted = !1, this.node = i;
  }
  update() {
  }
}
function hw(n, { style: i, vars: o }, r, u) {
  const f = n.style;
  let d;
  for (d in i)
    f[d] = i[d];
  u?.applyProjectionStyles(f, r);
  for (d in o)
    f.setProperty(d, o[d]);
}
const nl = {};
function mw(n, { layout: i, layoutId: o }) {
  return Ca.has(n) || n.startsWith("origin") || (i || o !== void 0) && (!!nl[n] || n === "opacity");
}
function Bp(n, i, o) {
  const r = n.style, u = i?.style, f = {};
  if (!r)
    return f;
  for (const d in r)
    (Ce(r[d]) || u && Ce(u[d]) || mw(d, n) || o?.getValue(d)?.liveStyle !== void 0) && (f[d] = r[d]);
  return f;
}
function mM(n) {
  return window.getComputedStyle(n);
}
class pM extends dw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = hw;
  }
  mount(i) {
    zc(!!i.style), super.mount(i);
  }
  readValueFromInstance(i, o) {
    if (Ca.has(o))
      return this.projection?.isProjecting ? tl(o) : z2(i, o);
    {
      const r = mM(i), u = (g1(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof u == "string" ? u.trim() : u;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: o }) {
    return aw(i, o);
  }
  build(i, o, r) {
    Np(i, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, o, r) {
    return Bp(i, o, r);
  }
}
const pw = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), gw = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function gM(n, i, o, r) {
  hw(n, i, void 0, r);
  for (const u in i.attrs)
    n.setAttribute(pw.has(u) ? u : Op(u), i.attrs[u]);
}
function vw(n, i, o) {
  const r = Bp(n, i, o);
  for (const u in n)
    if (Ce(n[u]) || Ce(i[u])) {
      const f = Vs.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
      r[f] = n[u];
    }
  return r;
}
class vM extends dw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = we;
  }
  getBaseTargetFromProps(i, o) {
    return Ca.has(o) ? super.getBaseTargetFromProps(i, o) ?? tl(o) : i[o];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(i) {
    return Ca.has(i) ? this.latestValues[i] ?? tl(i) : void 0;
  }
  readValueFromInstance(i, o) {
    if (Ca.has(o)) {
      const r = j1(o);
      return r && r.default || 0;
    }
    if (W1.includes(o)) {
      const u = getComputedStyle(i)[o];
      if (typeof u == "string" && u)
        return u.trim();
    }
    return o = pw.has(o) ? o : Op(o), i.getAttribute(o);
  }
  scrapeMotionValuesFromProps(i, o, r) {
    return vw(i, o, r);
  }
  build(i, o, r) {
    tw(i, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(i, o, r, u) {
    gM(i, o, r, u);
  }
  mount(i) {
    this.isSVGTag = gw(i.tagName), super.mount(i);
  }
}
function yw(n, i) {
  if (!Array.isArray(i))
    return !1;
  const o = i.length;
  if (o !== n.length)
    return !1;
  for (let r = 0; r < o; r++)
    if (i[r] !== n[r])
      return !1;
  return !0;
}
const yM = [...Lp].reverse();
function bM(n) {
  let i = (h) => Promise.all(h.map(({ animation: g, options: p }) => wO(n, g, p))), o = wx(), r = !0, u = !1;
  function f(h) {
    const { props: g, parent: p, manuallyAnimateOnMount: y } = n, m = r || u, b = [], E = /* @__PURE__ */ new Set();
    let T = {}, R = 1 / 0, C = n;
    do
      C = C.props.inherit !== !1 && C.parent;
    while (C && !C.isControllingVariants);
    if (yM.forEach((_, D) => {
      const M = o[_], H = g[_], I = C && C.props[_], j = H !== void 0 ? H : el(I) || I === !1 ? I : void 0, z = el(j), K = _ === h ? M.isActive : null;
      K === !1 && (R = D);
      const tt = z && H === void 0 && !(m && y);
      if (M.protectedKeys = { ...T }, !M.isActive && K === null || !j && !M.prevProp || Vc(j) || typeof j == "boolean")
        return;
      if (_ === "exit" && M.isActive && K !== !0) {
        T = {
          ...T,
          ...M.prevResolvedValues
        };
        return;
      }
      const ft = xM(M.prevProp, j);
      let at = ft || z && (K && !tt || D > R), J = !1;
      const ct = Array.isArray(j) ? j : [j];
      let dt = {};
      if (K !== !1)
        for (const X of ct) {
          const { transition: $, transitionEnd: nt, ...F } = vo(n, X, X1(n, _)) || {};
          dt = {
            ...dt,
            ...F,
            ...nt
          };
        }
      const { prevResolvedValues: G } = M;
      for (const X in { ...G, ...dt }) {
        if (X in T)
          continue;
        const $ = dt[X], nt = G[X], F = Array.isArray($) && Array.isArray(nt) ? !yw($, nt) || ft : $ !== nt;
        if (F && $ == null)
          E.add(X);
        else if (F || $ !== void 0 && E.has(X)) {
          at = !0, E.delete(X) && (J = !0), M.needsAnimating[X] = !0;
          const xt = n.getValue(X);
          xt && (xt.liveStyle = !1);
        } else
          M.protectedKeys[X] = !0;
      }
      if (M.prevProp = j, M.prevResolvedValues = dt, M.isActive && (T = { ...T, ...dt }), at && (!(tt && ft) || J))
        for (const X of ct) {
          const $ = { type: _ };
          if (typeof X == "string" && m && y && p?.enteringChildren) {
            const nt = vo(p, X)?.transition?.delayChildren;
            $.delay = G1(p.enteringChildren, n, nt);
          }
          b.push({ animation: X, options: $ });
        }
    }), E.size) {
      const { initial: _ } = g, D = {}, M = typeof _ != "boolean" && vo(n, Array.isArray(_) ? _[0] : _, n.presenceContext?.custom);
      M && M.transition && (D.transition = M.transition), E.forEach((H) => {
        const I = n.getValue(H);
        I && (I.liveStyle = !0);
        const j = M && !Array.isArray(_) ? M[H] : void 0, z = n.getBaseTargetFromProps(g, H);
        D[H] = (j !== void 0 ? j : z !== void 0 && !Ce(z) ? z : n.initialValues[H] === void 0 ? n.baseTarget[H] : void 0) ?? null;
      }), b.push({ animation: D });
    }
    const A = m && n.blockInitialAnimation || r && !y && (g.initial === !1 || g.initial === g.animate);
    return r = u = !1, !A && b.length ? i(b) : Promise.resolve();
  }
  function d(h, g) {
    if (o[h].isActive === g)
      return Promise.resolve();
    n.variantChildren?.forEach((y) => y.animationState?.setActive(h, g)), o[h].isActive = g;
    const p = f(h);
    for (const y in o)
      o[y].protectedKeys = {};
    return p;
  }
  return {
    animateChanges: f,
    setActive: d,
    /**
     * Allows tests to inject a mocked animate function.
     * @internal
     */
    setAnimateFunction: (h) => {
      i = h(n);
    },
    getState: () => o,
    reset: () => {
      o = wx(), u = !0;
    }
  };
}
function xM(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !yw(i, n) : !1;
}
function wx() {
  const n = {};
  for (const i of Lp)
    n[i] = {
      isActive: i === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  return n;
}
function jm(n, i) {
  n.min = i.min, n.max = i.max;
}
function Yn(n, i) {
  jm(n.x, i.x), jm(n.y, i.y);
}
function Tx(n, i) {
  n.translate = i.translate, n.scale = i.scale, n.originPoint = i.originPoint, n.origin = i.origin;
}
const bw = 1e-4, SM = 1 - bw, wM = 1 + bw, xw = 0.01, TM = 0 - xw, EM = 0 + xw;
function Je(n) {
  return n.max - n.min;
}
function CM(n, i, o) {
  return Math.abs(n - i) <= o;
}
function Ex(n, i, o, r = 0.5) {
  n.origin = r, n.originPoint = Zt(i.min, i.max, n.origin), n.scale = Je(o) / Je(i), n.translate = Zt(o.min, o.max, n.origin) - n.originPoint, (n.scale >= SM && n.scale <= wM || isNaN(n.scale)) && (n.scale = 1), (n.translate >= TM && n.translate <= EM || isNaN(n.translate)) && (n.translate = 0);
}
function Kr(n, i, o, r) {
  Ex(n.x, i.x, o.x, r ? r.originX : void 0), Ex(n.y, i.y, o.y, r ? r.originY : void 0);
}
function Cx(n, i, o, r = 0) {
  const u = r ? Zt(o.min, o.max, r) : o.min;
  n.min = u + i.min, n.max = n.min + Je(i);
}
function AM(n, i, o, r) {
  Cx(n.x, i.x, o.x, r?.x), Cx(n.y, i.y, o.y, r?.y);
}
function Ax(n, i, o, r = 0) {
  const u = r ? Zt(o.min, o.max, r) : o.min;
  n.min = i.min - u, n.max = n.min + Je(i);
}
function Cc(n, i, o, r) {
  Ax(n.x, i.x, o.x, r?.x), Ax(n.y, i.y, o.y, r?.y);
}
function Rx(n, i, o, r, u) {
  return n -= i, n = Sc(n, 1 / o, r), u !== void 0 && (n = Sc(n, 1 / u, r)), n;
}
function RM(n, i = 0, o = 1, r = 0.5, u, f = n, d = n) {
  if (yi.test(i) && (i = parseFloat(i), i = Zt(d.min, d.max, i / 100) - d.min), typeof i != "number")
    return;
  let h = Zt(f.min, f.max, r);
  n === f && (h -= i), n.min = Rx(n.min, i, o, h, u), n.max = Rx(n.max, i, o, h, u);
}
function Dx(n, i, [o, r, u], f, d) {
  RM(n, i[o], i[r], i[u], i.scale, f, d);
}
const DM = ["x", "scaleX", "originX"], OM = ["y", "scaleY", "originY"];
function Ox(n, i, o, r) {
  Dx(n.x, i, DM, o ? o.x : void 0, r ? r.x : void 0), Dx(n.y, i, OM, o ? o.y : void 0, r ? r.y : void 0);
}
function Mx(n) {
  return n.translate === 0 && n.scale === 1;
}
function Sw(n) {
  return Mx(n.x) && Mx(n.y);
}
function _x(n, i) {
  return n.min === i.min && n.max === i.max;
}
function MM(n, i) {
  return _x(n.x, i.x) && _x(n.y, i.y);
}
function Nx(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function ww(n, i) {
  return Nx(n.x, i.x) && Nx(n.y, i.y);
}
function zx(n) {
  return Je(n.x) / Je(n.y);
}
function jx(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
function Kn(n) {
  return [n("x"), n("y")];
}
function Lx(n, i) {
  return i.max === i.min ? 0 : n / (i.max - i.min) * 100;
}
const Ir = {
  correct: (n, i) => {
    if (!i.target)
      return n;
    if (typeof n == "string")
      if (vt.test(n))
        n = parseFloat(n);
      else
        return n;
    const o = Lx(n, i.target.x), r = Lx(n, i.target.y);
    return `${o}% ${r}%`;
  }
}, _M = {
  correct: (n, { treeScale: i, projectionDelta: o }) => {
    const r = n, u = Sn.parse(n);
    if (u.length > 5)
      return r;
    const f = Sn.createTransformer(n), d = typeof u[0] != "number" ? 1 : 0, h = o.x.scale * i.x, g = o.y.scale * i.y;
    u[0 + d] /= h, u[1 + d] /= g;
    const p = Zt(h, g, 0.5);
    return typeof u[2 + d] == "number" && (u[2 + d] /= p), typeof u[3 + d] == "number" && (u[3 + d] /= p), f(u);
  }
};
function NM(n, i, o) {
  let r = "";
  const u = n.x.translate / i.x, f = n.y.translate / i.y, d = o?.z || 0;
  if ((u || f || d) && (r = `translate3d(${u}px, ${f}px, ${d}px) `), (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `), o) {
    const { transformPerspective: p, rotate: y, pathRotation: m, rotateX: b, rotateY: E, skewX: T, skewY: R } = o;
    p && (r = `perspective(${p}px) ${r}`), y && (r += `rotate(${y}deg) `), m && (r += `rotate(${m}deg) `), b && (r += `rotateX(${b}deg) `), E && (r += `rotateY(${E}deg) `), T && (r += `skewX(${T}deg) `), R && (r += `skewY(${R}deg) `);
  }
  const h = n.x.scale * i.x, g = n.y.scale * i.y;
  return (h !== 1 || g !== 1) && (r += `scale(${h}, ${g})`), r || "none";
}
const zM = Mp.length, Vx = (n) => typeof n == "number" || vt.test(n);
function jM(n, i, o, r, u, f) {
  u ? (n.opacity = Zt(0, o.opacity ?? 1, LM(r)), n.opacityExit = Zt(i.opacity ?? 1, 0, VM(r))) : f && (n.opacity = Zt(i.opacity ?? 1, o.opacity ?? 1, r));
  for (let d = 0; d < zM; d++) {
    const h = Mp[d];
    let g = Bx(i, h), p = Bx(o, h);
    if (g === void 0 && p === void 0)
      continue;
    g || (g = 0), p || (p = 0), g === 0 || p === 0 || Vx(g) === Vx(p) ? (n[h] = Math.max(Zt(wc(g), wc(p), r), 0), (yi.test(p) || yi.test(g)) && (n[h] += "%")) : n[h] = p;
  }
  (i.rotate || o.rotate) && (n.rotate = Zt(i.rotate || 0, o.rotate || 0, r));
}
function Bx(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const LM = /* @__PURE__ */ Tw(0, 0.5, d1), VM = /* @__PURE__ */ Tw(0.5, 0.95, $n);
function Tw(n, i, o) {
  return (r) => r < n ? 0 : r > i ? 1 : o(/* @__PURE__ */ Qr(n, i, r));
}
function BM(n, i, o) {
  const r = Ce(n) ? n : Da(n);
  return r.start(Dp("", r, i, o)), r.animation;
}
function il(n, i, o, r = { passive: !0 }) {
  return n.addEventListener(i, o, r), () => n.removeEventListener(i, o, r);
}
const PM = (n, i) => n.depth - i.depth;
class UM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(i) {
    cp(this.children, i), this.isDirty = !0;
  }
  remove(i) {
    gc(this.children, i), this.isDirty = !0;
  }
  forEach(i) {
    this.isDirty && this.children.sort(PM), this.isDirty = !1, this.children.forEach(i);
  }
}
function HM(n, i) {
  const o = ze.now(), r = ({ timestamp: u }) => {
    const f = u - o;
    f >= i && (xi(r), n(f - i));
  };
  return Ft.setup(r, !0), () => xi(r);
}
function uc(n) {
  return Ce(n) ? n.get() : n;
}
class kM {
  constructor() {
    this.members = [];
  }
  add(i) {
    cp(this.members, i);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === i || r === this.lead || r === this.prevLead)
        continue;
      const u = r.instance;
      (!u || u.isConnected === !1) && !r.snapshot && (gc(this.members, r), r.unmount());
    }
    i.scheduleRender();
  }
  remove(i) {
    if (gc(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(i) {
    for (let o = this.members.indexOf(i) - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return this.promote(r), !0;
    }
    return !1;
  }
  promote(i, o) {
    const r = this.lead;
    if (i !== r && (this.prevLead = r, this.lead = i, i.show(), r)) {
      r.updateSnapshot(), i.scheduleRender();
      const { layoutDependency: u } = r.options, { layoutDependency: f } = i.options;
      (u === void 0 || u !== f) && (i.resumeFrom = r, o && (r.preserveOpacity = !0), r.snapshot && (i.snapshot = r.snapshot, i.snapshot.latestValues = r.animationValues || r.latestValues), i.root?.isUpdating && (i.isLayoutDirty = !0)), i.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      i.options.onExitComplete?.(), i.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => i.instance && i.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const IM = {
  borderRadius: {
    ...Ir,
    applyTo: [...Mp]
  },
  borderTopLeftRadius: Ir,
  borderTopRightRadius: Ir,
  borderBottomLeftRadius: Ir,
  borderBottomRightRadius: Ir,
  boxShadow: _M
}, cc = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
Object.assign(nl, {
  ...IM,
  ...nl
});
const Gh = ["", "X", "Y", "Z"], qM = 1e3;
let GM = 0;
function Yh(n, i, o, r) {
  const { latestValues: u } = i;
  u[n] && (o[n] = u[n], i.setStaticValue(n, 0), r && (r[n] = 0));
}
function Ew(n) {
  if (n.hasCheckedOptimisedAppear = !0, n.root === n)
    return;
  const { visualElement: i } = n.options;
  if (!i)
    return;
  const o = Q1(i);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: u, layoutId: f } = n.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Ft, !(u || f));
  }
  const { parent: r } = n;
  r && !r.hasCheckedOptimisedAppear && Ew(r);
}
function Cw({ attachResizeListener: n, defaultParent: i, measureScroll: o, checkIsScrollRoot: r, resetTransform: u }) {
  return class {
    constructor(d = {}, h = i?.()) {
      this.id = GM++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(XM), this.nodes.forEach(e_), this.nodes.forEach(n_), this.nodes.forEach(KM);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new UM());
    }
    addEventListener(d, h) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new vc()), this.eventHandlers.get(d).add(h);
    }
    notifyListeners(d, ...h) {
      const g = this.eventHandlers.get(d);
      g && g.notify(...h);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    /**
     * Lifecycles
     */
    mount(d) {
      if (this.instance)
        return;
      this.isSVG = _p(d) && !aM(d), this.instance = d;
      const { layoutId: h, layout: g, visualElement: p } = this.options;
      if (p && !p.current && p.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || h) && (this.isLayoutDirty = !0), n) {
        let y, m = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        Ft.read(() => {
          m = window.innerWidth;
        }), n(d, () => {
          const E = window.innerWidth;
          E !== m && (m = E, this.root.updateBlockedByResize = !0, y && y(), y = HM(b, 250), cc.hasAnimatedSinceResize && (cc.hasAnimatedSinceResize = !1, this.nodes.forEach(Hx)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && p && (h || g) && this.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: m, hasRelativeLayoutChanged: b, layout: E }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const T = this.options.transition || p.getDefaultTransition() || r_, { onLayoutAnimationStart: R, onLayoutAnimationComplete: C } = p.getProps(), A = !this.targetLayout || !ww(this.targetLayout, E), _ = !m && b;
        if (this.options.layoutRoot || this.resumeFrom || _ || m && (A || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const D = {
            ...Rp(T, "layout"),
            onPlay: R,
            onComplete: C
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (D.delay = 0, D.type = !1), this.startAnimation(D), this.setAnimationOrigin(y, _, D.path);
        } else
          m || Hx(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = E;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), xi(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(i_), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ew(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const m = this.path[y];
        m.shouldResetTransform = !0, (typeof m.latestValues.x == "string" || typeof m.latestValues.y == "string") && (m.isLayoutDirty = !0), m.updateScroll("snapshot"), m.options.layoutRoot && m.willUpdate(!1), m.isAnimationBlocked && (m.dragSnapshot || (m.dragSnapshot = m.measure()), this.dragAncestor = m);
      }
      const { layoutId: h, layout: g } = this.options;
      if (h === void 0 && !g)
        return;
      const p = this.getTransformTemplate();
      this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const g = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), g && this.nodes.forEach(QM), this.nodes.forEach(Px);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ux);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(JM), this.nodes.forEach(WM), this.nodes.forEach(t_), this.nodes.forEach(YM), this.nodes.forEach(FM)) : this.nodes.forEach(Ux), this.clearAllSnapshots();
      const h = ze.now();
      Te.delta = Xi(0, 1e3 / 60, h - Te.timestamp), Te.timestamp = h, Te.isProcessing = !0, Ph.update.process(Te), Ph.preRender.process(Te), Ph.render.process(Te), Te.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, zp.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ZM), this.sharedNodes.forEach(a_);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ft.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ft.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Je(this.snapshot.measuredBox.x) && !Je(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++)
          this.path[g].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = we()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0);
    }
    updateScroll(d = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (h = !1), h && this.instance) {
        const g = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: g,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g
        };
      }
    }
    resetTransform() {
      if (!u)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !Sw(this.projectionDelta), g = this.getTransformTemplate(), p = g ? g(this.latestValues, "") : void 0, y = p !== this.prevTransformTemplateValue;
      d && this.instance && (h || fo(this.latestValues) || y) && (u(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const h = this.measurePageBox();
      let g = this.removeElementScroll(h);
      return d && (g = this.removeTransform(g)), l_(g), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: g,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d)
        return we();
      const h = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(u_))) {
        const { scroll: p } = this.root;
        p && (Qn(h.x, p.offset.x), Qn(h.y, p.offset.y));
      }
      return h;
    }
    removeElementScroll(d) {
      const h = we();
      if (Yn(h, d), this.scroll?.wasRoot)
        return h;
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g], { scroll: y, options: m } = p;
        p !== this.root && y && m.layoutScroll && (y.wasRoot && Yn(h, d), Qn(h.x, y.offset.x), Qn(h.y, y.offset.y));
      }
      return h;
    }
    applyTransform(d, h = !1, g) {
      const p = g || we();
      Yn(p, d);
      for (let y = 0; y < this.path.length; y++) {
        const m = this.path[y];
        !h && m.options.layoutScroll && m.scroll && m !== m.root && (Qn(p.x, -m.scroll.offset.x), Qn(p.y, -m.scroll.offset.y)), fo(m.latestValues) && ac(p, m.latestValues, m.layout?.layoutBox);
      }
      return fo(this.latestValues) && ac(p, this.latestValues, this.layout?.layoutBox), p;
    }
    removeTransform(d) {
      const h = we();
      Yn(h, d);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        if (!fo(p.latestValues))
          continue;
        let y;
        p.instance && (Nm(p.latestValues) && p.updateSnapshot(), y = we(), Yn(y, p.measurePageBox())), Ox(h, p.latestValues, p.snapshot?.layoutBox, y);
      }
      return fo(this.latestValues) && Ox(h, this.latestValues), h;
    }
    setTargetDelta(d) {
      this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Te.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== h;
      if (!(d || g && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: y, layoutId: m } = this.options;
      if (!this.layout || !(y || m))
        return;
      this.resolvedRelativeTargetAt = Te.timestamp;
      const b = this.getClosestProjectingParent();
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = we(), this.targetWithTransforms = we()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), AM(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Yn(this.target, this.layout.layoutBox), iw(this.target, this.targetDelta)) : Yn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Nm(this.parent.latestValues) || nw(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, h, g) {
      this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = we(), this.relativeTargetOrigin = we(), Cc(this.relativeTargetOrigin, h, g, this.options.layoutAnchor || void 0), Yn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(), h = !!this.resumingFrom || this !== d;
      let g = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === Te.timestamp && (g = !1), g)
        return;
      const { layout: p, layoutId: y } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || y))
        return;
      Yn(this.layoutCorrected, this.layout.layoutBox);
      const m = this.treeScale.x, b = this.treeScale.y;
      UO(this.layoutCorrected, this.treeScale, this.path, h), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = we());
      const { target: E } = d;
      if (!E) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Tx(this.prevProjectionDelta.x, this.projectionDelta.x), Tx(this.prevProjectionDelta.y, this.projectionDelta.y)), Kr(this.projectionDelta, this.layoutCorrected, E, this.latestValues), (this.treeScale.x !== m || this.treeScale.y !== b || !jx(this.projectionDelta.x, this.prevProjectionDelta.x) || !jx(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", E));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      if (this.options.visualElement?.scheduleRender(), d) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = As(), this.projectionDelta = As(), this.projectionDeltaWithTransform = As();
    }
    setAnimationOrigin(d, h = !1, g) {
      const p = this.snapshot, y = p ? p.latestValues : {}, m = { ...this.latestValues }, b = As();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const E = we(), T = p ? p.source : void 0, R = this.layout ? this.layout.source : void 0, C = T !== R, A = this.getStack(), _ = !A || A.members.length <= 1, D = !!(C && !_ && this.options.crossfade === !0 && !this.path.some(s_));
      this.animationProgress = 0;
      let M;
      const H = g?.interpolateProjection(d);
      this.mixTargetDelta = (I) => {
        const j = I / 1e3, z = H?.(j);
        z ? (b.x.translate = z.x, b.x.scale = Zt(d.x.scale, 1, j), b.x.origin = d.x.origin, b.x.originPoint = d.x.originPoint, b.y.translate = z.y, b.y.scale = Zt(d.y.scale, 1, j), b.y.origin = d.y.origin, b.y.originPoint = d.y.originPoint) : (kx(b.x, d.x, j), kx(b.y, d.y, j)), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Cc(E, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), o_(this.relativeTarget, this.relativeTargetOrigin, E, j), M && MM(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = we()), Yn(M, this.relativeTarget)), C && (this.animationValues = m, jM(m, y, this.latestValues, j, D, _)), z && z.rotate !== void 0 && (this.animationValues || (this.animationValues = m), this.animationValues.pathRotation = z.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (xi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ft.update(() => {
        cc.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Da(0)), this.motionValue.jump(0, !1), this.currentAnimation = BM(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (h) => {
            this.mixTargetDelta(h), d.onUpdate && d.onUpdate(h);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), w2(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(qM), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead(), { targetWithTransforms: h, layout: g, latestValues: p } = d;
      let { target: y } = d;
      if (!(!h || !y || !g)) {
        if (this !== d && this.layout && g && Aw(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          y = this.target || we();
          const m = Je(this.layout.layoutBox.x);
          y.x.min = d.target.x.min, y.x.max = y.x.min + m;
          const b = Je(this.layout.layoutBox.y);
          y.y.min = d.target.y.min, y.y.max = y.y.min + b;
        }
        Yn(h, y), ac(h, p), Kr(this.projectionDeltaWithTransform, this.layoutCorrected, h, p);
      }
    }
    registerSharedNode(d, h) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new kM()), this.sharedNodes.get(d).add(h);
      const p = h.options.initialPromotionConfig;
      h.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(h) : void 0
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d)
        return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: h, preserveFollowOpacity: g } = {}) {
      const p = this.getStack();
      p && p.promote(this, g), d && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      let h = !1;
      const { latestValues: g } = d;
      if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (h = !0), !h)
        return;
      const p = {};
      g.z && Yh("z", d, p, this.animationValues);
      for (let y = 0; y < Gh.length; y++)
        Yh(`rotate${Gh[y]}`, d, p, this.animationValues), Yh(`skew${Gh[y]}`, d, p, this.animationValues);
      d.render();
      for (const y in p)
        d.setStaticValue(y, p[y]), this.animationValues && (this.animationValues[y] = p[y]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, h) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = uc(h?.pointerEvents) || "", d.transform = g ? g(this.latestValues, "") : "none";
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = uc(h?.pointerEvents) || ""), this.hasProjected && !fo(this.latestValues) && (d.transform = g ? g({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const y = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let m = NM(this.projectionDeltaWithTransform, this.treeScale, y);
      g && (m = g(y, m)), d.transform = m;
      const { x: b, y: E } = this.projectionDelta;
      d.transformOrigin = `${b.origin * 100}% ${E.origin * 100}% 0`, p.animationValues ? d.opacity = p === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : d.opacity = p === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
      for (const T in nl) {
        if (y[T] === void 0)
          continue;
        const { correct: R, applyTo: C, isCSSVariable: A } = nl[T], _ = m === "none" ? y[T] : R(y[T], p);
        if (C) {
          const D = C.length;
          for (let M = 0; M < D; M++)
            d[C[M]] = _;
        } else
          A ? this.options.visualElement.renderState.vars[T] = _ : d[T] = _;
      }
      this.options.layoutId && (d.pointerEvents = p === this ? uc(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(Px), this.root.sharedNodes.clear();
    }
  };
}
function YM(n) {
  n.updateLayout(), $M(n);
}
function FM(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = n.layout, { animationType: u } = n.options, f = i.source !== n.layout.source;
    if (u === "size")
      Kn((y) => {
        const m = f ? i.measuredBox[y] : i.layoutBox[y], b = Je(m);
        m.min = o[y].min, m.max = m.min + b;
      });
    else if (u === "x" || u === "y") {
      const y = u === "x" ? "y" : "x";
      jm(f ? i.measuredBox[y] : i.layoutBox[y], o[y]);
    } else Aw(u, i.layoutBox, o) && Kn((y) => {
      const m = f ? i.measuredBox[y] : i.layoutBox[y], b = Je(o[y]);
      m.max = m.min + b, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[y].max = n.relativeTarget[y].min + b);
    });
    const d = As();
    Kr(d, o, i.layoutBox);
    const h = As();
    f ? Kr(h, n.applyTransform(r, !0), i.measuredBox) : Kr(h, o, i.layoutBox);
    const g = !Sw(d);
    let p = !1;
    if (!n.resumeFrom) {
      const y = n.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: m, layout: b } = y;
        if (m && b) {
          const E = n.options.layoutAnchor || void 0, T = we();
          Cc(T, i.layoutBox, m.layoutBox, E);
          const R = we();
          Cc(R, o, b.layoutBox, E), ww(T, R) || (p = !0), y.options.layoutRoot && (n.relativeTarget = R, n.relativeTargetOrigin = T, n.relativeParent = y);
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: o,
      snapshot: i,
      delta: h,
      layoutDelta: d,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: p
    });
  } else if (n.isLead()) {
    const { onExitComplete: o } = n.options;
    o && o();
  }
  n.options.transition = void 0;
}
function XM(n) {
  n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function KM(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function ZM(n) {
  n.clearSnapshot();
}
function Px(n) {
  n.clearMeasurements();
}
function QM(n) {
  n.isLayoutDirty = !0, n.updateLayout();
}
function Ux(n) {
  n.isLayoutDirty = !1;
}
function $M(n) {
  const { snapshot: i, dragAncestor: o } = n, r = o?.layout;
  if (!i || !r || n.resumeFrom || n.isAnimationBlocked)
    return;
  const u = o.dragSnapshot;
  Kn((f) => Qn(i.layoutBox[f], r.layoutBox[f].min - u.layoutBox[f].min));
}
function JM(n) {
  n.isAnimationBlocked && n.layout && !n.isLayoutDirty && (n.snapshot = n.dragSnapshot || n.layout, n.isLayoutDirty = !0);
}
function WM(n) {
  n.relativeTarget && n.relativeParent?.isLayoutDirty && (n.currentAnimation ? n.isLayoutDirty = !0 : (n.targetDelta = void 0, n.removeRelativeTarget()));
}
function t_(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform();
}
function Hx(n) {
  n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0;
}
function e_(n) {
  n.resolveTargetDelta();
}
function n_(n) {
  n.calcProjection();
}
function i_(n) {
  n.resetSkewAndRotation();
}
function a_(n) {
  n.removeLeadSnapshot();
}
function kx(n, i, o) {
  n.translate = Zt(i.translate, 0, o), n.scale = Zt(i.scale, 1, o), n.origin = i.origin, n.originPoint = i.originPoint;
}
function Ix(n, i, o, r) {
  n.min = Zt(i.min, o.min, r), n.max = Zt(i.max, o.max, r);
}
function o_(n, i, o, r) {
  Ix(n.x, i.x, o.x, r), Ix(n.y, i.y, o.y, r);
}
function s_(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const r_ = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, qx = (n) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n), Gx = qx("applewebkit/") && !qx("chrome/") ? Math.round : $n;
function Yx(n) {
  n.min = Gx(n.min), n.max = Gx(n.max);
}
function l_(n) {
  Yx(n.x), Yx(n.y);
}
function Aw(n, i, o) {
  return n === "position" || n === "preserve-aspect" && !CM(zx(i), zx(o), 0.2);
}
function u_(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const c_ = Cw({
  attachResizeListener: (n, i) => il(n, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Fh = {
  current: void 0
}, Rw = Cw({
  measureScroll: (n) => ({
    x: n.scrollLeft,
    y: n.scrollTop
  }),
  defaultParent: () => {
    if (!Fh.current) {
      const n = new c_({});
      n.mount(window), n.setOptions({ layoutScroll: !0 }), Fh.current = n;
    }
    return Fh.current;
  },
  resetTransform: (n, i) => {
    n.style.transform = i !== void 0 ? i : "none";
  },
  checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed"
}), Ms = x.createContext({
  transformPagePoint: (n) => n,
  isStatic: !1,
  reducedMotion: "never"
});
function f_(n = !0) {
  const i = x.useContext(up);
  if (i === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: r, register: u } = i, f = x.useId();
  x.useEffect(() => {
    if (n)
      return u(f);
  }, [n]);
  const d = x.useCallback(() => n && r && r(f), [f, r, n]);
  return !o && r ? [!1, d] : [!0];
}
const Dw = x.createContext({ strict: !1 }), Fx = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let Xx = !1;
function d_() {
  if (Xx)
    return;
  const n = {};
  for (const i in Fx)
    n[i] = {
      isEnabled: (o) => Fx[i].some((r) => !!o[r])
    };
  fw(n), Xx = !0;
}
function Ow() {
  return d_(), dM();
}
function h_(n) {
  const i = Ow();
  for (const o in n)
    i[o] = {
      ...i[o],
      ...n[o]
    };
  fw(i);
}
function m_({ children: n, ...i }) {
  const o = x.useContext(Ms);
  i = { ...o, ...i }, i.transition = Ap(i.transition, o.transition), i.isStatic = Nc(() => i.isStatic);
  const r = x.useMemo(() => i, [
    JSON.stringify(i.transition),
    i.transformPagePoint,
    i.reducedMotion,
    i.skipAnimations,
    i.isValidProp
  ]);
  return w.jsx(Ms.Provider, { value: r, children: n });
}
const Pc = /* @__PURE__ */ x.createContext({});
function p_(n, i) {
  if (Bc(n)) {
    const { initial: o, animate: r } = n;
    return {
      initial: o === !1 || el(o) ? o : void 0,
      animate: el(r) ? r : void 0
    };
  }
  return n.inherit !== !1 ? i : {};
}
function g_(n) {
  const { initial: i, animate: o } = p_(n, x.useContext(Pc));
  return x.useMemo(() => ({ initial: i, animate: o }), [Kx(i), Kx(o)]);
}
function Kx(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Pp = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Mw(n, i, o) {
  for (const r in i)
    !Ce(i[r]) && !mw(r, o) && (n[r] = i[r]);
}
function v_({ transformTemplate: n }, i) {
  return x.useMemo(() => {
    const o = Pp();
    return Np(o, i, n), Object.assign({}, o.vars, o.style);
  }, [i]);
}
function y_(n, i) {
  const o = n.style || {}, r = {};
  return Mw(r, o, n), Object.assign(r, v_(n, i)), r;
}
function b_(n, i) {
  const o = {}, r = y_(n, i);
  return n.drag && n.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const _w = () => ({
  ...Pp(),
  attrs: {}
});
function x_(n, i, o, r) {
  const u = x.useMemo(() => {
    const f = _w();
    return tw(f, i, gw(r), n.transformTemplate, n.style), {
      ...f.attrs,
      style: { ...f.style }
    };
  }, [i]);
  if (n.style) {
    const f = {};
    Mw(f, n.style, n), u.style = { ...f, ...u.style };
  }
  return u;
}
const S_ = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function Ac(n) {
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || S_.has(n);
}
function w_(n, i) {
  return n.startsWith("on") ? !Ac(n) : i?.(n) ?? !Ac(n);
}
function T_(n, i, o, r) {
  const u = {};
  for (const f in n)
    f === "values" && typeof n.values == "object" || Ce(n[f]) || (w_(f, r) || o === !0 && Ac(f) || !i && !Ac(f) || // If trying to use native HTML drag events, forward drag listeners
    n.draggable && f.startsWith("onDrag")) && (u[f] = n[f]);
  return u;
}
const E_ = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Up(n) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof n != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    n.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(E_.indexOf(n) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(n))
    )
  );
}
function C_(n, i, o, { latestValues: r }, u, f = !1, d, h) {
  const p = (d ?? Up(n) ? x_ : b_)(i, r, u, n), y = T_(i, typeof n == "string", f, h), m = n !== x.Fragment ? { ...y, ...p, ref: o } : {}, { children: b } = i, E = x.useMemo(() => Ce(b) ? b.get() : b, [b]);
  return x.createElement(n, {
    ...m,
    children: E
  });
}
function A_({ scrapeMotionValuesFromProps: n, createRenderState: i }, o, r, u) {
  return {
    latestValues: R_(o, r, u, n),
    renderState: i()
  };
}
function R_(n, i, o, r) {
  const u = {}, f = r(n, {});
  for (const b in f)
    u[b] = uc(f[b]);
  let { initial: d, animate: h } = n;
  const g = Bc(n), p = uw(n);
  i && p && !g && n.inherit !== !1 && (d === void 0 && (d = i.initial), h === void 0 && (h = i.animate));
  let y = o ? o.initial === !1 : !1;
  y = y || d === !1;
  const m = y ? h : d;
  if (m && typeof m != "boolean" && !Vc(m)) {
    const b = Array.isArray(m) ? m : [m];
    for (let E = 0; E < b.length; E++) {
      const T = F1(n, b[E]);
      if (T) {
        const { transitionEnd: R, transition: C, ...A } = T;
        for (const _ in A) {
          let D = A[_];
          if (Array.isArray(D)) {
            const M = y ? D.length - 1 : 0;
            D = D[M];
          }
          D !== null && (u[_] = D);
        }
        for (const _ in R)
          u[_] = R[_];
      }
    }
  }
  return u;
}
const Nw = (n) => (i, o) => {
  const r = x.useContext(Pc), u = x.useContext(up), f = () => A_(n, i, r, u);
  return o ? f() : Nc(f);
}, D_ = /* @__PURE__ */ Nw({
  scrapeMotionValuesFromProps: Bp,
  createRenderState: Pp
}), O_ = /* @__PURE__ */ Nw({
  scrapeMotionValuesFromProps: vw,
  createRenderState: _w
}), M_ = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function __(n, i, o) {
  const r = x.useRef(o);
  x.useInsertionEffect(() => {
    r.current = o;
  });
  const u = x.useRef(null);
  return x.useCallback((f) => {
    f && n.onMount?.(f), i && (f ? i.mount(f) : i.unmount());
    const d = r.current;
    if (typeof d == "function")
      if (f) {
        const h = d(f);
        typeof h == "function" && (u.current = h);
      } else u.current ? (u.current(), u.current = null) : d(f);
    else d && (d.current = f);
  }, [i]);
}
const zw = x.createContext({});
function ws(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function N_(n, i, o, r, u, f) {
  const { visualElement: d } = x.useContext(Pc), h = x.useContext(Dw), g = x.useContext(up), p = x.useContext(Ms), y = p.reducedMotion, m = p.skipAnimations, b = x.useRef(null), E = x.useRef(!1);
  r = r || h.renderer, !b.current && r && (b.current = r(n, {
    visualState: i,
    parent: d,
    props: o,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial === !1 : !1,
    reducedMotionConfig: y,
    skipAnimations: m,
    isSVG: f
  }), E.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const T = b.current, R = x.useContext(zw);
  T && !T.projection && u && (T.type === "html" || T.type === "svg") && z_(b.current, o, u, R);
  const C = x.useRef(!1);
  x.useInsertionEffect(() => {
    T && C.current && T.update(o, g);
  });
  const A = o[Z1], _ = x.useRef(!!A && typeof window < "u" && !window.MotionHandoffIsComplete?.(A) && window.MotionHasOptimisedAnimation?.(A));
  return hm(() => {
    !E.current || !T || (T.animationState?.animateChanges(), T.enteringChildren = void 0);
  }, []), hm(() => {
    E.current = !0, T && (C.current = !0, window.MotionIsMounted = !0, T.updateFeatures(), T.scheduleRenderMicrotask(), _.current && T.animationState && T.animationState.animateChanges());
  }), x.useEffect(() => {
    T && (!_.current && T.animationState && T.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(A);
    }), _.current = !1), T.enteringChildren = void 0);
  }), T;
}
function z_(n, i, o, r) {
  const { layoutId: u, layout: f, drag: d, dragConstraints: h, layoutScroll: g, layoutRoot: p, layoutAnchor: y, layoutCrossfade: m } = i;
  n.projection = new o(n.latestValues, i["data-framer-portal-id"] ? void 0 : jw(n.parent)), n.projection.setOptions({
    layoutId: u,
    layout: f,
    alwaysMeasureLayout: !!d || h && ws(h),
    visualElement: n,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof f == "string" ? f : "both",
    initialPromotionConfig: r,
    crossfade: m,
    layoutScroll: g,
    layoutRoot: p,
    layoutAnchor: y
  });
}
function jw(n) {
  if (n)
    return n.options.allowProjection !== !1 ? n.projection : jw(n.parent);
}
function Xh(n, { forwardMotionProps: i = !1, type: o } = {}, r, u) {
  r && h_(r);
  const f = o ? o === "svg" : Up(n), d = f ? O_ : D_;
  function h(p, y) {
    let m;
    const b = {
      ...x.useContext(Ms),
      ...p,
      layoutId: j_(p)
    }, { isStatic: E, isValidProp: T } = b, R = g_(p), C = d(p, E);
    if (!E && typeof window < "u") {
      L_();
      const A = V_(b);
      m = A.MeasureLayout, R.visualElement = N_(n, C, b, u, A.ProjectionNode, f);
    }
    return w.jsxs(Pc.Provider, { value: R, children: [m && R.visualElement ? w.jsx(m, { visualElement: R.visualElement, ...b }) : null, C_(n, p, __(C, R.visualElement, y), C, E, i, f, T)] });
  }
  h.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const g = x.forwardRef(h);
  return g[M_] = n, g;
}
function j_({ layoutId: n }) {
  const i = x.useContext(n1).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function L_(n, i) {
  x.useContext(Dw).strict;
}
function V_(n) {
  const i = Ow(), { drag: o, layout: r } = i;
  if (!o && !r)
    return {};
  const u = { ...o, ...r };
  return {
    MeasureLayout: o?.isEnabled(n) || r?.isEnabled(n) ? u.MeasureLayout : void 0,
    ProjectionNode: u.ProjectionNode
  };
}
function B_(n, i) {
  if (typeof Proxy > "u")
    return Xh;
  const o = /* @__PURE__ */ new Map(), r = (f, d) => Xh(f, d, n, i), u = (f, d) => r(f, d);
  return new Proxy(u, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (f, d) => d === "create" ? r : (o.has(d) || o.set(d, Xh(d, void 0, n, i)), o.get(d))
  });
}
const P_ = (n, i) => i.isSVG ?? Up(n) ? new vM(i) : new pM(i, {
  allowProjection: n !== x.Fragment
});
class U_ extends _a {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(i) {
    super(i), i.animationState || (i.animationState = bM(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Vc(i) && (this.unmountControls = i.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(), { animate: o } = this.node.prevProps || {};
    i !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let H_ = 0;
class k_ extends _a {
  constructor() {
    super(...arguments), this.id = H_++;
  }
  update() {
    const { presenceContext: i, prevPresenceContext: o, animationState: r } = this.node;
    if (!i || !r)
      return;
    const { isPresent: u, onExitComplete: f } = i, d = o?.isPresent;
    if (u === d)
      return;
    if (u && d === !1) {
      if (this.exit === !0) {
        const { initial: g } = this.node.getProps();
        if (g && !Array.isArray(g)) {
          const { transition: p, transitionEnd: y, ...m } = vo(this.node, g) || {};
          for (const b in m)
            this.node.getValue(b)?.jump(m[b]);
        }
        this.node.blockInitialAnimation = !1, r.reset(), r.animateChanges();
      } else
        r.setActive("exit", !1);
      this.exit = void 0;
      return;
    }
    const h = this.exit = r.setActive("exit", !u);
    f && !u && h.then(() => {
      this.exit === h && (this.exit = !0, f(this.id));
    });
  }
  mount() {
    const { register: i, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {
  }
}
const I_ = {
  animation: {
    Feature: U_
  },
  exit: {
    Feature: k_
  }
};
function Uc(n) {
  return {
    point: {
      x: n.pageX,
      y: n.pageY
    }
  };
}
const q_ = (n) => (i) => jp(i) && n(i, Uc(i));
function Zr(n, i, o, r) {
  return il(n, i, q_(o), r);
}
const Lw = ({ current: n }) => n ? n.ownerDocument.defaultView : null, Zx = (n, i) => Math.abs(n - i);
function G_(n, i) {
  const o = Zx(n.x, i.x), r = Zx(n.y, i.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const Qx = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Vw {
  constructor(i, o, { transformPagePoint: r, contextWindow: u = window, dragSnapToOrigin: f = !1, distanceThreshold: d = 3, element: h } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (T) => {
      this.handleScroll(T.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Gu(this.lastRawMoveEventInfo, this.transformPagePoint));
      const T = Kh(this.lastMoveEventInfo, this.history), R = this.startEvent !== null, C = G_(T.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!R && !C)
        return;
      const { point: A } = T;
      this.history.push({ ...A, timestamp: ze.now() });
      const { onStart: _, onMove: D } = this.handlers;
      R || (_ && _(this.lastMoveEvent, T), this.startEvent = this.lastMoveEvent), D && D(this.lastMoveEvent, T);
    }, this.handlePointerMove = (T, R) => {
      this.lastMoveEvent = T, this.lastRawMoveEventInfo = R, this.lastMoveEventInfo = Gu(R, this.transformPagePoint), this.hasPendingMove = !0, Ft.update(this.updatePoint, !0);
    }, this.handlePointerUp = (T, R) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: C, onSessionEnd: A, resumeAnimation: _ } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && _ && _(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const D = Kh(T.type === "pointercancel" ? this.lastMoveEventInfo : Gu(R, this.transformPagePoint), this.history);
      this.startEvent && C && C(T, D), A && A(T, D);
    }, !jp(i))
      return;
    this.dragSnapToOrigin = f, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = d, this.contextWindow = u || window;
    const g = Uc(i), p = Gu(g, this.transformPagePoint), { point: y } = p, { timestamp: m } = Te;
    this.history = [{ ...y, timestamp: m }];
    const { onSessionStart: b } = o;
    b && b(i, Kh(p, this.history));
    const E = { passive: !0, capture: !0 };
    this.removeListeners = rl(Zr(this.contextWindow, "pointermove", this.handlePointerMove, E), Zr(this.contextWindow, "pointerup", this.handlePointerUp, E), Zr(this.contextWindow, "pointercancel", this.handlePointerUp, E)), h && this.startScrollTracking(h);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(i) {
    let o = i.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (Qx.has(r.overflowX) || Qx.has(r.overflowY)) && this.scrollPositions.set(o, {
        x: o.scrollLeft,
        y: o.scrollTop
      }), o = o.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(i) {
    const o = this.scrollPositions.get(i);
    if (!o)
      return;
    const r = i === window, u = r ? { x: window.scrollX, y: window.scrollY } : {
      x: i.scrollLeft,
      y: i.scrollTop
    }, f = { x: u.x - o.x, y: u.y - o.y };
    f.x === 0 && f.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += f.x, this.lastMoveEventInfo.point.y += f.y) : this.history.length > 0 && (this.history[0].x -= f.x, this.history[0].y -= f.y), this.scrollPositions.set(i, u), Ft.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), xi(this.updatePoint);
  }
}
function Gu(n, i) {
  return i ? { point: i(n.point) } : n;
}
function $x(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function Kh({ point: n }, i) {
  return {
    point: n,
    delta: $x(n, Bw(i)),
    offset: $x(n, Y_(i)),
    velocity: F_(i, 0.1)
  };
}
function Y_(n) {
  return n[0];
}
function Bw(n) {
  return n[n.length - 1];
}
function F_(n, i) {
  if (n.length < 2)
    return { x: 0, y: 0 };
  let o = n.length - 1, r = null;
  const u = Bw(n);
  for (; o >= 0 && (r = n[o], !(u.timestamp - r.timestamp > /* @__PURE__ */ Ln(i))); )
    o--;
  if (!r)
    return { x: 0, y: 0 };
  r === n[0] && n.length > 2 && u.timestamp - r.timestamp > /* @__PURE__ */ Ln(i) * 2 && (r = n[1]);
  const f = /* @__PURE__ */ jn(u.timestamp - r.timestamp);
  if (f === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (u.x - r.x) / f,
    y: (u.y - r.y) / f
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function X_(n, { min: i, max: o }, r) {
  return i !== void 0 && n < i ? n = r ? Zt(i, n, r.min) : Math.max(n, i) : o !== void 0 && n > o && (n = r ? Zt(o, n, r.max) : Math.min(n, o)), n;
}
function Jx(n, i, o) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: o !== void 0 ? n.max + o - (n.max - n.min) : void 0
  };
}
function K_(n, { top: i, left: o, bottom: r, right: u }) {
  return {
    x: Jx(n.x, o, u),
    y: Jx(n.y, i, r)
  };
}
function Wx(n, i) {
  let o = i.min - n.min, r = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([o, r] = [r, o]), { min: o, max: r };
}
function Z_(n, i) {
  return {
    x: Wx(n.x, i.x),
    y: Wx(n.y, i.y)
  };
}
function Q_(n, i) {
  let o = 0.5;
  const r = Je(n), u = Je(i);
  return u > r ? o = /* @__PURE__ */ Qr(i.min, i.max - r, n.min) : r > u && (o = /* @__PURE__ */ Qr(n.min, n.max - u, i.min)), Xi(0, 1, o);
}
function $_(n, i) {
  const o = {};
  return i.min !== void 0 && (o.min = i.min - n.min), i.max !== void 0 && (o.max = i.max - n.min), o;
}
const Lm = 0.35;
function J_(n = Lm) {
  return n === !1 ? n = 0 : n === !0 && (n = Lm), {
    x: tS(n, "left", "right"),
    y: tS(n, "top", "bottom")
  };
}
function tS(n, i, o) {
  return {
    min: eS(n, i),
    max: eS(n, o)
  };
}
function eS(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const W_ = /* @__PURE__ */ new WeakMap();
class tN {
  constructor(i) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = we(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i;
  }
  start(i, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: u } = this.visualElement;
    if (u && u.isPresent === !1)
      return;
    const f = (m) => {
      o && this.snapToCursor(m), this.stopAnimation();
    }, d = (m, b) => {
      const { drag: E, dragPropagation: T, onDragStart: R } = this.getProps();
      if (E && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = kO(E), !this.openDragLock))
        return;
      this.latestPointerEvent = m, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Kn((A) => {
        let _ = this.getAxisMotionValue(A).get() || 0;
        if (yi.test(_)) {
          const { projection: D } = this.visualElement;
          if (D && D.layout) {
            const M = D.layout.layoutBox[A];
            M && (_ = Je(M) * (parseFloat(_) / 100));
          }
        }
        this.originPoint[A] = _;
      }), R && Ft.update(() => R(m, b), !1, !0), Om(this.visualElement, "transform");
      const { animationState: C } = this.visualElement;
      C && C.setActive("whileDrag", !0);
    }, h = (m, b) => {
      this.latestPointerEvent = m, this.latestPanInfo = b;
      const { dragPropagation: E, dragDirectionLock: T, onDirectionLock: R, onDrag: C } = this.getProps();
      if (!E && !this.openDragLock)
        return;
      const { offset: A } = b;
      if (T && this.currentDirection === null) {
        this.currentDirection = nN(A), this.currentDirection !== null && R && R(this.currentDirection);
        return;
      }
      this.updateAxis("x", b.point, A), this.updateAxis("y", b.point, A), this.visualElement.render(), C && Ft.update(() => C(m, b), !1, !0);
    }, g = (m, b) => {
      this.latestPointerEvent = m, this.latestPanInfo = b, this.stop(m, b), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, p = () => {
      const { dragSnapToOrigin: m } = this.getProps();
      (m || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new Vw(i, {
      onSessionStart: f,
      onStart: d,
      onMove: h,
      onSessionEnd: g,
      resumeAnimation: p
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: y,
      distanceThreshold: r,
      contextWindow: Lw(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(i, o) {
    const r = i || this.latestPointerEvent, u = o || this.latestPanInfo, f = this.isDragging;
    if (this.cancel(), !f || !u || !r)
      return;
    const { velocity: d } = u;
    this.startAnimation(d);
    const { onDragEnd: h } = this.getProps();
    h && Ft.postRender(() => h(r, u));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: o } = this.visualElement;
    i && (i.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(i, o, r) {
    const { drag: u } = this.getProps();
    if (!r || !Yu(i, u, this.currentDirection))
      return;
    const f = this.getAxisMotionValue(i);
    let d = this.originPoint[i] + r[i];
    this.constraints && this.constraints[i] && (d = X_(d, this.constraints[i], this.elastic[i])), f.set(d);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: o } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, u = this.constraints;
    i && ws(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && r ? this.constraints = K_(r.layoutBox, i) : this.constraints = !1, this.elastic = J_(o), u !== this.constraints && !ws(i) && r && this.constraints && !this.hasMutatedConstraints && Kn((f) => {
      this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = $_(r.layoutBox[f], this.constraints[f]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: o } = this.getProps();
    if (!i || !ws(i))
      return !1;
    const r = i.current, { projection: u } = this.visualElement;
    if (!u || !u.layout)
      return !1;
    u.root && (u.root.scroll = void 0, u.root.updateScroll());
    const f = HO(r, u.root, this.visualElement.getTransformPagePoint());
    let d = Z_(u.layout.layoutBox, f);
    if (o) {
      const h = o(BO(d));
      this.hasMutatedConstraints = !!h, h && (d = ew(h));
    }
    return d;
  }
  startAnimation(i) {
    const { drag: o, dragMomentum: r, dragElastic: u, dragTransition: f, dragSnapToOrigin: d, onDragTransitionEnd: h } = this.getProps(), g = this.constraints || {}, p = Kn((y) => {
      if (!Yu(y, o, this.currentDirection))
        return;
      let m = g && g[y] || {};
      (d === !0 || d === y) && (m = { min: 0, max: 0 });
      const b = u ? 200 : 1e6, E = u ? 40 : 1e7, T = {
        type: "inertia",
        velocity: r ? i[y] : 0,
        bounceStiffness: b,
        bounceDamping: E,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...f,
        ...m
      };
      return this.startAxisValueAnimation(y, T);
    });
    return Promise.all(p).then(h);
  }
  startAxisValueAnimation(i, o) {
    const r = this.getAxisMotionValue(i);
    return Om(this.visualElement, i), r.start(Dp(i, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    Kn((i) => this.getAxisMotionValue(i).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(i) {
    const o = `_drag${i.toUpperCase()}`, u = this.visualElement.getProps()[o];
    return u || this.visualElement.getValue(i, this.visualElement.latestValues[i] ?? 0);
  }
  /**
   * Measure the live box - projection.layout may or may not include the
   * drag transform, depending on when it was measured.
   */
  snapToCursor({ clientX: i, clientY: o }) {
    const { drag: r } = this.getProps(), u = { x: i, y: o }, f = this.visualElement.getTransformPagePoint()?.(u) || u, d = this.visualElement.measureViewportBox();
    Kn((h) => {
      if (!Yu(h, r, this.currentDirection))
        return;
      const g = this.getAxisMotionValue(h), { min: p, max: y } = d[h];
      g.set((g.get() || 0) + f[h] - Zt(p, y, 0.5));
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: i, dragConstraints: o } = this.getProps(), { projection: r } = this.visualElement;
    if (!ws(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const u = this.constraints, f = { x: 0, y: 0 };
    Kn((h) => {
      const g = this.getAxisMotionValue(h).get();
      f[h] = Q_({ min: g, max: g }, u[h]);
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), Kn((h) => {
      const g = this.getAxisMotionValue(h);
      if (!Yu(h, i, null) || !g.get())
        return;
      const { min: p, max: y } = this.constraints[h];
      g.set(Zt(p, y, f[h]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    W_.set(this.visualElement, this);
    const i = this.visualElement.current, o = Zr(i, "pointerdown", (p) => {
      const { drag: y, dragListener: m = !0 } = this.getProps(), b = p.target, E = b !== i && XO(b);
      y && m && !E && this.start(p);
    });
    let r;
    const u = () => {
      const { dragConstraints: p } = this.getProps();
      ws(p) && p.current && (this.constraints = this.resolveRefConstraints(), r || (r = eN(i, p.current, () => this.scalePositionWithinConstraints())));
    }, { projection: f } = this.visualElement, d = f.addEventListener("measure", u);
    f && !f.layout && (f.root && f.root.updateScroll(), f.updateLayout()), Ft.read(u);
    const h = il(window, "resize", () => this.scalePositionWithinConstraints()), g = f.addEventListener("didUpdate", (({ delta: p, hasLayoutChanged: y }) => {
      this.isDragging && y && (Kn((m) => {
        const b = this.getAxisMotionValue(m);
        b && (this.originPoint[m] += p[m].translate, b.set(b.get() + p[m].translate));
      }), this.visualElement.render());
    }));
    return () => {
      h(), o(), d(), g && g(), r && r();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: r = !1, dragPropagation: u = !1, dragConstraints: f = !1, dragElastic: d = Lm, dragMomentum: h = !0 } = i;
    return {
      ...i,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: u,
      dragConstraints: f,
      dragElastic: d,
      dragMomentum: h
    };
  }
}
function nS(n) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    n();
  };
}
function eN(n, i, o) {
  const r = px(n, nS(o)), u = px(i, nS(o));
  return () => {
    r(), u();
  };
}
function Yu(n, i, o) {
  return (i === !0 || i === n) && (o === null || o === n);
}
function nN(n, i = 10) {
  let o = null;
  return Math.abs(n.y) > i ? o = "y" : Math.abs(n.x) > i && (o = "x"), o;
}
class iN extends _a {
  constructor(i) {
    super(i), this.removeGroupControls = $n, this.removeListeners = $n, this.controls = new tN(i);
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $n;
  }
  update() {
    const { dragControls: i } = this.node.getProps(), { dragControls: o } = this.node.prevProps || {};
    i !== o && (this.removeGroupControls(), i && (this.removeGroupControls = i.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Zh = (n) => (i, o) => {
  n && Ft.update(() => n(i, o), !1, !0);
};
class aN extends _a {
  constructor() {
    super(...arguments), this.removePointerDownListener = $n;
  }
  onPointerDown(i) {
    this.session = new Vw(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Lw(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: o, onPan: r, onPanEnd: u } = this.node.getProps();
    return {
      onSessionStart: Zh(i),
      onStart: Zh(o),
      onMove: Zh(r),
      onEnd: (f, d) => {
        delete this.session, u && Ft.postRender(() => u(f, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Zr(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Qh = !1;
class oN extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: i, layoutGroup: o, switchLayoutGroup: r, layoutId: u } = this.props, { projection: f } = i;
    f && (o.group && o.group.add(f), r && r.register && u && r.register(f), Qh && f.root.didUpdate(), f.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), f.setOptions({
      ...f.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), cc.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: o, visualElement: r, drag: u, isPresent: f } = this.props, { projection: d } = r;
    return d && (d.isPresent = f, i.layoutDependency !== o && d.setOptions({
      ...d.options,
      layoutDependency: o
    }), Qh = !0, u || i.layoutDependency !== o || o === void 0 || i.isPresent !== f ? d.willUpdate() : this.safeToRemove(), i.isPresent !== f && (f ? d.promote() : d.relegate() || Ft.postRender(() => {
      const h = d.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: i, layoutAnchor: o } = this.props, { projection: r } = i;
    r && (r.options.layoutAnchor = o, r.root.didUpdate(), zp.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: u } = i;
    Qh = !0, u && (u.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(u), r && r.deregister && r.deregister(u));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function Pw(n) {
  const [i, o] = f_(), r = x.useContext(n1);
  return w.jsx(oN, { ...n, layoutGroup: r, switchLayoutGroup: x.useContext(zw), isPresent: i, safeToRemove: o });
}
const sN = {
  pan: {
    Feature: aN
  },
  drag: {
    Feature: iN,
    ProjectionNode: Rw,
    MeasureLayout: Pw
  }
};
function iS(n, i, o) {
  const { props: r } = n;
  n.animationState && r.whileHover && n.animationState.setActive("whileHover", o === "Start");
  const u = "onHover" + o, f = r[u];
  f && Ft.postRender(() => f(i, Uc(i)));
}
class rN extends _a {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = qO(i, (o, r) => (iS(this.node, r, "Start"), (u) => iS(this.node, u, "End"))));
  }
  unmount() {
  }
}
class lN extends _a {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = rl(il(this.node.current, "focus", () => this.onFocus()), il(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function aS(n, i, o) {
  const { props: r } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled)
    return;
  n.animationState && r.whileTap && n.animationState.setActive("whileTap", o === "Start");
  const u = "onTap" + (o === "End" ? "" : o), f = r[u];
  f && Ft.postRender(() => f(i, Uc(i)));
}
class uN extends _a {
  mount() {
    const { current: i } = this.node;
    if (!i)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = ZO(i, (u, f) => (aS(this.node, f, "Start"), (d, { success: h }) => aS(this.node, d, h ? "End" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: r?.tap === !1
    });
  }
  unmount() {
  }
}
const Vm = /* @__PURE__ */ new WeakMap(), $h = /* @__PURE__ */ new WeakMap(), cN = (n) => {
  const i = Vm.get(n.target);
  i && i(n);
}, fN = (n) => {
  n.forEach(cN);
};
function dN({ root: n, ...i }) {
  const o = n || document;
  $h.has(o) || $h.set(o, {});
  const r = $h.get(o), u = JSON.stringify(i);
  return r[u] || (r[u] = new IntersectionObserver(fN, { root: n, ...i })), r[u];
}
function hN(n, i, o) {
  const r = dN(i);
  return Vm.set(n, o), r.observe(n), () => {
    Vm.delete(n), r.unobserve(n);
  };
}
const mN = {
  some: 0,
  all: 1
};
class pN extends _a {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: i = {} } = this.node.getProps(), { root: o, margin: r, amount: u = "some", once: f } = i, d = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof u == "number" ? u : mN[u]
    }, h = (g) => {
      const { isIntersecting: p } = g;
      if (this.isInView === p || (this.isInView = p, f && !p && this.hasEnteredView))
        return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const { onViewportEnter: y, onViewportLeave: m } = this.node.getProps(), b = p ? y : m;
      b && b(g);
    };
    this.stopObserver = hN(this.node.current, d, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(gN(i, o)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function gN({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (o) => n[o] !== i[o];
}
const vN = {
  inView: {
    Feature: pN
  },
  tap: {
    Feature: uN
  },
  focus: {
    Feature: lN
  },
  hover: {
    Feature: rN
  }
}, yN = {
  layout: {
    ProjectionNode: Rw,
    MeasureLayout: Pw
  }
}, bN = {
  ...I_,
  ...vN,
  ...sN,
  ...yN
}, xN = /* @__PURE__ */ B_(bN, P_);
function Uw(n) {
  const i = Nc(() => Da(n)), { isStatic: o } = x.useContext(Ms);
  if (o) {
    const [, r] = x.useState(n);
    x.useEffect(() => i.on("change", r), []);
  }
  return i;
}
function Hw(n, i) {
  const o = Uw(i()), r = () => o.set(i());
  return r(), hm(() => {
    const u = () => Ft.preRender(r, !1, !0), f = n.map((d) => d.on("change", u));
    return () => {
      f.forEach((d) => d()), xi(r);
    };
  }), o;
}
function SN(n) {
  Xr.current = [], n();
  const i = Hw(Xr.current, n);
  return Xr.current = void 0, i;
}
function kw(n, i, o, r) {
  if (typeof n == "function")
    return SN(n);
  const f = typeof i == "function" ? i : oM(i, o, r), d = Array.isArray(n) ? oS(n, f) : oS([n], ([g]) => f(g)), h = Array.isArray(n) ? void 0 : n.accelerate;
  return h && !h.isTransformed && typeof i != "function" && Array.isArray(o) && r?.clamp !== !1 && (d.accelerate = {
    ...h,
    times: [0, ...i, 1],
    keyframes: [
      o[0],
      ...o,
      o[o.length - 1]
    ],
    isTransformed: !0
  }), d;
}
function oS(n, i) {
  const o = Nc(() => []);
  return Hw(n, () => {
    o.length = 0;
    const r = n.length;
    for (let u = 0; u < r; u++)
      o[u] = n[u].get();
    return i(o);
  });
}
function wN(n, i, o) {
  const { isStatic: r } = x.useContext(Ms), u = () => Ce(n) ? n.get() : n;
  if (r)
    return kw(u);
  const f = Uw(u());
  return x.useInsertionEffect(() => o(f, n, i), [f, JSON.stringify(i)]), f;
}
function TN(n, i = {}) {
  return wN(n, i, lM);
}
function EN() {
  !Vp.current && cw();
  const [n] = x.useState(Tc.current);
  return n;
}
const CN = xN;
var Bs = e1();
const AN = /* @__PURE__ */ t1(Bs);
function RN(n) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", i.appendChild(o), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n));
}
const DN = (n) => {
  switch (n) {
    case "success":
      return _N;
    case "info":
      return zN;
    case "warning":
      return NN;
    case "error":
      return jN;
    default:
      return null;
  }
}, ON = Array(12).fill(0), MN = ({ visible: n, className: i }) => /* @__PURE__ */ st.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    i
  ].filter(Boolean).join(" "),
  "data-visible": n
}, /* @__PURE__ */ st.createElement("div", {
  className: "sonner-spinner"
}, ON.map((o, r) => /* @__PURE__ */ st.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), _N = /* @__PURE__ */ st.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ st.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), NN = /* @__PURE__ */ st.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ st.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), zN = /* @__PURE__ */ st.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ st.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), jN = /* @__PURE__ */ st.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ st.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), LN = /* @__PURE__ */ st.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /* @__PURE__ */ st.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ st.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), VN = () => {
  const [n, i] = st.useState(document.hidden);
  return st.useEffect(() => {
    const o = () => {
      i(document.hidden);
    };
    return document.addEventListener("visibilitychange", o), () => document.removeEventListener("visibilitychange", o);
  }, []), n;
};
let BN = 1;
const PN = 100, sS = (n) => {
  var i;
  return typeof n?.id == "number" || (n == null || (i = n.id) == null ? void 0 : i.length) > 0 ? n.id : BN++;
};
class UN {
  constructor() {
    this.subscribe = (i) => (this.subscribers.push(i), this.getActiveToasts().forEach((o) => i(o)), () => {
      const o = this.subscribers.indexOf(i);
      this.subscribers.splice(o, 1);
    }), this.publish = (i) => {
      this.subscribers.forEach((o) => o(i));
    }, this.addToast = (i) => {
      this.publish(i), this.toasts = [
        ...this.toasts,
        i
      ], this.trimHistory();
    }, this.trimHistory = () => {
      let i = this.toasts.length - PN;
      i <= 0 || (this.toasts = this.toasts.filter((o) => i > 0 && this.dismissedToasts.has(o.id) ? (this.dismissedToasts.delete(o.id), i--, !1) : !0));
    }, this.create = (i) => {
      const { message: o, ...r } = i, u = sS(i), f = this.pendingDismissals.get(u);
      f !== void 0 && (cancelAnimationFrame(f), this.pendingDismissals.delete(u), this.dismissedToasts.delete(u));
      const d = this.dismissedToasts.has(u), h = i.dismissible === void 0 ? !0 : i.dismissible;
      return d && (this.dismissedToasts.delete(u), this.toasts = this.toasts.filter((p) => p.id !== u)), (d ? void 0 : this.toasts.find((p) => p.id === u)) ? this.toasts = this.toasts.map((p) => p.id === u ? (this.publish({
        ...p,
        ...i,
        id: u,
        title: o
      }), {
        ...p,
        ...i,
        id: u,
        dismissible: h,
        title: o
      }) : p) : this.addToast({
        title: o,
        ...r,
        dismissible: h,
        id: u
      }), u;
    }, this.dismiss = (i) => {
      if (i == null)
        return this.getActiveToasts().forEach((r) => {
          this.dismissedToasts.add(r.id), this.subscribers.forEach((u) => u({
            id: r.id,
            dismiss: !0
          }));
        }), i;
      this.dismissedToasts.add(i);
      const o = this.pendingDismissals.get(i);
      return o !== void 0 && cancelAnimationFrame(o), this.pendingDismissals.set(i, requestAnimationFrame(() => {
        this.pendingDismissals.delete(i), this.subscribers.forEach((r) => r({
          id: i,
          dismiss: !0
        }));
      })), i;
    }, this.message = (i, o) => this.create({
      ...o,
      message: i,
      type: void 0
    }), this.error = (i, o) => this.create({
      ...o,
      message: i,
      type: "error"
    }), this.success = (i, o) => this.create({
      ...o,
      type: "success",
      message: i
    }), this.info = (i, o) => this.create({
      ...o,
      type: "info",
      message: i
    }), this.warning = (i, o) => this.create({
      ...o,
      type: "warning",
      message: i
    }), this.loading = (i, o) => this.create({
      ...o,
      type: "loading",
      message: i
    }), this.promise = (i, o) => {
      if (!o)
        return;
      let r;
      o.loading !== void 0 && (r = this.create({
        ...o,
        promise: i,
        type: "loading",
        message: o.loading,
        description: typeof o.description != "function" ? o.description : void 0
      }));
      const u = Promise.resolve(i instanceof Function ? i() : i);
      let f = r !== void 0, d;
      const h = u.then(async (p) => {
        if (d = [
          "resolve",
          p
        ], st.isValidElement(p))
          f = !1, this.create({
            id: r,
            type: "default",
            message: p
          });
        else if (kN(p) && !p.ok) {
          f = !1;
          const m = typeof o.error == "function" ? await o.error(`HTTP error! status: ${p.status}`) : o.error, b = typeof o.description == "function" ? await o.description(`HTTP error! status: ${p.status}`) : o.description, T = typeof m == "object" && !st.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: r,
            type: "error",
            description: b,
            ...T
          });
        } else if (p instanceof Error) {
          f = !1;
          const m = typeof o.error == "function" ? await o.error(p) : o.error, b = typeof o.description == "function" ? await o.description(p) : o.description, T = typeof m == "object" && !st.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: r,
            type: "error",
            description: b,
            ...T
          });
        } else if (o.success !== void 0) {
          f = !1;
          const m = typeof o.success == "function" ? await o.success(p) : o.success, b = typeof o.description == "function" ? await o.description(p) : o.description, T = typeof m == "object" && !st.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: r,
            type: "success",
            description: b,
            ...T
          });
        }
      }).catch(async (p) => {
        if (d = [
          "reject",
          p
        ], o.error !== void 0) {
          f = !1;
          const y = typeof o.error == "function" ? await o.error(p) : o.error, m = typeof o.description == "function" ? await o.description(p) : o.description, E = typeof y == "object" && !st.isValidElement(y) ? y : {
            message: y
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...E
          });
        }
      }).finally(() => {
        f && (this.dismiss(r), r = void 0), o.finally == null || o.finally.call(o);
      }), g = () => new Promise((p, y) => h.then(() => d[0] === "reject" ? y(d[1]) : p(d[1])).catch(y));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: g
      } : Object.assign(r, {
        unwrap: g
      });
    }, this.custom = (i, o) => {
      const r = sS(o);
      return this.create({
        ...o,
        jsx: i(r),
        id: r,
        type: void 0
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((i) => !this.dismissedToasts.has(i.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set(), this.pendingDismissals = /* @__PURE__ */ new Map();
  }
}
const ln = new UN(), HN = (n, i) => ln.message(n, i), kN = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", IN = HN, qN = () => ln.toasts, GN = () => ln.getActiveToasts(), Ea = Object.assign(IN, {
  success: ln.success,
  info: ln.info,
  warning: ln.warning,
  error: ln.error,
  custom: ln.custom,
  message: ln.message,
  promise: ln.promise,
  dismiss: ln.dismiss,
  loading: ln.loading
}, {
  getHistory: qN,
  getToasts: GN
});
RN("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Fu(n) {
  return n.label !== void 0;
}
const YN = 3, FN = "24px", XN = "16px", rS = 4e3, KN = 356, ZN = 14, QN = 45, $N = 200;
function hi(...n) {
  return n.filter(Boolean).join(" ");
}
function JN(n) {
  const [i, o] = n.split("-"), r = [];
  return i && r.push(i), o && r.push(o), r;
}
const WN = (n) => {
  var i, o, r, u, f, d, h, g, p;
  const { invert: y, toast: m, unstyled: b, interacting: E, setHeights: T, visibleToasts: R, heights: C, index: A, toasts: _, expanded: D, removeToast: M, defaultRichColors: H, closeButton: I, style: j, cancelButtonStyle: z, actionButtonStyle: K, className: tt = "", descriptionClassName: ft = "", duration: at, position: J, gap: ct, expandByDefault: dt, classNames: G, icons: X, closeButtonAriaLabel: $ = "Close toast" } = n, [nt, F] = st.useState(null), [xt, wt] = st.useState(null), [Mt, N] = st.useState(!1), [Y, W] = st.useState(!1), [lt, ot] = st.useState(!1), [et, yt] = st.useState(!1), [it, rt] = st.useState(!1), [Rt, ae] = st.useState(0), [le, je] = st.useState(0), Qt = st.useRef(m.duration || at || rS), Bt = st.useRef(null), fe = st.useRef(null), Va = A === 0, ti = A + 1 <= R, de = m.type, Ba = de ?? "default", fn = m.dismissible !== !1, ks = m.className || "", Ao = m.descriptionClassName || "", Zi = st.useMemo(() => C.findIndex((Tt) => Tt.toastId === m.id) || 0, [
    C,
    m.id
  ]), ml = st.useMemo(() => {
    var Tt;
    return (Tt = m.closeButton) != null ? Tt : I;
  }, [
    m.closeButton,
    I
  ]), Bn = st.useMemo(() => m.duration || at || rS, [
    m.duration,
    at
  ]), Pa = st.useRef(0), ei = st.useRef(0), pl = st.useRef(0), Ti = st.useRef(null), [Is, qs] = J.split("-"), Ro = st.useMemo(() => C.reduce((Tt, he, oe) => oe >= Zi ? Tt : Tt + he.height, 0), [
    C,
    Zi
  ]), gl = VN(), wn = st.useMemo(() => {
    var Tt;
    return (Tt = n.swipeDirections) != null ? Tt : JN(J);
  }, [
    n.swipeDirections,
    J
  ]), Fe = m.invert || y, Gs = de === "loading";
  ei.current = st.useMemo(() => Zi * ct + Ro, [
    Zi,
    Ro
  ]), st.useEffect(() => {
    Qt.current = Bn;
  }, [
    Bn
  ]), st.useEffect(() => {
    N(!0);
  }, []), st.useEffect(() => {
    const Tt = fe.current;
    if (Tt) {
      const he = Tt.getBoundingClientRect().height;
      return je(he), T((oe) => [
        {
          toastId: m.id,
          height: he,
          position: m.position
        },
        ...oe
      ]), () => T((oe) => oe.filter((Xt) => Xt.toastId !== m.id));
    }
  }, [
    T,
    m.id
  ]), st.useLayoutEffect(() => {
    if (!Mt) return;
    const Tt = fe.current, he = Tt.style.height;
    Tt.style.height = "auto";
    const oe = Tt.getBoundingClientRect().height;
    Tt.style.height = he, je(oe), T((Xt) => Xt.find((Ht) => Ht.toastId === m.id) ? Xt.map((Ht) => Ht.toastId === m.id ? {
      ...Ht,
      height: oe
    } : Ht) : [
      {
        toastId: m.id,
        height: oe,
        position: m.position
      },
      ...Xt
    ]);
  }, [
    Mt,
    m.title,
    m.description,
    T,
    m.id,
    m.jsx,
    m.action,
    m.cancel
  ]);
  const Pn = st.useCallback(() => {
    W(!0), ae(ei.current), T((Tt) => Tt.filter((he) => he.toastId !== m.id)), setTimeout(() => {
      M(m);
    }, $N);
  }, [
    m,
    M,
    T,
    ei
  ]);
  st.useEffect(() => {
    if (m.promise && de === "loading" || m.duration === 1 / 0 || m.type === "loading") return;
    let Tt;
    return D || E || gl ? (() => {
      if (pl.current < Pa.current) {
        const Xt = (/* @__PURE__ */ new Date()).getTime() - Pa.current;
        Qt.current = Qt.current - Xt;
      }
      pl.current = (/* @__PURE__ */ new Date()).getTime();
    })() : Qt.current !== 1 / 0 && (Pa.current = (/* @__PURE__ */ new Date()).getTime(), Tt = setTimeout(() => {
      m.onAutoClose == null || m.onAutoClose.call(m, m), Pn();
    }, Qt.current)), () => clearTimeout(Tt);
  }, [
    D,
    E,
    m,
    de,
    gl,
    Pn
  ]), st.useEffect(() => {
    m.delete && (Pn(), m.onDismiss == null || m.onDismiss.call(m, m));
  }, [
    Pn,
    m.delete
  ]);
  function Ys() {
    var Tt;
    if (X?.loading) {
      var he;
      return /* @__PURE__ */ st.createElement("div", {
        className: hi(G?.loader, m == null || (he = m.classNames) == null ? void 0 : he.loader, "sonner-loader"),
        "data-visible": de === "loading"
      }, X.loading);
    }
    return /* @__PURE__ */ st.createElement(MN, {
      className: hi(G?.loader, m == null || (Tt = m.classNames) == null ? void 0 : Tt.loader),
      visible: de === "loading"
    });
  }
  const Do = m.icon || X?.[de] || DN(de);
  var vl, Fs;
  return /* @__PURE__ */ st.createElement("li", {
    tabIndex: 0,
    ref: fe,
    className: hi(tt, ks, G?.toast, m == null || (i = m.classNames) == null ? void 0 : i.toast, G?.[Ba], m == null || (o = m.classNames) == null ? void 0 : o[Ba]),
    "data-sonner-toast": "",
    "data-rich-colors": (vl = m.richColors) != null ? vl : H,
    "data-styled": !(m.jsx || m.unstyled || b),
    "data-mounted": Mt,
    "data-promise": !!m.promise,
    "data-swiped": it,
    "data-removed": Y,
    "data-visible": ti,
    "data-y-position": Is,
    "data-x-position": qs,
    "data-index": A,
    "data-front": Va,
    "data-swiping": lt,
    "data-dismissible": fn,
    "data-type": de,
    "data-invert": Fe,
    "data-swipe-out": et,
    "data-swipe-direction": xt,
    "data-expanded": !!(D || dt && Mt),
    "data-testid": m.testId,
    style: {
      "--index": A,
      "--toasts-before": A,
      "--z-index": _.length - A,
      "--offset": `${Y ? Rt : ei.current}px`,
      "--initial-height": dt ? "auto" : `${le}px`,
      ...j,
      ...m.style
    },
    onDragEnd: () => {
      ot(!1), F(null), Ti.current = null;
    },
    onPointerDown: (Tt) => {
      Tt.button !== 2 && (Gs || !fn || (Bt.current = /* @__PURE__ */ new Date(), ae(ei.current), Tt.target.setPointerCapture(Tt.pointerId), Tt.target.tagName !== "BUTTON" && (ot(!0), Ti.current = {
        x: Tt.clientX,
        y: Tt.clientY
      })));
    },
    onPointerUp: () => {
      var Tt, he, oe;
      if (et || !fn) return;
      Ti.current = null;
      const Xt = Number(((Tt = fe.current) == null ? void 0 : Tt.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), We = Number(((he = fe.current) == null ? void 0 : he.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ht = (/* @__PURE__ */ new Date()).getTime() - ((oe = Bt.current) == null ? void 0 : oe.getTime()), tn = nt === "x" ? Xt : We, Tn = Math.abs(tn) / Ht;
      if ((nt === "x" ? wn.includes(Xt > 0 ? "right" : "left") : wn.includes(We > 0 ? "bottom" : "top")) && (Math.abs(tn) >= QN || Tn > 0.11)) {
        ae(ei.current), m.onDismiss == null || m.onDismiss.call(m, m), wt(nt === "x" ? Xt > 0 ? "right" : "left" : We > 0 ? "down" : "up"), Pn(), yt(!0);
        return;
      } else {
        var Xe, Qi;
        (Xe = fe.current) == null || Xe.style.setProperty("--swipe-amount-x", "0px"), (Qi = fe.current) == null || Qi.style.setProperty("--swipe-amount-y", "0px");
      }
      rt(!1), ot(!1), F(null);
    },
    onPointerMove: (Tt) => {
      var he, oe, Xt;
      if (!Ti.current || !fn || ((he = window.getSelection()) == null ? void 0 : he.toString().length) > 0) return;
      const Ht = Tt.clientY - Ti.current.y, tn = Tt.clientX - Ti.current.x;
      !nt && (Math.abs(tn) > 1 || Math.abs(Ht) > 1) && F(Math.abs(tn) > Math.abs(Ht) ? "x" : "y");
      let Tn = {
        x: 0,
        y: 0
      };
      const Xs = (Xe) => 1 / (1.5 + Math.abs(Xe) / 20);
      if (nt === "y") {
        if (wn.includes("top") || wn.includes("bottom"))
          if (wn.includes("top") && Ht < 0 || wn.includes("bottom") && Ht > 0)
            Tn.y = Ht;
          else {
            const Xe = Ht * Xs(Ht);
            Tn.y = Math.abs(Xe) < Math.abs(Ht) ? Xe : Ht;
          }
      } else if (nt === "x" && (wn.includes("left") || wn.includes("right")))
        if (wn.includes("left") && tn < 0 || wn.includes("right") && tn > 0)
          Tn.x = tn;
        else {
          const Xe = tn * Xs(tn);
          Tn.x = Math.abs(Xe) < Math.abs(tn) ? Xe : tn;
        }
      (Math.abs(Tn.x) > 0 || Math.abs(Tn.y) > 0) && rt(!0), (oe = fe.current) == null || oe.style.setProperty("--swipe-amount-x", `${Tn.x}px`), (Xt = fe.current) == null || Xt.style.setProperty("--swipe-amount-y", `${Tn.y}px`);
    }
  }, ml && !m.jsx && de !== "loading" ? /* @__PURE__ */ st.createElement("button", {
    "aria-label": $,
    "data-disabled": Gs,
    "data-close-button": !0,
    onClick: Gs || !fn ? () => {
    } : () => {
      Pn(), m.onDismiss == null || m.onDismiss.call(m, m);
    },
    className: hi(G?.closeButton, m == null || (r = m.classNames) == null ? void 0 : r.closeButton)
  }, (Fs = X?.close) != null ? Fs : LN) : null, (de || m.icon || m.promise) && m.icon !== null && (X?.[de] !== null || m.icon) ? /* @__PURE__ */ st.createElement("div", {
    "data-icon": "",
    className: hi(G?.icon, m == null || (u = m.classNames) == null ? void 0 : u.icon)
  }, de === "loading" ? m.icon || Ys() : m.promise ? Ys() : null, de !== "loading" ? Do : null) : null, /* @__PURE__ */ st.createElement("div", {
    "data-content": "",
    className: hi(G?.content, m == null || (f = m.classNames) == null ? void 0 : f.content)
  }, /* @__PURE__ */ st.createElement("div", {
    "data-title": "",
    className: hi(G?.title, m == null || (d = m.classNames) == null ? void 0 : d.title)
  }, m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title), m.description ? /* @__PURE__ */ st.createElement("div", {
    "data-description": "",
    className: hi(ft, Ao, G?.description, m == null || (h = m.classNames) == null ? void 0 : h.description)
  }, typeof m.description == "function" ? m.description() : m.description) : null), /* @__PURE__ */ st.isValidElement(m.cancel) ? m.cancel : m.cancel && Fu(m.cancel) ? /* @__PURE__ */ st.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: m.cancelButtonStyle || z,
    onClick: (Tt) => {
      Fu(m.cancel) && fn && (m.cancel.onClick == null || m.cancel.onClick.call(m.cancel, Tt), Pn());
    },
    className: hi(G?.cancelButton, m == null || (g = m.classNames) == null ? void 0 : g.cancelButton)
  }, m.cancel.label) : null, /* @__PURE__ */ st.isValidElement(m.action) ? m.action : m.action && Fu(m.action) ? /* @__PURE__ */ st.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: m.actionButtonStyle || K,
    onClick: (Tt) => {
      Fu(m.action) && (m.action.onClick == null || m.action.onClick.call(m.action, Tt), !Tt.defaultPrevented && Pn());
    },
    className: hi(G?.actionButton, m == null || (p = m.classNames) == null ? void 0 : p.actionButton)
  }, m.action.label) : null);
};
function lS() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function t3(n, i) {
  const o = {};
  return [
    n,
    i
  ].forEach((r, u) => {
    const f = u === 1, d = f ? "--mobile-offset" : "--offset", h = f ? XN : FN;
    function g(p) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((y) => {
        o[`${d}-${y}`] = typeof p == "number" ? `${p}px` : p;
      });
    }
    typeof r == "number" || typeof r == "string" ? g(r) : typeof r == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((p) => {
      r[p] === void 0 ? o[`${d}-${p}`] = h : o[`${d}-${p}`] = typeof r[p] == "number" ? `${r[p]}px` : r[p];
    }) : g(h);
  }), o;
}
const e3 = /* @__PURE__ */ st.forwardRef(function(i, o) {
  const { id: r, invert: u, position: f = "bottom-right", hotkey: d = [
    "altKey",
    "KeyT"
  ], expand: h, closeButton: g, className: p, offset: y, mobileOffset: m, theme: b = "light", richColors: E, duration: T, style: R, visibleToasts: C = YN, toastOptions: A, dir: _ = lS(), gap: D = ZN, icons: M, customAriaLabel: H, containerAriaLabel: I = "Notifications" } = i, [j, z] = st.useState([]), K = st.useMemo(() => r ? j.filter((N) => N.toasterId === r) : j.filter((N) => !N.toasterId), [
    j,
    r
  ]), tt = st.useMemo(() => Array.from(new Set([
    f
  ].concat(K.filter((N) => N.position).map((N) => N.position)))), [
    K,
    f
  ]), [ft, at] = st.useState([]), [J, ct] = st.useState(!1), [dt, G] = st.useState(!1), [X, $] = st.useState(b !== "system" ? b : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), nt = st.useRef(null), F = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""), xt = st.useRef(null), wt = st.useRef(!1), Mt = st.useCallback((N) => {
    z((Y) => {
      var W;
      return (W = Y.find((lt) => lt.id === N.id)) != null && W.delete || ln.dismiss(N.id), Y.filter(({ id: lt }) => lt !== N.id);
    });
  }, []);
  return st.useEffect(() => ln.subscribe((N) => {
    if (N.dismiss) {
      requestAnimationFrame(() => {
        z((Y) => Y.map((W) => W.id === N.id ? {
          ...W,
          delete: !0
        } : W));
      });
      return;
    }
    setTimeout(() => {
      AN.flushSync(() => {
        z((Y) => {
          const W = Y.findIndex((lt) => lt.id === N.id);
          return W !== -1 ? [
            ...Y.slice(0, W),
            {
              ...Y[W],
              ...N
            },
            ...Y.slice(W + 1)
          ] : [
            N,
            ...Y
          ];
        });
      });
    });
  }), []), st.useEffect(() => {
    if (b !== "system") {
      $(b);
      return;
    }
    if (b === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")), typeof window > "u") return;
    const N = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      N.addEventListener("change", ({ matches: Y }) => {
        $(Y ? "dark" : "light");
      });
    } catch {
      N.addListener(({ matches: W }) => {
        try {
          $(W ? "dark" : "light");
        } catch (lt) {
          console.error(lt);
        }
      });
    }
  }, [
    b
  ]), st.useEffect(() => {
    j.length <= 1 && ct(!1);
  }, [
    j
  ]), st.useEffect(() => {
    const N = (Y) => {
      var W;
      if (d.length > 0 && d.every((et) => Y[et] || Y.code === et)) {
        var ot;
        ct(!0), (ot = nt.current) == null || ot.focus();
      }
      Y.code === "Escape" && (document.activeElement === nt.current || (W = nt.current) != null && W.contains(document.activeElement)) && ct(!1);
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [
    d
  ]), st.useEffect(() => {
    if (nt.current)
      return () => {
        xt.current && (xt.current.focus({
          preventScroll: !0
        }), xt.current = null, wt.current = !1);
      };
  }, [
    nt.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ st.createElement("section", {
    ref: o,
    "aria-label": H ?? `${I} ${F}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0,
    "data-react-aria-top-layer": !0
  }, tt.map((N, Y) => {
    var W;
    const [lt, ot] = N.split("-");
    return K.length ? /* @__PURE__ */ st.createElement("ol", {
      key: N,
      dir: _ === "auto" ? lS() : _,
      tabIndex: -1,
      ref: nt,
      className: p,
      "data-sonner-toaster": !0,
      "data-sonner-theme": X,
      "data-y-position": lt,
      "data-x-position": ot,
      style: {
        "--front-toast-height": `${((W = ft[0]) == null ? void 0 : W.height) || 0}px`,
        "--width": `${KN}px`,
        "--gap": `${D}px`,
        ...R,
        ...t3(y, m)
      },
      onBlur: (et) => {
        wt.current && !et.currentTarget.contains(et.relatedTarget) && (wt.current = !1, xt.current && (xt.current.focus({
          preventScroll: !0
        }), xt.current = null));
      },
      onFocus: (et) => {
        et.target instanceof HTMLElement && et.target.dataset.dismissible === "false" || wt.current || (wt.current = !0, xt.current = et.relatedTarget);
      },
      onMouseEnter: () => ct(!0),
      onMouseMove: () => ct(!0),
      onMouseLeave: () => {
        dt || ct(!1);
      },
      onDragEnd: () => ct(!1),
      onPointerDown: (et) => {
        et.target instanceof HTMLElement && et.target.dataset.dismissible === "false" || G(!0);
      },
      onPointerUp: () => G(!1)
    }, K.filter((et) => !et.position && Y === 0 || et.position === N).map((et, yt) => {
      var it, rt;
      return /* @__PURE__ */ st.createElement(WN, {
        key: et.id,
        icons: M,
        index: yt,
        toast: et,
        defaultRichColors: E,
        duration: (it = A?.duration) != null ? it : T,
        className: A?.className,
        descriptionClassName: A?.descriptionClassName,
        invert: u,
        visibleToasts: C,
        closeButton: (rt = A?.closeButton) != null ? rt : g,
        interacting: dt,
        position: N,
        style: A?.style,
        unstyled: A?.unstyled,
        classNames: A?.classNames,
        cancelButtonStyle: A?.cancelButtonStyle,
        actionButtonStyle: A?.actionButtonStyle,
        closeButtonAriaLabel: A?.closeButtonAriaLabel,
        removeToast: Mt,
        toasts: K.filter((Rt) => Rt.position == et.position),
        heights: ft.filter((Rt) => Rt.position == et.position),
        setHeights: at,
        expandByDefault: h,
        gap: D,
        expanded: J,
        swipeDirections: i.swipeDirections
      });
    })) : null;
  }));
});
const n3 = (n) => n?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function i3(n, i, o = []) {
  if (i == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: n3(n),
    size: 24,
    node: i,
    ...o.length > 0 ? { aliases: o } : {}
  };
}
const a3 = (n) => {
  let i = "", o = !1;
  for (const r of n) {
    if (r === "-" || r === "_" || r <= " ") {
      o = i.length > 0;
      continue;
    }
    i.length === 0 ? i += r.toLowerCase() : i += o ? r.toUpperCase() : r, o = !1;
  }
  return i;
};
const o3 = (n) => {
  const i = a3(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
const Bm = (...n) => n.filter((i, o, r) => !!i && i.trim() !== "" && r.indexOf(i) === o).join(" ").trim();
const lo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Jh(n) {
  return n != null;
}
function s3(n, i = {}) {
  const o = i.attributeNames ?? {}, r = (b) => o[b] ?? b, u = n.size ?? n.width ?? lo.width, f = n.size ?? n.height ?? lo.height, d = n.aliases?.filter((b) => typeof b == "string" && b.trim() !== "").map((b) => `lucide-${b}`) ?? [], h = [...n.name ? [`lucide-${n.name}`] : [], ...d], g = i.className?.split(" ").filter(Boolean) ?? [], p = i.includeDefaultClasses === !1 ? Bm(...g) : Bm("lucide", ...h, ...g), y = i.absoluteStrokeWidth ? Number(i.strokeWidth ?? lo["stroke-width"]) * Number(n.size ?? n.width ?? lo.width) / Number(i.size ?? i.width ?? lo.width) : i.strokeWidth ?? lo["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(lo).reduce((b, [E, T]) => (b[r(E)] = T, b), {}),
      ..."color" in i && i.color && {
        [r("stroke")]: i.color
      },
      ..."size" in i && Jh(i.size) && {
        [r("width")]: i.size,
        [r("height")]: i.size
      },
      ..."width" in i && Jh(i.width) && {
        [r("width")]: i.width
      },
      ..."height" in i && Jh(i.height) && {
        [r("height")]: i.height
      },
      [r("stroke-width")]: y,
      ...p && {
        [r("class")]: p
      },
      [r("viewBox")]: `0 0 ${u} ${f}`,
      ...i.hasA11yProp === !1 ? {
        [r("aria-hidden")]: "true"
      } : {},
      ..."attributes" in i && i.attributes
    },
    n.node.map((b) => {
      const [E, T, R] = b, C = i.nonScalingStroke ? { [r("vector-effect")]: "non-scaling-stroke", ...T } : T;
      return R ? [E, C, R] : [E, C];
    })
  ];
}
function r3(n, i = {}) {
  return s3(n, {
    ...i,
    attributeNames: {
      ...i.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}
const l3 = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
}, u3 = x.createContext({}), c3 = () => x.useContext(u3), f3 = x.forwardRef(
  ({
    color: n,
    size: i,
    width: o,
    height: r,
    strokeWidth: u,
    absoluteStrokeWidth: f,
    nonScalingStroke: d,
    className: h = "",
    children: g,
    iconNode: p = [],
    icon: y = {
      node: p,
      aliases: [],
      size: 24
    },
    ...m
  }, b) => {
    const {
      size: E = 24,
      strokeWidth: T = 2,
      absoluteStrokeWidth: R = !1,
      nonScalingStroke: C = !1,
      color: A = "currentColor",
      className: _ = ""
    } = c3() ?? {}, D = !!g || l3(m), [M, H, I = []] = r3(y, {
      color: n ?? A,
      width: o ?? i ?? E,
      height: r ?? i ?? E,
      strokeWidth: u ?? T,
      absoluteStrokeWidth: f ?? R,
      nonScalingStroke: d ?? C,
      className: Bm(_, h),
      hasA11yProp: D,
      attributes: m
    });
    return x.createElement(
      M,
      {
        ref: b,
        ...H
      },
      [
        ...I.map(([j, z]) => x.createElement(j, z)),
        ...Array.isArray(g) ? g : [g]
      ]
    );
  }
);
function Ae(n, i = [], o = []) {
  const r = typeof n == "string" ? i3(n, i, o) : n, u = x.forwardRef(
    ({ className: f, ...d }, h) => x.createElement(f3, {
      ref: h,
      icon: r,
      className: f,
      ...d
    })
  );
  return r.name && (u.displayName = o3(r.name)), u;
}
const Iw = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
Iw.node;
const Pm = Ae(Iw);
const qw = {
  name: "chart-column",
  size: 24,
  node: [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }]
  ],
  aliases: ["bar-chart-3"]
};
qw.node;
const Gw = Ae(qw);
const Yw = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
Yw.node;
const Fw = Ae(Yw);
const Xw = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
Xw.node;
const Hp = Ae(Xw);
const Kw = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
Kw.node;
const d3 = Ae(Kw);
const Zw = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
Zw.node;
const h3 = Ae(Zw);
const Qw = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
};
Qw.node;
const m3 = Ae(Qw);
const $w = {
  name: "circle",
  size: 24,
  node: [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]
};
$w.node;
const p3 = Ae($w);
const Jw = {
  name: "download",
  size: 24,
  node: [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ]
};
Jw.node;
const uS = Ae(Jw);
const Ww = {
  name: "loader-circle",
  size: 24,
  node: [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  aliases: ["loader-2"]
};
Ww.node;
const g3 = Ae(Ww);
const tT = {
  name: "play",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ]
};
tT.node;
const v3 = Ae(tT);
const eT = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
  ]
};
eT.node;
const y3 = Ae(eT);
const nT = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
nT.node;
const iT = Ae(nT);
const aT = {
  name: "settings-2",
  size: 24,
  node: [
    ["path", { d: "M14 17H5", key: "gfn3mx" }],
    ["path", { d: "M19 7h-9", key: "6i9tg" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
    ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
  ]
};
aT.node;
const b3 = Ae(aT);
const oT = {
  name: "shield-check",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ]
};
oT.node;
const x3 = Ae(oT);
const sT = {
  name: "square",
  size: 24,
  node: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]
};
sT.node;
const rT = Ae(sT);
const lT = {
  name: "triangle-alert",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["alert-triangle"]
};
lT.node;
const S3 = Ae(lT);
const uT = {
  name: "wand-sparkles",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
        key: "ul74o6"
      }
    ],
    ["path", { d: "m14 7 3 3", key: "1r5n42" }],
    ["path", { d: "M5 6v4", key: "ilb8ba" }],
    ["path", { d: "M19 14v4", key: "blhpug" }],
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M7 8H3", key: "zfb6yr" }],
    ["path", { d: "M21 16h-4", key: "1cnmox" }],
    ["path", { d: "M11 3H9", key: "1obp7u" }]
  ],
  aliases: ["wand-2"]
};
uT.node;
const w3 = Ae(uT);
const cT = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
cT.node;
const T3 = Ae(cT);
function fT(n) {
  var i, o, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var u = n.length;
    for (i = 0; i < u; i++) n[i] && (o = fT(n[i])) && (r && (r += " "), r += o);
  } else for (o in n) n[o] && (r && (r += " "), r += o);
  return r;
}
function dT() {
  for (var n, i, o = 0, r = "", u = arguments.length; o < u; o++) (n = arguments[o]) && (i = fT(n)) && (r && (r += " "), r += i);
  return r;
}
const cS = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, fS = dT, hT = (n, i) => (o) => {
  var r;
  if (i?.variants == null) return fS(n, o?.class, o?.className);
  const { variants: u, defaultVariants: f } = i, d = Object.keys(u).map((p) => {
    const y = o?.[p], m = f?.[p];
    if (y === null) return null;
    const b = cS(y) || cS(m);
    return u[p][b];
  }), h = o && Object.entries(o).reduce((p, y) => {
    let [m, b] = y;
    return b === void 0 || (p[m] = b), p;
  }, {}), g = i == null || (r = i.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((p, y) => {
    let { class: m, className: b, ...E } = y;
    return Object.entries(E).every((T) => {
      let [R, C] = T;
      return Array.isArray(C) ? C.includes({
        ...f,
        ...h
      }[R]) : {
        ...f,
        ...h
      }[R] === C;
    }) ? [
      ...p,
      m,
      b
    ] : p;
  }, []);
  return fS(n, d, g, o?.class, o?.className);
}, E3 = (n, i) => {
  const o = new Array(n.length + i.length);
  for (let r = 0; r < n.length; r++)
    o[r] = n[r];
  for (let r = 0; r < i.length; r++)
    o[n.length + r] = i[r];
  return o;
}, C3 = (n, i) => ({
  classGroupId: n,
  validator: i
}), mT = (n = /* @__PURE__ */ new Map(), i = null, o) => ({
  nextPart: n,
  validators: i,
  classGroupId: o
}), Rc = "-", dS = [], A3 = "arbitrary..", R3 = (n) => {
  const i = O3(n), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = n;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return D3(d);
      const h = d.split(Rc), g = h[0] === "" && h.length > 1 ? 1 : 0;
      return pT(h, g, i);
    },
    getConflictingClassGroupIds: (d, h) => {
      if (h) {
        const g = r[d], p = o[d];
        return g ? p ? E3(p, g) : g : p || dS;
      }
      return o[d] || dS;
    }
  };
}, pT = (n, i, o) => {
  if (n.length - i === 0)
    return o.classGroupId;
  const u = n[i], f = o.nextPart.get(u);
  if (f) {
    const p = pT(n, i + 1, f);
    if (p) return p;
  }
  const d = o.validators;
  if (d === null)
    return;
  const h = i === 0 ? n.join(Rc) : n.slice(i).join(Rc), g = d.length;
  for (let p = 0; p < g; p++) {
    const y = d[p];
    if (y.validator(h))
      return y.classGroupId;
  }
}, D3 = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const i = n.slice(1, -1), o = i.indexOf(":"), r = i.slice(0, o);
  return r ? A3 + r : void 0;
})(), O3 = (n) => {
  const {
    theme: i,
    classGroups: o
  } = n;
  return M3(o, i);
}, M3 = (n, i) => {
  const o = mT();
  for (const r in n) {
    const u = n[r];
    kp(u, o, r, i);
  }
  return o;
}, kp = (n, i, o, r) => {
  const u = n.length;
  for (let f = 0; f < u; f++) {
    const d = n[f];
    _3(d, i, o, r);
  }
}, _3 = (n, i, o, r) => {
  if (typeof n == "string") {
    N3(n, i, o);
    return;
  }
  if (typeof n == "function") {
    z3(n, i, o, r);
    return;
  }
  j3(n, i, o, r);
}, N3 = (n, i, o) => {
  const r = n === "" ? i : gT(i, n);
  r.classGroupId = o;
}, z3 = (n, i, o, r) => {
  if (L3(n)) {
    kp(n(r), i, o, r);
    return;
  }
  i.validators === null && (i.validators = []), i.validators.push(C3(o, n));
}, j3 = (n, i, o, r) => {
  const u = Object.entries(n), f = u.length;
  for (let d = 0; d < f; d++) {
    const [h, g] = u[d];
    kp(g, gT(i, h), o, r);
  }
}, gT = (n, i) => {
  let o = n;
  const r = i.split(Rc), u = r.length;
  for (let f = 0; f < u; f++) {
    const d = r[f];
    let h = o.nextPart.get(d);
    h || (h = mT(), o.nextPart.set(d, h)), o = h;
  }
  return o;
}, L3 = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, V3 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const u = (f, d) => {
    o[f] = d, i++, i > n && (i = 0, r = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(f) {
      let d = o[f];
      if (d !== void 0)
        return d;
      if ((d = r[f]) !== void 0)
        return u(f, d), d;
    },
    set(f, d) {
      f in o ? o[f] = d : u(f, d);
    }
  };
}, Um = "!", hS = ":", B3 = [], mS = (n, i, o, r, u) => ({
  modifiers: n,
  hasImportantModifier: i,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: u
}), P3 = (n) => {
  const {
    prefix: i,
    experimentalParseClassName: o
  } = n;
  let r = (u) => {
    const f = [];
    let d = 0, h = 0, g = 0, p;
    const y = u.length;
    for (let R = 0; R < y; R++) {
      const C = u[R];
      if (d === 0 && h === 0) {
        if (C === hS) {
          f.push(u.slice(g, R)), g = R + 1;
          continue;
        }
        if (C === "/") {
          p = R;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" ? d-- : C === "(" ? h++ : C === ")" && h--;
    }
    const m = f.length === 0 ? u : u.slice(g);
    let b = m, E = !1;
    m.endsWith(Um) ? (b = m.slice(0, -1), E = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(Um) && (b = m.slice(1), E = !0)
    );
    const T = p && p > g ? p - g : void 0;
    return mS(f, E, b, T);
  };
  if (i) {
    const u = i + hS, f = r;
    r = (d) => d.startsWith(u) ? f(d.slice(u.length)) : mS(B3, !1, d, void 0, !0);
  }
  if (o) {
    const u = r;
    r = (f) => o({
      className: f,
      parseClassName: u
    });
  }
  return r;
}, U3 = (n) => {
  const i = /* @__PURE__ */ new Map();
  return n.orderSensitiveModifiers.forEach((o, r) => {
    i.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let u = [];
    for (let f = 0; f < o.length; f++) {
      const d = o[f], h = d[0] === "[", g = i.has(d);
      h || g ? (u.length > 0 && (u.sort(), r.push(...u), u = []), r.push(d)) : u.push(d);
    }
    return u.length > 0 && (u.sort(), r.push(...u)), r;
  };
}, H3 = (n) => ({
  cache: V3(n.cacheSize),
  parseClassName: P3(n),
  sortModifiers: U3(n),
  postfixLookupClassGroupIds: k3(n),
  ...R3(n)
}), k3 = (n) => {
  const i = /* @__PURE__ */ Object.create(null), o = n.postfixLookupClassGroups;
  if (o)
    for (let r = 0; r < o.length; r++)
      i[o[r]] = !0;
  return i;
}, I3 = /\s+/, q3 = (n, i) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: u,
    sortModifiers: f,
    postfixLookupClassGroupIds: d
  } = i, h = [], g = n.trim().split(I3);
  let p = "";
  for (let y = g.length - 1; y >= 0; y -= 1) {
    const m = g[y], {
      isExternal: b,
      modifiers: E,
      hasImportantModifier: T,
      baseClassName: R,
      maybePostfixModifierPosition: C
    } = o(m);
    if (b) {
      p = m + (p.length > 0 ? " " + p : p);
      continue;
    }
    let A = !!C, _;
    if (A) {
      const j = R.substring(0, C);
      _ = r(j);
      const z = _ && d[_] ? r(R) : void 0;
      z && z !== _ && (_ = z, A = !1);
    } else
      _ = r(R);
    if (!_) {
      if (!A) {
        p = m + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (_ = r(R), !_) {
        p = m + (p.length > 0 ? " " + p : p);
        continue;
      }
      A = !1;
    }
    const D = E.length === 0 ? "" : E.length === 1 ? E[0] : f(E).join(":"), M = T ? D + Um : D, H = M + _;
    if (h.indexOf(H) > -1)
      continue;
    h.push(H);
    const I = u(_, A);
    for (let j = 0; j < I.length; ++j) {
      const z = I[j];
      h.push(M + z);
    }
    p = m + (p.length > 0 ? " " + p : p);
  }
  return p;
}, G3 = (...n) => {
  let i = 0, o, r, u = "";
  for (; i < n.length; )
    (o = n[i++]) && (r = vT(o)) && (u && (u += " "), u += r);
  return u;
}, vT = (n) => {
  if (typeof n == "string")
    return n;
  let i, o = "";
  for (let r = 0; r < n.length; r++)
    n[r] && (i = vT(n[r])) && (o && (o += " "), o += i);
  return o;
}, Y3 = (n, ...i) => {
  let o, r, u, f;
  const d = (g) => {
    const p = i.reduce((y, m) => m(y), n());
    return o = H3(p), r = o.cache.get, u = o.cache.set, f = h, h(g);
  }, h = (g) => {
    const p = r(g);
    if (p)
      return p;
    const y = q3(g, o);
    return u(g, y), y;
  };
  return f = d, (...g) => f(G3(...g));
}, F3 = [], Se = (n) => {
  const i = (o) => o[n] || F3;
  return i.isThemeGetter = !0, i.themeKey = n, i;
}, yT = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, bT = /^\((?:(\w[\w-]*):)?(.+)\)$/i, X3 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, K3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Z3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Q3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, $3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, J3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ta = (n) => X3.test(n), Ot = (n) => !!n && !Number.isNaN(Number(n)), mi = (n) => !!n && Number.isInteger(Number(n)), Wh = (n) => n.endsWith("%") && Ot(n.slice(0, -1)), Ui = (n) => K3.test(n), xT = () => !0, W3 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Z3.test(n) && !Q3.test(n)
), Ip = () => !1, tz = (n) => $3.test(n), ez = (n) => J3.test(n), nz = (n) => !mt(n) && !pt(n), iz = (n) => n.startsWith("@container") && (n[10] === "/" && n[11] !== void 0 || n[11] === "s" && n[16] !== void 0 && n.startsWith("-size/", 10) || n[11] === "n" && n[18] !== void 0 && n.startsWith("-normal/", 10)), az = (n) => Na(n, TT, Ip), mt = (n) => yT.test(n), uo = (n) => Na(n, ET, W3), pS = (n) => Na(n, dz, Ot), oz = (n) => Na(n, AT, xT), sz = (n) => Na(n, CT, Ip), gS = (n) => Na(n, ST, Ip), rz = (n) => Na(n, wT, ez), Xu = (n) => Na(n, RT, tz), pt = (n) => bT.test(n), qr = (n) => wo(n, ET), lz = (n) => wo(n, CT), vS = (n) => wo(n, ST), uz = (n) => wo(n, TT), cz = (n) => wo(n, wT), Ku = (n) => wo(n, RT, !0), fz = (n) => wo(n, AT, !0), Na = (n, i, o) => {
  const r = yT.exec(n);
  return r ? r[1] ? i(r[1]) : o(r[2]) : !1;
}, wo = (n, i, o = !1) => {
  const r = bT.exec(n);
  return r ? r[1] ? i(r[1]) : o : !1;
}, ST = (n) => n === "position" || n === "percentage", wT = (n) => n === "image" || n === "url", TT = (n) => n === "length" || n === "size" || n === "bg-size", ET = (n) => n === "length", dz = (n) => n === "number", CT = (n) => n === "family-name", AT = (n) => n === "number" || n === "weight", RT = (n) => n === "shadow", hz = () => {
  const n = Se("color"), i = Se("font"), o = Se("text"), r = Se("font-weight"), u = Se("tracking"), f = Se("leading"), d = Se("breakpoint"), h = Se("container"), g = Se("spacing"), p = Se("radius"), y = Se("shadow"), m = Se("inset-shadow"), b = Se("text-shadow"), E = Se("drop-shadow"), T = Se("blur"), R = Se("perspective"), C = Se("aspect"), A = Se("ease"), _ = Se("animate"), D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], H = () => [...M(), pt, mt], I = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], z = () => [pt, mt, g], K = () => [Ta, "full", "auto", ...z()], tt = () => [mi, "none", "subgrid", pt, mt], ft = () => ["auto", {
    span: ["full", mi, pt, mt]
  }, mi, pt, mt], at = () => [mi, "auto", pt, mt], J = () => ["auto", "min", "max", "fr", pt, mt], ct = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], dt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], G = () => ["auto", ...z()], X = () => [Ta, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...z()], $ = () => [h, Ta, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...z()], nt = () => [Ta, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...z()], F = () => [n, pt, mt], xt = () => [...M(), vS, gS, {
    position: [pt, mt]
  }], wt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Mt = () => ["auto", "cover", "contain", uz, az, {
    size: [pt, mt]
  }], N = () => [Wh, qr, uo], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    pt,
    mt
  ], W = () => ["", Ot, qr, uo], lt = () => ["solid", "dashed", "dotted", "double"], ot = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], et = () => [Ot, Wh, vS, gS], yt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    T,
    pt,
    mt
  ], it = () => ["none", Ot, pt, mt], rt = () => ["none", Ot, pt, mt], Rt = () => [Ot, pt, mt], ae = () => [Ta, "full", ...z()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ui],
      breakpoint: [Ui],
      color: [xT],
      container: [Ui],
      "drop-shadow": [Ui],
      ease: ["in", "out", "in-out"],
      font: [nz],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ui],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ui],
      shadow: [Ui],
      spacing: ["px", Ot],
      text: [Ui],
      "text-shadow": [Ui],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ta, mt, pt, C]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", pt, mt]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [iz],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ot, "auto", mt, pt, h]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": D()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": D()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: H()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: K()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": K()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": K()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": K(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: K()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": K(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: K()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": K()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": K()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: K()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: K()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: K()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: K()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [mi, "auto", pt, mt]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ta, "full", "auto", h, ...z()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Ot, Ta, "auto", "initial", "none", mt]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ot, pt, mt]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ot, pt, mt]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [mi, "first", "last", "none", pt, mt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": tt()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ft()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": at()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": at()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": tt()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ft()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": at()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": at()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": J()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": J()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: z()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": z()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": z()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ct(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...dt(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...dt()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ct()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...dt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...dt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ct()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...dt(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...dt()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: z()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: z()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: z()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: z()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: z()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: z()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: z()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: z()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: z()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: z()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: z()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: G()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: G()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: G()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: G()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: G()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: G()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: G()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: G()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: G()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: G()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: G()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": z()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": z()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: X()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/inline-size
       */
      "inline-size": [{
        inline: ["auto", ...$()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...$()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ...$()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/block-size
       */
      "block-size": [{
        block: ["auto", ...nt()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...nt()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...nt()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [h, "screen", ...X()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          h,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...X()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          h,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...X()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...X()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...X()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...X()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, qr, uo]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, fz, oz]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Wh, mt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [lz, sz, i]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [mt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [u, pt, mt]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ot, "none", pt, pS]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...z()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", pt, mt]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", pt, mt]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: F()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: F()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...lt(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ot, "from-font", "auto", pt, uo]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: F()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ot, "auto", pt, mt]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: z()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [mi, pt, mt]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pt, mt]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", pt, mt]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: xt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: wt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Mt()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, mi, pt, mt],
          radial: ["", pt, mt],
          conic: ["", mi, pt, mt]
        }, cz, rz]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: F()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: N()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: F()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: F()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: F()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Y()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Y()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Y()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Y()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Y()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Y()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Y()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Y()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Y()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Y()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Y()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Y()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Y()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Y()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Y()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: W()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": W()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": W()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": W()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": W()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": W()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": W()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": W()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": W()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": W()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": W()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": W()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": W()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...lt(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...lt(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: F()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": F()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": F()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": F()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": F()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": F()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": F()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": F()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": F()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": F()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": F()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: F()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...lt(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ot, pt, mt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ot, qr, uo]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: F()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          // Deprecated since Tailwind CSS v4.0.0
          "inner",
          "none",
          y,
          Ku,
          Xu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: F()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, Ku, Xu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": F()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: W()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: F()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ot, uo]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": F()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": W()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": F()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, Ku, Xu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": F()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ot, pt, mt]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ot(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ot()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Ot]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": et()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": et()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": F()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": F()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": et()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": et()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": F()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": F()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": et()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": et()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": F()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": F()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": et()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": et()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": F()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": F()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": et()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": et()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": F()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": F()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": et()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": et()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": F()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": F()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": et()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": et()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": F()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": F()
      }],
      "mask-image-radial": [{
        "mask-radial": [pt, mt]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": et()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": et()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": F()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": F()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": M()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ot]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": et()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": et()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": F()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": F()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: xt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: wt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Mt()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", pt, mt]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          pt,
          mt
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: yt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ot, pt, mt]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ot, pt, mt]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          E,
          Ku,
          Xu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": F()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ot, pt, mt]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ot, pt, mt]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ot, pt, mt]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ot, pt, mt]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ot, pt, mt]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          pt,
          mt
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": yt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ot, pt, mt]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ot, pt, mt]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ot, pt, mt]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ot, pt, mt]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ot, pt, mt]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ot, pt, mt]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ot, pt, mt]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ot, pt, mt]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": z()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": z()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": z()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", pt, mt]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Ot, "initial", pt, mt]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", A, pt, mt]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ot, pt, mt]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", _, pt, mt]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [R, pt, mt]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": H()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: it()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": it()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": it()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": it()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: rt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": rt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": rt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": rt()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Rt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Rt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Rt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [pt, mt, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: H()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ae()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ae()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ae()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ae()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [mi, pt, mt]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: F()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: F()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pt, mt]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": F()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": F()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": z()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": z()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": z()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": z()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": z()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": z()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": z()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": z()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": z()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": z()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": z()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": z()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": z()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", pt, mt]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...F()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ot, qr, uo, pS]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...F()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["start", "end", "right", "left"],
      "inset-y": ["inset-bs", "inset-be", "top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["ps", "pe", "pr", "pl"],
      py: ["pbs", "pbe", "pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["ms", "me", "mr", "ml"],
      my: ["mbs", "mbe", "mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-s", "border-w-e", "border-w-r", "border-w-l"],
      "border-w-y": ["border-w-bs", "border-w-be", "border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-s", "border-color-e", "border-color-r", "border-color-l"],
      "border-color-y": ["border-color-bs", "border-color-be", "border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-ms", "scroll-me", "scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-ps", "scroll-pe", "scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, mz = /* @__PURE__ */ Y3(hz);
function Ye(...n) {
  return mz(dT(n));
}
var pz = Object.defineProperty, qp = (n, i) => pz(n, "name", { value: i, configurable: !0 });
function Hm(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
qp(Hm, "setRef");
function DT(...n) {
  return (i) => {
    let o = !1;
    const r = n.map((u) => {
      const f = Hm(u, i);
      return !o && typeof f == "function" && (o = !0), f;
    });
    if (o)
      return () => {
        for (let u = 0; u < r.length; u++) {
          const f = r[u];
          typeof f == "function" ? f() : Hm(n[u], null);
        }
      };
  };
}
qp(DT, "composeRefs");
function te(...n) {
  return x.useCallback(DT(...n), n);
}
qp(te, "useComposedRefs");
var gz = Object.defineProperty, Vn = (n, i) => gz(n, "name", { value: i, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Gi(n) {
  const i = x.forwardRef((o, r) => {
    let { children: u, ...f } = o, d = null, h = !1;
    const g = [];
    km(u) && typeof Zu == "function" && (u = Zu(u._payload)), x.Children.forEach(u, (b) => {
      if (NT(b)) {
        h = !0;
        const E = b;
        let T = "child" in E.props ? E.props.child : E.props.children;
        km(T) && typeof Zu == "function" && (T = Zu(T._payload)), d = bz(E, T), g.push(d?.props?.children);
      } else
        g.push(b);
    }), d ? d = x.cloneElement(d, void 0, g) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !h && x.Children.count(u) === 1 && x.isValidElement(u) && (d = u)
    );
    const p = d ? _T(d) : void 0, y = te(r, p);
    if (!d) {
      if (u || u === 0)
        throw new Error(
          h ? wz(n) : Sz(n)
        );
      return u;
    }
    const m = MT(f, d.props ?? {});
    return d.type !== x.Fragment && (m.ref = r ? y : p), x.cloneElement(d, m);
  });
  return i.displayName = `${n}.Slot`, i;
}
Vn(Gi, "createSlot");
var vz = /* @__PURE__ */ Gi("Slot"), OT = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function yz(n) {
  const i = /* @__PURE__ */ Vn((o) => "child" in o ? o.children(o.child) : o.children, "Slottable");
  return i.displayName = `${n}.Slottable`, i.__radixId = OT, i;
}
Vn(yz, "createSlottable");
var bz = /* @__PURE__ */ Vn((n, i) => {
  if ("child" in n.props) {
    const o = n.props.child;
    return x.isValidElement(o) ? x.cloneElement(o, void 0, n.props.children(o.props.children)) : null;
  }
  return x.isValidElement(i) ? i : null;
}, "getSlottableElementFromSlottable");
function MT(n, i) {
  const o = { ...i };
  for (const r in i) {
    const u = n[r], f = i[r];
    /^on[A-Z]/.test(r) ? u && f ? o[r] = (...h) => {
      const g = f(...h);
      return u(...h), g;
    } : u && (o[r] = u) : r === "style" ? o[r] = { ...u, ...f } : r === "className" ? o[r] = [u, f].filter(Boolean).join(" ") : r === "aria-describedby" && (o[r] = jT(f, u));
  }
  return { ...n, ...o };
}
Vn(MT, "mergeProps");
function _T(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning;
  return o ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning, o ? n.props.ref : n.props.ref || n.ref);
}
Vn(_T, "getElementRef");
function NT(n) {
  return x.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === OT;
}
Vn(NT, "isSlottable");
var xz = /* @__PURE__ */ Symbol.for("react.lazy");
function km(n) {
  return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === xz && "_payload" in n && zT(n._payload);
}
Vn(km, "isLazyComponent");
function zT(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
Vn(zT, "isPromiseLike");
function jT(...n) {
  const i = /* @__PURE__ */ new Set();
  for (const o of n)
    if (typeof o == "string")
      for (const r of String(o).trim().split(/\s+/))
        r && i.add(r);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
Vn(jT, "concatAriaDescribedby");
var Sz = /* @__PURE__ */ Vn((n) => `${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), wz = /* @__PURE__ */ Vn((n) => `${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Zu = js[" use ".trim().toString()], Tz = Object.defineProperty, Ez = (n, i) => Tz(n, "name", { value: i, configurable: !0 }), Cz = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ee = Cz.reduce((n, i) => {
  const o = /* @__PURE__ */ Gi(`Primitive.${i}`), r = x.forwardRef((u, f) => {
    const { asChild: d, ...h } = u, g = d ? o : i;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w.jsx(g, { ...h, ref: f });
  });
  return r.displayName = `Primitive.${i}`, { ...n, [i]: r };
}, {});
function LT(n, i) {
  n && Bs.flushSync(() => n.dispatchEvent(i));
}
Ez(LT, "dispatchDiscreteCustomEvent");
var Az = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Rz = Object.defineProperty, zn = (n, i) => Rz(n, "name", { value: i, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Dz(n, i) {
  const o = x.createContext(i);
  o.displayName = n + "Context";
  const r = /* @__PURE__ */ zn((f) => {
    const { children: d, ...h } = f, g = x.useMemo(() => h, Object.values(h));
    return /* @__PURE__ */ w.jsx(o.Provider, { value: g, children: d });
  }, "Provider");
  r.displayName = n + "Provider";
  function u(f, d = {}) {
    const { optional: h = !1 } = d, g = x.useContext(o);
    if (g) return g;
    if (i !== void 0) return i;
    if (!h)
      throw new Error(`\`${f}\` must be used within \`${n}\``);
  }
  return zn(u, "useContext"), [r, u];
}
zn(Dz, "createContext");
// @__NO_SIDE_EFFECTS__
function za(n, i = []) {
  let o = [];
  function r(f, d) {
    const h = x.createContext(d);
    h.displayName = f + "Context";
    const g = o.length;
    o = [...o, d];
    const p = /* @__PURE__ */ zn((m) => {
      const { scope: b, children: E, ...T } = m, R = b?.[n]?.[g] || h, C = x.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ w.jsx(R.Provider, { value: C, children: E });
    }, "Provider");
    p.displayName = f + "Provider";
    function y(m, b, E = {}) {
      const { optional: T = !1 } = E, R = b?.[n]?.[g] || h, C = x.useContext(R);
      if (C) return C;
      if (d !== void 0) return d;
      if (!T)
        throw new Error(`\`${m}\` must be used within \`${f}\``);
    }
    return zn(y, "useContext"), [p, y];
  }
  zn(r, "createContext");
  const u = /* @__PURE__ */ zn(() => {
    const f = o.map((d) => x.createContext(d));
    return /* @__PURE__ */ zn(function(h) {
      const g = h?.[n] || f;
      return x.useMemo(
        () => ({ [`__scope${n}`]: { ...h, [n]: g } }),
        [h, g]
      );
    }, "useScope");
  }, "createScope");
  return u.scopeName = n, [r, VT(u, ...i)];
}
zn(za, "createContextScope");
function VT(...n) {
  const i = n[0];
  if (n.length === 1) return i;
  const o = /* @__PURE__ */ zn(() => {
    const r = n.map((u) => ({
      useScope: u(),
      scopeName: u.scopeName
    }));
    return /* @__PURE__ */ zn(function(f) {
      const d = r.reduce((h, { useScope: g, scopeName: p }) => {
        const m = g(f)[`__scope${p}`];
        return { ...h, ...m };
      }, {});
      return x.useMemo(() => ({ [`__scope${i.scopeName}`]: d }), [d]);
    }, "useComposedScopes");
  }, "createScope");
  return o.scopeName = i.scopeName, o;
}
zn(VT, "composeContextScopes");
var Oz = Object.defineProperty, Ne = (n, i) => Oz(n, "name", { value: i, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Gp(n) {
  const i = n + "CollectionProvider", [o, r] = /* @__PURE__ */ za(i), [u, f] = o(
    i,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = /* @__PURE__ */ Ne((R) => {
    const { scope: C, children: A } = R, _ = x.useRef(null), D = x.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ w.jsx(u, { scope: C, itemMap: D, collectionRef: _, children: A });
  }, "CollectionProvider");
  d.displayName = i;
  const h = n + "CollectionSlot", g = /* @__PURE__ */ Gi(h), p = x.forwardRef(
    (R, C) => {
      const { scope: A, children: _ } = R, D = f(h, A), M = te(C, D.collectionRef);
      return /* @__PURE__ */ w.jsx(g, { ref: M, children: _ });
    }
  );
  p.displayName = h;
  const y = n + "CollectionItemSlot", m = "data-radix-collection-item", b = /* @__PURE__ */ Gi(y), E = x.forwardRef(
    (R, C) => {
      const { scope: A, children: _, ...D } = R, M = x.useRef(null), H = te(C, M), I = f(y, A);
      return x.useEffect(() => (I.itemMap.set(M, { ref: M, ...D }), () => {
        I.itemMap.delete(M);
      })), /* @__PURE__ */ w.jsx(b, { [m]: "", ref: H, children: _ });
    }
  );
  E.displayName = y;
  function T(R) {
    const C = f(n + "CollectionConsumer", R);
    return x.useCallback(() => {
      const _ = C.collectionRef.current;
      if (!_) return [];
      const D = Array.from(_.querySelectorAll(`[${m}]`));
      return Array.from(C.itemMap.values()).sort(
        (I, j) => D.indexOf(I.ref.current) - D.indexOf(j.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return Ne(T, "useCollection"), [
    { Provider: d, Slot: p, ItemSlot: E },
    T,
    r
  ];
}
Ne(Gp, "createCollection");
var yS = /* @__PURE__ */ new WeakMap(), ye, xn, tm = (xn = class extends Map {
  constructor(o) {
    super(o);
    _b(this, ye);
    Dh(this, ye, [...super.keys()]), yS.set(this, !0);
  }
  set(o, r) {
    return yS.get(this) && (this.has(o) ? Ge(this, ye)[Ge(this, ye).indexOf(o)] = o : Ge(this, ye).push(o)), super.set(o, r), this;
  }
  insert(o, r, u) {
    const f = this.has(r), d = Ge(this, ye).length, h = Yp(o);
    let g = h >= 0 ? h : d + h;
    const p = g < 0 || g >= d ? -1 : g;
    if (p === this.size || f && p === this.size - 1 || p === -1)
      return this.set(r, u), this;
    const y = this.size + (f ? 0 : 1);
    h < 0 && g++;
    const m = [...Ge(this, ye)];
    let b, E = !1;
    for (let T = g; T < y; T++)
      if (g === T) {
        let R = m[T];
        m[T] === r && (R = m[T + 1]), f && this.delete(r), b = this.get(R), this.set(r, u);
      } else {
        !E && m[T - 1] === r && (E = !0);
        const R = m[E ? T : T - 1], C = b;
        b = this.get(R), this.delete(R), this.set(R, C);
      }
    return this;
  }
  with(o, r, u) {
    const f = new xn(this);
    return f.insert(o, r, u), f;
  }
  before(o) {
    const r = Ge(this, ye).indexOf(o) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(o, r, u) {
    const f = Ge(this, ye).indexOf(o);
    return f === -1 ? this : this.insert(f, r, u);
  }
  after(o) {
    let r = Ge(this, ye).indexOf(o);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(o, r, u) {
    const f = Ge(this, ye).indexOf(o);
    return f === -1 ? this : this.insert(f + 1, r, u);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return Dh(this, ye, []), super.clear();
  }
  delete(o) {
    const r = super.delete(o);
    return r && Ge(this, ye).splice(Ge(this, ye).indexOf(o), 1), r;
  }
  deleteAt(o) {
    const r = this.keyAt(o);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(o) {
    const r = fc(Ge(this, ye), o);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(o) {
    const r = fc(Ge(this, ye), o);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(o) {
    return Ge(this, ye).indexOf(o);
  }
  keyAt(o) {
    return fc(Ge(this, ye), o);
  }
  from(o, r) {
    const u = this.indexOf(o);
    if (u === -1)
      return;
    let f = u + r;
    return f < 0 && (f = 0), f >= this.size && (f = this.size - 1), this.at(f);
  }
  keyFrom(o, r) {
    const u = this.indexOf(o);
    if (u === -1)
      return;
    let f = u + r;
    return f < 0 && (f = 0), f >= this.size && (f = this.size - 1), this.keyAt(f);
  }
  find(o, r) {
    let u = 0;
    for (const f of this) {
      if (Reflect.apply(o, r, [f, u, this]))
        return f;
      u++;
    }
  }
  findIndex(o, r) {
    let u = 0;
    for (const f of this) {
      if (Reflect.apply(o, r, [f, u, this]))
        return u;
      u++;
    }
    return -1;
  }
  filter(o, r) {
    const u = [];
    let f = 0;
    for (const d of this)
      Reflect.apply(o, r, [d, f, this]) && u.push(d), f++;
    return new xn(u);
  }
  map(o, r) {
    const u = [];
    let f = 0;
    for (const d of this)
      u.push([d[0], Reflect.apply(o, r, [d, f, this])]), f++;
    return new xn(u);
  }
  reduce(...o) {
    const [r, u] = o;
    let f = 0, d = u ?? this.at(0);
    for (const h of this)
      f === 0 && o.length === 1 ? d = h : d = Reflect.apply(r, this, [d, h, f, this]), f++;
    return d;
  }
  reduceRight(...o) {
    const [r, u] = o;
    let f = u ?? this.at(-1);
    for (let d = this.size - 1; d >= 0; d--) {
      const h = this.at(d);
      d === this.size - 1 && o.length === 1 ? f = h : f = Reflect.apply(r, this, [f, h, d, this]);
    }
    return f;
  }
  toSorted(o) {
    const r = [...this.entries()].sort(o);
    return new xn(r);
  }
  toReversed() {
    const o = new xn();
    for (let r = this.size - 1; r >= 0; r--) {
      const u = this.keyAt(r), f = this.get(u);
      o.set(u, f);
    }
    return o;
  }
  toSpliced(...o) {
    const r = [...this.entries()];
    return r.splice(...o), new xn(r);
  }
  slice(o, r) {
    const u = new xn();
    let f = this.size - 1;
    if (o === void 0)
      return u;
    o < 0 && (o = o + this.size), r !== void 0 && r > 0 && (f = r - 1);
    for (let d = o; d <= f; d++) {
      const h = this.keyAt(d), g = this.get(h);
      u.set(h, g);
    }
    return u;
  }
  every(o, r) {
    let u = 0;
    for (const f of this) {
      if (!Reflect.apply(o, r, [f, u, this]))
        return !1;
      u++;
    }
    return !0;
  }
  some(o, r) {
    let u = 0;
    for (const f of this) {
      if (Reflect.apply(o, r, [f, u, this]))
        return !0;
      u++;
    }
    return !1;
  }
}, ye = new WeakMap(), Ne(xn, "OrderedDict"), xn);
function fc(n, i) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(n, i);
  const o = BT(n, i);
  return o === -1 ? void 0 : n[o];
}
Ne(fc, "at");
function BT(n, i) {
  const o = n.length, r = Yp(i), u = r >= 0 ? r : o + r;
  return u < 0 || u >= o ? -1 : u;
}
Ne(BT, "toSafeIndex");
function Yp(n) {
  return n !== n || n === 0 ? 0 : Math.trunc(n);
}
Ne(Yp, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Mz(n) {
  const i = n + "CollectionProvider", [o, r] = /* @__PURE__ */ za(i), [u, f] = o(
    i,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new tm(),
      setItemMap: /* @__PURE__ */ Ne(() => {
      }, "setItemMap")
    }
  ), d = /* @__PURE__ */ Ne(({ state: D, ...M }) => D ? /* @__PURE__ */ w.jsx(g, { ...M, state: D }) : /* @__PURE__ */ w.jsx(h, { ...M }), "CollectionProvider");
  d.displayName = i;
  const h = /* @__PURE__ */ Ne((D) => {
    const M = C();
    return /* @__PURE__ */ w.jsx(g, { ...D, state: M });
  }, "CollectionInit");
  h.displayName = i + "Init";
  const g = /* @__PURE__ */ Ne((D) => {
    const { scope: M, children: H, state: I } = D, j = x.useRef(null), [z, K] = x.useState(
      null
    ), tt = te(j, K), [ft, at] = I;
    return x.useEffect(() => {
      if (!z) return;
      const J = HT(() => {
      });
      return J.observe(z, {
        childList: !0,
        subtree: !0
      }), () => {
        J.disconnect();
      };
    }, [z]), /* @__PURE__ */ w.jsx(
      u,
      {
        scope: M,
        itemMap: ft,
        setItemMap: at,
        collectionRef: tt,
        collectionRefObject: j,
        collectionElement: z,
        children: H
      }
    );
  }, "CollectionProviderImpl");
  g.displayName = i + "Impl";
  const p = n + "CollectionSlot", y = /* @__PURE__ */ Gi(p), m = x.forwardRef(
    (D, M) => {
      const { scope: H, children: I } = D, j = f(p, H), z = te(M, j.collectionRef);
      return /* @__PURE__ */ w.jsx(y, { ref: z, children: I });
    }
  );
  m.displayName = p;
  const b = n + "CollectionItemSlot", E = "data-radix-collection-item", T = /* @__PURE__ */ Gi(b), R = x.forwardRef(
    (D, M) => {
      const { scope: H, children: I, ...j } = D, z = x.useRef(null), [K, tt] = x.useState(null), ft = te(M, z, tt), at = f(b, H), { setItemMap: J } = at, ct = x.useRef(j);
      PT(ct.current, j) || (ct.current = j);
      const dt = ct.current;
      return x.useEffect(() => {
        const G = dt;
        return J((X) => K ? X.has(K) ? X.set(K, { ...G, element: K }).toSorted(Im) : (X.set(K, { ...G, element: K }), X.toSorted(Im)) : X), () => {
          J((X) => !K || !X.has(K) ? X : (X.delete(K), new tm(X)));
        };
      }, [K, dt, J]), /* @__PURE__ */ w.jsx(T, { [E]: "", ref: ft, children: I });
    }
  );
  R.displayName = b;
  function C() {
    return x.useState(new tm());
  }
  Ne(C, "useInitCollection");
  function A(D) {
    const { itemMap: M } = f(n + "CollectionConsumer", D);
    return M;
  }
  return Ne(A, "useCollection"), [
    { Provider: d, Slot: m, ItemSlot: R },
    {
      createCollectionScope: r,
      useCollection: A,
      useInitCollection: C
    }
  ];
}
Ne(Mz, "createCollection");
function PT(n, i) {
  if (n === i) return !0;
  if (typeof n != "object" || typeof i != "object" || n == null || i == null) return !1;
  const o = Object.keys(n), r = Object.keys(i);
  if (o.length !== r.length) return !1;
  for (const u of o)
    if (!Object.prototype.hasOwnProperty.call(i, u) || n[u] !== i[u]) return !1;
  return !0;
}
Ne(PT, "shallowEqual");
function UT(n, i) {
  return !!(i.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING);
}
Ne(UT, "isElementPreceding");
function Im(n, i) {
  return !n[1].element || !i[1].element ? 0 : UT(n[1].element, i[1].element) ? -1 : 1;
}
Ne(Im, "sortByDocumentPosition");
function HT(n) {
  return new MutationObserver((o) => {
    for (const r of o)
      if (r.type === "childList") {
        n();
        return;
      }
  });
}
Ne(HT, "getChildListObserver");
var _z = Object.defineProperty, Ps = (n, i) => _z(n, "name", { value: i, configurable: !0 }), kT = !!(typeof window < "u" && window.document && window.document.createElement);
function Lt(n, i, { checkForDefaultPrevented: o = !0 } = {}) {
  return /* @__PURE__ */ Ps(function(u) {
    if (n?.(u), o === !1 || !u || !u.defaultPrevented)
      return i?.(u);
  }, "handleEvent");
}
Ps(Lt, "composeEventHandlers");
function Nz(n) {
  if (!kT)
    throw new Error("Cannot access window outside of the DOM");
  return n?.ownerDocument?.defaultView ?? window;
}
Ps(Nz, "getOwnerWindow");
function qm(n) {
  if (!kT)
    throw new Error("Cannot access document outside of the DOM");
  return n?.ownerDocument ?? document;
}
Ps(qm, "getOwnerDocument");
function IT(n, i = !1) {
  const { activeElement: o } = qm(n);
  if (!o?.nodeName)
    return null;
  if (qT(o) && o.contentDocument)
    return IT(o.contentDocument.body, i);
  if (i) {
    const r = o.getAttribute("aria-activedescendant");
    if (r) {
      const u = qm(o).getElementById(r);
      if (u)
        return u;
    }
  }
  return o;
}
Ps(IT, "getActiveElement");
function qT(n) {
  return n.tagName === "IFRAME";
}
Ps(qT, "isFrame");
var ce = globalThis?.document ? x.useLayoutEffect : () => {
}, zz = Object.defineProperty, jz = (n, i) => zz(n, "name", { value: i, configurable: !0 }), bS = js[" useEffectEvent ".trim().toString()], xS = js[" useInsertionEffect ".trim().toString()];
function GT(n) {
  if (typeof bS == "function")
    return bS(n);
  const i = x.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof xS == "function" ? xS(() => {
    i.current = n;
  }) : ce(() => {
    i.current = n;
  }), x.useMemo(() => ((...o) => i.current?.(...o)), []);
}
jz(GT, "useEffectEvent");
var Lz = Object.defineProperty, cl = (n, i) => Lz(n, "name", { value: i, configurable: !0 }), Vz = js[" useInsertionEffect ".trim().toString()] || ce;
function _s({
  prop: n,
  defaultProp: i,
  onChange: o = /* @__PURE__ */ cl(() => {
  }, "onChange"),
  caller: r
}) {
  const [u, f, d] = YT({
    defaultProp: i,
    onChange: o
  }), h = n !== void 0, g = h ? n : u, p = x.useCallback(
    (y) => {
      if (h) {
        const m = FT(y) ? y(n) : y;
        m !== n && d.current?.(m);
      } else
        f(y);
    },
    [h, n, f, d]
  );
  return [g, p];
}
cl(_s, "useControllableState");
function YT({
  defaultProp: n,
  onChange: i
}) {
  const [o, r] = x.useState(n), u = x.useRef(o), f = x.useRef(i);
  return Vz(() => {
    f.current = i;
  }, [i]), x.useEffect(() => {
    u.current !== o && (f.current?.(o), u.current = o);
  }, [o, u]), [o, r, f];
}
cl(YT, "useUncontrolledState");
function FT(n) {
  return typeof n == "function";
}
cl(FT, "isFunction");
var SS = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function Bz(n, i, o, r) {
  const { prop: u, defaultProp: f, onChange: d, caller: h } = i, g = u !== void 0, p = GT(d), y = [{ ...o, state: f }];
  r && y.push(r);
  const [m, b] = x.useReducer(
    (C, A) => {
      if (A.type === SS)
        return { ...C, state: A.state };
      const _ = n(C, A);
      return g && !Object.is(_.state, C.state) && p(_.state), _;
    },
    ...y
  ), E = m.state, T = x.useRef(E);
  x.useEffect(() => {
    T.current !== E && (T.current = E, g || p(E));
  }, [E, T, g]);
  const R = x.useMemo(() => u !== void 0 ? { ...m, state: u } : m, [m, u]);
  return x.useEffect(() => {
    g && !Object.is(u, m.state) && b({ type: SS, state: u });
  }, [u, m.state, g]), [R, b];
}
cl(Bz, "useControllableStateReducer");
var Pz = Object.defineProperty, Yi = (n, i) => Pz(n, "name", { value: i, configurable: !0 });
function XT(n, i) {
  return x.useReducer((o, r) => i[o][r] ?? o, n);
}
Yi(XT, "useStateMachine");
var Hc = /* @__PURE__ */ Yi((n) => {
  const { present: i, children: o } = n, r = KT(i), u = typeof o == "function" ? o({ present: r.isPresent }) : x.Children.only(o), f = ZT(r.ref, QT(u));
  return typeof o == "function" || r.isPresent ? x.cloneElement(u, { ref: f }) : null;
}, "Presence");
function KT(n) {
  const [i, o] = x.useState(), r = x.useRef(null), u = x.useRef(n), f = x.useRef("none"), d = x.useRef(void 0), h = n ? "mounted" : "unmounted", [g, p] = XT(h, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return x.useEffect(() => {
    g === "mounted" ? (f.current = d.current ?? Ts(r.current), d.current = void 0) : f.current = "none";
  }, [g]), ce(() => {
    const y = r.current, m = u.current;
    if (m !== n) {
      const E = f.current, T = Ts(y);
      n ? (d.current = T, p("MOUNT")) : T === "none" || y?.display === "none" ? p("UNMOUNT") : p(m && E !== T ? "ANIMATION_OUT" : "UNMOUNT"), u.current = n;
    }
  }, [n, p]), ce(() => {
    if (i) {
      let y;
      const m = i.ownerDocument.defaultView ?? window, b = /* @__PURE__ */ Yi((T) => {
        const C = Ts(r.current).includes(CSS.escape(T.animationName));
        if (T.target === i && C && (p("ANIMATION_END"), !u.current)) {
          const A = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", y = m.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = A);
          });
        }
      }, "handleAnimationEnd"), E = /* @__PURE__ */ Yi((T) => {
        T.target === i && (f.current = Ts(r.current));
      }, "handleAnimationStart");
      return i.addEventListener("animationstart", E), i.addEventListener("animationcancel", b), i.addEventListener("animationend", b), () => {
        m.clearTimeout(y), i.removeEventListener("animationstart", E), i.removeEventListener("animationcancel", b), i.removeEventListener("animationend", b);
      };
    } else
      p("ANIMATION_END");
  }, [i, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(g),
    ref: x.useCallback((y) => {
      if (y) {
        const m = getComputedStyle(y);
        r.current = m, d.current = Ts(m);
      } else
        r.current = null;
      o(y);
    }, [])
  };
}
Yi(KT, "usePresence");
function Gm(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
Yi(Gm, "setRef");
function ZT(...n) {
  const i = x.useRef(n);
  return i.current = n, x.useCallback((o) => {
    const r = i.current;
    let u = !1;
    const f = r.map((d) => {
      const h = Gm(d, o);
      return !u && typeof h == "function" && (u = !0), h;
    });
    if (u)
      return () => {
        for (let d = 0; d < f.length; d++) {
          const h = f[d];
          typeof h == "function" ? h() : Gm(r[d], null);
        }
      };
  }, []);
}
Yi(ZT, "useStableComposedRefs");
function Ts(n) {
  return n?.animationName || "none";
}
Yi(Ts, "getAnimationName");
function QT(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning;
  return o ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning, o ? n.props.ref : n.props.ref || n.ref);
}
Yi(QT, "getElementRef");
var Uz = Object.defineProperty, Hz = (n, i) => Uz(n, "name", { value: i, configurable: !0 }), kz = js[" useId ".trim().toString()] || (() => {
}), Iz = 0;
function Aa(n) {
  const [i, o] = x.useState(kz());
  return ce(() => {
    n || o((r) => r ?? String(Iz++));
  }, [n]), n || (i ? `radix-${i}` : "");
}
Hz(Aa, "useId");
var qz = Object.defineProperty, Gz = (n, i) => qz(n, "name", { value: i, configurable: !0 }), Yz = {
  LTR: "ltr"
}, Fz = x.createContext(void 0);
function kc(n) {
  const i = x.useContext(Fz);
  return n || i || Yz.LTR;
}
Gz(kc, "useDirection");
var Xz = Object.defineProperty, Kz = (n, i) => Xz(n, "name", { value: i, configurable: !0 });
function Jn(n) {
  const i = x.useRef(n);
  return x.useEffect(() => {
    i.current = n;
  }), x.useMemo(() => ((...o) => i.current?.(...o)), []);
}
Kz(Jn, "useCallbackRef");
var Zz = Object.defineProperty, _e = (n, i) => Zz(n, "name", { value: i, configurable: !0 }), Ym = "dismissableLayer.update", Qz = "dismissableLayer.pointerDownOutside", $z = "dismissableLayer.focusOutside", wS, $T = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), JT = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ _e(function(i, o) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: u = !1,
      onEscapeKeyDown: f,
      onPointerDownOutside: d,
      onFocusOutside: h,
      onInteractOutside: g,
      onDismiss: p,
      ...y
    } = i, m = x.useContext($T), [b, E] = x.useState(null), T = b?.ownerDocument ?? globalThis?.document, [, R] = x.useState({}), C = te(o, E), A = Array.from(m.layers), [_] = [
      ...m.layersWithOutsidePointerEventsDisabled
    ].slice(-1), D = _ ? A.indexOf(_) : -1, M = b ? A.indexOf(b) : -1, H = m.layersWithOutsidePointerEventsDisabled.size > 0, I = M >= D, j = x.useRef(!1), z = tE(
      (at) => {
        d?.(at), g?.(at), at.defaultPrevented || p?.();
      },
      {
        ownerDocument: T,
        deferPointerDownOutside: u,
        isDeferredPointerDownOutsideRef: j,
        dismissableSurfaces: m.dismissableSurfaces,
        shouldHandlePointerDownOutside: x.useCallback(
          (at) => {
            if (!(at instanceof Node))
              return !1;
            const J = [...m.branches].some(
              (ct) => ct.contains(at)
            );
            return I && !J;
          },
          [m.branches, I]
        )
      }
    ), K = eE((at) => {
      if (u && j.current)
        return;
      const J = at.target;
      [...m.branches].some((dt) => dt.contains(J)) || (h?.(at), g?.(at), at.defaultPrevented || p?.());
    }, T), tt = b ? M === A.length - 1 : !1, ft = Jn((at) => {
      at.key === "Escape" && (f?.(at), !at.defaultPrevented && p && (at.preventDefault(), p()));
    });
    return x.useEffect(() => {
      if (tt)
        return T.addEventListener("keydown", ft, { capture: !0 }), () => T.removeEventListener("keydown", ft, { capture: !0 });
    }, [T, tt, ft]), x.useEffect(() => {
      if (b)
        return r && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (wS = T.body.style.pointerEvents, T.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(b)), m.layers.add(b), Fm(), () => {
          r && (m.layersWithOutsidePointerEventsDisabled.delete(b), m.layersWithOutsidePointerEventsDisabled.size === 0 && (T.body.style.pointerEvents = wS));
        };
    }, [b, T, r, m]), x.useEffect(() => () => {
      b && (m.layers.delete(b), m.layersWithOutsidePointerEventsDisabled.delete(b), Fm());
    }, [b, m]), x.useEffect(() => {
      const at = /* @__PURE__ */ _e(() => R({}), "handleUpdate");
      return document.addEventListener(Ym, at), () => document.removeEventListener(Ym, at);
    }, []), /* @__PURE__ */ w.jsx(
      ee.div,
      {
        ...y,
        ref: C,
        style: {
          pointerEvents: H ? I ? "auto" : "none" : void 0,
          ...i.style
        },
        onFocusCapture: Lt(i.onFocusCapture, K.onFocusCapture),
        onBlurCapture: Lt(i.onBlurCapture, K.onBlurCapture),
        onPointerDownCapture: Lt(
          i.onPointerDownCapture,
          z.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function WT() {
  const n = x.useContext($T), [i, o] = x.useState(null);
  return x.useEffect(() => {
    if (i)
      return n.dismissableSurfaces.add(i), () => {
        n.dismissableSurfaces.delete(i);
      };
  }, [i, n.dismissableSurfaces]), o;
}
_e(WT, "useDismissableLayerSurface");
var Jz = /* @__PURE__ */ _e(() => !0, "IS_TRUE");
function tE(n, i) {
  const {
    ownerDocument: o = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: u,
    dismissableSurfaces: f,
    shouldHandlePointerDownOutside: d = Jz
  } = i, h = Jn(n), g = x.useRef(!1), p = x.useRef(!1), y = x.useRef(/* @__PURE__ */ new Map()), m = x.useRef(() => {
  });
  return x.useEffect(() => {
    function b() {
      p.current = !1, u.current = !1, y.current.clear();
    }
    _e(b, "resetOutsideInteraction");
    function E() {
      return Array.from(y.current.values()).some(Boolean);
    }
    _e(E, "isOutsideInteractionIntercepted");
    function T(D) {
      if (!p.current)
        return;
      const M = D.target;
      M instanceof Node && [...f].some((I) => I.contains(M)) || y.current.set(D.type, !0), D.type === "click" && window.setTimeout(() => {
        p.current && m.current();
      }, 0);
    }
    _e(T, "handleInteractionCapture");
    function R(D) {
      p.current && y.current.set(D.type, !1);
    }
    _e(R, "handleInteractionBubble");
    const C = /* @__PURE__ */ _e((D) => {
      if (D.target && !g.current) {
        let M = function() {
          o.removeEventListener("click", m.current);
          const I = E();
          b(), I || Fp(
            Qz,
            h,
            H,
            { discrete: !0 }
          );
        };
        if (_e(M, "handleAndDispatchPointerDownOutsideEvent"), !d(D.target)) {
          o.removeEventListener("click", m.current), b(), g.current = !1;
          return;
        }
        const H = { originalEvent: D };
        p.current = !0, u.current = r && D.button === 0, y.current.clear(), !r || D.button !== 0 ? M() : (o.removeEventListener("click", m.current), m.current = M, o.addEventListener("click", m.current, { once: !0 }));
      } else
        o.removeEventListener("click", m.current), b();
      g.current = !1;
    }, "handlePointerDown"), A = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const D of A)
      o.addEventListener(D, T, !0), o.addEventListener(D, R);
    const _ = window.setTimeout(() => {
      o.addEventListener("pointerdown", C);
    }, 0);
    return () => {
      window.clearTimeout(_), o.removeEventListener("pointerdown", C), o.removeEventListener("click", m.current);
      for (const D of A)
        o.removeEventListener(D, T, !0), o.removeEventListener(D, R);
    };
  }, [
    o,
    h,
    r,
    u,
    f,
    d
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ _e(() => g.current = !0, "onPointerDownCapture")
  };
}
_e(tE, "usePointerDownOutside");
function eE(n, i = globalThis?.document) {
  const o = Jn(n), r = x.useRef(!1);
  return x.useEffect(() => {
    const u = /* @__PURE__ */ _e((f) => {
      f.target && !r.current && Fp($z, o, { originalEvent: f }, {
        discrete: !1
      });
    }, "handleFocus");
    return i.addEventListener("focusin", u), () => i.removeEventListener("focusin", u);
  }, [i, o]), {
    onFocusCapture: /* @__PURE__ */ _e(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ _e(() => r.current = !1, "onBlurCapture")
  };
}
_e(eE, "useFocusOutside");
function Fm() {
  const n = new CustomEvent(Ym);
  document.dispatchEvent(n);
}
_e(Fm, "dispatchUpdate");
function Fp(n, i, o, { discrete: r }) {
  const u = o.originalEvent.target, f = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: o });
  i && u.addEventListener(n, i, { once: !0 }), r ? LT(u, f) : u.dispatchEvent(f);
}
_e(Fp, "handleAndDispatchCustomEvent");
var Wz = Object.defineProperty, be = (n, i) => Wz(n, "name", { value: i, configurable: !0 }), em = "focusScope.autoFocusOnMount", nm = "focusScope.autoFocusOnUnmount", TS = { bubbles: !1, cancelable: !0 }, nE = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ be(function(i, o) {
    const {
      loop: r = !1,
      trapped: u = !1,
      branches: f,
      onMountAutoFocus: d,
      onUnmountAutoFocus: h,
      ...g
    } = i, [p, y] = x.useState(null), m = Jn(d), b = Jn(h), E = x.useRef(null), T = te(o, y), R = x.useRef(f);
    x.useEffect(() => {
      R.current = f;
    });
    const C = x.useCallback(
      (D) => D ? p?.contains(D) ? !0 : !!R.current?.some((M) => M.contains(D)) : !1,
      [p]
    ), A = x.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    x.useEffect(() => {
      if (u) {
        let D = function(j) {
          if (A.paused || !p) return;
          const z = j.target;
          C(z) ? E.current = z : ki(E.current, { select: !0 });
        }, M = function(j) {
          if (A.paused || !p) return;
          const z = j.relatedTarget;
          z !== null && (C(z) || ki(E.current, { select: !0 }));
        }, H = function(j) {
          if (document.activeElement === document.body)
            for (const K of j)
              K.removedNodes.length > 0 && ki(p);
        };
        be(D, "handleFocusIn"), be(M, "handleFocusOut"), be(H, "handleMutations"), document.addEventListener("focusin", D), document.addEventListener("focusout", M);
        const I = new MutationObserver(H);
        return p && I.observe(p, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", D), document.removeEventListener("focusout", M), I.disconnect();
        };
      }
    }, [u, p, A.paused, C]), x.useEffect(() => {
      if (p) {
        ES.add(A);
        const D = document.activeElement;
        if (!p.contains(D)) {
          const H = new CustomEvent(em, TS);
          p.addEventListener(em, m), p.dispatchEvent(H), H.defaultPrevented || (sE(fE(Xp(p)), { select: !0 }), document.activeElement === D && ki(p));
        }
        return () => {
          p.removeEventListener(em, m), setTimeout(() => {
            const H = new CustomEvent(nm, TS);
            p.addEventListener(nm, b), p.dispatchEvent(H), H.defaultPrevented || ki(D ?? document.body, { select: !0 }), p.removeEventListener(nm, b), ES.remove(A);
          }, 0);
        };
      }
    }, [p, m, b, A]);
    const _ = x.useCallback(
      (D) => {
        if (!r && !u || A.paused) return;
        const M = D.key === "Tab" && !D.altKey && !D.ctrlKey && !D.metaKey, H = document.activeElement;
        if (M && H) {
          const I = D.currentTarget, [j, z] = rE(I);
          j && z ? !D.shiftKey && H === z ? (D.preventDefault(), r && ki(j, { select: !0 })) : D.shiftKey && H === j && (D.preventDefault(), r && ki(z, { select: !0 })) : H === I && D.preventDefault();
        }
      },
      [r, u, A.paused]
    );
    return /* @__PURE__ */ w.jsx(ee.div, { tabIndex: -1, ...g, ref: T, onKeyDown: _ });
  }, "FocusScope")
), iE = x.createContext(null);
function aE({ registry: n, children: i }) {
  return n ? /* @__PURE__ */ w.jsx(iE.Provider, { value: n, children: i }) : i;
}
be(aE, "FocusScopeBranchProvider");
function oE() {
  const [n, i] = x.useState([]), o = x.useMemo(
    () => ({
      add: /* @__PURE__ */ be((r) => i((u) => u.includes(r) ? u : [...u, r]), "add"),
      remove: /* @__PURE__ */ be((r) => i((u) => u.filter((f) => f !== r)), "remove")
    }),
    []
  );
  return { nodes: n, registry: o };
}
be(oE, "useFocusScopeBranchRegistry");
function tj(n) {
  const i = x.useContext(iE);
  x.useEffect(() => {
    if (!(!n || !i))
      return i.add(n), () => i.remove(n);
  }, [n, i]);
}
be(tj, "useFocusScopeBranch");
function sE(n, { select: i = !1 } = {}) {
  const o = document.activeElement;
  for (const r of n)
    if (ki(r, { select: i }), document.activeElement !== o) return;
}
be(sE, "focusFirst");
function rE(n) {
  const i = Xp(n), o = Xm(i, n), r = Xm(i.reverse(), n);
  return [o, r];
}
be(rE, "getTabbableEdges");
function Xp(n) {
  const i = [], o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ be((r) => {
      const u = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || u ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; o.nextNode(); ) i.push(o.currentNode);
  return i;
}
be(Xp, "getTabbableCandidates");
function Xm(n, i) {
  const o = typeof i.checkVisibility == "function" && i.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of n)
    if (!(o ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : lE(r, { upTo: i })))
      return r;
}
be(Xm, "findVisible");
function lE(n, { upTo: i }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (i !== void 0 && n === i) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
be(lE, "isHidden");
function uE(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
be(uE, "isSelectableInput");
function ki(n, { select: i = !1 } = {}) {
  if (n && n.focus) {
    const o = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== o && uE(n) && i && n.select();
  }
}
be(ki, "focus");
var ES = cE();
function cE() {
  let n = [];
  return {
    add(i) {
      const o = n[0];
      i !== o && o?.pause(), n = Km(n, i), n.unshift(i);
    },
    remove(i) {
      n = Km(n, i), n[0]?.resume();
    }
  };
}
be(cE, "createFocusScopesStack");
function Km(n, i) {
  const o = [...n], r = o.indexOf(i);
  return r !== -1 && o.splice(r, 1), o;
}
be(Km, "arrayRemove");
function fE(n) {
  return n.filter((i) => i.tagName !== "A");
}
be(fE, "removeLinks");
var ej = Object.defineProperty, nj = (n, i) => ej(n, "name", { value: i, configurable: !0 }), dE = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ nj(function(i, o) {
    const { container: r, ...u } = i, [f, d] = x.useState(!1);
    ce(() => d(!0), []);
    const h = r || f && globalThis?.document?.body;
    return h ? Bs.createPortal(/* @__PURE__ */ w.jsx(ee.div, { ...u, ref: o }), h) : null;
  }, "Portal")
), ij = Object.defineProperty, Kp = (n, i) => ij(n, "name", { value: i, configurable: !0 }), Qu = 0, ys = null;
function aj(n) {
  return Ic(), n.children;
}
Kp(aj, "FocusGuards");
function Ic() {
  x.useEffect(() => {
    ys || (ys = { start: Zm(), end: Zm() });
    const { start: n, end: i } = ys;
    return document.body.firstElementChild !== n && document.body.insertAdjacentElement("afterbegin", n), document.body.lastElementChild !== i && document.body.insertAdjacentElement("beforeend", i), Qu++, () => {
      Qu === 1 && (ys?.start.remove(), ys?.end.remove(), ys = null), Qu = Math.max(0, Qu - 1);
    };
  }, []);
}
Kp(Ic, "useFocusGuards");
function Zm() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
Kp(Zm, "createFocusGuard");
var pi = function() {
  return pi = Object.assign || function(i) {
    for (var o, r = 1, u = arguments.length; r < u; r++) {
      o = arguments[r];
      for (var f in o) Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
    }
    return i;
  }, pi.apply(this, arguments);
};
function hE(n, i) {
  var o = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && i.indexOf(r) < 0 && (o[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, r = Object.getOwnPropertySymbols(n); u < r.length; u++)
      i.indexOf(r[u]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[u]) && (o[r[u]] = n[r[u]]);
  return o;
}
function oj(n, i, o) {
  if (o || arguments.length === 2) for (var r = 0, u = i.length, f; r < u; r++)
    (f || !(r in i)) && (f || (f = Array.prototype.slice.call(i, 0, r)), f[r] = i[r]);
  return n.concat(f || Array.prototype.slice.call(i));
}
var dc = "right-scroll-bar-position", hc = "width-before-scroll-bar", sj = "with-scroll-bars-hidden", rj = "--removed-body-scroll-bar-size";
function im(n, i) {
  return typeof n == "function" ? n(i) : n && (n.current = i), n;
}
function lj(n, i) {
  var o = x.useState(function() {
    return {
      // value
      value: n,
      // last callback
      callback: i,
      // "memoized" public interface
      facade: {
        get current() {
          return o.value;
        },
        set current(r) {
          var u = o.value;
          u !== r && (o.value = r, o.callback(r, u));
        }
      }
    };
  })[0];
  return o.callback = i, o.facade;
}
var uj = typeof window < "u" ? x.useLayoutEffect : x.useEffect, CS = /* @__PURE__ */ new WeakMap();
function cj(n, i) {
  var o = lj(null, function(r) {
    return n.forEach(function(u) {
      return im(u, r);
    });
  });
  return uj(function() {
    var r = CS.get(o);
    if (r) {
      var u = new Set(r), f = new Set(n), d = o.current;
      u.forEach(function(h) {
        f.has(h) || im(h, null);
      }), f.forEach(function(h) {
        u.has(h) || im(h, d);
      });
    }
    CS.set(o, n);
  }, [n]), o;
}
function fj(n) {
  return n;
}
function dj(n, i) {
  i === void 0 && (i = fj);
  var o = [], r = !1, u = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return o.length ? o[o.length - 1] : n;
    },
    useMedium: function(f) {
      var d = i(f, r);
      return o.push(d), function() {
        o = o.filter(function(h) {
          return h !== d;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (r = !0; o.length; ) {
        var d = o;
        o = [], d.forEach(f);
      }
      o = {
        push: function(h) {
          return f(h);
        },
        filter: function() {
          return o;
        }
      };
    },
    assignMedium: function(f) {
      r = !0;
      var d = [];
      if (o.length) {
        var h = o;
        o = [], h.forEach(f), d = o;
      }
      var g = function() {
        var y = d;
        d = [], y.forEach(f);
      }, p = function() {
        return Promise.resolve().then(g);
      };
      p(), o = {
        push: function(y) {
          d.push(y), p();
        },
        filter: function(y) {
          return d = d.filter(y), o;
        }
      };
    }
  };
  return u;
}
function hj(n) {
  n === void 0 && (n = {});
  var i = dj(null);
  return i.options = pi({ async: !0, ssr: !1 }, n), i;
}
var mE = function(n) {
  var i = n.sideCar, o = hE(n, ["sideCar"]);
  if (!i)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = i.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, pi({}, o));
};
mE.isSideCarExport = !0;
function mj(n, i) {
  return n.useMedium(i), mE;
}
var pE = hj(), am = function() {
}, qc = x.forwardRef(function(n, i) {
  var o = x.useRef(null), r = x.useState({
    onScrollCapture: am,
    onWheelCapture: am,
    onTouchMoveCapture: am
  }), u = r[0], f = r[1], d = n.forwardProps, h = n.children, g = n.className, p = n.removeScrollBar, y = n.enabled, m = n.shards, b = n.sideCar, E = n.noRelative, T = n.noIsolation, R = n.inert, C = n.allowPinchZoom, A = n.as, _ = A === void 0 ? "div" : A, D = n.gapMode, M = hE(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), H = b, I = cj([o, i]), j = pi(pi({}, M), u);
  return x.createElement(
    x.Fragment,
    null,
    y && x.createElement(H, { sideCar: pE, removeScrollBar: p, shards: m, noRelative: E, noIsolation: T, inert: R, setCallbacks: f, allowPinchZoom: !!C, lockRef: o, gapMode: D }),
    d ? x.cloneElement(x.Children.only(h), pi(pi({}, j), { ref: I })) : x.createElement(_, pi({}, j, { className: g, ref: I }), h)
  );
});
qc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
qc.classNames = {
  fullWidth: hc,
  zeroRight: dc
};
var pj = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function gj() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var i = pj();
  return i && n.setAttribute("nonce", i), n;
}
function vj(n, i) {
  n.styleSheet ? n.styleSheet.cssText = i : n.appendChild(document.createTextNode(i));
}
function yj(n) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(n);
}
var bj = function() {
  var n = 0, i = null;
  return {
    add: function(o) {
      n == 0 && (i = gj()) && (vj(i, o), yj(i)), n++;
    },
    remove: function() {
      n--, !n && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
    }
  };
}, xj = function() {
  var n = bj();
  return function(i, o) {
    x.useEffect(function() {
      return n.add(i), function() {
        n.remove();
      };
    }, [i && o]);
  };
}, gE = function() {
  var n = xj(), i = function(o) {
    var r = o.styles, u = o.dynamic;
    return n(r, u), null;
  };
  return i;
}, Sj = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, om = function(n) {
  return parseInt(n || "", 10) || 0;
}, wj = function(n) {
  var i = window.getComputedStyle(document.body), o = i[n === "padding" ? "paddingLeft" : "marginLeft"], r = i[n === "padding" ? "paddingTop" : "marginTop"], u = i[n === "padding" ? "paddingRight" : "marginRight"];
  return [om(o), om(r), om(u)];
}, Tj = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return Sj;
  var i = wj(n), o = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: i[0],
    top: i[1],
    right: i[2],
    gap: Math.max(0, r - o + i[2] - i[0])
  };
}, Ej = gE(), Ds = "data-scroll-locked", Cj = function(n, i, o, r) {
  var u = n.left, f = n.top, d = n.right, h = n.gap;
  return o === void 0 && (o = "margin"), `
  .`.concat(sj, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(h, "px ").concat(r, `;
  }
  body[`).concat(Ds, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    i && "position: relative ".concat(r, ";"),
    o === "margin" && `
    padding-left: `.concat(u, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(r, `;
    `),
    o === "padding" && "padding-right: ".concat(h, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(dc, ` {
    right: `).concat(h, "px ").concat(r, `;
  }
  
  .`).concat(hc, ` {
    margin-right: `).concat(h, "px ").concat(r, `;
  }
  
  .`).concat(dc, " .").concat(dc, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(hc, " .").concat(hc, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ds, `] {
    `).concat(rj, ": ").concat(h, `px;
  }
`);
}, AS = function() {
  var n = parseInt(document.body.getAttribute(Ds) || "0", 10);
  return isFinite(n) ? n : 0;
}, Aj = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Ds, (AS() + 1).toString()), function() {
      var n = AS() - 1;
      n <= 0 ? document.body.removeAttribute(Ds) : document.body.setAttribute(Ds, n.toString());
    };
  }, []);
}, Rj = function(n) {
  var i = n.noRelative, o = n.noImportant, r = n.gapMode, u = r === void 0 ? "margin" : r;
  Aj();
  var f = x.useMemo(function() {
    return Tj(u);
  }, [u]);
  return x.createElement(Ej, { styles: Cj(f, !i, u, o ? "" : "!important") });
}, Qm = !1;
if (typeof window < "u")
  try {
    var $u = Object.defineProperty({}, "passive", {
      get: function() {
        return Qm = !0, !0;
      }
    });
    window.addEventListener("test", $u, $u), window.removeEventListener("test", $u, $u);
  } catch {
    Qm = !1;
  }
var bs = Qm ? { passive: !1 } : !1, Dj = function(n) {
  return n.tagName === "TEXTAREA";
}, vE = function(n, i) {
  if (!(n instanceof Element))
    return !1;
  var o = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    o[i] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !Dj(n) && o[i] === "visible")
  );
}, Oj = function(n) {
  return vE(n, "overflowY");
}, Mj = function(n) {
  return vE(n, "overflowX");
}, RS = function(n, i) {
  var o = i.ownerDocument, r = i;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var u = yE(n, r);
    if (u) {
      var f = bE(n, r), d = f[1], h = f[2];
      if (d > h)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== o.body);
  return !1;
}, _j = function(n) {
  var i = n.scrollTop, o = n.scrollHeight, r = n.clientHeight;
  return [
    i,
    o,
    r
  ];
}, Nj = function(n) {
  var i = n.scrollLeft, o = n.scrollWidth, r = n.clientWidth;
  return [
    i,
    o,
    r
  ];
}, yE = function(n, i) {
  return n === "v" ? Oj(i) : Mj(i);
}, bE = function(n, i) {
  return n === "v" ? _j(i) : Nj(i);
}, zj = function(n, i) {
  return n === "h" && i === "rtl" ? -1 : 1;
}, jj = function(n, i, o, r, u) {
  var f = zj(n, window.getComputedStyle(i).direction), d = f * r, h = o.target, g = i.contains(h), p = !1, y = d > 0, m = 0, b = 0;
  do {
    if (!h)
      break;
    var E = bE(n, h), T = E[0], R = E[1], C = E[2], A = R - C - f * T;
    (T || A) && yE(n, h) && (m += A, b += T);
    var _ = h.parentNode;
    h = _ && _.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? _.host : _;
  } while (
    // portaled content
    !g && h !== document.body || // self content
    g && (i.contains(h) || i === h)
  );
  return (y && Math.abs(m) < 1 || !y && Math.abs(b) < 1) && (p = !0), p;
}, Ju = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, DS = function(n) {
  return [n.deltaX, n.deltaY];
}, OS = function(n) {
  return n && "current" in n ? n.current : n;
}, Lj = function(n, i) {
  return n[0] === i[0] && n[1] === i[1];
}, Vj = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, Bj = 0, xs = [];
function Pj(n) {
  var i = x.useRef([]), o = x.useRef([0, 0]), r = x.useRef(), u = x.useState(Bj++)[0], f = x.useState(gE)[0], d = x.useRef(n);
  x.useEffect(function() {
    d.current = n;
  }, [n]), x.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(u));
      var R = oj([n.lockRef.current], (n.shards || []).map(OS), !0).filter(Boolean);
      return R.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(u));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(u)), R.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(u));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var h = x.useCallback(function(R, C) {
    if ("touches" in R && R.touches.length === 2 || R.type === "wheel" && R.ctrlKey)
      return !d.current.allowPinchZoom;
    var A = Ju(R), _ = o.current, D = "deltaX" in R ? R.deltaX : _[0] - A[0], M = "deltaY" in R ? R.deltaY : _[1] - A[1], H, I = R.target, j = Math.abs(D) > Math.abs(M) ? "h" : "v";
    if ("touches" in R && j === "h" && I.type === "range")
      return !1;
    var z = window.getSelection(), K = z && z.anchorNode, tt = K ? K === I || K.contains(I) : !1;
    if (tt)
      return !1;
    var ft = RS(j, I);
    if (!ft)
      return !0;
    if (ft ? H = j : (H = j === "v" ? "h" : "v", ft = RS(j, I)), !ft)
      return !1;
    if (!r.current && "changedTouches" in R && (D || M) && (r.current = H), !H)
      return !0;
    var at = r.current || H;
    return jj(at, C, R, at === "h" ? D : M);
  }, []), g = x.useCallback(function(R) {
    var C = R;
    if (!(!xs.length || xs[xs.length - 1] !== f)) {
      var A = "deltaY" in C ? DS(C) : Ju(C), _ = i.current.filter(function(H) {
        return H.name === C.type && (H.target === C.target || C.target === H.shadowParent) && Lj(H.delta, A);
      })[0];
      if (_ && _.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!_) {
        var D = (d.current.shards || []).map(OS).filter(Boolean).filter(function(H) {
          return H.contains(C.target);
        }), M = D.length > 0 ? h(C, D[0]) : !d.current.noIsolation;
        M && C.cancelable && C.preventDefault();
      }
    }
  }, []), p = x.useCallback(function(R, C, A, _) {
    var D = { name: R, delta: C, target: A, should: _, shadowParent: Uj(A) };
    i.current.push(D), setTimeout(function() {
      i.current = i.current.filter(function(M) {
        return M !== D;
      });
    }, 1);
  }, []), y = x.useCallback(function(R) {
    o.current = Ju(R), r.current = void 0;
  }, []), m = x.useCallback(function(R) {
    p(R.type, DS(R), R.target, h(R, n.lockRef.current));
  }, []), b = x.useCallback(function(R) {
    p(R.type, Ju(R), R.target, h(R, n.lockRef.current));
  }, []);
  x.useEffect(function() {
    return xs.push(f), n.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", g, bs), document.addEventListener("touchmove", g, bs), document.addEventListener("touchstart", y, bs), function() {
      xs = xs.filter(function(R) {
        return R !== f;
      }), document.removeEventListener("wheel", g, bs), document.removeEventListener("touchmove", g, bs), document.removeEventListener("touchstart", y, bs);
    };
  }, []);
  var E = n.removeScrollBar, T = n.inert;
  return x.createElement(
    x.Fragment,
    null,
    T ? x.createElement(f, { styles: Vj(u) }) : null,
    E ? x.createElement(Rj, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function Uj(n) {
  for (var i = null; n !== null; )
    n instanceof ShadowRoot && (i = n.host, n = n.host), n = n.parentNode;
  return i;
}
const Hj = mj(pE, Pj);
var Zp = x.forwardRef(function(n, i) {
  return x.createElement(qc, pi({}, n, { ref: i, sideCar: Hj }));
});
Zp.classNames = qc.classNames;
var kj = function(n) {
  if (typeof document > "u")
    return null;
  var i = Array.isArray(n) ? n[0] : n;
  return i.ownerDocument.body;
}, Ss = /* @__PURE__ */ new WeakMap(), Wu = /* @__PURE__ */ new WeakMap(), tc = {}, sm = 0, xE = function(n) {
  return n && (n.host || xE(n.parentNode));
}, Ij = function(n, i) {
  return i.map(function(o) {
    if (n.contains(o))
      return o;
    var r = xE(o);
    return r && n.contains(r) ? r : (console.error("aria-hidden", o, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, qj = function(n, i, o, r) {
  var u = Ij(i, Array.isArray(n) ? n : [n]);
  tc[o] || (tc[o] = /* @__PURE__ */ new WeakMap());
  var f = tc[o], d = [], h = /* @__PURE__ */ new Set(), g = new Set(u), p = function(m) {
    !m || h.has(m) || (h.add(m), p(m.parentNode));
  };
  u.forEach(p);
  var y = function(m) {
    !m || g.has(m) || Array.prototype.forEach.call(m.children, function(b) {
      if (h.has(b))
        y(b);
      else
        try {
          var E = b.getAttribute(r), T = E !== null && E !== "false", R = (Ss.get(b) || 0) + 1, C = (f.get(b) || 0) + 1;
          Ss.set(b, R), f.set(b, C), d.push(b), R === 1 && T && Wu.set(b, !0), C === 1 && b.setAttribute(o, "true"), T || b.setAttribute(r, "true");
        } catch (A) {
          console.error("aria-hidden: cannot operate on ", b, A);
        }
    });
  };
  return y(i), h.clear(), sm++, function() {
    d.forEach(function(m) {
      var b = Ss.get(m) - 1, E = f.get(m) - 1;
      Ss.set(m, b), f.set(m, E), b || (Wu.has(m) || m.removeAttribute(r), Wu.delete(m)), E || m.removeAttribute(o);
    }), sm--, sm || (Ss = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), Wu = /* @__PURE__ */ new WeakMap(), tc = {});
  };
}, SE = function(n, i, o) {
  o === void 0 && (o = "data-aria-hidden");
  var r = Array.from(Array.isArray(n) ? n : [n]), u = kj(n);
  return u ? (r.push.apply(r, Array.from(u.querySelectorAll("[aria-live], script"))), qj(r, u, o, "aria-hidden")) : function() {
    return null;
  };
}, Gj = Object.defineProperty, cn = (n, i) => Gj(n, "name", { value: i, configurable: !0 }), Qp = "Dialog", [wE, yV] = /* @__PURE__ */ za(Qp), [Yj, Wn] = wE(Qp), Fj = /* @__PURE__ */ cn((n) => {
  const {
    __scopeDialog: i,
    children: o,
    open: r,
    defaultOpen: u,
    onOpenChange: f,
    modal: d = !0
  } = n, h = x.useRef(null), g = x.useRef(null), { nodes: p, registry: y } = oE(), [m, b] = _s({
    prop: r,
    defaultProp: u ?? !1,
    onChange: f,
    caller: Qp
  }), [E, T] = x.useState(0), [R, C] = x.useState(0);
  return /* @__PURE__ */ w.jsx(
    Yj,
    {
      scope: i,
      triggerRef: h,
      contentRef: g,
      contentId: Aa(),
      titleId: Aa(),
      descriptionId: Aa(),
      titlePresent: E > 0,
      descriptionPresent: R > 0,
      setTitleCount: T,
      setDescriptionCount: C,
      open: m,
      onOpenChange: b,
      onOpenToggle: x.useCallback(() => b((A) => !A), [b]),
      modal: d,
      branchNodes: p,
      branchRegistry: y,
      children: o
    }
  );
}, "Dialog"), Xj = "DialogTrigger", Kj = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ cn(function(i, o) {
    const { __scopeDialog: r, ...u } = i, f = Wn(Xj, r), d = te(o, f.triggerRef);
    return /* @__PURE__ */ w.jsx(
      ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": f.open,
        "aria-controls": f.open ? f.contentId : void 0,
        "data-state": Gc(f.open),
        ...u,
        ref: d,
        onClick: Lt(i.onClick, f.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), TE = "DialogPortal", [Zj, EE] = wE(TE, {
  forceMount: void 0
}), Qj = /* @__PURE__ */ cn((n) => {
  const { __scopeDialog: i, forceMount: o, children: r, container: u } = n, f = Wn(TE, i);
  return /* @__PURE__ */ w.jsx(Zj, { scope: i, forceMount: o, children: x.Children.map(r, (d) => /* @__PURE__ */ w.jsx(Hc, { present: o || f.open, children: /* @__PURE__ */ w.jsx(dE, { asChild: !0, container: u, children: d }) })) });
}, "DialogPortal"), $m = "DialogOverlay", $j = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ cn(function(i, o) {
    const r = EE($m, i.__scopeDialog), { forceMount: u = r.forceMount, ...f } = i, d = Wn($m, i.__scopeDialog);
    return d.modal ? /* @__PURE__ */ w.jsx(Hc, { present: u || d.open, children: /* @__PURE__ */ w.jsx(Wj, { ...f, ref: o }) }) : null;
  }, "DialogOverlay")
), Jj = /* @__PURE__ */ Gi("DialogOverlay.RemoveScroll"), Wj = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ cn(function(i, o) {
    const { __scopeDialog: r, ...u } = i, f = Wn($m, r), d = WT(), h = te(o, d);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside
      // `RemoveScroll` (eg. when `Overlay` and `Content` are siblings). Nested
      // layers are registered as branches and added as shards so they remain
      // scrollable too. See https://github.com/radix-ui/primitives/issues/3423
      /* @__PURE__ */ w.jsx(
        Zp,
        {
          as: Jj,
          allowPinchZoom: !0,
          shards: x.useMemo(
            () => [f.contentRef, ...f.branchNodes.map((g) => ({ current: g }))],
            [f.contentRef, f.branchNodes]
          ),
          children: /* @__PURE__ */ w.jsx(
            ee.div,
            {
              "data-state": Gc(f.open),
              ...u,
              ref: h,
              style: { pointerEvents: "auto", ...u.style }
            }
          )
        }
      )
    );
  }, "DialogOverlayImpl")
), al = "DialogContent", t5 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ cn(function(i, o) {
    const r = EE(al, i.__scopeDialog), { forceMount: u = r.forceMount, ...f } = i, d = Wn(al, i.__scopeDialog);
    return /* @__PURE__ */ w.jsx(Hc, { present: u || d.open, children: d.modal ? /* @__PURE__ */ w.jsx(e5, { ...f, ref: o }) : /* @__PURE__ */ w.jsx(n5, { ...f, ref: o }) });
  }, "DialogContent")
), e5 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ cn(function(i, o) {
    const r = Wn(al, i.__scopeDialog), u = x.useRef(null), f = te(o, r.contentRef, u);
    return x.useEffect(() => {
      const d = u.current;
      if (d) return SE(d);
    }, []), /* @__PURE__ */ w.jsx(
      CE,
      {
        ...i,
        ref: f,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        onCloseAutoFocus: Lt(i.onCloseAutoFocus, (d) => {
          d.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Lt(i.onPointerDownOutside, (d) => {
          const h = d.detail.originalEvent, g = h.button === 0 && h.ctrlKey === !0;
          (h.button === 2 || g) && d.preventDefault();
        }),
        onFocusOutside: Lt(
          i.onFocusOutside,
          (d) => d.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), n5 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ cn(function(i, o) {
    const r = Wn(al, i.__scopeDialog), u = x.useRef(!1), f = x.useRef(!1);
    return /* @__PURE__ */ w.jsx(
      CE,
      {
        ...i,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (d) => {
          i.onCloseAutoFocus?.(d), d.defaultPrevented || (u.current || r.triggerRef.current?.focus(), d.preventDefault()), u.current = !1, f.current = !1;
        },
        onInteractOutside: (d) => {
          i.onInteractOutside?.(d), d.defaultPrevented || (u.current = !0, d.detail.originalEvent.type === "pointerdown" && (f.current = !0));
          const h = d.target;
          r.triggerRef.current?.contains(h) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && f.current && d.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), CE = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ cn(function(i, o) {
    const {
      __scopeDialog: r,
      trapFocus: u,
      onOpenAutoFocus: f,
      onCloseAutoFocus: d,
      "aria-describedby": h,
      children: g,
      ...p
    } = i, y = Wn(al, r);
    return Ic(), /* @__PURE__ */ w.jsx(aE, { registry: y.branchRegistry, children: /* @__PURE__ */ w.jsx(
      nE,
      {
        asChild: !0,
        loop: !0,
        trapped: u,
        branches: y.branchNodes,
        onMountAutoFocus: f,
        onUnmountAutoFocus: d,
        children: /* @__PURE__ */ w.jsx(
          JT,
          {
            role: "dialog",
            id: y.contentId,
            "aria-labelledby": y.titlePresent ? y.titleId : void 0,
            "aria-describedby": y.descriptionPresent ? AE(h, y.descriptionId) : h,
            "data-state": Gc(y.open),
            ...p,
            ref: o,
            deferPointerDownOutside: !0,
            onDismiss: () => y.onOpenChange(!1),
            children: g
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), i5 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ cn(function(i, o) {
    const { __scopeDialog: r, ...u } = i, f = Wn("DialogTitle", r), { setTitleCount: d } = f;
    return ce(() => (d((h) => h + 1), () => d((h) => h - 1)), [d]), /* @__PURE__ */ w.jsx(ee.h2, { id: f.titleId, ...u, ref: o });
  }, "DialogTitle")
), a5 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ cn(function(i, o) {
    const { __scopeDialog: r, ...u } = i, f = Wn("DialogDescription", r), { setDescriptionCount: d } = f;
    return ce(() => (d((h) => h + 1), () => d((h) => h - 1)), [d]), /* @__PURE__ */ w.jsx(ee.p, { id: f.descriptionId, ...u, ref: o });
  }, "DialogDescription")
), o5 = "DialogClose", s5 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ cn(function(i, o) {
    const { __scopeDialog: r, ...u } = i, f = Wn(o5, r);
    return /* @__PURE__ */ w.jsx(
      ee.button,
      {
        type: "button",
        ...u,
        ref: o,
        onClick: Lt(i.onClick, () => f.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function AE(...n) {
  const i = /* @__PURE__ */ new Set();
  for (const o of n)
    if (typeof o == "string")
      for (const r of String(o).trim().split(/\s+/))
        r && i.add(r);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
cn(AE, "concatAriaDescribedby");
function Gc(n) {
  return n ? "open" : "closed";
}
cn(Gc, "getState");
var r5 = Object.defineProperty, l5 = (n, i) => r5(n, "name", { value: i, configurable: !0 });
function RE(n) {
  const [i, o] = x.useState(void 0);
  return ce(() => {
    if (n) {
      o({ width: n.offsetWidth, height: n.offsetHeight });
      let r = 0;
      const u = new ResizeObserver((f) => {
        if (!Array.isArray(f) || !f.length)
          return;
        const d = f[0];
        window.cancelAnimationFrame(r), r = window.requestAnimationFrame(() => {
          let h, g;
          if ("borderBoxSize" in d) {
            const p = d.borderBoxSize, y = Array.isArray(p) ? p[0] : p;
            h = y.inlineSize, g = y.blockSize;
          } else
            h = n.offsetWidth, g = n.offsetHeight;
          o({ width: h, height: g });
        });
      });
      return u.observe(n, { box: "border-box" }), () => {
        window.cancelAnimationFrame(r), u.unobserve(n);
      };
    } else
      o(void 0);
  }, [n]), i;
}
l5(RE, "useSize");
const u5 = ["top", "right", "bottom", "left"], Oa = Math.min, Ii = Math.max, Dc = Math.round, ec = Math.floor, qi = (n) => ({
  x: n,
  y: n
}), c5 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function DE(n, i, o) {
  return Ii(n, Oa(i, o));
}
function Fi(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function Ma(n) {
  return n.split("-")[0];
}
function Us(n) {
  return n.split("-")[1];
}
function $p(n) {
  return n === "x" ? "y" : "x";
}
function Jp(n) {
  return n === "y" ? "height" : "width";
}
function vi(n) {
  const i = n[0];
  return i === "t" || i === "b" ? "y" : "x";
}
function Wp(n) {
  return $p(vi(n));
}
function f5(n, i, o) {
  o === void 0 && (o = !1);
  const r = Us(n), u = Wp(n), f = Jp(u);
  let d = u === "x" ? r === (o ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return i.reference[f] > i.floating[f] && (d = Oc(d)), [d, Oc(d)];
}
function d5(n) {
  const i = Oc(n);
  return [Jm(n), i, Jm(i)];
}
function Jm(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const MS = ["left", "right"], _S = ["right", "left"], h5 = ["top", "bottom"], m5 = ["bottom", "top"];
function p5(n, i, o) {
  switch (n) {
    case "top":
    case "bottom":
      return o ? i ? _S : MS : i ? MS : _S;
    case "left":
    case "right":
      return i ? h5 : m5;
    default:
      return [];
  }
}
function g5(n, i, o, r) {
  const u = Us(n);
  let f = p5(Ma(n), o === "start", r);
  return u && (f = f.map((d) => d + "-" + u), i && (f = f.concat(f.map(Jm)))), f;
}
function Oc(n) {
  const i = Ma(n);
  return c5[i] + n.slice(i.length);
}
function v5(n) {
  var i, o, r, u;
  return {
    top: (i = n.top) != null ? i : 0,
    right: (o = n.right) != null ? o : 0,
    bottom: (r = n.bottom) != null ? r : 0,
    left: (u = n.left) != null ? u : 0
  };
}
function OE(n) {
  return typeof n != "number" ? v5(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Mc(n) {
  const {
    x: i,
    y: o,
    width: r,
    height: u
  } = n;
  return {
    width: r,
    height: u,
    top: o,
    left: i,
    right: i + r,
    bottom: o + u,
    x: i,
    y: o
  };
}
function NS(n, i, o) {
  let {
    reference: r,
    floating: u
  } = n;
  const f = vi(i), d = Wp(i), h = Jp(d), g = Ma(i), p = f === "y", y = r.x + r.width / 2 - u.width / 2, m = r.y + r.height / 2 - u.height / 2, b = r[h] / 2 - u[h] / 2;
  let E;
  switch (g) {
    case "top":
      E = {
        x: y,
        y: r.y - u.height
      };
      break;
    case "bottom":
      E = {
        x: y,
        y: r.y + r.height
      };
      break;
    case "right":
      E = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      E = {
        x: r.x - u.width,
        y: m
      };
      break;
    default:
      E = {
        x: r.x,
        y: r.y
      };
  }
  const T = Us(i);
  return T && (E[d] += b * (T === "end" ? 1 : -1) * (o && p ? -1 : 1)), E;
}
async function y5(n, i) {
  var o;
  i === void 0 && (i = {});
  const {
    x: r,
    y: u,
    platform: f,
    rects: d,
    elements: h,
    strategy: g
  } = n, {
    boundary: p = "clippingAncestors",
    rootBoundary: y = "viewport",
    elementContext: m = "floating",
    altBoundary: b = !1,
    padding: E = 0
  } = Fi(i, n), T = OE(E), C = h[b ? m === "floating" ? "reference" : "floating" : m], A = Mc(await f.getClippingRect({
    element: (o = await (f.isElement == null ? void 0 : f.isElement(C))) == null || o ? C : C.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(h.floating)),
    boundary: p,
    rootBoundary: y,
    strategy: g
  })), _ = m === "floating" ? {
    x: r,
    y: u,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, D = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(h.floating)), M = await (f.isElement == null ? void 0 : f.isElement(D)) && await (f.getScale == null ? void 0 : f.getScale(D)) || {
    x: 1,
    y: 1
  }, H = Mc(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: h,
    rect: _,
    offsetParent: D,
    strategy: g
  }) : _);
  return {
    top: (A.top - H.top + T.top) / M.y,
    bottom: (H.bottom - A.bottom + T.bottom) / M.y,
    left: (A.left - H.left + T.left) / M.x,
    right: (H.right - A.right + T.right) / M.x
  };
}
const b5 = 50, x5 = async (n, i, o) => {
  const {
    placement: r = "bottom",
    strategy: u = "absolute",
    middleware: f = [],
    platform: d
  } = o, h = d.detectOverflow ? d : {
    ...d,
    detectOverflow: y5
  }, g = await (d.isRTL == null ? void 0 : d.isRTL(i));
  let p = await d.getElementRects({
    reference: n,
    floating: i,
    strategy: u
  }), {
    x: y,
    y: m
  } = NS(p, r, g), b = r, E = 0;
  const T = {};
  for (let R = 0; R < f.length; R++) {
    const C = f[R];
    if (!C)
      continue;
    const {
      name: A,
      fn: _
    } = C, {
      x: D,
      y: M,
      data: H,
      reset: I
    } = await _({
      x: y,
      y: m,
      initialPlacement: r,
      placement: b,
      strategy: u,
      middlewareData: T,
      rects: p,
      platform: h,
      elements: {
        reference: n,
        floating: i
      }
    });
    y = D ?? y, m = M ?? m, T[A] = {
      ...T[A],
      ...H
    }, I && E < b5 && (E++, typeof I == "object" && (I.placement && (b = I.placement), I.rects && (p = I.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: i,
      strategy: u
    }) : I.rects), {
      x: y,
      y: m
    } = NS(p, b, g)), R = -1);
  }
  return {
    x: y,
    y: m,
    placement: b,
    strategy: u,
    middlewareData: T
  };
}, S5 = (n) => ({
  name: "arrow",
  options: n,
  async fn(i) {
    const {
      x: o,
      y: r,
      placement: u,
      rects: f,
      platform: d,
      elements: h,
      middlewareData: g
    } = i, {
      element: p,
      padding: y = 0
    } = Fi(n, i) || {};
    if (p == null)
      return {};
    const m = OE(y), b = {
      x: o,
      y: r
    }, E = Wp(u), T = Jp(E), R = await d.getDimensions(p), C = E === "y", A = C ? "top" : "left", _ = C ? "bottom" : "right", D = C ? "clientHeight" : "clientWidth", M = f.reference[T] + f.reference[E] - b[E] - f.floating[T], H = b[E] - f.reference[E], I = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
    let j = I ? I[D] : 0;
    (!j || !await (d.isElement == null ? void 0 : d.isElement(I))) && (j = h.floating[D] || f.floating[T]);
    const z = M / 2 - H / 2, K = j / 2 - R[T] / 2 - 1, tt = Oa(m[A], K), ft = Oa(m[_], K), at = j - R[T] - ft, J = j / 2 - R[T] / 2 + z, ct = DE(tt, J, at), dt = !g.arrow && Us(u) != null && J !== ct && f.reference[T] / 2 - (J < tt ? tt : ft) - R[T] / 2 < 0, G = dt ? J < tt ? J - tt : J - at : 0;
    return {
      [E]: b[E] + G,
      data: {
        [E]: ct,
        centerOffset: J - ct - G,
        ...dt && {
          alignmentOffset: G
        }
      },
      reset: dt
    };
  }
}), w5 = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(i) {
      var o, r;
      const {
        placement: u,
        middlewareData: f,
        rects: d,
        initialPlacement: h,
        platform: g,
        elements: p
      } = i, {
        mainAxis: y = !0,
        crossAxis: m = !0,
        fallbackPlacements: b,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: R = !0,
        ...C
      } = Fi(n, i);
      if ((o = f.arrow) != null && o.alignmentOffset)
        return {};
      const A = Ma(u), _ = vi(h), D = Ma(h) === h, M = await (g.isRTL == null ? void 0 : g.isRTL(p.floating)), H = b || (D || !R ? [Oc(h)] : d5(h)), I = T !== "none";
      !b && I && H.push(...g5(h, R, T, M));
      const j = [h, ...H], z = await g.detectOverflow(i, C), K = [];
      let tt = ((r = f.flip) == null ? void 0 : r.overflows) || [];
      if (y && K.push(z[A]), m) {
        const ct = f5(u, d, M);
        K.push(z[ct[0]], z[ct[1]]);
      }
      if (tt = [...tt, {
        placement: u,
        overflows: K
      }], !K.every((ct) => ct <= 0)) {
        var ft, at;
        const ct = (((ft = f.flip) == null ? void 0 : ft.index) || 0) + 1, dt = j[ct];
        if (dt && (!(m === "alignment" ? _ !== vi(dt) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        tt.every(($) => vi($.placement) === _ ? $.overflows[0] > 0 : !0)))
          return {
            data: {
              index: ct,
              overflows: tt
            },
            reset: {
              placement: dt
            }
          };
        let G = (at = tt.filter((X) => X.overflows[0] <= 0).sort((X, $) => X.overflows[1] - $.overflows[1])[0]) == null ? void 0 : at.placement;
        if (!G)
          switch (E) {
            case "bestFit": {
              var J;
              const X = (J = tt.filter(($) => {
                if (I) {
                  const nt = vi($.placement);
                  return nt === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  nt === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((nt) => nt > 0).reduce((nt, F) => nt + F, 0)]).sort(($, nt) => $[1] - nt[1])[0]) == null ? void 0 : J[0];
              X && (G = X);
              break;
            }
            case "initialPlacement":
              G = h;
              break;
          }
        if (u !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
function zS(n, i) {
  return {
    top: n.top - i.height,
    right: n.right - i.width,
    bottom: n.bottom - i.height,
    left: n.left - i.width
  };
}
function jS(n) {
  return u5.some((i) => n[i] >= 0);
}
const T5 = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(i) {
      const {
        rects: o,
        platform: r
      } = i, {
        strategy: u = "referenceHidden",
        ...f
      } = Fi(n, i);
      switch (u) {
        case "referenceHidden": {
          const d = await r.detectOverflow(i, {
            ...f,
            elementContext: "reference"
          }), h = zS(d, o.reference);
          return {
            data: {
              referenceHiddenOffsets: h,
              referenceHidden: jS(h)
            }
          };
        }
        case "escaped": {
          const d = await r.detectOverflow(i, {
            ...f,
            altBoundary: !0
          }), h = zS(d, o.floating);
          return {
            data: {
              escapedOffsets: h,
              escaped: jS(h)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ME = /* @__PURE__ */ new Set(["left", "top"]);
async function E5(n, i) {
  const {
    placement: o,
    platform: r,
    elements: u
  } = n, f = await (r.isRTL == null ? void 0 : r.isRTL(u.floating)), d = Ma(o), h = Us(o), g = vi(o) === "y", p = ME.has(d) ? -1 : 1, y = f && g ? -1 : 1, m = Fi(i, n);
  let {
    mainAxis: b,
    crossAxis: E,
    alignmentAxis: T
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return h && typeof T == "number" && (E = h === "end" ? T * -1 : T), g ? {
    x: E * y,
    y: b * p
  } : {
    x: b * p,
    y: E * y
  };
}
const C5 = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(i) {
      var o, r;
      const {
        x: u,
        y: f,
        placement: d,
        middlewareData: h
      } = i, g = await E5(i, n);
      return d === ((o = h.offset) == null ? void 0 : o.placement) && (r = h.arrow) != null && r.alignmentOffset ? {} : {
        x: u + g.x,
        y: f + g.y,
        data: {
          ...g,
          placement: d
        }
      };
    }
  };
}, A5 = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(i) {
      const {
        x: o,
        y: r,
        placement: u,
        platform: f
      } = i, {
        mainAxis: d = !0,
        crossAxis: h = !1,
        limiter: g = {
          fn: (_) => {
            let {
              x: D,
              y: M
            } = _;
            return {
              x: D,
              y: M
            };
          }
        },
        ...p
      } = Fi(n, i), y = {
        x: o,
        y: r
      }, m = await f.detectOverflow(i, p), b = vi(u), E = $p(b);
      let T = y[E], R = y[b];
      const C = (_, D) => DE(D + m[_ === "y" ? "top" : "left"], D, D - m[_ === "y" ? "bottom" : "right"]);
      d && (T = C(E, T)), h && (R = C(b, R));
      const A = g.fn({
        ...i,
        [E]: T,
        [b]: R
      });
      return {
        ...A,
        data: {
          x: A.x - o,
          y: A.y - r,
          enabled: {
            [E]: d,
            [b]: h
          }
        }
      };
    }
  };
}, R5 = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(i) {
      var o, r;
      const {
        x: u,
        y: f,
        placement: d,
        rects: h,
        middlewareData: g
      } = i, {
        offset: p = 0,
        mainAxis: y = !0,
        crossAxis: m = !0
      } = Fi(n, i), b = {
        x: u,
        y: f
      }, E = vi(d), T = $p(E);
      let R = b[T], C = b[E];
      const A = Fi(p, i), _ = typeof A == "number" ? {
        mainAxis: A,
        crossAxis: 0
      } : {
        mainAxis: (o = A.mainAxis) != null ? o : 0,
        crossAxis: (r = A.crossAxis) != null ? r : 0
      };
      if (y) {
        const H = T === "y" ? "height" : "width", I = h.reference[T] - h.floating[H] + _.mainAxis, j = h.reference[T] + h.reference[H] - _.mainAxis;
        R < I ? R = I : R > j && (R = j);
      }
      if (m) {
        var D, M;
        const H = T === "y" ? "width" : "height", I = ME.has(Ma(d)), j = h.reference[E] - h.floating[H] + (I && ((D = g.offset) == null ? void 0 : D[E]) || 0) + (I ? 0 : _.crossAxis), z = h.reference[E] + h.reference[H] + (I ? 0 : ((M = g.offset) == null ? void 0 : M[E]) || 0) - (I ? _.crossAxis : 0);
        C < j ? C = j : C > z && (C = z);
      }
      return {
        [T]: R,
        [E]: C
      };
    }
  };
}, D5 = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(i) {
      const {
        placement: o,
        rects: r,
        platform: u,
        elements: f
      } = i, {
        apply: d = () => {
        },
        ...h
      } = Fi(n, i), g = await u.detectOverflow(i, h), p = Ma(o), y = Us(o), m = vi(o) === "y", {
        width: b,
        height: E
      } = r.floating;
      let T, R;
      p === "top" || p === "bottom" ? (T = p, R = y === (await (u.isRTL == null ? void 0 : u.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (R = p, T = y === "end" ? "top" : "bottom");
      const C = E - g.top - g.bottom, A = b - g.left - g.right, _ = Oa(E - g[T], C), D = Oa(b - g[R], A), M = i.middlewareData.shift, H = !M;
      let I = _, j = D;
      M != null && M.enabled.x && (j = A), M != null && M.enabled.y && (I = C), H && !y && (m ? j = b - 2 * Ii(g.left, g.right) : I = E - 2 * Ii(g.top, g.bottom)), await d({
        ...i,
        availableWidth: j,
        availableHeight: I
      });
      const z = await u.getDimensions(f.floating);
      return b !== z.width || E !== z.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Yc() {
  return typeof window < "u";
}
function Hs(n) {
  return _E(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function un(n) {
  var i;
  return (n == null || (i = n.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function Ki(n) {
  var i;
  return (i = (_E(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : i.documentElement;
}
function _E(n) {
  return Yc() ? n instanceof Node || n instanceof un(n).Node : !1;
}
function Si(n) {
  return Yc() ? n instanceof Element || n instanceof un(n).Element : !1;
}
function ja(n) {
  return Yc() ? n instanceof HTMLElement || n instanceof un(n).HTMLElement : !1;
}
function LS(n) {
  return !Yc() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof un(n).ShadowRoot;
}
function Fc(n) {
  const {
    overflow: i,
    overflowX: o,
    overflowY: r,
    display: u
  } = wi(n);
  return /auto|scroll|overlay|hidden|clip/.test(i + r + o) && u !== "inline" && u !== "contents";
}
function O5(n) {
  return /^(table|td|th)$/.test(Hs(n));
}
function Xc(n) {
  try {
    if (n.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return n.matches(":modal");
  } catch {
    return !1;
  }
}
const M5 = /transform|translate|scale|rotate|perspective|filter/, _5 = /paint|layout|strict|content/, co = (n) => !!n && n !== "none";
let rm;
function tg(n) {
  const i = Si(n) ? wi(n) : n;
  return co(i.transform) || co(i.translate) || co(i.scale) || co(i.rotate) || co(i.perspective) || !eg() && (co(i.backdropFilter) || co(i.filter)) || M5.test(i.willChange || "") || _5.test(i.contain || "");
}
function N5(n) {
  let i = yo(n);
  for (; ja(i) && !ol(i); ) {
    if (tg(i))
      return i;
    if (Xc(i))
      return null;
    i = yo(i);
  }
  return null;
}
function eg() {
  return rm == null && (rm = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), rm;
}
function ol(n) {
  return /^(html|body|#document)$/.test(Hs(n));
}
function wi(n) {
  return un(n).getComputedStyle(n);
}
function Kc(n) {
  return Si(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function yo(n) {
  if (Hs(n) === "html")
    return n;
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    LS(n) && n.host || // Fallback.
    Ki(n)
  );
  return LS(i) ? i.host : i;
}
function NE(n) {
  const i = yo(n);
  return ol(i) ? (n.ownerDocument || n).body : ja(i) && Fc(i) ? i : NE(i);
}
function sl(n, i, o) {
  var r;
  i === void 0 && (i = []), o === void 0 && (o = !0);
  const u = NE(n), f = u === ((r = n.ownerDocument) == null ? void 0 : r.body), d = un(u);
  if (f) {
    const h = Wm(d);
    return i.concat(d, d.visualViewport || [], Fc(u) ? u : [], h && o ? sl(h) : []);
  } else
    return i.concat(u, sl(u, [], o));
}
function Wm(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function zE(n) {
  const i = wi(n);
  let o = parseFloat(i.width) || 0, r = parseFloat(i.height) || 0;
  const u = ja(n), f = u ? n.offsetWidth : o, d = u ? n.offsetHeight : r, h = Dc(o) !== f || Dc(r) !== d;
  return h && (o = f, r = d), {
    width: o,
    height: r,
    $: h
  };
}
function ng(n) {
  return Si(n) ? n : n.contextElement;
}
function Os(n) {
  const i = ng(n);
  if (!ja(i))
    return qi(1);
  const o = i.getBoundingClientRect(), {
    width: r,
    height: u,
    $: f
  } = zE(i);
  let d = (f ? Dc(o.width) : o.width) / r, h = (f ? Dc(o.height) : o.height) / u;
  return (!d || !Number.isFinite(d)) && (d = 1), (!h || !Number.isFinite(h)) && (h = 1), {
    x: d,
    y: h
  };
}
const z5 = /* @__PURE__ */ qi(0);
function jE(n) {
  const i = un(n);
  return !eg() || !i.visualViewport ? z5 : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function j5(n, i, o) {
  return i === void 0 && (i = !1), !!o && i && o === un(n);
}
function bo(n, i, o, r) {
  i === void 0 && (i = !1), o === void 0 && (o = !1);
  const u = n.getBoundingClientRect(), f = ng(n);
  let d = qi(1);
  i && (r ? Si(r) && (d = Os(r)) : d = Os(n));
  const h = j5(f, o, r) ? jE(f) : qi(0);
  let g = (u.left + h.x) / d.x, p = (u.top + h.y) / d.y, y = u.width / d.x, m = u.height / d.y;
  if (f && r) {
    const b = un(f), E = Si(r) ? un(r) : r;
    let T = b, R = Wm(T);
    for (; R && E !== T; ) {
      const C = Os(R), A = R.getBoundingClientRect(), _ = wi(R), D = A.left + (R.clientLeft + parseFloat(_.paddingLeft)) * C.x, M = A.top + (R.clientTop + parseFloat(_.paddingTop)) * C.y;
      g *= C.x, p *= C.y, y *= C.x, m *= C.y, g += D, p += M, T = un(R), R = Wm(T);
    }
  }
  return Mc({
    width: y,
    height: m,
    x: g,
    y: p
  });
}
function Zc(n, i) {
  const o = Kc(n).scrollLeft;
  return i ? i.left + o : bo(Ki(n)).left + o;
}
function LE(n, i) {
  const o = n.getBoundingClientRect(), r = o.left + i.scrollLeft - Zc(n, o), u = o.top + i.scrollTop;
  return {
    x: r,
    y: u
  };
}
function L5(n) {
  let {
    elements: i,
    rect: o,
    offsetParent: r,
    strategy: u
  } = n;
  const f = u === "fixed", d = Ki(r), h = i ? Xc(i.floating) : !1;
  if (r === d || h && f)
    return o;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = qi(1);
  const y = qi(0), m = ja(r);
  if ((m || !f) && ((Hs(r) !== "body" || Fc(d)) && (g = Kc(r)), m)) {
    const E = bo(r);
    p = Os(r), y.x = E.x + r.clientLeft, y.y = E.y + r.clientTop;
  }
  const b = d && !m && !f ? LE(d, g) : qi(0);
  return {
    width: o.width * p.x,
    height: o.height * p.y,
    x: o.x * p.x - g.scrollLeft * p.x + y.x + b.x,
    y: o.y * p.y - g.scrollTop * p.y + y.y + b.y
  };
}
function V5(n) {
  return n.getClientRects ? Array.from(n.getClientRects()) : [];
}
function B5(n) {
  const i = Kc(n), o = n.ownerDocument.body, r = Ii(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), u = Ii(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let f = -i.scrollLeft + Zc(n);
  const d = -i.scrollTop;
  return wi(o).direction === "rtl" && (f += Ii(n.clientWidth, o.clientWidth) - r), {
    width: r,
    height: u,
    x: f,
    y: d
  };
}
const P5 = 25;
function U5(n, i, o) {
  o === void 0 && (o = "viewport");
  const r = o === "layoutViewport", u = un(n), f = Ki(n), d = u.visualViewport;
  let h = f.clientWidth, g = f.clientHeight, p = 0, y = 0;
  if (d) {
    const b = !eg() || i === "fixed";
    r ? b || (p = -d.offsetLeft, y = -d.offsetTop) : (h = d.width, g = d.height, b && (p = d.offsetLeft, y = d.offsetTop));
  }
  if (Zc(f) <= 0) {
    const b = f.ownerDocument, E = b.body, T = getComputedStyle(E), R = b.compatMode === "CSS1Compat" && parseFloat(T.marginLeft) + parseFloat(T.marginRight) || 0, C = Math.abs(f.clientWidth - E.clientWidth - R), A = getComputedStyle(f).scrollbarGutter === "stable both-edges" ? C / 2 : C;
    A <= P5 && (h -= A);
  }
  return {
    width: h,
    height: g,
    x: p,
    y
  };
}
function H5(n, i) {
  const o = bo(n, !0, i === "fixed"), r = o.top + n.clientTop, u = o.left + n.clientLeft, f = Os(n), d = n.clientWidth * f.x, h = n.clientHeight * f.y, g = u * f.x, p = r * f.y;
  return {
    width: d,
    height: h,
    x: g,
    y: p
  };
}
function VS(n, i, o) {
  let r;
  if (i === "viewport" || i === "layoutViewport")
    r = U5(n, o, i);
  else if (i === "document")
    r = B5(Ki(n));
  else if (Si(i))
    r = H5(i, o);
  else {
    const u = jE(n);
    r = {
      x: i.x - u.x,
      y: i.y - u.y,
      width: i.width,
      height: i.height
    };
  }
  return Mc(r);
}
function k5(n, i) {
  const o = i.get(n);
  if (o)
    return o;
  let r = sl(n, [], !1).filter((h) => Si(h) && Hs(h) !== "body"), u = null;
  const f = wi(n).position === "fixed";
  let d = f ? yo(n) : n;
  for (; Si(d) && !ol(d); ) {
    const h = wi(d), g = tg(d), p = u ? u.position : f ? "fixed" : "";
    !g && (p === "fixed" || p === "absolute" && h.position === "static") ? r = r.filter((m) => m !== d) : u = h, d = yo(d);
  }
  return i.set(n, r), r;
}
function I5(n) {
  let {
    element: i,
    boundary: o,
    rootBoundary: r,
    strategy: u
  } = n;
  const d = [...o === "clippingAncestors" ? Xc(i) ? [] : k5(i, this._c) : [].concat(o), r], h = VS(i, d[0], u);
  let g = h.top, p = h.right, y = h.bottom, m = h.left;
  for (let b = 1; b < d.length; b++) {
    const E = VS(i, d[b], u);
    g = Ii(E.top, g), p = Oa(E.right, p), y = Oa(E.bottom, y), m = Ii(E.left, m);
  }
  return {
    width: p - m,
    height: y - g,
    x: m,
    y: g
  };
}
function q5(n) {
  const {
    width: i,
    height: o
  } = zE(n);
  return {
    width: i,
    height: o
  };
}
function G5(n, i, o) {
  const r = ja(i), u = Ki(i), f = o === "fixed", d = bo(n, !0, f, i);
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = qi(0);
  if ((r || !f) && ((Hs(i) !== "body" || Fc(u)) && (h = Kc(i)), r)) {
    const b = bo(i, !0, f, i);
    g.x = b.x + i.clientLeft, g.y = b.y + i.clientTop;
  }
  !r && u && (g.x = Zc(u));
  const p = u && !r && !f ? LE(u, h) : qi(0), y = d.left + h.scrollLeft - g.x - p.x, m = d.top + h.scrollTop - g.y - p.y;
  return {
    x: y,
    y: m,
    width: d.width,
    height: d.height
  };
}
function lm(n) {
  return wi(n).position === "static";
}
function BS(n, i) {
  if (!ja(n) || wi(n).position === "fixed")
    return null;
  if (i)
    return i(n);
  let o = n.offsetParent;
  return Ki(n) === o && (o = o.ownerDocument.body), o;
}
function VE(n, i) {
  const o = un(n);
  if (Xc(n))
    return o;
  if (!ja(n)) {
    let u = yo(n);
    for (; u && !ol(u); ) {
      if (Si(u) && !lm(u))
        return u;
      u = yo(u);
    }
    return o;
  }
  let r = BS(n, i);
  for (; r && O5(r) && lm(r); )
    r = BS(r, i);
  return r && ol(r) && lm(r) && !tg(r) ? o : r || N5(n) || o;
}
const Y5 = async function(n) {
  const i = this.getOffsetParent || VE, o = this.getDimensions, r = await o(n.floating);
  return {
    reference: G5(n.reference, await i(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function F5(n) {
  return wi(n).direction === "rtl";
}
const X5 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: L5,
  getDocumentElement: Ki,
  getClippingRect: I5,
  getOffsetParent: VE,
  getElementRects: Y5,
  getClientRects: V5,
  getDimensions: q5,
  getScale: Os,
  isElement: Si,
  isRTL: F5
};
function BE(n, i) {
  return n.x === i.x && n.y === i.y && n.width === i.width && n.height === i.height;
}
function K5(n, i, o) {
  let r = null, u;
  const f = Ki(n);
  function d() {
    var y;
    clearTimeout(u), (y = r) == null || y.disconnect(), r = null;
  }
  function h(y, m) {
    y === void 0 && (y = !1), m === void 0 && (m = 1), d();
    const b = n.getBoundingClientRect(), {
      left: E,
      top: T,
      width: R,
      height: C
    } = b;
    if (y || i(), !R || !C)
      return;
    const A = ec(T), _ = ec(f.clientWidth - (E + R)), D = ec(f.clientHeight - (T + C)), M = ec(E), I = {
      rootMargin: -A + "px " + -_ + "px " + -D + "px " + -M + "px",
      threshold: Ii(0, Oa(1, m)) || 1
    };
    let j = !0;
    function z(K) {
      const tt = K[0].intersectionRatio;
      if (!BE(b, n.getBoundingClientRect()))
        return h();
      if (tt !== m) {
        if (!j)
          return h();
        tt ? h(!1, tt) : u = setTimeout(() => {
          h(!1, 1e-7);
        }, 1e3);
      }
      j = !1;
    }
    try {
      r = new IntersectionObserver(z, {
        ...I,
        // Handle <iframe>s
        root: f.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(z, I);
    }
    r.observe(n);
  }
  const g = un(n), p = () => h(o);
  return g.addEventListener("resize", p), h(!0), () => {
    g.removeEventListener("resize", p), d();
  };
}
function Z5(n, i, o, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: u = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: h = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = r, p = ng(n), y = u || f ? [...p ? sl(p) : [], ...i ? sl(i) : []] : [];
  y.forEach((A) => {
    u && A.addEventListener("scroll", o), f && A.addEventListener("resize", o);
  });
  const m = p && h ? K5(p, o, f) : null;
  let b = -1, E = null;
  d && (E = new ResizeObserver((A) => {
    let [_] = A;
    _ && _.target === p && E && i && (E.unobserve(i), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var D;
      (D = E) == null || D.observe(i);
    })), o();
  }), p && !g && E.observe(p), i && E.observe(i));
  let T, R = g ? bo(n) : null;
  g && C();
  function C() {
    const A = bo(n);
    R && !BE(R, A) && o(), R = A, T = requestAnimationFrame(C);
  }
  return o(), () => {
    var A;
    y.forEach((_) => {
      u && _.removeEventListener("scroll", o), f && _.removeEventListener("resize", o);
    }), m?.(), (A = E) == null || A.disconnect(), E = null, g && cancelAnimationFrame(T);
  };
}
const Q5 = C5, $5 = A5, J5 = w5, W5 = D5, t4 = T5, PS = S5, e4 = R5, n4 = (n, i, o) => {
  const r = /* @__PURE__ */ new Map(), u = o ?? {}, f = {
    ...X5,
    ...u.platform,
    _c: r
  };
  return x5(n, i, {
    ...u,
    platform: f
  });
};
var i4 = typeof document < "u", a4 = function() {
}, mc = i4 ? x.useLayoutEffect : a4;
function _c(n, i) {
  if (n === i)
    return !0;
  if (typeof n != typeof i)
    return !1;
  if (typeof n == "function" && n.toString() === i.toString())
    return !0;
  let o, r, u;
  if (n && i && typeof n == "object") {
    if (Array.isArray(n)) {
      if (o = n.length, o !== i.length) return !1;
      for (r = o; r-- !== 0; )
        if (!_c(n[r], i[r]))
          return !1;
      return !0;
    }
    if (u = Object.keys(n), o = u.length, o !== Object.keys(i).length)
      return !1;
    for (r = o; r-- !== 0; )
      if (!{}.hasOwnProperty.call(i, u[r]))
        return !1;
    for (r = o; r-- !== 0; ) {
      const f = u[r];
      if (!(f === "_owner" && n.$$typeof) && !_c(n[f], i[f]))
        return !1;
    }
    return !0;
  }
  return n !== n && i !== i;
}
function PE(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function US(n, i) {
  const o = PE(n);
  return Math.round(i * o) / o;
}
function um(n) {
  const i = x.useRef(n);
  return mc(() => {
    i.current = n;
  }), i;
}
function o4(n) {
  n === void 0 && (n = {});
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: u,
    elements: {
      reference: f,
      floating: d
    } = {},
    transform: h = !0,
    whileElementsMounted: g,
    open: p
  } = n, [y, m] = x.useState({
    x: 0,
    y: 0,
    strategy: o,
    placement: i,
    middlewareData: {},
    isPositioned: !1
  }), [b, E] = x.useState(r);
  _c(b, r) || E(r);
  const [T, R] = x.useState(null), [C, A] = x.useState(null), _ = x.useCallback(($) => {
    $ !== I.current && (I.current = $, R($));
  }, []), D = x.useCallback(($) => {
    $ !== j.current && (j.current = $, A($));
  }, []), M = f || T, H = d || C, I = x.useRef(null), j = x.useRef(null), z = x.useRef(y), K = g != null, tt = um(g), ft = um(u), at = um(p), J = x.useCallback(() => {
    if (!I.current || !j.current)
      return;
    const $ = {
      placement: i,
      strategy: o,
      middleware: b
    };
    ft.current && ($.platform = ft.current), n4(I.current, j.current, $).then((nt) => {
      const F = {
        ...nt,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: at.current !== !1
      };
      ct.current && !_c(z.current, F) && (z.current = F, Bs.flushSync(() => {
        m(F);
      }));
    });
  }, [b, i, o, ft, at]);
  mc(() => {
    p === !1 && z.current.isPositioned && (z.current.isPositioned = !1, m(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [p]);
  const ct = x.useRef(!1);
  mc(() => (ct.current = !0, () => {
    ct.current = !1;
  }), []), mc(() => {
    if (M && (I.current = M), H && (j.current = H), M && H) {
      if (tt.current)
        return tt.current(M, H, J);
      J();
    }
  }, [M, H, J, tt, K]);
  const dt = x.useMemo(() => ({
    reference: I,
    floating: j,
    setReference: _,
    setFloating: D
  }), [_, D]), G = x.useMemo(() => ({
    reference: M,
    floating: H
  }), [M, H]), X = x.useMemo(() => {
    const $ = {
      position: o,
      left: 0,
      top: 0
    };
    if (!G.floating)
      return $;
    const nt = US(G.floating, y.x), F = US(G.floating, y.y);
    return h ? {
      ...$,
      transform: "translate(" + nt + "px, " + F + "px)",
      ...PE(G.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: o,
      left: nt,
      top: F
    };
  }, [o, h, G.floating, y.x, y.y]);
  return x.useMemo(() => ({
    ...y,
    update: J,
    refs: dt,
    elements: G,
    floatingStyles: X
  }), [y, J, dt, G, X]);
}
const s4 = (n) => {
  function i(o) {
    return {}.hasOwnProperty.call(o, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(o) {
      const {
        element: r,
        padding: u
      } = typeof n == "function" ? n(o) : n;
      return r && i(r) ? r.current != null ? PS({
        element: r.current,
        padding: u
      }).fn(o) : {} : r ? PS({
        element: r,
        padding: u
      }).fn(o) : {};
    }
  };
}, r4 = (n, i) => {
  const o = Q5(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, l4 = (n, i) => {
  const o = $5(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, u4 = (n, i) => ({
  fn: e4(n).fn,
  options: [n, i]
}), c4 = (n, i) => {
  const o = J5(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, f4 = (n, i) => {
  const o = W5(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, d4 = (n, i) => {
  const o = t4(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, h4 = (n, i) => {
  const o = s4(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
};
var m4 = Object.defineProperty, Ra = (n, i) => m4(n, "name", { value: i, configurable: !0 }), HS = {
  Partial: "partial"
}, kS = {
  Optimized: "optimized",
  Always: "always"
}, UE = "Popper", [HE, kE] = /* @__PURE__ */ za(UE), [p4, IE] = HE(UE), g4 = /* @__PURE__ */ Ra((n) => {
  const { __scopePopper: i, children: o } = n, [r, u] = x.useState(null), [f, d] = x.useState(void 0);
  return /* @__PURE__ */ w.jsx(
    p4,
    {
      scope: i,
      anchor: r,
      onAnchorChange: u,
      placementState: f,
      setPlacementState: d,
      children: o
    }
  );
}, "Popper"), v4 = "PopperAnchor", y4 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Ra(function(i, o) {
    const { __scopePopper: r, virtualRef: u, ...f } = i, d = IE(v4, r), h = x.useRef(null), g = d.onAnchorChange, p = x.useCallback(
      (R) => {
        h.current = R, R && g(R);
      },
      [g]
    ), y = te(o, p), m = x.useRef(null);
    x.useEffect(() => {
      if (!u)
        return;
      const R = m.current;
      m.current = u.current, R !== m.current && g(m.current);
    });
    const b = d.placementState && Qc(d.placementState), E = b?.[0], T = b?.[1];
    return u ? null : /* @__PURE__ */ w.jsx(
      ee.div,
      {
        "data-radix-popper-side": E,
        "data-radix-popper-align": T,
        ...f,
        ref: y
      }
    );
  }, "PopperAnchor")
), qE = "PopperContent", [b4, bV] = HE(qE), x4 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Ra(function(i, o) {
    const {
      __scopePopper: r,
      side: u = "bottom",
      sideOffset: f = 0,
      align: d = "center",
      alignOffset: h = 0,
      arrowPadding: g = 0,
      avoidCollisions: p = !0,
      collisionBoundary: y = [],
      collisionPadding: m = 0,
      sticky: b = HS.Partial,
      hideWhenDetached: E = !1,
      updatePositionStrategy: T = kS.Optimized,
      onPlaced: R,
      ...C
    } = i, A = IE(qE, r), [_, D] = x.useState(null), M = te(o, D), [H, I] = x.useState(null), j = RE(H), z = j?.width ?? 0, K = j?.height ?? 0, tt = u + (d !== "center" ? "-" + d : ""), ft = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, at = Array.isArray(y) ? y : [y], J = at.length > 0, ct = {
      padding: ft,
      boundary: at.filter(GE),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: J
    }, { refs: dt, floatingStyles: G, placement: X, isPositioned: $, middlewareData: nt } = o4({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: tt,
      whileElementsMounted: /* @__PURE__ */ Ra((...et) => Z5(...et, {
        animationFrame: T === kS.Always
      }), "whileElementsMounted"),
      elements: {
        reference: A.anchor
      },
      middleware: [
        r4({ mainAxis: f + K, alignmentAxis: h }),
        p && l4({
          mainAxis: !0,
          crossAxis: !1,
          limiter: b === HS.Partial ? u4() : void 0,
          ...ct
        }),
        p && c4({ ...ct }),
        f4({
          ...ct,
          apply: /* @__PURE__ */ Ra(({ elements: et, rects: yt, availableWidth: it, availableHeight: rt }) => {
            const { width: Rt, height: ae } = yt.reference, le = et.floating.style;
            le.setProperty("--radix-popper-available-width", `${it}px`), le.setProperty("--radix-popper-available-height", `${rt}px`), le.setProperty("--radix-popper-anchor-width", `${Rt}px`), le.setProperty("--radix-popper-anchor-height", `${ae}px`);
          }, "apply")
        }),
        H && h4({ element: H, padding: g }),
        S4({ arrowWidth: z, arrowHeight: K }),
        E && d4({
          strategy: "referenceHidden",
          ...ct,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: J ? ct.boundary : void 0
        })
      ]
    }), F = A.setPlacementState;
    ce(() => (F(X), () => {
      F(void 0);
    }), [X, F]);
    const [xt, wt] = Qc(X), Mt = Jn(R);
    ce(() => {
      $ && Mt?.();
    }, [$, Mt]);
    const N = nt.arrow?.x, Y = nt.arrow?.y, W = nt.arrow?.centerOffset !== 0, [lt, ot] = x.useState();
    return ce(() => {
      _ && ot(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ w.jsx(
      "div",
      {
        ref: dt.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: $ ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: lt,
          "--radix-popper-transform-origin": [
            nt.transformOrigin?.x,
            nt.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...nt.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: i.dir,
        children: /* @__PURE__ */ w.jsx(
          b4,
          {
            scope: r,
            placedSide: xt,
            placedAlign: wt,
            onArrowChange: I,
            arrowX: N,
            arrowY: Y,
            shouldHideArrow: W,
            children: /* @__PURE__ */ w.jsx(
              ee.div,
              {
                "data-side": xt,
                "data-align": wt,
                ...C,
                ref: M,
                style: {
                  ...C.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: $ ? C.style?.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function GE(n) {
  return n !== null;
}
Ra(GE, "isNotNull");
var S4 = /* @__PURE__ */ Ra((n) => ({
  name: "transformOrigin",
  options: n,
  fn(i) {
    const { placement: o, rects: r, middlewareData: u } = i, d = u.arrow?.centerOffset !== 0, h = d ? 0 : n.arrowWidth, g = d ? 0 : n.arrowHeight, [p, y] = Qc(o), m = { start: "0%", center: "50%", end: "100%" }[y], b = (u.arrow?.x ?? 0) + h / 2, E = (u.arrow?.y ?? 0) + g / 2;
    let T = "", R = "";
    return p === "bottom" ? (T = d ? m : `${b}px`, R = `${-g}px`) : p === "top" ? (T = d ? m : `${b}px`, R = `${r.floating.height + g}px`) : p === "right" ? (T = `${-g}px`, R = d ? m : `${E}px`) : p === "left" && (T = `${r.floating.width + g}px`, R = d ? m : `${E}px`), { data: { x: T, y: R } };
  }
}), "transformOrigin");
function Qc(n) {
  const [i, o = "center"] = n.split("-");
  return [i, o];
}
Ra(Qc, "getSideAndAlignFromPlacement");
var w4 = Object.defineProperty, ig = (n, i) => w4(n, "name", { value: i, configurable: !0 }), cm = !1;
function YE() {
  const [n, i] = x.useState(cm);
  return x.useEffect(() => {
    cm || (cm = !0, i(!0));
  }, []), n;
}
ig(YE, "useIsHydrated");
var FE = js[" useSyncExternalStore ".trim().toString()];
function XE() {
  return () => {
  };
}
ig(XE, "subscribe");
function KE() {
  return FE(
    XE,
    () => !0,
    () => !1
  );
}
ig(KE, "useIsHydratedModern");
var T4 = typeof FE == "function" ? KE : YE, E4 = Object.defineProperty, To = (n, i) => E4(n, "name", { value: i, configurable: !0 }), fm = "rovingFocusGroup.onEntryFocus", C4 = { bubbles: !1, cancelable: !0 }, $c = "RovingFocusGroup", [tp, ZE, A4] = /* @__PURE__ */ Gp($c), [R4, QE] = /* @__PURE__ */ za(
  $c,
  [A4]
), IS = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, D4 = {
  RTL: "rtl"
}, [O4, M4] = R4($c), _4 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ To(function(i, o) {
    return /* @__PURE__ */ w.jsx(tp.Provider, { scope: i.__scopeRovingFocusGroup, children: /* @__PURE__ */ w.jsx(tp.Slot, { scope: i.__scopeRovingFocusGroup, children: /* @__PURE__ */ w.jsx(N4, { ...i, ref: o }) }) });
  }, "RovingFocusGroup")
), N4 = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ To(function(i, o) {
  const {
    __scopeRovingFocusGroup: r,
    orientation: u,
    loop: f = !1,
    dir: d,
    currentTabStopId: h,
    defaultCurrentTabStopId: g,
    onCurrentTabStopIdChange: p,
    onEntryFocus: y,
    preventScrollOnEntryFocus: m = !1,
    ...b
  } = i, E = x.useRef(null), T = te(o, E), R = kc(d), [C, A] = _s({
    prop: h,
    defaultProp: g ?? null,
    onChange: p,
    caller: $c
  }), [_, D] = x.useState(!1), M = Jn(y), H = ZE(r), I = x.useRef(!1), [j, z] = x.useState(0);
  return x.useEffect(() => {
    const K = E.current;
    if (K)
      return K.addEventListener(fm, M), () => K.removeEventListener(fm, M);
  }, [M]), /* @__PURE__ */ w.jsx(
    O4,
    {
      scope: r,
      orientation: u,
      dir: R,
      loop: f,
      currentTabStopId: C,
      onItemFocus: x.useCallback(
        (K) => A(K),
        [A]
      ),
      onItemShiftTab: x.useCallback(() => D(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => z((K) => K + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => z((K) => K - 1),
        []
      ),
      children: /* @__PURE__ */ w.jsx(
        ee.div,
        {
          tabIndex: _ || j === 0 ? -1 : 0,
          "data-orientation": u,
          ...b,
          ref: T,
          style: { outline: "none", ...i.style },
          onMouseDown: Lt(i.onMouseDown, () => {
            I.current = !0;
          }),
          onFocus: Lt(i.onFocus, (K) => {
            const tt = !I.current;
            if (K.target === K.currentTarget && tt && !_) {
              const ft = new CustomEvent(fm, C4);
              if (K.currentTarget.dispatchEvent(ft), !ft.defaultPrevented) {
                const at = H().filter((X) => X.focusable), J = at.find((X) => X.active), ct = at.find((X) => X.id === C), G = [J, ct, ...at].filter(
                  Boolean
                ).map((X) => X.ref.current);
                ag(G, m);
              }
            }
            I.current = !1;
          }),
          onBlur: Lt(i.onBlur, () => D(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), z4 = "RovingFocusGroupItem", j4 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ To(function(i, o) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: u = !0,
      active: f = !1,
      tabStopId: d,
      children: h,
      ...g
    } = i, p = Aa(), y = d || p, m = M4(z4, r), b = m.currentTabStopId === y, E = ZE(r), { onFocusableItemAdd: T, onFocusableItemRemove: R, currentTabStopId: C } = m, A = T4();
    return ce(() => {
      if (!(!A || !u))
        return T(), () => R();
    }, [A, u, T, R]), x.useEffect(() => {
      if (!(A || !u))
        return T(), () => R();
    }, [A, u, T, R]), /* @__PURE__ */ w.jsx(
      tp.ItemSlot,
      {
        scope: r,
        id: y,
        focusable: u,
        active: f,
        children: /* @__PURE__ */ w.jsx(
          ee.span,
          {
            tabIndex: b ? 0 : -1,
            "data-orientation": m.orientation,
            ...g,
            ref: o,
            onMouseDown: Lt(i.onMouseDown, (_) => {
              u ? m.onItemFocus(y) : _.preventDefault();
            }),
            onFocus: Lt(i.onFocus, () => m.onItemFocus(y)),
            onKeyDown: Lt(i.onKeyDown, (_) => {
              if (_.key === "Tab" && _.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (_.target !== _.currentTarget) return;
              const D = JE(_, m.orientation, m.dir);
              if (D !== void 0) {
                if (_.metaKey || _.ctrlKey || _.altKey || _.shiftKey) return;
                _.preventDefault();
                let H = E().filter((I) => I.focusable).map((I) => I.ref.current);
                if (D === "last") H.reverse();
                else if (D === "prev" || D === "next") {
                  D === "prev" && H.reverse();
                  const I = H.indexOf(_.currentTarget);
                  H = m.loop ? WE(H, I + 1) : H.slice(I + 1);
                }
                setTimeout(() => ag(H));
              }
            }),
            children: typeof h == "function" ? h({ isCurrentTabStop: b, hasTabStop: C != null }) : h
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), L4 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $E(n, i) {
  return i !== D4.RTL ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
To($E, "getDirectionAwareKey");
function JE(n, i, o) {
  const r = $E(n.key, o);
  if (!(i === IS.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(i === IS.Horizontal && ["ArrowUp", "ArrowDown"].includes(r)))
    return L4[r];
}
To(JE, "getFocusIntent");
function ag(n, i = !1) {
  const o = document.activeElement;
  for (const r of n)
    if (r === o || (r.focus({ preventScroll: i }), document.activeElement !== o)) return;
}
To(ag, "focusFirst");
function WE(n, i) {
  return n.map((o, r) => n[(i + r) % n.length]);
}
To(WE, "wrapArray");
var V4 = Object.defineProperty, B4 = (n, i) => V4(n, "name", { value: i, configurable: !0 });
function tC(n) {
  const i = x.useRef({ value: n, previous: n });
  return x.useMemo(() => (i.current.value !== n && (i.current.previous = i.current.value, i.current.value = n), i.current.previous), [n]);
}
B4(tC, "usePrevious");
var P4 = Object.defineProperty, U4 = (n, i) => P4(n, "name", { value: i, configurable: !0 });
function ep(n, [i, o]) {
  return Math.min(o, Math.max(i, n));
}
U4(ep, "clamp");
var H4 = Object.defineProperty, Pt = (n, i) => H4(n, "name", { value: i, configurable: !0 }), qS = {
  ItemAligned: "item-aligned",
  Popper: "popper"
}, k4 = {
  RTL: "rtl"
}, I4 = [" ", "Enter", "ArrowUp", "ArrowDown"], q4 = [" ", "Enter"], Ns = "Select", [Jc, Wc, G4] = /* @__PURE__ */ Gp(Ns), [Eo, xV] = /* @__PURE__ */ za(Ns, [
  G4,
  kE
]), og = kE(), [Y4, La] = Eo(Ns), [F4, X4] = Eo(Ns);
function eC(n) {
  const {
    __scopeSelect: i,
    children: o,
    open: r,
    defaultOpen: u,
    onOpenChange: f,
    value: d,
    defaultValue: h,
    onValueChange: g,
    dir: p,
    name: y,
    autoComplete: m,
    disabled: b,
    required: E,
    form: T,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: R
  } = n, C = og(i), [A, _] = x.useState(null), [D, M] = x.useState(null), [H, I] = x.useState(!1), j = kc(p), [z, K] = _s({
    prop: r,
    defaultProp: u ?? !1,
    onChange: f,
    caller: Ns
  }), [tt, ft] = _s({
    prop: d,
    defaultProp: h,
    onChange: g,
    caller: Ns
  }), at = x.useRef(null), J = x.useRef(tt);
  x.useEffect(() => {
    const wt = T ? A?.ownerDocument.getElementById(T) : A?.form;
    if (wt instanceof HTMLFormElement) {
      const Mt = /* @__PURE__ */ Pt(() => ft(J.current), "reset");
      return wt.addEventListener("reset", Mt), () => wt.removeEventListener("reset", Mt);
    }
  }, [T, A, ft]);
  const ct = A ? !!T || !!A.closest("form") : !0, [dt, G] = x.useState(/* @__PURE__ */ new Set()), X = Aa(), $ = Array.from(dt).map((wt) => wt.props.value).join(";"), nt = x.useCallback((wt) => {
    G((Mt) => new Set(Mt).add(wt));
  }, []), F = x.useCallback((wt) => {
    G((Mt) => {
      const N = new Set(Mt);
      return N.delete(wt), N;
    });
  }, []), xt = {
    required: E,
    trigger: A,
    onTriggerChange: _,
    valueNode: D,
    onValueNodeChange: M,
    valueNodeHasChildren: H,
    onValueNodeHasChildrenChange: I,
    contentId: X,
    value: tt,
    onValueChange: ft,
    open: z,
    onOpenChange: K,
    dir: j,
    triggerPointerDownPosRef: at,
    disabled: b,
    name: y,
    autoComplete: m,
    form: T,
    nativeOptions: dt,
    nativeSelectKey: $,
    isFormControl: ct
  };
  return /* @__PURE__ */ w.jsx(g4, { ...C, children: /* @__PURE__ */ w.jsx(Y4, { scope: i, ...xt, children: /* @__PURE__ */ w.jsx(Jc.Provider, { scope: i, children: /* @__PURE__ */ w.jsx(
    F4,
    {
      scope: i,
      onNativeOptionAdd: nt,
      onNativeOptionRemove: F,
      children: oC(R) ? R(xt) : o
    }
  ) }) }) });
}
Pt(eC, "SelectProvider");
var K4 = /* @__PURE__ */ Pt((n) => {
  const { __scopeSelect: i, children: o, ...r } = n;
  return /* @__PURE__ */ w.jsx(
    eC,
    {
      __scopeSelect: i,
      ...r,
      internal_do_not_use_render: ({ isFormControl: u }) => /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        o,
        u ? /* @__PURE__ */ w.jsx(
          xL,
          {
            __scopeSelect: i
          }
        ) : null
      ] })
    }
  );
}, "Select"), Z4 = "SelectTrigger", Q4 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, disabled: u = !1, ...f } = i, d = og(r), h = La(Z4, r), g = h.disabled || u, p = te(o, h.onTriggerChange), y = Wc(r), m = x.useRef("touch"), [b, E, T] = rg((C) => {
      const A = y().filter((M) => !M.disabled), _ = A.find((M) => M.value === h.value), D = lg(A, C, _);
      D !== void 0 && h.onValueChange(D.value);
    }), R = /* @__PURE__ */ Pt((C) => {
      g || (h.onOpenChange(!0), T()), C && (h.triggerPointerDownPosRef.current = {
        x: Math.round(C.pageX),
        y: Math.round(C.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ w.jsx(y4, { asChild: !0, ...d, children: /* @__PURE__ */ w.jsx(
      ee.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": h.open ? h.contentId : void 0,
        "aria-expanded": h.open,
        "aria-required": h.required,
        "aria-autocomplete": "none",
        dir: h.dir,
        "data-state": h.open ? "open" : "closed",
        disabled: g,
        "data-disabled": g ? "" : void 0,
        "data-placeholder": fl(h.value) ? "" : void 0,
        ...f,
        ref: p,
        onClick: Lt(f.onClick, (C) => {
          C.currentTarget.focus(), m.current !== "mouse" && R(C);
        }),
        onPointerDown: Lt(f.onPointerDown, (C) => {
          m.current = C.pointerType;
          const A = C.target;
          A.hasPointerCapture(C.pointerId) && A.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (R(C), C.preventDefault());
        }),
        onKeyDown: Lt(f.onKeyDown, (C) => {
          const A = b.current !== "";
          !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && E(C.key), !(A && C.key === " ") && I4.includes(C.key) && (R(), C.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), $4 = "SelectValue", J4 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, className: u, style: f, children: d, placeholder: h = "", ...g } = i, p = La($4, r), { onValueNodeHasChildrenChange: y } = p, m = d !== void 0, b = te(o, p.onValueNodeChange);
    ce(() => {
      y(m);
    }, [y, m]);
    const E = fl(p.value);
    return /* @__PURE__ */ w.jsx(
      ee.span,
      {
        ...g,
        asChild: E ? !1 : g.asChild,
        ref: b,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ w.jsx(x.Fragment, { children: E ? h : d }, E ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), W4 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, children: u, ...f } = i;
    return /* @__PURE__ */ w.jsx(ee.span, { "aria-hidden": !0, ...f, ref: o, children: u || "▼" });
  }, "SelectIcon")
), tL = "SelectPortal", [eL, nL] = Eo(tL, {
  forceMount: void 0
}), iL = /* @__PURE__ */ Pt((n) => {
  const { __scopeSelect: i, forceMount: o, ...r } = n;
  return /* @__PURE__ */ w.jsx(eL, { scope: n.__scopeSelect, forceMount: o, children: /* @__PURE__ */ w.jsx(dE, { asChild: !0, ...r }) });
}, "SelectPortal"), xo = "SelectContent", aL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const r = nL(xo, i.__scopeSelect), { forceMount: u = r.forceMount, ...f } = i, d = La(xo, i.__scopeSelect), [h, g] = x.useState();
    return ce(() => {
      g(new DocumentFragment());
    }, []), /* @__PURE__ */ w.jsx(Hc, { present: u || d.open, children: ({ present: p }) => p ? /* @__PURE__ */ w.jsx(rL, { ...f, ref: o }) : /* @__PURE__ */ w.jsx(oL, { ...f, fragment: h }) });
  }, "SelectContent")
), oL = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const { __scopeSelect: r, children: u, fragment: f } = i;
  return f ? Bs.createPortal(
    /* @__PURE__ */ w.jsx(nC, { scope: r, children: /* @__PURE__ */ w.jsx(Jc.Slot, { scope: r, children: /* @__PURE__ */ w.jsx("div", { ref: o, children: u }) }) }),
    f
  ) : null;
}, "SelectContentFragment")), Xn = 10, [nC, Co] = Eo(xo), sL = /* @__PURE__ */ Gi("SelectContent.RemoveScroll"), rL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r } = i, {
      position: u = qS.ItemAligned,
      onCloseAutoFocus: f,
      onEscapeKeyDown: d,
      onPointerDownOutside: h,
      //
      // PopperContent props
      side: g,
      sideOffset: p,
      align: y,
      alignOffset: m,
      arrowPadding: b,
      collisionBoundary: E,
      collisionPadding: T,
      sticky: R,
      hideWhenDetached: C,
      avoidCollisions: A,
      //
      ..._
    } = i, D = La(xo, r), [M, H] = x.useState(null), [I, j] = x.useState(null), z = te(o, H), [K, tt] = x.useState(null), [ft, at] = x.useState(
      null
    ), J = Wc(r), [ct, dt] = x.useState(!1), G = x.useRef(!1);
    x.useEffect(() => {
      if (M) return SE(M);
    }, [M]), Ic();
    const X = x.useCallback(
      (ot) => {
        const [et, ...yt] = J().map((Rt) => Rt.ref.current), [it] = yt.slice(-1), rt = document.activeElement;
        for (const Rt of ot)
          if (Rt === rt || (Rt?.scrollIntoView({ block: "nearest" }), Rt === et && I && (I.scrollTop = 0), Rt === it && I && (I.scrollTop = I.scrollHeight), Rt?.focus(), document.activeElement !== rt)) return;
      },
      [J, I]
    ), $ = x.useCallback(
      () => X([K, M]),
      [X, K, M]
    );
    x.useEffect(() => {
      ct && $();
    }, [ct, $]);
    const { onOpenChange: nt, triggerPointerDownPosRef: F } = D;
    x.useEffect(() => {
      if (M) {
        let ot = { x: 0, y: 0 };
        const et = /* @__PURE__ */ Pt((it) => {
          ot = {
            x: Math.abs(Math.round(it.pageX) - (F.current?.x ?? 0)),
            y: Math.abs(Math.round(it.pageY) - (F.current?.y ?? 0))
          };
        }, "handlePointerMove"), yt = /* @__PURE__ */ Pt((it) => {
          ot.x <= 10 && ot.y <= 10 ? it.preventDefault() : it.composedPath().includes(M) || nt(!1), document.removeEventListener("pointermove", et), F.current = null;
        }, "handlePointerUp");
        return F.current !== null && (document.addEventListener("pointermove", et), document.addEventListener("pointerup", yt, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", et), document.removeEventListener("pointerup", yt, { capture: !0 });
        };
      }
    }, [M, nt, F]), x.useEffect(() => {
      const ot = /* @__PURE__ */ Pt(() => nt(!1), "close");
      return window.addEventListener("blur", ot), window.addEventListener("resize", ot), () => {
        window.removeEventListener("blur", ot), window.removeEventListener("resize", ot);
      };
    }, [nt]);
    const [xt, wt] = rg((ot) => {
      const et = J().filter((rt) => !rt.disabled), yt = et.find((rt) => rt.ref.current === document.activeElement), it = lg(et, ot, yt);
      it && setTimeout(() => it.ref.current?.focus());
    }), Mt = x.useCallback(
      (ot, et, yt) => {
        const it = !G.current && !yt;
        (D.value !== void 0 && D.value === et || it) && (tt(ot), it && (G.current = !0));
      },
      [D.value]
    ), N = x.useCallback(() => M?.focus(), [M]), Y = x.useCallback(
      (ot, et, yt) => {
        const it = !G.current && !yt;
        (D.value !== void 0 && D.value === et || it) && at(ot);
      },
      [D.value]
    ), W = u === qS.Popper ? GS : lL, lt = W === GS ? {
      side: g,
      sideOffset: p,
      align: y,
      alignOffset: m,
      arrowPadding: b,
      collisionBoundary: E,
      collisionPadding: T,
      sticky: R,
      hideWhenDetached: C,
      avoidCollisions: A
    } : {};
    return /* @__PURE__ */ w.jsx(
      nC,
      {
        scope: r,
        content: M,
        viewport: I,
        onViewportChange: j,
        itemRefCallback: Mt,
        selectedItem: K,
        onItemLeave: N,
        itemTextRefCallback: Y,
        focusSelectedItem: $,
        selectedItemText: ft,
        position: u,
        isPositioned: ct,
        searchRef: xt,
        children: /* @__PURE__ */ w.jsx(Zp, { as: sL, allowPinchZoom: !0, children: /* @__PURE__ */ w.jsx(
          nE,
          {
            asChild: !0,
            trapped: D.open,
            onMountAutoFocus: (ot) => {
              ot.preventDefault();
            },
            onUnmountAutoFocus: Lt(f, (ot) => {
              D.trigger?.focus({ preventScroll: !0 }), ot.preventDefault();
            }),
            children: /* @__PURE__ */ w.jsx(
              JT,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: h,
                onFocusOutside: (ot) => ot.preventDefault(),
                onDismiss: () => D.onOpenChange(!1),
                children: /* @__PURE__ */ w.jsx(
                  W,
                  {
                    role: "listbox",
                    id: D.contentId,
                    "data-state": D.open ? "open" : "closed",
                    dir: D.dir,
                    onContextMenu: (ot) => ot.preventDefault(),
                    ..._,
                    ...lt,
                    onPlaced: () => dt(!0),
                    ref: z,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: Lt(_.onKeyDown, (ot) => {
                      const et = ot.ctrlKey || ot.altKey || ot.metaKey;
                      if (ot.key === "Tab" && ot.preventDefault(), !et && ot.key.length === 1 && wt(ot.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(ot.key)) {
                        let it = J().filter((rt) => !rt.disabled).map((rt) => rt.ref.current);
                        if (["ArrowUp", "End"].includes(ot.key) && (it = it.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(ot.key)) {
                          const rt = ot.target, Rt = it.indexOf(rt);
                          it = it.slice(Rt + 1);
                        }
                        setTimeout(() => X(it)), ot.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "SelectContentImpl")
), lL = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const { __scopeSelect: r, onPlaced: u, ...f } = i, d = La(xo, r), h = Co(xo, r), [g, p] = x.useState(null), [y, m] = x.useState(null), b = te(o, m), E = Wc(r), T = x.useRef(!1), R = x.useRef(!0), { viewport: C, selectedItem: A, selectedItemText: _, focusSelectedItem: D } = h, M = x.useCallback(() => {
    if (d.trigger && d.valueNode && g && y && C && A && _) {
      const z = d.trigger.getBoundingClientRect(), K = y.getBoundingClientRect(), tt = d.valueNode.getBoundingClientRect(), ft = _.getBoundingClientRect();
      if (d.dir !== k4.RTL) {
        const rt = ft.left - K.left, Rt = tt.left - rt, ae = z.left - Rt, le = z.width + ae, je = Math.max(le, K.width), Qt = window.innerWidth - Xn, Bt = ep(Rt, [
          Xn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Xn, Qt - je)
        ]);
        g.style.minWidth = le + "px", g.style.left = Bt + "px";
      } else {
        const rt = K.right - ft.right, Rt = window.innerWidth - tt.right - rt, ae = window.innerWidth - z.right - Rt, le = z.width + ae, je = Math.max(le, K.width), Qt = window.innerWidth - Xn, Bt = ep(Rt, [
          Xn,
          Math.max(Xn, Qt - je)
        ]);
        g.style.minWidth = le + "px", g.style.right = Bt + "px";
      }
      const at = E(), J = window.innerHeight - Xn * 2, ct = C.scrollHeight, dt = window.getComputedStyle(y), G = parseInt(dt.borderTopWidth, 10), X = parseInt(dt.paddingTop, 10), $ = parseInt(dt.borderBottomWidth, 10), nt = parseInt(dt.paddingBottom, 10), F = G + X + ct + nt + $, xt = Math.min(A.offsetHeight * 5, F), wt = window.getComputedStyle(C), Mt = parseInt(wt.paddingTop, 10), N = parseInt(wt.paddingBottom, 10), Y = z.top + z.height / 2 - Xn, W = J - Y, lt = A.offsetHeight / 2, ot = A.offsetTop + lt, et = G + X + ot, yt = F - et;
      if (et <= Y) {
        const rt = at.length > 0 && A === at[at.length - 1].ref.current;
        g.style.bottom = "0px";
        const Rt = y.clientHeight - C.offsetTop - C.offsetHeight, ae = Math.max(
          W,
          lt + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (rt ? N : 0) + Rt + $
        ), le = et + ae;
        g.style.height = le + "px";
      } else {
        const rt = at.length > 0 && A === at[0].ref.current;
        g.style.top = "0px";
        const ae = Math.max(
          Y,
          G + C.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (rt ? Mt : 0) + lt
        ) + yt;
        g.style.height = ae + "px", C.scrollTop = et - Y + C.offsetTop;
      }
      g.style.margin = `${Xn}px 0`, g.style.minHeight = xt + "px", g.style.maxHeight = J + "px", u?.(), requestAnimationFrame(() => T.current = !0);
    }
  }, [
    E,
    d.trigger,
    d.valueNode,
    g,
    y,
    C,
    A,
    _,
    d.dir,
    u
  ]);
  ce(() => M(), [M]);
  const [H, I] = x.useState();
  ce(() => {
    y && I(window.getComputedStyle(y).zIndex);
  }, [y]);
  const j = x.useCallback(
    (z) => {
      z && R.current === !0 && (M(), D?.(), R.current = !1);
    },
    [M, D]
  );
  return /* @__PURE__ */ w.jsx(
    uL,
    {
      scope: r,
      contentWrapper: g,
      shouldExpandOnScrollRef: T,
      onScrollButtonChange: j,
      children: /* @__PURE__ */ w.jsx(
        "div",
        {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: H
          },
          children: /* @__PURE__ */ w.jsx(
            ee.div,
            {
              ...f,
              ref: b,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...f.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), GS = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const {
    __scopeSelect: r,
    align: u = "start",
    collisionPadding: f = Xn,
    ...d
  } = i, h = og(r);
  return /* @__PURE__ */ w.jsx(
    x4,
    {
      ...h,
      ...d,
      ref: o,
      align: u,
      collisionPadding: f,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...d.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "SelectPopperPosition")), [uL, sg] = Eo(xo, {}), YS = "SelectViewport", cL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, nonce: u, ...f } = i, d = Co(YS, r), h = sg(YS, r), g = te(o, d.onViewportChange), p = x.useRef(0);
    return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: u
        }
      ),
      /* @__PURE__ */ w.jsx(Jc.Slot, { scope: r, children: /* @__PURE__ */ w.jsx(
        ee.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...f,
          ref: g,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...f.style
          },
          onScroll: Lt(f.onScroll, (y) => {
            const m = y.currentTarget, { contentWrapper: b, shouldExpandOnScrollRef: E } = h;
            if (E?.current && b) {
              const T = Math.abs(p.current - m.scrollTop);
              if (T > 0) {
                const R = window.innerHeight - Xn * 2, C = parseFloat(b.style.minHeight), A = parseFloat(b.style.height), _ = Math.max(C, A);
                if (_ < R) {
                  const D = _ + T, M = Math.min(R, D), H = D - M;
                  b.style.height = M + "px", b.style.bottom === "0px" && (m.scrollTop = H > 0 ? H : 0, b.style.justifyContent = "flex-end");
                }
              }
            }
            p.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), fL = "SelectGroup", [SV, wV] = Eo(fL), np = "SelectItem", [dL, iC] = Eo(np), hL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const {
      __scopeSelect: r,
      value: u,
      disabled: f = !1,
      textValue: d,
      ...h
    } = i, g = La(np, r), p = Co(np, r), y = g.value === u, [m, b] = x.useState(d ?? ""), [E, T] = x.useState(!1), R = Jn(
      (M) => p.itemRefCallback?.(M, u, f)
    ), C = te(o, R), A = Aa(), _ = x.useRef("touch"), D = /* @__PURE__ */ Pt(() => {
      g.onValueChange(u), g.onOpenChange(!1);
    }, "handleSelect");
    return /* @__PURE__ */ w.jsx(
      dL,
      {
        scope: r,
        value: u,
        disabled: f,
        textId: A,
        isSelected: y,
        onItemTextChange: x.useCallback((M) => {
          b((H) => H || (M?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ w.jsx(
          Jc.ItemSlot,
          {
            scope: r,
            value: u,
            disabled: f,
            textValue: m,
            children: /* @__PURE__ */ w.jsx(
              ee.div,
              {
                role: "option",
                "aria-labelledby": A,
                "data-highlighted": E ? "" : void 0,
                "aria-selected": y && E,
                "data-state": y ? "checked" : "unchecked",
                "aria-disabled": f || void 0,
                "data-disabled": f ? "" : void 0,
                tabIndex: f ? void 0 : -1,
                ...h,
                ref: C,
                onFocus: Lt(h.onFocus, () => T(!0)),
                onBlur: Lt(h.onBlur, () => T(!1)),
                onClick: Lt(h.onClick, () => {
                  f || _.current !== "mouse" && D();
                }),
                onPointerUp: Lt(h.onPointerUp, () => {
                  f || _.current === "mouse" && D();
                }),
                onPointerDown: Lt(h.onPointerDown, (M) => {
                  _.current = M.pointerType;
                }),
                onPointerMove: Lt(h.onPointerMove, (M) => {
                  _.current = M.pointerType, f ? p.onItemLeave?.() : _.current === "mouse" && M.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Lt(h.onPointerLeave, (M) => {
                  M.currentTarget === document.activeElement && p.onItemLeave?.();
                }),
                onKeyDown: Lt(h.onKeyDown, (M) => {
                  f || M.target !== M.currentTarget || p.searchRef?.current !== "" && M.key === " " || (q4.includes(M.key) && D(), M.key === " " && M.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), nc = "SelectItemText", mL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, className: u, style: f, ...d } = i, h = La(nc, r), g = Co(nc, r), p = iC(nc, r), y = X4(nc, r), [m, b] = x.useState(null), E = Jn(
      (D) => g.itemTextRefCallback?.(D, p.value, p.disabled)
    ), T = te(
      o,
      b,
      p.onItemTextChange,
      E
    ), R = m?.textContent, C = x.useMemo(
      () => /* @__PURE__ */ w.jsx("option", { value: p.value, disabled: p.disabled, children: R }, p.value),
      [p.disabled, p.value, R]
    ), { onNativeOptionAdd: A, onNativeOptionRemove: _ } = y;
    return ce(() => (A(C), () => _(C)), [A, _, C]), /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx(ee.span, { id: p.textId, ...d, ref: T }),
      p.isSelected && h.valueNode && !h.valueNodeHasChildren && !fl(h.value) ? Bs.createPortal(d.children, h.valueNode) : null
    ] });
  }, "SelectItemText")
), pL = "SelectItemIndicator", gL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, ...u } = i;
    return iC(pL, r).isSelected ? /* @__PURE__ */ w.jsx(ee.span, { "aria-hidden": !0, ...u, ref: o }) : null;
  }, "SelectItemIndicator")
), FS = "SelectScrollUpButton", vL = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const r = Co(FS, i.__scopeSelect), u = sg(FS, i.__scopeSelect), [f, d] = x.useState(!1), h = te(o, u.onScrollButtonChange);
  return ce(() => {
    if (r.viewport && r.isPositioned) {
      let g = function() {
        const y = p.scrollTop > 0;
        d(y);
      };
      Pt(g, "handleScroll");
      const p = r.viewport;
      return g(), p.addEventListener("scroll", g), () => p.removeEventListener("scroll", g);
    }
  }, [r.viewport, r.isPositioned]), f ? /* @__PURE__ */ w.jsx(
    aC,
    {
      ...i,
      ref: h,
      onAutoScroll: () => {
        const { viewport: g, selectedItem: p } = r;
        g && p && (g.scrollTop = g.scrollTop - p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), XS = "SelectScrollDownButton", yL = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const r = Co(XS, i.__scopeSelect), u = sg(XS, i.__scopeSelect), [f, d] = x.useState(!1), h = te(o, u.onScrollButtonChange);
  return ce(() => {
    if (r.viewport && r.isPositioned) {
      let g = function() {
        const y = p.scrollHeight - p.clientHeight, m = Math.ceil(p.scrollTop) < y;
        d(m);
      };
      Pt(g, "handleScroll");
      const p = r.viewport;
      return g(), p.addEventListener("scroll", g), () => p.removeEventListener("scroll", g);
    }
  }, [r.viewport, r.isPositioned]), f ? /* @__PURE__ */ w.jsx(
    aC,
    {
      ...i,
      ref: h,
      onAutoScroll: () => {
        const { viewport: g, selectedItem: p } = r;
        g && p && (g.scrollTop = g.scrollTop + p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), aC = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const { __scopeSelect: r, onAutoScroll: u, ...f } = i, d = Co("SelectScrollButton", r), h = x.useRef(null), g = Wc(r), p = x.useCallback(() => {
    h.current !== null && (window.clearInterval(h.current), h.current = null);
  }, []);
  return x.useEffect(() => () => p(), [p]), ce(() => {
    g().find((m) => m.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [g]), /* @__PURE__ */ w.jsx(
    ee.div,
    {
      "aria-hidden": !0,
      ...f,
      ref: o,
      style: { flexShrink: 0, ...f.style },
      onPointerDown: Lt(f.onPointerDown, () => {
        h.current === null && (h.current = window.setInterval(u, 50));
      }),
      onPointerMove: Lt(f.onPointerMove, () => {
        d.onItemLeave?.(), h.current === null && (h.current = window.setInterval(u, 50));
      }),
      onPointerLeave: Lt(f.onPointerLeave, () => {
        p();
      })
    }
  );
}, "SelectScrollButtonImpl")), bL = "SelectBubbleInput", xL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pt(function({ __scopeSelect: i, ...o }, r) {
    const u = La(bL, i), { value: f, onValueChange: d, required: h, disabled: g, name: p, autoComplete: y, form: m } = u, { nativeOptions: b, nativeSelectKey: E } = u, T = x.useRef(null), R = te(r, T), C = f ?? "", A = tC(C), _ = Array.from(b).some(
      (D) => (D.props.value ?? "") === ""
    );
    return x.useEffect(() => {
      const D = T.current;
      if (!D) return;
      const M = window.HTMLSelectElement.prototype, I = Object.getOwnPropertyDescriptor(
        M,
        "value"
      ).set;
      if (A !== C && I) {
        const j = new Event("change", { bubbles: !0 });
        I.call(D, C), D.dispatchEvent(j);
      }
    }, [A, C]), /* @__PURE__ */ w.jsxs(
      ee.select,
      {
        "aria-hidden": !0,
        required: h,
        tabIndex: -1,
        name: p,
        autoComplete: y,
        disabled: g,
        form: m,
        onChange: (D) => d(D.target.value),
        ...o,
        style: { ...Az, ...o.style },
        ref: R,
        defaultValue: C,
        children: [
          fl(f) && !_ ? /* @__PURE__ */ w.jsx("option", { value: "" }) : null,
          Array.from(b)
        ]
      },
      E
    );
  }, "SelectBubbleInput")
);
function oC(n) {
  return typeof n == "function";
}
Pt(oC, "isFunction");
function fl(n) {
  return n === "" || n === void 0;
}
Pt(fl, "shouldShowPlaceholder");
function rg(n) {
  const i = Jn(n), o = x.useRef(""), r = x.useRef(0), u = x.useCallback(
    (d) => {
      const h = o.current + d;
      i(h), (/* @__PURE__ */ Pt((function g(p) {
        o.current = p, window.clearTimeout(r.current), p !== "" && (r.current = window.setTimeout(() => g(""), 1e3));
      }), "updateSearch"))(h);
    },
    [i]
  ), f = x.useCallback(() => {
    o.current = "", window.clearTimeout(r.current);
  }, []);
  return x.useEffect(() => () => window.clearTimeout(r.current), []), [o, u, f];
}
Pt(rg, "useTypeaheadSearch");
function lg(n, i, o) {
  const u = i.length > 1 && Array.from(i).every((p) => p === i[0]) ? i[0] : i, f = o ? n.indexOf(o) : -1;
  let d = sC(n, Math.max(f, 0));
  u.length === 1 && (d = d.filter((p) => p !== o));
  const g = d.find(
    (p) => p.textValue.toLowerCase().startsWith(u.toLowerCase())
  );
  return g !== o ? g : void 0;
}
Pt(lg, "findNextItem");
function sC(n, i) {
  return n.map((o, r) => n[(i + r) % n.length]);
}
Pt(sC, "wrapArray");
var SL = Object.defineProperty, dl = (n, i) => SL(n, "name", { value: i, configurable: !0 }), rC = {
  Automatic: "automatic",
  Manual: "manual"
}, ug = "Tabs", [wL, TV] = /* @__PURE__ */ za(ug, [
  QE
]), lC = QE(), [TL, uC] = wL(ug), EL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dl(function(i, o) {
    const {
      __scopeTabs: r,
      value: u,
      onValueChange: f,
      defaultValue: d,
      orientation: h = "horizontal",
      dir: g,
      activationMode: p = rC.Automatic,
      ...y
    } = i, m = kc(g), [b, E] = _s({
      prop: u,
      onChange: f,
      defaultProp: d ?? "",
      caller: ug
    });
    return /* @__PURE__ */ w.jsx(
      TL,
      {
        scope: r,
        baseId: Aa(),
        value: b,
        onValueChange: E,
        orientation: h,
        dir: m,
        activationMode: p,
        children: /* @__PURE__ */ w.jsx(
          ee.div,
          {
            dir: m,
            "data-orientation": h,
            ...y,
            ref: o
          }
        )
      }
    );
  }, "Tabs")
), CL = "TabsList", AL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dl(function(i, o) {
    const { __scopeTabs: r, loop: u = !0, ...f } = i, d = uC(CL, r), h = lC(r);
    return /* @__PURE__ */ w.jsx(
      _4,
      {
        asChild: !0,
        ...h,
        orientation: d.orientation,
        dir: d.dir,
        loop: u,
        children: /* @__PURE__ */ w.jsx(
          ee.div,
          {
            role: "tablist",
            "aria-orientation": d.orientation,
            ...f,
            ref: o
          }
        )
      }
    );
  }, "TabsList")
), RL = "TabsTrigger", DL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ dl(function(i, o) {
    const { __scopeTabs: r, value: u, disabled: f = !1, ...d } = i, h = uC(RL, r), g = lC(r), p = cC(h.baseId, u), y = fC(h.baseId, u), m = u === h.value;
    return /* @__PURE__ */ w.jsx(
      j4,
      {
        asChild: !0,
        ...g,
        focusable: !f,
        active: m,
        children: /* @__PURE__ */ w.jsx(
          ee.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": y,
            "data-state": m ? "active" : "inactive",
            "data-disabled": f ? "" : void 0,
            disabled: f,
            id: p,
            ...d,
            ref: o,
            onMouseDown: Lt(i.onMouseDown, (b) => {
              !f && b.button === 0 && b.ctrlKey === !1 ? (b.currentTarget.focus(), h.onValueChange(u)) : b.preventDefault();
            }),
            onKeyDown: Lt(i.onKeyDown, (b) => {
              f || b.target !== b.currentTarget || [" ", "Enter"].includes(b.key) && h.onValueChange(u);
            }),
            onFocus: Lt(i.onFocus, () => {
              const b = h.activationMode !== rC.Manual;
              !m && !f && b && h.onValueChange(u);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
);
function cC(n, i) {
  return `${n}-trigger-${i}`;
}
dl(cC, "makeTriggerId");
function fC(n, i) {
  return `${n}-content-${i}`;
}
dl(fC, "makeContentId");
const OL = hT(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function gi({
  className: n,
  variant: i = "default",
  size: o = "default",
  asChild: r = !1,
  ...u
}) {
  const f = r ? vz : "button";
  return /* @__PURE__ */ w.jsx(
    f,
    {
      "data-slot": "button",
      "data-variant": i,
      "data-size": o,
      className: Ye(OL({ variant: i, size: o, className: n })),
      ...u
    }
  );
}
function dC() {
  if (typeof document > "u") return;
  const n = document.getElementById("cats-course-workspace-portals");
  if (n) return n;
  const i = document.createElement("div");
  return i.id = "cats-course-workspace-portals", i.className = "cats-course-workspace", i.dataset.courseWorkspacePortal = "", document.body.append(i), i;
}
function ip({ ...n }) {
  return /* @__PURE__ */ w.jsx(
    K4,
    {
      "data-slot": "select",
      ...n
    }
  );
}
function ap({ ...n }) {
  return /* @__PURE__ */ w.jsx(
    J4,
    {
      "data-slot": "select-value",
      ...n
    }
  );
}
function op({
  className: n,
  size: i = "default",
  children: o,
  ...r
}) {
  return /* @__PURE__ */ w.jsxs(
    Q4,
    {
      "data-slot": "select-trigger",
      "data-size": i,
      className: Ye(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        n
      ),
      ...r,
      children: [
        o,
        /* @__PURE__ */ w.jsx(W4, { asChild: !0, children: /* @__PURE__ */ w.jsx(Hp, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function sp({
  className: n,
  children: i,
  position: o = "item-aligned",
  align: r = "center",
  ...u
}) {
  return /* @__PURE__ */ w.jsx(iL, { container: dC(), children: /* @__PURE__ */ w.jsxs(
    aL,
    {
      "data-slot": "select-content",
      className: Ye(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        n
      ),
      position: o,
      align: r,
      ...u,
      children: [
        /* @__PURE__ */ w.jsx(ML, {}),
        /* @__PURE__ */ w.jsx(
          cL,
          {
            className: Ye(
              "p-1",
              o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: i
          }
        ),
        /* @__PURE__ */ w.jsx(_L, {})
      ]
    }
  ) });
}
function Zn({
  className: n,
  children: i,
  ...o
}) {
  return /* @__PURE__ */ w.jsxs(
    hL,
    {
      "data-slot": "select-item",
      className: Ye(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        n
      ),
      ...o,
      children: [
        /* @__PURE__ */ w.jsx(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ w.jsx(gL, { children: /* @__PURE__ */ w.jsx(Fw, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ w.jsx(mL, { children: i })
      ]
    }
  );
}
function ML({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ w.jsx(
    vL,
    {
      "data-slot": "select-scroll-up-button",
      className: Ye("flex cursor-default items-center justify-center py-1", n),
      ...i,
      children: /* @__PURE__ */ w.jsx(m3, { className: "size-4" })
    }
  );
}
function _L({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ w.jsx(
    yL,
    {
      "data-slot": "select-scroll-down-button",
      className: Ye("flex cursor-default items-center justify-center py-1", n),
      ...i,
      children: /* @__PURE__ */ w.jsx(Hp, { className: "size-4" })
    }
  );
}
function NL({
  className: n,
  orientation: i = "horizontal",
  ...o
}) {
  return /* @__PURE__ */ w.jsx(
    EL,
    {
      "data-slot": "tabs",
      "data-orientation": i,
      orientation: i,
      className: Ye("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", n),
      ...o
    }
  );
}
const zL = hT(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function jL({
  className: n,
  variant: i = "default",
  ...o
}) {
  return /* @__PURE__ */ w.jsx(
    AL,
    {
      "data-slot": "tabs-list",
      "data-variant": i,
      className: Ye(zL({ variant: i }), n),
      ...o
    }
  );
}
function KS({ className: n, ...i }) {
  return /* @__PURE__ */ w.jsx(
    DL,
    {
      "data-slot": "tabs-trigger",
      className: Ye(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        n
      ),
      ...i
    }
  );
}
function hC({ ...n }) {
  return /* @__PURE__ */ w.jsx(
    Fj,
    {
      "data-slot": "dialog",
      ...n
    }
  );
}
function LL({ ...n }) {
  return /* @__PURE__ */ w.jsx(
    Kj,
    {
      "data-slot": "dialog-trigger",
      ...n
    }
  );
}
function VL({ ...n }) {
  return /* @__PURE__ */ w.jsx(
    Qj,
    {
      "data-slot": "dialog-portal",
      container: dC(),
      ...n
    }
  );
}
function BL({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ w.jsx(
    $j,
    {
      "data-slot": "dialog-overlay",
      className: Ye(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        n
      ),
      ...i
    }
  );
}
function mC({
  className: n,
  children: i,
  showCloseButton: o = !0,
  ...r
}) {
  return /* @__PURE__ */ w.jsxs(VL, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ w.jsx(BL, {}),
    /* @__PURE__ */ w.jsxs(
      t5,
      {
        "data-slot": "dialog-content",
        className: Ye(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          n
        ),
        ...r,
        children: [
          i,
          o && /* @__PURE__ */ w.jsxs(
            s5,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ w.jsx(T3, {}),
                /* @__PURE__ */ w.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function pC({ className: n, ...i }) {
  return /* @__PURE__ */ w.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: Ye("flex flex-col gap-2 text-center sm:text-left", n),
      ...i
    }
  );
}
function gC({ className: n, ...i }) {
  return /* @__PURE__ */ w.jsx(
    i5,
    {
      "data-slot": "dialog-title",
      className: Ye("text-lg leading-none font-semibold", n),
      ...i
    }
  );
}
function vC({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ w.jsx(
    a5,
    {
      "data-slot": "dialog-description",
      className: Ye("text-sm text-muted-foreground", n),
      ...i
    }
  );
}
function ZS(n, i) {
  let o;
  return (...r) => {
    window.clearTimeout(o), o = window.setTimeout(() => n(...r), i);
  };
}
function PL({ debounce: n, scroll: i, polyfill: o, offsetSize: r } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const u = o || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!u) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [f, d] = x.useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), h = x.useRef({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: f, orientationHandler: null }), g = n ? typeof n == "number" ? n : n.scroll : null, p = n ? typeof n == "number" ? n : n.resize : null, y = x.useRef(!1);
  x.useEffect(() => (y.current = !0, () => {
    y.current = !1;
  }));
  const [m, b, E] = x.useMemo(() => {
    const A = () => {
      if (!h.current.element) return;
      const { left: _, top: D, width: M, height: H, bottom: I, right: j, x: z, y: K } = h.current.element.getBoundingClientRect(), tt = { left: _, top: D, width: M, height: H, bottom: I, right: j, x: z, y: K };
      h.current.element instanceof HTMLElement && r && (tt.height = h.current.element.offsetHeight, tt.width = h.current.element.offsetWidth), Object.freeze(tt), y.current && !IL(h.current.lastBounds, tt) && d(h.current.lastBounds = tt);
    };
    return [A, p ? ZS(A, p) : A, g ? ZS(A, g) : A];
  }, [d, r, g, p]);
  function T() {
    h.current.scrollContainers && (h.current.scrollContainers.forEach((A) => A.removeEventListener("scroll", E, !0)), h.current.scrollContainers = null), h.current.resizeObserver && (h.current.resizeObserver.disconnect(), h.current.resizeObserver = null), h.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", h.current.orientationHandler));
  }
  function R() {
    h.current.element && (h.current.resizeObserver = new u(E), h.current.resizeObserver.observe(h.current.element), i && h.current.scrollContainers && h.current.scrollContainers.forEach((A) => A.addEventListener("scroll", E, { capture: !0, passive: !0 })), h.current.orientationHandler = () => {
      E();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", h.current.orientationHandler));
  }
  const C = (A) => {
    !A || A === h.current.element || (T(), h.current.element = A, h.current.scrollContainers = yC(A), R());
  };
  return HL(E, !!i), UL(b), x.useEffect(() => {
    T(), R();
  }, [i, E, b]), x.useEffect(() => T, []), [C, f, m];
}
function UL(n) {
  x.useEffect(() => {
    const i = n;
    return window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [n]);
}
function HL(n, i) {
  x.useEffect(() => {
    if (i) {
      const o = n;
      return window.addEventListener("scroll", o, { capture: !0, passive: !0 }), () => {
        window.removeEventListener("scroll", o, !0);
      };
    }
  }, [n, i]);
}
function yC(n) {
  const i = [];
  if (!n || n === document.body) return i;
  const { overflow: o, overflowX: r, overflowY: u } = window.getComputedStyle(n);
  return [o, r, u].some((f) => f === "auto" || f === "scroll") && i.push(n), [...i, ...yC(n.parentElement)];
}
const kL = ["x", "y", "top", "bottom", "left", "right", "width", "height"], IL = (n, i) => kL.every((o) => n[o] === i[o]), bC = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.3
};
function QS({ value: n, place: i }) {
  const o = Math.floor(n / i) % 10, r = Da(o), u = TN(r, bC);
  return x.useEffect(() => {
    u.set(o);
  }, [u, o]), /* @__PURE__ */ w.jsxs("div", { className: "relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums", children: [
    /* @__PURE__ */ w.jsx("div", { className: "invisible", children: "0" }),
    Array.from({ length: 10 }, (f, d) => /* @__PURE__ */ w.jsx(
      qL,
      {
        mv: u,
        number: d
      },
      d
    ))
  ] });
}
function qL({ mv: n, number: i }) {
  const o = x.useId(), [r, u] = PL(), f = kw(n, (d) => {
    if (!u.height) return 0;
    const h = d % 10, g = (10 + i - h) % 10;
    let p = g * u.height;
    return g > 5 && (p -= 10 * u.height), p;
  });
  return u.height ? /* @__PURE__ */ w.jsx(
    CN.span,
    {
      style: { y: f },
      layoutId: `${o}-${i}`,
      className: "absolute inset-0 flex items-center justify-center",
      transition: bC,
      ref: r,
      children: i
    }
  ) : /* @__PURE__ */ w.jsx(
    "span",
    {
      ref: r,
      className: "invisible absolute",
      children: i
    }
  );
}
function GL({
  value: n,
  padStart: i = !1,
  decimalSeparator: o = "."
}) {
  const r = Math.abs(n), [u, f] = r.toString().split("."), d = parseInt(u, 10), g = (i && d < 10 ? `0${u}` : u).split(""), p = g.map((y, m) => Math.pow(10, g.length - m - 1));
  return /* @__PURE__ */ w.jsxs("div", { className: "flex items-center", children: [
    n < 0 && "-",
    g.map((y, m) => /* @__PURE__ */ w.jsx(
      QS,
      {
        value: d,
        place: p[m]
      },
      `pos-${p[m]}`
    )),
    f && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx("span", { children: o }),
      f.split("").map((y, m) => /* @__PURE__ */ w.jsx(
        QS,
        {
          value: parseInt(f, 10),
          place: Math.pow(10, f.length - m - 1)
        },
        `decimal-${m}`
      ))
    ] })
  ] });
}
const xC = [
  "id",
  "title",
  "provider",
  "category",
  "applicantId",
  "learner",
  "start",
  "end",
  "created",
  "status",
  "fee",
  "days"
];
function YL(n, i, o) {
  const r = new URL(n.url, i);
  if (n.status !== 200 || n.redirected || r.origin !== i || r.pathname !== o)
    throw new Error("The request snapshot could not be loaded. Your session may have expired.");
}
function FL(n, i, o, r) {
  if (i.role !== n.role || i.id !== n.id)
    throw new Error("Your session has changed or expired. Open the request list to sign in again.");
  const u = n.role === "EMPLOYEE" ? "current-year-course-start" : "assigned-students";
  if (!o || o.schemaVersion !== "1" || o.role !== n.role || o.identityId !== n.id || o.scope !== u)
    throw new Error(
      "The service returned an unexpected request snapshot. Open the original request list to check it."
    );
  const f = /* @__PURE__ */ new Set();
  for (const d of r) {
    for (const g of xC)
      if (!Object.hasOwn(d, g) || typeof d[g] != "string")
        throw new Error(
          "A request is missing a required snapshot field. Open the original request list to check it."
        );
    const h = d.id;
    if (!/^\d+$/.test(h) || f.has(h))
      throw new Error("The application snapshot contains invalid or duplicate record IDs.");
    if (f.add(h), n.role === "EMPLOYEE" && d.applicantId !== n.id)
      throw new Error(
        "The returned requests do not belong to this account. Open the original request list."
      );
  }
  return r;
}
const hl = {
  EMPLOYEE: {
    route: "/employee/applications",
    marker: "#cats-student-data",
    row: "[data-dashboard-record]",
    identityField: "userId",
    scope: "current-year-course-start",
    detail: "/employee/applications/"
  },
  MANAGER: {
    route: "/manager/history",
    marker: "#cats-manager-data",
    row: "[data-insight-record]",
    identityField: "managerId",
    scope: "assigned-students",
    detail: "/manager/applications/"
  }
};
function XL(n) {
  const i = n.dataset.role, o = n.dataset.userId || "";
  if (i !== "EMPLOYEE" && i !== "MANAGER" || !/^\d+$/.test(o))
    throw new Error("This account cannot open the request workspace.");
  const r = { role: i, id: o };
  if (!KL(document, r) || n.dataset.source !== hl[i].route)
    throw new Error("The workspace does not match the current account.");
  return r;
}
function KL(n, i) {
  const o = n.querySelector(
    ".sidebar-identity[data-cats-role][data-cats-user-id]"
  );
  return o?.dataset.catsRole === i.role && o.dataset.catsUserId === i.id;
}
function SC() {
  const n = window.CATS_INSIGHTS_DATA;
  if (!n || n.schemaVersion !== 1 || n.fields.length !== 12)
    throw new Error("The request data tools could not be loaded. Open the original request list.");
  return n;
}
function ZL(n, i) {
  const o = new DOMParser().parseFromString(n, "text/html"), r = hl[i.role], u = SC(), f = o.querySelector(
    ".sidebar-identity[data-cats-role][data-cats-user-id]"
  ), d = o.querySelector(r.marker), h = Array.from(d?.querySelectorAll(r.row) || [], (y) => {
    const m = {};
    for (const b of xC)
      Object.hasOwn(y.dataset, b) && (m[b] = y.dataset[b] || "");
    return m;
  }), g = FL(
    i,
    { role: f?.dataset.catsRole, id: f?.dataset.catsUserId },
    d ? {
      schemaVersion: d.dataset.schemaVersion,
      role: d.dataset.role,
      identityId: d.dataset[r.identityField],
      scope: d.dataset.scope
    } : null,
    h
  ), p = u.normalize(g);
  return u.sort(p, { field: "created", direction: "desc" });
}
async function QL(n, i) {
  const o = hl[n.role], r = await fetch(o.route, {
    method: "GET",
    credentials: "same-origin",
    cache: "no-store",
    headers: { Accept: "text/html" },
    signal: i
  });
  return YL(r, window.location.origin, o.route), {
    records: ZL(await r.text(), n),
    loadedAt: /* @__PURE__ */ new Date(),
    scope: o.scope
  };
}
function $L(n, i) {
  return hl[n.role].detail + i.id;
}
const JL = {
  APPLIED: "Awaiting review",
  UPDATED: "Updated, awaiting review",
  APPROVED: "Approved",
  COMPLETED: "Completed",
  REJECTED: "Rejected",
  CANCELLED: "Cancelled",
  DELETED: "Deleted"
};
function wC(n) {
  return JL[n] || "Status not recorded";
}
function pc(n) {
  return n ? new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(/* @__PURE__ */ new Date(n.slice(0, 10) + "T00:00:00Z")) : "Not recorded";
}
function zs(n) {
  if (n == null) return "Not recorded";
  const [i, o] = n.split("."), r = i.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return o == null ? r : `${r}.${o}`;
}
function So() {
  const n = SC();
  if (typeof n.aggregate != "function" || typeof n.toCsv != "function")
    throw new Error("The request analysis tools are unavailable. Reload this page.");
  return n;
}
function WL(n) {
  if (n.dataset.role !== "ADMIN") return XL(n);
  const i = document.querySelector(".sidebar-identity[data-cats-role]");
  if (i?.dataset.catsRole !== "ADMIN" || i.dataset.catsUserId !== n.dataset.userId || !/^\d+$/.test(n.dataset.userId || "") || n.dataset.source !== "")
    throw new Error("The demonstration does not match the current account.");
  return null;
}
function TC(n, i) {
  const o = So().toCsv(n), r = URL.createObjectURL(new Blob(["\uFEFF", o], { type: "text/csv;charset=utf-8" })), u = document.createElement("a");
  u.href = r, u.download = `cats-${i}-requests-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, u.click(), setTimeout(() => URL.revokeObjectURL(r), 1e3);
}
const dm = { search: "", status: "all", category: "all" }, tV = [
  {
    intent: "pending",
    prompt: "Find awaiting review",
    description: "Find requests that need a manager’s decision."
  },
  {
    intent: "demand",
    prompt: "Compare course demand",
    description: "Rank course groups by their request counts."
  },
  {
    intent: "export",
    prompt: "Export current results",
    description: "Download every request matching your filters."
  }
], eV = {
  all: [],
  pending: ["APPLIED", "UPDATED"],
  accepted: ["APPROVED", "COMPLETED"],
  rejected: ["REJECTED"],
  cancelled: ["CANCELLED"],
  deleted: ["DELETED"]
};
function nV(n) {
  const i = n.trim().toLowerCase();
  return /\b(approve|reject|delete|cancel|submit|enroll)\b/.test(i) ? null : /\b(export|download|csv)\b/.test(i) ? "export" : /\b(awaiting|pending|review)\b/.test(i) ? "pending" : /\b(demand|compare|popular|rank)\b/.test(i) ? "demand" : null;
}
function iV(n, i) {
  return n === "pending" ? { ...i, status: "pending" } : n === "demand" ? { ...i, status: "all" } : i;
}
function rp(n, i) {
  return So().filter(n, {
    search: i.search,
    status: eV[i.status],
    category: i.category === "all" ? "" : i.category
  });
}
function EC(n) {
  if (n.aborted) throw new DOMException("The workflow was stopped.", "AbortError");
}
async function aV(n) {
  await new Promise((i) => setTimeout(i, 0)), EC(n);
}
const $S = [
  ["Practical data analysis", "Example Learning Studio", "Data"],
  ["Cloud foundations", "Example Technology Academy", "Technology"],
  ["Leading small teams", "Example People Institute", "Leadership"],
  ["Project planning essentials", "Example Learning Studio", "Management"],
  ["Security awareness", "Example Technology Academy", "Technology"],
  ["Responsible use of AI", "Example People Institute", "Data"],
  ["Presenting with clarity", "Example Communication Lab", "Communication"],
  ["Designing better services", "Example Design School", "Design"]
], JS = [
  "APPLIED",
  "APPLIED",
  "UPDATED",
  "APPROVED",
  "APPROVED",
  "COMPLETED",
  "COMPLETED",
  "REJECTED",
  "CANCELLED",
  "DELETED"
], WS = /* @__PURE__ */ new Map();
function oV(n = 5e3) {
  const i = WS.get(n);
  if (i) return i;
  const o = Array.from({ length: n }, (u, f) => {
    const [d, h, g] = $S[(f * 7 + Math.floor(f / 11)) % $S.length], p = f * 17 % 240, y = String(1 + f * 5 % 12).padStart(2, "0"), m = String(1 + f * 3 % 28).padStart(2, "0");
    return {
      id: String(2500001 + f),
      title: d,
      provider: h,
      category: g,
      applicantId: String(9500001 + p),
      learner: `Sample employee ${String(p + 1).padStart(3, "0")}`,
      start: `2026-${y}-${m}`,
      end: `2026-${y}-${m}`,
      created: `2026-${y}-${m}T${String(f % 24).padStart(2, "0")}:30:00`,
      status: JS[f % JS.length],
      fee: `${100 + f * 37 % 900}.${String(f * 13 % 100).padStart(2, "0")}`,
      days: ["0.5", "1.0", "1.5", "2.0", "2.5"][f % 5]
    };
  }), r = So().sort(So().normalize(o), {
    field: "created",
    direction: "desc"
  });
  return WS.set(n, r), r;
}
function sV(n, i, o) {
  const [r, u] = x.useState(null), [f, d] = x.useState(null), [h, g] = x.useState(null), [p, y] = x.useState(null), [m, b] = x.useState([]), [E, T] = x.useState(!1), [R, C] = x.useState(""), A = x.useRef(null), _ = x.useRef(0);
  x.useEffect(() => (_.current++, A.current?.abort(), u(null), d(null), g(null), y(null), b([]), T(!1), C(""), () => {
    _.current++, A.current?.abort();
  }), [i, o]);
  const D = x.useCallback(
    async (H, I, j) => {
      const z = nV(H);
      if (!z) {
        Ea.info(
          "Choose a query, course-demand comparison or CSV export. Decisions stay on the review page."
        );
        return;
      }
      const K = ++_.current;
      A.current?.abort();
      const tt = new AbortController();
      A.current = tt;
      const ft = tt.signal;
      let at = !1;
      const J = setTimeout(() => {
        at = !0, tt.abort();
      }, 15e3), ct = Ea.loading("Running the read-only workflow…");
      T(!0), C("");
      const dt = iV(z, I), G = [
        {
          id: "query",
          title: "Read requests",
          state: "waiting",
          detail: i === "sample" ? "Use the separate, fixed example dataset." : "Fetch and verify the current account’s Java-scoped request snapshot."
        },
        {
          id: "filter",
          title: "Apply filters",
          state: "waiting",
          detail: z === "pending" ? "Awaiting review includes APPLIED and UPDATED requests, plus your search and category." : z === "demand" ? "Compare all statuses within your search and category." : "Keep the current search, status and category."
        },
        {
          id: "analyse",
          title: "Summarise results",
          state: "waiting",
          detail: "Count distinct employee IDs, group courses by title/provider/category, and sum recorded decimal fees and days."
        },
        ...z === "export" ? [
          {
            id: "export",
            title: "Prepare CSV",
            state: "waiting",
            detail: "Export every matching row, with quoted fields and spreadsheet-formula protection."
          }
        ] : []
      ];
      b(G);
      function X(nt, F) {
        _.current === K && b(
          (xt) => xt.map((wt) => wt.id === nt ? { ...wt, ...F } : wt)
        );
      }
      async function $(nt, F, xt) {
        X(nt, { state: "running" }), await aV(ft);
        const wt = performance.now(), Mt = await F();
        return EC(ft), X(nt, {
          state: "complete",
          detail: xt(Mt),
          elapsed: Math.round((performance.now() - wt) * 10) / 10
        }), Mt;
      }
      try {
        const nt = await $(
          "query",
          async () => {
            if (i === "sample")
              return { records: oV(o), loadedAt: /* @__PURE__ */ new Date() };
            if (!n) throw new Error("This account has no live request dataset.");
            return QL(n, ft);
          },
          (xt) => `${xt.records.length.toLocaleString("en")} ${i === "sample" ? "sample" : "verified"} requests read. ${i === "sample" ? "No account data was used." : n?.role === "MANAGER" ? "Assigned employees only." : "Your courses starting in the current server year only."}`
        ), F = await $(
          "filter",
          () => rp(nt.records, dt),
          (xt) => `Scanned ${nt.records.length.toLocaleString("en")} requests; ${xt.length.toLocaleString("en")} match. ${nt.records.length - xt.length} excluded by the selected filters.`
        );
        if (await $(
          "analyse",
          () => So().aggregate(F),
          (xt) => `${xt.count.toLocaleString("en")} requests; ${xt.students.toLocaleString("en")} employees with requests; ${xt.courses.length} course groups. Totals include recorded values only.`
        ), z === "export" && await $(
          "export",
          () => (TC(F, i), F.length),
          (xt) => `${xt.toLocaleString("en")} matching requests included in the CSV download. Pagination does not limit this export.`
        ), _.current !== K) return;
        j(dt), u(nt.records), d(i), g(o), y(nt.loadedAt), Ea.success(
          z === "export" ? "CSV prepared from all matching requests." : `${F.length.toLocaleString("en")} requests found.`,
          { id: ct }
        );
      } catch (nt) {
        if (_.current !== K) {
          Ea.dismiss(ct);
          return;
        }
        const F = ft.aborted && !at, xt = F ? "Workflow stopped. You can run it again." : at ? "The request timed out. Try again or open the original request list." : nt instanceof Error ? nt.message : "Requests could not be read. Try again.";
        b(
          (wt) => wt.map(
            (Mt) => Mt.state === "running" ? { ...Mt, state: F ? "stopped" : "error", detail: xt } : Mt
          )
        ), F || (C(xt), u(null), y(null)), Ea[F ? "info" : "error"](xt, { id: ct });
      } finally {
        clearTimeout(J), _.current === K && (T(!1), A.current = null);
      }
    },
    [i, n, o]
  ), M = f === i && (i !== "sample" || h === o);
  return {
    records: M ? r : null,
    loadedAt: M ? p : null,
    steps: m,
    busy: E,
    error: R,
    run: D,
    abort: () => A.current?.abort()
  };
}
function rV({ steps: n, busy: i }) {
  return /* @__PURE__ */ w.jsxs(
    "section",
    {
      className: "ad-steps",
      "aria-label": "Workflow operations",
      "aria-busy": i,
      children: [
        /* @__PURE__ */ w.jsx("div", { className: "ad-section-label", children: "LAST WORKFLOW" }),
        n.length === 0 ? /* @__PURE__ */ w.jsx("p", { className: "ad-small-muted", children: "Choose a prompt to see each operation and its result." }) : /* @__PURE__ */ w.jsx("ol", { children: n.map((o) => {
          const r = o.state === "complete" ? Fw : o.state === "running" ? g3 : o.state === "error" ? S3 : o.state === "stopped" ? rT : p3;
          return /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsxs(
            "details",
            {
              className: "ad-step",
              "data-step-state": o.state,
              children: [
                /* @__PURE__ */ w.jsxs("summary", { children: [
                  /* @__PURE__ */ w.jsx(
                    r,
                    {
                      className: o.state === "running" ? "ad-spinning" : "",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ w.jsx("span", { children: o.title }),
                  /* @__PURE__ */ w.jsx("span", { className: "ad-step-state", children: o.state }),
                  /* @__PURE__ */ w.jsx(Hp, { "aria-hidden": "true" })
                ] }),
                /* @__PURE__ */ w.jsxs("div", { className: "ad-step-detail", children: [
                  /* @__PURE__ */ w.jsx("p", { children: o.detail }),
                  o.elapsed != null && /* @__PURE__ */ w.jsxs("small", { children: [
                    "Operation time: ",
                    o.elapsed,
                    " ms"
                  ] })
                ] })
              ]
            }
          ) }, o.id);
        }) }),
        /* @__PURE__ */ w.jsxs(
          "span",
          {
            className: "sr-only",
            role: "status",
            "aria-live": "polite",
            children: [
              n.filter((o) => o.state === "complete").length,
              " of ",
              n.length,
              " operations complete."
            ]
          }
        )
      ]
    }
  );
}
function lV({ className: n, type: i, ...o }) {
  return /* @__PURE__ */ w.jsx(
    "input",
    {
      type: i,
      "data-slot": "input",
      className: Ye(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        n
      ),
      ...o
    }
  );
}
function uV({
  filters: n,
  categories: i,
  disabled: o,
  onChange: r
}) {
  return /* @__PURE__ */ w.jsxs("div", { className: "ad-filters", children: [
    /* @__PURE__ */ w.jsxs("label", { className: "ad-search", children: [
      /* @__PURE__ */ w.jsx(iT, { "aria-hidden": "true" }),
      /* @__PURE__ */ w.jsx(
        lV,
        {
          type: "search",
          value: n.search,
          disabled: o,
          placeholder: "Search requests",
          "aria-label": "Search results by title, provider, employee or ID",
          onChange: (u) => r({ ...n, search: u.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ w.jsxs(
      ip,
      {
        value: n.status,
        disabled: o,
        onValueChange: (u) => r({ ...n, status: u }),
        children: [
          /* @__PURE__ */ w.jsx(
            op,
            {
              className: "ad-filter-select",
              "aria-label": "Result status",
              children: /* @__PURE__ */ w.jsx(ap, {})
            }
          ),
          /* @__PURE__ */ w.jsxs(sp, { className: "ad-select-content", children: [
            /* @__PURE__ */ w.jsx(Zn, { value: "all", children: "All statuses" }),
            /* @__PURE__ */ w.jsx(Zn, { value: "pending", children: "Awaiting review" }),
            /* @__PURE__ */ w.jsx(Zn, { value: "accepted", children: "Approved or completed" }),
            /* @__PURE__ */ w.jsx(Zn, { value: "rejected", children: "Rejected" }),
            /* @__PURE__ */ w.jsx(Zn, { value: "cancelled", children: "Cancelled" }),
            /* @__PURE__ */ w.jsx(Zn, { value: "deleted", children: "Deleted" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ w.jsxs(
      ip,
      {
        value: n.category,
        disabled: o,
        onValueChange: (u) => r({ ...n, category: u }),
        children: [
          /* @__PURE__ */ w.jsx(
            op,
            {
              className: "ad-filter-select",
              "aria-label": "Result category",
              children: /* @__PURE__ */ w.jsx(ap, {})
            }
          ),
          /* @__PURE__ */ w.jsxs(sp, { className: "ad-select-content", children: [
            /* @__PURE__ */ w.jsx(Zn, { value: "all", children: "All categories" }),
            i.map((u) => /* @__PURE__ */ w.jsx(
              Zn,
              {
                value: u,
                children: u || "Uncategorised"
              },
              u
            ))
          ] })
        ]
      }
    ),
    /* @__PURE__ */ w.jsxs(
      gi,
      {
        variant: "ghost",
        disabled: o || !n.search && n.status === "all" && n.category === "all",
        onClick: () => r({ search: "", status: "all", category: "all" }),
        children: [
          /* @__PURE__ */ w.jsx(y3, { "aria-hidden": "true" }),
          "Reset"
        ]
      }
    )
  ] });
}
function cV({ summary: n }) {
  const i = n.courses.slice(0, 6), o = Math.max(1, ...i.map((u) => u.count)), r = i.map((u) => `${u.title}, ${u.provider}, ${u.category}: ${u.count} requests`).join("; ");
  return /* @__PURE__ */ w.jsxs("figure", { className: "ad-chart", children: [
    /* @__PURE__ */ w.jsxs("header", { children: [
      /* @__PURE__ */ w.jsx(Gw, { "aria-hidden": "true" }),
      /* @__PURE__ */ w.jsxs("div", { children: [
        /* @__PURE__ */ w.jsx("h3", { children: "Course demand" }),
        /* @__PURE__ */ w.jsx("p", { children: "Top course groups in the current results" })
      ] })
    ] }),
    i.length ? /* @__PURE__ */ w.jsx(
      "div",
      {
        className: "ad-chart-plot",
        tabIndex: 0,
        "aria-label": "Course demand chart, scroll horizontally on small screens",
        children: /* @__PURE__ */ w.jsx(
          "svg",
          {
            viewBox: `0 0 640 ${i.length * 57 + 12}`,
            role: "img",
            "aria-label": r,
            children: i.map((u, f) => /* @__PURE__ */ w.jsxs(
              "g",
              {
                transform: `translate(0 ${f * 57})`,
                children: [
                  /* @__PURE__ */ w.jsx(
                    "text",
                    {
                      x: "0",
                      y: "17",
                      className: "ad-chart-label",
                      children: u.title.length > 39 ? u.title.slice(0, 36) + "…" : u.title
                    }
                  ),
                  /* @__PURE__ */ w.jsx(
                    "text",
                    {
                      x: "0",
                      y: "35",
                      className: "ad-chart-provider",
                      children: u.provider.length > 42 ? u.provider.slice(0, 39) + "…" : u.provider
                    }
                  ),
                  /* @__PURE__ */ w.jsx(
                    "rect",
                    {
                      x: "310",
                      y: "8",
                      width: "270",
                      height: "22",
                      rx: "3",
                      className: "ad-chart-track"
                    }
                  ),
                  /* @__PURE__ */ w.jsx(
                    "rect",
                    {
                      x: "310",
                      y: "8",
                      width: Math.max(2, u.count / o * 270),
                      height: "22",
                      rx: "3",
                      className: "ad-chart-bar"
                    }
                  ),
                  /* @__PURE__ */ w.jsx(
                    "text",
                    {
                      x: "632",
                      y: "24",
                      textAnchor: "end",
                      className: "ad-chart-value",
                      children: u.count.toLocaleString("en")
                    }
                  )
                ]
              },
              u.key
            ))
          }
        )
      }
    ) : /* @__PURE__ */ w.jsx("p", { className: "ad-chart-empty", children: "No matching requests to compare." }),
    /* @__PURE__ */ w.jsx("figcaption", { children: "Groups use the request’s course title, provider and category. Counts represent requests, not course capacity." })
  ] });
}
function fV({
  records: n,
  page: i,
  onPage: o,
  onDetail: r
}) {
  const u = Math.max(1, Math.ceil(n.length / 50)), f = Math.min(i, u), d = (f - 1) * 50;
  return /* @__PURE__ */ w.jsxs("div", { className: "ad-list", children: [
    /* @__PURE__ */ w.jsx("div", { className: "ad-table-scroll", children: /* @__PURE__ */ w.jsxs("table", { children: [
      /* @__PURE__ */ w.jsx("caption", { className: "sr-only", children: "Matching requests. Fifty rows per page." }),
      /* @__PURE__ */ w.jsx("thead", { children: /* @__PURE__ */ w.jsxs("tr", { children: [
        /* @__PURE__ */ w.jsx("th", { scope: "col", children: "Course / reference" }),
        /* @__PURE__ */ w.jsx("th", { scope: "col", children: "Employee" }),
        /* @__PURE__ */ w.jsx("th", { scope: "col", children: "Status" }),
        /* @__PURE__ */ w.jsx("th", { scope: "col", children: "Start date" }),
        /* @__PURE__ */ w.jsx(
          "th",
          {
            scope: "col",
            className: "ad-numeric",
            children: "Fee"
          }
        ),
        /* @__PURE__ */ w.jsx(
          "th",
          {
            scope: "col",
            className: "ad-numeric",
            children: "Days"
          }
        )
      ] }) }),
      /* @__PURE__ */ w.jsx("tbody", { children: n.slice(d, d + 50).map((h) => /* @__PURE__ */ w.jsxs("tr", { children: [
        /* @__PURE__ */ w.jsxs("td", { children: [
          /* @__PURE__ */ w.jsx(
            "button",
            {
              type: "button",
              className: "ad-course-link",
              onClick: () => r(h),
              children: h.title || "Untitled course"
            }
          ),
          /* @__PURE__ */ w.jsxs("small", { children: [
            h.provider || "Provider not recorded",
            " · #",
            h.id
          ] })
        ] }),
        /* @__PURE__ */ w.jsx("td", { children: h.learner || "Not recorded" }),
        /* @__PURE__ */ w.jsx("td", { children: /* @__PURE__ */ w.jsx(
          "span",
          {
            className: "ad-status",
            "data-request-status": h.status,
            children: wC(h.status)
          }
        ) }),
        /* @__PURE__ */ w.jsx("td", { children: pc(h.start) }),
        /* @__PURE__ */ w.jsx("td", { className: "ad-numeric", children: zs(h.fee) }),
        /* @__PURE__ */ w.jsx("td", { className: "ad-numeric", children: zs(h.days) })
      ] }, h.id)) })
    ] }) }),
    n.length === 0 && /* @__PURE__ */ w.jsxs("div", { className: "ad-empty", children: [
      /* @__PURE__ */ w.jsx("h3", { children: "No requests match these filters" }),
      /* @__PURE__ */ w.jsx("p", { children: "Reset your search, status or category to see the other records." })
    ] }),
    /* @__PURE__ */ w.jsxs("footer", { className: "ad-pagination", children: [
      /* @__PURE__ */ w.jsxs("p", { children: [
        n.length ? `${d + 1}–${Math.min(d + 50, n.length)} of ${n.length.toLocaleString("en")} requests` : "0 matching requests",
        /* @__PURE__ */ w.jsx("small", { children: "Client paging · 50 rows per page" })
      ] }),
      /* @__PURE__ */ w.jsxs("nav", { "aria-label": "Result pages", children: [
        /* @__PURE__ */ w.jsx(
          gi,
          {
            variant: "outline",
            size: "sm",
            "aria-label": "Previous result page",
            disabled: f === 1,
            onClick: () => o(f - 1),
            children: /* @__PURE__ */ w.jsx(h3, { "aria-hidden": "true" })
          }
        ),
        /* @__PURE__ */ w.jsxs("span", { children: [
          "Page ",
          f,
          " of ",
          u
        ] }),
        /* @__PURE__ */ w.jsx(
          gi,
          {
            variant: "outline",
            size: "sm",
            "aria-label": "Next result page",
            disabled: f >= u,
            onClick: () => o(f + 1),
            children: /* @__PURE__ */ w.jsx(d3, { "aria-hidden": "true" })
          }
        )
      ] })
    ] })
  ] });
}
function dV({
  record: n,
  dataset: i,
  identity: o,
  onClose: r,
  onReturnFocus: u
}) {
  return /* @__PURE__ */ w.jsx(
    hC,
    {
      open: !!n,
      onOpenChange: (f) => {
        f || r();
      },
      children: /* @__PURE__ */ w.jsxs(
        mC,
        {
          className: "ad-detail",
          onCloseAutoFocus: (f) => {
            f.preventDefault(), u();
          },
          children: [
            /* @__PURE__ */ w.jsxs(pC, { children: [
              /* @__PURE__ */ w.jsx(gC, { children: n?.title || "Request details" }),
              /* @__PURE__ */ w.jsx(vC, { children: i === "sample" ? "Synthetic example request. It is not an application in CATS." : "Read-only details from the verified Java snapshot." })
            ] }),
            n && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
              /* @__PURE__ */ w.jsx("dl", { className: "ad-detail-fields", children: [
                ["Request ID", n.id],
                ["Employee", n.learner || "Not recorded"],
                ["Provider", n.provider || "Not recorded"],
                ["Category", n.category || "Not recorded"],
                ["Status", wC(n.status)],
                ["Course start", pc(n.start)],
                ["Course end", pc(n.end)],
                ["Created request", pc(n.created)],
                ["Course fee", zs(n.fee)],
                ["Training days", zs(n.days)]
              ].map(([f, d]) => /* @__PURE__ */ w.jsxs("div", { children: [
                /* @__PURE__ */ w.jsx("dt", { children: f }),
                /* @__PURE__ */ w.jsx("dd", { children: f === "Status" ? /* @__PURE__ */ w.jsx(
                  "span",
                  {
                    className: "ad-status",
                    "data-request-status": n.status,
                    children: d
                  }
                ) : d })
              ] }, f)) }),
              i === "live" && o && /* @__PURE__ */ w.jsx(
                gi,
                {
                  asChild: !0,
                  className: "ad-primary",
                  children: /* @__PURE__ */ w.jsxs("a", { href: $L(o, n), children: [
                    "Open original request",
                    /* @__PURE__ */ w.jsx(Pm, { "aria-hidden": "true" })
                  ] })
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function hV() {
  return /* @__PURE__ */ w.jsxs(hC, { children: [
    /* @__PURE__ */ w.jsx(LL, { asChild: !0, children: /* @__PURE__ */ w.jsxs(gi, { variant: "ghost", children: [
      /* @__PURE__ */ w.jsx(b3, { "aria-hidden": "true" }),
      "Demo settings"
    ] }) }),
    /* @__PURE__ */ w.jsxs(mC, { className: "ad-settings", children: [
      /* @__PURE__ */ w.jsxs(pC, { children: [
        /* @__PURE__ */ w.jsx(gC, { children: "About these workflows" }),
        /* @__PURE__ */ w.jsx(vC, { children: "Demo workflows, not a connected model." })
      ] }),
      /* @__PURE__ */ w.jsx("p", { children: "These prompts select one of three predefined read-only workflows: find awaiting-review requests, compare course demand, or export the current results. Use the result filters to specify a search, status or category." }),
      /* @__PURE__ */ w.jsx("p", { children: "The example dataset offers 5,000, 20,000 or 50,000 fixed synthetic requests. Live mode fetches your permitted Java request list and verifies its account, role and scope before using it." }),
      /* @__PURE__ */ w.jsx("p", { children: "Queries, calculations and downloads run in this page. No approval, rejection or application is submitted. A manager makes decisions on the original review page." }),
      /* @__PURE__ */ w.jsx("p", { children: "The separate Agent access configuration can connect an MCP host to the existing read-only query, analysis, detail and export tools." })
    ] })
  ] });
}
function mV({ root: n, identity: i }) {
  const [o, r] = x.useState("sample"), [u, f] = x.useState(5e3), [d, h] = x.useState("Find awaiting review"), [g, p] = x.useState(dm), [y, m] = x.useState(1), [b, E] = x.useState(null), T = x.useRef(null), R = x.useRef(null), C = !!EN(), A = sV(i, o, u), _ = A.records, D = x.useMemo(
    () => _ ? rp(_, g) : [],
    [_, g]
  ), M = x.useMemo(
    () => _ ? So().aggregate(D) : null,
    [_, D]
  ), H = x.useMemo(
    () => [...new Set(_?.map((J) => J.category).filter(Boolean) || [])].sort(),
    [_]
  ), I = i ? hl[i.role].route : "/admin/home", j = i?.role === "MANAGER" ? "Live assigned requests" : "Live personal requests";
  x.useEffect(() => {
    n.dataset.agentState = A.busy ? "running" : A.error ? "error" : _ ? "ready" : "idle", n.dataset.agentDataset = o, n.dataset.matchCount = String(D.length), n.dataset.sampleSize = String(u);
  }, [n, A.busy, A.error, o, _, D.length, u]);
  function z(J) {
    p(J), m(1), _ && Ea.info(
      `${rp(_, J).length.toLocaleString("en")} matching requests.`,
      { id: "ad-filters" }
    );
  }
  function K(J) {
    r(J), p(dm), m(1), E(null);
  }
  function tt() {
    A.run(d, g, z);
  }
  function ft(J) {
    R.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, E(J);
  }
  function at() {
    try {
      TC(D, o), Ea.success(`CSV prepared: ${D.length.toLocaleString("en")} matching requests.`);
    } catch {
      Ea.error("The CSV could not be prepared. Try again.");
    }
  }
  return /* @__PURE__ */ w.jsx(m_, { reducedMotion: "user", children: /* @__PURE__ */ w.jsxs("div", { className: "agent-workspace", children: [
    /* @__PURE__ */ w.jsxs("header", { className: "ad-heading", children: [
      /* @__PURE__ */ w.jsxs("div", { children: [
        /* @__PURE__ */ w.jsxs("span", { className: "ad-eyebrow", children: [
          /* @__PURE__ */ w.jsx(w3, { "aria-hidden": "true" }),
          "READ-ONLY WORKFLOWS"
        ] }),
        /* @__PURE__ */ w.jsx("h2", { children: "Agent desk" }),
        /* @__PURE__ */ w.jsx("p", { children: "Give the busy work a little direction." })
      ] }),
      /* @__PURE__ */ w.jsx(hV, {})
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "ad-dataset-row", children: [
      /* @__PURE__ */ w.jsx(
        NL,
        {
          value: o,
          onValueChange: K,
          className: "ad-dataset-tabs",
          children: /* @__PURE__ */ w.jsxs(jL, { children: [
            /* @__PURE__ */ w.jsx(
              KS,
              {
                value: "sample",
                disabled: A.busy,
                children: "Example dataset"
              }
            ),
            i && /* @__PURE__ */ w.jsx(
              KS,
              {
                value: "live",
                disabled: A.busy,
                children: j
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ w.jsxs("span", { className: "ad-permission", children: [
        /* @__PURE__ */ w.jsx(x3, { "aria-hidden": "true" }),
        "Query · Analyse · Export"
      ] })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "ad-workbench", children: [
      /* @__PURE__ */ w.jsxs(
        "section",
        {
          className: "ad-command",
          "aria-label": "Workflow request",
          children: [
            /* @__PURE__ */ w.jsxs("div", { className: "ad-command-heading", children: [
              /* @__PURE__ */ w.jsx("h3", { children: o === "sample" ? `Example dataset · ${u.toLocaleString("en")} sample requests` : j }),
              o === "sample" && /* @__PURE__ */ w.jsxs(
                ip,
                {
                  value: String(u),
                  disabled: A.busy,
                  onValueChange: (J) => {
                    f(Number(J)), p(dm), m(1), E(null);
                  },
                  children: [
                    /* @__PURE__ */ w.jsx(
                      op,
                      {
                        className: "ad-scale",
                        "aria-label": "Example dataset size",
                        children: /* @__PURE__ */ w.jsx(ap, {})
                      }
                    ),
                    /* @__PURE__ */ w.jsxs(sp, { className: "ad-select-content", children: [
                      /* @__PURE__ */ w.jsx(Zn, { value: "5000", children: "5,000 requests" }),
                      /* @__PURE__ */ w.jsx(Zn, { value: "20000", children: "20,000 requests" }),
                      /* @__PURE__ */ w.jsx(Zn, { value: "50000", children: "50,000 requests" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ w.jsx("p", { className: "ad-scope", children: o === "sample" ? "A separate demonstration. Names, courses and requests are synthetic." : i?.role === "MANAGER" ? "Only requests from employees assigned to your manager account." : "Your requests for courses starting in the current server year." }),
            /* @__PURE__ */ w.jsxs(
              "form",
              {
                onSubmit: (J) => {
                  J.preventDefault(), tt();
                },
                children: [
                  /* @__PURE__ */ w.jsx("label", { htmlFor: "ad-prompt", children: "What would you like to explore?" }),
                  /* @__PURE__ */ w.jsx(
                    "textarea",
                    {
                      ref: T,
                      id: "ad-prompt",
                      value: d,
                      onChange: (J) => h(J.target.value),
                      disabled: A.busy,
                      rows: 2,
                      maxLength: 250,
                      "aria-describedby": "ad-prompt-note"
                    }
                  ),
                  /* @__PURE__ */ w.jsxs("div", { className: "ad-command-bottom", children: [
                    /* @__PURE__ */ w.jsx("small", { id: "ad-prompt-note", children: "Choose a workflow below; refine its results with the filters." }),
                    A.busy ? /* @__PURE__ */ w.jsxs(
                      gi,
                      {
                        type: "button",
                        variant: "outline",
                        onClick: A.abort,
                        children: [
                          /* @__PURE__ */ w.jsx(rT, { "aria-hidden": "true" }),
                          "Stop workflow"
                        ]
                      }
                    ) : /* @__PURE__ */ w.jsxs(
                      gi,
                      {
                        type: "submit",
                        disabled: !d.trim(),
                        className: "ad-primary",
                        children: [
                          /* @__PURE__ */ w.jsx(v3, { "aria-hidden": "true" }),
                          "Run workflow"
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ w.jsx("div", { className: "ad-prompt-grid", children: tV.map((J, ct) => {
              const dt = ct === 0 ? iT : ct === 1 ? Gw : uS;
              return /* @__PURE__ */ w.jsxs(
                "button",
                {
                  type: "button",
                  disabled: A.busy,
                  className: "ad-prompt-choice",
                  onClick: () => {
                    h(J.prompt), T.current?.focus();
                  },
                  children: [
                    /* @__PURE__ */ w.jsx(dt, { "aria-hidden": "true" }),
                    /* @__PURE__ */ w.jsx("strong", { children: J.prompt }),
                    /* @__PURE__ */ w.jsx("span", { children: J.description })
                  ]
                },
                J.intent
              );
            }) })
          ]
        }
      ),
      /* @__PURE__ */ w.jsx(
        rV,
        {
          steps: A.steps,
          busy: A.busy
        }
      )
    ] }),
    A.error && /* @__PURE__ */ w.jsxs(
      "div",
      {
        className: "ad-error",
        role: "alert",
        children: [
          /* @__PURE__ */ w.jsx("p", { children: A.error }),
          /* @__PURE__ */ w.jsxs("div", { children: [
            /* @__PURE__ */ w.jsx(
              gi,
              {
                variant: "outline",
                onClick: tt,
                children: "Try again"
              }
            ),
            /* @__PURE__ */ w.jsxs("a", { href: I, children: [
              "Open original request list",
              /* @__PURE__ */ w.jsx(Pm, { "aria-hidden": "true" })
            ] })
          ] })
        ]
      }
    ),
    !_ && !A.error && /* @__PURE__ */ w.jsx(
      "div",
      {
        className: "ad-results-intro",
        role: "status",
        children: A.busy ? "Reading and analysing the selected dataset…" : "Run a workflow to see requests, course demand and exact recorded totals here."
      }
    ),
    _ && M && /* @__PURE__ */ w.jsxs(
      "section",
      {
        className: "ad-results",
        "aria-label": "Workflow results",
        "aria-busy": A.busy,
        children: [
          /* @__PURE__ */ w.jsxs("header", { className: "ad-results-heading", children: [
            /* @__PURE__ */ w.jsxs("div", { children: [
              /* @__PURE__ */ w.jsx("h3", { children: "Request work list" }),
              /* @__PURE__ */ w.jsxs("p", { children: [
                o === "sample" ? "Example dataset" : j,
                " ·",
                " ",
                _.length.toLocaleString("en"),
                " records loaded",
                A.loadedAt ? ` · Read at ${A.loadedAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}` : ""
              ] })
            ] }),
            /* @__PURE__ */ w.jsxs("div", { className: "ad-result-actions", children: [
              i?.role === "MANAGER" && /* @__PURE__ */ w.jsx(
                gi,
                {
                  asChild: !0,
                  variant: "outline",
                  children: /* @__PURE__ */ w.jsxs("a", { href: "/manager/pending", children: [
                    "Open review queue",
                    /* @__PURE__ */ w.jsx(Pm, { "aria-hidden": "true" })
                  ] })
                }
              ),
              /* @__PURE__ */ w.jsxs(
                gi,
                {
                  variant: "outline",
                  disabled: A.busy || !D.length,
                  onClick: at,
                  children: [
                    /* @__PURE__ */ w.jsx(uS, { "aria-hidden": "true" }),
                    "Export results"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ w.jsx(
            uV,
            {
              filters: g,
              categories: H,
              disabled: A.busy,
              onChange: z
            }
          ),
          /* @__PURE__ */ w.jsxs("p", { className: "ad-batch-line", children: [
            "Awaiting review: ",
            /* @__PURE__ */ w.jsx("strong", { children: M.pending.toLocaleString("en") }),
            " · Course groups: ",
            /* @__PURE__ */ w.jsx("strong", { children: M.courses.length }),
            " · Largest group:",
            " ",
            /* @__PURE__ */ w.jsxs("strong", { children: [
              M.courses[0]?.count.toLocaleString("en") || "0",
              " requests"
            ] }),
            " · Last workflow operations:",
            " ",
            /* @__PURE__ */ w.jsxs("strong", { children: [
              A.steps.reduce((J, ct) => J + (ct.elapsed || 0), 0).toLocaleString("en", { maximumFractionDigits: 1 }),
              " ",
              "ms"
            ] })
          ] }),
          /* @__PURE__ */ w.jsxs("div", { className: "ad-analysis", children: [
            /* @__PURE__ */ w.jsxs("div", { className: "ad-totals", children: [
              /* @__PURE__ */ w.jsxs("div", { children: [
                /* @__PURE__ */ w.jsx("span", { children: "Matching requests" }),
                /* @__PURE__ */ w.jsxs("strong", { children: [
                  /* @__PURE__ */ w.jsx("span", { "aria-hidden": "true", children: C ? M.count.toLocaleString("en") : /* @__PURE__ */ w.jsx(GL, { value: M.count }) }),
                  /* @__PURE__ */ w.jsx("span", { className: "sr-only", children: M.count.toLocaleString("en") })
                ] })
              ] }),
              /* @__PURE__ */ w.jsxs("div", { children: [
                /* @__PURE__ */ w.jsx("span", { children: "Employees with requests" }),
                /* @__PURE__ */ w.jsx("strong", { children: M.students.toLocaleString("en") })
              ] }),
              /* @__PURE__ */ w.jsxs("div", { children: [
                /* @__PURE__ */ w.jsx("span", { children: "Recorded course fees" }),
                /* @__PURE__ */ w.jsx("strong", { children: zs(M.fee) }),
                /* @__PURE__ */ w.jsxs("small", { children: [
                  D.filter((J) => J.fee == null).length,
                  " without a recorded fee"
                ] })
              ] }),
              /* @__PURE__ */ w.jsxs("div", { children: [
                /* @__PURE__ */ w.jsx("span", { children: "Recorded training days" }),
                /* @__PURE__ */ w.jsx("strong", { children: zs(M.days) }),
                /* @__PURE__ */ w.jsxs("small", { children: [
                  D.filter((J) => J.days == null).length,
                  " without recorded days"
                ] })
              ] }),
              /* @__PURE__ */ w.jsx("p", { children: "Totals cover every matching record, across all pages. Fees have no currency supplied by the source." })
            ] }),
            /* @__PURE__ */ w.jsx(cV, { summary: M })
          ] }),
          /* @__PURE__ */ w.jsx(
            fV,
            {
              records: D,
              page: y,
              onPage: m,
              onDetail: ft
            }
          ),
          /* @__PURE__ */ w.jsx("p", { className: "ad-data-note", children: o === "sample" ? "Sample records have no application page and cannot be submitted or approved." : "This page loads the permitted request snapshot once per workflow. Paging happens in the browser; it is not server-side pagination." }),
          /* @__PURE__ */ w.jsxs(
            "span",
            {
              className: "sr-only",
              role: "status",
              "aria-live": "polite",
              children: [
                M.count,
                " matching requests. ",
                M.students,
                " employees with requests."
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ w.jsx(
      dV,
      {
        record: b,
        dataset: o,
        identity: i,
        onClose: () => E(null),
        onReturnFocus: () => R.current?.focus({ preventScroll: !0 })
      }
    ),
    /* @__PURE__ */ w.jsx(
      e3,
      {
        theme: "light",
        closeButton: !0,
        position: "bottom-right",
        toastOptions: { className: "ad-toast" }
      }
    )
  ] }) });
}
class pV extends x.Component {
  state = { failed: !1 };
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  componentDidCatch() {
    this.props.root.dataset.agentState = "error";
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ w.jsx(
      "p",
      {
        className: "ad-error",
        role: "alert",
        children: "The demonstration could not be displayed. Your original request pages remain available from the navigation."
      }
    ) : this.props.children;
  }
}
document.querySelectorAll("[data-agent-workspace]").forEach((n) => {
  n.classList.add("cats-course-workspace");
  try {
    const i = WL(n);
    So(), xD.createRoot(n).render(
      /* @__PURE__ */ w.jsx(pV, { root: n, children: /* @__PURE__ */ w.jsx(
        mV,
        {
          root: n,
          identity: i
        }
      ) })
    );
  } catch {
    n.dataset.agentState = "error", n.textContent = "The demonstration could not be opened for this account. Use the original request pages from the navigation.";
  }
});
//# sourceMappingURL=agent-workspace.js.map
