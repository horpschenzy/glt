(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Z1kN:function(t,a,s){"use strict";s.r(a);var e=s("+SZM"),i=s("4QaF"),r={components:{Layout:e.a,"title-bar":i.a},props:{units:Array,users:Object,notifications:Array,member:Object,leaders:Array,events:Array,page:String},data:function(){return{compoName:"Member Profile",loader:!1,addEdit:"",form:{banner:""}}},mounted:function(){this.$nextTick((function(){selectActiveMenu(),$(".zero-configuration").DataTable({aaSorting:[]})}))},methods:{onImageChange:function(t){var a=t.target.files||t.dataTransfer.files;return this.createImage(a[0])},createImage:function(t){var a=this,s=new FileReader;s.onload=function(t){a.form.banner=t.target.result},s.readAsDataURL(t)},submit:function(){var t=this;this.loader=!0,axios.post("/update/banner",this.form).then((function(a){toastr.success(a.data.success,"Success"),$("#addBannerModal").modal("hide"),t.$inertia.visit("/member/profile"),t.loader=!1})).catch((function(a){t.loader=!1,toastr.error(a.response.data.message,"Error")}))},currentRec:function(t){this.addEdit="Edit",this.form=t},clearRec:function(){this.addEdit="Add",this.form={}}}},l=s("KHd+"),n=Object(l.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("layout",[s("title-bar",{attrs:{name:t.compoName}}),t._v(" "),s("div",{attrs:{id:"user-profile"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"profile-header mb-2"},[s("div",{staticClass:"relative"},[s("div",{staticClass:"cover-container"},[t.member.banner?s("img",{staticClass:"img-fluid bg-cover rounded-0 w-100",staticStyle:{height:"300px"},attrs:{src:"/"+t.member.banner,alt:"User Profile Image"}}):s("img",{staticClass:"img-fluid bg-cover rounded-0 w-100",attrs:{src:"/images/gltlogos.png",alt:"User Banner Image"}})]),t._v(" "),s("div",{staticClass:"profile-img-container d-flex align-items-center justify-content-between"},[""!==t.member.image||"null"!==t.member.image?s("img",{staticClass:"rounded-circle img-border box-shadow-1",attrs:{src:"/"+t.member.image,alt:""}}):s("img",{staticClass:"rounded-circle img-border box-shadow-1",attrs:{src:t.users.image,alt:""}}),t._v(" "),s("div",{staticClass:"float-right"},[s("inertia-link",{staticClass:"btn btn-icon btn-icon rounded-circle btn-primary mr-1 waves-effect waves-light",attrs:{href:"/profile"}},[s("i",{staticClass:"feather icon-edit-2"})]),t._v(" "),s("button",{staticClass:"btn btn-icon btn-icon rounded-circle btn-primary waves-effect waves-light",attrs:{"data-toggle":"modal","data-target":"#addBannerModal"}},[s("i",{staticClass:"feather icon-settings"})])],1)])]),t._v(" "),s("div",{staticClass:"d-flex justify-content-end align-items-center profile-header-nav"},[s("nav",{staticClass:"navbar navbar-expand-sm w-100 pr-0"},[s("button",{staticClass:"navbar-toggler pr-0",attrs:{type:"button","data-toggle":"collapse","data-target":"navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"},[s("i",{staticClass:"feather icon-align-justify"})])]),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav justify-content-around w-75 ml-sm-auto"},[s("li",{staticClass:"nav-item px-sm-0"},[s("inertia-link",{staticClass:"nav-link font-small-3",attrs:{href:"/member/profile"}},[t._v("Timeline")])],1),t._v(" "),s("li",{staticClass:"nav-item px-sm-0"},[s("inertia-link",{staticClass:"nav-link font-small-3",attrs:{href:"/announcement"}},[t._v("Announcement")])],1),t._v(" "),s("li",{staticClass:"nav-item px-sm-0"},[s("inertia-link",{staticClass:"nav-link font-small-3",attrs:{href:"/ministry"}},[t._v("Ministry")])],1),t._v(" "),s("li",{staticClass:"nav-item px-sm-0"},[s("inertia-link",{staticClass:"nav-link font-small-3",attrs:{href:"/event"}},[t._v("Events")])],1)])])])])])])]),t._v(" "),s("section",{attrs:{id:"profile-info"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",[t._v("About")]),t._v(" "),s("i",{staticClass:"feather icon-more-horizontal cursor-pointer"})]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{},[s("h6",{staticClass:"mb-0"},[t._v("Name:")]),t._v(" "),s("p",[t._v(t._s(t.member.first_name+" "+t.member.last_name))])]),t._v(" "),s("div",{staticClass:"mt-1"},[s("h6",{staticClass:"mb-0"},[t._v("Date Of Birth:")]),t._v(" "),s("p",[t._v(t._s(t.member.dob))])]),t._v(" "),s("div",{staticClass:"mt-1"},[s("h6",{staticClass:"mb-0"},[t._v("Lives:")]),t._v(" "),s("p",[t._v(t._s(t.member.address))])]),t._v(" "),s("div",{staticClass:"mt-1"},[s("h6",{staticClass:"mb-0"},[t._v("Email:")]),t._v(" "),s("p",[t._v(t._s(t.member.email_address))])]),t._v(" "),s("div",{staticClass:"mt-1"},[s("h6",{staticClass:"mb-0"},[t._v("Phone Number:")]),t._v(" "),s("p",[t._v(t._s(t.member.phone_number))])]),t._v(" "),s("div",{staticClass:"mt-1"},[s("h3",{staticClass:"mb-0"},[t._v("Access Code:")]),t._v(" "),s("p",{staticClass:"font-large-1"},[t._v(t._s(t.users.access_code))])]),t._v(" "),s("div",{staticClass:"mt-1"},[s("inertia-link",{staticClass:"btn btn-primary btn-sm",attrs:{href:"/profile"}},[t._v("\n                                            Edit\n                                        ")])],1)])]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.$page.auth.user.extension_name.toUpperCase()))]),t._v(" "),s("h5",{staticClass:"card-title"},[t._v("Leadership")])]),t._v(" "),s("div",{staticClass:"card-body suggested-block"},t._l(t.leaders,(function(a,e){return s("div",{key:e,staticClass:"d-flex justify-content-start align-items-center mb-1"},[s("div",{staticClass:"avatar mr-50"},[a.image?s("img",{attrs:{src:"/"+a.image,alt:"avtar img holder",height:"35",width:"35"}}):s("img",{attrs:{src:"/images/logo.png",alt:"avtar img holder",height:"35",width:"35"}})]),t._v(" "),s("div",{staticClass:"user-page-info"},[s("p",[t._v(t._s(a.name))]),t._v(" "),s("span",{staticClass:"font-small-2"},[t._v(t._s(a.roles[0].name))])]),t._v(" "),s("div",{staticClass:"ml-auto"},[s("i",{staticClass:"feather icon-star"})])])})),0)])]),t._v(" "),s("div",{staticClass:"col-lg-9"},["timeline"==t.page?[s("div",{staticClass:"card",staticStyle:{height:"582.5px"}},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"card-title"},[t._v("Activity Timeline")])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body"},[s("ul",{staticClass:"activity-timeline timeline-left list-unstyled"},t._l(t.notifications,(function(a){return s("li",{key:a.id},[s("div",{staticClass:"timeline-icon bg-primary"},[s("i",{staticClass:"feather icon-plus font-medium-2 align-middle"})]),t._v(" "),s("div",{staticClass:"timeline-info"},["useractivities"==a.category?s("p",{staticClass:"font-weight-bold mb-0"},[t._v("Profile Update")]):"event"==a.category?s("p",{staticClass:"font-weight-bold mb-0"},[t._v("Event Update")]):"acl"==a.category?s("p",{staticClass:"font-weight-bold mb-0"},[t._v("Role/Permission Update")]):t._e(),t._v(" "),s("span",{staticClass:"font-small-3"},[t._v(t._s(a.message))])]),t._v(" "),s("small",{staticClass:"text-muted"},[t._v(t._s(a.created_at))])])})),0)])])])]:"event"==t.page?[s("div",{staticClass:"row"},t._l(t.events,(function(a,e){return s("div",{key:e,staticClass:"col-xl-4 col-md-4 col-sm-4"},[s("a",{attrs:{href:"/register/event/"+a.event_code,target:"_blank"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top",attrs:{width:"200px",height:"200px",src:a.event_image,alt:a.event_name}}),t._v(" "),s("div",{staticClass:"card-body",staticStyle:{height:"200px !important"}},[s("h4",{staticClass:"card-title"},[t._v(t._s(a.event_name))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(" Start Date And Time "+t._s(a.event_start_date)+" "+t._s(a.event_start_time))]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(" End Date And Time "+t._s(a.event_end_date)+" "+t._s(a.event_start_time))])])])])])])})),0)]:t._e()],2)])]),t._v(" "),s("div",{staticClass:"modal fade text-left",attrs:{id:"addBannerModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel33","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel33"}},[t._v("Update Banner")]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("form",{staticClass:"form form-vertical",attrs:{method:"POST",action:"#"},on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[s("div",{staticClass:"modal-body row m-1"},[s("div",{staticClass:"row"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"pictureFile"}},[t._v("Banner (1000px X 300px)")]),t._v(" "),s("div",{staticClass:"custom-file"},[s("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"pictureFile",accept:"image/*","data-default-file":"","data-height":"200","data-max-file-size":"5M","data-width":"100","data-allowed-file-extensions":"jpg jpeg gif png rpg jfif"},on:{change:t.onImageChange}}),t._v(" "),s("label",{staticClass:"custom-file-label",attrs:{for:"pictureFile"}},[t._v("Upload Banner")])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary mr-1  waves-effect waves-light",attrs:{type:"submit"}},[t.loader?s("i",{staticClass:"fa fa-circle-o-notch fa-spin mr-3"}):t._e(),t._v("Save")])])])])])])])],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);