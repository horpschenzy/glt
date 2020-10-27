(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/TestComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/TestComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TitleBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/Layout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
  props: {},
  data: function data() {
    return {
      form: {
        email: 'test@test.com',
        password: 'Tests'
      },
      loader: false
    };
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      selectActiveMenu();
      $('.zero-configuration').DataTable({
        "aaSorting": []
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/TestComponent.vue?vue&type=template&id=57017f9c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/TestComponent.vue?vue&type=template&id=57017f9c& ***!
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
  return _c("layout", { attrs: { id: "slide-in" } }, [
    _c("section", { staticClass: "row flexbox-container" }, [
      _c(
        "div",
        { staticClass: "col-xl-8 col-10 d-flex justify-content-center" },
        [
          _c("div", { staticClass: "card bg-authentication rounded-0 mb-0" }, [
            _c("div", { staticClass: "row m-0" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-6 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0"
                },
                [
                  _c("img", {
                    attrs: {
                      src: "/images/pages/login.png",
                      alt: "branding logo"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-12 p-0" }, [
                _c("div", { staticClass: "card rounded-0 mb-0 px-0" }, [
                  _c("div", { staticClass: "card-header pb-1" }, [
                    _c("div", { staticClass: "card-title" }, [
                      _c("h4", { staticClass: "mb-0" }, [
                        _vm._v("Login" + _vm._s(_vm.form.email))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "px-2" }, [
                    _vm._v("Welcome back, please login to your account.")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "card-body px-1" }, [
                      _c(
                        "form",
                        {
                          attrs: { method: "POST", action: "" },
                          on: { login: _vm.login }
                        },
                        [
                          _c(
                            "fieldset",
                            {
                              staticClass:
                                "form-label-group form-group position-relative has-icon-left"
                            },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "email",
                                  id: "user-name",
                                  placeholder: "Email",
                                  required: ""
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-control-position" },
                                [_c("i", { staticClass: "feather icon-user" })]
                              ),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "user-name" } }, [
                                _vm._v("Email")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "fieldset",
                            {
                              staticClass:
                                "form-label-group position-relative has-icon-left"
                            },
                            [
                              _c("input", {
                                staticClass:
                                  "form-control @error('password') is-invalid @enderror",
                                attrs: {
                                  type: "password",
                                  name: "password",
                                  id: "user-password",
                                  placeholder: "Password",
                                  required: ""
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-control-position" },
                                [_c("i", { staticClass: "feather icon-lock" })]
                              ),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "user-password" } }, [
                                _vm._v("Password")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group d-flex justify-content-between align-items-center"
                            },
                            [
                              _c("div", { staticClass: "text-left" }, [
                                _c("fieldset", { staticClass: "checkbox" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "vs-checkbox-con vs-checkbox-primary"
                                    },
                                    [
                                      _c("input", {
                                        attrs: { type: "checkbox" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "vs-checkbox" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "vs-checkbox--check"
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
                                      _c("span", {}, [_vm._v("Remember Me")])
                                    ]
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "btn btn-outline-primary float-left btn-inline",
                              attrs: { href: "register" }
                            },
                            [_vm._v("Register ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-primary float-right btn-inline",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Login")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "login-footer" }, [
                    _c("div", { staticClass: "divider" }, [
                      _c("div", { staticClass: "divider-text" }, [_vm._v("OR")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "footer-btn d-inline" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-facebook",
                          attrs: { href: "/auth/redirect/facebook" }
                        },
                        [
                          _c("span", { staticClass: "fa fa-facebook" }),
                          _vm._v(" Facebook Login")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-google",
                          attrs: { href: "/GoogleSignin" }
                        },
                        [
                          _c("span", { staticClass: "fa fa-google" }),
                          _vm._v(" Google Login")
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/TestComponent.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/TestComponent.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestComponent_vue_vue_type_template_id_57017f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestComponent.vue?vue&type=template&id=57017f9c& */ "./resources/js/Pages/TestComponent.vue?vue&type=template&id=57017f9c&");
/* harmony import */ var _TestComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestComponent.vue?vue&type=script&lang=js& */ "./resources/js/Pages/TestComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TestComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TestComponent_vue_vue_type_template_id_57017f9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TestComponent_vue_vue_type_template_id_57017f9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/TestComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/TestComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/TestComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TestComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/TestComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/TestComponent.vue?vue&type=template&id=57017f9c&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/TestComponent.vue?vue&type=template&id=57017f9c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponent_vue_vue_type_template_id_57017f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TestComponent.vue?vue&type=template&id=57017f9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/TestComponent.vue?vue&type=template&id=57017f9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponent_vue_vue_type_template_id_57017f9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponent_vue_vue_type_template_id_57017f9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);