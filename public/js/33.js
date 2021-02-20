(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ProfileComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ProfileComponent.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    TitleBar: _Shared_TitleBar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    users: Object,
    member: Object
  },
  data: function data() {
    return {
      compoName: 'Profile',
      loader: false,
      form: {
        first_name: '',
        last_name: '',
        other_names: '',
        dob: '',
        address: '',
        phone_number: '',
        email_address: '',
        image: '',
        id: '',
        password: '',
        old_password: '',
        password_confirmation: '',
        username: ''
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
  created: function created() {
    this.form.first_name = this.member.first_name != null ? this.member.first_name : '';
    this.form.last_name = this.member.last_name != null ? this.member.last_name : '';
    this.form.other_names = this.member.other_names != null ? this.member.other_names : '';
    this.form.username = this.users.username;
    this.form.dob = this.member.dob != null ? this.member.dob : '';
    this.form.address = this.member.address != null ? this.member.address : '';
    this.form.email_address = this.member.email_address != null ? this.member.email_address : '';
    this.form.phone_number = this.member.phone_number;
    this.form.id = this.member.id;
  },
  methods: {
    formatString: function formatString(val) {
      var first = val.replace("-", " ");
      var second = first.replace("-", " ");
      return second.toUpperCase();
    },
    onImageChange: function onImageChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      return this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var _this = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this.form.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    submit: function submit() {
      var _this2 = this;

      this.loader = true;
      axios.post("/profile-update", this.form).then(function (response) {
        toastr.success(response.data.success, 'Success');

        _this2.$inertia.visit('profile');

        _this2.loader = false;
      })["catch"](function (error) {
        _this2.loader = false;
        toastr.error(error.response.data.message, 'Error');
      });
    },
    changePassword: function changePassword() {
      var _this3 = this;

      this.loader = true;
      axios.post("/change-password", this.form).then(function (response) {
        toastr.success(response.data.success, 'Success');

        _this3.$inertia.visit('profile');

        _this3.loader = false;
      })["catch"](function (error) {
        _this3.loader = false;
        toastr.error(error.response.data.message, 'Error');
      });
    },
    upload: function upload() {
      var _this4 = this;

      this.loader = true;
      axios.post("/profile-picture", this.form).then(function (response) {
        toastr.success(response.data.success, 'Success');
        $('#EditPictureModal').modal('hide');

        _this4.$inertia.visit('profile');

        _this4.loader = false;
      })["catch"](function (error) {
        _this4.loader = false;
        toastr.error(error.response.data.message, 'Error');
      });
    },
    currentRec: function currentRec(member) {
      this.addEdit = 'Edit';
      this.form.id = member.id;
      this.form = member;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ProfileComponent.vue?vue&type=template&id=a6324606&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ProfileComponent.vue?vue&type=template&id=a6324606& ***!
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
    [
      _c("title-bar", { attrs: { name: _vm.compoName } }),
      _vm._v(" "),
      _c("section", { attrs: { id: "page-account-settings" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-3 mb-2 mb-md-0" }, [
            _c(
              "ul",
              { staticClass: "nav nav-pills flex-column mt-md-0 mt-1" },
              [
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link d-flex py-75 active",
                      attrs: {
                        id: "account-pill-general",
                        "data-toggle": "pill",
                        href: "#account-vertical-general",
                        "aria-expanded": "true"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "feather icon-globe mr-50 font-medium-3"
                      }),
                      _vm._v(
                        "\n                                General\n                            "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link d-flex py-75",
                      attrs: {
                        id: "account-pill-password",
                        "data-toggle": "pill",
                        href: "#account-vertical-password",
                        "aria-expanded": "false"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "feather icon-lock mr-50 font-medium-3"
                      }),
                      _vm._v(
                        "\n                                Change Password\n                            "
                      )
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-9" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "tab-content" }, [
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane active",
                        attrs: {
                          role: "tabpanel",
                          id: "account-vertical-general",
                          "aria-labelledby": "account-pill-general",
                          "aria-expanded": "true"
                        }
                      },
                      [
                        _c(
                          "form",
                          {
                            attrs: { action: "", method: "POST", action: "#" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.submit($event)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "media" }, [
                              _c(
                                "a",
                                { attrs: { href: "javascript: void(0);" } },
                                [
                                  _vm.member.image !== "" ||
                                  _vm.member.image !== null
                                    ? _c("img", {
                                        attrs: {
                                          height: "150",
                                          width: "150",
                                          src: _vm.member.image,
                                          alt: ""
                                        }
                                      })
                                    : _vm.users.image !== "" ||
                                      _vm.users.image !== null
                                    ? _c("img", {
                                        attrs: {
                                          src: _vm.users.image,
                                          height: "150",
                                          width: "150",
                                          alt: ""
                                        }
                                      })
                                    : _c("img", {
                                        attrs: {
                                          src: "/images/logo.png",
                                          height: "150",
                                          width: "150",
                                          alt: ""
                                        }
                                      })
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "media-body mt-75" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-12 px-0 d-flex flex-sm-row flex-column justify-content-start"
                                  },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-primary ml-50 mb-50 mb-sm-0 cursor-pointer waves-effect waves-light",
                                        attrs: { for: "pictureFile" }
                                      },
                                      [_vm._v("Upload new photo")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "custom-file-input",
                                      attrs: {
                                        type: "file",
                                        id: "pictureFile",
                                        accept: "image/*",
                                        "data-default-file": "",
                                        "data-height": "200",
                                        "data-max-file-size": "5M",
                                        "data-width": "100",
                                        "data-allowed-file-extensions":
                                          "jpg jpeg gif png rpg jfif",
                                        hidden: ""
                                      },
                                      on: { change: _vm.onImageChange }
                                    })
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("hr"),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "account-username" } },
                                      [_vm._v("First Name")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.first_name,
                                          expression: "form.first_name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "account-username",
                                        placeholder: "First Name",
                                        required: ""
                                      },
                                      domProps: { value: _vm.form.first_name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "first_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "account-name" } },
                                      [_vm._v("Last Name")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.last_name,
                                          expression: "form.last_name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "account-name",
                                        placeholder: "Last Name",
                                        required: ""
                                      },
                                      domProps: { value: _vm.form.last_name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "last_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "account-name" } },
                                      [_vm._v("Other Name ")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.other_names,
                                          expression: "form.other_names"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Last Name"
                                      },
                                      domProps: { value: _vm.form.other_names },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "other_names",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "account-name" } },
                                      [_vm._v(" UserName ")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.username,
                                          expression: "form.username"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Phone Number",
                                        required: ""
                                      },
                                      domProps: { value: _vm.form.username },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "username",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "account-name" } },
                                      [_vm._v("Phone Number ")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.phone_number,
                                          expression: "form.phone_number"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Phone Number",
                                        required: ""
                                      },
                                      domProps: {
                                        value: _vm.form.phone_number
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "phone_number",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", { attrs: { for: "" } }, [
                                      _vm._v("E-mail")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.email_address,
                                          expression: "form.email_address"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "email",
                                        id: "email",
                                        placeholder: "Enter Email Address"
                                      },
                                      domProps: {
                                        value: _vm.form.email_address
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "email_address",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", { attrs: { for: "" } }, [
                                      _vm._v("Date of Birth")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.dob,
                                          expression: "form.dob"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "date",
                                        placeholder: "DD/MM/YYYY",
                                        value: "",
                                        required: ""
                                      },
                                      domProps: { value: _vm.form.dob },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "dob",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-12 d-flex flex-sm-row flex-column justify-content-end"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-primary mr-sm-1 mb-1 mb-sm-0 waves-effect waves-light",
                                      attrs: { type: "submit" }
                                    },
                                    [
                                      _vm.loader
                                        ? _c("i", {
                                            staticClass:
                                              "fa fa-circle-o-notch fa-spin mr-3"
                                          })
                                        : _vm._e(),
                                      _vm._v(
                                        "Save\n                                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: {
                          id: "account-vertical-password",
                          role: "tabpanel",
                          "aria-labelledby": "account-pill-password",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _c(
                          "form",
                          {
                            attrs: { action: "", method: "POST", action: "#" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.changePassword($event)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-12" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", [_vm._v("Old Password")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.old_password,
                                          expression: "form.old_password"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        required: "",
                                        placeholder: "Old Password"
                                      },
                                      domProps: {
                                        value: _vm.form.old_password
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "old_password",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-12" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", [_vm._v("New Password")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.password,
                                          expression: "form.password"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        placeholder: "New Password",
                                        required: ""
                                      },
                                      domProps: { value: _vm.form.password },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "password",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-12" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("div", { staticClass: "controls" }, [
                                    _c("label", [
                                      _vm._v(
                                        "Retype New\n                                                                Password"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.password_confirmation,
                                          expression:
                                            "form.password_confirmation"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        required: "",
                                        placeholder: "New Password"
                                      },
                                      domProps: {
                                        value: _vm.form.password_confirmation
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "password_confirmation",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-12 d-flex flex-sm-row flex-column justify-content-end"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-primary mr-sm-1 mb-1 mb-sm-0 waves-effect waves-light",
                                      attrs: { type: "submit" }
                                    },
                                    [
                                      _vm.loader
                                        ? _c("i", {
                                            staticClass:
                                              "fa fa-circle-o-notch fa-spin mr-3"
                                          })
                                        : _vm._e(),
                                      _vm._v(
                                        "\n                                                        Change Password\n                                                        "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]
                    )
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

/***/ "./resources/js/Pages/ProfileComponent.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/ProfileComponent.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileComponent_vue_vue_type_template_id_a6324606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=template&id=a6324606& */ "./resources/js/Pages/ProfileComponent.vue?vue&type=template&id=a6324606&");
/* harmony import */ var _ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileComponent.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ProfileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileComponent_vue_vue_type_template_id_a6324606___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileComponent_vue_vue_type_template_id_a6324606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ProfileComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ProfileComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/ProfileComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ProfileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/ProfileComponent.vue?vue&type=template&id=a6324606&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/ProfileComponent.vue?vue&type=template&id=a6324606& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_a6324606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileComponent.vue?vue&type=template&id=a6324606& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ProfileComponent.vue?vue&type=template&id=a6324606&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_a6324606___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileComponent_vue_vue_type_template_id_a6324606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);