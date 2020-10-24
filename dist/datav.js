(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory());
}(this, (function () { 'use strict';

    var title = {
      a: 1
    };

    function random(base) {
      if (base && base % 1 === 0) {
        return Math.floor(Math.random() * base);
      } else {
        return 0;
      }
    }

    console.log(title, random);
    console.log(random());
    var index = {};

    return index;

})));
//# sourceMappingURL=datav.js.map
