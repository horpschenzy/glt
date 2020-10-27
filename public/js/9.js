(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8TsI":function(t,s,e){"use strict";e.r(s);var a=e("4QaF"),i={components:{Layout:e("+SZM").a,TitleBar:a.a},props:{roles:Array,permissions:Array},data:function(){return{compoName:"Roles",loader:!1,addEdit:"",form:{name:"",id:"",permission:[]}}},mounted:function(){this.$nextTick((function(){selectActiveMenu(),$(".zero-configuration").DataTable({aaSorting:[]})}))},methods:{getRolePermission:function(t){var s=this;this.addEdit="Edit",this.form.name=t.name,this.form.id=t.id,axios.post("/getRolePermissions",this.form).then((function(t){s.form.permission=t.data.map((function(t){return t.permission_id}))})).catch((function(t){s.data.status=!1,toastr.error(t.response.data.message,"Error")}))},deleteRole:function(t){var s=this;this.$swal({title:"Delete Roles?",text:"You can't revert your action",type:"success",showCancelButton:!0,confirmButtonText:"Yes, Delete it!",cancelButtonText:"No, Cancel!",showCloseButton:!0,showLoaderOnConfirm:!0}).then((function(e){e.value?axios.get("/role/delete/"+t).then((function(t){toastr.success(t.data.success,"Success"),s.$inertia.visit("roles")})).catch((function(t){toastr.error(t.response.data.message,"Error")})):s.$swal("Cancelled","Your file is still intact","info")}))},submit:function(){var t=this;this.loader=!0,this.form.id?axios.post("/assign/permission",this.form).then((function(s){toastr.success(s.data.success,"Success"),$("#addRoleModal").modal("hide"),t.form.name="",t.form.id="",t.form.permission=[],t.$inertia.visit("roles"),t.loader=!1})).catch((function(s){t.loader=!1,toastr.error(s.response.data.message,"Error")})):axios.post("/role/add",this.form).then((function(s){toastr.success(s.data.success,"Success"),$("#addRoleModal").modal("hide"),t.$inertia.visit("roles"),t.loader=!1})).catch((function(s){t.loader=!1,toastr.error(s.response.data.message,"Error")}))},currentRec:function(t){this.addEdit="Edit",this.form=t},clearRec:function(){this.addEdit="Add",this.form.name="",this.form.id="",this.form.permission=[]}}},o=e("KHd+"),r=Object(o.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("layout",[e("title-bar",{attrs:{name:t.compoName}}),t._v(" "),e("div",{staticClass:"row",attrs:{id:"slide-in"}},[e("div",{staticClass:"col-12 "},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"card-body card-dashboard mb-2"},[e("div",{staticClass:"pull-right"},[e("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal","data-target":"#addRoleModal"},on:{click:function(s){return t.clearRec()}}},[e("i",{staticClass:"feather icon-home"}),t._v(" Add Role\n                            ")]),t._v(" "),e("inertia-link",{staticClass:"btn btn-secondary",attrs:{href:"/permissions"}},[e("i",{staticClass:"feather icon-shield"}),e("span",{staticClass:"menu-title",attrs:{"data-i18n":""}},[t._v("Permissions")])])],1),t._v(" "),e("h4",{staticClass:"card-title"},[t._v(" Roles")]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover zero-configuration"},[e("thead",[e("tr",[e("th",[t._v("Role Id")]),t._v(" "),e("th",[t._v("Role Name")]),t._v(" "),e("th",[t._v("Action")])])]),t._v(" "),e("tbody",t._l(t.roles,(function(s,a){return e("tr",{key:s.id},[e("td",[t._v(t._s(a+1)+" ")]),t._v(" "),e("td",[t._v(t._s(s.name))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-success btn-rounded btn-sm",attrs:{"data-toggle":"modal","data-target":"#addRoleModal"},on:{click:function(e){return t.getRolePermission(s)}}},[e("i",{staticClass:"feather icon-edit"})]),t._v(" "),e("button",{staticClass:"btn btn-info btn-rounded btn-sm",on:{click:function(e){return t.deleteRole(s.id)}}},[e("i",{staticClass:"feather icon-delete"})])])])})),0)])])])])])])]),t._v(" "),e("div",{staticClass:"modal fade text-left",attrs:{id:"addRoleModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel33","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered ",attrs:{role:"document"}},[e("div",{staticClass:"modal-content modal-dialog-scrollable"},[e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel33"}},[t._v(t._s(t.addEdit)+" Role ")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("form",{staticClass:"form form-vertical",attrs:{method:"POST",action:"#"},on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[e("div",{staticClass:"modal-body row m-1"},[e("div",{staticClass:"row"},[t.form.id?t._e():e("div",{staticClass:"form-group col-12"},[e("label",[t._v("Role Name")]),t._v(" "),e("div",{staticClass:"position-relative has-icon-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Role Name",required:""},domProps:{value:t.form.name},on:{input:function(s){s.target.composing||t.$set(t.form,"name",s.target.value)}}}),t._v(" "),e("div",{staticClass:"form-control-position"},[e("i",{staticClass:"feather icon-home"})])])]),t._v(" "),e("h3",[e("label",{attrs:{for:""}},[t._v("Permissions")])]),t._v(" "),e("div",{staticClass:"form-group col-12"},[e("div",{staticClass:"position-relative has-icon-left"},[e("fieldset",t._l(t.permissions,(function(s){return e("div",{key:s.id,staticClass:"vs-checkbox-con vs-checkbox-primary"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.permission,expression:"form.permission"}],attrs:{type:"checkbox"},domProps:{checked:-1!=t.form.permission.indexOf(s.id),value:s.id,checked:Array.isArray(t.form.permission)?t._i(t.form.permission,s.id)>-1:t.form.permission},on:{change:function(e){var a=t.form.permission,i=e.target,o=!!i.checked;if(Array.isArray(a)){var r=s.id,n=t._i(a,r);i.checked?n<0&&t.$set(t.form,"permission",a.concat([r])):n>-1&&t.$set(t.form,"permission",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.form,"permission",o)}}}),t._v(" "),e("span",{staticClass:"vs-checkbox vs-checkbox-lg"},[e("span",{staticClass:"vs-checkbox--check"},[e("i",{staticClass:"vs-icon feather icon-check"})])]),t._v(" "),e("span",{staticClass:"text-md"},[t._v(t._s(s.name))])])})),0)])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],attrs:{type:"hidden",id:""},domProps:{value:t.form.id},on:{input:function(s){s.target.composing||t.$set(t.form,"id",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary mr-1  waves-effect waves-light",attrs:{type:"submit"}},[t.loader?e("i",{staticClass:"fa fa-circle-o-notch fa-spin mr-3"}):t._e(),t._v("Save")])])])])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);