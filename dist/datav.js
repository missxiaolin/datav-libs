!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).datav=t(e.Vue)}(this,(function(e){"use strict";var t={name:"TestComponent",setup(){const t=e.ref(1);return{message:"test",doubleCount:e.computed((()=>2*t.value)),add:()=>{t.value++}}}};const o=e.withScopeId("data-v-0f72a62a");e.pushScopeId("data-v-0f72a62a");const n={class:"message"};e.popScopeId();const d=o((function(t,o,d,a,s,c){return e.openBlock(),e.createBlock("div",n,[e.createVNode("div",null,[e.createVNode("button",{onClick:o[1]||(o[1]=(...e)=>a.add(...e))},"增加")]),e.createVNode("div",null,e.toDisplayString(a.doubleCount),1),e.createVNode("div",null,e.toDisplayString(a.message),1)])}));return function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===o&&n.firstChild?n.insertBefore(d,n.firstChild):n.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}(".message[data-v-0f72a62a] {\n  color: red;\n}"),t.render=d,t.__scopeId="data-v-0f72a62a",t.__file="src/test.vue",console.log({a:1}),function(e){e.component(t.name,t)}}));
//# sourceMappingURL=datav.js.map
