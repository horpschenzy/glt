(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{OwYU:function(t,a,s){"use strict";s.r(a);var e=s("4QaF"),i=s("+SZM"),n=s("vDqi"),o=s.n(n),c={components:{Layout:i.a,TitleBar:e.a},props:{extensions:Array},data:function(){return{compoName:"Dashboard Home",loader:!1}},mounted:function(){this.$nextTick((function(){selectActiveMenu(),$(".zero-configuration").DataTable({aaSorting:[]})}))},methods:{viewDashboard:function(t){var a=this;o.a.get("/changeExtension/"+t).then((function(t){a.$inertia.visit("/dashboard")})).catch((function(t){a.loader=!1,toastr.error(t.response.data.message,"Error")}))}}},l=s("KHd+"),r=Object(l.a)(c,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("layout",[s("title-bar",{attrs:{name:t.compoName}}),t._v(" "),s("div",{staticClass:"row",attrs:{id:"slide-in"}},[t._l(t.extensions,(function(a,e){return s("div",{key:e,staticClass:"col-lg-4 col-md-6 col-sm-12"},[s("div",{staticClass:"card border-info text-center bg-transparent"},[s("div",{staticClass:"card-content"},[a.ext_image?s("img",{staticClass:"float-left mt-3 pl-2",staticStyle:{padding:"20px"},attrs:{src:"/"+a.ext_image,alt:a.name,height:"100",width:"100"}}):s("img",{staticClass:"float-left mt-3 pl-2",staticStyle:{padding:"20px"},attrs:{src:"/images/logo/gltlogo.png",alt:a.name,height:"100",width:"100"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mt-3"},[t._v(t._s(a.ext_name))]),t._v(" "),s("p",{staticClass:"card-text mb-25"},[t._v(t._s(a.ext_location))]),t._v(" "),s("button",{staticClass:"btn btn-info mt-1 waves-effect waves-light",on:{click:function(s){return t.viewDashboard(a.id)}}},[t._v("View dashboard")])])])])])})),t._v(" "),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[s("div",{staticClass:"card border-info text-center bg-transparent"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"float-left mt-3 pl-2",staticStyle:{padding:"20px"},attrs:{src:"/images/logo/gltlogo.png",alt:"GLTCIS",height:"100",width:"100"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mt-3"},[t._v("GLT-CIS")]),t._v(" "),s("p",{staticClass:"card-text mb-25"},[t._v("Head-quarter")]),t._v(" "),s("button",{staticClass:"btn btn-info mt-1 waves-effect waves-light",on:{click:function(a){return t.viewDashboard("glt")}}},[t._v("View All")])])])])])],2)],1)}),[],!1,null,null,null);a.default=r.exports}}]);