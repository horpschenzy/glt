(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Y8Kp:function(t,e,s){"use strict";s.r(e);var a=s("+SZM"),r=s("4QaF"),i={components:{Layout:a.a,"title-bar":r.a},props:{courses:Array},data:function(){return{compoName:"Courses",loader:!1,addEdit:"",form:{course_code:"",course_title:"",id:""}}},mounted:function(){this.$nextTick((function(){selectActiveMenu(),$(".zero-configuration").DataTable({aaSorting:[]})}))},methods:{onImageChange:function(t){var e=t.target.files||t.dataTransfer.files;return this.createImage(e[0])},createImage:function(t){var e=this,s=new FileReader;s.onload=function(t){e.form.ext_image=t.target.result},s.readAsDataURL(t)},deleteCourse:function(t){var e=this;this.$swal({title:"Delete Course?",text:"You can't revert your action",type:"success",showCancelButton:!0,confirmButtonText:"Yes, Delete it!",cancelButtonText:"No, Cancel!",showCloseButton:!0,showLoaderOnConfirm:!0}).then((function(s){s.value?axios.get("/course/delete/"+t).then((function(t){toastr.success(t.data.success,"Success"),e.$inertia.visit("course")})).catch((function(t){toastr.error(t.response.data.error,"Error")})):e.$swal("Cancelled","Your file is still intact","info")}))},submit:function(){var t=this;this.loader=!0,axios.post("/course/add",this.form).then((function(e){toastr.success(e.data.success,"Success"),$("#addCourseModal").modal("hide"),t.$inertia.visit("course"),t.loader=!1})).catch((function(e){t.loader=!1,toastr.error(e.response.data.message,"Error")}))},currentRec:function(t){this.addEdit="Edit",this.form=t},clearRec:function(){this.addEdit="Add",this.form={}}}},o=s("KHd+"),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("layout",[s("div",{staticClass:"pull-right"},[t.is("super-admin")?s("inertiaLink",{staticClass:"btn btn-primary",attrs:{href:"/add/course"}},[s("i",{staticClass:"feather icon-home"}),t._v(" UPLOAD COURSE\r\n            ")]):t._e()],1),t._v(" "),s("title-bar",{attrs:{name:t.compoName}}),t._v(" "),s("div",{staticClass:"row",attrs:{id:"slide-in"}},t._l(t.courses,(function(e,a){return s("div",{key:e.id,staticClass:"col-xl-4 col-md-4 col-sm-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:e.course_img,alt:e.course_code}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(e.course_title)+" ("),s("small",{staticClass:"text-muted font-small-3"},[t._v(t._s(e.course_code))]),t._v(")")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v(t._s(e.course_description))]),t._v(" "),t.is("member")?s("a",{staticClass:"btn btn-outline-primary waves-effect waves-light",attrs:{href:"#"}},[t._v("Start Course")]):t._e()])])])])})),0)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);