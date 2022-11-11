(function(){"use strict";var t={6559:function(t,e,n){var r=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("SimpleDMS")]),n("div",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item dropdown ms-5"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false"}},[t._v("Department Info")]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/dept"}},[t._v("Dept")])],1),n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/add/dept"}},[t._v("Add")])],1)])]),n("li",{staticClass:"nav-item dropdown ms-5"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false"}},[t._v("Employee Info")]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/emp"}},[t._v("Emp")])],1),n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/add/emp"}},[t._v("Add")])],1)])]),n("li",{staticClass:"nav-item dropdown ms-5"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false"}},[t._v("Faq")]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/faq"}},[t._v("Faq")])],1),n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/add/faq"}},[t._v("Add")])],1)])])])],1),n("div",{staticClass:"container mt-3"},[n("router-view")],1)])},a=[],i={name:"app"},d=i,s=n(1001),l=(0,s.Z)(d,o,a,!1,null,null,null),u=l.exports,c=n(2809);r.Z.use(c.Z);const f=[{path:"/",alias:"/dept",name:"dept",component:()=>Promise.all([n.e(327),n.e(76)]).then(n.bind(n,1076))},{path:"/dept/:dno",name:"dept-details",component:()=>Promise.all([n.e(327),n.e(957)]).then(n.bind(n,6957))},{path:"/add/dept",name:"add-dept",component:()=>Promise.all([n.e(327),n.e(0)]).then(n.bind(n,7e3))},{path:"/emp",name:"emp",component:()=>Promise.all([n.e(327),n.e(344)]).then(n.bind(n,4344))},{path:"/emp/:eno",name:"emp-details",component:()=>Promise.all([n.e(327),n.e(919)]).then(n.bind(n,6919))},{path:"/add/emp",name:"add-emp",component:()=>Promise.all([n.e(327),n.e(893)]).then(n.bind(n,9893))},{path:"/faq",name:"faq",component:()=>Promise.all([n.e(327),n.e(40)]).then(n.bind(n,5040))},{path:"/faq/:no",name:"faq-details",component:()=>Promise.all([n.e(327),n.e(459)]).then(n.bind(n,6459))},{path:"/add/faq",name:"add-faq",component:()=>Promise.all([n.e(327),n.e(518)]).then(n.bind(n,8518))}],p=new c.Z({mode:"history",base:"/",routes:f});var m=p,v=n(4665);r.Z.use(v.ZP);var b=new v.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r.Z.config.productionTip=!1,new r.Z({router:m,store:b,render:t=>t(u)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],a=t[u][2];for(var d=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(d=!1,a<i&&(i=a));if(d){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{0:"0f68a3af",40:"5b92c0c2",76:"554c78d2",327:"92f08603",344:"26b64bb2",459:"e8bd3c9d",518:"f277f43b",893:"d1a03837",919:"699d7d50",957:"8bfe8ba0"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{0:"d2108c4b",40:"4445956f",76:"4445956f",344:"4445956f",459:"ba9419c9",518:"d2108c4b",893:"d2108c4b",919:"ba9419c9",957:"ba9419c9"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="front-end:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var d,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==e+a){d=c;break}}d||(s=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.setAttribute("data-webpack",e+a),d.src=r),t[r]=[o];var f=function(e,n){d.onerror=d.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),s&&document.head.appendChild(d)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=d,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),d=n.p+i;if(e(i,d))return o();t(r,d,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={0:1,40:1,76:1,344:1,459:1,518:1,893:1,919:1,957:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),d=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,o[1](d)}};n.l(i,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],d=r[1],s=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in d)n.o(d,o)&&(n.m[o]=d[o]);if(s)var u=s(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},r=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6559)}));r=n.O(r)})();
//# sourceMappingURL=app.bdc29bc0.js.map