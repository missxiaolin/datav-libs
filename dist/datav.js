!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).datav=t(e.Vue)}(this,(function(e){"use strict";var t={name:"SvgComponent"};const n={width:"0",height:"0",viewBox:"0 0 100 100"},o=e.createVNode("defs",null,[e.createVNode("symbol",{id:"close",viewBox:"0 0 1024 1024"},[e.createVNode("path",{d:"M821.12 678.058667l-122.624-122.453334a61.568 61.568 0 0 1 0-87.253333l122.624-122.410667c38.528-38.4 44.202667-101.589333 7.765333-141.952a100.693333 100.693333 0 0 0-145.92-3.925333L556.373333 326.4a61.866667 61.866667 0 0 1-87.424 0L346.282667 204.074667c-38.485333-38.4-101.802667-44.117333-142.250667-7.722667a100.266667 100.266667 0 0 0-3.925333 145.621333l126.634666 126.378667c24.149333 24.106667 24.149333 63.146667 0 87.253333l-122.624 122.453334c-38.485333 38.4-44.16 101.632-7.765333 141.994666a100.693333 100.693333 0 0 0 145.92 3.882667l126.634667-126.421333a61.866667 61.866667 0 0 1 87.424 0l126.677333 126.421333a100.693333 100.693333 0 0 0 145.92-3.925333c36.394667-40.362667 30.72-103.552-7.808-141.952",fill:"#000000","p-id":"845"})]),e.createVNode("symbol",{id:"filledArrowRight",viewBox:"0 0 100 100"},[e.createVNode("polyline",{points:"20 10, 80 50, 20 90",fill:"currentColor"})])],-1);function a(e){e.component(t.name,t)}t.render=function(t,a,i,r,s,l){return e.openBlock(),e.createBlock("svg",n,[o])},t.__file="src/components/Svg/svg.vue";var i={name:"IconComponent",props:{name:String,prefix:{type:String,default:"icon"},style:Object},setup:e=>({iconName:`#${e.prefix}${e.name}`})};const r=e.withScopeId("data-v-34f86ccf");e.pushScopeId("data-v-34f86ccf");const s={class:"icon"};e.popScopeId();const l=r((function(t,n,o,a,i,r){return e.openBlock(),e.createBlock("div",{class:"icon-wrapper",style:{...o.style}},[(e.openBlock(),e.createBlock("svg",s,[e.createVNode("use",{href:a.iconName},null,8,["href"])]))],4)}));function d(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}function c(e){e.component(i.name,i)}d(".icon-wrapper[data-v-34f86ccf] {\n  display: inline-block;\n}\n\n.icon[data-v-34f86ccf] {\n  width: 100%;\n  height: 100%;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}"),i.render=l,i.__scopeId="data-v-34f86ccf",i.__file="src/components/Icon/icon.vue";var u={name:"SvgAnimation"};const p=e.withScopeId("data-v-5a151e4f");e.pushScopeId("data-v-5a151e4f");const h={class:"container"},f=e.createVNode("svg",{viewBox:"0 0 1024 1024","p-id":"2688",width:"200",height:"200"},[e.createVNode("path",{class:"logo",d:"M203.6 544.5c-6.3 0-12.5-2.8-16.6-8.2-7.1-9.2-5.4-22.4 3.8-29.5l57.1-44.1c9.2-7.1 22.4-5.4 29.5 3.8 7.1 9.2 5.4 22.4-3.8 29.5l-57.1 44.1c-3.9 3-8.5 4.4-12.9 4.4z",fill:"#999999","p-id":"2689"}),e.createVNode("path",{d:"M612.2 255.6c-3.6 0-7.1-1.8-9.1-5.1-3.2-5-1.6-11.7 3.4-14.8l38.8-24.2c5-3.2 11.7-1.6 14.8 3.4 3.2 5 1.6 11.7-3.4 14.8L617.9 254c-1.8 1.1-3.8 1.6-5.7 1.6z",fill:"#1E1E1E","p-id":"2690"}),e.createVNode("path",{d:"M627.7 83.7c-57.5 0-104 46.6-104 104 0 57.5 46.6 104 104 104 57.5 0 104-46.6 104-104s-46.6-104-104-104z m0.3 17.9c22.5 0 43.1 8.5 58.6 22.5-15.5 14-36 22.5-58.6 22.5-22.5 0-43.1-8.5-58.6-22.5 15.6-14 36.1-22.5 58.6-22.5z m-27.4 171.1c-19.9-6.5-37.5-20-48.7-39.6-11.2-19.5-14.1-41.6-9.6-62 19.9 6.5 37.5 20 48.7 39.6 11.2 19.5 14.1 41.6 9.6 62z m28.1-60.9c-12.4 0-22.4-10-22.4-22.4s10-22.4 22.4-22.4c12.4 0 22.4 10 22.4 22.4s-10 22.4-22.4 22.4z m25.3 60.1c-4.1-20.5-1-42.5 10.5-61.9 12.4-20.8 26.6-31.8 49.3-38.8 4.1 20.5 1 42.5-10.5 61.9s-29.4 32.7-49.3 38.8z",fill:"#34495E","p-id":"2691"}),e.createVNode("path",{d:"M589.9 959.6c-1.5 0-3-0.1-4.5-0.3l-443-61.9c-11.3-1.6-19.6-11-19.8-22.4l-8.4-536c0-3.4 1.4-6.6 4-8.7 2.6-2.2 6-3.1 9.3-2.4 67.2 12.9 114 38.2 147.5 79.6 29.9 37 45.6 82.7 62.3 131 8.9 25.9 18.2 52.7 30.1 79.8 24.6 56.1 100.8 69.7 162 80.7 24.3 4.4 45.3 8.1 61.4 14 7.8 2.9 31.6 11.6 31.6 34.5v179.6c0 9.4-4.1 18.3-11.2 24.5-5.9 5.2-13.5 8-21.3 8z m-454-608l8.2 523.1c0 0.7 0.5 1.3 1.2 1.4l443 61.9c3.2 0.4 6.3-0.5 8.7-2.6 2.4-2.1 3.8-5 3.8-8.3V747.5c0-13.9-38.3-20.7-75.3-27.4-32.1-5.7-68.4-12.2-100.7-25.3-38.8-15.7-64.1-37.9-77.2-67.9-12.2-27.9-21.6-55.1-30.6-81.4-31.9-92.3-57.3-165.9-181.1-193.9z",fill:"#1E1E1E","p-id":"2692"}),e.createVNode("path",{d:"M897.2 702.2c-1.2 0-2.4-0.1-3.5-0.2l-470.3-65.7-8.7-552.1c-0.1-4.3 1.8-8.3 5.1-11.1 3.3-2.7 7.6-3.8 11.8-3 65.7 13.2 111.7 38.6 144.7 79.9 29.4 36.8 45 82.1 61.5 130.1 8.9 25.9 18.2 52.7 30.1 79.8 24.6 56.1 100.8 69.7 162 80.7 24.3 4.4 45.3 8.1 61.4 14 7.8 2.9 31.6 11.6 31.6 34.5v187.5c0 7.4-3.2 14.5-8.8 19.3-4.8 4.1-10.7 6.3-16.9 6.3z m-452.6-84.7l452.1 63.1c1.6 0.2 2.7-0.5 3.2-1s1.4-1.5 1.4-3.1V489.1c0-13.9-38.3-20.7-75.3-27.4-32.1-5.7-68.4-12.2-100.7-25.3-38.8-15.7-64.1-37.9-77.2-67.9-12.2-27.9-21.6-55.1-30.7-81.4-31.9-92.5-57.2-166-181.1-193.9l8.3 524.3z",fill:"#1E1E1E","p-id":"2693"}),e.createVNode("path",{d:"M124.9 349.1c-3 0-6-1.3-8.2-3.7-3.9-4.5-3.4-11.3 1.1-15.2L418.3 71.7c4.5-3.9 11.3-3.4 15.2 1.1 3.9 4.5 3.4 11.3-1.1 15.2L132 346.5c-2.1 1.7-4.6 2.6-7.1 2.6zM126.58 877.235l300.435-258.467 14.023 16.3-300.435 258.466zM611.6 962.9c-3 0-6-1.3-8.2-3.7-3.9-4.5-3.4-11.3 1.1-15.2L905 685.5c4.5-3.9 11.3-3.4 15.2 1.1 3.9 4.5 3.4 11.3-1.1 15.2L618.7 960.3c-2.1 1.7-4.6 2.6-7.1 2.6z",fill:"#1E1E1E","p-id":"2694"}),e.createVNode("path",{d:"M299.4 468.1c-6.2 0-12.4-2.8-16.6-8.1-7.1-9.1-5.5-22.3 3.6-29.5L619.2 171c9.1-7.1 22.3-5.5 29.5 3.6 7.1 9.1 5.5 22.3-3.6 29.5L312.3 463.6c-3.8 3-8.4 4.5-12.9 4.5z",fill:"#999999","p-id":"2695"}),e.createVNode("path",{d:"M260.5 372.8c-57.5 0-104 46.6-104 104 0 57.5 46.6 104 104 104 57.5 0 104-46.6 104-104 0.1-57.4-46.5-104-104-104z m0.4 17.9c22.5 0 43.1 8.5 58.6 22.5-15.5 14-36 22.5-58.6 22.5s-43.1-8.5-58.6-22.5c15.5-14 36-22.5 58.6-22.5z m-27.4 171.1c-19.9-6.5-37.5-20-48.7-39.6-11.2-19.5-14.1-41.6-9.6-62 19.9 6.5 37.5 20 48.7 39.6 11.2 19.5 14 41.6 9.6 62z m28.1-60.9c-12.4 0-22.4-10-22.4-22.4 0-12.4 10-22.4 22.4-22.4s22.4 10 22.4 22.4c0 12.4-10 22.4-22.4 22.4z m25.2 60.1c-4.1-20.5-1-42.5 10.5-61.9 12.4-20.8 26.6-31.8 49.3-38.8 4.1 20.5 1 42.5-10.5 61.9s-29.3 32.7-49.3 38.8z",fill:"#34495E","p-id":"2696"})],-1);e.popScopeId();const m=p((function(t,n,o,a,i,r){return e.openBlock(),e.createBlock("div",h,[e.createCommentVNode(' <svg width="500" height="200" viewBox="0 0 500 200">\n      <rect\n        x="0"\n        y="0"\n        width="100"\n        height="50"\n        fill="red"\n        transform="matrix(2 1 -1 2 50 0)"\n      />\n    </svg> '),e.createCommentVNode(' <svg width="440" height="440" viewBox="0 0 440 440">\n        <circle cx="220" cy="220" r="180" stroke-width="20" stroke="#d1d3d7" fill="none"></circle>\n        <circle class="circle" cx="220" cy="220" r="180" stroke-width="20" stroke="#00a5e0" fill="none" transform="matrix(0 -1 1 0 0 440)"></circle>\n    </svg> '),f])}));function v(e){e.component(u.name,u)}d(".container[data-v-5a151e4f] svg {\n  border: 1px solid #000;\n}\n\n.circle[data-v-5a151e4f] {\n  animation: circle-5a151e4f 5s linear infinite;\n}\n\n@keyframes circle-5a151e4f {\n  from {\n    stroke-dasharray: 0 1257;\n  }\n  to {\n    stroke-dasharray: 1257 0;\n  }\n}\n.logo[data-v-5a151e4f] {\n  fill: none;\n  stroke: #333;\n  stroke-width: 10;\n}"),u.render=m,u.__scopeId="data-v-5a151e4f",u.__file="src/components/SvgAnimation/SvgAnimation.vue";var g={components:{svg:t},name:"Loading",props:{width:{type:[Number,String],default:50},height:{type:[Number,String],default:50},outsideColor:{type:String,default:"#3be6cb"},insideColor:{type:String,default:"#02bcfe"},duration:{type:Number,default:2}},setup:t=>({outsideColorAnimation:e.computed((()=>`${t.outsideColor};${t.insideColor};${t.outsideColor}`)),insideColorAnimation:e.computed((()=>`${t.insideColor};${t.outsideColor};${t.insideColor}`))})};const y=e.withScopeId("data-v-416d18c9");e.pushScopeId("data-v-416d18c9");const w={class:"loading-box"},V=e.createVNode("animateTransform",{attributeName:"transform",type:"rotate",from:"360 25 25",to:"0 25 25",dur:"1.5s",repeatCount:"indefinite"},null,-1),x={class:"loading-content"};e.popScopeId();const k=y((function(t,n,o,a,i,r){return e.openBlock(),e.createBlock("div",w,[(e.openBlock(),e.createBlock("svg",{width:o.width,height:o.height,viewBox:"0 0 50 50",preserveAspectRatio:"xMinYMid meet"},[e.createVNode("circle",{cx:"25",cy:"25",r:"22",fill:"none","stroke-width":"3",stroke:o.outsideColor,"stroke-dasharray":"34","stroke-linecap":"round"},[e.createVNode("animateTransform",{attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:o.duration+"s",repeatCount:"indefinite"},null,8,["dur"]),e.createVNode("animate",{attributeName:"stroke",values:a.outsideColorAnimation,dur:2*+o.duration+"s",repeatCount:"indefinite"},null,8,["values","dur"])],8,["stroke"]),e.createVNode("circle",{cx:"25",cy:"25",r:"12",fill:"none","stroke-width":"3",stroke:o.insideColor,"stroke-dasharray":"19","stroke-linecap":"round"},[V,e.createVNode("animate",{attributeName:"stroke",values:a.insideColorAnimation,dur:2*+o.duration+"s",repeatCount:"indefinite"},null,8,["values","dur"])],8,["stroke"])],8,["width","height"])),e.createVNode("div",x,[e.renderSlot(t.$slots,"default")])])}));function N(e){e.component(g.name,g)}d(".loading-box[data-v-416d18c9] {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}"),g.render=k,g.__scopeId="data-v-416d18c9",g.__file="src/components/Loading/Loading.vue";var b={name:"FlyBox",props:{lineColor:{type:String,default:"#235fa7"},startColor:{type:String,default:"#4fd2dd"},startLength:{type:[String,Number],default:150},duration:{type:[String,Number],default:3}},setup(t){const n=e.ref(0),o=e.ref(0),a="fly-box",i=e.computed((()=>`M5 5 L${n.value-5} 5 L${n.value-5} ${o.value-5} L5 ${o.value-5} Z`));return e.onMounted((()=>{(()=>{const t=e.getCurrentInstance().ctx.$refs[a];console.log(t.clientWidth,t.clientHeight),n.value=t.clientWidth,o.value=t.clientHeight})()})),{width:n,height:o,refName:a,path:i}}};const S=e.withScopeId("data-v-513cc2e2");e.pushScopeId("data-v-513cc2e2");const C=e.createVNode("radialGradient",{id:"radial-gradient",cx:"50%",cy:"50%",fx:"100%",fy:"50%",r:"50%"},[e.createVNode("stop",{offset:"0%","stop-color":"#fff","stop-opacity":"1"}),e.createVNode("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"})],-1),B={id:"fly-box-mask"},z={class:"fly-box-content"};e.popScopeId();const I=S((function(t,n,o,a,i,r){return e.openBlock(),e.createBlock("div",{class:"fly-box",ref:a.refName},[(e.openBlock(),e.createBlock("svg",{width:a.width,height:a.height},[e.createVNode("defs",null,[e.createVNode("path",{id:"fly-box-path",d:a.path},null,8,["d"]),C,e.createVNode("mask",B,[e.createVNode("circle",{r:o.startLength,cx:"0",cy:"0",fill:"url(#radial-gradient)"},[e.createVNode("animateMotion",{dur:o.duration+"s",path:a.path,rotate:"auto",repeatCount:"indefinite"},null,8,["dur","path"])],8,["r"])])]),e.createVNode("use",{href:"#fly-box-path","stroke-width":"1",stroke:o.lineColor,fill:"none"},null,8,["stroke"]),e.createVNode("use",{href:"#fly-box-path","stroke-width":"3",stroke:o.startColor,fill:"none",mask:"url(#fly-box-mask)"},null,8,["stroke"])],8,["width","height"])),e.createVNode("div",z,[e.renderSlot(t.$slots,"default")])],512)}));function _(e){e.component(b.name,b)}function L(e,t,n,o,a,i,r){try{var s=e[i](r),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(o,a)}d(".fly-box[data-v-513cc2e2] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.fly-box[data-v-513cc2e2] svg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.fly-box[data-v-513cc2e2] .fly-box-content {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}"),b.render=I,b.__scopeId="data-v-513cc2e2",b.__file="src/components/FlyBox/FlyBox.vue";var M=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function r(e){L(i,o,a,r,s,"next",e)}function s(e){L(i,o,a,r,s,"throw",e)}r(void 0)}))}};var T={name:"container",props:{options:Object},setup(t){let n="containerBox";const o=e.ref(0),a=e.ref(0),i=e.ref(0),r=e.ref(0),s=e.ref(!1);let l,d,c;const u=()=>new Promise((s=>{e.nextTick((()=>{d=l.$refs[n],t.options&&t.options.width&&t.options.height?(o.value=t.options.width,a.value=t.options.height):(o.value=d.clientWidth,a.value=d.clientHeight),i.value&&r.value||(i.value=window.screen.width,r.value=window.screen.height),s()}))})),p=()=>{const e=document.documentElement.clientWidth,t=document.documentElement.clientHeight,n=e/(o.value||i.value),s=t/(a.value||r.value);d.style.transform=`scale(${n}, ${s})`},h=function(){var e=M((function*(e){console.log(e),yield u(),p()}));return function(t){return e.apply(this,arguments)}}();return e.onMounted(M((function*(){s.value=!1,l=e.getCurrentInstance().ctx,yield u(),o.value&&a.value?(d.style.width=o.value+"px",d.style.height=a.value+"px"):(d.style.width=i.value+"px",d.style.height=r.value+"px"),p(),window.addEventListener("resize",function(e,t){let n;return function(){clearTimeout(n),n=setTimeout((()=>{t.apply(this,arguments)}),e)}}(100,h)),(()=>{const e=window.MutationObserver;c=new e(h),c.observe(d,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0})})(),s.value=!0}))),e.onUnmounted((()=>{window.removeEventListener("resize",h),c&&(c.disconnect(),c.takeRecords(),c=null)})),{refName:n,width:o,height:a,ready:s}}};const $=e.withScopeId("data-v-807af65a")((function(t,n,o,a,i,r){return e.openBlock(),e.createBlock("div",{id:"containerBox",ref:a.refName},[a.ready?e.renderSlot(t.$slots,"default",{key:0}):e.createCommentVNode("v-if",!0)],512)}));function D(e){e.component(T.name,T)}d("#containerBox[data-v-807af65a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  transform-origin: left top;\n  z-index: 999;\n}"),T.render=$,T.__scopeId="data-v-807af65a",T.__file="src/components/Container/Container.vue";var E={name:"TopHeader",computed:{date(){const e=new Date,t=e.getFullYear();let n=e.getMonth()+1,o=e.getDate();return n=n<10?"0"+n:n,o=o<10?"0"+o:o,`${t}-${n}-${o}`}}};const F=e.withScopeId("data-v-326413d6");e.pushScopeId("data-v-326413d6");const A={class:"top-header"},q=e.createVNode("div",{class:"title"},"数据大屏",-1);e.popScopeId();const W=F((function(t,n,o,a,i,r){return e.openBlock(),e.createBlock("div",A,[q,e.createCommentVNode(' <div class="sub-title">移动报表</div> '),e.createCommentVNode(' <div class="date">{{date}}</div> ')])}));function H(e){e.component(E.name,E)}d(".top-header[data-v-326413d6] {\n  position: absolute;\n  color: #fff;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  height: 300px;\n  padding: 50px 24px 24px;\n  box-sizing: border-box;\n}\n.top-header[data-v-326413d6] .title {\n  font-size: 48px;\n  font-weight: 500;\n}\n.top-header[data-v-326413d6] .sub-title {\n  font-size: 36px;\n  margin-top: 20px;\n}\n.top-header[data-v-326413d6] .date {\n  font-size: 24px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.5);\n  margin-top: 40px;\n}"),E.render=W,E.__scopeId="data-v-326413d6",E.__file="src/components/TopHeader/TopHeader.vue";var U={name:"Logo",props:{strokeWidth:{type:[String,Number],default:10},stroke:{type:String,default:"#000"}}};const R=e.withScopeId("data-v-52a9202f");e.pushScopeId("data-v-52a9202f");const P={class:"logo",t:"1607004745727",viewBox:"0 0 1082 1024"};e.popScopeId();const j=R((function(t,n,o,a,i,r){return e.openBlock(),e.createBlock("svg",P,[e.createVNode("path",{stroke:o.stroke,"stroke-width":o.strokeWidth,class:"logo1",d:"M533.767 0l158.995 304.74s-278.24 164.672-442.914 444.805l13.25-92.746L0.076 389.915l367.201-41.641z","p-id":"1182"},null,8,["stroke","stroke-width"]),e.createVNode("path",{stroke:o.stroke,"stroke-width":o.strokeWidth,class:"logo1",d:"M232.813 819.351s384.237-577.074 849.94-433.222l-60.57 66.248s-253.634-24.606-388.022 71.926c0 0-264.991 132.496-401.272 310.418z","p-id":"1183"},null,8,["stroke","stroke-width"]),e.createVNode("path",{stroke:o.stroke,"stroke-width":o.strokeWidth,class:"logo1",d:"M902.861 564.052l-81.39 79.497s-278.24 11.357-588.658 240.384c0 0 300.954-359.857 670.048-319.881z","p-id":"1184"},null,8,["stroke","stroke-width"]),e.createVNode("path",{stroke:o.stroke,"stroke-width":o.strokeWidth,class:"logo1",d:"M223.35 921.79s321.774-217.672 611.37-179.816L868.792 1024 546.108 849.863l-341.61 173.91z","p-id":"1185"},null,8,["stroke","stroke-width"])])}));function O(e){e.component(U.name,U)}d(".logo[data-v-52a9202f] {\n  width: 100%;\n  height: 100%;\n}\n\n.logo1[data-v-52a9202f] {\n  fill: none;\n  animation: logo-animation-52a9202f 5s linear infinite forwards;\n}\n\n@keyframes logo-animation-52a9202f {\n  0% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 2202;\n  }\n  50% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 0;\n  }\n}"),U.render=j,U.__scopeId="data-v-52a9202f",U.__file="src/components/Logo/Logo.vue";var Y={name:"totalUser",props:{todayUser:{type:Number,default:0},growthLastDay:{type:Number,default:0},growthLastMonth:{type:Number,default:0}},setup(t){const n=e.ref(0),o=e.ref(0),a=e.ref(0),i=()=>{console.log(t),n.value=t.todayUser,o.value=t.growthLastDay,a.value=t.growthLastMonth};return i(),{startVal:n,startPercent:o,startPercent2:a,updateStartVal:i}}};const G=e.withScopeId("data-v-c90dd0a2");e.pushScopeId("data-v-c90dd0a2");const Z={class:"total-user"},J=e.createVNode("div",{class:"title"},"用户总数",-1),K=e.createVNode("div",{class:"sub-title"},"user total count",-1),Q={class:"total"},X={class:"percent-text"},ee={class:"percent-text-1"},te={class:"percent-text-2"};e.popScopeId();const ne=G((function(t,n,o,a,i,r){const s=e.resolveComponent("vue-count-to");return e.openBlock(),e.createBlock("div",Z,[J,K,e.createVNode("div",Q,[e.createVNode(s,{startVal:0,endVal:2017,duration:4e3}),e.createCommentVNode(" {{todayUser}} ")]),e.createVNode("div",X,[e.createVNode("span",ee," 每日增长率:"+e.toDisplayString(o.growthLastDay),1),e.createVNode("span",te," 每月增长率:"+e.toDisplayString(o.growthLastMonth),1)])])}));function oe(e){e.component(Y.name,Y)}d(".total-user[data-v-c90dd0a2] {\n  width: 100%;\n  height: 100%;\n  background: #424446;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);\n  padding: 20px 40px;\n  box-sizing: border-box;\n}\n.total-user[data-v-c90dd0a2] .sub-title {\n  font-size: 16px;\n  letter-spacing: 1px;\n  margin-top: 10px;\n}\n.total-user[data-v-c90dd0a2] .total {\n  font-family: DIN;\n  font-size: 68px;\n  font-weight: bolder;\n  letter-spacing: 2px;\n  padding: 10px 0;\n}\n.total-user[data-v-c90dd0a2] .percent-text {\n  font-size: 28px;\n  font-family: DIN;\n  letter-spacing: 2px;\n}\n.total-user[data-v-c90dd0a2] .percent-text .percent-text-1 {\n  color: yellow;\n}\n.total-user[data-v-c90dd0a2] .percent-text .percent-text-2 {\n  color: red;\n}"),Y.render=ne,Y.__scopeId="data-v-c90dd0a2",Y.__file="src/components/TodayUsers/TodayUsers.vue";let ae=0;const ie="webkit moz ms o".split(" ");let re,se;if("undefined"==typeof window)re=function(){},se=function(){};else{let e;re=window.requestAnimationFrame,se=window.cancelAnimationFrame;for(let t=0;t<ie.length&&(!re||!se);t++)e=ie[t],re=re||window[e+"RequestAnimationFrame"],se=se||window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"];re&&se||(re=function(e){const t=(new Date).getTime(),n=Math.max(0,16-(t-ae)),o=window.setTimeout((()=>{e(t+n)}),n);return ae=t+n,o},se=function(e){window.clearTimeout(e)})}var le={name:"VueCountTo",props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:e=>e>=0},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:(e,t,n,o)=>n*(1-Math.pow(2,-10*e/o))*1024/1023+t}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=re(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){se(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,re(this.count)},reset(){this.startTime=null,se(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(e){this.startTime||(this.startTime=e),this.timestamp=e;const t=e-this.startTime;this.remaining=this.localDuration-t,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(t,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(t,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(t/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(t/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),t<this.localDuration?this.rAF=re(this.count):this.$emit("callback")},isNumber:e=>!isNaN(parseFloat(e)),formatNumber(e){e=e.toFixed(this.decimals);const t=(e+="").split(".");let n=t[0];const o=t.length>1?this.decimal+t[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(n);)n=n.replace(a,"$1"+this.separator+"$2");return this.prefix+n+o+this.suffix}},destroyed(){se(this.rAF)}};function de(e){e.component(le.name,le)}return le.render=function(t,n,o,a,i,r){return e.openBlock(),e.createBlock("span",null,e.toDisplayString(i.displayValue),1)},le.__file="src/components/VueCountTo/VueCountTo.vue",function(e){e.use(a),e.use(c),e.use(v),e.use(N),e.use(_),e.use(D),e.use(H),e.use(O),e.use(oe),e.use(de)}}));
