import ue from "react";
var Y = { exports: {} }, y = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var te;
function ke() {
  if (te) return y;
  te = 1;
  var v = ue, T = 60103;
  if (y.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var h = Symbol.for;
    T = h("react.element"), y.Fragment = h("react.fragment");
  }
  var D = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = Object.prototype.hasOwnProperty, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(p, s, x) {
    var l, E = {}, O = null, m = null;
    x !== void 0 && (O = "" + x), s.key !== void 0 && (O = "" + s.key), s.ref !== void 0 && (m = s.ref);
    for (l in s) A.call(s, l) && !w.hasOwnProperty(l) && (E[l] = s[l]);
    if (p && p.defaultProps) for (l in s = p.defaultProps, s) E[l] === void 0 && (E[l] = s[l]);
    return { $$typeof: T, type: p, key: O, ref: m, props: E, _owner: D.current };
  }
  return y.jsx = P, y.jsxs = P, y;
}
var B = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function Ye() {
  return ae || (ae = 1, function(v) {
    process.env.NODE_ENV !== "production" && function() {
      var T = ue, h = 60103, D = 60106;
      v.Fragment = 60107;
      var A = 60108, w = 60114, P = 60109, p = 60110, s = 60112, x = 60113, l = 60120, E = 60115, O = 60116, m = 60121, M = 60122, F = 60117, J = 60129, N = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var o = Symbol.for;
        h = o("react.element"), D = o("react.portal"), v.Fragment = o("react.fragment"), A = o("react.strict_mode"), w = o("react.profiler"), P = o("react.provider"), p = o("react.context"), s = o("react.forward_ref"), x = o("react.suspense"), l = o("react.suspense_list"), E = o("react.memo"), O = o("react.lazy"), m = o("react.block"), M = o("react.server.block"), F = o("react.fundamental"), o("react.scope"), o("react.opaque.id"), J = o("react.debug_trace_mode"), o("react.offscreen"), N = o("react.legacy_hidden");
      }
      var z = typeof Symbol == "function" && Symbol.iterator, fe = "@@iterator";
      function oe(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = z && e[z] || e[fe];
        return typeof r == "function" ? r : null;
      }
      var S = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function d(e) {
        {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
            n[t - 1] = arguments[t];
          se("error", e, n);
        }
      }
      function se(e, r, n) {
        {
          var t = S.ReactDebugCurrentFrame, f = "";
          if (C) {
            var u = _(C.type), i = C._owner;
            f += de(u, C._source, i && _(i.type));
          }
          f += t.getStackAddendum(), f !== "" && (r += "%s", n = n.concat([f]));
          var a = n.map(function(c) {
            return "" + c;
          });
          a.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, a);
        }
      }
      var ce = !1;
      function le(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === v.Fragment || e === w || e === J || e === A || e === x || e === l || e === N || ce || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === E || e.$$typeof === P || e.$$typeof === p || e.$$typeof === s || e.$$typeof === F || e.$$typeof === m || e[0] === M));
      }
      var I = /^(.*)[\\\/]/;
      function de(e, r, n) {
        var t = "";
        if (r) {
          var f = r.fileName, u = f.replace(I, "");
          if (/^index\./.test(u)) {
            var i = f.match(I);
            if (i) {
              var a = i[1];
              if (a) {
                var c = a.replace(I, "");
                u = c + "/" + u;
              }
            }
          }
          t = " (at " + u + ":" + r.lineNumber + ")";
        } else n && (t = " (created by " + n + ")");
        return `
    in ` + (e || "Unknown") + t;
      }
      var ve = 1;
      function _e(e) {
        return e._status === ve ? e._result : null;
      }
      function Re(e, r, n) {
        var t = r.displayName || r.name || "";
        return e.displayName || (t !== "" ? n + "(" + t + ")" : n);
      }
      function _(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case v.Fragment:
            return "Fragment";
          case D:
            return "Portal";
          case w:
            return "Profiler";
          case A:
            return "StrictMode";
          case x:
            return "Suspense";
          case l:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case p:
              return "Context.Consumer";
            case P:
              return "Context.Provider";
            case s:
              return Re(e, e.render, "ForwardRef");
            case E:
              return _(e.type);
            case m:
              return _(e.render);
            case O: {
              var r = e, n = _e(r);
              if (n)
                return _(n);
              break;
            }
          }
        return null;
      }
      var K = {};
      S.ReactDebugCurrentFrame;
      var C = null;
      function k(e) {
        C = e;
      }
      function Ee(e, r, n, t, f) {
        {
          var u = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var i in e)
            if (u(e, i)) {
              var a = void 0;
              try {
                if (typeof e[i] != "function") {
                  var c = Error((t || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw c.name = "Invariant Violation", c;
                }
                a = e[i](r, i, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (R) {
                a = R;
              }
              a && !(a instanceof Error) && (k(f), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, i, typeof a), k(null)), a instanceof Error && !(a.message in K) && (K[a.message] = !0, k(f), d("Failed %s type: %s", n, a.message), k(null));
            }
        }
      }
      var G = S.ReactCurrentOwner, $ = Object.prototype.hasOwnProperty, pe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, H, X;
      function ge(e) {
        if ($.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function he(e) {
        if ($.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Oe(e, r) {
        typeof e.ref == "string" && G.current;
      }
      function Te(e, r) {
        {
          var n = function() {
            H || (H = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          n.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: n,
            configurable: !0
          });
        }
      }
      function Pe(e, r) {
        {
          var n = function() {
            X || (X = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          n.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: n,
            configurable: !0
          });
        }
      }
      var xe = function(e, r, n, t, f, u, i) {
        var a = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: h,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: n,
          props: i,
          // Record the component responsible for creating this element.
          _owner: u
        };
        return a._store = {}, Object.defineProperty(a._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(a, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: t
        }), Object.defineProperty(a, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: f
        }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
      };
      function me(e, r, n, t, f) {
        {
          var u, i = {}, a = null, c = null;
          n !== void 0 && (a = "" + n), he(r) && (a = "" + r.key), ge(r) && (c = r.ref, Oe(r, f));
          for (u in r)
            $.call(r, u) && !pe.hasOwnProperty(u) && (i[u] = r[u]);
          if (e && e.defaultProps) {
            var R = e.defaultProps;
            for (u in R)
              i[u] === void 0 && (i[u] = R[u]);
          }
          if (a || c) {
            var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            a && Te(i, g), c && Pe(i, g);
          }
          return xe(e, a, c, f, t, G.current, i);
        }
      }
      var L = S.ReactCurrentOwner;
      S.ReactDebugCurrentFrame;
      function b(e) {
        C = e;
      }
      var W;
      W = !1;
      function V(e) {
        return typeof e == "object" && e !== null && e.$$typeof === h;
      }
      function Z() {
        {
          if (L.current) {
            var e = _(L.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Ce(e) {
        return "";
      }
      var Q = {};
      function be(e) {
        {
          var r = Z();
          if (!r) {
            var n = typeof e == "string" ? e : e.displayName || e.name;
            n && (r = `

Check the top-level render call using <` + n + ">.");
          }
          return r;
        }
      }
      function ee(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var n = be(r);
          if (Q[n])
            return;
          Q[n] = !0;
          var t = "";
          e && e._owner && e._owner !== L.current && (t = " It was passed a child from " + _(e._owner.type) + "."), b(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), b(null);
        }
      }
      function re(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var n = 0; n < e.length; n++) {
              var t = e[n];
              V(t) && ee(t, r);
            }
          else if (V(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var f = oe(e);
            if (typeof f == "function" && f !== e.entries)
              for (var u = f.call(e), i; !(i = u.next()).done; )
                V(i.value) && ee(i.value, r);
          }
        }
      }
      function je(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var n;
          if (typeof r == "function")
            n = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === E))
            n = r.propTypes;
          else
            return;
          if (n) {
            var t = _(r);
            Ee(n, e.props, "prop", t, e);
          } else if (r.PropTypes !== void 0 && !W) {
            W = !0;
            var f = _(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ye(e) {
        {
          for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
            var t = r[n];
            if (t !== "children" && t !== "key") {
              b(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), b(null);
              break;
            }
          }
          e.ref !== null && (b(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), b(null));
        }
      }
      function ne(e, r, n, t, f, u) {
        {
          var i = le(e);
          if (!i) {
            var a = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var c = Ce();
            c ? a += c : a += Z();
            var R;
            e === null ? R = "null" : Array.isArray(e) ? R = "array" : e !== void 0 && e.$$typeof === h ? (R = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, a);
          }
          var g = me(e, r, n, f, u);
          if (g == null)
            return g;
          if (i) {
            var j = r.children;
            if (j !== void 0)
              if (t)
                if (Array.isArray(j)) {
                  for (var U = 0; U < j.length; U++)
                    re(j[U], e);
                  Object.freeze && Object.freeze(j);
                } else
                  d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                re(j, e);
          }
          return e === v.Fragment ? ye(g) : je(g), g;
        }
      }
      function Ae(e, r, n) {
        return ne(e, r, n, !0);
      }
      function we(e, r, n) {
        return ne(e, r, n, !1);
      }
      var Se = we, De = Ae;
      v.jsx = Se, v.jsxs = De;
    }();
  }(B)), B;
}
var ie;
function Ie() {
  return ie || (ie = 1, process.env.NODE_ENV === "production" ? Y.exports = ke() : Y.exports = Ye()), Y.exports;
}
var q = Ie();
const $e = "_button_jlbos_1", Le = {
  button: $e
}, We = ({ children: v, onClick: T }) => /* @__PURE__ */ q.jsx("button", { className: Le.button, onClick: T, children: v }), Ue = () => /* @__PURE__ */ q.jsxs("div", { children: [
  "ResumeEditor",
  /* @__PURE__ */ q.jsx(We, { children: "Click me" })
] });
export {
  Ue as ResumeEditor
};
