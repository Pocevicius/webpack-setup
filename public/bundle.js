(() => {
  "use strict";
  function e(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r &&
        (o = o.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })),
        t.push.apply(t, o);
    }
    return t;
  }
  function r(r) {
    for (var o = 1; o < arguments.length; o++) {
      var n = null != arguments[o] ? arguments[o] : {};
      o % 2
        ? e(Object(n), !0).forEach(function (e) {
            t(r, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
        : e(Object(n)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return r;
  }
  function t(e, r, t) {
    return (
      r in e
        ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[r] = t),
      e
    );
  }
  console.log("viskas veikia"),
    console.log("I am avatar"),
    console.log("this is sword");
  var o = r(r({}, { a: 1, b: 2 }), {}, { c: 3 });
  console.log(o);
})();
//# sourceMappingURL=bundle.js.map
