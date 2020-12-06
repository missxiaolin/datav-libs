!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).datav=t(e.Vue)}(this,(function(e){"use strict";var t={name:"SvgComponent"};const a={width:"0",height:"0",viewBox:"0 0 100 100"},n=e.createVNode("defs",null,[e.createVNode("symbol",{id:"close",viewBox:"0 0 1024 1024"},[e.createVNode("path",{d:"M821.12 678.058667l-122.624-122.453334a61.568 61.568 0 0 1 0-87.253333l122.624-122.410667c38.528-38.4 44.202667-101.589333 7.765333-141.952a100.693333 100.693333 0 0 0-145.92-3.925333L556.373333 326.4a61.866667 61.866667 0 0 1-87.424 0L346.282667 204.074667c-38.485333-38.4-101.802667-44.117333-142.250667-7.722667a100.266667 100.266667 0 0 0-3.925333 145.621333l126.634666 126.378667c24.149333 24.106667 24.149333 63.146667 0 87.253333l-122.624 122.453334c-38.485333 38.4-44.16 101.632-7.765333 141.994666a100.693333 100.693333 0 0 0 145.92 3.882667l126.634667-126.421333a61.866667 61.866667 0 0 1 87.424 0l126.677333 126.421333a100.693333 100.693333 0 0 0 145.92-3.925333c36.394667-40.362667 30.72-103.552-7.808-141.952",fill:"#000000","p-id":"845"})]),e.createVNode("symbol",{id:"filledArrowRight",viewBox:"0 0 100 100"},[e.createVNode("polyline",{points:"20 10, 80 50, 20 90",fill:"currentColor"})])],-1);function o(e){e.component(t.name,t)}t.render=function(t,o,r,i,s,l){return e.openBlock(),e.createBlock("svg",a,[n])},t.__file="src/components/Svg/svg.vue";var r={name:"IconComponent",props:{name:String,prefix:{type:String,default:"icon"},style:Object},setup:e=>({iconName:`#${e.prefix}${e.name}`})};const i=e.withScopeId("data-v-34f86ccf");e.pushScopeId("data-v-34f86ccf");const s={class:"icon"};e.popScopeId();const l=i((function(t,a,n,o,r,i){return e.openBlock(),e.createBlock("div",{class:"icon-wrapper",style:{...n.style}},[(e.openBlock(),e.createBlock("svg",s,[e.createVNode("use",{href:o.iconName},null,8,["href"])]))],4)}));function d(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===a&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}function c(e){e.component(r.name,r)}d(".icon-wrapper[data-v-34f86ccf] {\n  display: inline-block;\n}\n\n.icon[data-v-34f86ccf] {\n  width: 100%;\n  height: 100%;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}"),r.render=l,r.__scopeId="data-v-34f86ccf",r.__file="src/components/Icon/icon.vue";var p={name:"SvgAnimation"};const u=e.withScopeId("data-v-5a151e4f");e.pushScopeId("data-v-5a151e4f");const h={class:"container"},f=e.createVNode("svg",{viewBox:"0 0 1024 1024","p-id":"2688",width:"200",height:"200"},[e.createVNode("path",{class:"logo",d:"M203.6 544.5c-6.3 0-12.5-2.8-16.6-8.2-7.1-9.2-5.4-22.4 3.8-29.5l57.1-44.1c9.2-7.1 22.4-5.4 29.5 3.8 7.1 9.2 5.4 22.4-3.8 29.5l-57.1 44.1c-3.9 3-8.5 4.4-12.9 4.4z",fill:"#999999","p-id":"2689"}),e.createVNode("path",{d:"M612.2 255.6c-3.6 0-7.1-1.8-9.1-5.1-3.2-5-1.6-11.7 3.4-14.8l38.8-24.2c5-3.2 11.7-1.6 14.8 3.4 3.2 5 1.6 11.7-3.4 14.8L617.9 254c-1.8 1.1-3.8 1.6-5.7 1.6z",fill:"#1E1E1E","p-id":"2690"}),e.createVNode("path",{d:"M627.7 83.7c-57.5 0-104 46.6-104 104 0 57.5 46.6 104 104 104 57.5 0 104-46.6 104-104s-46.6-104-104-104z m0.3 17.9c22.5 0 43.1 8.5 58.6 22.5-15.5 14-36 22.5-58.6 22.5-22.5 0-43.1-8.5-58.6-22.5 15.6-14 36.1-22.5 58.6-22.5z m-27.4 171.1c-19.9-6.5-37.5-20-48.7-39.6-11.2-19.5-14.1-41.6-9.6-62 19.9 6.5 37.5 20 48.7 39.6 11.2 19.5 14.1 41.6 9.6 62z m28.1-60.9c-12.4 0-22.4-10-22.4-22.4s10-22.4 22.4-22.4c12.4 0 22.4 10 22.4 22.4s-10 22.4-22.4 22.4z m25.3 60.1c-4.1-20.5-1-42.5 10.5-61.9 12.4-20.8 26.6-31.8 49.3-38.8 4.1 20.5 1 42.5-10.5 61.9s-29.4 32.7-49.3 38.8z",fill:"#34495E","p-id":"2691"}),e.createVNode("path",{d:"M589.9 959.6c-1.5 0-3-0.1-4.5-0.3l-443-61.9c-11.3-1.6-19.6-11-19.8-22.4l-8.4-536c0-3.4 1.4-6.6 4-8.7 2.6-2.2 6-3.1 9.3-2.4 67.2 12.9 114 38.2 147.5 79.6 29.9 37 45.6 82.7 62.3 131 8.9 25.9 18.2 52.7 30.1 79.8 24.6 56.1 100.8 69.7 162 80.7 24.3 4.4 45.3 8.1 61.4 14 7.8 2.9 31.6 11.6 31.6 34.5v179.6c0 9.4-4.1 18.3-11.2 24.5-5.9 5.2-13.5 8-21.3 8z m-454-608l8.2 523.1c0 0.7 0.5 1.3 1.2 1.4l443 61.9c3.2 0.4 6.3-0.5 8.7-2.6 2.4-2.1 3.8-5 3.8-8.3V747.5c0-13.9-38.3-20.7-75.3-27.4-32.1-5.7-68.4-12.2-100.7-25.3-38.8-15.7-64.1-37.9-77.2-67.9-12.2-27.9-21.6-55.1-30.6-81.4-31.9-92.3-57.3-165.9-181.1-193.9z",fill:"#1E1E1E","p-id":"2692"}),e.createVNode("path",{d:"M897.2 702.2c-1.2 0-2.4-0.1-3.5-0.2l-470.3-65.7-8.7-552.1c-0.1-4.3 1.8-8.3 5.1-11.1 3.3-2.7 7.6-3.8 11.8-3 65.7 13.2 111.7 38.6 144.7 79.9 29.4 36.8 45 82.1 61.5 130.1 8.9 25.9 18.2 52.7 30.1 79.8 24.6 56.1 100.8 69.7 162 80.7 24.3 4.4 45.3 8.1 61.4 14 7.8 2.9 31.6 11.6 31.6 34.5v187.5c0 7.4-3.2 14.5-8.8 19.3-4.8 4.1-10.7 6.3-16.9 6.3z m-452.6-84.7l452.1 63.1c1.6 0.2 2.7-0.5 3.2-1s1.4-1.5 1.4-3.1V489.1c0-13.9-38.3-20.7-75.3-27.4-32.1-5.7-68.4-12.2-100.7-25.3-38.8-15.7-64.1-37.9-77.2-67.9-12.2-27.9-21.6-55.1-30.7-81.4-31.9-92.5-57.2-166-181.1-193.9l8.3 524.3z",fill:"#1E1E1E","p-id":"2693"}),e.createVNode("path",{d:"M124.9 349.1c-3 0-6-1.3-8.2-3.7-3.9-4.5-3.4-11.3 1.1-15.2L418.3 71.7c4.5-3.9 11.3-3.4 15.2 1.1 3.9 4.5 3.4 11.3-1.1 15.2L132 346.5c-2.1 1.7-4.6 2.6-7.1 2.6zM126.58 877.235l300.435-258.467 14.023 16.3-300.435 258.466zM611.6 962.9c-3 0-6-1.3-8.2-3.7-3.9-4.5-3.4-11.3 1.1-15.2L905 685.5c4.5-3.9 11.3-3.4 15.2 1.1 3.9 4.5 3.4 11.3-1.1 15.2L618.7 960.3c-2.1 1.7-4.6 2.6-7.1 2.6z",fill:"#1E1E1E","p-id":"2694"}),e.createVNode("path",{d:"M299.4 468.1c-6.2 0-12.4-2.8-16.6-8.1-7.1-9.1-5.5-22.3 3.6-29.5L619.2 171c9.1-7.1 22.3-5.5 29.5 3.6 7.1 9.1 5.5 22.3-3.6 29.5L312.3 463.6c-3.8 3-8.4 4.5-12.9 4.5z",fill:"#999999","p-id":"2695"}),e.createVNode("path",{d:"M260.5 372.8c-57.5 0-104 46.6-104 104 0 57.5 46.6 104 104 104 57.5 0 104-46.6 104-104 0.1-57.4-46.5-104-104-104z m0.4 17.9c22.5 0 43.1 8.5 58.6 22.5-15.5 14-36 22.5-58.6 22.5s-43.1-8.5-58.6-22.5c15.5-14 36-22.5 58.6-22.5z m-27.4 171.1c-19.9-6.5-37.5-20-48.7-39.6-11.2-19.5-14.1-41.6-9.6-62 19.9 6.5 37.5 20 48.7 39.6 11.2 19.5 14 41.6 9.6 62z m28.1-60.9c-12.4 0-22.4-10-22.4-22.4 0-12.4 10-22.4 22.4-22.4s22.4 10 22.4 22.4c0 12.4-10 22.4-22.4 22.4z m25.2 60.1c-4.1-20.5-1-42.5 10.5-61.9 12.4-20.8 26.6-31.8 49.3-38.8 4.1 20.5 1 42.5-10.5 61.9s-29.3 32.7-49.3 38.8z",fill:"#34495E","p-id":"2696"})],-1);e.popScopeId();const v=u((function(t,a,n,o,r,i){return e.openBlock(),e.createBlock("div",h,[e.createCommentVNode(' <svg width="500" height="200" viewBox="0 0 500 200">\n      <rect\n        x="0"\n        y="0"\n        width="100"\n        height="50"\n        fill="red"\n        transform="matrix(2 1 -1 2 50 0)"\n      />\n    </svg> '),e.createCommentVNode(' <svg width="440" height="440" viewBox="0 0 440 440">\n        <circle cx="220" cy="220" r="180" stroke-width="20" stroke="#d1d3d7" fill="none"></circle>\n        <circle class="circle" cx="220" cy="220" r="180" stroke-width="20" stroke="#00a5e0" fill="none" transform="matrix(0 -1 1 0 0 440)"></circle>\n    </svg> '),f])}));function g(e){e.component(p.name,p)}d(".container[data-v-5a151e4f] svg {\n  border: 1px solid #000;\n}\n\n.circle[data-v-5a151e4f] {\n  animation: circle-5a151e4f 5s linear infinite;\n}\n\n@keyframes circle-5a151e4f {\n  from {\n    stroke-dasharray: 0 1257;\n  }\n  to {\n    stroke-dasharray: 1257 0;\n  }\n}\n.logo[data-v-5a151e4f] {\n  fill: none;\n  stroke: #333;\n  stroke-width: 10;\n}"),p.render=v,p.__scopeId="data-v-5a151e4f",p.__file="src/components/SvgAnimation/SvgAnimation.vue";var m={components:{svg:t},name:"Loading",props:{width:{type:[Number,String],default:50},height:{type:[Number,String],default:50},outsideColor:{type:String,default:"#3be6cb"},insideColor:{type:String,default:"#02bcfe"},duration:{type:Number,default:2}},setup:t=>({outsideColorAnimation:e.computed((()=>`${t.outsideColor};${t.insideColor};${t.outsideColor}`)),insideColorAnimation:e.computed((()=>`${t.insideColor};${t.outsideColor};${t.insideColor}`))})};const x=e.withScopeId("data-v-416d18c9");e.pushScopeId("data-v-416d18c9");const w={class:"loading-box"},V=e.createVNode("animateTransform",{attributeName:"transform",type:"rotate",from:"360 25 25",to:"0 25 25",dur:"1.5s",repeatCount:"indefinite"},null,-1),y={class:"loading-content"};e.popScopeId();const N=x((function(t,a,n,o,r,i){return e.openBlock(),e.createBlock("div",w,[(e.openBlock(),e.createBlock("svg",{width:n.width,height:n.height,viewBox:"0 0 50 50",preserveAspectRatio:"xMinYMid meet"},[e.createVNode("circle",{cx:"25",cy:"25",r:"22",fill:"none","stroke-width":"3",stroke:n.outsideColor,"stroke-dasharray":"34","stroke-linecap":"round"},[e.createVNode("animateTransform",{attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:n.duration+"s",repeatCount:"indefinite"},null,8,["dur"]),e.createVNode("animate",{attributeName:"stroke",values:o.outsideColorAnimation,dur:2*+n.duration+"s",repeatCount:"indefinite"},null,8,["values","dur"])],8,["stroke"]),e.createVNode("circle",{cx:"25",cy:"25",r:"12",fill:"none","stroke-width":"3",stroke:n.insideColor,"stroke-dasharray":"19","stroke-linecap":"round"},[V,e.createVNode("animate",{attributeName:"stroke",values:o.insideColorAnimation,dur:2*+n.duration+"s",repeatCount:"indefinite"},null,8,["values","dur"])],8,["stroke"])],8,["width","height"])),e.createVNode("div",y,[e.renderSlot(t.$slots,"default")])])}));function k(e){e.component(m.name,m)}d(".loading-box[data-v-416d18c9] {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}"),m.render=N,m.__scopeId="data-v-416d18c9",m.__file="src/components/Loading/Loading.vue";var b={name:"FlyBox",props:{lineColor:{type:String,default:"#235fa7"},startColor:{type:String,default:"#4fd2dd"},startLength:{type:[String,Number],default:150},duration:{type:[String,Number],default:3}},setup(t){const a=e.ref(0),n=e.ref(0),o="fly-box",r=e.computed((()=>`M5 5 L${a.value-5} 5 L${a.value-5} ${n.value-5} L5 ${n.value-5} Z`));return e.onMounted((()=>{(()=>{const t=e.getCurrentInstance().ctx.$refs[o];console.log(t.clientWidth,t.clientHeight),a.value=t.clientWidth,n.value=t.clientHeight})()})),{width:a,height:n,refName:o,path:r}}};const S=e.withScopeId("data-v-513cc2e2");e.pushScopeId("data-v-513cc2e2");const B=e.createVNode("radialGradient",{id:"radial-gradient",cx:"50%",cy:"50%",fx:"100%",fy:"50%",r:"50%"},[e.createVNode("stop",{offset:"0%","stop-color":"#fff","stop-opacity":"1"}),e.createVNode("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"})],-1),C={id:"fly-box-mask"},z={class:"fly-box-content"};e.popScopeId();const I=S((function(t,a,n,o,r,i){return e.openBlock(),e.createBlock("div",{class:"fly-box",ref:o.refName},[(e.openBlock(),e.createBlock("svg",{width:o.width,height:o.height},[e.createVNode("defs",null,[e.createVNode("path",{id:"fly-box-path",d:o.path},null,8,["d"]),B,e.createVNode("mask",C,[e.createVNode("circle",{r:n.startLength,cx:"0",cy:"0",fill:"url(#radial-gradient)"},[e.createVNode("animateMotion",{dur:n.duration+"s",path:o.path,rotate:"auto",repeatCount:"indefinite"},null,8,["dur","path"])],8,["r"])])]),e.createVNode("use",{href:"#fly-box-path","stroke-width":"1",stroke:n.lineColor,fill:"none"},null,8,["stroke"]),e.createVNode("use",{href:"#fly-box-path","stroke-width":"3",stroke:n.startColor,fill:"none",mask:"url(#fly-box-mask)"},null,8,["stroke"])],8,["width","height"])),e.createVNode("div",z,[e.renderSlot(t.$slots,"default")])],512)}));function _(e){e.component(b.name,b)}function A(e,t,a,n,o,r,i){try{var s=e[r](i),l=s.value}catch(e){return void a(e)}s.done?t(l):Promise.resolve(l).then(n,o)}d(".fly-box[data-v-513cc2e2] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.fly-box[data-v-513cc2e2] svg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.fly-box[data-v-513cc2e2] .fly-box-content {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}"),b.render=I,b.__scopeId="data-v-513cc2e2",b.__file="src/components/FlyBox/FlyBox.vue";var L=function(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var r=e.apply(t,a);function i(e){A(r,n,o,i,s,"next",e)}function s(e){A(r,n,o,i,s,"throw",e)}i(void 0)}))}};var T={name:"container",props:{options:Object},setup(t){let a="containerBox";const n=e.ref(0),o=e.ref(0),r=e.ref(0),i=e.ref(0),s=e.ref(!1);let l,d,c;const p=()=>new Promise((s=>{e.nextTick((()=>{d=l.$refs[a],t.options&&t.options.width&&t.options.height?(n.value=t.options.width,o.value=t.options.height):(n.value=d.clientWidth,o.value=d.clientHeight),r.value&&i.value||(r.value=window.screen.width,i.value=window.screen.height),s()}))})),u=()=>{const e=document.documentElement.clientWidth,t=document.documentElement.clientHeight,a=e/(n.value||r.value),s=t/(o.value||i.value);d.style.transform=`scale(${a}, ${s})`},h=function(){var e=L((function*(e){console.log(e),yield p(),u()}));return function(t){return e.apply(this,arguments)}}();return e.onMounted(L((function*(){s.value=!1,l=e.getCurrentInstance().ctx,yield p(),n.value&&o.value?(d.style.width=n.value+"px",d.style.height=o.value+"px"):(d.style.width=r.value+"px",d.style.height=i.value+"px"),u(),window.addEventListener("resize",function(e,t){let a;return function(){clearTimeout(a),a=setTimeout((()=>{t.apply(this,arguments)}),e)}}(100,h)),(()=>{const e=window.MutationObserver;c=new e(h),c.observe(d,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0})})(),s.value=!0}))),e.onUnmounted((()=>{window.removeEventListener("resize",h),c&&(c.disconnect(),c.takeRecords(),c=null)})),{refName:a,width:n,height:o,ready:s}}};const M=e.withScopeId("data-v-807af65a")((function(t,a,n,o,r,i){return e.openBlock(),e.createBlock("div",{id:"containerBox",ref:o.refName},[o.ready?e.renderSlot(t.$slots,"default",{key:0}):e.createCommentVNode("v-if",!0)],512)}));function D(e){e.component(T.name,T)}d("#containerBox[data-v-807af65a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  transform-origin: left top;\n  z-index: 999;\n}"),T.render=M,T.__scopeId="data-v-807af65a",T.__file="src/components/Container/Container.vue";var $={name:"TopHeader"};const E=e.withScopeId("data-v-326413d6");e.pushScopeId("data-v-326413d6");const F={class:"top-header"},q={class:"logo-wrapper"},W=e.createVNode("div",{class:"logo-text"},[e.createVNode("div",{class:"cn-text"},"外卖业务数据大盘"),e.createVNode("div",{class:"en-text"},"Delivery Overview of Business Data")],-1);e.popScopeId();const U=E((function(t,a,n,o,r,i){const s=e.resolveComponent("logo");return e.openBlock(),e.createBlock("div",F,[e.createVNode("div",q,[e.createVNode(s)]),W])}));function j(e){e.component($.name,$)}d(".top-header[data-v-326413d6] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: #241f20;\n  padding: 0 64px;\n  box-sizing: border-box;\n}\n.top-header[data-v-326413d6] .logo {\n  width: 120px;\n  height: 120px;\n}\n.top-header[data-v-326413d6] .logo-wrapper {\n  width: 140px;\n  height: 140px;\n}\n.top-header[data-v-326413d6] .logo-text {\n  flex: 1;\n  margin-left: 40px;\n}\n.top-header[data-v-326413d6] .logo-text .cn-text {\n  color: white;\n  font-weight: bold;\n  font-size: 60px;\n  letter-spacing: 2px;\n}\n.top-header[data-v-326413d6] .logo-text .en-text {\n  color: white;\n  font-size: 35px;\n  letter-spacing: 1px;\n}"),$.render=U,$.__scopeId="data-v-326413d6",$.__file="src/components/TopHeader/TopHeader.vue";var H={name:"Logo",props:{strokeWidth:{type:[String,Number],default:10},stroke:{type:String,default:"#000"}}};const P=e.withScopeId("data-v-52a9202f");e.pushScopeId("data-v-52a9202f");const R={class:"logo",t:"1607004745727",viewBox:"0 0 1082 1024"};e.popScopeId();const O=P((function(t,a,n,o,r,i){return e.openBlock(),e.createBlock("svg",R,[e.createVNode("path",{stroke:n.stroke,"stroke-width":n.strokeWidth,class:"logo1",d:"M533.767 0l158.995 304.74s-278.24 164.672-442.914 444.805l13.25-92.746L0.076 389.915l367.201-41.641z","p-id":"1182"},null,8,["stroke","stroke-width"]),e.createVNode("path",{stroke:n.stroke,"stroke-width":n.strokeWidth,class:"logo1",d:"M232.813 819.351s384.237-577.074 849.94-433.222l-60.57 66.248s-253.634-24.606-388.022 71.926c0 0-264.991 132.496-401.272 310.418z","p-id":"1183"},null,8,["stroke","stroke-width"]),e.createVNode("path",{stroke:n.stroke,"stroke-width":n.strokeWidth,class:"logo1",d:"M902.861 564.052l-81.39 79.497s-278.24 11.357-588.658 240.384c0 0 300.954-359.857 670.048-319.881z","p-id":"1184"},null,8,["stroke","stroke-width"]),e.createVNode("path",{stroke:n.stroke,"stroke-width":n.strokeWidth,class:"logo1",d:"M223.35 921.79s321.774-217.672 611.37-179.816L868.792 1024 546.108 849.863l-341.61 173.91z","p-id":"1185"},null,8,["stroke","stroke-width"])])}));function G(e){e.component(H.name,H)}d(".logo[data-v-52a9202f] {\n  width: 100%;\n  height: 100%;\n}\n\n.logo1[data-v-52a9202f] {\n  fill: none;\n  animation: logo-animation-52a9202f 5s linear infinite forwards;\n}\n\n@keyframes logo-animation-52a9202f {\n  0% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 2202;\n  }\n  50% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 0;\n  }\n}"),H.render=O,H.__scopeId="data-v-52a9202f",H.__file="src/components/Logo/Logo.vue";var Y={name:"totalUser",props:{todayUser:{type:Number,default:0},growthLastDay:{type:Number,default:0},growthLastMonth:{type:Number,default:0}},setup(t){const a=e.ref(0),n=e.ref(0),o=e.ref(0);return e.watch((()=>t.todayUser),((e,t)=>{a.value=t})),e.watch((()=>t.growthLastDay),((e,t)=>{n.value=t})),e.watch((()=>t.growthLastMonth),((e,t)=>{o.value=t})),{startVal:a,startPercent:n,startPercent2:o}}};const Z=e.withScopeId("data-v-c90dd0a2");e.pushScopeId("data-v-c90dd0a2");const J={class:"total-user"},K=e.createVNode("div",{class:"title"},"用户总数",-1),Q=e.createVNode("div",{class:"sub-title"},"user total count",-1),X={class:"total"},ee={class:"percent-text"},te={class:"percent-text-1"},ae=e.createTextVNode(" 每日增长率: "),ne={class:"percent-text-2"},oe=e.createTextVNode(" 每月增长率: "),re={class:"percent"},ie={class:"percent-inner-wrapper"};e.popScopeId();const se=Z((function(t,a,n,o,r,i){const s=e.resolveComponent("vue-count-to");return e.openBlock(),e.createBlock("div",J,[K,Q,e.createVNode("div",X,[e.createVNode(s,{startVal:o.startVal,endVal:n.todayUser,duration:1e3},null,8,["startVal","endVal"]),e.createCommentVNode(" {{todayUser}} ")]),e.createVNode("div",ee,[e.createVNode("span",te,[ae,e.createVNode(s,{startVal:o.startPercent,endVal:n.growthLastDay,duration:1e3,decimals:2,suffix:"%"},null,8,["startVal","endVal"])]),e.createVNode("span",ne,[oe,e.createVNode(s,{startVal:o.startPercent2,endVal:n.growthLastMonth,duration:1e3,decimals:2,suffix:"%"},null,8,["startVal","endVal"])])]),e.createVNode("div",re,[e.createVNode("div",ie,[e.createVNode("div",{class:"percent-inner",style:{width:n.growthLastDay+"%"}},null,4)])])])}));function le(e){e.component(Y.name,Y)}d(".total-user[data-v-c90dd0a2] {\n  width: 100%;\n  height: 100%;\n  background: #424446;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);\n  padding: 20px 40px;\n  box-sizing: border-box;\n}\n.total-user[data-v-c90dd0a2] .sub-title {\n  font-size: 16px;\n  letter-spacing: 1px;\n  margin-top: 10px;\n}\n.total-user[data-v-c90dd0a2] .total {\n  font-family: DIN;\n  font-size: 68px;\n  font-weight: bolder;\n  letter-spacing: 2px;\n  padding: 10px 0;\n}\n.total-user[data-v-c90dd0a2] .percent-text {\n  font-size: 28px;\n  font-family: DIN;\n  letter-spacing: 2px;\n}\n.total-user[data-v-c90dd0a2] .percent-text .percent-text-1 {\n  color: yellow;\n}\n.total-user[data-v-c90dd0a2] .percent-text .percent-text-2 {\n  color: red;\n}\n.total-user[data-v-c90dd0a2] .percent {\n  width: 100%;\n  height: 20px;\n  box-sizing: border-box;\n  border: 1px solid #ffff;\n  margin-top: 10px;\n}\n.total-user[data-v-c90dd0a2] .percent .percent-inner-wrapper {\n  height: 100%;\n  padding: 2px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.total-user[data-v-c90dd0a2] .percent .percent-inner-wrapper .percent-inner {\n  height: 100%;\n  background: #969696;\n  transition: width 1s linear;\n}"),Y.render=se,Y.__scopeId="data-v-c90dd0a2",Y.__file="src/components/TodayUsers/TodayUsers.vue";let de=0;const ce="webkit moz ms o".split(" ");let pe,ue;if("undefined"==typeof window)pe=function(){},ue=function(){};else{let e;pe=window.requestAnimationFrame,ue=window.cancelAnimationFrame;for(let t=0;t<ce.length&&(!pe||!ue);t++)e=ce[t],pe=pe||window[e+"RequestAnimationFrame"],ue=ue||window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"];pe&&ue||(pe=function(e){const t=(new Date).getTime(),a=Math.max(0,16-(t-de)),n=window.setTimeout((()=>{e(t+a)}),a);return de=t+a,n},ue=function(e){window.clearTimeout(e)})}var he={name:"VueCountTo",props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:e=>e>=0},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:(e,t,a,n)=>a*(1-Math.pow(2,-10*e/n))*1024/1023+t}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=pe(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){ue(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,pe(this.count)},reset(){this.startTime=null,ue(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(e){this.startTime||(this.startTime=e),this.timestamp=e;const t=e-this.startTime;this.remaining=this.localDuration-t,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(t,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(t,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(t/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(t/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),t<this.localDuration?this.rAF=pe(this.count):this.$emit("callback")},isNumber:e=>!isNaN(parseFloat(e)),formatNumber(e){e=e.toFixed(this.decimals);const t=(e+="").split(".");let a=t[0];const n=t.length>1?this.decimal+t[1]:"",o=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;o.test(a);)a=a.replace(o,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed(){ue(this.rAF)}};function fe(e){e.component(he.name,he)}he.render=function(t,a,n,o,r,i){return e.openBlock(),e.createBlock("span",null,e.toDisplayString(r.displayValue),1)},he.__file="src/components/VueCountTo/VueCountTo.vue";var ve={name:"averageAge",props:{data:Array,avgAge:Number},setup(t){const a=e.ref(0),n=e.ref(null);return e.watch((()=>t.avgAge),((e,t)=>{a.value=t})),{startAge:a,options:n}}};const ge=e.withScopeId("data-v-53a210cf");e.pushScopeId("data-v-53a210cf");const me={class:"average-age"},xe={class:"title-wrapper"},we=e.createVNode("div",{class:"average-age-left"},[e.createVNode("div",{class:"title"},"外卖用户年龄分布&平均年龄"),e.createVNode("div",{class:"sub-title"},"Distribution of Age")],-1),Ve={class:"average-age-right"},ye={class:"age"},Ne=e.createVNode("span",{class:"age-unit"},"岁",-1),ke={id:"average-age-chart"},be={class:"average-data-wrapper"},Se={class:"average-data-value"},Be={class:"average-data-axis"},Ce={class:"text"};e.popScopeId();const ze=ge((function(t,a,n,o,r,i){const s=e.resolveComponent("vue-count-to"),l=e.resolveComponent("vue-echarts");return e.openBlock(),e.createBlock("div",me,[e.createVNode("div",xe,[we,e.createVNode("div",Ve,[e.createVNode("div",ye,[e.createVNode(s,{startVal:o.startAge,endVal:n.avgAge,duration:1e3,decimals:2},null,8,["startVal","endVal"]),Ne])])]),e.createVNode("div",ke,[e.createVNode(l,{options:o.options},null,8,["options"])]),e.createVNode("div",be,[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(n.data,((t,a)=>(e.openBlock(),e.createBlock("div",{class:"average-data",key:a},[e.createVNode("div",Se,[e.createVNode(s,{startVal:t.startValue,endVal:t.value,duration:1e3},null,8,["startVal","endVal"])]),e.createVNode("div",Be,[e.createVNode("div",{class:"point",style:{background:t.color}},null,4),e.createVNode("div",Ce,e.toDisplayString(t.axis),1)])])))),128))])])}));function Ie(e){e.component(ve.name,ve)}return d(".average-age[data-v-53a210cf] {\n  width: 100%;\n  height: 100%;\n  background: #2b2c2e;\n  padding: 20px 40px;\n  box-sizing: border-box;\n}\n.average-age[data-v-53a210cf] .title-wrapper {\n  display: flex;\n  align-items: center;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-left .title {\n  font-size: 32px;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-left .sub-title {\n  font-size: 16px;\n  margin-top: 10px;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-right {\n  flex: 1;\n  margin-left: 40px;\n  font-weight: bold;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-right .age {\n  font-size: 68px;\n  font-family: DIN;\n}\n.average-age[data-v-53a210cf] .title-wrapper .average-age-right .age .age-unit {\n  font-size: 20px;\n}\n.average-age[data-v-53a210cf] #average-age-chart {\n  height: 120px;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper {\n  display: flex;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: bolder;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data .average-data-value {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data .average-data-axis {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 5px;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data .average-data-axis .point {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.average-age[data-v-53a210cf] .average-data-wrapper .average-data .average-data-axis .text {\n  margin-left: 10px;\n  font-size: 16px;\n}"),ve.render=ze,ve.__scopeId="data-v-53a210cf",ve.__file="src/components/AverageAge/AverageAge.vue",function(e){e.use(o),e.use(c),e.use(g),e.use(k),e.use(_),e.use(D),e.use(j),e.use(G),e.use(le),e.use(fe),e.use(Ie)}}));
