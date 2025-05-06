import * as d from "react";
import k, { isValidElement as Pc, version as ff, useContext as yt, createContext as Go, useRef as Oe, useLayoutEffect as vf, useEffect as tt, forwardRef as lr, useState as Qt, useMemo as Tr, Children as gf, useImperativeHandle as Xo, cloneElement as mf } from "react";
import * as Tc from "react-dom";
import zs, { createPortal as pf } from "react-dom";
function Nc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mo = { exports: {} }, kr = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bs;
function hf() {
  if (Bs) return kr;
  Bs = 1;
  var e = k, t = 60103;
  if (kr.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var r = Symbol.for;
    t = r("react.element"), kr.Fragment = r("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = Object.prototype.hasOwnProperty, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var u, f = {}, v = null, p = null;
    c !== void 0 && (v = "" + c), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (u in l) o.call(l, u) && !a.hasOwnProperty(u) && (f[u] = l[u]);
    if (s && s.defaultProps) for (u in l = s.defaultProps, l) f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: t, type: s, key: v, ref: p, props: f, _owner: n.current };
  }
  return kr.jsx = i, kr.jsxs = i, kr;
}
var Pa = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function bf() {
  return Hs || (Hs = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var t = k, r = 60103, n = 60106;
      e.Fragment = 60107;
      var o = 60108, a = 60114, i = 60109, s = 60110, l = 60112, c = 60113, u = 60120, f = 60115, v = 60116, p = 60121, h = 60122, m = 60117, g = 60129, b = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var y = Symbol.for;
        r = y("react.element"), n = y("react.portal"), e.Fragment = y("react.fragment"), o = y("react.strict_mode"), a = y("react.profiler"), i = y("react.provider"), s = y("react.context"), l = y("react.forward_ref"), c = y("react.suspense"), u = y("react.suspense_list"), f = y("react.memo"), v = y("react.lazy"), p = y("react.block"), h = y("react.server.block"), m = y("react.fundamental"), y("react.scope"), y("react.opaque.id"), g = y("react.debug_trace_mode"), y("react.offscreen"), b = y("react.legacy_hidden");
      }
      var x = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
      function C(N) {
        if (N === null || typeof N != "object")
          return null;
        var W = x && N[x] || N[w];
        return typeof W == "function" ? W : null;
      }
      var E = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function S(N) {
        {
          for (var W = arguments.length, Z = new Array(W > 1 ? W - 1 : 0), ee = 1; ee < W; ee++)
            Z[ee - 1] = arguments[ee];
          $("error", N, Z);
        }
      }
      function $(N, W, Z) {
        {
          var ee = E.ReactDebugCurrentFrame, te = "";
          if (R) {
            var ce = O(R.type), G = R._owner;
            te += z(ce, R._source, G && O(G.type));
          }
          te += ee.getStackAddendum(), te !== "" && (W += "%s", Z = Z.concat([te]));
          var K = Z.map(function(_e) {
            return "" + _e;
          });
          K.unshift("Warning: " + W), Function.prototype.apply.call(console[N], console, K);
        }
      }
      var _ = !1;
      function T(N) {
        return !!(typeof N == "string" || typeof N == "function" || N === e.Fragment || N === a || N === g || N === o || N === c || N === u || N === b || _ || typeof N == "object" && N !== null && (N.$$typeof === v || N.$$typeof === f || N.$$typeof === i || N.$$typeof === s || N.$$typeof === l || N.$$typeof === m || N.$$typeof === p || N[0] === h));
      }
      var F = /^(.*)[\\\/]/;
      function z(N, W, Z) {
        var ee = "";
        if (W) {
          var te = W.fileName, ce = te.replace(F, "");
          if (/^index\./.test(ce)) {
            var G = te.match(F);
            if (G) {
              var K = G[1];
              if (K) {
                var _e = K.replace(F, "");
                ce = _e + "/" + ce;
              }
            }
          }
          ee = " (at " + ce + ":" + W.lineNumber + ")";
        } else Z && (ee = " (created by " + Z + ")");
        return `
    in ` + (N || "Unknown") + ee;
      }
      var I = 1;
      function L(N) {
        return N._status === I ? N._result : null;
      }
      function A(N, W, Z) {
        var ee = W.displayName || W.name || "";
        return N.displayName || (ee !== "" ? Z + "(" + ee + ")" : Z);
      }
      function O(N) {
        if (N == null)
          return null;
        if (typeof N.tag == "number" && S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof N == "function")
          return N.displayName || N.name || null;
        if (typeof N == "string")
          return N;
        switch (N) {
          case e.Fragment:
            return "Fragment";
          case n:
            return "Portal";
          case a:
            return "Profiler";
          case o:
            return "StrictMode";
          case c:
            return "Suspense";
          case u:
            return "SuspenseList";
        }
        if (typeof N == "object")
          switch (N.$$typeof) {
            case s:
              return "Context.Consumer";
            case i:
              return "Context.Provider";
            case l:
              return A(N, N.render, "ForwardRef");
            case f:
              return O(N.type);
            case p:
              return O(N.render);
            case v: {
              var W = N, Z = L(W);
              if (Z)
                return O(Z);
              break;
            }
          }
        return null;
      }
      var P = {};
      E.ReactDebugCurrentFrame;
      var R = null;
      function D(N) {
        R = N;
      }
      function V(N, W, Z, ee, te) {
        {
          var ce = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var G in N)
            if (ce(N, G)) {
              var K = void 0;
              try {
                if (typeof N[G] != "function") {
                  var _e = Error((ee || "React class") + ": " + Z + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw _e.name = "Invariant Violation", _e;
                }
                K = N[G](W, G, ee, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Qe) {
                K = Qe;
              }
              K && !(K instanceof Error) && (D(te), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", Z, G, typeof K), D(null)), K instanceof Error && !(K.message in P) && (P[K.message] = !0, D(te), S("Failed %s type: %s", Z, K.message), D(null));
            }
        }
      }
      var H = E.ReactCurrentOwner, q = Object.prototype.hasOwnProperty, U = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, B, Q;
      function ie(N) {
        if (q.call(N, "ref")) {
          var W = Object.getOwnPropertyDescriptor(N, "ref").get;
          if (W && W.isReactWarning)
            return !1;
        }
        return N.ref !== void 0;
      }
      function ve(N) {
        if (q.call(N, "key")) {
          var W = Object.getOwnPropertyDescriptor(N, "key").get;
          if (W && W.isReactWarning)
            return !1;
        }
        return N.key !== void 0;
      }
      function oe(N, W) {
        typeof N.ref == "string" && H.current;
      }
      function ae(N, W) {
        {
          var Z = function() {
            B || (B = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
          };
          Z.isReactWarning = !0, Object.defineProperty(N, "key", {
            get: Z,
            configurable: !0
          });
        }
      }
      function me(N, W) {
        {
          var Z = function() {
            Q || (Q = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
          };
          Z.isReactWarning = !0, Object.defineProperty(N, "ref", {
            get: Z,
            configurable: !0
          });
        }
      }
      var pe = function(N, W, Z, ee, te, ce, G) {
        var K = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: r,
          // Built-in properties that belong on the element
          type: N,
          key: W,
          ref: Z,
          props: G,
          // Record the component responsible for creating this element.
          _owner: ce
        };
        return K._store = {}, Object.defineProperty(K._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(K, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.defineProperty(K, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
      };
      function se(N, W, Z, ee, te) {
        {
          var ce, G = {}, K = null, _e = null;
          Z !== void 0 && (K = "" + Z), ve(W) && (K = "" + W.key), ie(W) && (_e = W.ref, oe(W, te));
          for (ce in W)
            q.call(W, ce) && !U.hasOwnProperty(ce) && (G[ce] = W[ce]);
          if (N && N.defaultProps) {
            var Qe = N.defaultProps;
            for (ce in Qe)
              G[ce] === void 0 && (G[ce] = Qe[ce]);
          }
          if (K || _e) {
            var ct = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
            K && ae(G, ct), _e && me(G, ct);
          }
          return pe(N, K, _e, te, ee, H.current, G);
        }
      }
      var ge = E.ReactCurrentOwner;
      E.ReactDebugCurrentFrame;
      function X(N) {
        R = N;
      }
      var ue;
      ue = !1;
      function re(N) {
        return typeof N == "object" && N !== null && N.$$typeof === r;
      }
      function de() {
        {
          if (ge.current) {
            var N = O(ge.current.type);
            if (N)
              return `

Check the render method of \`` + N + "`.";
          }
          return "";
        }
      }
      function he(N) {
        return "";
      }
      var ye = {};
      function Te(N) {
        {
          var W = de();
          if (!W) {
            var Z = typeof N == "string" ? N : N.displayName || N.name;
            Z && (W = `

Check the top-level render call using <` + Z + ">.");
          }
          return W;
        }
      }
      function xe(N, W) {
        {
          if (!N._store || N._store.validated || N.key != null)
            return;
          N._store.validated = !0;
          var Z = Te(W);
          if (ye[Z])
            return;
          ye[Z] = !0;
          var ee = "";
          N && N._owner && N._owner !== ge.current && (ee = " It was passed a child from " + O(N._owner.type) + "."), X(N), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, ee), X(null);
        }
      }
      function Re(N, W) {
        {
          if (typeof N != "object")
            return;
          if (Array.isArray(N))
            for (var Z = 0; Z < N.length; Z++) {
              var ee = N[Z];
              re(ee) && xe(ee, W);
            }
          else if (re(N))
            N._store && (N._store.validated = !0);
          else if (N) {
            var te = C(N);
            if (typeof te == "function" && te !== N.entries)
              for (var ce = te.call(N), G; !(G = ce.next()).done; )
                re(G.value) && xe(G.value, W);
          }
        }
      }
      function J(N) {
        {
          var W = N.type;
          if (W == null || typeof W == "string")
            return;
          var Z;
          if (typeof W == "function")
            Z = W.propTypes;
          else if (typeof W == "object" && (W.$$typeof === l || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          W.$$typeof === f))
            Z = W.propTypes;
          else
            return;
          if (Z) {
            var ee = O(W);
            V(Z, N.props, "prop", ee, N);
          } else if (W.PropTypes !== void 0 && !ue) {
            ue = !0;
            var te = O(W);
            S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
          }
          typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function be(N) {
        {
          for (var W = Object.keys(N.props), Z = 0; Z < W.length; Z++) {
            var ee = W[Z];
            if (ee !== "children" && ee !== "key") {
              X(N), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), X(null);
              break;
            }
          }
          N.ref !== null && (X(N), S("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
        }
      }
      function Ee(N, W, Z, ee, te, ce) {
        {
          var G = T(N);
          if (!G) {
            var K = "";
            (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var _e = he();
            _e ? K += _e : K += de();
            var Qe;
            N === null ? Qe = "null" : Array.isArray(N) ? Qe = "array" : N !== void 0 && N.$$typeof === r ? (Qe = "<" + (O(N.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : Qe = typeof N, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qe, K);
          }
          var ct = se(N, W, Z, te, ce);
          if (ct == null)
            return ct;
          if (G) {
            var Ot = W.children;
            if (Ot !== void 0)
              if (ee)
                if (Array.isArray(Ot)) {
                  for (var er = 0; er < Ot.length; er++)
                    Re(Ot[er], N);
                  Object.freeze && Object.freeze(Ot);
                } else
                  S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Re(Ot, N);
          }
          return N === e.Fragment ? be(ct) : J(ct), ct;
        }
      }
      function Ne(N, W, Z) {
        return Ee(N, W, Z, !0);
      }
      function Ve(N, W, Z) {
        return Ee(N, W, Z, !1);
      }
      var Ie = Ve, ke = Ne;
      e.jsx = Ie, e.jsxs = ke;
    }();
  }(Pa)), Pa;
}
var ks;
function yf() {
  return ks || (ks = 1, process.env.NODE_ENV === "production" ? mo.exports = hf() : mo.exports = bf()), mo.exports;
}
var Ye = yf(), Ta = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ws;
function Cf() {
  return Ws || (Ws = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = "", i = 0; i < arguments.length; i++) {
          var s = arguments[i];
          s && (a = o(a, n(s)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var i = "";
        for (var s in a)
          t.call(a, s) && a[s] && (i = o(i, s));
        return i;
      }
      function o(a, i) {
        return i ? a ? a + " " + i : a + i : a;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(Ta)), Ta.exports;
}
var Sf = Cf();
const ne = /* @__PURE__ */ Nc(Sf);
function De() {
  return De = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, De.apply(null, arguments);
}
function Ce(e) {
  "@babel/helpers - typeof";
  return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ce(e);
}
var xf = Symbol.for("react.element"), Ef = Symbol.for("react.transitional.element"), wf = Symbol.for("react.fragment");
function jc(e) {
  return (
    // Base object type
    e && Ce(e) === "object" && // React Element type
    (e.$$typeof === xf || e.$$typeof === Ef) && // React Fragment type
    e.type === wf
  );
}
function Nr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return k.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Nr(n)) : jc(n) && n.props ? r = r.concat(Nr(n.props.children, t)) : r.push(n));
  }), r;
}
var ci = {}, ls = [], $f = function(t) {
  ls.push(t);
};
function an(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ls.reduce(function(n, o) {
      return o(n != null ? n : "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Of(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ls.reduce(function(n, o) {
      return o(n != null ? n : "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Ic() {
  ci = {};
}
function Ac(e, t, r) {
  !t && !ci[r] && (e(!1, r), ci[r] = !0);
}
function Ue(e, t) {
  Ac(an, e, t);
}
function Rf(e, t) {
  Ac(Of, e, t);
}
Ue.preMessage = $f;
Ue.resetWarned = Ic;
Ue.noteOnce = Rf;
function _f(e, t) {
  if (Ce(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ce(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mc(e) {
  var t = _f(e, "string");
  return Ce(t) == "symbol" ? t : t + "";
}
function j(e, t, r) {
  return (t = Mc(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function qs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qs(Object(r), !0).forEach(function(n) {
      j(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function In(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Pf(e) {
  return e && Ce(e) === "object" && In(e.nativeElement) ? e.nativeElement : In(e) ? e : null;
}
function Po(e) {
  var t = Pf(e);
  if (t)
    return t;
  if (e instanceof k.Component) {
    var r;
    return (r = zs.findDOMNode) === null || r === void 0 ? void 0 : r.call(zs, e);
  }
  return null;
}
var po = { exports: {} }, Fe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Us;
function Tf() {
  if (Us) return Fe;
  Us = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function m(g) {
    if (typeof g == "object" && g !== null) {
      var b = g.$$typeof;
      switch (b) {
        case e:
          switch (g = g.type, g) {
            case r:
            case o:
            case n:
            case c:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case i:
                case l:
                case v:
                case f:
                case a:
                  return g;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return Fe.ContextConsumer = i, Fe.ContextProvider = a, Fe.Element = e, Fe.ForwardRef = l, Fe.Fragment = r, Fe.Lazy = v, Fe.Memo = f, Fe.Portal = t, Fe.Profiler = o, Fe.StrictMode = n, Fe.Suspense = c, Fe.SuspenseList = u, Fe.isAsyncMode = function() {
    return !1;
  }, Fe.isConcurrentMode = function() {
    return !1;
  }, Fe.isContextConsumer = function(g) {
    return m(g) === i;
  }, Fe.isContextProvider = function(g) {
    return m(g) === a;
  }, Fe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Fe.isForwardRef = function(g) {
    return m(g) === l;
  }, Fe.isFragment = function(g) {
    return m(g) === r;
  }, Fe.isLazy = function(g) {
    return m(g) === v;
  }, Fe.isMemo = function(g) {
    return m(g) === f;
  }, Fe.isPortal = function(g) {
    return m(g) === t;
  }, Fe.isProfiler = function(g) {
    return m(g) === o;
  }, Fe.isStrictMode = function(g) {
    return m(g) === n;
  }, Fe.isSuspense = function(g) {
    return m(g) === c;
  }, Fe.isSuspenseList = function(g) {
    return m(g) === u;
  }, Fe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === c || g === u || g === p || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === f || g.$$typeof === a || g.$$typeof === i || g.$$typeof === l || g.$$typeof === h || g.getModuleId !== void 0);
  }, Fe.typeOf = m, Fe;
}
var Le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gs;
function Nf() {
  return Gs || (Gs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = !1, m = !1, g = !1, b = !1, y = !1, x;
    x = Symbol.for("react.module.reference");
    function w(X) {
      return !!(typeof X == "string" || typeof X == "function" || X === r || X === o || y || X === n || X === c || X === u || b || X === p || h || m || g || typeof X == "object" && X !== null && (X.$$typeof === v || X.$$typeof === f || X.$$typeof === a || X.$$typeof === i || X.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      X.$$typeof === x || X.getModuleId !== void 0));
    }
    function C(X) {
      if (typeof X == "object" && X !== null) {
        var ue = X.$$typeof;
        switch (ue) {
          case e:
            var re = X.type;
            switch (re) {
              case r:
              case o:
              case n:
              case c:
              case u:
                return re;
              default:
                var de = re && re.$$typeof;
                switch (de) {
                  case s:
                  case i:
                  case l:
                  case v:
                  case f:
                  case a:
                    return de;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var E = i, S = a, $ = e, _ = l, T = r, F = v, z = f, I = t, L = o, A = n, O = c, P = u, R = !1, D = !1;
    function V(X) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(X) {
      return D || (D = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(X) {
      return C(X) === i;
    }
    function U(X) {
      return C(X) === a;
    }
    function B(X) {
      return typeof X == "object" && X !== null && X.$$typeof === e;
    }
    function Q(X) {
      return C(X) === l;
    }
    function ie(X) {
      return C(X) === r;
    }
    function ve(X) {
      return C(X) === v;
    }
    function oe(X) {
      return C(X) === f;
    }
    function ae(X) {
      return C(X) === t;
    }
    function me(X) {
      return C(X) === o;
    }
    function pe(X) {
      return C(X) === n;
    }
    function se(X) {
      return C(X) === c;
    }
    function ge(X) {
      return C(X) === u;
    }
    Le.ContextConsumer = E, Le.ContextProvider = S, Le.Element = $, Le.ForwardRef = _, Le.Fragment = T, Le.Lazy = F, Le.Memo = z, Le.Portal = I, Le.Profiler = L, Le.StrictMode = A, Le.Suspense = O, Le.SuspenseList = P, Le.isAsyncMode = V, Le.isConcurrentMode = H, Le.isContextConsumer = q, Le.isContextProvider = U, Le.isElement = B, Le.isForwardRef = Q, Le.isFragment = ie, Le.isLazy = ve, Le.isMemo = oe, Le.isPortal = ae, Le.isProfiler = me, Le.isStrictMode = pe, Le.isSuspense = se, Le.isSuspenseList = ge, Le.isValidElementType = w, Le.typeOf = C;
  }()), Le;
}
var Xs;
function jf() {
  return Xs || (Xs = 1, process.env.NODE_ENV === "production" ? po.exports = Tf() : po.exports = Nf()), po.exports;
}
var Na = jf();
function cs(e, t, r) {
  var n = d.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var If = Number(ff.split(".")[0]), us = function(t, r) {
  typeof t == "function" ? t(r) : Ce(t) === "object" && t && "current" in t && (t.current = r);
}, br = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    r.forEach(function(i) {
      us(i, a);
    });
  };
}, Ko = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return cs(function() {
    return br.apply(void 0, r);
  }, r, function(o, a) {
    return o.length !== a.length || o.every(function(i, s) {
      return i !== a[s];
    });
  });
}, Un = function(t) {
  var r, n;
  if (!t)
    return !1;
  if (Fc(t) && If >= 19)
    return !0;
  var o = Na.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Na.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Na.ForwardRef);
};
function Fc(e) {
  return /* @__PURE__ */ Pc(e) && !jc(e);
}
var Yo = function(t) {
  if (t && Fc(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
}, ui = /* @__PURE__ */ d.createContext(null);
function Af(e) {
  var t = e.children, r = e.onBatchResize, n = d.useRef(0), o = d.useRef([]), a = d.useContext(ui), i = d.useCallback(function(s, l, c) {
    n.current += 1;
    var u = n.current;
    o.current.push({
      size: s,
      element: l,
      data: c
    }), Promise.resolve().then(function() {
      u === n.current && (r == null || r(o.current), o.current = []);
    }), a == null || a(s, l, c);
  }, [r, a]);
  return /* @__PURE__ */ d.createElement(ui.Provider, {
    value: i
  }, t);
}
var Lc = function() {
  if (typeof Map != "undefined")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(o, a) {
      return o[0] === r ? (n = a, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), o = this.__entries__[n];
        return o && o[1];
      }, t.prototype.set = function(r, n) {
        var o = e(this.__entries__, r);
        ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, o = e(n, r);
        ~o && n.splice(o, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var o = 0, a = this.__entries__; o < a.length; o++) {
          var i = a[o];
          r.call(n, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), di = typeof window != "undefined" && typeof document != "undefined" && window.document === document, Lo = function() {
  return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
}(), Mf = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Lo) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Ff = 2;
function Lf(e, t) {
  var r = !1, n = !1, o = 0;
  function a() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    Mf(a);
  }
  function s() {
    var l = Date.now();
    if (r) {
      if (l - o < Ff)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    o = l;
  }
  return s;
}
var Df = 20, Vf = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], zf = typeof MutationObserver != "undefined", Bf = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Lf(this.refresh.bind(this), Df);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !di || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), zf ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !di || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, o = Vf.some(function(a) {
        return !!~n.indexOf(a);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Dc = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var o = n[r];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, sn = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Lo;
}, Vc = Zo(0, 0, 0, 0);
function Do(e) {
  return parseFloat(e) || 0;
}
function Ks(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, o) {
    var a = e["border-" + o + "-width"];
    return n + Do(a);
  }, 0);
}
function Hf(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
    var a = o[n], i = e["padding-" + a];
    r[a] = Do(i);
  }
  return r;
}
function kf(e) {
  var t = e.getBBox();
  return Zo(0, 0, t.width, t.height);
}
function Wf(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Vc;
  var n = sn(e).getComputedStyle(e), o = Hf(n), a = o.left + o.right, i = o.top + o.bottom, s = Do(n.width), l = Do(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= Ks(n, "left", "right") + a), Math.round(l + i) !== r && (l -= Ks(n, "top", "bottom") + i)), !Uf(e)) {
    var c = Math.round(s + a) - t, u = Math.round(l + i) - r;
    Math.abs(c) !== 1 && (s -= c), Math.abs(u) !== 1 && (l -= u);
  }
  return Zo(o.left, o.top, s, l);
}
var qf = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement != "undefined" ? function(e) {
    return e instanceof sn(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof sn(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Uf(e) {
  return e === sn(e).document.documentElement;
}
function Gf(e) {
  return di ? qf(e) ? kf(e) : Wf(e) : Vc;
}
function Xf(e) {
  var t = e.x, r = e.y, n = e.width, o = e.height, a = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object, i = Object.create(a.prototype);
  return Dc(i, {
    x: t,
    y: r,
    width: n,
    height: o,
    top: r,
    right: t + n,
    bottom: o + r,
    left: t
  }), i;
}
function Zo(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Kf = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Zo(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Gf(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Yf = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = Xf(r);
      Dc(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Zf = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Lc(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(t instanceof sn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Kf(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(t instanceof sn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new Yf(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), zc = typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : new Lc(), Bc = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Bf.getInstance(), n = new Zf(t, r, this);
      zc.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Bc.prototype[e] = function() {
    var t;
    return (t = zc.get(this))[e].apply(t, arguments);
  };
});
var Qf = function() {
  return typeof Lo.ResizeObserver != "undefined" ? Lo.ResizeObserver : Bc;
}(), ar = /* @__PURE__ */ new Map();
function Hc(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = ar.get(n)) === null || r === void 0 || r.forEach(function(o) {
      return o(n);
    });
  });
}
var kc = new Qf(Hc);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Jf(e, t) {
  ar.has(e) || (ar.set(e, /* @__PURE__ */ new Set()), kc.observe(e)), ar.get(e).add(t);
}
function ev(e, t) {
  ar.has(e) && (ar.get(e).delete(t), ar.get(e).size || (kc.unobserve(e), ar.delete(e)));
}
function st(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ys(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Mc(n.key), n);
  }
}
function lt(e, t, r) {
  return t && Ys(e.prototype, t), r && Ys(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function An(e, t) {
  return An = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, An(e, t);
}
function yr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && An(e, t);
}
function Mn(e) {
  return Mn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Mn(e);
}
function ds() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t) {
  }
  return (ds = function() {
    return !!e;
  })();
}
function $e(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tv(e, t) {
  if (t && (Ce(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return $e(e);
}
function Cr(e) {
  var t = ds();
  return function() {
    var r, n = Mn(e);
    if (t) {
      var o = Mn(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return tv(this, r);
  };
}
var rv = /* @__PURE__ */ function(e) {
  yr(r, e);
  var t = Cr(r);
  function r() {
    return st(this, r), t.apply(this, arguments);
  }
  return lt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(d.Component);
function nv(e, t) {
  var r = e.children, n = e.disabled, o = d.useRef(null), a = d.useRef(null), i = d.useContext(ui), s = typeof r == "function", l = s ? r(o) : r, c = d.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ d.isValidElement(l) && Un(l), f = u ? Yo(l) : null, v = Ko(f, o), p = function() {
    var b;
    return Po(o.current) || // Support `nativeElement` format
    (o.current && Ce(o.current) === "object" ? Po((b = o.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || Po(a.current);
  };
  d.useImperativeHandle(t, function() {
    return p();
  });
  var h = d.useRef(e);
  h.current = e;
  var m = d.useCallback(function(g) {
    var b = h.current, y = b.onResize, x = b.data, w = g.getBoundingClientRect(), C = w.width, E = w.height, S = g.offsetWidth, $ = g.offsetHeight, _ = Math.floor(C), T = Math.floor(E);
    if (c.current.width !== _ || c.current.height !== T || c.current.offsetWidth !== S || c.current.offsetHeight !== $) {
      var F = {
        width: _,
        height: T,
        offsetWidth: S,
        offsetHeight: $
      };
      c.current = F;
      var z = S === Math.round(C) ? C : S, I = $ === Math.round(E) ? E : $, L = M(M({}, F), {}, {
        offsetWidth: z,
        offsetHeight: I
      });
      i == null || i(L, g, x), y && Promise.resolve().then(function() {
        y(L, g);
      });
    }
  }, []);
  return d.useEffect(function() {
    var g = p();
    return g && !n && Jf(g, m), function() {
      return ev(g, m);
    };
  }, [o.current, n]), /* @__PURE__ */ d.createElement(rv, {
    ref: a
  }, u ? /* @__PURE__ */ d.cloneElement(l, {
    ref: v
  }) : l);
}
var Wc = /* @__PURE__ */ d.forwardRef(nv);
process.env.NODE_ENV !== "production" && (Wc.displayName = "SingleObserver");
var ov = "rc-observer-key";
function av(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : Nr(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? an(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && an(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, a) {
    var i = (o == null ? void 0 : o.key) || "".concat(ov, "-").concat(a);
    return /* @__PURE__ */ d.createElement(Wc, De({}, e, {
      key: i,
      ref: a === 0 ? t : void 0
    }), o);
  });
}
var mn = /* @__PURE__ */ d.forwardRef(av);
process.env.NODE_ENV !== "production" && (mn.displayName = "ResizeObserver");
mn.Collection = Af;
function fi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function iv(e) {
  if (Array.isArray(e)) return fi(e);
}
function qc(e) {
  if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function fs(e, t) {
  if (e) {
    if (typeof e == "string") return fi(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? fi(e, t) : void 0;
  }
}
function sv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fe(e) {
  return iv(e) || qc(e) || fs(e) || sv();
}
var Uc = function(t) {
  return +setTimeout(t, 16);
}, Gc = function(t) {
  return clearTimeout(t);
};
typeof window != "undefined" && "requestAnimationFrame" in window && (Uc = function(t) {
  return window.requestAnimationFrame(t);
}, Gc = function(t) {
  return window.cancelAnimationFrame(t);
});
var Zs = 0, Qo = /* @__PURE__ */ new Map();
function Xc(e) {
  Qo.delete(e);
}
var It = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Zs += 1;
  var n = Zs;
  function o(a) {
    if (a === 0)
      Xc(n), t();
    else {
      var i = Uc(function() {
        o(a - 1);
      });
      Qo.set(n, i);
    }
  }
  return o(r), n;
};
It.cancel = function(e) {
  var t = Qo.get(e);
  return Xc(e), Gc(t);
};
process.env.NODE_ENV !== "production" && (It.ids = function() {
  return Qo;
});
function Kc(e) {
  if (Array.isArray(e)) return e;
}
function lv(e, t) {
  var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function Yc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return Kc(e) || lv(e, t) || fs(e, t) || Yc();
}
function Fn(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function mt() {
  return !!(typeof window != "undefined" && window.document && window.document.createElement);
}
function cv(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Qs = "data-rc-order", Js = "data-rc-priority", uv = "rc-util-key", vi = /* @__PURE__ */ new Map();
function Zc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : uv;
}
function Jo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function dv(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function vs(e) {
  return Array.from((vi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Qc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!mt())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = dv(n), s = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(Qs, i), s && a && l.setAttribute(Js, "".concat(a)), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = e;
  var c = Jo(t), u = c.firstChild;
  if (n) {
    if (s) {
      var f = (t.styles || vs(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Qs)))
          return !1;
        var p = Number(v.getAttribute(Js) || 0);
        return a >= p;
      });
      if (f.length)
        return c.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    c.insertBefore(l, u);
  } else
    c.appendChild(l);
  return l;
}
function Jc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Jo(t);
  return (t.styles || vs(r)).find(function(n) {
    return n.getAttribute(Zc(t)) === e;
  });
}
function Ln(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Jc(e, t);
  if (r) {
    var n = Jo(t);
    n.removeChild(r);
  }
}
function fv(e, t) {
  var r = vi.get(e);
  if (!r || !cv(document, r)) {
    var n = Qc("", t), o = n.parentNode;
    vi.set(e, o), e.removeChild(n);
  }
}
function ir(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Jo(r), o = vs(n), a = M(M({}, r), {}, {
    styles: o
  });
  fv(n, a);
  var i = Jc(t, a);
  if (i) {
    var s, l;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((l = a.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      i.nonce = (c = a.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Qc(e, a);
  return u.setAttribute(Zc(a), t), u;
}
function vv(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function ut(e, t) {
  if (e == null) return {};
  var r, n, o = vv(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function gi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(a, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(a);
    if (Ue(!l, "Warning: There may be circular references"), l)
      return !1;
    if (a === i)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(a);
    var c = s + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++)
        if (!o(a[u], i[u], c))
          return !1;
      return !0;
    }
    if (a && i && Ce(a) === "object" && Ce(i) === "object") {
      var f = Object.keys(a);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(v) {
        return o(a[v], i[v], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var gv = "%";
function mi(e) {
  return e.join(gv);
}
var mv = /* @__PURE__ */ function() {
  function e(t) {
    st(this, e), j(this, "instanceId", void 0), j(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return lt(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(mi(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(mi(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
}(), ln = "data-token-hash", Bt = "data-css-hash", pv = "data-cache-path", mr = "__cssinjs_instance__";
function hv() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document != "undefined" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Bt, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[mr] = o[mr] || e, o[mr] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Bt, "]"))).forEach(function(o) {
      var a = o.getAttribute(Bt);
      if (n[a]) {
        if (o[mr] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new mv(e);
}
var Gn = /* @__PURE__ */ d.createContext({
  hashPriority: "low",
  cache: hv(),
  defaultCache: !0
});
function bv(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var gs = /* @__PURE__ */ function() {
  function e() {
    st(this, e), j(this, "cache", void 0), j(this, "keys", void 0), j(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return lt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var l;
          i = (l = i) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (n = i) !== null && n !== void 0 && n.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(c, u) {
            var f = Y(c, 2), v = f[1];
            return o.internalGet(u)[1] < v ? [u, o.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = Y(a, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(c, u) {
        if (u === r.length - 1)
          l.set(c, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var f = l.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : l.set(c, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var a;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
      }
      var i = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), i;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !bv(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
j(gs, "MAX_CACHE_SIZE", 20);
j(gs, "MAX_CACHE_OFFSET", 5);
var el = 0, eu = /* @__PURE__ */ function() {
  function e(t) {
    st(this, e), j(this, "derivatives", void 0), j(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = el, t.length === 0 && an(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), el += 1;
  }
  return lt(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), ja = new gs();
function pi(e) {
  var t = Array.isArray(e) ? e : [e];
  return ja.has(t) || ja.set(t, new eu(t)), ja.get(t);
}
var yv = /* @__PURE__ */ new WeakMap(), Ia = {};
function Cv(e, t) {
  for (var r = yv, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Ia) || r.set(Ia, e()), r.get(Ia);
}
var tl = /* @__PURE__ */ new WeakMap();
function Tn(e) {
  var t = tl.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof eu ? t += n.id : n && Ce(n) === "object" ? t += Tn(n) : t += n;
  }), t = Fn(t), tl.set(e, t)), t;
}
function rl(e, t) {
  return Fn("".concat(t, "_").concat(Tn(e)));
}
var hi = mt();
function we(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Vo(e, t, r) {
  var n, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var i = M(M({}, o), {}, (n = {}, j(n, ln, t), j(n, Bt, r), n)), s = Object.keys(i).map(function(l) {
    var c = i[l];
    return c ? "".concat(l, '="').concat(c, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(s, ">").concat(e, "</style>");
}
var To = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Sv = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = Y(o, 2), i = a[0], s = a[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, tu = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var s, l, c = Y(i, 2), u = c[0], f = c[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[u])
      a[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[u])) {
      var v, p = To(u, n == null ? void 0 : n.prefix);
      o[p] = typeof f == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[u]) ? "".concat(f, "px") : String(f), a[u] = "var(".concat(p, ")");
    }
  }), [a, Sv(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, nl = process.env.NODE_ENV !== "test" && mt() ? d.useLayoutEffect : d.useEffect, qe = function(t, r) {
  var n = d.useRef(!0);
  nl(function() {
    return t(n.current);
  }, r), nl(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, ol = function(t, r) {
  qe(function(n) {
    if (!n)
      return t();
  }, r);
}, xv = M({}, d), al = xv.useInsertionEffect, Ev = function(t, r, n) {
  d.useMemo(t, n), qe(function() {
    return r(!0);
  }, n);
}, wv = al ? function(e, t, r) {
  return al(function() {
    return e(), t();
  }, r);
} : Ev, $v = M({}, d), Ov = $v.useInsertionEffect, Rv = function(t) {
  var r = [], n = !1;
  function o(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && an(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(a);
  }
  return d.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, _v = function() {
  return function(t) {
    t();
  };
}, Pv = typeof Ov != "undefined" ? Rv : _v;
function Tv() {
  return !1;
}
var bi = !1;
function Nv() {
  return bi;
}
const jv = process.env.NODE_ENV === "production" ? Tv : Nv;
if (process.env.NODE_ENV !== "production" && typeof module != "undefined" && module && module.hot && typeof window != "undefined") {
  var ho = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : null;
  if (ho && typeof ho.webpackHotUpdate == "function") {
    var Iv = ho.webpackHotUpdate;
    ho.webpackHotUpdate = function() {
      return bi = !0, setTimeout(function() {
        bi = !1;
      }, 0), Iv.apply(void 0, arguments);
    };
  }
}
function ms(e, t, r, n, o) {
  var a = d.useContext(Gn), i = a.cache, s = [e].concat(fe(t)), l = mi(s), c = Pv([l]), u = jv(), f = function(m) {
    i.opUpdate(l, function(g) {
      var b = g || [void 0, void 0], y = Y(b, 2), x = y[0], w = x === void 0 ? 0 : x, C = y[1], E = C;
      process.env.NODE_ENV !== "production" && C && u && (n == null || n(E, u), E = null);
      var S = E || r(), $ = [w, S];
      return m ? m($) : $;
    });
  };
  d.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var v = i.opGet(l);
  process.env.NODE_ENV !== "production" && !v && (f(), v = i.opGet(l));
  var p = v[1];
  return wv(function() {
    o == null || o(p);
  }, function(h) {
    return f(function(m) {
      var g = Y(m, 2), b = g[0], y = g[1];
      return h && b === 0 && (o == null || o(p)), [b + 1, y];
    }), function() {
      i.opUpdate(l, function(m) {
        var g = m || [], b = Y(g, 2), y = b[0], x = y === void 0 ? 0 : y, w = b[1], C = x - 1;
        return C === 0 ? (c(function() {
          (h || !i.opGet(l)) && (n == null || n(w, !1));
        }), null) : [x - 1, w];
      });
    };
  }, [l]), p;
}
var Av = {}, Mv = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Rr = /* @__PURE__ */ new Map();
function Fv(e) {
  Rr.set(e, (Rr.get(e) || 0) + 1);
}
function Lv(e, t) {
  if (typeof document != "undefined") {
    var r = document.querySelectorAll("style[".concat(ln, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[mr] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Dv = 0;
function Vv(e, t) {
  Rr.set(e, (Rr.get(e) || 0) - 1);
  var r = Array.from(Rr.keys()), n = r.filter(function(o) {
    var a = Rr.get(o) || 0;
    return a <= 0;
  });
  r.length - n.length > Dv && n.forEach(function(o) {
    Lv(o, t), Rr.delete(o);
  });
}
var zv = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = M(M({}, a), r);
  return o && (i = o(i)), i;
}, ru = "token";
function Bv(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = yt(Gn), o = n.cache.instanceId, a = n.container, i = r.salt, s = i === void 0 ? "" : i, l = r.override, c = l === void 0 ? Av : l, u = r.formatToken, f = r.getComputedToken, v = r.cssVar, p = Cv(function() {
    return Object.assign.apply(Object, [{}].concat(fe(t)));
  }, t), h = Tn(p), m = Tn(c), g = v ? Tn(v) : "", b = ms(ru, [s, e.id, h, m, g], function() {
    var y, x = f ? f(p, c, e) : zv(p, c, e, u), w = M({}, x), C = "";
    if (v) {
      var E = tu(x, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), S = Y(E, 2);
      x = S[0], C = S[1];
    }
    var $ = rl(x, s);
    x._tokenKey = $, w._tokenKey = rl(w, s);
    var _ = (y = v == null ? void 0 : v.key) !== null && y !== void 0 ? y : $;
    x._themeKey = _, Fv(_);
    var T = "".concat(Mv, "-").concat(Fn($));
    return x._hashId = T, [x, T, w, C, (v == null ? void 0 : v.key) || ""];
  }, function(y) {
    Vv(y[0]._themeKey, o);
  }, function(y) {
    var x = Y(y, 4), w = x[0], C = x[3];
    if (v && C) {
      var E = ir(C, Fn("css-variables-".concat(w._themeKey)), {
        mark: Bt,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      E[mr] = o, E.setAttribute(ln, w._themeKey);
    }
  });
  return b;
}
var Hv = function(t, r, n) {
  var o = Y(t, 5), a = o[2], i = o[3], s = o[4], l = n || {}, c = l.plain;
  if (!i)
    return null;
  var u = a._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, p = Vo(i, s, u, v, c);
  return [f, u, p];
}, kv = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, nu = "comm", ou = "rule", au = "decl", Wv = "@import", qv = "@namespace", Uv = "@keyframes", Gv = "@layer", iu = Math.abs, ps = String.fromCharCode;
function su(e) {
  return e.trim();
}
function No(e, t, r) {
  return e.replace(t, r);
}
function Xv(e, t, r) {
  return e.indexOf(t, r);
}
function tn(e, t) {
  return e.charCodeAt(t) | 0;
}
function cn(e, t, r) {
  return e.slice(t, r);
}
function Yt(e) {
  return e.length;
}
function Kv(e) {
  return e.length;
}
function bo(e, t) {
  return t.push(e), e;
}
var ea = 1, un = 1, lu = 0, At = 0, et = 0, pn = "";
function hs(e, t, r, n, o, a, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: ea, column: un, length: i, return: "", siblings: s };
}
function Yv() {
  return et;
}
function Zv() {
  return et = At > 0 ? tn(pn, --At) : 0, un--, et === 10 && (un = 1, ea--), et;
}
function Ht() {
  return et = At < lu ? tn(pn, At++) : 0, un++, et === 10 && (un = 1, ea++), et;
}
function pr() {
  return tn(pn, At);
}
function jo() {
  return At;
}
function ta(e, t) {
  return cn(pn, e, t);
}
function Dn(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Qv(e) {
  return ea = un = 1, lu = Yt(pn = e), At = 0, [];
}
function Jv(e) {
  return pn = "", e;
}
function Aa(e) {
  return su(ta(At - 1, yi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function eg(e) {
  for (; (et = pr()) && et < 33; )
    Ht();
  return Dn(e) > 2 || Dn(et) > 3 ? "" : " ";
}
function tg(e, t) {
  for (; --t && Ht() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return ta(e, jo() + (t < 6 && pr() == 32 && Ht() == 32));
}
function yi(e) {
  for (; Ht(); )
    switch (et) {
      // ] ) " '
      case e:
        return At;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && yi(et);
        break;
      // (
      case 40:
        e === 41 && yi(e);
        break;
      // \
      case 92:
        Ht();
        break;
    }
  return At;
}
function rg(e, t) {
  for (; Ht() && e + et !== 57; )
    if (e + et === 84 && pr() === 47)
      break;
  return "/*" + ta(t, At - 1) + "*" + ps(e === 47 ? e : Ht());
}
function ng(e) {
  for (; !Dn(pr()); )
    Ht();
  return ta(e, At);
}
function og(e) {
  return Jv(Io("", null, null, null, [""], e = Qv(e), 0, [0], e));
}
function Io(e, t, r, n, o, a, i, s, l) {
  for (var c = 0, u = 0, f = i, v = 0, p = 0, h = 0, m = 1, g = 1, b = 1, y = 0, x = "", w = o, C = a, E = n, S = x; g; )
    switch (h = y, y = Ht()) {
      // (
      case 40:
        if (h != 108 && tn(S, f - 1) == 58) {
          Xv(S += No(Aa(y), "&", "&\f"), "&\f", iu(c ? s[c - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += Aa(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += eg(h);
        break;
      // \
      case 92:
        S += tg(jo() - 1, 7);
        continue;
      // /
      case 47:
        switch (pr()) {
          case 42:
          case 47:
            bo(ag(rg(Ht(), jo()), t, r, l), l), (Dn(h || 1) == 5 || Dn(pr() || 1) == 5) && Yt(S) && cn(S, -1, void 0) !== " " && (S += " ");
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * m:
        s[c++] = Yt(S) * b;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            g = 0;
          // ;
          case 59 + u:
            b == -1 && (S = No(S, /\f/g, "")), p > 0 && (Yt(S) - f || m === 0 && h === 47) && bo(p > 32 ? sl(S + ";", n, r, f - 1, l) : sl(No(S, " ", "") + ";", n, r, f - 2, l), l);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (bo(E = il(S, t, r, c, u, o, s, x, w = [], C = [], f, a), a), y === 123)
              if (u === 0)
                Io(S, t, E, E, w, a, f, s, C);
              else {
                switch (v) {
                  // c(ontainer)
                  case 99:
                    if (tn(S, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (tn(S, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Io(e, E, E, n && bo(il(e, E, E, 0, 0, o, s, x, o, w = [], f, C), C), o, C, f, s, n ? w : C) : Io(S, E, E, E, [""], C, 0, s, C);
              }
        }
        c = u = p = 0, m = b = 1, x = S = "", f = i;
        break;
      // :
      case 58:
        f = 1 + Yt(S), p = h;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && Zv() == 125)
            continue;
        }
        switch (S += ps(y), y * m) {
          // &
          case 38:
            b = u > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            s[c++] = (Yt(S) - 1) * b, b = 1;
            break;
          // @
          case 64:
            pr() === 45 && (S += Aa(Ht())), v = pr(), u = f = Yt(x = S += ng(jo())), y++;
            break;
          // -
          case 45:
            h === 45 && Yt(S) == 2 && (m = 0);
        }
    }
  return a;
}
function il(e, t, r, n, o, a, i, s, l, c, u, f) {
  for (var v = o - 1, p = o === 0 ? a : [""], h = Kv(p), m = 0, g = 0, b = 0; m < n; ++m)
    for (var y = 0, x = cn(e, v + 1, v = iu(g = i[m])), w = e; y < h; ++y)
      (w = su(g > 0 ? p[y] + " " + x : No(x, /&\f/g, p[y]))) && (l[b++] = w);
  return hs(e, t, r, o === 0 ? ou : s, l, c, u, f);
}
function ag(e, t, r, n) {
  return hs(e, t, r, nu, ps(Yv()), cn(e, 2, -2), 0, n);
}
function sl(e, t, r, n, o) {
  return hs(e, t, r, au, cn(e, 0, n), cn(e, n + 1, -1), n, o);
}
function Ci(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function ig(e, t, r, n) {
  switch (e.type) {
    case Gv:
      if (e.children.length) break;
    case Wv:
    case qv:
    case au:
      return e.return = e.return || e.value;
    case nu:
      return "";
    case Uv:
      return e.return = e.value + "{" + Ci(e.children, n) + "}";
    case ou:
      if (!Yt(e.value = e.props.join(","))) return "";
  }
  return Yt(r = Ci(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function cu(e, t) {
  var r = t.path, n = t.parentSelectors;
  Ue(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var sg = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && cu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, lg = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && cu("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, ll = "data-ant-cssinjs-cache-path", uu = "_FILE_STYLE__", Pr, du = !0;
function cg() {
  if (!Pr && (Pr = {}, mt())) {
    var e = document.createElement("div");
    e.className = ll, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = Y(a, 2), s = i[0], l = i[1];
      Pr[s] = l;
    });
    var r = document.querySelector("style[".concat(ll, "]"));
    if (r) {
      var n;
      du = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function ug(e) {
  return cg(), !!Pr[e];
}
function dg(e) {
  var t = Pr[e], r = null;
  if (t && mt())
    if (du)
      r = uu;
    else {
      var n = document.querySelector("style[".concat(Bt, '="').concat(Pr[e], '"]'));
      n ? r = n.innerHTML : delete Pr[e];
    }
  return [r, t];
}
var fu = "_skip_check_", vu = "_multi_value_";
function Ao(e) {
  var t = Ci(og(e), ig);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function fg(e) {
  return Ce(e) === "object" && e && (fu in e || vu in e);
}
function cl(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var s, l = i.trim().split(/\s+/), c = l[0] || "", u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(u).concat(o).concat(c.slice(u.length)), [c].concat(fe(l.slice(1))).join(" ");
  });
  return a.join(",");
}
var vg = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, s = r.hashId, l = r.layer, c = r.path, u = r.hashPriority, f = r.transformers, v = f === void 0 ? [] : f, p = r.linters, h = p === void 0 ? [] : p, m = "", g = {};
  function b(w) {
    var C = w.getName(s);
    if (!g[C]) {
      var E = e(w.style, r, {
        root: !1,
        parentSelectors: i
      }), S = Y(E, 1), $ = S[0];
      g[C] = "@keyframes ".concat(w.getName(s)).concat($);
    }
  }
  function y(w) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach(function(E) {
      Array.isArray(E) ? y(E, C) : E && C.push(E);
    }), C;
  }
  var x = y(Array.isArray(t) ? t : [t]);
  return x.forEach(function(w) {
    var C = typeof w == "string" && !o ? {} : w;
    if (typeof C == "string")
      m += "".concat(C, `
`);
    else if (C._keyframe)
      b(C);
    else {
      var E = v.reduce(function(S, $) {
        var _;
        return ($ == null || (_ = $.visit) === null || _ === void 0 ? void 0 : _.call($, S)) || S;
      }, C);
      Object.keys(E).forEach(function(S) {
        var $ = E[S];
        if (Ce($) === "object" && $ && (S !== "animationName" || !$._keyframe) && !fg($)) {
          var _ = !1, T = S.trim(), F = !1;
          (o || a) && s ? T.startsWith("@") ? _ = !0 : T === "&" ? T = cl("", s, u) : T = cl(S, s, u) : o && !s && (T === "&" || T === "") && (T = "", F = !0);
          var z = e($, r, {
            root: F,
            injectHash: _,
            parentSelectors: [].concat(fe(i), [T])
          }), I = Y(z, 2), L = I[0], A = I[1];
          g = M(M({}, g), A), m += "".concat(T).concat(L);
        } else {
          let R = function(D, V) {
            process.env.NODE_ENV !== "production" && (Ce($) !== "object" || !($ != null && $[fu])) && [sg, lg].concat(fe(h)).forEach(function(U) {
              return U(D, V, {
                path: c,
                hashId: s,
                parentSelectors: i
              });
            });
            var H = D.replace(/[A-Z]/g, function(U) {
              return "-".concat(U.toLowerCase());
            }), q = V;
            !kv[D] && typeof q == "number" && q !== 0 && (q = "".concat(q, "px")), D === "animationName" && V !== null && V !== void 0 && V._keyframe && (b(V), q = V.getName(s)), m += "".concat(H, ":").concat(q, ";");
          };
          var O, P = (O = $ == null ? void 0 : $.value) !== null && O !== void 0 ? O : $;
          Ce($) === "object" && $ !== null && $ !== void 0 && $[vu] && Array.isArray(P) ? P.forEach(function(D) {
            R(S, D);
          }) : R(S, P);
        }
      });
    }
  }), o ? l && (m && (m = "@layer ".concat(l.name, " {").concat(m, "}")), l.dependencies && (g["@layer ".concat(l.name)] = l.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(l.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, g];
};
function gu(e, t) {
  return Fn("".concat(e.join("%")).concat(t));
}
function gg() {
  return null;
}
var mu = "style";
function Si(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, u = d.useContext(Gn), f = u.autoClear, v = u.mock, p = u.defaultCache, h = u.hashPriority, m = u.container, g = u.ssrInline, b = u.transformers, y = u.linters, x = u.cache, w = u.layer, C = r._tokenKey, E = [C];
  w && E.push("layer"), E.push.apply(E, fe(n));
  var S = hi;
  process.env.NODE_ENV !== "production" && v !== void 0 && (S = v === "client");
  var $ = ms(
    mu,
    E,
    // Create cache if needed
    function() {
      var I = E.join("|");
      if (ug(I)) {
        var L = dg(I), A = Y(L, 2), O = A[0], P = A[1];
        if (O)
          return [O, C, P, {}, s, c];
      }
      var R = t(), D = vg(R, {
        hashId: o,
        hashPriority: h,
        layer: w ? a : void 0,
        path: n.join("-"),
        transformers: b,
        linters: y
      }), V = Y(D, 2), H = V[0], q = V[1], U = Ao(H), B = gu(E, U);
      return [U, C, B, q, s, c];
    },
    // Remove cache if no need
    function(I, L) {
      var A = Y(I, 3), O = A[2];
      (L || f) && hi && Ln(O, {
        mark: Bt
      });
    },
    // Effect: Inject style here
    function(I) {
      var L = Y(I, 4), A = L[0];
      L[1];
      var O = L[2], P = L[3];
      if (S && A !== uu) {
        var R = {
          mark: Bt,
          prepend: w ? !1 : "queue",
          attachTo: m,
          priority: c
        }, D = typeof i == "function" ? i() : i;
        D && (R.csp = {
          nonce: D
        });
        var V = [], H = [];
        Object.keys(P).forEach(function(U) {
          U.startsWith("@layer") ? V.push(U) : H.push(U);
        }), V.forEach(function(U) {
          ir(Ao(P[U]), "_layer-".concat(U), M(M({}, R), {}, {
            prepend: !0
          }));
        });
        var q = ir(A, O, R);
        q[mr] = x.instanceId, q.setAttribute(ln, C), process.env.NODE_ENV !== "production" && q.setAttribute(pv, E.join("|")), H.forEach(function(U) {
          ir(Ao(P[U]), "_effect-".concat(U), R);
        });
      }
    }
  ), _ = Y($, 3), T = _[0], F = _[1], z = _[2];
  return function(I) {
    var L;
    if (!g || S || !p)
      L = /* @__PURE__ */ d.createElement(gg, null);
    else {
      var A;
      L = /* @__PURE__ */ d.createElement("style", De({}, (A = {}, j(A, ln, F), j(A, Bt, z), A), {
        dangerouslySetInnerHTML: {
          __html: T
        }
      }));
    }
    return /* @__PURE__ */ d.createElement(d.Fragment, null, L, I);
  };
}
var mg = function(t, r, n) {
  var o = Y(t, 6), a = o[0], i = o[1], s = o[2], l = o[3], c = o[4], u = o[5], f = n || {}, v = f.plain;
  if (c)
    return null;
  var p = a, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return p = Vo(a, i, s, h, v), l && Object.keys(l).forEach(function(m) {
    if (!r[m]) {
      r[m] = !0;
      var g = Ao(l[m]), b = Vo(g, i, "_effect-".concat(m), h, v);
      m.startsWith("@layer") ? p = b + p : p += b;
    }
  }), [u, s, p];
}, pu = "cssVar", pg = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, s = t.token, l = t.scope, c = l === void 0 ? "" : l, u = yt(Gn), f = u.cache.instanceId, v = u.container, p = s._tokenKey, h = [].concat(fe(t.path), [n, c, p]), m = ms(pu, h, function() {
    var g = r(), b = tu(g, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: c
    }), y = Y(b, 2), x = y[0], w = y[1], C = gu(h, w);
    return [x, w, C, n];
  }, function(g) {
    var b = Y(g, 3), y = b[2];
    hi && Ln(y, {
      mark: Bt
    });
  }, function(g) {
    var b = Y(g, 3), y = b[1], x = b[2];
    if (y) {
      var w = ir(y, x, {
        mark: Bt,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      w[mr] = f, w.setAttribute(ln, n);
    }
  });
  return m;
}, hg = function(t, r, n) {
  var o = Y(t, 4), a = o[1], i = o[2], s = o[3], l = n || {}, c = l.plain;
  if (!a)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, v = Vo(a, s, i, f, c);
  return [u, i, v];
}, wn;
wn = {}, j(wn, mu, mg), j(wn, ru, Hv), j(wn, pu, hg);
var Mt = /* @__PURE__ */ function() {
  function e(t, r) {
    st(this, e), j(this, "name", void 0), j(this, "style", void 0), j(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return lt(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Wr(e) {
  return e.notSplit = !0, e;
}
Wr(["borderTop", "borderBottom"]), Wr(["borderTop"]), Wr(["borderBottom"]), Wr(["borderLeft", "borderRight"]), Wr(["borderLeft"]), Wr(["borderRight"]);
var bs = /* @__PURE__ */ Go({});
function bg(e) {
  return Kc(e) || qc(e) || fs(e) || Yc();
}
function Zt(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function hu(e, t, r, n) {
  if (!t.length)
    return r;
  var o = bg(t), a = o[0], i = o.slice(1), s;
  return !e && typeof a == "number" ? s = [] : Array.isArray(e) ? s = fe(e) : s = M({}, e), n && r === void 0 && i.length === 1 ? delete s[a][i[0]] : s[a] = hu(s[a], i, r, n), s;
}
function Vt(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Zt(e, t.slice(0, -1)) ? e : hu(e, t, r, n);
}
function yg(e) {
  return Ce(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function ul(e) {
  return Array.isArray(e) ? [] : {};
}
var Cg = typeof Reflect == "undefined" ? Object.keys : Reflect.ownKeys;
function Qr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = ul(t[0]);
  return t.forEach(function(o) {
    function a(i, s) {
      var l = new Set(s), c = Zt(o, i), u = Array.isArray(c);
      if (u || yg(c)) {
        if (!l.has(c)) {
          l.add(c);
          var f = Zt(n, i);
          u ? n = Vt(n, i, []) : (!f || Ce(f) !== "object") && (n = Vt(n, i, ul(c))), Cg(c).forEach(function(v) {
            a([].concat(fe(i), [v]), l);
          });
        }
      } else
        n = Vt(n, i, c);
    }
    a([]);
  }), n;
}
function bu() {
}
let nr = null;
function Sg() {
  nr = null, Ic();
}
let Ar = bu;
process.env.NODE_ENV !== "production" && (Ar = (e, t, r) => {
  Ue(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Sg();
});
const yu = /* @__PURE__ */ d.createContext({}), gt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = d.useContext(yu), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = nr;
        nr || (nr = {}), nr[e] = nr[e] || [], nr[e].includes(a || "") || nr[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", nr);
      } else
        process.env.NODE_ENV !== "production" && Ar(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = bu, e;
}, xg = /* @__PURE__ */ Go(void 0);
var Eg = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, wg = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, $g = M(M({}, wg), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const Cu = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, dl = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, $g),
  timePickerLocale: Object.assign({}, Cu)
}, St = "${label} is not a valid ${type}", dn = {
  locale: "en",
  Pagination: Eg,
  DatePicker: dl,
  TimePicker: Cu,
  Calendar: dl,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: St,
        method: St,
        array: St,
        object: St,
        number: St,
        date: St,
        boolean: St,
        integer: St,
        float: St,
        regexp: St,
        email: St,
        url: St,
        hex: St
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, dn.Modal);
let Mo = [];
const fl = () => Mo.reduce((e, t) => Object.assign(Object.assign({}, e), t), dn.Modal);
function Og(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Mo.push(t), fl(), () => {
      Mo = Mo.filter((r) => r !== t), fl();
    };
  }
  Object.assign({}, dn.Modal);
}
const ys = /* @__PURE__ */ Go(void 0), Rg = (e, t) => {
  const r = d.useContext(ys), n = d.useMemo(() => {
    var a;
    const i = dn[e], s = (a = r == null ? void 0 : r[e]) !== null && a !== void 0 ? a : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, r]), o = d.useMemo(() => {
    const a = r == null ? void 0 : r.locale;
    return r != null && r.exist && !a ? dn.locale : a;
  }, [r]);
  return [n, o];
}, Su = "internalMark", xu = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = gt("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(n === Su, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  d.useEffect(() => Og(t == null ? void 0 : t.Modal), [t]);
  const o = d.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ d.createElement(ys.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (xu.displayName = "LocaleProvider");
const Eu = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Vn = Object.assign(Object.assign({}, Eu), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), it = Math.round;
function Ma(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const vl = (e, t, r) => r === 0 ? e : e / 100;
function $n(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class Ge {
  constructor(t) {
    j(this, "isValid", !0), j(this, "r", 0), j(this, "g", 0), j(this, "b", 0), j(this, "a", 1), j(this, "_h", void 0), j(this, "_s", void 0), j(this, "_l", void 0), j(this, "_v", void 0), j(this, "_max", void 0), j(this, "_min", void 0), j(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return n.startsWith(a);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
    } else if (t instanceof Ge)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = $n(t.r), this.g = $n(t.g), this.b = $n(t.b), this.a = typeof t.a == "number" ? $n(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const r = this.toHsv();
    return r.h = t, this._c(r);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(a) {
      const i = a / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const r = t(this.r), n = t(this.g), o = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h == "undefined") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = it(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s == "undefined") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l == "undefined" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v == "undefined" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness == "undefined" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), o = r / 100, a = (s) => (n[s] - this[s]) * o + this[s], i = {
      r: it(a("r")),
      g: it(a("g")),
      b: it(a("b")),
      a: it(a("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const r = this._c(t), n = this.a + r.a * (1 - this.a), o = (a) => it((this[a] * this.a + r[a] * r.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = it(this.a * 255).toString(16);
      t += a.length === 2 ? a : "0" + a;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), r = it(this.getSaturation() * 100), n = it(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, r, n) {
    const o = this.clone();
    return o[t] = $n(r, n), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max == "undefined" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min == "undefined" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const r = t.replace("#", "");
    function n(o, a) {
      return parseInt(r[o] + r[a || o], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a: o
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof o == "number" ? o : 1, r <= 0) {
      const v = it(n * 255);
      this.r = v, this.g = v, this.b = v;
    }
    let a = 0, i = 0, s = 0;
    const l = t / 60, c = (1 - Math.abs(2 * n - 1)) * r, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (a = c, i = u) : l >= 1 && l < 2 ? (a = u, i = c) : l >= 2 && l < 3 ? (i = c, s = u) : l >= 3 && l < 4 ? (i = u, s = c) : l >= 4 && l < 5 ? (a = u, s = c) : l >= 5 && l < 6 && (a = c, s = u);
    const f = n - c / 2;
    this.r = it((a + f) * 255), this.g = it((i + f) * 255), this.b = it((s + f) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a: o
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof o == "number" ? o : 1;
    const a = it(n * 255);
    if (this.r = a, this.g = a, this.b = a, r <= 0)
      return;
    const i = t / 60, s = Math.floor(i), l = i - s, c = it(n * (1 - r) * 255), u = it(n * (1 - r * l) * 255), f = it(n * (1 - r * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const r = Ma(t, vl);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = Ma(t, vl);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = Ma(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? it(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var yo = 2, gl = 0.16, _g = 0.05, Pg = 0.05, Tg = 0.15, wu = 5, $u = 4, Ng = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function ml(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - yo * t : Math.round(e.h) + yo * t : n = r ? Math.round(e.h) + yo * t : Math.round(e.h) - yo * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function pl(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - gl * t : t === $u ? n = e.s + gl : n = e.s + _g * t, n > 1 && (n = 1), r && t === wu && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function hl(e, t, r) {
  var n;
  return r ? n = e.v + Pg * t : n = e.v - Tg * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function zn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = new Ge(e), o = n.toHsv(), a = wu; a > 0; a -= 1) {
    var i = new Ge({
      h: ml(o, a, !0),
      s: pl(o, a, !0),
      v: hl(o, a, !0)
    });
    r.push(i);
  }
  r.push(n);
  for (var s = 1; s <= $u; s += 1) {
    var l = new Ge({
      h: ml(o, s),
      s: pl(o, s),
      v: hl(o, s)
    });
    r.push(l);
  }
  return t.theme === "dark" ? Ng.map(function(c) {
    var u = c.index, f = c.amount;
    return new Ge(t.backgroundColor || "#141414").mix(r[u], f).toHexString();
  }) : r.map(function(c) {
    return c.toHexString();
  });
}
var Fa = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, xi = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
xi.primary = xi[5];
var Ei = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ei.primary = Ei[5];
var wi = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
wi.primary = wi[5];
var zo = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
zo.primary = zo[5];
var $i = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
$i.primary = $i[5];
var Oi = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Oi.primary = Oi[5];
var Ri = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ri.primary = Ri[5];
var _i = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
_i.primary = _i[5];
var Bo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Bo.primary = Bo[5];
var Pi = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Pi.primary = Pi[5];
var Ti = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Ti.primary = Ti[5];
var Ni = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Ni.primary = Ni[5];
var ji = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
ji.primary = ji[5];
var La = {
  red: xi,
  volcano: Ei,
  orange: wi,
  gold: zo,
  yellow: $i,
  lime: Oi,
  green: Ri,
  cyan: _i,
  blue: Bo,
  geekblue: Pi,
  purple: Ti,
  magenta: Ni,
  grey: ji
};
function jg(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: o,
    colorWarning: a,
    colorError: i,
    colorInfo: s,
    colorPrimary: l,
    colorBgBase: c,
    colorTextBase: u
  } = e, f = r(l), v = r(o), p = r(a), h = r(i), m = r(s), g = n(c, u), b = e.colorLink || e.colorInfo, y = r(b), x = new Ge(h[1]).mix(new Ge(h[3]), 50).toHexString();
  return Object.assign(Object.assign({}, g), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBgFilledHover: x,
    colorErrorBgActive: h[3],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: p[1],
    colorWarningBgHover: p[2],
    colorWarningBorder: p[3],
    colorWarningBorderHover: p[4],
    colorWarningHover: p[4],
    colorWarning: p[6],
    colorWarningActive: p[7],
    colorWarningTextHover: p[8],
    colorWarningText: p[9],
    colorWarningTextActive: p[10],
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new Ge("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Ig = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Ag(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Ig(n));
}
const Mg = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Fo(e) {
  return (e + 8) / e;
}
function Fg(e) {
  const t = Array.from({
    length: 10
  }).map((r, n) => {
    const o = n - 1, a = e * Math.pow(Math.E, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: Fo(r)
  }));
}
const Lg = (e) => {
  const t = Fg(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), o = r[1], a = r[0], i = r[2], s = n[1], l = n[0], c = n[2];
  return {
    fontSizeSM: a,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: s,
    lineHeightLG: c,
    lineHeightSM: l,
    fontHeight: Math.round(s * o),
    fontHeightLG: Math.round(c * i),
    fontHeightSM: Math.round(l * a),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function Dg(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const Tt = (e, t) => new Ge(e).setA(t).toRgbString(), On = (e, t) => new Ge(e).darken(t).toHexString(), Vg = (e) => {
  const t = zn(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, zg = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Tt(n, 0.88),
    colorTextSecondary: Tt(n, 0.65),
    colorTextTertiary: Tt(n, 0.45),
    colorTextQuaternary: Tt(n, 0.25),
    colorFill: Tt(n, 0.15),
    colorFillSecondary: Tt(n, 0.06),
    colorFillTertiary: Tt(n, 0.04),
    colorFillQuaternary: Tt(n, 0.02),
    colorBgSolid: Tt(n, 1),
    colorBgSolidHover: Tt(n, 0.75),
    colorBgSolidActive: Tt(n, 0.95),
    colorBgLayout: On(r, 4),
    colorBgContainer: On(r, 0),
    colorBgElevated: On(r, 0),
    colorBgSpotlight: Tt(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: On(r, 15),
    colorBorderSecondary: On(r, 6)
  };
};
function Bg(e) {
  Fa.pink = Fa.magenta, La.pink = La.magenta;
  const t = Object.keys(Eu).map((r) => {
    const n = e[r] === Fa[r] ? La[r] : zn(e[r]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), jg(e, {
    generateColorPalettes: Vg,
    generateNeutralColorPalettes: zg
  })), Lg(e.fontSize)), Dg(e)), Mg(e)), Ag(e));
}
const Ou = pi(Bg), Ii = {
  token: Vn,
  override: {
    override: Vn
  },
  hashed: !0
}, Ru = /* @__PURE__ */ k.createContext(Ii), Ho = "ant", Cs = "anticon", Hg = ["outlined", "borderless", "filled", "underlined"], kg = (e, t) => t || (e ? `${Ho}-${e}` : Ho), rt = /* @__PURE__ */ d.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: kg,
  iconPrefixCls: Cs
}), {
  Consumer: CS
} = rt, bl = {};
function hn(e) {
  const t = d.useContext(rt), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: bl,
    styles: bl
  }, a), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  });
}
const Wg = `-ant-${Date.now()}-${Math.random()}`;
function qg(e, t) {
  const r = {}, n = (i, s) => {
    let l = i.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, o = (i, s) => {
    const l = new Ge(i), c = zn(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = c[1], r[`${s}-color-hover`] = c[4], r[`${s}-color-active`] = c[6], r[`${s}-color-outline`] = l.clone().setA(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = c[0], r[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new Ge(t.primaryColor), s = zn(i.toRgbString());
    s.forEach((c, u) => {
      r[`primary-${u + 1}`] = c;
    }), r["primary-color-deprecated-l-35"] = n(i, (c) => c.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (c) => c.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (c) => c.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (c) => c.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (c) => c.setA(c.a * 0.12));
    const l = new Ge(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (c) => c.setA(c.a * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function Ug(e, t) {
  const r = qg(e, t);
  mt() ? ir(r, `${Wg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ar(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const jr = /* @__PURE__ */ d.createContext(!1), Gg = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = d.useContext(jr);
  return /* @__PURE__ */ d.createElement(jr.Provider, {
    value: r != null ? r : n
  }, t);
}, fn = /* @__PURE__ */ d.createContext(void 0), Xg = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = d.useContext(fn);
  return /* @__PURE__ */ d.createElement(fn.Provider, {
    value: r || n
  }, t);
};
function Kg() {
  const e = yt(jr), t = yt(fn);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var _u = /* @__PURE__ */ lt(function e() {
  st(this, e);
}), Pu = "CALC_UNIT", Yg = new RegExp(Pu, "g");
function Da(e) {
  return typeof e == "number" ? "".concat(e).concat(Pu) : e;
}
var Zg = /* @__PURE__ */ function(e) {
  yr(r, e);
  var t = Cr(r);
  function r(n, o) {
    var a;
    st(this, r), a = t.call(this), j($e(a), "result", ""), j($e(a), "unitlessCssVar", void 0), j($e(a), "lowPriority", void 0);
    var i = Ce(n);
    return a.unitlessCssVar = o, n instanceof r ? a.result = "(".concat(n.result, ")") : i === "number" ? a.result = Da(n) : i === "string" && (a.result = n), a;
  }
  return lt(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Da(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Da(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var a = this, i = o || {}, s = i.unit, l = !0;
      return typeof s == "boolean" ? l = s : Array.from(this.unitlessCssVar).some(function(c) {
        return a.result.includes(c);
      }) && (l = !1), this.result = this.result.replace(Yg, l ? "px" : ""), typeof this.lowPriority != "undefined" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(_u), Qg = /* @__PURE__ */ function(e) {
  yr(r, e);
  var t = Cr(r);
  function r(n) {
    var o;
    return st(this, r), o = t.call(this), j($e(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return lt(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof r ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof r ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
}(_u), Jg = function(t, r) {
  var n = t === "css" ? Zg : Qg;
  return function(o) {
    return new n(o, r);
  };
}, yl = function(t, r) {
  return "".concat([r, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function vt(e) {
  var t = d.useRef();
  t.current = e;
  var r = d.useCallback(function() {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function Bn(e) {
  var t = d.useRef(!1), r = d.useState(e), n = Y(r, 2), o = n[0], a = n[1];
  d.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, l) {
    l && t.current || a(s);
  }
  return [o, i];
}
function Va(e) {
  return e !== void 0;
}
function hr(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, a = r.onChange, i = r.postState, s = Bn(function() {
    return Va(o) ? o : Va(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), l = Y(s, 2), c = l[0], u = l[1], f = o !== void 0 ? o : c, v = i ? i(f) : f, p = vt(a), h = Bn([f]), m = Y(h, 2), g = m[0], b = m[1];
  ol(function() {
    var x = g[0];
    c !== x && p(c, x);
  }, [g]), ol(function() {
    Va(o) || u(o);
  }, [o]);
  var y = vt(function(x, w) {
    u(x, w), b([f], w);
  });
  return [v, y];
}
function Cl(e, t, r, n) {
  var o = M({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var a = n.deprecatedTokens;
    a.forEach(function(s) {
      var l = Y(s, 2), c = l[0], u = l[1];
      if (process.env.NODE_ENV !== "production" && Ue(!(o != null && o[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[c] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[c]);
      }
    });
  }
  var i = M(M({}, r), o);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var Tu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC != "undefined", Ai = !0;
function ht() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Tu)
    return Object.assign.apply(Object, [{}].concat(t));
  Ai = !1;
  var n = {};
  return t.forEach(function(o) {
    if (Ce(o) === "object") {
      var a = Object.keys(o);
      a.forEach(function(i) {
        Object.defineProperty(n, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), Ai = !0, n;
}
var Sl = {};
function em() {
}
var tm = function(t) {
  var r, n = t, o = em;
  return Tu && typeof Proxy != "undefined" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(i, s) {
      if (Ai) {
        var l;
        (l = r) === null || l === void 0 || l.add(s);
      }
      return i[s];
    }
  }), o = function(i, s) {
    var l;
    Sl[i] = {
      global: Array.from(r),
      component: M(M({}, (l = Sl[i]) === null || l === void 0 ? void 0 : l.component), s)
    };
  }), {
    token: n,
    keys: r,
    flush: o
  };
};
function xl(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(ht(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r != null ? r : {};
}
function rm(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "max(".concat(n.map(function(a) {
        return we(a);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(a) {
        return we(a);
      }).join(","), ")");
    }
  };
}
var nm = 1e3 * 60 * 10, om = /* @__PURE__ */ function() {
  function e() {
    st(this, e), j(this, "map", /* @__PURE__ */ new Map()), j(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), j(this, "nextID", 0), j(this, "lastAccessBeat", /* @__PURE__ */ new Map()), j(this, "accessBeat", 0);
  }
  return lt(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      var o = this.getCompositeKey(r);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      var n = this.getCompositeKey(r), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      var n = this, o = r.map(function(a) {
        return a && Ce(a) === "object" ? "obj_".concat(n.getObjectID(a)) : "".concat(Ce(a), "_").concat(a);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      var n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var r = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(o, a) {
          n - o > nm && (r.map.delete(a), r.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), El = new om();
function am(e, t) {
  return k.useMemo(function() {
    var r = El.get(t);
    if (r)
      return r;
    var n = e();
    return El.set(t, n), n;
  }, t);
}
var im = function() {
  return {};
};
function sm(e) {
  var t = e.useCSP, r = t === void 0 ? im : t, n = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function l(v, p, h, m) {
    var g = Array.isArray(v) ? v[0] : v;
    function b($) {
      return "".concat(String(g)).concat($.slice(0, 1).toUpperCase()).concat($.slice(1));
    }
    var y = (m == null ? void 0 : m.unitless) || {}, x = typeof s == "function" ? s(v) : {}, w = M(M({}, x), {}, j({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function($) {
      w[b($)] = y[$];
    });
    var C = M(M({}, m), {}, {
      unitless: w,
      prefixToken: b
    }), E = u(v, p, h, C), S = c(g, h, C);
    return function($) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $, T = E($, _), F = Y(T, 2), z = F[1], I = S(_), L = Y(I, 2), A = L[0], O = L[1];
      return [A, z, O];
    };
  }
  function c(v, p, h) {
    var m = h.unitless, g = h.injectStyle, b = g === void 0 ? !0 : g, y = h.prefixToken, x = h.ignore, w = function(S) {
      var $ = S.rootCls, _ = S.cssVar, T = _ === void 0 ? {} : _, F = n(), z = F.realToken;
      return pg({
        path: [v],
        prefix: T.prefix,
        key: T.key,
        unitless: m,
        ignore: x,
        token: z,
        scope: $
      }, function() {
        var I = xl(v, z, p), L = Cl(v, z, I, {
          deprecatedTokens: h == null ? void 0 : h.deprecatedTokens
        });
        return Object.keys(I).forEach(function(A) {
          L[y(A)] = L[A], delete L[A];
        }), L;
      }), null;
    }, C = function(S) {
      var $ = n(), _ = $.cssVar;
      return [function(T) {
        return b && _ ? /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(w, {
          rootCls: S,
          cssVar: _,
          component: v
        }), T) : T;
      }, _ == null ? void 0 : _.key];
    };
    return C;
  }
  function u(v, p, h) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = Array.isArray(v) ? v : [v, v], b = Y(g, 1), y = b[0], x = g.join("-"), w = e.layer || {
      name: "antd"
    };
    return function(C) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, S = n(), $ = S.theme, _ = S.realToken, T = S.hashId, F = S.token, z = S.cssVar, I = o(), L = I.rootPrefixCls, A = I.iconPrefixCls, O = r(), P = z ? "css" : "js", R = am(function() {
        var B = /* @__PURE__ */ new Set();
        return z && Object.keys(m.unitless || {}).forEach(function(Q) {
          B.add(To(Q, z.prefix)), B.add(To(Q, yl(y, z.prefix)));
        }), Jg(P, B);
      }, [P, y, z == null ? void 0 : z.prefix]), D = rm(P), V = D.max, H = D.min, q = {
        theme: $,
        token: F,
        hashId: T,
        nonce: function() {
          return O.nonce;
        },
        clientOnly: m.clientOnly,
        layer: w,
        // antd is always at top of styles
        order: m.order || -999
      };
      typeof a == "function" && Si(M(M({}, q), {}, {
        clientOnly: !1,
        path: ["Shared", L]
      }), function() {
        return a(F, {
          prefix: {
            rootPrefixCls: L,
            iconPrefixCls: A
          },
          csp: O
        });
      });
      var U = Si(M(M({}, q), {}, {
        path: [x, C, A]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var B = tm(F), Q = B.token, ie = B.flush, ve = xl(y, _, h), oe = ".".concat(C), ae = Cl(y, _, ve, {
          deprecatedTokens: m.deprecatedTokens
        });
        z && ve && Ce(ve) === "object" && Object.keys(ve).forEach(function(ge) {
          ve[ge] = "var(".concat(To(ge, yl(y, z.prefix)), ")");
        });
        var me = ht(Q, {
          componentCls: oe,
          prefixCls: C,
          iconCls: ".".concat(A),
          antCls: ".".concat(L),
          calc: R,
          // @ts-ignore
          max: V,
          // @ts-ignore
          min: H
        }, z ? ve : ae), pe = p(me, {
          hashId: T,
          prefixCls: C,
          rootPrefixCls: L,
          iconPrefixCls: A
        });
        ie(y, ae);
        var se = typeof i == "function" ? i(me, C, E, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : se, pe];
      });
      return [U, T];
    };
  }
  function f(v, p, h) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = u(v, p, h, M({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), b = function(x) {
      var w = x.prefixCls, C = x.rootCls, E = C === void 0 ? w : C;
      return g(w, E), null;
    };
    return process.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), b;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const Ir = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], lm = "5.24.8";
function za(e) {
  return e >= 0 && e <= 255;
}
function _n(e, t) {
  const {
    r,
    g: n,
    b: o,
    a
  } = new Ge(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: s,
    b: l
  } = new Ge(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((r - i * (1 - c)) / c), f = Math.round((n - s * (1 - c)) / c), v = Math.round((o - l * (1 - c)) / c);
    if (za(u) && za(f) && za(v))
      return new Ge({
        r: u,
        g: f,
        b: v,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Ge({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var cm = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Nu(e) {
  const {
    override: t
  } = e, r = cm(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Vn).forEach((v) => {
    delete n[v];
  });
  const o = Object.assign(Object.assign({}, r), n), a = 480, i = 576, s = 768, l = 992, c = 1200, u = 1600;
  if (o.motion === !1) {
    const v = "0s";
    o.motionDurationFast = v, o.motionDurationMid = v, o.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: _n(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: _n(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: _n(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 3,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: _n(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Ge("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ge("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ge("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var wl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const ju = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, um = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, dm = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Iu = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = wl(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = Nu(i), a && Object.entries(a).forEach((s) => {
    let [l, c] = s;
    const {
      theme: u
    } = c, f = wl(c, ["theme"]);
    let v = f;
    u && (v = Iu(Object.assign(Object.assign({}, i), f), {
      override: f
    }, u)), i[l] = v;
  }), i;
};
function cr() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = k.useContext(Ru), a = `${lm}-${t || ""}`, i = r || Ou, [s, l, c] = Bv(i, [Vn, e], {
    salt: a,
    override: n,
    getComputedToken: Iu,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Nu,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: ju,
      ignore: um,
      preserve: dm
    }
  });
  return [i, c, t ? l : "", s, o];
}
const rn = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, Au = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), fm = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), vm = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), gm = (e, t, r, n) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = r ? `.${r}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [o]: i
    })
  };
}, Mu = (e, t) => ({
  outline: `${we(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t != null ? t : 1,
  transition: "outline-offset 0s, outline 0s"
}), Fu = (e, t) => ({
  "&:focus-visible": Object.assign({}, Mu(e, t))
}), Lu = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Au()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), Du = (e) => Object.assign(Object.assign({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: e.colorLink,
  textDecoration: e.linkDecoration,
  outline: "none",
  cursor: "pointer",
  transition: `all ${e.motionDurationSlow}`,
  border: 0,
  padding: 0,
  background: "none",
  userSelect: "none"
}, Fu(e)), {
  "&:focus, &:hover": {
    color: e.colorLinkHover
  },
  "&:active": {
    color: e.colorLinkActive
  }
}), {
  genStyleHooks: kt,
  genComponentStyleHook: mm,
  genSubStyleComponent: pm
} = sm({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = yt(rt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, r, n, o] = cr();
    return {
      theme: e,
      realToken: t,
      hashId: r,
      token: n,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = yt(rt);
    return e != null ? e : {};
  },
  getResetStyles: (e, t) => {
    var r;
    const n = vm(e);
    return [n, {
      "&": n
    }, Lu((r = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && r !== void 0 ? r : Cs)];
  },
  getCommonStyle: gm,
  getCompUnitless: () => ju
});
function hm(e, t) {
  return Ir.reduce((r, n) => {
    const o = e[`${n}1`], a = e[`${n}3`], i = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, r), t(n, {
      lightColor: o,
      lightBorderColor: a,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const bm = (e, t) => {
  const [r, n] = cr();
  return Si({
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Lu(e)]);
}, ym = Object.assign({}, d), {
  useId: $l
} = ym, Cm = () => "", Sm = typeof $l == "undefined" ? Cm : $l;
function xm(e, t, r) {
  var n, o;
  const a = gt("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, Ii), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : Ii.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = Sm();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || l);
    process.env.NODE_ENV !== "production" && a(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return cs(() => {
    var c, u;
    if (!e)
      return t;
    const f = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((h) => {
      f[h] = Object.assign(Object.assign({}, f[h]), e.components[h]);
    });
    const v = `css-var-${l.replace(/:/g, "")}`, p = ((c = i.cssVar) !== null && c !== void 0 ? c : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r == null ? void 0 : r.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: f,
      cssVar: p
    });
  }, [i, s], (c, u) => c.some((f, v) => {
    const p = u[v];
    return !gi(f, p, !0);
  }));
}
var Em = ["children"], Vu = /* @__PURE__ */ d.createContext({});
function wm(e) {
  var t = e.children, r = ut(e, Em);
  return /* @__PURE__ */ d.createElement(Vu.Provider, {
    value: r
  }, t);
}
var $m = /* @__PURE__ */ function(e) {
  yr(r, e);
  var t = Cr(r);
  function r() {
    return st(this, r), t.apply(this, arguments);
  }
  return lt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(d.Component);
function Om(e) {
  var t = d.useReducer(function(s) {
    return s + 1;
  }, 0), r = Y(t, 2), n = r[1], o = d.useRef(e), a = vt(function() {
    return o.current;
  }), i = vt(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, n();
  });
  return [a, i];
}
var gr = "none", Co = "appear", So = "enter", xo = "leave", Ol = "none", zt = "prepare", Jr = "start", en = "active", Ss = "end", zu = "prepared";
function Rl(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Rm(e, t) {
  var r = {
    animationend: Rl("Animation", "AnimationEnd"),
    transitionend: Rl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var _m = Rm(mt(), typeof window != "undefined" ? window : {}), Bu = {};
if (mt()) {
  var Pm = document.createElement("div");
  Bu = Pm.style;
}
var Eo = {};
function Hu(e) {
  if (Eo[e])
    return Eo[e];
  var t = _m[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in Bu)
        return Eo[e] = t[a], Eo[e];
    }
  return "";
}
var ku = Hu("animationend"), Wu = Hu("transitionend"), qu = !!(ku && Wu), _l = ku || "animationend", Pl = Wu || "transitionend";
function Tl(e, t) {
  if (!e) return null;
  if (Ce(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const Tm = function(e) {
  var t = Oe();
  function r(o) {
    o && (o.removeEventListener(Pl, e), o.removeEventListener(_l, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(Pl, e), o.addEventListener(_l, e), t.current = o);
  }
  return d.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var Uu = mt() ? vf : tt;
const Nm = function() {
  var e = d.useRef(null);
  function t() {
    It.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = It(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = a;
  }
  return d.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var jm = [zt, Jr, en, Ss], Im = [zt, zu], Gu = !1, Am = !0;
function Xu(e) {
  return e === en || e === Ss;
}
const Mm = function(e, t, r) {
  var n = Bn(Ol), o = Y(n, 2), a = o[0], i = o[1], s = Nm(), l = Y(s, 2), c = l[0], u = l[1];
  function f() {
    i(zt, !0);
  }
  var v = t ? Im : jm;
  return Uu(function() {
    if (a !== Ol && a !== Ss) {
      var p = v.indexOf(a), h = v[p + 1], m = r(a);
      m === Gu ? i(h, !0) : h && c(function(g) {
        function b() {
          g.isCanceled() || i(h, !0);
        }
        m === !0 ? b() : Promise.resolve(m).then(b);
      });
    }
  }, [e, a]), d.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, a];
};
function Fm(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, s = i === void 0 ? !0 : i, l = n.motionLeave, c = l === void 0 ? !0 : l, u = n.motionDeadline, f = n.motionLeaveImmediately, v = n.onAppearPrepare, p = n.onEnterPrepare, h = n.onLeavePrepare, m = n.onAppearStart, g = n.onEnterStart, b = n.onLeaveStart, y = n.onAppearActive, x = n.onEnterActive, w = n.onLeaveActive, C = n.onAppearEnd, E = n.onEnterEnd, S = n.onLeaveEnd, $ = n.onVisibleChanged, _ = Bn(), T = Y(_, 2), F = T[0], z = T[1], I = Om(gr), L = Y(I, 2), A = L[0], O = L[1], P = Bn(null), R = Y(P, 2), D = R[0], V = R[1], H = A(), q = Oe(!1), U = Oe(null);
  function B() {
    return r();
  }
  var Q = Oe(!1);
  function ie() {
    O(gr), V(null, !0);
  }
  var ve = vt(function(xe) {
    var Re = A();
    if (Re !== gr) {
      var J = B();
      if (!(xe && !xe.deadline && xe.target !== J)) {
        var be = Q.current, Ee;
        Re === Co && be ? Ee = C == null ? void 0 : C(J, xe) : Re === So && be ? Ee = E == null ? void 0 : E(J, xe) : Re === xo && be && (Ee = S == null ? void 0 : S(J, xe)), be && Ee !== !1 && ie();
      }
    }
  }), oe = Tm(ve), ae = Y(oe, 1), me = ae[0], pe = function(Re) {
    switch (Re) {
      case Co:
        return j(j(j({}, zt, v), Jr, m), en, y);
      case So:
        return j(j(j({}, zt, p), Jr, g), en, x);
      case xo:
        return j(j(j({}, zt, h), Jr, b), en, w);
      default:
        return {};
    }
  }, se = d.useMemo(function() {
    return pe(H);
  }, [H]), ge = Mm(H, !e, function(xe) {
    if (xe === zt) {
      var Re = se[zt];
      return Re ? Re(B()) : Gu;
    }
    if (re in se) {
      var J;
      V(((J = se[re]) === null || J === void 0 ? void 0 : J.call(se, B(), null)) || null);
    }
    return re === en && H !== gr && (me(B()), u > 0 && (clearTimeout(U.current), U.current = setTimeout(function() {
      ve({
        deadline: !0
      });
    }, u))), re === zu && ie(), Am;
  }), X = Y(ge, 2), ue = X[0], re = X[1], de = Xu(re);
  Q.current = de;
  var he = Oe(null);
  Uu(function() {
    if (!(q.current && he.current === t)) {
      z(t);
      var xe = q.current;
      q.current = !0;
      var Re;
      !xe && t && s && (Re = Co), xe && t && a && (Re = So), (xe && !t && c || !xe && f && !t && c) && (Re = xo);
      var J = pe(Re);
      Re && (e || J[zt]) ? (O(Re), ue()) : O(gr), he.current = t;
    }
  }, [t]), tt(function() {
    // Cancel appear
    (H === Co && !s || // Cancel enter
    H === So && !a || // Cancel leave
    H === xo && !c) && O(gr);
  }, [s, a, c]), tt(function() {
    return function() {
      q.current = !1, clearTimeout(U.current);
    };
  }, []);
  var ye = d.useRef(!1);
  tt(function() {
    F && (ye.current = !0), F !== void 0 && H === gr && ((ye.current || F) && ($ == null || $(F)), ye.current = !0);
  }, [F, H]);
  var Te = D;
  return se[zt] && re === Jr && (Te = M({
    transition: "none"
  }, Te)), [H, re, Te, F != null ? F : t];
}
function Lm(e) {
  var t = e;
  Ce(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ d.forwardRef(function(o, a) {
    var i = o.visible, s = i === void 0 ? !0 : i, l = o.removeOnLeave, c = l === void 0 ? !0 : l, u = o.forceRender, f = o.children, v = o.motionName, p = o.leavedClassName, h = o.eventProps, m = d.useContext(Vu), g = m.motion, b = r(o, g), y = Oe(), x = Oe();
    function w() {
      try {
        return y.current instanceof HTMLElement ? y.current : Po(x.current);
      } catch (R) {
        return null;
      }
    }
    var C = Fm(b, s, w, o), E = Y(C, 4), S = E[0], $ = E[1], _ = E[2], T = E[3], F = d.useRef(T);
    T && (F.current = !0);
    var z = d.useCallback(function(R) {
      y.current = R, us(a, R);
    }, [a]), I, L = M(M({}, h), {}, {
      visible: s
    });
    if (!f)
      I = null;
    else if (S === gr)
      T ? I = f(M({}, L), z) : !c && F.current && p ? I = f(M(M({}, L), {}, {
        className: p
      }), z) : u || !c && !p ? I = f(M(M({}, L), {}, {
        style: {
          display: "none"
        }
      }), z) : I = null;
    else {
      var A;
      $ === zt ? A = "prepare" : Xu($) ? A = "active" : $ === Jr && (A = "start");
      var O = Tl(v, "".concat(S, "-").concat(A));
      I = f(M(M({}, L), {}, {
        className: ne(Tl(v, S), j(j({}, O, O && A), v, typeof v == "string")),
        style: _
      }), z);
    }
    if (/* @__PURE__ */ d.isValidElement(I) && Un(I)) {
      var P = Yo(I);
      P || (I = /* @__PURE__ */ d.cloneElement(I, {
        ref: z
      }));
    }
    return /* @__PURE__ */ d.createElement($m, {
      ref: x
    }, I);
  });
  return n.displayName = "CSSMotion", n;
}
const Xn = Lm(qu);
var Mi = "add", Fi = "keep", Li = "remove", Ba = "removed";
function Dm(e) {
  var t;
  return e && Ce(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, M(M({}, t), {}, {
    key: String(t.key)
  });
}
function Di() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Dm);
}
function Vm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = Di(e), i = Di(t);
  a.forEach(function(c) {
    for (var u = !1, f = n; f < o; f += 1) {
      var v = i[f];
      if (v.key === c.key) {
        n < f && (r = r.concat(i.slice(n, f).map(function(p) {
          return M(M({}, p), {}, {
            status: Mi
          });
        })), n = f), r.push(M(M({}, v), {}, {
          status: Fi
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(M(M({}, c), {}, {
      status: Li
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(c) {
    return M(M({}, c), {}, {
      status: Mi
    });
  })));
  var s = {};
  r.forEach(function(c) {
    var u = c.key;
    s[u] = (s[u] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return l.forEach(function(c) {
    r = r.filter(function(u) {
      var f = u.key, v = u.status;
      return f !== c || v !== Li;
    }), r.forEach(function(u) {
      u.key === c && (u.status = Fi);
    });
  }), r;
}
var zm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Bm = ["status"], Hm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function km(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn, r = /* @__PURE__ */ function(n) {
    yr(a, n);
    var o = Cr(a);
    function a() {
      var i;
      st(this, a);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return i = o.call.apply(o, [this].concat(l)), j($e(i), "state", {
        keyEntities: []
      }), j($e(i), "removeKey", function(u) {
        i.setState(function(f) {
          var v = f.keyEntities.map(function(p) {
            return p.key !== u ? p : M(M({}, p), {}, {
              status: Ba
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var f = i.state.keyEntities, v = f.filter(function(p) {
            var h = p.status;
            return h !== Ba;
          }).length;
          v === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return lt(a, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, u = c.component, f = c.children, v = c.onVisibleChanged;
        c.onAllRemoved;
        var p = ut(c, zm), h = u || d.Fragment, m = {};
        return Hm.forEach(function(g) {
          m[g] = p[g], delete p[g];
        }), delete p.keys, /* @__PURE__ */ d.createElement(h, p, l.map(function(g, b) {
          var y = g.status, x = ut(g, Bm), w = y === Mi || y === Fi;
          return /* @__PURE__ */ d.createElement(t, De({}, m, {
            key: x.key,
            visible: w,
            eventProps: x,
            onVisibleChanged: function(E) {
              v == null || v(E, {
                key: x.key
              }), E || s.removeKey(x.key);
            }
          }), function(C, E) {
            return f(M(M({}, C), {}, {
              index: b
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, u = l.keyEntities, f = Di(c), v = Vm(u, f);
        return {
          keyEntities: v.filter(function(p) {
            var h = u.find(function(m) {
              var g = m.key;
              return p.key === g;
            });
            return !(h && h.status === Ba && p.status === Li);
          })
        };
      }
    }]), a;
  }(d.Component);
  return j(r, "defaultProps", {
    component: "div"
  }), r;
}
km(qu);
function Wm(e) {
  const {
    children: t
  } = e, [, r] = cr(), {
    motion: n
  } = r, o = d.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ d.createElement(wm, {
    motion: n
  }, t) : t;
}
const Ku = /* @__PURE__ */ d.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return gt("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Ku.displayName = "PropWarning");
const qm = process.env.NODE_ENV !== "production" ? Ku : () => null;
var Um = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let Vi = !1;
process.env.NODE_ENV;
const Gm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Yu;
function Xm() {
  return Yu || Ho;
}
function Km(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Ym = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: o
  } = e;
  t !== void 0 && (Yu = t), n && Km(n) && (process.env.NODE_ENV !== "production" && Ar(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Ug(Xm(), n));
}, Zm = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    form: i,
    locale: s,
    componentSize: l,
    direction: c,
    space: u,
    splitter: f,
    virtual: v,
    dropdownMatchSelectWidth: p,
    popupMatchSelectWidth: h,
    popupOverflow: m,
    legacyLocale: g,
    parentContext: b,
    iconPrefixCls: y,
    theme: x,
    componentDisabled: w,
    segmented: C,
    statistic: E,
    spin: S,
    calendar: $,
    carousel: _,
    cascader: T,
    collapse: F,
    typography: z,
    checkbox: I,
    descriptions: L,
    divider: A,
    drawer: O,
    skeleton: P,
    steps: R,
    image: D,
    layout: V,
    list: H,
    mentions: q,
    modal: U,
    progress: B,
    result: Q,
    slider: ie,
    breadcrumb: ve,
    menu: oe,
    pagination: ae,
    input: me,
    textArea: pe,
    empty: se,
    badge: ge,
    radio: X,
    rate: ue,
    switch: re,
    transfer: de,
    avatar: he,
    message: ye,
    tag: Te,
    table: xe,
    card: Re,
    tabs: J,
    timeline: be,
    timePicker: Ee,
    upload: Ne,
    notification: Ve,
    tree: Ie,
    colorPicker: ke,
    datePicker: N,
    rangePicker: W,
    flex: Z,
    wave: ee,
    dropdown: te,
    warning: ce,
    tour: G,
    tooltip: K,
    popover: _e,
    popconfirm: Qe,
    floatButtonGroup: ct,
    variant: Ot,
    inputNumber: er,
    treeSelect: Rt
  } = e, dt = d.useCallback((ze, Xe) => {
    const {
      prefixCls: bt
    } = e;
    if (Xe)
      return Xe;
    const ft = bt || b.getPrefixCls("");
    return ze ? `${ft}-${ze}` : ft;
  }, [b.getPrefixCls, e.prefixCls]), Wt = y || b.iconPrefixCls || Cs, Je = r || b.csp;
  bm(Wt, Je);
  const Ct = xm(x, b.theme, {
    prefixCls: dt("")
  });
  process.env.NODE_ENV !== "production" && (Vi = Vi || !!Ct);
  const Ae = {
    csp: Je,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    locale: s || g,
    direction: c,
    space: u,
    splitter: f,
    virtual: v,
    popupMatchSelectWidth: h != null ? h : p,
    popupOverflow: m,
    getPrefixCls: dt,
    iconPrefixCls: Wt,
    theme: Ct,
    segmented: C,
    statistic: E,
    spin: S,
    calendar: $,
    carousel: _,
    cascader: T,
    collapse: F,
    typography: z,
    checkbox: I,
    descriptions: L,
    divider: A,
    drawer: O,
    skeleton: P,
    steps: R,
    image: D,
    input: me,
    textArea: pe,
    layout: V,
    list: H,
    mentions: q,
    modal: U,
    progress: B,
    result: Q,
    slider: ie,
    breadcrumb: ve,
    menu: oe,
    pagination: ae,
    empty: se,
    badge: ge,
    radio: X,
    rate: ue,
    switch: re,
    transfer: de,
    avatar: he,
    message: ye,
    tag: Te,
    table: xe,
    card: Re,
    tabs: J,
    timeline: be,
    timePicker: Ee,
    upload: Ne,
    notification: Ve,
    tree: Ie,
    colorPicker: ke,
    datePicker: N,
    rangePicker: W,
    flex: Z,
    wave: ee,
    dropdown: te,
    warning: ce,
    tour: G,
    tooltip: K,
    popover: _e,
    popconfirm: Qe,
    floatButtonGroup: ct,
    variant: Ot,
    inputNumber: er,
    treeSelect: Rt
  };
  process.env.NODE_ENV !== "production" && gt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const je = Object.assign({}, b);
  Object.keys(Ae).forEach((ze) => {
    Ae[ze] !== void 0 && (je[ze] = Ae[ze]);
  }), Gm.forEach((ze) => {
    const Xe = e[ze];
    Xe && (je[ze] = Xe);
  }), typeof n != "undefined" && (je.button = Object.assign({
    autoInsertSpace: n
  }, je.button));
  const at = cs(() => je, je, (ze, Xe) => {
    const bt = Object.keys(ze), ft = Object.keys(Xe);
    return bt.length !== ft.length || bt.some((Ft) => ze[Ft] !== Xe[Ft]);
  }), {
    layer: qt
  } = d.useContext(Gn), Sr = d.useMemo(() => ({
    prefixCls: Wt,
    csp: Je,
    layer: qt ? "antd" : void 0
  }), [Wt, Je, qt]);
  let Me = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(qm, {
    dropdownMatchSelectWidth: p
  }), t);
  const xr = d.useMemo(() => {
    var ze, Xe, bt, ft;
    return Qr(((ze = dn.Form) === null || ze === void 0 ? void 0 : ze.defaultValidateMessages) || {}, ((bt = (Xe = at.locale) === null || Xe === void 0 ? void 0 : Xe.Form) === null || bt === void 0 ? void 0 : bt.defaultValidateMessages) || {}, ((ft = at.form) === null || ft === void 0 ? void 0 : ft.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [at, i == null ? void 0 : i.validateMessages]);
  Object.keys(xr).length > 0 && (Me = /* @__PURE__ */ d.createElement(xg.Provider, {
    value: xr
  }, Me)), s && (Me = /* @__PURE__ */ d.createElement(xu, {
    locale: s,
    _ANT_MARK__: Su
  }, Me)), Me = /* @__PURE__ */ d.createElement(bs.Provider, {
    value: Sr
  }, Me), l && (Me = /* @__PURE__ */ d.createElement(Xg, {
    size: l
  }, Me)), Me = /* @__PURE__ */ d.createElement(Wm, null, Me);
  const Er = d.useMemo(() => {
    const ze = Ct || {}, {
      algorithm: Xe,
      token: bt,
      components: ft,
      cssVar: Ft
    } = ze, wr = Um(ze, ["algorithm", "token", "components", "cssVar"]), Ut = Xe && (!Array.isArray(Xe) || Xe.length > 0) ? pi(Xe) : Ou, Lt = {};
    Object.entries(ft || {}).forEach((ur) => {
      let [tr, Dr] = ur;
      const He = Object.assign({}, Dr);
      "algorithm" in He && (He.algorithm === !0 ? He.theme = Ut : (Array.isArray(He.algorithm) || typeof He.algorithm == "function") && (He.theme = pi(He.algorithm)), delete He.algorithm), Lt[tr] = He;
    });
    const _t = Object.assign(Object.assign({}, Vn), bt);
    return Object.assign(Object.assign({}, wr), {
      theme: Ut,
      token: _t,
      components: Lt,
      override: Object.assign({
        override: _t
      }, Lt),
      cssVar: Ft
    });
  }, [Ct]);
  return x && (Me = /* @__PURE__ */ d.createElement(Ru.Provider, {
    value: Er
  }, Me)), at.warning && (Me = /* @__PURE__ */ d.createElement(yu.Provider, {
    value: at.warning
  }, Me)), w !== void 0 && (Me = /* @__PURE__ */ d.createElement(Gg, {
    disabled: w
  }, Me)), /* @__PURE__ */ d.createElement(rt.Provider, {
    value: at
  }, Me);
}, bn = (e) => {
  const t = d.useContext(rt), r = d.useContext(ys);
  return /* @__PURE__ */ d.createElement(Zm, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
bn.ConfigContext = rt;
bn.SizeContext = fn;
bn.config = Ym;
bn.useConfig = Kg;
Object.defineProperty(bn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ar(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), fn)
});
process.env.NODE_ENV !== "production" && (bn.displayName = "ConfigProvider");
function Zu(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Qm(e) {
  return Zu(e) instanceof ShadowRoot;
}
function ko(e) {
  return Qm(e) ? Zu(e) : null;
}
function Jm(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function ep(e, t) {
  Ue(e, "[@ant-design/icons] ".concat(t));
}
function Nl(e) {
  return Ce(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Ce(e.icon) === "object" || typeof e.icon == "function");
}
function jl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[Jm(r)] = n;
    }
    return t;
  }, {});
}
function zi(e, t, r) {
  return r ? /* @__PURE__ */ k.createElement(e.tag, M(M({
    key: t
  }, jl(e.attrs)), r), (e.children || []).map(function(n, o) {
    return zi(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ k.createElement(e.tag, M({
    key: t
  }, jl(e.attrs)), (e.children || []).map(function(n, o) {
    return zi(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Qu(e) {
  return zn(e)[0];
}
function Ju(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var tp = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, rp = function(t) {
  var r = yt(bs), n = r.csp, o = r.prefixCls, a = r.layer, i = tp;
  o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, ` {
`).concat(i, `
}`)), tt(function() {
    var s = t.current, l = ko(s);
    ir(i, "@ant-design-icons", {
      prepend: !a,
      csp: n,
      attachTo: l
    });
  }, []);
}, np = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Nn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function op(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Nn.primaryColor = t, Nn.secondaryColor = r || Qu(t), Nn.calculated = !!r;
}
function ap() {
  return M({}, Nn);
}
var yn = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, a = t.style, i = t.primaryColor, s = t.secondaryColor, l = ut(t, np), c = d.useRef(), u = Nn;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: s || Qu(i)
  }), rp(c), ep(Nl(r), "icon should be icon definiton, but got ".concat(r)), !Nl(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = M(M({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), zi(f.icon, "svg-".concat(f.name), M(M({
    className: n,
    onClick: o,
    style: a,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: c
  }));
};
yn.displayName = "IconReact";
yn.getTwoToneColors = ap;
yn.setTwoToneColors = op;
function ed(e) {
  var t = Ju(e), r = Y(t, 2), n = r[0], o = r[1];
  return yn.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function ip() {
  var e = yn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var sp = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
ed(Bo.primary);
var $t = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, s = e.onClick, l = e.twoToneColor, c = ut(e, sp), u = d.useContext(bs), f = u.prefixCls, v = f === void 0 ? "anticon" : f, p = u.rootClassName, h = ne(p, v, j(j({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!o || n.name === "loading"), r), m = i;
  m === void 0 && s && (m = -1);
  var g = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, b = Ju(l), y = Y(b, 2), x = y[0], w = y[1];
  return /* @__PURE__ */ d.createElement("span", De({
    role: "img",
    "aria-label": n.name
  }, c, {
    ref: t,
    tabIndex: m,
    onClick: s,
    className: h
  }), /* @__PURE__ */ d.createElement(yn, {
    icon: n,
    primaryColor: x,
    secondaryColor: w,
    style: g
  }));
});
$t.displayName = "AntdIcon";
$t.getTwoToneColor = ip;
$t.setTwoToneColor = ed;
var lp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, cp = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: lp
  }));
}, td = /* @__PURE__ */ d.forwardRef(cp);
process.env.NODE_ENV !== "production" && (td.displayName = "CloseCircleFilled");
function rd(e) {
  return e && /* @__PURE__ */ k.isValidElement(e) && e.type === k.Fragment;
}
const up = (e, t, r) => /* @__PURE__ */ k.isValidElement(e) ? /* @__PURE__ */ k.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function ra(e, t) {
  return up(e, e, t);
}
const na = (e) => {
  const [, , , , t] = cr();
  return t ? `${e}-css-var` : "";
};
var Il = {
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * ESC
   */
  ESC: 27
}, dp = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, fp = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: dp
  }));
}, xs = /* @__PURE__ */ d.forwardRef(fp);
process.env.NODE_ENV !== "production" && (xs.displayName = "LoadingOutlined");
const Es = /* @__PURE__ */ k.createContext(void 0);
process.env.NODE_ENV !== "production" && (Es.displayName = "zIndexContext");
const or = 100, vp = 10, gp = or * vp, mp = gp + or, nd = {
  Modal: or,
  Drawer: or,
  Popover: or,
  Popconfirm: or,
  Tooltip: or,
  Tour: or,
  FloatButton: or
}, pp = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function hp(e) {
  return e in nd;
}
const bp = (e, t) => {
  const [, r] = cr(), n = k.useContext(Es), o = hp(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = n != null ? n : 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : r.zIndexPopupBase) + // Container offset
    nd[e] : i += pp[e], a = [n === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = gt(e), s = r.zIndexPopupBase + mp, l = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || l <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
};
function pt() {
  pt = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(O, P, R) {
    O[P] = R.value;
  }, a = typeof Symbol == "function" ? Symbol : {}, i = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
  function c(O, P, R) {
    return Object.defineProperty(O, P, {
      value: R,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), O[P];
  }
  try {
    c({}, "");
  } catch (O) {
    c = function(R, D, V) {
      return R[D] = V;
    };
  }
  function u(O, P, R, D) {
    var V = P && P.prototype instanceof b ? P : b, H = Object.create(V.prototype), q = new L(D || []);
    return o(H, "_invoke", {
      value: T(O, R, q)
    }), H;
  }
  function f(O, P, R) {
    try {
      return {
        type: "normal",
        arg: O.call(P, R)
      };
    } catch (D) {
      return {
        type: "throw",
        arg: D
      };
    }
  }
  t.wrap = u;
  var v = "suspendedStart", p = "suspendedYield", h = "executing", m = "completed", g = {};
  function b() {
  }
  function y() {
  }
  function x() {
  }
  var w = {};
  c(w, i, function() {
    return this;
  });
  var C = Object.getPrototypeOf, E = C && C(C(A([])));
  E && E !== r && n.call(E, i) && (w = E);
  var S = x.prototype = b.prototype = Object.create(w);
  function $(O) {
    ["next", "throw", "return"].forEach(function(P) {
      c(O, P, function(R) {
        return this._invoke(P, R);
      });
    });
  }
  function _(O, P) {
    function R(V, H, q, U) {
      var B = f(O[V], O, H);
      if (B.type !== "throw") {
        var Q = B.arg, ie = Q.value;
        return ie && Ce(ie) == "object" && n.call(ie, "__await") ? P.resolve(ie.__await).then(function(ve) {
          R("next", ve, q, U);
        }, function(ve) {
          R("throw", ve, q, U);
        }) : P.resolve(ie).then(function(ve) {
          Q.value = ve, q(Q);
        }, function(ve) {
          return R("throw", ve, q, U);
        });
      }
      U(B.arg);
    }
    var D;
    o(this, "_invoke", {
      value: function(H, q) {
        function U() {
          return new P(function(B, Q) {
            R(H, q, B, Q);
          });
        }
        return D = D ? D.then(U, U) : U();
      }
    });
  }
  function T(O, P, R) {
    var D = v;
    return function(V, H) {
      if (D === h) throw Error("Generator is already running");
      if (D === m) {
        if (V === "throw") throw H;
        return {
          value: e,
          done: !0
        };
      }
      for (R.method = V, R.arg = H; ; ) {
        var q = R.delegate;
        if (q) {
          var U = F(q, R);
          if (U) {
            if (U === g) continue;
            return U;
          }
        }
        if (R.method === "next") R.sent = R._sent = R.arg;
        else if (R.method === "throw") {
          if (D === v) throw D = m, R.arg;
          R.dispatchException(R.arg);
        } else R.method === "return" && R.abrupt("return", R.arg);
        D = h;
        var B = f(O, P, R);
        if (B.type === "normal") {
          if (D = R.done ? m : p, B.arg === g) continue;
          return {
            value: B.arg,
            done: R.done
          };
        }
        B.type === "throw" && (D = m, R.method = "throw", R.arg = B.arg);
      }
    };
  }
  function F(O, P) {
    var R = P.method, D = O.iterator[R];
    if (D === e) return P.delegate = null, R === "throw" && O.iterator.return && (P.method = "return", P.arg = e, F(O, P), P.method === "throw") || R !== "return" && (P.method = "throw", P.arg = new TypeError("The iterator does not provide a '" + R + "' method")), g;
    var V = f(D, O.iterator, P.arg);
    if (V.type === "throw") return P.method = "throw", P.arg = V.arg, P.delegate = null, g;
    var H = V.arg;
    return H ? H.done ? (P[O.resultName] = H.value, P.next = O.nextLoc, P.method !== "return" && (P.method = "next", P.arg = e), P.delegate = null, g) : H : (P.method = "throw", P.arg = new TypeError("iterator result is not an object"), P.delegate = null, g);
  }
  function z(O) {
    var P = {
      tryLoc: O[0]
    };
    1 in O && (P.catchLoc = O[1]), 2 in O && (P.finallyLoc = O[2], P.afterLoc = O[3]), this.tryEntries.push(P);
  }
  function I(O) {
    var P = O.completion || {};
    P.type = "normal", delete P.arg, O.completion = P;
  }
  function L(O) {
    this.tryEntries = [{
      tryLoc: "root"
    }], O.forEach(z, this), this.reset(!0);
  }
  function A(O) {
    if (O || O === "") {
      var P = O[i];
      if (P) return P.call(O);
      if (typeof O.next == "function") return O;
      if (!isNaN(O.length)) {
        var R = -1, D = function V() {
          for (; ++R < O.length; ) if (n.call(O, R)) return V.value = O[R], V.done = !1, V;
          return V.value = e, V.done = !0, V;
        };
        return D.next = D;
      }
    }
    throw new TypeError(Ce(O) + " is not iterable");
  }
  return y.prototype = x, o(S, "constructor", {
    value: x,
    configurable: !0
  }), o(x, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = c(x, l, "GeneratorFunction"), t.isGeneratorFunction = function(O) {
    var P = typeof O == "function" && O.constructor;
    return !!P && (P === y || (P.displayName || P.name) === "GeneratorFunction");
  }, t.mark = function(O) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(O, x) : (O.__proto__ = x, c(O, l, "GeneratorFunction")), O.prototype = Object.create(S), O;
  }, t.awrap = function(O) {
    return {
      __await: O
    };
  }, $(_.prototype), c(_.prototype, s, function() {
    return this;
  }), t.AsyncIterator = _, t.async = function(O, P, R, D, V) {
    V === void 0 && (V = Promise);
    var H = new _(u(O, P, R, D), V);
    return t.isGeneratorFunction(P) ? H : H.next().then(function(q) {
      return q.done ? q.value : H.next();
    });
  }, $(S), c(S, l, "Generator"), c(S, i, function() {
    return this;
  }), c(S, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(O) {
    var P = Object(O), R = [];
    for (var D in P) R.push(D);
    return R.reverse(), function V() {
      for (; R.length; ) {
        var H = R.pop();
        if (H in P) return V.value = H, V.done = !1, V;
      }
      return V.done = !0, V;
    };
  }, t.values = A, L.prototype = {
    constructor: L,
    reset: function(P) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !P) for (var R in this) R.charAt(0) === "t" && n.call(this, R) && !isNaN(+R.slice(1)) && (this[R] = e);
    },
    stop: function() {
      this.done = !0;
      var P = this.tryEntries[0].completion;
      if (P.type === "throw") throw P.arg;
      return this.rval;
    },
    dispatchException: function(P) {
      if (this.done) throw P;
      var R = this;
      function D(Q, ie) {
        return q.type = "throw", q.arg = P, R.next = Q, ie && (R.method = "next", R.arg = e), !!ie;
      }
      for (var V = this.tryEntries.length - 1; V >= 0; --V) {
        var H = this.tryEntries[V], q = H.completion;
        if (H.tryLoc === "root") return D("end");
        if (H.tryLoc <= this.prev) {
          var U = n.call(H, "catchLoc"), B = n.call(H, "finallyLoc");
          if (U && B) {
            if (this.prev < H.catchLoc) return D(H.catchLoc, !0);
            if (this.prev < H.finallyLoc) return D(H.finallyLoc);
          } else if (U) {
            if (this.prev < H.catchLoc) return D(H.catchLoc, !0);
          } else {
            if (!B) throw Error("try statement without catch or finally");
            if (this.prev < H.finallyLoc) return D(H.finallyLoc);
          }
        }
      }
    },
    abrupt: function(P, R) {
      for (var D = this.tryEntries.length - 1; D >= 0; --D) {
        var V = this.tryEntries[D];
        if (V.tryLoc <= this.prev && n.call(V, "finallyLoc") && this.prev < V.finallyLoc) {
          var H = V;
          break;
        }
      }
      H && (P === "break" || P === "continue") && H.tryLoc <= R && R <= H.finallyLoc && (H = null);
      var q = H ? H.completion : {};
      return q.type = P, q.arg = R, H ? (this.method = "next", this.next = H.finallyLoc, g) : this.complete(q);
    },
    complete: function(P, R) {
      if (P.type === "throw") throw P.arg;
      return P.type === "break" || P.type === "continue" ? this.next = P.arg : P.type === "return" ? (this.rval = this.arg = P.arg, this.method = "return", this.next = "end") : P.type === "normal" && R && (this.next = R), g;
    },
    finish: function(P) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var D = this.tryEntries[R];
        if (D.finallyLoc === P) return this.complete(D.completion, D.afterLoc), I(D), g;
      }
    },
    catch: function(P) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var D = this.tryEntries[R];
        if (D.tryLoc === P) {
          var V = D.completion;
          if (V.type === "throw") {
            var H = V.arg;
            I(D);
          }
          return H;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(P, R, D) {
      return this.delegate = {
        iterator: A(P),
        resultName: R,
        nextLoc: D
      }, this.method === "next" && (this.arg = e), g;
    }
  }, t;
}
function Al(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i), l = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(l) : Promise.resolve(l).then(n, o);
}
function Mr(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var a = e.apply(t, r);
      function i(l) {
        Al(a, n, o, i, s, "next", l);
      }
      function s(l) {
        Al(a, n, o, i, s, "throw", l);
      }
      i(void 0);
    });
  };
}
var Kn = M({}, Tc), yp = Kn.version, Ha = Kn.render, Cp = Kn.unmountComponentAtNode, oa;
try {
  var Sp = Number((yp || "").split(".")[0]);
  Sp >= 18 && (oa = Kn.createRoot);
} catch (e) {
}
function Ml(e) {
  var t = Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Ce(t) === "object" && (t.usingClientEntryPoint = e);
}
var Wo = "__rc_react_root__";
function xp(e, t) {
  Ml(!0);
  var r = t[Wo] || oa(t);
  Ml(!1), r.render(e), t[Wo] = r;
}
function Ep(e, t) {
  Ha == null || Ha(e, t);
}
function wp(e, t) {
  if (oa) {
    xp(e, t);
    return;
  }
  Ep(e, t);
}
function $p(e) {
  return Bi.apply(this, arguments);
}
function Bi() {
  return Bi = Mr(/* @__PURE__ */ pt().mark(function e(t) {
    return pt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Wo]) === null || o === void 0 || o.unmount(), delete t[Wo];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Bi.apply(this, arguments);
}
function Op(e) {
  Cp(e);
}
function Rp(e) {
  return Hi.apply(this, arguments);
}
function Hi() {
  return Hi = Mr(/* @__PURE__ */ pt().mark(function e(t) {
    return pt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (oa === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", $p(t));
        case 2:
          Op(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), Hi.apply(this, arguments);
}
const _p = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const r = parseInt(d.version.split(".")[0], 10), n = Object.keys(Tc);
    process.env.NODE_ENV !== "production" && Ar(r < 19 || n.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return wp(e, t), () => Rp(t);
};
let Pp = _p;
function Tp() {
  return Pp;
}
const Np = (e, t, r) => r !== void 0 ? r : `${e}-${t}`;
function Fr(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
const od = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), a = o.width, i = o.height;
      if (a || i)
        return !0;
    }
  }
  return !1;
}, jp = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Ip = mm("Wave", (e) => [jp(e)]), ws = `${Ho}-wave-target`;
function ka(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Ap(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return ka(t) ? t : ka(r) ? r : ka(n) ? n : null;
}
function Wa(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Mp = (e) => {
  const {
    className: t,
    target: r,
    component: n,
    registerUnmount: o
  } = e, a = d.useRef(null), i = d.useRef(null);
  d.useEffect(() => {
    i.current = o();
  }, []);
  const [s, l] = d.useState(null), [c, u] = d.useState([]), [f, v] = d.useState(0), [p, h] = d.useState(0), [m, g] = d.useState(0), [b, y] = d.useState(0), [x, w] = d.useState(!1), C = {
    left: f,
    top: p,
    width: m,
    height: b,
    borderRadius: c.map(($) => `${$}px`).join(" ")
  };
  s && (C["--wave-color"] = s);
  function E() {
    const $ = getComputedStyle(r);
    l(Ap(r));
    const _ = $.position === "static", {
      borderLeftWidth: T,
      borderTopWidth: F
    } = $;
    v(_ ? r.offsetLeft : Wa(-parseFloat(T))), h(_ ? r.offsetTop : Wa(-parseFloat(F))), g(r.offsetWidth), y(r.offsetHeight);
    const {
      borderTopLeftRadius: z,
      borderTopRightRadius: I,
      borderBottomLeftRadius: L,
      borderBottomRightRadius: A
    } = $;
    u([z, I, A, L].map((O) => Wa(parseFloat(O))));
  }
  if (d.useEffect(() => {
    if (r) {
      const $ = It(() => {
        E(), w(!0);
      });
      let _;
      return typeof ResizeObserver != "undefined" && (_ = new ResizeObserver(E), _.observe(r)), () => {
        It.cancel($), _ == null || _.disconnect();
      };
    }
  }, []), !x)
    return null;
  const S = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(ws));
  return /* @__PURE__ */ d.createElement(Xn, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: ($, _) => {
      var T, F;
      if (_.deadline || _.propertyName === "opacity") {
        const z = (T = a.current) === null || T === void 0 ? void 0 : T.parentElement;
        (F = i.current) === null || F === void 0 || F.call(i).then(() => {
          z == null || z.remove();
        });
      }
      return !1;
    }
  }, ($, _) => {
    let {
      className: T
    } = $;
    return /* @__PURE__ */ d.createElement("div", {
      ref: br(a, _),
      className: ne(t, T, {
        "wave-quick": S
      }),
      style: C
    });
  });
}, Fp = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const a = Tp();
  let i = null;
  function s() {
    return i;
  }
  i = a(/* @__PURE__ */ d.createElement(Mp, Object.assign({}, t, {
    target: e,
    registerUnmount: s
  })), o);
}, Lp = (e, t, r) => {
  const {
    wave: n
  } = d.useContext(rt), [, o, a] = cr(), i = vt((c) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const f = u.querySelector(`.${ws}`) || u, {
      showEffect: v
    } = n || {};
    (v || Fp)(f, {
      className: t,
      token: o,
      component: r,
      event: c,
      hashId: a
    });
  }), s = d.useRef(null);
  return (c) => {
    It.cancel(s.current), s.current = It(() => {
      i(c);
    });
  };
}, $s = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = yt(rt), a = Oe(null), i = o("wave"), [, s] = Ip(i), l = Lp(a, ne(i, s), n);
  if (k.useEffect(() => {
    const u = a.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const f = (v) => {
      !od(v.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || l(v);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ k.isValidElement(t))
    return t != null ? t : null;
  const c = Un(t) ? br(Yo(t), a) : a;
  return ra(t, {
    ref: c
  });
};
process.env.NODE_ENV !== "production" && ($s.displayName = "Wave");
const Os = (e) => {
  const t = k.useContext(fn);
  return k.useMemo(() => e ? typeof e == "string" ? e != null ? e : t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, ad = /* @__PURE__ */ d.createContext(null), Rs = (e, t) => {
  const r = d.useContext(ad), n = d.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = r, s = o === "vertical" ? "-vertical-" : "-";
    return ne(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: a,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
}, Dp = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ d.createElement(ad.Provider, {
    value: null
  }, t);
};
var Vp = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const id = /* @__PURE__ */ d.createContext(void 0), zp = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = d.useContext(rt), {
    prefixCls: n,
    size: o,
    className: a
  } = e, i = Vp(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = cr(), c = d.useMemo(() => {
    switch (o) {
      case "large":
        return "lg";
      case "small":
        return "sm";
      default:
        return "";
    }
  }, [o]);
  if (process.env.NODE_ENV !== "production") {
    const f = gt("Button.Group");
    f.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = ne(s, {
    [`${s}-${c}`]: c,
    [`${s}-rtl`]: r === "rtl"
  }, a, l);
  return /* @__PURE__ */ d.createElement(id.Provider, {
    value: o
  }, /* @__PURE__ */ d.createElement("div", Object.assign({}, i, {
    className: u
  })));
}, Fl = /^[\u4E00-\u9FA5]{2}$/, ki = Fl.test.bind(Fl);
function Ll(e) {
  return typeof e == "string";
}
function wo(e) {
  return e === "text" || e === "link";
}
function Bp(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Ll(e.type) && ki(e.props.children) ? ra(e, {
    children: e.props.children.split("").join(r)
  }) : Ll(e) ? ki(e) ? /* @__PURE__ */ k.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ k.createElement("span", null, e) : rd(e) ? /* @__PURE__ */ k.createElement("span", null, e) : e;
}
function Hp(e, t) {
  let r = !1;
  const n = [];
  return k.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (r && i) {
      const s = n.length - 1, l = n[s];
      n[s] = `${l}${o}`;
    } else
      n.push(o);
    r = i;
  }), k.Children.map(n, (o) => Bp(o, t));
}
["default", "primary", "danger"].concat(fe(Ir));
const Wi = /* @__PURE__ */ lr((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: a
  } = e, i = ne(`${a}-icon`, r);
  return /* @__PURE__ */ k.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, o);
}), Dl = /* @__PURE__ */ lr((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: a
  } = e, i = ne(`${r}-loading-icon`, n);
  return /* @__PURE__ */ k.createElement(Wi, {
    prefixCls: r,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ k.createElement(xs, {
    className: a
  }));
}), qa = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Ua = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), kp = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: a,
    mount: i
  } = e, s = !!r;
  return n ? /* @__PURE__ */ k.createElement(Dl, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ k.createElement(Xn, {
    visible: s,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !i,
    motionEnter: !i,
    motionLeave: !i,
    removeOnLeave: !0,
    onAppearStart: qa,
    onAppearActive: Ua,
    onEnterStart: qa,
    onEnterActive: Ua,
    onLeaveStart: Ua,
    onLeaveActive: qa
  }, (l, c) => {
    let {
      className: u,
      style: f
    } = l;
    const v = Object.assign(Object.assign({}, a), f);
    return /* @__PURE__ */ k.createElement(Dl, {
      prefixCls: t,
      className: ne(o, u),
      style: v,
      ref: c
    });
  });
}, Vl = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), Wp = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: o,
    colorErrorHover: a
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      Vl(`${t}-primary`, o),
      Vl(`${t}-danger`, a)
    ]
  };
};
var qp = ["b"], Up = ["v"], Ga = function(t) {
  return Math.round(Number(t || 0));
}, Gp = function(t) {
  if (t instanceof Ge)
    return t;
  if (t && Ce(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, o = ut(r, qp);
    return M(M({}, o), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, sr = /* @__PURE__ */ function(e) {
  yr(r, e);
  var t = Cr(r);
  function r(n) {
    return st(this, r), t.call(this, Gp(n));
  }
  return lt(r, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = Ga(o.s * 100), i = Ga(o.b * 100), s = Ga(o.h), l = o.a, c = "hsb(".concat(s, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(a, "%, ").concat(i, "%, ").concat(l.toFixed(l === 0 ? 0 : 2), ")");
      return l === 1 ? c : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = ut(o, Up);
      return M(M({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), r;
}(Ge), Xp = "rc-color-picker", nn = function(t) {
  return t instanceof sr ? t : new sr(t);
}, Kp = nn("#1677ff"), sd = function(t) {
  var r = t.offset, n = t.targetRef, o = t.containerRef, a = t.color, i = t.type, s = o.current.getBoundingClientRect(), l = s.width, c = s.height, u = n.current.getBoundingClientRect(), f = u.width, v = u.height, p = f / 2, h = v / 2, m = (r.x + p) / l, g = 1 - (r.y + h) / c, b = a.toHsb(), y = m, x = (r.x + p) / l * 360;
  if (i)
    switch (i) {
      case "hue":
        return nn(M(M({}, b), {}, {
          h: x <= 0 ? 0 : x
        }));
      case "alpha":
        return nn(M(M({}, b), {}, {
          a: y <= 0 ? 0 : y
        }));
    }
  return nn({
    h: b.h,
    s: m <= 0 ? 0 : m,
    b: g >= 1 ? 1 : g,
    a: b.a
  });
}, ld = function(t, r) {
  var n = t.toHsb();
  switch (r) {
    case "hue":
      return {
        x: n.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: n.s * 100,
        y: (1 - n.b) * 100
      };
  }
}, Yp = function(t) {
  var r = t.color, n = t.prefixCls, o = t.className, a = t.style, i = t.onClick, s = "".concat(n, "-color-block");
  return /* @__PURE__ */ k.createElement("div", {
    className: ne(s, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ k.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: r
    }
  }));
};
function Zp(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function cd(e) {
  var t = e.targetRef, r = e.containerRef, n = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, s = e.color, l = e.disabledDrag, c = Qt({
    x: 0,
    y: 0
  }), u = Y(c, 2), f = u[0], v = u[1], p = Oe(null), h = Oe(null);
  tt(function() {
    v(i());
  }, [s]), tt(function() {
    return function() {
      document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", h.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", h.current), p.current = null, h.current = null;
    };
  }, []);
  var m = function(w) {
    var C = Zp(w), E = C.pageX, S = C.pageY, $ = r.current.getBoundingClientRect(), _ = $.x, T = $.y, F = $.width, z = $.height, I = t.current.getBoundingClientRect(), L = I.width, A = I.height, O = L / 2, P = A / 2, R = Math.max(0, Math.min(E - _, F)) - O, D = Math.max(0, Math.min(S - T, z)) - P, V = {
      x: R,
      y: n === "x" ? f.y : D
    };
    if (L === 0 && A === 0 || L !== A)
      return !1;
    o == null || o(V);
  }, g = function(w) {
    w.preventDefault(), m(w);
  }, b = function(w) {
    w.preventDefault(), document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", h.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", h.current), p.current = null, h.current = null, a == null || a();
  }, y = function(w) {
    document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", h.current), !l && (m(w), document.addEventListener("mousemove", g), document.addEventListener("mouseup", b), document.addEventListener("touchmove", g), document.addEventListener("touchend", b), p.current = g, h.current = b);
  };
  return [f, y];
}
var ud = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ k.createElement("div", {
    className: ne("".concat(a, "-handler"), j({}, "".concat(a, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: o
    }
  });
}, dd = function(t) {
  var r = t.children, n = t.style, o = t.prefixCls;
  return /* @__PURE__ */ k.createElement("div", {
    className: "".concat(o, "-palette"),
    style: M({
      position: "relative"
    }, n)
  }, r);
}, fd = /* @__PURE__ */ lr(function(e, t) {
  var r = e.children, n = e.x, o = e.y;
  return /* @__PURE__ */ k.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(n, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, r);
}), Qp = function(t) {
  var r = t.color, n = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, s = Oe(), l = Oe(), c = Oe(r), u = vt(function(m) {
    var g = sd({
      offset: m,
      targetRef: l,
      containerRef: s,
      color: r
    });
    c.current = g, n(g);
  }), f = cd({
    color: r,
    containerRef: s,
    targetRef: l,
    calculate: function() {
      return ld(r);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a == null ? void 0 : a(c.current);
    },
    disabledDrag: i
  }), v = Y(f, 2), p = v[0], h = v[1];
  return /* @__PURE__ */ k.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: h,
    onTouchStart: h
  }, /* @__PURE__ */ k.createElement(dd, {
    prefixCls: o
  }, /* @__PURE__ */ k.createElement(fd, {
    x: p.x,
    y: p.y,
    ref: l
  }, /* @__PURE__ */ k.createElement(ud, {
    color: r.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ k.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, Jp = function(t, r) {
  var n = hr(t, {
    value: r
  }), o = Y(n, 2), a = o[0], i = o[1], s = Tr(function() {
    return nn(a);
  }, [a]);
  return [s, i];
}, eh = function(t) {
  var r = t.colors, n = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, s = t.prefixCls, l = Tr(function() {
    return r.map(function(c, u) {
      var f = nn(c);
      return i === "alpha" && u === r.length - 1 && (f = new sr(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [r, i]);
  return /* @__PURE__ */ k.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(l, ")")
    }
  }, n);
}, th = function(t) {
  var r = t.prefixCls, n = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, s = t.color, l = t.type, c = Oe(), u = Oe(), f = Oe(s), v = function(C) {
    return l === "hue" ? C.getHue() : C.a * 100;
  }, p = vt(function(w) {
    var C = sd({
      offset: w,
      targetRef: u,
      containerRef: c,
      color: s,
      type: l
    });
    f.current = C, a(v(C));
  }), h = cd({
    color: s,
    targetRef: u,
    containerRef: c,
    calculate: function() {
      return ld(s, l);
    },
    onDragChange: p,
    onDragChangeComplete: function() {
      i(v(f.current));
    },
    direction: "x",
    disabledDrag: o
  }), m = Y(h, 2), g = m[0], b = m[1], y = k.useMemo(function() {
    if (l === "hue") {
      var w = s.toHsb();
      w.s = 1, w.b = 1, w.a = 1;
      var C = new sr(w);
      return C;
    }
    return s;
  }, [s, l]), x = k.useMemo(function() {
    return n.map(function(w) {
      return "".concat(w.color, " ").concat(w.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ k.createElement("div", {
    ref: c,
    className: ne("".concat(r, "-slider"), "".concat(r, "-slider-").concat(l)),
    onMouseDown: b,
    onTouchStart: b
  }, /* @__PURE__ */ k.createElement(dd, {
    prefixCls: r
  }, /* @__PURE__ */ k.createElement(fd, {
    x: g.x,
    y: g.y,
    ref: u
  }, /* @__PURE__ */ k.createElement(ud, {
    size: "small",
    color: y.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ k.createElement(eh, {
    colors: x,
    type: l,
    prefixCls: r
  })));
};
function rh(e) {
  return d.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || th];
  }, [e]);
}
var nh = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], oh = /* @__PURE__ */ lr(function(e, t) {
  var r = e.value, n = e.defaultValue, o = e.prefixCls, a = o === void 0 ? Xp : o, i = e.onChange, s = e.onChangeComplete, l = e.className, c = e.style, u = e.panelRender, f = e.disabledAlpha, v = f === void 0 ? !1 : f, p = e.disabled, h = p === void 0 ? !1 : p, m = e.components, g = rh(m), b = Y(g, 1), y = b[0], x = Jp(n || Kp, r), w = Y(x, 2), C = w[0], E = w[1], S = Tr(function() {
    return C.setA(1).toRgbString();
  }, [C]), $ = function(D, V) {
    r || E(D), i == null || i(D, V);
  }, _ = function(D) {
    return new sr(C.setHue(D));
  }, T = function(D) {
    return new sr(C.setA(D / 100));
  }, F = function(D) {
    $(_(D), {
      type: "hue",
      value: D
    });
  }, z = function(D) {
    $(T(D), {
      type: "alpha",
      value: D
    });
  }, I = function(D) {
    s && s(_(D));
  }, L = function(D) {
    s && s(T(D));
  }, A = ne("".concat(a, "-panel"), l, j({}, "".concat(a, "-panel-disabled"), h)), O = {
    prefixCls: a,
    disabled: h,
    color: C
  }, P = /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(Qp, De({
    onChange: $
  }, O, {
    onChangeComplete: s
  })), /* @__PURE__ */ k.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ k.createElement("div", {
    className: ne("".concat(a, "-slider-group"), j({}, "".concat(a, "-slider-group-disabled-alpha"), v))
  }, /* @__PURE__ */ k.createElement(y, De({}, O, {
    type: "hue",
    colors: nh,
    min: 0,
    max: 359,
    value: C.getHue(),
    onChange: F,
    onChangeComplete: I
  })), !v && /* @__PURE__ */ k.createElement(y, De({}, O, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: S
    }],
    min: 0,
    max: 100,
    value: C.a * 100,
    onChange: z,
    onChangeComplete: L
  }))), /* @__PURE__ */ k.createElement(Yp, {
    color: C.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ k.createElement("div", {
    className: A,
    style: c,
    ref: t
  }, typeof u == "function" ? u(P) : P);
});
process.env.NODE_ENV !== "production" && (oh.displayName = "ColorPicker");
const ah = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", ih = (e, t) => e ? ah(e, t) : "";
let sh = /* @__PURE__ */ function() {
  function e(t) {
    st(this, e);
    var r;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (r = t.colors) === null || r === void 0 ? void 0 : r.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const n = Array.isArray(t);
    n && t.length ? (this.colors = t.map((o) => {
      let {
        color: a,
        percent: i
      } = o;
      return {
        color: new e(a),
        percent: i
      };
    }), this.metaColor = new sr(this.colors[0].color.metaColor)) : this.metaColor = new sr(n ? "" : t), (!t || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return lt(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return ih(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: r
      } = this;
      return r ? `linear-gradient(90deg, ${r.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(r) {
      return !r || this.isGradient() !== r.isGradient() ? !1 : this.isGradient() ? this.colors.length === r.colors.length && this.colors.every((n, o) => {
        const a = r.colors[o];
        return n.percent === a.percent && n.color.equals(a.color);
      }) : this.toHexString() === r.toHexString();
    }
  }]);
}();
var lh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" }, ch = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: lh
  }));
}, qi = /* @__PURE__ */ d.forwardRef(ch);
process.env.NODE_ENV !== "production" && (qi.displayName = "RightOutlined");
const uh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), dh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), fh = function(e, t, r, n) {
  const a = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, uh(n)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, dh(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${a}${e}-leave${e}-leave-active`]: {
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, vh = new Mt("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), gh = new Mt("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), zl = new Mt("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Bl = new Mt("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), mh = new Mt("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), ph = new Mt("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), hh = new Mt("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), bh = new Mt("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), yh = new Mt("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Ch = new Mt("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Sh = new Mt("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), xh = new Mt("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Eh = {
  zoom: {
    inKeyframes: vh,
    outKeyframes: gh
  },
  "zoom-big": {
    inKeyframes: zl,
    outKeyframes: Bl
  },
  "zoom-big-fast": {
    inKeyframes: zl,
    outKeyframes: Bl
  },
  "zoom-left": {
    inKeyframes: hh,
    outKeyframes: bh
  },
  "zoom-right": {
    inKeyframes: yh,
    outKeyframes: Ch
  },
  "zoom-up": {
    inKeyframes: mh,
    outKeyframes: ph
  },
  "zoom-down": {
    inKeyframes: Sh,
    outKeyframes: xh
  }
}, wh = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = Eh[t];
  return [fh(n, o, a, e.motionDurationFast), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, $h = (e, t) => {
  const {
    r,
    g: n,
    b: o,
    a
  } = e.toRgb(), i = new sr(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : r * 0.299 + n * 0.587 + o * 0.114 > 192;
}, vd = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r
  } = e;
  return ht(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: r
  });
}, gd = (e) => {
  var t, r, n, o, a, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, c = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Fo(s), f = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : Fo(l), v = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : Fo(c), p = $h(new sh(e.colorBgSolid), "#fff") ? "#000" : "#fff", h = Ir.reduce((m, g) => Object.assign(Object.assign({}, m), {
    [`${g}ShadowColor`]: `0 ${we(e.controlOutlineWidth)} 0 ${_n(e[`${g}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, h), {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: "inherit",
    onlyIconSizeSM: "inherit",
    onlyIconSizeLG: "inherit",
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textTextColor: e.colorText,
    textTextHoverColor: e.colorText,
    textTextActiveColor: e.colorText,
    textHoverBg: e.colorFillTertiary,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    solidTextColor: p,
    contentFontSize: s,
    contentFontSizeSM: l,
    contentFontSizeLG: c,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: v,
    paddingBlock: Math.max((e.controlHeight - s * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - l * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - c * v) / 2 - e.lineWidth, 0)
  });
}, Oh = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n,
    opacityLoading: o,
    motionDurationSlow: a,
    motionEaseInOut: i,
    marginXS: s,
    calc: l
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${we(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: Au(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Fu(e),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${t}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${t}-compact-item`]: {
          flex: "none"
        },
        [`&${t}-round`]: {
          width: "auto"
        }
      },
      // Loading
      [`&${t}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${t}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((c) => `${c} ${a} ${i}`).join(",")
      },
      // iconPosition
      [`&:not(${t}-icon-end)`]: {
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: l(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: l(s).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: l(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: l(s).mul(-1).equal()
          }
        }
      }
    }
  };
}, md = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), Rh = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), _h = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Ph = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), aa = (e, t, r, n, o, a, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, md(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, s))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: a || void 0
    }
  })
}), Th = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Ph(e))
}), Nh = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), ia = (e, t, r, n) => {
  const a = n && ["link", "text"].includes(n) ? Nh : Th;
  return Object.assign(Object.assign({}, a(e)), md(e.componentCls, t, r));
}, sa = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: r
  }, ia(e, n, o))
}), la = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: r
  }, ia(e, n, o))
}), ca = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), ua = (e, t, r, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, ia(e, r, n))
}), Jt = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-${r}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, ia(e, n, o, r))
}), jh = (e) => {
  const {
    componentCls: t
  } = e;
  return Ir.reduce((r, n) => {
    const o = e[`${n}6`], a = e[`${n}1`], i = e[`${n}5`], s = e[`${n}2`], l = e[`${n}3`], c = e[`${n}7`];
    return Object.assign(Object.assign({}, r), {
      [`&${t}-color-${n}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${n}ShadowColor`]
      }, sa(e, e.colorTextLightSolid, o, {
        background: i
      }, {
        background: c
      })), la(e, o, e.colorBgContainer, {
        color: i,
        borderColor: i,
        background: e.colorBgContainer
      }, {
        color: c,
        borderColor: c,
        background: e.colorBgContainer
      })), ca(e)), ua(e, a, {
        background: s
      }, {
        background: l
      })), Jt(e, o, "link", {
        color: i
      }, {
        color: c
      })), Jt(e, o, "text", {
        color: i,
        background: a
      }, {
        color: c,
        background: l
      }))
    });
  }, {});
}, Ih = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, sa(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), ca(e)), ua(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), aa(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Jt(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Ah = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, la(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), ca(e)), ua(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), Jt(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Jt(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), aa(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Mh = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, sa(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), la(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), ca(e)), ua(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), Jt(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Jt(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), aa(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Fh = (e) => Object.assign(Object.assign({}, Jt(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), aa(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), Lh = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: Ih(e),
    [`${t}-color-primary`]: Ah(e),
    [`${t}-color-dangerous`]: Mh(e),
    [`${t}-color-link`]: Fh(e)
  }, jh(e));
}, Dh = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, la(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Jt(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), sa(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), Jt(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), _s = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    borderRadius: a,
    buttonPaddingHorizontal: i,
    iconCls: s,
    buttonPaddingVertical: l,
    buttonIconOnlyFontSize: c
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: n,
        padding: `${we(l)} ${we(i)}`,
        borderRadius: a,
        [`&${r}-icon-only`]: {
          width: n,
          [s]: {
            fontSize: c
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: Rh(e)
    },
    {
      [`${r}${r}-round${t}`]: _h(e)
    }
  ];
}, Vh = (e) => {
  const t = ht(e, {
    fontSize: e.contentFontSize
  });
  return _s(t, e.componentCls);
}, zh = (e) => {
  const t = ht(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return _s(t, `${e.componentCls}-sm`);
}, Bh = (e) => {
  const t = ht(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return _s(t, `${e.componentCls}-lg`);
}, Hh = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, kh = kt("Button", (e) => {
  const t = vd(e);
  return [
    // Shared
    Oh(t),
    // Size
    Vh(t),
    zh(t),
    Bh(t),
    // Block
    Hh(t),
    // Color
    Lh(t),
    // https://github.com/ant-design/ant-design/issues/50969
    Dh(t),
    // Button Group
    Wp(t)
  ];
}, gd, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function Wh(e, t, r) {
  const {
    focusElCls: n,
    focus: o,
    borderElCls: a
  } = r, i = a ? "> *" : "", s = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${i}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${i}`]: {
        zIndex: 0
      }
    })
  };
}
function qh(e, t, r) {
  const {
    borderElCls: n
  } = r, o = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function pd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, Wh(e, n, t)), qh(r, n, t))
  };
}
function Uh(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function Gh(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function Xh(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Uh(e, t)), Gh(e.componentCls, t))
  };
}
const Kh = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: r,
    lineWidth: n,
    calc: o
  } = e, a = o(n).mul(-1).equal(), i = (s) => {
    const l = `${t}-compact${s ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${l} + ${l}::before`]: {
        position: "absolute",
        top: s ? a : 0,
        insetInlineStart: s ? 0 : a,
        backgroundColor: r,
        content: '""',
        width: s ? "100%" : n,
        height: s ? n : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, i()), i(!0));
}, Yh = pm(["Button", "compact"], (e) => {
  const t = vd(e);
  return [
    // Space Compact
    pd(t),
    Xh(t),
    Kh(t)
  ];
}, gd);
var Zh = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Qh(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const Jh = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, e0 = /* @__PURE__ */ k.forwardRef((e, t) => {
  var r, n;
  const {
    loading: o = !1,
    prefixCls: a,
    color: i,
    variant: s,
    type: l,
    danger: c = !1,
    shape: u = "default",
    size: f,
    styles: v,
    disabled: p,
    className: h,
    rootClassName: m,
    children: g,
    icon: b,
    iconPosition: y = "start",
    ghost: x = !1,
    block: w = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: C = "button",
    classNames: E,
    style: S = {},
    autoInsertSpace: $,
    autoFocus: _
  } = e, T = Zh(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), F = l || "default", [z, I] = Tr(() => {
    if (i && s)
      return [i, s];
    const ce = Jh[F] || [];
    return c ? ["danger", ce[1]] : ce;
  }, [l, i, s, c]), A = z === "danger" ? "dangerous" : z, {
    getPrefixCls: O,
    direction: P,
    autoInsertSpace: R,
    className: D,
    style: V,
    classNames: H,
    styles: q
  } = hn("button"), U = (r = $ != null ? $ : R) !== null && r !== void 0 ? r : !0, B = O("btn", a), [Q, ie, ve] = kh(B), oe = yt(jr), ae = p != null ? p : oe, me = yt(id), pe = Tr(() => Qh(o), [o]), [se, ge] = Qt(pe.loading), [X, ue] = Qt(!1), re = Oe(null), de = Ko(t, re), he = gf.count(g) === 1 && !b && !wo(I), ye = Oe(!0);
  k.useEffect(() => (ye.current = !1, () => {
    ye.current = !0;
  }), []), tt(() => {
    let ce = null;
    pe.delay > 0 ? ce = setTimeout(() => {
      ce = null, ge(!0);
    }, pe.delay) : ge(pe.loading);
    function G() {
      ce && (clearTimeout(ce), ce = null);
    }
    return G;
  }, [pe]), tt(() => {
    if (!re.current || !U)
      return;
    const ce = re.current.textContent || "";
    he && ki(ce) ? X || ue(!0) : X && ue(!1);
  }), tt(() => {
    _ && re.current && re.current.focus();
  }, []);
  const Te = k.useCallback((ce) => {
    var G;
    if (se || ae) {
      ce.preventDefault();
      return;
    }
    (G = e.onClick) === null || G === void 0 || G.call(e, ("href" in e, ce));
  }, [e.onClick, se, ae]);
  if (process.env.NODE_ENV !== "production") {
    const ce = gt("Button");
    process.env.NODE_ENV !== "production" && ce(!(typeof b == "string" && b.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${b}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ce(!(x && wo(I)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: xe,
    compactItemClassnames: Re
  } = Rs(B, P), J = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, be = Os((ce) => {
    var G, K;
    return (K = (G = f != null ? f : xe) !== null && G !== void 0 ? G : me) !== null && K !== void 0 ? K : ce;
  }), Ee = be && (n = J[be]) !== null && n !== void 0 ? n : "", Ne = se ? "loading" : b, Ve = Fr(T, ["navigate"]), Ie = ne(B, ie, ve, {
    [`${B}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${B}-${F}`]: F,
    [`${B}-dangerous`]: c,
    [`${B}-color-${A}`]: A,
    [`${B}-variant-${I}`]: I,
    [`${B}-${Ee}`]: Ee,
    [`${B}-icon-only`]: !g && g !== 0 && !!Ne,
    [`${B}-background-ghost`]: x && !wo(I),
    [`${B}-loading`]: se,
    [`${B}-two-chinese-chars`]: X && U && !se,
    [`${B}-block`]: w,
    [`${B}-rtl`]: P === "rtl",
    [`${B}-icon-end`]: y === "end"
  }, Re, h, m, D), ke = Object.assign(Object.assign({}, V), S), N = ne(E == null ? void 0 : E.icon, H.icon), W = Object.assign(Object.assign({}, (v == null ? void 0 : v.icon) || {}), q.icon || {}), Z = b && !se ? /* @__PURE__ */ k.createElement(Wi, {
    prefixCls: B,
    className: N,
    style: W
  }, b) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ k.createElement(Wi, {
    prefixCls: B,
    className: N,
    style: W
  }, o.icon) : /* @__PURE__ */ k.createElement(kp, {
    existIcon: !!b,
    prefixCls: B,
    loading: se,
    mount: ye.current
  }), ee = g || g === 0 ? Hp(g, he && U) : null;
  if (Ve.href !== void 0)
    return Q(/* @__PURE__ */ k.createElement("a", Object.assign({}, Ve, {
      className: ne(Ie, {
        [`${B}-disabled`]: ae
      }),
      href: ae ? void 0 : Ve.href,
      style: ke,
      onClick: Te,
      ref: de,
      tabIndex: ae ? -1 : 0
    }), Z, ee));
  let te = /* @__PURE__ */ k.createElement("button", Object.assign({}, T, {
    type: C,
    className: Ie,
    style: ke,
    onClick: Te,
    disabled: ae,
    ref: de
  }), Z, ee, Re && /* @__PURE__ */ k.createElement(Yh, {
    prefixCls: B
  }));
  return wo(I) || (te = /* @__PURE__ */ k.createElement($s, {
    component: "Button",
    disabled: se
  }, te)), Q(te);
}), Hn = e0;
Hn.Group = zp;
Hn.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Hn.displayName = "Button");
var hd = /* @__PURE__ */ d.createContext(null), Hl = [];
function t0(e, t) {
  var r = d.useState(function() {
    if (!mt())
      return null;
    var h = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && h.setAttribute("data-debug", t), h;
  }), n = Y(r, 1), o = n[0], a = d.useRef(!1), i = d.useContext(hd), s = d.useState(Hl), l = Y(s, 2), c = l[0], u = l[1], f = i || (a.current ? void 0 : function(h) {
    u(function(m) {
      var g = [h].concat(fe(m));
      return g;
    });
  });
  function v() {
    o.parentElement || document.body.appendChild(o), a.current = !0;
  }
  function p() {
    var h;
    (h = o.parentElement) === null || h === void 0 || h.removeChild(o), a.current = !1;
  }
  return qe(function() {
    return e ? i ? i(v) : v() : p(), p;
  }, [e]), qe(function() {
    c.length && (c.forEach(function(h) {
      return h();
    }), u(Hl));
  }, [c]), [o, f];
}
function r0(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = t;
  var n = r.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var o, a;
  if (e) {
    var i = getComputedStyle(e);
    n.scrollbarColor = i.scrollbarColor, n.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), l = parseInt(s.width, 10), c = parseInt(s.height, 10);
    try {
      var u = l ? "width: ".concat(s.width, ";") : "", f = c ? "height: ".concat(s.height, ";") : "";
      ir(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(f, `
}`), t);
    } catch (h) {
      console.error(h), o = l, a = c;
    }
  }
  document.body.appendChild(r);
  var v = e && o && !isNaN(o) ? o : r.offsetWidth - r.clientWidth, p = e && a && !isNaN(a) ? a : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), Ln(t), {
    width: v,
    height: p
  };
}
function n0(e) {
  return typeof document == "undefined" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : r0(e);
}
function o0() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var a0 = "rc-util-locker-".concat(Date.now()), kl = 0;
function i0(e) {
  var t = !!e, r = d.useState(function() {
    return kl += 1, "".concat(a0, "_").concat(kl);
  }), n = Y(r, 1), o = n[0];
  qe(function() {
    if (t) {
      var a = n0(document.body).width, i = o0();
      ir(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), o);
    } else
      Ln(o);
    return function() {
      Ln(o);
    };
  }, [t, o]);
}
var s0 = !1;
function l0(e) {
  return s0;
}
var Wl = function(t) {
  return t === !1 ? !1 : !mt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Ps = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, l = e.children, c = d.useState(r), u = Y(c, 2), f = u[0], v = u[1], p = f || r;
  process.env.NODE_ENV !== "production" && Ue(mt() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), d.useEffect(function() {
    (s || r) && v(r);
  }, [r, s]);
  var h = d.useState(function() {
    return Wl(o);
  }), m = Y(h, 2), g = m[0], b = m[1];
  d.useEffect(function() {
    var z = Wl(o);
    b(z != null ? z : null);
  });
  var y = t0(p && !g, a), x = Y(y, 2), w = x[0], C = x[1], E = g != null ? g : w;
  i0(n && r && mt() && (E === w || E === document.body));
  var S = null;
  if (l && Un(l) && t) {
    var $ = l;
    S = $.ref;
  }
  var _ = Ko(S, t);
  if (!p || !mt() || g === void 0)
    return null;
  var T = E === !1 || l0(), F = l;
  return t && (F = /* @__PURE__ */ d.cloneElement(l, {
    ref: _
  })), /* @__PURE__ */ d.createElement(hd.Provider, {
    value: C
  }, T ? F : /* @__PURE__ */ pf(F, E));
});
process.env.NODE_ENV !== "production" && (Ps.displayName = "Portal");
function c0() {
  var e = M({}, d);
  return e.useId;
}
var ql = 0, Ul = c0();
const bd = Ul ? (
  // Use React `useId`
  function(t) {
    var r = Ul();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = d.useState("ssr-id"), n = Y(r, 2), o = n[0], a = n[1];
    return d.useEffect(function() {
      var i = ql;
      ql += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
var _r = "RC_FORM_INTERNAL_HOOKS", Be = function() {
  Ue(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, vn = /* @__PURE__ */ d.createContext({
  getFieldValue: Be,
  getFieldsValue: Be,
  getFieldError: Be,
  getFieldWarning: Be,
  getFieldsError: Be,
  isFieldsTouched: Be,
  isFieldTouched: Be,
  isFieldValidating: Be,
  isFieldsValidating: Be,
  resetFields: Be,
  setFields: Be,
  setFieldValue: Be,
  setFieldsValue: Be,
  validateFields: Be,
  submit: Be,
  getInternalHooks: function() {
    return Be(), {
      dispatch: Be,
      initEntityValue: Be,
      registerField: Be,
      useSubscribe: Be,
      setInitialValues: Be,
      destroyForm: Be,
      setCallbacks: Be,
      registerWatch: Be,
      getFields: Be,
      setValidateMessages: Be,
      setPreserve: Be,
      getInitialValue: Be
    };
  }
}), qo = /* @__PURE__ */ d.createContext(null);
function Ui(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function u0(e) {
  return e && !!e._init;
}
function Gi() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var Xi = Gi();
function d0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch (t) {
    return typeof e == "function";
  }
}
function f0(e, t, r) {
  if (ds()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && An(o, r.prototype), o;
}
function Ki(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ki = function(n) {
    if (n === null || !d0(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return f0(n, arguments, Mn(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), An(o, n);
  }, Ki(e);
}
var v0 = /%[sdj%]/g, yd = function() {
};
typeof process != "undefined" && process.env && process.env.NODE_ENV !== "production" && typeof window != "undefined" && typeof document != "undefined" && (yd = function(t, r) {
  typeof console != "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING == "undefined" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function Yi(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function wt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(v0, function(s) {
      if (s === "%%")
        return "%";
      if (o >= a)
        return s;
      switch (s) {
        case "%s":
          return String(r[o++]);
        case "%d":
          return Number(r[o++]);
        case "%j":
          try {
            return JSON.stringify(r[o++]);
          } catch (l) {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function g0(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function ot(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || g0(t) && typeof e == "string" && !e);
}
function m0(e, t, r) {
  var n = [], o = 0, a = e.length;
  function i(s) {
    n.push.apply(n, fe(s || [])), o++, o === a && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function Gl(e, t, r) {
  var n = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      r(i);
      return;
    }
    var s = n;
    n = n + 1, s < o ? t(e[s], a) : r([]);
  }
  a([]);
}
function p0(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, fe(e[r] || []));
  }), t;
}
var Xl = /* @__PURE__ */ function(e) {
  yr(r, e);
  var t = Cr(r);
  function r(n, o) {
    var a;
    return st(this, r), a = t.call(this, "Async Validation Error"), j($e(a), "errors", void 0), j($e(a), "fields", void 0), a.errors = n, a.fields = o, a;
  }
  return lt(r);
}(/* @__PURE__ */ Ki(Error));
function h0(e, t, r, n, o) {
  if (t.first) {
    var a = new Promise(function(v, p) {
      var h = function(b) {
        return n(b), b.length ? p(new Xl(b, Yi(b))) : v(o);
      }, m = p0(e);
      Gl(m, r, h);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, c = 0, u = [], f = new Promise(function(v, p) {
    var h = function(g) {
      if (u.push.apply(u, g), c++, c === l)
        return n(u), u.length ? p(new Xl(u, Yi(u))) : v(o);
    };
    s.length || (n(u), v(o)), s.forEach(function(m) {
      var g = e[m];
      i.indexOf(m) !== -1 ? Gl(g, r, h) : m0(g, r, h);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function b0(e) {
  return !!(e && e.message !== void 0);
}
function y0(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Kl(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = y0(t, e.fullFields) : n = t[r.field || e.fullField], b0(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Yl(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        Ce(n) === "object" && Ce(e[r]) === "object" ? e[r] = M(M({}, e[r]), n) : e[r] = n;
      }
  }
  return e;
}
var qr = "enum", C0 = function(t, r, n, o, a) {
  t[qr] = Array.isArray(t[qr]) ? t[qr] : [], t[qr].indexOf(r) === -1 && o.push(wt(a.messages[qr], t.fullField, t[qr].join(", ")));
}, S0 = function(t, r, n, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(wt(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || o.push(wt(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, x0 = function(t, r, n, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = r, f = null, v = typeof r == "number", p = typeof r == "string", h = Array.isArray(r);
  if (v ? f = "number" : p ? f = "string" : h && (f = "array"), !f)
    return !1;
  h && (u = r.length), p && (u = r.replace(c, "_").length), i ? u !== t.len && o.push(wt(a.messages[f].len, t.fullField, t.len)) : s && !l && u < t.min ? o.push(wt(a.messages[f].min, t.fullField, t.min)) : l && !s && u > t.max ? o.push(wt(a.messages[f].max, t.fullField, t.max)) : s && l && (u < t.min || u > t.max) && o.push(wt(a.messages[f].range, t.fullField, t.min, t.max));
}, Cd = function(t, r, n, o, a, i) {
  t.required && (!n.hasOwnProperty(t.field) || ot(r, i || t.type)) && o.push(wt(a.messages.required, t.fullField));
}, $o;
const E0 = function() {
  if ($o)
    return $o;
  var e = "[a-fA-F\\d:]", t = function(E) {
    return E && E.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", o = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(r, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(r, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(r, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(r, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(r, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(r, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(r, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], a = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(o.join("|"), ")").concat(a), s = new RegExp("(?:^".concat(r, "$)|(?:^").concat(i, "$)")), l = new RegExp("^".concat(r, "$")), c = new RegExp("^".concat(i, "$")), u = function(E) {
    return E && E.exact ? s : new RegExp("(?:".concat(t(E)).concat(r).concat(t(E), ")|(?:").concat(t(E)).concat(i).concat(t(E), ")"), "g");
  };
  u.v4 = function(C) {
    return C && C.exact ? l : new RegExp("".concat(t(C)).concat(r).concat(t(C)), "g");
  }, u.v6 = function(C) {
    return C && C.exact ? c : new RegExp("".concat(t(C)).concat(i).concat(t(C)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", p = u.v4().source, h = u.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', w = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(p, "|").concat(h, "|").concat(m).concat(g).concat(b, ")").concat(y).concat(x);
  return $o = new RegExp("(?:^".concat(w, "$)"), "i"), $o;
};
var Zl = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Pn = {
  integer: function(t) {
    return Pn.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Pn.number(t) && !Pn.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch (r) {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return Ce(t) === "object" && !Pn.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Zl.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(E0());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Zl.hex);
  }
}, w0 = function(t, r, n, o, a) {
  if (t.required && r === void 0) {
    Cd(t, r, n, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Pn[s](r) || o.push(wt(a.messages.types[s], t.fullField, t.type)) : s && Ce(r) !== t.type && o.push(wt(a.messages.types[s], t.fullField, t.type));
}, $0 = function(t, r, n, o, a) {
  (/^\s+$/.test(r) || r === "") && o.push(wt(a.messages.whitespace, t.fullField));
};
const Pe = {
  required: Cd,
  whitespace: $0,
  type: w0,
  range: x0,
  enum: C0,
  pattern: S0
};
var O0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r) && !t.required)
      return n();
    Pe.required(t, r, o, i, a);
  }
  n(i);
}, R0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    Pe.required(t, r, o, i, a, "array"), r != null && (Pe.type(t, r, o, i, a), Pe.range(t, r, o, i, a));
  }
  n(i);
}, _0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r) && !t.required)
      return n();
    Pe.required(t, r, o, i, a), r !== void 0 && Pe.type(t, r, o, i, a);
  }
  n(i);
}, P0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r, "date") && !t.required)
      return n();
    if (Pe.required(t, r, o, i, a), !ot(r, "date")) {
      var l;
      r instanceof Date ? l = r : l = new Date(r), Pe.type(t, l, o, i, a), l && Pe.range(t, l.getTime(), o, i, a);
    }
  }
  n(i);
}, T0 = "enum", N0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r) && !t.required)
      return n();
    Pe.required(t, r, o, i, a), r !== void 0 && Pe[T0](t, r, o, i, a);
  }
  n(i);
}, j0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r) && !t.required)
      return n();
    Pe.required(t, r, o, i, a), r !== void 0 && (Pe.type(t, r, o, i, a), Pe.range(t, r, o, i, a));
  }
  n(i);
}, I0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r) && !t.required)
      return n();
    Pe.required(t, r, o, i, a), r !== void 0 && (Pe.type(t, r, o, i, a), Pe.range(t, r, o, i, a));
  }
  n(i);
}, A0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r) && !t.required)
      return n();
    Pe.required(t, r, o, i, a), r !== void 0 && Pe.type(t, r, o, i, a);
  }
  n(i);
}, M0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), ot(r) && !t.required)
      return n();
    Pe.required(t, r, o, i, a), r !== void 0 && (Pe.type(t, r, o, i, a), Pe.range(t, r, o, i, a));
  }
  n(i);
}, F0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r) && !t.required)
      return n();
    Pe.required(t, r, o, i, a), r !== void 0 && Pe.type(t, r, o, i, a);
  }
  n(i);
}, L0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r, "string") && !t.required)
      return n();
    Pe.required(t, r, o, i, a), ot(r, "string") || Pe.pattern(t, r, o, i, a);
  }
  n(i);
}, D0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r) && !t.required)
      return n();
    Pe.required(t, r, o, i, a), ot(r) || Pe.type(t, r, o, i, a);
  }
  n(i);
}, V0 = function(t, r, n, o, a) {
  var i = [], s = Array.isArray(r) ? "array" : Ce(r);
  Pe.required(t, r, o, i, a, s), n(i);
}, z0 = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ot(r, "string") && !t.required)
      return n();
    Pe.required(t, r, o, i, a, "string"), ot(r, "string") || (Pe.type(t, r, o, i, a), Pe.range(t, r, o, i, a), Pe.pattern(t, r, o, i, a), t.whitespace === !0 && Pe.whitespace(t, r, o, i, a));
  }
  n(i);
}, Xa = function(t, r, n, o, a) {
  var i = t.type, s = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (ot(r, i) && !t.required)
      return n();
    Pe.required(t, r, o, s, a, i), ot(r, i) || Pe.type(t, r, o, s, a);
  }
  n(s);
};
const jn = {
  string: z0,
  method: A0,
  number: M0,
  boolean: _0,
  regexp: D0,
  integer: I0,
  float: j0,
  array: R0,
  object: F0,
  enum: N0,
  pattern: L0,
  date: P0,
  url: Xa,
  hex: Xa,
  email: Xa,
  required: V0,
  any: O0
};
var Yn = /* @__PURE__ */ function() {
  function e(t) {
    st(this, e), j(this, "rules", null), j(this, "_messages", Xi), this.define(t);
  }
  return lt(e, [{
    key: "define",
    value: function(r) {
      var n = this;
      if (!r)
        throw new Error("Cannot configure a schema with no rules");
      if (Ce(r) !== "object" || Array.isArray(r))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(o) {
        var a = r[o];
        n.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(r) {
      return r && (this._messages = Yl(Gi(), r)), this._messages;
    }
  }, {
    key: "validate",
    value: function(r) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = r, s = o, l = a;
      if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return l && l(null, i), Promise.resolve(i);
      function c(h) {
        var m = [], g = {};
        function b(x) {
          if (Array.isArray(x)) {
            var w;
            m = (w = m).concat.apply(w, fe(x));
          } else
            m.push(x);
        }
        for (var y = 0; y < h.length; y++)
          b(h[y]);
        m.length ? (g = Yi(m), l(m, g)) : l(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === Xi && (u = Gi()), Yl(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var f = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(h) {
        var m = n.rules[h], g = i[h];
        m.forEach(function(b) {
          var y = b;
          typeof y.transform == "function" && (i === r && (i = M({}, i)), g = i[h] = y.transform(g), g != null && (y.type = y.type || (Array.isArray(g) ? "array" : Ce(g)))), typeof y == "function" ? y = {
            validator: y
          } : y = M({}, y), y.validator = n.getValidationMethod(y), y.validator && (y.field = h, y.fullField = y.fullField || h, y.type = n.getType(y), f[h] = f[h] || [], f[h].push({
            rule: y,
            value: g,
            source: i,
            field: h
          }));
        });
      });
      var p = {};
      return h0(f, s, function(h, m) {
        var g = h.rule, b = (g.type === "object" || g.type === "array") && (Ce(g.fields) === "object" || Ce(g.defaultField) === "object");
        b = b && (g.required || !g.required && h.value), g.field = h.field;
        function y(S, $) {
          return M(M({}, $), {}, {
            fullField: "".concat(g.fullField, ".").concat(S),
            fullFields: g.fullFields ? [].concat(fe(g.fullFields), [S]) : [S]
          });
        }
        function x() {
          var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], $ = Array.isArray(S) ? S : [S];
          !s.suppressWarning && $.length && e.warning("async-validator:", $), $.length && g.message !== void 0 && ($ = [].concat(g.message));
          var _ = $.map(Kl(g, i));
          if (s.first && _.length)
            return p[g.field] = 1, m(_);
          if (!b)
            m(_);
          else {
            if (g.required && !h.value)
              return g.message !== void 0 ? _ = [].concat(g.message).map(Kl(g, i)) : s.error && (_ = [s.error(g, wt(s.messages.required, g.field))]), m(_);
            var T = {};
            g.defaultField && Object.keys(h.value).map(function(I) {
              T[I] = g.defaultField;
            }), T = M(M({}, T), h.rule.fields);
            var F = {};
            Object.keys(T).forEach(function(I) {
              var L = T[I], A = Array.isArray(L) ? L : [L];
              F[I] = A.map(y.bind(null, I));
            });
            var z = new e(F);
            z.messages(s.messages), h.rule.options && (h.rule.options.messages = s.messages, h.rule.options.error = s.error), z.validate(h.value, h.rule.options || s, function(I) {
              var L = [];
              _ && _.length && L.push.apply(L, fe(_)), I && I.length && L.push.apply(L, fe(I)), m(L.length ? L : null);
            });
          }
        }
        var w;
        if (g.asyncValidator)
          w = g.asyncValidator(g, h.value, x, h.source, s);
        else if (g.validator) {
          try {
            w = g.validator(g, h.value, x, h.source, s);
          } catch (S) {
            var C, E;
            (C = (E = console).error) === null || C === void 0 || C.call(E, S), s.suppressValidatorError || setTimeout(function() {
              throw S;
            }, 0), x(S.message);
          }
          w === !0 ? x() : w === !1 ? x(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || "".concat(g.fullField || g.field, " fails")) : w instanceof Array ? x(w) : w instanceof Error && x(w.message);
        }
        w && w.then && w.then(function() {
          return x();
        }, function(S) {
          return x(S);
        });
      }, function(h) {
        c(h);
      }, i);
    }
  }, {
    key: "getType",
    value: function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !jn.hasOwnProperty(r.type))
        throw new Error(wt("Unknown rule type %s", r.type));
      return r.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(r) {
      if (typeof r.validator == "function")
        return r.validator;
      var n = Object.keys(r), o = n.indexOf("message");
      return o !== -1 && n.splice(o, 1), n.length === 1 && n[0] === "required" ? jn.required : jn[this.getType(r)] || void 0;
    }
  }]), e;
}();
j(Yn, "register", function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  jn[t] = r;
});
j(Yn, "warning", yd);
j(Yn, "messages", Xi);
j(Yn, "validators", jn);
var xt = "'${name}' is not a valid ${type}", Sd = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: xt,
    method: xt,
    array: xt,
    object: xt,
    number: xt,
    date: xt,
    boolean: xt,
    integer: xt,
    float: xt,
    regexp: xt,
    email: xt,
    url: xt,
    hex: xt
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Ql = Yn;
function B0(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(r) {
    if (r.startsWith("\\"))
      return r.slice(1);
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Jl = "CODE_LOGIC_ERROR";
function Zi(e, t, r, n, o) {
  return Qi.apply(this, arguments);
}
function Qi() {
  return Qi = Mr(/* @__PURE__ */ pt().mark(function e(t, r, n, o, a) {
    var i, s, l, c, u, f, v, p, h;
    return pt().wrap(function(g) {
      for (; ; ) switch (g.prev = g.next) {
        case 0:
          return i = M({}, n), delete i.ruleIndex, Ql.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(Jl);
            }
          }), l = null, i && i.type === "array" && i.defaultField && (l = i.defaultField, delete i.defaultField), c = new Ql(j({}, t, [i])), u = Qr(Sd, o.validateMessages), c.messages(u), f = [], g.prev = 10, g.next = 13, Promise.resolve(c.validate(j({}, t, r), M({}, o)));
        case 13:
          g.next = 18;
          break;
        case 15:
          g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (f = g.t0.errors.map(function(b, y) {
            var x = b.message, w = x === Jl ? u.default : x;
            return /* @__PURE__ */ d.isValidElement(w) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ d.cloneElement(w, {
                key: "error_".concat(y)
              })
            ) : w;
          }));
        case 18:
          if (!(!f.length && l)) {
            g.next = 23;
            break;
          }
          return g.next = 21, Promise.all(r.map(function(b, y) {
            return Zi("".concat(t, ".").concat(y), b, l, o, a);
          }));
        case 21:
          return v = g.sent, g.abrupt("return", v.reduce(function(b, y) {
            return [].concat(fe(b), fe(y));
          }, []));
        case 23:
          return p = M(M({}, n), {}, {
            name: t,
            enum: (n.enum || []).join(", ")
          }, a), h = f.map(function(b) {
            return typeof b == "string" ? B0(b, p) : b;
          }), g.abrupt("return", h);
        case 26:
        case "end":
          return g.stop();
      }
    }, e, null, [[10, 15]]);
  })), Qi.apply(this, arguments);
}
function H0(e, t, r, n, o, a) {
  var i = e.join("."), s = r.map(function(u, f) {
    var v = u.validator, p = M(M({}, u), {}, {
      ruleIndex: f
    });
    return v && (p.validator = function(h, m, g) {
      var b = !1, y = function() {
        for (var C = arguments.length, E = new Array(C), S = 0; S < C; S++)
          E[S] = arguments[S];
        Promise.resolve().then(function() {
          Ue(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || g.apply(void 0, E);
        });
      }, x = v(h, m, y);
      b = x && typeof x.then == "function" && typeof x.catch == "function", Ue(b, "`callback` is deprecated. Please return a promise instead."), b && x.then(function() {
        g();
      }).catch(function(w) {
        g(w || " ");
      });
    }), p;
  }).sort(function(u, f) {
    var v = u.warningOnly, p = u.ruleIndex, h = f.warningOnly, m = f.ruleIndex;
    return !!v == !!h ? p - m : v ? 1 : -1;
  }), l;
  if (o === !0)
    l = new Promise(/* @__PURE__ */ function() {
      var u = Mr(/* @__PURE__ */ pt().mark(function f(v, p) {
        var h, m, g;
        return pt().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              h = 0;
            case 1:
              if (!(h < s.length)) {
                y.next = 12;
                break;
              }
              return m = s[h], y.next = 5, Zi(i, t, m, n, a);
            case 5:
              if (g = y.sent, !g.length) {
                y.next = 9;
                break;
              }
              return p([{
                errors: g,
                rule: m
              }]), y.abrupt("return");
            case 9:
              h += 1, y.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return y.stop();
          }
        }, f);
      }));
      return function(f, v) {
        return u.apply(this, arguments);
      };
    }());
  else {
    var c = s.map(function(u) {
      return Zi(i, t, u, n, a).then(function(f) {
        return {
          errors: f,
          rule: u
        };
      });
    });
    l = (o ? W0(c) : k0(c)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return l.catch(function(u) {
    return u;
  }), l;
}
function k0(e) {
  return Ji.apply(this, arguments);
}
function Ji() {
  return Ji = Mr(/* @__PURE__ */ pt().mark(function e(t) {
    return pt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(t).then(function(o) {
            var a, i = (a = []).concat.apply(a, fe(o));
            return i;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Ji.apply(this, arguments);
}
function W0(e) {
  return es.apply(this, arguments);
}
function es() {
  return es = Mr(/* @__PURE__ */ pt().mark(function e(t) {
    var r;
    return pt().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return r = 0, o.abrupt("return", new Promise(function(a) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && a([s]), r += 1, r === t.length && a([]);
              });
            });
          }));
        case 2:
        case "end":
          return o.stop();
      }
    }, e);
  })), es.apply(this, arguments);
}
function Ze(e) {
  return Ui(e);
}
function ec(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var o = Zt(e, n);
    r = Vt(r, n, o);
  }), r;
}
function on(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return xd(t, n, r);
  });
}
function xd(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, o) {
    return e[o] === n;
  });
}
function q0(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Ce(e) !== "object" || Ce(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), o = new Set([].concat(r, n));
  return fe(o).every(function(a) {
    var i = e[a], s = t[a];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function U0(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Ce(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function tc(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var o = e[t], a = t - r;
  return a > 0 ? [].concat(fe(e.slice(0, r)), [o], fe(e.slice(r, t)), fe(e.slice(t + 1, n))) : a < 0 ? [].concat(fe(e.slice(0, t)), fe(e.slice(t + 1, r + 1)), [o], fe(e.slice(r + 1, n))) : e;
}
var G0 = ["name"], Nt = [];
function Ka(e, t, r, n, o, a) {
  return typeof e == "function" ? e(t, r, "source" in a ? {
    source: a.source
  } : {}) : n !== o;
}
var Ts = /* @__PURE__ */ function(e) {
  yr(r, e);
  var t = Cr(r);
  function r(n) {
    var o;
    if (st(this, r), o = t.call(this, n), j($e(o), "state", {
      resetCount: 0
    }), j($e(o), "cancelRegisterFunc", null), j($e(o), "mounted", !1), j($e(o), "touched", !1), j($e(o), "dirty", !1), j($e(o), "validatePromise", void 0), j($e(o), "prevValidating", void 0), j($e(o), "errors", Nt), j($e(o), "warnings", Nt), j($e(o), "cancelRegister", function() {
      var l = o.props, c = l.preserve, u = l.isListField, f = l.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, c, Ze(f)), o.cancelRegisterFunc = null;
    }), j($e(o), "getNamePath", function() {
      var l = o.props, c = l.name, u = l.fieldContext, f = u.prefixName, v = f === void 0 ? [] : f;
      return c !== void 0 ? [].concat(fe(v), fe(c)) : [];
    }), j($e(o), "getRules", function() {
      var l = o.props, c = l.rules, u = c === void 0 ? [] : c, f = l.fieldContext;
      return u.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), j($e(o), "refresh", function() {
      o.mounted && o.setState(function(l) {
        var c = l.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), j($e(o), "metaCache", null), j($e(o), "triggerMetaEvent", function(l) {
      var c = o.props.onMetaChange;
      if (c) {
        var u = M(M({}, o.getMeta()), {}, {
          destroy: l
        });
        gi(o.metaCache, u) || c(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), j($e(o), "onStoreChange", function(l, c, u) {
      var f = o.props, v = f.shouldUpdate, p = f.dependencies, h = p === void 0 ? [] : p, m = f.onReset, g = u.store, b = o.getNamePath(), y = o.getValue(l), x = o.getValue(g), w = c && on(c, b);
      switch (u.type === "valueUpdate" && u.source === "external" && !gi(y, x) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = Nt, o.warnings = Nt, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!c || w) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = Nt, o.warnings = Nt, o.triggerMetaEvent(), m == null || m(), o.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case "remove": {
          if (v && Ka(v, l, g, y, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var C = u.data;
          if (w) {
            "touched" in C && (o.touched = C.touched), "validating" in C && !("originRCField" in C) && (o.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (o.errors = C.errors || Nt), "warnings" in C && (o.warnings = C.warnings || Nt), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in C && on(c, b, !0)) {
            o.reRender();
            return;
          }
          if (v && !b.length && Ka(v, l, g, y, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var E = h.map(Ze);
          if (E.some(function(S) {
            return on(u.relatedFields, S);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!h.length || b.length || v) && Ka(v, l, g, y, x, u)) {
            o.reRender();
            return;
          }
          break;
      }
      v === !0 && o.reRender();
    }), j($e(o), "validateRules", function(l) {
      var c = o.getNamePath(), u = o.getValue(), f = l || {}, v = f.triggerName, p = f.validateOnly, h = p === void 0 ? !1 : p, m = Promise.resolve().then(/* @__PURE__ */ Mr(/* @__PURE__ */ pt().mark(function g() {
        var b, y, x, w, C, E, S;
        return pt().wrap(function(_) {
          for (; ; ) switch (_.prev = _.next) {
            case 0:
              if (o.mounted) {
                _.next = 2;
                break;
              }
              return _.abrupt("return", []);
            case 2:
              if (b = o.props, y = b.validateFirst, x = y === void 0 ? !1 : y, w = b.messageVariables, C = b.validateDebounce, E = o.getRules(), v && (E = E.filter(function(T) {
                return T;
              }).filter(function(T) {
                var F = T.validateTrigger;
                if (!F)
                  return !0;
                var z = Ui(F);
                return z.includes(v);
              })), !(C && v)) {
                _.next = 10;
                break;
              }
              return _.next = 8, new Promise(function(T) {
                setTimeout(T, C);
              });
            case 8:
              if (o.validatePromise === m) {
                _.next = 10;
                break;
              }
              return _.abrupt("return", []);
            case 10:
              return S = H0(c, u, E, l, x, w), S.catch(function(T) {
                return T;
              }).then(function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nt;
                if (o.validatePromise === m) {
                  var F;
                  o.validatePromise = null;
                  var z = [], I = [];
                  (F = T.forEach) === null || F === void 0 || F.call(T, function(L) {
                    var A = L.rule.warningOnly, O = L.errors, P = O === void 0 ? Nt : O;
                    A ? I.push.apply(I, fe(P)) : z.push.apply(z, fe(P));
                  }), o.errors = z, o.warnings = I, o.triggerMetaEvent(), o.reRender();
                }
              }), _.abrupt("return", S);
            case 13:
            case "end":
              return _.stop();
          }
        }, g);
      })));
      return h || (o.validatePromise = m, o.dirty = !0, o.errors = Nt, o.warnings = Nt, o.triggerMetaEvent(), o.reRender()), m;
    }), j($e(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), j($e(o), "isFieldTouched", function() {
      return o.touched;
    }), j($e(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var l = o.props.fieldContext, c = l.getInternalHooks(_r), u = c.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), j($e(o), "getErrors", function() {
      return o.errors;
    }), j($e(o), "getWarnings", function() {
      return o.warnings;
    }), j($e(o), "isListField", function() {
      return o.props.isListField;
    }), j($e(o), "isList", function() {
      return o.props.isList;
    }), j($e(o), "isPreserve", function() {
      return o.props.preserve;
    }), j($e(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var l = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return l;
    }), j($e(o), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var c = o.getMeta();
        return M(M({}, o.getOnlyChild(l(o.getControlled(), c, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = Nr(l);
      return u.length !== 1 || !/* @__PURE__ */ d.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), j($e(o), "getValue", function(l) {
      var c = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return Zt(l || c(!0), u);
    }), j($e(o), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = o.props, u = c.name, f = c.trigger, v = c.validateTrigger, p = c.getValueFromEvent, h = c.normalize, m = c.valuePropName, g = c.getValueProps, b = c.fieldContext, y = v !== void 0 ? v : b.validateTrigger, x = o.getNamePath(), w = b.getInternalHooks, C = b.getFieldsValue, E = w(_r), S = E.dispatch, $ = o.getValue(), _ = g || function(L) {
        return j({}, m, L);
      }, T = l[f], F = u !== void 0 ? _($) : {};
      process.env.NODE_ENV !== "production" && F && Object.keys(F).forEach(function(L) {
        Ue(typeof F[L] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(L, ")"));
      });
      var z = M(M({}, l), F);
      z[f] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var L, A = arguments.length, O = new Array(A), P = 0; P < A; P++)
          O[P] = arguments[P];
        p ? L = p.apply(void 0, O) : L = U0.apply(void 0, [m].concat(O)), h && (L = h(L, $, C(!0))), L !== $ && S({
          type: "updateValue",
          namePath: x,
          value: L
        }), T && T.apply(void 0, O);
      };
      var I = Ui(y || []);
      return I.forEach(function(L) {
        var A = z[L];
        z[L] = function() {
          A && A.apply(void 0, arguments);
          var O = o.props.rules;
          O && O.length && S({
            type: "validateField",
            namePath: x,
            triggerName: L
          });
        };
      }), z;
    }), n.fieldContext) {
      var a = n.fieldContext.getInternalHooks, i = a(_r), s = i.initEntityValue;
      s($e(o));
    }
    return o;
  }
  return lt(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, a = o.shouldUpdate, i = o.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, l = s(_r), c = l.registerField;
        this.cancelRegisterFunc = c(this);
      }
      a === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, a = this.props.children, i = this.getOnlyChild(a), s = i.child, l = i.isFunction, c;
      return l ? c = s : /* @__PURE__ */ d.isValidElement(s) ? c = /* @__PURE__ */ d.cloneElement(s, this.getControlled(s.props)) : (Ue(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ d.createElement(d.Fragment, {
        key: o
      }, c);
    }
  }]), r;
}(d.Component);
j(Ts, "contextType", vn);
j(Ts, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Ed(e) {
  var t, r = e.name, n = ut(e, G0), o = d.useContext(vn), a = d.useContext(qo), i = r !== void 0 ? Ze(r) : void 0, s = (t = n.isListField) !== null && t !== void 0 ? t : !!a, l = "keep";
  return s || (l = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && s && i.length <= 1 && Ue(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ d.createElement(Ts, De({
    key: l,
    name: i,
    isListField: s
  }, n, {
    fieldContext: o
  }));
}
function X0(e) {
  var t = e.name, r = e.initialValue, n = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, s = d.useContext(vn), l = d.useContext(qo), c = d.useRef({
    keys: [],
    id: 0
  }), u = c.current, f = d.useMemo(function() {
    var m = Ze(s.prefixName) || [];
    return [].concat(fe(m), fe(Ze(t)));
  }, [s.prefixName, t]), v = d.useMemo(function() {
    return M(M({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), p = d.useMemo(function() {
    return {
      getKey: function(g) {
        var b = f.length, y = g[b];
        return [u.keys[y], g.slice(b + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return Ue(!1, "Form.List only accepts function as children."), null;
  var h = function(g, b, y) {
    var x = y.source;
    return x === "internal" ? !1 : g !== b;
  };
  return /* @__PURE__ */ d.createElement(qo.Provider, {
    value: p
  }, /* @__PURE__ */ d.createElement(vn.Provider, {
    value: v
  }, /* @__PURE__ */ d.createElement(Ed, {
    name: [],
    shouldUpdate: h,
    rules: o,
    validateTrigger: a,
    initialValue: r,
    isList: !0,
    isListField: i != null ? i : !!l
  }, function(m, g) {
    var b = m.value, y = b === void 0 ? [] : b, x = m.onChange, w = s.getFieldValue, C = function() {
      var _ = w(f || []);
      return _ || [];
    }, E = {
      add: function(_, T) {
        var F = C();
        T >= 0 && T <= F.length ? (u.keys = [].concat(fe(u.keys.slice(0, T)), [u.id], fe(u.keys.slice(T))), x([].concat(fe(F.slice(0, T)), [_], fe(F.slice(T))))) : (process.env.NODE_ENV !== "production" && (T < 0 || T > F.length) && Ue(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(fe(u.keys), [u.id]), x([].concat(fe(F), [_]))), u.id += 1;
      },
      remove: function(_) {
        var T = C(), F = new Set(Array.isArray(_) ? _ : [_]);
        F.size <= 0 || (u.keys = u.keys.filter(function(z, I) {
          return !F.has(I);
        }), x(T.filter(function(z, I) {
          return !F.has(I);
        })));
      },
      move: function(_, T) {
        if (_ !== T) {
          var F = C();
          _ < 0 || _ >= F.length || T < 0 || T >= F.length || (u.keys = tc(u.keys, _, T), x(tc(F, _, T)));
        }
      }
    }, S = y || [];
    return Array.isArray(S) || (S = [], process.env.NODE_ENV !== "production" && Ue(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(S.map(function($, _) {
      var T = u.keys[_];
      return T === void 0 && (u.keys[_] = u.id, T = u.keys[_], u.id += 1), {
        name: _,
        key: T,
        isListField: !0
      };
    }), E, g);
  })));
}
function K0(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(o, a) {
    e.forEach(function(i, s) {
      i.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        r -= 1, n[s] = l, !(r > 0) && (t && a(n), o(n));
      });
    });
  }) : Promise.resolve([]);
}
var wd = "__@field_split__";
function Ya(e) {
  return e.map(function(t) {
    return "".concat(Ce(t), ":").concat(t);
  }).join(wd);
}
var Ur = /* @__PURE__ */ function() {
  function e() {
    st(this, e), j(this, "kvs", /* @__PURE__ */ new Map());
  }
  return lt(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(Ya(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(Ya(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = this.get(r), a = n(o);
      a ? this.set(r, a) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(Ya(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return fe(this.kvs.entries()).map(function(n) {
        var o = Y(n, 2), a = o[0], i = o[1], s = a.split(wd);
        return r({
          key: s.map(function(l) {
            var c = l.match(/^([^:]*):(.*)$/), u = Y(c, 3), f = u[1], v = u[2];
            return f === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var o = n.key, a = n.value;
        return r[o.join(".")] = a, null;
      }), r;
    }
  }]), e;
}(), Y0 = ["name"], Z0 = /* @__PURE__ */ lt(function e(t) {
  var r = this;
  st(this, e), j(this, "formHooked", !1), j(this, "forceRootUpdate", void 0), j(this, "subscribable", !0), j(this, "store", {}), j(this, "fieldEntities", []), j(this, "initialValues", {}), j(this, "callbacks", {}), j(this, "validateMessages", null), j(this, "preserve", null), j(this, "lastValidatePromise", null), j(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), j(this, "getInternalHooks", function(n) {
    return n === _r ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (Ue(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), j(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), j(this, "prevWithoutPreserves", null), j(this, "setInitialValues", function(n, o) {
    if (r.initialValues = n || {}, o) {
      var a, i = Qr(n, r.store);
      (a = r.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var l = s.key;
        i = Vt(i, l, Zt(n, l));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), j(this, "destroyForm", function(n) {
    if (n)
      r.updateStore({});
    else {
      var o = new Ur();
      r.getFieldEntities(!0).forEach(function(a) {
        r.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), r.prevWithoutPreserves = o;
    }
  }), j(this, "getInitialValue", function(n) {
    var o = Zt(r.initialValues, n);
    return n.length ? Qr(o) : o;
  }), j(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), j(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), j(this, "setPreserve", function(n) {
    r.preserve = n;
  }), j(this, "watchList", []), j(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(o) {
        return o !== n;
      });
    };
  }), j(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var o = r.getFieldsValue(), a = r.getFieldsValue(!0);
      r.watchList.forEach(function(i) {
        i(o, a, n);
      });
    }
  }), j(this, "timeoutId", null), j(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window != "undefined" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || Ue(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), j(this, "updateStore", function(n) {
    r.store = n;
  }), j(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : r.fieldEntities;
  }), j(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Ur();
    return r.getFieldEntities(n).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), j(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var o = r.getFieldsMap(!0);
    return n.map(function(a) {
      var i = Ze(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: Ze(a)
      };
    });
  }), j(this, "getFieldsValue", function(n, o) {
    r.warningUnhooked();
    var a, i, s;
    if (n === !0 || Array.isArray(n) ? (a = n, i = o) : n && Ce(n) === "object" && (s = n.strict, i = n.filter), a === !0 && !i)
      return r.store;
    var l = r.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), c = [];
    return l.forEach(function(u) {
      var f, v, p = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var h, m;
        if ((h = (m = u).isList) !== null && h !== void 0 && h.call(m))
          return;
      } else if (!a && (f = (v = u).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!i)
        c.push(p);
      else {
        var g = "getMeta" in u ? u.getMeta() : null;
        i(g) && c.push(p);
      }
    }), ec(r.store, c.map(Ze));
  }), j(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var o = Ze(n);
    return Zt(r.store, o);
  }), j(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntitiesForNamePathList(n);
    return o.map(function(a, i) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: Ze(n[i]),
        errors: [],
        warnings: []
      };
    });
  }), j(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var o = Ze(n), a = r.getFieldsError([o])[0];
    return a.errors;
  }), j(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var o = Ze(n), a = r.getFieldsError([o])[0];
    return a.warnings;
  }), j(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    var i = o[0], s = o[1], l, c = !1;
    o.length === 0 ? l = null : o.length === 1 ? Array.isArray(i) ? (l = i.map(Ze), c = !1) : (l = null, c = i) : (l = i.map(Ze), c = s);
    var u = r.getFieldEntities(!0), f = function(g) {
      return g.isFieldTouched();
    };
    if (!l)
      return c ? u.every(function(m) {
        return f(m) || m.isList();
      }) : u.some(f);
    var v = new Ur();
    l.forEach(function(m) {
      v.set(m, []);
    }), u.forEach(function(m) {
      var g = m.getNamePath();
      l.forEach(function(b) {
        b.every(function(y, x) {
          return g[x] === y;
        }) && v.update(b, function(y) {
          return [].concat(fe(y), [m]);
        });
      });
    });
    var p = function(g) {
      return g.some(f);
    }, h = v.map(function(m) {
      var g = m.value;
      return g;
    });
    return c ? h.every(p) : h.some(p);
  }), j(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), j(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntities();
    if (!n)
      return o.some(function(i) {
        return i.isFieldValidating();
      });
    var a = n.map(Ze);
    return o.some(function(i) {
      var s = i.getNamePath();
      return on(a, s) && i.isFieldValidating();
    });
  }), j(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), j(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new Ur(), a = r.getFieldEntities(!0);
    a.forEach(function(l) {
      var c = l.props.initialValue, u = l.getNamePath();
      if (c !== void 0) {
        var f = o.get(u) || /* @__PURE__ */ new Set();
        f.add({
          entity: l,
          value: c
        }), o.set(u, f);
      }
    });
    var i = function(c) {
      c.forEach(function(u) {
        var f = u.props.initialValue;
        if (f !== void 0) {
          var v = u.getNamePath(), p = r.getInitialValue(v);
          if (p !== void 0)
            Ue(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var h = o.get(v);
            if (h && h.size > 1)
              Ue(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var m = r.getFieldValue(v), g = u.isListField();
              !g && (!n.skipExist || m === void 0) && r.updateStore(Vt(r.store, v, fe(h)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(l) {
      var c = o.get(l);
      if (c) {
        var u;
        (u = s).push.apply(u, fe(fe(c).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = a, i(s);
  }), j(this, "resetFields", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (!n) {
      r.updateStore(Qr(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var a = n.map(Ze);
    a.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(Vt(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: a
    }), r.notifyObservers(o, a, {
      type: "reset"
    }), r.notifyWatch(a);
  }), j(this, "setFields", function(n) {
    r.warningUnhooked();
    var o = r.store, a = [];
    n.forEach(function(i) {
      var s = i.name, l = ut(i, Y0), c = Ze(s);
      a.push(c), "value" in l && r.updateStore(Vt(r.store, c, l.value)), r.notifyObservers(o, [c], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(a);
  }), j(this, "getFields", function() {
    var n = r.getFieldEntities(!0), o = n.map(function(a) {
      var i = a.getNamePath(), s = a.getMeta(), l = M(M({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return o;
  }), j(this, "initEntityValue", function(n) {
    var o = n.props.initialValue;
    if (o !== void 0) {
      var a = n.getNamePath(), i = Zt(r.store, a);
      i === void 0 && r.updateStore(Vt(r.store, a, o));
    }
  }), j(this, "isMergedPreserve", function(n) {
    var o = n !== void 0 ? n : r.preserve;
    return o != null ? o : !0;
  }), j(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var o = n.getNamePath();
    if (r.notifyWatch([o]), n.props.initialValue !== void 0) {
      var a = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(a, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(f) {
        return f !== n;
      }), !r.isMergedPreserve(s) && (!i || l.length > 1)) {
        var c = i ? void 0 : r.getInitialValue(o);
        if (o.length && r.getFieldValue(o) !== c && r.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !xd(f.getNamePath(), o)
          );
        })) {
          var u = r.store;
          r.updateStore(Vt(u, o, c, !0)), r.notifyObservers(u, [o], {
            type: "remove"
          }), r.triggerDependenciesUpdate(u, o);
        }
      }
      r.notifyWatch([o]);
    };
  }), j(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var o = n.namePath, a = n.value;
        r.updateValue(o, a);
        break;
      }
      case "validateField": {
        var i = n.namePath, s = n.triggerName;
        r.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), j(this, "notifyObservers", function(n, o, a) {
    if (r.subscribable) {
      var i = M(M({}, a), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(n, o, i);
      });
    } else
      r.forceRootUpdate();
  }), j(this, "triggerDependenciesUpdate", function(n, o) {
    var a = r.getDependencyChildrenFields(o);
    return a.length && r.validateFields(a), r.notifyObservers(n, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(fe(a))
    }), a;
  }), j(this, "updateValue", function(n, o) {
    var a = Ze(n), i = r.store;
    r.updateStore(Vt(r.store, a, o)), r.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([a]);
    var s = r.triggerDependenciesUpdate(i, a), l = r.callbacks.onValuesChange;
    if (l) {
      var c = ec(r.store, [a]);
      l(c, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([a].concat(fe(s)));
  }), j(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (n) {
      var a = Qr(r.store, n);
      r.updateStore(a);
    }
    r.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), j(this, "setFieldValue", function(n, o) {
    r.setFields([{
      name: n,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), j(this, "getDependencyChildrenFields", function(n) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new Ur();
    r.getFieldEntities().forEach(function(l) {
      var c = l.props.dependencies;
      (c || []).forEach(function(u) {
        var f = Ze(u);
        i.update(f, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(l), v;
        });
      });
    });
    var s = function l(c) {
      var u = i.get(c) || /* @__PURE__ */ new Set();
      u.forEach(function(f) {
        if (!o.has(f)) {
          o.add(f);
          var v = f.getNamePath();
          f.isFieldDirty() && v.length && (a.push(v), l(v));
        }
      });
    };
    return s(n), a;
  }), j(this, "triggerOnFieldsChange", function(n, o) {
    var a = r.callbacks.onFieldsChange;
    if (a) {
      var i = r.getFields();
      if (o) {
        var s = new Ur();
        o.forEach(function(c) {
          var u = c.name, f = c.errors;
          s.set(u, f);
        }), i.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var l = i.filter(function(c) {
        var u = c.name;
        return on(n, u);
      });
      l.length && a(l, i);
    }
  }), j(this, "validateFields", function(n, o) {
    r.warningUnhooked();
    var a, i;
    Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (a = n, i = o) : i = n;
    var s = !!a, l = s ? a.map(Ze) : [], c = [], u = String(Date.now()), f = /* @__PURE__ */ new Set(), v = i || {}, p = v.recursive, h = v.dirty;
    r.getFieldEntities(!0).forEach(function(y) {
      if (s || l.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(h && !y.isFieldDirty())) {
        var x = y.getNamePath();
        if (f.add(x.join(u)), !s || on(l, x, p)) {
          var w = y.validateRules(M({
            validateMessages: M(M({}, Sd), r.validateMessages)
          }, i));
          c.push(w.then(function() {
            return {
              name: x,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var E, S = [], $ = [];
            return (E = C.forEach) === null || E === void 0 || E.call(C, function(_) {
              var T = _.rule.warningOnly, F = _.errors;
              T ? $.push.apply($, fe(F)) : S.push.apply(S, fe(F));
            }), S.length ? Promise.reject({
              name: x,
              errors: S,
              warnings: $
            }) : {
              name: x,
              errors: S,
              warnings: $
            };
          }));
        }
      }
    });
    var m = K0(c);
    r.lastValidatePromise = m, m.catch(function(y) {
      return y;
    }).then(function(y) {
      var x = y.map(function(w) {
        var C = w.name;
        return C;
      });
      r.notifyObservers(r.store, x, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(x, y);
    });
    var g = m.then(function() {
      return r.lastValidatePromise === m ? Promise.resolve(r.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(y) {
      var x = y.filter(function(w) {
        return w && w.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(l),
        errorFields: x,
        outOfDate: r.lastValidatePromise !== m
      });
    });
    g.catch(function(y) {
      return y;
    });
    var b = l.filter(function(y) {
      return f.has(y.join(u));
    });
    return r.triggerOnFieldsChange(b), g;
  }), j(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var o = r.callbacks.onFinish;
      if (o)
        try {
          o(n);
        } catch (a) {
          console.error(a);
        }
    }).catch(function(n) {
      var o = r.callbacks.onFinishFailed;
      o && o(n);
    });
  }), this.forceRootUpdate = t;
});
function $d(e) {
  var t = d.useRef(), r = d.useState({}), n = Y(r, 2), o = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new Z0(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var ts = /* @__PURE__ */ d.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Q0 = function(t) {
  var r = t.validateMessages, n = t.onFormChange, o = t.onFormFinish, a = t.children, i = d.useContext(ts), s = d.useRef({});
  return /* @__PURE__ */ d.createElement(ts.Provider, {
    value: M(M({}, i), {}, {
      validateMessages: M(M({}, i.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, u) {
        n && n(c, {
          changedFields: u,
          forms: s.current
        }), i.triggerFormChange(c, u);
      },
      triggerFormFinish: function(c, u) {
        o && o(c, {
          values: u,
          forms: s.current
        }), i.triggerFormFinish(c, u);
      },
      registerForm: function(c, u) {
        c && (s.current = M(M({}, s.current), {}, j({}, c, u))), i.registerForm(c, u);
      },
      unregisterForm: function(c) {
        var u = M({}, s.current);
        delete u[c], s.current = u, i.unregisterForm(c);
      }
    })
  }, a);
}, J0 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], eb = function(t, r) {
  var n = t.name, o = t.initialValues, a = t.fields, i = t.form, s = t.preserve, l = t.children, c = t.component, u = c === void 0 ? "form" : c, f = t.validateMessages, v = t.validateTrigger, p = v === void 0 ? "onChange" : v, h = t.onValuesChange, m = t.onFieldsChange, g = t.onFinish, b = t.onFinishFailed, y = t.clearOnDestroy, x = ut(t, J0), w = d.useRef(null), C = d.useContext(ts), E = $d(i), S = Y(E, 1), $ = S[0], _ = $.getInternalHooks(_r), T = _.useSubscribe, F = _.setInitialValues, z = _.setCallbacks, I = _.setValidateMessages, L = _.setPreserve, A = _.destroyForm;
  d.useImperativeHandle(r, function() {
    return M(M({}, $), {}, {
      nativeElement: w.current
    });
  }), d.useEffect(function() {
    return C.registerForm(n, $), function() {
      C.unregisterForm(n);
    };
  }, [C, $, n]), I(M(M({}, C.validateMessages), f)), z({
    onValuesChange: h,
    onFieldsChange: function(B) {
      if (C.triggerFormChange(n, B), m) {
        for (var Q = arguments.length, ie = new Array(Q > 1 ? Q - 1 : 0), ve = 1; ve < Q; ve++)
          ie[ve - 1] = arguments[ve];
        m.apply(void 0, [B].concat(ie));
      }
    },
    onFinish: function(B) {
      C.triggerFormFinish(n, B), g && g(B);
    },
    onFinishFailed: b
  }), L(s);
  var O = d.useRef(null);
  F(o, !O.current), O.current || (O.current = !0), d.useEffect(
    function() {
      return function() {
        return A(y);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var P, R = typeof l == "function";
  if (R) {
    var D = $.getFieldsValue(!0);
    P = l(D, $);
  } else
    P = l;
  T(!R);
  var V = d.useRef();
  d.useEffect(function() {
    q0(V.current || [], a || []) || $.setFields(a || []), V.current = a;
  }, [a, $]);
  var H = d.useMemo(function() {
    return M(M({}, $), {}, {
      validateTrigger: p
    });
  }, [$, p]), q = /* @__PURE__ */ d.createElement(qo.Provider, {
    value: null
  }, /* @__PURE__ */ d.createElement(vn.Provider, {
    value: H
  }, P));
  return u === !1 ? q : /* @__PURE__ */ d.createElement(u, De({}, x, {
    ref: w,
    onSubmit: function(B) {
      B.preventDefault(), B.stopPropagation(), $.submit();
    },
    onReset: function(B) {
      var Q;
      B.preventDefault(), $.resetFields(), (Q = x.onReset) === null || Q === void 0 || Q.call(x, B);
    }
  }), q);
};
function rc(e) {
  try {
    return JSON.stringify(e);
  } catch (t) {
    return Math.random();
  }
}
var tb = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = Oe(t);
  Ue(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function rb() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = t[1], a = o === void 0 ? {} : o, i = u0(a) ? {
    form: a
  } : a, s = i.form, l = Qt(), c = Y(l, 2), u = c[0], f = c[1], v = Tr(function() {
    return rc(u);
  }, [u]), p = Oe(v);
  p.current = v;
  var h = yt(vn), m = s || h, g = m && m._init;
  process.env.NODE_ENV !== "production" && Ue(t.length === 2 ? s ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var b = Ze(n), y = Oe(b);
  return y.current = b, tb(b), tt(
    function() {
      if (g) {
        var x = m.getFieldsValue, w = m.getInternalHooks, C = w(_r), E = C.registerWatch, S = function(F, z) {
          var I = i.preserve ? z : F;
          return typeof n == "function" ? n(I) : Zt(I, y.current);
        }, $ = E(function(T, F) {
          var z = S(T, F), I = rc(z);
          p.current !== I && (p.current = I, f(z));
        }), _ = S(x(), x(!0));
        return u !== _ && f(_), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), u;
}
var nb = /* @__PURE__ */ d.forwardRef(eb), Zn = nb;
Zn.FormProvider = Q0;
Zn.Field = Ed;
Zn.List = X0;
Zn.useForm = $d;
Zn.useWatch = rb;
const gn = /* @__PURE__ */ d.createContext({});
process.env.NODE_ENV !== "production" && (gn.displayName = "FormItemInputContext");
const ob = (e) => {
  let {
    children: t,
    status: r,
    override: n
  } = e;
  const o = d.useContext(gn), a = d.useMemo(() => {
    const i = Object.assign({}, o);
    return n && delete i.isFormItemInput, r && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [r, n, o]);
  return /* @__PURE__ */ d.createElement(gn.Provider, {
    value: a
  }, t);
}, ab = /* @__PURE__ */ d.createContext(void 0), rs = (e) => {
  const {
    space: t,
    form: r,
    children: n
  } = e;
  if (n == null)
    return null;
  let o = n;
  return r && (o = /* @__PURE__ */ k.createElement(ob, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ k.createElement(Dp, null, o)), o;
};
var ib = function(t) {
  if (mt() && window.document.documentElement) {
    var r = Array.isArray(t) ? t : [t], n = window.document.documentElement;
    return r.some(function(o) {
      return o in n.style;
    });
  }
  return !1;
};
function nc(e, t) {
  return ib(e);
}
const sb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, lb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, cb = (e, t) => {
  const {
    prefixCls: r,
    componentCls: n,
    gridColumns: o
  } = e, a = {};
  for (let i = o; i >= 0; i--)
    i === 0 ? (a[`${n}${t}-${i}`] = {
      display: "none"
    }, a[`${n}-push-${i}`] = {
      insetInlineStart: "auto"
    }, a[`${n}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, a[`${n}${t}-push-${i}`] = {
      insetInlineStart: "auto"
    }, a[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, a[`${n}${t}-offset-${i}`] = {
      marginInlineStart: 0
    }, a[`${n}${t}-order-${i}`] = {
      order: 0
    }) : (a[`${n}${t}-${i}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        "--ant-display": "block",
        // Fallback to display if variable not support
        display: "block"
      },
      {
        display: "var(--ant-display)",
        flex: `0 0 ${i / o * 100}%`,
        maxWidth: `${i / o * 100}%`
      }
    ], a[`${n}${t}-push-${i}`] = {
      insetInlineStart: `${i / o * 100}%`
    }, a[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: `${i / o * 100}%`
    }, a[`${n}${t}-offset-${i}`] = {
      marginInlineStart: `${i / o * 100}%`
    }, a[`${n}${t}-order-${i}`] = {
      order: i
    });
  return a[`${n}${t}-flex`] = {
    flex: `var(--${r}${t}-flex)`
  }, a;
}, ns = (e, t) => cb(e, t), ub = (e, t, r) => ({
  [`@media (min-width: ${we(t)})`]: Object.assign({}, ns(e, r))
}), db = () => ({}), fb = () => ({}), vb = kt("Grid", sb, db), gb = (e) => ({
  xs: e.screenXSMin,
  sm: e.screenSMMin,
  md: e.screenMDMin,
  lg: e.screenLGMin,
  xl: e.screenXLMin,
  xxl: e.screenXXLMin
}), mb = kt("Grid", (e) => {
  const t = ht(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), r = gb(t);
  return delete r.xs, [lb(t), ns(t, ""), ns(t, "-xs"), Object.keys(r).map((n) => ub(t, r[n], `-${n}`)).reduce((n, o) => Object.assign(Object.assign({}, n), o), {})];
}, fb), pb = function() {
  if (typeof navigator == "undefined" || typeof window == "undefined")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
function hb(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, o = e.arrowPos, a = n || {}, i = a.className, s = a.content, l = o.x, c = l === void 0 ? 0 : l, u = o.y, f = u === void 0 ? 0 : u, v = d.useRef();
  if (!r || !r.points)
    return null;
  var p = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var h = r.points[0], m = r.points[1], g = h[0], b = h[1], y = m[0], x = m[1];
    g === y || !["t", "b"].includes(g) ? p.top = f : g === "t" ? p.top = 0 : p.bottom = 0, b === x || !["l", "r"].includes(b) ? p.left = c : b === "l" ? p.left = 0 : p.right = 0;
  }
  return /* @__PURE__ */ d.createElement("div", {
    ref: v,
    className: ne("".concat(t, "-arrow"), i),
    style: p
  }, s);
}
function bb(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, o = e.mask, a = e.motion;
  return o ? /* @__PURE__ */ d.createElement(Xn, De({}, a, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ d.createElement("div", {
      style: {
        zIndex: n
      },
      className: ne("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Od = /* @__PURE__ */ d.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Od.displayName = "PopupContent");
var Rd = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, o = e.prefixCls, a = e.style, i = e.target, s = e.onVisibleChanged, l = e.open, c = e.keepDom, u = e.fresh, f = e.onClick, v = e.mask, p = e.arrow, h = e.arrowPos, m = e.align, g = e.motion, b = e.maskMotion, y = e.forceRender, x = e.getPopupContainer, w = e.autoDestroy, C = e.portal, E = e.zIndex, S = e.onMouseEnter, $ = e.onMouseLeave, _ = e.onPointerEnter, T = e.onPointerDownCapture, F = e.ready, z = e.offsetX, I = e.offsetY, L = e.offsetR, A = e.offsetB, O = e.onAlign, P = e.onPrepare, R = e.stretch, D = e.targetWidth, V = e.targetHeight, H = typeof r == "function" ? r() : r, q = l || c, U = (x == null ? void 0 : x.length) > 0, B = d.useState(!x || !U), Q = Y(B, 2), ie = Q[0], ve = Q[1];
  if (qe(function() {
    !ie && U && i && ve(!0);
  }, [ie, U, i]), !ie)
    return null;
  var oe = "auto", ae = {
    left: "-1000vw",
    top: "-1000vh",
    right: oe,
    bottom: oe
  };
  if (F || !l) {
    var me, pe = m.points, se = m.dynamicInset || ((me = m._experimental) === null || me === void 0 ? void 0 : me.dynamicInset), ge = se && pe[0][1] === "r", X = se && pe[0][0] === "b";
    ge ? (ae.right = L, ae.left = oe) : (ae.left = z, ae.right = oe), X ? (ae.bottom = A, ae.top = oe) : (ae.top = I, ae.bottom = oe);
  }
  var ue = {};
  return R && (R.includes("height") && V ? ue.height = V : R.includes("minHeight") && V && (ue.minHeight = V), R.includes("width") && D ? ue.width = D : R.includes("minWidth") && D && (ue.minWidth = D)), l || (ue.pointerEvents = "none"), /* @__PURE__ */ d.createElement(C, {
    open: y || q,
    getContainer: x && function() {
      return x(i);
    },
    autoDestroy: w
  }, /* @__PURE__ */ d.createElement(bb, {
    prefixCls: o,
    open: l,
    zIndex: E,
    mask: v,
    motion: b
  }), /* @__PURE__ */ d.createElement(mn, {
    onResize: O,
    disabled: !l
  }, function(re) {
    return /* @__PURE__ */ d.createElement(Xn, De({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(o, "-hidden")
    }, g, {
      onAppearPrepare: P,
      onEnterPrepare: P,
      visible: l,
      onVisibleChanged: function(he) {
        var ye;
        g == null || (ye = g.onVisibleChanged) === null || ye === void 0 || ye.call(g, he), s(he);
      }
    }), function(de, he) {
      var ye = de.className, Te = de.style, xe = ne(o, ye, n);
      return /* @__PURE__ */ d.createElement("div", {
        ref: br(re, t, he),
        className: xe,
        style: M(M(M(M({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, ae), ue), Te), {}, {
          boxSizing: "border-box",
          zIndex: E
        }, a),
        onMouseEnter: S,
        onMouseLeave: $,
        onPointerEnter: _,
        onClick: f,
        onPointerDownCapture: T
      }, p && /* @__PURE__ */ d.createElement(hb, {
        prefixCls: o,
        arrow: p,
        arrowPos: h,
        align: m
      }), /* @__PURE__ */ d.createElement(Od, {
        cache: !l && !u
      }, H));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Rd.displayName = "Popup");
var _d = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, o = Un(r), a = d.useCallback(function(s) {
    us(t, n ? n(s) : s);
  }, [n]), i = Ko(a, Yo(r));
  return o ? /* @__PURE__ */ d.cloneElement(r, {
    ref: i
  }) : r;
});
process.env.NODE_ENV !== "production" && (_d.displayName = "TriggerWrapper");
var oc = /* @__PURE__ */ d.createContext(null);
function ac(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function yb(e, t, r, n) {
  return d.useMemo(function() {
    var o = ac(r != null ? r : t), a = ac(n != null ? n : t), i = new Set(o), s = new Set(a);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, r, n]);
}
function Cb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Sb(e, t, r, n) {
  for (var o = r.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
    var s, l = a[i];
    if (Cb((s = e[l]) === null || s === void 0 ? void 0 : s.points, o, n))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function ic(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function Qn(e) {
  return e.ownerDocument.defaultView;
}
function os(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var o = Qn(r).getComputedStyle(r), a = o.overflowX, i = o.overflowY, s = o.overflow;
    [a, i, s].some(function(l) {
      return n.includes(l);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function kn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Rn(e) {
  return kn(parseFloat(e), 0);
}
function sc(e, t) {
  var r = M({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var o = Qn(n).getComputedStyle(n), a = o.overflow, i = o.overflowClipMargin, s = o.borderTopWidth, l = o.borderBottomWidth, c = o.borderLeftWidth, u = o.borderRightWidth, f = n.getBoundingClientRect(), v = n.offsetHeight, p = n.clientHeight, h = n.offsetWidth, m = n.clientWidth, g = Rn(s), b = Rn(l), y = Rn(c), x = Rn(u), w = kn(Math.round(f.width / h * 1e3) / 1e3), C = kn(Math.round(f.height / v * 1e3) / 1e3), E = (h - m - y - x) * w, S = (v - p - g - b) * C, $ = g * C, _ = b * C, T = y * w, F = x * w, z = 0, I = 0;
      if (a === "clip") {
        var L = Rn(i);
        z = L * w, I = L * C;
      }
      var A = f.x + T - z, O = f.y + $ - I, P = A + f.width + 2 * z - T - F - E, R = O + f.height + 2 * I - $ - _ - S;
      r.left = Math.max(r.left, A), r.top = Math.max(r.top, O), r.right = Math.min(r.right, P), r.bottom = Math.min(r.bottom, R);
    }
  }), r;
}
function lc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function cc(e, t) {
  var r = t || [], n = Y(r, 2), o = n[0], a = n[1];
  return [lc(e.width, o), lc(e.height, a)];
}
function uc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Gr(e, t) {
  var r = t[0], n = t[1], o, a;
  return r === "t" ? a = e.y : r === "b" ? a = e.y + e.height : a = e.y + e.height / 2, n === "l" ? o = e.x : n === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: a
  };
}
function vr(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, o) {
    return o === t ? r[n] || "c" : n;
  }).join("");
}
function xb(e, t, r, n, o, a, i) {
  var s = d.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[n] || {}
  }), l = Y(s, 2), c = l[0], u = l[1], f = d.useRef(0), v = d.useMemo(function() {
    return t ? os(t) : [];
  }, [t]), p = d.useRef({}), h = function() {
    p.current = {};
  };
  e || h();
  var m = vt(function() {
    if (t && r && e) {
      let Pt = function(Hr, dr) {
        var fr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : be, En = B.x + Hr, fo = B.y + dr, $a = En + ge, Oa = fo + se, Ra = Math.max(En, fr.left), le = Math.max(fo, fr.top), Se = Math.min($a, fr.right), We = Math.min(Oa, fr.bottom);
        return Math.max(0, (Se - Ra) * (We - le));
      }, uo = function() {
        Ut = B.y + je, Lt = Ut + se, _t = B.x + Ae, ur = _t + ge;
      };
      var y, x, w, C, E = t, S = E.ownerDocument, $ = Qn(E), _ = $.getComputedStyle(E), T = _.width, F = _.height, z = _.position, I = E.style.left, L = E.style.top, A = E.style.right, O = E.style.bottom, P = E.style.overflow, R = M(M({}, o[n]), a), D = S.createElement("div");
      (y = E.parentElement) === null || y === void 0 || y.appendChild(D), D.style.left = "".concat(E.offsetLeft, "px"), D.style.top = "".concat(E.offsetTop, "px"), D.style.position = z, D.style.height = "".concat(E.offsetHeight, "px"), D.style.width = "".concat(E.offsetWidth, "px"), E.style.left = "0", E.style.top = "0", E.style.right = "auto", E.style.bottom = "auto", E.style.overflow = "hidden";
      var V;
      if (Array.isArray(r))
        V = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var H, q, U = r.getBoundingClientRect();
        U.x = (H = U.x) !== null && H !== void 0 ? H : U.left, U.y = (q = U.y) !== null && q !== void 0 ? q : U.top, V = {
          x: U.x,
          y: U.y,
          width: U.width,
          height: U.height
        };
      }
      var B = E.getBoundingClientRect();
      B.x = (x = B.x) !== null && x !== void 0 ? x : B.left, B.y = (w = B.y) !== null && w !== void 0 ? w : B.top;
      var Q = S.documentElement, ie = Q.clientWidth, ve = Q.clientHeight, oe = Q.scrollWidth, ae = Q.scrollHeight, me = Q.scrollTop, pe = Q.scrollLeft, se = B.height, ge = B.width, X = V.height, ue = V.width, re = {
        left: 0,
        top: 0,
        right: ie,
        bottom: ve
      }, de = {
        left: -pe,
        top: -me,
        right: oe - pe,
        bottom: ae - me
      }, he = R.htmlRegion, ye = "visible", Te = "visibleFirst";
      he !== "scroll" && he !== Te && (he = ye);
      var xe = he === Te, Re = sc(de, v), J = sc(re, v), be = he === ye ? J : Re, Ee = xe ? J : be;
      E.style.left = "auto", E.style.top = "auto", E.style.right = "0", E.style.bottom = "0";
      var Ne = E.getBoundingClientRect();
      E.style.left = I, E.style.top = L, E.style.right = A, E.style.bottom = O, E.style.overflow = P, (C = E.parentElement) === null || C === void 0 || C.removeChild(D);
      var Ve = kn(Math.round(ge / parseFloat(T) * 1e3) / 1e3), Ie = kn(Math.round(se / parseFloat(F) * 1e3) / 1e3);
      if (Ve === 0 || Ie === 0 || In(r) && !od(r))
        return;
      var ke = R.offset, N = R.targetOffset, W = cc(B, ke), Z = Y(W, 2), ee = Z[0], te = Z[1], ce = cc(V, N), G = Y(ce, 2), K = G[0], _e = G[1];
      V.x -= K, V.y -= _e;
      var Qe = R.points || [], ct = Y(Qe, 2), Ot = ct[0], er = ct[1], Rt = uc(er), dt = uc(Ot), Wt = Gr(V, Rt), Je = Gr(B, dt), Ct = M({}, R), Ae = Wt.x - Je.x + ee, je = Wt.y - Je.y + te, at = Pt(Ae, je), qt = Pt(Ae, je, J), Sr = Gr(V, ["t", "l"]), Me = Gr(B, ["t", "l"]), xr = Gr(V, ["b", "r"]), Er = Gr(B, ["b", "r"]), ze = R.overflow || {}, Xe = ze.adjustX, bt = ze.adjustY, ft = ze.shiftX, Ft = ze.shiftY, wr = function(dr) {
        return typeof dr == "boolean" ? dr : dr >= 0;
      }, Ut, Lt, _t, ur;
      uo();
      var tr = wr(bt), Dr = dt[0] === Rt[0];
      if (tr && dt[0] === "t" && (Lt > Ee.bottom || p.current.bt)) {
        var He = je;
        Dr ? He -= se - X : He = Sr.y - Er.y - te;
        var eo = Pt(Ae, He), va = Pt(Ae, He, J);
        // Of course use larger one
        eo > at || eo === at && (!xe || // Choose recommend one
        va >= qt) ? (p.current.bt = !0, je = He, te = -te, Ct.points = [vr(dt, 0), vr(Rt, 0)]) : p.current.bt = !1;
      }
      if (tr && dt[0] === "b" && (Ut < Ee.top || p.current.tb)) {
        var $r = je;
        Dr ? $r += se - X : $r = xr.y - Me.y - te;
        var to = Pt(Ae, $r), ga = Pt(Ae, $r, J);
        // Of course use larger one
        to > at || to === at && (!xe || // Choose recommend one
        ga >= qt) ? (p.current.tb = !0, je = $r, te = -te, Ct.points = [vr(dt, 0), vr(Rt, 0)]) : p.current.tb = !1;
      }
      var ro = wr(Xe), no = dt[1] === Rt[1];
      if (ro && dt[1] === "l" && (ur > Ee.right || p.current.rl)) {
        var Or = Ae;
        no ? Or -= ge - ue : Or = Sr.x - Er.x - ee;
        var oo = Pt(Or, je), Vr = Pt(Or, je, J);
        // Of course use larger one
        oo > at || oo === at && (!xe || // Choose recommend one
        Vr >= qt) ? (p.current.rl = !0, Ae = Or, ee = -ee, Ct.points = [vr(dt, 1), vr(Rt, 1)]) : p.current.rl = !1;
      }
      if (ro && dt[1] === "r" && (_t < Ee.left || p.current.lr)) {
        var rr = Ae;
        no ? rr += ge - ue : rr = xr.x - Me.x - ee;
        var ao = Pt(rr, je), io = Pt(rr, je, J);
        // Of course use larger one
        ao > at || ao === at && (!xe || // Choose recommend one
        io >= qt) ? (p.current.lr = !0, Ae = rr, ee = -ee, Ct.points = [vr(dt, 1), vr(Rt, 1)]) : p.current.lr = !1;
      }
      uo();
      var Gt = ft === !0 ? 0 : ft;
      typeof Gt == "number" && (_t < J.left && (Ae -= _t - J.left - ee, V.x + ue < J.left + Gt && (Ae += V.x - J.left + ue - Gt)), ur > J.right && (Ae -= ur - J.right - ee, V.x > J.right - Gt && (Ae += V.x - J.right + Gt)));
      var Dt = Ft === !0 ? 0 : Ft;
      typeof Dt == "number" && (Ut < J.top && (je -= Ut - J.top - te, V.y + X < J.top + Dt && (je += V.y - J.top + X - Dt)), Lt > J.bottom && (je -= Lt - J.bottom - te, V.y > J.bottom - Dt && (je += V.y - J.bottom + Dt)));
      var zr = B.x + Ae, Br = zr + ge, Xt = B.y + je, ma = Xt + se, so = V.x, pa = so + ue, Sn = V.y, ha = Sn + X, ba = Math.max(zr, so), ya = Math.min(Br, pa), lo = (ba + ya) / 2, Ca = lo - zr, Sa = Math.max(Xt, Sn), co = Math.min(ma, ha), xa = (Sa + co) / 2, Ea = xa - Xt;
      i == null || i(t, Ct);
      var xn = Ne.right - B.x - (Ae + B.width), Kt = Ne.bottom - B.y - (je + B.height);
      Ve === 1 && (Ae = Math.round(Ae), xn = Math.round(xn)), Ie === 1 && (je = Math.round(je), Kt = Math.round(Kt));
      var wa = {
        ready: !0,
        offsetX: Ae / Ve,
        offsetY: je / Ie,
        offsetR: xn / Ve,
        offsetB: Kt / Ie,
        arrowX: Ca / Ve,
        arrowY: Ea / Ie,
        scaleX: Ve,
        scaleY: Ie,
        align: Ct
      };
      u(wa);
    }
  }), g = function() {
    f.current += 1;
    var x = f.current;
    Promise.resolve().then(function() {
      f.current === x && m();
    });
  }, b = function() {
    u(function(x) {
      return M(M({}, x), {}, {
        ready: !1
      });
    });
  };
  return qe(b, [n]), qe(function() {
    e || b();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, g];
}
function Eb(e, t, r, n, o) {
  qe(function() {
    if (e && t && r) {
      let f = function() {
        n(), o();
      };
      var a = t, i = r, s = os(a), l = os(i), c = Qn(i), u = new Set([c].concat(fe(s), fe(l)));
      return u.forEach(function(v) {
        v.addEventListener("scroll", f, {
          passive: !0
        });
      }), c.addEventListener("resize", f, {
        passive: !0
      }), n(), function() {
        u.forEach(function(v) {
          v.removeEventListener("scroll", f), c.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, r]);
}
function wb(e, t, r, n, o, a, i, s) {
  var l = d.useRef(e);
  l.current = e;
  var c = d.useRef(!1);
  d.useEffect(function() {
    if (t && n && (!o || a)) {
      var f = function() {
        c.current = !1;
      }, v = function(w) {
        var C;
        l.current && !i(((C = w.composedPath) === null || C === void 0 || (C = C.call(w)) === null || C === void 0 ? void 0 : C[0]) || w.target) && !c.current && s(!1);
      }, p = Qn(n);
      p.addEventListener("pointerdown", f, !0), p.addEventListener("mousedown", v, !0), p.addEventListener("contextmenu", v, !0);
      var h = ko(r);
      if (h && (h.addEventListener("mousedown", v, !0), h.addEventListener("contextmenu", v, !0)), process.env.NODE_ENV !== "production") {
        var m, g, b = r == null || (m = r.getRootNode) === null || m === void 0 ? void 0 : m.call(r), y = (g = n.getRootNode) === null || g === void 0 ? void 0 : g.call(n);
        an(b === y, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        p.removeEventListener("pointerdown", f, !0), p.removeEventListener("mousedown", v, !0), p.removeEventListener("contextmenu", v, !0), h && (h.removeEventListener("mousedown", v, !0), h.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [t, r, n, o, a]);
  function u() {
    c.current = !0;
  }
  return u;
}
var $b = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function Ob() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ps, t = /* @__PURE__ */ d.forwardRef(function(r, n) {
    var o = r.prefixCls, a = o === void 0 ? "rc-trigger-popup" : o, i = r.children, s = r.action, l = s === void 0 ? "hover" : s, c = r.showAction, u = r.hideAction, f = r.popupVisible, v = r.defaultPopupVisible, p = r.onPopupVisibleChange, h = r.afterPopupVisibleChange, m = r.mouseEnterDelay, g = r.mouseLeaveDelay, b = g === void 0 ? 0.1 : g, y = r.focusDelay, x = r.blurDelay, w = r.mask, C = r.maskClosable, E = C === void 0 ? !0 : C, S = r.getPopupContainer, $ = r.forceRender, _ = r.autoDestroy, T = r.destroyPopupOnHide, F = r.popup, z = r.popupClassName, I = r.popupStyle, L = r.popupPlacement, A = r.builtinPlacements, O = A === void 0 ? {} : A, P = r.popupAlign, R = r.zIndex, D = r.stretch, V = r.getPopupClassNameFromAlign, H = r.fresh, q = r.alignPoint, U = r.onPopupClick, B = r.onPopupAlign, Q = r.arrow, ie = r.popupMotion, ve = r.maskMotion, oe = r.popupTransitionName, ae = r.popupAnimation, me = r.maskTransitionName, pe = r.maskAnimation, se = r.className, ge = r.getTriggerDOMNode, X = ut(r, $b), ue = _ || T || !1, re = d.useState(!1), de = Y(re, 2), he = de[0], ye = de[1];
    qe(function() {
      ye(pb());
    }, []);
    var Te = d.useRef({}), xe = d.useContext(oc), Re = d.useMemo(function() {
      return {
        registerSubPopup: function(Se, We) {
          Te.current[Se] = We, xe == null || xe.registerSubPopup(Se, We);
        }
      };
    }, [xe]), J = bd(), be = d.useState(null), Ee = Y(be, 2), Ne = Ee[0], Ve = Ee[1], Ie = d.useRef(null), ke = vt(function(le) {
      Ie.current = le, In(le) && Ne !== le && Ve(le), xe == null || xe.registerSubPopup(J, le);
    }), N = d.useState(null), W = Y(N, 2), Z = W[0], ee = W[1], te = d.useRef(null), ce = vt(function(le) {
      In(le) && Z !== le && (ee(le), te.current = le);
    }), G = d.Children.only(i), K = (G == null ? void 0 : G.props) || {}, _e = {}, Qe = vt(function(le) {
      var Se, We, nt = Z;
      return (nt == null ? void 0 : nt.contains(le)) || ((Se = ko(nt)) === null || Se === void 0 ? void 0 : Se.host) === le || le === nt || (Ne == null ? void 0 : Ne.contains(le)) || ((We = ko(Ne)) === null || We === void 0 ? void 0 : We.host) === le || le === Ne || Object.values(Te.current).some(function(Ke) {
        return (Ke == null ? void 0 : Ke.contains(le)) || le === Ke;
      });
    }), ct = ic(a, ie, ae, oe), Ot = ic(a, ve, pe, me), er = d.useState(v || !1), Rt = Y(er, 2), dt = Rt[0], Wt = Rt[1], Je = f != null ? f : dt, Ct = vt(function(le) {
      f === void 0 && Wt(le);
    });
    qe(function() {
      Wt(f || !1);
    }, [f]);
    var Ae = d.useRef(Je);
    Ae.current = Je;
    var je = d.useRef([]);
    je.current = [];
    var at = vt(function(le) {
      var Se;
      Ct(le), ((Se = je.current[je.current.length - 1]) !== null && Se !== void 0 ? Se : Je) !== le && (je.current.push(le), p == null || p(le));
    }), qt = d.useRef(), Sr = function() {
      clearTimeout(qt.current);
    }, Me = function(Se) {
      var We = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Sr(), We === 0 ? at(Se) : qt.current = setTimeout(function() {
        at(Se);
      }, We * 1e3);
    };
    d.useEffect(function() {
      return Sr;
    }, []);
    var xr = d.useState(!1), Er = Y(xr, 2), ze = Er[0], Xe = Er[1];
    qe(function(le) {
      (!le || Je) && Xe(!0);
    }, [Je]);
    var bt = d.useState(null), ft = Y(bt, 2), Ft = ft[0], wr = ft[1], Ut = d.useState(null), Lt = Y(Ut, 2), _t = Lt[0], ur = Lt[1], tr = function(Se) {
      ur([Se.clientX, Se.clientY]);
    }, Dr = xb(Je, Ne, q && _t !== null ? _t : Z, L, O, P, B), He = Y(Dr, 11), eo = He[0], va = He[1], $r = He[2], to = He[3], ga = He[4], ro = He[5], no = He[6], Or = He[7], oo = He[8], Vr = He[9], rr = He[10], ao = yb(he, l, c, u), io = Y(ao, 2), Gt = io[0], Dt = io[1], zr = Gt.has("click"), Br = Dt.has("click") || Dt.has("contextMenu"), Xt = vt(function() {
      ze || rr();
    }), ma = function() {
      Ae.current && q && Br && Me(!1);
    };
    Eb(Je, Z, Ne, Xt, ma), qe(function() {
      Xt();
    }, [_t, L]), qe(function() {
      Je && !(O != null && O[L]) && Xt();
    }, [JSON.stringify(P)]);
    var so = d.useMemo(function() {
      var le = Sb(O, a, Vr, q);
      return ne(le, V == null ? void 0 : V(Vr));
    }, [Vr, V, O, a, q]);
    d.useImperativeHandle(n, function() {
      return {
        nativeElement: te.current,
        popupElement: Ie.current,
        forceAlign: Xt
      };
    });
    var pa = d.useState(0), Sn = Y(pa, 2), ha = Sn[0], ba = Sn[1], ya = d.useState(0), lo = Y(ya, 2), Ca = lo[0], Sa = lo[1], co = function() {
      if (D && Z) {
        var Se = Z.getBoundingClientRect();
        ba(Se.width), Sa(Se.height);
      }
    }, xa = function() {
      co(), Xt();
    }, Ea = function(Se) {
      Xe(!1), rr(), h == null || h(Se);
    }, xn = function() {
      return new Promise(function(Se) {
        co(), wr(function() {
          return Se;
        });
      });
    };
    qe(function() {
      Ft && (rr(), Ft(), wr(null));
    }, [Ft]);
    function Kt(le, Se, We, nt) {
      _e[le] = function(Ke) {
        var vo;
        nt == null || nt(Ke), Me(Se, We);
        for (var _a = arguments.length, Vs = new Array(_a > 1 ? _a - 1 : 0), go = 1; go < _a; go++)
          Vs[go - 1] = arguments[go];
        (vo = K[le]) === null || vo === void 0 || vo.call.apply(vo, [K, Ke].concat(Vs));
      };
    }
    (zr || Br) && (_e.onClick = function(le) {
      var Se;
      Ae.current && Br ? Me(!1) : !Ae.current && zr && (tr(le), Me(!0));
      for (var We = arguments.length, nt = new Array(We > 1 ? We - 1 : 0), Ke = 1; Ke < We; Ke++)
        nt[Ke - 1] = arguments[Ke];
      (Se = K.onClick) === null || Se === void 0 || Se.call.apply(Se, [K, le].concat(nt));
    });
    var wa = wb(Je, Br, Z, Ne, w, E, Qe, Me), Pt = Gt.has("hover"), uo = Dt.has("hover"), Hr, dr;
    Pt && (Kt("onMouseEnter", !0, m, function(le) {
      tr(le);
    }), Kt("onPointerEnter", !0, m, function(le) {
      tr(le);
    }), Hr = function(Se) {
      (Je || ze) && Ne !== null && Ne !== void 0 && Ne.contains(Se.target) && Me(!0, m);
    }, q && (_e.onMouseMove = function(le) {
      var Se;
      (Se = K.onMouseMove) === null || Se === void 0 || Se.call(K, le);
    })), uo && (Kt("onMouseLeave", !1, b), Kt("onPointerLeave", !1, b), dr = function() {
      Me(!1, b);
    }), Gt.has("focus") && Kt("onFocus", !0, y), Dt.has("focus") && Kt("onBlur", !1, x), Gt.has("contextMenu") && (_e.onContextMenu = function(le) {
      var Se;
      Ae.current && Dt.has("contextMenu") ? Me(!1) : (tr(le), Me(!0)), le.preventDefault();
      for (var We = arguments.length, nt = new Array(We > 1 ? We - 1 : 0), Ke = 1; Ke < We; Ke++)
        nt[Ke - 1] = arguments[Ke];
      (Se = K.onContextMenu) === null || Se === void 0 || Se.call.apply(Se, [K, le].concat(nt));
    }), se && (_e.className = ne(K.className, se));
    var fr = M(M({}, K), _e), En = {}, fo = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    fo.forEach(function(le) {
      X[le] && (En[le] = function() {
        for (var Se, We = arguments.length, nt = new Array(We), Ke = 0; Ke < We; Ke++)
          nt[Ke] = arguments[Ke];
        (Se = fr[le]) === null || Se === void 0 || Se.call.apply(Se, [fr].concat(nt)), X[le].apply(X, nt);
      });
    });
    var $a = /* @__PURE__ */ d.cloneElement(G, M(M({}, fr), En)), Oa = {
      x: ro,
      y: no
    }, Ra = Q ? M({}, Q !== !0 ? Q : {}) : null;
    return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(mn, {
      disabled: !Je,
      ref: ce,
      onResize: xa
    }, /* @__PURE__ */ d.createElement(_d, {
      getTriggerDOMNode: ge
    }, $a)), /* @__PURE__ */ d.createElement(oc.Provider, {
      value: Re
    }, /* @__PURE__ */ d.createElement(Rd, {
      portal: e,
      ref: ke,
      prefixCls: a,
      popup: F,
      className: ne(z, so),
      style: I,
      target: Z,
      onMouseEnter: Hr,
      onMouseLeave: dr,
      onPointerEnter: Hr,
      zIndex: R,
      open: Je,
      keepDom: ze,
      fresh: H,
      onClick: U,
      onPointerDownCapture: wa,
      mask: w,
      motion: ct,
      maskMotion: Ot,
      onVisibleChanged: Ea,
      onPrepare: xn,
      forceRender: $,
      autoDestroy: ue,
      getPopupContainer: S,
      align: Vr,
      arrow: Ra,
      arrowPos: Oa,
      ready: eo,
      offsetX: va,
      offsetY: $r,
      offsetR: to,
      offsetB: ga,
      onAlign: Xt,
      stretch: D,
      targetWidth: ha / Or,
      targetHeight: Ca / oo
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const Rb = Ob(Ps);
function as(e, t, r) {
  return ne({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const Pd = (e, t) => t || e, Td = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var n, o;
  const {
    variant: a,
    [e]: i
  } = d.useContext(rt), s = d.useContext(ab), l = i == null ? void 0 : i.variant;
  let c;
  typeof t != "undefined" ? c = t : r === !1 ? c = "borderless" : c = (o = (n = s != null ? s : l) !== null && n !== void 0 ? n : a) !== null && o !== void 0 ? o : "outlined";
  const u = Hg.includes(c);
  return [c, u];
};
var _b = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, Pb = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: _b
  }));
}, Nd = /* @__PURE__ */ d.forwardRef(Pb);
process.env.NODE_ENV !== "production" && (Nd.displayName = "CheckOutlined");
const Wn = ["xxl", "xl", "lg", "md", "sm", "xs"], Tb = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`
}), Nb = (e) => {
  const t = e, r = [].concat(Wn).reverse();
  return r.forEach((n, o) => {
    const a = n.toUpperCase(), i = `screen${a}Min`, s = `screen${a}`;
    if (!(t[i] <= t[s]))
      throw new Error(`${i}<=${s} fails : !(${t[i]}<=${t[s]})`);
    if (o < r.length - 1) {
      const l = `screen${a}Max`;
      if (!(t[s] <= t[l]))
        throw new Error(`${s}<=${l} fails : !(${t[s]}<=${t[l]})`);
      const u = `screen${r[o + 1].toUpperCase()}Min`;
      if (!(t[l] <= t[u]))
        throw new Error(`${l}<=${u} fails : !(${t[l]}<=${t[u]})`);
    }
  }), e;
}, jb = () => {
  const [, e] = cr(), t = Tb(Nb(e));
  return k.useMemo(() => {
    const r = /* @__PURE__ */ new Map();
    let n = -1, o = {};
    return {
      responsiveMap: t,
      matchHandlers: {},
      dispatch(a) {
        return o = a, r.forEach((i) => i(o)), r.size >= 1;
      },
      subscribe(a) {
        return r.size || this.register(), n += 1, r.set(n, a), a(o), n;
      },
      unsubscribe(a) {
        r.delete(a), r.size || this.unregister();
      },
      register() {
        Object.keys(t).forEach((a) => {
          const i = t[a], s = (c) => {
            let {
              matches: u
            } = c;
            this.dispatch(Object.assign(Object.assign({}, o), {
              [a]: u
            }));
          }, l = window.matchMedia(i);
          l.addListener(s), this.matchHandlers[i] = {
            mql: l,
            listener: s
          }, s(l);
        });
      },
      unregister() {
        Object.keys(t).forEach((a) => {
          const i = t[a], s = this.matchHandlers[i];
          s == null || s.mql.removeListener(s == null ? void 0 : s.listener);
        }), r.clear();
      }
    };
  }, [e]);
};
function Ib() {
  const [, e] = d.useReducer((t) => t + 1, 0);
  return e;
}
function Ab() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const r = Oe(t), n = Ib(), o = jb();
  return qe(() => {
    const a = o.subscribe((i) => {
      r.current = i, e && n();
    });
    return () => o.unsubscribe(a);
  }, []), r.current;
}
function jd(e) {
  var t = e.children, r = e.prefixCls, n = e.id, o = e.overlayInnerStyle, a = e.bodyClassName, i = e.className, s = e.style;
  return /* @__PURE__ */ d.createElement("div", {
    className: ne("".concat(r, "-content"), i),
    style: s
  }, /* @__PURE__ */ d.createElement("div", {
    className: ne("".concat(r, "-inner"), a),
    id: n,
    role: "tooltip",
    style: o
  }, typeof t == "function" ? t() : t));
}
var Xr = {
  shiftX: 64,
  adjustY: 1
}, Kr = {
  adjustX: 1,
  shiftY: !0
}, jt = [0, 0], Mb = {
  left: {
    points: ["cr", "cl"],
    overflow: Kr,
    offset: [-4, 0],
    targetOffset: jt
  },
  right: {
    points: ["cl", "cr"],
    overflow: Kr,
    offset: [4, 0],
    targetOffset: jt
  },
  top: {
    points: ["bc", "tc"],
    overflow: Xr,
    offset: [0, -4],
    targetOffset: jt
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Xr,
    offset: [0, 4],
    targetOffset: jt
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Xr,
    offset: [0, -4],
    targetOffset: jt
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Kr,
    offset: [-4, 0],
    targetOffset: jt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Xr,
    offset: [0, -4],
    targetOffset: jt
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Kr,
    offset: [4, 0],
    targetOffset: jt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Xr,
    offset: [0, 4],
    targetOffset: jt
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Kr,
    offset: [4, 0],
    targetOffset: jt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Xr,
    offset: [0, 4],
    targetOffset: jt
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Kr,
    offset: [-4, 0],
    targetOffset: jt
  }
}, Fb = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], Lb = function(t, r) {
  var n = t.overlayClassName, o = t.trigger, a = o === void 0 ? ["hover"] : o, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, l = t.mouseLeaveDelay, c = l === void 0 ? 0.1 : l, u = t.overlayStyle, f = t.prefixCls, v = f === void 0 ? "rc-tooltip" : f, p = t.children, h = t.onVisibleChange, m = t.afterVisibleChange, g = t.transitionName, b = t.animation, y = t.motion, x = t.placement, w = x === void 0 ? "right" : x, C = t.align, E = C === void 0 ? {} : C, S = t.destroyTooltipOnHide, $ = S === void 0 ? !1 : S, _ = t.defaultVisible, T = t.getTooltipContainer, F = t.overlayInnerStyle;
  t.arrowContent;
  var z = t.overlay, I = t.id, L = t.showArrow, A = L === void 0 ? !0 : L, O = t.classNames, P = t.styles, R = ut(t, Fb), D = bd(I), V = Oe(null);
  Xo(r, function() {
    return V.current;
  });
  var H = M({}, R);
  "visible" in t && (H.popupVisible = t.visible);
  var q = function() {
    return /* @__PURE__ */ d.createElement(jd, {
      key: "content",
      prefixCls: v,
      id: D,
      bodyClassName: O == null ? void 0 : O.body,
      overlayInnerStyle: M(M({}, F), P == null ? void 0 : P.body)
    }, z);
  }, U = function() {
    var Q = d.Children.only(p), ie = (Q == null ? void 0 : Q.props) || {}, ve = M(M({}, ie), {}, {
      "aria-describedby": z ? D : null
    });
    return /* @__PURE__ */ d.cloneElement(p, ve);
  };
  return /* @__PURE__ */ d.createElement(Rb, De({
    popupClassName: ne(n, O == null ? void 0 : O.root),
    prefixCls: v,
    popup: q,
    action: a,
    builtinPlacements: Mb,
    popupPlacement: w,
    ref: V,
    popupAlign: E,
    getPopupContainer: T,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: m,
    popupTransitionName: g,
    popupAnimation: b,
    popupMotion: y,
    defaultPopupVisible: _,
    autoDestroy: $,
    mouseLeaveDelay: c,
    popupStyle: M(M({}, u), P == null ? void 0 : P.root),
    mouseEnterDelay: s,
    arrow: A
  }, H), U());
};
const Db = /* @__PURE__ */ lr(Lb);
function Vb(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, o = t / 2, a = 0, i = o, s = n * 1 / Math.sqrt(2), l = o - n * (1 - 1 / Math.sqrt(2)), c = o - r * (1 / Math.sqrt(2)), u = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), f = 2 * o - c, v = u, p = 2 * o - s, h = l, m = 2 * o - a, g = i, b = o * Math.sqrt(2) + n * (Math.sqrt(2) - 2), y = n * (Math.sqrt(2) - 1), x = `polygon(${y}px 100%, 50% ${y}px, ${2 * o - y}px 100%, ${y}px 100%)`, w = `path('M ${a} ${i} A ${n} ${n} 0 0 0 ${s} ${l} L ${c} ${u} A ${r} ${r} 0 0 1 ${f} ${v} L ${p} ${h} A ${n} ${n} 0 0 0 ${m} ${g} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: w,
    arrowPolygon: x
  };
}
const zb = (e, t, r) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: o,
    arrowPath: a,
    arrowShadowWidth: i,
    borderRadiusXS: s,
    calc: l
  } = e;
  return {
    pointerEvents: "none",
    width: n,
    height: n,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: n,
      height: l(n).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [o, a]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${we(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Id = 8;
function Ad(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? Id : n
  };
}
function Oo(e, t) {
  return e ? t : {};
}
function Bb(e, t, r) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: o,
    arrowOffsetVertical: a,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: s = 0,
    arrowPlacement: l = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${n}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, zb(e, t, o)), {
        "&:before": {
          background: t
        }
      })]
    }, Oo(!!l.top, {
      [[`&-placement-top > ${n}-arrow`, `&-placement-topLeft > ${n}-arrow`, `&-placement-topRight > ${n}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${we(i)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), Oo(!!l.bottom, {
      [[`&-placement-bottom > ${n}-arrow`, `&-placement-bottomLeft > ${n}-arrow`, `&-placement-bottomRight > ${n}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${we(i)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), Oo(!!l.left, {
      [[`&-placement-left > ${n}-arrow`, `&-placement-leftTop > ${n}-arrow`, `&-placement-leftBottom > ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${n}-arrow`]: {
        top: a
      },
      [`&-placement-leftBottom > ${n}-arrow`]: {
        bottom: a
      }
    })), Oo(!!l.right, {
      [[`&-placement-right > ${n}-arrow`, `&-placement-rightTop > ${n}-arrow`, `&-placement-rightBottom > ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${n}-arrow`]: {
        top: a
      },
      [`&-placement-rightBottom > ${n}-arrow`]: {
        bottom: a
      }
    }))
  };
}
function Hb(e, t, r, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const o = n && typeof n == "object" ? n : {}, a = {};
  switch (e) {
    case "top":
    case "bottom":
      a.shiftX = t.arrowOffsetHorizontal * 2 + r, a.shiftY = !0, a.adjustY = !0;
      break;
    case "left":
    case "right":
      a.shiftY = t.arrowOffsetVertical * 2 + r, a.shiftX = !0, a.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, a), o);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const dc = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, kb = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, Wb = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function qb(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: o,
    borderRadius: a
  } = e, i = t / 2, s = {};
  return Object.keys(dc).forEach((l) => {
    const c = n && kb[l] || dc[l], u = Object.assign(Object.assign({}, c), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (s[l] = u, Wb.has(l) && (u.autoArrow = !1), l) {
      case "top":
      case "topLeft":
      case "topRight":
        u.offset[1] = -i - o;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        u.offset[1] = i + o;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        u.offset[0] = -i - o;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        u.offset[0] = i + o;
        break;
    }
    const f = Ad({
      contentRadius: a,
      limitVerticalRadius: !0
    });
    if (n)
      switch (l) {
        case "topLeft":
        case "bottomLeft":
          u.offset[0] = -f.arrowOffsetHorizontal - i;
          break;
        case "topRight":
        case "bottomRight":
          u.offset[0] = f.arrowOffsetHorizontal + i;
          break;
        case "leftTop":
        case "rightTop":
          u.offset[1] = -f.arrowOffsetHorizontal * 2 + i;
          break;
        case "leftBottom":
        case "rightBottom":
          u.offset[1] = f.arrowOffsetHorizontal * 2 - i;
          break;
      }
    u.overflow = Hb(l, f, t, r), u.htmlRegion = "visibleFirst";
  }), s;
}
const Ub = (e) => {
  const {
    calc: t,
    componentCls: r,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: o,
    tooltipBg: a,
    tooltipBorderRadius: i,
    zIndexPopup: s,
    controlHeight: l,
    boxShadowSecondary: c,
    paddingSM: u,
    paddingXS: f,
    arrowOffsetHorizontal: v,
    sizePopupArrow: p
  } = e, h = t(i).add(p).add(v).equal(), m = t(i).mul(2).add(p).equal();
  return [
    {
      [r]: Object.assign(Object.assign(Object.assign(Object.assign({}, rn(e)), {
        position: "absolute",
        zIndex: s,
        display: "block",
        width: "max-content",
        maxWidth: n,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": a,
        // Wrapper for the tooltip content
        [`${r}-inner`]: {
          minWidth: m,
          minHeight: l,
          padding: `${we(e.calc(u).div(2).equal())} ${we(f)}`,
          color: o,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: i,
          boxShadow: c,
          boxSizing: "border-box"
        },
        // Align placement should have another min width
        [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: {
          minWidth: h
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${r}-inner`]: {
            borderRadius: e.min(i, Id)
          }
        },
        [`${r}-content`]: {
          position: "relative"
        }
      }), hm(e, (g, b) => {
        let {
          darkColor: y
        } = b;
        return {
          [`&${r}-${g}`]: {
            [`${r}-inner`]: {
              backgroundColor: y
            },
            [`${r}-arrow`]: {
              "--antd-arrow-background-color": y
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    Bb(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${r}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, Gb = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Ad({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), Vb(ht(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Md = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return kt("Tooltip", (n) => {
    const {
      borderRadius: o,
      colorTextLightSolid: a,
      colorBgSpotlight: i
    } = n, s = ht(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: a,
      tooltipBorderRadius: o,
      tooltipBg: i
    });
    return [Ub(s), wh(n, "zoom-big-fast")];
  }, Gb, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, Xb = Ir.map((e) => `${e}-inverse`);
function Kb(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(fe(Xb), fe(Ir)).includes(e) : Ir.includes(e);
}
function Fd(e, t) {
  const r = Kb(t), n = ne({
    [`${e}-${t}`]: t && r
  }), o = {}, a = {};
  return t && !r && (o.background = t, a["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: o,
    arrowStyle: a
  };
}
const Yb = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: o,
    color: a,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = d.useContext(rt), l = s("tooltip", t), [c, u, f] = Md(l), v = Fd(l, a), p = v.arrowStyle, h = Object.assign(Object.assign({}, i), v.overlayStyle), m = ne(u, f, l, `${l}-pure`, `${l}-placement-${n}`, r, v.className);
  return c(/* @__PURE__ */ d.createElement("div", {
    className: m,
    style: p
  }, /* @__PURE__ */ d.createElement("div", {
    className: `${l}-arrow`
  }), /* @__PURE__ */ d.createElement(jd, Object.assign({}, e, {
    className: u,
    prefixCls: l,
    overlayInnerStyle: h
  }), o)));
};
var Zb = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Qb = /* @__PURE__ */ d.forwardRef((e, t) => {
  var r, n;
  const {
    prefixCls: o,
    openClassName: a,
    getTooltipContainer: i,
    color: s,
    overlayInnerStyle: l,
    children: c,
    afterOpenChange: u,
    afterVisibleChange: f,
    destroyTooltipOnHide: v,
    arrow: p = !0,
    title: h,
    overlay: m,
    builtinPlacements: g,
    arrowPointAtCenter: b = !1,
    autoAdjustOverflow: y = !0,
    motion: x,
    getPopupContainer: w,
    placement: C = "top",
    mouseEnterDelay: E = 0.1,
    mouseLeaveDelay: S = 0.1,
    overlayStyle: $,
    rootClassName: _,
    overlayClassName: T,
    styles: F,
    classNames: z
  } = e, I = Zb(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), L = !!p, [, A] = cr(), {
    getPopupContainer: O,
    getPrefixCls: P,
    direction: R,
    className: D,
    style: V,
    classNames: H,
    styles: q
  } = hn("tooltip"), U = gt("Tooltip"), B = d.useRef(null), Q = () => {
    var N;
    (N = B.current) === null || N === void 0 || N.forceAlign();
  };
  d.useImperativeHandle(t, () => {
    var N, W;
    return {
      forceAlign: Q,
      forcePopupAlign: () => {
        U.deprecated(!1, "forcePopupAlign", "forceAlign"), Q();
      },
      nativeElement: (N = B.current) === null || N === void 0 ? void 0 : N.nativeElement,
      popupElement: (W = B.current) === null || W === void 0 ? void 0 : W.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach((N) => {
    let [W, Z] = N;
    U.deprecated(!(W in e), W, Z);
  }), process.env.NODE_ENV !== "production" && U(!v || typeof v == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && U(!p || typeof p == "boolean" || !("arrowPointAtCenter" in p), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [ie, ve] = hr(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), oe = !h && !m && h !== 0, ae = (N) => {
    var W, Z;
    ve(oe ? !1 : N), oe || ((W = e.onOpenChange) === null || W === void 0 || W.call(e, N), (Z = e.onVisibleChange) === null || Z === void 0 || Z.call(e, N));
  }, me = d.useMemo(() => {
    var N, W;
    let Z = b;
    return typeof p == "object" && (Z = (W = (N = p.pointAtCenter) !== null && N !== void 0 ? N : p.arrowPointAtCenter) !== null && W !== void 0 ? W : b), g || qb({
      arrowPointAtCenter: Z,
      autoAdjustOverflow: y,
      arrowWidth: L ? A.sizePopupArrow : 0,
      borderRadius: A.borderRadius,
      offset: A.marginXXS
    });
  }, [b, p, g, A]), pe = d.useMemo(() => h === 0 ? h : m || h || "", [m, h]), se = /* @__PURE__ */ d.createElement(rs, {
    space: !0
  }, typeof pe == "function" ? pe() : pe), ge = P("tooltip", o), X = P(), ue = e["data-popover-inject"];
  let re = ie;
  !("open" in e) && !("visible" in e) && oe && (re = !1);
  const de = /* @__PURE__ */ d.isValidElement(c) && !rd(c) ? c : /* @__PURE__ */ d.createElement("span", null, c), he = de.props, ye = !he.className || typeof he.className == "string" ? ne(he.className, a || `${ge}-open`) : he.className, [Te, xe, Re] = Md(ge, !ue), J = Fd(ge, s), be = J.arrowStyle, Ee = ne(T, {
    [`${ge}-rtl`]: R === "rtl"
  }, J.className, _, xe, Re, D, H.root, z == null ? void 0 : z.root), Ne = ne(H.body, z == null ? void 0 : z.body), [Ve, Ie] = bp("Tooltip", I.zIndex), ke = /* @__PURE__ */ d.createElement(Db, Object.assign({}, I, {
    zIndex: Ve,
    showArrow: L,
    placement: C,
    mouseEnterDelay: E,
    mouseLeaveDelay: S,
    prefixCls: ge,
    classNames: {
      root: Ee,
      body: Ne
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, be), q.root), V), $), F == null ? void 0 : F.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, q.body), l), F == null ? void 0 : F.body), J.overlayStyle)
    },
    getTooltipContainer: w || i || O,
    ref: B,
    builtinPlacements: me,
    overlay: se,
    visible: re,
    onVisibleChange: ae,
    afterVisibleChange: u != null ? u : f,
    arrowContent: /* @__PURE__ */ d.createElement("span", {
      className: `${ge}-arrow-content`
    }),
    motion: {
      motionName: Np(X, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!v
  }), re ? ra(de, {
    className: ye
  }) : de);
  return Te(/* @__PURE__ */ d.createElement(Es.Provider, {
    value: Ie
  }, ke));
}), Jn = Qb;
process.env.NODE_ENV !== "production" && (Jn.displayName = "Tooltip");
Jn._InternalPanelDoNotUseOrYouWillBeFired = Yb;
var Jb = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" }, ey = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: Jb
  }));
}, is = /* @__PURE__ */ d.forwardRef(ey);
process.env.NODE_ENV !== "production" && (is.displayName = "LeftOutlined");
var ty = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" }, ry = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: ty
  }));
}, Ld = /* @__PURE__ */ d.forwardRef(ry);
process.env.NODE_ENV !== "production" && (Ld.displayName = "BarsOutlined");
const Dd = /* @__PURE__ */ d.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
}), ny = (e) => {
  const {
    antCls: t,
    // .ant
    componentCls: r,
    // .ant-layout
    colorText: n,
    footerBg: o,
    headerHeight: a,
    headerPadding: i,
    headerColor: s,
    footerPadding: l,
    fontSize: c,
    bodyBg: u,
    headerBg: f
  } = e;
  return {
    [r]: {
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: u,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${r}-has-sider`]: {
        flexDirection: "row",
        [`> ${r}, > ${r}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${r}-header, &${r}-footer`]: {
        flex: "0 0 auto"
      },
      // RTL
      "&-rtl": {
        direction: "rtl"
      }
    },
    // ==================== Header ====================
    [`${r}-header`]: {
      height: a,
      padding: i,
      color: s,
      lineHeight: we(a),
      background: f,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${t}-menu`]: {
        lineHeight: "inherit"
      }
    },
    // ==================== Footer ====================
    [`${r}-footer`]: {
      padding: l,
      color: n,
      fontSize: c,
      background: o
    },
    // =================== Content ====================
    [`${r}-content`]: {
      flex: "auto",
      color: n,
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
}, Vd = (e) => {
  const {
    colorBgLayout: t,
    controlHeight: r,
    controlHeightLG: n,
    colorText: o,
    controlHeightSM: a,
    marginXXS: i,
    colorTextLightSolid: s,
    colorBgContainer: l
  } = e, c = n * 1.25;
  return {
    // Deprecated
    colorBgHeader: "#001529",
    colorBgBody: t,
    colorBgTrigger: "#002140",
    bodyBg: t,
    headerBg: "#001529",
    headerHeight: r * 2,
    headerPadding: `0 ${c}px`,
    headerColor: o,
    footerPadding: `${a}px ${c}px`,
    footerBg: t,
    siderBg: "#001529",
    triggerHeight: n + i * 2,
    triggerBg: "#002140",
    triggerColor: s,
    zeroTriggerWidth: n,
    zeroTriggerHeight: n,
    lightSiderBg: l,
    lightTriggerBg: l,
    lightTriggerColor: o
  };
}, zd = [["colorBgBody", "bodyBg"], ["colorBgHeader", "headerBg"], ["colorBgTrigger", "triggerBg"]], Bd = kt("Layout", (e) => [ny(e)], Vd, {
  deprecatedTokens: zd
}), oy = (e) => {
  const {
    componentCls: t,
    siderBg: r,
    motionDurationMid: n,
    motionDurationSlow: o,
    antCls: a,
    triggerHeight: i,
    triggerColor: s,
    triggerBg: l,
    headerHeight: c,
    zeroTriggerWidth: u,
    zeroTriggerHeight: f,
    borderRadiusLG: v,
    lightSiderBg: p,
    lightTriggerColor: h,
    lightTriggerBg: m,
    bodyBg: g
  } = e;
  return {
    [t]: {
      position: "relative",
      // fix firefox can't set width smaller than content on flex item
      minWidth: 0,
      background: r,
      transition: `all ${n}, background 0s`,
      "&-has-trigger": {
        paddingBottom: i
      },
      "&-right": {
        order: 1
      },
      [`${t}-children`]: {
        height: "100%",
        // Hack for fixing margin collapse bug
        // https://github.com/ant-design/ant-design/issues/7967
        // solution from https://stackoverflow.com/a/33132624/3040605
        marginTop: -0.1,
        paddingTop: 0.1,
        [`${a}-menu${a}-menu-inline-collapsed`]: {
          width: "auto"
        }
      },
      [`&-zero-width ${t}-children`]: {
        overflow: "hidden"
      },
      [`${t}-trigger`]: {
        position: "fixed",
        bottom: 0,
        zIndex: 1,
        height: i,
        color: s,
        lineHeight: we(i),
        textAlign: "center",
        background: l,
        cursor: "pointer",
        transition: `all ${n}`
      },
      [`${t}-zero-width-trigger`]: {
        position: "absolute",
        top: c,
        insetInlineEnd: e.calc(u).mul(-1).equal(),
        zIndex: 1,
        width: u,
        height: f,
        color: s,
        fontSize: e.fontSizeXL,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: r,
        borderRadius: `0 ${we(v)} ${we(v)} 0`,
        cursor: "pointer",
        transition: `background ${o} ease`,
        "&::after": {
          position: "absolute",
          inset: 0,
          background: "transparent",
          transition: `all ${o}`,
          content: '""'
        },
        "&:hover::after": {
          background: "rgba(255, 255, 255, 0.2)"
        },
        "&-right": {
          insetInlineStart: e.calc(u).mul(-1).equal(),
          borderRadius: `${we(v)} 0 0 ${we(v)}`
        }
      },
      // Light
      "&-light": {
        background: p,
        [`${t}-trigger`]: {
          color: h,
          background: m
        },
        [`${t}-zero-width-trigger`]: {
          color: h,
          background: m,
          border: `1px solid ${g}`,
          // Safe to modify to any other color
          borderInlineStart: 0
        }
      }
    }
  };
}, ay = kt(["Layout", "Sider"], (e) => [oy(e)], Vd, {
  deprecatedTokens: zd
});
var iy = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const fc = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, sy = (e) => !Number.isNaN(Number.parseFloat(e)) && isFinite(e), Hd = /* @__PURE__ */ d.createContext({}), ly = /* @__PURE__ */ (() => {
  let e = 0;
  return function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return e += 1, `${t}${e}`;
  };
})(), Ns = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    trigger: o,
    children: a,
    defaultCollapsed: i = !1,
    theme: s = "dark",
    style: l = {},
    collapsible: c = !1,
    reverseArrow: u = !1,
    width: f = 200,
    collapsedWidth: v = 80,
    zeroWidthTriggerStyle: p,
    breakpoint: h,
    onCollapse: m,
    onBreakpoint: g
  } = e, b = iy(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: y
  } = yt(Dd), [x, w] = Qt("collapsed" in e ? e.collapsed : i), [C, E] = Qt(!1);
  tt(() => {
    "collapsed" in e && w(e.collapsed);
  }, [e.collapsed]);
  const S = (oe, ae) => {
    "collapsed" in e || w(oe), m == null || m(oe, ae);
  }, {
    getPrefixCls: $,
    direction: _
  } = yt(rt), T = $("layout-sider", r), [F, z, I] = ay(T), L = Oe(null);
  L.current = (oe) => {
    E(oe.matches), g == null || g(oe.matches), x !== oe.matches && S(oe.matches, "responsive");
  }, tt(() => {
    function oe(me) {
      return L.current(me);
    }
    let ae;
    if (typeof window != "undefined") {
      const {
        matchMedia: me
      } = window;
      if (me && h && h in fc) {
        ae = me(`screen and (max-width: ${fc[h]})`);
        try {
          ae.addEventListener("change", oe);
        } catch (pe) {
          ae.addListener(oe);
        }
        oe(ae);
      }
    }
    return () => {
      try {
        ae == null || ae.removeEventListener("change", oe);
      } catch (me) {
        ae == null || ae.removeListener(oe);
      }
    };
  }, [h]), tt(() => {
    const oe = ly("ant-sider-");
    return y.addSider(oe), () => y.removeSider(oe);
  }, []);
  const A = () => {
    S(!x, "clickTrigger");
  }, O = Fr(b, ["collapsed"]), P = x ? v : f, R = sy(P) ? `${P}px` : String(P), D = parseFloat(String(v || 0)) === 0 ? /* @__PURE__ */ d.createElement("span", {
    onClick: A,
    className: ne(`${T}-zero-width-trigger`, `${T}-zero-width-trigger-${u ? "right" : "left"}`),
    style: p
  }, o || /* @__PURE__ */ d.createElement(Ld, null)) : null, V = _ === "rtl" == !u, U = {
    expanded: V ? /* @__PURE__ */ d.createElement(qi, null) : /* @__PURE__ */ d.createElement(is, null),
    collapsed: V ? /* @__PURE__ */ d.createElement(is, null) : /* @__PURE__ */ d.createElement(qi, null)
  }[x ? "collapsed" : "expanded"], B = o !== null ? D || /* @__PURE__ */ d.createElement("div", {
    className: `${T}-trigger`,
    onClick: A,
    style: {
      width: R
    }
  }, o || U) : null, Q = Object.assign(Object.assign({}, l), {
    flex: `0 0 ${R}`,
    maxWidth: R,
    minWidth: R,
    width: R
  }), ie = ne(T, `${T}-${s}`, {
    [`${T}-collapsed`]: !!x,
    [`${T}-has-trigger`]: c && o !== null && !D,
    [`${T}-below`]: !!C,
    [`${T}-zero-width`]: parseFloat(R) === 0
  }, n, z, I), ve = d.useMemo(() => ({
    siderCollapsed: x
  }), [x]);
  return F(/* @__PURE__ */ d.createElement(Hd.Provider, {
    value: ve
  }, /* @__PURE__ */ d.createElement("aside", Object.assign({
    className: ie
  }, O, {
    style: Q,
    ref: t
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${T}-children`
  }, a), c || C && D ? B : null)));
});
process.env.NODE_ENV !== "production" && (Ns.displayName = "Sider");
var cy = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"], uy = /* @__PURE__ */ lr(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-checkbox" : r, o = e.className, a = e.style, i = e.checked, s = e.disabled, l = e.defaultChecked, c = l === void 0 ? !1 : l, u = e.type, f = u === void 0 ? "checkbox" : u, v = e.title, p = e.onChange, h = ut(e, cy), m = Oe(null), g = Oe(null), b = hr(c, {
    value: i
  }), y = Y(b, 2), x = y[0], w = y[1];
  Xo(t, function() {
    return {
      focus: function($) {
        var _;
        (_ = m.current) === null || _ === void 0 || _.focus($);
      },
      blur: function() {
        var $;
        ($ = m.current) === null || $ === void 0 || $.blur();
      },
      input: m.current,
      nativeElement: g.current
    };
  });
  var C = ne(n, o, j(j({}, "".concat(n, "-checked"), x), "".concat(n, "-disabled"), s)), E = function($) {
    s || ("checked" in e || w($.target.checked), p == null || p({
      target: M(M({}, e), {}, {
        type: f,
        checked: $.target.checked
      }),
      stopPropagation: function() {
        $.stopPropagation();
      },
      preventDefault: function() {
        $.preventDefault();
      },
      nativeEvent: $.nativeEvent
    }));
  };
  return /* @__PURE__ */ d.createElement("span", {
    className: C,
    title: v,
    style: a,
    ref: g
  }, /* @__PURE__ */ d.createElement("input", De({}, h, {
    className: "".concat(n, "-input"),
    ref: m,
    onChange: E,
    disabled: s,
    checked: !!x,
    type: f
  })), /* @__PURE__ */ d.createElement("span", {
    className: "".concat(n, "-inner")
  }));
});
function dy(e) {
  const t = k.useRef(null), r = () => {
    It.cancel(t.current), t.current = null;
  };
  return [() => {
    r(), t.current = It(() => {
      t.current = null;
    });
  }, (a) => {
    t.current && (a.stopPropagation(), r()), e == null || e(a);
  }];
}
function js(e) {
  return ht(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const Is = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: o,
    controlHeightSM: a,
    controlHeightLG: i,
    fontSizeLG: s,
    lineHeightLG: l,
    paddingSM: c,
    controlPaddingHorizontalSM: u,
    controlPaddingHorizontal: f,
    colorFillAlter: v,
    colorPrimaryHover: p,
    colorPrimary: h,
    controlOutlineWidth: m,
    controlOutline: g,
    colorErrorOutline: b,
    colorWarningOutline: y,
    colorBgContainer: x,
    inputFontSize: w,
    inputFontSizeLG: C,
    inputFontSizeSM: E
  } = e, S = w || r, $ = E || S, _ = C || s, T = Math.round((t - S * n) / 2 * 10) / 10 - o, F = Math.round((a - $ * n) / 2 * 10) / 10 - o, z = Math.ceil((i - _ * l) / 2 * 10) / 10 - o;
  return {
    paddingBlock: Math.max(T, 0),
    paddingBlockSM: Math.max(F, 0),
    paddingBlockLG: Math.max(z, 0),
    paddingInline: c - o,
    paddingInlineSM: u - o,
    paddingInlineLG: f - o,
    addonBg: v,
    activeBorderColor: h,
    hoverBorderColor: p,
    activeShadow: `0 0 0 ${m}px ${g}`,
    errorActiveShadow: `0 0 0 ${m}px ${b}`,
    warningActiveShadow: `0 0 0 ${m}px ${y}`,
    hoverBg: x,
    activeBg: x,
    inputFontSize: S,
    inputFontSizeLG: _,
    inputFontSizeSM: $
  };
}, fy = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), As = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, fy(ht(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), kd = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), vc = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, kd(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), vy = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, kd(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, As(e))
  }), vc(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), vc(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), gc = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), gy = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, gc(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), gc(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, As(e))
    }
  })
}), my = (e, t) => {
  const {
    componentCls: r
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${r}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${r}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${r}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, Wd = (e, t) => {
  var r;
  return {
    background: t.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: "transparent",
    "input&, & input, textarea&, & textarea": {
      color: (r = t == null ? void 0 : t.inputColor) !== null && r !== void 0 ? r : "unset"
    },
    "&:hover": {
      background: t.hoverBg
    },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: t.activeBorderColor,
      backgroundColor: e.activeBg
    }
  };
}, mc = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Wd(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), py = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Wd(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, As(e))
  }), mc(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), mc(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), pc = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), hy = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${we(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${we(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, pc(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), pc(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), qd = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: `${we(e.lineWidth)} 0`,
  borderStyle: `${e.lineType} none`,
  borderColor: `transparent transparent ${t.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${t.borderColor} transparent`,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${t.borderColor} transparent`,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), hc = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, qd(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${t.borderColor} transparent`
  }
}), by = (e, t) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, qd(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    // >>>>> Disabled
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${e.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    }
  }), hc(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), hc(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), yy = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), Ud = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${we(t)} ${we(o)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, Gd = (e) => ({
  padding: `${we(e.paddingBlockSM)} ${we(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Xd = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${we(e.paddingBlock)} ${we(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, yy(e.colorTextPlaceholder)), {
  // Size
  "&-lg": Object.assign({}, Ud(e)),
  "&-sm": Object.assign({}, Gd(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), Cy = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Ud(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Gd(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${we(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${we(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${we(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${we(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${r}-cascader-picker`]: {
          margin: `-9px ${we(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${r}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [t]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, fm()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [t]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${r}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${r}-select > ${r}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${r}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, Sy = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: o
  } = e, i = o(r).sub(o(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rn(e)), Xd(e)), vy(e)), py(e)), my(e)), by(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: r,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    })
  };
}, xy = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: e.colorIcon
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${we(e.inputAffixPadding)}`
      }
    }
  };
}, Ey = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: r,
    colorTextDescription: n,
    motionDurationSlow: o,
    colorIcon: a,
    colorIconHover: i,
    iconCls: s
  } = e, l = `${t}-affix-wrapper`, c = `${t}-affix-wrapper-disabled`;
  return {
    [l]: Object.assign(Object.assign(Object.assign(Object.assign({}, Xd(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: n,
          direction: "ltr"
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: r
        },
        "&-suffix": {
          marginInlineStart: r
        }
      }
    }), xy(e)), {
      // password
      [`${s}${t}-password-icon`]: {
        color: a,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: i
        }
      }
    }),
    // 覆盖 affix-wrapper borderRadius！
    [`${t}-underlined`]: {
      borderRadius: 0
    },
    [c]: {
      // password disabled
      [`${s}${t}-password-icon`]: {
        color: a,
        cursor: "not-allowed",
        "&:hover": {
          color: a
        }
      }
    }
  };
}, wy = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, rn(e)), Cy(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: r,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: n
          }
        }
      }, gy(e)), hy(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${t}-compact-first-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      })
    })
  };
}, $y = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e, n = `${t}-search`;
  return {
    [n]: {
      [t]: {
        "&:hover, &:focus": {
          [`+ ${t}-group-addon ${n}-button:not(${r}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        height: e.controlHeight,
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${n}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${n}-button:not(${r}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${r}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${n}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      "&-large": {
        [`${t}-affix-wrapper, ${n}-button`]: {
          height: e.controlHeightLG
        }
      },
      "&-small": {
        [`${t}-affix-wrapper, ${n}-button`]: {
          height: e.controlHeightSM
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, Oy = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, Kd = kt(["Input", "Shared"], (e) => {
  const t = ht(e, js(e));
  return [Sy(t), Ey(t)];
}, Is, {
  resetFont: !1
}), Ry = kt(["Input", "Component"], (e) => {
  const t = ht(e, js(e));
  return [
    wy(t),
    $y(t),
    Oy(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    pd(t)
  ];
}, Is, {
  resetFont: !1
}), _y = (e) => {
  const {
    checkboxCls: t
  } = e, r = `${t}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${t}-group`]: Object.assign(Object.assign({}, rn(e)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: e.marginXS,
        // Group > Grid
        [`> ${e.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [r]: Object.assign(Object.assign({}, rn(e)), {
        display: "inline-flex",
        alignItems: "baseline",
        cursor: "pointer",
        // Fix checkbox & radio in flex align #30260
        "&:after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: "'\\a0'"
        },
        // Checkbox near checkbox
        [`& + ${r}`]: {
          marginInlineStart: 0
        },
        [`&${r}-in-form-item`]: {
          'input[type="checkbox"]': {
            width: 14,
            // FIXME: magic
            height: 14
            // FIXME: magic
          }
        }
      }),
      // Wrapper > Checkbox
      [t]: Object.assign(Object.assign({}, rn(e)), {
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 1,
        cursor: "pointer",
        borderRadius: e.borderRadiusSM,
        // To make alignment right when `controlHeight` is changed
        // Ref: https://github.com/ant-design/ant-design/issues/41564
        alignSelf: "center",
        // Wrapper > Checkbox > input
        [`${t}-input`]: {
          position: "absolute",
          // Since baseline align will get additional space offset,
          // we need to move input to top to make it align with text.
          // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, Mu(e))
        },
        // Wrapper > Checkbox > inner
        [`${t}-inner`]: {
          boxSizing: "border-box",
          display: "block",
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: "ltr",
          backgroundColor: e.colorBgContainer,
          border: `${we(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusSM,
          borderCollapse: "separate",
          transition: `all ${e.motionDurationSlow}`,
          "&:after": {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            insetInlineStart: "25%",
            display: "table",
            width: e.calc(e.checkboxSize).div(14).mul(5).equal(),
            height: e.calc(e.checkboxSize).div(14).mul(8).equal(),
            border: `${we(e.lineWidthBold)} solid ${e.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
            opacity: 0,
            content: '""',
            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
          }
        },
        // Wrapper > Checkbox + Text
        "& + span": {
          paddingInlineStart: e.paddingXS,
          paddingInlineEnd: e.paddingXS
        }
      })
    },
    // ===================== Hover =====================
    {
      // Wrapper & Wrapper > Checkbox
      [`
        ${r}:not(${r}-disabled),
        ${t}:not(${t}-disabled)
      `]: {
        [`&:hover ${t}-inner`]: {
          borderColor: e.colorPrimary
        }
      },
      [`${r}:not(${r}-disabled)`]: {
        [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${t}-checked:not(${t}-disabled):after`]: {
          borderColor: e.colorPrimaryHover
        }
      }
    },
    // ==================== Checked ====================
    {
      // Wrapper > Checkbox
      [`${t}-checked`]: {
        [`${t}-inner`]: {
          backgroundColor: e.colorPrimary,
          borderColor: e.colorPrimary,
          "&:after": {
            opacity: 1,
            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
            transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
          }
        }
      },
      [`
        ${r}-checked:not(${r}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]: {
        [`&:hover ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: "transparent"
        }
      }
    },
    // ================= Indeterminate =================
    {
      [t]: {
        "&-indeterminate": {
          // Wrapper > Checkbox > inner
          [`${t}-inner`]: {
            backgroundColor: `${e.colorBgContainer} !important`,
            borderColor: `${e.colorBorder} !important`,
            "&:after": {
              top: "50%",
              insetInlineStart: "50%",
              width: e.calc(e.fontSizeLG).div(2).equal(),
              height: e.calc(e.fontSizeLG).div(2).equal(),
              backgroundColor: e.colorPrimary,
              border: 0,
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 1,
              content: '""'
            }
          },
          // https://github.com/ant-design/ant-design/issues/50074
          [`&:hover ${t}-inner`]: {
            backgroundColor: `${e.colorBgContainer} !important`,
            borderColor: `${e.colorPrimary} !important`
          }
        }
      }
    },
    // ==================== Disable ====================
    {
      // Wrapper
      [`${r}-disabled`]: {
        cursor: "not-allowed"
      },
      // Wrapper > Checkbox
      [`${t}-disabled`]: {
        // Wrapper > Checkbox > input
        [`&, ${t}-input`]: {
          cursor: "not-allowed",
          // Disabled for native input to enable Tooltip event handler
          // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
          pointerEvents: "none"
        },
        // Wrapper > Checkbox > inner
        [`${t}-inner`]: {
          background: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          "&:after": {
            borderColor: e.colorTextDisabled
          }
        },
        "&:after": {
          display: "none"
        },
        "& + span": {
          color: e.colorTextDisabled
        },
        [`&${t}-indeterminate ${t}-inner::after`]: {
          background: e.colorTextDisabled
        }
      }
    }
  ];
};
function Py(e, t) {
  const r = ht(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  });
  return [_y(r)];
}
const Yd = kt("Checkbox", (e, t) => {
  let {
    prefixCls: r
  } = t;
  return [Py(r, e)];
}), Zd = /* @__PURE__ */ k.createContext(null);
var Ty = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Ny = (e, t) => {
  var r;
  const {
    prefixCls: n,
    className: o,
    rootClassName: a,
    children: i,
    indeterminate: s = !1,
    style: l,
    onMouseEnter: c,
    onMouseLeave: u,
    skipGroup: f = !1,
    disabled: v
  } = e, p = Ty(e, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]), {
    getPrefixCls: h,
    direction: m,
    checkbox: g
  } = d.useContext(rt), b = d.useContext(Zd), {
    isFormItemInput: y
  } = d.useContext(gn), x = d.useContext(jr), w = (r = (b == null ? void 0 : b.disabled) || v) !== null && r !== void 0 ? r : x, C = d.useRef(p.value), E = d.useRef(null), S = br(t, E);
  if (process.env.NODE_ENV !== "production") {
    const R = gt("Checkbox");
    process.env.NODE_ENV !== "production" && R("checked" in p || !!b || !("value" in p), "usage", "`value` is not a valid prop, do you mean `checked`?");
  }
  d.useEffect(() => {
    b == null || b.registerValue(p.value);
  }, []), d.useEffect(() => {
    if (!f)
      return p.value !== C.current && (b == null || b.cancelValue(C.current), b == null || b.registerValue(p.value), C.current = p.value), () => b == null ? void 0 : b.cancelValue(p.value);
  }, [p.value]), d.useEffect(() => {
    var R;
    !((R = E.current) === null || R === void 0) && R.input && (E.current.input.indeterminate = s);
  }, [s]);
  const $ = h("checkbox", n), _ = na($), [T, F, z] = Yd($, _), I = Object.assign({}, p);
  b && !f && (I.onChange = function() {
    p.onChange && p.onChange.apply(p, arguments), b.toggleOption && b.toggleOption({
      label: i,
      value: p.value
    });
  }, I.name = b.name, I.checked = b.value.includes(p.value));
  const L = ne(`${$}-wrapper`, {
    [`${$}-rtl`]: m === "rtl",
    [`${$}-wrapper-checked`]: I.checked,
    [`${$}-wrapper-disabled`]: w,
    [`${$}-wrapper-in-form-item`]: y
  }, g == null ? void 0 : g.className, o, a, z, _, F), A = ne({
    [`${$}-indeterminate`]: s
  }, ws, F), [O, P] = dy(I.onClick);
  return T(/* @__PURE__ */ d.createElement($s, {
    component: "Checkbox",
    disabled: w
  }, /* @__PURE__ */ d.createElement("label", {
    className: L,
    style: Object.assign(Object.assign({}, g == null ? void 0 : g.style), l),
    onMouseEnter: c,
    onMouseLeave: u,
    onClick: O
  }, /* @__PURE__ */ d.createElement(uy, Object.assign({}, I, {
    onClick: P,
    prefixCls: $,
    className: A,
    disabled: w,
    ref: S
  })), i !== void 0 && /* @__PURE__ */ d.createElement("span", {
    className: `${$}-label`
  }, i))));
}, Ms = /* @__PURE__ */ d.forwardRef(Ny);
process.env.NODE_ENV !== "production" && (Ms.displayName = "Checkbox");
var jy = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Iy = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    defaultValue: r,
    children: n,
    options: o = [],
    prefixCls: a,
    className: i,
    rootClassName: s,
    style: l,
    onChange: c
  } = e, u = jy(e, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]), {
    getPrefixCls: f,
    direction: v
  } = d.useContext(rt), [p, h] = d.useState(u.value || r || []), [m, g] = d.useState([]);
  d.useEffect(() => {
    "value" in u && h(u.value || []);
  }, [u.value]);
  const b = d.useMemo(() => o.map((A) => typeof A == "string" || typeof A == "number" ? {
    label: A,
    value: A
  } : A), [o]), y = (A) => {
    g((O) => O.filter((P) => P !== A));
  }, x = (A) => {
    g((O) => [].concat(fe(O), [A]));
  }, w = (A) => {
    const O = p.indexOf(A.value), P = fe(p);
    O === -1 ? P.push(A.value) : P.splice(O, 1), "value" in u || h(P), c == null || c(P.filter((R) => m.includes(R)).sort((R, D) => {
      const V = b.findIndex((q) => q.value === R), H = b.findIndex((q) => q.value === D);
      return V - H;
    }));
  }, C = f("checkbox", a), E = `${C}-group`, S = na(C), [$, _, T] = Yd(C, S), F = Fr(u, ["value", "disabled"]), z = o.length ? b.map((A) => /* @__PURE__ */ d.createElement(Ms, {
    prefixCls: C,
    key: A.value.toString(),
    disabled: "disabled" in A ? A.disabled : u.disabled,
    value: A.value,
    checked: p.includes(A.value),
    onChange: A.onChange,
    className: `${E}-item`,
    style: A.style,
    title: A.title,
    id: A.id,
    required: A.required
  }, A.label)) : n, I = {
    toggleOption: w,
    value: p,
    disabled: u.disabled,
    name: u.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: x,
    cancelValue: y
  }, L = ne(E, {
    [`${E}-rtl`]: v === "rtl"
  }, i, s, T, S, _);
  return $(/* @__PURE__ */ d.createElement("div", Object.assign({
    className: L,
    style: l
  }, F, {
    ref: t
  }), /* @__PURE__ */ d.createElement(Zd.Provider, {
    value: I
  }, z)));
}), qn = Ms;
qn.Group = Iy;
qn.__ANT_CHECKBOX = !0;
process.env.NODE_ENV !== "production" && (qn.displayName = "Checkbox");
const Qd = /* @__PURE__ */ Go({});
var Ay = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function bc(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const My = ["xs", "sm", "md", "lg", "xl", "xxl"], ss = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    getPrefixCls: r,
    direction: n
  } = d.useContext(rt), {
    gutter: o,
    wrap: a
  } = d.useContext(Qd), {
    prefixCls: i,
    span: s,
    order: l,
    offset: c,
    push: u,
    pull: f,
    className: v,
    children: p,
    flex: h,
    style: m
  } = e, g = Ay(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), b = r("col", i), [y, x, w] = mb(b), C = {};
  let E = {};
  My.forEach((_) => {
    let T = {};
    const F = e[_];
    typeof F == "number" ? T.span = F : typeof F == "object" && (T = F || {}), delete g[_], E = Object.assign(Object.assign({}, E), {
      [`${b}-${_}-${T.span}`]: T.span !== void 0,
      [`${b}-${_}-order-${T.order}`]: T.order || T.order === 0,
      [`${b}-${_}-offset-${T.offset}`]: T.offset || T.offset === 0,
      [`${b}-${_}-push-${T.push}`]: T.push || T.push === 0,
      [`${b}-${_}-pull-${T.pull}`]: T.pull || T.pull === 0,
      [`${b}-rtl`]: n === "rtl"
    }), T.flex && (E[`${b}-${_}-flex`] = !0, C[`--${b}-${_}-flex`] = bc(T.flex));
  });
  const S = ne(b, {
    [`${b}-${s}`]: s !== void 0,
    [`${b}-order-${l}`]: l,
    [`${b}-offset-${c}`]: c,
    [`${b}-push-${u}`]: u,
    [`${b}-pull-${f}`]: f
  }, v, E, x, w), $ = {};
  if (o && o[0] > 0) {
    const _ = o[0] / 2;
    $.paddingLeft = _, $.paddingRight = _;
  }
  return h && ($.flex = bc(h), a === !1 && !$.minWidth && ($.minWidth = 0)), y(/* @__PURE__ */ d.createElement("div", Object.assign({}, g, {
    style: Object.assign(Object.assign(Object.assign({}, $), m), C),
    className: S,
    ref: t
  }), p));
});
process.env.NODE_ENV !== "production" && (ss.displayName = "Col");
function Fy(e, t) {
  const r = [void 0, void 0], n = Array.isArray(e) ? e : [e, void 0], o = t || {
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  };
  return n.forEach((a, i) => {
    if (typeof a == "object" && a !== null)
      for (let s = 0; s < Wn.length; s++) {
        const l = Wn[s];
        if (o[l] && a[l] !== void 0) {
          r[i] = a[l];
          break;
        }
      }
    else
      r[i] = a;
  }), r;
}
var Ly = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function yc(e, t) {
  const [r, n] = d.useState(typeof e == "string" ? e : ""), o = () => {
    if (typeof e == "string" && n(e), typeof e == "object")
      for (let a = 0; a < Wn.length; a++) {
        const i = Wn[a];
        if (!t || !t[i])
          continue;
        const s = e[i];
        if (s !== void 0) {
          n(s);
          return;
        }
      }
  };
  return d.useEffect(() => {
    o();
  }, [JSON.stringify(e), t]), r;
}
const Jd = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: r,
    justify: n,
    align: o,
    className: a,
    style: i,
    children: s,
    gutter: l = 0,
    wrap: c
  } = e, u = Ly(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]), {
    getPrefixCls: f,
    direction: v
  } = d.useContext(rt), p = Ab(!0, null), h = yc(o, p), m = yc(n, p), g = f("row", r), [b, y, x] = vb(g), w = Fy(l, p), C = ne(g, {
    [`${g}-no-wrap`]: c === !1,
    [`${g}-${m}`]: m,
    [`${g}-${h}`]: h,
    [`${g}-rtl`]: v === "rtl"
  }, a, y, x), E = {}, S = w[0] != null && w[0] > 0 ? w[0] / -2 : void 0;
  S && (E.marginLeft = S, E.marginRight = S);
  const [$, _] = w;
  E.rowGap = _;
  const T = d.useMemo(() => ({
    gutter: [$, _],
    wrap: c
  }), [$, _, c]);
  return b(/* @__PURE__ */ d.createElement(Qd.Provider, {
    value: T
  }, /* @__PURE__ */ d.createElement("div", Object.assign({}, u, {
    className: C,
    style: Object.assign(Object.assign({}, E), i),
    ref: t
  }), s)));
});
process.env.NODE_ENV !== "production" && (Jd.displayName = "Row");
function Dy(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function Vy(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Cc(e, t, r) {
  var n = t.cloneNode(!0), o = Object.create(e, {
    target: {
      value: n
    },
    currentTarget: {
      value: n
    }
  });
  return n.value = r, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (n.selectionStart = t.selectionStart, n.selectionEnd = t.selectionEnd), n.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, o;
}
function Uo(e, t, r, n) {
  if (r) {
    var o = t;
    if (t.type === "click") {
      o = Cc(t, e, ""), r(o);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      o = Cc(t, e, n), r(o);
      return;
    }
    r(o);
  }
}
function ef(e, t) {
  if (e) {
    e.focus(t);
    var r = t || {}, n = r.cursor;
    if (n) {
      var o = e.value.length;
      switch (n) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(o, o);
          break;
        default:
          e.setSelectionRange(0, o);
      }
    }
  }
}
var tf = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var r, n, o, a = e.inputElement, i = e.children, s = e.prefixCls, l = e.prefix, c = e.suffix, u = e.addonBefore, f = e.addonAfter, v = e.className, p = e.style, h = e.disabled, m = e.readOnly, g = e.focused, b = e.triggerFocus, y = e.allowClear, x = e.value, w = e.handleReset, C = e.hidden, E = e.classes, S = e.classNames, $ = e.dataAttrs, _ = e.styles, T = e.components, F = e.onClear, z = i != null ? i : a, I = (T == null ? void 0 : T.affixWrapper) || "span", L = (T == null ? void 0 : T.groupWrapper) || "span", A = (T == null ? void 0 : T.wrapper) || "span", O = (T == null ? void 0 : T.groupAddon) || "span", P = Oe(null), R = function(ue) {
    var re;
    (re = P.current) !== null && re !== void 0 && re.contains(ue.target) && (b == null || b());
  }, D = Vy(e), V = /* @__PURE__ */ mf(z, {
    value: x,
    className: ne((r = z.props) === null || r === void 0 ? void 0 : r.className, !D && (S == null ? void 0 : S.variant)) || null
  }), H = Oe(null);
  if (k.useImperativeHandle(t, function() {
    return {
      nativeElement: H.current || P.current
    };
  }), D) {
    var q = null;
    if (y) {
      var U = !h && !m && x, B = "".concat(s, "-clear-icon"), Q = Ce(y) === "object" && y !== null && y !== void 0 && y.clearIcon ? y.clearIcon : "✖";
      q = /* @__PURE__ */ k.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: function(ue) {
          w == null || w(ue), F == null || F();
        },
        onMouseDown: function(ue) {
          return ue.preventDefault();
        },
        className: ne(B, j(j({}, "".concat(B, "-hidden"), !U), "".concat(B, "-has-suffix"), !!c))
      }, Q);
    }
    var ie = "".concat(s, "-affix-wrapper"), ve = ne(ie, j(j(j(j(j({}, "".concat(s, "-disabled"), h), "".concat(ie, "-disabled"), h), "".concat(ie, "-focused"), g), "".concat(ie, "-readonly"), m), "".concat(ie, "-input-with-clear-btn"), c && y && x), E == null ? void 0 : E.affixWrapper, S == null ? void 0 : S.affixWrapper, S == null ? void 0 : S.variant), oe = (c || y) && /* @__PURE__ */ k.createElement("span", {
      className: ne("".concat(s, "-suffix"), S == null ? void 0 : S.suffix),
      style: _ == null ? void 0 : _.suffix
    }, q, c);
    V = /* @__PURE__ */ k.createElement(I, De({
      className: ve,
      style: _ == null ? void 0 : _.affixWrapper,
      onClick: R
    }, $ == null ? void 0 : $.affixWrapper, {
      ref: P
    }), l && /* @__PURE__ */ k.createElement("span", {
      className: ne("".concat(s, "-prefix"), S == null ? void 0 : S.prefix),
      style: _ == null ? void 0 : _.prefix
    }, l), V, oe);
  }
  if (Dy(e)) {
    var ae = "".concat(s, "-group"), me = "".concat(ae, "-addon"), pe = "".concat(ae, "-wrapper"), se = ne("".concat(s, "-wrapper"), ae, E == null ? void 0 : E.wrapper, S == null ? void 0 : S.wrapper), ge = ne(pe, j({}, "".concat(pe, "-disabled"), h), E == null ? void 0 : E.group, S == null ? void 0 : S.groupWrapper);
    V = /* @__PURE__ */ k.createElement(L, {
      className: ge,
      ref: H
    }, /* @__PURE__ */ k.createElement(A, {
      className: se
    }, u && /* @__PURE__ */ k.createElement(O, {
      className: me
    }, u), V, f && /* @__PURE__ */ k.createElement(O, {
      className: me
    }, f)));
  }
  return /* @__PURE__ */ k.cloneElement(V, {
    className: ne((n = V.props) === null || n === void 0 ? void 0 : n.className, v) || null,
    style: M(M({}, (o = V.props) === null || o === void 0 ? void 0 : o.style), p),
    hidden: C
  });
}), zy = ["show"];
function rf(e, t) {
  return d.useMemo(function() {
    var r = {};
    t && (r.show = Ce(t) === "object" && t.formatter ? t.formatter : !!t), r = M(M({}, r), e);
    var n = r, o = n.show, a = ut(n, zy);
    return M(M({}, a), {}, {
      show: !!o,
      showFormatter: typeof o == "function" ? o : void 0,
      strategy: a.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var By = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], Hy = /* @__PURE__ */ lr(function(e, t) {
  var r = e.autoComplete, n = e.onChange, o = e.onFocus, a = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, l = e.onKeyUp, c = e.prefixCls, u = c === void 0 ? "rc-input" : c, f = e.disabled, v = e.htmlSize, p = e.className, h = e.maxLength, m = e.suffix, g = e.showCount, b = e.count, y = e.type, x = y === void 0 ? "text" : y, w = e.classes, C = e.classNames, E = e.styles, S = e.onCompositionStart, $ = e.onCompositionEnd, _ = ut(e, By), T = Qt(!1), F = Y(T, 2), z = F[0], I = F[1], L = Oe(!1), A = Oe(!1), O = Oe(null), P = Oe(null), R = function(be) {
    O.current && ef(O.current, be);
  }, D = hr(e.defaultValue, {
    value: e.value
  }), V = Y(D, 2), H = V[0], q = V[1], U = H == null ? "" : String(H), B = Qt(null), Q = Y(B, 2), ie = Q[0], ve = Q[1], oe = rf(b, g), ae = oe.max || h, me = oe.strategy(U), pe = !!ae && me > ae;
  Xo(t, function() {
    var J;
    return {
      focus: R,
      blur: function() {
        var Ee;
        (Ee = O.current) === null || Ee === void 0 || Ee.blur();
      },
      setSelectionRange: function(Ee, Ne, Ve) {
        var Ie;
        (Ie = O.current) === null || Ie === void 0 || Ie.setSelectionRange(Ee, Ne, Ve);
      },
      select: function() {
        var Ee;
        (Ee = O.current) === null || Ee === void 0 || Ee.select();
      },
      input: O.current,
      nativeElement: ((J = P.current) === null || J === void 0 ? void 0 : J.nativeElement) || O.current
    };
  }), tt(function() {
    A.current && (A.current = !1), I(function(J) {
      return J && f ? !1 : J;
    });
  }, [f]);
  var se = function(be, Ee, Ne) {
    var Ve = Ee;
    if (!L.current && oe.exceedFormatter && oe.max && oe.strategy(Ee) > oe.max) {
      if (Ve = oe.exceedFormatter(Ee, {
        max: oe.max
      }), Ee !== Ve) {
        var Ie, ke;
        ve([((Ie = O.current) === null || Ie === void 0 ? void 0 : Ie.selectionStart) || 0, ((ke = O.current) === null || ke === void 0 ? void 0 : ke.selectionEnd) || 0]);
      }
    } else if (Ne.source === "compositionEnd")
      return;
    q(Ve), O.current && Uo(O.current, be, n, Ve);
  };
  tt(function() {
    if (ie) {
      var J;
      (J = O.current) === null || J === void 0 || J.setSelectionRange.apply(J, fe(ie));
    }
  }, [ie]);
  var ge = function(be) {
    se(be, be.target.value, {
      source: "change"
    });
  }, X = function(be) {
    L.current = !1, se(be, be.currentTarget.value, {
      source: "compositionEnd"
    }), $ == null || $(be);
  }, ue = function(be) {
    i && be.key === "Enter" && !A.current && (A.current = !0, i(be)), s == null || s(be);
  }, re = function(be) {
    be.key === "Enter" && (A.current = !1), l == null || l(be);
  }, de = function(be) {
    I(!0), o == null || o(be);
  }, he = function(be) {
    A.current && (A.current = !1), I(!1), a == null || a(be);
  }, ye = function(be) {
    q(""), R(), O.current && Uo(O.current, be, n);
  }, Te = pe && "".concat(u, "-out-of-range"), xe = function() {
    var be = Fr(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return /* @__PURE__ */ k.createElement("input", De({
      autoComplete: r
    }, be, {
      onChange: ge,
      onFocus: de,
      onBlur: he,
      onKeyDown: ue,
      onKeyUp: re,
      className: ne(u, j({}, "".concat(u, "-disabled"), f), C == null ? void 0 : C.input),
      style: E == null ? void 0 : E.input,
      ref: O,
      size: v,
      type: x,
      onCompositionStart: function(Ne) {
        L.current = !0, S == null || S(Ne);
      },
      onCompositionEnd: X
    }));
  }, Re = function() {
    var be = Number(ae) > 0;
    if (m || oe.show) {
      var Ee = oe.showFormatter ? oe.showFormatter({
        value: U,
        count: me,
        maxLength: ae
      }) : "".concat(me).concat(be ? " / ".concat(ae) : "");
      return /* @__PURE__ */ k.createElement(k.Fragment, null, oe.show && /* @__PURE__ */ k.createElement("span", {
        className: ne("".concat(u, "-show-count-suffix"), j({}, "".concat(u, "-show-count-has-suffix"), !!m), C == null ? void 0 : C.count),
        style: M({}, E == null ? void 0 : E.count)
      }, Ee), m);
    }
    return null;
  };
  return /* @__PURE__ */ k.createElement(tf, De({}, _, {
    prefixCls: u,
    className: ne(p, Te),
    handleReset: ye,
    value: U,
    focused: z,
    triggerFocus: R,
    suffix: Re(),
    disabled: f,
    classes: w,
    classNames: C,
    styles: E,
    ref: P
  }), xe());
});
const nf = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ k.createElement(td, null)
  }), t;
};
function ky(e, t) {
  const r = Oe([]), n = () => {
    r.current.push(setTimeout(() => {
      var o, a, i, s;
      !((o = e.current) === null || o === void 0) && o.input && ((a = e.current) === null || a === void 0 ? void 0 : a.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return tt(() => (n(), () => r.current.forEach((o) => {
    o && clearTimeout(o);
  })), []), n;
}
function Wy(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var qy = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Uy = /* @__PURE__ */ lr((e, t) => {
  const {
    prefixCls: r,
    bordered: n = !0,
    status: o,
    size: a,
    disabled: i,
    onBlur: s,
    onFocus: l,
    suffix: c,
    allowClear: u,
    addonAfter: f,
    addonBefore: v,
    className: p,
    style: h,
    styles: m,
    rootClassName: g,
    onChange: b,
    classNames: y,
    variant: x
  } = e, w = qy(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: ye
    } = gt("Input");
    ye(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: C,
    direction: E,
    allowClear: S,
    autoComplete: $,
    className: _,
    style: T,
    classNames: F,
    styles: z
  } = hn("input"), I = C("input", r), L = Oe(null), A = na(I), [O, P, R] = Kd(I, g), [D] = Ry(I, A), {
    compactSize: V,
    compactItemClassnames: H
  } = Rs(I, E), q = Os((ye) => {
    var Te;
    return (Te = a != null ? a : V) !== null && Te !== void 0 ? Te : ye;
  }), U = k.useContext(jr), B = i != null ? i : U, {
    status: Q,
    hasFeedback: ie,
    feedbackIcon: ve
  } = yt(gn), oe = Pd(Q, o), ae = Wy(e) || !!ie, me = Oe(ae);
  if (process.env.NODE_ENV !== "production") {
    const ye = gt("Input");
    tt(() => {
      var Te;
      ae && !me.current && process.env.NODE_ENV !== "production" && ye(document.activeElement === ((Te = L.current) === null || Te === void 0 ? void 0 : Te.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), me.current = ae;
    }, [ae]);
  }
  const pe = ky(L), se = (ye) => {
    pe(), s == null || s(ye);
  }, ge = (ye) => {
    pe(), l == null || l(ye);
  }, X = (ye) => {
    pe(), b == null || b(ye);
  }, ue = (ie || c) && /* @__PURE__ */ k.createElement(k.Fragment, null, c, ie && ve), re = nf(u != null ? u : S), [de, he] = Td("input", x, n);
  return O(D(/* @__PURE__ */ k.createElement(Hy, Object.assign({
    ref: br(t, L),
    prefixCls: I,
    autoComplete: $
  }, w, {
    disabled: B,
    onBlur: se,
    onFocus: ge,
    style: Object.assign(Object.assign({}, T), h),
    styles: Object.assign(Object.assign({}, z), m),
    suffix: ue,
    allowClear: re,
    className: ne(p, g, R, A, H, _),
    onChange: X,
    addonBefore: v && /* @__PURE__ */ k.createElement(rs, {
      form: !0,
      space: !0
    }, v),
    addonAfter: f && /* @__PURE__ */ k.createElement(rs, {
      form: !0,
      space: !0
    }, f),
    classNames: Object.assign(Object.assign(Object.assign({}, y), F), {
      input: ne({
        [`${I}-sm`]: q === "small",
        [`${I}-lg`]: q === "large",
        [`${I}-rtl`]: E === "rtl"
      }, y == null ? void 0 : y.input, F.input, P),
      variant: ne({
        [`${I}-${de}`]: he
      }, as(I, oe)),
      affixWrapper: ne({
        [`${I}-affix-wrapper-sm`]: q === "small",
        [`${I}-affix-wrapper-lg`]: q === "large",
        [`${I}-affix-wrapper-rtl`]: E === "rtl"
      }, P),
      wrapper: ne({
        [`${I}-group-rtl`]: E === "rtl"
      }, P),
      groupWrapper: ne({
        [`${I}-group-wrapper-sm`]: q === "small",
        [`${I}-group-wrapper-lg`]: q === "large",
        [`${I}-group-wrapper-rtl`]: E === "rtl",
        [`${I}-group-wrapper-${de}`]: he
      }, as(`${I}-group-wrapper`, oe, ie), P)
    })
  }))));
});
process.env.NODE_ENV !== "production" && (Uy.displayName = "Input");
var Gy = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, Xy = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], Za = {}, Et;
function Ky(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && Za[r])
    return Za[r];
  var n = window.getComputedStyle(e), o = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), a = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), i = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = Xy.map(function(c) {
    return "".concat(c, ":").concat(n.getPropertyValue(c));
  }).join(";"), l = {
    sizingStyle: s,
    paddingSize: a,
    borderSize: i,
    boxSizing: o
  };
  return t && r && (Za[r] = l), l;
}
function Yy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Et || (Et = document.createElement("textarea"), Et.setAttribute("tab-index", "-1"), Et.setAttribute("aria-hidden", "true"), Et.setAttribute("name", "hiddenTextarea"), document.body.appendChild(Et)), e.getAttribute("wrap") ? Et.setAttribute("wrap", e.getAttribute("wrap")) : Et.removeAttribute("wrap");
  var o = Ky(e, t), a = o.paddingSize, i = o.borderSize, s = o.boxSizing, l = o.sizingStyle;
  Et.setAttribute("style", "".concat(l, ";").concat(Gy)), Et.value = e.value || e.placeholder || "";
  var c = void 0, u = void 0, f, v = Et.scrollHeight;
  if (s === "border-box" ? v += i : s === "content-box" && (v -= a), r !== null || n !== null) {
    Et.value = " ";
    var p = Et.scrollHeight - a;
    r !== null && (c = p * r, s === "border-box" && (c = c + a + i), v = Math.max(c, v)), n !== null && (u = p * n, s === "border-box" && (u = u + a + i), f = v > u ? "" : "hidden", v = Math.min(u, v));
  }
  var h = {
    height: v,
    overflowY: f,
    resize: "none"
  };
  return c && (h.minHeight = c), u && (h.maxHeight = u), h;
}
var Zy = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Qa = 0, Ja = 1, ei = 2, Qy = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var r = e, n = r.prefixCls, o = r.defaultValue, a = r.value, i = r.autoSize, s = r.onResize, l = r.className, c = r.style, u = r.disabled, f = r.onChange, v = r.onInternalAutoSize, p = ut(r, Zy), h = hr(o, {
    value: a,
    postState: function(Q) {
      return Q != null ? Q : "";
    }
  }), m = Y(h, 2), g = m[0], b = m[1], y = function(Q) {
    b(Q.target.value), f == null || f(Q);
  }, x = d.useRef();
  d.useImperativeHandle(t, function() {
    return {
      textArea: x.current
    };
  });
  var w = d.useMemo(function() {
    return i && Ce(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), C = Y(w, 2), E = C[0], S = C[1], $ = !!i, _ = function() {
    try {
      if (document.activeElement === x.current) {
        var Q = x.current, ie = Q.selectionStart, ve = Q.selectionEnd, oe = Q.scrollTop;
        x.current.setSelectionRange(ie, ve), x.current.scrollTop = oe;
      }
    } catch (ae) {
    }
  }, T = d.useState(ei), F = Y(T, 2), z = F[0], I = F[1], L = d.useState(), A = Y(L, 2), O = A[0], P = A[1], R = function() {
    I(Qa), process.env.NODE_ENV === "test" && (v == null || v());
  };
  qe(function() {
    $ && R();
  }, [a, E, S, $]), qe(function() {
    if (z === Qa)
      I(Ja);
    else if (z === Ja) {
      var B = Yy(x.current, !1, E, S);
      I(ei), P(B);
    } else
      _();
  }, [z]);
  var D = d.useRef(), V = function() {
    It.cancel(D.current);
  }, H = function(Q) {
    z === ei && (s == null || s(Q), i && (V(), D.current = It(function() {
      R();
    })));
  };
  d.useEffect(function() {
    return V;
  }, []);
  var q = $ ? O : null, U = M(M({}, c), q);
  return (z === Qa || z === Ja) && (U.overflowY = "hidden", U.overflowX = "hidden"), /* @__PURE__ */ d.createElement(mn, {
    onResize: H,
    disabled: !(i || s)
  }, /* @__PURE__ */ d.createElement("textarea", De({}, p, {
    ref: x,
    style: U,
    className: ne(n, l, j({}, "".concat(n, "-disabled"), u)),
    disabled: u,
    value: g,
    onChange: y
  })));
}), Jy = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], eC = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var r, n = e.defaultValue, o = e.value, a = e.onFocus, i = e.onBlur, s = e.onChange, l = e.allowClear, c = e.maxLength, u = e.onCompositionStart, f = e.onCompositionEnd, v = e.suffix, p = e.prefixCls, h = p === void 0 ? "rc-textarea" : p, m = e.showCount, g = e.count, b = e.className, y = e.style, x = e.disabled, w = e.hidden, C = e.classNames, E = e.styles, S = e.onResize, $ = e.onClear, _ = e.onPressEnter, T = e.readOnly, F = e.autoSize, z = e.onKeyDown, I = ut(e, Jy), L = hr(n, {
    value: o,
    defaultValue: n
  }), A = Y(L, 2), O = A[0], P = A[1], R = O == null ? "" : String(O), D = k.useState(!1), V = Y(D, 2), H = V[0], q = V[1], U = k.useRef(!1), B = k.useState(null), Q = Y(B, 2), ie = Q[0], ve = Q[1], oe = Oe(null), ae = Oe(null), me = function() {
    var te;
    return (te = ae.current) === null || te === void 0 ? void 0 : te.textArea;
  }, pe = function() {
    me().focus();
  };
  Xo(t, function() {
    var ee;
    return {
      resizableTextArea: ae.current,
      focus: pe,
      blur: function() {
        me().blur();
      },
      nativeElement: ((ee = oe.current) === null || ee === void 0 ? void 0 : ee.nativeElement) || me()
    };
  }), tt(function() {
    q(function(ee) {
      return !x && ee;
    });
  }, [x]);
  var se = k.useState(null), ge = Y(se, 2), X = ge[0], ue = ge[1];
  k.useEffect(function() {
    if (X) {
      var ee;
      (ee = me()).setSelectionRange.apply(ee, fe(X));
    }
  }, [X]);
  var re = rf(g, m), de = (r = re.max) !== null && r !== void 0 ? r : c, he = Number(de) > 0, ye = re.strategy(R), Te = !!de && ye > de, xe = function(te, ce) {
    var G = ce;
    !U.current && re.exceedFormatter && re.max && re.strategy(ce) > re.max && (G = re.exceedFormatter(ce, {
      max: re.max
    }), ce !== G && ue([me().selectionStart || 0, me().selectionEnd || 0])), P(G), Uo(te.currentTarget, te, s, G);
  }, Re = function(te) {
    U.current = !0, u == null || u(te);
  }, J = function(te) {
    U.current = !1, xe(te, te.currentTarget.value), f == null || f(te);
  }, be = function(te) {
    xe(te, te.target.value);
  }, Ee = function(te) {
    te.key === "Enter" && _ && _(te), z == null || z(te);
  }, Ne = function(te) {
    q(!0), a == null || a(te);
  }, Ve = function(te) {
    q(!1), i == null || i(te);
  }, Ie = function(te) {
    P(""), pe(), Uo(me(), te, s);
  }, ke = v, N;
  re.show && (re.showFormatter ? N = re.showFormatter({
    value: R,
    count: ye,
    maxLength: de
  }) : N = "".concat(ye).concat(he ? " / ".concat(de) : ""), ke = /* @__PURE__ */ k.createElement(k.Fragment, null, ke, /* @__PURE__ */ k.createElement("span", {
    className: ne("".concat(h, "-data-count"), C == null ? void 0 : C.count),
    style: E == null ? void 0 : E.count
  }, N)));
  var W = function(te) {
    var ce;
    S == null || S(te), (ce = me()) !== null && ce !== void 0 && ce.style.height && ve(!0);
  }, Z = !F && !m && !l;
  return /* @__PURE__ */ k.createElement(tf, {
    ref: oe,
    value: R,
    allowClear: l,
    handleReset: Ie,
    suffix: ke,
    prefixCls: h,
    classNames: M(M({}, C), {}, {
      affixWrapper: ne(C == null ? void 0 : C.affixWrapper, j(j({}, "".concat(h, "-show-count"), m), "".concat(h, "-textarea-allow-clear"), l))
    }),
    disabled: x,
    focused: H,
    className: ne(b, Te && "".concat(h, "-out-of-range")),
    style: M(M({}, y), ie && !Z ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof N == "string" ? N : void 0
      }
    },
    hidden: w,
    readOnly: T,
    onClear: $
  }, /* @__PURE__ */ k.createElement(Qy, De({}, I, {
    autoSize: F,
    maxLength: c,
    onKeyDown: Ee,
    onChange: be,
    onFocus: Ne,
    onBlur: Ve,
    onCompositionStart: Re,
    onCompositionEnd: J,
    className: ne(C == null ? void 0 : C.textarea),
    style: M(M({}, E == null ? void 0 : E.textarea), {}, {
      resize: y == null ? void 0 : y.resize
    }),
    disabled: x,
    prefixCls: h,
    onResize: W,
    ref: ae,
    readOnly: T
  })));
});
const tC = (e) => {
  const {
    componentCls: t,
    paddingLG: r
  } = e, n = `${t}-textarea`;
  return {
    // Raw Textarea
    [`textarea${t}`]: {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: e.controlHeight,
      lineHeight: e.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${e.motionDurationSlow}`,
      resize: "vertical",
      [`&${t}-mouse-active`]: {
        transition: `all ${e.motionDurationSlow}, height 0s, width 0s`
      }
    },
    // Wrapper for resize
    [`${t}-textarea-affix-wrapper-resize-dirty`]: {
      width: "auto"
    },
    [n]: {
      position: "relative",
      "&-show-count": {
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${n}-has-feedback ${t}
      `]: {
        paddingInlineEnd: r
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          minHeight: e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingInline,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${n}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-rtl`]: {
        [`${t}-suffix`]: {
          [`${t}-data-count`]: {
            direction: "ltr",
            insetInlineStart: 0
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
        [`${t}-suffix`]: {
          [`${t}-clear-icon`]: {
            insetInlineEnd: e.paddingInlineSM
          }
        }
      }
    }
  };
}, rC = kt(["Input", "TextArea"], (e) => {
  const t = ht(e, js(e));
  return [tC(t)];
}, Is, {
  resetFont: !1
});
var nC = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const oC = /* @__PURE__ */ lr((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: o = !0,
    size: a,
    disabled: i,
    status: s,
    allowClear: l,
    classNames: c,
    rootClassName: u,
    className: f,
    style: v,
    styles: p,
    variant: h,
    showCount: m,
    onMouseDown: g,
    onResize: b
  } = e, y = nC(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: re
    } = gt("TextArea");
    re(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: x,
    direction: w,
    allowClear: C,
    autoComplete: E,
    className: S,
    style: $,
    classNames: _,
    styles: T
  } = hn("textArea"), F = d.useContext(jr), z = i != null ? i : F, {
    status: I,
    hasFeedback: L,
    feedbackIcon: A
  } = d.useContext(gn), O = Pd(I, s), P = d.useRef(null);
  d.useImperativeHandle(t, () => {
    var re;
    return {
      resizableTextArea: (re = P.current) === null || re === void 0 ? void 0 : re.resizableTextArea,
      focus: (de) => {
        var he, ye;
        ef((ye = (he = P.current) === null || he === void 0 ? void 0 : he.resizableTextArea) === null || ye === void 0 ? void 0 : ye.textArea, de);
      },
      blur: () => {
        var de;
        return (de = P.current) === null || de === void 0 ? void 0 : de.blur();
      }
    };
  });
  const R = x("input", n), D = na(R), [V, H, q] = Kd(R, u), [U] = rC(R, D), {
    compactSize: B,
    compactItemClassnames: Q
  } = Rs(R, w), ie = Os((re) => {
    var de;
    return (de = a != null ? a : B) !== null && de !== void 0 ? de : re;
  }), [ve, oe] = Td("textArea", h, o), ae = nf(l != null ? l : C), [me, pe] = d.useState(!1), [se, ge] = d.useState(!1), X = (re) => {
    pe(!0), g == null || g(re);
    const de = () => {
      pe(!1), document.removeEventListener("mouseup", de);
    };
    document.addEventListener("mouseup", de);
  }, ue = (re) => {
    var de, he;
    if (b == null || b(re), me && typeof getComputedStyle == "function") {
      const ye = (he = (de = P.current) === null || de === void 0 ? void 0 : de.nativeElement) === null || he === void 0 ? void 0 : he.querySelector("textarea");
      ye && getComputedStyle(ye).resize === "both" && ge(!0);
    }
  };
  return V(U(/* @__PURE__ */ d.createElement(eC, Object.assign({
    autoComplete: E
  }, y, {
    style: Object.assign(Object.assign({}, $), v),
    styles: Object.assign(Object.assign({}, T), p),
    disabled: z,
    allowClear: ae,
    className: ne(
      q,
      D,
      f,
      u,
      Q,
      S,
      // Only for wrapper
      se && `${R}-textarea-affix-wrapper-resize-dirty`
    ),
    classNames: Object.assign(Object.assign(Object.assign({}, c), _), {
      textarea: ne({
        [`${R}-sm`]: ie === "small",
        [`${R}-lg`]: ie === "large"
      }, H, c == null ? void 0 : c.textarea, _.textarea, me && `${R}-mouse-active`),
      variant: ne({
        [`${R}-${ve}`]: oe
      }, as(R, O)),
      affixWrapper: ne(`${R}-textarea-affix-wrapper`, {
        [`${R}-affix-wrapper-rtl`]: w === "rtl",
        [`${R}-affix-wrapper-sm`]: ie === "small",
        [`${R}-affix-wrapper-lg`]: ie === "large",
        [`${R}-textarea-show-count`]: m || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
      }, H)
    }),
    prefixCls: R,
    suffix: L && /* @__PURE__ */ d.createElement("span", {
      className: `${R}-textarea-suffix`
    }, A),
    showCount: m,
    ref: P,
    onResize: ue,
    onMouseDown: X
  }))));
});
function aC(e, t, r) {
  return typeof r == "boolean" ? r : e.length ? !0 : Nr(t).some((o) => o.type === Ns);
}
var of = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function da(e) {
  let {
    suffixCls: t,
    tagName: r,
    displayName: n
  } = e;
  return (o) => {
    const a = /* @__PURE__ */ d.forwardRef((i, s) => /* @__PURE__ */ d.createElement(o, Object.assign({
      ref: s,
      suffixCls: t,
      tagName: r
    }, i)));
    return process.env.NODE_ENV !== "production" && (a.displayName = n), a;
  };
}
const Fs = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: r,
    suffixCls: n,
    className: o,
    tagName: a
  } = e, i = of(e, ["prefixCls", "suffixCls", "className", "tagName"]), {
    getPrefixCls: s
  } = d.useContext(rt), l = s("layout", r), [c, u, f] = Bd(l), v = n ? `${l}-${n}` : l;
  return c(/* @__PURE__ */ d.createElement(a, Object.assign({
    className: ne(r || v, o, u, f),
    ref: t
  }, i)));
}), iC = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    direction: r
  } = d.useContext(rt), [n, o] = d.useState([]), {
    prefixCls: a,
    className: i,
    rootClassName: s,
    children: l,
    hasSider: c,
    tagName: u,
    style: f
  } = e, v = of(e, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]), p = Fr(v, ["suffixCls"]), {
    getPrefixCls: h,
    className: m,
    style: g
  } = hn("layout"), b = h("layout", a), y = aC(n, l, c), [x, w, C] = Bd(b), E = ne(b, {
    [`${b}-has-sider`]: y,
    [`${b}-rtl`]: r === "rtl"
  }, m, i, s, w, C), S = d.useMemo(() => ({
    siderHook: {
      addSider: ($) => {
        o((_) => [].concat(fe(_), [$]));
      },
      removeSider: ($) => {
        o((_) => _.filter((T) => T !== $));
      }
    }
  }), []);
  return x(/* @__PURE__ */ d.createElement(Dd.Provider, {
    value: S
  }, /* @__PURE__ */ d.createElement(u, Object.assign({
    ref: t,
    className: E,
    style: Object.assign(Object.assign({}, g), f)
  }, p), l)));
}), sC = da({
  tagName: "div",
  displayName: "Layout"
})(iC), lC = da({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header"
})(Fs), cC = da({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer"
})(Fs), uC = da({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content"
})(Fs), Lr = sC;
Lr.Header = lC;
Lr.Footer = cC;
Lr.Content = uC;
Lr.Sider = Ns;
Lr._InternalSiderContext = Hd;
const dC = function(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) && e == null ? [] : Array.isArray(e) ? e : [e];
};
var fC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "arrow-left", theme: "outlined" }, vC = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: fC
  }));
}, af = /* @__PURE__ */ d.forwardRef(vC);
process.env.NODE_ENV !== "production" && (af.displayName = "ArrowLeftOutlined");
var gC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" }, mC = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: gC
  }));
}, sf = /* @__PURE__ */ d.forwardRef(mC);
process.env.NODE_ENV !== "production" && (sf.displayName = "CopyOutlined");
var pC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, hC = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: pC
  }));
}, lf = /* @__PURE__ */ d.forwardRef(hC);
process.env.NODE_ENV !== "production" && (lf.displayName = "EditOutlined");
var bC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" }, yC = function(t, r) {
  return /* @__PURE__ */ d.createElement($t, De({}, t, {
    ref: r,
    icon: bC
  }));
}, cf = /* @__PURE__ */ d.forwardRef(yC);
process.env.NODE_ENV !== "production" && (cf.displayName = "EnterOutlined");
const CC = (e, t, r, n) => {
  const {
    titleMarginBottom: o,
    fontWeightStrong: a
  } = n;
  return {
    marginBottom: o,
    color: r,
    fontWeight: a,
    fontSize: e,
    lineHeight: t
  };
}, SC = (e) => {
  const t = [1, 2, 3, 4, 5], r = {};
  return t.forEach((n) => {
    r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = CC(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
  }), r;
}, xC = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, Du(e)), {
      userSelect: "text",
      [`&[disabled], &${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: e.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    })
  };
}, EC = (e) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: zo[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: 600
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: e.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
}), wC = (e) => {
  const {
    componentCls: t,
    paddingSM: r
  } = e, n = r;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
        marginTop: e.calc(n).mul(-1).equal(),
        marginBottom: `calc(1em - ${we(n)})`
      },
      [`${t}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
        insetBlockEnd: e.marginXS,
        color: e.colorIcon,
        // default style
        fontWeight: "normal",
        fontSize: e.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
}, $C = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), OC = () => ({
  "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-ellipsis-single-line": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    },
    "> code": {
      paddingBlock: 0,
      maxWidth: "calc(100% - 1.2em)",
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "bottom",
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: "content-box"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
}), RC = (e) => {
  const {
    componentCls: t,
    titleMarginTop: r
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      color: e.colorText,
      wordBreak: "break-word",
      lineHeight: e.lineHeight,
      [`&${t}-secondary`]: {
        color: e.colorTextDescription
      },
      [`&${t}-success`]: {
        color: e.colorSuccessText
      },
      [`&${t}-warning`]: {
        color: e.colorWarningText
      },
      [`&${t}-danger`]: {
        color: e.colorErrorText,
        "a&:active, a&:focus": {
          color: e.colorErrorTextActive
        },
        "a&:hover": {
          color: e.colorErrorTextHover
        }
      },
      [`&${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      "\n        div&,\n        p\n      ": {
        marginBottom: "1em"
      }
    }, SC(e)), {
      [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: {
        marginTop: r
      },
      "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
        "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
          marginTop: r
        }
      }
    }), EC(e)), xC(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, Du(e)), {
        marginInlineStart: e.marginXXS
      })
    }), wC(e)), $C(e)), OC()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, _C = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), uf = kt("Typography", (e) => [RC(e)], _C), PC = (e) => {
  const {
    prefixCls: t,
    "aria-label": r,
    className: n,
    style: o,
    direction: a,
    maxLength: i,
    autoSize: s = !0,
    value: l,
    onSave: c,
    onCancel: u,
    onEnd: f,
    component: v,
    enterIcon: p = /* @__PURE__ */ d.createElement(cf, null)
  } = e, h = d.useRef(null), m = d.useRef(!1), g = d.useRef(null), [b, y] = d.useState(l);
  d.useEffect(() => {
    y(l);
  }, [l]), d.useEffect(() => {
    var L;
    if (!((L = h.current) === null || L === void 0) && L.resizableTextArea) {
      const {
        textArea: A
      } = h.current.resizableTextArea;
      A.focus();
      const {
        length: O
      } = A.value;
      A.setSelectionRange(O, O);
    }
  }, []);
  const x = (L) => {
    let {
      target: A
    } = L;
    y(A.value.replace(/[\n\r]/g, ""));
  }, w = () => {
    m.current = !0;
  }, C = () => {
    m.current = !1;
  }, E = (L) => {
    let {
      keyCode: A
    } = L;
    m.current || (g.current = A);
  }, S = () => {
    c(b.trim());
  }, $ = (L) => {
    let {
      keyCode: A,
      ctrlKey: O,
      altKey: P,
      metaKey: R,
      shiftKey: D
    } = L;
    g.current !== A || m.current || O || P || R || D || (A === Il.ENTER ? (S(), f == null || f()) : A === Il.ESC && u());
  }, _ = () => {
    S();
  }, [T, F, z] = uf(t), I = ne(t, `${t}-edit-content`, {
    [`${t}-rtl`]: a === "rtl",
    [`${t}-${v}`]: !!v
  }, n, F, z);
  return T(/* @__PURE__ */ d.createElement("div", {
    className: I,
    style: o
  }, /* @__PURE__ */ d.createElement(oC, {
    ref: h,
    maxLength: i,
    value: b,
    onChange: x,
    onKeyDown: E,
    onKeyUp: $,
    onCompositionStart: w,
    onCompositionEnd: C,
    onBlur: _,
    "aria-label": r,
    rows: 1,
    autoSize: s
  }), p !== null ? ra(p, {
    className: `${t}-edit-content-confirm`
  }) : null));
};
var ti, Sc;
function TC() {
  return Sc || (Sc = 1, ti = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++)
      r.push(e.getRangeAt(n));
    switch (t.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function() {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(o) {
        e.addRange(o);
      }), t && t.focus();
    };
  }), ti;
}
var ri, xc;
function NC() {
  if (xc) return ri;
  xc = 1;
  var e = TC(), t = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, r = "Copy to clipboard: #{key}, Enter";
  function n(a) {
    var i = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return a.replace(/#{\s*key\s*}/g, i);
  }
  function o(a, i) {
    var s, l, c, u, f, v, p = !1;
    i || (i = {}), s = i.debug || !1;
    try {
      c = e(), u = document.createRange(), f = document.getSelection(), v = document.createElement("span"), v.textContent = a, v.ariaHidden = "true", v.style.all = "unset", v.style.position = "fixed", v.style.top = 0, v.style.clip = "rect(0, 0, 0, 0)", v.style.whiteSpace = "pre", v.style.webkitUserSelect = "text", v.style.MozUserSelect = "text", v.style.msUserSelect = "text", v.style.userSelect = "text", v.addEventListener("copy", function(m) {
        if (m.stopPropagation(), i.format)
          if (m.preventDefault(), typeof m.clipboardData == "undefined") {
            s && console.warn("unable to use e.clipboardData"), s && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var g = t[i.format] || t.default;
            window.clipboardData.setData(g, a);
          } else
            m.clipboardData.clearData(), m.clipboardData.setData(i.format, a);
        i.onCopy && (m.preventDefault(), i.onCopy(m.clipboardData));
      }), document.body.appendChild(v), u.selectNodeContents(v), f.addRange(u);
      var h = document.execCommand("copy");
      if (!h)
        throw new Error("copy command was unsuccessful");
      p = !0;
    } catch (m) {
      s && console.error("unable to copy using execCommand: ", m), s && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(i.format || "text", a), i.onCopy && i.onCopy(window.clipboardData), p = !0;
      } catch (g) {
        s && console.error("unable to copy using clipboardData: ", g), s && console.error("falling back to prompt"), l = n("message" in i ? i.message : r), window.prompt(l, a);
      }
    } finally {
      f && (typeof f.removeRange == "function" ? f.removeRange(u) : f.removeAllRanges()), v && document.body.removeChild(v), c();
    }
    return p;
  }
  return ri = o, ri;
}
var jC = NC();
const IC = /* @__PURE__ */ Nc(jC);
var AC = function(e, t, r, n) {
  function o(a) {
    return a instanceof r ? a : new r(function(i) {
      i(a);
    });
  }
  return new (r || (r = Promise))(function(a, i) {
    function s(u) {
      try {
        c(n.next(u));
      } catch (f) {
        i(f);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (f) {
        i(f);
      }
    }
    function c(u) {
      u.done ? a(u.value) : o(u.value).then(s, l);
    }
    c((n = n.apply(e, t || [])).next());
  });
};
const MC = (e) => {
  let {
    copyConfig: t,
    children: r
  } = e;
  const [n, o] = d.useState(!1), [a, i] = d.useState(!1), s = d.useRef(null), l = () => {
    s.current && clearTimeout(s.current);
  }, c = {};
  t.format && (c.format = t.format), d.useEffect(() => l, []);
  const u = vt((f) => AC(void 0, void 0, void 0, function* () {
    var v;
    f == null || f.preventDefault(), f == null || f.stopPropagation(), i(!0);
    try {
      const p = typeof t.text == "function" ? yield t.text() : t.text;
      IC(p || dC(r, !0).join("") || "", c), i(!1), o(!0), l(), s.current = setTimeout(() => {
        o(!1);
      }, 3e3), (v = t.onCopy) === null || v === void 0 || v.call(t, f);
    } catch (p) {
      throw i(!1), p;
    }
  }));
  return {
    copied: n,
    copyLoading: a,
    onClick: u
  };
};
function ni(e, t) {
  return d.useMemo(() => {
    const r = !!e;
    return [r, Object.assign(Object.assign({}, t), r && typeof e == "object" ? e : null)];
  }, [e]);
}
const FC = (e) => {
  const t = Oe(void 0);
  return tt(() => {
    t.current = e;
  }), t.current;
}, LC = (e, t, r) => Tr(() => e === !0 ? {
  title: t != null ? t : r
} : /* @__PURE__ */ Pc(e) ? {
  title: e
} : typeof e == "object" ? Object.assign({
  title: t != null ? t : r
}, e) : {
  title: e
}, [e, t, r]);
var DC = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Ls = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: r,
    component: n = "article",
    className: o,
    rootClassName: a,
    setContentRef: i,
    children: s,
    direction: l,
    style: c
  } = e, u = DC(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: f,
    direction: v,
    className: p,
    style: h
  } = hn("typography"), m = l != null ? l : v, g = i ? br(t, i) : t, b = f("typography", r);
  process.env.NODE_ENV !== "production" && gt("Typography").deprecated(!i, "setContentRef", "ref");
  const [y, x, w] = uf(b), C = ne(b, p, {
    [`${b}-rtl`]: m === "rtl"
  }, o, a, x, w), E = Object.assign(Object.assign({}, h), c);
  return y(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ d.createElement(n, Object.assign({
      className: C,
      style: E,
      ref: g
    }, u), s)
  );
});
process.env.NODE_ENV !== "production" && (Ls.displayName = "Typography");
function Ec(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function oi(e, t, r) {
  return e === !0 || e === void 0 ? t : e || r && t;
}
function VC(e) {
  const t = document.createElement("em");
  e.appendChild(t), process.env.NODE_ENV !== "production" && (t.className = "ant-typography-css-ellipsis-content-measure");
  const r = e.getBoundingClientRect(), n = t.getBoundingClientRect();
  return e.removeChild(t), // Horizontal out of range
  r.left > n.left || n.right > r.right || // Vertical out of range
  r.top > n.top || n.bottom > r.bottom;
}
const Ds = (e) => ["string", "number"].includes(typeof e), zC = (e) => {
  let {
    prefixCls: t,
    copied: r,
    locale: n,
    iconOnly: o,
    tooltips: a,
    icon: i,
    tabIndex: s,
    onCopy: l,
    loading: c
  } = e;
  const u = Ec(a), f = Ec(i), {
    copied: v,
    copy: p
  } = n != null ? n : {}, h = r ? v : p, m = oi(u[r ? 1 : 0], h), g = typeof m == "string" ? m : h;
  return /* @__PURE__ */ d.createElement(Jn, {
    title: m
  }, /* @__PURE__ */ d.createElement("button", {
    type: "button",
    className: ne(`${t}-copy`, {
      [`${t}-copy-success`]: r,
      [`${t}-copy-icon-only`]: o
    }),
    onClick: l,
    "aria-label": g,
    tabIndex: s
  }, r ? oi(f[1], /* @__PURE__ */ d.createElement(Nd, null), !0) : oi(f[0], c ? /* @__PURE__ */ d.createElement(xs, null) : /* @__PURE__ */ d.createElement(sf, null), !0)));
}, Ro = /* @__PURE__ */ d.forwardRef((e, t) => {
  let {
    style: r,
    children: n
  } = e;
  const o = d.useRef(null);
  return d.useImperativeHandle(t, () => ({
    isExceed: () => {
      const a = o.current;
      return a.scrollHeight > a.clientHeight;
    },
    getHeight: () => o.current.clientHeight
  })), /* @__PURE__ */ d.createElement("span", {
    "aria-hidden": !0,
    ref: o,
    style: Object.assign({
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      pointerEvents: "none",
      backgroundColor: "rgba(255, 0, 0, 0.65)"
    }, r)
  }, n);
}), BC = (e) => e.reduce((t, r) => t + (Ds(r) ? String(r).length : 1), 0);
function wc(e, t) {
  let r = 0;
  const n = [];
  for (let o = 0; o < e.length; o += 1) {
    if (r === t)
      return n;
    const a = e[o], s = Ds(a) ? String(a).length : 1, l = r + s;
    if (l > t) {
      const c = t - r;
      return n.push(String(a).slice(0, c)), n;
    }
    n.push(a), r = l;
  }
  return e;
}
const ai = 0, ii = 1, si = 2, li = 3, $c = 4, _o = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function HC(e) {
  const {
    enableMeasure: t,
    width: r,
    text: n,
    children: o,
    rows: a,
    expanded: i,
    miscDeps: s,
    onEllipsis: l
  } = e, c = d.useMemo(() => Nr(n), [n]), u = d.useMemo(() => BC(c), [n]), f = d.useMemo(() => o(c, !1), [n]), [v, p] = d.useState(null), h = d.useRef(null), m = d.useRef(null), g = d.useRef(null), b = d.useRef(null), y = d.useRef(null), [x, w] = d.useState(!1), [C, E] = d.useState(ai), [S, $] = d.useState(0), [_, T] = d.useState(null);
  qe(() => {
    E(t && r && u ? ii : ai);
  }, [r, n, a, t, c]), qe(() => {
    var L, A, O, P;
    if (C === ii) {
      E(si);
      const R = m.current && getComputedStyle(m.current).whiteSpace;
      T(R);
    } else if (C === si) {
      const R = !!(!((L = g.current) === null || L === void 0) && L.isExceed());
      E(R ? li : $c), p(R ? [0, u] : null), w(R);
      const D = ((A = g.current) === null || A === void 0 ? void 0 : A.getHeight()) || 0, V = a === 1 ? 0 : ((O = b.current) === null || O === void 0 ? void 0 : O.getHeight()) || 0, H = ((P = y.current) === null || P === void 0 ? void 0 : P.getHeight()) || 0, q = Math.max(
        D,
        // height of rows with ellipsis
        V + H
      );
      $(q + 1), l(R);
    }
  }, [C]);
  const F = v ? Math.ceil((v[0] + v[1]) / 2) : 0;
  qe(() => {
    var L;
    const [A, O] = v || [0, 0];
    if (A !== O) {
      const R = (((L = h.current) === null || L === void 0 ? void 0 : L.getHeight()) || 0) > S;
      let D = F;
      O - A === 1 && (D = R ? A : O), p(R ? [A, D] : [D, O]);
    }
  }, [v, F]);
  const z = d.useMemo(() => {
    if (!t)
      return o(c, !1);
    if (C !== li || !v || v[0] !== v[1]) {
      const L = o(c, !1);
      return [$c, ai].includes(C) ? L : /* @__PURE__ */ d.createElement("span", {
        style: Object.assign(Object.assign({}, _o), {
          WebkitLineClamp: a
        })
      }, L);
    }
    return o(i ? c : wc(c, v[0]), x);
  }, [i, C, v, c].concat(fe(s))), I = {
    width: r,
    margin: 0,
    padding: 0,
    whiteSpace: _ === "nowrap" ? "normal" : "inherit"
  };
  return /* @__PURE__ */ d.createElement(d.Fragment, null, z, C === si && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Ro, {
    style: Object.assign(Object.assign(Object.assign({}, I), _o), {
      WebkitLineClamp: a
    }),
    ref: g
  }, f), /* @__PURE__ */ d.createElement(Ro, {
    style: Object.assign(Object.assign(Object.assign({}, I), _o), {
      WebkitLineClamp: a - 1
    }),
    ref: b
  }, f), /* @__PURE__ */ d.createElement(Ro, {
    style: Object.assign(Object.assign(Object.assign({}, I), _o), {
      WebkitLineClamp: 1
    }),
    ref: y
  }, o([], !0))), C === li && v && v[0] !== v[1] && /* @__PURE__ */ d.createElement(Ro, {
    style: Object.assign(Object.assign({}, I), {
      top: 400
    }),
    ref: h
  }, o(wc(c, F), !0)), C === ii && /* @__PURE__ */ d.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: m
  }));
}
const df = (e) => {
  let {
    enableEllipsis: t,
    isEllipsis: r,
    children: n,
    tooltipProps: o
  } = e;
  return !(o != null && o.title) || !t ? n : /* @__PURE__ */ d.createElement(Jn, Object.assign({
    open: r ? void 0 : !1
  }, o), n);
};
process.env.NODE_ENV !== "production" && (df.displayName = "EllipsisTooltip");
var kC = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function WC(e, t) {
  let {
    mark: r,
    code: n,
    underline: o,
    delete: a,
    strong: i,
    keyboard: s,
    italic: l
  } = e, c = t;
  function u(f, v) {
    v && (c = /* @__PURE__ */ d.createElement(f, {}, c));
  }
  return u("strong", i), u("u", o), u("del", a), u("code", n), u("mark", r), u("kbd", s), u("i", l), c;
}
const qC = "...", fa = /* @__PURE__ */ d.forwardRef((e, t) => {
  var r;
  const {
    prefixCls: n,
    className: o,
    style: a,
    type: i,
    disabled: s,
    children: l,
    ellipsis: c,
    editable: u,
    copyable: f,
    component: v,
    title: p
  } = e, h = kC(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: m,
    direction: g
  } = d.useContext(rt), [b] = Rg("Text"), y = d.useRef(null), x = d.useRef(null), w = m("typography", n), C = Fr(h, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [E, S] = ni(u), [$, _] = hr(!1, {
    value: S.editing
  }), {
    triggerType: T = ["icon"]
  } = S, F = (G) => {
    var K;
    G && ((K = S.onStart) === null || K === void 0 || K.call(S)), _(G);
  }, z = FC($);
  qe(() => {
    var G;
    !$ && z && ((G = x.current) === null || G === void 0 || G.focus());
  }, [$]);
  const I = (G) => {
    G == null || G.preventDefault(), F(!0);
  }, L = (G) => {
    var K;
    (K = S.onChange) === null || K === void 0 || K.call(S, G), F(!1);
  }, A = () => {
    var G;
    (G = S.onCancel) === null || G === void 0 || G.call(S), F(!1);
  }, [O, P] = ni(f), {
    copied: R,
    copyLoading: D,
    onClick: V
  } = MC({
    copyConfig: P,
    children: l
  }), [H, q] = d.useState(!1), [U, B] = d.useState(!1), [Q, ie] = d.useState(!1), [ve, oe] = d.useState(!1), [ae, me] = d.useState(!0), [pe, se] = ni(c, {
    expandable: !1,
    symbol: (G) => G ? b == null ? void 0 : b.collapse : b == null ? void 0 : b.expand
  }), [ge, X] = hr(se.defaultExpanded || !1, {
    value: se.expanded
  }), ue = pe && (!ge || se.expandable === "collapsible"), {
    rows: re = 1
  } = se, de = d.useMemo(() => (
    // Disable ellipsis
    ue && // Provide suffix
    (se.suffix !== void 0 || se.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    se.expandable || E || O)
  ), [ue, se, E, O]);
  qe(() => {
    pe && !de && (q(nc("webkitLineClamp")), B(nc("textOverflow")));
  }, [de, pe]);
  const [he, ye] = d.useState(ue), Te = d.useMemo(() => de ? !1 : re === 1 ? U : H, [de, U, H]);
  qe(() => {
    ye(Te && ue);
  }, [Te, ue]);
  const xe = ue && (he ? ve : Q), Re = ue && re === 1 && he, J = ue && re > 1 && he, be = (G, K) => {
    var _e;
    X(K.expanded), (_e = se.onExpand) === null || _e === void 0 || _e.call(se, G, K);
  }, [Ee, Ne] = d.useState(0), Ve = (G) => {
    let {
      offsetWidth: K
    } = G;
    Ne(K);
  }, Ie = (G) => {
    var K;
    ie(G), Q !== G && ((K = se.onEllipsis) === null || K === void 0 || K.call(se, G));
  };
  d.useEffect(() => {
    const G = y.current;
    if (pe && he && G) {
      const K = VC(G);
      ve !== K && oe(K);
    }
  }, [pe, he, l, J, ae, Ee]), d.useEffect(() => {
    const G = y.current;
    if (typeof IntersectionObserver == "undefined" || !G || !he || !ue)
      return;
    const K = new IntersectionObserver(() => {
      me(!!G.offsetParent);
    });
    return K.observe(G), () => {
      K.disconnect();
    };
  }, [he, ue]);
  const ke = LC(se.tooltip, S.text, l), N = d.useMemo(() => {
    if (!(!pe || he))
      return [S.text, l, p, ke.title].find(Ds);
  }, [pe, he, p, ke.title, xe]);
  if ($)
    return /* @__PURE__ */ d.createElement(PC, {
      value: (r = S.text) !== null && r !== void 0 ? r : typeof l == "string" ? l : "",
      onSave: L,
      onCancel: A,
      onEnd: S.onEnd,
      prefixCls: w,
      className: o,
      style: a,
      direction: g,
      component: v,
      maxLength: S.maxLength,
      autoSize: S.autoSize,
      enterIcon: S.enterIcon
    });
  const W = () => {
    const {
      expandable: G,
      symbol: K
    } = se;
    return G ? /* @__PURE__ */ d.createElement("button", {
      type: "button",
      key: "expand",
      className: `${w}-${ge ? "collapse" : "expand"}`,
      onClick: (_e) => be(_e, {
        expanded: !ge
      }),
      "aria-label": ge ? b.collapse : b == null ? void 0 : b.expand
    }, typeof K == "function" ? K(ge) : K) : null;
  }, Z = () => {
    if (!E)
      return;
    const {
      icon: G,
      tooltip: K,
      tabIndex: _e
    } = S, Qe = Nr(K)[0] || (b == null ? void 0 : b.edit), ct = typeof Qe == "string" ? Qe : "";
    return T.includes("icon") ? /* @__PURE__ */ d.createElement(Jn, {
      key: "edit",
      title: K === !1 ? "" : Qe
    }, /* @__PURE__ */ d.createElement("button", {
      type: "button",
      ref: x,
      className: `${w}-edit`,
      onClick: I,
      "aria-label": ct,
      tabIndex: _e
    }, G || /* @__PURE__ */ d.createElement(lf, {
      role: "button"
    }))) : null;
  }, ee = () => O ? /* @__PURE__ */ d.createElement(zC, Object.assign({
    key: "copy"
  }, P, {
    prefixCls: w,
    copied: R,
    locale: b,
    onCopy: V,
    loading: D,
    iconOnly: l == null
  })) : null, te = (G) => [G && W(), Z(), ee()], ce = (G) => [G && !ge && /* @__PURE__ */ d.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, qC), se.suffix, te(G)];
  return /* @__PURE__ */ d.createElement(mn, {
    onResize: Ve,
    disabled: !ue
  }, (G) => /* @__PURE__ */ d.createElement(df, {
    tooltipProps: ke,
    enableEllipsis: ue,
    isEllipsis: xe
  }, /* @__PURE__ */ d.createElement(Ls, Object.assign({
    className: ne({
      [`${w}-${i}`]: i,
      [`${w}-disabled`]: s,
      [`${w}-ellipsis`]: pe,
      [`${w}-ellipsis-single-line`]: Re,
      [`${w}-ellipsis-multiple-line`]: J
    }, o),
    prefixCls: n,
    style: Object.assign(Object.assign({}, a), {
      WebkitLineClamp: J ? re : void 0
    }),
    component: v,
    ref: br(G, y, t),
    direction: g,
    onClick: T.includes("text") ? I : void 0,
    "aria-label": N == null ? void 0 : N.toString(),
    title: p
  }, C), /* @__PURE__ */ d.createElement(HC, {
    enableMeasure: ue && !he,
    text: l,
    rows: re,
    width: Ee,
    onEllipsis: Ie,
    expanded: ge,
    miscDeps: [R, ge, D, E, O, b]
  }, (K, _e) => WC(e, /* @__PURE__ */ d.createElement(d.Fragment, null, K.length > 0 && _e && !ge && N ? /* @__PURE__ */ d.createElement("span", {
    key: "show-content",
    "aria-hidden": !0
  }, K) : K, ce(_e)))))));
});
var UC = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const GC = /* @__PURE__ */ d.forwardRef((e, t) => {
  var {
    ellipsis: r,
    rel: n
  } = e, o = UC(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const i = gt("Typography.Link");
    process.env.NODE_ENV !== "production" && i(typeof r != "object", "usage", "`ellipsis` only supports boolean value.");
  }
  const a = Object.assign(Object.assign({}, o), {
    rel: n === void 0 && o.target === "_blank" ? "noopener noreferrer" : n
  });
  return delete a.navigate, /* @__PURE__ */ d.createElement(fa, Object.assign({}, a, {
    ref: t,
    ellipsis: !!r,
    component: "a"
  }));
}), XC = /* @__PURE__ */ d.forwardRef((e, t) => /* @__PURE__ */ d.createElement(fa, Object.assign({
  ref: t
}, e, {
  component: "div"
})));
var KC = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const YC = (e, t) => {
  var {
    ellipsis: r
  } = e, n = KC(e, ["ellipsis"]);
  const o = d.useMemo(() => r && typeof r == "object" ? Fr(r, ["expandable", "rows"]) : r, [r]);
  if (process.env.NODE_ENV !== "production") {
    const a = gt("Typography.Text");
    process.env.NODE_ENV !== "production" && a(typeof r != "object" || !r || !("expandable" in r) && !("rows" in r), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ d.createElement(fa, Object.assign({
    ref: t
  }, n, {
    ellipsis: o,
    component: "span"
  }));
}, ZC = /* @__PURE__ */ d.forwardRef(YC);
var QC = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Oc = [1, 2, 3, 4, 5], JC = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    level: r = 1
  } = e, n = QC(e, ["level"]);
  if (process.env.NODE_ENV !== "production") {
    const a = gt("Typography.Title");
    process.env.NODE_ENV !== "production" && a(Oc.includes(r), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  const o = Oc.includes(r) ? `h${r}` : "h1";
  return /* @__PURE__ */ d.createElement(fa, Object.assign({
    ref: t
  }, n, {
    component: o
  }));
}), Cn = Ls;
Cn.Text = ZC;
Cn.Link = GC;
Cn.Title = JC;
Cn.Paragraph = XC;
const eS = "_title_488yy_1", tS = "_subtitle_488yy_5", Rc = {
  title: eS,
  subtitle: tS
}, { Title: _c } = Cn, rS = ({ title: e, subtitle: t }) => /* @__PURE__ */ Ye.jsxs(Ye.Fragment, { children: [
  /* @__PURE__ */ Ye.jsx(_c, { level: 2, className: Rc.title, children: e }),
  t && /* @__PURE__ */ Ye.jsx(_c, { level: 5, className: Rc.subtitle, children: t })
] }), nS = "_description_1ufvv_1", oS = "_checkbox_1ufvv_5", aS = "_continueBtn_1ufvv_9", iS = "_buttonsContainer_1ufvv_13", sS = "_laterText_1ufvv_20", Yr = {
  description: nS,
  checkbox: oS,
  continueBtn: aS,
  buttonsContainer: iS,
  laterText: sS
}, { Paragraph: lS } = Cn, SS = () => {
  const [e, t] = Qt(!1), [r, n] = Qt(!1), o = () => {
    e && r && console.log("Continue");
  }, a = () => {
    console.log("Later");
  };
  return /* @__PURE__ */ Ye.jsxs(Ye.Fragment, { children: [
    /* @__PURE__ */ Ye.jsx(
      rS,
      {
        title: "Scaler Resume Builder",
        subtitle: "Build a Resume with ATS Compliance"
      }
    ),
    /* @__PURE__ */ Ye.jsx(lS, { className: Yr.description, children: "Please acknowledge the following pointers basis on which your profile will be shortlisted for Job Opportunities." }),
    /* @__PURE__ */ Ye.jsx(
      qn,
      {
        className: Yr.checkbox,
        checked: e,
        onChange: (i) => t(i.target.checked),
        children: "Your Job Preferences like CTC, Location, Notice Period are key points based on which Scaler will showcase relevant job opportunities"
      }
    ),
    /* @__PURE__ */ Ye.jsx(
      qn,
      {
        className: Yr.checkbox,
        checked: r,
        onChange: (i) => n(i.target.checked),
        children: "Your relevant tech work experience and technical skills entered in your Scaler Resume Builder will be used for matching you with relevant job opportunities"
      }
    ),
    /* @__PURE__ */ Ye.jsxs("div", { className: Yr.buttonsContainer, children: [
      /* @__PURE__ */ Ye.jsx(
        Hn,
        {
          type: "primary",
          block: !0,
          className: Yr.continueBtn,
          disabled: !(e && r),
          onClick: o,
          children: "I Understand, Continue"
        }
      ),
      /* @__PURE__ */ Ye.jsx(
        Hn,
        {
          type: "link",
          block: !0,
          className: Yr.laterText,
          onClick: a,
          children: "I will do this later"
        }
      )
    ] })
  ] });
}, cS = "_header_xke6j_1", uS = "_logo_xke6j_14", dS = "_left_xke6j_19", fS = "_content_xke6j_27", vS = "_layout_xke6j_32", gS = "_contentInner_xke6j_38", Zr = {
  header: cS,
  logo: uS,
  left: dS,
  content: fS,
  layout: vS,
  contentInner: gS
}, { Header: mS, Content: pS } = Lr, hS = (
  // eslint-disable-next-line max-len
  "https://assets.fp.scaler.com/seo/_next/static/media/scaler-light.6def257e.svg"
), xS = ({ onBackClick: e, children: t, preview: r }) => /* @__PURE__ */ Ye.jsxs(Jd, { children: [
  /* @__PURE__ */ Ye.jsx(ss, { span: 12, className: Zr.left, children: /* @__PURE__ */ Ye.jsxs(Lr, { className: Zr.layout, children: [
    /* @__PURE__ */ Ye.jsxs(mS, { className: Zr.header, children: [
      /* @__PURE__ */ Ye.jsx(af, { onClick: e }),
      /* @__PURE__ */ Ye.jsx("img", { className: Zr.logo, src: hS, alt: "logo" })
    ] }),
    /* @__PURE__ */ Ye.jsxs(pS, { className: Zr.content, children: [
      " ",
      /* @__PURE__ */ Ye.jsx("div", { className: Zr.contentInner, children: t })
    ] })
  ] }) }),
  /* @__PURE__ */ Ye.jsx(ss, { span: 12, children: r })
] });
export {
  SS as Acknowledgement,
  xS as ResumeLayout
};
