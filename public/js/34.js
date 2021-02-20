(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ReportsComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ReportsComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {},
  data: function data() {
    return {
      compoName: 'Report',
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ReportsComponent.vue?vue&type=template&id=87a92eb2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ReportsComponent.vue?vue&type=template&id=87a92eb2& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "slide-in" } },
    [
      _c("title-bar", { attrs: { name: _vm.compoName } }),
      _vm._v(" "),
      _c("section", { attrs: { id: "multiple-column-form" } }, [
        _c("div", { staticClass: "row match-height" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h2", { staticClass: "card-title" }, [_vm._v("Report Form")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("form", { staticClass: "form" }, [
                    _c("div", { staticClass: "form-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Date")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "date",
                                placeholder: "First Name",
                                name: "fname-column"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Duration of Service")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Duration of Service"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Name Of Service")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Name Of Service"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Start Time")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "time", placeholder: "Start Time" }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("End Time")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "time",
                                name: "End Time",
                                placeholder: "Company"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("h3", [_c("strong", [_vm._v("ATTENDANCE:")])]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12 col-12" }, [
                        _c("div", { staticClass: "table-responsive" }, [
                          _c("table", { staticClass: "table table-hover " }, [
                            _c("thead", [
                              _c("tr", [
                                _c("th", [_vm._v("Male")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Female")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    "Children\n                                                        "
                                  ),
                                  _c(
                                    "small",
                                    { staticStyle: { "font-style": "italic" } },
                                    [_vm._v("male")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    "\n                                                            Children\n                                                            "
                                  ),
                                  _c(
                                    "small",
                                    { staticStyle: { "font-style": "italic" } },
                                    [_vm._v("female")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    "\n                                                            Teenage\n                                                            "
                                  ),
                                  _c(
                                    "small",
                                    { staticStyle: { "font-style": "italic" } },
                                    [_vm._v("male")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    "\n                                                            Teenage\n                                                            "
                                  ),
                                  _c(
                                    "small",
                                    { staticStyle: { "font-style": "italic" } },
                                    [_vm._v("female")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    "\n                                                            Total\n                                                        "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tbody", [
                              _c("tr", [
                                _c("td", [
                                  _c("input", {
                                    attrs: { type: "text", placeholder: "Male" }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Female"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Children (male)"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Children (female)"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Teenage (male)"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Teenage (female)"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Total"
                                    }
                                  })
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _c("h3", [
                        _c("strong", [_vm._v("MEDIA MINISTRY DETAILS")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Name Of Minister")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Name Of Minister"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Title/Topic")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Title/Topic"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Duration Of Minister")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Duration Of Minister"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Verified By")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Verified By"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Signature/Date")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "",
                                placeholder: "Signature/Date"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _c("h3", [
                        _c("strong", [_vm._v("CARE MINISTRY DETAILS")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("No Of Guests")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "No Of Guests"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("No of New Members")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "No of New Members"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [
                              _c(
                                "small",
                                { staticStyle: { "font-style": "italic" } },
                                [_vm._v("From guest list")]
                              ),
                              _vm._v(" Born-Again converts")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Duration Of Minister"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Holy Ghost Baptism")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "Signature/Date",
                                placeholder: "Holy Ghost Baptism"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Verified By")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Verified By"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Signature/Date")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "",
                                placeholder: "Signature/Date"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _c("h3", [
                        _c("strong", [_vm._v("FOLLOW-UP MINISTRY DETAILS")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("No Of Guests")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "No Of Guests"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("No of New Members")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "No of New Members"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [
                              _c(
                                "small",
                                { staticStyle: { "font-style": "italic" } },
                                [_vm._v("During service")]
                              ),
                              _vm._v(" Born-Again converts")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Duration Of Minister"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Holy Ghost Baptism")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "Signature/Date",
                                placeholder: "Holy Ghost Baptism"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Verified By")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Verified By"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Signature/Date")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "Signature/Date",
                                placeholder: "Company"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("h3", [_vm._v("Special Ceremony")]),
                        _vm._v(
                          "   \n                                            "
                        ),
                        _c("ul", { staticClass: "list-unstyled mb-0" }, [
                          _c("li", { staticClass: "d-inline-block mr-2" }, [
                            _c("fieldset", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "vs-checkbox-con vs-checkbox-primary"
                                },
                                [
                                  _c("input", {
                                    attrs: { type: "checkbox", value: "false" }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "vs-checkbox" }, [
                                    _c(
                                      "span",
                                      { staticClass: "vs-checkbox--check" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "vs-icon feather icon-check"
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", {}, [_vm._v("Yes")])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "d-inline-block mr-2" }, [
                            _c("fieldset", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "vs-checkbox-con vs-checkbox-primary"
                                },
                                [
                                  _c("input", { attrs: { type: "checkbox" } }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "vs-checkbox" }, [
                                    _c(
                                      "span",
                                      { staticClass: "vs-checkbox--check" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "vs-icon feather icon-check"
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", {}, [_vm._v("No")])
                                ]
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("h1", [_vm._v("Table is supposed to be here")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _c("h3", [
                        _c("strong", [_vm._v("PROTOCOL MINISTRY DETAILS")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Verified By")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Verified By"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Signature/Date")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "Signature/Date",
                                placeholder: "Company"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-12 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Notes/Observations")]),
                            _vm._v(" "),
                            _c("textarea", {
                              staticClass: "form-control",
                              attrs: {
                                name: "",
                                id: "",
                                cols: "30",
                                rows: "5",
                                placeholder: "Notes/Observations"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _c("h3", [_c("strong", [_vm._v("CHURCH SECRETARIAT")])]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Verified By")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Verified By"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Signature/Date")]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "Signature/Date",
                                placeholder: "Company"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-primary mr-1 mb-1 waves-effect waves-light",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Submit")]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/ReportsComponent.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/ReportsComponent.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportsComponent_vue_vue_type_template_id_87a92eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportsComponent.vue?vue&type=template&id=87a92eb2& */ "./resources/js/Pages/ReportsComponent.vue?vue&type=template&id=87a92eb2&");
/* harmony import */ var _ReportsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportsComponent.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ReportsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportsComponent_vue_vue_type_template_id_87a92eb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportsComponent_vue_vue_type_template_id_87a92eb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ReportsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ReportsComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/ReportsComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ReportsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/ReportsComponent.vue?vue&type=template&id=87a92eb2&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/ReportsComponent.vue?vue&type=template&id=87a92eb2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsComponent_vue_vue_type_template_id_87a92eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsComponent.vue?vue&type=template&id=87a92eb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ReportsComponent.vue?vue&type=template&id=87a92eb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsComponent_vue_vue_type_template_id_87a92eb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsComponent_vue_vue_type_template_id_87a92eb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);