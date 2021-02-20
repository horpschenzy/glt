(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/MinistryComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/MinistryComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
    ministries: Array
  },
  data: function data() {
    return {
      compoName: 'Ministry',
      loader: false,
      addEdit: '',
      form: {
        min_name: '',
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
    deleteMinistry: function deleteMinistry(id) {
      var _this = this;

      this.$swal({
        title: 'Delete Ministry?',
        text: 'You can\'t revert your action',
        type: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes, Delete it!',
        cancelButtonText: 'No, Cancel!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(function (result) {
        if (result.value) {
          axios.get("/ministry/delete/" + id).then(function (response) {
            toastr.success(response.data.success, 'Success');

            _this.$inertia.visit('ministry');
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
      axios.post("/ministry/add", this.form).then(function (response) {
        toastr.success(response.data.success, 'Success');
        $('#addMinistryModal').modal('hide');

        _this2.$inertia.visit('ministry');

        _this2.loader = false;
      })["catch"](function (error) {
        _this2.loader = false;
        toastr.error(error.response.data.message, 'Error');
      });
    },
    currentRec: function currentRec(ministry) {
      this.addEdit = 'Edit';
      this.form = ministry;
    },
    clearRec: function clearRec() {
      this.addEdit = 'Add';
      this.form = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/MinistryComponent.vue?vue&type=template&id=2cb03d25&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/MinistryComponent.vue?vue&type=template&id=2cb03d25& ***!
  \***************************************************************************************************************************************************************************************************************/
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
                            "data-target": "#addMinistryModal"
                          },
                          on: {
                            click: function($event) {
                              return _vm.clearRec()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "feather icon-home" }),
                          _vm._v(
                            " Add Ministry\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "card-title" }, [
                      _vm._v("Ministry")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive mt-2" }, [
                      _c(
                        "table",
                        { staticClass: "table table-hover zero-configuration" },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("Ministry ID")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Ministry Name")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.ministries, function(ministry, key) {
                              return _c("tr", { key: ministry.id }, [
                                _c("td", [_vm._v(_vm._s(key + 1) + " ")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(ministry.min_name))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-success btn-rounded btn-sm",
                                      attrs: {
                                        "data-toggle": "modal",
                                        "data-target": "#addMinistryModal"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.currentRec(ministry)
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
                                          return _vm.deleteMinistry(ministry.id)
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
                id: "addMinistryModal",
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
                        [_vm._v(_vm._s(_vm.addEdit) + " Ministry ")]
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
                                [_vm._v("Ministry Name")]
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
                                        value: _vm.form.min_name,
                                        expression: "form.min_name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Ministry Name",
                                      required: ""
                                    },
                                    domProps: { value: _vm.form.min_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "min_name",
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

/***/ "./resources/js/Pages/MinistryComponent.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/MinistryComponent.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MinistryComponent_vue_vue_type_template_id_2cb03d25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MinistryComponent.vue?vue&type=template&id=2cb03d25& */ "./resources/js/Pages/MinistryComponent.vue?vue&type=template&id=2cb03d25&");
/* harmony import */ var _MinistryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinistryComponent.vue?vue&type=script&lang=js& */ "./resources/js/Pages/MinistryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MinistryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MinistryComponent_vue_vue_type_template_id_2cb03d25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MinistryComponent_vue_vue_type_template_id_2cb03d25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/MinistryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/MinistryComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/MinistryComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MinistryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/MinistryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/MinistryComponent.vue?vue&type=template&id=2cb03d25&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/MinistryComponent.vue?vue&type=template&id=2cb03d25& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryComponent_vue_vue_type_template_id_2cb03d25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MinistryComponent.vue?vue&type=template&id=2cb03d25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/MinistryComponent.vue?vue&type=template&id=2cb03d25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryComponent_vue_vue_type_template_id_2cb03d25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinistryComponent_vue_vue_type_template_id_2cb03d25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);