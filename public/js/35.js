(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/RolesComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/RolesComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_TitleBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/TitleBar */ "./resources/js/Shared/TitleBar.vue");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    TitleBar: _Shared_TitleBar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    roles: Array,
    permissions: Array
  },
  data: function data() {
    return {
      compoName: 'Roles',
      loader: false,
      addEdit: '',
      form: {
        name: '',
        id: '',
        permission: []
      }
    };
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      selectActiveMenu();
      $('.zero-configuration').DataTable({
        "aaSorting": []
      });
    });
  },
  methods: {
    getRolePermission: function getRolePermission(role) {
      var _this = this;

      this.addEdit = 'Edit';
      this.form.name = role.name;
      this.form.id = role.id;
      axios.post("/getRolePermissions", this.form).then(function (response) {
        _this.form.permission = response.data.map(function (obj) {
          return obj.permission_id;
        });
      })["catch"](function (error) {
        _this.data.status = false;
        toastr.error(error.response.data.message, 'Error');
      });
    },
    deleteRole: function deleteRole(id) {
      var _this2 = this;

      this.$swal({
        title: 'Delete Roles?',
        text: 'You can\'t revert your action',
        type: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes, Delete it!',
        cancelButtonText: 'No, Cancel!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(function (result) {
        if (result.value) {
          axios.get("/role/delete/" + id).then(function (response) {
            toastr.success(response.data.success, 'Success');

            _this2.$inertia.visit('roles');
          })["catch"](function (error) {
            toastr.error(error.response.data.message, 'Error');
          });
        } else {
          _this2.$swal('Cancelled', 'Your file is still intact', 'info');
        }
      });
    },
    submit: function submit() {
      var _this3 = this;

      this.loader = true;

      if (this.form.id) {
        axios.post("/assign/permission", this.form).then(function (response) {
          toastr.success(response.data.success, 'Success');
          $('#addRoleModal').modal('hide');
          _this3.form.name = '';
          _this3.form.id = '';
          _this3.form.permission = [];

          _this3.$inertia.visit('roles');

          _this3.loader = false;
        })["catch"](function (error) {
          _this3.loader = false;
          toastr.error(error.response.data.message, 'Error');
        });
      } else {
        axios.post("/role/add", this.form).then(function (response) {
          toastr.success(response.data.success, 'Success');
          $('#addRoleModal').modal('hide');

          _this3.$inertia.visit('roles');

          _this3.loader = false;
        })["catch"](function (error) {
          _this3.loader = false;
          toastr.error(error.response.data.message, 'Error');
        });
      }
    },
    currentRec: function currentRec(role) {
      this.addEdit = 'Edit';
      this.form = role;
    },
    clearRec: function clearRec() {
      this.addEdit = 'Add';
      this.form.name = '';
      this.form.id = '';
      this.form.permission = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/RolesComponent.vue?vue&type=template&id=3a9b6eae&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/RolesComponent.vue?vue&type=template&id=3a9b6eae& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "layout",
    [
      _c("title-bar", { attrs: { name: _vm.compoName } }),
      _vm._v(" "),
      _c("div", { staticClass: "row", attrs: { id: "slide-in" } }, [
        _c("div", { staticClass: "col-12 " }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "card-body card-dashboard mb-2" }, [
                _c(
                  "div",
                  { staticClass: "pull-right" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#addRoleModal"
                        },
                        on: {
                          click: function($event) {
                            return _vm.clearRec()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "feather icon-home" }),
                        _vm._v(" Add Role\n                            ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { href: "/permissions" }
                      },
                      [
                        _c("i", { staticClass: "feather icon-shield" }),
                        _c(
                          "span",
                          {
                            staticClass: "menu-title",
                            attrs: { "data-i18n": "" }
                          },
                          [_vm._v("Permissions")]
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "card-title" }, [_vm._v(" Roles")]),
                _vm._v(" "),
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-hover zero-configuration" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("Role Id")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Role Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Action")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.roles, function(role, key) {
                          return _c("tr", { key: role.id }, [
                            _c("td", [_vm._v(_vm._s(key + 1) + " ")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(role.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-success btn-rounded btn-sm",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#addRoleModal"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.getRolePermission(role)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "feather icon-edit" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-info btn-rounded btn-sm",
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteRole(role.id)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "feather icon-delete"
                                  })
                                ]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade text-left",
          attrs: {
            id: "addRoleModal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "myModalLabel33",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-dialog-centered ",
              attrs: { role: "document" }
            },
            [
              _c(
                "div",
                { staticClass: "modal-content modal-dialog-scrollable" },
                [
                  _c("div", { staticClass: "modal-header" }, [
                    _c(
                      "h4",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "myModalLabel33" }
                      },
                      [_vm._v(_vm._s(_vm.addEdit) + " Role ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: {
                          type: "button",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        }
                      },
                      [
                        _c("span", { attrs: { "aria-hidden": "true" } }, [
                          _vm._v("×")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "form form-vertical",
                      attrs: { method: "POST", action: "#" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.submit($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "modal-body row m-1" }, [
                        _c("div", { staticClass: "row" }, [
                          !_vm.form.id
                            ? _c("div", { staticClass: "form-group col-12" }, [
                                _c("label", [_vm._v("Role Name")]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "position-relative has-icon-left"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.name,
                                          expression: "form.name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Role Name",
                                        required: ""
                                      },
                                      domProps: { value: _vm.form.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-control-position" },
                                      [
                                        _c("i", {
                                          staticClass: "feather icon-home"
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("h3", [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Permissions")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-12" }, [
                            _c(
                              "div",
                              {
                                staticClass: "position-relative has-icon-left"
                              },
                              [
                                _c(
                                  "fieldset",
                                  _vm._l(_vm.permissions, function(permission) {
                                    return _c(
                                      "div",
                                      {
                                        key: permission.id,
                                        staticClass:
                                          "vs-checkbox-con vs-checkbox-primary"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.permission,
                                              expression: "form.permission"
                                            }
                                          ],
                                          attrs: { type: "checkbox" },
                                          domProps: {
                                            checked:
                                              _vm.form.permission.indexOf(
                                                permission.id
                                              ) != -1
                                                ? true
                                                : false,
                                            value: permission.id,
                                            checked: Array.isArray(
                                              _vm.form.permission
                                            )
                                              ? _vm._i(
                                                  _vm.form.permission,
                                                  permission.id
                                                ) > -1
                                              : _vm.form.permission
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$a = _vm.form.permission,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = permission.id,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    _vm.$set(
                                                      _vm.form,
                                                      "permission",
                                                      $$a.concat([$$v])
                                                    )
                                                } else {
                                                  $$i > -1 &&
                                                    _vm.$set(
                                                      _vm.form,
                                                      "permission",
                                                      $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        )
                                                    )
                                                }
                                              } else {
                                                _vm.$set(
                                                  _vm.form,
                                                  "permission",
                                                  $$c
                                                )
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "vs-checkbox vs-checkbox-lg"
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "vs-checkbox--check"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "vs-icon feather icon-check"
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "text-md" }, [
                                          _vm._v(_vm._s(permission.name))
                                        ])
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.id,
                                expression: "form.id"
                              }
                            ],
                            attrs: { type: "hidden", id: "" },
                            domProps: { value: _vm.form.id },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "id", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-primary mr-1  waves-effect waves-light",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm.loader
                              ? _c("i", {
                                  staticClass:
                                    "fa fa-circle-o-notch fa-spin mr-3"
                                })
                              : _vm._e(),
                            _vm._v("Save")
                          ]
                        )
                      ])
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/RolesComponent.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/RolesComponent.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RolesComponent_vue_vue_type_template_id_3a9b6eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RolesComponent.vue?vue&type=template&id=3a9b6eae& */ "./resources/js/Pages/RolesComponent.vue?vue&type=template&id=3a9b6eae&");
/* harmony import */ var _RolesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RolesComponent.vue?vue&type=script&lang=js& */ "./resources/js/Pages/RolesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RolesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RolesComponent_vue_vue_type_template_id_3a9b6eae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RolesComponent_vue_vue_type_template_id_3a9b6eae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/RolesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/RolesComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/RolesComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RolesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/RolesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/RolesComponent.vue?vue&type=template&id=3a9b6eae&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/RolesComponent.vue?vue&type=template&id=3a9b6eae& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesComponent_vue_vue_type_template_id_3a9b6eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RolesComponent.vue?vue&type=template&id=3a9b6eae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/RolesComponent.vue?vue&type=template&id=3a9b6eae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesComponent_vue_vue_type_template_id_3a9b6eae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesComponent_vue_vue_type_template_id_3a9b6eae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);