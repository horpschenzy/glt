(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Rs4p:function(t,e,a){"use strict";a.r(e);var s=a("4QaF"),o={components:{Layout:a("+SZM").a,TitleBar:s.a},props:{feedbacks:Array,member_id:""},data:function(){return{compoName:"Feedback",loader:!1,form:{feedbackType:"",feedbackReport:"",member_id:this.member_id,date_added:"",id:""}}},mounted:function(){this.$nextTick((function(){selectActiveMenu(),$(".zero-configuration").DataTable({aaSorting:[]})}))},methods:{submit:function(){var t=this;this.loader=!0,axios.post("/add/feedback",this.form).then((function(e){toastr.success(e.data.success,"Success"),$("#addFeedbackModal").modal("hide"),t.$inertia.visit("/feedback/"+t.member_id),t.loader=!1})).catch((function(e){t.loader=!1,toastr.error(e.response.data.message,"Error")}))},currentRec:function(t){this.addEdit="Edit",this.form=t},clearRec:function(){this.addEdit="Add",this.form={},this.form.member_id=this.member_id}}},i=a("KHd+"),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",[a("div",{staticClass:"pull-right"},[a("inertiaLink",{staticClass:"btn btn-primary",attrs:{href:"/members"}},[a("i",{staticClass:"feather icon-home"}),t._v(" BACK\n        ")])],1),t._v(" "),a("title-bar",{attrs:{name:t.compoName}}),t._v(" "),a("div",{staticClass:"row",attrs:{id:"slide-in"}},[a("div",{staticClass:"col-12 "},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-body card-dashboard mb-2"},[a("div",{staticClass:"pull-right"},[a("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal","data-target":"#addFeedbackModal"},on:{click:function(e){return t.clearRec()}}},[a("i",{staticClass:"feather icon-home"}),t._v(" Add Feedback\n                                ")])]),t._v(" "),a("h4",{staticClass:"card-title"},[t._v("Members")]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover zero-configuration"},[a("thead",[a("tr",[a("th",[t._v("S/N")]),t._v(" "),a("th",[t._v("Feedback Type")]),t._v(" "),a("th",[t._v("Feedback Report")]),t._v(" "),a("th",[t._v("Date Added")]),t._v(" "),t.is("super-admin")?a("th",[t._v("Date Created")]):t._e(),t._v(" "),a("th",[t._v("Action")])])]),t._v(" "),a("tbody",t._l(t.feedbacks,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",{staticClass:"product-name"},[t._v(t._s(e.feedbackType))]),t._v(" "),a("td",{staticClass:"product-category"},[t._v(t._s(e.feedbackReport))]),t._v(" "),a("td",{staticClass:"product-category"},[t._v(t._s(e.date_added))]),t._v(" "),t.is("super-admin")?a("td",{staticClass:"product-category"},[t._v(t._s(e.created_at))]):t._e(),t._v(" "),a("td",[a("button",{staticClass:"btn btn-success btn-rounded btn-sm",attrs:{"data-toggle":"modal","data-target":"#addFeedbackModal"},on:{click:function(a){return t.currentRec(e)}}},[a("i",{staticClass:"feather icon-edit"})])])])})),0)])])])])])])]),t._v(" "),a("div",{staticClass:"modal fade text-left",attrs:{id:"addFeedbackModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel33","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered ",attrs:{role:"document"}},[a("div",{staticClass:"modal-content modal-dialog-scrollable"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel33"}},[t._v(t._s(t.addEdit)+" Feedback ")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("form",{staticClass:"form form-vertical",attrs:{method:"POST",action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"modal-body row m-1"},[a("div",{staticClass:"row"},[a("div",{staticClass:"form-group col-12"},[a("label",[t._v("Feedback Type")]),t._v(" "),a("div",{staticClass:"position-relative has-icon-left"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.feedbackType,expression:"form.feedbackType"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"feedbackType",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Type")]),t._v(" "),a("option",{attrs:{value:"Called"}},[t._v("Called")]),t._v(" "),a("option",{attrs:{value:"Sent Email"}},[t._v("Sent Email")]),t._v(" "),a("option",{attrs:{value:"Text"}},[t._v("Text ")]),t._v(" "),a("option",{attrs:{value:"Visited "}},[t._v("Visited ")])]),t._v(" "),a("div",{staticClass:"form-control-position"},[a("i",{staticClass:"feather icon-home"})])])]),t._v(" "),a("div",{staticClass:"form-group col-12"},[a("label",[t._v("Date of Report")]),t._v(" "),a("div",{staticClass:"position-relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date_added,expression:"form.date_added"}],staticClass:"form-control",attrs:{type:"datetime-local"},domProps:{value:t.form.date_added},on:{input:function(e){e.target.composing||t.$set(t.form,"date_added",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group col-12"},[a("label",[t._v("Feedback Report")]),t._v(" "),a("div",{staticClass:"position-relative"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.feedbackReport,expression:"form.feedbackReport"}],staticClass:"form-control",attrs:{cols:"30",rows:"10"},domProps:{value:t.form.feedbackReport},on:{input:function(e){e.target.composing||t.$set(t.form,"feedbackReport",e.target.value)}}})])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],attrs:{type:"hidden",id:""},domProps:{value:t.form.id},on:{input:function(e){e.target.composing||t.$set(t.form,"id",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.member_id,expression:"form.member_id"}],attrs:{type:"hidden"},domProps:{value:t.form.member_id},on:{input:function(e){e.target.composing||t.$set(t.form,"member_id",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary mr-1  waves-effect waves-light",attrs:{type:"submit"}},[t.loader?a("i",{staticClass:"fa fa-circle-o-notch fa-spin mr-3"}):t._e(),t._v("Save")])])])])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);