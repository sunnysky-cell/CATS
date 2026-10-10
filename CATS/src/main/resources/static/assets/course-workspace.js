var px = (n) => {
  throw TypeError(n);
};
var gx = (n, i, o) => i.has(n) || px("Cannot " + o);
var Xt = (n, i, o) => (gx(n, i, "read from private field"), o ? o.call(n) : i.get(n)), vx = (n, i, o) => i.has(n) ? px("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(n) : i.set(n, o), Wh = (n, i, o, s) => (gx(n, i, "write to private field"), s ? s.call(n, o) : i.set(n, o), o);
function L2(n, i) {
  for (var o = 0; o < i.length; o++) {
    const s = i[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const l in s)
        if (l !== "default" && !(l in n)) {
          const u = Object.getOwnPropertyDescriptor(s, l);
          u && Object.defineProperty(n, l, u.get ? u : {
            enumerable: !0,
            get: () => s[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function q1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var em = { exports: {} }, Wr = {};
var yx;
function V2() {
  if (yx) return Wr;
  yx = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(s, l, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      u = {};
      for (var h in l)
        h !== "key" && (u[h] = l[h]);
    } else u = l;
    return l = u.ref, {
      $$typeof: n,
      type: s,
      key: d,
      ref: l !== void 0 ? l : null,
      props: u
    };
  }
  return Wr.Fragment = i, Wr.jsx = o, Wr.jsxs = o, Wr;
}
var bx;
function P2() {
  return bx || (bx = 1, em.exports = V2()), em.exports;
}
var y = P2(), tm = { exports: {} }, Te = {};
var xx;
function k2() {
  if (xx) return Te;
  xx = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), l = /* @__PURE__ */ Symbol.for("react.profiler"), u = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.activity"), x = /* @__PURE__ */ Symbol.for("react.view_transition"), T = Symbol.iterator;
  function w(z) {
    return z === null || typeof z != "object" ? null : (z = T && z[T] || z["@@iterator"], typeof z == "function" ? z : null);
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
  function _(z, Y, W) {
    this.props = z, this.context = Y, this.refs = R, this.updater = W || A;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(z, Y) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, Y, "setState");
  }, _.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function D() {
  }
  D.prototype = _.prototype;
  function M(z, Y, W) {
    this.props = z, this.context = Y, this.refs = R, this.updater = W || A;
  }
  var B = M.prototype = new D();
  B.constructor = M, C(B, _.prototype), B.isPureReactComponent = !0;
  var U = Array.isArray;
  function O() {
  }
  var N = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty;
  function Q(z, Y, W) {
    var le = W.ref;
    return {
      $$typeof: n,
      type: z,
      key: Y,
      ref: le !== void 0 ? le : null,
      props: W
    };
  }
  function ue(z, Y) {
    return Q(z.type, Y, z.props);
  }
  function ie(z) {
    return typeof z == "object" && z !== null && z.$$typeof === n;
  }
  function te(z) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(W) {
      return Y[W];
    });
  }
  var fe = /\/+/g;
  function he(z, Y) {
    return typeof z == "object" && z !== null && z.key != null ? te("" + z.key) : Y.toString(36);
  }
  function G(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(O, O) : (z.status = "pending", z.then(
          function(Y) {
            z.status === "pending" && (z.status = "fulfilled", z.value = Y);
          },
          function(Y) {
            z.status === "pending" && (z.status = "rejected", z.reason = Y);
          }
        )), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function X(z, Y, W, le, ae) {
    var ee = typeof z;
    (ee === "undefined" || ee === "boolean") && (z = null);
    var ye = !1;
    if (z === null) ye = !0;
    else
      switch (ee) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case n:
            case i:
              ye = !0;
              break;
            case v:
              return ye = z._init, X(
                ye(z._payload),
                Y,
                W,
                le,
                ae
              );
          }
      }
    if (ye)
      return ae = ae(z), ye = le === "" ? "." + he(z, 0) : le, U(ae) ? (W = "", ye != null && (W = ye.replace(fe, "$&/") + "/"), X(ae, Y, W, "", function(Ae) {
        return Ae;
      })) : ae != null && (ie(ae) && (ae = ue(
        ae,
        W + (ae.key == null || z && z.key === ae.key ? "" : ("" + ae.key).replace(
          fe,
          "$&/"
        ) + "/") + ye
      )), Y.push(ae)), 1;
    ye = 0;
    var ne = le === "" ? "." : le + ":";
    if (U(z))
      for (var re = 0; re < z.length; re++)
        le = z[re], ee = ne + he(le, re), ye += X(
          le,
          Y,
          W,
          ee,
          ae
        );
    else if (re = w(z), typeof re == "function")
      for (z = re.call(z), re = 0; !(le = z.next()).done; )
        le = le.value, ee = ne + he(le, re++), ye += X(
          le,
          Y,
          W,
          ee,
          ae
        );
    else if (ee === "object") {
      if (typeof z.then == "function")
        return X(
          G(z),
          Y,
          W,
          le,
          ae
        );
      throw Y = String(z), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ye;
  }
  function J(z, Y, W) {
    if (z == null) return z;
    var le = [], ae = 0;
    return X(z, le, "", "", function(ee) {
      return Y.call(W, ee, ae++);
    }), le;
  }
  function se(z) {
    if (z._status === -1) {
      var Y = z._result, W = Y();
      W.then(
        function(le) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = le, W.status === void 0 && (W.status = "fulfilled", W.value = le));
        },
        function(le) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = le, W.status === void 0 && (W.status = "rejected", W.reason = le));
        }
      ), z._status === -1 && (z._status = 0, z._result = W);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var $ = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  };
  function Me(z) {
    var Y = N.T, W = {};
    W.types = Y !== null ? Y.types : null, N.T = W;
    try {
      var le = z(), ae = N.S;
      ae !== null && ae(W, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(O, $);
    } catch (ee) {
      $(ee);
    } finally {
      Y !== null && W.types !== null && (Y.types = W.types), N.T = Y;
    }
  }
  function Re(z) {
    var Y = N.T;
    if (Y !== null) {
      var W = Y.types;
      W === null ? Y.types = [z] : W.indexOf(z) === -1 && W.push(z);
    } else Me(Re.bind(null, z));
  }
  var He = {
    map: J,
    forEach: function(z, Y, W) {
      J(
        z,
        function() {
          Y.apply(this, arguments);
        },
        W
      );
    },
    count: function(z) {
      var Y = 0;
      return J(z, function() {
        Y++;
      }), Y;
    },
    toArray: function(z) {
      return J(z, function(Y) {
        return Y;
      }) || [];
    },
    only: function(z) {
      if (!ie(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return Te.Activity = m, Te.Children = He, Te.Component = _, Te.Fragment = o, Te.Profiler = l, Te.PureComponent = M, Te.StrictMode = s, Te.Suspense = g, Te.ViewTransition = x, Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, Te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return N.H.useMemoCache(z);
    }
  }, Te.addTransitionType = Re, Te.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, Te.cacheSignal = function() {
    return null;
  }, Te.cloneElement = function(z, Y, W) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var le = C({}, z.props), ae = z.key;
    if (Y != null)
      for (ee in Y.key !== void 0 && (ae = "" + Y.key), Y)
        !F.call(Y, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && Y.ref === void 0 || (le[ee] = Y[ee]);
    var ee = arguments.length - 2;
    if (ee === 1) le.children = W;
    else if (1 < ee) {
      for (var ye = Array(ee), ne = 0; ne < ee; ne++)
        ye[ne] = arguments[ne + 2];
      le.children = ye;
    }
    return Q(z.type, ae, le);
  }, Te.createContext = function(z) {
    return z = {
      $$typeof: d,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: u,
      _context: z
    }, z;
  }, Te.createElement = function(z, Y, W) {
    var le, ae = {}, ee = null;
    if (Y != null)
      for (le in Y.key !== void 0 && (ee = "" + Y.key), Y)
        F.call(Y, le) && le !== "key" && le !== "__self" && le !== "__source" && (ae[le] = Y[le]);
    var ye = arguments.length - 2;
    if (ye === 1) ae.children = W;
    else if (1 < ye) {
      for (var ne = Array(ye), re = 0; re < ye; re++)
        ne[re] = arguments[re + 2];
      ae.children = ne;
    }
    if (z && z.defaultProps)
      for (le in ye = z.defaultProps, ye)
        ae[le] === void 0 && (ae[le] = ye[le]);
    return Q(z, ee, ae);
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(z) {
    return { $$typeof: h, render: z };
  }, Te.isValidElement = ie, Te.lazy = function(z) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: z },
      _init: se
    };
  }, Te.memo = function(z, Y) {
    return {
      $$typeof: p,
      type: z,
      compare: Y === void 0 ? null : Y
    };
  }, Te.startTransition = Me, Te.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, Te.use = function(z) {
    return N.H.use(z);
  }, Te.useActionState = function(z, Y, W) {
    return N.H.useActionState(z, Y, W);
  }, Te.useCallback = function(z, Y) {
    return N.H.useCallback(z, Y);
  }, Te.useContext = function(z) {
    return N.H.useContext(z);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(z, Y) {
    return N.H.useDeferredValue(z, Y);
  }, Te.useEffect = function(z, Y) {
    return N.H.useEffect(z, Y);
  }, Te.useEffectEvent = function(z) {
    return N.H.useEffectEvent(z);
  }, Te.useId = function() {
    return N.H.useId();
  }, Te.useImperativeHandle = function(z, Y, W) {
    return N.H.useImperativeHandle(z, Y, W);
  }, Te.useInsertionEffect = function(z, Y) {
    return N.H.useInsertionEffect(z, Y);
  }, Te.useLayoutEffect = function(z, Y) {
    return N.H.useLayoutEffect(z, Y);
  }, Te.useMemo = function(z, Y) {
    return N.H.useMemo(z, Y);
  }, Te.useOptimistic = function(z, Y) {
    return N.H.useOptimistic(z, Y);
  }, Te.useReducer = function(z, Y, W) {
    return N.H.useReducer(z, Y, W);
  }, Te.useRef = function(z) {
    return N.H.useRef(z);
  }, Te.useState = function(z) {
    return N.H.useState(z);
  }, Te.useSyncExternalStore = function(z, Y, W) {
    return N.H.useSyncExternalStore(
      z,
      Y,
      W
    );
  }, Te.useTransition = function() {
    return N.H.useTransition();
  }, Te.version = "19.3.0", Te;
}
var Sx;
function _p() {
  return Sx || (Sx = 1, tm.exports = k2()), tm.exports;
}
var S = _p();
const oe = /* @__PURE__ */ q1(S), qs = /* @__PURE__ */ L2({
  __proto__: null,
  default: oe
}, [S]);
var nm = { exports: {} }, el = {}, im = { exports: {} }, am = {};
var wx;
function B2() {
  return wx || (wx = 1, (function(n) {
    function i(G, X) {
      var J = G.length;
      G.push(X);
      e: for (; 0 < J; ) {
        var se = J - 1 >>> 1, $ = G[se];
        if (0 < l($, X))
          G[se] = X, G[J] = $, J = se;
        else break e;
      }
    }
    function o(G) {
      return G.length === 0 ? null : G[0];
    }
    function s(G) {
      if (G.length === 0) return null;
      var X = G[0], J = G.pop();
      if (J !== X) {
        G[0] = J;
        e: for (var se = 0, $ = G.length, Me = $ >>> 1; se < Me; ) {
          var Re = 2 * (se + 1) - 1, He = G[Re], z = Re + 1, Y = G[z];
          if (0 > l(He, J))
            z < $ && 0 > l(Y, He) ? (G[se] = Y, G[z] = J, se = z) : (G[se] = He, G[Re] = J, se = Re);
          else if (z < $ && 0 > l(Y, J))
            G[se] = Y, G[z] = J, se = z;
          else break e;
        }
      }
      return X;
    }
    function l(G, X) {
      var J = G.sortIndex - X.sortIndex;
      return J !== 0 ? J : G.id - X.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      n.unstable_now = function() {
        return u.now();
      };
    } else {
      var d = Date, h = d.now();
      n.unstable_now = function() {
        return d.now() - h;
      };
    }
    var g = [], p = [], v = 1, m = null, x = 3, T = !1, w = !1, A = !1, C = !1, R = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function M(G) {
      for (var X = o(p); X !== null; ) {
        if (X.callback === null) s(p);
        else if (X.startTime <= G)
          s(p), X.sortIndex = X.expirationTime, i(g, X);
        else break;
        X = o(p);
      }
    }
    function B(G) {
      if (A = !1, M(G), !w)
        if (o(g) !== null)
          w = !0, U || (U = !0, ie());
        else {
          var X = o(p);
          X !== null && he(B, X.startTime - G);
        }
    }
    var U = !1, O = -1, N = 5, F = -1;
    function Q() {
      return C ? !0 : !(n.unstable_now() - F < N);
    }
    function ue() {
      if (C = !1, U) {
        var G = n.unstable_now();
        F = G;
        var X = !0;
        try {
          e: {
            w = !1, A && (A = !1, _(O), O = -1), T = !0;
            var J = x;
            try {
              t: {
                for (M(G), m = o(g); m !== null && !(m.expirationTime > G && Q()); ) {
                  var se = m.callback;
                  if (typeof se == "function") {
                    m.callback = null, x = m.priorityLevel;
                    var $ = se(
                      m.expirationTime <= G
                    );
                    if (G = n.unstable_now(), typeof $ == "function") {
                      m.callback = $, M(G), X = !0;
                      break t;
                    }
                    m === o(g) && s(g), M(G);
                  } else s(g);
                  m = o(g);
                }
                if (m !== null) X = !0;
                else {
                  var Me = o(p);
                  Me !== null && he(
                    B,
                    Me.startTime - G
                  ), X = !1;
                }
              }
              break e;
            } finally {
              m = null, x = J, T = !1;
            }
            X = void 0;
          }
        } finally {
          X ? ie() : U = !1;
        }
      }
    }
    var ie;
    if (typeof D == "function")
      ie = function() {
        D(ue);
      };
    else if (typeof MessageChannel < "u") {
      var te = new MessageChannel(), fe = te.port2;
      te.port1.onmessage = ue, ie = function() {
        fe.postMessage(null);
      };
    } else
      ie = function() {
        R(ue, 0);
      };
    function he(G, X) {
      O = R(function() {
        G(n.unstable_now());
      }, X);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, n.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : N = 0 < G ? Math.floor(1e3 / G) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_next = function(G) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = x;
      }
      var J = x;
      x = X;
      try {
        return G();
      } finally {
        x = J;
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
      var J = x;
      x = G;
      try {
        return X();
      } finally {
        x = J;
      }
    }, n.unstable_scheduleCallback = function(G, X, J) {
      var se = n.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? se + J : se) : J = se, G) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = J + $, G = {
        id: v++,
        callback: X,
        priorityLevel: G,
        startTime: J,
        expirationTime: $,
        sortIndex: -1
      }, J > se ? (G.sortIndex = J, i(p, G), o(g) === null && G === o(p) && (A ? (_(O), O = -1) : A = !0, he(B, J - se))) : (G.sortIndex = $, i(g, G), w || T || (w = !0, U || (U = !0, ie()))), G;
    }, n.unstable_shouldYield = Q, n.unstable_wrapCallback = function(G) {
      var X = x;
      return function() {
        var J = x;
        x = X;
        try {
          return G.apply(this, arguments);
        } finally {
          x = J;
        }
      };
    };
  })(am)), am;
}
var Tx;
function U2() {
  return Tx || (Tx = 1, im.exports = B2()), im.exports;
}
var om = { exports: {} }, Gt = {};
var Ex;
function H2() {
  if (Ex) return Gt;
  Ex = 1;
  var n = _p();
  function i(v) {
    var m = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        m += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return "Minified React error #" + v + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var s = {
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
  }, l = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.recoverable"), d = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function h(v, m, x) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: T == null ? null : T === d ? d : "" + T,
      children: v,
      containerInfo: m,
      implementation: x
    };
  }
  var g = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, m) {
    if (v === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Gt.browser = function(v) {
    return { $$typeof: u, _reason: v };
  }, Gt.createPortal = function(v, m) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(i(299));
    return h(v, m, null, x);
  }, Gt.flushSync = function(v) {
    var m = g.T, x = s.p;
    try {
      if (g.T = null, s.p = 2, v) return v();
    } finally {
      g.T = m, s.p = x, s.d.f();
    }
  }, Gt.preconnect = function(v, m) {
    typeof v == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(v, m));
  }, Gt.prefetchDNS = function(v) {
    typeof v == "string" && s.d.D(v);
  }, Gt.preinit = function(v, m) {
    if (typeof v == "string" && m && typeof m.as == "string") {
      var x = m.as, T = p(x, m.crossOrigin), w = typeof m.integrity == "string" ? m.integrity : void 0, A = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      x === "style" ? s.d.S(
        v,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: T,
          integrity: w,
          fetchPriority: A
        }
      ) : x === "script" && s.d.X(v, {
        crossOrigin: T,
        integrity: w,
        fetchPriority: A,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, Gt.preinitModule = function(v, m) {
    if (typeof v == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var x = p(
            m.as,
            m.crossOrigin
          );
          s.d.M(v, {
            crossOrigin: x,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && s.d.M(v);
  }, Gt.preload = function(v, m) {
    if (typeof v == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var x = m.as, T = p(x, m.crossOrigin);
      s.d.L(v, x, {
        crossOrigin: T,
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
  }, Gt.preloadModule = function(v, m) {
    if (typeof v == "string")
      if (m) {
        var x = p(m.as, m.crossOrigin);
        s.d.m(v, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: x,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else s.d.m(v);
  }, Gt.requestFormReset = function(v) {
    s.d.r(v);
  }, Gt.unstable_batchedUpdates = function(v, m) {
    return v(m);
  }, Gt.useFormState = function(v, m, x) {
    return g.H.useFormState(v, m, x);
  }, Gt.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, Gt.version = "19.3.0", Gt;
}
var Cx;
function G1() {
  if (Cx) return om.exports;
  Cx = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), om.exports = H2(), om.exports;
}
var Ax;
function I2() {
  if (Ax) return el;
  Ax = 1;
  var n = U2(), i = _p(), o = G1();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    for (var t = e, a = t; a && !a.alternate; )
      t = a, (t.flags & 4098) !== 0 && (e = t.return), a = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = u(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var a = e, r = t; ; ) {
      var c = a.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (r = c.return, r !== null) {
          a = r;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === a) return g(c), e;
          if (f === r) return g(c), t;
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== r.return) a = c, r = f;
      else {
        for (var b = !1, E = c.child; E; ) {
          if (E === a) {
            b = !0, a = c, r = f;
            break;
          }
          if (E === r) {
            b = !0, r = c, a = f;
            break;
          }
          E = E.sibling;
        }
        if (!b) {
          for (E = f.child; E; ) {
            if (E === a) {
              b = !0, a = f, r = c;
              break;
            }
            if (E === r) {
              b = !0, r = f, a = c;
              break;
            }
            E = E.sibling;
          }
          if (!b) throw Error(s(189));
        }
      }
      if (a.alternate !== r) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function m(e, t, a, r, c, f) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && a(e, r, c, f) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && m(
        e.child,
        t,
        a,
        r,
        c,
        f
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function x(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function T(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function w(e) {
    var t = [null, null], a = x(e);
    return a === null || A(
      t,
      e,
      a.child,
      { foundSelf: !1 }
    ), t;
  }
  function A(e, t, a, r) {
    for (; a !== null; ) {
      if (a === t) r.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (r.foundSelf) return e[1] = a, !0;
        e[0] = a;
      } else if ((a.tag !== 22 || a.memoizedState === null) && A(
        e,
        t,
        a.child,
        r
      ))
        return !0;
      a = a.sibling;
    }
    return !1;
  }
  function C(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(s(559));
    }
  }
  var R = null, _ = null;
  function D(e, t, a) {
    return e === a ? !0 : e === t ? (R = e, !0) : !1;
  }
  function M(e, t, a) {
    return e === a ? (_ = e, !1) : e === t ? (_ !== null && (R = e), !0) : !1;
  }
  function B(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function U(e, t, a) {
    for (var r = 0, c = e; c; c = a(c)) r++;
    c = 0;
    for (var f = t; f; f = a(f)) c++;
    for (; 0 < r - c; ) e = a(e), r--;
    for (; 0 < c - r; ) t = a(t), c--;
    for (; r--; ) {
      if (e === t || t !== null && e === t.alternate)
        return e;
      e = a(e), t = a(t);
    }
    return null;
  }
  var O = Object.assign, N = /* @__PURE__ */ Symbol.for("react.element"), F = /* @__PURE__ */ Symbol.for("react.transitional.element"), Q = /* @__PURE__ */ Symbol.for("react.portal"), ue = /* @__PURE__ */ Symbol.for("react.fragment"), ie = /* @__PURE__ */ Symbol.for("react.strict_mode"), te = /* @__PURE__ */ Symbol.for("react.profiler"), fe = /* @__PURE__ */ Symbol.for("react.consumer"), he = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.suspense_list"), se = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), Me = /* @__PURE__ */ Symbol.for("react.activity"), Re = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), He = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), z = /* @__PURE__ */ Symbol.for("react.view_transition"), Y = /* @__PURE__ */ Symbol.for("react.recoverable"), W = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ae = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ue:
        return "Fragment";
      case te:
        return "Profiler";
      case ie:
        return "StrictMode";
      case X:
        return "Suspense";
      case J:
        return "SuspenseList";
      case Me:
        return "Activity";
      case z:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Q:
          return "Portal";
        case he:
          return e.displayName || "Context";
        case fe:
          return (e._context.displayName || "Context") + ".Consumer";
        case G:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case se:
          return t = e.displayName || null, t !== null ? t : ee(e.type) || "Memo";
        case $:
          t = e._payload, e = e._init;
          try {
            return ee(e(t));
          } catch {
          }
      }
    return null;
  }
  var ye = Array.isArray, ne = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ae = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, st = [], ft = -1;
  function Pt(e) {
    return { current: e };
  }
  function We(e) {
    0 > ft || (e.current = st[ft], st[ft] = null, ft--);
  }
  function Pe(e, t) {
    ft++, st[ft] = e.current, e.current = t;
  }
  var ht = Pt(null), Ia = Pt(null), ni = Pt(null), mt = Pt(null);
  function qa(e, t) {
    switch (Pe(ni, t), Pe(Ia, e), Pe(ht, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Eb(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Eb(t), e = Cb(t, e);
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
    We(ht), Pe(ht, e);
  }
  function hn() {
    We(ht), We(Ia), We(ni);
  }
  function er(e) {
    var t = e.memoizedState;
    t !== null && (ws._currentValue = t.memoizedState, Pe(mt, e)), t = ht.current;
    var a = Cb(t, e.type);
    t !== a && (Pe(Ia, e), Pe(ht, a));
  }
  function jo(e) {
    Ia.current === e && (We(ht), We(Ia)), mt.current === e && (We(mt), ws._currentValue = Ae);
  }
  var aa, Nl;
  function Bn(e) {
    if (aa === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        aa = t && t[1] || "", Nl = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + aa + e + Nl;
  }
  var Ga = !1;
  function ii(e, t) {
    if (!e || Ga) return "";
    Ga = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
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
                } catch (ce) {
                  var V = ce;
                }
                Reflect.construct(e, [], Z);
              } else {
                try {
                  Z.call();
                } catch (ce) {
                  V = ce;
                }
                Z = !1;
                try {
                  var I = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), Z = !0, new e();
                } finally {
                  Z && (I !== void 0 ? Object.defineProperty(e.prototype, "props", I) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ce) {
                V = ce;
              }
              (Z = e()) && typeof Z.catch == "function" && Z.catch(function() {
              });
            }
          } catch (ce) {
            if (ce && V && typeof ce.stack == "string")
              return [ce.stack, V.stack];
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        r.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = r.DetermineComponentFrameRoot(), b = f[0], E = f[1];
      if (b && E) {
        var j = b.split(`
`), k = E.split(`
`);
        for (c = r = 0; r < j.length && !j[r].includes("DetermineComponentFrameRoot"); )
          r++;
        for (; c < k.length && !k[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (r === j.length || c === k.length)
          for (r = j.length - 1, c = k.length - 1; 1 <= r && 0 <= c && j[r] !== k[c]; )
            c--;
        for (; 1 <= r && 0 <= c; r--, c--)
          if (j[r] !== k[c]) {
            if (r !== 1 || c !== 1)
              do
                if (r--, c--, 0 > c || j[r] !== k[c]) {
                  var q = `
` + j[r].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= r && 0 <= c);
            break;
          }
      }
    } finally {
      Ga = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Bn(a) : "";
  }
  function _l(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Bn(e.type);
      case 16:
        return Bn("Lazy");
      case 13:
        return e.child !== t && t !== null ? Bn("Suspense Fallback") : Bn("Suspense");
      case 19:
        return Bn("SuspenseList");
      case 0:
      case 15:
        return ii(e.type, !1);
      case 11:
        return ii(e.type.render, !1);
      case 1:
        return ii(e.type, !0);
      case 31:
        return Bn("Activity");
      case 30:
        return Bn("ViewTransition");
      default:
        return "";
    }
  }
  function Ci(e) {
    try {
      var t = "", a = null;
      do
        t += _l(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  var tr = Object.prototype.hasOwnProperty, nr = n.unstable_scheduleCallback, zo = n.unstable_cancelCallback, jl = n.unstable_shouldYield, En = n.unstable_requestPaint, Kt = n.unstable_now, ir = n.unstable_getCurrentPriorityLevel, Un = n.unstable_ImmediatePriority, ar = n.unstable_UserBlockingPriority, Lo = n.unstable_NormalPriority, zl = n.unstable_LowPriority, or = n.unstable_IdlePriority, we = n.log, pt = n.unstable_setDisableYieldValue, rt = null, $e = null;
  function tn(e) {
    if (typeof we == "function" && pt(e), $e && typeof $e.setStrictMode == "function")
      try {
        $e.setStrictMode(rt, e);
      } catch {
      }
  }
  var Ie = Math.clz32 ? Math.clz32 : sr, nn = Math.log, Cn = Math.LN2;
  function sr(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (nn(e) / Cn | 0) | 0;
  }
  var Zt = 256, oa = 262144, Ll = 4194304;
  function Ya(e) {
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
        return e & -e;
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
  function Vl(e, t, a) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var c = 0, f = e.suspendedLanes, b = e.pingedLanes;
    e = e.warmLanes;
    var E = r & 134217727;
    return E !== 0 ? (r = E & ~f, r !== 0 ? c = Ya(r) : (b &= E, b !== 0 ? c = Ya(b) : a || (a = E & ~e, a !== 0 && (c = Ya(a))))) : (E = r & ~f, E !== 0 ? c = Ya(E) : b !== 0 ? c = Ya(b) : a || (a = r & ~e, a !== 0 && (c = Ya(a)))), c === 0 ? 0 : t !== 0 && t !== c && (t & f) === 0 && (f = c & -c, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : c;
  }
  function rr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function $g(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var r = 31 - Ie(a), c = 1 << r;
        t |= e[r], a &= ~c;
      }
    return t;
  }
  function ZA(e, t) {
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
  function Qg() {
    var e = Ll;
    return Ll <<= 1, (Ll & 62914560) === 0 && (Ll = 4194304), e;
  }
  function Af(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function lr(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function $A(e, t, a, r, c, f) {
    var b = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var E = e.entanglements, j = e.expirationTimes, k = e.hiddenUpdates;
    for (a = b & ~a; 0 < a; ) {
      var q = 31 - Ie(a), Z = 1 << q;
      E[q] = 0, j[q] = -1;
      var V = k[q];
      if (V !== null)
        for (k[q] = null, q = 0; q < V.length; q++) {
          var I = V[q];
          I !== null && (I.lane &= -536870913);
        }
      a &= ~Z;
    }
    r !== 0 && Jg(e, r, 0), f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(b & ~t));
  }
  function Jg(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - Ie(t);
    e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | a & 261930;
  }
  function Wg(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var r = 31 - Ie(a), c = 1 << r;
      c & t | e[r] & t && (e[r] |= t), a &= ~c;
    }
  }
  function ev(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Rf(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Rf(e) {
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
  function Df(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function tv() {
    var e = re.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : lx(e.type));
  }
  function nv(e, t) {
    var a = re.p;
    try {
      return re.p = e, t();
    } finally {
      re.p = a;
    }
  }
  var Ai = Math.random().toString(36).slice(2), kt = "__reactFiber$" + Ai, an = "__reactProps$" + Ai, Vo = "__reactContainer$" + Ai, iv = "__reactEvents$" + Ai, QA = "__reactListeners$" + Ai, JA = "__reactHandles$" + Ai, av = "__reactResources$" + Ai, cr = "__reactMarker$" + Ai, Pl = "__reactLoad$" + Ai;
  function kl(e) {
    delete e[kt], delete e[an], delete e[QA], delete e[JA];
  }
  function Fa(e) {
    var t;
    if (t = e[kt]) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Vo] || a[kt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Ib(e); e !== null; ) {
            if (a = e[kt]) return a;
            e = Ib(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Po(e) {
    if (e = e[kt] || e[Vo]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ur(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ko(e) {
    var t = e[av];
    return t || (t = e[av] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ot(e) {
    e[cr] = !0;
  }
  function ov(e) {
    e[Pl] = void 0;
  }
  var sv = /* @__PURE__ */ new Set(), rv = {};
  function Xa(e, t) {
    Bo(e, t), Bo(e + "Capture", t);
  }
  function Bo(e, t) {
    for (rv[e] = t, e = 0; e < t.length; e++)
      sv.add(t[e]);
  }
  var WA = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), lv = {}, cv = {};
  function eR(e) {
    return tr.call(cv, e) ? !0 : tr.call(lv, e) ? !1 : WA.test(e) ? cv[e] = !0 : (lv[e] = !0, !1);
  }
  var Ue = !1;
  function uv() {
    var e = Ue;
    return Ue = !1, e;
  }
  function Bl(e, t, a) {
    if (eR(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var r = t.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, a);
      }
  }
  function Ul(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, a);
    }
  }
  function Ri(e, t, a, r) {
    if (r === null) e.removeAttribute(a);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, r);
    }
  }
  function mn(e) {
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
  function fv(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function tR(e, t, a) {
    var r = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var c = r.get, f = r.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(b) {
          a = "" + b, f.call(this, b);
        }
      }), Object.defineProperty(e, t, {
        enumerable: r.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(b) {
          a = "" + b;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Of(e) {
    if (!e._valueTracker) {
      var t = fv(e) ? "checked" : "value";
      e._valueTracker = tR(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function dv(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), r = "";
    return e && (r = fv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== a ? (t.setValue(e), !0) : !1;
  }
  var nR = /[\n"\\]/g;
  function An(e) {
    return e.replace(
      nR,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Mf(e, t, a, r, c, f, b, E) {
    e.name = "", b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.type = b : e.removeAttribute("type"), t != null ? b === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + mn(t)) : e.value !== "" + mn(t) && (e.value = "" + mn(t)) : b !== "submit" && b !== "reset" || e.removeAttribute("value"), t != null ? b === "number" && e.value == t ? Nf(e, mn(e.value)) : Nf(e, mn(t)) : a != null ? Nf(e, mn(a)) : r != null && e.removeAttribute("value"), c == null && f != null && (e.defaultChecked = !!f), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? e.name = "" + mn(E) : e.removeAttribute("name");
  }
  function hv(e, t, a, r, c, f, b, E) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || a != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        Of(e);
        return;
      }
      a = a != null ? "" + mn(a) : "", t = t != null ? "" + mn(t) : a, E || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? c, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = E ? e.checked : !!r, e.defaultChecked = !!r, b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.name = b), Of(e);
  }
  function Nf(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function Uo(e, t, a, r) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < a.length; c++)
        t["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = t.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && r && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + mn(a), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, r && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function mv(e, t, a) {
    if (t != null && (t = "" + mn(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + mn(a) : "";
  }
  function pv(e, t, a, r) {
    if (t == null) {
      if (r != null) {
        if (a != null) throw Error(s(92));
        if (ye(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        a = r;
      }
      a == null && (a = ""), t = a;
    }
    a = mn(t), e.defaultValue = a, r = e.textContent, r === a && r !== "" && r !== null && (e.value = r), Of(e);
  }
  function Ho(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var iR = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gv(e, t, a) {
    var r = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, a) : typeof a != "number" || a === 0 || iR.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function vv(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var r in a)
        !a.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", Ue = !0);
      for (var c in t)
        r = t[c], t.hasOwnProperty(c) && a[c] !== r && (gv(e, c, r), Ue = !0);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && gv(e, f, t[f]);
  }
  function _f(e) {
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
  var aR = /* @__PURE__ */ new Map([
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
  ]), oR = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hl(e) {
    return oR.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ai() {
  }
  var jf = null;
  function zf(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Io = null, qo = null;
  function yv(e) {
    var t = Po(e);
    if (t && (e = t.stateNode)) {
      var a = e[an] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Mf(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + An(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var r = a[t];
              if (r !== e && r.form === e.form) {
                var c = r[an] || null;
                if (!c) throw Error(s(90));
                Mf(
                  r,
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
            for (t = 0; t < a.length; t++)
              r = a[t], r.form === e.form && dv(r);
          }
          break e;
        case "textarea":
          mv(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Uo(e, !!a.multiple, t, !1);
      }
    }
  }
  var Lf = !1;
  function bv(e, t, a) {
    if (Lf) return e(t, a);
    Lf = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (Lf = !1, (Io !== null || qo !== null) && (Hc(), Io && (t = Io, e = qo, qo = Io = null, yv(t), e)))
        for (t = 0; t < e.length; t++) yv(e[t]);
    }
  }
  function fr(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var r = a[an] || null;
    if (r === null) return null;
    a = r[t];
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        s(231, t, typeof a)
      );
    return a;
  }
  var Di = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vf = !1;
  if (Di)
    try {
      var dr = {};
      Object.defineProperty(dr, "passive", {
        get: function() {
          Vf = !0;
        }
      }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
    } catch {
      Vf = !1;
    }
  var sa = null, Pf = null, Il = null;
  function xv() {
    if (Il) return Il;
    var e, t = Pf, a = t.length, r, c = "value" in sa ? sa.value : sa.textContent, f = c.length;
    for (e = 0; e < a && t[e] === c[e]; e++) ;
    var b = a - e;
    for (r = 1; r <= b && t[a - r] === c[f - r]; r++) ;
    return Il = c.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ql(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Gl() {
    return !0;
  }
  function Sv() {
    return !1;
  }
  function $t(e) {
    function t(a, r, c, f, b) {
      this._reactName = a, this._targetInst = c, this.type = r, this.nativeEvent = f, this.target = b, this.currentTarget = null;
      for (var E in e)
        e.hasOwnProperty(E) && (a = e[E], this[E] = a ? a(f) : f[E]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Gl : Sv, this.isPropagationStopped = Sv, this;
    }
    return O(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Gl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Gl);
      },
      persist: function() {
      },
      isPersistent: Gl
    }), t;
  }
  var ra = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Yl = $t(ra), hr = O({}, ra, { view: 0, detail: 0 }), sR = $t(hr), kf, Bf, mr, Fl = O({}, hr, {
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
    getModifierState: Hf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (kf = e.screenX - mr.screenX, Bf = e.screenY - mr.screenY) : Bf = kf = 0, mr = e), kf);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Bf;
    }
  }), wv = $t(Fl), rR = O({}, Fl, { dataTransfer: 0 }), lR = $t(rR), cR = O({}, hr, { relatedTarget: 0 }), Uf = $t(cR), uR = O({}, ra, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fR = $t(uR), dR = O({}, ra, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), hR = $t(dR), mR = O({}, ra, { data: 0 }), Tv = $t(mR), pR = {
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
  }, gR = {
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
  }, vR = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function yR(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vR[e]) ? !!t[e] : !1;
  }
  function Hf() {
    return yR;
  }
  var bR = O({}, hr, {
    key: function(e) {
      if (e.key) {
        var t = pR[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gR[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hf,
    charCode: function(e) {
      return e.type === "keypress" ? ql(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), xR = $t(bR), SR = O({}, Fl, {
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
  }), Ev = $t(SR), wR = O({}, ra, { submitter: 0 }), TR = $t(wR), ER = O({}, hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hf
  }), CR = $t(ER), AR = O({}, ra, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), RR = $t(AR), DR = O({}, Fl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), OR = $t(DR), MR = O({}, ra, {
    newState: 0,
    oldState: 0,
    source: 0
  }), NR = $t(MR), _R = [9, 13, 27, 32], If = Di && "CompositionEvent" in window, pr = null;
  Di && "documentMode" in document && (pr = document.documentMode);
  var jR = Di && "TextEvent" in window && !pr, Cv = Di && (!If || pr && 8 < pr && 11 >= pr), Av = " ", Rv = !1;
  function Dv(e, t) {
    switch (e) {
      case "keyup":
        return _R.indexOf(t.keyCode) !== -1;
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
  function Ov(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Go = !1;
  function zR(e, t) {
    switch (e) {
      case "compositionend":
        return Ov(t);
      case "keypress":
        return t.which !== 32 ? null : (Rv = !0, Av);
      case "textInput":
        return e = t.data, e === Av && Rv ? null : e;
      default:
        return null;
    }
  }
  function LR(e, t) {
    if (Go)
      return e === "compositionend" || !If && Dv(e, t) ? (e = xv(), Il = Pf = sa = null, Go = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Cv && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var VR = {
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
  function Mv(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!VR[e.type] : t === "textarea";
  }
  function Nv(e, t, a, r) {
    Io ? qo ? qo.push(r) : qo = [r] : Io = r, t = Xc(t, "onChange"), 0 < t.length && (a = new Yl(
      "onChange",
      "change",
      null,
      a,
      r
    ), e.push({ event: a, listeners: t }));
  }
  var gr = null, vr = null;
  function PR(e) {
    yb(e, 0);
  }
  function Xl(e) {
    var t = ur(e);
    if (dv(t)) return e;
  }
  function _v(e, t) {
    if (e === "change") return t;
  }
  var jv = !1;
  if (Di) {
    var qf;
    if (Di) {
      var Gf = "oninput" in document;
      if (!Gf) {
        var zv = document.createElement("div");
        zv.setAttribute("oninput", "return;"), Gf = typeof zv.oninput == "function";
      }
      qf = Gf;
    } else qf = !1;
    jv = qf && (!document.documentMode || 9 < document.documentMode);
  }
  function Lv() {
    gr && (gr.detachEvent("onpropertychange", Vv), vr = gr = null);
  }
  function Vv(e) {
    if (e.propertyName === "value" && Xl(vr)) {
      var t = [];
      Nv(
        t,
        vr,
        e,
        zf(e)
      ), bv(PR, t);
    }
  }
  function kR(e, t, a) {
    e === "focusin" ? (Lv(), gr = t, vr = a, gr.attachEvent("onpropertychange", Vv)) : e === "focusout" && Lv();
  }
  function BR(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xl(vr);
  }
  function UR(e, t) {
    if (e === "click") return Xl(t);
  }
  function HR(e, t) {
    if (e === "input" || e === "change")
      return Xl(t);
  }
  function IR(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var pn = typeof Object.is == "function" ? Object.is : IR;
  function yr(e, t) {
    if (pn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), r = Object.keys(t);
    if (a.length !== r.length) return !1;
    for (r = 0; r < a.length; r++) {
      var c = a[r];
      if (!tr.call(t, c) || !pn(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  function Yf(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Pv(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function kv(e, t) {
    var a = Pv(e);
    e = 0;
    for (var r; a; ) {
      if (a.nodeType === 3) {
        if (r = e + a.textContent.length, e <= t && r >= t)
          return { node: a, offset: t - e };
        e = r;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Pv(a);
    }
  }
  function Bv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Uv(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Yf(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Yf(e.document);
    }
    return t;
  }
  function Ff(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qR = Di && "documentMode" in document && 11 >= document.documentMode, Yo = null, Xf = null, br = null, Kf = !1;
  function Hv(e, t, a) {
    var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Kf || Yo == null || Yo !== Yf(r) || (r = Yo, "selectionStart" in r && Ff(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), br && yr(br, r) || (br = r, r = Xc(Xf, "onSelect"), 0 < r.length && (t = new Yl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: r }), t.target = Yo)));
  }
  function Ka(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Fo = {
    animationend: Ka("Animation", "AnimationEnd"),
    animationiteration: Ka("Animation", "AnimationIteration"),
    animationstart: Ka("Animation", "AnimationStart"),
    transitionrun: Ka("Transition", "TransitionRun"),
    transitionstart: Ka("Transition", "TransitionStart"),
    transitioncancel: Ka("Transition", "TransitionCancel"),
    transitionend: Ka("Transition", "TransitionEnd")
  }, Zf = {}, Iv = {};
  Di && (Iv = document.createElement("div").style, "AnimationEvent" in window || (delete Fo.animationend.animation, delete Fo.animationiteration.animation, delete Fo.animationstart.animation), "TransitionEvent" in window || delete Fo.transitionend.transition);
  function Za(e) {
    if (Zf[e]) return Zf[e];
    if (!Fo[e]) return e;
    var t = Fo[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Iv)
        return Zf[e] = t[a];
    return e;
  }
  var qv = Za("animationend"), Gv = Za("animationiteration"), Yv = Za("animationstart"), GR = Za("transitionrun"), YR = Za("transitionstart"), FR = Za("transitioncancel"), Fv = Za("transitionend"), Xv = /* @__PURE__ */ new Map(), $f = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $f.push("scrollEnd");
  function Hn(e, t) {
    Xv.set(e, t), Xa(t, [e]);
  }
  var XR = 0;
  function Oi(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Yn.identifierPrefix;
    var a = XR++;
    return e = "_" + e + "t_" + a.toString(32) + "_", t.autoName = e;
  }
  function Kv(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, a = ds;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var c = e[a[r]];
        if (c != null) {
          if (c === "none") return "none";
          t = t == null ? c : t + (" " + c);
        }
      }
    return t ?? e.default;
  }
  function Mi(e, t) {
    return e = Kv(e), t = Kv(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var Kl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Rn = [], Xo = 0, Qf = 0;
  function Zl() {
    for (var e = Xo, t = Qf = Xo = 0; t < e; ) {
      var a = Rn[t];
      Rn[t++] = null;
      var r = Rn[t];
      Rn[t++] = null;
      var c = Rn[t];
      Rn[t++] = null;
      var f = Rn[t];
      if (Rn[t++] = null, r !== null && c !== null) {
        var b = r.pending;
        b === null ? c.next = c : (c.next = b.next, b.next = c), r.pending = c;
      }
      f !== 0 && Zv(a, c, f);
    }
  }
  function $l(e, t, a, r) {
    Rn[Xo++] = e, Rn[Xo++] = t, Rn[Xo++] = a, Rn[Xo++] = r, Qf |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function Jf(e, t, a, r) {
    return $l(e, t, a, r), Ql(e);
  }
  function $a(e, t) {
    return $l(e, null, null, t), Ql(e);
  }
  function Zv(e, t, a) {
    e.lanes |= a;
    var r = e.alternate;
    r !== null && (r.lanes |= a);
    for (var c = !1, f = e.return; f !== null; )
      f.childLanes |= a, r = f.alternate, r !== null && (r.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (c = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, c && t !== null && (c = 31 - Ie(a), e = f.hiddenUpdates, r = e[c], r === null ? e[c] = [t] : r.push(t), t.lane = a | 536870912), f) : null;
  }
  function Ql(e) {
    if (50 < Hr)
      throw Hr = 0, Uc = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ko = {};
  function KR(e, t, a, r) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function on(e, t, a, r) {
    return new KR(e, t, a, r);
  }
  function Wf(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ni(e, t) {
    var a = e.alternate;
    return a === null ? (a = on(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 1206910976, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function $v(e, t) {
    e.flags &= 1206910978;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Jl(e, t, a, r, c, f) {
    var b = 0;
    if (r = e, typeof r == "function") Wf(r) && (b = 1);
    else if (typeof r == "string")
      b = w2(
        e,
        a,
        ht.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (r) {
        case Me:
          return e = on(31, a, t, c), e.elementType = Me, e.lanes = f, e;
        case ue:
          return Qa(a.children, c, f, t);
        case ie:
          b = 8, c |= 24;
          break;
        case te:
          return e = on(12, a, t, c | 2), e.elementType = te, e.lanes = f, e;
        case X:
          return e = on(13, a, t, c), e.elementType = X, e.lanes = f, e;
        case J:
          return e = on(19, a, t, c), e.elementType = J, e.lanes = f, e;
        case Re:
        case z:
          return e = c | 32, e = on(30, a, t, e), e.elementType = z, e.lanes = f, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof r == "object" && r !== null)
            switch (r.$$typeof) {
              case he:
                b = 10;
                break e;
              case fe:
                b = 9;
                break e;
              case G:
                b = 11;
                break e;
              case se:
                b = 14;
                break e;
              case $:
                b = 16, r = null;
                break e;
            }
          b = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), r = null;
      }
    return t = on(b, a, t, c), t.elementType = e, t.type = r, t.lanes = f, t;
  }
  function Qa(e, t, a, r) {
    return e = on(7, e, r, t), e.lanes = a, e;
  }
  function ed(e, t, a) {
    return e = on(6, e, null, t), e.lanes = a, e;
  }
  function Qv(e) {
    var t = on(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function td(e, t, a) {
    return t = on(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Jv = /* @__PURE__ */ new WeakMap();
  function Dn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Jv.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Ci(t)
      }, Jv.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ci(t)
    };
  }
  var Zo = [], $o = 0, Wl = null, xr = 0, On = [], Mn = 0, la = null, oi = 1, si = "";
  function _i(e, t) {
    Zo[$o++] = xr, Zo[$o++] = Wl, Wl = e, xr = t;
  }
  function Wv(e, t, a) {
    On[Mn++] = oi, On[Mn++] = si, On[Mn++] = la, la = e;
    var r = oi;
    e = si;
    var c = 32 - Ie(r) - 1;
    r &= ~(1 << c), a += 1;
    var f = 32 - Ie(t) + c;
    if (30 < f) {
      var b = c - c % 5;
      f = (r & (1 << b) - 1).toString(32), r >>= b, c -= b, oi = 1 << 32 - Ie(t) + c | a << c | r, si = f + e;
    } else
      oi = 1 << f | a << c | r, si = e;
  }
  function ec(e) {
    e.return !== null && (_i(e, 1), Wv(e, 1, 0));
  }
  function nd(e) {
    for (; e === Wl; )
      Wl = Zo[--$o], Zo[$o] = null, xr = Zo[--$o], Zo[$o] = null;
    for (; e === la; )
      la = On[--Mn], On[Mn] = null, si = On[--Mn], On[Mn] = null, oi = On[--Mn], On[Mn] = null;
  }
  function ey(e, t) {
    On[Mn++] = oi, On[Mn++] = si, On[Mn++] = la, oi = t.id, si = t.overflow, la = e;
  }
  var Mt = null, tt = null, De = !1, ca = null, Nn = !1, id = Error(s(519));
  function ua(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Sr(Dn(t, e)), id;
  }
  function ty(e) {
    var t = e.stateNode, a = e.type, r = e.memoizedProps;
    switch (t[kt] = e, t[an] = r, a) {
      case "dialog":
        _e("cancel", t), _e("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        _e("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < qr.length; a++)
          _e(qr[a], t);
        break;
      case "source":
        _e("error", t);
        break;
      case "img":
      case "image":
      case "link":
        _e("error", t), _e("load", t);
        break;
      case "details":
        _e("toggle", t);
        break;
      case "input":
        _e("invalid", t), hv(
          t,
          r.value,
          r.defaultValue,
          r.checked,
          r.defaultChecked,
          r.type,
          r.name,
          !0
        );
        break;
      case "select":
        _e("invalid", t);
        break;
      case "textarea":
        _e("invalid", t), pv(t, r.value, r.defaultValue, r.children);
    }
    a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || r.suppressHydrationWarning === !0 || wb(t.textContent, a) ? (r.popover != null && (_e("beforetoggle", t), _e("toggle", t)), r.onScroll != null && _e("scroll", t), r.onScrollEnd != null && _e("scrollend", t), r.onClick != null && (t.onclick = ai), t = !0) : t = !1, t || ua(e, !0);
  }
  function tc(e) {
    for (Mt = e.return; Mt; )
      switch (Mt.tag) {
        case 5:
        case 31:
        case 13:
          Nn = !1;
          return;
        case 27:
        case 3:
          Nn = !0;
          return;
        default:
          Mt = Mt.return;
      }
  }
  function Qo(e) {
    if (e !== Mt) return !1;
    if (!De) return tc(e), De = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || jh(e.type, e.memoizedProps)), a = !a), a && tt && ua(e), tc(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      tt = Hb(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      tt = Hb(e);
    } else
      t === 27 ? (t = tt, Aa(e.type) ? (e = Ih, Ih = null, tt = e) : tt = t) : tt = Mt ? jn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ja() {
    tt = Mt = null, De = !1;
  }
  function ad() {
    var e = ca;
    return e !== null && (ln === null ? ln = e : ln.push.apply(
      ln,
      e
    ), ca = null), e;
  }
  function Sr(e) {
    ca === null ? ca = [e] : ca.push(e);
  }
  var od = Pt(null), Wa = null, ji = null;
  function fa(e, t, a) {
    Pe(od, t._currentValue), t._currentValue = a;
  }
  function zi(e) {
    e._currentValue = od.current, We(od);
  }
  function nc(e, t, a) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function sd(e, t, a, r) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var f = c.dependencies;
      if (f !== null) {
        var b = c.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var E = f;
          f = c;
          for (var j = 0; j < t.length; j++)
            if (E.context === t[j]) {
              f.lanes |= a, E = f.alternate, E !== null && (E.lanes |= a), nc(
                f.return,
                a,
                e
              ), r || (b = null);
              break e;
            }
          f = E.next;
        }
      } else if (c.tag === 18) {
        if (b = c.return, b === null) throw Error(s(341));
        b.lanes |= a, f = b.alternate, f !== null && (f.lanes |= a), nc(b, a, e), b = null;
      } else
        c.tag === 13 && c.memoizedState !== null && c.memoizedState.dehydrated === null ? (c.lanes |= a, b = c.alternate, b !== null && (b.lanes |= a), nc(
          c.return,
          a,
          e
        ), b = c.child, b = b !== null ? b.sibling : null) : b = c.child;
      if (b !== null) b.return = c;
      else
        for (b = c; b !== null; ) {
          if (b === e) {
            b = null;
            break;
          }
          if (c = b.sibling, c !== null) {
            c.return = b.return, b = c;
            break;
          }
          b = b.return;
        }
      c = b;
    }
  }
  function eo(e, t, a, r) {
    e = null;
    for (var c = t, f = !1; c !== null; ) {
      if (!f) {
        if ((c.flags & 524288) !== 0) f = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var b = c.alternate;
        if (b === null) throw Error(s(387));
        if (b = b.memoizedProps, b !== null) {
          var E = c.type;
          pn(c.pendingProps.value, b.value) || (e !== null ? e.push(E) : e = [E]);
        }
      } else if (c === mt.current) {
        if (b = c.alternate, b === null) throw Error(s(387));
        b.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ws) : e = [ws]);
      }
      c = c.return;
    }
    return e !== null && sd(
      t,
      e,
      a,
      r
    ), t.flags |= 262144, e !== null;
  }
  function ic(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!pn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function to(e) {
    Wa = e, ji = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Bt(e) {
    return ny(Wa, e);
  }
  function ac(e, t) {
    return Wa === null && to(e), ny(e, t);
  }
  function ny(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, ji === null) {
      if (e === null) throw Error(s(308));
      ji = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ji = ji.next = t;
    return a;
  }
  var ZR = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, r) {
        e.push(r);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, $R = n.unstable_scheduleCallback, QR = n.unstable_NormalPriority, gt = {
    $$typeof: he,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function rd() {
    return {
      controller: new ZR(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function wr(e) {
    e.refCount--, e.refCount === 0 && $R(QR, function() {
      e.controller.abort();
    });
  }
  function iy(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var a = e.transitionTypes;
      for (a === null && (a = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var r = t[e];
        a.indexOf(r) === -1 && a.push(r);
      }
    }
  }
  var Tr = null;
  function JR(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var Er = null, ld = 0, no = 0, Jo = null;
  function WR(e, t) {
    if (Er === null) {
      var a = Er = [];
      ld = 0, no = Eh(), Jo = {
        status: "pending",
        value: void 0,
        then: function(r) {
          a.push(r);
        }
      };
    }
    return ld++, t.then(ay, ay), t;
  }
  function ay() {
    if (--ld === 0 && (Tr = null, Er !== null)) {
      Jo !== null && (Jo.status = "fulfilled");
      var e = Er;
      Er = null, no = 0, Jo = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function eD(e, t) {
    var a = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        a.push(c);
      }
    };
    return e.then(
      function() {
        r.status = "fulfilled", r.value = t;
        for (var c = 0; c < a.length; c++) (0, a[c])(t);
      },
      function(c) {
        for (r.status = "rejected", r.reason = c, c = 0; c < a.length; c++)
          (0, a[c])(void 0);
      }
    ), r;
  }
  var oy = ne.S;
  ne.S = function(e, t) {
    if (Q0 = Kt(), typeof t == "object" && t !== null && typeof t.then == "function" && WR(e, t), Tr !== null)
      for (var a = gs; a !== null; )
        iy(a, Tr), a = a.next;
    if (a = e.types, a !== null) {
      for (var r = gs; r !== null; )
        iy(r, a), r = r.next;
      if (no !== 0) {
        r = Tr, r === null && (r = Tr = []);
        for (var c = 0; c < a.length; c++) {
          var f = a[c];
          r.indexOf(f) === -1 && r.push(f);
        }
      }
    }
    oy !== null && oy(e, t);
  };
  var io = Pt(null);
  function cd() {
    var e = io.current;
    return e !== null ? e : et.pooledCache;
  }
  function oc(e, t) {
    t === null ? Pe(io, io.current) : Pe(io, t.pool);
  }
  function sy() {
    var e = cd();
    return e === null ? null : { parent: gt._currentValue, pool: e };
  }
  var Wo = Error(s(460)), ud = Error(s(474)), sc = Error(s(542)), rc = { then: function() {
  } };
  function ry(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ly(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(ai, ai), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, uy(e), e === void 0 && !("reason" in t) ? Error(s(600)) : e;
      default:
        if (typeof t.status == "string") t.then(ai, ai);
        else {
          if (e = et, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = t, e.status = "pending", e.then(
            function(r) {
              if (t.status === "pending") {
                var c = t;
                c.status = "fulfilled", c.value = r;
              }
            },
            function(r) {
              if (t.status === "pending") {
                var c = t;
                c.status = "rejected", c.reason = r;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, uy(e), e;
        }
        throw oo = t, Wo;
    }
  }
  function ao(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (oo = a, Wo) : a;
    }
  }
  var oo = null;
  function cy() {
    if (oo === null) throw Error(s(459));
    var e = oo;
    return oo = null, e;
  }
  function uy(e) {
    if (e === Wo || e === sc)
      throw Error(s(483));
  }
  var es = null, Cr = 0;
  function lc(e) {
    var t = Cr;
    return Cr += 1, es === null && (es = []), ly(es, e, t);
  }
  function da(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function cc(e, t) {
    throw t.$$typeof === N ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function fy(e) {
    function t(P, L) {
      if (e) {
        var H = P.deletions;
        H === null ? (P.deletions = [L], P.flags |= 16) : H.push(L);
      }
    }
    function a(P, L) {
      if (!e) return null;
      for (; L !== null; )
        t(P, L), L = L.sibling;
      return null;
    }
    function r(P) {
      for (var L = /* @__PURE__ */ new Map(); P !== null; )
        P.key === null ? L.set(P.index, P) : L.set(P.key, P), P = P.sibling;
      return L;
    }
    function c(P, L) {
      return P = Ni(P, L), P.index = 0, P.sibling = null, P;
    }
    function f(P, L, H) {
      return P.index = H, e ? (H = P.alternate, H !== null ? (H = H.index, H < L ? (P.flags |= 2, L) : H) : (P.flags |= 134217730, L)) : (P.flags |= 1048576, L);
    }
    function b(P) {
      return e && P.alternate === null && (P.flags |= 134217730), P;
    }
    function E(P, L, H, K) {
      return L === null || L.tag !== 6 ? (L = ed(H, P.mode, K), L.return = P, L) : (L = c(L, H), L.return = P, L);
    }
    function j(P, L, H, K) {
      var de = H.type;
      return de === ue ? (P = q(
        P,
        L,
        H.props.children,
        K,
        H.key
      ), da(P, H), P) : L !== null && (L.elementType === de || typeof de == "object" && de !== null && de.$$typeof === $ && ao(de) === L.type) ? (L = c(L, H.props), da(L, H), L.return = P, L) : (L = Jl(
        H.type,
        H.key,
        H.props,
        null,
        P.mode,
        K
      ), da(L, H), L.return = P, L);
    }
    function k(P, L, H, K) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== H.containerInfo || L.stateNode.implementation !== H.implementation ? (L = td(H, P.mode, K), L.return = P, L) : (L = c(L, H.children || []), L.return = P, L);
    }
    function q(P, L, H, K, de) {
      return L === null || L.tag !== 7 ? (L = Qa(
        H,
        P.mode,
        K,
        de
      ), L.return = P, L) : (L = c(L, H), L.return = P, L);
    }
    function Z(P, L, H) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return L = ed(
          "" + L,
          P.mode,
          H
        ), L.return = P, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case F:
            return H = Jl(
              L.type,
              L.key,
              L.props,
              null,
              P.mode,
              H
            ), da(H, L), H.return = P, H;
          case Q:
            return L = td(
              L,
              P.mode,
              H
            ), L.return = P, L;
          case $:
            return L = ao(L), Z(P, L, H);
        }
        if (ye(L) || le(L))
          return L = Qa(
            L,
            P.mode,
            H,
            null
          ), L.return = P, L;
        if (typeof L.then == "function")
          return Z(P, lc(L), H);
        if (L.$$typeof === he)
          return Z(
            P,
            ac(P, L),
            H
          );
        cc(P, L);
      }
      return null;
    }
    function V(P, L, H, K) {
      var de = L !== null ? L.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return de !== null ? null : E(P, L, "" + H, K);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case F:
            return H.key === de ? j(P, L, H, K) : null;
          case Q:
            return H.key === de ? k(P, L, H, K) : null;
          case $:
            return H = ao(H), V(P, L, H, K);
        }
        if (ye(H) || le(H))
          return de !== null ? null : q(P, L, H, K, null);
        if (typeof H.then == "function")
          return V(
            P,
            L,
            lc(H),
            K
          );
        if (H.$$typeof === he)
          return V(
            P,
            L,
            ac(P, H),
            K
          );
        cc(P, H);
      }
      return null;
    }
    function I(P, L, H, K, de) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return P = P.get(H) || null, E(L, P, "" + K, de);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case F:
            return P = P.get(
              K.key === null ? H : K.key
            ) || null, j(L, P, K, de);
          case Q:
            return P = P.get(
              K.key === null ? H : K.key
            ) || null, k(L, P, K, de);
          case $:
            return K = ao(K), I(
              P,
              L,
              H,
              K,
              de
            );
        }
        if (ye(K) || le(K))
          return P = P.get(H) || null, q(L, P, K, de, null);
        if (typeof K.then == "function")
          return I(
            P,
            L,
            H,
            lc(K),
            de
          );
        if (K.$$typeof === he)
          return I(
            P,
            L,
            H,
            ac(L, K),
            de
          );
        cc(L, K);
      }
      return null;
    }
    function ce(P, L, H, K) {
      for (var de = null, ze = null, be = L, Se = L = 0, bt = null; be !== null && Se < H.length; Se++) {
        be.index > Se ? (bt = be, be = null) : bt = be.sibling;
        var Ve = V(
          P,
          be,
          H[Se],
          K
        );
        if (Ve === null) {
          be === null && (be = bt);
          break;
        }
        e && be && Ve.alternate === null && t(P, be), L = f(Ve, L, Se), ze === null ? de = Ve : ze.sibling = Ve, ze = Ve, be = bt;
      }
      if (Se === H.length)
        return a(P, be), De && _i(P, Se), de;
      if (be === null) {
        for (; Se < H.length; Se++)
          be = Z(P, H[Se], K), be !== null && (L = f(
            be,
            L,
            Se
          ), ze === null ? de = be : ze.sibling = be, ze = be);
        return De && _i(P, Se), de;
      }
      for (be = r(be); Se < H.length; Se++)
        bt = I(
          be,
          P,
          Se,
          H[Se],
          K
        ), bt !== null && (e && (Ve = bt.alternate, Ve !== null && be.delete(Ve.key === null ? Se : Ve.key)), L = f(
          bt,
          L,
          Se
        ), ze === null ? de = bt : ze.sibling = bt, ze = bt);
      return e && be.forEach(function(Na) {
        return t(P, Na);
      }), De && _i(P, Se), de;
    }
    function ge(P, L, H, K) {
      if (H == null) throw Error(s(151));
      for (var de = null, ze = null, be = L, Se = L = 0, bt = null, Ve = H.next(); be !== null && !Ve.done; Se++, Ve = H.next()) {
        be.index > Se ? (bt = be, be = null) : bt = be.sibling;
        var Na = V(P, be, Ve.value, K);
        if (Na === null) {
          be === null && (be = bt);
          break;
        }
        e && be && Na.alternate === null && t(P, be), L = f(Na, L, Se), ze === null ? de = Na : ze.sibling = Na, ze = Na, be = bt;
      }
      if (Ve.done)
        return a(P, be), De && _i(P, Se), de;
      if (be === null) {
        for (; !Ve.done; Se++, Ve = H.next())
          Ve = Z(P, Ve.value, K), Ve !== null && (L = f(Ve, L, Se), ze === null ? de = Ve : ze.sibling = Ve, ze = Ve);
        return De && _i(P, Se), de;
      }
      for (be = r(be); !Ve.done; Se++, Ve = H.next())
        Ve = I(be, P, Se, Ve.value, K), Ve !== null && (e && (bt = Ve.alternate, bt !== null && be.delete(
          bt.key === null ? Se : bt.key
        )), L = f(Ve, L, Se), ze === null ? de = Ve : ze.sibling = Ve, ze = Ve);
      return e && be.forEach(function(z2) {
        return t(P, z2);
      }), De && _i(P, Se), de;
    }
    function Ce(P, L, H, K) {
      if (typeof H == "object" && H !== null && H.type === ue && H.key === null && H.props.ref === void 0 && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case F:
            e: {
              for (var de = H.key; L !== null; ) {
                if (L.key === de) {
                  if (de = H.type, de === ue) {
                    if (L.tag === 7) {
                      a(
                        P,
                        L.sibling
                      ), K = c(
                        L,
                        H.props.children
                      ), da(K, H), K.return = P, P = K;
                      break e;
                    }
                  } else if (L.elementType === de || typeof de == "object" && de !== null && de.$$typeof === $ && ao(de) === L.type) {
                    a(
                      P,
                      L.sibling
                    ), K = c(L, H.props), da(K, H), K.return = P, P = K;
                    break e;
                  }
                  a(P, L);
                  break;
                } else t(P, L);
                L = L.sibling;
              }
              H.type === ue ? (K = Qa(
                H.props.children,
                P.mode,
                K,
                H.key
              ), da(K, H), K.return = P, P = K) : (K = Jl(
                H.type,
                H.key,
                H.props,
                null,
                P.mode,
                K
              ), da(K, H), K.return = P, P = K);
            }
            return b(P);
          case Q:
            e: {
              for (de = H.key; L !== null; ) {
                if (L.key === de)
                  if (L.tag === 4 && L.stateNode.containerInfo === H.containerInfo && L.stateNode.implementation === H.implementation) {
                    a(
                      P,
                      L.sibling
                    ), K = c(L, H.children || []), K.return = P, P = K;
                    break e;
                  } else {
                    a(P, L);
                    break;
                  }
                else t(P, L);
                L = L.sibling;
              }
              K = td(H, P.mode, K), K.return = P, P = K;
            }
            return b(P);
          case $:
            return H = ao(H), Ce(
              P,
              L,
              H,
              K
            );
        }
        if (ye(H))
          return ce(
            P,
            L,
            H,
            K
          );
        if (le(H)) {
          if (de = le(H), typeof de != "function") throw Error(s(150));
          return H = de.call(H), ge(
            P,
            L,
            H,
            K
          );
        }
        if (typeof H.then == "function")
          return Ce(
            P,
            L,
            lc(H),
            K
          );
        if (H.$$typeof === he)
          return Ce(
            P,
            L,
            ac(P, H),
            K
          );
        cc(P, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, L !== null && L.tag === 6 ? (a(P, L.sibling), K = c(L, H), K.return = P, P = K) : (a(P, L), K = ed(H, P.mode, K), K.return = P, P = K), b(P)) : a(P, L);
    }
    return function(P, L, H, K) {
      try {
        Cr = 0;
        var de = Ce(
          P,
          L,
          H,
          K
        );
        return es = null, de;
      } catch (be) {
        if (be === Wo || be === sc) throw be;
        var ze = on(29, be, null, P.mode);
        return ze.lanes = K, ze.return = P, ze;
      }
    };
  }
  var so = fy(!0), dy = fy(!1), ha = !1;
  function fd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function dd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ma(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function pa(e, t, a) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (qe & 2) !== 0) {
      var c = r.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), r.pending = t, t = Ql(e), Zv(e, null, a), t;
    }
    return $l(e, r, t, a), Ql(e);
  }
  function Ar(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, a |= r, t.lanes = a, Wg(e, a);
    }
  }
  function hd(e, t) {
    var a = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, a === r)) {
      var c = null, f = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var b = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          f === null ? c = f = b : f = f.next = b, a = a.next;
        } while (a !== null);
        f === null ? c = f = t : f = f.next = t;
      } else c = f = t;
      a = {
        baseState: r.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: r.shared,
        callbacks: r.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var md = !1;
  function Rr() {
    if (md) {
      var e = Jo;
      if (e !== null) throw e;
    }
  }
  function Dr(e, t, a, r) {
    md = !1;
    var c = e.updateQueue;
    ha = !1;
    var f = c.firstBaseUpdate, b = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var j = E, k = j.next;
      j.next = null, b === null ? f = k : b.next = k, b = j;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, E = q.lastBaseUpdate, E !== b && (E === null ? q.firstBaseUpdate = k : E.next = k, q.lastBaseUpdate = j));
    }
    if (f !== null) {
      var Z = c.baseState;
      b = 0, q = k = j = null, E = f;
      do {
        var V = E.lane & -536870913, I = V !== E.lane;
        if (I ? (je & V) === V : (r & V) === V) {
          V !== 0 && V === no && (md = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: null,
            next: null
          });
          e: {
            var ce = e, ge = E;
            V = t;
            var Ce = a;
            switch (ge.tag) {
              case 1:
                if (ce = ge.payload, typeof ce == "function") {
                  Z = ce.call(Ce, Z, V);
                  break e;
                }
                Z = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = ge.payload, V = typeof ce == "function" ? ce.call(Ce, Z, V) : ce, V == null) break e;
                Z = O({}, Z, V);
                break e;
              case 2:
                ha = !0;
            }
          }
          V = E.callback, V !== null && (e.flags |= 64, I && (e.flags |= 8192), I = c.callbacks, I === null ? c.callbacks = [V] : I.push(V));
        } else
          I = {
            lane: V,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          }, q === null ? (k = q = I, j = Z) : q = q.next = I, b |= V;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      q === null && (j = Z), c.baseState = j, c.firstBaseUpdate = k, c.lastBaseUpdate = q, f === null && (c.shared.lanes = 0), wa |= b, e.lanes = b, e.memoizedState = Z;
    }
  }
  function hy(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function my(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        hy(a[e], t);
  }
  var ga = Pt(null), uc = Pt(0);
  function py(e, t) {
    e = Bi, Pe(uc, e), Pe(ga, t), Bi = e | t.baseLanes;
  }
  function pd() {
    Pe(uc, Bi), Pe(ga, ga.current);
  }
  function gd() {
    Bi = uc.current, We(ga), We(uc);
  }
  var Ut = Pt(null), Ft = null;
  function va(e) {
    var t = e.alternate;
    Pe(Ht, Ht.current & 1), Pe(Ut, e), Ft === null && (t === null || ga.current !== null || t.memoizedState !== null) && (Ft = e);
  }
  function vd(e) {
    Pe(Ht, Ht.current), Pe(Ut, e), Ft === null && (Ft = e);
  }
  function gy(e) {
    e.tag === 22 ? (Pe(Ht, Ht.current), Pe(Ut, e), Ft === null && (Ft = e)) : ya();
  }
  function ya() {
    Pe(Ht, Ht.current), Pe(Ut, Ut.current);
  }
  function gn(e) {
    We(Ut), Ft === e && (Ft = null), We(Ht);
  }
  var Ht = Pt(0);
  function Or(e, t) {
    Pe(Ut, Ut.current), Pe(Ht, t);
  }
  function yd(e) {
    We(Ht), We(Ut), Ft === e && (Ft = null);
  }
  function fc(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Uh(a) || Hh(a)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Li = 0, Ee = null, Qe = null, vt = null, dc = !1, ts = !1, ro = !1, hc = 0, Mr = 0, ns = null, tD = 0;
  function lt() {
    throw Error(s(321));
  }
  function bd(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!pn(e[a], t[a])) return !1;
    return !0;
  }
  function xd(e, t, a, r, c, f) {
    return Li = f, Ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ne.H = e === null || e.memoizedState === null ? Wy : e0, ro = !1, f = a(r, c), ro = !1, ts && (f = yy(
      t,
      a,
      r,
      c
    )), vy(e), f;
  }
  function vy(e) {
    ne.H = xc;
    var t = Qe !== null && Qe.next !== null;
    if (Li = 0, vt = Qe = Ee = null, dc = !1, Mr = 0, ns = null, t) throw Error(s(300));
    e === null || yt || (e = e.dependencies, e !== null && ic(e) && (yt = !0));
  }
  function yy(e, t, a, r) {
    Ee = e;
    var c = 0;
    do {
      if (ts && (ns = null), Mr = 0, ts = !1, 25 <= c) throw Error(s(301));
      if (c += 1, vt = Qe = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      ne.H = cD, f = t(a, r);
    } while (ts);
    return f;
  }
  function nD() {
    var e = ne.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Nr(t) : t, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (Ee.flags |= 1024), t;
  }
  function Sd() {
    var e = hc !== 0;
    return hc = 0, e;
  }
  function wd(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Td(e) {
    if (dc) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      dc = !1;
    }
    Li = 0, vt = Qe = Ee = null, ts = !1, Mr = hc = 0, ns = null;
  }
  function Qt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return vt === null ? Ee.memoizedState = vt = e : vt = vt.next = e, vt;
  }
  function dt() {
    if (Qe === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = vt === null ? Ee.memoizedState : vt.next;
    if (t !== null)
      vt = t, Qe = e;
    else {
      if (e === null)
        throw Ee.alternate === null ? Error(s(467)) : Error(s(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, vt === null ? Ee.memoizedState = vt = e : vt = vt.next = e;
    }
    return vt;
  }
  function mc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Nr(e) {
    var t = Mr;
    return Mr += 1, ns === null && (ns = []), e = ly(ns, e, t), t = Ee, (vt === null ? t.memoizedState : vt.next) === null && (t = t.alternate, ne.H = t === null || t.memoizedState === null ? Wy : e0), e;
  }
  function pc(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Nr(e);
      if (e.$$typeof === Y) return;
      if (e.$$typeof === he) return Bt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Ed(e) {
    var t = null, a = Ee.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var r = Ee.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = mc(), Ee.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), r = 0; r < e; r++)
        a[r] = He;
    return t.index++, a;
  }
  function Vi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gc(e) {
    var t = dt();
    return Cd(t, Qe, e);
  }
  function Cd(e, t, a) {
    var r = e.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = a;
    var c = e.baseQueue, f = r.pending;
    if (f !== null) {
      if (c !== null) {
        var b = c.next;
        c.next = f.next, f.next = b;
      }
      t.baseQueue = c = f, r.pending = null;
    }
    if (f = e.baseState, c === null) e.memoizedState = f;
    else {
      t = c.next;
      var E = b = null, j = null, k = t, q = !1;
      do {
        var Z = k.lane & -536870913;
        if (Z !== k.lane ? (je & Z) === Z : (Li & Z) === Z) {
          var V = k.revertLane;
          if (V === 0)
            j !== null && (j = j.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }), Z === no && (q = !0);
          else if ((Li & V) === V) {
            k = k.next, V === no && (q = !0);
            continue;
          } else
            Z = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }, j === null ? (E = j = Z, b = f) : j = j.next = Z, Ee.lanes |= V, wa |= V;
          Z = k.action, ro && a(f, Z), f = k.hasEagerState ? k.eagerState : a(f, Z);
        } else
          V = {
            lane: Z,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          }, j === null ? (E = j = V, b = f) : j = j.next = V, Ee.lanes |= Z, wa |= Z;
        k = k.next;
      } while (k !== null && k !== t);
      if (j === null ? b = f : j.next = E, !pn(f, e.memoizedState) && (yt = !0, q && (a = Jo, a !== null)))
        throw a;
      e.memoizedState = f, e.baseState = b, e.baseQueue = j, r.lastRenderedState = f;
    }
    return c === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function Ad(e) {
    var t = dt(), a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var r = a.dispatch, c = a.pending, f = t.memoizedState;
    if (c !== null) {
      a.pending = null;
      var b = c = c.next;
      do
        f = e(f, b.action), b = b.next;
      while (b !== c);
      pn(f, t.memoizedState) || (yt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
    }
    return [f, r];
  }
  function by(e, t, a) {
    var r = Ee, c = dt(), f = De;
    if (f) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = t();
    var b = !pn(
      (Qe || c).memoizedState,
      a
    );
    if (b && (c.memoizedState = a, yt = !0), c = c.queue, Od(wy.bind(null, r, c, e), [
      e
    ]), e = c.getSnapshot !== t || b || vt !== null && (vt.memoizedState.tag & 1) !== 0, is(
      e ? 9 : 8,
      { destroy: void 0 },
      Sy.bind(null, r, c, a, t),
      null
    ), e) {
      if (r.flags |= 2048, et === null) throw Error(s(349));
      f || (Li & 127) !== 0 || xy(r, t, a);
    }
    return a;
  }
  function xy(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ee.updateQueue, t === null ? (t = mc(), Ee.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Sy(e, t, a, r) {
    t.value = a, t.getSnapshot = r, Ty(t) && Ey(e);
  }
  function wy(e, t, a) {
    return a(function() {
      Ty(t) && Ey(e);
    });
  }
  function Ty(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !pn(e, a);
    } catch {
      return !0;
    }
  }
  function Ey(e) {
    var t = $a(e, 2);
    t !== null && cn(t, e, 2);
  }
  function Rd(e) {
    var t = Qt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ro) {
        tn(!0);
        try {
          a();
        } finally {
          tn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vi,
      lastRenderedState: e
    }, t;
  }
  function Cy(e, t, a, r) {
    return e.baseState = a, Cd(
      e,
      Qe,
      typeof r == "function" ? r : Vi
    );
  }
  function iD(e, t, a, r, c) {
    if (bc(e)) throw Error(s(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(b) {
          f.listeners.push(b);
        }
      };
      ne.T !== null ? a(!0) : f.isTransition = !1, r(f), a = t.pending, a === null ? (f.next = t.pending = f, Ay(t, f)) : (f.next = a.next, t.pending = a.next = f);
    }
  }
  function Ay(e, t) {
    var a = t.action, r = t.payload, c = e.state;
    if (t.isTransition) {
      var f = ne.T, b = {};
      b.types = f !== null ? f.types : null, ne.T = b;
      try {
        var E = a(c, r), j = ne.S;
        j !== null && j(b, E), Ry(e, t, E);
      } catch (k) {
        Dd(e, t, k);
      } finally {
        f !== null && b.types !== null && (f.types = b.types), ne.T = f;
      }
    } else
      try {
        f = a(c, r), Ry(e, t, f);
      } catch (k) {
        Dd(e, t, k);
      }
  }
  function Ry(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(r) {
        Dy(e, t, r);
      },
      function(r) {
        return Dd(e, t, r);
      }
    ) : Dy(e, t, a);
  }
  function Dy(e, t, a) {
    t.status = "fulfilled", t.value = a, Oy(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ay(e, a)));
  }
  function Dd(e, t, a) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = a, Oy(t), t = t.next;
      while (t !== r);
    }
    e.action = null;
  }
  function Oy(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function My(e, t) {
    return t;
  }
  function Ny(e, t) {
    if (De) {
      var a = et.formState;
      if (a !== null) {
        e: {
          var r = Ee;
          if (De) {
            if (tt) {
              t: {
                for (var c = tt, f = Nn; c.nodeType !== 8; ) {
                  if (!f) {
                    c = null;
                    break t;
                  }
                  if (c = jn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                f = c.data, c = f === "F!" || f === "F" ? c : null;
              }
              if (c) {
                tt = jn(
                  c.nextSibling
                ), r = c.data === "F!";
                break e;
              }
            }
            ua(r);
          }
          r = !1;
        }
        r && (t = a[0]);
      }
    }
    return a = Qt(), a.memoizedState = a.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: My,
      lastRenderedState: t
    }, a.queue = r, a = $y.bind(
      null,
      Ee,
      r
    ), r.dispatch = a, r = Rd(!1), f = zd.bind(
      null,
      Ee,
      !1,
      r.queue
    ), r = Qt(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = c, a = iD.bind(
      null,
      Ee,
      c,
      f,
      a
    ), c.dispatch = a, r.memoizedState = e, [t, a, !1];
  }
  function _y(e) {
    var t = dt();
    return jy(t, Qe, e);
  }
  function jy(e, t, a) {
    if (t = Cd(
      e,
      t,
      My
    )[0], e = gc(Vi)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var r = Nr(t);
      } catch (b) {
        throw b === Wo ? sc : b;
      }
    else r = t;
    t = dt();
    var c = t.queue, f = c.dispatch;
    return a !== t.memoizedState && (Ee.flags |= 2048, is(
      9,
      { destroy: void 0 },
      aD.bind(null, c, a),
      null
    )), [r, f, e];
  }
  function aD(e, t) {
    e.action = t;
  }
  function zy(e) {
    var t = dt(), a = Qe;
    if (a !== null)
      return jy(t, a, e);
    dt(), t = t.memoizedState, a = dt();
    var r = a.queue.dispatch;
    return a.memoizedState = e, [t, r, !1];
  }
  function is(e, t, a, r) {
    return e = { tag: e, create: a, deps: r, inst: t, next: null }, t = Ee.updateQueue, t === null && (t = mc(), Ee.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (r = a.next, a.next = e, e.next = r, t.lastEffect = e), e;
  }
  function Ly() {
    return dt().memoizedState;
  }
  function vc(e, t, a, r) {
    var c = Qt();
    Ee.flags |= e, c.memoizedState = is(
      1 | t,
      { destroy: void 0 },
      a,
      r === void 0 ? null : r
    );
  }
  function yc(e, t, a, r) {
    var c = dt();
    r = r === void 0 ? null : r;
    var f = c.memoizedState.inst;
    Qe !== null && r !== null && bd(r, Qe.memoizedState.deps) ? c.memoizedState = is(t, f, a, r) : (Ee.flags |= e, c.memoizedState = is(
      1 | t,
      f,
      a,
      r
    ));
  }
  function Vy(e, t) {
    vc(8390656, 8, e, t);
  }
  function Od(e, t) {
    yc(2048, 8, e, t);
  }
  function oD(e) {
    Ee.flags |= 4;
    var t = Ee.updateQueue;
    if (t === null)
      t = mc(), Ee.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Py(e) {
    var t = dt().memoizedState;
    return oD({ ref: t, nextImpl: e }), function() {
      if ((qe & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ky(e, t) {
    return yc(4, 2, e, t);
  }
  function By(e, t) {
    return yc(4, 4, e, t);
  }
  function Uy(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Hy(e, t, a) {
    a = a != null ? a.concat([e]) : null, yc(4, 4, Uy.bind(null, t, e), a);
  }
  function Md() {
  }
  function Iy(e, t) {
    var a = dt();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    return t !== null && bd(t, r[1]) ? r[0] : (a.memoizedState = [e, t], e);
  }
  function qy(e, t) {
    var a = dt();
    t = t === void 0 ? null : t;
    var r = a.memoizedState;
    if (t !== null && bd(t, r[1]))
      return r[0];
    if (r = e(), ro) {
      tn(!0);
      try {
        e();
      } finally {
        tn(!1);
      }
    }
    return a.memoizedState = [r, t], r;
  }
  function Nd(e, t, a) {
    return a === void 0 || (Li & 1073741824) !== 0 && (je & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = W0(), Ee.lanes |= e, wa |= e, a);
  }
  function Gy(e, t, a, r) {
    return pn(a, t) ? a : ga.current !== null ? (e = Nd(e, a, r), pn(e, t) || (yt = !0), e) : (Li & 106) === 0 || (Li & 1073741824) !== 0 && (je & 261930) === 0 ? (yt = !0, e.memoizedState = a) : (e = W0(), Ee.lanes |= e, wa |= e, t);
  }
  function Yy(e, t, a, r, c) {
    var f = re.p;
    re.p = f !== 0 && 8 > f ? f : 8;
    var b = ne.T, E = {};
    E.types = b !== null ? b.types : null, ne.T = E, zd(e, !1, t, a);
    try {
      var j = c(), k = ne.S;
      if (k !== null && k(E, j), j !== null && typeof j == "object" && typeof j.then == "function") {
        var q = eD(
          j,
          r
        );
        _r(
          e,
          t,
          q,
          xn(e)
        );
      } else
        _r(
          e,
          t,
          r,
          xn(e)
        );
    } catch (Z) {
      _r(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Z },
        xn()
      );
    } finally {
      re.p = f, b !== null && E.types !== null && (b.types = E.types), ne.T = b;
    }
  }
  function sD() {
  }
  function _d(e, t, a, r) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Fy(e).queue;
    Yy(
      e,
      c,
      t,
      Ae,
      a === null ? sD : function() {
        return Xy(e), a(r);
      }
    );
  }
  function Fy(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Ae,
      baseState: Ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vi,
        lastRenderedState: Ae
      },
      next: null
    };
    var a = {};
    return t.next = {
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
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Xy(e) {
    var t = Fy(e);
    t.next === null && (t = e.alternate.memoizedState), _r(
      e,
      t.next.queue,
      {},
      xn()
    );
  }
  function jd() {
    return Bt(ws);
  }
  function Ky() {
    return dt().memoizedState;
  }
  function Zy() {
    return dt().memoizedState;
  }
  function rD(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = xn();
          e = ma(a);
          var r = pa(t, e, a);
          r !== null && (cn(r, t, a), Ar(r, t, a)), t = { cache: rd() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function lD(e, t, a) {
    var r = xn();
    a = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bc(e) ? Qy(t, a) : (a = Jf(e, t, a, r), a !== null && (cn(a, e, r), Jy(a, t, r)));
  }
  function $y(e, t, a) {
    var r = xn();
    _r(e, t, a, r);
  }
  function _r(e, t, a, r) {
    var c = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (bc(e)) Qy(t, c);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var b = t.lastRenderedState, E = f(b, a);
          if (c.hasEagerState = !0, c.eagerState = E, pn(E, b))
            return $l(e, t, c, 0), et === null && Zl(), !1;
        } catch {
        }
      if (a = Jf(e, t, c, r), a !== null)
        return cn(a, e, r), Jy(a, t, r), !0;
    }
    return !1;
  }
  function zd(e, t, a, r) {
    if (r = {
      lane: 2,
      revertLane: Eh(),
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bc(e)) {
      if (t) throw Error(s(479));
    } else
      t = Jf(
        e,
        a,
        r,
        2
      ), t !== null && cn(t, e, 2);
  }
  function bc(e) {
    var t = e.alternate;
    return e === Ee || t !== null && t === Ee;
  }
  function Qy(e, t) {
    ts = dc = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Jy(e, t, a) {
    if ((a & 4194048) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, a |= r, t.lanes = a, Wg(e, a);
    }
  }
  var xc = {
    readContext: Bt,
    use: pc,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useLayoutEffect: lt,
    useInsertionEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useSyncExternalStore: lt,
    useId: lt,
    useHostTransitionStatus: lt,
    useFormState: lt,
    useActionState: lt,
    useOptimistic: lt,
    useMemoCache: lt,
    useCacheRefresh: lt,
    useEffectEvent: lt
  }, Wy = {
    readContext: Bt,
    use: pc,
    useCallback: function(e, t) {
      return Qt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Bt,
    useEffect: Vy,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, vc(
        4194308,
        4,
        Uy.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return vc(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      vc(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Qt();
      t = t === void 0 ? null : t;
      var r = e();
      if (ro) {
        tn(!0);
        try {
          e();
        } finally {
          tn(!1);
        }
      }
      return a.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, a) {
      var r = Qt();
      if (a !== void 0) {
        var c = a(t);
        if (ro) {
          tn(!0);
          try {
            a(t);
          } finally {
            tn(!1);
          }
        }
      } else c = t;
      return r.memoizedState = r.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, r.queue = e, e = e.dispatch = lD.bind(
        null,
        Ee,
        e
      ), [r.memoizedState, e];
    },
    useRef: function(e) {
      var t = Qt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Rd(e);
      var t = e.queue, a = $y.bind(null, Ee, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Md,
    useDeferredValue: function(e, t) {
      var a = Qt();
      return Nd(a, e, t);
    },
    useTransition: function() {
      var e = Rd(!1);
      return e = Yy.bind(
        null,
        Ee,
        e.queue,
        !0,
        !1
      ), Qt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var r = Ee, c = Qt();
      if (De) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = t(), et === null)
          throw Error(s(349));
        (je & 127) !== 0 || xy(r, t, a);
      }
      c.memoizedState = a;
      var f = { value: a, getSnapshot: t };
      return c.queue = f, Vy(wy.bind(null, r, f, e), [
        e
      ]), r.flags |= 2048, is(
        9,
        { destroy: void 0 },
        Sy.bind(
          null,
          r,
          f,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Qt(), t = et.identifierPrefix;
      if (De) {
        var a = si, r = oi;
        a = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = hc++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = tD++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: jd,
    useFormState: Ny,
    useActionState: Ny,
    useOptimistic: function(e) {
      var t = Qt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = zd.bind(
        null,
        Ee,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Ed,
    useCacheRefresh: function() {
      return Qt().memoizedState = rD.bind(
        null,
        Ee
      );
    },
    useEffectEvent: function(e) {
      var t = Qt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((qe & 2) !== 0)
          throw Error(s(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, e0 = {
    readContext: Bt,
    use: pc,
    useCallback: Iy,
    useContext: Bt,
    useEffect: Od,
    useImperativeHandle: Hy,
    useInsertionEffect: ky,
    useLayoutEffect: By,
    useMemo: qy,
    useReducer: gc,
    useRef: Ly,
    useState: function() {
      return gc(Vi);
    },
    useDebugValue: Md,
    useDeferredValue: function(e, t) {
      var a = dt();
      return Gy(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = gc(Vi)[0], t = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : Nr(e),
        t
      ];
    },
    useSyncExternalStore: by,
    useId: Ky,
    useHostTransitionStatus: jd,
    useFormState: _y,
    useActionState: _y,
    useOptimistic: function(e, t) {
      var a = dt();
      return Cy(a, Qe, e, t);
    },
    useMemoCache: Ed,
    useCacheRefresh: Zy,
    useEffectEvent: Py
  }, cD = {
    readContext: Bt,
    use: pc,
    useCallback: Iy,
    useContext: Bt,
    useEffect: Od,
    useImperativeHandle: Hy,
    useInsertionEffect: ky,
    useLayoutEffect: By,
    useMemo: qy,
    useReducer: Ad,
    useRef: Ly,
    useState: function() {
      return Ad(Vi);
    },
    useDebugValue: Md,
    useDeferredValue: function(e, t) {
      var a = dt();
      return Qe === null ? Nd(a, e, t) : Gy(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ad(Vi)[0], t = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : Nr(e),
        t
      ];
    },
    useSyncExternalStore: by,
    useId: Ky,
    useHostTransitionStatus: jd,
    useFormState: zy,
    useActionState: zy,
    useOptimistic: function(e, t) {
      var a = dt();
      return Qe !== null ? Cy(a, Qe, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Ed,
    useCacheRefresh: Zy,
    useEffectEvent: Py
  };
  function Ld(e, t, a, r) {
    t = e.memoizedState, a = a(r, t), a = a == null ? t : O({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Vd = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var r = xn(), c = ma(r);
      c.payload = t, a != null && (c.callback = a), t = pa(e, c, r), t !== null && (cn(t, e, r), Ar(t, e, r));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var r = xn(), c = ma(r);
      c.tag = 1, c.payload = t, a != null && (c.callback = a), t = pa(e, c, r), t !== null && (cn(t, e, r), Ar(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = xn(), r = ma(a);
      r.tag = 2, t != null && (r.callback = t), t = pa(e, r, a), t !== null && (cn(t, e, a), Ar(t, e, a));
    }
  };
  function t0(e, t, a, r, c, f, b) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, f, b) : t.prototype && t.prototype.isPureReactComponent ? !yr(a, r) || !yr(c, f) : !0;
  }
  function n0(e, t, a, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, r), t.state !== e && Vd.enqueueReplaceState(t, t.state, null);
  }
  function lo(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var r in t)
        r !== "ref" && (a[r] = t[r]);
    }
    if (e = e.defaultProps) {
      a === t && (a = O({}, a));
      for (var c in e)
        a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  function i0(e) {
    Kl(e);
  }
  function a0(e) {
    console.error(e);
  }
  function o0(e) {
    Kl(e);
  }
  function Sc(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function s0(e, t, a) {
    try {
      var r = e.onCaughtError;
      r(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Pd(e, t, a) {
    return a = ma(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Sc(e, t);
    }, a;
  }
  function r0(e) {
    return e = ma(e), e.tag = 3, e;
  }
  function l0(e, t, a, r) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var f = r.value;
      e.payload = function() {
        return c(f);
      }, e.callback = function() {
        s0(t, a, r);
      };
    }
    var b = a.stateNode;
    b !== null && typeof b.componentDidCatch == "function" && (e.callback = function() {
      s0(t, a, r), typeof c != "function" && (Ta === null ? Ta = /* @__PURE__ */ new Set([this]) : Ta.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: E !== null ? E : ""
      });
    });
  }
  function uD(e, t, a, r, c) {
    if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = a.alternate, t !== null && eo(
        t,
        a,
        c,
        !0
      ), a = Ut.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return Ft === null ? Ic() : a.alternate === null && ct === 0 && (ct = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, r === rc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Sh(e, r, c)), !1;
          case 22:
            return a.flags |= 65536, r === rc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : a.add(r)), Sh(e, r, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return Sh(e, r, c), Ic(), !1;
    }
    if (De)
      return t = Ut.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, r !== id && (e = Error(s(422), { cause: r }), Sr(Dn(e, a)))) : (r !== id && (t = Error(s(423), {
        cause: r
      }), Sr(
        Dn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, r = Dn(r, a), c = Pd(
        e.stateNode,
        r,
        c
      ), hd(e, c), ct !== 4 && (ct = 2)), !1;
    var f = Error(s(520), { cause: r });
    if (f = Dn(f, a), Ur === null ? Ur = [f] : Ur.push(f), ct !== 4 && (ct = 2), t === null) return !0;
    r = Dn(r, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Pd(a.stateNode, r, e), hd(a, e), !1;
        case 1:
          if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Ta === null || !Ta.has(f))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = r0(c), l0(
              c,
              e,
              a,
              r
            ), hd(a, c), !1;
          break;
        case 22:
          if (a.memoizedState !== null)
            return a.flags |= 65536, !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var kd = Error(s(461)), yt = !1;
  function Tt(e, t, a, r) {
    t.child = e === null ? dy(t, null, a, r) : so(
      t,
      e.child,
      a,
      r
    );
  }
  function c0(e, t, a, r, c) {
    a = a.render;
    var f = t.ref;
    if ("ref" in r) {
      var b = {};
      for (var E in r)
        E !== "ref" && (b[E] = r[E]);
    } else b = r;
    return to(t), r = xd(
      e,
      t,
      a,
      b,
      f,
      c
    ), E = Sd(), e !== null && !yt ? (wd(e, t, c), Pi(e, t, c)) : (De && E && ec(t), t.flags |= 1, Tt(e, t, r, c), t.child);
  }
  function u0(e, t, a, r, c) {
    if (e === null) {
      var f = a.type;
      return typeof f == "function" && !Wf(f) && f.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = f, f0(
        e,
        t,
        f,
        r,
        c
      )) : (e = Jl(
        a.type,
        null,
        r,
        t,
        t.mode,
        c
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !Fd(e, c)) {
      var b = f.memoizedProps;
      if (a = a.compare, a = a !== null ? a : yr, a(b, r) && e.ref === t.ref)
        return Pi(e, t, c);
    }
    return t.flags |= 1, e = Ni(f, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function f0(e, t, a, r, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (yr(f, r) && e.ref === t.ref)
        if (yt = !1, t.pendingProps = r = f, Fd(e, c))
          (e.flags & 131072) !== 0 && (yt = !0);
        else
          return t.lanes = e.lanes, Pi(e, t, c);
    }
    return Bd(
      e,
      t,
      a,
      r,
      c
    );
  }
  function d0(e, t, a, r) {
    var c = r.children, f = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | a : a, e !== null) {
          for (r = t.child = e.child, c = 0; r !== null; )
            c = c | r.lanes | r.childLanes, r = r.sibling;
          r = c & ~f;
        } else r = 0, t.child = null;
        return h0(
          e,
          t,
          f,
          a,
          r
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && oc(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? py(t, f) : pd(), gy(t);
      else
        return r = t.lanes = 536870912, h0(
          e,
          t,
          f !== null ? f.baseLanes | a : a,
          a,
          r
        );
    } else
      f !== null ? (oc(t, f.cachePool), py(t, f), ya(), t.memoizedState = null) : (e !== null && oc(t, null), pd(), ya());
    return Tt(e, t, c, a), t.child;
  }
  function jr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function h0(e, t, a, r, c) {
    var f = cd();
    return f = f === null ? null : { parent: gt._currentValue, pool: f }, t.memoizedState = {
      baseLanes: a,
      cachePool: f
    }, e !== null && oc(t, null), pd(), gy(t), e !== null && eo(e, t, r, !0), t.childLanes = c, null;
  }
  function wc(e, t) {
    return t = Tc(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function m0(e, t, a) {
    return so(t, e.child, null, a), e = wc(t, t.pendingProps), e.flags |= 2, gn(t), t.memoizedState = null, e;
  }
  function fD(e, t, a) {
    var r = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (De) {
        if (r.mode === "hidden")
          return e = wc(t, r), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, jr(null, e);
        if (vd(t), (e = tt) ? (e = Ub(
          e,
          Nn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: la !== null ? { id: oi, overflow: si } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Qv(e), a.return = t, t.child = a, Mt = t, tt = null)) : e = null, e === null) throw ua(t);
        return t.lanes = 536870912, null;
      }
      return wc(t, r);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var b = f.dehydrated;
      if (vd(t), c)
        if (t.flags & 256)
          t.flags &= -257, t = m0(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (yt || eo(e, t, a, !1), c = (a & e.childLanes) !== 0, yt || c) {
        if (ga.current === null) {
          if (r = et, r !== null && (b = ev(r, a), b !== 0 && b !== f.retryLane))
            throw f.retryLane = b, $a(e, b), cn(r, e, b), kd;
          Ic();
        }
        t = m0(
          e,
          t,
          a
        );
      } else
        e = f.treeContext, tt = jn(b.nextSibling), Mt = t, De = !0, ca = null, Nn = !1, e !== null && ey(t, e), t = wc(t, r), t.flags |= 134221824;
      return t;
    }
    return e = Ni(e.child, {
      mode: r.mode,
      children: r.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function as(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Bd(e, t, a, r, c) {
    return to(t), a = xd(
      e,
      t,
      a,
      r,
      void 0,
      c
    ), r = Sd(), e !== null && !yt ? (wd(e, t, c), Pi(e, t, c)) : (De && r && ec(t), t.flags |= 1, Tt(e, t, a, c), t.child);
  }
  function p0(e, t, a, r, c, f) {
    return to(t), t.updateQueue = null, a = yy(
      t,
      r,
      a,
      c
    ), vy(e), r = Sd(), e !== null && !yt ? (wd(e, t, f), Pi(e, t, f)) : (De && r && ec(t), t.flags |= 1, Tt(e, t, a, f), t.child);
  }
  function g0(e, t, a, r, c) {
    if (to(t), t.stateNode === null) {
      var f = Ko, b = a.contextType;
      typeof b == "object" && b !== null && (f = Bt(b)), f = new a(r, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Vd, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = r, f.state = t.memoizedState, f.refs = {}, fd(t), b = a.contextType, f.context = typeof b == "object" && b !== null ? Bt(b) : Ko, f.state = t.memoizedState, b = a.getDerivedStateFromProps, typeof b == "function" && (Ld(
        t,
        a,
        b,
        r
      ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (b = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), b !== f.state && Vd.enqueueReplaceState(f, f.state, null), Dr(t, r, f, c), Rr(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      f = t.stateNode;
      var E = t.memoizedProps, j = lo(a, E);
      f.props = j;
      var k = f.context, q = a.contextType;
      b = Ko, typeof q == "object" && q !== null && (b = Bt(q));
      var Z = a.getDerivedStateFromProps;
      q = typeof Z == "function" || typeof f.getSnapshotBeforeUpdate == "function", E = t.pendingProps !== E, q || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (E || k !== b) && n0(
        t,
        f,
        r,
        b
      ), ha = !1;
      var V = t.memoizedState;
      f.state = V, Dr(t, r, f, c), Rr(), k = t.memoizedState, E || V !== k || ha ? (typeof Z == "function" && (Ld(
        t,
        a,
        Z,
        r
      ), k = t.memoizedState), (j = ha || t0(
        t,
        a,
        j,
        r,
        V,
        k,
        b
      )) ? (q || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = k), f.props = r, f.state = k, f.context = b, r = j) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      f = t.stateNode, dd(e, t), b = t.memoizedProps, q = lo(a, b), f.props = q, Z = t.pendingProps, V = f.context, k = a.contextType, j = Ko, typeof k == "object" && k !== null && (j = Bt(k)), E = a.getDerivedStateFromProps, (k = typeof E == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (b !== Z || V !== j) && n0(
        t,
        f,
        r,
        j
      ), ha = !1, V = t.memoizedState, f.state = V, Dr(t, r, f, c), Rr();
      var I = t.memoizedState;
      b !== Z || V !== I || ha || e !== null && e.dependencies !== null && ic(e.dependencies) ? (typeof E == "function" && (Ld(
        t,
        a,
        E,
        r
      ), I = t.memoizedState), (q = ha || t0(
        t,
        a,
        q,
        r,
        V,
        I,
        j
      ) || e !== null && e.dependencies !== null && ic(e.dependencies)) ? (k || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, I, j), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        r,
        I,
        j
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = I), f.props = r, f.state = I, f.context = j, r = q) : (typeof f.componentDidUpdate != "function" || b === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return f = r, as(e, t), r = (t.flags & 128) !== 0, f || r ? (f = t.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && r ? (t.child = so(
      t,
      e.child,
      null,
      c
    ), t.child = so(
      t,
      null,
      a,
      c
    )) : Tt(e, t, a, c), t.memoizedState = f.state, e = t.child) : e = Pi(
      e,
      t,
      c
    ), e;
  }
  function v0(e, t, a, r) {
    return Ja(), t.flags |= 256, Tt(e, t, a, r), t.child;
  }
  var Ud = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hd(e) {
    return { baseLanes: e, cachePool: sy() };
  }
  function Id(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= bn), e;
  }
  function y0(e, t, a) {
    var r = t.pendingProps, c = !1, f = (t.flags & 128) !== 0, b;
    if ((b = f) || (b = e !== null && e.memoizedState === null ? !1 : (Ht.current & 2) !== 0), b && (c = !0, t.flags &= -129), b = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (De) {
        if (c ? va(t) : ya(), (e = tt) ? (e = Ub(
          e,
          Nn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: la !== null ? { id: oi, overflow: si } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Qv(e), a.return = t, t.child = a, Mt = t, tt = null)) : e = null, e === null) throw ua(t);
        return Hh(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return f = r.children, r = r.fallback, c ? (ya(), c = t.mode, f = Tc(
        { mode: "hidden", children: f },
        c
      ), r = Qa(
        r,
        c,
        a,
        null
      ), f.return = t, r.return = t, f.sibling = r, t.child = f, r = t.child, r.memoizedState = Hd(a), r.childLanes = Id(
        e,
        b,
        a
      ), t.memoizedState = Ud, jr(null, r)) : (va(t), qd(t, f));
    }
    var E = e.memoizedState;
    if (E !== null) {
      var j = E.dehydrated;
      if (j !== null)
        return dD(
          e,
          t,
          f,
          b,
          r,
          j,
          E,
          a
        );
    }
    return c ? (ya(), c = r.fallback, f = t.mode, E = e.child, j = E.sibling, r = Ni(E, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = E.subtreeFlags & 1206910976, j !== null ? c = Ni(j, c) : (c = Qa(
      c,
      f,
      a,
      null
    ), c.flags |= 2), c.return = t, r.return = t, r.sibling = c, t.child = r, jr(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = Hd(a) : (f = c.cachePool, f !== null ? (E = gt._currentValue, f = f.parent !== E ? { parent: E, pool: E } : f) : f = sy(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: f
    }), r.memoizedState = c, r.childLanes = Id(
      e,
      b,
      a
    ), t.memoizedState = Ud, jr(e.child, r)) : (va(t), a = e.child, e = a.sibling, a = Ni(a, {
      mode: "visible",
      children: r.children
    }), a.return = t, a.sibling = null, e !== null && (b = t.deletions, b === null ? (t.deletions = [e], t.flags |= 16) : b.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function qd(e, t) {
    return t = Tc(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Tc(e, t) {
    return e = on(22, e, null, t), e.lanes = 0, e;
  }
  function Ec(e, t, a) {
    return so(t, e.child, null, a), e = qd(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function dD(e, t, a, r, c, f, b, E) {
    if (a)
      return t.flags & 256 ? (va(t), t.flags &= -257, Ec(
        e,
        t,
        E
      )) : t.memoizedState !== null ? (ya(), t.child = e.child, t.flags |= 128, null) : (ya(), f = c.fallback, b = t.mode, c = Tc(
        { mode: "visible", children: c.children },
        b
      ), f = Qa(
        f,
        b,
        E,
        null
      ), f.flags |= 2, c.return = t, f.return = t, c.sibling = f, t.child = c, so(t, e.child, null, E), c = t.child, c.memoizedState = Hd(E), c.childLanes = Id(
        e,
        r,
        E
      ), t.memoizedState = Ud, jr(null, c));
    if (va(t), Hh(f)) {
      if (r = f.nextSibling && f.nextSibling.dataset, r) var j = r.dgst;
      return r = j, r !== "" && (c = Error(s(419)), c.stack = "", c.digest = r, Sr({ value: c, source: null, stack: null })), Ec(
        e,
        t,
        E
      );
    }
    if (yt || eo(e, t, E, !1), r = (E & e.childLanes) !== 0, yt || r) {
      if (ga.current !== null)
        return Ec(
          e,
          t,
          E
        );
      if (r = et, r !== null && (c = ev(
        r,
        E
      ), c !== 0 && c !== b.retryLane))
        throw b.retryLane = c, $a(e, c), cn(r, e, c), kd;
      return Uh(f) || Ic(), Ec(
        e,
        t,
        E
      );
    }
    return Uh(f) ? (t.flags |= 192, t.child = e.child, null) : (e = b.treeContext, tt = jn(f.nextSibling), Mt = t, De = !0, ca = null, Nn = !1, e !== null && ey(t, e), t = qd(
      t,
      c.children
    ), t.flags |= 134221824, t);
  }
  function b0(e, t, a) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), nc(e.return, t, a);
  }
  function x0(e) {
    for (var t = null; e !== null; ) {
      var a = e.alternate;
      a !== null && fc(a) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function Cc(e, t, a, r, c, f) {
    var b = e.memoizedState;
    b === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: a,
      tailMode: c,
      treeForkCount: f
    } : (b.isBackwards = t, b.rendering = null, b.renderingStartTime = 0, b.last = r, b.tail = a, b.tailMode = c, b.treeForkCount = f);
  }
  function Gd(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var a = t.sibling;
      t.sibling = e.child, e.child = t, t = a;
    }
  }
  function Yd(e, t, a) {
    var r = t.pendingProps, c = r.revealOrder, f = r.tail;
    r = r.children;
    var b = Ht.current;
    if (t.flags & 128)
      return Or(t, b), null;
    var E = (b & 2) !== 0;
    if (E ? (b = b & 1 | 2, t.flags |= 128) : b &= 1, Or(t, b), c === "backwards" && e !== null ? (Gd(e), Tt(e, t, r, a), Gd(e)) : Tt(e, t, r, a), r = De ? xr : 0, !E && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && b0(e, a, t);
        else if (e.tag === 19)
          b0(e, a, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (c) {
      case "backwards":
        a = x0(t.child), a === null ? (c = t.child, t.child = null) : (c = a.sibling, a.sibling = null, Gd(t)), Cc(
          t,
          !0,
          c,
          null,
          f,
          r
        );
        break;
      case "unstable_legacy-backwards":
        for (a = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && fc(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        Cc(
          t,
          !0,
          a,
          null,
          f,
          r
        );
        break;
      case "together":
        Cc(
          t,
          !1,
          null,
          null,
          void 0,
          r
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        a = x0(t.child), a === null ? (c = t.child, t.child = null) : (c = a.sibling, a.sibling = null), Cc(
          t,
          !1,
          c,
          a,
          f,
          r
        );
    }
    return t.child;
  }
  function S0(e, t, a) {
    var r = t.pendingProps;
    return fa(t, t.type, r.value), Tt(e, t, r.children, a), t.child;
  }
  function Pi(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), wa |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (eo(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, a = Ni(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Ni(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Fd(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ic(e)));
  }
  function hD(e, t, a) {
    switch (t.tag) {
      case 3:
        qa(t, t.stateNode.containerInfo), fa(t, gt, e.memoizedState.cache), Ja();
        break;
      case 27:
      case 5:
        er(t);
        break;
      case 4:
        qa(t, t.stateNode.containerInfo);
        break;
      case 10:
        fa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, vd(t), null;
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null) {
          if (r.dehydrated !== null)
            return va(t), t.flags |= 128, null;
          r = eo(
            e,
            t,
            a,
            !1
          );
          var c = t.child.childLanes;
          return r || (a & c) !== 0 ? y0(e, t, a) : (va(t), e = Pi(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        }
        va(t);
        break;
      case 19:
        if (t.flags & 128)
          return Yd(
            e,
            t,
            a
          );
        if (c = (e.flags & 128) !== 0, r = (a & t.childLanes) !== 0, r || (eo(
          e,
          t,
          a,
          !1
        ), r = (a & t.childLanes) !== 0), c) {
          if (r)
            return Yd(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Or(t, Ht.current), r) break;
        return null;
      case 22:
        return t.lanes = 0, d0(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        fa(t, gt, e.memoizedState.cache);
    }
    return Pi(e, t, a);
  }
  function w0(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        yt = !0;
      else {
        if (!Fd(e, a) && (t.flags & 128) === 0)
          return yt = !1, hD(
            e,
            t,
            a
          );
        yt = (e.flags & 131072) !== 0;
      }
    else
      yt = !1, De && (t.flags & 1048576) !== 0 && Wv(t, xr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var r = t.pendingProps;
          if (e = ao(t.elementType), t.type = e, typeof e == "function")
            Wf(e) ? (r = lo(e, r), t.tag = 1, t = g0(
              null,
              t,
              e,
              r,
              a
            )) : (t.tag = 0, t = Bd(
              null,
              t,
              e,
              r,
              a
            ));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === G) {
                t.tag = 11, t = c0(
                  null,
                  t,
                  e,
                  r,
                  a
                );
                break e;
              } else if (c === se) {
                t.tag = 14, t = u0(
                  null,
                  t,
                  e,
                  r,
                  a
                );
                break e;
              } else if (c === he) {
                t.tag = 10, t.type = e, t = S0(
                  null,
                  t,
                  a
                );
                break e;
              }
            }
            throw t = ee(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return Bd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return r = t.type, c = lo(
          r,
          t.pendingProps
        ), g0(
          e,
          t,
          r,
          c,
          a
        );
      case 3:
        e: {
          if (qa(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          r = t.pendingProps;
          var f = t.memoizedState;
          c = f.element, dd(e, t), Dr(t, r, null, a);
          var b = t.memoizedState;
          if (r = b.cache, fa(t, gt, r), r !== f.cache && sd(
            t,
            [gt],
            a,
            !0
          ), Rr(), r = b.element, f.isDehydrated)
            if (f = {
              element: r,
              isDehydrated: !1,
              cache: b.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = v0(
                e,
                t,
                r,
                a
              );
              break e;
            } else if (r !== c) {
              c = Dn(
                Error(s(424)),
                t
              ), Sr(c), t = v0(
                e,
                t,
                r,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, tt = jn(e.firstChild), Mt = t, De = !0, ca = null, Nn = !0, a = dy(
                t,
                null,
                r,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 134221824, a = a.sibling;
          else {
            if (Ja(), r === c) {
              t = Pi(
                e,
                t,
                a
              );
              break e;
            }
            Tt(e, t, r, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return as(e, t), e === null ? (a = Xb(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : De || (t.stateNode = Ab(
          t.type,
          t.pendingProps,
          ni.current,
          t
        )) : t.memoizedState = Xb(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return er(t), e === null && De && (r = t.stateNode = qb(
          t.type,
          t.pendingProps,
          ni.current
        ), Mt = t, Nn = !0, c = tt, Aa(t.type) ? (Ih = c, tt = jn(r.firstChild)) : tt = c), Tt(
          e,
          t,
          t.pendingProps.children,
          a
        ), as(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && De && ((c = r = tt) && (r = r2(
          r,
          t.type,
          t.pendingProps,
          Nn
        ), r !== null ? (t.stateNode = r, Mt = t, tt = jn(r.firstChild), Nn = !1, c = !0) : c = !1), c || ua(t)), er(t), c = t.type, f = t.pendingProps, b = e !== null ? e.memoizedProps : null, r = f.children, jh(c, f) ? r = null : b !== null && jh(c, b) && (t.flags |= 32), t.memoizedState !== null && (c = xd(
          e,
          t,
          nD,
          null,
          null,
          a
        ), ws._currentValue = c), as(e, t), Tt(e, t, r, a), t.child;
      case 6:
        return e === null && De && ((e = a = tt) && (a = l2(
          a,
          t.pendingProps,
          Nn
        ), a !== null ? (t.stateNode = a, Mt = t, tt = null, e = !0) : e = !1), e || ua(t)), null;
      case 13:
        return y0(e, t, a);
      case 4:
        return qa(
          t,
          t.stateNode.containerInfo
        ), r = t.pendingProps, e === null ? t.child = so(
          t,
          null,
          r,
          a
        ) : Tt(e, t, r, a), t.child;
      case 11:
        return c0(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return r = t.pendingProps, as(e, t), Tt(e, t, r, a), t.child;
      case 8:
        return Tt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Tt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return S0(e, t, a);
      case 9:
        return c = t.type._context, r = t.pendingProps.children, to(t), c = Bt(c), r = r(c), t.flags |= 1, Tt(e, t, r, a), t.child;
      case 14:
        return u0(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return f0(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Yd(e, t, a);
      case 31:
        return fD(e, t, a);
      case 22:
        return d0(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return to(t), r = Bt(gt), e === null ? (c = cd(), c === null && (c = et, f = rd(), c.pooledCache = f, f.refCount++, f !== null && (c.pooledCacheLanes |= a), c = f), t.memoizedState = { parent: r, cache: c }, fd(t), fa(t, gt, c)) : ((e.lanes & a) !== 0 && (dd(e, t), Dr(t, null, null, a), Rr()), c = e.memoizedState, f = t.memoizedState, c.parent !== r ? (c = { parent: r, cache: r }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), fa(t, gt, r)) : (r = f.cache, fa(t, gt, r), r !== c.cache && sd(
          t,
          [gt],
          a,
          !0
        ))), Tt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : De && ec(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : as(e, t), Tt(e, t, r.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function ki(e) {
    e.flags |= 4;
  }
  function Xd(e, t, a, r, c) {
    var f;
    if ((f = (e.mode & 32) !== 0) && (f = a === null ? Qb(t, r) : Qb(t, r) && (r.src !== a.src || r.srcSet !== a.srcSet)), f) {
      if (e.flags |= 16777216, (c & 335544128) === c)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (ib()) e.flags |= 8192;
        else
          throw oo = rc, ud;
    } else e.flags &= -16777217;
  }
  function T0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Jb(t))
      if (ib()) e.flags |= 8192;
      else
        throw oo = rc, ud;
  }
  function Ac(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Qg() : 536870912, e.lanes |= t, cs |= t);
  }
  function zr(e, t) {
    if (!De)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var a = e.tail, r = null; a !== null; )
            a.alternate !== null && (r = a), a = a.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
          break;
        default:
          for (t = e.tail, a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
      }
  }
  function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, r = 0;
    if (t)
      for (var c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, r |= c.subtreeFlags & 1206910976, r |= c.flags & 1206910976, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, r |= c.subtreeFlags, r |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= r, e.childLanes = a, t;
  }
  function mD(e, t, a) {
    var r = t.pendingProps;
    switch (nd(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nt(t), null;
      case 1:
        return nt(t), null;
      case 3:
        return a = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), zi(gt), hn(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Qo(t) ? ki(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ad())), nt(t), null;
      case 26:
        var c = t.type, f = t.memoizedState;
        return e === null ? (ki(t), f !== null ? (nt(t), T0(t, f)) : (nt(t), Xd(
          t,
          c,
          null,
          r,
          a
        ))) : f ? f !== e.memoizedState ? (ki(t), nt(t), T0(t, f)) : (nt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== r && ki(t), nt(t), Xd(
          t,
          c,
          e,
          r,
          a
        )), null;
      case 27:
        if (jo(t), a = ni.current, c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && ki(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(s(166));
            return nt(t), t.subtreeFlags &= -33554433, null;
          }
          e = ht.current, Qo(t) ? ty(t) : (e = qb(c, r, a), t.stateNode = e, ki(t));
        }
        return nt(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (jo(t), c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== r && ki(t);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(s(166));
            return nt(t), t.subtreeFlags &= -33554433, null;
          }
          if (f = ht.current, Qo(t))
            ty(t);
          else {
            var b = Yr(
              ni.current
            );
            switch (f) {
              case 1:
                f = b.createElementNS(
                  "http://www.w3.org/2000/svg",
                  c
                );
                break;
              case 2:
                f = b.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  c
                );
                break;
              default:
                switch (c) {
                  case "svg":
                    f = b.createElementNS(
                      "http://www.w3.org/2000/svg",
                      c
                    );
                    break;
                  case "math":
                    f = b.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    f = b.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof r.is == "string" ? b.createElement("select", {
                      is: r.is
                    }) : b.createElement("select"), r.multiple ? f.multiple = !0 : r.size && (f.size = r.size);
                    break;
                  default:
                    f = typeof r.is == "string" ? b.createElement(c, { is: r.is }) : b.createElement(c);
                }
            }
            f[kt] = t, f[an] = r;
            e: for (b = t.child; b !== null; ) {
              if (b.tag === 5 || b.tag === 6)
                f.appendChild(b.stateNode);
              else if (b.tag !== 4 && b.tag !== 27 && b.child !== null) {
                b.child.return = b, b = b.child;
                continue;
              }
              if (b === t) break e;
              for (; b.sibling === null; ) {
                if (b.return === null || b.return === t)
                  break e;
                b = b.return;
              }
              b.sibling.return = b.return, b = b.sibling;
            }
            t.stateNode = f;
            e: switch (qt(f, c, r), c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
            r && ki(t);
          }
        }
        return nt(t), t.subtreeFlags &= -33554433, Xd(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== r && ki(t);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = ni.current, Qo(t)) {
            if (e = t.stateNode, a = t.memoizedProps, r = null, c = Mt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  r = c.memoizedProps;
              }
            e[kt] = t, e = !!(e.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || wb(e.nodeValue, a)), e || ua(t, !0);
          } else
            e = Yr(e).createTextNode(
              r
            ), e[kt] = t, t.stateNode = e;
        }
        return nt(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (r = Qo(t), a !== null) {
            if (e === null) {
              if (!r) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[kt] = t;
            } else
              Ja(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nt(t), e = !1;
          } else
            a = ad(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (gn(t), t) : (gn(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return nt(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Qo(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[kt] = t;
            } else
              Ja(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nt(t), c = !1;
          } else
            c = ad(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (gn(t), t) : (gn(t), null);
        }
        return gn(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = r !== null, e = e !== null && e.memoizedState !== null, a && (r = t.child, c = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (c = r.alternate.memoizedState.cachePool.pool), f = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (f = r.memoizedState.cachePool.pool), f !== c && (r.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Ac(t, t.updateQueue), nt(t), null);
      case 4:
        return hn(), e === null && Dh(t.stateNode.containerInfo), t.flags |= 67108864, nt(t), null;
      case 10:
        return zi(t.type), nt(t), null;
      case 19:
        if (yd(t), r = t.memoizedState, r === null) return nt(t), null;
        if (c = (t.flags & 128) !== 0, f = r.rendering, f === null)
          if (c) zr(r, !1);
          else {
            if (ct !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = fc(e), f !== null) {
                  for (t.flags |= 128, zr(r, !1), e = f.updateQueue, t.updateQueue = e, Ac(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    $v(a, e), a = a.sibling;
                  return Or(
                    t,
                    Ht.current & 1 | 2
                  ), De && _i(t, r.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            r.tail !== null && Kt() > kc && (t.flags |= 128, c = !0, zr(r, !1), t.lanes = 4194304);
          }
        else {
          if (!c)
            if (e = fc(f), e !== null) {
              if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, Ac(t, e), zr(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !f.alternate && !De)
                return nt(t), null;
            } else
              2 * Kt() - r.renderingStartTime > kc && a !== 536870912 && (t.flags |= 128, c = !0, zr(r, !1), t.lanes = 4194304);
          r.isBackwards ? (f.sibling = t.child, t.child = f) : (e = r.last, e !== null ? e.sibling = f : t.child = f, r.last = f);
        }
        if (r.tail !== null) {
          e = r.tail;
          e: {
            for (a = e; a !== null; ) {
              if (a.alternate !== null) {
                a = !1;
                break e;
              }
              a = a.sibling;
            }
            a = !0;
          }
          return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Kt(), e.sibling = null, f = Ht.current, f = c ? f & 1 | 2 : f & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !a || De ? Or(t, f) : (a = f, Pe(Ut, t), Pe(Ht, a), Ft === null && (Ft = t)), De && _i(t, r.treeForkCount), e;
        }
        return nt(t), null;
      case 22:
      case 23:
        return gn(t), gd(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), a = t.updateQueue, a !== null && Ac(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== a && (t.flags |= 2048), e !== null && We(io), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), zi(gt), nt(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, nt(t), null;
    }
    throw Error(s(156, t.tag));
  }
  function pD(e, t) {
    switch (nd(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return zi(gt), hn(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return jo(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (gn(t), t.alternate === null)
            throw Error(s(340));
          Ja();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (gn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Ja();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return yd(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return hn(), null;
      case 10:
        return zi(t.type), null;
      case 22:
      case 23:
        return gn(t), gd(), e !== null && We(io), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return zi(gt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function E0(e, t) {
    switch (nd(t), t.tag) {
      case 3:
        zi(gt), hn();
        break;
      case 26:
      case 27:
      case 5:
        jo(t);
        break;
      case 4:
        hn();
        break;
      case 31:
        t.memoizedState !== null && gn(t);
        break;
      case 13:
        gn(t);
        break;
      case 19:
        yd(t);
        break;
      case 10:
        zi(t.type);
        break;
      case 22:
      case 23:
        gn(t), gd(), e !== null && We(io);
        break;
      case 24:
        zi(gt);
    }
  }
  function Lr(e, t) {
    try {
      var a = t.updateQueue, r = a !== null ? a.lastEffect : null;
      if (r !== null) {
        var c = r.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            r = void 0;
            var f = a.create, b = a.inst;
            r = f(), b.destroy = r;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (E) {
      Xe(t, t.return, E);
    }
  }
  function ba(e, t, a) {
    try {
      var r = t.updateQueue, c = r !== null ? r.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        r = f;
        do {
          if ((r.tag & e) === e) {
            var b = r.inst, E = b.destroy;
            if (E !== void 0) {
              b.destroy = void 0, c = t;
              var j = a, k = E;
              try {
                k();
              } catch (q) {
                Xe(
                  c,
                  j,
                  q
                );
              }
            }
          }
          r = r.next;
        } while (r !== f);
      }
    } catch (q) {
      Xe(t, t.return, q);
    }
  }
  function C0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        my(t, a);
      } catch (r) {
        Xe(e, e.return, r);
      }
    }
  }
  function A0(e, t, a) {
    a.props = lo(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (r) {
      Xe(e, t, r);
    }
  }
  function ri(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            var c = e.stateNode, f = Oi(e.memoizedProps, c);
            (c.ref === null || c.ref.name !== f) && (c.ref = jb(f)), r = c.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var b = new Sn(e);
              m(
                e.child,
                !1,
                o2,
                b,
                void 0,
                void 0
              ), e.stateNode = b;
            }
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(r) : a.current = r;
      }
    } catch (E) {
      Xe(e, t, E);
    }
  }
  function It(e, t) {
    var a = e.ref, r = e.refCleanup;
    if (a !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (c) {
          Xe(e, t, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          Xe(e, t, c);
        }
      else a.current = null;
  }
  function Rc(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var a = 0; a < t.length; a++)
        Bb(
          e.stateNode,
          t[a]
        );
  }
  function R0(e) {
    for (var t = e.return; t !== null && (Zd(t) && Bb(e.stateNode, t.stateNode), !Kd(t)); )
      t = t.return;
  }
  function Vr(e) {
    for (var t = e.return; t !== null && (Zd(t) && s2(e.stateNode, t.stateNode), !Kd(t)); )
      t = t.return;
  }
  function Kd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Zd(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function $d(e) {
    var t = e.type, a = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && r.focus();
          break e;
        case "img":
          a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet);
      }
    } catch (c) {
      Xe(e, e.return, c);
    }
  }
  function Qd(e, t, a) {
    try {
      var r = e.stateNode;
      HD(r, e.type, a, t), r[an] = t;
    } catch (c) {
      Xe(e, e.return, c);
    }
  }
  function D0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Aa(e.type) || e.tag === 4;
  }
  function Jd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || D0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Aa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Wd(e, t, a, r) {
    var c = e.tag;
    if (c === 5 || c === 6)
      c = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(c, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(c), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = ai)), Rc(e, r), Ue = !0;
    else if (c !== 4 && (c === 27 && (Rc(e, r), r = null, Aa(e.type) && (a = e.stateNode, t = null)), e = e.child, e !== null))
      for (Wd(
        e,
        t,
        a,
        r
      ), e = e.sibling; e !== null; )
        Wd(
          e,
          t,
          a,
          r
        ), e = e.sibling;
  }
  function Dc(e, t, a, r) {
    var c = e.tag;
    if (c === 5 || c === 6)
      c = e.stateNode, t ? a.insertBefore(c, t) : a.appendChild(c), Rc(e, r), Ue = !0;
    else if (c !== 4 && (c === 27 && (Rc(e, r), r = null, Aa(e.type) && (a = e.stateNode)), e = e.child, e !== null))
      for (Dc(
        e,
        t,
        a,
        r
      ), e = e.sibling; e !== null; )
        Dc(
          e,
          t,
          a,
          r
        ), e = e.sibling;
  }
  function O0(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var r = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      qt(t, r, a), t[kt] = e, t[an] = a;
    } catch (f) {
      Xe(e, e.return, f);
    }
  }
  var Oc = !1, vn = null;
  function M0(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Oc = !0);
  }
  var li = null;
  function N0() {
    var e = li;
    return li = null, e;
  }
  var sn = 0;
  function os(e, t, a, r, c) {
    return sn = 0, _0(
      e.child,
      t,
      a,
      r,
      c
    );
  }
  function _0(e, t, a, r, c) {
    for (var f = !1; e !== null; ) {
      if (e.tag === 5) {
        var b = e.stateNode;
        if (r !== null) {
          var E = Vh(b);
          r.push(E), E.view && (f = !0);
        } else
          f || Vh(b).view && (f = !0);
        Oc = !0, Nb(
          b,
          sn === 0 ? t : t + "_" + sn,
          a
        ), sn++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && c || _0(
        e.child,
        t,
        a,
        r,
        c
      ) && (f = !0));
      e = e.sibling;
    }
    return f;
  }
  function ci(e, t) {
    for (; e !== null; )
      e.tag === 5 ? _b(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || ci(
        e.child,
        t
      )), e = e.sibling;
  }
  function Mc(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (Mc(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(s(544));
          var a = t.name;
          t = Mi(t.default, t.share), t !== "none" && (os(
            e,
            a,
            t,
            null,
            !1
          ) || ci(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function eh(e, t) {
    if (e.tag === 30) {
      var a = e.stateNode, r = e.memoizedProps, c = Oi(r, a), f = Mi(
        r.default,
        a.paired ? r.share : r.enter
      );
      f !== "none" ? os(e, c, f, null, !1) ? (Mc(e), a.paired || t || hs(e, r.onEnter)) : ci(e.child, !1) : Mc(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        eh(e, t), e = e.sibling;
    else Mc(e);
  }
  function th(e) {
    if (vn !== null && vn.size !== 0) {
      var t = vn;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var a = e.memoizedProps, r = a.name;
              if (r != null && r !== "auto") {
                var c = t.get(r);
                if (c !== void 0) {
                  var f = Mi(
                    a.default,
                    a.share
                  );
                  if (f !== "none" && (os(
                    e,
                    r,
                    f,
                    null,
                    !1
                  ) ? (f = e.stateNode, c.paired = f, f.paired = c, hs(e, a.onShare)) : ci(e.child, !1)), t.delete(r), t.size === 0) break;
                }
              }
            }
            th(e);
          }
          e = e.sibling;
        }
    }
  }
  function nh(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, a = Oi(t, e.stateNode), r = vn !== null ? vn.get(a) : void 0, c = Mi(
        t.default,
        r !== void 0 ? t.share : t.exit
      );
      c !== "none" && (os(e, a, c, null, !1) ? r !== void 0 ? (c = e.stateNode, r.paired = c, c.paired = r, vn.delete(a), hs(e, t.onShare)) : hs(e, t.onExit) : ci(e.child, !1)), vn !== null && th(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        nh(e), e = e.sibling;
    else
      vn !== null && th(e);
  }
  function j0(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, a = Oi(t, e.stateNode);
        t = Mi(t.default, t.update), e.flags &= -5, t !== "none" && os(
          e,
          a,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && j0(e);
      e = e.sibling;
    }
  }
  function ih(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, ci(e.child, !1));
          }
          ih(e);
        }
        e = e.sibling;
      }
  }
  function Nc(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, ci(e.child, !1), ih(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Nc(e), e = e.sibling;
    else ih(e);
  }
  function z0(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? ci(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && z0(e), e = e.sibling;
  }
  function ah(e, t, a, r, c, f, b) {
    for (var E = !1; t !== null; ) {
      if (t.tag === 5) {
        var j = t.stateNode;
        if (f !== null && sn < f.length) {
          var k = f[sn], q = Vh(j);
          (k.view || q.view) && (E = !0);
          var Z;
          if (Z = (e.flags & 4) === 0)
            if (q.clip) Z = !0;
            else {
              Z = k.rect;
              var V = q.rect;
              Z = Z.y !== V.y || Z.x !== V.x || Z.height !== V.height || Z.width !== V.width;
            }
          Z && (e.flags |= 4), q.abs ? q = !k.abs : (k = k.rect, q = q.rect, q = k.height !== q.height || k.width !== q.width), q && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Nb(
          j,
          sn === 0 ? a : a + "_" + sn,
          c
        ), E && (e.flags & 4) !== 0 || (li === null && (li = []), li.push(
          j,
          sn === 0 ? r : r + "_" + sn,
          t.memoizedProps
        )), sn++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && b ? e.flags |= t.flags & 32 : ah(
        e,
        t.child,
        a,
        r,
        c,
        f,
        b
      ) && (E = !0));
      t = t.sibling;
    }
    return E;
  }
  function L0(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var a = e.memoizedProps, r = e.stateNode, c = Oi(a, r), f = Mi(a.default, a.update), b;
        b = e.memoizedState, e.memoizedState = null, r = e;
        var E = e.child;
        sn = 0, c = ah(
          r,
          E,
          c,
          c,
          f,
          b,
          !1
        ), (e.flags & 4) !== 0 && c && hs(e, a.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && L0(e);
      e = e.sibling;
    }
  }
  var Nt = !1, Ge = !1, ui = !1, oh = !1, V0 = typeof WeakSet == "function" ? WeakSet : Set, _t = null, fi = !1, Pr = !1, _c = !1, sh = !1;
  function gD(e, t, a) {
    if (e = e.containerInfo, Nh = Ts, e = Uv(e), Ff(e)) {
      if ("selectionStart" in e)
        var r = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          r = (r = e.ownerDocument) && r.defaultView || window;
          var c = r.getSelection && r.getSelection();
          if (c && c.rangeCount !== 0) {
            r = c.anchorNode;
            var f = c.anchorOffset, b = c.focusNode;
            c = c.focusOffset;
            try {
              r.nodeType, b.nodeType;
            } catch {
              r = null;
              break e;
            }
            var E = 0, j = -1, k = -1, q = 0, Z = 0, V = e, I = null;
            t: for (; ; ) {
              for (var ce; V !== r || f !== 0 && V.nodeType !== 3 || (j = E + f), V !== b || c !== 0 && V.nodeType !== 3 || (k = E + c), V.nodeType === 3 && (E += V.nodeValue.length), (ce = V.firstChild) !== null; )
                I = V, V = ce;
              for (; ; ) {
                if (V === e) break t;
                if (I === r && ++q === f && (j = E), I === b && ++Z === c && (k = E), (ce = V.nextSibling) !== null) break;
                V = I, I = V.parentNode;
              }
              V = ce;
            }
            r = j === -1 || k === -1 ? null : { start: j, end: k };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (_h = { focusedElem: e, selectionRange: r }, Ts = !1, a = (a & 335544064) === a, _t = t, t = a ? 9270 : 1024; _t !== null; ) {
      if (e = _t, a && (r = e.deletions, r !== null))
        for (f = 0; f < r.length; f++)
          a && nh(r[f]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        a && M0(e), jc(a);
      else {
        if (e.tag === 22) {
          if (r = e.alternate, e.memoizedState !== null) {
            r !== null && r.memoizedState === null && a && nh(r), jc(a);
            continue;
          } else if (r !== null && r.memoizedState !== null) {
            a && M0(e), jc(a);
            continue;
          }
        }
        r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, _t = r) : (a && j0(e), jc(a));
      }
    }
    vn = null;
  }
  function jc(e) {
    for (; _t !== null; ) {
      var t = _t, a = e, r = t.alternate, c = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((c & 1024) !== 0 && r !== null) {
            a = void 0, c = r.memoizedProps, r = r.memoizedState;
            var f = t.stateNode;
            try {
              var b = lo(
                t.type,
                c
              );
              a = f.getSnapshotBeforeUpdate(
                b,
                r
              ), f.__reactInternalSnapshotBeforeUpdate = a;
            } catch (E) {
              Xe(t, t.return, E);
            }
          }
          break;
        case 3:
          if ((c & 1024) !== 0) {
            if (r = t.stateNode.containerInfo, a = r.nodeType, a === 9)
              Bh(r);
            else if (a === 1)
              switch (r.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Bh(r);
                  break;
                default:
                  r.textContent = "";
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
          a && r !== null && (a = Oi(
            r.memoizedProps,
            r.stateNode
          ), c = t.memoizedProps, c = Mi(c.default, c.update), c !== "none" && os(
            r,
            a,
            c,
            r.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((c & 1024) !== 0) throw Error(s(163));
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, _t = r;
        break;
      }
      _t = t.return;
    }
  }
  function P0(e, t, a) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        di(e, a), r & 4 && Lr(5, a);
        break;
      case 1:
        if (di(e, a), r & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (b) {
              Xe(a, a.return, b);
            }
          else {
            var c = lo(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (b) {
              Xe(
                a,
                a.return,
                b
              );
            }
          }
        r & 64 && C0(a), r & 512 && ri(a, a.return);
        break;
      case 3:
        if (di(e, a), r & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            my(e, t);
          } catch (b) {
            Xe(a, a.return, b);
          }
        }
        break;
      case 27:
        t === null && r & 4 && O0(a);
      case 26:
      case 5:
        di(e, a), t === null && r & 4 && $d(a), r & 512 && ri(a, a.return);
        break;
      case 12:
        di(e, a);
        break;
      case 31:
        di(e, a), r & 4 && H0(e, a);
        break;
      case 13:
        di(e, a), r & 4 && I0(e, a), r & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = DD.bind(
          null,
          a
        ), c2(e, a))));
        break;
      case 22:
        if (r = a.memoizedState !== null || Nt, !r) {
          var f = t !== null && t.memoizedState !== null || Ge;
          t = Nt, c = Ge, Nt = r, (Ge = f) && !c ? (r = 2, (a.subtreeFlags & 8772) !== 0 && (r |= 1), Gn(
            e,
            a,
            r
          )) : di(e, a), Nt = t, Ge = c;
        }
        break;
      case 30:
        di(e, a), r & 512 && ri(a, a.return);
        break;
      case 7:
        r & 512 && ri(a, a.return);
      default:
        di(e, a);
    }
  }
  function rh(e, t) {
    for (e = e.child; e !== null; )
      k0(e, t), e = e.sibling;
  }
  function k0(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var a = e.stateNode;
          if (t) {
            var r = a.style;
            typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
          } else {
            var c = e.stateNode, f = e.memoizedProps.style, b = f != null && f.hasOwnProperty("display") ? f.display : null;
            c.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
          }
        } catch (j) {
          Xe(e, e.return, j);
        }
        lh(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, Ue = !0;
        } catch (j) {
          Xe(e, e.return, j);
        }
        break;
      case 18:
        try {
          var E = e.stateNode;
          t ? Mb(E, !0) : Mb(e.stateNode, !1);
        } catch (j) {
          Xe(e, e.return, j);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && rh(e, t);
        break;
      default:
        rh(e, t);
    }
  }
  function lh(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var a = e, r = t;
          switch (a.tag) {
            case 4:
              k0(a, r);
              break e;
            case 22:
              a.memoizedState === null && lh(a, r);
              break e;
            default:
              lh(a, r);
          }
        }
        e = e.sibling;
      }
  }
  function B0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, B0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && kl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var it = null, rn = !1;
  function In(e, t, a) {
    for (a = a.child; a !== null; )
      U0(e, t, a), a = a.sibling;
  }
  function U0(e, t, a) {
    if ($e && typeof $e.onCommitFiberUnmount == "function")
      try {
        $e.onCommitFiberUnmount(rt, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Ge || It(a, t), In(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && !Ge && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Ge || It(a, t), Vr(a);
        var r = it, c = rn;
        Aa(a.type) && (it = a.stateNode, rn = !1), In(
          e,
          t,
          a
        ), Gb(
          a.stateNode,
          a.type,
          a.memoizedProps
        ), it = r, rn = c;
        break;
      case 5:
        Ge || It(a, t), Vr(a);
      case 6:
        if (a.tag === 6 && Vr(a), r = it, c = rn, it = null, In(
          e,
          t,
          a
        ), it = r, rn = c, it !== null)
          if (rn)
            try {
              (it.nodeType === 9 ? it.body : it.nodeName === "HTML" ? it.ownerDocument.body : it).removeChild(a.stateNode), Ue = !0;
            } catch (f) {
              Xe(
                a,
                t,
                f
              );
            }
          else
            try {
              it.removeChild(a.stateNode), Ue = !0;
            } catch (f) {
              Xe(
                a,
                t,
                f
              );
            }
        break;
      case 18:
        it !== null && (rn ? (e = it, Ob(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Es(e)) : Ob(it, a.stateNode));
        break;
      case 4:
        r = it, c = rn, it = a.stateNode.containerInfo, rn = !0, In(
          e,
          t,
          a
        ), it = r, rn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ba(2, a, t), Ge || ba(4, a, t), In(
          e,
          t,
          a
        );
        break;
      case 1:
        Ge || (It(a, t), r = a.stateNode, typeof r.componentWillUnmount == "function" && A0(
          a,
          t,
          r
        )), In(
          e,
          t,
          a
        );
        break;
      case 21:
        In(
          e,
          t,
          a
        );
        break;
      case 22:
        Ge = (r = Ge) || a.memoizedState !== null, In(
          e,
          t,
          a
        ), Ge = r;
        break;
      case 30:
        It(a, t), In(
          e,
          t,
          a
        );
        break;
      case 7:
        Ge || It(a, t), In(
          e,
          t,
          a
        );
        break;
      default:
        In(
          e,
          t,
          a
        );
    }
  }
  function H0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Es(e);
      } catch (a) {
        Xe(t, t.return, a);
      }
    }
  }
  function I0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Es(e);
      } catch (a) {
        Xe(t, t.return, a);
      }
  }
  function vD(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new V0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new V0()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function zc(e, t) {
    var a = vD(e);
    t.forEach(function(r) {
      if (!a.has(r)) {
        a.add(r);
        var c = OD.bind(null, e, r);
        r.then(c, c);
      }
    });
  }
  function Jt(e, t, a) {
    var r = t.deletions;
    if (r !== null)
      for (var c = 0; c < r.length; c++) {
        var f = r[c], b = e, E = t, j = E;
        e: for (; j !== null; ) {
          switch (j.tag) {
            case 27:
              if (Aa(j.type)) {
                it = j.stateNode, rn = !1;
                break e;
              }
              break;
            case 5:
              it = j.stateNode, rn = !1;
              break e;
            case 3:
            case 4:
              it = j.stateNode.containerInfo, rn = !0;
              break e;
          }
          j = j.return;
        }
        if (it === null) throw Error(s(160));
        U0(b, E, f), it = null, rn = !1, b = f.alternate, b !== null && (b.return = null), f.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        q0(t, e, a), t = t.sibling;
  }
  var qn = null;
  function q0(e, t, a) {
    var r = e.alternate, c = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (c & 4 && (r = e.updateQueue, r = r !== null ? r.events : null, r !== null))
          for (var f = 0; f < r.length; f++) {
            var b = r[f];
            b.ref.impl = b.nextImpl;
          }
        Jt(t, e, a), Wt(e), c & 4 && (ba(3, e, e.return), Lr(3, e), ba(5, e, e.return));
        break;
      case 1:
        Jt(t, e, a), Wt(e), c & 512 && (Ge || r === null || It(r, r.return)), c & 64 && Nt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? t : a.concat(t))));
        break;
      case 26:
        if (f = qn, Jt(t, e, a), Wt(e), c & 512 && (Ge || r === null || It(r, r.return)), c & 4)
          if (c = r !== null ? r.memoizedState : null, a = e.memoizedState, r === null)
            if (a === null)
              if (e.stateNode === null)
                if (Nt)
                  e.stateNode = Ab(
                    e.type,
                    e.memoizedProps,
                    t.containerInfo,
                    e
                  );
                else {
                  e: {
                    t = e.type, a = e.memoizedProps, c = f.ownerDocument || f;
                    t: switch (t) {
                      case "title":
                        r = c.getElementsByTagName("title")[0], (!r || r[cr] || r[kt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = c.createElement(t), c.head.insertBefore(
                          r,
                          c.querySelector("head > title")
                        )), qt(r, t, a), r[kt] = e, Ot(r), t = r;
                        break e;
                      case "link":
                        if (f = $b(
                          "link",
                          "href",
                          c
                        ).get(t + (a.href || ""))) {
                          for (b = 0; b < f.length; b++)
                            if (r = f[b], r.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && r.getAttribute("rel") === (a.rel == null ? null : a.rel) && r.getAttribute("title") === (a.title == null ? null : a.title) && r.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(b, 1);
                              break t;
                            }
                        }
                        r = c.createElement(t), qt(r, t, a), c.head.appendChild(r);
                        break;
                      case "meta":
                        if (f = $b(
                          "meta",
                          "content",
                          c
                        ).get(t + (a.content || ""))) {
                          for (b = 0; b < f.length; b++)
                            if (r = f[b], r.getAttribute("content") === (a.content == null ? null : "" + a.content) && r.getAttribute("name") === (a.name == null ? null : a.name) && r.getAttribute("property") === (a.property == null ? null : a.property) && r.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && r.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(b, 1);
                              break t;
                            }
                        }
                        r = c.createElement(t), qt(r, t, a), c.head.appendChild(r);
                        break;
                      default:
                        throw Error(s(468, t));
                    }
                    r[kt] = e, Ot(r), t = r;
                  }
                  e.stateNode = t;
                }
              else
                Nt || Fh(f, e.type, e.stateNode);
            else
              e.stateNode = Zb(
                f,
                a,
                e.memoizedProps
              );
          else
            c !== a ? (c === null ? (t = r.stateNode, t === null || Ge || t.parentNode.removeChild(t)) : c.count--, a === null ? Nt || Fh(f, e.type, e.stateNode) : Zb(f, a, e.memoizedProps)) : a === null && e.stateNode !== null && Qd(
              e,
              e.memoizedProps,
              r.memoizedProps
            );
        break;
      case 27:
        Jt(t, e, a), Wt(e), c & 512 && (Ge || r === null || It(r, r.return)), r !== null && c & 4 && Qd(
          e,
          e.memoizedProps,
          r.memoizedProps
        );
        break;
      case 5:
        if (f = ui, ui = !1, Jt(t, e, a), ui = f, Wt(e), c & 512 && (Ge || r === null || It(r, r.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            Ho(t, ""), Ue = !0;
          } catch (q) {
            Xe(e, e.return, q);
          }
        }
        c & 4 && e.stateNode != null && (t = e.memoizedProps, Qd(
          e,
          t,
          r !== null ? r.memoizedProps : t
        )), c & 1024 && (oh = !0);
        break;
      case 6:
        if (Jt(t, e, a), Wt(e), c & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          t = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = t, Ue = !0;
          } catch (q) {
            Xe(e, e.return, q);
          }
        }
        break;
      case 3:
        if (Ue = !1, Zc = null, f = qn, qn = Fr(t.containerInfo), Jt(t, e, a), qn = f, Wt(e), c & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            Es(t.containerInfo);
          } catch (q) {
            Xe(e, e.return, q);
          }
        oh && (oh = !1, G0(e)), Ue = !1;
        break;
      case 4:
        c = ui, ui = Nt, r = uv(), f = qn, qn = Fr(
          e.stateNode.containerInfo
        ), Jt(t, e, a), Wt(e), qn = f, Ue && Pr && (_c = !0), Ue = r, ui = c;
        break;
      case 12:
        Jt(t, e, a), Wt(e);
        break;
      case 31:
        Jt(t, e, a), Wt(e), c & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, zc(e, t)));
        break;
      case 13:
        Jt(t, e, a), Wt(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (Pc = Kt()), c & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, zc(e, t)));
        break;
      case 22:
        f = e.memoizedState !== null, b = r !== null && r.memoizedState !== null;
        var E = Nt, j = Ge, k = ui;
        Nt = E || f, ui = k || f, Ge = j || b, Jt(t, e, a), Ge = j, ui = k, Nt = E, Wt(e), c & 8192 && (t = e.stateNode, t._visibility = f ? t._visibility & -2 : t._visibility | 1, !f || r === null || b || Nt || Ge || (t = b || Ge, a = Nt, r = Ge, Nt = f || Nt, Ge = t, xa(e, 2), Nt = a, Ge = r), !f && ui || rh(e, f)), c & 4 && (t = e.updateQueue, t !== null && (a = t.retryQueue, a !== null && (t.retryQueue = null, zc(e, a))));
        break;
      case 19:
        Jt(t, e, a), Wt(e), c & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, zc(e, t)));
        break;
      case 30:
        c & 512 && (Ge || r === null || It(r, r.return)), c = uv(), f = Pr, b = (a & 335544064) === a, E = e.memoizedProps, Pr = b && Mi(
          E.default,
          E.update
        ) !== "none", Jt(t, e, a), Wt(e), b && r !== null && Ue && (e.flags |= 4), Pr = f, Ue = c;
        break;
      case 21:
        break;
      case 7:
        c & 512 && (Ge || r === null || It(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
      default:
        Jt(t, e, a), Wt(e);
    }
  }
  function Wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, r = e.return; r !== null; ) {
          if (D0(r)) {
            a = r;
            break;
          }
          r = r.return;
        }
        r = null;
        for (var c = e.return; c !== null; ) {
          if (Zd(c)) {
            var f = c.stateNode;
            r === null ? r = [f] : r.push(f);
          }
          if (Kd(c)) break;
          c = c.return;
        }
        var b = r;
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var E = a.stateNode, j = Jd(e);
            Dc(
              e,
              j,
              E,
              b
            );
            break;
          case 5:
            var k = a.stateNode;
            a.flags & 32 && (Ho(k, ""), a.flags &= -33);
            var q = Jd(e);
            Dc(
              e,
              q,
              k,
              b
            );
            break;
          case 3:
          case 4:
            var Z = a.stateNode.containerInfo, V = Jd(e);
            Wd(
              e,
              V,
              Z,
              b
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (I) {
        Xe(e, e.return, I);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function G0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        G0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Ts = !0, t.reset(), Ts = !1), e = e.sibling;
      }
  }
  function ss(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Y0(t, e), t = t.sibling;
    else L0(t);
  }
  function Y0(e, t) {
    var a = e.alternate;
    if (a === null) eh(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (sh = fi = !1, N0(), ss(t, e), !fi && !_c) {
            if (e = li, e !== null)
              for (var r = 0; r < e.length; r += 3) {
                a = e[r];
                var c = e[r + 1];
                _b(a, e[r + 2]), a = a.ownerDocument.documentElement, a !== null && a.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + c + ")"
                  }
                );
              }
            e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), sh = !0;
          }
          li = null;
          break;
        case 5:
          ss(t, e);
          break;
        case 4:
          r = fi, fi = !1, ss(t, e), fi && (_c = !0), fi = r;
          break;
        case 22:
          e.memoizedState === null && (a.memoizedState !== null ? eh(e, !1) : ss(t, e));
          break;
        case 30:
          r = fi, c = N0(), fi = !1, ss(t, e), fi && (e.flags |= 4);
          var f = e.memoizedProps, b = e.stateNode;
          t = Oi(f, b), b = Oi(a.memoizedProps, b);
          var E = Mi(f.default, f.update);
          E === "none" ? t = !1 : (f = a.memoizedState, a.memoizedState = null, a = e.child, sn = 0, t = ah(
            e,
            a,
            t,
            b,
            E,
            f,
            !0
          ), sn !== (f === null ? 0 : f.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (hs(
            e,
            e.memoizedProps.onUpdate
          ), li = c) : c !== null && (c.push.apply(c, li), li = c), fi = (e.flags & 32) !== 0 ? !0 : r;
          break;
        default:
          ss(t, e);
      }
  }
  function di(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        P0(e, t.alternate, t), t = t.sibling;
  }
  function xa(e, t) {
    for (e = e.child; e !== null; ) {
      var a = e, r = t;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ba(4, a, a.return), xa(
            a,
            r
          );
          break;
        case 1:
          It(a, a.return);
          var c = a.stateNode;
          typeof c.componentWillUnmount == "function" && A0(
            a,
            a.return,
            c
          ), xa(
            a,
            r
          );
          break;
        case 27:
          (r & 2) !== 0 && Gb(
            a.stateNode,
            a.type,
            a.memoizedProps
          );
        case 5:
          It(a, a.return), a.tag !== 5 && a.tag !== 27 || Vr(a), xa(
            a,
            r
          );
          break;
        case 6:
          Vr(a);
          break;
        case 26:
          It(a, a.return), c = a.stateNode, a.memoizedState !== null || c === null || Ge || c.parentNode.removeChild(c), xa(
            a,
            r
          );
          break;
        case 22:
          a.memoizedState === null && xa(
            a,
            r
          );
          break;
        case 30:
          It(a, a.return), xa(
            a,
            r
          );
          break;
        case 7:
          It(a, a.return);
        default:
          xa(
            a,
            r
          );
      }
      e = e.sibling;
    }
  }
  function Gn(e, t, a) {
    for (a = (t.subtreeFlags & 8772) !== 0 ? a : a & -2, t = t.child; t !== null; ) {
      var r = t.alternate, c = e, f = t, b = f.flags, E = (a & 1) !== 0;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Gn(
            c,
            f,
            a
          ), Lr(4, f);
          break;
        case 1:
          if (Gn(
            c,
            f,
            a
          ), r = f, c = r.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (q) {
              Xe(r, r.return, q);
            }
          if (r = f, c = r.updateQueue, c !== null) {
            var j = r.stateNode;
            try {
              var k = c.shared.hiddenCallbacks;
              if (k !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < k.length; c++)
                  hy(k[c], j);
            } catch (q) {
              Xe(r, r.return, q);
            }
          }
          E && b & 64 && C0(f), ri(f, f.return);
          break;
        case 27:
          (a & 2) !== 0 && O0(f);
        case 5:
          f.tag !== 5 && f.tag !== 27 || R0(f), Gn(
            c,
            f,
            a
          ), E && r === null && b & 4 && $d(f), ri(f, f.return);
          break;
        case 6:
          R0(f);
          break;
        case 26:
          j = f.stateNode, f.memoizedState !== null || j === null || Nt || Fh(
            Fr(j.ownerDocument),
            f.type,
            j
          ), Gn(
            c,
            f,
            a
          ), E && r === null && b & 4 && $d(f), ri(f, f.return);
          break;
        case 12:
          Gn(
            c,
            f,
            a
          );
          break;
        case 31:
          Gn(
            c,
            f,
            a
          ), E && b & 4 && H0(c, f);
          break;
        case 13:
          Gn(
            c,
            f,
            a
          ), E && b & 4 && I0(c, f);
          break;
        case 22:
          f.memoizedState === null && Gn(
            c,
            f,
            a
          ), ri(f, f.return);
          break;
        case 30:
          Gn(
            c,
            f,
            a
          ), ri(f, f.return);
          break;
        case 7:
          ri(f, f.return);
        default:
          Gn(
            c,
            f,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ch(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && wr(a));
  }
  function uh(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && wr(e));
  }
  function _n(e, t, a, r) {
    var c = (a & 335544064) === a;
    if (t.subtreeFlags & (c ? 10262 : 10256))
      for (t = t.child; t !== null; )
        F0(
          e,
          t,
          a,
          r
        ), t = t.sibling;
    else c && z0(t);
  }
  function F0(e, t, a, r) {
    var c = (a & 335544064) === a;
    c && t.alternate === null && t.return !== null && t.return.alternate !== null && Nc(t);
    var f = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _n(
          e,
          t,
          a,
          r
        ), f & 2048 && Lr(9, t);
        break;
      case 1:
        _n(
          e,
          t,
          a,
          r
        );
        break;
      case 3:
        _n(
          e,
          t,
          a,
          r
        ), c && sh && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), f & 2048 && (f = null, t.alternate !== null && (f = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== f && (t.refCount++, f != null && wr(f)));
        break;
      case 12:
        if (f & 2048) {
          _n(
            e,
            t,
            a,
            r
          ), f = t.stateNode;
          try {
            var b = t.memoizedProps, E = b.id, j = b.onPostCommit;
            typeof j == "function" && j(
              E,
              t.alternate === null ? "mount" : "update",
              f.passiveEffectDuration,
              -0
            );
          } catch (k) {
            Xe(t, t.return, k);
          }
        } else
          _n(
            e,
            t,
            a,
            r
          );
        break;
      case 31:
        _n(
          e,
          t,
          a,
          r
        );
        break;
      case 13:
        _n(
          e,
          t,
          a,
          r
        );
        break;
      case 23:
        break;
      case 22:
        b = t.stateNode, E = t.alternate, t.memoizedState !== null ? (c && E !== null && E.memoizedState === null && Nc(E), b._visibility & 2 ? _n(
          e,
          t,
          a,
          r
        ) : kr(
          e,
          t
        )) : (c && E !== null && E.memoizedState !== null && Nc(t), b._visibility & 2 ? _n(
          e,
          t,
          a,
          r
        ) : (b._visibility |= 2, rs(
          e,
          t,
          a,
          r,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), f & 2048 && ch(E, t);
        break;
      case 24:
        _n(
          e,
          t,
          a,
          r
        ), f & 2048 && uh(t.alternate, t);
        break;
      case 30:
        c && (f = t.alternate, f !== null && (ci(f.child, !0), ci(t.child, !0))), _n(
          e,
          t,
          a,
          r
        );
        break;
      default:
        _n(
          e,
          t,
          a,
          r
        );
    }
  }
  function rs(e, t, a, r, c) {
    for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, b = t, E = a, j = r, k = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          rs(
            f,
            b,
            E,
            j,
            c
          ), Lr(8, b);
          break;
        case 23:
          break;
        case 22:
          var q = b.stateNode;
          b.memoizedState !== null ? q._visibility & 2 ? rs(
            f,
            b,
            E,
            j,
            c
          ) : kr(
            f,
            b
          ) : (q._visibility |= 2, rs(
            f,
            b,
            E,
            j,
            c
          )), c && k & 2048 && ch(
            b.alternate,
            b
          );
          break;
        case 24:
          rs(
            f,
            b,
            E,
            j,
            c
          ), c && k & 2048 && uh(b.alternate, b);
          break;
        default:
          rs(
            f,
            b,
            E,
            j,
            c
          );
      }
      t = t.sibling;
    }
  }
  function kr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, r = t, c = r.flags;
        switch (r.tag) {
          case 22:
            kr(a, r), c & 2048 && ch(
              r.alternate,
              r
            );
            break;
          case 24:
            kr(a, r), c & 2048 && uh(r.alternate, r);
            break;
          default:
            kr(a, r);
        }
        t = t.sibling;
      }
  }
  var co = 8192;
  function uo(e, t, a) {
    if (e.subtreeFlags & co)
      for (e = e.child; e !== null; )
        X0(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function X0(e, t, a) {
    switch (e.tag) {
      case 26:
        uo(
          e,
          t,
          a
        ), e.flags & co && (e.memoizedState !== null ? T2(
          a,
          qn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && ex(a, e)));
        break;
      case 5:
        uo(
          e,
          t,
          a
        ), e.flags & co && (e = e.stateNode, (t & 335544128) === t && ex(a, e));
        break;
      case 3:
      case 4:
        var r = qn;
        qn = Fr(e.stateNode.containerInfo), uo(
          e,
          t,
          a
        ), qn = r;
        break;
      case 22:
        e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = co, co = 16777216, uo(
          e,
          t,
          a
        ), co = r) : uo(
          e,
          t,
          a
        ));
        break;
      case 30:
        if ((e.flags & co) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
          var c = e.stateNode;
          c.paired = null, vn === null && (vn = /* @__PURE__ */ new Map()), vn.set(r, c);
        }
        uo(
          e,
          t,
          a
        );
        break;
      default:
        uo(
          e,
          t,
          a
        );
    }
  }
  function K0(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Br(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          _t = r, $0(
            r,
            e
          );
        }
      K0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Z0(e), e = e.sibling;
  }
  function Z0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Br(e), e.flags & 2048 && ba(9, e, e.return);
        break;
      case 3:
        Br(e);
        break;
      case 12:
        Br(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Lc(e)) : Br(e);
        break;
      default:
        Br(e);
    }
  }
  function Lc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          _t = r, $0(
            r,
            e
          );
        }
      K0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ba(8, t, t.return), Lc(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Lc(t));
          break;
        default:
          Lc(t);
      }
      e = e.sibling;
    }
  }
  function $0(e, t) {
    for (; _t !== null; ) {
      var a = _t;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ba(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var r = a.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          wr(a.memoizedState.cache);
      }
      if (r = a.child, r !== null) r.return = a, _t = r;
      else
        e: for (a = e; _t !== null; ) {
          r = _t;
          var c = r.sibling, f = r.return;
          if (B0(r), r === a) {
            _t = null;
            break e;
          }
          if (c !== null) {
            c.return = f, _t = c;
            break e;
          }
          _t = f;
        }
    }
  }
  var yD = {
    getCacheForType: function(e) {
      var t = Bt(gt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return Bt(gt).controller.signal;
    }
  }, bD = typeof WeakMap == "function" ? WeakMap : Map, qe = 0, et = null, Ne = null, je = 0, Fe = 0, yn = null, Sa = !1, ls = !1, fh = !1, Bi = 0, ct = 0, wa = 0, fo = 0, Vc = 0, bn = 0, cs = 0, Ur = null, ln = null, dh = !1, Pc = 0, Q0 = 0, kc = 1 / 0, Bc = null, Ta = null, ot = 0, Yn = null, ho = null, hi = 0, hh = 0, mh = null, J0 = null, us = null, fs = null, ds = null, Hr = 0, Uc = null;
  function xn() {
    return (qe & 2) !== 0 && je !== 0 ? je & -je : ne.T !== null ? Eh() : tv();
  }
  function W0() {
    if (bn === 0)
      if ((je & 536870912) === 0 || De) {
        var e = oa;
        oa <<= 1, (oa & 3932160) === 0 && (oa = 262144), bn = e;
      } else bn = 536870912;
    return e = Ut.current, e !== null && (e.flags |= 32), bn;
  }
  function hs(e, t) {
    if (t != null) {
      var a = e.stateNode, r = a.ref;
      r === null && (r = a.ref = jb(
        Oi(e.memoizedProps, a)
      )), fs === null && (fs = []), fs.push(t.bind(null, r));
    }
  }
  function cn(e, t, a) {
    (e === et && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (ms(e, 0), Ea(
      e,
      je,
      bn,
      !1
    )), lr(e, a), ((qe & 2) === 0 || e !== et) && (e === et && ((qe & 2) === 0 && (fo |= a), ct === 4 && Ea(
      e,
      je,
      bn,
      !1
    )), mi(e));
  }
  function eb(e, t, a) {
    if ((qe & 6) !== 0) throw Error(s(327));
    var r = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || rr(e, t), c = r ? wD(e, t) : gh(e, t, !0), f = r;
    do {
      if (c === 0) {
        ls && !r && Ea(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, f && !xD(a)) {
          c = gh(e, t, !1), f = !1;
          continue;
        }
        if (c === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f)
            var b = 0;
          else
            b = e.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
          if (b !== 0) {
            t = b;
            e: {
              var E = e;
              c = Ur;
              var j = E.current.memoizedState.isDehydrated;
              if (j && (ms(E, b).flags |= 256), b = gh(
                E,
                b,
                !1
              ), b !== 2 && b !== 6) {
                if (fh && !j) {
                  E.errorRecoveryDisabledLanes |= f, fo |= f, c = 4;
                  break e;
                }
                f = ln, ln = c, f !== null && (ln === null ? ln = f : ln.push.apply(
                  ln,
                  f
                ));
              }
              c = b;
            }
            if (f = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          ms(e, 0), Ea(e, t, 0, !0);
          break;
        }
        e: {
          switch (r = e, f = c, f) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              Ea(
                r,
                t,
                bn,
                !Sa
              );
              break e;
            case 2:
              ln = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (c = Pc + 300 - Kt(), 10 < c)) {
            if (Ea(
              r,
              t,
              bn,
              !Sa
            ), Vl(r, 0, !0) !== 0) break e;
            hi = t, r.timeoutHandle = Lh(
              tb.bind(
                null,
                r,
                a,
                ln,
                Bc,
                dh,
                t,
                bn,
                fo,
                cs,
                Sa,
                f,
                "Throttled",
                -0,
                0
              ),
              c
            );
            break e;
          }
          tb(
            r,
            a,
            ln,
            Bc,
            dh,
            t,
            bn,
            fo,
            cs,
            Sa,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    mi(e);
  }
  function tb(e, t, a, r, c, f, b, E, j, k, q, Z, V, I) {
    e.timeoutHandle = -1;
    var ce = t.subtreeFlags, ge = (f & 335544064) === f;
    if (Z = null, (ge || ce & 8192 || (ce & 16785408) === 16785408) && (Z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: ai
    }, vn = null, X0(
      t,
      f,
      Z
    ), ge && (ce = Z, ge = e.containerInfo, ge = (ge.nodeType === 9 ? ge : ge.ownerDocument).__reactViewTransition, ge != null && (ce.count++, ce.waitingForViewTransition = !0, ce = Zr.bind(ce), ge.finished.then(ce, ce))), ce = (f & 62914560) === f ? Pc - Kt() : (f & 4194048) === f ? Q0 - Kt() : 0, ce = E2(
      Z,
      ce
    ), ce !== null)) {
      hi = f, e.cancelPendingCommit = ce(
        cb.bind(
          null,
          e,
          t,
          f,
          a,
          r,
          c,
          b,
          E,
          j,
          k,
          q,
          Z,
          null,
          V,
          I
        )
      ), Ea(e, f, b, !k);
      return;
    }
    cb(
      e,
      t,
      f,
      a,
      r,
      c,
      b,
      E,
      j,
      k,
      q,
      Z
    );
  }
  function xD(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var r = 0; r < a.length; r++) {
          var c = a[r], f = c.getSnapshot;
          c = c.value;
          try {
            if (!pn(f(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ea(e, t, a, r) {
    t = $g(e, t), t &= ~Vc, t &= ~fo, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var f = 31 - Ie(c), b = 1 << f;
      r[f] = -1, c &= ~b;
    }
    a !== 0 && Jg(e, a, t);
  }
  function Hc() {
    return (qe & 6) === 0 ? (Ir(0), !1) : !0;
  }
  function ph() {
    if (Ne !== null) {
      if (Fe === 0)
        var e = Ne.return;
      else
        e = Ne, ji = Wa = null, Td(e), es = null, Cr = 0, e = Ne;
      for (; e !== null; )
        E0(e.alternate, e), e = e.return;
      Ne = null;
    }
  }
  function ms(e, t) {
    var a = e.timeoutHandle;
    return a !== -1 && (e.timeoutHandle = -1, GD(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), hi = 0, ph(), et = e, Ne = a = Ni(e.current, null), je = t, Fe = 0, yn = null, Sa = !1, ls = rr(e, t), fh = !1, cs = bn = Vc = fo = wa = ct = 0, ln = Ur = null, dh = !1, Bi = $g(e, t), Zl(), a;
  }
  function nb(e, t) {
    Ee = null, ne.H = xc, t === Wo || t === sc ? (t = cy(), Fe = 3) : t === ud ? (t = cy(), Fe = 4) : Fe = t === kd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, yn = t, Ne === null && (ct = 1, Sc(
      e,
      Dn(t, e.current)
    ));
  }
  function ib() {
    var e = Ut.current;
    return e === null ? !0 : (je & 4194048) === je ? Ft === null : (je & 62914560) === je || (je & 536870912) !== 0 ? e === Ft : !1;
  }
  function ab() {
    var e = ne.H;
    return ne.H = xc, e === null ? xc : e;
  }
  function ob() {
    var e = ne.A;
    return ne.A = yD, e;
  }
  function Ic() {
    ct = 4, Sa || (je & 4194048) !== je && Ut.current !== null || (ls = !0), (wa & 134217727) === 0 && (fo & 134217727) === 0 || et === null || Ea(
      et,
      je,
      bn,
      !1
    );
  }
  function gh(e, t, a) {
    var r = qe;
    qe |= 2;
    var c = ab(), f = ob();
    (et !== e || je !== t) && (Bc = null, ms(e, t)), t = !1;
    var b = ct;
    e: do
      try {
        if (Fe !== 0 && Ne !== null) {
          var E = Ne, j = yn;
          switch (Fe) {
            case 8:
              ph(), b = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ut.current === null && (t = !0);
              var k = Fe;
              if (Fe = 0, yn = null, ps(e, E, j, k), a && ls) {
                b = 0;
                break e;
              }
              break;
            default:
              k = Fe, Fe = 0, yn = null, ps(e, E, j, k);
          }
        }
        SD(), b = ct;
        break;
      } catch (q) {
        nb(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ji = Wa = null, qe = r, ne.H = c, ne.A = f, Ne === null && (et = null, je = 0, Zl()), b;
  }
  function SD() {
    for (; Ne !== null; ) sb(Ne);
  }
  function wD(e, t) {
    var a = qe;
    qe |= 2;
    var r = ab(), c = ob();
    et !== e || je !== t ? (Bc = null, kc = Kt() + 500, ms(e, t)) : ls = rr(
      e,
      t
    );
    e: do
      try {
        if (Fe !== 0 && Ne !== null) {
          t = Ne;
          var f = yn;
          t: switch (Fe) {
            case 1:
              Fe = 0, yn = null, ps(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (ry(f)) {
                Fe = 0, yn = null, rb(t);
                break;
              }
              t = function() {
                Fe !== 2 && Fe !== 9 || et !== e || (Fe = 7), mi(e);
              }, f.then(t, t);
              break e;
            case 3:
              Fe = 7;
              break e;
            case 4:
              Fe = 5;
              break e;
            case 7:
              ry(f) ? (Fe = 0, yn = null, rb(t)) : (Fe = 0, yn = null, ps(e, t, f, 7));
              break;
            case 5:
              var b = null;
              switch (Ne.tag) {
                case 26:
                  b = Ne.memoizedState;
                case 5:
                case 27:
                  var E = Ne;
                  if (b ? Jb(b) : E.stateNode.complete) {
                    Fe = 0, yn = null;
                    var j = E.sibling;
                    if (j !== null) Ne = j;
                    else {
                      var k = E.return;
                      k !== null ? (Ne = k, qc(k)) : Ne = null;
                    }
                    break t;
                  }
              }
              Fe = 0, yn = null, ps(e, t, f, 5);
              break;
            case 6:
              Fe = 0, yn = null, ps(e, t, f, 6);
              break;
            case 8:
              ph(), ct = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        TD();
        break;
      } catch (q) {
        nb(e, q);
      }
    while (!0);
    return ji = Wa = null, ne.H = r, ne.A = c, qe = a, Ne !== null ? 0 : (et = null, je = 0, Zl(), ct);
  }
  function TD() {
    for (; Ne !== null && !jl(); )
      sb(Ne);
  }
  function sb(e) {
    var t = w0(e.alternate, e, Bi);
    e.memoizedProps = e.pendingProps, t === null ? qc(e) : Ne = t;
  }
  function rb(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = p0(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          je
        );
        break;
      case 11:
        t = p0(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          je
        );
        break;
      case 5:
        Td(t);
        var r = t;
        r === Mt && (De ? (tc(r), r.tag === 5 && r.stateNode != null && (tt = r.stateNode)) : (tc(r), De = !0));
      default:
        E0(a, t), t = Ne = $v(t, Bi), t = w0(a, t, Bi);
    }
    e.memoizedProps = e.pendingProps, t === null ? qc(e) : Ne = t;
  }
  function ps(e, t, a, r) {
    ji = Wa = null, Td(t), es = null, Cr = 0;
    var c = t.return;
    try {
      if (uD(
        e,
        c,
        t,
        a,
        je
      )) {
        ct = 1, Sc(
          e,
          Dn(a, e.current)
        ), Ne = null;
        return;
      }
    } catch (f) {
      if (c !== null) throw Ne = c, f;
      ct = 1, Sc(
        e,
        Dn(a, e.current)
      ), Ne = null;
      return;
    }
    t.flags & 32768 ? (De || r === 1 ? e = !0 : ls || (je & 536870912) !== 0 ? e = !1 : (Sa = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Ut.current, r !== null && r.tag === 13 && (r.flags |= 16384))), lb(t, e)) : qc(t);
  }
  function qc(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        lb(
          t,
          Sa
        );
        return;
      }
      e = t.return;
      var a = mD(
        t.alternate,
        t,
        Bi
      );
      if (a !== null) {
        Ne = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    ct === 0 && (ct = 5);
  }
  function lb(e, t) {
    do {
      var a = pD(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ne = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ne = e;
        return;
      }
      Ne = e = a;
    } while (e !== null);
    ct = 6, Ne = null;
  }
  function cb(e, t, a, r, c, f, b, E, j, k, q, Z) {
    e.cancelPendingCommit = null;
    do
      Gc();
    while (ot !== 0);
    if ((qe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      e === et && (Ne = et = null, je = 0), ho = t, Yn = e, hi = a, mh = c, J0 = r, ED(
        e,
        t,
        a,
        b,
        E,
        j,
        Z
      );
    }
  }
  function ED(e, t, a, r, c, f, b) {
    var E = t.lanes | t.childLanes;
    if (hh = E, E |= Qf, $A(
      e,
      a,
      E,
      r,
      c,
      f
    ), fs = null, (a & 335544064) === a ? (ds = JR(e), r = 10262) : (ds = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, MD(Lo, function() {
      return xh(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), Oc = !1, r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
      r = ne.T, ne.T = null, c = re.p, re.p = 2, f = qe, qe |= 4;
      try {
        gD(e, t, a);
      } finally {
        qe = f, re.p = c, ne.T = r;
      }
    }
    ot = 1, Oc ? us = $D(
      b,
      e.containerInfo,
      ds,
      vh,
      yh,
      AD,
      bh,
      xh,
      CD
    ) : (vh(), yh(), bh());
  }
  function CD(e) {
    if (ot !== 0) {
      var t = Yn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function AD() {
    ot === 3 && (ot = 0, Y0(ho, Yn), ot = 4);
  }
  function vh() {
    if (ot === 1) {
      ot = 0;
      var e = Yn, t = ho, a = hi, r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        r = ne.T, ne.T = null;
        var c = re.p;
        re.p = 2;
        var f = qe;
        qe |= 4;
        try {
          Pr = _c = !1, q0(t, e, a), a = _h;
          var b = Uv(e.containerInfo), E = a.focusedElem, j = a.selectionRange;
          if (b !== E && E && E.ownerDocument && Bv(
            E.ownerDocument.documentElement,
            E
          )) {
            if (j !== null && Ff(E)) {
              var k = j.start, q = j.end;
              if (q === void 0 && (q = k), "selectionStart" in E)
                E.selectionStart = k, E.selectionEnd = Math.min(
                  q,
                  E.value.length
                );
              else {
                var Z = E.ownerDocument || document, V = Z && Z.defaultView || window;
                if (V.getSelection) {
                  var I = V.getSelection(), ce = E.textContent.length, ge = Math.min(j.start, ce), Ce = j.end === void 0 ? ge : Math.min(j.end, ce);
                  !I.extend && ge > Ce && (b = Ce, Ce = ge, ge = b);
                  var P = kv(
                    E,
                    ge
                  ), L = kv(
                    E,
                    Ce
                  );
                  if (P && L && (I.rangeCount !== 1 || I.anchorNode !== P.node || I.anchorOffset !== P.offset || I.focusNode !== L.node || I.focusOffset !== L.offset)) {
                    var H = Z.createRange();
                    H.setStart(P.node, P.offset), I.removeAllRanges(), ge > Ce ? (I.addRange(H), I.extend(L.node, L.offset)) : (H.setEnd(L.node, L.offset), I.addRange(H));
                  }
                }
              }
            }
            for (Z = [], I = E; I = I.parentNode; )
              I.nodeType === 1 && Z.push({
                element: I,
                left: I.scrollLeft,
                top: I.scrollTop
              });
            for (typeof E.focus == "function" && E.focus(), E = 0; E < Z.length; E++) {
              var K = Z[E];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Ts = !!Nh, _h = Nh = null;
        } finally {
          qe = f, re.p = c, ne.T = r;
        }
      }
      e.current = t, ot = 2;
    }
  }
  function yh() {
    if (ot === 2) {
      ot = 0;
      var e = Yn, t = ho, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = ne.T, ne.T = null;
        var r = re.p;
        re.p = 2;
        var c = qe;
        qe |= 4;
        try {
          P0(e, t.alternate, t);
        } finally {
          qe = c, re.p = r, ne.T = a;
        }
      }
      ot = 3;
    }
  }
  function bh() {
    if (ot === 4 || ot === 3) {
      ot = 0;
      var e = us;
      us = null, En();
      var t = Yn, a = ho, r = hi, c = J0, f = (r & 335544064) === r ? 10262 : 10256;
      if ((a.subtreeFlags & f) !== 0 || (a.flags & f) !== 0 ? ot = 5 : (ot = 0, ho = Yn = null, ub(t, t.pendingLanes)), f = t.pendingLanes, f === 0 && (Ta = null), Df(r), a = a.stateNode, $e && typeof $e.onCommitFiberRoot == "function")
        try {
          $e.onCommitFiberRoot(
            rt,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        a = ne.T, f = re.p, re.p = 2, ne.T = null;
        try {
          for (var b = t.onRecoverableError, E = 0; E < c.length; E++) {
            var j = c[E];
            b(j.value, {
              componentStack: j.stack
            });
          }
        } finally {
          ne.T = a, re.p = f;
        }
      }
      if (c = fs, b = ds, ds = null, c !== null && (fs = null, b === null && (b = []), e !== null))
        for (j = 0; j < c.length; j++)
          a = (0, c[j])(
            b
          ), a !== void 0 && e.finished.finally(a);
      (hi & 3) !== 0 && Gc(), mi(t), f = t.pendingLanes, (r & 261930) !== 0 && (f & 42) !== 0 ? t === Uc ? Hr++ : (Hr = 0, Uc = t) : (Hr = 0, Uc = null), Ir(0);
    }
  }
  function ub(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, wr(t)));
  }
  function Gc() {
    return us !== null && (us.skipTransition(), us = null), vh(), yh(), bh(), xh();
  }
  function xh() {
    if (ot !== 5) return !1;
    var e = Yn, t = hh;
    hh = 0;
    var a = Df(hi), r = ne.T, c = re.p;
    try {
      re.p = 32 > a ? 32 : a, ne.T = null, a = mh, mh = null;
      var f = Yn, b = hi;
      if (ot = 0, ho = Yn = null, hi = 0, (qe & 6) !== 0) throw Error(s(331));
      var E = qe;
      if (qe |= 4, Z0(f.current), F0(
        f,
        f.current,
        b,
        a
      ), qe = E, Ir(0, !1), $e && typeof $e.onPostCommitFiberRoot == "function")
        try {
          $e.onPostCommitFiberRoot(rt, f);
        } catch {
        }
      return !0;
    } finally {
      re.p = c, ne.T = r, ub(e, t);
    }
  }
  function fb(e, t, a) {
    t = Dn(a, t), t = Pd(e.stateNode, t, 2), e = pa(e, t, 2), e !== null && (lr(e, 2), mi(e));
  }
  function Xe(e, t, a) {
    if (e.tag === 3)
      fb(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          fb(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ta === null || !Ta.has(r))) {
            e = Dn(a, e), a = r0(2), r = pa(t, a, 2), r !== null && (l0(
              a,
              r,
              t,
              e
            ), lr(r, 2), mi(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function Sh(e, t, a) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new bD();
      var c = /* @__PURE__ */ new Set();
      r.set(t, c);
    } else
      c = r.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), r.set(t, c));
    c.has(a) || (fh = !0, c.add(a), e = RD.bind(null, e, t, a), t.then(e, e));
  }
  function RD(e, t, a) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, et === e && (je & a) === a && ((ct === 4 || ct === 3 && (je & 62914560) === je && 300 > Kt() - Pc) && (qe & 2) === 0 ? ms(e, 0) : Vc |= a, cs === je && (cs = 0)), mi(e);
  }
  function db(e, t) {
    t === 0 && (t = Qg()), e = $a(e, t), e !== null && (lr(e, t), mi(e));
  }
  function DD(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), db(e, a);
  }
  function OD(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode, c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), db(e, a);
  }
  function MD(e, t) {
    return nr(e, t);
  }
  var gs = null, vs = null, wh = !1, Yc = !1, Th = !1, Ca = 0;
  function mi(e) {
    e !== vs && e.next === null && (vs === null ? gs = vs = e : vs = vs.next = e), Yc = !0, wh || (wh = !0, _D());
  }
  function Ir(e, t) {
    if (!Th && Yc) {
      Th = !0;
      do
        for (var a = !1, r = gs; r !== null; ) {
          if (e !== 0) {
            var c = r.pendingLanes;
            if (c === 0) var f = 0;
            else {
              var b = r.suspendedLanes, E = r.pingedLanes;
              f = (1 << 31 - Ie(42 | e) + 1) - 1, f &= c & ~(b & ~E), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (a = !0, gb(r, f));
          } else
            f = je, f = Vl(
              r,
              r === et ? f : 0,
              r.cancelPendingCommit !== null || r.timeoutHandle !== -1
            ), (f & 3) === 0 || rr(r, f) || (a = !0, gb(r, f));
          r = r.next;
        }
      while (a);
      Th = !1;
    }
  }
  function ND() {
    hb();
  }
  function hb() {
    Yc = wh = !1;
    var e = 0;
    Ca !== 0 && qD() && (e = Ca);
    for (var t = Kt(), a = null, r = gs; r !== null; ) {
      var c = r.next, f = mb(r, t);
      f === 0 ? (r.next = null, a === null ? gs = c : a.next = c, c === null && (vs = a)) : (a = r, (e !== 0 || (f & 3) !== 0) && (Yc = !0)), r = c;
    }
    ot !== 0 && ot !== 5 || Ir(e), Ca !== 0 && (Ca = 0);
  }
  function mb(e, t) {
    for (var a = e.suspendedLanes, r = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var b = 31 - Ie(f), E = 1 << b, j = c[b];
      j === -1 ? ((E & a) === 0 || (E & r) !== 0) && (c[b] = ZA(E, t)) : j <= t && (e.expiredLanes |= E), f &= ~E;
    }
    if (t = et, a = je, a = Vl(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r = e.callbackNode, a === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
      return r !== null && r !== null && zo(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || rr(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (r !== null && zo(r), Df(a)) {
        case 2:
        case 8:
          a = ar;
          break;
        case 32:
          a = Lo;
          break;
        case 268435456:
          a = or;
          break;
        default:
          a = Lo;
      }
      return r = pb.bind(null, e), a = nr(a, r), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return r !== null && r !== null && zo(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function pb(e, t) {
    if (ot !== 0 && ot !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Gc() && e.callbackNode !== a)
      return null;
    var r = je;
    return r = Vl(
      e,
      e === et ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), r === 0 ? null : (eb(e, r, t), mb(e, Kt()), e.callbackNode != null && e.callbackNode === a ? pb.bind(null, e) : null);
  }
  function gb(e, t) {
    if (Gc()) return null;
    eb(e, t, !0);
  }
  function _D() {
    YD(function() {
      (qe & 6) !== 0 ? nr(
        Un,
        ND
      ) : hb();
    });
  }
  function Eh() {
    if (Ca === 0) {
      var e = no;
      e === 0 && (e = Zt, Zt <<= 1, (Zt & 261888) === 0 && (Zt = 256)), Ca = e;
    }
    return Ca;
  }
  function vb(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Hl(e);
  }
  function jD(e, t, a, r, c) {
    if (t === "submit" && a && a.stateNode === c) {
      var f = vb(
        (c[an] || null).action
      ), b = r.submitter;
      b && (t = (t = b[an] || null) ? vb(t.formAction) : b.getAttribute("formAction"), t !== null && (f = t, b = null));
      var E = new Yl(
        "action",
        "action",
        null,
        r,
        c
      );
      e.push({
        event: E,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (r.defaultPrevented) {
                if (Ca !== 0) {
                  var j = new FormData(c, b);
                  _d(
                    a,
                    {
                      pending: !0,
                      data: j,
                      method: c.method,
                      action: f
                    },
                    null,
                    j
                  );
                }
              } else
                typeof f == "function" && (E.preventDefault(), j = new FormData(c, b), _d(
                  a,
                  {
                    pending: !0,
                    data: j,
                    method: c.method,
                    action: f
                  },
                  f,
                  j
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var Ch = 0; Ch < $f.length; Ch++) {
    var Ah = $f[Ch], zD = Ah.toLowerCase(), LD = Ah[0].toUpperCase() + Ah.slice(1);
    Hn(
      zD,
      "on" + LD
    );
  }
  Hn(qv, "onAnimationEnd"), Hn(Gv, "onAnimationIteration"), Hn(Yv, "onAnimationStart"), Hn("dblclick", "onDoubleClick"), Hn("focusin", "onFocus"), Hn("focusout", "onBlur"), Hn(GR, "onTransitionRun"), Hn(YR, "onTransitionStart"), Hn(FR, "onTransitionCancel"), Hn(Fv, "onTransitionEnd"), Bo("onMouseEnter", ["mouseout", "mouseover"]), Bo("onMouseLeave", ["mouseout", "mouseover"]), Bo("onPointerEnter", ["pointerout", "pointerover"]), Bo("onPointerLeave", ["pointerout", "pointerover"]), Xa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Xa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Xa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Xa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Xa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Xa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), VD = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qr)
  );
  function yb(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var r = e[a], c = r.event;
      r = r.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var b = r.length - 1; 0 <= b; b--) {
            var E = r[b], j = E.instance, k = E.currentTarget;
            if (E = E.listener, j !== f && c.isPropagationStopped())
              break e;
            f = E, c.currentTarget = k;
            try {
              f(c);
            } catch (q) {
              Kl(q);
            }
            c.currentTarget = null, f = j;
          }
        else
          for (b = 0; b < r.length; b++) {
            if (E = r[b], j = E.instance, k = E.currentTarget, E = E.listener, j !== f && c.isPropagationStopped())
              break e;
            f = E, c.currentTarget = k;
            try {
              f(c);
            } catch (q) {
              Kl(q);
            }
            c.currentTarget = null, f = j;
          }
      }
    }
  }
  function _e(e, t) {
    var a = t[iv];
    a === void 0 && (a = t[iv] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    a.has(r) || (bb(t, e, 2, !1), a.add(r));
  }
  function Rh(e, t, a) {
    var r = 0;
    t && (r |= 4), bb(
      a,
      e,
      r,
      t
    );
  }
  var Fc = "_reactListening" + Math.random().toString(36).slice(2);
  function Dh(e) {
    if (!e[Fc]) {
      e[Fc] = !0, sv.forEach(function(a) {
        a !== "selectionchange" && (VD.has(a) || Rh(a, !1, e), Rh(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fc] || (t[Fc] = !0, Rh("selectionchange", !1, t));
    }
  }
  function bb(e, t, a, r) {
    switch (lx(t)) {
      case 2:
        var c = D2;
        break;
      case 8:
        c = O2;
        break;
      default:
        c = Kh;
    }
    a = c.bind(
      null,
      t,
      a,
      e
    ), c = void 0, !Vf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), r ? c !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, a, !0) : c !== void 0 ? e.addEventListener(t, a, {
      passive: c
    }) : e.addEventListener(t, a, !1);
  }
  function Oh(e, t, a, r, c) {
    var f = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (; ; ) {
        if (r === null) return;
        var b = r.tag;
        if (b === 3 || b === 4) {
          var E = r.stateNode.containerInfo;
          if (E === c) break;
          if (b === 4)
            for (b = r.return; b !== null; ) {
              var j = b.tag;
              if ((j === 3 || j === 4) && b.stateNode.containerInfo === c)
                return;
              b = b.return;
            }
          for (; E !== null; ) {
            if (b = Fa(E), b === null) return;
            if (j = b.tag, j === 5 || j === 6 || j === 26 || j === 27) {
              r = f = b;
              continue e;
            }
            E = E.parentNode;
          }
        }
        r = r.return;
      }
    bv(function() {
      var k = f, q = zf(a), Z = [];
      e: {
        var V = Xv.get(e);
        if (V !== void 0) {
          var I = Yl, ce = e;
          switch (e) {
            case "keypress":
              if (ql(a) === 0) break e;
            case "keydown":
            case "keyup":
              I = xR;
              break;
            case "focusin":
              ce = "focus", I = Uf;
              break;
            case "focusout":
              ce = "blur", I = Uf;
              break;
            case "beforeblur":
            case "afterblur":
              I = Uf;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              I = wv;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = lR;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = CR;
              break;
            case qv:
            case Gv:
            case Yv:
              I = fR;
              break;
            case Fv:
              I = RR;
              break;
            case "scroll":
            case "scrollend":
              I = sR;
              break;
            case "wheel":
              I = OR;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = hR;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = Ev;
              break;
            case "submit":
              I = TR;
              break;
            case "toggle":
            case "beforetoggle":
              I = NR;
          }
          var ge = (t & 4) !== 0, Ce = !ge && (e === "scroll" || e === "scrollend"), P = ge ? V !== null ? V + "Capture" : null : V;
          ge = [];
          for (var L = k, H; L !== null; ) {
            var K = L;
            if (H = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || H === null || P === null || (K = fr(L, P), K != null && ge.push(
              Gr(L, K, H)
            )), Ce) break;
            L = L.return;
          }
          0 < ge.length && (V = new I(
            V,
            ce,
            null,
            a,
            q
          ), Z.push({ event: V, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (I = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", I && a !== jf && (ce = a.relatedTarget || a.fromElement) && (Fa(ce) || ce[Vo]))
            break e;
          (V || I) && (ce = q.window === q ? q : (I = q.ownerDocument) ? I.defaultView || I.parentWindow : window, V ? (I = a.relatedTarget || a.toElement, V = k, I = I ? Fa(I) : null, I !== null && (Ce = u(I), ge = I.tag, I !== Ce || ge !== 5 && ge !== 27 && ge !== 6) && (I = null)) : (V = null, I = k), V !== I && (ge = wv, K = "onMouseLeave", P = "onMouseEnter", L = "mouse", (e === "pointerout" || e === "pointerover") && (ge = Ev, K = "onPointerLeave", P = "onPointerEnter", L = "pointer"), Ce = V == null ? ce : ur(V), H = I == null ? ce : ur(I), ce = new ge(
            K,
            L + "leave",
            V,
            a,
            q
          ), ce.target = Ce, ce.relatedTarget = H, K = null, Fa(q) === k && (ge = new ge(
            P,
            L + "enter",
            I,
            a,
            q
          ), ge.target = H, ge.relatedTarget = Ce, K = ge), Ce = K, ge = V && I ? U(
            V,
            I,
            PD
          ) : null, V !== null && xb(
            Z,
            ce,
            V,
            ge,
            !1
          ), I !== null && Ce !== null && xb(
            Z,
            Ce,
            I,
            ge,
            !0
          )));
        }
        e: {
          if (V = k ? ur(k) : window, I = V.nodeName && V.nodeName.toLowerCase(), I === "select" || I === "input" && V.type === "file")
            var de = _v;
          else if (Mv(V))
            if (jv)
              de = HR;
            else {
              de = BR;
              var ze = kR;
            }
          else
            I = V.nodeName, !I || I.toLowerCase() !== "input" || V.type !== "checkbox" && V.type !== "radio" ? k && _f(k.elementType) && (de = _v) : de = UR;
          if (de && (de = de(e, k))) {
            Nv(
              Z,
              de,
              a,
              q
            );
            break e;
          }
          ze && ze(e, V, k);
        }
        switch (ze = k ? ur(k) : window, e) {
          case "focusin":
            (Mv(ze) || ze.contentEditable === "true") && (Yo = ze, Xf = k, br = null);
            break;
          case "focusout":
            br = Xf = Yo = null;
            break;
          case "mousedown":
            Kf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kf = !1, Hv(Z, a, q);
            break;
          case "selectionchange":
            if (qR) break;
          case "keydown":
          case "keyup":
            Hv(Z, a, q);
        }
        var be;
        if (If)
          e: {
            switch (e) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          Go ? Dv(e, a) && (Se = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Se = "onCompositionStart");
        Se && (Cv && a.locale !== "ko" && (Go || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && Go && (be = xv()) : (sa = q, Pf = "value" in sa ? sa.value : sa.textContent, Go = !0)), ze = Xc(k, Se), 0 < ze.length && (Se = new Tv(
          Se,
          e,
          null,
          a,
          q
        ), Z.push({ event: Se, listeners: ze }), be ? Se.data = be : (be = Ov(a), be !== null && (Se.data = be)))), (be = jR ? zR(e, a) : LR(e, a)) && (Se = Xc(k, "onBeforeInput"), 0 < Se.length && (ze = new Tv(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          q
        ), Z.push({
          event: ze,
          listeners: Se
        }), ze.data = be)), jD(
          Z,
          e,
          k,
          a,
          q
        );
      }
      yb(Z, t);
    });
  }
  function Gr(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Xc(e, t) {
    for (var a = t + "Capture", r = []; e !== null; ) {
      var c = e, f = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || f === null || (c = fr(e, a), c != null && r.unshift(
        Gr(e, c, f)
      ), c = fr(e, t), c != null && r.push(
        Gr(e, c, f)
      )), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function PD(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xb(e, t, a, r, c) {
    for (var f = t._reactName, b = []; a !== null && a !== r; ) {
      var E = a, j = E.alternate, k = E.stateNode;
      if (E = E.tag, j !== null && j === r) break;
      E !== 5 && E !== 26 && E !== 27 || k === null || (j = k, c ? (k = fr(a, f), k != null && b.unshift(
        Gr(a, k, j)
      )) : c || (k = fr(a, f), k != null && b.push(
        Gr(a, k, j)
      ))), a = a.return;
    }
    b.length !== 0 && e.push({ event: t, listeners: b });
  }
  var kD = /\r\n?/g, BD = /\u0000|\uFFFD/g;
  function Sb(e) {
    return (typeof e == "string" ? e : "" + e).replace(kD, `
`).replace(BD, "");
  }
  function wb(e, t) {
    return t = Sb(t), Sb(e) === t;
  }
  function Ke(e, t, a, r, c, f) {
    switch (a) {
      case "children":
        if (typeof r == "string")
          t === "body" || t === "textarea" && r === "" || Ho(e, r);
        else if (typeof r == "number" || typeof r == "bigint")
          t !== "body" && Ho(e, "" + r);
        else return;
        break;
      case "className":
        Ul(e, "class", r);
        break;
      case "tabIndex":
        Ul(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ul(e, a, r);
        break;
      case "style":
        vv(e, r, f);
        return;
      case "data":
        if (t !== "object") {
          Ul(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(a);
          break;
        }
        r = Hl(r), e.setAttribute(a, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (a === "formAction" ? (t !== "input" && Ke(e, t, "name", c.name, c, null), Ke(
            e,
            t,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Ke(
            e,
            t,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Ke(
            e,
            t,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Ke(e, t, "encType", c.encType, c, null), Ke(e, t, "method", c.method, c, null), Ke(e, t, "target", c.target, c, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(a);
          break;
        }
        r = Hl(r), e.setAttribute(a, r);
        break;
      case "onClick":
        r != null && (e.onclick = ai);
        return;
      case "onScroll":
        r != null && _e("scroll", e);
        return;
      case "onScrollEnd":
        r != null && _e("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(s(61));
          if (a = r.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            f?.__html !== a && (e.innerHTML = a);
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
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
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Hl(r), e.setAttributeNS(
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
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, r) : e.removeAttribute(a);
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
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        r === !0 ? e.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(a, r) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(a, r) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(a) : e.setAttribute(a, r);
        break;
      case "popover":
        _e("beforetoggle", e), _e("toggle", e), Bl(e, "popover", r);
        break;
      case "xlinkActuate":
        Ri(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          r
        );
        break;
      case "xlinkArcrole":
        Ri(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          r
        );
        break;
      case "xlinkRole":
        Ri(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          r
        );
        break;
      case "xlinkShow":
        Ri(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          r
        );
        break;
      case "xlinkTitle":
        Ri(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          r
        );
        break;
      case "xlinkType":
        Ri(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          r
        );
        break;
      case "xmlBase":
        Ri(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          r
        );
        break;
      case "xmlLang":
        Ri(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          r
        );
        break;
      case "xmlSpace":
        Ri(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          r
        );
        break;
      case "is":
        Bl(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N")
          a = aR.get(a) || a, Bl(e, a, r);
        else return;
    }
    Ue = !0;
  }
  function Mh(e, t, a, r, c, f) {
    switch (a) {
      case "style":
        vv(e, r, f);
        return;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r))
            throw Error(s(61));
          if (a = r.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            f?.__html !== a && (e.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof r == "string") Ho(e, r);
        else if (typeof r == "number" || typeof r == "bigint")
          Ho(e, "" + r);
        else return;
        break;
      case "onScroll":
        r != null && _e("scroll", e);
        return;
      case "onScrollEnd":
        r != null && _e("scrollend", e);
        return;
      case "onClick":
        r != null && (e.onclick = ai);
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
        if (!rv.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), f = a.slice(2, c ? a.length - 7 : void 0), t = e[an] || null, t = t != null ? t[a] : null, typeof t == "function" && e.removeEventListener(f, t, c), typeof r == "function")) {
              typeof t != "function" && t !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(f, r, c);
              break e;
            }
            Ue = !0, a in e ? e[a] = r : r === !0 ? e.setAttribute(a, "") : Bl(e, a, r);
          }
        return;
    }
    Ue = !0;
  }
  function qt(e, t, a) {
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
        _e("error", e), _e("load", e);
        var r = !1, c = !1, f;
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var b = a[f];
            if (b != null)
              switch (f) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  Ke(e, t, f, b, a, null);
              }
          }
        c && Ke(e, t, "srcSet", a.srcSet, a, null), r && Ke(e, t, "src", a.src, a, null);
        return;
      case "input":
        _e("invalid", e);
        var E = f = b = c = null, j = null, k = null;
        for (r in a)
          if (a.hasOwnProperty(r)) {
            var q = a[r];
            if (q != null)
              switch (r) {
                case "name":
                  c = q;
                  break;
                case "type":
                  b = q;
                  break;
                case "checked":
                  j = q;
                  break;
                case "defaultChecked":
                  k = q;
                  break;
                case "value":
                  f = q;
                  break;
                case "defaultValue":
                  E = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Ke(e, t, r, q, a, null);
              }
          }
        hv(
          e,
          f,
          E,
          j,
          k,
          b,
          c,
          !1
        );
        return;
      case "select":
        _e("invalid", e), r = b = f = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (E = a[c], E != null))
            switch (c) {
              case "value":
                f = E;
                break;
              case "defaultValue":
                b = E;
                break;
              case "multiple":
                r = E;
              default:
                Ke(e, t, c, E, a, null);
            }
        t = f, a = b, e.multiple = !!r, t != null ? Uo(e, !!r, t, !1) : a != null && Uo(e, !!r, a, !0);
        return;
      case "textarea":
        _e("invalid", e), f = c = r = null;
        for (b in a)
          if (a.hasOwnProperty(b) && (E = a[b], E != null))
            switch (b) {
              case "value":
                r = E;
                break;
              case "defaultValue":
                c = E;
                break;
              case "children":
                f = E;
                break;
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(s(91));
                break;
              default:
                Ke(e, t, b, E, a, null);
            }
        pv(e, r, c, f);
        return;
      case "option":
        for (j in a)
          a.hasOwnProperty(j) && (r = a[j], r != null) && (j === "selected" ? e.selected = r && typeof r != "function" && typeof r != "symbol" : Ke(e, t, j, r, a, null));
        return;
      case "dialog":
        _e("beforetoggle", e), _e("toggle", e), _e("cancel", e), _e("close", e);
        break;
      case "iframe":
      case "object":
        _e("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < qr.length; r++)
          _e(qr[r], e);
        break;
      case "image":
        _e("error", e), _e("load", e);
        break;
      case "details":
        _e("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        _e("error", e), _e("load", e);
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
        for (k in a)
          if (a.hasOwnProperty(k) && (r = a[k], r != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Ke(e, t, k, r, a, null);
            }
        return;
      default:
        if (_f(t)) {
          for (q in a)
            a.hasOwnProperty(q) && (r = a[q], r !== void 0 && Mh(
              e,
              t,
              q,
              r,
              a,
              void 0
            ));
          return;
        }
    }
    for (E in a)
      a.hasOwnProperty(E) && (r = a[E], r != null && Ke(e, t, E, r, a, null));
  }
  var UD = {};
  function HD(e, t, a, r) {
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
        var c = null, f = null, b = null, E = null, j = null, k = null, q = null;
        for (I in a) {
          var Z = a[I];
          if (a.hasOwnProperty(I) && Z != null)
            switch (I) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = Z;
              default:
                r.hasOwnProperty(I) || Ke(e, t, I, null, r, Z);
            }
        }
        for (var V in r) {
          var I = r[V];
          if (Z = a[V], r.hasOwnProperty(V) && (I != null || Z != null))
            switch (V) {
              case "type":
                I !== Z && (Ue = !0), f = I;
                break;
              case "name":
                I !== Z && (Ue = !0), c = I;
                break;
              case "checked":
                I !== Z && (Ue = !0), k = I;
                break;
              case "defaultChecked":
                I !== Z && (Ue = !0), q = I;
                break;
              case "value":
                I !== Z && (Ue = !0), b = I;
                break;
              case "defaultValue":
                I !== Z && (Ue = !0), E = I;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null)
                  throw Error(s(137, t));
                break;
              default:
                I !== Z && Ke(
                  e,
                  t,
                  V,
                  I,
                  r,
                  Z
                );
            }
        }
        Mf(
          e,
          b,
          E,
          j,
          k,
          q,
          f,
          c
        );
        return;
      case "select":
        I = b = E = V = null;
        for (f in a)
          if (j = a[f], a.hasOwnProperty(f) && j != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                I = j;
              default:
                r.hasOwnProperty(f) || Ke(
                  e,
                  t,
                  f,
                  null,
                  r,
                  j
                );
            }
        for (c in r)
          if (f = r[c], j = a[c], r.hasOwnProperty(c) && (f != null || j != null))
            switch (c) {
              case "value":
                f !== j && (Ue = !0), V = f;
                break;
              case "defaultValue":
                f !== j && (Ue = !0), E = f;
                break;
              case "multiple":
                f !== j && (Ue = !0), b = f;
              default:
                f !== j && Ke(
                  e,
                  t,
                  c,
                  f,
                  r,
                  j
                );
            }
        t = E, a = b, r = I, V != null ? Uo(e, !!a, V, !1) : !!r != !!a && (t != null ? Uo(e, !!a, t, !0) : Uo(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        I = V = null;
        for (E in a)
          if (c = a[E], a.hasOwnProperty(E) && c != null && !r.hasOwnProperty(E))
            switch (E) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ke(e, t, E, null, r, c);
            }
        for (b in r)
          if (c = r[b], f = a[b], r.hasOwnProperty(b) && (c != null || f != null))
            switch (b) {
              case "value":
                c !== f && (Ue = !0), V = c;
                break;
              case "defaultValue":
                c !== f && (Ue = !0), I = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== f && Ke(e, t, b, c, r, f);
            }
        mv(e, V, I);
        return;
      case "option":
        for (var ce in a)
          V = a[ce], a.hasOwnProperty(ce) && V != null && !r.hasOwnProperty(ce) && (ce === "selected" ? e.selected = !1 : Ke(
            e,
            t,
            ce,
            null,
            r,
            V
          ));
        for (j in r)
          V = r[j], I = a[j], r.hasOwnProperty(j) && V !== I && (V != null || I != null) && (j === "selected" ? (V !== I && (Ue = !0), e.selected = V && typeof V != "function" && typeof V != "symbol") : Ke(
            e,
            t,
            j,
            V,
            r,
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
        for (var ge in a)
          V = a[ge], a.hasOwnProperty(ge) && V != null && !r.hasOwnProperty(ge) && Ke(e, t, ge, null, r, V);
        for (k in r)
          if (V = r[k], I = a[k], r.hasOwnProperty(k) && V !== I && (V != null || I != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(s(137, t));
                break;
              default:
                Ke(
                  e,
                  t,
                  k,
                  V,
                  r,
                  I
                );
            }
        return;
      default:
        if (_f(t)) {
          for (var Ce in a)
            V = a[Ce], a.hasOwnProperty(Ce) && V !== void 0 && !r.hasOwnProperty(Ce) && Mh(
              e,
              t,
              Ce,
              void 0,
              r,
              V
            );
          for (q in r)
            V = r[q], I = a[q], !r.hasOwnProperty(q) || V === I || V === void 0 && I === void 0 || Mh(
              e,
              t,
              q,
              V,
              r,
              I
            );
          return;
        }
    }
    for (var P in a)
      V = a[P], a.hasOwnProperty(P) && V != null && !r.hasOwnProperty(P) && Ke(e, t, P, null, r, V);
    for (Z in r)
      V = r[Z], I = a[Z], !r.hasOwnProperty(Z) || V === I || V == null && I == null || Ke(e, t, Z, V, r, I);
  }
  function Tb(e) {
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
  function ID() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), r = 0; r < a.length; r++) {
        var c = a[r], f = c.transferSize, b = c.initiatorType, E = c.duration;
        if (f && E && Tb(b)) {
          for (b = 0, E = c.responseEnd, r += 1; r < a.length; r++) {
            var j = a[r], k = j.startTime;
            if (k > E) break;
            var q = j.transferSize, Z = j.initiatorType;
            q && Tb(Z) && (j = j.responseEnd, b += q * (j < E ? 1 : (E - k) / (j - k)));
          }
          if (--r, t += 8 * (f + b) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Nh = null, _h = null;
  function Yr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Eb(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Cb(e, t) {
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
  function Ab(e, t, a, r) {
    return a = Yr(
      a
    ).createElement(e), a[kt] = r, a[an] = t, qt(a, e, t), Ot(a), a;
  }
  function jh(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var zh = null;
  function qD() {
    var e = window.event;
    return e && e.type === "popstate" ? e === zh ? !1 : (zh = e, !0) : (zh = null, !1);
  }
  var Lh = typeof setTimeout == "function" ? setTimeout : void 0, GD = typeof clearTimeout == "function" ? clearTimeout : void 0, Rb = typeof Promise == "function" ? Promise : void 0, Db = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Lh, YD = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rb < "u" ? function(e) {
    return Rb.resolve(null).then(e).catch(FD);
  } : Lh;
  function FD(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Aa(e) {
    return e === "head";
  }
  function Ob(e, t) {
    var a = t, r = 0;
    do {
      var c = a.nextSibling;
      if (e.removeChild(a), c && c.nodeType === 8)
        if (a = c.data, a === "/$" || a === "/&") {
          if (r === 0) {
            e.removeChild(c), Es(t);
            return;
          }
          r--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          r++;
        else if (a === "html")
          qh(
            e.ownerDocument.documentElement
          );
        else if (a === "head") {
          a = e.ownerDocument.head, qh(a);
          for (var f = a.firstChild; f; ) {
            var b = f.nextSibling, E = f.nodeName;
            f[cr] || E === "SCRIPT" || E === "STYLE" || E === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = b;
          }
        } else
          a === "body" && qh(e.ownerDocument.body);
      a = c;
    } while (a);
    Es(t);
  }
  function Mb(e, t) {
    var a = e;
    e = 0;
    do {
      var r = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), r && r.nodeType === 8)
        if (a = r.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = r;
    } while (a);
  }
  function Nb(e, t, a) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, a != null && (e.style.viewTransitionClass = a), a = getComputedStyle(e), a.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var r = 1;
      else
        for (var c = r = 0; c < t.length; c++) {
          var f = t[c];
          0 < f.width && 0 < f.height && r++;
        }
      r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + a.paddingTop, e.marginBottom = "-" + a.paddingBottom);
    }
  }
  function _b(e, t) {
    e = e.style, t = t.style;
    var a = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), a = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (a = t.display, e.display = a == null || typeof a == "boolean" ? "" : a, a = t.margin, a != null ? e.margin = a : (a = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = a == null || typeof a == "boolean" ? "" : a, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function XD(e, t, a) {
    return a = a.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= a.innerHeight && e.left <= a.innerWidth
    };
  }
  function Vh(e) {
    var t = e.getBoundingClientRect(), a = getComputedStyle(e);
    return XD(t, a, e);
  }
  function KD(e) {
    return e.documentElement.clientHeight;
  }
  function ZD(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function $D(e, t, a, r, c, f, b, E, j) {
    var k = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var q = k.startViewTransition({
        update: function() {
          var V = k.defaultView, I = V.navigation && V.navigation.transition, ce = k.fonts.status;
          r();
          var ge = [];
          if (ce === "loaded" && (KD(k), k.fonts.status === "loading" && ge.push(k.fonts.ready)), ce = ge.length, e !== null)
            for (var Ce = e.suspenseyImages, P = 0, L = 0; L < Ce.length; L++) {
              var H = Ce[L];
              if (!H.complete) {
                var K = H.getBoundingClientRect();
                if (0 < K.bottom && 0 < K.right && K.top < V.innerHeight && K.left < V.innerWidth) {
                  if (P += Wb(H), P > $c) {
                    ge.length = ce;
                    break;
                  }
                  H = new Promise(
                    ZD.bind(H)
                  ), ge.push(H);
                }
              }
            }
          if (0 < ge.length)
            return V = Promise.race([
              Promise.all(ge),
              new Promise(function(de) {
                return setTimeout(de, 500);
              })
            ]).then(c, c), (I ? Promise.allSettled([I.finished, V]) : V).then(f, f);
          if (c(), I)
            return I.finished.then(
              f,
              f
            );
          f();
        },
        types: a
      });
      k.__reactViewTransition = q;
      var Z = [];
      return q.ready.then(
        function() {
          for (var V = k.documentElement.getAnimations({
            subtree: !0
          }), I = 0; I < V.length; I++) {
            var ce = V[I], ge = ce.effect, Ce = ge.pseudoElement;
            if (Ce != null && Ce.startsWith("::view-transition")) {
              Z.push(ce), ce = ge.getKeyframes();
              for (var P = Ce = void 0, L = !0, H = 0; H < ce.length; H++) {
                var K = ce[H], de = K.width;
                if (Ce === void 0) Ce = de;
                else if (Ce !== de) {
                  L = !1;
                  break;
                }
                if (de = K.height, P === void 0) P = de;
                else if (P !== de) {
                  L = !1;
                  break;
                }
                delete K.width, delete K.height, K.transform === "none" && delete K.transform;
              }
              L && Ce !== void 0 && P !== void 0 && (ge.setKeyframes(ce), L = getComputedStyle(
                ge.target,
                ge.pseudoElement
              ), L.width !== Ce || L.height !== P) && (L = ce[0], L.width = Ce, L.height = P, L = ce[ce.length - 1], L.width = Ce, L.height = P, ge.setKeyframes(ce));
            }
          }
          b();
        },
        function(V) {
          k.__reactViewTransition === q && (k.__reactViewTransition = null);
          try {
            typeof V == "object" && V !== null && V.name === "InvalidStateError" && (V.message === "View transition was skipped because document visibility state is hidden." || V.message === "Skipping view transition because document visibility state has become hidden." || V.message === "Skipping view transition because viewport size changed." || V.message === "Transition was aborted because of invalid state") && (V = null), V !== null && j(V);
          } finally {
            r(), c(), b();
          }
        }
      ), q.finished.finally(function() {
        for (var V = 0; V < Z.length; V++)
          Z[V].cancel();
        k.__reactViewTransition === q && (k.__reactViewTransition = null), E();
      }), q;
    } catch {
      return r(), c(), b(), null;
    }
  }
  function mo(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  mo.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : O({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, mo.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, a = e.getAnimations({ subtree: !0 }), r = [], c = 0; c < a.length; c++) {
      var f = a[c].effect;
      f !== null && f.target === e && f.pseudoElement === t && r.push(a[c]);
    }
    return r;
  }, mo.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function jb(e) {
    return {
      name: e,
      group: new mo("group", e),
      imagePair: new mo("image-pair", e),
      old: new mo("old", e),
      new: new mo("new", e)
    };
  }
  function Sn(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  Sn.prototype.addEventListener = function(e, t, a) {
    var r = null, c = null;
    if (!(a != null && typeof a != "boolean" && (r = a.signal || null, r !== null && r.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var f = this._eventListeners;
      if (Lb(f, e, t, a) === -1) {
        var b = this, E = t;
        a != null && typeof a != "boolean" && a.once === !0 && (E = function(j) {
          b.removeEventListener(
            e,
            t,
            a
          ), typeof t == "function" ? t.call(this, j) : t.handleEvent(j);
        }), r !== null && (c = b.removeEventListener.bind(
          b,
          e,
          t,
          a
        ), r.addEventListener("abort", c, { once: !0 }), c = r.removeEventListener.bind(r, "abort", c)), r = ys(a), f.push({
          type: e,
          listener: t,
          optionsOrUseCapture: a,
          attachedListener: E,
          cleanup: c
        }), m(
          this._fragmentFiber.child,
          !1,
          QD,
          e,
          E,
          r
        );
      }
      this._eventListeners = f;
    }
  };
  function QD(e, t, a, r) {
    return C(e).addEventListener(
      t,
      a,
      r
    ), !1;
  }
  Sn.prototype.removeEventListener = function(e, t, a) {
    var r = this._eventListeners;
    if (r !== null && (t = Lb(
      r,
      e,
      t,
      a
    ), t !== -1)) {
      var c = r[t];
      a = c.attachedListener;
      var f = c.cleanup;
      c = ys(c.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        JD,
        e,
        a,
        c
      ), r.splice(t, 1), f !== null && f();
    }
  };
  function JD(e, t, a, r) {
    return C(e).removeEventListener(
      t,
      a,
      r
    ), !1;
  }
  function ys(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function zb(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Lb(e, t, a, r) {
    if (e.length === 0) return -1;
    r = zb(r);
    for (var c = 0; c < e.length; c++) {
      var f = e[c];
      if (f.type === t && f.listener === a && zb(f.optionsOrUseCapture) === r)
        return c;
    }
    return -1;
  }
  Sn.prototype.dispatchEvent = function(e) {
    var t = x(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = C(t);
    var a = this._eventListeners;
    if (a !== null && 0 < a.length || !e.bubbles) {
      var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (a)
        for (var c = 0; c < a.length; c++) {
          var f = a[c];
          r.addEventListener(
            f.type,
            f.attachedListener,
            ys(f.optionsOrUseCapture)
          );
        }
      if (t.appendChild(r), e = r.dispatchEvent(e), a)
        for (c = 0; c < a.length; c++)
          f = a[c], r.removeEventListener(
            f.type,
            f.attachedListener,
            ys(f.optionsOrUseCapture)
          );
      return t.removeChild(r), e;
    }
    return t.dispatchEvent(e);
  }, Sn.prototype.focus = function(e) {
    m(
      this._fragmentFiber.child,
      !0,
      Vb,
      e,
      void 0,
      void 0
    );
  };
  function Vb(e, t) {
    return e.tag === 6 ? !1 : (e = C(e), u2(e, t));
  }
  Sn.prototype.focusLast = function(e) {
    var t = [];
    m(
      this._fragmentFiber.child,
      !0,
      Ph,
      t,
      void 0,
      void 0
    );
    for (var a = t.length - 1; 0 <= a && !Vb(t[a], e); a--) ;
  };
  function Ph(e, t) {
    return t.push(e), !1;
  }
  Sn.prototype.blur = function() {
    var e = x(
      this._fragmentFiber
    );
    e !== null && (e = C(e), e = Yr(e).activeElement, e !== null && m(
      this._fragmentFiber.child,
      !1,
      WD,
      e,
      void 0,
      void 0
    ));
  };
  function WD(e, t) {
    return e.tag === 6 ? !1 : (e = C(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  Sn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), m(
      this._fragmentFiber.child,
      !1,
      e2,
      e,
      void 0,
      void 0
    );
  };
  function e2(e, t) {
    return e.tag === 6 || (e = C(e), t.observe(e)), !1;
  }
  Sn.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), m(
        this._fragmentFiber.child,
        !1,
        t2,
        e,
        void 0,
        void 0
      );
      for (var a = t = 0; a < Fn.length; a++) {
        var r = Fn[a];
        r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Fn[t++] = r;
      }
      Fn.length = t;
    }
  };
  function t2(e, t) {
    return e.tag === 6 || (e = C(e), t.unobserve(e)), !1;
  }
  var Fn = [], kh = !1;
  function n2(e, t, a) {
    Fn.push({
      fragmentInstance: e,
      observer: t,
      instance: a
    }), kh || (kh = !0, f2(function() {
      kh = !1;
      var r = Fn;
      Fn = [];
      for (var c = 0; c < r.length; c++) {
        var f = r[c];
        f.observer.unobserve(f.instance);
      }
    }));
  }
  Sn.prototype.getClientRects = function() {
    var e = [];
    return m(
      this._fragmentFiber.child,
      !1,
      i2,
      e,
      void 0,
      void 0
    ), e;
  };
  function i2(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var a = e.ownerDocument.createRange();
      a.selectNodeContents(e), t.push.apply(t, a.getClientRects());
    } else
      e = C(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  Sn.prototype.getRootNode = function(e) {
    var t = x(
      this._fragmentFiber
    );
    return t === null ? this : C(t).getRootNode(e);
  }, Sn.prototype.compareDocumentPosition = function(e) {
    var t = x(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var a = [];
    m(
      this._fragmentFiber.child,
      !1,
      Ph,
      a,
      void 0,
      void 0
    );
    var r = C(t);
    if (a.length === 0) {
      if (a = r, T(this._fragmentFiber)) {
        e: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break e;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (a = t);
      }
      t = this._fragmentFiber;
      var c = r = a.compareDocumentPosition(e);
      return a === e ? c = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (a = w(t)[1], a === null ? c = Node.DOCUMENT_POSITION_PRECEDING : (e = C(a).compareDocumentPosition(
        e
      ), c = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), c |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = C(a[0]), c = C(a[a.length - 1]);
    var f = T(this._fragmentFiber) ? t.parentElement : r;
    if (f == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    r = f.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, f = f.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var b = t.compareDocumentPosition(e), E = c.compareDocumentPosition(e), j = b & Node.DOCUMENT_POSITION_CONTAINED_BY || E & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return E = r && f && b & Node.DOCUMENT_POSITION_FOLLOWING && E & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || f && c === e || j || E ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !f && c === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : b, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || a2(
      t,
      this._fragmentFiber,
      a[0],
      a[a.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function a2(e, t, a, r, c) {
    var f = Fa(c);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (a = !!f)
        e: {
          for (; f !== null; ) {
            if (f.tag === 7 && (f === t || f.alternate === t)) {
              a = !0;
              break e;
            }
            f = f.return;
          }
          a = !1;
        }
      return a;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (f === null)
        return f = c.ownerDocument, c === f || c === f.documentElement || c === f.body;
      e: {
        for (f = t, t = x(t); f !== null; ) {
          if (!(f.tag !== 5 && f.tag !== 3 && f.tag !== 27 || f !== t && f.alternate !== t)) {
            f = !0;
            break e;
          }
          f = f.return;
        }
        f = !1;
      }
      return f;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!f) && !(t = f === a) && (t = U(
      a,
      f,
      B
    ), t === null ? t = !1 : (m(
      t,
      !0,
      D,
      f,
      a
    ), f = R, R = null, t = f !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!f) && !(t = f === r) && (t = U(
      r,
      f,
      B
    ), t === null ? t = !1 : (m(
      t,
      !0,
      M,
      f,
      r
    ), f = R, _ = R = null, t = f !== null)), t) : !1;
  }
  function Pb(e, t) {
    var a = e.ownerDocument.createRange();
    a.selectNodeContents(e), e = a.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  Sn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(s(566));
    var t = [];
    m(
      this._fragmentFiber.child,
      !1,
      Ph,
      t,
      void 0,
      void 0
    );
    var a = e !== !1;
    if (t.length === 0) {
      var r = w(
        this._fragmentFiber
      );
      if (r = a ? r[1] || r[0] || x(this._fragmentFiber) : r[0] || r[1], r === null) return;
      if (r.tag === 6) {
        e = C(r), Pb(e, a);
        return;
      }
      if (r = C(r), r.nodeType !== 9) {
        if (r.nodeType === 11) {
          a = "host" in r ? r.host : null, a !== null && a.scrollIntoView(e);
          return;
        }
        r.scrollIntoView(e);
      }
    }
    for (r = a ? t.length - 1 : 0; r !== (a ? -1 : t.length); ) {
      var c = t[r];
      c.tag === 6 ? (c = C(c), Pb(c, a)) : C(c).scrollIntoView(e), r += a ? -1 : 1;
    }
  };
  function o2(e, t) {
    return e = C(e), kb(e, t), !1;
  }
  function kb(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Bb(e, t) {
    var a = t._eventListeners;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var c = a[r];
        e.addEventListener(
          c.type,
          c.attachedListener,
          ys(c.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (a = t._observers, a !== null && a.forEach(function(f) {
      for (var b = 0, E = 0; E < Fn.length; E++) {
        var j = Fn[E];
        (j.fragmentInstance !== t || j.observer !== f || j.instance !== e) && (Fn[b++] = j);
      }
      Fn.length = b, f.observe(e);
    }), kb(e, t));
  }
  function s2(e, t) {
    var a = t._eventListeners;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var c = a[r];
        e.removeEventListener(
          c.type,
          c.attachedListener,
          ys(c.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (a = t._observers, a !== null && a.forEach(function(f) {
      typeof f.rootMargin == "string" ? n2(
        t,
        f,
        e
      ) : f.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function Bh(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bh(a), kl(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function r2(e, t, a, r) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (r) {
        if (!e[cr])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = jn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function l2(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = jn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ub(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = jn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Uh(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Hh(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function c2(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var r = function() {
        t(), a.removeEventListener("DOMContentLoaded", r);
      };
      a.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    }
  }
  function jn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Ih = null;
  function Hb(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return jn(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ib(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function u2(e, t) {
    function a() {
      r = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var r = !1;
    try {
      e.ownerDocument.addEventListener("focus", a, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener("focus", a, !0);
    }
    return r;
  }
  function f2(e) {
    Db(function() {
      Db(function(t) {
        return e(t);
      });
    });
  }
  function qb(e, t, a) {
    switch (t = Yr(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Gb(e, t, a) {
    for (var r in a) {
      var c = a[r];
      a.hasOwnProperty(r) && c != null && Ke(e, t, r, null, UD, c);
    }
    a.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === ai && (e.onclick = null), kl(e);
  }
  function qh(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    kl(e);
  }
  var zn = /* @__PURE__ */ new Map(), Yb = /* @__PURE__ */ new Set();
  function Fr(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ui = re.d;
  re.d = {
    f: d2,
    r: h2,
    D: m2,
    C: p2,
    L: g2,
    m: v2,
    X: b2,
    S: y2,
    M: x2
  };
  function d2() {
    var e = Ui.f(), t = Hc();
    return e || t;
  }
  function h2(e) {
    var t = Po(e);
    t !== null && t.tag === 5 && t.type === "form" ? Xy(t) : Ui.r(e);
  }
  var bs = typeof document > "u" ? null : document;
  function Fb(e, t, a) {
    var r = bs;
    if (r && typeof t == "string" && t) {
      var c = An(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Yb.has(c) || (Yb.add(c), e = { rel: e, crossOrigin: a, href: t }, r.querySelector(c) === null && (t = r.createElement("link"), qt(t, "link", e), Ot(t), r.head.appendChild(t)));
    }
  }
  function m2(e) {
    Ui.D(e), Fb("dns-prefetch", e, null);
  }
  function p2(e, t) {
    Ui.C(e, t), Fb("preconnect", e, t);
  }
  function g2(e, t, a) {
    Ui.L(e, t, a);
    var r = bs;
    if (r && e && t) {
      var c = 'link[rel="preload"][as="' + An(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + An(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + An(
        a.imageSizes
      ) + '"]')) : c += '[href="' + An(e) + '"]';
      var f = c;
      switch (t) {
        case "style":
          f = xs(e);
          break;
        case "script":
          f = Ss(e);
      }
      if (!(zn.has(f) || (e = O(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), zn.set(f, e), r.querySelector(c) !== null || t === "style" && r.querySelector(Xr(f)) || t === "script" && r.querySelector(Kr(f))))) {
        var b = r.createElement("link");
        qt(b, "link", e), t === "style" && (b[Pl] = !0, b.onload = b.onerror = function() {
          ov(b);
        }), Ot(b), r.head.appendChild(b);
      }
    }
  }
  function v2(e, t) {
    Ui.m(e, t);
    var a = bs;
    if (a && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + An(r) + '"][href="' + An(e) + '"]', f = c;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Ss(e);
      }
      if (!zn.has(f) && (e = O({ rel: "modulepreload", href: e }, t), zn.set(f, e), a.querySelector(c) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Kr(f)))
              return;
        }
        r = a.createElement("link"), qt(r, "link", e), Ot(r), a.head.appendChild(r);
      }
    }
  }
  function y2(e, t, a) {
    Ui.S(e, t, a);
    var r = bs;
    if (r && e) {
      var c = ko(r).hoistableStyles, f = xs(e);
      t = t || "default";
      var b = c.get(f);
      if (!b) {
        var E = { loading: 0, preload: null };
        if (b = r.querySelector(
          Xr(f)
        ))
          E.loading = 5;
        else {
          e = O(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = zn.get(f)) && Gh(e, a);
          var j = b = r.createElement("link");
          Ot(j), qt(j, "link", e), j._p = new Promise(function(k, q) {
            j.onload = k, j.onerror = q;
          }), j.addEventListener("load", function() {
            E.loading |= 1;
          }), j.addEventListener("error", function() {
            E.loading |= 2;
          }), E.loading |= 4, Kc(b, t, r);
        }
        b = {
          type: "stylesheet",
          instance: b,
          count: 1,
          state: E
        }, c.set(f, b);
      }
    }
  }
  function b2(e, t) {
    Ui.X(e, t);
    var a = bs;
    if (a && e) {
      var r = ko(a).hoistableScripts, c = Ss(e), f = r.get(c);
      f || (f = a.querySelector(Kr(c)), f || (e = O({ src: e, async: !0 }, t), (t = zn.get(c)) && Yh(e, t), f = a.createElement("script"), Ot(f), qt(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, r.set(c, f));
    }
  }
  function x2(e, t) {
    Ui.M(e, t);
    var a = bs;
    if (a && e) {
      var r = ko(a).hoistableScripts, c = Ss(e), f = r.get(c);
      f || (f = a.querySelector(Kr(c)), f || (e = O({ src: e, async: !0, type: "module" }, t), (t = zn.get(c)) && Yh(e, t), f = a.createElement("script"), Ot(f), qt(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, r.set(c, f));
    }
  }
  function Xb(e, t, a, r) {
    var c = (c = ni.current) ? Fr(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (a = xs(a.href), t = ko(
          c
        ).hoistableStyles, r = t.get(a), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = xs(a.href);
          var f = ko(
            c
          ).hoistableStyles, b = f.get(e);
          if (b || (c = c.ownerDocument || c, b = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, b), (f = c.querySelector(
            Xr(e)
          )) ? f._p || (b.instance = f, b.state.loading = 5) : (f = zn.get(e), f || (f = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, zn.set(e, f)), S2(
            c,
            e,
            f,
            b.state
          ))), t && r === null)
            throw Error(s(528, ""));
          return b;
        }
        if (t && r !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Ss(a), t = ko(
          c
        ).hoistableScripts, r = t.get(a), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function xs(e) {
    return 'href="' + An(e) + '"';
  }
  function Xr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Kb(e) {
    return O({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function S2(e, t, a, r) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[Pl] !== !0) {
        r.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[Pl] = !0, t.onload = t.onerror = ov.bind(null, t), qt(t, "link", a), Ot(t), e.head.appendChild(t);
    r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    });
  }
  function Ss(e) {
    return '[src="' + An(e) + '"]';
  }
  function Kr(e) {
    return "script[async]" + e;
  }
  function Zb(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var r = e.querySelector(
            'style[data-href~="' + An(a.href) + '"]'
          );
          if (r)
            return t.instance = r, Ot(r), r;
          var c = O({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return r = (e.ownerDocument || e).createElement(
            "style"
          ), Ot(r), qt(r, "style", c), Kc(r, a.precedence, e), t.instance = r;
        case "stylesheet":
          c = xs(a.href);
          var f = e.querySelector(
            Xr(c)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, Ot(f), f;
          r = Kb(a), (c = zn.get(c)) && Gh(r, c), f = (e.ownerDocument || e).createElement("link"), Ot(f);
          var b = f;
          return b._p = new Promise(function(E, j) {
            b.onload = E, b.onerror = j;
          }), qt(f, "link", r), t.state.loading |= 4, Kc(f, a.precedence, e), t.instance = f;
        case "script":
          return f = Ss(a.src), (c = e.querySelector(
            Kr(f)
          )) ? (t.instance = c, Ot(c), c) : (r = a, (c = zn.get(f)) && (r = O({}, a), Yh(r, c)), e = e.ownerDocument || e, c = e.createElement("script"), Ot(c), qt(c, "link", r), e.head.appendChild(c), t.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, Kc(r, a.precedence, e));
    return t.instance;
  }
  function Kc(e, t, a) {
    for (var r = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = r.length ? r[r.length - 1] : null, f = c, b = 0; b < r.length; b++) {
      var E = r[b];
      if (E.dataset.precedence === t) f = E;
      else if (f !== c) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Gh(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Yh(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Zc = null;
  function $b(e, t, a) {
    if (Zc === null) {
      var r = /* @__PURE__ */ new Map(), c = Zc = /* @__PURE__ */ new Map();
      c.set(a, r);
    } else
      c = Zc, r = c.get(a), r || (r = /* @__PURE__ */ new Map(), c.set(a, r));
    if (r.has(e)) return r;
    for (r.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var f = a[c];
      if (!(f[cr] || f[kt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = f.getAttribute(t) || "";
        b = e + b;
        var E = r.get(b);
        E ? E.push(f) : r.set(b, [f]);
      }
    }
    return r;
  }
  function Fh(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function w2(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Qb(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Jb(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Wb(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function ex(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Wb(t), e.suspenseyImages.push(t)), e = C2.bind(e), t.decode().then(e, e));
  }
  function T2(e, t, a, r) {
    if (a.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var c = xs(r.href), f = t.querySelector(
          Xr(c)
        );
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Zr.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = f, Ot(f);
          return;
        }
        f = t.ownerDocument || t, r = Kb(r), (c = zn.get(c)) && Gh(r, c), f = f.createElement("link"), Ot(f);
        var b = f;
        b._p = new Promise(function(E, j) {
          b.onload = E, b.onerror = j;
        }), qt(f, "link", r), a.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Zr.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var $c = 0;
  function E2(e, t) {
    return e.stylesheets && e.count === 0 && Jc(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var r = setTimeout(function() {
        if (e.stylesheets && Jc(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && $c === 0 && ($c = 62500 * ID());
      var c = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Jc(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        },
        (e.imgBytes > $c ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(r), clearTimeout(c);
      };
    } : null;
  }
  function tx(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Jc(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Zr() {
    this.count--, tx(this);
  }
  function C2() {
    this.imgCount--, tx(this);
  }
  var Qc = null;
  function Jc(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Qc = /* @__PURE__ */ new Map(), t.forEach(A2, e), Qc = null, Zr.call(e));
  }
  function A2(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Qc.get(e);
      if (a) var r = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Qc.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < c.length; f++) {
          var b = c[f];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (a.set(b.dataset.precedence, b), r = b);
        }
        r && a.set(null, r);
      }
      c = t.instance, b = c.getAttribute("data-precedence"), f = a.get(b) || r, f === r && a.set(null, c), a.set(b, c), this.count++, r = Zr.bind(this), c.addEventListener("load", r), c.addEventListener("error", r), f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ws = {
    $$typeof: he,
    Provider: null,
    Consumer: null,
    _currentValue: Ae,
    _currentValue2: Ae,
    _threadCount: 0
  };
  function R2(e, t, a, r, c, f, b, E, j) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Af(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Af(0), this.hiddenUpdates = Af(null), this.identifierPrefix = r, this.onUncaughtError = c, this.onCaughtError = f, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = j, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nx(e, t, a, r, c, f, b, E, j, k, q, Z) {
    return e = new R2(
      e,
      t,
      a,
      b,
      j,
      k,
      q,
      Z,
      E
    ), t = 1, f === !0 && (t |= 24), f = on(3, null, null, t), e.current = f, f.stateNode = e, t = rd(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: r,
      isDehydrated: a,
      cache: t
    }, fd(f), e;
  }
  function ix(e) {
    return e ? (e = Ko, e) : Ko;
  }
  function ax(e, t, a, r, c, f) {
    c = ix(c), r.context === null ? r.context = c : r.pendingContext = c, r = ma(t), r.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (r.callback = f), a = pa(e, r, t), a !== null && (cn(a, e, t), Ar(a, e, t));
  }
  function ox(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Xh(e, t) {
    ox(e, t), (e = e.alternate) && ox(e, t);
  }
  function sx(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = $a(e, 67108864);
      t !== null && cn(t, e, 67108864), Xh(e, 67108864);
    }
  }
  function rx(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xn();
      t = Rf(t);
      var a = $a(e, t);
      a !== null && cn(a, e, t), Xh(e, t);
    }
  }
  var Ts = !0;
  function D2(e, t, a, r) {
    var c = ne.T;
    ne.T = null;
    var f = re.p;
    try {
      re.p = 2, Kh(e, t, a, r);
    } finally {
      re.p = f, ne.T = c;
    }
  }
  function O2(e, t, a, r) {
    var c = ne.T;
    ne.T = null;
    var f = re.p;
    try {
      re.p = 8, Kh(e, t, a, r);
    } finally {
      re.p = f, ne.T = c;
    }
  }
  function Kh(e, t, a, r) {
    if (Ts) {
      var c = Zh(r);
      if (c === null)
        Oh(
          e,
          t,
          r,
          Wc,
          a
        ), cx(e, r);
      else if (N2(
        c,
        e,
        t,
        a,
        r
      ))
        r.stopPropagation();
      else if (cx(e, r), t & 4 && -1 < M2.indexOf(e)) {
        for (; c !== null; ) {
          var f = Po(c);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var b = Ya(f.pendingLanes);
                  if (b !== 0) {
                    var E = f;
                    for (E.pendingLanes |= 2, E.entangledLanes |= 2; b; ) {
                      var j = 1 << 31 - Ie(b);
                      E.entanglements[1] |= j, b &= ~j;
                    }
                    mi(f), (qe & 6) === 0 && (kc = Kt() + 500, Ir(0));
                  }
                }
                break;
              case 31:
              case 13:
                E = $a(f, 2), E !== null && cn(E, f, 2), Hc(), Xh(f, 2);
            }
          if (f = Zh(r), f === null && Oh(
            e,
            t,
            r,
            Wc,
            a
          ), f === c) break;
          c = f;
        }
        c !== null && r.stopPropagation();
      } else
        Oh(
          e,
          t,
          r,
          null,
          a
        );
    }
  }
  function Zh(e) {
    return e = zf(e), $h(e);
  }
  var Wc = null;
  function $h(e) {
    if (Wc = null, e = Fa(e), e !== null) {
      var t = u(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Wc = e, null;
  }
  function lx(e) {
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
        switch (ir()) {
          case Un:
            return 2;
          case ar:
            return 8;
          case Lo:
          case zl:
            return 32;
          case or:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qh = !1, Ra = null, Da = null, Oa = null, $r = /* @__PURE__ */ new Map(), Qr = /* @__PURE__ */ new Map(), Ma = [], M2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function cx(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ra = null;
        break;
      case "dragenter":
      case "dragleave":
        Da = null;
        break;
      case "mouseover":
      case "mouseout":
        Oa = null;
        break;
      case "pointerover":
      case "pointerout":
        $r.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qr.delete(t.pointerId);
    }
  }
  function Jr(e, t, a, r, c, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: r,
      nativeEvent: f,
      targetContainers: [c]
    }, t !== null && (t = Po(t), t !== null && sx(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function N2(e, t, a, r, c) {
    switch (t) {
      case "focusin":
        return Ra = Jr(
          Ra,
          e,
          t,
          a,
          r,
          c
        ), !0;
      case "dragenter":
        return Da = Jr(
          Da,
          e,
          t,
          a,
          r,
          c
        ), !0;
      case "mouseover":
        return Oa = Jr(
          Oa,
          e,
          t,
          a,
          r,
          c
        ), !0;
      case "pointerover":
        var f = c.pointerId;
        return $r.set(
          f,
          Jr(
            $r.get(f) || null,
            e,
            t,
            a,
            r,
            c
          )
        ), !0;
      case "gotpointercapture":
        return f = c.pointerId, Qr.set(
          f,
          Jr(
            Qr.get(f) || null,
            e,
            t,
            a,
            r,
            c
          )
        ), !0;
    }
    return !1;
  }
  function ux(e) {
    var t = Fa(e.target);
    if (t !== null) {
      var a = u(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = d(a), t !== null) {
            e.blockedOn = t, nv(e.priority, function() {
              rx(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(a), t !== null) {
            e.blockedOn = t, nv(e.priority, function() {
              rx(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function eu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Zh(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var r = new a.constructor(
          a.type,
          a
        );
        jf = r, a.target.dispatchEvent(r), jf = null;
      } else
        return t = Po(a), t !== null && sx(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function fx(e, t, a) {
    eu(e) && a.delete(t);
  }
  function _2() {
    Qh = !1, Ra !== null && eu(Ra) && (Ra = null), Da !== null && eu(Da) && (Da = null), Oa !== null && eu(Oa) && (Oa = null), $r.forEach(fx), Qr.forEach(fx);
  }
  function tu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Qh || (Qh = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      _2
    )));
  }
  var nu = null;
  function dx(e) {
    nu !== e && (nu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        nu === e && (nu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], r = e[t + 1], c = e[t + 2];
          if (typeof r != "function") {
            if ($h(r || a) === null)
              continue;
            break;
          }
          var f = Po(a);
          f !== null && (e.splice(t, 3), t -= 3, _d(
            f,
            {
              pending: !0,
              data: c,
              method: a.method,
              action: r
            },
            r,
            c
          ));
        }
      }
    ));
  }
  function Es(e) {
    function t(j) {
      return tu(j, e);
    }
    Ra !== null && tu(Ra, e), Da !== null && tu(Da, e), Oa !== null && tu(Oa, e), $r.forEach(t), Qr.forEach(t);
    for (var a = 0; a < Ma.length; a++) {
      var r = Ma[a];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < Ma.length && (a = Ma[0], a.blockedOn === null); )
      ux(a), a.blockedOn === null && Ma.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (r = 0; r < a.length; r += 3) {
        var c = a[r], f = a[r + 1], b = c[an] || null;
        if (typeof f == "function")
          b || dx(a);
        else if (b) {
          var E = null;
          if (f && f.hasAttribute("formAction")) {
            if (c = f, b = f[an] || null)
              E = b.formAction;
            else if ($h(c) !== null) continue;
          } else E = b.action;
          typeof E == "function" ? a[r + 1] = E : (a.splice(r, 3), r -= 3), dx(a);
        }
      }
  }
  function hx() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(b) {
            return c = b;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      c !== null && (c(), c = null), r || setTimeout(a, 20);
    }
    function a() {
      if (!r && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var r = !1, c = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null);
      };
    }
  }
  function Jh(e) {
    this._internalRoot = e;
  }
  iu.prototype.render = Jh.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var a = t.current, r = xn();
    ax(a, r, e, t, null, null);
  }, iu.prototype.unmount = Jh.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ax(e.current, 2, null, e, null, null), Hc(), t[Vo] = null;
    }
  };
  function iu(e) {
    this._internalRoot = e;
  }
  iu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = tv();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Ma.length && t !== 0 && t < Ma[a].priority; a++) ;
      Ma.splice(a, 0, e), a === 0 && ux(e);
    }
  };
  var mx = i.version;
  if (mx !== "19.3.0")
    throw Error(
      s(
        527,
        mx,
        "19.3.0"
      )
    );
  re.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = p(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var j2 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ne,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!au.isDisabled && au.supportsFiber)
      try {
        rt = au.inject(
          j2
        ), $e = au;
      } catch {
      }
  }
  return el.createRoot = function(e, t) {
    if (!l(e)) throw Error(s(299));
    var a = !1, r = "", c = i0, f = a0, b = o0;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (b = t.onRecoverableError)), t = nx(
      e,
      1,
      !1,
      null,
      null,
      a,
      r,
      null,
      c,
      f,
      b,
      hx
    ), e[Vo] = t.current, Dh(e), new Jh(t);
  }, el.hydrateRoot = function(e, t, a) {
    if (!l(e)) throw Error(s(299));
    var r = !1, c = "", f = i0, b = a0, E = o0, j = null;
    return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (b = a.onCaughtError), a.onRecoverableError !== void 0 && (E = a.onRecoverableError), a.formState !== void 0 && (j = a.formState)), t = nx(
      e,
      1,
      !0,
      t,
      a ?? null,
      r,
      c,
      j,
      f,
      b,
      E,
      hx
    ), t.context = ix(null), a = t.current, r = xn(), r = Rf(r), c = ma(r), c.callback = null, pa(a, c, r), a = r, t.current.lanes = a, lr(t, a), mi(t), e[Vo] = t.current, Dh(e), new iu(t);
  }, el.version = "19.3.0", el;
}
var Rx;
function q2() {
  if (Rx) return nm.exports;
  Rx = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), nm.exports = I2(), nm.exports;
}
var G2 = q2();
const jp = S.createContext({});
function Gs(n) {
  const i = S.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const Y2 = typeof window < "u", ks = Y2 ? S.useLayoutEffect : S.useEffect, Wu = /* @__PURE__ */ S.createContext(null);
function zp(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Lu(n, i) {
  const o = n.indexOf(i);
  o > -1 && n.splice(o, 1);
}
const na = (n, i, o) => o > i ? i : o < n ? n : o;
let ef = () => {
};
const xi = {}, Lp = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n), Y1 = (n) => typeof n == "object" && n !== null, Vp = (n) => /^0[^.\s]+$/u.test(n);
// @__NO_SIDE_EFFECTS__
function F1(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const Jn = /* @__NO_SIDE_EFFECTS__ */ (n) => n, Cl = (...n) => n.reduce((i, o) => (s) => o(i(s))), fl = /* @__NO_SIDE_EFFECTS__ */ (n, i, o) => {
  const s = i - n;
  return s ? (o - n) / s : 1;
};
class Vu {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return zp(this.subscriptions, i), () => this.remove(i);
  }
  remove(i) {
    Lu(this.subscriptions, i);
  }
  notify(i, o, s) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1)
        this.subscriptions[0](i, o, s);
      else
        for (let u = 0; u < l; u++) {
          const d = this.subscriptions[u];
          d && d(i, o, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Pn = /* @__NO_SIDE_EFFECTS__ */ (n) => n * 1e3, Vn = /* @__NO_SIDE_EFFECTS__ */ (n) => n / 1e3, X1 = /* @__NO_SIDE_EFFECTS__ */ (n, i) => i ? n * (1e3 / i) : 0, K1 = (n, i, o) => (((1 - 3 * o + 3 * i) * n + (3 * o - 6 * i)) * n + 3 * i) * n, F2 = 1e-7, X2 = 12;
function K2(n, i, o, s, l) {
  let u, d, h = 0;
  do
    d = i + (o - i) / 2, u = K1(d, s, l) - n, u > 0 ? o = d : i = d;
  while (Math.abs(u) > F2 && ++h < X2);
  return d;
}
// @__NO_SIDE_EFFECTS__
function Al(n, i, o, s) {
  if (n === i && o === s)
    return Jn;
  const l = (u) => K2(u, 0, 1, n, o);
  return (u) => u === 0 || u === 1 ? u : K1(l(u), i, s);
}
const Z1 = /* @__NO_SIDE_EFFECTS__ */ (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2, $1 = /* @__NO_SIDE_EFFECTS__ */ (n) => (i) => 1 - n(1 - i), Q1 = /* @__PURE__ */ Al(0.33, 1.53, 0.69, 0.99), Pp = /* @__PURE__ */ $1(Q1), J1 = /* @__PURE__ */ Z1(Pp), W1 = (n) => n >= 1 ? 1 : (n *= 2) < 1 ? 0.5 * Pp(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))), kp = (n) => 1 - Math.sin(Math.acos(n)), ew = /* @__PURE__ */ $1(kp), tw = /* @__PURE__ */ Z1(kp), Z2 = /* @__PURE__ */ Al(0.42, 0, 1, 1), $2 = /* @__PURE__ */ Al(0, 0, 0.58, 1), Bp = /* @__PURE__ */ Al(0.42, 0, 0.58, 1), Q2 = /* @__NO_SIDE_EFFECTS__ */ (n) => Array.isArray(n) && typeof n[0] != "number", nw = /* @__NO_SIDE_EFFECTS__ */ (n) => Array.isArray(n) && typeof n[0] == "number", J2 = {
  linear: Jn,
  easeIn: Z2,
  easeInOut: Bp,
  easeOut: $2,
  circIn: kp,
  circInOut: tw,
  circOut: ew,
  backIn: Pp,
  backInOut: J1,
  backOut: Q1,
  anticipate: W1
}, W2 = (n) => typeof n == "string", Dx = (n) => {
  if (/* @__PURE__ */ nw(n)) {
    ef(n.length === 4);
    const [i, o, s, l] = n;
    return /* @__PURE__ */ Al(i, o, s, l);
  } else if (W2(n))
    return J2[n];
  return n;
}, At = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let wu;
function eO() {
  wu = void 0;
}
const Vt = {
  now: () => (wu === void 0 && Vt.set(At.isProcessing || xi.useManualTiming ? At.timestamp : performance.now()), wu),
  set: (n) => {
    wu = n, queueMicrotask(eO);
  }
}, Ls = (n) => Math.round(n * 1e5) / 1e5, iw = (n) => (i) => typeof i == "string" && i.startsWith(n), aw = /* @__PURE__ */ iw("--"), tO = /* @__PURE__ */ iw("var(--"), Up = (n) => tO(n) ? nO.test(n.split("/*")[0].trim()) : !1, nO = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ox(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const Ys = {
  test: (n) => typeof n == "number",
  parse: parseFloat,
  transform: (n) => n
}, dl = {
  ...Ys,
  transform: (n) => na(0, 1, n)
}, ou = {
  ...Ys,
  default: 1
}, Hp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function iO(n) {
  return n == null;
}
const aO = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ip = (n, i) => (o) => !!(typeof o == "string" && aO.test(o) && o.startsWith(n) || i && !iO(o) && Object.prototype.hasOwnProperty.call(o, i)), ow = (n, i, o) => (s) => {
  if (typeof s != "string")
    return s;
  const [l, u, d, h] = s.match(Hp);
  return {
    [n]: parseFloat(l),
    [i]: parseFloat(u),
    [o]: parseFloat(d),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, oO = (n) => na(0, 255, n), sm = {
  ...Ys,
  transform: (n) => Math.round(oO(n))
}, bo = {
  test: /* @__PURE__ */ Ip("rgb", "red"),
  parse: /* @__PURE__ */ ow("red", "green", "blue"),
  transform: ({ red: n, green: i, blue: o, alpha: s = 1 }) => "rgba(" + sm.transform(n) + ", " + sm.transform(i) + ", " + sm.transform(o) + ", " + Ls(dl.transform(s)) + ")"
};
function sO(n) {
  let i = "", o = "", s = "", l = "";
  return n.length > 5 ? (i = n.substring(1, 3), o = n.substring(3, 5), s = n.substring(5, 7), l = n.substring(7, 9)) : (i = n.substring(1, 2), o = n.substring(2, 3), s = n.substring(3, 4), l = n.substring(4, 5), i += i, o += o, s += s, l += l), {
    red: parseInt(i, 16),
    green: parseInt(o, 16),
    blue: parseInt(s, 16),
    alpha: l ? parseInt(l, 16) / 255 : 1
  };
}
const Bm = {
  test: /* @__PURE__ */ Ip("#"),
  parse: sO,
  transform: bo.transform
}, Rl = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
  test: (i) => typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: (i) => `${i}${n}`
}), Ii = /* @__PURE__ */ Rl("deg"), bi = /* @__PURE__ */ Rl("%"), ve = /* @__PURE__ */ Rl("px"), rO = /* @__PURE__ */ Rl("vh"), lO = /* @__PURE__ */ Rl("vw"), Mx = {
  ...bi,
  parse: (n) => bi.parse(n) / 100,
  transform: (n) => bi.transform(n * 100)
}, Ns = {
  test: /* @__PURE__ */ Ip("hsl", "hue"),
  parse: /* @__PURE__ */ ow("hue", "saturation", "lightness"),
  transform: ({ hue: n, saturation: i, lightness: o, alpha: s = 1 }) => "hsla(" + Math.round(n) + ", " + bi.transform(Ls(i)) + ", " + bi.transform(Ls(o)) + ", " + Ls(dl.transform(s)) + ")"
}, Rt = {
  test: (n) => bo.test(n) || Bm.test(n) || Ns.test(n),
  parse: (n) => bo.test(n) ? bo.parse(n) : Ns.test(n) ? Ns.parse(n) : Bm.parse(n),
  transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? bo.transform(n) : Ns.transform(n),
  getAnimatableNone: (n) => {
    const i = Rt.parse(n);
    return i.alpha = 0, Rt.transform(i);
  }
}, cO = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, sw = /* @__PURE__ */ new RegExp(Hp.source), rw = /* @__PURE__ */ new RegExp(cO.source, "i");
function uO(n) {
  return isNaN(n) && typeof n == "string" && (sw.test(n) || rw.test(n));
}
const lw = "number", cw = "color", fO = "var", dO = "var(", Nx = "${}", hO = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function mO(n) {
  const i = n.toString();
  return sw.test(i) || rw.test(i);
}
function hl(n) {
  const i = n.toString(), o = [], s = {
    color: [],
    number: [],
    var: []
  }, l = [];
  let u = 0;
  const h = i.replace(hO, (g) => (Rt.test(g) ? (s.color.push(u), l.push(cw), o.push(Rt.parse(g))) : g.startsWith(dO) ? (s.var.push(u), l.push(fO), o.push(g)) : (s.number.push(u), l.push(lw), o.push(parseFloat(g))), ++u, Nx)).split(Nx);
  return { values: o, split: h, indexes: s, types: l };
}
function pO(n) {
  return hl(n).values;
}
function uw({ split: n, types: i }) {
  const o = n.length;
  return (s) => {
    let l = "";
    for (let u = 0; u < o; u++)
      if (l += n[u], s[u] !== void 0) {
        const d = i[u];
        d === lw ? l += Ls(s[u]) : d === cw ? l += Rt.transform(s[u]) : l += s[u];
      }
    return l;
  };
}
function gO(n) {
  return uw(hl(n));
}
const vO = (n) => typeof n == "number" ? 0 : Rt.test(n) ? Rt.getAnimatableNone(n) : n, yO = (n, i) => typeof n == "number" ? i?.trim().endsWith("/") ? n : 0 : vO(n);
function bO(n) {
  const i = hl(n);
  return uw(i)(i.values.map((s, l) => yO(s, i.split[l])));
}
const Tn = {
  test: uO,
  parse: pO,
  createTransformer: gO,
  getAnimatableNone: bO
};
function rm(n, i, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? n + (i - n) * 6 * o : o < 1 / 2 ? i : o < 2 / 3 ? n + (i - n) * (2 / 3 - o) * 6 : n;
}
function xO({ hue: n, saturation: i, lightness: o, alpha: s }) {
  n /= 360, i /= 100, o /= 100;
  let l = 0, u = 0, d = 0;
  if (!i)
    l = u = d = o;
  else {
    const h = o < 0.5 ? o * (1 + i) : o + i - o * i, g = 2 * o - h;
    l = rm(g, h, n + 1 / 3), u = rm(g, h, n), d = rm(g, h, n - 1 / 3);
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(u * 255),
    blue: Math.round(d * 255),
    alpha: s
  };
}
function Pu(n, i) {
  return (o) => o > 0 ? i : n;
}
const Je = (n, i, o) => n + (i - n) * o, lm = (n, i, o) => {
  const s = n * n, l = o * (i * i - s) + s;
  return l < 0 ? 0 : Math.sqrt(l);
}, SO = [Bm, bo, Ns], wO = (n) => SO.find((i) => i.test(n));
function _x(n) {
  const i = wO(n);
  if (!i)
    return !1;
  let o = i.parse(n);
  return i === Ns && (o = xO(o)), o;
}
const jx = (n, i) => {
  const o = _x(n), s = _x(i);
  if (!o || !s)
    return Pu(n, i);
  const l = { ...o };
  return (u) => (l.red = lm(o.red, s.red, u), l.green = lm(o.green, s.green, u), l.blue = lm(o.blue, s.blue, u), l.alpha = Je(o.alpha, s.alpha, u), bo.transform(l));
}, Um = /* @__PURE__ */ new Set(["none", "hidden"]);
function TO(n, i) {
  return Um.has(n) ? (o) => o <= 0 ? n : i : (o) => o >= 1 ? i : n;
}
function EO(n, i) {
  return (o) => Je(n, i, o);
}
function qp(n) {
  return typeof n == "number" ? EO : typeof n == "string" ? Up(n) ? Pu : Rt.test(n) ? jx : RO : Array.isArray(n) ? fw : typeof n == "object" ? Rt.test(n) ? jx : CO : Pu;
}
function fw(n, i) {
  const o = [...n], s = o.length, l = n.map((u, d) => qp(u)(u, i[d]));
  return (u) => {
    for (let d = 0; d < s; d++)
      o[d] = l[d](u);
    return o;
  };
}
function CO(n, i) {
  const o = { ...n, ...i }, s = {};
  for (const l in o)
    n[l] !== void 0 && i[l] !== void 0 && (s[l] = qp(n[l])(n[l], i[l]));
  return (l) => {
    for (const u in s)
      o[u] = s[u](l);
    return o;
  };
}
function AO(n, i) {
  const o = [], s = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < i.values.length; l++) {
    const u = i.types[l], d = n.indexes[u][s[u]], h = n.values[d] ?? 0;
    o[l] = h, s[u]++;
  }
  return o;
}
const RO = (n, i) => {
  const o = Tn.createTransformer(i), s = hl(n), l = hl(i);
  return s.indexes.var.length === l.indexes.var.length && s.indexes.color.length === l.indexes.color.length && s.indexes.number.length >= l.indexes.number.length ? Um.has(n) && !l.values.length || Um.has(i) && !s.values.length ? TO(n, i) : Cl(fw(AO(s, l), l.values), o) : Pu(n, i);
}, zx = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function DO(n, i) {
  const o = zx.exec(n);
  if (!o)
    return;
  const s = zx.exec(i);
  if (!s || o[2] !== s[2])
    return;
  const l = o[2], u = parseFloat(o[1]), d = parseFloat(s[1]);
  return (h) => Ls(Je(u, d, h)) + l;
}
function Gp(n, i, o) {
  if (typeof n == "number" && typeof i == "number" && typeof o == "number")
    return Je(n, i, o);
  if (typeof n == "string" && typeof i == "string") {
    const l = DO(n, i);
    if (l)
      return l;
  }
  return qp(n)(n, i);
}
const su = [
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
function OO(n) {
  let i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = !1, l = !1;
  const u = /* @__PURE__ */ new Set();
  let d = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function h(p) {
    u.has(p) && (o.add(p), n()), p(d);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (p, v = !1, m = !1) => {
      const T = m && s ? i : o;
      return v && u.add(p), T.add(p), p;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (p) => {
      o.delete(p), u.delete(p);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (p) => {
      if (d = p, s) {
        l = !0;
        return;
      }
      s = !0;
      const v = i;
      i = o, o = v, i.forEach(h), i.clear(), s = !1, l && (l = !1, g.process(p));
    }
  };
  return g;
}
const MO = 40;
function dw(n, i, o = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let s = !1, l = !0;
  const u = () => s = !0, d = su.reduce((D, M) => (D[M] = OO(u), D), {}), { setup: h, read: g, resolveKeyframes: p, preUpdate: v, update: m, preRender: x, render: T, postRender: w } = d, A = () => {
    const D = xi.useManualTiming, M = D ? o.timestamp : performance.now();
    s = !1, D || (o.delta = l ? 1e3 / 60 : Math.max(Math.min(M - o.timestamp, MO), 1)), o.timestamp = M, o.isProcessing = !0, h.process(o), g.process(o), p.process(o), v.process(o), m.process(o), x.process(o), T.process(o), w.process(o), o.isProcessing = !1, s && i && (l = !1, n(A));
  }, C = () => {
    s = !0, l = !0, o.isProcessing || n(A);
  };
  return { schedule: su.reduce((D, M) => {
    const B = d[M];
    return D[M] = (U, O = !1, N = !1) => (s || C(), B.schedule(U, O, N)), D;
  }, {}), cancel: (D) => {
    for (let M = 0; M < su.length; M++)
      d[su[M]].cancel(D);
  }, state: o, steps: d };
}
const { schedule: Ze, cancel: Si, steps: cm } = /* @__PURE__ */ dw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Jn, !0, At), NO = (n) => {
  const i = ({ timestamp: o }) => n(o);
  return {
    start: (o = !0) => Ze.update(i, o),
    stop: () => Si(i),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => At.isProcessing ? At.timestamp : Vt.now()
  };
}, hw = (n, i, o = 10) => {
  let s = "";
  const l = Math.max(Math.round(i / o), 2);
  for (let u = 0; u < l; u++)
    s += Math.round(n(u / (l - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, Yp = 2e4;
function Fp(n, i = 50, o = Yp, s) {
  let l = 0, u = n.next(l);
  for (; !u.done && l < o; )
    l += i, u = n.next(l);
  return l >= o ? 1 / 0 : l;
}
function _O(n, i = 100, o) {
  const s = o({ ...n, keyframes: [0, i] }), l = Math.min(Fp(s), Yp);
  return {
    type: "keyframes",
    ease: (u) => s.next(l * u).value / i,
    duration: /* @__PURE__ */ Vn(l)
  };
}
const Yt = {
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
}, mw = (n) => n < 0 ? 1 / Math.max(1 + n, Yt.minDamping) : Math.max(1 - n, Yt.minDamping);
function pw(n, i) {
  if (!(n > 1))
    return 1;
  const o = Math.sqrt(n * n - 1), s = n - o, l = n + o, u = 2 * o * Math.exp(-i) * (1 + i);
  return gw((d) => l * Math.exp(-s * d) - s * Math.exp(-l * d) - u, (d) => Math.exp(-l * d) - Math.exp(-s * d), i) / i;
}
function Hm(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const jO = 12;
function gw(n, i, o) {
  let s = o;
  for (let l = 1; l < jO; l++)
    s = s - n(s) / i(s);
  return s;
}
const um = 1e-3;
function zO({ duration: n = Yt.duration, bounce: i = Yt.bounce }) {
  let o, s;
  const l = mw(i);
  n = na(Yt.minDuration, Yt.maxDuration, /* @__PURE__ */ Vn(n)), l < 1 ? (o = (p) => {
    const v = p * l, m = v * n, x = Hm(p, l), T = Math.exp(-m);
    return um - v / x * T;
  }, s = (p) => {
    const m = p * l * n, x = l * l * p * p * n, T = Math.exp(-m), w = Hm(p * p, l);
    return (-o(p) + um > 0 ? -1 : 1) * -x * T / w;
  }) : (o = (p) => {
    const v = Math.exp(-p * n), m = p * n + 1;
    return -um + v * m;
  }, s = (p) => {
    const v = Math.exp(-p * n), m = -p * (n * n);
    return v * m;
  });
  const u = 5 / n, d = gw(o, s, u), h = d * pw(l, d * n), g = h * h;
  return {
    stiffness: g,
    damping: l * 2 * Math.sqrt(g),
    duration: /* @__PURE__ */ Pn(n)
  };
}
const Im = (n, i) => (i ? n >= 0 : n > 0) && n < 1 / 0;
function fm(n, i) {
  if (Im(n, i))
    return n;
}
function LO(n) {
  const i = fm(n.stiffness), o = fm(n.damping, !0), s = fm(n.mass), l = {
    ...n,
    stiffness: i ?? Yt.stiffness,
    damping: o ?? Yt.damping,
    mass: s ?? Yt.mass,
    isResolvedFromDuration: !1,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (i ?? o ?? s) === void 0 && (n.duration !== void 0 || n.bounce !== void 0)
  };
  if (l.isTimeDefined) {
    if (n.visualDuration) {
      const u = mw(n.bounce || 0), d = 2 * Math.PI / (n.visualDuration * 1.2) * pw(u, 2 * Math.PI / 1.2);
      l.stiffness = d * d, l.damping = 2 * u * Math.sqrt(l.stiffness);
    } else
      Object.assign(l, zO(l)), l.isResolvedFromDuration = !0;
    (!Im(l.stiffness) || !Im(l.damping, !0)) && (l.stiffness = Yt.stiffness, l.damping = Yt.damping);
  }
  return l;
}
function ml(n = Yt.visualDuration, i = Yt.bounce) {
  const o = typeof n != "object" ? {
    visualDuration: n,
    keyframes: [0, 1],
    bounce: i
  } : n, s = o.keyframes[0], l = o.keyframes[o.keyframes.length - 1], u = { done: !1, value: s }, { stiffness: d, damping: h, mass: g, duration: p, isResolvedFromDuration: v, isTimeDefined: m } = LO({ ...o }), x = (O) => m ? 0 : -/* @__PURE__ */ Vn(O), T = h / (2 * Math.sqrt(d * g)), w = /* @__PURE__ */ Vn(Math.sqrt(d / g)), A = T * w, C = {
    target: l,
    delta: l - s,
    velocity: x(o.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, R = () => {
    const O = Math.abs(C.delta) < 5;
    C.restSpeed = o.restSpeed || (O ? Yt.restSpeed.granular : Yt.restSpeed.default), C.restDelta = o.restDelta || (O ? Yt.restDelta.granular : Yt.restDelta.default);
  };
  R();
  let _, D, M;
  if (T < 1) {
    const O = Hm(w, T), N = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    M = () => {
      N.A = (C.velocity + A * C.delta) / O, N.sinC = A * N.A + C.delta * O, N.cosC = A * C.delta - N.A * O;
    };
    const F = (Q) => {
      Q !== N.t && (N.t = Q, N.env = Math.exp(-A * Q), N.sin = Math.sin(O * Q), N.cos = Math.cos(O * Q));
    };
    _ = (Q) => (F(Q), C.target - N.env * (N.A * N.sin + C.delta * N.cos)), D = (Q) => (F(Q), N.env * (N.sinC * N.sin + N.cosC * N.cos));
  } else if (T === 1) {
    _ = (N) => C.target - Math.exp(-w * N) * (C.delta + (C.velocity + w * C.delta) * N);
    const O = { C: 0 };
    M = () => {
      O.C = C.velocity + w * C.delta;
    }, D = (N) => Math.exp(-w * N) * (w * O.C * N - C.velocity);
  } else {
    const O = w * Math.sqrt(T * T - 1), N = A - O, F = A + O, Q = m ? 1 / 0 : 300 / O, ue = (te, fe) => Math.exp(fe > Q ? -te * Q - A * (fe - Q) : -te * fe), ie = { S: 0, F: 0 };
    M = () => {
      const te = (C.velocity + A * C.delta) / O;
      ie.S = (C.delta + te) / 2, ie.F = (C.delta - te) / 2;
    }, _ = (te) => C.target - ie.S * ue(N, te) - ie.F * ue(F, te), D = (te) => N * ie.S * ue(N, te) + F * ie.F * ue(F, te);
  }
  M();
  const B = v && p || null, U = {
    calculatedDuration: B,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (O, N) => {
      C.target = O[O.length - 1], C.delta = C.target - O[0], C.velocity = x(N), o.restSpeed && o.restDelta || R(), U.calculatedDuration = B, u.done = !1, M();
    },
    velocity: (O) => /* @__PURE__ */ Pn(D(O)),
    next: (O) => {
      const N = _(O);
      if (v)
        u.done = O >= p;
      else {
        const F = /* @__PURE__ */ Pn(D(O));
        u.done = Math.abs(F) <= C.restSpeed && Math.abs(C.target - N) <= C.restDelta;
      }
      return u.value = u.done ? C.target : N, u;
    },
    toString: () => {
      const O = Math.min(Fp(U), Yp), N = hw((F) => U.next(O * F).value, O, 30);
      return O + "ms " + N;
    },
    toTransition: () => {
    }
  };
  return U;
}
ml.applyToOptions = (n) => {
  const i = _O(n, 100, ml);
  return n.ease = i.ease, n.duration = /* @__PURE__ */ Pn(i.duration), n.type = "keyframes", n;
};
function qm({ keyframes: n, velocity: i = 0, power: o = 0.8, timeConstant: s = 325, bounceDamping: l = 10, bounceStiffness: u = 500, modifyTarget: d, min: h, max: g, restDelta: p = 0.5, restSpeed: v }) {
  const m = n[0], x = {
    done: !1,
    value: m
  }, T = (O) => O < h || O > g, w = (O) => h === void 0 ? g : g === void 0 || Math.abs(h - O) < Math.abs(g - O) ? h : g;
  let A = o * i;
  const C = m + A, R = d === void 0 ? C : d(C);
  R !== C && (A = R - m);
  const _ = (O) => -A * Math.exp(-O / s), D = (O) => {
    const N = _(O);
    x.done = Math.abs(N) <= p, x.value = x.done ? R : R + N;
  };
  let M, B;
  const U = (O) => {
    T(x.value) && (M = O, B = ml({
      keyframes: [x.value, w(x.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -_(O) / s * 1e3,
      damping: l,
      stiffness: u,
      restDelta: p,
      restSpeed: v
    }));
  };
  return U(0), {
    calculatedDuration: null,
    next: (O) => {
      let N = !1;
      return !B && M === void 0 && (N = !0, D(O), U(O)), M !== void 0 && O >= M ? B.next(O - M) : (!N && D(O), x);
    }
  };
}
function VO(n, i, o) {
  const s = [], l = o || xi.mix || Gp, u = n.length - 1;
  for (let d = 0; d < u; d++) {
    let h = l(n[d], n[d + 1]);
    if (i) {
      const g = Array.isArray(i) ? i[d] || Jn : i;
      h = Cl(g, h);
    }
    s.push(h);
  }
  return s;
}
function vw(n, i, { clamp: o = !0, ease: s, mixer: l } = {}) {
  const u = n.length;
  if (ef(u === i.length), u === 1)
    return () => i[0];
  if (u === 2 && i[0] === i[1])
    return () => i[1];
  const d = n[0] === n[1];
  n[0] > n[u - 1] && (n = [...n].reverse(), i = [...i].reverse());
  const h = VO(i, s, l), g = h.length, p = (v) => {
    if (d && v < n[0])
      return i[0];
    let m = 0;
    if (g > 1)
      for (; m < n.length - 2 && !(v < n[m + 1]); m++)
        ;
    const x = /* @__PURE__ */ fl(n[m], n[m + 1], v);
    return h[m](x);
  };
  return o ? (v) => p(na(n[0], n[u - 1], v)) : p;
}
function PO(n, i) {
  const o = n[n.length - 1];
  for (let s = 1; s <= i; s++) {
    const l = /* @__PURE__ */ fl(0, i, s);
    n.push(Je(o, 1, l));
  }
}
function kO(n) {
  const i = [0];
  return PO(i, n.length - 1), i;
}
function BO(n, i) {
  return n.map((o) => o * i);
}
function UO(n, i) {
  return n.map(() => i || Bp).splice(0, n.length - 1);
}
function rl({ duration: n = 300, keyframes: i, times: o, ease: s = "easeInOut" }) {
  const l = /* @__PURE__ */ Q2(s) ? s.map(Dx) : Dx(s) || Bp, u = {
    done: !1,
    value: i[0]
  };
  if (i.length === 2 && !Array.isArray(l) && (!o || o.length !== 2 || o[0] === 0 && o[1] === 1)) {
    const [g, p] = i, v = g === p ? void 0 : (xi.mix || Gp)(g, p);
    return {
      calculatedDuration: n,
      next: (m) => (u.value = v ? v(l(n > 0 ? na(0, 1, m / n) : 1)) : p, u.done = m >= n, u)
    };
  }
  const d = BO(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === i.length ? o : kO(i),
    n
  ), h = vw(d, i, {
    ease: Array.isArray(l) ? l : UO(i, l)
  });
  return {
    calculatedDuration: n,
    next: (g) => (u.value = h(g), u.done = g >= n, u)
  };
}
const HO = 5;
function IO(n, i, o) {
  const s = Math.max(i - HO, 0);
  return /* @__PURE__ */ X1(o - n(s), i - s);
}
function yw(n, i, o = 0) {
  return i <= 0 ? o : n.velocity ? n.velocity(i) : IO((s) => n.next(s).value, i, n.next(i).value);
}
const qO = (n) => n !== null;
function tf(n, { repeat: i, repeatType: o = "loop" }, s, l = 1) {
  const u = n.filter(qO), h = l < 0 || i && o !== "loop" && i % 2 === 1 ? 0 : u.length - 1;
  return !h || s === void 0 ? u[h] : s;
}
const GO = {
  decay: qm,
  inertia: qm,
  tween: rl,
  keyframes: rl,
  spring: ml
};
function bw(n) {
  typeof n.type == "string" && (n.type = GO[n.type]);
}
const YO = 40, Xp = (n, i) => i - n > YO && !xi.useManualTiming ? i : n;
function xw(n, i) {
  return {
    kind: n,
    animation: i,
    timestamp: Vt.now(),
    frameTimestamp: At.timestamp,
    frameIsProcessing: At.isProcessing
  };
}
function Sw(n, i, o) {
  const s = globalThis.__MOTION_INSPECT__;
  if (s)
    try {
      s({
        ...xw("animation-start", n),
        options: o ? { ...i, ...o } : i
      });
    } catch {
    }
}
function FO(n, i) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ...xw("layout-animation-start", n),
        node: i
      });
    } catch {
    }
}
class nf {
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
const XO = (n) => n / 100;
class ku extends nf {
  constructor(i) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== Vt.now() && this.tick(Vt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause(), Sw(this, this.options);
  }
  initAnimation() {
    const { options: i } = this;
    bw(i);
    const { type: o = rl, repeat: s = 0, repeatDelay: l = 0, repeatType: u, velocity: d = 0 } = i;
    let { keyframes: h } = i;
    const g = o || rl;
    g !== rl && typeof h[0] != "number" && (this.mixKeyframes = Cl(XO, Gp(h[0], h[1])), h = [0, 100]);
    const p = g(h === i.keyframes ? i : { ...i, keyframes: h });
    u === "mirror" && (this.mirroredGenerator = g({
      ...i,
      keyframes: [...h].reverse(),
      velocity: -d
    })), p.calculatedDuration === null && (p.calculatedDuration = Fp(p));
    const { calculatedDuration: v } = p;
    this.calculatedDuration = v, this.resolvedDuration = v + l, this.totalDuration = this.resolvedDuration * (s + 1) - l, this.generator = p;
  }
  updateTime(i) {
    const o = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o;
  }
  tick(i, o = !1) {
    const { generator: s, totalDuration: l, mixKeyframes: u, mirroredGenerator: d, resolvedDuration: h, calculatedDuration: g } = this;
    if (this.startTime === null)
      return s.next(0);
    const { delay: p = 0, keyframes: v, repeat: m, repeatType: x, repeatDelay: T, type: w, onUpdate: A, finalKeyframe: C } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = Xp(this.startTime, i)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - l / this.speed, this.startTime)), o ? this.currentTime = i : this.updateTime(i);
    const R = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? R < 0 : R > l;
    this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let D = this.currentTime, M = s;
    if (m) {
      const N = Math.min(this.currentTime, l) / h;
      let F = Math.floor(N), Q = N % 1;
      !Q && N >= 1 && (Q = 1), Q === 1 && F--, F = Math.min(F, m + 1), F % 2 && (x === "reverse" ? (Q = 1 - Q, T && (Q -= T / h)) : x === "mirror" && (M = d)), D = na(0, 1, Q) * h;
    }
    let B;
    _ ? (this.delayState.value = v[0], B = this.delayState) : B = M.next(D), u && !_ && (B.value = u(B.value));
    let { done: U } = B;
    !_ && g !== null && (U = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
    const O = this.holdTime === null && (this.state === "finished" || this.state === "running" && U);
    return O && w !== qm && (B.value = tf(v, this.options, C, this.speed)), A && A(B.value), O && this.finish(), B;
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
    return /* @__PURE__ */ Vn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Vn(i);
  }
  get time() {
    return /* @__PURE__ */ Vn(this.currentTime);
  }
  set time(i) {
    i = /* @__PURE__ */ Pn(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = i, this.tick(i));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    return yw(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const o = this.playbackSpeed !== i;
    o && this.driver && this.updateTime(Vt.now()), this.playbackSpeed = i, o && this.driver && (this.time = /* @__PURE__ */ Vn(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: i = NO, startTime: o } = this.options;
    this.driver || (this.driver = i((l) => this.tick(l))), this.options.onPlay?.();
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = o ?? (this.pendingStartTime = s)), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Vt.now()), this.holdTime = this.currentTime;
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
const KO = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ZO(n) {
  const [i, o] = n.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return n;
  const [s] = o.match(Hp) || [];
  if (!s)
    return n;
  const l = o.replace(s, "");
  let u = KO.has(i) ? 1 : 0;
  return s !== o && (u *= 100), i + "(" + u + l + ")";
}
const $O = /\b([a-z-]*)\(.*?\)/gu, Gm = {
  ...Tn,
  getAnimatableNone: (n) => {
    const i = n.match($O);
    return i ? i.map(ZO).join(" ") : n;
  }
}, Ym = {
  ...Tn,
  getAnimatableNone: (n) => {
    const i = Tn.parse(n);
    return Tn.createTransformer(n)(i.map((s) => typeof s == "number" ? 0 : typeof s == "object" ? { ...s, alpha: 1 } : s));
  }
}, Lx = {
  ...Ys,
  transform: Math.round
}, QO = {
  rotate: Ii,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Ii,
  rotateX: Ii,
  rotateY: Ii,
  rotateZ: Ii,
  scale: ou,
  scaleX: ou,
  scaleY: ou,
  scaleZ: ou,
  skew: Ii,
  skewX: Ii,
  skewY: Ii,
  distance: ve,
  translateX: ve,
  translateY: ve,
  translateZ: ve,
  x: ve,
  y: ve,
  z: ve,
  perspective: ve,
  transformPerspective: ve,
  opacity: dl,
  originX: Mx,
  originY: Mx,
  originZ: ve
}, Bu = {
  // Border props
  borderWidth: ve,
  borderTopWidth: ve,
  borderRightWidth: ve,
  borderBottomWidth: ve,
  borderLeftWidth: ve,
  borderRadius: ve,
  borderTopLeftRadius: ve,
  borderTopRightRadius: ve,
  borderBottomRightRadius: ve,
  borderBottomLeftRadius: ve,
  // Positioning props
  width: ve,
  maxWidth: ve,
  height: ve,
  maxHeight: ve,
  top: ve,
  right: ve,
  bottom: ve,
  left: ve,
  inset: ve,
  insetBlock: ve,
  insetBlockStart: ve,
  insetBlockEnd: ve,
  insetInline: ve,
  insetInlineStart: ve,
  insetInlineEnd: ve,
  // Spacing props
  padding: ve,
  paddingTop: ve,
  paddingRight: ve,
  paddingBottom: ve,
  paddingLeft: ve,
  paddingBlock: ve,
  paddingBlockStart: ve,
  paddingBlockEnd: ve,
  paddingInline: ve,
  paddingInlineStart: ve,
  paddingInlineEnd: ve,
  margin: ve,
  marginTop: ve,
  marginRight: ve,
  marginBottom: ve,
  marginLeft: ve,
  marginBlock: ve,
  marginBlockStart: ve,
  marginBlockEnd: ve,
  marginInline: ve,
  marginInlineStart: ve,
  marginInlineEnd: ve,
  // Typography
  fontSize: ve,
  // Misc
  backgroundPositionX: ve,
  backgroundPositionY: ve,
  ...QO,
  zIndex: Lx,
  // SVG
  fillOpacity: dl,
  strokeOpacity: dl,
  numOctaves: Lx
}, JO = {
  ...Bu,
  // Color props
  color: Rt,
  backgroundColor: Rt,
  outlineColor: Rt,
  fill: Rt,
  stroke: Rt,
  // Border props
  borderColor: Rt,
  borderTopColor: Rt,
  borderRightColor: Rt,
  borderBottomColor: Rt,
  borderLeftColor: Rt,
  filter: Gm,
  WebkitFilter: Gm,
  mask: Ym,
  WebkitMask: Ym
}, ww = (n) => JO[n], WO = /* @__PURE__ */ new Set([Gm, Ym]);
function Kp(n, i) {
  let o = ww(n);
  return WO.has(o) || (o = Tn), o.getAnimatableNone ? o.getAnimatableNone(i) : void 0;
}
function eM(n) {
  for (let i = 1; i < n.length; i++)
    n[i] ?? (n[i] = n[i - 1]);
}
const xo = (n) => n * 180 / Math.PI, Fm = (n) => {
  const i = xo(Math.atan2(n[1], n[0]));
  return Xm(i);
}, tM = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
  rotate: Fm,
  rotateZ: Fm,
  skewX: (n) => xo(Math.atan(n[1])),
  skewY: (n) => xo(Math.atan(n[2])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}, Xm = (n) => (n = n % 360, n < 0 && (n += 360), n), Vx = Fm, Px = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]), kx = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]), nM = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Px,
  scaleY: kx,
  scale: (n) => (Px(n) + kx(n)) / 2,
  rotateX: (n) => Xm(xo(Math.atan2(n[6], n[5]))),
  rotateY: (n) => Xm(xo(Math.atan2(-n[2], n[0]))),
  rotateZ: Vx,
  rotate: Vx,
  skewX: (n) => xo(Math.atan(n[4])),
  skewY: (n) => xo(Math.atan(n[1])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function pl(n) {
  return n.includes("scale") ? 1 : 0;
}
function Km(n, i) {
  if (!n || n === "none")
    return pl(i);
  const o = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, l;
  if (o)
    s = nM, l = o;
  else {
    const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = tM, l = h;
  }
  if (!l)
    return pl(i);
  const u = s[i], d = l[1].split(",").map(aM);
  return typeof u == "function" ? u(d) : d[u];
}
const iM = (n, i) => {
  const { transform: o = "none" } = getComputedStyle(n);
  return Km(o, i);
};
function aM(n) {
  return parseFloat(n.trim());
}
const Fs = [
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
], ja = /* @__PURE__ */ new Set([...Fs, "pathRotation"]), Bx = (n) => n === Ys || n === ve, oM = /* @__PURE__ */ new Set(["x", "y", "z"]), sM = Fs.filter((n) => !oM.has(n));
function rM(n) {
  const i = [];
  return sM.forEach((o) => {
    const s = n.getValue(o);
    if (s !== void 0) {
      const l = s.get(), u = o.startsWith("scale") ? 1 : 0;
      if (l === u)
        return;
      i.push([o, l]), s.set(u);
    }
  }), i;
}
const lM = /* @__PURE__ */ new Set(["bottom", "right"]);
function Ux(n, i, o, s, l, u) {
  const d = parseFloat(n);
  if (!isNaN(d))
    return d;
  const { min: h, max: g } = i()[o], p = g - h;
  return u === "border-box" ? p : p - parseFloat(s) - parseFloat(l);
}
const So = {
  // Dimensions
  width: ({ width: n, paddingLeft: i = "0", paddingRight: o = "0", boxSizing: s }, l) => Ux(n, l, "x", i, o, s),
  height: ({ height: n, paddingTop: i = "0", paddingBottom: o = "0", boxSizing: s }, l) => Ux(n, l, "y", i, o, s),
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
  x: ({ transform: n }) => Km(n, "x"),
  y: ({ transform: n }) => Km(n, "y")
};
So.translateX = So.x;
So.translateY = So.y;
const wo = /* @__PURE__ */ new Set();
let Zm = !1, $m = !1, Qm = !1;
function Tw() {
  if ($m) {
    const n = [], i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
    wo.forEach((l) => {
      l.needsMeasurement && (n.push(l), i.add(l.element), lM.has(l.name) && o.add(l.element));
    });
    const s = /* @__PURE__ */ new Map();
    o.forEach((l) => {
      const u = rM(l);
      u.length && (s.set(l, u), l.render());
    }), n.forEach((l) => l.measureInitialState()), i.forEach((l) => {
      l.render();
      const u = s.get(l);
      u && u.forEach(([d, h]) => {
        l.getValue(d)?.set(h);
      });
    }), n.forEach((l) => l.measureEndState()), n.forEach((l) => {
      l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
    });
  }
  $m = !1, Zm = !1, wo.forEach((n) => n.complete(Qm)), wo.clear();
}
function Ew() {
  wo.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && ($m = !0);
  });
}
function cM() {
  Qm = !0, Ew(), Tw(), Qm = !1;
}
function uM(n, i, o) {
  if (typeof n == "string") {
    if (Lp(n) || Vp(n))
      return parseFloat(n);
    if (!Tn.test(n) && Tn.test(o))
      return Kp(i, o);
  }
  return n ?? void 0;
}
class Zp {
  constructor(i, o, s, l, u, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = o, this.name = s, this.motionValue = l, this.element = u, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (wo.add(this), Zm || (Zm = !0, Ze.read(Ew), Ze.resolveKeyframes(Tw))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: o, element: s, motionValue: l } = this;
    if (i[0] === null) {
      const u = l?.get(), d = i[i.length - 1];
      if (u !== void 0)
        i[0] = u;
      else if (s && o) {
        const h = uM(s.readValue(o, d), o, d);
        h !== void 0 && (i[0] = h);
      }
      i[0] === void 0 && (i[0] = d), l && u === void 0 && l.set(i[0]);
    }
    eM(i);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), wo.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (wo.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const fM = (n) => n.startsWith("--");
function Cw(n, i, o) {
  fM(i) ? n.style.setProperty(i, o) : n.style[i] = o;
}
const dM = {};
function Aw(n, i) {
  const o = /* @__PURE__ */ F1(n);
  return () => dM[i] ?? o();
}
const hM = /* @__PURE__ */ Aw(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Rw = /* @__PURE__ */ Aw(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ol = ([n, i, o, s]) => `cubic-bezier(${n}, ${i}, ${o}, ${s})`, Hx = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ol([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ol([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ol([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ol([0.33, 1.53, 0.69, 0.99])
};
function Dw(n, i) {
  if (n)
    return typeof n == "function" ? Rw() ? hw(n, i) : "ease-out" : /* @__PURE__ */ nw(n) ? ol(n) : Array.isArray(n) ? n.map((o) => Dw(o, i) || Hx.easeOut) : Hx[n];
}
function mM(n, i, o, { delay: s = 0, duration: l = 300, repeat: u = 0, repeatType: d = "loop", ease: h = "easeOut", times: g } = {}, p = void 0) {
  const v = {
    [i]: o
  };
  g && (v.offset = g);
  const m = Dw(h, l);
  Array.isArray(m) && (v.easing = m);
  const x = {
    delay: s,
    duration: l,
    easing: Array.isArray(m) ? "linear" : m,
    fill: "both",
    iterations: u + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return p && (x.pseudoElement = p), n.animate(v, x);
}
function Ow(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function pM({ type: n, ...i }) {
  return Ow(n) && Rw() ? n.applyToOptions(i) : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class Mw extends nf {
  constructor(i) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !i)
      return;
    const { element: o, name: s, keyframes: l, pseudoElement: u, allowFlatten: d = !1, finalKeyframe: h, onComplete: g } = i;
    this.isPseudoElement = !!u, this.allowFlatten = d, this.options = i, ef(typeof i.type != "string");
    const p = pM(i);
    this.animation = mM(o, s, l, p, u), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !u) {
        const v = tf(l, this.options, h, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), Cw(o, s, v), this.animation.cancel();
      }
      g?.(), this.notifyFinished();
    }, Sw(this, i, p);
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
    return /* @__PURE__ */ Vn(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Vn(i);
  }
  get time() {
    return /* @__PURE__ */ Vn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    const o = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Pn(i), o && this.animation.pause();
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
  attachTimeline({ timeline: i, onAttach: o, observe: s }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, i && hM() ? (this.animation.timeline = i, o?.(this.animation), Jn) : s(this);
  }
}
const Nw = {
  anticipate: W1,
  backInOut: J1,
  circInOut: tw
};
function gM(n) {
  return n in Nw;
}
function vM(n) {
  typeof n.ease == "string" && gM(n.ease) && (n.ease = Nw[n.ease]);
}
const dm = 10;
class yM extends Mw {
  constructor(i) {
    vM(i), bw(i), super(i), i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime), this.options = i;
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
    const { motionValue: o, onUpdate: s, onComplete: l, element: u, ...d } = this.options;
    if (!o)
      return;
    if (i !== void 0) {
      o.set(i);
      return;
    }
    const h = new ku({
      ...d,
      autoplay: !1
    }), g = Math.max(dm, Vt.now() - this.startTime), p = na(0, dm, g - dm), v = h.sample(g).value, { name: m } = this.options;
    u && m && Cw(u, m, v), o.setWithVelocity(h.sample(Math.max(0, g - p)).value, v, p), h.stop();
  }
}
const Ix = (n, i) => i === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(Tn.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url("));
function bM(n) {
  const i = n[0];
  if (n.length === 1)
    return !0;
  for (let o = 0; o < n.length; o++)
    if (n[o] !== i)
      return !0;
}
function xM(n, i, o, s) {
  const l = n[0];
  if (l === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const u = n[n.length - 1], d = Ix(l, i), h = Ix(u, i);
  return !d || !h ? !1 : bM(n) || (o === "spring" || Ow(o)) && s;
}
function Jm(n) {
  n.duration = 0, n.type = "keyframes";
}
const Wm = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), SM = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function wM(n) {
  for (let i = 0; i < n.length; i++)
    if (typeof n[i] == "string" && SM.test(n[i]))
      return !0;
  return !1;
}
const qx = /* @__PURE__ */ new Set([
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
]), TM = /* @__PURE__ */ F1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function EM(n) {
  const { motionValue: i, name: o, repeatDelay: s, repeatType: l, damping: u, type: d, keyframes: h } = n;
  if (!o || !(Wm.has(o) || qx.has(o)))
    return !1;
  const g = i?.owner?.current;
  if (!(g instanceof HTMLElement) && !(g instanceof SVGElement))
    return !1;
  const { onUpdate: p, transformTemplate: v } = i.owner.getProps();
  return TM() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Wm.has(o) || qx.has(o) && wM(h)) && (o !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !p && !s && l !== "mirror" && u !== 0 && d !== "inertia";
}
class CM extends nf {
  constructor(i) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Vt.now();
    const { keyframes: o, name: s, motionValue: l, element: u } = i, d = i;
    d.autoplay ?? (d.autoplay = !0), d.delay ?? (d.delay = 0), d.type ?? (d.type = "keyframes"), d.repeat ?? (d.repeat = 0), d.repeatDelay ?? (d.repeatDelay = 0), d.repeatType ?? (d.repeatType = "loop");
    const h = u?.KeyframeResolver || Zp;
    this.keyframeResolver = new h(o, (g, p, v) => this.onKeyframesResolved(g, p, d, !v), s, l, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(i, o, s, l) {
    this.keyframeResolver = void 0;
    const { name: u, type: d, velocity: h, delay: g, isHandoff: p, onUpdate: v } = s;
    this.resolvedAt = Vt.now();
    let m = !0;
    xM(i, u, d, h) || (m = !1, (xi.instantAnimations || !g) && v?.(tf(i, s, o)), i[0] = i[i.length - 1], Jm(s), s.repeat = 0);
    const { onComplete: x } = s;
    s.finalKeyframe = o, s.keyframes = i, s.onComplete = () => {
      x?.(), this.notifyFinished();
    };
    const T = m && !p && EM(s);
    l && (T || this.resolvedAt !== this.createdAt) && (s.startTime ?? (s.startTime = Xp(this.createdAt, this.resolvedAt)));
    let w;
    if (T) {
      s.element = s.motionValue?.owner?.current;
      try {
        w = new yM(s);
      } catch {
        w = new ku(s);
      }
    } else
      w = new ku(s);
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
    return this._animation || (this.keyframeResolver?.resume(), cM()), this._animation;
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
function _w(n, i, o, s = 0, l = 1) {
  const u = Array.from(n).sort((p, v) => p.sortNodePosition(v)).indexOf(i), d = n.size, h = (d - 1) * s;
  return typeof o == "function" ? o(u, d) : l === 1 ? u * s : h - u * s;
}
const Gx = 30, AM = (n) => !isNaN(parseFloat(n)), ll = {
  current: void 0
};
class RM {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(i, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      const l = Vt.now();
      if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.notifyChange(), this.dependents))
        for (const u of this.dependents)
          u.dirty();
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = o.owner;
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = Vt.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = AM(this.current));
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
    var s;
    return i === "change" ? this.onChangeSubscribe(o) : ((s = this.events)[i] || (s[i] = new Vu())).add(o);
  }
  onChangeSubscribe(i) {
    const { events: o } = this;
    return !o.change && !this.changeSubscriber ? this.changeSubscriber = i : (o.change || (o.change = new Vu(), o.change.add(this.changeSubscriber), this.changeSubscriber = void 0), o.change.add(i)), () => {
      this.changeSubscriber === i ? this.changeSubscriber = void 0 : o.change?.remove(i), this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    Ze.read(() => {
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
  setWithVelocity(i, o, s) {
    this.set(o), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - s;
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
    return ll.current && ll.current.push(this), this.current;
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
    const i = Vt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Gx)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Gx);
    return /* @__PURE__ */ X1(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
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
      let s = !1, l;
      l = i(() => {
        s = !0, this.events.animationComplete?.notify(), this.animation === l && this.clearAnimation(), o();
      }), s || (this.animation = l), this.events.animationStart?.notify();
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
function za(n, i) {
  return new RM(n, i);
}
function $p(n, i) {
  if (n?.inherit && i) {
    const { inherit: o, ...s } = n;
    return { ...i, ...s };
  }
  return n;
}
function Qp(n, i) {
  const o = n?.[i] ?? n?.default ?? n;
  return o !== n ? $p(o, n) : o;
}
const DM = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, OM = (n) => ({
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), MM = {
  type: "keyframes",
  duration: 0.8
}, NM = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, _M = (n, { keyframes: i }) => i.length > 2 ? MM : ja.has(n) ? n.startsWith("scale") ? OM(i[1]) : DM : NM, jM = /* @__PURE__ */ new Set([
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
function zM(n) {
  for (const i in n)
    if (!jM.has(i))
      return !0;
  return !1;
}
const Jp = (n, i, o, s = {}, l, u) => (d) => {
  const h = Qp(s, n) || {}, g = h.delay || s.delay || 0;
  let { elapsed: p = 0 } = s;
  p = p - /* @__PURE__ */ Pn(g);
  const v = {
    keyframes: Array.isArray(o) ? o : [null, o],
    ease: "easeOut",
    velocity: i.getVelocity(),
    ...h,
    delay: -p,
    onUpdate: (x) => {
      i.set(x), h.onUpdate && h.onUpdate(x);
    },
    onComplete: () => {
      d(), h.onComplete && h.onComplete();
    },
    name: n,
    motionValue: i,
    element: u ? void 0 : l
  };
  zM(h) || Object.assign(v, _M(n, v)), v.duration && (v.duration = /* @__PURE__ */ Pn(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ Pn(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let m = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Jm(v), v.delay === 0 && (m = !0)), (xi.instantAnimations || xi.skipAnimations || l?.shouldSkipAnimations || h.skipAnimations) && (m = !0, Jm(v), v.delay = 0), v.allowFlatten = !h.type && !h.ease, m && !u && i.get() !== void 0) {
    const x = tf(v.keyframes, h);
    if (x !== void 0) {
      Ze.update(() => {
        v.onUpdate(x), v.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new ku(v) : new CM(v);
}, LM = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function VM(n) {
  const i = LM.exec(n);
  if (!i)
    return [,];
  const [, o, s, l] = i;
  return [`--${o ?? s}`, l];
}
function jw(n, i, o = 1) {
  const [s, l] = VM(n);
  if (!s)
    return;
  const u = window.getComputedStyle(i).getPropertyValue(s);
  if (u) {
    const d = u.trim();
    return Lp(d) ? parseFloat(d) : d;
  }
  return Up(l) ? jw(l, i, o + 1) : l;
}
function PM(n) {
  const i = [{}, {}];
  return n?.values.forEach((o, s) => {
    i[0][s] = o.get(), i[1][s] = o.getVelocity();
  }), i;
}
function zw(n, i, o, s) {
  const l = (u) => typeof u == "function" ? u(o !== void 0 ? o : n.custom, ...PM(s)) : u;
  return i = l(i), typeof i == "string" && (i = n.variants && n.variants[i]), l(i);
}
function To(n, i, o) {
  return zw(n.getProps(), i, o, n);
}
const Lw = (n, i) => i === "exit" ? n.presenceContext?.custom : void 0, Vw = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Fs
]), kM = (n) => Array.isArray(n);
function BM(n, i, o) {
  n.hasValue(i) ? n.getValue(i).set(o) : n.addValue(i, za(o));
}
function UM(n) {
  return kM(n) ? n[n.length - 1] || 0 : n;
}
function HM(n, i) {
  const o = To(n, i);
  let { transitionEnd: s = {}, transition: l = {}, ...u } = o || {};
  u = { ...u, ...s };
  for (const d in u) {
    const h = UM(u[d]);
    BM(n, d, h);
  }
}
const Dt = (n) => !!(n && n.getVelocity);
function IM(n) {
  return !!(Dt(n) && n.add);
}
function ep(n, i) {
  const o = n.getValue("willChange");
  if (IM(o))
    return o.add(i);
  if (!o && xi.WillChange) {
    const s = new xi.WillChange("auto");
    n.addValue("willChange", s), s.add(i);
  }
}
function Wp(n) {
  return n.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const qM = "framerAppearId", Pw = "data-" + Wp(qM);
function kw(n) {
  return n.props[Pw];
}
const GM = typeof window < "u";
function YM({ protectedKeys: n, needsAnimating: i }, o) {
  const s = o in n && !i[o];
  return i[o] = !1, s;
}
function Bw(n, i, { delay: o = 0, transitionOverride: s, type: l } = {}) {
  let { transition: u, transitionEnd: d, ...h } = i;
  const g = n.getDefaultTransition();
  u = u ? $p(u, g) : g;
  const p = u?.reduceMotion, v = u?.skipAnimations;
  s && (u = s);
  const m = [], x = l && n.animationState?.getState()[l], T = u?.path;
  T && T.animateVisualElement(n, h, u, o, m);
  for (const w in h) {
    const A = n.getValue(w, n.latestValues[w] ?? null), C = h[w];
    if (C === void 0 || x && YM(x, w))
      continue;
    const R = {
      delay: o,
      ...Qp(u || {}, w)
    };
    v && (R.skipAnimations = !0);
    const _ = A.get();
    if (_ !== void 0 && !A.isAnimating() && !Array.isArray(C) && C === _ && !R.velocity) {
      Ze.update(() => A.set(C));
      continue;
    }
    let D = !1;
    if (GM && window.MotionHandoffAnimation) {
      const U = kw(n);
      if (U) {
        const O = window.MotionHandoffAnimation(U, w, Ze);
        O !== null && (R.startTime = O, D = !0);
      }
    }
    ep(n, w);
    const M = p ?? n.shouldReduceMotion;
    A.start(Jp(w, A, C, M && Vw.has(w) ? { type: !1 } : R, n, D));
    const B = A.animation;
    B && m.push(B);
  }
  if (d) {
    const w = () => Ze.update(() => {
      d && HM(n, d);
    });
    m.length ? Promise.all(m).then(w) : w();
  }
  return m;
}
function tp(n, i, o = {}) {
  const s = To(n, i, Lw(n, o.type)), l = o.transitionOverride || (s?.transition ?? (n.getDefaultTransition() || {})), u = () => Promise.all(s ? Bw(n, s, o) : []), d = (g = 0) => {
    const { variantChildren: p } = n, { delayChildren: v = 0, staggerChildren: m, staggerDirection: x } = l, T = [];
    return p?.forEach((w) => {
      w.notify("AnimationStart", i), T.push(tp(w, i, {
        ...o,
        delay: g + (typeof v == "function" ? 0 : v) + _w(p, w, v, m, x)
      }).then(() => w.notify("AnimationComplete", i)));
    }), Promise.all(T);
  }, { when: h } = l;
  return h ? h === "beforeChildren" ? u().then(() => d()) : d().then(u) : Promise.all([u(), d(o.delay)]);
}
function FM(n, i, o = {}) {
  return n.notify("AnimationStart", i), (Array.isArray(i) ? Promise.all(i.map((l) => tp(n, l, o))) : typeof i == "string" ? tp(n, i, o) : Promise.all(Bw(n, To(n, i, o.custom), o))).then(() => {
    n.notify("AnimationComplete", i);
  });
}
const XM = {
  test: (n) => n === "auto",
  parse: (n) => n
}, KM = (n) => (i) => i.test(n), ZM = [Ys, ve, bi, Ii, lO, rO, XM], Yx = (n) => ZM.find(KM(n));
function $M(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Vp(n) : !0;
}
const QM = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function JM(n, i, o) {
  let s = 0, l;
  for (; s < n.length && !l; ) {
    const u = n[s];
    typeof u == "string" && !QM.has(u) && mO(u) && (l = n[s]), s++;
  }
  if (l && o)
    for (const u of i)
      n[u] !== l && (n[u] = Kp(o, l));
}
class WM extends Zp {
  constructor(i, o, s, l, u) {
    super(i, o, s, l, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: o, name: s } = this;
    if (!o || !o.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < i.length; v++) {
      let m = i[v];
      if (typeof m == "string" && (m = m.trim(), Up(m))) {
        const x = jw(m, o.current);
        x !== void 0 && (i[v] = x), v === i.length - 1 && (this.finalKeyframe = m);
      }
    }
    if (this.resolveNoneKeyframes(), !Vw.has(s) || i.length !== 2)
      return;
    const [l, u] = i;
    if (typeof l == "number" && typeof u == "number")
      return;
    const d = Yx(l), h = Yx(u), g = Ox(l), p = Ox(u);
    if (g !== p && So[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== h)
      if (Bx(d) && Bx(h))
        for (let v = 0; v < i.length; v++) {
          const m = i[v];
          typeof m == "string" && (i[v] = parseFloat(m));
        }
      else So[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: o } = this, s = [];
    for (let l = 0; l < i.length; l++)
      (i[l] === null || $M(i[l])) && s.push(l);
    s.length && JM(i, s, o);
  }
  measure() {
    const { element: i, name: o } = this;
    return So[o](window.getComputedStyle(i.current), () => i.measureViewportBox());
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: o, name: s } = this;
    if (!i || !i.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), o[0] = this.measuredOrigin;
    const l = o[o.length - 1];
    l !== void 0 && this.motionValue?.jump(l, !1);
  }
  measureEndState() {
    const { element: i, unresolvedKeyframes: o } = this;
    if (!i || !i.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, !1);
    const s = o.length - 1, l = o[s];
    o[s] = this.measure(), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), this.removedTransforms?.length && this.removedTransforms.forEach(([u, d]) => {
      i.getValue(u).set(d);
    }), this.resolveNoneKeyframes();
  }
}
const eg = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function Tu(n) {
  return Y1(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
function tg(n) {
  return Y1(n) && "ownerSVGElement" in n;
}
const np = (n, i) => i && typeof n == "number" ? i.transform(n) : n;
function Uw(n, i, o) {
  if (n == null)
    return [];
  if (n instanceof EventTarget)
    return [n];
  if (typeof n == "string") {
    let s = document;
    const l = o?.[n] ?? s.querySelectorAll(n);
    return l ? Array.from(l) : [];
  }
  return Array.from(n).filter((s) => s != null);
}
const eN = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, tN = Fs.length;
function nN(n, i, o) {
  let s = "", l = !0;
  for (let d = 0; d < tN; d++) {
    const h = Fs[d], g = n[h];
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
      const v = np(g, Bu[h]);
      if (!p) {
        l = !1;
        const m = eN[h] || h;
        s += `${m}(${v}) `;
      }
      o && (i[h] = v);
    }
  }
  const u = n.pathRotation;
  return u && (l = !1, s += `rotate(${np(u, Bu.pathRotation)}) `), s = s.trim(), o ? s = o(i, l ? "" : s) : l && (s = "none"), s;
}
function ng(n, i, o) {
  const { style: s, vars: l, transformOrigin: u } = n;
  let d = !1, h = !1;
  for (const g in i) {
    const p = i[g];
    if (ja.has(g)) {
      d = !0;
      continue;
    } else if (aw(g)) {
      l[g] = p;
      continue;
    } else {
      const v = np(p, Bu[g]);
      g.startsWith("origin") ? (h = !0, u[g] = v) : s[g] = v;
    }
  }
  if (i.transform || (d || o ? s.transform = nN(i, n.transform, o) : s.transform && (s.transform = "none")), h) {
    const { originX: g = "50%", originY: p = "50%", originZ: v = 0 } = u;
    s.transformOrigin = `${g} ${p} ${v}`;
  }
}
const iN = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, aN = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function oN(n, i, o = 1, s = 0, l = !0) {
  n.pathLength = 1;
  const u = l ? iN : aN;
  n[u.offset] = `${-s}`, n[u.array] = `${i} ${o}`;
}
const Hw = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Iw(n, {
  attrX: i,
  attrY: o,
  attrScale: s,
  pathLength: l,
  pathSpacing: u = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, g, p, v) {
  if (ng(n, h, p), g) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  n.attrs = n.style, n.style = {};
  const { attrs: m, style: x } = n;
  for (const T of Hw)
    m[T] !== void 0 && (x[T] = m[T], delete m[T]);
  (x.transform || m.transformOrigin) && (x.transformOrigin = m.transformOrigin ?? "50% 50%", delete m.transformOrigin), x.transform && (x.transformBox = v?.transformBox ?? "fill-box", delete m.transformBox), i !== void 0 && (m.x = i), o !== void 0 && (m.y = o), s !== void 0 && (m.scale = s), l !== void 0 && oN(m, l, u, d, !1);
}
function qw({ top: n, left: i, right: o, bottom: s }) {
  return {
    x: { min: i, max: o },
    y: { min: n, max: s }
  };
}
function sN({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function rN(n, i) {
  if (!i)
    return n;
  const o = i({ x: n.left, y: n.top }), s = i({ x: n.right, y: n.bottom });
  return {
    top: o.y,
    left: o.x,
    bottom: s.y,
    right: s.x
  };
}
function hm(n) {
  return n === void 0 || n === 1;
}
function ip({ scale: n, scaleX: i, scaleY: o }) {
  return !hm(n) || !hm(i) || !hm(o);
}
function yo(n) {
  return ip(n) || Gw(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Gw(n) {
  return Fx(n.x) || Fx(n.y);
}
function Fx(n) {
  return n && n !== "0%";
}
function Uu(n, i, o) {
  const s = n - o, l = i * s;
  return o + l;
}
function Xx(n, i, o, s, l) {
  return l !== void 0 && (n = Uu(n, l, s)), Uu(n, o, s) + i;
}
function ap(n, i = 0, o = 1, s, l) {
  n.min = Xx(n.min, i, o, s, l), n.max = Xx(n.max, i, o, s, l);
}
function Yw(n, { x: i, y: o }) {
  ap(n.x, i.translate, i.scale, i.originPoint), ap(n.y, o.translate, o.scale, o.originPoint);
}
const Kx = 0.999999999999, Zx = 1.0000000000001;
function lN(n, i, o, s = !1) {
  const l = o.length;
  if (!l)
    return;
  i.x = i.y = 1;
  let u, d;
  for (let h = 0; h < l; h++) {
    u = o[h], d = u.projectionDelta;
    const { visualElement: g } = u.options;
    g && g.props.style && g.props.style.display === "contents" || (s && u.options.layoutScroll && u.scroll && u !== u.root && (Qn(n.x, -u.scroll.offset.x), Qn(n.y, -u.scroll.offset.y)), d && (i.x *= d.x.scale, i.y *= d.y.scale, Yw(n, d)), s && yo(u.latestValues) && Eu(n, u.latestValues, u.layout?.layoutBox));
  }
  i.x < Zx && i.x > Kx && (i.x = 1), i.y < Zx && i.y > Kx && (i.y = 1);
}
function Qn(n, i) {
  n.min += i, n.max += i;
}
function $x(n, i, o, s, l = 0.5) {
  const u = Je(n.min, n.max, l);
  ap(n, i, o, u, s);
}
function Qx(n, i) {
  return typeof n == "string" ? parseFloat(n) / 100 * (i.max - i.min) : n;
}
function Eu(n, i, o) {
  const s = o ?? n;
  $x(n.x, Qx(i.x, s.x), i.scaleX, i.scale, i.originX), $x(n.y, Qx(i.y, s.y), i.scaleY, i.scale, i.originY);
}
function Fw(n, i) {
  return qw(rN(n.getBoundingClientRect(), i));
}
function cN(n, i, o) {
  const s = Fw(n, o), { scroll: l } = i;
  return l && (Qn(s.x, l.offset.x), Qn(s.y, l.offset.y)), s;
}
const { schedule: ig } = /* @__PURE__ */ dw(queueMicrotask, !1), Kn = {
  x: !1,
  y: !1
};
function Xw() {
  return Kn.x || Kn.y;
}
function uN(n) {
  return n === "x" || n === "y" ? Kn[n] ? null : (Kn[n] = !0, () => {
    Kn[n] = !1;
  }) : Kn.x || Kn.y ? null : (Kn.x = Kn.y = !0, () => {
    Kn.x = Kn.y = !1;
  });
}
function Kw(n, i) {
  const o = Uw(n), s = new AbortController(), l = {
    passive: !0,
    ...i,
    signal: s.signal
  };
  return [o, l, () => s.abort()];
}
function fN(n) {
  return !(n.pointerType === "touch" || Xw());
}
function dN(n, i, o = {}) {
  const [s, l, u] = Kw(n, o);
  return s.forEach((d) => {
    let h = !1, g = !1, p;
    const v = () => {
      d.removeEventListener("pointerleave", w);
    }, m = (C) => {
      p && (p(C), p = void 0), v();
    }, x = (C) => {
      h = !1, window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", x), g && (g = !1, m(C));
    }, T = () => {
      h = !0, window.addEventListener("pointerup", x, l), window.addEventListener("pointercancel", x, l);
    }, w = (C) => {
      if (C.pointerType !== "touch") {
        if (h) {
          g = !0;
          return;
        }
        m(C);
      }
    }, A = (C) => {
      if (!fN(C))
        return;
      g = !1;
      const R = i(d, C);
      typeof R == "function" && (p = R, d.addEventListener("pointerleave", w, l));
    };
    d.addEventListener("pointerenter", A, l), d.addEventListener("pointerdown", T, l);
  }), u;
}
const Zw = (n, i) => i ? n === i ? !0 : Zw(n, i.parentElement) : !1, ag = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, hN = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function mN(n) {
  return hN.has(n.tagName) || n.isContentEditable === !0;
}
const pN = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function gN(n) {
  return pN.has(n.tagName) || n.isContentEditable === !0;
}
const Cu = /* @__PURE__ */ new WeakSet();
function Jx(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function mm(n, i) {
  n.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const vN = (n, i) => {
  const o = n.currentTarget;
  if (!o)
    return;
  const s = Jx(() => {
    if (Cu.has(o))
      return;
    mm(o, "down");
    const l = Jx(() => {
      mm(o, "up");
    }), u = () => mm(o, "cancel");
    o.addEventListener("keyup", l, i), o.addEventListener("blur", u, i);
  });
  o.addEventListener("keydown", s, i), o.addEventListener("blur", () => o.removeEventListener("keydown", s), i);
};
function Wx(n) {
  return ag(n) && !Xw();
}
const eS = /* @__PURE__ */ new WeakSet();
function yN(n, i, o = {}) {
  const [s, l, u] = Kw(n, o), d = (h) => {
    const g = h.currentTarget;
    if (!Wx(h) || eS.has(h))
      return;
    Cu.add(g), o.stopPropagation && eS.add(h);
    const p = i(g, h), v = { ...l, capture: !0 }, m = (w, A) => {
      window.removeEventListener("pointerup", x, v), window.removeEventListener("pointercancel", T, v), Cu.has(g) && Cu.delete(g), Wx(w) && typeof p == "function" && p(w, { success: A });
    }, x = (w) => {
      m(w, g === window || g === document || o.useGlobalTarget || Zw(g, w.target));
    }, T = (w) => {
      m(w, !1);
    };
    window.addEventListener("pointerup", x, v), window.addEventListener("pointercancel", T, v);
  };
  return s.forEach((h) => {
    (o.useGlobalTarget ? window : h).addEventListener("pointerdown", d, l), Tu(h) && (h.addEventListener("focus", (p) => vN(p, l)), !mN(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), u;
}
const Au = /* @__PURE__ */ new WeakMap();
let Ru;
const $w = (n, i, o) => (s, l) => l && l[0] ? l[0][n + "Size"] : tg(s) && "getBBox" in s ? s.getBBox()[i] : s[o], bN = /* @__PURE__ */ $w("inline", "width", "offsetWidth"), xN = /* @__PURE__ */ $w("block", "height", "offsetHeight");
function SN({ target: n, borderBoxSize: i }) {
  Au.get(n)?.forEach((o) => {
    o(n, {
      get width() {
        return bN(n, i);
      },
      get height() {
        return xN(n, i);
      }
    });
  });
}
function wN(n) {
  n.forEach(SN);
}
function TN() {
  typeof ResizeObserver > "u" || (Ru = new ResizeObserver(wN));
}
function EN(n, i) {
  Ru || TN();
  const o = Uw(n);
  return o.forEach((s) => {
    let l = Au.get(s);
    l || (l = /* @__PURE__ */ new Set(), Au.set(s, l)), l.add(i), Ru?.observe(s);
  }), () => {
    o.forEach((s) => {
      const l = Au.get(s);
      l?.delete(i), l?.size || Ru?.unobserve(s);
    });
  };
}
const Du = /* @__PURE__ */ new Set();
let _s;
function CN() {
  _s = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Du.forEach((i) => i(n));
  }, window.addEventListener("resize", _s);
}
function AN(n) {
  return Du.add(n), _s || CN(), () => {
    Du.delete(n), !Du.size && typeof _s == "function" && (window.removeEventListener("resize", _s), _s = void 0);
  };
}
function tS(n, i) {
  return typeof n == "function" ? AN(n) : EN(n, i);
}
function RN(n) {
  return tg(n) && n.tagName === "svg";
}
function DN(...n) {
  const i = !Array.isArray(n[0]), o = i ? 0 : -1, s = n[0 + o], l = n[1 + o], u = n[2 + o], d = n[3 + o], h = vw(l, u, d);
  return i ? h(s) : h;
}
const sl = /* @__PURE__ */ new Set(), nS = ({ timestamp: n }) => {
  sl.forEach((i) => i.tick(n));
};
class ON extends nf {
  constructor(i) {
    super(), this.state = "idle", this.startTime = 0, this.currentTime = 0, this.started = !1, this.hasNextTarget = !1, this.nextTarget = 0, this.stop = () => {
      this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = i, this.factory = i.type, this.generator = this.factory(i);
    const { driver: o } = i;
    o && (this.driver = o((s) => this.tick(s))), this.startTime = this.now(), this.state = "running", this.driver ? this.driver.start() : (sl.size || Ze.update(nS, !0), sl.add(this));
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
    const { options: s, generator: l } = this;
    s.keyframes = i, s.velocity = o, this.startTime = this.now(), this.currentTime = 0, l.retarget ? l.retarget(i, o) : this.generator = this.factory(s);
  }
  tick(i) {
    const { options: o, hasNextTarget: s } = this, { delay: l = 0, onUpdate: u, onPlay: d } = o;
    this.started || (this.startTime = Xp(this.startTime, i));
    const h = Math.round(i - this.startTime) - l, g = this.currentTime = Math.max(0, h), p = this.generator.next(g), v = h < 0 ? o.keyframes[0] : p.value;
    if (s) {
      this.hasNextTarget = !1;
      const { keyframes: m } = o;
      m[0] = v, m[1] = this.nextTarget, this.retarget(m, this.nextVelocity ?? this.getGeneratorVelocity());
    }
    (s || !this.started) && (this.started = !0, d?.()), this.state === "running" && (u?.(v), p.done && h >= 0 && !s && !this.hasNextTarget && this.state === "running" && (this.notifyFinished(), this.teardown(), this.state = "finished", o.onComplete?.()));
  }
  getGeneratorVelocity() {
    return yw(this.generator, this.currentTime, this.options.velocity);
  }
  now() {
    return this.driver ? this.driver.now() : Vt.now();
  }
  teardown() {
    this.state = "idle", this.driver ? this.driver.stop() : (sl.delete(this), sl.size || Si(nS));
  }
}
const Hu = (n) => typeof n == "number" ? n : parseFloat(n);
function MN(n, i, o) {
  const s = n.get();
  let l = null, u;
  const d = typeof s == "string" ? s.replace(/[\d.-]/g, "") : void 0, h = (v) => u(d ? v + d : v), g = () => n.events.animationStart?.notify(), p = () => {
    l && (l.stop(), l = null), n.animation = void 0;
  };
  if (n.attach((v, m) => {
    u = m;
    const x = Hu(v);
    if (l?.state === "running") {
      l.setTarget(x, o.velocity);
      return;
    }
    const T = Hu(n.get()), w = l ? l.getGeneratorVelocity() : n.getVelocity();
    if (p(), T === x)
      return;
    const A = {
      keyframes: [T, x],
      velocity: w,
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...o,
      onUpdate: h
    }, C = l = new ON({
      ...A,
      onPlay: g
    });
    n.animation = C, C.then(() => {
      l === C && (l = null, n.animation = void 0, n.events.animationComplete?.notify());
    });
  }, p), Dt(i)) {
    let v = o.skipInitialAnimation === !0;
    const m = i.on("change", (T) => {
      v ? (v = !1, n.jump(iS(T, d), !1)) : n.set(iS(T, d));
    }), x = n.on("destroy", m);
    return () => {
      m(), x();
    };
  }
  return p;
}
function iS(n, i) {
  return i ? n + i : n;
}
function NN(n, i, o) {
  return MN(n, i, { ...o, type: ml });
}
const aS = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), js = () => ({
  x: aS(),
  y: aS()
}), oS = () => ({ min: 0, max: 0 }), Ct = () => ({
  x: oS(),
  y: oS()
}), _N = /* @__PURE__ */ new WeakMap();
function af(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function gl(n) {
  return typeof n == "string" || Array.isArray(n);
}
const og = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], sS = ["initial", ...og];
function of(n) {
  if (af(n.animate))
    return !0;
  for (let i = 0; i < sS.length; i++)
    if (gl(n[sS[i]]))
      return !0;
  return !1;
}
function Qw(n) {
  return !!(of(n) || n.variants);
}
function jN(n, i, o) {
  for (const s in i) {
    const l = i[s], u = o[s];
    if (Dt(l))
      n.addValue(s, l);
    else if (Dt(u))
      n.addValue(s, za(l, { owner: n }));
    else if (u !== l)
      if (n.hasValue(s)) {
        const d = n.getValue(s);
        d.liveStyle === !0 ? d.jump(l) : d.hasAnimated || d.set(l);
      } else {
        const d = n.getStaticValue(s);
        n.addValue(s, za(d !== void 0 ? d : l, { owner: n }));
      }
  }
  for (const s in o)
    i[s] === void 0 && n.removeValue(s);
  return i;
}
const Iu = { current: null }, sg = { current: !1 }, zN = typeof window < "u";
function Jw() {
  if (sg.current = !0, !!zN)
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"), i = () => Iu.current = n.matches;
      n.addEventListener("change", i), i();
    } else
      Iu.current = !1;
}
const rS = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let qu = {};
function Ww(n) {
  qu = n;
}
function LN() {
  return qu;
}
class VN {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(i, o, s) {
    return {};
  }
  constructor({ parent: i, props: o, presenceContext: s, reducedMotionConfig: l, skipAnimations: u, blockInitialAnimation: d, visualState: h }, g = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Zp, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const T = Vt.now();
      this.renderScheduledAt < T && (this.renderScheduledAt = T, Ze.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: v } = h;
    this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = o.initial ? { ...p } : {}, this.renderState = v, this.parent = i, this.props = o, this.presenceContext = s, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = l, this.skipAnimationsConfig = u, this.options = g, this.blockInitialAnimation = !!d, this.isControllingVariants = of(o), this.isVariantNode = Qw(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: m, ...x } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const T in x) {
      const w = x[T];
      p[T] !== void 0 && Dt(w) && w.set(p[T]);
    }
  }
  mount(i) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        this.values.get(o)?.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    if (this.current = i, _N.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.isVariantNode && !this.isControllingVariants) {
      let o = this;
      do
        o = o.props.inherit !== !1 && o.parent;
      while (o && !o.isVariantNode);
      if (o) {
        const { variantChildren: s } = o;
        s.add(this), this.removeFromVariantTree = () => s.delete(this);
      }
    }
    this.values.forEach((o, s) => this.bindToMotionValue(s, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (sg.current || Jw(), this.shouldReduceMotion = Iu.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), Si(this.notifyUpdate), Si(this.render), this.valueSubscriptions.forEach((i) => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
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
    if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(), o.accelerate && Wm.has(i) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: h, times: g, ease: p, duration: v } = o.accelerate, m = new Mw({
        element: this.current,
        name: i,
        keyframes: h,
        times: g,
        ease: p,
        duration: /* @__PURE__ */ Pn(v)
      }), x = d(m);
      this.valueSubscriptions.set(i, () => {
        x(), m.cancel();
      });
      return;
    }
    const s = ja.has(i);
    s && this.onBindTransform && this.onBindTransform();
    const l = o.on("change", (d) => {
      this.latestValues[i] = d, this.props.onUpdate && Ze.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let u;
    typeof window < "u" && window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, i, o)), this.valueSubscriptions.set(i, () => {
      l(), u && u();
    });
  }
  sortNodePosition(i) {
    return !this.current || !i.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in qu) {
      const o = qu[i];
      if (!o)
        continue;
      const { isEnabled: s, Feature: l } = o;
      if (!this.features[i] && l && s(this.props) && (this.features[i] = new l(this)), this.features[i]) {
        const u = this.features[i];
        u.isMounted ? u.update() : (u.mount(), u.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ct();
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
    for (let s = 0; s < rS.length; s++) {
      const l = rS[s];
      this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
      const u = "on" + l, d = i[u];
      d && (this.propEventSubscriptions[l] = this.on(l, d));
    }
    this.prevMotionValues = jN(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    const s = this.values.get(i);
    if (o !== s) {
      s && this.removeValue(i), this.bindToMotionValue(i, o), this.values.set(i, o);
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
    let s = this.values.get(i);
    return s === void 0 && o !== void 0 && (s = za(o ?? this.getDefaultValue?.(i), {
      owner: this
    }), this.addValue(i, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(i, o) {
    let s = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return s != null && (typeof s == "string" && (Lp(s) || Vp(s)) ? s = parseFloat(s) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof s != "number" && !Tn.test(s) && Tn.test(o) && (s = Kp(i, o))
    ), this.setBaseTarget(i, Dt(s) ? s.get() : s)), Dt(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(i, o) {
    this.baseTarget[i] = o;
  }
  on(i, o) {
    return this.events[i] || (this.events[i] = new Vu()), this.events[i].add(o);
  }
  notify(i, ...o) {
    this.events[i] && this.events[i].notify(...o);
  }
  scheduleRenderMicrotask() {
    ig.render(this.render);
  }
}
class eT extends VN {
  constructor() {
    super(...arguments), this.KeyframeResolver = WM;
  }
  sortInstanceNodePosition(i, o) {
    return i.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, o) {
    const s = i.style;
    return s ? s[o] : void 0;
  }
  removeValueFromRenderState(i, { vars: o, style: s }) {
    delete o[i], delete s[i];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    Dt(i) && (this.childSubscription = i.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
    }));
  }
}
class Pa {
  constructor(i) {
    this.isMounted = !1, this.node = i;
  }
  update() {
  }
}
function tT(n, { style: i, vars: o }, s, l) {
  const u = n.style;
  let d;
  for (d in i)
    u[d] = i[d];
  l?.applyProjectionStyles(u, s);
  for (d in o)
    u.setProperty(d, o[d]);
}
const vl = {};
function nT(n, { layout: i, layoutId: o }) {
  return ja.has(n) || n.startsWith("origin") || (i || o !== void 0) && (!!vl[n] || n === "opacity");
}
function rg(n, i, o) {
  const s = n.style, l = i?.style, u = {};
  if (!s)
    return u;
  for (const d in s)
    (Dt(s[d]) || l && Dt(l[d]) || nT(d, n) || o?.getValue(d)?.liveStyle !== void 0) && (u[d] = s[d]);
  return u;
}
function PN(n) {
  return window.getComputedStyle(n);
}
class kN extends eT {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = tT;
  }
  mount(i) {
    ef(!!i.style), super.mount(i);
  }
  readValueFromInstance(i, o) {
    if (ja.has(o))
      return this.projection?.isProjecting ? pl(o) : iM(i, o);
    {
      const s = PN(i), l = (aw(o) ? s.getPropertyValue(o) : s[o]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: o }) {
    return Fw(i, o);
  }
  build(i, o, s) {
    ng(i, o, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, o, s) {
    return rg(i, o, s);
  }
}
const iT = /* @__PURE__ */ new Set([
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
]), aT = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function BN(n, i, o, s) {
  tT(n, i, void 0, s);
  for (const l in i.attrs)
    n.setAttribute(iT.has(l) ? l : Wp(l), i.attrs[l]);
}
function oT(n, i, o) {
  const s = rg(n, i, o);
  for (const l in n)
    if (Dt(n[l]) || Dt(i[l])) {
      const u = Fs.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
      s[u] = n[l];
    }
  return s;
}
class UN extends eT {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ct;
  }
  getBaseTargetFromProps(i, o) {
    return ja.has(o) ? super.getBaseTargetFromProps(i, o) ?? pl(o) : i[o];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(i) {
    return ja.has(i) ? this.latestValues[i] ?? pl(i) : void 0;
  }
  readValueFromInstance(i, o) {
    if (ja.has(o)) {
      const s = ww(o);
      return s && s.default || 0;
    }
    if (Hw.includes(o)) {
      const l = getComputedStyle(i)[o];
      if (typeof l == "string" && l)
        return l.trim();
    }
    return o = iT.has(o) ? o : Wp(o), i.getAttribute(o);
  }
  scrapeMotionValuesFromProps(i, o, s) {
    return oT(i, o, s);
  }
  build(i, o, s) {
    Iw(i, o, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(i, o, s, l) {
    BN(i, o, s, l);
  }
  mount(i) {
    this.isSVGTag = aT(i.tagName), super.mount(i);
  }
}
function sT(n, i) {
  if (!Array.isArray(i))
    return !1;
  const o = i.length;
  if (o !== n.length)
    return !1;
  for (let s = 0; s < o; s++)
    if (i[s] !== n[s])
      return !1;
  return !0;
}
const HN = [...og].reverse();
function IN(n) {
  let i = (h) => Promise.all(h.map(({ animation: g, options: p }) => FM(n, g, p))), o = lS(), s = !0, l = !1;
  function u(h) {
    const { props: g, parent: p, manuallyAnimateOnMount: v } = n, m = s || l, x = [], T = /* @__PURE__ */ new Set();
    let w = {}, A = 1 / 0, C = n;
    do
      C = C.props.inherit !== !1 && C.parent;
    while (C && !C.isControllingVariants);
    if (HN.forEach((_, D) => {
      const M = o[_], B = g[_], U = C && C.props[_], O = B !== void 0 ? B : gl(U) || U === !1 ? U : void 0, N = gl(O), F = _ === h ? M.isActive : null;
      F === !1 && (A = D);
      const Q = N && B === void 0 && !(m && v);
      if (M.protectedKeys = { ...w }, !M.isActive && F === null || !O && !M.prevProp || af(O) || typeof O == "boolean")
        return;
      if (_ === "exit" && M.isActive && F !== !0) {
        w = {
          ...w,
          ...M.prevResolvedValues
        };
        return;
      }
      const ue = qN(M.prevProp, O);
      let ie = ue || N && (F && !Q || D > A), te = !1;
      const fe = Array.isArray(O) ? O : [O];
      let he = {};
      if (F !== !1)
        for (const X of fe) {
          const { transition: J, transitionEnd: se, ...$ } = To(n, X, Lw(n, _)) || {};
          he = {
            ...he,
            ...$,
            ...se
          };
        }
      const { prevResolvedValues: G } = M;
      for (const X in { ...G, ...he }) {
        if (X in w)
          continue;
        const J = he[X], se = G[X], $ = Array.isArray(J) && Array.isArray(se) ? !sT(J, se) || ue : J !== se;
        if ($ && J == null)
          T.add(X);
        else if ($ || J !== void 0 && T.has(X)) {
          ie = !0, T.delete(X) && (te = !0), M.needsAnimating[X] = !0;
          const Me = n.getValue(X);
          Me && (Me.liveStyle = !1);
        } else
          M.protectedKeys[X] = !0;
      }
      if (M.prevProp = O, M.prevResolvedValues = he, M.isActive && (w = { ...w, ...he }), ie && (!(Q && ue) || te))
        for (const X of fe) {
          const J = { type: _ };
          if (typeof X == "string" && m && v && p?.enteringChildren) {
            const se = To(p, X)?.transition?.delayChildren;
            J.delay = _w(p.enteringChildren, n, se);
          }
          x.push({ animation: X, options: J });
        }
    }), T.size) {
      const { initial: _ } = g, D = {}, M = typeof _ != "boolean" && To(n, Array.isArray(_) ? _[0] : _, n.presenceContext?.custom);
      M && M.transition && (D.transition = M.transition), T.forEach((B) => {
        const U = n.getValue(B);
        U && (U.liveStyle = !0);
        const O = M && !Array.isArray(_) ? M[B] : void 0, N = n.getBaseTargetFromProps(g, B);
        D[B] = (O !== void 0 ? O : N !== void 0 && !Dt(N) ? N : n.initialValues[B] === void 0 ? n.baseTarget[B] : void 0) ?? null;
      }), x.push({ animation: D });
    }
    const R = m && n.blockInitialAnimation || s && !v && (g.initial === !1 || g.initial === g.animate);
    return s = l = !1, !R && x.length ? i(x) : Promise.resolve();
  }
  function d(h, g) {
    if (o[h].isActive === g)
      return Promise.resolve();
    n.variantChildren?.forEach((v) => v.animationState?.setActive(h, g)), o[h].isActive = g;
    const p = u(h);
    for (const v in o)
      o[v].protectedKeys = {};
    return p;
  }
  return {
    animateChanges: u,
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
      o = lS(), l = !0;
    }
  };
}
function qN(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !sT(i, n) : !1;
}
function lS() {
  const n = {};
  for (const i of og)
    n[i] = {
      isActive: i === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  return n;
}
function op(n, i) {
  n.min = i.min, n.max = i.max;
}
function Xn(n, i) {
  op(n.x, i.x), op(n.y, i.y);
}
function cS(n, i) {
  n.translate = i.translate, n.scale = i.scale, n.originPoint = i.originPoint, n.origin = i.origin;
}
const rT = 1e-4, GN = 1 - rT, YN = 1 + rT, lT = 0.01, FN = 0 - lT, XN = 0 + lT;
function en(n) {
  return n.max - n.min;
}
function KN(n, i, o) {
  return Math.abs(n - i) <= o;
}
function uS(n, i, o, s = 0.5) {
  n.origin = s, n.originPoint = Je(i.min, i.max, n.origin), n.scale = en(o) / en(i), n.translate = Je(o.min, o.max, n.origin) - n.originPoint, (n.scale >= GN && n.scale <= YN || isNaN(n.scale)) && (n.scale = 1), (n.translate >= FN && n.translate <= XN || isNaN(n.translate)) && (n.translate = 0);
}
function cl(n, i, o, s) {
  uS(n.x, i.x, o.x, s ? s.originX : void 0), uS(n.y, i.y, o.y, s ? s.originY : void 0);
}
function fS(n, i, o, s = 0) {
  const l = s ? Je(o.min, o.max, s) : o.min;
  n.min = l + i.min, n.max = n.min + en(i);
}
function ZN(n, i, o, s) {
  fS(n.x, i.x, o.x, s?.x), fS(n.y, i.y, o.y, s?.y);
}
function dS(n, i, o, s = 0) {
  const l = s ? Je(o.min, o.max, s) : o.min;
  n.min = i.min - l, n.max = n.min + en(i);
}
function Gu(n, i, o, s) {
  dS(n.x, i.x, o.x, s?.x), dS(n.y, i.y, o.y, s?.y);
}
function hS(n, i, o, s, l) {
  return n -= i, n = Uu(n, 1 / o, s), l !== void 0 && (n = Uu(n, 1 / l, s)), n;
}
function $N(n, i = 0, o = 1, s = 0.5, l, u = n, d = n) {
  if (bi.test(i) && (i = parseFloat(i), i = Je(d.min, d.max, i / 100) - d.min), typeof i != "number")
    return;
  let h = Je(u.min, u.max, s);
  n === u && (h -= i), n.min = hS(n.min, i, o, h, l), n.max = hS(n.max, i, o, h, l);
}
function mS(n, i, [o, s, l], u, d) {
  $N(n, i[o], i[s], i[l], i.scale, u, d);
}
const QN = ["x", "scaleX", "originX"], JN = ["y", "scaleY", "originY"];
function pS(n, i, o, s) {
  mS(n.x, i, QN, o ? o.x : void 0, s ? s.x : void 0), mS(n.y, i, JN, o ? o.y : void 0, s ? s.y : void 0);
}
function gS(n) {
  return n.translate === 0 && n.scale === 1;
}
function cT(n) {
  return gS(n.x) && gS(n.y);
}
function vS(n, i) {
  return n.min === i.min && n.max === i.max;
}
function WN(n, i) {
  return vS(n.x, i.x) && vS(n.y, i.y);
}
function yS(n, i) {
  return Math.round(n.min) === Math.round(i.min) && Math.round(n.max) === Math.round(i.max);
}
function uT(n, i) {
  return yS(n.x, i.x) && yS(n.y, i.y);
}
function bS(n) {
  return en(n.x) / en(n.y);
}
function xS(n, i) {
  return n.translate === i.translate && n.scale === i.scale && n.originPoint === i.originPoint;
}
function $n(n) {
  return [n("x"), n("y")];
}
function SS(n, i) {
  return i.max === i.min ? 0 : n / (i.max - i.min) * 100;
}
const tl = {
  correct: (n, i) => {
    if (!i.target)
      return n;
    if (typeof n == "string")
      if (ve.test(n))
        n = parseFloat(n);
      else
        return n;
    const o = SS(n, i.target.x), s = SS(n, i.target.y);
    return `${o}% ${s}%`;
  }
}, e_ = {
  correct: (n, { treeScale: i, projectionDelta: o }) => {
    const s = n, l = Tn.parse(n);
    if (l.length > 5)
      return s;
    const u = Tn.createTransformer(n), d = typeof l[0] != "number" ? 1 : 0, h = o.x.scale * i.x, g = o.y.scale * i.y;
    l[0 + d] /= h, l[1 + d] /= g;
    const p = Je(h, g, 0.5);
    return typeof l[2 + d] == "number" && (l[2 + d] /= p), typeof l[3 + d] == "number" && (l[3 + d] /= p), u(l);
  }
};
function t_(n, i, o) {
  let s = "";
  const l = n.x.translate / i.x, u = n.y.translate / i.y, d = o?.z || 0;
  if ((l || u || d) && (s = `translate3d(${l}px, ${u}px, ${d}px) `), (i.x !== 1 || i.y !== 1) && (s += `scale(${1 / i.x}, ${1 / i.y}) `), o) {
    const { transformPerspective: p, rotate: v, pathRotation: m, rotateX: x, rotateY: T, skewX: w, skewY: A } = o;
    p && (s = `perspective(${p}px) ${s}`), v && (s += `rotate(${v}deg) `), m && (s += `rotate(${m}deg) `), x && (s += `rotateX(${x}deg) `), T && (s += `rotateY(${T}deg) `), w && (s += `skewX(${w}deg) `), A && (s += `skewY(${A}deg) `);
  }
  const h = n.x.scale * i.x, g = n.y.scale * i.y;
  return (h !== 1 || g !== 1) && (s += `scale(${h}, ${g})`), s || "none";
}
const n_ = eg.length, wS = (n) => typeof n == "number" || ve.test(n);
function i_(n, i, o, s, l, u) {
  l ? (n.opacity = Je(0, o.opacity ?? 1, a_(s)), n.opacityExit = Je(i.opacity ?? 1, 0, o_(s))) : u && (n.opacity = Je(i.opacity ?? 1, o.opacity ?? 1, s));
  for (let d = 0; d < n_; d++) {
    const h = eg[d];
    let g = TS(i, h), p = TS(o, h);
    if (g === void 0 && p === void 0)
      continue;
    g || (g = 0), p || (p = 0), g === 0 || p === 0 || wS(g) === wS(p) ? (n[h] = Math.max(Je(Hu(g), Hu(p), s), 0), (bi.test(p) || bi.test(g)) && (n[h] += "%")) : n[h] = p;
  }
  (i.rotate || o.rotate) && (n.rotate = Je(i.rotate || 0, o.rotate || 0, s));
}
function TS(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const a_ = /* @__PURE__ */ fT(0, 0.5, ew), o_ = /* @__PURE__ */ fT(0.5, 0.95, Jn);
function fT(n, i, o) {
  return (s) => s < n ? 0 : s > i ? 1 : o(/* @__PURE__ */ fl(n, i, s));
}
function s_(n, i, o) {
  const s = Dt(n) ? n : za(n);
  return s.start(Jp("", s, i, o)), s.animation;
}
function yl(n, i, o, s = { passive: !0 }) {
  return n.addEventListener(i, o, s), () => n.removeEventListener(i, o, s);
}
const r_ = (n, i) => n.depth - i.depth;
class l_ {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(i) {
    zp(this.children, i), this.isDirty = !0;
  }
  remove(i) {
    Lu(this.children, i), this.isDirty = !0;
  }
  forEach(i) {
    this.isDirty && this.children.sort(r_), this.isDirty = !1, this.children.forEach(i);
  }
}
function c_(n, i) {
  const o = Vt.now(), s = ({ timestamp: l }) => {
    const u = l - o;
    u >= i && (Si(s), n(u - i));
  };
  return Ze.setup(s, !0), () => Si(s);
}
function Ou(n) {
  return Dt(n) ? n.get() : n;
}
class u_ {
  constructor() {
    this.members = [];
  }
  add(i) {
    zp(this.members, i);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const s = this.members[o];
      if (s === i || s === this.lead || s === this.prevLead)
        continue;
      const l = s.instance;
      (!l || l.isConnected === !1) && !s.snapshot && (Lu(this.members, s), s.unmount());
    }
    i.scheduleRender();
  }
  remove(i) {
    if (Lu(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(i) {
    for (let o = this.members.indexOf(i) - 1; o >= 0; o--) {
      const s = this.members[o];
      if (s.isPresent !== !1 && s.instance?.isConnected !== !1)
        return this.promote(s), !0;
    }
    return !1;
  }
  promote(i, o) {
    const s = this.lead;
    if (i !== s && (this.prevLead = s, this.lead = i, i.show(), s)) {
      s.updateSnapshot(), i.scheduleRender();
      const { layoutDependency: l } = s.options, { layoutDependency: u } = i.options;
      (l === void 0 || l !== u) && (i.resumeFrom = s, o && (s.preserveOpacity = !0), s.snapshot && (i.snapshot = s.snapshot, i.snapshot.latestValues = s.animationValues || s.latestValues), i.root?.isUpdating && (i.isLayoutDirty = !0)), i.options.crossfade === !1 && s.hide();
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
const f_ = {
  borderRadius: {
    ...tl,
    applyTo: [...eg]
  },
  borderTopLeftRadius: tl,
  borderTopRightRadius: tl,
  borderBottomLeftRadius: tl,
  borderBottomRightRadius: tl,
  boxShadow: e_
}, Mu = {
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
Object.assign(vl, {
  ...f_,
  ...vl
});
const pm = ["", "X", "Y", "Z"], d_ = 1e3;
let h_ = 0;
function gm(n, i, o, s) {
  const { latestValues: l } = i;
  l[n] && (o[n] = l[n], i.setStaticValue(n, 0), s && (s[n] = 0));
}
function dT(n) {
  if (n.hasCheckedOptimisedAppear = !0, n.root === n)
    return;
  const { visualElement: i } = n.options;
  if (!i)
    return;
  const o = kw(i);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: l, layoutId: u } = n.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Ze, !(l || u));
  }
  const { parent: s } = n;
  s && !s.hasCheckedOptimisedAppear && dT(s);
}
function hT({ attachResizeListener: n, defaultParent: i, measureScroll: o, checkIsScrollRoot: s, resetTransform: l }) {
  return class {
    constructor(d = {}, h = i?.()) {
      this.id = h_++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(g_), this.nodes.forEach(E_), this.nodes.forEach(C_), this.nodes.forEach(v_);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new l_());
    }
    addEventListener(d, h) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Vu()), this.eventHandlers.get(d).add(h);
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
      this.isSVG = tg(d) && !RN(d), this.instance = d;
      const { layoutId: h, layout: g, visualElement: p } = this.options;
      if (p && !p.current && p.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || h) && (this.isLayoutDirty = !0), n) {
        let v, m = 0;
        const x = () => this.root.updateBlockedByResize = !1;
        Ze.read(() => {
          m = window.innerWidth;
        }), n(d, () => {
          const T = window.innerWidth;
          T !== m && (m = T, this.root.updateBlockedByResize = !0, v && v(), v = c_(x, 250), Mu.hasAnimatedSinceResize && (Mu.hasAnimatedSinceResize = !1, this.nodes.forEach(AS)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && p && (h || g) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: m, hasRelativeLayoutChanged: x, layout: T }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const w = this.options.transition || p.getDefaultTransition() || M_, { onLayoutAnimationStart: A, onLayoutAnimationComplete: C } = p.getProps(), R = !this.targetLayout || !uT(this.targetLayout, T), _ = !m && x;
        if (this.options.layoutRoot || this.resumeFrom || _ || m && (R || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const D = {
            ...Qp(w, "layout"),
            onPlay: A,
            onComplete: C
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (D.delay = 0, D.type = !1), this.startAnimation(D), this.setAnimationOrigin(v, _, D.path);
        } else
          m || AS(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = T;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Si(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(A_), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && dT(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), g && this.nodes.forEach(b_), this.nodes.forEach(ES);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(CS);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(S_), this.nodes.forEach(w_), this.nodes.forEach(T_), this.nodes.forEach(m_), this.nodes.forEach(p_)) : this.nodes.forEach(CS), this.clearAllSnapshots();
      const h = Vt.now();
      At.delta = na(0, 1e3 / 60, h - At.timestamp), At.timestamp = h, At.isProcessing = !0, cm.update.process(At), cm.preRender.process(At), cm.render.process(At), At.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ig.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(y_), this.sharedNodes.forEach(R_);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ze.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ze.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !en(this.snapshot.measuredBox.x) && !en(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++)
          this.path[g].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = Ct()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0);
    }
    updateScroll(d = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (h = !1), h && this.instance) {
        const g = s(this.instance);
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
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !cT(this.projectionDelta), g = this.getTransformTemplate(), p = g ? g(this.latestValues, "") : void 0, v = p !== this.prevTransformTemplateValue;
      d && this.instance && (h || yo(this.latestValues) || v) && (l(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const h = this.measurePageBox();
      let g = this.removeElementScroll(h);
      return d && (g = this.removeTransform(g)), N_(g), {
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
        return Ct();
      const h = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(__))) {
        const { scroll: p } = this.root;
        p && (Qn(h.x, p.offset.x), Qn(h.y, p.offset.y));
      }
      return h;
    }
    removeElementScroll(d) {
      const h = Ct();
      if (Xn(h, d), this.scroll?.wasRoot)
        return h;
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g], { scroll: v, options: m } = p;
        p !== this.root && v && m.layoutScroll && (v.wasRoot && Xn(h, d), Qn(h.x, v.offset.x), Qn(h.y, v.offset.y));
      }
      return h;
    }
    applyTransform(d, h = !1, g) {
      const p = g || Ct();
      Xn(p, d);
      for (let v = 0; v < this.path.length; v++) {
        const m = this.path[v];
        !h && m.options.layoutScroll && m.scroll && m !== m.root && (Qn(p.x, -m.scroll.offset.x), Qn(p.y, -m.scroll.offset.y)), yo(m.latestValues) && Eu(p, m.latestValues, m.layout?.layoutBox);
      }
      return yo(this.latestValues) && Eu(p, this.latestValues, this.layout?.layoutBox), p;
    }
    removeTransform(d) {
      const h = Ct();
      Xn(h, d);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        if (!yo(p.latestValues))
          continue;
        let v;
        p.instance && (ip(p.latestValues) && p.updateSnapshot(), v = Ct(), Xn(v, p.measurePageBox())), pS(h, p.latestValues, p.snapshot?.layoutBox, v);
      }
      return yo(this.latestValues) && pS(h, this.latestValues), h;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== At.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
      this.resolvedRelativeTargetAt = At.timestamp;
      const x = this.getClosestProjectingParent();
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && x && x.layout ? this.createRelativeTarget(x, this.layout.layoutBox, x.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ct(), this.targetWithTransforms = Ct()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), ZN(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Xn(this.target, this.layout.layoutBox), Yw(this.target, this.targetDelta)) : Xn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? this.createRelativeTarget(x, this.target, x.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ip(this.parent.latestValues) || Gw(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, h, g) {
      this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ct(), this.relativeTargetOrigin = Ct(), Gu(this.relativeTargetOrigin, h, g, this.options.layoutAnchor || void 0), Xn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(), h = !!this.resumingFrom || this !== d;
      let g = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === At.timestamp && (g = !1), g)
        return;
      const { layout: p, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || v))
        return;
      Xn(this.layoutCorrected, this.layout.layoutBox);
      const m = this.treeScale.x, x = this.treeScale.y;
      lN(this.layoutCorrected, this.treeScale, this.path, h), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = Ct());
      const { target: T } = d;
      if (!T) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (cS(this.prevProjectionDelta.x, this.projectionDelta.x), cS(this.prevProjectionDelta.y, this.projectionDelta.y)), cl(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== m || this.treeScale.y !== x || !xS(this.projectionDelta.x, this.prevProjectionDelta.x) || !xS(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T));
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
      this.prevProjectionDelta = js(), this.projectionDelta = js(), this.projectionDeltaWithTransform = js();
    }
    setAnimationOrigin(d, h = !1, g) {
      const p = this.snapshot, v = p ? p.latestValues : {}, m = { ...this.latestValues }, x = js();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const T = Ct(), w = p ? p.source : void 0, A = this.layout ? this.layout.source : void 0, C = w !== A, R = this.getStack(), _ = !R || R.members.length <= 1, D = !!(C && !_ && this.options.crossfade === !0 && !this.path.some(O_));
      this.animationProgress = 0;
      let M;
      const B = g?.interpolateProjection(d);
      this.mixTargetDelta = (U) => {
        const O = U / 1e3, N = B?.(O);
        N ? (x.x.translate = N.x, x.x.scale = Je(d.x.scale, 1, O), x.x.origin = d.x.origin, x.x.originPoint = d.x.originPoint, x.y.translate = N.y, x.y.scale = Je(d.y.scale, 1, O), x.y.origin = d.y.origin, x.y.originPoint = d.y.originPoint) : (RS(x.x, d.x, O), RS(x.y, d.y, O)), this.setTargetDelta(x), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Gu(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), D_(this.relativeTarget, this.relativeTargetOrigin, T, O), M && WN(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = Ct()), Xn(M, this.relativeTarget)), C && (this.animationValues = m, i_(m, v, this.latestValues, O, D, _)), N && N.rotate !== void 0 && (this.animationValues || (this.animationValues = m), this.animationValues.pathRotation = N.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = O;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Si(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ze.update(() => {
        Mu.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = za(0)), this.motionValue.jump(0, !1), this.currentAnimation = s_(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (h) => {
            this.mixTargetDelta(h), d.onUpdate && d.onUpdate(h);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), FO(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(d_), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead(), { targetWithTransforms: h, layout: g, latestValues: p } = d;
      let { target: v } = d;
      if (!(!h || !v || !g)) {
        if (this !== d && this.layout && g && mT(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          v = this.target || Ct();
          const m = en(this.layout.layoutBox.x);
          v.x.min = d.target.x.min, v.x.max = v.x.min + m;
          const x = en(this.layout.layoutBox.y);
          v.y.min = d.target.y.min, v.y.max = v.y.min + x;
        }
        Xn(h, v), Eu(h, p), cl(this.projectionDeltaWithTransform, this.layoutCorrected, h, p);
      }
    }
    registerSharedNode(d, h) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new u_()), this.sharedNodes.get(d).add(h);
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
      g.z && gm("z", d, p, this.animationValues);
      for (let v = 0; v < pm.length; v++)
        gm(`rotate${pm[v]}`, d, p, this.animationValues), gm(`skew${pm[v]}`, d, p, this.animationValues);
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
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = Ou(h?.pointerEvents) || "", d.transform = g ? g(this.latestValues, "") : "none";
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = Ou(h?.pointerEvents) || ""), this.hasProjected && !yo(this.latestValues) && (d.transform = g ? g({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const v = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let m = t_(this.projectionDeltaWithTransform, this.treeScale, v);
      g && (m = g(v, m)), d.transform = m;
      const { x, y: T } = this.projectionDelta;
      d.transformOrigin = `${x.origin * 100}% ${T.origin * 100}% 0`, p.animationValues ? d.opacity = p === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : d.opacity = p === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const w in vl) {
        if (v[w] === void 0)
          continue;
        const { correct: A, applyTo: C, isCSSVariable: R } = vl[w], _ = m === "none" ? v[w] : A(v[w], p);
        if (C) {
          const D = C.length;
          for (let M = 0; M < D; M++)
            d[C[M]] = _;
        } else
          R ? this.options.visualElement.renderState.vars[w] = _ : d[w] = _;
      }
      this.options.layoutId && (d.pointerEvents = p === this ? Ou(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(ES), this.root.sharedNodes.clear();
    }
  };
}
function m_(n) {
  n.updateLayout(), x_(n);
}
function p_(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: s } = n.layout, { animationType: l } = n.options, u = i.source !== n.layout.source;
    if (l === "size")
      $n((v) => {
        const m = u ? i.measuredBox[v] : i.layoutBox[v], x = en(m);
        m.min = o[v].min, m.max = m.min + x;
      });
    else if (l === "x" || l === "y") {
      const v = l === "x" ? "y" : "x";
      op(u ? i.measuredBox[v] : i.layoutBox[v], o[v]);
    } else mT(l, i.layoutBox, o) && $n((v) => {
      const m = u ? i.measuredBox[v] : i.layoutBox[v], x = en(o[v]);
      m.max = m.min + x, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[v].max = n.relativeTarget[v].min + x);
    });
    const d = js();
    cl(d, o, i.layoutBox);
    const h = js();
    u ? cl(h, n.applyTransform(s, !0), i.measuredBox) : cl(h, o, i.layoutBox);
    const g = !cT(d);
    let p = !1;
    if (!n.resumeFrom) {
      const v = n.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: m, layout: x } = v;
        if (m && x) {
          const T = n.options.layoutAnchor || void 0, w = Ct();
          Gu(w, i.layoutBox, m.layoutBox, T);
          const A = Ct();
          Gu(A, o, x.layoutBox, T), uT(w, A) || (p = !0), v.options.layoutRoot && (n.relativeTarget = A, n.relativeTargetOrigin = w, n.relativeParent = v);
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
function g_(n) {
  n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function v_(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function y_(n) {
  n.clearSnapshot();
}
function ES(n) {
  n.clearMeasurements();
}
function b_(n) {
  n.isLayoutDirty = !0, n.updateLayout();
}
function CS(n) {
  n.isLayoutDirty = !1;
}
function x_(n) {
  const { snapshot: i, dragAncestor: o } = n, s = o?.layout;
  if (!i || !s || n.resumeFrom || n.isAnimationBlocked)
    return;
  const l = o.dragSnapshot;
  $n((u) => Qn(i.layoutBox[u], s.layoutBox[u].min - l.layoutBox[u].min));
}
function S_(n) {
  n.isAnimationBlocked && n.layout && !n.isLayoutDirty && (n.snapshot = n.dragSnapshot || n.layout, n.isLayoutDirty = !0);
}
function w_(n) {
  n.relativeTarget && n.relativeParent?.isLayoutDirty && (n.currentAnimation ? n.isLayoutDirty = !0 : (n.targetDelta = void 0, n.removeRelativeTarget()));
}
function T_(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), n.resetTransform();
}
function AS(n) {
  n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0;
}
function E_(n) {
  n.resolveTargetDelta();
}
function C_(n) {
  n.calcProjection();
}
function A_(n) {
  n.resetSkewAndRotation();
}
function R_(n) {
  n.removeLeadSnapshot();
}
function RS(n, i, o) {
  n.translate = Je(i.translate, 0, o), n.scale = Je(i.scale, 1, o), n.origin = i.origin, n.originPoint = i.originPoint;
}
function DS(n, i, o, s) {
  n.min = Je(i.min, o.min, s), n.max = Je(i.max, o.max, s);
}
function D_(n, i, o, s) {
  DS(n.x, i.x, o.x, s), DS(n.y, i.y, o.y, s);
}
function O_(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const M_ = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, OS = (n) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n), MS = OS("applewebkit/") && !OS("chrome/") ? Math.round : Jn;
function NS(n) {
  n.min = MS(n.min), n.max = MS(n.max);
}
function N_(n) {
  NS(n.x), NS(n.y);
}
function mT(n, i, o) {
  return n === "position" || n === "preserve-aspect" && !KN(bS(i), bS(o), 0.2);
}
function __(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const j_ = hT({
  attachResizeListener: (n, i) => yl(n, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), vm = {
  current: void 0
}, pT = hT({
  measureScroll: (n) => ({
    x: n.scrollLeft,
    y: n.scrollTop
  }),
  defaultParent: () => {
    if (!vm.current) {
      const n = new j_({});
      n.mount(window), n.setOptions({ layoutScroll: !0 }), vm.current = n;
    }
    return vm.current;
  },
  resetTransform: (n, i) => {
    n.style.transform = i !== void 0 ? i : "none";
  },
  checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed"
}), Eo = S.createContext({
  transformPagePoint: (n) => n,
  isStatic: !1,
  reducedMotion: "never"
});
function _S(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
function z_(...n) {
  return (i) => {
    let o = !1;
    const s = n.map((l) => {
      const u = _S(l, i);
      return !o && typeof u == "function" && (o = !0), u;
    });
    if (o)
      return () => {
        for (let l = 0; l < s.length; l++) {
          const u = s[l];
          typeof u == "function" ? u() : _S(n[l], null);
        }
      };
  };
}
function L_(...n) {
  return S.useCallback(z_(...n), n);
}
class V_ extends S.Component {
  getSnapshotBeforeUpdate(i) {
    const o = this.props.childRef.current;
    if (Tu(o) && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const s = o.offsetParent, l = Tu(s) && s.offsetWidth || 0, u = Tu(s) && s.offsetHeight || 0, d = getComputedStyle(o), h = this.props.sizeRef.current;
      h.height = parseFloat(d.height), h.width = parseFloat(d.width), h.top = o.offsetTop, h.left = o.offsetLeft, h.right = l - h.width - h.left, h.bottom = u - h.height - h.top, h.direction = d.direction;
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
function P_({ children: n, isPresent: i, anchorX: o, anchorY: s, root: l, pop: u }) {
  const d = S.useId(), h = S.useRef(null), g = S.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: p } = S.useContext(Eo), v = u !== !1 ? n.props?.ref ?? n?.ref : void 0, m = L_(h, v);
  return S.useInsertionEffect(() => {
    const { width: x, height: T, top: w, left: A, right: C, bottom: R, direction: _ } = g.current;
    if (i || u === !1 || !h.current || !x || !T)
      return;
    const D = _ === "rtl", M = o === "left" ? D ? `right: ${C}` : `left: ${A}` : D ? `left: ${A}` : `right: ${C}`, B = s === "bottom" ? `bottom: ${R}` : `top: ${w}`, U = h.current;
    U.dataset.motionPopId = d;
    const O = U.ownerDocument, N = O.createElement("style");
    p && (N.nonce = p);
    const F = l ?? O.head;
    return F.appendChild(N), N.sheet && N.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${T}px !important;
            ${M}px !important;
            ${B}px !important;
          }
        `), () => {
      h.current?.removeAttribute("data-motion-pop-id"), F.contains(N) && F.removeChild(N);
    };
  }, [i]), y.jsx(V_, { isPresent: i, childRef: h, sizeRef: g, pop: u, children: u === !1 ? n : S.cloneElement(n, { ref: m }) });
}
const k_ = ({ children: n, initial: i, isPresent: o, onExitComplete: s, custom: l, presenceAffectsLayout: u, mode: d, anchorX: h, anchorY: g, root: p }) => {
  const v = Gs(B_), m = S.useId(), x = S.useRef(o), T = S.useRef(s);
  ks(() => {
    x.current = o, T.current = s;
  });
  let w = !0, A = S.useMemo(() => (w = !1, {
    id: m,
    initial: i,
    isPresent: o,
    custom: l,
    onExitComplete: (C) => {
      v.set(C, !0);
      for (const R of v.values())
        if (!R)
          return;
      s && s();
    },
    register: (C) => (v.set(C, !1), () => {
      v.delete(C), !x.current && !v.size && T.current?.();
    })
  }), [o, v, s]);
  return u && w && (A = { ...A }), S.useMemo(() => {
    v.forEach((C, R) => v.set(R, !1));
  }, [o]), S.useEffect(() => {
    !o && !v.size && s && s();
  }, [o]), n = y.jsx(P_, { pop: d === "popLayout", isPresent: o, anchorX: h, anchorY: g, root: p, children: n }), y.jsx(Wu.Provider, { value: A, children: n });
};
function B_() {
  return /* @__PURE__ */ new Map();
}
function gT(n = !0) {
  const i = S.useContext(Wu);
  if (i === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: s, register: l } = i, u = S.useId();
  S.useEffect(() => {
    if (n)
      return l(u);
  }, [n]);
  const d = S.useCallback(() => n && s && s(u), [u, s, n]);
  return !o && s ? [!1, d] : [!0];
}
const nl = (n) => n.key || "";
function jS(n) {
  const i = [];
  return S.Children.forEach(n, (o) => {
    S.isValidElement(o) && i.push(o);
  }), i;
}
const vT = ({ children: n, custom: i, initial: o = !0, onExitComplete: s, presenceAffectsLayout: l = !0, mode: u = "sync", propagate: d = !1, anchorX: h = "left", anchorY: g = "top", root: p }) => {
  const [v, m] = gT(d), x = S.useMemo(() => jS(n), [n]), T = d && !v ? [] : x.map(nl), w = S.useRef(!0), A = Gs(() => /* @__PURE__ */ new Map()), C = S.useRef(/* @__PURE__ */ new Set()), [R, _] = S.useState(x), [D, M] = S.useState(x);
  ks(() => {
    d && !v && !D.length && m?.();
  }, [v, d, D.length, m]), ks(() => {
    w.current = !1;
    for (let O = 0; O < D.length; O++) {
      const N = nl(D[O]);
      T.includes(N) ? (A.delete(N), C.current.delete(N)) : A.get(N) !== !0 && A.set(N, !1);
    }
  }, [D, T.length, T.join("-")]);
  const B = [];
  if (x !== R) {
    let O = [...x], N = 0;
    for (const F of D) {
      const Q = T.indexOf(nl(F));
      Q === -1 ? (O.splice(N++, 0, F), B.push(F)) : N = Q + B.length + 1;
    }
    return B.every((F) => A.get(nl(F))) ? O = x : u === "wait" && (O = B), M(jS(O)), _(x), null;
  }
  const { forceRender: U } = S.useContext(jp);
  return y.jsx(y.Fragment, { children: D.map((O) => {
    const N = nl(O), F = d && !v ? !1 : x === D || T.includes(N), Q = () => {
      if (C.current.has(N))
        return;
      if (A.has(N))
        C.current.add(N), A.set(N, !0);
      else
        return;
      let ue = !0;
      A.forEach((ie) => {
        ie || (ue = !1);
      }), ue && (U?.(), _([]), d && m?.(), s && s());
    };
    return y.jsx(k_, { isPresent: F, initial: !w.current || o ? void 0 : !1, custom: i, presenceAffectsLayout: l, mode: u, root: p, onExitComplete: F ? void 0 : Q, anchorX: h, anchorY: g, children: O }, N);
  }) });
}, yT = S.createContext({ strict: !1 }), zS = {
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
let LS = !1;
function U_() {
  if (LS)
    return;
  const n = {};
  for (const i in zS)
    n[i] = {
      isEnabled: (o) => zS[i].some((s) => !!o[s])
    };
  Ww(n), LS = !0;
}
function bT() {
  return U_(), LN();
}
function H_(n) {
  const i = bT();
  for (const o in n)
    i[o] = {
      ...i[o],
      ...n[o]
    };
  Ww(i);
}
function lg({ children: n, ...i }) {
  const o = S.useContext(Eo);
  i = { ...o, ...i }, i.transition = $p(i.transition, o.transition), i.isStatic = Gs(() => i.isStatic);
  const s = S.useMemo(() => i, [
    JSON.stringify(i.transition),
    i.transformPagePoint,
    i.reducedMotion,
    i.skipAnimations,
    i.isValidProp
  ]);
  return y.jsx(Eo.Provider, { value: s, children: n });
}
const sf = /* @__PURE__ */ S.createContext({});
function I_(n, i) {
  if (of(n)) {
    const { initial: o, animate: s } = n;
    return {
      initial: o === !1 || gl(o) ? o : void 0,
      animate: gl(s) ? s : void 0
    };
  }
  return n.inherit !== !1 ? i : {};
}
function q_(n) {
  const { initial: i, animate: o } = I_(n, S.useContext(sf));
  return S.useMemo(() => ({ initial: i, animate: o }), [VS(i), VS(o)]);
}
function VS(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const cg = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function xT(n, i, o) {
  for (const s in i)
    !Dt(i[s]) && !nT(s, o) && (n[s] = i[s]);
}
function G_({ transformTemplate: n }, i) {
  return S.useMemo(() => {
    const o = cg();
    return ng(o, i, n), Object.assign({}, o.vars, o.style);
  }, [i]);
}
function Y_(n, i) {
  const o = n.style || {}, s = {};
  return xT(s, o, n), Object.assign(s, G_(n, i)), s;
}
function F_(n, i) {
  const o = {}, s = Y_(n, i);
  return n.drag && n.dragListener !== !1 && (o.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (o.tabIndex = 0), o.style = s, o;
}
const ST = () => ({
  ...cg(),
  attrs: {}
});
function X_(n, i, o, s) {
  const l = S.useMemo(() => {
    const u = ST();
    return Iw(u, i, aT(s), n.transformTemplate, n.style), {
      ...u.attrs,
      style: { ...u.style }
    };
  }, [i]);
  if (n.style) {
    const u = {};
    xT(u, n.style, n), l.style = { ...u, ...l.style };
  }
  return l;
}
const K_ = /* @__PURE__ */ new Set([
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
function Yu(n) {
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || K_.has(n);
}
function Z_(n, i) {
  return n.startsWith("on") ? !Yu(n) : i?.(n) ?? !Yu(n);
}
function $_(n, i, o, s) {
  const l = {};
  for (const u in n)
    u === "values" && typeof n.values == "object" || Dt(n[u]) || (Z_(u, s) || o === !0 && Yu(u) || !i && !Yu(u) || // If trying to use native HTML drag events, forward drag listeners
    n.draggable && u.startsWith("onDrag")) && (l[u] = n[u]);
  return l;
}
const Q_ = [
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
function ug(n) {
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
      !!(Q_.indexOf(n) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(n))
    )
  );
}
function J_(n, i, o, { latestValues: s }, l, u = !1, d, h) {
  const p = (d ?? ug(n) ? X_ : F_)(i, s, l, n), v = $_(i, typeof n == "string", u, h), m = n !== S.Fragment ? { ...v, ...p, ref: o } : {}, { children: x } = i, T = S.useMemo(() => Dt(x) ? x.get() : x, [x]);
  return S.createElement(n, {
    ...m,
    children: T
  });
}
function W_({ scrapeMotionValuesFromProps: n, createRenderState: i }, o, s, l) {
  return {
    latestValues: ej(o, s, l, n),
    renderState: i()
  };
}
function ej(n, i, o, s) {
  const l = {}, u = s(n, {});
  for (const x in u)
    l[x] = Ou(u[x]);
  let { initial: d, animate: h } = n;
  const g = of(n), p = Qw(n);
  i && p && !g && n.inherit !== !1 && (d === void 0 && (d = i.initial), h === void 0 && (h = i.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || d === !1;
  const m = v ? h : d;
  if (m && typeof m != "boolean" && !af(m)) {
    const x = Array.isArray(m) ? m : [m];
    for (let T = 0; T < x.length; T++) {
      const w = zw(n, x[T]);
      if (w) {
        const { transitionEnd: A, transition: C, ...R } = w;
        for (const _ in R) {
          let D = R[_];
          if (Array.isArray(D)) {
            const M = v ? D.length - 1 : 0;
            D = D[M];
          }
          D !== null && (l[_] = D);
        }
        for (const _ in A)
          l[_] = A[_];
      }
    }
  }
  return l;
}
const wT = (n) => (i, o) => {
  const s = S.useContext(sf), l = S.useContext(Wu), u = () => W_(n, i, s, l);
  return o ? u() : Gs(u);
}, tj = /* @__PURE__ */ wT({
  scrapeMotionValuesFromProps: rg,
  createRenderState: cg
}), nj = /* @__PURE__ */ wT({
  scrapeMotionValuesFromProps: oT,
  createRenderState: ST
}), ij = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function aj(n, i, o) {
  const s = S.useRef(o);
  S.useInsertionEffect(() => {
    s.current = o;
  });
  const l = S.useRef(null);
  return S.useCallback((u) => {
    u && n.onMount?.(u), i && (u ? i.mount(u) : i.unmount());
    const d = s.current;
    if (typeof d == "function")
      if (u) {
        const h = d(u);
        typeof h == "function" && (l.current = h);
      } else l.current ? (l.current(), l.current = null) : d(u);
    else d && (d.current = u);
  }, [i]);
}
const TT = S.createContext({});
function Os(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function oj(n, i, o, s, l, u) {
  const { visualElement: d } = S.useContext(sf), h = S.useContext(yT), g = S.useContext(Wu), p = S.useContext(Eo), v = p.reducedMotion, m = p.skipAnimations, x = S.useRef(null), T = S.useRef(!1);
  s = s || h.renderer, !x.current && s && (x.current = s(n, {
    visualState: i,
    parent: d,
    props: o,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: m,
    isSVG: u
  }), T.current && x.current && (x.current.manuallyAnimateOnMount = !0));
  const w = x.current, A = S.useContext(TT);
  w && !w.projection && l && (w.type === "html" || w.type === "svg") && sj(x.current, o, l, A);
  const C = S.useRef(!1);
  S.useInsertionEffect(() => {
    w && C.current && w.update(o, g);
  });
  const R = o[Pw], _ = S.useRef(!!R && typeof window < "u" && !window.MotionHandoffIsComplete?.(R) && window.MotionHasOptimisedAnimation?.(R));
  return ks(() => {
    !T.current || !w || (w.animationState?.animateChanges(), w.enteringChildren = void 0);
  }, []), ks(() => {
    T.current = !0, w && (C.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), w.scheduleRenderMicrotask(), _.current && w.animationState && w.animationState.animateChanges());
  }), S.useEffect(() => {
    w && (!_.current && w.animationState && w.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(R);
    }), _.current = !1), w.enteringChildren = void 0);
  }), w;
}
function sj(n, i, o, s) {
  const { layoutId: l, layout: u, drag: d, dragConstraints: h, layoutScroll: g, layoutRoot: p, layoutAnchor: v, layoutCrossfade: m } = i;
  n.projection = new o(n.latestValues, i["data-framer-portal-id"] ? void 0 : ET(n.parent)), n.projection.setOptions({
    layoutId: l,
    layout: u,
    alwaysMeasureLayout: !!d || h && Os(h),
    visualElement: n,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof u == "string" ? u : "both",
    initialPromotionConfig: s,
    crossfade: m,
    layoutScroll: g,
    layoutRoot: p,
    layoutAnchor: v
  });
}
function ET(n) {
  if (n)
    return n.options.allowProjection !== !1 ? n.projection : ET(n.parent);
}
function ym(n, { forwardMotionProps: i = !1, type: o } = {}, s, l) {
  s && H_(s);
  const u = o ? o === "svg" : ug(n), d = u ? nj : tj;
  function h(p, v) {
    let m;
    const x = {
      ...S.useContext(Eo),
      ...p,
      layoutId: rj(p)
    }, { isStatic: T, isValidProp: w } = x, A = q_(p), C = d(p, T);
    if (!T && typeof window < "u") {
      lj();
      const R = cj(x);
      m = R.MeasureLayout, A.visualElement = oj(n, C, x, l, R.ProjectionNode, u);
    }
    return y.jsxs(sf.Provider, { value: A, children: [m && A.visualElement ? y.jsx(m, { visualElement: A.visualElement, ...x }) : null, J_(n, p, aj(C, A.visualElement, v), C, T, i, u, w)] });
  }
  h.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const g = S.forwardRef(h);
  return g[ij] = n, g;
}
function rj({ layoutId: n }) {
  const i = S.useContext(jp).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function lj(n, i) {
  S.useContext(yT).strict;
}
function cj(n) {
  const i = bT(), { drag: o, layout: s } = i;
  if (!o && !s)
    return {};
  const l = { ...o, ...s };
  return {
    MeasureLayout: o?.isEnabled(n) || s?.isEnabled(n) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode
  };
}
function uj(n, i) {
  if (typeof Proxy > "u")
    return ym;
  const o = /* @__PURE__ */ new Map(), s = (u, d) => ym(u, d, n, i), l = (u, d) => s(u, d);
  return new Proxy(l, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (u, d) => d === "create" ? s : (o.has(d) || o.set(d, ym(d, void 0, n, i)), o.get(d))
  });
}
const fj = (n, i) => i.isSVG ?? ug(n) ? new UN(i) : new kN(i, {
  allowProjection: n !== S.Fragment
});
class dj extends Pa {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(i) {
    super(i), i.animationState || (i.animationState = IN(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    af(i) && (this.unmountControls = i.subscribe(this.node));
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
let hj = 0;
class mj extends Pa {
  constructor() {
    super(...arguments), this.id = hj++;
  }
  update() {
    const { presenceContext: i, prevPresenceContext: o, animationState: s } = this.node;
    if (!i || !s)
      return;
    const { isPresent: l, onExitComplete: u } = i, d = o?.isPresent;
    if (l === d)
      return;
    if (l && d === !1) {
      if (this.exit === !0) {
        const { initial: g } = this.node.getProps();
        if (g && !Array.isArray(g)) {
          const { transition: p, transitionEnd: v, ...m } = To(this.node, g) || {};
          for (const x in m)
            this.node.getValue(x)?.jump(m[x]);
        }
        this.node.blockInitialAnimation = !1, s.reset(), s.animateChanges();
      } else
        s.setActive("exit", !1);
      this.exit = void 0;
      return;
    }
    const h = this.exit = s.setActive("exit", !l);
    u && !l && h.then(() => {
      this.exit === h && (this.exit = !0, u(this.id));
    });
  }
  mount() {
    const { register: i, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {
  }
}
const pj = {
  animation: {
    Feature: dj
  },
  exit: {
    Feature: mj
  }
};
function rf(n) {
  return {
    point: {
      x: n.pageX,
      y: n.pageY
    }
  };
}
const gj = (n) => (i) => ag(i) && n(i, rf(i));
function ul(n, i, o, s) {
  return yl(n, i, gj(o), s);
}
const CT = ({ current: n }) => n ? n.ownerDocument.defaultView : null, PS = (n, i) => Math.abs(n - i);
function vj(n, i) {
  const o = PS(n.x, i.x), s = PS(n.y, i.y);
  return Math.sqrt(o ** 2 + s ** 2);
}
const kS = /* @__PURE__ */ new Set(["auto", "scroll"]);
class AT {
  constructor(i, o, { transformPagePoint: s, contextWindow: l = window, dragSnapToOrigin: u = !1, distanceThreshold: d = 3, element: h } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (w) => {
      this.handleScroll(w.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = ru(this.lastRawMoveEventInfo, this.transformPagePoint));
      const w = bm(this.lastMoveEventInfo, this.history), A = this.startEvent !== null, C = vj(w.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!A && !C)
        return;
      const { point: R } = w;
      this.history.push({ ...R, timestamp: Vt.now() });
      const { onStart: _, onMove: D } = this.handlers;
      A || (_ && _(this.lastMoveEvent, w), this.startEvent = this.lastMoveEvent), D && D(this.lastMoveEvent, w);
    }, this.handlePointerMove = (w, A) => {
      this.lastMoveEvent = w, this.lastRawMoveEventInfo = A, this.lastMoveEventInfo = ru(A, this.transformPagePoint), this.hasPendingMove = !0, Ze.update(this.updatePoint, !0);
    }, this.handlePointerUp = (w, A) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: C, onSessionEnd: R, resumeAnimation: _ } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && _ && _(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const D = bm(w.type === "pointercancel" ? this.lastMoveEventInfo : ru(A, this.transformPagePoint), this.history);
      this.startEvent && C && C(w, D), R && R(w, D);
    }, !ag(i))
      return;
    this.dragSnapToOrigin = u, this.handlers = o, this.transformPagePoint = s, this.distanceThreshold = d, this.contextWindow = l || window;
    const g = rf(i), p = ru(g, this.transformPagePoint), { point: v } = p, { timestamp: m } = At;
    this.history = [{ ...v, timestamp: m }];
    const { onSessionStart: x } = o;
    x && x(i, bm(p, this.history));
    const T = { passive: !0, capture: !0 };
    this.removeListeners = Cl(ul(this.contextWindow, "pointermove", this.handlePointerMove, T), ul(this.contextWindow, "pointerup", this.handlePointerUp, T), ul(this.contextWindow, "pointercancel", this.handlePointerUp, T)), h && this.startScrollTracking(h);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(i) {
    let o = i.parentElement;
    for (; o; ) {
      const s = getComputedStyle(o);
      (kS.has(s.overflowX) || kS.has(s.overflowY)) && this.scrollPositions.set(o, {
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
    const s = i === window, l = s ? { x: window.scrollX, y: window.scrollY } : {
      x: i.scrollLeft,
      y: i.scrollTop
    }, u = { x: l.x - o.x, y: l.y - o.y };
    u.x === 0 && u.y === 0 || (s ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += u.x, this.lastMoveEventInfo.point.y += u.y) : this.history.length > 0 && (this.history[0].x -= u.x, this.history[0].y -= u.y), this.scrollPositions.set(i, l), Ze.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Si(this.updatePoint);
  }
}
function ru(n, i) {
  return i ? { point: i(n.point) } : n;
}
function BS(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function bm({ point: n }, i) {
  return {
    point: n,
    delta: BS(n, RT(i)),
    offset: BS(n, yj(i)),
    velocity: bj(i, 0.1)
  };
}
function yj(n) {
  return n[0];
}
function RT(n) {
  return n[n.length - 1];
}
function bj(n, i) {
  if (n.length < 2)
    return { x: 0, y: 0 };
  let o = n.length - 1, s = null;
  const l = RT(n);
  for (; o >= 0 && (s = n[o], !(l.timestamp - s.timestamp > /* @__PURE__ */ Pn(i))); )
    o--;
  if (!s)
    return { x: 0, y: 0 };
  s === n[0] && n.length > 2 && l.timestamp - s.timestamp > /* @__PURE__ */ Pn(i) * 2 && (s = n[1]);
  const u = /* @__PURE__ */ Vn(l.timestamp - s.timestamp);
  if (u === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (l.x - s.x) / u,
    y: (l.y - s.y) / u
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function xj(n, { min: i, max: o }, s) {
  return i !== void 0 && n < i ? n = s ? Je(i, n, s.min) : Math.max(n, i) : o !== void 0 && n > o && (n = s ? Je(o, n, s.max) : Math.min(n, o)), n;
}
function US(n, i, o) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: o !== void 0 ? n.max + o - (n.max - n.min) : void 0
  };
}
function Sj(n, { top: i, left: o, bottom: s, right: l }) {
  return {
    x: US(n.x, o, l),
    y: US(n.y, i, s)
  };
}
function HS(n, i) {
  let o = i.min - n.min, s = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([o, s] = [s, o]), { min: o, max: s };
}
function wj(n, i) {
  return {
    x: HS(n.x, i.x),
    y: HS(n.y, i.y)
  };
}
function Tj(n, i) {
  let o = 0.5;
  const s = en(n), l = en(i);
  return l > s ? o = /* @__PURE__ */ fl(i.min, i.max - s, n.min) : s > l && (o = /* @__PURE__ */ fl(n.min, n.max - l, i.min)), na(0, 1, o);
}
function Ej(n, i) {
  const o = {};
  return i.min !== void 0 && (o.min = i.min - n.min), i.max !== void 0 && (o.max = i.max - n.min), o;
}
const sp = 0.35;
function Cj(n = sp) {
  return n === !1 ? n = 0 : n === !0 && (n = sp), {
    x: IS(n, "left", "right"),
    y: IS(n, "top", "bottom")
  };
}
function IS(n, i, o) {
  return {
    min: qS(n, i),
    max: qS(n, o)
  };
}
function qS(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const Aj = /* @__PURE__ */ new WeakMap();
class Rj {
  constructor(i) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ct(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i;
  }
  start(i, { snapToCursor: o = !1, distanceThreshold: s } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1)
      return;
    const u = (m) => {
      o && this.snapToCursor(m), this.stopAnimation();
    }, d = (m, x) => {
      const { drag: T, dragPropagation: w, onDragStart: A } = this.getProps();
      if (T && !w && (this.openDragLock && this.openDragLock(), this.openDragLock = uN(T), !this.openDragLock))
        return;
      this.latestPointerEvent = m, this.latestPanInfo = x, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $n((R) => {
        let _ = this.getAxisMotionValue(R).get() || 0;
        if (bi.test(_)) {
          const { projection: D } = this.visualElement;
          if (D && D.layout) {
            const M = D.layout.layoutBox[R];
            M && (_ = en(M) * (parseFloat(_) / 100));
          }
        }
        this.originPoint[R] = _;
      }), A && Ze.update(() => A(m, x), !1, !0), ep(this.visualElement, "transform");
      const { animationState: C } = this.visualElement;
      C && C.setActive("whileDrag", !0);
    }, h = (m, x) => {
      this.latestPointerEvent = m, this.latestPanInfo = x;
      const { dragPropagation: T, dragDirectionLock: w, onDirectionLock: A, onDrag: C } = this.getProps();
      if (!T && !this.openDragLock)
        return;
      const { offset: R } = x;
      if (w && this.currentDirection === null) {
        this.currentDirection = Oj(R), this.currentDirection !== null && A && A(this.currentDirection);
        return;
      }
      this.updateAxis("x", x.point, R), this.updateAxis("y", x.point, R), this.visualElement.render(), C && Ze.update(() => C(m, x), !1, !0);
    }, g = (m, x) => {
      this.latestPointerEvent = m, this.latestPanInfo = x, this.stop(m, x), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, p = () => {
      const { dragSnapToOrigin: m } = this.getProps();
      (m || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new AT(i, {
      onSessionStart: u,
      onStart: d,
      onMove: h,
      onSessionEnd: g,
      resumeAnimation: p
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: s,
      contextWindow: CT(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(i, o) {
    const s = i || this.latestPointerEvent, l = o || this.latestPanInfo, u = this.isDragging;
    if (this.cancel(), !u || !l || !s)
      return;
    const { velocity: d } = l;
    this.startAnimation(d);
    const { onDragEnd: h } = this.getProps();
    h && Ze.postRender(() => h(s, l));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: o } = this.visualElement;
    i && (i.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1);
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
  updateAxis(i, o, s) {
    const { drag: l } = this.getProps();
    if (!s || !lu(i, l, this.currentDirection))
      return;
    const u = this.getAxisMotionValue(i);
    let d = this.originPoint[i] + s[i];
    this.constraints && this.constraints[i] && (d = xj(d, this.constraints[i], this.elastic[i])), u.set(d);
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: o } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, l = this.constraints;
    i && Os(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && s ? this.constraints = Sj(s.layoutBox, i) : this.constraints = !1, this.elastic = Cj(o), l !== this.constraints && !Os(i) && s && this.constraints && !this.hasMutatedConstraints && $n((u) => {
      this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = Ej(s.layoutBox[u], this.constraints[u]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: o } = this.getProps();
    if (!i || !Os(i))
      return !1;
    const s = i.current, { projection: l } = this.visualElement;
    if (!l || !l.layout)
      return !1;
    l.root && (l.root.scroll = void 0, l.root.updateScroll());
    const u = cN(s, l.root, this.visualElement.getTransformPagePoint());
    let d = wj(l.layout.layoutBox, u);
    if (o) {
      const h = o(sN(d));
      this.hasMutatedConstraints = !!h, h && (d = qw(h));
    }
    return d;
  }
  startAnimation(i) {
    const { drag: o, dragMomentum: s, dragElastic: l, dragTransition: u, dragSnapToOrigin: d, onDragTransitionEnd: h } = this.getProps(), g = this.constraints || {}, p = $n((v) => {
      if (!lu(v, o, this.currentDirection))
        return;
      let m = g && g[v] || {};
      (d === !0 || d === v) && (m = { min: 0, max: 0 });
      const x = l ? 200 : 1e6, T = l ? 40 : 1e7, w = {
        type: "inertia",
        velocity: s ? i[v] : 0,
        bounceStiffness: x,
        bounceDamping: T,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...u,
        ...m
      };
      return this.startAxisValueAnimation(v, w);
    });
    return Promise.all(p).then(h);
  }
  startAxisValueAnimation(i, o) {
    const s = this.getAxisMotionValue(i);
    return ep(this.visualElement, i), s.start(Jp(i, s, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    $n((i) => this.getAxisMotionValue(i).stop());
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
    const { drag: s } = this.getProps(), l = { x: i, y: o }, u = this.visualElement.getTransformPagePoint()?.(l) || l, d = this.visualElement.measureViewportBox();
    $n((h) => {
      if (!lu(h, s, this.currentDirection))
        return;
      const g = this.getAxisMotionValue(h), { min: p, max: v } = d[h];
      g.set((g.get() || 0) + u[h] - Je(p, v, 0.5));
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
    const { drag: i, dragConstraints: o } = this.getProps(), { projection: s } = this.visualElement;
    if (!Os(o) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const l = this.constraints, u = { x: 0, y: 0 };
    $n((h) => {
      const g = this.getAxisMotionValue(h).get();
      u[h] = Tj({ min: g, max: g }, l[h]);
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.constraints = !1, this.resolveConstraints(), $n((h) => {
      const g = this.getAxisMotionValue(h);
      if (!lu(h, i, null) || !g.get())
        return;
      const { min: p, max: v } = this.constraints[h];
      g.set(Je(p, v, u[h]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Aj.set(this.visualElement, this);
    const i = this.visualElement.current, o = ul(i, "pointerdown", (p) => {
      const { drag: v, dragListener: m = !0 } = this.getProps(), x = p.target, T = x !== i && gN(x);
      v && m && !T && this.start(p);
    });
    let s;
    const l = () => {
      const { dragConstraints: p } = this.getProps();
      Os(p) && p.current && (this.constraints = this.resolveRefConstraints(), s || (s = Dj(i, p.current, () => this.scalePositionWithinConstraints())));
    }, { projection: u } = this.visualElement, d = u.addEventListener("measure", l);
    u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()), Ze.read(l);
    const h = yl(window, "resize", () => this.scalePositionWithinConstraints()), g = u.addEventListener("didUpdate", (({ delta: p, hasLayoutChanged: v }) => {
      this.isDragging && v && ($n((m) => {
        const x = this.getAxisMotionValue(m);
        x && (this.originPoint[m] += p[m].translate, x.set(x.get() + p[m].translate));
      }), this.visualElement.render());
    }));
    return () => {
      h(), o(), d(), g && g(), s && s();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: s = !1, dragPropagation: l = !1, dragConstraints: u = !1, dragElastic: d = sp, dragMomentum: h = !0 } = i;
    return {
      ...i,
      drag: o,
      dragDirectionLock: s,
      dragPropagation: l,
      dragConstraints: u,
      dragElastic: d,
      dragMomentum: h
    };
  }
}
function GS(n) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    n();
  };
}
function Dj(n, i, o) {
  const s = tS(n, GS(o)), l = tS(i, GS(o));
  return () => {
    s(), l();
  };
}
function lu(n, i, o) {
  return (i === !0 || i === n) && (o === null || o === n);
}
function Oj(n, i = 10) {
  let o = null;
  return Math.abs(n.y) > i ? o = "y" : Math.abs(n.x) > i && (o = "x"), o;
}
class Mj extends Pa {
  constructor(i) {
    super(i), this.removeGroupControls = Jn, this.removeListeners = Jn, this.controls = new Rj(i);
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
const xm = (n) => (i, o) => {
  n && Ze.update(() => n(i, o), !1, !0);
};
class Nj extends Pa {
  constructor() {
    super(...arguments), this.removePointerDownListener = Jn;
  }
  onPointerDown(i) {
    this.session = new AT(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: CT(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: o, onPan: s, onPanEnd: l } = this.node.getProps();
    return {
      onSessionStart: xm(i),
      onStart: xm(o),
      onMove: xm(s),
      onEnd: (u, d) => {
        delete this.session, l && Ze.postRender(() => l(u, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ul(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Sm = !1;
class _j extends S.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: i, layoutGroup: o, switchLayoutGroup: s, layoutId: l } = this.props, { projection: u } = i;
    u && (o.group && o.group.add(u), s && s.register && l && s.register(u), Sm && u.root.didUpdate(), u.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), u.setOptions({
      ...u.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Mu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: o, visualElement: s, drag: l, isPresent: u } = this.props, { projection: d } = s;
    return d && (d.isPresent = u, i.layoutDependency !== o && d.setOptions({
      ...d.options,
      layoutDependency: o
    }), Sm = !0, l || i.layoutDependency !== o || o === void 0 || i.isPresent !== u ? d.willUpdate() : this.safeToRemove(), i.isPresent !== u && (u ? d.promote() : d.relegate() || Ze.postRender(() => {
      const h = d.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: i, layoutAnchor: o } = this.props, { projection: s } = i;
    s && (s.options.layoutAnchor = o, s.root.didUpdate(), ig.postRender(() => {
      !s.currentAnimation && s.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: o, switchLayoutGroup: s } = this.props, { projection: l } = i;
    Sm = !0, l && (l.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(l), s && s.deregister && s.deregister(l));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function DT(n) {
  const [i, o] = gT(), s = S.useContext(jp);
  return y.jsx(_j, { ...n, layoutGroup: s, switchLayoutGroup: S.useContext(TT), isPresent: i, safeToRemove: o });
}
const jj = {
  pan: {
    Feature: Nj
  },
  drag: {
    Feature: Mj,
    ProjectionNode: pT,
    MeasureLayout: DT
  }
};
function YS(n, i, o) {
  const { props: s } = n;
  n.animationState && s.whileHover && n.animationState.setActive("whileHover", o === "Start");
  const l = "onHover" + o, u = s[l];
  u && Ze.postRender(() => u(i, rf(i)));
}
class zj extends Pa {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = dN(i, (o, s) => (YS(this.node, s, "Start"), (l) => YS(this.node, l, "End"))));
  }
  unmount() {
  }
}
class Lj extends Pa {
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
    this.unmount = Cl(yl(this.node.current, "focus", () => this.onFocus()), yl(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function FS(n, i, o) {
  const { props: s } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled)
    return;
  n.animationState && s.whileTap && n.animationState.setActive("whileTap", o === "Start");
  const l = "onTap" + (o === "End" ? "" : o), u = s[l];
  u && Ze.postRender(() => u(i, rf(i)));
}
class Vj extends Pa {
  mount() {
    const { current: i } = this.node;
    if (!i)
      return;
    const { globalTapTarget: o, propagate: s } = this.node.props;
    this.unmount = yN(i, (l, u) => (FS(this.node, u, "Start"), (d, { success: h }) => FS(this.node, d, h ? "End" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: s?.tap === !1
    });
  }
  unmount() {
  }
}
const rp = /* @__PURE__ */ new WeakMap(), wm = /* @__PURE__ */ new WeakMap(), Pj = (n) => {
  const i = rp.get(n.target);
  i && i(n);
}, kj = (n) => {
  n.forEach(Pj);
};
function Bj({ root: n, ...i }) {
  const o = n || document;
  wm.has(o) || wm.set(o, {});
  const s = wm.get(o), l = JSON.stringify(i);
  return s[l] || (s[l] = new IntersectionObserver(kj, { root: n, ...i })), s[l];
}
function Uj(n, i, o) {
  const s = Bj(i);
  return rp.set(n, o), s.observe(n), () => {
    rp.delete(n), s.unobserve(n);
  };
}
const Hj = {
  some: 0,
  all: 1
};
class Ij extends Pa {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: i = {} } = this.node.getProps(), { root: o, margin: s, amount: l = "some", once: u } = i, d = {
      root: o ? o.current : void 0,
      rootMargin: s,
      threshold: typeof l == "number" ? l : Hj[l]
    }, h = (g) => {
      const { isIntersecting: p } = g;
      if (this.isInView === p || (this.isInView = p, u && !p && this.hasEnteredView))
        return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const { onViewportEnter: v, onViewportLeave: m } = this.node.getProps(), x = p ? v : m;
      x && x(g);
    };
    this.stopObserver = Uj(this.node.current, d, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(qj(i, o)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function qj({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (o) => n[o] !== i[o];
}
const Gj = {
  inView: {
    Feature: Ij
  },
  tap: {
    Feature: Vj
  },
  focus: {
    Feature: Lj
  },
  hover: {
    Feature: zj
  }
}, Yj = {
  layout: {
    ProjectionNode: pT,
    MeasureLayout: DT
  }
}, Fj = {
  ...pj,
  ...Gj,
  ...jj,
  ...Yj
}, Xj = /* @__PURE__ */ uj(Fj, fj);
function OT(n) {
  const i = Gs(() => za(n)), { isStatic: o } = S.useContext(Eo);
  if (o) {
    const [, s] = S.useState(n);
    S.useEffect(() => i.on("change", s), []);
  }
  return i;
}
function MT(n, i) {
  const o = OT(i()), s = () => o.set(i());
  return s(), ks(() => {
    const l = () => Ze.preRender(s, !1, !0), u = n.map((d) => d.on("change", l));
    return () => {
      u.forEach((d) => d()), Si(s);
    };
  }), o;
}
function Kj(n) {
  ll.current = [], n();
  const i = MT(ll.current, n);
  return ll.current = void 0, i;
}
function NT(n, i, o, s) {
  if (typeof n == "function")
    return Kj(n);
  const u = typeof i == "function" ? i : DN(i, o, s), d = Array.isArray(n) ? XS(n, u) : XS([n], ([g]) => u(g)), h = Array.isArray(n) ? void 0 : n.accelerate;
  return h && !h.isTransformed && typeof i != "function" && Array.isArray(o) && s?.clamp !== !1 && (d.accelerate = {
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
function XS(n, i) {
  const o = Gs(() => []);
  return MT(n, () => {
    o.length = 0;
    const s = n.length;
    for (let l = 0; l < s; l++)
      o[l] = n[l].get();
    return i(o);
  });
}
function Zj(n, i, o) {
  const { isStatic: s } = S.useContext(Eo), l = () => Dt(n) ? n.get() : n;
  if (s)
    return NT(l);
  const u = OT(l());
  return S.useInsertionEffect(() => o(u, n, i), [u, JSON.stringify(i)]), u;
}
function $j(n, i = {}) {
  return Zj(n, i, NN);
}
function Qj() {
  !sg.current && Jw();
  const [n] = S.useState(Iu.current);
  return n;
}
const ka = Xj;
var Do = G1();
const Jj = /* @__PURE__ */ q1(Do);
function Wj(n) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", i.appendChild(o), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n));
}
const e3 = (n) => {
  switch (n) {
    case "success":
      return i3;
    case "info":
      return o3;
    case "warning":
      return a3;
    case "error":
      return s3;
    default:
      return null;
  }
}, t3 = Array(12).fill(0), n3 = ({ visible: n, className: i }) => /* @__PURE__ */ oe.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    i
  ].filter(Boolean).join(" "),
  "data-visible": n
}, /* @__PURE__ */ oe.createElement("div", {
  className: "sonner-spinner"
}, t3.map((o, s) => /* @__PURE__ */ oe.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${s}`
})))), i3 = /* @__PURE__ */ oe.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ oe.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), a3 = /* @__PURE__ */ oe.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ oe.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), o3 = /* @__PURE__ */ oe.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ oe.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), s3 = /* @__PURE__ */ oe.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20",
  "aria-hidden": "true"
}, /* @__PURE__ */ oe.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), r3 = /* @__PURE__ */ oe.createElement("svg", {
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
}, /* @__PURE__ */ oe.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ oe.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), l3 = () => {
  const [n, i] = oe.useState(document.hidden);
  return oe.useEffect(() => {
    const o = () => {
      i(document.hidden);
    };
    return document.addEventListener("visibilitychange", o), () => document.removeEventListener("visibilitychange", o);
  }, []), n;
};
let c3 = 1;
const u3 = 100, KS = (n) => {
  var i;
  return typeof n?.id == "number" || (n == null || (i = n.id) == null ? void 0 : i.length) > 0 ? n.id : c3++;
};
class f3 {
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
      let i = this.toasts.length - u3;
      i <= 0 || (this.toasts = this.toasts.filter((o) => i > 0 && this.dismissedToasts.has(o.id) ? (this.dismissedToasts.delete(o.id), i--, !1) : !0));
    }, this.create = (i) => {
      const { message: o, ...s } = i, l = KS(i), u = this.pendingDismissals.get(l);
      u !== void 0 && (cancelAnimationFrame(u), this.pendingDismissals.delete(l), this.dismissedToasts.delete(l));
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
        ...s,
        dismissible: h,
        id: l
      }), l;
    }, this.dismiss = (i) => {
      if (i == null)
        return this.getActiveToasts().forEach((s) => {
          this.dismissedToasts.add(s.id), this.subscribers.forEach((l) => l({
            id: s.id,
            dismiss: !0
          }));
        }), i;
      this.dismissedToasts.add(i);
      const o = this.pendingDismissals.get(i);
      return o !== void 0 && cancelAnimationFrame(o), this.pendingDismissals.set(i, requestAnimationFrame(() => {
        this.pendingDismissals.delete(i), this.subscribers.forEach((s) => s({
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
      let s;
      o.loading !== void 0 && (s = this.create({
        ...o,
        promise: i,
        type: "loading",
        message: o.loading,
        description: typeof o.description != "function" ? o.description : void 0
      }));
      const l = Promise.resolve(i instanceof Function ? i() : i);
      let u = s !== void 0, d;
      const h = l.then(async (p) => {
        if (d = [
          "resolve",
          p
        ], oe.isValidElement(p))
          u = !1, this.create({
            id: s,
            type: "default",
            message: p
          });
        else if (h3(p) && !p.ok) {
          u = !1;
          const m = typeof o.error == "function" ? await o.error(`HTTP error! status: ${p.status}`) : o.error, x = typeof o.description == "function" ? await o.description(`HTTP error! status: ${p.status}`) : o.description, w = typeof m == "object" && !oe.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: s,
            type: "error",
            description: x,
            ...w
          });
        } else if (p instanceof Error) {
          u = !1;
          const m = typeof o.error == "function" ? await o.error(p) : o.error, x = typeof o.description == "function" ? await o.description(p) : o.description, w = typeof m == "object" && !oe.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: s,
            type: "error",
            description: x,
            ...w
          });
        } else if (o.success !== void 0) {
          u = !1;
          const m = typeof o.success == "function" ? await o.success(p) : o.success, x = typeof o.description == "function" ? await o.description(p) : o.description, w = typeof m == "object" && !oe.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: s,
            type: "success",
            description: x,
            ...w
          });
        }
      }).catch(async (p) => {
        if (d = [
          "reject",
          p
        ], o.error !== void 0) {
          u = !1;
          const v = typeof o.error == "function" ? await o.error(p) : o.error, m = typeof o.description == "function" ? await o.description(p) : o.description, T = typeof v == "object" && !oe.isValidElement(v) ? v : {
            message: v
          };
          this.create({
            id: s,
            type: "error",
            description: m,
            ...T
          });
        }
      }).finally(() => {
        u && (this.dismiss(s), s = void 0), o.finally == null || o.finally.call(o);
      }), g = () => new Promise((p, v) => h.then(() => d[0] === "reject" ? v(d[1]) : p(d[1])).catch(v));
      return typeof s != "string" && typeof s != "number" ? {
        unwrap: g
      } : Object.assign(s, {
        unwrap: g
      });
    }, this.custom = (i, o) => {
      const s = KS(o);
      return this.create({
        ...o,
        jsx: i(s),
        id: s,
        type: void 0
      }), s;
    }, this.getActiveToasts = () => this.toasts.filter((i) => !this.dismissedToasts.has(i.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set(), this.pendingDismissals = /* @__PURE__ */ new Map();
  }
}
const un = new f3(), d3 = (n, i) => un.message(n, i), h3 = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", m3 = d3, p3 = () => un.toasts, g3 = () => un.getActiveToasts(), Gi = Object.assign(m3, {
  success: un.success,
  info: un.info,
  warning: un.warning,
  error: un.error,
  custom: un.custom,
  message: un.message,
  promise: un.promise,
  dismiss: un.dismiss,
  loading: un.loading
}, {
  getHistory: p3,
  getToasts: g3
});
Wj("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function cu(n) {
  return n.label !== void 0;
}
const v3 = 3, y3 = "24px", b3 = "16px", ZS = 4e3, x3 = 356, S3 = 14, w3 = 45, T3 = 200;
function pi(...n) {
  return n.filter(Boolean).join(" ");
}
function E3(n) {
  const [i, o] = n.split("-"), s = [];
  return i && s.push(i), o && s.push(o), s;
}
const C3 = (n) => {
  var i, o, s, l, u, d, h, g, p;
  const { invert: v, toast: m, unstyled: x, interacting: T, setHeights: w, visibleToasts: A, heights: C, index: R, toasts: _, expanded: D, removeToast: M, defaultRichColors: B, closeButton: U, style: O, cancelButtonStyle: N, actionButtonStyle: F, className: Q = "", descriptionClassName: ue = "", duration: ie, position: te, gap: fe, expandByDefault: he, classNames: G, icons: X, closeButtonAriaLabel: J = "Close toast" } = n, [se, $] = oe.useState(null), [Me, Re] = oe.useState(null), [He, z] = oe.useState(!1), [Y, W] = oe.useState(!1), [le, ae] = oe.useState(!1), [ee, ye] = oe.useState(!1), [ne, re] = oe.useState(!1), [Ae, st] = oe.useState(0), [ft, Pt] = oe.useState(0), We = oe.useRef(m.duration || ie || ZS), Pe = oe.useRef(null), ht = oe.useRef(null), Ia = R === 0, ni = R + 1 <= A, mt = m.type, qa = mt ?? "default", hn = m.dismissible !== !1, er = m.className || "", jo = m.descriptionClassName || "", aa = oe.useMemo(() => C.findIndex((we) => we.toastId === m.id) || 0, [
    C,
    m.id
  ]), Nl = oe.useMemo(() => {
    var we;
    return (we = m.closeButton) != null ? we : U;
  }, [
    m.closeButton,
    U
  ]), Bn = oe.useMemo(() => m.duration || ie || ZS, [
    m.duration,
    ie
  ]), Ga = oe.useRef(0), ii = oe.useRef(0), _l = oe.useRef(0), Ci = oe.useRef(null), [tr, nr] = te.split("-"), zo = oe.useMemo(() => C.reduce((we, pt, rt) => rt >= aa ? we : we + pt.height, 0), [
    C,
    aa
  ]), jl = l3(), En = oe.useMemo(() => {
    var we;
    return (we = n.swipeDirections) != null ? we : E3(te);
  }, [
    n.swipeDirections,
    te
  ]), Kt = m.invert || v, ir = mt === "loading";
  ii.current = oe.useMemo(() => aa * fe + zo, [
    aa,
    zo
  ]), oe.useEffect(() => {
    We.current = Bn;
  }, [
    Bn
  ]), oe.useEffect(() => {
    z(!0);
  }, []), oe.useEffect(() => {
    const we = ht.current;
    if (we) {
      const pt = we.getBoundingClientRect().height;
      return Pt(pt), w((rt) => [
        {
          toastId: m.id,
          height: pt,
          position: m.position
        },
        ...rt
      ]), () => w((rt) => rt.filter(($e) => $e.toastId !== m.id));
    }
  }, [
    w,
    m.id
  ]), oe.useLayoutEffect(() => {
    if (!He) return;
    const we = ht.current, pt = we.style.height;
    we.style.height = "auto";
    const rt = we.getBoundingClientRect().height;
    we.style.height = pt, Pt(rt), w(($e) => $e.find((Ie) => Ie.toastId === m.id) ? $e.map((Ie) => Ie.toastId === m.id ? {
      ...Ie,
      height: rt
    } : Ie) : [
      {
        toastId: m.id,
        height: rt,
        position: m.position
      },
      ...$e
    ]);
  }, [
    He,
    m.title,
    m.description,
    w,
    m.id,
    m.jsx,
    m.action,
    m.cancel
  ]);
  const Un = oe.useCallback(() => {
    W(!0), st(ii.current), w((we) => we.filter((pt) => pt.toastId !== m.id)), setTimeout(() => {
      M(m);
    }, T3);
  }, [
    m,
    M,
    w,
    ii
  ]);
  oe.useEffect(() => {
    if (m.promise && mt === "loading" || m.duration === 1 / 0 || m.type === "loading") return;
    let we;
    return D || T || jl ? (() => {
      if (_l.current < Ga.current) {
        const $e = (/* @__PURE__ */ new Date()).getTime() - Ga.current;
        We.current = We.current - $e;
      }
      _l.current = (/* @__PURE__ */ new Date()).getTime();
    })() : We.current !== 1 / 0 && (Ga.current = (/* @__PURE__ */ new Date()).getTime(), we = setTimeout(() => {
      m.onAutoClose == null || m.onAutoClose.call(m, m), Un();
    }, We.current)), () => clearTimeout(we);
  }, [
    D,
    T,
    m,
    mt,
    jl,
    Un
  ]), oe.useEffect(() => {
    m.delete && (Un(), m.onDismiss == null || m.onDismiss.call(m, m));
  }, [
    Un,
    m.delete
  ]);
  function ar() {
    var we;
    if (X?.loading) {
      var pt;
      return /* @__PURE__ */ oe.createElement("div", {
        className: pi(G?.loader, m == null || (pt = m.classNames) == null ? void 0 : pt.loader, "sonner-loader"),
        "data-visible": mt === "loading"
      }, X.loading);
    }
    return /* @__PURE__ */ oe.createElement(n3, {
      className: pi(G?.loader, m == null || (we = m.classNames) == null ? void 0 : we.loader),
      visible: mt === "loading"
    });
  }
  const Lo = m.icon || X?.[mt] || e3(mt);
  var zl, or;
  return /* @__PURE__ */ oe.createElement("li", {
    tabIndex: 0,
    ref: ht,
    className: pi(Q, er, G?.toast, m == null || (i = m.classNames) == null ? void 0 : i.toast, G?.[qa], m == null || (o = m.classNames) == null ? void 0 : o[qa]),
    "data-sonner-toast": "",
    "data-rich-colors": (zl = m.richColors) != null ? zl : B,
    "data-styled": !(m.jsx || m.unstyled || x),
    "data-mounted": He,
    "data-promise": !!m.promise,
    "data-swiped": ne,
    "data-removed": Y,
    "data-visible": ni,
    "data-y-position": tr,
    "data-x-position": nr,
    "data-index": R,
    "data-front": Ia,
    "data-swiping": le,
    "data-dismissible": hn,
    "data-type": mt,
    "data-invert": Kt,
    "data-swipe-out": ee,
    "data-swipe-direction": Me,
    "data-expanded": !!(D || he && He),
    "data-testid": m.testId,
    style: {
      "--index": R,
      "--toasts-before": R,
      "--z-index": _.length - R,
      "--offset": `${Y ? Ae : ii.current}px`,
      "--initial-height": he ? "auto" : `${ft}px`,
      ...O,
      ...m.style
    },
    onDragEnd: () => {
      ae(!1), $(null), Ci.current = null;
    },
    onPointerDown: (we) => {
      we.button !== 2 && (ir || !hn || (Pe.current = /* @__PURE__ */ new Date(), st(ii.current), we.target.setPointerCapture(we.pointerId), we.target.tagName !== "BUTTON" && (ae(!0), Ci.current = {
        x: we.clientX,
        y: we.clientY
      })));
    },
    onPointerUp: () => {
      var we, pt, rt;
      if (ee || !hn) return;
      Ci.current = null;
      const $e = Number(((we = ht.current) == null ? void 0 : we.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), tn = Number(((pt = ht.current) == null ? void 0 : pt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ie = (/* @__PURE__ */ new Date()).getTime() - ((rt = Pe.current) == null ? void 0 : rt.getTime()), nn = se === "x" ? $e : tn, Cn = Math.abs(nn) / Ie;
      if ((se === "x" ? En.includes($e > 0 ? "right" : "left") : En.includes(tn > 0 ? "bottom" : "top")) && (Math.abs(nn) >= w3 || Cn > 0.11)) {
        st(ii.current), m.onDismiss == null || m.onDismiss.call(m, m), Re(se === "x" ? $e > 0 ? "right" : "left" : tn > 0 ? "down" : "up"), Un(), ye(!0);
        return;
      } else {
        var Zt, oa;
        (Zt = ht.current) == null || Zt.style.setProperty("--swipe-amount-x", "0px"), (oa = ht.current) == null || oa.style.setProperty("--swipe-amount-y", "0px");
      }
      re(!1), ae(!1), $(null);
    },
    onPointerMove: (we) => {
      var pt, rt, $e;
      if (!Ci.current || !hn || ((pt = window.getSelection()) == null ? void 0 : pt.toString().length) > 0) return;
      const Ie = we.clientY - Ci.current.y, nn = we.clientX - Ci.current.x;
      !se && (Math.abs(nn) > 1 || Math.abs(Ie) > 1) && $(Math.abs(nn) > Math.abs(Ie) ? "x" : "y");
      let Cn = {
        x: 0,
        y: 0
      };
      const sr = (Zt) => 1 / (1.5 + Math.abs(Zt) / 20);
      if (se === "y") {
        if (En.includes("top") || En.includes("bottom"))
          if (En.includes("top") && Ie < 0 || En.includes("bottom") && Ie > 0)
            Cn.y = Ie;
          else {
            const Zt = Ie * sr(Ie);
            Cn.y = Math.abs(Zt) < Math.abs(Ie) ? Zt : Ie;
          }
      } else if (se === "x" && (En.includes("left") || En.includes("right")))
        if (En.includes("left") && nn < 0 || En.includes("right") && nn > 0)
          Cn.x = nn;
        else {
          const Zt = nn * sr(nn);
          Cn.x = Math.abs(Zt) < Math.abs(nn) ? Zt : nn;
        }
      (Math.abs(Cn.x) > 0 || Math.abs(Cn.y) > 0) && re(!0), (rt = ht.current) == null || rt.style.setProperty("--swipe-amount-x", `${Cn.x}px`), ($e = ht.current) == null || $e.style.setProperty("--swipe-amount-y", `${Cn.y}px`);
    }
  }, Nl && !m.jsx && mt !== "loading" ? /* @__PURE__ */ oe.createElement("button", {
    "aria-label": J,
    "data-disabled": ir,
    "data-close-button": !0,
    onClick: ir || !hn ? () => {
    } : () => {
      Un(), m.onDismiss == null || m.onDismiss.call(m, m);
    },
    className: pi(G?.closeButton, m == null || (s = m.classNames) == null ? void 0 : s.closeButton)
  }, (or = X?.close) != null ? or : r3) : null, (mt || m.icon || m.promise) && m.icon !== null && (X?.[mt] !== null || m.icon) ? /* @__PURE__ */ oe.createElement("div", {
    "data-icon": "",
    className: pi(G?.icon, m == null || (l = m.classNames) == null ? void 0 : l.icon)
  }, mt === "loading" ? m.icon || ar() : m.promise ? ar() : null, mt !== "loading" ? Lo : null) : null, /* @__PURE__ */ oe.createElement("div", {
    "data-content": "",
    className: pi(G?.content, m == null || (u = m.classNames) == null ? void 0 : u.content)
  }, /* @__PURE__ */ oe.createElement("div", {
    "data-title": "",
    className: pi(G?.title, m == null || (d = m.classNames) == null ? void 0 : d.title)
  }, m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title), m.description ? /* @__PURE__ */ oe.createElement("div", {
    "data-description": "",
    className: pi(ue, jo, G?.description, m == null || (h = m.classNames) == null ? void 0 : h.description)
  }, typeof m.description == "function" ? m.description() : m.description) : null), /* @__PURE__ */ oe.isValidElement(m.cancel) ? m.cancel : m.cancel && cu(m.cancel) ? /* @__PURE__ */ oe.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: m.cancelButtonStyle || N,
    onClick: (we) => {
      cu(m.cancel) && hn && (m.cancel.onClick == null || m.cancel.onClick.call(m.cancel, we), Un());
    },
    className: pi(G?.cancelButton, m == null || (g = m.classNames) == null ? void 0 : g.cancelButton)
  }, m.cancel.label) : null, /* @__PURE__ */ oe.isValidElement(m.action) ? m.action : m.action && cu(m.action) ? /* @__PURE__ */ oe.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: m.actionButtonStyle || F,
    onClick: (we) => {
      cu(m.action) && (m.action.onClick == null || m.action.onClick.call(m.action, we), !we.defaultPrevented && Un());
    },
    className: pi(G?.actionButton, m == null || (p = m.classNames) == null ? void 0 : p.actionButton)
  }, m.action.label) : null);
};
function $S() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function A3(n, i) {
  const o = {};
  return [
    n,
    i
  ].forEach((s, l) => {
    const u = l === 1, d = u ? "--mobile-offset" : "--offset", h = u ? b3 : y3;
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
    typeof s == "number" || typeof s == "string" ? g(s) : typeof s == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((p) => {
      s[p] === void 0 ? o[`${d}-${p}`] = h : o[`${d}-${p}`] = typeof s[p] == "number" ? `${s[p]}px` : s[p];
    }) : g(h);
  }), o;
}
const R3 = /* @__PURE__ */ oe.forwardRef(function(i, o) {
  const { id: s, invert: l, position: u = "bottom-right", hotkey: d = [
    "altKey",
    "KeyT"
  ], expand: h, closeButton: g, className: p, offset: v, mobileOffset: m, theme: x = "light", richColors: T, duration: w, style: A, visibleToasts: C = v3, toastOptions: R, dir: _ = $S(), gap: D = S3, icons: M, customAriaLabel: B, containerAriaLabel: U = "Notifications" } = i, [O, N] = oe.useState([]), F = oe.useMemo(() => s ? O.filter((z) => z.toasterId === s) : O.filter((z) => !z.toasterId), [
    O,
    s
  ]), Q = oe.useMemo(() => Array.from(new Set([
    u
  ].concat(F.filter((z) => z.position).map((z) => z.position)))), [
    F,
    u
  ]), [ue, ie] = oe.useState([]), [te, fe] = oe.useState(!1), [he, G] = oe.useState(!1), [X, J] = oe.useState(x !== "system" ? x : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), se = oe.useRef(null), $ = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Me = oe.useRef(null), Re = oe.useRef(!1), He = oe.useCallback((z) => {
    N((Y) => {
      var W;
      return (W = Y.find((le) => le.id === z.id)) != null && W.delete || un.dismiss(z.id), Y.filter(({ id: le }) => le !== z.id);
    });
  }, []);
  return oe.useEffect(() => un.subscribe((z) => {
    if (z.dismiss) {
      requestAnimationFrame(() => {
        N((Y) => Y.map((W) => W.id === z.id ? {
          ...W,
          delete: !0
        } : W));
      });
      return;
    }
    setTimeout(() => {
      Jj.flushSync(() => {
        N((Y) => {
          const W = Y.findIndex((le) => le.id === z.id);
          return W !== -1 ? [
            ...Y.slice(0, W),
            {
              ...Y[W],
              ...z
            },
            ...Y.slice(W + 1)
          ] : [
            z,
            ...Y
          ];
        });
      });
    });
  }), []), oe.useEffect(() => {
    if (x !== "system") {
      J(x);
      return;
    }
    if (x === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? J("dark") : J("light")), typeof window > "u") return;
    const z = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      z.addEventListener("change", ({ matches: Y }) => {
        J(Y ? "dark" : "light");
      });
    } catch {
      z.addListener(({ matches: W }) => {
        try {
          J(W ? "dark" : "light");
        } catch (le) {
          console.error(le);
        }
      });
    }
  }, [
    x
  ]), oe.useEffect(() => {
    O.length <= 1 && fe(!1);
  }, [
    O
  ]), oe.useEffect(() => {
    const z = (Y) => {
      var W;
      if (d.length > 0 && d.every((ee) => Y[ee] || Y.code === ee)) {
        var ae;
        fe(!0), (ae = se.current) == null || ae.focus();
      }
      Y.code === "Escape" && (document.activeElement === se.current || (W = se.current) != null && W.contains(document.activeElement)) && fe(!1);
    };
    return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z);
  }, [
    d
  ]), oe.useEffect(() => {
    if (se.current)
      return () => {
        Me.current && (Me.current.focus({
          preventScroll: !0
        }), Me.current = null, Re.current = !1);
      };
  }, [
    se.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ oe.createElement("section", {
    ref: o,
    "aria-label": B ?? `${U} ${$}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0,
    "data-react-aria-top-layer": !0
  }, Q.map((z, Y) => {
    var W;
    const [le, ae] = z.split("-");
    return F.length ? /* @__PURE__ */ oe.createElement("ol", {
      key: z,
      dir: _ === "auto" ? $S() : _,
      tabIndex: -1,
      ref: se,
      className: p,
      "data-sonner-toaster": !0,
      "data-sonner-theme": X,
      "data-y-position": le,
      "data-x-position": ae,
      style: {
        "--front-toast-height": `${((W = ue[0]) == null ? void 0 : W.height) || 0}px`,
        "--width": `${x3}px`,
        "--gap": `${D}px`,
        ...A,
        ...A3(v, m)
      },
      onBlur: (ee) => {
        Re.current && !ee.currentTarget.contains(ee.relatedTarget) && (Re.current = !1, Me.current && (Me.current.focus({
          preventScroll: !0
        }), Me.current = null));
      },
      onFocus: (ee) => {
        ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || Re.current || (Re.current = !0, Me.current = ee.relatedTarget);
      },
      onMouseEnter: () => fe(!0),
      onMouseMove: () => fe(!0),
      onMouseLeave: () => {
        he || fe(!1);
      },
      onDragEnd: () => fe(!1),
      onPointerDown: (ee) => {
        ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || G(!0);
      },
      onPointerUp: () => G(!1)
    }, F.filter((ee) => !ee.position && Y === 0 || ee.position === z).map((ee, ye) => {
      var ne, re;
      return /* @__PURE__ */ oe.createElement(C3, {
        key: ee.id,
        icons: M,
        index: ye,
        toast: ee,
        defaultRichColors: T,
        duration: (ne = R?.duration) != null ? ne : w,
        className: R?.className,
        descriptionClassName: R?.descriptionClassName,
        invert: l,
        visibleToasts: C,
        closeButton: (re = R?.closeButton) != null ? re : g,
        interacting: he,
        position: z,
        style: R?.style,
        unstyled: R?.unstyled,
        classNames: R?.classNames,
        cancelButtonStyle: R?.cancelButtonStyle,
        actionButtonStyle: R?.actionButtonStyle,
        closeButtonAriaLabel: R?.closeButtonAriaLabel,
        removeToast: He,
        toasts: F.filter((Ae) => Ae.position == ee.position),
        heights: ue.filter((Ae) => Ae.position == ee.position),
        setHeights: ie,
        expandByDefault: h,
        gap: D,
        expanded: te,
        swipeDirections: i.swipeDirections
      });
    })) : null;
  }));
});
const D3 = (n) => n?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function O3(n, i, o = []) {
  if (i == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: D3(n),
    size: 24,
    node: i,
    ...o.length > 0 ? { aliases: o } : {}
  };
}
const M3 = (n) => {
  let i = "", o = !1;
  for (const s of n) {
    if (s === "-" || s === "_" || s <= " ") {
      o = i.length > 0;
      continue;
    }
    i.length === 0 ? i += s.toLowerCase() : i += o ? s.toUpperCase() : s, o = !1;
  }
  return i;
};
const N3 = (n) => {
  const i = M3(n);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
const lp = (...n) => n.filter((i, o, s) => !!i && i.trim() !== "" && s.indexOf(i) === o).join(" ").trim();
const po = {
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
function Tm(n) {
  return n != null;
}
function _3(n, i = {}) {
  const o = i.attributeNames ?? {}, s = (x) => o[x] ?? x, l = n.size ?? n.width ?? po.width, u = n.size ?? n.height ?? po.height, d = n.aliases?.filter((x) => typeof x == "string" && x.trim() !== "").map((x) => `lucide-${x}`) ?? [], h = [...n.name ? [`lucide-${n.name}`] : [], ...d], g = i.className?.split(" ").filter(Boolean) ?? [], p = i.includeDefaultClasses === !1 ? lp(...g) : lp("lucide", ...h, ...g), v = i.absoluteStrokeWidth ? Number(i.strokeWidth ?? po["stroke-width"]) * Number(n.size ?? n.width ?? po.width) / Number(i.size ?? i.width ?? po.width) : i.strokeWidth ?? po["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(po).reduce((x, [T, w]) => (x[s(T)] = w, x), {}),
      ..."color" in i && i.color && {
        [s("stroke")]: i.color
      },
      ..."size" in i && Tm(i.size) && {
        [s("width")]: i.size,
        [s("height")]: i.size
      },
      ..."width" in i && Tm(i.width) && {
        [s("width")]: i.width
      },
      ..."height" in i && Tm(i.height) && {
        [s("height")]: i.height
      },
      [s("stroke-width")]: v,
      ...p && {
        [s("class")]: p
      },
      [s("viewBox")]: `0 0 ${l} ${u}`,
      ...i.hasA11yProp === !1 ? {
        [s("aria-hidden")]: "true"
      } : {},
      ..."attributes" in i && i.attributes
    },
    n.node.map((x) => {
      const [T, w, A] = x, C = i.nonScalingStroke ? { [s("vector-effect")]: "non-scaling-stroke", ...w } : w;
      return A ? [T, C, A] : [T, C];
    })
  ];
}
function j3(n, i = {}) {
  return _3(n, {
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
const z3 = (n) => {
  for (const i in n)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
}, L3 = S.createContext({}), V3 = () => S.useContext(L3), P3 = S.forwardRef(
  ({
    color: n,
    size: i,
    width: o,
    height: s,
    strokeWidth: l,
    absoluteStrokeWidth: u,
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
  }, x) => {
    const {
      size: T = 24,
      strokeWidth: w = 2,
      absoluteStrokeWidth: A = !1,
      nonScalingStroke: C = !1,
      color: R = "currentColor",
      className: _ = ""
    } = V3() ?? {}, D = !!g || z3(m), [M, B, U = []] = j3(v, {
      color: n ?? R,
      width: o ?? i ?? T,
      height: s ?? i ?? T,
      strokeWidth: l ?? w,
      absoluteStrokeWidth: u ?? A,
      nonScalingStroke: d ?? C,
      className: lp(_, h),
      hasA11yProp: D,
      attributes: m
    });
    return S.createElement(
      M,
      {
        ref: x,
        ...B
      },
      [
        ...U.map(([O, N]) => S.createElement(O, N)),
        ...Array.isArray(g) ? g : [g]
      ]
    );
  }
);
function at(n, i = [], o = []) {
  const s = typeof n == "string" ? O3(n, i, o) : n, l = S.forwardRef(
    ({ className: u, ...d }, h) => S.createElement(P3, {
      ref: h,
      icon: s,
      className: u,
      ...d
    })
  );
  return s.name && (l.displayName = N3(s.name)), l;
}
const _T = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
_T.node;
const k3 = at(_T);
const jT = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
jT.node;
const B3 = at(jT);
const zT = {
  name: "ban",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
  ]
};
zT.node;
const U3 = at(zT);
const LT = {
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
LT.node;
const fg = at(LT);
const VT = {
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
VT.node;
const H3 = at(VT);
const PT = {
  name: "chart-no-axes-combined",
  size: 24,
  node: [
    ["path", { d: "M12 16v5", key: "zza2cw" }],
    ["path", { d: "M16 14.639V21", key: "1s85h0" }],
    ["path", { d: "M20 10.656V21", key: "q45596" }],
    [
      "path",
      {
        d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",
        key: "1fw8x9"
      }
    ],
    ["path", { d: "M4 18.463V21", key: "1otddq" }],
    ["path", { d: "M8 14.656V21", key: "1t2idw" }]
  ]
};
PT.node;
const I3 = at(PT);
const kT = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
kT.node;
const dg = at(kT);
const BT = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
BT.node;
const UT = at(BT);
const HT = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
};
HT.node;
const q3 = at(HT);
const IT = {
  name: "clock-3",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6h4", key: "135r8i" }]
  ]
};
IT.node;
const G3 = at(IT);
const qT = {
  name: "cloud",
  size: 24,
  node: [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]
};
qT.node;
const Y3 = at(qT);
const GT = {
  name: "external-link",
  size: 24,
  node: [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
  ]
};
GT.node;
const Bs = at(GT);
const YT = {
  name: "file-question-mark",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
    ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }]
  ],
  aliases: ["file-question"]
};
YT.node;
const F3 = at(YT);
const FT = {
  name: "list-checks",
  size: 24,
  node: [
    ["path", { d: "M13 5h8", key: "a7qcls" }],
    ["path", { d: "M13 12h8", key: "h98zly" }],
    ["path", { d: "M13 19h8", key: "c3s6r1" }],
    ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
    ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
  ]
};
FT.node;
const cp = at(FT);
const XT = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
XT.node;
const X3 = at(XT);
const KT = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
KT.node;
const QS = at(KT);
const ZT = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
  ]
};
ZT.node;
const K3 = at(ZT);
const $T = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
$T.node;
const QT = at($T);
const JT = {
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
JT.node;
const Z3 = at(JT);
const WT = {
  name: "sparkles",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr"
      }
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
  ],
  aliases: ["stars"]
};
WT.node;
const $3 = at(WT);
const eE = {
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
eE.node;
const Q3 = at(eE);
const tE = {
  name: "user-round",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
    ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
  ],
  aliases: ["user-2"]
};
tE.node;
const nE = at(tE);
const iE = {
  name: "users",
  size: 24,
  node: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
  ]
};
iE.node;
const J3 = at(iE);
const aE = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
aE.node;
const Us = at(aE);
function oE(n) {
  var i, o, s = "";
  if (typeof n == "string" || typeof n == "number") s += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var l = n.length;
    for (i = 0; i < l; i++) n[i] && (o = oE(n[i])) && (s && (s += " "), s += o);
  } else for (o in n) n[o] && (s && (s += " "), s += o);
  return s;
}
function sE() {
  for (var n, i, o = 0, s = "", l = arguments.length; o < l; o++) (n = arguments[o]) && (i = oE(n)) && (s && (s += " "), s += i);
  return s;
}
const JS = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, WS = sE, rE = (n, i) => (o) => {
  var s;
  if (i?.variants == null) return WS(n, o?.class, o?.className);
  const { variants: l, defaultVariants: u } = i, d = Object.keys(l).map((p) => {
    const v = o?.[p], m = u?.[p];
    if (v === null) return null;
    const x = JS(v) || JS(m);
    return l[p][x];
  }), h = o && Object.entries(o).reduce((p, v) => {
    let [m, x] = v;
    return x === void 0 || (p[m] = x), p;
  }, {}), g = i == null || (s = i.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((p, v) => {
    let { class: m, className: x, ...T } = v;
    return Object.entries(T).every((w) => {
      let [A, C] = w;
      return Array.isArray(C) ? C.includes({
        ...u,
        ...h
      }[A]) : {
        ...u,
        ...h
      }[A] === C;
    }) ? [
      ...p,
      m,
      x
    ] : p;
  }, []);
  return WS(n, d, g, o?.class, o?.className);
}, W3 = (n, i) => {
  const o = new Array(n.length + i.length);
  for (let s = 0; s < n.length; s++)
    o[s] = n[s];
  for (let s = 0; s < i.length; s++)
    o[n.length + s] = i[s];
  return o;
}, ez = (n, i) => ({
  classGroupId: n,
  validator: i
}), lE = (n = /* @__PURE__ */ new Map(), i = null, o) => ({
  nextPart: n,
  validators: i,
  classGroupId: o
}), Fu = "-", e1 = [], tz = "arbitrary..", nz = (n) => {
  const i = az(n), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: s
  } = n;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return iz(d);
      const h = d.split(Fu), g = h[0] === "" && h.length > 1 ? 1 : 0;
      return cE(h, g, i);
    },
    getConflictingClassGroupIds: (d, h) => {
      if (h) {
        const g = s[d], p = o[d];
        return g ? p ? W3(p, g) : g : p || e1;
      }
      return o[d] || e1;
    }
  };
}, cE = (n, i, o) => {
  if (n.length - i === 0)
    return o.classGroupId;
  const l = n[i], u = o.nextPart.get(l);
  if (u) {
    const p = cE(n, i + 1, u);
    if (p) return p;
  }
  const d = o.validators;
  if (d === null)
    return;
  const h = i === 0 ? n.join(Fu) : n.slice(i).join(Fu), g = d.length;
  for (let p = 0; p < g; p++) {
    const v = d[p];
    if (v.validator(h))
      return v.classGroupId;
  }
}, iz = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const i = n.slice(1, -1), o = i.indexOf(":"), s = i.slice(0, o);
  return s ? tz + s : void 0;
})(), az = (n) => {
  const {
    theme: i,
    classGroups: o
  } = n;
  return oz(o, i);
}, oz = (n, i) => {
  const o = lE();
  for (const s in n) {
    const l = n[s];
    hg(l, o, s, i);
  }
  return o;
}, hg = (n, i, o, s) => {
  const l = n.length;
  for (let u = 0; u < l; u++) {
    const d = n[u];
    sz(d, i, o, s);
  }
}, sz = (n, i, o, s) => {
  if (typeof n == "string") {
    rz(n, i, o);
    return;
  }
  if (typeof n == "function") {
    lz(n, i, o, s);
    return;
  }
  cz(n, i, o, s);
}, rz = (n, i, o) => {
  const s = n === "" ? i : uE(i, n);
  s.classGroupId = o;
}, lz = (n, i, o, s) => {
  if (uz(n)) {
    hg(n(s), i, o, s);
    return;
  }
  i.validators === null && (i.validators = []), i.validators.push(ez(o, n));
}, cz = (n, i, o, s) => {
  const l = Object.entries(n), u = l.length;
  for (let d = 0; d < u; d++) {
    const [h, g] = l[d];
    hg(g, uE(i, h), o, s);
  }
}, uE = (n, i) => {
  let o = n;
  const s = i.split(Fu), l = s.length;
  for (let u = 0; u < l; u++) {
    const d = s[u];
    let h = o.nextPart.get(d);
    h || (h = lE(), o.nextPart.set(d, h)), o = h;
  }
  return o;
}, uz = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, fz = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, o = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  const l = (u, d) => {
    o[u] = d, i++, i > n && (i = 0, s = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(u) {
      let d = o[u];
      if (d !== void 0)
        return d;
      if ((d = s[u]) !== void 0)
        return l(u, d), d;
    },
    set(u, d) {
      u in o ? o[u] = d : l(u, d);
    }
  };
}, up = "!", t1 = ":", dz = [], n1 = (n, i, o, s, l) => ({
  modifiers: n,
  hasImportantModifier: i,
  baseClassName: o,
  maybePostfixModifierPosition: s,
  isExternal: l
}), hz = (n) => {
  const {
    prefix: i,
    experimentalParseClassName: o
  } = n;
  let s = (l) => {
    const u = [];
    let d = 0, h = 0, g = 0, p;
    const v = l.length;
    for (let A = 0; A < v; A++) {
      const C = l[A];
      if (d === 0 && h === 0) {
        if (C === t1) {
          u.push(l.slice(g, A)), g = A + 1;
          continue;
        }
        if (C === "/") {
          p = A;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" ? d-- : C === "(" ? h++ : C === ")" && h--;
    }
    const m = u.length === 0 ? l : l.slice(g);
    let x = m, T = !1;
    m.endsWith(up) ? (x = m.slice(0, -1), T = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(up) && (x = m.slice(1), T = !0)
    );
    const w = p && p > g ? p - g : void 0;
    return n1(u, T, x, w);
  };
  if (i) {
    const l = i + t1, u = s;
    s = (d) => d.startsWith(l) ? u(d.slice(l.length)) : n1(dz, !1, d, void 0, !0);
  }
  if (o) {
    const l = s;
    s = (u) => o({
      className: u,
      parseClassName: l
    });
  }
  return s;
}, mz = (n) => {
  const i = /* @__PURE__ */ new Map();
  return n.orderSensitiveModifiers.forEach((o, s) => {
    i.set(o, 1e6 + s);
  }), (o) => {
    const s = [];
    let l = [];
    for (let u = 0; u < o.length; u++) {
      const d = o[u], h = d[0] === "[", g = i.has(d);
      h || g ? (l.length > 0 && (l.sort(), s.push(...l), l = []), s.push(d)) : l.push(d);
    }
    return l.length > 0 && (l.sort(), s.push(...l)), s;
  };
}, pz = (n) => ({
  cache: fz(n.cacheSize),
  parseClassName: hz(n),
  sortModifiers: mz(n),
  postfixLookupClassGroupIds: gz(n),
  ...nz(n)
}), gz = (n) => {
  const i = /* @__PURE__ */ Object.create(null), o = n.postfixLookupClassGroups;
  if (o)
    for (let s = 0; s < o.length; s++)
      i[o[s]] = !0;
  return i;
}, vz = /\s+/, yz = (n, i) => {
  const {
    parseClassName: o,
    getClassGroupId: s,
    getConflictingClassGroupIds: l,
    sortModifiers: u,
    postfixLookupClassGroupIds: d
  } = i, h = [], g = n.trim().split(vz);
  let p = "";
  for (let v = g.length - 1; v >= 0; v -= 1) {
    const m = g[v], {
      isExternal: x,
      modifiers: T,
      hasImportantModifier: w,
      baseClassName: A,
      maybePostfixModifierPosition: C
    } = o(m);
    if (x) {
      p = m + (p.length > 0 ? " " + p : p);
      continue;
    }
    let R = !!C, _;
    if (R) {
      const O = A.substring(0, C);
      _ = s(O);
      const N = _ && d[_] ? s(A) : void 0;
      N && N !== _ && (_ = N, R = !1);
    } else
      _ = s(A);
    if (!_) {
      if (!R) {
        p = m + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (_ = s(A), !_) {
        p = m + (p.length > 0 ? " " + p : p);
        continue;
      }
      R = !1;
    }
    const D = T.length === 0 ? "" : T.length === 1 ? T[0] : u(T).join(":"), M = w ? D + up : D, B = M + _;
    if (h.indexOf(B) > -1)
      continue;
    h.push(B);
    const U = l(_, R);
    for (let O = 0; O < U.length; ++O) {
      const N = U[O];
      h.push(M + N);
    }
    p = m + (p.length > 0 ? " " + p : p);
  }
  return p;
}, bz = (...n) => {
  let i = 0, o, s, l = "";
  for (; i < n.length; )
    (o = n[i++]) && (s = fE(o)) && (l && (l += " "), l += s);
  return l;
}, fE = (n) => {
  if (typeof n == "string")
    return n;
  let i, o = "";
  for (let s = 0; s < n.length; s++)
    n[s] && (i = fE(n[s])) && (o && (o += " "), o += i);
  return o;
}, xz = (n, ...i) => {
  let o, s, l, u;
  const d = (g) => {
    const p = i.reduce((v, m) => m(v), n());
    return o = pz(p), s = o.cache.get, l = o.cache.set, u = h, h(g);
  }, h = (g) => {
    const p = s(g);
    if (p)
      return p;
    const v = yz(g, o);
    return l(g, v), v;
  };
  return u = d, (...g) => u(bz(...g));
}, Sz = [], Et = (n) => {
  const i = (o) => o[n] || Sz;
  return i.isThemeGetter = !0, i.themeKey = n, i;
}, dE = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, hE = /^\((?:(\w[\w-]*):)?(.+)\)$/i, wz = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Tz = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ez = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cz = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, Az = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Rz = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _a = (n) => wz.test(n), Oe = (n) => !!n && !Number.isNaN(Number(n)), gi = (n) => !!n && Number.isInteger(Number(n)), Em = (n) => n.endsWith("%") && Oe(n.slice(0, -1)), Hi = (n) => Tz.test(n), mE = () => !0, Dz = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ez.test(n) && !Cz.test(n)
), mg = () => !1, Oz = (n) => Az.test(n), Mz = (n) => Rz.test(n), Nz = (n) => !me(n) && !pe(n), _z = (n) => n.startsWith("@container") && (n[10] === "/" && n[11] !== void 0 || n[11] === "s" && n[16] !== void 0 && n.startsWith("-size/", 10) || n[11] === "n" && n[18] !== void 0 && n.startsWith("-normal/", 10)), jz = (n) => Ba(n, vE, mg), me = (n) => dE.test(n), go = (n) => Ba(n, yE, Dz), i1 = (n) => Ba(n, Hz, Oe), zz = (n) => Ba(n, xE, mE), Lz = (n) => Ba(n, bE, mg), a1 = (n) => Ba(n, pE, mg), Vz = (n) => Ba(n, gE, Mz), uu = (n) => Ba(n, SE, Oz), pe = (n) => hE.test(n), il = (n) => Oo(n, yE), Pz = (n) => Oo(n, bE), o1 = (n) => Oo(n, pE), kz = (n) => Oo(n, vE), Bz = (n) => Oo(n, gE), fu = (n) => Oo(n, SE, !0), Uz = (n) => Oo(n, xE, !0), Ba = (n, i, o) => {
  const s = dE.exec(n);
  return s ? s[1] ? i(s[1]) : o(s[2]) : !1;
}, Oo = (n, i, o = !1) => {
  const s = hE.exec(n);
  return s ? s[1] ? i(s[1]) : o : !1;
}, pE = (n) => n === "position" || n === "percentage", gE = (n) => n === "image" || n === "url", vE = (n) => n === "length" || n === "size" || n === "bg-size", yE = (n) => n === "length", Hz = (n) => n === "number", bE = (n) => n === "family-name", xE = (n) => n === "number" || n === "weight", SE = (n) => n === "shadow", Iz = () => {
  const n = Et("color"), i = Et("font"), o = Et("text"), s = Et("font-weight"), l = Et("tracking"), u = Et("leading"), d = Et("breakpoint"), h = Et("container"), g = Et("spacing"), p = Et("radius"), v = Et("shadow"), m = Et("inset-shadow"), x = Et("text-shadow"), T = Et("drop-shadow"), w = Et("blur"), A = Et("perspective"), C = Et("aspect"), R = Et("ease"), _ = Et("animate"), D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [
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
  ], B = () => [...M(), pe, me], U = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", "contain", "none"], N = () => [pe, me, g], F = () => [_a, "full", "auto", ...N()], Q = () => [gi, "none", "subgrid", pe, me], ue = () => ["auto", {
    span: ["full", gi, pe, me]
  }, gi, pe, me], ie = () => [gi, "auto", pe, me], te = () => ["auto", "min", "max", "fr", pe, me], fe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], he = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], G = () => ["auto", ...N()], X = () => [_a, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], J = () => [h, _a, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], se = () => [_a, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], $ = () => [n, pe, me], Me = () => [...M(), o1, a1, {
    position: [pe, me]
  }], Re = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], He = () => ["auto", "cover", "contain", kz, jz, {
    size: [pe, me]
  }], z = () => [Em, il, go], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    pe,
    me
  ], W = () => ["", Oe, il, go], le = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ee = () => [Oe, Em, o1, a1], ye = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    pe,
    me
  ], ne = () => ["none", Oe, pe, me], re = () => ["none", Oe, pe, me], Ae = () => [Oe, pe, me], st = () => [_a, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Hi],
      breakpoint: [Hi],
      color: [mE],
      container: [Hi],
      "drop-shadow": [Hi],
      ease: ["in", "out", "in-out"],
      font: [Nz],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Hi],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Hi],
      shadow: [Hi],
      spacing: ["px", Oe],
      text: [Hi],
      "text-shadow": [Hi],
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
        aspect: ["auto", "square", _a, me, pe, C]
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
        "@container": ["", "normal", "size", pe, me]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [_z],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Oe, "auto", me, pe, h]
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
        object: B()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: U()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": U()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": U()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
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
        z: [gi, "auto", pe, me]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [_a, "full", "auto", h, ...N()]
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
        flex: [Oe, _a, "auto", "initial", "none", me]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Oe, pe, me]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Oe, pe, me]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [gi, "first", "last", "none", pe, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Q()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ue()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ie()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ie()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Q()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ue()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ie()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ie()
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
        "auto-cols": te()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": te()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...fe(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...he(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...he()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...fe()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...he(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...he(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": fe()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...he(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...he()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: N()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
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
        "space-x": N()
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
        "space-y": N()
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
        inline: ["auto", ...J()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...J()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ...J()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/block-size
       */
      "block-size": [{
        block: ["auto", ...se()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...se()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...se()]
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
        text: ["base", o, il, go]
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
        font: [s, Uz, zz]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Em, me]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Pz, Lz, i]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [me]
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
        tracking: [l, pe, me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Oe, "none", pe, i1]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          u,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", pe, me]
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
        list: ["disc", "decimal", "none", pe, me]
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
        placeholder: $()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: $()
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
        decoration: [...le(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Oe, "from-font", "auto", pe, go]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: $()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Oe, "auto", pe, me]
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
        indent: N()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [gi, pe, me]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe, me]
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
        content: ["none", pe, me]
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
        bg: Me()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Re()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: He()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, gi, pe, me],
          radial: ["", pe, me],
          conic: ["", gi, pe, me]
        }, Bz, Vz]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: $()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: z()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: z()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: z()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: $()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: $()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: $()
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
        border: [...le(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...le(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: $()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": $()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": $()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": $()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": $()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": $()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": $()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": $()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": $()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": $()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": $()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: $()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...le(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Oe, pe, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Oe, il, go]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: $()
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
          fu,
          uu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: $()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, fu, uu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": $()
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
        ring: $()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Oe, go]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": $()
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
        "inset-ring": $()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", x, fu, uu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": $()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Oe, pe, me]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ae(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
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
        "mask-linear": [Oe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ee()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ee()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": $()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ee()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ee()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": $()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ee()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ee()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": $()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ee()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ee()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": $()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ee()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ee()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": $()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ee()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ee()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": $()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ee()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ee()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": $()
      }],
      "mask-image-radial": [{
        "mask-radial": [pe, me]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ee()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ee()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": $()
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
        "mask-conic": [Oe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ee()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ee()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": $()
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
        mask: Me()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Re()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: He()
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
        mask: ["none", pe, me]
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
          pe,
          me
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ye()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Oe, pe, me]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Oe, pe, me]
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
          T,
          fu,
          uu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": $()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Oe, pe, me]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Oe, pe, me]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Oe, pe, me]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Oe, pe, me]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Oe, pe, me]
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
          pe,
          me
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ye()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Oe, pe, me]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Oe, pe, me]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Oe, pe, me]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Oe, pe, me]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Oe, pe, me]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Oe, pe, me]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Oe, pe, me]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Oe, pe, me]
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
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", pe, me]
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
        duration: [Oe, "initial", pe, me]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", R, pe, me]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Oe, pe, me]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", _, pe, me]
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
        perspective: [A, pe, me]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": B()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ne()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
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
        skew: Ae()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Ae()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Ae()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [pe, me, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: B()
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
        translate: st()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": st()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": st()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": st()
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
        zoom: [gi, pe, me]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: $()
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
        caret: $()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe, me]
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
        "scrollbar-thumb": $()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": $()
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": N()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": N()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", pe, me]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...$()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Oe, il, go, i1]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...$()]
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
}, qz = /* @__PURE__ */ xz(Iz);
function Le(...n) {
  return qz(sE(n));
}
var Gz = Object.defineProperty, pg = (n, i) => Gz(n, "name", { value: i, configurable: !0 });
function fp(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
pg(fp, "setRef");
function wE(...n) {
  return (i) => {
    let o = !1;
    const s = n.map((l) => {
      const u = fp(l, i);
      return !o && typeof u == "function" && (o = !0), u;
    });
    if (o)
      return () => {
        for (let l = 0; l < s.length; l++) {
          const u = s[l];
          typeof u == "function" ? u() : fp(n[l], null);
        }
      };
  };
}
pg(wE, "composeRefs");
function Ye(...n) {
  return S.useCallback(wE(...n), n);
}
pg(Ye, "useComposedRefs");
var Yz = Object.defineProperty, kn = (n, i) => Yz(n, "name", { value: i, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function $i(n) {
  const i = S.forwardRef((o, s) => {
    let { children: l, ...u } = o, d = null, h = !1;
    const g = [];
    dp(l) && typeof du == "function" && (l = du(l._payload)), S.Children.forEach(l, (x) => {
      if (RE(x)) {
        h = !0;
        const T = x;
        let w = "child" in T.props ? T.props.child : T.props.children;
        dp(w) && typeof du == "function" && (w = du(w._payload)), d = Xz(T, w), g.push(d?.props?.children);
      } else
        g.push(x);
    }), d ? d = S.cloneElement(d, void 0, g) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !h && S.Children.count(l) === 1 && S.isValidElement(l) && (d = l)
    );
    const p = d ? AE(d) : void 0, v = Ye(s, p);
    if (!d) {
      if (l || l === 0)
        throw new Error(
          h ? $z(n) : Zz(n)
        );
      return l;
    }
    const m = CE(u, d.props ?? {});
    return d.type !== S.Fragment && (m.ref = s ? v : p), S.cloneElement(d, m);
  });
  return i.displayName = `${n}.Slot`, i;
}
kn($i, "createSlot");
var Fz = /* @__PURE__ */ $i("Slot"), TE = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function EE(n) {
  const i = /* @__PURE__ */ kn((o) => "child" in o ? o.children(o.child) : o.children, "Slottable");
  return i.displayName = `${n}.Slottable`, i.__radixId = TE, i;
}
kn(EE, "createSlottable");
var Xz = /* @__PURE__ */ kn((n, i) => {
  if ("child" in n.props) {
    const o = n.props.child;
    return S.isValidElement(o) ? S.cloneElement(o, void 0, n.props.children(o.props.children)) : null;
  }
  return S.isValidElement(i) ? i : null;
}, "getSlottableElementFromSlottable");
function CE(n, i) {
  const o = { ...i };
  for (const s in i) {
    const l = n[s], u = i[s];
    /^on[A-Z]/.test(s) ? l && u ? o[s] = (...h) => {
      const g = u(...h);
      return l(...h), g;
    } : l && (o[s] = l) : s === "style" ? o[s] = { ...l, ...u } : s === "className" ? o[s] = [l, u].filter(Boolean).join(" ") : s === "aria-describedby" && (o[s] = OE(u, l));
  }
  return { ...n, ...o };
}
kn(CE, "mergeProps");
function AE(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning;
  return o ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning, o ? n.props.ref : n.props.ref || n.ref);
}
kn(AE, "getElementRef");
function RE(n) {
  return S.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === TE;
}
kn(RE, "isSlottable");
var Kz = /* @__PURE__ */ Symbol.for("react.lazy");
function dp(n) {
  return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === Kz && "_payload" in n && DE(n._payload);
}
kn(dp, "isLazyComponent");
function DE(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
kn(DE, "isPromiseLike");
function OE(...n) {
  const i = /* @__PURE__ */ new Set();
  for (const o of n)
    if (typeof o == "string")
      for (const s of String(o).trim().split(/\s+/))
        s && i.add(s);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
kn(OE, "concatAriaDescribedby");
var Zz = /* @__PURE__ */ kn((n) => `${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), $z = /* @__PURE__ */ kn((n) => `${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), du = qs[" use ".trim().toString()], Qz = Object.defineProperty, Jz = (n, i) => Qz(n, "name", { value: i, configurable: !0 }), Wz = [
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
], Be = Wz.reduce((n, i) => {
  const o = /* @__PURE__ */ $i(`Primitive.${i}`), s = S.forwardRef((l, u) => {
    const { asChild: d, ...h } = l, g = d ? o : i;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ y.jsx(g, { ...h, ref: u });
  });
  return s.displayName = `Primitive.${i}`, { ...n, [i]: s };
}, {});
function ME(n, i) {
  n && Do.flushSync(() => n.dispatchEvent(i));
}
Jz(ME, "dispatchDiscreteCustomEvent");
var e5 = Object.defineProperty, t5 = (n, i) => e5(n, "name", { value: i, configurable: !0 }), NE = Object.freeze({
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
}), n5 = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ t5(function(i, o) {
    return /* @__PURE__ */ y.jsx(
      Be.span,
      {
        ...i,
        ref: o,
        style: { ...NE, ...i.style }
      }
    );
  }, "VisuallyHidden")
), i5 = Object.defineProperty, Ln = (n, i) => i5(n, "name", { value: i, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function a5(n, i) {
  const o = S.createContext(i);
  o.displayName = n + "Context";
  const s = /* @__PURE__ */ Ln((u) => {
    const { children: d, ...h } = u, g = S.useMemo(() => h, Object.values(h));
    return /* @__PURE__ */ y.jsx(o.Provider, { value: g, children: d });
  }, "Provider");
  s.displayName = n + "Provider";
  function l(u, d = {}) {
    const { optional: h = !1 } = d, g = S.useContext(o);
    if (g) return g;
    if (i !== void 0) return i;
    if (!h)
      throw new Error(`\`${u}\` must be used within \`${n}\``);
  }
  return Ln(l, "useContext"), [s, l];
}
Ln(a5, "createContext");
// @__NO_SIDE_EFFECTS__
function ei(n, i = []) {
  let o = [];
  function s(u, d) {
    const h = S.createContext(d);
    h.displayName = u + "Context";
    const g = o.length;
    o = [...o, d];
    const p = /* @__PURE__ */ Ln((m) => {
      const { scope: x, children: T, ...w } = m, A = x?.[n]?.[g] || h, C = S.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ y.jsx(A.Provider, { value: C, children: T });
    }, "Provider");
    p.displayName = u + "Provider";
    function v(m, x, T = {}) {
      const { optional: w = !1 } = T, A = x?.[n]?.[g] || h, C = S.useContext(A);
      if (C) return C;
      if (d !== void 0) return d;
      if (!w)
        throw new Error(`\`${m}\` must be used within \`${u}\``);
    }
    return Ln(v, "useContext"), [p, v];
  }
  Ln(s, "createContext");
  const l = /* @__PURE__ */ Ln(() => {
    const u = o.map((d) => S.createContext(d));
    return /* @__PURE__ */ Ln(function(h) {
      const g = h?.[n] || u;
      return S.useMemo(
        () => ({ [`__scope${n}`]: { ...h, [n]: g } }),
        [h, g]
      );
    }, "useScope");
  }, "createScope");
  return l.scopeName = n, [s, _E(l, ...i)];
}
Ln(ei, "createContextScope");
function _E(...n) {
  const i = n[0];
  if (n.length === 1) return i;
  const o = /* @__PURE__ */ Ln(() => {
    const s = n.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return /* @__PURE__ */ Ln(function(u) {
      const d = s.reduce((h, { useScope: g, scopeName: p }) => {
        const m = g(u)[`__scope${p}`];
        return { ...h, ...m };
      }, {});
      return S.useMemo(() => ({ [`__scope${i.scopeName}`]: d }), [d]);
    }, "useComposedScopes");
  }, "createScope");
  return o.scopeName = i.scopeName, o;
}
Ln(_E, "composeContextScopes");
var o5 = Object.defineProperty, zt = (n, i) => o5(n, "name", { value: i, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function gg(n) {
  const i = n + "CollectionProvider", [o, s] = /* @__PURE__ */ ei(i), [l, u] = o(
    i,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = /* @__PURE__ */ zt((A) => {
    const { scope: C, children: R } = A, _ = S.useRef(null), D = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ y.jsx(l, { scope: C, itemMap: D, collectionRef: _, children: R });
  }, "CollectionProvider");
  d.displayName = i;
  const h = n + "CollectionSlot", g = /* @__PURE__ */ $i(h), p = S.forwardRef(
    (A, C) => {
      const { scope: R, children: _ } = A, D = u(h, R), M = Ye(C, D.collectionRef);
      return /* @__PURE__ */ y.jsx(g, { ref: M, children: _ });
    }
  );
  p.displayName = h;
  const v = n + "CollectionItemSlot", m = "data-radix-collection-item", x = /* @__PURE__ */ $i(v), T = S.forwardRef(
    (A, C) => {
      const { scope: R, children: _, ...D } = A, M = S.useRef(null), B = Ye(C, M), U = u(v, R);
      return S.useEffect(() => (U.itemMap.set(M, { ref: M, ...D }), () => {
        U.itemMap.delete(M);
      })), /* @__PURE__ */ y.jsx(x, { [m]: "", ref: B, children: _ });
    }
  );
  T.displayName = v;
  function w(A) {
    const C = u(n + "CollectionConsumer", A);
    return S.useCallback(() => {
      const _ = C.collectionRef.current;
      if (!_) return [];
      const D = Array.from(_.querySelectorAll(`[${m}]`));
      return Array.from(C.itemMap.values()).sort(
        (U, O) => D.indexOf(U.ref.current) - D.indexOf(O.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return zt(w, "useCollection"), [
    { Provider: d, Slot: p, ItemSlot: T },
    w,
    s
  ];
}
zt(gg, "createCollection");
var s1 = /* @__PURE__ */ new WeakMap(), xt, wn, Cm = (wn = class extends Map {
  constructor(o) {
    super(o);
    vx(this, xt);
    Wh(this, xt, [...super.keys()]), s1.set(this, !0);
  }
  set(o, s) {
    return s1.get(this) && (this.has(o) ? Xt(this, xt)[Xt(this, xt).indexOf(o)] = o : Xt(this, xt).push(o)), super.set(o, s), this;
  }
  insert(o, s, l) {
    const u = this.has(s), d = Xt(this, xt).length, h = vg(o);
    let g = h >= 0 ? h : d + h;
    const p = g < 0 || g >= d ? -1 : g;
    if (p === this.size || u && p === this.size - 1 || p === -1)
      return this.set(s, l), this;
    const v = this.size + (u ? 0 : 1);
    h < 0 && g++;
    const m = [...Xt(this, xt)];
    let x, T = !1;
    for (let w = g; w < v; w++)
      if (g === w) {
        let A = m[w];
        m[w] === s && (A = m[w + 1]), u && this.delete(s), x = this.get(A), this.set(s, l);
      } else {
        !T && m[w - 1] === s && (T = !0);
        const A = m[T ? w : w - 1], C = x;
        x = this.get(A), this.delete(A), this.set(A, C);
      }
    return this;
  }
  with(o, s, l) {
    const u = new wn(this);
    return u.insert(o, s, l), u;
  }
  before(o) {
    const s = Xt(this, xt).indexOf(o) - 1;
    if (!(s < 0))
      return this.entryAt(s);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(o, s, l) {
    const u = Xt(this, xt).indexOf(o);
    return u === -1 ? this : this.insert(u, s, l);
  }
  after(o) {
    let s = Xt(this, xt).indexOf(o);
    if (s = s === -1 || s === this.size - 1 ? -1 : s + 1, s !== -1)
      return this.entryAt(s);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(o, s, l) {
    const u = Xt(this, xt).indexOf(o);
    return u === -1 ? this : this.insert(u + 1, s, l);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return Wh(this, xt, []), super.clear();
  }
  delete(o) {
    const s = super.delete(o);
    return s && Xt(this, xt).splice(Xt(this, xt).indexOf(o), 1), s;
  }
  deleteAt(o) {
    const s = this.keyAt(o);
    return s !== void 0 ? this.delete(s) : !1;
  }
  at(o) {
    const s = Nu(Xt(this, xt), o);
    if (s !== void 0)
      return this.get(s);
  }
  entryAt(o) {
    const s = Nu(Xt(this, xt), o);
    if (s !== void 0)
      return [s, this.get(s)];
  }
  indexOf(o) {
    return Xt(this, xt).indexOf(o);
  }
  keyAt(o) {
    return Nu(Xt(this, xt), o);
  }
  from(o, s) {
    const l = this.indexOf(o);
    if (l === -1)
      return;
    let u = l + s;
    return u < 0 && (u = 0), u >= this.size && (u = this.size - 1), this.at(u);
  }
  keyFrom(o, s) {
    const l = this.indexOf(o);
    if (l === -1)
      return;
    let u = l + s;
    return u < 0 && (u = 0), u >= this.size && (u = this.size - 1), this.keyAt(u);
  }
  find(o, s) {
    let l = 0;
    for (const u of this) {
      if (Reflect.apply(o, s, [u, l, this]))
        return u;
      l++;
    }
  }
  findIndex(o, s) {
    let l = 0;
    for (const u of this) {
      if (Reflect.apply(o, s, [u, l, this]))
        return l;
      l++;
    }
    return -1;
  }
  filter(o, s) {
    const l = [];
    let u = 0;
    for (const d of this)
      Reflect.apply(o, s, [d, u, this]) && l.push(d), u++;
    return new wn(l);
  }
  map(o, s) {
    const l = [];
    let u = 0;
    for (const d of this)
      l.push([d[0], Reflect.apply(o, s, [d, u, this])]), u++;
    return new wn(l);
  }
  reduce(...o) {
    const [s, l] = o;
    let u = 0, d = l ?? this.at(0);
    for (const h of this)
      u === 0 && o.length === 1 ? d = h : d = Reflect.apply(s, this, [d, h, u, this]), u++;
    return d;
  }
  reduceRight(...o) {
    const [s, l] = o;
    let u = l ?? this.at(-1);
    for (let d = this.size - 1; d >= 0; d--) {
      const h = this.at(d);
      d === this.size - 1 && o.length === 1 ? u = h : u = Reflect.apply(s, this, [u, h, d, this]);
    }
    return u;
  }
  toSorted(o) {
    const s = [...this.entries()].sort(o);
    return new wn(s);
  }
  toReversed() {
    const o = new wn();
    for (let s = this.size - 1; s >= 0; s--) {
      const l = this.keyAt(s), u = this.get(l);
      o.set(l, u);
    }
    return o;
  }
  toSpliced(...o) {
    const s = [...this.entries()];
    return s.splice(...o), new wn(s);
  }
  slice(o, s) {
    const l = new wn();
    let u = this.size - 1;
    if (o === void 0)
      return l;
    o < 0 && (o = o + this.size), s !== void 0 && s > 0 && (u = s - 1);
    for (let d = o; d <= u; d++) {
      const h = this.keyAt(d), g = this.get(h);
      l.set(h, g);
    }
    return l;
  }
  every(o, s) {
    let l = 0;
    for (const u of this) {
      if (!Reflect.apply(o, s, [u, l, this]))
        return !1;
      l++;
    }
    return !0;
  }
  some(o, s) {
    let l = 0;
    for (const u of this) {
      if (Reflect.apply(o, s, [u, l, this]))
        return !0;
      l++;
    }
    return !1;
  }
}, xt = new WeakMap(), zt(wn, "OrderedDict"), wn);
function Nu(n, i) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(n, i);
  const o = jE(n, i);
  return o === -1 ? void 0 : n[o];
}
zt(Nu, "at");
function jE(n, i) {
  const o = n.length, s = vg(i), l = s >= 0 ? s : o + s;
  return l < 0 || l >= o ? -1 : l;
}
zt(jE, "toSafeIndex");
function vg(n) {
  return n !== n || n === 0 ? 0 : Math.trunc(n);
}
zt(vg, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function s5(n) {
  const i = n + "CollectionProvider", [o, s] = /* @__PURE__ */ ei(i), [l, u] = o(
    i,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new Cm(),
      setItemMap: /* @__PURE__ */ zt(() => {
      }, "setItemMap")
    }
  ), d = /* @__PURE__ */ zt(({ state: D, ...M }) => D ? /* @__PURE__ */ y.jsx(g, { ...M, state: D }) : /* @__PURE__ */ y.jsx(h, { ...M }), "CollectionProvider");
  d.displayName = i;
  const h = /* @__PURE__ */ zt((D) => {
    const M = C();
    return /* @__PURE__ */ y.jsx(g, { ...D, state: M });
  }, "CollectionInit");
  h.displayName = i + "Init";
  const g = /* @__PURE__ */ zt((D) => {
    const { scope: M, children: B, state: U } = D, O = S.useRef(null), [N, F] = S.useState(
      null
    ), Q = Ye(O, F), [ue, ie] = U;
    return S.useEffect(() => {
      if (!N) return;
      const te = VE(() => {
      });
      return te.observe(N, {
        childList: !0,
        subtree: !0
      }), () => {
        te.disconnect();
      };
    }, [N]), /* @__PURE__ */ y.jsx(
      l,
      {
        scope: M,
        itemMap: ue,
        setItemMap: ie,
        collectionRef: Q,
        collectionRefObject: O,
        collectionElement: N,
        children: B
      }
    );
  }, "CollectionProviderImpl");
  g.displayName = i + "Impl";
  const p = n + "CollectionSlot", v = /* @__PURE__ */ $i(p), m = S.forwardRef(
    (D, M) => {
      const { scope: B, children: U } = D, O = u(p, B), N = Ye(M, O.collectionRef);
      return /* @__PURE__ */ y.jsx(v, { ref: N, children: U });
    }
  );
  m.displayName = p;
  const x = n + "CollectionItemSlot", T = "data-radix-collection-item", w = /* @__PURE__ */ $i(x), A = S.forwardRef(
    (D, M) => {
      const { scope: B, children: U, ...O } = D, N = S.useRef(null), [F, Q] = S.useState(null), ue = Ye(M, N, Q), ie = u(x, B), { setItemMap: te } = ie, fe = S.useRef(O);
      zE(fe.current, O) || (fe.current = O);
      const he = fe.current;
      return S.useEffect(() => {
        const G = he;
        return te((X) => F ? X.has(F) ? X.set(F, { ...G, element: F }).toSorted(hp) : (X.set(F, { ...G, element: F }), X.toSorted(hp)) : X), () => {
          te((X) => !F || !X.has(F) ? X : (X.delete(F), new Cm(X)));
        };
      }, [F, he, te]), /* @__PURE__ */ y.jsx(w, { [T]: "", ref: ue, children: U });
    }
  );
  A.displayName = x;
  function C() {
    return S.useState(new Cm());
  }
  zt(C, "useInitCollection");
  function R(D) {
    const { itemMap: M } = u(n + "CollectionConsumer", D);
    return M;
  }
  return zt(R, "useCollection"), [
    { Provider: d, Slot: m, ItemSlot: A },
    {
      createCollectionScope: s,
      useCollection: R,
      useInitCollection: C
    }
  ];
}
zt(s5, "createCollection");
function zE(n, i) {
  if (n === i) return !0;
  if (typeof n != "object" || typeof i != "object" || n == null || i == null) return !1;
  const o = Object.keys(n), s = Object.keys(i);
  if (o.length !== s.length) return !1;
  for (const l of o)
    if (!Object.prototype.hasOwnProperty.call(i, l) || n[l] !== i[l]) return !1;
  return !0;
}
zt(zE, "shallowEqual");
function LE(n, i) {
  return !!(i.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING);
}
zt(LE, "isElementPreceding");
function hp(n, i) {
  return !n[1].element || !i[1].element ? 0 : LE(n[1].element, i[1].element) ? -1 : 1;
}
zt(hp, "sortByDocumentPosition");
function VE(n) {
  return new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList") {
        n();
        return;
      }
  });
}
zt(VE, "getChildListObserver");
var r5 = Object.defineProperty, Xs = (n, i) => r5(n, "name", { value: i, configurable: !0 }), PE = !!(typeof window < "u" && window.document && window.document.createElement);
function xe(n, i, { checkForDefaultPrevented: o = !0 } = {}) {
  return /* @__PURE__ */ Xs(function(l) {
    if (n?.(l), o === !1 || !l || !l.defaultPrevented)
      return i?.(l);
  }, "handleEvent");
}
Xs(xe, "composeEventHandlers");
function l5(n) {
  if (!PE)
    throw new Error("Cannot access window outside of the DOM");
  return n?.ownerDocument?.defaultView ?? window;
}
Xs(l5, "getOwnerWindow");
function mp(n) {
  if (!PE)
    throw new Error("Cannot access document outside of the DOM");
  return n?.ownerDocument ?? document;
}
Xs(mp, "getOwnerDocument");
function kE(n, i = !1) {
  const { activeElement: o } = mp(n);
  if (!o?.nodeName)
    return null;
  if (BE(o) && o.contentDocument)
    return kE(o.contentDocument.body, i);
  if (i) {
    const s = o.getAttribute("aria-activedescendant");
    if (s) {
      const l = mp(o).getElementById(s);
      if (l)
        return l;
    }
  }
  return o;
}
Xs(kE, "getActiveElement");
function BE(n) {
  return n.tagName === "IFRAME";
}
Xs(BE, "isFrame");
var ut = globalThis?.document ? S.useLayoutEffect : () => {
}, c5 = Object.defineProperty, u5 = (n, i) => c5(n, "name", { value: i, configurable: !0 }), r1 = qs[" useEffectEvent ".trim().toString()], l1 = qs[" useInsertionEffect ".trim().toString()];
function UE(n) {
  if (typeof r1 == "function")
    return r1(n);
  const i = S.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof l1 == "function" ? l1(() => {
    i.current = n;
  }) : ut(() => {
    i.current = n;
  }), S.useMemo(() => ((...o) => i.current?.(...o)), []);
}
u5(UE, "useEffectEvent");
var f5 = Object.defineProperty, Dl = (n, i) => f5(n, "name", { value: i, configurable: !0 }), d5 = qs[" useInsertionEffect ".trim().toString()] || ut;
function Qi({
  prop: n,
  defaultProp: i,
  onChange: o = /* @__PURE__ */ Dl(() => {
  }, "onChange"),
  caller: s
}) {
  const [l, u, d] = HE({
    defaultProp: i,
    onChange: o
  }), h = n !== void 0, g = h ? n : l, p = S.useCallback(
    (v) => {
      if (h) {
        const m = IE(v) ? v(n) : v;
        m !== n && d.current?.(m);
      } else
        u(v);
    },
    [h, n, u, d]
  );
  return [g, p];
}
Dl(Qi, "useControllableState");
function HE({
  defaultProp: n,
  onChange: i
}) {
  const [o, s] = S.useState(n), l = S.useRef(o), u = S.useRef(i);
  return d5(() => {
    u.current = i;
  }, [i]), S.useEffect(() => {
    l.current !== o && (u.current?.(o), l.current = o);
  }, [o, l]), [o, s, u];
}
Dl(HE, "useUncontrolledState");
function IE(n) {
  return typeof n == "function";
}
Dl(IE, "isFunction");
var c1 = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function h5(n, i, o, s) {
  const { prop: l, defaultProp: u, onChange: d, caller: h } = i, g = l !== void 0, p = UE(d), v = [{ ...o, state: u }];
  s && v.push(s);
  const [m, x] = S.useReducer(
    (C, R) => {
      if (R.type === c1)
        return { ...C, state: R.state };
      const _ = n(C, R);
      return g && !Object.is(_.state, C.state) && p(_.state), _;
    },
    ...v
  ), T = m.state, w = S.useRef(T);
  S.useEffect(() => {
    w.current !== T && (w.current = T, g || p(T));
  }, [T, w, g]);
  const A = S.useMemo(() => l !== void 0 ? { ...m, state: l } : m, [m, l]);
  return S.useEffect(() => {
    g && !Object.is(l, m.state) && x({ type: c1, state: l });
  }, [l, m.state, g]), [A, x];
}
Dl(h5, "useControllableStateReducer");
var m5 = Object.defineProperty, Ji = (n, i) => m5(n, "name", { value: i, configurable: !0 });
function qE(n, i) {
  return S.useReducer((o, s) => i[o][s] ?? o, n);
}
Ji(qE, "useStateMachine");
var Ei = /* @__PURE__ */ Ji((n) => {
  const { present: i, children: o } = n, s = GE(i), l = typeof o == "function" ? o({ present: s.isPresent }) : S.Children.only(o), u = YE(s.ref, FE(l));
  return typeof o == "function" || s.isPresent ? S.cloneElement(l, { ref: u }) : null;
}, "Presence");
function GE(n) {
  const [i, o] = S.useState(), s = S.useRef(null), l = S.useRef(n), u = S.useRef("none"), d = S.useRef(void 0), h = n ? "mounted" : "unmounted", [g, p] = qE(h, {
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
  return S.useEffect(() => {
    g === "mounted" ? (u.current = d.current ?? Ms(s.current), d.current = void 0) : u.current = "none";
  }, [g]), ut(() => {
    const v = s.current, m = l.current;
    if (m !== n) {
      const T = u.current, w = Ms(v);
      n ? (d.current = w, p("MOUNT")) : w === "none" || v?.display === "none" ? p("UNMOUNT") : p(m && T !== w ? "ANIMATION_OUT" : "UNMOUNT"), l.current = n;
    }
  }, [n, p]), ut(() => {
    if (i) {
      let v;
      const m = i.ownerDocument.defaultView ?? window, x = /* @__PURE__ */ Ji((w) => {
        const C = Ms(s.current).includes(CSS.escape(w.animationName));
        if (w.target === i && C && (p("ANIMATION_END"), !l.current)) {
          const R = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", v = m.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = R);
          });
        }
      }, "handleAnimationEnd"), T = /* @__PURE__ */ Ji((w) => {
        w.target === i && (u.current = Ms(s.current));
      }, "handleAnimationStart");
      return i.addEventListener("animationstart", T), i.addEventListener("animationcancel", x), i.addEventListener("animationend", x), () => {
        m.clearTimeout(v), i.removeEventListener("animationstart", T), i.removeEventListener("animationcancel", x), i.removeEventListener("animationend", x);
      };
    } else
      p("ANIMATION_END");
  }, [i, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(g),
    ref: S.useCallback((v) => {
      if (v) {
        const m = getComputedStyle(v);
        s.current = m, d.current = Ms(m);
      } else
        s.current = null;
      o(v);
    }, [])
  };
}
Ji(GE, "usePresence");
function pp(n, i) {
  if (typeof n == "function")
    return n(i);
  n != null && (n.current = i);
}
Ji(pp, "setRef");
function YE(...n) {
  const i = S.useRef(n);
  return i.current = n, S.useCallback((o) => {
    const s = i.current;
    let l = !1;
    const u = s.map((d) => {
      const h = pp(d, o);
      return !l && typeof h == "function" && (l = !0), h;
    });
    if (l)
      return () => {
        for (let d = 0; d < u.length; d++) {
          const h = u[d];
          typeof h == "function" ? h() : pp(s[d], null);
        }
      };
  }, []);
}
Ji(YE, "useStableComposedRefs");
function Ms(n) {
  return n?.animationName || "none";
}
Ji(Ms, "getAnimationName");
function FE(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning;
  return o ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref")?.get, o = i && "isReactWarning" in i && i.isReactWarning, o ? n.props.ref : n.props.ref || n.ref);
}
Ji(FE, "getElementRef");
var p5 = Object.defineProperty, g5 = (n, i) => p5(n, "name", { value: i, configurable: !0 }), v5 = qs[" useId ".trim().toString()] || (() => {
}), y5 = 0;
function Yi(n) {
  const [i, o] = S.useState(v5());
  return ut(() => {
    n || o((s) => s ?? String(y5++));
  }, [n]), n || (i ? `radix-${i}` : "");
}
g5(Yi, "useId");
var b5 = Object.defineProperty, x5 = (n, i) => b5(n, "name", { value: i, configurable: !0 }), S5 = {
  LTR: "ltr"
}, w5 = S.createContext(void 0);
function lf(n) {
  const i = S.useContext(w5);
  return n || i || S5.LTR;
}
x5(lf, "useDirection");
var T5 = Object.defineProperty, E5 = (n, i) => T5(n, "name", { value: i, configurable: !0 });
function Wn(n) {
  const i = S.useRef(n);
  return S.useEffect(() => {
    i.current = n;
  }), S.useMemo(() => ((...o) => i.current?.(...o)), []);
}
E5(Wn, "useCallbackRef");
var C5 = Object.defineProperty, jt = (n, i) => C5(n, "name", { value: i, configurable: !0 }), gp = "dismissableLayer.update", A5 = "dismissableLayer.pointerDownOutside", R5 = "dismissableLayer.focusOutside", u1, XE = S.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), cf = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ jt(function(i, o) {
    const {
      disableOutsidePointerEvents: s = !1,
      deferPointerDownOutside: l = !1,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: h,
      onInteractOutside: g,
      onDismiss: p,
      ...v
    } = i, m = S.useContext(XE), [x, T] = S.useState(null), w = x?.ownerDocument ?? globalThis?.document, [, A] = S.useState({}), C = Ye(o, T), R = Array.from(m.layers), [_] = [
      ...m.layersWithOutsidePointerEventsDisabled
    ].slice(-1), D = _ ? R.indexOf(_) : -1, M = x ? R.indexOf(x) : -1, B = m.layersWithOutsidePointerEventsDisabled.size > 0, U = M >= D, O = S.useRef(!1), N = ZE(
      (ie) => {
        d?.(ie), g?.(ie), ie.defaultPrevented || p?.();
      },
      {
        ownerDocument: w,
        deferPointerDownOutside: l,
        isDeferredPointerDownOutsideRef: O,
        dismissableSurfaces: m.dismissableSurfaces,
        shouldHandlePointerDownOutside: S.useCallback(
          (ie) => {
            if (!(ie instanceof Node))
              return !1;
            const te = [...m.branches].some(
              (fe) => fe.contains(ie)
            );
            return U && !te;
          },
          [m.branches, U]
        )
      }
    ), F = $E((ie) => {
      if (l && O.current)
        return;
      const te = ie.target;
      [...m.branches].some((he) => he.contains(te)) || (h?.(ie), g?.(ie), ie.defaultPrevented || p?.());
    }, w), Q = x ? M === R.length - 1 : !1, ue = Wn((ie) => {
      ie.key === "Escape" && (u?.(ie), !ie.defaultPrevented && p && (ie.preventDefault(), p()));
    });
    return S.useEffect(() => {
      if (Q)
        return w.addEventListener("keydown", ue, { capture: !0 }), () => w.removeEventListener("keydown", ue, { capture: !0 });
    }, [w, Q, ue]), S.useEffect(() => {
      if (x)
        return s && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (u1 = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(x)), m.layers.add(x), vp(), () => {
          s && (m.layersWithOutsidePointerEventsDisabled.delete(x), m.layersWithOutsidePointerEventsDisabled.size === 0 && (w.body.style.pointerEvents = u1));
        };
    }, [x, w, s, m]), S.useEffect(() => () => {
      x && (m.layers.delete(x), m.layersWithOutsidePointerEventsDisabled.delete(x), vp());
    }, [x, m]), S.useEffect(() => {
      const ie = /* @__PURE__ */ jt(() => A({}), "handleUpdate");
      return document.addEventListener(gp, ie), () => document.removeEventListener(gp, ie);
    }, []), /* @__PURE__ */ y.jsx(
      Be.div,
      {
        ...v,
        ref: C,
        style: {
          pointerEvents: B ? U ? "auto" : "none" : void 0,
          ...i.style
        },
        onFocusCapture: xe(i.onFocusCapture, F.onFocusCapture),
        onBlurCapture: xe(i.onBlurCapture, F.onBlurCapture),
        onPointerDownCapture: xe(
          i.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function KE() {
  const n = S.useContext(XE), [i, o] = S.useState(null);
  return S.useEffect(() => {
    if (i)
      return n.dismissableSurfaces.add(i), () => {
        n.dismissableSurfaces.delete(i);
      };
  }, [i, n.dismissableSurfaces]), o;
}
jt(KE, "useDismissableLayerSurface");
var D5 = /* @__PURE__ */ jt(() => !0, "IS_TRUE");
function ZE(n, i) {
  const {
    ownerDocument: o = globalThis?.document,
    deferPointerDownOutside: s = !1,
    isDeferredPointerDownOutsideRef: l,
    dismissableSurfaces: u,
    shouldHandlePointerDownOutside: d = D5
  } = i, h = Wn(n), g = S.useRef(!1), p = S.useRef(!1), v = S.useRef(/* @__PURE__ */ new Map()), m = S.useRef(() => {
  });
  return S.useEffect(() => {
    function x() {
      p.current = !1, l.current = !1, v.current.clear();
    }
    jt(x, "resetOutsideInteraction");
    function T() {
      return Array.from(v.current.values()).some(Boolean);
    }
    jt(T, "isOutsideInteractionIntercepted");
    function w(D) {
      if (!p.current)
        return;
      const M = D.target;
      M instanceof Node && [...u].some((U) => U.contains(M)) || v.current.set(D.type, !0), D.type === "click" && window.setTimeout(() => {
        p.current && m.current();
      }, 0);
    }
    jt(w, "handleInteractionCapture");
    function A(D) {
      p.current && v.current.set(D.type, !1);
    }
    jt(A, "handleInteractionBubble");
    const C = /* @__PURE__ */ jt((D) => {
      if (D.target && !g.current) {
        let M = function() {
          o.removeEventListener("click", m.current);
          const U = T();
          x(), U || yg(
            A5,
            h,
            B,
            { discrete: !0 }
          );
        };
        if (jt(M, "handleAndDispatchPointerDownOutsideEvent"), !d(D.target)) {
          o.removeEventListener("click", m.current), x(), g.current = !1;
          return;
        }
        const B = { originalEvent: D };
        p.current = !0, l.current = s && D.button === 0, v.current.clear(), !s || D.button !== 0 ? M() : (o.removeEventListener("click", m.current), m.current = M, o.addEventListener("click", m.current, { once: !0 }));
      } else
        o.removeEventListener("click", m.current), x();
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
    const _ = window.setTimeout(() => {
      o.addEventListener("pointerdown", C);
    }, 0);
    return () => {
      window.clearTimeout(_), o.removeEventListener("pointerdown", C), o.removeEventListener("click", m.current);
      for (const D of R)
        o.removeEventListener(D, w, !0), o.removeEventListener(D, A);
    };
  }, [
    o,
    h,
    s,
    l,
    u,
    d
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ jt(() => g.current = !0, "onPointerDownCapture")
  };
}
jt(ZE, "usePointerDownOutside");
function $E(n, i = globalThis?.document) {
  const o = Wn(n), s = S.useRef(!1);
  return S.useEffect(() => {
    const l = /* @__PURE__ */ jt((u) => {
      u.target && !s.current && yg(R5, o, { originalEvent: u }, {
        discrete: !1
      });
    }, "handleFocus");
    return i.addEventListener("focusin", l), () => i.removeEventListener("focusin", l);
  }, [i, o]), {
    onFocusCapture: /* @__PURE__ */ jt(() => s.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ jt(() => s.current = !1, "onBlurCapture")
  };
}
jt($E, "useFocusOutside");
function vp() {
  const n = new CustomEvent(gp);
  document.dispatchEvent(n);
}
jt(vp, "dispatchUpdate");
function yg(n, i, o, { discrete: s }) {
  const l = o.originalEvent.target, u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: o });
  i && l.addEventListener(n, i, { once: !0 }), s ? ME(l, u) : l.dispatchEvent(u);
}
jt(yg, "handleAndDispatchCustomEvent");
var O5 = Object.defineProperty, St = (n, i) => O5(n, "name", { value: i, configurable: !0 }), Am = "focusScope.autoFocusOnMount", Rm = "focusScope.autoFocusOnUnmount", f1 = { bubbles: !1, cancelable: !0 }, QE = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ St(function(i, o) {
    const {
      loop: s = !1,
      trapped: l = !1,
      branches: u,
      onMountAutoFocus: d,
      onUnmountAutoFocus: h,
      ...g
    } = i, [p, v] = S.useState(null), m = Wn(d), x = Wn(h), T = S.useRef(null), w = Ye(o, v), A = S.useRef(u);
    S.useEffect(() => {
      A.current = u;
    });
    const C = S.useCallback(
      (D) => D ? p?.contains(D) ? !0 : !!A.current?.some((M) => M.contains(D)) : !1,
      [p]
    ), R = S.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    S.useEffect(() => {
      if (l) {
        let D = function(O) {
          if (R.paused || !p) return;
          const N = O.target;
          C(N) ? T.current = N : qi(T.current, { select: !0 });
        }, M = function(O) {
          if (R.paused || !p) return;
          const N = O.relatedTarget;
          N !== null && (C(N) || qi(T.current, { select: !0 }));
        }, B = function(O) {
          if (document.activeElement === document.body)
            for (const F of O)
              F.removedNodes.length > 0 && qi(p);
        };
        St(D, "handleFocusIn"), St(M, "handleFocusOut"), St(B, "handleMutations"), document.addEventListener("focusin", D), document.addEventListener("focusout", M);
        const U = new MutationObserver(B);
        return p && U.observe(p, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", D), document.removeEventListener("focusout", M), U.disconnect();
        };
      }
    }, [l, p, R.paused, C]), S.useEffect(() => {
      if (p) {
        d1.add(R);
        const D = document.activeElement;
        if (!p.contains(D)) {
          const B = new CustomEvent(Am, f1);
          p.addEventListener(Am, m), p.dispatchEvent(B), B.defaultPrevented || (nC(rC(bg(p)), { select: !0 }), document.activeElement === D && qi(p));
        }
        return () => {
          p.removeEventListener(Am, m), setTimeout(() => {
            const B = new CustomEvent(Rm, f1);
            p.addEventListener(Rm, x), p.dispatchEvent(B), B.defaultPrevented || qi(D ?? document.body, { select: !0 }), p.removeEventListener(Rm, x), d1.remove(R);
          }, 0);
        };
      }
    }, [p, m, x, R]);
    const _ = S.useCallback(
      (D) => {
        if (!s && !l || R.paused) return;
        const M = D.key === "Tab" && !D.altKey && !D.ctrlKey && !D.metaKey, B = document.activeElement;
        if (M && B) {
          const U = D.currentTarget, [O, N] = iC(U);
          O && N ? !D.shiftKey && B === N ? (D.preventDefault(), s && qi(O, { select: !0 })) : D.shiftKey && B === O && (D.preventDefault(), s && qi(N, { select: !0 })) : B === U && D.preventDefault();
        }
      },
      [s, l, R.paused]
    );
    return /* @__PURE__ */ y.jsx(Be.div, { tabIndex: -1, ...g, ref: w, onKeyDown: _ });
  }, "FocusScope")
), JE = S.createContext(null);
function WE({ registry: n, children: i }) {
  return n ? /* @__PURE__ */ y.jsx(JE.Provider, { value: n, children: i }) : i;
}
St(WE, "FocusScopeBranchProvider");
function eC() {
  const [n, i] = S.useState([]), o = S.useMemo(
    () => ({
      add: /* @__PURE__ */ St((s) => i((l) => l.includes(s) ? l : [...l, s]), "add"),
      remove: /* @__PURE__ */ St((s) => i((l) => l.filter((u) => u !== s)), "remove")
    }),
    []
  );
  return { nodes: n, registry: o };
}
St(eC, "useFocusScopeBranchRegistry");
function tC(n) {
  const i = S.useContext(JE);
  S.useEffect(() => {
    if (!(!n || !i))
      return i.add(n), () => i.remove(n);
  }, [n, i]);
}
St(tC, "useFocusScopeBranch");
function nC(n, { select: i = !1 } = {}) {
  const o = document.activeElement;
  for (const s of n)
    if (qi(s, { select: i }), document.activeElement !== o) return;
}
St(nC, "focusFirst");
function iC(n) {
  const i = bg(n), o = yp(i, n), s = yp(i.reverse(), n);
  return [o, s];
}
St(iC, "getTabbableEdges");
function bg(n) {
  const i = [], o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ St((s) => {
      const l = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || l ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; o.nextNode(); ) i.push(o.currentNode);
  return i;
}
St(bg, "getTabbableCandidates");
function yp(n, i) {
  const o = typeof i.checkVisibility == "function" && i.checkVisibility({ checkVisibilityCSS: !0 });
  for (const s of n)
    if (!(o ? !s.checkVisibility({ checkVisibilityCSS: !0 }) : aC(s, { upTo: i })))
      return s;
}
St(yp, "findVisible");
function aC(n, { upTo: i }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (i !== void 0 && n === i) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
St(aC, "isHidden");
function oC(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
St(oC, "isSelectableInput");
function qi(n, { select: i = !1 } = {}) {
  if (n && n.focus) {
    const o = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== o && oC(n) && i && n.select();
  }
}
St(qi, "focus");
var d1 = sC();
function sC() {
  let n = [];
  return {
    add(i) {
      const o = n[0];
      i !== o && o?.pause(), n = bp(n, i), n.unshift(i);
    },
    remove(i) {
      n = bp(n, i), n[0]?.resume();
    }
  };
}
St(sC, "createFocusScopesStack");
function bp(n, i) {
  const o = [...n], s = o.indexOf(i);
  return s !== -1 && o.splice(s, 1), o;
}
St(bp, "arrayRemove");
function rC(n) {
  return n.filter((i) => i.tagName !== "A");
}
St(rC, "removeLinks");
var M5 = Object.defineProperty, N5 = (n, i) => M5(n, "name", { value: i, configurable: !0 }), uf = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ N5(function(i, o) {
    const { container: s, ...l } = i, [u, d] = S.useState(!1);
    ut(() => d(!0), []);
    const h = s || u && globalThis?.document?.body;
    return h ? Do.createPortal(/* @__PURE__ */ y.jsx(Be.div, { ...l, ref: o }), h) : null;
  }, "Portal")
), _5 = Object.defineProperty, xg = (n, i) => _5(n, "name", { value: i, configurable: !0 }), hu = 0, Cs = null;
function j5(n) {
  return ff(), n.children;
}
xg(j5, "FocusGuards");
function ff() {
  S.useEffect(() => {
    Cs || (Cs = { start: xp(), end: xp() });
    const { start: n, end: i } = Cs;
    return document.body.firstElementChild !== n && document.body.insertAdjacentElement("afterbegin", n), document.body.lastElementChild !== i && document.body.insertAdjacentElement("beforeend", i), hu++, () => {
      hu === 1 && (Cs?.start.remove(), Cs?.end.remove(), Cs = null), hu = Math.max(0, hu - 1);
    };
  }, []);
}
xg(ff, "useFocusGuards");
function xp() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
xg(xp, "createFocusGuard");
var vi = function() {
  return vi = Object.assign || function(i) {
    for (var o, s = 1, l = arguments.length; s < l; s++) {
      o = arguments[s];
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (i[u] = o[u]);
    }
    return i;
  }, vi.apply(this, arguments);
};
function lC(n, i) {
  var o = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && i.indexOf(s) < 0 && (o[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, s = Object.getOwnPropertySymbols(n); l < s.length; l++)
      i.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[l]) && (o[s[l]] = n[s[l]]);
  return o;
}
function z5(n, i, o) {
  if (o || arguments.length === 2) for (var s = 0, l = i.length, u; s < l; s++)
    (u || !(s in i)) && (u || (u = Array.prototype.slice.call(i, 0, s)), u[s] = i[s]);
  return n.concat(u || Array.prototype.slice.call(i));
}
var _u = "right-scroll-bar-position", ju = "width-before-scroll-bar", L5 = "with-scroll-bars-hidden", V5 = "--removed-body-scroll-bar-size";
function Dm(n, i) {
  return typeof n == "function" ? n(i) : n && (n.current = i), n;
}
function P5(n, i) {
  var o = S.useState(function() {
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
        set current(s) {
          var l = o.value;
          l !== s && (o.value = s, o.callback(s, l));
        }
      }
    };
  })[0];
  return o.callback = i, o.facade;
}
var k5 = typeof window < "u" ? S.useLayoutEffect : S.useEffect, h1 = /* @__PURE__ */ new WeakMap();
function B5(n, i) {
  var o = P5(null, function(s) {
    return n.forEach(function(l) {
      return Dm(l, s);
    });
  });
  return k5(function() {
    var s = h1.get(o);
    if (s) {
      var l = new Set(s), u = new Set(n), d = o.current;
      l.forEach(function(h) {
        u.has(h) || Dm(h, null);
      }), u.forEach(function(h) {
        l.has(h) || Dm(h, d);
      });
    }
    h1.set(o, n);
  }, [n]), o;
}
function U5(n) {
  return n;
}
function H5(n, i) {
  i === void 0 && (i = U5);
  var o = [], s = !1, l = {
    read: function() {
      if (s)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return o.length ? o[o.length - 1] : n;
    },
    useMedium: function(u) {
      var d = i(u, s);
      return o.push(d), function() {
        o = o.filter(function(h) {
          return h !== d;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (s = !0; o.length; ) {
        var d = o;
        o = [], d.forEach(u);
      }
      o = {
        push: function(h) {
          return u(h);
        },
        filter: function() {
          return o;
        }
      };
    },
    assignMedium: function(u) {
      s = !0;
      var d = [];
      if (o.length) {
        var h = o;
        o = [], h.forEach(u), d = o;
      }
      var g = function() {
        var v = d;
        d = [], v.forEach(u);
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
function I5(n) {
  n === void 0 && (n = {});
  var i = H5(null);
  return i.options = vi({ async: !0, ssr: !1 }, n), i;
}
var cC = function(n) {
  var i = n.sideCar, o = lC(n, ["sideCar"]);
  if (!i)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var s = i.read();
  if (!s)
    throw new Error("Sidecar medium not found");
  return S.createElement(s, vi({}, o));
};
cC.isSideCarExport = !0;
function q5(n, i) {
  return n.useMedium(i), cC;
}
var uC = I5(), Om = function() {
}, df = S.forwardRef(function(n, i) {
  var o = S.useRef(null), s = S.useState({
    onScrollCapture: Om,
    onWheelCapture: Om,
    onTouchMoveCapture: Om
  }), l = s[0], u = s[1], d = n.forwardProps, h = n.children, g = n.className, p = n.removeScrollBar, v = n.enabled, m = n.shards, x = n.sideCar, T = n.noRelative, w = n.noIsolation, A = n.inert, C = n.allowPinchZoom, R = n.as, _ = R === void 0 ? "div" : R, D = n.gapMode, M = lC(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), B = x, U = B5([o, i]), O = vi(vi({}, M), l);
  return S.createElement(
    S.Fragment,
    null,
    v && S.createElement(B, { sideCar: uC, removeScrollBar: p, shards: m, noRelative: T, noIsolation: w, inert: A, setCallbacks: u, allowPinchZoom: !!C, lockRef: o, gapMode: D }),
    d ? S.cloneElement(S.Children.only(h), vi(vi({}, O), { ref: U })) : S.createElement(_, vi({}, O, { className: g, ref: U }), h)
  );
});
df.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
df.classNames = {
  fullWidth: ju,
  zeroRight: _u
};
var G5 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Y5() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var i = G5();
  return i && n.setAttribute("nonce", i), n;
}
function F5(n, i) {
  n.styleSheet ? n.styleSheet.cssText = i : n.appendChild(document.createTextNode(i));
}
function X5(n) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(n);
}
var K5 = function() {
  var n = 0, i = null;
  return {
    add: function(o) {
      n == 0 && (i = Y5()) && (F5(i, o), X5(i)), n++;
    },
    remove: function() {
      n--, !n && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
    }
  };
}, Z5 = function() {
  var n = K5();
  return function(i, o) {
    S.useEffect(function() {
      return n.add(i), function() {
        n.remove();
      };
    }, [i && o]);
  };
}, fC = function() {
  var n = Z5(), i = function(o) {
    var s = o.styles, l = o.dynamic;
    return n(s, l), null;
  };
  return i;
}, $5 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Mm = function(n) {
  return parseInt(n || "", 10) || 0;
}, Q5 = function(n) {
  var i = window.getComputedStyle(document.body), o = i[n === "padding" ? "paddingLeft" : "marginLeft"], s = i[n === "padding" ? "paddingTop" : "marginTop"], l = i[n === "padding" ? "paddingRight" : "marginRight"];
  return [Mm(o), Mm(s), Mm(l)];
}, J5 = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return $5;
  var i = Q5(n), o = document.documentElement.clientWidth, s = window.innerWidth;
  return {
    left: i[0],
    top: i[1],
    right: i[2],
    gap: Math.max(0, s - o + i[2] - i[0])
  };
}, W5 = fC(), Vs = "data-scroll-locked", e4 = function(n, i, o, s) {
  var l = n.left, u = n.top, d = n.right, h = n.gap;
  return o === void 0 && (o = "margin"), `
  .`.concat(L5, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(h, "px ").concat(s, `;
  }
  body[`).concat(Vs, `] {
    overflow: hidden `).concat(s, `;
    overscroll-behavior: contain;
    `).concat([
    i && "position: relative ".concat(s, ";"),
    o === "margin" && `
    padding-left: `.concat(l, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(s, `;
    `),
    o === "padding" && "padding-right: ".concat(h, "px ").concat(s, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(_u, ` {
    right: `).concat(h, "px ").concat(s, `;
  }
  
  .`).concat(ju, ` {
    margin-right: `).concat(h, "px ").concat(s, `;
  }
  
  .`).concat(_u, " .").concat(_u, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(ju, " .").concat(ju, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body[`).concat(Vs, `] {
    `).concat(V5, ": ").concat(h, `px;
  }
`);
}, m1 = function() {
  var n = parseInt(document.body.getAttribute(Vs) || "0", 10);
  return isFinite(n) ? n : 0;
}, t4 = function() {
  S.useEffect(function() {
    return document.body.setAttribute(Vs, (m1() + 1).toString()), function() {
      var n = m1() - 1;
      n <= 0 ? document.body.removeAttribute(Vs) : document.body.setAttribute(Vs, n.toString());
    };
  }, []);
}, n4 = function(n) {
  var i = n.noRelative, o = n.noImportant, s = n.gapMode, l = s === void 0 ? "margin" : s;
  t4();
  var u = S.useMemo(function() {
    return J5(l);
  }, [l]);
  return S.createElement(W5, { styles: e4(u, !i, l, o ? "" : "!important") });
}, Sp = !1;
if (typeof window < "u")
  try {
    var mu = Object.defineProperty({}, "passive", {
      get: function() {
        return Sp = !0, !0;
      }
    });
    window.addEventListener("test", mu, mu), window.removeEventListener("test", mu, mu);
  } catch {
    Sp = !1;
  }
var As = Sp ? { passive: !1 } : !1, i4 = function(n) {
  return n.tagName === "TEXTAREA";
}, dC = function(n, i) {
  if (!(n instanceof Element))
    return !1;
  var o = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    o[i] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !i4(n) && o[i] === "visible")
  );
}, a4 = function(n) {
  return dC(n, "overflowY");
}, o4 = function(n) {
  return dC(n, "overflowX");
}, p1 = function(n, i) {
  var o = i.ownerDocument, s = i;
  do {
    typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
    var l = hC(n, s);
    if (l) {
      var u = mC(n, s), d = u[1], h = u[2];
      if (d > h)
        return !0;
    }
    s = s.parentNode;
  } while (s && s !== o.body);
  return !1;
}, s4 = function(n) {
  var i = n.scrollTop, o = n.scrollHeight, s = n.clientHeight;
  return [
    i,
    o,
    s
  ];
}, r4 = function(n) {
  var i = n.scrollLeft, o = n.scrollWidth, s = n.clientWidth;
  return [
    i,
    o,
    s
  ];
}, hC = function(n, i) {
  return n === "v" ? a4(i) : o4(i);
}, mC = function(n, i) {
  return n === "v" ? s4(i) : r4(i);
}, l4 = function(n, i) {
  return n === "h" && i === "rtl" ? -1 : 1;
}, c4 = function(n, i, o, s, l) {
  var u = l4(n, window.getComputedStyle(i).direction), d = u * s, h = o.target, g = i.contains(h), p = !1, v = d > 0, m = 0, x = 0;
  do {
    if (!h)
      break;
    var T = mC(n, h), w = T[0], A = T[1], C = T[2], R = A - C - u * w;
    (w || R) && hC(n, h) && (m += R, x += w);
    var _ = h.parentNode;
    h = _ && _.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? _.host : _;
  } while (
    // portaled content
    !g && h !== document.body || // self content
    g && (i.contains(h) || i === h)
  );
  return (v && Math.abs(m) < 1 || !v && Math.abs(x) < 1) && (p = !0), p;
}, pu = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, g1 = function(n) {
  return [n.deltaX, n.deltaY];
}, v1 = function(n) {
  return n && "current" in n ? n.current : n;
}, u4 = function(n, i) {
  return n[0] === i[0] && n[1] === i[1];
}, f4 = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, d4 = 0, Rs = [];
function h4(n) {
  var i = S.useRef([]), o = S.useRef([0, 0]), s = S.useRef(), l = S.useState(d4++)[0], u = S.useState(fC)[0], d = S.useRef(n);
  S.useEffect(function() {
    d.current = n;
  }, [n]), S.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(l));
      var A = z5([n.lockRef.current], (n.shards || []).map(v1), !0).filter(Boolean);
      return A.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(l));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(l)), A.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(l));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var h = S.useCallback(function(A, C) {
    if ("touches" in A && A.touches.length === 2 || A.type === "wheel" && A.ctrlKey)
      return !d.current.allowPinchZoom;
    var R = pu(A), _ = o.current, D = "deltaX" in A ? A.deltaX : _[0] - R[0], M = "deltaY" in A ? A.deltaY : _[1] - R[1], B, U = A.target, O = Math.abs(D) > Math.abs(M) ? "h" : "v";
    if ("touches" in A && O === "h" && U.type === "range")
      return !1;
    var N = window.getSelection(), F = N && N.anchorNode, Q = F ? F === U || F.contains(U) : !1;
    if (Q)
      return !1;
    var ue = p1(O, U);
    if (!ue)
      return !0;
    if (ue ? B = O : (B = O === "v" ? "h" : "v", ue = p1(O, U)), !ue)
      return !1;
    if (!s.current && "changedTouches" in A && (D || M) && (s.current = B), !B)
      return !0;
    var ie = s.current || B;
    return c4(ie, C, A, ie === "h" ? D : M);
  }, []), g = S.useCallback(function(A) {
    var C = A;
    if (!(!Rs.length || Rs[Rs.length - 1] !== u)) {
      var R = "deltaY" in C ? g1(C) : pu(C), _ = i.current.filter(function(B) {
        return B.name === C.type && (B.target === C.target || C.target === B.shadowParent) && u4(B.delta, R);
      })[0];
      if (_ && _.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!_) {
        var D = (d.current.shards || []).map(v1).filter(Boolean).filter(function(B) {
          return B.contains(C.target);
        }), M = D.length > 0 ? h(C, D[0]) : !d.current.noIsolation;
        M && C.cancelable && C.preventDefault();
      }
    }
  }, []), p = S.useCallback(function(A, C, R, _) {
    var D = { name: A, delta: C, target: R, should: _, shadowParent: m4(R) };
    i.current.push(D), setTimeout(function() {
      i.current = i.current.filter(function(M) {
        return M !== D;
      });
    }, 1);
  }, []), v = S.useCallback(function(A) {
    o.current = pu(A), s.current = void 0;
  }, []), m = S.useCallback(function(A) {
    p(A.type, g1(A), A.target, h(A, n.lockRef.current));
  }, []), x = S.useCallback(function(A) {
    p(A.type, pu(A), A.target, h(A, n.lockRef.current));
  }, []);
  S.useEffect(function() {
    return Rs.push(u), n.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: x
    }), document.addEventListener("wheel", g, As), document.addEventListener("touchmove", g, As), document.addEventListener("touchstart", v, As), function() {
      Rs = Rs.filter(function(A) {
        return A !== u;
      }), document.removeEventListener("wheel", g, As), document.removeEventListener("touchmove", g, As), document.removeEventListener("touchstart", v, As);
    };
  }, []);
  var T = n.removeScrollBar, w = n.inert;
  return S.createElement(
    S.Fragment,
    null,
    w ? S.createElement(u, { styles: f4(l) }) : null,
    T ? S.createElement(n4, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function m4(n) {
  for (var i = null; n !== null; )
    n instanceof ShadowRoot && (i = n.host, n = n.host), n = n.parentNode;
  return i;
}
const p4 = q5(uC, h4);
var Sg = S.forwardRef(function(n, i) {
  return S.createElement(df, vi({}, n, { ref: i, sideCar: p4 }));
});
Sg.classNames = df.classNames;
var g4 = function(n) {
  if (typeof document > "u")
    return null;
  var i = Array.isArray(n) ? n[0] : n;
  return i.ownerDocument.body;
}, Ds = /* @__PURE__ */ new WeakMap(), gu = /* @__PURE__ */ new WeakMap(), vu = {}, Nm = 0, pC = function(n) {
  return n && (n.host || pC(n.parentNode));
}, v4 = function(n, i) {
  return i.map(function(o) {
    if (n.contains(o))
      return o;
    var s = pC(o);
    return s && n.contains(s) ? s : (console.error("aria-hidden", o, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, y4 = function(n, i, o, s) {
  var l = v4(i, Array.isArray(n) ? n : [n]);
  vu[o] || (vu[o] = /* @__PURE__ */ new WeakMap());
  var u = vu[o], d = [], h = /* @__PURE__ */ new Set(), g = new Set(l), p = function(m) {
    !m || h.has(m) || (h.add(m), p(m.parentNode));
  };
  l.forEach(p);
  var v = function(m) {
    !m || g.has(m) || Array.prototype.forEach.call(m.children, function(x) {
      if (h.has(x))
        v(x);
      else
        try {
          var T = x.getAttribute(s), w = T !== null && T !== "false", A = (Ds.get(x) || 0) + 1, C = (u.get(x) || 0) + 1;
          Ds.set(x, A), u.set(x, C), d.push(x), A === 1 && w && gu.set(x, !0), C === 1 && x.setAttribute(o, "true"), w || x.setAttribute(s, "true");
        } catch (R) {
          console.error("aria-hidden: cannot operate on ", x, R);
        }
    });
  };
  return v(i), h.clear(), Nm++, function() {
    d.forEach(function(m) {
      var x = Ds.get(m) - 1, T = u.get(m) - 1;
      Ds.set(m, x), u.set(m, T), x || (gu.has(m) || m.removeAttribute(s), gu.delete(m)), T || m.removeAttribute(o);
    }), Nm--, Nm || (Ds = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), gu = /* @__PURE__ */ new WeakMap(), vu = {});
  };
}, gC = function(n, i, o) {
  o === void 0 && (o = "data-aria-hidden");
  var s = Array.from(Array.isArray(n) ? n : [n]), l = g4(n);
  return l ? (s.push.apply(s, Array.from(l.querySelectorAll("[aria-live], script"))), y4(s, l, o, "aria-hidden")) : function() {
    return null;
  };
}, b4 = Object.defineProperty, dn = (n, i) => b4(n, "name", { value: i, configurable: !0 }), wg = "Dialog", [vC, Yk] = /* @__PURE__ */ ei(wg), [x4, ti] = vC(wg), yC = /* @__PURE__ */ dn((n) => {
  const {
    __scopeDialog: i,
    children: o,
    open: s,
    defaultOpen: l,
    onOpenChange: u,
    modal: d = !0
  } = n, h = S.useRef(null), g = S.useRef(null), { nodes: p, registry: v } = eC(), [m, x] = Qi({
    prop: s,
    defaultProp: l ?? !1,
    onChange: u,
    caller: wg
  }), [T, w] = S.useState(0), [A, C] = S.useState(0);
  return /* @__PURE__ */ y.jsx(
    x4,
    {
      scope: i,
      triggerRef: h,
      contentRef: g,
      contentId: Yi(),
      titleId: Yi(),
      descriptionId: Yi(),
      titlePresent: T > 0,
      descriptionPresent: A > 0,
      setTitleCount: w,
      setDescriptionCount: C,
      open: m,
      onOpenChange: x,
      onOpenToggle: S.useCallback(() => x((R) => !R), [x]),
      modal: d,
      branchNodes: p,
      branchRegistry: v,
      children: o
    }
  );
}, "Dialog"), S4 = "DialogTrigger", bC = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: s, ...l } = i, u = ti(S4, s), d = Ye(o, u.triggerRef);
    return /* @__PURE__ */ y.jsx(
      Be.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": u.open,
        "aria-controls": u.open ? u.contentId : void 0,
        "data-state": mf(u.open),
        ...l,
        ref: d,
        onClick: xe(i.onClick, u.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), xC = "DialogPortal", [w4, SC] = vC(xC, {
  forceMount: void 0
}), wC = /* @__PURE__ */ dn((n) => {
  const { __scopeDialog: i, forceMount: o, children: s, container: l } = n, u = ti(xC, i);
  return /* @__PURE__ */ y.jsx(w4, { scope: i, forceMount: o, children: S.Children.map(s, (d) => /* @__PURE__ */ y.jsx(Ei, { present: o || u.open, children: /* @__PURE__ */ y.jsx(uf, { asChild: !0, container: l, children: d }) })) });
}, "DialogPortal"), wp = "DialogOverlay", TC = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const s = SC(wp, i.__scopeDialog), { forceMount: l = s.forceMount, ...u } = i, d = ti(wp, i.__scopeDialog);
    return d.modal ? /* @__PURE__ */ y.jsx(Ei, { present: l || d.open, children: /* @__PURE__ */ y.jsx(E4, { ...u, ref: o }) }) : null;
  }, "DialogOverlay")
), T4 = /* @__PURE__ */ $i("DialogOverlay.RemoveScroll"), E4 = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: s, ...l } = i, u = ti(wp, s), d = KE(), h = Ye(o, d);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside
      // `RemoveScroll` (eg. when `Overlay` and `Content` are siblings). Nested
      // layers are registered as branches and added as shards so they remain
      // scrollable too. See https://github.com/radix-ui/primitives/issues/3423
      /* @__PURE__ */ y.jsx(
        Sg,
        {
          as: T4,
          allowPinchZoom: !0,
          shards: S.useMemo(
            () => [u.contentRef, ...u.branchNodes.map((g) => ({ current: g }))],
            [u.contentRef, u.branchNodes]
          ),
          children: /* @__PURE__ */ y.jsx(
            Be.div,
            {
              "data-state": mf(u.open),
              ...l,
              ref: h,
              style: { pointerEvents: "auto", ...l.style }
            }
          )
        }
      )
    );
  }, "DialogOverlayImpl")
), bl = "DialogContent", EC = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const s = SC(bl, i.__scopeDialog), { forceMount: l = s.forceMount, ...u } = i, d = ti(bl, i.__scopeDialog);
    return /* @__PURE__ */ y.jsx(Ei, { present: l || d.open, children: d.modal ? /* @__PURE__ */ y.jsx(C4, { ...u, ref: o }) : /* @__PURE__ */ y.jsx(A4, { ...u, ref: o }) });
  }, "DialogContent")
), C4 = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const s = ti(bl, i.__scopeDialog), l = S.useRef(null), u = Ye(o, s.contentRef, l);
    return S.useEffect(() => {
      const d = l.current;
      if (d) return gC(d);
    }, []), /* @__PURE__ */ y.jsx(
      CC,
      {
        ...i,
        ref: u,
        trapFocus: s.open,
        disableOutsidePointerEvents: s.open,
        onCloseAutoFocus: xe(i.onCloseAutoFocus, (d) => {
          d.preventDefault(), s.triggerRef.current?.focus();
        }),
        onPointerDownOutside: xe(i.onPointerDownOutside, (d) => {
          const h = d.detail.originalEvent, g = h.button === 0 && h.ctrlKey === !0;
          (h.button === 2 || g) && d.preventDefault();
        }),
        onFocusOutside: xe(
          i.onFocusOutside,
          (d) => d.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), A4 = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const s = ti(bl, i.__scopeDialog), l = S.useRef(!1), u = S.useRef(!1);
    return /* @__PURE__ */ y.jsx(
      CC,
      {
        ...i,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (d) => {
          i.onCloseAutoFocus?.(d), d.defaultPrevented || (l.current || s.triggerRef.current?.focus(), d.preventDefault()), l.current = !1, u.current = !1;
        },
        onInteractOutside: (d) => {
          i.onInteractOutside?.(d), d.defaultPrevented || (l.current = !0, d.detail.originalEvent.type === "pointerdown" && (u.current = !0));
          const h = d.target;
          s.triggerRef.current?.contains(h) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && u.current && d.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), CC = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const {
      __scopeDialog: s,
      trapFocus: l,
      onOpenAutoFocus: u,
      onCloseAutoFocus: d,
      "aria-describedby": h,
      children: g,
      ...p
    } = i, v = ti(bl, s);
    return ff(), /* @__PURE__ */ y.jsx(WE, { registry: v.branchRegistry, children: /* @__PURE__ */ y.jsx(
      QE,
      {
        asChild: !0,
        loop: !0,
        trapped: l,
        branches: v.branchNodes,
        onMountAutoFocus: u,
        onUnmountAutoFocus: d,
        children: /* @__PURE__ */ y.jsx(
          cf,
          {
            role: "dialog",
            id: v.contentId,
            "aria-labelledby": v.titlePresent ? v.titleId : void 0,
            "aria-describedby": v.descriptionPresent ? DC(h, v.descriptionId) : h,
            "data-state": mf(v.open),
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
), AC = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: s, ...l } = i, u = ti("DialogTitle", s), { setTitleCount: d } = u;
    return ut(() => (d((h) => h + 1), () => d((h) => h - 1)), [d]), /* @__PURE__ */ y.jsx(Be.h2, { id: u.titleId, ...l, ref: o });
  }, "DialogTitle")
), RC = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: s, ...l } = i, u = ti("DialogDescription", s), { setDescriptionCount: d } = u;
    return ut(() => (d((h) => h + 1), () => d((h) => h - 1)), [d]), /* @__PURE__ */ y.jsx(Be.p, { id: u.descriptionId, ...l, ref: o });
  }, "DialogDescription")
), R4 = "DialogClose", hf = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ dn(function(i, o) {
    const { __scopeDialog: s, ...l } = i, u = ti(R4, s);
    return /* @__PURE__ */ y.jsx(
      Be.button,
      {
        type: "button",
        ...l,
        ref: o,
        onClick: xe(i.onClick, () => u.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function DC(...n) {
  const i = /* @__PURE__ */ new Set();
  for (const o of n)
    if (typeof o == "string")
      for (const s of String(o).trim().split(/\s+/))
        s && i.add(s);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
dn(DC, "concatAriaDescribedby");
function mf(n) {
  return n ? "open" : "closed";
}
dn(mf, "getState");
var D4 = Object.defineProperty, O4 = (n, i) => D4(n, "name", { value: i, configurable: !0 });
function Tg(n) {
  const [i, o] = S.useState(void 0);
  return ut(() => {
    if (n) {
      o({ width: n.offsetWidth, height: n.offsetHeight });
      let s = 0;
      const l = new ResizeObserver((u) => {
        if (!Array.isArray(u) || !u.length)
          return;
        const d = u[0];
        window.cancelAnimationFrame(s), s = window.requestAnimationFrame(() => {
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
        window.cancelAnimationFrame(s), l.unobserve(n);
      };
    } else
      o(void 0);
  }, [n]), i;
}
O4(Tg, "useSize");
var M4 = Object.defineProperty, Wi = (n, i) => M4(n, "name", { value: i, configurable: !0 }), Eg = "Checkbox", [N4, Fk] = /* @__PURE__ */ ei(Eg), [_4, Cg] = N4(Eg);
function OC(n) {
  const {
    __scopeCheckbox: i,
    checked: o,
    children: s,
    defaultChecked: l,
    disabled: u,
    form: d,
    name: h,
    onCheckedChange: g,
    required: p,
    value: v = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = n, [x, T] = Qi({
    prop: o,
    defaultProp: l ?? !1,
    onChange: g,
    caller: Eg
  }), [w, A] = S.useState(null), [C, R] = S.useState(null), _ = S.useRef(!1), [D, M] = S.useReducer(
    (O) => O + 1,
    0
  ), B = w ? !!d || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), U = {
    checked: x,
    disabled: u,
    setChecked: T,
    control: w,
    setControl: A,
    name: h,
    form: d,
    value: v,
    hasConsumerStoppedPropagationRef: _,
    userInteractionCount: D,
    onUserInteraction: M,
    required: p,
    defaultChecked: Fi(l) ? !1 : l,
    isFormControl: B,
    bubbleInput: C,
    setBubbleInput: R
  };
  return /* @__PURE__ */ y.jsx(
    _4,
    {
      scope: i,
      ...U,
      children: MC(m) ? m(U) : s
    }
  );
}
Wi(OC, "CheckboxProvider");
var j4 = "CheckboxTrigger", z4 = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ Wi(function({ __scopeCheckbox: i, onKeyDown: o, onClick: s, ...l }, u) {
    const {
      control: d,
      value: h,
      disabled: g,
      checked: p,
      required: v,
      setControl: m,
      setChecked: x,
      hasConsumerStoppedPropagationRef: T,
      onUserInteraction: w,
      isFormControl: A,
      bubbleInput: C
    } = Cg(j4, i), R = Ye(u, m), _ = S.useRef(p);
    return S.useEffect(() => {
      const D = d?.form;
      if (D) {
        const M = /* @__PURE__ */ Wi(() => x(_.current), "reset");
        return D.addEventListener("reset", M), () => D.removeEventListener("reset", M);
      }
    }, [d, x]), /* @__PURE__ */ y.jsx(
      Be.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Fi(p) ? "mixed" : p,
        "aria-required": v,
        "data-state": Ag(p),
        "data-disabled": g ? "" : void 0,
        disabled: g,
        value: h,
        ...l,
        ref: R,
        onKeyDown: xe(o, (D) => {
          D.key === "Enter" && D.preventDefault();
        }),
        onClick: xe(s, (D) => {
          w(), x((M) => Fi(M) ? !0 : !M), C && A && (T.current = D.isPropagationStopped(), T.current || D.stopPropagation());
        })
      }
    );
  }, "CheckboxTrigger")
), L4 = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Wi(function(i, o) {
    const {
      __scopeCheckbox: s,
      name: l,
      checked: u,
      defaultChecked: d,
      required: h,
      disabled: g,
      value: p,
      onCheckedChange: v,
      form: m,
      ...x
    } = i;
    return /* @__PURE__ */ y.jsx(
      OC,
      {
        __scopeCheckbox: s,
        checked: u,
        defaultChecked: d,
        disabled: g,
        required: h,
        onCheckedChange: v,
        name: l,
        form: m,
        value: p,
        internal_do_not_use_render: ({ isFormControl: T }) => /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
          /* @__PURE__ */ y.jsx(
            z4,
            {
              ...x,
              ref: o,
              __scopeCheckbox: s
            }
          ),
          T && /* @__PURE__ */ y.jsx(
            B4,
            {
              __scopeCheckbox: s
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), V4 = "CheckboxIndicator", P4 = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Wi(function(i, o) {
    const { __scopeCheckbox: s, forceMount: l, ...u } = i, d = Cg(V4, s);
    return /* @__PURE__ */ y.jsx(
      Ei,
      {
        present: l || Fi(d.checked) || d.checked === !0,
        children: /* @__PURE__ */ y.jsx(
          Be.span,
          {
            "data-state": Ag(d.checked),
            "data-disabled": d.disabled ? "" : void 0,
            ...u,
            ref: o,
            style: { pointerEvents: "none", ...i.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), k4 = "CheckboxBubbleInput", B4 = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Wi(function({ __scopeCheckbox: i, onClick: o, ...s }, l) {
    const {
      control: u,
      hasConsumerStoppedPropagationRef: d,
      userInteractionCount: h,
      checked: g,
      defaultChecked: p,
      required: v,
      disabled: m,
      name: x,
      value: T,
      form: w,
      bubbleInput: A,
      setBubbleInput: C
    } = Cg(k4, i), R = Ye(l, C), _ = Tg(u), D = S.useRef(!1), M = S.useRef(g), B = S.useRef(h);
    S.useEffect(() => {
      const O = A;
      if (!O) return;
      const N = window.HTMLInputElement.prototype, Q = Object.getOwnPropertyDescriptor(
        N,
        "checked"
      ).set, ue = h !== B.current;
      B.current = h;
      const ie = M.current !== g;
      M.current = g;
      const te = !(ue && d.current);
      if (ie && Q) {
        D.current = !ue;
        const fe = new Event("click", { bubbles: te });
        O.indeterminate = Fi(g), Q.call(O, Fi(g) ? !1 : g), O.dispatchEvent(fe), D.current = !1;
      }
    }, [A, g, d, h]);
    const U = S.useRef(Fi(g) ? !1 : g);
    return /* @__PURE__ */ y.jsx(
      Be.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: p ?? U.current,
        required: v,
        disabled: m,
        name: x,
        value: T,
        form: w,
        ...s,
        tabIndex: -1,
        ref: R,
        onClick: xe(o, (O) => {
          D.current && O.stopPropagation();
        }),
        style: {
          ...s.style,
          ..._,
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
function MC(n) {
  return typeof n == "function";
}
Wi(MC, "isFunction");
function Fi(n) {
  return n === "indeterminate";
}
Wi(Fi, "isIndeterminate");
function Ag(n) {
  return Fi(n) ? "indeterminate" : n ? "checked" : "unchecked";
}
Wi(Ag, "getState");
const U4 = ["top", "right", "bottom", "left"], La = Math.min, Xi = Math.max, Xu = Math.round, yu = Math.floor, Ki = (n) => ({
  x: n,
  y: n
}), H4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function NC(n, i, o) {
  return Xi(n, La(i, o));
}
function ea(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function Va(n) {
  return n.split("-")[0];
}
function Ks(n) {
  return n.split("-")[1];
}
function Rg(n) {
  return n === "x" ? "y" : "x";
}
function Dg(n) {
  return n === "y" ? "height" : "width";
}
function yi(n) {
  const i = n[0];
  return i === "t" || i === "b" ? "y" : "x";
}
function Og(n) {
  return Rg(yi(n));
}
function I4(n, i, o) {
  o === void 0 && (o = !1);
  const s = Ks(n), l = Og(n), u = Dg(l);
  let d = l === "x" ? s === (o ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return i.reference[u] > i.floating[u] && (d = Ku(d)), [d, Ku(d)];
}
function q4(n) {
  const i = Ku(n);
  return [Tp(n), i, Tp(i)];
}
function Tp(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const y1 = ["left", "right"], b1 = ["right", "left"], G4 = ["top", "bottom"], Y4 = ["bottom", "top"];
function F4(n, i, o) {
  switch (n) {
    case "top":
    case "bottom":
      return o ? i ? b1 : y1 : i ? y1 : b1;
    case "left":
    case "right":
      return i ? G4 : Y4;
    default:
      return [];
  }
}
function X4(n, i, o, s) {
  const l = Ks(n);
  let u = F4(Va(n), o === "start", s);
  return l && (u = u.map((d) => d + "-" + l), i && (u = u.concat(u.map(Tp)))), u;
}
function Ku(n) {
  const i = Va(n);
  return H4[i] + n.slice(i.length);
}
function K4(n) {
  var i, o, s, l;
  return {
    top: (i = n.top) != null ? i : 0,
    right: (o = n.right) != null ? o : 0,
    bottom: (s = n.bottom) != null ? s : 0,
    left: (l = n.left) != null ? l : 0
  };
}
function _C(n) {
  return typeof n != "number" ? K4(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Zu(n) {
  const {
    x: i,
    y: o,
    width: s,
    height: l
  } = n;
  return {
    width: s,
    height: l,
    top: o,
    left: i,
    right: i + s,
    bottom: o + l,
    x: i,
    y: o
  };
}
function x1(n, i, o) {
  let {
    reference: s,
    floating: l
  } = n;
  const u = yi(i), d = Og(i), h = Dg(d), g = Va(i), p = u === "y", v = s.x + s.width / 2 - l.width / 2, m = s.y + s.height / 2 - l.height / 2, x = s[h] / 2 - l[h] / 2;
  let T;
  switch (g) {
    case "top":
      T = {
        x: v,
        y: s.y - l.height
      };
      break;
    case "bottom":
      T = {
        x: v,
        y: s.y + s.height
      };
      break;
    case "right":
      T = {
        x: s.x + s.width,
        y: m
      };
      break;
    case "left":
      T = {
        x: s.x - l.width,
        y: m
      };
      break;
    default:
      T = {
        x: s.x,
        y: s.y
      };
  }
  const w = Ks(i);
  return w && (T[d] += x * (w === "end" ? 1 : -1) * (o && p ? -1 : 1)), T;
}
async function Z4(n, i) {
  var o;
  i === void 0 && (i = {});
  const {
    x: s,
    y: l,
    platform: u,
    rects: d,
    elements: h,
    strategy: g
  } = n, {
    boundary: p = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: m = "floating",
    altBoundary: x = !1,
    padding: T = 0
  } = ea(i, n), w = _C(T), C = h[x ? m === "floating" ? "reference" : "floating" : m], R = Zu(await u.getClippingRect({
    element: (o = await (u.isElement == null ? void 0 : u.isElement(C))) == null || o ? C : C.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(h.floating)),
    boundary: p,
    rootBoundary: v,
    strategy: g
  })), _ = m === "floating" ? {
    x: s,
    y: l,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, D = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h.floating)), M = await (u.isElement == null ? void 0 : u.isElement(D)) && await (u.getScale == null ? void 0 : u.getScale(D)) || {
    x: 1,
    y: 1
  }, B = Zu(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: h,
    rect: _,
    offsetParent: D,
    strategy: g
  }) : _);
  return {
    top: (R.top - B.top + w.top) / M.y,
    bottom: (B.bottom - R.bottom + w.bottom) / M.y,
    left: (R.left - B.left + w.left) / M.x,
    right: (B.right - R.right + w.right) / M.x
  };
}
const $4 = 50, Q4 = async (n, i, o) => {
  const {
    placement: s = "bottom",
    strategy: l = "absolute",
    middleware: u = [],
    platform: d
  } = o, h = d.detectOverflow ? d : {
    ...d,
    detectOverflow: Z4
  }, g = await (d.isRTL == null ? void 0 : d.isRTL(i));
  let p = await d.getElementRects({
    reference: n,
    floating: i,
    strategy: l
  }), {
    x: v,
    y: m
  } = x1(p, s, g), x = s, T = 0;
  const w = {};
  for (let A = 0; A < u.length; A++) {
    const C = u[A];
    if (!C)
      continue;
    const {
      name: R,
      fn: _
    } = C, {
      x: D,
      y: M,
      data: B,
      reset: U
    } = await _({
      x: v,
      y: m,
      initialPlacement: s,
      placement: x,
      strategy: l,
      middlewareData: w,
      rects: p,
      platform: h,
      elements: {
        reference: n,
        floating: i
      }
    });
    v = D ?? v, m = M ?? m, w[R] = {
      ...w[R],
      ...B
    }, U && T < $4 && (T++, typeof U == "object" && (U.placement && (x = U.placement), U.rects && (p = U.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: i,
      strategy: l
    }) : U.rects), {
      x: v,
      y: m
    } = x1(p, x, g)), A = -1);
  }
  return {
    x: v,
    y: m,
    placement: x,
    strategy: l,
    middlewareData: w
  };
}, J4 = (n) => ({
  name: "arrow",
  options: n,
  async fn(i) {
    const {
      x: o,
      y: s,
      placement: l,
      rects: u,
      platform: d,
      elements: h,
      middlewareData: g
    } = i, {
      element: p,
      padding: v = 0
    } = ea(n, i) || {};
    if (p == null)
      return {};
    const m = _C(v), x = {
      x: o,
      y: s
    }, T = Og(l), w = Dg(T), A = await d.getDimensions(p), C = T === "y", R = C ? "top" : "left", _ = C ? "bottom" : "right", D = C ? "clientHeight" : "clientWidth", M = u.reference[w] + u.reference[T] - x[T] - u.floating[w], B = x[T] - u.reference[T], U = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
    let O = U ? U[D] : 0;
    (!O || !await (d.isElement == null ? void 0 : d.isElement(U))) && (O = h.floating[D] || u.floating[w]);
    const N = M / 2 - B / 2, F = O / 2 - A[w] / 2 - 1, Q = La(m[R], F), ue = La(m[_], F), ie = O - A[w] - ue, te = O / 2 - A[w] / 2 + N, fe = NC(Q, te, ie), he = !g.arrow && Ks(l) != null && te !== fe && u.reference[w] / 2 - (te < Q ? Q : ue) - A[w] / 2 < 0, G = he ? te < Q ? te - Q : te - ie : 0;
    return {
      [T]: x[T] + G,
      data: {
        [T]: fe,
        centerOffset: te - fe - G,
        ...he && {
          alignmentOffset: G
        }
      },
      reset: he
    };
  }
}), W4 = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(i) {
      var o, s;
      const {
        placement: l,
        middlewareData: u,
        rects: d,
        initialPlacement: h,
        platform: g,
        elements: p
      } = i, {
        mainAxis: v = !0,
        crossAxis: m = !0,
        fallbackPlacements: x,
        fallbackStrategy: T = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: A = !0,
        ...C
      } = ea(n, i);
      if ((o = u.arrow) != null && o.alignmentOffset)
        return {};
      const R = Va(l), _ = yi(h), D = Va(h) === h, M = await (g.isRTL == null ? void 0 : g.isRTL(p.floating)), B = x || (D || !A ? [Ku(h)] : q4(h)), U = w !== "none";
      !x && U && B.push(...X4(h, A, w, M));
      const O = [h, ...B], N = await g.detectOverflow(i, C), F = [];
      let Q = ((s = u.flip) == null ? void 0 : s.overflows) || [];
      if (v && F.push(N[R]), m) {
        const fe = I4(l, d, M);
        F.push(N[fe[0]], N[fe[1]]);
      }
      if (Q = [...Q, {
        placement: l,
        overflows: F
      }], !F.every((fe) => fe <= 0)) {
        var ue, ie;
        const fe = (((ue = u.flip) == null ? void 0 : ue.index) || 0) + 1, he = O[fe];
        if (he && (!(m === "alignment" ? _ !== yi(he) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Q.every((J) => yi(J.placement) === _ ? J.overflows[0] > 0 : !0)))
          return {
            data: {
              index: fe,
              overflows: Q
            },
            reset: {
              placement: he
            }
          };
        let G = (ie = Q.filter((X) => X.overflows[0] <= 0).sort((X, J) => X.overflows[1] - J.overflows[1])[0]) == null ? void 0 : ie.placement;
        if (!G)
          switch (T) {
            case "bestFit": {
              var te;
              const X = (te = Q.filter((J) => {
                if (U) {
                  const se = yi(J.placement);
                  return se === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  se === "y";
                }
                return !0;
              }).map((J) => [J.placement, J.overflows.filter((se) => se > 0).reduce((se, $) => se + $, 0)]).sort((J, se) => J[1] - se[1])[0]) == null ? void 0 : te[0];
              X && (G = X);
              break;
            }
            case "initialPlacement":
              G = h;
              break;
          }
        if (l !== G)
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
function S1(n, i) {
  return {
    top: n.top - i.height,
    right: n.right - i.width,
    bottom: n.bottom - i.height,
    left: n.left - i.width
  };
}
function w1(n) {
  return U4.some((i) => n[i] >= 0);
}
const eL = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(i) {
      const {
        rects: o,
        platform: s
      } = i, {
        strategy: l = "referenceHidden",
        ...u
      } = ea(n, i);
      switch (l) {
        case "referenceHidden": {
          const d = await s.detectOverflow(i, {
            ...u,
            elementContext: "reference"
          }), h = S1(d, o.reference);
          return {
            data: {
              referenceHiddenOffsets: h,
              referenceHidden: w1(h)
            }
          };
        }
        case "escaped": {
          const d = await s.detectOverflow(i, {
            ...u,
            altBoundary: !0
          }), h = S1(d, o.floating);
          return {
            data: {
              escapedOffsets: h,
              escaped: w1(h)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, jC = /* @__PURE__ */ new Set(["left", "top"]);
async function tL(n, i) {
  const {
    placement: o,
    platform: s,
    elements: l
  } = n, u = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), d = Va(o), h = Ks(o), g = yi(o) === "y", p = jC.has(d) ? -1 : 1, v = u && g ? -1 : 1, m = ea(i, n);
  let {
    mainAxis: x,
    crossAxis: T,
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
  return h && typeof w == "number" && (T = h === "end" ? w * -1 : w), g ? {
    x: T * v,
    y: x * p
  } : {
    x: x * p,
    y: T * v
  };
}
const nL = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(i) {
      var o, s;
      const {
        x: l,
        y: u,
        placement: d,
        middlewareData: h
      } = i, g = await tL(i, n);
      return d === ((o = h.offset) == null ? void 0 : o.placement) && (s = h.arrow) != null && s.alignmentOffset ? {} : {
        x: l + g.x,
        y: u + g.y,
        data: {
          ...g,
          placement: d
        }
      };
    }
  };
}, iL = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(i) {
      const {
        x: o,
        y: s,
        placement: l,
        platform: u
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
      } = ea(n, i), v = {
        x: o,
        y: s
      }, m = await u.detectOverflow(i, p), x = yi(l), T = Rg(x);
      let w = v[T], A = v[x];
      const C = (_, D) => NC(D + m[_ === "y" ? "top" : "left"], D, D - m[_ === "y" ? "bottom" : "right"]);
      d && (w = C(T, w)), h && (A = C(x, A));
      const R = g.fn({
        ...i,
        [T]: w,
        [x]: A
      });
      return {
        ...R,
        data: {
          x: R.x - o,
          y: R.y - s,
          enabled: {
            [T]: d,
            [x]: h
          }
        }
      };
    }
  };
}, aL = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(i) {
      var o, s;
      const {
        x: l,
        y: u,
        placement: d,
        rects: h,
        middlewareData: g
      } = i, {
        offset: p = 0,
        mainAxis: v = !0,
        crossAxis: m = !0
      } = ea(n, i), x = {
        x: l,
        y: u
      }, T = yi(d), w = Rg(T);
      let A = x[w], C = x[T];
      const R = ea(p, i), _ = typeof R == "number" ? {
        mainAxis: R,
        crossAxis: 0
      } : {
        mainAxis: (o = R.mainAxis) != null ? o : 0,
        crossAxis: (s = R.crossAxis) != null ? s : 0
      };
      if (v) {
        const B = w === "y" ? "height" : "width", U = h.reference[w] - h.floating[B] + _.mainAxis, O = h.reference[w] + h.reference[B] - _.mainAxis;
        A < U ? A = U : A > O && (A = O);
      }
      if (m) {
        var D, M;
        const B = w === "y" ? "width" : "height", U = jC.has(Va(d)), O = h.reference[T] - h.floating[B] + (U && ((D = g.offset) == null ? void 0 : D[T]) || 0) + (U ? 0 : _.crossAxis), N = h.reference[T] + h.reference[B] + (U ? 0 : ((M = g.offset) == null ? void 0 : M[T]) || 0) - (U ? _.crossAxis : 0);
        C < O ? C = O : C > N && (C = N);
      }
      return {
        [w]: A,
        [T]: C
      };
    }
  };
}, oL = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(i) {
      const {
        placement: o,
        rects: s,
        platform: l,
        elements: u
      } = i, {
        apply: d = () => {
        },
        ...h
      } = ea(n, i), g = await l.detectOverflow(i, h), p = Va(o), v = Ks(o), m = yi(o) === "y", {
        width: x,
        height: T
      } = s.floating;
      let w, A;
      p === "top" || p === "bottom" ? (w = p, A = v === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (A = p, w = v === "end" ? "top" : "bottom");
      const C = T - g.top - g.bottom, R = x - g.left - g.right, _ = La(T - g[w], C), D = La(x - g[A], R), M = i.middlewareData.shift, B = !M;
      let U = _, O = D;
      M != null && M.enabled.x && (O = R), M != null && M.enabled.y && (U = C), B && !v && (m ? O = x - 2 * Xi(g.left, g.right) : U = T - 2 * Xi(g.top, g.bottom)), await d({
        ...i,
        availableWidth: O,
        availableHeight: U
      });
      const N = await l.getDimensions(u.floating);
      return x !== N.width || T !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pf() {
  return typeof window < "u";
}
function Zs(n) {
  return zC(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function fn(n) {
  var i;
  return (n == null || (i = n.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function ia(n) {
  var i;
  return (i = (zC(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : i.documentElement;
}
function zC(n) {
  return pf() ? n instanceof Node || n instanceof fn(n).Node : !1;
}
function wi(n) {
  return pf() ? n instanceof Element || n instanceof fn(n).Element : !1;
}
function Ua(n) {
  return pf() ? n instanceof HTMLElement || n instanceof fn(n).HTMLElement : !1;
}
function T1(n) {
  return !pf() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof fn(n).ShadowRoot;
}
function gf(n) {
  const {
    overflow: i,
    overflowX: o,
    overflowY: s,
    display: l
  } = Ti(n);
  return /auto|scroll|overlay|hidden|clip/.test(i + s + o) && l !== "inline" && l !== "contents";
}
function sL(n) {
  return /^(table|td|th)$/.test(Zs(n));
}
function vf(n) {
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
const rL = /transform|translate|scale|rotate|perspective|filter/, lL = /paint|layout|strict|content/, vo = (n) => !!n && n !== "none";
let _m;
function Mg(n) {
  const i = wi(n) ? Ti(n) : n;
  return vo(i.transform) || vo(i.translate) || vo(i.scale) || vo(i.rotate) || vo(i.perspective) || !Ng() && (vo(i.backdropFilter) || vo(i.filter)) || rL.test(i.willChange || "") || lL.test(i.contain || "");
}
function cL(n) {
  let i = Co(n);
  for (; Ua(i) && !xl(i); ) {
    if (Mg(i))
      return i;
    if (vf(i))
      return null;
    i = Co(i);
  }
  return null;
}
function Ng() {
  return _m == null && (_m = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), _m;
}
function xl(n) {
  return /^(html|body|#document)$/.test(Zs(n));
}
function Ti(n) {
  return fn(n).getComputedStyle(n);
}
function yf(n) {
  return wi(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Co(n) {
  if (Zs(n) === "html")
    return n;
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    T1(n) && n.host || // Fallback.
    ia(n)
  );
  return T1(i) ? i.host : i;
}
function LC(n) {
  const i = Co(n);
  return xl(i) ? (n.ownerDocument || n).body : Ua(i) && gf(i) ? i : LC(i);
}
function Sl(n, i, o) {
  var s;
  i === void 0 && (i = []), o === void 0 && (o = !0);
  const l = LC(n), u = l === ((s = n.ownerDocument) == null ? void 0 : s.body), d = fn(l);
  if (u) {
    const h = Ep(d);
    return i.concat(d, d.visualViewport || [], gf(l) ? l : [], h && o ? Sl(h) : []);
  } else
    return i.concat(l, Sl(l, [], o));
}
function Ep(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function VC(n) {
  const i = Ti(n);
  let o = parseFloat(i.width) || 0, s = parseFloat(i.height) || 0;
  const l = Ua(n), u = l ? n.offsetWidth : o, d = l ? n.offsetHeight : s, h = Xu(o) !== u || Xu(s) !== d;
  return h && (o = u, s = d), {
    width: o,
    height: s,
    $: h
  };
}
function _g(n) {
  return wi(n) ? n : n.contextElement;
}
function Ps(n) {
  const i = _g(n);
  if (!Ua(i))
    return Ki(1);
  const o = i.getBoundingClientRect(), {
    width: s,
    height: l,
    $: u
  } = VC(i);
  let d = (u ? Xu(o.width) : o.width) / s, h = (u ? Xu(o.height) : o.height) / l;
  return (!d || !Number.isFinite(d)) && (d = 1), (!h || !Number.isFinite(h)) && (h = 1), {
    x: d,
    y: h
  };
}
const uL = /* @__PURE__ */ Ki(0);
function PC(n) {
  const i = fn(n);
  return !Ng() || !i.visualViewport ? uL : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function fL(n, i, o) {
  return i === void 0 && (i = !1), !!o && i && o === fn(n);
}
function Ao(n, i, o, s) {
  i === void 0 && (i = !1), o === void 0 && (o = !1);
  const l = n.getBoundingClientRect(), u = _g(n);
  let d = Ki(1);
  i && (s ? wi(s) && (d = Ps(s)) : d = Ps(n));
  const h = fL(u, o, s) ? PC(u) : Ki(0);
  let g = (l.left + h.x) / d.x, p = (l.top + h.y) / d.y, v = l.width / d.x, m = l.height / d.y;
  if (u && s) {
    const x = fn(u), T = wi(s) ? fn(s) : s;
    let w = x, A = Ep(w);
    for (; A && T !== w; ) {
      const C = Ps(A), R = A.getBoundingClientRect(), _ = Ti(A), D = R.left + (A.clientLeft + parseFloat(_.paddingLeft)) * C.x, M = R.top + (A.clientTop + parseFloat(_.paddingTop)) * C.y;
      g *= C.x, p *= C.y, v *= C.x, m *= C.y, g += D, p += M, w = fn(A), A = Ep(w);
    }
  }
  return Zu({
    width: v,
    height: m,
    x: g,
    y: p
  });
}
function bf(n, i) {
  const o = yf(n).scrollLeft;
  return i ? i.left + o : Ao(ia(n)).left + o;
}
function kC(n, i) {
  const o = n.getBoundingClientRect(), s = o.left + i.scrollLeft - bf(n, o), l = o.top + i.scrollTop;
  return {
    x: s,
    y: l
  };
}
function dL(n) {
  let {
    elements: i,
    rect: o,
    offsetParent: s,
    strategy: l
  } = n;
  const u = l === "fixed", d = ia(s), h = i ? vf(i.floating) : !1;
  if (s === d || h && u)
    return o;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = Ki(1);
  const v = Ki(0), m = Ua(s);
  if ((m || !u) && ((Zs(s) !== "body" || gf(d)) && (g = yf(s)), m)) {
    const T = Ao(s);
    p = Ps(s), v.x = T.x + s.clientLeft, v.y = T.y + s.clientTop;
  }
  const x = d && !m && !u ? kC(d, g) : Ki(0);
  return {
    width: o.width * p.x,
    height: o.height * p.y,
    x: o.x * p.x - g.scrollLeft * p.x + v.x + x.x,
    y: o.y * p.y - g.scrollTop * p.y + v.y + x.y
  };
}
function hL(n) {
  return n.getClientRects ? Array.from(n.getClientRects()) : [];
}
function mL(n) {
  const i = yf(n), o = n.ownerDocument.body, s = Xi(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), l = Xi(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let u = -i.scrollLeft + bf(n);
  const d = -i.scrollTop;
  return Ti(o).direction === "rtl" && (u += Xi(n.clientWidth, o.clientWidth) - s), {
    width: s,
    height: l,
    x: u,
    y: d
  };
}
const pL = 25;
function gL(n, i, o) {
  o === void 0 && (o = "viewport");
  const s = o === "layoutViewport", l = fn(n), u = ia(n), d = l.visualViewport;
  let h = u.clientWidth, g = u.clientHeight, p = 0, v = 0;
  if (d) {
    const x = !Ng() || i === "fixed";
    s ? x || (p = -d.offsetLeft, v = -d.offsetTop) : (h = d.width, g = d.height, x && (p = d.offsetLeft, v = d.offsetTop));
  }
  if (bf(u) <= 0) {
    const x = u.ownerDocument, T = x.body, w = getComputedStyle(T), A = x.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, C = Math.abs(u.clientWidth - T.clientWidth - A), R = getComputedStyle(u).scrollbarGutter === "stable both-edges" ? C / 2 : C;
    R <= pL && (h -= R);
  }
  return {
    width: h,
    height: g,
    x: p,
    y: v
  };
}
function vL(n, i) {
  const o = Ao(n, !0, i === "fixed"), s = o.top + n.clientTop, l = o.left + n.clientLeft, u = Ps(n), d = n.clientWidth * u.x, h = n.clientHeight * u.y, g = l * u.x, p = s * u.y;
  return {
    width: d,
    height: h,
    x: g,
    y: p
  };
}
function E1(n, i, o) {
  let s;
  if (i === "viewport" || i === "layoutViewport")
    s = gL(n, o, i);
  else if (i === "document")
    s = mL(ia(n));
  else if (wi(i))
    s = vL(i, o);
  else {
    const l = PC(n);
    s = {
      x: i.x - l.x,
      y: i.y - l.y,
      width: i.width,
      height: i.height
    };
  }
  return Zu(s);
}
function yL(n, i) {
  const o = i.get(n);
  if (o)
    return o;
  let s = Sl(n, [], !1).filter((h) => wi(h) && Zs(h) !== "body"), l = null;
  const u = Ti(n).position === "fixed";
  let d = u ? Co(n) : n;
  for (; wi(d) && !xl(d); ) {
    const h = Ti(d), g = Mg(d), p = l ? l.position : u ? "fixed" : "";
    !g && (p === "fixed" || p === "absolute" && h.position === "static") ? s = s.filter((m) => m !== d) : l = h, d = Co(d);
  }
  return i.set(n, s), s;
}
function bL(n) {
  let {
    element: i,
    boundary: o,
    rootBoundary: s,
    strategy: l
  } = n;
  const d = [...o === "clippingAncestors" ? vf(i) ? [] : yL(i, this._c) : [].concat(o), s], h = E1(i, d[0], l);
  let g = h.top, p = h.right, v = h.bottom, m = h.left;
  for (let x = 1; x < d.length; x++) {
    const T = E1(i, d[x], l);
    g = Xi(T.top, g), p = La(T.right, p), v = La(T.bottom, v), m = Xi(T.left, m);
  }
  return {
    width: p - m,
    height: v - g,
    x: m,
    y: g
  };
}
function xL(n) {
  const {
    width: i,
    height: o
  } = VC(n);
  return {
    width: i,
    height: o
  };
}
function SL(n, i, o) {
  const s = Ua(i), l = ia(i), u = o === "fixed", d = Ao(n, !0, u, i);
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = Ki(0);
  if ((s || !u) && ((Zs(i) !== "body" || gf(l)) && (h = yf(i)), s)) {
    const x = Ao(i, !0, u, i);
    g.x = x.x + i.clientLeft, g.y = x.y + i.clientTop;
  }
  !s && l && (g.x = bf(l));
  const p = l && !s && !u ? kC(l, h) : Ki(0), v = d.left + h.scrollLeft - g.x - p.x, m = d.top + h.scrollTop - g.y - p.y;
  return {
    x: v,
    y: m,
    width: d.width,
    height: d.height
  };
}
function jm(n) {
  return Ti(n).position === "static";
}
function C1(n, i) {
  if (!Ua(n) || Ti(n).position === "fixed")
    return null;
  if (i)
    return i(n);
  let o = n.offsetParent;
  return ia(n) === o && (o = o.ownerDocument.body), o;
}
function BC(n, i) {
  const o = fn(n);
  if (vf(n))
    return o;
  if (!Ua(n)) {
    let l = Co(n);
    for (; l && !xl(l); ) {
      if (wi(l) && !jm(l))
        return l;
      l = Co(l);
    }
    return o;
  }
  let s = C1(n, i);
  for (; s && sL(s) && jm(s); )
    s = C1(s, i);
  return s && xl(s) && jm(s) && !Mg(s) ? o : s || cL(n) || o;
}
const wL = async function(n) {
  const i = this.getOffsetParent || BC, o = this.getDimensions, s = await o(n.floating);
  return {
    reference: SL(n.reference, await i(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function TL(n) {
  return Ti(n).direction === "rtl";
}
const EL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: dL,
  getDocumentElement: ia,
  getClippingRect: bL,
  getOffsetParent: BC,
  getElementRects: wL,
  getClientRects: hL,
  getDimensions: xL,
  getScale: Ps,
  isElement: wi,
  isRTL: TL
};
function UC(n, i) {
  return n.x === i.x && n.y === i.y && n.width === i.width && n.height === i.height;
}
function CL(n, i, o) {
  let s = null, l;
  const u = ia(n);
  function d() {
    var v;
    clearTimeout(l), (v = s) == null || v.disconnect(), s = null;
  }
  function h(v, m) {
    v === void 0 && (v = !1), m === void 0 && (m = 1), d();
    const x = n.getBoundingClientRect(), {
      left: T,
      top: w,
      width: A,
      height: C
    } = x;
    if (v || i(), !A || !C)
      return;
    const R = yu(w), _ = yu(u.clientWidth - (T + A)), D = yu(u.clientHeight - (w + C)), M = yu(T), U = {
      rootMargin: -R + "px " + -_ + "px " + -D + "px " + -M + "px",
      threshold: Xi(0, La(1, m)) || 1
    };
    let O = !0;
    function N(F) {
      const Q = F[0].intersectionRatio;
      if (!UC(x, n.getBoundingClientRect()))
        return h();
      if (Q !== m) {
        if (!O)
          return h();
        Q ? h(!1, Q) : l = setTimeout(() => {
          h(!1, 1e-7);
        }, 1e3);
      }
      O = !1;
    }
    try {
      s = new IntersectionObserver(N, {
        ...U,
        // Handle <iframe>s
        root: u.ownerDocument
      });
    } catch {
      s = new IntersectionObserver(N, U);
    }
    s.observe(n);
  }
  const g = fn(n), p = () => h(o);
  return g.addEventListener("resize", p), h(!0), () => {
    g.removeEventListener("resize", p), d();
  };
}
function AL(n, i, o, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: u = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: h = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = s, p = _g(n), v = l || u ? [...p ? Sl(p) : [], ...i ? Sl(i) : []] : [];
  v.forEach((R) => {
    l && R.addEventListener("scroll", o), u && R.addEventListener("resize", o);
  });
  const m = p && h ? CL(p, o, u) : null;
  let x = -1, T = null;
  d && (T = new ResizeObserver((R) => {
    let [_] = R;
    _ && _.target === p && T && i && (T.unobserve(i), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var D;
      (D = T) == null || D.observe(i);
    })), o();
  }), p && !g && T.observe(p), i && T.observe(i));
  let w, A = g ? Ao(n) : null;
  g && C();
  function C() {
    const R = Ao(n);
    A && !UC(A, R) && o(), A = R, w = requestAnimationFrame(C);
  }
  return o(), () => {
    var R;
    v.forEach((_) => {
      l && _.removeEventListener("scroll", o), u && _.removeEventListener("resize", o);
    }), m?.(), (R = T) == null || R.disconnect(), T = null, g && cancelAnimationFrame(w);
  };
}
const RL = nL, DL = iL, OL = W4, ML = oL, NL = eL, A1 = J4, _L = aL, jL = (n, i, o) => {
  const s = /* @__PURE__ */ new Map(), l = o ?? {}, u = {
    ...EL,
    ...l.platform,
    _c: s
  };
  return Q4(n, i, {
    ...l,
    platform: u
  });
};
var zL = typeof document < "u", LL = function() {
}, zu = zL ? S.useLayoutEffect : LL;
function $u(n, i) {
  if (n === i)
    return !0;
  if (typeof n != typeof i)
    return !1;
  if (typeof n == "function" && n.toString() === i.toString())
    return !0;
  let o, s, l;
  if (n && i && typeof n == "object") {
    if (Array.isArray(n)) {
      if (o = n.length, o !== i.length) return !1;
      for (s = o; s-- !== 0; )
        if (!$u(n[s], i[s]))
          return !1;
      return !0;
    }
    if (l = Object.keys(n), o = l.length, o !== Object.keys(i).length)
      return !1;
    for (s = o; s-- !== 0; )
      if (!{}.hasOwnProperty.call(i, l[s]))
        return !1;
    for (s = o; s-- !== 0; ) {
      const u = l[s];
      if (!(u === "_owner" && n.$$typeof) && !$u(n[u], i[u]))
        return !1;
    }
    return !0;
  }
  return n !== n && i !== i;
}
function HC(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function R1(n, i) {
  const o = HC(n);
  return Math.round(i * o) / o;
}
function zm(n) {
  const i = S.useRef(n);
  return zu(() => {
    i.current = n;
  }), i;
}
function VL(n) {
  n === void 0 && (n = {});
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: l,
    elements: {
      reference: u,
      floating: d
    } = {},
    transform: h = !0,
    whileElementsMounted: g,
    open: p
  } = n, [v, m] = S.useState({
    x: 0,
    y: 0,
    strategy: o,
    placement: i,
    middlewareData: {},
    isPositioned: !1
  }), [x, T] = S.useState(s);
  $u(x, s) || T(s);
  const [w, A] = S.useState(null), [C, R] = S.useState(null), _ = S.useCallback((J) => {
    J !== U.current && (U.current = J, A(J));
  }, []), D = S.useCallback((J) => {
    J !== O.current && (O.current = J, R(J));
  }, []), M = u || w, B = d || C, U = S.useRef(null), O = S.useRef(null), N = S.useRef(v), F = g != null, Q = zm(g), ue = zm(l), ie = zm(p), te = S.useCallback(() => {
    if (!U.current || !O.current)
      return;
    const J = {
      placement: i,
      strategy: o,
      middleware: x
    };
    ue.current && (J.platform = ue.current), jL(U.current, O.current, J).then((se) => {
      const $ = {
        ...se,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ie.current !== !1
      };
      fe.current && !$u(N.current, $) && (N.current = $, Do.flushSync(() => {
        m($);
      }));
    });
  }, [x, i, o, ue, ie]);
  zu(() => {
    p === !1 && N.current.isPositioned && (N.current.isPositioned = !1, m((J) => ({
      ...J,
      isPositioned: !1
    })));
  }, [p]);
  const fe = S.useRef(!1);
  zu(() => (fe.current = !0, () => {
    fe.current = !1;
  }), []), zu(() => {
    if (M && (U.current = M), B && (O.current = B), M && B) {
      if (Q.current)
        return Q.current(M, B, te);
      te();
    }
  }, [M, B, te, Q, F]);
  const he = S.useMemo(() => ({
    reference: U,
    floating: O,
    setReference: _,
    setFloating: D
  }), [_, D]), G = S.useMemo(() => ({
    reference: M,
    floating: B
  }), [M, B]), X = S.useMemo(() => {
    const J = {
      position: o,
      left: 0,
      top: 0
    };
    if (!G.floating)
      return J;
    const se = R1(G.floating, v.x), $ = R1(G.floating, v.y);
    return h ? {
      ...J,
      transform: "translate(" + se + "px, " + $ + "px)",
      ...HC(G.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: o,
      left: se,
      top: $
    };
  }, [o, h, G.floating, v.x, v.y]);
  return S.useMemo(() => ({
    ...v,
    update: te,
    refs: he,
    elements: G,
    floatingStyles: X
  }), [v, te, he, G, X]);
}
const PL = (n) => {
  function i(o) {
    return {}.hasOwnProperty.call(o, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(o) {
      const {
        element: s,
        padding: l
      } = typeof n == "function" ? n(o) : n;
      return s && i(s) ? s.current != null ? A1({
        element: s.current,
        padding: l
      }).fn(o) : {} : s ? A1({
        element: s,
        padding: l
      }).fn(o) : {};
    }
  };
}, kL = (n, i) => {
  const o = RL(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, BL = (n, i) => {
  const o = DL(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, UL = (n, i) => ({
  fn: _L(n).fn,
  options: [n, i]
}), HL = (n, i) => {
  const o = OL(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, IL = (n, i) => {
  const o = ML(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, qL = (n, i) => {
  const o = NL(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
}, GL = (n, i) => {
  const o = PL(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, i]
  };
};
var YL = Object.defineProperty, FL = (n, i) => YL(n, "name", { value: i, configurable: !0 }), XL = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ FL(function(i, o) {
    const { children: s, width: l = 10, height: u = 5, ...d } = i;
    return /* @__PURE__ */ y.jsx(
      Be.svg,
      {
        ...d,
        ref: o,
        width: l,
        height: u,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: i.asChild ? s : /* @__PURE__ */ y.jsx("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  }, "Arrow")
), KL = Object.defineProperty, Zi = (n, i) => KL(n, "name", { value: i, configurable: !0 }), D1 = {
  Partial: "partial"
}, O1 = {
  Optimized: "optimized",
  Always: "always"
}, IC = "Popper", [qC, $s] = /* @__PURE__ */ ei(IC), [ZL, GC] = qC(IC), jg = /* @__PURE__ */ Zi((n) => {
  const { __scopePopper: i, children: o } = n, [s, l] = S.useState(null), [u, d] = S.useState(void 0);
  return /* @__PURE__ */ y.jsx(
    ZL,
    {
      scope: i,
      anchor: s,
      onAnchorChange: l,
      placementState: u,
      setPlacementState: d,
      children: o
    }
  );
}, "Popper"), $L = "PopperAnchor", zg = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ Zi(function(i, o) {
    const { __scopePopper: s, virtualRef: l, ...u } = i, d = GC($L, s), h = S.useRef(null), g = d.onAnchorChange, p = S.useCallback(
      (A) => {
        h.current = A, A && g(A);
      },
      [g]
    ), v = Ye(o, p), m = S.useRef(null);
    S.useEffect(() => {
      if (!l)
        return;
      const A = m.current;
      m.current = l.current, A !== m.current && g(m.current);
    });
    const x = d.placementState && xf(d.placementState), T = x?.[0], w = x?.[1];
    return l ? null : /* @__PURE__ */ y.jsx(
      Be.div,
      {
        "data-radix-popper-side": T,
        "data-radix-popper-align": w,
        ...u,
        ref: v
      }
    );
  }, "PopperAnchor")
), YC = "PopperContent", [QL, JL] = qC(YC), Lg = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ Zi(function(i, o) {
    const {
      __scopePopper: s,
      side: l = "bottom",
      sideOffset: u = 0,
      align: d = "center",
      alignOffset: h = 0,
      arrowPadding: g = 0,
      avoidCollisions: p = !0,
      collisionBoundary: v = [],
      collisionPadding: m = 0,
      sticky: x = D1.Partial,
      hideWhenDetached: T = !1,
      updatePositionStrategy: w = O1.Optimized,
      onPlaced: A,
      ...C
    } = i, R = GC(YC, s), [_, D] = S.useState(null), M = Ye(o, D), [B, U] = S.useState(null), O = Tg(B), N = O?.width ?? 0, F = O?.height ?? 0, Q = l + (d !== "center" ? "-" + d : ""), ue = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, ie = Array.isArray(v) ? v : [v], te = ie.length > 0, fe = {
      padding: ue,
      boundary: ie.filter(FC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: te
    }, { refs: he, floatingStyles: G, placement: X, isPositioned: J, middlewareData: se } = VL({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: Q,
      whileElementsMounted: /* @__PURE__ */ Zi((...ee) => AL(...ee, {
        animationFrame: w === O1.Always
      }), "whileElementsMounted"),
      elements: {
        reference: R.anchor
      },
      middleware: [
        kL({ mainAxis: u + F, alignmentAxis: h }),
        p && BL({
          mainAxis: !0,
          crossAxis: !1,
          limiter: x === D1.Partial ? UL() : void 0,
          ...fe
        }),
        p && HL({ ...fe }),
        IL({
          ...fe,
          apply: /* @__PURE__ */ Zi(({ elements: ee, rects: ye, availableWidth: ne, availableHeight: re }) => {
            const { width: Ae, height: st } = ye.reference, ft = ee.floating.style;
            ft.setProperty("--radix-popper-available-width", `${ne}px`), ft.setProperty("--radix-popper-available-height", `${re}px`), ft.setProperty("--radix-popper-anchor-width", `${Ae}px`), ft.setProperty("--radix-popper-anchor-height", `${st}px`);
          }, "apply")
        }),
        B && GL({ element: B, padding: g }),
        nV({ arrowWidth: N, arrowHeight: F }),
        T && qL({
          strategy: "referenceHidden",
          ...fe,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: te ? fe.boundary : void 0
        })
      ]
    }), $ = R.setPlacementState;
    ut(() => ($(X), () => {
      $(void 0);
    }), [X, $]);
    const [Me, Re] = xf(X), He = Wn(A);
    ut(() => {
      J && He?.();
    }, [J, He]);
    const z = se.arrow?.x, Y = se.arrow?.y, W = se.arrow?.centerOffset !== 0, [le, ae] = S.useState();
    return ut(() => {
      _ && ae(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ y.jsx(
      "div",
      {
        ref: he.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: J ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            se.transformOrigin?.x,
            se.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...se.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: i.dir,
        children: /* @__PURE__ */ y.jsx(
          QL,
          {
            scope: s,
            placedSide: Me,
            placedAlign: Re,
            onArrowChange: U,
            arrowX: z,
            arrowY: Y,
            shouldHideArrow: W,
            children: /* @__PURE__ */ y.jsx(
              Be.div,
              {
                "data-side": Me,
                "data-align": Re,
                ...C,
                ref: M,
                style: {
                  ...C.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: J ? C.style?.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
), WL = "PopperArrow", eV = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, tV = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ Zi(function(i, o) {
    const { __scopePopper: s, ...l } = i, u = JL(WL, s), d = eV[u.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ y.jsx(
        "span",
        {
          ref: u.onArrowChange,
          style: {
            position: "absolute",
            left: u.arrowX,
            top: u.arrowY,
            [d]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[u.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[u.placedSide],
            visibility: u.shouldHideArrow ? "hidden" : void 0
          },
          children: /* @__PURE__ */ y.jsx(
            XL,
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
function FC(n) {
  return n !== null;
}
Zi(FC, "isNotNull");
var nV = /* @__PURE__ */ Zi((n) => ({
  name: "transformOrigin",
  options: n,
  fn(i) {
    const { placement: o, rects: s, middlewareData: l } = i, d = l.arrow?.centerOffset !== 0, h = d ? 0 : n.arrowWidth, g = d ? 0 : n.arrowHeight, [p, v] = xf(o), m = { start: "0%", center: "50%", end: "100%" }[v], x = (l.arrow?.x ?? 0) + h / 2, T = (l.arrow?.y ?? 0) + g / 2;
    let w = "", A = "";
    return p === "bottom" ? (w = d ? m : `${x}px`, A = `${-g}px`) : p === "top" ? (w = d ? m : `${x}px`, A = `${s.floating.height + g}px`) : p === "right" ? (w = `${-g}px`, A = d ? m : `${T}px`) : p === "left" && (w = `${s.floating.width + g}px`, A = d ? m : `${T}px`), { data: { x: w, y: A } };
  }
}), "transformOrigin");
function xf(n) {
  const [i, o = "center"] = n.split("-");
  return [i, o];
}
Zi(xf, "getSideAndAlignFromPlacement");
var iV = Object.defineProperty, Vg = (n, i) => iV(n, "name", { value: i, configurable: !0 }), Lm = !1;
function XC() {
  const [n, i] = S.useState(Lm);
  return S.useEffect(() => {
    Lm || (Lm = !0, i(!0));
  }, []), n;
}
Vg(XC, "useIsHydrated");
var KC = qs[" useSyncExternalStore ".trim().toString()];
function ZC() {
  return () => {
  };
}
Vg(ZC, "subscribe");
function $C() {
  return KC(
    ZC,
    () => !0,
    () => !1
  );
}
Vg($C, "useIsHydratedModern");
var aV = typeof KC == "function" ? $C : XC, oV = Object.defineProperty, Mo = (n, i) => oV(n, "name", { value: i, configurable: !0 }), Vm = "rovingFocusGroup.onEntryFocus", sV = { bubbles: !1, cancelable: !0 }, Sf = "RovingFocusGroup", [Cp, QC, rV] = /* @__PURE__ */ gg(Sf), [lV, JC] = /* @__PURE__ */ ei(
  Sf,
  [rV]
), M1 = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, cV = {
  RTL: "rtl"
}, [uV, fV] = lV(Sf), dV = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Mo(function(i, o) {
    return /* @__PURE__ */ y.jsx(Cp.Provider, { scope: i.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(Cp.Slot, { scope: i.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(hV, { ...i, ref: o }) }) });
  }, "RovingFocusGroup")
), hV = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ Mo(function(i, o) {
  const {
    __scopeRovingFocusGroup: s,
    orientation: l,
    loop: u = !1,
    dir: d,
    currentTabStopId: h,
    defaultCurrentTabStopId: g,
    onCurrentTabStopIdChange: p,
    onEntryFocus: v,
    preventScrollOnEntryFocus: m = !1,
    ...x
  } = i, T = S.useRef(null), w = Ye(o, T), A = lf(d), [C, R] = Qi({
    prop: h,
    defaultProp: g ?? null,
    onChange: p,
    caller: Sf
  }), [_, D] = S.useState(!1), M = Wn(v), B = QC(s), U = S.useRef(!1), [O, N] = S.useState(0);
  return S.useEffect(() => {
    const F = T.current;
    if (F)
      return F.addEventListener(Vm, M), () => F.removeEventListener(Vm, M);
  }, [M]), /* @__PURE__ */ y.jsx(
    uV,
    {
      scope: s,
      orientation: l,
      dir: A,
      loop: u,
      currentTabStopId: C,
      onItemFocus: S.useCallback(
        (F) => R(F),
        [R]
      ),
      onItemShiftTab: S.useCallback(() => D(!0), []),
      onFocusableItemAdd: S.useCallback(
        () => N((F) => F + 1),
        []
      ),
      onFocusableItemRemove: S.useCallback(
        () => N((F) => F - 1),
        []
      ),
      children: /* @__PURE__ */ y.jsx(
        Be.div,
        {
          tabIndex: _ || O === 0 ? -1 : 0,
          "data-orientation": l,
          ...x,
          ref: w,
          style: { outline: "none", ...i.style },
          onMouseDown: xe(i.onMouseDown, () => {
            U.current = !0;
          }),
          onFocus: xe(i.onFocus, (F) => {
            const Q = !U.current;
            if (F.target === F.currentTarget && Q && !_) {
              const ue = new CustomEvent(Vm, sV);
              if (F.currentTarget.dispatchEvent(ue), !ue.defaultPrevented) {
                const ie = B().filter((X) => X.focusable), te = ie.find((X) => X.active), fe = ie.find((X) => X.id === C), G = [te, fe, ...ie].filter(
                  Boolean
                ).map((X) => X.ref.current);
                Pg(G, m);
              }
            }
            U.current = !1;
          }),
          onBlur: xe(i.onBlur, () => D(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), mV = "RovingFocusGroupItem", pV = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Mo(function(i, o) {
    const {
      __scopeRovingFocusGroup: s,
      focusable: l = !0,
      active: u = !1,
      tabStopId: d,
      children: h,
      ...g
    } = i, p = Yi(), v = d || p, m = fV(mV, s), x = m.currentTabStopId === v, T = QC(s), { onFocusableItemAdd: w, onFocusableItemRemove: A, currentTabStopId: C } = m, R = aV();
    return ut(() => {
      if (!(!R || !l))
        return w(), () => A();
    }, [R, l, w, A]), S.useEffect(() => {
      if (!(R || !l))
        return w(), () => A();
    }, [R, l, w, A]), /* @__PURE__ */ y.jsx(
      Cp.ItemSlot,
      {
        scope: s,
        id: v,
        focusable: l,
        active: u,
        children: /* @__PURE__ */ y.jsx(
          Be.span,
          {
            tabIndex: x ? 0 : -1,
            "data-orientation": m.orientation,
            ...g,
            ref: o,
            onMouseDown: xe(i.onMouseDown, (_) => {
              l ? m.onItemFocus(v) : _.preventDefault();
            }),
            onFocus: xe(i.onFocus, () => m.onItemFocus(v)),
            onKeyDown: xe(i.onKeyDown, (_) => {
              if (_.key === "Tab" && _.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (_.target !== _.currentTarget) return;
              const D = eA(_, m.orientation, m.dir);
              if (D !== void 0) {
                if (_.metaKey || _.ctrlKey || _.altKey || _.shiftKey) return;
                _.preventDefault();
                let B = T().filter((U) => U.focusable).map((U) => U.ref.current);
                if (D === "last") B.reverse();
                else if (D === "prev" || D === "next") {
                  D === "prev" && B.reverse();
                  const U = B.indexOf(_.currentTarget);
                  B = m.loop ? tA(B, U + 1) : B.slice(U + 1);
                }
                setTimeout(() => Pg(B));
              }
            }),
            children: typeof h == "function" ? h({ isCurrentTabStop: x, hasTabStop: C != null }) : h
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), gV = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function WC(n, i) {
  return i !== cV.RTL ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
Mo(WC, "getDirectionAwareKey");
function eA(n, i, o) {
  const s = WC(n.key, o);
  if (!(i === M1.Vertical && ["ArrowLeft", "ArrowRight"].includes(s)) && !(i === M1.Horizontal && ["ArrowUp", "ArrowDown"].includes(s)))
    return gV[s];
}
Mo(eA, "getFocusIntent");
function Pg(n, i = !1) {
  const o = document.activeElement;
  for (const s of n)
    if (s === o || (s.focus({ preventScroll: i }), document.activeElement !== o)) return;
}
Mo(Pg, "focusFirst");
function tA(n, i) {
  return n.map((o, s) => n[(i + s) % n.length]);
}
Mo(tA, "wrapArray");
var vV = Object.defineProperty, ta = (n, i) => vV(n, "name", { value: i, configurable: !0 }), Pm, kg = "HoverCard", [nA, Xk] = /* @__PURE__ */ ei(kg, [
  $s
]), Bg = $s(), [yV, wf] = nA(kg), bV = /* @__PURE__ */ ta((n) => {
  const {
    __scopeHoverCard: i,
    children: o,
    open: s,
    defaultOpen: l,
    onOpenChange: u,
    openDelay: d = 700,
    closeDelay: h = 300
  } = n, g = Bg(i), p = S.useRef(0), v = S.useRef(0), m = S.useRef(!1), x = S.useRef(!1), [T, w] = Qi({
    prop: s,
    defaultProp: l ?? !1,
    onChange: u,
    caller: kg
  }), A = S.useCallback(() => {
    clearTimeout(v.current), p.current = window.setTimeout(() => w(!0), d);
  }, [d, w]), C = S.useCallback(() => {
    clearTimeout(p.current), !m.current && !x.current && (v.current = window.setTimeout(() => w(!1), h));
  }, [h, w]), R = S.useCallback(() => w(!1), [w]);
  return S.useEffect(() => () => {
    clearTimeout(p.current), clearTimeout(v.current);
  }, []), /* @__PURE__ */ y.jsx(
    yV,
    {
      scope: i,
      open: T,
      onOpenChange: w,
      onOpen: A,
      onClose: C,
      onDismiss: R,
      hasSelectionRef: m,
      isPointerDownOnContentRef: x,
      children: /* @__PURE__ */ y.jsx(jg, { ...g, children: o })
    }
  );
}, "HoverCard"), xV = "HoverCardTrigger", SV = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ta(function(i, o) {
    const { __scopeHoverCard: s, ...l } = i, u = wf(xV, s), d = Bg(s);
    return /* @__PURE__ */ y.jsx(zg, { asChild: !0, ...d, children: /* @__PURE__ */ y.jsx(
      Be.a,
      {
        "data-state": u.open ? "open" : "closed",
        ...l,
        ref: o,
        onPointerEnter: xe(i.onPointerEnter, wl(u.onOpen)),
        onPointerLeave: xe(i.onPointerLeave, wl(u.onClose)),
        onFocus: xe(i.onFocus, u.onOpen),
        onBlur: xe(i.onBlur, u.onClose),
        onTouchStart: xe(i.onTouchStart, (h) => h.preventDefault())
      }
    ) });
  }, "HoverCardTrigger")
), iA = "HoverCardPortal", [wV, TV] = nA(iA, {
  forceMount: void 0
}), EV = /* @__PURE__ */ ta((n) => {
  const { __scopeHoverCard: i, forceMount: o, children: s, container: l } = n, u = wf(iA, i);
  return /* @__PURE__ */ y.jsx(wV, { scope: i, forceMount: o, children: /* @__PURE__ */ y.jsx(Ei, { present: o || u.open, children: /* @__PURE__ */ y.jsx(uf, { asChild: !0, container: l, children: s }) }) });
}, "HoverCardPortal"), Ap = "HoverCardContent", CV = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ta(function(i, o) {
    const s = TV(Ap, i.__scopeHoverCard), { forceMount: l = s.forceMount, ...u } = i, d = wf(Ap, i.__scopeHoverCard);
    return /* @__PURE__ */ y.jsx(Ei, { present: l || d.open, children: /* @__PURE__ */ y.jsx(
      AV,
      {
        "data-state": d.open ? "open" : "closed",
        ...u,
        onPointerEnter: xe(i.onPointerEnter, wl(d.onOpen)),
        onPointerLeave: xe(i.onPointerLeave, wl(d.onClose)),
        ref: o
      }
    ) });
  }, "HoverCardContent")
), AV = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ ta(function(i, o) {
  const {
    __scopeHoverCard: s,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: h,
    ...g
  } = i, p = wf(Ap, s), v = Bg(s), m = S.useRef(null), [x, T] = S.useState(null), w = Ye(o, m, T);
  tC(x);
  const [A, C] = S.useState(!1);
  return S.useEffect(() => {
    if (A) {
      const R = document.body;
      return Pm = R.style.userSelect || R.style.webkitUserSelect, R.style.userSelect = "none", R.style.webkitUserSelect = "none", () => {
        R.style.userSelect = Pm, R.style.webkitUserSelect = Pm;
      };
    }
  }, [A]), S.useEffect(() => {
    if (m.current) {
      const R = /* @__PURE__ */ ta(() => {
        C(!1), p.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          document.getSelection()?.toString() !== "" && (p.hasSelectionRef.current = !0);
        });
      }, "handlePointerUp");
      return document.addEventListener("pointerup", R), () => {
        document.removeEventListener("pointerup", R), p.hasSelectionRef.current = !1, p.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [p.isPointerDownOnContentRef, p.hasSelectionRef]), S.useEffect(() => {
    m.current && aA(m.current).forEach((_) => _.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ y.jsx(
    cf,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: h,
      onEscapeKeyDown: l,
      onPointerDownOutside: u,
      onFocusOutside: xe(d, (R) => {
        R.preventDefault();
      }),
      onDismiss: p.onDismiss,
      children: /* @__PURE__ */ y.jsx(
        Lg,
        {
          ...v,
          ...g,
          onPointerDown: xe(g.onPointerDown, (R) => {
            R.currentTarget.contains(R.target) && C(!0), p.hasSelectionRef.current = !1, p.isPointerDownOnContentRef.current = !0;
          }),
          ref: w,
          style: {
            ...g.style,
            userSelect: A ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: A ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}, "HoverCardContentImpl"));
function wl(n) {
  return (i) => i.pointerType === "touch" ? void 0 : n();
}
ta(wl, "excludeTouch");
function aA(n) {
  const i = [], o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ ta((s) => s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP, "acceptNode")
  });
  for (; o.nextNode(); ) i.push(o.currentNode);
  return i;
}
ta(aA, "getTabbableNodes");
var RV = Object.defineProperty, DV = (n, i) => RV(n, "name", { value: i, configurable: !0 });
function oA(n) {
  const i = S.useRef({ value: n, previous: n });
  return S.useMemo(() => (i.current.value !== n && (i.current.previous = i.current.value, i.current.value = n), i.current.previous), [n]);
}
DV(oA, "usePrevious");
var OV = Object.defineProperty, MV = (n, i) => OV(n, "name", { value: i, configurable: !0 });
function Rp(n, [i, o]) {
  return Math.min(o, Math.max(i, n));
}
MV(Rp, "clamp");
var NV = Object.defineProperty, ke = (n, i) => NV(n, "name", { value: i, configurable: !0 }), N1 = {
  ItemAligned: "item-aligned",
  Popper: "popper"
}, _V = {
  RTL: "rtl"
}, jV = [" ", "Enter", "ArrowUp", "ArrowDown"], zV = [" ", "Enter"], Hs = "Select", [Tf, Ef, LV] = /* @__PURE__ */ gg(Hs), [No, Kk] = /* @__PURE__ */ ei(Hs, [
  LV,
  $s
]), Ug = $s(), [VV, Ha] = No(Hs), [PV, kV] = No(Hs);
function sA(n) {
  const {
    __scopeSelect: i,
    children: o,
    open: s,
    defaultOpen: l,
    onOpenChange: u,
    value: d,
    defaultValue: h,
    onValueChange: g,
    dir: p,
    name: v,
    autoComplete: m,
    disabled: x,
    required: T,
    form: w,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: A
  } = n, C = Ug(i), [R, _] = S.useState(null), [D, M] = S.useState(null), [B, U] = S.useState(!1), O = lf(p), [N, F] = Qi({
    prop: s,
    defaultProp: l ?? !1,
    onChange: u,
    caller: Hs
  }), [Q, ue] = Qi({
    prop: d,
    defaultProp: h,
    onChange: g,
    caller: Hs
  }), ie = S.useRef(null), te = S.useRef(Q);
  S.useEffect(() => {
    const Re = w ? R?.ownerDocument.getElementById(w) : R?.form;
    if (Re instanceof HTMLFormElement) {
      const He = /* @__PURE__ */ ke(() => ue(te.current), "reset");
      return Re.addEventListener("reset", He), () => Re.removeEventListener("reset", He);
    }
  }, [w, R, ue]);
  const fe = R ? !!w || !!R.closest("form") : !0, [he, G] = S.useState(/* @__PURE__ */ new Set()), X = Yi(), J = Array.from(he).map((Re) => Re.props.value).join(";"), se = S.useCallback((Re) => {
    G((He) => new Set(He).add(Re));
  }, []), $ = S.useCallback((Re) => {
    G((He) => {
      const z = new Set(He);
      return z.delete(Re), z;
    });
  }, []), Me = {
    required: T,
    trigger: R,
    onTriggerChange: _,
    valueNode: D,
    onValueNodeChange: M,
    valueNodeHasChildren: B,
    onValueNodeHasChildrenChange: U,
    contentId: X,
    value: Q,
    onValueChange: ue,
    open: N,
    onOpenChange: F,
    dir: O,
    triggerPointerDownPosRef: ie,
    disabled: x,
    name: v,
    autoComplete: m,
    form: w,
    nativeOptions: he,
    nativeSelectKey: J,
    isFormControl: fe
  };
  return /* @__PURE__ */ y.jsx(jg, { ...C, children: /* @__PURE__ */ y.jsx(VV, { scope: i, ...Me, children: /* @__PURE__ */ y.jsx(Tf.Provider, { scope: i, children: /* @__PURE__ */ y.jsx(
    PV,
    {
      scope: i,
      onNativeOptionAdd: se,
      onNativeOptionRemove: $,
      children: uA(A) ? A(Me) : o
    }
  ) }) }) });
}
ke(sA, "SelectProvider");
var BV = /* @__PURE__ */ ke((n) => {
  const { __scopeSelect: i, children: o, ...s } = n;
  return /* @__PURE__ */ y.jsx(
    sA,
    {
      __scopeSelect: i,
      ...s,
      internal_do_not_use_render: ({ isFormControl: l }) => /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        o,
        l ? /* @__PURE__ */ y.jsx(
          fP,
          {
            __scopeSelect: i
          }
        ) : null
      ] })
    }
  );
}, "Select"), UV = "SelectTrigger", HV = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ ke(function(i, o) {
    const { __scopeSelect: s, disabled: l = !1, ...u } = i, d = Ug(s), h = Ha(UV, s), g = h.disabled || l, p = Ye(o, h.onTriggerChange), v = Ef(s), m = S.useRef("touch"), [x, T, w] = Ig((C) => {
      const R = v().filter((M) => !M.disabled), _ = R.find((M) => M.value === h.value), D = qg(R, C, _);
      D !== void 0 && h.onValueChange(D.value);
    }), A = /* @__PURE__ */ ke((C) => {
      g || (h.onOpenChange(!0), w()), C && (h.triggerPointerDownPosRef.current = {
        x: Math.round(C.pageX),
        y: Math.round(C.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ y.jsx(zg, { asChild: !0, ...d, children: /* @__PURE__ */ y.jsx(
      Be.button,
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
        "data-placeholder": Ol(h.value) ? "" : void 0,
        ...u,
        ref: p,
        onClick: xe(u.onClick, (C) => {
          C.currentTarget.focus(), m.current !== "mouse" && A(C);
        }),
        onPointerDown: xe(u.onPointerDown, (C) => {
          m.current = C.pointerType;
          const R = C.target;
          R.hasPointerCapture(C.pointerId) && R.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (A(C), C.preventDefault());
        }),
        onKeyDown: xe(u.onKeyDown, (C) => {
          const R = x.current !== "";
          !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && T(C.key), !(R && C.key === " ") && jV.includes(C.key) && (A(), C.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), IV = "SelectValue", qV = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ ke(function(i, o) {
    const { __scopeSelect: s, className: l, style: u, children: d, placeholder: h = "", ...g } = i, p = Ha(IV, s), { onValueNodeHasChildrenChange: v } = p, m = d !== void 0, x = Ye(o, p.onValueNodeChange);
    ut(() => {
      v(m);
    }, [v, m]);
    const T = Ol(p.value);
    return /* @__PURE__ */ y.jsx(
      Be.span,
      {
        ...g,
        asChild: T ? !1 : g.asChild,
        ref: x,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ y.jsx(S.Fragment, { children: T ? h : d }, T ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), GV = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ ke(function(i, o) {
    const { __scopeSelect: s, children: l, ...u } = i;
    return /* @__PURE__ */ y.jsx(Be.span, { "aria-hidden": !0, ...u, ref: o, children: l || "▼" });
  }, "SelectIcon")
), YV = "SelectPortal", [FV, XV] = No(YV, {
  forceMount: void 0
}), KV = /* @__PURE__ */ ke((n) => {
  const { __scopeSelect: i, forceMount: o, ...s } = n;
  return /* @__PURE__ */ y.jsx(FV, { scope: n.__scopeSelect, forceMount: o, children: /* @__PURE__ */ y.jsx(uf, { asChild: !0, ...s }) });
}, "SelectPortal"), Ro = "SelectContent", ZV = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ ke(function(i, o) {
    const s = XV(Ro, i.__scopeSelect), { forceMount: l = s.forceMount, ...u } = i, d = Ha(Ro, i.__scopeSelect), [h, g] = S.useState();
    return ut(() => {
      g(new DocumentFragment());
    }, []), /* @__PURE__ */ y.jsx(Ei, { present: l || d.open, children: ({ present: p }) => p ? /* @__PURE__ */ y.jsx(JV, { ...u, ref: o }) : /* @__PURE__ */ y.jsx($V, { ...u, fragment: h }) });
  }, "SelectContent")
), $V = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ ke(function(i, o) {
  const { __scopeSelect: s, children: l, fragment: u } = i;
  return u ? Do.createPortal(
    /* @__PURE__ */ y.jsx(rA, { scope: s, children: /* @__PURE__ */ y.jsx(Tf.Slot, { scope: s, children: /* @__PURE__ */ y.jsx("div", { ref: o, children: l }) }) }),
    u
  ) : null;
}, "SelectContentFragment")), Zn = 10, [rA, _o] = No(Ro), QV = /* @__PURE__ */ $i("SelectContent.RemoveScroll"), JV = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ke(function(i, o) {
    const { __scopeSelect: s } = i, {
      position: l = N1.ItemAligned,
      onCloseAutoFocus: u,
      onEscapeKeyDown: d,
      onPointerDownOutside: h,
      //
      // PopperContent props
      side: g,
      sideOffset: p,
      align: v,
      alignOffset: m,
      arrowPadding: x,
      collisionBoundary: T,
      collisionPadding: w,
      sticky: A,
      hideWhenDetached: C,
      avoidCollisions: R,
      //
      ..._
    } = i, D = Ha(Ro, s), [M, B] = S.useState(null), [U, O] = S.useState(null), N = Ye(o, B), [F, Q] = S.useState(null), [ue, ie] = S.useState(
      null
    ), te = Ef(s), [fe, he] = S.useState(!1), G = S.useRef(!1);
    S.useEffect(() => {
      if (M) return gC(M);
    }, [M]), ff();
    const X = S.useCallback(
      (ae) => {
        const [ee, ...ye] = te().map((Ae) => Ae.ref.current), [ne] = ye.slice(-1), re = document.activeElement;
        for (const Ae of ae)
          if (Ae === re || (Ae?.scrollIntoView({ block: "nearest" }), Ae === ee && U && (U.scrollTop = 0), Ae === ne && U && (U.scrollTop = U.scrollHeight), Ae?.focus(), document.activeElement !== re)) return;
      },
      [te, U]
    ), J = S.useCallback(
      () => X([F, M]),
      [X, F, M]
    );
    S.useEffect(() => {
      fe && J();
    }, [fe, J]);
    const { onOpenChange: se, triggerPointerDownPosRef: $ } = D;
    S.useEffect(() => {
      if (M) {
        let ae = { x: 0, y: 0 };
        const ee = /* @__PURE__ */ ke((ne) => {
          ae = {
            x: Math.abs(Math.round(ne.pageX) - ($.current?.x ?? 0)),
            y: Math.abs(Math.round(ne.pageY) - ($.current?.y ?? 0))
          };
        }, "handlePointerMove"), ye = /* @__PURE__ */ ke((ne) => {
          ae.x <= 10 && ae.y <= 10 ? ne.preventDefault() : ne.composedPath().includes(M) || se(!1), document.removeEventListener("pointermove", ee), $.current = null;
        }, "handlePointerUp");
        return $.current !== null && (document.addEventListener("pointermove", ee), document.addEventListener("pointerup", ye, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ee), document.removeEventListener("pointerup", ye, { capture: !0 });
        };
      }
    }, [M, se, $]), S.useEffect(() => {
      const ae = /* @__PURE__ */ ke(() => se(!1), "close");
      return window.addEventListener("blur", ae), window.addEventListener("resize", ae), () => {
        window.removeEventListener("blur", ae), window.removeEventListener("resize", ae);
      };
    }, [se]);
    const [Me, Re] = Ig((ae) => {
      const ee = te().filter((re) => !re.disabled), ye = ee.find((re) => re.ref.current === document.activeElement), ne = qg(ee, ae, ye);
      ne && setTimeout(() => ne.ref.current?.focus());
    }), He = S.useCallback(
      (ae, ee, ye) => {
        const ne = !G.current && !ye;
        (D.value !== void 0 && D.value === ee || ne) && (Q(ae), ne && (G.current = !0));
      },
      [D.value]
    ), z = S.useCallback(() => M?.focus(), [M]), Y = S.useCallback(
      (ae, ee, ye) => {
        const ne = !G.current && !ye;
        (D.value !== void 0 && D.value === ee || ne) && ie(ae);
      },
      [D.value]
    ), W = l === N1.Popper ? _1 : WV, le = W === _1 ? {
      side: g,
      sideOffset: p,
      align: v,
      alignOffset: m,
      arrowPadding: x,
      collisionBoundary: T,
      collisionPadding: w,
      sticky: A,
      hideWhenDetached: C,
      avoidCollisions: R
    } : {};
    return /* @__PURE__ */ y.jsx(
      rA,
      {
        scope: s,
        content: M,
        viewport: U,
        onViewportChange: O,
        itemRefCallback: He,
        selectedItem: F,
        onItemLeave: z,
        itemTextRefCallback: Y,
        focusSelectedItem: J,
        selectedItemText: ue,
        position: l,
        isPositioned: fe,
        searchRef: Me,
        children: /* @__PURE__ */ y.jsx(Sg, { as: QV, allowPinchZoom: !0, children: /* @__PURE__ */ y.jsx(
          QE,
          {
            asChild: !0,
            trapped: D.open,
            onMountAutoFocus: (ae) => {
              ae.preventDefault();
            },
            onUnmountAutoFocus: xe(u, (ae) => {
              D.trigger?.focus({ preventScroll: !0 }), ae.preventDefault();
            }),
            children: /* @__PURE__ */ y.jsx(
              cf,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: h,
                onFocusOutside: (ae) => ae.preventDefault(),
                onDismiss: () => D.onOpenChange(!1),
                children: /* @__PURE__ */ y.jsx(
                  W,
                  {
                    role: "listbox",
                    id: D.contentId,
                    "data-state": D.open ? "open" : "closed",
                    dir: D.dir,
                    onContextMenu: (ae) => ae.preventDefault(),
                    ..._,
                    ...le,
                    onPlaced: () => he(!0),
                    ref: N,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: xe(_.onKeyDown, (ae) => {
                      const ee = ae.ctrlKey || ae.altKey || ae.metaKey;
                      if (ae.key === "Tab" && ae.preventDefault(), !ee && ae.key.length === 1 && Re(ae.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(ae.key)) {
                        let ne = te().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(ae.key) && (ne = ne.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(ae.key)) {
                          const re = ae.target, Ae = ne.indexOf(re);
                          ne = ne.slice(Ae + 1);
                        }
                        setTimeout(() => X(ne)), ae.preventDefault();
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
), WV = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ ke(function(i, o) {
  const { __scopeSelect: s, onPlaced: l, ...u } = i, d = Ha(Ro, s), h = _o(Ro, s), [g, p] = S.useState(null), [v, m] = S.useState(null), x = Ye(o, m), T = Ef(s), w = S.useRef(!1), A = S.useRef(!0), { viewport: C, selectedItem: R, selectedItemText: _, focusSelectedItem: D } = h, M = S.useCallback(() => {
    if (d.trigger && d.valueNode && g && v && C && R && _) {
      const N = d.trigger.getBoundingClientRect(), F = v.getBoundingClientRect(), Q = d.valueNode.getBoundingClientRect(), ue = _.getBoundingClientRect();
      if (d.dir !== _V.RTL) {
        const re = ue.left - F.left, Ae = Q.left - re, st = N.left - Ae, ft = N.width + st, Pt = Math.max(ft, F.width), We = window.innerWidth - Zn, Pe = Rp(Ae, [
          Zn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Zn, We - Pt)
        ]);
        g.style.minWidth = ft + "px", g.style.left = Pe + "px";
      } else {
        const re = F.right - ue.right, Ae = window.innerWidth - Q.right - re, st = window.innerWidth - N.right - Ae, ft = N.width + st, Pt = Math.max(ft, F.width), We = window.innerWidth - Zn, Pe = Rp(Ae, [
          Zn,
          Math.max(Zn, We - Pt)
        ]);
        g.style.minWidth = ft + "px", g.style.right = Pe + "px";
      }
      const ie = T(), te = window.innerHeight - Zn * 2, fe = C.scrollHeight, he = window.getComputedStyle(v), G = parseInt(he.borderTopWidth, 10), X = parseInt(he.paddingTop, 10), J = parseInt(he.borderBottomWidth, 10), se = parseInt(he.paddingBottom, 10), $ = G + X + fe + se + J, Me = Math.min(R.offsetHeight * 5, $), Re = window.getComputedStyle(C), He = parseInt(Re.paddingTop, 10), z = parseInt(Re.paddingBottom, 10), Y = N.top + N.height / 2 - Zn, W = te - Y, le = R.offsetHeight / 2, ae = R.offsetTop + le, ee = G + X + ae, ye = $ - ee;
      if (ee <= Y) {
        const re = ie.length > 0 && R === ie[ie.length - 1].ref.current;
        g.style.bottom = "0px";
        const Ae = v.clientHeight - C.offsetTop - C.offsetHeight, st = Math.max(
          W,
          le + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? z : 0) + Ae + J
        ), ft = ee + st;
        g.style.height = ft + "px";
      } else {
        const re = ie.length > 0 && R === ie[0].ref.current;
        g.style.top = "0px";
        const st = Math.max(
          Y,
          G + C.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? He : 0) + le
        ) + ye;
        g.style.height = st + "px", C.scrollTop = ee - Y + C.offsetTop;
      }
      g.style.margin = `${Zn}px 0`, g.style.minHeight = Me + "px", g.style.maxHeight = te + "px", l?.(), requestAnimationFrame(() => w.current = !0);
    }
  }, [
    T,
    d.trigger,
    d.valueNode,
    g,
    v,
    C,
    R,
    _,
    d.dir,
    l
  ]);
  ut(() => M(), [M]);
  const [B, U] = S.useState();
  ut(() => {
    v && U(window.getComputedStyle(v).zIndex);
  }, [v]);
  const O = S.useCallback(
    (N) => {
      N && A.current === !0 && (M(), D?.(), A.current = !1);
    },
    [M, D]
  );
  return /* @__PURE__ */ y.jsx(
    eP,
    {
      scope: s,
      contentWrapper: g,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: O,
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: B
          },
          children: /* @__PURE__ */ y.jsx(
            Be.div,
            {
              ...u,
              ref: x,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...u.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), _1 = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ ke(function(i, o) {
  const {
    __scopeSelect: s,
    align: l = "start",
    collisionPadding: u = Zn,
    ...d
  } = i, h = Ug(s);
  return /* @__PURE__ */ y.jsx(
    Lg,
    {
      ...h,
      ...d,
      ref: o,
      align: l,
      collisionPadding: u,
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
}, "SelectPopperPosition")), [eP, Hg] = No(Ro, {}), j1 = "SelectViewport", tP = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ ke(function(i, o) {
    const { __scopeSelect: s, nonce: l, ...u } = i, d = _o(j1, s), h = Hg(j1, s), g = Ye(o, d.onViewportChange), p = S.useRef(0);
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: l
        }
      ),
      /* @__PURE__ */ y.jsx(Tf.Slot, { scope: s, children: /* @__PURE__ */ y.jsx(
        Be.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...u,
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
            ...u.style
          },
          onScroll: xe(u.onScroll, (v) => {
            const m = v.currentTarget, { contentWrapper: x, shouldExpandOnScrollRef: T } = h;
            if (T?.current && x) {
              const w = Math.abs(p.current - m.scrollTop);
              if (w > 0) {
                const A = window.innerHeight - Zn * 2, C = parseFloat(x.style.minHeight), R = parseFloat(x.style.height), _ = Math.max(C, R);
                if (_ < A) {
                  const D = _ + w, M = Math.min(A, D), B = D - M;
                  x.style.height = M + "px", x.style.bottom === "0px" && (m.scrollTop = B > 0 ? B : 0, x.style.justifyContent = "flex-end");
                }
              }
            }
            p.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), nP = "SelectGroup", [Zk, $k] = No(nP), Dp = "SelectItem", [iP, lA] = No(Dp), aP = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ ke(function(i, o) {
    const {
      __scopeSelect: s,
      value: l,
      disabled: u = !1,
      textValue: d,
      ...h
    } = i, g = Ha(Dp, s), p = _o(Dp, s), v = g.value === l, [m, x] = S.useState(d ?? ""), [T, w] = S.useState(!1), A = Wn(
      (M) => p.itemRefCallback?.(M, l, u)
    ), C = Ye(o, A), R = Yi(), _ = S.useRef("touch"), D = /* @__PURE__ */ ke(() => {
      g.onValueChange(l), g.onOpenChange(!1);
    }, "handleSelect");
    return /* @__PURE__ */ y.jsx(
      iP,
      {
        scope: s,
        value: l,
        disabled: u,
        textId: R,
        isSelected: v,
        onItemTextChange: S.useCallback((M) => {
          x((B) => B || (M?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ y.jsx(
          Tf.ItemSlot,
          {
            scope: s,
            value: l,
            disabled: u,
            textValue: m,
            children: /* @__PURE__ */ y.jsx(
              Be.div,
              {
                role: "option",
                "aria-labelledby": R,
                "data-highlighted": T ? "" : void 0,
                "aria-selected": v && T,
                "data-state": v ? "checked" : "unchecked",
                "aria-disabled": u || void 0,
                "data-disabled": u ? "" : void 0,
                tabIndex: u ? void 0 : -1,
                ...h,
                ref: C,
                onFocus: xe(h.onFocus, () => w(!0)),
                onBlur: xe(h.onBlur, () => w(!1)),
                onClick: xe(h.onClick, () => {
                  u || _.current !== "mouse" && D();
                }),
                onPointerUp: xe(h.onPointerUp, () => {
                  u || _.current === "mouse" && D();
                }),
                onPointerDown: xe(h.onPointerDown, (M) => {
                  _.current = M.pointerType;
                }),
                onPointerMove: xe(h.onPointerMove, (M) => {
                  _.current = M.pointerType, u ? p.onItemLeave?.() : _.current === "mouse" && M.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: xe(h.onPointerLeave, (M) => {
                  M.currentTarget === document.activeElement && p.onItemLeave?.();
                }),
                onKeyDown: xe(h.onKeyDown, (M) => {
                  u || M.target !== M.currentTarget || p.searchRef?.current !== "" && M.key === " " || (zV.includes(M.key) && D(), M.key === " " && M.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), bu = "SelectItemText", oP = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ ke(function(i, o) {
    const { __scopeSelect: s, className: l, style: u, ...d } = i, h = Ha(bu, s), g = _o(bu, s), p = lA(bu, s), v = kV(bu, s), [m, x] = S.useState(null), T = Wn(
      (D) => g.itemTextRefCallback?.(D, p.value, p.disabled)
    ), w = Ye(
      o,
      x,
      p.onItemTextChange,
      T
    ), A = m?.textContent, C = S.useMemo(
      () => /* @__PURE__ */ y.jsx("option", { value: p.value, disabled: p.disabled, children: A }, p.value),
      [p.disabled, p.value, A]
    ), { onNativeOptionAdd: R, onNativeOptionRemove: _ } = v;
    return ut(() => (R(C), () => _(C)), [R, _, C]), /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(Be.span, { id: p.textId, ...d, ref: w }),
      p.isSelected && h.valueNode && !h.valueNodeHasChildren && !Ol(h.value) ? Do.createPortal(d.children, h.valueNode) : null
    ] });
  }, "SelectItemText")
), sP = "SelectItemIndicator", rP = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ke(function(i, o) {
    const { __scopeSelect: s, ...l } = i;
    return lA(sP, s).isSelected ? /* @__PURE__ */ y.jsx(Be.span, { "aria-hidden": !0, ...l, ref: o }) : null;
  }, "SelectItemIndicator")
), z1 = "SelectScrollUpButton", lP = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ ke(function(i, o) {
  const s = _o(z1, i.__scopeSelect), l = Hg(z1, i.__scopeSelect), [u, d] = S.useState(!1), h = Ye(o, l.onScrollButtonChange);
  return ut(() => {
    if (s.viewport && s.isPositioned) {
      let g = function() {
        const v = p.scrollTop > 0;
        d(v);
      };
      ke(g, "handleScroll");
      const p = s.viewport;
      return g(), p.addEventListener("scroll", g), () => p.removeEventListener("scroll", g);
    }
  }, [s.viewport, s.isPositioned]), u ? /* @__PURE__ */ y.jsx(
    cA,
    {
      ...i,
      ref: h,
      onAutoScroll: () => {
        const { viewport: g, selectedItem: p } = s;
        g && p && (g.scrollTop = g.scrollTop - p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), L1 = "SelectScrollDownButton", cP = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ ke(function(i, o) {
  const s = _o(L1, i.__scopeSelect), l = Hg(L1, i.__scopeSelect), [u, d] = S.useState(!1), h = Ye(o, l.onScrollButtonChange);
  return ut(() => {
    if (s.viewport && s.isPositioned) {
      let g = function() {
        const v = p.scrollHeight - p.clientHeight, m = Math.ceil(p.scrollTop) < v;
        d(m);
      };
      ke(g, "handleScroll");
      const p = s.viewport;
      return g(), p.addEventListener("scroll", g), () => p.removeEventListener("scroll", g);
    }
  }, [s.viewport, s.isPositioned]), u ? /* @__PURE__ */ y.jsx(
    cA,
    {
      ...i,
      ref: h,
      onAutoScroll: () => {
        const { viewport: g, selectedItem: p } = s;
        g && p && (g.scrollTop = g.scrollTop + p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), cA = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ ke(function(i, o) {
  const { __scopeSelect: s, onAutoScroll: l, ...u } = i, d = _o("SelectScrollButton", s), h = S.useRef(null), g = Ef(s), p = S.useCallback(() => {
    h.current !== null && (window.clearInterval(h.current), h.current = null);
  }, []);
  return S.useEffect(() => () => p(), [p]), ut(() => {
    g().find((m) => m.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [g]), /* @__PURE__ */ y.jsx(
    Be.div,
    {
      "aria-hidden": !0,
      ...u,
      ref: o,
      style: { flexShrink: 0, ...u.style },
      onPointerDown: xe(u.onPointerDown, () => {
        h.current === null && (h.current = window.setInterval(l, 50));
      }),
      onPointerMove: xe(u.onPointerMove, () => {
        d.onItemLeave?.(), h.current === null && (h.current = window.setInterval(l, 50));
      }),
      onPointerLeave: xe(u.onPointerLeave, () => {
        p();
      })
    }
  );
}, "SelectScrollButtonImpl")), uP = "SelectBubbleInput", fP = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ke(function({ __scopeSelect: i, ...o }, s) {
    const l = Ha(uP, i), { value: u, onValueChange: d, required: h, disabled: g, name: p, autoComplete: v, form: m } = l, { nativeOptions: x, nativeSelectKey: T } = l, w = S.useRef(null), A = Ye(s, w), C = u ?? "", R = oA(C), _ = Array.from(x).some(
      (D) => (D.props.value ?? "") === ""
    );
    return S.useEffect(() => {
      const D = w.current;
      if (!D) return;
      const M = window.HTMLSelectElement.prototype, U = Object.getOwnPropertyDescriptor(
        M,
        "value"
      ).set;
      if (R !== C && U) {
        const O = new Event("change", { bubbles: !0 });
        U.call(D, C), D.dispatchEvent(O);
      }
    }, [R, C]), /* @__PURE__ */ y.jsxs(
      Be.select,
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
        style: { ...NE, ...o.style },
        ref: A,
        defaultValue: C,
        children: [
          Ol(u) && !_ ? /* @__PURE__ */ y.jsx("option", { value: "" }) : null,
          Array.from(x)
        ]
      },
      T
    );
  }, "SelectBubbleInput")
);
function uA(n) {
  return typeof n == "function";
}
ke(uA, "isFunction");
function Ol(n) {
  return n === "" || n === void 0;
}
ke(Ol, "shouldShowPlaceholder");
function Ig(n) {
  const i = Wn(n), o = S.useRef(""), s = S.useRef(0), l = S.useCallback(
    (d) => {
      const h = o.current + d;
      i(h), (/* @__PURE__ */ ke((function g(p) {
        o.current = p, window.clearTimeout(s.current), p !== "" && (s.current = window.setTimeout(() => g(""), 1e3));
      }), "updateSearch"))(h);
    },
    [i]
  ), u = S.useCallback(() => {
    o.current = "", window.clearTimeout(s.current);
  }, []);
  return S.useEffect(() => () => window.clearTimeout(s.current), []), [o, l, u];
}
ke(Ig, "useTypeaheadSearch");
function qg(n, i, o) {
  const l = i.length > 1 && Array.from(i).every((p) => p === i[0]) ? i[0] : i, u = o ? n.indexOf(o) : -1;
  let d = fA(n, Math.max(u, 0));
  l.length === 1 && (d = d.filter((p) => p !== o));
  const g = d.find(
    (p) => p.textValue.toLowerCase().startsWith(l.toLowerCase())
  );
  return g !== o ? g : void 0;
}
ke(qg, "findNextItem");
function fA(n, i) {
  return n.map((o, s) => n[(i + s) % n.length]);
}
ke(fA, "wrapArray");
var dP = Object.defineProperty, Qs = (n, i) => dP(n, "name", { value: i, configurable: !0 }), dA = {
  Automatic: "automatic",
  Manual: "manual"
}, Gg = "Tabs", [hP, Qk] = /* @__PURE__ */ ei(Gg, [
  JC
]), hA = JC(), [mP, Yg] = hP(Gg), pP = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qs(function(i, o) {
    const {
      __scopeTabs: s,
      value: l,
      onValueChange: u,
      defaultValue: d,
      orientation: h = "horizontal",
      dir: g,
      activationMode: p = dA.Automatic,
      ...v
    } = i, m = lf(g), [x, T] = Qi({
      prop: l,
      onChange: u,
      defaultProp: d ?? "",
      caller: Gg
    });
    return /* @__PURE__ */ y.jsx(
      mP,
      {
        scope: s,
        baseId: Yi(),
        value: x,
        onValueChange: T,
        orientation: h,
        dir: m,
        activationMode: p,
        children: /* @__PURE__ */ y.jsx(
          Be.div,
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
), gP = "TabsList", vP = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qs(function(i, o) {
    const { __scopeTabs: s, loop: l = !0, ...u } = i, d = Yg(gP, s), h = hA(s);
    return /* @__PURE__ */ y.jsx(
      dV,
      {
        asChild: !0,
        ...h,
        orientation: d.orientation,
        dir: d.dir,
        loop: l,
        children: /* @__PURE__ */ y.jsx(
          Be.div,
          {
            role: "tablist",
            "aria-orientation": d.orientation,
            ...u,
            ref: o
          }
        )
      }
    );
  }, "TabsList")
), yP = "TabsTrigger", bP = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ Qs(function(i, o) {
    const { __scopeTabs: s, value: l, disabled: u = !1, ...d } = i, h = Yg(yP, s), g = hA(s), p = Fg(h.baseId, l), v = Xg(h.baseId, l), m = l === h.value;
    return /* @__PURE__ */ y.jsx(
      pV,
      {
        asChild: !0,
        ...g,
        focusable: !u,
        active: m,
        children: /* @__PURE__ */ y.jsx(
          Be.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": v,
            "data-state": m ? "active" : "inactive",
            "data-disabled": u ? "" : void 0,
            disabled: u,
            id: p,
            ...d,
            ref: o,
            onMouseDown: xe(i.onMouseDown, (x) => {
              !u && x.button === 0 && x.ctrlKey === !1 ? (x.currentTarget.focus(), h.onValueChange(l)) : x.preventDefault();
            }),
            onKeyDown: xe(i.onKeyDown, (x) => {
              u || x.target !== x.currentTarget || [" ", "Enter"].includes(x.key) && h.onValueChange(l);
            }),
            onFocus: xe(i.onFocus, () => {
              const x = h.activationMode !== dA.Manual;
              !m && !u && x && h.onValueChange(l);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), xP = "TabsContent", SP = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ Qs(function(i, o) {
    const { __scopeTabs: s, value: l, forceMount: u, children: d, ...h } = i, g = Yg(xP, s), p = Fg(g.baseId, l), v = Xg(g.baseId, l), m = l === g.value, x = S.useRef(m);
    return S.useEffect(() => {
      const T = requestAnimationFrame(() => x.current = !1);
      return () => cancelAnimationFrame(T);
    }, []), /* @__PURE__ */ y.jsx(Ei, { present: u || m, children: ({ present: T }) => /* @__PURE__ */ y.jsx(
      Be.div,
      {
        "data-state": m ? "active" : "inactive",
        "data-orientation": g.orientation,
        role: "tabpanel",
        "aria-labelledby": p,
        hidden: !T,
        id: v,
        tabIndex: 0,
        ...h,
        ref: o,
        style: {
          ...i.style,
          animationDuration: x.current ? "0s" : void 0
        },
        children: T && d
      }
    ) });
  }, "TabsContent")
);
function Fg(n, i) {
  return `${n}-trigger-${i}`;
}
Qs(Fg, "makeTriggerId");
function Xg(n, i) {
  return `${n}-content-${i}`;
}
Qs(Xg, "makeContentId");
var wP = Object.defineProperty, wt = (n, i) => wP(n, "name", { value: i, configurable: !0 }), [Kg, Jk] = /* @__PURE__ */ ei("Tooltip", [
  $s
]), Cf = $s(), TP = "TooltipProvider", EP = 700, Op = "tooltip.open", [CP, Zg] = Kg(TP), AP = /* @__PURE__ */ wt((n) => {
  const {
    __scopeTooltip: i,
    delayDuration: o = EP,
    skipDelayDuration: s = 300,
    disableHoverableContent: l = !1,
    children: u
  } = n, d = S.useRef(!0), h = S.useRef(!1), g = S.useRef(0);
  return S.useEffect(() => {
    const p = g.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ y.jsx(
    CP,
    {
      scope: i,
      isOpenDelayedRef: d,
      delayDuration: o,
      onOpen: S.useCallback(() => {
        s <= 0 || (window.clearTimeout(g.current), d.current = !1);
      }, [s]),
      onClose: S.useCallback(() => {
        s <= 0 || (window.clearTimeout(g.current), g.current = window.setTimeout(
          () => d.current = !0,
          s
        ));
      }, [s]),
      isPointerInTransitRef: h,
      onPointerInTransitChange: S.useCallback((p) => {
        h.current = p;
      }, []),
      disableHoverableContent: l,
      children: u
    }
  );
}, "TooltipProvider"), Mp = "Tooltip", [RP, Ml] = Kg(Mp), DP = /* @__PURE__ */ wt((n) => {
  const {
    __scopeTooltip: i,
    children: o,
    open: s,
    defaultOpen: l,
    onOpenChange: u,
    disableHoverableContent: d,
    delayDuration: h
  } = n, g = Zg(Mp, n.__scopeTooltip), p = Cf(i), [v, m] = S.useState(null), [x, T] = S.useState(void 0), w = Yi(), A = S.useRef(0), C = d ?? g.disableHoverableContent, R = h ?? g.delayDuration, _ = S.useRef(!1), [D, M] = Qi({
    prop: s,
    defaultProp: l ?? !1,
    onChange: /* @__PURE__ */ wt((Q) => {
      Q ? (g.onOpen(), document.dispatchEvent(new CustomEvent(Op))) : g.onClose(), u?.(Q);
    }, "onChange"),
    caller: Mp
  }), B = S.useMemo(() => D ? _.current ? "delayed-open" : "instant-open" : "closed", [D]), U = S.useCallback(() => {
    window.clearTimeout(A.current), A.current = 0, _.current = !1, M(!0);
  }, [M]), O = S.useCallback(() => {
    window.clearTimeout(A.current), A.current = 0, M(!1);
  }, [M]), N = S.useCallback(() => {
    window.clearTimeout(A.current), A.current = window.setTimeout(() => {
      _.current = !0, M(!0), A.current = 0;
    }, R);
  }, [R, M]);
  S.useEffect(() => () => {
    A.current && (window.clearTimeout(A.current), A.current = 0);
  }, []);
  const F = x ?? w;
  return /* @__PURE__ */ y.jsx(jg, { ...p, children: /* @__PURE__ */ y.jsx(
    RP,
    {
      scope: i,
      contentId: F,
      setContentId: T,
      open: D,
      stateAttribute: B,
      trigger: v,
      onTriggerChange: m,
      onTriggerEnter: S.useCallback(() => {
        g.isOpenDelayedRef.current ? N() : U();
      }, [g.isOpenDelayedRef, N, U]),
      onTriggerLeave: S.useCallback(() => {
        C ? O() : (window.clearTimeout(A.current), A.current = 0);
      }, [O, C]),
      onOpen: U,
      onClose: O,
      disableHoverableContent: C,
      children: o
    }
  ) });
}, "Tooltip"), V1 = "TooltipTrigger", OP = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ wt(function(i, o) {
    const { __scopeTooltip: s, "aria-describedby": l, ...u } = i, d = Ml(V1, s), h = Zg(V1, s), g = Cf(s), p = S.useRef(null), v = Ye(o, p, d.onTriggerChange), m = S.useRef(!1), x = S.useRef(!1), T = S.useCallback(() => m.current = !1, []);
    return S.useEffect(() => () => document.removeEventListener("pointerup", T), [T]), /* @__PURE__ */ y.jsx(zg, { asChild: !0, ...g, children: /* @__PURE__ */ y.jsx(
      Be.button,
      {
        "aria-describedby": d.open ? wA(l, d.contentId) : l,
        "data-state": d.stateAttribute,
        ...u,
        ref: v,
        onPointerMove: xe(i.onPointerMove, (w) => {
          w.pointerType !== "touch" && !x.current && !h.isPointerInTransitRef.current && (d.onTriggerEnter(), x.current = !0);
        }),
        onPointerLeave: xe(i.onPointerLeave, () => {
          d.onTriggerLeave(), x.current = !1;
        }),
        onPointerDown: xe(i.onPointerDown, () => {
          d.open && d.onClose(), m.current = !0, document.addEventListener("pointerup", T, { once: !0 });
        }),
        onFocus: xe(i.onFocus, () => {
          m.current || d.onOpen();
        }),
        onBlur: xe(i.onBlur, d.onClose),
        onClick: xe(i.onClick, d.onClose)
      }
    ) });
  }, "TooltipTrigger")
), mA = "TooltipPortal", [MP, NP] = Kg(mA, {
  forceMount: void 0
}), _P = /* @__PURE__ */ wt((n) => {
  const { __scopeTooltip: i, forceMount: o, children: s, container: l } = n, u = Ml(mA, i);
  return /* @__PURE__ */ y.jsx(MP, { scope: i, forceMount: o, children: /* @__PURE__ */ y.jsx(Ei, { present: o || u.open, children: /* @__PURE__ */ y.jsx(uf, { asChild: !0, container: l, children: s }) }) });
}, "TooltipPortal"), Tl = "TooltipContent", jP = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ wt(function(i, o) {
    const s = NP(Tl, i.__scopeTooltip), { forceMount: l = s.forceMount, side: u = "top", ...d } = i, h = Ml(Tl, i.__scopeTooltip);
    return /* @__PURE__ */ y.jsx(Ei, { present: l || h.open, children: h.disableHoverableContent ? /* @__PURE__ */ y.jsx(pA, { side: u, ...d, ref: o }) : /* @__PURE__ */ y.jsx(zP, { side: u, ...d, ref: o }) });
  }, "TooltipContent")
), zP = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ wt(function(i, o) {
  const s = Ml(Tl, i.__scopeTooltip), l = Zg(Tl, i.__scopeTooltip), u = S.useRef(null), d = Ye(o, u), [h, g] = S.useState(null), { trigger: p, onClose: v } = s, m = u.current, { onPointerInTransitChange: x } = l, T = S.useCallback(() => {
    g(null), x(!1);
  }, [x]), w = S.useCallback(
    (A, C) => {
      const R = A.currentTarget, _ = { x: A.clientX, y: A.clientY }, D = gA(_, R.getBoundingClientRect()), M = vA(_, D), B = yA(C.getBoundingClientRect()), U = xA([...M, ...B]);
      g(U), x(!0);
    },
    [x]
  );
  return S.useEffect(() => () => T(), [T]), S.useEffect(() => {
    if (p && m) {
      const A = /* @__PURE__ */ wt((R) => w(R, m), "handleTriggerLeave"), C = /* @__PURE__ */ wt((R) => w(R, p), "handleContentLeave");
      return p.addEventListener("pointerleave", A), m.addEventListener("pointerleave", C), () => {
        p.removeEventListener("pointerleave", A), m.removeEventListener("pointerleave", C);
      };
    }
  }, [p, m, w, T]), S.useEffect(() => {
    if (h) {
      const A = /* @__PURE__ */ wt((C) => {
        const R = C.target, _ = { x: C.clientX, y: C.clientY }, D = p?.contains(R) || m?.contains(R), M = !bA(_, h);
        D ? T() : M && (T(), v());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", A), () => document.removeEventListener("pointermove", A);
    }
  }, [p, m, h, v, T]), /* @__PURE__ */ y.jsx(pA, { ...i, ref: d });
}, "TooltipContentHoverable")), LP = /* @__PURE__ */ EE("TooltipContent"), pA = /* @__PURE__ */ S.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wt(function(i, o) {
    const {
      __scopeTooltip: s,
      children: l,
      "aria-label": u,
      id: d,
      onEscapeKeyDown: h,
      onPointerDownOutside: g,
      ...p
    } = i, v = Ml(Tl, s), m = Cf(s), { onClose: x } = v;
    S.useEffect(() => (document.addEventListener(Op, x), () => document.removeEventListener(Op, x)), [x]), S.useEffect(() => {
      if (v.trigger) {
        const w = /* @__PURE__ */ wt((A) => {
          A.target instanceof Node && A.target.contains(v.trigger) && x();
        }, "handleScroll");
        return window.addEventListener("scroll", w, { capture: !0 }), () => window.removeEventListener("scroll", w, { capture: !0 });
      }
    }, [v.trigger, x]);
    const { setContentId: T } = v;
    return ut(() => (T(d), () => {
      T(void 0);
    }), [d, T]), /* @__PURE__ */ y.jsx(
      cf,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: h,
        onPointerDownOutside: g,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: x,
        children: /* @__PURE__ */ y.jsxs(
          Lg,
          {
            "data-state": v.stateAttribute,
            role: u ? void 0 : "tooltip",
            id: u ? void 0 : v.contentId,
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
              /* @__PURE__ */ y.jsx(LP, { children: l }),
              u ? /* @__PURE__ */ y.jsx(n5, { id: v.contentId, role: "tooltip", children: u }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
), VP = /* @__PURE__ */ S.forwardRef(
  /* @__PURE__ */ wt(function(i, o) {
    const { __scopeTooltip: s, ...l } = i, u = Cf(s);
    return /* @__PURE__ */ y.jsx(tV, { ...u, ...l, ref: o });
  }, "TooltipArrow")
);
function gA(n, i) {
  const o = Math.abs(i.top - n.y), s = Math.abs(i.bottom - n.y), l = Math.abs(i.right - n.x), u = Math.abs(i.left - n.x);
  switch (Math.min(o, s, l, u)) {
    case u:
      return "left";
    case l:
      return "right";
    case o:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
wt(gA, "getExitSideFromRect");
function vA(n, i, o = 5) {
  const s = [];
  switch (i) {
    case "top":
      s.push(
        { x: n.x - o, y: n.y + o },
        { x: n.x + o, y: n.y + o }
      );
      break;
    case "bottom":
      s.push(
        { x: n.x - o, y: n.y - o },
        { x: n.x + o, y: n.y - o }
      );
      break;
    case "left":
      s.push(
        { x: n.x + o, y: n.y - o },
        { x: n.x + o, y: n.y + o }
      );
      break;
    case "right":
      s.push(
        { x: n.x - o, y: n.y - o },
        { x: n.x - o, y: n.y + o }
      );
      break;
  }
  return s;
}
wt(vA, "getPaddedExitPoints");
function yA(n) {
  const { top: i, right: o, bottom: s, left: l } = n;
  return [
    { x: l, y: i },
    { x: o, y: i },
    { x: o, y: s },
    { x: l, y: s }
  ];
}
wt(yA, "getPointsFromRect");
function bA(n, i) {
  const { x: o, y: s } = n;
  let l = !1;
  for (let u = 0, d = i.length - 1; u < i.length; d = u++) {
    const h = i[u], g = i[d], p = h.x, v = h.y, m = g.x, x = g.y;
    v > s != x > s && o < (m - p) * (s - v) / (x - v) + p && (l = !l);
  }
  return l;
}
wt(bA, "isPointInPolygon");
function xA(n) {
  const i = n.slice();
  return i.sort((o, s) => o.x < s.x ? -1 : o.x > s.x ? 1 : o.y < s.y ? -1 : o.y > s.y ? 1 : 0), SA(i);
}
wt(xA, "getHull");
function SA(n) {
  if (n.length <= 1) return n.slice();
  const i = [];
  for (let s = 0; s < n.length; s++) {
    const l = n[s];
    for (; i.length >= 2; ) {
      const u = i[i.length - 1], d = i[i.length - 2];
      if ((u.x - d.x) * (l.y - d.y) >= (u.y - d.y) * (l.x - d.x)) i.pop();
      else break;
    }
    i.push(l);
  }
  i.pop();
  const o = [];
  for (let s = n.length - 1; s >= 0; s--) {
    const l = n[s];
    for (; o.length >= 2; ) {
      const u = o[o.length - 1], d = o[o.length - 2];
      if ((u.x - d.x) * (l.y - d.y) >= (u.y - d.y) * (l.x - d.x)) o.pop();
      else break;
    }
    o.push(l);
  }
  return o.pop(), i.length === 1 && o.length === 1 && i[0].x === o[0].x && i[0].y === o[0].y ? i : i.concat(o);
}
wt(SA, "getHullPresorted");
function wA(...n) {
  const i = /* @__PURE__ */ new Set();
  for (const o of n)
    if (typeof o == "string")
      for (const s of String(o).trim().split(/\s+/))
        s && i.add(s);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
wt(wA, "concatAriaDescribedby");
const PP = rE(
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
function Lt({
  className: n,
  variant: i = "default",
  size: o = "default",
  asChild: s = !1,
  ...l
}) {
  const u = s ? Fz : "button";
  return /* @__PURE__ */ y.jsx(
    u,
    {
      "data-slot": "button",
      "data-variant": i,
      "data-size": o,
      className: Le(PP({ variant: i, size: o, className: n })),
      ...l
    }
  );
}
function kP({
  className: n,
  orientation: i = "horizontal",
  ...o
}) {
  return /* @__PURE__ */ y.jsx(
    pP,
    {
      "data-slot": "tabs",
      "data-orientation": i,
      orientation: i,
      className: Le("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", n),
      ...o
    }
  );
}
const BP = rE(
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
function UP({
  className: n,
  variant: i = "default",
  ...o
}) {
  return /* @__PURE__ */ y.jsx(
    vP,
    {
      "data-slot": "tabs-list",
      "data-variant": i,
      className: Le(BP({ variant: i }), n),
      ...o
    }
  );
}
function P1({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    bP,
    {
      "data-slot": "tabs-trigger",
      className: Le(
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
function k1({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    SP,
    {
      "data-slot": "tabs-content",
      className: Le("flex-1 outline-none", n),
      ...i
    }
  );
}
function Js() {
  if (typeof document > "u") return;
  const n = document.getElementById("cats-course-workspace-portals");
  if (n) return n;
  const i = document.createElement("div");
  return i.id = "cats-course-workspace-portals", i.className = "cats-course-workspace", i.dataset.courseWorkspacePortal = "", document.body.append(i), i;
}
function HP({
  delayDuration: n = 0,
  ...i
}) {
  return /* @__PURE__ */ y.jsx(
    AP,
    {
      "data-slot": "tooltip-provider",
      delayDuration: n,
      ...i
    }
  );
}
function IP({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    DP,
    {
      "data-slot": "tooltip",
      ...n
    }
  );
}
function qP({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    OP,
    {
      "data-slot": "tooltip-trigger",
      ...n
    }
  );
}
function GP({
  className: n,
  sideOffset: i = 0,
  children: o,
  ...s
}) {
  return /* @__PURE__ */ y.jsx(_P, { container: Js(), children: /* @__PURE__ */ y.jsxs(
    jP,
    {
      "data-slot": "tooltip-content",
      sideOffset: i,
      className: Le(
        "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        n
      ),
      ...s,
      children: [
        o,
        /* @__PURE__ */ y.jsx(VP, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}
function xu({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: Le("animate-pulse rounded-md bg-accent", n),
      ...i
    }
  );
}
function TA({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-slot": "card",
      className: Le(
        "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
        n
      ),
      ...i
    }
  );
}
function EA({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: Le("px-6", n),
      ...i
    }
  );
}
function CA({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: Le("flex items-center px-6 [.border-t]:pt-6", n),
      ...i
    }
  );
}
function AA({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    L4,
    {
      "data-slot": "checkbox",
      className: Le(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        n
      ),
      ...i,
      children: /* @__PURE__ */ y.jsx(
        P4,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ y.jsx(dg, { className: "size-3.5" })
        }
      )
    }
  );
}
function YP({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    bV,
    {
      "data-slot": "hover-card",
      ...n
    }
  );
}
function FP({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    SV,
    {
      "data-slot": "hover-card-trigger",
      ...n
    }
  );
}
function XP({
  className: n,
  align: i = "center",
  sideOffset: o = 4,
  ...s
}) {
  return /* @__PURE__ */ y.jsx(
    EV,
    {
      "data-slot": "hover-card-portal",
      container: Js(),
      children: /* @__PURE__ */ y.jsx(
        CV,
        {
          "data-slot": "hover-card-content",
          align: i,
          sideOffset: o,
          className: Le(
            "z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            n
          ),
          ...s
        }
      )
    }
  );
}
function KP(n, i) {
  S.useEffect(() => {
    const o = (s) => {
      !n || !n.current || n.current.contains(s.target) || i(s);
    };
    return document.addEventListener("mousedown", o), document.addEventListener("touchstart", o), () => {
      document.removeEventListener("mousedown", o), document.removeEventListener("touchstart", o);
    };
  }, [n, i]);
}
const RA = oe.createContext(null), DA = oe.createContext(!1);
function Ws() {
  const n = S.useContext(RA);
  if (!n)
    throw new Error("useMorphingDialog must be used within a MorphingDialogProvider");
  return n;
}
function ZP({ children: n, transition: i }) {
  const [o, s] = S.useState(!1), l = S.useId(), u = S.useRef(null), d = S.useMemo(
    () => ({
      isOpen: o,
      setIsOpen: s,
      uniqueId: l,
      triggerRef: u
    }),
    [o, l]
  );
  return /* @__PURE__ */ y.jsx(RA.Provider, { value: d, children: /* @__PURE__ */ y.jsx(lg, { transition: i, children: n }) });
}
function OA({ children: n, transition: i }) {
  return /* @__PURE__ */ y.jsx(ZP, { children: /* @__PURE__ */ y.jsx(lg, { transition: i, children: n }) });
}
function MA({
  children: n,
  className: i,
  style: o,
  triggerRef: s,
  "aria-label": l
}) {
  const { setIsOpen: u, isOpen: d, uniqueId: h, triggerRef: g } = Ws(), p = S.useCallback(() => {
    u(!d);
  }, [d, u]), v = S.useCallback(
    (m) => {
      (m.key === "Enter" || m.key === " ") && (m.preventDefault(), u(!d));
    },
    [d, u]
  );
  return /* @__PURE__ */ y.jsx(
    ka.button,
    {
      ref: (m) => {
        g.current = m, s && (s.current = m);
      },
      type: "button",
      layoutId: `dialog-${h}`,
      className: Le("relative cursor-pointer", i),
      onClick: p,
      onKeyDown: v,
      style: o,
      "aria-haspopup": "dialog",
      "aria-expanded": d,
      "aria-controls": `motion-ui-morphing-dialog-content-${h}`,
      "aria-label": l,
      children: n
    }
  );
}
function NA({ children: n, className: i, style: o }) {
  const { setIsOpen: s, isOpen: l, uniqueId: u, triggerRef: d } = Ws(), h = S.useRef(null);
  return S.useEffect(() => {
    if (!l) return;
    const g = () => Array.from(
      h.current?.querySelectorAll(
        'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
      ) ?? []
    ).filter(
      (m) => m.getClientRects().length > 0 && !m.closest("[hidden], [inert]")
    ), p = document.body.style.overflow;
    document.body.style.overflow = "hidden", (g()[0] ?? h.current)?.focus();
    const v = (m) => {
      if (m.key === "Escape" && (m.preventDefault(), s(!1)), m.key === "Tab") {
        const x = g(), T = x[0], w = x.at(-1);
        !T || !w ? (m.preventDefault(), h.current?.focus()) : m.shiftKey && (document.activeElement === T || !h.current?.contains(document.activeElement)) ? (m.preventDefault(), w.focus()) : !m.shiftKey && (document.activeElement === w || !h.current?.contains(document.activeElement)) && (m.preventDefault(), T.focus());
      }
    };
    return document.addEventListener("keydown", v), () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = p, d.current?.focus();
    };
  }, [l, s, d]), KP(h, () => {
    l && s(!1);
  }), /* @__PURE__ */ y.jsx(
    ka.div,
    {
      ref: h,
      layoutId: `dialog-${u}`,
      className: Le("overflow-hidden", i),
      style: o,
      id: `motion-ui-morphing-dialog-content-${u}`,
      tabIndex: -1,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": `motion-ui-morphing-dialog-title-${u}`,
      children: /* @__PURE__ */ y.jsx(DA.Provider, { value: !0, children: n })
    }
  );
}
function _A({ children: n, className: i, style: o }) {
  const { isOpen: s, uniqueId: l } = Ws(), [u, d] = S.useState(!1);
  return S.useEffect(() => (d(!0), () => d(!1)), []), u ? Do.createPortal(
    /* @__PURE__ */ y.jsx(
      vT,
      {
        initial: !1,
        mode: "sync",
        children: s && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
          /* @__PURE__ */ y.jsx(
            ka.div,
            {
              className: "fixed inset-0 h-full w-full bg-white/40 backdrop-blur-xs dark:bg-black/40",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 }
            },
            `backdrop-${l}`
          ),
          /* @__PURE__ */ y.jsx(
            "div",
            {
              className: Le("fixed inset-0 z-50 flex items-center justify-center", i),
              style: o,
              children: n
            }
          )
        ] })
      }
    ),
    Js() ?? document.body
  ) : null;
}
function Qu({ children: n, className: i, style: o }) {
  const { uniqueId: s } = Ws(), l = S.useContext(DA);
  return /* @__PURE__ */ y.jsx(
    ka.div,
    {
      id: l ? `motion-ui-morphing-dialog-title-${s}` : void 0,
      layoutId: `dialog-title-container-${s}`,
      className: i,
      style: o,
      layout: !0,
      children: n
    }
  );
}
function Ju({ children: n, className: i, style: o }) {
  const { uniqueId: s } = Ws();
  return /* @__PURE__ */ y.jsx(
    ka.div,
    {
      layoutId: `dialog-subtitle-container-${s}`,
      className: i,
      style: o,
      children: n
    }
  );
}
function jA({ children: n, className: i, variants: o }) {
  const { setIsOpen: s, uniqueId: l } = Ws(), u = S.useCallback(() => {
    s(!1);
  }, [s]);
  return /* @__PURE__ */ y.jsx(
    ka.button,
    {
      onClick: u,
      type: "button",
      "aria-label": "Close dialog",
      className: Le("absolute top-6 right-6", i),
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: o,
      children: n || /* @__PURE__ */ y.jsx(Us, { size: 24 })
    },
    `dialog-close-${l}`
  );
}
const zA = [
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
function $P(n, i, o) {
  const s = new URL(n.url, i);
  if (n.status !== 200 || n.redirected || s.origin !== i || s.pathname !== o)
    throw new Error("The request snapshot could not be loaded. Your session may have expired.");
}
function QP(n, i, o, s) {
  if (i.role !== n.role || i.id !== n.id)
    throw new Error("Your session has changed or expired. Open the request list to sign in again.");
  const l = n.role === "EMPLOYEE" ? "current-year-course-start" : "assigned-students";
  if (!o || o.schemaVersion !== "1" || o.role !== n.role || o.identityId !== n.id || o.scope !== l)
    throw new Error(
      "The service returned an unexpected request snapshot. Open the original request list to check it."
    );
  const u = /* @__PURE__ */ new Set();
  for (const d of s) {
    for (const g of zA)
      if (!Object.hasOwn(d, g) || typeof d[g] != "string")
        throw new Error(
          "A request is missing a required snapshot field. Open the original request list to check it."
        );
    const h = d.id;
    if (!/^\d+$/.test(h) || u.has(h))
      throw new Error("The application snapshot contains invalid or duplicate record IDs.");
    if (u.add(h), n.role === "EMPLOYEE" && d.applicantId !== n.id)
      throw new Error(
        "The returned requests do not belong to this account. Open the original request list."
      );
  }
  return s;
}
const Is = {
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
function JP(n) {
  const i = n.dataset.role, o = n.dataset.userId || "";
  if (i !== "EMPLOYEE" && i !== "MANAGER" || !/^\d+$/.test(o))
    throw new Error("This account cannot open the request workspace.");
  const s = { role: i, id: o };
  if (!WP(document, s) || n.dataset.source !== Is[i].route)
    throw new Error("The workspace does not match the current account.");
  return s;
}
function WP(n, i) {
  const o = n.querySelector(
    ".sidebar-identity[data-cats-role][data-cats-user-id]"
  );
  return o?.dataset.catsRole === i.role && o.dataset.catsUserId === i.id;
}
function El() {
  const n = window.CATS_INSIGHTS_DATA;
  if (!n || n.schemaVersion !== 1 || n.fields.length !== 12)
    throw new Error("The request data tools could not be loaded. Open the original request list.");
  return n;
}
function ek(n, i) {
  const o = new DOMParser().parseFromString(n, "text/html"), s = Is[i.role], l = El(), u = o.querySelector(
    ".sidebar-identity[data-cats-role][data-cats-user-id]"
  ), d = o.querySelector(s.marker), h = Array.from(d?.querySelectorAll(s.row) || [], (v) => {
    const m = {};
    for (const x of zA)
      Object.hasOwn(v.dataset, x) && (m[x] = v.dataset[x] || "");
    return m;
  }), g = QP(
    i,
    { role: u?.dataset.catsRole, id: u?.dataset.catsUserId },
    d ? {
      schemaVersion: d.dataset.schemaVersion,
      role: d.dataset.role,
      identityId: d.dataset[s.identityField],
      scope: d.dataset.scope
    } : null,
    h
  ), p = l.normalize(g);
  return l.sort(p, { field: "created", direction: "desc" });
}
async function tk(n, i) {
  const o = Is[n.role], s = await fetch(o.route, {
    method: "GET",
    credentials: "same-origin",
    cache: "no-store",
    headers: { Accept: "text/html" },
    signal: i
  });
  return $P(s, window.location.origin, o.route), {
    records: ek(await s.text(), n),
    loadedAt: /* @__PURE__ */ new Date(),
    scope: o.scope
  };
}
function LA(n, i) {
  return Is[n.role].detail + i.id;
}
const nk = {
  APPLIED: "Awaiting review",
  UPDATED: "Updated, awaiting review",
  APPROVED: "Approved",
  COMPLETED: "Completed",
  REJECTED: "Rejected",
  CANCELLED: "Cancelled",
  DELETED: "Deleted"
};
function Np(n) {
  return nk[n] || "Status not recorded";
}
function Su(n) {
  return n ? new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(/* @__PURE__ */ new Date(n.slice(0, 10) + "T00:00:00Z")) : "Not recorded";
}
function zs(n) {
  if (n == null) return "Not recorded";
  const [i, o] = n.split("."), s = i.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return o == null ? s : `${s}.${o}`;
}
function VA(n) {
  const i = n.trim().split(/\s+/).filter(Boolean);
  return (i.length > 1 ? i[0][0] + i[i.length - 1][0] : i[0]?.slice(0, 2) || "?").toUpperCase();
}
function ik(n) {
  return {
    count: n.length,
    fee: El().sumDecimals(n.map((i) => i.fee)),
    days: El().sumDecimals(n.map((i) => i.days)),
    missingFee: n.filter((i) => i.fee == null).length,
    missingDays: n.filter((i) => i.days == null).length
  };
}
function ak(n) {
  if (n == null) return null;
  const i = Number(n);
  if (!Number.isFinite(i) || Math.abs(i) > Number.MAX_SAFE_INTEGER || /e/i.test(String(i)))
    return null;
  const o = El().sumDecimals([n, String(-i)]);
  return o != null && /^-?0(?:\.0+)?$/.test(o) ? i : null;
}
function ok({
  record: n,
  identity: i,
  selected: o,
  reducedMotion: s,
  studentCount: l,
  onToggle: u,
  onStudent: d
}) {
  const h = n.status === "REJECTED" ? Us : n.status === "CANCELLED" ? U3 : n.status === "DELETED" ? Q3 : ["APPROVED", "COMPLETED"].includes(n.status) ? dg : ["APPLIED", "UPDATED"].includes(n.status) ? G3 : F3;
  return /* @__PURE__ */ y.jsxs(
    OA,
    {
      transition: s ? { duration: 0 } : { type: "spring", bounce: 0.08, duration: 0.35 },
      children: [
        /* @__PURE__ */ y.jsxs(
          TA,
          {
            className: `cw-request-card ${o ? "cw-selected" : ""}`,
            "data-record-id": n.id,
            "data-request-status": n.status,
            children: [
              /* @__PURE__ */ y.jsxs("div", { className: "cw-card-band", children: [
                /* @__PURE__ */ y.jsx(fg, { "aria-hidden": "true" }),
                /* @__PURE__ */ y.jsx("span", { children: n.category || "Category not set" }),
                /* @__PURE__ */ y.jsxs("span", { className: "cw-reference", children: [
                  "#",
                  n.id
                ] })
              ] }),
              /* @__PURE__ */ y.jsxs(EA, { className: "cw-card-main", children: [
                /* @__PURE__ */ y.jsxs(
                  MA,
                  {
                    className: "cw-card-open",
                    "aria-label": `Preview request ${n.id}: ${n.title || "Untitled request"}`,
                    children: [
                      /* @__PURE__ */ y.jsx(Qu, { className: "cw-card-title", children: n.title || "Untitled request" }),
                      /* @__PURE__ */ y.jsx(Ju, { className: "cw-provider", children: n.provider || "Provider not recorded" })
                    ]
                  }
                ),
                i.role === "MANAGER" && /* @__PURE__ */ y.jsxs(YP, { children: [
                  /* @__PURE__ */ y.jsx(FP, { asChild: !0, children: /* @__PURE__ */ y.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "cw-student",
                      onClick: () => d(n),
                      children: [
                        /* @__PURE__ */ y.jsx(
                          "span",
                          {
                            className: "cw-avatar",
                            "aria-hidden": "true",
                            children: VA(n.learner)
                          }
                        ),
                        n.learner || "Name not recorded"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ y.jsxs(XP, { className: "cw-hover", children: [
                    /* @__PURE__ */ y.jsx("strong", { children: n.learner || "Name not recorded" }),
                    /* @__PURE__ */ y.jsxs("p", { children: [
                      "Employee ID ",
                      n.applicantId || "not recorded"
                    ] }),
                    /* @__PURE__ */ y.jsxs("p", { children: [
                      l,
                      " ",
                      l === 1 ? "request" : "requests",
                      " in this snapshot"
                    ] }),
                    /* @__PURE__ */ y.jsx("span", { children: "Click to view this information." })
                  ] })
                ] }),
                /* @__PURE__ */ y.jsxs("dl", { className: "cw-card-facts", children: [
                  /* @__PURE__ */ y.jsxs("div", { children: [
                    /* @__PURE__ */ y.jsxs("dt", { children: [
                      /* @__PURE__ */ y.jsx(H3, { "aria-hidden": "true" }),
                      "Course starts"
                    ] }),
                    /* @__PURE__ */ y.jsx("dd", { children: Su(n.start) })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { children: [
                    /* @__PURE__ */ y.jsx("dt", { children: "Course fee" }),
                    /* @__PURE__ */ y.jsx("dd", { children: n.fee == null ? "Not recorded" : `S$${zs(n.fee)}` })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { children: [
                    /* @__PURE__ */ y.jsx("dt", { children: "Training days" }),
                    /* @__PURE__ */ y.jsx("dd", { children: zs(n.days) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ y.jsxs(CA, { className: "cw-card-footer", children: [
                /* @__PURE__ */ y.jsxs(
                  "span",
                  {
                    className: "cw-status",
                    "data-status": n.status,
                    children: [
                      /* @__PURE__ */ y.jsx(h, { "aria-hidden": "true" }),
                      Np(n.status)
                    ]
                  }
                ),
                /* @__PURE__ */ y.jsxs("div", { className: "cw-compare", children: [
                  /* @__PURE__ */ y.jsxs(IP, { children: [
                    /* @__PURE__ */ y.jsx(qP, { asChild: !0, children: /* @__PURE__ */ y.jsx(
                      AA,
                      {
                        id: `compare-${n.id}`,
                        checked: o,
                        onCheckedChange: () => u(n.id),
                        "aria-label": `Select request ${n.id} for comparison`
                      }
                    ) }),
                    /* @__PURE__ */ y.jsx(GP, { children: "Compare existing requests. No application is submitted." })
                  ] }),
                  /* @__PURE__ */ y.jsx("label", { htmlFor: `compare-${n.id}`, children: "Compare" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ y.jsx(_A, { children: /* @__PURE__ */ y.jsxs(NA, { className: "cw-detail", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "cw-detail-heading", children: [
            /* @__PURE__ */ y.jsxs("span", { className: "cw-reference", children: [
              "REQUEST #",
              n.id
            ] }),
            /* @__PURE__ */ y.jsx(jA, { className: "cw-dialog-close" })
          ] }),
          /* @__PURE__ */ y.jsx(Qu, { className: "cw-detail-title", children: n.title || "Untitled request" }),
          /* @__PURE__ */ y.jsx(Ju, { className: "cw-provider", children: n.provider || "Provider not recorded" }),
          /* @__PURE__ */ y.jsx(
            "span",
            {
              className: "cw-status",
              "data-status": n.status,
              children: Np(n.status)
            }
          ),
          /* @__PURE__ */ y.jsxs("dl", { className: "cw-detail-facts", children: [
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Category" }),
              /* @__PURE__ */ y.jsx("dd", { children: n.category || "Not recorded" })
            ] }),
            i.role === "MANAGER" && /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsxs("dt", { children: [
                /* @__PURE__ */ y.jsx(nE, { "aria-hidden": "true" }),
                "Employee"
              ] }),
              /* @__PURE__ */ y.jsxs("dd", { children: [
                n.learner || "Name not recorded",
                " ",
                n.applicantId ? `(ID ${n.applicantId})` : ""
              ] })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Course starts" }),
              /* @__PURE__ */ y.jsx("dd", { children: Su(n.start) })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Course ends" }),
              /* @__PURE__ */ y.jsx("dd", { children: Su(n.end) })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Request created" }),
              /* @__PURE__ */ y.jsx("dd", { children: Su(n.created) })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Course fee" }),
              /* @__PURE__ */ y.jsx("dd", { children: n.fee == null ? "Not recorded" : `S$${zs(n.fee)}` })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Training days" }),
              /* @__PURE__ */ y.jsx("dd", { children: zs(n.days) })
            ] })
          ] }),
          /* @__PURE__ */ y.jsx("p", { className: "cw-boundary", children: "A read-only preview of the current Java request. Review decisions and changes are made on its original page." }),
          /* @__PURE__ */ y.jsx(
            Lt,
            {
              asChild: !0,
              className: "cw-primary",
              children: /* @__PURE__ */ y.jsxs("a", { href: LA(i, n), children: [
                "Open original request",
                /* @__PURE__ */ y.jsx(Bs, { "aria-hidden": "true" })
              ] })
            }
          )
        ] }) })
      ]
    }
  );
}
function PA({ className: n, type: i, ...o }) {
  return /* @__PURE__ */ y.jsx(
    "input",
    {
      type: i,
      "data-slot": "input",
      className: Le(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        n
      ),
      ...o
    }
  );
}
function sk({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    BV,
    {
      "data-slot": "select",
      ...n
    }
  );
}
function rk({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    qV,
    {
      "data-slot": "select-value",
      ...n
    }
  );
}
function lk({
  className: n,
  size: i = "default",
  children: o,
  ...s
}) {
  return /* @__PURE__ */ y.jsxs(
    HV,
    {
      "data-slot": "select-trigger",
      "data-size": i,
      className: Le(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        n
      ),
      ...s,
      children: [
        o,
        /* @__PURE__ */ y.jsx(GV, { asChild: !0, children: /* @__PURE__ */ y.jsx(UT, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function ck({
  className: n,
  children: i,
  position: o = "item-aligned",
  align: s = "center",
  ...l
}) {
  return /* @__PURE__ */ y.jsx(KV, { container: Js(), children: /* @__PURE__ */ y.jsxs(
    ZV,
    {
      "data-slot": "select-content",
      className: Le(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        n
      ),
      position: o,
      align: s,
      ...l,
      children: [
        /* @__PURE__ */ y.jsx(uk, {}),
        /* @__PURE__ */ y.jsx(
          tP,
          {
            className: Le(
              "p-1",
              o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: i
          }
        ),
        /* @__PURE__ */ y.jsx(fk, {})
      ]
    }
  ) });
}
function B1({
  className: n,
  children: i,
  ...o
}) {
  return /* @__PURE__ */ y.jsxs(
    aP,
    {
      "data-slot": "select-item",
      className: Le(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        n
      ),
      ...o,
      children: [
        /* @__PURE__ */ y.jsx(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ y.jsx(rP, { children: /* @__PURE__ */ y.jsx(dg, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ y.jsx(oP, { children: i })
      ]
    }
  );
}
function uk({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ y.jsx(
    lP,
    {
      "data-slot": "select-scroll-up-button",
      className: Le("flex cursor-default items-center justify-center py-1", n),
      ...i,
      children: /* @__PURE__ */ y.jsx(q3, { className: "size-4" })
    }
  );
}
function fk({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ y.jsx(
    cP,
    {
      "data-slot": "select-scroll-down-button",
      className: Le("flex cursor-default items-center justify-center py-1", n),
      ...i,
      children: /* @__PURE__ */ y.jsx(UT, { className: "size-4" })
    }
  );
}
function dk({
  children: n,
  defaultValue: i,
  onValueChange: o,
  className: s,
  transition: l,
  enableHover: u = !1
}) {
  const [d, h] = S.useState(null), g = S.useId(), p = (v) => {
    h(v), o && o(v);
  };
  return S.useEffect(() => {
    i !== void 0 && h(i);
  }, [i]), S.Children.map(n, (v, m) => {
    const x = v.props["data-id"], T = u ? {
      onMouseEnter: () => p(x),
      onMouseLeave: () => p(null)
    } : {
      onClick: () => p(x)
    };
    return S.cloneElement(
      v,
      {
        key: m,
        className: Le("relative inline-flex", v.props.className),
        "data-checked": d === x ? "true" : "false",
        ...T
      },
      /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(vT, { initial: !1, children: d === x && /* @__PURE__ */ y.jsx(
          ka.div,
          {
            layoutId: `background-${g}`,
            className: Le("absolute inset-0", s),
            transition: l,
            initial: { opacity: i ? 1 : 0 },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            }
          }
        ) }),
        /* @__PURE__ */ y.jsx("div", { className: "z-10", children: v.props.children })
      ] })
    );
  });
}
const hk = {
  all: [],
  pending: ["APPLIED", "UPDATED"],
  accepted: ["APPROVED", "COMPLETED"],
  rejected: ["REJECTED"]
}, mk = [
  { id: "all", label: "All requests" },
  { id: "pending", label: "Awaiting review" },
  { id: "accepted", label: "Approved or completed" },
  { id: "rejected", label: "Rejected" }
];
function pk({
  search: n,
  status: i,
  category: o,
  categories: s,
  reducedMotion: l,
  onSearch: u,
  onStatus: d,
  onCategory: h,
  onReset: g
}) {
  return /* @__PURE__ */ y.jsxs("div", { className: "cw-filter-area", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "cw-filter-row", children: [
      /* @__PURE__ */ y.jsxs("label", { className: "cw-search", children: [
        /* @__PURE__ */ y.jsx(QT, { "aria-hidden": "true" }),
        /* @__PURE__ */ y.jsx(
          PA,
          {
            type: "search",
            value: n,
            onChange: (p) => u(p.target.value),
            placeholder: "Search title, provider, employee or reference",
            "aria-label": "Search requests"
          }
        )
      ] }),
      /* @__PURE__ */ y.jsxs(
        sk,
        {
          value: o,
          onValueChange: h,
          children: [
            /* @__PURE__ */ y.jsx(
              lk,
              {
                className: "cw-category",
                "aria-label": "Filter request category",
                children: /* @__PURE__ */ y.jsx(rk, { placeholder: "All categories" })
              }
            ),
            /* @__PURE__ */ y.jsxs(ck, { className: "cw-select-content", children: [
              /* @__PURE__ */ y.jsx(B1, { value: "all", children: "All categories" }),
              s.map((p) => /* @__PURE__ */ y.jsx(
                B1,
                {
                  value: p,
                  children: p
                },
                p
              ))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ y.jsxs(
        Lt,
        {
          variant: "ghost",
          className: "cw-reset",
          disabled: !n && i === "all" && o === "all",
          onClick: g,
          children: [
            /* @__PURE__ */ y.jsx(K3, { "aria-hidden": "true" }),
            "Reset"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx(
      "div",
      {
        className: "cw-status-options",
        role: "group",
        "aria-label": "Request status filters",
        children: /* @__PURE__ */ y.jsx(
          dk,
          {
            defaultValue: i,
            onValueChange: (p) => {
              p && d(p);
            },
            className: "cw-animated-background",
            transition: l ? { duration: 0 } : { type: "spring", bounce: 0.08, duration: 0.3 },
            children: mk.map((p) => /* @__PURE__ */ y.jsx(
              "button",
              {
                type: "button",
                "data-id": p.id,
                className: "cw-status-option",
                "aria-pressed": i === p.id,
                onClick: () => d(p.id),
                children: p.label
              },
              p.id
            ))
          }
        )
      }
    )
  ] });
}
const al = 9;
function gk({
  identity: n,
  snapshot: i,
  loading: o,
  error: s,
  reducedMotion: l,
  selectedIds: u,
  onToggle: d,
  onStudent: h,
  retry: g
}) {
  const [p, v] = S.useState(""), [m, x] = S.useState("all"), [T, w] = S.useState("all"), [A, C] = S.useState(1), R = S.useRef(null), _ = i?.records || [], D = S.useMemo(
    () => [...new Set(_.map((te) => te.category).filter(Boolean))].sort(
      (te, fe) => te.localeCompare(fe, "en")
    ),
    [_]
  ), M = S.useMemo(
    () => i ? El().filter(_, {
      search: p,
      status: hk[m],
      category: T === "all" ? "" : T
    }) : [],
    [i, p, m, T]
  ), B = S.useMemo(() => {
    const te = /* @__PURE__ */ new Map();
    return _.forEach((fe) => {
      fe.applicantId && te.set(fe.applicantId, (te.get(fe.applicantId) || 0) + 1);
    }), te;
  }, [_]), U = Math.max(1, Math.ceil(M.length / al)), O = Math.min(A, U), N = M.slice((O - 1) * al, O * al), F = _.filter((te) => ["APPLIED", "UPDATED"].includes(te.status)).length;
  S.useEffect(() => {
    C(1);
  }, [p, m, T]), S.useEffect(() => {
    if (!i) return;
    if (R.current !== i.loadedAt) {
      R.current = i.loadedAt;
      return;
    }
    const te = window.setTimeout(
      () => Gi.info(
        `${M.length} ${M.length === 1 ? "request matches" : "requests match"} these filters.`,
        { id: "cw-filter-result" }
      ),
      350
    );
    return () => window.clearTimeout(te);
  }, [i, p, m, T, M.length]);
  function Q() {
    v(""), x("all"), w("all"), Gi.info("Request filters reset.", { id: "cw-filter-result" });
  }
  const ue = d, ie = h;
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: o ? /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: "cw-loading",
      "aria-label": "Loading request snapshot",
      role: "status",
      children: [
        /* @__PURE__ */ y.jsx("p", { children: "Loading your current requests…" }),
        /* @__PURE__ */ y.jsx("div", { className: "cw-card-grid", children: [0, 1, 2].map((te) => /* @__PURE__ */ y.jsxs(
          "div",
          {
            className: "cw-skeleton-card",
            children: [
              /* @__PURE__ */ y.jsx(xu, { className: "cw-skeleton-band" }),
              /* @__PURE__ */ y.jsx(xu, { className: "cw-skeleton-title" }),
              /* @__PURE__ */ y.jsx(xu, { className: "cw-skeleton-line" }),
              /* @__PURE__ */ y.jsx(xu, { className: "cw-skeleton-line" })
            ]
          },
          te
        )) })
      ]
    }
  ) : s ? /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: "cw-error",
      role: "alert",
      children: [
        /* @__PURE__ */ y.jsx("h3", { children: "Requests could not be loaded" }),
        /* @__PURE__ */ y.jsx("p", { children: s }),
        /* @__PURE__ */ y.jsxs("div", { className: "cw-error-actions", children: [
          /* @__PURE__ */ y.jsxs(
            Lt,
            {
              className: "cw-primary",
              onClick: g,
              children: [
                /* @__PURE__ */ y.jsx(QS, { "aria-hidden": "true" }),
                "Retry"
              ]
            }
          ),
          /* @__PURE__ */ y.jsx(
            Lt,
            {
              asChild: !0,
              variant: "outline",
              className: "cw-secondary",
              children: /* @__PURE__ */ y.jsxs("a", { href: Is[n.role].route, children: [
                "Open original request list",
                /* @__PURE__ */ y.jsx(Bs, { "aria-hidden": "true" })
              ] })
            }
          )
        ] })
      ]
    }
  ) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs("div", { className: "cw-snapshot-line", children: [
      /* @__PURE__ */ y.jsxs("span", { children: [
        _.length,
        " ",
        _.length === 1 ? "loaded request" : "loaded requests",
        " ·",
        " ",
        F,
        " awaiting review"
      ] }),
      /* @__PURE__ */ y.jsxs("span", { children: [
        "Snapshot",
        " ",
        i?.loadedAt.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit"
        })
      ] }),
      /* @__PURE__ */ y.jsxs(
        Lt,
        {
          variant: "ghost",
          size: "sm",
          onClick: g,
          "aria-label": "Refresh request snapshot",
          children: [
            /* @__PURE__ */ y.jsx(QS, { "aria-hidden": "true" }),
            "Refresh"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx(
      pk,
      {
        search: p,
        status: m,
        category: T,
        categories: D,
        reducedMotion: l,
        onSearch: v,
        onStatus: x,
        onCategory: w,
        onReset: Q
      }
    ),
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        className: "cw-results-line",
        role: "status",
        "aria-live": "polite",
        children: [
          /* @__PURE__ */ y.jsxs("span", { children: [
            M.length,
            " matching ",
            M.length === 1 ? "request" : "requests"
          ] }),
          /* @__PURE__ */ y.jsxs("a", { href: Is[n.role].route, children: [
            "Open original list",
            /* @__PURE__ */ y.jsx(Bs, { "aria-hidden": "true" })
          ] })
        ]
      }
    ),
    M.length ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx("div", { className: "cw-card-grid", children: N.map((te) => /* @__PURE__ */ y.jsx(
        ok,
        {
          record: te,
          identity: n,
          selected: u.has(te.id),
          reducedMotion: l,
          studentCount: te.applicantId && B.get(te.applicantId) || 0,
          onToggle: ue,
          onStudent: ie
        },
        te.id
      )) }),
      /* @__PURE__ */ y.jsxs("div", { className: "cw-pagination", children: [
        /* @__PURE__ */ y.jsxs("p", { children: [
          "Showing ",
          (O - 1) * al + 1,
          "–",
          Math.min(O * al, M.length),
          " of ",
          M.length,
          ". Paging this loaded snapshot."
        ] }),
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx(
            Lt,
            {
              variant: "outline",
              className: "cw-secondary",
              disabled: O === 1,
              onClick: () => C(O - 1),
              "aria-label": "Previous request page",
              children: /* @__PURE__ */ y.jsx(k3, { "aria-hidden": "true" })
            }
          ),
          /* @__PURE__ */ y.jsxs("span", { children: [
            "Page ",
            O,
            " of ",
            U
          ] }),
          /* @__PURE__ */ y.jsx(
            Lt,
            {
              variant: "outline",
              className: "cw-secondary",
              disabled: O === U,
              onClick: () => C(O + 1),
              "aria-label": "Next request page",
              children: /* @__PURE__ */ y.jsx(B3, { "aria-hidden": "true" })
            }
          )
        ] })
      ] })
    ] }) : /* @__PURE__ */ y.jsxs("div", { className: "cw-empty", children: [
      /* @__PURE__ */ y.jsx(fg, { "aria-hidden": "true" }),
      /* @__PURE__ */ y.jsx("h3", { children: _.length ? "No matching requests" : "No requests in this snapshot" }),
      /* @__PURE__ */ y.jsx("p", { children: _.length ? "Try another search or reset your filters." : n.role === "MANAGER" ? "No application records were returned for your assigned employees." : "No course requests were returned for courses starting in the current server year." }),
      _.length > 0 && /* @__PURE__ */ y.jsx(
        Lt,
        {
          variant: "outline",
          className: "cw-secondary",
          onClick: Q,
          children: "Reset filters"
        }
      )
    ] })
  ] }) });
}
const kA = [
  {
    id: "ai-for-work",
    title: "AI for Everyday Work",
    subject: "ai",
    category: "internal",
    categoryName: "Internal Training",
    provider: "CATS Learning Lab (sample)",
    fee: 0,
    days: 1,
    offset: 14,
    level: "All levels",
    format: "Live workshop",
    summary: "Turn AI from a talking point into a practical part of your working day.",
    outcomes: [
      "Build repeatable prompts for everyday tasks.",
      "Check AI outputs for accuracy and sensitive information.",
      "Design one useful workflow for your team."
    ]
  },
  {
    id: "data-to-decisions",
    title: "From Data to Decisions",
    subject: "data",
    category: "external",
    categoryName: "External Course",
    provider: "Insight Academy (sample)",
    fee: 420,
    days: 2,
    offset: 21,
    level: "Intermediate",
    format: "Online, instructor-led",
    summary: "Find the signal in your data and communicate the decisions it supports.",
    outcomes: [
      "Frame a business question that data can answer.",
      "Build clear visual explanations and useful dashboards.",
      "Present evidence, assumptions, and recommendations."
    ]
  },
  {
    id: "cloud-foundations",
    title: "Cloud Foundations",
    subject: "cloud",
    category: "certification",
    categoryName: "Professional Certification",
    provider: "Cloud Skills Institute (sample)",
    fee: 650,
    days: 3,
    offset: 28,
    level: "Foundation",
    format: "Hybrid workshop",
    summary: "Build a solid understanding of cloud architecture, services, and operating costs.",
    outcomes: [
      "Compare common cloud service and deployment models.",
      "Explain reliability, access controls, and shared responsibility.",
      "Prepare a structured certification study plan."
    ]
  },
  {
    id: "project-delivery",
    title: "Project Delivery Essentials",
    subject: "projects",
    category: "external",
    categoryName: "External Course",
    provider: "Delivery School (sample)",
    fee: 360,
    days: 2,
    offset: 35,
    level: "Foundation",
    format: "In-person workshop",
    summary: "Keep scope, people, and progress aligned from the first brief to the final handover.",
    outcomes: [
      "Define scope, milestones, and a realistic delivery plan.",
      "Manage dependencies, changes, and delivery risks.",
      "Run a concise, useful project review."
    ]
  },
  {
    id: "secure-by-design",
    title: "Secure by Design",
    subject: "security",
    category: "certification",
    categoryName: "Professional Certification",
    provider: "Security Practice Lab (sample)",
    fee: 540,
    days: 2,
    offset: 42,
    level: "Intermediate",
    format: "Online, instructor-led",
    summary: "Recognize common security risks and make safer decisions throughout a project.",
    outcomes: [
      "Identify threats and choose practical mitigations.",
      "Apply secure handling of access and information.",
      "Map your knowledge to a certification learning path."
    ]
  },
  {
    id: "leading-teams",
    title: "Leading Better Teams",
    subject: "leadership",
    category: "internal",
    categoryName: "Internal Training",
    provider: "CATS Learning Lab (sample)",
    fee: 0,
    days: 1,
    offset: 49,
    level: "All levels",
    format: "Live workshop",
    summary: "Make feedback, delegation, and everyday team conversations more effective.",
    outcomes: [
      "Set clear expectations and delegate with context.",
      "Give specific feedback that leads to action.",
      "Build a practical plan for your next team conversation."
    ]
  }
], BA = (n) => `/employee/applications/new?course=${encodeURIComponent(n.id)}`, vk = {
  ai: $3,
  data: I3,
  cloud: Y3,
  projects: cp,
  security: Z3,
  leadership: J3
};
function yk({
  course: n,
  selected: i,
  reducedMotion: o,
  onToggle: s
}) {
  const l = vk[n.subject] || fg, u = window.CATS_COURSE_ART?.resolve(n).svg;
  return /* @__PURE__ */ y.jsxs(
    OA,
    {
      transition: o ? { duration: 0 } : { type: "spring", bounce: 0.08, duration: 0.35 },
      children: [
        /* @__PURE__ */ y.jsxs(
          TA,
          {
            className: `cw-request-card cw-example-card ${i ? "cw-selected" : ""}`,
            "data-example-id": n.id,
            children: [
              /* @__PURE__ */ y.jsxs("div", { className: "cw-card-band", children: [
                /* @__PURE__ */ y.jsx(l, { "aria-hidden": "true" }),
                /* @__PURE__ */ y.jsx("span", { children: n.categoryName }),
                /* @__PURE__ */ y.jsx("span", { className: "cw-reference", children: "Example" })
              ] }),
              /* @__PURE__ */ y.jsxs(EA, { className: "cw-card-main", children: [
                u && /* @__PURE__ */ y.jsx(
                  "div",
                  {
                    className: "cw-example-art",
                    "aria-hidden": "true",
                    dangerouslySetInnerHTML: { __html: u }
                  }
                ),
                /* @__PURE__ */ y.jsxs(
                  MA,
                  {
                    className: "cw-card-open",
                    "aria-label": `Preview example course ${n.title}`,
                    children: [
                      /* @__PURE__ */ y.jsx(Qu, { className: "cw-card-title", children: n.title }),
                      /* @__PURE__ */ y.jsx(Ju, { className: "cw-provider", children: n.provider })
                    ]
                  }
                ),
                /* @__PURE__ */ y.jsx("p", { className: "cw-example-summary", children: n.summary }),
                /* @__PURE__ */ y.jsxs("dl", { className: "cw-card-facts", children: [
                  /* @__PURE__ */ y.jsxs("div", { children: [
                    /* @__PURE__ */ y.jsx("dt", { children: "Sample fee" }),
                    /* @__PURE__ */ y.jsx("dd", { children: n.fee ? `S$${n.fee}` : "No fee" })
                  ] }),
                  /* @__PURE__ */ y.jsxs("div", { children: [
                    /* @__PURE__ */ y.jsx("dt", { children: "Sample duration" }),
                    /* @__PURE__ */ y.jsxs("dd", { children: [
                      n.days,
                      " ",
                      n.days === 1 ? "day" : "days"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ y.jsxs(CA, { className: "cw-card-footer", children: [
                /* @__PURE__ */ y.jsx("span", { className: "cw-example-note", children: "Illustrative course note" }),
                /* @__PURE__ */ y.jsxs("div", { className: "cw-compare", children: [
                  /* @__PURE__ */ y.jsx(
                    AA,
                    {
                      id: `example-${n.id}`,
                      checked: i,
                      onCheckedChange: () => s(n.id),
                      "aria-label": `Save example ${n.title} to this page's comparison list`
                    }
                  ),
                  /* @__PURE__ */ y.jsx("label", { htmlFor: `example-${n.id}`, children: "Compare" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ y.jsx(_A, { children: /* @__PURE__ */ y.jsxs(NA, { className: "cw-detail", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "cw-detail-heading", children: [
            /* @__PURE__ */ y.jsx("span", { className: "cw-reference", children: "EXAMPLE COURSE" }),
            /* @__PURE__ */ y.jsx(jA, { className: "cw-dialog-close" })
          ] }),
          /* @__PURE__ */ y.jsx(Qu, { className: "cw-detail-title", children: n.title }),
          /* @__PURE__ */ y.jsx(Ju, { className: "cw-provider", children: n.provider }),
          /* @__PURE__ */ y.jsx("p", { children: n.summary }),
          /* @__PURE__ */ y.jsxs("dl", { className: "cw-detail-facts", children: [
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Category" }),
              /* @__PURE__ */ y.jsx("dd", { children: n.categoryName })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Level" }),
              /* @__PURE__ */ y.jsx("dd", { children: n.level })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Format" }),
              /* @__PURE__ */ y.jsx("dd", { children: n.format })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Sample fee" }),
              /* @__PURE__ */ y.jsx("dd", { children: n.fee ? `S$${n.fee}` : "No fee" })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("dt", { children: "Sample duration" }),
              /* @__PURE__ */ y.jsxs("dd", { children: [
                n.days,
                " ",
                n.days === 1 ? "day" : "days"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ y.jsx("h3", { children: "Example learning outcomes" }),
          /* @__PURE__ */ y.jsx("ul", { className: "cw-outcomes", children: n.outcomes.map((d) => /* @__PURE__ */ y.jsx("li", { children: d }, d)) }),
          /* @__PURE__ */ y.jsx("p", { className: "cw-boundary", children: "This is an example, not a live course listing. The original Java form opens with sample values for you to verify before submitting." }),
          /* @__PURE__ */ y.jsx(
            Lt,
            {
              asChild: !0,
              className: "cw-primary",
              children: /* @__PURE__ */ y.jsxs("a", { href: BA(n), children: [
                "Use as a form starting point",
                /* @__PURE__ */ y.jsx(Bs, { "aria-hidden": "true" })
              ] })
            }
          )
        ] }) })
      ]
    }
  );
}
function bk({
  selected: n,
  reducedMotion: i,
  onToggle: o
}) {
  const [s, l] = S.useState(""), u = kA.filter(
    (d) => `${d.title} ${d.provider} ${d.summary}`.toLowerCase().includes(s.trim().toLowerCase())
  );
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs("div", { className: "cw-example-intro", children: [
      /* @__PURE__ */ y.jsx("h3", { children: "Example course notes" }),
      /* @__PURE__ */ y.jsx("p", { children: "Six sample ideas, not live availability or approved offerings. Any application opens the original form for your review." })
    ] }),
    /* @__PURE__ */ y.jsxs("label", { className: "cw-search cw-example-search", children: [
      /* @__PURE__ */ y.jsx(QT, { "aria-hidden": "true" }),
      /* @__PURE__ */ y.jsx(
        PA,
        {
          type: "search",
          value: s,
          onChange: (d) => l(d.target.value),
          placeholder: "Search examples",
          "aria-label": "Search example courses"
        }
      )
    ] }),
    /* @__PURE__ */ y.jsxs(
      "p",
      {
        className: "cw-results-line",
        role: "status",
        children: [
          u.length,
          " ",
          u.length === 1 ? "example" : "examples"
        ]
      }
    ),
    /* @__PURE__ */ y.jsx("div", { className: "cw-card-grid", children: u.map((d) => /* @__PURE__ */ y.jsx(
      yk,
      {
        course: d,
        selected: n.has(d.id),
        reducedMotion: i,
        onToggle: o
      },
      d.id
    )) }),
    u.length === 0 && /* @__PURE__ */ y.jsxs("div", { className: "cw-empty", children: [
      /* @__PURE__ */ y.jsx("h3", { children: "No matching examples" }),
      /* @__PURE__ */ y.jsx(
        Lt,
        {
          variant: "outline",
          className: "cw-secondary",
          onClick: () => l(""),
          children: "Clear example search"
        }
      )
    ] })
  ] });
}
function UA({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    yC,
    {
      "data-slot": "dialog",
      ...n
    }
  );
}
function xk({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    bC,
    {
      "data-slot": "dialog-trigger",
      ...n
    }
  );
}
function Sk({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    wC,
    {
      "data-slot": "dialog-portal",
      container: Js(),
      ...n
    }
  );
}
function U1({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    hf,
    {
      "data-slot": "dialog-close",
      ...n
    }
  );
}
function wk({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ y.jsx(
    TC,
    {
      "data-slot": "dialog-overlay",
      className: Le(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        n
      ),
      ...i
    }
  );
}
function HA({
  className: n,
  children: i,
  showCloseButton: o = !0,
  ...s
}) {
  return /* @__PURE__ */ y.jsxs(Sk, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ y.jsx(wk, {}),
    /* @__PURE__ */ y.jsxs(
      EC,
      {
        "data-slot": "dialog-content",
        className: Le(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          n
        ),
        ...s,
        children: [
          i,
          o && /* @__PURE__ */ y.jsxs(
            hf,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ y.jsx(Us, {}),
                /* @__PURE__ */ y.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function IA({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: Le("flex flex-col gap-2 text-center sm:text-left", n),
      ...i
    }
  );
}
function Tk({
  className: n,
  showCloseButton: i = !1,
  children: o,
  ...s
}) {
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: Le("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", n),
      ...s,
      children: [
        o,
        i && /* @__PURE__ */ y.jsx(hf, { asChild: !0, children: /* @__PURE__ */ y.jsx(Lt, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function qA({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    AC,
    {
      "data-slot": "dialog-title",
      className: Le("text-lg leading-none font-semibold", n),
      ...i
    }
  );
}
function GA({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ y.jsx(
    RC,
    {
      "data-slot": "dialog-description",
      className: Le("text-sm text-muted-foreground", n),
      ...i
    }
  );
}
function Ek({
  student: n,
  records: i,
  onClose: o,
  onReturnFocus: s
}) {
  const l = n?.applicantId ? i.filter((u) => u.applicantId === n.applicantId).length : null;
  return /* @__PURE__ */ y.jsx(
    UA,
    {
      open: !!n,
      onOpenChange: (u) => {
        u || o();
      },
      children: /* @__PURE__ */ y.jsxs(
        HA,
        {
          className: "cw-dialog",
          onCloseAutoFocus: (u) => {
            u.preventDefault(), s();
          },
          children: [
            /* @__PURE__ */ y.jsxs(IA, { children: [
              /* @__PURE__ */ y.jsxs(qA, { children: [
                /* @__PURE__ */ y.jsx(
                  "span",
                  {
                    className: "cw-avatar",
                    "aria-hidden": "true",
                    children: VA(n?.learner || "")
                  }
                ),
                n?.learner || "Name not recorded"
              ] }),
              /* @__PURE__ */ y.jsx(GA, { children: "Assigned employee information from this request snapshot." })
            ] }),
            /* @__PURE__ */ y.jsxs("dl", { className: "cw-detail-facts", children: [
              /* @__PURE__ */ y.jsxs("div", { children: [
                /* @__PURE__ */ y.jsx("dt", { children: "Employee ID" }),
                /* @__PURE__ */ y.jsx("dd", { children: n?.applicantId || "Not recorded" })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { children: [
                /* @__PURE__ */ y.jsx("dt", { children: "Requests in this snapshot" }),
                /* @__PURE__ */ y.jsx("dd", { children: l ?? "Cannot group without a employee ID" })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function Ck({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    yC,
    {
      "data-slot": "sheet",
      ...n
    }
  );
}
function Ak({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    bC,
    {
      "data-slot": "sheet-trigger",
      ...n
    }
  );
}
function Rk({ ...n }) {
  return /* @__PURE__ */ y.jsx(
    wC,
    {
      "data-slot": "sheet-portal",
      container: Js(),
      ...n
    }
  );
}
function Dk({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ y.jsx(
    TC,
    {
      "data-slot": "sheet-overlay",
      className: Le(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        n
      ),
      ...i
    }
  );
}
function Ok({
  className: n,
  children: i,
  side: o = "right",
  showCloseButton: s = !0,
  ...l
}) {
  return /* @__PURE__ */ y.jsxs(Rk, { children: [
    /* @__PURE__ */ y.jsx(Dk, {}),
    /* @__PURE__ */ y.jsxs(
      EC,
      {
        "data-slot": "sheet-content",
        className: Le(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          o === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          o === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          o === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          o === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          n
        ),
        ...l,
        children: [
          i,
          s && /* @__PURE__ */ y.jsxs(hf, { className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ y.jsx(Us, { className: "size-4" }),
            /* @__PURE__ */ y.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Mk({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: Le("flex flex-col gap-1.5 p-4", n),
      ...i
    }
  );
}
function Nk({ className: n, ...i }) {
  return /* @__PURE__ */ y.jsx(
    AC,
    {
      "data-slot": "sheet-title",
      className: Le("font-semibold text-foreground", n),
      ...i
    }
  );
}
function _k({
  className: n,
  ...i
}) {
  return /* @__PURE__ */ y.jsx(
    RC,
    {
      "data-slot": "sheet-description",
      className: Le("text-sm text-muted-foreground", n),
      ...i
    }
  );
}
function H1(n, i) {
  let o;
  return (...s) => {
    window.clearTimeout(o), o = window.setTimeout(() => n(...s), i);
  };
}
function jk({ debounce: n, scroll: i, polyfill: o, offsetSize: s } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const l = o || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!l) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [u, d] = S.useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), h = S.useRef({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: u, orientationHandler: null }), g = n ? typeof n == "number" ? n : n.scroll : null, p = n ? typeof n == "number" ? n : n.resize : null, v = S.useRef(!1);
  S.useEffect(() => (v.current = !0, () => {
    v.current = !1;
  }));
  const [m, x, T] = S.useMemo(() => {
    const R = () => {
      if (!h.current.element) return;
      const { left: _, top: D, width: M, height: B, bottom: U, right: O, x: N, y: F } = h.current.element.getBoundingClientRect(), Q = { left: _, top: D, width: M, height: B, bottom: U, right: O, x: N, y: F };
      h.current.element instanceof HTMLElement && s && (Q.height = h.current.element.offsetHeight, Q.width = h.current.element.offsetWidth), Object.freeze(Q), v.current && !Pk(h.current.lastBounds, Q) && d(h.current.lastBounds = Q);
    };
    return [R, p ? H1(R, p) : R, g ? H1(R, g) : R];
  }, [d, s, g, p]);
  function w() {
    h.current.scrollContainers && (h.current.scrollContainers.forEach((R) => R.removeEventListener("scroll", T, !0)), h.current.scrollContainers = null), h.current.resizeObserver && (h.current.resizeObserver.disconnect(), h.current.resizeObserver = null), h.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", h.current.orientationHandler));
  }
  function A() {
    h.current.element && (h.current.resizeObserver = new l(T), h.current.resizeObserver.observe(h.current.element), i && h.current.scrollContainers && h.current.scrollContainers.forEach((R) => R.addEventListener("scroll", T, { capture: !0, passive: !0 })), h.current.orientationHandler = () => {
      T();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", h.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", h.current.orientationHandler));
  }
  const C = (R) => {
    !R || R === h.current.element || (w(), h.current.element = R, h.current.scrollContainers = YA(R), A());
  };
  return Lk(T, !!i), zk(x), S.useEffect(() => {
    w(), A();
  }, [i, T, x]), S.useEffect(() => w, []), [C, u, m];
}
function zk(n) {
  S.useEffect(() => {
    const i = n;
    return window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [n]);
}
function Lk(n, i) {
  S.useEffect(() => {
    if (i) {
      const o = n;
      return window.addEventListener("scroll", o, { capture: !0, passive: !0 }), () => {
        window.removeEventListener("scroll", o, !0);
      };
    }
  }, [n, i]);
}
function YA(n) {
  const i = [];
  if (!n || n === document.body) return i;
  const { overflow: o, overflowX: s, overflowY: l } = window.getComputedStyle(n);
  return [o, s, l].some((u) => u === "auto" || u === "scroll") && i.push(n), [...i, ...YA(n.parentElement)];
}
const Vk = ["x", "y", "top", "bottom", "left", "right", "width", "height"], Pk = (n, i) => Vk.every((o) => n[o] === i[o]), FA = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.3
};
function I1({ value: n, place: i }) {
  const o = Math.floor(n / i) % 10, s = za(o), l = $j(s, FA);
  return S.useEffect(() => {
    l.set(o);
  }, [l, o]), /* @__PURE__ */ y.jsxs("div", { className: "relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums", children: [
    /* @__PURE__ */ y.jsx("div", { className: "invisible", children: "0" }),
    Array.from({ length: 10 }, (u, d) => /* @__PURE__ */ y.jsx(
      kk,
      {
        mv: l,
        number: d
      },
      d
    ))
  ] });
}
function kk({ mv: n, number: i }) {
  const o = S.useId(), [s, l] = jk(), u = NT(n, (d) => {
    if (!l.height) return 0;
    const h = d % 10, g = (10 + i - h) % 10;
    let p = g * l.height;
    return g > 5 && (p -= 10 * l.height), p;
  });
  return l.height ? /* @__PURE__ */ y.jsx(
    ka.span,
    {
      style: { y: u },
      layoutId: `${o}-${i}`,
      className: "absolute inset-0 flex items-center justify-center",
      transition: FA,
      ref: s,
      children: i
    }
  ) : /* @__PURE__ */ y.jsx(
    "span",
    {
      ref: s,
      className: "invisible absolute",
      children: i
    }
  );
}
function XA({
  value: n,
  padStart: i = !1,
  decimalSeparator: o = "."
}) {
  const s = Math.abs(n), [l, u] = s.toString().split("."), d = parseInt(l, 10), g = (i && d < 10 ? `0${l}` : l).split(""), p = g.map((v, m) => Math.pow(10, g.length - m - 1));
  return /* @__PURE__ */ y.jsxs("div", { className: "flex items-center", children: [
    n < 0 && "-",
    g.map((v, m) => /* @__PURE__ */ y.jsx(
      I1,
      {
        value: d,
        place: p[m]
      },
      `pos-${p[m]}`
    )),
    u && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx("span", { children: o }),
      u.split("").map((v, m) => /* @__PURE__ */ y.jsx(
        I1,
        {
          value: parseInt(u, 10),
          place: Math.pow(10, u.length - m - 1)
        },
        `decimal-${m}`
      ))
    ] })
  ] });
}
function km({ value: n, reducedMotion: i }) {
  const o = ak(n);
  return /* @__PURE__ */ y.jsxs("span", { className: "cw-number", children: [
    /* @__PURE__ */ y.jsx("span", { className: "sr-only", children: zs(n) }),
    /* @__PURE__ */ y.jsx("span", { "aria-hidden": "true", children: o == null || i ? zs(n) : /* @__PURE__ */ y.jsx(XA, { value: o }) })
  ] });
}
function Bk({
  records: n,
  examples: i,
  identity: o,
  reducedMotion: s,
  removeRecord: l,
  removeExample: u,
  clear: d
}) {
  const h = n.length + i.length, g = ik(n);
  return /* @__PURE__ */ y.jsxs(Ck, { children: [
    /* @__PURE__ */ y.jsx(Ak, { asChild: !0, children: /* @__PURE__ */ y.jsxs(
      Lt,
      {
        variant: "outline",
        className: "cw-secondary",
        children: [
          /* @__PURE__ */ y.jsx(cp, { "aria-hidden": "true" }),
          "Comparison",
          " ",
          /* @__PURE__ */ y.jsx(
            "span",
            {
              className: "cw-selection-count",
              "aria-hidden": "true",
              children: s ? h : /* @__PURE__ */ y.jsx(XA, { value: h })
            }
          ),
          /* @__PURE__ */ y.jsxs("span", { className: "sr-only", children: [
            h,
            " selected items"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ y.jsxs(
      Ok,
      {
        className: "cw-sheet",
        side: "right",
        children: [
          /* @__PURE__ */ y.jsxs(Mk, { children: [
            /* @__PURE__ */ y.jsx(Nk, { children: "Selected for comparison" }),
            /* @__PURE__ */ y.jsx(_k, { children: "This page only. Selecting an item does not apply, approve or save a course." })
          ] }),
          h === 0 ? /* @__PURE__ */ y.jsxs("div", { className: "cw-empty", children: [
            /* @__PURE__ */ y.jsx(cp, { "aria-hidden": "true" }),
            /* @__PURE__ */ y.jsx("h3", { children: "No items selected" }),
            /* @__PURE__ */ y.jsx("p", { children: "Use a card’s Compare checkbox to build a read-only comparison." })
          ] }) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
            n.length > 0 && /* @__PURE__ */ y.jsxs("section", { className: "cw-selection-section", children: [
              /* @__PURE__ */ y.jsx("h3", { children: "Existing requests" }),
              /* @__PURE__ */ y.jsxs("dl", { className: "cw-selection-totals", children: [
                /* @__PURE__ */ y.jsxs("div", { children: [
                  /* @__PURE__ */ y.jsx("dt", { children: "Requests" }),
                  /* @__PURE__ */ y.jsx("dd", { children: /* @__PURE__ */ y.jsx(
                    km,
                    {
                      value: String(g.count),
                      reducedMotion: s
                    }
                  ) })
                ] }),
                /* @__PURE__ */ y.jsxs("div", { children: [
                  /* @__PURE__ */ y.jsx("dt", { children: "Recorded fees, S$" }),
                  /* @__PURE__ */ y.jsx("dd", { children: /* @__PURE__ */ y.jsx(
                    km,
                    {
                      value: g.fee,
                      reducedMotion: s
                    }
                  ) })
                ] }),
                /* @__PURE__ */ y.jsxs("div", { children: [
                  /* @__PURE__ */ y.jsx("dt", { children: "Recorded training days" }),
                  /* @__PURE__ */ y.jsx("dd", { children: /* @__PURE__ */ y.jsx(
                    km,
                    {
                      value: g.days,
                      reducedMotion: s
                    }
                  ) })
                ] })
              ] }),
              (g.missingFee > 0 || g.missingDays > 0) && /* @__PURE__ */ y.jsxs("p", { className: "cw-boundary", children: [
                "Totals exclude ",
                g.missingFee,
                " unrecorded fee",
                " ",
                g.missingFee === 1 ? "value" : "values",
                " and ",
                g.missingDays,
                " ",
                "unrecorded duration ",
                g.missingDays === 1 ? "value" : "values",
                "."
              ] }),
              /* @__PURE__ */ y.jsx("div", { className: "cw-selection-list", children: n.map((p) => /* @__PURE__ */ y.jsxs("article", { children: [
                /* @__PURE__ */ y.jsxs("div", { children: [
                  /* @__PURE__ */ y.jsx("strong", { children: p.title || "Untitled request" }),
                  /* @__PURE__ */ y.jsx(
                    "span",
                    {
                      className: "cw-status",
                      "data-status": p.status,
                      children: Np(p.status)
                    }
                  ),
                  /* @__PURE__ */ y.jsxs("a", { href: LA(o, p), children: [
                    "Request #",
                    p.id,
                    /* @__PURE__ */ y.jsx(Bs, { "aria-hidden": "true" })
                  ] })
                ] }),
                /* @__PURE__ */ y.jsx(
                  Lt,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => l(p.id),
                    "aria-label": `Remove request ${p.id} from comparison`,
                    children: /* @__PURE__ */ y.jsx(Us, { "aria-hidden": "true" })
                  }
                )
              ] }, p.id)) })
            ] }),
            i.length > 0 && /* @__PURE__ */ y.jsxs("section", { className: "cw-selection-section", children: [
              /* @__PURE__ */ y.jsx("h3", { children: "Example course notes" }),
              /* @__PURE__ */ y.jsx("p", { className: "cw-boundary", children: "Samples are separate from your real requests and are excluded from the totals above." }),
              /* @__PURE__ */ y.jsx("div", { className: "cw-selection-list", children: i.map((p) => /* @__PURE__ */ y.jsxs("article", { children: [
                /* @__PURE__ */ y.jsxs("div", { children: [
                  /* @__PURE__ */ y.jsx("strong", { children: p.title }),
                  /* @__PURE__ */ y.jsx("span", { children: p.provider }),
                  /* @__PURE__ */ y.jsxs("a", { href: BA(p), children: [
                    "Open original application form",
                    /* @__PURE__ */ y.jsx(Bs, { "aria-hidden": "true" })
                  ] })
                ] }),
                /* @__PURE__ */ y.jsx(
                  Lt,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => u(p.id),
                    "aria-label": `Remove example ${p.title} from comparison`,
                    children: /* @__PURE__ */ y.jsx(Us, { "aria-hidden": "true" })
                  }
                )
              ] }, p.id)) })
            ] }),
            /* @__PURE__ */ y.jsxs(UA, { children: [
              /* @__PURE__ */ y.jsx(xk, { asChild: !0, children: /* @__PURE__ */ y.jsx(
                Lt,
                {
                  variant: "outline",
                  className: "cw-secondary cw-clear-selection",
                  children: "Clear comparison"
                }
              ) }),
              /* @__PURE__ */ y.jsxs(HA, { className: "cw-dialog", children: [
                /* @__PURE__ */ y.jsxs(IA, { children: [
                  /* @__PURE__ */ y.jsx(qA, { children: "Clear this comparison?" }),
                  /* @__PURE__ */ y.jsx(GA, { children: "This removes the selection on this page. Your Java requests stay unchanged." })
                ] }),
                /* @__PURE__ */ y.jsxs(Tk, { children: [
                  /* @__PURE__ */ y.jsx(U1, { asChild: !0, children: /* @__PURE__ */ y.jsx(
                    Lt,
                    {
                      variant: "outline",
                      className: "cw-secondary",
                      children: "Keep selection"
                    }
                  ) }),
                  /* @__PURE__ */ y.jsx(U1, { asChild: !0, children: /* @__PURE__ */ y.jsx(
                    Lt,
                    {
                      className: "cw-primary",
                      onClick: d,
                      children: "Clear comparison"
                    }
                  ) })
                ] })
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Uk(n) {
  const [i, o] = S.useState(null), [s, l] = S.useState(null), [u, d] = S.useState(!0), [h, g] = S.useState(0);
  return S.useEffect(() => {
    const p = new AbortController();
    let v = !0, m = !1;
    const x = window.setTimeout(() => {
      m = !0, p.abort();
    }, 15e3);
    d(!0), l(null), o(null);
    const T = Gi.loading("Loading your current request snapshot…");
    return tk(n, p.signal).then((w) => {
      if (window.clearTimeout(x), !!v) {
        if (m)
          throw new Error(
            "The request snapshot took too long to load. Try again or open the original list."
          );
        o(w), d(!1), Gi.success(
          `Loaded ${w.records.length} ${w.records.length === 1 ? "request" : "requests"}.`,
          { id: T }
        );
      }
    }).catch((w) => {
      if (window.clearTimeout(x), !v) return;
      const A = m ? "The request snapshot took too long to load. Try again or open the original list." : w instanceof Error ? w.message : "The request snapshot could not be loaded.";
      l(A), d(!1), Gi.error(A, {
        id: T,
        action: { label: "Retry", onClick: () => g((C) => C + 1) }
      });
    }), () => {
      v = !1, window.clearTimeout(x), p.abort(), Gi.dismiss(T);
    };
  }, [n, h]), { snapshot: i, error: s, loading: u, retry: () => g((p) => p + 1) };
}
function KA(n) {
  document.querySelectorAll("[data-course-workspace-fallback]").forEach((i) => {
    i.hidden = !n;
  });
}
function Hk({ root: n, identity: i }) {
  const { snapshot: o, loading: s, error: l, retry: u } = Uk(i), d = !!Qj(), [h, g] = S.useState(
    () => i.role === "EMPLOYEE" && window.location.hash === "#course-catalog" ? "examples" : "requests"
  ), [p, v] = S.useState(/* @__PURE__ */ new Set()), [m, x] = S.useState(/* @__PURE__ */ new Set()), [T, w] = S.useState(null), A = S.useRef(null), C = o?.records || [], R = C.filter((O) => p.has(O.id)), _ = kA.filter((O) => m.has(O.id));
  S.useEffect(() => {
    function O() {
      i.role === "EMPLOYEE" && window.location.hash === "#course-catalog" && g("examples");
    }
    return window.addEventListener("hashchange", O), () => window.removeEventListener("hashchange", O);
  }, [i.role]), S.useEffect(() => {
    n.dataset.workspaceState = s ? "loading" : l ? "error" : "ready", KA(!o || !!l || s), o && (n.dataset.snapshotTime = o.loadedAt.toISOString());
  }, [n, o, l, s]);
  function D(O) {
    const N = p.has(O);
    v((F) => {
      const Q = new Set(F);
      return Q.has(O) ? Q.delete(O) : Q.add(O), Q;
    }), Gi.info(
      N ? "Request removed from this comparison." : "Request added to this comparison. No application was submitted.",
      { id: "cw-selection" }
    );
  }
  function M(O) {
    const N = m.has(O);
    x((F) => {
      const Q = new Set(F);
      return Q.has(O) ? Q.delete(O) : Q.add(O), Q;
    }), Gi.info(
      N ? "Example removed from this comparison." : "Example added to this comparison. This is a sample course note.",
      { id: "cw-selection" }
    );
  }
  function B() {
    v(/* @__PURE__ */ new Set()), x(/* @__PURE__ */ new Set()), Gi.info("This comparison has been cleared.");
  }
  function U(O) {
    A.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, w(O);
  }
  return /* @__PURE__ */ y.jsx(lg, { reducedMotion: "user", children: /* @__PURE__ */ y.jsx(HP, { delayDuration: 300, children: /* @__PURE__ */ y.jsxs("div", { className: "course-workspace", children: [
    /* @__PURE__ */ y.jsxs("header", { className: "cw-heading", children: [
      /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("h2", { children: i.role === "MANAGER" ? "Assigned employees’ requests" : "Your course workspace" }),
        /* @__PURE__ */ y.jsx("p", { children: i.role === "MANAGER" ? "All requests from assigned employees. Review decisions stay on their original pages." : "Real requests for courses starting in the current server year, plus clearly marked example notes." })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "cw-heading-actions", children: [
        /* @__PURE__ */ y.jsx(
          Lt,
          {
            asChild: !0,
            className: "cw-primary",
            children: /* @__PURE__ */ y.jsxs(
              "a",
              {
                href: i.role === "MANAGER" ? "/manager/pending" : "/employee/applications/new",
                children: [
                  i.role === "MANAGER" ? /* @__PURE__ */ y.jsx(nE, { "aria-hidden": "true" }) : /* @__PURE__ */ y.jsx(X3, { "aria-hidden": "true" }),
                  i.role === "MANAGER" ? "Review requests" : "New application"
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ y.jsx(
          Bk,
          {
            records: R,
            examples: _,
            identity: i,
            reducedMotion: d,
            removeRecord: D,
            removeExample: M,
            clear: B
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs(
      kP,
      {
        value: h,
        onValueChange: g,
        className: "cw-tabs",
        children: [
          /* @__PURE__ */ y.jsxs(UP, { className: "cw-tab-list", children: [
            /* @__PURE__ */ y.jsx(P1, { value: "requests", children: i.role === "MANAGER" ? "Employee requests" : "My requests" }),
            i.role === "EMPLOYEE" && /* @__PURE__ */ y.jsx(P1, { value: "examples", children: "Example courses" })
          ] }),
          /* @__PURE__ */ y.jsx(
            k1,
            {
              value: "requests",
              className: "cw-tab-content",
              children: /* @__PURE__ */ y.jsx(
                gk,
                {
                  identity: i,
                  snapshot: o,
                  loading: s,
                  error: l,
                  reducedMotion: d,
                  selectedIds: p,
                  onToggle: D,
                  onStudent: U,
                  retry: u
                }
              )
            }
          ),
          i.role === "EMPLOYEE" && /* @__PURE__ */ y.jsx(
            k1,
            {
              value: "examples",
              className: "cw-tab-content",
              children: /* @__PURE__ */ y.jsx(
                bk,
                {
                  selected: m,
                  reducedMotion: d,
                  onToggle: M
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ y.jsx(
      Ek,
      {
        student: T,
        records: C,
        onClose: () => w(null),
        onReturnFocus: () => A.current?.focus({ preventScroll: !0 })
      }
    ),
    /* @__PURE__ */ y.jsx(
      R3,
      {
        theme: "light",
        position: "bottom-right",
        closeButton: !0,
        toastOptions: { className: "cw-toast" }
      }
    )
  ] }) }) });
}
class Ik extends S.Component {
  state = { failed: !1 };
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  componentDidCatch() {
    this.props.root.dataset.workspaceState = "error", KA(!0);
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ y.jsx(
      "p",
      {
        className: "cw-error",
        role: "alert",
        children: "The interactive workspace could not be displayed. Use the original request list below."
      }
    ) : this.props.children;
  }
}
document.querySelectorAll("[data-course-workspace]").forEach((n) => {
  n.classList.add("cats-course-workspace");
  try {
    const i = JP(n);
    G2.createRoot(n).render(
      /* @__PURE__ */ y.jsx(Ik, { root: n, children: /* @__PURE__ */ y.jsx(
        Hk,
        {
          root: n,
          identity: i
        }
      ) })
    );
  } catch {
    n.dataset.workspaceState = "error", n.textContent = "The interactive workspace could not be opened. Use the original request list below.";
  }
});
//# sourceMappingURL=course-workspace.js.map
