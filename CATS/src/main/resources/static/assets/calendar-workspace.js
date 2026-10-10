var Jb = (n) => {
  throw TypeError(n);
};
var Wb = (n, i, o) => i.has(n) || Jb("Cannot " + o);
var qe = (n, i, o) => (Wb(n, i, "read from private field"), o ? o.call(n) : i.get(n)), tx = (n, i, o) => i.has(n) ? Jb("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(n) : i.set(n, o), Gh = (n, i, o, r) => (Wb(n, i, "write to private field"), r ? r.call(n, o) : i.set(n, o), o);
function FD(n, i) {
  for (var o = 0; o < i.length; o++) {
    const r = i[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in n)) {
          const f = Object.getOwnPropertyDescriptor(r, l);
          f && Object.defineProperty(n, l, f.get ? f : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function L1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Yh = { exports: {} }, qs = {};
var ex;
function XD() {
  if (ex) return qs;
  ex = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, l, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      f = {};
      for (var h in l)
        h !== "key" && (f[h] = l[h]);
    } else f = l;
    return l = f.ref, {
      $$typeof: n,
      type: r,
      key: d,
      ref: l !== void 0 ? l : null,
      props: f
    };
  }
  return qs.Fragment = i, qs.jsx = o, qs.jsxs = o, qs;
}
var nx;
function KD() {
  return nx || (nx = 1, Yh.exports = XD()), Yh.exports;
}
var E = KD(), qh = { exports: {} }, Et = {};
var ix;
function ZD() {
  if (ix) return Et;
  ix = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), l = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.activity"), b = /* @__PURE__ */ Symbol.for("react.view_transition"), S = Symbol.iterator;
  function w(j) {
    return j === null || typeof j != "object" ? null : (j = S && j[S] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var A = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, R = {};
  function z(j, q, W) {
    this.props = j, this.context = q, this.refs = R, this.updater = W || A;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(j, q) {
    if (typeof j != "object" && typeof j != "function" && j != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, j, q, "setState");
  }, z.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function D() {
  }
  D.prototype = z.prototype;
  function O(j, q, W) {
    this.props = j, this.context = q, this.refs = R, this.updater = W || A;
  }
  var P = O.prototype = new D();
  P.constructor = O, C(P, z.prototype), P.isPureReactComponent = !0;
  var k = Array.isArray;
  function N() {
  }
  var M = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty;
  function J(j, q, W) {
    var lt = W.ref;
    return {
      $$typeof: n,
      type: j,
      key: q,
      ref: lt !== void 0 ? lt : null,
      props: W
    };
  }
  function ut(j, q) {
    return J(j.type, q, j.props);
  }
  function et(j) {
    return typeof j == "object" && j !== null && j.$$typeof === n;
  }
  function rt(j) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(W) {
      return q[W];
    });
  }
  var ft = /\/+/g;
  function dt(j, q) {
    return typeof j == "object" && j !== null && j.key != null ? rt("" + j.key) : q.toString(36);
  }
  function Y(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(N, N) : (j.status = "pending", j.then(
          function(q) {
            j.status === "pending" && (j.status = "fulfilled", j.value = q);
          },
          function(q) {
            j.status === "pending" && (j.status = "rejected", j.reason = q);
          }
        )), j.status) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function X(j, q, W, lt, it) {
    var tt = typeof j;
    (tt === "undefined" || tt === "boolean") && (j = null);
    var bt = !1;
    if (j === null) bt = !0;
    else
      switch (tt) {
        case "bigint":
        case "string":
        case "number":
          bt = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case n:
            case i:
              bt = !0;
              break;
            case v:
              return bt = j._init, X(
                bt(j._payload),
                q,
                W,
                lt,
                it
              );
          }
      }
    if (bt)
      return it = it(j), bt = lt === "" ? "." + dt(j, 0) : lt, k(it) ? (W = "", bt != null && (W = bt.replace(ft, "$&/") + "/"), X(it, q, W, "", function(Dt) {
        return Dt;
      })) : it != null && (et(it) && (it = ut(
        it,
        W + (it.key == null || j && j.key === it.key ? "" : ("" + it.key).replace(
          ft,
          "$&/"
        ) + "/") + bt
      )), q.push(it)), 1;
    bt = 0;
    var nt = lt === "" ? "." : lt + ":";
    if (k(j))
      for (var st = 0; st < j.length; st++)
        lt = j[st], tt = nt + dt(lt, st), bt += X(
          lt,
          q,
          W,
          tt,
          it
        );
    else if (st = w(j), typeof st == "function")
      for (j = st.call(j), st = 0; !(lt = j.next()).done; )
        lt = lt.value, tt = nt + dt(lt, st++), bt += X(
          lt,
          q,
          W,
          tt,
          it
        );
    else if (tt === "object") {
      if (typeof j.then == "function")
        return X(
          Y(j),
          q,
          W,
          lt,
          it
        );
      throw q = String(j), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return bt;
  }
  function $(j, q, W) {
    if (j == null) return j;
    var lt = [], it = 0;
    return X(j, lt, "", "", function(tt) {
      return q.call(W, tt, it++);
    }), lt;
  }
  function at(j) {
    if (j._status === -1) {
      var q = j._result, W = q();
      W.then(
        function(lt) {
          (j._status === 0 || j._status === -1) && (j._status = 1, j._result = lt, W.status === void 0 && (W.status = "fulfilled", W.value = lt));
        },
        function(lt) {
          (j._status === 0 || j._status === -1) && (j._status = 2, j._result = lt, W.status === void 0 && (W.status = "rejected", W.reason = lt));
        }
      ), j._status === -1 && (j._status = 0, j._result = W);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var Q = typeof reportError == "function" ? reportError : function(j) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
        error: j
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", j);
      return;
    }
    console.error(j);
  };
  function yt(j) {
    var q = M.T, W = {};
    W.types = q !== null ? q.types : null, M.T = W;
    try {
      var lt = j(), it = M.S;
      it !== null && it(W, lt), typeof lt == "object" && lt !== null && typeof lt.then == "function" && lt.then(N, Q);
    } catch (tt) {
      Q(tt);
    } finally {
      q !== null && W.types !== null && (q.types = W.types), M.T = q;
    }
  }
  function St(j) {
    var q = M.T;
    if (q !== null) {
      var W = q.types;
      W === null ? q.types = [j] : W.indexOf(j) === -1 && W.push(j);
    } else yt(St.bind(null, j));
  }
  var Ot = {
    map: $,
    forEach: function(j, q, W) {
      $(
        j,
        function() {
          q.apply(this, arguments);
        },
        W
      );
    },
    count: function(j) {
      var q = 0;
      return $(j, function() {
        q++;
      }), q;
    },
    toArray: function(j) {
      return $(j, function(q) {
        return q;
      }) || [];
    },
    only: function(j) {
      if (!et(j))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return j;
    }
  };
  return Et.Activity = m, Et.Children = Ot, Et.Component = z, Et.Fragment = o, Et.Profiler = l, Et.PureComponent = O, Et.StrictMode = r, Et.Suspense = g, Et.ViewTransition = b, Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M, Et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return M.H.useMemoCache(j);
    }
  }, Et.addTransitionType = St, Et.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, Et.cacheSignal = function() {
    return null;
  }, Et.cloneElement = function(j, q, W) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var lt = C({}, j.props), it = j.key;
    if (q != null)
      for (tt in q.key !== void 0 && (it = "" + q.key), q)
        !F.call(q, tt) || tt === "key" || tt === "__self" || tt === "__source" || tt === "ref" && q.ref === void 0 || (lt[tt] = q[tt]);
    var tt = arguments.length - 2;
    if (tt === 1) lt.children = W;
    else if (1 < tt) {
      for (var bt = Array(tt), nt = 0; nt < tt; nt++)
        bt[nt] = arguments[nt + 2];
      lt.children = bt;
    }
    return J(j.type, it, lt);
  }, Et.createContext = function(j) {
    return j = {
      $$typeof: d,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, j.Provider = j, j.Consumer = {
      $$typeof: f,
      _context: j
    }, j;
  }, Et.createElement = function(j, q, W) {
    var lt, it = {}, tt = null;
    if (q != null)
      for (lt in q.key !== void 0 && (tt = "" + q.key), q)
        F.call(q, lt) && lt !== "key" && lt !== "__self" && lt !== "__source" && (it[lt] = q[lt]);
    var bt = arguments.length - 2;
    if (bt === 1) it.children = W;
    else if (1 < bt) {
      for (var nt = Array(bt), st = 0; st < bt; st++)
        nt[st] = arguments[st + 2];
      it.children = nt;
    }
    if (j && j.defaultProps)
      for (lt in bt = j.defaultProps, bt)
        it[lt] === void 0 && (it[lt] = bt[lt]);
    return J(j, tt, it);
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(j) {
    return { $$typeof: h, render: j };
  }, Et.isValidElement = et, Et.lazy = function(j) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: j },
      _init: at
    };
  }, Et.memo = function(j, q) {
    return {
      $$typeof: p,
      type: j,
      compare: q === void 0 ? null : q
    };
  }, Et.startTransition = yt, Et.unstable_useCacheRefresh = function() {
    return M.H.useCacheRefresh();
  }, Et.use = function(j) {
    return M.H.use(j);
  }, Et.useActionState = function(j, q, W) {
    return M.H.useActionState(j, q, W);
  }, Et.useCallback = function(j, q) {
    return M.H.useCallback(j, q);
  }, Et.useContext = function(j) {
    return M.H.useContext(j);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(j, q) {
    return M.H.useDeferredValue(j, q);
  }, Et.useEffect = function(j, q) {
    return M.H.useEffect(j, q);
  }, Et.useEffectEvent = function(j) {
    return M.H.useEffectEvent(j);
  }, Et.useId = function() {
    return M.H.useId();
  }, Et.useImperativeHandle = function(j, q, W) {
    return M.H.useImperativeHandle(j, q, W);
  }, Et.useInsertionEffect = function(j, q) {
    return M.H.useInsertionEffect(j, q);
  }, Et.useLayoutEffect = function(j, q) {
    return M.H.useLayoutEffect(j, q);
  }, Et.useMemo = function(j, q) {
    return M.H.useMemo(j, q);
  }, Et.useOptimistic = function(j, q) {
    return M.H.useOptimistic(j, q);
  }, Et.useReducer = function(j, q, W) {
    return M.H.useReducer(j, q, W);
  }, Et.useRef = function(j) {
    return M.H.useRef(j);
  }, Et.useState = function(j) {
    return M.H.useState(j);
  }, Et.useSyncExternalStore = function(j, q, W) {
    return M.H.useSyncExternalStore(
      j,
      q,
      W
    );
  }, Et.useTransition = function() {
    return M.H.useTransition();
  }, Et.version = "19.3.0", Et;
}
var ax;
function xp() {
  return ax || (ax = 1, qh.exports = ZD()), qh.exports;
}
var x = xp();
const ot = /* @__PURE__ */ L1(x), Pr = /* @__PURE__ */ FD({
  __proto__: null,
  default: ot
}, [x]);
var Fh = { exports: {} }, Fs = {}, Xh = { exports: {} }, Kh = {};
var ox;
function QD() {
  return ox || (ox = 1, (function(n) {
    function i(Y, X) {
      var $ = Y.length;
      Y.push(X);
      t: for (; 0 < $; ) {
        var at = $ - 1 >>> 1, Q = Y[at];
        if (0 < l(Q, X))
          Y[at] = X, Y[$] = Q, $ = at;
        else break t;
      }
    }
    function o(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function r(Y) {
      if (Y.length === 0) return null;
      var X = Y[0], $ = Y.pop();
      if ($ !== X) {
        Y[0] = $;
        t: for (var at = 0, Q = Y.length, yt = Q >>> 1; at < yt; ) {
          var St = 2 * (at + 1) - 1, Ot = Y[St], j = St + 1, q = Y[j];
          if (0 > l(Ot, $))
            j < Q && 0 > l(q, Ot) ? (Y[at] = q, Y[j] = $, at = j) : (Y[at] = Ot, Y[St] = $, at = St);
          else if (j < Q && 0 > l(q, $))
            Y[at] = q, Y[j] = $, at = j;
          else break t;
        }
      }
      return X;
    }
    function l(Y, X) {
      var $ = Y.sortIndex - X.sortIndex;
      return $ !== 0 ? $ : Y.id - X.id;
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
    var g = [], p = [], v = 1, m = null, b = 3, S = !1, w = !1, A = !1, C = !1, R = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function O(Y) {
      for (var X = o(p); X !== null; ) {
        if (X.callback === null) r(p);
        else if (X.startTime <= Y)
          r(p), X.sortIndex = X.expirationTime, i(g, X);
        else break;
        X = o(p);
      }
    }
    function P(Y) {
      if (A = !1, O(Y), !w)
        if (o(g) !== null)
          w = !0, k || (k = !0, et());
        else {
          var X = o(p);
          X !== null && dt(P, X.startTime - Y);
        }
    }
    var k = !1, N = -1, M = 5, F = -1;
    function J() {
      return C ? !0 : !(n.unstable_now() - F < M);
    }
    function ut() {
      if (C = !1, k) {
        var Y = n.unstable_now();
        F = Y;
        var X = !0;
        try {
          t: {
            w = !1, A && (A = !1, z(N), N = -1), S = !0;
            var $ = b;
            try {
              e: {
                for (O(Y), m = o(g); m !== null && !(m.expirationTime > Y && J()); ) {
                  var at = m.callback;
                  if (typeof at == "function") {
                    m.callback = null, b = m.priorityLevel;
                    var Q = at(
                      m.expirationTime <= Y
                    );
                    if (Y = n.unstable_now(), typeof Q == "function") {
                      m.callback = Q, O(Y), X = !0;
                      break e;
                    }
                    m === o(g) && r(g), O(Y);
                  } else r(g);
                  m = o(g);
                }
                if (m !== null) X = !0;
                else {
                  var yt = o(p);
                  yt !== null && dt(
                    P,
                    yt.startTime - Y
                  ), X = !1;
                }
              }
              break t;
            } finally {
              m = null, b = $, S = !1;
            }
            X = void 0;
          }
        } finally {
          X ? et() : k = !1;
        }
      }
    }
    var et;
    if (typeof D == "function")
      et = function() {
        D(ut);
      };
    else if (typeof MessageChannel < "u") {
      var rt = new MessageChannel(), ft = rt.port2;
      rt.port1.onmessage = ut, et = function() {
        ft.postMessage(null);
      };
    } else
      et = function() {
        R(ut, 0);
      };
    function dt(Y, X) {
      N = R(function() {
        Y(n.unstable_now());
      }, X);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, n.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : M = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, n.unstable_next = function(Y) {
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
        return Y();
      } finally {
        b = $;
      }
    }, n.unstable_requestPaint = function() {
      C = !0;
    }, n.unstable_runWithPriority = function(Y, X) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var $ = b;
      b = Y;
      try {
        return X();
      } finally {
        b = $;
      }
    }, n.unstable_scheduleCallback = function(Y, X, $) {
      var at = n.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? at + $ : at) : $ = at, Y) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return Q = $ + Q, Y = {
        id: v++,
        callback: X,
        priorityLevel: Y,
        startTime: $,
        expirationTime: Q,
        sortIndex: -1
      }, $ > at ? (Y.sortIndex = $, i(p, Y), o(g) === null && Y === o(p) && (A ? (z(N), N = -1) : A = !0, dt(P, $ - at))) : (Y.sortIndex = Q, i(g, Y), w || S || (w = !0, k || (k = !0, et()))), Y;
    }, n.unstable_shouldYield = J, n.unstable_wrapCallback = function(Y) {
      var X = b;
      return function() {
        var $ = b;
        b = X;
        try {
          return Y.apply(this, arguments);
        } finally {
          b = $;
        }
      };
    };
  })(Kh)), Kh;
}
var rx;
function $D() {
  return rx || (rx = 1, Xh.exports = QD()), Xh.exports;
}
var Zh = { exports: {} }, Ie = {};
var sx;
function JD() {
  if (sx) return Ie;
  sx = 1;
  var n = xp();
  function i(v) {
    var m = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        m += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + v + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, l = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.recoverable"), d = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function h(v, m, b) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: S == null ? null : S === d ? d : "" + S,
      children: v,
      containerInfo: m,
      implementation: b
    };
  }
  var g = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, m) {
    if (v === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Ie.browser = function(v) {
    return { $$typeof: f, _reason: v };
  }, Ie.createPortal = function(v, m) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(i(299));
    return h(v, m, null, b);
  }, Ie.flushSync = function(v) {
    var m = g.T, b = r.p;
    try {
      if (g.T = null, r.p = 2, v) return v();
    } finally {
      g.T = m, r.p = b, r.d.f();
    }
  }, Ie.preconnect = function(v, m) {
    typeof v == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(v, m));
  }, Ie.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, Ie.preinit = function(v, m) {
    if (typeof v == "string" && m && typeof m.as == "string") {
      var b = m.as, S = p(b, m.crossOrigin), w = typeof m.integrity == "string" ? m.integrity : void 0, A = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      b === "style" ? r.d.S(
        v,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: S,
          integrity: w,
          fetchPriority: A
        }
      ) : b === "script" && r.d.X(v, {
        crossOrigin: S,
        integrity: w,
        fetchPriority: A,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, Ie.preinitModule = function(v, m) {
    if (typeof v == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var b = p(
            m.as,
            m.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: b,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && r.d.M(v);
  }, Ie.preload = function(v, m) {
    if (typeof v == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var b = m.as, S = p(b, m.crossOrigin);
      r.d.L(v, b, {
        crossOrigin: S,
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
  }, Ie.preloadModule = function(v, m) {
    if (typeof v == "string")
      if (m) {
        var b = p(m.as, m.crossOrigin);
        r.d.m(v, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: b,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else r.d.m(v);
  }, Ie.requestFormReset = function(v) {
    r.d.r(v);
  }, Ie.unstable_batchedUpdates = function(v, m) {
    return v(m);
  }, Ie.useFormState = function(v, m, b) {
    return g.H.useFormState(v, m, b);
  }, Ie.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, Ie.version = "19.3.0", Ie;
}
var lx;
function B1() {
  if (lx) return Zh.exports;
  lx = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Zh.exports = JD(), Zh.exports;
}
var cx;
function WD() {
  if (cx) return Fs;
  cx = 1;
  var n = $D(), i = xp(), o = B1();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(t) {
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
      var c = a.return;
      if (c === null) break;
      var u = c.alternate;
      if (u === null) {
        if (s = c.return, s !== null) {
          a = s;
          continue;
        }
        break;
      }
      if (c.child === u.child) {
        for (u = c.child; u; ) {
          if (u === a) return g(c), t;
          if (u === s) return g(c), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== s.return) a = c, s = u;
      else {
        for (var y = !1, T = c.child; T; ) {
          if (T === a) {
            y = !0, a = c, s = u;
            break;
          }
          if (T === s) {
            y = !0, s = c, a = u;
            break;
          }
          T = T.sibling;
        }
        if (!y) {
          for (T = u.child; T; ) {
            if (T === a) {
              y = !0, a = u, s = c;
              break;
            }
            if (T === s) {
              y = !0, s = u, a = c;
              break;
            }
            T = T.sibling;
          }
          if (!y) throw Error(r(189));
        }
      }
      if (a.alternate !== s) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function m(t, e, a, s, c, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && a(t, s, c, u) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && m(
        t.child,
        e,
        a,
        s,
        c,
        u
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
  function S(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function w(t) {
    var e = [null, null], a = b(t);
    return a === null || A(
      e,
      t,
      a.child,
      { foundSelf: !1 }
    ), e;
  }
  function A(t, e, a, s) {
    for (; a !== null; ) {
      if (a === e) s.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (s.foundSelf) return t[1] = a, !0;
        t[0] = a;
      } else if ((a.tag !== 22 || a.memoizedState === null) && A(
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
  var R = null, z = null;
  function D(t, e, a) {
    return t === a ? !0 : t === e ? (R = t, !0) : !1;
  }
  function O(t, e, a) {
    return t === a ? (z = t, !1) : t === e ? (z !== null && (R = t), !0) : !1;
  }
  function P(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function k(t, e, a) {
    for (var s = 0, c = t; c; c = a(c)) s++;
    c = 0;
    for (var u = e; u; u = a(u)) c++;
    for (; 0 < s - c; ) t = a(t), s--;
    for (; 0 < c - s; ) e = a(e), c--;
    for (; s--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = a(t), e = a(e);
    }
    return null;
  }
  var N = Object.assign, M = /* @__PURE__ */ Symbol.for("react.element"), F = /* @__PURE__ */ Symbol.for("react.transitional.element"), J = /* @__PURE__ */ Symbol.for("react.portal"), ut = /* @__PURE__ */ Symbol.for("react.fragment"), et = /* @__PURE__ */ Symbol.for("react.strict_mode"), rt = /* @__PURE__ */ Symbol.for("react.profiler"), ft = /* @__PURE__ */ Symbol.for("react.consumer"), dt = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.suspense_list"), at = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), yt = /* @__PURE__ */ Symbol.for("react.activity"), St = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Ot = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), j = /* @__PURE__ */ Symbol.for("react.view_transition"), q = /* @__PURE__ */ Symbol.for("react.recoverable"), W = Symbol.iterator;
  function lt(t) {
    return t === null || typeof t != "object" ? null : (t = W && t[W] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var it = /* @__PURE__ */ Symbol.for("react.client.reference");
  function tt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === it ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ut:
        return "Fragment";
      case rt:
        return "Profiler";
      case et:
        return "StrictMode";
      case X:
        return "Suspense";
      case $:
        return "SuspenseList";
      case yt:
        return "Activity";
      case j:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case J:
          return "Portal";
        case dt:
          return t.displayName || "Context";
        case ft:
          return (t._context.displayName || "Context") + ".Consumer";
        case Y:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case at:
          return e = t.displayName || null, e !== null ? e : tt(t.type) || "Memo";
        case Q:
          e = t._payload, t = t._init;
          try {
            return tt(t(e));
          } catch {
          }
      }
    return null;
  }
  var bt = Array.isArray, nt = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, st = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Dt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ae = [], ce = -1;
  function Ve(t) {
    return { current: t };
  }
  function Jt(t) {
    0 > ce || (t.current = ae[ce], ae[ce] = null, ce--);
  }
  function Bt(t, e) {
    ce++, ae[ce] = t.current, t.current = e;
  }
  var fe = Ve(null), Pa = Ve(null), ei = Ve(null), de = Ve(null);
  function Ua(t, e) {
    switch (Bt(ei, e), Bt(Pa, t), Bt(fe, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? sb(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = sb(e), t = lb(e, t);
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
    Jt(fe), Bt(fe, t);
  }
  function hn() {
    Jt(fe), Jt(Pa), Jt(ei);
  }
  function Fr(t) {
    var e = t.memoizedState;
    e !== null && (xr._currentValue = e.memoizedState, Bt(de, t)), e = fe.current;
    var a = lb(e, t.type);
    e !== a && (Bt(Pa, t), Bt(fe, a));
  }
  function _o(t) {
    Pa.current === t && (Jt(fe), Jt(Pa)), de.current === t && (Jt(de), xr._currentValue = Dt);
  }
  var ta, wl;
  function Un(t) {
    if (ta === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        ta = e && e[1] || "", wl = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ta + t + wl;
  }
  var ka = !1;
  function ni(t, e) {
    if (!t || ka) return "";
    ka = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var Z = function() {
                throw Error();
              };
              if (Object.defineProperty(Z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Z, []);
                } catch (ct) {
                  var L = ct;
                }
                Reflect.construct(t, [], Z);
              } else {
                try {
                  Z.call();
                } catch (ct) {
                  L = ct;
                }
                Z = !1;
                try {
                  var I = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), Z = !0, new t();
                } finally {
                  Z && (I !== void 0 ? Object.defineProperty(t.prototype, "props", I) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ct) {
                L = ct;
              }
              (Z = t()) && typeof Z.catch == "function" && Z.catch(function() {
              });
            }
          } catch (ct) {
            if (ct && L && typeof ct.stack == "string")
              return [ct.stack, L.stack];
          }
          return [null, null];
        }
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        s.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = s.DetermineComponentFrameRoot(), y = u[0], T = u[1];
      if (y && T) {
        var _ = y.split(`
`), U = T.split(`
`);
        for (c = s = 0; s < _.length && !_[s].includes("DetermineComponentFrameRoot"); )
          s++;
        for (; c < U.length && !U[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (s === _.length || c === U.length)
          for (s = _.length - 1, c = U.length - 1; 1 <= s && 0 <= c && _[s] !== U[c]; )
            c--;
        for (; 1 <= s && 0 <= c; s--, c--)
          if (_[s] !== U[c]) {
            if (s !== 1 || c !== 1)
              do
                if (s--, c--, 0 > c || _[s] !== U[c]) {
                  var G = `
` + _[s].replace(" at new ", " at ");
                  return t.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", t.displayName)), G;
                }
              while (1 <= s && 0 <= c);
            break;
          }
      }
    } finally {
      ka = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Un(a) : "";
  }
  function Tl(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Un(t.type);
      case 16:
        return Un("Lazy");
      case 13:
        return t.child !== e && e !== null ? Un("Suspense Fallback") : Un("Suspense");
      case 19:
        return Un("SuspenseList");
      case 0:
      case 15:
        return ni(t.type, !1);
      case 11:
        return ni(t.type.render, !1);
      case 1:
        return ni(t.type, !0);
      case 31:
        return Un("Activity");
      case 30:
        return Un("ViewTransition");
      default:
        return "";
    }
  }
  function Ei(t) {
    try {
      var e = "", a = null;
      do
        e += Tl(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (s) {
      return `
Error generating stack: ` + s.message + `
` + s.stack;
    }
  }
  var Xr = Object.prototype.hasOwnProperty, Kr = n.unstable_scheduleCallback, No = n.unstable_cancelCallback, El = n.unstable_shouldYield, En = n.unstable_requestPaint, Fe = n.unstable_now, Zr = n.unstable_getCurrentPriorityLevel, kn = n.unstable_ImmediatePriority, Qr = n.unstable_UserBlockingPriority, zo = n.unstable_NormalPriority, Cl = n.unstable_LowPriority, $r = n.unstable_IdlePriority, Tt = n.log, he = n.unstable_setDisableYieldValue, oe = null, Zt = null;
  function tn(t) {
    if (typeof Tt == "function" && he(t), Zt && typeof Zt.setStrictMode == "function")
      try {
        Zt.setStrictMode(oe, t);
      } catch {
      }
  }
  var kt = Math.clz32 ? Math.clz32 : Jr, en = Math.log, Cn = Math.LN2;
  function Jr(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (en(t) / Cn | 0) | 0;
  }
  var Xe = 256, ea = 262144, Al = 4194304;
  function Ha(t) {
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
  function Rl(t, e, a) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var c = 0, u = t.suspendedLanes, y = t.pingedLanes;
    t = t.warmLanes;
    var T = s & 134217727;
    return T !== 0 ? (s = T & ~u, s !== 0 ? c = Ha(s) : (y &= T, y !== 0 ? c = Ha(y) : a || (a = T & ~t, a !== 0 && (c = Ha(a))))) : (T = s & ~u, T !== 0 ? c = Ha(T) : y !== 0 ? c = Ha(y) : a || (a = s & ~t, a !== 0 && (c = Ha(a)))), c === 0 ? 0 : e !== 0 && e !== c && (e & u) === 0 && (u = c & -c, a = e & -e, u >= a || u === 32 && (a & 4194048) !== 0) ? e : c;
  }
  function Wr(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function zg(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - kt(a), c = 1 << s;
        e |= t[s], a &= ~c;
      }
    return e;
  }
  function rA(t, e) {
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
  function jg() {
    var t = Al;
    return Al <<= 1, (Al & 62914560) === 0 && (Al = 4194304), t;
  }
  function gf(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function ts(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function sA(t, e, a, s, c, u) {
    var y = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var T = t.entanglements, _ = t.expirationTimes, U = t.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var G = 31 - kt(a), Z = 1 << G;
      T[G] = 0, _[G] = -1;
      var L = U[G];
      if (L !== null)
        for (U[G] = null, G = 0; G < L.length; G++) {
          var I = L[G];
          I !== null && (I.lane &= -536870913);
        }
      a &= ~Z;
    }
    s !== 0 && Vg(t, s, 0), u !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(y & ~e));
  }
  function Vg(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var s = 31 - kt(e);
    t.entangledLanes |= e, t.entanglements[s] = t.entanglements[s] | 1073741824 | a & 261930;
  }
  function Lg(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var s = 31 - kt(a), c = 1 << s;
      c & e | t[s] & e && (t[s] |= e), a &= ~c;
    }
  }
  function Bg(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : vf(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function vf(t) {
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
  function yf(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Pg() {
    var t = st.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : qb(t.type));
  }
  function Ug(t, e) {
    var a = st.p;
    try {
      return st.p = t, e();
    } finally {
      st.p = a;
    }
  }
  var Ci = Math.random().toString(36).slice(2), Le = "__reactFiber$" + Ci, nn = "__reactProps$" + Ci, jo = "__reactContainer$" + Ci, kg = "__reactEvents$" + Ci, lA = "__reactListeners$" + Ci, cA = "__reactHandles$" + Ci, Hg = "__reactResources$" + Ci, es = "__reactMarker$" + Ci, Dl = "__reactLoad$" + Ci;
  function Ol(t) {
    delete t[Le], delete t[nn], delete t[lA], delete t[cA];
  }
  function Ia(t) {
    var e;
    if (e = t[Le]) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[jo] || a[Le]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = Cb(t); t !== null; ) {
            if (a = t[Le]) return a;
            t = Cb(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Vo(t) {
    if (t = t[Le] || t[jo]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ns(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Lo(t) {
    var e = t[Hg];
    return e || (e = t[Hg] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function De(t) {
    t[es] = !0;
  }
  function Ig(t) {
    t[Dl] = void 0;
  }
  var Gg = /* @__PURE__ */ new Set(), Yg = {};
  function Ga(t, e) {
    Bo(t, e), Bo(t + "Capture", e);
  }
  function Bo(t, e) {
    for (Yg[t] = e, t = 0; t < e.length; t++)
      Gg.add(e[t]);
  }
  var uA = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), qg = {}, Fg = {};
  function fA(t) {
    return Xr.call(Fg, t) ? !0 : Xr.call(qg, t) ? !1 : uA.test(t) ? Fg[t] = !0 : (qg[t] = !0, !1);
  }
  var Ut = !1;
  function Xg() {
    var t = Ut;
    return Ut = !1, t;
  }
  function Ml(t, e, a) {
    if (fA(e))
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
  function _l(t, e, a) {
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
  function Ai(t, e, a, s) {
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
  function mn(t) {
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
  function Kg(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function dA(t, e, a) {
    var s = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var c = s.get, u = s.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(y) {
          a = "" + y, u.call(this, y);
        }
      }), Object.defineProperty(t, e, {
        enumerable: s.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(y) {
          a = "" + y;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function bf(t) {
    if (!t._valueTracker) {
      var e = Kg(t) ? "checked" : "value";
      t._valueTracker = dA(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Zg(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), s = "";
    return t && (s = Kg(t) ? t.checked ? "true" : "false" : t.value), t = s, t !== a ? (e.setValue(t), !0) : !1;
  }
  var hA = /[\n"\\]/g;
  function An(t) {
    return t.replace(
      hA,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xf(t, e, a, s, c, u, y, T) {
    t.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.type = y : t.removeAttribute("type"), e != null ? y === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + mn(e)) : t.value !== "" + mn(e) && (t.value = "" + mn(e)) : y !== "submit" && y !== "reset" || t.removeAttribute("value"), e != null ? y === "number" && t.value == e ? Sf(t, mn(t.value)) : Sf(t, mn(e)) : a != null ? Sf(t, mn(a)) : s != null && t.removeAttribute("value"), c == null && u != null && (t.defaultChecked = !!u), c != null && (t.checked = c && typeof c != "function" && typeof c != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? t.name = "" + mn(T) : t.removeAttribute("name");
  }
  function Qg(t, e, a, s, c, u, y, T) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        bf(t);
        return;
      }
      a = a != null ? "" + mn(a) : "", e = e != null ? "" + mn(e) : a, T || e === t.value || (t.value = e), t.defaultValue = e;
    }
    s = s ?? c, s = typeof s != "function" && typeof s != "symbol" && !!s, t.checked = T ? t.checked : !!s, t.defaultChecked = !!s, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (t.name = y), bf(t);
  }
  function Sf(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Po(t, e, a, s) {
    if (t = t.options, e) {
      e = {};
      for (var c = 0; c < a.length; c++)
        e["$" + a[c]] = !0;
      for (a = 0; a < t.length; a++)
        c = e.hasOwnProperty("$" + t[a].value), t[a].selected !== c && (t[a].selected = c), c && s && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + mn(a), e = null, c = 0; c < t.length; c++) {
        if (t[c].value === a) {
          t[c].selected = !0, s && (t[c].defaultSelected = !0);
          return;
        }
        e !== null || t[c].disabled || (e = t[c]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function $g(t, e, a) {
    if (e != null && (e = "" + mn(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + mn(a) : "";
  }
  function Jg(t, e, a, s) {
    if (e == null) {
      if (s != null) {
        if (a != null) throw Error(r(92));
        if (bt(s)) {
          if (1 < s.length) throw Error(r(93));
          s = s[0];
        }
        a = s;
      }
      a == null && (a = ""), e = a;
    }
    a = mn(e), t.defaultValue = a, s = t.textContent, s === a && s !== "" && s !== null && (t.value = s), bf(t);
  }
  function Uo(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var mA = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Wg(t, e, a) {
    var s = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? s ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : s ? t.setProperty(e, a) : typeof a != "number" || a === 0 || mA.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function tv(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, a != null) {
      for (var s in a)
        !a.hasOwnProperty(s) || e != null && e.hasOwnProperty(s) || (s.indexOf("--") === 0 ? t.setProperty(s, "") : s === "float" ? t.cssFloat = "" : t[s] = "", Ut = !0);
      for (var c in e)
        s = e[c], e.hasOwnProperty(c) && a[c] !== s && (Wg(t, c, s), Ut = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Wg(t, u, e[u]);
  }
  function wf(t) {
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
  var pA = /* @__PURE__ */ new Map([
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
  ]), gA = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nl(t) {
    return gA.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ii() {
  }
  var Tf = null;
  function Ef(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ko = null, Ho = null;
  function ev(t) {
    var e = Vo(t);
    if (e && (t = e.stateNode)) {
      var a = t[nn] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (xf(
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
              'input[name="' + An(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var s = a[e];
              if (s !== t && s.form === t.form) {
                var c = s[nn] || null;
                if (!c) throw Error(r(90));
                xf(
                  s,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              s = a[e], s.form === t.form && Zg(s);
          }
          break t;
        case "textarea":
          $g(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && Po(t, !!a.multiple, e, !1);
      }
    }
  }
  var Cf = !1;
  function nv(t, e, a) {
    if (Cf) return t(e, a);
    Cf = !0;
    try {
      var s = t(e);
      return s;
    } finally {
      if (Cf = !1, (ko !== null || Ho !== null) && (Nc(), ko && (e = ko, t = Ho, Ho = ko = null, ev(e), t)))
        for (e = 0; e < t.length; e++) ev(t[e]);
    }
  }
  function is(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var s = a[nn] || null;
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
  var Ri = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Af = !1;
  if (Ri)
    try {
      var as = {};
      Object.defineProperty(as, "passive", {
        get: function() {
          Af = !0;
        }
      }), window.addEventListener("test", as, as), window.removeEventListener("test", as, as);
    } catch {
      Af = !1;
    }
  var na = null, Rf = null, zl = null;
  function iv() {
    if (zl) return zl;
    var t, e = Rf, a = e.length, s, c = "value" in na ? na.value : na.textContent, u = c.length;
    for (t = 0; t < a && e[t] === c[t]; t++) ;
    var y = a - t;
    for (s = 1; s <= y && e[a - s] === c[u - s]; s++) ;
    return zl = c.slice(t, 1 < s ? 1 - s : void 0);
  }
  function jl(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Vl() {
    return !0;
  }
  function av() {
    return !1;
  }
  function Ke(t) {
    function e(a, s, c, u, y) {
      this._reactName = a, this._targetInst = c, this.type = s, this.nativeEvent = u, this.target = y, this.currentTarget = null;
      for (var T in t)
        t.hasOwnProperty(T) && (a = t[T], this[T] = a ? a(u) : u[T]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Vl : av, this.isPropagationStopped = av, this;
    }
    return N(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Vl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Vl);
      },
      persist: function() {
      },
      isPersistent: Vl
    }), e;
  }
  var ia = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ll = Ke(ia), os = N({}, ia, { view: 0, detail: 0 }), vA = Ke(os), Df, Of, rs, Bl = N({}, os, {
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
    getModifierState: _f,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== rs && (rs && t.type === "mousemove" ? (Df = t.screenX - rs.screenX, Of = t.screenY - rs.screenY) : Of = Df = 0, rs = t), Df);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Of;
    }
  }), ov = Ke(Bl), yA = N({}, Bl, { dataTransfer: 0 }), bA = Ke(yA), xA = N({}, os, { relatedTarget: 0 }), Mf = Ke(xA), SA = N({}, ia, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wA = Ke(SA), TA = N({}, ia, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), EA = Ke(TA), CA = N({}, ia, { data: 0 }), rv = Ke(CA), AA = {
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
  }, RA = {
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
  }, DA = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function OA(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = DA[t]) ? !!e[t] : !1;
  }
  function _f() {
    return OA;
  }
  var MA = N({}, os, {
    key: function(t) {
      if (t.key) {
        var e = AA[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = jl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? RA[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _f,
    charCode: function(t) {
      return t.type === "keypress" ? jl(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? jl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), _A = Ke(MA), NA = N({}, Bl, {
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
  }), sv = Ke(NA), zA = N({}, ia, { submitter: 0 }), jA = Ke(zA), VA = N({}, os, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _f
  }), LA = Ke(VA), BA = N({}, ia, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), PA = Ke(BA), UA = N({}, Bl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kA = Ke(UA), HA = N({}, ia, {
    newState: 0,
    oldState: 0,
    source: 0
  }), IA = Ke(HA), GA = [9, 13, 27, 32], Nf = Ri && "CompositionEvent" in window, ss = null;
  Ri && "documentMode" in document && (ss = document.documentMode);
  var YA = Ri && "TextEvent" in window && !ss, lv = Ri && (!Nf || ss && 8 < ss && 11 >= ss), cv = " ", uv = !1;
  function fv(t, e) {
    switch (t) {
      case "keyup":
        return GA.indexOf(e.keyCode) !== -1;
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
  function dv(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Io = !1;
  function qA(t, e) {
    switch (t) {
      case "compositionend":
        return dv(e);
      case "keypress":
        return e.which !== 32 ? null : (uv = !0, cv);
      case "textInput":
        return t = e.data, t === cv && uv ? null : t;
      default:
        return null;
    }
  }
  function FA(t, e) {
    if (Io)
      return t === "compositionend" || !Nf && fv(t, e) ? (t = iv(), zl = Rf = na = null, Io = !1, t) : null;
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
        return lv && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var XA = {
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
  function hv(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!XA[t.type] : e === "textarea";
  }
  function mv(t, e, a, s) {
    ko ? Ho ? Ho.push(s) : Ho = [s] : ko = s, e = Pc(e, "onChange"), 0 < e.length && (a = new Ll(
      "onChange",
      "change",
      null,
      a,
      s
    ), t.push({ event: a, listeners: e }));
  }
  var ls = null, cs = null;
  function KA(t) {
    eb(t, 0);
  }
  function Pl(t) {
    var e = ns(t);
    if (Zg(e)) return t;
  }
  function pv(t, e) {
    if (t === "change") return e;
  }
  var gv = !1;
  if (Ri) {
    var zf;
    if (Ri) {
      var jf = "oninput" in document;
      if (!jf) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), jf = typeof vv.oninput == "function";
      }
      zf = jf;
    } else zf = !1;
    gv = zf && (!document.documentMode || 9 < document.documentMode);
  }
  function yv() {
    ls && (ls.detachEvent("onpropertychange", bv), cs = ls = null);
  }
  function bv(t) {
    if (t.propertyName === "value" && Pl(cs)) {
      var e = [];
      mv(
        e,
        cs,
        t,
        Ef(t)
      ), nv(KA, e);
    }
  }
  function ZA(t, e, a) {
    t === "focusin" ? (yv(), ls = e, cs = a, ls.attachEvent("onpropertychange", bv)) : t === "focusout" && yv();
  }
  function QA(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pl(cs);
  }
  function $A(t, e) {
    if (t === "click") return Pl(e);
  }
  function JA(t, e) {
    if (t === "input" || t === "change")
      return Pl(e);
  }
  function WA(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var pn = typeof Object.is == "function" ? Object.is : WA;
  function us(t, e) {
    if (pn(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), s = Object.keys(e);
    if (a.length !== s.length) return !1;
    for (s = 0; s < a.length; s++) {
      var c = a[s];
      if (!Xr.call(e, c) || !pn(t[c], e[c]))
        return !1;
    }
    return !0;
  }
  function Vf(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function xv(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Sv(t, e) {
    var a = xv(t);
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
      a = xv(a);
    }
  }
  function wv(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? wv(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Tv(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Vf(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Vf(t.document);
    }
    return e;
  }
  function Lf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var tR = Ri && "documentMode" in document && 11 >= document.documentMode, Go = null, Bf = null, fs = null, Pf = !1;
  function Ev(t, e, a) {
    var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Pf || Go == null || Go !== Vf(s) || (s = Go, "selectionStart" in s && Lf(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), fs && us(fs, s) || (fs = s, s = Pc(Bf, "onSelect"), 0 < s.length && (e = new Ll(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: s }), e.target = Go)));
  }
  function Ya(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var Yo = {
    animationend: Ya("Animation", "AnimationEnd"),
    animationiteration: Ya("Animation", "AnimationIteration"),
    animationstart: Ya("Animation", "AnimationStart"),
    transitionrun: Ya("Transition", "TransitionRun"),
    transitionstart: Ya("Transition", "TransitionStart"),
    transitioncancel: Ya("Transition", "TransitionCancel"),
    transitionend: Ya("Transition", "TransitionEnd")
  }, Uf = {}, Cv = {};
  Ri && (Cv = document.createElement("div").style, "AnimationEvent" in window || (delete Yo.animationend.animation, delete Yo.animationiteration.animation, delete Yo.animationstart.animation), "TransitionEvent" in window || delete Yo.transitionend.transition);
  function qa(t) {
    if (Uf[t]) return Uf[t];
    if (!Yo[t]) return t;
    var e = Yo[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in Cv)
        return Uf[t] = e[a];
    return t;
  }
  var Av = qa("animationend"), Rv = qa("animationiteration"), Dv = qa("animationstart"), eR = qa("transitionrun"), nR = qa("transitionstart"), iR = qa("transitioncancel"), Ov = qa("transitionend"), Mv = /* @__PURE__ */ new Map(), kf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  kf.push("scrollEnd");
  function Hn(t, e) {
    Mv.set(t, e), Ga(e, [t]);
  }
  var aR = 0;
  function Di(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = qn.identifierPrefix;
    var a = aR++;
    return t = "_" + t + "t_" + a.toString(32) + "_", e.autoName = t;
  }
  function _v(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, a = ur;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var c = t[a[s]];
        if (c != null) {
          if (c === "none") return "none";
          e = e == null ? c : e + (" " + c);
        }
      }
    return e ?? t.default;
  }
  function Oi(t, e) {
    return t = _v(t), e = _v(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Ul = typeof reportError == "function" ? reportError : function(t) {
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
  }, Rn = [], qo = 0, Hf = 0;
  function kl() {
    for (var t = qo, e = Hf = qo = 0; e < t; ) {
      var a = Rn[e];
      Rn[e++] = null;
      var s = Rn[e];
      Rn[e++] = null;
      var c = Rn[e];
      Rn[e++] = null;
      var u = Rn[e];
      if (Rn[e++] = null, s !== null && c !== null) {
        var y = s.pending;
        y === null ? c.next = c : (c.next = y.next, y.next = c), s.pending = c;
      }
      u !== 0 && Nv(a, c, u);
    }
  }
  function Hl(t, e, a, s) {
    Rn[qo++] = t, Rn[qo++] = e, Rn[qo++] = a, Rn[qo++] = s, Hf |= s, t.lanes |= s, t = t.alternate, t !== null && (t.lanes |= s);
  }
  function If(t, e, a, s) {
    return Hl(t, e, a, s), Il(t);
  }
  function Fa(t, e) {
    return Hl(t, null, null, e), Il(t);
  }
  function Nv(t, e, a) {
    t.lanes |= a;
    var s = t.alternate;
    s !== null && (s.lanes |= a);
    for (var c = !1, u = t.return; u !== null; )
      u.childLanes |= a, s = u.alternate, s !== null && (s.childLanes |= a), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (c = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, c && e !== null && (c = 31 - kt(a), t = u.hiddenUpdates, s = t[c], s === null ? t[c] = [e] : s.push(e), e.lane = a | 536870912), u) : null;
  }
  function Il(t) {
    if (50 < zs)
      throw zs = 0, _c = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Fo = {};
  function oR(t, e, a, s) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function an(t, e, a, s) {
    return new oR(t, e, a, s);
  }
  function Gf(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Mi(t, e) {
    var a = t.alternate;
    return a === null ? (a = an(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 1206910976, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function zv(t, e) {
    t.flags &= 1206910978;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Gl(t, e, a, s, c, u) {
    var y = 0;
    if (s = t, typeof s == "function") Gf(s) && (y = 1);
    else if (typeof s == "string")
      y = zD(
        t,
        a,
        fe.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (s) {
        case yt:
          return t = an(31, a, e, c), t.elementType = yt, t.lanes = u, t;
        case ut:
          return Xa(a.children, c, u, e);
        case et:
          y = 8, c |= 24;
          break;
        case rt:
          return t = an(12, a, e, c | 2), t.elementType = rt, t.lanes = u, t;
        case X:
          return t = an(13, a, e, c), t.elementType = X, t.lanes = u, t;
        case $:
          return t = an(19, a, e, c), t.elementType = $, t.lanes = u, t;
        case St:
        case j:
          return t = c | 32, t = an(30, a, e, t), t.elementType = j, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof s == "object" && s !== null)
            switch (s.$$typeof) {
              case dt:
                y = 10;
                break t;
              case ft:
                y = 9;
                break t;
              case Y:
                y = 11;
                break t;
              case at:
                y = 14;
                break t;
              case Q:
                y = 16, s = null;
                break t;
            }
          y = 29, a = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), s = null;
      }
    return e = an(y, a, e, c), e.elementType = t, e.type = s, e.lanes = u, e;
  }
  function Xa(t, e, a, s) {
    return t = an(7, t, s, e), t.lanes = a, t;
  }
  function Yf(t, e, a) {
    return t = an(6, t, null, e), t.lanes = a, t;
  }
  function jv(t) {
    var e = an(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function qf(t, e, a) {
    return e = an(
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
  var Vv = /* @__PURE__ */ new WeakMap();
  function Dn(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = Vv.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: Ei(e)
      }, Vv.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Ei(e)
    };
  }
  var Xo = [], Ko = 0, Yl = null, ds = 0, On = [], Mn = 0, aa = null, ai = 1, oi = "";
  function _i(t, e) {
    Xo[Ko++] = ds, Xo[Ko++] = Yl, Yl = t, ds = e;
  }
  function Lv(t, e, a) {
    On[Mn++] = ai, On[Mn++] = oi, On[Mn++] = aa, aa = t;
    var s = ai;
    t = oi;
    var c = 32 - kt(s) - 1;
    s &= ~(1 << c), a += 1;
    var u = 32 - kt(e) + c;
    if (30 < u) {
      var y = c - c % 5;
      u = (s & (1 << y) - 1).toString(32), s >>= y, c -= y, ai = 1 << 32 - kt(e) + c | a << c | s, oi = u + t;
    } else
      ai = 1 << u | a << c | s, oi = t;
  }
  function ql(t) {
    t.return !== null && (_i(t, 1), Lv(t, 1, 0));
  }
  function Ff(t) {
    for (; t === Yl; )
      Yl = Xo[--Ko], Xo[Ko] = null, ds = Xo[--Ko], Xo[Ko] = null;
    for (; t === aa; )
      aa = On[--Mn], On[Mn] = null, oi = On[--Mn], On[Mn] = null, ai = On[--Mn], On[Mn] = null;
  }
  function Bv(t, e) {
    On[Mn++] = ai, On[Mn++] = oi, On[Mn++] = aa, ai = e.id, oi = e.overflow, aa = t;
  }
  var Oe = null, te = null, Mt = !1, oa = null, _n = !1, Xf = Error(r(519));
  function ra(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw hs(Dn(e, t)), Xf;
  }
  function Pv(t) {
    var e = t.stateNode, a = t.type, s = t.memoizedProps;
    switch (e[Le] = t, e[nn] = s, a) {
      case "dialog":
        zt("cancel", e), zt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        zt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Vs.length; a++)
          zt(Vs[a], e);
        break;
      case "source":
        zt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        zt("error", e), zt("load", e);
        break;
      case "details":
        zt("toggle", e);
        break;
      case "input":
        zt("invalid", e), Qg(
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
        zt("invalid", e);
        break;
      case "textarea":
        zt("invalid", e), Jg(e, s.value, s.defaultValue, s.children);
    }
    a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || s.suppressHydrationWarning === !0 || ob(e.textContent, a) ? (s.popover != null && (zt("beforetoggle", e), zt("toggle", e)), s.onScroll != null && zt("scroll", e), s.onScrollEnd != null && zt("scrollend", e), s.onClick != null && (e.onclick = ii), e = !0) : e = !1, e || ra(t, !0);
  }
  function Fl(t) {
    for (Oe = t.return; Oe; )
      switch (Oe.tag) {
        case 5:
        case 31:
        case 13:
          _n = !1;
          return;
        case 27:
        case 3:
          _n = !0;
          return;
        default:
          Oe = Oe.return;
      }
  }
  function Zo(t) {
    if (t !== Oe) return !1;
    if (!Mt) return Fl(t), Mt = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Th(t.type, t.memoizedProps)), a = !a), a && te && ra(t), Fl(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      te = Eb(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      te = Eb(t);
    } else
      e === 27 ? (e = te, wa(t.type) ? (t = Nh, Nh = null, te = t) : te = e) : te = Oe ? zn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ka() {
    te = Oe = null, Mt = !1;
  }
  function Kf() {
    var t = oa;
    return t !== null && (sn === null ? sn = t : sn.push.apply(
      sn,
      t
    ), oa = null), t;
  }
  function hs(t) {
    oa === null ? oa = [t] : oa.push(t);
  }
  var Zf = Ve(null), Za = null, Ni = null;
  function sa(t, e, a) {
    Bt(Zf, e._currentValue), e._currentValue = a;
  }
  function zi(t) {
    t._currentValue = Zf.current, Jt(Zf);
  }
  function Xl(t, e, a) {
    for (; t !== null; ) {
      var s = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, s !== null && (s.childLanes |= e)) : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function Qf(t, e, a, s) {
    var c = t.child;
    for (c !== null && (c.return = t); c !== null; ) {
      var u = c.dependencies;
      if (u !== null) {
        var y = c.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var T = u;
          u = c;
          for (var _ = 0; _ < e.length; _++)
            if (T.context === e[_]) {
              u.lanes |= a, T = u.alternate, T !== null && (T.lanes |= a), Xl(
                u.return,
                a,
                t
              ), s || (y = null);
              break t;
            }
          u = T.next;
        }
      } else if (c.tag === 18) {
        if (y = c.return, y === null) throw Error(r(341));
        y.lanes |= a, u = y.alternate, u !== null && (u.lanes |= a), Xl(y, a, t), y = null;
      } else
        c.tag === 13 && c.memoizedState !== null && c.memoizedState.dehydrated === null ? (c.lanes |= a, y = c.alternate, y !== null && (y.lanes |= a), Xl(
          c.return,
          a,
          t
        ), y = c.child, y = y !== null ? y.sibling : null) : y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (c = y.sibling, c !== null) {
            c.return = y.return, y = c;
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function Qa(t, e, a, s) {
    t = null;
    for (var c = e, u = !1; c !== null; ) {
      if (!u) {
        if ((c.flags & 524288) !== 0) u = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(r(387));
        if (y = y.memoizedProps, y !== null) {
          var T = c.type;
          pn(c.pendingProps.value, y.value) || (t !== null ? t.push(T) : t = [T]);
        }
      } else if (c === de.current) {
        if (y = c.alternate, y === null) throw Error(r(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState && (t !== null ? t.push(xr) : t = [xr]);
      }
      c = c.return;
    }
    return t !== null && Qf(
      e,
      t,
      a,
      s
    ), e.flags |= 262144, t !== null;
  }
  function Kl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!pn(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function $a(t) {
    Za = t, Ni = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Be(t) {
    return Uv(Za, t);
  }
  function Zl(t, e) {
    return Za === null && $a(t), Uv(t, e);
  }
  function Uv(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, Ni === null) {
      if (t === null) throw Error(r(308));
      Ni = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ni = Ni.next = e;
    return a;
  }
  var rR = typeof AbortController < "u" ? AbortController : function() {
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
  }, sR = n.unstable_scheduleCallback, lR = n.unstable_NormalPriority, me = {
    $$typeof: dt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function $f() {
    return {
      controller: new rR(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ms(t) {
    t.refCount--, t.refCount === 0 && sR(lR, function() {
      t.controller.abort();
    });
  }
  function kv(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var a = t.transitionTypes;
      for (a === null && (a = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var s = e[t];
        a.indexOf(s) === -1 && a.push(s);
      }
    }
  }
  var ps = null;
  function cR(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var gs = null, Jf = 0, Ja = 0, Qo = null;
  function uR(t, e) {
    if (gs === null) {
      var a = gs = [];
      Jf = 0, Ja = mh(), Qo = {
        status: "pending",
        value: void 0,
        then: function(s) {
          a.push(s);
        }
      };
    }
    return Jf++, e.then(Hv, Hv), e;
  }
  function Hv() {
    if (--Jf === 0 && (ps = null, gs !== null)) {
      Qo !== null && (Qo.status = "fulfilled");
      var t = gs;
      gs = null, Ja = 0, Qo = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function fR(t, e) {
    var a = [], s = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        a.push(c);
      }
    };
    return t.then(
      function() {
        s.status = "fulfilled", s.value = e;
        for (var c = 0; c < a.length; c++) (0, a[c])(e);
      },
      function(c) {
        for (s.status = "rejected", s.reason = c, c = 0; c < a.length; c++)
          (0, a[c])(void 0);
      }
    ), s;
  }
  var Iv = nt.S;
  nt.S = function(t, e) {
    if (j0 = Fe(), typeof e == "object" && e !== null && typeof e.then == "function" && uR(t, e), ps !== null)
      for (var a = mr; a !== null; )
        kv(a, ps), a = a.next;
    if (a = t.types, a !== null) {
      for (var s = mr; s !== null; )
        kv(s, a), s = s.next;
      if (Ja !== 0) {
        s = ps, s === null && (s = ps = []);
        for (var c = 0; c < a.length; c++) {
          var u = a[c];
          s.indexOf(u) === -1 && s.push(u);
        }
      }
    }
    Iv !== null && Iv(t, e);
  };
  var Wa = Ve(null);
  function Wf() {
    var t = Wa.current;
    return t !== null ? t : Wt.pooledCache;
  }
  function Ql(t, e) {
    e === null ? Bt(Wa, Wa.current) : Bt(Wa, e.pool);
  }
  function Gv() {
    var t = Wf();
    return t === null ? null : { parent: me._currentValue, pool: t };
  }
  var $o = Error(r(460)), td = Error(r(474)), $l = Error(r(542)), Jl = { then: function() {
  } };
  function Yv(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function qv(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(ii, ii), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Xv(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(ii, ii);
        else {
          if (t = Wt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(s) {
              if (e.status === "pending") {
                var c = e;
                c.status = "fulfilled", c.value = s;
              }
            },
            function(s) {
              if (e.status === "pending") {
                var c = e;
                c.status = "rejected", c.reason = s;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Xv(t), t;
        }
        throw eo = e, $o;
    }
  }
  function to(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (eo = a, $o) : a;
    }
  }
  var eo = null;
  function Fv() {
    if (eo === null) throw Error(r(459));
    var t = eo;
    return eo = null, t;
  }
  function Xv(t) {
    if (t === $o || t === $l)
      throw Error(r(483));
  }
  var Jo = null, vs = 0;
  function Wl(t) {
    var e = vs;
    return vs += 1, Jo === null && (Jo = []), qv(Jo, t, e);
  }
  function la(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function tc(t, e) {
    throw e.$$typeof === M ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Kv(t) {
    function e(B, V) {
      if (t) {
        var H = B.deletions;
        H === null ? (B.deletions = [V], B.flags |= 16) : H.push(V);
      }
    }
    function a(B, V) {
      if (!t) return null;
      for (; V !== null; )
        e(B, V), V = V.sibling;
      return null;
    }
    function s(B) {
      for (var V = /* @__PURE__ */ new Map(); B !== null; )
        B.key === null ? V.set(B.index, B) : V.set(B.key, B), B = B.sibling;
      return V;
    }
    function c(B, V) {
      return B = Mi(B, V), B.index = 0, B.sibling = null, B;
    }
    function u(B, V, H) {
      return B.index = H, t ? (H = B.alternate, H !== null ? (H = H.index, H < V ? (B.flags |= 2, V) : H) : (B.flags |= 134217730, V)) : (B.flags |= 1048576, V);
    }
    function y(B) {
      return t && B.alternate === null && (B.flags |= 134217730), B;
    }
    function T(B, V, H, K) {
      return V === null || V.tag !== 6 ? (V = Yf(H, B.mode, K), V.return = B, V) : (V = c(V, H), V.return = B, V);
    }
    function _(B, V, H, K) {
      var ht = H.type;
      return ht === ut ? (B = G(
        B,
        V,
        H.props.children,
        K,
        H.key
      ), la(B, H), B) : V !== null && (V.elementType === ht || typeof ht == "object" && ht !== null && ht.$$typeof === Q && to(ht) === V.type) ? (V = c(V, H.props), la(V, H), V.return = B, V) : (V = Gl(
        H.type,
        H.key,
        H.props,
        null,
        B.mode,
        K
      ), la(V, H), V.return = B, V);
    }
    function U(B, V, H, K) {
      return V === null || V.tag !== 4 || V.stateNode.containerInfo !== H.containerInfo || V.stateNode.implementation !== H.implementation ? (V = qf(H, B.mode, K), V.return = B, V) : (V = c(V, H.children || []), V.return = B, V);
    }
    function G(B, V, H, K, ht) {
      return V === null || V.tag !== 7 ? (V = Xa(
        H,
        B.mode,
        K,
        ht
      ), V.return = B, V) : (V = c(V, H), V.return = B, V);
    }
    function Z(B, V, H) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return V = Yf(
          "" + V,
          B.mode,
          H
        ), V.return = B, V;
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case F:
            return H = Gl(
              V.type,
              V.key,
              V.props,
              null,
              B.mode,
              H
            ), la(H, V), H.return = B, H;
          case J:
            return V = qf(
              V,
              B.mode,
              H
            ), V.return = B, V;
          case Q:
            return V = to(V), Z(B, V, H);
        }
        if (bt(V) || lt(V))
          return V = Xa(
            V,
            B.mode,
            H,
            null
          ), V.return = B, V;
        if (typeof V.then == "function")
          return Z(B, Wl(V), H);
        if (V.$$typeof === dt)
          return Z(
            B,
            Zl(B, V),
            H
          );
        tc(B, V);
      }
      return null;
    }
    function L(B, V, H, K) {
      var ht = V !== null ? V.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return ht !== null ? null : T(B, V, "" + H, K);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case F:
            return H.key === ht ? _(B, V, H, K) : null;
          case J:
            return H.key === ht ? U(B, V, H, K) : null;
          case Q:
            return H = to(H), L(B, V, H, K);
        }
        if (bt(H) || lt(H))
          return ht !== null ? null : G(B, V, H, K, null);
        if (typeof H.then == "function")
          return L(
            B,
            V,
            Wl(H),
            K
          );
        if (H.$$typeof === dt)
          return L(
            B,
            V,
            Zl(B, H),
            K
          );
        tc(B, H);
      }
      return null;
    }
    function I(B, V, H, K, ht) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return B = B.get(H) || null, T(V, B, "" + K, ht);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case F:
            return B = B.get(
              K.key === null ? H : K.key
            ) || null, _(V, B, K, ht);
          case J:
            return B = B.get(
              K.key === null ? H : K.key
            ) || null, U(V, B, K, ht);
          case Q:
            return K = to(K), I(
              B,
              V,
              H,
              K,
              ht
            );
        }
        if (bt(K) || lt(K))
          return B = B.get(H) || null, G(V, B, K, ht, null);
        if (typeof K.then == "function")
          return I(
            B,
            V,
            H,
            Wl(K),
            ht
          );
        if (K.$$typeof === dt)
          return I(
            B,
            V,
            H,
            Zl(V, K),
            ht
          );
        tc(V, K);
      }
      return null;
    }
    function ct(B, V, H, K) {
      for (var ht = null, Vt = null, xt = V, wt = V = 0, ve = null; xt !== null && wt < H.length; wt++) {
        xt.index > wt ? (ve = xt, xt = null) : ve = xt.sibling;
        var Lt = L(
          B,
          xt,
          H[wt],
          K
        );
        if (Lt === null) {
          xt === null && (xt = ve);
          break;
        }
        t && xt && Lt.alternate === null && e(B, xt), V = u(Lt, V, wt), Vt === null ? ht = Lt : Vt.sibling = Lt, Vt = Lt, xt = ve;
      }
      if (wt === H.length)
        return a(B, xt), Mt && _i(B, wt), ht;
      if (xt === null) {
        for (; wt < H.length; wt++)
          xt = Z(B, H[wt], K), xt !== null && (V = u(
            xt,
            V,
            wt
          ), Vt === null ? ht = xt : Vt.sibling = xt, Vt = xt);
        return Mt && _i(B, wt), ht;
      }
      for (xt = s(xt); wt < H.length; wt++)
        ve = I(
          xt,
          B,
          wt,
          H[wt],
          K
        ), ve !== null && (t && (Lt = ve.alternate, Lt !== null && xt.delete(Lt.key === null ? wt : Lt.key)), V = u(
          ve,
          V,
          wt
        ), Vt === null ? ht = ve : Vt.sibling = ve, Vt = ve);
      return t && xt.forEach(function(Ra) {
        return e(B, Ra);
      }), Mt && _i(B, wt), ht;
    }
    function gt(B, V, H, K) {
      if (H == null) throw Error(r(151));
      for (var ht = null, Vt = null, xt = V, wt = V = 0, ve = null, Lt = H.next(); xt !== null && !Lt.done; wt++, Lt = H.next()) {
        xt.index > wt ? (ve = xt, xt = null) : ve = xt.sibling;
        var Ra = L(B, xt, Lt.value, K);
        if (Ra === null) {
          xt === null && (xt = ve);
          break;
        }
        t && xt && Ra.alternate === null && e(B, xt), V = u(Ra, V, wt), Vt === null ? ht = Ra : Vt.sibling = Ra, Vt = Ra, xt = ve;
      }
      if (Lt.done)
        return a(B, xt), Mt && _i(B, wt), ht;
      if (xt === null) {
        for (; !Lt.done; wt++, Lt = H.next())
          Lt = Z(B, Lt.value, K), Lt !== null && (V = u(Lt, V, wt), Vt === null ? ht = Lt : Vt.sibling = Lt, Vt = Lt);
        return Mt && _i(B, wt), ht;
      }
      for (xt = s(xt); !Lt.done; wt++, Lt = H.next())
        Lt = I(xt, B, wt, Lt.value, K), Lt !== null && (t && (ve = Lt.alternate, ve !== null && xt.delete(
          ve.key === null ? wt : ve.key
        )), V = u(Lt, V, wt), Vt === null ? ht = Lt : Vt.sibling = Lt, Vt = Lt);
      return t && xt.forEach(function(qD) {
        return e(B, qD);
      }), Mt && _i(B, wt), ht;
    }
    function Rt(B, V, H, K) {
      if (typeof H == "object" && H !== null && H.type === ut && H.key === null && H.props.ref === void 0 && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case F:
            t: {
              for (var ht = H.key; V !== null; ) {
                if (V.key === ht) {
                  if (ht = H.type, ht === ut) {
                    if (V.tag === 7) {
                      a(
                        B,
                        V.sibling
                      ), K = c(
                        V,
                        H.props.children
                      ), la(K, H), K.return = B, B = K;
                      break t;
                    }
                  } else if (V.elementType === ht || typeof ht == "object" && ht !== null && ht.$$typeof === Q && to(ht) === V.type) {
                    a(
                      B,
                      V.sibling
                    ), K = c(V, H.props), la(K, H), K.return = B, B = K;
                    break t;
                  }
                  a(B, V);
                  break;
                } else e(B, V);
                V = V.sibling;
              }
              H.type === ut ? (K = Xa(
                H.props.children,
                B.mode,
                K,
                H.key
              ), la(K, H), K.return = B, B = K) : (K = Gl(
                H.type,
                H.key,
                H.props,
                null,
                B.mode,
                K
              ), la(K, H), K.return = B, B = K);
            }
            return y(B);
          case J:
            t: {
              for (ht = H.key; V !== null; ) {
                if (V.key === ht)
                  if (V.tag === 4 && V.stateNode.containerInfo === H.containerInfo && V.stateNode.implementation === H.implementation) {
                    a(
                      B,
                      V.sibling
                    ), K = c(V, H.children || []), K.return = B, B = K;
                    break t;
                  } else {
                    a(B, V);
                    break;
                  }
                else e(B, V);
                V = V.sibling;
              }
              K = qf(H, B.mode, K), K.return = B, B = K;
            }
            return y(B);
          case Q:
            return H = to(H), Rt(
              B,
              V,
              H,
              K
            );
        }
        if (bt(H))
          return ct(
            B,
            V,
            H,
            K
          );
        if (lt(H)) {
          if (ht = lt(H), typeof ht != "function") throw Error(r(150));
          return H = ht.call(H), gt(
            B,
            V,
            H,
            K
          );
        }
        if (typeof H.then == "function")
          return Rt(
            B,
            V,
            Wl(H),
            K
          );
        if (H.$$typeof === dt)
          return Rt(
            B,
            V,
            Zl(B, H),
            K
          );
        tc(B, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, V !== null && V.tag === 6 ? (a(B, V.sibling), K = c(V, H), K.return = B, B = K) : (a(B, V), K = Yf(H, B.mode, K), K.return = B, B = K), y(B)) : a(B, V);
    }
    return function(B, V, H, K) {
      try {
        vs = 0;
        var ht = Rt(
          B,
          V,
          H,
          K
        );
        return Jo = null, ht;
      } catch (xt) {
        if (xt === $o || xt === $l) throw xt;
        var Vt = an(29, xt, null, B.mode);
        return Vt.lanes = K, Vt.return = B, Vt;
      }
    };
  }
  var no = Kv(!0), Zv = Kv(!1), ca = !1;
  function ed(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function nd(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ua(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fa(t, e, a) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ht & 2) !== 0) {
      var c = s.pending;
      return c === null ? e.next = e : (e.next = c.next, c.next = e), s.pending = e, e = Il(t), Nv(t, null, a), e;
    }
    return Hl(t, s, e, a), Il(t);
  }
  function ys(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var s = e.lanes;
      s &= t.pendingLanes, a |= s, e.lanes = a, Lg(t, a);
    }
  }
  function id(t, e) {
    var a = t.updateQueue, s = t.alternate;
    if (s !== null && (s = s.updateQueue, a === s)) {
      var c = null, u = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var y = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          u === null ? c = u = y : u = u.next = y, a = a.next;
        } while (a !== null);
        u === null ? c = u = e : u = u.next = e;
      } else c = u = e;
      a = {
        baseState: s.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: u,
        shared: s.shared,
        callbacks: s.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var ad = !1;
  function bs() {
    if (ad) {
      var t = Qo;
      if (t !== null) throw t;
    }
  }
  function xs(t, e, a, s) {
    ad = !1;
    var c = t.updateQueue;
    ca = !1;
    var u = c.firstBaseUpdate, y = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var _ = T, U = _.next;
      _.next = null, y === null ? u = U : y.next = U, y = _;
      var G = t.alternate;
      G !== null && (G = G.updateQueue, T = G.lastBaseUpdate, T !== y && (T === null ? G.firstBaseUpdate = U : T.next = U, G.lastBaseUpdate = _));
    }
    if (u !== null) {
      var Z = c.baseState;
      y = 0, G = U = _ = null, T = u;
      do {
        var L = T.lane & -536870913, I = L !== T.lane;
        if (I ? (jt & L) === L : (s & L) === L) {
          L !== 0 && L === Ja && (ad = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: null,
            next: null
          });
          t: {
            var ct = t, gt = T;
            L = e;
            var Rt = a;
            switch (gt.tag) {
              case 1:
                if (ct = gt.payload, typeof ct == "function") {
                  Z = ct.call(Rt, Z, L);
                  break t;
                }
                Z = ct;
                break t;
              case 3:
                ct.flags = ct.flags & -65537 | 128;
              case 0:
                if (ct = gt.payload, L = typeof ct == "function" ? ct.call(Rt, Z, L) : ct, L == null) break t;
                Z = N({}, Z, L);
                break t;
              case 2:
                ca = !0;
            }
          }
          L = T.callback, L !== null && (t.flags |= 64, I && (t.flags |= 8192), I = c.callbacks, I === null ? c.callbacks = [L] : I.push(L));
        } else
          I = {
            lane: L,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          }, G === null ? (U = G = I, _ = Z) : G = G.next = I, y |= L;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null)
            break;
          I = T, T = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      G === null && (_ = Z), c.baseState = _, c.firstBaseUpdate = U, c.lastBaseUpdate = G, u === null && (c.shared.lanes = 0), ya |= y, t.lanes = y, t.memoizedState = Z;
    }
  }
  function Qv(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function $v(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        Qv(a[t], e);
  }
  var da = Ve(null), ec = Ve(0);
  function Jv(t, e) {
    t = Pi, Bt(ec, t), Bt(da, e), Pi = t | e.baseLanes;
  }
  function od() {
    Bt(ec, Pi), Bt(da, da.current);
  }
  function rd() {
    Pi = ec.current, Jt(da), Jt(ec);
  }
  var Pe = Ve(null), Ye = null;
  function ha(t) {
    var e = t.alternate;
    Bt(Ue, Ue.current & 1), Bt(Pe, t), Ye === null && (e === null || da.current !== null || e.memoizedState !== null) && (Ye = t);
  }
  function sd(t) {
    Bt(Ue, Ue.current), Bt(Pe, t), Ye === null && (Ye = t);
  }
  function Wv(t) {
    t.tag === 22 ? (Bt(Ue, Ue.current), Bt(Pe, t), Ye === null && (Ye = t)) : ma();
  }
  function ma() {
    Bt(Ue, Ue.current), Bt(Pe, Pe.current);
  }
  function gn(t) {
    Jt(Pe), Ye === t && (Ye = null), Jt(Ue);
  }
  var Ue = Ve(0);
  function Ss(t, e) {
    Bt(Pe, Pe.current), Bt(Ue, e);
  }
  function ld(t) {
    Jt(Ue), Jt(Pe), Ye === t && (Ye = null);
  }
  function nc(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Mh(a) || _h(a)))
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
  var ji = 0, At = null, Qt = null, pe = null, ic = !1, Wo = !1, io = !1, ac = 0, ws = 0, tr = null, dR = 0;
  function re() {
    throw Error(r(321));
  }
  function cd(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!pn(t[a], e[a])) return !1;
    return !0;
  }
  function ud(t, e, a, s, c, u) {
    return ji = u, At = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, nt.H = t === null || t.memoizedState === null ? Ly : By, io = !1, u = a(s, c), io = !1, Wo && (u = ey(
      e,
      a,
      s,
      c
    )), ty(t), u;
  }
  function ty(t) {
    nt.H = fc;
    var e = Qt !== null && Qt.next !== null;
    if (ji = 0, pe = Qt = At = null, ic = !1, ws = 0, tr = null, e) throw Error(r(300));
    t === null || ge || (t = t.dependencies, t !== null && Kl(t) && (ge = !0));
  }
  function ey(t, e, a, s) {
    At = t;
    var c = 0;
    do {
      if (Wo && (tr = null), ws = 0, Wo = !1, 25 <= c) throw Error(r(301));
      if (c += 1, pe = Qt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      nt.H = xR, u = e(a, s);
    } while (Wo);
    return u;
  }
  function hR() {
    var t = nt.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ts(e) : e, t = t.useState()[0], (Qt !== null ? Qt.memoizedState : null) !== t && (At.flags |= 1024), e;
  }
  function fd() {
    var t = ac !== 0;
    return ac = 0, t;
  }
  function dd(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function hd(t) {
    if (ic) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ic = !1;
    }
    ji = 0, pe = Qt = At = null, Wo = !1, ws = ac = 0, tr = null;
  }
  function Ze() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return pe === null ? At.memoizedState = pe = t : pe = pe.next = t, pe;
  }
  function ue() {
    if (Qt === null) {
      var t = At.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Qt.next;
    var e = pe === null ? At.memoizedState : pe.next;
    if (e !== null)
      pe = e, Qt = t;
    else {
      if (t === null)
        throw At.alternate === null ? Error(r(467)) : Error(r(310));
      Qt = t, t = {
        memoizedState: Qt.memoizedState,
        baseState: Qt.baseState,
        baseQueue: Qt.baseQueue,
        queue: Qt.queue,
        next: null
      }, pe === null ? At.memoizedState = pe = t : pe = pe.next = t;
    }
    return pe;
  }
  function oc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ts(t) {
    var e = ws;
    return ws += 1, tr === null && (tr = []), t = qv(tr, t, e), e = At, (pe === null ? e.memoizedState : pe.next) === null && (e = e.alternate, nt.H = e === null || e.memoizedState === null ? Ly : By), t;
  }
  function rc(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ts(t);
      if (t.$$typeof === q) return;
      if (t.$$typeof === dt) return Be(t);
    }
    throw Error(r(438, String(t)));
  }
  function md(t) {
    var e = null, a = At.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var s = At.alternate;
      s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (e = {
        data: s.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = oc(), At.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), s = 0; s < t; s++)
        a[s] = Ot;
    return e.index++, a;
  }
  function Vi(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function sc(t) {
    var e = ue();
    return pd(e, Qt, t);
  }
  function pd(t, e, a) {
    var s = t.queue;
    if (s === null) throw Error(r(311));
    s.lastRenderedReducer = a;
    var c = t.baseQueue, u = s.pending;
    if (u !== null) {
      if (c !== null) {
        var y = c.next;
        c.next = u.next, u.next = y;
      }
      e.baseQueue = c = u, s.pending = null;
    }
    if (u = t.baseState, c === null) t.memoizedState = u;
    else {
      e = c.next;
      var T = y = null, _ = null, U = e, G = !1;
      do {
        var Z = U.lane & -536870913;
        if (Z !== U.lane ? (jt & Z) === Z : (ji & Z) === Z) {
          var L = U.revertLane;
          if (L === 0)
            _ !== null && (_ = _.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), Z === Ja && (G = !0);
          else if ((ji & L) === L) {
            U = U.next, L === Ja && (G = !0);
            continue;
          } else
            Z = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, _ === null ? (T = _ = Z, y = u) : _ = _.next = Z, At.lanes |= L, ya |= L;
          Z = U.action, io && a(u, Z), u = U.hasEagerState ? U.eagerState : a(u, Z);
        } else
          L = {
            lane: Z,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, _ === null ? (T = _ = L, y = u) : _ = _.next = L, At.lanes |= Z, ya |= Z;
        U = U.next;
      } while (U !== null && U !== e);
      if (_ === null ? y = u : _.next = T, !pn(u, t.memoizedState) && (ge = !0, G && (a = Qo, a !== null)))
        throw a;
      t.memoizedState = u, t.baseState = y, t.baseQueue = _, s.lastRenderedState = u;
    }
    return c === null && (s.lanes = 0), [t.memoizedState, s.dispatch];
  }
  function gd(t) {
    var e = ue(), a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var s = a.dispatch, c = a.pending, u = e.memoizedState;
    if (c !== null) {
      a.pending = null;
      var y = c = c.next;
      do
        u = t(u, y.action), y = y.next;
      while (y !== c);
      pn(u, e.memoizedState) || (ge = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), a.lastRenderedState = u;
    }
    return [u, s];
  }
  function ny(t, e, a) {
    var s = At, c = ue(), u = Mt;
    if (u) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = e();
    var y = !pn(
      (Qt || c).memoizedState,
      a
    );
    if (y && (c.memoizedState = a, ge = !0), c = c.queue, bd(oy.bind(null, s, c, t), [
      t
    ]), t = c.getSnapshot !== e || y || pe !== null && (pe.memoizedState.tag & 1) !== 0, er(
      t ? 9 : 8,
      { destroy: void 0 },
      ay.bind(null, s, c, a, e),
      null
    ), t) {
      if (s.flags |= 2048, Wt === null) throw Error(r(349));
      u || (ji & 127) !== 0 || iy(s, e, a);
    }
    return a;
  }
  function iy(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = At.updateQueue, e === null ? (e = oc(), At.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function ay(t, e, a, s) {
    e.value = a, e.getSnapshot = s, ry(e) && sy(t);
  }
  function oy(t, e, a) {
    return a(function() {
      ry(e) && sy(t);
    });
  }
  function ry(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !pn(t, a);
    } catch {
      return !0;
    }
  }
  function sy(t) {
    var e = Fa(t, 2);
    e !== null && ln(e, t, 2);
  }
  function vd(t) {
    var e = Ze();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), io) {
        tn(!0);
        try {
          a();
        } finally {
          tn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vi,
      lastRenderedState: t
    }, e;
  }
  function ly(t, e, a, s) {
    return t.baseState = a, pd(
      t,
      Qt,
      typeof s == "function" ? s : Vi
    );
  }
  function mR(t, e, a, s, c) {
    if (uc(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: c,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          u.listeners.push(y);
        }
      };
      nt.T !== null ? a(!0) : u.isTransition = !1, s(u), a = e.pending, a === null ? (u.next = e.pending = u, cy(e, u)) : (u.next = a.next, e.pending = a.next = u);
    }
  }
  function cy(t, e) {
    var a = e.action, s = e.payload, c = t.state;
    if (e.isTransition) {
      var u = nt.T, y = {};
      y.types = u !== null ? u.types : null, nt.T = y;
      try {
        var T = a(c, s), _ = nt.S;
        _ !== null && _(y, T), uy(t, e, T);
      } catch (U) {
        yd(t, e, U);
      } finally {
        u !== null && y.types !== null && (u.types = y.types), nt.T = u;
      }
    } else
      try {
        u = a(c, s), uy(t, e, u);
      } catch (U) {
        yd(t, e, U);
      }
  }
  function uy(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(s) {
        fy(t, e, s);
      },
      function(s) {
        return yd(t, e, s);
      }
    ) : fy(t, e, a);
  }
  function fy(t, e, a) {
    e.status = "fulfilled", e.value = a, dy(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, cy(t, a)));
  }
  function yd(t, e, a) {
    var s = t.pending;
    if (t.pending = null, s !== null) {
      s = s.next;
      do
        e.status = "rejected", e.reason = a, dy(e), e = e.next;
      while (e !== s);
    }
    t.action = null;
  }
  function dy(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function hy(t, e) {
    return e;
  }
  function my(t, e) {
    if (Mt) {
      var a = Wt.formState;
      if (a !== null) {
        t: {
          var s = At;
          if (Mt) {
            if (te) {
              e: {
                for (var c = te, u = _n; c.nodeType !== 8; ) {
                  if (!u) {
                    c = null;
                    break e;
                  }
                  if (c = zn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break e;
                  }
                }
                u = c.data, c = u === "F!" || u === "F" ? c : null;
              }
              if (c) {
                te = zn(
                  c.nextSibling
                ), s = c.data === "F!";
                break t;
              }
            }
            ra(s);
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
      lastRenderedReducer: hy,
      lastRenderedState: e
    }, a.queue = s, a = zy.bind(
      null,
      At,
      s
    ), s.dispatch = a, s = vd(!1), u = Ed.bind(
      null,
      At,
      !1,
      s.queue
    ), s = Ze(), c = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, s.queue = c, a = mR.bind(
      null,
      At,
      c,
      u,
      a
    ), c.dispatch = a, s.memoizedState = t, [e, a, !1];
  }
  function py(t) {
    var e = ue();
    return gy(e, Qt, t);
  }
  function gy(t, e, a) {
    if (e = pd(
      t,
      e,
      hy
    )[0], t = sc(Vi)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var s = Ts(e);
      } catch (y) {
        throw y === $o ? $l : y;
      }
    else s = e;
    e = ue();
    var c = e.queue, u = c.dispatch;
    return a !== e.memoizedState && (At.flags |= 2048, er(
      9,
      { destroy: void 0 },
      pR.bind(null, c, a),
      null
    )), [s, u, t];
  }
  function pR(t, e) {
    t.action = e;
  }
  function vy(t) {
    var e = ue(), a = Qt;
    if (a !== null)
      return gy(e, a, t);
    ue(), e = e.memoizedState, a = ue();
    var s = a.queue.dispatch;
    return a.memoizedState = t, [e, s, !1];
  }
  function er(t, e, a, s) {
    return t = { tag: t, create: a, deps: s, inst: e, next: null }, e = At.updateQueue, e === null && (e = oc(), At.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (s = a.next, a.next = t, t.next = s, e.lastEffect = t), t;
  }
  function yy() {
    return ue().memoizedState;
  }
  function lc(t, e, a, s) {
    var c = Ze();
    At.flags |= t, c.memoizedState = er(
      1 | e,
      { destroy: void 0 },
      a,
      s === void 0 ? null : s
    );
  }
  function cc(t, e, a, s) {
    var c = ue();
    s = s === void 0 ? null : s;
    var u = c.memoizedState.inst;
    Qt !== null && s !== null && cd(s, Qt.memoizedState.deps) ? c.memoizedState = er(e, u, a, s) : (At.flags |= t, c.memoizedState = er(
      1 | e,
      u,
      a,
      s
    ));
  }
  function by(t, e) {
    lc(8390656, 8, t, e);
  }
  function bd(t, e) {
    cc(2048, 8, t, e);
  }
  function gR(t) {
    At.flags |= 4;
    var e = At.updateQueue;
    if (e === null)
      e = oc(), At.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function xy(t) {
    var e = ue().memoizedState;
    return gR({ ref: e, nextImpl: t }), function() {
      if ((Ht & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Sy(t, e) {
    return cc(4, 2, t, e);
  }
  function wy(t, e) {
    return cc(4, 4, t, e);
  }
  function Ty(t, e) {
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
  function Ey(t, e, a) {
    a = a != null ? a.concat([t]) : null, cc(4, 4, Ty.bind(null, e, t), a);
  }
  function xd() {
  }
  function Cy(t, e) {
    var a = ue();
    e = e === void 0 ? null : e;
    var s = a.memoizedState;
    return e !== null && cd(e, s[1]) ? s[0] : (a.memoizedState = [t, e], t);
  }
  function Ay(t, e) {
    var a = ue();
    e = e === void 0 ? null : e;
    var s = a.memoizedState;
    if (e !== null && cd(e, s[1]))
      return s[0];
    if (s = t(), io) {
      tn(!0);
      try {
        t();
      } finally {
        tn(!1);
      }
    }
    return a.memoizedState = [s, e], s;
  }
  function Sd(t, e, a) {
    return a === void 0 || (ji & 1073741824) !== 0 && (jt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = L0(), At.lanes |= t, ya |= t, a);
  }
  function Ry(t, e, a, s) {
    return pn(a, e) ? a : da.current !== null ? (t = Sd(t, a, s), pn(t, e) || (ge = !0), t) : (ji & 106) === 0 || (ji & 1073741824) !== 0 && (jt & 261930) === 0 ? (ge = !0, t.memoizedState = a) : (t = L0(), At.lanes |= t, ya |= t, e);
  }
  function Dy(t, e, a, s, c) {
    var u = st.p;
    st.p = u !== 0 && 8 > u ? u : 8;
    var y = nt.T, T = {};
    T.types = y !== null ? y.types : null, nt.T = T, Ed(t, !1, e, a);
    try {
      var _ = c(), U = nt.S;
      if (U !== null && U(T, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var G = fR(
          _,
          s
        );
        Es(
          t,
          e,
          G,
          xn(t)
        );
      } else
        Es(
          t,
          e,
          s,
          xn(t)
        );
    } catch (Z) {
      Es(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Z },
        xn()
      );
    } finally {
      st.p = u, y !== null && T.types !== null && (y.types = T.types), nt.T = y;
    }
  }
  function vR() {
  }
  function wd(t, e, a, s) {
    if (t.tag !== 5) throw Error(r(476));
    var c = Oy(t).queue;
    Dy(
      t,
      c,
      e,
      Dt,
      a === null ? vR : function() {
        return My(t), a(s);
      }
    );
  }
  function Oy(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Dt,
      baseState: Dt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vi,
        lastRenderedState: Dt
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
        lastRenderedReducer: Vi,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function My(t) {
    var e = Oy(t);
    e.next === null && (e = t.alternate.memoizedState), Es(
      t,
      e.next.queue,
      {},
      xn()
    );
  }
  function Td() {
    return Be(xr);
  }
  function _y() {
    return ue().memoizedState;
  }
  function Ny() {
    return ue().memoizedState;
  }
  function yR(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = xn();
          t = ua(a);
          var s = fa(e, t, a);
          s !== null && (ln(s, e, a), ys(s, e, a)), e = { cache: $f() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function bR(t, e, a) {
    var s = xn();
    a = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uc(t) ? jy(e, a) : (a = If(t, e, a, s), a !== null && (ln(a, t, s), Vy(a, e, s)));
  }
  function zy(t, e, a) {
    var s = xn();
    Es(t, e, a, s);
  }
  function Es(t, e, a, s) {
    var c = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (uc(t)) jy(e, c);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var y = e.lastRenderedState, T = u(y, a);
          if (c.hasEagerState = !0, c.eagerState = T, pn(T, y))
            return Hl(t, e, c, 0), Wt === null && kl(), !1;
        } catch {
        }
      if (a = If(t, e, c, s), a !== null)
        return ln(a, t, s), Vy(a, e, s), !0;
    }
    return !1;
  }
  function Ed(t, e, a, s) {
    if (s = {
      lane: 2,
      revertLane: mh(),
      gesture: null,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uc(t)) {
      if (e) throw Error(r(479));
    } else
      e = If(
        t,
        a,
        s,
        2
      ), e !== null && ln(e, t, 2);
  }
  function uc(t) {
    var e = t.alternate;
    return t === At || e !== null && e === At;
  }
  function jy(t, e) {
    Wo = ic = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function Vy(t, e, a) {
    if ((a & 4194048) !== 0) {
      var s = e.lanes;
      s &= t.pendingLanes, a |= s, e.lanes = a, Lg(t, a);
    }
  }
  var fc = {
    readContext: Be,
    use: rc,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useLayoutEffect: re,
    useInsertionEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useSyncExternalStore: re,
    useId: re,
    useHostTransitionStatus: re,
    useFormState: re,
    useActionState: re,
    useOptimistic: re,
    useMemoCache: re,
    useCacheRefresh: re,
    useEffectEvent: re
  }, Ly = {
    readContext: Be,
    use: rc,
    useCallback: function(t, e) {
      return Ze().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Be,
    useEffect: by,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, lc(
        4194308,
        4,
        Ty.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return lc(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      lc(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = Ze();
      e = e === void 0 ? null : e;
      var s = t();
      if (io) {
        tn(!0);
        try {
          t();
        } finally {
          tn(!1);
        }
      }
      return a.memoizedState = [s, e], s;
    },
    useReducer: function(t, e, a) {
      var s = Ze();
      if (a !== void 0) {
        var c = a(e);
        if (io) {
          tn(!0);
          try {
            a(e);
          } finally {
            tn(!1);
          }
        }
      } else c = e;
      return s.memoizedState = s.baseState = c, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: c
      }, s.queue = t, t = t.dispatch = bR.bind(
        null,
        At,
        t
      ), [s.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ze();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = vd(t);
      var e = t.queue, a = zy.bind(null, At, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: xd,
    useDeferredValue: function(t, e) {
      var a = Ze();
      return Sd(a, t, e);
    },
    useTransition: function() {
      var t = vd(!1);
      return t = Dy.bind(
        null,
        At,
        t.queue,
        !0,
        !1
      ), Ze().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var s = At, c = Ze();
      if (Mt) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = e(), Wt === null)
          throw Error(r(349));
        (jt & 127) !== 0 || iy(s, e, a);
      }
      c.memoizedState = a;
      var u = { value: a, getSnapshot: e };
      return c.queue = u, by(oy.bind(null, s, u, t), [
        t
      ]), s.flags |= 2048, er(
        9,
        { destroy: void 0 },
        ay.bind(
          null,
          s,
          u,
          a,
          e
        ),
        null
      ), a;
    },
    useId: function() {
      var t = Ze(), e = Wt.identifierPrefix;
      if (Mt) {
        var a = oi, s = ai;
        a = (s & ~(1 << 32 - kt(s) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = ac++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = dR++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Td,
    useFormState: my,
    useActionState: my,
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
      return e.queue = a, e = Ed.bind(
        null,
        At,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: md,
    useCacheRefresh: function() {
      return Ze().memoizedState = yR.bind(
        null,
        At
      );
    },
    useEffectEvent: function(t) {
      var e = Ze(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Ht & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, By = {
    readContext: Be,
    use: rc,
    useCallback: Cy,
    useContext: Be,
    useEffect: bd,
    useImperativeHandle: Ey,
    useInsertionEffect: Sy,
    useLayoutEffect: wy,
    useMemo: Ay,
    useReducer: sc,
    useRef: yy,
    useState: function() {
      return sc(Vi);
    },
    useDebugValue: xd,
    useDeferredValue: function(t, e) {
      var a = ue();
      return Ry(
        a,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = sc(Vi)[0], e = ue().memoizedState;
      return [
        typeof t == "boolean" ? t : Ts(t),
        e
      ];
    },
    useSyncExternalStore: ny,
    useId: _y,
    useHostTransitionStatus: Td,
    useFormState: py,
    useActionState: py,
    useOptimistic: function(t, e) {
      var a = ue();
      return ly(a, Qt, t, e);
    },
    useMemoCache: md,
    useCacheRefresh: Ny,
    useEffectEvent: xy
  }, xR = {
    readContext: Be,
    use: rc,
    useCallback: Cy,
    useContext: Be,
    useEffect: bd,
    useImperativeHandle: Ey,
    useInsertionEffect: Sy,
    useLayoutEffect: wy,
    useMemo: Ay,
    useReducer: gd,
    useRef: yy,
    useState: function() {
      return gd(Vi);
    },
    useDebugValue: xd,
    useDeferredValue: function(t, e) {
      var a = ue();
      return Qt === null ? Sd(a, t, e) : Ry(
        a,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = gd(Vi)[0], e = ue().memoizedState;
      return [
        typeof t == "boolean" ? t : Ts(t),
        e
      ];
    },
    useSyncExternalStore: ny,
    useId: _y,
    useHostTransitionStatus: Td,
    useFormState: vy,
    useActionState: vy,
    useOptimistic: function(t, e) {
      var a = ue();
      return Qt !== null ? ly(a, Qt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: md,
    useCacheRefresh: Ny,
    useEffectEvent: xy
  };
  function Cd(t, e, a, s) {
    e = t.memoizedState, a = a(s, e), a = a == null ? e : N({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Ad = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var s = xn(), c = ua(s);
      c.payload = e, a != null && (c.callback = a), e = fa(t, c, s), e !== null && (ln(e, t, s), ys(e, t, s));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var s = xn(), c = ua(s);
      c.tag = 1, c.payload = e, a != null && (c.callback = a), e = fa(t, c, s), e !== null && (ln(e, t, s), ys(e, t, s));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = xn(), s = ua(a);
      s.tag = 2, e != null && (s.callback = e), e = fa(t, s, a), e !== null && (ln(e, t, a), ys(e, t, a));
    }
  };
  function Py(t, e, a, s, c, u, y) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(s, u, y) : e.prototype && e.prototype.isPureReactComponent ? !us(a, s) || !us(c, u) : !0;
  }
  function Uy(t, e, a, s) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, s), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, s), e.state !== t && Ad.enqueueReplaceState(e, e.state, null);
  }
  function ao(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var s in e)
        s !== "ref" && (a[s] = e[s]);
    }
    if (t = t.defaultProps) {
      a === e && (a = N({}, a));
      for (var c in t)
        a[c] === void 0 && (a[c] = t[c]);
    }
    return a;
  }
  function ky(t) {
    Ul(t);
  }
  function Hy(t) {
    console.error(t);
  }
  function Iy(t) {
    Ul(t);
  }
  function dc(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Gy(t, e, a) {
    try {
      var s = t.onCaughtError;
      s(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Rd(t, e, a) {
    return a = ua(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      dc(t, e);
    }, a;
  }
  function Yy(t) {
    return t = ua(t), t.tag = 3, t;
  }
  function qy(t, e, a, s) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var u = s.value;
      t.payload = function() {
        return c(u);
      }, t.callback = function() {
        Gy(e, a, s);
      };
    }
    var y = a.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (t.callback = function() {
      Gy(e, a, s), typeof c != "function" && (ba === null ? ba = /* @__PURE__ */ new Set([this]) : ba.add(this));
      var T = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: T !== null ? T : ""
      });
    });
  }
  function SR(t, e, a, s, c) {
    if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (e = a.alternate, e !== null && Qa(
        e,
        a,
        c,
        !0
      ), a = Pe.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return Ye === null ? zc() : a.alternate === null && se === 0 && (se = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, s === Jl ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([s]) : e.add(s), fh(t, s, c)), !1;
          case 22:
            return a.flags |= 65536, s === Jl ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([s]) : a.add(s)), fh(t, s, c)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return fh(t, s, c), zc(), !1;
    }
    if (Mt)
      return e = Pe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = c, s !== Xf && (t = Error(r(422), { cause: s }), hs(Dn(t, a)))) : (s !== Xf && (e = Error(r(423), {
        cause: s
      }), hs(
        Dn(e, a)
      )), t = t.current.alternate, t.flags |= 65536, c &= -c, t.lanes |= c, s = Dn(s, a), c = Rd(
        t.stateNode,
        s,
        c
      ), id(t, c), se !== 4 && (se = 2)), !1;
    var u = Error(r(520), { cause: s });
    if (u = Dn(u, a), Ns === null ? Ns = [u] : Ns.push(u), se !== 4 && (se = 2), e === null) return !0;
    s = Dn(s, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = c & -c, a.lanes |= t, t = Rd(a.stateNode, s, t), id(a, t), !1;
        case 1:
          if (e = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ba === null || !ba.has(u))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = Yy(c), qy(
              c,
              t,
              a,
              s
            ), id(a, c), !1;
          break;
        case 22:
          if (a.memoizedState !== null)
            return a.flags |= 65536, !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Dd = Error(r(461)), ge = !1;
  function we(t, e, a, s) {
    e.child = t === null ? Zv(e, null, a, s) : no(
      e,
      t.child,
      a,
      s
    );
  }
  function Fy(t, e, a, s, c) {
    a = a.render;
    var u = e.ref;
    if ("ref" in s) {
      var y = {};
      for (var T in s)
        T !== "ref" && (y[T] = s[T]);
    } else y = s;
    return $a(e), s = ud(
      t,
      e,
      a,
      y,
      u,
      c
    ), T = fd(), t !== null && !ge ? (dd(t, e, c), Li(t, e, c)) : (Mt && T && ql(e), e.flags |= 1, we(t, e, s, c), e.child);
  }
  function Xy(t, e, a, s, c) {
    if (t === null) {
      var u = a.type;
      return typeof u == "function" && !Gf(u) && u.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = u, Ky(
        t,
        e,
        u,
        s,
        c
      )) : (t = Gl(
        a.type,
        null,
        s,
        e,
        e.mode,
        c
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Ld(t, c)) {
      var y = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : us, a(y, s) && t.ref === e.ref)
        return Li(t, e, c);
    }
    return e.flags |= 1, t = Mi(u, s), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Ky(t, e, a, s, c) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (us(u, s) && t.ref === e.ref)
        if (ge = !1, e.pendingProps = s = u, Ld(t, c))
          (t.flags & 131072) !== 0 && (ge = !0);
        else
          return e.lanes = t.lanes, Li(t, e, c);
    }
    return Od(
      t,
      e,
      a,
      s,
      c
    );
  }
  function Zy(t, e, a, s) {
    var c = s.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), s.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | a : a, t !== null) {
          for (s = e.child = t.child, c = 0; s !== null; )
            c = c | s.lanes | s.childLanes, s = s.sibling;
          s = c & ~u;
        } else s = 0, e.child = null;
        return Qy(
          t,
          e,
          u,
          a,
          s
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ql(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Jv(e, u) : od(), Wv(e);
      else
        return s = e.lanes = 536870912, Qy(
          t,
          e,
          u !== null ? u.baseLanes | a : a,
          a,
          s
        );
    } else
      u !== null ? (Ql(e, u.cachePool), Jv(e, u), ma(), e.memoizedState = null) : (t !== null && Ql(e, null), od(), ma());
    return we(t, e, c, a), e.child;
  }
  function Cs(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Qy(t, e, a, s, c) {
    var u = Wf();
    return u = u === null ? null : { parent: me._currentValue, pool: u }, e.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, t !== null && Ql(e, null), od(), Wv(e), t !== null && Qa(t, e, s, !0), e.childLanes = c, null;
  }
  function hc(t, e) {
    return e = mc(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function $y(t, e, a) {
    return no(e, t.child, null, a), t = hc(e, e.pendingProps), t.flags |= 2, gn(e), e.memoizedState = null, t;
  }
  function wR(t, e, a) {
    var s = e.pendingProps, c = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Mt) {
        if (s.mode === "hidden")
          return t = hc(e, s), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Cs(null, t);
        if (sd(e), (t = te) ? (t = Tb(
          t,
          _n
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: aa !== null ? { id: ai, overflow: oi } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = jv(t), a.return = e, e.child = a, Oe = e, te = null)) : t = null, t === null) throw ra(e);
        return e.lanes = 536870912, null;
      }
      return hc(e, s);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var y = u.dehydrated;
      if (sd(e), c)
        if (e.flags & 256)
          e.flags &= -257, e = $y(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (ge || Qa(t, e, a, !1), c = (a & t.childLanes) !== 0, ge || c) {
        if (da.current === null) {
          if (s = Wt, s !== null && (y = Bg(s, a), y !== 0 && y !== u.retryLane))
            throw u.retryLane = y, Fa(t, y), ln(s, t, y), Dd;
          zc();
        }
        e = $y(
          t,
          e,
          a
        );
      } else
        t = u.treeContext, te = zn(y.nextSibling), Oe = e, Mt = !0, oa = null, _n = !1, t !== null && Bv(e, t), e = hc(e, s), e.flags |= 134221824;
      return e;
    }
    return t = Mi(t.child, {
      mode: s.mode,
      children: s.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function nr(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Od(t, e, a, s, c) {
    return $a(e), a = ud(
      t,
      e,
      a,
      s,
      void 0,
      c
    ), s = fd(), t !== null && !ge ? (dd(t, e, c), Li(t, e, c)) : (Mt && s && ql(e), e.flags |= 1, we(t, e, a, c), e.child);
  }
  function Jy(t, e, a, s, c, u) {
    return $a(e), e.updateQueue = null, a = ey(
      e,
      s,
      a,
      c
    ), ty(t), s = fd(), t !== null && !ge ? (dd(t, e, u), Li(t, e, u)) : (Mt && s && ql(e), e.flags |= 1, we(t, e, a, u), e.child);
  }
  function Wy(t, e, a, s, c) {
    if ($a(e), e.stateNode === null) {
      var u = Fo, y = a.contextType;
      typeof y == "object" && y !== null && (u = Be(y)), u = new a(s, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ad, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = s, u.state = e.memoizedState, u.refs = {}, ed(e), y = a.contextType, u.context = typeof y == "object" && y !== null ? Be(y) : Fo, u.state = e.memoizedState, y = a.getDerivedStateFromProps, typeof y == "function" && (Cd(
        e,
        a,
        y,
        s
      ), u.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (y = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), y !== u.state && Ad.enqueueReplaceState(u, u.state, null), xs(e, s, u, c), bs(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), s = !0;
    } else if (t === null) {
      u = e.stateNode;
      var T = e.memoizedProps, _ = ao(a, T);
      u.props = _;
      var U = u.context, G = a.contextType;
      y = Fo, typeof G == "object" && G !== null && (y = Be(G));
      var Z = a.getDerivedStateFromProps;
      G = typeof Z == "function" || typeof u.getSnapshotBeforeUpdate == "function", T = e.pendingProps !== T, G || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (T || U !== y) && Uy(
        e,
        u,
        s,
        y
      ), ca = !1;
      var L = e.memoizedState;
      u.state = L, xs(e, s, u, c), bs(), U = e.memoizedState, T || L !== U || ca ? (typeof Z == "function" && (Cd(
        e,
        a,
        Z,
        s
      ), U = e.memoizedState), (_ = ca || Py(
        e,
        a,
        _,
        s,
        L,
        U,
        y
      )) ? (G || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = s, e.memoizedState = U), u.props = s, u.state = U, u.context = y, s = _) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), s = !1);
    } else {
      u = e.stateNode, nd(t, e), y = e.memoizedProps, G = ao(a, y), u.props = G, Z = e.pendingProps, L = u.context, U = a.contextType, _ = Fo, typeof U == "object" && U !== null && (_ = Be(U)), T = a.getDerivedStateFromProps, (U = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y !== Z || L !== _) && Uy(
        e,
        u,
        s,
        _
      ), ca = !1, L = e.memoizedState, u.state = L, xs(e, s, u, c), bs();
      var I = e.memoizedState;
      y !== Z || L !== I || ca || t !== null && t.dependencies !== null && Kl(t.dependencies) ? (typeof T == "function" && (Cd(
        e,
        a,
        T,
        s
      ), I = e.memoizedState), (G = ca || Py(
        e,
        a,
        G,
        s,
        L,
        I,
        _
      ) || t !== null && t.dependencies !== null && Kl(t.dependencies)) ? (U || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(s, I, _), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        s,
        I,
        _
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || y === t.memoizedProps && L === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024), e.memoizedProps = s, e.memoizedState = I), u.props = s, u.state = I, u.context = _, s = G) : (typeof u.componentDidUpdate != "function" || y === t.memoizedProps && L === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024), s = !1);
    }
    return u = s, nr(t, e), s = (e.flags & 128) !== 0, u || s ? (u = e.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && s ? (e.child = no(
      e,
      t.child,
      null,
      c
    ), e.child = no(
      e,
      null,
      a,
      c
    )) : we(t, e, a, c), e.memoizedState = u.state, t = e.child) : t = Li(
      t,
      e,
      c
    ), t;
  }
  function t0(t, e, a, s) {
    return Ka(), e.flags |= 256, we(t, e, a, s), e.child;
  }
  var Md = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function _d(t) {
    return { baseLanes: t, cachePool: Gv() };
  }
  function Nd(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= bn), t;
  }
  function e0(t, e, a) {
    var s = e.pendingProps, c = !1, u = (e.flags & 128) !== 0, y;
    if ((y = u) || (y = t !== null && t.memoizedState === null ? !1 : (Ue.current & 2) !== 0), y && (c = !0, e.flags &= -129), y = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Mt) {
        if (c ? ha(e) : ma(), (t = te) ? (t = Tb(
          t,
          _n
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: aa !== null ? { id: ai, overflow: oi } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = jv(t), a.return = e, e.child = a, Oe = e, te = null)) : t = null, t === null) throw ra(e);
        return _h(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = s.children, s = s.fallback, c ? (ma(), c = e.mode, u = mc(
        { mode: "hidden", children: u },
        c
      ), s = Xa(
        s,
        c,
        a,
        null
      ), u.return = e, s.return = e, u.sibling = s, e.child = u, s = e.child, s.memoizedState = _d(a), s.childLanes = Nd(
        t,
        y,
        a
      ), e.memoizedState = Md, Cs(null, s)) : (ha(e), zd(e, u));
    }
    var T = t.memoizedState;
    if (T !== null) {
      var _ = T.dehydrated;
      if (_ !== null)
        return TR(
          t,
          e,
          u,
          y,
          s,
          _,
          T,
          a
        );
    }
    return c ? (ma(), c = s.fallback, u = e.mode, T = t.child, _ = T.sibling, s = Mi(T, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = T.subtreeFlags & 1206910976, _ !== null ? c = Mi(_, c) : (c = Xa(
      c,
      u,
      a,
      null
    ), c.flags |= 2), c.return = e, s.return = e, s.sibling = c, e.child = s, Cs(null, s), s = e.child, c = t.child.memoizedState, c === null ? c = _d(a) : (u = c.cachePool, u !== null ? (T = me._currentValue, u = u.parent !== T ? { parent: T, pool: T } : u) : u = Gv(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: u
    }), s.memoizedState = c, s.childLanes = Nd(
      t,
      y,
      a
    ), e.memoizedState = Md, Cs(t.child, s)) : (ha(e), a = t.child, t = a.sibling, a = Mi(a, {
      mode: "visible",
      children: s.children
    }), a.return = e, a.sibling = null, t !== null && (y = e.deletions, y === null ? (e.deletions = [t], e.flags |= 16) : y.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function zd(t, e) {
    return e = mc(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function mc(t, e) {
    return t = an(22, t, null, e), t.lanes = 0, t;
  }
  function pc(t, e, a) {
    return no(e, t.child, null, a), t = zd(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function TR(t, e, a, s, c, u, y, T) {
    if (a)
      return e.flags & 256 ? (ha(e), e.flags &= -257, pc(
        t,
        e,
        T
      )) : e.memoizedState !== null ? (ma(), e.child = t.child, e.flags |= 128, null) : (ma(), u = c.fallback, y = e.mode, c = mc(
        { mode: "visible", children: c.children },
        y
      ), u = Xa(
        u,
        y,
        T,
        null
      ), u.flags |= 2, c.return = e, u.return = e, c.sibling = u, e.child = c, no(e, t.child, null, T), c = e.child, c.memoizedState = _d(T), c.childLanes = Nd(
        t,
        s,
        T
      ), e.memoizedState = Md, Cs(null, c));
    if (ha(e), _h(u)) {
      if (s = u.nextSibling && u.nextSibling.dataset, s) var _ = s.dgst;
      return s = _, s !== "" && (c = Error(r(419)), c.stack = "", c.digest = s, hs({ value: c, source: null, stack: null })), pc(
        t,
        e,
        T
      );
    }
    if (ge || Qa(t, e, T, !1), s = (T & t.childLanes) !== 0, ge || s) {
      if (da.current !== null)
        return pc(
          t,
          e,
          T
        );
      if (s = Wt, s !== null && (c = Bg(
        s,
        T
      ), c !== 0 && c !== y.retryLane))
        throw y.retryLane = c, Fa(t, c), ln(s, t, c), Dd;
      return Mh(u) || zc(), pc(
        t,
        e,
        T
      );
    }
    return Mh(u) ? (e.flags |= 192, e.child = t.child, null) : (t = y.treeContext, te = zn(u.nextSibling), Oe = e, Mt = !0, oa = null, _n = !1, t !== null && Bv(e, t), e = zd(
      e,
      c.children
    ), e.flags |= 134221824, e);
  }
  function n0(t, e, a) {
    t.lanes |= e;
    var s = t.alternate;
    s !== null && (s.lanes |= e), Xl(t.return, e, a);
  }
  function i0(t) {
    for (var e = null; t !== null; ) {
      var a = t.alternate;
      a !== null && nc(a) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function gc(t, e, a, s, c, u) {
    var y = t.memoizedState;
    y === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: a,
      tailMode: c,
      treeForkCount: u
    } : (y.isBackwards = e, y.rendering = null, y.renderingStartTime = 0, y.last = s, y.tail = a, y.tailMode = c, y.treeForkCount = u);
  }
  function jd(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var a = e.sibling;
      e.sibling = t.child, t.child = e, e = a;
    }
  }
  function Vd(t, e, a) {
    var s = e.pendingProps, c = s.revealOrder, u = s.tail;
    s = s.children;
    var y = Ue.current;
    if (e.flags & 128)
      return Ss(e, y), null;
    var T = (y & 2) !== 0;
    if (T ? (y = y & 1 | 2, e.flags |= 128) : y &= 1, Ss(e, y), c === "backwards" && t !== null ? (jd(t), we(t, e, s, a), jd(t)) : we(t, e, s, a), s = Mt ? ds : 0, !T && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && n0(t, a, e);
        else if (t.tag === 19)
          n0(t, a, e);
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
    switch (c) {
      case "backwards":
        a = i0(e.child), a === null ? (c = e.child, e.child = null) : (c = a.sibling, a.sibling = null, jd(e)), gc(
          e,
          !0,
          c,
          null,
          u,
          s
        );
        break;
      case "unstable_legacy-backwards":
        for (a = null, c = e.child, e.child = null; c !== null; ) {
          if (t = c.alternate, t !== null && nc(t) === null) {
            e.child = c;
            break;
          }
          t = c.sibling, c.sibling = a, a = c, c = t;
        }
        gc(
          e,
          !0,
          a,
          null,
          u,
          s
        );
        break;
      case "together":
        gc(
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
        a = i0(e.child), a === null ? (c = e.child, e.child = null) : (c = a.sibling, a.sibling = null), gc(
          e,
          !1,
          c,
          a,
          u,
          s
        );
    }
    return e.child;
  }
  function a0(t, e, a) {
    var s = e.pendingProps;
    return sa(e, e.type, s.value), we(t, e, s.children, a), e.child;
  }
  function Li(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), ya |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (Qa(
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
      for (t = e.child, a = Mi(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = Mi(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function Ld(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Kl(t)));
  }
  function ER(t, e, a) {
    switch (e.tag) {
      case 3:
        Ua(e, e.stateNode.containerInfo), sa(e, me, t.memoizedState.cache), Ka();
        break;
      case 27:
      case 5:
        Fr(e);
        break;
      case 4:
        Ua(e, e.stateNode.containerInfo);
        break;
      case 10:
        sa(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, sd(e), null;
        break;
      case 13:
        var s = e.memoizedState;
        if (s !== null) {
          if (s.dehydrated !== null)
            return ha(e), e.flags |= 128, null;
          s = Qa(
            t,
            e,
            a,
            !1
          );
          var c = e.child.childLanes;
          return s || (a & c) !== 0 ? e0(t, e, a) : (ha(e), t = Li(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        }
        ha(e);
        break;
      case 19:
        if (e.flags & 128)
          return Vd(
            t,
            e,
            a
          );
        if (c = (t.flags & 128) !== 0, s = (a & e.childLanes) !== 0, s || (Qa(
          t,
          e,
          a,
          !1
        ), s = (a & e.childLanes) !== 0), c) {
          if (s)
            return Vd(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (c = e.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ss(e, Ue.current), s) break;
        return null;
      case 22:
        return e.lanes = 0, Zy(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        sa(e, me, t.memoizedState.cache);
    }
    return Li(t, e, a);
  }
  function o0(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ge = !0;
      else {
        if (!Ld(t, a) && (e.flags & 128) === 0)
          return ge = !1, ER(
            t,
            e,
            a
          );
        ge = (t.flags & 131072) !== 0;
      }
    else
      ge = !1, Mt && (e.flags & 1048576) !== 0 && Lv(e, ds, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var s = e.pendingProps;
          if (t = to(e.elementType), e.type = t, typeof t == "function")
            Gf(t) ? (s = ao(t, s), e.tag = 1, e = Wy(
              null,
              e,
              t,
              s,
              a
            )) : (e.tag = 0, e = Od(
              null,
              e,
              t,
              s,
              a
            ));
          else {
            if (t != null) {
              var c = t.$$typeof;
              if (c === Y) {
                e.tag = 11, e = Fy(
                  null,
                  e,
                  t,
                  s,
                  a
                );
                break t;
              } else if (c === at) {
                e.tag = 14, e = Xy(
                  null,
                  e,
                  t,
                  s,
                  a
                );
                break t;
              } else if (c === dt) {
                e.tag = 10, e.type = t, e = a0(
                  null,
                  e,
                  a
                );
                break t;
              }
            }
            throw e = tt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Od(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return s = e.type, c = ao(
          s,
          e.pendingProps
        ), Wy(
          t,
          e,
          s,
          c,
          a
        );
      case 3:
        t: {
          if (Ua(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          s = e.pendingProps;
          var u = e.memoizedState;
          c = u.element, nd(t, e), xs(e, s, null, a);
          var y = e.memoizedState;
          if (s = y.cache, sa(e, me, s), s !== u.cache && Qf(
            e,
            [me],
            a,
            !0
          ), bs(), s = y.element, u.isDehydrated)
            if (u = {
              element: s,
              isDehydrated: !1,
              cache: y.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = t0(
                t,
                e,
                s,
                a
              );
              break t;
            } else if (s !== c) {
              c = Dn(
                Error(r(424)),
                e
              ), hs(c), e = t0(
                t,
                e,
                s,
                a
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, te = zn(t.firstChild), Oe = e, Mt = !0, oa = null, _n = !0, a = Zv(
                e,
                null,
                s,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 134221824, a = a.sibling;
          else {
            if (Ka(), s === c) {
              e = Li(
                t,
                e,
                a
              );
              break t;
            }
            we(t, e, s, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return nr(t, e), t === null ? (a = Mb(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : Mt || (e.stateNode = cb(
          e.type,
          e.pendingProps,
          ei.current,
          e
        )) : e.memoizedState = Mb(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Fr(e), t === null && Mt && (s = e.stateNode = Ab(
          e.type,
          e.pendingProps,
          ei.current
        ), Oe = e, _n = !0, c = te, wa(e.type) ? (Nh = c, te = zn(s.firstChild)) : te = c), we(
          t,
          e,
          e.pendingProps.children,
          a
        ), nr(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Mt && ((c = s = te) && (s = yD(
          s,
          e.type,
          e.pendingProps,
          _n
        ), s !== null ? (e.stateNode = s, Oe = e, te = zn(s.firstChild), _n = !1, c = !0) : c = !1), c || ra(e)), Fr(e), c = e.type, u = e.pendingProps, y = t !== null ? t.memoizedProps : null, s = u.children, Th(c, u) ? s = null : y !== null && Th(c, y) && (e.flags |= 32), e.memoizedState !== null && (c = ud(
          t,
          e,
          hR,
          null,
          null,
          a
        ), xr._currentValue = c), nr(t, e), we(t, e, s, a), e.child;
      case 6:
        return t === null && Mt && ((t = a = te) && (a = bD(
          a,
          e.pendingProps,
          _n
        ), a !== null ? (e.stateNode = a, Oe = e, te = null, t = !0) : t = !1), t || ra(e)), null;
      case 13:
        return e0(t, e, a);
      case 4:
        return Ua(
          e,
          e.stateNode.containerInfo
        ), s = e.pendingProps, t === null ? e.child = no(
          e,
          null,
          s,
          a
        ) : we(t, e, s, a), e.child;
      case 11:
        return Fy(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return s = e.pendingProps, nr(t, e), we(t, e, s, a), e.child;
      case 8:
        return we(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return we(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return a0(t, e, a);
      case 9:
        return c = e.type._context, s = e.pendingProps.children, $a(e), c = Be(c), s = s(c), e.flags |= 1, we(t, e, s, a), e.child;
      case 14:
        return Xy(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return Ky(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return Vd(t, e, a);
      case 31:
        return wR(t, e, a);
      case 22:
        return Zy(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return $a(e), s = Be(me), t === null ? (c = Wf(), c === null && (c = Wt, u = $f(), c.pooledCache = u, u.refCount++, u !== null && (c.pooledCacheLanes |= a), c = u), e.memoizedState = { parent: s, cache: c }, ed(e), sa(e, me, c)) : ((t.lanes & a) !== 0 && (nd(t, e), xs(e, null, null, a), bs()), c = t.memoizedState, u = e.memoizedState, c.parent !== s ? (c = { parent: s, cache: s }, e.memoizedState = c, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = c), sa(e, me, s)) : (s = u.cache, sa(e, me, s), s !== c.cache && Qf(
          e,
          [me],
          a,
          !0
        ))), we(
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
        }), s = e.pendingProps, s.name != null && s.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Mt && ql(e), t !== null && t.memoizedProps.name !== s.name ? e.flags |= 4194816 : nr(t, e), we(t, e, s.children, a), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Bi(t) {
    t.flags |= 4;
  }
  function Bd(t, e, a, s, c) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = a === null ? jb(e, s) : jb(e, s) && (s.src !== a.src || s.srcSet !== a.srcSet)), u) {
      if (t.flags |= 16777216, (c & 335544128) === c)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (k0()) t.flags |= 8192;
        else
          throw eo = Jl, td;
    } else t.flags &= -16777217;
  }
  function r0(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Vb(e))
      if (k0()) t.flags |= 8192;
      else
        throw eo = Jl, td;
  }
  function vc(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? jg() : 536870912, t.lanes |= e, sr |= e);
  }
  function As(t, e) {
    if (!Mt)
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
  function ee(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, s = 0;
    if (e)
      for (var c = t.child; c !== null; )
        a |= c.lanes | c.childLanes, s |= c.subtreeFlags & 1206910976, s |= c.flags & 1206910976, c.return = t, c = c.sibling;
    else
      for (c = t.child; c !== null; )
        a |= c.lanes | c.childLanes, s |= c.subtreeFlags, s |= c.flags, c.return = t, c = c.sibling;
    return t.subtreeFlags |= s, t.childLanes = a, e;
  }
  function CR(t, e, a) {
    var s = e.pendingProps;
    switch (Ff(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ee(e), null;
      case 1:
        return ee(e), null;
      case 3:
        return a = e.stateNode, s = null, t !== null && (s = t.memoizedState.cache), e.memoizedState.cache !== s && (e.flags |= 2048), zi(me), hn(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Zo(e) ? Bi(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Kf())), ee(e), null;
      case 26:
        var c = e.type, u = e.memoizedState;
        return t === null ? (Bi(e), u !== null ? (ee(e), r0(e, u)) : (ee(e), Bd(
          e,
          c,
          null,
          s,
          a
        ))) : u ? u !== t.memoizedState ? (Bi(e), ee(e), r0(e, u)) : (ee(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== s && Bi(e), ee(e), Bd(
          e,
          c,
          t,
          s,
          a
        )), null;
      case 27:
        if (_o(e), a = ei.current, c = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== s && Bi(e);
        else {
          if (!s) {
            if (e.stateNode === null)
              throw Error(r(166));
            return ee(e), e.subtreeFlags &= -33554433, null;
          }
          t = fe.current, Zo(e) ? Pv(e) : (t = Ab(c, s, a), e.stateNode = t, Bi(e));
        }
        return ee(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (_o(e), c = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== s && Bi(e);
        else {
          if (!s) {
            if (e.stateNode === null)
              throw Error(r(166));
            return ee(e), e.subtreeFlags &= -33554433, null;
          }
          if (u = fe.current, Zo(e))
            Pv(e);
          else {
            var y = Bs(
              ei.current
            );
            switch (u) {
              case 1:
                u = y.createElementNS(
                  "http://www.w3.org/2000/svg",
                  c
                );
                break;
              case 2:
                u = y.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  c
                );
                break;
              default:
                switch (c) {
                  case "svg":
                    u = y.createElementNS(
                      "http://www.w3.org/2000/svg",
                      c
                    );
                    break;
                  case "math":
                    u = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    u = y.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof s.is == "string" ? y.createElement("select", {
                      is: s.is
                    }) : y.createElement("select"), s.multiple ? u.multiple = !0 : s.size && (u.size = s.size);
                    break;
                  default:
                    u = typeof s.is == "string" ? y.createElement(c, { is: s.is }) : y.createElement(c);
                }
            }
            u[Le] = e, u[nn] = s;
            t: for (y = e.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6)
                u.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                y.child.return = y, y = y.child;
                continue;
              }
              if (y === e) break t;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === e)
                  break t;
                y = y.return;
              }
              y.sibling.return = y.return, y = y.sibling;
            }
            e.stateNode = u;
            t: switch (He(u, c, s), c) {
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
            s && Bi(e);
          }
        }
        return ee(e), e.subtreeFlags &= -33554433, Bd(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          a
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== s && Bi(e);
        else {
          if (typeof s != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = ei.current, Zo(e)) {
            if (t = e.stateNode, a = e.memoizedProps, s = null, c = Oe, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  s = c.memoizedProps;
              }
            t[Le] = e, t = !!(t.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || ob(t.nodeValue, a)), t || ra(e, !0);
          } else
            t = Bs(t).createTextNode(
              s
            ), t[Le] = e, e.stateNode = t;
        }
        return ee(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (s = Zo(e), a !== null) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Le] = e;
            } else
              Ka(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            ee(e), t = !1;
          } else
            a = Kf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (gn(e), e) : (gn(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return ee(e), null;
      case 13:
        if (s = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (c = Zo(e), s !== null && s.dehydrated !== null) {
            if (t === null) {
              if (!c) throw Error(r(318));
              if (c = e.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(r(317));
              c[Le] = e;
            } else
              Ka(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            ee(e), c = !1;
          } else
            c = Kf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return e.flags & 256 ? (gn(e), e) : (gn(e), null);
        }
        return gn(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = s !== null, t = t !== null && t.memoizedState !== null, a && (s = e.child, c = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (c = s.alternate.memoizedState.cachePool.pool), u = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (u = s.memoizedState.cachePool.pool), u !== c && (s.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), vc(e, e.updateQueue), ee(e), null);
      case 4:
        return hn(), t === null && yh(e.stateNode.containerInfo), e.flags |= 67108864, ee(e), null;
      case 10:
        return zi(e.type), ee(e), null;
      case 19:
        if (ld(e), s = e.memoizedState, s === null) return ee(e), null;
        if (c = (e.flags & 128) !== 0, u = s.rendering, u === null)
          if (c) As(s, !1);
          else {
            if (se !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = nc(t), u !== null) {
                  for (e.flags |= 128, As(s, !1), t = u.updateQueue, e.updateQueue = t, vc(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    zv(a, t), a = a.sibling;
                  return Ss(
                    e,
                    Ue.current & 1 | 2
                  ), Mt && _i(e, s.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null && Fe() > Oc && (e.flags |= 128, c = !0, As(s, !1), e.lanes = 4194304);
          }
        else {
          if (!c)
            if (t = nc(u), t !== null) {
              if (e.flags |= 128, c = !0, t = t.updateQueue, e.updateQueue = t, vc(e, t), As(s, !0), s.tail === null && s.tailMode !== "collapsed" && s.tailMode !== "visible" && !u.alternate && !Mt)
                return ee(e), null;
            } else
              2 * Fe() - s.renderingStartTime > Oc && a !== 536870912 && (e.flags |= 128, c = !0, As(s, !1), e.lanes = 4194304);
          s.isBackwards ? (u.sibling = e.child, e.child = u) : (t = s.last, t !== null ? t.sibling = u : e.child = u, s.last = u);
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
          return s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Fe(), t.sibling = null, u = Ue.current, u = c ? u & 1 | 2 : u & 1, s.tailMode === "visible" || s.tailMode === "collapsed" || !a || Mt ? Ss(e, u) : (a = u, Bt(Pe, e), Bt(Ue, a), Ye === null && (Ye = e)), Mt && _i(e, s.treeForkCount), t;
        }
        return ee(e), null;
      case 22:
      case 23:
        return gn(e), rd(), s = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== s && (e.flags |= 8192) : s && (e.flags |= 8192), s ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (ee(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ee(e), a = e.updateQueue, a !== null && vc(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), s = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (s = e.memoizedState.cachePool.pool), s !== a && (e.flags |= 2048), t !== null && Jt(Wa), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), zi(me), ee(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, ee(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function AR(t, e) {
    switch (Ff(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return zi(me), hn(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return _o(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (gn(e), e.alternate === null)
            throw Error(r(340));
          Ka();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (gn(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Ka();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return ld(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return hn(), null;
      case 10:
        return zi(e.type), null;
      case 22:
      case 23:
        return gn(e), rd(), t !== null && Jt(Wa), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return zi(me), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function s0(t, e) {
    switch (Ff(e), e.tag) {
      case 3:
        zi(me), hn();
        break;
      case 26:
      case 27:
      case 5:
        _o(e);
        break;
      case 4:
        hn();
        break;
      case 31:
        e.memoizedState !== null && gn(e);
        break;
      case 13:
        gn(e);
        break;
      case 19:
        ld(e);
        break;
      case 10:
        zi(e.type);
        break;
      case 22:
      case 23:
        gn(e), rd(), t !== null && Jt(Wa);
        break;
      case 24:
        zi(me);
    }
  }
  function Rs(t, e) {
    try {
      var a = e.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        a = c;
        do {
          if ((a.tag & t) === t) {
            s = void 0;
            var u = a.create, y = a.inst;
            s = u(), y.destroy = s;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (T) {
      qt(e, e.return, T);
    }
  }
  function pa(t, e, a) {
    try {
      var s = e.updateQueue, c = s !== null ? s.lastEffect : null;
      if (c !== null) {
        var u = c.next;
        s = u;
        do {
          if ((s.tag & t) === t) {
            var y = s.inst, T = y.destroy;
            if (T !== void 0) {
              y.destroy = void 0, c = e;
              var _ = a, U = T;
              try {
                U();
              } catch (G) {
                qt(
                  c,
                  _,
                  G
                );
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    } catch (G) {
      qt(e, e.return, G);
    }
  }
  function l0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        $v(e, a);
      } catch (s) {
        qt(t, t.return, s);
      }
    }
  }
  function c0(t, e, a) {
    a.props = ao(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (s) {
      qt(t, e, s);
    }
  }
  function ri(t, e) {
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
            var c = t.stateNode, u = Di(t.memoizedProps, c);
            (c.ref === null || c.ref.name !== u) && (c.ref = gb(u)), s = c.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var y = new Sn(t);
              m(
                t.child,
                !1,
                gD,
                y,
                void 0,
                void 0
              ), t.stateNode = y;
            }
            s = t.stateNode;
            break;
          default:
            s = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(s) : a.current = s;
      }
    } catch (T) {
      qt(t, e, T);
    }
  }
  function ke(t, e) {
    var a = t.ref, s = t.refCleanup;
    if (a !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (c) {
          qt(t, e, c);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          qt(t, e, c);
        }
      else a.current = null;
  }
  function yc(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var a = 0; a < e.length; a++)
        wb(
          t.stateNode,
          e[a]
        );
  }
  function u0(t) {
    for (var e = t.return; e !== null && (Ud(e) && wb(t.stateNode, e.stateNode), !Pd(e)); )
      e = e.return;
  }
  function Ds(t) {
    for (var e = t.return; e !== null && (Ud(e) && vD(t.stateNode, e.stateNode), !Pd(e)); )
      e = e.return;
  }
  function Pd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Ud(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function kd(t) {
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
    } catch (c) {
      qt(t, t.return, c);
    }
  }
  function Hd(t, e, a) {
    try {
      var s = t.stateNode;
      JR(s, t.type, a, e), s[nn] = e;
    } catch (c) {
      qt(t, t.return, c);
    }
  }
  function f0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && wa(t.type) || t.tag === 4;
  }
  function Id(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || f0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && wa(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Gd(t, e, a, s) {
    var c = t.tag;
    if (c === 5 || c === 6)
      c = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(c, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(c), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = ii)), yc(t, s), Ut = !0;
    else if (c !== 4 && (c === 27 && (yc(t, s), s = null, wa(t.type) && (a = t.stateNode, e = null)), t = t.child, t !== null))
      for (Gd(
        t,
        e,
        a,
        s
      ), t = t.sibling; t !== null; )
        Gd(
          t,
          e,
          a,
          s
        ), t = t.sibling;
  }
  function bc(t, e, a, s) {
    var c = t.tag;
    if (c === 5 || c === 6)
      c = t.stateNode, e ? a.insertBefore(c, e) : a.appendChild(c), yc(t, s), Ut = !0;
    else if (c !== 4 && (c === 27 && (yc(t, s), s = null, wa(t.type) && (a = t.stateNode)), t = t.child, t !== null))
      for (bc(
        t,
        e,
        a,
        s
      ), t = t.sibling; t !== null; )
        bc(
          t,
          e,
          a,
          s
        ), t = t.sibling;
  }
  function d0(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var s = t.type, c = e.attributes; c.length; )
        e.removeAttributeNode(c[0]);
      He(e, s, a), e[Le] = t, e[nn] = a;
    } catch (u) {
      qt(t, t.return, u);
    }
  }
  var xc = !1, vn = null;
  function h0(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (xc = !0);
  }
  var si = null;
  function m0() {
    var t = si;
    return si = null, t;
  }
  var on = 0;
  function ir(t, e, a, s, c) {
    return on = 0, p0(
      t.child,
      e,
      a,
      s,
      c
    );
  }
  function p0(t, e, a, s, c) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var y = t.stateNode;
        if (s !== null) {
          var T = Ah(y);
          s.push(T), T.view && (u = !0);
        } else
          u || Ah(y).view && (u = !0);
        xc = !0, mb(
          y,
          on === 0 ? e : e + "_" + on,
          a
        ), on++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && c || p0(
        t.child,
        e,
        a,
        s,
        c
      ) && (u = !0));
      t = t.sibling;
    }
    return u;
  }
  function li(t, e) {
    for (; t !== null; )
      t.tag === 5 ? pb(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || li(
        t.child,
        e
      )), t = t.sibling;
  }
  function Sc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (Sc(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var a = e.name;
          e = Oi(e.default, e.share), e !== "none" && (ir(
            t,
            a,
            e,
            null,
            !1
          ) || li(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Yd(t, e) {
    if (t.tag === 30) {
      var a = t.stateNode, s = t.memoizedProps, c = Di(s, a), u = Oi(
        s.default,
        a.paired ? s.share : s.enter
      );
      u !== "none" ? ir(t, c, u, null, !1) ? (Sc(t), a.paired || e || fr(t, s.onEnter)) : li(t.child, !1) : Sc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Yd(t, e), t = t.sibling;
    else Sc(t);
  }
  function qd(t) {
    if (vn !== null && vn.size !== 0) {
      var e = vn;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var a = t.memoizedProps, s = a.name;
              if (s != null && s !== "auto") {
                var c = e.get(s);
                if (c !== void 0) {
                  var u = Oi(
                    a.default,
                    a.share
                  );
                  if (u !== "none" && (ir(
                    t,
                    s,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, c.paired = u, u.paired = c, fr(t, a.onShare)) : li(t.child, !1)), e.delete(s), e.size === 0) break;
                }
              }
            }
            qd(t);
          }
          t = t.sibling;
        }
    }
  }
  function Fd(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, a = Di(e, t.stateNode), s = vn !== null ? vn.get(a) : void 0, c = Oi(
        e.default,
        s !== void 0 ? e.share : e.exit
      );
      c !== "none" && (ir(t, a, c, null, !1) ? s !== void 0 ? (c = t.stateNode, s.paired = c, c.paired = s, vn.delete(a), fr(t, e.onShare)) : fr(t, e.onExit) : li(t.child, !1)), vn !== null && qd(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Fd(t), t = t.sibling;
    else
      vn !== null && qd(t);
  }
  function g0(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, a = Di(e, t.stateNode);
        e = Oi(e.default, e.update), t.flags &= -5, e !== "none" && ir(
          t,
          a,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && g0(t);
      t = t.sibling;
    }
  }
  function Xd(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, li(t.child, !1));
          }
          Xd(t);
        }
        t = t.sibling;
      }
  }
  function wc(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, li(t.child, !1), Xd(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        wc(t), t = t.sibling;
    else Xd(t);
  }
  function v0(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? li(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && v0(t), t = t.sibling;
  }
  function Kd(t, e, a, s, c, u, y) {
    for (var T = !1; e !== null; ) {
      if (e.tag === 5) {
        var _ = e.stateNode;
        if (u !== null && on < u.length) {
          var U = u[on], G = Ah(_);
          (U.view || G.view) && (T = !0);
          var Z;
          if (Z = (t.flags & 4) === 0)
            if (G.clip) Z = !0;
            else {
              Z = U.rect;
              var L = G.rect;
              Z = Z.y !== L.y || Z.x !== L.x || Z.height !== L.height || Z.width !== L.width;
            }
          Z && (t.flags |= 4), G.abs ? G = !U.abs : (U = U.rect, G = G.rect, G = U.height !== G.height || U.width !== G.width), G && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && mb(
          _,
          on === 0 ? a : a + "_" + on,
          c
        ), T && (t.flags & 4) !== 0 || (si === null && (si = []), si.push(
          _,
          on === 0 ? s : s + "_" + on,
          e.memoizedProps
        )), on++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && y ? t.flags |= e.flags & 32 : Kd(
        t,
        e.child,
        a,
        s,
        c,
        u,
        y
      ) && (T = !0));
      e = e.sibling;
    }
    return T;
  }
  function y0(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var a = t.memoizedProps, s = t.stateNode, c = Di(a, s), u = Oi(a.default, a.update), y;
        y = t.memoizedState, t.memoizedState = null, s = t;
        var T = t.child;
        on = 0, c = Kd(
          s,
          T,
          c,
          c,
          u,
          y,
          !1
        ), (t.flags & 4) !== 0 && c && fr(t, a.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && y0(t);
      t = t.sibling;
    }
  }
  var Me = !1, Gt = !1, ci = !1, Zd = !1, b0 = typeof WeakSet == "function" ? WeakSet : Set, _e = null, ui = !1, Os = !1, Tc = !1, Qd = !1;
  function RR(t, e, a) {
    if (t = t.containerInfo, Sh = Sr, t = Tv(t), Lf(t)) {
      if ("selectionStart" in t)
        var s = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          s = (s = t.ownerDocument) && s.defaultView || window;
          var c = s.getSelection && s.getSelection();
          if (c && c.rangeCount !== 0) {
            s = c.anchorNode;
            var u = c.anchorOffset, y = c.focusNode;
            c = c.focusOffset;
            try {
              s.nodeType, y.nodeType;
            } catch {
              s = null;
              break t;
            }
            var T = 0, _ = -1, U = -1, G = 0, Z = 0, L = t, I = null;
            e: for (; ; ) {
              for (var ct; L !== s || u !== 0 && L.nodeType !== 3 || (_ = T + u), L !== y || c !== 0 && L.nodeType !== 3 || (U = T + c), L.nodeType === 3 && (T += L.nodeValue.length), (ct = L.firstChild) !== null; )
                I = L, L = ct;
              for (; ; ) {
                if (L === t) break e;
                if (I === s && ++G === u && (_ = T), I === y && ++Z === c && (U = T), (ct = L.nextSibling) !== null) break;
                L = I, I = L.parentNode;
              }
              L = ct;
            }
            s = _ === -1 || U === -1 ? null : { start: _, end: U };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (wh = { focusedElem: t, selectionRange: s }, Sr = !1, a = (a & 335544064) === a, _e = e, e = a ? 9270 : 1024; _e !== null; ) {
      if (t = _e, a && (s = t.deletions, s !== null))
        for (u = 0; u < s.length; u++)
          a && Fd(s[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        a && h0(t), Ec(a);
      else {
        if (t.tag === 22) {
          if (s = t.alternate, t.memoizedState !== null) {
            s !== null && s.memoizedState === null && a && Fd(s), Ec(a);
            continue;
          } else if (s !== null && s.memoizedState !== null) {
            a && h0(t), Ec(a);
            continue;
          }
        }
        s = t.child, (t.subtreeFlags & e) !== 0 && s !== null ? (s.return = t, _e = s) : (a && g0(t), Ec(a));
      }
    }
    vn = null;
  }
  function Ec(t) {
    for (; _e !== null; ) {
      var e = _e, a = t, s = e.alternate, c = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((c & 1024) !== 0 && s !== null) {
            a = void 0, c = s.memoizedProps, s = s.memoizedState;
            var u = e.stateNode;
            try {
              var y = ao(
                e.type,
                c
              );
              a = u.getSnapshotBeforeUpdate(
                y,
                s
              ), u.__reactInternalSnapshotBeforeUpdate = a;
            } catch (T) {
              qt(e, e.return, T);
            }
          }
          break;
        case 3:
          if ((c & 1024) !== 0) {
            if (s = e.stateNode.containerInfo, a = s.nodeType, a === 9)
              Oh(s);
            else if (a === 1)
              switch (s.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Oh(s);
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
          a && s !== null && (a = Di(
            s.memoizedProps,
            s.stateNode
          ), c = e.memoizedProps, c = Oi(c.default, c.update), c !== "none" && ir(
            s,
            a,
            c,
            s.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((c & 1024) !== 0) throw Error(r(163));
      }
      if (s = e.sibling, s !== null) {
        s.return = e.return, _e = s;
        break;
      }
      _e = e.return;
    }
  }
  function x0(t, e, a) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        fi(t, a), s & 4 && Rs(5, a);
        break;
      case 1:
        if (fi(t, a), s & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (y) {
              qt(a, a.return, y);
            }
          else {
            var c = ao(
              a.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                c,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              qt(
                a,
                a.return,
                y
              );
            }
          }
        s & 64 && l0(a), s & 512 && ri(a, a.return);
        break;
      case 3:
        if (fi(t, a), s & 64 && (t = a.updateQueue, t !== null)) {
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
            $v(t, e);
          } catch (y) {
            qt(a, a.return, y);
          }
        }
        break;
      case 27:
        e === null && s & 4 && d0(a);
      case 26:
      case 5:
        fi(t, a), e === null && s & 4 && kd(a), s & 512 && ri(a, a.return);
        break;
      case 12:
        fi(t, a);
        break;
      case 31:
        fi(t, a), s & 4 && E0(t, a);
        break;
      case 13:
        fi(t, a), s & 4 && C0(t, a), s & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = UR.bind(
          null,
          a
        ), xD(t, a))));
        break;
      case 22:
        if (s = a.memoizedState !== null || Me, !s) {
          var u = e !== null && e.memoizedState !== null || Gt;
          e = Me, c = Gt, Me = s, (Gt = u) && !c ? (s = 2, (a.subtreeFlags & 8772) !== 0 && (s |= 1), Yn(
            t,
            a,
            s
          )) : fi(t, a), Me = e, Gt = c;
        }
        break;
      case 30:
        fi(t, a), s & 512 && ri(a, a.return);
        break;
      case 7:
        s & 512 && ri(a, a.return);
      default:
        fi(t, a);
    }
  }
  function $d(t, e) {
    for (t = t.child; t !== null; )
      S0(t, e), t = t.sibling;
  }
  function S0(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var a = t.stateNode;
          if (e) {
            var s = a.style;
            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
          } else {
            var c = t.stateNode, u = t.memoizedProps.style, y = u != null && u.hasOwnProperty("display") ? u.display : null;
            c.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim();
          }
        } catch (_) {
          qt(t, t.return, _);
        }
        Jd(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Ut = !0;
        } catch (_) {
          qt(t, t.return, _);
        }
        break;
      case 18:
        try {
          var T = t.stateNode;
          e ? hb(T, !0) : hb(t.stateNode, !1);
        } catch (_) {
          qt(t, t.return, _);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && $d(t, e);
        break;
      default:
        $d(t, e);
    }
  }
  function Jd(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var a = t, s = e;
          switch (a.tag) {
            case 4:
              S0(a, s);
              break t;
            case 22:
              a.memoizedState === null && Jd(a, s);
              break t;
            default:
              Jd(a, s);
          }
        }
        t = t.sibling;
      }
  }
  function w0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, w0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ol(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ne = null, rn = !1;
  function In(t, e, a) {
    for (a = a.child; a !== null; )
      T0(t, e, a), a = a.sibling;
  }
  function T0(t, e, a) {
    if (Zt && typeof Zt.onCommitFiberUnmount == "function")
      try {
        Zt.onCommitFiberUnmount(oe, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Gt || ke(a, e), In(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && !Gt && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Gt || ke(a, e), Ds(a);
        var s = ne, c = rn;
        wa(a.type) && (ne = a.stateNode, rn = !1), In(
          t,
          e,
          a
        ), Rb(
          a.stateNode,
          a.type,
          a.memoizedProps
        ), ne = s, rn = c;
        break;
      case 5:
        Gt || ke(a, e), Ds(a);
      case 6:
        if (a.tag === 6 && Ds(a), s = ne, c = rn, ne = null, In(
          t,
          e,
          a
        ), ne = s, rn = c, ne !== null)
          if (rn)
            try {
              (ne.nodeType === 9 ? ne.body : ne.nodeName === "HTML" ? ne.ownerDocument.body : ne).removeChild(a.stateNode), Ut = !0;
            } catch (u) {
              qt(
                a,
                e,
                u
              );
            }
          else
            try {
              ne.removeChild(a.stateNode), Ut = !0;
            } catch (u) {
              qt(
                a,
                e,
                u
              );
            }
        break;
      case 18:
        ne !== null && (rn ? (t = ne, db(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), wr(t)) : db(ne, a.stateNode));
        break;
      case 4:
        s = ne, c = rn, ne = a.stateNode.containerInfo, rn = !0, In(
          t,
          e,
          a
        ), ne = s, rn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pa(2, a, e), Gt || pa(4, a, e), In(
          t,
          e,
          a
        );
        break;
      case 1:
        Gt || (ke(a, e), s = a.stateNode, typeof s.componentWillUnmount == "function" && c0(
          a,
          e,
          s
        )), In(
          t,
          e,
          a
        );
        break;
      case 21:
        In(
          t,
          e,
          a
        );
        break;
      case 22:
        Gt = (s = Gt) || a.memoizedState !== null, In(
          t,
          e,
          a
        ), Gt = s;
        break;
      case 30:
        ke(a, e), In(
          t,
          e,
          a
        );
        break;
      case 7:
        Gt || ke(a, e), In(
          t,
          e,
          a
        );
        break;
      default:
        In(
          t,
          e,
          a
        );
    }
  }
  function E0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        wr(t);
      } catch (a) {
        qt(e, e.return, a);
      }
    }
  }
  function C0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        wr(t);
      } catch (a) {
        qt(e, e.return, a);
      }
  }
  function DR(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new b0()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new b0()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Cc(t, e) {
    var a = DR(t);
    e.forEach(function(s) {
      if (!a.has(s)) {
        a.add(s);
        var c = kR.bind(null, t, s);
        s.then(c, c);
      }
    });
  }
  function Qe(t, e, a) {
    var s = e.deletions;
    if (s !== null)
      for (var c = 0; c < s.length; c++) {
        var u = s[c], y = t, T = e, _ = T;
        t: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (wa(_.type)) {
                ne = _.stateNode, rn = !1;
                break t;
              }
              break;
            case 5:
              ne = _.stateNode, rn = !1;
              break t;
            case 3:
            case 4:
              ne = _.stateNode.containerInfo, rn = !0;
              break t;
          }
          _ = _.return;
        }
        if (ne === null) throw Error(r(160));
        T0(y, T, u), ne = null, rn = !1, y = u.alternate, y !== null && (y.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        A0(e, t, a), e = e.sibling;
  }
  var Gn = null;
  function A0(t, e, a) {
    var s = t.alternate, c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (c & 4 && (s = t.updateQueue, s = s !== null ? s.events : null, s !== null))
          for (var u = 0; u < s.length; u++) {
            var y = s[u];
            y.ref.impl = y.nextImpl;
          }
        Qe(e, t, a), $e(t), c & 4 && (pa(3, t, t.return), Rs(3, t), pa(5, t, t.return));
        break;
      case 1:
        Qe(e, t, a), $e(t), c & 512 && (Gt || s === null || ke(s, s.return)), c & 64 && Me && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        if (u = Gn, Qe(e, t, a), $e(t), c & 512 && (Gt || s === null || ke(s, s.return)), c & 4)
          if (c = s !== null ? s.memoizedState : null, a = t.memoizedState, s === null)
            if (a === null)
              if (t.stateNode === null)
                if (Me)
                  t.stateNode = cb(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, a = t.memoizedProps, c = u.ownerDocument || u;
                    e: switch (e) {
                      case "title":
                        s = c.getElementsByTagName("title")[0], (!s || s[es] || s[Le] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = c.createElement(e), c.head.insertBefore(
                          s,
                          c.querySelector("head > title")
                        )), He(s, e, a), s[Le] = t, De(s), e = s;
                        break t;
                      case "link":
                        if (u = zb(
                          "link",
                          "href",
                          c
                        ).get(e + (a.href || ""))) {
                          for (y = 0; y < u.length; y++)
                            if (s = u[y], s.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && s.getAttribute("rel") === (a.rel == null ? null : a.rel) && s.getAttribute("title") === (a.title == null ? null : a.title) && s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              u.splice(y, 1);
                              break e;
                            }
                        }
                        s = c.createElement(e), He(s, e, a), c.head.appendChild(s);
                        break;
                      case "meta":
                        if (u = zb(
                          "meta",
                          "content",
                          c
                        ).get(e + (a.content || ""))) {
                          for (y = 0; y < u.length; y++)
                            if (s = u[y], s.getAttribute("content") === (a.content == null ? null : "" + a.content) && s.getAttribute("name") === (a.name == null ? null : a.name) && s.getAttribute("property") === (a.property == null ? null : a.property) && s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && s.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              u.splice(y, 1);
                              break e;
                            }
                        }
                        s = c.createElement(e), He(s, e, a), c.head.appendChild(s);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    s[Le] = t, De(s), e = s;
                  }
                  t.stateNode = e;
                }
              else
                Me || Lh(u, t.type, t.stateNode);
            else
              t.stateNode = Nb(
                u,
                a,
                t.memoizedProps
              );
          else
            c !== a ? (c === null ? (e = s.stateNode, e === null || Gt || e.parentNode.removeChild(e)) : c.count--, a === null ? Me || Lh(u, t.type, t.stateNode) : Nb(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && Hd(
              t,
              t.memoizedProps,
              s.memoizedProps
            );
        break;
      case 27:
        Qe(e, t, a), $e(t), c & 512 && (Gt || s === null || ke(s, s.return)), s !== null && c & 4 && Hd(
          t,
          t.memoizedProps,
          s.memoizedProps
        );
        break;
      case 5:
        if (u = ci, ci = !1, Qe(e, t, a), ci = u, $e(t), c & 512 && (Gt || s === null || ke(s, s.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Uo(e, ""), Ut = !0;
          } catch (G) {
            qt(t, t.return, G);
          }
        }
        c & 4 && t.stateNode != null && (e = t.memoizedProps, Hd(
          t,
          e,
          s !== null ? s.memoizedProps : e
        )), c & 1024 && (Zd = !0);
        break;
      case 6:
        if (Qe(e, t, a), $e(t), c & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = e, Ut = !0;
          } catch (G) {
            qt(t, t.return, G);
          }
        }
        break;
      case 3:
        if (Ut = !1, kc = null, u = Gn, Gn = Ps(e.containerInfo), Qe(e, t, a), Gn = u, $e(t), c & 4 && s !== null && s.memoizedState.isDehydrated)
          try {
            wr(e.containerInfo);
          } catch (G) {
            qt(t, t.return, G);
          }
        Zd && (Zd = !1, R0(t)), Ut = !1;
        break;
      case 4:
        c = ci, ci = Me, s = Xg(), u = Gn, Gn = Ps(
          t.stateNode.containerInfo
        ), Qe(e, t, a), $e(t), Gn = u, Ut && Os && (Tc = !0), Ut = s, ci = c;
        break;
      case 12:
        Qe(e, t, a), $e(t);
        break;
      case 31:
        Qe(e, t, a), $e(t), c & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Cc(t, e)));
        break;
      case 13:
        Qe(e, t, a), $e(t), t.child.flags & 8192 && t.memoizedState !== null != (s !== null && s.memoizedState !== null) && (Dc = Fe()), c & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Cc(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, y = s !== null && s.memoizedState !== null;
        var T = Me, _ = Gt, U = ci;
        Me = T || u, ci = U || u, Gt = _ || y, Qe(e, t, a), Gt = _, ci = U, Me = T, $e(t), c & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || s === null || y || Me || Gt || (e = y || Gt, a = Me, s = Gt, Me = u || Me, Gt = e, ga(t, 2), Me = a, Gt = s), !u && ci || $d(t, u)), c & 4 && (e = t.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, Cc(t, a))));
        break;
      case 19:
        Qe(e, t, a), $e(t), c & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Cc(t, e)));
        break;
      case 30:
        c & 512 && (Gt || s === null || ke(s, s.return)), c = Xg(), u = Os, y = (a & 335544064) === a, T = t.memoizedProps, Os = y && Oi(
          T.default,
          T.update
        ) !== "none", Qe(e, t, a), $e(t), y && s !== null && Ut && (t.flags |= 4), Os = u, Ut = c;
        break;
      case 21:
        break;
      case 7:
        c & 512 && (Gt || s === null || ke(s, s.return)), s && s.stateNode !== null && (s.stateNode._fragmentFiber = t);
      default:
        Qe(e, t, a), $e(t);
    }
  }
  function $e(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, s = t.return; s !== null; ) {
          if (f0(s)) {
            a = s;
            break;
          }
          s = s.return;
        }
        s = null;
        for (var c = t.return; c !== null; ) {
          if (Ud(c)) {
            var u = c.stateNode;
            s === null ? s = [u] : s.push(u);
          }
          if (Pd(c)) break;
          c = c.return;
        }
        var y = s;
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var T = a.stateNode, _ = Id(t);
            bc(
              t,
              _,
              T,
              y
            );
            break;
          case 5:
            var U = a.stateNode;
            a.flags & 32 && (Uo(U, ""), a.flags &= -33);
            var G = Id(t);
            bc(
              t,
              G,
              U,
              y
            );
            break;
          case 3:
          case 4:
            var Z = a.stateNode.containerInfo, L = Id(t);
            Gd(
              t,
              L,
              Z,
              y
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (I) {
        qt(t, t.return, I);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function R0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        R0(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, Sr = !0, e.reset(), Sr = !1), t = t.sibling;
      }
  }
  function ar(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        D0(e, t), e = e.sibling;
    else y0(e);
  }
  function D0(t, e) {
    var a = t.alternate;
    if (a === null) Yd(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Qd = ui = !1, m0(), ar(e, t), !ui && !Tc) {
            if (t = si, t !== null)
              for (var s = 0; s < t.length; s += 3) {
                a = t[s];
                var c = t[s + 1];
                pb(a, t[s + 2]), a = a.ownerDocument.documentElement, a !== null && a.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + c + ")"
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
            )), Qd = !0;
          }
          si = null;
          break;
        case 5:
          ar(e, t);
          break;
        case 4:
          s = ui, ui = !1, ar(e, t), ui && (Tc = !0), ui = s;
          break;
        case 22:
          t.memoizedState === null && (a.memoizedState !== null ? Yd(t, !1) : ar(e, t));
          break;
        case 30:
          s = ui, c = m0(), ui = !1, ar(e, t), ui && (t.flags |= 4);
          var u = t.memoizedProps, y = t.stateNode;
          e = Di(u, y), y = Di(a.memoizedProps, y);
          var T = Oi(u.default, u.update);
          T === "none" ? e = !1 : (u = a.memoizedState, a.memoizedState = null, a = t.child, on = 0, e = Kd(
            t,
            a,
            e,
            y,
            T,
            u,
            !0
          ), on !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (fr(
            t,
            t.memoizedProps.onUpdate
          ), si = c) : c !== null && (c.push.apply(c, si), si = c), ui = (t.flags & 32) !== 0 ? !0 : s;
          break;
        default:
          ar(e, t);
      }
  }
  function fi(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        x0(t, e.alternate, e), e = e.sibling;
  }
  function ga(t, e) {
    for (t = t.child; t !== null; ) {
      var a = t, s = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pa(4, a, a.return), ga(
            a,
            s
          );
          break;
        case 1:
          ke(a, a.return);
          var c = a.stateNode;
          typeof c.componentWillUnmount == "function" && c0(
            a,
            a.return,
            c
          ), ga(
            a,
            s
          );
          break;
        case 27:
          (s & 2) !== 0 && Rb(
            a.stateNode,
            a.type,
            a.memoizedProps
          );
        case 5:
          ke(a, a.return), a.tag !== 5 && a.tag !== 27 || Ds(a), ga(
            a,
            s
          );
          break;
        case 6:
          Ds(a);
          break;
        case 26:
          ke(a, a.return), c = a.stateNode, a.memoizedState !== null || c === null || Gt || c.parentNode.removeChild(c), ga(
            a,
            s
          );
          break;
        case 22:
          a.memoizedState === null && ga(
            a,
            s
          );
          break;
        case 30:
          ke(a, a.return), ga(
            a,
            s
          );
          break;
        case 7:
          ke(a, a.return);
        default:
          ga(
            a,
            s
          );
      }
      t = t.sibling;
    }
  }
  function Yn(t, e, a) {
    for (a = (e.subtreeFlags & 8772) !== 0 ? a : a & -2, e = e.child; e !== null; ) {
      var s = e.alternate, c = t, u = e, y = u.flags, T = (a & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Yn(
            c,
            u,
            a
          ), Rs(4, u);
          break;
        case 1:
          if (Yn(
            c,
            u,
            a
          ), s = u, c = s.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (G) {
              qt(s, s.return, G);
            }
          if (s = u, c = s.updateQueue, c !== null) {
            var _ = s.stateNode;
            try {
              var U = c.shared.hiddenCallbacks;
              if (U !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < U.length; c++)
                  Qv(U[c], _);
            } catch (G) {
              qt(s, s.return, G);
            }
          }
          T && y & 64 && l0(u), ri(u, u.return);
          break;
        case 27:
          (a & 2) !== 0 && d0(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || u0(u), Yn(
            c,
            u,
            a
          ), T && s === null && y & 4 && kd(u), ri(u, u.return);
          break;
        case 6:
          u0(u);
          break;
        case 26:
          _ = u.stateNode, u.memoizedState !== null || _ === null || Me || Lh(
            Ps(_.ownerDocument),
            u.type,
            _
          ), Yn(
            c,
            u,
            a
          ), T && s === null && y & 4 && kd(u), ri(u, u.return);
          break;
        case 12:
          Yn(
            c,
            u,
            a
          );
          break;
        case 31:
          Yn(
            c,
            u,
            a
          ), T && y & 4 && E0(c, u);
          break;
        case 13:
          Yn(
            c,
            u,
            a
          ), T && y & 4 && C0(c, u);
          break;
        case 22:
          u.memoizedState === null && Yn(
            c,
            u,
            a
          ), ri(u, u.return);
          break;
        case 30:
          Yn(
            c,
            u,
            a
          ), ri(u, u.return);
          break;
        case 7:
          ri(u, u.return);
        default:
          Yn(
            c,
            u,
            a
          );
      }
      e = e.sibling;
    }
  }
  function Wd(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && ms(a));
  }
  function th(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ms(t));
  }
  function Nn(t, e, a, s) {
    var c = (a & 335544064) === a;
    if (e.subtreeFlags & (c ? 10262 : 10256))
      for (e = e.child; e !== null; )
        O0(
          t,
          e,
          a,
          s
        ), e = e.sibling;
    else c && v0(e);
  }
  function O0(t, e, a, s) {
    var c = (a & 335544064) === a;
    c && e.alternate === null && e.return !== null && e.return.alternate !== null && wc(e);
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Nn(
          t,
          e,
          a,
          s
        ), u & 2048 && Rs(9, e);
        break;
      case 1:
        Nn(
          t,
          e,
          a,
          s
        );
        break;
      case 3:
        Nn(
          t,
          e,
          a,
          s
        ), c && Qd && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && ms(u)));
        break;
      case 12:
        if (u & 2048) {
          Nn(
            t,
            e,
            a,
            s
          ), u = e.stateNode;
          try {
            var y = e.memoizedProps, T = y.id, _ = y.onPostCommit;
            typeof _ == "function" && _(
              T,
              e.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (U) {
            qt(e, e.return, U);
          }
        } else
          Nn(
            t,
            e,
            a,
            s
          );
        break;
      case 31:
        Nn(
          t,
          e,
          a,
          s
        );
        break;
      case 13:
        Nn(
          t,
          e,
          a,
          s
        );
        break;
      case 23:
        break;
      case 22:
        y = e.stateNode, T = e.alternate, e.memoizedState !== null ? (c && T !== null && T.memoizedState === null && wc(T), y._visibility & 2 ? Nn(
          t,
          e,
          a,
          s
        ) : Ms(
          t,
          e
        )) : (c && T !== null && T.memoizedState !== null && wc(e), y._visibility & 2 ? Nn(
          t,
          e,
          a,
          s
        ) : (y._visibility |= 2, or(
          t,
          e,
          a,
          s,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && Wd(T, e);
        break;
      case 24:
        Nn(
          t,
          e,
          a,
          s
        ), u & 2048 && th(e.alternate, e);
        break;
      case 30:
        c && (u = e.alternate, u !== null && (li(u.child, !0), li(e.child, !0))), Nn(
          t,
          e,
          a,
          s
        );
        break;
      default:
        Nn(
          t,
          e,
          a,
          s
        );
    }
  }
  function or(t, e, a, s, c) {
    for (c = c && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, y = e, T = a, _ = s, U = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          or(
            u,
            y,
            T,
            _,
            c
          ), Rs(8, y);
          break;
        case 23:
          break;
        case 22:
          var G = y.stateNode;
          y.memoizedState !== null ? G._visibility & 2 ? or(
            u,
            y,
            T,
            _,
            c
          ) : Ms(
            u,
            y
          ) : (G._visibility |= 2, or(
            u,
            y,
            T,
            _,
            c
          )), c && U & 2048 && Wd(
            y.alternate,
            y
          );
          break;
        case 24:
          or(
            u,
            y,
            T,
            _,
            c
          ), c && U & 2048 && th(y.alternate, y);
          break;
        default:
          or(
            u,
            y,
            T,
            _,
            c
          );
      }
      e = e.sibling;
    }
  }
  function Ms(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, s = e, c = s.flags;
        switch (s.tag) {
          case 22:
            Ms(a, s), c & 2048 && Wd(
              s.alternate,
              s
            );
            break;
          case 24:
            Ms(a, s), c & 2048 && th(s.alternate, s);
            break;
          default:
            Ms(a, s);
        }
        e = e.sibling;
      }
  }
  var oo = 8192;
  function ro(t, e, a) {
    if (t.subtreeFlags & oo)
      for (t = t.child; t !== null; )
        M0(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function M0(t, e, a) {
    switch (t.tag) {
      case 26:
        ro(
          t,
          e,
          a
        ), t.flags & oo && (t.memoizedState !== null ? jD(
          a,
          Gn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && Bb(a, t)));
        break;
      case 5:
        ro(
          t,
          e,
          a
        ), t.flags & oo && (t = t.stateNode, (e & 335544128) === e && Bb(a, t));
        break;
      case 3:
      case 4:
        var s = Gn;
        Gn = Ps(t.stateNode.containerInfo), ro(
          t,
          e,
          a
        ), Gn = s;
        break;
      case 22:
        t.memoizedState === null && (s = t.alternate, s !== null && s.memoizedState !== null ? (s = oo, oo = 16777216, ro(
          t,
          e,
          a
        ), oo = s) : ro(
          t,
          e,
          a
        ));
        break;
      case 30:
        if ((t.flags & oo) !== 0 && (s = t.memoizedProps.name, s != null && s !== "auto")) {
          var c = t.stateNode;
          c.paired = null, vn === null && (vn = /* @__PURE__ */ new Map()), vn.set(s, c);
        }
        ro(
          t,
          e,
          a
        );
        break;
      default:
        ro(
          t,
          e,
          a
        );
    }
  }
  function _0(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function _s(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var s = e[a];
          _e = s, z0(
            s,
            t
          );
        }
      _0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        N0(t), t = t.sibling;
  }
  function N0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _s(t), t.flags & 2048 && pa(9, t, t.return);
        break;
      case 3:
        _s(t);
        break;
      case 12:
        _s(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ac(t)) : _s(t);
        break;
      default:
        _s(t);
    }
  }
  function Ac(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var s = e[a];
          _e = s, z0(
            s,
            t
          );
        }
      _0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          pa(8, e, e.return), Ac(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, Ac(e));
          break;
        default:
          Ac(e);
      }
      t = t.sibling;
    }
  }
  function z0(t, e) {
    for (; _e !== null; ) {
      var a = _e;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          pa(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var s = a.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          ms(a.memoizedState.cache);
      }
      if (s = a.child, s !== null) s.return = a, _e = s;
      else
        t: for (a = t; _e !== null; ) {
          s = _e;
          var c = s.sibling, u = s.return;
          if (w0(s), s === a) {
            _e = null;
            break t;
          }
          if (c !== null) {
            c.return = u, _e = c;
            break t;
          }
          _e = u;
        }
    }
  }
  var OR = {
    getCacheForType: function(t) {
      var e = Be(me), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return Be(me).controller.signal;
    }
  }, MR = typeof WeakMap == "function" ? WeakMap : Map, Ht = 0, Wt = null, Nt = null, jt = 0, Yt = 0, yn = null, va = !1, rr = !1, eh = !1, Pi = 0, se = 0, ya = 0, so = 0, Rc = 0, bn = 0, sr = 0, Ns = null, sn = null, nh = !1, Dc = 0, j0 = 0, Oc = 1 / 0, Mc = null, ba = null, ie = 0, qn = null, lo = null, di = 0, ih = 0, ah = null, V0 = null, lr = null, cr = null, ur = null, zs = 0, _c = null;
  function xn() {
    return (Ht & 2) !== 0 && jt !== 0 ? jt & -jt : nt.T !== null ? mh() : Pg();
  }
  function L0() {
    if (bn === 0)
      if ((jt & 536870912) === 0 || Mt) {
        var t = ea;
        ea <<= 1, (ea & 3932160) === 0 && (ea = 262144), bn = t;
      } else bn = 536870912;
    return t = Pe.current, t !== null && (t.flags |= 32), bn;
  }
  function fr(t, e) {
    if (e != null) {
      var a = t.stateNode, s = a.ref;
      s === null && (s = a.ref = gb(
        Di(t.memoizedProps, a)
      )), cr === null && (cr = []), cr.push(e.bind(null, s));
    }
  }
  function ln(t, e, a) {
    (t === Wt && (Yt === 2 || Yt === 9) || t.cancelPendingCommit !== null) && (dr(t, 0), xa(
      t,
      jt,
      bn,
      !1
    )), ts(t, a), ((Ht & 2) === 0 || t !== Wt) && (t === Wt && ((Ht & 2) === 0 && (so |= a), se === 4 && xa(
      t,
      jt,
      bn,
      !1
    )), hi(t));
  }
  function B0(t, e, a) {
    if ((Ht & 6) !== 0) throw Error(r(327));
    var s = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Wr(t, e), c = s ? zR(t, e) : rh(t, e, !0), u = s;
    do {
      if (c === 0) {
        rr && !s && xa(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, u && !_R(a)) {
          c = rh(t, e, !1), u = !1;
          continue;
        }
        if (c === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var y = 0;
          else
            y = t.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            e = y;
            t: {
              var T = t;
              c = Ns;
              var _ = T.current.memoizedState.isDehydrated;
              if (_ && (dr(T, y).flags |= 256), y = rh(
                T,
                y,
                !1
              ), y !== 2 && y !== 6) {
                if (eh && !_) {
                  T.errorRecoveryDisabledLanes |= u, so |= u, c = 4;
                  break t;
                }
                u = sn, sn = c, u !== null && (sn === null ? sn = u : sn.push.apply(
                  sn,
                  u
                ));
              }
              c = y;
            }
            if (u = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          dr(t, 0), xa(t, e, 0, !0);
          break;
        }
        t: {
          switch (s = t, u = c, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              xa(
                s,
                e,
                bn,
                !va
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
          if ((e & 62914560) === e && (c = Dc + 300 - Fe(), 10 < c)) {
            if (xa(
              s,
              e,
              bn,
              !va
            ), Rl(s, 0, !0) !== 0) break t;
            di = e, s.timeoutHandle = Ch(
              P0.bind(
                null,
                s,
                a,
                sn,
                Mc,
                nh,
                e,
                bn,
                so,
                sr,
                va,
                u,
                "Throttled",
                -0,
                0
              ),
              c
            );
            break t;
          }
          P0(
            s,
            a,
            sn,
            Mc,
            nh,
            e,
            bn,
            so,
            sr,
            va,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    hi(t);
  }
  function P0(t, e, a, s, c, u, y, T, _, U, G, Z, L, I) {
    t.timeoutHandle = -1;
    var ct = e.subtreeFlags, gt = (u & 335544064) === u;
    if (Z = null, (gt || ct & 8192 || (ct & 16785408) === 16785408) && (Z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: ii
    }, vn = null, M0(
      e,
      u,
      Z
    ), gt && (ct = Z, gt = t.containerInfo, gt = (gt.nodeType === 9 ? gt : gt.ownerDocument).__reactViewTransition, gt != null && (ct.count++, ct.waitingForViewTransition = !0, ct = Hs.bind(ct), gt.finished.then(ct, ct))), ct = (u & 62914560) === u ? Dc - Fe() : (u & 4194048) === u ? j0 - Fe() : 0, ct = VD(
      Z,
      ct
    ), ct !== null)) {
      di = u, t.cancelPendingCommit = ct(
        F0.bind(
          null,
          t,
          e,
          u,
          a,
          s,
          c,
          y,
          T,
          _,
          U,
          G,
          Z,
          null,
          L,
          I
        )
      ), xa(t, u, y, !U);
      return;
    }
    F0(
      t,
      e,
      u,
      a,
      s,
      c,
      y,
      T,
      _,
      U,
      G,
      Z
    );
  }
  function _R(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var s = 0; s < a.length; s++) {
          var c = a[s], u = c.getSnapshot;
          c = c.value;
          try {
            if (!pn(u(), c)) return !1;
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
  function xa(t, e, a, s) {
    e = zg(t, e), e &= ~Rc, e &= ~so, t.suspendedLanes |= e, t.pingedLanes &= ~e, s && (t.warmLanes |= e), s = t.expirationTimes;
    for (var c = e; 0 < c; ) {
      var u = 31 - kt(c), y = 1 << u;
      s[u] = -1, c &= ~y;
    }
    a !== 0 && Vg(t, a, e);
  }
  function Nc() {
    return (Ht & 6) === 0 ? (js(0), !1) : !0;
  }
  function oh() {
    if (Nt !== null) {
      if (Yt === 0)
        var t = Nt.return;
      else
        t = Nt, Ni = Za = null, hd(t), Jo = null, vs = 0, t = Nt;
      for (; t !== null; )
        s0(t.alternate, t), t = t.return;
      Nt = null;
    }
  }
  function dr(t, e) {
    var a = t.timeoutHandle;
    return a !== -1 && (t.timeoutHandle = -1, eD(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), di = 0, oh(), Wt = t, Nt = a = Mi(t.current, null), jt = e, Yt = 0, yn = null, va = !1, rr = Wr(t, e), eh = !1, sr = bn = Rc = so = ya = se = 0, sn = Ns = null, nh = !1, Pi = zg(t, e), kl(), a;
  }
  function U0(t, e) {
    At = null, nt.H = fc, e === $o || e === $l ? (e = Fv(), Yt = 3) : e === td ? (e = Fv(), Yt = 4) : Yt = e === Dd ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, yn = e, Nt === null && (se = 1, dc(
      t,
      Dn(e, t.current)
    ));
  }
  function k0() {
    var t = Pe.current;
    return t === null ? !0 : (jt & 4194048) === jt ? Ye === null : (jt & 62914560) === jt || (jt & 536870912) !== 0 ? t === Ye : !1;
  }
  function H0() {
    var t = nt.H;
    return nt.H = fc, t === null ? fc : t;
  }
  function I0() {
    var t = nt.A;
    return nt.A = OR, t;
  }
  function zc() {
    se = 4, va || (jt & 4194048) !== jt && Pe.current !== null || (rr = !0), (ya & 134217727) === 0 && (so & 134217727) === 0 || Wt === null || xa(
      Wt,
      jt,
      bn,
      !1
    );
  }
  function rh(t, e, a) {
    var s = Ht;
    Ht |= 2;
    var c = H0(), u = I0();
    (Wt !== t || jt !== e) && (Mc = null, dr(t, e)), e = !1;
    var y = se;
    t: do
      try {
        if (Yt !== 0 && Nt !== null) {
          var T = Nt, _ = yn;
          switch (Yt) {
            case 8:
              oh(), y = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pe.current === null && (e = !0);
              var U = Yt;
              if (Yt = 0, yn = null, hr(t, T, _, U), a && rr) {
                y = 0;
                break t;
              }
              break;
            default:
              U = Yt, Yt = 0, yn = null, hr(t, T, _, U);
          }
        }
        NR(), y = se;
        break;
      } catch (G) {
        U0(t, G);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ni = Za = null, Ht = s, nt.H = c, nt.A = u, Nt === null && (Wt = null, jt = 0, kl()), y;
  }
  function NR() {
    for (; Nt !== null; ) G0(Nt);
  }
  function zR(t, e) {
    var a = Ht;
    Ht |= 2;
    var s = H0(), c = I0();
    Wt !== t || jt !== e ? (Mc = null, Oc = Fe() + 500, dr(t, e)) : rr = Wr(
      t,
      e
    );
    t: do
      try {
        if (Yt !== 0 && Nt !== null) {
          e = Nt;
          var u = yn;
          e: switch (Yt) {
            case 1:
              Yt = 0, yn = null, hr(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Yv(u)) {
                Yt = 0, yn = null, Y0(e);
                break;
              }
              e = function() {
                Yt !== 2 && Yt !== 9 || Wt !== t || (Yt = 7), hi(t);
              }, u.then(e, e);
              break t;
            case 3:
              Yt = 7;
              break t;
            case 4:
              Yt = 5;
              break t;
            case 7:
              Yv(u) ? (Yt = 0, yn = null, Y0(e)) : (Yt = 0, yn = null, hr(t, e, u, 7));
              break;
            case 5:
              var y = null;
              switch (Nt.tag) {
                case 26:
                  y = Nt.memoizedState;
                case 5:
                case 27:
                  var T = Nt;
                  if (y ? Vb(y) : T.stateNode.complete) {
                    Yt = 0, yn = null;
                    var _ = T.sibling;
                    if (_ !== null) Nt = _;
                    else {
                      var U = T.return;
                      U !== null ? (Nt = U, jc(U)) : Nt = null;
                    }
                    break e;
                  }
              }
              Yt = 0, yn = null, hr(t, e, u, 5);
              break;
            case 6:
              Yt = 0, yn = null, hr(t, e, u, 6);
              break;
            case 8:
              oh(), se = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        jR();
        break;
      } catch (G) {
        U0(t, G);
      }
    while (!0);
    return Ni = Za = null, nt.H = s, nt.A = c, Ht = a, Nt !== null ? 0 : (Wt = null, jt = 0, kl(), se);
  }
  function jR() {
    for (; Nt !== null && !El(); )
      G0(Nt);
  }
  function G0(t) {
    var e = o0(t.alternate, t, Pi);
    t.memoizedProps = t.pendingProps, e === null ? jc(t) : Nt = e;
  }
  function Y0(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Jy(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          jt
        );
        break;
      case 11:
        e = Jy(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          jt
        );
        break;
      case 5:
        hd(e);
        var s = e;
        s === Oe && (Mt ? (Fl(s), s.tag === 5 && s.stateNode != null && (te = s.stateNode)) : (Fl(s), Mt = !0));
      default:
        s0(a, e), e = Nt = zv(e, Pi), e = o0(a, e, Pi);
    }
    t.memoizedProps = t.pendingProps, e === null ? jc(t) : Nt = e;
  }
  function hr(t, e, a, s) {
    Ni = Za = null, hd(e), Jo = null, vs = 0;
    var c = e.return;
    try {
      if (SR(
        t,
        c,
        e,
        a,
        jt
      )) {
        se = 1, dc(
          t,
          Dn(a, t.current)
        ), Nt = null;
        return;
      }
    } catch (u) {
      if (c !== null) throw Nt = c, u;
      se = 1, dc(
        t,
        Dn(a, t.current)
      ), Nt = null;
      return;
    }
    e.flags & 32768 ? (Mt || s === 1 ? t = !0 : rr || (jt & 536870912) !== 0 ? t = !1 : (va = t = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = Pe.current, s !== null && s.tag === 13 && (s.flags |= 16384))), q0(e, t)) : jc(e);
  }
  function jc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        q0(
          e,
          va
        );
        return;
      }
      t = e.return;
      var a = CR(
        e.alternate,
        e,
        Pi
      );
      if (a !== null) {
        Nt = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        Nt = e;
        return;
      }
      Nt = e = t;
    } while (e !== null);
    se === 0 && (se = 5);
  }
  function q0(t, e) {
    do {
      var a = AR(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, Nt = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        Nt = t;
        return;
      }
      Nt = t = a;
    } while (t !== null);
    se = 6, Nt = null;
  }
  function F0(t, e, a, s, c, u, y, T, _, U, G, Z) {
    t.cancelPendingCommit = null;
    do
      Vc();
    while (ie !== 0);
    if ((Ht & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === Wt && (Nt = Wt = null, jt = 0), lo = e, qn = t, di = a, ah = c, V0 = s, VR(
        t,
        e,
        a,
        y,
        T,
        _,
        Z
      );
    }
  }
  function VR(t, e, a, s, c, u, y) {
    var T = e.lanes | e.childLanes;
    if (ih = T, T |= Hf, sA(
      t,
      a,
      T,
      s,
      c,
      u
    ), cr = null, (a & 335544064) === a ? (ur = cR(t), s = 10262) : (ur = null, s = 10256), (e.subtreeFlags & s) !== 0 || (e.flags & s) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, HR(zo, function() {
      return uh(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), xc = !1, s = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || s) {
      s = nt.T, nt.T = null, c = st.p, st.p = 2, u = Ht, Ht |= 4;
      try {
        RR(t, e, a);
      } finally {
        Ht = u, st.p = c, nt.T = s;
      }
    }
    ie = 1, xc ? lr = sD(
      y,
      t.containerInfo,
      ur,
      sh,
      lh,
      BR,
      ch,
      uh,
      LR
    ) : (sh(), lh(), ch());
  }
  function LR(t) {
    if (ie !== 0) {
      var e = qn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function BR() {
    ie === 3 && (ie = 0, D0(lo, qn), ie = 4);
  }
  function sh() {
    if (ie === 1) {
      ie = 0;
      var t = qn, e = lo, a = di, s = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || s) {
        s = nt.T, nt.T = null;
        var c = st.p;
        st.p = 2;
        var u = Ht;
        Ht |= 4;
        try {
          Os = Tc = !1, A0(e, t, a), a = wh;
          var y = Tv(t.containerInfo), T = a.focusedElem, _ = a.selectionRange;
          if (y !== T && T && T.ownerDocument && wv(
            T.ownerDocument.documentElement,
            T
          )) {
            if (_ !== null && Lf(T)) {
              var U = _.start, G = _.end;
              if (G === void 0 && (G = U), "selectionStart" in T)
                T.selectionStart = U, T.selectionEnd = Math.min(
                  G,
                  T.value.length
                );
              else {
                var Z = T.ownerDocument || document, L = Z && Z.defaultView || window;
                if (L.getSelection) {
                  var I = L.getSelection(), ct = T.textContent.length, gt = Math.min(_.start, ct), Rt = _.end === void 0 ? gt : Math.min(_.end, ct);
                  !I.extend && gt > Rt && (y = Rt, Rt = gt, gt = y);
                  var B = Sv(
                    T,
                    gt
                  ), V = Sv(
                    T,
                    Rt
                  );
                  if (B && V && (I.rangeCount !== 1 || I.anchorNode !== B.node || I.anchorOffset !== B.offset || I.focusNode !== V.node || I.focusOffset !== V.offset)) {
                    var H = Z.createRange();
                    H.setStart(B.node, B.offset), I.removeAllRanges(), gt > Rt ? (I.addRange(H), I.extend(V.node, V.offset)) : (H.setEnd(V.node, V.offset), I.addRange(H));
                  }
                }
              }
            }
            for (Z = [], I = T; I = I.parentNode; )
              I.nodeType === 1 && Z.push({
                element: I,
                left: I.scrollLeft,
                top: I.scrollTop
              });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < Z.length; T++) {
              var K = Z[T];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Sr = !!Sh, wh = Sh = null;
        } finally {
          Ht = u, st.p = c, nt.T = s;
        }
      }
      t.current = e, ie = 2;
    }
  }
  function lh() {
    if (ie === 2) {
      ie = 0;
      var t = qn, e = lo, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = nt.T, nt.T = null;
        var s = st.p;
        st.p = 2;
        var c = Ht;
        Ht |= 4;
        try {
          x0(t, e.alternate, e);
        } finally {
          Ht = c, st.p = s, nt.T = a;
        }
      }
      ie = 3;
    }
  }
  function ch() {
    if (ie === 4 || ie === 3) {
      ie = 0;
      var t = lr;
      lr = null, En();
      var e = qn, a = lo, s = di, c = V0, u = (s & 335544064) === s ? 10262 : 10256;
      if ((a.subtreeFlags & u) !== 0 || (a.flags & u) !== 0 ? ie = 5 : (ie = 0, lo = qn = null, X0(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (ba = null), yf(s), a = a.stateNode, Zt && typeof Zt.onCommitFiberRoot == "function")
        try {
          Zt.onCommitFiberRoot(
            oe,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        a = nt.T, u = st.p, st.p = 2, nt.T = null;
        try {
          for (var y = e.onRecoverableError, T = 0; T < c.length; T++) {
            var _ = c[T];
            y(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          nt.T = a, st.p = u;
        }
      }
      if (c = cr, y = ur, ur = null, c !== null && (cr = null, y === null && (y = []), t !== null))
        for (_ = 0; _ < c.length; _++)
          a = (0, c[_])(
            y
          ), a !== void 0 && t.finished.finally(a);
      (di & 3) !== 0 && Vc(), hi(e), u = e.pendingLanes, (s & 261930) !== 0 && (u & 42) !== 0 ? e === _c ? zs++ : (zs = 0, _c = e) : (zs = 0, _c = null), js(0);
    }
  }
  function X0(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ms(e)));
  }
  function Vc() {
    return lr !== null && (lr.skipTransition(), lr = null), sh(), lh(), ch(), uh();
  }
  function uh() {
    if (ie !== 5) return !1;
    var t = qn, e = ih;
    ih = 0;
    var a = yf(di), s = nt.T, c = st.p;
    try {
      st.p = 32 > a ? 32 : a, nt.T = null, a = ah, ah = null;
      var u = qn, y = di;
      if (ie = 0, lo = qn = null, di = 0, (Ht & 6) !== 0) throw Error(r(331));
      var T = Ht;
      if (Ht |= 4, N0(u.current), O0(
        u,
        u.current,
        y,
        a
      ), Ht = T, js(0, !1), Zt && typeof Zt.onPostCommitFiberRoot == "function")
        try {
          Zt.onPostCommitFiberRoot(oe, u);
        } catch {
        }
      return !0;
    } finally {
      st.p = c, nt.T = s, X0(t, e);
    }
  }
  function K0(t, e, a) {
    e = Dn(a, e), e = Rd(t.stateNode, e, 2), t = fa(t, e, 2), t !== null && (ts(t, 2), hi(t));
  }
  function qt(t, e, a) {
    if (t.tag === 3)
      K0(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          K0(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var s = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ba === null || !ba.has(s))) {
            t = Dn(a, t), a = Yy(2), s = fa(e, a, 2), s !== null && (qy(
              a,
              s,
              e,
              t
            ), ts(s, 2), hi(s));
            break;
          }
        }
        e = e.return;
      }
  }
  function fh(t, e, a) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new MR();
      var c = /* @__PURE__ */ new Set();
      s.set(e, c);
    } else
      c = s.get(e), c === void 0 && (c = /* @__PURE__ */ new Set(), s.set(e, c));
    c.has(a) || (eh = !0, c.add(a), t = PR.bind(null, t, e, a), e.then(t, t));
  }
  function PR(t, e, a) {
    var s = t.pingCache;
    s !== null && s.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Wt === t && (jt & a) === a && ((se === 4 || se === 3 && (jt & 62914560) === jt && 300 > Fe() - Dc) && (Ht & 2) === 0 ? dr(t, 0) : Rc |= a, sr === jt && (sr = 0)), hi(t);
  }
  function Z0(t, e) {
    e === 0 && (e = jg()), t = Fa(t, e), t !== null && (ts(t, e), hi(t));
  }
  function UR(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), Z0(t, a);
  }
  function kR(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var s = t.stateNode, c = t.memoizedState;
        c !== null && (a = c.retryLane);
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
    s !== null && s.delete(e), Z0(t, a);
  }
  function HR(t, e) {
    return Kr(t, e);
  }
  var mr = null, pr = null, dh = !1, Lc = !1, hh = !1, Sa = 0;
  function hi(t) {
    t !== pr && t.next === null && (pr === null ? mr = pr = t : pr = pr.next = t), Lc = !0, dh || (dh = !0, GR());
  }
  function js(t, e) {
    if (!hh && Lc) {
      hh = !0;
      do
        for (var a = !1, s = mr; s !== null; ) {
          if (t !== 0) {
            var c = s.pendingLanes;
            if (c === 0) var u = 0;
            else {
              var y = s.suspendedLanes, T = s.pingedLanes;
              u = (1 << 31 - kt(42 | t) + 1) - 1, u &= c & ~(y & ~T), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, W0(s, u));
          } else
            u = jt, u = Rl(
              s,
              s === Wt ? u : 0,
              s.cancelPendingCommit !== null || s.timeoutHandle !== -1
            ), (u & 3) === 0 || Wr(s, u) || (a = !0, W0(s, u));
          s = s.next;
        }
      while (a);
      hh = !1;
    }
  }
  function IR() {
    Q0();
  }
  function Q0() {
    Lc = dh = !1;
    var t = 0;
    Sa !== 0 && tD() && (t = Sa);
    for (var e = Fe(), a = null, s = mr; s !== null; ) {
      var c = s.next, u = $0(s, e);
      u === 0 ? (s.next = null, a === null ? mr = c : a.next = c, c === null && (pr = a)) : (a = s, (t !== 0 || (u & 3) !== 0) && (Lc = !0)), s = c;
    }
    ie !== 0 && ie !== 5 || js(t), Sa !== 0 && (Sa = 0);
  }
  function $0(t, e) {
    for (var a = t.suspendedLanes, s = t.pingedLanes, c = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var y = 31 - kt(u), T = 1 << y, _ = c[y];
      _ === -1 ? ((T & a) === 0 || (T & s) !== 0) && (c[y] = rA(T, e)) : _ <= e && (t.expiredLanes |= T), u &= ~T;
    }
    if (e = Wt, a = jt, a = Rl(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), s = t.callbackNode, a === 0 || t === e && (Yt === 2 || Yt === 9) || t.cancelPendingCommit !== null)
      return s !== null && s !== null && No(s), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Wr(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (s !== null && No(s), yf(a)) {
        case 2:
        case 8:
          a = Qr;
          break;
        case 32:
          a = zo;
          break;
        case 268435456:
          a = $r;
          break;
        default:
          a = zo;
      }
      return s = J0.bind(null, t), a = Kr(a, s), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return s !== null && s !== null && No(s), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function J0(t, e) {
    if (ie !== 0 && ie !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (Vc() && t.callbackNode !== a)
      return null;
    var s = jt;
    return s = Rl(
      t,
      t === Wt ? s : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), s === 0 ? null : (B0(t, s, e), $0(t, Fe()), t.callbackNode != null && t.callbackNode === a ? J0.bind(null, t) : null);
  }
  function W0(t, e) {
    if (Vc()) return null;
    B0(t, e, !0);
  }
  function GR() {
    nD(function() {
      (Ht & 6) !== 0 ? Kr(
        kn,
        IR
      ) : Q0();
    });
  }
  function mh() {
    if (Sa === 0) {
      var t = Ja;
      t === 0 && (t = Xe, Xe <<= 1, (Xe & 261888) === 0 && (Xe = 256)), Sa = t;
    }
    return Sa;
  }
  function tb(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Nl(t);
  }
  function YR(t, e, a, s, c) {
    if (e === "submit" && a && a.stateNode === c) {
      var u = tb(
        (c[nn] || null).action
      ), y = s.submitter;
      y && (e = (e = y[nn] || null) ? tb(e.formAction) : y.getAttribute("formAction"), e !== null && (u = e, y = null));
      var T = new Ll(
        "action",
        "action",
        null,
        s,
        c
      );
      t.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (s.defaultPrevented) {
                if (Sa !== 0) {
                  var _ = new FormData(c, y);
                  wd(
                    a,
                    {
                      pending: !0,
                      data: _,
                      method: c.method,
                      action: u
                    },
                    null,
                    _
                  );
                }
              } else
                typeof u == "function" && (T.preventDefault(), _ = new FormData(c, y), wd(
                  a,
                  {
                    pending: !0,
                    data: _,
                    method: c.method,
                    action: u
                  },
                  u,
                  _
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var ph = 0; ph < kf.length; ph++) {
    var gh = kf[ph], qR = gh.toLowerCase(), FR = gh[0].toUpperCase() + gh.slice(1);
    Hn(
      qR,
      "on" + FR
    );
  }
  Hn(Av, "onAnimationEnd"), Hn(Rv, "onAnimationIteration"), Hn(Dv, "onAnimationStart"), Hn("dblclick", "onDoubleClick"), Hn("focusin", "onFocus"), Hn("focusout", "onBlur"), Hn(eR, "onTransitionRun"), Hn(nR, "onTransitionStart"), Hn(iR, "onTransitionCancel"), Hn(Ov, "onTransitionEnd"), Bo("onMouseEnter", ["mouseout", "mouseover"]), Bo("onMouseLeave", ["mouseout", "mouseover"]), Bo("onPointerEnter", ["pointerout", "pointerover"]), Bo("onPointerLeave", ["pointerout", "pointerover"]), Ga(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ga(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ga("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ga(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ga(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ga(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Vs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), XR = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vs)
  );
  function eb(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var s = t[a], c = s.event;
      s = s.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var y = s.length - 1; 0 <= y; y--) {
            var T = s[y], _ = T.instance, U = T.currentTarget;
            if (T = T.listener, _ !== u && c.isPropagationStopped())
              break t;
            u = T, c.currentTarget = U;
            try {
              u(c);
            } catch (G) {
              Ul(G);
            }
            c.currentTarget = null, u = _;
          }
        else
          for (y = 0; y < s.length; y++) {
            if (T = s[y], _ = T.instance, U = T.currentTarget, T = T.listener, _ !== u && c.isPropagationStopped())
              break t;
            u = T, c.currentTarget = U;
            try {
              u(c);
            } catch (G) {
              Ul(G);
            }
            c.currentTarget = null, u = _;
          }
      }
    }
  }
  function zt(t, e) {
    var a = e[kg];
    a === void 0 && (a = e[kg] = /* @__PURE__ */ new Set());
    var s = t + "__bubble";
    a.has(s) || (nb(e, t, 2, !1), a.add(s));
  }
  function vh(t, e, a) {
    var s = 0;
    e && (s |= 4), nb(
      a,
      t,
      s,
      e
    );
  }
  var Bc = "_reactListening" + Math.random().toString(36).slice(2);
  function yh(t) {
    if (!t[Bc]) {
      t[Bc] = !0, Gg.forEach(function(a) {
        a !== "selectionchange" && (XR.has(a) || vh(a, !1, t), vh(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Bc] || (e[Bc] = !0, vh("selectionchange", !1, e));
    }
  }
  function nb(t, e, a, s) {
    switch (qb(e)) {
      case 2:
        var c = UD;
        break;
      case 8:
        c = kD;
        break;
      default:
        c = Ph;
    }
    a = c.bind(
      null,
      e,
      a,
      t
    ), c = void 0, !Af || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (c = !0), s ? c !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: c
    }) : t.addEventListener(e, a, !0) : c !== void 0 ? t.addEventListener(e, a, {
      passive: c
    }) : t.addEventListener(e, a, !1);
  }
  function bh(t, e, a, s, c) {
    var u = s;
    if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
      t: for (; ; ) {
        if (s === null) return;
        var y = s.tag;
        if (y === 3 || y === 4) {
          var T = s.stateNode.containerInfo;
          if (T === c) break;
          if (y === 4)
            for (y = s.return; y !== null; ) {
              var _ = y.tag;
              if ((_ === 3 || _ === 4) && y.stateNode.containerInfo === c)
                return;
              y = y.return;
            }
          for (; T !== null; ) {
            if (y = Ia(T), y === null) return;
            if (_ = y.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
              s = u = y;
              continue t;
            }
            T = T.parentNode;
          }
        }
        s = s.return;
      }
    nv(function() {
      var U = u, G = Ef(a), Z = [];
      t: {
        var L = Mv.get(t);
        if (L !== void 0) {
          var I = Ll, ct = t;
          switch (t) {
            case "keypress":
              if (jl(a) === 0) break t;
            case "keydown":
            case "keyup":
              I = _A;
              break;
            case "focusin":
              ct = "focus", I = Mf;
              break;
            case "focusout":
              ct = "blur", I = Mf;
              break;
            case "beforeblur":
            case "afterblur":
              I = Mf;
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
              I = ov;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = bA;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = LA;
              break;
            case Av:
            case Rv:
            case Dv:
              I = wA;
              break;
            case Ov:
              I = PA;
              break;
            case "scroll":
            case "scrollend":
              I = vA;
              break;
            case "wheel":
              I = kA;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = EA;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = sv;
              break;
            case "submit":
              I = jA;
              break;
            case "toggle":
            case "beforetoggle":
              I = IA;
          }
          var gt = (e & 4) !== 0, Rt = !gt && (t === "scroll" || t === "scrollend"), B = gt ? L !== null ? L + "Capture" : null : L;
          gt = [];
          for (var V = U, H; V !== null; ) {
            var K = V;
            if (H = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || H === null || B === null || (K = is(V, B), K != null && gt.push(
              Ls(V, K, H)
            )), Rt) break;
            V = V.return;
          }
          0 < gt.length && (L = new I(
            L,
            ct,
            null,
            a,
            G
          ), Z.push({ event: L, listeners: gt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (I = t === "mouseover" || t === "pointerover", L = t === "mouseout" || t === "pointerout", I && a !== Tf && (ct = a.relatedTarget || a.fromElement) && (Ia(ct) || ct[jo]))
            break t;
          (L || I) && (ct = G.window === G ? G : (I = G.ownerDocument) ? I.defaultView || I.parentWindow : window, L ? (I = a.relatedTarget || a.toElement, L = U, I = I ? Ia(I) : null, I !== null && (Rt = f(I), gt = I.tag, I !== Rt || gt !== 5 && gt !== 27 && gt !== 6) && (I = null)) : (L = null, I = U), L !== I && (gt = ov, K = "onMouseLeave", B = "onMouseEnter", V = "mouse", (t === "pointerout" || t === "pointerover") && (gt = sv, K = "onPointerLeave", B = "onPointerEnter", V = "pointer"), Rt = L == null ? ct : ns(L), H = I == null ? ct : ns(I), ct = new gt(
            K,
            V + "leave",
            L,
            a,
            G
          ), ct.target = Rt, ct.relatedTarget = H, K = null, Ia(G) === U && (gt = new gt(
            B,
            V + "enter",
            I,
            a,
            G
          ), gt.target = H, gt.relatedTarget = Rt, K = gt), Rt = K, gt = L && I ? k(
            L,
            I,
            KR
          ) : null, L !== null && ib(
            Z,
            ct,
            L,
            gt,
            !1
          ), I !== null && Rt !== null && ib(
            Z,
            Rt,
            I,
            gt,
            !0
          )));
        }
        t: {
          if (L = U ? ns(U) : window, I = L.nodeName && L.nodeName.toLowerCase(), I === "select" || I === "input" && L.type === "file")
            var ht = pv;
          else if (hv(L))
            if (gv)
              ht = JA;
            else {
              ht = QA;
              var Vt = ZA;
            }
          else
            I = L.nodeName, !I || I.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? U && wf(U.elementType) && (ht = pv) : ht = $A;
          if (ht && (ht = ht(t, U))) {
            mv(
              Z,
              ht,
              a,
              G
            );
            break t;
          }
          Vt && Vt(t, L, U);
        }
        switch (Vt = U ? ns(U) : window, t) {
          case "focusin":
            (hv(Vt) || Vt.contentEditable === "true") && (Go = Vt, Bf = U, fs = null);
            break;
          case "focusout":
            fs = Bf = Go = null;
            break;
          case "mousedown":
            Pf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pf = !1, Ev(Z, a, G);
            break;
          case "selectionchange":
            if (tR) break;
          case "keydown":
          case "keyup":
            Ev(Z, a, G);
        }
        var xt;
        if (Nf)
          t: {
            switch (t) {
              case "compositionstart":
                var wt = "onCompositionStart";
                break t;
              case "compositionend":
                wt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                wt = "onCompositionUpdate";
                break t;
            }
            wt = void 0;
          }
        else
          Io ? fv(t, a) && (wt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (wt = "onCompositionStart");
        wt && (lv && a.locale !== "ko" && (Io || wt !== "onCompositionStart" ? wt === "onCompositionEnd" && Io && (xt = iv()) : (na = G, Rf = "value" in na ? na.value : na.textContent, Io = !0)), Vt = Pc(U, wt), 0 < Vt.length && (wt = new rv(
          wt,
          t,
          null,
          a,
          G
        ), Z.push({ event: wt, listeners: Vt }), xt ? wt.data = xt : (xt = dv(a), xt !== null && (wt.data = xt)))), (xt = YA ? qA(t, a) : FA(t, a)) && (wt = Pc(U, "onBeforeInput"), 0 < wt.length && (Vt = new rv(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          G
        ), Z.push({
          event: Vt,
          listeners: wt
        }), Vt.data = xt)), YR(
          Z,
          t,
          U,
          a,
          G
        );
      }
      eb(Z, e);
    });
  }
  function Ls(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function Pc(t, e) {
    for (var a = e + "Capture", s = []; t !== null; ) {
      var c = t, u = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || u === null || (c = is(t, a), c != null && s.unshift(
        Ls(t, c, u)
      ), c = is(t, e), c != null && s.push(
        Ls(t, c, u)
      )), t.tag === 3) return s;
      t = t.return;
    }
    return [];
  }
  function KR(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ib(t, e, a, s, c) {
    for (var u = e._reactName, y = []; a !== null && a !== s; ) {
      var T = a, _ = T.alternate, U = T.stateNode;
      if (T = T.tag, _ !== null && _ === s) break;
      T !== 5 && T !== 26 && T !== 27 || U === null || (_ = U, c ? (U = is(a, u), U != null && y.unshift(
        Ls(a, U, _)
      )) : c || (U = is(a, u), U != null && y.push(
        Ls(a, U, _)
      ))), a = a.return;
    }
    y.length !== 0 && t.push({ event: e, listeners: y });
  }
  var ZR = /\r\n?/g, QR = /\u0000|\uFFFD/g;
  function ab(t) {
    return (typeof t == "string" ? t : "" + t).replace(ZR, `
`).replace(QR, "");
  }
  function ob(t, e) {
    return e = ab(e), ab(t) === e;
  }
  function Ft(t, e, a, s, c, u) {
    switch (a) {
      case "children":
        if (typeof s == "string")
          e === "body" || e === "textarea" && s === "" || Uo(t, s);
        else if (typeof s == "number" || typeof s == "bigint")
          e !== "body" && Uo(t, "" + s);
        else return;
        break;
      case "className":
        _l(t, "class", s);
        break;
      case "tabIndex":
        _l(t, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _l(t, a, s);
        break;
      case "style":
        tv(t, s, u);
        return;
      case "data":
        if (e !== "object") {
          _l(t, "data", s);
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
        s = Nl(s), t.setAttribute(a, s);
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
          typeof u == "function" && (a === "formAction" ? (e !== "input" && Ft(t, e, "name", c.name, c, null), Ft(
            t,
            e,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Ft(
            t,
            e,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Ft(
            t,
            e,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Ft(t, e, "encType", c.encType, c, null), Ft(t, e, "method", c.method, c, null), Ft(t, e, "target", c.target, c, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(a);
          break;
        }
        s = Nl(s), t.setAttribute(a, s);
        break;
      case "onClick":
        s != null && (t.onclick = ii);
        return;
      case "onScroll":
        s != null && zt("scroll", t);
        return;
      case "onScrollEnd":
        s != null && zt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(r(61));
          if (a = s.__html, a != null) {
            if (c.children != null) throw Error(r(60));
            u?.__html !== a && (t.innerHTML = a);
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
        a = Nl(s), t.setAttributeNS(
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
        zt("beforetoggle", t), zt("toggle", t), Ml(t, "popover", s);
        break;
      case "xlinkActuate":
        Ai(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          s
        );
        break;
      case "xlinkArcrole":
        Ai(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          s
        );
        break;
      case "xlinkRole":
        Ai(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          s
        );
        break;
      case "xlinkShow":
        Ai(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          s
        );
        break;
      case "xlinkTitle":
        Ai(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          s
        );
        break;
      case "xlinkType":
        Ai(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          s
        );
        break;
      case "xmlBase":
        Ai(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          s
        );
        break;
      case "xmlLang":
        Ai(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          s
        );
        break;
      case "xmlSpace":
        Ai(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          s
        );
        break;
      case "is":
        Ml(t, "is", s);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N")
          a = pA.get(a) || a, Ml(t, a, s);
        else return;
    }
    Ut = !0;
  }
  function xh(t, e, a, s, c, u) {
    switch (a) {
      case "style":
        tv(t, s, u);
        return;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(r(61));
          if (a = s.__html, a != null) {
            if (c.children != null) throw Error(r(60));
            u?.__html !== a && (t.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof s == "string") Uo(t, s);
        else if (typeof s == "number" || typeof s == "bigint")
          Uo(t, "" + s);
        else return;
        break;
      case "onScroll":
        s != null && zt("scroll", t);
        return;
      case "onScrollEnd":
        s != null && zt("scrollend", t);
        return;
      case "onClick":
        s != null && (t.onclick = ii);
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
        if (!Yg.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), u = a.slice(2, c ? a.length - 7 : void 0), e = t[nn] || null, e = e != null ? e[a] : null, typeof e == "function" && t.removeEventListener(u, e, c), typeof s == "function")) {
              typeof e != "function" && e !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(u, s, c);
              break t;
            }
            Ut = !0, a in t ? t[a] = s : s === !0 ? t.setAttribute(a, "") : Ml(t, a, s);
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
        zt("error", t), zt("load", t);
        var s = !1, c = !1, u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var y = a[u];
            if (y != null)
              switch (u) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Ft(t, e, u, y, a, null);
              }
          }
        c && Ft(t, e, "srcSet", a.srcSet, a, null), s && Ft(t, e, "src", a.src, a, null);
        return;
      case "input":
        zt("invalid", t);
        var T = u = y = c = null, _ = null, U = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var G = a[s];
            if (G != null)
              switch (s) {
                case "name":
                  c = G;
                  break;
                case "type":
                  y = G;
                  break;
                case "checked":
                  _ = G;
                  break;
                case "defaultChecked":
                  U = G;
                  break;
                case "value":
                  u = G;
                  break;
                case "defaultValue":
                  T = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Ft(t, e, s, G, a, null);
              }
          }
        Qg(
          t,
          u,
          T,
          _,
          U,
          y,
          c,
          !1
        );
        return;
      case "select":
        zt("invalid", t), s = y = u = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (T = a[c], T != null))
            switch (c) {
              case "value":
                u = T;
                break;
              case "defaultValue":
                y = T;
                break;
              case "multiple":
                s = T;
              default:
                Ft(t, e, c, T, a, null);
            }
        e = u, a = y, t.multiple = !!s, e != null ? Po(t, !!s, e, !1) : a != null && Po(t, !!s, a, !0);
        return;
      case "textarea":
        zt("invalid", t), u = c = s = null;
        for (y in a)
          if (a.hasOwnProperty(y) && (T = a[y], T != null))
            switch (y) {
              case "value":
                s = T;
                break;
              case "defaultValue":
                c = T;
                break;
              case "children":
                u = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(r(91));
                break;
              default:
                Ft(t, e, y, T, a, null);
            }
        Jg(t, s, c, u);
        return;
      case "option":
        for (_ in a)
          a.hasOwnProperty(_) && (s = a[_], s != null) && (_ === "selected" ? t.selected = s && typeof s != "function" && typeof s != "symbol" : Ft(t, e, _, s, a, null));
        return;
      case "dialog":
        zt("beforetoggle", t), zt("toggle", t), zt("cancel", t), zt("close", t);
        break;
      case "iframe":
      case "object":
        zt("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Vs.length; s++)
          zt(Vs[s], t);
        break;
      case "image":
        zt("error", t), zt("load", t);
        break;
      case "details":
        zt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        zt("error", t), zt("load", t);
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
        for (U in a)
          if (a.hasOwnProperty(U) && (s = a[U], s != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ft(t, e, U, s, a, null);
            }
        return;
      default:
        if (wf(e)) {
          for (G in a)
            a.hasOwnProperty(G) && (s = a[G], s !== void 0 && xh(
              t,
              e,
              G,
              s,
              a,
              void 0
            ));
          return;
        }
    }
    for (T in a)
      a.hasOwnProperty(T) && (s = a[T], s != null && Ft(t, e, T, s, a, null));
  }
  var $R = {};
  function JR(t, e, a, s) {
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
        var c = null, u = null, y = null, T = null, _ = null, U = null, G = null;
        for (I in a) {
          var Z = a[I];
          if (a.hasOwnProperty(I) && Z != null)
            switch (I) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = Z;
              default:
                s.hasOwnProperty(I) || Ft(t, e, I, null, s, Z);
            }
        }
        for (var L in s) {
          var I = s[L];
          if (Z = a[L], s.hasOwnProperty(L) && (I != null || Z != null))
            switch (L) {
              case "type":
                I !== Z && (Ut = !0), u = I;
                break;
              case "name":
                I !== Z && (Ut = !0), c = I;
                break;
              case "checked":
                I !== Z && (Ut = !0), U = I;
                break;
              case "defaultChecked":
                I !== Z && (Ut = !0), G = I;
                break;
              case "value":
                I !== Z && (Ut = !0), y = I;
                break;
              case "defaultValue":
                I !== Z && (Ut = !0), T = I;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null)
                  throw Error(r(137, e));
                break;
              default:
                I !== Z && Ft(
                  t,
                  e,
                  L,
                  I,
                  s,
                  Z
                );
            }
        }
        xf(
          t,
          y,
          T,
          _,
          U,
          G,
          u,
          c
        );
        return;
      case "select":
        I = y = T = L = null;
        for (u in a)
          if (_ = a[u], a.hasOwnProperty(u) && _ != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                I = _;
              default:
                s.hasOwnProperty(u) || Ft(
                  t,
                  e,
                  u,
                  null,
                  s,
                  _
                );
            }
        for (c in s)
          if (u = s[c], _ = a[c], s.hasOwnProperty(c) && (u != null || _ != null))
            switch (c) {
              case "value":
                u !== _ && (Ut = !0), L = u;
                break;
              case "defaultValue":
                u !== _ && (Ut = !0), T = u;
                break;
              case "multiple":
                u !== _ && (Ut = !0), y = u;
              default:
                u !== _ && Ft(
                  t,
                  e,
                  c,
                  u,
                  s,
                  _
                );
            }
        e = T, a = y, s = I, L != null ? Po(t, !!a, L, !1) : !!s != !!a && (e != null ? Po(t, !!a, e, !0) : Po(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        I = L = null;
        for (T in a)
          if (c = a[T], a.hasOwnProperty(T) && c != null && !s.hasOwnProperty(T))
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ft(t, e, T, null, s, c);
            }
        for (y in s)
          if (c = s[y], u = a[y], s.hasOwnProperty(y) && (c != null || u != null))
            switch (y) {
              case "value":
                c !== u && (Ut = !0), L = c;
                break;
              case "defaultValue":
                c !== u && (Ut = !0), I = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                c !== u && Ft(t, e, y, c, s, u);
            }
        $g(t, L, I);
        return;
      case "option":
        for (var ct in a)
          L = a[ct], a.hasOwnProperty(ct) && L != null && !s.hasOwnProperty(ct) && (ct === "selected" ? t.selected = !1 : Ft(
            t,
            e,
            ct,
            null,
            s,
            L
          ));
        for (_ in s)
          L = s[_], I = a[_], s.hasOwnProperty(_) && L !== I && (L != null || I != null) && (_ === "selected" ? (L !== I && (Ut = !0), t.selected = L && typeof L != "function" && typeof L != "symbol") : Ft(
            t,
            e,
            _,
            L,
            s,
            I
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
          L = a[gt], a.hasOwnProperty(gt) && L != null && !s.hasOwnProperty(gt) && Ft(t, e, gt, null, s, L);
        for (U in s)
          if (L = s[U], I = a[U], s.hasOwnProperty(U) && L !== I && (L != null || I != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null)
                  throw Error(r(137, e));
                break;
              default:
                Ft(
                  t,
                  e,
                  U,
                  L,
                  s,
                  I
                );
            }
        return;
      default:
        if (wf(e)) {
          for (var Rt in a)
            L = a[Rt], a.hasOwnProperty(Rt) && L !== void 0 && !s.hasOwnProperty(Rt) && xh(
              t,
              e,
              Rt,
              void 0,
              s,
              L
            );
          for (G in s)
            L = s[G], I = a[G], !s.hasOwnProperty(G) || L === I || L === void 0 && I === void 0 || xh(
              t,
              e,
              G,
              L,
              s,
              I
            );
          return;
        }
    }
    for (var B in a)
      L = a[B], a.hasOwnProperty(B) && L != null && !s.hasOwnProperty(B) && Ft(t, e, B, null, s, L);
    for (Z in s)
      L = s[Z], I = a[Z], !s.hasOwnProperty(Z) || L === I || L == null && I == null || Ft(t, e, Z, L, s, I);
  }
  function rb(t) {
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
  function WR() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++) {
        var c = a[s], u = c.transferSize, y = c.initiatorType, T = c.duration;
        if (u && T && rb(y)) {
          for (y = 0, T = c.responseEnd, s += 1; s < a.length; s++) {
            var _ = a[s], U = _.startTime;
            if (U > T) break;
            var G = _.transferSize, Z = _.initiatorType;
            G && rb(Z) && (_ = _.responseEnd, y += G * (_ < T ? 1 : (T - U) / (_ - U)));
          }
          if (--s, e += 8 * (u + y) / (c.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Sh = null, wh = null;
  function Bs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function sb(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lb(t, e) {
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
  function cb(t, e, a, s) {
    return a = Bs(
      a
    ).createElement(t), a[Le] = s, a[nn] = e, He(a, t, e), De(a), a;
  }
  function Th(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Eh = null;
  function tD() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Eh ? !1 : (Eh = t, !0) : (Eh = null, !1);
  }
  var Ch = typeof setTimeout == "function" ? setTimeout : void 0, eD = typeof clearTimeout == "function" ? clearTimeout : void 0, ub = typeof Promise == "function" ? Promise : void 0, fb = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Ch, nD = typeof queueMicrotask == "function" ? queueMicrotask : typeof ub < "u" ? function(t) {
    return ub.resolve(null).then(t).catch(iD);
  } : Ch;
  function iD(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function wa(t) {
    return t === "head";
  }
  function db(t, e) {
    var a = e, s = 0;
    do {
      var c = a.nextSibling;
      if (t.removeChild(a), c && c.nodeType === 8)
        if (a = c.data, a === "/$" || a === "/&") {
          if (s === 0) {
            t.removeChild(c), wr(e);
            return;
          }
          s--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          s++;
        else if (a === "html")
          zh(
            t.ownerDocument.documentElement
          );
        else if (a === "head") {
          a = t.ownerDocument.head, zh(a);
          for (var u = a.firstChild; u; ) {
            var y = u.nextSibling, T = u.nodeName;
            u[es] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = y;
          }
        } else
          a === "body" && zh(t.ownerDocument.body);
      a = c;
    } while (a);
    wr(e);
  }
  function hb(t, e) {
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
  function mb(t, e, a) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, a != null && (t.style.viewTransitionClass = a), a = getComputedStyle(t), a.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var s = 1;
      else
        for (var c = s = 0; c < e.length; c++) {
          var u = e[c];
          0 < u.width && 0 < u.height && s++;
        }
      s === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + a.paddingTop, t.marginBottom = "-" + a.paddingBottom);
    }
  }
  function pb(t, e) {
    t = t.style, e = e.style;
    var a = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), a = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (a = e.display, t.display = a == null || typeof a == "boolean" ? "" : a, a = e.margin, a != null ? t.margin = a : (a = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = a == null || typeof a == "boolean" ? "" : a, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function aD(t, e, a) {
    return a = a.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= a.innerHeight && t.left <= a.innerWidth
    };
  }
  function Ah(t) {
    var e = t.getBoundingClientRect(), a = getComputedStyle(t);
    return aD(e, a, t);
  }
  function oD(t) {
    return t.documentElement.clientHeight;
  }
  function rD(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function sD(t, e, a, s, c, u, y, T, _) {
    var U = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var G = U.startViewTransition({
        update: function() {
          var L = U.defaultView, I = L.navigation && L.navigation.transition, ct = U.fonts.status;
          s();
          var gt = [];
          if (ct === "loaded" && (oD(U), U.fonts.status === "loading" && gt.push(U.fonts.ready)), ct = gt.length, t !== null)
            for (var Rt = t.suspenseyImages, B = 0, V = 0; V < Rt.length; V++) {
              var H = Rt[V];
              if (!H.complete) {
                var K = H.getBoundingClientRect();
                if (0 < K.bottom && 0 < K.right && K.top < L.innerHeight && K.left < L.innerWidth) {
                  if (B += Lb(H), B > Hc) {
                    gt.length = ct;
                    break;
                  }
                  H = new Promise(
                    rD.bind(H)
                  ), gt.push(H);
                }
              }
            }
          if (0 < gt.length)
            return L = Promise.race([
              Promise.all(gt),
              new Promise(function(ht) {
                return setTimeout(ht, 500);
              })
            ]).then(c, c), (I ? Promise.allSettled([I.finished, L]) : L).then(u, u);
          if (c(), I)
            return I.finished.then(
              u,
              u
            );
          u();
        },
        types: a
      });
      U.__reactViewTransition = G;
      var Z = [];
      return G.ready.then(
        function() {
          for (var L = U.documentElement.getAnimations({
            subtree: !0
          }), I = 0; I < L.length; I++) {
            var ct = L[I], gt = ct.effect, Rt = gt.pseudoElement;
            if (Rt != null && Rt.startsWith("::view-transition")) {
              Z.push(ct), ct = gt.getKeyframes();
              for (var B = Rt = void 0, V = !0, H = 0; H < ct.length; H++) {
                var K = ct[H], ht = K.width;
                if (Rt === void 0) Rt = ht;
                else if (Rt !== ht) {
                  V = !1;
                  break;
                }
                if (ht = K.height, B === void 0) B = ht;
                else if (B !== ht) {
                  V = !1;
                  break;
                }
                delete K.width, delete K.height, K.transform === "none" && delete K.transform;
              }
              V && Rt !== void 0 && B !== void 0 && (gt.setKeyframes(ct), V = getComputedStyle(
                gt.target,
                gt.pseudoElement
              ), V.width !== Rt || V.height !== B) && (V = ct[0], V.width = Rt, V.height = B, V = ct[ct.length - 1], V.width = Rt, V.height = B, gt.setKeyframes(ct));
            }
          }
          y();
        },
        function(L) {
          U.__reactViewTransition === G && (U.__reactViewTransition = null);
          try {
            typeof L == "object" && L !== null && L.name === "InvalidStateError" && (L.message === "View transition was skipped because document visibility state is hidden." || L.message === "Skipping view transition because document visibility state has become hidden." || L.message === "Skipping view transition because viewport size changed." || L.message === "Transition was aborted because of invalid state") && (L = null), L !== null && _(L);
          } finally {
            s(), c(), y();
          }
        }
      ), G.finished.finally(function() {
        for (var L = 0; L < Z.length; L++)
          Z[L].cancel();
        U.__reactViewTransition === G && (U.__reactViewTransition = null), T();
      }), G;
    } catch {
      return s(), c(), y(), null;
    }
  }
  function co(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  co.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : N({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, co.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, a = t.getAnimations({ subtree: !0 }), s = [], c = 0; c < a.length; c++) {
      var u = a[c].effect;
      u !== null && u.target === t && u.pseudoElement === e && s.push(a[c]);
    }
    return s;
  }, co.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function gb(t) {
    return {
      name: t,
      group: new co("group", t),
      imagePair: new co("image-pair", t),
      old: new co("old", t),
      new: new co("new", t)
    };
  }
  function Sn(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Sn.prototype.addEventListener = function(t, e, a) {
    var s = null, c = null;
    if (!(a != null && typeof a != "boolean" && (s = a.signal || null, s !== null && s.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (yb(u, t, e, a) === -1) {
        var y = this, T = e;
        a != null && typeof a != "boolean" && a.once === !0 && (T = function(_) {
          y.removeEventListener(
            t,
            e,
            a
          ), typeof e == "function" ? e.call(this, _) : e.handleEvent(_);
        }), s !== null && (c = y.removeEventListener.bind(
          y,
          t,
          e,
          a
        ), s.addEventListener("abort", c, { once: !0 }), c = s.removeEventListener.bind(s, "abort", c)), s = gr(a), u.push({
          type: t,
          listener: e,
          optionsOrUseCapture: a,
          attachedListener: T,
          cleanup: c
        }), m(
          this._fragmentFiber.child,
          !1,
          lD,
          t,
          T,
          s
        );
      }
      this._eventListeners = u;
    }
  };
  function lD(t, e, a, s) {
    return C(t).addEventListener(
      e,
      a,
      s
    ), !1;
  }
  Sn.prototype.removeEventListener = function(t, e, a) {
    var s = this._eventListeners;
    if (s !== null && (e = yb(
      s,
      t,
      e,
      a
    ), e !== -1)) {
      var c = s[e];
      a = c.attachedListener;
      var u = c.cleanup;
      c = gr(c.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        cD,
        t,
        a,
        c
      ), s.splice(e, 1), u !== null && u();
    }
  };
  function cD(t, e, a, s) {
    return C(t).removeEventListener(
      e,
      a,
      s
    ), !1;
  }
  function gr(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function vb(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function yb(t, e, a, s) {
    if (t.length === 0) return -1;
    s = vb(s);
    for (var c = 0; c < t.length; c++) {
      var u = t[c];
      if (u.type === e && u.listener === a && vb(u.optionsOrUseCapture) === s)
        return c;
    }
    return -1;
  }
  Sn.prototype.dispatchEvent = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = C(e);
    var a = this._eventListeners;
    if (a !== null && 0 < a.length || !t.bubbles) {
      var s = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (a)
        for (var c = 0; c < a.length; c++) {
          var u = a[c];
          s.addEventListener(
            u.type,
            u.attachedListener,
            gr(u.optionsOrUseCapture)
          );
        }
      if (e.appendChild(s), t = s.dispatchEvent(t), a)
        for (c = 0; c < a.length; c++)
          u = a[c], s.removeEventListener(
            u.type,
            u.attachedListener,
            gr(u.optionsOrUseCapture)
          );
      return e.removeChild(s), t;
    }
    return e.dispatchEvent(t);
  }, Sn.prototype.focus = function(t) {
    m(
      this._fragmentFiber.child,
      !0,
      bb,
      t,
      void 0,
      void 0
    );
  };
  function bb(t, e) {
    return t.tag === 6 ? !1 : (t = C(t), SD(t, e));
  }
  Sn.prototype.focusLast = function(t) {
    var e = [];
    m(
      this._fragmentFiber.child,
      !0,
      Rh,
      e,
      void 0,
      void 0
    );
    for (var a = e.length - 1; 0 <= a && !bb(e[a], t); a--) ;
  };
  function Rh(t, e) {
    return e.push(t), !1;
  }
  Sn.prototype.blur = function() {
    var t = b(
      this._fragmentFiber
    );
    t !== null && (t = C(t), t = Bs(t).activeElement, t !== null && m(
      this._fragmentFiber.child,
      !1,
      uD,
      t,
      void 0,
      void 0
    ));
  };
  function uD(t, e) {
    return t.tag === 6 ? !1 : (t = C(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Sn.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), m(
      this._fragmentFiber.child,
      !1,
      fD,
      t,
      void 0,
      void 0
    );
  };
  function fD(t, e) {
    return t.tag === 6 || (t = C(t), e.observe(t)), !1;
  }
  Sn.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), m(
        this._fragmentFiber.child,
        !1,
        dD,
        t,
        void 0,
        void 0
      );
      for (var a = e = 0; a < Fn.length; a++) {
        var s = Fn[a];
        s.fragmentInstance === this && s.observer === t ? t.unobserve(s.instance) : Fn[e++] = s;
      }
      Fn.length = e;
    }
  };
  function dD(t, e) {
    return t.tag === 6 || (t = C(t), e.unobserve(t)), !1;
  }
  var Fn = [], Dh = !1;
  function hD(t, e, a) {
    Fn.push({
      fragmentInstance: t,
      observer: e,
      instance: a
    }), Dh || (Dh = !0, wD(function() {
      Dh = !1;
      var s = Fn;
      Fn = [];
      for (var c = 0; c < s.length; c++) {
        var u = s[c];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  Sn.prototype.getClientRects = function() {
    var t = [];
    return m(
      this._fragmentFiber.child,
      !1,
      mD,
      t,
      void 0,
      void 0
    ), t;
  };
  function mD(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var a = t.ownerDocument.createRange();
      a.selectNodeContents(t), e.push.apply(e, a.getClientRects());
    } else
      t = C(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Sn.prototype.getRootNode = function(t) {
    var e = b(
      this._fragmentFiber
    );
    return e === null ? this : C(e).getRootNode(t);
  }, Sn.prototype.compareDocumentPosition = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var a = [];
    m(
      this._fragmentFiber.child,
      !1,
      Rh,
      a,
      void 0,
      void 0
    );
    var s = C(e);
    if (a.length === 0) {
      if (a = s, S(this._fragmentFiber)) {
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
      var c = s = a.compareDocumentPosition(t);
      return a === t ? c = Node.DOCUMENT_POSITION_CONTAINS : s & Node.DOCUMENT_POSITION_CONTAINED_BY && (a = w(e)[1], a === null ? c = Node.DOCUMENT_POSITION_PRECEDING : (t = C(a).compareDocumentPosition(
        t
      ), c = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), c |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = C(a[0]), c = C(a[a.length - 1]);
    var u = S(this._fragmentFiber) ? e.parentElement : s;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    s = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var y = e.compareDocumentPosition(t), T = c.compareDocumentPosition(t), _ = y & Node.DOCUMENT_POSITION_CONTAINED_BY || T & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return T = s && u && y & Node.DOCUMENT_POSITION_FOLLOWING && T & Node.DOCUMENT_POSITION_PRECEDING, e = s && e === t || u && c === t || _ || T ? Node.DOCUMENT_POSITION_CONTAINED_BY : !s && e === t || !u && c === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : y, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || pD(
      e,
      this._fragmentFiber,
      a[0],
      a[a.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function pD(t, e, a, s, c) {
    var u = Ia(c);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (a = !!u)
        t: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === e || u.alternate === e)) {
              a = !0;
              break t;
            }
            u = u.return;
          }
          a = !1;
        }
      return a;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return u = c.ownerDocument, c === u || c === u.documentElement || c === u.body;
      t: {
        for (u = e, e = b(e); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== e && u.alternate !== e)) {
            u = !0;
            break t;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === a) && (e = k(
      a,
      u,
      P
    ), e === null ? e = !1 : (m(
      e,
      !0,
      D,
      u,
      a
    ), u = R, R = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === s) && (e = k(
      s,
      u,
      P
    ), e === null ? e = !1 : (m(
      e,
      !0,
      O,
      u,
      s
    ), u = R, z = R = null, e = u !== null)), e) : !1;
  }
  function xb(t, e) {
    var a = t.ownerDocument.createRange();
    a.selectNodeContents(t), t = a.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Sn.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    m(
      this._fragmentFiber.child,
      !1,
      Rh,
      e,
      void 0,
      void 0
    );
    var a = t !== !1;
    if (e.length === 0) {
      var s = w(
        this._fragmentFiber
      );
      if (s = a ? s[1] || s[0] || b(this._fragmentFiber) : s[0] || s[1], s === null) return;
      if (s.tag === 6) {
        t = C(s), xb(t, a);
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
      var c = e[s];
      c.tag === 6 ? (c = C(c), xb(c, a)) : C(c).scrollIntoView(t), s += a ? -1 : 1;
    }
  };
  function gD(t, e) {
    return t = C(t), Sb(t, e), !1;
  }
  function Sb(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function wb(t, e) {
    var a = e._eventListeners;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var c = a[s];
        t.addEventListener(
          c.type,
          c.attachedListener,
          gr(c.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(u) {
      for (var y = 0, T = 0; T < Fn.length; T++) {
        var _ = Fn[T];
        (_.fragmentInstance !== e || _.observer !== u || _.instance !== t) && (Fn[y++] = _);
      }
      Fn.length = y, u.observe(t);
    }), Sb(t, e));
  }
  function vD(t, e) {
    var a = e._eventListeners;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var c = a[s];
        t.removeEventListener(
          c.type,
          c.attachedListener,
          gr(c.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(u) {
      typeof u.rootMargin == "string" ? hD(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Oh(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Oh(a), Ol(a);
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
  function yD(t, e, a, s) {
    for (; t.nodeType === 1; ) {
      var c = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (s) {
        if (!t[es])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== c.rel || t.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || t.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (c.src == null ? null : c.src) || t.getAttribute("type") !== (c.type == null ? null : c.type) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = zn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function bD(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = zn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Tb(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = zn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Mh(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function _h(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function xD(t, e) {
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
  function zn(t) {
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
  var Nh = null;
  function Eb(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0)
            return zn(t.nextSibling);
          e--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Cb(t) {
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
  function SD(t, e) {
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
  function wD(t) {
    fb(function() {
      fb(function(e) {
        return t(e);
      });
    });
  }
  function Ab(t, e, a) {
    switch (e = Bs(a), t) {
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
  function Rb(t, e, a) {
    for (var s in a) {
      var c = a[s];
      a.hasOwnProperty(s) && c != null && Ft(t, e, s, null, $R, c);
    }
    a.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === ii && (t.onclick = null), Ol(t);
  }
  function zh(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ol(t);
  }
  var jn = /* @__PURE__ */ new Map(), Db = /* @__PURE__ */ new Set();
  function Ps(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Ui = st.d;
  st.d = {
    f: TD,
    r: ED,
    D: CD,
    C: AD,
    L: RD,
    m: DD,
    X: MD,
    S: OD,
    M: _D
  };
  function TD() {
    var t = Ui.f(), e = Nc();
    return t || e;
  }
  function ED(t) {
    var e = Vo(t);
    e !== null && e.tag === 5 && e.type === "form" ? My(e) : Ui.r(t);
  }
  var vr = typeof document > "u" ? null : document;
  function Ob(t, e, a) {
    var s = vr;
    if (s && typeof e == "string" && e) {
      var c = An(e);
      c = 'link[rel="' + t + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Db.has(c) || (Db.add(c), t = { rel: t, crossOrigin: a, href: e }, s.querySelector(c) === null && (e = s.createElement("link"), He(e, "link", t), De(e), s.head.appendChild(e)));
    }
  }
  function CD(t) {
    Ui.D(t), Ob("dns-prefetch", t, null);
  }
  function AD(t, e) {
    Ui.C(t, e), Ob("preconnect", t, e);
  }
  function RD(t, e, a) {
    Ui.L(t, e, a);
    var s = vr;
    if (s && t && e) {
      var c = 'link[rel="preload"][as="' + An(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + An(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + An(
        a.imageSizes
      ) + '"]')) : c += '[href="' + An(t) + '"]';
      var u = c;
      switch (e) {
        case "style":
          u = yr(t);
          break;
        case "script":
          u = br(t);
      }
      if (!(jn.has(u) || (t = N(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), jn.set(u, t), s.querySelector(c) !== null || e === "style" && s.querySelector(Us(u)) || e === "script" && s.querySelector(ks(u))))) {
        var y = s.createElement("link");
        He(y, "link", t), e === "style" && (y[Dl] = !0, y.onload = y.onerror = function() {
          Ig(y);
        }), De(y), s.head.appendChild(y);
      }
    }
  }
  function DD(t, e) {
    Ui.m(t, e);
    var a = vr;
    if (a && t) {
      var s = e && typeof e.as == "string" ? e.as : "script", c = 'link[rel="modulepreload"][as="' + An(s) + '"][href="' + An(t) + '"]', u = c;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = br(t);
      }
      if (!jn.has(u) && (t = N({ rel: "modulepreload", href: t }, e), jn.set(u, t), a.querySelector(c) === null)) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ks(u)))
              return;
        }
        s = a.createElement("link"), He(s, "link", t), De(s), a.head.appendChild(s);
      }
    }
  }
  function OD(t, e, a) {
    Ui.S(t, e, a);
    var s = vr;
    if (s && t) {
      var c = Lo(s).hoistableStyles, u = yr(t);
      e = e || "default";
      var y = c.get(u);
      if (!y) {
        var T = { loading: 0, preload: null };
        if (y = s.querySelector(
          Us(u)
        ))
          T.loading = 5;
        else {
          t = N(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = jn.get(u)) && jh(t, a);
          var _ = y = s.createElement("link");
          De(_), He(_, "link", t), _._p = new Promise(function(U, G) {
            _.onload = U, _.onerror = G;
          }), _.addEventListener("load", function() {
            T.loading |= 1;
          }), _.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, Uc(y, e, s);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: T
        }, c.set(u, y);
      }
    }
  }
  function MD(t, e) {
    Ui.X(t, e);
    var a = vr;
    if (a && t) {
      var s = Lo(a).hoistableScripts, c = br(t), u = s.get(c);
      u || (u = a.querySelector(ks(c)), u || (t = N({ src: t, async: !0 }, e), (e = jn.get(c)) && Vh(t, e), u = a.createElement("script"), De(u), He(u, "link", t), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, s.set(c, u));
    }
  }
  function _D(t, e) {
    Ui.M(t, e);
    var a = vr;
    if (a && t) {
      var s = Lo(a).hoistableScripts, c = br(t), u = s.get(c);
      u || (u = a.querySelector(ks(c)), u || (t = N({ src: t, async: !0, type: "module" }, e), (e = jn.get(c)) && Vh(t, e), u = a.createElement("script"), De(u), He(u, "link", t), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, s.set(c, u));
    }
  }
  function Mb(t, e, a, s) {
    var c = (c = ei.current) ? Ps(c) : null;
    if (!c) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (a = yr(a.href), e = Lo(
          c
        ).hoistableStyles, s = e.get(a), s || (s = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(a, s)), s) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = yr(a.href);
          var u = Lo(
            c
          ).hoistableStyles, y = u.get(t);
          if (y || (c = c.ownerDocument || c, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, y), (u = c.querySelector(
            Us(t)
          )) ? u._p || (y.instance = u, y.state.loading = 5) : (u = jn.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, jn.set(t, u)), ND(
            c,
            t,
            u,
            y.state
          ))), e && s === null)
            throw Error(r(528, ""));
          return y;
        }
        if (e && s !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = br(a), e = Lo(
          c
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
  function yr(t) {
    return 'href="' + An(t) + '"';
  }
  function Us(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function _b(t) {
    return N({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function ND(t, e, a, s) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[Dl] !== !0) {
        s.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[Dl] = !0, e.onload = e.onerror = Ig.bind(null, e), He(e, "link", a), De(e), t.head.appendChild(e);
    s.preload = e, e.addEventListener("load", function() {
      return s.loading |= 1;
    }), e.addEventListener("error", function() {
      return s.loading |= 2;
    });
  }
  function br(t) {
    return '[src="' + An(t) + '"]';
  }
  function ks(t) {
    return "script[async]" + t;
  }
  function Nb(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var s = t.querySelector(
            'style[data-href~="' + An(a.href) + '"]'
          );
          if (s)
            return e.instance = s, De(s), s;
          var c = N({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return s = (t.ownerDocument || t).createElement(
            "style"
          ), De(s), He(s, "style", c), Uc(s, a.precedence, t), e.instance = s;
        case "stylesheet":
          c = yr(a.href);
          var u = t.querySelector(
            Us(c)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, De(u), u;
          s = _b(a), (c = jn.get(c)) && jh(s, c), u = (t.ownerDocument || t).createElement("link"), De(u);
          var y = u;
          return y._p = new Promise(function(T, _) {
            y.onload = T, y.onerror = _;
          }), He(u, "link", s), e.state.loading |= 4, Uc(u, a.precedence, t), e.instance = u;
        case "script":
          return u = br(a.src), (c = t.querySelector(
            ks(u)
          )) ? (e.instance = c, De(c), c) : (s = a, (c = jn.get(u)) && (s = N({}, a), Vh(s, c)), t = t.ownerDocument || t, c = t.createElement("script"), De(c), He(c, "link", s), t.head.appendChild(c), e.instance = c);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (s = e.instance, e.state.loading |= 4, Uc(s, a.precedence, t));
    return e.instance;
  }
  function Uc(t, e, a) {
    for (var s = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = s.length ? s[s.length - 1] : null, u = c, y = 0; y < s.length; y++) {
      var T = s[y];
      if (T.dataset.precedence === e) u = T;
      else if (u !== c) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function jh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Vh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var kc = null;
  function zb(t, e, a) {
    if (kc === null) {
      var s = /* @__PURE__ */ new Map(), c = kc = /* @__PURE__ */ new Map();
      c.set(a, s);
    } else
      c = kc, s = c.get(a), s || (s = /* @__PURE__ */ new Map(), c.set(a, s));
    if (s.has(t)) return s;
    for (s.set(t, null), a = a.getElementsByTagName(t), c = 0; c < a.length; c++) {
      var u = a[c];
      if (!(u[es] || u[Le] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = u.getAttribute(e) || "";
        y = t + y;
        var T = s.get(y);
        T ? T.push(u) : s.set(y, [u]);
      }
    }
    return s;
  }
  function Lh(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function zD(t, e, a) {
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
  function jb(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Vb(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Lb(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Bb(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Lb(e), t.suspenseyImages.push(e)), t = LD.bind(t), e.decode().then(t, t));
  }
  function jD(t, e, a, s) {
    if (a.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var c = yr(s.href), u = e.querySelector(
          Us(c)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Hs.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = u, De(u);
          return;
        }
        u = e.ownerDocument || e, s = _b(s), (c = jn.get(c)) && jh(s, c), u = u.createElement("link"), De(u);
        var y = u;
        y._p = new Promise(function(T, _) {
          y.onload = T, y.onerror = _;
        }), He(u, "link", s), a.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = Hs.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var Hc = 0;
  function VD(t, e) {
    return t.stylesheets && t.count === 0 && Gc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var s = setTimeout(function() {
        if (t.stylesheets && Gc(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Hc === 0 && (Hc = 62500 * WR());
      var c = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Gc(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Hc ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(s), clearTimeout(c);
      };
    } : null;
  }
  function Pb(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Gc(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function Hs() {
    this.count--, Pb(this);
  }
  function LD() {
    this.imgCount--, Pb(this);
  }
  var Ic = null;
  function Gc(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ic = /* @__PURE__ */ new Map(), e.forEach(BD, t), Ic = null, Hs.call(t));
  }
  function BD(t, e) {
    if (!(e.state.loading & 4)) {
      var a = Ic.get(t);
      if (a) var s = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Ic.set(t, a);
        for (var c = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < c.length; u++) {
          var y = c[u];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y), s = y);
        }
        s && a.set(null, s);
      }
      c = e.instance, y = c.getAttribute("data-precedence"), u = a.get(y) || s, u === s && a.set(null, c), a.set(y, c), this.count++, s = Hs.bind(this), c.addEventListener("load", s), c.addEventListener("error", s), u ? u.parentNode.insertBefore(c, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(c, t.firstChild)), e.state.loading |= 4;
    }
  }
  var xr = {
    $$typeof: dt,
    Provider: null,
    Consumer: null,
    _currentValue: Dt,
    _currentValue2: Dt,
    _threadCount: 0
  };
  function PD(t, e, a, s, c, u, y, T, _) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.hiddenUpdates = gf(null), this.identifierPrefix = s, this.onUncaughtError = c, this.onCaughtError = u, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ub(t, e, a, s, c, u, y, T, _, U, G, Z) {
    return t = new PD(
      t,
      e,
      a,
      y,
      _,
      U,
      G,
      Z,
      T
    ), e = 1, u === !0 && (e |= 24), u = an(3, null, null, e), t.current = u, u.stateNode = t, e = $f(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: s,
      isDehydrated: a,
      cache: e
    }, ed(u), t;
  }
  function kb(t) {
    return t ? (t = Fo, t) : Fo;
  }
  function Hb(t, e, a, s, c, u) {
    c = kb(c), s.context === null ? s.context = c : s.pendingContext = c, s = ua(e), s.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (s.callback = u), a = fa(t, s, e), a !== null && (ln(a, t, e), ys(a, t, e));
  }
  function Ib(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Bh(t, e) {
    Ib(t, e), (t = t.alternate) && Ib(t, e);
  }
  function Gb(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fa(t, 67108864);
      e !== null && ln(e, t, 67108864), Bh(t, 67108864);
    }
  }
  function Yb(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = xn();
      e = vf(e);
      var a = Fa(t, e);
      a !== null && ln(a, t, e), Bh(t, e);
    }
  }
  var Sr = !0;
  function UD(t, e, a, s) {
    var c = nt.T;
    nt.T = null;
    var u = st.p;
    try {
      st.p = 2, Ph(t, e, a, s);
    } finally {
      st.p = u, nt.T = c;
    }
  }
  function kD(t, e, a, s) {
    var c = nt.T;
    nt.T = null;
    var u = st.p;
    try {
      st.p = 8, Ph(t, e, a, s);
    } finally {
      st.p = u, nt.T = c;
    }
  }
  function Ph(t, e, a, s) {
    if (Sr) {
      var c = Uh(s);
      if (c === null)
        bh(
          t,
          e,
          s,
          Yc,
          a
        ), Fb(t, s);
      else if (ID(
        c,
        t,
        e,
        a,
        s
      ))
        s.stopPropagation();
      else if (Fb(t, s), e & 4 && -1 < HD.indexOf(t)) {
        for (; c !== null; ) {
          var u = Vo(c);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var y = Ha(u.pendingLanes);
                  if (y !== 0) {
                    var T = u;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; y; ) {
                      var _ = 1 << 31 - kt(y);
                      T.entanglements[1] |= _, y &= ~_;
                    }
                    hi(u), (Ht & 6) === 0 && (Oc = Fe() + 500, js(0));
                  }
                }
                break;
              case 31:
              case 13:
                T = Fa(u, 2), T !== null && ln(T, u, 2), Nc(), Bh(u, 2);
            }
          if (u = Uh(s), u === null && bh(
            t,
            e,
            s,
            Yc,
            a
          ), u === c) break;
          c = u;
        }
        c !== null && s.stopPropagation();
      } else
        bh(
          t,
          e,
          s,
          null,
          a
        );
    }
  }
  function Uh(t) {
    return t = Ef(t), kh(t);
  }
  var Yc = null;
  function kh(t) {
    if (Yc = null, t = Ia(t), t !== null) {
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
    return Yc = t, null;
  }
  function qb(t) {
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
        switch (Zr()) {
          case kn:
            return 2;
          case Qr:
            return 8;
          case zo:
          case Cl:
            return 32;
          case $r:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hh = !1, Ta = null, Ea = null, Ca = null, Is = /* @__PURE__ */ new Map(), Gs = /* @__PURE__ */ new Map(), Aa = [], HD = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Fb(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ta = null;
        break;
      case "dragenter":
      case "dragleave":
        Ea = null;
        break;
      case "mouseover":
      case "mouseout":
        Ca = null;
        break;
      case "pointerover":
      case "pointerout":
        Is.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gs.delete(e.pointerId);
    }
  }
  function Ys(t, e, a, s, c, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: s,
      nativeEvent: u,
      targetContainers: [c]
    }, e !== null && (e = Vo(e), e !== null && Gb(e)), t) : (t.eventSystemFlags |= s, e = t.targetContainers, c !== null && e.indexOf(c) === -1 && e.push(c), t);
  }
  function ID(t, e, a, s, c) {
    switch (e) {
      case "focusin":
        return Ta = Ys(
          Ta,
          t,
          e,
          a,
          s,
          c
        ), !0;
      case "dragenter":
        return Ea = Ys(
          Ea,
          t,
          e,
          a,
          s,
          c
        ), !0;
      case "mouseover":
        return Ca = Ys(
          Ca,
          t,
          e,
          a,
          s,
          c
        ), !0;
      case "pointerover":
        var u = c.pointerId;
        return Is.set(
          u,
          Ys(
            Is.get(u) || null,
            t,
            e,
            a,
            s,
            c
          )
        ), !0;
      case "gotpointercapture":
        return u = c.pointerId, Gs.set(
          u,
          Ys(
            Gs.get(u) || null,
            t,
            e,
            a,
            s,
            c
          )
        ), !0;
    }
    return !1;
  }
  function Xb(t) {
    var e = Ia(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = d(a), e !== null) {
            t.blockedOn = e, Ug(t.priority, function() {
              Yb(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = h(a), e !== null) {
            t.blockedOn = e, Ug(t.priority, function() {
              Yb(a);
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
  function qc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Uh(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var s = new a.constructor(
          a.type,
          a
        );
        Tf = s, a.target.dispatchEvent(s), Tf = null;
      } else
        return e = Vo(a), e !== null && Gb(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function Kb(t, e, a) {
    qc(t) && a.delete(e);
  }
  function GD() {
    Hh = !1, Ta !== null && qc(Ta) && (Ta = null), Ea !== null && qc(Ea) && (Ea = null), Ca !== null && qc(Ca) && (Ca = null), Is.forEach(Kb), Gs.forEach(Kb);
  }
  function Fc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Hh || (Hh = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      GD
    )));
  }
  var Xc = null;
  function Zb(t) {
    Xc !== t && (Xc = t, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        Xc === t && (Xc = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], s = t[e + 1], c = t[e + 2];
          if (typeof s != "function") {
            if (kh(s || a) === null)
              continue;
            break;
          }
          var u = Vo(a);
          u !== null && (t.splice(e, 3), e -= 3, wd(
            u,
            {
              pending: !0,
              data: c,
              method: a.method,
              action: s
            },
            s,
            c
          ));
        }
      }
    ));
  }
  function wr(t) {
    function e(_) {
      return Fc(_, t);
    }
    Ta !== null && Fc(Ta, t), Ea !== null && Fc(Ea, t), Ca !== null && Fc(Ca, t), Is.forEach(e), Gs.forEach(e);
    for (var a = 0; a < Aa.length; a++) {
      var s = Aa[a];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < Aa.length && (a = Aa[0], a.blockedOn === null); )
      Xb(a), a.blockedOn === null && Aa.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (s = 0; s < a.length; s += 3) {
        var c = a[s], u = a[s + 1], y = c[nn] || null;
        if (typeof u == "function")
          y || Zb(a);
        else if (y) {
          var T = null;
          if (u && u.hasAttribute("formAction")) {
            if (c = u, y = u[nn] || null)
              T = y.formAction;
            else if (kh(c) !== null) continue;
          } else T = y.action;
          typeof T == "function" ? a[s + 1] = T : (a.splice(s, 3), s -= 3), Zb(a);
        }
      }
  }
  function Qb() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(y) {
            return c = y;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      c !== null && (c(), c = null), s || setTimeout(a, 20);
    }
    function a() {
      if (!s && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var s = !1, c = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        s = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), c !== null && (c(), c = null);
      };
    }
  }
  function Ih(t) {
    this._internalRoot = t;
  }
  Kc.prototype.render = Ih.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var a = e.current, s = xn();
    Hb(a, s, t, e, null, null);
  }, Kc.prototype.unmount = Ih.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Hb(t.current, 2, null, t, null, null), Nc(), e[jo] = null;
    }
  };
  function Kc(t) {
    this._internalRoot = t;
  }
  Kc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Pg();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < Aa.length && e !== 0 && e < Aa[a].priority; a++) ;
      Aa.splice(a, 0, t), a === 0 && Xb(t);
    }
  };
  var $b = i.version;
  if ($b !== "19.3.0")
    throw Error(
      r(
        527,
        $b,
        "19.3.0"
      )
    );
  st.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = p(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var YD = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: nt,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zc.isDisabled && Zc.supportsFiber)
      try {
        oe = Zc.inject(
          YD
        ), Zt = Zc;
      } catch {
      }
  }
  return Fs.createRoot = function(t, e) {
    if (!l(t)) throw Error(r(299));
    var a = !1, s = "", c = ky, u = Hy, y = Iy;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (s = e.identifierPrefix), e.onUncaughtError !== void 0 && (c = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (y = e.onRecoverableError)), e = Ub(
      t,
      1,
      !1,
      null,
      null,
      a,
      s,
      null,
      c,
      u,
      y,
      Qb
    ), t[jo] = e.current, yh(t), new Ih(e);
  }, Fs.hydrateRoot = function(t, e, a) {
    if (!l(t)) throw Error(r(299));
    var s = !1, c = "", u = ky, y = Hy, T = Iy, _ = null;
    return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (y = a.onCaughtError), a.onRecoverableError !== void 0 && (T = a.onRecoverableError), a.formState !== void 0 && (_ = a.formState)), e = Ub(
      t,
      1,
      !0,
      e,
      a ?? null,
      s,
      c,
      _,
      u,
      y,
      T,
      Qb
    ), e.context = kb(null), a = e.current, s = xn(), s = vf(s), c = ua(s), c.callback = null, fa(a, c, s), a = s, e.current.lanes = a, ts(e, a), hi(e), t[jo] = e.current, yh(t), new Kc(e);
  }, Fs.version = "19.3.0", Fs;
}
var ux;
function t2() {
  if (ux) return Fh.exports;
  ux = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Fh.exports = WD(), Fh.exports;
}
var e2 = t2();
const Sp = x.createContext({});
function Ur(n) {
  const i = x.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const n2 = typeof window < "u", Lr = n2 ? x.useLayoutEffect : x.useEffect, Fu = /* @__PURE__ */ x.createContext(null);
function wp(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Du(n, i) {
  const o = n.indexOf(i);
  o > -1 && n.splice(o, 1);
}
const Ji = (n, i, o) => o > i ? i : o < n ? n : o;
let Xu = () => {
};
const bi = {}, Tp = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n), P1 = (n) => typeof n == "object" && n !== null, Ep = (n) => /^0[^.\s]+$/u.test(n);
// @__NO_SIDE_EFFECTS__
function U1(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const Jn = /* @__NO_SIDE_EFFECTS__ */ (n) => n, pl = (...n) => n.reduce((i, o) => (r) => o(i(r))), il = /* @__NO_SIDE_EFFECTS__ */ (n, i, o) => {
  const r = i - n;
  return r ? (o - n) / r : 1;
};
class Ou {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return wp(this.subscriptions, i), () => this.remove(i);
  }
  remove(i) {
    Du(this.subscriptions, i);
  }
  notify(i, o, r) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1)
        this.subscriptions[0](i, o, r);
      else
        for (let f = 0; f < l; f++) {
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
const Bn = /* @__NO_SIDE_EFFECTS__ */ (n) => n * 1e3, Ln = /* @__NO_SIDE_EFFECTS__ */ (n) => n / 1e3, k1 = /* @__NO_SIDE_EFFECTS__ */ (n, i) => i ? n * (1e3 / i) : 0, H1 = (n, i, o) => (((1 - 3 * o + 3 * i) * n + (3 * o - 6 * i)) * n + 3 * i) * n, i2 = 1e-7, a2 = 12;
function o2(n, i, o, r, l) {
  let f, d, h = 0;
  do
    d = i + (o - i) / 2, f = H1(d, r, l) - n, f > 0 ? o = d : i = d;
  while (Math.abs(f) > i2 && ++h < a2);
  return d;
}
// @__NO_SIDE_EFFECTS__
function gl(n, i, o, r) {
  if (n === i && o === r)
    return Jn;
  const l = (f) => o2(f, 0, 1, n, o);
  return (f) => f === 0 || f === 1 ? f : H1(l(f), i, r);
}
const I1 = /* @__NO_SIDE_EFFECTS__ */ (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2, G1 = /* @__NO_SIDE_EFFECTS__ */ (n) => (i) => 1 - n(1 - i), Y1 = /* @__PURE__ */ gl(0.33, 1.53, 0.69, 0.99), Cp = /* @__PURE__ */ G1(Y1), q1 = /* @__PURE__ */ I1(Cp), F1 = (n) => n >= 1 ? 1 : (n *= 2) < 1 ? 0.5 * Cp(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))), Ap = (n) => 1 - Math.sin(Math.acos(n)), X1 = /* @__PURE__ */ G1(Ap), K1 = /* @__PURE__ */ I1(Ap), r2 = /* @__PURE__ */ gl(0.42, 0, 1, 1), s2 = /* @__PURE__ */ gl(0, 0, 0.58, 1), Rp = /* @__PURE__ */ gl(0.42, 0, 0.58, 1), l2 = /* @__NO_SIDE_EFFECTS__ */ (n) => Array.isArray(n) && typeof n[0] != "number", Z1 = /* @__NO_SIDE_EFFECTS__ */ (n) => Array.isArray(n) && typeof n[0] == "number", c2 = {
  linear: Jn,
  easeIn: r2,
  easeInOut: Rp,
  easeOut: s2,
  circIn: Ap,
  circInOut: K1,
  circOut: X1,
  backIn: Cp,
  backInOut: q1,
  backOut: Y1,
  anticipate: F1
}, u2 = (n) => typeof n == "string", fx = (n) => {
  if (/* @__PURE__ */ Z1(n)) {
    Xu(n.length === 4);
    const [i, o, r, l] = n;
    return /* @__PURE__ */ gl(i, o, r, l);
  } else if (u2(n))
    return c2[n];
  return n;
}, Ce = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let mu;
function f2() {
  mu = void 0;
}
const je = {
  now: () => (mu === void 0 && je.set(Ce.isProcessing || bi.useManualTiming ? Ce.timestamp : performance.now()), mu),
  set: (n) => {
    mu = n, queueMicrotask(f2);
  }
}, zr = (n) => Math.round(n * 1e5) / 1e5, Q1 = (n) => (i) => typeof i == "string" && i.startsWith(n), $1 = /* @__PURE__ */ Q1("--"), d2 = /* @__PURE__ */ Q1("var(--"), Dp = (n) => d2(n) ? h2.test(n.split("/*")[0].trim()) : !1, h2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function dx(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const kr = {
  test: (n) => typeof n == "number",
  parse: parseFloat,
  transform: (n) => n
}, al = {
  ...kr,
  transform: (n) => Ji(0, 1, n)
}, Qc = {
  ...kr,
  default: 1
}, Op = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function m2(n) {
  return n == null;
}
const p2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Mp = (n, i) => (o) => !!(typeof o == "string" && p2.test(o) && o.startsWith(n) || i && !m2(o) && Object.prototype.hasOwnProperty.call(o, i)), J1 = (n, i, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [l, f, d, h] = r.match(Op);
  return {
    [n]: parseFloat(l),
    [i]: parseFloat(f),
    [o]: parseFloat(d),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, g2 = (n) => Ji(0, 255, n), Qh = {
  ...kr,
  transform: (n) => Math.round(g2(n))
}, vo = {
  test: /* @__PURE__ */ Mp("rgb", "red"),
  parse: /* @__PURE__ */ J1("red", "green", "blue"),
  transform: ({ red: n, green: i, blue: o, alpha: r = 1 }) => "rgba(" + Qh.transform(n) + ", " + Qh.transform(i) + ", " + Qh.transform(o) + ", " + zr(al.transform(r)) + ")"
};
function v2(n) {
  let i = "", o = "", r = "", l = "";
  return n.length > 5 ? (i = n.substring(1, 3), o = n.substring(3, 5), r = n.substring(5, 7), l = n.substring(7, 9)) : (i = n.substring(1, 2), o = n.substring(2, 3), r = n.substring(3, 4), l = n.substring(4, 5), i += i, o += o, r += r, l += l), {
    red: parseInt(i, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: l ? parseInt(l, 16) / 255 : 1
  };
}
const Mm = {
  test: /* @__PURE__ */ Mp("#"),
  parse: v2,
  transform: vo.transform
}, vl = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
  test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: (i) => `${i}${n}`
}), Hi = /* @__PURE__ */ vl("deg"), yi = /* @__PURE__ */ vl("%"), vt = /* @__PURE__ */ vl("px"), y2 = /* @__PURE__ */ vl("vh"), b2 = /* @__PURE__ */ vl("vw"), hx = {
  ...yi,
  parse: (n) => yi.parse(n) / 100,
  transform: (n) => yi.transform(n * 100)
}, Mr = {
  test: /* @__PURE__ */ Mp("hsl", "hue"),
  parse: /* @__PURE__ */ J1("hue", "saturation", "lightness"),
  transform: ({ hue: n, saturation: i, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(n) + ", " + yi.transform(zr(i)) + ", " + yi.transform(zr(o)) + ", " + zr(al.transform(r)) + ")"
}, Ae = {
  test: (n) => vo.test(n) || Mm.test(n) || Mr.test(n),
  parse: (n) => vo.test(n) ? vo.parse(n) : Mr.test(n) ? Mr.parse(n) : Mm.parse(n),
  transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? vo.transform(n) : Mr.transform(n),
  getAnimatableNone: (n) => {
    const i = Ae.parse(n);
    return i.alpha = 0, Ae.transform(i);
  }
}, x2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, W1 = /* @__PURE__ */ new RegExp(Op.source), tw = /* @__PURE__ */ new RegExp(x2.source, "i");
function S2(n) {
  return isNaN(n) && typeof n == "string" && (W1.test(n) || tw.test(n));
}
const ew = "number", nw = "color", w2 = "var", T2 = "var(", mx = "${}", E2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function C2(n) {
  const i = n.toString();
  return W1.test(i) || tw.test(i);
}
function ol(n) {
  const i = n.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, l = [];
  let f = 0;
  const h = i.replace(E2, (g) => (Ae.test(g) ? (r.color.push(f), l.push(nw), o.push(Ae.parse(g))) : g.startsWith(T2) ? (r.var.push(f), l.push(w2), o.push(g)) : (r.number.push(f), l.push(ew), o.push(parseFloat(g))), ++f, mx)).split(mx);
  return { values: o, split: h, indexes: r, types: l };
}
function A2(n) {
  return ol(n).values;
}
function iw({ split: n, types: i }) {
  const o = n.length;
  return (r) => {
    let l = "";
    for (let f = 0; f < o; f++)
      if (l += n[f], r[f] !== void 0) {
        const d = i[f];
        d === ew ? l += zr(r[f]) : d === nw ? l += Ae.transform(r[f]) : l += r[f];
      }
    return l;
  };
}
function R2(n) {
  return iw(ol(n));
}
const D2 = (n) => typeof n == "number" ? 0 : Ae.test(n) ? Ae.getAnimatableNone(n) : n, O2 = (n, i) => typeof n == "number" ? i?.trim().endsWith("/") ? n : 0 : D2(n);
function M2(n) {
  const i = ol(n);
  return iw(i)(i.values.map((r, l) => O2(r, i.split[l])));
}
const Tn = {
  test: S2,
  parse: A2,
  createTransformer: R2,
  getAnimatableNone: M2
};
function $h(n, i, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? n + (i - n) * 6 * o : o < 1 / 2 ? i : o < 2 / 3 ? n + (i - n) * (2 / 3 - o) * 6 : n;
}
function _2({ hue: n, saturation: i, lightness: o, alpha: r }) {
  n /= 360, i /= 100, o /= 100;
  let l = 0, f = 0, d = 0;
  if (!i)
    l = f = d = o;
  else {
    const h = o < 0.5 ? o * (1 + i) : o + i - o * i, g = 2 * o - h;
    l = $h(g, h, n + 1 / 3), f = $h(g, h, n), d = $h(g, h, n - 1 / 3);
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(f * 255),
    blue: Math.round(d * 255),
    alpha: r
  };
}
function Mu(n, i) {
  return (o) => o > 0 ? i : n;
}
const $t = (n, i, o) => n + (i - n) * o, Jh = (n, i, o) => {
  const r = n * n, l = o * (i * i - r) + r;
  return l < 0 ? 0 : Math.sqrt(l);
}, N2 = [Mm, vo, Mr], z2 = (n) => N2.find((i) => i.test(n));
function px(n) {
  const i = z2(n);
  if (!i)
    return !1;
  let o = i.parse(n);
  return i === Mr && (o = _2(o)), o;
}
const gx = (n, i) => {
  const o = px(n), r = px(i);
  if (!o || !r)
    return Mu(n, i);
  const l = { ...o };
  return (f) => (l.red = Jh(o.red, r.red, f), l.green = Jh(o.green, r.green, f), l.blue = Jh(o.blue, r.blue, f), l.alpha = $t(o.alpha, r.alpha, f), vo.transform(l));
}, _m = /* @__PURE__ */ new Set(["none", "hidden"]);
function j2(n, i) {
  return _m.has(n) ? (o) => o <= 0 ? n : i : (o) => o >= 1 ? i : n;
}
function V2(n, i) {
  return (o) => $t(n, i, o);
}
function _p(n) {
  return typeof n == "number" ? V2 : typeof n == "string" ? Dp(n) ? Mu : Ae.test(n) ? gx : P2 : Array.isArray(n) ? aw : typeof n == "object" ? Ae.test(n) ? gx : L2 : Mu;
}
function aw(n, i) {
  const o = [...n], r = o.length, l = n.map((f, d) => _p(f)(f, i[d]));
  return (f) => {
    for (let d = 0; d < r; d++)
      o[d] = l[d](f);
    return o;
  };
}
function L2(n, i) {
  const o = { ...n, ...i }, r = {};
  for (const l in o)
    n[l] !== void 0 && i[l] !== void 0 && (r[l] = _p(n[l])(n[l], i[l]));
  return (l) => {
    for (const f in r)
      o[f] = r[f](l);
    return o;
  };
}
function B2(n, i) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < i.values.length; l++) {
    const f = i.types[l], d = n.indexes[f][r[f]], h = n.values[d] ?? 0;
    o[l] = h, r[f]++;
  }
  return o;
}
const P2 = (n, i) => {
  const o = Tn.createTransformer(i), r = ol(n), l = ol(i);
  return r.indexes.var.length === l.indexes.var.length && r.indexes.color.length === l.indexes.color.length && r.indexes.number.length >= l.indexes.number.length ? _m.has(n) && !l.values.length || _m.has(i) && !r.values.length ? j2(n, i) : pl(aw(B2(r, l), l.values), o) : Mu(n, i);
}, vx = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function U2(n, i) {
  const o = vx.exec(n);
  if (!o)
    return;
  const r = vx.exec(i);
  if (!r || o[2] !== r[2])
    return;
  const l = o[2], f = parseFloat(o[1]), d = parseFloat(r[1]);
  return (h) => zr($t(f, d, h)) + l;
}
function Np(n, i, o) {
  if (typeof n == "number" && typeof i == "number" && typeof o == "number")
    return $t(n, i, o);
  if (typeof n == "string" && typeof i == "string") {
    const l = U2(n, i);
    if (l)
      return l;
  }
  return _p(n)(n, i);
}
const $c = [
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
function k2(n) {
  let i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, l = !1;
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
    schedule: (p, v = !1, m = !1) => {
      const S = m && r ? i : o;
      return v && f.add(p), S.add(p), p;
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
        l = !0;
        return;
      }
      r = !0;
      const v = i;
      i = o, o = v, i.forEach(h), i.clear(), r = !1, l && (l = !1, g.process(p));
    }
  };
  return g;
}
const H2 = 40;
function ow(n, i, o = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let r = !1, l = !0;
  const f = () => r = !0, d = $c.reduce((D, O) => (D[O] = k2(f), D), {}), { setup: h, read: g, resolveKeyframes: p, preUpdate: v, update: m, preRender: b, render: S, postRender: w } = d, A = () => {
    const D = bi.useManualTiming, O = D ? o.timestamp : performance.now();
    r = !1, D || (o.delta = l ? 1e3 / 60 : Math.max(Math.min(O - o.timestamp, H2), 1)), o.timestamp = O, o.isProcessing = !0, h.process(o), g.process(o), p.process(o), v.process(o), m.process(o), b.process(o), S.process(o), w.process(o), o.isProcessing = !1, r && i && (l = !1, n(A));
  }, C = () => {
    r = !0, l = !0, o.isProcessing || n(A);
  };
  return { schedule: $c.reduce((D, O) => {
    const P = d[O];
    return D[O] = (k, N = !1, M = !1) => (r || C(), P.schedule(k, N, M)), D;
  }, {}), cancel: (D) => {
    for (let O = 0; O < $c.length; O++)
      d[$c[O]].cancel(D);
  }, state: o, steps: d };
}
const { schedule: Xt, cancel: xi, steps: Wh } = /* @__PURE__ */ ow(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Jn, !0, Ce), I2 = (n) => {
  const i = ({ timestamp: o }) => n(o);
  return {
    start: (o = !0) => Xt.update(i, o),
    stop: () => xi(i),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ce.isProcessing ? Ce.timestamp : je.now()
  };
}, rw = (n, i, o = 10) => {
  let r = "";
  const l = Math.max(Math.round(i / o), 2);
  for (let f = 0; f < l; f++)
    r += Math.round(n(f / (l - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, zp = 2e4;
function jp(n, i = 50, o = zp, r) {
  let l = 0, f = n.next(l);
  for (; !f.done && l < o; )
    l += i, f = n.next(l);
  return l >= o ? 1 / 0 : l;
}
function G2(n, i = 100, o) {
  const r = o({ ...n, keyframes: [0, i] }), l = Math.min(jp(r), zp);
  return {
    type: "keyframes",
    ease: (f) => r.next(l * f).value / i,
    duration: /* @__PURE__ */ Ln(l)
  };
}
const Ge = {
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
}, sw = (n) => n < 0 ? 1 / Math.max(1 + n, Ge.minDamping) : Math.max(1 - n, Ge.minDamping);
function lw(n, i) {
  if (!(n > 1))
    return 1;
  const o = Math.sqrt(n * n - 1), r = n - o, l = n + o, f = 2 * o * Math.exp(-i) * (1 + i);
  return cw((d) => l * Math.exp(-r * d) - r * Math.exp(-l * d) - f, (d) => Math.exp(-l * d) - Math.exp(-r * d), i) / i;
}
function Nm(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const Y2 = 12;
function cw(n, i, o) {
  let r = o;
  for (let l = 1; l < Y2; l++)
    r = r - n(r) / i(r);
  return r;
}
const tm = 1e-3;
function q2({ duration: n = Ge.duration, bounce: i = Ge.bounce }) {
  let o, r;
  const l = sw(i);
  n = Ji(Ge.minDuration, Ge.maxDuration, /* @__PURE__ */ Ln(n)), l < 1 ? (o = (p) => {
    const v = p * l, m = v * n, b = Nm(p, l), S = Math.exp(-m);
    return tm - v / b * S;
  }, r = (p) => {
    const m = p * l * n, b = l * l * p * p * n, S = Math.exp(-m), w = Nm(p * p, l);
    return (-o(p) + tm > 0 ? -1 : 1) * -b * S / w;
  }) : (o = (p) => {
    const v = Math.exp(-p * n), m = p * n + 1;
    return -tm + v * m;
  }, r = (p) => {
    const v = Math.exp(-p * n), m = -p * (n * n);
    return v * m;
  });
  const f = 5 / n, d = cw(o, r, f), h = d * lw(l, d * n), g = h * h;
  return {
    stiffness: g,
    damping: l * 2 * Math.sqrt(g),
    duration: /* @__PURE__ */ Bn(n)
  };
}
const zm = (n, i) => (i ? n >= 0 : n > 0) && n < 1 / 0;
function em(n, i) {
  if (zm(n, i))
    return n;
}
function F2(n) {
  const i = em(n.stiffness), o = em(n.damping, !0), r = em(n.mass), l = {
    ...n,
    stiffness: i ?? Ge.stiffness,
    damping: o ?? Ge.damping,
    mass: r ?? Ge.mass,
    isResolvedFromDuration: !1,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (i ?? o ?? r) === void 0 && (n.duration !== void 0 || n.bounce !== void 0)
  };
  if (l.isTimeDefined) {
    if (n.visualDuration) {
      const f = sw(n.bounce || 0), d = 2 * Math.PI / (n.visualDuration * 1.2) * lw(f, 2 * Math.PI / 1.2);
      l.stiffness = d * d, l.damping = 2 * f * Math.sqrt(l.stiffness);
    } else
      Object.assign(l, q2(l)), l.isResolvedFromDuration = !0;
    (!zm(l.stiffness) || !zm(l.damping, !0)) && (l.stiffness = Ge.stiffness, l.damping = Ge.damping);
  }
  return l;
}
function rl(n = Ge.visualDuration, i = Ge.bounce) {
  const o = typeof n != "object" ? {
    visualDuration: n,
    keyframes: [0, 1],
    bounce: i
  } : n, r = o.keyframes[0], l = o.keyframes[o.keyframes.length - 1], f = { done: !1, value: r }, { stiffness: d, damping: h, mass: g, duration: p, isResolvedFromDuration: v, isTimeDefined: m } = F2({ ...o }), b = (N) => m ? 0 : -/* @__PURE__ */ Ln(N), S = h / (2 * Math.sqrt(d * g)), w = /* @__PURE__ */ Ln(Math.sqrt(d / g)), A = S * w, C = {
    target: l,
    delta: l - r,
    velocity: b(o.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, R = () => {
    const N = Math.abs(C.delta) < 5;
    C.restSpeed = o.restSpeed || (N ? Ge.restSpeed.granular : Ge.restSpeed.default), C.restDelta = o.restDelta || (N ? Ge.restDelta.granular : Ge.restDelta.default);
  };
  R();
  let z, D, O;
  if (S < 1) {
    const N = Nm(w, S), M = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    O = () => {
      M.A = (C.velocity + A * C.delta) / N, M.sinC = A * M.A + C.delta * N, M.cosC = A * C.delta - M.A * N;
    };
    const F = (J) => {
      J !== M.t && (M.t = J, M.env = Math.exp(-A * J), M.sin = Math.sin(N * J), M.cos = Math.cos(N * J));
    };
    z = (J) => (F(J), C.target - M.env * (M.A * M.sin + C.delta * M.cos)), D = (J) => (F(J), M.env * (M.sinC * M.sin + M.cosC * M.cos));
  } else if (S === 1) {
    z = (M) => C.target - Math.exp(-w * M) * (C.delta + (C.velocity + w * C.delta) * M);
    const N = { C: 0 };
    O = () => {
      N.C = C.velocity + w * C.delta;
    }, D = (M) => Math.exp(-w * M) * (w * N.C * M - C.velocity);
  } else {
    const N = w * Math.sqrt(S * S - 1), M = A - N, F = A + N, J = m ? 1 / 0 : 300 / N, ut = (rt, ft) => Math.exp(ft > J ? -rt * J - A * (ft - J) : -rt * ft), et = { S: 0, F: 0 };
    O = () => {
      const rt = (C.velocity + A * C.delta) / N;
      et.S = (C.delta + rt) / 2, et.F = (C.delta - rt) / 2;
    }, z = (rt) => C.target - et.S * ut(M, rt) - et.F * ut(F, rt), D = (rt) => M * et.S * ut(M, rt) + F * et.F * ut(F, rt);
  }
  O();
  const P = v && p || null, k = {
    calculatedDuration: P,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (N, M) => {
      C.target = N[N.length - 1], C.delta = C.target - N[0], C.velocity = b(M), o.restSpeed && o.restDelta || R(), k.calculatedDuration = P, f.done = !1, O();
    },
    velocity: (N) => /* @__PURE__ */ Bn(D(N)),
    next: (N) => {
      const M = z(N);
      if (v)
        f.done = N >= p;
      else {
        const F = /* @__PURE__ */ Bn(D(N));
        f.done = Math.abs(F) <= C.restSpeed && Math.abs(C.target - M) <= C.restDelta;
      }
      return f.value = f.done ? C.target : M, f;
    },
    toString: () => {
      const N = Math.min(jp(k), zp), M = rw((F) => k.next(N * F).value, N, 30);
      return N + "ms " + M;
    },
    toTransition: () => {
    }
  };
  return k;
}
rl.applyToOptions = (n) => {
  const i = G2(n, 100, rl);
  return n.ease = i.ease, n.duration = /* @__PURE__ */ Bn(i.duration), n.type = "keyframes", n;
};
function jm({ keyframes: n, velocity: i = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: l = 10, bounceStiffness: f = 500, modifyTarget: d, min: h, max: g, restDelta: p = 0.5, restSpeed: v }) {
  const m = n[0], b = {
    done: !1,
    value: m
  }, S = (N) => N < h || N > g, w = (N) => h === void 0 ? g : g === void 0 || Math.abs(h - N) < Math.abs(g - N) ? h : g;
  let A = o * i;
  const C = m + A, R = d === void 0 ? C : d(C);
  R !== C && (A = R - m);
  const z = (N) => -A * Math.exp(-N / r), D = (N) => {
    const M = z(N);
    b.done = Math.abs(M) <= p, b.value = b.done ? R : R + M;
  };
  let O, P;
  const k = (N) => {
    S(b.value) && (O = N, P = rl({
      keyframes: [b.value, w(b.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -z(N) / r * 1e3,
      damping: l,
      stiffness: f,
      restDelta: p,
      restSpeed: v
    }));
  };
  return k(0), {
    calculatedDuration: null,
    next: (N) => {
      let M = !1;
      return !P && O === void 0 && (M = !0, D(N), k(N)), O !== void 0 && N >= O ? P.next(N - O) : (!M && D(N), b);
    }
  };
}
function X2(n, i, o) {
  const r = [], l = o || bi.mix || Np, f = n.length - 1;
  for (let d = 0; d < f; d++) {
    let h = l(n[d], n[d + 1]);
    if (i) {
      const g = Array.isArray(i) ? i[d] || Jn : i;
      h = pl(g, h);
    }
    r.push(h);
  }
  return r;
}
function uw(n, i, { clamp: o = !0, ease: r, mixer: l } = {}) {
  const f = n.length;
  if (Xu(f === i.length), f === 1)
    return () => i[0];
  if (f === 2 && i[0] === i[1])
    return () => i[1];
  const d = n[0] === n[1];
  n[0] > n[f - 1] && (n = [...n].reverse(), i = [...i].reverse());
  const h = X2(i, r, l), g = h.length, p = (v) => {
    if (d && v < n[0])
      return i[0];
    let m = 0;
    if (g > 1)
      for (; m < n.length - 2 && !(v < n[m + 1]); m++)
        ;
    const b = /* @__PURE__ */ il(n[m], n[m + 1], v);
    return h[m](b);
  };
  return o ? (v) => p(Ji(n[0], n[f - 1], v)) : p;
}
function K2(n, i) {
  const o = n[n.length - 1];
  for (let r = 1; r <= i; r++) {
    const l = /* @__PURE__ */ il(0, i, r);
    n.push($t(o, 1, l));
  }
}
function Z2(n) {
  const i = [0];
  return K2(i, n.length - 1), i;
}
function Q2(n, i) {
  return n.map((o) => o * i);
}
function $2(n, i) {
  return n.map(() => i || Rp).splice(0, n.length - 1);
}
function Ws({ duration: n = 300, keyframes: i, times: o, ease: r = "easeInOut" }) {
  const l = /* @__PURE__ */ l2(r) ? r.map(fx) : fx(r) || Rp, f = {
    done: !1,
    value: i[0]
  };
  if (i.length === 2 && !Array.isArray(l) && (!o || o.length !== 2 || o[0] === 0 && o[1] === 1)) {
    const [g, p] = i, v = g === p ? void 0 : (bi.mix || Np)(g, p);
    return {
      calculatedDuration: n,
      next: (m) => (f.value = v ? v(l(n > 0 ? Ji(0, 1, m / n) : 1)) : p, f.done = m >= n, f)
    };
  }
  const d = Q2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === i.length ? o : Z2(i),
    n
  ), h = uw(d, i, {
    ease: Array.isArray(l) ? l : $2(i, l)
  });
  return {
    calculatedDuration: n,
    next: (g) => (f.value = h(g), f.done = g >= n, f)
  };
}
const J2 = 5;
function W2(n, i, o) {
  const r = Math.max(i - J2, 0);
  return /* @__PURE__ */ k1(o - n(r), i - r);
}
function fw(n, i, o = 0) {
  return i <= 0 ? o : n.velocity ? n.velocity(i) : W2((r) => n.next(r).value, i, n.next(i).value);
}
const tO = (n) => n !== null;
function Ku(n, { repeat: i, repeatType: o = "loop" }, r, l = 1) {
  const f = n.filter(tO), h = l < 0 || i && o !== "loop" && i % 2 === 1 ? 0 : f.length - 1;
  return !h || r === void 0 ? f[h] : r;
}
const eO = {
  decay: jm,
  inertia: jm,
  tween: Ws,
  keyframes: Ws,
  spring: rl
};
function dw(n) {
  typeof n.type == "string" && (n.type = eO[n.type]);
}
const nO = 40, Vp = (n, i) => i - n > nO && !bi.useManualTiming ? i : n;
function hw(n, i) {
  return {
    kind: n,
    animation: i,
    timestamp: je.now(),
    frameTimestamp: Ce.timestamp,
    frameIsProcessing: Ce.isProcessing
  };
}
function mw(n, i, o) {
  const r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({
        ...hw("animation-start", n),
        options: o ? { ...i, ...o } : i
      });
    } catch {
    }
}
function iO(n, i) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ...hw("layout-animation-start", n),
        node: i
      });
    } catch {
    }
}
class Zu {
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
const aO = (n) => n / 100;
class _u extends Zu {
  constructor(i) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== je.now() && this.tick(je.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause(), mw(this, this.options);
  }
  initAnimation() {
    const { options: i } = this;
    dw(i);
    const { type: o = Ws, repeat: r = 0, repeatDelay: l = 0, repeatType: f, velocity: d = 0 } = i;
    let { keyframes: h } = i;
    const g = o || Ws;
    g !== Ws && typeof h[0] != "number" && (this.mixKeyframes = pl(aO, Np(h[0], h[1])), h = [0, 100]);
    const p = g(h === i.keyframes ? i : { ...i, keyframes: h });
    f === "mirror" && (this.mirroredGenerator = g({
      ...i,
      keyframes: [...h].reverse(),
      velocity: -d
    })), p.calculatedDuration === null && (p.calculatedDuration = jp(p));
    const { calculatedDuration: v } = p;
    this.calculatedDuration = v, this.resolvedDuration = v + l, this.totalDuration = this.resolvedDuration * (r + 1) - l, this.generator = p;
  }
  updateTime(i) {
    const o = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o;
  }
  tick(i, o = !1) {
    const { generator: r, totalDuration: l, mixKeyframes: f, mirroredGenerator: d, resolvedDuration: h, calculatedDuration: g } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: p = 0, keyframes: v, repeat: m, repeatType: b, repeatDelay: S, type: w, onUpdate: A, finalKeyframe: C } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = Vp(this.startTime, i)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - l / this.speed, this.startTime)), o ? this.currentTime = i : this.updateTime(i);
    const R = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1), z = this.playbackSpeed >= 0 ? R < 0 : R > l;
    this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let D = this.currentTime, O = r;
    if (m) {
      const M = Math.min(this.currentTime, l) / h;
      let F = Math.floor(M), J = M % 1;
      !J && M >= 1 && (J = 1), J === 1 && F--, F = Math.min(F, m + 1), F % 2 && (b === "reverse" ? (J = 1 - J, S && (J -= S / h)) : b === "mirror" && (O = d)), D = Ji(0, 1, J) * h;
    }
    let P;
    z ? (this.delayState.value = v[0], P = this.delayState) : P = O.next(D), f && !z && (P.value = f(P.value));
    let { done: k } = P;
    !z && g !== null && (k = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
    const N = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return N && w !== jm && (P.value = Ku(v, this.options, C, this.speed)), A && A(P.value), N && this.finish(), P;
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
    return /* @__PURE__ */ Ln(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ln(i);
  }
  get time() {
    return /* @__PURE__ */ Ln(this.currentTime);
  }
  set time(i) {
    i = /* @__PURE__ */ Bn(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = i, this.tick(i));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    return fw(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const o = this.playbackSpeed !== i;
    o && this.driver && this.updateTime(je.now()), this.playbackSpeed = i, o && this.driver && (this.time = /* @__PURE__ */ Ln(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: i = I2, startTime: o } = this.options;
    this.driver || (this.driver = i((l) => this.tick(l))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = o ?? (this.pendingStartTime = r)), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(je.now()), this.holdTime = this.currentTime;
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
const oO = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function rO(n) {
  const [i, o] = n.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return n;
  const [r] = o.match(Op) || [];
  if (!r)
    return n;
  const l = o.replace(r, "");
  let f = oO.has(i) ? 1 : 0;
  return r !== o && (f *= 100), i + "(" + f + l + ")";
}
const sO = /\b([a-z-]*)\(.*?\)/gu, Vm = {
  ...Tn,
  getAnimatableNone: (n) => {
    const i = n.match(sO);
    return i ? i.map(rO).join(" ") : n;
  }
}, Lm = {
  ...Tn,
  getAnimatableNone: (n) => {
    const i = Tn.parse(n);
    return Tn.createTransformer(n)(i.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, yx = {
  ...kr,
  transform: Math.round
}, lO = {
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
  scale: Qc,
  scaleX: Qc,
  scaleY: Qc,
  scaleZ: Qc,
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
  opacity: al,
  originX: hx,
  originY: hx,
  originZ: vt
}, Nu = {
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
  ...lO,
  zIndex: yx,
  // SVG
  fillOpacity: al,
  strokeOpacity: al,
  numOctaves: yx
}, cO = {
  ...Nu,
  // Color props
  color: Ae,
  backgroundColor: Ae,
  outlineColor: Ae,
  fill: Ae,
  stroke: Ae,
  // Border props
  borderColor: Ae,
  borderTopColor: Ae,
  borderRightColor: Ae,
  borderBottomColor: Ae,
  borderLeftColor: Ae,
  filter: Vm,
  WebkitFilter: Vm,
  mask: Lm,
  WebkitMask: Lm
}, pw = (n) => cO[n], uO = /* @__PURE__ */ new Set([Vm, Lm]);
function Lp(n, i) {
  let o = pw(n);
  return uO.has(o) || (o = Tn), o.getAnimatableNone ? o.getAnimatableNone(i) : void 0;
}
function fO(n) {
  for (let i = 1; i < n.length; i++)
    n[i] ?? (n[i] = n[i - 1]);
}
const yo = (n) => n * 180 / Math.PI, Bm = (n) => {
  const i = yo(Math.atan2(n[1], n[0]));
  return Pm(i);
}, dO = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
  rotate: Bm,
  rotateZ: Bm,
  skewX: (n) => yo(Math.atan(n[1])),
  skewY: (n) => yo(Math.atan(n[2])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}, Pm = (n) => (n = n % 360, n < 0 && (n += 360), n), bx = Bm, xx = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]), Sx = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]), hO = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: xx,
  scaleY: Sx,
  scale: (n) => (xx(n) + Sx(n)) / 2,
  rotateX: (n) => Pm(yo(Math.atan2(n[6], n[5]))),
  rotateY: (n) => Pm(yo(Math.atan2(-n[2], n[0]))),
  rotateZ: bx,
  rotate: bx,
  skewX: (n) => yo(Math.atan(n[4])),
  skewY: (n) => yo(Math.atan(n[1])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function sl(n) {
  return n.includes("scale") ? 1 : 0;
}
function Um(n, i) {
  if (!n || n === "none")
    return sl(i);
  const o = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, l;
  if (o)
    r = hO, l = o;
  else {
    const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = dO, l = h;
  }
  if (!l)
    return sl(i);
  const f = r[i], d = l[1].split(",").map(pO);
  return typeof f == "function" ? f(d) : d[f];
}
const mO = (n, i) => {
  const { transform: o = "none" } = getComputedStyle(n);
  return Um(o, i);
};
function pO(n) {
  return parseFloat(n.trim());
}
const Hr = [
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
], Oa = /* @__PURE__ */ new Set([...Hr, "pathRotation"]), wx = (n) => n === kr || n === vt, gO = /* @__PURE__ */ new Set(["x", "y", "z"]), vO = Hr.filter((n) => !gO.has(n));
function yO(n) {
  const i = [];
  return vO.forEach((o) => {
    const r = n.getValue(o);
    if (r !== void 0) {
      const l = r.get(), f = o.startsWith("scale") ? 1 : 0;
      if (l === f)
        return;
      i.push([o, l]), r.set(f);
    }
  }), i;
}
const bO = /* @__PURE__ */ new Set(["bottom", "right"]);
function Tx(n, i, o, r, l, f) {
  const d = parseFloat(n);
  if (!isNaN(d))
    return d;
  const { min: h, max: g } = i()[o], p = g - h;
  return f === "border-box" ? p : p - parseFloat(r) - parseFloat(l);
}
const bo = {
  // Dimensions
  width: ({ width: n, paddingLeft: i = "0", paddingRight: o = "0", boxSizing: r }, l) => Tx(n, l, "x", i, o, r),
  height: ({ height: n, paddingTop: i = "0", paddingBottom: o = "0", boxSizing: r }, l) => Tx(n, l, "y", i, o, r),
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
  x: ({ transform: n }) => Um(n, "x"),
  y: ({ transform: n }) => Um(n, "y")
};
bo.translateX = bo.x;
bo.translateY = bo.y;
const xo = /* @__PURE__ */ new Set();
let km = !1, Hm = !1, Im = !1;
function gw() {
  if (Hm) {
    const n = [], i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
    xo.forEach((l) => {
      l.needsMeasurement && (n.push(l), i.add(l.element), bO.has(l.name) && o.add(l.element));
    });
    const r = /* @__PURE__ */ new Map();
    o.forEach((l) => {
      const f = yO(l);
      f.length && (r.set(l, f), l.render());
    }), n.forEach((l) => l.measureInitialState()), i.forEach((l) => {
      l.render();
      const f = r.get(l);
      f && f.forEach(([d, h]) => {
        l.getValue(d)?.set(h);
      });
    }), n.forEach((l) => l.measureEndState()), n.forEach((l) => {
      l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
    });
  }
  Hm = !1, km = !1, xo.forEach((n) => n.complete(Im)), xo.clear();
}
function vw() {
  xo.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (Hm = !0);
  });
}
function xO() {
  Im = !0, vw(), gw(), Im = !1;
}
function SO(n, i, o) {
  if (typeof n == "string") {
    if (Tp(n) || Ep(n))
      return parseFloat(n);
    if (!Tn.test(n) && Tn.test(o))
      return Lp(i, o);
  }
  return n ?? void 0;
}
class Bp {
  constructor(i, o, r, l, f, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = o, this.name = r, this.motionValue = l, this.element = f, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (xo.add(this), km || (km = !0, Xt.read(vw), Xt.resolveKeyframes(gw))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: o, element: r, motionValue: l } = this;
    if (i[0] === null) {
      const f = l?.get(), d = i[i.length - 1];
      if (f !== void 0)
        i[0] = f;
      else if (r && o) {
        const h = SO(r.readValue(o, d), o, d);
        h !== void 0 && (i[0] = h);
      }
      i[0] === void 0 && (i[0] = d), l && f === void 0 && l.set(i[0]);
    }
    fO(i);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), xo.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (xo.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const wO = (n) => n.startsWith("--");
function yw(n, i, o) {
  wO(i) ? n.style.setProperty(i, o) : n.style[i] = o;
}
const TO = {};
function bw(n, i) {
  const o = /* @__PURE__ */ U1(n);
  return () => TO[i] ?? o();
}
const EO = /* @__PURE__ */ bw(() => window.ScrollTimeline !== void 0, "scrollTimeline"), xw = /* @__PURE__ */ bw(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Qs = ([n, i, o, r]) => `cubic-bezier(${n}, ${i}, ${o}, ${r})`, Ex = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Qs([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Qs([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Qs([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Qs([0.33, 1.53, 0.69, 0.99])
};
function Sw(n, i) {
  if (n)
    return typeof n == "function" ? xw() ? rw(n, i) : "ease-out" : /* @__PURE__ */ Z1(n) ? Qs(n) : Array.isArray(n) ? n.map((o) => Sw(o, i) || Ex.easeOut) : Ex[n];
}
function CO(n, i, o, { delay: r = 0, duration: l = 300, repeat: f = 0, repeatType: d = "loop", ease: h = "easeOut", times: g } = {}, p = void 0) {
  const v = {
    [i]: o
  };
  g && (v.offset = g);
  const m = Sw(h, l);
  Array.isArray(m) && (v.easing = m);
  const b = {
    delay: r,
    duration: l,
    easing: Array.isArray(m) ? "linear" : m,
    fill: "both",
    iterations: f + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return p && (b.pseudoElement = p), n.animate(v, b);
}
function ww(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function AO({ type: n, ...i }) {
  return ww(n) && xw() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class Tw extends Zu {
  constructor(i) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !i)
      return;
    const { element: o, name: r, keyframes: l, pseudoElement: f, allowFlatten: d = !1, finalKeyframe: h, onComplete: g } = i;
    this.isPseudoElement = !!f, this.allowFlatten = d, this.options = i, Xu(typeof i.type != "string");
    const p = AO(i);
    this.animation = CO(o, r, l, p, f), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !f) {
        const v = Ku(l, this.options, h, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), yw(o, r, v), this.animation.cancel();
      }
      g?.(), this.notifyFinished();
    }, mw(this, i, p);
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
    return /* @__PURE__ */ Ln(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ln(i);
  }
  get time() {
    return /* @__PURE__ */ Ln(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    const o = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Bn(i), o && this.animation.pause();
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, i && EO() ? (this.animation.timeline = i, o?.(this.animation), Jn) : r(this);
  }
}
const Ew = {
  anticipate: F1,
  backInOut: q1,
  circInOut: K1
};
function RO(n) {
  return n in Ew;
}
function DO(n) {
  typeof n.ease == "string" && RO(n.ease) && (n.ease = Ew[n.ease]);
}
const nm = 10;
class OO extends Tw {
  constructor(i) {
    DO(i), dw(i), super(i), i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime), this.options = i;
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
    const { motionValue: o, onUpdate: r, onComplete: l, element: f, ...d } = this.options;
    if (!o)
      return;
    if (i !== void 0) {
      o.set(i);
      return;
    }
    const h = new _u({
      ...d,
      autoplay: !1
    }), g = Math.max(nm, je.now() - this.startTime), p = Ji(0, nm, g - nm), v = h.sample(g).value, { name: m } = this.options;
    f && m && yw(f, m, v), o.setWithVelocity(h.sample(Math.max(0, g - p)).value, v, p), h.stop();
  }
}
const Cx = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(Tn.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url("));
function MO(n) {
  const i = n[0];
  if (n.length === 1)
    return !0;
  for (let o = 0; o < n.length; o++)
    if (n[o] !== i)
      return !0;
}
function _O(n, i, o, r) {
  const l = n[0];
  if (l === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const f = n[n.length - 1], d = Cx(l, i), h = Cx(f, i);
  return !d || !h ? !1 : MO(n) || (o === "spring" || ww(o)) && r;
}
function Gm(n) {
  n.duration = 0, n.type = "keyframes";
}
const Ym = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), NO = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function zO(n) {
  for (let i = 0; i < n.length; i++)
    if (typeof n[i] == "string" && NO.test(n[i]))
      return !0;
  return !1;
}
const Ax = /* @__PURE__ */ new Set([
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
]), jO = /* @__PURE__ */ U1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function VO(n) {
  const { motionValue: i, name: o, repeatDelay: r, repeatType: l, damping: f, type: d, keyframes: h } = n;
  if (!o || !(Ym.has(o) || Ax.has(o)))
    return !1;
  const g = i?.owner?.current;
  if (!(g instanceof HTMLElement) && !(g instanceof SVGElement))
    return !1;
  const { onUpdate: p, transformTemplate: v } = i.owner.getProps();
  return jO() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Ym.has(o) || Ax.has(o) && zO(h)) && (o !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !p && !r && l !== "mirror" && f !== 0 && d !== "inertia";
}
class LO extends Zu {
  constructor(i) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = je.now();
    const { keyframes: o, name: r, motionValue: l, element: f } = i, d = i;
    d.autoplay ?? (d.autoplay = !0), d.delay ?? (d.delay = 0), d.type ?? (d.type = "keyframes"), d.repeat ?? (d.repeat = 0), d.repeatDelay ?? (d.repeatDelay = 0), d.repeatType ?? (d.repeatType = "loop");
    const h = f?.KeyframeResolver || Bp;
    this.keyframeResolver = new h(o, (g, p, v) => this.onKeyframesResolved(g, p, d, !v), r, l, f), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, o, r, l) {
    this.keyframeResolver = void 0;
    const { name: f, type: d, velocity: h, delay: g, isHandoff: p, onUpdate: v } = r;
    this.resolvedAt = je.now();
    let m = !0;
    _O(i, f, d, h) || (m = !1, (bi.instantAnimations || !g) && v?.(Ku(i, r, o)), i[0] = i[i.length - 1], Gm(r), r.repeat = 0);
    const { onComplete: b } = r;
    r.finalKeyframe = o, r.keyframes = i, r.onComplete = () => {
      b?.(), this.notifyFinished();
    };
    const S = m && !p && VO(r);
    l && (S || this.resolvedAt !== this.createdAt) && (r.startTime ?? (r.startTime = Vp(this.createdAt, this.resolvedAt)));
    let w;
    if (S) {
      r.element = r.motionValue?.owner?.current;
      try {
        w = new OO(r);
      } catch {
        w = new _u(r);
      }
    } else
      w = new _u(r);
    this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = w;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(i, o) {
    return this.finished.finally(i).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), xO()), this._animation;
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
function Cw(n, i, o, r = 0, l = 1) {
  const f = Array.from(n).sort((p, v) => p.sortNodePosition(v)).indexOf(i), d = n.size, h = (d - 1) * r;
  return typeof o == "function" ? o(f, d) : l === 1 ? f * r : h - f * r;
}
const Rx = 30, BO = (n) => !isNaN(parseFloat(n)), tl = {
  current: void 0
};
class PO {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(i, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const l = je.now();
      if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.notifyChange(), this.dependents))
        for (const f of this.dependents)
          f.dirty();
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = o.owner;
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = je.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = BO(this.current));
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
    return i === "change" ? this.onChangeSubscribe(o) : ((r = this.events)[i] || (r[i] = new Ou())).add(o);
  }
  onChangeSubscribe(i) {
    const { events: o } = this;
    return !o.change && !this.changeSubscriber ? this.changeSubscriber = i : (o.change || (o.change = new Ou(), o.change.add(this.changeSubscriber), this.changeSubscriber = void 0), o.change.add(i)), () => {
      this.changeSubscriber === i ? this.changeSubscriber = void 0 : o.change?.remove(i), this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    Xt.read(() => {
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
    return tl.current && tl.current.push(this), this.current;
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
    const i = je.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Rx)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Rx);
    return /* @__PURE__ */ k1(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
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
      let r = !1, l;
      l = i(() => {
        r = !0, this.events.animationComplete?.notify(), this.animation === l && this.clearAnimation(), o();
      }), r || (this.animation = l), this.events.animationStart?.notify();
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
function Ma(n, i) {
  return new PO(n, i);
}
function Pp(n, i) {
  if (n?.inherit && i) {
    const { inherit: o, ...r } = n;
    return { ...i, ...r };
  }
  return n;
}
function Up(n, i) {
  const o = n?.[i] ?? n?.default ?? n;
  return o !== n ? Pp(o, n) : o;
}
const UO = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, kO = (n) => ({
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), HO = {
  type: "keyframes",
  duration: 0.8
}, IO = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, GO = (n, { keyframes: i }) => i.length > 2 ? HO : Oa.has(n) ? n.startsWith("scale") ? kO(i[1]) : UO : IO, YO = /* @__PURE__ */ new Set([
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
function qO(n) {
  for (const i in n)
    if (!YO.has(i))
      return !0;
  return !1;
}
const kp = (n, i, o, r = {}, l, f) => (d) => {
  const h = Up(r, n) || {}, g = h.delay || r.delay || 0;
  let { elapsed: p = 0 } = r;
  p = p - /* @__PURE__ */ Bn(g);
  const v = {
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
    element: f ? void 0 : l
  };
  qO(h) || Object.assign(v, GO(n, v)), v.duration && (v.duration = /* @__PURE__ */ Bn(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ Bn(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let m = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Gm(v), v.delay === 0 && (m = !0)), (bi.instantAnimations || bi.skipAnimations || l?.shouldSkipAnimations || h.skipAnimations) && (m = !0, Gm(v), v.delay = 0), v.allowFlatten = !h.type && !h.ease, m && !f && i.get() !== void 0) {
    const b = Ku(v.keyframes, h);
    if (b !== void 0) {
      Xt.update(() => {
        v.onUpdate(b), v.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new _u(v) : new LO(v);
}, FO = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function XO(n) {
  const i = FO.exec(n);
  if (!i)
    return [,];
  const [, o, r, l] = i;
  return [`--${o ?? r}`, l];
}
function Aw(n, i, o = 1) {
  const [r, l] = XO(n);
  if (!r)
    return;
  const f = window.getComputedStyle(i).getPropertyValue(r);
  if (f) {
    const d = f.trim();
    return Tp(d) ? parseFloat(d) : d;
  }
  return Dp(l) ? Aw(l, i, o + 1) : l;
}
function KO(n) {
  const i = [{}, {}];
  return n?.values.forEach((o, r) => {
    i[0][r] = o.get(), i[1][r] = o.getVelocity();
  }), i;
}
function Rw(n, i, o, r) {
  const l = (f) => typeof f == "function" ? f(o !== void 0 ? o : n.custom, ...KO(r)) : f;
  return i = l(i), typeof i == "string" && (i = n.variants && n.variants[i]), l(i);
}
function So(n, i, o) {
  return Rw(n.getProps(), i, o, n);
}
const Dw = (n, i) => i === "exit" ? n.presenceContext?.custom : void 0, Ow = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Hr
]), ZO = (n) => Array.isArray(n);
function QO(n, i, o) {
  n.hasValue(i) ? n.getValue(i).set(o) : n.addValue(i, Ma(o));
}
function $O(n) {
  return ZO(n) ? n[n.length - 1] || 0 : n;
}
function JO(n, i) {
  const o = So(n, i);
  let { transitionEnd: r = {}, transition: l = {}, ...f } = o || {};
  f = { ...f, ...r };
  for (const d in f) {
    const h = $O(f[d]);
    QO(n, d, h);
  }
}
const Re = (n) => !!(n && n.getVelocity);
function WO(n) {
  return !!(Re(n) && n.add);
}
function qm(n, i) {
  const o = n.getValue("willChange");
  if (WO(o))
    return o.add(i);
  if (!o && bi.WillChange) {
    const r = new bi.WillChange("auto");
    n.addValue("willChange", r), r.add(i);
  }
}
function Hp(n) {
  return n.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const tM = "framerAppearId", Mw = "data-" + Hp(tM);
function _w(n) {
  return n.props[Mw];
}
const eM = typeof window < "u";
function nM({ protectedKeys: n, needsAnimating: i }, o) {
  const r = o in n && !i[o];
  return i[o] = !1, r;
}
function Nw(n, i, { delay: o = 0, transitionOverride: r, type: l } = {}) {
  let { transition: f, transitionEnd: d, ...h } = i;
  const g = n.getDefaultTransition();
  f = f ? Pp(f, g) : g;
  const p = f?.reduceMotion, v = f?.skipAnimations;
  r && (f = r);
  const m = [], b = l && n.animationState?.getState()[l], S = f?.path;
  S && S.animateVisualElement(n, h, f, o, m);
  for (const w in h) {
    const A = n.getValue(w, n.latestValues[w] ?? null), C = h[w];
    if (C === void 0 || b && nM(b, w))
      continue;
    const R = {
      delay: o,
      ...Up(f || {}, w)
    };
    v && (R.skipAnimations = !0);
    const z = A.get();
    if (z !== void 0 && !A.isAnimating() && !Array.isArray(C) && C === z && !R.velocity) {
      Xt.update(() => A.set(C));
      continue;
    }
    let D = !1;
    if (eM && window.MotionHandoffAnimation) {
      const k = _w(n);
      if (k) {
        const N = window.MotionHandoffAnimation(k, w, Xt);
        N !== null && (R.startTime = N, D = !0);
      }
    }
    qm(n, w);
    const O = p ?? n.shouldReduceMotion;
    A.start(kp(w, A, C, O && Ow.has(w) ? { type: !1 } : R, n, D));
    const P = A.animation;
    P && m.push(P);
  }
  if (d) {
    const w = () => Xt.update(() => {
      d && JO(n, d);
    });
    m.length ? Promise.all(m).then(w) : w();
  }
  return m;
}
function Fm(n, i, o = {}) {
  const r = So(n, i, Dw(n, o.type)), l = o.transitionOverride || (r?.transition ?? (n.getDefaultTransition() || {})), f = () => Promise.all(r ? Nw(n, r, o) : []), d = (g = 0) => {
    const { variantChildren: p } = n, { delayChildren: v = 0, staggerChildren: m, staggerDirection: b } = l, S = [];
    return p?.forEach((w) => {
      w.notify("AnimationStart", i), S.push(Fm(w, i, {
        ...o,
        delay: g + (typeof v == "function" ? 0 : v) + Cw(p, w, v, m, b)
      }).then(() => w.notify("AnimationComplete", i)));
    }), Promise.all(S);
  }, { when: h } = l;
  return h ? h === "beforeChildren" ? f().then(() => d()) : d().then(f) : Promise.all([f(), d(o.delay)]);
}
function iM(n, i, o = {}) {
  return n.notify("AnimationStart", i), (Array.isArray(i) ? Promise.all(i.map((l) => Fm(n, l, o))) : typeof i == "string" ? Fm(n, i, o) : Promise.all(Nw(n, So(n, i, o.custom), o))).then(() => {
    n.notify("AnimationComplete", i);
  });
}
const aM = {
  test: (n) => n === "auto",
  parse: (n) => n
}, oM = (n) => (i) => i.test(n), rM = [kr, vt, yi, Hi, b2, y2, aM], Dx = (n) => rM.find(oM(n));
function sM(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Ep(n) : !0;
}
const lM = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function cM(n, i, o) {
  let r = 0, l;
  for (; r < n.length && !l; ) {
    const f = n[r];
    typeof f == "string" && !lM.has(f) && C2(f) && (l = n[r]), r++;
  }
  if (l && o)
    for (const f of i)
      n[f] !== l && (n[f] = Lp(o, l));
}
class uM extends Bp {
  constructor(i, o, r, l, f) {
    super(i, o, r, l, f, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: o, name: r } = this;
    if (!o || !o.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < i.length; v++) {
      let m = i[v];
      if (typeof m == "string" && (m = m.trim(), Dp(m))) {
        const b = Aw(m, o.current);
        b !== void 0 && (i[v] = b), v === i.length - 1 && (this.finalKeyframe = m);
      }
    }
    if (this.resolveNoneKeyframes(), !Ow.has(r) || i.length !== 2)
      return;
    const [l, f] = i;
    if (typeof l == "number" && typeof f == "number")
      return;
    const d = Dx(l), h = Dx(f), g = dx(l), p = dx(f);
    if (g !== p && bo[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== h)
      if (wx(d) && wx(h))
        for (let v = 0; v < i.length; v++) {
          const m = i[v];
          typeof m == "string" && (i[v] = parseFloat(m));
        }
      else bo[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: o } = this, r = [];
    for (let l = 0; l < i.length; l++)
      (i[l] === null || sM(i[l])) && r.push(l);
    r.length && cM(i, r, o);
  }
  measure() {
    const { element: i, name: o } = this;
    return bo[o](window.getComputedStyle(i.current), () => i.measureViewportBox());
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: o, name: r } = this;
    if (!i || !i.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), o[0] = this.measuredOrigin;
    const l = o[o.length - 1];
    l !== void 0 && this.motionValue?.jump(l, !1);
  }
  measureEndState() {
    const { element: i, unresolvedKeyframes: o } = this;
    if (!i || !i.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, !1);
    const r = o.length - 1, l = o[r];
    o[r] = this.measure(), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), this.removedTransforms?.length && this.removedTransforms.forEach(([f, d]) => {
      i.getValue(f).set(d);
    }), this.resolveNoneKeyframes();
  }
}
const Ip = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function pu(n) {
  return P1(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
function Gp(n) {
  return P1(n) && "ownerSVGElement" in n;
}
const Xm = (n, i) => i && typeof n == "number" ? i.transform(n) : n;
function zw(n, i, o) {
  if (n == null)
    return [];
  if (n instanceof EventTarget)
    return [n];
  if (typeof n == "string") {
    let r = document;
    const l = o?.[n] ?? r.querySelectorAll(n);
    return l ? Array.from(l) : [];
  }
  return Array.from(n).filter((r) => r != null);
}
const fM = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, dM = Hr.length;
function hM(n, i, o) {
  let r = "", l = !0;
  for (let d = 0; d < dM; d++) {
    const h = Hr[d], g = n[h];
    if (g === void 0)
      continue;
    let p = !0;
    if (typeof g == "number")
      p = g === (h.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(g);
      p = h.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!p || o) {
      const v = Xm(g, Nu[h]);
      if (!p) {
        l = !1;
        const m = fM[h] || h;
        r += `${m}(${v}) `;
      }
      o && (i[h] = v);
    }
  }
  const f = n.pathRotation;
  return f && (l = !1, r += `rotate(${Xm(f, Nu.pathRotation)}) `), r = r.trim(), o ? r = o(i, l ? "" : r) : l && (r = "none"), r;
}
function Yp(n, i, o) {
  const { style: r, vars: l, transformOrigin: f } = n;
  let d = !1, h = !1;
  for (const g in i) {
    const p = i[g];
    if (Oa.has(g)) {
      d = !0;
      continue;
    } else if ($1(g)) {
      l[g] = p;
      continue;
    } else {
      const v = Xm(p, Nu[g]);
      g.startsWith("origin") ? (h = !0, f[g] = v) : r[g] = v;
    }
  }
  if (i.transform || (d || o ? r.transform = hM(i, n.transform, o) : r.transform && (r.transform = "none")), h) {
    const { originX: g = "50%", originY: p = "50%", originZ: v = 0 } = f;
    r.transformOrigin = `${g} ${p} ${v}`;
  }
}
const mM = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, pM = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function gM(n, i, o = 1, r = 0, l = !0) {
  n.pathLength = 1;
  const f = l ? mM : pM;
  n[f.offset] = `${-r}`, n[f.array] = `${i} ${o}`;
}
const jw = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Vw(n, {
  attrX: i,
  attrY: o,
  attrScale: r,
  pathLength: l,
  pathSpacing: f = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, g, p, v) {
  if (Yp(n, h, p), g) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  n.attrs = n.style, n.style = {};
  const { attrs: m, style: b } = n;
  for (const S of jw)
    m[S] !== void 0 && (b[S] = m[S], delete m[S]);
  (b.transform || m.transformOrigin) && (b.transformOrigin = m.transformOrigin ?? "50% 50%", delete m.transformOrigin), b.transform && (b.transformBox = v?.transformBox ?? "fill-box", delete m.transformBox), i !== void 0 && (m.x = i), o !== void 0 && (m.y = o), r !== void 0 && (m.scale = r), l !== void 0 && gM(m, l, f, d, !1);
}
function Lw({ top: n, left: i, right: o, bottom: r }) {
  return {
    x: { min: i, max: o },
    y: { min: n, max: r }
  };
}
function vM({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function yM(n, i) {
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
function im(n) {
  return n === void 0 || n === 1;
}
function Km({ scale: n, scaleX: i, scaleY: o }) {
  return !im(n) || !im(i) || !im(o);
}
function go(n) {
  return Km(n) || Bw(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Bw(n) {
  return Ox(n.x) || Ox(n.y);
}
function Ox(n) {
  return n && n !== "0%";
}
function zu(n, i, o) {
  const r = n - o, l = i * r;
  return o + l;
}
function Mx(n, i, o, r, l) {
  return l !== void 0 && (n = zu(n, l, r)), zu(n, o, r) + i;
}
function Zm(n, i = 0, o = 1, r, l) {
  n.min = Mx(n.min, i, o, r, l), n.max = Mx(n.max, i, o, r, l);
}
function Pw(n, { x: i, y: o }) {
  Zm(n.x, i.translate, i.scale, i.originPoint), Zm(n.y, o.translate, o.scale, o.originPoint);
}
const _x = 0.999999999999, Nx = 1.0000000000001;
function bM(n, i, o, r = !1) {
  const l = o.length;
  if (!l)
    return;
  i.x = i.y = 1;
  let f, d;
  for (let h = 0; h < l; h++) {
    f = o[h], d = f.projectionDelta;
    const { visualElement: g } = f.options;
    g && g.props.style && g.props.style.display === "contents" || (r && f.options.layoutScroll && f.scroll && f !== f.root && ($n(n.x, -f.scroll.offset.x), $n(n.y, -f.scroll.offset.y)), d && (i.x *= d.x.scale, i.y *= d.y.scale, Pw(n, d)), r && go(f.latestValues) && gu(n, f.latestValues, f.layout?.layoutBox));
  }
  i.x < Nx && i.x > _x && (i.x = 1), i.y < Nx && i.y > _x && (i.y = 1);
}
function $n(n, i) {
  n.min += i, n.max += i;
}
function zx(n, i, o, r, l = 0.5) {
  const f = $t(n.min, n.max, l);
  Zm(n, i, o, f, r);
}
function jx(n, i) {
  return typeof n == "string" ? parseFloat(n) / 100 * (i.max - i.min) : n;
}
function gu(n, i, o) {
  const r = o ?? n;
  zx(n.x, jx(i.x, r.x), i.scaleX, i.scale, i.originX), zx(n.y, jx(i.y, r.y), i.scaleY, i.scale, i.originY);
}
function Uw(n, i) {
  return Lw(yM(n.getBoundingClientRect(), i));
}
function xM(n, i, o) {
  const r = Uw(n, o), { scroll: l } = i;
  return l && ($n(r.x, l.offset.x), $n(r.y, l.offset.y)), r;
}
const { schedule: qp } = /* @__PURE__ */ ow(queueMicrotask, !1), Kn = {
  x: !1,
  y: !1
};
function kw() {
  return Kn.x || Kn.y;
}
function SM(n) {
  return n === "x" || n === "y" ? Kn[n] ? null : (Kn[n] = !0, () => {
    Kn[n] = !1;
  }) : Kn.x || Kn.y ? null : (Kn.x = Kn.y = !0, () => {
    Kn.x = Kn.y = !1;
  });
}
function Hw(n, i) {
  const o = zw(n), r = new AbortController(), l = {
    passive: !0,
    ...i,
    signal: r.signal
  };
  return [o, l, () => r.abort()];
}
function wM(n) {
  return !(n.pointerType === "touch" || kw());
}
function TM(n, i, o = {}) {
  const [r, l, f] = Hw(n, o);
  return r.forEach((d) => {
    let h = !1, g = !1, p;
    const v = () => {
      d.removeEventListener("pointerleave", w);
    }, m = (C) => {
      p && (p(C), p = void 0), v();
    }, b = (C) => {
      h = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), g && (g = !1, m(C));
    }, S = () => {
      h = !0, window.addEventListener("pointerup", b, l), window.addEventListener("pointercancel", b, l);
    }, w = (C) => {
      if (C.pointerType !== "touch") {
        if (h) {
          g = !0;
          return;
        }
        m(C);
      }
    }, A = (C) => {
      if (!wM(C))
        return;
      g = !1;
      const R = i(d, C);
      typeof R == "function" && (p = R, d.addEventListener("pointerleave", w, l));
    };
    d.addEventListener("pointerenter", A, l), d.addEventListener("pointerdown", S, l);
  }), f;
}
const Iw = (n, i) => i ? n === i ? !0 : Iw(n, i.parentElement) : !1, Fp = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, EM = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function CM(n) {
  return EM.has(n.tagName) || n.isContentEditable === !0;
}
const AM = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function RM(n) {
  return AM.has(n.tagName) || n.isContentEditable === !0;
}
const vu = /* @__PURE__ */ new WeakSet();
function Vx(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function am(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const DM = (n, i) => {
  const o = n.currentTarget;
  if (!o)
    return;
  const r = Vx(() => {
    if (vu.has(o))
      return;
    am(o, "down");
    const l = Vx(() => {
      am(o, "up");
    }), f = () => am(o, "cancel");
    o.addEventListener("keyup", l, i), o.addEventListener("blur", f, i);
  });
  o.addEventListener("keydown", r, i), o.addEventListener("blur", () => o.removeEventListener("keydown", r), i);
};
function Lx(n) {
  return Fp(n) && !kw();
}
const Bx = /* @__PURE__ */ new WeakSet();
function OM(n, i, o = {}) {
  const [r, l, f] = Hw(n, o), d = (h) => {
    const g = h.currentTarget;
    if (!Lx(h) || Bx.has(h))
      return;
    vu.add(g), o.stopPropagation && Bx.add(h);
    const p = i(g, h), v = { ...l, capture: !0 }, m = (w, A) => {
      window.removeEventListener("pointerup", b, v), window.removeEventListener("pointercancel", S, v), vu.has(g) && vu.delete(g), Lx(w) && typeof p == "function" && p(w, { success: A });
    }, b = (w) => {
      m(w, g === window || g === document || o.useGlobalTarget || Iw(g, w.target));
    }, S = (w) => {
      m(w, !1);
    };
    window.addEventListener("pointerup", b, v), window.addEventListener("pointercancel", S, v);
  };
  return r.forEach((h) => {
    (o.useGlobalTarget ? window : h).addEventListener("pointerdown", d, l), pu(h) && (h.addEventListener("focus", (p) => DM(p, l)), !CM(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), f;
}
const yu = /* @__PURE__ */ new WeakMap();
let bu;
const Gw = (n, i, o) => (r, l) => l && l[0] ? l[0][n + "Size"] : Gp(r) && "getBBox" in r ? r.getBBox()[i] : r[o], MM = /* @__PURE__ */ Gw("inline", "width", "offsetWidth"), _M = /* @__PURE__ */ Gw("block", "height", "offsetHeight");
function NM({ target: n, borderBoxSize: i }) {
  yu.get(n)?.forEach((o) => {
    o(n, {
      get width() {
        return MM(n, i);
      },
      get height() {
        return _M(n, i);
      }
    });
  });
}
function zM(n) {
  n.forEach(NM);
}
function jM() {
  typeof ResizeObserver > "u" || (bu = new ResizeObserver(zM));
}
function VM(n, i) {
  bu || jM();
  const o = zw(n);
  return o.forEach((r) => {
    let l = yu.get(r);
    l || (l = /* @__PURE__ */ new Set(), yu.set(r, l)), l.add(i), bu?.observe(r);
  }), () => {
    o.forEach((r) => {
      const l = yu.get(r);
      l?.delete(i), l?.size || bu?.unobserve(r);
    });
  };
}
const xu = /* @__PURE__ */ new Set();
let _r;
function LM() {
  _r = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    xu.forEach((i) => i(n));
  }, window.addEventListener("resize", _r);
}
function BM(n) {
  return xu.add(n), _r || LM(), () => {
    xu.delete(n), !xu.size && typeof _r == "function" && (window.removeEventListener("resize", _r), _r = void 0);
  };
}
function Px(n, i) {
  return typeof n == "function" ? BM(n) : VM(n, i);
}
function PM(n) {
  return Gp(n) && n.tagName === "svg";
}
function UM(...n) {
  const i = !Array.isArray(n[0]), o = i ? 0 : -1, r = n[0 + o], l = n[1 + o], f = n[2 + o], d = n[3 + o], h = uw(l, f, d);
  return i ? h(r) : h;
}
const $s = /* @__PURE__ */ new Set(), Ux = ({ timestamp: n }) => {
  $s.forEach((i) => i.tick(n));
};
class kM extends Zu {
  constructor(i) {
    super(), this.state = "idle", this.startTime = 0, this.currentTime = 0, this.started = !1, this.hasNextTarget = !1, this.nextTarget = 0, this.stop = () => {
      this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.factory = i.type, this.generator = this.factory(i);
    const { driver: o } = i;
    o && (this.driver = o((r) => this.tick(r))), this.startTime = this.now(), this.state = "running", this.driver ? this.driver.start() : ($s.size || Xt.update(Ux, !0), $s.add(this));
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
    const { options: r, generator: l } = this;
    r.keyframes = i, r.velocity = o, this.startTime = this.now(), this.currentTime = 0, l.retarget ? l.retarget(i, o) : this.generator = this.factory(r);
  }
  tick(i) {
    const { options: o, hasNextTarget: r } = this, { delay: l = 0, onUpdate: f, onPlay: d } = o;
    this.started || (this.startTime = Vp(this.startTime, i));
    const h = Math.round(i - this.startTime) - l, g = this.currentTime = Math.max(0, h), p = this.generator.next(g), v = h < 0 ? o.keyframes[0] : p.value;
    if (r) {
      this.hasNextTarget = !1;
      const { keyframes: m } = o;
      m[0] = v, m[1] = this.nextTarget, this.retarget(m, this.nextVelocity ?? this.getGeneratorVelocity());
    }
    (r || !this.started) && (this.started = !0, d?.()), this.state === "running" && (f?.(v), p.done && h >= 0 && !r && !this.hasNextTarget && this.state === "running" && (this.notifyFinished(), this.teardown(), this.state = "finished", o.onComplete?.()));
  }
  getGeneratorVelocity() {
    return fw(this.generator, this.currentTime, this.options.velocity);
  }
  now() {
    return this.driver ? this.driver.now() : je.now();
  }
  teardown() {
    this.state = "idle", this.driver ? this.driver.stop() : ($s.delete(this), $s.size || xi(Ux));
  }
}
const ju = (n) => typeof n == "number" ? n : parseFloat(n);
function HM(n, i, o) {
  const r = n.get();
  let l = null, f;
  const d = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, h = (v) => f(d ? v + d : v), g = () => n.events.animationStart?.notify(), p = () => {
    l && (l.stop(), l = null), n.animation = void 0;
  };
  if (n.attach((v, m) => {
    f = m;
    const b = ju(v);
    if (l?.state === "running") {
      l.setTarget(b, o.velocity);
      return;
    }
    const S = ju(n.get()), w = l ? l.getGeneratorVelocity() : n.getVelocity();
    if (p(), S === b)
      return;
    const A = {
      keyframes: [S, b],
      velocity: w,
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...o,
      onUpdate: h
    }, C = l = new kM({
      ...A,
      onPlay: g
    });
    n.animation = C, C.then(() => {
      l === C && (l = null, n.animation = void 0, n.events.animationComplete?.notify());
    });
  }, p), Re(i)) {
    let v = o.skipInitialAnimation === !0;
    const m = i.on("change", (S) => {
      v ? (v = !1, n.jump(kx(S, d), !1)) : n.set(kx(S, d));
    }), b = n.on("destroy", m);
    return () => {
      m(), b();
    };
  }
  return p;
}
function kx(n, i) {
  return i ? n + i : n;
}
function IM(n, i, o) {
  return HM(n, i, { ...o, type: rl });
}
const Hx = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Nr = () => ({
  x: Hx(),
  y: Hx()
}), Ix = () => ({ min: 0, max: 0 }), Ee = () => ({
  x: Ix(),
  y: Ix()
}), GM = /* @__PURE__ */ new WeakMap();
function Qu(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function ll(n) {
  return typeof n == "string" || Array.isArray(n);
}
const Xp = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Gx = ["initial", ...Xp];
function $u(n) {
  if (Qu(n.animate))
    return !0;
  for (let i = 0; i < Gx.length; i++)
    if (ll(n[Gx[i]]))
      return !0;
  return !1;
}
function Yw(n) {
  return !!($u(n) || n.variants);
}
function YM(n, i, o) {
  for (const r in i) {
    const l = i[r], f = o[r];
    if (Re(l))
      n.addValue(r, l);
    else if (Re(f))
      n.addValue(r, Ma(l, { owner: n }));
    else if (f !== l)
      if (n.hasValue(r)) {
        const d = n.getValue(r);
        d.liveStyle === !0 ? d.jump(l) : d.hasAnimated || d.set(l);
      } else {
        const d = n.getStaticValue(r);
        n.addValue(r, Ma(d !== void 0 ? d : l, { owner: n }));
      }
  }
  for (const r in o)
    i[r] === void 0 && n.removeValue(r);
  return i;
}
const Vu = { current: null }, Kp = { current: !1 }, qM = typeof window < "u";
function qw() {
  if (Kp.current = !0, !!qM)
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"), i = () => Vu.current = n.matches;
      n.addEventListener("change", i), i();
    } else
      Vu.current = !1;
}
const Yx = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Lu = {};
function Fw(n) {
  Lu = n;
}
function FM() {
  return Lu;
}
class XM {
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
  constructor({ parent: i, props: o, presenceContext: r, reducedMotionConfig: l, skipAnimations: f, blockInitialAnimation: d, visualState: h }, g = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Bp, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const S = je.now();
      this.renderScheduledAt < S && (this.renderScheduledAt = S, Xt.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: v } = h;
    this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = o.initial ? { ...p } : {}, this.renderState = v, this.parent = i, this.props = o, this.presenceContext = r, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = l, this.skipAnimationsConfig = f, this.options = g, this.blockInitialAnimation = !!d, this.isControllingVariants = $u(o), this.isVariantNode = Yw(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: m, ...b } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const S in b) {
      const w = b[S];
      p[S] !== void 0 && Re(w) && w.set(p[S]);
    }
  }
  mount(i) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        this.values.get(o)?.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    if (this.current = i, GM.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.isVariantNode && !this.isControllingVariants) {
      let o = this;
      do
        o = o.props.inherit !== !1 && o.parent;
      while (o && !o.isVariantNode);
      if (o) {
        const { variantChildren: r } = o;
        r.add(this), this.removeFromVariantTree = () => r.delete(this);
      }
    }
    this.values.forEach((o, r) => this.bindToMotionValue(r, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Kp.current || qw(), this.shouldReduceMotion = Vu.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
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
    if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(), o.accelerate && Ym.has(i) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: h, times: g, ease: p, duration: v } = o.accelerate, m = new Tw({
        element: this.current,
        name: i,
        keyframes: h,
        times: g,
        ease: p,
        duration: /* @__PURE__ */ Bn(v)
      }), b = d(m);
      this.valueSubscriptions.set(i, () => {
        b(), m.cancel();
      });
      return;
    }
    const r = Oa.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const l = o.on("change", (d) => {
      this.latestValues[i] = d, this.props.onUpdate && Xt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let f;
    typeof window < "u" && window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, i, o)), this.valueSubscriptions.set(i, () => {
      l(), f && f();
    });
  }
  sortNodePosition(i) {
    return !this.current || !i.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in Lu) {
      const o = Lu[i];
      if (!o)
        continue;
      const { isEnabled: r, Feature: l } = o;
      if (!this.features[i] && l && r(this.props) && (this.features[i] = new l(this)), this.features[i]) {
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ee();
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
    for (let r = 0; r < Yx.length; r++) {
      const l = Yx[r];
      this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
      const f = "on" + l, d = i[f];
      d && (this.propEventSubscriptions[l] = this.on(l, d));
    }
    this.prevMotionValues = YM(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      const l = o.get();
      l !== void 0 && (this.latestValues[i] = l);
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
    return r === void 0 && o !== void 0 && (r = Ma(o ?? this.getDefaultValue?.(i), {
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
    return r != null && (typeof r == "string" && (Tp(r) || Ep(r)) ? r = parseFloat(r) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof r != "number" && !Tn.test(r) && Tn.test(o) && (r = Lp(i, o))
    ), this.setBaseTarget(i, Re(r) ? r.get() : r)), Re(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(i, o) {
    this.baseTarget[i] = o;
  }
  on(i, o) {
    return this.events[i] || (this.events[i] = new Ou()), this.events[i].add(o);
  }
  notify(i, ...o) {
    this.events[i] && this.events[i].notify(...o);
  }
  scheduleRenderMicrotask() {
    qp.render(this.render);
  }
}
class Xw extends XM {
  constructor() {
    super(...arguments), this.KeyframeResolver = uM;
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
    Re(i) && (this.childSubscription = i.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
    }));
  }
}
class ja {
  constructor(i) {
    this.isMounted = !1, this.node = i;
  }
  update() {
  }
}
function Kw(n, { style: i, vars: o }, r, l) {
  const f = n.style;
  let d;
  for (d in i)
    f[d] = i[d];
  l?.applyProjectionStyles(f, r);
  for (d in o)
    f.setProperty(d, o[d]);
}
const cl = {};
function Zw(n, { layout: i, layoutId: o }) {
  return Oa.has(n) || n.startsWith("origin") || (i || o !== void 0) && (!!cl[n] || n === "opacity");
}
function Zp(n, i, o) {
  const r = n.style, l = i?.style, f = {};
  if (!r)
    return f;
  for (const d in r)
    (Re(r[d]) || l && Re(l[d]) || Zw(d, n) || o?.getValue(d)?.liveStyle !== void 0) && (f[d] = r[d]);
  return f;
}
function KM(n) {
  return window.getComputedStyle(n);
}
class ZM extends Xw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Kw;
  }
  mount(i) {
    Xu(!!i.style), super.mount(i);
  }
  readValueFromInstance(i, o) {
    if (Oa.has(o))
      return this.projection?.isProjecting ? sl(o) : mO(i, o);
    {
      const r = KM(i), l = ($1(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: o }) {
    return Uw(i, o);
  }
  build(i, o, r) {
    Yp(i, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, o, r) {
    return Zp(i, o, r);
  }
}
const Qw = /* @__PURE__ */ new Set([
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
]), $w = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function QM(n, i, o, r) {
  Kw(n, i, void 0, r);
  for (const l in i.attrs)
    n.setAttribute(Qw.has(l) ? l : Hp(l), i.attrs[l]);
}
function Jw(n, i, o) {
  const r = Zp(n, i, o);
  for (const l in n)
    if (Re(n[l]) || Re(i[l])) {
      const f = Hr.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
      r[f] = n[l];
    }
  return r;
}
class $M extends Xw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ee;
  }
  getBaseTargetFromProps(i, o) {
    return Oa.has(o) ? super.getBaseTargetFromProps(i, o) ?? sl(o) : i[o];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(i) {
    return Oa.has(i) ? this.latestValues[i] ?? sl(i) : void 0;
  }
  readValueFromInstance(i, o) {
    if (Oa.has(o)) {
      const r = pw(o);
      return r && r.default || 0;
    }
    if (jw.includes(o)) {
      const l = getComputedStyle(i)[o];
      if (typeof l == "string" && l)
        return l.trim();
    }
    return o = Qw.has(o) ? o : Hp(o), i.getAttribute(o);
  }
  scrapeMotionValuesFromProps(i, o, r) {
    return Jw(i, o, r);
  }
  build(i, o, r) {
    Vw(i, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(i, o, r, l) {
    QM(i, o, r, l);
  }
  mount(i) {
    this.isSVGTag = $w(i.tagName), super.mount(i);
  }
}
function Ww(n, i) {
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
const JM = [...Xp].reverse();
function WM(n) {
  let i = (h) => Promise.all(h.map(({ animation: g, options: p }) => iM(n, g, p))), o = qx(), r = !0, l = !1;
  function f(h) {
    const { props: g, parent: p, manuallyAnimateOnMount: v } = n, m = r || l, b = [], S = /* @__PURE__ */ new Set();
    let w = {}, A = 1 / 0, C = n;
    do
      C = C.props.inherit !== !1 && C.parent;
    while (C && !C.isControllingVariants);
    if (JM.forEach((z, D) => {
      const O = o[z], P = g[z], k = C && C.props[z], N = P !== void 0 ? P : ll(k) || k === !1 ? k : void 0, M = ll(N), F = z === h ? O.isActive : null;
      F === !1 && (A = D);
      const J = M && P === void 0 && !(m && v);
      if (O.protectedKeys = { ...w }, !O.isActive && F === null || !N && !O.prevProp || Qu(N) || typeof N == "boolean")
        return;
      if (z === "exit" && O.isActive && F !== !0) {
        w = {
          ...w,
          ...O.prevResolvedValues
        };
        return;
      }
      const ut = t_(O.prevProp, N);
      let et = ut || M && (F && !J || D > A), rt = !1;
      const ft = Array.isArray(N) ? N : [N];
      let dt = {};
      if (F !== !1)
        for (const X of ft) {
          const { transition: $, transitionEnd: at, ...Q } = So(n, X, Dw(n, z)) || {};
          dt = {
            ...dt,
            ...Q,
            ...at
          };
        }
      const { prevResolvedValues: Y } = O;
      for (const X in { ...Y, ...dt }) {
        if (X in w)
          continue;
        const $ = dt[X], at = Y[X], Q = Array.isArray($) && Array.isArray(at) ? !Ww($, at) || ut : $ !== at;
        if (Q && $ == null)
          S.add(X);
        else if (Q || $ !== void 0 && S.has(X)) {
          et = !0, S.delete(X) && (rt = !0), O.needsAnimating[X] = !0;
          const yt = n.getValue(X);
          yt && (yt.liveStyle = !1);
        } else
          O.protectedKeys[X] = !0;
      }
      if (O.prevProp = N, O.prevResolvedValues = dt, O.isActive && (w = { ...w, ...dt }), et && (!(J && ut) || rt))
        for (const X of ft) {
          const $ = { type: z };
          if (typeof X == "string" && m && v && p?.enteringChildren) {
            const at = So(p, X)?.transition?.delayChildren;
            $.delay = Cw(p.enteringChildren, n, at);
          }
          b.push({ animation: X, options: $ });
        }
    }), S.size) {
      const { initial: z } = g, D = {}, O = typeof z != "boolean" && So(n, Array.isArray(z) ? z[0] : z, n.presenceContext?.custom);
      O && O.transition && (D.transition = O.transition), S.forEach((P) => {
        const k = n.getValue(P);
        k && (k.liveStyle = !0);
        const N = O && !Array.isArray(z) ? O[P] : void 0, M = n.getBaseTargetFromProps(g, P);
        D[P] = (N !== void 0 ? N : M !== void 0 && !Re(M) ? M : n.initialValues[P] === void 0 ? n.baseTarget[P] : void 0) ?? null;
      }), b.push({ animation: D });
    }
    const R = m && n.blockInitialAnimation || r && !v && (g.initial === !1 || g.initial === g.animate);
    return r = l = !1, !R && b.length ? i(b) : Promise.resolve();
  }
  function d(h, g) {
    if (o[h].isActive === g)
      return Promise.resolve();
    n.variantChildren?.forEach((v) => v.animationState?.setActive(h, g)), o[h].isActive = g;
    const p = f(h);
    for (const v in o)
      o[v].protectedKeys = {};
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
      o = qx(), l = !0;
    }
  };
}
function t_(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Ww(i, n) : !1;
}
function qx() {
  const n = {};
  for (const i of Xp)
    n[i] = {
      isActive: i === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  return n;
}
function Qm(n, i) {
  n.min = i.min, n.max = i.max;
}
function Xn(n, i) {
  Qm(n.x, i.x), Qm(n.y, i.y);
}
function Fx(n, i) {
  n.translate = i.translate, n.scale = i.scale, n.originPoint = i.originPoint, n.origin = i.origin;
}
const tT = 1e-4, e_ = 1 - tT, n_ = 1 + tT, eT = 0.01, i_ = 0 - eT, a_ = 0 + eT;
function Je(n) {
  return n.max - n.min;
}
function o_(n, i, o) {
  return Math.abs(n - i) <= o;
}
function Xx(n, i, o, r = 0.5) {
  n.origin = r, n.originPoint = $t(i.min, i.max, n.origin), n.scale = Je(o) / Je(i), n.translate = $t(o.min, o.max, n.origin) - n.originPoint, (n.scale >= e_ && n.scale <= n_ || isNaN(n.scale)) && (n.scale = 1), (n.translate >= i_ && n.translate <= a_ || isNaN(n.translate)) && (n.translate = 0);
}
function el(n, i, o, r) {
  Xx(n.x, i.x, o.x, r ? r.originX : void 0), Xx(n.y, i.y, o.y, r ? r.originY : void 0);
}
function Kx(n, i, o, r = 0) {
  const l = r ? $t(o.min, o.max, r) : o.min;
  n.min = l + i.min, n.max = n.min + Je(i);
}
function r_(n, i, o, r) {
  Kx(n.x, i.x, o.x, r?.x), Kx(n.y, i.y, o.y, r?.y);
}
function Zx(n, i, o, r = 0) {
  const l = r ? $t(o.min, o.max, r) : o.min;
  n.min = i.min - l, n.max = n.min + Je(i);
}
function Bu(n, i, o, r) {
  Zx(n.x, i.x, o.x, r?.x), Zx(n.y, i.y, o.y, r?.y);
}
function Qx(n, i, o, r, l) {
  return n -= i, n = zu(n, 1 / o, r), l !== void 0 && (n = zu(n, 1 / l, r)), n;
}
function s_(n, i = 0, o = 1, r = 0.5, l, f = n, d = n) {
  if (yi.test(i) && (i = parseFloat(i), i = $t(d.min, d.max, i / 100) - d.min), typeof i != "number")
    return;
  let h = $t(f.min, f.max, r);
  n === f && (h -= i), n.min = Qx(n.min, i, o, h, l), n.max = Qx(n.max, i, o, h, l);
}
function $x(n, i, [o, r, l], f, d) {
  s_(n, i[o], i[r], i[l], i.scale, f, d);
}
const l_ = ["x", "scaleX", "originX"], c_ = ["y", "scaleY", "originY"];
function Jx(n, i, o, r) {
  $x(n.x, i, l_, o ? o.x : void 0, r ? r.x : void 0), $x(n.y, i, c_, o ? o.y : void 0, r ? r.y : void 0);
}
function Wx(n) {
  return n.translate === 0 && n.scale === 1;
}
function nT(n) {
  return Wx(n.x) && Wx(n.y);
}
function tS(n, i) {
  return n.min === i.min && n.max === i.max;
}
function u_(n, i) {
  return tS(n.x, i.x) && tS(n.y, i.y);
}
function eS(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function iT(n, i) {
  return eS(n.x, i.x) && eS(n.y, i.y);
}
function nS(n) {
  return Je(n.x) / Je(n.y);
}
function iS(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
function Qn(n) {
  return [n("x"), n("y")];
}
function aS(n, i) {
  return i.max === i.min ? 0 : n / (i.max - i.min) * 100;
}
const Xs = {
  correct: (n, i) => {
    if (!i.target)
      return n;
    if (typeof n == "string")
      if (vt.test(n))
        n = parseFloat(n);
      else
        return n;
    const o = aS(n, i.target.x), r = aS(n, i.target.y);
    return `${o}% ${r}%`;
  }
}, f_ = {
  correct: (n, { treeScale: i, projectionDelta: o }) => {
    const r = n, l = Tn.parse(n);
    if (l.length > 5)
      return r;
    const f = Tn.createTransformer(n), d = typeof l[0] != "number" ? 1 : 0, h = o.x.scale * i.x, g = o.y.scale * i.y;
    l[0 + d] /= h, l[1 + d] /= g;
    const p = $t(h, g, 0.5);
    return typeof l[2 + d] == "number" && (l[2 + d] /= p), typeof l[3 + d] == "number" && (l[3 + d] /= p), f(l);
  }
};
function d_(n, i, o) {
  let r = "";
  const l = n.x.translate / i.x, f = n.y.translate / i.y, d = o?.z || 0;
  if ((l || f || d) && (r = `translate3d(${l}px, ${f}px, ${d}px) `), (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `), o) {
    const { transformPerspective: p, rotate: v, pathRotation: m, rotateX: b, rotateY: S, skewX: w, skewY: A } = o;
    p && (r = `perspective(${p}px) ${r}`), v && (r += `rotate(${v}deg) `), m && (r += `rotate(${m}deg) `), b && (r += `rotateX(${b}deg) `), S && (r += `rotateY(${S}deg) `), w && (r += `skewX(${w}deg) `), A && (r += `skewY(${A}deg) `);
  }
  const h = n.x.scale * i.x, g = n.y.scale * i.y;
  return (h !== 1 || g !== 1) && (r += `scale(${h}, ${g})`), r || "none";
}
const h_ = Ip.length, oS = (n) => typeof n == "number" || vt.test(n);
function m_(n, i, o, r, l, f) {
  l ? (n.opacity = $t(0, o.opacity ?? 1, p_(r)), n.opacityExit = $t(i.opacity ?? 1, 0, g_(r))) : f && (n.opacity = $t(i.opacity ?? 1, o.opacity ?? 1, r));
  for (let d = 0; d < h_; d++) {
    const h = Ip[d];
    let g = rS(i, h), p = rS(o, h);
    if (g === void 0 && p === void 0)
      continue;
    g || (g = 0), p || (p = 0), g === 0 || p === 0 || oS(g) === oS(p) ? (n[h] = Math.max($t(ju(g), ju(p), r), 0), (yi.test(p) || yi.test(g)) && (n[h] += "%")) : n[h] = p;
  }
  (i.rotate || o.rotate) && (n.rotate = $t(i.rotate || 0, o.rotate || 0, r));
}
function rS(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const p_ = /* @__PURE__ */ aT(0, 0.5, X1), g_ = /* @__PURE__ */ aT(0.5, 0.95, Jn);
function aT(n, i, o) {
  return (r) => r < n ? 0 : r > i ? 1 : o(/* @__PURE__ */ il(n, i, r));
}
function v_(n, i, o) {
  const r = Re(n) ? n : Ma(n);
  return r.start(kp("", r, i, o)), r.animation;
}
function ul(n, i, o, r = { passive: !0 }) {
  return n.addEventListener(i, o, r), () => n.removeEventListener(i, o, r);
}
const y_ = (n, i) => n.depth - i.depth;
class b_ {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(i) {
    wp(this.children, i), this.isDirty = !0;
  }
  remove(i) {
    Du(this.children, i), this.isDirty = !0;
  }
  forEach(i) {
    this.isDirty && this.children.sort(y_), this.isDirty = !1, this.children.forEach(i);
  }
}
function x_(n, i) {
  const o = je.now(), r = ({ timestamp: l }) => {
    const f = l - o;
    f >= i && (xi(r), n(f - i));
  };
  return Xt.setup(r, !0), () => xi(r);
}
function Su(n) {
  return Re(n) ? n.get() : n;
}
class S_ {
  constructor() {
    this.members = [];
  }
  add(i) {
    wp(this.members, i);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === i || r === this.lead || r === this.prevLead)
        continue;
      const l = r.instance;
      (!l || l.isConnected === !1) && !r.snapshot && (Du(this.members, r), r.unmount());
    }
    i.scheduleRender();
  }
  remove(i) {
    if (Du(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
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
      const { layoutDependency: l } = r.options, { layoutDependency: f } = i.options;
      (l === void 0 || l !== f) && (i.resumeFrom = r, o && (r.preserveOpacity = !0), r.snapshot && (i.snapshot = r.snapshot, i.snapshot.latestValues = r.animationValues || r.latestValues), i.root?.isUpdating && (i.isLayoutDirty = !0)), i.options.crossfade === !1 && r.hide();
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
const w_ = {
  borderRadius: {
    ...Xs,
    applyTo: [...Ip]
  },
  borderTopLeftRadius: Xs,
  borderTopRightRadius: Xs,
  borderBottomLeftRadius: Xs,
  borderBottomRightRadius: Xs,
  boxShadow: f_
}, wu = {
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
Object.assign(cl, {
  ...w_,
  ...cl
});
const om = ["", "X", "Y", "Z"], T_ = 1e3;
let E_ = 0;
function rm(n, i, o, r) {
  const { latestValues: l } = i;
  l[n] && (o[n] = l[n], i.setStaticValue(n, 0), r && (r[n] = 0));
}
function oT(n) {
  if (n.hasCheckedOptimisedAppear = !0, n.root === n)
    return;
  const { visualElement: i } = n.options;
  if (!i)
    return;
  const o = _w(i);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: l, layoutId: f } = n.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Xt, !(l || f));
  }
  const { parent: r } = n;
  r && !r.hasCheckedOptimisedAppear && oT(r);
}
function rT({ attachResizeListener: n, defaultParent: i, measureScroll: o, checkIsScrollRoot: r, resetTransform: l }) {
  return class {
    constructor(d = {}, h = i?.()) {
      this.id = E_++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(R_), this.nodes.forEach(V_), this.nodes.forEach(L_), this.nodes.forEach(D_);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new b_());
    }
    addEventListener(d, h) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Ou()), this.eventHandlers.get(d).add(h);
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
      this.isSVG = Gp(d) && !PM(d), this.instance = d;
      const { layoutId: h, layout: g, visualElement: p } = this.options;
      if (p && !p.current && p.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || h) && (this.isLayoutDirty = !0), n) {
        let v, m = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        Xt.read(() => {
          m = window.innerWidth;
        }), n(d, () => {
          const S = window.innerWidth;
          S !== m && (m = S, this.root.updateBlockedByResize = !0, v && v(), v = x_(b, 250), wu.hasAnimatedSinceResize && (wu.hasAnimatedSinceResize = !1, this.nodes.forEach(cS)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && p && (h || g) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: m, hasRelativeLayoutChanged: b, layout: S }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const w = this.options.transition || p.getDefaultTransition() || H_, { onLayoutAnimationStart: A, onLayoutAnimationComplete: C } = p.getProps(), R = !this.targetLayout || !iT(this.targetLayout, S), z = !m && b;
        if (this.options.layoutRoot || this.resumeFrom || z || m && (R || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const D = {
            ...Up(w, "layout"),
            onPlay: A,
            onComplete: C
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (D.delay = 0, D.type = !1), this.startAnimation(D), this.setAnimationOrigin(v, z, D.path);
        } else
          m || cS(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = S;
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(B_), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && oT(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const m = this.path[v];
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), g && this.nodes.forEach(M_), this.nodes.forEach(sS);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(lS);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(N_), this.nodes.forEach(z_), this.nodes.forEach(j_), this.nodes.forEach(C_), this.nodes.forEach(A_)) : this.nodes.forEach(lS), this.clearAllSnapshots();
      const h = je.now();
      Ce.delta = Ji(0, 1e3 / 60, h - Ce.timestamp), Ce.timestamp = h, Ce.isProcessing = !0, Wh.update.process(Ce), Wh.preRender.process(Ce), Wh.render.process(Ce), Ce.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, qp.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(O_), this.sharedNodes.forEach(P_);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Xt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Xt.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = Ee()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      if (!l)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !nT(this.projectionDelta), g = this.getTransformTemplate(), p = g ? g(this.latestValues, "") : void 0, v = p !== this.prevTransformTemplateValue;
      d && this.instance && (h || go(this.latestValues) || v) && (l(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const h = this.measurePageBox();
      let g = this.removeElementScroll(h);
      return d && (g = this.removeTransform(g)), I_(g), {
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
        return Ee();
      const h = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(G_))) {
        const { scroll: p } = this.root;
        p && ($n(h.x, p.offset.x), $n(h.y, p.offset.y));
      }
      return h;
    }
    removeElementScroll(d) {
      const h = Ee();
      if (Xn(h, d), this.scroll?.wasRoot)
        return h;
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g], { scroll: v, options: m } = p;
        p !== this.root && v && m.layoutScroll && (v.wasRoot && Xn(h, d), $n(h.x, v.offset.x), $n(h.y, v.offset.y));
      }
      return h;
    }
    applyTransform(d, h = !1, g) {
      const p = g || Ee();
      Xn(p, d);
      for (let v = 0; v < this.path.length; v++) {
        const m = this.path[v];
        !h && m.options.layoutScroll && m.scroll && m !== m.root && ($n(p.x, -m.scroll.offset.x), $n(p.y, -m.scroll.offset.y)), go(m.latestValues) && gu(p, m.latestValues, m.layout?.layoutBox);
      }
      return go(this.latestValues) && gu(p, this.latestValues, this.layout?.layoutBox), p;
    }
    removeTransform(d) {
      const h = Ee();
      Xn(h, d);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        if (!go(p.latestValues))
          continue;
        let v;
        p.instance && (Km(p.latestValues) && p.updateSnapshot(), v = Ee(), Xn(v, p.measurePageBox())), Jx(h, p.latestValues, p.snapshot?.layoutBox, v);
      }
      return go(this.latestValues) && Jx(h, this.latestValues), h;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ce.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== h;
      if (!(d || g && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: m } = this.options;
      if (!this.layout || !(v || m))
        return;
      this.resolvedRelativeTargetAt = Ce.timestamp;
      const b = this.getClosestProjectingParent();
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ee(), this.targetWithTransforms = Ee()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), r_(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Xn(this.target, this.layout.layoutBox), Pw(this.target, this.targetDelta)) : Xn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Km(this.parent.latestValues) || Bw(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, h, g) {
      this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ee(), this.relativeTargetOrigin = Ee(), Bu(this.relativeTargetOrigin, h, g, this.options.layoutAnchor || void 0), Xn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(), h = !!this.resumingFrom || this !== d;
      let g = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === Ce.timestamp && (g = !1), g)
        return;
      const { layout: p, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || v))
        return;
      Xn(this.layoutCorrected, this.layout.layoutBox);
      const m = this.treeScale.x, b = this.treeScale.y;
      bM(this.layoutCorrected, this.treeScale, this.path, h), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = Ee());
      const { target: S } = d;
      if (!S) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Fx(this.prevProjectionDelta.x, this.projectionDelta.x), Fx(this.prevProjectionDelta.y, this.projectionDelta.y)), el(this.projectionDelta, this.layoutCorrected, S, this.latestValues), (this.treeScale.x !== m || this.treeScale.y !== b || !iS(this.projectionDelta.x, this.prevProjectionDelta.x) || !iS(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", S));
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
      this.prevProjectionDelta = Nr(), this.projectionDelta = Nr(), this.projectionDeltaWithTransform = Nr();
    }
    setAnimationOrigin(d, h = !1, g) {
      const p = this.snapshot, v = p ? p.latestValues : {}, m = { ...this.latestValues }, b = Nr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const S = Ee(), w = p ? p.source : void 0, A = this.layout ? this.layout.source : void 0, C = w !== A, R = this.getStack(), z = !R || R.members.length <= 1, D = !!(C && !z && this.options.crossfade === !0 && !this.path.some(k_));
      this.animationProgress = 0;
      let O;
      const P = g?.interpolateProjection(d);
      this.mixTargetDelta = (k) => {
        const N = k / 1e3, M = P?.(N);
        M ? (b.x.translate = M.x, b.x.scale = $t(d.x.scale, 1, N), b.x.origin = d.x.origin, b.x.originPoint = d.x.originPoint, b.y.translate = M.y, b.y.scale = $t(d.y.scale, 1, N), b.y.origin = d.y.origin, b.y.originPoint = d.y.originPoint) : (uS(b.x, d.x, N), uS(b.y, d.y, N)), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Bu(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), U_(this.relativeTarget, this.relativeTargetOrigin, S, N), O && u_(this.relativeTarget, O) && (this.isProjectionDirty = !1), O || (O = Ee()), Xn(O, this.relativeTarget)), C && (this.animationValues = m, m_(m, v, this.latestValues, N, D, z)), M && M.rotate !== void 0 && (this.animationValues || (this.animationValues = m), this.animationValues.pathRotation = M.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = N;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (xi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Xt.update(() => {
        wu.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ma(0)), this.motionValue.jump(0, !1), this.currentAnimation = v_(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (h) => {
            this.mixTargetDelta(h), d.onUpdate && d.onUpdate(h);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), iO(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(T_), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead(), { targetWithTransforms: h, layout: g, latestValues: p } = d;
      let { target: v } = d;
      if (!(!h || !v || !g)) {
        if (this !== d && this.layout && g && sT(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          v = this.target || Ee();
          const m = Je(this.layout.layoutBox.x);
          v.x.min = d.target.x.min, v.x.max = v.x.min + m;
          const b = Je(this.layout.layoutBox.y);
          v.y.min = d.target.y.min, v.y.max = v.y.min + b;
        }
        Xn(h, v), gu(h, p), el(this.projectionDeltaWithTransform, this.layoutCorrected, h, p);
      }
    }
    registerSharedNode(d, h) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new S_()), this.sharedNodes.get(d).add(h);
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
      g.z && rm("z", d, p, this.animationValues);
      for (let v = 0; v < om.length; v++)
        rm(`rotate${om[v]}`, d, p, this.animationValues), rm(`skew${om[v]}`, d, p, this.animationValues);
      d.render();
      for (const v in p)
        d.setStaticValue(v, p[v]), this.animationValues && (this.animationValues[v] = p[v]);
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
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = Su(h?.pointerEvents) || "", d.transform = g ? g(this.latestValues, "") : "none";
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = Su(h?.pointerEvents) || ""), this.hasProjected && !go(this.latestValues) && (d.transform = g ? g({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const v = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let m = d_(this.projectionDeltaWithTransform, this.treeScale, v);
      g && (m = g(v, m)), d.transform = m;
      const { x: b, y: S } = this.projectionDelta;
      d.transformOrigin = `${b.origin * 100}% ${S.origin * 100}% 0`, p.animationValues ? d.opacity = p === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : d.opacity = p === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const w in cl) {
        if (v[w] === void 0)
          continue;
        const { correct: A, applyTo: C, isCSSVariable: R } = cl[w], z = m === "none" ? v[w] : A(v[w], p);
        if (C) {
          const D = C.length;
          for (let O = 0; O < D; O++)
            d[C[O]] = z;
        } else
          R ? this.options.visualElement.renderState.vars[w] = z : d[w] = z;
      }
      this.options.layoutId && (d.pointerEvents = p === this ? Su(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(sS), this.root.sharedNodes.clear();
    }
  };
}
function C_(n) {
  n.updateLayout(), __(n);
}
function A_(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = n.layout, { animationType: l } = n.options, f = i.source !== n.layout.source;
    if (l === "size")
      Qn((v) => {
        const m = f ? i.measuredBox[v] : i.layoutBox[v], b = Je(m);
        m.min = o[v].min, m.max = m.min + b;
      });
    else if (l === "x" || l === "y") {
      const v = l === "x" ? "y" : "x";
      Qm(f ? i.measuredBox[v] : i.layoutBox[v], o[v]);
    } else sT(l, i.layoutBox, o) && Qn((v) => {
      const m = f ? i.measuredBox[v] : i.layoutBox[v], b = Je(o[v]);
      m.max = m.min + b, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[v].max = n.relativeTarget[v].min + b);
    });
    const d = Nr();
    el(d, o, i.layoutBox);
    const h = Nr();
    f ? el(h, n.applyTransform(r, !0), i.measuredBox) : el(h, o, i.layoutBox);
    const g = !nT(d);
    let p = !1;
    if (!n.resumeFrom) {
      const v = n.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: m, layout: b } = v;
        if (m && b) {
          const S = n.options.layoutAnchor || void 0, w = Ee();
          Bu(w, i.layoutBox, m.layoutBox, S);
          const A = Ee();
          Bu(A, o, b.layoutBox, S), iT(w, A) || (p = !0), v.options.layoutRoot && (n.relativeTarget = A, n.relativeTargetOrigin = w, n.relativeParent = v);
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
function R_(n) {
  n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function D_(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function O_(n) {
  n.clearSnapshot();
}
function sS(n) {
  n.clearMeasurements();
}
function M_(n) {
  n.isLayoutDirty = !0, n.updateLayout();
}
function lS(n) {
  n.isLayoutDirty = !1;
}
function __(n) {
  const { snapshot: i, dragAncestor: o } = n, r = o?.layout;
  if (!i || !r || n.resumeFrom || n.isAnimationBlocked)
    return;
  const l = o.dragSnapshot;
  Qn((f) => $n(i.layoutBox[f], r.layoutBox[f].min - l.layoutBox[f].min));
}
function N_(n) {
  n.isAnimationBlocked && n.layout && !n.isLayoutDirty && (n.snapshot = n.dragSnapshot || n.layout, n.isLayoutDirty = !0);
}
function z_(n) {
  n.relativeTarget && n.relativeParent?.isLayoutDirty && (n.currentAnimation ? n.isLayoutDirty = !0 : (n.targetDelta = void 0, n.removeRelativeTarget()));
}
function j_(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform();
}
function cS(n) {
  n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0;
}
function V_(n) {
  n.resolveTargetDelta();
}
function L_(n) {
  n.calcProjection();
}
function B_(n) {
  n.resetSkewAndRotation();
}
function P_(n) {
  n.removeLeadSnapshot();
}
function uS(n, i, o) {
  n.translate = $t(i.translate, 0, o), n.scale = $t(i.scale, 1, o), n.origin = i.origin, n.originPoint = i.originPoint;
}
function fS(n, i, o, r) {
  n.min = $t(i.min, o.min, r), n.max = $t(i.max, o.max, r);
}
function U_(n, i, o, r) {
  fS(n.x, i.x, o.x, r), fS(n.y, i.y, o.y, r);
}
function k_(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const H_ = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, dS = (n) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n), hS = dS("applewebkit/") && !dS("chrome/") ? Math.round : Jn;
function mS(n) {
  n.min = hS(n.min), n.max = hS(n.max);
}
function I_(n) {
  mS(n.x), mS(n.y);
}
function sT(n, i, o) {
  return n === "position" || n === "preserve-aspect" && !o_(nS(i), nS(o), 0.2);
}
function G_(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const Y_ = rT({
  attachResizeListener: (n, i) => ul(n, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), sm = {
  current: void 0
}, lT = rT({
  measureScroll: (n) => ({
    x: n.scrollLeft,
    y: n.scrollTop
  }),
  defaultParent: () => {
    if (!sm.current) {
      const n = new Y_({});
      n.mount(window), n.setOptions({ layoutScroll: !0 }), sm.current = n;
    }
    return sm.current;
  },
  resetTransform: (n, i) => {
    n.style.transform = i !== void 0 ? i : "none";
  },
  checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed"
}), wo = x.createContext({
  transformPagePoint: (n) => n,
  isStatic: !1,
  reducedMotion: "never"
});
function pS(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
function q_(...n) {
  return (i) => {
    let o = !1;
    const r = n.map((l) => {
      const f = pS(l, i);
      return !o && typeof f == "function" && (o = !0), f;
    });
    if (o)
      return () => {
        for (let l = 0; l < r.length; l++) {
          const f = r[l];
          typeof f == "function" ? f() : pS(n[l], null);
        }
      };
  };
}
function F_(...n) {
  return x.useCallback(q_(...n), n);
}
class X_ extends x.Component {
  getSnapshotBeforeUpdate(i) {
    const o = this.props.childRef.current;
    if (pu(o) && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = o.offsetParent, l = pu(r) && r.offsetWidth || 0, f = pu(r) && r.offsetHeight || 0, d = getComputedStyle(o), h = this.props.sizeRef.current;
      h.height = parseFloat(d.height), h.width = parseFloat(d.width), h.top = o.offsetTop, h.left = o.offsetLeft, h.right = l - h.width - h.left, h.bottom = f - h.height - h.top, h.direction = d.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function K_({ children: n, isPresent: i, anchorX: o, anchorY: r, root: l, pop: f }) {
  const d = x.useId(), h = x.useRef(null), g = x.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: p } = x.useContext(wo), v = f !== !1 ? n.props?.ref ?? n?.ref : void 0, m = F_(h, v);
  return x.useInsertionEffect(() => {
    const { width: b, height: S, top: w, left: A, right: C, bottom: R, direction: z } = g.current;
    if (i || f === !1 || !h.current || !b || !S)
      return;
    const D = z === "rtl", O = o === "left" ? D ? `right: ${C}` : `left: ${A}` : D ? `left: ${A}` : `right: ${C}`, P = r === "bottom" ? `bottom: ${R}` : `top: ${w}`, k = h.current;
    k.dataset.motionPopId = d;
    const N = k.ownerDocument, M = N.createElement("style");
    p && (M.nonce = p);
    const F = l ?? N.head;
    return F.appendChild(M), M.sheet && M.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${S}px !important;
            ${O}px !important;
            ${P}px !important;
          }
        `), () => {
      h.current?.removeAttribute("data-motion-pop-id"), F.contains(M) && F.removeChild(M);
    };
  }, [i]), E.jsx(X_, { isPresent: i, childRef: h, sizeRef: g, pop: f, children: f === !1 ? n : x.cloneElement(n, { ref: m }) });
}
const Z_ = ({ children: n, initial: i, isPresent: o, onExitComplete: r, custom: l, presenceAffectsLayout: f, mode: d, anchorX: h, anchorY: g, root: p }) => {
  const v = Ur(Q_), m = x.useId(), b = x.useRef(o), S = x.useRef(r);
  Lr(() => {
    b.current = o, S.current = r;
  });
  let w = !0, A = x.useMemo(() => (w = !1, {
    id: m,
    initial: i,
    isPresent: o,
    custom: l,
    onExitComplete: (C) => {
      v.set(C, !0);
      for (const R of v.values())
        if (!R)
          return;
      r && r();
    },
    register: (C) => (v.set(C, !1), () => {
      v.delete(C), !b.current && !v.size && S.current?.();
    })
  }), [o, v, r]);
  return f && w && (A = { ...A }), x.useMemo(() => {
    v.forEach((C, R) => v.set(R, !1));
  }, [o]), x.useEffect(() => {
    !o && !v.size && r && r();
  }, [o]), n = E.jsx(K_, { pop: d === "popLayout", isPresent: o, anchorX: h, anchorY: g, root: p, children: n }), E.jsx(Fu.Provider, { value: A, children: n });
};
function Q_() {
  return /* @__PURE__ */ new Map();
}
function cT(n = !0) {
  const i = x.useContext(Fu);
  if (i === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: r, register: l } = i, f = x.useId();
  x.useEffect(() => {
    if (n)
      return l(f);
  }, [n]);
  const d = x.useCallback(() => n && r && r(f), [f, r, n]);
  return !o && r ? [!1, d] : [!0];
}
const Ks = (n) => n.key || "";
function gS(n) {
  const i = [];
  return x.Children.forEach(n, (o) => {
    x.isValidElement(o) && i.push(o);
  }), i;
}
const $_ = ({ children: n, custom: i, initial: o = !0, onExitComplete: r, presenceAffectsLayout: l = !0, mode: f = "sync", propagate: d = !1, anchorX: h = "left", anchorY: g = "top", root: p }) => {
  const [v, m] = cT(d), b = x.useMemo(() => gS(n), [n]), S = d && !v ? [] : b.map(Ks), w = x.useRef(!0), A = Ur(() => /* @__PURE__ */ new Map()), C = x.useRef(/* @__PURE__ */ new Set()), [R, z] = x.useState(b), [D, O] = x.useState(b);
  Lr(() => {
    d && !v && !D.length && m?.();
  }, [v, d, D.length, m]), Lr(() => {
    w.current = !1;
    for (let N = 0; N < D.length; N++) {
      const M = Ks(D[N]);
      S.includes(M) ? (A.delete(M), C.current.delete(M)) : A.get(M) !== !0 && A.set(M, !1);
    }
  }, [D, S.length, S.join("-")]);
  const P = [];
  if (b !== R) {
    let N = [...b], M = 0;
    for (const F of D) {
      const J = S.indexOf(Ks(F));
      J === -1 ? (N.splice(M++, 0, F), P.push(F)) : M = J + P.length + 1;
    }
    return P.every((F) => A.get(Ks(F))) ? N = b : f === "wait" && (N = P), O(gS(N)), z(b), null;
  }
  const { forceRender: k } = x.useContext(Sp);
  return E.jsx(E.Fragment, { children: D.map((N) => {
    const M = Ks(N), F = d && !v ? !1 : b === D || S.includes(M), J = () => {
      if (C.current.has(M))
        return;
      if (A.has(M))
        C.current.add(M), A.set(M, !0);
      else
        return;
      let ut = !0;
      A.forEach((et) => {
        et || (ut = !1);
      }), ut && (k?.(), z([]), d && m?.(), r && r());
    };
    return E.jsx(Z_, { isPresent: F, initial: !w.current || o ? void 0 : !1, custom: i, presenceAffectsLayout: l, mode: f, root: p, onExitComplete: F ? void 0 : J, anchorX: h, anchorY: g, children: N }, M);
  }) });
}, uT = x.createContext({ strict: !1 }), vS = {
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
let yS = !1;
function J_() {
  if (yS)
    return;
  const n = {};
  for (const i in vS)
    n[i] = {
      isEnabled: (o) => vS[i].some((r) => !!o[r])
    };
  Fw(n), yS = !0;
}
function fT() {
  return J_(), FM();
}
function W_(n) {
  const i = fT();
  for (const o in n)
    i[o] = {
      ...i[o],
      ...n[o]
    };
  Fw(i);
}
function tN({ children: n, ...i }) {
  const o = x.useContext(wo);
  i = { ...o, ...i }, i.transition = Pp(i.transition, o.transition), i.isStatic = Ur(() => i.isStatic);
  const r = x.useMemo(() => i, [
    JSON.stringify(i.transition),
    i.transformPagePoint,
    i.reducedMotion,
    i.skipAnimations,
    i.isValidProp
  ]);
  return E.jsx(wo.Provider, { value: r, children: n });
}
const Ju = /* @__PURE__ */ x.createContext({});
function eN(n, i) {
  if ($u(n)) {
    const { initial: o, animate: r } = n;
    return {
      initial: o === !1 || ll(o) ? o : void 0,
      animate: ll(r) ? r : void 0
    };
  }
  return n.inherit !== !1 ? i : {};
}
function nN(n) {
  const { initial: i, animate: o } = eN(n, x.useContext(Ju));
  return x.useMemo(() => ({ initial: i, animate: o }), [bS(i), bS(o)]);
}
function bS(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Qp = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function dT(n, i, o) {
  for (const r in i)
    !Re(i[r]) && !Zw(r, o) && (n[r] = i[r]);
}
function iN({ transformTemplate: n }, i) {
  return x.useMemo(() => {
    const o = Qp();
    return Yp(o, i, n), Object.assign({}, o.vars, o.style);
  }, [i]);
}
function aN(n, i) {
  const o = n.style || {}, r = {};
  return dT(r, o, n), Object.assign(r, iN(n, i)), r;
}
function oN(n, i) {
  const o = {}, r = aN(n, i);
  return n.drag && n.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const hT = () => ({
  ...Qp(),
  attrs: {}
});
function rN(n, i, o, r) {
  const l = x.useMemo(() => {
    const f = hT();
    return Vw(f, i, $w(r), n.transformTemplate, n.style), {
      ...f.attrs,
      style: { ...f.style }
    };
  }, [i]);
  if (n.style) {
    const f = {};
    dT(f, n.style, n), l.style = { ...f, ...l.style };
  }
  return l;
}
const sN = /* @__PURE__ */ new Set([
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
function Pu(n) {
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || sN.has(n);
}
function lN(n, i) {
  return n.startsWith("on") ? !Pu(n) : i?.(n) ?? !Pu(n);
}
function cN(n, i, o, r) {
  const l = {};
  for (const f in n)
    f === "values" && typeof n.values == "object" || Re(n[f]) || (lN(f, r) || o === !0 && Pu(f) || !i && !Pu(f) || // If trying to use native HTML drag events, forward drag listeners
    n.draggable && f.startsWith("onDrag")) && (l[f] = n[f]);
  return l;
}
const uN = [
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
function $p(n) {
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
      !!(uN.indexOf(n) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(n))
    )
  );
}
function fN(n, i, o, { latestValues: r }, l, f = !1, d, h) {
  const p = (d ?? $p(n) ? rN : oN)(i, r, l, n), v = cN(i, typeof n == "string", f, h), m = n !== x.Fragment ? { ...v, ...p, ref: o } : {}, { children: b } = i, S = x.useMemo(() => Re(b) ? b.get() : b, [b]);
  return x.createElement(n, {
    ...m,
    children: S
  });
}
function dN({ scrapeMotionValuesFromProps: n, createRenderState: i }, o, r, l) {
  return {
    latestValues: hN(o, r, l, n),
    renderState: i()
  };
}
function hN(n, i, o, r) {
  const l = {}, f = r(n, {});
  for (const b in f)
    l[b] = Su(f[b]);
  let { initial: d, animate: h } = n;
  const g = $u(n), p = Yw(n);
  i && p && !g && n.inherit !== !1 && (d === void 0 && (d = i.initial), h === void 0 && (h = i.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || d === !1;
  const m = v ? h : d;
  if (m && typeof m != "boolean" && !Qu(m)) {
    const b = Array.isArray(m) ? m : [m];
    for (let S = 0; S < b.length; S++) {
      const w = Rw(n, b[S]);
      if (w) {
        const { transitionEnd: A, transition: C, ...R } = w;
        for (const z in R) {
          let D = R[z];
          if (Array.isArray(D)) {
            const O = v ? D.length - 1 : 0;
            D = D[O];
          }
          D !== null && (l[z] = D);
        }
        for (const z in A)
          l[z] = A[z];
      }
    }
  }
  return l;
}
const mT = (n) => (i, o) => {
  const r = x.useContext(Ju), l = x.useContext(Fu), f = () => dN(n, i, r, l);
  return o ? f() : Ur(f);
}, mN = /* @__PURE__ */ mT({
  scrapeMotionValuesFromProps: Zp,
  createRenderState: Qp
}), pN = /* @__PURE__ */ mT({
  scrapeMotionValuesFromProps: Jw,
  createRenderState: hT
}), gN = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function vN(n, i, o) {
  const r = x.useRef(o);
  x.useInsertionEffect(() => {
    r.current = o;
  });
  const l = x.useRef(null);
  return x.useCallback((f) => {
    f && n.onMount?.(f), i && (f ? i.mount(f) : i.unmount());
    const d = r.current;
    if (typeof d == "function")
      if (f) {
        const h = d(f);
        typeof h == "function" && (l.current = h);
      } else l.current ? (l.current(), l.current = null) : d(f);
    else d && (d.current = f);
  }, [i]);
}
const pT = x.createContext({});
function Rr(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function yN(n, i, o, r, l, f) {
  const { visualElement: d } = x.useContext(Ju), h = x.useContext(uT), g = x.useContext(Fu), p = x.useContext(wo), v = p.reducedMotion, m = p.skipAnimations, b = x.useRef(null), S = x.useRef(!1);
  r = r || h.renderer, !b.current && r && (b.current = r(n, {
    visualState: i,
    parent: d,
    props: o,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: m,
    isSVG: f
  }), S.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const w = b.current, A = x.useContext(pT);
  w && !w.projection && l && (w.type === "html" || w.type === "svg") && bN(b.current, o, l, A);
  const C = x.useRef(!1);
  x.useInsertionEffect(() => {
    w && C.current && w.update(o, g);
  });
  const R = o[Mw], z = x.useRef(!!R && typeof window < "u" && !window.MotionHandoffIsComplete?.(R) && window.MotionHasOptimisedAnimation?.(R));
  return Lr(() => {
    !S.current || !w || (w.animationState?.animateChanges(), w.enteringChildren = void 0);
  }, []), Lr(() => {
    S.current = !0, w && (C.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), w.scheduleRenderMicrotask(), z.current && w.animationState && w.animationState.animateChanges());
  }), x.useEffect(() => {
    w && (!z.current && w.animationState && w.animationState.animateChanges(), z.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(R);
    }), z.current = !1), w.enteringChildren = void 0);
  }), w;
}
function bN(n, i, o, r) {
  const { layoutId: l, layout: f, drag: d, dragConstraints: h, layoutScroll: g, layoutRoot: p, layoutAnchor: v, layoutCrossfade: m } = i;
  n.projection = new o(n.latestValues, i["data-framer-portal-id"] ? void 0 : gT(n.parent)), n.projection.setOptions({
    layoutId: l,
    layout: f,
    alwaysMeasureLayout: !!d || h && Rr(h),
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
    layoutAnchor: v
  });
}
function gT(n) {
  if (n)
    return n.options.allowProjection !== !1 ? n.projection : gT(n.parent);
}
function lm(n, { forwardMotionProps: i = !1, type: o } = {}, r, l) {
  r && W_(r);
  const f = o ? o === "svg" : $p(n), d = f ? pN : mN;
  function h(p, v) {
    let m;
    const b = {
      ...x.useContext(wo),
      ...p,
      layoutId: xN(p)
    }, { isStatic: S, isValidProp: w } = b, A = nN(p), C = d(p, S);
    if (!S && typeof window < "u") {
      SN();
      const R = wN(b);
      m = R.MeasureLayout, A.visualElement = yN(n, C, b, l, R.ProjectionNode, f);
    }
    return E.jsxs(Ju.Provider, { value: A, children: [m && A.visualElement ? E.jsx(m, { visualElement: A.visualElement, ...b }) : null, fN(n, p, vN(C, A.visualElement, v), C, S, i, f, w)] });
  }
  h.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const g = x.forwardRef(h);
  return g[gN] = n, g;
}
function xN({ layoutId: n }) {
  const i = x.useContext(Sp).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function SN(n, i) {
  x.useContext(uT).strict;
}
function wN(n) {
  const i = fT(), { drag: o, layout: r } = i;
  if (!o && !r)
    return {};
  const l = { ...o, ...r };
  return {
    MeasureLayout: o?.isEnabled(n) || r?.isEnabled(n) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode
  };
}
function TN(n, i) {
  if (typeof Proxy > "u")
    return lm;
  const o = /* @__PURE__ */ new Map(), r = (f, d) => lm(f, d, n, i), l = (f, d) => r(f, d);
  return new Proxy(l, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (f, d) => d === "create" ? r : (o.has(d) || o.set(d, lm(d, void 0, n, i)), o.get(d))
  });
}
const EN = (n, i) => i.isSVG ?? $p(n) ? new $M(i) : new ZM(i, {
  allowProjection: n !== x.Fragment
});
class CN extends ja {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(i) {
    super(i), i.animationState || (i.animationState = WM(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Qu(i) && (this.unmountControls = i.subscribe(this.node));
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
let AN = 0;
class RN extends ja {
  constructor() {
    super(...arguments), this.id = AN++;
  }
  update() {
    const { presenceContext: i, prevPresenceContext: o, animationState: r } = this.node;
    if (!i || !r)
      return;
    const { isPresent: l, onExitComplete: f } = i, d = o?.isPresent;
    if (l === d)
      return;
    if (l && d === !1) {
      if (this.exit === !0) {
        const { initial: g } = this.node.getProps();
        if (g && !Array.isArray(g)) {
          const { transition: p, transitionEnd: v, ...m } = So(this.node, g) || {};
          for (const b in m)
            this.node.getValue(b)?.jump(m[b]);
        }
        this.node.blockInitialAnimation = !1, r.reset(), r.animateChanges();
      } else
        r.setActive("exit", !1);
      this.exit = void 0;
      return;
    }
    const h = this.exit = r.setActive("exit", !l);
    f && !l && h.then(() => {
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
const DN = {
  animation: {
    Feature: CN
  },
  exit: {
    Feature: RN
  }
};
function Wu(n) {
  return {
    point: {
      x: n.pageX,
      y: n.pageY
    }
  };
}
const ON = (n) => (i) => Fp(i) && n(i, Wu(i));
function nl(n, i, o, r) {
  return ul(n, i, ON(o), r);
}
const vT = ({ current: n }) => n ? n.ownerDocument.defaultView : null, xS = (n, i) => Math.abs(n - i);
function MN(n, i) {
  const o = xS(n.x, i.x), r = xS(n.y, i.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const SS = /* @__PURE__ */ new Set(["auto", "scroll"]);
class yT {
  constructor(i, o, { transformPagePoint: r, contextWindow: l = window, dragSnapToOrigin: f = !1, distanceThreshold: d = 3, element: h } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (w) => {
      this.handleScroll(w.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Jc(this.lastRawMoveEventInfo, this.transformPagePoint));
      const w = cm(this.lastMoveEventInfo, this.history), A = this.startEvent !== null, C = MN(w.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!A && !C)
        return;
      const { point: R } = w;
      this.history.push({ ...R, timestamp: je.now() });
      const { onStart: z, onMove: D } = this.handlers;
      A || (z && z(this.lastMoveEvent, w), this.startEvent = this.lastMoveEvent), D && D(this.lastMoveEvent, w);
    }, this.handlePointerMove = (w, A) => {
      this.lastMoveEvent = w, this.lastRawMoveEventInfo = A, this.lastMoveEventInfo = Jc(A, this.transformPagePoint), this.hasPendingMove = !0, Xt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (w, A) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: C, onSessionEnd: R, resumeAnimation: z } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && z && z(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const D = cm(w.type === "pointercancel" ? this.lastMoveEventInfo : Jc(A, this.transformPagePoint), this.history);
      this.startEvent && C && C(w, D), R && R(w, D);
    }, !Fp(i))
      return;
    this.dragSnapToOrigin = f, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = d, this.contextWindow = l || window;
    const g = Wu(i), p = Jc(g, this.transformPagePoint), { point: v } = p, { timestamp: m } = Ce;
    this.history = [{ ...v, timestamp: m }];
    const { onSessionStart: b } = o;
    b && b(i, cm(p, this.history));
    const S = { passive: !0, capture: !0 };
    this.removeListeners = pl(nl(this.contextWindow, "pointermove", this.handlePointerMove, S), nl(this.contextWindow, "pointerup", this.handlePointerUp, S), nl(this.contextWindow, "pointercancel", this.handlePointerUp, S)), h && this.startScrollTracking(h);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(i) {
    let o = i.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (SS.has(r.overflowX) || SS.has(r.overflowY)) && this.scrollPositions.set(o, {
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
    const r = i === window, l = r ? { x: window.scrollX, y: window.scrollY } : {
      x: i.scrollLeft,
      y: i.scrollTop
    }, f = { x: l.x - o.x, y: l.y - o.y };
    f.x === 0 && f.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += f.x, this.lastMoveEventInfo.point.y += f.y) : this.history.length > 0 && (this.history[0].x -= f.x, this.history[0].y -= f.y), this.scrollPositions.set(i, l), Xt.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), xi(this.updatePoint);
  }
}
function Jc(n, i) {
  return i ? { point: i(n.point) } : n;
}
function wS(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function cm({ point: n }, i) {
  return {
    point: n,
    delta: wS(n, bT(i)),
    offset: wS(n, _N(i)),
    velocity: NN(i, 0.1)
  };
}
function _N(n) {
  return n[0];
}
function bT(n) {
  return n[n.length - 1];
}
function NN(n, i) {
  if (n.length < 2)
    return { x: 0, y: 0 };
  let o = n.length - 1, r = null;
  const l = bT(n);
  for (; o >= 0 && (r = n[o], !(l.timestamp - r.timestamp > /* @__PURE__ */ Bn(i))); )
    o--;
  if (!r)
    return { x: 0, y: 0 };
  r === n[0] && n.length > 2 && l.timestamp - r.timestamp > /* @__PURE__ */ Bn(i) * 2 && (r = n[1]);
  const f = /* @__PURE__ */ Ln(l.timestamp - r.timestamp);
  if (f === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (l.x - r.x) / f,
    y: (l.y - r.y) / f
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function zN(n, { min: i, max: o }, r) {
  return i !== void 0 && n < i ? n = r ? $t(i, n, r.min) : Math.max(n, i) : o !== void 0 && n > o && (n = r ? $t(o, n, r.max) : Math.min(n, o)), n;
}
function TS(n, i, o) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: o !== void 0 ? n.max + o - (n.max - n.min) : void 0
  };
}
function jN(n, { top: i, left: o, bottom: r, right: l }) {
  return {
    x: TS(n.x, o, l),
    y: TS(n.y, i, r)
  };
}
function ES(n, i) {
  let o = i.min - n.min, r = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([o, r] = [r, o]), { min: o, max: r };
}
function VN(n, i) {
  return {
    x: ES(n.x, i.x),
    y: ES(n.y, i.y)
  };
}
function LN(n, i) {
  let o = 0.5;
  const r = Je(n), l = Je(i);
  return l > r ? o = /* @__PURE__ */ il(i.min, i.max - r, n.min) : r > l && (o = /* @__PURE__ */ il(n.min, n.max - l, i.min)), Ji(0, 1, o);
}
function BN(n, i) {
  const o = {};
  return i.min !== void 0 && (o.min = i.min - n.min), i.max !== void 0 && (o.max = i.max - n.min), o;
}
const $m = 0.35;
function PN(n = $m) {
  return n === !1 ? n = 0 : n === !0 && (n = $m), {
    x: CS(n, "left", "right"),
    y: CS(n, "top", "bottom")
  };
}
function CS(n, i, o) {
  return {
    min: AS(n, i),
    max: AS(n, o)
  };
}
function AS(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const UN = /* @__PURE__ */ new WeakMap();
class kN {
  constructor(i) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ee(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i;
  }
  start(i, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1)
      return;
    const f = (m) => {
      o && this.snapToCursor(m), this.stopAnimation();
    }, d = (m, b) => {
      const { drag: S, dragPropagation: w, onDragStart: A } = this.getProps();
      if (S && !w && (this.openDragLock && this.openDragLock(), this.openDragLock = SM(S), !this.openDragLock))
        return;
      this.latestPointerEvent = m, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Qn((R) => {
        let z = this.getAxisMotionValue(R).get() || 0;
        if (yi.test(z)) {
          const { projection: D } = this.visualElement;
          if (D && D.layout) {
            const O = D.layout.layoutBox[R];
            O && (z = Je(O) * (parseFloat(z) / 100));
          }
        }
        this.originPoint[R] = z;
      }), A && Xt.update(() => A(m, b), !1, !0), qm(this.visualElement, "transform");
      const { animationState: C } = this.visualElement;
      C && C.setActive("whileDrag", !0);
    }, h = (m, b) => {
      this.latestPointerEvent = m, this.latestPanInfo = b;
      const { dragPropagation: S, dragDirectionLock: w, onDirectionLock: A, onDrag: C } = this.getProps();
      if (!S && !this.openDragLock)
        return;
      const { offset: R } = b;
      if (w && this.currentDirection === null) {
        this.currentDirection = IN(R), this.currentDirection !== null && A && A(this.currentDirection);
        return;
      }
      this.updateAxis("x", b.point, R), this.updateAxis("y", b.point, R), this.visualElement.render(), C && Xt.update(() => C(m, b), !1, !0);
    }, g = (m, b) => {
      this.latestPointerEvent = m, this.latestPanInfo = b, this.stop(m, b), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, p = () => {
      const { dragSnapToOrigin: m } = this.getProps();
      (m || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new yT(i, {
      onSessionStart: f,
      onStart: d,
      onMove: h,
      onSessionEnd: g,
      resumeAnimation: p
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: r,
      contextWindow: vT(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(i, o) {
    const r = i || this.latestPointerEvent, l = o || this.latestPanInfo, f = this.isDragging;
    if (this.cancel(), !f || !l || !r)
      return;
    const { velocity: d } = l;
    this.startAnimation(d);
    const { onDragEnd: h } = this.getProps();
    h && Xt.postRender(() => h(r, l));
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
    const { drag: l } = this.getProps();
    if (!r || !Wc(i, l, this.currentDirection))
      return;
    const f = this.getAxisMotionValue(i);
    let d = this.originPoint[i] + r[i];
    this.constraints && this.constraints[i] && (d = zN(d, this.constraints[i], this.elastic[i])), f.set(d);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: o } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, l = this.constraints;
    i && Rr(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && r ? this.constraints = jN(r.layoutBox, i) : this.constraints = !1, this.elastic = PN(o), l !== this.constraints && !Rr(i) && r && this.constraints && !this.hasMutatedConstraints && Qn((f) => {
      this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = BN(r.layoutBox[f], this.constraints[f]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: o } = this.getProps();
    if (!i || !Rr(i))
      return !1;
    const r = i.current, { projection: l } = this.visualElement;
    if (!l || !l.layout)
      return !1;
    l.root && (l.root.scroll = void 0, l.root.updateScroll());
    const f = xM(r, l.root, this.visualElement.getTransformPagePoint());
    let d = VN(l.layout.layoutBox, f);
    if (o) {
      const h = o(vM(d));
      this.hasMutatedConstraints = !!h, h && (d = Lw(h));
    }
    return d;
  }
  startAnimation(i) {
    const { drag: o, dragMomentum: r, dragElastic: l, dragTransition: f, dragSnapToOrigin: d, onDragTransitionEnd: h } = this.getProps(), g = this.constraints || {}, p = Qn((v) => {
      if (!Wc(v, o, this.currentDirection))
        return;
      let m = g && g[v] || {};
      (d === !0 || d === v) && (m = { min: 0, max: 0 });
      const b = l ? 200 : 1e6, S = l ? 40 : 1e7, w = {
        type: "inertia",
        velocity: r ? i[v] : 0,
        bounceStiffness: b,
        bounceDamping: S,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...f,
        ...m
      };
      return this.startAxisValueAnimation(v, w);
    });
    return Promise.all(p).then(h);
  }
  startAxisValueAnimation(i, o) {
    const r = this.getAxisMotionValue(i);
    return qm(this.visualElement, i), r.start(kp(i, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    Qn((i) => this.getAxisMotionValue(i).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(i) {
    const o = `_drag${i.toUpperCase()}`, l = this.visualElement.getProps()[o];
    return l || this.visualElement.getValue(i, this.visualElement.latestValues[i] ?? 0);
  }
  /**
   * Measure the live box - projection.layout may or may not include the
   * drag transform, depending on when it was measured.
   */
  snapToCursor({ clientX: i, clientY: o }) {
    const { drag: r } = this.getProps(), l = { x: i, y: o }, f = this.visualElement.getTransformPagePoint()?.(l) || l, d = this.visualElement.measureViewportBox();
    Qn((h) => {
      if (!Wc(h, r, this.currentDirection))
        return;
      const g = this.getAxisMotionValue(h), { min: p, max: v } = d[h];
      g.set((g.get() || 0) + f[h] - $t(p, v, 0.5));
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
    if (!Rr(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const l = this.constraints, f = { x: 0, y: 0 };
    Qn((h) => {
      const g = this.getAxisMotionValue(h).get();
      f[h] = LN({ min: g, max: g }, l[h]);
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), Qn((h) => {
      const g = this.getAxisMotionValue(h);
      if (!Wc(h, i, null) || !g.get())
        return;
      const { min: p, max: v } = this.constraints[h];
      g.set($t(p, v, f[h]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    UN.set(this.visualElement, this);
    const i = this.visualElement.current, o = nl(i, "pointerdown", (p) => {
      const { drag: v, dragListener: m = !0 } = this.getProps(), b = p.target, S = b !== i && RM(b);
      v && m && !S && this.start(p);
    });
    let r;
    const l = () => {
      const { dragConstraints: p } = this.getProps();
      Rr(p) && p.current && (this.constraints = this.resolveRefConstraints(), r || (r = HN(i, p.current, () => this.scalePositionWithinConstraints())));
    }, { projection: f } = this.visualElement, d = f.addEventListener("measure", l);
    f && !f.layout && (f.root && f.root.updateScroll(), f.updateLayout()), Xt.read(l);
    const h = ul(window, "resize", () => this.scalePositionWithinConstraints()), g = f.addEventListener("didUpdate", (({ delta: p, hasLayoutChanged: v }) => {
      this.isDragging && v && (Qn((m) => {
        const b = this.getAxisMotionValue(m);
        b && (this.originPoint[m] += p[m].translate, b.set(b.get() + p[m].translate));
      }), this.visualElement.render());
    }));
    return () => {
      h(), o(), d(), g && g(), r && r();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: r = !1, dragPropagation: l = !1, dragConstraints: f = !1, dragElastic: d = $m, dragMomentum: h = !0 } = i;
    return {
      ...i,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: l,
      dragConstraints: f,
      dragElastic: d,
      dragMomentum: h
    };
  }
}
function RS(n) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    n();
  };
}
function HN(n, i, o) {
  const r = Px(n, RS(o)), l = Px(i, RS(o));
  return () => {
    r(), l();
  };
}
function Wc(n, i, o) {
  return (i === !0 || i === n) && (o === null || o === n);
}
function IN(n, i = 10) {
  let o = null;
  return Math.abs(n.y) > i ? o = "y" : Math.abs(n.x) > i && (o = "x"), o;
}
class GN extends ja {
  constructor(i) {
    super(i), this.removeGroupControls = Jn, this.removeListeners = Jn, this.controls = new kN(i);
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Jn;
  }
  update() {
    const { dragControls: i } = this.node.getProps(), { dragControls: o } = this.node.prevProps || {};
    i !== o && (this.removeGroupControls(), i && (this.removeGroupControls = i.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const um = (n) => (i, o) => {
  n && Xt.update(() => n(i, o), !1, !0);
};
class YN extends ja {
  constructor() {
    super(...arguments), this.removePointerDownListener = Jn;
  }
  onPointerDown(i) {
    this.session = new yT(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: vT(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: o, onPan: r, onPanEnd: l } = this.node.getProps();
    return {
      onSessionStart: um(i),
      onStart: um(o),
      onMove: um(r),
      onEnd: (f, d) => {
        delete this.session, l && Xt.postRender(() => l(f, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = nl(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let fm = !1;
class qN extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: i, layoutGroup: o, switchLayoutGroup: r, layoutId: l } = this.props, { projection: f } = i;
    f && (o.group && o.group.add(f), r && r.register && l && r.register(f), fm && f.root.didUpdate(), f.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), f.setOptions({
      ...f.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), wu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: o, visualElement: r, drag: l, isPresent: f } = this.props, { projection: d } = r;
    return d && (d.isPresent = f, i.layoutDependency !== o && d.setOptions({
      ...d.options,
      layoutDependency: o
    }), fm = !0, l || i.layoutDependency !== o || o === void 0 || i.isPresent !== f ? d.willUpdate() : this.safeToRemove(), i.isPresent !== f && (f ? d.promote() : d.relegate() || Xt.postRender(() => {
      const h = d.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: i, layoutAnchor: o } = this.props, { projection: r } = i;
    r && (r.options.layoutAnchor = o, r.root.didUpdate(), qp.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: l } = i;
    fm = !0, l && (l.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(l), r && r.deregister && r.deregister(l));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function xT(n) {
  const [i, o] = cT(), r = x.useContext(Sp);
  return E.jsx(qN, { ...n, layoutGroup: r, switchLayoutGroup: x.useContext(pT), isPresent: i, safeToRemove: o });
}
const FN = {
  pan: {
    Feature: YN
  },
  drag: {
    Feature: GN,
    ProjectionNode: lT,
    MeasureLayout: xT
  }
};
function DS(n, i, o) {
  const { props: r } = n;
  n.animationState && r.whileHover && n.animationState.setActive("whileHover", o === "Start");
  const l = "onHover" + o, f = r[l];
  f && Xt.postRender(() => f(i, Wu(i)));
}
class XN extends ja {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = TM(i, (o, r) => (DS(this.node, r, "Start"), (l) => DS(this.node, l, "End"))));
  }
  unmount() {
  }
}
class KN extends ja {
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
    this.unmount = pl(ul(this.node.current, "focus", () => this.onFocus()), ul(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function OS(n, i, o) {
  const { props: r } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled)
    return;
  n.animationState && r.whileTap && n.animationState.setActive("whileTap", o === "Start");
  const l = "onTap" + (o === "End" ? "" : o), f = r[l];
  f && Xt.postRender(() => f(i, Wu(i)));
}
class ZN extends ja {
  mount() {
    const { current: i } = this.node;
    if (!i)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = OM(i, (l, f) => (OS(this.node, f, "Start"), (d, { success: h }) => OS(this.node, d, h ? "End" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: r?.tap === !1
    });
  }
  unmount() {
  }
}
const Jm = /* @__PURE__ */ new WeakMap(), dm = /* @__PURE__ */ new WeakMap(), QN = (n) => {
  const i = Jm.get(n.target);
  i && i(n);
}, $N = (n) => {
  n.forEach(QN);
};
function JN({ root: n, ...i }) {
  const o = n || document;
  dm.has(o) || dm.set(o, {});
  const r = dm.get(o), l = JSON.stringify(i);
  return r[l] || (r[l] = new IntersectionObserver($N, { root: n, ...i })), r[l];
}
function WN(n, i, o) {
  const r = JN(i);
  return Jm.set(n, o), r.observe(n), () => {
    Jm.delete(n), r.unobserve(n);
  };
}
const tz = {
  some: 0,
  all: 1
};
class ez extends ja {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: i = {} } = this.node.getProps(), { root: o, margin: r, amount: l = "some", once: f } = i, d = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof l == "number" ? l : tz[l]
    }, h = (g) => {
      const { isIntersecting: p } = g;
      if (this.isInView === p || (this.isInView = p, f && !p && this.hasEnteredView))
        return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const { onViewportEnter: v, onViewportLeave: m } = this.node.getProps(), b = p ? v : m;
      b && b(g);
    };
    this.stopObserver = WN(this.node.current, d, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(nz(i, o)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function nz({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (o) => n[o] !== i[o];
}
const iz = {
  inView: {
    Feature: ez
  },
  tap: {
    Feature: ZN
  },
  focus: {
    Feature: KN
  },
  hover: {
    Feature: XN
  }
}, az = {
  layout: {
    ProjectionNode: lT,
    MeasureLayout: xT
  }
}, oz = {
  ...DN,
  ...iz,
  ...FN,
  ...az
}, rz = /* @__PURE__ */ TN(oz, EN);
function ST(n) {
  const i = Ur(() => Ma(n)), { isStatic: o } = x.useContext(wo);
  if (o) {
    const [, r] = x.useState(n);
    x.useEffect(() => i.on("change", r), []);
  }
  return i;
}
function wT(n, i) {
  const o = ST(i()), r = () => o.set(i());
  return r(), Lr(() => {
    const l = () => Xt.preRender(r, !1, !0), f = n.map((d) => d.on("change", l));
    return () => {
      f.forEach((d) => d()), xi(r);
    };
  }), o;
}
function sz(n) {
  tl.current = [], n();
  const i = wT(tl.current, n);
  return tl.current = void 0, i;
}
function TT(n, i, o, r) {
  if (typeof n == "function")
    return sz(n);
  const f = typeof i == "function" ? i : UM(i, o, r), d = Array.isArray(n) ? MS(n, f) : MS([n], ([g]) => f(g)), h = Array.isArray(n) ? void 0 : n.accelerate;
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
function MS(n, i) {
  const o = Ur(() => []);
  return wT(n, () => {
    o.length = 0;
    const r = n.length;
    for (let l = 0; l < r; l++)
      o[l] = n[l].get();
    return i(o);
  });
}
function lz(n, i, o) {
  const { isStatic: r } = x.useContext(wo), l = () => Re(n) ? n.get() : n;
  if (r)
    return TT(l);
  const f = ST(l());
  return x.useInsertionEffect(() => o(f, n, i), [f, JSON.stringify(i)]), f;
}
function cz(n, i = {}) {
  return lz(n, i, IM);
}
function uz() {
  !Kp.current && qw();
  const [n] = x.useState(Vu.current);
  return n;
}
const ET = rz;
var Ir = B1();
const fz = /* @__PURE__ */ L1(Ir);
function dz(n) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", i.appendChild(o), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n));
}
const hz = (n) => {
  switch (n) {
    case "success":
      return gz;
    case "info":
      return yz;
    case "warning":
      return vz;
    case "error":
      return bz;
    default:
      return null;
  }
}, mz = Array(12).fill(0), pz = ({ visible: n, className: i }) => /* @__PURE__ */ ot.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    i
  ].filter(Boolean).join(" "),
  "data-visible": n
}, /* @__PURE__ */ ot.createElement("div", {
  className: "sonner-spinner"
}, mz.map((o, r) => /* @__PURE__ */ ot.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))), gz = /* @__PURE__ */ ot.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ ot.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), vz = /* @__PURE__ */ ot.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ ot.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), yz = /* @__PURE__ */ ot.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ ot.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), bz = /* @__PURE__ */ ot.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ ot.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), xz = /* @__PURE__ */ ot.createElement("svg", {
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
}, /* @__PURE__ */ ot.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ ot.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), Sz = () => {
  const [n, i] = ot.useState(document.hidden);
  return ot.useEffect(() => {
    const o = () => {
      i(document.hidden);
    };
    return document.addEventListener("visibilitychange", o), () => document.removeEventListener("visibilitychange", o);
  }, []), n;
};
let wz = 1;
const Tz = 100, _S = (n) => {
  var i;
  return typeof n?.id == "number" || (n == null || (i = n.id) == null ? void 0 : i.length) > 0 ? n.id : wz++;
};
class Ez {
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
      let i = this.toasts.length - Tz;
      i <= 0 || (this.toasts = this.toasts.filter((o) => i > 0 && this.dismissedToasts.has(o.id) ? (this.dismissedToasts.delete(o.id), i--, !1) : !0));
    }, this.create = (i) => {
      const { message: o, ...r } = i, l = _S(i), f = this.pendingDismissals.get(l);
      f !== void 0 && (cancelAnimationFrame(f), this.pendingDismissals.delete(l), this.dismissedToasts.delete(l));
      const d = this.dismissedToasts.has(l), h = i.dismissible === void 0 ? !0 : i.dismissible;
      return d && (this.dismissedToasts.delete(l), this.toasts = this.toasts.filter((p) => p.id !== l)), (d ? void 0 : this.toasts.find((p) => p.id === l)) ? this.toasts = this.toasts.map((p) => p.id === l ? (this.publish({
        ...p,
        ...i,
        id: l,
        title: o
      }), {
        ...p,
        ...i,
        id: l,
        dismissible: h,
        title: o
      }) : p) : this.addToast({
        title: o,
        ...r,
        dismissible: h,
        id: l
      }), l;
    }, this.dismiss = (i) => {
      if (i == null)
        return this.getActiveToasts().forEach((r) => {
          this.dismissedToasts.add(r.id), this.subscribers.forEach((l) => l({
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
      const l = Promise.resolve(i instanceof Function ? i() : i);
      let f = r !== void 0, d;
      const h = l.then(async (p) => {
        if (d = [
          "resolve",
          p
        ], ot.isValidElement(p))
          f = !1, this.create({
            id: r,
            type: "default",
            message: p
          });
        else if (Az(p) && !p.ok) {
          f = !1;
          const m = typeof o.error == "function" ? await o.error(`HTTP error! status: ${p.status}`) : o.error, b = typeof o.description == "function" ? await o.description(`HTTP error! status: ${p.status}`) : o.description, w = typeof m == "object" && !ot.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: r,
            type: "error",
            description: b,
            ...w
          });
        } else if (p instanceof Error) {
          f = !1;
          const m = typeof o.error == "function" ? await o.error(p) : o.error, b = typeof o.description == "function" ? await o.description(p) : o.description, w = typeof m == "object" && !ot.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: r,
            type: "error",
            description: b,
            ...w
          });
        } else if (o.success !== void 0) {
          f = !1;
          const m = typeof o.success == "function" ? await o.success(p) : o.success, b = typeof o.description == "function" ? await o.description(p) : o.description, w = typeof m == "object" && !ot.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: r,
            type: "success",
            description: b,
            ...w
          });
        }
      }).catch(async (p) => {
        if (d = [
          "reject",
          p
        ], o.error !== void 0) {
          f = !1;
          const v = typeof o.error == "function" ? await o.error(p) : o.error, m = typeof o.description == "function" ? await o.description(p) : o.description, S = typeof v == "object" && !ot.isValidElement(v) ? v : {
            message: v
          };
          this.create({
            id: r,
            type: "error",
            description: m,
            ...S
          });
        }
      }).finally(() => {
        f && (this.dismiss(r), r = void 0), o.finally == null || o.finally.call(o);
      }), g = () => new Promise((p, v) => h.then(() => d[0] === "reject" ? v(d[1]) : p(d[1])).catch(v));
      return typeof r != "string" && typeof r != "number" ? {
        unwrap: g
      } : Object.assign(r, {
        unwrap: g
      });
    }, this.custom = (i, o) => {
      const r = _S(o);
      return this.create({
        ...o,
        jsx: i(r),
        id: r,
        type: void 0
      }), r;
    }, this.getActiveToasts = () => this.toasts.filter((i) => !this.dismissedToasts.has(i.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set(), this.pendingDismissals = /* @__PURE__ */ new Map();
  }
}
const cn = new Ez(), Cz = (n, i) => cn.message(n, i), Az = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", Rz = Cz, Dz = () => cn.toasts, Oz = () => cn.getActiveToasts(), NS = Object.assign(Rz, {
  success: cn.success,
  info: cn.info,
  warning: cn.warning,
  error: cn.error,
  custom: cn.custom,
  message: cn.message,
  promise: cn.promise,
  dismiss: cn.dismiss,
  loading: cn.loading
}, {
  getHistory: Dz,
  getToasts: Oz
});
dz("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function tu(n) {
  return n.label !== void 0;
}
const Mz = 3, _z = "24px", Nz = "16px", zS = 4e3, zz = 356, jz = 14, Vz = 45, Lz = 200;
function mi(...n) {
  return n.filter(Boolean).join(" ");
}
function Bz(n) {
  const [i, o] = n.split("-"), r = [];
  return i && r.push(i), o && r.push(o), r;
}
const Pz = (n) => {
  var i, o, r, l, f, d, h, g, p;
  const { invert: v, toast: m, unstyled: b, interacting: S, setHeights: w, visibleToasts: A, heights: C, index: R, toasts: z, expanded: D, removeToast: O, defaultRichColors: P, closeButton: k, style: N, cancelButtonStyle: M, actionButtonStyle: F, className: J = "", descriptionClassName: ut = "", duration: et, position: rt, gap: ft, expandByDefault: dt, classNames: Y, icons: X, closeButtonAriaLabel: $ = "Close toast" } = n, [at, Q] = ot.useState(null), [yt, St] = ot.useState(null), [Ot, j] = ot.useState(!1), [q, W] = ot.useState(!1), [lt, it] = ot.useState(!1), [tt, bt] = ot.useState(!1), [nt, st] = ot.useState(!1), [Dt, ae] = ot.useState(0), [ce, Ve] = ot.useState(0), Jt = ot.useRef(m.duration || et || zS), Bt = ot.useRef(null), fe = ot.useRef(null), Pa = R === 0, ei = R + 1 <= A, de = m.type, Ua = de ?? "default", hn = m.dismissible !== !1, Fr = m.className || "", _o = m.descriptionClassName || "", ta = ot.useMemo(() => C.findIndex((Tt) => Tt.toastId === m.id) || 0, [
    C,
    m.id
  ]), wl = ot.useMemo(() => {
    var Tt;
    return (Tt = m.closeButton) != null ? Tt : k;
  }, [
    m.closeButton,
    k
  ]), Un = ot.useMemo(() => m.duration || et || zS, [
    m.duration,
    et
  ]), ka = ot.useRef(0), ni = ot.useRef(0), Tl = ot.useRef(0), Ei = ot.useRef(null), [Xr, Kr] = rt.split("-"), No = ot.useMemo(() => C.reduce((Tt, he, oe) => oe >= ta ? Tt : Tt + he.height, 0), [
    C,
    ta
  ]), El = Sz(), En = ot.useMemo(() => {
    var Tt;
    return (Tt = n.swipeDirections) != null ? Tt : Bz(rt);
  }, [
    n.swipeDirections,
    rt
  ]), Fe = m.invert || v, Zr = de === "loading";
  ni.current = ot.useMemo(() => ta * ft + No, [
    ta,
    No
  ]), ot.useEffect(() => {
    Jt.current = Un;
  }, [
    Un
  ]), ot.useEffect(() => {
    j(!0);
  }, []), ot.useEffect(() => {
    const Tt = fe.current;
    if (Tt) {
      const he = Tt.getBoundingClientRect().height;
      return Ve(he), w((oe) => [
        {
          toastId: m.id,
          height: he,
          position: m.position
        },
        ...oe
      ]), () => w((oe) => oe.filter((Zt) => Zt.toastId !== m.id));
    }
  }, [
    w,
    m.id
  ]), ot.useLayoutEffect(() => {
    if (!Ot) return;
    const Tt = fe.current, he = Tt.style.height;
    Tt.style.height = "auto";
    const oe = Tt.getBoundingClientRect().height;
    Tt.style.height = he, Ve(oe), w((Zt) => Zt.find((kt) => kt.toastId === m.id) ? Zt.map((kt) => kt.toastId === m.id ? {
      ...kt,
      height: oe
    } : kt) : [
      {
        toastId: m.id,
        height: oe,
        position: m.position
      },
      ...Zt
    ]);
  }, [
    Ot,
    m.title,
    m.description,
    w,
    m.id,
    m.jsx,
    m.action,
    m.cancel
  ]);
  const kn = ot.useCallback(() => {
    W(!0), ae(ni.current), w((Tt) => Tt.filter((he) => he.toastId !== m.id)), setTimeout(() => {
      O(m);
    }, Lz);
  }, [
    m,
    O,
    w,
    ni
  ]);
  ot.useEffect(() => {
    if (m.promise && de === "loading" || m.duration === 1 / 0 || m.type === "loading") return;
    let Tt;
    return D || S || El ? (() => {
      if (Tl.current < ka.current) {
        const Zt = (/* @__PURE__ */ new Date()).getTime() - ka.current;
        Jt.current = Jt.current - Zt;
      }
      Tl.current = (/* @__PURE__ */ new Date()).getTime();
    })() : Jt.current !== 1 / 0 && (ka.current = (/* @__PURE__ */ new Date()).getTime(), Tt = setTimeout(() => {
      m.onAutoClose == null || m.onAutoClose.call(m, m), kn();
    }, Jt.current)), () => clearTimeout(Tt);
  }, [
    D,
    S,
    m,
    de,
    El,
    kn
  ]), ot.useEffect(() => {
    m.delete && (kn(), m.onDismiss == null || m.onDismiss.call(m, m));
  }, [
    kn,
    m.delete
  ]);
  function Qr() {
    var Tt;
    if (X?.loading) {
      var he;
      return /* @__PURE__ */ ot.createElement("div", {
        className: mi(Y?.loader, m == null || (he = m.classNames) == null ? void 0 : he.loader, "sonner-loader"),
        "data-visible": de === "loading"
      }, X.loading);
    }
    return /* @__PURE__ */ ot.createElement(pz, {
      className: mi(Y?.loader, m == null || (Tt = m.classNames) == null ? void 0 : Tt.loader),
      visible: de === "loading"
    });
  }
  const zo = m.icon || X?.[de] || hz(de);
  var Cl, $r;
  return /* @__PURE__ */ ot.createElement("li", {
    tabIndex: 0,
    ref: fe,
    className: mi(J, Fr, Y?.toast, m == null || (i = m.classNames) == null ? void 0 : i.toast, Y?.[Ua], m == null || (o = m.classNames) == null ? void 0 : o[Ua]),
    "data-sonner-toast": "",
    "data-rich-colors": (Cl = m.richColors) != null ? Cl : P,
    "data-styled": !(m.jsx || m.unstyled || b),
    "data-mounted": Ot,
    "data-promise": !!m.promise,
    "data-swiped": nt,
    "data-removed": q,
    "data-visible": ei,
    "data-y-position": Xr,
    "data-x-position": Kr,
    "data-index": R,
    "data-front": Pa,
    "data-swiping": lt,
    "data-dismissible": hn,
    "data-type": de,
    "data-invert": Fe,
    "data-swipe-out": tt,
    "data-swipe-direction": yt,
    "data-expanded": !!(D || dt && Ot),
    "data-testid": m.testId,
    style: {
      "--index": R,
      "--toasts-before": R,
      "--z-index": z.length - R,
      "--offset": `${q ? Dt : ni.current}px`,
      "--initial-height": dt ? "auto" : `${ce}px`,
      ...N,
      ...m.style
    },
    onDragEnd: () => {
      it(!1), Q(null), Ei.current = null;
    },
    onPointerDown: (Tt) => {
      Tt.button !== 2 && (Zr || !hn || (Bt.current = /* @__PURE__ */ new Date(), ae(ni.current), Tt.target.setPointerCapture(Tt.pointerId), Tt.target.tagName !== "BUTTON" && (it(!0), Ei.current = {
        x: Tt.clientX,
        y: Tt.clientY
      })));
    },
    onPointerUp: () => {
      var Tt, he, oe;
      if (tt || !hn) return;
      Ei.current = null;
      const Zt = Number(((Tt = fe.current) == null ? void 0 : Tt.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), tn = Number(((he = fe.current) == null ? void 0 : he.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), kt = (/* @__PURE__ */ new Date()).getTime() - ((oe = Bt.current) == null ? void 0 : oe.getTime()), en = at === "x" ? Zt : tn, Cn = Math.abs(en) / kt;
      if ((at === "x" ? En.includes(Zt > 0 ? "right" : "left") : En.includes(tn > 0 ? "bottom" : "top")) && (Math.abs(en) >= Vz || Cn > 0.11)) {
        ae(ni.current), m.onDismiss == null || m.onDismiss.call(m, m), St(at === "x" ? Zt > 0 ? "right" : "left" : tn > 0 ? "down" : "up"), kn(), bt(!0);
        return;
      } else {
        var Xe, ea;
        (Xe = fe.current) == null || Xe.style.setProperty("--swipe-amount-x", "0px"), (ea = fe.current) == null || ea.style.setProperty("--swipe-amount-y", "0px");
      }
      st(!1), it(!1), Q(null);
    },
    onPointerMove: (Tt) => {
      var he, oe, Zt;
      if (!Ei.current || !hn || ((he = window.getSelection()) == null ? void 0 : he.toString().length) > 0) return;
      const kt = Tt.clientY - Ei.current.y, en = Tt.clientX - Ei.current.x;
      !at && (Math.abs(en) > 1 || Math.abs(kt) > 1) && Q(Math.abs(en) > Math.abs(kt) ? "x" : "y");
      let Cn = {
        x: 0,
        y: 0
      };
      const Jr = (Xe) => 1 / (1.5 + Math.abs(Xe) / 20);
      if (at === "y") {
        if (En.includes("top") || En.includes("bottom"))
          if (En.includes("top") && kt < 0 || En.includes("bottom") && kt > 0)
            Cn.y = kt;
          else {
            const Xe = kt * Jr(kt);
            Cn.y = Math.abs(Xe) < Math.abs(kt) ? Xe : kt;
          }
      } else if (at === "x" && (En.includes("left") || En.includes("right")))
        if (En.includes("left") && en < 0 || En.includes("right") && en > 0)
          Cn.x = en;
        else {
          const Xe = en * Jr(en);
          Cn.x = Math.abs(Xe) < Math.abs(en) ? Xe : en;
        }
      (Math.abs(Cn.x) > 0 || Math.abs(Cn.y) > 0) && st(!0), (oe = fe.current) == null || oe.style.setProperty("--swipe-amount-x", `${Cn.x}px`), (Zt = fe.current) == null || Zt.style.setProperty("--swipe-amount-y", `${Cn.y}px`);
    }
  }, wl && !m.jsx && de !== "loading" ? /* @__PURE__ */ ot.createElement("button", {
    "aria-label": $,
    "data-disabled": Zr,
    "data-close-button": !0,
    onClick: Zr || !hn ? () => {
    } : () => {
      kn(), m.onDismiss == null || m.onDismiss.call(m, m);
    },
    className: mi(Y?.closeButton, m == null || (r = m.classNames) == null ? void 0 : r.closeButton)
  }, ($r = X?.close) != null ? $r : xz) : null, (de || m.icon || m.promise) && m.icon !== null && (X?.[de] !== null || m.icon) ? /* @__PURE__ */ ot.createElement("div", {
    "data-icon": "",
    className: mi(Y?.icon, m == null || (l = m.classNames) == null ? void 0 : l.icon)
  }, de === "loading" ? m.icon || Qr() : m.promise ? Qr() : null, de !== "loading" ? zo : null) : null, /* @__PURE__ */ ot.createElement("div", {
    "data-content": "",
    className: mi(Y?.content, m == null || (f = m.classNames) == null ? void 0 : f.content)
  }, /* @__PURE__ */ ot.createElement("div", {
    "data-title": "",
    className: mi(Y?.title, m == null || (d = m.classNames) == null ? void 0 : d.title)
  }, m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title), m.description ? /* @__PURE__ */ ot.createElement("div", {
    "data-description": "",
    className: mi(ut, _o, Y?.description, m == null || (h = m.classNames) == null ? void 0 : h.description)
  }, typeof m.description == "function" ? m.description() : m.description) : null), /* @__PURE__ */ ot.isValidElement(m.cancel) ? m.cancel : m.cancel && tu(m.cancel) ? /* @__PURE__ */ ot.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: m.cancelButtonStyle || M,
    onClick: (Tt) => {
      tu(m.cancel) && hn && (m.cancel.onClick == null || m.cancel.onClick.call(m.cancel, Tt), kn());
    },
    className: mi(Y?.cancelButton, m == null || (g = m.classNames) == null ? void 0 : g.cancelButton)
  }, m.cancel.label) : null, /* @__PURE__ */ ot.isValidElement(m.action) ? m.action : m.action && tu(m.action) ? /* @__PURE__ */ ot.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: m.actionButtonStyle || F,
    onClick: (Tt) => {
      tu(m.action) && (m.action.onClick == null || m.action.onClick.call(m.action, Tt), !Tt.defaultPrevented && kn());
    },
    className: mi(Y?.actionButton, m == null || (p = m.classNames) == null ? void 0 : p.actionButton)
  }, m.action.label) : null);
};
function jS() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Uz(n, i) {
  const o = {};
  return [
    n,
    i
  ].forEach((r, l) => {
    const f = l === 1, d = f ? "--mobile-offset" : "--offset", h = f ? Nz : _z;
    function g(p) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((v) => {
        o[`${d}-${v}`] = typeof p == "number" ? `${p}px` : p;
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
const kz = /* @__PURE__ */ ot.forwardRef(function(i, o) {
  const { id: r, invert: l, position: f = "bottom-right", hotkey: d = [
    "altKey",
    "KeyT"
  ], expand: h, closeButton: g, className: p, offset: v, mobileOffset: m, theme: b = "light", richColors: S, duration: w, style: A, visibleToasts: C = Mz, toastOptions: R, dir: z = jS(), gap: D = jz, icons: O, customAriaLabel: P, containerAriaLabel: k = "Notifications" } = i, [N, M] = ot.useState([]), F = ot.useMemo(() => r ? N.filter((j) => j.toasterId === r) : N.filter((j) => !j.toasterId), [
    N,
    r
  ]), J = ot.useMemo(() => Array.from(new Set([
    f
  ].concat(F.filter((j) => j.position).map((j) => j.position)))), [
    F,
    f
  ]), [ut, et] = ot.useState([]), [rt, ft] = ot.useState(!1), [dt, Y] = ot.useState(!1), [X, $] = ot.useState(b !== "system" ? b : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), at = ot.useRef(null), Q = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""), yt = ot.useRef(null), St = ot.useRef(!1), Ot = ot.useCallback((j) => {
    M((q) => {
      var W;
      return (W = q.find((lt) => lt.id === j.id)) != null && W.delete || cn.dismiss(j.id), q.filter(({ id: lt }) => lt !== j.id);
    });
  }, []);
  return ot.useEffect(() => cn.subscribe((j) => {
    if (j.dismiss) {
      requestAnimationFrame(() => {
        M((q) => q.map((W) => W.id === j.id ? {
          ...W,
          delete: !0
        } : W));
      });
      return;
    }
    setTimeout(() => {
      fz.flushSync(() => {
        M((q) => {
          const W = q.findIndex((lt) => lt.id === j.id);
          return W !== -1 ? [
            ...q.slice(0, W),
            {
              ...q[W],
              ...j
            },
            ...q.slice(W + 1)
          ] : [
            j,
            ...q
          ];
        });
      });
    });
  }), []), ot.useEffect(() => {
    if (b !== "system") {
      $(b);
      return;
    }
    if (b === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")), typeof window > "u") return;
    const j = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      j.addEventListener("change", ({ matches: q }) => {
        $(q ? "dark" : "light");
      });
    } catch {
      j.addListener(({ matches: W }) => {
        try {
          $(W ? "dark" : "light");
        } catch (lt) {
          console.error(lt);
        }
      });
    }
  }, [
    b
  ]), ot.useEffect(() => {
    N.length <= 1 && ft(!1);
  }, [
    N
  ]), ot.useEffect(() => {
    const j = (q) => {
      var W;
      if (d.length > 0 && d.every((tt) => q[tt] || q.code === tt)) {
        var it;
        ft(!0), (it = at.current) == null || it.focus();
      }
      q.code === "Escape" && (document.activeElement === at.current || (W = at.current) != null && W.contains(document.activeElement)) && ft(!1);
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [
    d
  ]), ot.useEffect(() => {
    if (at.current)
      return () => {
        yt.current && (yt.current.focus({
          preventScroll: !0
        }), yt.current = null, St.current = !1);
      };
  }, [
    at.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ ot.createElement("section", {
    ref: o,
    "aria-label": P ?? `${k} ${Q}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0,
    "data-react-aria-top-layer": !0
  }, J.map((j, q) => {
    var W;
    const [lt, it] = j.split("-");
    return F.length ? /* @__PURE__ */ ot.createElement("ol", {
      key: j,
      dir: z === "auto" ? jS() : z,
      tabIndex: -1,
      ref: at,
      className: p,
      "data-sonner-toaster": !0,
      "data-sonner-theme": X,
      "data-y-position": lt,
      "data-x-position": it,
      style: {
        "--front-toast-height": `${((W = ut[0]) == null ? void 0 : W.height) || 0}px`,
        "--width": `${zz}px`,
        "--gap": `${D}px`,
        ...A,
        ...Uz(v, m)
      },
      onBlur: (tt) => {
        St.current && !tt.currentTarget.contains(tt.relatedTarget) && (St.current = !1, yt.current && (yt.current.focus({
          preventScroll: !0
        }), yt.current = null));
      },
      onFocus: (tt) => {
        tt.target instanceof HTMLElement && tt.target.dataset.dismissible === "false" || St.current || (St.current = !0, yt.current = tt.relatedTarget);
      },
      onMouseEnter: () => ft(!0),
      onMouseMove: () => ft(!0),
      onMouseLeave: () => {
        dt || ft(!1);
      },
      onDragEnd: () => ft(!1),
      onPointerDown: (tt) => {
        tt.target instanceof HTMLElement && tt.target.dataset.dismissible === "false" || Y(!0);
      },
      onPointerUp: () => Y(!1)
    }, F.filter((tt) => !tt.position && q === 0 || tt.position === j).map((tt, bt) => {
      var nt, st;
      return /* @__PURE__ */ ot.createElement(Pz, {
        key: tt.id,
        icons: O,
        index: bt,
        toast: tt,
        defaultRichColors: S,
        duration: (nt = R?.duration) != null ? nt : w,
        className: R?.className,
        descriptionClassName: R?.descriptionClassName,
        invert: l,
        visibleToasts: C,
        closeButton: (st = R?.closeButton) != null ? st : g,
        interacting: dt,
        position: j,
        style: R?.style,
        unstyled: R?.unstyled,
        classNames: R?.classNames,
        cancelButtonStyle: R?.cancelButtonStyle,
        actionButtonStyle: R?.actionButtonStyle,
        closeButtonAriaLabel: R?.closeButtonAriaLabel,
        removeToast: Ot,
        toasts: F.filter((Dt) => Dt.position == tt.position),
        heights: ut.filter((Dt) => Dt.position == tt.position),
        setHeights: et,
        expandByDefault: h,
        gap: D,
        expanded: rt,
        swipeDirections: i.swipeDirections
      });
    })) : null;
  }));
});
const Hz = (n) => n?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function Iz(n, i, o = []) {
  if (i == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: Hz(n),
    size: 24,
    node: i,
    ...o.length > 0 ? { aliases: o } : {}
  };
}
const Gz = (n) => {
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
const Yz = (n) => {
  const i = Gz(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
const Wm = (...n) => n.filter((i, o, r) => !!i && i.trim() !== "" && r.indexOf(i) === o).join(" ").trim();
const uo = {
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
function hm(n) {
  return n != null;
}
function qz(n, i = {}) {
  const o = i.attributeNames ?? {}, r = (b) => o[b] ?? b, l = n.size ?? n.width ?? uo.width, f = n.size ?? n.height ?? uo.height, d = n.aliases?.filter((b) => typeof b == "string" && b.trim() !== "").map((b) => `lucide-${b}`) ?? [], h = [...n.name ? [`lucide-${n.name}`] : [], ...d], g = i.className?.split(" ").filter(Boolean) ?? [], p = i.includeDefaultClasses === !1 ? Wm(...g) : Wm("lucide", ...h, ...g), v = i.absoluteStrokeWidth ? Number(i.strokeWidth ?? uo["stroke-width"]) * Number(n.size ?? n.width ?? uo.width) / Number(i.size ?? i.width ?? uo.width) : i.strokeWidth ?? uo["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(uo).reduce((b, [S, w]) => (b[r(S)] = w, b), {}),
      ..."color" in i && i.color && {
        [r("stroke")]: i.color
      },
      ..."size" in i && hm(i.size) && {
        [r("width")]: i.size,
        [r("height")]: i.size
      },
      ..."width" in i && hm(i.width) && {
        [r("width")]: i.width
      },
      ..."height" in i && hm(i.height) && {
        [r("height")]: i.height
      },
      [r("stroke-width")]: v,
      ...p && {
        [r("class")]: p
      },
      [r("viewBox")]: `0 0 ${l} ${f}`,
      ...i.hasA11yProp === !1 ? {
        [r("aria-hidden")]: "true"
      } : {},
      ..."attributes" in i && i.attributes
    },
    n.node.map((b) => {
      const [S, w, A] = b, C = i.nonScalingStroke ? { [r("vector-effect")]: "non-scaling-stroke", ...w } : w;
      return A ? [S, C, A] : [S, C];
    })
  ];
}
function Fz(n, i = {}) {
  return qz(n, {
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
const Xz = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
}, Kz = x.createContext({}), Zz = () => x.useContext(Kz), Qz = x.forwardRef(
  ({
    color: n,
    size: i,
    width: o,
    height: r,
    strokeWidth: l,
    absoluteStrokeWidth: f,
    nonScalingStroke: d,
    className: h = "",
    children: g,
    iconNode: p = [],
    icon: v = {
      node: p,
      aliases: [],
      size: 24
    },
    ...m
  }, b) => {
    const {
      size: S = 24,
      strokeWidth: w = 2,
      absoluteStrokeWidth: A = !1,
      nonScalingStroke: C = !1,
      color: R = "currentColor",
      className: z = ""
    } = Zz() ?? {}, D = !!g || Xz(m), [O, P, k = []] = Fz(v, {
      color: n ?? R,
      width: o ?? i ?? S,
      height: r ?? i ?? S,
      strokeWidth: l ?? w,
      absoluteStrokeWidth: f ?? A,
      nonScalingStroke: d ?? C,
      className: Wm(z, h),
      hasA11yProp: D,
      attributes: m
    });
    return x.createElement(
      O,
      {
        ref: b,
        ...P
      },
      [
        ...k.map(([N, M]) => x.createElement(N, M)),
        ...Array.isArray(g) ? g : [g]
      ]
    );
  }
);
function We(n, i = [], o = []) {
  const r = typeof n == "string" ? Iz(n, i, o) : n, l = x.forwardRef(
    ({ className: f, ...d }, h) => x.createElement(Qz, {
      ref: h,
      icon: r,
      className: f,
      ...d
    })
  );
  return r.name && (l.displayName = Yz(r.name)), l;
}
const CT = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
CT.node;
const VS = We(CT);
const AT = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
AT.node;
const LS = We(AT);
const RT = {
  name: "book-open",
  size: 24,
  node: [
    ["path", { d: "M12 5v16", key: "1f6ucr" }],
    [
      "path",
      {
        d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
        key: "1fyvmf"
      }
    ]
  ]
};
RT.node;
const DT = We(RT);
const OT = {
  name: "calendar-days",
  size: 24,
  node: [
    ["path", { d: "M8 2v3", key: "1ioesn" }],
    ["path", { d: "M16 2v3", key: "otl347" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M8 13h.01", key: "1sbv64" }],
    ["path", { d: "M12 13h.01", key: "y0uutt" }],
    ["path", { d: "M16 13h.01", key: "wip0gl" }],
    ["path", { d: "M8 17h.01", key: "p3bg7i" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
    ["path", { d: "M16 17h.01", key: "ql8jdd" }]
  ]
};
OT.node;
const BS = We(OT);
const MT = {
  name: "calendar-plus",
  size: 24,
  node: [
    ["path", { d: "M16 18h6", key: "987eiv" }],
    ["path", { d: "M16 2v3", key: "otl347" }],
    ["path", { d: "M19 15v6", key: "10aioa" }],
    ["path", { d: "M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3", key: "jgwkxf" }],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M8 2v3", key: "1ioesn" }]
  ]
};
MT.node;
const $z = We(MT);
const _T = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
_T.node;
const NT = We(_T);
const zT = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
zT.node;
const jT = We(zT);
const VT = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
};
VT.node;
const Jz = We(VT);
const LT = {
  name: "circle",
  size: 24,
  node: [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]
};
LT.node;
const Wz = We(LT);
const BT = {
  name: "info",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }]
  ]
};
BT.node;
const t3 = We(BT);
const PT = {
  name: "pencil",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
      }
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
  ]
};
PT.node;
const e3 = We(PT);
const UT = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
UT.node;
const n3 = We(UT);
const kT = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
kT.node;
const i3 = We(kT);
const HT = {
  name: "trash",
  size: 24,
  node: [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
  ],
  aliases: ["trash-2"]
};
HT.node;
const a3 = We(HT);
const IT = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
IT.node;
const o3 = We(IT);
function GT(n) {
  var i, o, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var l = n.length;
    for (i = 0; i < l; i++) n[i] && (o = GT(n[i])) && (r && (r += " "), r += o);
  } else for (o in n) n[o] && (r && (r += " "), r += o);
  return r;
}
function YT() {
  for (var n, i, o = 0, r = "", l = arguments.length; o < l; o++) (n = arguments[o]) && (i = GT(n)) && (r && (r += " "), r += i);
  return r;
}
const PS = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, US = YT, qT = (n, i) => (o) => {
  var r;
  if (i?.variants == null) return US(n, o?.class, o?.className);
  const { variants: l, defaultVariants: f } = i, d = Object.keys(l).map((p) => {
    const v = o?.[p], m = f?.[p];
    if (v === null) return null;
    const b = PS(v) || PS(m);
    return l[p][b];
  }), h = o && Object.entries(o).reduce((p, v) => {
    let [m, b] = v;
    return b === void 0 || (p[m] = b), p;
  }, {}), g = i == null || (r = i.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((p, v) => {
    let { class: m, className: b, ...S } = v;
    return Object.entries(S).every((w) => {
      let [A, C] = w;
      return Array.isArray(C) ? C.includes({
        ...f,
        ...h
      }[A]) : {
        ...f,
        ...h
      }[A] === C;
    }) ? [
      ...p,
      m,
      b
    ] : p;
  }, []);
  return US(n, d, g, o?.class, o?.className);
}, r3 = (n, i) => {
  const o = new Array(n.length + i.length);
  for (let r = 0; r < n.length; r++)
    o[r] = n[r];
  for (let r = 0; r < i.length; r++)
    o[n.length + r] = i[r];
  return o;
}, s3 = (n, i) => ({
  classGroupId: n,
  validator: i
}), FT = (n = /* @__PURE__ */ new Map(), i = null, o) => ({
  nextPart: n,
  validators: i,
  classGroupId: o
}), Uu = "-", kS = [], l3 = "arbitrary..", c3 = (n) => {
  const i = f3(n), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = n;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return u3(d);
      const h = d.split(Uu), g = h[0] === "" && h.length > 1 ? 1 : 0;
      return XT(h, g, i);
    },
    getConflictingClassGroupIds: (d, h) => {
      if (h) {
        const g = r[d], p = o[d];
        return g ? p ? r3(p, g) : g : p || kS;
      }
      return o[d] || kS;
    }
  };
}, XT = (n, i, o) => {
  if (n.length - i === 0)
    return o.classGroupId;
  const l = n[i], f = o.nextPart.get(l);
  if (f) {
    const p = XT(n, i + 1, f);
    if (p) return p;
  }
  const d = o.validators;
  if (d === null)
    return;
  const h = i === 0 ? n.join(Uu) : n.slice(i).join(Uu), g = d.length;
  for (let p = 0; p < g; p++) {
    const v = d[p];
    if (v.validator(h))
      return v.classGroupId;
  }
}, u3 = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const i = n.slice(1, -1), o = i.indexOf(":"), r = i.slice(0, o);
  return r ? l3 + r : void 0;
})(), f3 = (n) => {
  const {
    theme: i,
    classGroups: o
  } = n;
  return d3(o, i);
}, d3 = (n, i) => {
  const o = FT();
  for (const r in n) {
    const l = n[r];
    Jp(l, o, r, i);
  }
  return o;
}, Jp = (n, i, o, r) => {
  const l = n.length;
  for (let f = 0; f < l; f++) {
    const d = n[f];
    h3(d, i, o, r);
  }
}, h3 = (n, i, o, r) => {
  if (typeof n == "string") {
    m3(n, i, o);
    return;
  }
  if (typeof n == "function") {
    p3(n, i, o, r);
    return;
  }
  g3(n, i, o, r);
}, m3 = (n, i, o) => {
  const r = n === "" ? i : KT(i, n);
  r.classGroupId = o;
}, p3 = (n, i, o, r) => {
  if (v3(n)) {
    Jp(n(r), i, o, r);
    return;
  }
  i.validators === null && (i.validators = []), i.validators.push(s3(o, n));
}, g3 = (n, i, o, r) => {
  const l = Object.entries(n), f = l.length;
  for (let d = 0; d < f; d++) {
    const [h, g] = l[d];
    Jp(g, KT(i, h), o, r);
  }
}, KT = (n, i) => {
  let o = n;
  const r = i.split(Uu), l = r.length;
  for (let f = 0; f < l; f++) {
    const d = r[f];
    let h = o.nextPart.get(d);
    h || (h = FT(), o.nextPart.set(d, h)), o = h;
  }
  return o;
}, v3 = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, y3 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const l = (f, d) => {
    o[f] = d, i++, i > n && (i = 0, r = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(f) {
      let d = o[f];
      if (d !== void 0)
        return d;
      if ((d = r[f]) !== void 0)
        return l(f, d), d;
    },
    set(f, d) {
      f in o ? o[f] = d : l(f, d);
    }
  };
}, tp = "!", HS = ":", b3 = [], IS = (n, i, o, r, l) => ({
  modifiers: n,
  hasImportantModifier: i,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: l
}), x3 = (n) => {
  const {
    prefix: i,
    experimentalParseClassName: o
  } = n;
  let r = (l) => {
    const f = [];
    let d = 0, h = 0, g = 0, p;
    const v = l.length;
    for (let A = 0; A < v; A++) {
      const C = l[A];
      if (d === 0 && h === 0) {
        if (C === HS) {
          f.push(l.slice(g, A)), g = A + 1;
          continue;
        }
        if (C === "/") {
          p = A;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" ? d-- : C === "(" ? h++ : C === ")" && h--;
    }
    const m = f.length === 0 ? l : l.slice(g);
    let b = m, S = !1;
    m.endsWith(tp) ? (b = m.slice(0, -1), S = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(tp) && (b = m.slice(1), S = !0)
    );
    const w = p && p > g ? p - g : void 0;
    return IS(f, S, b, w);
  };
  if (i) {
    const l = i + HS, f = r;
    r = (d) => d.startsWith(l) ? f(d.slice(l.length)) : IS(b3, !1, d, void 0, !0);
  }
  if (o) {
    const l = r;
    r = (f) => o({
      className: f,
      parseClassName: l
    });
  }
  return r;
}, S3 = (n) => {
  const i = /* @__PURE__ */ new Map();
  return n.orderSensitiveModifiers.forEach((o, r) => {
    i.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let l = [];
    for (let f = 0; f < o.length; f++) {
      const d = o[f], h = d[0] === "[", g = i.has(d);
      h || g ? (l.length > 0 && (l.sort(), r.push(...l), l = []), r.push(d)) : l.push(d);
    }
    return l.length > 0 && (l.sort(), r.push(...l)), r;
  };
}, w3 = (n) => ({
  cache: y3(n.cacheSize),
  parseClassName: x3(n),
  sortModifiers: S3(n),
  postfixLookupClassGroupIds: T3(n),
  ...c3(n)
}), T3 = (n) => {
  const i = /* @__PURE__ */ Object.create(null), o = n.postfixLookupClassGroups;
  if (o)
    for (let r = 0; r < o.length; r++)
      i[o[r]] = !0;
  return i;
}, E3 = /\s+/, C3 = (n, i) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: l,
    sortModifiers: f,
    postfixLookupClassGroupIds: d
  } = i, h = [], g = n.trim().split(E3);
  let p = "";
  for (let v = g.length - 1; v >= 0; v -= 1) {
    const m = g[v], {
      isExternal: b,
      modifiers: S,
      hasImportantModifier: w,
      baseClassName: A,
      maybePostfixModifierPosition: C
    } = o(m);
    if (b) {
      p = m + (p.length > 0 ? " " + p : p);
      continue;
    }
    let R = !!C, z;
    if (R) {
      const N = A.substring(0, C);
      z = r(N);
      const M = z && d[z] ? r(A) : void 0;
      M && M !== z && (z = M, R = !1);
    } else
      z = r(A);
    if (!z) {
      if (!R) {
        p = m + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (z = r(A), !z) {
        p = m + (p.length > 0 ? " " + p : p);
        continue;
      }
      R = !1;
    }
    const D = S.length === 0 ? "" : S.length === 1 ? S[0] : f(S).join(":"), O = w ? D + tp : D, P = O + z;
    if (h.indexOf(P) > -1)
      continue;
    h.push(P);
    const k = l(z, R);
    for (let N = 0; N < k.length; ++N) {
      const M = k[N];
      h.push(O + M);
    }
    p = m + (p.length > 0 ? " " + p : p);
  }
  return p;
}, A3 = (...n) => {
  let i = 0, o, r, l = "";
  for (; i < n.length; )
    (o = n[i++]) && (r = ZT(o)) && (l && (l += " "), l += r);
  return l;
}, ZT = (n) => {
  if (typeof n == "string")
    return n;
  let i, o = "";
  for (let r = 0; r < n.length; r++)
    n[r] && (i = ZT(n[r])) && (o && (o += " "), o += i);
  return o;
}, R3 = (n, ...i) => {
  let o, r, l, f;
  const d = (g) => {
    const p = i.reduce((v, m) => m(v), n());
    return o = w3(p), r = o.cache.get, l = o.cache.set, f = h, h(g);
  }, h = (g) => {
    const p = r(g);
    if (p)
      return p;
    const v = C3(g, o);
    return l(g, v), v;
  };
  return f = d, (...g) => f(A3(...g));
}, D3 = [], Te = (n) => {
  const i = (o) => o[n] || D3;
  return i.isThemeGetter = !0, i.themeKey = n, i;
}, QT = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, $T = /^\((?:(\w[\w-]*):)?(.+)\)$/i, O3 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, M3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, N3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, z3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, j3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Da = (n) => O3.test(n), _t = (n) => !!n && !Number.isNaN(Number(n)), pi = (n) => !!n && Number.isInteger(Number(n)), mm = (n) => n.endsWith("%") && _t(n.slice(0, -1)), ki = (n) => M3.test(n), JT = () => !0, V3 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  _3.test(n) && !N3.test(n)
), Wp = () => !1, L3 = (n) => z3.test(n), B3 = (n) => j3.test(n), P3 = (n) => !mt(n) && !pt(n), U3 = (n) => n.startsWith("@container") && (n[10] === "/" && n[11] !== void 0 || n[11] === "s" && n[16] !== void 0 && n.startsWith("-size/", 10) || n[11] === "n" && n[18] !== void 0 && n.startsWith("-normal/", 10)), k3 = (n) => Va(n, eE, Wp), mt = (n) => QT.test(n), fo = (n) => Va(n, nE, V3), GS = (n) => Va(n, K3, _t), H3 = (n) => Va(n, aE, JT), I3 = (n) => Va(n, iE, Wp), YS = (n) => Va(n, WT, Wp), G3 = (n) => Va(n, tE, B3), eu = (n) => Va(n, oE, L3), pt = (n) => $T.test(n), Zs = (n) => Ao(n, nE), Y3 = (n) => Ao(n, iE), qS = (n) => Ao(n, WT), q3 = (n) => Ao(n, eE), F3 = (n) => Ao(n, tE), nu = (n) => Ao(n, oE, !0), X3 = (n) => Ao(n, aE, !0), Va = (n, i, o) => {
  const r = QT.exec(n);
  return r ? r[1] ? i(r[1]) : o(r[2]) : !1;
}, Ao = (n, i, o = !1) => {
  const r = $T.exec(n);
  return r ? r[1] ? i(r[1]) : o : !1;
}, WT = (n) => n === "position" || n === "percentage", tE = (n) => n === "image" || n === "url", eE = (n) => n === "length" || n === "size" || n === "bg-size", nE = (n) => n === "length", K3 = (n) => n === "number", iE = (n) => n === "family-name", aE = (n) => n === "number" || n === "weight", oE = (n) => n === "shadow", Z3 = () => {
  const n = Te("color"), i = Te("font"), o = Te("text"), r = Te("font-weight"), l = Te("tracking"), f = Te("leading"), d = Te("breakpoint"), h = Te("container"), g = Te("spacing"), p = Te("radius"), v = Te("shadow"), m = Te("inset-shadow"), b = Te("text-shadow"), S = Te("drop-shadow"), w = Te("blur"), A = Te("perspective"), C = Te("aspect"), R = Te("ease"), z = Te("animate"), D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [
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
  ], P = () => [...O(), pt, mt], k = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], M = () => [pt, mt, g], F = () => [Da, "full", "auto", ...M()], J = () => [pi, "none", "subgrid", pt, mt], ut = () => ["auto", {
    span: ["full", pi, pt, mt]
  }, pi, pt, mt], et = () => [pi, "auto", pt, mt], rt = () => ["auto", "min", "max", "fr", pt, mt], ft = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], dt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Y = () => ["auto", ...M()], X = () => [Da, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...M()], $ = () => [h, Da, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...M()], at = () => [Da, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...M()], Q = () => [n, pt, mt], yt = () => [...O(), qS, YS, {
    position: [pt, mt]
  }], St = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Ot = () => ["auto", "cover", "contain", q3, k3, {
    size: [pt, mt]
  }], j = () => [mm, Zs, fo], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    pt,
    mt
  ], W = () => ["", _t, Zs, fo], lt = () => ["solid", "dashed", "dotted", "double"], it = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], tt = () => [_t, mm, qS, YS], bt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    pt,
    mt
  ], nt = () => ["none", _t, pt, mt], st = () => ["none", _t, pt, mt], Dt = () => [_t, pt, mt], ae = () => [Da, "full", ...M()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ki],
      breakpoint: [ki],
      color: [JT],
      container: [ki],
      "drop-shadow": [ki],
      ease: ["in", "out", "in-out"],
      font: [P3],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ki],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ki],
      shadow: [ki],
      spacing: ["px", _t],
      text: [ki],
      "text-shadow": [ki],
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
        aspect: ["auto", "square", Da, mt, pt, C]
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
      "container-named": [U3],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [_t, "auto", mt, pt, h]
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
        object: P()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: F()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": F(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: F()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": F(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: F()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": F()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
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
        z: [pi, "auto", pt, mt]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Da, "full", "auto", h, ...M()]
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
        flex: [_t, Da, "auto", "initial", "none", mt]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _t, pt, mt]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _t, pt, mt]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [pi, "first", "last", "none", pt, mt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": J()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ut()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": et()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": et()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": J()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ut()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": et()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": et()
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
        "auto-cols": rt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": rt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: M()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": M()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": M()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ft(), "normal"]
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
        content: ["normal", ...ft()]
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
        "place-content": ft()
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
        p: M()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: M()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: M()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: M()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: M()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: M()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: M()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: M()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: M()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: M()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: M()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Y()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Y()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Y()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Y()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Y()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: Y()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: Y()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Y()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Y()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Y()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Y()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": M()
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
        "space-y": M()
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
        block: ["auto", ...at()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...at()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...at()]
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
        text: ["base", o, Zs, fo]
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
        font: [r, X3, H3]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", mm, mt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Y3, I3, i]
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
        tracking: [l, pt, mt]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_t, "none", pt, GS]
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
          ...M()
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
        placeholder: Q()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: Q()
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
        decoration: [_t, "from-font", "auto", pt, fo]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: Q()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [_t, "auto", pt, mt]
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
        indent: M()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [pi, pt, mt]
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
        bg: yt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: St()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Ot()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, pi, pt, mt],
          radial: ["", pt, mt],
          conic: ["", pi, pt, mt]
        }, F3, G3]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: Q()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: j()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: Q()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: Q()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: Q()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: q()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": q()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": q()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": q()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": q()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": q()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": q()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": q()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": q()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": q()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": q()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": q()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": q()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": q()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": q()
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
        border: Q()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": Q()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": Q()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": Q()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": Q()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": Q()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": Q()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": Q()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": Q()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": Q()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": Q()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: Q()
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
        "outline-offset": [_t, pt, mt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", _t, Zs, fo]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: Q()
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
          v,
          nu,
          eu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: Q()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, nu, eu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": Q()
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
        ring: Q()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [_t, fo]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": Q()
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
        "inset-ring": Q()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", b, nu, eu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": Q()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_t, pt, mt]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...it(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": it()
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
        "mask-linear": [_t]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": tt()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": tt()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Q()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": tt()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": tt()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Q()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": tt()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": tt()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Q()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": tt()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": tt()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Q()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": tt()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": tt()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Q()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": tt()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": tt()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Q()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": tt()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": tt()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": Q()
      }],
      "mask-image-radial": [{
        "mask-radial": [pt, mt]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": tt()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": tt()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": Q()
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
        "mask-radial-at": O()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [_t]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": tt()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": tt()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": Q()
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
        mask: yt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: St()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Ot()
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
        blur: bt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [_t, pt, mt]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_t, pt, mt]
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
          S,
          nu,
          eu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": Q()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", _t, pt, mt]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_t, pt, mt]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _t, pt, mt]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_t, pt, mt]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _t, pt, mt]
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
        "backdrop-blur": bt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [_t, pt, mt]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_t, pt, mt]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _t, pt, mt]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_t, pt, mt]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _t, pt, mt]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_t, pt, mt]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_t, pt, mt]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _t, pt, mt]
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
        "border-spacing": M()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": M()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": M()
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
        duration: [_t, "initial", pt, mt]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", R, pt, mt]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [_t, pt, mt]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", z, pt, mt]
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
        perspective: [A, pt, mt]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": P()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: nt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": nt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": nt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": nt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: st()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": st()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": st()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": st()
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
        skew: Dt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Dt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Dt()
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
        origin: P()
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
        zoom: [pi, pt, mt]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: Q()
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
        caret: Q()
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
        "scrollbar-thumb": Q()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": Q()
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
        "scroll-m": M()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": M()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": M()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
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
        fill: ["none", ...Q()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [_t, Zs, fo, GS]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...Q()]
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
}, Q3 = /* @__PURE__ */ R3(Z3);
function Se(...n) {
  return Q3(YT(n));
}
var $3 = Object.defineProperty, tg = (n, i) => $3(n, "name", { value: i, configurable: !0 });
function ep(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
tg(ep, "setRef");
function rE(...n) {
  return (i) => {
    let o = !1;
    const r = n.map((l) => {
      const f = ep(l, i);
      return !o && typeof f == "function" && (o = !0), f;
    });
    if (o)
      return () => {
        for (let l = 0; l < r.length; l++) {
          const f = r[l];
          typeof f == "function" ? f() : ep(n[l], null);
        }
      };
  };
}
tg(rE, "composeRefs");
function Kt(...n) {
  return x.useCallback(rE(...n), n);
}
tg(Kt, "useComposedRefs");
var J3 = Object.defineProperty, Pn = (n, i) => J3(n, "name", { value: i, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Ki(n) {
  const i = x.forwardRef((o, r) => {
    let { children: l, ...f } = o, d = null, h = !1;
    const g = [];
    np(l) && typeof iu == "function" && (l = iu(l._payload)), x.Children.forEach(l, (b) => {
      if (fE(b)) {
        h = !0;
        const S = b;
        let w = "child" in S.props ? S.props.child : S.props.children;
        np(w) && typeof iu == "function" && (w = iu(w._payload)), d = tj(S, w), g.push(d?.props?.children);
      } else
        g.push(b);
    }), d ? d = x.cloneElement(d, void 0, g) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !h && x.Children.count(l) === 1 && x.isValidElement(l) && (d = l)
    );
    const p = d ? uE(d) : void 0, v = Kt(r, p);
    if (!d) {
      if (l || l === 0)
        throw new Error(
          h ? ij(n) : nj(n)
        );
      return l;
    }
    const m = cE(f, d.props ?? {});
    return d.type !== x.Fragment && (m.ref = r ? v : p), x.cloneElement(d, m);
  });
  return i.displayName = `${n}.Slot`, i;
}
Pn(Ki, "createSlot");
var W3 = /* @__PURE__ */ Ki("Slot"), sE = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function lE(n) {
  const i = /* @__PURE__ */ Pn((o) => "child" in o ? o.children(o.child) : o.children, "Slottable");
  return i.displayName = `${n}.Slottable`, i.__radixId = sE, i;
}
Pn(lE, "createSlottable");
var tj = /* @__PURE__ */ Pn((n, i) => {
  if ("child" in n.props) {
    const o = n.props.child;
    return x.isValidElement(o) ? x.cloneElement(o, void 0, n.props.children(o.props.children)) : null;
  }
  return x.isValidElement(i) ? i : null;
}, "getSlottableElementFromSlottable");
function cE(n, i) {
  const o = { ...i };
  for (const r in i) {
    const l = n[r], f = i[r];
    /^on[A-Z]/.test(r) ? l && f ? o[r] = (...h) => {
      const g = f(...h);
      return l(...h), g;
    } : l && (o[r] = l) : r === "style" ? o[r] = { ...l, ...f } : r === "className" ? o[r] = [l, f].filter(Boolean).join(" ") : r === "aria-describedby" && (o[r] = hE(f, l));
  }
  return { ...n, ...o };
}
Pn(cE, "mergeProps");
function uE(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning;
  return o ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning, o ? n.props.ref : n.props.ref || n.ref);
}
Pn(uE, "getElementRef");
function fE(n) {
  return x.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === sE;
}
Pn(fE, "isSlottable");
var ej = /* @__PURE__ */ Symbol.for("react.lazy");
function np(n) {
  return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === ej && "_payload" in n && dE(n._payload);
}
Pn(np, "isLazyComponent");
function dE(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
Pn(dE, "isPromiseLike");
function hE(...n) {
  const i = /* @__PURE__ */ new Set();
  for (const o of n)
    if (typeof o == "string")
      for (const r of String(o).trim().split(/\s+/))
        r && i.add(r);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
Pn(hE, "concatAriaDescribedby");
var nj = /* @__PURE__ */ Pn((n) => `${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), ij = /* @__PURE__ */ Pn((n) => `${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), iu = Pr[" use ".trim().toString()], aj = Object.defineProperty, oj = (n, i) => aj(n, "name", { value: i, configurable: !0 }), rj = [
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
], It = rj.reduce((n, i) => {
  const o = /* @__PURE__ */ Ki(`Primitive.${i}`), r = x.forwardRef((l, f) => {
    const { asChild: d, ...h } = l, g = d ? o : i;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ E.jsx(g, { ...h, ref: f });
  });
  return r.displayName = `Primitive.${i}`, { ...n, [i]: r };
}, {});
function mE(n, i) {
  n && Ir.flushSync(() => n.dispatchEvent(i));
}
oj(mE, "dispatchDiscreteCustomEvent");
var sj = Object.defineProperty, lj = (n, i) => sj(n, "name", { value: i, configurable: !0 }), pE = Object.freeze({
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
}), cj = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ lj(function(i, o) {
    return /* @__PURE__ */ E.jsx(
      It.span,
      {
        ...i,
        ref: o,
        style: { ...pE, ...i.style }
      }
    );
  }, "VisuallyHidden")
), uj = Object.defineProperty, Vn = (n, i) => uj(n, "name", { value: i, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function fj(n, i) {
  const o = x.createContext(i);
  o.displayName = n + "Context";
  const r = /* @__PURE__ */ Vn((f) => {
    const { children: d, ...h } = f, g = x.useMemo(() => h, Object.values(h));
    return /* @__PURE__ */ E.jsx(o.Provider, { value: g, children: d });
  }, "Provider");
  r.displayName = n + "Provider";
  function l(f, d = {}) {
    const { optional: h = !1 } = d, g = x.useContext(o);
    if (g) return g;
    if (i !== void 0) return i;
    if (!h)
      throw new Error(`\`${f}\` must be used within \`${n}\``);
  }
  return Vn(l, "useContext"), [r, l];
}
Vn(fj, "createContext");
// @__NO_SIDE_EFFECTS__
function Ti(n, i = []) {
  let o = [];
  function r(f, d) {
    const h = x.createContext(d);
    h.displayName = f + "Context";
    const g = o.length;
    o = [...o, d];
    const p = /* @__PURE__ */ Vn((m) => {
      const { scope: b, children: S, ...w } = m, A = b?.[n]?.[g] || h, C = x.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ E.jsx(A.Provider, { value: C, children: S });
    }, "Provider");
    p.displayName = f + "Provider";
    function v(m, b, S = {}) {
      const { optional: w = !1 } = S, A = b?.[n]?.[g] || h, C = x.useContext(A);
      if (C) return C;
      if (d !== void 0) return d;
      if (!w)
        throw new Error(`\`${m}\` must be used within \`${f}\``);
    }
    return Vn(v, "useContext"), [p, v];
  }
  Vn(r, "createContext");
  const l = /* @__PURE__ */ Vn(() => {
    const f = o.map((d) => x.createContext(d));
    return /* @__PURE__ */ Vn(function(h) {
      const g = h?.[n] || f;
      return x.useMemo(
        () => ({ [`__scope${n}`]: { ...h, [n]: g } }),
        [h, g]
      );
    }, "useScope");
  }, "createScope");
  return l.scopeName = n, [r, gE(l, ...i)];
}
Vn(Ti, "createContextScope");
function gE(...n) {
  const i = n[0];
  if (n.length === 1) return i;
  const o = /* @__PURE__ */ Vn(() => {
    const r = n.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return /* @__PURE__ */ Vn(function(f) {
      const d = r.reduce((h, { useScope: g, scopeName: p }) => {
        const m = g(f)[`__scope${p}`];
        return { ...h, ...m };
      }, {});
      return x.useMemo(() => ({ [`__scope${i.scopeName}`]: d }), [d]);
    }, "useComposedScopes");
  }, "createScope");
  return o.scopeName = i.scopeName, o;
}
Vn(gE, "composeContextScopes");
var dj = Object.defineProperty, ze = (n, i) => dj(n, "name", { value: i, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function eg(n) {
  const i = n + "CollectionProvider", [o, r] = /* @__PURE__ */ Ti(i), [l, f] = o(
    i,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = /* @__PURE__ */ ze((A) => {
    const { scope: C, children: R } = A, z = x.useRef(null), D = x.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ E.jsx(l, { scope: C, itemMap: D, collectionRef: z, children: R });
  }, "CollectionProvider");
  d.displayName = i;
  const h = n + "CollectionSlot", g = /* @__PURE__ */ Ki(h), p = x.forwardRef(
    (A, C) => {
      const { scope: R, children: z } = A, D = f(h, R), O = Kt(C, D.collectionRef);
      return /* @__PURE__ */ E.jsx(g, { ref: O, children: z });
    }
  );
  p.displayName = h;
  const v = n + "CollectionItemSlot", m = "data-radix-collection-item", b = /* @__PURE__ */ Ki(v), S = x.forwardRef(
    (A, C) => {
      const { scope: R, children: z, ...D } = A, O = x.useRef(null), P = Kt(C, O), k = f(v, R);
      return x.useEffect(() => (k.itemMap.set(O, { ref: O, ...D }), () => {
        k.itemMap.delete(O);
      })), /* @__PURE__ */ E.jsx(b, { [m]: "", ref: P, children: z });
    }
  );
  S.displayName = v;
  function w(A) {
    const C = f(n + "CollectionConsumer", A);
    return x.useCallback(() => {
      const z = C.collectionRef.current;
      if (!z) return [];
      const D = Array.from(z.querySelectorAll(`[${m}]`));
      return Array.from(C.itemMap.values()).sort(
        (k, N) => D.indexOf(k.ref.current) - D.indexOf(N.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return ze(w, "useCollection"), [
    { Provider: d, Slot: p, ItemSlot: S },
    w,
    r
  ];
}
ze(eg, "createCollection");
var FS = /* @__PURE__ */ new WeakMap(), ye, wn, pm = (wn = class extends Map {
  constructor(o) {
    super(o);
    tx(this, ye);
    Gh(this, ye, [...super.keys()]), FS.set(this, !0);
  }
  set(o, r) {
    return FS.get(this) && (this.has(o) ? qe(this, ye)[qe(this, ye).indexOf(o)] = o : qe(this, ye).push(o)), super.set(o, r), this;
  }
  insert(o, r, l) {
    const f = this.has(r), d = qe(this, ye).length, h = ng(o);
    let g = h >= 0 ? h : d + h;
    const p = g < 0 || g >= d ? -1 : g;
    if (p === this.size || f && p === this.size - 1 || p === -1)
      return this.set(r, l), this;
    const v = this.size + (f ? 0 : 1);
    h < 0 && g++;
    const m = [...qe(this, ye)];
    let b, S = !1;
    for (let w = g; w < v; w++)
      if (g === w) {
        let A = m[w];
        m[w] === r && (A = m[w + 1]), f && this.delete(r), b = this.get(A), this.set(r, l);
      } else {
        !S && m[w - 1] === r && (S = !0);
        const A = m[S ? w : w - 1], C = b;
        b = this.get(A), this.delete(A), this.set(A, C);
      }
    return this;
  }
  with(o, r, l) {
    const f = new wn(this);
    return f.insert(o, r, l), f;
  }
  before(o) {
    const r = qe(this, ye).indexOf(o) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(o, r, l) {
    const f = qe(this, ye).indexOf(o);
    return f === -1 ? this : this.insert(f, r, l);
  }
  after(o) {
    let r = qe(this, ye).indexOf(o);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(o, r, l) {
    const f = qe(this, ye).indexOf(o);
    return f === -1 ? this : this.insert(f + 1, r, l);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return Gh(this, ye, []), super.clear();
  }
  delete(o) {
    const r = super.delete(o);
    return r && qe(this, ye).splice(qe(this, ye).indexOf(o), 1), r;
  }
  deleteAt(o) {
    const r = this.keyAt(o);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(o) {
    const r = Tu(qe(this, ye), o);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(o) {
    const r = Tu(qe(this, ye), o);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(o) {
    return qe(this, ye).indexOf(o);
  }
  keyAt(o) {
    return Tu(qe(this, ye), o);
  }
  from(o, r) {
    const l = this.indexOf(o);
    if (l === -1)
      return;
    let f = l + r;
    return f < 0 && (f = 0), f >= this.size && (f = this.size - 1), this.at(f);
  }
  keyFrom(o, r) {
    const l = this.indexOf(o);
    if (l === -1)
      return;
    let f = l + r;
    return f < 0 && (f = 0), f >= this.size && (f = this.size - 1), this.keyAt(f);
  }
  find(o, r) {
    let l = 0;
    for (const f of this) {
      if (Reflect.apply(o, r, [f, l, this]))
        return f;
      l++;
    }
  }
  findIndex(o, r) {
    let l = 0;
    for (const f of this) {
      if (Reflect.apply(o, r, [f, l, this]))
        return l;
      l++;
    }
    return -1;
  }
  filter(o, r) {
    const l = [];
    let f = 0;
    for (const d of this)
      Reflect.apply(o, r, [d, f, this]) && l.push(d), f++;
    return new wn(l);
  }
  map(o, r) {
    const l = [];
    let f = 0;
    for (const d of this)
      l.push([d[0], Reflect.apply(o, r, [d, f, this])]), f++;
    return new wn(l);
  }
  reduce(...o) {
    const [r, l] = o;
    let f = 0, d = l ?? this.at(0);
    for (const h of this)
      f === 0 && o.length === 1 ? d = h : d = Reflect.apply(r, this, [d, h, f, this]), f++;
    return d;
  }
  reduceRight(...o) {
    const [r, l] = o;
    let f = l ?? this.at(-1);
    for (let d = this.size - 1; d >= 0; d--) {
      const h = this.at(d);
      d === this.size - 1 && o.length === 1 ? f = h : f = Reflect.apply(r, this, [f, h, d, this]);
    }
    return f;
  }
  toSorted(o) {
    const r = [...this.entries()].sort(o);
    return new wn(r);
  }
  toReversed() {
    const o = new wn();
    for (let r = this.size - 1; r >= 0; r--) {
      const l = this.keyAt(r), f = this.get(l);
      o.set(l, f);
    }
    return o;
  }
  toSpliced(...o) {
    const r = [...this.entries()];
    return r.splice(...o), new wn(r);
  }
  slice(o, r) {
    const l = new wn();
    let f = this.size - 1;
    if (o === void 0)
      return l;
    o < 0 && (o = o + this.size), r !== void 0 && r > 0 && (f = r - 1);
    for (let d = o; d <= f; d++) {
      const h = this.keyAt(d), g = this.get(h);
      l.set(h, g);
    }
    return l;
  }
  every(o, r) {
    let l = 0;
    for (const f of this) {
      if (!Reflect.apply(o, r, [f, l, this]))
        return !1;
      l++;
    }
    return !0;
  }
  some(o, r) {
    let l = 0;
    for (const f of this) {
      if (Reflect.apply(o, r, [f, l, this]))
        return !0;
      l++;
    }
    return !1;
  }
}, ye = new WeakMap(), ze(wn, "OrderedDict"), wn);
function Tu(n, i) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(n, i);
  const o = vE(n, i);
  return o === -1 ? void 0 : n[o];
}
ze(Tu, "at");
function vE(n, i) {
  const o = n.length, r = ng(i), l = r >= 0 ? r : o + r;
  return l < 0 || l >= o ? -1 : l;
}
ze(vE, "toSafeIndex");
function ng(n) {
  return n !== n || n === 0 ? 0 : Math.trunc(n);
}
ze(ng, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function hj(n) {
  const i = n + "CollectionProvider", [o, r] = /* @__PURE__ */ Ti(i), [l, f] = o(
    i,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new pm(),
      setItemMap: /* @__PURE__ */ ze(() => {
      }, "setItemMap")
    }
  ), d = /* @__PURE__ */ ze(({ state: D, ...O }) => D ? /* @__PURE__ */ E.jsx(g, { ...O, state: D }) : /* @__PURE__ */ E.jsx(h, { ...O }), "CollectionProvider");
  d.displayName = i;
  const h = /* @__PURE__ */ ze((D) => {
    const O = C();
    return /* @__PURE__ */ E.jsx(g, { ...D, state: O });
  }, "CollectionInit");
  h.displayName = i + "Init";
  const g = /* @__PURE__ */ ze((D) => {
    const { scope: O, children: P, state: k } = D, N = x.useRef(null), [M, F] = x.useState(
      null
    ), J = Kt(N, F), [ut, et] = k;
    return x.useEffect(() => {
      if (!M) return;
      const rt = xE(() => {
      });
      return rt.observe(M, {
        childList: !0,
        subtree: !0
      }), () => {
        rt.disconnect();
      };
    }, [M]), /* @__PURE__ */ E.jsx(
      l,
      {
        scope: O,
        itemMap: ut,
        setItemMap: et,
        collectionRef: J,
        collectionRefObject: N,
        collectionElement: M,
        children: P
      }
    );
  }, "CollectionProviderImpl");
  g.displayName = i + "Impl";
  const p = n + "CollectionSlot", v = /* @__PURE__ */ Ki(p), m = x.forwardRef(
    (D, O) => {
      const { scope: P, children: k } = D, N = f(p, P), M = Kt(O, N.collectionRef);
      return /* @__PURE__ */ E.jsx(v, { ref: M, children: k });
    }
  );
  m.displayName = p;
  const b = n + "CollectionItemSlot", S = "data-radix-collection-item", w = /* @__PURE__ */ Ki(b), A = x.forwardRef(
    (D, O) => {
      const { scope: P, children: k, ...N } = D, M = x.useRef(null), [F, J] = x.useState(null), ut = Kt(O, M, J), et = f(b, P), { setItemMap: rt } = et, ft = x.useRef(N);
      yE(ft.current, N) || (ft.current = N);
      const dt = ft.current;
      return x.useEffect(() => {
        const Y = dt;
        return rt((X) => F ? X.has(F) ? X.set(F, { ...Y, element: F }).toSorted(ip) : (X.set(F, { ...Y, element: F }), X.toSorted(ip)) : X), () => {
          rt((X) => !F || !X.has(F) ? X : (X.delete(F), new pm(X)));
        };
      }, [F, dt, rt]), /* @__PURE__ */ E.jsx(w, { [S]: "", ref: ut, children: k });
    }
  );
  A.displayName = b;
  function C() {
    return x.useState(new pm());
  }
  ze(C, "useInitCollection");
  function R(D) {
    const { itemMap: O } = f(n + "CollectionConsumer", D);
    return O;
  }
  return ze(R, "useCollection"), [
    { Provider: d, Slot: m, ItemSlot: A },
    {
      createCollectionScope: r,
      useCollection: R,
      useInitCollection: C
    }
  ];
}
ze(hj, "createCollection");
function yE(n, i) {
  if (n === i) return !0;
  if (typeof n != "object" || typeof i != "object" || n == null || i == null) return !1;
  const o = Object.keys(n), r = Object.keys(i);
  if (o.length !== r.length) return !1;
  for (const l of o)
    if (!Object.prototype.hasOwnProperty.call(i, l) || n[l] !== i[l]) return !1;
  return !0;
}
ze(yE, "shallowEqual");
function bE(n, i) {
  return !!(i.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING);
}
ze(bE, "isElementPreceding");
function ip(n, i) {
  return !n[1].element || !i[1].element ? 0 : bE(n[1].element, i[1].element) ? -1 : 1;
}
ze(ip, "sortByDocumentPosition");
function xE(n) {
  return new MutationObserver((o) => {
    for (const r of o)
      if (r.type === "childList") {
        n();
        return;
      }
  });
}
ze(xE, "getChildListObserver");
var mj = Object.defineProperty, Gr = (n, i) => mj(n, "name", { value: i, configurable: !0 }), SE = !!(typeof window < "u" && window.document && window.document.createElement);
function Ct(n, i, { checkForDefaultPrevented: o = !0 } = {}) {
  return /* @__PURE__ */ Gr(function(l) {
    if (n?.(l), o === !1 || !l || !l.defaultPrevented)
      return i?.(l);
  }, "handleEvent");
}
Gr(Ct, "composeEventHandlers");
function pj(n) {
  if (!SE)
    throw new Error("Cannot access window outside of the DOM");
  return n?.ownerDocument?.defaultView ?? window;
}
Gr(pj, "getOwnerWindow");
function ap(n) {
  if (!SE)
    throw new Error("Cannot access document outside of the DOM");
  return n?.ownerDocument ?? document;
}
Gr(ap, "getOwnerDocument");
function wE(n, i = !1) {
  const { activeElement: o } = ap(n);
  if (!o?.nodeName)
    return null;
  if (TE(o) && o.contentDocument)
    return wE(o.contentDocument.body, i);
  if (i) {
    const r = o.getAttribute("aria-activedescendant");
    if (r) {
      const l = ap(o).getElementById(r);
      if (l)
        return l;
    }
  }
  return o;
}
Gr(wE, "getActiveElement");
function TE(n) {
  return n.tagName === "IFRAME";
}
Gr(TE, "isFrame");
var le = globalThis?.document ? x.useLayoutEffect : () => {
}, gj = Object.defineProperty, vj = (n, i) => gj(n, "name", { value: i, configurable: !0 }), XS = Pr[" useEffectEvent ".trim().toString()], KS = Pr[" useInsertionEffect ".trim().toString()];
function EE(n) {
  if (typeof XS == "function")
    return XS(n);
  const i = x.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof KS == "function" ? KS(() => {
    i.current = n;
  }) : le(() => {
    i.current = n;
  }), x.useMemo(() => ((...o) => i.current?.(...o)), []);
}
vj(EE, "useEffectEvent");
var yj = Object.defineProperty, yl = (n, i) => yj(n, "name", { value: i, configurable: !0 }), bj = Pr[" useInsertionEffect ".trim().toString()] || le;
function _a({
  prop: n,
  defaultProp: i,
  onChange: o = /* @__PURE__ */ yl(() => {
  }, "onChange"),
  caller: r
}) {
  const [l, f, d] = CE({
    defaultProp: i,
    onChange: o
  }), h = n !== void 0, g = h ? n : l, p = x.useCallback(
    (v) => {
      if (h) {
        const m = AE(v) ? v(n) : v;
        m !== n && d.current?.(m);
      } else
        f(v);
    },
    [h, n, f, d]
  );
  return [g, p];
}
yl(_a, "useControllableState");
function CE({
  defaultProp: n,
  onChange: i
}) {
  const [o, r] = x.useState(n), l = x.useRef(o), f = x.useRef(i);
  return bj(() => {
    f.current = i;
  }, [i]), x.useEffect(() => {
    l.current !== o && (f.current?.(o), l.current = o);
  }, [o, l]), [o, r, f];
}
yl(CE, "useUncontrolledState");
function AE(n) {
  return typeof n == "function";
}
yl(AE, "isFunction");
var ZS = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function xj(n, i, o, r) {
  const { prop: l, defaultProp: f, onChange: d, caller: h } = i, g = l !== void 0, p = EE(d), v = [{ ...o, state: f }];
  r && v.push(r);
  const [m, b] = x.useReducer(
    (C, R) => {
      if (R.type === ZS)
        return { ...C, state: R.state };
      const z = n(C, R);
      return g && !Object.is(z.state, C.state) && p(z.state), z;
    },
    ...v
  ), S = m.state, w = x.useRef(S);
  x.useEffect(() => {
    w.current !== S && (w.current = S, g || p(S));
  }, [S, w, g]);
  const A = x.useMemo(() => l !== void 0 ? { ...m, state: l } : m, [m, l]);
  return x.useEffect(() => {
    g && !Object.is(l, m.state) && b({ type: ZS, state: l });
  }, [l, m.state, g]), [A, b];
}
yl(xj, "useControllableStateReducer");
var Sj = Object.defineProperty, Zi = (n, i) => Sj(n, "name", { value: i, configurable: !0 });
function RE(n, i) {
  return x.useReducer((o, r) => i[o][r] ?? o, n);
}
Zi(RE, "useStateMachine");
var Ro = /* @__PURE__ */ Zi((n) => {
  const { present: i, children: o } = n, r = DE(i), l = typeof o == "function" ? o({ present: r.isPresent }) : x.Children.only(o), f = OE(r.ref, ME(l));
  return typeof o == "function" || r.isPresent ? x.cloneElement(l, { ref: f }) : null;
}, "Presence");
function DE(n) {
  const [i, o] = x.useState(), r = x.useRef(null), l = x.useRef(n), f = x.useRef("none"), d = x.useRef(void 0), h = n ? "mounted" : "unmounted", [g, p] = RE(h, {
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
    g === "mounted" ? (f.current = d.current ?? Dr(r.current), d.current = void 0) : f.current = "none";
  }, [g]), le(() => {
    const v = r.current, m = l.current;
    if (m !== n) {
      const S = f.current, w = Dr(v);
      n ? (d.current = w, p("MOUNT")) : w === "none" || v?.display === "none" ? p("UNMOUNT") : p(m && S !== w ? "ANIMATION_OUT" : "UNMOUNT"), l.current = n;
    }
  }, [n, p]), le(() => {
    if (i) {
      let v;
      const m = i.ownerDocument.defaultView ?? window, b = /* @__PURE__ */ Zi((w) => {
        const C = Dr(r.current).includes(CSS.escape(w.animationName));
        if (w.target === i && C && (p("ANIMATION_END"), !l.current)) {
          const R = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", v = m.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = R);
          });
        }
      }, "handleAnimationEnd"), S = /* @__PURE__ */ Zi((w) => {
        w.target === i && (f.current = Dr(r.current));
      }, "handleAnimationStart");
      return i.addEventListener("animationstart", S), i.addEventListener("animationcancel", b), i.addEventListener("animationend", b), () => {
        m.clearTimeout(v), i.removeEventListener("animationstart", S), i.removeEventListener("animationcancel", b), i.removeEventListener("animationend", b);
      };
    } else
      p("ANIMATION_END");
  }, [i, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(g),
    ref: x.useCallback((v) => {
      if (v) {
        const m = getComputedStyle(v);
        r.current = m, d.current = Dr(m);
      } else
        r.current = null;
      o(v);
    }, [])
  };
}
Zi(DE, "usePresence");
function op(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
Zi(op, "setRef");
function OE(...n) {
  const i = x.useRef(n);
  return i.current = n, x.useCallback((o) => {
    const r = i.current;
    let l = !1;
    const f = r.map((d) => {
      const h = op(d, o);
      return !l && typeof h == "function" && (l = !0), h;
    });
    if (l)
      return () => {
        for (let d = 0; d < f.length; d++) {
          const h = f[d];
          typeof h == "function" ? h() : op(r[d], null);
        }
      };
  }, []);
}
Zi(OE, "useStableComposedRefs");
function Dr(n) {
  return n?.animationName || "none";
}
Zi(Dr, "getAnimationName");
function ME(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning;
  return o ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning, o ? n.props.ref : n.props.ref || n.ref);
}
Zi(ME, "getElementRef");
var wj = Object.defineProperty, Tj = (n, i) => wj(n, "name", { value: i, configurable: !0 }), Ej = Pr[" useId ".trim().toString()] || (() => {
}), Cj = 0;
function Gi(n) {
  const [i, o] = x.useState(Ej());
  return le(() => {
    n || o((r) => r ?? String(Cj++));
  }, [n]), n || (i ? `radix-${i}` : "");
}
Tj(Gi, "useId");
var Aj = Object.defineProperty, Rj = (n, i) => Aj(n, "name", { value: i, configurable: !0 }), Dj = {
  LTR: "ltr"
}, Oj = x.createContext(void 0);
function tf(n) {
  const i = x.useContext(Oj);
  return n || i || Dj.LTR;
}
Rj(tf, "useDirection");
var Mj = Object.defineProperty, _j = (n, i) => Mj(n, "name", { value: i, configurable: !0 });
function Wn(n) {
  const i = x.useRef(n);
  return x.useEffect(() => {
    i.current = n;
  }), x.useMemo(() => ((...o) => i.current?.(...o)), []);
}
_j(Wn, "useCallbackRef");
var Nj = Object.defineProperty, Ne = (n, i) => Nj(n, "name", { value: i, configurable: !0 }), rp = "dismissableLayer.update", zj = "dismissableLayer.pointerDownOutside", jj = "dismissableLayer.focusOutside", QS, _E = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), ig = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ne(function(i, o) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: l = !1,
      onEscapeKeyDown: f,
      onPointerDownOutside: d,
      onFocusOutside: h,
      onInteractOutside: g,
      onDismiss: p,
      ...v
    } = i, m = x.useContext(_E), [b, S] = x.useState(null), w = b?.ownerDocument ?? globalThis?.document, [, A] = x.useState({}), C = Kt(o, S), R = Array.from(m.layers), [z] = [
      ...m.layersWithOutsidePointerEventsDisabled
    ].slice(-1), D = z ? R.indexOf(z) : -1, O = b ? R.indexOf(b) : -1, P = m.layersWithOutsidePointerEventsDisabled.size > 0, k = O >= D, N = x.useRef(!1), M = zE(
      (et) => {
        d?.(et), g?.(et), et.defaultPrevented || p?.();
      },
      {
        ownerDocument: w,
        deferPointerDownOutside: l,
        isDeferredPointerDownOutsideRef: N,
        dismissableSurfaces: m.dismissableSurfaces,
        shouldHandlePointerDownOutside: x.useCallback(
          (et) => {
            if (!(et instanceof Node))
              return !1;
            const rt = [...m.branches].some(
              (ft) => ft.contains(et)
            );
            return k && !rt;
          },
          [m.branches, k]
        )
      }
    ), F = jE((et) => {
      if (l && N.current)
        return;
      const rt = et.target;
      [...m.branches].some((dt) => dt.contains(rt)) || (h?.(et), g?.(et), et.defaultPrevented || p?.());
    }, w), J = b ? O === R.length - 1 : !1, ut = Wn((et) => {
      et.key === "Escape" && (f?.(et), !et.defaultPrevented && p && (et.preventDefault(), p()));
    });
    return x.useEffect(() => {
      if (J)
        return w.addEventListener("keydown", ut, { capture: !0 }), () => w.removeEventListener("keydown", ut, { capture: !0 });
    }, [w, J, ut]), x.useEffect(() => {
      if (b)
        return r && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (QS = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(b)), m.layers.add(b), sp(), () => {
          r && (m.layersWithOutsidePointerEventsDisabled.delete(b), m.layersWithOutsidePointerEventsDisabled.size === 0 && (w.body.style.pointerEvents = QS));
        };
    }, [b, w, r, m]), x.useEffect(() => () => {
      b && (m.layers.delete(b), m.layersWithOutsidePointerEventsDisabled.delete(b), sp());
    }, [b, m]), x.useEffect(() => {
      const et = /* @__PURE__ */ Ne(() => A({}), "handleUpdate");
      return document.addEventListener(rp, et), () => document.removeEventListener(rp, et);
    }, []), /* @__PURE__ */ E.jsx(
      It.div,
      {
        ...v,
        ref: C,
        style: {
          pointerEvents: P ? k ? "auto" : "none" : void 0,
          ...i.style
        },
        onFocusCapture: Ct(i.onFocusCapture, F.onFocusCapture),
        onBlurCapture: Ct(i.onBlurCapture, F.onBlurCapture),
        onPointerDownCapture: Ct(
          i.onPointerDownCapture,
          M.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function NE() {
  const n = x.useContext(_E), [i, o] = x.useState(null);
  return x.useEffect(() => {
    if (i)
      return n.dismissableSurfaces.add(i), () => {
        n.dismissableSurfaces.delete(i);
      };
  }, [i, n.dismissableSurfaces]), o;
}
Ne(NE, "useDismissableLayerSurface");
var Vj = /* @__PURE__ */ Ne(() => !0, "IS_TRUE");
function zE(n, i) {
  const {
    ownerDocument: o = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: l,
    dismissableSurfaces: f,
    shouldHandlePointerDownOutside: d = Vj
  } = i, h = Wn(n), g = x.useRef(!1), p = x.useRef(!1), v = x.useRef(/* @__PURE__ */ new Map()), m = x.useRef(() => {
  });
  return x.useEffect(() => {
    function b() {
      p.current = !1, l.current = !1, v.current.clear();
    }
    Ne(b, "resetOutsideInteraction");
    function S() {
      return Array.from(v.current.values()).some(Boolean);
    }
    Ne(S, "isOutsideInteractionIntercepted");
    function w(D) {
      if (!p.current)
        return;
      const O = D.target;
      O instanceof Node && [...f].some((k) => k.contains(O)) || v.current.set(D.type, !0), D.type === "click" && window.setTimeout(() => {
        p.current && m.current();
      }, 0);
    }
    Ne(w, "handleInteractionCapture");
    function A(D) {
      p.current && v.current.set(D.type, !1);
    }
    Ne(A, "handleInteractionBubble");
    const C = /* @__PURE__ */ Ne((D) => {
      if (D.target && !g.current) {
        let O = function() {
          o.removeEventListener("click", m.current);
          const k = S();
          b(), k || ag(
            zj,
            h,
            P,
            { discrete: !0 }
          );
        };
        if (Ne(O, "handleAndDispatchPointerDownOutsideEvent"), !d(D.target)) {
          o.removeEventListener("click", m.current), b(), g.current = !1;
          return;
        }
        const P = { originalEvent: D };
        p.current = !0, l.current = r && D.button === 0, v.current.clear(), !r || D.button !== 0 ? O() : (o.removeEventListener("click", m.current), m.current = O, o.addEventListener("click", m.current, { once: !0 }));
      } else
        o.removeEventListener("click", m.current), b();
      g.current = !1;
    }, "handlePointerDown"), R = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const D of R)
      o.addEventListener(D, w, !0), o.addEventListener(D, A);
    const z = window.setTimeout(() => {
      o.addEventListener("pointerdown", C);
    }, 0);
    return () => {
      window.clearTimeout(z), o.removeEventListener("pointerdown", C), o.removeEventListener("click", m.current);
      for (const D of R)
        o.removeEventListener(D, w, !0), o.removeEventListener(D, A);
    };
  }, [
    o,
    h,
    r,
    l,
    f,
    d
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ Ne(() => g.current = !0, "onPointerDownCapture")
  };
}
Ne(zE, "usePointerDownOutside");
function jE(n, i = globalThis?.document) {
  const o = Wn(n), r = x.useRef(!1);
  return x.useEffect(() => {
    const l = /* @__PURE__ */ Ne((f) => {
      f.target && !r.current && ag(jj, o, { originalEvent: f }, {
        discrete: !1
      });
    }, "handleFocus");
    return i.addEventListener("focusin", l), () => i.removeEventListener("focusin", l);
  }, [i, o]), {
    onFocusCapture: /* @__PURE__ */ Ne(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Ne(() => r.current = !1, "onBlurCapture")
  };
}
Ne(jE, "useFocusOutside");
function sp() {
  const n = new CustomEvent(rp);
  document.dispatchEvent(n);
}
Ne(sp, "dispatchUpdate");
function ag(n, i, o, { discrete: r }) {
  const l = o.originalEvent.target, f = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: o });
  i && l.addEventListener(n, i, { once: !0 }), r ? mE(l, f) : l.dispatchEvent(f);
}
Ne(ag, "handleAndDispatchCustomEvent");
var Lj = Object.defineProperty, be = (n, i) => Lj(n, "name", { value: i, configurable: !0 }), gm = "focusScope.autoFocusOnMount", vm = "focusScope.autoFocusOnUnmount", $S = { bubbles: !1, cancelable: !0 }, VE = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ be(function(i, o) {
    const {
      loop: r = !1,
      trapped: l = !1,
      branches: f,
      onMountAutoFocus: d,
      onUnmountAutoFocus: h,
      ...g
    } = i, [p, v] = x.useState(null), m = Wn(d), b = Wn(h), S = x.useRef(null), w = Kt(o, v), A = x.useRef(f);
    x.useEffect(() => {
      A.current = f;
    });
    const C = x.useCallback(
      (D) => D ? p?.contains(D) ? !0 : !!A.current?.some((O) => O.contains(D)) : !1,
      [p]
    ), R = x.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    x.useEffect(() => {
      if (l) {
        let D = function(N) {
          if (R.paused || !p) return;
          const M = N.target;
          C(M) ? S.current = M : Ii(S.current, { select: !0 });
        }, O = function(N) {
          if (R.paused || !p) return;
          const M = N.relatedTarget;
          M !== null && (C(M) || Ii(S.current, { select: !0 }));
        }, P = function(N) {
          if (document.activeElement === document.body)
            for (const F of N)
              F.removedNodes.length > 0 && Ii(p);
        };
        be(D, "handleFocusIn"), be(O, "handleFocusOut"), be(P, "handleMutations"), document.addEventListener("focusin", D), document.addEventListener("focusout", O);
        const k = new MutationObserver(P);
        return p && k.observe(p, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", D), document.removeEventListener("focusout", O), k.disconnect();
        };
      }
    }, [l, p, R.paused, C]), x.useEffect(() => {
      if (p) {
        JS.add(R);
        const D = document.activeElement;
        if (!p.contains(D)) {
          const P = new CustomEvent(gm, $S);
          p.addEventListener(gm, m), p.dispatchEvent(P), P.defaultPrevented || (UE(YE(og(p)), { select: !0 }), document.activeElement === D && Ii(p));
        }
        return () => {
          p.removeEventListener(gm, m), setTimeout(() => {
            const P = new CustomEvent(vm, $S);
            p.addEventListener(vm, b), p.dispatchEvent(P), P.defaultPrevented || Ii(D ?? document.body, { select: !0 }), p.removeEventListener(vm, b), JS.remove(R);
          }, 0);
        };
      }
    }, [p, m, b, R]);
    const z = x.useCallback(
      (D) => {
        if (!r && !l || R.paused) return;
        const O = D.key === "Tab" && !D.altKey && !D.ctrlKey && !D.metaKey, P = document.activeElement;
        if (O && P) {
          const k = D.currentTarget, [N, M] = kE(k);
          N && M ? !D.shiftKey && P === M ? (D.preventDefault(), r && Ii(N, { select: !0 })) : D.shiftKey && P === N && (D.preventDefault(), r && Ii(M, { select: !0 })) : P === k && D.preventDefault();
        }
      },
      [r, l, R.paused]
    );
    return /* @__PURE__ */ E.jsx(It.div, { tabIndex: -1, ...g, ref: w, onKeyDown: z });
  }, "FocusScope")
), LE = x.createContext(null);
function BE({ registry: n, children: i }) {
  return n ? /* @__PURE__ */ E.jsx(LE.Provider, { value: n, children: i }) : i;
}
be(BE, "FocusScopeBranchProvider");
function PE() {
  const [n, i] = x.useState([]), o = x.useMemo(
    () => ({
      add: /* @__PURE__ */ be((r) => i((l) => l.includes(r) ? l : [...l, r]), "add"),
      remove: /* @__PURE__ */ be((r) => i((l) => l.filter((f) => f !== r)), "remove")
    }),
    []
  );
  return { nodes: n, registry: o };
}
be(PE, "useFocusScopeBranchRegistry");
function Bj(n) {
  const i = x.useContext(LE);
  x.useEffect(() => {
    if (!(!n || !i))
      return i.add(n), () => i.remove(n);
  }, [n, i]);
}
be(Bj, "useFocusScopeBranch");
function UE(n, { select: i = !1 } = {}) {
  const o = document.activeElement;
  for (const r of n)
    if (Ii(r, { select: i }), document.activeElement !== o) return;
}
be(UE, "focusFirst");
function kE(n) {
  const i = og(n), o = lp(i, n), r = lp(i.reverse(), n);
  return [o, r];
}
be(kE, "getTabbableEdges");
function og(n) {
  const i = [], o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ be((r) => {
      const l = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || l ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; o.nextNode(); ) i.push(o.currentNode);
  return i;
}
be(og, "getTabbableCandidates");
function lp(n, i) {
  const o = typeof i.checkVisibility == "function" && i.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of n)
    if (!(o ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : HE(r, { upTo: i })))
      return r;
}
be(lp, "findVisible");
function HE(n, { upTo: i }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (i !== void 0 && n === i) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
be(HE, "isHidden");
function IE(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
be(IE, "isSelectableInput");
function Ii(n, { select: i = !1 } = {}) {
  if (n && n.focus) {
    const o = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== o && IE(n) && i && n.select();
  }
}
be(Ii, "focus");
var JS = GE();
function GE() {
  let n = [];
  return {
    add(i) {
      const o = n[0];
      i !== o && o?.pause(), n = cp(n, i), n.unshift(i);
    },
    remove(i) {
      n = cp(n, i), n[0]?.resume();
    }
  };
}
be(GE, "createFocusScopesStack");
function cp(n, i) {
  const o = [...n], r = o.indexOf(i);
  return r !== -1 && o.splice(r, 1), o;
}
be(cp, "arrayRemove");
function YE(n) {
  return n.filter((i) => i.tagName !== "A");
}
be(YE, "removeLinks");
var Pj = Object.defineProperty, Uj = (n, i) => Pj(n, "name", { value: i, configurable: !0 }), rg = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Uj(function(i, o) {
    const { container: r, ...l } = i, [f, d] = x.useState(!1);
    le(() => d(!0), []);
    const h = r || f && globalThis?.document?.body;
    return h ? Ir.createPortal(/* @__PURE__ */ E.jsx(It.div, { ...l, ref: o }), h) : null;
  }, "Portal")
), kj = Object.defineProperty, sg = (n, i) => kj(n, "name", { value: i, configurable: !0 }), au = 0, Tr = null;
function Hj(n) {
  return ef(), n.children;
}
sg(Hj, "FocusGuards");
function ef() {
  x.useEffect(() => {
    Tr || (Tr = { start: up(), end: up() });
    const { start: n, end: i } = Tr;
    return document.body.firstElementChild !== n && document.body.insertAdjacentElement("afterbegin", n), document.body.lastElementChild !== i && document.body.insertAdjacentElement("beforeend", i), au++, () => {
      au === 1 && (Tr?.start.remove(), Tr?.end.remove(), Tr = null), au = Math.max(0, au - 1);
    };
  }, []);
}
sg(ef, "useFocusGuards");
function up() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
sg(up, "createFocusGuard");
var gi = function() {
  return gi = Object.assign || function(i) {
    for (var o, r = 1, l = arguments.length; r < l; r++) {
      o = arguments[r];
      for (var f in o) Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
    }
    return i;
  }, gi.apply(this, arguments);
};
function qE(n, i) {
  var o = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && i.indexOf(r) < 0 && (o[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, r = Object.getOwnPropertySymbols(n); l < r.length; l++)
      i.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[l]) && (o[r[l]] = n[r[l]]);
  return o;
}
function Ij(n, i, o) {
  if (o || arguments.length === 2) for (var r = 0, l = i.length, f; r < l; r++)
    (f || !(r in i)) && (f || (f = Array.prototype.slice.call(i, 0, r)), f[r] = i[r]);
  return n.concat(f || Array.prototype.slice.call(i));
}
var Eu = "right-scroll-bar-position", Cu = "width-before-scroll-bar", Gj = "with-scroll-bars-hidden", Yj = "--removed-body-scroll-bar-size";
function ym(n, i) {
  return typeof n == "function" ? n(i) : n && (n.current = i), n;
}
function qj(n, i) {
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
          var l = o.value;
          l !== r && (o.value = r, o.callback(r, l));
        }
      }
    };
  })[0];
  return o.callback = i, o.facade;
}
var Fj = typeof window < "u" ? x.useLayoutEffect : x.useEffect, WS = /* @__PURE__ */ new WeakMap();
function Xj(n, i) {
  var o = qj(null, function(r) {
    return n.forEach(function(l) {
      return ym(l, r);
    });
  });
  return Fj(function() {
    var r = WS.get(o);
    if (r) {
      var l = new Set(r), f = new Set(n), d = o.current;
      l.forEach(function(h) {
        f.has(h) || ym(h, null);
      }), f.forEach(function(h) {
        l.has(h) || ym(h, d);
      });
    }
    WS.set(o, n);
  }, [n]), o;
}
function Kj(n) {
  return n;
}
function Zj(n, i) {
  i === void 0 && (i = Kj);
  var o = [], r = !1, l = {
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
        var v = d;
        d = [], v.forEach(f);
      }, p = function() {
        return Promise.resolve().then(g);
      };
      p(), o = {
        push: function(v) {
          d.push(v), p();
        },
        filter: function(v) {
          return d = d.filter(v), o;
        }
      };
    }
  };
  return l;
}
function Qj(n) {
  n === void 0 && (n = {});
  var i = Zj(null);
  return i.options = gi({ async: !0, ssr: !1 }, n), i;
}
var FE = function(n) {
  var i = n.sideCar, o = qE(n, ["sideCar"]);
  if (!i)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = i.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, gi({}, o));
};
FE.isSideCarExport = !0;
function $j(n, i) {
  return n.useMedium(i), FE;
}
var XE = Qj(), bm = function() {
}, nf = x.forwardRef(function(n, i) {
  var o = x.useRef(null), r = x.useState({
    onScrollCapture: bm,
    onWheelCapture: bm,
    onTouchMoveCapture: bm
  }), l = r[0], f = r[1], d = n.forwardProps, h = n.children, g = n.className, p = n.removeScrollBar, v = n.enabled, m = n.shards, b = n.sideCar, S = n.noRelative, w = n.noIsolation, A = n.inert, C = n.allowPinchZoom, R = n.as, z = R === void 0 ? "div" : R, D = n.gapMode, O = qE(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = b, k = Xj([o, i]), N = gi(gi({}, O), l);
  return x.createElement(
    x.Fragment,
    null,
    v && x.createElement(P, { sideCar: XE, removeScrollBar: p, shards: m, noRelative: S, noIsolation: w, inert: A, setCallbacks: f, allowPinchZoom: !!C, lockRef: o, gapMode: D }),
    d ? x.cloneElement(x.Children.only(h), gi(gi({}, N), { ref: k })) : x.createElement(z, gi({}, N, { className: g, ref: k }), h)
  );
});
nf.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
nf.classNames = {
  fullWidth: Cu,
  zeroRight: Eu
};
var Jj = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Wj() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var i = Jj();
  return i && n.setAttribute("nonce", i), n;
}
function t5(n, i) {
  n.styleSheet ? n.styleSheet.cssText = i : n.appendChild(document.createTextNode(i));
}
function e5(n) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(n);
}
var n5 = function() {
  var n = 0, i = null;
  return {
    add: function(o) {
      n == 0 && (i = Wj()) && (t5(i, o), e5(i)), n++;
    },
    remove: function() {
      n--, !n && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
    }
  };
}, i5 = function() {
  var n = n5();
  return function(i, o) {
    x.useEffect(function() {
      return n.add(i), function() {
        n.remove();
      };
    }, [i && o]);
  };
}, KE = function() {
  var n = i5(), i = function(o) {
    var r = o.styles, l = o.dynamic;
    return n(r, l), null;
  };
  return i;
}, a5 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, xm = function(n) {
  return parseInt(n || "", 10) || 0;
}, o5 = function(n) {
  var i = window.getComputedStyle(document.body), o = i[n === "padding" ? "paddingLeft" : "marginLeft"], r = i[n === "padding" ? "paddingTop" : "marginTop"], l = i[n === "padding" ? "paddingRight" : "marginRight"];
  return [xm(o), xm(r), xm(l)];
}, r5 = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return a5;
  var i = o5(n), o = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: i[0],
    top: i[1],
    right: i[2],
    gap: Math.max(0, r - o + i[2] - i[0])
  };
}, s5 = KE(), jr = "data-scroll-locked", l5 = function(n, i, o, r) {
  var l = n.left, f = n.top, d = n.right, h = n.gap;
  return o === void 0 && (o = "margin"), `
  .`.concat(Gj, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(h, "px ").concat(r, `;
  }
  body[`).concat(jr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    i && "position: relative ".concat(r, ";"),
    o === "margin" && `
    padding-left: `.concat(l, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(r, `;
    `),
    o === "padding" && "padding-right: ".concat(h, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Eu, ` {
    right: `).concat(h, "px ").concat(r, `;
  }
  
  .`).concat(Cu, ` {
    margin-right: `).concat(h, "px ").concat(r, `;
  }
  
  .`).concat(Eu, " .").concat(Eu, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Cu, " .").concat(Cu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(jr, `] {
    `).concat(Yj, ": ").concat(h, `px;
  }
`);
}, t1 = function() {
  var n = parseInt(document.body.getAttribute(jr) || "0", 10);
  return isFinite(n) ? n : 0;
}, c5 = function() {
  x.useEffect(function() {
    return document.body.setAttribute(jr, (t1() + 1).toString()), function() {
      var n = t1() - 1;
      n <= 0 ? document.body.removeAttribute(jr) : document.body.setAttribute(jr, n.toString());
    };
  }, []);
}, u5 = function(n) {
  var i = n.noRelative, o = n.noImportant, r = n.gapMode, l = r === void 0 ? "margin" : r;
  c5();
  var f = x.useMemo(function() {
    return r5(l);
  }, [l]);
  return x.createElement(s5, { styles: l5(f, !i, l, o ? "" : "!important") });
}, fp = !1;
if (typeof window < "u")
  try {
    var ou = Object.defineProperty({}, "passive", {
      get: function() {
        return fp = !0, !0;
      }
    });
    window.addEventListener("test", ou, ou), window.removeEventListener("test", ou, ou);
  } catch {
    fp = !1;
  }
var Er = fp ? { passive: !1 } : !1, f5 = function(n) {
  return n.tagName === "TEXTAREA";
}, ZE = function(n, i) {
  if (!(n instanceof Element))
    return !1;
  var o = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    o[i] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !f5(n) && o[i] === "visible")
  );
}, d5 = function(n) {
  return ZE(n, "overflowY");
}, h5 = function(n) {
  return ZE(n, "overflowX");
}, e1 = function(n, i) {
  var o = i.ownerDocument, r = i;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var l = QE(n, r);
    if (l) {
      var f = $E(n, r), d = f[1], h = f[2];
      if (d > h)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== o.body);
  return !1;
}, m5 = function(n) {
  var i = n.scrollTop, o = n.scrollHeight, r = n.clientHeight;
  return [
    i,
    o,
    r
  ];
}, p5 = function(n) {
  var i = n.scrollLeft, o = n.scrollWidth, r = n.clientWidth;
  return [
    i,
    o,
    r
  ];
}, QE = function(n, i) {
  return n === "v" ? d5(i) : h5(i);
}, $E = function(n, i) {
  return n === "v" ? m5(i) : p5(i);
}, g5 = function(n, i) {
  return n === "h" && i === "rtl" ? -1 : 1;
}, v5 = function(n, i, o, r, l) {
  var f = g5(n, window.getComputedStyle(i).direction), d = f * r, h = o.target, g = i.contains(h), p = !1, v = d > 0, m = 0, b = 0;
  do {
    if (!h)
      break;
    var S = $E(n, h), w = S[0], A = S[1], C = S[2], R = A - C - f * w;
    (w || R) && QE(n, h) && (m += R, b += w);
    var z = h.parentNode;
    h = z && z.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? z.host : z;
  } while (
    // portaled content
    !g && h !== document.body || // self content
    g && (i.contains(h) || i === h)
  );
  return (v && Math.abs(m) < 1 || !v && Math.abs(b) < 1) && (p = !0), p;
}, ru = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, n1 = function(n) {
  return [n.deltaX, n.deltaY];
}, i1 = function(n) {
  return n && "current" in n ? n.current : n;
}, y5 = function(n, i) {
  return n[0] === i[0] && n[1] === i[1];
}, b5 = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, x5 = 0, Cr = [];
function S5(n) {
  var i = x.useRef([]), o = x.useRef([0, 0]), r = x.useRef(), l = x.useState(x5++)[0], f = x.useState(KE)[0], d = x.useRef(n);
  x.useEffect(function() {
    d.current = n;
  }, [n]), x.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(l));
      var A = Ij([n.lockRef.current], (n.shards || []).map(i1), !0).filter(Boolean);
      return A.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(l));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(l)), A.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(l));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var h = x.useCallback(function(A, C) {
    if ("touches" in A && A.touches.length === 2 || A.type === "wheel" && A.ctrlKey)
      return !d.current.allowPinchZoom;
    var R = ru(A), z = o.current, D = "deltaX" in A ? A.deltaX : z[0] - R[0], O = "deltaY" in A ? A.deltaY : z[1] - R[1], P, k = A.target, N = Math.abs(D) > Math.abs(O) ? "h" : "v";
    if ("touches" in A && N === "h" && k.type === "range")
      return !1;
    var M = window.getSelection(), F = M && M.anchorNode, J = F ? F === k || F.contains(k) : !1;
    if (J)
      return !1;
    var ut = e1(N, k);
    if (!ut)
      return !0;
    if (ut ? P = N : (P = N === "v" ? "h" : "v", ut = e1(N, k)), !ut)
      return !1;
    if (!r.current && "changedTouches" in A && (D || O) && (r.current = P), !P)
      return !0;
    var et = r.current || P;
    return v5(et, C, A, et === "h" ? D : O);
  }, []), g = x.useCallback(function(A) {
    var C = A;
    if (!(!Cr.length || Cr[Cr.length - 1] !== f)) {
      var R = "deltaY" in C ? n1(C) : ru(C), z = i.current.filter(function(P) {
        return P.name === C.type && (P.target === C.target || C.target === P.shadowParent) && y5(P.delta, R);
      })[0];
      if (z && z.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!z) {
        var D = (d.current.shards || []).map(i1).filter(Boolean).filter(function(P) {
          return P.contains(C.target);
        }), O = D.length > 0 ? h(C, D[0]) : !d.current.noIsolation;
        O && C.cancelable && C.preventDefault();
      }
    }
  }, []), p = x.useCallback(function(A, C, R, z) {
    var D = { name: A, delta: C, target: R, should: z, shadowParent: w5(R) };
    i.current.push(D), setTimeout(function() {
      i.current = i.current.filter(function(O) {
        return O !== D;
      });
    }, 1);
  }, []), v = x.useCallback(function(A) {
    o.current = ru(A), r.current = void 0;
  }, []), m = x.useCallback(function(A) {
    p(A.type, n1(A), A.target, h(A, n.lockRef.current));
  }, []), b = x.useCallback(function(A) {
    p(A.type, ru(A), A.target, h(A, n.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Cr.push(f), n.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", g, Er), document.addEventListener("touchmove", g, Er), document.addEventListener("touchstart", v, Er), function() {
      Cr = Cr.filter(function(A) {
        return A !== f;
      }), document.removeEventListener("wheel", g, Er), document.removeEventListener("touchmove", g, Er), document.removeEventListener("touchstart", v, Er);
    };
  }, []);
  var S = n.removeScrollBar, w = n.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(f, { styles: b5(l) }) : null,
    S ? x.createElement(u5, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function w5(n) {
  for (var i = null; n !== null; )
    n instanceof ShadowRoot && (i = n.host, n = n.host), n = n.parentNode;
  return i;
}
const T5 = $j(XE, S5);
var lg = x.forwardRef(function(n, i) {
  return x.createElement(nf, gi({}, n, { ref: i, sideCar: T5 }));
});
lg.classNames = nf.classNames;
var E5 = function(n) {
  if (typeof document > "u")
    return null;
  var i = Array.isArray(n) ? n[0] : n;
  return i.ownerDocument.body;
}, Ar = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakMap(), lu = {}, Sm = 0, JE = function(n) {
  return n && (n.host || JE(n.parentNode));
}, C5 = function(n, i) {
  return i.map(function(o) {
    if (n.contains(o))
      return o;
    var r = JE(o);
    return r && n.contains(r) ? r : (console.error("aria-hidden", o, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, A5 = function(n, i, o, r) {
  var l = C5(i, Array.isArray(n) ? n : [n]);
  lu[o] || (lu[o] = /* @__PURE__ */ new WeakMap());
  var f = lu[o], d = [], h = /* @__PURE__ */ new Set(), g = new Set(l), p = function(m) {
    !m || h.has(m) || (h.add(m), p(m.parentNode));
  };
  l.forEach(p);
  var v = function(m) {
    !m || g.has(m) || Array.prototype.forEach.call(m.children, function(b) {
      if (h.has(b))
        v(b);
      else
        try {
          var S = b.getAttribute(r), w = S !== null && S !== "false", A = (Ar.get(b) || 0) + 1, C = (f.get(b) || 0) + 1;
          Ar.set(b, A), f.set(b, C), d.push(b), A === 1 && w && su.set(b, !0), C === 1 && b.setAttribute(o, "true"), w || b.setAttribute(r, "true");
        } catch (R) {
          console.error("aria-hidden: cannot operate on ", b, R);
        }
    });
  };
  return v(i), h.clear(), Sm++, function() {
    d.forEach(function(m) {
      var b = Ar.get(m) - 1, S = f.get(m) - 1;
      Ar.set(m, b), f.set(m, S), b || (su.has(m) || m.removeAttribute(r), su.delete(m)), S || m.removeAttribute(o);
    }), Sm--, Sm || (Ar = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakMap(), lu = {});
  };
}, WE = function(n, i, o) {
  o === void 0 && (o = "data-aria-hidden");
  var r = Array.from(Array.isArray(n) ? n : [n]), l = E5(n);
  return l ? (r.push.apply(r, Array.from(l.querySelectorAll("[aria-live], script"))), A5(r, l, o, "aria-hidden")) : function() {
    return null;
  };
}, R5 = Object.defineProperty, dn = (n, i) => R5(n, "name", { value: i, configurable: !0 }), cg = "Dialog", [tC, CB] = /* @__PURE__ */ Ti(cg), [D5, ti] = tC(cg), O5 = /* @__PURE__ */ dn((n) => {
  const {
    __scopeDialog: i,
    children: o,
    open: r,
    defaultOpen: l,
    onOpenChange: f,
    modal: d = !0
  } = n, h = x.useRef(null), g = x.useRef(null), { nodes: p, registry: v } = PE(), [m, b] = _a({
    prop: r,
    defaultProp: l ?? !1,
    onChange: f,
    caller: cg
  }), [S, w] = x.useState(0), [A, C] = x.useState(0);
  return /* @__PURE__ */ E.jsx(
    D5,
    {
      scope: i,
      triggerRef: h,
      contentRef: g,
      contentId: Gi(),
      titleId: Gi(),
      descriptionId: Gi(),
      titlePresent: S > 0,
      descriptionPresent: A > 0,
      setTitleCount: w,
      setDescriptionCount: C,
      open: m,
      onOpenChange: b,
      onOpenToggle: x.useCallback(() => b((R) => !R), [b]),
      modal: d,
      branchNodes: p,
      branchRegistry: v,
      children: o
    }
  );
}, "Dialog"), M5 = "DialogTrigger", _5 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: r, ...l } = i, f = ti(M5, r), d = Kt(o, f.triggerRef);
    return /* @__PURE__ */ E.jsx(
      It.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": f.open,
        "aria-controls": f.open ? f.contentId : void 0,
        "data-state": af(f.open),
        ...l,
        ref: d,
        onClick: Ct(i.onClick, f.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), eC = "DialogPortal", [N5, nC] = tC(eC, {
  forceMount: void 0
}), z5 = /* @__PURE__ */ dn((n) => {
  const { __scopeDialog: i, forceMount: o, children: r, container: l } = n, f = ti(eC, i);
  return /* @__PURE__ */ E.jsx(N5, { scope: i, forceMount: o, children: x.Children.map(r, (d) => /* @__PURE__ */ E.jsx(Ro, { present: o || f.open, children: /* @__PURE__ */ E.jsx(rg, { asChild: !0, container: l, children: d }) })) });
}, "DialogPortal"), dp = "DialogOverlay", j5 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const r = nC(dp, i.__scopeDialog), { forceMount: l = r.forceMount, ...f } = i, d = ti(dp, i.__scopeDialog);
    return d.modal ? /* @__PURE__ */ E.jsx(Ro, { present: l || d.open, children: /* @__PURE__ */ E.jsx(L5, { ...f, ref: o }) }) : null;
  }, "DialogOverlay")
), V5 = /* @__PURE__ */ Ki("DialogOverlay.RemoveScroll"), L5 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: r, ...l } = i, f = ti(dp, r), d = NE(), h = Kt(o, d);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside
      // `RemoveScroll` (eg. when `Overlay` and `Content` are siblings). Nested
      // layers are registered as branches and added as shards so they remain
      // scrollable too. See https://github.com/radix-ui/primitives/issues/3423
      /* @__PURE__ */ E.jsx(
        lg,
        {
          as: V5,
          allowPinchZoom: !0,
          shards: x.useMemo(
            () => [f.contentRef, ...f.branchNodes.map((g) => ({ current: g }))],
            [f.contentRef, f.branchNodes]
          ),
          children: /* @__PURE__ */ E.jsx(
            It.div,
            {
              "data-state": af(f.open),
              ...l,
              ref: h,
              style: { pointerEvents: "auto", ...l.style }
            }
          )
        }
      )
    );
  }, "DialogOverlayImpl")
), fl = "DialogContent", B5 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const r = nC(fl, i.__scopeDialog), { forceMount: l = r.forceMount, ...f } = i, d = ti(fl, i.__scopeDialog);
    return /* @__PURE__ */ E.jsx(Ro, { present: l || d.open, children: d.modal ? /* @__PURE__ */ E.jsx(P5, { ...f, ref: o }) : /* @__PURE__ */ E.jsx(U5, { ...f, ref: o }) });
  }, "DialogContent")
), P5 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const r = ti(fl, i.__scopeDialog), l = x.useRef(null), f = Kt(o, r.contentRef, l);
    return x.useEffect(() => {
      const d = l.current;
      if (d) return WE(d);
    }, []), /* @__PURE__ */ E.jsx(
      iC,
      {
        ...i,
        ref: f,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        onCloseAutoFocus: Ct(i.onCloseAutoFocus, (d) => {
          d.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Ct(i.onPointerDownOutside, (d) => {
          const h = d.detail.originalEvent, g = h.button === 0 && h.ctrlKey === !0;
          (h.button === 2 || g) && d.preventDefault();
        }),
        onFocusOutside: Ct(
          i.onFocusOutside,
          (d) => d.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), U5 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const r = ti(fl, i.__scopeDialog), l = x.useRef(!1), f = x.useRef(!1);
    return /* @__PURE__ */ E.jsx(
      iC,
      {
        ...i,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (d) => {
          i.onCloseAutoFocus?.(d), d.defaultPrevented || (l.current || r.triggerRef.current?.focus(), d.preventDefault()), l.current = !1, f.current = !1;
        },
        onInteractOutside: (d) => {
          i.onInteractOutside?.(d), d.defaultPrevented || (l.current = !0, d.detail.originalEvent.type === "pointerdown" && (f.current = !0));
          const h = d.target;
          r.triggerRef.current?.contains(h) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && f.current && d.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), iC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const {
      __scopeDialog: r,
      trapFocus: l,
      onOpenAutoFocus: f,
      onCloseAutoFocus: d,
      "aria-describedby": h,
      children: g,
      ...p
    } = i, v = ti(fl, r);
    return ef(), /* @__PURE__ */ E.jsx(BE, { registry: v.branchRegistry, children: /* @__PURE__ */ E.jsx(
      VE,
      {
        asChild: !0,
        loop: !0,
        trapped: l,
        branches: v.branchNodes,
        onMountAutoFocus: f,
        onUnmountAutoFocus: d,
        children: /* @__PURE__ */ E.jsx(
          ig,
          {
            role: "dialog",
            id: v.contentId,
            "aria-labelledby": v.titlePresent ? v.titleId : void 0,
            "aria-describedby": v.descriptionPresent ? oC(h, v.descriptionId) : h,
            "data-state": af(v.open),
            ...p,
            ref: o,
            deferPointerDownOutside: !0,
            onDismiss: () => v.onOpenChange(!1),
            children: g
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), k5 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: r, ...l } = i, f = ti("DialogTitle", r), { setTitleCount: d } = f;
    return le(() => (d((h) => h + 1), () => d((h) => h - 1)), [d]), /* @__PURE__ */ E.jsx(It.h2, { id: f.titleId, ...l, ref: o });
  }, "DialogTitle")
), H5 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: r, ...l } = i, f = ti("DialogDescription", r), { setDescriptionCount: d } = f;
    return le(() => (d((h) => h + 1), () => d((h) => h - 1)), [d]), /* @__PURE__ */ E.jsx(It.p, { id: f.descriptionId, ...l, ref: o });
  }, "DialogDescription")
), I5 = "DialogClose", aC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: r, ...l } = i, f = ti(I5, r);
    return /* @__PURE__ */ E.jsx(
      It.button,
      {
        type: "button",
        ...l,
        ref: o,
        onClick: Ct(i.onClick, () => f.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function oC(...n) {
  const i = /* @__PURE__ */ new Set();
  for (const o of n)
    if (typeof o == "string")
      for (const r of String(o).trim().split(/\s+/))
        r && i.add(r);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
dn(oC, "concatAriaDescribedby");
function af(n) {
  return n ? "open" : "closed";
}
dn(af, "getState");
var G5 = Object.defineProperty, Y5 = (n, i) => G5(n, "name", { value: i, configurable: !0 });
function ug(n) {
  const [i, o] = x.useState(void 0);
  return le(() => {
    if (n) {
      o({ width: n.offsetWidth, height: n.offsetHeight });
      let r = 0;
      const l = new ResizeObserver((f) => {
        if (!Array.isArray(f) || !f.length)
          return;
        const d = f[0];
        window.cancelAnimationFrame(r), r = window.requestAnimationFrame(() => {
          let h, g;
          if ("borderBoxSize" in d) {
            const p = d.borderBoxSize, v = Array.isArray(p) ? p[0] : p;
            h = v.inlineSize, g = v.blockSize;
          } else
            h = n.offsetWidth, g = n.offsetHeight;
          o({ width: h, height: g });
        });
      });
      return l.observe(n, { box: "border-box" }), () => {
        window.cancelAnimationFrame(r), l.unobserve(n);
      };
    } else
      o(void 0);
  }, [n]), i;
}
Y5(ug, "useSize");
var q5 = Object.defineProperty, Qi = (n, i) => q5(n, "name", { value: i, configurable: !0 }), fg = "Checkbox", [F5, AB] = /* @__PURE__ */ Ti(fg), [X5, dg] = F5(fg);
function rC(n) {
  const {
    __scopeCheckbox: i,
    checked: o,
    children: r,
    defaultChecked: l,
    disabled: f,
    form: d,
    name: h,
    onCheckedChange: g,
    required: p,
    value: v = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = n, [b, S] = _a({
    prop: o,
    defaultProp: l ?? !1,
    onChange: g,
    caller: fg
  }), [w, A] = x.useState(null), [C, R] = x.useState(null), z = x.useRef(!1), [D, O] = x.useReducer(
    (N) => N + 1,
    0
  ), P = w ? !!d || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: b,
    disabled: f,
    setChecked: S,
    control: w,
    setControl: A,
    name: h,
    form: d,
    value: v,
    hasConsumerStoppedPropagationRef: z,
    userInteractionCount: D,
    onUserInteraction: O,
    required: p,
    defaultChecked: Yi(l) ? !1 : l,
    isFormControl: P,
    bubbleInput: C,
    setBubbleInput: R
  };
  return /* @__PURE__ */ E.jsx(
    X5,
    {
      scope: i,
      ...k,
      children: sC(m) ? m(k) : r
    }
  );
}
Qi(rC, "CheckboxProvider");
var K5 = "CheckboxTrigger", Z5 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Qi(function({ __scopeCheckbox: i, onKeyDown: o, onClick: r, ...l }, f) {
    const {
      control: d,
      value: h,
      disabled: g,
      checked: p,
      required: v,
      setControl: m,
      setChecked: b,
      hasConsumerStoppedPropagationRef: S,
      onUserInteraction: w,
      isFormControl: A,
      bubbleInput: C
    } = dg(K5, i), R = Kt(f, m), z = x.useRef(p);
    return x.useEffect(() => {
      const D = d?.form;
      if (D) {
        const O = /* @__PURE__ */ Qi(() => b(z.current), "reset");
        return D.addEventListener("reset", O), () => D.removeEventListener("reset", O);
      }
    }, [d, b]), /* @__PURE__ */ E.jsx(
      It.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Yi(p) ? "mixed" : p,
        "aria-required": v,
        "data-state": hg(p),
        "data-disabled": g ? "" : void 0,
        disabled: g,
        value: h,
        ...l,
        ref: R,
        onKeyDown: Ct(o, (D) => {
          D.key === "Enter" && D.preventDefault();
        }),
        onClick: Ct(r, (D) => {
          w(), b((O) => Yi(O) ? !0 : !O), C && A && (S.current = D.isPropagationStopped(), S.current || D.stopPropagation());
        })
      }
    );
  }, "CheckboxTrigger")
), Q5 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qi(function(i, o) {
    const {
      __scopeCheckbox: r,
      name: l,
      checked: f,
      defaultChecked: d,
      required: h,
      disabled: g,
      value: p,
      onCheckedChange: v,
      form: m,
      ...b
    } = i;
    return /* @__PURE__ */ E.jsx(
      rC,
      {
        __scopeCheckbox: r,
        checked: f,
        defaultChecked: d,
        disabled: g,
        required: h,
        onCheckedChange: v,
        name: l,
        form: m,
        value: p,
        internal_do_not_use_render: ({ isFormControl: S }) => /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          /* @__PURE__ */ E.jsx(
            Z5,
            {
              ...b,
              ref: o,
              __scopeCheckbox: r
            }
          ),
          S && /* @__PURE__ */ E.jsx(
            t4,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), $5 = "CheckboxIndicator", J5 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qi(function(i, o) {
    const { __scopeCheckbox: r, forceMount: l, ...f } = i, d = dg($5, r);
    return /* @__PURE__ */ E.jsx(
      Ro,
      {
        present: l || Yi(d.checked) || d.checked === !0,
        children: /* @__PURE__ */ E.jsx(
          It.span,
          {
            "data-state": hg(d.checked),
            "data-disabled": d.disabled ? "" : void 0,
            ...f,
            ref: o,
            style: { pointerEvents: "none", ...i.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), W5 = "CheckboxBubbleInput", t4 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qi(function({ __scopeCheckbox: i, onClick: o, ...r }, l) {
    const {
      control: f,
      hasConsumerStoppedPropagationRef: d,
      userInteractionCount: h,
      checked: g,
      defaultChecked: p,
      required: v,
      disabled: m,
      name: b,
      value: S,
      form: w,
      bubbleInput: A,
      setBubbleInput: C
    } = dg(W5, i), R = Kt(l, C), z = ug(f), D = x.useRef(!1), O = x.useRef(g), P = x.useRef(h);
    x.useEffect(() => {
      const N = A;
      if (!N) return;
      const M = window.HTMLInputElement.prototype, J = Object.getOwnPropertyDescriptor(
        M,
        "checked"
      ).set, ut = h !== P.current;
      P.current = h;
      const et = O.current !== g;
      O.current = g;
      const rt = !(ut && d.current);
      if (et && J) {
        D.current = !ut;
        const ft = new Event("click", { bubbles: rt });
        N.indeterminate = Yi(g), J.call(N, Yi(g) ? !1 : g), N.dispatchEvent(ft), D.current = !1;
      }
    }, [A, g, d, h]);
    const k = x.useRef(Yi(g) ? !1 : g);
    return /* @__PURE__ */ E.jsx(
      It.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: p ?? k.current,
        required: v,
        disabled: m,
        name: b,
        value: S,
        form: w,
        ...r,
        tabIndex: -1,
        ref: R,
        onClick: Ct(o, (N) => {
          D.current && N.stopPropagation();
        }),
        style: {
          ...r.style,
          ...z,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "CheckboxBubbleInput")
);
function sC(n) {
  return typeof n == "function";
}
Qi(sC, "isFunction");
function Yi(n) {
  return n === "indeterminate";
}
Qi(Yi, "isIndeterminate");
function hg(n) {
  return Yi(n) ? "indeterminate" : n ? "checked" : "unchecked";
}
Qi(hg, "getState");
const e4 = ["top", "right", "bottom", "left"], Na = Math.min, qi = Math.max, ku = Math.round, cu = Math.floor, Fi = (n) => ({
  x: n,
  y: n
}), n4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function lC(n, i, o) {
  return qi(n, Na(i, o));
}
function $i(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function za(n) {
  return n.split("-")[0];
}
function Yr(n) {
  return n.split("-")[1];
}
function mg(n) {
  return n === "x" ? "y" : "x";
}
function pg(n) {
  return n === "y" ? "height" : "width";
}
function vi(n) {
  const i = n[0];
  return i === "t" || i === "b" ? "y" : "x";
}
function gg(n) {
  return mg(vi(n));
}
function i4(n, i, o) {
  o === void 0 && (o = !1);
  const r = Yr(n), l = gg(n), f = pg(l);
  let d = l === "x" ? r === (o ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return i.reference[f] > i.floating[f] && (d = Hu(d)), [d, Hu(d)];
}
function a4(n) {
  const i = Hu(n);
  return [hp(n), i, hp(i)];
}
function hp(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const a1 = ["left", "right"], o1 = ["right", "left"], o4 = ["top", "bottom"], r4 = ["bottom", "top"];
function s4(n, i, o) {
  switch (n) {
    case "top":
    case "bottom":
      return o ? i ? o1 : a1 : i ? a1 : o1;
    case "left":
    case "right":
      return i ? o4 : r4;
    default:
      return [];
  }
}
function l4(n, i, o, r) {
  const l = Yr(n);
  let f = s4(za(n), o === "start", r);
  return l && (f = f.map((d) => d + "-" + l), i && (f = f.concat(f.map(hp)))), f;
}
function Hu(n) {
  const i = za(n);
  return n4[i] + n.slice(i.length);
}
function c4(n) {
  var i, o, r, l;
  return {
    top: (i = n.top) != null ? i : 0,
    right: (o = n.right) != null ? o : 0,
    bottom: (r = n.bottom) != null ? r : 0,
    left: (l = n.left) != null ? l : 0
  };
}
function cC(n) {
  return typeof n != "number" ? c4(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Iu(n) {
  const {
    x: i,
    y: o,
    width: r,
    height: l
  } = n;
  return {
    width: r,
    height: l,
    top: o,
    left: i,
    right: i + r,
    bottom: o + l,
    x: i,
    y: o
  };
}
function r1(n, i, o) {
  let {
    reference: r,
    floating: l
  } = n;
  const f = vi(i), d = gg(i), h = pg(d), g = za(i), p = f === "y", v = r.x + r.width / 2 - l.width / 2, m = r.y + r.height / 2 - l.height / 2, b = r[h] / 2 - l[h] / 2;
  let S;
  switch (g) {
    case "top":
      S = {
        x: v,
        y: r.y - l.height
      };
      break;
    case "bottom":
      S = {
        x: v,
        y: r.y + r.height
      };
      break;
    case "right":
      S = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      S = {
        x: r.x - l.width,
        y: m
      };
      break;
    default:
      S = {
        x: r.x,
        y: r.y
      };
  }
  const w = Yr(i);
  return w && (S[d] += b * (w === "end" ? 1 : -1) * (o && p ? -1 : 1)), S;
}
async function u4(n, i) {
  var o;
  i === void 0 && (i = {});
  const {
    x: r,
    y: l,
    platform: f,
    rects: d,
    elements: h,
    strategy: g
  } = n, {
    boundary: p = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: m = "floating",
    altBoundary: b = !1,
    padding: S = 0
  } = $i(i, n), w = cC(S), C = h[b ? m === "floating" ? "reference" : "floating" : m], R = Iu(await f.getClippingRect({
    element: (o = await (f.isElement == null ? void 0 : f.isElement(C))) == null || o ? C : C.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(h.floating)),
    boundary: p,
    rootBoundary: v,
    strategy: g
  })), z = m === "floating" ? {
    x: r,
    y: l,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, D = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(h.floating)), O = await (f.isElement == null ? void 0 : f.isElement(D)) && await (f.getScale == null ? void 0 : f.getScale(D)) || {
    x: 1,
    y: 1
  }, P = Iu(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: h,
    rect: z,
    offsetParent: D,
    strategy: g
  }) : z);
  return {
    top: (R.top - P.top + w.top) / O.y,
    bottom: (P.bottom - R.bottom + w.bottom) / O.y,
    left: (R.left - P.left + w.left) / O.x,
    right: (P.right - R.right + w.right) / O.x
  };
}
const f4 = 50, d4 = async (n, i, o) => {
  const {
    placement: r = "bottom",
    strategy: l = "absolute",
    middleware: f = [],
    platform: d
  } = o, h = d.detectOverflow ? d : {
    ...d,
    detectOverflow: u4
  }, g = await (d.isRTL == null ? void 0 : d.isRTL(i));
  let p = await d.getElementRects({
    reference: n,
    floating: i,
    strategy: l
  }), {
    x: v,
    y: m
  } = r1(p, r, g), b = r, S = 0;
  const w = {};
  for (let A = 0; A < f.length; A++) {
    const C = f[A];
    if (!C)
      continue;
    const {
      name: R,
      fn: z
    } = C, {
      x: D,
      y: O,
      data: P,
      reset: k
    } = await z({
      x: v,
      y: m,
      initialPlacement: r,
      placement: b,
      strategy: l,
      middlewareData: w,
      rects: p,
      platform: h,
      elements: {
        reference: n,
        floating: i
      }
    });
    v = D ?? v, m = O ?? m, w[R] = {
      ...w[R],
      ...P
    }, k && S < f4 && (S++, typeof k == "object" && (k.placement && (b = k.placement), k.rects && (p = k.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: i,
      strategy: l
    }) : k.rects), {
      x: v,
      y: m
    } = r1(p, b, g)), A = -1);
  }
  return {
    x: v,
    y: m,
    placement: b,
    strategy: l,
    middlewareData: w
  };
}, h4 = (n) => ({
  name: "arrow",
  options: n,
  async fn(i) {
    const {
      x: o,
      y: r,
      placement: l,
      rects: f,
      platform: d,
      elements: h,
      middlewareData: g
    } = i, {
      element: p,
      padding: v = 0
    } = $i(n, i) || {};
    if (p == null)
      return {};
    const m = cC(v), b = {
      x: o,
      y: r
    }, S = gg(l), w = pg(S), A = await d.getDimensions(p), C = S === "y", R = C ? "top" : "left", z = C ? "bottom" : "right", D = C ? "clientHeight" : "clientWidth", O = f.reference[w] + f.reference[S] - b[S] - f.floating[w], P = b[S] - f.reference[S], k = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
    let N = k ? k[D] : 0;
    (!N || !await (d.isElement == null ? void 0 : d.isElement(k))) && (N = h.floating[D] || f.floating[w]);
    const M = O / 2 - P / 2, F = N / 2 - A[w] / 2 - 1, J = Na(m[R], F), ut = Na(m[z], F), et = N - A[w] - ut, rt = N / 2 - A[w] / 2 + M, ft = lC(J, rt, et), dt = !g.arrow && Yr(l) != null && rt !== ft && f.reference[w] / 2 - (rt < J ? J : ut) - A[w] / 2 < 0, Y = dt ? rt < J ? rt - J : rt - et : 0;
    return {
      [S]: b[S] + Y,
      data: {
        [S]: ft,
        centerOffset: rt - ft - Y,
        ...dt && {
          alignmentOffset: Y
        }
      },
      reset: dt
    };
  }
}), m4 = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(i) {
      var o, r;
      const {
        placement: l,
        middlewareData: f,
        rects: d,
        initialPlacement: h,
        platform: g,
        elements: p
      } = i, {
        mainAxis: v = !0,
        crossAxis: m = !0,
        fallbackPlacements: b,
        fallbackStrategy: S = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: A = !0,
        ...C
      } = $i(n, i);
      if ((o = f.arrow) != null && o.alignmentOffset)
        return {};
      const R = za(l), z = vi(h), D = za(h) === h, O = await (g.isRTL == null ? void 0 : g.isRTL(p.floating)), P = b || (D || !A ? [Hu(h)] : a4(h)), k = w !== "none";
      !b && k && P.push(...l4(h, A, w, O));
      const N = [h, ...P], M = await g.detectOverflow(i, C), F = [];
      let J = ((r = f.flip) == null ? void 0 : r.overflows) || [];
      if (v && F.push(M[R]), m) {
        const ft = i4(l, d, O);
        F.push(M[ft[0]], M[ft[1]]);
      }
      if (J = [...J, {
        placement: l,
        overflows: F
      }], !F.every((ft) => ft <= 0)) {
        var ut, et;
        const ft = (((ut = f.flip) == null ? void 0 : ut.index) || 0) + 1, dt = N[ft];
        if (dt && (!(m === "alignment" ? z !== vi(dt) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        J.every(($) => vi($.placement) === z ? $.overflows[0] > 0 : !0)))
          return {
            data: {
              index: ft,
              overflows: J
            },
            reset: {
              placement: dt
            }
          };
        let Y = (et = J.filter((X) => X.overflows[0] <= 0).sort((X, $) => X.overflows[1] - $.overflows[1])[0]) == null ? void 0 : et.placement;
        if (!Y)
          switch (S) {
            case "bestFit": {
              var rt;
              const X = (rt = J.filter(($) => {
                if (k) {
                  const at = vi($.placement);
                  return at === z || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  at === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((at) => at > 0).reduce((at, Q) => at + Q, 0)]).sort(($, at) => $[1] - at[1])[0]) == null ? void 0 : rt[0];
              X && (Y = X);
              break;
            }
            case "initialPlacement":
              Y = h;
              break;
          }
        if (l !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
function s1(n, i) {
  return {
    top: n.top - i.height,
    right: n.right - i.width,
    bottom: n.bottom - i.height,
    left: n.left - i.width
  };
}
function l1(n) {
  return e4.some((i) => n[i] >= 0);
}
const p4 = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(i) {
      const {
        rects: o,
        platform: r
      } = i, {
        strategy: l = "referenceHidden",
        ...f
      } = $i(n, i);
      switch (l) {
        case "referenceHidden": {
          const d = await r.detectOverflow(i, {
            ...f,
            elementContext: "reference"
          }), h = s1(d, o.reference);
          return {
            data: {
              referenceHiddenOffsets: h,
              referenceHidden: l1(h)
            }
          };
        }
        case "escaped": {
          const d = await r.detectOverflow(i, {
            ...f,
            altBoundary: !0
          }), h = s1(d, o.floating);
          return {
            data: {
              escapedOffsets: h,
              escaped: l1(h)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, uC = /* @__PURE__ */ new Set(["left", "top"]);
async function g4(n, i) {
  const {
    placement: o,
    platform: r,
    elements: l
  } = n, f = await (r.isRTL == null ? void 0 : r.isRTL(l.floating)), d = za(o), h = Yr(o), g = vi(o) === "y", p = uC.has(d) ? -1 : 1, v = f && g ? -1 : 1, m = $i(i, n);
  let {
    mainAxis: b,
    crossAxis: S,
    alignmentAxis: w
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return h && typeof w == "number" && (S = h === "end" ? w * -1 : w), g ? {
    x: S * v,
    y: b * p
  } : {
    x: b * p,
    y: S * v
  };
}
const v4 = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(i) {
      var o, r;
      const {
        x: l,
        y: f,
        placement: d,
        middlewareData: h
      } = i, g = await g4(i, n);
      return d === ((o = h.offset) == null ? void 0 : o.placement) && (r = h.arrow) != null && r.alignmentOffset ? {} : {
        x: l + g.x,
        y: f + g.y,
        data: {
          ...g,
          placement: d
        }
      };
    }
  };
}, y4 = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(i) {
      const {
        x: o,
        y: r,
        placement: l,
        platform: f
      } = i, {
        mainAxis: d = !0,
        crossAxis: h = !1,
        limiter: g = {
          fn: (z) => {
            let {
              x: D,
              y: O
            } = z;
            return {
              x: D,
              y: O
            };
          }
        },
        ...p
      } = $i(n, i), v = {
        x: o,
        y: r
      }, m = await f.detectOverflow(i, p), b = vi(l), S = mg(b);
      let w = v[S], A = v[b];
      const C = (z, D) => lC(D + m[z === "y" ? "top" : "left"], D, D - m[z === "y" ? "bottom" : "right"]);
      d && (w = C(S, w)), h && (A = C(b, A));
      const R = g.fn({
        ...i,
        [S]: w,
        [b]: A
      });
      return {
        ...R,
        data: {
          x: R.x - o,
          y: R.y - r,
          enabled: {
            [S]: d,
            [b]: h
          }
        }
      };
    }
  };
}, b4 = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(i) {
      var o, r;
      const {
        x: l,
        y: f,
        placement: d,
        rects: h,
        middlewareData: g
      } = i, {
        offset: p = 0,
        mainAxis: v = !0,
        crossAxis: m = !0
      } = $i(n, i), b = {
        x: l,
        y: f
      }, S = vi(d), w = mg(S);
      let A = b[w], C = b[S];
      const R = $i(p, i), z = typeof R == "number" ? {
        mainAxis: R,
        crossAxis: 0
      } : {
        mainAxis: (o = R.mainAxis) != null ? o : 0,
        crossAxis: (r = R.crossAxis) != null ? r : 0
      };
      if (v) {
        const P = w === "y" ? "height" : "width", k = h.reference[w] - h.floating[P] + z.mainAxis, N = h.reference[w] + h.reference[P] - z.mainAxis;
        A < k ? A = k : A > N && (A = N);
      }
      if (m) {
        var D, O;
        const P = w === "y" ? "width" : "height", k = uC.has(za(d)), N = h.reference[S] - h.floating[P] + (k && ((D = g.offset) == null ? void 0 : D[S]) || 0) + (k ? 0 : z.crossAxis), M = h.reference[S] + h.reference[P] + (k ? 0 : ((O = g.offset) == null ? void 0 : O[S]) || 0) - (k ? z.crossAxis : 0);
        C < N ? C = N : C > M && (C = M);
      }
      return {
        [w]: A,
        [S]: C
      };
    }
  };
}, x4 = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(i) {
      const {
        placement: o,
        rects: r,
        platform: l,
        elements: f
      } = i, {
        apply: d = () => {
        },
        ...h
      } = $i(n, i), g = await l.detectOverflow(i, h), p = za(o), v = Yr(o), m = vi(o) === "y", {
        width: b,
        height: S
      } = r.floating;
      let w, A;
      p === "top" || p === "bottom" ? (w = p, A = v === (await (l.isRTL == null ? void 0 : l.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (A = p, w = v === "end" ? "top" : "bottom");
      const C = S - g.top - g.bottom, R = b - g.left - g.right, z = Na(S - g[w], C), D = Na(b - g[A], R), O = i.middlewareData.shift, P = !O;
      let k = z, N = D;
      O != null && O.enabled.x && (N = R), O != null && O.enabled.y && (k = C), P && !v && (m ? N = b - 2 * qi(g.left, g.right) : k = S - 2 * qi(g.top, g.bottom)), await d({
        ...i,
        availableWidth: N,
        availableHeight: k
      });
      const M = await l.getDimensions(f.floating);
      return b !== M.width || S !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function of() {
  return typeof window < "u";
}
function qr(n) {
  return fC(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function fn(n) {
  var i;
  return (n == null || (i = n.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function Wi(n) {
  var i;
  return (i = (fC(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : i.documentElement;
}
function fC(n) {
  return of() ? n instanceof Node || n instanceof fn(n).Node : !1;
}
function Si(n) {
  return of() ? n instanceof Element || n instanceof fn(n).Element : !1;
}
function La(n) {
  return of() ? n instanceof HTMLElement || n instanceof fn(n).HTMLElement : !1;
}
function c1(n) {
  return !of() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof fn(n).ShadowRoot;
}
function rf(n) {
  const {
    overflow: i,
    overflowX: o,
    overflowY: r,
    display: l
  } = wi(n);
  return /auto|scroll|overlay|hidden|clip/.test(i + r + o) && l !== "inline" && l !== "contents";
}
function S4(n) {
  return /^(table|td|th)$/.test(qr(n));
}
function sf(n) {
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
const w4 = /transform|translate|scale|rotate|perspective|filter/, T4 = /paint|layout|strict|content/, ho = (n) => !!n && n !== "none";
let wm;
function vg(n) {
  const i = Si(n) ? wi(n) : n;
  return ho(i.transform) || ho(i.translate) || ho(i.scale) || ho(i.rotate) || ho(i.perspective) || !yg() && (ho(i.backdropFilter) || ho(i.filter)) || w4.test(i.willChange || "") || T4.test(i.contain || "");
}
function E4(n) {
  let i = To(n);
  for (; La(i) && !dl(i); ) {
    if (vg(i))
      return i;
    if (sf(i))
      return null;
    i = To(i);
  }
  return null;
}
function yg() {
  return wm == null && (wm = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), wm;
}
function dl(n) {
  return /^(html|body|#document)$/.test(qr(n));
}
function wi(n) {
  return fn(n).getComputedStyle(n);
}
function lf(n) {
  return Si(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function To(n) {
  if (qr(n) === "html")
    return n;
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    c1(n) && n.host || // Fallback.
    Wi(n)
  );
  return c1(i) ? i.host : i;
}
function dC(n) {
  const i = To(n);
  return dl(i) ? (n.ownerDocument || n).body : La(i) && rf(i) ? i : dC(i);
}
function hl(n, i, o) {
  var r;
  i === void 0 && (i = []), o === void 0 && (o = !0);
  const l = dC(n), f = l === ((r = n.ownerDocument) == null ? void 0 : r.body), d = fn(l);
  if (f) {
    const h = mp(d);
    return i.concat(d, d.visualViewport || [], rf(l) ? l : [], h && o ? hl(h) : []);
  } else
    return i.concat(l, hl(l, [], o));
}
function mp(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function hC(n) {
  const i = wi(n);
  let o = parseFloat(i.width) || 0, r = parseFloat(i.height) || 0;
  const l = La(n), f = l ? n.offsetWidth : o, d = l ? n.offsetHeight : r, h = ku(o) !== f || ku(r) !== d;
  return h && (o = f, r = d), {
    width: o,
    height: r,
    $: h
  };
}
function bg(n) {
  return Si(n) ? n : n.contextElement;
}
function Vr(n) {
  const i = bg(n);
  if (!La(i))
    return Fi(1);
  const o = i.getBoundingClientRect(), {
    width: r,
    height: l,
    $: f
  } = hC(i);
  let d = (f ? ku(o.width) : o.width) / r, h = (f ? ku(o.height) : o.height) / l;
  return (!d || !Number.isFinite(d)) && (d = 1), (!h || !Number.isFinite(h)) && (h = 1), {
    x: d,
    y: h
  };
}
const C4 = /* @__PURE__ */ Fi(0);
function mC(n) {
  const i = fn(n);
  return !yg() || !i.visualViewport ? C4 : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function A4(n, i, o) {
  return i === void 0 && (i = !1), !!o && i && o === fn(n);
}
function Eo(n, i, o, r) {
  i === void 0 && (i = !1), o === void 0 && (o = !1);
  const l = n.getBoundingClientRect(), f = bg(n);
  let d = Fi(1);
  i && (r ? Si(r) && (d = Vr(r)) : d = Vr(n));
  const h = A4(f, o, r) ? mC(f) : Fi(0);
  let g = (l.left + h.x) / d.x, p = (l.top + h.y) / d.y, v = l.width / d.x, m = l.height / d.y;
  if (f && r) {
    const b = fn(f), S = Si(r) ? fn(r) : r;
    let w = b, A = mp(w);
    for (; A && S !== w; ) {
      const C = Vr(A), R = A.getBoundingClientRect(), z = wi(A), D = R.left + (A.clientLeft + parseFloat(z.paddingLeft)) * C.x, O = R.top + (A.clientTop + parseFloat(z.paddingTop)) * C.y;
      g *= C.x, p *= C.y, v *= C.x, m *= C.y, g += D, p += O, w = fn(A), A = mp(w);
    }
  }
  return Iu({
    width: v,
    height: m,
    x: g,
    y: p
  });
}
function cf(n, i) {
  const o = lf(n).scrollLeft;
  return i ? i.left + o : Eo(Wi(n)).left + o;
}
function pC(n, i) {
  const o = n.getBoundingClientRect(), r = o.left + i.scrollLeft - cf(n, o), l = o.top + i.scrollTop;
  return {
    x: r,
    y: l
  };
}
function R4(n) {
  let {
    elements: i,
    rect: o,
    offsetParent: r,
    strategy: l
  } = n;
  const f = l === "fixed", d = Wi(r), h = i ? sf(i.floating) : !1;
  if (r === d || h && f)
    return o;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = Fi(1);
  const v = Fi(0), m = La(r);
  if ((m || !f) && ((qr(r) !== "body" || rf(d)) && (g = lf(r)), m)) {
    const S = Eo(r);
    p = Vr(r), v.x = S.x + r.clientLeft, v.y = S.y + r.clientTop;
  }
  const b = d && !m && !f ? pC(d, g) : Fi(0);
  return {
    width: o.width * p.x,
    height: o.height * p.y,
    x: o.x * p.x - g.scrollLeft * p.x + v.x + b.x,
    y: o.y * p.y - g.scrollTop * p.y + v.y + b.y
  };
}
function D4(n) {
  return n.getClientRects ? Array.from(n.getClientRects()) : [];
}
function O4(n) {
  const i = lf(n), o = n.ownerDocument.body, r = qi(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), l = qi(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let f = -i.scrollLeft + cf(n);
  const d = -i.scrollTop;
  return wi(o).direction === "rtl" && (f += qi(n.clientWidth, o.clientWidth) - r), {
    width: r,
    height: l,
    x: f,
    y: d
  };
}
const M4 = 25;
function _4(n, i, o) {
  o === void 0 && (o = "viewport");
  const r = o === "layoutViewport", l = fn(n), f = Wi(n), d = l.visualViewport;
  let h = f.clientWidth, g = f.clientHeight, p = 0, v = 0;
  if (d) {
    const b = !yg() || i === "fixed";
    r ? b || (p = -d.offsetLeft, v = -d.offsetTop) : (h = d.width, g = d.height, b && (p = d.offsetLeft, v = d.offsetTop));
  }
  if (cf(f) <= 0) {
    const b = f.ownerDocument, S = b.body, w = getComputedStyle(S), A = b.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, C = Math.abs(f.clientWidth - S.clientWidth - A), R = getComputedStyle(f).scrollbarGutter === "stable both-edges" ? C / 2 : C;
    R <= M4 && (h -= R);
  }
  return {
    width: h,
    height: g,
    x: p,
    y: v
  };
}
function N4(n, i) {
  const o = Eo(n, !0, i === "fixed"), r = o.top + n.clientTop, l = o.left + n.clientLeft, f = Vr(n), d = n.clientWidth * f.x, h = n.clientHeight * f.y, g = l * f.x, p = r * f.y;
  return {
    width: d,
    height: h,
    x: g,
    y: p
  };
}
function u1(n, i, o) {
  let r;
  if (i === "viewport" || i === "layoutViewport")
    r = _4(n, o, i);
  else if (i === "document")
    r = O4(Wi(n));
  else if (Si(i))
    r = N4(i, o);
  else {
    const l = mC(n);
    r = {
      x: i.x - l.x,
      y: i.y - l.y,
      width: i.width,
      height: i.height
    };
  }
  return Iu(r);
}
function z4(n, i) {
  const o = i.get(n);
  if (o)
    return o;
  let r = hl(n, [], !1).filter((h) => Si(h) && qr(h) !== "body"), l = null;
  const f = wi(n).position === "fixed";
  let d = f ? To(n) : n;
  for (; Si(d) && !dl(d); ) {
    const h = wi(d), g = vg(d), p = l ? l.position : f ? "fixed" : "";
    !g && (p === "fixed" || p === "absolute" && h.position === "static") ? r = r.filter((m) => m !== d) : l = h, d = To(d);
  }
  return i.set(n, r), r;
}
function j4(n) {
  let {
    element: i,
    boundary: o,
    rootBoundary: r,
    strategy: l
  } = n;
  const d = [...o === "clippingAncestors" ? sf(i) ? [] : z4(i, this._c) : [].concat(o), r], h = u1(i, d[0], l);
  let g = h.top, p = h.right, v = h.bottom, m = h.left;
  for (let b = 1; b < d.length; b++) {
    const S = u1(i, d[b], l);
    g = qi(S.top, g), p = Na(S.right, p), v = Na(S.bottom, v), m = qi(S.left, m);
  }
  return {
    width: p - m,
    height: v - g,
    x: m,
    y: g
  };
}
function V4(n) {
  const {
    width: i,
    height: o
  } = hC(n);
  return {
    width: i,
    height: o
  };
}
function L4(n, i, o) {
  const r = La(i), l = Wi(i), f = o === "fixed", d = Eo(n, !0, f, i);
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = Fi(0);
  if ((r || !f) && ((qr(i) !== "body" || rf(l)) && (h = lf(i)), r)) {
    const b = Eo(i, !0, f, i);
    g.x = b.x + i.clientLeft, g.y = b.y + i.clientTop;
  }
  !r && l && (g.x = cf(l));
  const p = l && !r && !f ? pC(l, h) : Fi(0), v = d.left + h.scrollLeft - g.x - p.x, m = d.top + h.scrollTop - g.y - p.y;
  return {
    x: v,
    y: m,
    width: d.width,
    height: d.height
  };
}
function Tm(n) {
  return wi(n).position === "static";
}
function f1(n, i) {
  if (!La(n) || wi(n).position === "fixed")
    return null;
  if (i)
    return i(n);
  let o = n.offsetParent;
  return Wi(n) === o && (o = o.ownerDocument.body), o;
}
function gC(n, i) {
  const o = fn(n);
  if (sf(n))
    return o;
  if (!La(n)) {
    let l = To(n);
    for (; l && !dl(l); ) {
      if (Si(l) && !Tm(l))
        return l;
      l = To(l);
    }
    return o;
  }
  let r = f1(n, i);
  for (; r && S4(r) && Tm(r); )
    r = f1(r, i);
  return r && dl(r) && Tm(r) && !vg(r) ? o : r || E4(n) || o;
}
const B4 = async function(n) {
  const i = this.getOffsetParent || gC, o = this.getDimensions, r = await o(n.floating);
  return {
    reference: L4(n.reference, await i(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function P4(n) {
  return wi(n).direction === "rtl";
}
const U4 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: R4,
  getDocumentElement: Wi,
  getClippingRect: j4,
  getOffsetParent: gC,
  getElementRects: B4,
  getClientRects: D4,
  getDimensions: V4,
  getScale: Vr,
  isElement: Si,
  isRTL: P4
};
function vC(n, i) {
  return n.x === i.x && n.y === i.y && n.width === i.width && n.height === i.height;
}
function k4(n, i, o) {
  let r = null, l;
  const f = Wi(n);
  function d() {
    var v;
    clearTimeout(l), (v = r) == null || v.disconnect(), r = null;
  }
  function h(v, m) {
    v === void 0 && (v = !1), m === void 0 && (m = 1), d();
    const b = n.getBoundingClientRect(), {
      left: S,
      top: w,
      width: A,
      height: C
    } = b;
    if (v || i(), !A || !C)
      return;
    const R = cu(w), z = cu(f.clientWidth - (S + A)), D = cu(f.clientHeight - (w + C)), O = cu(S), k = {
      rootMargin: -R + "px " + -z + "px " + -D + "px " + -O + "px",
      threshold: qi(0, Na(1, m)) || 1
    };
    let N = !0;
    function M(F) {
      const J = F[0].intersectionRatio;
      if (!vC(b, n.getBoundingClientRect()))
        return h();
      if (J !== m) {
        if (!N)
          return h();
        J ? h(!1, J) : l = setTimeout(() => {
          h(!1, 1e-7);
        }, 1e3);
      }
      N = !1;
    }
    try {
      r = new IntersectionObserver(M, {
        ...k,
        // Handle <iframe>s
        root: f.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(M, k);
    }
    r.observe(n);
  }
  const g = fn(n), p = () => h(o);
  return g.addEventListener("resize", p), h(!0), () => {
    g.removeEventListener("resize", p), d();
  };
}
function H4(n, i, o, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: h = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = r, p = bg(n), v = l || f ? [...p ? hl(p) : [], ...i ? hl(i) : []] : [];
  v.forEach((R) => {
    l && R.addEventListener("scroll", o), f && R.addEventListener("resize", o);
  });
  const m = p && h ? k4(p, o, f) : null;
  let b = -1, S = null;
  d && (S = new ResizeObserver((R) => {
    let [z] = R;
    z && z.target === p && S && i && (S.unobserve(i), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var D;
      (D = S) == null || D.observe(i);
    })), o();
  }), p && !g && S.observe(p), i && S.observe(i));
  let w, A = g ? Eo(n) : null;
  g && C();
  function C() {
    const R = Eo(n);
    A && !vC(A, R) && o(), A = R, w = requestAnimationFrame(C);
  }
  return o(), () => {
    var R;
    v.forEach((z) => {
      l && z.removeEventListener("scroll", o), f && z.removeEventListener("resize", o);
    }), m?.(), (R = S) == null || R.disconnect(), S = null, g && cancelAnimationFrame(w);
  };
}
const I4 = v4, G4 = y4, Y4 = m4, q4 = x4, F4 = p4, d1 = h4, X4 = b4, K4 = (n, i, o) => {
  const r = /* @__PURE__ */ new Map(), l = o ?? {}, f = {
    ...U4,
    ...l.platform,
    _c: r
  };
  return d4(n, i, {
    ...l,
    platform: f
  });
};
var Z4 = typeof document < "u", Q4 = function() {
}, Au = Z4 ? x.useLayoutEffect : Q4;
function Gu(n, i) {
  if (n === i)
    return !0;
  if (typeof n != typeof i)
    return !1;
  if (typeof n == "function" && n.toString() === i.toString())
    return !0;
  let o, r, l;
  if (n && i && typeof n == "object") {
    if (Array.isArray(n)) {
      if (o = n.length, o !== i.length) return !1;
      for (r = o; r-- !== 0; )
        if (!Gu(n[r], i[r]))
          return !1;
      return !0;
    }
    if (l = Object.keys(n), o = l.length, o !== Object.keys(i).length)
      return !1;
    for (r = o; r-- !== 0; )
      if (!{}.hasOwnProperty.call(i, l[r]))
        return !1;
    for (r = o; r-- !== 0; ) {
      const f = l[r];
      if (!(f === "_owner" && n.$$typeof) && !Gu(n[f], i[f]))
        return !1;
    }
    return !0;
  }
  return n !== n && i !== i;
}
function yC(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function h1(n, i) {
  const o = yC(n);
  return Math.round(i * o) / o;
}
function Em(n) {
  const i = x.useRef(n);
  return Au(() => {
    i.current = n;
  }), i;
}
function $4(n) {
  n === void 0 && (n = {});
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: l,
    elements: {
      reference: f,
      floating: d
    } = {},
    transform: h = !0,
    whileElementsMounted: g,
    open: p
  } = n, [v, m] = x.useState({
    x: 0,
    y: 0,
    strategy: o,
    placement: i,
    middlewareData: {},
    isPositioned: !1
  }), [b, S] = x.useState(r);
  Gu(b, r) || S(r);
  const [w, A] = x.useState(null), [C, R] = x.useState(null), z = x.useCallback(($) => {
    $ !== k.current && (k.current = $, A($));
  }, []), D = x.useCallback(($) => {
    $ !== N.current && (N.current = $, R($));
  }, []), O = f || w, P = d || C, k = x.useRef(null), N = x.useRef(null), M = x.useRef(v), F = g != null, J = Em(g), ut = Em(l), et = Em(p), rt = x.useCallback(() => {
    if (!k.current || !N.current)
      return;
    const $ = {
      placement: i,
      strategy: o,
      middleware: b
    };
    ut.current && ($.platform = ut.current), K4(k.current, N.current, $).then((at) => {
      const Q = {
        ...at,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: et.current !== !1
      };
      ft.current && !Gu(M.current, Q) && (M.current = Q, Ir.flushSync(() => {
        m(Q);
      }));
    });
  }, [b, i, o, ut, et]);
  Au(() => {
    p === !1 && M.current.isPositioned && (M.current.isPositioned = !1, m(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [p]);
  const ft = x.useRef(!1);
  Au(() => (ft.current = !0, () => {
    ft.current = !1;
  }), []), Au(() => {
    if (O && (k.current = O), P && (N.current = P), O && P) {
      if (J.current)
        return J.current(O, P, rt);
      rt();
    }
  }, [O, P, rt, J, F]);
  const dt = x.useMemo(() => ({
    reference: k,
    floating: N,
    setReference: z,
    setFloating: D
  }), [z, D]), Y = x.useMemo(() => ({
    reference: O,
    floating: P
  }), [O, P]), X = x.useMemo(() => {
    const $ = {
      position: o,
      left: 0,
      top: 0
    };
    if (!Y.floating)
      return $;
    const at = h1(Y.floating, v.x), Q = h1(Y.floating, v.y);
    return h ? {
      ...$,
      transform: "translate(" + at + "px, " + Q + "px)",
      ...yC(Y.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: o,
      left: at,
      top: Q
    };
  }, [o, h, Y.floating, v.x, v.y]);
  return x.useMemo(() => ({
    ...v,
    update: rt,
    refs: dt,
    elements: Y,
    floatingStyles: X
  }), [v, rt, dt, Y, X]);
}
const J4 = (n) => {
  function i(o) {
    return {}.hasOwnProperty.call(o, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(o) {
      const {
        element: r,
        padding: l
      } = typeof n == "function" ? n(o) : n;
      return r && i(r) ? r.current != null ? d1({
        element: r.current,
        padding: l
      }).fn(o) : {} : r ? d1({
        element: r,
        padding: l
      }).fn(o) : {};
    }
  };
}, W4 = (n, i) => {
  const o = I4(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, tV = (n, i) => {
  const o = G4(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, eV = (n, i) => ({
  fn: X4(n).fn,
  options: [n, i]
}), nV = (n, i) => {
  const o = Y4(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, iV = (n, i) => {
  const o = q4(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, aV = (n, i) => {
  const o = F4(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, oV = (n, i) => {
  const o = J4(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
};
var rV = Object.defineProperty, sV = (n, i) => rV(n, "name", { value: i, configurable: !0 }), lV = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ sV(function(i, o) {
    const { children: r, width: l = 10, height: f = 5, ...d } = i;
    return /* @__PURE__ */ E.jsx(
      It.svg,
      {
        ...d,
        ref: o,
        width: l,
        height: f,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: i.asChild ? r : /* @__PURE__ */ E.jsx("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  }, "Arrow")
), cV = Object.defineProperty, Xi = (n, i) => cV(n, "name", { value: i, configurable: !0 }), m1 = {
  Partial: "partial"
}, p1 = {
  Optimized: "optimized",
  Always: "always"
}, bC = "Popper", [xC, uf] = /* @__PURE__ */ Ti(bC), [uV, SC] = xC(bC), wC = /* @__PURE__ */ Xi((n) => {
  const { __scopePopper: i, children: o } = n, [r, l] = x.useState(null), [f, d] = x.useState(void 0);
  return /* @__PURE__ */ E.jsx(
    uV,
    {
      scope: i,
      anchor: r,
      onAnchorChange: l,
      placementState: f,
      setPlacementState: d,
      children: o
    }
  );
}, "Popper"), fV = "PopperAnchor", TC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Xi(function(i, o) {
    const { __scopePopper: r, virtualRef: l, ...f } = i, d = SC(fV, r), h = x.useRef(null), g = d.onAnchorChange, p = x.useCallback(
      (A) => {
        h.current = A, A && g(A);
      },
      [g]
    ), v = Kt(o, p), m = x.useRef(null);
    x.useEffect(() => {
      if (!l)
        return;
      const A = m.current;
      m.current = l.current, A !== m.current && g(m.current);
    });
    const b = d.placementState && ff(d.placementState), S = b?.[0], w = b?.[1];
    return l ? null : /* @__PURE__ */ E.jsx(
      It.div,
      {
        "data-radix-popper-side": S,
        "data-radix-popper-align": w,
        ...f,
        ref: v
      }
    );
  }, "PopperAnchor")
), EC = "PopperContent", [dV, hV] = xC(EC), CC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Xi(function(i, o) {
    const {
      __scopePopper: r,
      side: l = "bottom",
      sideOffset: f = 0,
      align: d = "center",
      alignOffset: h = 0,
      arrowPadding: g = 0,
      avoidCollisions: p = !0,
      collisionBoundary: v = [],
      collisionPadding: m = 0,
      sticky: b = m1.Partial,
      hideWhenDetached: S = !1,
      updatePositionStrategy: w = p1.Optimized,
      onPlaced: A,
      ...C
    } = i, R = SC(EC, r), [z, D] = x.useState(null), O = Kt(o, D), [P, k] = x.useState(null), N = ug(P), M = N?.width ?? 0, F = N?.height ?? 0, J = l + (d !== "center" ? "-" + d : ""), ut = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, et = Array.isArray(v) ? v : [v], rt = et.length > 0, ft = {
      padding: ut,
      boundary: et.filter(AC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: rt
    }, { refs: dt, floatingStyles: Y, placement: X, isPositioned: $, middlewareData: at } = $4({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: J,
      whileElementsMounted: /* @__PURE__ */ Xi((...tt) => H4(...tt, {
        animationFrame: w === p1.Always
      }), "whileElementsMounted"),
      elements: {
        reference: R.anchor
      },
      middleware: [
        W4({ mainAxis: f + F, alignmentAxis: h }),
        p && tV({
          mainAxis: !0,
          crossAxis: !1,
          limiter: b === m1.Partial ? eV() : void 0,
          ...ft
        }),
        p && nV({ ...ft }),
        iV({
          ...ft,
          apply: /* @__PURE__ */ Xi(({ elements: tt, rects: bt, availableWidth: nt, availableHeight: st }) => {
            const { width: Dt, height: ae } = bt.reference, ce = tt.floating.style;
            ce.setProperty("--radix-popper-available-width", `${nt}px`), ce.setProperty("--radix-popper-available-height", `${st}px`), ce.setProperty("--radix-popper-anchor-width", `${Dt}px`), ce.setProperty("--radix-popper-anchor-height", `${ae}px`);
          }, "apply")
        }),
        P && oV({ element: P, padding: g }),
        vV({ arrowWidth: M, arrowHeight: F }),
        S && aV({
          strategy: "referenceHidden",
          ...ft,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: rt ? ft.boundary : void 0
        })
      ]
    }), Q = R.setPlacementState;
    le(() => (Q(X), () => {
      Q(void 0);
    }), [X, Q]);
    const [yt, St] = ff(X), Ot = Wn(A);
    le(() => {
      $ && Ot?.();
    }, [$, Ot]);
    const j = at.arrow?.x, q = at.arrow?.y, W = at.arrow?.centerOffset !== 0, [lt, it] = x.useState();
    return le(() => {
      z && it(window.getComputedStyle(z).zIndex);
    }, [z]), /* @__PURE__ */ E.jsx(
      "div",
      {
        ref: dt.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: $ ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: lt,
          "--radix-popper-transform-origin": [
            at.transformOrigin?.x,
            at.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...at.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: i.dir,
        children: /* @__PURE__ */ E.jsx(
          dV,
          {
            scope: r,
            placedSide: yt,
            placedAlign: St,
            onArrowChange: k,
            arrowX: j,
            arrowY: q,
            shouldHideArrow: W,
            children: /* @__PURE__ */ E.jsx(
              It.div,
              {
                "data-side": yt,
                "data-align": St,
                ...C,
                ref: O,
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
), mV = "PopperArrow", pV = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, gV = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Xi(function(i, o) {
    const { __scopePopper: r, ...l } = i, f = hV(mV, r), d = pV[f.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ E.jsx(
        "span",
        {
          ref: f.onArrowChange,
          style: {
            position: "absolute",
            left: f.arrowX,
            top: f.arrowY,
            [d]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[f.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[f.placedSide],
            visibility: f.shouldHideArrow ? "hidden" : void 0
          },
          children: /* @__PURE__ */ E.jsx(
            lV,
            {
              ...l,
              ref: o,
              style: {
                ...l.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
              }
            }
          )
        }
      )
    );
  }, "PopperArrow")
);
function AC(n) {
  return n !== null;
}
Xi(AC, "isNotNull");
var vV = /* @__PURE__ */ Xi((n) => ({
  name: "transformOrigin",
  options: n,
  fn(i) {
    const { placement: o, rects: r, middlewareData: l } = i, d = l.arrow?.centerOffset !== 0, h = d ? 0 : n.arrowWidth, g = d ? 0 : n.arrowHeight, [p, v] = ff(o), m = { start: "0%", center: "50%", end: "100%" }[v], b = (l.arrow?.x ?? 0) + h / 2, S = (l.arrow?.y ?? 0) + g / 2;
    let w = "", A = "";
    return p === "bottom" ? (w = d ? m : `${b}px`, A = `${-g}px`) : p === "top" ? (w = d ? m : `${b}px`, A = `${r.floating.height + g}px`) : p === "right" ? (w = `${-g}px`, A = d ? m : `${S}px`) : p === "left" && (w = `${r.floating.width + g}px`, A = d ? m : `${S}px`), { data: { x: w, y: A } };
  }
}), "transformOrigin");
function ff(n) {
  const [i, o = "center"] = n.split("-");
  return [i, o];
}
Xi(ff, "getSideAndAlignFromPlacement");
var yV = Object.defineProperty, xg = (n, i) => yV(n, "name", { value: i, configurable: !0 }), Cm = !1;
function RC() {
  const [n, i] = x.useState(Cm);
  return x.useEffect(() => {
    Cm || (Cm = !0, i(!0));
  }, []), n;
}
xg(RC, "useIsHydrated");
var DC = Pr[" useSyncExternalStore ".trim().toString()];
function OC() {
  return () => {
  };
}
xg(OC, "subscribe");
function MC() {
  return DC(
    OC,
    () => !0,
    () => !1
  );
}
xg(MC, "useIsHydratedModern");
var bV = typeof DC == "function" ? MC : RC, xV = Object.defineProperty, Do = (n, i) => xV(n, "name", { value: i, configurable: !0 }), Am = "rovingFocusGroup.onEntryFocus", SV = { bubbles: !1, cancelable: !0 }, df = "RovingFocusGroup", [pp, _C, wV] = /* @__PURE__ */ eg(df), [TV, NC] = /* @__PURE__ */ Ti(
  df,
  [wV]
), g1 = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, EV = {
  RTL: "rtl"
}, [CV, AV] = TV(df), RV = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Do(function(i, o) {
    return /* @__PURE__ */ E.jsx(pp.Provider, { scope: i.__scopeRovingFocusGroup, children: /* @__PURE__ */ E.jsx(pp.Slot, { scope: i.__scopeRovingFocusGroup, children: /* @__PURE__ */ E.jsx(DV, { ...i, ref: o }) }) });
  }, "RovingFocusGroup")
), DV = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Do(function(i, o) {
  const {
    __scopeRovingFocusGroup: r,
    orientation: l,
    loop: f = !1,
    dir: d,
    currentTabStopId: h,
    defaultCurrentTabStopId: g,
    onCurrentTabStopIdChange: p,
    onEntryFocus: v,
    preventScrollOnEntryFocus: m = !1,
    ...b
  } = i, S = x.useRef(null), w = Kt(o, S), A = tf(d), [C, R] = _a({
    prop: h,
    defaultProp: g ?? null,
    onChange: p,
    caller: df
  }), [z, D] = x.useState(!1), O = Wn(v), P = _C(r), k = x.useRef(!1), [N, M] = x.useState(0);
  return x.useEffect(() => {
    const F = S.current;
    if (F)
      return F.addEventListener(Am, O), () => F.removeEventListener(Am, O);
  }, [O]), /* @__PURE__ */ E.jsx(
    CV,
    {
      scope: r,
      orientation: l,
      dir: A,
      loop: f,
      currentTabStopId: C,
      onItemFocus: x.useCallback(
        (F) => R(F),
        [R]
      ),
      onItemShiftTab: x.useCallback(() => D(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => M((F) => F + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => M((F) => F - 1),
        []
      ),
      children: /* @__PURE__ */ E.jsx(
        It.div,
        {
          tabIndex: z || N === 0 ? -1 : 0,
          "data-orientation": l,
          ...b,
          ref: w,
          style: { outline: "none", ...i.style },
          onMouseDown: Ct(i.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: Ct(i.onFocus, (F) => {
            const J = !k.current;
            if (F.target === F.currentTarget && J && !z) {
              const ut = new CustomEvent(Am, SV);
              if (F.currentTarget.dispatchEvent(ut), !ut.defaultPrevented) {
                const et = P().filter((X) => X.focusable), rt = et.find((X) => X.active), ft = et.find((X) => X.id === C), Y = [rt, ft, ...et].filter(
                  Boolean
                ).map((X) => X.ref.current);
                Sg(Y, m);
              }
            }
            k.current = !1;
          }),
          onBlur: Ct(i.onBlur, () => D(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), OV = "RovingFocusGroupItem", MV = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Do(function(i, o) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: l = !0,
      active: f = !1,
      tabStopId: d,
      children: h,
      ...g
    } = i, p = Gi(), v = d || p, m = AV(OV, r), b = m.currentTabStopId === v, S = _C(r), { onFocusableItemAdd: w, onFocusableItemRemove: A, currentTabStopId: C } = m, R = bV();
    return le(() => {
      if (!(!R || !l))
        return w(), () => A();
    }, [R, l, w, A]), x.useEffect(() => {
      if (!(R || !l))
        return w(), () => A();
    }, [R, l, w, A]), /* @__PURE__ */ E.jsx(
      pp.ItemSlot,
      {
        scope: r,
        id: v,
        focusable: l,
        active: f,
        children: /* @__PURE__ */ E.jsx(
          It.span,
          {
            tabIndex: b ? 0 : -1,
            "data-orientation": m.orientation,
            ...g,
            ref: o,
            onMouseDown: Ct(i.onMouseDown, (z) => {
              l ? m.onItemFocus(v) : z.preventDefault();
            }),
            onFocus: Ct(i.onFocus, () => m.onItemFocus(v)),
            onKeyDown: Ct(i.onKeyDown, (z) => {
              if (z.key === "Tab" && z.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (z.target !== z.currentTarget) return;
              const D = jC(z, m.orientation, m.dir);
              if (D !== void 0) {
                if (z.metaKey || z.ctrlKey || z.altKey || z.shiftKey) return;
                z.preventDefault();
                let P = S().filter((k) => k.focusable).map((k) => k.ref.current);
                if (D === "last") P.reverse();
                else if (D === "prev" || D === "next") {
                  D === "prev" && P.reverse();
                  const k = P.indexOf(z.currentTarget);
                  P = m.loop ? VC(P, k + 1) : P.slice(k + 1);
                }
                setTimeout(() => Sg(P));
              }
            }),
            children: typeof h == "function" ? h({ isCurrentTabStop: b, hasTabStop: C != null }) : h
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), _V = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zC(n, i) {
  return i !== EV.RTL ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
Do(zC, "getDirectionAwareKey");
function jC(n, i, o) {
  const r = zC(n.key, o);
  if (!(i === g1.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(i === g1.Horizontal && ["ArrowUp", "ArrowDown"].includes(r)))
    return _V[r];
}
Do(jC, "getFocusIntent");
function Sg(n, i = !1) {
  const o = document.activeElement;
  for (const r of n)
    if (r === o || (r.focus({ preventScroll: i }), document.activeElement !== o)) return;
}
Do(Sg, "focusFirst");
function VC(n, i) {
  return n.map((o, r) => n[(i + r) % n.length]);
}
Do(VC, "wrapArray");
var NV = Object.defineProperty, zV = (n, i) => NV(n, "name", { value: i, configurable: !0 });
function LC(n) {
  const i = x.useRef({ value: n, previous: n });
  return x.useMemo(() => (i.current.value !== n && (i.current.previous = i.current.value, i.current.value = n), i.current.previous), [n]);
}
zV(LC, "usePrevious");
var jV = Object.defineProperty, VV = (n, i) => jV(n, "name", { value: i, configurable: !0 });
function gp(n, [i, o]) {
  return Math.min(o, Math.max(i, n));
}
VV(gp, "clamp");
var LV = Object.defineProperty, Pt = (n, i) => LV(n, "name", { value: i, configurable: !0 }), v1 = {
  ItemAligned: "item-aligned",
  Popper: "popper"
}, BV = {
  RTL: "rtl"
}, PV = [" ", "Enter", "ArrowUp", "ArrowDown"], UV = [" ", "Enter"], Br = "Select", [hf, mf, kV] = /* @__PURE__ */ eg(Br), [Oo, RB] = /* @__PURE__ */ Ti(Br, [
  kV,
  uf
]), wg = uf(), [HV, Ba] = Oo(Br), [IV, GV] = Oo(Br);
function BC(n) {
  const {
    __scopeSelect: i,
    children: o,
    open: r,
    defaultOpen: l,
    onOpenChange: f,
    value: d,
    defaultValue: h,
    onValueChange: g,
    dir: p,
    name: v,
    autoComplete: m,
    disabled: b,
    required: S,
    form: w,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: A
  } = n, C = wg(i), [R, z] = x.useState(null), [D, O] = x.useState(null), [P, k] = x.useState(!1), N = tf(p), [M, F] = _a({
    prop: r,
    defaultProp: l ?? !1,
    onChange: f,
    caller: Br
  }), [J, ut] = _a({
    prop: d,
    defaultProp: h,
    onChange: g,
    caller: Br
  }), et = x.useRef(null), rt = x.useRef(J);
  x.useEffect(() => {
    const St = w ? R?.ownerDocument.getElementById(w) : R?.form;
    if (St instanceof HTMLFormElement) {
      const Ot = /* @__PURE__ */ Pt(() => ut(rt.current), "reset");
      return St.addEventListener("reset", Ot), () => St.removeEventListener("reset", Ot);
    }
  }, [w, R, ut]);
  const ft = R ? !!w || !!R.closest("form") : !0, [dt, Y] = x.useState(/* @__PURE__ */ new Set()), X = Gi(), $ = Array.from(dt).map((St) => St.props.value).join(";"), at = x.useCallback((St) => {
    Y((Ot) => new Set(Ot).add(St));
  }, []), Q = x.useCallback((St) => {
    Y((Ot) => {
      const j = new Set(Ot);
      return j.delete(St), j;
    });
  }, []), yt = {
    required: S,
    trigger: R,
    onTriggerChange: z,
    valueNode: D,
    onValueNodeChange: O,
    valueNodeHasChildren: P,
    onValueNodeHasChildrenChange: k,
    contentId: X,
    value: J,
    onValueChange: ut,
    open: M,
    onOpenChange: F,
    dir: N,
    triggerPointerDownPosRef: et,
    disabled: b,
    name: v,
    autoComplete: m,
    form: w,
    nativeOptions: dt,
    nativeSelectKey: $,
    isFormControl: ft
  };
  return /* @__PURE__ */ E.jsx(wC, { ...C, children: /* @__PURE__ */ E.jsx(HV, { scope: i, ...yt, children: /* @__PURE__ */ E.jsx(hf.Provider, { scope: i, children: /* @__PURE__ */ E.jsx(
    IV,
    {
      scope: i,
      onNativeOptionAdd: at,
      onNativeOptionRemove: Q,
      children: HC(A) ? A(yt) : o
    }
  ) }) }) });
}
Pt(BC, "SelectProvider");
var YV = /* @__PURE__ */ Pt((n) => {
  const { __scopeSelect: i, children: o, ...r } = n;
  return /* @__PURE__ */ E.jsx(
    BC,
    {
      __scopeSelect: i,
      ...r,
      internal_do_not_use_render: ({ isFormControl: l }) => /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        o,
        l ? /* @__PURE__ */ E.jsx(
          gL,
          {
            __scopeSelect: i
          }
        ) : null
      ] })
    }
  );
}, "Select"), qV = "SelectTrigger", FV = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, disabled: l = !1, ...f } = i, d = wg(r), h = Ba(qV, r), g = h.disabled || l, p = Kt(o, h.onTriggerChange), v = mf(r), m = x.useRef("touch"), [b, S, w] = Eg((C) => {
      const R = v().filter((O) => !O.disabled), z = R.find((O) => O.value === h.value), D = Cg(R, C, z);
      D !== void 0 && h.onValueChange(D.value);
    }), A = /* @__PURE__ */ Pt((C) => {
      g || (h.onOpenChange(!0), w()), C && (h.triggerPointerDownPosRef.current = {
        x: Math.round(C.pageX),
        y: Math.round(C.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ E.jsx(TC, { asChild: !0, ...d, children: /* @__PURE__ */ E.jsx(
      It.button,
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
        "data-placeholder": bl(h.value) ? "" : void 0,
        ...f,
        ref: p,
        onClick: Ct(f.onClick, (C) => {
          C.currentTarget.focus(), m.current !== "mouse" && A(C);
        }),
        onPointerDown: Ct(f.onPointerDown, (C) => {
          m.current = C.pointerType;
          const R = C.target;
          R.hasPointerCapture(C.pointerId) && R.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (A(C), C.preventDefault());
        }),
        onKeyDown: Ct(f.onKeyDown, (C) => {
          const R = b.current !== "";
          !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && S(C.key), !(R && C.key === " ") && PV.includes(C.key) && (A(), C.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), XV = "SelectValue", KV = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, className: l, style: f, children: d, placeholder: h = "", ...g } = i, p = Ba(XV, r), { onValueNodeHasChildrenChange: v } = p, m = d !== void 0, b = Kt(o, p.onValueNodeChange);
    le(() => {
      v(m);
    }, [v, m]);
    const S = bl(p.value);
    return /* @__PURE__ */ E.jsx(
      It.span,
      {
        ...g,
        asChild: S ? !1 : g.asChild,
        ref: b,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ E.jsx(x.Fragment, { children: S ? h : d }, S ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), ZV = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, children: l, ...f } = i;
    return /* @__PURE__ */ E.jsx(It.span, { "aria-hidden": !0, ...f, ref: o, children: l || "▼" });
  }, "SelectIcon")
), QV = "SelectPortal", [$V, JV] = Oo(QV, {
  forceMount: void 0
}), WV = /* @__PURE__ */ Pt((n) => {
  const { __scopeSelect: i, forceMount: o, ...r } = n;
  return /* @__PURE__ */ E.jsx($V, { scope: n.__scopeSelect, forceMount: o, children: /* @__PURE__ */ E.jsx(rg, { asChild: !0, ...r }) });
}, "SelectPortal"), Co = "SelectContent", tL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const r = JV(Co, i.__scopeSelect), { forceMount: l = r.forceMount, ...f } = i, d = Ba(Co, i.__scopeSelect), [h, g] = x.useState();
    return le(() => {
      g(new DocumentFragment());
    }, []), /* @__PURE__ */ E.jsx(Ro, { present: l || d.open, children: ({ present: p }) => p ? /* @__PURE__ */ E.jsx(iL, { ...f, ref: o }) : /* @__PURE__ */ E.jsx(eL, { ...f, fragment: h }) });
  }, "SelectContent")
), eL = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const { __scopeSelect: r, children: l, fragment: f } = i;
  return f ? Ir.createPortal(
    /* @__PURE__ */ E.jsx(PC, { scope: r, children: /* @__PURE__ */ E.jsx(hf.Slot, { scope: r, children: /* @__PURE__ */ E.jsx("div", { ref: o, children: l }) }) }),
    f
  ) : null;
}, "SelectContentFragment")), Zn = 10, [PC, Mo] = Oo(Co), nL = /* @__PURE__ */ Ki("SelectContent.RemoveScroll"), iL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r } = i, {
      position: l = v1.ItemAligned,
      onCloseAutoFocus: f,
      onEscapeKeyDown: d,
      onPointerDownOutside: h,
      //
      // PopperContent props
      side: g,
      sideOffset: p,
      align: v,
      alignOffset: m,
      arrowPadding: b,
      collisionBoundary: S,
      collisionPadding: w,
      sticky: A,
      hideWhenDetached: C,
      avoidCollisions: R,
      //
      ...z
    } = i, D = Ba(Co, r), [O, P] = x.useState(null), [k, N] = x.useState(null), M = Kt(o, P), [F, J] = x.useState(null), [ut, et] = x.useState(
      null
    ), rt = mf(r), [ft, dt] = x.useState(!1), Y = x.useRef(!1);
    x.useEffect(() => {
      if (O) return WE(O);
    }, [O]), ef();
    const X = x.useCallback(
      (it) => {
        const [tt, ...bt] = rt().map((Dt) => Dt.ref.current), [nt] = bt.slice(-1), st = document.activeElement;
        for (const Dt of it)
          if (Dt === st || (Dt?.scrollIntoView({ block: "nearest" }), Dt === tt && k && (k.scrollTop = 0), Dt === nt && k && (k.scrollTop = k.scrollHeight), Dt?.focus(), document.activeElement !== st)) return;
      },
      [rt, k]
    ), $ = x.useCallback(
      () => X([F, O]),
      [X, F, O]
    );
    x.useEffect(() => {
      ft && $();
    }, [ft, $]);
    const { onOpenChange: at, triggerPointerDownPosRef: Q } = D;
    x.useEffect(() => {
      if (O) {
        let it = { x: 0, y: 0 };
        const tt = /* @__PURE__ */ Pt((nt) => {
          it = {
            x: Math.abs(Math.round(nt.pageX) - (Q.current?.x ?? 0)),
            y: Math.abs(Math.round(nt.pageY) - (Q.current?.y ?? 0))
          };
        }, "handlePointerMove"), bt = /* @__PURE__ */ Pt((nt) => {
          it.x <= 10 && it.y <= 10 ? nt.preventDefault() : nt.composedPath().includes(O) || at(!1), document.removeEventListener("pointermove", tt), Q.current = null;
        }, "handlePointerUp");
        return Q.current !== null && (document.addEventListener("pointermove", tt), document.addEventListener("pointerup", bt, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", tt), document.removeEventListener("pointerup", bt, { capture: !0 });
        };
      }
    }, [O, at, Q]), x.useEffect(() => {
      const it = /* @__PURE__ */ Pt(() => at(!1), "close");
      return window.addEventListener("blur", it), window.addEventListener("resize", it), () => {
        window.removeEventListener("blur", it), window.removeEventListener("resize", it);
      };
    }, [at]);
    const [yt, St] = Eg((it) => {
      const tt = rt().filter((st) => !st.disabled), bt = tt.find((st) => st.ref.current === document.activeElement), nt = Cg(tt, it, bt);
      nt && setTimeout(() => nt.ref.current?.focus());
    }), Ot = x.useCallback(
      (it, tt, bt) => {
        const nt = !Y.current && !bt;
        (D.value !== void 0 && D.value === tt || nt) && (J(it), nt && (Y.current = !0));
      },
      [D.value]
    ), j = x.useCallback(() => O?.focus(), [O]), q = x.useCallback(
      (it, tt, bt) => {
        const nt = !Y.current && !bt;
        (D.value !== void 0 && D.value === tt || nt) && et(it);
      },
      [D.value]
    ), W = l === v1.Popper ? y1 : aL, lt = W === y1 ? {
      side: g,
      sideOffset: p,
      align: v,
      alignOffset: m,
      arrowPadding: b,
      collisionBoundary: S,
      collisionPadding: w,
      sticky: A,
      hideWhenDetached: C,
      avoidCollisions: R
    } : {};
    return /* @__PURE__ */ E.jsx(
      PC,
      {
        scope: r,
        content: O,
        viewport: k,
        onViewportChange: N,
        itemRefCallback: Ot,
        selectedItem: F,
        onItemLeave: j,
        itemTextRefCallback: q,
        focusSelectedItem: $,
        selectedItemText: ut,
        position: l,
        isPositioned: ft,
        searchRef: yt,
        children: /* @__PURE__ */ E.jsx(lg, { as: nL, allowPinchZoom: !0, children: /* @__PURE__ */ E.jsx(
          VE,
          {
            asChild: !0,
            trapped: D.open,
            onMountAutoFocus: (it) => {
              it.preventDefault();
            },
            onUnmountAutoFocus: Ct(f, (it) => {
              D.trigger?.focus({ preventScroll: !0 }), it.preventDefault();
            }),
            children: /* @__PURE__ */ E.jsx(
              ig,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: h,
                onFocusOutside: (it) => it.preventDefault(),
                onDismiss: () => D.onOpenChange(!1),
                children: /* @__PURE__ */ E.jsx(
                  W,
                  {
                    role: "listbox",
                    id: D.contentId,
                    "data-state": D.open ? "open" : "closed",
                    dir: D.dir,
                    onContextMenu: (it) => it.preventDefault(),
                    ...z,
                    ...lt,
                    onPlaced: () => dt(!0),
                    ref: M,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...z.style
                    },
                    onKeyDown: Ct(z.onKeyDown, (it) => {
                      const tt = it.ctrlKey || it.altKey || it.metaKey;
                      if (it.key === "Tab" && it.preventDefault(), !tt && it.key.length === 1 && St(it.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(it.key)) {
                        let nt = rt().filter((st) => !st.disabled).map((st) => st.ref.current);
                        if (["ArrowUp", "End"].includes(it.key) && (nt = nt.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(it.key)) {
                          const st = it.target, Dt = nt.indexOf(st);
                          nt = nt.slice(Dt + 1);
                        }
                        setTimeout(() => X(nt)), it.preventDefault();
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
), aL = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const { __scopeSelect: r, onPlaced: l, ...f } = i, d = Ba(Co, r), h = Mo(Co, r), [g, p] = x.useState(null), [v, m] = x.useState(null), b = Kt(o, m), S = mf(r), w = x.useRef(!1), A = x.useRef(!0), { viewport: C, selectedItem: R, selectedItemText: z, focusSelectedItem: D } = h, O = x.useCallback(() => {
    if (d.trigger && d.valueNode && g && v && C && R && z) {
      const M = d.trigger.getBoundingClientRect(), F = v.getBoundingClientRect(), J = d.valueNode.getBoundingClientRect(), ut = z.getBoundingClientRect();
      if (d.dir !== BV.RTL) {
        const st = ut.left - F.left, Dt = J.left - st, ae = M.left - Dt, ce = M.width + ae, Ve = Math.max(ce, F.width), Jt = window.innerWidth - Zn, Bt = gp(Dt, [
          Zn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Zn, Jt - Ve)
        ]);
        g.style.minWidth = ce + "px", g.style.left = Bt + "px";
      } else {
        const st = F.right - ut.right, Dt = window.innerWidth - J.right - st, ae = window.innerWidth - M.right - Dt, ce = M.width + ae, Ve = Math.max(ce, F.width), Jt = window.innerWidth - Zn, Bt = gp(Dt, [
          Zn,
          Math.max(Zn, Jt - Ve)
        ]);
        g.style.minWidth = ce + "px", g.style.right = Bt + "px";
      }
      const et = S(), rt = window.innerHeight - Zn * 2, ft = C.scrollHeight, dt = window.getComputedStyle(v), Y = parseInt(dt.borderTopWidth, 10), X = parseInt(dt.paddingTop, 10), $ = parseInt(dt.borderBottomWidth, 10), at = parseInt(dt.paddingBottom, 10), Q = Y + X + ft + at + $, yt = Math.min(R.offsetHeight * 5, Q), St = window.getComputedStyle(C), Ot = parseInt(St.paddingTop, 10), j = parseInt(St.paddingBottom, 10), q = M.top + M.height / 2 - Zn, W = rt - q, lt = R.offsetHeight / 2, it = R.offsetTop + lt, tt = Y + X + it, bt = Q - tt;
      if (tt <= q) {
        const st = et.length > 0 && R === et[et.length - 1].ref.current;
        g.style.bottom = "0px";
        const Dt = v.clientHeight - C.offsetTop - C.offsetHeight, ae = Math.max(
          W,
          lt + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (st ? j : 0) + Dt + $
        ), ce = tt + ae;
        g.style.height = ce + "px";
      } else {
        const st = et.length > 0 && R === et[0].ref.current;
        g.style.top = "0px";
        const ae = Math.max(
          q,
          Y + C.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (st ? Ot : 0) + lt
        ) + bt;
        g.style.height = ae + "px", C.scrollTop = tt - q + C.offsetTop;
      }
      g.style.margin = `${Zn}px 0`, g.style.minHeight = yt + "px", g.style.maxHeight = rt + "px", l?.(), requestAnimationFrame(() => w.current = !0);
    }
  }, [
    S,
    d.trigger,
    d.valueNode,
    g,
    v,
    C,
    R,
    z,
    d.dir,
    l
  ]);
  le(() => O(), [O]);
  const [P, k] = x.useState();
  le(() => {
    v && k(window.getComputedStyle(v).zIndex);
  }, [v]);
  const N = x.useCallback(
    (M) => {
      M && A.current === !0 && (O(), D?.(), A.current = !1);
    },
    [O, D]
  );
  return /* @__PURE__ */ E.jsx(
    oL,
    {
      scope: r,
      contentWrapper: g,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ E.jsx(
        "div",
        {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P
          },
          children: /* @__PURE__ */ E.jsx(
            It.div,
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
}, "SelectItemAlignedPosition")), y1 = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const {
    __scopeSelect: r,
    align: l = "start",
    collisionPadding: f = Zn,
    ...d
  } = i, h = wg(r);
  return /* @__PURE__ */ E.jsx(
    CC,
    {
      ...h,
      ...d,
      ref: o,
      align: l,
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
}, "SelectPopperPosition")), [oL, Tg] = Oo(Co, {}), b1 = "SelectViewport", rL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, nonce: l, ...f } = i, d = Mo(b1, r), h = Tg(b1, r), g = Kt(o, d.onViewportChange), p = x.useRef(0);
    return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
      /* @__PURE__ */ E.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: l
        }
      ),
      /* @__PURE__ */ E.jsx(hf.Slot, { scope: r, children: /* @__PURE__ */ E.jsx(
        It.div,
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
          onScroll: Ct(f.onScroll, (v) => {
            const m = v.currentTarget, { contentWrapper: b, shouldExpandOnScrollRef: S } = h;
            if (S?.current && b) {
              const w = Math.abs(p.current - m.scrollTop);
              if (w > 0) {
                const A = window.innerHeight - Zn * 2, C = parseFloat(b.style.minHeight), R = parseFloat(b.style.height), z = Math.max(C, R);
                if (z < A) {
                  const D = z + w, O = Math.min(A, D), P = D - O;
                  b.style.height = O + "px", b.style.bottom === "0px" && (m.scrollTop = P > 0 ? P : 0, b.style.justifyContent = "flex-end");
                }
              }
            }
            p.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), sL = "SelectGroup", [DB, OB] = Oo(sL), vp = "SelectItem", [lL, UC] = Oo(vp), cL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const {
      __scopeSelect: r,
      value: l,
      disabled: f = !1,
      textValue: d,
      ...h
    } = i, g = Ba(vp, r), p = Mo(vp, r), v = g.value === l, [m, b] = x.useState(d ?? ""), [S, w] = x.useState(!1), A = Wn(
      (O) => p.itemRefCallback?.(O, l, f)
    ), C = Kt(o, A), R = Gi(), z = x.useRef("touch"), D = /* @__PURE__ */ Pt(() => {
      g.onValueChange(l), g.onOpenChange(!1);
    }, "handleSelect");
    return /* @__PURE__ */ E.jsx(
      lL,
      {
        scope: r,
        value: l,
        disabled: f,
        textId: R,
        isSelected: v,
        onItemTextChange: x.useCallback((O) => {
          b((P) => P || (O?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ E.jsx(
          hf.ItemSlot,
          {
            scope: r,
            value: l,
            disabled: f,
            textValue: m,
            children: /* @__PURE__ */ E.jsx(
              It.div,
              {
                role: "option",
                "aria-labelledby": R,
                "data-highlighted": S ? "" : void 0,
                "aria-selected": v && S,
                "data-state": v ? "checked" : "unchecked",
                "aria-disabled": f || void 0,
                "data-disabled": f ? "" : void 0,
                tabIndex: f ? void 0 : -1,
                ...h,
                ref: C,
                onFocus: Ct(h.onFocus, () => w(!0)),
                onBlur: Ct(h.onBlur, () => w(!1)),
                onClick: Ct(h.onClick, () => {
                  f || z.current !== "mouse" && D();
                }),
                onPointerUp: Ct(h.onPointerUp, () => {
                  f || z.current === "mouse" && D();
                }),
                onPointerDown: Ct(h.onPointerDown, (O) => {
                  z.current = O.pointerType;
                }),
                onPointerMove: Ct(h.onPointerMove, (O) => {
                  z.current = O.pointerType, f ? p.onItemLeave?.() : z.current === "mouse" && O.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Ct(h.onPointerLeave, (O) => {
                  O.currentTarget === document.activeElement && p.onItemLeave?.();
                }),
                onKeyDown: Ct(h.onKeyDown, (O) => {
                  f || O.target !== O.currentTarget || p.searchRef?.current !== "" && O.key === " " || (UV.includes(O.key) && D(), O.key === " " && O.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), uu = "SelectItemText", uL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, className: l, style: f, ...d } = i, h = Ba(uu, r), g = Mo(uu, r), p = UC(uu, r), v = GV(uu, r), [m, b] = x.useState(null), S = Wn(
      (D) => g.itemTextRefCallback?.(D, p.value, p.disabled)
    ), w = Kt(
      o,
      b,
      p.onItemTextChange,
      S
    ), A = m?.textContent, C = x.useMemo(
      () => /* @__PURE__ */ E.jsx("option", { value: p.value, disabled: p.disabled, children: A }, p.value),
      [p.disabled, p.value, A]
    ), { onNativeOptionAdd: R, onNativeOptionRemove: z } = v;
    return le(() => (R(C), () => z(C)), [R, z, C]), /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
      /* @__PURE__ */ E.jsx(It.span, { id: p.textId, ...d, ref: w }),
      p.isSelected && h.valueNode && !h.valueNodeHasChildren && !bl(h.value) ? Ir.createPortal(d.children, h.valueNode) : null
    ] });
  }, "SelectItemText")
), fL = "SelectItemIndicator", dL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pt(function(i, o) {
    const { __scopeSelect: r, ...l } = i;
    return UC(fL, r).isSelected ? /* @__PURE__ */ E.jsx(It.span, { "aria-hidden": !0, ...l, ref: o }) : null;
  }, "SelectItemIndicator")
), x1 = "SelectScrollUpButton", hL = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const r = Mo(x1, i.__scopeSelect), l = Tg(x1, i.__scopeSelect), [f, d] = x.useState(!1), h = Kt(o, l.onScrollButtonChange);
  return le(() => {
    if (r.viewport && r.isPositioned) {
      let g = function() {
        const v = p.scrollTop > 0;
        d(v);
      };
      Pt(g, "handleScroll");
      const p = r.viewport;
      return g(), p.addEventListener("scroll", g), () => p.removeEventListener("scroll", g);
    }
  }, [r.viewport, r.isPositioned]), f ? /* @__PURE__ */ E.jsx(
    kC,
    {
      ...i,
      ref: h,
      onAutoScroll: () => {
        const { viewport: g, selectedItem: p } = r;
        g && p && (g.scrollTop = g.scrollTop - p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), S1 = "SelectScrollDownButton", mL = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const r = Mo(S1, i.__scopeSelect), l = Tg(S1, i.__scopeSelect), [f, d] = x.useState(!1), h = Kt(o, l.onScrollButtonChange);
  return le(() => {
    if (r.viewport && r.isPositioned) {
      let g = function() {
        const v = p.scrollHeight - p.clientHeight, m = Math.ceil(p.scrollTop) < v;
        d(m);
      };
      Pt(g, "handleScroll");
      const p = r.viewport;
      return g(), p.addEventListener("scroll", g), () => p.removeEventListener("scroll", g);
    }
  }, [r.viewport, r.isPositioned]), f ? /* @__PURE__ */ E.jsx(
    kC,
    {
      ...i,
      ref: h,
      onAutoScroll: () => {
        const { viewport: g, selectedItem: p } = r;
        g && p && (g.scrollTop = g.scrollTop + p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), kC = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pt(function(i, o) {
  const { __scopeSelect: r, onAutoScroll: l, ...f } = i, d = Mo("SelectScrollButton", r), h = x.useRef(null), g = mf(r), p = x.useCallback(() => {
    h.current !== null && (window.clearInterval(h.current), h.current = null);
  }, []);
  return x.useEffect(() => () => p(), [p]), le(() => {
    g().find((m) => m.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [g]), /* @__PURE__ */ E.jsx(
    It.div,
    {
      "aria-hidden": !0,
      ...f,
      ref: o,
      style: { flexShrink: 0, ...f.style },
      onPointerDown: Ct(f.onPointerDown, () => {
        h.current === null && (h.current = window.setInterval(l, 50));
      }),
      onPointerMove: Ct(f.onPointerMove, () => {
        d.onItemLeave?.(), h.current === null && (h.current = window.setInterval(l, 50));
      }),
      onPointerLeave: Ct(f.onPointerLeave, () => {
        p();
      })
    }
  );
}, "SelectScrollButtonImpl")), pL = "SelectBubbleInput", gL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pt(function({ __scopeSelect: i, ...o }, r) {
    const l = Ba(pL, i), { value: f, onValueChange: d, required: h, disabled: g, name: p, autoComplete: v, form: m } = l, { nativeOptions: b, nativeSelectKey: S } = l, w = x.useRef(null), A = Kt(r, w), C = f ?? "", R = LC(C), z = Array.from(b).some(
      (D) => (D.props.value ?? "") === ""
    );
    return x.useEffect(() => {
      const D = w.current;
      if (!D) return;
      const O = window.HTMLSelectElement.prototype, k = Object.getOwnPropertyDescriptor(
        O,
        "value"
      ).set;
      if (R !== C && k) {
        const N = new Event("change", { bubbles: !0 });
        k.call(D, C), D.dispatchEvent(N);
      }
    }, [R, C]), /* @__PURE__ */ E.jsxs(
      It.select,
      {
        "aria-hidden": !0,
        required: h,
        tabIndex: -1,
        name: p,
        autoComplete: v,
        disabled: g,
        form: m,
        onChange: (D) => d(D.target.value),
        ...o,
        style: { ...pE, ...o.style },
        ref: A,
        defaultValue: C,
        children: [
          bl(f) && !z ? /* @__PURE__ */ E.jsx("option", { value: "" }) : null,
          Array.from(b)
        ]
      },
      S
    );
  }, "SelectBubbleInput")
);
function HC(n) {
  return typeof n == "function";
}
Pt(HC, "isFunction");
function bl(n) {
  return n === "" || n === void 0;
}
Pt(bl, "shouldShowPlaceholder");
function Eg(n) {
  const i = Wn(n), o = x.useRef(""), r = x.useRef(0), l = x.useCallback(
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
  return x.useEffect(() => () => window.clearTimeout(r.current), []), [o, l, f];
}
Pt(Eg, "useTypeaheadSearch");
function Cg(n, i, o) {
  const l = i.length > 1 && Array.from(i).every((p) => p === i[0]) ? i[0] : i, f = o ? n.indexOf(o) : -1;
  let d = IC(n, Math.max(f, 0));
  l.length === 1 && (d = d.filter((p) => p !== o));
  const g = d.find(
    (p) => p.textValue.toLowerCase().startsWith(l.toLowerCase())
  );
  return g !== o ? g : void 0;
}
Pt(Cg, "findNextItem");
function IC(n, i) {
  return n.map((o, r) => n[(i + r) % n.length]);
}
Pt(IC, "wrapArray");
var vL = Object.defineProperty, xl = (n, i) => vL(n, "name", { value: i, configurable: !0 }), GC = {
  Automatic: "automatic",
  Manual: "manual"
}, Ag = "Tabs", [yL, MB] = /* @__PURE__ */ Ti(Ag, [
  NC
]), YC = NC(), [bL, qC] = yL(Ag), xL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ xl(function(i, o) {
    const {
      __scopeTabs: r,
      value: l,
      onValueChange: f,
      defaultValue: d,
      orientation: h = "horizontal",
      dir: g,
      activationMode: p = GC.Automatic,
      ...v
    } = i, m = tf(g), [b, S] = _a({
      prop: l,
      onChange: f,
      defaultProp: d ?? "",
      caller: Ag
    });
    return /* @__PURE__ */ E.jsx(
      bL,
      {
        scope: r,
        baseId: Gi(),
        value: b,
        onValueChange: S,
        orientation: h,
        dir: m,
        activationMode: p,
        children: /* @__PURE__ */ E.jsx(
          It.div,
          {
            dir: m,
            "data-orientation": h,
            ...v,
            ref: o
          }
        )
      }
    );
  }, "Tabs")
), SL = "TabsList", wL = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ xl(function(i, o) {
    const { __scopeTabs: r, loop: l = !0, ...f } = i, d = qC(SL, r), h = YC(r);
    return /* @__PURE__ */ E.jsx(
      RV,
      {
        asChild: !0,
        ...h,
        orientation: d.orientation,
        dir: d.dir,
        loop: l,
        children: /* @__PURE__ */ E.jsx(
          It.div,
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
), TL = "TabsTrigger", EL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ xl(function(i, o) {
    const { __scopeTabs: r, value: l, disabled: f = !1, ...d } = i, h = qC(TL, r), g = YC(r), p = FC(h.baseId, l), v = XC(h.baseId, l), m = l === h.value;
    return /* @__PURE__ */ E.jsx(
      MV,
      {
        asChild: !0,
        ...g,
        focusable: !f,
        active: m,
        children: /* @__PURE__ */ E.jsx(
          It.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": v,
            "data-state": m ? "active" : "inactive",
            "data-disabled": f ? "" : void 0,
            disabled: f,
            id: p,
            ...d,
            ref: o,
            onMouseDown: Ct(i.onMouseDown, (b) => {
              !f && b.button === 0 && b.ctrlKey === !1 ? (b.currentTarget.focus(), h.onValueChange(l)) : b.preventDefault();
            }),
            onKeyDown: Ct(i.onKeyDown, (b) => {
              f || b.target !== b.currentTarget || [" ", "Enter"].includes(b.key) && h.onValueChange(l);
            }),
            onFocus: Ct(i.onFocus, () => {
              const b = h.activationMode !== GC.Manual;
              !m && !f && b && h.onValueChange(l);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
);
function FC(n, i) {
  return `${n}-trigger-${i}`;
}
xl(FC, "makeTriggerId");
function XC(n, i) {
  return `${n}-content-${i}`;
}
xl(XC, "makeContentId");
var CL = Object.defineProperty, xe = (n, i) => CL(n, "name", { value: i, configurable: !0 }), [Rg, _B] = /* @__PURE__ */ Ti("Tooltip", [
  uf
]), pf = uf(), AL = "TooltipProvider", RL = 700, yp = "tooltip.open", [DL, Dg] = Rg(AL), OL = /* @__PURE__ */ xe((n) => {
  const {
    __scopeTooltip: i,
    delayDuration: o = RL,
    skipDelayDuration: r = 300,
    disableHoverableContent: l = !1,
    children: f
  } = n, d = x.useRef(!0), h = x.useRef(!1), g = x.useRef(0);
  return x.useEffect(() => {
    const p = g.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ E.jsx(
    DL,
    {
      scope: i,
      isOpenDelayedRef: d,
      delayDuration: o,
      onOpen: x.useCallback(() => {
        r <= 0 || (window.clearTimeout(g.current), d.current = !1);
      }, [r]),
      onClose: x.useCallback(() => {
        r <= 0 || (window.clearTimeout(g.current), g.current = window.setTimeout(
          () => d.current = !0,
          r
        ));
      }, [r]),
      isPointerInTransitRef: h,
      onPointerInTransitChange: x.useCallback((p) => {
        h.current = p;
      }, []),
      disableHoverableContent: l,
      children: f
    }
  );
}, "TooltipProvider"), bp = "Tooltip", [ML, Sl] = Rg(bp), _L = /* @__PURE__ */ xe((n) => {
  const {
    __scopeTooltip: i,
    children: o,
    open: r,
    defaultOpen: l,
    onOpenChange: f,
    disableHoverableContent: d,
    delayDuration: h
  } = n, g = Dg(bp, n.__scopeTooltip), p = pf(i), [v, m] = x.useState(null), [b, S] = x.useState(void 0), w = Gi(), A = x.useRef(0), C = d ?? g.disableHoverableContent, R = h ?? g.delayDuration, z = x.useRef(!1), [D, O] = _a({
    prop: r,
    defaultProp: l ?? !1,
    onChange: /* @__PURE__ */ xe((J) => {
      J ? (g.onOpen(), document.dispatchEvent(new CustomEvent(yp))) : g.onClose(), f?.(J);
    }, "onChange"),
    caller: bp
  }), P = x.useMemo(() => D ? z.current ? "delayed-open" : "instant-open" : "closed", [D]), k = x.useCallback(() => {
    window.clearTimeout(A.current), A.current = 0, z.current = !1, O(!0);
  }, [O]), N = x.useCallback(() => {
    window.clearTimeout(A.current), A.current = 0, O(!1);
  }, [O]), M = x.useCallback(() => {
    window.clearTimeout(A.current), A.current = window.setTimeout(() => {
      z.current = !0, O(!0), A.current = 0;
    }, R);
  }, [R, O]);
  x.useEffect(() => () => {
    A.current && (window.clearTimeout(A.current), A.current = 0);
  }, []);
  const F = b ?? w;
  return /* @__PURE__ */ E.jsx(wC, { ...p, children: /* @__PURE__ */ E.jsx(
    ML,
    {
      scope: i,
      contentId: F,
      setContentId: S,
      open: D,
      stateAttribute: P,
      trigger: v,
      onTriggerChange: m,
      onTriggerEnter: x.useCallback(() => {
        g.isOpenDelayedRef.current ? M() : k();
      }, [g.isOpenDelayedRef, M, k]),
      onTriggerLeave: x.useCallback(() => {
        C ? N() : (window.clearTimeout(A.current), A.current = 0);
      }, [N, C]),
      onOpen: k,
      onClose: N,
      disableHoverableContent: C,
      children: o
    }
  ) });
}, "Tooltip"), w1 = "TooltipTrigger", NL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ xe(function(i, o) {
    const { __scopeTooltip: r, "aria-describedby": l, ...f } = i, d = Sl(w1, r), h = Dg(w1, r), g = pf(r), p = x.useRef(null), v = Kt(o, p, d.onTriggerChange), m = x.useRef(!1), b = x.useRef(!1), S = x.useCallback(() => m.current = !1, []);
    return x.useEffect(() => () => document.removeEventListener("pointerup", S), [S]), /* @__PURE__ */ E.jsx(TC, { asChild: !0, ...g, children: /* @__PURE__ */ E.jsx(
      It.button,
      {
        "aria-describedby": d.open ? nA(l, d.contentId) : l,
        "data-state": d.stateAttribute,
        ...f,
        ref: v,
        onPointerMove: Ct(i.onPointerMove, (w) => {
          w.pointerType !== "touch" && !b.current && !h.isPointerInTransitRef.current && (d.onTriggerEnter(), b.current = !0);
        }),
        onPointerLeave: Ct(i.onPointerLeave, () => {
          d.onTriggerLeave(), b.current = !1;
        }),
        onPointerDown: Ct(i.onPointerDown, () => {
          d.open && d.onClose(), m.current = !0, document.addEventListener("pointerup", S, { once: !0 });
        }),
        onFocus: Ct(i.onFocus, () => {
          m.current || d.onOpen();
        }),
        onBlur: Ct(i.onBlur, d.onClose),
        onClick: Ct(i.onClick, d.onClose)
      }
    ) });
  }, "TooltipTrigger")
), KC = "TooltipPortal", [zL, jL] = Rg(KC, {
  forceMount: void 0
}), VL = /* @__PURE__ */ xe((n) => {
  const { __scopeTooltip: i, forceMount: o, children: r, container: l } = n, f = Sl(KC, i);
  return /* @__PURE__ */ E.jsx(zL, { scope: i, forceMount: o, children: /* @__PURE__ */ E.jsx(Ro, { present: o || f.open, children: /* @__PURE__ */ E.jsx(rg, { asChild: !0, container: l, children: r }) }) });
}, "TooltipPortal"), ml = "TooltipContent", LL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ xe(function(i, o) {
    const r = jL(ml, i.__scopeTooltip), { forceMount: l = r.forceMount, side: f = "top", ...d } = i, h = Sl(ml, i.__scopeTooltip);
    return /* @__PURE__ */ E.jsx(Ro, { present: l || h.open, children: h.disableHoverableContent ? /* @__PURE__ */ E.jsx(ZC, { side: f, ...d, ref: o }) : /* @__PURE__ */ E.jsx(BL, { side: f, ...d, ref: o }) });
  }, "TooltipContent")
), BL = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ xe(function(i, o) {
  const r = Sl(ml, i.__scopeTooltip), l = Dg(ml, i.__scopeTooltip), f = x.useRef(null), d = Kt(o, f), [h, g] = x.useState(null), { trigger: p, onClose: v } = r, m = f.current, { onPointerInTransitChange: b } = l, S = x.useCallback(() => {
    g(null), b(!1);
  }, [b]), w = x.useCallback(
    (A, C) => {
      const R = A.currentTarget, z = { x: A.clientX, y: A.clientY }, D = QC(z, R.getBoundingClientRect()), O = $C(z, D), P = JC(C.getBoundingClientRect()), k = tA([...O, ...P]);
      g(k), b(!0);
    },
    [b]
  );
  return x.useEffect(() => () => S(), [S]), x.useEffect(() => {
    if (p && m) {
      const A = /* @__PURE__ */ xe((R) => w(R, m), "handleTriggerLeave"), C = /* @__PURE__ */ xe((R) => w(R, p), "handleContentLeave");
      return p.addEventListener("pointerleave", A), m.addEventListener("pointerleave", C), () => {
        p.removeEventListener("pointerleave", A), m.removeEventListener("pointerleave", C);
      };
    }
  }, [p, m, w, S]), x.useEffect(() => {
    if (h) {
      const A = /* @__PURE__ */ xe((C) => {
        const R = C.target, z = { x: C.clientX, y: C.clientY }, D = p?.contains(R) || m?.contains(R), O = !WC(z, h);
        D ? S() : O && (S(), v());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", A), () => document.removeEventListener("pointermove", A);
    }
  }, [p, m, h, v, S]), /* @__PURE__ */ E.jsx(ZC, { ...i, ref: d });
}, "TooltipContentHoverable")), PL = /* @__PURE__ */ lE("TooltipContent"), ZC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ xe(function(i, o) {
    const {
      __scopeTooltip: r,
      children: l,
      "aria-label": f,
      id: d,
      onEscapeKeyDown: h,
      onPointerDownOutside: g,
      ...p
    } = i, v = Sl(ml, r), m = pf(r), { onClose: b } = v;
    x.useEffect(() => (document.addEventListener(yp, b), () => document.removeEventListener(yp, b)), [b]), x.useEffect(() => {
      if (v.trigger) {
        const w = /* @__PURE__ */ xe((A) => {
          A.target instanceof Node && A.target.contains(v.trigger) && b();
        }, "handleScroll");
        return window.addEventListener("scroll", w, { capture: !0 }), () => window.removeEventListener("scroll", w, { capture: !0 });
      }
    }, [v.trigger, b]);
    const { setContentId: S } = v;
    return le(() => (S(d), () => {
      S(void 0);
    }), [d, S]), /* @__PURE__ */ E.jsx(
      ig,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: h,
        onPointerDownOutside: g,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: b,
        children: /* @__PURE__ */ E.jsxs(
          CC,
          {
            "data-state": v.stateAttribute,
            role: f ? void 0 : "tooltip",
            id: f ? void 0 : v.contentId,
            ...m,
            ...p,
            ref: o,
            style: {
              ...p.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ E.jsx(PL, { children: l }),
              f ? /* @__PURE__ */ E.jsx(cj, { id: v.contentId, role: "tooltip", children: f }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
), UL = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ xe(function(i, o) {
    const { __scopeTooltip: r, ...l } = i, f = pf(r);
    return /* @__PURE__ */ E.jsx(gV, { ...f, ...l, ref: o });
  }, "TooltipArrow")
);
function QC(n, i) {
  const o = Math.abs(i.top - n.y), r = Math.abs(i.bottom - n.y), l = Math.abs(i.right - n.x), f = Math.abs(i.left - n.x);
  switch (Math.min(o, r, l, f)) {
    case f:
      return "left";
    case l:
      return "right";
    case o:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
xe(QC, "getExitSideFromRect");
function $C(n, i, o = 5) {
  const r = [];
  switch (i) {
    case "top":
      r.push(
        { x: n.x - o, y: n.y + o },
        { x: n.x + o, y: n.y + o }
      );
      break;
    case "bottom":
      r.push(
        { x: n.x - o, y: n.y - o },
        { x: n.x + o, y: n.y - o }
      );
      break;
    case "left":
      r.push(
        { x: n.x + o, y: n.y - o },
        { x: n.x + o, y: n.y + o }
      );
      break;
    case "right":
      r.push(
        { x: n.x - o, y: n.y - o },
        { x: n.x - o, y: n.y + o }
      );
      break;
  }
  return r;
}
xe($C, "getPaddedExitPoints");
function JC(n) {
  const { top: i, right: o, bottom: r, left: l } = n;
  return [
    { x: l, y: i },
    { x: o, y: i },
    { x: o, y: r },
    { x: l, y: r }
  ];
}
xe(JC, "getPointsFromRect");
function WC(n, i) {
  const { x: o, y: r } = n;
  let l = !1;
  for (let f = 0, d = i.length - 1; f < i.length; d = f++) {
    const h = i[f], g = i[d], p = h.x, v = h.y, m = g.x, b = g.y;
    v > r != b > r && o < (m - p) * (r - v) / (b - v) + p && (l = !l);
  }
  return l;
}
xe(WC, "isPointInPolygon");
function tA(n) {
  const i = n.slice();
  return i.sort((o, r) => o.x < r.x ? -1 : o.x > r.x ? 1 : o.y < r.y ? -1 : o.y > r.y ? 1 : 0), eA(i);
}
xe(tA, "getHull");
function eA(n) {
  if (n.length <= 1) return n.slice();
  const i = [];
  for (let r = 0; r < n.length; r++) {
    const l = n[r];
    for (; i.length >= 2; ) {
      const f = i[i.length - 1], d = i[i.length - 2];
      if ((f.x - d.x) * (l.y - d.y) >= (f.y - d.y) * (l.x - d.x)) i.pop();
      else break;
    }
    i.push(l);
  }
  i.pop();
  const o = [];
  for (let r = n.length - 1; r >= 0; r--) {
    const l = n[r];
    for (; o.length >= 2; ) {
      const f = o[o.length - 1], d = o[o.length - 2];
      if ((f.x - d.x) * (l.y - d.y) >= (f.y - d.y) * (l.x - d.x)) o.pop();
      else break;
    }
    o.push(l);
  }
  return o.pop(), i.length === 1 && o.length === 1 && i[0].x === o[0].x && i[0].y === o[0].y ? i : i.concat(o);
}
xe(eA, "getHullPresorted");
function nA(...n) {
  const i = /* @__PURE__ */ new Set();
  for (const o of n)
    if (typeof o == "string")
      for (const r of String(o).trim().split(/\s+/))
        r && i.add(r);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
xe(nA, "concatAriaDescribedby");
const kL = qT(
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
function un({
  className: n,
  variant: i = "default",
  size: o = "default",
  asChild: r = !1,
  ...l
}) {
  const f = r ? W3 : "button";
  return /* @__PURE__ */ E.jsx(
    f,
    {
      "data-slot": "button",
      "data-variant": i,
      "data-size": o,
      className: Se(kL({ variant: i, size: o, className: n })),
      ...l
    }
  );
}
function Js({ className: n, type: i, ...o }) {
  return /* @__PURE__ */ E.jsx(
    "input",
    {
      type: i,
      "data-slot": "input",
      className: Se(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        n
      ),
      ...o
    }
  );
}
function T1({ className: n, ...i }) {
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: Se("animate-pulse rounded-md bg-accent", n),
      ...i
    }
  );
}
function HL({
  className: n,
  orientation: i = "horizontal",
  ...o
}) {
  return /* @__PURE__ */ E.jsx(
    xL,
    {
      "data-slot": "tabs",
      "data-orientation": i,
      orientation: i,
      className: Se("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", n),
      ...o
    }
  );
}
const IL = qT(
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
function GL({
  className: n,
  variant: i = "default",
  ...o
}) {
  return /* @__PURE__ */ E.jsx(
    wL,
    {
      "data-slot": "tabs-list",
      "data-variant": i,
      className: Se(IL({ variant: i }), n),
      ...o
    }
  );
}
function Rm({ className: n, ...i }) {
  return /* @__PURE__ */ E.jsx(
    EL,
    {
      "data-slot": "tabs-trigger",
      className: Se(
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
function Og() {
  if (typeof document > "u") return;
  const n = document.getElementById("cats-course-workspace-portals");
  if (n) return n;
  const i = document.createElement("div");
  return i.id = "cats-course-workspace-portals", i.className = "cats-course-workspace", i.dataset.courseWorkspacePortal = "", document.body.append(i), i;
}
function YL({
  delayDuration: n = 0,
  ...i
}) {
  return /* @__PURE__ */ E.jsx(
    OL,
    {
      "data-slot": "tooltip-provider",
      delayDuration: n,
      ...i
    }
  );
}
function qL({ ...n }) {
  return /* @__PURE__ */ E.jsx(
    _L,
    {
      "data-slot": "tooltip",
      ...n
    }
  );
}
function FL({ ...n }) {
  return /* @__PURE__ */ E.jsx(
    NL,
    {
      "data-slot": "tooltip-trigger",
      ...n
    }
  );
}
function XL({
  className: n,
  sideOffset: i = 0,
  children: o,
  ...r
}) {
  return /* @__PURE__ */ E.jsx(VL, { container: Og(), children: /* @__PURE__ */ E.jsxs(
    LL,
    {
      "data-slot": "tooltip-content",
      sideOffset: i,
      className: Se(
        "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        n
      ),
      ...r,
      children: [
        o,
        /* @__PURE__ */ E.jsx(UL, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}
function E1(n, i) {
  let o;
  return (...r) => {
    window.clearTimeout(o), o = window.setTimeout(() => n(...r), i);
  };
}
function KL({ debounce: n, scroll: i, polyfill: o, offsetSize: r } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const l = o || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!l) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [f, d] = x.useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), h = x.useRef({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: f, orientationHandler: null }), g = n ? typeof n == "number" ? n : n.scroll : null, p = n ? typeof n == "number" ? n : n.resize : null, v = x.useRef(!1);
  x.useEffect(() => (v.current = !0, () => {
    v.current = !1;
  }));
  const [m, b, S] = x.useMemo(() => {
    const R = () => {
      if (!h.current.element) return;
      const { left: z, top: D, width: O, height: P, bottom: k, right: N, x: M, y: F } = h.current.element.getBoundingClientRect(), J = { left: z, top: D, width: O, height: P, bottom: k, right: N, x: M, y: F };
      h.current.element instanceof HTMLElement && r && (J.height = h.current.element.offsetHeight, J.width = h.current.element.offsetWidth), Object.freeze(J), v.current && !JL(h.current.lastBounds, J) && d(h.current.lastBounds = J);
    };
    return [R, p ? E1(R, p) : R, g ? E1(R, g) : R];
  }, [d, r, g, p]);
  function w() {
    h.current.scrollContainers && (h.current.scrollContainers.forEach((R) => R.removeEventListener("scroll", S, !0)), h.current.scrollContainers = null), h.current.resizeObserver && (h.current.resizeObserver.disconnect(), h.current.resizeObserver = null), h.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", h.current.orientationHandler));
  }
  function A() {
    h.current.element && (h.current.resizeObserver = new l(S), h.current.resizeObserver.observe(h.current.element), i && h.current.scrollContainers && h.current.scrollContainers.forEach((R) => R.addEventListener("scroll", S, { capture: !0, passive: !0 })), h.current.orientationHandler = () => {
      S();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", h.current.orientationHandler));
  }
  const C = (R) => {
    !R || R === h.current.element || (w(), h.current.element = R, h.current.scrollContainers = iA(R), A());
  };
  return QL(S, !!i), ZL(b), x.useEffect(() => {
    w(), A();
  }, [i, S, b]), x.useEffect(() => w, []), [C, f, m];
}
function ZL(n) {
  x.useEffect(() => {
    const i = n;
    return window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [n]);
}
function QL(n, i) {
  x.useEffect(() => {
    if (i) {
      const o = n;
      return window.addEventListener("scroll", o, { capture: !0, passive: !0 }), () => {
        window.removeEventListener("scroll", o, !0);
      };
    }
  }, [n, i]);
}
function iA(n) {
  const i = [];
  if (!n || n === document.body) return i;
  const { overflow: o, overflowX: r, overflowY: l } = window.getComputedStyle(n);
  return [o, r, l].some((f) => f === "auto" || f === "scroll") && i.push(n), [...i, ...iA(n.parentElement)];
}
const $L = ["x", "y", "top", "bottom", "left", "right", "width", "height"], JL = (n, i) => $L.every((o) => n[o] === i[o]), aA = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.3
};
function C1({ value: n, place: i }) {
  const o = Math.floor(n / i) % 10, r = Ma(o), l = cz(r, aA);
  return x.useEffect(() => {
    l.set(o);
  }, [l, o]), /* @__PURE__ */ E.jsxs("div", { className: "relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums", children: [
    /* @__PURE__ */ E.jsx("div", { className: "invisible", children: "0" }),
    Array.from({ length: 10 }, (f, d) => /* @__PURE__ */ E.jsx(
      WL,
      {
        mv: l,
        number: d
      },
      d
    ))
  ] });
}
function WL({ mv: n, number: i }) {
  const o = x.useId(), [r, l] = KL(), f = TT(n, (d) => {
    if (!l.height) return 0;
    const h = d % 10, g = (10 + i - h) % 10;
    let p = g * l.height;
    return g > 5 && (p -= 10 * l.height), p;
  });
  return l.height ? /* @__PURE__ */ E.jsx(
    ET.span,
    {
      style: { y: f },
      layoutId: `${o}-${i}`,
      className: "absolute inset-0 flex items-center justify-center",
      transition: aA,
      ref: r,
      children: i
    }
  ) : /* @__PURE__ */ E.jsx(
    "span",
    {
      ref: r,
      className: "invisible absolute",
      children: i
    }
  );
}
function A1({
  value: n,
  padStart: i = !1,
  decimalSeparator: o = "."
}) {
  const r = Math.abs(n), [l, f] = r.toString().split("."), d = parseInt(l, 10), g = (i && d < 10 ? `0${l}` : l).split(""), p = g.map((v, m) => Math.pow(10, g.length - m - 1));
  return /* @__PURE__ */ E.jsxs("div", { className: "flex items-center", children: [
    n < 0 && "-",
    g.map((v, m) => /* @__PURE__ */ E.jsx(
      C1,
      {
        value: d,
        place: p[m]
      },
      `pos-${p[m]}`
    )),
    f && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
      /* @__PURE__ */ E.jsx("span", { children: o }),
      f.split("").map((v, m) => /* @__PURE__ */ E.jsx(
        C1,
        {
          value: parseInt(f, 10),
          place: Math.pow(10, f.length - m - 1)
        },
        `decimal-${m}`
      ))
    ] })
  ] });
}
const Dm = [
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
], tB = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function Mg(n, i, o) {
  return `${n}-${String(i).padStart(2, "0")}-${String(o).padStart(2, "0")}`;
}
function Yu(n) {
  if (typeof n != "string" || !/^\d{4}-\d{2}-\d{2}$/.test(n)) return !1;
  const [i, o, r] = n.split("-").map(Number);
  if (i < 1900 || i > 2200 || o < 1 || o > 12 || r < 1) return !1;
  const l = new Date(Date.UTC(i, o - 1, r));
  return l.getUTCFullYear() === i && l.getUTCMonth() === o - 1 && l.getUTCDate() === r;
}
function eB(n) {
  if (!Yu(n)) throw new Error("The calendar returned an invalid date.");
  const [i, o, r] = n.split("-").map(Number);
  return new Date(Date.UTC(i, o - 1, r));
}
function nB() {
  const n = /* @__PURE__ */ new Date();
  return Mg(n.getFullYear(), n.getMonth() + 1, n.getDate());
}
function Ru(n, i = !1) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...i ? { weekday: "long" } : {},
    timeZone: "UTC"
  }).format(eB(n));
}
function R1(n, i, o) {
  const r = new Date(Date.UTC(n, i - 1 + o, 1));
  return { year: r.getUTCFullYear(), month: r.getUTCMonth() + 1 };
}
function fu(n, i) {
  return `/training-calendar?year=${n}&month=${i}`;
}
function iB(n, i) {
  const r = (new Date(Date.UTC(n, i - 1, 1)).getUTCDay() + 6) % 7, l = new Date(Date.UTC(n, i, 0)).getUTCDate(), f = Math.max(35, Math.ceil((r + l) / 7) * 7);
  return Array.from({ length: f }, (d, h) => {
    const g = new Date(Date.UTC(n, i - 1, h - r + 1));
    return {
      date: Mg(g.getUTCFullYear(), g.getUTCMonth() + 1, g.getUTCDate()),
      day: g.getUTCDate(),
      current: g.getUTCMonth() === i - 1
    };
  });
}
function Or(n, i) {
  const o = document.querySelector(
    ".sidebar-identity[data-cats-role][data-cats-user-id]"
  );
  if (n.dataset.role !== i.role || n.dataset.userId !== i.id || o?.dataset.catsRole !== i.role || o.dataset.catsUserId !== i.id)
    throw new Error("This calendar no longer matches the current account. Sign in again.");
}
function aB(n) {
  const i = n.dataset.role, o = n.dataset.userId || "";
  if (!["EMPLOYEE", "MANAGER", "ADMIN"].includes(i || "") || !/^\d+$/.test(o))
    throw new Error("The calendar could not verify this account.");
  const r = { id: o, role: i };
  Or(n, r);
  const l = document.querySelector("#cats-calendar-approved-data");
  if (!l || ["schemaVersion", "scope", "year", "month", "role", "userId"].some(
    (g) => !Object.hasOwn(n.dataset, g) || n.dataset[g] !== l.dataset[g]
  ) || n.dataset.schemaVersion !== "1" || n.dataset.scope !== "approved-organization")
    throw new Error("The approved training calendar has an unexpected data scope.");
  const f = Number(n.dataset.year), d = Number(n.dataset.month);
  if (!Number.isInteger(f) || f < 1900 || f > 2200 || !Number.isInteger(d) || d < 1 || d > 12)
    throw new Error("The calendar month is invalid.");
  const h = Array.from(
    l.querySelectorAll("[data-calendar-course]"),
    (g, p) => {
      const v = ["title", "provider", "employee", "category", "start", "end"], m = {};
      for (const b of v) {
        if (!Object.hasOwn(g.dataset, b))
          throw new Error("An approved training period is missing required data.");
        m[b] = g.dataset[b] || "";
      }
      if (!Yu(m.start) || !Yu(m.end) || m.end < m.start)
        throw new Error("An approved training period has invalid dates.");
      return { ...m, key: `training-row-${p}` };
    }
  );
  return { identity: r, year: f, month: d, courses: h };
}
function qu(n) {
  if (!n || typeof n != "object" || Array.isArray(n))
    throw new Error("The calendar service returned an unexpected response.");
  return n;
}
function mo(n, i) {
  if (!Object.hasOwn(n, i) || typeof n[i] != "string")
    throw new Error("A calendar response is missing a required field.");
  return n[i];
}
function oB(n, i) {
  const o = qu(n), r = qu(o.csrf);
  if (o.schemaVersion !== 1 || o.ownerId !== i.id || o.role !== i.role)
    throw new Error("Your calendar session has changed or expired. Sign in again.");
  if (r.headerName !== "X-CSRF-TOKEN" || r.parameterName !== "_csrf" || typeof r.token != "string" || !r.token || r.token.length > 2048)
    throw new Error("The calendar session did not provide a valid security token.");
  return n;
}
function _g(n) {
  if (!n.title.trim() || n.title.trim().length > 120)
    return "Enter an event title of 1–120 characters.";
  if (!Yu(n.date)) return "Choose a valid date between 1900 and 2200.";
  if (n.details.trim().length > 2e3) return "Keep event details within 2,000 characters.";
  if (!["blue", "teal", "indigo"].includes(n.color)) return "Choose a supported event color.";
  const i = (o) => o === null || /^([01]\d|2[0-3]):[0-5]\d$/.test(o);
  return !i(n.startTime) || !i(n.endTime) ? "Enter times in the 24-hour format." : n.allDay && (n.startTime || n.endTime) ? "All-day events must not include a start or end time." : !n.allDay && !n.startTime ? "Enter a start time for this event." : n.startTime && n.endTime && n.endTime < n.startTime ? "The end time must be at or after the start time." : null;
}
function oA(n) {
  const i = qu(n), o = mo(i, "id");
  if (!/^\d+$/.test(o) || typeof i.allDay != "boolean")
    throw new Error("The calendar returned an invalid event identity.");
  for (const l of ["startTime", "endTime"])
    if (!Object.hasOwn(i, l) || i[l] !== null && typeof i[l] != "string")
      throw new Error("The calendar returned an invalid event time.");
  const r = {
    id: o,
    title: mo(i, "title"),
    date: mo(i, "date"),
    allDay: i.allDay,
    startTime: i.startTime,
    endTime: i.endTime,
    details: mo(i, "details"),
    color: mo(i, "color"),
    createdAt: mo(i, "createdAt"),
    updatedAt: mo(i, "updatedAt")
  };
  if (_g(r) || !r.createdAt || !r.updatedAt)
    throw new Error("The calendar returned an invalid event.");
  return r;
}
function rB(n, i, o, r) {
  const l = qu(n);
  if (l.schemaVersion !== 1 || l.ownerId !== i.id || l.year !== o || l.month !== r || !Array.isArray(l.events) || l.events.length > 2e4)
    throw new Error("The calendar response does not match this account or month.");
  const f = l.events.map(oA), d = /* @__PURE__ */ new Set();
  for (const h of f) {
    if (d.has(h.id) || !h.date.startsWith(`${o}-${String(r).padStart(2, "0")}-`))
      throw new Error("The calendar returned duplicate events or an event from another month.");
    d.add(h.id);
  }
  return f.sort(
    (h, g) => h.date.localeCompare(g.date) || (h.startTime || "").localeCompare(g.startTime || "") || h.title.localeCompare(g.title)
  );
}
async function du(n, i, o) {
  const r = new AbortController(), l = () => r.abort();
  o?.aborted && l(), o?.addEventListener("abort", l, { once: !0 });
  const f = window.setTimeout(l, 15e3);
  try {
    const d = await fetch(n, {
      ...i,
      credentials: "same-origin",
      cache: "no-store",
      redirect: "error",
      signal: r.signal
    }), h = new URL(n, window.location.origin), g = new URL(d.url);
    if (d.redirected || g.origin !== h.origin || g.pathname !== h.pathname || g.search !== h.search)
      throw new Error("The calendar service returned an unexpected location.");
    const p = await d.text();
    if (p.length > 8 * 1024 * 1024)
      throw new Error("The calendar response is too large to display safely.");
    return { status: d.status, headers: d.headers, body: p };
  } catch (d) {
    throw r.signal.aborted ? new Error("The calendar request timed out or was interrupted. Please retry.") : d;
  } finally {
    window.clearTimeout(f), o?.removeEventListener("abort", l);
  }
}
async function hu(n, i) {
  if (!n.headers.get("content-type")?.includes("application/json"))
    throw new Error("The calendar service did not return JSON. Your session may have expired.");
  const o = n.body;
  if (o.length > 8 * 1024 * 1024)
    throw new Error("The calendar response is too large to display safely.");
  let r;
  try {
    r = JSON.parse(o);
  } catch {
    throw new Error("The calendar service returned unreadable data.");
  }
  if (n.status !== i)
    throw n.status === 401 ? new Error("Your session expired. Sign in again to use your calendar.") : n.status === 403 ? new Error("The security token expired. Retry to refresh your session.") : n.status === 404 ? new Error("This event is no longer available. Reload the calendar.") : n.status === 400 && r && typeof r == "object" && "message" in r && typeof r.message == "string" ? new Error(r.message) : new Error("The calendar service could not complete this request. Please retry.");
  return r;
}
function sB(n, i) {
  const o = async (r) => {
    Or(n, i.identity);
    const l = await du(
      "/api/calendar/session",
      { method: "GET", headers: { Accept: "application/json" } },
      r
    ), f = oB(await hu(l, 200), i.identity);
    return Or(n, i.identity), f;
  };
  return {
    async load(r) {
      await o(r);
      const l = await du(
        `/api/calendar/events?year=${i.year}&month=${i.month}`,
        { method: "GET", headers: { Accept: "application/json" } },
        r
      ), f = rB(await hu(l, 200), i.identity, i.year, i.month);
      return Or(n, i.identity), f;
    },
    async save(r, l) {
      const f = _g(r);
      if (f) throw new Error(f);
      if (l && !/^\d+$/.test(l)) throw new Error("This event has an invalid identity.");
      const d = await o(), h = l ? `/api/calendar/events/${l}` : "/api/calendar/events", g = await du(h, {
        method: l ? "PUT" : "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          [d.csrf.headerName]: d.csrf.token
        },
        body: JSON.stringify({
          title: r.title.trim(),
          date: r.date,
          allDay: r.allDay,
          startTime: r.startTime,
          endTime: r.endTime,
          details: r.details.trim(),
          color: r.color
        })
      }), p = oA(await hu(g, l ? 200 : 201));
      if (l && p.id !== l)
        throw new Error("The saved event has an unexpected identity. Reload the calendar.");
      return Or(n, i.identity), p;
    },
    async remove(r) {
      if (!/^\d+$/.test(r)) throw new Error("This event has an invalid identity.");
      const l = await o(), f = await du(`/api/calendar/events/${r}`, {
        method: "DELETE",
        headers: { Accept: "application/json", [l.csrf.headerName]: l.csrf.token }
      });
      f.status !== 204 && await hu(f, 204), Or(n, i.identity);
    }
  };
}
function lB({ className: n, ...i }) {
  return /* @__PURE__ */ E.jsx(
    Q5,
    {
      "data-slot": "checkbox",
      className: Se(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        n
      ),
      ...i,
      children: /* @__PURE__ */ E.jsx(
        J5,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ E.jsx(NT, { className: "size-3.5" })
        }
      )
    }
  );
}
function D1({ ...n }) {
  return /* @__PURE__ */ E.jsx(
    O5,
    {
      "data-slot": "dialog",
      ...n
    }
  );
}
function cB({ ...n }) {
  return /* @__PURE__ */ E.jsx(
    _5,
    {
      "data-slot": "dialog-trigger",
      ...n
    }
  );
}
function uB({ ...n }) {
  return /* @__PURE__ */ E.jsx(
    z5,
    {
      "data-slot": "dialog-portal",
      container: Og(),
      ...n
    }
  );
}
function fB({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ E.jsx(
    j5,
    {
      "data-slot": "dialog-overlay",
      className: Se(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        n
      ),
      ...i
    }
  );
}
function O1({
  className: n,
  children: i,
  showCloseButton: o = !0,
  ...r
}) {
  return /* @__PURE__ */ E.jsxs(uB, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ E.jsx(fB, {}),
    /* @__PURE__ */ E.jsxs(
      B5,
      {
        "data-slot": "dialog-content",
        className: Se(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          n
        ),
        ...r,
        children: [
          i,
          o && /* @__PURE__ */ E.jsxs(
            aC,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ E.jsx(o3, {}),
                /* @__PURE__ */ E.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function M1({ className: n, ...i }) {
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: Se("flex flex-col gap-2 text-center sm:text-left", n),
      ...i
    }
  );
}
function _1({
  className: n,
  showCloseButton: i = !1,
  children: o,
  ...r
}) {
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: Se("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", n),
      ...r,
      children: [
        o,
        i && /* @__PURE__ */ E.jsx(aC, { asChild: !0, children: /* @__PURE__ */ E.jsx(un, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function N1({ className: n, ...i }) {
  return /* @__PURE__ */ E.jsx(
    k5,
    {
      "data-slot": "dialog-title",
      className: Se("text-lg leading-none font-semibold", n),
      ...i
    }
  );
}
function z1({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ E.jsx(
    H5,
    {
      "data-slot": "dialog-description",
      className: Se("text-sm text-muted-foreground", n),
      ...i
    }
  );
}
function dB({ ...n }) {
  return /* @__PURE__ */ E.jsx(
    YV,
    {
      "data-slot": "select",
      ...n
    }
  );
}
function hB({ ...n }) {
  return /* @__PURE__ */ E.jsx(
    KV,
    {
      "data-slot": "select-value",
      ...n
    }
  );
}
function mB({
  className: n,
  size: i = "default",
  children: o,
  ...r
}) {
  return /* @__PURE__ */ E.jsxs(
    FV,
    {
      "data-slot": "select-trigger",
      "data-size": i,
      className: Se(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        n
      ),
      ...r,
      children: [
        o,
        /* @__PURE__ */ E.jsx(ZV, { asChild: !0, children: /* @__PURE__ */ E.jsx(jT, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function pB({
  className: n,
  children: i,
  position: o = "item-aligned",
  align: r = "center",
  ...l
}) {
  return /* @__PURE__ */ E.jsx(WV, { container: Og(), children: /* @__PURE__ */ E.jsxs(
    tL,
    {
      "data-slot": "select-content",
      className: Se(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        n
      ),
      position: o,
      align: r,
      ...l,
      children: [
        /* @__PURE__ */ E.jsx(gB, {}),
        /* @__PURE__ */ E.jsx(
          rL,
          {
            className: Se(
              "p-1",
              o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: i
          }
        ),
        /* @__PURE__ */ E.jsx(vB, {})
      ]
    }
  ) });
}
function Om({
  className: n,
  children: i,
  ...o
}) {
  return /* @__PURE__ */ E.jsxs(
    cL,
    {
      "data-slot": "select-item",
      className: Se(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        n
      ),
      ...o,
      children: [
        /* @__PURE__ */ E.jsx(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ E.jsx(dL, { children: /* @__PURE__ */ E.jsx(NT, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ E.jsx(uL, { children: i })
      ]
    }
  );
}
function gB({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ E.jsx(
    hL,
    {
      "data-slot": "select-scroll-up-button",
      className: Se("flex cursor-default items-center justify-center py-1", n),
      ...i,
      children: /* @__PURE__ */ E.jsx(Jz, { className: "size-4" })
    }
  );
}
function vB({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ E.jsx(
    mL,
    {
      "data-slot": "select-scroll-down-button",
      className: Se("flex cursor-default items-center justify-center py-1", n),
      ...i,
      children: /* @__PURE__ */ E.jsx(jT, { className: "size-4" })
    }
  );
}
const j1 = (n) => ({
  title: "",
  date: n,
  allDay: !0,
  startTime: null,
  endTime: null,
  details: "",
  color: "blue"
});
function yB({
  open: n,
  date: i,
  event: o,
  trigger: r,
  onClose: l,
  onSave: f,
  onDelete: d
}) {
  const h = x.useId(), [g, p] = x.useState(j1(i)), [v, m] = x.useState(!1), [b, S] = x.useState(""), [w, A] = x.useState(!1), C = x.useRef(null);
  x.useEffect(() => {
    n && (p(
      o ? {
        title: o.title,
        date: o.date,
        allDay: o.allDay,
        startTime: o.startTime,
        endTime: o.endTime,
        details: o.details,
        color: o.color
      } : j1(i)
    ), S(""), A(!1));
  }, [n, i, o]);
  async function R(O) {
    if (O.preventDefault(), v) return;
    const P = _g(g);
    if (P) {
      S(P);
      return;
    }
    m(!0), S("");
    try {
      await f(g, o?.id), l();
    } catch (k) {
      S(
        k instanceof Error ? k.message : "This event could not be saved. Please retry."
      );
    } finally {
      m(!1);
    }
  }
  async function z() {
    if (!(!o || v)) {
      m(!0), S("");
      try {
        await d(o.id), A(!1), l();
      } catch (O) {
        A(!1), S(
          O instanceof Error ? O.message : "This event could not be deleted. Please retry."
        );
      } finally {
        m(!1);
      }
    }
  }
  const D = (O) => `${h}-${O}`;
  return /* @__PURE__ */ E.jsx(
    D1,
    {
      open: n,
      onOpenChange: (O) => {
        !O && !v && l();
      },
      children: /* @__PURE__ */ E.jsxs(
        O1,
        {
          className: "cal-editor",
          onEscapeKeyDown: (O) => {
            v && O.preventDefault();
          },
          onCloseAutoFocus: (O) => {
            O.preventDefault(), r?.focus();
          },
          children: [
            /* @__PURE__ */ E.jsxs(M1, { children: [
              /* @__PURE__ */ E.jsx(N1, { children: o ? "Edit personal event" : "Add personal event" }),
              /* @__PURE__ */ E.jsx(z1, { children: "Only your account can access these events. Approved training is managed separately." })
            ] }),
            /* @__PURE__ */ E.jsxs(
              "form",
              {
                className: "cal-event-form",
                onSubmit: R,
                children: [
                  /* @__PURE__ */ E.jsxs(
                    "fieldset",
                    {
                      disabled: v,
                      className: "cal-form-fields",
                      children: [
                        /* @__PURE__ */ E.jsxs("div", { className: "cal-field", children: [
                          /* @__PURE__ */ E.jsx("label", { htmlFor: D("title"), children: "Title" }),
                          /* @__PURE__ */ E.jsx(
                            Js,
                            {
                              id: D("title"),
                              value: g.title,
                              maxLength: 120,
                              required: !0,
                              autoComplete: "off",
                              onChange: (O) => p({ ...g, title: O.target.value })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ E.jsxs("div", { className: "cal-field", children: [
                          /* @__PURE__ */ E.jsx("label", { htmlFor: D("date"), children: "Date" }),
                          /* @__PURE__ */ E.jsx(
                            Js,
                            {
                              id: D("date"),
                              type: "date",
                              min: "1900-01-01",
                              max: "2200-12-31",
                              value: g.date,
                              required: !0,
                              onChange: (O) => p({ ...g, date: O.target.value })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ E.jsxs("div", { className: "cal-all-day", children: [
                          /* @__PURE__ */ E.jsx(
                            lB,
                            {
                              id: D("allDay"),
                              checked: g.allDay,
                              onCheckedChange: (O) => p({
                                ...g,
                                allDay: O === !0,
                                startTime: O === !0 ? null : g.startTime || "09:00",
                                endTime: O === !0 ? null : g.endTime
                              })
                            }
                          ),
                          /* @__PURE__ */ E.jsx("label", { htmlFor: D("allDay"), children: "All day" })
                        ] }),
                        !g.allDay && /* @__PURE__ */ E.jsxs("div", { className: "cal-time-fields", children: [
                          /* @__PURE__ */ E.jsxs("div", { className: "cal-field", children: [
                            /* @__PURE__ */ E.jsx("label", { htmlFor: D("startTime"), children: "Start time" }),
                            /* @__PURE__ */ E.jsx(
                              Js,
                              {
                                id: D("startTime"),
                                type: "time",
                                value: g.startTime || "",
                                required: !0,
                                onChange: (O) => p({ ...g, startTime: O.target.value || null })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ E.jsxs("div", { className: "cal-field", children: [
                            /* @__PURE__ */ E.jsxs("label", { htmlFor: D("endTime"), children: [
                              "End time ",
                              /* @__PURE__ */ E.jsx("span", { children: "(optional)" })
                            ] }),
                            /* @__PURE__ */ E.jsx(
                              Js,
                              {
                                id: D("endTime"),
                                type: "time",
                                value: g.endTime || "",
                                onChange: (O) => p({ ...g, endTime: O.target.value || null })
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ E.jsxs("div", { className: "cal-field", children: [
                          /* @__PURE__ */ E.jsxs("label", { htmlFor: D("details"), children: [
                            "Details ",
                            /* @__PURE__ */ E.jsx("span", { children: "(optional)" })
                          ] }),
                          /* @__PURE__ */ E.jsx(
                            "textarea",
                            {
                              id: D("details"),
                              className: "cal-textarea",
                              value: g.details,
                              rows: 3,
                              maxLength: 2e3,
                              onChange: (O) => p({ ...g, details: O.target.value })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ E.jsxs("div", { className: "cal-field", children: [
                          /* @__PURE__ */ E.jsx("label", { htmlFor: D("color"), children: "Color" }),
                          /* @__PURE__ */ E.jsxs(
                            dB,
                            {
                              value: g.color,
                              onValueChange: (O) => p({ ...g, color: O }),
                              children: [
                                /* @__PURE__ */ E.jsx(mB, { id: D("color"), children: /* @__PURE__ */ E.jsx(hB, {}) }),
                                /* @__PURE__ */ E.jsxs(pB, { children: [
                                  /* @__PURE__ */ E.jsx(Om, { value: "blue", children: "Blue" }),
                                  /* @__PURE__ */ E.jsx(Om, { value: "teal", children: "Teal" }),
                                  /* @__PURE__ */ E.jsx(Om, { value: "indigo", children: "Indigo" })
                                ] })
                              ]
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  b && /* @__PURE__ */ E.jsx(
                    "p",
                    {
                      className: "cal-form-error",
                      role: "alert",
                      children: b
                    }
                  ),
                  /* @__PURE__ */ E.jsxs(_1, { className: "cal-editor-actions", children: [
                    o && /* @__PURE__ */ E.jsxs(
                      D1,
                      {
                        open: w,
                        onOpenChange: (O) => {
                          v || A(O);
                        },
                        children: [
                          /* @__PURE__ */ E.jsx(cB, { asChild: !0, children: /* @__PURE__ */ E.jsxs(
                            un,
                            {
                              ref: C,
                              type: "button",
                              variant: "ghost",
                              disabled: v,
                              className: "cal-delete-button",
                              children: [
                                /* @__PURE__ */ E.jsx(
                                  a3,
                                  {
                                    size: 16,
                                    "aria-hidden": "true"
                                  }
                                ),
                                "Delete event"
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ E.jsxs(
                            O1,
                            {
                              className: "cal-confirm",
                              onEscapeKeyDown: (O) => {
                                v && O.preventDefault();
                              },
                              children: [
                                /* @__PURE__ */ E.jsxs(M1, { children: [
                                  /* @__PURE__ */ E.jsx(N1, { children: "Delete this event?" }),
                                  /* @__PURE__ */ E.jsxs(z1, { children: [
                                    "“",
                                    o.title,
                                    "” will be removed from your personal calendar."
                                  ] })
                                ] }),
                                /* @__PURE__ */ E.jsxs(_1, { children: [
                                  /* @__PURE__ */ E.jsx(
                                    un,
                                    {
                                      type: "button",
                                      variant: "outline",
                                      disabled: v,
                                      onClick: () => A(!1),
                                      children: "Keep event"
                                    }
                                  ),
                                  /* @__PURE__ */ E.jsx(
                                    un,
                                    {
                                      type: "button",
                                      variant: "destructive",
                                      disabled: v,
                                      onClick: z,
                                      children: v ? "Deleting…" : "Delete event"
                                    }
                                  )
                                ] })
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ E.jsx(
                      un,
                      {
                        type: "button",
                        variant: "outline",
                        disabled: v,
                        onClick: l,
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ E.jsx(
                      un,
                      {
                        type: "submit",
                        disabled: v,
                        children: v ? "Saving…" : "Save event"
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function bB({ year: n, month: i, selected: o, today: r, courses: l, events: f, onSelect: d }) {
  const h = iB(n, i), g = Array.from(
    { length: h.length / 7 },
    (v, m) => h.slice(m * 7, m * 7 + 7)
  );
  function p(v, m) {
    const b = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -7,
      ArrowDown: 7,
      Home: -(m % 7),
      End: 6 - m % 7
    }[v.key];
    if (b === void 0) return;
    v.preventDefault();
    const S = h[m + b];
    S?.current && (d(S.date), document.getElementById(`calendar-day-${S.date}`)?.focus());
  }
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: "cal-month-grid",
      role: "grid",
      "aria-label": "Month dates. Use arrow keys to select a day.",
      children: [
        /* @__PURE__ */ E.jsx(
          "div",
          {
            className: "cal-weekday-row",
            role: "row",
            children: tB.map((v) => /* @__PURE__ */ E.jsx(
              "span",
              {
                role: "columnheader",
                children: v
              },
              v
            ))
          }
        ),
        g.map((v, m) => /* @__PURE__ */ E.jsx(
          "div",
          {
            className: "cal-week-row",
            role: "row",
            children: v.map((b, S) => {
              const w = b.current ? l.filter((R) => R.start <= b.date && R.end >= b.date) : [], A = b.current ? f.filter((R) => R.date === b.date) : [], C = [
                ...w.map((R) => ({
                  key: R.key,
                  title: R.title,
                  color: "training",
                  training: !0
                })),
                ...A.map((R) => ({
                  key: `event-${R.id}`,
                  title: R.title,
                  color: R.color,
                  training: !1
                }))
              ];
              return /* @__PURE__ */ E.jsx(
                "div",
                {
                  role: "gridcell",
                  className: "cal-grid-cell",
                  "aria-selected": b.current && o === b.date,
                  children: b.current ? /* @__PURE__ */ E.jsxs(
                    "button",
                    {
                      id: `calendar-day-${b.date}`,
                      type: "button",
                      className: `cal-day${o === b.date ? " is-selected" : ""}${r === b.date ? " is-today" : ""}`,
                      tabIndex: o === b.date ? 0 : -1,
                      "aria-current": r === b.date ? "date" : void 0,
                      "aria-label": `${Ru(b.date, !0)}. ${w.length} training periods, ${A.length} personal events.`,
                      onClick: () => d(b.date),
                      onKeyDown: (R) => p(R, m * 7 + S),
                      children: [
                        /* @__PURE__ */ E.jsx("span", { className: "cal-day-number", children: b.day }),
                        /* @__PURE__ */ E.jsxs(
                          "span",
                          {
                            className: "cal-day-chips",
                            "aria-hidden": "true",
                            children: [
                              C.slice(0, 2).map((R) => /* @__PURE__ */ E.jsxs(
                                "span",
                                {
                                  className: `cal-day-chip cal-color-${R.color}`,
                                  children: [
                                    R.training ? /* @__PURE__ */ E.jsx(DT, { size: 11 }) : /* @__PURE__ */ E.jsx(
                                      Wz,
                                      {
                                        size: 8,
                                        fill: "currentColor"
                                      }
                                    ),
                                    /* @__PURE__ */ E.jsx("span", { children: R.title })
                                  ]
                                },
                                R.key
                              )),
                              C.length > 2 && /* @__PURE__ */ E.jsxs("span", { className: "cal-more", children: [
                                "+",
                                C.length - 2,
                                " more"
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ E.jsx(
                          "span",
                          {
                            className: "cal-mobile-count",
                            "aria-hidden": "true",
                            children: C.length > 0 && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
                              /* @__PURE__ */ E.jsx("span", { className: "cal-date-dot" }),
                              C.length
                            ] })
                          }
                        )
                      ]
                    }
                  ) : /* @__PURE__ */ E.jsx(
                    "span",
                    {
                      className: "cal-outside-day",
                      "aria-hidden": "true",
                      children: b.day
                    }
                  )
                },
                b.date
              );
            })
          },
          v[0].date
        ))
      ]
    }
  );
}
function xB({
  date: n,
  courses: i,
  events: o,
  onEdit: r,
  canEdit: l
}) {
  const f = i.filter((h) => h.start <= n && h.end >= n), d = o.filter((h) => h.date === n);
  return /* @__PURE__ */ E.jsxs(
    "section",
    {
      className: "cal-agenda",
      "aria-labelledby": "calendar-agenda-title",
      children: [
        /* @__PURE__ */ E.jsxs("header", { children: [
          /* @__PURE__ */ E.jsx("p", { className: "cal-eyebrow", children: "Selected day" }),
          /* @__PURE__ */ E.jsx("h3", { id: "calendar-agenda-title", children: Ru(n, !0) })
        ] }),
        /* @__PURE__ */ E.jsx(
          $_,
          {
            initial: !1,
            mode: "wait",
            children: /* @__PURE__ */ E.jsxs(
              ET.div,
              {
                initial: { opacity: 0, y: 4 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0 },
                transition: { duration: 0.14 },
                className: "cal-agenda-items",
                children: [
                  f.length === 0 && d.length === 0 && /* @__PURE__ */ E.jsxs("div", { className: "cal-agenda-empty", children: [
                    /* @__PURE__ */ E.jsx(
                      BS,
                      {
                        size: 26,
                        "aria-hidden": "true"
                      }
                    ),
                    /* @__PURE__ */ E.jsx("p", { children: "No events for this day." }),
                    /* @__PURE__ */ E.jsx("span", { children: "Choose another date or add a personal event." })
                  ] }),
                  f.map((h) => /* @__PURE__ */ E.jsxs(
                    "article",
                    {
                      className: "cal-agenda-course",
                      children: [
                        /* @__PURE__ */ E.jsxs("div", { className: "cal-item-type", children: [
                          /* @__PURE__ */ E.jsx(
                            DT,
                            {
                              size: 15,
                              "aria-hidden": "true"
                            }
                          ),
                          "Approved training"
                        ] }),
                        /* @__PURE__ */ E.jsx("h4", { children: h.title }),
                        /* @__PURE__ */ E.jsx("p", { children: h.provider }),
                        /* @__PURE__ */ E.jsxs("dl", { children: [
                          /* @__PURE__ */ E.jsxs("div", { children: [
                            /* @__PURE__ */ E.jsx("dt", { children: "Participant" }),
                            /* @__PURE__ */ E.jsx("dd", { children: h.employee })
                          ] }),
                          /* @__PURE__ */ E.jsxs("div", { children: [
                            /* @__PURE__ */ E.jsx("dt", { children: "Category" }),
                            /* @__PURE__ */ E.jsx("dd", { children: h.category || "Unspecified" })
                          ] }),
                          /* @__PURE__ */ E.jsxs("div", { children: [
                            /* @__PURE__ */ E.jsx("dt", { children: "Course period" }),
                            /* @__PURE__ */ E.jsxs("dd", { children: [
                              Ru(h.start),
                              " – ",
                              Ru(h.end)
                            ] })
                          ] })
                        ] })
                      ]
                    },
                    h.key
                  )),
                  d.map((h) => /* @__PURE__ */ E.jsxs(
                    "button",
                    {
                      type: "button",
                      className: `cal-agenda-event cal-color-${h.color}`,
                      disabled: !l,
                      onClick: (g) => r(h, g.currentTarget),
                      "aria-label": `Edit personal event: ${h.title}`,
                      children: [
                        /* @__PURE__ */ E.jsxs("span", { className: "cal-item-type", children: [
                          /* @__PURE__ */ E.jsx(
                            BS,
                            {
                              size: 15,
                              "aria-hidden": "true"
                            }
                          ),
                          "My event",
                          /* @__PURE__ */ E.jsx(
                            e3,
                            {
                              className: "cal-edit-icon",
                              size: 14,
                              "aria-hidden": "true"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ E.jsx("strong", { children: h.title }),
                        /* @__PURE__ */ E.jsx("span", { className: "cal-event-time", children: h.allDay ? "All day" : `${h.startTime}${h.endTime ? ` – ${h.endTime}` : ""}` }),
                        h.details && /* @__PURE__ */ E.jsx("span", { className: "cal-event-details", children: h.details })
                      ]
                    },
                    h.id
                  ))
                ]
              },
              n
            )
          }
        )
      ]
    }
  );
}
const V1 = new Intl.NumberFormat("en-US");
function Ng(n) {
  document.querySelectorAll("[data-calendar-fallback]").forEach((i) => {
    i.hidden = !n;
  });
}
function SB({ root: n, page: i }) {
  const o = nB(), [r, l] = x.useState(
    o.startsWith(`${i.year}-${String(i.month).padStart(2, "0")}-`) ? o : Mg(i.year, i.month, 1)
  ), [f, d] = x.useState("all"), [h, g] = x.useState(""), [p, v] = x.useState([]), [m, b] = x.useState(!0), [S, w] = x.useState(!1), [A, C] = x.useState(""), [R, z] = x.useState(!1), [D, O] = x.useState(null), P = x.useRef(null), k = x.useRef(0), N = x.useRef(null), M = x.useMemo(() => sB(n, i), [n, i]), F = !!uz(), J = x.useCallback(async () => {
    const yt = ++k.current;
    N.current?.abort();
    const St = new AbortController();
    N.current = St, b(!0), C("");
    try {
      const Ot = await M.load(St.signal);
      if (yt !== k.current || St.signal.aborted) return;
      v(Ot), w(!0);
    } catch (Ot) {
      if (yt !== k.current || St.signal.aborted) return;
      C(
        Ot instanceof Error ? Ot.message : "Your calendar could not be loaded. Please retry."
      );
    } finally {
      yt === k.current && !St.signal.aborted && b(!1);
    }
  }, [M]);
  x.useEffect(() => (J(), () => {
    k.current += 1, N.current?.abort();
  }), [J]), x.useEffect(() => {
    n.dataset.workspaceState = m ? "loading" : A ? "error" : "ready", Ng(!S);
  }, [n, m, A, S]);
  const ut = h.trim().toLocaleLowerCase("en"), et = i.courses.filter(
    (yt) => f !== "personal" && [yt.title, yt.provider, yt.employee, yt.category].join(" ").toLocaleLowerCase("en").includes(ut)
  ), rt = p.filter(
    (yt) => f !== "training" && `${yt.title} ${yt.details}`.toLocaleLowerCase("en").includes(ut)
  ), ft = R1(i.year, i.month, -1), dt = R1(i.year, i.month, 1), Y = /* @__PURE__ */ new Date(), X = S && !m && !A;
  function $(yt, St) {
    P.current = St, O(yt), z(!0);
  }
  async function at(yt, St) {
    const Ot = await M.save(yt, St);
    NS.success(St ? "Personal event updated." : "Personal event saved.");
    const [j, q] = Ot.date.split("-").map(Number);
    if (j !== i.year || q !== i.month) {
      window.location.assign(fu(j, q));
      return;
    }
    l(Ot.date), await J();
  }
  async function Q(yt) {
    await M.remove(yt), NS.success("Personal event deleted."), await J();
  }
  return /* @__PURE__ */ E.jsx(tN, { reducedMotion: F ? "always" : "user", children: /* @__PURE__ */ E.jsxs(YL, { children: [
    /* @__PURE__ */ E.jsxs("div", { className: "calendar-workspace", children: [
      /* @__PURE__ */ E.jsxs("header", { className: "cal-header", children: [
        /* @__PURE__ */ E.jsxs("div", { children: [
          /* @__PURE__ */ E.jsx("p", { className: "cal-eyebrow", children: "Your calendar" }),
          /* @__PURE__ */ E.jsxs("h2", { children: [
            Dm[i.month - 1],
            " ",
            i.year
          ] })
        ] }),
        /* @__PURE__ */ E.jsxs("div", { className: "cal-header-actions", children: [
          /* @__PURE__ */ E.jsxs(
            "nav",
            {
              className: "cal-month-nav",
              "aria-label": "Choose calendar month",
              children: [
                ft.year >= 1900 ? /* @__PURE__ */ E.jsx(
                  un,
                  {
                    variant: "outline",
                    size: "icon",
                    asChild: !0,
                    children: /* @__PURE__ */ E.jsx(
                      "a",
                      {
                        href: fu(ft.year, ft.month),
                        "aria-label": `Previous month, ${Dm[ft.month - 1]} ${ft.year}`,
                        children: /* @__PURE__ */ E.jsx(VS, { size: 17 })
                      }
                    )
                  }
                ) : /* @__PURE__ */ E.jsx(
                  un,
                  {
                    variant: "outline",
                    size: "icon",
                    disabled: !0,
                    "aria-label": "Previous month",
                    children: /* @__PURE__ */ E.jsx(VS, { size: 17 })
                  }
                ),
                /* @__PURE__ */ E.jsx(
                  un,
                  {
                    variant: "outline",
                    asChild: !0,
                    children: /* @__PURE__ */ E.jsx("a", { href: fu(Y.getFullYear(), Y.getMonth() + 1), children: "Today" })
                  }
                ),
                dt.year <= 2200 ? /* @__PURE__ */ E.jsx(
                  un,
                  {
                    variant: "outline",
                    size: "icon",
                    asChild: !0,
                    children: /* @__PURE__ */ E.jsx(
                      "a",
                      {
                        href: fu(dt.year, dt.month),
                        "aria-label": `Next month, ${Dm[dt.month - 1]} ${dt.year}`,
                        children: /* @__PURE__ */ E.jsx(LS, { size: 17 })
                      }
                    )
                  }
                ) : /* @__PURE__ */ E.jsx(
                  un,
                  {
                    variant: "outline",
                    size: "icon",
                    disabled: !0,
                    "aria-label": "Next month",
                    children: /* @__PURE__ */ E.jsx(LS, { size: 17 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ E.jsxs(
            un,
            {
              disabled: !X,
              onClick: (yt) => $(null, yt.currentTarget),
              children: [
                /* @__PURE__ */ E.jsx(
                  $z,
                  {
                    size: 17,
                    "aria-hidden": "true"
                  }
                ),
                "Add event"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { className: "cal-controls", children: [
        /* @__PURE__ */ E.jsx(
          HL,
          {
            value: f,
            onValueChange: (yt) => d(yt),
            children: /* @__PURE__ */ E.jsxs(GL, { "aria-label": "Calendar event type", children: [
              /* @__PURE__ */ E.jsx(Rm, { value: "all", children: "All" }),
              /* @__PURE__ */ E.jsx(Rm, { value: "training", children: "Training" }),
              /* @__PURE__ */ E.jsx(Rm, { value: "personal", children: "My events" })
            ] })
          }
        ),
        /* @__PURE__ */ E.jsxs("div", { className: "cal-search", children: [
          /* @__PURE__ */ E.jsx(
            i3,
            {
              size: 16,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ E.jsx(
            Js,
            {
              type: "search",
              "aria-label": "Search calendar events",
              placeholder: "Search this month",
              value: h,
              onChange: (yt) => g(yt.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ E.jsxs(qL, { children: [
          /* @__PURE__ */ E.jsx(FL, { asChild: !0, children: /* @__PURE__ */ E.jsx(
            un,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              "aria-label": "About calendar visibility",
              children: /* @__PURE__ */ E.jsx(t3, { size: 17 })
            }
          ) }),
          /* @__PURE__ */ E.jsx(XL, { className: "cal-scope-note", children: "Approved training is visible across the organization. Personal events are visible only to you." })
        ] })
      ] }),
      A && /* @__PURE__ */ E.jsxs(
        "div",
        {
          className: "cal-load-error",
          role: "alert",
          children: [
            /* @__PURE__ */ E.jsxs("div", { children: [
              /* @__PURE__ */ E.jsx("strong", { children: "Calendar could not be refreshed." }),
              /* @__PURE__ */ E.jsx("p", { children: A }),
              S && /* @__PURE__ */ E.jsx("p", { children: "The last loaded events remain below." })
            ] }),
            /* @__PURE__ */ E.jsxs(
              un,
              {
                variant: "outline",
                onClick: () => {
                  J();
                },
                children: [
                  /* @__PURE__ */ E.jsx(
                    n3,
                    {
                      size: 15,
                      "aria-hidden": "true"
                    }
                  ),
                  "Retry"
                ]
              }
            ),
            /* @__PURE__ */ E.jsx("a", { href: "/login", children: "Sign in" })
          ]
        }
      ),
      m && !S ? /* @__PURE__ */ E.jsxs(
        "div",
        {
          className: "cal-loading",
          "aria-label": "Loading your personal calendar",
          "aria-busy": "true",
          children: [
            /* @__PURE__ */ E.jsx(T1, { className: "cal-loading-title" }),
            /* @__PURE__ */ E.jsx(T1, { className: "cal-loading-grid" })
          ]
        }
      ) : S && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        /* @__PURE__ */ E.jsxs(
          "div",
          {
            className: "cal-summary",
            "aria-live": "polite",
            children: [
              /* @__PURE__ */ E.jsx(
                "div",
                {
                  className: "cal-visual-count",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ E.jsx(A1, { value: et.length })
                }
              ),
              /* @__PURE__ */ E.jsx("span", { className: "sr-only", children: V1.format(et.length) }),
              " approved training periods",
              /* @__PURE__ */ E.jsx("span", { className: "cal-summary-divider", children: "·" }),
              /* @__PURE__ */ E.jsx(
                "div",
                {
                  className: "cal-visual-count",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ E.jsx(A1, { value: rt.length })
                }
              ),
              /* @__PURE__ */ E.jsx("span", { className: "sr-only", children: V1.format(rt.length) }),
              " personal events",
              m && /* @__PURE__ */ E.jsx("span", { className: "cal-refreshing", children: "Refreshing…" })
            ]
          }
        ),
        /* @__PURE__ */ E.jsxs(
          "div",
          {
            className: `cal-layout${m ? " is-refreshing" : ""}`,
            "aria-busy": m,
            children: [
              /* @__PURE__ */ E.jsx(
                bB,
                {
                  year: i.year,
                  month: i.month,
                  selected: r,
                  today: o,
                  courses: et,
                  events: rt,
                  onSelect: l
                }
              ),
              /* @__PURE__ */ E.jsx(
                xB,
                {
                  date: r,
                  courses: et,
                  events: rt,
                  canEdit: X,
                  onEdit: (yt, St) => {
                    X && $(yt, St);
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ E.jsx("p", { className: "cal-footer-note", children: "Training markers show approved course periods. Personal events do not change course applications or approvals." })
      ] }),
      /* @__PURE__ */ E.jsx(
        yB,
        {
          open: R,
          date: r,
          event: D,
          trigger: P.current,
          onClose: () => z(!1),
          onSave: at,
          onDelete: Q
        }
      )
    ] }),
    /* @__PURE__ */ E.jsx(
      kz,
      {
        theme: "light",
        position: "bottom-right",
        closeButton: !0,
        richColors: !0
      }
    )
  ] }) });
}
class wB extends x.Component {
  state = { failed: !1 };
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  componentDidCatch() {
    Ng(!0);
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ E.jsx(
      "p",
      {
        className: "cal-load-error",
        role: "alert",
        children: "The calendar workspace could not be displayed. Use the original month view below."
      }
    ) : this.props.children;
  }
}
const po = document.querySelector("#cats-calendar-month[data-calendar-workspace]");
if (po) {
  po.classList.add("cats-course-workspace");
  try {
    const n = aB(po);
    e2.createRoot(po).render(
      /* @__PURE__ */ E.jsx(wB, { children: /* @__PURE__ */ E.jsx(
        SB,
        {
          root: po,
          page: n
        }
      ) })
    );
  } catch (n) {
    Ng(!0), po.dataset.workspaceState = "error";
    const i = document.createElement("p");
    i.className = "cal-load-error", i.setAttribute("role", "alert"), i.textContent = n instanceof Error ? n.message : "The calendar workspace could not be opened.", po.append(i);
  }
}
//# sourceMappingURL=calendar-workspace.js.map
