(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
    typeof define === 'function' && define.amd ? define(['vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory(global.Vue));
}(this, (function (vue) { 'use strict';

    var title = {
      a: 1
    };

    var script = {
      name: "TestComponent",

      setup() {
        var message = "test";
        const count = vue.ref(1);
        const doubleCount = vue.computed(() => count.value * 2);

        const add = () => {
          count.value++;
        };

        return {
          message,
          doubleCount,
          add
        };
      }

    };

    const _withId = /*#__PURE__*/vue.withScopeId("data-v-0f72a62a");

    vue.pushScopeId("data-v-0f72a62a");
    const _hoisted_1 = { class: "message" };
    vue.popScopeId();

    const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
        vue.createVNode("div", null, [
          vue.createVNode("button", {
            onClick: _cache[1] || (_cache[1] = (...args) => ($setup.add(...args)))
          }, "增加")
        ]),
        vue.createVNode("div", null, vue.toDisplayString($setup.doubleCount), 1 /* TEXT */),
        vue.createVNode("div", null, vue.toDisplayString($setup.message), 1 /* TEXT */)
      ]))
    });

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".message[data-v-0f72a62a] {\n  color: red;\n}";
    styleInject(css_248z);

    script.render = render;
    script.__scopeId = "data-v-0f72a62a";
    script.__file = "src/test.vue";

    console.log(title);
    function index (Vue) {
      Vue.component(script.name, script);
    }

    return index;

})));
//# sourceMappingURL=datav.js.map
