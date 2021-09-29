(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/UnitComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/UnitComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/TitleBar */ "./resources/js/Shared/TitleBar.vue");
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    'title-bar': _Shared_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    units: Array
  },
  data: function data() {
    return {
      compoName: 'Unit',
      loader: false,
      addEdit: '',
      form: {
        unit_name: '',
        id: ''
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
    deleteUnit: function deleteUnit(id) {
      var _this = this;

      this.$swal({
        title: 'Delete Unit?',
        text: 'You can\'t revert your action',
        type: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes, Delete it!',
        cancelButtonText: 'No, Cancel!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(function (result) {
        if (result.value) {
          axios.get("/unit/delete/" + id).then(function (response) {
            toastr.success(response.data.success, 'Success');

            _this.$inertia.visit('unit');
          })["catch"](function (error) {
            toastr.error(error.response.data.message, 'Error');
          });
        } else {
          _this.$swal('Cancelled', 'Your file is still intact', 'info');
        }
      });
    },
    submit: function submit() {
      var _this2 = this;

      this.loader = true;
      axios.post("/unit/add", this.form).then(function (response) {
        toastr.success(response.data.success, 'Success');
        $('#addUnitModal').modal('hide');

        _this2.$inertia.visit('unit');

        _this2.loader = false;
      })["catch"](function (error) {
        _this2.loader = false;
        toastr.error(error.response.data.message, 'Error');
      });
    },
    currentRec: function currentRec(unit) {
      this.addEdit = 'Edit';
      this.form = unit;
    },
    clearRec: function clearRec() {
      this.addEdit = 'Add';
      this.form = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/UnitComponent.vue?vue&type=template&id=de907700&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/UnitComponent.vue?vue&type=template&id=de907700& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "layout",
        [
          _c("title-bar", { attrs: { name: _vm.compoName } }),
          _vm._v(" "),
          _c("div", { staticClass: "row", attrs: { id: "slide-in" } }, [
            _c("div", { staticClass: "col-12 " }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-content" }, [
                  _c("div", { staticClass: "card-body card-dashboard mb-2" }, [
                    _c("div", { staticClass: "pull-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            "data-toggle": "modal",
                            "data-target": "#addUnitModal"
                          },
                          on: {
                            click: function($event) {
                              return _vm.clearRec()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "feather icon-home" }),
                          _vm._v(" Add Units\n                                ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "card-title" }, [_vm._v(" Units")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive mt-2" }, [
                      _c(
                        "table",
                        { staticClass: "table table-hover zero-configuration" },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("Units ID")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Units Name")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.units, function(unit, key) {
                              return _c("tr", { key: unit.id }, [
                                _c("td", [_vm._v(_vm._s(key + 1) + " ")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(unit.unit_name))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-success btn-rounded btn-sm",
                                      attrs: {
                                        "data-toggle": "modal",
                                        "data-target": "#addUnitModal"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.currentRec(unit)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "feather icon-edit"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-info btn-rounded btn-sm",
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteUnit(unit.id)
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
                id: "addUnitModal",
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
                  staticClass:
                    "modal-dialog modal-dialog-centered modal-dialog-scrollable",
                  attrs: { role: "document" }
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c(
                        "h4",
                        {
                          staticClass: "modal-title",
                          attrs: { id: "myModalLabel33" }
                        },
                        [_vm._v(_vm._s(_vm.addEdit) + " Unit ")]
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
                            _c("div", { staticClass: "form-group col-12" }, [
                              _c(
                                "label",
                                { attrs: { for: "first-name-icon" } },
                                [_vm._v("Unit Name")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "position-relative has-icon-left"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.unit_name,
                                        expression: "form.unit_name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Unit Name",
                                      required: ""
                                    },
                                    domProps: { value: _vm.form.unit_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "unit_name",
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
                  ])
                ]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/UnitComponent.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/UnitComponent.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnitComponent_vue_vue_type_template_id_de907700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnitComponent.vue?vue&type=template&id=de907700& */ "./resources/js/Pages/UnitComponent.vue?vue&type=template&id=de907700&");
/* harmony import */ var _UnitComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitComponent.vue?vue&type=script&lang=js& */ "./resources/js/Pages/UnitComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UnitComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnitComponent_vue_vue_type_template_id_de907700___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnitComponent_vue_vue_type_template_id_de907700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/UnitComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/UnitComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/UnitComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UnitComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/UnitComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/UnitComponent.vue?vue&type=template&id=de907700&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/UnitComponent.vue?vue&type=template&id=de907700& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitComponent_vue_vue_type_template_id_de907700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UnitComponent.vue?vue&type=template&id=de907700& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/UnitComponent.vue?vue&type=template&id=de907700&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitComponent_vue_vue_type_template_id_de907700___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitComponent_vue_vue_type_template_id_de907700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);