(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Navbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Navbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Navbar.vue?vue&type=template&id=5dde2af9&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Navbar.vue?vue&type=template&id=5dde2af9& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "nav",
        {
          staticClass:
            "header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow"
        },
        [
          _c("div", { staticClass: "navbar-wrapper" }, [
            _c("div", { staticClass: "navbar-container content" }, [
              _c(
                "div",
                {
                  staticClass: "navbar-collapse",
                  attrs: { id: "navbar-mobile" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "mr-auto float-left bookmark-wrapper d-flex align-items-center"
                    },
                    [
                      _c("ul", { staticClass: "nav navbar-nav" }, [
                        _c(
                          "li",
                          {
                            staticClass:
                              "nav-item mobile-menu d-xl-none mr-auto"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "nav-link nav-menu-main menu-toggle hidden-xs",
                                attrs: { href: "#" }
                              },
                              [
                                _c("i", {
                                  staticClass: "ficon feather icon-menu"
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "nav navbar-nav bookmark-icons" },
                        [
                          _c(
                            "li",
                            { staticClass: "nav-item d-none d-lg-block" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    href: "app-todo.html",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "Todo"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ficon feather icon-check-square"
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item d-none d-lg-block" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    href: "app-chat.html",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "Chat"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ficon feather icon-message-square"
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item d-none d-lg-block" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    href: "app-email.html",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "Email"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "ficon feather icon-mail"
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            { staticClass: "nav-item d-none d-lg-block" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  attrs: {
                                    href: "app-calender.html",
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "Calendar"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "ficon feather icon-calendar"
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("ul", { staticClass: "nav navbar-nav" }, [
                        _c(
                          "li",
                          { staticClass: "nav-item d-none d-lg-block" },
                          [
                            _c("a", { staticClass: "nav-link bookmark-star" }, [
                              _c("i", {
                                staticClass: "ficon feather icon-star warning"
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "bookmark-input search-input" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "bookmark-input-icon" },
                                  [
                                    _c("i", {
                                      staticClass: "feather icon-search primary"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "form-control input",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Explore Vuesax...",
                                    tabindex: "0",
                                    "data-search": "template-list"
                                  }
                                }),
                                _vm._v(" "),
                                _c("ul", { staticClass: "search-list" })
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("ul", { staticClass: "nav navbar-nav float-right" }, [
                    _c(
                      "li",
                      { staticClass: "dropdown dropdown-language nav-item" },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-toggle nav-link",
                            attrs: {
                              id: "dropdown-flag",
                              href: "#",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _c("i", { staticClass: "flag-icon flag-icon-us" }),
                            _c("span", { staticClass: "selected-language" }, [
                              _vm._v("English")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown-menu",
                            attrs: { "aria-labelledby": "dropdown-flag" }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#", "data-language": "en" }
                              },
                              [
                                _c("i", {
                                  staticClass: "flag-icon flag-icon-us"
                                }),
                                _vm._v(" English")
                              ]
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#", "data-language": "fr" }
                              },
                              [
                                _c("i", {
                                  staticClass: "flag-icon flag-icon-fr"
                                }),
                                _vm._v(" French")
                              ]
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#", "data-language": "de" }
                              },
                              [
                                _c("i", {
                                  staticClass: "flag-icon flag-icon-de"
                                }),
                                _vm._v(" German")
                              ]
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#", "data-language": "pt" }
                              },
                              [
                                _c("i", {
                                  staticClass: "flag-icon flag-icon-pt"
                                }),
                                _vm._v(" Portuguese")
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item d-none d-lg-block" }, [
                      _c("a", { staticClass: "nav-link nav-link-expand" }, [
                        _c("i", { staticClass: "ficon feather icon-maximize" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item nav-search" }, [
                      _c("a", { staticClass: "nav-link nav-link-search" }, [
                        _c("i", { staticClass: "ficon feather icon-search" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "search-input" }, [
                        _c("div", { staticClass: "search-input-icon" }, [
                          _c("i", {
                            staticClass: "feather icon-search primary"
                          })
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "input",
                          attrs: {
                            type: "text",
                            placeholder: "Explore Vuesax...",
                            tabindex: "-1",
                            "data-search": "template-list"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "search-input-close" }, [
                          _c("i", { staticClass: "feather icon-x" })
                        ]),
                        _vm._v(" "),
                        _c("ul", { staticClass: "search-list" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "dropdown dropdown-notification nav-item"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link nav-link-label",
                            attrs: { href: "#", "data-toggle": "dropdown" }
                          },
                          [
                            _c("i", { staticClass: "ficon feather icon-bell" }),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "badge badge-pill badge-primary badge-up"
                              },
                              [_vm._v("5")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass:
                              "dropdown-menu dropdown-menu-media dropdown-menu-right"
                          },
                          [
                            _c("li", { staticClass: "dropdown-menu-header" }, [
                              _c(
                                "div",
                                { staticClass: "dropdown-header m-0 p-2" },
                                [
                                  _c("h3", { staticClass: "white" }, [
                                    _vm._v("5 New")
                                  ]),
                                  _c(
                                    "span",
                                    { staticClass: "notification-title" },
                                    [_vm._v("App Notifications")]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "scrollable-container media-list"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "media d-flex align-items-start"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "media-left" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "feather icon-plus-square font-medium-5 primary"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "media-body" },
                                          [
                                            _c(
                                              "h6",
                                              {
                                                staticClass:
                                                  "primary media-heading"
                                              },
                                              [_vm._v("You have new order!")]
                                            ),
                                            _c(
                                              "small",
                                              {
                                                staticClass: "notification-text"
                                              },
                                              [
                                                _vm._v(
                                                  " Are your going to meet me tonight?"
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _c("small", [
                                          _c(
                                            "time",
                                            {
                                              staticClass: "media-meta",
                                              attrs: {
                                                datetime:
                                                  "2015-06-11T18:29:20+08:00"
                                              }
                                            },
                                            [_vm._v("9 hours ago")]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                ),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "media d-flex align-items-start"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "media-left" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "feather icon-download-cloud font-medium-5 success"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "media-body" },
                                          [
                                            _c(
                                              "h6",
                                              {
                                                staticClass:
                                                  "success media-heading red darken-1"
                                              },
                                              [_vm._v("99% Server load")]
                                            ),
                                            _c(
                                              "small",
                                              {
                                                staticClass: "notification-text"
                                              },
                                              [
                                                _vm._v(
                                                  "You got new order of goods."
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _c("small", [
                                          _c(
                                            "time",
                                            {
                                              staticClass: "media-meta",
                                              attrs: {
                                                datetime:
                                                  "2015-06-11T18:29:20+08:00"
                                              }
                                            },
                                            [_vm._v("5 hour ago")]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                ),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "media d-flex align-items-start"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "media-left" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "feather icon-alert-triangle font-medium-5 danger"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "media-body" },
                                          [
                                            _c(
                                              "h6",
                                              {
                                                staticClass:
                                                  "danger media-heading yellow darken-3"
                                              },
                                              [_vm._v("Warning notifixation")]
                                            ),
                                            _c(
                                              "small",
                                              {
                                                staticClass: "notification-text"
                                              },
                                              [
                                                _vm._v(
                                                  "Server have 99% CPU usage."
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _c("small", [
                                          _c(
                                            "time",
                                            {
                                              staticClass: "media-meta",
                                              attrs: {
                                                datetime:
                                                  "2015-06-11T18:29:20+08:00"
                                              }
                                            },
                                            [_vm._v("Today")]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                ),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "media d-flex align-items-start"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "media-left" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "feather icon-check-circle font-medium-5 info"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "media-body" },
                                          [
                                            _c(
                                              "h6",
                                              {
                                                staticClass:
                                                  "info media-heading"
                                              },
                                              [_vm._v("Complete the task")]
                                            ),
                                            _c(
                                              "small",
                                              {
                                                staticClass: "notification-text"
                                              },
                                              [
                                                _vm._v(
                                                  "Cake sesame snaps cupcake"
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _c("small", [
                                          _c(
                                            "time",
                                            {
                                              staticClass: "media-meta",
                                              attrs: {
                                                datetime:
                                                  "2015-06-11T18:29:20+08:00"
                                              }
                                            },
                                            [_vm._v("Last week")]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                ),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "media d-flex align-items-start"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "media-left" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "feather icon-file font-medium-5 warning"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "media-body" },
                                          [
                                            _c(
                                              "h6",
                                              {
                                                staticClass:
                                                  "warning media-heading"
                                              },
                                              [
                                                _vm._v(
                                                  "Generate monthly report"
                                                )
                                              ]
                                            ),
                                            _c(
                                              "small",
                                              {
                                                staticClass: "notification-text"
                                              },
                                              [
                                                _vm._v(
                                                  "Chocolate cake oat cake tiramisu marzipan"
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _c("small", [
                                          _c(
                                            "time",
                                            {
                                              staticClass: "media-meta",
                                              attrs: {
                                                datetime:
                                                  "2015-06-11T18:29:20+08:00"
                                              }
                                            },
                                            [_vm._v("Last month")]
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("li", { staticClass: "dropdown-menu-footer" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item p-1 text-center",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v("Read all notifications")]
                              )
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "dropdown dropdown-user nav-item" },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "dropdown-toggle nav-link dropdown-user-link",
                            attrs: { href: "#", "data-toggle": "dropdown" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "user-nav d-sm-flex d-none" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "user-name text-bold-600" },
                                  [_vm._v("John Doe")]
                                ),
                                _c("span", { staticClass: "user-status" }, [
                                  _vm._v("Available")
                                ])
                              ]
                            ),
                            _c("span", [
                              _c("img", {
                                staticClass: "round",
                                attrs: {
                                  src: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../app-assets/images/portrait/small/avatar-s-11.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                  alt: "avatar",
                                  height: "40",
                                  width: "40"
                                }
                              })
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown-menu dropdown-menu-right" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "page-user-profile.html" }
                              },
                              [
                                _c("i", { staticClass: "feather icon-user" }),
                                _vm._v(" Edit Profile")
                              ]
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "app-email.html" }
                              },
                              [
                                _c("i", { staticClass: "feather icon-mail" }),
                                _vm._v(" My Inbox")
                              ]
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "app-todo.html" }
                              },
                              [
                                _c("i", {
                                  staticClass: "feather icon-check-square"
                                }),
                                _vm._v(" Task")
                              ]
                            ),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "app-chat.html" }
                              },
                              [
                                _c("i", {
                                  staticClass: "feather icon-message-square"
                                }),
                                _vm._v(" Chats")
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "dropdown-divider" }),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "auth-login.html" }
                              },
                              [
                                _c("i", { staticClass: "feather icon-power" }),
                                _vm._v(" Logout")
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ]
      )
    ])
  }
]
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

/***/ "./resources/js/Pages/Navbar.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Navbar.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_5dde2af9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=5dde2af9& */ "./resources/js/Pages/Navbar.vue?vue&type=template&id=5dde2af9&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_5dde2af9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_5dde2af9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Navbar.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Navbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Navbar.vue?vue&type=template&id=5dde2af9&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Navbar.vue?vue&type=template&id=5dde2af9& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_5dde2af9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=5dde2af9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Navbar.vue?vue&type=template&id=5dde2af9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_5dde2af9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_5dde2af9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);