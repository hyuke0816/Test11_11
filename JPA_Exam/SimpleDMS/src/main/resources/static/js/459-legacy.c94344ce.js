"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[459],{6459:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentFaq?n("div",{staticClass:"edit-form"},[n("h4",[t._v("Faq")]),n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"title"}},[t._v("Dname")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentFaq.title,expression:"currentFaq.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.currentFaq.title},on:{input:function(e){e.target.composing||t.$set(t.currentFaq,"title",e.target.value)}}})]),n("div",{staticClass:"mt-3 form-group"},[n("label",{attrs:{for:"content"}},[t._v("Content")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentFaq.content,expression:"currentFaq.content"}],staticClass:"form-control",attrs:{type:"text",id:"content"},domProps:{value:t.currentFaq.content},on:{input:function(e){e.target.composing||t.$set(t.currentFaq,"content",e.target.value)}}})])]),n("button",{staticClass:"mt-3 btn btn-danger",on:{click:t.deleteFaq}},[t._v("Delete ")]),n("button",{staticClass:"ms-3 mt-3 btn btn-success",attrs:{type:"submit"},on:{click:t.updateFaq}},[t._v(" Update ")]),n("p",[t._v(t._s(t.message))])]):n("div",[n("br"),n("p",[t._v("Please click on a Faq...")])])},o=[],r=n(7428),c={data:function(){return{currentFaq:null,message:""}},methods:{getFaq:function(t){var e=this;r.Z.get(t).then((function(t){e.currentFaq=t.data,console.log(t.data)})).catch((function(t){console.log(t)}))},updateFaq:function(){var t=this;r.Z.update(this.currentFaq.no,this.currentFaq).then((function(e){console.log(e.data),t.message="The Faq was updated successfully!"})).catch((function(t){console.log(t)}))},deleteFaq:function(){var t=this;r.Z["delete"](this.currentFaq.no).then((function(e){console.log(e.data),t.$router.push("/faq")})).catch((function(t){console.log(t)}))}},mounted:function(){this.message="",this.getFaq(this.$route.params.no)}},u=c,s=n(1001),l=(0,s.Z)(u,a,o,!1,null,null,null),i=l.exports},7428:function(t,e,n){var a=n(6133),o=n(2751),r=n(2327),c=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,[{key:"getAll",value:function(){return r.Z.get("/faq")}},{key:"get",value:function(t){return r.Z.get("/faq/".concat(t))}},{key:"create",value:function(t){return r.Z.post("/faq",t)}},{key:"update",value:function(t,e){return r.Z.put("/faq/".concat(t),e)}},{key:"delete",value:function(t){return r.Z["delete"]("/faq/deletion/".concat(t))}},{key:"deleteAll",value:function(){return r.Z["delete"]("/faq/all")}},{key:"findByDname",value:function(t){return r.Z.get("/faq?title=".concat(t))}}]),t}();e["Z"]=new c}}]);
//# sourceMappingURL=459-legacy.c94344ce.js.map