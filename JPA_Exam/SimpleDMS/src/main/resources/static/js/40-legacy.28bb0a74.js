"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[40],{5040:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list row"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.searchTitle}},[t._v(" Search ")])])])]),n("div",{staticClass:"col-md-6"},[n("h4",[t._v("Faq List")]),n("ul",{staticClass:"list-group"},t._l(t.faq,(function(e,a){return n("li",{key:a,staticClass:"list-group-item",class:{active:a==t.currentIndex},on:{click:function(n){return t.setActiveFaq(e,a)}}},[t._v(" "+t._s(e.title)+" ")])})),0),n("button",{staticClass:"m-3 btn btn-sm btn-danger",on:{click:t.removeAllFaq}},[t._v(" Remove All ")])]),n("div",{staticClass:"col-md-6"},[t.currentFaq?n("div",[n("h4",[t._v("Faq")]),n("div",[t._m(0),t._v(" "+t._s(t.currentFaq.title)+" ")]),n("div",[t._m(1),t._v(" "+t._s(t.currentFaq.content)+" ")]),n("router-link",{attrs:{to:"/faq/"+t.currentFaq.no}},[n("span",{staticClass:"badge bg-success"},[t._v("Edit")])])],1):n("div",[n("br"),n("p",[t._v("Please click on a Faq...")])])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("strong",[t._v("Title:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("strong",[t._v("Content:")])])}],i=n(7428),c={data:function(){return{faq:[],currentFaq:null,currentIndex:-1,title:""}},methods:{retrieveFaq:function(){var t=this;i.Z.getAll().then((function(e){t.faq=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},refreshList:function(){this.retrieveFaq(),this.currentFaq=null,this.currentIndex=-1},setActiveFaq:function(t,e){this.currentFaq=t,this.currentIndex=e},removeAllFaq:function(){var t=this;i.Z.deleteAll().then((function(e){console.log(e.data),t.refreshList()})).catch((function(t){console.log(t)}))},searchTitle:function(){var t=this;i.Z.findByTitle(this.title).then((function(e){t.faq=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.retrieveFaq()}},r=c,s=n(1001),o=(0,s.Z)(r,a,l,!1,null,null,null),u=o.exports},7428:function(t,e,n){var a=n(6133),l=n(2751),i=n(2327),c=function(){function t(){(0,a.Z)(this,t)}return(0,l.Z)(t,[{key:"getAll",value:function(){return i.Z.get("/faq")}},{key:"get",value:function(t){return i.Z.get("/faq/".concat(t))}},{key:"create",value:function(t){return i.Z.post("/faq",t)}},{key:"update",value:function(t,e){return i.Z.put("/faq/".concat(t),e)}},{key:"delete",value:function(t){return i.Z["delete"]("/faq/deletion/".concat(t))}},{key:"deleteAll",value:function(){return i.Z["delete"]("/faq/all")}},{key:"findByDname",value:function(t){return i.Z.get("/faq?title=".concat(t))}}]),t}();e["Z"]=new c}}]);
//# sourceMappingURL=40-legacy.28bb0a74.js.map